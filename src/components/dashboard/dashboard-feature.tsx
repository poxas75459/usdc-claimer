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
    "2goKRtaV6C42iAKL3o86sdP2V9ZvjLYVtwtMWXCJPAmxuSf8KHhDaEp1rCSDvFqwAJxXtsuPQRQP8iSUqdQVBCX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kwMfdRUhs46bhJ98YvdAWrxDPwE541C2sshMPPwSd3G29EqpD2pHBwdn2joKn85T9NavTHvyYAcsaNMNAMK3JMS",
  "key1": "2z4ArWWMafN4hB9FNNobt5cyKGTjCWFagGp2pMabnWU6sHA5DxVk4zVN3yRdSp9ZimZCTwvf45q5AXtZRNQ6hhyp",
  "key2": "m1gdPKGrc6XiEE4zsDZQ1pkaF7fdkZSGy39x4wjTcLauLq4JGu1P7iY37NNBiHptRBt1ueTEr1QSKdPtRiPZZXp",
  "key3": "2rJBNLUmXkwoEV241Dwv9cb2UXfoTUesDkk5db32fdB2yYXABM3vSSF1hz2UkZrWQ6qEZYYKMKQcKYpdhwyxxMRt",
  "key4": "3bmSjG75GkrJqikQ5fJoBQQqKZ4p39wiCtx2h9eqM3YgZootmpCWtMs6jCxe7dymK7N3UXTynMtwcug97MZkpWGq",
  "key5": "4cJTBco5CycxTmtqXPXtVNV8ZFPE6mUePiY7rvaMSCgwF5nm6hdUzHLDJUj5AQTi3hZhaH2f7PfcmRm9KYjxUvqH",
  "key6": "2YYCrm7b1FyGmoPnEMvBpYZmsKJyRKaiS8CHpwr76o5xuzvDU4nNKoemVm3M9thqWqtvH1keSGJ6UoGu8GEKmehv",
  "key7": "34Kv7xYrWJgkG2Av7mEKrqBbfj6nCh7DXrxg5vCbCau3fdMaiAxoQv3LNNoDVggzUkEU6FA2eTbncL9RQPsmCr4i",
  "key8": "5jhRbfK8LuZZePi7A88xg1dhX6mdYUjQV5JZtmZEg17MS26REFDXX1Eee1k5Uq316G9ih1sV5nxVVsHgoPnojiEY",
  "key9": "28ECLmLiGK4tVKayqaVuZSb7yGmFuVE5v7TuC2rSRb3jeqCiZHWuDvPScJ6vBR3XpUShs6uaqRxm3SeWggLXH7Q1",
  "key10": "3CFVMNY1cctHqtFnhP4KVW9XHZip5EdLXEts3uJ9MtnD8qkjcg1gPtDZPrjqVN61zxKQ3M8wFwxBK8X87YXdjpgx",
  "key11": "4EaDfuFFqK9detReHJaixJfqKrzcAm1MQRKKmKPj7ZeucMUUBVLDV6v5Y6QufNy2yQse4cWerzvt7fcSBfm9f3C8",
  "key12": "Lg5kFAhwNK7acpB1b21TpHdTEyFgW2QNmWaQwGtJ3WEEzWgrQN1FEzjNPo6pd6GRdNPhVtY48Fn9asLLJSYPLfz",
  "key13": "54L3twVXv67iD5LuRVhFd6zyCcfWvub29koCVKphanhB1KZtPUKZquoNTNKSvC6qQyFiC1EXErF7k4dU2qg76rzV",
  "key14": "5vxecpGz9R6JqkhgVinSVtJH2cBrMGuweJ5fwj9g1rSnVqoXzU8SBExPStou4X24uaNN2e2qox8JghWXXUW3Bfcr",
  "key15": "4bmDqNXQ5s2wv49YnbVXXwK5o8MXPc7xSRuZ358mGeBLs9FWVi5xsLx827SfNSdoXByQuxsZSWENZdBhADDMi7yR",
  "key16": "457iCn7X54wNmkT95d3sWho4vQGE8wxhfrdjaLzoqtc7rzMDhyxSbDqiVV8XUkqM3mBRd9jeidDjFU5BiSiM2nNj",
  "key17": "5zrbCkbtpZcjbYWJ4ewuHM8VYV7MHmYX1xXCqW36m8Hj2pTn9FzM5Uyjiw43aoyS5YhHSmUEqJUw3iAdewzGuPTa",
  "key18": "2RTw2HZXpKJ11Hcho2u2aeYwBZY1MGFKaGqWuXLvzdEGEY5S3dsz9YKrC4Dy6WBZsgYudoB1tZMSktJjYWFU2YoB",
  "key19": "5y6rdbXABrouqAKo36qT9tNGzA6piiFnwbDknWAKt9WzR4y8jryPyZBieBcmuKpEdHYzSzAnq9BRBuRUENaG1QBR",
  "key20": "2vULseqPjfhcYVhzr9VCX8rz6rue1b5MHC13HZtrP6SkeRatsLrtz16tHhVuX2vwcDCJ9rpBDmpPV28Q26Nbhd4v",
  "key21": "jizAFJtE1MJNdFUe13sxnHZDmom291vH14wUpiJrJFDPsh8HZdJS5yCjqdhmp9DHicqghe9s2UvsUk8T6hLHB1r",
  "key22": "2z3RbzyBXuqz4uNymfAoAgaWN6GXdbMogv76kSk2Jx7jinKwpcQVvDfnwLZrg2edAHGvC1A7qCiuPcTTbLAxDoUm",
  "key23": "4Fo43UvuCXPhHFScJN2yedgd9sifCDRo4yrcPn72b9yhCnDiTWNYJJ7BUigKvQFxBgSJTcTUfXA8StEPowHPQNWG",
  "key24": "dCa6aycha87T7Rh68upK1fbnrMAweY1ApLUWTDEMdvYZSH8rcGVzbauHqzWAEAYowKEmHV4kEEkpHP4dxgVud3V",
  "key25": "4rEikPBSU1sSSDxCugt4MLAvnnFQgnurWPVNpHkZiMyGqziL3obsPb1dCdbeyk55CbEDnCMFyvcrSjSU1PDzrZjg",
  "key26": "5hEHC6DBXRP2PRWFgEEAkKR5qGcGtpSDLLBWkqhM2dM4cQznG6KPtWEpLECH4QGfp7MNq3mMYo94xDu3rSbdnDCJ",
  "key27": "3VqtMZ1g2qqEGsXKGjVBdGFuCieqGFLrWMAaYNbwuH1X6HZigogRiXzXwXPhF23D42irRNKvf2y72NX93RpNx1Hx",
  "key28": "2oux8ketZfJ5cadVLFwaEt13jmLp3VEEQBZpEPEDGmdoP53yzT3gUbmXb4CE2v372ADahWbj3ECYJkbgYgkLNstk",
  "key29": "2ojstqRwJFHoVQf85bbjxGfivAc3zF7PtvfhmUjtKLXNxEJ8m5B1uUxfdQYXQgwb6J6bdytfgUrQNCcBZGj6meiX",
  "key30": "5XdZoiyYdrisVUMv9beSoXMvFWqwf8p89GKAFJehRCv7eEJLCkqPq8nvWkvvdCWtzDZoGMrkFPeJmoWk9H2vHA6P"
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
