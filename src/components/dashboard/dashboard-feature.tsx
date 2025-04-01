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
    "wmN5mqXAWpvpafsaYL9CVjD4fLM45MALvEBuL1YThKtg9jUsNpSwZ4YihgqL8uCoi2mUANUg3DCCP7Ue9xWPttx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TSCQFzbzE6WDZEhyrV1Qxu1xH7mmNYWFgirGXY5i5pscLgSRcgX7Ea5Dj9aVJAQXWqomm2z5wVPQbwUGTApK1j3",
  "key1": "3BtRCgNf9fMn63qk9E5ggwAogyhXCsvitqFsKKtZedLJyqKje4zUqBtAaYqot421Wh2PLKNtuheuqzicZM1MiKG1",
  "key2": "37a6WREPbL3MpXhwJMGPL7jPCfBYkaJggdAHtKr29RaywaTDXZgRR7RTJfFMUP21vbAhUovB7svsAorpjWvwNnPX",
  "key3": "5whvwiccirCDGsh6N2GtDDAexAigTabtTvDKGtv4rasxhk6J78ixvdtXR68ek27fM7cVzfTZeqWaUmCKCPQptFEV",
  "key4": "4ij7YXMZXdMbMYZCDM7RrxTM4xTAewW8aXBvT4YpMP6Y4hDLFVxXF2RdozuHc9eZvdHRnbHpikKZkb5WQC1CNzN6",
  "key5": "spj4wb8fCaRmDYpxJawo765Y7uEkfYYNLQ2cQcbK1xvjm1dVs928hePiLmHHVQ1fyjNo5YY1qHDnCgBf7w4KY5m",
  "key6": "24o3rwc1uM9KXJxtm9ygQAmMzNuFckQtfiRofRhiEDyAAw5rTHs6eCxvN4JgBDNmmUXZ52774Saq6iDmnkFUPJt4",
  "key7": "4a4K8WUTVTnDqofDtSNjrzD4NobPudNVBZnUCi1RBn2V4raR1vDwkKRdk7PFTt2MdVPsdDKoCKWvzyYxG4x2soCb",
  "key8": "tZsCYWkfFDGcE3HU9ETFzPkdNyr66N1HoMMd2X5jvnPreUjFpxuYo4gqTYBubBtt2AdzPTS6yLkbLBKLF3UEm9B",
  "key9": "4XwdHGPLdZzqr8t1MjnxWGYHrwz5UTyajzo4tAiEtRhoZfsxt5K1TH29xXA5uFhVE98CNsNbiChwrNcCPr93QEoh",
  "key10": "3uxorsk1ggZn7t5j5yJ2L632SBRxFihwh2NAfpakwHnjmhBFm8uAYp6PwoqTBnHTVF4cF8UdNH2PxBT5NNEzHzow",
  "key11": "5yaBbrYDXVXBdadvTByivyqmT5ceyaRJC8kXyLeho3Rj7uFXfg6Eb8FK8fHb2Ni1KcefjfLcBzVWBHf5pfNYEXy1",
  "key12": "4wjnJwNMxD8aH6pD2nLTtniQjH387AKzsdWWaJxMQzf3THHYsLRA5AVH8W8wJyhbLjC3zB5rBPMS6Gh2rpA5MHTi",
  "key13": "31dXXnXdjnRx5kkJd7Fb4CrEjg2npQ1kDp4jFTXkJZxNJtKqhwWwbCii8MMwZMtn8H6aR6ToN33LEtQYegvKa7d6",
  "key14": "5s9umgrQMXHVcTiGMWiYLTdzShVrSuWFqmhwtixw79auGmkt7GJ8E9zgXHDV8t6vMw3MaNF9CQjV68zp4uzGMgxR",
  "key15": "2dxDEGDeUEu6XEuaGQ9UPyoDDVQ8cQ9vfBjypouJf7yTyLV1iznQFXAap4MEvS183DnNTtUihaTsNU62P3HcKCh6",
  "key16": "wfoq2X4AGeYBVvfhiYGHrGtjfBBvaUVFFXPxuXgw2Gx9yTouopeaWvoCvvGyBH5inpVM4Hfx9Q2irDqqKkp1Kj3",
  "key17": "2zmqh9FwiAsSziShxmZsYRuTKQSKQ5ev1ktmHECHzzpuCzES5aEf8CC2Bxs19rskVfn7vYTMVdVcbY614Yf95ddG",
  "key18": "PSgvjwqNtG97PUMogypZWUtLjFDNydu3sMAYut3SXYFPXJ4cHmhDXTvzMR1WUnjW2v1DsV6DjhVe9C1qMf7FWYY",
  "key19": "4C6iNg96U6UhtYZonwqVYXR8uufRCLfABcs7Tdi3ZozuMu9HVb1oru1vHNgUvgGReSLFAfNenoVNmJnSHDXQ8jga",
  "key20": "2ZAKyY84dp7ceizAuso6p8mY1d6Jic6AuB132bC7zQTGA9bv76WLsV3w64g64ifZkoAwK5myDFQP7NxPpfsNsWkz",
  "key21": "5i2KQqShXUGGGYasprVTkZTeYXx4HTnRifpRFC8dakneCDCdU9nBh1LVMY6imZ2eSuALKNDmhVhGuRka6SER5g2P",
  "key22": "4QFPVxN6uw4YMPoci1bb5BjyibwkV8GGX2CzbkrctsoAmfmStbMHixCsrgF91tBmHJgnPJEd6W2x8QpFkDn9xZo5",
  "key23": "4yr4NYQjkbfmK9BGuvaCTp1sH6UGZPqwwCMH4qzX5Fc2QWgysCS2CMeuZsfGnHRu72dX49A46AAe2Bh1RChdBqt3",
  "key24": "4uJjattT8jbbgzUa9Yv7Cub3VMV7WwXzCLGDpVnCN47TE5pBssLE4jHWt5yhSs3KSkAVAfaqaFMiJjYZtgjThFuj",
  "key25": "3onRSpxkPJjWKDwPbYnbDPxPudQN87wWpMqt9HsUjWALKHi9vPJi9j8NPzawdLEq22JiUreFHDm2x6FNB3rJmdkt",
  "key26": "5zTa87xqZto5SSkPzNnsTafS4GnowEWpHxpjW2nwrdbURbGCQg1cmjBdV6BCNPQ8Hk1UmEWsa5sEsoC4rQph8HdS",
  "key27": "2ha9HBP3uURTWbwPHPtYAAVpLysYEupBrNVsr3Dh6gLVrigNZAsesowARph7BxtBScodvEKDCAbBwiSKpvhU2KJo",
  "key28": "UHLm5LByjAoxa2iWCzVW2CDT98Lz2rKX39A4DVDocAtUbjKcALktn7GcsRdUHPZF8erbshEsNuPc87KaRRUwNDu",
  "key29": "3Stqd4rhVDoRUxzxAxvefgBdVWbqkgSVq4bes8isMRXLAkz6mLhuZZdyndZ4zRaiGG42ToXD2wQHA5uyvKuQfhVC",
  "key30": "2W7QkuLPAWLJDvzdDrKSymgiFMke9eHVEdzS3H7bkVtYxebXDAaHeiCDWxZhtx7cpn2xgEXqiQrNToqTa7u9DjJq",
  "key31": "36dkJxXHSux6rhaFj433LHfiBVEa4obZKn5GueGo5acfH2L5FJGsYp6VNRfp83mR5C3nM2ZoDAsDtYCXwTGcnysr",
  "key32": "6141uYskKBjquNRgwMxykDyiTe8AUezHEoSsJpEH2u6udyRuw4hw1vDYFG4MuW3NRzFfBVdu4MKyVCdkwKvrjBb4",
  "key33": "jDG942R1VQYroFzgs1ULTXycJjidRiGv46bLT7uwB5tVbQRnnyeZnVg29s8qeR5W5Y9rNJV43xcuQ3gKWMTXK15",
  "key34": "1VQ4d25zTBixhvVEG6vqRxM14NijNK5bsj5g7A8ttZmEQ8DYNfX2w456tNLG95V4jcMAE1EigzckYNnddDoQEAW",
  "key35": "z5kZ9eNsdD79y8sporGFrrk17Uwsb1AQqWg1DAAnE4u1pRjxwyRZeuXK2xb7jVn6Pc945oM7RRXZtWigRU3pEQc",
  "key36": "3hJc7wgHSHnPYF14pDCqQVbNg4Njpn2mBeGkqBcsBKEXzkvazGLEPLFkDk477HPibPXUzfiCz5th3uyzrixzrV3d",
  "key37": "HjVQsCSGgvFRVsGiNV9EfXKEoUA2Xfz45YhoXVuEWvMH9H1uQPZGMrurWmLt9tKAKN4Lkb1FRYRsjZ8635BFhn2",
  "key38": "EdgkuctTJJjke2ei34eNTcjykaBxYA7CrGRhHGcmfaBHc2wBtqbGLUf9E1HbmAiCyCoB7bSppeUoxyoZxvmc6Fm",
  "key39": "5fF1frQVLSkDWtX7Co8ZQpa3gfzjgGvXdqUa6mqctVgvUZDGpVikaCByGUKNj6CcoeTEKkvRkyEwn5UgDEnoYJEa",
  "key40": "4VU5f7a5nutzqNtNoBfa2QFNptYrb6Tz4i4Jw9AZmfmQjemiGBuaajFP98euAYWzYbABgLPDBiCBH3CMos4d3C4e",
  "key41": "5gb13GpRpyE6ircJC7XSWHn17LxicFs3FrPDrQNc8FpZ1X5GVRDRJ1EWaj36f86bNxivPv7mjmqiD3KNXsKRByyP",
  "key42": "5B8uv5EiyzHzZjJ56UK3kgRkPgvWaYGTMmYnarADFFb3fJ6w6hGeLJJ76w6s4MQwnCVaaagVN7yhS2uXsj55vta",
  "key43": "qKnqAiZCvqPrHbgHbwitLiDZse5VVygN1vSEvjxfLXpvHzn85dNgCr1Mfqf3NfpBCB8YmKLb82koGQuHuMhMQFf",
  "key44": "5J9p2Nfxm1ui9pq5zPvjQVCbSokCrqWobrUdait51Hc6dGHi71xujswtRL4kabYPuwesff7M7sfFnYXUBpaT1jxj"
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
