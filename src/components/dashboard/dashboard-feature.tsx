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
    "5dqM2TvrVu6yy7kNSZTiUnWsssEakXwqXxCD8qVZbBzuMuTaBkDybCSSoxrKE2F2og2ocCPTGh9GHqKKbwK9hy2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K6iv8eene4JjBX12QEqKsuLkR7WLCYCYPZt8g1KvoTc8iZFzG7A4BwzJCZbfar9HcRRbg7iagbc8ssrj4xeXg9z",
  "key1": "fpffCqSRbT4qraXzo71m5NjsvPfUkUR4efw1u6gAq2eW7KQhqbf9SgaVFdecYWHuk5iFbbsKKMGxyeMCXnYXWjp",
  "key2": "66nYUXQXF8qvnDXTsxAvPpXDgbwmDiKsR9ty5MXm96pennqq8Gy88nRv9j8AVAnT4nSMn9GgHGYxaAfeDZJ4tDUw",
  "key3": "CQkKZxuxsseegs8seNkt1HXcLjRhZMm2gWnhMKAEifEER9gMuxw49HCQWxdFyGShpEpPFvYQLvdPk86rmGLtVqn",
  "key4": "hrhWEvpr6eLHUxfhpmtvUJY45pwxF4b1YvCPVWXyzMTLGxyGjAVBpir9WQPx1EZow66ykpfGAihssH3P71vBeju",
  "key5": "3MVAL5J2UDtEd3DyFwwzC5L33N1LLgwA79CQXvwvuraSwMnE4iTCem5wF5MZGany4dbbESkKo5mkYnoT2UcN6nDo",
  "key6": "5DT5jhff6owmPPzTVWju1NHBWyMKZg6tp4u2K64b8btMDMUsoJZxAgRaCVFbfrE37hJtcRxwX3bsyuTuq9d4TdnV",
  "key7": "3PupfV5UJ665UBa4weizfcNmTsqaisqWA8fVbMsvoW4LZRsPpUVUbUMQYCq7RQtp7tTkryYnPd2jGiDCLdrikDx5",
  "key8": "4FG1TQbiaug97GVpNwFVaEat51NEWQMgVuDdx97nki25eJU35bqFpDnMAYSzTTT4494VyWvcszLKTPuMBGbRWDMa",
  "key9": "y8wGUfP7ZixC2Jty4Cm9kuk5hEiygC241E2iCwR8EsmjKctwjRx15rc7VrpDaChvKLqaB6QYkZkZEM9RzLhfw9m",
  "key10": "5LAt15fbdwSDPu3AH3dcTnVkBYhdyNcbcmnxng4N98cvnpJYqG6ahv3yXVB2fvRadJoEycNawiT4rB19noyHSYfp",
  "key11": "4BqGX27YKTUoQUfvz6gyBsKMGeoNDuynU7JcFf6fgzJLgqYZRhSNM4kMPKGmF8vGALYHETwYrP5wuYrBGudAy5ZY",
  "key12": "3KoNYdTKnSTRYHE1ejsDwzj6id9mJTTfQGCEByp4z9kZeecJqQh1sJ6nLT1QtUnCFgGAVge7RY7Y6YAgtkMFbVw5",
  "key13": "5EvFYmRUQfv961MAXYeAiobePjfsbkbqGut8G7inmYwrDPPKPrAJVVQ3hQSZmoEhxp83Rwr1V9CTp2QbnnbipUtQ",
  "key14": "4TdV8RkgQparEvDMmMG4YeoYaend1x6h7iYGbRToN88qCdYRDPts9eyMPZu3nYYdPkXXbEnXfuLt9reaYnchFb7X",
  "key15": "51HFsYNhRDGwdnAhPG1eoMjmUoEfTFpFP5vxK52XxRv5ypKaydVhZiM92ZBCKFJ6KXVgUBxy34ejZ6CgLdNUDF7p",
  "key16": "4B9NU96xZqiLQ3nWNpn1iXoodqenJriSFbQAZcZj6TtJvYDneH2dFhAiwxyziQoSjSrCPBwhnfKWvww8RPEZaR2t",
  "key17": "sw1fxbSh5Y5JAFrWTo5F8QTzUg6iDG9LX2FyPqjX4S482gNP8TvNyeNTkQEkJ8XGb7vZ6WR9uzTsnbbAYZkNe69",
  "key18": "3pzpQG7CYRSc7VYMbyTz9e82NPLgWvg9FP7apXQEHb7f1bK2URL9DkBqLnPpLKBHskdMrohLatn5uvFJXE2C17xi",
  "key19": "3Te3wtQQmma4Cgt2HfxTBmS2iFJfkushHuEbuk4ByLVjfQRdJfhsbZwAhjrA2vp5fjP2kjSq1r6VnVGokySKGH6m",
  "key20": "5htqUpFJkZ5wUrSrmqcmkwB55g4vKjkcBZaHJis8R14cN5rZDfCknb8rSpXa1LjhNp25MeMwZSFfeRBqzRszrkAq",
  "key21": "3B5GBUCdeRG6bmPDedyPtmo9ZHrAncwM7CpQB3gd2RhzXLD37nEboeFQVDgMCs5aS1Fsf4pAEHP3RGxxcZ7zzjpw",
  "key22": "3kHMTysW3Q4XuKqJro2Yf811tNDhz8DuECZF6XKs7XE6xnWeg2jSgBq2rMATaA8gud93ziMKbMJZ556fXAxxincf",
  "key23": "2KcnCqdDPrT1FwjpipDrT99d1dyFoG7CzccKpMULgkrayjkG9Vj9LW3dkt3c5UjcL3NCA7Em7aQ16GVeD5CSV7Dc",
  "key24": "3FarUDCs7Zg1x9vHNJZpigsvkCymvXL6B6aF6Jn9UjbaYbMDohoAKZ3rW1KjaSjT9cr92JnBckx9XEoY348xQc4a",
  "key25": "494g3kFLnjgcAuXBRmF4Jx21YfVRecTFKGokspNnoLgXS1Q1tkAZRx48h1USMhwPoEpn6fFXW6oEfzDxAtLYvH44",
  "key26": "2b6La2JbyLoJr55Y5ARdLF8Wu9K7H99SvgZYPLZEamMKEMnETpGmHwiVKoTmTcY91wGUufmi47xQLPKQipJZLWcj",
  "key27": "49kbAUX2soWkUvX9jWnKXg9927NvzNwNBGy6paR4QTYWSzMEBedVxLsDpYRsPkFSrJBdsMQHY35yk9kmNKS5k8NB",
  "key28": "4utheCdWQ5VybBNYMabwnM4EvhjMTwTCrn4h453QhGQYou3oF6VoARiJyG8egFcKWV4Jy66G3J1z6VfFnWftqEsN",
  "key29": "33VriYS3Wo36CV1RAj9xSdXD1ctksxrzGE7GKxDE6DgSAJxVHnDpYfSFffxLUcMcuUzkKMwZa1qqbLPXYn3o6Q2c",
  "key30": "4FJFkZJo146hA1xXQuDE8Jn9zfRUjLhg4vhcUQf1ECAgQp9JbKMEJwiNh9pkFyog5XbPjFZGXRnYX4NBxUom9A66",
  "key31": "34qnuiJSLkTbCnhrKTN7hAXgw8zU1apMY2RzPLSbsm5H2kQC1d7fDBEqKmPPHYUBLSHxxCKqtqhE7bAKeyZ65PdW",
  "key32": "yJsbiuy6eEuVXFNVXjwPLaNt6GurFe4asACNSKWZfVxL6bUnZXxDptTxqfjfdicAfZBPGqzS4DqY5zURC3AFBSK"
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
