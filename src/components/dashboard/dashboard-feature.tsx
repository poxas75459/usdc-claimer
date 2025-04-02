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
    "5LfXZyX3zuoZGGw6CChnoH1MePEPUNncyiVgdtXTA8cCUVr3NwbKQURgxtatsAvkY3E5ivN3gFaJyeGFG2V5G1dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEiaqfrztMFqqLopo2q4SLso54CywDNoQSmLUU35ADihsvEVmqn7JMFuvTBuPrc17cvgWxGeRG6cvBbrZYhWwN6",
  "key1": "3zvfKuzTPy7yMNzFtwdJ3o4t7kgwu3Qo57jmSwVRzCU5oyuqPnTxJWkSRAtdtMz6TYmtUAweFNFpddF68JGE8bJq",
  "key2": "3aLUZn5Mq51ePaqrd7YLhVcudAWA9R3pcwXPRZ1RSvtWPMzbuGUZj5Eph2RduhQeaF3EeH7X3S1rgXFHKEDhX9t8",
  "key3": "ggVoU7eudVtskJ4Yn7BvQ8RaRQEESBqRqUcP86TQtFQXtHGbCj65uBuwupXxijjc5Sdf7TK1D87bvPa4iqXiRgj",
  "key4": "5dZMVDXpDjMqyyYS7a2AH9ZT2uhsTvbzzdiWHasjXSaZ7VuaSMRuYDuDk3huEuFdPU9jY3WJGynY5Fcf5JKirtkk",
  "key5": "3DFFGXMfMmh3ReB5fKkENA7pDFr4g4gxzdZfPZ7Fe8KSrNLUnZLXM32vkjt3QSoVE66uxE7JkTWZ8JRbncAGcQFC",
  "key6": "5cxxsDJtxNgWmKoG5FiPxRWAVPWVYgSgZC8WvNSDbhvFkjxDQbrHcVE7Ai4AAK2re5zHs7uwNrKcZQ52s31UVgAX",
  "key7": "2jPYbequSGM3yzeWZYW9fM93vFfAnyeNEAnZ2kPzcEViNVh7rwvkHfrc1nDrJB2vjDSdSNZtV23HrVB9UVZaWaQB",
  "key8": "4ewAc8zrYXXiKC68sPyUmFg5VFsQTY8uXFx2GDTQK2maWTw2ewJoQqdiU9F73Lg6gp6GY5zFX1pbSHsk5KgXiGGq",
  "key9": "2c6JBgouMykwA5oLsMBwn2WQD31JmBgCBUY6xLBqHZErWNqb5UheW1N1ztheTk81pp4yTXaUnvGLJLVLD2NxMYNQ",
  "key10": "22fopNfYZ1UNz73FD3ffAyiR3XuezHGcSTX1BnEpiixzkvuHqZhnTKH6Myk1AfhwYMu23i6DQ8Mu5LfZ8zeAwL1f",
  "key11": "4ADBWSYbsfu7ZH1pLuP5yN13oan7YcH4EbpimzayKYTCFVoYVW8i6adG3fzT9TKu5ZJPVeXNr2g6GxqSk75S7c1Y",
  "key12": "J7PAwZBmkwGUe5DF3BPL3JjhYqSueErYzzFeh1Y3X2rUp7fXSLPGyd1TAQqP79Xn75zCwzaBxqY5S9hkoZyxWVr",
  "key13": "4eXLwQUPeSDAJqAiUapEUHdZEgx1YXH3tTViiVXNfARRHexuoYUToam49UcMdsrzEEa5VS25KiRdTGGWNSk1yE1t",
  "key14": "5jQdJe4WnZmaB5pSpiTkqxwDfV8j8STCwB2TN9JKwYR2v7mRpv8Nk2zHKutp3rRAcWLz9YEa75hYbq2VxMPiWpmz",
  "key15": "31HLBZ2dr6pU5GM7C4ryMMzQkPeqeAuzuMSwbYyCTT9H7mQTJNPX1xLgGQ7UjaJDmajAfvLkToUK78ugdqgpBY37",
  "key16": "5P63oUQ7fDZi3dyUv9pAbLPjt2uK7ZXpjzxFCXAeGHk5FGY2N9Kj3QWydcsGmVruVETMdB8xbuWP9NJCQiYXtaBy",
  "key17": "2TBGbjgCWZsGCRrTsEbN3LgN5HYQKYh7etjsyUmMtkzWJUwD51tCqrwSK5bf4v1CZwN9QsaRkuQhFU1hujFi5RLV",
  "key18": "5Nk1tuE85oYB84HDQY2bwyhhQVVFuShrU4v72XaKgpXQPzbvoG5VpEhpGFnQL2fD74s35EkQDeZKsPgXijMWqUB4",
  "key19": "4kCHxZkaPAPzZwHgzJ5eXk2Xj8kZL7yoGHTRtKkLeFxBb61v94cVer6TSNTxXNURPR67WbiJadyNLQehSnMzEeHY",
  "key20": "C7dU44k8XYLveMED2Gc93WRs1uQCakDnQgTM2KUWQcKF4AJwBKuhqb6oFYfH8ZJDBSiD1x6YDoTYejuNRhabGTn",
  "key21": "9M64NTcedQAgiabWRv56GDPJpmWNVuZ8yPLab7M7suCBzRAXHxT6Hp7ksNXhVnefULFPURNgZ8LbXewXNdpaAto",
  "key22": "4UwUqJCrQVga2bpWr7eYmiDgR9sZZdvzdM7q1pw2hYgWs7QwRcRnSLQnqtjh9hJJhuEQbcoBu3NVHt6Hx9dsLnP5",
  "key23": "KuSeFD1pi53yghNmhquPfMedK6mxTQKziRE7toqMgfFhBUPXtN7BxWeFJZuqa3d87UjhQef74FC7JJACSZZXSnS",
  "key24": "58QBha2JrU7NixsYR6mrLR7VNME3RzKiYamWsk5Ruj9GzWa8VQYaPiiuFDhTjUESPK4SAspGyQTJDraDHGVV2aQq",
  "key25": "2Eqiq7i9y86cSJ3To7TUZCoN8c8Y278mvcbv5eoBAxscKYAPmRdQ3NGNcZbwZTygQC8yuAjuUQ6A8qjBpPWo6C7g",
  "key26": "42QXTBNCTcA14fe4QnFF7SUanZjHStemrsqXzKWuCGj6wv9uUPP4BqHEPtpGsEGaJeS5GS5VDPCSm7RjKqs63eN8",
  "key27": "ebsaCE8w7ogf6RSxQznUuoaSGmPt8BXM6tudLZp65AQi3SBj5FefDyH8Q2aztqHYwggFLh1H3Dr81pqBnbUGyKJ",
  "key28": "5QCzHL6qagWTU1iuqHRSRvbHfMDKQtU11wX62zWpZcYjauz2zuSadfxNsRugfas1jvZBiWVNQbN7vtTiuSLvn8CD",
  "key29": "3QkxnNKUuYoGz4uYtHPuFertBo8RohwFwzocWEHUzPm22X5e7s7wh1w3PeXR7MgVgHUxBWbXSzNQhEumFdfa193S"
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
