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
    "4rEuqqw8oRZWtuA48uuAE28gBczvNCGo1mTqrTkfZLYjbdxZw7WJ96zdP9PA15FWH8qgm4XkF5cHeATpEroQYHAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5EM3UzJyog7YXZXhrDjEALxtaxiZEwFeTF4km46L7sAR9N7hkEqeFabb2YX3z1gnEL9GpUynAttBpa79LLFbdJ",
  "key1": "4gXGGM1m88kW7ePrBo1PSgULVn8HjZgmritAmniHqm88qVZQZymC7xqiNzF3vN7LTM6ZqFs6JxFQ3tyAP9s3bf8M",
  "key2": "447DNBbphtsazn4cFUvPpnUuNFf7d3WGLyw9B2rAYPV4RppGw7axnxMqqNJYYteSxuPowDEfUq1Tm4EcaEV6D8MW",
  "key3": "2fs5GTHied1nWvwBZs2TYn8pq4NQ57zuijb2N35t7RE4NxWw7BwUpskMkSovptkzN1TUUmnWFLx6EsthnGuyzGSZ",
  "key4": "47w4UyM3QDTs5oeRnHafif7WxJmS6eRv1KnmP1p79yKxUZH8c7c8K8QdYzfcrhdWFtf8hk1cRZBP92mNprEfCfen",
  "key5": "MHJwD2PTgF3JquNK9joj6PGQUKsLyT66dzc5c87o7tHzX18hezTCDeLEWtYJuKtthHoi7N8xPSqFrvVQNKtCLzX",
  "key6": "3k4E3kW7oejRPMyRgRwKchyxKXR1E3PN5s8pDGRpXvi6bNmYSXYmbPpb1FXprPwVpgee7acTa61msLu9MRN4Hdsz",
  "key7": "2aa559VZo6qewPRwacPK1Rs8WCtNEUqpMybQSTFSTMFju1ic9YSoABzet9o3cwHRqoo122YT9MhZd2GVCD71EiqZ",
  "key8": "2TB6fkAVpLzvrS6FoybxxYoLYVwYdshfhWNee2gpfWqPs3697y7fUBJWiybg1XCRnHQnhHAaeJrGsG16uhw2ivG7",
  "key9": "2QLn69ea1HgeUp8rmVdGvnBUrzifA9YoELeAcssHht1ZDMJLg9j2MUVU6YeS6KAv4Zv6miGkYSNHdcqjxAd1fXSu",
  "key10": "mfbfGpPGTKegmu39Yrm9hdBjF5f12aM833mWnvZnE8KKhKFsRW9LbdAsoJkvLxpc9hvdqns3tzMG9Y94QWaf5WG",
  "key11": "34r7sJNS9x9gBZuJiMc9MujigLywRgHuZgK7G7ewWuDZhC5t5TH4G97Vm7qEUDRH2VeP2G72FqQRhfafHVEUWzTE",
  "key12": "4iL4YkAikevRuiaha71NSCxKFu415RU52LfbfcWqtqGZBJ9pTzxwrUbG4Rmfme8krPLQSScypGjabaWLts6kraoD",
  "key13": "VcwWMKg1kmyCruEwV9udTNCKCL8aZiwHg7oFbAuKusuWJbBgy7QuvEfeKg3ZatEfAH57p5p6rGpsw2WPbjJFTyd",
  "key14": "43yMnfaVEDvTCxBVzkPZxYB4E2kfHXMDfxbKJwoGjbhAnEW2owBWeQYkoV6nHYjje84xPn7VL7nTBNaHsJC3CFkX",
  "key15": "2TdTwurpR6Tky5P6qU1ydVjzH9JiSVtanoZbj9k1dup1bUztJPWS4Gwhr9iPmJfFV7K6QWvn6rx68jsriv9vCEZL",
  "key16": "5kdo9j5vC4MqfQtkXXTfKqpXBPGdDYecU56UmQPUmWwaqdBwRzykXSsy4DP5eH4NFpVoMaVdC5SnZtAG9MFES4hZ",
  "key17": "21W15G2krYcZjcnZJQK1QbQeAev4dd5uFiapk2bWxHZKLqk7hYQfX5J1gJK2TbHgRREDP3optrZM1G75ZDu16G6h",
  "key18": "3sjVi4ewf3Aw5pTJun3jfKSPfnBtqLGbxGDxcEcBSNdoRHidr7hmC85wtQpsaS2ztosxmVZtYhiqUjMTPc3pQfq",
  "key19": "2bd5iDHwYddV9Uqpyh9FydG6tQjydigtBpFXWrz48yCX1obVc5AKVPiF3G2FcUAqVtK24LPAzz5wDWBEX8qtE57S",
  "key20": "3xRHfuksX7ciJKrHnZoqjcEZkDs92dKP52yJgerJMt6cbLY5CYqzgBGFBVWaiGPaFULC27XD9YmECCLV2Z8Lumcw",
  "key21": "3ByzGGGFasRnMND3CDYSreW7cULMEwNw6KbZH18tpLxud5KQ8kRtSCu2C113d6w3SDDJRuUTmoTqQo5MW1ZoegAw",
  "key22": "4PrZYzShjm1xM3v8Vyd1k43yF3NYb1KnWgiEFx6JqLLWF81bgHMage3DLbNBXDfq39wighvLdodYwySSG2Y9QHrh",
  "key23": "2CiWM8Et5GuhRPzakMX6hVg9AdZz6iThP85Z6tdB2645tgeczQTRjNNgXDDjPft6k4ZV29Fkb6McGVaoFuWvCsVd",
  "key24": "4i8ZfXJs1bpYnoKQjGHstQ8y4WyyEYALE8cVuBD2By9jVf7mNahm3FWSm6k2Mm45H6NCboNF8KYPiTHvAGVq1hnu",
  "key25": "PWspfrjoF1FT1sP1ab3cWmwhbW7cMvzt7DdhqRYEa4whynC5hBYWh7BDEVeSg9r4uBHgkMvtaHGzmQjpFYWFnC2",
  "key26": "2i2tx4L26GMnPQeE1ViA7ZJ45bGMgaooNSMS1TBwekf8L7yM5d8iNxXCc5pAPqSz32LGQXaaRPXj4W2kejo93dr5",
  "key27": "2m9R4xS5peQcWyzUfd4QgPhXuViDws2hVeaJnvmyh8ffzVs19CgwHB9nGR5T6PxrpTze7jidcvRaHZn1SkyxVLKx"
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
