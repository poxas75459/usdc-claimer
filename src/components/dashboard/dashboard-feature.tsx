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
    "29JJhHFesBcw5JmHzNbmJweuESPtPgeZcw8nVuYJECuTg8egBiL7bqJNUc5wKGw7jxDZeVubUmrFGsjRW2zCcFjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGwqYRWJokK9MzWDenXqHdgfTEdYmAALC66pLA7xHeFrSxYesfDmQ6qwdRFJiwQ3zeyB24AAHBUKbC1gYfn4Jma",
  "key1": "5kbugphGXM3wCp1LKu1gGQowBDo8p81PgQaDTepPTjuMFdvfvgKTw3LEnd9SCH9GXreGURf5kPbbcFRu6EBBW2WC",
  "key2": "4c4cpP4erfDHhAi2LxpfQmY3sxThrtQeMQsLRYPPmh7sp86B7v6M1y26Nb1xYcNa2GRzA4azHfk6EuspDY46u7b1",
  "key3": "5wN6CvmLLcmRrswFFarm3sGrtZQrLkwrKSsEE3LUr2hpqEaFnjHiWGPhaC3yJ57KgSkEeUxpLtUAZfqeEChKt9Tp",
  "key4": "LyUb1nc8Rmdjvtsh8PBqzND4s2Sm1kwf3GFRUk51QykSw4wdhsqwapDYMN23XKUHWijoApruBBKdufsCTCL8avx",
  "key5": "5cYUFFADQrazL3YX66WTfYnvc2aYPPaFWa1t6z54Mpu8rcuiQ5sQ4mDYWccQthyLetwuu6rcoq1N3SNNYXjd5hVC",
  "key6": "YsMf41orqcLGsZEH74rwNtahuNrqSV79xWiN5Mhw1JroiduFay6UrmW4wXzMPkN4hxiy5hiY1wEV3WtM7TxGF1Z",
  "key7": "4bZTCibRQ1f42hEJwEabpVhRrrK11ZcVXDsKq6cWf3A7SikdYoKdvaR6He5x1REwTCfUJ1qVv6rwLiDbTfJ95aoL",
  "key8": "2pY2jDagbeBnaSaFmnttCJ8Ex37NNLCzGzQNNZ9yvxDbqkWQZYdt4NCtf1GzfJ88XEeuRLfQs7fpvbBwTg4saB95",
  "key9": "4rfsVjaSriYU3k4zmFaSjeQsWnkoJeMrLLy7ss3xRgaFPtU922vHCCd4R9rsQ9yPTPNje7YFJ8JFkNptux3WaEVS",
  "key10": "3GJsSrdtfgUEcDxF1DcoCjLKS7CcMNmp9hmw5ByuFFScbZVLEBMWhzRx7V4WWqGsok3tdBX3p36w9wRRgExfNtft",
  "key11": "59ASajWb8H2judzaGGBHnv95VYWt6JFpiwphEBE1DQLM8TTCaQ6jJdhBqCCcrYFXSE3Fy7XD1gHKEazmur8rNN1D",
  "key12": "G8Mjg7NUvvfSFAPZR9jk1nH6nJ2VgzqSrXQK1mf526Hd4sdwt1wbNTYW4YtBdMYMsvwDwCCTWozLdvgBPomHCKK",
  "key13": "4GCqC9y4EGrt7KJw217pZm55yM6GsaNf6Rdr75mHQ3kHvNKGkxmgSPFxWEQXhXCh5jhuSp9v9eTSV417SxCchr8w",
  "key14": "2ZABxo2AwYsCtYjoRizB2ctmnGye4Qe6AtqSwbJbpi8ko8RTELk6EKGwe1oSA7yAMTu8bGbHA3Jvw4ddhvJoZoPU",
  "key15": "dnPW3Dpayhtkk4mCAxzbvJjCRFGkca2cxzFVUbu7Lnt6HzzpAShbvfVpgYXscYojWv6zWf3rYsceoSac1vSFz83",
  "key16": "SmHTgK28CRJSqY3B5RDh8ciEXbBfVAiSKYoTmTecTcq4CFgfMjuXcM5Jwtc7Pxa7LiC82ehrgH1nN5KiAjbwvtQ",
  "key17": "4EGQYNd4apP3aFv5metd2BYNG1nvLAhkHDF99pdf4fQ8kzfBLeuwrXznXei7kg68eJXsXQGgEyfG3BfButHrV5Rz",
  "key18": "36JXvjKht6DpLa3mXFuj1PB73pu2mwhpLy4mS3kdYB3UjToncEe6C5G1ex8Ugs19w1m68RbDwiFN4NULTtJKRrGF",
  "key19": "3mcKDPJT3y6bWTeC11pVYh42CQcqnoZf3sXKyNEMYD6CjLKtiMNzqHq5YTVonz62W5DCDsR8wxUWdw2PqQcE2E5A",
  "key20": "2j2TfYiW3xU5mmT3Lm8LkfyMxzGGB1HgqwZcKPH6y4pJcQtvBXoGuLCUJpMagBHqxLuDxMUY81EAh2c9C6zjBnEk",
  "key21": "4zKYKAy6wgj5myMix1akB3PmxFVGj7GgdGZdN1mp3EqcGQ66asF8SY9CtsrUbzWqyebRXyKpEcMsjUXRjxuCnmWc",
  "key22": "5bFqkgeCAGan8qoWxRawDa4qGoMzBcEkp7tzAG1Ysem6mqYQzN4BzPVLtD43sDDnzYHfS8a6tWm3PVX6QTzRKvzX",
  "key23": "2GGYpTa8jrHgRXNVp2iLEnAJuY3zUv8byW9tPCfsPJ48MiopbZkP6SMssSk5k3uA8cB9pSMxFHs3oaYYtdZ67AVP",
  "key24": "5WgmaMVCkzps4P5dnHskuT4RTzBRVagDU2TMyNdeWhDZyHJYGEnCTGZf8BEZWJHQWi6nbta95gj6VyyeY5Z97TJQ",
  "key25": "5pm7iXcMVTBYEevo3kYd2BB3noGZaKG9uZpoVq1kkqJpbfVE1Fxr2SAZzssZ9Qr74BbyETs4Ze4wYvdaEcqki9fT",
  "key26": "5LFrnzg7qS4vxbNrQrvfBJaixpDH2wTuCKi6XiUfUGLgMMmZ9sJyrX9ozjUH1uyrUgeGNEVorzd3BQ1w7M4WnB23",
  "key27": "5Wh6TYUwqmDY8b7saExbuR9YcXV1UoLprYXiku4U58hmgXs2V2GwdCUkRVR8ccqRGNEhR2etfw2Lj9xAje2zn8oB",
  "key28": "2UntTemChwv5v1wYir6oFLLLzRfX8ZcLZticiziN58evRMo6hhpiPWsFXgHqNYwLXfJkdVTSfpiguLx5dDiH1CBW",
  "key29": "2LKp5ifdHKV2koNy5RHNEbZFdW4ioogcmsNCjVstheucVndpP1dHFGoeYzPFDQd9wT5nNL4UienTbp2ebPBbwyX4",
  "key30": "2jTArzUaVpKDRDYtWvcTSP3655TqyrauBGqRMxWJk3gYN4oQjXgvYECRe66hzQPbMq23SMvR2euX6tesdXebAPc2",
  "key31": "32btrb746P4gowsdnqEaKpUmsdMavADjGFUyzttfDsUMBSJw3M8895anuTwkq8kgwbJBFCwfd3cThxV9ETDCjPru",
  "key32": "4zUf8pJ9aYXc6FDcz5eeorSKTiJAD3cid4bZC6PsNVZzFPMj3NmYj7tNuFdszLR7xMMQoxZufEkRz5ZDq3MsafdE"
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
