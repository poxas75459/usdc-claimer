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
    "4VJTXwA4c6hZ2bVtb6iFfjaVmqaoMDbvitwwJwoANaJXZanTa7f5bRYpck6mJgCedbdy1eGPjtWE2pGrd7ixU57J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9siDPmo2Ku767tGkkx7j1kmNo6WjNmtMv2hKTqcQbwtuwja8i1MuSMtHatWHs6hg54otsBTCWpQnyb78PjDasTC",
  "key1": "ue8GNijnbE8wFS4gDKjFyJ9uALeKp9VpgCykHGA4XW7pcGHQqs4Hh7SzuGQwuDfYtGSePfJCNUK1rgCCHEXvh1e",
  "key2": "3pjL88obTrRGXxjpA7mER5x6RD2FkMvwTVAeHCVe6no5AqH21FwmWHbqPWuU3v9znfKUBPbW5QyukPiuSNEqyMFC",
  "key3": "5ZGm49EfT6KD1WVgwevBzGmmJ76X2zCVZZVDXyokXxbt9Xdnm6F1Tcs3wcj6Q92zW3DJ5BPZg9zy2XfopfxdMgax",
  "key4": "3EqVZ71QA7su3fkvfSPPHg5arcumoYEf17f9AUGLKxJoA3jAucxnfPYPocuSUiSwx6uaQzDNBKuW2thikgrs1FeP",
  "key5": "2gRigPXhdWNk3iFjEtxAjMZ9cSihqAN3K7mbCyrncoGAhdnE48QHuAkDpgCK7v2aNXV44CeY6Xad1KmJe7Uf7uzm",
  "key6": "Hb7QbAmR261CKY8tiwumtkLtarY1kaskkHGJnrzx2tuyGZ2iaH9hovqwDuKvdQAbJNLG9n4wNe8Vvj2vsGZPQac",
  "key7": "xAAAmpk78yXXdBkfVWJuF2gZNixjj57HqrVx73SpX7fYE1kEqiBhnNPToY3gFDB2GUTFadGP7Z5HaBWEFaxLVvh",
  "key8": "36rfra961qVhdcvZe35E3zRYmkYjJKoRbAgJncTrX1MUpD9w9zcWcx4F9mueWaHUVETaMcPFQdd9PHwzJ2CxannK",
  "key9": "2ncBhMHUTkjWgqVKi4ckUEB2p4uysYknvCmaLqgCVpavVQAC82aWudAVj6Sukbb9bcNqzBSkrPAioGa5zLxytAED",
  "key10": "3Yfei9z6otkkpaHC4EqWBAs2s1gSXPbHHRmefvepXwtHF3rYw3ML5XtT1gRUWfRHWb3emjuovGZ2rjqkPFV5gyQc",
  "key11": "3cFUbXTSnVJW71n5xah1zw8QWECa2VTsPtGfVUawasZ4WYMWqdC2wT2jcLqDj6KCDynWbacof9sxB3JtZNXKSvH3",
  "key12": "p8cqHdwK5TAo4wUuu8Cm3prqAnFcZAYw32QFiLH5jJwWBHmemLPAiBE8PkWHJ4p7JsX7KHqhV7AHdtQ189xpc8X",
  "key13": "2y3S9f17RwPdMr4WbAaR2K8zaFXtyq2E4Xq6pH36gGW6LPxV6aijLx7GHvSAN9ESQLrZPYXmrztxZCdf5gxpVBXE",
  "key14": "4BsaLcbJbP29SBCGETT5CqSE6ua42VbKJgi69fvNjCBdTbUXYGMMZkiSrCEo2CrS4tnkBvc3f79XRFSTYJN74qzu",
  "key15": "56qErpyu1RohDT6cYUMbn2ogVpaGsHUf3SmjgEb16xQSiy3vVQWHDuebJa82PYFDkJ9goMy4X6c1EdbmJEXg4LxD",
  "key16": "2wJUKrdeaU2CQjWFU39iDUCTRit4aiZ2jYEMxmjBBKkoRcYCmjpTC6MyArXDN5BQxKA8B36SZqkUhHXDdPU54V4k",
  "key17": "5Hmz2QsCmLzNcQc83y1Sj7uv8hpaHY16nG9CnqXSNwHsdrBczC4wJiknQDbC7e8i9pu7AVuzDhjVyLEYkoMKaEGg",
  "key18": "5GT53Uv6eCovpvATHGY9MW2kVj4CuEcDFWZb6ZmWZdAMhToHnHQFGh8f35bMUdWbwB8NWJfvHaJWmTnSdcjwP4TE",
  "key19": "4ExbLLNbZp5UfWwmZ1bgZgG9Zt2jM8iHjadWipcZYRE2jKwzKjdk7mDH5ZJFwUVnJ8uJZK41BvzfGm4TkkuiZBVe",
  "key20": "35eqKUi1PNgdCHLr9SA7bYijpegazdCcGVV4bSsfNJtwNZTNXbdciMYHjb36b1ywUFGQihgZz93cPeL1ajGgg1ub",
  "key21": "3myRvetyHMU3CVCrv79Lz2YNnnN451U7yCjUd1pLnVfbJsaTijrQYmMaeiQD6TeYQrYvGYHp9wcoRqEwVBPVGgSv",
  "key22": "47H4XvqEguxZceky1j57RQ1cmzGagygGxrDyX5sTDqrYned2Qz22UbgEbSRS6Hbk9KcMrio8ZPCw6XRmK5NEGe83",
  "key23": "5ghzyPZuERcyqCDAUTBvngJP27rtAHKzuaapMi4u8pR1QNdyUxsG1EMVcT752AVQCJAer5zD2s7D87PvU1iuMbUa",
  "key24": "4UMj1RTxDM3jAQqDzjPRmryY1hLaX4mHiAbBpw4dGuLdjYu2SBwiMsCwx9WXzueRU1UGtvyfD4VF4PWMeryt1v1v",
  "key25": "3YrdKPxD3coYALJfhxg3BZXBkitmC2YJpBXGrRQMuZggaD2bzMvUxrVorAvCpv48uLj67dqp5U2mFcKCt9wNeHCR",
  "key26": "D6seA8mefSKry2gHYUBcDPuSgSSqG6Zh5dhZb1tRKwkCjFoASmMjLUYC6sYDXuQ5c1zAiKb21r8EcYzkchX21Pc",
  "key27": "2qyimShPBRfhsKfYdAET4eyoPu2iiPodSMDvaXgf1JeWCBFHj98neVzhdyPuZJgdHp6uviPJr37gHZCj4WGPEauu",
  "key28": "5HoTicKrXCxK4SDUH7oVrJBQFRhmdqYYcLApnDRjN91H72r5uHiJhQoyioTTANuGnedoL1zUujbADWvs64R2YRZR",
  "key29": "4EET5ThoCtDtBEGSyWNhSAnqpryUHDiFML2GLtSUaiSBdtHcyWW8GpkGH9g6Tz6yAaUEzkMn7gf7DaK682YRzZG3",
  "key30": "3QCCTGg6ha2CMxNed226aVZzVAAxyNg7yo3pcE3MbJxbrBn38BDtnL7rbkkFM8ibmRGdLbA1gS4HDRABFU2qdcja",
  "key31": "3KzvHMQnDNyKL5pe91E2XVYhnbqoY77UYbTJ86dwfbDmPusbBTf1kXd1Dngz9UjTy1ZWVdtPgeNF33Dv3jxruyrT",
  "key32": "3hT43CGMTjocVq8kbqHg9Jtd4GYgTn9QHwD7SenvsFNbapXWMMBBtYqnALrN9PPTnypma5p7DqEF13twj7N9zaTa",
  "key33": "5G9VppAdHrnN9zys5pCjyfte9Ju9Uy5gWhYZt8LYTooetd5fUJ83WsLkBgpRrmg7pnbLwNXVjgCPG7ULgFzRjZCH",
  "key34": "4rQB1ivHZU21qycvFSXgPpWkZZUdmhpzu2ivKMhXAX5vJerqyzJZ6vpdqhF7DymZNLdQ7aGAUaoUA3d4E9NNjGop",
  "key35": "3xVhuxxDcqZxXcRE46Ziszp9vaHUN6P4XVfvEgywKdoXyp84xM74CPpHrzoCdGraY6xbpkta8P3poZYot44WPXjq",
  "key36": "5QsQmaZN2PPoP5UCWwkb8bjX6sR8oAmnE62ayQsMsqRe6HhJeUSeLMtxW7zviquen4zgaTH13rHpo4Ef4bwD7qJR",
  "key37": "6BmZ99YCS7SyGpXWKVFv9iQMhzUsD542rKBaqFD1x7GUEdgbxXAiqCSgeCa8kB3uj1hdJzaEDpfYfXcTwe8uke5",
  "key38": "3YDxUb5YtbE2PKD1UHwpwdLvxJGqDh3pUux4oqx7ziWXGtBjp3mTNVFgPTJzBkLPXxSk5BLUtw23SxAjFh8zp4mp",
  "key39": "2airD8kBzzm4WhY1fhsqzxabgbyEpyVRqGcideRYqm1xJyXnwmmsAANMLVzGAtPSPAnzLPSpyDeJUFqZrAeb58e5",
  "key40": "361ej3pqS7zaD6W8jvAwUsEaoNYsLJLJER1m8UfXdiABsjHiKS5iuBeQat1ozgKzGT7A68giu74ckxs5534S7sTj",
  "key41": "5u9chi9MdmUnh9MnWGyBkqa7pjiq4bcT6dRv5A4dfSauJZ17iaGDkjjxq5atqBVTMNWFFTTeTCpwDxR7GSWtBYWU"
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
