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
    "2wLCDRz3qVBTGzWGCLYSYRnfUdS9NXoxkXNFouu3Jo1A9siAa9TccYc9jhCK7vTscPYogj1aKhStRf6qPEueD6s4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZxhphmdSdhQsAnKDWC9VFMPofSNqnV1yFJbRRhbRo1PQpXBZ1RmenBeWpVfH168LsUdjQ2v6CnXXYYDwesDcy32",
  "key1": "34i3RkTjzFdvhru8KXEDxK29PYRR2FhhTGE3i1PAYSNZ1eLWUV6ekpmYG4Zw2JYtEBsuyEbRSqVZLWxhu5MewZkr",
  "key2": "BtvTmiymtu6CacULjqhmGfSx78w6TpKPx2j8WweSjFiRQhFRv8M8FupHj138pNnummUJmSrNgAMCFu3baYKDmF9",
  "key3": "3uEknSUNXtqTffxAJdwEhzX2pT2YBshtw68AVcnvZoTMtLyp61SKxNauPYw5osBauvFKhz69vd5wbEW8QmTy8t6y",
  "key4": "2Aubm7ev7nnQiDw7SQrMbD1SzSz77BuKFhQTuDZ4WgWAMKbvDT54VuyfsmfjViSAAEEnQxQCSgTGymSQWG76n7XD",
  "key5": "5qoYWkH7ZpZvK2a7CHfiLwcmCG9hJXWa4hw6e8mWn6pr8EcNLJo7K3zrSa7RUeQtXG6DuaYhVBBYzEP15W4izx5k",
  "key6": "5WCoLZJz2SjreBDfUrReBDuoYP2skCV7bYfmxE5TLUUboPHsuHMJVYbEwVGw1pG4HyHdCDRrLLZnXyzVkuXRCgUL",
  "key7": "2R38DWYhQ77yvRi9YYdUZVuyB67PMtVYxnttr9yRysJBDV8e1rpTsM9gagtuv89B8Wjz8kid3ViCJFWmcZXWu73V",
  "key8": "2xL82eybNyASnDLjedPUQzorGEs6fCdRZxzqS98Sjv2pia11B2KzKuJ2cC43DHKbYZPAMDSvxXu4KK13WEekDVe9",
  "key9": "3WoWESpPpA8PcnkjrrVxfcB6M39r9Zx4j273dwmLWCKV1BMDTxdgn9kzX1fQMogMeS5yZzVH6GMpqswvM6PbHHiZ",
  "key10": "5ZUJNntjfhcK21eHnkTvQSk2o6gpFRqTBMRP3kxi38FiR2W321kYHpG8gmzYn6YiZdgNrtaegV2ejv4PX5VPAsd3",
  "key11": "4pyWXmEPZkX5U3QyiFLieRnRScLHDQuxbKEocRfCuDyZRV5CKmve2cKEeaH2Y7LUTi6TWoZ3qp6zHYkb9kzxsEY4",
  "key12": "2yExTPb7TmRCRVV4W6cDrn18VZpkfXfuyCSH625SSxNXska66gm4HAjpmR4iXurwVyS5WxKAbwADtQgzqNu8iKJL",
  "key13": "56GouBG2dvkiUKyHfWeKmhTs4PguDrFcjMDU3QkpPfDhRfNAJ2kmDPrt5KhvdTN8yxruRjainwiqaeRhYqoeKNBn",
  "key14": "2NMFq2Ap9uSyNYj9d5xkXsK7eppjwn1YGMvoEAv8sxrFC3kPXMUFej1QF8rkky2sinHvhiWfs4EprgfLixoQHkJZ",
  "key15": "3yV3ug92rZQ9Xk4Cg4UFRJLRyS2jRM51JaxstCJ5ET2FnDHZZorK7i5rJ3yyefi3etrNbTUkTXutX3UJ7pxLhoF8",
  "key16": "4N1e6yMwA3tMd23XAKqvt2fxuKk4zPALMSgTE6ZZikXcuSRZfP2yPeZprQagSygN1KAfxFY76esevPa3hcJxEt7",
  "key17": "2jEAffdAaUt1eWy6CU4rwxnAvbWSjuJMB8SLzP6cGvdmmN2734uFBVFzcTewYz5JKFgLkXwrJH7cYpUVeHqxd2VK",
  "key18": "4YqCZEy99NDG7zgkDRoJAmercpaRsBYFN6FRRUpWh96ETH3CZ7Z5snBm8TcL55cueJGBiN9CzkdUW9yHNi6Ug3R7",
  "key19": "47JSNosgeNcZS7cVjNLYvCmmGEc5JNfujJjrzwgRQr82TDxkET62nJmpW8jFJtsYSvheD7EBrhP9yuXB3aYBrPCy",
  "key20": "4fyEaCF78e4hxiPcuzbSoD1d9HqPC7sNFCEjRU1zfKJsrPevGQiqv5ZajxAGgPjGv4H41NyZXhKit6EiFojsvmjc",
  "key21": "2j8nBc3HDdoNxnpLyjA9nMz5Qm224XssxhYn8Po5qAYULEDqrshVTSbMz8zQRzY6xJ7Puci5MYPJBjoi6bErfoiq",
  "key22": "apNM6Tu1MxPDTVSJk7aTufoEqpCPMGTu4UG52g95xkCDiuuwt4Lax8cfJA4Nqh9MfFmCj7bCmZd6mW9skgzFF59",
  "key23": "5g1gTCZ9gjxPNJTybMj76fTz3TvJMRq4Qu1YXz46VWNd7edurLgkFKgmNknDunjfELM4nRpE4sjBL89VCBrogZCC",
  "key24": "2EzRQzTJX1SBUfR9DGiR56CB3cqRQ2iiXohKeEhK71BGefCim23p6idDMkrVZqX3dFtEaojCRufctciEGyyzjrgS",
  "key25": "ctPW4tTzgY5iC5MzYJCUF5LvVQHqABHaBGsmgjVaM4iEg5ziMiSFDBhG1AS7tmQYLhptx48Sg3ycYfZD9HcUYaA",
  "key26": "3w9EvBKoBPWhveWqFKrpMPmdDCfs8cCerD8k7fCEdxPfTpQp5itYN7HETVZ8eHcMT4gpTHNu3qPGKq8yQMFdNQhN",
  "key27": "22yGXRyLSkidMpn9fcq2tNiZX8im7R9UFvZAVFtsVuX6JAvvxvJtE2vQp6wkgjh6ThVgyWTsSiWyLKVGVvQQCbMj",
  "key28": "3KreYy46YUXczWkGBpui3137nJEaZLtaRDpXo5QTyV18jomXuH1iJ7fow3qeud9thKASZYypmBmQU9NEP3PUzTay",
  "key29": "5D2gPkyC7LhFiAsgMUYUSpoVtgvWvrZWZmGN3uwdbUrTnmkNyBXyyzk9vD64tFWC1DMBkTP9k5voqHLoPzD1n8E1",
  "key30": "2KdW3uLZqMLJUGchrMWfbtvoieW1f7pCLwXbMPDrMJiAJ8UbhrF4YTq4jmKPYhkRusPo9U3RjbTu2yA5RYPwFYcV",
  "key31": "3azuhnbdsDGenj6f5UkC3iBLzjTCDAeT63r4sEtywZBo48sVeAn1xBT387MfF8waanMPDS7SsaDG47nEQ9qA4X75",
  "key32": "2bxbQBbb3CHaAu99UGjJZGXe3qi1LsTjMbB4zsccoZHYtr8rQVypKrWt539roQf32ghRaGtvyyJLVxfms5aPm5La",
  "key33": "2oQnEwR2gihxrg3wpF9axCxnPr2f5nskyjuCczHftuaBCjjjwz5SpUxGbnns1f2XvQCkogmDge9gfUk5F11fFbcg",
  "key34": "5PaeqQHfY2AorCBAaNwLooNFbWSuEFqdsFQfV2yMif3yNauozoU1hhHKswupdFrKinkMgE23ajhBDqDbYYvC6kH3",
  "key35": "4ncjGak12gn6Vqyx1CWxPj351qmAgN5Qp1AGq2QqtxN47gjSnZzTHkQH4M6RmhUyi2nyhfbCfT2fCFnjJYkoWuVM",
  "key36": "43J6QrKBkySDtR64cpzbaPZKakNi6tyN2HHTGQLxkWTDBUX4jS6q6iaGy4LrDEUjQfSVAgPRRGiC63cLgvTt6wup",
  "key37": "47uqphcHngTKammy8Tn7rqAezkhDqwczJUXtmqMrZaq6GNnFBCWaGDKAcqSyKRZYzZrjioumVRtRhacKVqZTDjuy",
  "key38": "3tFFdZd9mWAfMrpsSaBzqwPpbRJY8T4Le9hfPkb3HJtrTdmYFCdqLm76FRRY8CUpYX4vrtJXL6ae72DpjWpFFJfh",
  "key39": "3UkSTgYkvqHovxyTcDDchLFr3pCzSYR4HxsxPYM1qxyGCeHFtYyxMTrtuzhKJajQdWATjX5hdtidULzpN1PnfzdD",
  "key40": "35ue4AoMPALjdc3wMxbm9hS8BmbLkPHXQJGUFetnjBayqghy1SPXddD17WEKmq1Zr74XZSAKi6dyhjs9XEy47aqq",
  "key41": "4jXxFVbVSQ59K2xfKHcDdq6ahuwzFFYW1jrEH49nx7X2MitHaFDsrEBrAVVQBZGEoW8jY2i9VAjHm69hUWv25gLj",
  "key42": "2wpiHRdUMvGwfmDW4264GYSCnauWyv9hBWV8wt5rPPcaCUAv6mrw3iZJuLDAxQmS1nFcMGRGNer7eXVAZRwdZmdi",
  "key43": "24mKJWfeaMQb2S2JfePX1KNxySuunJNrZLweqFr8CHns6rEM9raSRHmxo6vjiT182LupQPB9T4Sn7SMhGnvTQ2Hs",
  "key44": "7FBL7L9qgehz3H4y5Dc8rNiUsjUgi7TXxxgDpN83kVx6UGEMP7mE3fqXLf6jFScF8E7Ru9VQxNdCPwT7d9LY144",
  "key45": "5p631FQTxwoVz4hwopthyjfjE98jjEECXiNYHABrdtAsNwUgQES5tGJcazASiueqoEWJoRtQWiNoXRFy47ULugJ6",
  "key46": "2f75EsYzoejwEBrV3Eex4AUB6SADW7ntEZ2EbQ7FZNNuJcS4cwZZ2rT3rCNhk9SW4Wga665DA6X6HL7Pwy1bCrZz"
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
