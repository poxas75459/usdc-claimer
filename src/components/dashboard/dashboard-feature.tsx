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
    "5zzWLRGaF657Xw283a9zDLoaGA7vup2Rdfzgp4aXML4n3Nz49RBzjRcxtUA4TAXc5UJi79q2psf8h2jDeRMa4SSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzxGdNTrRuPG6SZAHJMP1YMyc7apgtKbLcGmYJ3uamtdoavSPxTdmGbnRGLiYKoNczgqg2dhB7zB6kPL82QKcyw",
  "key1": "xGGD2N68i1eub29SW8T2eukp1XQ2nXpxVzAjBSrRddqAan4MmSEzJWaWu7tK7u4jqbBBiUdx1DTL2AsuHGz6qjW",
  "key2": "2ien6KutkeqJVNujiRuzQSpcyVT7mEaZv848do5scCM4LxC5dgENAaQh7gmZRNFNNuaqJTCVkknKRNW8Gt5ymori",
  "key3": "5YeZkgQxhDURHUvGqbKq7HRhRFJmLE6vNXmXjSNqMfjG5cLN6dwGxq8UUM2mJokGZd5XZzHMSp8FJNogCxBjMvDW",
  "key4": "5GN9kFCYb9dx1zeydMG6SuN78azhkrtwtbHDq383ZKcqrVq8emN3mMfCZoTYV8R843yg91tH1qThiqySMAWGvPyn",
  "key5": "5QAFsU63rvo9WpBKuLYHXYWWzcewEwwuiYCfizCorMVC1uqRFGfy57pdBUJSaHUR1tgkFnf5Bg6QJVsamABKMP3M",
  "key6": "32T6tqGfd2NjE7PMYaxYSRVwyZAtDGXqGyCHsFiXdeCNk9E7T11gTY6XZB4YcUq54dGvTwiVW6ScT4688uXgBAL4",
  "key7": "4FmyG4aYBAwXFTMfjBhbg7YiKwtTZt69iS4TqBLvzb7FPLVwFjCDv5uFu79sJwJhZT2P8nhHrtYaLwocXrL85XqU",
  "key8": "3UeFqCbHrhUq9TCcY9PzqZMp4pdZkTdjcmRhFHpXc3AwEhvv6eLFAabRNDb9jvBxWod8wPNEA1CcSS8MzDUutcpN",
  "key9": "5SdmrxoXhuVAo9HgLEArzPCxrooMaYP7NdVkeYbdmDHUhiA5L4gU5Y2h7Qbs9tbcMtoxdrDnisFBGzBfXgGqPaPZ",
  "key10": "56ouTCBrKRNnPD7ReYrsRm1kPmPp89znbAn43LDiTbye1peEJSTWUSaCuxWGbtDvBqLTZf3zWGQsTFRSkVZVX4vL",
  "key11": "2wnpKvazNubbSUJLvUwVCDzQFSDUHdRxBM799df2FG5AaMfLGY8M3jhUqUgZkSdrPnJxP9GGtyQu6MRh8xUi9r2B",
  "key12": "2aexAawsxSQu4LKNik1NFKHjdbPNH2kLyLxuyBBvY8LFAZptipCYXMJeshYM1CxtJd6ZZ8xEE8jkhT44K9BXDtMH",
  "key13": "5ep5K2yb1Y3mhAxMfaMtohSpsBNBNLeoZ5Kk5sgRpQxUCCmXSEPHFbxYAKBAeX6ZggK596zRQ33SnJAWdYTMhDoD",
  "key14": "2Av76cpuCCvcQowAbnmwWE1DJisq1u49L7gBdKqLaimG6hxK9xwVwSpXPW87hRJQ9zdQQJFpffFZKTf2zztZnXFB",
  "key15": "54ZWaptsdwFgGWzoX9zkw4QzZ8zVfhgiHRWtJajunhTdTGUJGrZt6wwpzt7LRt1SSVBJH9JYW8Z8uoyxCd8DyftA",
  "key16": "5QLUwqABmmqKwEgcDLY6ZJNeQDhWwoQYcJwqLNiTBi11RmCks5ga2CRiaZANrEUo4WZHhapiBKgw1dMarj2yfdoc",
  "key17": "V7NYXSsjova6shQDKqxE8nvKFmiXq7gwGoXhwahcD2aW4dtQdJmRoHgj1AFdv1AYagvHSoDxpvP7nhhXeAGvDyX",
  "key18": "3r2L93XwssRkM5ARFgJAP44dQhdFiupJCsQcvGQHpumR457uYuoNGMMwv1u6QL41iVHRwwjSBoaQyVHdzWNQMQod",
  "key19": "4covWxcT4TXDJRQrP4ewcJhAFjkqdwAv7mRQCWHiWhf9sgqoN3t6WVE5C4FyUvnjKenLSsYoxage2J4XEikbqAVE",
  "key20": "4jZw43nS1x2a2oP8tER7xegcxnjn8Uy2WG87S1c3bTBQxkpR5mxQDXdRAtd2DRhpV6jwViFHxNNRNwgP7CFmSmmQ",
  "key21": "4AFDXNrXMse2XkuU1eUxnTLPvFYTd7GDWXxzUoM5PpYwQCarepnpMKoiEjbCvzVPgZR3NwapG19bavFho6ZnMsCc",
  "key22": "5q3BDuJ2gPhAxn6Z4DrCtvmjrFKJA4eVYdCeU33tYxKsG9KdYVRM1Bkum3d6H1dS45VAjb1X6gqMzYe2bGykZLLZ",
  "key23": "4fTa1FsyYoTFYoX9FhQgsF1QowuyFEWwS7xSsipeUG1MNGMfRYzNijeXVpkjFP7sxrYVLWiyvVwrRQ8S5aFwaJPQ",
  "key24": "2R9UifJ2J1633ZG7uMJ4M1UBmvbp6dPhf1HGSFgCqpXYCVenqnCxZeJb3RPWFLQwdLhCRYcGQYhUMtNgTYSu1Dm6",
  "key25": "4ahDaV2Rr7wSzd2kJAhtpf68bhnWj5hNYZmbUTAzUyk1HCvPiWwYemW3og9ZSdoUGwQm1aNrqY4T6Y8Rnr1bCjmv",
  "key26": "3CrmKTyirpcgCZy88bSKVHYsLEob9uTuGRLk1Xo6wDF2Gfq1XdcQD3YFyV9VoBrmjvTDTJX6fdZ5JEZMMqAbCuD",
  "key27": "5xGqt3X3SPPLhYMPkx9Lka7e1PL8jyCDWcHqtNzVk61yHL4mnMeHZGcYkbSZohpRh2i1YH5VyQQByJ53e9QyCAAk",
  "key28": "4PxsBkZcy4Xcs8aW7a8BQS83bhefiidzsjbiLurHkJLpKe5SdgC1qdLGZVgkPsMaTSQe5LLSNdkVmNuyQHxhytyW",
  "key29": "5wffq6BYVEpCxkXq3sgBYYWLfne3WUAz7daXyHM76DVwYqxYDEM1cLBNkir8fcSYW88QV38oRdiftj8Ff9YZsfLS",
  "key30": "5jjW7mxm4AWDtSjhSTtmBpzaQ4B7V7HoGA3DrraxShwjhXR2QeMoCmnJx9b4pYcp4EDFqPLpmtdeENofSaWibn2B",
  "key31": "2zt9DXxYhZBY2dYtj3pbyA9TW2BL5cGW3Xap3dUqkWMv1Tu7eub1fvrvDhK8sJu8NUrGp3knfondJJgwTJQ5bfZQ",
  "key32": "43abmU31ZJ4GcUwmza3LyL6MVnBJKoSJbKpCjFyE9bTJnQeXiadFBLwMmojQb8E1njTfCLitV94gbvwcu9bU9Cbm",
  "key33": "2FWVCQ4ukkH8P8hWYKMqkckhcN8npwhQZGNh7fmgAKHze4XmWvecVvMomE9rWWoCaREnMFqiMsyoQjR2LKiRrwqG",
  "key34": "d8wUhGnnd2tHqhoiDoWoLr7JhxE6g2yLzzaed5C3ogRf9Jq5wKZC7Qyp84SHzgStPmoU3o89mghnsMGfvg4FWJx"
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
