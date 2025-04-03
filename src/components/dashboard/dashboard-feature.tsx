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
    "3x4x7SepRnxgHjpPCYJsYGsnQVGWLZxLdBoLfMe9WtE5gJR8KNKm6Ja7gcepsCP1XyYbTdgFa9uFQA5kZ9jNLruy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2wjVc2gDgKHiDMFjLM79qNGmRSujbUVx4Bkz1EXYcXRaNuhL38gK7DB78Fv15iEALGEekwqnNdsNEefEVhaFso",
  "key1": "WPU1ht9WnJuFP6NxGWdZ2ZVFxF48FDMsyacorcbHMMrs2iHvDVkSwEP1gVCud6enradGVMEJRs9kHfYrBQ66Z1p",
  "key2": "4az43pCcJRBVi44x3ESkCxygdqb7hNDyymjMNk1EaAZyidvohDfqG4cd8pUq7scQEWgvwF3Yotr4HdP98F9LwfBR",
  "key3": "RnvrY7omeLncPMh8hox5BLFWhrLpSaR4JPGmvwT7TBRQpjMXsP6p6mpffhunTMdUrTWjFhtdpfSPDQgBLGCavHY",
  "key4": "3ztQHTMR2wEkYEELntk2C4KcpBvRFUki3xSLr8SCiniZNzgmtNcrPLeBRALKVeWYfScnFucqUmA72712gc5TQcJD",
  "key5": "4jWood7JEZ5x684FNpx4V7J3oTbNG1jutTpCeQZjVCY8Vde9Lh8kKZPy4PfKBmq62L9FTqpEc2pcDGv3ioHzSjSC",
  "key6": "2PiuaGKfcFJivEvzptexiMQJcwhcbg2Hh2zG5tL7nqSRAVSNYfhbCugEY1dYKCrYBHwN9hDbcQ6Xp8YQoPNwyQ44",
  "key7": "54ZNErAjEd6pHe5SsHWojY7pX6kHaFNonQP2gCSV2XjURvmm4qWhmWjVumVwzMoN2NBFr7UimhhbAwYtp57UYKDP",
  "key8": "7yW3XY9xZXqaCpQPfcPbAsy8jBa1tH5r2B2PyM7BWhZzZFiy39bedk4Fy8heniUbC2YrybK4RqLav3wQJYbL8C1",
  "key9": "45tSn9PTxqrViUsfDoFaTVc8ccNixon55suWKXyQbEEGAyp94zsZAvSS9ZfNR9VR6CQ7QHFUkUiaXuwTBEgnBKJs",
  "key10": "5ejTgdrGjas9ZAjzp2xEJorgqMVxo2FsBwCoxQTC5TWBPDGrwPTMnHZJuSLeP4Do3XTU5X3WNMN9xpC9JymqsjSj",
  "key11": "4hwbxufAC2ZHviH1AmtfwXUVa8X7CZhZr2NM9ieWThdv1VumTyZqfufdZHm7N6Fc3MrEgLj69WMwdCFmAyBPHUS1",
  "key12": "36BsMVysBjmFT2eBq1zRo6ob9kRC2tbaPoUuD4nWnXGpY62aJwo1jPYSfwj7d9YJY31rmQMgRSzHTUMHpL7h6VNj",
  "key13": "xi284J3ofzmSmKg9KCEhmofaZYqLcpXAFaZ5t3Mk1pcDR3c3SP6d9gTXDRdP3SsPGPKmsMddN9gjeXBxzuK2Z9J",
  "key14": "woRmPHTvEFpTUUaxDfGr8TzkUHH9ZvCrVibXB5DLpb5K6rtxiRjix7yGVVMLN7EpGnHwCG8asv1zYn6wMGkjoZA",
  "key15": "2J2QsN3osxZVjbPUDyMTrRx7aXuMvC6YmDeEMEewWu54ZJgTqY4Xpvrrby8tc3j9MqodnCqqauDR5dyvdYBByzTE",
  "key16": "56QVvhCpjUsmFxEMri6NNWr3ioxJRuRAQ5nB3EtxgaNKbPxSQf7y9FtmufkmRjfhebtrAdAusoRnxVVcToY3QmmD",
  "key17": "2GXfTfyu2mGw4uXhNppAFoDf8dxyCzv5LJ7vWv6mfTvZQDgMFSuvnUU4J2fGUxSSZ8VsL3nq8RZT26jD35tD7UGz",
  "key18": "42XDZ3b5LTbmNf9SEJnmykb5zkWdF48jr3r36Tfbj8d5MX7YFvSTKWufei1vZVkSXKV3EtosjqkZ7oPmVPbPw1A7",
  "key19": "5e1TQmrgSTHhhAjhYZjzNRSW724QjPsJxZJ8cFfTD9L2wa6dayhcYikVp2Lg2xUrdpSHsS6hRDEq3X6kc5P4JSsE",
  "key20": "p8mwgKPMZeENssGqQydp9B9QFcHtzPHT9cHWUsuYDwdCme6jAwohE5Hz5Rm26bYuVpgBNs5K6gTjkWmmbQsfGTf",
  "key21": "mBfPzezEfHKHGcY7BQUWTV3YQ15cJMWAJ3HyM3UQhCFRX3RZBbNJWsXMPvZJ4gCWWEPSG5kp8nL2jaJQR6NpD8a",
  "key22": "3DMHUQ89r2yDs4HNuYEvCw2QJHBsWernoLvFJgdv22q3zsdLvdJ9i4HwmLXWNwTCAG58ySfFKh9BnsrkJGx1QDnD",
  "key23": "webqaMYVsMLvqmnQV9mADKi75gMVs624PypePzN1UoAECuyaiq4rRCWRcZuPrPHigv6Mf8RqGnYexv4g3WEkafK",
  "key24": "5PwvDPkA5PZKNP2AePJ2XSzw76EBJxYBqxABKU8Y5uRrQ9KQFo8FLyAvEwFtgaJoH526ibv3xSvssR6D8QUwFZQz"
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
