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
    "5q7mAzXy5NiLCkMyG9AuZ3UprkHZX5eRAxN1g3Fghf4eexdqc3PvbxfUHqiemrN7dqdbAA9dTNANvEkmmWYAHh2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QdJVTzLtuWZZxqchL9QyjpJWme5Vo9dpWMgdaDTAdiNZsZTLmHo7ojeKzSAzDedfzzRqgwdTsr21GpSGkX7bGJH",
  "key1": "4EgruLXxHbEUD65gp69Uyre4irtfh7wS3fpoUJw9BLEpjmpLMC6A24E6saTkaoS7i2trsmCfvroZHkkPomR2XNz5",
  "key2": "2tJvBCnA1uEQfWns6bd6fEpyjvdaFgWs8TmnGVNCFwtSjGvbiw12h7aaezcCFBsz292gtLmmLCdakwXdBYRVt81M",
  "key3": "4yvstMH33Cg7nR2TRwkhLVbCptXoJ92ZHZgLJaZppVx6u2f4iznL88EJ7G2nV2n2xixVDw8SWL93MEajZkdrmPNX",
  "key4": "3piW4C6VUe5mZtKfd96vHDcHh5nyi15kS2sNaWQTT8v2X8bpfrLQqMEGTdKQpD8j2ckh4pLpeKdxZPim17WLTUyG",
  "key5": "3wPe9qWf6AsXEHiid3KS57h9iN4T7KaDqXBaGnLuVLarKgCi2pqB2GC2Rd5frC7bCu6AmHwUg59JdQEBm6QRx82U",
  "key6": "5UiqWDdMMwn3At37RTUgGHSpJYQ6CcTMkHPspoj96QLXCD2JfE3ZzdWWXcHpYVkq8HG7A9XLciaKSbdnkg1EDtFM",
  "key7": "48LmhQfTHmnXgK5yeTuyBKKxtoKQkfFTW77a9QQdjv2A7Z65cryJut1RhtZzLFR6EMPdDW3LqzLeixwMytAHVRYr",
  "key8": "4yiVza5vcMkyMjH9ZjuhT692zfdb1fyLe3hUeZz5VZpfSTW6FZyTx4pYYq1WWayEzSSD8B8TPQHoNR5oGgAZVvxt",
  "key9": "3VXJdbVGNi4XJCitKBpCHPCFv5RvdVSZddveGecLEJYJJBSVE8mNeqz4MQxoKijcn6sXiwRRuSTztpA6RCrHG4CC",
  "key10": "3QkA9qJ6JQp6rkjYR4otw5ZVkAdw9QqoMFgSTcBQeRmtLL3rv1uZ6JH8RgpLgcG75a3FcZsx5EiKSZsheyAHBpoS",
  "key11": "4YvDZGxdnHh8qYucrgLLAsCzQFZnaCAQuBn1RBejWVDNg23qaiBPg1vqReNsxt5pNuXu4d5FynczUCXoouQFkcrd",
  "key12": "4Srdykha3SbA5kkSawcmui2UZmMmedrFkTGGGjyGYm9MGyNrY7TCSNykfuiv8CS2DC3KFA8H5tNk57jXYtSiseNR",
  "key13": "Y3joZ4zeyyzL2vhk4kpEgDfRSf7uKHemDYPfG9M651KLBYdHotE8kELz8VuJY5jttLN1oCSU53FtYX7YCmxvCBZ",
  "key14": "39x3sMHn3rDgVnsNqdPCQh4Dtz5bDUj2TFLqRTW6bwtBMAk9C9gkhk9tGjEApBHFR8wMhg63WZG3fChdH48NSMPV",
  "key15": "3Kp39TQn1xwgpEm7b8TodSxCAUdxTh8JJbLdjrqafjQGBLZvR5AU2Fkg9mkU6P7gMvXEu7coiLL3cuKTfuAyW5kx",
  "key16": "4jqDxJHnLPGnpv3KxQmKmb4wDSC9q5FTc8ujyDmjzHH83Tr3PAdHK4h1pEtNzBsaUo9yM6sJG3ywd2Azzgsov4z2",
  "key17": "4cB6xhsbTtN3bdbNhavAQUwX3HfVmtECXzDn5SDfs29eArC9k8So6XC47zF3kcyNH1sMX1Afs9KUWETSRCP2HJUV",
  "key18": "5UwWz7NSAdF8XsBNy4jto9imLtZ7c4Ja5fPXp7FVUcHu4E4AmssuEwh3txTn6JXGaQYrGFzr3Uj9KifXZuDjqzjM",
  "key19": "3vQTR7xkRm7iYaUVwARrHtvB66ztQn5oyKaE1j9iiQnWCDiGs3Tjhf8jvY3ovnz7Y3yUn7PAFEtBVgD8PVzDwr85",
  "key20": "4PBV8rGW2xqdbkaXJFrgL3yg4TwNAjcK2TcFqcwfF812TcowLiUwD6i78VJSHwv3xzxCjUidQyVapCLpSXGyD1ds",
  "key21": "476fK1YphJaxUvB7dfREc2Mk7GVDnYFCxNa61JbQiiP1R95re2tstwDPn4WXJqCXdBRRtmhMhhPzyzz8Ht4G37Ay",
  "key22": "3erzTEbdKSmgt42xtXy6ZW1TTCw9CTg1QioFMFy3Wkz8Y9M99vkQhDm6ojxWq9MvByLP7ocU2ysrRwP89WfWnpYr",
  "key23": "5SJJNUJZqM3PTQSeyWBXLFXE4g248qifdWVtrZxvoh7DeU7M5JFHtzwRaeiqaU25cDHTi27EBqaTmn1PDxYbU3KF",
  "key24": "2qa552rXksSqJ4vj3yJvj51cDBFbQMyW8XhZ1KDuvr4GCPXtcNwKJYtTJNZa4BYhAB85QytoLTWVy1kjniioyv7o",
  "key25": "51EJkfZUMqU1i3GHEDDauNgyg6MHphyFTZcdey8jPjuTgaR2EKgKn1cFy8zHpM2nTVyowL2he5zdu77YBKUQm6Fp",
  "key26": "2gz4Q2CgRAtqbT4Ej3gCUMDf9TY98hXCdjK4MfaVeuEaZaJtKu5xbjCnJwAh3nkxq4PUCxZnWMthYp5Bdq3FAN7f",
  "key27": "3auRfs6AF7juiFw1aWm8gPy1L4k3PsPps8EScsNaBJSYtTyvvn8nyUrQeNxwSGdLGUwsWXSEHErukhAcWmSsMWLN",
  "key28": "3gC8abzFP9iP3Zq2p9xGaDQKYqWP1XRn2qgK86JxouyLgZfco4mFvUSwbB38XmaaRAr8JgAPtdBCfNqmqFWqLeFZ",
  "key29": "5iaGXe2gFyiDaeeJBz5xNecciauytg39GjRg6u17gMCENnaF2BMQGT34TLanjiBGTSwt9DS7mha95Bw6825vgF8U",
  "key30": "2rqzsTSz9QAVAtpd1vNQGeqxanLuMhyw3iBLL9LavEYjpsgE48GMQsa4xPNJYL54qWDSyGjWxBeruBVxyBvjv1Vr",
  "key31": "3PxKZDDGGkEoZUagnk4fC1aCeiZXYTNgun8j4WwvXsXyhPcrpt69R5JB9q861F8iJZLKCRtjXmVpfzo8W1v3LTHk",
  "key32": "2P2ZJ2cc1o6qQQRPRejatLdnYZ82Pnt8QJ9gMFFGNvCLvxkYoh58uzeinVGFA6A89EwuCyGw4b1icjZaQEhSc5MP",
  "key33": "3LCf5qKyLgSyF58mHFi8SfdLqh79SXXYi2w9V2esBRjrn5q9iv8JB6SEZw3S4CjmkCB6KPE6gCKx7JmVNRdJp2hV",
  "key34": "23xHfCHjCw8aiygxoKnZHDZaZDGPd1vx4jjJ9xSzojaLKuAme49uNNrojynRXcCKYRo8TYkADqHtt53yUPPeSZnM",
  "key35": "4A5UD1iqbrXaGbpkNxhHfqqwwSU1t6ziB8RhhbfvWLHT5Pre8vHDrupB4a3KTE3yogaWey631KrvyqzxQ6o6gTeM",
  "key36": "5bRoJAKbW7cfAYinwCF9DiGYXsirgm6weKxRB6fJNuPmESfrEH9uyt8xwKkGUetY8yNqg6cKfFy6fDTZGRycri8c",
  "key37": "3KCHUT7aXsfHE7VpGAdxu49JcSuzuV3mS4nnKVbiTg3okimqLGKPAMX5tSLcemNmF7tesuaqf2HsoE6cGjB8XXYZ",
  "key38": "4wZ5vU26qB7234qQ5CEBqZVcCLZbJ6ABHNEVtUWUSFZ9CVYWf4VyjD8rUwa3fH8iMof71SuMNbsuQJ5aEaDwSj3j",
  "key39": "3JdG84KRTTeaFNAZddFrhyuA2rxWU5sksh8oACejwtZPNWsetFZbnLKQsyidG4Ba4V71zuQZzh8wphssDDctwHdb",
  "key40": "3fRonRSvCatcBNwpTkNTyEJHyqpdJD5us518sYg4Hng5vJShwrGWF2x1vhyRrJ6KvvAvTU4M2AvBKNvTXVUwwsQ8",
  "key41": "4CBQR52mR3F48CAaoXxWWc6Spd7fLv57BeMmojuNBExz9jMeUEoi79vLwfbJ73mLHJWDrsXB8Hh9UwSr41dZAZg9",
  "key42": "2AwQzz1Axe2e6JVGqPJbqSMZXjioxGaAhpj8dBMvhuFuhxARojVhj4dyEYJrD5UhuHcYyXS4FrwgePaWjpSApbna",
  "key43": "3s8u2VDVtpN8jDrZdUzfseaR8o3DdwxwRj3P1L9ttX2nRoAJ5wyEgSARnT7mTp3svg6ziruqdTjbXhatjCWPUYUJ"
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
