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
    "5cDrnDMGCTozamzyQAC75mqybjNCG6sPeB1EURSEZjtuXNNa9qS7ozdz6kazNS2cGsG1q2rvQXBBW7TzCUegd5Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUJWobPKWbWMMEeRR1P9qYRj7LnBjKyBUDRKrAatr8QVmVXBj2FythVKMywesYyXmPMMdPQzmQeAw1Yvj6KqahK",
  "key1": "4yDNu8Q7kCeusSaXdnQwWC8y7maqMYUwCx29iJfzURu2jj1NWvy92Q514acTjXh23P2nJqgYxDYZE2hn78yonEmx",
  "key2": "3zHofdd2dHKM9EJ8F7waNDuHv9LM1D5fdkjhj6y4XufcQqMQc591APYMbkKVCUNDGHt7UmSc5jEFbWiGBh9h6h9w",
  "key3": "BApTkuH6qJZVR2WFVfpSUDZmLkCuC6fCqwSPU4At6Y9XMyAs6fGve4Zq7jBSvfb4cfWuC43kFuByVYn2wMQJyVN",
  "key4": "3S1eBN9jXFtaoDqeP1AjFaTDXrMadDstnfXU9H2WznNxWAdMXwD7qAVXNpAWrNKmsereV7XfNH1kembBjQyczFQf",
  "key5": "57e4s3Psf2ZFHpS7jayDEnBbUS1pyWsUKDWmcTYb25TGK4ZdLt2tTEo9dZYn52VQ7mqGvum1L2r8f36YyhZxNce8",
  "key6": "25YrdsRQUirUfvcwp5xvb52i6ACeKCrrA5KJ4aqwMxp5v81R1LSSyGoPFDFcpp9YFcMnvHjS1GE3981gcXfuXzAN",
  "key7": "2fYFmPTGjFW6tH2F9L2M1Sf8zsYi2WH69bNTZZvBEv183jWVBD2VAU9RTxLmNB1jVpcxcwRPEJheZ3vt1ou3BZKZ",
  "key8": "5obFsq7LBkYPLz97ArBSSrynBMF6Z1wscN7ubuFxsAW8sWVV7hna3AzmSaJ12X4cfLpHEeSbEFZL1gEQ4CjfhavZ",
  "key9": "2QYRwgkKGWRgJcMPEL4nn68RbdAKKsyhXNuDnsATVsb1cPn9PSTRETYPeSHodZm5nAViHZH78SzmcH8FkTCWnQ5k",
  "key10": "2nJq9tVRKWdiXgV1mvcxJr8tUivaxJyzGZSahXG9tcwSRgX2UmWpnSay5tKWEmKrEfk2ckc5HrprH2eMKzdxZhLU",
  "key11": "4Zy4yPn2khmZastUkoTAMpSJCtBv3LgKReGhDBmqCGiPorLLcSJAexdLqm3nK2CgZAVMDpTAjKUHVKpjejey2bjm",
  "key12": "EZBW5W7Wu9mcGZiRV7MWcPduaLKUwiNtSpcejKnwsm8LkVgG38R1Z9xASddQKXkriavzA1rfFt7Vn9CNxujeTU2",
  "key13": "4dimGQxG4eHNBeTp7n5epMEwz1DJbjGs6KR5djzQ9XXZ1bhSrRy3XoqJJteKdbiN6xvLj2idJLWzurzRBYHLLZfJ",
  "key14": "4xuG8EH9ykguivWmtYMYMmPGJzhRvmsCVRjLcq79152YSFJesoKdaU3QWrxgbAAMgm1oSYKeu1eB1tTGDh7mhjxf",
  "key15": "5RgkQH9D5xP3ZWVWTREwQNdZbQw1PXbvrUcbkckAadYVKYjRe16Dmp62GdhZNEtHrfrt9YCHejNMdL635WHMdr8o",
  "key16": "3kxU1X6Bca1Vji8XHN54n6WUner9UeR8vNX7aZ5XqK3E5ToSsfepRGD7mpjvbCQt8znoq3X5t2KHCMPEZcoJevDB",
  "key17": "5AHj5tjpZpGuRQZHqsxk89rhwt8xCxqqnmUZztid4rNU8hUGxtdvxYUjjh3GFB92LPy19DhGx1JEUP7GuUJo51k7",
  "key18": "4ZXMmwYrQaQiBR14aALYKWp8quhG3ntzXzZzvS114P3FPTXB8gidTjsfH3HhZmKs9d7KKqZSRr7SeZF7AcJZxWjX",
  "key19": "7wMo4NHoph7fRxQdFvWHBkaHDuhdhaXAcHtxEJAR9g98DnUR9Ud69yqQmzDaxE94PXyeNprrwoURZGKNoDgT1wq",
  "key20": "2aUmzeojpvRL2ZGftaA1x3Ya8CnZGNsHt1DR7sFNCnubBufcMWLNZSyan3uRANiDC27N8qDZZPUGHBcRvuQCWcCp",
  "key21": "4FSPxaLPTxDAbf4sspXMso1YpfFKfSVtHHVPe4FYAS9yCJBscZvY6SsV8rHMgzb2MnTAJNRBoC9eGE4S7jj8Rvb",
  "key22": "3mDVNDpsarGxkqXx75AkUT4UDDKfmeQfkGQKXvFmaihri642QKvMETN6ARom7Ax3byGxhupujDWkCB4UrKXA79bV",
  "key23": "3SYkNZLGPMHyCU8XwzppoJqiL4V39Qb3KNHhFjKtBfwmqfWRCMtDrmnoETHMC1k8z9m4rQnaRd85ki3gsPyXqpgg",
  "key24": "4DspAcw9NnNjLVytPiqVJHjvymW6VanEnJDyM9A29oDHPiFqSF1pfascs59g5YmbN8RhphvByoUfM67M7JpDE8CY",
  "key25": "4Pc4wPdcni4CfWfogZNAtbbSLS1wsY89Bg5t6YQCgUcnL5JEYwvBYiAfgQAW4izwxbS6JHgoRYpUoGaJFa52Gz7e",
  "key26": "5By42J84PfE9MZUay2uXufoBjGwMtWx3Qx9FgiUCNN94bPgKbAgBWVi2gGyJsoDa4EohwNPvrPdeP1zKnDRhd3er",
  "key27": "3sQ6DKuinpQPczLC3uPKgJBFgVozvgf225VB1rN8i7nyfvQQDHj9k93CK4y2LFUSKcMsZUVctSoMvtTnLs3iH8Wn",
  "key28": "3SAEHqwxUhwPMiHiKLzDfR2LHbABsAcMG6zUg1KmU5J8U77koTFBTWh8i84XsxYzxCzZe3Wn1XGZBTfiBUjKmKC9",
  "key29": "3YcBVsyZttqtTLnEJRaeQ8mS5Y4SbXk4dXNWYC9U6GFr39GeXKxp7AYkzmL9ebFQ7cR2bp47889EJaW9tP7BPPP2",
  "key30": "5D6ettM1ehJYe7Q5rArrHf7Lwy9ZuCctPfJ1NW84V1Fn2thZGdjzUVQQPn4JYLQqQQf2Usm3r63hgMF7vwsEYo1P",
  "key31": "4RiFffMnu5EbzH7cJ3f7H7zvb3iK2VqfZCnFfoJkPwSR8ni7q97MfxQTu6m6ZWjv5mW33qwwMeh9VaviA5g1FXiK",
  "key32": "5b85zCsunYf3YmHTeGr2A4tLJTk9zVtafNrGYpm6Rq2CwgGhSVD9CVtezWnZF4X9d4TJWnizTqR4xGAL95z4fCeR",
  "key33": "3FaG42KxMevCicXpqyQBLkKWF6e7VDPJVGFLWV9s74cKGunNsui3pgARb7Y3coegsRnZjjrK4sn2mGDLqMy9HiHE",
  "key34": "R3t5Lz2nzSQxceBqqXaKRvbrCX8WKFPA1tHsqENZ8hmnJXK9J1tG8GVbnR5enw9XpUwRmJ54bXGfknkegturBiH",
  "key35": "2bZ7N848bLmr5aZKCuT2tRzpctkKbCJBaC3KosCMeLq7nzCjBivc2SeQfYezoHUXHigiBa2kyJosggtGmFR3PH8Y",
  "key36": "3Kus2Lqtk2ErbhZ5oxrXPcYtWFX6jbysZAtwWMeFn56md8dh5m8T7TfuYE7AADmMqHcsoT7wDexLQJ7f4jgGqaJ9",
  "key37": "3mXTwy2b46TEdjFf7Q8F7xf3317uhnfigRQuUTjzGMEjfdbZe8a36BPzJjnsotncK34xAodctncepDDGUE1zrNMi",
  "key38": "469hCdD6ZorPnjVpPqucDaXExD87H8kGLm5oXU8oM8RU5e9n9gXyCe9pFDJuquYizxx619EosbaX4CSG3udV6e9a",
  "key39": "3u6uLPnR2DU6UrNBaGoew9VnHShSNDbXBEv7wjcpHbQaTQVR18nmQLE8XMh4B2a5TsGsUu6TnLcZnGMLaRQSbw1s",
  "key40": "L9RxkbcDw4TDsxWEJieiiYkHf4xt5kfpPWfpWtHvqJGjLPoFjE9cDADk3UrW4gnLoagD9VQZdxpEeqUt6rqwSws",
  "key41": "4jnRZwtuK6ZYUCkAJsJdy6f2Azprj3atRZdMaQ4UUv4RYGm6QHwQJuMQvb5Czq8PUEaCtRenkCsZha39HYya4VFn",
  "key42": "4Ughm7R5wYtGweMFSXhBpubp9Wg2Ne2EwmDywyuk1uKgtcgvFNP6o1bFJypaxJFSSTYifbV8rYJrsdMpb1EixrJW",
  "key43": "54EX5yUyttNgPhSkbKwQeHZmbBYpahqqUiA256jobM4jrWePRzRi2xEYkQEipdburFVuVBxF6W1hgFb55qjwdycn"
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
