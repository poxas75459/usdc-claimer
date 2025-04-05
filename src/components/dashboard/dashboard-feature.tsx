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
    "2EnqR18YNgDSCVnzkCqqnebMJasFFAkuovGxy3xuk7xxGKUgksiXWbVgwdMn4opWzEvVDoNgW1Ee8KiR1wbw3jgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j6vRfRvmgcJ8oGW6HbVdeH14EHVJy9wyykycfvHBAruYu4HR1Z5ANvsVUCBaV6hWFmWhDTptBEu8TNSN9c9GZ8d",
  "key1": "2ud3Wa6oBU43srp8ZFbNehVQbywMkwSATDVwuc3oDXE6Zd1kugoTzPmF1xZboxgCjV82n1fbvHuLJYmSWnXucNVv",
  "key2": "4iPKF1NEQyVGCssstLUgwYZfJDAyBNNZiptx73iKrvZhtaoyAb1gJUsskPx4ekEDuHsisBwNLJQXvkjMAs2SUMQP",
  "key3": "ADZW6Uoi9uc93cijiJMq9PcS5FeAxnvV57TJ2p6ctyPfEub5dyEVZsr7C6jB6pTzugrLbx2UTcxFUaDQTqsrrJB",
  "key4": "5DjrwstQ7YyKsZ1QMgdpA8xjsvxuVJhxPTSParTWNNFyZx4gbiNP5SZLKHUfMAZamcM8iYz7y1WCQiPs4GprUmzi",
  "key5": "4UGETty168p7BBzaFbMNcakKD5QjJCW4TKtyMZKvMYNEFBuNCYqo9Am5fHbZxzbdRBWKhV7i3stoGWGqSJShkt4t",
  "key6": "5Bxqbs4LJddcgfoM9hF4zShP69RoGRB4eEi3Qc4nStfatHRprr4jt7Ybu9i7SsBTre4zQWTtUxobZ7t9gvsc1Ufa",
  "key7": "63GvcdbEbqFUSJmTRSHtEkboMQGy43vkx8knh2HrD2cj617NwYCkGY86aEC8nGmY8VTqfXS5LUX6Sqe8jkV6j95D",
  "key8": "5D8MGhMmf739RyhNygC4hSXfhhRZZqL5UGYiKtzw7C8sMyhmzkfwv9kAt3Ch7NGuGow7ejetKbj1rCyrtppMXj9i",
  "key9": "4siyagoQGubWXKAEfsqPFqGzrbRWa78BmeBWzhPWmLjs4Ps6ibvycefJKGoasjhh4mZ2vKvvwCtrH7cSk8i1Mte9",
  "key10": "3jCxiChohChVfvnYKpckr9SHRw2jHq3XPTZkeT7juBQ226eDittMA7Th4pMkBQWuU9XSCZKgswSPytLGs525v4MT",
  "key11": "4etLUgQ9NUG9RdR2Nygp3Gifi9NHVt18sqwcU7hDXwrcfNGhJ9HCiPKdSxC1MJLPfr59WqoqywcQm8ugShmTVsaY",
  "key12": "3K6o84zwUjWfjFc5grCPBYEQ9LtoaFssALhKrBq59NKtB3BB4vVbV2N9GM1bpsCeNgytDwvcGHwqHndUCkUobBYF",
  "key13": "5gnYv7gAxbQ7G3zecjHZGFWRCJxjfaGZPeZPUKPQ91QkSpighEeWByZqeMbDgsXzujFQ6B7afjCbV3tHyzADfeUs",
  "key14": "t29NYzMCoFqiDsLiAjcZHLaEnfMY7cYCDpnj6QiXzjrPPrEwaCjSUTzdo2VXdabBk62jYXuLtJHP1NRMP77MvFP",
  "key15": "3RZAMrtiT7twazBPnqtdQ9AKq5wHDt6DoAwB23HvEdLLP4vxre7pHJz6xtEwtwq6WE7ufGEtisScGMnXnGsKk5QQ",
  "key16": "3QqWeUUauDzY7AAmnTfj1bQbcFycMrMzTEVpAnwm6Bp4PrSGsFAxHBUUAJYTtVeDKY3AxcSYd2p5LfQK1392jdmD",
  "key17": "SNiMYPWXBPKKsFpB5PYPJA5NFDKPJaWUUc3e57hYWz2pE19zNv5aAJPZH8roxB2skHB9zv9urLzmnRKF7iKcaJK",
  "key18": "3ry4sBfvguDCEb3Ms8cCofXqhqDjL1LwV2XG9z4VjFJBUDYXZFZMujf498SAPXNEX2YuG1EgrgFqogr8MLqw3MSN",
  "key19": "4SwvHNAQ6W4uLoFrMnWoefdVY62PtKUJgK6PAJFqw9m3PuPXsiLbxBQTbnFfabfLN817EE9Wdv3uJVqD7tfi1hr8",
  "key20": "2ut92GZnGKpmLnpHfARZnmG6AXeistsLVeGqZiyejiYLptBP35WVd6NqFPhpcPKoSyJL6CWzoobuj8b6xQFFHCtS",
  "key21": "5qU4JQsG5a6wVg74ysqtraqVSk7v1dJpq4MtF4VctsbePV23tMwQoCJu3rRvAoSTPBmWrU3BPFRN2nFCMAGBxw3M",
  "key22": "59TFLbwDrFdURWfUPrZ8Pmp2zeWmQKu32HLCZ2cSxP6DfokpHdUSaaGpaRgHh56mPi931qQEpAWQrTwaKSkVVCaz",
  "key23": "2rPEZo2TEkxg3zzzmJ5DS6hWtK3MSYS2yXFQSW57SWgnMmPEXjAcbdjVusoeJc5dZVrMEmTUy6RckoEup8tWujTz",
  "key24": "474UdLrvuD5xA4idd6tGnPo5mK42qgL3X4tZn42p2UHHE2c2V4JMaVhgppUfcQ5xbZTGrjcXQrbDZppPKe7VDRPu",
  "key25": "3Q8TsnxNb95axVjHETmBBTFnrVCExkyGpv3ofGTnsadTg9mqmvQbVtqa5Q2FnvdZFTgvgVt7msFUCyaaWT7KkCJB",
  "key26": "3tcNtinJYm1ScU48rRYM2njfcHFUNrX2xWb8tby7Uni3GPHLkkfZxqcRHiGSjuFB1npG2d415SMhtUbN4q9p7XaS",
  "key27": "TarEf1phgTcfc4hrs4Gsj2FSmGC7HBiuG8APHUV94WZfFo9azFFGg4BHs6S4Fv9HUpN9Wt2ytF9uXChM29xwdGR",
  "key28": "21uy6enmhmerfK3cLyo7qPxSHXSSNVeRTZqCAjgBbw8sfm5Tb7K7CgtQBtA9bJch7xbWMdw3P1NfshaZBqybJBJP"
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
