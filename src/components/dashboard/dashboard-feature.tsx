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
    "5eYzcnBYtKEBc4EUTTUkXxyCYfGihNPubMF9Bj1VqdHMHBA3PRrxUM5LCuffaYUSqkbpCK8Qq3D9YTEmhQsdmL8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FeddVRAJJg5q3VqPErQfvSzbqSJYDm3787P6iAirbAFFmepFsmagZFp4oPMQ785RVUZK3aQosvq6U5wyrEk2XHd",
  "key1": "3PrJPkdk46wKeUSxtsqNFsEpeVZU9dTNqXYuEa1n3y67xnS7G4HaB2Z988FUNRmCctrRYVZzsGLjDGMhCHtYgfYL",
  "key2": "2B7FhHDh5UUYGRTMLciSgjg734r2aMfMWQF25yBWzF1PtLN2DzDceD1iKLkVTLpErBpddWNEGRvjaCjrBYw9azu2",
  "key3": "4BH5KouWYEhPfaL6vQqY2ucVMsMGhftdPxGYV63qnXJrvuj3z2mGQnntCuzWP27zaZF2Q3Zoy8EUdgGPvh8tTjke",
  "key4": "X6A4qBc8TKa9ByTxyPTKXeWHrpqvfBi7J4QvaD23pQRzojhUHGrMq4Mqoz9Z3XCxhMwVC7KpPtVJ6cfvsMKag17",
  "key5": "2Ree73bvBw5n8ZievYLVRveZN9wowyir8QMLxLRPbx1z8Psm5EW6q7giKFhj6y9agxoUYmoefLZfNQLKsjZEEHEn",
  "key6": "828s5hdrd4scTSzmM8jyB7vkG4DKSJni7uBuGbGJXhYwTQKoDNpi6LHUsXGGeMPr7MsxLA4pukhTm1iUJhuabio",
  "key7": "3hdct6Aw6b7WFpXbXWTva3st1FqpNPtvq7S5RikSdEeJMvbWDkjaTBkucmioercXnK3gm9ZCjJnDL8eFTTaLp4Jr",
  "key8": "3vz6A14P5LJFwuvFvkczKuNybKJXC3cE7KTtF5M9fVs1zw7dPKftx4UUznDRYHBF9qbqB4xdYiywhZ6TnC3A9nwA",
  "key9": "2fZciZdaPubNbhYWBxcapibePkNRnhTiytQHLKSozfC9V61Q3qzun9PNsKtLnC4DWvU3WFXDZbc986Q92rh5ZpLg",
  "key10": "3Hx91a2DSuC1NFy2Q9gjBg2GdiyLbi8Xk5cvMHviG4BWz2pZmKLx62wpacRTafAi2dWgVow3D2DSWfQ6a3mNWE3g",
  "key11": "23rxJDMuPASwFMrVCs2sibrhUATriYQY7TKHT6zjebkbNuAY7Nk36Dvy2pbCDWTjG7uuX4N9rAH9Ktdatcjeg8g8",
  "key12": "4fLhR1Sd4r53G5Xi1SadDTS5UCY1JqkEftdKjSkbB7h82djsZfWPdvkBJVikW1LC8T9nYkHtUX4hU1KEad9PJkcp",
  "key13": "31cuNq3WSrFidzhaewadoC43yWGdWfTjqH4HGswxq5zY6T8LyEi6JpiXXATxdnxc76rTazgh3uiMDiC3gUSjW63R",
  "key14": "3xsB9oovsKtjZHT4nCgPkkCQCUrZFzV7kjPp1EasNrFyn67BjHArUd2NyTiPgW1KfnzEQsbTGcnz6cQASSeXJkJK",
  "key15": "37NURXDCFwzeXTXW1Zg7kjkkV7Lynpp78peZwHCRTWtHb2jFg1pz6PUTvuxDHN6Gctmuh1yN9LqTju7GpEWghhQP",
  "key16": "3p5E36B433eysFGuhrm6S4GWYksKHDfZsnGLJ7Jd8i9guHF49HaKReSZu8HrP5tePAae32Rue7RHer4gH9FDTCsW",
  "key17": "5xSp1y8qjtgLwnAF5txDdCxY8ZCuDKMxZYGHtTqtfzseiaM3ANY9PWq3EGbe3enTH8dnkLYtMyWCqHiPQgjWTc6E",
  "key18": "5J5Bvn6wF1RqaGd2FYq1imouNr6qvg7UHsqDMEWrxAjBm1JWeUWhdKZFLMsv9KsVhUhwF23sk5NeSewjziJxN3CB",
  "key19": "42PRhbDZLmfHbaJrybt6Lns1n3k5gPvT3c7fStmaChJnbP6xjXMMSbUC4mu5KCfAdF8mndw9JstJkrPA4Q4c3juB",
  "key20": "2b2Gngs8DDGL7GGHRHQEhvAUr7isHyHK4nng3KJJxWDTzyzWFXL5DFvX3yttdqKVALWpNYcAuxgbTZKSBbEyeUvs",
  "key21": "21gRKhtX7JG8fuwGLMPfwCJTB7iWeyoqSUUnvgvYKngtkprL4M1W7k4FJDKRDUYjg2rWhfSCKEqCyFurASUs8Ta6",
  "key22": "4qmehnf4zwm2iEUksn9wkhgtVhCH7FRJfm8zkabQRymHYiwqibzfj1KyP2sX8V7PAzDwkX2NkinZnKaE9BJX3NrA",
  "key23": "t8HhLPRxFiRtzby5VhjqYWsvDqbsbnCKiejRYB65kgCZop9ezAbDe3AGGoYqmgAhrrnbw254u4SsuU7tFsGKpJt",
  "key24": "5XMaox5i6ggfDDCE4viRzpZBB94w5PpZzRT1SEwJCiL62DeHCKAESa4oF7YLXNYXapJjHoRaWxeuFu3ZYJF4yHRY"
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
