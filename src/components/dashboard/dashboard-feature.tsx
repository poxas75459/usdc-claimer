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
    "HMCBaQHjgmh3x6uAdABZnNQ51weUep4rBxr1GyRpXxgSB85akXjHCxDt58ehotSvwyG2YW1wvADNeA6p7nYn71A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqvjHRGa1VUWUgyPWkz6TKvnJMNXAa5BEd7Qps41RR7x21YWqFJL2MX1WmgY7jzS3QvGfyLjLt5d99N6qxXdWgv",
  "key1": "396g3VeAAoLQ2i9fkX7Z2YFZReAuYGjpqNAiFKSMJSSA9Th6AZQeQvq4HejoeXWnvmkGbRGQRkzRDbB32kCnAdNp",
  "key2": "eJYc6osa5QQe2rh6avm716gUARzWurKEJ5MWsuPgWF9sRtS9iRykPZFyaK9eY31hZtw6XVChxTHjUqsXzLUEyJV",
  "key3": "4iCbBRYDQg14gW1ZEvmzmnJdFryq6XZFh3Wq68YiyEtaR2W9wmteENiRMsWXoJRAJ7cmK8JW6dzngrsEdHhVAcLu",
  "key4": "4AA6efJKCdLeNdmpoDaCp3hsZfVkGCMVewD6puzYBojg5C9p7wR5ZmvornSmP4TKPNjJcwPcViFKC7HWLRwe1gqh",
  "key5": "qLo1EjLAEfGUwrzXgqBF5iCrvnF7qAyM9FNZT7bGEKmVhdvdM6MLX8b1jKjq7mtDH1tb7NVqxXuoirt3dmMQ5ho",
  "key6": "36RwV19dG7Dw9zujkKjo9sUW3r4fyKF5HyKrce7J6wPjcCxXYkbkRStDjLBeTvezmH6REHZQNQXqoBEqeX35RFid",
  "key7": "3eHAWaZBgPE1vyWWx4eiMP5CMuSmPLAt3keAN6ErfY8v1j8jnstq6zE25z4SaBuJFeSdg6KgGxJjjLUNYMcnJAin",
  "key8": "426Bra1yZLsci2cFH8TaB4Ae5oT4FZs95R4njCHoW9PYQk2GAHtkpPLSAGUehYgfWKx3G3c91HyGGgxFuTUNDPP1",
  "key9": "32i3DPXftAt3jLhKdmzxkrMRqrQumtQxqhCT4dJrco6bLTHSccisS7j6a1rc776gBKLtXi8tqTAqXGPhVyuemWxo",
  "key10": "3Hvz39e3AD6zg47n1AW36hQFaAPkXhQzuR7P5yQd9R5SZZwdzg4cXexH8BTFTnJi5sUHaoaxSRwUm2Uy5YhAj4dQ",
  "key11": "3v4j6Kg9N7CkM7ddWcyyaFXjfi1b5PFYYzDoTezkBNZfiTTyeiNnXqhj613JP8jy8dcAp8o1ETi5oiaA8aq4RHNN",
  "key12": "61Ph53hp5FBfC5jZe84gK8VJ7eGMqSG56WevNXrJ9zW1dc7vfjg5LBGudnReFUT5fbc2XmUkozRbm8VGkoFhM2TW",
  "key13": "4QAuGZLRLWqZkx7PzKxf3yMLmPomGPBzTyRwMtVnV2ZixdLMvmC1thy3waZwzJpVBgMAYCPTrC1NQ2LxKzVq7FhN",
  "key14": "5BfPKcqBivCcT77NSN1RkbtzpvF8K5C61t37q2zJgQAbaPJpK67amcWmw4qbj6ikUtch3AZhe1WkEnX4zPWGKnBf",
  "key15": "5ARqz8yRe3AWrHSgwLXat8umuXCHSsnPsvER4kHove7xzaenxK2cjhwBJRUFELkJyRspebzbfSjPP3EdgerKuWbW",
  "key16": "5fjAqmbnbnpH3QHmhJg5FSHLb74j63YSbCA2P1h9VEawFDFau8eYczNaM5j3js8BroR2NY4Ee1sePSdcd66EreMQ",
  "key17": "YjytX8JMkXydoJmiBRi6FG5ohwzDA8qK32aCaTWL5ZkR9B9cHFoA1PBD8egcCxSK85iyMW2PbWyEiwjqh6FpSoX",
  "key18": "5RXSEtxHHqrss8yBAuUTus6wLxcKjVkSyVB7rNJo8r4Biy8PkrgfdFZeD2PBNh18mw9YELuKwz1fpqSxq4YGTLKC",
  "key19": "4hVdkgmtdktu4AsYaGoEPH5xiSKC9NsCsQ2xdHPVizcmoZ8qWdMYNewrkra8MtKuiUXeAr8dQEYjvhdk5PmGwmVM",
  "key20": "2RbWwpqFKcKYbv13TJngmkVZwdbjmSWCsmkEdGhPrQabEfTssZCVcWCPKn8sov14syESojcuGFXZjQP5fzRAudVN",
  "key21": "3phdvGL2X2zeKwwiS3sXrzHstojdHySUE6wdsaA8vgdSwFZRBcRCLw1bUfvL8aphH6tkAkZYHnrjK9St2jZv4sWq",
  "key22": "g7u2FwEZ4DuFe8NRjEjk2WruQ8g2w3qgy8NtnTVp73tWmGSry3vGHxLJvuHYPf7oh5rAJivRd3TLPNuk7qLvyqG",
  "key23": "2p9PeZTD8Pctyy3ffoWQjNfYbb2y7nYGxf4g1XE6m3saPxQpoR3SgwQQQN2MQ8JDMFjgSWpRJZrfCtRrV6LVh7cj",
  "key24": "pT1WADhDz6PBFaAjtaq8XpehojR6nwD4SfXVEH6RPHbkLkfocFCzSXtTLq6iXDwhawSwQSPSu67oRqZexkgnCsv",
  "key25": "4SfKVK7ybBy3zxxZPUoxnrxQwBL2YNjXjbjKt9grt35zC9XMTkSFLQf1ghhZhtaZ3bmB7mqoptKsSXcGDx3vZtWm",
  "key26": "43k1ADiSaatuYx858ZUHQsxGq99V4JXu3cLdUVXBYZJzAqJ4KDdxRBoKznT6c1nbBXduxxnjgvcNnkHLCJtwCYo7",
  "key27": "4kSaqkAt1jADX7Edpk5qzvCdhntnGqp8ip3Lw4Zj2J4R8srArnpZsgPwTcMfRU7ZXf6N7gAFvDZmoh63EV3s6ihu",
  "key28": "5F67gu3o6TEDbZmNzkZ59arLwtYRXXCVtRYoQiZqfcFNfCjnoxq4vBKPyfRPMKB6XQTtn5VXSGf3KxiVGo5uVTr8",
  "key29": "4LBhLcR3FJToJVXPawtQ62GLTunpQrgrLP52GJ2WkkdxW8hqY2odi681uj9zTDAb7hMACGupsVQVdw4NA3hySHeM",
  "key30": "2nGTmnZKugVfxnTcXy3eyGad71XoGsvgrpZK1KdqTZRRP8Wo5SYraPv94iRLioY1aBQDoYDB1MHcgmqYTU5VEbVW",
  "key31": "3pG72zz2witHWgrU9j7hTctQsZh9vzyN6xQ11wmeDew3RNfkaRQB3kRyjxpwg9id7pSwhSVdLqNY3VYsnSo9Vaq",
  "key32": "2mXyKurpBxhiyus2XA3DZgtbfQqxDbsW9yRHehbWGBE3Pk4PtsUNNXfi5dkEmFAc5TYi4nMzvfnugdnYGGLjutzR",
  "key33": "5GykDXYwnkbcwg2gxwEbMsBLCDRjTDAeSxXPRvJeZER1zkmALs3pFqS6pbDwQ1aUQBK226qTcTR1RNMdek1qMAk5",
  "key34": "3tsQfdSSp9nM87QeS4iw9ozp16FDBTFRjUqxuAtGTjMCQUbD3HvGcvGfuFwdTWojjRN5tR1nEz63HnmERZ5zBgG9",
  "key35": "3ypTGhPXjxLjfp1t8iXdtLLUedgPctA7TucthsLFYw849kxboBbi8a91qnX7tVD3MQqDoTju1brJ1PMMwAFNzWf8",
  "key36": "4vc52wnw9dVbDnK8FXfCnQYJuEQs3Sg88wpMZv5a3xQojfivrchRUdNHnWVsCcSpMMceL5Y6qwbmKfKkNXAM1rjw",
  "key37": "dRiGtru3C5hZeR7q8DeupS8Zq9Fjaz52tgbjsVU7xJ8NpSThvuux6rVo8DiMaCL2rLg6qxBjDRfvf9dVuh9JDZF",
  "key38": "5d91m9NjYtkVLT7G2GkJQUy5ZoeHxHa9o76teWcTbjZzsxJb4sPEyLysDjb2CXPHXymU4azNhMG8xfKoDsJE7PaA",
  "key39": "5Ua66kbz3QuHNWCaAknjxdUryLGoNrfdxE9Z18Kk1KyQn79Q5oD5YdeEXRLMANckmE4g5RRiUMUwcUYAzLTJN2sF",
  "key40": "2ryHAtBqLdqSoJ8htBqTXA9qqrFzRRJ95dKpa1rmF8PzjVU78VATQihS2v8SANbsGfXsdeS8ZtTp8ZmUKCTmPxtN",
  "key41": "5mtVbvR3HcEKdLAnYAHgeLr39qJNWHPrEzo1qTnvxgJsb6WwoZR8jkhFgerCwjAjfTrtq1Vt17mFnzTSowA65ZHv",
  "key42": "2xAiMnkyiJZmCC98yhutK6rWvXjV8wGtriRkoeymEcRuB8pnbC9iqdpHr3NJn8GKSdZRg7syLiVGYKYTQDXmKK4N",
  "key43": "4XarhHepXifNoL8EBzYWLRaWpFcBPL6LyfitgnnKhrk7xD23Civn7VzNhRUEYDbhtMSCuTVdYnntDbkuip22VeJo",
  "key44": "UobKZii3da7SG2FzH2kcokcbjNLUXf3soe1hkLfSLDGMNoqk9XxaB4zqhDoomSVYF2wNcGaGRE3MgKaCgUtPyQN",
  "key45": "2RLLpjvxecGcstht9MHfyXUja47MjVp3tgi8ztAZ7QEU46ksNaXC5uNcn8vmHHbUCWtNF4GK8JRCYdJkGR6aR9o7",
  "key46": "592uPTMFNBs14WZdrwreoF3kFs6vYuRh7fPHCfR9GBWmPQYnJjQ9Yjpc5vNgifHvwMmVGk5ZEbRvzLsmSzwGU5Cb",
  "key47": "3FD5So7XGkt4Vezn5f74o4XxJXpzPr8LGWRhBi6ZhE1rjHJSwxz2ZY2TVntXMKodW3yoctkm7Gv6CY8N2LmozCTS",
  "key48": "4auodPmuw7Px8xpafGkbMEokEq5eyuCupFXkp4tCEKYQgDNY5nCLRADR7bL5dPcRH2iryPqHZChdiqGbJpBc3oge"
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
