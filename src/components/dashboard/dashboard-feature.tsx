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
    "5qnhUrgbBzSqTJzfzgFMVeBtMzBJgfc4grgoN5SrEtfuuPrLjXa9iPnZG4bjMVb4uuigM8Tb5EQDP3QLL1ZdFmJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ojbdKaRMJgcCWuEkMyVrT38t2HwEiFDtFGo6TshPBEdEvmX96gd1NXzKceWrm2WCKULAReFQmcUu1dzVvQXsYWR",
  "key1": "5AXf2WZuDSweryHpnpkZAypVnsgzwKBCxTQ1x82oTfjVqjgw45nD5HLgCLXcToTD1xfapDnaN3ZbR93ECeqMcBmo",
  "key2": "D2PLUmvYkaeTFiEShgj3tyrqLU1pfjVs6QpNYokvvCihDcTCdeSgysbmujNGVDttD5csnMxttUwhF2NrLCDqu9x",
  "key3": "5wjBpftQ6GufzcneoFeJd2JrVsya4wh1frAp5KozavxFs3LbKusTuUrvUBVEA8ADe1N4v3ZwKnFTPaacmZGG7Mbf",
  "key4": "32MEbjik5DP3m5FXUCszXAtGkL7F3CyLXTexYSfmY7u86Vaq1pZayfjv2iW4PtogWEG97MFymSmJktaBxLVwvgNc",
  "key5": "3AuLmFw3RzxHXA2uggpADWJGfmpdqGLBnJSNyxugNjgnFtZvRVWRLZN93MTHgd6UAMXRWeedthTNAxoWXtaJQRnu",
  "key6": "3KkJTPJLJy7M1iUtdKMHXCRSUYa5sNuqDQPBcLhGAEVYKkT4dCjpWpQTaeDFpixPaDBY8VGRxNRb1eCucn7gW6zK",
  "key7": "2PtkzZV8xE2igNsBASezKd7jKBWcqDYWF3GQMkvYPCaoNMNeURNB1P9hVN5eaJwkoFtZ4hu1h7vNEzhv8oX4i2xh",
  "key8": "4X5XagGcfWERDuLyEfSnDtfada2GhGgnefUR8h7PVPnWyW4T6NCwCMciv6HMckFHY3Lsp6CSse8P6MUm281wtc57",
  "key9": "3xtHXMzpNVQ213VWLEo3jXcaoUVvJgpwyqVnBy83To3RTwrkshqXyCBRfWCvDYEaMXdtSGYseWM77tTYwL6iLhKi",
  "key10": "4mp4KirxTpaLTYCSe44XUKEQGPUdSoF2HL29SpotydTKVU85WfFD8doiHwWbAyZ4tAdsViQKbYPqQHj5LgBh1cLV",
  "key11": "63v3Yz6JFPmLhcVXJruEByEM4bbq4WNgBYuYgjMoi4YJ5PgxG9SYXQv6aYwxUr5aSWvmUcirdNeFBXbvsk1kWX6n",
  "key12": "u2CGLjEz19xyRXdyKsKM1Mtw8oJ9q9Ra6GNk4XzxuXJDoQkDHtbYAvdizNFcGrDsRe8CD3955wBrnihxqFWeJc8",
  "key13": "2g61bksiJsBtmJAXSxB4jTt4M5doPRrTUfFohoK8BMrAvyzN2QZXMUMBt7FJK7xjXKqfdwDeXcpDNgZRazo9F9Ec",
  "key14": "3A2jwpwZMzTFfmponVYCXPHsq3qmA8q5CnULM87ibHsNmKfMvKvr5BVXZddFuQDDBfY1GCWUJ8EwShhvzpRQp76N",
  "key15": "2sjpimuqWpsdNgqnmdNN5FNdpAcwPEVXHYnMBJvntgqQX2p1kMMK8xJbgQwMz4JCef66tXDJT2DApMF7JVeUWEu4",
  "key16": "5aF7ivqr5vyKUFGDfZx5ggNJyctm5BiKGA4GN9eEn4vvnndtNC4atvn4nd3SAa4Dx9z49CXNTCMmttedk8tnLHid",
  "key17": "3xWYumfuEKkKfd2zyeP1qsm4ziGHYKmA8ATJeBiQQLG2jzYXMJnp8zorD6GR91N8jicnXYz1QqyS9rqNSwS7CMaU",
  "key18": "4nLiaNuSo4GGQK816EUxTSWuWoNNvBFCuZdyiF1UBhfACPWjhu4i3ctzpY5XY37kd9eYU4ax1YeXLummVu2Pu4Yy",
  "key19": "M3sLC9qdvGhziVRxL9kFrvJH7X8R1XyxtyEqHJe9uxMBebMpwYAMNrwzHNyVLuE6U6iBiiW3kX17ertK8Lv88bk",
  "key20": "4DMLksCYuctjFrZ6jirLrze1PKJEomhDLtJzgGEgBLJJJHzQvxKdWm2XxVsv2k8hBVNJPqV2RpaHe4XXCyCKN59i",
  "key21": "4TrmfbQTWvhPq76nGF5yQVXvcgPD6UBz2NexjuzVxreCvMVPqkaJ1LapEXNLNxYhNrdBUwx9VFGGE6EMN136h957",
  "key22": "4L4G8zx66xLkciwqm9kdt7UcsCWgWqaTKUELAKEVgYX85zASTBCrGoCC2WcsgrNJRyga51QN6MMs4AyYyiPxW8B9",
  "key23": "2vZBcPMWMZnrbtrfk3ccobG25wofxDRndNp954tp6BhD461jAGMMrMFr8Bj2QdFLcHNaZ5HULvz59cNbUghX2Ak5",
  "key24": "3xzfRSZZjAWNRGfhhsRcDwPBcehTBZPb9cEhPnu6UffpNupqWuak4BUt4Jfb4XUAXFRawnf22gzrRzcsXbbbwR3y",
  "key25": "BYsjN9GeiVVzm1GGEp7QjNaLUkmm1ndi9YuqLXkH4Xe3W4YEw5vqGCYCYxeCdSi6SesRPwh5sD7pNreiDrUgqZj",
  "key26": "64XTBiAXtPmVJbsZHG6RV8145jWrWvkp3wbWgLo9LzXz23SXeA6aBwtoPqcsNu29iTSiVcp4ajCYx2p85yXKy6m4",
  "key27": "3R2BxrXrB8AbA9fsjtNBy51nDwM28MEdQKbrUG4kKVdMYo4zkfXzngf87hZnZVhNorg37dLpAb1bB1tVWUDye7U8",
  "key28": "5t1qpMSDsS87pMq52aSZv3eUjHm7PwciPBmef3CB8CH1N9Km93pjaULzX5T5Fpoz6vQ9Q4H81xxopoANYKPhc6bu",
  "key29": "q5MoRBcSE6yU9EmtQJSrbnqocWro8xiwBpXLUC55AnsqvHFhMPsMa15GN1F3iZxD7XU8XPRVdqNXtpzjy8ARgXF"
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
