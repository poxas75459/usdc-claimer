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
    "5tcyCxq1mSrBHnHmvvNiYLU7e65SsC9pRUapDs6uue6oVBWSNgegs9YN639kQo1KVjvjt47bvBLJ5PvFFA5n96K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1DqNXsuNKq7jqc4F9VWTeQbFqKraLg8a7Nh6R2SdnVg4EzW6NkNTTtFDhY8eWBqQcayG3QPm9mVXLuxPdhVBt4",
  "key1": "4uxVGHTCrBdAmZc8pZFHhfXECa2PeZbAmtxA5cpmfRg46rUP8vTKwftAAYf246HZSP9wbeE6NGLVmMEXRMwEpWXU",
  "key2": "55qx3NNxDHgwJFffiTAGK1sHrSwtT7vWa9x6Ke1ybtwZgmS53qL5V7zomzWSPxRauY77bhbWCtLLA351m2fxK4p5",
  "key3": "5aXgjzxV6L1ZLqXN6v6hp2Y46R72HkikxARZyyN5kk9q8R6oAmzU5sGuBQCsC7FvwUE2a6EQ57bHsjKEr4chhECo",
  "key4": "328Cjt75w9sBnm1BaNLP3FVRJVEKpWRji2Jc9rFvGhefStAKU5aqBRArttTHA76JhNk2yU5uLpWx3GuCnTzpyVML",
  "key5": "Uj5GN4eSYn7LpqCgVJhxJac4iJPwCcTkdxANqKbp9mHSdEMLaS1UA5JfXR1fQccEgXrw1cU5k5g1WEVHsuW9sCK",
  "key6": "2VbXRTFjy22Pucu9uufJm8CHNbDxhyQKFJmtsYa86Sie2sV55UDTx6jkS7MzRjWyTMJEStoWwZzUqmDNu8HuDWv4",
  "key7": "5migy6znPRRXhiJwANAuX7YTjkLZ9igaBbo3b4XcLfizzwnWJWygpSwigFhEZMgoVJnsTLL1wWXJUXWwLrkm9XPA",
  "key8": "2uE2Txd5wdvNjdkBKUJzPZNVVTJEAbXZ5xQrXWt6psotiFQabBTH77j1xPaoTVfXf7ojdHM3UWsYm6QCp5PuvRpm",
  "key9": "4MdifYTDhAgWywvBZ5DBk2ntEKYH9cqxj7PWsinT6nB71P2kt1ShDa13dRTxRNJX7VQrSmcAjjffvEjgmN5wdBQ9",
  "key10": "4GRhSF88QFQsrmmxoXjWFLR1kyaP1voZDMcVbpc5UnQVXrw4zRkqBLMpaBjoubaHiRRLGFN9wdjd4v19zhd4jQZo",
  "key11": "4fG4VfYD1cAoFCCorpDMeiEWQSRmQnch8g4WnqgJ4RDGE8NUjDhf2kPPyrCuytAoCy5bvGmeUwK45fctLqmRZiGU",
  "key12": "4hAVkf4i8t6hWnNgCgkfwZp3BghoVyw8dKksSo1PQ6cwKhZBqfc5kfTj4PzyeJy3mPpzKvNyqUZzGJwsP9r6amuQ",
  "key13": "2eq7FA2vTW88UhBc7oB1nEEowHJEQhUdvL5RzofuHNDif4jiqw13rYU832cqAh6UVTfVtFxxcXSxqbPsjVRYe6GN",
  "key14": "4wxeZ9ogMh4feanKLdF9eSxKEHvXkFne8pe3L3gK2TBYg8iwGZB1qdeB6kKmiFhyx93rMzVjerH9o7G9HtVUVbLa",
  "key15": "L1paowy1GuJfqwWXBTwrqnpyBBDzKRZVyaZVdDU5KkQyQ3d3PeeWPbCWeEZqN7f7S6Hw4JF3ot91AFc2un1Gey6",
  "key16": "2wfFEhJNwp7bXARFvhANHCBrSiKbzGvVHEBdyAMKBXHo8ZhbFXR8gYW6KsZd8JRKF1nyiXcyvLbNAF8tfa8N7oMp",
  "key17": "4XSPjefWykMa3GnKnov8SB9yzpnZonE4yKGi65zPGD5BRjr21btqDhxwCvphhSCGZA4CePFt5LmbZ6mYcrdE58xS",
  "key18": "61jKT2eVk6NKSUcgTuxdVqPE4SK2qjzvd6ptf1qees2yxdqiQiL8ujL5HB21yWZKWNCH2DK9cmfmZtAWWpcXLAcy",
  "key19": "5qVXiq4k5sipYq3oVPeD6McAgxvFVMEvEcXd9fAuyB4BtJaqjfJk8jK6d8P8gwqoL1JkmzMhQW8M6SLJFc8Ai3qV",
  "key20": "vGkoNvzYpetrrLp9zJJDSiWzdMfAF1WJeDVevXaQK9SrvCGy4mXVWPRzxcAQn316x171TxfTXH5djjYAXzEpfbw",
  "key21": "3aZwhPhNsLxkzRayWwvo2WL6q5vCBvEbZbTnNkSTrJcHTcvtoXEm6W59Vn4WjPfMdfcEr8onMUVXSDf9T9ivEx2s",
  "key22": "3vponHobhkkEjrTKv4S5bmrMT6TAPrzFEU3kM94WC3A6Miz4XgDrcts65kgz2Aows3SmjGVPpUKux578LfiTAvjw",
  "key23": "3zwg7Vut2prd9JC4BRkZAym4rk7z7b1T4Bj71cjz17Cph3gG1GkEjWFVQJXah2zmcAqnBTLW36xgbxizdbCanhs1",
  "key24": "2NhLZRQX4jyCG4m6Z21kz1FcP6MjrZ55CPuToKR22C4y9RmCRS58dbHceJDR9pzeCtz9163siNkGrqZQt3vTm7HQ",
  "key25": "DN2gZdNjedZNVuc4Ei19JW1Zt6quEf1Hibtydo3YxnbdUFVT6pw7aAYh7vSqm3NA1SzHUo5FyUGA5EhDW4eFtB8",
  "key26": "4DbaZZamNEL7FHJT7FSpVrgSiCs45wdoGSMceYWydGGux8xkrTQi28AJekrDno8EStPVAHYqLMepauVRjGPzQTW2",
  "key27": "4uQ7XuFTK4DLpj3SP2gTSGdjM7nEuWXFdqrjERcwbtE58zqZXHbJ32332QjUiDeu5U6SvUs4MGAKwkobJKrHqcgq"
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
