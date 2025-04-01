/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2pbiRr74RgzD54zaVKJVtgryASJNhnc3eaqWX25C5qwuyHL5dfKRJkaoxTHonr239jkZyzS1eZ98YV9UHLS8X6pP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZWWkv44q9wN9Lf9RvB99LkUHFbd9Ewk4PSHrieURYjq6kQDdusdvTFs6pFB2RYrCuq2NYMwoEkzdCYbj1Nu71dF",
  "key1": "3vxGFApgAh8EUSQLgYneVcTFZAXdGCrnrvN6Jd41ZNV5ArEhc81J3T5rtrdbatZkPqn4ZRLh1xtzGoVZ4D4g2wrC",
  "key2": "55J9i9m4FWuYNxBqJEnAeywmeravqrpYT9ZJtM2HJ9k6MNCQcbdBzDKiprm3U968znGWDkZSPMXLWRCV6wuWNSgr",
  "key3": "XCWecQBD9q5VKzUm2GgWDwpgnJaYCMCakPMAgpHgH5DNKUqE8Jv3A6eX9E39E9NnhBhX6K3fpffB4bpXynHsaPL",
  "key4": "39UrqLFswpoGD8p7NeATUJcXpTmYvbYszHyR8gb4pt4WJqgjKCbAwGS8mz9vtTM1AaDooCX1sRZGon8ZWFoRDXWz",
  "key5": "QpGa9AXR6vdehdpwswLjPv7f3zPC9vGH5b5B7MFrWEDNiDgeUBSzZhAQyftLYJUqZH5KM5EhBmxfP1rLsCwvWZ6",
  "key6": "5hFghjqy75AYMgi32ZvTVEBs8yzRAepj42MENpoJd6betXSaCG4AdrxcLjga1pry7Qs78i59QF8eESeetisspfpV",
  "key7": "2f3pX56ijryMymzZ35jaZPbnaQ6f2EkzRxrRznyZjE4nFT5pqow2wnUQ7yeXwhVj91ehu4dEuCsymfaF3dKHeWVe",
  "key8": "5QiNECqdBBsrFQrs4ijwukYyiMztnfWafhwyzNvg8XFFEgdQ7rDBinLEwG8dqGgBGPDScoJNVRfkdy1P9kToFKxE",
  "key9": "5uDy9sFH8h8bqHhk4RtQVzxKZPCGaN1kNN8P1wAQzMmuNtu6c9r7sjnih1XkUZHDWkBCxgQygnscUJK61jDuJTqD",
  "key10": "35tvDBh5zRXKLQpqRv95NWW92WWVKJ7jiQhffu9jzPrHrnv7qqXBhvwiweFJn6DMpe2kfn9w1kFVySfRAdbpD7UT",
  "key11": "48RqzMN1EiJYcwzm8hQG2YtF4xeA7Mehmv7XeDpqBM1DNNkmBV5AMdF2JBjZE5SQBAB8eDcwTWvkBo2XrcpuqAKN",
  "key12": "4pAbUXH2x4CqyFGBzN2E7cUZBGuCLYrMe1Jr9CMqbDCv1UvBLPxgR9Hc5nw1eXXacpreFLuP88CM6TqUzPrRqcvA",
  "key13": "2LYdPc7Z35EcTjpbGBH5bs3Z8CebbLkTy93piBZL2YTMfU8TqA8XBJSrPR9UFwo4Y3nRhwhwwUg8NTFwUCZRXuzb",
  "key14": "27Z1iayYeb6rE8j5iJwhVSVx8TgLt46zeFLNT3Zrs4xmRQ6RVkiNMwegaFo4aWpwSBrSFdxjftVTrm1e1GHCewEd",
  "key15": "3LGF6re2z9899ED7mxGpr3kB7cHLsf2n22BoYm5h8prpTEB5EuKPcWo9NHShbcHK472oQRFUvhWr2oWiYu4n8iVP",
  "key16": "3gZaENox5YxEiyy2KvUR3CM2XU9q5ULEiZJcSY6UWi8SXsUDNYEAcYT94UCdRK5sYKWUgJhY4rdJk12GK6TWT8cv",
  "key17": "3fevPqu3swwtmAjSuj3gL38ZqbPNqqmV7MDEbStmSMiQ6xsh2jjgAp2sigCtFEeHEACAKca9XjYgcz3fjVHptNeu",
  "key18": "44KFRXaqrchRf2N7aEeZVjvXjuExyvLgkapFckQmR8V6zNJDMkWsw7AJuPAg5e9V7x4syEXrdVDNYUqKmzXhGLeS",
  "key19": "YKvxLuUcs5ih7fnMD9Na5GyLMSKb4q99GHsg76WiE4H8zKG8wk2MjyodnwHz42AzCANTDG2c2V87qA5X8FPT1vY",
  "key20": "4CHRz2d2PWEubm7VsitQiqrMjpBC4Ms3UUgsHxFKZpS341mVZEJwRBC9FGd7aGhqdN8VeFNkufeuKeXg9YvVzUMn",
  "key21": "4A7s4JEdG1T9yNgmpFiixNSWnux13xa8G28TuAXDRMB4C867Y58vCiYAL6NDpCcTJFzUEMNQgBYoCLdYdSntGqqe",
  "key22": "35cactuyy2mWGJYWEmQQSe7NN2so7DvEM5EhC2cjkL95mwtCFEiHZ3Biwg8V6zxC3oFdt5tprSSsh7ZBwyc6FXH8",
  "key23": "5MuRk9WtC1tiCdzciGnJMBZv4P3oK6isx4gRG46EnGdFXWeQ19oDpwUndkp3Ni6171FvX651oExBxnwWFKi2uyiM",
  "key24": "Y6NJv4ypdJat15iHZJdAaL3cKUb82KgqaKAf7d5Qz3yuUPPnvEMg6BBimh3kY9hCmGk2ngDbQK22h5NZfSkxtNu",
  "key25": "ieHpPy5ZKgXKr2DBxbsM2z1T1JaibdZQ58oihJgVA5Mz9H5uce8f9y4aoeATfi83sZPcvMt5MkNM2aWdzG5jd1Z",
  "key26": "nJZuGfbcApC1osRMb8G9xMkK4smKSBLpjRki7JdhVpffVptKBDcB4fCKr4xddrT4eqPye8JF1BfzvqDJ9gQPjea",
  "key27": "2ixjZADWjZW8fFZ6WvWx64pEAqdvHtHsAASjWYBVFNmPbbS3K6vU4Y6L48y6gYKTsef392ZyytMo9ceFbvS6v8a5",
  "key28": "KtmK74aKGehBzNWrm3UeeaZuWNREtP4ccwiEr8Df5EAcYvBRBkpZu1kr4rS63WCJnbcJdrbWGLUx7Lwd7Sriu6G",
  "key29": "47TBoZ5GcLuwoyFxRze5bnP9wpKzCpPuxmqyZaJXajUiGmkGJwvtXn11wV7dFK7qCwYSMjDGkBMNnxp9Sqnb3atw",
  "key30": "4ewb9x1sRwuXq7aKJcL24psfBUTLVRUyYmJqbJA8s5z8WNAbp3ZEE5is7fuqXdDkHYrHEKWx3wB5qJfQfUiAJKip",
  "key31": "2JxTDX6EGzsaiLuCCStYRwpkP7p17TQ94rMnhEGmSR4pk4TxMQjWv4Gx7xe6h9LiJQxPzubLWUz4JgVFUbeGUENJ",
  "key32": "3oweWTStPHWh4T92ek4K3BgmJEfYnk4dhF1fdecbhcPpffx3UfQAVaqZevf4UAwExnSyBnD3pzisqJswCFYuGUn8",
  "key33": "3VXcqPBNHdwBRvHg7nEANa9Y5D37AnE9XhW65KmMpErtuUcb3b6kMwafqeQ8M1KxcfAC1pteQeqLcgLPBeEwj24m"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
