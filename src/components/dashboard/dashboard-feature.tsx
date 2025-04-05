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
    "2qNYdaLJJr5LKpSUCg5LZkdG5eCC12AViQYbcBUx2zvz1iMN1q176HCL3g7HTEyzJxaJRPzkVTWzMWjYUVbjLvz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCdnMELDTfVrUrApCsK5wcHmUeJSR1saXyPuEdeEXtmndNLJQrDJ8YjsLcqmtWhpDcDb16y2TvGwYxNXQj4QgmH",
  "key1": "3tBieLaR9rijhe8fv3uQ5LVySgUAoZSP3QbUCqNDZXaDrYHjzgmc9sn9KNT3KG79K25SQpDCDwU7hT9d3jDDzDdL",
  "key2": "29HngvTwxNiqeK8hmujAQwVFtdShDGT2ApJrp6Wf83q4h3rdf4EFvxuAtAG8gj7GXvn4HucFg6H8FCfeJF3vc3Kh",
  "key3": "59ny4wefjkeDtQP7N9GxgeWJyAyNT3S1tkKsk48qgQ2yWwR9d6SZt4UXn2DnSf1rFzjtbLGfsBq9HEqnrMt84AZ",
  "key4": "3GZhMWc2zkk4hVw6xe2N7FvDb67JcGwHSPgdLNDDS58fyPyaoummaCVGzXLgegDL3it2i517p9PssLwbyECuPWhz",
  "key5": "bLgNfFw54cXyiSWaZgjYV47urwmE9mtoQcrM2MvjQD4zodw8atHyDMu66bYshyUmMAjF85qrLeTMn3nMVXLeR3v",
  "key6": "2AbAKpUY2zRM9p3PckjHuwpauP2Y5gH9NaSpxTDm8AQ1Nwh81njVzJgc2EjTWFE6RqTkzRsi4jzbHGxZU7jGFm3V",
  "key7": "4pCKqY9rnoWJgmqGxHPS4mRWsm9BCY2a2HjhP2VLHJfUjRWZ9dccUY6d7MyCZjFx1haKeJB3gfBqxgC7CP1zJdxm",
  "key8": "2UBVPfHU59EwCVG4YqPiUfHsbwhZzksKN3R1oZdWN4gKkfrvUou2dUxGiD8vU2GLNc91bbLDacBs4ktSrVv5GQ1M",
  "key9": "2Z1c7unGEoAfvozhJ2VkQMc32yP1djgtjB4p3H9PJVNmv9oofSS9QRwxVzDj5Ub7idEcnYjQ58zqY9dk2R3JwxZ6",
  "key10": "i7SFwDQdXipbmCE1dM15fHdgHUPbRPEpMuq6H55E9WDbAXmZsC7fciJPBYTV2cUt9fiRTfsRNdNAg3NAxrtoeiD",
  "key11": "zFyzwztqTwvKzZ9uszwKWVuVuxfWhfYsmYadXVas1vMYYd6wF8ziBahtJ96WY9862MZf4TCJzHPNSHjGiTyxJ57",
  "key12": "2sQ86qRT8DkuWLCKn4yeMb5TWgBkerzzBMVE1Y7fq7EPMdRUeUP4M5jKdSNXPtNDGVwdY9pdVwrnxAJQL5ncn5ZM",
  "key13": "2ZVn9Tyj3TaELYGWPPWVZtAiJDgbPPVpCewUAk6dbDmHPtYrAzr2Y9c7MERwDHEfzQZZHpfdwYDcYGEctKuQcdxK",
  "key14": "3m2ucPvWnyw43GidUYU3eYJwKeEKb9XqVH4bzEWPnnddwvXzNYSfPVfHM6unsLsCRPECdSuA1k6ngKG3JcGkfiyY",
  "key15": "5Y7TTw28AAJw657XWjoxoUUjPde61bKym2yw3jWTiE5AhvpqhB2aBuRksjWdzRKBKDYqLTqhfz5c1NV8EoYnh83d",
  "key16": "2Cmcb1dX9FiZdW4eiqBXLhyUNUMBFPNRHdGYXjRuPHPj5u2xS78X2HUZ2jEuSaWXhEStjECq2AfJbLQCdFVow7RS",
  "key17": "mD3Bvp7ZkR5cLPoXT28TRbWFJfZVv2QAwfLGTeQ96zt4CbHbyVhguADAujeBsBB9i9ALAmiQfcRcDyfYYizQGP3",
  "key18": "iaZy1UQmUAYooFSXfcaJjcBj8VQLMFWnR8pLUWg8PHcPdiwLMCZzAkDbzbLyFN9cE9WqL2FWYs7nKywit1JDeY6",
  "key19": "2QntV3v9AVpJz6fXXZMJksqacyx7eMVH3bMWk9vNPQjU3MHv5W8wEmo4tQsQ4TiorrVQ4x669FqBvkVj7dFtaYjX",
  "key20": "3H6ZkTzvfe4evwhFXs3vMqsNfj3AEoiPm1DM9WUfWfgydF2yfLZQar1xvPkbzrE2MyoG4CRrnmCvo94HryGTDRmr",
  "key21": "3Y4MW2kK5B53B8JQ1HFmN6fXmANjUhqtN3bW1dpT6u1Tm4YXmwDfTDs5ZMGTujQnGbu9EbCGW6cVjdQB6fJKmwT3",
  "key22": "4ttvDRhTqqH7cWj41uhcm2MqvirMCSSSAavUZM1Wct1JxzwTjpGnbvy58UVgQ2V6PdyR4vKBsnKSCwLYjWk1Zhuv",
  "key23": "9FrAapcMhNHozxzPJN1qSLJcWQLpDu3RCfxDZqwocoDY2S3MLDbfV6DwkQFcAAXes1Up73L5TCnFjxhPsYjScD3",
  "key24": "4uLAthJERZPbwk1XszMNtVKSHyVWhTEu1kceMUzFLfFLUiqDBdurpKPiNDaUX3ip6oX6XJi2Apq2uoiKUeuetSDj",
  "key25": "KF7tu9D8nvSJEQM5b5NP3eHeFugpmRUyDyX2QMUoGPhTaegvikiKFCoDYzJJKtoGED4htcg4Cf4GR9AwYyGdbkH"
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
