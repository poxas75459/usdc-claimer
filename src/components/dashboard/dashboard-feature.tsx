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
    "4WHcEo9maJH12L4y345sJ7jxX47Bd7HR9MaTJMJgWaEinr9VY39wYryqVskikMK2G6qCUivkZfnCvRqayXv8iDqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyLdX16iU6UXB2CKzSyNXMsy5y8oG8D6nx5qdyqo2rRcdqdWTpGjPg41GH71jo7SdrsMR6aM4f2JHpw4wrSSsrs",
  "key1": "2ovgtksVceH1DFH1rvoA8LoVjwjye64TgWpDubnumyyAxxdvrZhLLnSX8Dd6UGcAVdAT5jZ3cyr7G3RpFosj9pYA",
  "key2": "FqfWKfWXUKr4uHYj8hAowE7GivnKRGEQ6R5qiAUpoRJELS81rFLK8DPdqTZs3NRL8yvU3X6ztU3aGZvGNVhZQPr",
  "key3": "5VW8oq3CxxaCUDkzMS38QaU72Ma6HVZZUbwUQ4zNYg4dBrg1VxoFr19USyHwZbvxWNXH2kutNYYbAFT1fZfPMR2J",
  "key4": "ytzq2Vbq4FGBwnM99zYcKiY8sfzjE7JRsxonUrXVZC3Cc825RshMaNjjHK3f4QLj58DwLfg2d14xCKLJKw7YSqw",
  "key5": "NW8CWJ5bqhC4TD7spQTY2q1Tnv9cs8u9vrnCXDXmcjt34JPgXnxCYeHVd4LaZAxCERaBgdCAkuCRTkbtrfztVmt",
  "key6": "5wxAefoRc3UZadPGxKcq96qS16ccctvUZErZqe24oUr9K6ek3uX1cKuqSUFZ3TY3DkmLALqN2wbfWcykob3qG8ZR",
  "key7": "2WexvhZ5e8ckYFuiDYQZGVHnKVjcmfBJNqSMcSPN1isfWmpkLvq1PmMnWYMc2nYyV9Y4cZAHuPKQcYkCGc9Ubwm2",
  "key8": "2MgYbEJcRLMRw9k2zgSiZQZVvehfgaUZ8C5BewRtgWeszNrt1QsHXiMZbAkP3yBHQjJrUhVfGS3mfgNTqtvMSLTP",
  "key9": "5sMAwvajoEMib8wSgFEFQFU5c5N4sXhQqfWWSiaJAowpAuwo1nC8Y3iv52k9j6BRu8PM268ttoYvEKwQRKEhZD8a",
  "key10": "27heMjw9JsvTz8nDroFbkGocvLEDcdiPBa9pKS2ECD1Q72rg3aS2RnzA4yFyNYQiwF6Hd4YFLjTK9dDCC28v6Ygj",
  "key11": "pbZKDrc1QcdAJhK8cPGRQNudyWMFmVXJby24kcDaGt3wSUAQdzpf2npH65rDJNrwxmg79w23RWSckkW9UWutbTd",
  "key12": "y36CcDq5FdyZEJY3PqE4GimzMx89cY96oNM6ACUbGXWJvug8PqNJmMq4uzmzvUNk3L8w1LUCJbwRPUjyAg7AMrM",
  "key13": "34kYer6ikRXU3usU5p84cn3e8ddcaUQpaWmY4mxLrLAZRrrBCaQsddrM6apB5hHEVuW6LbTwGyBRaWPqgvcAZwiL",
  "key14": "3bgCs24yxK1GUHJ9PYRLAPN1mHgtEjSFDupV1KrsA3Y2suyFSP5js7gTCufD7a3sVnYXaMiNLLtKyev19W7t45aJ",
  "key15": "4qgTTSAm48xYhGtnQFcoecZjwVET1evF3He9kbdgWz8Dg8QKeuga42tZrkHNst3YBkLQLhDFYQ5Q2UW1MDnJSZz2",
  "key16": "4awj7XfxKnJ7TahPnVb7CgTo5wUjr85SBdVd4TfTCpffRB2TeY5zi1xQs9ZLYwbA4pQW74GwPSK4PJoqqHQs9Vqz",
  "key17": "3uSkuvbCT557vbLcShXto3XQDDR3D4CBs7z4xJqx7Gx1erkzT56DtZJPkfNfXhKUsAkjYbYcarXRyaifkj3bqQBo",
  "key18": "3Ytui3JTycTZaZEDVTsNLM1aYcexZPTwKurKSZnGui3Ctph6oUuwBRuLCRU2anR57XDfgd7A4VB3SBoWViCTC8zz",
  "key19": "4eCbuHYa2DctWEKGqvbQhQTMdbPX1Np3YBTQxvkHZ73FNTE3HrG6RprCxxjxyn67o2uohxYUq49YMqKfgnNveFs2",
  "key20": "Sp5DV2VvWK9rEGRyAvqVjidfWi8rdBkgZfRcH1ucCVVBvftr68rmUxkqHVdPDvD28GA1TB5kLqBhnhotfsqFhWz",
  "key21": "5sFc7u4eE6X6dhZLxL3N4MnsXXEGBQuGi98Eyc5AFxaAinAeGkjieepqMWpkaFZwF9jmqriWkLGySKGsVptG1kRG",
  "key22": "2YiPbHxnPEBAdUWtdk9TF42dhWjwF1UtFP3MhK8kdUAM9yDcyYAsBArFV8PRKj3TPjcJA6ht3CbKX6FCvFTNgua4",
  "key23": "4e3UH4toqGhtpsuGauBBQZEDUwby7qLBaMrK9JMV1JygPxzBgjtEBQ31Stqxedb5cQVGqjnmDvXM6n1vuqngqmHg",
  "key24": "2ECs7gQde6qZ2oLLVpWERZ94T6swCSVCauqcT47HhpeRajDHxEdaqXJPGyw2gKBG1GQ9DuyfzX58P7n5cizKMUoh",
  "key25": "4iPfXekvKfrzffBgT3GUmpAaoGChTiMSRzGAM64wpda1dKzdZrESeBtwBksYG7UeoXckEkKDYDFfkTN6TRTh1pRc",
  "key26": "5oyPVkyEqRZQTntSnUfTd48v82S4W8qQxfkDdPbdacFKVWAwwULfFsEM4PEDAfHftYH8QeJWyFUGRYaDmdWM41RX",
  "key27": "5kaevSVsM8mFxKKZyHyqjDT4VPJKA7KhJasjshcCh9gbCTuSbgwJwX8wob874wVUrdUWeuSChNM6pCgeuAQfRBnw",
  "key28": "3QYRGtWjRSj3kJs6nV7cL4tJBrNaVLknvstRuPhTuJcrZrtqkh64gCq3P3HzGUSn7baDCofzAmUNVQbMH3rQG6t4",
  "key29": "2Whkdse6oj3mB7GQunyz38qs7K9wCLjNyWGgk48Gjh9dg1U1b2zzJf5x5FaqV2ALi9bXSaxCr8vM7aTLDsGWjzG4",
  "key30": "4cRAa2Eedfkn3jx1BtHBdRJMLWTkDoQ6gPrn35vdzv2PFsThyvLL6pDRZh8WSX1Bg5YLWWhWZEBXxm8sTg2tZVj1",
  "key31": "127mxbJqZ7g9cm93C1xMuKCm3wijjVseLHnNiH3fs9szxu6rbZmkDVYCDxCggmWM5E8zP3eiM2Z7HhjGspAZz6rS",
  "key32": "fJHaRXvWJgaTxH62p22cNA9oCyebJSBqCCgBMxMXDdLzWsrwQcWCoxf3ZLmKBqtb6ckBewiLHpGz8exLTStMk2g",
  "key33": "3N4Lc4aKkSuW8pYkHGPDdJjQkzfwkaEthA5LjB1j3MeehckBdJbuNd9V5nQKCYW52Zg1xZn4iADfJ3BQ7LSMfmAi",
  "key34": "3gCKvEBquM2vHr1kBtS9LynTrsjBRc4x4YR2iXgxr7YxPakH6RP4YEqZ7t1pmGtW2wJY2UwftxnUNHkTJUdX7aYZ",
  "key35": "2fczuHqdmUKUrp1iiZNbtaceKPQKPufEiENSUwZE3F99Q7BycpTU7RWPgERXcPdH1E7NXGjvzJu8xp311WqeH3Fr"
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
