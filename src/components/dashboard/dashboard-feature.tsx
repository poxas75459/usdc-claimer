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
    "3vwJ2KdSvGDXkjhDFYzEaD8kz88fHpeFm34Hk2VxoHKhyZFRQYeFh9BFqWRMwS5Fu5hPaGoxUaiSDNnd3xbBUFku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FW9vrDvW9feQa61Urt3rZUasXKfKHnfnV5Eqgrpx57Z6Jv3UDYd256v9J6gekEe3chqKZZmssT5B1275Gj7V3MV",
  "key1": "3ZuwqVfkTx4UafJ5AqZhZjPF13GJ9vVd413P8j9GMhFufhg3ypDRcePccnUq58h36ZrpZxnhooHTz5zCkxULbddN",
  "key2": "4FgmhRdW7sChRvBLw4P6LdHbHVS3W3yskUoTmqsGty1QDnRFACZeBTp7Ca3muTXNZ62WVcovnocBGWfXrtSKvJPV",
  "key3": "5az2VMgUa4XWY6eVHKWKWXHtWeywASrgsDJNhegMuCHZER7ZJ7jqqnxWtQpQErztWyNDnQAj43mmNZVYpDKRxu2T",
  "key4": "5ZMHYU4oDBdNkbTnbvgVEQWm33yYFEE2XhSkPrQ9UURGgwvtXNmLtwUXmD4qF1WK4JkCzbQaeJunsZdJFKsRKe4Z",
  "key5": "3PH7QbVAKrvLjUWAcqnDv6CcUKZ1BpLyhYFFEvQPxivrfeiJCWPonjzPcohSH1iiSSGzB5wqLCHGCbdGmWzB6DjQ",
  "key6": "2dfJYa17PoHDjor9j83JouZGrYA71p8MyeJhQdd44Hvgg1jhmvosAEjDAotuSgrVnoiW1jupYrpZeHMsaScuHcE8",
  "key7": "4fDx7p6qiYdvn1amECazj3t8RqksXCFwyWurfYdWkAV6awjHdd1o7TtZ8Ta8hA3z5nvsvYQGQcLTxVtRWXk2aAuz",
  "key8": "52yMW42wFXQM5GoVHqHkiYtYqqxWNPfTaycYrtf9AX7bfMuCesSZ8WKNYs7z9Dg5dJPpQV5A2E4aDZj1XnoCp71g",
  "key9": "oKtGF1QofE8L8Aok2fZB6JUcprHMoiqGAUEDF1pvEb5fM1xrzrPEaLrBmw4SFSqDs6THWBGpekJQRqQu5XWmi4H",
  "key10": "g7nB49VDQ7dZhTTTJmDEUQGBAKsbqk8mLzSPu3bZtSM7hKfv5BoZ8LHrtXyoS5j7UxPUDvjXVJULyrhjd4ag5gg",
  "key11": "8RM7JSg3VwjBKNJTEzAEqKnrGjduETMhrXnoi4SnCkyWZNyNJacxhmcMCLe5mTyptPbmvtSFFHyZDQD91VxrSMz",
  "key12": "4oEpMhE9mcyFgvXqokL6jJgv5goQfZbYqFnhPu12c7Mevsp8ypngYwPw91H8F6RZgcLjswENePdtb5ndSKcDcB6V",
  "key13": "29ozwLYT3WwpzSFc1s4aHjvn3f2sSosbjguQk4Re4oy3p2cucnbqhw5iqm5kHb2K7F5bXCXsQFBHrfPV6xCACBia",
  "key14": "5xmjqV5kZWoWEGvuCD1pJmsz3YapiD2qbtLCeFyBZ65FKacMeJygBrJ2htfuTJAcpPYfCRjUVejvqm8cs3rBR6gn",
  "key15": "26XbeJMFxvbJsDEhwBUCL6CXpXiYe77XQ7V1gK2mERLRc1s2ZEFKQy9YQ9xhENeubVfz6nZKbqPqZhxnxiCfp14A",
  "key16": "3vmhQNoGmmahk7S3JGmkZ1P8QrTARp7rVTk4dMJaDiZkiC7jptNkWdq5QDowJ9NLQXV8JLsGv1wMb9vatSUGdGdC",
  "key17": "2W2pi7oPk8623HKyMUktgRyhurfnMuEX1oTb72A1WVgr4DMqyHGLuFxr2QqPJzERqdNQZ6zFPiMXgscLFf89PEH7",
  "key18": "3z7ng5tUfnoJUr1ty12um993gdeTDoBLWwwEx1XUz3JNvkAB3zb1wmQtNRg3bgArfi5vjS9Cu4dTjkeMK3DT9cib",
  "key19": "2qWAmxbY61ESv76xTJNY6E5reSxgF55dspwoeVVo7221NuqqPtocUnQw7FU3zxw4SsUEjBERCxQcxj3qogeqMVYh",
  "key20": "Wup7GNsy8g7mtwgWPFQek2Dsz4dF3unLB26RgaSqS1nMCjJJbwsdXjnb27HQuCp74JckNQjq84Vtx1MnDnJyXEc",
  "key21": "CE7ASV1sxiQSCXbdbqixABtS3d6RyZrqzSFtfA6BSVyDThVEfWMuAZRoWjegmK8TJhC9veUMbxDGhgSBNBZ6mAC",
  "key22": "3qSDwHDNkn586h9xPS1T9jYMYuEGxo1yBTuX7FPQaCHMxFjPPRGKxeP81pCqkvTo9ybyfjvC8N1aRTKguBxovQhi",
  "key23": "3iQNHorvuRBEfYKBb6NKcAectsayshcPsZ3xCJ1Mki3SBTCx7vysJbi2jsTMTeqrsvkXc5eUyvJv22FbErxnCXuN",
  "key24": "2F8AUW8GZHLGUUSw5nmYotUGLMUcYfXkXCqxnDKbSBC29ozpnAhytZYhWmLfetQwT9SyDqpyhzRNamsLqDz4YzbT",
  "key25": "2VUFpDC18XRozNyhmVvkvq9jQtG2viEk6exKrXEw4k9eSRtD7B2HmvXE8GkrZ8VaFTGSFUVcJv4PeVGcCZaFfb3A",
  "key26": "5QAtjeQAGHKDZsMcfzQEduQLB6PUM3gDJe2q6b5dqrVcvqK3TdR6Chu44EcgiTDak1kQtzTF8L21NKEvDvLTPPYM",
  "key27": "m79PFcuWNwAswgqS3SwHuPBwh8ALbmgSwfN1y5GYe1Nu33ed1EbWHASaykjZHA9PctxmEgk9e3vfh3Kgc2hNqBq",
  "key28": "3DLGo6YLN5BoaEyKKxNVFZk5QqDAi4F7UDup1fWgb8Wkk7e4mLbjvDU27NzatJHNF5YXV2QWqQ6Kc5CHFz9yesRR",
  "key29": "6487GzCE9M1ZyvAMRxarYc6jE2B1XZQqXTLa4jc23dwqvLVR4Qhv9k2XxU9knDaaBXsuFdw4KYFFFxoa9X7f3Nxd"
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
