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
    "BUXdpN32gUvit5GgZb3NU1ctGky258PhVr3H8uBThdjW8g5QsBgPvwQKmbXx2Lvy7Dg61XCJKthR9iV238z7tfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRdv9Mc4sfXNV7seXqUvGVFY4gjcyereavkp8ycQGtVxztqBpw9TUDVm2jFhWEgqrZ4oQP6CgiWSPt7ya5Ph5h8",
  "key1": "hrha1ewDNA8NDWDxj9ZQSW5SesCC2ZhiahunSf41Dd99H13n1s7ShHwdUFkxq8KuSbZurcoUXui6vGDBn8ZjsYR",
  "key2": "5nVX8r3joZueSnm7CBzWPGjv4x4Xuw2G5BvB4eni6HxkCkqvCMh8Rc9eTgrCx177Q5SLzhLECyvdhKBDXLZQwd8U",
  "key3": "5fMmq7RxWgud3iZLzPJaj6jTvMUWhANrj5xDm5TxVzcpW1JEeMSTpHGzaVEJ7N4FaBagP1t6WQFC8U4LrcGbNhNj",
  "key4": "3kDX695UdJRiCCcmyfMiZemtjZfyPNNVnPaXAJXopdqk2ndPnrt9L2mZpsdSeXmMr4BbcZ3C585rzsn3QsxkFDrX",
  "key5": "4wmnmsxXA6PSPNWJzMDBaHnRS6HEbE2ES9BT5TTcAzgXZmq2U9UF4mGbS5Gie9fCJL6nwvQu6A4G8sGRBdSpm8ns",
  "key6": "4yBXw9qXXVjpU3uqAFQE5HY2P1xHwzeCd8XMqmQhibHkxampfewt6hfBr9XSpbDAAQmgYj2H1bu1QYWDNTzR6uEE",
  "key7": "3RpcLfhNceh9RNmNYJFnAQfH3ChhV5WZnRn7ypUucXUZ9THvcWYoJxmGn97DWJ8eEj7MRGiHvTMDXYdTeSxbH6Zd",
  "key8": "iavscGPKPLNXVAPjUnhZhgrY148mQU2KPZah1VsgyrC3VY3gHMigfBHaVaiAbwTtsTzfYVMmHix2R6vHujDh9hM",
  "key9": "tkLYsn5KujZsLDgFeS8SJ4etYmQEpiTjudLUWudorsjJR3j4BTESFwwPBefSx3ePF16SfV8FejZn6ngSM1nRWXT",
  "key10": "fMxs7vSJywqzvjX6L8HjnbqrTEMKScE1RcoeAq8KKgyc5jjs6gWinfbJJQdQq87aYHx1jRgjGjyhrg4shCnZr6f",
  "key11": "4sosynpi1VwQswpAhhtYWtetsUrvGrfVWpLYY1NSWdq3ckF4Y5D7NoXxKhhJHgi15nRke6Rn52pFAAaDsgHqMJyv",
  "key12": "48Rr2Bhsawftm9XVuTYPuQZpDJhCUWnU2hfUa3kwWwJFtwWvRvNXEFStdqiPLqDQEhuQnNkLN5XWJZjYb5WAUawm",
  "key13": "4336Bm6ZgF2gVe1FF52VG26HFhByHDsqKM9zuCaoUm3stj8HCMCw3P88CCdq7TD3vPomKoJAybFqcHwB87bPwhkA",
  "key14": "4hEN9jDjyxDCMU2h1d1a3hyNKwcCryKxbgpt71iRs3VdYJSdYPGaDTNMxwMteZPEBEqQJMRrK4Xre9HBGb86PAo2",
  "key15": "4Zze5j8BhSH6yKeEMrNgRXd6r54cHrZZDf9j1cy5tGdEWNuQYx4i8GkwvNC3RXkcvkKtmZzw3ASUjZJAf7bFbcBj",
  "key16": "5broMxftdpQy1BzSgUyvbdiw3eHmVAdmEgPYMcioqs4sbc6jQrgJnu9DCXbELbnSHieLxbibGmaRdyvB5UUq4M8r",
  "key17": "2zM23DWZsV8SGNowHUbyVCqcdnXdtgw3gqTPKMtEcSYKsjp3pTVShfrGpk9dNdZ7tMdhVTFmDbMDRz45LwiWLDkB",
  "key18": "2untTSVUi7ZpeA3g1DkjSr2GCcUchyeZgDPCW488PCWpXwmK2kSyxA3E4AgrTnmWXJJhVAoTQw3hnxYMrQ4LRFLZ",
  "key19": "3J4D5sHQJHxoT987okRbm2NdpMmvAJVZ1ZtoT5YJkv1T4BtWaZwopAZaY2GT26ReDVw2fHuuBgSBdVqSgq8Ppqv1",
  "key20": "7vi8RsfUtNBBtwpQH6gXs2bfHCoUzt5vkwDr2o5xbcWV6wXjvUuRvN2t6AtXaVUKMGNthZ13dJDUgmeLUNS7eVR",
  "key21": "4ePKAJTMtPFHcvxRYenWGaE4m96YrnyCfu63k3MvjZeig4LLAkB6AT3hqbHYgTqzdWFP1KAXHAuyVyjGQG2MaJ4w",
  "key22": "i3mnGCQgJVVSSBDSyDwNKrokVEiGXzr6EPUrs5AWbRuRiRkME36bgovydqctpDhkTb7YF1smGNEBfryEx8BiFBZ",
  "key23": "5xsYFvCciKErVY7TdzZ9dz7rsLP7xg6hnVUhBNzWwM3UDpXuuCr2pfbBiftwbMxUPJYaGoh5kJchz9Ee8nZFcfg5",
  "key24": "2G2H84CeU38gvEYDhXtoVAzocbeBwtsc1H3hPutF65ud2z75U8pJFze5LoxN1HQ3fEA9LFJ7bzApiWpxvsXm1mea",
  "key25": "xMy4ck2fEZPCBjjg3rPGjjHHx5akCo1ZGEP3kqtvzYs5GLq4Z8Yz6oqMRhJu7b74MDF1VkSQevbQvKEknu1wt9r"
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
