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
    "4M5n4TWqrc5m8V5CmHoNU5mTdf4Tdp2mABc8AmTiQizW4BzjrdsPFiDsd6cVrLLHiZygt63JpWwF1txXkoaF8yPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Pi7TpAkY4eLZWPEabiTnB4Nv2JD71XAnJjBN2Bgx6ArR5TTwG3EB8kWyFYCr6Dsm5Z9gQJVfHHLa2AieafxEBZ",
  "key1": "2Ar3yaY8AHY4P45wFB4tMpAqXNrM5BAHR4HtPEakHYAYPDYSdsrHMQjVybH1r56Lk4gqTQPvZJt2YUyg94TckzBK",
  "key2": "3hvYq8RhvziWi95BtuU3H7oz42njesvSSDZmRqr4ZiH9CErpNz98YFc3Xpr5hHWkQHsfgSjhQcs3Ueckj4iLutZb",
  "key3": "52xSpvM1YJ29xk39Gphevo1rY4yBzbuZCHaYBEY9MEKa6GVQRKQFoQntpehcmviU9BKSgZZ7TXRp3WY9bmVxAW2o",
  "key4": "641jvSBJtPAjdeV3QmWzriA53UBsAJNuzn46bExKodtuj6FyQpEwBi2ekiugHSjrTAJbiM579KzJYjguBh1Ejfcw",
  "key5": "5qmBG2N5c5dJj2ajz7rQtojqVtyUxpv72we99bKpHkf87DdArAUtQ2WhPheXwASgT8DhTLPednZVzNQ4XeQast1D",
  "key6": "3ozBN1ZEudheYzMwogbDkCpYAZtRzLAsKCFzhBh7PwqSRE4a5FubWFCaseBTyoG5fhk9DDPt5VnJyhHkxDidK5t",
  "key7": "4mM3YZfAZUJpy5kfWAmnQfAbpUYCCh2AWNhtrnDacHNrYuiW7XxMkzdfULZkbZWucKsNQEiYL6XcHWLghevDHExP",
  "key8": "3XKoxnjDxquRH1krEQNrfx2iEBe5mK5Y6eo54xm66nSHXbA6biwNEZosydiJWtbZ4MbHHcFqbjpimhBzZS2PJM8u",
  "key9": "5j2at53hADxqgwGiBaFE1gDvSeFVcVMD2P6cqCBtvSUWoH51EMVxupBRR85SNQvaXRfXTr6Zrk1t7cSFUkx4twPM",
  "key10": "5p1SmcJmKGmmupGJXUBVEuxuM22F2NbgbT1NVpsFcRFLWjkocT3K272zyxYFdEt6dSqSsfyuthzatctKtHsWFEKm",
  "key11": "4PQcyqhTa9VKMbGnDJEz6BKbwhNDY8YgRiUK5H6DMCH7fwbb3ANb7ZF2aLVW4K7xtwMj6eyJc7WG2kb9H9hEizm1",
  "key12": "5ZVBbD3W1xLyK69CuBf3nXnKAnkKaTYrZ1thch9n8crWcKUMXZBaHqPEjF6ACbWVsCTus9Dm5mRbKUN4U1ZUqFNB",
  "key13": "5nKdtaGJCWU4tYETxiMeHqnnUjcQbKkYWnu4UJQ3664Jf4NadP3P1LWRE9i5jH4haVhi4uYgEHnfwPnidfoLpUaf",
  "key14": "3P5wt83nc4P9Fg1QqwtywQ2FcqfuQxraNZbpJCYatZTBbwtw2r6UhyDJJUmzDK2ySTtYjzrpRc4UbA8hx9hsAih8",
  "key15": "TfSYp1zbVzN5mGRuSjBWhbs3UUC8xMUuWbT32U3CU8FVHq8j3BQV21PZF3Rs5toJwnhjoFxAQhrQxee7qmNAWXU",
  "key16": "2Eos6zXmgQuT1ZNGarVgjg3a9mJEFJzwzFeYfonNAmUAeSyhDDHi6H7vvVLbXSh2PDtt8QWo1djKr3VgB2tYmGh1",
  "key17": "5spsrwAZR5B7Xqt3jWKcwbcMkqk6qPQoZPaWUPsFLoW3HSJZpECZ2cM2TdLvK9sZhj29WE8Qy737EBDM4zwawgGx",
  "key18": "4tyXxv3y6ohy9weq1cyYh7Tprhy9fTpFKUcv6VFcVS7fFWRxmAzkP8Vv18stZLDhndPWPGfdzUFFACmfoUU77HA5",
  "key19": "5ZV8eLA2RMq9HfngTBPThqcVEEqHeDfNtPgYm58uGjLMiDETdt4df6jkWg9PkSVc2Uy71uHWVphUDTUMMeSzuM3Y",
  "key20": "2ev6hCsLZSMaKRw9zrwkkHNRGjBcGjaYVJ3khkBp8cpmj74VX8BSt6w1cN9LDKUG9eXy7xL1iCf5QxtFX84aa7Ju",
  "key21": "5iZmWt89L6RXvSvnfwtak8o3ugHf5GUKHM5NBqyE1N1naRiYAerWJBff7kSvAf514gVRypSexiBYKSSemrn5GmyC",
  "key22": "3hG79jyTk9ND5NLRYBevTYuomTNuJGgUBpHvHTkq1S4xDArMf4MrQnFngiFJbPCU6twdxEMMCsnXr1Kbe8eNGi2Q",
  "key23": "2hS81iDDUwnFvBhgxsyg7qFe1hEqUn1M93PLvE1j1ZA47pnsKqiExDGGV3RnbgMqs85kPgoumSkcXduZsKSp68wj",
  "key24": "4FHQiXZEvFPULirz4mAbABodhxyVFHMrz5K54e2QMzNSRAw3B22eE1qGJPJPWCMgw3eLFbTqMdxQmPSEjiWFnWkF"
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
