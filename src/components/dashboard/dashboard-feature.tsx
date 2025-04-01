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
    "jRyTgEmqMHsc26xtdxVf3RRYFPnnZoHQBC4qT8LVLWj4a2ZCwieTLsZXBfUgu3W29yamSwoSy2BGGSqZYkje5xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3haGTNDAz1vR9EAaNFz3kPtYLSwW4vBnQMqmiZhZDWi83LjJ51EmKmZsPXmubQgMsKjs6eaEDhCdTckTEihnTsMw",
  "key1": "2j285maXWPDSKGoxVrJNjnzM2v9WoAxeDLEzbkB5bkMymGsVwP3JXETYbi7Bnd3g5cm2hriHWY4yGJAkjnTVXrC4",
  "key2": "3xcfs2B9WjM9XfHoPwXgtEumVMhceAekP92YecXdWvN3jXSXf99FK9VLKbJw1SqCxAGvc2ivqNLrdF5dFVZNacy5",
  "key3": "4PNRPnomj3u7L46s5nL9JYv65ingSNJrp9y2H2TNUvsTtwMgE1LYrJoevedcwmQEKwhbLQ8FLiGDJ6zqGA9NfeU3",
  "key4": "4cgDuE8Aq3dC8j8CD8Y3gna8KJkuHAuh7gt3H1CkfjbgPgbD5addoz6cFNSeA3nzexWEG9HBdCi4H22PKmAbUz46",
  "key5": "cW9doqjGm7utjvPih7tcyYhn1UA4jHDmZ3G4DqiZBZCiF8AQDNonmk284bVMqZZFBWgu68e2RwYhHN2HiEmTV3d",
  "key6": "23v5DXQjyng8GP1mHkFfobBTKnhVYhmMZvFenYGUA5yffacRcPZvGP6xCZfM3ZQnAeymP3mpSSmqAkpVvbxWNzzp",
  "key7": "27qdkTBwkTzsvoLsgEeZJiarUU8WKJXmEFwkWkxA1UQaTw8DTVTvWMEmY3Mzq4yHibvFoRAcmjTUihZUZBaQxUzW",
  "key8": "2m7dMzmcRLf56hTYbEQYXE8rvKsVafPeuvEgAZgvgGCjRmfZCBpAP2MQqW3K9SLzXf9hghEXUDforr3iv8gjt7Kx",
  "key9": "4T3kAizEMRCPJeerNmj3r9fWxHrF5EKDFWb3nS7wLWc4QieeyUY1iGXmiBjMYejipuRbxVfjWM4MWMrMADPy9Uq2",
  "key10": "54smdthh8pFwKH6ZsgJiZpK6wRkjwb7TLF7d1eVFcwmf2qJEBFeigUqh8cfMu1LAueiyTk1VNoviUwzTEE3HxCWi",
  "key11": "2t435G55vV7ptqGKWkUT9vBgDFvtZkYisyTkpdLCB4MHPkavWba8MgP7xWw6UiRQRjP1XuVGBej3qQ7sfdPYdjoh",
  "key12": "4ornjYajiMzDE6v7XREJNERXiqRZo6TxnTYeTRMaSQ6T9yQY61CVm4kFXBCWSwJ9m1X6czFELrs7a6VNL8gmMfMi",
  "key13": "56HAfQ4kVrJiz3xMjPGtiqcdp5QoN6VG6xoH3njX2XCU2ddKYyY6LaatwCzCFPWxdDEyw5W3PDzxEDFVXtr4V3Rw",
  "key14": "63netPsNYhrZFd8KPPRjXKQ7EVsTeCsrxhmUTo6Wr6bNgiTFmE74NmKfpDqnEyefoQ7Qh3Vkj3jPH8CCoNugapMg",
  "key15": "5aRn6idoD7kgpVdLSKdwNUuZ2wEY5vTi3zHct5TopoXszG48xH6hGEh2M52QcHcK935B1UKNRsZPyCfDLcXgaBi4",
  "key16": "32U9eFXZFPBumQtqSRDnctC8Ar9MMDyc4bjQDbJJaTdwL1MgtannFCrn3AJC3whsNnAWp2npGg5hqDU3LBQVVFUM",
  "key17": "3BibBi3qQ1h7q5gtcYQhDZFJzpdf6KcU9q8nwLjoipzNaSTGx8oozKbrhPK232QAah2TopJDWoheUSDFxTgirYMJ",
  "key18": "4QpZb9uV2RkP2gnMg4c3WVQZCe9KGimHiFvvK3mTzVnmffa6KsY3d5xme1wiq45C1pvEWygYWZPqmss47EZxUEgs",
  "key19": "4Ps5ex9W2uHdGrPrJBp1opZZLxBbPgXUi2vjy6ikGX53Ap2D5HmYnVqgRc6aqcqhHNvumMP4LKC6vxf7CjR8KsYj",
  "key20": "QpU9Bjgxew9v7NoYJRCJkXwj3Z2z4TSWPnkF5bRhSzEDWXxHaNDwYoNFu445EiUSDnwDCKeN7XkHEuqQr4hyEhi",
  "key21": "2gqSfpB3ev8FWyNhwFgkBJLJw3EUcYaJMMVzisn9A8tzGq4G42PeGZuXM8Dsif13P1BSQ3gQcz4M6KU9qu9zZL9s",
  "key22": "5Xx17q6D7q5LqYJ6urKt6GqKJLnsNfTDcj2mcbhQ6vcu36QLCZ6tt653PxaSFSx8isxFLnfAp1M25uXeDm8K8rkM",
  "key23": "5yxgVQ5SFWKFpLUSiH7xsZGexrjmqyuPsSwAwhgjhd4n9iKeDAZreMoRBQGuZGL5LzJPgw2FgpsBDH8V7V6L3cez",
  "key24": "D5LCu4EtvNhpWKc3G52TbrVABkDyHeYTmnFbHntLxizgmCzSqxUG7JybHex5AXdhraKyrERyi8LHSwKBbSx4Rwc",
  "key25": "55NChRvG1XfZv6cZbZYJyva78Gj1m1WGufBabBCXTk7vbYRJEzEuaqdtJoVff4RQAfuSNA4gEgu6u6Fxh4jmLWNt",
  "key26": "5Z7F7AT4HB3xXKBJzXy7vdH1X8w268HbNUjyfETzqhGnGZq4RBAnPe7VJYHU27Au8oQ5S96UMkLNske5NKftcQwM",
  "key27": "3o1nLHabmQR67U17TDQgpbGU2pynM6PB38aEkU4LRQM6jMezHNUTLKGeccoqWMgQBqjwRrWQZ5LJA7pq3NfBeeiP",
  "key28": "Vy7Z4DZfwsbyYxZqUHTS1ZuiKcHiReRkEam9vdAHZHBbw695k2GfA7F58R2Tb5kMrp8BWuYAd31VpftzYMStJT3",
  "key29": "VA2Twu8z9a38YatQTC4b7jdXjmigKdDsrShnKcmbWXppukDQsVpT8z672PdCG7MobbrNfjQRvhvBJ9xxERtVH4z",
  "key30": "55CM7sWmP4CTE35hHu9LjxW26KHsgqimk4LUkdV5j12bKvq97XVRmdsQDSiQtuMZb9XR435ETwrdJB3eubRBcsCD",
  "key31": "eaWL9dQgiLGyGb3FyaCi8agL89RKp6RiWRXhzqP4Eu6Mr5FRwmBeeGhnheMn14uG56UkANVfhUA2zUSS6hgBdGJ",
  "key32": "DGWDR3MaHkXkH1UdBtGsbixBB3eYUi2zRLroeuKDaoRrzmFB67ZdjaPMMCu26YcMMykCt5dMEHZY4pQyJeociX7",
  "key33": "2j2dubyf71XiwJNEvgpgqowwfuLR3sy4A7Auxe6H24jZJWV23vHg1jLGpV2eoPDij9HivVTCdVKW3ZXXL2erFTkC",
  "key34": "5f9wuwMEDDBT2kxfJxQrujAhGtnP4n7Zm7tEeuhVNHs4ZfkBciRks2W8s64ZjnXmMQeDrRZfB8jX3yq4FqY5qDvD",
  "key35": "23jdALdTQv4n77bvVcG8SxS19U2uwkyeDM8t4uuHbp8kRHbLGHAxjcTJKzeLM4E5yW3X6FpVixFAdZUgh5rvpjwK",
  "key36": "2YiWfGJBVSzTCxkgccS4bvzjMrNeXVVYD8n18qeUF5pej4QJ1HbcbFq3MuD7zyBxWPnG8SxwSYH7XGKjXyCQXSpq",
  "key37": "5mHv3Cffvx6qLxB5Dn3U3uY7EqttnKkjWAFixGLHN9Cio5oFbGfe8JCHNWc9phm5Td9cHaPR8rwVZcNtrRLmSPp3",
  "key38": "3vfmwAycN2gHyhJvRBmk6tZg2PVY1ZGLh9G87ssexQ3xnmpbfXUjtR3RandzDgnM4ax433UTWsW23cVmMS8hXN6m",
  "key39": "56vwHFY62ELH8xwUcAqrsViuNLMTEYj5FefiaETv1yEuzPW6xVQ6TX9fQ9s6X7jQDRLywjfnftS7abH3bYy9Ay8W",
  "key40": "xJDtz1j1GqBmMiaFmVn1nvvjbqNtCEGBQtuhj5jWAPJYzQbrwQVFfrfWi15gSDxNtBTTTxNqBrTDmWY7h1RK9x7",
  "key41": "2w8iC6GqYc8WfM79TMfvLaNJZYD72LWA9C4hoD8F8L1z7913guZJmy72iXiNQvUdy5ty4Zbj7HKwC4shHLsrf5NG",
  "key42": "3vuqJ8ieZn58utiLnSQyTzkDEewTizQnhzXad8yrdc9xQw6Z42ycvddUcWtxnsiW6Jgh535eCigeS1mvQFbh9GDm"
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
