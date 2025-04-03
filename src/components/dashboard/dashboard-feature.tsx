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
    "3jsib26GM2JMcpkGPApTvVSLgTLVK58fM1EnTCBTGNhhCTbjB8J431iXrSbhNjZGPoUUJTSUJ7nCV2qEsittMDn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpVgyj7wGw2Q7u8jsePWmi6RyRTSMaA6hXYXQXeuhYHAC1Zto2SV3TdKtMZikhBneRzzyr86xDZyEQzK1RsJoDu",
  "key1": "2CPPGC9FNarqkHmvxtatvHZHqA2kWLoZJJ3fsHLJ53nqmHd4YBT8bUcK7afQbXtuK6aSxnaTnRzThTEcCNfpdKP7",
  "key2": "4xhNuRyD2kX1gPijhxxG2Fsr7DnF59Hpwu1zatS7qD7DGgjaDjHwkxCNbznKoSyVH73t7Tn7N4xa5wJuDfdszYZA",
  "key3": "W5dGWVcp1zcryVR65w22AKahRsNtkjGmEd8ycBvwgWgm7BMMs1Jo3N37VNGTjtLrkJLNxrzR33YYYpdVNgi2nMQ",
  "key4": "zpd9EvRMTKAHVBs3oPR5T5CoLH8Xf5kySuJEkMcRCKeBpYB8TveVXyRAoHp79KXgfmSnxVxBJRuM8eZdbnci26D",
  "key5": "3yVmRBJe92kceYXKHvzjjXM3xNUXyMWsVyJq3GPmbUmUW5SizpRGWzCWyNrn6htGd3CsoZHiZwg8jKthMagH12dW",
  "key6": "5HEoGAvre3yFt2gRTje1QyjG8RrqcaTCX5zZDRLY8ZaqKG4yGhMpvNyfrh8euwaJJunoYCyootfJ6jSi95SNyXG6",
  "key7": "3be4ShxT79gxRcEB3wnf7hEjeS7adXo4cSd7FrJGwYGpUAZZLsGvBfCkMKiiucEBwg21rsRv4so6BaXKD2y3gNHL",
  "key8": "CYEhhb9fpjQZYQbHKCLeyGy3dBMBTMh1w73WdLFcyESyhsWZpgqPakgwPbTTuprJCDpFkFDk7UHdpx9BR9bF78V",
  "key9": "4G1nG1oJoNNYo4gpeFJPxcqfbyJzNqk5obGYqEkyXf3AFZub6YWcPjnnoT96ATLri3UMfFeBKdAxE14TFnXfxRxa",
  "key10": "2RdtK6k4QtCt7iFa933EBp4NJ8iTK2uVPZmjPixUawoAus6BBMbvEMvsYgTZc527ZiZf5QYU6Hmm47kL461gFDzh",
  "key11": "3sCGHgi42VEVWp3UCB6fzgkbegrLhkgrH6VTCGmTmtSV52NZHRQa47ihgCUurubcnGgD6dzaxYTXHqNHdTuy8dMY",
  "key12": "3enxc5b7ya1baFEUdXno2Xbqq7hF9sN49ni7QokQokcEdXvDYyT91qjdo8gdEexomqWuLRsoFrEY9ifPqcKjswVC",
  "key13": "2RU4H5qSfqz1BJjRtmHgRJ9w4P3Y7BZ3GEvfUuvsk7rskNyLk9UHkmKMBaUvXhB2pDw8pLbAKqRQ7LMCrYx51TiJ",
  "key14": "qk3RshFJ5K5RDFQEYoS3hmnSUruTUuy45yFMX5ArtmMn59PnPsCFJ3rXQhv9fRvCfLdXQBf3rpaxYAM2BbjPdqR",
  "key15": "5ZPc7LD7cjFWhCERs8kzBwShgUUTktkRvKJa1MjyUyybd5qPn6RuebZH4NC9FFuVqwDoG5PGt512VkYUHPk2JEv3",
  "key16": "2C8ro2eVv5R9Gu2G4ZW2Msr2tQMmEdGMPT27fMHu3VihdkagouiR3s22GVgzPZ58favDgcudAghkRMPWqyQJ86LG",
  "key17": "2s4idzChc538DMtdvc7GGAtosN4WciSmmqfguf5yCyqu7DjGRzM9SdZFBJToVkBxLVw4Xiiofr6fWYLY5cpaxxEL",
  "key18": "45ZojVHwQvzktHiZSAyWdo5JRrfGstfRZ6TrD5iMNdtFKL7zsF21vrnZ8XKxze552tN1gYP3PYAox2czvDKBWMhX",
  "key19": "5vXQ6nhkPSKDkTchASWZ6yZviuWoV9jaxzcyhBNMzB1GxFPUwUjTPk98XwRG9VLmxJw3H1vFEVFk1qLh4VXRzo8",
  "key20": "541HjdnCVGGhJGFiaNfxWUXyshQgkFSLPU4MgvzxKBnkfEBnG4izUbbG8s7TxojMPCAEUhp29GqiXU17sedsLGQ8",
  "key21": "5zAf7gWrSPU5iU3L8q3kSjWjhQYJxREo8bDnXRRQFD6YLcPmot9RGXFAH42ug6k8CJdfFazkMUFxjPzTLM1vHpbF",
  "key22": "5RP93sJZq9hTWGF22ZFNt4V6b4b2JdwmUi8hoZUAk5k56B2YqdoqjvPfkcG5oMUY9PibJNDybRfnWdsXv4HrstGX",
  "key23": "5dH9EynfQyU46SZZahusN2zV1vQyKCjnkqfY58HxgMBCC9PTWNwT9Wde1N5mfpkaB3JAY3Xk2yThb3J5m3TrZHC1",
  "key24": "5fDZj4cUWF2SiLtZdNTANcMoKhX9CKak69yhPJn3EJBz6CJ8K5k88CHxrPWz6ednNraEJEGRS6ZxPeaDArUuvBDc",
  "key25": "4KpAcq2GJ2o63UssztCKjehXEEBj6FaMeeVNrwXaGzFqEx3zgDgBY7eth7zBXpnZ3kYfLE3yVjgAkgavkDA91Mw",
  "key26": "keeSpKbiYhoBYzBF61Ph4zsbNwbgPbe1utuQoRZgL8fHB122E3pNUo4qrsCsS5pbqYqETQFGhk1tELkY9qqxewU",
  "key27": "4vVmfrKqFnxAYxogiCgEPRbeU4nUw6VtubhNpvQMaZ2At6NwhPdzV1m9w5xnTHSFie5z1XP93ouKhqvdUBGsr79b",
  "key28": "39gFVq4MPABA6ZZbfuSwmFHCpJ1YPuE5io7xdi7DXB2sbnCJt16YLqh3YafzvN7Soos21KYdbAEj5yd4nJffhRF9",
  "key29": "oFtATYPQKxMGwXS1fY7cKXDJoQhWGowKnyCS4uoDFWUPBD93wPER5pX7zLc5iK2a5CWoPBimBs7nqU6cYu6eNUz",
  "key30": "GvS97KkxJp1JxR28WW6NnxVj8EbAuVMdbSDVLhDR2mN9vcTKzutmNybeJDW95EBvPq2tAL4oM7vceiQusDpeR4X",
  "key31": "4Nq28UydKmXikdQqZtxued5JKo3UgSvk64kP3yLz2hcg7fkquX7kwv5CRpLbQMm7gqmyHTwUKxbwpsADh19t4ksP",
  "key32": "67BgJKEhp75K2GiTU7gt6aGhqFPbGzmDkBYELcEqbnGYHBeh6HMeHQYJizbrPPYWm8jzsJHYfB4dEXZZi8xs7si6",
  "key33": "2fEvC5DS59jgZJ1DFVAVXRxbTUHoZMYLAu8p9ijz365ymZbNn44PRjh28xHzLwFWhs5mAfFv7PaPyeG3LWsxYENv",
  "key34": "57VvG3Ja3eX56UzUdKhWPjtG3ENXGdWgmS6n8ftnAs8FjcJXCqVKUxraf8rYqFs576eD5DTaKEMhD3sv3apCpZf9",
  "key35": "3HmpaxBEYnJfz1rAHT6KWwa9d7YvzFeakVPpNv9to9Vjujq5H9hbwAcJs7Pdf4uurcyPckLeBf45pKU46UgZcY5o",
  "key36": "3BzK9y2JZ8emZNPkSTjMkS452cp9rsyMfhfctzmbs11Fys5f2EuKXYp8d3TLUJgipGPeVbUmWuxxVmk6Fae8ST1y",
  "key37": "63xDXKfdxkoxb4ZCtSGSXedwso4bUGoA5tLctbLBGjJpwgRJBFL8prA1rcqUXksjD9ps73cpmZQ4uV4M4LHJViEn",
  "key38": "R1C7xpumL5zqdu6DiW6yyUnkh4ZJRjiwhHzEia3bkvdpL9LCEj7zD8ykxiQWVAiSmaqCDopuJgbJaCN7DhUFejn",
  "key39": "5FCsUjCT727Que7a3KLwfACcanZg6CckmpE8EHcAhK37sVHoQPLcccuL3gqBsv4hGesU6EYt7EGBvnSosqJTgBX7",
  "key40": "5Yyb9VZKZuWKF1SHa8YT79YCkeYhCGZjB18rTi5XdWvDtu6WkW8hKQ9MGqDgdkEr3thZwYPaUZDUnFjtVj4iZ6UX",
  "key41": "3XTDUw3nVAuLYX6jtudCKS5rb3ksLWkoZWdvuqQd55VL88Dp4KixkrvXif69DNeGZMJWwF1vPyTcRt5pnQyr4yiu",
  "key42": "cpPF9zBNmTRNDZHSeWwAjkwzqQFPVTv3BYuuD85AUg349uoSdrDSK2FBZBeC4DrK92SXThY9ei4Pb7EnQbwL7xo",
  "key43": "3JeYACnBbLJGhmhr8rKpFQ7HP93LCd9DYpTsrZ2iLkc36vgai2oXYU7NHHWwj752TTe3YJxKcczMGWUNWDF6sLB2",
  "key44": "2yVzqR5TQfofr6riJ38f9MRqbGrm1WSiP3j48sXVLSioqfXNvcVPCYHmWMMsVdWkbqYB7zp23VdSz35h36VGZAoF",
  "key45": "M8xiLcdWCBHswoHRWzzoXWSMjMJrVRn6oRXubbdnnX6kuyFeGkJqVC1p2vKk9gwjRW5zDnXvzZ5e7qaV4bjFqxh",
  "key46": "2Y4Chf5eXpU2UGLygFgAAWCnKXc28fAUqN2bSNv4qda6PfVE7PdRyPsbXEz8ETTNCgpkTx29W95rVSX9LSefvoPN",
  "key47": "5NpCyxNHWfjb1fEY9PGveefdtFMMQFeKMFfmp4WLjiuzkspWap29ADzzdT9iCxPfebFzkCrkBQzqXaxxAvwdDCkf",
  "key48": "4NuXjgBBHiXuAmMrp81iXVgToHantvSry9Zvhbyfr9HaZRzHrfWNXFpRiPe9EtbCCY6qoEpnwVSqaDsRDLZpJ6Fe",
  "key49": "CtNZt24RsimPJLhPh4Y1S8bnfFTkMtwfTtRdcxXbJmZagHY2yuQn4B2sWp4wh68GRV1BnTrc8pXFk9eFx92URhC"
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
