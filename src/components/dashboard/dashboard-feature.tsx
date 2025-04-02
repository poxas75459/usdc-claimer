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
    "2JY89E8CDR3xsBP4EQhTjQxjXz9L867npB5X7uQUHt8c5YKyBKaDPTqE3n3FFQEMeXrnN6Y2Qa2bACFEB5Y7EXRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GEkwW49cbo4MYh2t95rpijrdo8Pf9mmmRJPPPnTEHuWGYGCNo4YZyvJFkiipiXHgCPodbuTZFk6hqqpbmiEkfdH",
  "key1": "3UBdahbbofmNRo4X6YHsXmRQ1rEx9HAP3D8Q64pZBRmQotqgsUcRgnSWE7Dx3PcCpAAM7Vugxu5SzDumMfCRjUKQ",
  "key2": "4F4EYDbrMJBSBT2sMkuqMpX6i7tVgPAEGiFJD9izcNL39gnCryagUeLA2wT8mJT1CjYaGoWNhWAjtQmPwu3BaMbX",
  "key3": "3ksA4HFLA2ms7SK8HgnD2TWUsNHRLfuohpY9LsMswkKhJ5RG8zNdmkNfd24utqUJMe1EHDHvCgrdMZ78pjT8Uw5F",
  "key4": "91C2RnhCWrc6ky5gzEtyrbk984WLex5B5osKq9pPoz2nNkSaKM5KXXTS3NZW8gTsQBQNFNQb1NNm1Pd8c89cKwe",
  "key5": "4V8fFDAd3uQXwATxk7TvzCWR6DfmVyTXtaMdSxvN5ULDgwQVc2oYDgmRGkLy2zHgUmajdQuXytrdhZPQ3zdwPFPn",
  "key6": "2CFCDjWqtaQ1TdzjYVZ3fNQTuMph1dd8DroLM3ZLY24uT26cGWGiQksTY59BmYfJaVR4whSKxXqALGRndYYnu71r",
  "key7": "3tBiK2bgEgvFWWdp2tQ6Mb4ok5msLYhoLfWn5iThAPbdVWS96hSytYYmwVYGRXt4zATQ2wEDQs2d6Mmzno6xKq7k",
  "key8": "4Ttpz7BEAjt5bJj1CLs4hF7bgS8scXJdo6GemYkUeSx833acNtVLgouyLAj8Evce6t2LezQ4RF9VVLVX4J8hRir2",
  "key9": "4HZDnfRXUQRGMcZcfTP2FbRHspqjQ4wbw6gvymfZ2N3uNQPiFkwLSVs3FiG4K9Amfn7jPvbUiM9EHRNeVzonFEd",
  "key10": "3gLtEG6tHbmitZ5BfQVVrejqeNHGrc2SJzHJGNpT4ZRWiMd9kQad8C9WRs9kKzZByv6LNuNqQKMVeYJnPbPQajDn",
  "key11": "568VYjWfjN7DQQdJMcfb8HrAfhZR7HzPubGULvEsDtEBaCx5KG5J9SN1Nytjt9wTzCsYtXjD6WtHBgzrzk2evBCC",
  "key12": "57WeyRdtFZKxgpRVRRYUMYhusqsmZwM7rW2daQisXyzjaVXWDymKW6pWJqnJmSz2qe8PmxcCnSJBSuVa3txV7bcJ",
  "key13": "485GgvLFjmrZ4oG6Ngbps22rGqmEAJVdPAunPiwFWd9Bgt22koDb23UkvJCiBUQtwoENPhVxLJ7hkk1iKnSGTtJE",
  "key14": "uf2Vmddcz51jeJEUpGVbX64fJUuKbCbD2jP2cBSFUKNsS2Dwpw298E5bNEynUdudZB8rMbWpBGieNbYyzvqDwhU",
  "key15": "2wKXQo8CtKX8xv37h9ioSWWpcQCenhdX2LpcBPAWHSNX7htF7MSFeD8EYnWBkbZsG1Ex7GrsZjTR9wFA3UL4WvYE",
  "key16": "2qcmGYvhPjCFzwkKCBYv5H6QaSa1qnC5DTRs2y4UHSrzc1a9F89ipVRkHPujRv3nn7qUJn2BsJMYBm6cLo8DVFfZ",
  "key17": "f1g3d3QyBuh8NdviSL2cop4kW1fQYMT1iyXVvh3rRu2gdUgTrmCZLzoY6BtkMfSqorZEE8f6eUBMHhmGRmVd1qv",
  "key18": "2RRoM5GmAo5rx4nGQFMcb9qBqRzt7wp3heZ7uSuwkvTVV48C1rmVHct5r3asshXdNmdN2nkw9Cvi8BNTuPZzUbrv",
  "key19": "3mJXq9eUuHpL9gLv4ETBuMSUz9TdCFR5wZ7er4msgyDZAc2t92xkiJXyGHhUQQHBjcqWTNrDGieXvKqGujhg2dHo",
  "key20": "4kZg5Kn8qSc6AFLrHqNtc9rtFc1L7tgMWKP6APHY1SRT9uQQvCHGiyqFE6CTK39nvYZQrXdeaj4FedPALPG9LxZb",
  "key21": "22VFhTh1FJkNjgqNj2sQREJ92qrQmH6k9wD7aB4C2xamZ6ZKzZusDzrZEuVNFLNYbHBjWeS5LiFwtQvbrBu6zGEn",
  "key22": "49UFuANKFsgFFacrg5ikGZf1USMcJXTYgVaGFboh2d4ek6VVcyVuz7r4d4viWDsp8kVe1gm5iaqkMmjFDcBbPcFh",
  "key23": "3Sc3PnBSarverFTCTQKgedyK6KP1jAg2g9J9mixCStTwc7VLXkuABVYnpe4hurvHCTrosNNorhSA9wnawkW5DuwJ",
  "key24": "2RMFUisSnX6cFg6FtyxvxyCfEuGHpvrcdPLXUaJNbYAPwje3HikZ1MK1vQAeomh5nwrUviYrNuYnYdL4L8552XVy",
  "key25": "KqcSeoFuD5VFQKV2x8YYCmrVjU2Goan9XC2xRTHD7w1oKa4hCzbBx4R5TdQ5xukUq49g8XQkMTaQJKHKNLPLSA6",
  "key26": "26SLGxNsCqD9oQX84uhGcAFFVjvDy4hWQVcuxr77oJDsHUKBnExdYq1WQeWKH4SLLWapaC5GxbKqGCa4EWQLvtZ9",
  "key27": "3GG1oPRKCFRfaUvbpC2QnX8EnvjWjcfiGR2No2TKAHguoiAfvvVCh5UCNMME7fs8uPqr63fRZ5N9TrrFXYq7W7Hv",
  "key28": "j2VXZ496hkHXmkMaD58jwd7ZHbb82zraHunjXNZHoTheggKyXuCFLHp7YdNyN9zbvFsdhUovGWgaShALDrw6Yks",
  "key29": "2X7orB9De2r9MGzNTRyeQXFTcc2rN211TLcaqadTK7nxt6MwqVi8P9oDYvjQSTiNGwy2DLUEqZ7r9xX984X2Ca1c",
  "key30": "3BGv8pEvzQCNkS7pdGePRRwRVhnV7sEuo5DSStvqU1n48cPjiFRo6rC7PiQ1sdeUWEHDRuevYavwjAGH4RoSjadC",
  "key31": "3bP69S5vUGAQyL2dzZdR5hxVz22vrXpCReQNqsU9ebdh1r1WjY3Fjzjxh6du2Q8A3mCzdj7tcWkgE13ayZLj8VSc",
  "key32": "4yjj7XS7Ae3F36ZZjhHr1fUmqhGna16AgRSnKGaSzn3NizxTFwXqR1HQfJMvL8957qdjxwzPuejp2zjj8BTwygcg",
  "key33": "PmF52m4VD5vQT8SF8NsNR3YRpuUiufrWNnbD267ye5kSXBQvXm44ke42a3JtQ93MTEZHjPpy7ibrshxA4C158rD",
  "key34": "2Qs3y72xUfhND5MEnzhH1YRhp6xrHhNxynVd3hAL3QDNaCbd4DWtxzo35KiTSuCgpSQHjF5LauSrmXQUhVrzLovY",
  "key35": "tpMXEDwGncPViG5kBDSpb3fH6BACNhXfYcteVGtbXYU5R7PqKrytbWUJeu4aU8qbhocTDLL422PXwEsh7Yju1i4",
  "key36": "5kA72ACyoWu8ogKhQrNkkiBNTi3jpiAz5ZT6Miubx3x4fptz8PgY6hLVvQqX3ChFEiRi4bpLXWYoPmhCNs1wxs2t",
  "key37": "458TzW19xLcpMja12fsrEZk4f1j2HZCZMHsVKrEj8j2VzbCM2MQ6tRQk6j1VAkadNq3GiSP5YhtmocSvrtkbth4A",
  "key38": "5oq6sZFeiHF23fMYw7powtKyq8qQuLowaosueeT2GyEFweBXgAhySn4FqYzgiyLpZZ2NJ23RGx5ji5nCT8pM7coG",
  "key39": "TzSqZcTimF8HyRqHogQMdxLYivLzxJjEgHFSdaTCopyAULFE5teCpq8AWS6Ykxeg4XqktLPU4NA6LqKdBVEVSBd",
  "key40": "33zxGVMas6NbUAL7YCJ6yACEa2mDQwhpgXUC9v92ULtdqaDdJfmMq2Hx196zkpFQTdThQU8NDAriv8Z6VTKLiEYz",
  "key41": "3E2BYht515owEYhv35EqquiQ5abNeZxqqaSAv9Ar3nkNBUMSC5R9BgzFaE7iwNWgD1fSVxJ8YfZTETDaZZq3UuhT",
  "key42": "4943wVNpbTMNAE2XNdB54nMK6eWv5PGCCUPZyXY1pNwvNkN47KfpPpd7HV3GNwxKtxqkVpCavCfRztbB91qRFJZc",
  "key43": "3CHn4og4nRhaHDd1XWtJPWuitxVJGyu9hsSU25kq6H5Lm5PRmUhX8Zh2oSYhXcZfTMFCWhUwg8undzXu6FvKUWwh",
  "key44": "yP3MCcpcJRzBtziA2DMsG2QrVMyHpa6nJHMDf8PcaJeupGQqV9SPQCa2o6tQFH1hp2dR8hJnQnp4iCvrnkS3gAh",
  "key45": "3ANV9Wf3UKqMpinLbrzjiV7VYfcUNGoZaFL9WntZLCQ5DJovGVmmK6damhmrscH3spnFQDwc6z2vviQ1iK2xiZVF",
  "key46": "4xmeirSMZ3udFpsHnqrEhWLCbSCDNTy8uZ4YAqz1cwXir7LQji7nTEWFqwYADvm6Sp7fFfw9SeqvYjon3RuVYS61",
  "key47": "3dx9r92NjPZs2BaBeeYU4tmBQBtvonCACamJv6haBtJTZgch5uHfcow6SCmQFu3bhTTkX6K9TtnQVyw3UF9rjqr3"
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
