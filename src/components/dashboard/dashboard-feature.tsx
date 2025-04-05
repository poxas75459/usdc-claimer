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
    "3bLTehJcEW538PnawsgwGWetdKHZo1fgDBC1GysZw1qhZzXjCgVRjFxuSyuSXUgLLdAC3os8YwerJ78m2SRLbBvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rW3Ds8d5fY5NPnCwuvj4ZnkSDPPeWQiEs8S5GjfP9BYorRpe4VEKuaZUhAcpm3BzrzJkyxMvdcFeYmxFMXwVAg5",
  "key1": "3jFjSUsYwQZuTxKSuobRHKmoZ3vbtdGiBpgVPju4DAwCBY7QWfpb32vnm6nhNhSCEoTgvZYQXmL18MPptt3KxCD3",
  "key2": "2ZuthNDoHmTxLCVdpEtFox3JkVvN1eKYfJ2wcvenK3viTc3bqqcUAVdhnPU8C3nNuwKtZnqatdap4ehh1gKn1T5z",
  "key3": "4Kmtn9CBs28UxporNGHRwhq9nk1FMrzC1vsq1g8jmEMYjhwQsda6QMEkkY1RRixXVxjVeuiaq9hSw9yH2rXgvm8k",
  "key4": "FisZgbHZSxoDi2cbJfCXkUAyrELuQKj9kNxnVEcHxjFSxyYLV59q1p4WT6J6USD7nGEa8dXPPiSK65f95zCCkcH",
  "key5": "2Zch6uPuSgiGwPA6xoESqdDSyuUkXypGwKSHH9ToN1fHMdvHX4AkBWoCEkkfx81T5Fy97wTCmYziY38zMweKwY43",
  "key6": "4fvz6HNCdD8p3VFzZg4xgGGgm9B9SfCCYARf1KPPkwxJYNkFY489TKi9C5cgdpVb66FctLQTf7sy7deGmyGeTJeh",
  "key7": "4ZHV6WVeYPhcy17TD8Ai1tdhcToGN6fJySkj34mG2piAYF3D5TykATeBPmDdUBpSytgbku92aVTZeqkCeTib6g2q",
  "key8": "5e7TjmnjW1KV4sh5diPiXij43tunhrVCfyMVPwRuJwvoBEykAWnwdwj1px6rGme4i1gMXDr4nKWjecdkaingeRvA",
  "key9": "5eC3YMvj8FzbcTsjBhY59v7ToSN4dKfKYhm7298kfZ7MtuuaZ5YjXMh2Xe8kMPpp2qBkQCrBkooq3zeMZvotfutV",
  "key10": "A5rcE7rAA8pCQ6za3DEWR1hQpPeGJhTV7MpWdhWNQCoeu8h82nYepY99gLkxU3s3DprMs8cetAceWER8XawpEsK",
  "key11": "45ykXtNdpJRTiQMZ39vYDUKYMhaU2NamEZJaHQM5x5iUQujmpjuqeveGnJpVgz8SMvfXfaV12Ma976u47nFbMYzP",
  "key12": "4S2C5pMbvniAb2sS2j5aSk4GSn5AnXbvspg4U8bfYt5SLuo8SV8BhvddEkcypFMtJkA5ZUGc2gWDTQyGJKM3d6JZ",
  "key13": "5Ewf7c4tgwnG3JXXPWMkF3xAdvLdg6SN7yrTz35LhoHmbZgKXxoNbpSzg7z97mGA3FnvHw4M8BMKeQFtkhgrZN2D",
  "key14": "3JRL6kvuKkDgGbmGozFyo88Fw2dbp33apnFT3D9f1K2rU6AcMu8HF8AVNrr8ck23uf9uWuaaZZQVBZADQdiYUHV3",
  "key15": "58iaKeEjNdSrhxbHfuaprEKB5BTurbXvfSXP7jUQ9t2UP7ZeWAFhW8f8w25YjGGh7Fc3c9X8P7maCLLFthHXdQiW",
  "key16": "3oKpa2xVkYVfkTo12prkyCUvc5GFuhq4k3ThTW8LDsCyRWnTuaELdSsCefuKxu2i7yz1n8kndgGXowAh2PRa76v4",
  "key17": "1EEepyWBv6eGXw8gAvxXTAr2qK1mjBik2rpfryKyYmt6VoM9LmccDCju2J8Wc4y5MBSUvFYyap2hXPFFMhX6oPY",
  "key18": "2SygSM8NR39zwTTwCoyxRVsM1yJRnWSj42FMrDuf897bCrWDsNYb4mS1XB7UAGibfiMBJdArp1k5cxLmTVdd7VW6",
  "key19": "P7DRTxXYiSiErzNWP99Cm5J5vuGTJkd3DKZHvt9MXvemCYMH3gUwoPFZYudgjxyazZjrZiS6hVM8pno9LNHkxb5",
  "key20": "3DxUHMHmVrSmfhM6qeQM9PmN4NvBh5E4GPNaZb1b7um6Pj4TUGUECoETLdzMoZAnAXv56KpD1joKPNQU7FCRPupY",
  "key21": "4ySCsFvDHiPS4CFS9KXv69qJ6jc99jSbsR5ahY7hTBMH91rPSDBcgfCoQSCFFkCjLoK7UBpqieZfS1pu1n8SWfNE",
  "key22": "3KUSo1fbmbMZhfBn5TKaanw7Pv3CmM4vtTe9bmbkKFAhwWpuiATLnhmqgPoeSfe4gJSyDqneQch4rLGzdFpMDsxK",
  "key23": "3ijA3YvxPB4n3cnPjkzxnCrNEiJFWtbJh4p4HNQmUTXQ6zzeqmQDw71UzGSLc8wLSut7mPRkifZZUoFzntXKHvW9",
  "key24": "4iL9oEZSJQQRbbgj86wyWFQ23okexeGpE2Tj5uGbkYn6gy4PkkbnKH4wZSs3SZrbu6mNKnVA4k1K6nrSYA78Fbdr",
  "key25": "3CMCvVfbWoAGGAHzZ6GJorZ3p4a2BvHEWSPTPQLMpcWbn468PvNGEKM4ErkGS5CzST6wbPtM8zKdVXJtvNgp2V7C",
  "key26": "3MSxfWhbahAMPoi3pzwbEhGbdGdWAzyHm7n39GfNXPZiF6MmD4YcCSE35AvJDpF5SYJTGTfGaoTc1AtmkpLnuN9o",
  "key27": "jk7ntWdaaN5Vj7Bfas1fJVNVzVB1xL4hETdxgRhSWktZohSKojqVaKmjk1TdwpjFa6aUcS3hxntJr6qgUHxeCQf",
  "key28": "3p137XVbPg6tnjAeMUpx4NpB43ymA1NKfcyVz5XShknTe4SGHsa62SkvfMg28FkwokvEU5XvjzQJLZUc8VPZR88N"
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
