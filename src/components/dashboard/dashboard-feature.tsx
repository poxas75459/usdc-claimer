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
    "4csq1UyQ4yHBK3YmLb3f8FwGLtWq1awfPCVZ826RSqyc2aLXj2APa8ARjtZey4vgdzX5EwtJhuVF8grTxrBqDsDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NVpjxZqU7xQKkcGMpkY93UyjMhjuFcZ1kG5kqGCBQQHRP87NXuc93Rda8QsC9gyisGkQ3wCRxkbbW798TU72Gb4",
  "key1": "DzDunutWCqEY7oEUM4Z3wh6D4wXGTignDDsYZ2tQrBW3bdpU9UwUii4BqUHprmWJWyNb1YdLWVDGTPa9WBKckR6",
  "key2": "5LqJTzvCaj8jAkdG5zFG4vs12z2Amszb47NzqNrYFGLVV7MUWsBLpPtMjSdMQkmyXcqxjNBUcfLuyTAdCccGA74e",
  "key3": "2VnPEw8ye3qpEauQXgmU3EQtP9AuAEcxyAHtMp1Drrm4mte33BaqY4c1wGX1TSdMxHtpbqeV9KitLERVznyKcb3K",
  "key4": "5U5S6G9LY9WenSJmV3X6hdcCTFe4D8SLJVGd6Y2Wed2Wx3xhNQ13NRyMEHW4bM1DdxodqPTzbvjeHp7ZH3SVWAGd",
  "key5": "2TJpzaey5cG3YbvfGk29gRtW7RjHPUCxVhvv8DWCUE9cb6DSqv1pQzF6TaSm51ha16ToBjYBT6VXbXBPPTZ6ELHW",
  "key6": "29wRu7TbEyCevhQ1C6SbeYN1ZD4cGStK4R8bJPJe3imwom9jRb2Rrgk1tWR1YhALGRXo41VqwLQrfpPrbNhii7G2",
  "key7": "54DJs2AUEzwb78exhXbrGpbcmtqzg9Gb28FpQ7CKb6Q6xYDyGdMDQjCV79iUFVbHbmMeWqYHUXH6AJ6MuHio6mkf",
  "key8": "2NAvQCJBP3wqBuqrj4T8Kf6BCSRPjL6Dqeqjjimzr6QUMeLgx5WyUXW4Ynracjb2xFidc6CJWX4qRrPMcEuURqkH",
  "key9": "5PxhfAtfN87XuU9LASPVD6iaye4Bzd2oJRTjdwCzbwu588EbUSZDEmcRRXxh8gKRQVpiT9WPos67i1HmG3KDRrnX",
  "key10": "5apvxYh4w4QW6HDdyMn4yZVNE2teuSWVKJRZi9rwLrpk3c2jpxdqcJzu6tpPSyupEsuneqCEEmKDb9jcYm2imBzH",
  "key11": "25rvvMa5CPiaTkJqjxWDVhhFU64LcxfcDX149ZSYFc9Q8tBp3DSJccfbKzZARCsxPisobMzaywcSedeZcX2ALuek",
  "key12": "4TR7birfagqxoMUgicybQMwx93oesZ1YUe76iQwJDvs3GheZq8zAWBhi4hM9tGDPyWGLt6wP2Qji4t4tD4J8rXVh",
  "key13": "AjgAU3o2jCSD2PHUpf4F5BsAPQLujUT8YAoyxRyLracAuH255fdMDrbDLDh6hPR8Joact2jPQRzFSN2CyYf4sEg",
  "key14": "3vT8JxjScjmjiVfhebJtiL6JpyY56KCXVVkBsVRoRhG1ktrWFPj2f9wBAPKdSRaSA6GMXQfTRzWHzQSuDGTXCEoj",
  "key15": "5RLqNjuvFDRyYgYj42YPnRoCWR63UYaanMaS72ohgLBZEjKMwtNFwpVScXXtBeLxqL1Sq5idtkmYjpZbQ6KhkHUh",
  "key16": "2weqZKK9gkv5sW2BU1m4Z39BRxb41DFGrpGADh6cJX8XasDaMANn1HvxLeLPyTKHCs5eyBYVyykEimuXaKiLnCtk",
  "key17": "4QfRGDVGrhhBCyiiJPLeJDyMZJPreyLRzZD1kMBrvZTaXVZrZ99yxE3wc1qgCoMjmMABZTVrPNELmcfrGWekAS9Q",
  "key18": "28eskKHtPJq8aeH9Y7gZVr99YUodyqQ439PavQuorK9ngnDSxjrgyuTn2Xkas6zDnVS3cbY3ToiY7DQGDsGNy1EJ",
  "key19": "62mYLDtKW8Jq4gg1tZ21yAx5MkHcfhJe2ewR4UkHJWF5Wkj9LHRgxpCWw3cxF8BpCiZBrV3i7Dy7bioY3rZM8J4N",
  "key20": "5bVHUSoCfjDbft6hmG3P6j7ZuyC2YctPwKJCV9PLDMCP2je2WcgyBvKLdf7GvoGKadjXinnRDcnbtx8xE2HpueN8",
  "key21": "2KzFUuGQFjJSNNJiXqpnxdkAqA1r3wB6m1RyKv5kwbyCydxFXrV8ZivL7MfJMFhxcurbPkzWtxGaPHW65dXG1fqR",
  "key22": "5Nb2pn7vRY7GzgT8PDBwnrex9fva44w3S7nG2qywcxBUUxWewdAPqjGKTR4kt5tGF6QF1V2wxA9VL5XMXysh4jeV",
  "key23": "kmi1GUUc3UsyuHpqrp3gGbsMva7nJYQn2QAbxyUgMrJsXhL45LEj5qfmAsDWaWh41nuqb5UhmYNVZqbj89CNX47",
  "key24": "bxNE8wRyVBi9nS4xE8NjJcAUwKz44SP89ZsmSuPKqb4Lov3BUVgc3xZTUt2CzvoZrbuxkJbx8DPKvaNh17BU7rM",
  "key25": "Eti4qedUX32Cj5zQri8ABwGdsdX2Abvbn7jnAvR8usqJyt8dxy9zgkxvQ6YMj2KjuTSzw8WmSSAmTdHyunWLtUN",
  "key26": "4XgLpHziY1sZBq59rwoncaKNvYJ9zNrup93mxjK7QvHaGMWRGhbpkCGYJunWZ6BKcnyAyJ7T63DZDvo8BDr1h4e2",
  "key27": "4MqCHEvkp3w1hTWEFKJqcg5CUHLmzSesrLDrzo9oFMzmd1RmmmaU19kqrERiiW74SJWLR8X3Cd5M7hZXfCxA39MH",
  "key28": "57ucw2E5Su1bRyvPr7fTMLJpcP7pPa61MxgBg7X1XZ7CYHVaejKstryeXfeRoVLBF2T9rUU9Du8dygoZSBgnuwkd",
  "key29": "53YhkPGKoB4dbCChkfncbAJmWc3MjstS8bV5PJy4FkKv9kLcyphPiznSQYMAmgFW7VxjyrCEt4Ba8SKf4dqshuWA",
  "key30": "52mcgricZ3BEBxxeNaURf572jA2bfYp7SRgvHfxn4tdisJ4rsdWzFEGSkr4aQTeVb11EenP7CZtWWBBua26SrMNp",
  "key31": "3nYPfBU9WuJPHv117WxdnmxnxU7pf3js7PPBSHqXkJzRNNvZ4ZxBBXnRCq3t9z14SpwXF5WMYHQjpXe6Anx8fNtc",
  "key32": "ayAJUJoEeZrkG2FgmYcpDsp5abwRsg8u7CA1Kfe7smLeyDd6Wg5cL2CFxZRtq3h4zLPjyCzkkTSgE4vNyHNgUyj"
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
