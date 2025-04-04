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
    "GJLiAoTtYxwsXAECXY4ARHyzKN7xyTk5gMLdjFEdM6dkMuAWB64xLgs8ez4ZYsBJ6jX9iSLjASYeevJr3Xtp7cW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7Edipq9NXSES4j3FU1E8PtaFQA8UsDHw8LPyUAggoKQCfeDWrW3FMMTUfF7k1VoYXH4DyyFmzNc2rc33Fx7qF5",
  "key1": "5ZC6y9hoNmKqtCRwT4ZYps6ntJnLRJL383dyat1ctEy8W8gYWkuvLEQ8pXDbs5AUhWSaJQsSaa9ijMN5LYLfQGEa",
  "key2": "5o2mATFdFvgo2a4F6FfyXMAfyETGyGuGQj3MD3YF8CC82WsjTnkB8GcpCZbGQnfXgVURMD2EGmiwaBoXvg3Bj3tY",
  "key3": "nqhxakLbbRGiNmy9ZkYYNeyPC9JBaJLgyNTJMr7bAazY58XAiCQ2BxDkay2XYMqp6GzuUR5o76V2jVPcBaWiGMF",
  "key4": "3y6kde6KSxx4baA5nP9MmLCqWGXULhTwrAtS1JrFSY7sXLAy5Fy9jpTwPkNxxbBvcu4mW62dUUGPjTf4yfePFMRo",
  "key5": "3DdNxTKH8CqfghDmTghSVA5fXZacpaXPW5sa4Nr6hZu9v6WxNuN68oWmD9GmCBY5Y2fjp1khoVebBkZK9YbVrp7P",
  "key6": "sqoUjLubVxTasJeccei6RL7KgoYFV5zdQkk1qWJujb8ApA4oaJG9PC3skxGcMiJxVCs13FgEtqxBG6cM7mXNCRB",
  "key7": "2TjJXhWK7GZGVMt7dobcFAjQYAxhT2bWR7GDwRpTtLmA8YX5mVrZEToEEVHSJcJjaKXYbQkfXgViS3dBGdwv4xCK",
  "key8": "238bwpjpnFfmQHdvWQ4HoTriDP8BKaGh8w8yzGSRNXsFwX1PAmE4MiZBtuPut4ttGeTU8hczYbxLXWWY46VRm4mq",
  "key9": "4f9WgXNVpXfPqRHdBkPpRRWbU9jfSX6aP2ziTF7ngT6NAFJgU2zm1jvNL7eRk3JCiwzZxUnbANrf6ftKU3ud39vN",
  "key10": "3VCr2ek9roXSnMns75r6hehXTjhWm9zojR4JdaWWZif8y2YJVU8KgFSTjSauj3Fbs1RPEw1SKwF7dLwnFaF2AGqG",
  "key11": "5RUsXxfwBUJWFPppyeRFXEZDcEMyQThSs2pd6miDbTwfE1HPMbpKneFoGb9rmbbatBfXTiyUzrWPEZqSQhuiFGy3",
  "key12": "25CLBTWPx9S8k8cMpbiyquSJtGoiCZZcJdFWQut9NAdAPGqcUjASfAZKRMPrWSnFDRMkwLN56CPiwEiuRDjKFgAr",
  "key13": "5sx4MKMsSodF7aPeYLVzdepFWWTw5XfySDQHzop2N9FJjjvT5nbnHTzpEQ3YVT6LHqvvuHnJ6TFe871e782AjxEN",
  "key14": "2zYVq86t25dTG6tofQJ5cN2EwsyqTaNC3UiN4u4raK3p8gdN8aZh34eAVcy5tb3EcEKxBcqQhCY8goFNdMUb1UVz",
  "key15": "41DJGqkn3RUNKLbdw1fmNiTb3q598r8Veu2ZaWfVj9uhSUxwCTVXG5sMiyzb1RwnhhkbbLXdo99F5Z4Hctt8n7h8",
  "key16": "2iJZyBVXmG6jycYyRXK2qSVKc552Z5sSKvUCwAKAySi65BmH89FFkKbzfTitB19AxRnMgn4ydgpubdS48PWc6NyK",
  "key17": "3RCukHnJ4D7tBDQ4LuWFujVJGbCyGnLGrGbeuPWVoRc72L5Lci1m3E7SWPFt6Qeg7SJAArfK3xygecGUjNDKfXLF",
  "key18": "4jpJeFJrw4qdMf3nymWgVeJaEJc9S5eiRZ2pbwtMWJofd7tXTZBdKuK1t3HjQrQDNqvbypWNDhHHdX3G6z1UBcaV",
  "key19": "5g7QYYvxL2vRzWstpixR35nnKvWa8mKirsNwsvG1ikoscRW8i9QW2vwhTg7titV1B4ZS8J5qzxiebJGNwW1AGqPb",
  "key20": "4g4LQemwgXJBcf2vQF5Xii4SgTuPwnHd1hxQiyHXUjduFWY1dys6bog4aRd5LczYwNwJoaWs7ucBwjxtZoPZxrqc",
  "key21": "33TSst12QAxzpdxqoJqomVh7cWBpdRH7JDnT5pLzTHVTh2TR85BZsxHYH9ppN3Tci5zXn4GTYtm9ufZQxKGysPmV",
  "key22": "5SAKwnLM7kx9Lr8SzzgVUhmTtVZm9Ee2XBE7ZVxBfdmQ4vuvwxxUQJoHQ4ebARgx82yWNQRkQfkzmpjymUhYkpLQ",
  "key23": "54KRw89WL7tA5Uce5SPdEEou3EmT6Wnv6JFtGKFC4QZGQVaYXSLFSVHnrScQfpZZPjc2y4hbJHX9zcPTwULRYKam",
  "key24": "64zRdBQ66nMzmUSsfBSzn7Vc5nnUnan6pHoQY5L9T6VsmsVHS8jMdN71YLFC6hTUSTAoE7T8VJ13SaHr4YQ8Bepp",
  "key25": "4c68iLixrANTgDSDW2c6qx4xP8mu7zVeHNiA2S774YC4svBg1ha7obJ7rFCAQQ1hGk9VX7xNqTmKPhPbyux7L7sC"
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
