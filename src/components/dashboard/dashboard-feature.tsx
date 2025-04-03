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
    "z3UCvPL77j98uJua56YsSH7jwizxgDurWbVVPoYv7wP8CBfVCi7Hey8srfMJ3Y4SqhmdxpZThshn82bumDSWhMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ejz9xVVmvduGDhvnHKKvdctL4ZfyMvrJhiG8CxrK4qSAWvAG9ve6ubCEgNLDQe8fiMFrZXmYd93V22dg3Lvdbi",
  "key1": "2s5f3RSZKhxXF7cHhF52ZfA1JA4C3JSyjFKxGQqyeMbRUomy2JpuhBXdVZbPNM5CMD5Vee5HEWuvC5U52nMahWZ1",
  "key2": "5wFEjrKkn9uuBsk1NQhShXVaZ26DZyXWnFeFoM87BQt4NWKogEPGRkm9rBk9ZrR1HGFtDjyuAgrKpDGwejh7Tk1o",
  "key3": "2JgDY6c5fffMVYyEik79UikA5kzbSdDisoBowR1L3ppFCmnaGALUqYMmfnWbHcvD8bfcmVS2qG9DTEQKk2Rd46nJ",
  "key4": "53UNp5hAAnh7D1q86n3PUyKoKJbM6gWc7KkheeLAcDatpwSuLRrQB2g4NqRLXppNCkahwa2SwmDfndr6EPSTvbuZ",
  "key5": "62qmd6S7AGrjxpPzCfNoDvEZU3vGkqrXbTKyjomoDk2bRR4rYR27SesYeo9qABGrVPsa97koDhyWcwKLMaz5pCDH",
  "key6": "5fJjCzPRu6ujyjikc2jbLoiWqBNJaG7pMtywSxF1j5snox2JDdY9gqSd6AGgi8EBVd6PTinpP7Gphp967Jrd8nwB",
  "key7": "3oMxKSahfmEdkfRLBM95kPWnDT2f5YQnSZuHbYsrpmxAPziB3v7dZfUnaDqTox39SwH13VQ313HtTyXxSjpVzymS",
  "key8": "2CEYn55R6FTHhWrTSGJETuQztLMvMtrphFaSAAiwct7k6YQUNGov8nQWw6gDAH3chKzKM2geY5tRQCpNAywBCnAa",
  "key9": "B1Zc1w2Pf8HLRkZ6QTVLekMa5XzkhThq8MrPnuAht8U7h9zNZfZbgHayMmvDAFnDfQBCfpecChkpPo8w9MULwRF",
  "key10": "2yorzm5xRvJJeh4w3bCCkKf9BRqebeCuU5RrbmxSeb8nX6n5wbaGcG8Rnv95wuXoNtuKq6JGjtUv8oKHHwJRdcRE",
  "key11": "85WQ173BidefRcBNZ6PrxMEm31hdUGzyw1HNoUbJhEZA3fqHdEjK6fkFi1zan5jn9q4t2MKZprEPBf4WwhqWmi7",
  "key12": "pNB7F9utfSN6YQmXRLN8VsnZ1GkZ95YCovMtxPq91Kn9XRrBtG8abjpWueHpSMSaPY94EaxNF523nwgEL9g1GTf",
  "key13": "2ybiJVQRtU24uP4aanNcxJynA64dqJrR1xorfRpDxfQhN679zCyZfBEo3bvuTdgqLYgMqqxcJJHv2JTro8Hj65zi",
  "key14": "LRp7AkusWZFeAGnJ35vrbrUfr83VZTfCwe9ryT2WCnQokZzEw1wPCWyyh8SwJGrAj91o1N4YVzSsfP5d3dovDSY",
  "key15": "2bpFFwakouJpMXqNjfPxdr1qVL8ubVPR9WZ8Y2nouYpmy6gRsdAfaCQiYRkxrkKtbGh1n9s6uiGAr9J2W86TCASA",
  "key16": "sBMaZEQC2wFNq7PeSXUHTyzfTwLgHmQWsN41pofd1sdYK1d9whxdEdjZVCuzn1nLHEhkdxPoDcTTaPjf2coPVZV",
  "key17": "4a1GHcN376yuFkL5yJUVYNjXNdiUKPiF51UorffR1afpZ1fmTJxNQsgi69DeVV9Am6JQ5aYRwkXafW47rmmgqXFY",
  "key18": "Bd2efbHuw2b8nz53vALdi87kPnsuwpci8gtaPPqURFBxucUUbQAyMHFDJma43GaF1di5ejBViVnGhBpsJwzoEH6",
  "key19": "MbEduwaWF2tKghXLYadiWwmELCR8vSMnigzZcFjBXHSpGmHqmyEAuaFsaPhE2QHoectGZteubv61j2891s9edLN",
  "key20": "2VSkS38WCQYSf9338VT9xbZHntybqp4zDdvrbSvzbsgkD29pxQ4Xoi95JKPD2pJhP2FFGJmENt8PkKN3LwfmRt32",
  "key21": "4rREZMQzabDCw88g21UavEtXBcfUg1A5NmJArqEWnv9MDcEMtYRPzUjGLNZCMkGNpKUm1QhvntN2khSdWMNTs1Nj",
  "key22": "3YGwdpdrKezZpmUCktWhaoz277JFh29jpxtS9NxAER9LyfQrJt6Ka7xwjw3afGa71GNsGWmn7zCRPbEaLsHntLND",
  "key23": "3uREKoqMMQVjqcxWera9kB9yhXokopqZoWMYpguKDnMqBRZyusRZhbBxDXhhsSHHKSa7iU4huMNKzVCdP3VyH58H",
  "key24": "2Wv53WeQaktYgXER27ipWFou1YQmxZ5m6Nu3qGuG15Wu9pjvXpzdajgFjMJ6jsedu23kWGXGANSMBFfLBN8nnpkE",
  "key25": "42Q4wSHund1qEq8kfQZScFgWZk2BQRCiyRzAjcFEyYp5xqV88sLDkpv2qtQdMLKmSnPGWgiJJGUKNs5hnqja1tPh",
  "key26": "3LW2JMMFqaLoCAtL8LYYTsaCAgnk8kwnA4UwxMngTvacAMdBpkPSRH9zjggRRdyAB8aVxwphzdgU8cwZ6cQauJLq",
  "key27": "3bP81W5Sv1N1vpzB281rDzB9jK2gBR3zqMsFsesaJKTGNmLZZKokfR2mm9dAm2uZovz4tMDY4gKEUUNyw9Ra4mmQ",
  "key28": "gNy2yN9SKLafTPjSSWtNNgQKhBnP4wGknmx6aZSiWujMV6Qm2T5V3aPSBrMVUUPUAgq156e1vQPJcDST3Dz6yri",
  "key29": "2DEAkE6fW29VwUwKJxrnzkMbsS42BnJuCtMD1H9xrJnc7isNuE7Qj6Zoo4A3aH2Ja7NfQT4N4dyad2YrfC3YoFu8",
  "key30": "4y6W1vwVtkYDMmBeEWh2wuBupF6RxbRDFJFR8xFsTqijNXDS9ev8GLdArtSaUffdRoyiyXne9XvLkXTcR4TVRWYZ"
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
