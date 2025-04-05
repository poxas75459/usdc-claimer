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
    "XVoPUxL2S1M7sSQkoBLAZF5og8pRzKWQUPmrmPhhaAqUXS4pBakF2K7cKzVptTzSixBEBLqELQThNoAtY6rXxEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lbnj2pZDFp4GnP15PgMBRTMx4g9v21yqiv4y13562Kxtz3UnTujA64LWv7JiW65LPaNVu8L2khxCmTYjBCWfCA9",
  "key1": "4cwengtzYNNfCjc4gk2Bxg8ECP172xNTp3trJqnuam3ZEbdvMuhLyMZm293AEGVpeTFUZJLzxM4zHY5yWZX5Rt2V",
  "key2": "2W8qRMStX2QAUWQ4eBBSqxVNubHrKcARxy4ko3ScgqJmh6BGZrfsEnFSu6CoBYkQajipvRZjEJXxaUrGfvarKjQJ",
  "key3": "4y6wgu7tkhZ6bBVVFqEGeBVyaJHmKU5BggnxNg5QfNqjJujFXiSNAPEBGSZqnTanzGYzvNQM7LBwvjn9Uen3JhpM",
  "key4": "2JSAjaFkbR9nrcuAYXAK88zwvHLfAH44AM1neiBUw9ssdPQ3WzWavWWf1KKTTiX28x62Qk1EK1btEUYE7QVyd1u5",
  "key5": "Vh4vMd6X4QcSQN335yC2XGwHa3n2qTsrN1b4QwnA2joVzwUKT22piQS21uNDr7LnCXa8kNZJAGf6kAbQ48hSYCT",
  "key6": "3Hyr3mE5q5qNxq8RWVDhkuDY8iyzMazfBi3sjyZSvu3BFbAhKqopnz8jT9XfkryoViKmVzf8Zn8cjW4XY6xTm2RY",
  "key7": "4trG12UJx4BEypCorWCb92YVLCy8LhfJFP7DgtvZKoG4CSymdoPFgciwfGhiuTLj6z88JxjaSTtxbG2ZeXjjd4D5",
  "key8": "AfNGZmzGSSp91BQUhHA4n6R2qhcXrAPfzQ5zkjdhrauHpcTDsfQ5fNdAxS57GdYVzqePKXmAAjf7kc2ZACgCKXZ",
  "key9": "5eX7N5J121fg3MriiMmAuWRvQv2sTuPVBYUq8ieSG166nf1uNQktLM1svj6BapZ3QD1K3jb9otAbZCCbRqaoAR62",
  "key10": "4ksyzyXuaTLVK3TR5zqHW6eYx1rqRo9PSz1Q4virr4RLVkaiLWuo8oSBCUz537CiuAYqAgKBpkX8WumuR8qyMprE",
  "key11": "2KTK3xXjjteBf9hPTbxgEwM4B73zRD5F3VRRpgiyTm5CCDcePBWCXEA8FCfoECrA346YQ6kRwrym7w3gkapbKXYS",
  "key12": "3qKPvHr8VDXDTVLEWhmBwAT8NAnT6EtpSsM78H4BME16ugYaQ6YMi9z5m8vZwSXFxgwmpF4oLMzz1YSwc7urJ1KS",
  "key13": "4iHTTuzBqmdUEK4Ns1duR9FvGrjNhVZLM4zAJwWWK7C7EFukipMZZMmE1CCh36MW9mBeocUHFrVxiGjPomkUnpGz",
  "key14": "4yyVNapciJcunEkSE8vSCpsQZ5cdMr5EzPrM3RbGWKubzsYU5f1YsfYMUQTSfbxhugkZ7JjzaqT5MYQjLP2zzcw4",
  "key15": "63QTzJDSdHHfsa2pPxn3p6sabp7LkH29fPDcN9STyw8JQvyFofdvbEZhvmXkNVCzeTXGnYg5CCxfCUiw5rUHNpW1",
  "key16": "5HQRzHbVQ5pVwicLKfW1By5vEfTiYy2ouZ7pbpMiGxYQwt5d4VGebiwWHkroQ1sxwMaHReezoZutU1VdN6pvcQnA",
  "key17": "174vuJj7H4NayFNgkaQ3U2RLRb3ac4HYfoALJyrFB2M5thi74ZzcTH4J7DP3rs3R3RvuXuPMTzQi9rVLXhgyHz1",
  "key18": "4q6FpnuogpyBUXqwKwHYvPX8LNXMUhbs4t22rEDGtCWzqQUhGi4i2vxs6SUc8aofQYSpWDdqQhHFfg8ACcUAyUdg",
  "key19": "3jTc4P2wnjSYP1J7n2FgNy1pQURXodqh9dZZFiBQtdm3DLSSbnxcCF3LStn9CSKFWmbJ1cpW884wWg22sp4pEJNs",
  "key20": "5xM5yC9DxgTj2wwqSwbY1YVc6dLi5cPUSb83zQ2nfKiRzPy1bAYbmNy6TVipGh8RqusAvJ4gbm2Ew9rs38Yrt81h",
  "key21": "2wLXAD1RTNUgJw6APDNKAL2iXvdeUYof8ufb6jGrdWKhYVF1MxRSGbrr2ZktAg6yiSmKjqyZjQhxg2BUEX5d5EfX",
  "key22": "5NKRVKWc7DiK3d5KtGdL2ZzXiLZhrrsmhgQErwB8W16sqFzq976JLHLwd7sLw4Ng5fDfy6kJhqd4usffbJXkMvHW",
  "key23": "125FT9tCUTZGfZJFHNrzXhSnmMd9WQXbfS3dDaJXWAMWzbzphqQVQNQdyFbYak5iXSaPWP6qN8LRpr4VL7vh8rxw",
  "key24": "5cnWQz77dLcJXP1bukqtMCMUGQhVscvXf8U5nzWmhRJDNEJLS4DCUG8iS9LmAR4vPQ8D5EoWvJX9GAzRGcuk5BKZ",
  "key25": "zr2GN9aUUHWWL7X8m6LP59qZYr3E851JNu1jCbooH2daHF4M1ZMXRGcDX3zeiqNy2QEiyP7gTUFjheFRxApb7vt",
  "key26": "ANewjynaM9VuuGaJd4XG4fvfhNiFbaHGsP47rgPYF8XQwt2sZULBNS6jN76hJNkXw8mSL191GD5HjfUQYTXpurX",
  "key27": "WesTUUzfzbkRWfJB68yWVuhNEDnTPmtu4r81STuPnarSSBHmxNXEtaFeNvDua8UvppQPmWdysUsYwRPRo8nMYeG",
  "key28": "3NnxLUzGPZ8iT17JXBsGkcn9aZhbgzkxsNKMzkdpctmQcumV5g74QAFviPZPe2AF27YmMuauJBTMtk8LHqY4mexE",
  "key29": "41PMFjKCBAhyrfEMcLRHWvXwvaHTBfcrvXMZCx4h8YLz4WWwVxQfqFNECnB6KfrpMtCR8JmfC3Eomq94TzzY6GWB",
  "key30": "4qA1xJrvGge8th3mgrPn9dYspBbm7ybL3hZPR7oX6ZBHkTcbEM8yuqf4gu1bosFAhhFahgixdhf3jDHYLm3ZKB7R",
  "key31": "2A4J5F6acuF2DMjcCUnKzfVJDGvxCxd8iLYTLf4KggPzob6pdsBTitJmiE6kLNosayZm56qiYiCJd9sd52Ww515L",
  "key32": "4ShVq7kL1js4RdPYqHsAsi9DFKDsnDrG9A2qjmWDDXPVpGsDSY6uBAnkmEskfECMQu6us8nhDVN1J3eeEJhWMmSn",
  "key33": "3GVB1ZaWZbJ4wvbiT4BfKmuHYhhL7duM5cjumAzHfMQG99KoARqsNUF6PjEC6G66HWpykuyTNuNhHrf1YoX7spMD",
  "key34": "43x1GXTztF3hyYtmEPZ29Hry62oufi6g8iGDU2uxZPJneeZLQE4WvATFpyMiF2ANnxnyUaiFoCExbbTJwa4xYT9y",
  "key35": "3fQYayWFqVeGVMBsVpkPzmYgoTHjCFbkTFP539h2y772RBMtSjAL1y7fdFfLBEJBVhmT2WQFYpS26Ai2d4NgJwGg",
  "key36": "2Eo7d9QApA2Z1XJbHrh8pnV89BDFWgdhLT6iPQBikXGZzpHDpKKnheWbkEvxnMcKXPC6fKNCsiB9QUPmxAWqenVA",
  "key37": "2yn58d3zFr11EKSbGB2uLojaJxg3nsoBLbeT8r7an6vTwwFCVcJjva7YDuN5dbvMxNAMsVmDvsLYvb6CZBhHaThs",
  "key38": "4bnz596uKbb2Dbo36n5htnyHRJAhFtz7wodbwMVcpff7C8sxdrKH5H1FWUHnbBqzmAhaxmcv27Cjq7pTEeBkKP62",
  "key39": "2AZ8LtakiCbMPyy343V4NEmgpxRHM1J5r5t8tJ3mGpMVtuyBXZFcJsmdvUKCswg9n3ZGyeFngzCAcQcas9KhAjRe",
  "key40": "5d9qt7mmPKfW5Mx13H8hvdX78eBp8XeyaFQfepsbcWrdujtKmYXDNS8ia78LoLkQGs22tYytzqD4uCad8Nbae9Ar",
  "key41": "5fKMNTZvbFZsUSkuhs5PFY3h1VA3AVubNkTMCiPFaZXuuVXAzgXPPsrVP5EfQomVsEPse2yeKQPk5wbZxoa4dkrZ",
  "key42": "JAKSaEW8vfiKQaZ99p8zv6LyKBGLtS6GwsPppZr1atkeJCGUaWXxirJQ8er61J6X9cJpK6bNeUJhnrCcrPCfRuz",
  "key43": "3QrXxw1on4MGvoewvxUmPCqF7urz88bgMqnRiaPaFFgcTxv2m18jZtW8wgSt7LxxBtwyvPmVhML6veDTcsiSGZYz",
  "key44": "32924SLYWiyioETdNP3pT5tZ1Rp6pc3n1dpNhyMsLfMkyY3EQu6exR1NRT4uhFVtqYX2yxNYWq3r1msGCzApdpAu",
  "key45": "5rYVHPwEPCGsUL3yfLH9hgxtH8EpJeRAWMPDAkPFUVEEhzMyhKWzSrSGE2x9jNhZVP2GGYHqYCZK1D8cQoDLCseg"
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
