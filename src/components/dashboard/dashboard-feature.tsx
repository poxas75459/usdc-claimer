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
    "5fsNXqgjMp5SAeH4X7ceVazs9cncQmrBms4Hw2gzxthKwfEnoMyvUrUcbnC7JHxkFvT4FN5FvDJyVuKoG36emC8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rzyijey7hdk8Gr7Qm94WaLV8XLdRtUReEUKnpKNEPaSmBsa9MDDCG2Dg3pGWrdae4NAmV3PZxGTftWgywjLUY2",
  "key1": "5RGL4TUfPo6EMt62nM2AF67mHpoWyrnajfJDF6wkKn9G1mf7busPRk8R8b4GwJeitYpxYUz7XLxaRv5iv9GBGCYp",
  "key2": "4cimwTsqnXEWnBfXcZ9qJJV48PVKc4eLJbZWjmp8v6RLPcLpvAD7n6CknfkooqsAcXRKa6dMAbfvxJnKquJ3i4qa",
  "key3": "575vK5Ryqzh14VKvUhNTDYJuuxugTMj7HXkp5Ud4G7uVsGp94bgpNd7dZicF8jc345p9rmjwZPaquiep26fhBKaS",
  "key4": "2e3EYS6PfNVB9DtHqbX2MVLrnB2cmq5WQvE6CWsQ742mqM2pomNouHdcrKhUDqM3BRDRPZjsN5N1Sn8GH1Tn1DZt",
  "key5": "58JWZGoe28Nmx81FBphZdsnh9cm8NjQsRvgTddQrM3FkxNaoJjKXXDfAFp4mS3FzwkEr5B1Z7eVE3r3g8LEEpDUf",
  "key6": "bnFGc88dJuW57KpCad9SZmv5aK8T135BWVaodEvVoLMdz9FdMgsxwXhPThFAuVgPe9JwZ6dghc4V7uGYnMEfBTS",
  "key7": "3XfwQ6Nd7X3n3Wg3TkwtzmNcnGA1NTbKj4LhVmxTPwqXLoSBvXRz28f7sw4op3sHAm5HPCWpkPSKK8pMvvkrVdwE",
  "key8": "4SaZJDcKe4Ax8bC4arkdpnD4fjDipsZcFLFCifGuaoMWvA9Z2SnmN4oYZM3XsfSvovuASuNdBFahakZSWoxoucF8",
  "key9": "4anpe98eWTVz48NuK4REW6F4rqyD6zoL3bJvBFG4xU2iknVd5uCrdZYcL92Y2uJftbPgvMR2wbJVZGeHszFqeMS9",
  "key10": "5fh5sPVQYfjX9HP6gz1eWuyq8sZa4ECRQe6wdNPgGbD7ckFH58y3jBXHiDFLymtEjqB8fDV9nV9gcaW1C6dKzWU7",
  "key11": "5ouKoAMoJvkFWtKtJNN8maTmowa2WG3rrU1U1w8PorqsJhN5eFpvcEG7QhFidBDA7oCgb5GUmwRfgbSHjDrw38q4",
  "key12": "3bmNDyhQP7FeZ9Cd56xYvNNk1AWx5jXq2wtFqQEok9uZoVEeCdMmd1GFmfpVpeKrKjSgeE1r8kvHCzWLYdp6Rty8",
  "key13": "DPxJCTuuT399WFfHTvKEs9xH7AEZKHA6mcgs4LznzhVNwRsXarTTV4e1kxfTHw7vZqGcGLFxEuQUqfrDMtjUs8h",
  "key14": "4L9TWBzsdVLrB5akngrLRkxABTCZS6xrSBykf7wgyh7ovcaWRJJoiMhFaHn9PCUWuNe7ssGghVYKJ9g1Pui38HCG",
  "key15": "65LDAKLwQNWmciEtVSKJvhLJrk9hoKBb82FPJmMmgXq4QwMgGVM8NtZNVCJo37bva4phCDJbdbYkWVprBbAi1PeA",
  "key16": "GztiwkQoUreifPkM9UsDzLMnAbAyGk5dvmzzgyn11VCeHRz1fZ8vMKrtmURqujHEb7wkupzY3DT3uvgARGejeMe",
  "key17": "sSieZemCtWf86ubTQFmu8tUsidfV6psCD4cVX7vd2ZtxB4S3Cx5xU3fsZSmABPCDQFpaRNxq8PmLqwHUGsEuEjt",
  "key18": "4GRaY5yKxjM9Z5V3LjsbZwtSLqpHGGGf4AwXLPh4nMsBLAgDPjSCisj5vCzXXfGk9bEbekcCSaMGdpxqgrA3XVi4",
  "key19": "mWjJELxB8jgfuS7pji2Rvr9mjccB56xp6SjjKrRh4BV8MYhsJfjNxMBtsSBdMHNU4tY6gtnCMvRvDHtvrWbCjax",
  "key20": "B6oecbE2TxNa9AdPod8Dz6Z82SXhmh5ciQADsw5NybNEcKUdog6WpDFUhhSy6KcQLrmANQ3vns74jkB5nEea1oC",
  "key21": "3qHhWKZctrjAjWLM27tXXnp96JGa3abf88hkGBRDbcD9hDQdZPirDY18Hnp7cRKaHmsLAzHuQF1edEQgcFVorLDf",
  "key22": "SJB5ydAK6FDSNJKGCGyxaBNLGqym3ad8b1Ph75DqtnhZ8ZqxkEdQ6qSnLdTJYNuMZqeS56XAocFxBz2Q8p6MNGw",
  "key23": "36D4kvR52ejgbR1kvxc8oNJ647VZASzUQbQNm3BYGGNwn8pKmqcZYJVL1uWe45isY7VKKGx7wHdFhVMXqUAG2Ki1",
  "key24": "66Fikmxq6YLySKmNAkfuoxDzXRuwP59PZ8YshzW5yTgFw9RYoEkEJd6c9vKqPfARgt7DMcrtgHGz2wKxdbUESW2m",
  "key25": "3ajpdaTn4cNnLGU8dpK6Acwviv61YdScWVJdrDTi94SEeojfCbyudH5AQUja6U8K77TystTanwetiLLQYgZtoi3p",
  "key26": "3Mu4V4RYBicnS7DuhVWsSvzbzzVowGNt85NfaDXcjTj2gMVDyM2S8Uir3MqsuAEuA6hBvBev5NNpH7dRxZCuxZ2t",
  "key27": "35vUPYTLm9zYzTe4xexfqSb4MLHSGChuT1S7mnEThpwsaSJuXsYZWa9eD1Phhy944PYG3x76D2echF9uBKy4iBoe",
  "key28": "5hyRpsKKHP3T2JeaUKea9n4Kto4SL1pq58tdSVy9u6i9Jni83QjxCemzLsBFD5tUiDDVKrUJJmowz2AoacuoPTzk",
  "key29": "2KeNGH4qXXS7vuDzyfZ3rgEkpC2Q125sdcRTk8EhdYZkHyViWJ72bT44g9zAHCPbRWiFtDhEgRsNwr5cqgcWxmKB",
  "key30": "2oevFez2MXmrT3zS7sEVsmueY1qvGL2MEDVxe2hfoL2gasvNwffPBwk23HwBUFfm5qjp9T9trvaKdNoBhhgkir8L",
  "key31": "4cRiTMjDngYhdnsZMjGJgs7SAgHdmaY2fDtJS7gWGkwXZAQZyL6Q6yHTQhXqkBfkbnKftKi83kTSARwPSu4WVnap",
  "key32": "4MAmE94XgGkgheiDm5DFoTezYKZ62za9s9jkbvWvUZeaXsDfqXQEt6UhbRMEpKWbFgTo3oxbLyL8N6QNXFXCngxT",
  "key33": "4bSfQkuqNPar3EzEAoGQTqzyxso4jZJUonwE7VLDhSJHKXNUUdK1XMTWheBvD2dGv2owwPzZJ2SCMHSw3wEUv6nQ",
  "key34": "C8k4jD963wXNpFFTQH1zG4zxvA3ATka9ZFmRtYAWcWSg98A1mAFK7AvCvVycRSd2xbtCBuoEs1x8gGkDzsnBfAS",
  "key35": "Y1Zkahg7oeK1HFxJpeSKyZubm5jwNRopVJ6dUmaTS3DvuF8V8f8QZ8uBua6jJ4np42ubRNPVLe1BxAJRcdqJXgE",
  "key36": "3zzYS9KTogoxSb6LFDrezBy9AA377quKqDHiZY3kBaT13pTwd3VSsPEo8V7L81vZxTFrVqJv1JEza8b4Qy6c3ZVp",
  "key37": "55aXLDKikLu94iDKL8zP9idX2rX9KKogJbNeUEtCj9cchudxuX8tJrrXx4Xbtz6sdft8ehJ5ouJTbBFwVs87iMXS",
  "key38": "3ckrWPuSGUsVUATKCNAYeEi9iXyaneKZVKhwdBXDG77FHTNbh5CGUYQMRsXJSb6GWo2TmcotvzBhnayNP363sFa4",
  "key39": "4cZBijXRnyhviQeqnvJFrD5L6G4vVFFjHah9L6aducvtdcsA61k2wfSqwhddX6sQ7UkECHioBxhGmoUFbSRMgJh6",
  "key40": "4GNa8jSiLUthrkBGtUALikgaN2WM8hqzrtrpaUK5sLfz8pt2yYKJnEdVKRCCQ3dTiGG3rxGTLMa9RkEV829pY4vn",
  "key41": "2uZiG3PgbFG7SxDYsH66Kv31hf2hzXkiSvgJykszX8KHqTbaqPumvvrhz2EvEYKLLa4iHqJBLksZCuaD2whddULi"
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
