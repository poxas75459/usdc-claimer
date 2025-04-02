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
    "4DPsjkv9Qat6ENwhUpWawk7oPxsr2oCbyiYm4poMdnNhNvVxSesb1axzdasVGmozW42DZDei5L1ns2tvK8mKm3a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cp7zf5YUpCKcWZHSFAcasxYaZK18MXZtVYyE2s9kksByR1j5gCg7BmXSbzCdphw9hURazg81PXde96ZiMgc5SrC",
  "key1": "2fNDK78HW5xua1gg4SYTi7C1F7G8vCQnsvGmNABsVyyLtL7Q6npNeAzbZGWyEeVmM8KjnJphyr7eGwEoSMMn3Zfk",
  "key2": "nE5HDW1L9fb4wrTXUBQK777PBoYgDpdEeLqrK8ApLxiA7AYExNij7qgmmimazjgDk9THStzKgDLunLrcMoGWKYL",
  "key3": "4gLqHLmncbuXdz1bt98YfWySGUsucLv2vcM1wifsEbtt5yFPcmiqmFnYyvVhqQk7jYc3viMLetYMaT9sFc3bpN1C",
  "key4": "3MNKzXoNRmM69WYvpC3DemJfm8uDcLkqFpMf6sQG3U3pi6ofh3xfu6EFETDq3wyWM3vnVWvaLJbc184GjknwY83M",
  "key5": "3t5kiYmXrx5eEvkTVqahSeuhHJVonkEqjmMC6EbMW3xoH68ZqLyVk9ahfEnDE779t4J27xsd1e3pwGUEdZE5zqd9",
  "key6": "4XHofvcEPHpegiX2muj6bYxpDth6Kedc7hVRZEfFxrRrwAFGCGJQGisidHrRCE1vgodpmZuaCRH9GmJ19m3hkBs5",
  "key7": "PAKh8eNA9P7gP7xtekbpnv6FVp9bZUrWBrqTKE8kgPgVu1Jep48HCruN63BFJ5a5pwc1TN6rT9RFwpxTAbQAeJt",
  "key8": "5Rh9XBfPgXmUemDZvFjocv5aeSCLGR1CmEYzFhbGdHz6eRdx5etXhaF1XHin3bmchb3bHsHHjnzLo28yVxxrwn7f",
  "key9": "4bR2ARzcqky3AeDvdEF7qpfpcvZLyYxhE5tej1URxDzGjoqWUkDdh7Z88WRkGxyPWYKwFkpntvCPXHadhQt93DNp",
  "key10": "5H4hTh6vfU2A71ijrAYwtPq29qYRpBkchSVU2PbDNMLF4BhHWwFTtZ4hYN644YbXrgtSH7pC3YeAXZ1BWmd2TrZH",
  "key11": "3tLP1dn2ZWWCe3z2D7npyVbizWneFkcTD38ZZp8EY9a45M97BesoEnh67RkD4xrFPiVkQ57ZUbGi3RaLdTe6h2mL",
  "key12": "ELzvJpgnxFDbnw99R1UKZ64RyDLgciYH7iJMps6RDzxzXVNTQdFS54ErZSVeLEubL5s79nsNLvxA43F8tZDx3Tf",
  "key13": "4GWTBbWn3h8DN87sEWQcDo6TVpEJUA4F1T8st5nfqxm5YF5uZtwyLtb8hij1J6UvjJb4wL18vDxycPcxSQQjr6GH",
  "key14": "5NJU9KRaCXUGABsLjME62zhpUrGbTRXdsX8DC5dVqTKdwoekrUa4M1J6fPSsvL2BeTw6u59GghgRy9LvZRvTZSyW",
  "key15": "4i5iypwDvH4iLJFMhZMUFaaXFSDBdBZSAzojboXRyr3V7LbaroNK3mtgzNFCrjE3hD9nkaoDZ9bPocMiUPHMU2eJ",
  "key16": "2qjBcwanAa1u9LFncK9k2wprKTEMbTNvsmzMujw39qzZDoiyfuVrqgyi33SKBwx9jxv81YDucFif2R9sMFa7XcL9",
  "key17": "54ktGH6q78PQK3s3FJtThxNxGV6UZjucL1vLebRT7so7kX2UZ2uKGYMCGZA2We1wJoKR2HV4uQ51A1Yavi219oqo",
  "key18": "ee9a2D6JUs7stUdji5po4yhDXvneeGdRGcsLPUBhYpTgdHyUoFpHaNeNxc135WdnHgcfC1DLq6dEbVfqghM6s3z",
  "key19": "5awPy2KqbWBzrqGWZYpzTkk4cQdfvfzo7SgMz4mtYqEQmA8G3UenXJXZfX3UWTgDJR5zAmdGUfFALw52cvKoWAJN",
  "key20": "4t633BAwK2EGTsPntpNPaQi99bvtqMrMmF85DySDcTecNYRXejvugdps3LJNRmSiaXHGbyuRLk8UC2bRn7mmNKce",
  "key21": "47kniWyb82q4US5TjJvjhsXeEUPDB51ZWe3rn5VNeR21nbRkvhBdKiiNTkcSt4hUEqVWPaazuWizEgiQC5gSMmCv",
  "key22": "41Km8saGxP6zJV6T9Lqt6sFULbjZetdTbmdZjqNNE7JwGFLWr5YYfT6xFvPo8QARqyaDTpuzMjc7wLJ8dNaiG8WZ",
  "key23": "5tGGZMnMAoqLybfiCXuBfa75oFWVG3Z4JYnGMRTvA7xjjnsd7rwgYwjDks3fhDvsZxrFQTCCxk7tuunF8KL9erWu",
  "key24": "2CKhdkm67pxobbWY7WjAh3e5WSQqgq5gGo5MEGGihkpkhr7rLf2t3gHhwXmdon37kfRGq6vUe8J9ZDZYRLnBaoe4",
  "key25": "2GCNoT8mpDcUugQfQyjwnxRiod4PgGkQJkQetJSj55EejAfcgscbFpyb9EYSdoK7ubiMQthkgdCseYWEWDd5YuyA",
  "key26": "5uSSburkHG8qJYgJwo6H8fWLryfJ55yGVPzcWP1wevhZN27PHFXZ8MioaVxZJeexUWBoH5ntHPPB5ioCMjVUXjci",
  "key27": "3Z2JfmxisdE7nY9jaSaon79AgZK3JVuKGKCy5y9ZrWYsZ9DAATWwGdanJxdkzeKMxVub5wZye5Xs9n2SUnxjvyVZ",
  "key28": "41UFAbt1Uhxvr3x4wegid42E9bBf7X2kBr8DJeSad5GnixXWugvUc3izPw51mz12Qu8jEu1UWUTef39tPxaGMHGu",
  "key29": "2a1SPajjGah1Kz1H92CjP6FggEpcwrxssUPkwiLafPNtJBqAfchMDCRSo5ThJVhhTSLJro8K7prE8hQEGrt7A7tW",
  "key30": "3RDJ1oSKSjDFAfqm5iG3ehGd9YpKLJmh8ZivKFW5zvSD2wiCmwKw9bsJMWxzNZHooeSMY16yTaLdLEUFLW161RY5",
  "key31": "2C7i7Qc8yLTpMDdtVF3woaKexURgNVmPnMdvE3rEhJurySZYwQxRqTXkHMVFDJtF3w5fEAzG9VKFmqtFaYaYkkA",
  "key32": "2K2StfJcNUj2n2syRTEShePTAZ217p66A4LBPc8fWpciDYA8rVCCsQ38XZBPnQYyCHDTKBdAtsPYBn1NBxgArj2",
  "key33": "bFD9JtvnNy89YcGiPz7vPay2Zg5j3wWhrSxyaQVxqBuT9h6GccgedeXwqauXwuGPvs45wrrow2raeiZepC8ui6E",
  "key34": "61ntRgZ7LD4vGkwPpyhG53ELnh6VSLZPExdKsykC9AC56FTQkD1R7EhEM5GSUgqoWCFh53bSQLdqZQCN6a4kQoa9",
  "key35": "46oJunaaoDdTpCX7RSbyBj9eruAZADE8YQFWiEnQcFMLYiQHiZsxm6EmracUMxKw1qKrXbz4iitxLn1yofEKu8hC",
  "key36": "2W1gJa9tbYxjsD2W3DTw21DQYwHvywEzDUhkyddqv38S6FnvLiPEAksxpHivFBn5qSDMCCM9ipTfb2GZtpnsuQzH",
  "key37": "Rtk7qJzHhP7Td5yJZn6bXVh6xzHjnry4BXAFoZ7KuKgYTYVZGwiC2xQLqXF9NgcKNMBxqyBrLTFjYL5ZF6hFxSi",
  "key38": "4395QcCeJL8fHK2Abb483mUn1wuMGqzctnXaxtCWiP7rXxFzB2onSLAym4BrLpnDRSESuyygkaVB41LcjGRhFYVL",
  "key39": "jhxDkeyqP9K9hF7ThnhLxi1gupqDL2eCvZuPZDkdKZatZUf5bqrjRwQfhVjmvs7PWSs8UHgomPzg2ywsgSgZ117",
  "key40": "4gersUHfUfJ3m2ncckHQPEzH2Z6BxqMrov5AYjcFdTmKarvqWR2dJhJLGfaa9ZvvKi9LqnfTY8sUHU8UHaGZAw1i",
  "key41": "35Nwww1Snu213bsM5v4cmHHSjtLdVB7yS2noGW5Y858wyEvaDpUhBShA31VVVmj79QgCYms9FM1iRQ7fJDT866ZW",
  "key42": "4Cdn79VEAnT87Vx1JdR8vetSt2wkevwDcFXBzHsfCy8Z6E8az9HMjmRiXA2egnXJGCq3GeUhVFKRHPTYhvGKub8G",
  "key43": "2KxQCNZuyQariinmZ2NrFBxHRtopySpdm3dVe62kv9iPeR9A2KKczvnqAEb3zRVfkZ5MKnia6ema5McBFo1UdE4v",
  "key44": "2UL6J1wCZkBLEEoQBmvY9L9HYPZ5uqGjLTZmaXVcitM4Z2YPnDV1D4ogmJRYUUDYxMjcBfq66ThMVUa8bCPNRvEj",
  "key45": "5Vq55X4EdTCGUTZJTHWMwxcSZa3c914RLBFv3mwk6aGDmwDfJHxEZwpHNTDEAiGvDoYSEmSXgwkx7YGgwP8f1vZM"
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
