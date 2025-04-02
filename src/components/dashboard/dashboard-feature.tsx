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
    "4mg16GEshpsJUMegE1FtmpE6rvNeNdSiPsymc77UFYK6GKxbArDdp9GwzG1wbU2iJCVjPTozScV18Jp3nD3ZVJv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WoaNZoygTkGPaWHTjZCp3SndWpkxu1JCCnPXyhfJKib1mp5ARy93SChbpAvnfbn5SJ55EcizbeQkXFpU17VhiQ",
  "key1": "5QjKiVrHwgxhSgcTDbxpciwrCY1DbWn3xjTKnB6Kd7yHcCsnP4wcarySapsW4GiKPxAMyJ8cZFfeMmUoaDi61Eir",
  "key2": "2cJXdLZ2uaQ5VbpboomRkQeGk3s1DETDHsk9V1JAJrTGL8zewhDb2mcSNwyTQNdKh7FHzsnQmwyahTcSLUHmW75S",
  "key3": "2uirLFpn2Wxsw2uTznLHhQi665NQw32Xhjq7R5vcffcyTkZhtLuDoJXC8PGtBSEzYbY9dxkas4jdT9RHSHmcoDFw",
  "key4": "52aWNszhAowZDXTashUHNGQkLEiGvmPmkK4kzhxY552jLf3nRMRzEcgTigAu6h4PKLF6WW34mPbdnjvaXU5f8dvx",
  "key5": "5XQN2C8c62D3ZHh98iXxegrbHAzo82Aojg6ivd4BDfMhFJToaHC7tA2r5Wbbfrh8rYpn1zXPi9JiaCAHAzH4f28V",
  "key6": "peRri32H5fnLqYiw3Nqr7cW2GRcS966LWtUJj3REreVCXURcQAgmBbUQbtNY2fy7syB6g8HkEvXyu3SCpbq9iRT",
  "key7": "1chMaTcwN5DSNGVCgfgc5uQ2sMtVZxBNoSoKEq4JY1tuE3dsjVjyQsLTjZcTVGun1GGXuyi9kFeYyCZ1wkHFBZQ",
  "key8": "4Cb86GH5Y6TktJXc4TYpmZUzHp8CBPDe4iCdgMkQM6mCfWAueHDP4UXjB8MArRsUmG6jYhHWJiMtCmkH8gCKKeDq",
  "key9": "9CRRnoySygSHae353tb8av9B14R2axRmSc4YfxG3X5sxcAdoZuhi3jJ35HtRSNbCeXLfq5y5t5hX9jyMXNWpHk2",
  "key10": "MQ9graABB73WUkEcgroMyFbCUsF8WyjJPeBQ2UcPFbyAgNnXZ1mUfCRoCLojsTvdSm4djuMFGJbGFTEnqCBT33i",
  "key11": "2BUaXS5kUAF5anPWX7a4jBEgviSz3RTRdsbJC3YiUCWzu3ppfyA3RwGRkfYbzvTNnqtoUANLSNwhuohttm1PH6q5",
  "key12": "V85gEre7XkZegGTDukq7iuifZKZTM2Y4vYARDD28DmQJQpcgtbBAfwscdoJg7TLHMbXfQ9uEsXTA2sue26ND6Eo",
  "key13": "4xUbSFJSMUrqX8LqyYidrtata6RRx9tK16tX8QGjNbNdWPk68PazUrjio2y2WFBx2FHbFdZA6UdSTjqBkqpMJJJZ",
  "key14": "av5n8dPeHMP1hSiHJ6Kt9WZDCpE9eDMU84h4JmiWGM9Cakq7VQKs98K38QE5pExKJG1LsabXVwoCB416orBYwn3",
  "key15": "QJXYsT72axNKJtUpcz1Pqd7QKb8KjhFAZRQCUQ2JHtLckhzxFF5KhTywi4bjDLb7PxQpmUbvVzUtQUroWXLeu4K",
  "key16": "2SYz2XskLV7zdYE7WPNrHMEe2sDNYcibaXEvZZUmdidpiMHG3VrtwoBbB8TfCo9YeaXibZdnuvYPawY6ibFgPKQb",
  "key17": "4mQDAVjuWJ99L6SMjYM7VsQnRfZXbAuCbuLfkXCJiSCAfA9mTAQmw6ihBKTgvTeB1E2ZQy8g52ZKEP9MxEWKg4xN",
  "key18": "2fodacgiTy3u6kpSbSGSQdsRGshC2bjhrgmfQ4Mbx8gvpSfYbxYmLK6TfXHdXQ84xiFzcaqT7KDYhp3cRLRhJCP2",
  "key19": "2FMVF4e3PPEArJ2RXgihxRXJVXUVonQUoyMLJzBv37xq5mwc9zKFihyRC54sq8VnqfcV6p6W5NFZYGdQkrnHrnoZ",
  "key20": "2zySJLQRmQd1rEitnxf2QeZ9iRNEDbNungPV78vsAHNrSxnsCHr4TMUts1gp9mo6tig1CrHGWnSpoSqTtQpxjHCw",
  "key21": "fnenpNJGa2AGVpb3neVuUduG1kziYkN6cz7gUgfxb4sERv5uJpZaD7p2a2m51ZUVnaJBNnHnjXsw8pncLa7cqYm",
  "key22": "44Fb3LA9VEXqD93jKybAP8Rzv3MWTuFdJUEjYeaoXxq5kB6JqMnxaGTMVwsWJ4E3tTc3VWrQoVYqs6NjfRSaM9WN",
  "key23": "3BFhsV4Ea5zgqMLnLvFnYX1u9U9HWniH2sKpAdNFreZytMjDXdtDqoYSL1DxxXeDxJzt5BNcC4ZyW25kfmukT1d3",
  "key24": "2TC1Gv4R2Xy5UVsQSce2nCWtnK4UisEsZLAv5RU1a9ED9j6feBk756hafXfWP7isbriZUqewMLNu8jFRqXJAFSho",
  "key25": "3JeHunuikEeGhxd5iJcjLGyCAE4QqxdFT5H1A5k9ctMLhBV4doLC6U9i4P81ExKd9KC2UxfEDvTsTLBg7cZBAZe2",
  "key26": "2wEugnpGK1BeEXvdKirofTf9m77XRanL8LJgfWNEdxr9qimbDxdLK88czHpppooYd4GBrMxrMfsg8SLm6roR6gmk",
  "key27": "4aGGrfN6UyX4kmL6ocBTBQJF8j5ABBi4KcwUiTRFTKnRzmZoR9WwppAsrJMXT2Tc7AY195ToQPFLL5T8QYvMcUnq"
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
