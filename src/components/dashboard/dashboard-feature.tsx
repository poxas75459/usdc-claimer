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
    "FqTrxBSn7JiafH7RrjedTWHPcVAsDTHwkWx4jqjjijvkaPrTyQfeyzGXh9Jvr7ASz5XJaRsjmnyn71s9GB4tAba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGQgAKnCSBySvpxAneJLPxWBA57xm5byTYNNcWsYC2jvoYJeNqNaxkQNGgryMZGHETBqeDmCUCcQ78r56w1PKP7",
  "key1": "2MVoFTnq1XaSXYAQxqsqrkkhW148hvuHLbYtdCSe4SpwCaQudbrwKnpL1ypjJFNGTpTUKcbd6x1ryvBSer9diXam",
  "key2": "3iPWLoq2VFJWXEVC8UgVrsRAY9SHyDYFg76eFjoT1ipddi1QZQWjTHirQAdw5BQ6LT8jUsFRM3DxziwQ5fJ5FfFN",
  "key3": "pmhdP8Ltjp2DJG4u4encCCtvqamTU56WgxWyKZCVugWKDHJahz7Zfjhvc3dBQucjUbmuY3fQPwCsDDwe4irRXLk",
  "key4": "3mFuh4FmtroZQAjDQqZmTwZLY9noDkk5PoYXUDajexCfkKf7ypHvj3E7FGA96WvotDLR14kvRXfE3u9EMEtVVEV6",
  "key5": "3EUJsEV2nPSZWJZkZj8KMJ6QqYP2ofGEbBmzgrbtQTxRfp28w6npwDKkD9jG5YTuACLZLH1yw6hKyqSAVwBpfrMK",
  "key6": "5VXeecHFY6yigjvQTnwYhdVvRM5iXku9EzQpzA2f4Gw9gUUhLwDCYScRiBigb2YwqJwSyQ9x7g2zkgmzJQEhJjTT",
  "key7": "Vxz35bHqjARnSkaMR1vd56KbuTpKtFm5vqXKcVHghHxamPqdaHqA5Bq6ftZwc8ZRmkQhRbN3FcgJ4b8NrMfCKgj",
  "key8": "4vtvcJa4r9gWfBqgJfee16y4jZ1g674ci2THDxkdT7rT3B3XCmJfucgZGyz8YqpMUYYf7bcAh5SfQMwsr62fm87p",
  "key9": "5gzfgViCAEp1AY3ACt2aPijJPkRGtzrtBwPWr2DLaL4waFLhNp1ADfJRiaXoEhwdPCjiL7A8wU9FmHij2YAAwG8V",
  "key10": "28EY1AsxN5mtvTY4bXbx56uUxan9MXAyRTSJtH1ofoog2PXtXbkdrk88RzB3QzbqYe3wTpP4N8vF8J8sBQ6aLfLP",
  "key11": "5UscXzX1RXJbdeG2KZ3hDFy2BrWZLfBYncfz5y8P4LXi8JBUX4jx5z44xkidHopg9yoSMtxkzY9fpqgHpdaC4ZpA",
  "key12": "2ozHzZEHUSpfXaxSLSiFhPMSP7BHJjThkP1pTnYKSaHCWSJNQ7HRmQ8XD9nUZwPn1F4gmaewyNU1UzySYj1uiP3s",
  "key13": "2u82bxeh1DBJ8Vmrz1mnpoXGVYw2S5hxfgsvwaMuixicYexa8Hy8Mo4Lz4Gt72GPT6J6avJpsn29cDnJSMWcT6sf",
  "key14": "3rGJUbir5JaNSYFvqFXfQMdFAEpjVgra93xcb9myVQr1uYsdg68sHT1sxJwD93APoq47wMerb8yKrJqtpg9CL8Yq",
  "key15": "kRhoaDoc6oFMPG3F2LfhRQc1gYFQLDNe9qSbsXBoYMaardvGx5A71P2QWwtBGF7sSxmZM6YtZN2SqPJycsMaap9",
  "key16": "4ewz2qaPG6mky269SeSWyDVPQ9DoHRbLPvWpz9EUZf77iRTxnCxvZF7z5ZbqFwmBdt5RyYWFhJZRjo7McJ32dLgQ",
  "key17": "3DyV6rQPqM6bPzPFmCUjTHwrySeSHwSiH7sP98zjKTKuyAGQnjuB8XwzCyTP3F71kHrCVbCazgFVJtmfuNjks8tj",
  "key18": "4fvSCd6RTGNDvuTkc7ymF1bWTMSseBvqS3bshQFNri55jY9Dro43ehP4MQFUNJXPEmj2vQK5Po7Db2UY2gFWTwmb",
  "key19": "5ucC1e1BU1ADnZenWxabiCXnHijbqU87JbVP9TiCpxUpRgtFHM29JX45gsAMQDVd4Lp8qQPWe5TCtH8bMvLXfXxK",
  "key20": "43CT9wLLFXPoqdsMV6dLQGhuAx6kgPCXX8kvRTcnqY6TKAfnvMee8rhsCnMLc4ujGKP4hN2i3BXbsoH1xFDNfT36",
  "key21": "VPcQX16fonRcUhMkwGp4x2FZcWtcFRfNkKnZ5chTr5bA1GMyAMrFGxsTFf2sBWrz2BkHvjYRku94JMvX3mo1qQb",
  "key22": "4FAuFQ9QA1dkz3jfJM31dTt7VbxtpYhwvFMGb96e74GvkZM7WckvkvyjvDTiaozLSWYszFCv2F5mvzT2wmHubfuB",
  "key23": "XMQGxGgBifJtZWto3HjzJNwc46QEmoHFzKvRsvf8BqNrUM7tUjAx9U2L1EMhk7wYrGGHUzPgAcnG7XRHVw5R4yZ",
  "key24": "3zDtLxhC4drv1MRcWHbyraqxaSe9JNCx2CMf2nQTSiBbzLvGW7SbpXK18xWXxEPcABTsEAgCd8KgjBwngvuMohur"
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
