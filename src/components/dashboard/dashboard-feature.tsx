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
    "2wQ9SySsrzSxbnYvz93S4iW2JSG3ePdZLkLu9V63yrCsysg1XmGmh4FnNfpNdF8CVn5xZKh6dhQQvro8VGudeunQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aKLvxp6qBzh9iJzRtJ95hPNZC97ECstrAVTdP2CCicFbhREBEeu8wzF7CUUju7GuwUXWZg5vW9FxAcU2wkgtNQE",
  "key1": "gD33HRK1TyT5qVDxjfMLx4r2woGuLE2SwKoYokBrUZdPBrX3Tb5zZjiswcGhGj9rvT9chvTHf3kLQaf7nRddbCC",
  "key2": "3HEnm8PkthofuFPjC3LcG4VmrmQi4qdN2qfwXqMwrpWPLFseiuuDYQoDuRfjz9BSz3ALK8js2f7eX7bbBeBzHvyZ",
  "key3": "5obs1zuok8ip6HhP24HXYpjFqmpk2ptn3FLgb6XP3Q5i1V7nea9y9ze3gJS7VDDEo5qDjDDoV6MPb7WJbe6vCCLV",
  "key4": "4hrbi1UqKLeChLbjLVhEWKxkiq184Bm42hXgx6m1q76a4tqACzqQc6YYhUCtCjkzyBoTiCHZeGcMCkBCLfCtig6r",
  "key5": "iytZ39UiztaZjaWNvgZ8ebAqgdwDvuRGoZEpzskNZrMdMbnJ8HJF1QHiz8ck9MLnyushC1wBEGTaKpPnpYn3td6",
  "key6": "3wWPM2kY5Mx5P6YbwzSVwc6V3v5bU4sGBARDZffYmWsLcpxJojnzeTiCrD8ni6Mc4ocrqTtobrj8sijm6zM72jBK",
  "key7": "5ErRAePahsrzD2ajTQDxW4i5y5uuUjWPCWYcSdZ1zpSC1QtdhVvo6AYtF6MsHwarJsjDPmaM8qDYrvfzhCRTdY2w",
  "key8": "29LoBPm7ND2Z3ccRJATmbKcX7w2f8EtSrm9c956N4Jrdk7agq6HvWnwLpUb1GuoyYLSmU1htAsJyrUd5CTELAbVh",
  "key9": "5qaWFNaQv5jKjv6hGD9RXwLJbQ6TcoTAJShhbfqEhDMVB8r9D7GBzpqoYWze4SEb8YtmaCgQ4bDH27yk5nH2nKcV",
  "key10": "5FMW3SsjXpKxf5UHVQDd9y8osZMebFqG8L6vkQaN8KMzf5tgjmKqcY57C1sqyh2CuPyyuZzdSDdqX7fjcFfN5neF",
  "key11": "4yoNn22hM32YvbZF8zKxUFRBhRACPYvyB68CVRrmXodScRT1B3WHbBwaW1F5bYq73eMsTKW7pSnX5c6LPfSLKnKq",
  "key12": "5hZ8Fa8zFWJrxe6vAFkK5jhT12VoJBrtKdptB14jbathXTYEihivzZACCqqJT2WCQj5Vh7om6cQLytqtyQVVRzWU",
  "key13": "3dzfieKy1sywVGq52ESn5S3ERE4rEQ8n8mF1ZhcLcu18oL6ULgSeSpyuaMepfXWZuqHg9w3HguGimy5RutyR1Jsa",
  "key14": "2DvarLpqhG5ZtcFniyVoZ6QLcWv37R9YqmeHMY7osBkiwq45vYSaZvqV5WC1bqpHKdS8ELiHT7Y5trYo8F3biTqs",
  "key15": "4GcBgYgSJcuH2maJFz61fwYjXe5C7MVpQqrKBWocYLQ3aWUa6UzRgoh9NkDmhR6QgGH33euxweQWzVPnUcCHpihB",
  "key16": "4zDEgYADJGyhA9ugqreRyJuBC9PYLpZuPWLkU7sh5MKWhkiKnGyYisHPFEsEYKLk1GF1VhTDwu1VeiZyaME2KQJQ",
  "key17": "5hNcHcSm2epmD2n8LxC7xweLSHSEGHsN8ezfQ8s55HQM8T98XPqVd6dh4p5RdBSnZKeNq5f2fvkoR3v15rqpywxe",
  "key18": "2hF6oCvQtKL9stJqUTAHUQip8GwNDDzie7TjWwQov8XSmZGSyTBWzmNBpZzwgTy2RgcYnMnhkYDtsZR3Q1Zzv25A",
  "key19": "5dKDdtr9mQtmik2ys9fk7cza6UM18GTqHpN2PTmzKV3AxYxe3Uq7pmoDj4q6Dsnb3moWwrwDeA3S3kYLnhh2KCV",
  "key20": "49PAJpKBUYJs45Q5dHMoDjMqxdxVtFRYoQEefpURjFShYNyXL74RatEFhFwuvbhY2fRKf8zvMtmGj4ad2E1Ds56S",
  "key21": "2CMT73ApG6VVUZ7WWiPbWK2CG4FJpCfUDR1cuEt7uKZhz6yMEwH87sTJwE7o1nYBQatSQ25zcgQcyDGrPe5QDjdT",
  "key22": "5Hp2FpUtYR3ABivxFQedCBQSt9PV2ZBN5ha2pPvaTJorWSbQob2zwWXM72dsjtrdcJ5tBofX4oPFeNZfj4dzM7N4",
  "key23": "5uJiNcNY4R83dhmGwrAtgX3NKnoumX3Q6EntC3xnAXG4xaDqLBQsLjrDHwfoZkAsaHcETPuhpYVwoSF1BZac6i7e",
  "key24": "tagJnPaJo8DZayUxWnf4mz826n8wSxsgQLegg9XdeLRjXwCGgJpAAE8SzHDP1qvx99x2Q8iaVY3AnL29CWmbdat",
  "key25": "gdeRBFyMD9vEhAfBSfNGZyuFXQLyi6ifsGn7FwpQupahG5356zicm81xh53XXPuJmDw2dg4HmZZ4WpbMW43dWmR",
  "key26": "3vHniGqZrLYApS8ECTZTTJcHHDBK3ydj2UmWyj2AcLfoz8SNsmT3gwijiiHg1AyEYE1E6FMyPKQyk1Mag2EmcpfU"
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
