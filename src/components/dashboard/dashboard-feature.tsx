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
    "56TsL1fZ6jjND9Hp5PmSVnm7eXYrVanYyH2KY5bgCzwGoFVikJPpkSJGCg2YXN3He1L1gfjeSLx5jsu1gZKQGgbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kk8L9KPL8av7Gk9pQA1JQ3NskEtPyuZktDkHvskZm4R3GnQK3faLniiT9RmX9qtDeoDr9pM9bA3TWGou3s6CFnd",
  "key1": "5HrZtqYaQFKrbTRrcxq6DvAKMmRuGYFFh2geMGarAsvPdcAMnm6Wu1wnazS5PVFDN3KnqPEetSJTocfvjffvzwEe",
  "key2": "3CD9FXiLH1hMsNeMgWLQHMyRNpv5mYgEEBbeQqGkuL4s6jkhHHvM3qGNrqjcXgw4k9cDJJXGrEh8Zky446U9nPyF",
  "key3": "4pngHoEYpfMeXkfiPYfjx6CCsuzckti7Mn4mMEm7crBzCyhwESufmvJs7nrNjw4ESaF785bH1QQjgfCUq1BG7KeN",
  "key4": "4HkNkS4en9GDLEe8B1ZB8GxU8YCBAuzQoGcKrMXGWwQTxLXzDE9b1u79o2kLMzLou2CZ1Stk7mdRBXgBAEJukAKf",
  "key5": "Gep69Mifrry1mdjFD2eFvuLmNXaZLpkGm5jww1JAwwcgKbXjuKfseid1ShcQSEmDUrHyPQ7GgSRdkKrPKWg9Ffd",
  "key6": "23V4LWQPKB3DCbd51wYmVFBd88S4dAXjuBa8GQk7v1znKspokuMg5Nt1isGmetYtAsW31DkUTseNqL4QUE9WN1Ny",
  "key7": "219sJjLaGH1Pi2rUBBhFUwYEKYoUy39jpEpwkSo88wpis2GyaEcQUmZVx45eNTG4NZQ9FuCCqUpKtwR2L9V3fKV5",
  "key8": "5PjFjixNR5izHCfsbkBswEN2V4fCYyWd18YvjD2xy1KgCPM4fpWBaq8NMA2qjciqi7u8uQ3Fgg2mKSFbGVf2Lb4i",
  "key9": "47thC1xkMRCMh8xL7rivhQbpTf3qjbLtqrV7rzJNv6y4bQwTKyvPoTPxUNWzAS7afapYjsbvwZ7w5vowdYXRaA5o",
  "key10": "5pm5jjNyDQenFkkGmUg34XE1dPc7ugauT1NaZhVGdDBRpUittzPPMcQ2tyeY5T9KUE1pp3pCuZh3JUFAdPqgpF3Q",
  "key11": "4v8P6JsUy3k74JyjseCHXVLvwPbncuMUxi5QeW9AZ412acHRjuBw3BdCr8fKYKa8z4oxMYW7ftBsa5WbnYqaa3C8",
  "key12": "4UJEHrPqXnLcee6RzMBsa4yQLRGSDgoCJSHgMM4cUvEAa6R1RAmohw7ynhtFejuN7QQ7qGg5vLSm74vqLQBHJx9P",
  "key13": "2sce5YzSvBgQZknbZY4PjCBQLRzdQyhuqqmkjsoQ9kcS7xEkfTag7AHEriifXjRwsCfRf8Dp19mx6T7KJgYZPNNm",
  "key14": "3rsXugD3PamMBs18KC6gRwCWy7p4WCmfQTwQdBWWD6xDuQKFmxcsVcRfCBE91DJHrRTjW96ZdCVJR31uPdZFRrRH",
  "key15": "2w4J1B5QxznjAxbw8WVki68yn8b37m9dA45mFgCdeF2BJ37v66AqWZxTvks1qufxzhoPJQfv8WQwDmkb9zW1r671",
  "key16": "XaoiQNgQtQTk6jnXpm48VqtHeKWNd44mWQx8DtAHktGc7XjrEFgX7cFjEZYqPXLqndfDQdhf28r1r7T2y1SZ6Nj",
  "key17": "5ivgssjt1xy7qAL4dSmkv2yM21SMGvTzF9yw31QWtsWXGbM7WbJovS12mMJ5Pw6jz5pMYA3ktA7pdnQNBwPEoX6C",
  "key18": "35CqJ13PDgkv6WC2rpX7KXN9yfdiFKZZhuFec7VKWACfs3aSurfLxoVDXibQkiLftfHdGvqFWGhRWj7hriuzBRmQ",
  "key19": "96sRDUdTUez9PDq6RJJZ4LyMPwJtEC2hM4Qo69aSoVDTDwfgLB9Xk3F2oRqTs7bRb8xn41jDDx3zobvNgwSfpKb",
  "key20": "u5qDujhBsbdNg5DZpUw1Nm6FXXWaZyPqhbjRf85f5Qmt6aX4oYEEYhMTK2Tdv2ZmWzBNwMg8zMDAx23XtwQJ2mH",
  "key21": "5eGgRVJHwiJR1C53eHyCQ9u9CevSfybX9ebjGVW7eWvDnfC1TmQFck5XVHrTtzzjafNvSzH8naw48m35DSCcrRDn",
  "key22": "4aqFnm7E2JJdFDAX294k2aAn1NjzEwh2qQupGABswoMCR4yBrq2ayi2iFyXiYHiAgGT5qwisSwNcNYUf8DiUWgHu",
  "key23": "jhsvtrZYVYCFgGHyKrcmQQuVSci7X2g8i4fsRa2hudDbNnHLWF4kiT3c3hFdMYk97HhzNrnyfBYqfz5u1j3P4BV",
  "key24": "4uyigFCVNZK1Z9cWMLqnawDKbwqLJpoAAfjwPqMD1KwmzcPCiXxn92rHHWJtyxFzXqTm1uVP9bVtaPRwFwsbfB6B"
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
