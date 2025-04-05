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
    "4onnNEqKc3aLDTkwNaQq8m3paMKLHLH7F7bbByC7LU6GYhe3xTzywq4sM4uPSsfFigFUnJTRxK13QYHvKp8bJBQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fLGAig4YHHzzbq4Tz1ddnhRKc5GGcSRadctZzqyHF6f9jQV6EaSz1AET9h7yVtkjDiKudH6PNktbTDbmwkYs9Tf",
  "key1": "21hjxLWDqM2bm6SPNPeSG1cZNDYdaptuUCbGjeQA1fsHq53ia3bGyAVfb3WKuP9QV8gxWk5aUbgZtxtDQe1TF49S",
  "key2": "2CpSoqkmzDSsX3u3CnEpXw2QoiYgRKoagCpHNjXx2SBBgVvvns7oah9uV6Qzo3AhFnY71vmcN8QgeDgrGgaHsRgE",
  "key3": "2mewcyZdyH4FqiY9QK1zimBQT7X1NsEAdtD5n2YkbaGHf4JJX862Fss5orgGb8remSKrbyBM4bDyeaw7eN9993nT",
  "key4": "KCwSuC4BRP54X1YQaKrEJFUX3kV9zYkEYGubXKLm5qcDvhMXXXMBDJxL1eHhnAcN6udyQ2tf8Q5z8jERECM5JTn",
  "key5": "gVDXFwG4xn3tCXFQvd86Gw82BXfkLP1VJjQEkDpNxgtSDvpbnUA3zLmZtWXKHMQhgCuhChQGsH2GkKQuXaJnDjA",
  "key6": "KiD1JMTS4b7vjGMMdT6oqVJWsLYpAwazrUVyVcEmRaafW1T413y8zZPGWhaqS2YdNw3AvvKL9vRYXyqiF4uTujb",
  "key7": "3XX59oPKjYxCckHTbsToLYys52XHcsRu8e1hopUmSWEAXnH81sY5N4N3A5RCkCoC6NF3pSAyZbi6Sec5jq75Qua5",
  "key8": "5rfY6oTSmF9JWCWBn7ho2Yku5XQiGWfCLQGNjs3ovcayRbqPvcocfxjQoYmpX3mLUwQv4mfqKRbAspbk1DNvpBuZ",
  "key9": "2TcGVdwJJHYB1Td7is6sfEEKDTPkP79FDkzbhpT5kjBkzctpXpPQ2cNnfddZo79a5W7MAMCf9XJR9Sa2rW1TqKBf",
  "key10": "3bXDCSXWw292fWi3L4sJCSZozhPyRgBLPvsz16nra3wgjS7iVu1KEfQZrERQXZabitoT5uW96n9NesLXwBAog8er",
  "key11": "5tvifL4Kq641AiA9KEfxtQYBouoXegRno5EMDy1Yx1Jr9rip2PTCVCvCHApPnbM3JXezWv7yXdgMvupmRn3hS5Zi",
  "key12": "3YseJ77s5LqF9hbCGRmbVWUo5f3RUjYueagZjyEDyqMUp2RkSrm9MyZC4KZLJBhaVbHvmLxsJofrE1seFoPVpBGA",
  "key13": "3X1Gk8E4fHhJGPo63BTiVjw99t1FPkkBbMAHYgokVAGtRUtTAS6sgpCAwDvnx1ERwNUsuN1qaoHP56spkH64579F",
  "key14": "8A7c5ovDnRPjxNuAYiWCRQSWqUTP7kbNB9G2Ax7htGpoN14rDtoyo2243Nio7AdWAsidxKZT3iYu7Q2XZhwmaXb",
  "key15": "5yGzCYdfdfGnLEMx8sNoZ5cn3VWX5Z2VEEPDVaDVc2VovLYaXzUgincap6CRNuuPMM8XmBi8m9yQ3U3PEkjREtnc",
  "key16": "5ow2YP3aaaLqsQi7chQQmWHfGmTMBWRFM3sii5J9WfCS4PFvfoiNiwpP3Ugr4UBKczZpKenL7pxis7gjzNv1JBMJ",
  "key17": "2dByzLCTtr6xVmF4oVoZb5S6Vxv19fAT19SbqwdwfkkZZvk7UM7UKw5bw57VJuZZYH8C58BGuoYSzsmH7U4tiXGX",
  "key18": "5ZbxiK58BNLtQ532XhyXYFioqw8JaSS4CzH76YHh7Vv9NPSNc1wfUcLedbD4oGcusqf3XLvwJGQa7rRAweCjN1Zm",
  "key19": "3YuNGrJrPLSDNDaZDZg6x36iegCsLKvmEKqkJC9fEA5b1FZ84xaiZw4iAabAEdiarUw6StxviH7Ahgd5A1jwfaBA",
  "key20": "3bALFPqQRZBvxxBmtdiNhrSeyYTRyBsS7dUJA9agh7ak1vseKiqoiCUeYoMEMte3oRP87a5fSqz5jVChuC5BDvgc",
  "key21": "411YsfnC4C76zKcUxV1eDFTZsZ3TNAux1R5Dt98nEjUpHzZSADwgqkPkhH33ED5joGSzXbYd7Uwzcgm5J4g2RKX1",
  "key22": "21G3g89ojkNt1jXZJ45iBha6dzAJpg2C9U4t3QznEMRZpXyMJ3RQ3pexaK5vyDZNimqbTHmsWeiMSk52R3xWQtSa",
  "key23": "2CDaN1gvPmszeqbFzGUa9X4BkPDqtF8PF5c6jEVFjWWzZ8sE7mbRtpcrAkTjJZ6L38gGhvE5BhwNuvhetxAbcMF7",
  "key24": "5mDrH7yQaLhQNo4KCSHyqZEPfmWRGGGvvab8fSSBwxw8ZcCQhZrU59Bsy2F1ioSrfd8c4auPnoUdBvWqiy5jDX9T",
  "key25": "2jkg2hJP5MnKuiMq7Euo6y9dW4FwM44EML8BH4k3FapGPvaTK3Y8qhKHz4vtGf8TpozCg1PMenyvGpjhqYU7JMxK",
  "key26": "2QEcdUG6yQnrCso2uNyRLdriEUXXYUrfKa178h8TsgP7TaNDthGCFByp1vNZxSmycZkd96VSzovYYWFnHtxWAoRm",
  "key27": "NSqVKCU8LpxxJWRTRx7aTxmGHkASda8yT5r4rWLGUYNqgv86THQBztwSTC5VCswDYZkbqpWXFmEuvoC454CDDWv",
  "key28": "24s32jw8hnrFSRw8bcVJrLZPBooTuXRRg8v3dxkC86TQbPoz7ZdCa1MfhrwATW2TF2TkHQzGLuPBTcG1dMXBCYD6",
  "key29": "KXAgFQ5EhB6poMv6qgBUb4njs3V7ToZAEPo2aqxSqNhcayMPjdD2qSMe8nmsE6QXQdqHKKqfagUe8Srr7ThwfHf",
  "key30": "52Zkyh1o19KqygZg8ZvLfHCCqxnCmuv2d4iynLLgAJ2hD52QBPvdrzKUkkJc2HcbVan6w92WrU83KA8DkiPJX3qw",
  "key31": "2jpYSaiYEwWpumRgq5FJS9yT6d5U2ujKxpd2CsdRrQ1kQv8bBbJem3dNg89sKN6BqBJBsH4hyPbNb6QRnayvESrX",
  "key32": "66UywfRGLPtLaZLwKttnrQE9357o73xcAejjAFmqqZT6YHftooXvsTw6tBNviKtfqAdfWyAgky8x7r2Ym14UZ6Si",
  "key33": "4ToQofcKVLRWfiRY7TG51WdNmWARQyW83kKqa51ESo3nvziiH5N1XtpeC4HEVTNnLa9b5YALJzS3BqaAaeVDSSE2"
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
