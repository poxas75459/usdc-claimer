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
    "SAAb7foTtZusNtxzdEgmPhqCpGVoW3wgDTuGhm4cUGghuzipVBVqPAC6V4QyPSxMp2bbci1w5165tVrVGC7JQBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pVYgYYqCWf6cn6kLuujdsgNXyYVQZt2vnDB1sLcgeFVydGH7w4DSL9wY62NRJVvvpoHHVVTG669grhVzfms7eiV",
  "key1": "Lmiedd3PrzvuHjqsefYAaz1GzMjzbTpJpM2cdR76n8cwVcQEkPiyuDTfD5h1qudrfsj3Nbti2DvVibMe4ZeJqq3",
  "key2": "4XpKkfwTu5CWQ7Cqxi5UeezWiMQKVYPwX161D8WXomG3Q2in7ZvDVQ3T2Lo1DMTP3pamdQFfdrJCnFW9WpXUzAPZ",
  "key3": "aWUCxkGCwKTvN2EG3uHRDrVgmeRztxkcV6U8j7xyBwi9N965HHYonAWdWesauKFuPrZf5WuLa1VivzZwsYHdzMC",
  "key4": "a3JbUgRzbf1q75vJxowmn4Q2mvoNF6f5ajzi8zxEm9iZFLfTr33vGFkbzrTaNR33WsN6miQH3VbHRVZfXhxU7VF",
  "key5": "3VcQgGTQFCkz45vzYznBaRSBPz8WSJeihxKvRSu9ZSR8G2JLg4ZpQjuvMwApvnpXZCXud8G2C9Bu4Yma5xZfDjDo",
  "key6": "2fceKPEqkT8bzBLCBc4a216Xz14DyCNxsLeU1Lm6y8heAbajSqrndiVamJzGTrb33pD4DkmYZ8B4J2H5Q3gGc7gu",
  "key7": "2Af3kyq7NwzDoxDqXe66ySH8rotas5WgJfEtAYyHAAgx2qEtA3A2C5vcCkNnTHJ7oyfJ5yRrVivFoSYGqKaCVRFy",
  "key8": "3yHqP8FF2qTrkdi6qdZuBx4LXtb5uSQQi8iq6mYqaYwsGh1gcRwzJ3kSZyNgURb7XWLEWbdQdbyqgZU2KtC54yuA",
  "key9": "4AcjSxFTv2228ZTz4MMN7cQK44MHZdfb1JHpLMMhr31FK95bgmZ2P7wX45M66EY6KNmgG14qaBn33dEdg9Ybx3Gx",
  "key10": "4jfrVEjfuXiedCdgzMgw47kNtHBZoEALbLj48GNHKjgXEeZR3TosqfB5khwMm1oN6eQK2BH9geKmo1EwjLyFFdsv",
  "key11": "2wv5ZwcJ4oeKjE1R52wCYoL55xTrHSaxhUgR8R3MLyTU5QPJSVhWKfrdndGRTt1Q3XwJn3e6QmqhEVWQhSQRuq9G",
  "key12": "2vVV5CvjDZdyjTBwZryVHe2Ynigqw7hf6cB372tudkTs5Mg6jMYPjf9dy8bgwXPayVJvj2SrG4wezTJJdruSnkgd",
  "key13": "4VYYgJaNMK6zTkDdRKY3DkMb3bwj3Ke83aXJ7sNjHJ3Ri8ygnUJHe89K6eHAQzFoAn4m4t3nqCgoo8AUgaPsGUg1",
  "key14": "4pKrty9UpxeayodRdzDdiBHeo5Anv9pSFwN42XZR8WWBWaQwJNiB2WKwwsDz7uSeDuQdJmuHxMRu8C2TZRykmFqk",
  "key15": "2fTteKvCecpzMY4Kd4jQ746cnk2GnJPEMmtZ88E9XsdmKozFZexMkaNtk4omTY7PJkQqBLaUpso9FvVKSSoQjdrV",
  "key16": "BpCNmnWfkWzbBRPwzyuQgAbwDWJW3nNyjvxV4FSy41tpu39CbxMXKdctVymuqhCSfKLogXhtEmRyLvDq7mLu4Lx",
  "key17": "un8ys2ubL3aUDdV9Tgxo3XU4xD4h1eN3v8bfC4YaF6phGEHQSk8j6e6cS7G26wkrsyjBjG4Kuuah5KGMeGhD9MC",
  "key18": "PfGrEM4Em32qqqUNEwRUKcxG1Kzxx7YAD9obxMPEuwBQg7ehWaJBQP7fbDL9LMubcs9y7s5dg4q4Q5CfYDA13fT",
  "key19": "3MnhqPgczg7sdbshtShStA42iwww73BNqmipNkgjfcBWpP2ZLgX8HCqtPetwW3pap3Eg6ChR3H76nAxrjUugyRiZ",
  "key20": "49a244b2dNjfsyVYLjQNNB2iRvKmkfMRpWmvjrVkjBHNwyehyGhXnKTjfJxGJjhNmBEPiN9xKyqQSu9gUQ4DNyiG",
  "key21": "3XSozB5jEAtNyLFQN7YrMoavYNvncyCmqcpyFckgYARQHUTBcmR71xr6LhyJxyPjHEQggML2bZTZ5AcTD4kmg6sv",
  "key22": "51zKW2R11jNjrQAPa3M6hbaTTAHVu9rn4kPZHKKCEAwyuTp6fE55vCxS2e9LWJf7JgrQr87U83UYEUf89ob2s5JZ",
  "key23": "TBZjEPjkEibLqWhC1hT4pMWmsP6VM3HdCnvgc9fopFw36PqSJWE5aNgMSaFCrtNsWMEery6MBCkLdDRLaCQ8hkU",
  "key24": "4SnKLdfw3qo2jppV2Xk4fEAodpCDRsCqXzMNkpSz2SbXzWxMryNSPPziJUHKbRNS88TNgV33eqhFFvycJHeyCz55",
  "key25": "3TN7YS32fJ2xgGQteo9iZMkTUDuSsd1d7ZJKXgYbtNfk4Scek3C1BWBgwYdNsVPLE7FsHz7Xpnw8oDNEQ99ZkEm3",
  "key26": "4CDQktkJwcCiuwq3vcXwML9i6441bY9gZZGyvVBKukTArUdD1ueiUT3vUqq3xsbuGgBsuHBG2dTdBL1XAj8CpZH1",
  "key27": "4GaueWhEu1aSHXzbySnwBvBJrtA7ubemGwALUvzwNztYUGaL2TSaXj6U9Pdxr9QSP2VwZcthSyezb2pfo3HUzfcS",
  "key28": "4A1Pw17Co3UVrAyyWy9YpysgnvzZtvTxqLoDJCput2MgYkS1y8W9eZo19xs1qYbcDwNMF1S3PR6zHuJ3LsRHBeV9",
  "key29": "4873Pbna5JRD8PhkePkHWQ7FNCD15DyqgKNhRwS3VCtqRcrqEERUyHcET8uiVgiR7ReSRVDWPYv2nVkrQHoXFaxy",
  "key30": "2ksscJCvGEoEdfLQ5ZHy3JcpKqTKdSAuGpTQYfVRiDk9KNE8WfyqMAZY7ZAAaMQMMAUSCDct7uouyjPkps6nt1St"
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
