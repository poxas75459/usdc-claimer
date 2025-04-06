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
    "o2B8DfvrbnCD6A4pU4k1GiKBuQr2Qq7CrdF4txDHJ9oBGJRPQHVKwJuyX47vTAVGSZdb8LMMKHxaQ34AwZESVss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmdYrwH9JNBdYQP5MbFmfaiL5SxTTRgb789hxix4nGUz6g78yRNp1ctDQsqGEZnW6syGJJd1Y89U1JHCayNPPvR",
  "key1": "4uAPtoRw9njTgyamcFY8DZbrAZ1RGscJkkfYus9VWe7neEd7qUGhVKo6zDaFKTjcpcjN6DqxgqyNYexofR9212eJ",
  "key2": "5aSqq4EntwD28A724XCAqN3gMS9ntdNb9RKvz8x1FcqsWrLgX7LaiEwETamxVfdN8YpEVwvFe5daTWYBMPwHfaff",
  "key3": "5AZj4LYpqxiV1mwNW7dZgCpagS454JWciB4UfBwZgpBy1wg4V9M5FKYvG839hpZLUkGCKZaxg2SLNDajACo6Bi7X",
  "key4": "3T4e729cHkNicz7AsKVnC7hooD1x6cjCfD5t3rbWJGUphVFzFNtBqZoLspxLgE4cttnoqtJhETvwQjCzyi78oh4N",
  "key5": "2ptRvQv8KX1PRjNTcwPwsJwqE9vnRWoTohiVoep4SfBga512qYaxEB3KxhPt9KFJAmd8ko1bcpr4aGiF8hgABpq2",
  "key6": "5vDD3NK96CxQYurZu2rX5wqN7oUshhat1tysBd499Hov7EmaaX4W9YeTe8w5pNy2oNBsVzxW8GxP5sFcK5gt8WgG",
  "key7": "3qhtkbXEdmuwt2KgNEb9WU21u1ooaciV73Q5WG5x2HorTvzbg3dLMRf8fMZ5sYbydLPiFvVvTm4KsPCUCw8nBmaf",
  "key8": "J7aJRKvCZd67a6aqtgpf7S2vdhZMRRviEdj1TVF5Kszb8k6rH6gE4LZotKgbq2maksoAv4eKtNf522URNUAcJqT",
  "key9": "36ZD4UWYbWL2qo7wP3iaiardUFjszBYZmPgkSQhUgQETxPa8SBg1h3NAM7VsqmjK8Wg45cHmykL4LXNwA8h2zg95",
  "key10": "2Mf8YYdEcpjWAGVWWAwCgpg4zZnw67W6qpM7MxgmBWky7zBsnq8tccuaXpxLA7jg4sdbKpJCtrbdf9XuLwn6yqqx",
  "key11": "5sFWbLBuQapDJsX55qpvA7wUZCtLeJoi2BJ7ccaxF9TWTVBDFXdN9qQdrbu4UXunsWGqAPP9dcLL89vQ6uUakD3A",
  "key12": "4q1EjRrk1Gxpvu4ufPmiK7aNYmJZauqPbwnundtVYjYzdQKwVNFtx3DxWVLnjobeLo8fgbuqnuvrkkL8UFwwSLho",
  "key13": "3cvqaSxwXSAkgm9afqmT8FcsTtmtyQi7Gmpp3inRDrbFqCxRc4FrYuUnWoZJvzrYUZYarLhbG8aCdNCkKegHC7CV",
  "key14": "4dB4A3wUtXmQQqZYPXLZ5XqVcwqe1rwn93rDkvYmizv7Js1BGQn2M7QBypFxTUHX3hVHYjU89uss9U8pK8cxTykL",
  "key15": "2QF1LMUSCcN26qDs75hqDQGJtRNDoWBhDxSRbdEDyD9K3oHn9EgFkRkfJj5DHY3HnfmbMmrG8WgawJGsX5Ew4E7J",
  "key16": "43ZdmB4HdUdRuazh4araJZC6D4ws5e2zHev8vyVqstzypnBq43uEvje9Qi9Gc2eAgWL6jN1DvK6zpuQkMtUyeuD",
  "key17": "3NguhMYKt2CTQ2rfXLRjyKXyjgRpTBW8vcHBmnb2Fc4M9WkyrNRF41mmeNMXVPfM8gUaDWQ8u6fh82ux4LCrt7q6",
  "key18": "WCq3PFGRKFuzWiHLeMSsWaQPrMM9hEiLoTegG2PyV2tk8FcxRYyxChUdwqqhcFVK4zkVRsucozLFqW4szkvNMvw",
  "key19": "5bQ7qZy7KgDW592d6L8vRYUBZTwPUCrfVoX52uLedjH7MgQwHkdupkmd7rJMsYwYfjn3wYW3WMgteYgJQphwgMBY",
  "key20": "2v5pGhA1BVTU9EDqNQ2hcuuTthpYktxcTTseh1oHoePmFuuTg6bCXGCoX9UKiQkjnzAieiLJFHgk7FaMEsp9LGGA",
  "key21": "4rXbhHqEjAfswCpLMhTMFRy8XBH4PL6y7yNm76uRrhbNwVU7c5jhWVMyu9Dz7sfXm7DmiNf4NXEiKX6W99yochQs",
  "key22": "3kAEdg2yKGCH1gRk2BpAKQxg3puJkeMEhrytVqSpojs9Qkau19UzwaGThbnsktRAUjyUv6dazp1xx2Rm9C7ms5tz",
  "key23": "4cQNW4xeCgEFj6zZ3yJJorZUpVzbaLahBUibEwonAPFaqVPprFkzF8h3tvuVvvc4r2StkSkSR8PEBBhxU78hPHTG",
  "key24": "3SgZtL8Be3vfJ4J725Ew8XAKB9TiqNQ7X63SVR4P6Rmza6hUbqBxVf6LBfeNvS4H5YhAgjNb5fmEyVcWfqB1QhHp",
  "key25": "GbNXaFqEWrYYGPQ4C9JkJUDyT2R4suLF7Ea3iDX2v8XJJtY8ZwvBtTmkZcQCrhumxDawUUkmSk8nntvTR3iCh31"
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
