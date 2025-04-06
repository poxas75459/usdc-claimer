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
    "PuZTJ9b8RqUa7ouJREVmXSNGtBKMYMGwrCraZSFFdviK55rniWcNoACDzbZCUMRAJUAUAYFp621ftSxw7q4mtUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCwTEwdTmn3mSsfPEXbTwbaqoVuBPG1xG38cUzFqBiUDKaY4HQr9muoyDWrgdq3DGEUbNu6au8fkBpWwEPNrLrN",
  "key1": "4uMaAcztDcYbksKQ5nCqLKyLtiTjNcyNRSVuRX9cbPBfVWEXSHSMrauPswFjY78EFgonxRMiMHDLPxQhpCHZmCbK",
  "key2": "yj3wtCtM8nXGggjc62XyduJHt3qqcZ7ZdVCYfynQQ56GJzUpPGz6evHrc1SE3jgdK5X4Zof8u5gB4EEx7KTrR8a",
  "key3": "2NPE3RpnzWJ4TzvJ6XSMuZbRvR8yhdrqWNzWaPgxJ9H5Qnt2BxsyAAD4h9CTMR4qjCWz9QNgJraW4zYwEj3HZCNQ",
  "key4": "3owjCe6gjH4YHL41qoYzcCki8hHb1xL7m4Rz8qu5cVkfCftT7mWxXA1JmdCu2t5e4ekPYBbPgxNQz1HYfaU9h1oa",
  "key5": "2W2ZD2ouGJbanVojRk4gVzjJknWPPPDrUDCZniPsUqyzz6pTdsjjizYZvpsm7PZD1w631FhkBrkw4icQzTsuTGTx",
  "key6": "3gM4DBT1c5AR2Q3cxBgg6GFMbFwTdTTfPwZmRaj6U2fjR9gChNzCdTGcf71TuSrnZkrHipSZaVdQHrSfe6ri5nXh",
  "key7": "5xwZjKfkmFmUuPBHZEN7wShwRPZ6LbUqK3F7DnnKnPLd5BN5BkDGNzDN1YbpuiMn6D8T79XRauGomJzyCNYcDwWZ",
  "key8": "4JazGG1vAUBBGAve6gpvaQfDqZiTHiJjgzfVKAh5DJL5EtD9dsvs6hoS8H6GRNpCnZcqDHUgjXkcViz6EW5G8aej",
  "key9": "soExGshNk2cCWjjBx5ePWo95xSu9BFfuo1TDgYFazwf25DMHARL8SwKYQp6iExLdVZP5UpcSButxRXK21GiScaa",
  "key10": "4dvtNq2onVWWP9LPSHYGSwMxonu3ZqxYKdHzcPjJLaBN1ByrbDBWULGrFZec4vD6GeYzS6SKBsrxBDz5SSBPvk5J",
  "key11": "2BQQ8BRRWp3divA9C1epLMA4GjKG5SKQP5uwkWmEiGMjZN2oMrZ98anZWrpLzf1gRovm15hdgD5AwNjuN5NVCwXT",
  "key12": "5RMMsq7H87D41nWuaw2PnQLwJNaKVmJKuQbq72nREba8ECXtw45dPLHJBakMbpPjEepjefEkx28qAnb1mkqMynF",
  "key13": "4GnMkRSn3Uzfjr9qqhb911tPeRfaHkTuew6k9VGZPD7vDi9HgoA7F65ckFvUdSxYuXoBRE3hkb32jJCXD1jjkggB",
  "key14": "5xsdE4r7F7Pb85tkgW8sH6pVAABYBYxckTrWEoPVkDRLQVvYRVrSQUHqMXKUsJ3CEL3iJkSZsAqQGdqn6uuwC1hX",
  "key15": "aA6gYUp5eBpVJpjxEUS2Qup8YqGRfC9SdB47GewdW4PieMue4YD66wTMgt87rTqF1kyavBTT2DWxds1tHDwGkn2",
  "key16": "AK8SLpfg38QJEdzX4U8QJu7Mi5efWh1zTNVGci3thucp8pF2kU51uXPWqqbiAEHTtcKG8sGdCGJtX978Q18dzrT",
  "key17": "5K1aKgHtMsWDEiTeCEd6NHJkTAkwPBojVKYzVULyHuwTvUyQqYxCWfEsowTcaSnKugLVX5cM1r3pmDfeV9oAnDH6",
  "key18": "3X2uN1h5hE8P3yENoHZVX1CEPq9zvLtiT1AAgVPbyTCtvm5bCKNQh9a2KuogSHchgGMcZyWqhNdKb5dATQNiyoUF",
  "key19": "3TmwXhK9PiSXQThWJfGL8SRSHvgjotmTxhidBybbr4K1sPKfHdaVMscHHj5m8e95TgDWE7XDrr53PLMsjkZKR4Z8",
  "key20": "5h1DPdy66rAu7edwmVHEcv36az76dUqXQ7pHDTZ8GM1gJyrYGcVMCBJVQwWSBhcEo9dByvG52rTopM4R5XLoyFW2",
  "key21": "3Qs1kkRf95Tf8aKdZFo8XroWyyvnfixxT9x3RvnSTPnFExbDotKSXbvzayNtU6JPFkoyBGbaf3nLLMAyRPwoXJSY",
  "key22": "MgG4U65tQ2beR8CYcKVYMS2iCLYPuawiV83HBnJEv5LjygJUp1xzfJmuyLDS5EKvg4iQQKYQrkjJVBqp7xCdsPi",
  "key23": "29Ffe49cdJcY1Cf72sR1896fddrQRCjidbgQGw5MxYvhfEiySFKuZCWhTr6oGLEv15Y3JLfmuYAcXoAvHEa8BQVG",
  "key24": "4EYin131ym96GB8nV78bcDnrhuj5PzrXEgZXRutRQjvLkich8KnwdeEqz2kgzTJ3Sag3vgJWWugKSsmdofkuatFm",
  "key25": "PjefJa9saNW6gNRr6W9XjdbacJ89vZtpNUxaadfU1AFcktG72t9GMrrBEAixeiy7jE5v9AV3p9M1vsNa3TtzToZ",
  "key26": "3aGA1VkFAoVr5LTu4iT1wzi1WcFVx9jNkkisWf6X1R2bgujASGV8sVHFroYVWCpizixGjComg6dgq55CjXtowRsM",
  "key27": "42vEmUmQeiUhjZopNXLV2mFkKz5vo8dTj57s9B6s4LEPZTfmp59vtpnLyXqDQXLkBraL9vzE4StjvscBYELkAKQs",
  "key28": "5WU82tA43iEAF7sYMgLN4kMRyhoZHZ2hUb7NqvL5we94vnePtcHqDvvtZEwAzmdyU2TeX3WZexx1vkGexwtKfFih",
  "key29": "4rCUE55v1gijKcxEGmmUibU9Roq5AK1yfgK8daVZRAH3VgiNyoSNNqgtBogvWn1gzL7vJLuk7Lr2Aszf9HZU6zDN",
  "key30": "c2eNhbZHPFmLNtb7idmq1Kqs8ffA7RaESDd7sVbSBx4xt5cMTX6MSadKScXQXAbrkaF4nfkLgfR4nrCWE7ETQ3Q",
  "key31": "3MHDsnnoW4vBrfi3bS68mNfLULgUBbGyWv9ERE6DTcM8XkK4bsx9gMZJQV1Kiru86dBzd5fekVK7uUgQzkk8hdiv",
  "key32": "5D4FRRYKqRDWdsSQ9uSG6nHNjK6oWhQz5xMHHmBub444CtGzEJU9A8nL7pfvLSjR9yPqCBmWgk7ktiC11EYv7Xct",
  "key33": "2xMGbVs519wTNc2siT5om5LkYYGGHa42bWyEKoTysU1HKGyN7GM8J36dv6dHc2QMUjWgQVxaifKXpQUPQg9UeoE9",
  "key34": "258ib98JEs8TomfNhw6AEW6P7fmm41vHhVdiJmE2yxdEu78abfzZM5yGGmYpRDhHY6HFRLKkFuo8VVXB6FL21Mux"
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
