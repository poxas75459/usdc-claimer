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
    "5z2LYPHTFsLNbBBNyezkPzjvuKUBNJ1waZ4JLsmqCnkiEenJJREEfBHEBvihXY5G9YM1BgJLkSJmAHPsUcQX8qs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32k1Sc4pDzD3cyKLNfnwfGdmpkerMM8mSTtqBGx89pBugCnQDWCm5DSv2DpDGgjNKVUhSzfXKA3wNCZVK7haUjL6",
  "key1": "w39YewWonxLiPY3DNq5mGrynLRGj3bDsygCsAeL7uxD8mfgteFVbrmtoP3b59Lv2yRxSLM76HYCZ3yCKnLKm8oW",
  "key2": "5TTmorZpfCBeoKRzKHRPWkfSiNwiTtqQDfh1kuGQ6UX69pD4jAwRqc3kHd8uMRAEs35hfGmSqQctBP8yJFnMkMh3",
  "key3": "uTAV74Q71xeDZzd7BSPBAuRqn59jrLeu97jCafcujtP9S6NJM3Zewf7dsh3wsSLJ7wn3UZfb82nWzqAdXHinS7r",
  "key4": "5GPKevkbJfvdfSx7JbmKiZUB22M1eJpg3YtycrVaNp9Z3deue5MLcwphimu59LhjW1f4j831HejBPga4ZwXpuyqu",
  "key5": "2aexkdgawd6f26CPio5rLrQTrErVZuM1Foy23atdgGCw4pu2LAhCqQcE747NKPzpYcWPL54UhvavKeoDXpdgjmN5",
  "key6": "x9DR6aG6umWGeKTaxJpia3rkgoZJ3HUjLK7JHX82p5fdqrf7CBmFGZVHJdsacivqNkoPBS57KEtv9HVqnUSXnys",
  "key7": "3mYhuuspMV5bbrircKr3gd3mTLMaLyeMEFwUob5zoFvJM48Hrq85e3kfRJM3GQLiNWDaFmWoGzAC2nuiuK4LmF4U",
  "key8": "5FNh5BELVZZGtXknpMM4VmiQoEgTaPnjMxhAEoTGD3aKfkNMiGDjW4M6KBSkF48Fgi4odow2JNtQjakhVoaP9Ynh",
  "key9": "2FgzLvd4JF5aiGveuLUEYaWDyMm9JwVLADA9iq6rnqVajqUVgxuBzP75nXk8kWiNmk2qjPft2sfjhwHhByjzmnnq",
  "key10": "5uvD3HphcQTYmN3wPWiDticCKwxbRXCR3FZZMEH2Dp9fkdPBzukcR3puEiFGhSc3AuSNhk4bqviCzL8qyJEd6dHs",
  "key11": "4KLeTch3VyKCRJrxQ4yusWs7BU3JXaEbVXXCkuPcaGmszvpy7nhqHBrADgWqxxTUaypYurUxSmyVpzk13gFWZJET",
  "key12": "2izwkSVbmtwdbj3JKRCDtEADFvEiv24N4PmtaWe2FFUkvhmgJH4wDfFrPutAuoWMo19toYCEfajdPGAfGUmV7Sh7",
  "key13": "nE67gNmcKi1a4vnKa8w6G3WkwqzsbSb7LbwvMDN4HspCXuFpJhQeT99HSvycJYQfoqLv7XgUDRxSdHBh1qAxvV7",
  "key14": "j8ShJYv9eZtP3ZDazRvEeso5dCkHVk3pgyR43yEHz9yGPARJHkH585mnWEYK4JfoknrSF65ds2ri5eP2M8mdsxG",
  "key15": "2Z5mEp3CGcu7weEMFmVSvstkxXhb6egEbW9QJeFXucFdfsCUTfhuhs8PWpGfsYC76W4JrJPifSMJNNRHxrVmukTa",
  "key16": "Yhho8oudzx2vsu99Ensa7jCcafbZg7nSJHJ6Hsh1TBKYSSxgTYLYDqNF7y9pJBrnp9D6MeSanSm84qkhPaiJiDD",
  "key17": "2rqwx4gDL9hzhFtkjMBXMgzwExiY8wHgD6KtSAdSfBPD4iZMdrRX5bodSNf9Dc6S88AKj1ojaipStT8WE6HrggY2",
  "key18": "3EVJ1jWiicLvFWwa53w2v5ouXmiYjYbentXNNhGPBDas1PutShHEUXTEpmTzJzWtGFJREytfnz6ywJNqki6LmcMw",
  "key19": "3sJWLjxrV43QyosUQrBPt5niPEXaCLSVYUVf11Ym9UCn3qgYhTNGghs2JxoC8GjT5XKNETMjDAd8z4mx24jSmwTu",
  "key20": "2bQ5F9VG6jEL7rbwR3zvn5exaRF8HPC5B8TwNN8aEafY1n4VezyjkfTRPQLGvUHKWG6W9kVPSvqqQJ2SSL366XnV",
  "key21": "4vJamngGkDgJCzui21yM1hWTPbhUSy2MJQQUb8EZUocAFtp5XnRo6hGrKMrDk5eFb5DWHS4xXuB6p9aAwFdzc5ee",
  "key22": "3wjnaD7kZZE89HsQ9o536H5GfA1b42WV6a9DekLxJAq2QdWRWZ8dmyDQq7LgJVfBfFJfixiGXN9hzXTogBXdR2vb",
  "key23": "2fZWStuqZjWEprdKGPvNxApvkZiw6iTKH86CedVLrqtFQwqZFYMymt4ZjvqtvnrY2an8VirEuLWajXuDJDB55hBv",
  "key24": "hCJXa8VgD8zNuwak1EodhSGu2uFJGnPnxRjsRqwaB5seuaTMKHro1riwDCwBgDTArksv5z9ngG3Em5XSsZFrcPV",
  "key25": "4Yo8Nh5PNb6rfQjtzgSLwD2dd55Gx9LojKTdmBAEkDrEQaj2qbnjKbRz6Ryhmw3jWFK33hXqZitvdZEf77YMNYSY",
  "key26": "4f8dkD8unnR75vwLCaEeZY8FZo7MJrkUVEpGf6fr6wSyrytpygrXEurqsePwvkWnVyGWrPqjJrSf1Fod2DNzyV6D"
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
