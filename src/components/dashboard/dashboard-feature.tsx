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
    "2mN3PMDbbEBF6EjqiByDH4wT2wxbdeWmMvFKALHS3Lgmpyi6LiqGxVfBzdsqfhs5Baz7TxBBHdUG7sdaezSkisQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cVbbvQ9qDSeZ35NUGkPn7etpn8iZKGVDpBL7GjeGyAZTBVkJodua9cHA3WJyWd4Aq4NPdPmmdjhXuUhPgC5Jr3q",
  "key1": "5sUH4podFNM5DB9R8QdGUGtDnuGzYpKUksJ6qykmMyvs7VvUx1BEuiCfEacFHARAokweUyCGZeoThgZZGPM1hxnu",
  "key2": "3oc7BQJcLdrp8wj2sjXTMczuMYAWdsm1dkoAjbwLYUFRmTVKFw5iNeASEgtdkPUngsB14uuhkBfKVXVdYxX25EYC",
  "key3": "4aTorNFFYQbKRpVn6repUc1tSpCuUdVZyaaRL34yJ8quHfHhwnEkJW8N6TM8E6ZhGSkRh7MuUGZn1heTPBhxiqAY",
  "key4": "35wMk3ojfHy8AYcZ4ZNwXXekXmaa8XzmrQt1ubLaECHnCVsGpWPexCPLAqTQsk2Q6uqmfNJWu2VAQUycxAG4Wpd9",
  "key5": "4uobo3DjVrmJDp6ENc2Dp2bALsEA7QE31S3xRDma32jNteQqFEJNJCxBjxzvC4mrSRebZHJBL9QoLwaPWDXSzsX8",
  "key6": "5nyUjX5uCv5P1PQG5N81jJEsQa5kE7mzvt4dT1Winv16AzPZgeXPHRWMmrZ5x8HdrBNi9FvhPB7V4uP2EGsPRVdC",
  "key7": "3wuzMw4x87AhSk3PmRfbnkn88SW3eKKymW3s4RTct2nBazejA1NXiFoQPZnf4J5Tg2tnwYTbPsVdtFNpRhCqPaG5",
  "key8": "44egZeAbLGbAgeQqn4wZUGTEKBfp4qggaQzDqHSDwo8WKGLQ2kXuWT4NmrbMJb4bEEsw9Gvz3g6bRAZXBQsPTYEs",
  "key9": "5ZZa9b2HjGrFrFnXcPXcBiEjiWt9vcNoXSmpzLfAgzwzNz4JgpiE5x3MSWoqkEzJ5rF4ZqBVTTsUHvb4Jk6B3mZB",
  "key10": "4vvEd5oh7hAP8vbwaKpoQU2GHQczgBAojU2B29rrHHJy21FsDYnQiAUjEwayuBKsJyFG8tA3R2EknK58Rh9SQoXD",
  "key11": "5Ta4m6YdSpHMXf5tcX85cKFbeBJbPAnxp3MmpmJR5Rcf5bYZ1oA94kXGh1uBqFNCcJVgkZC2qjMeLfDJr74XHvaB",
  "key12": "23ybAyHHPs9eQue29jFdcf6LNKAEK35FFBUkH8iTg7BF3U9se4T1NJXXPPX5gdTNpkDUWU2QXSjUk7gxswVUfrNN",
  "key13": "2t6TVEmMWTq3RKthPQik3n9i3NuxPCeqeDFnYri2jUDJTZzFPFgR3uCBfQNd9bPRYfa15p35jkuTGyFsJdDZhLKx",
  "key14": "5UJMy9zRqr5U2nD9g7hwuWmtrgxMuFfse2iXccYUWkare7nuX6bHGezAuSq44NpTwzfXWv8YWf31Cxgj2iTAekZ3",
  "key15": "2sfH7KvytrCkFd1de5QtJMXzzqF1i73ET34G2g9JJxJXHKcwLaevX1MzzxWBgkFYwHi71EGqVDFfTFjLbuugjjeW",
  "key16": "42DXVXvEjug5R3emCtRaVMGj9XQPHa9K1b4qBfjDZVTgNTWwMcAho6uHoKR3a9dbiJcNJUbojHDy4AJVfFyV8nx4",
  "key17": "4HnDM65Lgo6i2HTrWQYbBL1R1G8uEhXeDVCnjuEPsPk7QH1oqNeRA5stSTNmcmXd5na6WGk8JLHz8227hU6chQuy",
  "key18": "4JCbEiT5CzCjXin9jVgt1fJczCVJhQPZ4Jksi4eT1CsetLUw94yZHPxnNpD3twsGsf95RoH6D4WVNQ1iF4d3fes3",
  "key19": "sWSgmKQG7kyLTS7maJanHMPK6ZV6PyyTPKBqh42TptuyLUkN6gTCzcw6xoR718Grze1cMxB4rwWw2M4nL7L7jLp",
  "key20": "3EMpHp3y9GfTjk1EPcmhR2HsZmo6ycPa1WddwBKz2snrNB3ram7SULqUhYEerx111hnd2er1A5ReXEwNQWwzHkB7",
  "key21": "5XSL8xP28ZYz5SgFjCDwXhWeCFFxFxG4xi6EcDdHfAU6DzSCA4V4JDp1Mo33K8u4s5W5XhBcF4YYgUAqHbqhnZPK",
  "key22": "3uhXWvqqLGNcK5os53bR8ENFGVKKWM3kqw3RbwSSdUPFkHqYrhChRPnnEdKk16Qtp2nXiSYnoKPRHFvhGSb8BdC",
  "key23": "2YTZsZK1zZ8e46aBrcGp5ZVhyive2dbKqVNpYcJVt8E2zbAephiUgnoQKMBeBdrHbgD93PHRtdgyda6bgWD5Erxx",
  "key24": "5Eg7LvM9y7JLkN1SdL7bi48rCEQYxhh2JaemwxTS5x8T9dzjH3zuuzhNFXXq3SQnBENCeiYcsAcE8okTRBQoV2Ye",
  "key25": "vNpUB84pvy5xyDEc7e8KDmEfu7QWvJVogVm94BUwUTbr4toMLVsAtkksAmMft1QGQLnJjpYCssbQTQivPWKaMik",
  "key26": "2EibN8kRC1hgfZSsHa7bZrxt3Du81HMzJyNu8AbMUSTwKKoapVkbjD7cdkEG6qYux3SyYqHyCFFrWv73SsriBX7j",
  "key27": "wQ1dhs7iPd7UufJCc5H3eXPEDFaA95nXYUodCuzhc6cjQaaGArMvQ4diBhSTAuaVKNrG9kNHWAUS4kvrtcicgBG",
  "key28": "22w7S2gKhr22SYJfJ1ijqCVh6N5HyWzBDpzvZ11XQedTdn5Gzi4UFpYMg7yhC73XZx3XpCsxAU9VqbtGsUuNzS5d"
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
