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
    "NrBdxagkVhQSN8XiYE6ew37YkyVY76isXR8JDhZ72GamhdxsBsXwoGLEKxxy2nNrSngS25k87zG48LU1L8KWvjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbygxvi9dk6u2FfAtub8KccWaXmUdC1uhnSHj5CQbcCw4k3WLmRpmagdQeV88M4mkJa3XRiCVydJfuwW2kzDRHP",
  "key1": "TeNUiEY1HqcSUoCKTWq47LFPZgUb3TpCHarNtwsP2GFUykgoybe8r9KANUHYS9bSbi8jGJ8Dg4FTLu3rnUhGFfD",
  "key2": "5NQFpyEkqGMs27knnfvh5XdqBHXhbDtX47D9uHCd7TwT9BKgwgtCaYVMtp6ywJwmANLXK9uZaJQXw1EXWpoNPPb9",
  "key3": "2pFQE9rKk9TELqg4e32Qcd7AG1QCrjZ8YC18KbnzYVKE4dyzmA3dUqTnhxtAKnTsXibCmj6RrAySbmPsDuWqSGTa",
  "key4": "2S7BE7G76NJPYLvRrUqRy7k89aNpMVyDqMFjjQSD41Dm6SMag12fWm2gWpkg6DqTRmErrdvZym2gtUa418LUpm84",
  "key5": "5JMEHD61tRkazotYB1RzCmYtQMw2TH6S7APPAdWBdNqu2zLMwwmX4S2h9S26eD565ZtwyM3JwBr7aJmSqzBQuLdm",
  "key6": "3tM9xQfm27QjaXCXmU9V1zmD69BLK4M1bUXDzwwDGkUyCVn3gDz523cthZ1qwDPbjtizYSca8MPsdPJWNgLEfjSm",
  "key7": "4L5tQscVtRmUuz2t3J2kjqT8kKkyTGMvAE37kQbMA2TNjgcfv4m2aDMzxsmj7a7nifuHeho6U7rRjTUWQSs9ZQK1",
  "key8": "62Y81yfks3ijufoBuQmLNNfUVDADUsBS9KaH4UtQiCCRj7tAibC52rhebd3L5TVuAGCUK444ncktP4U8RMwUJmi1",
  "key9": "3HfM38bpcUx8hPqrtapRHpJgEyoffXg2qDMz8uh3MwUnjG9pzu2Y8LwfxGkiZawkVszccrgrZKuVLFuBZRBUX2iM",
  "key10": "5zuVmcqXsyXW1bBkgjLhZb3yhm3cWsXc2Xe6j2hrjoAESV4jAz1fqcu6bUdMxWR1v67Ukq3fNgomPDG6fYyat8e8",
  "key11": "51QhC4VPjYjcyw2erFoMjuDPNa8ei4wiPodDB3APLrdBPzVwD91owjpMYPentnBhoqeJHuSRHZkP3FswsUvetpj4",
  "key12": "5A1NEdiRHisykHGmHxYAmL1btP1NHdcst2vaQUmruW9eR9uySwytk73yFnW9zEbUrbaoVKqZDhL4vQcEhST2udTT",
  "key13": "FWmFGsk5xJkdNMBLUpnojLHoUN7tCnxeB9TUMvoyhHSJfMHSoKSKkn8DqcS15p8RwZTYmyr1QmQGqnW5W5BTFr1",
  "key14": "6731Z2Esvy7rGfVe8cetqSPAzyd3b4tFDD3M7hS6v5MsW861aAHDFLg1KVUt7EzsZkGEmSPmQoP1x1VK4ZPjNsdH",
  "key15": "5SEw6wQwx56HXsaoTJXTUhog3otbnqsf8rf1vdfwMnZNWA4EvMfLt6UdDggAjiohgohDN4jZb8DryWXnHuvoT8ia",
  "key16": "4uz1FGamGmKugQA7EMzoLkKsRMPF2YaQ16p2MMyk6JQLTb9Lsm4hE2QXBYGjGqNN68qiuubKNqS9vyTaBLqvPw4P",
  "key17": "DajPREi6TZQPBJANH1cy3aiaHqn4dGABHarKfSrUeUziVfkC5U2HR2vrbe2r6AZeD4iTsoLzit3LehU9rPcEd7f",
  "key18": "29hLC9zf7iR3gBSi8CJmTxVx6LKBzbmQgwrBtbxGk7ANksqraemtuXeTmwGzS8SGAUCxxrdTdb3SAq4bXeFebWXo",
  "key19": "4E3phRhgWRranqxe5Wgy9Wh3MtTttb75QpuqCjQHzDkCNxJUZBeZw6Seyaj8opUgC6Kixp65QoFpJvj1dgCLcC49",
  "key20": "59soTLc9wRX8f55PP5dGP3C65iBS2SwMaHdWhvYPjhb2WtaxyPMi7do5xTHHpT9p8a2drhEKj5Eg69jL6FX4bjKH",
  "key21": "5XUSEKZPrT1tZtGgup6YMDLWbT3Uzk4HpNL8XbL5k9Z46tvh6yhicnhtBzmC1XCTH1XWqeepXMo7obVDJnEjrVuW",
  "key22": "hyC3NqPDKgbSZVN99qjoof4ptVKxoovdACC4nQGtRMFb9khqidNvUy9krbvLLxbAaacJJZ4sNhgeuYed69s2jS9",
  "key23": "53StS7J5N8dva1xbdcfkrMqfpdqTmp8yCDanUo7RVRTuGqqDRUoQSTssp5goZU3X9CHpgzK2FNT9dC2661jRBKVa",
  "key24": "2QdnXVNwMFnGov2WovhcwyvzHXVXetX78HQzyxsJ6D8oLoYQMEbgP811LCMLXbdvfYpXyhbxw9KdiDmMH7tenFGf",
  "key25": "gj1Ue9eySWDqh3PDgkedd1jc2aTWPM4tzmdQMF3MTuBB1GFBeJRL29RQHxPX5JpxCc6iCxXMxB2P8sjfmfZDnRT",
  "key26": "46nJfRodpbGxrYcKMbKKeUSnfsfTLw5oo1p1kgLXn632YizGBMmpeLnc92unjQwRY2eGG8yTbedbCKxoVpeASKft",
  "key27": "2jY1XDBuLn9swYP5uDrL4d3wbgiNThe9xVGVqZR6AD8ANA6fYQSn8cyCwJJT4KLuiLHukSuqXYupJWXw8cByA1E",
  "key28": "5cRQUxVtpDCEjb5SX1HPsEwYGujugi1kt9hy5AC2Wnzo1hmTFPB8nMCwcwKTHxW8cKwusg7yRDaKT6PBsGmRewDo",
  "key29": "5UKWVy2CFcQnaLCXaXrLGXUfxaZ8fL9cQ6Yn1hJYxgP2pqubDzeD4ASHsmMhCcLEg3zndvoZWZmewDkV4YPpcQdt",
  "key30": "2nhchPBbEjF7PjLxu3D3oG2AXG2VhUfvGVcyXh8j8D7Fr2JgBmamvrxkw8UjPfwoYup5DZAzvQ8K7XhLjnXS87M7",
  "key31": "2LNJu24sAMVH3ufirWFH4tnj26J7yvDMd1LcHb1J27CjvdV7kNeQyFh3KxKiRNkU9NUquV7zgJ6LmENpwbqC6Qkd",
  "key32": "2dkJUA9KorP3YJAGWwfTQPjQduFU9kh4a6Bue2t3GDbANDo8zUiuT9oueZQ2hitPMCxdm8DLGnXfFPuYA8z5hLvy",
  "key33": "5FXkTLsuujAyHUB7R6LxfykVbuJHuKr1AcXYhts56vyiKo55JNni1gzoTds1HQoZVH74WvY2XDUdWeGELCZyV5ea",
  "key34": "9p9mF3GVttZCgkwqaPw1eWoXEFqy4gCu3hLrCFcK1WzNjnXkvc6846fz1NaWiWPiKjzT88inv6mAu1XnCYaRjdB",
  "key35": "2BiBLiqMdXc9AmgzAoPnhjoqfm3trxksFaKACqjurHUjJpDQuoVRkmUNaTr3kpbYkDFHqqeBbM8PcoFJ1YMeu4LM",
  "key36": "4Hi2HoZvbTBZNEZu9jtPRpozmrvD3NJwHxKkCvyQMu6QdK56j3S9YppMXJzSx8mbrxqWnZe3bKQ445xZZr8W8nhy",
  "key37": "3aydgeW8tUWGu6f2yrgD3CCKiBaGzdKrvsMS9YcCsjEcpR7rFxdpnNQRqkubwHjsqhKmqYegaxpubUWGa1fKs1x9",
  "key38": "5qW4Lc4cEvxfgixGpoLn9U72LKtorx9snGMhLzNVjSbSVy2d1Hsxit6qcRSuzfeyW6rnruCgjHWM3HjG4v8fUv2r",
  "key39": "5ZznvBV1iK5rMWvsCEMrZdrEcVTggASLQYS3wVRps7pn9PFx5VGiweC5K2KKqbXweRtNnooBV4cCp7CsnuypyRKb",
  "key40": "4xxvq9oCfUDfWcHiDE1kVYm3XomcCZzTCNGW8VhEJmAC61Gof5HLc2AoZhG444KXDqX74CT2s5ZuxZmHCb2GFbiH",
  "key41": "3T9FDAwuHh18HG8XsX55PBXLgh3XyEBF3YBWYcSNyWke3ZPkTovo1f77HjbcJJvpD5q3WD8xs99AHkGtV5cR28cv",
  "key42": "434jTa1wGzTJjAYpDZ3k7W7nvngLAsJeKk4Cmnfgooj65Dh7B1iUrHMNpdngCsqMiByL8Bv3vi1rAsDo5hF5FYtX",
  "key43": "5Szy3kR8mSiSaxnwBfWLr1SaT2h6wRoBZNf39BzsSBpsL6LEauwiJk91BctssnGPwDgSts5YoaW93ASeVrYY9n3E",
  "key44": "3UvBui4xgU37uqrrziUiYGFa6HUbsG2fpgUXtS2wQ1XSBzb7xGc7HKj5Fbozcd6EFaPX3eNacPBZ5X1WqNgV5FtJ",
  "key45": "5Rjddw5iqBZJM5KbYAPFkMJyfqu5goq8xuMehjTfd1JhY84SRMKKW7sAgyMpFHkMvWoVz5GGng1PuVdTys5wniJC"
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
