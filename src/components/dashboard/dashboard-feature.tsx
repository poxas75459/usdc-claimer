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
    "2JwJF1ApCrxucWfYWS5e6QHRUqDPMjT3iBtnY7wF9NNefKvNcgoLZ8RY3GVoHcCEtwEM5mSTmrfdHkAteXvv8snJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pjjpapXH54Pjn3nDeHutK8Ca4WMyZLbhhi4SF3iYhkJGKvDbZn8m56nuTB5k4EicBTtjuAyrhugWqjPgTGKmh78",
  "key1": "38xTKBRLdsS81JFHj1ZWoKUviapmnCxViCtJ8zorQcNAhe2SfHYxjcsay3aenjXAcfTH7fLMyXWrYexpKPAqjRLe",
  "key2": "4bVcBbbgvdhAi1brwzmPodSe7uR8r1K4oL1AM6SfkkVk3ZBzE2B9BqDedGLjzmFYDjG7S191rri26wHEZgu7DUBu",
  "key3": "27rdB5TZoew3cHKKup8aB1Sf7SBEsZNRiz4W3H1vhqEfe8ERMKtmF6tJ2YpZvDzZDQ9psPgHAuUtof6nyrNJpfic",
  "key4": "4NL8JYYTfTY9E4ZKE7chgJKjP9YQevoC2uA5JfweTU8eL97MuoGjxs9fNnpXnSkUdtLyU9j9ZcJN8Qw26MQp3bp7",
  "key5": "5SDkiZmyxdgmotmPfSo5KvVT25QvQHGarP3ooZYC8MYTvg4bv5ebgcJVTiSjVmFF4LoLSYbKpnZnRcx2CDC72jwK",
  "key6": "nkXL8QBWc7taVSpAj6eVxh3DJs47v3cVL9bkJdxmpxutakZ2FcT71rMYQ8i8kmhC8QRJGMUi8XqDJggWe7T7SEV",
  "key7": "5MYqZuKFBRJ7sSHiqxTj6U9beCu1ghp6fA19fNeNmiR5DWdsjFiWRgNDCvnLuoPWsLP5idqib862zhaiWe7BJi7P",
  "key8": "3raSqSEy1VK4H4CkrbM8L4Sx4kLSzGZcR7HxHZVQMD1PgrGPAcH5UK4iEYhBtugeaQ3bdysVLe2svaYZ2Mc4h2wD",
  "key9": "5JuQF5Re4kQBRvV5TUTC9pDg2UQyb54nFZrQJKuVxjLV9gAvfzrb2Z7xiFYYodhhbdRUd1BJLnPr3znYXKrxy1aM",
  "key10": "5cHm6GTucCU5t1iaA4jR8rGsydtGMTpRyFvp6otFEgBDbRukT56MBpjWFV4KVqzNZ6uSczjStBPcuGV7SaSeW6kP",
  "key11": "3vtzE1bChzF68y9dC8tYzUvTM2BvbHnCTDJ2Zy74N3jRnQTNduT6tioJ52ivdsJGKYfCm4UFcXFPEoq4SvCgNaBx",
  "key12": "53Wp8VT5qDBtirCkk1cHAKa2PKPFGpXd8pTdqjaqNhvsvUsz9PqTPmjH5tz3EnTXtu3D2yncfe44MSQLAKYBcb9H",
  "key13": "3uANK6jzMK8yn2oCdtcAsiJc4QpRxb3q2SAX1GectxEyrREczdFpSJpfpvG3Bi45WjebqCSaqTnjyJ82kTm5o55o",
  "key14": "4Ac4b8QVcpXQiysbywXngaQ9nT6JSpLSYdLPsfYtmLoFQa5vLcDCq5s1vUhkv3Fwy4Hy1AGcZKX6d9CyH74De78Z",
  "key15": "4GpkAVcPMGMSqiBz3b25LFMFf2QrgYM3y25tbN8xGbjJ8XYapZpfmHAViXNNChQGjagubSpf6HPhdvBK1vyQpy8e",
  "key16": "4yeFYSdFqPYSm2MbStXnxLSjyQ68pTJ5uGdhCXdp1X2Rx9g3Sai4WthHjgNpG9wL32TRjwRHmq3wNmrSzGa446CF",
  "key17": "5M1RqPmXdPFeBQmiwasjRqayTQqQiWsB3a9TBPBY8qN8RzEVP4zMFmxJE3KFsMuZpDHbjxCRZiiBYSu7EvBZrNj2",
  "key18": "dA76PS9ZufYhNft93PPpjdVKbgwe7mJ64EZiKaCLDmMvkphvAPbLp8fva8v66t3SpVjHGtks9oM2hAi6C8ovE9r",
  "key19": "2rvvkpmWKqhEqgKJ67M4HneX67piBuY2H2GnLPK1Xfzv4GTRqW9cYyCd3K1LnAxv2BMQvJruirbNjZqxMKaQCCDo",
  "key20": "5d1nQbYTZxNTntvsGuth4yL8eCba93hq84wrdmWNVJyJgXGJG3F9NAPmcA6doWnwheoVxrkerAboYf9yGr7h5ziV",
  "key21": "216sSsiygu9YBcXokYMNxZg3mLiacdUQJhF2324VJKqhQjDAiWiH94ftqnZqssCv1BUynYTH8gp8z83yarawF8GW",
  "key22": "CDPiy4dAmBxdDKJNcs876vjNwarC3Yj5ceNskg4oyBPvX8eFcJhAQjw7nBGMwdviAFPfQCtYxkkduKyykkjMLui",
  "key23": "5UMitiBNqX2Xh6JPisjaS1PGB4RiYMezwyZEDR6LAh6eKvNrGaNG4sRMFueFL3zmMeZj9dUeqvmWXXUoVG5jS6Cy",
  "key24": "4U9cqDmBe9C4NH3KB2vpCpzUupun1Zf5yD8aYrr4J9gQMGavprwZYrjxZTKEBHsDkThsqgFBauSQMXGjBumXeRYM",
  "key25": "V9ZnMBMDwpeaRYZKMPUe1aZbnUCYUsc6Ut5WhS3GuUtzWiwb9VMSa2NcoBWxgu5DagTEFuTmva33R1oj7NESfZ2",
  "key26": "R4MbsN7cHfWAFT8uXTPeci6cmJfq3BRSQmtHydPVu8SuJQRrb1aRx5pzgS7ED6X9488EVFckLipWm7gUiZf7z7D",
  "key27": "54QMxZNxoHL4dDp7hofec8GnPQM8Hi7HXfdR1YfBevb6Cu2Vqactipfn1TBjNUWy2XPXrVJDKykR68sVe4LTzwEt",
  "key28": "54rvZFA1zdtT6RriuBKiAxZVBCtZzoECdLFWnGktujJ4mpejg64zAoVkPQmFXyVRW4M9nW6KZjhfNVsdQcN5NHsk",
  "key29": "4X4BbSE9ffSnfF3TmBJ46kjwDvzeKKXmfSzWo9doRmyujt1tdRvzn3RT2ZHLfKdJretvErQ8RTE9HC1X34a3pCAH",
  "key30": "dRdNi34NXbNd5NRsmLaWaCXkb7t628NwbxR2YGtMnxTBx2qWqgXtnJTWzvpzVTSrj8EqAxyVofc2p2mUURk3SDj",
  "key31": "4NKLXwfAGC6ChVTdvgroVHYgh3c7zpTsk9jnnTBZu7SM3AyiBQLuKb4a13LJNP8aprHgMg5XvLZb4FHxUCphBP4S",
  "key32": "2UHuPFtdBhXoaTHep8YXZ2ADWKxWRuwJh6A6vGnfsvQBLTD45Wsnz69vRxWJVoZBK28URSqGbbZChKRwriYSZ2dn",
  "key33": "UXJYiN6JEkxghvhoZabVZauc5LBJZLUgmsQAL9W1dj1jCcqCeTzkDTS6NPe2FdeUBxzmPX4gYUYLGzQybEsLSBH",
  "key34": "5aSgx6LGMwSGczLwtyhMoW2WR7fneFMyw6wmRkVW45tQMT79NYJv2jQLYLxHX8cXuRBN47LoLWHkZYJkRYcmPaDv",
  "key35": "4j5QDdKATgXSE4gJcURBMwmP4zUoLtu9PZrNm6fCkxhKuKdkouDYdoW7RV8vz5FTNEYmWaL6asQTRm3Kr4iKsfFL",
  "key36": "421fj36mP1JsKfovJ7xcC8AbKpVQiSrxn26qyyUhBePWVnVxe6D33sVKWVPmdAR71w4Tqfu6X61GeEtHJNvgvFkp",
  "key37": "2WEQBtHnCBd8EwkAPrbqHfS6BnauE1AhuorzXj4TVnLBJkcBKAzepu8KyaZkRn2aZyxXzXx1uwGap2tQrcV4Wg4j",
  "key38": "DhKcqFNuAM6FAKhCKzYxrjdiNo4ez9XtFLUpAqzpgSqMmhFRJpWdcPHzsKk7nutADdYMu7gcS4CuMDRJgBRqVUS"
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
