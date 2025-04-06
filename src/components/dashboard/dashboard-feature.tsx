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
    "4pZ4yr872fBnKPkNz6rTGAeZbAD9ovGgohxeNGf364YobNH14ytRy2Nkj7z9QF1vh2dsPfFVKwdDphWNUQzQ9v1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JL9fxeqnaJUa7sCq3NpTuzx816ZFrRRtYFqmVRK3dWpB2UxKWt9BEGE1K27Kkq4EAMLy1XhTA7bHvLYqguVyiBv",
  "key1": "2DGLUf9qdFKfnyRWeUFNEZPu1jMvEUPND2bAEBh2oJkL2wDCiEgrqiBbhR4Nxn6992kTDTYURyk86tRjithbVKkj",
  "key2": "4QwkXToNavN3jKYszqBDd8QzseojvEULKt5CefiWVCkGcw7sBNnhD9R1d5oUJyDFQ2JeJXhqWh9XFdg5Dtyhk32P",
  "key3": "2SVu5rnnWpMvSZos6sQLR9C7xaCapv1b4L8DagfUDvEU5GvfxxZCNSioH2uHdgsT86eukmzX1CaAWpgB1tGyspZP",
  "key4": "3iBeuujB1HRhrZfHBnb2xGJZpy1b8LQNzEiukcpE1n19cksb28odwh2KAG74Jsate45ohvT27Q2V69NthXE8mbnH",
  "key5": "2iCE1cx5bjLFiKPDsEGZDRgycQo35d6SXR8m7ECx8BRKN8mfg9URc2wvYVnE14wBgD2Q2bPYNeV4uANF1dx2AZ5P",
  "key6": "29nPJtMnGjPSUBzyx6MDHnBrjvLbV2xMbBXiBCCeZ1MUXSxq61zUqdsLkzNBjM1sWN1SACZQzJs97ehuZNY47FPC",
  "key7": "2EeHbPYqpg7kU2Fa3LtXF3x8Mv7z99LdNTsaAPwmCMVEPGpXq8fLu6MEy8HT5YtYimKbwJRYAU1X4AgErCihzAaJ",
  "key8": "4tcpf67B6SCzUVfWUu34Tz35jhsXeHAszSohn5azjxjzsW2e6iTT3L5ekYHEsCjmCHcGJ4Zd81voqjRejz31PgXA",
  "key9": "vP2tdywxJF9WeHefr9k1eeVjoEuk5JMy5yAeAdsbD5cENAEB5qUAsu7bQRYrEzPEvcMzZpasVUGiBkjEbpRMcSz",
  "key10": "3igkAxWT8KQNLYmTe9gm652gap3N8A9nAh2DtjqgwyHEyovE9v4Lku9RhbHYW5dRuZuYzgRLSgzyL265fqivvWW9",
  "key11": "5y1BLXnJX1HEXGojuzyT3kZRtbDxGoEvF5zkV7dgEvmZ3x8jKxt4WVoqTsDQV8pw3DJm3PajuuQ4sUVwiTLdZYQc",
  "key12": "3FxLgVc8P274qPbhcc9kG3VENEAzGbwNTrT2giuEH5xh3JD3WhQELPx1bnxgH49PFCibKyHxqX2622qB2jWzZfEX",
  "key13": "5narKRenuWt8GrSjYbmwG4vJbLKGCHnkDUbygduANw7GoQQG9Xdp9CEQXPL7L8rYKWB7nPoNNJUq4BkdLusM9kTh",
  "key14": "2VsbWJmHDDhJJ2sN7a1MAKdn8ku3DZyn7AGYUPLxzrdeuqbNF9eMWYhNpCrgmww615NTECx19NMe67Uax9vT8cfY",
  "key15": "67M7ZYuTsLqvdFa8FEtLsYeWgXJaTPrxB6Dc9FDkzVg4aQPavJRF8Da6ZMM2H65j9rGvg1bad1kDq1P87iYZJWao",
  "key16": "5uvR2XwjfdtXDKd7JqWQnRErW7cfj2K3HFrWDdxvRGLvkNXmEBM2DfLfZLGGsQhgD8QQNS9ArGLZ5KsZiaMNu8mL",
  "key17": "3JUsnn8RCFCqpD218XZZMKAsm7Q96pMoQAxkqFHNBQPHmLRR1UqdajFqBZ1RonV3f6JRBjcs4QbQaZQkXECbqm5h",
  "key18": "5DXKfTeoWiZ38tHDUpXdZTiyJ9AmVkNLLcfY3Hta8LT8EoP86PQk27hPBKxgrmXbxRDEmhfwXHswnnFwMZzUcNc9",
  "key19": "4STC5s6EtHjqGKihLUZ7Wz5vfy7EWjuVuQXs317arMYqsFECvpV1jtB7AVhBSm6rsji3K1qFPMrUmygAGfd243oP",
  "key20": "2dWo7EANWjEVRKPPHVadoGoN6xH5WiJ6XGStLmc73PvZLcSnN4Qi94su3W3vLxvsbEo2pYavCWyhuBALcLXsZfM9",
  "key21": "UrDLwpWSa4zUS42ttpNKD19g8Uo9azScsGVETGy7AzcfExqmLmogsGV68un4psWZSZPjvMcCedoY1AQpXWbgZx5",
  "key22": "2ANhArUwmChWAF7EbXVSo1AcjukjTccSXYkV5dse5nanmbCDXw232j5ryycBXvg1NZBHbKZsm1aB2BZa8mqLrZA",
  "key23": "38wQXetLQTbuhge7fBnuUWteP6HJiJxp8fME6ujEA5jja2jBx51RdFfdLhqmW9nqm1ap38xQw4JSaVRX8ECc1Scm",
  "key24": "2PPnwHDn6oFHzQi7xPZLHG54MAkHc3wyVgpQZjki9PTF71EDeHskVM8n4rB6QcrcJVkfdP4SYemJdh5kkCdsDgLP",
  "key25": "4nvdKDvNBNP5hjjADYJ6vySVFidG6P3iftngYAPGuVYVvjh6pcQkz8AzdW7J6p8by3dZzv9BQyqKyo5xaBfV3DfS",
  "key26": "4MvVmw8EV5qKzHhtUL7VDi6shXmyCivyGjtmxPvyWVou3DVKcu5ky9PDesnq4b347mQkFDEWX9ercQAdJF45fWKH",
  "key27": "21BppaMaohdUdow6U1GmVsVnHkcepguuiCrdj7ssTVPEYuw4diF5ApiyD3ZZMKJUmbiZGDT3HbqdAV5Lackgetur",
  "key28": "5B6bHstUt6V9488PAENieFeTfughycTAvJPgT8nvuqDYKbzmqvTnCXCjnPHdtBsfmd34WWp927NS8zmuJ4K9ZJL8",
  "key29": "4oFzrmz8xcmGut3JfQnWs8iwvtJK3ZcyfpE6wHUrRkpqfjYBp3LCAAqYrM7CxUtE66Qeo6s9XGeKYNmfcznkeuqt",
  "key30": "3A2a8MbDvy2dkdmRrexxT1wR1i9DUnZFpksULRgbtc3SPzoJC5FYV2rAxo2Xzjiym725zHpYxZWUHK7auCKsCyDD",
  "key31": "2VgwAG2xY6T7GDBmUqHvPpSuCTynsabmhhWGqibCQwHREjTtfui7TnkwVjgEQ11n6pTMniWHwHTHTnQYmiiBaKSr",
  "key32": "3fFpmkBL2gKwV6RP6dT1Gh4cbfoAShrfQN9fgBe7EgajMXf7XgDkAyoQWNpPiTN9bk151QjWE14XeXjFWXLSLQ9C",
  "key33": "3ya7uLhJ47c3CWgqCQAc9x3Td1ZaQ9ApWZRyJmcsYy3z6TnyUMo1rQDDQjogrtmnG2RAqTANqcEYhL9WkPfPxAs4"
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
