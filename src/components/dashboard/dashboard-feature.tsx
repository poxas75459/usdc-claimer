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
    "3wv5EpyE4BZgkmCPYoPdLj2YvGpY7B3GUw5BsF3zKxYK6EZwwNTE363DrXsZV7pjkxzZHfiPqUz4PA2YrJv1yCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NCeunzBhriATFGDmG8EMojVbkN7Yi4Wi8wJ2jiUJ1qWr4QmoGsaLCY8koK1LVZAzsDS2xrdUbuk6GKytff5d4Y",
  "key1": "4xpLckkAS9dqUT4M3AjyBtbUb9aLVvZW7nuFnStvHeJ8kt7FBfxjN9bby1Qo9sbN65yJ9ZUf4gxftfXX3PwShQpC",
  "key2": "3K7t8nDvHVrvUnitwiM6Vnb5wjf14abF5Hn2trYq1XcmvevWAKFvpeGNBTtf1Jvi3uJKK4th9eNpaN9cnw6Y8XM8",
  "key3": "3EZHjd6D6tgQhbTB4m3CmffRiGHQjekhMjYruMsh9Drs2YHQ1pgLQMsQsPwqCPjfbWfPrGv6QEzHMNHLnYJMzpYY",
  "key4": "VoBPPTURVYQVCSnCBVCCdkLaboq8cq7dK2YLiXE5UdHP6M16is3spvujSK7rawpkJSKsgsRP87x7bZoZrhsCkfL",
  "key5": "tFMVkiKZnQjBxWnj4C6m4FdrUY2tP6pFxYLSCVERCRC3a6fLLKiJzajBRu8UVG1mCVPCaokdyZnptesKeMD8P7v",
  "key6": "2ooZf4h1UUFNt7jScMwXuCHHuMxWW3QoQVNAqgw1MxWj5f1pYEUr8tWszdASdBcz8KoPozqjfpU7G1VzrrriQBAf",
  "key7": "2sJsMcM1ouvir6qz3CqWScbNzpg5BvWNsz25ybu2eMyqnimgRnfVkDRdmUPZ63BqoYEdKJS5uws7xRvhUGoGmUTK",
  "key8": "HbmMMH2fRcmwx57MFsfmTNyG8fVjF2WSUGCg9y4ZU49EBoemkWX8f4nY1YtoqHmuypJgG8bZwZyS8XV3omqAfnz",
  "key9": "5Zj9tVaPCb22jMtRpVu5CoSyEKgXUFaXbdBu9i3m4UxJhj5UnFbKZYv61jF62aqa5gVASCYdWXgb7BT63PRhYtFB",
  "key10": "5nBRm9m4mEF1JqyDoXWxXsRcw9qzkoKSgZgvDvRwuxDG8C82mzvFczBkoQC7QWwhok5EbWAgS5RoWdpGegkiGrdV",
  "key11": "5fh8KxvE1GVSbMzKYmPFgdBNL83H81voEWUzu2D6QTJwzfrdKWwMLHMJgs7cWN7uxaztmKKUHct5Nm5K6En2NebZ",
  "key12": "4MCw7xJEkuqrBJJUy9sz6xaeoLCxyYWsdePTuB5F9LSXCxvMqdhV595KfBkvXhAJxZ7DAriked84tByXvPcum6xb",
  "key13": "5JrzJRbQqyXCzBAokwdAJiNHvKKiJeymbE67EHnoWqsMUEkirHGmj3CseAvweqdvuc8RNNZ4NxWw7XenWuBLpg9c",
  "key14": "3riTFTH3XFd5qLHTbjsZuVVRNTas4aFaoPcmck9rjnB4gbASA5nYVv9cBhVs3n1as2aBse6QVEo4qNV4WeLDtm4d",
  "key15": "3ea6iQuFw7JpV2qfy8CadpnogUBib9Rig1gtiryrK1Shxs8UcnHiBuF7awgpVWavXwPdWv4rXCtURWMMnkeBwqVk",
  "key16": "4hXUrE3LUWtWSBZqrBUUCy6GNYYHkiaU5zbc7RjSedX7d1VHFjxKJrBK2Mc3xsQbnJ45znZaM7NBrPtcqp4Gke9w",
  "key17": "3cdJvH1wQTijcU69ev9a8ndxP1YEP2sAx7HGSG1rvGdvtBLQxoYDw1E8o6L6NKiyDSC1dn2Ee7VVp5ha4sBMF7F5",
  "key18": "5g5Xv7Le3CUj2YqrJB23sLfXNUJD136HTa9SZmLePuqaTaGbiHXvDysHKoBg942S7KDUq47HS8tQc3d1XaBBNiLn",
  "key19": "3VGs6mzFUTf61R5Wroc6M2CK8cfdqWG6EkMdXEV5JtiV6QsFyx7F6r7YsgBvSuk6AiQay8mzeEAB57EZ3JGnRqxQ",
  "key20": "67g1g5i9N4PmqTyvZi5hqWy7cQWNr92TtUFshJDRsEMUC6yQvN7ZJGGFsVu47Lz1CbbY1CsuN3tJSksLdWiR79oT",
  "key21": "32hLnYYkEejGdTXoxJXuQaHsoJenFF6GPrHNdMct3u6ePmn7TW9mdVmQ4TKxJzWZW43zxwH1LCGUf2zBeUrgjnyw",
  "key22": "g2WhtBbpNNjK2iUyHdyNHGiUcHFgpTbJXV5rQXLNXsuZgiR4qeyuRT67wSXHazhGZcRPfwbWmEKSwhhkDAEu8cb",
  "key23": "27tTaQbirv1mJ9ewu21yxkkVpL1SDWJqXzNynQbRtyNCf3yB9TSFwN1oe663SvDw8Scy9MHRGsrt39S2H25picf7",
  "key24": "3vSdnb5DnwG9QoLMtSy2PPjzHAW2bXFVAJ8WgE8KYPsicEXpnp9bo61iPDp5vbQZmsL6gfHwWXCEBs3zV9u2YC59",
  "key25": "5cPfXGtxvMfFNjfMR5a3s6a52JFFvsQ7sFR1MTEoDhxPMvwuKUNCxZRLqua6h5xTRMshy3AJAA6g6jDiA8PMrkcC",
  "key26": "4zcxjZPtbpEmL21eKyztk6ZE2RLbsBcsBzZ2Ff11hRTpEydvz6hA4rJGmzLmJtQAmiKa5QB3gBLQ2ywFB8SxsGeV",
  "key27": "4UVEngWwt7soNMmwnhGMYLQWZM1STwPnYUTGTdvuzQ7hyJpVq1wgcxBBvHWwEDVofn7hhFGBTz8AytbhgCDDggv4",
  "key28": "26VtZakd7BMYUStorxtSKjC44xAez98F8mN5fatUQV4kUG1WDGXJUXPrXjTtkDMzmEeAuuVd3zDeETZf7YLPkHJY",
  "key29": "3dEeujVoDU1UTR8fF43nYQ37iW3VtQd1HuAPVzJwPB8BoXNZRjscSuj7SsbwH1fGEgzjzDoARPGhhuta69nmJepE",
  "key30": "4fMrRg1KX4mbaA6N4nR4Q2UUNQNSEAK6tCpTkswC7SXTFpLNwuoPdHiCAftR1BwcLQPVcE8RJNchhscCUmaSYfyM",
  "key31": "36Rydy4EdDh63ACFc2HpRMANhzPzQMFrt1bmrwH3BaoqysHzbG5ec2p1Hm5M4sqdtCzQNh2weAa87cfNy9zc9Vwm",
  "key32": "2KAcqYrD4V8LNQpiDZAExymcUmKNoUoB6S9V3CcJeBy9RmNBHams7NvkMApUrE3icmrxZnwFnwsnHQoUnR7or49X",
  "key33": "2oQt684sZfu5aQEHQZy9zo57rwr35LgJPTMN8V8bMVgcViuyNyCENJhuhtM6vAPRAvDfT422gFrpqzi3eAP4nr3X",
  "key34": "3NyRosAQg994YJf8F8kK8cuJjwTpwjzcGaD6vbh1ZHu5yfLdy6n9sQPzzYPoRwwadiWaUeuy57RPZeDmfcwZkD7H",
  "key35": "3UKAgkxRFvtg1NXYmLbpJZmZNyVr6qsdSYm16YntHdp8RX286A3ZypHMuVyk6PVMu24rW3vtfQpibNwD77ugT9ox"
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
