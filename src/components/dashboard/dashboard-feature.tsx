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
    "5gYVd5AvY74vw3ic9AZMBHS2FMc5gPzB2ZXBn8a7Lm9GnvrwkBgrXxvrjWfGUa9QFTQFcn9F5jcfVbUumRCsfVrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unz7LwcYd5TRpyedsFr8xk6Ls86VKrpYYvCvjirqx7EEFY28sJA3QPtHdC5FuBNvpd3jNt7aUHKUbHTMNqSP9Gw",
  "key1": "xiJS4aFWVVTLK43JRjax4vyZZFAcdAvauxAjQ6s4RxdJdksbbm33dgwWrckR86zKsZDuAgUKJdbMLrgCfWE4xqj",
  "key2": "4H1HnzL5MyJSfPFHL1vzUczfxBJnmZ7V83i9vFpNaQ2Xu5KLQ33u5t8QhPmjjaySdDjrZ4g61o4p7tgmHtQ2A1nf",
  "key3": "3aeHj89vPEkvfasEawHPKBUx7wHMzmreFmHstwAWww4bu1F34cHjfwtxMhzE4DyJJYR7UBRz7Wr51dkpMKtqRzDT",
  "key4": "3osLdSPAoRoboUU6d9DginALMigGU9L6TXaYUXLxoYHrZwxezrtzkSqzUmTv9R1fQWL4ecXhDAB25xgknUMAQvgK",
  "key5": "2gWXpzjQiBBzsKxQyPuGvfzPj5jLGAYxokqBJ7BDHmUCxYqvpxCN1NbzHKUH1LnMBj7FBbDcinynvNDX5atPxkx",
  "key6": "3PRZeTKj2T3n1Kdsa3TFdzEtbgoxpHeqNKu77o9bFDLk5ury582ADSkjQt7QPNaFWiChvxv7dGdgVFZst7m74Pg9",
  "key7": "n2V4yVgZfiZWNetjDdLzbfYgb6cSLHNTPW8ijb8XuinZ9VV7TsrMeMcH1jPuqKoDXKmQDv55RGV3MdNwmVZp4QA",
  "key8": "3jd3suPKg5NgCRNRvzZEaP4M515EPJEiREKyaTRkbA6WufjKv6Hk2EgZBxQcdKe1YJJ5DAu52VG2sW8pGATnfDwg",
  "key9": "3QtFbkL3nZd47tsH1yxHZH4si6kHm1Hy9mNiJNeqPg9ci5sBS1fuVSKxrR9t6qZKePE8dXGNK2QwjCmfGGxtdQZS",
  "key10": "5M8pwCfoCvFEajLpGeEKbJQ98Vf8toszVbo1avBapFepuoFmpnq8LLpqbA8nufFzqkjnRVBvFM8isnS9RWd4W7qP",
  "key11": "5gC3xYbFYgK7CvNb2aVc9AnwB2jgwWaLmaB8iGYbqbP9hGgWfvRTKLyHiQ15Ptqb8Kr7xun8VwS5ZBLEL3LxmV4a",
  "key12": "3UEBg6UdT7W8jRm4WH7jQZ24T61EF5Et7TprFmvE8dDyFzzYVhAff2K8dC8ibQGpaSRxygQ7QmJuDWbpSE6ogXgi",
  "key13": "3ftp67F8oSQJnCXfWgsMSpcuXqH84EBAQEjA51yDXmFKFjXfuxthPgeHnK72vckHv6zNB3ueJq1iNQnrejFyy41U",
  "key14": "vg7tAnRhS9AsVEEY1dKP1ky7D83r5HLaFTDtXYWMiuEbbzrhWN4dMsYnW77bBcBtrQsfNMRVzLoidvizm5roDvL",
  "key15": "4hh5eTiS2VmWc95ZLXKGvrgMH61GUVv7o7hYfhqDh3WJgRFkpoyoUVd4kgtNanyAVxMiBf24iEvLUvZjrvi3e4G1",
  "key16": "4YxRMFZ1ZP25gGEdCw5C7NdDapMy8AnhTsX69cyauvn9YfpwguqM5CobTdjGoQoyi7MSemptxfR3Kmb5m5nwUrcR",
  "key17": "3D9WW8T6MXLtsypyngsWJtj8LkqiehEV8hBAk7yoykAQY4wVXivyTxSNyGPdvSwToHk3sctajSsWAS1D1M6KFSft",
  "key18": "roirD2LNFjQZSJSvVw32zFZu8BSLWNZpZD6brkmyvgqaaGsQDEVtvphVhXgakDCH2FY6f5Zf4BE2JEZtzhH2iwQ",
  "key19": "NuoRQ4Kf91XmSxuPs6csm5vEykzVHhnVQBJRLpn7qosYnSK7Nw7WqQRnzTH4pwckdf4cjGbUqYQr8cgkk9wkb1m",
  "key20": "4WbiXzRgnwGeyyJ9YQPg7TufgZnAEw4iCMJszcSJo1r5J8FR5j9kGF9JbHH1r8PJYJUKsHw3aR4DiTqqTLVWHXfD",
  "key21": "5uDUgtPT5JrVZVdVSUvTzZqan1vmoisYJS1LLZDeLy4PmZs4BKBBCiNCqSKnHUwXkM4531uVT7j852H3Q4yrWvW8",
  "key22": "4KXeseFFu9xn5g4c9ikz1PdiWQcwWquVGYhVYa6Qz8GD8oxzEaufZdnZPF3ZbK2EVen3AG8A3qMLe1bnUjv7h9XN",
  "key23": "2ktFXrLC6HNNKqsssCgeDvnJyMk7vCsPjQw8Jh7WSspX1hxgMvaAB99Eqf8dtXzDuX5d11hjU67woMLkQF5e2YXi",
  "key24": "iP4Gx4hX5sWAA583sizLKf57DtoEepn2rrqg2wytPjsd18VFCcsDUBENXUyu66sje9xFVK8mSRgPUT9qcpRKC1H",
  "key25": "3zcrhrAYNA3HZV9bvQboAZ7GqftKqXhmVrLXAjwoEJEHASqRpw58x8hkj7biBLHTy2ragFTeyxNfkNqRyHtRFE1F",
  "key26": "24J2muYbQHBQbBJ29aACsK3rLNXRC378VivGxZQWNruJVWeNGJA23LVAWiRfTRXMRde7GNMa3nxzLtyGW9p4GQJ6",
  "key27": "3P4GcZU66XssT629XnYFDmgNAKtzcnKrVvVVnjnsNuEiuNb2QAjEf8xs9Vvd97MhbYMG6DYW6FKDSbAhTcERjGbx",
  "key28": "4xpi6Xw6TEyY7pmMLAVV1GQWWp3vJEV73V9t4UgLtW4sQVXTWAKEaTrYU69kcEdmoNufnHTbcjrEgk4TNSS3kjUQ",
  "key29": "45orQy1oxJKE3KZGSxCyDaySmu3VycHJDCDjP2MnMj5Ft9e1cAQDdohxu8e3zsjtt6qLkqacNb3crNg2Jm5YXg5Q",
  "key30": "3uDc7eThxJCp55ZQuqWy8YF6j86Rkz4u5j9LeKUYQTZ3h72gz41Ey7UsRdbbT8zDSMTERUGiEy4qZnAY2n2ChvN4",
  "key31": "2XBoEFiM7jh8B4a6iLeKWNmYKi2GfT2PdKe9zftZwJAErcUPeCbGJnckc2VicSNN2dhY4UDmejuVuhgBE8yQamCF",
  "key32": "5HUsogEntzKYZGnHzjf9qkFPiHKvCtY8w3Ac1UooYbrEb19SyaYsk3EfkASSsxo8ebSVxnPCfupgYEJsWMQyh14e",
  "key33": "4Us5rbgJtjMbzjj9obShnNEVE4uVmEYwumVW9HgWPwyQMkSPs2uoVmivVfmZASjQjzVpzxSAHSJia1yPXMikuhAq",
  "key34": "7qJfiW8dKSr9dw1AczBB1M8AUpkJtmxBB2vk6sxyZExGWbZt1rck4JDtWr2H143meqm67Sj5sGqELC7QWtu3Hnh",
  "key35": "3cCsrRctuACtdSvZDouXxBksC4yNK2t6Pce42UbLeVT7a1c4b8UxWCFJbUtX23ejcAA3EcXbtsCwUWYn3k6fLwrb",
  "key36": "CgBvMFpZGQoW4kyk9x62itpm4BSE8XwyFgiSbstvASBq1LVzU57rcJCRePxnrwCSa9A8LgPPYhHHrvTThBj2JKC"
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
