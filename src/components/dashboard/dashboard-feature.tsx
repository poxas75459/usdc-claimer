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
    "dUqpQ2P2f54dpDiSWPfpwEN4BCtnRXQZJZytHMkcE6NjBTfBmUSDucuqjVTyv2Ba8rfsBCS5tXMi4XEREP6pYsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DN8gNNvfHvYdp3h1cKwP3CaUWNQZNLpmHMfyeFaqcrVbznLUMYGgLp6vQdJi2t58acJgkJcmmgTgka66epccLjk",
  "key1": "4UEvRCRs36mWVq2M7VDJhg43syh3rNjNRDLZQhEuAhMzLWEaDNmCb3H1nP6ggjU8FTngZXGggX7wJ9uE2Fjqu5kA",
  "key2": "5vMSuL4aXRHAbc1WZutU53KrVGv38qF6xrFCgAdup64iY39LtBj2G7ZUFbwugz6KMKZQLNUovATupSd8eYKxafHr",
  "key3": "DpkLHLLeVJiAfLgCtwjQYhfVskqNuvFi3bAMSUMhqb1nCzqqQFKyF53k4inhHhTcpznpuBqcT8cgbzP7apQB2YR",
  "key4": "jkHeRB12g8W473eWK6UG89Hnx4PYpkomeowcRPEEm2AjddXBS2PedsZZP6chnLvsRBeAfyQTJ8xrGTYkABE6UcC",
  "key5": "3NNRBHfUJpTCuQJGtmFqP3PGBbbuNSPxWe5LbPRffywvAbStLt947wbiXK2dsWHXWEyGdqyfMxBXd8vcWt6iNb9o",
  "key6": "3VECYvkzK1KKU8dKguMjDq4B3mwXsuNJnhsh9d5s2Ps85sRpmYMfb7BiCHp9YbM9SeFwQXwNx89P1ygjjJdqYTVr",
  "key7": "xFPfLm2qAyN4W3ppSgVdWz6ez12T4tpqdM7woB1qaotd81VJd4YzcAch8gRXfzhCPMFURfj3GBCJUQnNM7YUBZx",
  "key8": "5Gceb2Ek9XSZARq56ggST2ebD4QaFdxpVSWgUn9HVSStcsR9SMebiqRxUDjUxFp6cviMZ8t3GFax4GDWZ7RK28QK",
  "key9": "3nVSHPFuQSToYb9DgDG5RC8GfEZKR2pTXDNEvr8id8XFs1HuxhsDErgStPysHHGN1Pecon82dmjdLhJgyoG39Ti2",
  "key10": "5FKzYWggemuDpr2ivHfMEoefuNrn9jEbycaWEokUbacKmmq7j7HngBpucuMQjBQ93ijcpj1Kp1yyus8ex2jd7fY4",
  "key11": "63WXfm2ehy5Hcdan6mAWvSiJiBAoEk4PqgwJtpdD34gV8W17cCHTLfsFWi1QJ1AktNrqAebzhzY9FV3oua5as4kx",
  "key12": "23uEk2jMUNnZ9tj9Aq7ALMbjpQk36kHUJya7ERqbTqVWWEui9TBbkN5V8rw42vBEyprD1TmVW3YUKnbc6jFseaLP",
  "key13": "469dv33HzM3YHga5X8goy47AT33ujAjZHw6A4M7caDGRvk8mJPzedHj3gZzanYvxhkojqWzjLp4CsidoTS75GisV",
  "key14": "65F5ytUUnD6ibdneC6You8HuiTXHQGPjs3GqQfwYkGvAX9WQTKQdqnJon6fBV5urLLZ1fE8fzPHjCVskq458ribZ",
  "key15": "64f6W3sV2S6p6BiPyTpJW7anLfJGteao2oNPvv8j9oV6gsCKXPR4jia533tqVppEn4y7kopHzwPmN5thmezzdyqG",
  "key16": "3e8ipvcUq4wbJNinQAq6w4ZaF7QbA8s4DGZSoY5K9gtsigz4f5dspFTFhDdFSk296sxFSfYiuHyh9RzLWcuNFxEy",
  "key17": "5LUywtojpr6hC8DWDteQJNmPkxj3PUgcWEYunjpztuhD4ftU26XfpKncBpHayfRZABgqXGwTSo8dsKnJ7MJrMfe3",
  "key18": "4tS6MfmkZGBjicKiVZvWu6wP1BP8EjpiPXaj28AnRuVF2hdN7GBLs99XZsMXD23nkZxpPxuMyRAoWZ3BgFDuzY1n",
  "key19": "5tiH7F8rQVZW7aumv3gZ2vGX39cG21DHgzR2fPkqr69kWtSGxkTpcMCnctGZAVCcGMksMpqnUmvJN9jtQRHbgB5f",
  "key20": "4Ft4LPH3dQuWGyz4iR3emm1aui2LSEW2YRQYXy46Ah2dm5AhKhaCJWw3xJscQu3ftegvXYYSB9Hb9GkCyAUaMchK",
  "key21": "5C4CfQMYDX5FqcdRRH2Ji3VdWVxpmj86Fjx9bo28PEyMp5DpXWR71c7MVPcsBbBLbGRDCvwMaajiJRNbRoCNVP1Z",
  "key22": "5PgKcGvMZpP6zcbN9dzjep8w92QaSicnFd7wd7KehfnV7F5VgDsBjVr54FWh319wd7NW9qfqQymi8xSE7NDSnRUh",
  "key23": "tXWPBEuM75jf2xxoqNM7yxLJpPs2cSjcH6E7aTLuJwNMrBWjRbNe4mpDwRBUsCQxRtv67D6iDE9U8HCkwoarxuy",
  "key24": "2meLnXCZHUbKb2KDTBa2ifwPDLrpKqh1tHtV2cAAx2nMZEaUV2HVjCYGXa34n4eZV7ccnzFy5grHFS8gVVnNzuDB",
  "key25": "kjXkShkwh4TWEwaR6dhSAExzMNtccEniUMtiev77JAX7wT2H6MWvufWqJb4Y8h7g81zE9msZUUsJW5FCRMkCYHv",
  "key26": "24L9HvfABSQmx4CbDNV7bAvjR4wrjQ2XbAg1aqMKEvzb1CdD7nz5P5q3wdMDFSUce6Xw1BSZmBojfrxzNEofS5AW",
  "key27": "3Q55zaf5TWz8zLe3XPDkycrdNHWSbdSgazLJWW1ZAhKogey56bD3WBckeDd3xK1Bgp6Tj7rWc18e92JPWymTTMQq",
  "key28": "3A1dxtS172wVUn71n7JWFasvwbzAKGMV2jAomLZMMLg1YP4hBUkTdY3c5WmE6rjKN5esM82KEvqp9qrBE8UmQuem",
  "key29": "EKxMgauAVvfAaxVffeFW5cnqbg5iBojaSKAqETCUdfeZCownYFszCMq2V93aAFxnUeeQ4G5vLA5HWHg5BK2G1oK",
  "key30": "PXHzZThHeerCVvHsMQBLtWWk13jM9cVwkWikBadm2UfWmKa4vwFpim1Z8g84TzDqRpwDfURqau1xdbFiKRc1df4",
  "key31": "4SxNmTNpMDsmoarNFrZ9qtQPGU6Xo73bydCBtV4fXJ5xWJzmbna9eNzYUvg9cycy9oyRE7UUhBrpdNe1BWojYfx8",
  "key32": "2w6nS4woXieAuKTsRLr7cHdhVLS6Ndr5YTwpBgG6SPQWZ4KC5G7NZkXRvHye5aPmYRx9MwNCKDZPBKgWmVfyjrHD"
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
