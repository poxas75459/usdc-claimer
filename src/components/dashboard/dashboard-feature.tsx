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
    "49KmSX4VBGzeFL6pdYxeq9GF2u5WGxKcoJV8SyFgBuC1m3B6Y6g6XfCD5TK8Q8fWMou3e8VAb8wDwaa2y8BFdEnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZAth3ShNa2nJc49kokoqZe9G4XfcrE5GyBTAu1qo3VWCAdFiaFx6yxr2pQ7Rs2P4DhKHCs93KtgYyyZsJkHcwN",
  "key1": "4eh77q1ragRQEuLhaj96v7EhTVHszMA6ZEAxgZJpE8wdb4TvcTWATW3WiQye2KGS6p4WNdyzkNvA3rZ7QKH9KMbu",
  "key2": "2tL1mqsP53Vc2hAyrLj2Ng1XKnhJCqj9WkX686ivVH6c9cWuNi3TCs7J1C9GW4mWLk5rWduDAgj4xbnrYcZQyURY",
  "key3": "536A4qvh2mdL9e1jvVwq3KexhMmh1DB8jQjvmx4VaAGXdXLrDpuSLvxkoziZHQ3s9Sr9WbxmsDbmVZdXuaGvo8kk",
  "key4": "hmUMjWgnBEZvuv46J1jjmL4w9xdVwTfBgyXJtgE8qXnYwLFzuNA1FvbiLfTrEGEdoHN4X576pHPTmkWg5K9koe4",
  "key5": "2Wu2ukA7zcbem3NQukpAPEsi9Nh34aEMUwoKY8B5F1Jn11hUQDDHzSvee61EFPKqDv24PMEh4ax6WY61nB8KJfr9",
  "key6": "LPx7CsehAdVFkr4ZA8NrKQMDvzmihdDcQuXTc2WaoiHLU9WLhtKMrPYdqHkNXPJ2Eb9AzmyGXKFxEfEkMvm7Jnz",
  "key7": "3urhMztYDaKGqUt59Tt9tvbNWREr3h9twUWzLMmWKb8dpJfXc83kL5Lxtkn5afNSVCYb884pS5Nc5erBoUVWnPtw",
  "key8": "4a8b1UL4nTqnigpGPAsL7HTibDDWBwVxM4kv6utbwL5ZWRGgkuav1uyJKGTG579j8Gfyoc3pihUugb2TwRt56jLz",
  "key9": "3YmEzbchtkGfvY6AuGq2NY5dmrBJ3DTSJMPs68qWXvyfz67bj3vh4jftfTth3KbdAD1ab3HyUQ4Kp5orGNpDQ1Ks",
  "key10": "4ERdUVPEKc1UENZzA2VVQS4mcFLembj6HHnDu7iDkos7mPFTsmbCQkHb8o1pc7TuUEEYgmEFSQff4rMjD3EEuvZw",
  "key11": "2Z8PR4hozYYXqmCiVADCM7Lqm4D7wHHpbVawJR7Xqbdc34RN2mf7ZBdHt317qPFxazRDmyKgHrtU8mUmsuvfNXsH",
  "key12": "2QPet1DtQqRPYjvSP3Z4Wc2NzPXnsPDrjSgMwQLfgQDzM1gLUqePeQpREhy211hhfXng17H97XnGtNAVpNDUTLJ8",
  "key13": "FvdXz8X9k912rZsXpGk4UgHYs7wmXjkWVos9csNaimVnbyxTBVsp3V6fg4GmEZRqHMgfNgj5SJHTrKk1NvAkkem",
  "key14": "5hdxUv4zFCgPmEiVVyetgFVAju1jcoAYWyVuFNtNAuN6QPuHq1wpkd65Jm4KLx1mKhsVS5mPi5AwDhqfwneeGny4",
  "key15": "5UTK48S99878Nd22rPnnXf48ed6jy5Twx3umTU2VLAicSgDJED5yHnTML9b3xebqT29gQAQXzXed6ZydSrxuLRz9",
  "key16": "3mUPLiA5rFAeZ4y7g3Q12Z12u7bX9YNrbWpbZ3W3UJrojegzxmLSpe8GbcwdnSZLDYHNJMD2GUAbSR8o8qFduGve",
  "key17": "rZnRKy3AJFEgcDTXoHXzkthEdrsfLQ23n5BRZGdJ7rtrqSrXoWSG5gwe63dtp3Bb2e1q6UCFc5X88XZw7HWcf1P",
  "key18": "K6VFRMQXNSbdEzXzXDhZWPPmA8NHGRuPppiieKcSVUk2Y7UvPrpsPDnGikRgER4HCwG5ra9MKWfvxjYsbgS5bZu",
  "key19": "24i5syrsWMtEsyatAAGCzL7Tfaa4kr3skXRqkCJS9pXf9h8KnX28w2svd82voeDRv41Vrn3TEd6scTx9cDw3hh9Q",
  "key20": "4wwvC5nwHW4uZsCFYXspPCr4yVinwsaRkBvLSgeTRVLCVztSzE3JnhSY8hWXzAUVjgKtGFJaNpkFvGW4Skh5fnZq",
  "key21": "4mkA3TfJFp8o7Wof4Hb58WEioE4ixyCfLamnHMsYHAiM9ox3YaKge9nnSsMyVJs42S7xWywkSWcZKcoDP8pwPD3w",
  "key22": "2CHMkruw247kBitp8PCwwZSPESmcRUteRwwcB8J7Cx9JGAFR5tLZSzMfjf5zwFPDmFhCX198fHjTuLdeD3yh73iW",
  "key23": "3eCYFVfSgDKkDG5TnxRt8ufq1GpjBJLRJFQoy7Rka7oHDxCEwiyxSVUwZ2qhehfKMXkqzhyYWPVJX8xg3F4Qsem1",
  "key24": "2qCayFaZMFn7iLy8waRYmRf8z4dpuMWykQj1tjfcWNku35PGrqG25fxnYa9aHynSC3Baqumqx5R44vsPKufdCTpA",
  "key25": "2deYyBsSqCUgsPFt2PmypSawCsptroGTWuzQXNomyqbq57f6JytBPPfZnm6U9D9TFnQDgNRh1QyiPFJu1RZ7PAPf",
  "key26": "4UW1gaPrfoYfSsoLndyM1bvPsD6nPGpEtWp5n4N87AeUmgjRrkosXv73iV2F3SXooLfFpxXLW3gEX2D3hTfc7t6h",
  "key27": "4N16bjBvBN36bMv9DoBYatjUgVMVMHMQoUvSZN66TDujHiS1o2VRehq1W75ZrxpGAnUHJFFtdpSBXryke73UqJch",
  "key28": "2eh9wG3KTocghHqd1raRH2d1z5eU4arLwvw3HezEj4ZpZjZxUuTiC7RiuH7c4BT6ToxUv6aCcEMoRxbC12Tw7RU1",
  "key29": "2qC44Arc14Ky9v3sBoF7CuLch2jikRxPZozTbyHCkAnQsfy6cuHM8watgjX1jTNu5EhgNoJo1gKfFUovQGZmjEzs"
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
