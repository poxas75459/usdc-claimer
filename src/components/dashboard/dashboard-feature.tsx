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
    "4UmPxTNxYzv8rE7FrER9USg4RDxko7HKGewchJsYeTRwWXoyZGFBke67v75hrzoSpKWZat1UbiQrBa6GdHVunL26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghZxoPkUebJn1HeYurdE1v7inGmjGzBvw1eP9DuuH7q7qKpjib43gvXmMxZRBaDdMq1s5wYADMJNJAVywU9GdwD",
  "key1": "4QtS3AcSsg89YgPAgCTFMjCm127EcER63cqn6iZhMyC9Bi8R1MU4KzHrhdPBv7fSxqWv13AX1uXFMSTz9gDLrpc2",
  "key2": "3dx99nFCrhmq4yW67fXSxfS2e68ipYm3yLXntRYh55uVhvQBDRBcTagm28oSLwhZ4FqXZYBRWECNGdcsvq9m4yeT",
  "key3": "48sgMLQzayCHqw6ATyrggknqsbjnjNpsB77W2BT8xqpPYU1WU1yeQzGNMFje5XuAQVBjx52YHBGRgr3YGzNvw6ac",
  "key4": "NYMoiQKieS3UtfxHMGCLd5oowX5dVA7qcEiTqKcqJheigh1hNQidpH28F4NCuPt9N3PP1bxrjJXqvjWyt9oFbAH",
  "key5": "424uy2KYyR1TnnKHpz1G9L6NpGGsuw28ta1Xup753gM2RA27P7RZL7YHq8TQiQc4aABmB7G5821GTyHGFcYRYZPU",
  "key6": "67L5nBKCwypxzr6neSuYUjev5qHVyLuVC3JS6MF9ouMANsqUFepREagjwqQCG8D4CVUiY2gTQYUiTpPYpgyqcNcu",
  "key7": "5ZuVVsYpHjsmgDWWJ3b7H91SKxpDnEJ6sVHpWhzpPYdM9G7WTHXZDubKb5Ca1iWEinjvaurM8JN6HoEB4WEnbqra",
  "key8": "42gzQ82WxPMRreZtc6eTbwPBTDyvner74gZAyqSmM8ZG5LHQ4UnpPEuZtWCYJMeRVZtPJ782K5Bjmfe3cMVz3kD6",
  "key9": "4ra6SfhMzwsxLJNfR4ypENP9bohpcbQ45Q5FksdbhtMKfW3qiopDZKSnRiXwAHBY8eqymCSZdqCwQQ6VwDj8tyDL",
  "key10": "5ahy6KRqGQAGhTL7j7tAA1316D5X4jmcnL19nWTWi4CcsZ5E3diXCqwAk9XJfduLVAfYvyu2gb64DYqJQezDCgDn",
  "key11": "pKbKoh8YjWMTun1XV3yypTeGzS7UHHHT8KAXbDtRjpiowqQmVZQ13kZLUWMNQM5LvFjLCToL9Ga5AUWGsAUKvhF",
  "key12": "3TZB32m8L3h5QrcrhgMyvhjYVeJrxiPnJ6Yw5PEYf4ygjk6tYtDZsp227NhYo7jQRk8ijWDCvJ9ZPV3ifyvEtCE",
  "key13": "BC3F9T4RSPoYYo3xFCNx7fqP8m1u3e3zKRhX8kYGVAGf1Guz4pdaAKLwH5Zrqvv5MmbbWvdWG1qdvvLcSczHfgt",
  "key14": "5ofnLhP7wr1WovrVta3BUxoUKYTVYjuXfXfqAH49PicoivWZfC27frt9pJ1fMU6d6FPWWaMMM2L5nJSTa9x7VgEY",
  "key15": "5dy3Ubgh5kZZiLRqeohjY1XDNSkmxDaveiRC1xAEGMAgdb83T2JPQGX1VGoCPPzAzcoWZy9qTrr6Fs2hsmXGk61q",
  "key16": "26ZJ5hPerkyckmdeCa9wpfdpZCHn64eiG3tVJ3D43DwEdSRgVKLoYtDybuBqqUA8ywoqeH6RvX41nD91eaS1HPb1",
  "key17": "5BGJz3rdx7pkdTBZbUAtzpY1Bmwx42CqxH8zSeFhdVxkPqWkdLvFAmb23Tf6uRshbmSWEUuJQeqiun4M58vvJGeo",
  "key18": "243QQ2RM9oE67PNzNBtCTN8rk8vV1zpW6kx7VdQjn8T6wQMHXrhsnw5qQ2DywVVQcmuBACWFP5nW47dCkh9wjcFR",
  "key19": "3BrU1MtmjtYdyJYGnfRTHb3yJtVp4DDJDfLVeGaqypeCYEa1RppLYgGU6zuAVJwoc2T7NLVeTwvDHTgoj6Gw4VUb",
  "key20": "4HepQLR9P2JDocWPq7kCXzJQ9Z2UQCdoLbNGtpR2KzuGXthWysKF93JZ4CTXbPvzZhL18xXxc89EdeZuMpFAJt9Y",
  "key21": "5y7R6TEDDvW4YehGS1KVD1mNWchsJQdyASzEhg4q9YhFRvMi3UdPb66fS4hcVXEAsF4Mv86fGas94TDjhpgt9sYu",
  "key22": "2kdNMbVPTJqAKt7tSYpyPvtdKV1WM9wLgAeSCr5hEBrAJiaX33XwWdXJSyT6uBakc7E3RUbGKynFRnS952GW1k6b",
  "key23": "2n455eDtfPQnQyh7wcnaeeTrp5BarWEACxt5NfctcPBhbDgjKcA6KzBuRpN8dYUJojFnFXkZWd3M2xummxem2FN2",
  "key24": "4FNcoADb2PPdWmFZMS3fa2nU2kthKhkg8MJycgkbWX5CDhUfNPEBHdESSw2AfKth2wMPVPe1ghLQ1q9wkrqyPH4S",
  "key25": "24D6LWEwr7awfw1iyaDTLgho9qKXSF5C5tgmXay2UWtCqY8YM33nL3rw91jHwMg4oTfp6qJ95uWpGpLGm8C5jvQf",
  "key26": "4nuYuuxor6yqDr4LVx1Kkz9mp3YfNgiKUa8acgQxDKpxzucoiq3J3dEHsbK8WU9b2jVWmFUVaU5TUsEP8YzkbeSS",
  "key27": "4pn4W3LpMxXdcwpgSqugdzUQTfPYMZHnn8eCMtLExy7qQg2ndPvwBfyy4YLHqFUDQLn7ziCFsKv85CdQFBaQypkh",
  "key28": "63e9gAxNXWqNLBUYFmjAFfeUpbCHrc9V25Zd3W5qCa35ompoH51d5qPXgf5iGDKvQCgXpGcLX9bbAvE8y94Bc3VF",
  "key29": "My2BtF1rxLZua5ufJWTSKCDtNDzfAvvscKHJqjqLCtrJkwjb3G9d6qTRFpY6i8aUQSncTt2gY9Bo6C7jkDJGubK",
  "key30": "2qs1vYqrRwUzskwffXxvD3LhSRUDmbbZtrLqSbv8A4ndydS9nahBt9YdPYueFWaWHVfPjUwVunDE9hUDko1M3fdk",
  "key31": "2fN5NQa9p4N4GNeQ56juyhbWkiQLmhPz7Vb2xWYVBr4aHSHFa6cLToLTXsBLuKC6qLeMkxahnJcTGMsi9uYrDfTa",
  "key32": "24B5QzHNE7VHEML1dHL6R2iyLZwScjriYnF63uRro6zHD3kzjd467JYJw1YAV1sjTMAC9sfVd9z97L1DjWX7u2cR",
  "key33": "4tPRrwPTGYJXH28HW55kwSXS9DrAq4evrZiZBnY2RNMnY9BTyiTvtXLwYsPAu6r8snxwe1xSvVTmoUDE2a79E8xx",
  "key34": "4myfGiG35dxCfHtbN6XxvmvhX1uFcg2T256wjtPCkFAnJphUonbKMxS4oH5Vb6Md77Pk6UiLwRAZbCCzaWZmnVy5",
  "key35": "4HvDQ84DkGYbWU4bRkYifQQwCSGAFmtEVhB6mRaiqWtbuxNf7vt9FRdmAYUZTAYfGx3nCeFLVfAP7e1v5Xo8hLw2",
  "key36": "2SiUAdstHJmV2obLBRi99ZYotrRW7wEvYBH4qizfinZuKP8cBGe6sVwYXgF2v3p77AyeR44gfjqT2ioks4rjwW3A",
  "key37": "32Txio1qeeofujBvAx2xHBXa7io3GKFnB3V9uLrUMyd1FqwjK611vJpnUhiMwaMt1TWuX7rg1qxsFq26HpSo2BEB",
  "key38": "2FMf6igMQbmNVqw5X3Cj9TFGnmQ4F1Q5PRmoEGARNXjDhWQAcsAbkf9JFvpoirN4ZLMW3RvyaUhf3fpZErPMJoSF",
  "key39": "2xpKAyyuaJUhwSBpcriFDdWEz1wN7NYDE5QjtE6jVgmd3Ytvu1oAHxScpehjGJf1QcNtSnasEiuQcz19yWhPjPZK"
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
