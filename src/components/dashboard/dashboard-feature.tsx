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
    "5GsK9wRbUH65CvABkX1Y69YbN89UvjPNzgCKRoRyF6WH95VLzMFYTtX3u83NAEytFb3bHjacbBpwBXo65VGs46yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NDMn8nT7z7qmcTN63tJzabHRxs4rHXN1vFuvFjAyMcKMLLUDNrijieMqMCWDbY2i4sCSaB7SF7o3mzGTZr8fkJx",
  "key1": "5W7Y2wyDbJUEPitDkDo8CwBjdYsT7m4PDAKs5ZtPn65VykecUFfQRzCjit6Av7wF3e1fEB6jxdVrnMRG547qrKVK",
  "key2": "3YV98vr5YcZqUVN3RQ5SmaxsyN5HgCxQLiRiYh4AwsF2LPAcRdKoKLsbgg4FjW2BGjG5Kmx5xroUWt6HkgzSb2jD",
  "key3": "54RmAmnFy8RXZaK8ZFU4meUPgq7gwXb8wF3omTUpBs38W7BmAXPyKLkiUTLhbHYY39t9JKeZzFn8cejXUEX1zqWo",
  "key4": "2JLKVrZcXR1u4TzcVxSTZfvieSf7VqWX2vGzpcZKLVwnCyJ74AK65SUfNsAhGQPPj9ht1JToiaZW564SC7bBL6cu",
  "key5": "61tY4dws66oD3U9EevnRhjqfQCHeR13PtLQc2Qu2HFfG57s1GhBo5ngNJnjFHgoZPuEoWKBa7TDCyRAUbxk1BqRE",
  "key6": "4KR8GByDoo2PHUFPUfs2aqemiL2PdpjGixa4C3NNq7cKRf3hjqxCYSJ25ovwTsumeF751Qdq6WDvvK7ZEZ2ruujy",
  "key7": "P2beozKJeYWDGDVH8a7JbuRiuxMR9emaxh8AFCv2wVVYWfNSZLxT9yD2DLyaHFbzKVv8tcPpQPS81z9LZU16nBZ",
  "key8": "wuEGsT59Daq2X96LC9JMdNpx8zi3tzqRKt5B3jZa1bmXfumwVQL6pzsC1CzoePUTdRXPG1Vph8ZCCYo8LbVVUFB",
  "key9": "9y6qEvXZFRXTSbv2JQ43xAiyu3eUvpwa5uJXhhZC5MSgmh6q6qHfjXqFGZFdwN33RhZfiko1ZbUewbEkihevcvn",
  "key10": "4AAy5J7h77XeGskCargn5FxS6cGDkjuvbYj5kW5jKw4C1VgSUkjYjAYAusvu2Xw3c1trgMXF4swcswH331M93VNh",
  "key11": "4iBqzREJeK1Jce34AYuJzwdrjagVgCwzLVZ2zsEmhsSpsudgZMAchAZD1mPC7f7Zdm24Z4kc4mnepgnuryDjmNvn",
  "key12": "2cJ297FKpLLjH9DJskHkt8cNLxfMbZptfjqijvajXMCirHdzHM5RJ4FKKnd88QLNibbsV2Y1bKxwpeRjvBUz1GGS",
  "key13": "5XqNxBeFdHMLhgdp3AemwaZucfGXnukQP8BVgMLTmG4enTKqXFxT7sJ4xLEaJf3GdvcRbbKEGH1863iGTRzu2xNw",
  "key14": "4sUjVXedPEdYHpt1WimjoD3YPic9rkGQnAbqouB8FNLUL1Lddrpaj8Ak2XMr93JfuVean51SHSuzPAYPiTg52TZV",
  "key15": "3tLZKx8iTVmQgveAC43m9h6vdfcmcBxdjvWgGVZeggNhfeD11spv6Yfo3SLQeA8m9Pmp4Ab24JnS5GmotLLAVRdu",
  "key16": "3mw6DMcHTTHrjqEQgK4t6N3Ti8aNdFGr3ZA6Rte9VaPHzoShwk1pfHDWE8VHdfCzofsFzJYThvY6i1gNZm82EFXM",
  "key17": "3viUGWchStvhfjJ75VTaQM7YtvmqAXFMdkKTFJbLoxqy6345WnYRmudz3btzgfMcudMixAd8bC4dR3AtSx5r54zs",
  "key18": "yWXxvLJMJxNvznnqrZmTsuFFnNcb35sSw7Q1cimRb4PTJPYxiDP293a6wdWxMWpW3iKpAknrVbLtGhkZVDByp8e",
  "key19": "3ZrwHZ21CiBGpJuDn25KopC6QKnnsyVnpxcif7kJtQAfrD3oF2yDVwoYj66NR1PG4j9pnyuoJkup5HCabDq6GJDS",
  "key20": "3pNoazk2bzjvq6DhTisWevzFiLnanTt7nxRfkN3Wc7CvUHCsBWZup8xHA8LR8XgPtntM2y1DV1qWeb67pTjWQmKA",
  "key21": "4w3zhFTwXZNLPtRznknMd9FT1H2pKUpBLvxNfQCvs9DwbJtccmHNeqbnUA7JUVDN1kJkfaj8dEQFMTJEpSYAiWVj",
  "key22": "2Rn76wJLdKkQogFJ84DeaWK17p8xBMH4yBrdn4BpzJKEHXFb5uX1ZkRpMyEVVQNkMygj7pbPsmpKxgcDFzk69WS3",
  "key23": "4uDLGij2wUZXxBAunPoeyHJwPEeSSmGF2w1NYTz7krJaKWMtoAGfABCgRWuxVzCKdUBtZ7d3G16sVRRYFMUbQjS5",
  "key24": "22j1dNvnZb4AwLQHPj8A6eKVLEx7Skvi3bdvMVD8J2aGXuDEohGi9VEZRJdtdVY82Kmt3mdcmNSd4GCgvPrwd9np",
  "key25": "3HA9pYCfcTTAEwecygWJuP19A7m5p4AUjM8PKYKutwWwYcKq4TjMmCwttnsWUvUhP7RcHFwqNxKdcaZsYEsGpEYS",
  "key26": "2TYcwshCjDEc6951XJaArQLHLHT6fMp4KiuN7mSAWT31WbP5UtTdUwgYgqgDWzpHDgAePjt8hK7rjatqASWDPD26",
  "key27": "2JegdKf8SFKWpMF8NPysnZJWttLozjCgC7oGp3Q3HxoHfojrVXoPb9SAHFgnPeyT1Z8PTg9k2PuzdW2xZ7RK3BgW",
  "key28": "3MzqdR23f1ZW5GLHNFLPoJiS9SvjwgKiBg26T7bcpf3gdsuQZpxo944SoNkGCG4tKZRKZMDYGuXnjRqsCn244ecV",
  "key29": "5F3xXeHuV6jVUmHkkEMpKRHqKirnJKTZS314db4BCZBwtvsY4ZefxhkpA3t3tsPL9wbuyQ3ffAKfLZcMPDtzMu56",
  "key30": "3MmjNxzBEDeKQXeaimyWtzVTzv3g3qc3Vqh5bP2mvnwjsfb89QrzYxbyrdbVH6WzDSMitbC9U2YbVgaPcTKPuecj",
  "key31": "29g5PadrvnSvNy3UbYp6XLgktCT43ZkkQbEHiyZX9tuKjwMvpUqg2sacZ1ppj7EvtFbDHbtQFoGgoRQg6ZT2MyXp",
  "key32": "4a5Jeu7mYKyNRtFT7RKBeTA9aXEtheESW4nU3sGtwTV3AHiCGRjxJw1mzsN3bNVsf3arqiK8ijySwt8t64ZgB1Ba",
  "key33": "effZGVDYMF1KvEvAzRBLSdfGirbP57zqaNpD9CssAYzytXerHsaf3Kb4SVh25akR8NM4Q1JjYaEtjdsdRZ4Fydw",
  "key34": "4zAjpkzPzVSEgidGYiw8mCddjfiLVnxPuMrmKkPSKjc9y2uS1GGAe1XUA9E4jz41QXMjnXbkRnSfjcWBxcHPuyoF",
  "key35": "39K45EozQMNWsDwi6x6K9zBm5AfsMGumJXH7QuANzCYrgRveLJtVesfYxv4su6LYQWeuqndH9cBzC8FtLbnAbLS3",
  "key36": "61TBrupjDR62JAbcHAV5EaQ3ewMzSUhNPc1j4PGYUdxXkRSBuhAR4jwqCagHLGb13J19PDkUSRB2XY9aMPY3LxQe",
  "key37": "32J9gk9qfjkNEDeTHJXaY7ajPCuxf6zTYHNNyFqAZrVfxrxz7CAVMT4bzXxDmGMTzEhpXCsHU9Ufss9e3KQqccs",
  "key38": "5SHvtnnGvBnacDsTohGm1TFKtRrDNMD5H3jKdhJ4wWCPZtc7NTgjLkV3UouMdJuuZn8KpDa31XVazZj9mKnENY7d",
  "key39": "33pkvMhrDVVw1GuhH8Vf4bRHtnsQcBnpXxu1B8dRAxNDJ3u6pYNkuv5Aqn7T2UdEuCmePoqqZfej343hqJtgc5xR",
  "key40": "5D73pJ73Uajh2GwJGUgmeSG3tzKwD2kT34Es6JHrkZcmDWJCHsptMr1rzJzrsekbdCK8Rpo7grE7qxmcysxobV3S"
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
