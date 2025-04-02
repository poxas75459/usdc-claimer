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
    "o3zFjtGWeoKW4HZALppRARWhwQrqAu14Rar6XzCfLyFu2AFHJBR4ys7i6skWyvHVRSSqJMxiUrtd9jdawa5PhVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1LPVjF2JYK597zgGYjzEpruDDNab8iCdzHa9JYp2q2vxMen5NatxhfKpieYLiZZKLaEr7pvMJ8JM4izyNx4imh",
  "key1": "4r8eMtitYG4B6sn8CgCh7RzxpT7HvH4deP61Cq21GUdspnTjKDcZDA8FT9mtYhCVoKB1e1WK9c7vqdEYLaLwL6k5",
  "key2": "4PUQtbdc7n6dtTHHKk5jVWaWBDoSgXwzpAZiweu9EvJfz7Bjx7Uia1aEkCQDQiJxvZnzCwxRDf9EBRY61XH285te",
  "key3": "5CSArmpxkEAmAuo1zCtEZ82JfsHwzX6FX5NcLzqvyy3HS2CvTt9JuVnbAPYiJPRBPzQQNm7c9j71PGbq2SitLmNv",
  "key4": "4J4TmWFKt2HbaurKqJBKa22QWxwrLkC9gA5iQ7a48bPGX9w8waj2CQQ5NmLRcwZNeSn7gJj3cCE3g2wpMam39D7b",
  "key5": "29iLt3oVRW7bjRwQyVJrsGMEp6jdckoe9ienRKvq786R97ZefnJQPBAhku3Y3S4f7fsEs2KXjGDRfWwBv9YoeCso",
  "key6": "5hcZ9i5uwiUstxjrCRyJcm5hGpt9aoNFnf3pGJj4yPVz4oqkBqkYKGZKi8SMwi5jkZKu2nBiENFh75vebVr3vYoK",
  "key7": "63d4zrRcUUyTGJDyRbbJMAruaxdRaRjJAg2VJn1Tu1r6Rvnz1vvbnLrGP7GNUJzTGzSd5111sbEoLWFFi8pPiibB",
  "key8": "5efYH6WbveaLkGgfmbT4yJkrVrbYatMLCwzjn8xHPuHRhxz8GcvHfiWLvHyGN3W3pzqowi94aREwftUNE7vuC5A2",
  "key9": "4QQyH7J7cEf61YVqpb648XEH8CanCMvHnu6T1a3MLYdNSRVjEfDz4YKDa2z3kTEKig7gcuhazEcHY4y7NKtziFhX",
  "key10": "2GAFnB7Z8M6Zqk77hQboUcQrwBKeNCBZjS7EnN356efU2Z5PvxuCPFgYmfBDquawUbUNbkUUVVaxAhTWbnKWCJRa",
  "key11": "4n1SC1QWm2GQHi3EtFaqRSBAjNDsAzZyTnorDNajTSnAz5cbLRVPx8Q7fUiebdnAsGdktxyUMrKjp9Eqvmi6HpdK",
  "key12": "wSGTpRo61MSXMYZi9xMfiBieBYWREQVdpgUBb9b7Qw7s8Nx1qDZ7NTEw4W1HcKNQXuNsFs3p1yCarxx2MXZbPJe",
  "key13": "2e9qcn6cwFBKKWcY7hcWD9VAu8TUDD2yYSThwsBh8D8jjRtrQQu7EcfLwwLBoC8aLq2mH7zTA5JhSzKUGqBZS6WV",
  "key14": "61QJyTvebtffF2PtcqZ6KhVh7b98TCi3VTdnrtn9wWhxpu43wC99xoX22xukfBJRVCHTXub9nRUETGB7AgG2wDuh",
  "key15": "3oYYGj4fryZRqUp7o4pY4HyjCsPTQm9aAGdQLT2xYdFKHRh4FmD8eFrrPdCeLJDqDn3TDrQK9EqnknxUobGpWE17",
  "key16": "5B4B9q5C8yTLHkVsjVmEY1wCDnLWUNwe5qySuYDGdtKvBwTUoz2XsQKYVJd9ADiPh1Y3qWS7LyBV7ncisRtEHdgx",
  "key17": "5hmuWAf1KTHh9ckvbpGX2fx8t3QJ5eP1MSRFQFwzPUevggH9hFGT9csV7V5vpt1XWJNTwdHNL5qTyRZMChU8QEPn",
  "key18": "3ycUgTjNdeDZFnjV3KQ2jQPx9T4WRSWBWXgEV9necb41Wb7Qf6JC5z3xPgxbKdrhQ8qLJVbptmMwQwbsgdVkmXkn",
  "key19": "1yQz8AD8TAKZMiwMxhhhVRkh2X5rD24ik5fHnepjMYiPQHPKUGDLU5Sb5sMtqm7TEikuo2NfhASQXqDEwqz1Q2S",
  "key20": "4BpvCGRbS7CU8VrBYjWeVZ368nqFEPv4xL4PDU4opSNspdrmpLE5Naf6ToJ6bcbZxwQDnDtHdayxFHyirTXRAH1W",
  "key21": "2AMApESy3yMXSXATFuGTJ8dagpDupoh1HnzhNwncZKUhYNcRvdyZHJtV27Xn6TpD6aRkyoz4j2Sa7mnMQhX1ikT",
  "key22": "2dW2dum1KvpEqNSr1VvYPgCbRohyUwaDEzE9CtAhXYSR88Qdg8su55j3sXPU1PhH4JDvXWk33buMVtjJw8qGJADm",
  "key23": "2pjZj8L4X57f4rxiNYLip2sGXMCBbxPS4deGi1sVXxWz2kk6ViZVzJBDz31Adc44z43hsutVCUvuE7iymYWZUUgh",
  "key24": "53L159aG6jTNe2xyryBWAiVoJoBFc5sEhtsvLKLtWBvmZQNeBDfWD9QJntjRX4YiM1RufnXe42TVuk8iPd2NgW7w",
  "key25": "28hU36KZSsPkf5R3VtGAPXfo118CKCADj5vaYJ23jMSotuNTiw8AutZhL7CMoQLimSE59E6QTCNehQuA2LVVUiAE"
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
