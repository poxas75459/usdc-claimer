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
    "5zk6U7HQN755eWQAuxH7sRWDfCQJ4VbJMLTm1an6fnAY6XnsPqcYfkQqUY1CcLCSicFaipFueFo3Z3aQZoVZrg79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cYiBvvUrMXEfSwbaFLY5vWyhx2oR2YtdWWfrnY5A3Uk3dVwwgT78BCbdQ6k1KRaYbQRkxUGR3Hq7yNkboerJVqv",
  "key1": "2mEec3qj52xGwYgr8KmsLNMn6bhySTrnGomJMYXceenmNBr7LTgvqJkoov9iERcvwQFHTTpkZ6tgQHqEiAvBbT1R",
  "key2": "4GxXJ4JKNxGfzvy4LABexsMEnoxWZgKixLyjRG5YeBnxrPcLPYx4NKP1gPVX7AD7WbFuihvMbbpux9eVRARrgEC3",
  "key3": "R3XrdakY7qjGHdVDHhDSKgsgZvbQZsXXn3Jt6DbwikJ6RfDyW2X7ktWY2PhL8iSdqrZY2R2vxu2TkCUBSi4h6cF",
  "key4": "3TUXdJG1QMe9vaVDzAUFfVNH5v9czTSnPaikm6aTpvq3R4a9cRtPH9grsXKhDa6pjTnSFZzdoiYbQuBupzHeiv8s",
  "key5": "4KrpAWsjh7HRHYXG54pSCYmGUNKLzwhkrgJvKY4uCG9KfFky7UVokdE2YFFUBknSo6s5mmvD4dmymVhj8Pnq7SWc",
  "key6": "481C4t6uBPEeoRffLw8L8zmb3Ky44jopAmDw3mNhkqioVxFynWf8RhWok22v5J69DQxKnGuHwVoehY6ykjc93Mp2",
  "key7": "3mT8GAWxUzY525Hxsu1oUiMFeYoAU2JCjfk613esYY92rLEmQnqPtm8RpMPFoek7hR1SSQ5fHXmdyguBZLk39f2e",
  "key8": "KH4ECC92AoCsGXzitPK13RMk3b16NBd5RRmzEkypmb1N3Pjvdw9rYMMjzRUeW251QcAU8Z9wPrbpGz2tM9W3CPE",
  "key9": "5gQtuMNdyv9Dj3xWLccAr4L6t8nHPJsWpYCyPGU9SzSqoYPNzsACByFmYcjE5zeqwRonALMfx2CSNKDU9tfCyoMx",
  "key10": "5v5S7CPuQk7xG6yW54w3MMFQigsCwMkpFekd2rvbFPHjoyvFYC3gCGxB2JjBxHzTrq3CKK6TN4KGgRQy4Jv5FsvG",
  "key11": "2Q6McHWP3AQEb6eAJbDMxxfcWydLc4GzH2pHWapp6ts1GKkNYoQvQBTdyC1ZkkQsgTucuFvteunC7DshpLR5h93v",
  "key12": "4Lp3kztdcVgwWdnHm9niNueEJfyzW5i9eLfiNd31cXJszQFXP6g2JNHf4kgEAWv2zNESQvNCG1rjDqh1EH6CkjTA",
  "key13": "RVKYomWifkd2NGjx1DN3jGR9cMY4AYrSCL7WhFk8sL2541FyzqgwprMoN368AN4w2yE3vP2c5rVNqj8LLjg42Ez",
  "key14": "4BQNrCEWsWKgreN8BtpEn8uEcEumaFiBhSWBWb9T1sSZChx6Ar5S37SWfD5FXFAk8NxaaxFvP4o5Qk4feaoPpGS5",
  "key15": "2xFcVptUZa7gyobYFaRDSaPE7w24FCXJcN3xGJEqj6sdCz8Ms6s7Mu6fWsPrYbLMQv2ruTQ4NHEWFn1wvH7B39hD",
  "key16": "2tHvkioHnzRFz4Pg8XvHw9gHvRcESvey3j5uHjF3axzsuPib4LbqEDaVDBgRj3p9gMgo5YEmH98AAvNX2K4JLCLU",
  "key17": "47k8HNZmXTbSsHB3amMJvdqzmhWCm2xTK1c4wmZEyzDpX46zB9xZkqcDBiWV6qCRMHFKfuwD83rvFMhY4R6uow3P",
  "key18": "TyGc82nFVBoB9XdxDUyDdVcPKwjDnLpThRFAupR3SGWtD5jFjtKG7RpQpVnUrSgHaN1EXEUX3SFvh1pkL4SB2B3",
  "key19": "3THawq1HkJvCv69RoeQxqZ7mKM7FSChZvatfKpKhYctZRsF1Wa11naYinzTNj7JWMtUCNVFeDRjGUe5C1mCZH8va",
  "key20": "5brn3x6MnfMqBLUadNzPPJtoJpzXzNrSsHvaovodP55CSM9dGNvB4vEjKkW2jq3puNJXbcvaYkuP73VnJmBPHVjX",
  "key21": "44urvkkDNi9s2z1Vi2R7YvNrwXJ3SoVZ92BzQ3gS33PXZ7qEkSwdBRe5EL6i3ZP4V9Wtf4tQWmGTLujVD9agTyf6",
  "key22": "3T2FkyPdZKwYAKw26M7iHc12LvPZrX8MUbfNeryLok2k7vgHtoPKy1hgrn7sSQeb5gKLqny4mvViBhXhsGrqpMHg",
  "key23": "5Wwi55gmJi4YQyg7BtAKzDQ2PfYgETqLgegXkchp3K8XttQErMgdunak6HxcWFYF7yACV4QFePnsGehpyqjRjfA4",
  "key24": "4NsNikvbhyszgRYnVybB8G3WV9mmVisCL2MmG3jojCBcAo3BJrLBnBq9JsTmtM3HWUXmG6oYMa3La6R42amwFa61",
  "key25": "5T4GMqWLKkrqyA7ZNZmY1ZHzADJJT47c9hyBidhb1PBCAX3h9EtCPf248TGAZ6mSry4UNpCChjx4feABRzU3Pwas",
  "key26": "4VuazKaf7njuBuTkjc11qDPCG2bE2Ff6tmnMPNf9q2yepY4aVhZfd7t7WsuBPPwJ8C4ZoRuPGARZboE5Dmw9aNFY",
  "key27": "3fqetvYZz24UjCXWCkEJN1P5pmapxt7V5iyEmgCkxgscKrmWrHT4dEKknWmqnHgS1RABmf8u1FHByZDfWmvgyGDL",
  "key28": "4Tv62mSkBSg9AYaTQWsf1is6nfndcHd9BmELchHuVeiTPwm28EWNo5XfP5HnDYmLszWrCorz3Dq1T9vX5RBaH61V",
  "key29": "5nEagZRbXG1Ym1QSBjC9quGVrmABXDF9m4UFgiPLL8uKxVafCWCKjK2z9R5mWtvoeuVLM6mp3Z766fNoDhpGUzRh",
  "key30": "W66gThQRLDAQps4q7EVw3vm29W1ZdTPepnHapysk9Y3Nqa8SQPtzfg4qgyKfrdP2zpaLFau1svKvaYEUay5bnbx",
  "key31": "5YaFX3cNkNvt1KRoDuDc4E61w5ixxoM9EZomTUhY3G4UpkiZ2nrHcT3DNfFLfQGxM2eXPKPUxpYT9Zu4f3PWNjz7",
  "key32": "5CAUQjP52137fSrJXXGurtdvR83XML2yBxFT2xaLLaCKvWZKwQzsPaE19VHvRvsrUfFTjVnN78mzVnW7azxBGF6W",
  "key33": "2hQSd51pdfP7TB2bvp72X63FuobRMBJgzn56SxifQBuMVBxt594S76v7HfUJiG1y1jn1w768AFgzXzExe3g7yyJ2"
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
