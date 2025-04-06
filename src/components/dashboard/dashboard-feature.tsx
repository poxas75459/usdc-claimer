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
    "3MCSAPXjmUqAay8NDeNxdCAuxQpEBSSGucihPefKt8bLqvP4zC2Y24fmU3etjGPstfJs59du1B6s9uAz5LtRCg1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttQKpUxeQP1KHitsQDFEPM6duax9X3p1xoJxAzf6ihF2b46ipbjEMprxcMSJfmKTXKdnzDteNPUFwb9BjMeBZP2",
  "key1": "5L2qvdm7854XNhnB4yQ45KWxYpxSJpNtLzdxyELMSimFnfmMwC4iEwkntt7h354Tyh6tbaeZA2GpLKvTf5pvh1h7",
  "key2": "4kbvroQXXjwtvN8RyQF3BQY7XWfRPbxGvtfhVJponM48YXEHoGF1hhx9Sh4itm1jFXqCHm2nNVnq6od9d8aGJjrN",
  "key3": "NkM7fJCB96QuYYwWX1E9PcyaMKJNj3Cb1CT43FLvZwTJrhgnFX2ko2S7xqBuZp4zc2ba5HcX73bii53CYsjvjfL",
  "key4": "239N8Jjw8t1K3wsaRoashdZQqr9A1zs9RHRMz62oHKojRpECZBqU9kctbaBgtmEGZXipxxPBaTWsWcqXe2cvxiYd",
  "key5": "Hi92E7LfbpxQ8g8mms8jZ5vnZqatA1XjaBKi1j2g5oTwSwtuYv7sXCo9HooFpsj3yKHvhpTrqJ4yaMtRxmkeC5m",
  "key6": "3D33sc3B2ddrNfetGZcWRGV4R7rFE8Ay4vAEB4MdFG3zQ8gvHrR1Uc7D9gw4PyXq4SZwCZbDvY8KurYpSfRjgdqF",
  "key7": "T5BjqymuC9dXsvuSh5JhtsPKkmmNRvssTFs1XeQmXBMn1Y4a17KPqUQNQuuY391cvQwQEmBQLRuxbXDY2JHDnRC",
  "key8": "3W946UVhUp9iGzv8fCRmTSVpCcMf2CYkM5S3cYZX4ParC6wG3ztQf3yfUrTEHy1TtgT4XRxuHquk4yi8Bv5anrBM",
  "key9": "3ag9Ry3k7u8z33U1XSKsmYEbKpFn2zyiK6SBsfsLRDoHA2Za42qYfLqhdNNgvs2gv1DWdHY59vzTxdWKZptQDa7i",
  "key10": "5D4vnMazxP2kPGjYC5X58h4FTRg3U5Wa4He8V7nT36HGJQLtLsowgkCc2cvmDFJjT5tryezm7vp85JMJkjZWy96V",
  "key11": "4MbKF8JJULJXTWFL6SDhLrncVnLYKSnkzgm2cXegrWGV5tf7hx3sppwp67LP6VC3Goij5nCnicm72xGx9w67qy3Z",
  "key12": "zuJizLHAA9td7VUjkkWGi2cxhN5NKqRHg9GuGZUNQ4j5aLgxn1R2qBr6x6mXtYy6pZNyWNdPjp7eqg2wLtZwtfN",
  "key13": "4TmbvTWgXMcjDe2CCzV42XqPrHJ2EhyPAZH1DcmPFfn7cwgUtHct9P7Pv2bcjmZjZuxRnKWqYStFZkw2UnFteMWQ",
  "key14": "3TU8jmPhop2WYurfL8K747NHJ4jZkjA23yQsH2HP8KbSEWFZY7x4w1SW1M7Vy6An9DRCWLLgSfRdJCd2aHfXaFfn",
  "key15": "59c6QYRtaqwvL2spAeymmAhwaBaHesAuFoaDy2TdrZqWsKYq4SvveJojMFHuQ3wzCim6yTkXxGs4Hfq9zNTkifXQ",
  "key16": "5gi2bMoRDHUHJRJ2rUmLxsncKSdE3hdBgQeYWFbyfQQF5Gyn3GSgTY13Xe9ZiymYHvnSGKu8T6auvvqX3LiZ2HQU",
  "key17": "65gztPUkzwATBgJmEw2syXmg5FhcsPHTMqqeWefpwNfXvESyoGx3SqRS4UjmAwcrysfTTuxVbvCAr8FuitNCPktr",
  "key18": "3g7r4GPQYNyTf5xJzoEhqq3odcDfpGsVc8fLhqWFqMs8gQg3RV1z5Y4waWaUvs2syiaS6EDSV2XwqoST8pGZyP3J",
  "key19": "27YeQXA37JvTEjqKuniSQxExLVnPZQj8q62h8yftViaTHXSjM4pjiMivMbz6BAAAxHFWXVzYDnDzfj1WoXCFhmQY",
  "key20": "3WqUNVH1AXDQTgnzC3x4SoWUYGfF4UL1fqjtdp8MCcAiqgtHZ8tdgoCjQr2nXimBTCXhuLfcyhCnJXwV4fngq4DC",
  "key21": "3L8efeWeHpNvyGHo4SrHcbJa3avSTZMFaHxnEvoDx3Hs1asNCoBhNWxMU2WFcArpLU2UEjHDcS11TRehxyMpdynk",
  "key22": "ZtGubsVHKg3XDPyXt3initQeEJ2gbPi7iLoZtNqoFJVK2aPd9w3J5DRX2XtwV6Q6m3HVuJqLRvrv5y8je1YYyjQ",
  "key23": "4YNsE4m21gEHFvuLPP3Sf27JsXPsjYuttey4dHRrST1z6eH24ZMoEt3VaXta64UrDXYoeZRDA4rQ5MeNPfPSui5k",
  "key24": "5jyfqdHuZu2FRMYZrTGjTZH6F5ZHAN6nbJmEUC3eM7jKJVmcS4z7rRSn9T7xLwn5mEhX7SHA2rXwrMdpWq879xng",
  "key25": "5pkuivc3aZGpL47bg84vqXKqnoUD3GEk1U2NNoqXyku1PTMvJ2wMQ9HJSn21RLM1Q1nDqhDDWuTCKEVrdoceBHYa"
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
