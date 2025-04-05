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
    "5KCEmwLhdxKtVMCVhhKXRjEgh39XQWXmsiUUkw6r5NdLe2BCZd77R32nNeBMbgUTxE9CQgcQLn75rbU15s8PS3jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHAokPp9c3Qb9uLLwkgZ6PfaVrd6e3kBW1yT5gphCv1oWWXuVwMPZ6djCdnk1BNabvgwTRGuAqtnLZ2UPBjVfxy",
  "key1": "4kaihVWxVxfomA5W7jmuKjFBEnbLYhXWnrYZJUpvW4KDVU7sQ94hDYApVAELGFu6Zd1Hg47wauwiY7GbNMhZ2Whd",
  "key2": "3ERAJFd2Kg5tC4kiKJ1wPXsVhivkMaWE1oJwbyrngMLyCxrYY8Lv3SMpfZd8x4SG1YKER7CaQU7qQXG9tJfZr5dc",
  "key3": "4vj8JaUXZsnzueWVuhAocGayobgNp7bcZpVuwg253Gvggf9BT9aZRitSRdF9oFiZVt7a5B5wn47ViG7sUsVzBrv",
  "key4": "43tEfH2J1jFZwjQqMp2erpFYj3g3Y468u7AGdoFsKWFqBsMHmcMVzALWjBeRcyGEKr4rDjs9aL1Ag6w9mootpPJY",
  "key5": "WBrCuZh46UXW48sLTiE1Vd8Sa9j4KUCaW9TU8NvPuA4b1XcVhTsAPRkRweW1U6Z1XJwCpjoQDxHYCTj8ABhLy19",
  "key6": "5TN25Ah1uubxXgjHQSweT45V9rMwiMWLW2e5mZ7KRmc9S7h4pPheqrGQanNeHyCHxGFrxn1BpQ8pjvyqEsSnZCyN",
  "key7": "5VwQK81dQkG9o8G3jumRfzJX4Rfkik8WL1fmSkdTKg3XthHFyZGMnDsMSuq8HSFxuK1cpgezau7FTYxAbK5zVq6u",
  "key8": "328R2CDAr2RVQxzYUFdWvyytrZRDR4JtRsTAyth7zTbEJMAquq3GfBtuUuDL2NYGbBHyvTiDGmvP1bDvoerqoezh",
  "key9": "WyBTTXzQou1he5LGfWdUv5J6wGaN2TKRFmcPK34ig81St8D5mWRtBJeEMCuN8tExBE5PVecS2V5nQEPKFe12YZ1",
  "key10": "5rCr3TxhLSwmC3S4kfUfy4QEzfyVmo2DvqT6yYrqwc7FveEb1DtctMfi4y4hhfad7NQRA3BfB2Veb3dcDGUPZR4Z",
  "key11": "2jpAuegoxKb5aUYtybt1sXF6gnY16ojTLHZj7kLsoG7c8w6XDrbTLsrxuBXjczV9vLJDmnxFjNFxpsCsXiyW8wT6",
  "key12": "5QoVXbVDXChe1wwoYADDZXM69wSjba1Xx27sFDqNSXFcMQccktEHNjpPMuYWGgKXuRTfBMAwZT1L3BaqEaZJDr34",
  "key13": "566rwu342AXph8vwVFVx5tSs1SHdZVQKksLFs1iiCSNswCS1BeBk5wuyK6cdLX46N3vM3M9MdADxMbCEr2GFbgiG",
  "key14": "28LtEF3aqRt6R8k7AGEZHwgbPv71m7hzFc1uoMCVS6NPrPikZvPzRWwTaCv5AV5pUtMLH2pei7fMJojNLsoeC9nP",
  "key15": "3H1dgprnCu2BAY9GdkZubJQtefBz9BaqxLsphLtULGspff7yuMASBUmCQChQV1bhc2G7xjG1THp9sz4ofWZmT31B",
  "key16": "3jq8j3Q4w8ZtAyt4L3xu37N8avD5eoHSjAYCvbneUA38VqPpDJu3d4YmLDeyb4zJr6TA58hMHTY8tWGi8UGLMi1K",
  "key17": "2mBPoKFbU3guQ7Xs7jKCEUq9cnfvMfynE17ax4QELKKnuNdrQdRro1f1fLoKVJJKbyE564iJFctHFc5ZczQZ1Ub1",
  "key18": "2AxN1neThED5fRtfiGEEgMyGCRenNPk1XjLw12HZE8eDrpQofbcj7GEvTk3zg6nniZpnofiYcnKPu8HUj3dUHCJW",
  "key19": "4dpPzucLrKNdm8k5jEcMdzCJofdtzrPQqQqMJMhhoQWY8Cc3LBpQnxgWoxGjkyapkTn6bEDo6jV2KDwKnrQzdBqV",
  "key20": "DPDNTCHYSPqCKRDJ1aVEPVAGJ8fMjT4T89ZD7px3anfkgkEUC7GSqUiAd62mk8KfTh5kCRfEKh3W3bbkh2wSKZt",
  "key21": "cxsk9bd7R8fJfxzfwgSJukenwkMn8a48TPFH8i16LbvacsNfG65WR33tGRLjLECg9n4mFuoxveJEpXu7wkTsaD7",
  "key22": "2yELQPAGouKABcG6Jm2Vj62x7WwZJE9DmTELcRHnj7hTKJSnz1xLQtHGdP4pFgMmMKeW6mdHfsgQ9e4u5s8qB4jp",
  "key23": "3Puis33QvEjVR5Y6QCs7hctihaF7mb1AqrWzuXoAxYrj7smnkFhGepHfUQeU6n5we2nu5G9TaQvKnz4ubK9Vsc8Y",
  "key24": "2QoZAnezJSsqkPXvHSzJJ1LVgWWk2wMCD3hvvpzqfma2oReCMx6pJ6B18JpwyhenAkWD4neW9RqFQoFC8LH2Ce4N",
  "key25": "4dyiNMVWK3mHsES7peW7UmmX5TVkXmskbFuST9odeMw1Vhoeer4iS2CMC2ob3VpJWUBVY94ppvSqJqttxuRQG6si",
  "key26": "22p9pc7AcDMt25oyThyguRAJaYHMeXnE3WVpYhPKjKi66NWzHmM8EecjvLW3EM5KWRBooxSzydPmFCcMMkcxEBkZ",
  "key27": "5LUt5EkFCydW11w1PaHVnYvvtZckZoUckUXpupPq8z4sdDWy4maBa4y5D2tXGumMiMaVyvQ7EgTHi1HZDpZQRmzw"
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
