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
    "2no2dGupNJQ7WL7xyqm2FWDdRTCHDSuENimi3DgeGCWSBVEeGkipaHZ5ENnuxCnBgNQ1PDKqvzcBnSizFqeAnpui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XC3WT97onnf9QZXuZEo4eTzkdPfmBC8MUMynTjvsTrppyVE1r3fWnZuLLocaXhMYUCyg6bVz66koEAcH8Pj7nTu",
  "key1": "5avRVB97oNpJozc5KjnxF1Txjc35TSb92KhuBqY2sEj8ebEmWBBR3QVCnsBssUnLfsHtSh9uqmyQc3jp45mnTJWM",
  "key2": "3sfJSPmvn8cdB5hsm2Y2hhXsXGThCxr149vxDtZFUChHvT8nyma6jjsnA9QRpXcCVQBJRaviQMcTo2qCiH6yczZR",
  "key3": "2n3JPhVtDWnrLpBNhEpbRUYs5Juuapxf6dtJom5SaoA2EntSbRBLVwf664eGV1phCsYqz2YyVuKpBQtvu3Btxerm",
  "key4": "28UPVQyE4PKNjU1qEoswF4yVXcSPE1UoCy5RoZ2nbyiWo1dvAaL6J6gcWEYQnfbNgEEfzuQVYm3ECKYUrurk2rsF",
  "key5": "ddyShLxtdFoDuXyofhLSFgsHKg9a4Cr2N8hisDPFbxXk1fY5qGgCdKCxAjWL6GsDEY3xZuywcxSjXaGbgpf2VLF",
  "key6": "5KJYiLgfwQHNFWxdXDFSNewGybMt9iJxoH3VZo954RTggWD7aSZtVn7tzMGkviUvMsJJJwh5nG91cmPG9594dcEj",
  "key7": "2DFjdNjFnvX5Bn2Jm1K44m5LrtGLGAkHsMQMH3mybVcYG9yWJZqoARkmWR8yyKuPeAnRwEJDvXuJPGMXHs3fzBg1",
  "key8": "2fSoqHzkTBQWJHmWEc7GwiYKrDZtBkhjF14tpWCkz1cHGfv5ScteHBonXGSugYAuqJRxveX1YvyZvRmHhTHgviQD",
  "key9": "2TUsXWz7h519ZwhW41ow1zaCwFPRLoyhrqBtj6YD2sKYaHzvroFUrqpCrdtnWDtWnvHR9cEbnmkkCdtKA9JZ8Dqc",
  "key10": "4qdCYuZwvt19kQgrd98K7LjiXaRaCckELzVfA9h4eJ6UXNSXBBSnHXvsz3KCfhfBuBXDmmDqQwKwu8o37obHdhEF",
  "key11": "2DaiFv5yukvMzp8tLKH6fxD8yeszF6aPso8wnmABrhXwMGRybhjJo6hdyqSLiUfcMLo4HENvaJzekAoH52nWgoVr",
  "key12": "591F9HJQBDqJx97JbfxzgDH2js2aD63T1EZgnh1982w7z81XnaB4Z7PDYTfhdKGJf6KWkfXBe4woEgaLaBSM6hzT",
  "key13": "5c37mVCaA8PoQsDRBAuVVnd9H13LFjLpZo1utqKPVzcRXYQsxtJ4X2nYiDD3fAAhv4kLTSpUxGKtfXikVreF3kB6",
  "key14": "3XYxGfHmC2LCnXr4mC5KcY8sK91YuQZnGU64hn1deyL5X36f2VajXLMebEyX5CyCGioPhVmida5eHV97VPW5f4mg",
  "key15": "2cWGB7MFpKRWLjQbNUxAvyHEVgDWAWrETibLfhd2ZuTue9K1KxoVwdiBkdQ5yYBHg1dat64nZyJQUntrCWTssHHA",
  "key16": "47sMz7YwcxUVLBgmUTJmjXwZ6JLtsrqqUFt3W7BzygutfefYWSi9aPiHsZ5HeXuaFHe81DXM3jaa7GY7PUGcpns6",
  "key17": "3YRDf5erSXq81AF7VqdnsvJsPB3HA5L1tT2JXDJjKcanQSwiSUGAvVFGZUjcx4RRsZzxkmkeoPj6EZpVmFA8BEiX",
  "key18": "PpzaiAwzEBnsyiqK1r2GDwmVUcbf8Ta5HGdDmoUHsgUrG5A7Hgpcm83SY1Z82Nr9614mDhyEczb3k8wPgmUtSWc",
  "key19": "3Mu7GMVUJ5gap6FbNPTLTWyfK3Nkg6xm18y5kmaV1AyGut61AGameXScwcT7Bzv7oPqoVPJApW61axUowx98MEy5",
  "key20": "2zZdJEtmrQPkjh2aBFhwbYnBwAB6jUJTceLCLHX6QfHHkeG5jTK1HSeQWeWVbLFxi6X5fp5SLUBWbewZapA9SHHu",
  "key21": "6533qnekPtcVkydjD77EVLzzbnzSDrtJ4f7VHQE61HMhok2skFYAa4kL1MwMoN6T45WH4VHRpufNPGZQUxDqZz61",
  "key22": "TAzhf4MbamvWVajxbee5t5uvN2UqY2FdDWSL4BPttoZsqYqHeAA1G4UZ8oD3Cp3FMQkwE7uiTPzmygkFqRCbYYJ",
  "key23": "tHChEBKpAjrXb14Phe5HqVULkYVmS6eZcreKMjK4EeV6msuVe4tANRLZP7KUQNUwKj3Yuoyrf4JnnBpoyHvz3T7",
  "key24": "25YKwB7LRmpJRRW8uG52VCbgHSm5Rj1xr3JjjRJDa35sskGnM4CgFriiA91yhkR6UVt5SsdHmdpjFff4DZTfJoQa",
  "key25": "3c8dPNn6nDcHpGfH53use3LZvtWNrrLz19q1rKQQkSsSuwz9zJJtrKcKgfsmPit6nFZwDVb2R5roNRJAjPhgWduF",
  "key26": "5Hovip22KATSwWwKpui1AHsbK2n1XX6gfyeUYykExUo3x5HQh8QFbdiPTehLP48csbrfXijNwygXJt28f5ZmpW5Q",
  "key27": "1DUXnqUvhCHPmVXwNKaEGRZ47B1CpKwXW96JNHgoyRJFhJiWwnvAn3aNWii4cA9d1StcxTDUnJPZjCfhVkmnQiP"
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
