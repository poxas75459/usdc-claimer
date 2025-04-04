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
    "5C2P3UEYaMwyQ8zXSwPDzcrLbuercg2EBcffAU1RxBYW27y9fV9biP76Bwc3iwEeTtFXXHwPMisgZFZkSsyb3VoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V9eU3AaEFE5vJrsHY2yvdPBTE3cR1TgpH93pPCF1nDTTUQgb3ScEX5eDYeQVsiAGqq1B4qzf6UxLJiQA1YNJvay",
  "key1": "SEbdc2EFmDTkFeZ7GE1zGGBm8KocrUL4gtzWsZqALcGALEAEXYNfYfqiZYNbneYghUdSBxkMRxY4mu172L2x3qk",
  "key2": "5QUQnqUgrehzjZ76d37j9v6DT9KLPRZzD3nWHCtKuxxSC4HWTiSf4iFEjfA4iBYJ2dMurqw4n4eofF94WnKrjnAD",
  "key3": "67q8GUcYNzqKi49PR22wqaX6JGi6Mei5wJFmWLWfUnS5eyLhnrspzcMofUHMfjnp6tNx88jrSe2W3dTGNwYrNqUU",
  "key4": "2pfM2s8dWyjXyKY9im6Sjw8N3LBEryGTpBEaJC2NXDQrzit4wxKxwAmaS8SNGds5emkSJ5DR4nhXb8tM5gFWDAKA",
  "key5": "5crrLxubEvpZUqjBKD6Vgt75NbVyt3KxjqjwBTrSQqDiTeTMYQFGbWmqAdL3SKDAHC91VPZPrbHB1UeJ5z9rrQwR",
  "key6": "62YxS5NeXnDiQvnMHtDQ4D3Kc7yVkTTAxaGyNGX7ayimmRjAMkFeU4bLhX3LnxRxnNxKJQC5TMctTYKp66J2NKmP",
  "key7": "3adfBZjH1yoANCM44QytHeQE61mahCJvkdjPYRB1E2DmuNF4gB6PCfTaTFJJtPcU6A2EoaKB3GcHUFj9LZ4ysUi1",
  "key8": "5r5S7fYXNkPr7Fs7FTF685B4Sm3tVShwMUrr7u5yGTDkq98Lm6LuXu2dZXhsPNstQZV7DfLN5mtWVm1veWVt2fJG",
  "key9": "3Z3J9KNPSSTfD9HkFNhmTGZSa7dXsUwiN1bD3vEM3ATL7KMHgjdoM41qukeXo1qZCMczDGyjSbtfT4FiRQiTLz5W",
  "key10": "WC2GMDJvyGVrrMRFK4tpV15atX3Lj64hY94h3tSqeDQFDKY2J4Aq5gbgyDhhgmyNrSVwwAyLyWQxFDEQ1sT3w52",
  "key11": "2t9NkesPn98shE9Z9WEYNTcnaMLqSpfZoR8juSeyNm83SigcimrsYkEK2x9QY5mjtKv8iLKWK9cu7FNknUnK19Gy",
  "key12": "4ZxwwrZFJhq4Th146cxCR5SJGAveXt3fDDFD4116um7WK6sTUtgP6G9hiHPEfYhpLN5vfYRceHjLtgzwuLzfyX27",
  "key13": "KrcQ8hLkenThP6uRHfREYQ2paAT8hNQ8ZXNyd5kCsqZvdLkcNzRCCys8294iqSXQCgjZbVjG2btaPPBbTyR7ZUF",
  "key14": "5aVyzptz6ZMVPMGsmT5EdaZPMFdPxetLTszgSE8DaajUAsGPhPFpcZmHxoWBmbELXZxLcpmVJfvkzt1ScC46MgZs",
  "key15": "2hwU4TfRvghunMVerJ466RQStJC9VAYYVySP9jqwA2z7ZxvxPLu6Po8zUwYptQZcP6JiVWoNquPUWg56a1fLVTXd",
  "key16": "s3WHeCixQmEbj1niu1pzSsXo4V6kKKTQw27m3Z8r5esisjS8nt9uZ1UTeGFhka4HurKP6QiwJtCRNRThv9AymAZ",
  "key17": "45LV37BTXQbC66akFySN8286JAVpzQpZ7cLdvYKW4o2EnZ78Z6fCurGY37MRAB2i3yTvvsGeZC1ygnHihZbeTCEq",
  "key18": "5HBqgaQGHL8JJUZSGKwoZyxuPfjpYLU7hSwNosjYMkm4GvNasSW6vF3SXXj7XD13MZuGAGjR2rMojHjoHuAggFnB",
  "key19": "3462yo5HWHP2pUW1ZmUJ9bWLXZK1rZQmdiisAY9QsHzgPnt99NC7cQ9yNVWTPJiSp6oLw4qMdDcJf4XTznXoGcwx",
  "key20": "52ybJ8HMTyZJTYesYQSZGnkrKxn5z5h3C4Zge9oD5ScXKgzF1wAXXoUoZvGDMjvKZvYAghEZb6i9U88CeSQjLGXZ",
  "key21": "446CF5XwygMq7XbGnxTvtewrSSnCBnAo65bo6r7wHbgqemwz1vS3cpbzWaKzZV5DHzjHg2mu2oyaDHCazX8iKA8b",
  "key22": "2NFUSeVVZeeV1kinFwh8RrTyAp6SsdXkwtxu1jK6WzC5TQNnzP1aW1RezorEvBxjffAMh4E5CESzLAVZ3m4Qxrsq",
  "key23": "3qeZnsgr1sGRJn1ZApNSXBYUKkeZKjmXVTHU188NtK6jaA9jHUQwtqtqo44AJSbwg76ZbekEEUPBNwrK9GZUESEv",
  "key24": "TvVFSfkr9V3iokAJb7iX8GHN7zmzoavMQ86YqDX73ziHARrVtAizhQM9WoMQMBoUVX4TiN3uRBD2ndKbDRpkDJC",
  "key25": "2aJnL6MAj4C6HosSe3DHh3RJArnJwBDRJMBWgjFHio6Tt4C8wATm423Lp6u5ffgxfyDAty6pWF1tNfautWdb2DKw",
  "key26": "5XAGjv5ntpAuYtAgQj7eCgdVDJxk24bXvBDiFcoNzTxYmK5ZNQkTaR3SxDyyMpxxSQKoLDEFbmApqW3LquC1aHx2",
  "key27": "uXLrYp45cwbs3biPXfDn1qBQzhjiSDy526nbCooNntcKnLpgxvXyGDkaBva55TnYnhAc7icvYtZo64YgW1YiqrZ"
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
