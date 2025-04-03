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
    "PrhGHjNhXfkq8XiLeeky2c5GBMxp69itMF1KePywrq8uL7afpZmzoGV7U6gpG7YDmURobgWRrAD9c5me87xKM9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7e8avdbZ4u9T1u1vhS9dHdg3X6f1uLD3zaQJkT85T6zGAzqDHfJbq6aB3G8zZDuwW7m1S3b2hpHXdjWLhnkwHi",
  "key1": "2HukdjdNWs7PBj53e9j4Ri33PYQtt6qVjiknQmXuQaQxTUV9mW7CqXKGs48VpFfA74TdSYhPfFtZ4VPYNzNT7WVw",
  "key2": "2oD5QjNG3XKcwsuG5tx8RXpLcEpSp1d2hLKYhdTkbr4Qn6bNGWcEMGCisfaTBaxywpy9jJtbyeTurdmWsuZ63hWp",
  "key3": "52vuzQRTd8CYUPaYEVTLTNvBEdnY41fCeEDzCxmYJnfXBotoaEcbDi2XudTS9QSDn2TPWXw5ZXBvrB4yo2GfeyQZ",
  "key4": "3hyqXbKMLYcALBeCjoKuX1tFq8beLDtNKBSZu5zbFYU8uALrXfggCpHnZ8FWqE2awYN2tbBhuagWVGQ4t2bG3TyZ",
  "key5": "2biwVCZXAFJJv6XtjGEAQEgbaBQ5vkHLLMq8n5FgmH6Z3Mz2U8f5vbaEDL4pERp8mJY2Ztnsg5H7TK4vLkLUBWnp",
  "key6": "28TRKHNem71Dbp8VQjVBTA8p7jdNjJACB8mDYiKLYJQibvy7V4y6JZvWtrFv2zcccosig27VUQGNBpik83LjA5qq",
  "key7": "3buEP1wConNpSQVRChGdwVB68Z7mBjbS2apLR3m5fjUctnGyZWkBbKgnq2tFP6tDUjNyTYKZCw3M535qY1LWsR1B",
  "key8": "4aaiEBcPsJ4rs8jWHbyiAfnuwomS4uMWHRxpD99dzkb1MCQwFzZqjKFsnY2s3GSeja6kHtsvosbLxKLgarGay4Zm",
  "key9": "2z41VsumWvQcCDdCsAY1DpwBmoxzgFPBpuF7Vnh1LNHA3ZmZbGpvMZA1nph31kBn3EsmjbXZR3JSFBhVjxD1QPF9",
  "key10": "34eaqTqE733AswvPm2egX6ktKy6n5SKfbZTK9tYedhyWfijbmzmpetDwHafL9QMYxcHvULassz3YAbisqmwXSEpu",
  "key11": "3fSSm4haaEKB7y5CnLx2g4VK8ULXPcmgcMY8Dp9rVmxK2WnAfbcbikp16k1cG1vz8KorqfQ1be7eBw5N3eTdh7RM",
  "key12": "4yTz6De4j8192aUhQhDKjWW5KABefTFELpF8ChM1AqSqorQ4R88JSzShsr2ucrWt2XzDuAebeWpSRGjKGzLemN2y",
  "key13": "TWS7afPDU7V7bBBUNdxi23bX3ZvbJU7T9qScQzCE31G4ch6GrH6MUZGvpFHsH1x2w44CGKQWsc6oeYaNNgdCvqD",
  "key14": "Z6sKfXn98jQg7xNJW9ENyKs78SNqZRRd5K7uorVQ1jvz3Jry7LRqyrPfh7NSP6wCbW81wBPhgaudD71F3xxY1aP",
  "key15": "5U8uUTiDfH5vnxWoACSdEQfjdh91Bj76zL8tobQaxGeUaY7aZAUg1513ohV3CBgoQrrxfcK4HR3YoP1N6sz97unC",
  "key16": "3aNuy2q1iFkn9Lrs2j9U3Ram7xP7QD4r1pj9uDpbVn8RPyaaZivpbzPAs124UdtoPR4ei6b7cD5ma9Eskiw46crN",
  "key17": "2c9uDgMT8SfGT4Whjts3DSGry1JJiQzFPLB5YECSdiRVCxmdivMbGAKLkLEBnHAgSHvyLRPR84vCKwkPMuguHtCL",
  "key18": "HFcrAtC47B3K9UPnZrkjowbxpcvpZPgQW2P8EWAyjW4BokKYoK2eAFEaTpjzWNQGxm15NsW1fD83ics5uh41p5w",
  "key19": "4JficvwrKiJoEg6GfkgeG5CAxynZaZ5JeB4DnkMwcY1cHC6fsVoG48WMz6YMAwDApr549M1Kix416doZm82rns43",
  "key20": "uNTm65qKqPr8tQqTmrW6bw4f2itpL6PMP2UsNanuA9DQsAF6cwGNrctaDH27VcXi4D43HKhKC4C9cKEWJRKDqqB",
  "key21": "48zqY9nMSvszrkgAuufaNurh4XDf2haNMk2WmBK76dmf3hsYcDebrEJ4Cf93hFcpKs9j6KQVps8QRNHCRND2kJyp",
  "key22": "zNprSPTdhBSktMscv24WTxVEn3D18aokpn8C4kP6TtR88h3BsMNMDBkYteDfnYqvxWmPshxZLHQkDG61TnEhmcR",
  "key23": "27UWdisUayMXuN5EJLi5ktrqjALbE5VVgHAN2xUzjzhYJfUauCPADfmm6xa7QKAmb8WRy2xBwr9Xb45DXqssdfrY",
  "key24": "5jJHdjzPft9jdgmEZ5UP9qWvSbq7AspKq7wA5YmnZUH1uLDu9ubKv6aoZ1PCw114eXr6ffsFREismRNXu6V5xVrn",
  "key25": "5hyPVwQco9HHDA5YUj4DQBarjwgirTCvCR32soscopJgLpw9sY89dwba24QbmcLXB3KSPVewxPHFR3sviuMiUgMi",
  "key26": "41z2rYzde2kmpM5pG5e6kptZpfvUGvajA2qRkdk6VXnfF22dUi8x63AjcmE1bhxcdp7dM19TAu9apxtbVh9JpTBb",
  "key27": "52JCM4qe48ZLbDViowD5zqRe4jneTpwf86g9Sn94i8VtdJ9pDhsZ9jeq4sER6nJ57iF8vSbyVTAVHUSqjFZkFN2c",
  "key28": "2EzCxyNH9zGFWuVwT8fgsXjRVwB9YkqHgmjTMpxp2CUiXbSXDVZfcf19J5soFBNTVrwNzJ73CN7BLrW5K71xbQyo"
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
