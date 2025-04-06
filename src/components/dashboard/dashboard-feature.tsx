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
    "2foWbDpvfuSScPd27BBa3bsGudGEfrAao1D3xEzdVx2KUtg3rGXDLdvpnHAL8JjJQrdeFcYemUSqy1FWGi65xHMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9sRTLbFPa7umichuFnkCKZrUb8jajjLzHzVrnJD4hcGWmn8EFdo67RcXgw7MTFUKxcgxdEJgmDVYEH7Hx7nQq2",
  "key1": "2S63PjohbjSi4ZMqy8P2G4RDuCSsUSqH24ZXFdL2DuwfsJDaUFgfqfUdL4oNbEoQPWSBBT5wdMgRJ74qzedEChfV",
  "key2": "3pBGpbQLtZmsCjnoYyF9b2Uep3tfwwTgS7skBvzUyxXDxUR6NnQGQeTTCoryfPEMQPHsC6a6RSooKm1v9ZdFvShy",
  "key3": "2CDc9sqAwJYBWc1QFygfW4yhzscwzPvL7F2BkMu3qzDzqf4Ce8Pp9w8pf8SQefcHs12aaogs3HqfnjtGtxBwKm8T",
  "key4": "2c2ST3zzeB9Ec2qdBdcspnfDzzhHfSV9KHY2AUxz6mH4eHfnnZKhqYm4rfaGAJaNfN4JDzesMffCuo35ZsrCfmPm",
  "key5": "2SF1ai3zNvQPef9Py2BsT6BPxmUu8cg5Zg16CvUBJDeptiTxNhsaB6Hy1EVoSVHbRfguNxMsGB2Z3daU9RYaXHAw",
  "key6": "zzsSmv55HmdMjQintCPBu8cKPTXrRey56MzcfSmC4v1v48s8vg6sEY6zi4KsZieGBMgVEdwvGMX5BBJ5dwUASnB",
  "key7": "5q235EK8MciAytoDaTerZY6Z6awYMqw9nWXp7mKJzbP5zZ4CS744enKGuAjDySuaTcXKorc24K7fFABkLoBe6SUS",
  "key8": "rd3AqyGNwPPUVFTyDuYxEwKjYrYncHrFPSm83U42L4arjEUtnaUrawQayrBjswfSQi4GoLFjny485bDyy9Fp3WX",
  "key9": "2B2Ssdk7kc8uREei1UPFQoNkwCAdv3Hw61cUr5SZYide78PqVcx2rbvaCPYWGrAcG1vjNrB2vMz5Zxmr1XrnaLXw",
  "key10": "288e6mxStQKNPeLgpYfejiKo3gU1Emy7gw4CV2FX7Z8uznrQqt7BkvVY1Yaspc2mfz5a7gMVycxAfPdJnLq9xpnc",
  "key11": "4x8eC4y2zkFtx7A1mz9S72JhkXRzPuQHpcSm78Gjy4bmTABfvyqsUYj9VNr3m8AxpaTUDoeqYD7GXPUVzGjnWfa8",
  "key12": "4tPJv5Cga1GPbKktXug8KLTHt6KBisBsJHsX273vYPWyRAEsvQfEjbc6ehtN59X2heFygVRrEEJoiFo8zg2M4Ziz",
  "key13": "345ghZiiQ7G8LLAU2xZW25z4VhBr6QZkHPDgCbinqGrZpjG3QECiVEqG86PwLepxK8BXNi9faAZmbtsR6YW62QX1",
  "key14": "5NfDMoorzrASY7v6pg8yVJhcoxweYAnUizsLA7CGdtTWkzgtxiKT1bcrWcq93eWDZ8mRgQNF1UX4Zw2txoRERLjM",
  "key15": "2HFGFEo124Ne5fTQCQ2JePBu6dXQgMUx2VzgVocagAnms72nQQ7rw53pkPNCjE7jvWWhDMSYtEQLcXPRBrmc5uoY",
  "key16": "3RCh5o2e7rYaLZM8fCa7XCZc2JrefXnVhrePBG1P14yxsAqWbf24Wu3Qd12ppbmKmv3MjeExEwsMD1jSQBnVbEj",
  "key17": "45g5BV2NwZU9TYg8Eyy2e6Jj55aL82udR2fjDhaPsbLaML5zHafvEdVAnCUqNKBMnFhVCzpdDKQECV183S3Rg11w",
  "key18": "2F9v4M6SJQM18vjjDuGz3mxAjAJK1gi2HLaMDnUS4GjDBMiE7AjWKcc1Mry5S71pLzrELwo77aeffK7zxczgjCGu",
  "key19": "5oBruni1dfTcgpoVkMcPXTYs9Nt4Js97a4pfvkbcXxVvP3Td3oXsjFJtpFfPphnmBnSfvZVD3mQkbaV3NFCofs1h",
  "key20": "2AbNdRfXZoAaJ7d7Rwj34RfhKc1YypvWapAJsumFpvEppbgucCNk5kL4xNjYUcPAWZkjmkrYMBWVgQPNBpRqjeEk",
  "key21": "4GrrjwtY3RKL3B9qwjdguSkc84XpPqaYVoWe25KjNUBPoCDH2AmnfaAGhaieijfMesUbmvVT5um33vrL9jBRAATw",
  "key22": "2X8MweoxEtDNDb6VWtNrLf2kUB8iezGQzdmNrgtFDoFfeWBjx3etM9tv27tJHoBTL9r8fWBZBnSa7VFt3DGEEYpg",
  "key23": "YGQmCe6UYnr3cKsDeHjNTXRFj54m6ytUMt8ZBrm1YmX14cKvw7Nhs82MN2i5qdDBYkGEqtb9CA7pfjrArZNRRRr",
  "key24": "4pWHsqwKCxv1rntDGNr8Q5Cj8YuiGu5yA1cWBEWwmGKBHLyjSPTCACmuSCP7CWbyz5p2jBzNjSbcvxxZcPp4reXA",
  "key25": "3LDEHxLypNi7LR1uq2xAPC75UwfwFFrTT6Rv8isCKwJoXEi9CwT3nNNNhevB6bF6PcGKVCXKhq87FU31AYz9ToPg",
  "key26": "2N1jYRmKpJYJPPQTuNDLUq2D8ujUi1wRLJRqzRiKsqmtVmD5Dr7ZkoiZVf1tXAMzQMFt9YpQVRB1EQsohPvdSmu3",
  "key27": "3HBJw35Jy9Zjxarn7rdtuatNjY3VcC4Qw3t2GQgdcgobSmLpqMpD8JoU8vcMf1hjuKBf3nt9GaG6oy9UXj2Ap99h",
  "key28": "2GixhStEgn2KtC4ALPJ4zc3L4qnpkLUBxdvXjmj9Aw32qX2Aa2nWaYmiGFyiQog3XZGjB8WXDcHGEMjHAGSAwr1M",
  "key29": "5NyMMH61m9cTcgm4f5e5b1LkhG4y5b93NiypQExMLxhv2xWWUiPENkF2j6HuXLd6AZEQ2HEMrMjFsGNUt9UVAEKn",
  "key30": "4kXvSkEfJBRxLcw73P9QGZZm2Hd5hdF4iEG9Z5bhSM9MqvrNNQFEaKAqLbTdt5cePMnKyLLh2aXUHpF3R72ozg1c",
  "key31": "jgEhxjfcwhKixHZ4tbj3rDA4MtXC2pfgZKPNTVQekDdQ625iZXi5JxoLcp5i1hSTdjmsk7WvcTmFvNPoqDpHe1k",
  "key32": "2JYifDNjGUCCfWAWPmwKz4wJPF43ZnaFgN4gfu2L96RNzVtz8ZAQiy2HnooBFDxAUYWhoFY8LmJWT7EnSQKFn82o",
  "key33": "5tiTeRV3HZdjYhHWuqkxkoa9rUqHmgWaeg7XLNqqpJvdBMDHwVDA2Zn6HPgS46hDTUMHZqeGEesq5PPPRxkezTkq",
  "key34": "4UJ8zmt46qn5XqGRkMquUjP5rruMM4ZWsVCUTPpJS3r9C1zBMRTg7Lv2oHHbvsr2Uz5vXwXQE73Sz3ucLMCnDrLv",
  "key35": "5KinWX2BMDpvEDN5kSKZx7CiZbEvkkcEP8g7BnMoEbQ98FjGbeMLYqgP2v641HE6krtHspsP3s9VepyDA9KPfNnz",
  "key36": "37HfYLKnfRqJ3NAUmdrYvJJacA9F2GbHUH2gV8vAufUCoDfL3DWAVVm2anmgZj5RkyEewNmyeFuwfGZ8DutfnDn7",
  "key37": "2sPCk3APyTrPtjXJm6UsaUAVwBipGXJVzWRbNdBK3TYg67iVg1Fnmxr6MNzn8ACcqJQ1sQzNbuZLZDYWNAmv4MiH",
  "key38": "5Gzpim7Zgx4iQCQ4XnifDtkpP2WUxAfkUVA2gv1ywpj2mAExjtK4VGb2BKnRsU8bCJuDtWVQ5UG6WjvpAhMUK9VP",
  "key39": "51kk4cpRhVun4jjz92M1TcEsrwirr59F5rYzP3vkunukzAR9krHSEudW8ZN5Vza46d9fYZ5NJeUDQAo6gLoP79rU",
  "key40": "wQkhetw1b5PNt3EX2CvSUuysE6mnUZq84zKmhx28u5zFP2KAZR6S9jCKWPnzMRrX5439spmmCRTBpp3xAwhqdem",
  "key41": "2akideZUjYdKw4JZyRAHYrY3cwCK1J8dM81c7HoQko3Yd6gaBiUMu9GCK3zhym6djF1tYCBhXnMZbx8kV8actTDv",
  "key42": "3p6hpz7LjUHNhGKa7c4fvPdukD43TCE8195WTokAtgR3mu5EzrxbUSfYYoAYyaKRwgrc4jpCtWj6TUp2u8mTwVLr"
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
