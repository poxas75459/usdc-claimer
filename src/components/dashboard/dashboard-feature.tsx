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
    "2sgqF95wBz2XunebWVyt2KQuGJUAWcjjpFrGXGSEMtuVQJnA2zcjydRgfV1JVWSq9UWmXes6jhnAVvcAJPFp15G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qASRH8Y2Ai24Ur4ruAqYXUkWvtDP9gvQ11oWQ8noCqqwqyAahAsJCA14P7abGomfmYhdzwz9Am2yGNh4iQV8Gy",
  "key1": "4RFdGeybvfmn6dKBhVVXPNTw8u25ZZjCRV4fwLkepA9CGHVUL1BnV7ZRAYySc5ATxJJWAPzjjA2LYnZFQLvyrHQM",
  "key2": "EQ2T7s6Z38dMe91JSRG4xpYLhWgsL2ExGE8NtSKCq36KMFhECzWoHKe55WoRKD3P4nhnHt6g9mmeTLw234fmmH2",
  "key3": "35fUxZYosTGtL8SREpMVnSLPbJkZixBRYQWnKjQdBoaVuR2WHkJgt7qeHUBxuHcG6zLe1wD1LTZr23aPYjbaHj5z",
  "key4": "4auiVNQMxfvpC49nLjpXetHjijaUVZ8dB5M6xE7N9onGAQC2u6DiwFHABTrCZjUgjmtp9WzPn9ncjPirCMgTgKkF",
  "key5": "7J68zoKwZ6FyDx6XGPGVbEDZyuHFzeB7MJajdkv9himXEbpE1XhwQLMwSTMy7nj3VMoJmnkt8EX7JV69zzJoGoo",
  "key6": "pbknXTMjxi9r3VN8Rj7qwmsw6ptq2kuZDGkdgY1iHYHEuAvYMXcLYx1XbEgeLJ5YwqAQMea4T6JeVc4cLTyJNry",
  "key7": "2XuZrXouojegxgYLZQrNjMUgDVHV4wYrYkzak8tnT6aR3E9fBm1PdyidAqE1Ja2fdnwRJKwVerM9ScAACBJhWqw6",
  "key8": "2R3GBRG6Ao7NiaAwuWCMeLeAKcWc7B8SHPHmknzei2D8YQX3sD3zTELrk6h29LnJXiRKn7WN848T6pPs3HqEsYdh",
  "key9": "3Byx1Q56bwsh77LM1jKKwjWuBGcMNBv2dGt7u74iyN4EbAqZLew7UA6umTBXZaeDioB1h8xxtQYUT4ShuL2W3UnV",
  "key10": "ireLuJuWEG9nQGebFNhnSvJcitmGXs7i676qmCBpTbKnaXZ1xBz27A1aRgo6vuYxRy9WgQ5YH3LzoRi59Guj2UC",
  "key11": "2oUhqucWse78pypDiMegjujXCNZ9LB4eKL1Qwqmaf9v6bGZrgyGrpYSEsiF3yfnopF45sj2bHY9VWyDBW5zJaDna",
  "key12": "48f1coCyxsTv3eKHqpo1u3W3kPHiimaZ1GBVLRsXoJXS4Qs7pk1wMESJisewebKyLgcMhRBt48h9Tf37G92nxYSG",
  "key13": "3dRAanSkKUS1rTxi4Eb9AmDcD3vtAV1mid17mzxTeZoZemXmAS4AvK1N2wREgSbkDY8P519rVLwARfVFuAouw2js",
  "key14": "5x27DXZqUVbvbBxvSND1sjnVWxLiaZfcssUsxSUGR5MBcbujKFisRGK52BekUmDiQYez64cLNnFSvJXgZX8exypG",
  "key15": "3sLxM7zzYh4m3FG1nPBJNtz3hNzjzDHDk1HLnpbAD21bAguHQ7coTYKo5YdPbB2kDgCR1HSENRGfmZAcZpPFspwT",
  "key16": "BqsLsJsQfKdCvJ9T2PNtdyqaehiuNbwTGsxi6ubdxVDrtXNDGd63avprjTJ4HVLrpd7bnMxcwrpK9ZVaq9g4SeB",
  "key17": "3gZ26Sm8XnzXdxR1dVjPGFj3bytdbTUbVLq9U9SgTroK5H6YPy96YpoU3ipLQPjsLwExURpBTTLVGniSDpHE1CKi",
  "key18": "5xa6PDJHACJPmNe11a99EZKfmuSp42mMW24trP4ZetJRgD5Q9T9yp7cui1a7LCEd9s8NnMi2M8gP6wstbpyQxdAB",
  "key19": "37NN6wRpow1pGkYdH2A9gDjKgDUeeqKFoQ9SRh3h1dNZEStqPUL3HhtJpm8NX3xzazCMBiZE8KvsP41pycU65qGr",
  "key20": "G6QvSNg86XPLUMJ55YFF4cAg8W7ok3BcvzEBogLTTZzF8XrJ4fT2CXtx3bqSokZCCXFe3efjY3dotc5d78fniQb",
  "key21": "4TjA4Gmi8BymZ5F4dJmyTdWt9xdkDP2eUmjv7mAcvgtDEAhmujZVz1R9FT7UMaZYjURwbCHiaUebqGuMGAZujsgN",
  "key22": "3MMnzCRd8zj7UGhK9VsEVAXU7nx2SNEdd3khpwAGqGQSxJiCUJtVQdXBZxQuSiD6apwuhaHDrKiiCzm6gdA6otGt",
  "key23": "ioQVeKCmdv4ekaRcsT6zdGnxV1fCAPwbn4tjPMmAYktwyzamX4foon7o8SwC7fYvnN3SEECNsmiMUoEy8KzMaa2",
  "key24": "5d3bfs38mMQT79QZkuTJfcKbZbb5uJEEyLyaeTn4UduobV1HMv9VifvoraAEGAkywrsxcZeaec4THBxS6ExHR9qg",
  "key25": "5SuUkYNdbG8Mt2YdhuuMEr6ZhpX5WZxywrTb93d8AseUinW3Vp8jVpWaJx17ZduWW3W8G1rewzfjHkVQcYui6wpH",
  "key26": "4zRmkvmU5ppxQBzVXrxF1yahZZP49Nt29gXgeJmgcbzFA1DZPfLqezYQF5SnwS7KbnttqdACkPcae6zKTVUG6i1n",
  "key27": "3ZBCynqKVXrkYoukkTCmfmfrMHNWmycCCAZhrCtdP94Tzp3gthwUKM38M4ehxUBrFP2oierx1cxKXu98gjLSubZJ",
  "key28": "33BwCzXHy18zUnvqH6RVaeyDPaKjnifbKHdhX4HAtzb7yz8EcbhwtQ8oP3T8aLg33jm7aTmC5Z7HBL8R88YNUWfi",
  "key29": "3MqLGG98jPhYFdDqk6Zu7fQwbsFUQrXgZfSQr9sRGT1Tkek356wupbVskwgZbR3FyF5CgNYhYwrcCvwDCQoZj732"
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
