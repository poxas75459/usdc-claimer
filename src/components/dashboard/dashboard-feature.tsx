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
    "31kY4bwfr6PZWszsQJK6zwJR5MBUh34LmR2ha2M3RRM8HPJesG316nXPM3CGqQJxN3qWJWSCAAEeXdZZJuy7E5yg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G11mUShHCwDKEZ2NhxcDmhW7tLeyq3CgxjCKZgqWwN4iqyueWiPQomiPmDu1hoYaJX1N64ehdYSY2ZnerM598he",
  "key1": "49cbnFLVZj8vTJEfB496Du4YsXMtC3gDuKDRx7AQ69rXDiGkk3MCq37MX7mmtXugFLPzDnXUcfyK1zmTE7sjDeDM",
  "key2": "psSropKBs4MpYKiCo4UyAVRoS6hhX9LZ4uLZPskYNHAVepzVqLq5C2dgxeB4WuXwbaAifDtSvag2x8Hi8pzf6U4",
  "key3": "3td7wsEsA3df5kqYujq4mx4Dc55m89QRuALQAKXv6nkVL2EgKeJ4yDmFaXDw1H9FQeCfQtFtcg3bcVmkEkvyA6fw",
  "key4": "4xmxUYJ9KSaq8cHVbmPnqp62iWKXQvZ2nYEc2SPyFi74Y2hAqPoF53CrFzacy8Pj9Xo56cC5XqGPqjrop8UTTJ4J",
  "key5": "2xSJ9NPQKvnDaZydTNEQiPu2JimSFiCRx24bm71r1SoWi6E77GQCyYP6k48NYejNzCzwtzo5oUhC7LPVWJhVBP6v",
  "key6": "5osZWCYr86S3S14XGdkBpjfYiL5EHQxf992WT8vuXKkhfmWmLvUi7bTnRfUDstMGHnqThwpdHTk7AAyiCqXyMBhL",
  "key7": "2xcsVyEFdH3eh8Cf8Dm1aXho2WDNqm9YHEWCY1zCw5QWKfRbMbuXx2x1bmyKnDhGR3HvuMAiVrQzyv62x4BrVLvh",
  "key8": "AziVMpw2gNmv9D1KvkHctVvfZVMTs1gasX7CEEyt8Jruobf17z1ypwqdevU1pbiF78YzpCBdgSMiUW3tQtMKkGK",
  "key9": "5vA24XUzkjyxAkmScJqtXsHvqeCUqWhVfDgnktevvCB5m6c5GBkQcfayNExX9ihuuVDEa5fbeF4qZbD9sFHPWzyg",
  "key10": "5wErLkjqCJ9NxZ4NjSdW2ViyE9FLDeek3NKGiZmGAn8CLmEMeZ5rfHscrBiTa3xhngbtkim7StnCz2AxpwjU1ceC",
  "key11": "4vyx7nhmdeXLbLLmBL4nMAoG8AKJHYxZ9zgyn7jCwztoNtdhtD3KuUGCEvJSCwCTvnM5emLvP6EeugqcVLJLayyY",
  "key12": "5diVpXKS8BqzxkQ5Pq7Bz6hFXuFrdsWfVXvZyhgHjYhPpGfBsQARuhk5rFVNa1E8J1spEsaqdLCMwLCjhvg3rYqg",
  "key13": "5wkQZ6j8oKyVY6T3JfdoPnQidwVC8cA3nLhYZQ5fFB5iN5bNWWsGZeXnsGVgFxpu489WWG6qbLN5g3wBQuRw4bfC",
  "key14": "3b7uBm2F8iWi31ZN1EQFV5Nf1Zis1EEbKU8Hsrqm1p6d8njS138jABbaoLad4sbC7tRuy6bWsRVLP5VSHvb9BW9y",
  "key15": "3QvB9EMcv8RC2WiqAMPxRv4LxdNeVxhZ4hYJPRf7TtogZmmoA43ux1zVBqbebt6YxwAjp3JGC65KyyY74AHpG4zV",
  "key16": "4ciqPHk5UCR5nfCwGw24ArKMo2T8PPh29DhFUoTstr59Z9f7rogHyz62YWDVUFQYNBKj42kHxs11XcHequHts81Z",
  "key17": "jnkBXNucuso4J2UKhA3xfwRZsxrk45wQJpR9L6svtcEvmjHUATcvJZdcVKZGWm6tmX6MmF2bd7QqLrtB9Sntqi1",
  "key18": "54vAeMwA9AMZh7VhtAfATZEcFyiQRtP87JTepEuCJZD46aDybZTQhTc5PXChn9TJaRMdFrenmN5Y9SyVpZbUVowG",
  "key19": "4ahMYpwGJjyVERbJ41EAvhdryNgNm5aH7dtG8JumdYE33uFhVUiWjE72gXAK6uv1UxBkj94SJfYGDw2soHNJP421",
  "key20": "5z5DvFSoHMuKya75w51tpesVwBFZsRkxY8B32uwtYjAoRqUvFp9TtwH1uPXFZ5kwzDamXWM942RNnoQrd941MAV2",
  "key21": "n7PSb7uVjSPHftvB4DDeUG3CCTgeyALWrWWEzDQD9GfY4exJcNhNoKdRnAEyajhrgngYaLHD87wLWE3RStcDm4L",
  "key22": "2YXog5kDDp62fSMFC6D1zgWP8osdf3t22tjfNsdAJVt6reszpxD352kcMecyMB7A3idfEGSWeoYroegQkMz7vjNq",
  "key23": "45XmCq1v6TVbGj76HE2H77LnDMJx8Dad9U3urdnCWmtHT11owZ7B2b7bEnktPYksiBdwHVAN8ZS63CMj5TNFW9Hj",
  "key24": "2YfaRCSdr7m6k5ZDY7ACDRBvK83KoKfmsuTL8oWkWWhLME5jfuFiwAS2RFa849eUwzq1npoLfirhwVufKTzCMfR5",
  "key25": "373aTzbocMuBUUpRMEm1PJTe2LyonpHSFbfxHmA5HZKQ4557S4H15TMQjawdWk7HipupndhLUj7AfCxDPgsuBtuA",
  "key26": "5HdPAz8zzrmcZ2V5c1uecx7V7DL3HA6tggMGCdQJvs5vLt1hNu1KieKZjaz5a3eqVBiJ41BmpaufQiaLyxLng7yY",
  "key27": "38ZWH8VMjp5RVnwQhH5je3VfKrgeusnLkahwjv2tchYjnye4XLU76ToDC776Cqg8UBZqC6zTNVzRCk957GrLJbkr",
  "key28": "5fncbVb1Nk3dZDVYUzqxik2xrrPbrWxUPQoUn5WwVt5eC1sQruV4LEze61rgRukaVE1t7RSBEa1QCpDVZX37FwCD",
  "key29": "z6dNyACtK6P49rwBAZvRrRVwcJ5C8oKPafuuris7hpdeHBXw9XpDVH5YFLbwTBDN1Qj2K1Y4fDgyxqPoPDH2ry6",
  "key30": "544xtA4AcQNadLcS9fBDS4CGuoqFE76Kgtd6ubUWk5VMUfxo5U4fBxD4J4SxXbGGcDXXDKXY6Wo5LKJwNd5QbiDQ",
  "key31": "5uZjKDcgRiib2JzdCuVHexHtZufoZDt77rsSro45M9nJ2KochttY7X24uhu88NTHXsdp4XBEdkeK6YCzzNwB2Xvu",
  "key32": "fM1ttNTwDQZWnSnAQDSBHRiqNi5kCqESJvBfonykfXqVnWHKpkZazkXzFnEkyCFq7TD4uUX82g625HiWWT1n7oP",
  "key33": "YV7PXvANEqXay3T2zXRsCzV7QQzTFSkzFT5ERUNvGb28hefE53nydj3gme58CCbob62Lt5sqZCW7CU2uMz9bmSb",
  "key34": "4zb4JpujZPt2VTHBMLtUFy1tosCLLbcTMEtzNqV1yM7saV2t3KmSWYv8AaHw5mMWpQYUN6fWaSSq7WubD2aPmnit"
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
