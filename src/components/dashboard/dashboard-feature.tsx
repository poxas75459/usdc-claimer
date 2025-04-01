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
    "cMaLgZSNWnnFL6QBMuoLNmME6tdZ2zgEayPxnyTLokZwaUJVd3rsHiLf4sZkMaTvFEF5vNyPXTB4GDDVbqarn62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCXk9A4Pgbu6NZJanrBqzj8JtYwfxBrQ1MUe3jTc1xPZTv4rgWX7Y1QYVovxQ5XNBqinLpJzDghQHuPPEDnXHsV",
  "key1": "5qzdbUE6CFoMu7am7B5MxdWX2Aicv9X2XARGoxLknzRZba2P5ix2r62aKiMaRtxg26Kpeo63gMpBBus62sfnbScw",
  "key2": "4zYxBhp2mW3kASzDwAcms9e7r19UAomX7cX1yGiTHBh3kviBjftb4YfkPXqSmGiQgFL55AxAmuxXU5uwrDKRrcSw",
  "key3": "3WieffUbNwHsdeZJvTRzsh9pYhdUdPxxfpzA2NcYsJRVP4LGiCw54tWG3ftA7ZSWhbegdF5n8WJqS48iKyMAfx4p",
  "key4": "5tZzfoKKA99pb7ArtqMx3Bnj8awR4rhBB3g5ovzUpXTsnneosHwejNfNfAsnZ4WHKSpq2y7MBB1ZT2ajcVYbq711",
  "key5": "4FhAvntHyBPJZKhHVg7sgSvpq1RMs1UZC8nzL4ycnPqkM7EV7a1ipfsopZpraHkPNxupXpDNaMgM5msTV6f6BfBF",
  "key6": "2AhoQT83RiXYeTDTNCbb2Gm3CcDq16Bi5AVbDZh4bZdjWJUPpik4qjvT3meB1R7cTY6CWBw8DCuoDD4j4AfGrD88",
  "key7": "2R8wbUvU9qFunYYGrEzdfTuDgkwx7reGEoU1tkg5C7K7wPcWCRCpecPecpibR6JFxdsyLKs3M1F7MN8aSwnwNkP8",
  "key8": "32iAH428W2Tzy8D4zhcERHDvE28ndo1gov3sEqkpg86ce9MD3y9KJwMyLNWEoBYsXJAQY3vJ6XqCH6AH2GR2Tzks",
  "key9": "46EBTMsbHgDvvrdmUYhG2FW6mFkf1ttZFV7ToixkpCmSaWo3QPCUYRCmVAHewZs78EG4cp9BjjHgJGbkHQ2xyFqd",
  "key10": "df2NCTwcFx1FBchnLMU4EKDRpcYcBGQqvF29UBnQWeehC7M2fMghsBpFCcRVShUPMYG45conjSjwxHLmpGTThgJ",
  "key11": "3whF89wEKXffWv2nEHq3Bs9aejKvwPvC49s1vNKjZBrZLJwUiGZ8Rskow4AA4NbGdsTY3tzvGqtbKzzwUU4Tktrm",
  "key12": "5PaS2MDzMbK2ns7hHE2eoUPoBBYDsgVRnx2UTS4ZCx52Sj6k2HBAhMgnoTZ5cNsBNdiqiv8PKSQTyWu2RFGZJhT9",
  "key13": "36DTqK8ajift1b9o4PK8GkzGnFWabpeessw39ZoVeBUrSjSVbPyTvmdAH1XgBqKdSan5GpkxJG17zoP88cBdvKA2",
  "key14": "bE2MVSVUAegYdJWKZFsjcyHneuqW9C6Mkmw5sYruwcBNAVW4hm9ADhgZVZbeh9P6VNew9hiyhZNv3i3MoXqzG6S",
  "key15": "2iRAZfdAJp2E67QXdKxGcpc4fGLP8YL2AYtKrSXzSNXcPcqfQF9mJjbmNbRZ4KVu2Ujf4DN3tyUAo4UwoZotbNmT",
  "key16": "5yREdiZSNkRe3HjQEATAGwu64r2r3oqwszhCAEfHfKMhqbFdTQueWbVbi8GfTZz4WC9M1QipXU7sXEVcRFZLe6s7",
  "key17": "hKtKX2Vu7WkEENnCnaLo1uHztha5jn9jhRKz4f1ZnZWXBN3zZhj2oRhruQoqiTerNGwqLhQgBAyzPQmmvj6nfAd",
  "key18": "2ywZhXtzZa9A4GEvshLUdtBh23wfFXTxouTgiX2tmRH3UvxXEVmTg2yMTR9nNZHVgAWtzVi5ZaQR9CobWsPVacoL",
  "key19": "4Nmpk9hYNR1bZJyBrnVCVBXgiiqqAzejg7ZFzswHwsjseNct2GpAgmxMMT82C6828dVMr4ADSdeuV55JAUzgFWLe",
  "key20": "4Mvkk45TNi7AhLSF9ahRAaoV9uFbmpG7jRj6xiN15qv7CDQTWjD7QSUBjLXMLhtzuAwgsMCpK9MUeQ5xckrK6CUT",
  "key21": "WKMHFEZFWatZT9DhN5D9jR9S59xtvrAcoxANgQoovMfkQx2Asth4acrxJTdenrF6asRYA8Q7QQgXDAPMb8SbM7Z",
  "key22": "2jRJieGJqxXrWdoQx6mt1mevEzX7rFsEcY1nwiZWzLXbmL9srpU38qgcLYcP9hQSVnDH95suYXaFGGG77pb726PD",
  "key23": "6SWDGhSvqu6thrrjZfXVTfWgRB4miEX8yDxMAPzomUXda4zDRGGukpin7qAmzcYz98wNgW3qfZKonCvoEYtGsZ6",
  "key24": "3W2r6G3FUD7z8NUFxPMLHHEduUhg3XXtvi1zWY3MtE2vYptKxGAmchqctdXRzQyizBoViZH5zUkMeRoJP52m24t1",
  "key25": "4ruJNkZKzkHCBRua2nBzZBChMbQjY3V5mFFbjAbdJEyjUn5Ynk1r7JAKSWcA3QkCXgCXugAotveG6paep2BR32SZ",
  "key26": "4d3JVaMun8YJG61fMXoVmFYi95CPtkdbnWFjRNiauTEDMAaXPr2nhENqnB4gEbC2Hr7NBNugBMA3cK1TJBiFcQcT",
  "key27": "qC2MBexfgEiTFr3zhw8dUUskMdPuoa2w5UBobFFuwKv2MQuqLFMTceiAY9f8f6XPU3kDThywrDfrF3DNirc1LE3",
  "key28": "4PKzhkVQ1yCx6CpBF34rSz2q3Mz7jYhw5gVpkRE75mzLNnBX74h3LdAX9ZDeVryZf3rxBizBr4RkAXrKqNBti1wu",
  "key29": "3DqYqEaWrXQsBtxSb5X9rNsWWeXsK5CGRLUusLz5WiXKy8JsiaZm24SjtbgCBgExFcU9E4CWbKmLp5J3M15X2Ert",
  "key30": "3hRErU5WjzQykFiimDQ6kfxkGGbpox5BJeYjBEMkpmp7q1xCReKMi7mQaSC8gVTxB643Pb7a5VP4nCqUT9BKvoPv",
  "key31": "5wvipqFRnDFKQZAMc76ojRjPmP5briFmnfvx7JbNCZCYTMZmeMRgFZR6CtVdUQpoRTQk4aoMyeMt2UpGk7kyNum1",
  "key32": "sfgYF3pgKJXPnLSLcGvQLnohLyoiehtertAyCcWQ1Dgd8KGy4vphxVRxh4bawPDew2fu5xsutnDZQdCE327CvNt",
  "key33": "2tjBgbxCCZoiLPgwdSMdPAJx5okRK2YStaHo3aULHycM7xNKJbwXGrmRA7sd3D625ispVvmXoXMxhezHxoEZWwJ4",
  "key34": "3smoVryjjCnj18RH7ojTwSzpVfEkMwB6T9ksaHEUbj5Zk3VensDXd2zA95DNNMPCtLenU7xBQ8HCE1Umssp3dCoF",
  "key35": "2Krg4X76pMHoTLsm7Jpu5waZrc6gNcuiUeGn74Cv5pXPMet9Xd4UJD6e6MNPVyBEDvxS8oUTrGsNNYPg1ANTJFrZ",
  "key36": "3QUneBYu1DikYb6yYT2B3BuJuuqRXYDgKTD1BjbJcy2ZPZrnfCpVq99RUZow36fG1dGwXFofT6sFdzrY8s2UZuM9",
  "key37": "5JSUNKgYFToWczfJsi1BczrQ3qrwbMES2ES3zAc6q2VycngSQUzt3Ks54EF9ffXyrXSNcBu6cwD4auNJnGP6HtXW",
  "key38": "uPiN9TMiJMeRKDmLhaFiBaZyNNjPwP1b2MTiBkRLz8ojeJMT7Ptvkzcf6eHRLdW37tBipjT5zizuKaSiPxQb4oH",
  "key39": "2pqAHpGn2QPmUAmo4tTfrLH1J3V9e9SHhATXvqMe4FG2Q9f9w7cz2YciQWPZitZLLU2o1FJkrwd5jYSu8PNrpBqJ",
  "key40": "duhpfTiX2pA5o8Q3nrfZh5Gh6eqE2UbxdgKruUKnVdGQMGGKhdzUGApYRpDXxoVJrVUrEQ8m4otyxcF9c8Hnc1X",
  "key41": "2YGAcPVcVmfLWAdEN8afqUdZv7k58LZTZxtKcAtm4ht8uBJrVegJT6Hk2RfaEtYVeBc54cuF21wwEsNct89eHLv7",
  "key42": "2g57bHfdrEaEgNNTiWVb6C9sNXaVDLczKXzSHMkJxJRqZqy2wHDnnuebVBzSiXRwgBDAvjpGvAsnExMet6HEtuxy",
  "key43": "pWbT9fZVQPzZBYDBxHtPUpVifXZQN8N1res3TYz3voP3BRt2pSETTboj9n2Mp9aYz7RKhiWBAAU764q8fn8myLD",
  "key44": "5Y3paatAv8xp51kvn6d2oLSwFQEfto4LCkjEUGKSUJmWUhBrsuzThc1ZeYtFMvU2JMerKAQMbbMwwfFSEK73iT6o",
  "key45": "2HDM4WNJqt7N2NmQzMjtW43XdKx4GhZsTQNnPAqB4UN4CGrHoV74odVi3jbLWtiRDCYRLFNdYtf2LmpgnzsL5k4T",
  "key46": "5HL62AHmC3qPacv3UpCuCFQN2L2vbRMX2fp4shCssbutUz7DoZ3MCC5S4tvAFchSUDtQBJJW62iPP1fiCRmVbCLp",
  "key47": "5CPbBkydNZTe7ahv2GYmpbVgeoq4phQhjsxE5MmNWTrzWALDtFfhSA96RmbYuy8CXAQJByUREgNUEMZUWBVEAzgq"
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
