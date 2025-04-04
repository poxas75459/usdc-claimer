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
    "3SVTVHwG6kuXWc3oafj432XrFUsFeeoFBLkJ52b4opV2KMwRtgSwDU7wydTF5kNKzXwfjs4bjtauwXh9V9WjRb6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mj6RKKrym2omnbeTYDjUeaKxzohKZnf3Jg9uXpqME3zQaq72wYWgCQR8LVUN29r6LSJ2JRVPFSbDYEFFUUNREYP",
  "key1": "4x9MKmhgo25bqHYoxGXbHL4ffRB9hR5gsY8ovcgocMZLAMDSaynsvJjDHtWCkMJLxkWnNSkF6VcD6DcuELrzpA4p",
  "key2": "4Q23secKCjwnSutGMtAAhMbhUwHS93zDPRkgyNu3pcS85yTeN4dKVSpFpUKDB4SL8jNNk1v12aBywYms8sib4e28",
  "key3": "iAQSwjQJrdnpkPfE8PPFhbXsUhAoR1qPdaw9YGGZnCLsQuYDey9N8wLcgd6tygCXvyuLnjzSHoz5N3hVfHMWerA",
  "key4": "44898S67TLCkYADhLXx2noDg4h5zoL1MYQFzHRoSRLpo5cFv74bCdxNYzfE7Y8nzPtoqjjnM1wR64iTEkBt28EmX",
  "key5": "4HKNcRt92Np6Xp1KuSCD287eSjvdX5HR3xNLMdtYKGdirVgCQa1sH4cdHfsXnWY8TmvYB4aVYtuaqH7kLCS6mUyG",
  "key6": "3CL22W2yK5CHK5853gApBTKkiBg47siTLzcjENcswAnLNDLiLC6AZ5SSJrrdfg9XCTXYrTNARZnxrD52wPW9fjnb",
  "key7": "3ryy15vgktHobupuPKm8r3sxvsRMH5EnQC8GiwPPbygbVJhqiJTSsuSxTgPqUUVoL4cUzCq2T5xLAW78AY5PMQ6u",
  "key8": "4pLqRvFa6YsVMzziHa8mtg9hEmTWe9JL5q921t8NM1EXF5oavBvew6jWmo1iVnPbjoSaW32v6pe8Cs66A8La6URi",
  "key9": "4Enn9dkMnT9eyanHDeKtYZXLSwfqKy2TRJcw7Lp4XZiZJQ2vUvLqgFVirAdaKb9cF3YfWqUmozq3GDyChixgATSZ",
  "key10": "2mkLaYTCD8sNqrLNY9kqAf5HN1X3RhZyYLVw7akstadQFgd5qeo1xje1JZTC5HJu12QETTCrUXUPms1oGWYJAgvi",
  "key11": "5yYU4TiyJ12iKUF5hDF2DipMcESh2c9puxoYr3VhjK4cVeAX1wg7LTUBQmvCvkZPre2Q4hhcA6jLMX6DLnwXxxF",
  "key12": "3K8484QtDvBuaqtEiPZx1jogZYG6qYWPHUVnPP72Pm7TLo95mnF6FpN3WHBy3ArT8aGR4jxYwEr5kmae8ohuoVq5",
  "key13": "8xq3KDFQFE4u9c5x2zMhv3GZknHpVXkjsKcAAiixgVGVUwhoHucdSnn7nhLvzXBmtKNJixbhgKebFg4zqkjx39p",
  "key14": "24fv4YmS4BNeMPRoiZSTp9huxy3DDazfvvYPmmPkLedQxrrTCa3ipUgZXTP1GLEV5Fquk17jc9K1mmr57ebxmAQC",
  "key15": "65g5TLV15xjemVL1YPq3VUxHL2ap9ri1hUtnwMtvZQYWZNM9UVzWtG8nLPWibiJnRCArySoZBEZVUdsUDzNyBZfR",
  "key16": "5nreLUnKUgjT69yNE6m3z5oRYdPe1PeGKcA6djr7iKsizWwwf4Y37EJDezfWRUubr18YEMAxGMBjJz6Xwe3ozJi2",
  "key17": "4dmhZgWyzm5FdQCkNCPxKsUpcAVt9AFQM7aLwz7aDAa6621gYdC5MqZTk7PcDDTmbs2QEomAfwaaAKpDSEo194ps",
  "key18": "5GzDHt9uXHQHiED2AkRTYGRfNhAn6RPwww6Kx7XaLQs8phwZ56V9nczP6wajYNSKqyjCAGUUA1fjzFfvEABUJDyW",
  "key19": "DeUpfF5mh4V46VsyJWP2mTQdC5DhZViZxF2o3L8RekLTP6yDDSKSCXmohQL4Shj3HGFi26vnvvzUX5h2LEX8vak",
  "key20": "2h1PAf2LUePXCBsXPkmnWoGVdnjMSMJnD3FTukF5A7dfaWV8nTKt1ijtByAEnrVDygZoRUDqrGSKkNhUjrzpPbVJ",
  "key21": "2ZNU6j4u7D26fj73rVfxqmWMzDWbJgSYbK7rUtdTm726hFik35XbZCwZ2UP2FtAVrsxqCHbFMMBv2Z94SWrguFPF",
  "key22": "3iBdFnWRK5WLiDMCduFmNUaMCvbcVtXcQiFHmvD2Z1NN2E77gDRpinYQSSF7nwb2xjqTaAst9Nb12cLgy85hUHS8",
  "key23": "4WwmWPBNeC2fzWBCDHKvjPPi8qonhBjiY72Dz9iHBzwtCCpWvnAeY872RE6q4Yvig5dAXiuRGWHtuGpcun5abvJW",
  "key24": "5m57sf71q2Z86cyKsbXkuvCDiKNvEF8HRd7nuDhd6TBipa77tNTkDTJUvt98pD9dWQQKneRy7Y1ehffjx1Uky6CU"
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
