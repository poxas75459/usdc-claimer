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
    "4DEenF5zCCQ5jQMLcjDS7ZhB7CRjwMwVJfqzpJpHXpRa52AEa65fekiMdzmhUDza95KenqkawVUXkF9keVA8B84R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmsK3W5ErPX4abMXYbHWDKsGCpVhBe9TFcm2uiSe5GLkLbPmM6qF9QYqeLMYyWGmkHxjU8BHciSv6M9a5SnM8Kh",
  "key1": "3zUcicEpYdzdBgJgs9b6J4oN6rNFq1k4Mznkz3J1YWgprH7de6iqt6NPjPD8JUfSZYi5KLYg4BfmszK5BrEhCufR",
  "key2": "9c7M22CVTdgjA6a6sKSJbn1x64g2UL92PKUzAjeP8ECtjPfE9HoTNmXAsaZJHMfT9HR8SZcjgr8dDmn36Xnw7XD",
  "key3": "4EUpqZhJbR1NxifJePFkqoUNcomDCjczXiTQaw1qb6B9a4tdXn1KLmZPqXMrG8MHogVBcnRoFP9XLWm4m69gPjNT",
  "key4": "fMvWkPvQ5QJEeso62Euzq6RAjktBe4BRDcGZf2xDKEJkTdLM2hDKpbNA13FitKG2QHm1QEzDjUWpk1QdRGz6jUx",
  "key5": "3agTiRYwBVUJsdLgas1eyi66iqEccFUSBigAksyRDESYgnenXRtvg6u9zS88tipLXpn2c57uS2S94hTXt6CFhXvZ",
  "key6": "5WPD3XVAiCUoXBqJtCJHGgi2BRNspCzPo6sagEDo7Ga7wrCrFo6MpE9pgD6bakc1F9ejzh5zqNowUycDSFAu1pFA",
  "key7": "2rexWmJ3mxNVJcdEHs6iwaduH6T1wLKSF9RAh7ZLmhMnWh97rg1nEd9qfC71TvRToGtwMKZrp2uAik2ZKf4JREoT",
  "key8": "5vvRY5Mmys5BevbyWLFFWvXsh6NVp7kS75YfkWYZ5wJ7Fc8KwJCBg2k5r1BAmLgvVhdHH4rVbiWh8aP7N8DaaMLo",
  "key9": "55is6KmpeD5va1uAYBhBvb2ZeC4iq4rjhJ9BCtuTWHaAnz3o6QuqE3GiUaJTtwTtgoYvw5YbdYgthcEPfLQ4nFS7",
  "key10": "4LMbch2kzkNdyMCRRDmvJtJPtpYhmUV2VduaGaAtv5HShpcd1SD5AdopfgvPdPwhtH8DsYLG25riqh6ixfwsY43w",
  "key11": "28kLA1znCi6bx7LH4gG758jY4tRjGgXntPvswCurku5w1VfVvYbBMDTFryVpCnMBn4vS7YUZ9PdZGevDp9ct8KdU",
  "key12": "agSdnPMi8K4Nnpw4iqGeL1H7NbmtXFybPL5TEwNmaJPBCJMF4Nyuh5fYB73MPkNHZ4kgyH5XP3u4bhmcPPPWyFp",
  "key13": "5VJfSZLMbGpTCwygFYnsp45XCPs2zD8WCsWV2CpEho81yrNWBHiFSxPxajqPvTARv24LEXavhNG1Hn5zkGP52FsW",
  "key14": "Nonof4nDgz2UymyuJnTYUP8to7F5C5XgYe2HyiZBEw89MFhh8Hd4vXp9iaWazwELkXfNQw9tGsLPk8A72HhPVYa",
  "key15": "49a2Jekymqh7QcgMjoSWutXtWTur29eKxzXSVLtKpMtJ9WHoE2nKQ6JCcFDFDBTkMuppBCJd3MMLAeDVu3iQLFFJ",
  "key16": "EYwtgbS3ncBJfcFgz56nDALGgKGGe95Nz7W4qq6tihsny6Ko8hdMKfjKqXXZXNCa7PLzxoFbAJACnjFUQ8r27Dc",
  "key17": "uat5GmB7SmzeYiWie8jfmootZCjwsQgKAsK4ncyfXTVY7MQWJWYzzrgFkStqeYZ3BdLnzsKVSKDUaQXgRJvezb2",
  "key18": "5hFzGE6RWvfd7AjBrqFgEdZcuNdZSNP7HmXGbR7kkujXJdrx8eHP53N3HotBdiQGdnSLxsgifiUg8wp6nDTCTu9S",
  "key19": "9PQtxkccTunqzkmDbzz3RytgfzGg2KS26caGWFY4RjWnNQ7KVs2LQXaUA4fT7jp1oTAhzm167iLWXBoeGLm82Dw",
  "key20": "2479VK6CuyU6eg6ygZNELKrCnG2ubdGuP3yoJPpG2BNTnWriFo3LdFwMmd8WWKJPaPzxWm3UyGDCgeBMkNgn8JFJ",
  "key21": "3QHNyJWZJQ2oij6rGQdnVas7zVxWP2fhNw1uUNCFx6RniZjkmqASn1jL4iXASSNCQNJXojaNDaJhmi8h3Dtw5jKj",
  "key22": "2ZZPcctEfYJzefx2ouXkR8Y5a1C6ud5Bj1q9ePshBgDraKau6GorMaz9EfxvUmDVcBPnDRJHAuYMA7wxJsAst31S",
  "key23": "4K6xbufqCeh2MGmXuBGVq8hgvC4tyznVdgcJiw3duqAqnmmeixvqtG1tP6bRtGUiP6T7QmV86Az3quHhY1b8Fu73",
  "key24": "381eEkupNnyagq7e633gty5iM7LAYyjhNgpg365Aipx9LkVhJ9i1K4JA2dEcyrYzzAT5kdHaWNUV3fqAopcNUjQx",
  "key25": "3RLbc5CPkSATWuS1WkxLDrbV5QQQkJaxaMzFNS71J1bH7u818pMbUBAUkd5voFeqMrntumTWaY8aHiBfPXCoP44U",
  "key26": "64V26DWo3J3WpyzAJ2TrFpVNJcPW7gZaJ4J4qyUSxTZj2MneGbtq2ykhbqubRu3aFcNEzkxa1vDdjpCmoAJHEtkr"
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
