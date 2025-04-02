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
    "5nAWdquXGuAk6jrmcgN7WvvqrbmCR3oa3yKGwKafgRtrXnB7gnpf5JwqBsvhLCu4Y9DdoLofkg6P8zUSdGxX1JVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CsbdfjdF9qcQdktN2tMGH2UKWx8sSLRmQz5jo1cXoNiGZrmLXkhSBL1UhyE35rE1NfkBzvu4m5dGyHkSB375cdd",
  "key1": "4DJGMzyzKXHyNq7LGzWU4fp43jf3MtRHcginqHRSGvzF8raSpFR5BEEhVXVSFJJ1GY7zsewhsfs8B2pKom8pkWbU",
  "key2": "4VtQSZCYvVBx2JLrYp2tMkX74pi1NL3DdizTn2cfYGNr4uBmb3xMPxmfBbcZqMx5ZqZojVdaoq5bPKeZP4AwZuBo",
  "key3": "51qarvHUtJhHumiBn2BgVyNxwdpN5WSZ9Z6xncaDBSWJk4j4aLobhz6G4nvcmiTT19b86LFzDndjMe64oXB6ERGb",
  "key4": "2tvuSmjW75fm4V4pQMZwGJKAG2QJtFDfL1xkXLSScCi69SccnC5idMzsYvJ8zYxjbGhTuQCqMokHq8qX2jUAeDpU",
  "key5": "31EqmBKVF7CLKErZP625GN9y2qBo2KYu6SBoZnxjNVQKsnYJWAw795EtfNhfrJLZiRjB4jQZYx9UaquUVQeaxN9G",
  "key6": "3sgFkP4ikUD8jUZ1yeh3zfQP7Q39TCDom53KE8CbTJFC8oH6ukidn3MbUP45ExpKZQD3yTiBj75J32c9y1XrjS5k",
  "key7": "5uRAVTaP2gFZx1M9MvVvHcA1Q34uZ5MX26k9cRL468d4yxUnJgH8Hz9HS3WdXgEfg1yqswoMEwZ2fzzgJAMpSU9x",
  "key8": "2XdcVwXU8SEvu68yH8hgFy7EsCTqiAjUuXJLgiPAxmQuAxhrdXYTVfforiSbx11Xa1T92gdhnHHkXwALq7r2rwoc",
  "key9": "CEyjpKvevk3s5aLUumSyPr2948andqbmX8QdaHX123ryPgM1pFayfWJEBAQJzPdLprADBjvPDt94e4tsPM1tBuY",
  "key10": "XkvY69uiB1fhopCxaV8RjXk6aMHnV1aaDStiqnB8FoFyvEAorZFJXDQTjE7rBodCexvq5qh5nsVe9VyC4JvyjMm",
  "key11": "ZtX1abcaMp8fbLaqA3E1kjH3b9PE2R5NAsw8ueLi5wcLtghWiu7Azo9SrCLc86w6fc84dWM4htLYRN8PQy22sEE",
  "key12": "5W6cVwZwLMpXFNS2i72NMw1kxCE61j9AJJKBMjKgpLgHeX39H4q5mix7ZZUA7crDcTVNx5ogmEvjBt8Td4YwCrYB",
  "key13": "1hTtjQW5bUbwXr2taKWQGQCAgFF5gS61EcuA8s6Z1kqfpyjQ2smTC1t2hSDvzYq1JWphgQMnnnkZqwhgsx2CLAm",
  "key14": "4697pbqYbaPcDjM5pPRRWFYtP5ZwkVke1fKvf3QR6V4Bz7SD8FJpEctjDXsMMBhW7K9s7ZV6Kx5HeeoADrPuGuQW",
  "key15": "o4QWALm1KA3HdspQXT8E2pgeA74YiY99mLvYZ9n2piqiFkXXUzLeRHdfd3ePVY1e9k6zDJgqTwDWys77m822TFj",
  "key16": "6eaWstvMkPAnftKfownPGqbJCaTzmP2kvZgaFkAkxDsa4tpvXAt8K8HxdEvhdD8jTGLwv9Ncu1CWo5oU5dtoNGJ",
  "key17": "2c4Bz3tGKAEn8gzPBy6yUfsvZ4sWTNt2oz6gvVmhsV7i4qJzXNrURjna75t6BJVxPv21rjA5rhCP2Saoi8rLzgTA",
  "key18": "3V6PrfjT5PixqweXtNcXULeZRAbPNM5z1YDAAJaEsY99dVA5YMqF7p4NmmEJkB2L1biZgAgSuj8SKBePrHAkuhyx",
  "key19": "3ikK8VjydHxa3DxFoRUYheHrhrKFuUiUrzxEBv5B2g5GS5uiiV28x7TDFuWFYWkKrSNB83DHqxRowHgm3PabMDHz",
  "key20": "CDkYYeyTU58JdH5ysVFbxS4QuXRjFv8bngBigRDffzLxQFiq12iL6J57iihtEPKQDKkizCZ38TLWzLTjusDsJfQ",
  "key21": "V1pLro2uB3vg588nFTSofMmraxp9RvUBuoFCnmABRDfThfW2MLzbZXzT2vY7DcJ2koNAZkAmTYd2pPCKsWVc8Gr",
  "key22": "5zfiDPTpNingWyewRWDRQrVpGEfpvRErNFNGSMfzvwgmDH8d5c7NeMqsyHJ469YmWLrRogd9wvYGVcwHr9Kd4PP2",
  "key23": "2kGbL7NwoKmRWEbqzAUbXY5rjBxyNFLL9Sa3ND4FSj2QzM6yytobK8ZDfFfnsonpjErCgcbyGNtq5vcVEoSc3MC5",
  "key24": "4jAsjeHo2Fs3EcP4sa3EbZUE8r5fwNSPQkEYm4cZStudZ2oA5T43xUCaVKoWvFASe8Es6RiWJACc88JHeT4CnpnD",
  "key25": "4uY86ive2vvH3hTQtud2ykk2rrjXHs8YmDohprX4LuE16k9Y8WLwLFGMJmGPxPkMkpiFSvxn2inw7aWPfX41168Z",
  "key26": "2cq9D6ziszPxdafwmwtwH4JnGB9fTR4tGm632yivDyxwNpkJC7zoZHm3BrsC1PPFEJ8E8v8wgZMKZadEC4dyptXa",
  "key27": "2BevNxipjwQot4JVTU3ysBT6YFDy13ThiSsEVAkiRmrSbinudB7c5mM369CsjBJaQRCXVbprAQoL4afu3BEn5Mby",
  "key28": "66VhsGf4YXdWQgU2FCdekYeatgxf1ZkcwL6eo1iTMxHCecH3yhHNPdNUyWEqYGopGJRwjMN8bqQMm1j9tcBdZeNv",
  "key29": "5yKBZup1Vcd7hRDDbc3eYEnCt4kky9iKo6FXGRa6rTCfno6z3CzFCo9gaZWTZCuYHWwQKWWZnj4QsspgPmmB4yn3",
  "key30": "4rPboAg5GsS4vHSNeHkCXm9K4rnLdMAs4wmmaBqe84jUFjDgeYa4bxydPdnH1ZdEXk3PNaKDenpSCwQiEwmaZsw2",
  "key31": "5h3FHWm6iY9XrtNoio9CtYDsn5Z5ypj7pmz8WVDcqKMjaUssrtysfmUL3Xc6p8AtAverq28dPozMX4NBqUii3auK",
  "key32": "bDqqnYVyhCJSpCdY6qGzzmsbpEWc4JrMMEBhGQthPv3HDMQBGTU39VWzGGZpQH74wJTbFEHKaCqw4ru6KmTTy55",
  "key33": "axg2g5PywsTv7hXK7aNfAVU4xVvKgdb1umDeuCTky6wvyKD7WiHJTs1813Bh6zNExjszqXQgLaRSetXQwZBoACU",
  "key34": "sRTrLopq4avbze4aVnd3f7aquWmt9qg7ocmiqZTaf4kDQZoa66LkiPQ79pVpriLEB6tsQCgaQo1eDJiNCPV3ymK",
  "key35": "H8p3gFgw8QcowUv4bmF4RcNsjbU7YDsgaGFUMdyn1QAeZYQ96toUehpLcUVaXAiSi3EQ234K5nLd9BjhZ9nHtmH",
  "key36": "4Nxc1GrTtvyuBTtDf1yQUTQSeeUMd3R4AvkRf7iGG7wMWLBmXZCmnnQ48CLXVAB1VDe5zsPq1K3WnFQZLpQv9rhL",
  "key37": "4niH8jATE4Y3R7LCcZkxAQLFymUMcex1RFe7jyPbhYGQCqJJx9uf5G1LMtZEmU9L4jErEeMvt3izqPr59CyEAPUF",
  "key38": "3zEdCQDFATyCE5JMHBYVfUdTcKG9c7jZuFrBdoq1kTqXkCLWrYMr449p1khVGcW5rdaxpWR3tbfBw3psVPmSbk8R",
  "key39": "2ozpTzisTCsEbrfaEXy68rMiF3rtr6mAqfhRwPPMzdViKz6d3ToH7pqdPi6bNEpVrhZwc7FSASaKFet3p85drRZR",
  "key40": "4B3xyn9SNUZHASAaMn2PUAgdkRt7QWX1mz4JSFFZ6ygoLYgmn47L6huSvAHKQuEHWLcXjggSc7AEdf1LYmgrgdL1",
  "key41": "5yrKRtDoY99Yy7eNHZepy469KKpyxikHuYezmgCXKrCQus5wFixrqsFYs55XB82rgPPibwwXCoJEnGE3Ry78KLWw",
  "key42": "37vDxMSbC18nZroLQ2ecCrwANF11PEE6r5ajpuNm398KPQWgt566UcTHbiQECnebVQMR439jbgTXYUUxoVnAk1J4",
  "key43": "22D6kCzr6CzY7Bn6ADgb1gEC89EUDpR6bFXHATUi6cksReU4XdTrp9Tgwh3E4RRbK58KKyx1Q7pzN973kdDvpaFy",
  "key44": "4Rp1Con9ynP7fp5KN5gmpnXoamNojrqjTAQEPyja8pdhV21s8djpbQeTWb6h7QpE98ZCZNVy2AJsfiEsoqKteLrJ",
  "key45": "3eMbTEj23yLNu4TMuA3aESsavLGai7YR23WeC1qijUUyEtCiqC2d7bY5TCgDa2iBPww1h3S2VzbZbdKGNXAu5skN",
  "key46": "5c8QhS7skD8Rc5ZmaNzbMwSUX3FFfSapc2QnrWHJkNG2zT7iXTQgLniF91Eg7RKwqB9Wwuiri2prMjw1H9yYufMC",
  "key47": "33hdTrw5wXPczk6QGbZePBo91xbU9kCXQUopFiUKbTe9AviUSzCs5cfBSJq4QjN4fZdRBiRJFY1gdQpoWtASa63r",
  "key48": "3YZGbFwuZJMXjw9G9KNwWpBkGuNEZdkfz6YUz1s69Xx9TiHwqWsbWRHv4PKLSoZa2httpeS8eXaes53pMqYe32hp",
  "key49": "2ZJWfwxPT6Sm9sddnVsm5HAUvrMt8Be7Fssh53SqiY8zsy9KXPh6ZsnxAgxKoeLCAAt5N5K67yU2BS1s3KCBBBWi"
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
