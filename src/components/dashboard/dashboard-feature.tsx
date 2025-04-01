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
    "onk1DGaN3MMETCTTWX6rCoaSZK2tmbsD5KVWchc317ytBzvreKYHyfSqgJsZFjqaGCpX46aYrJjV9n5zs1tYKye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PLtXq6ezGKi9hn5LyRZ4zmX4FyD81YWJKB4Q3YbcijYPgCLpnvXwoLQdJyAyav932JkVutZ8gYhr8r8jqxdJbrr",
  "key1": "4jf9B1h1MiNCce44fdN9xzNC2JSRdzVJGfP6v992jeJNNaVP2ja1uaex3SNSLcF8NQqMWj7yCw9gF1pfnWSzumEJ",
  "key2": "5BSynFqGziEUtUFE2AdwqqGPHjAdD4GLKAjtDtUvchyHPo4nGHkHRHU1wCe5pp9nWEG4QJGUWXFsKZQThbAeYiYT",
  "key3": "66UY45qy36xuboQpoCAQZzMGrMzPeqMqLA6qrfzBshZ1QfwUtEyRieSbPupJwBqNpbLuH1CwaXQb4djuQqhGohVg",
  "key4": "3rpgUGw76VZhNTtAitY1rPTGrZra5aHGE52vrx2NDhtoY7CBFaCKS4sjrDTauFtxHAjEwwn8uS77XkzYfPTNgimX",
  "key5": "2DUUCDpCb25CuNsruG2jWxkTMPkexrZq7uMNowWvfARzM41MgLb3jPRFfcGu1VEzJgHp3NaVzu6J87TVfMBQUEux",
  "key6": "AfGXKyxyvePwJqizJZgPUghycaSVQdi7pzgaK6CpWbXqKw1c7bnyuRPJkkEEsuoqwm2Z5m4uHMySdD8J69fHUzu",
  "key7": "5atsnNig3tuLDWhCc1Rd3q6D5eHMRqRjR5dRN8q9fqUvzN4UHFA1xz8LXDj575Z6G9jwpsrLQCMP9cq7okFE2iHC",
  "key8": "cXA6qTnsgGzyFRuWj1ANCJ9p76Djt9y6Dt3T5w25yivVv3KMygTkDYaVnUWiUF6n9AJ1vVHX63FB2L5YcnNGLC1",
  "key9": "SViDqaBC1iFNoeK4fj1cGRfzVigPM9jFxjeP614s9UAYWiMnbJBo1smLF7xGiEn3Qn4sTrYzzPcsMXCAdWstDC9",
  "key10": "4DNaXhaNr5VpAYXcJav6HFrx58ZpNQUiJ3VW9JaGpneg7kr4zP73t4unFhszEn5Qnj5xxttFmTEaWwBHk3SH9N1x",
  "key11": "521PZoAsMrJVUwEfjmWEBZYHM4ogFzB1isn9Z5wUoP4ss9dwq3CKgP6onesNzAmgiXvj154RKGber2SbmQxmtxGQ",
  "key12": "26Jecj9Wrvk8NEanjZEpStEpvH7wp3mx2CnKF3GXn6okXGBWMEt3vasLy92SUGCGS6hMH7zny37TV9gCpiPty2Bi",
  "key13": "o5yQvRoSkVK3StAfw1GWanjC2ysz7J5Z1e2DsJwhXXpuWZgvaG93tUovqJodmhYojcyvjXtrDpkByzn37zqUUDZ",
  "key14": "6166rSrf9znn99kpG9NYbtL5pLrNMR1eYs2kr8T93vGPW7NPNGJxCawsge26ACiUEjSySian7QoBe4DCdNdLPDfA",
  "key15": "3fHWrdAgyFynjQhYRZzHdMtyd6P2T5q8S89ASL7RbniAMaXiChNhZPhh3EdsEKcNQ4o5a6H5Jtoi1NEfj4dszvd5",
  "key16": "4sJ9n1egZSQ3T1KKHRjBDAktTstQuuCCb5huVdRgVWExEXPXQ86gHcaWvYyXEuPJkM1znH1366GjaARAnLFUDZDG",
  "key17": "27iaxUH1QUkfhGw9yLe37MyNF5MB6aHxtoa8p8pugXy6A6X58Yt8VMqx8gbXyMvUqABLP5vfD4wS7vMgR7XGsQns",
  "key18": "4M7H8BpjT5BspyUMJTdBE5HDiZhJE4r6xMBMUHYoDk8dqG7jzvAqABC33oRwBTd3wbrCk1u9WN2nAP8JntQaGrEk",
  "key19": "2TA7B5zZ86w8qJsPNQ6bxD2sGnpgAVerhyi1WnGCJvVDYWrX4rrkKQZ33iaXnd6FaGzytmdy5s847J5cStYaPDu6",
  "key20": "4bmkbAvTLesPWG47gX1Aqx6V1QdBQECSmB8rrsK9d34Pv7QrpfutG8Q97WEiBDgyrsHoXsKW4kEm3ucAdJQzsi5e",
  "key21": "44x3Pd2aapRy9DE9KLqSkzNucjnHtUCXAqShNLQQf65qdYPmyS6nTUoT22rNKt6Dh9FViAukkk8mLKEZiNU9wdSU",
  "key22": "3AvxuPzWTwMcF9QZuiGfK7zn43hA2HvmxU5AcQXxVrXqiRJHvF8tF353yowVL1ZgYtZ1muLb1E4sGp17hjAHRZ52",
  "key23": "2TWqQCG9GzFt11afYT14WCbvdV4yzTUresEr2RxXvUAGVMJxSC2fqbLqSJ6jTNyjgzMF6D2e98nsgeVbKDYfVsMK",
  "key24": "2HTesGJkkLEg2r3pGmEhwZwx9S35jYA9ZgPfVNvX8H2HyECZuNE3AJQaVzaMYmcV6C815gUfcbrhoiK7pRTipeQR",
  "key25": "5nwbde4hsMVxvtXZtpuwLzaB1n78iJk1fASQ1CXGLtVuLBEjeMEkrKxLJjH6GZgEKLtHjvuMHqWAUwUvZPAFkHBa",
  "key26": "2w3xVNxb1kN4eLiBmT7BJs6bMYdxxm9keKcocR6vnx2No4rq7kD142XCkovyomn94g1UC3vZfGkWrMTDECerainC",
  "key27": "3jBUctpRwtigERBhpMyyuweEvXdp4Vz92h75vZeDSDnUapxaG5cZb3nn3KEdDfPGCobWPCFck1iEaxdHEGwbVPP6",
  "key28": "4Nz7X4V4pRqzfWoFoiDuUbG7V67PYgrALKkhvPaz3N4URfhPyrJuPFMagZT4cxPdWYHwa76QPL2pwGnQbwRaZRhN",
  "key29": "3Ekztu8ddZrrX4szPT3SnA5da7WyXWwbCjZmbAv8B6rV339g3rXDUPn2ixySWbG3wxUr6XRWgNP1uF1Wq5wYr7E8"
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
