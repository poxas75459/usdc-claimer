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
    "61hCYPuuwrpJ9kY8LFfZ5GUDVrMiRXzEgGkEPvN8mYUzFxwT6oubM5cPdBPuTEA1uLebHLKDxhuMwuyv84ymo8Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sL14DVsvAKoiEADi4ySJHpT9X4dFqvo4CWRchjYXB5k8KqCyxJiiByrzrQTBp76gVLuZ8ZVTMkTqoqURHrmtTv4",
  "key1": "2DZPJwEyXj1pUcZgxqg4eRmptKrb2KMxfXRawtStmYisyN2xJRXEfLgRp6qetcDn95FFWTLPGZoVFcFqHNKeomHJ",
  "key2": "3wyUtbbFtvvLCraedTy7Nc3WUUzpzEZifnEjGniqkqDp45iTsXvgvidKnTi27Unjd8uQPvLpFa3LEDffD1Nh5khb",
  "key3": "4oE9rTXBgbKFa2jSSducEwnjrNDQAx4wd7DyfSGNGVbCsiGXL6brxsGpCW6xs4YxQA3fx51cFHaUwMABKd1m4fCM",
  "key4": "4vjwmrtvbZJiqm7dVPSdJ7fGm1QzTDQiXiGnpEEBSxxfhhtSKbjVR6WhW4ex9dcpvhHduJvCoivNFTc8q341HTCg",
  "key5": "p22TAMfBPiAk29dkVdrCbu4F3CWEtGkGeqhV72tgj8btHEiRoDi3mbtYjQQemE9yzVEgMNtxUAE5netCWD9Z8R6",
  "key6": "3rBgSUv9w7AD4SSx2ska89TBoUdrkuhMkeLQkhnfHZijSrBuqaGzDBDZx9eRvqwCBDN5LyrKCtitnPRaTVgBtBVo",
  "key7": "nTTvMacFZy7Qr8tp6GhrTXCVr6LVtJNqWg5usTbmjpNuQmtvhG3na53t3FRadvsVSZEEik18i79v1F8tYwTNHVC",
  "key8": "cYkESm8kAHBFU6NcLwP3CLouuh6NXdx7FzvQBuvUtgDKRMQjR3ZstWB7RdBdh2PY2zAvtbZDBmadR5ddazvg8Pq",
  "key9": "4iUooz3BLrtzaRawV7HKRUfvrHnPgDusXSbxcCqqazAh8ertqBeV3jLkvaSnD5LPoP2ymcFN4YG49d6quoWed77t",
  "key10": "4hu7UjkrrnDxoYYaCgmrrb73Fj78chz8vFhaJfVY7ywg3k2cPRFRNaXkQgmhb1BLbh78zcMHFDxHXxL8tAGqTuaJ",
  "key11": "2QnovP431WawJxw6tG4bpmNt4TCNFmcCpaX6v8HUjZg3tMQtZLjqejC8ThuwHdvNzA48A9MqCkXYTqShkqkBKrZp",
  "key12": "41LxUj6Co69BcYPmxntavgXSdXNPZhLDg1YCcCE6GvTJveG25XJAfnXZw79BBSpV94JJcVW27BiXnMLnXGGNy6kZ",
  "key13": "21WM7e5gwJQjLJh7t9v7Asqme1j5ukNYAjeyKRgpLryQdVYB1geFMJG55grwoPoxgbLUiAq5XDyLxW2nUjNEsr5C",
  "key14": "4B5ByrfTMbjifmqitb1rzmndbDUb2VdSsgK42txprqMDpd2RGcA542vmWfobmat9SHqhec3yddUC5ECLioLmTYav",
  "key15": "3nZv7a524LHbk859WdqZ7TbUjo5UWR8mSE8AJAsrFchnhHRBHCD2wwgVyLbqP7vX7xPRC8jUYTG2Lw3bt6KJjDWZ",
  "key16": "289zdN6hzWNJhBWHuuB3FRAT6ufPBKZJzXa7Hot3Sx8SEiQTqUV5taLkKVng5yB2aBX4e8Dyauc8Zhc8Y7SqqQao",
  "key17": "5Bq4XfMetxeMRx7cG5zwqk5FQCT8RQvKe6nY6WhaKiBsbeEKCFavcfYWGSTm6iSDZDGHG2cmNADGCFUGhTkaJKpM",
  "key18": "C1siSV1C8Kfe9NsefJ18NZdRyWZrF9AGeXk9toSw8dsUZcDhqf9BkHMevs8YBP3nY7tFeTFChjupzbna7EGzFMY",
  "key19": "2ZqZtS4v4qzcFW6YmsmsZBZa7dBNDXBsJgC7CVV4n33BBSEzQKv2ZwGEX4AQERupPEfw4eTq9xw398eXabTTs19k",
  "key20": "2rtp7a3zLhsAZvih3yZNs6ptA8z3PD8UfSV9WNqs8bBBDtHjojdcdS5JXh8dKpHE857iW4dFUintNHsSdwYTVnGZ",
  "key21": "5saMn5P6eYtcycoZJ3nE7DTokv6uKX1pFfGEErmXwhv3szk1kSyA4UQRfKVYwtP44VFBMcma4MRw5wYiZuskdami",
  "key22": "2piCu6yDwUHp7DAbnxamjxJ6CwuwgPqR9jUgquERfWqSEp5VngVFKU9BbUYLkS96EhyzAMpn9aDG9aBpNTewKTkW",
  "key23": "3LH4WM4vrZPy5gXSKde1kr8nNQfT2Jwt3mzJPpfA9DQQbUucXmJFvyvQ3ypx2GJvcNy3CeG7BgA5eS8fCpEc7NkA",
  "key24": "3rMzNXn9AdCDp22FTssXt9HrJuPZmdiciv2kmWDpKwzWyXHeDe3diopf5vQAEwup72hLmZbU6pnMBYuzxdy8kCT3",
  "key25": "39jWZW7LnwnRbPQ2muK67PxwNcBkwqkLTMTK5punWmZwv2sH8v1sdppShqdq6wkxmdh2Xe1S9xViBQrEGzTqoWr3",
  "key26": "2rDMK6cjMFNQQvtJ2oVAcCU5HN3LSYUf1jtwfq5zKuApn9S3iSvWWyr1hr5mbJ7a5xQF4R4zcztuxFgJF9kYoSBW",
  "key27": "5sYf5znWLFJZ9NfZnHh4CaSH3cCogmUskJ6tf7SDgtpxqXaTYnPRAqV8BLt1Y7KzA1H6CTBNbMANAv1Bci9UyCqx",
  "key28": "4t48XdhbNvRUaTxBuqQGdp42xTyckjRTWN7RvcxqQGS3Lx4UdN9X9qHPMPN791neHtUC3Jk18m7gS12S27WUYVn4",
  "key29": "2kK2prXSp64hdAayrJsBzCQhJ9e6zaBdYTw5a5D91a8EYeMZq6rAmE8F6NyphaYHGP5qqi12QsmzGBVtHiwSedgy",
  "key30": "8SXnDCHqxxPLpbDDbuYRNQFSMmqfVRU43vbNXGq2JAkzCrXN8617dQ2mCsyubkkkNDpt4x1VY1PsLkBoHvLN1Lr",
  "key31": "2JmkhayHvZkjPsQqLJE7oEczx9TCgsuCjpv1SjzZumfsbb22QGkXRXWMYqYsJeAUjMPVyHWvicHu2aPFtC3Dz3eF",
  "key32": "45KxomiYdjEF74r5ZQ6xGaSnSHdqEiZRHRdBuEWN5KDmo1WArTrJhsaMhkAyVaRf6jHqCTHvTyivWtLi7Qfi4qvj",
  "key33": "4ahGBaonqKD9ziu55G2tkHbksZP2X9CjqDuvZSUX4sVLo6hPPyas5ZtEGs2mZpMw1CLDg3XZnWkkkRpwT8wCzhPX",
  "key34": "4SqBoGfUcfY3vWy5kCfigtbAW8pXfdsvW1sYP8fyYChcFNACnfawT2tpwRREDhBUZR6tSow86STFhnJjDEkiMGf9",
  "key35": "N9AjJPZBaGaXNLyEfaKFEtUsTuBU6Esy1ssj8Niz9wUk2gd4V1ECSK8NouHxxrurFpdDyDLo3YtePqr1h8ospeS",
  "key36": "5AzrsMKCS7i21dcghXuncrwP7Zm4xqf3d8X6pAJCU9jnaMtbpEgy3urKC5VgCJGD5s5D4JQVyDuJRESvBRx2igNi",
  "key37": "5XtyWMzDSz82ZhUhuSis2TTvxjeCjBr6HCar6MPMdQHQCpHhuW87VzCakoHkZQZQDXkJtmxPXeVwVVb464HWW5Su",
  "key38": "5jvZ8vVbwbib4qK7XapcRuCLv2kLJwpTX8eRJBg2XwiYzE782VXpSyDBkVKHccDcasV6x66NP6pf9WMkUkE1nnk2",
  "key39": "5Ynu1TbWY75HiZMFqTaEyitmD5PvCBcvrbesxvdK1Vu37uYGHBCrM7KFXxfCvgPVnWQUKL7K5yZJf63ntC59Cap4",
  "key40": "FEL6qaWYKRSjCrRb29jBw8Q7uzERzBQmfMDJC5vXpfkb6bxZp3Aqf6EPzVgWQASFvv4QRzugx36C1SZbUTcF8vx"
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
