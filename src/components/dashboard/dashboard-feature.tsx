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
    "3wrewe3Mo95ZoQRwY4pxD8iSRDsUXj5KQ4Cv3muwJKuVYjDgStPSvY4kSoMzEvY1wxnUwT7e1dj3aycfcguKfHqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxkYJcRERzJoanjQGf7bCuRdCdMJHfbf9Lua7tMDNEUEdyC6Gvm3iG9Re6oMN6oUBAURUJk6QqBwovduc7vEYnh",
  "key1": "3fTd8KTpuYErXbQydpRP9QTu4241DYbw7NnVczTCXjqCx4TURoU1qU8VmobjtfrTWDN81HohNr4qVrhRSDmgc3NM",
  "key2": "2gdns5XyQRfWhhvtoQjXg2tD3aR6N47EikQYRW3qY28iVRQxKqYeXAS53tNewXfomE9XKFCDHLKY2Tbfy91xvVVN",
  "key3": "3ci3PNZD3T4sYCXwjEQBmcUgJwcmJvujnmgK4oTYB3KLFA8grdYyYjSMKtGvnd6F6tpDwnva6NyBnppyzZfc73RY",
  "key4": "3UBTxRFhst8RtH72mZXZ2dKRFVNQeAcLYeiCtKdvZBLDPmuCQCCbSz4rahrJcxBZaQmjJMpByX7E7VgUr8ToJSC8",
  "key5": "NYWwGpXhtHctsCtEkwBJG3XuqSrGuvzs9ruByLuiXktnZgqQ378dSrAwdrtC9Mq2gRe4LFeqGVJR3UnkVqm1C4V",
  "key6": "5TUXhQ6GnUbK3bMinVr9MxRXKWMVXXGwD27WgQGXegQJ5THp82D4Kvztsw8xkjr2pfC6cAgx27qT2DJF6ezU6FnS",
  "key7": "2wEw11udJZoLz8UW9hnbE4W8PqmiSGYRAPVEqpHpPKt8aQhbJtMnSMARPA34tEyoQVCRh19Y47cho6ETRtXyrF8p",
  "key8": "2pVePcdBDk49njr38GnzrjVd32cBCz9YM2wtj8QuGtJzfJzbbT6V3mVhJWJ387Gf3viJDKTZtgb2rWXPjMF5vjkD",
  "key9": "dAe4ztfG8cdoA6gy3BELPVaGkiTTXv53TrVzwPetQPR5bVbZ1Yoq1PQaCryHX7HUAc6dEVGcLoWJmP4xcqSrYVz",
  "key10": "psYyNRGcwQ2Ec61gPNCujENG61UPmVWg1jv38i2TcVjvKQVBCJMvGry8SDXrRwVXL61unDzCKVFJDBSx5ntRp9u",
  "key11": "3FCBTsdhpBPBL7Dc6LtVyGov4ivXsJq3HCVM38YRTzKAGDdz5fcZCF6drGJvfMy26A6xJSk4BGt7FUoh8yNnwnGt",
  "key12": "3CDExZhCijhiZhTM7McVZZdBsE4fwemLoVXp8JEghNUm152RWfYM6sf1dNca8d5V5Eo9yuCWBckB9hcmW44AsUrX",
  "key13": "2sSdJ4ubGv5GjoKgFGas5ReEtca1EJrTa2VgTyM6eYNEHQvjPwUZDNKqFgq6dkENqmpeqUEjUdP2b1ndUHxyhgo8",
  "key14": "5vmukddd1FmsiBFb3Cs4hFUzVqXfcJhR4jU8Ryo6C2M6mvTCrb6yK62WCZ985aG5knusvq2JU8DjgKov25E15Rzr",
  "key15": "4TaGHjhyxFUSrut6hy8BGeDs6WsYPgApmPK6foQast9dKYzJMRho4jzcQhMx3pwmHSLzjd3YbqCC8X5GUzLdFZuz",
  "key16": "hfUBAZ1i8Nu9vF4YaLkcAd14nN1scngGPCcJyuHehMwNBv7AsrVx7pR2bstJ2jJ74cGW6EXErvpA2dFBC833mzW",
  "key17": "4zmjeAPtWJ4gJ6F9wLTaXgqAXqLASEcXjoFddoLqeG2JVaAaSoDF96Qb6yTUPwzWPswuewb1KCtYJ9W5sdVLpULb",
  "key18": "43p5gmsQJ9GKEGMqUjhHAsWoRrYtsEgSTBUAxZ6No58DDR3B96apfo6EA5BY5CFDZvVDYNzY11F4UALkry1LThEH",
  "key19": "GQB9rqnkPViBXpBtNw1JVazSkT5XM7v5ixf1MxUh87doFLkTpsDSZoYzYs7xp6jtUxd7JAQbtxgPQYNBWjvxeyk",
  "key20": "U7CZkK8DYdwQWDivEqZQdi8jiddgP7XuW2eaqHEg7EhnDV1vzZekGjJYpXCCj83ZaTZBgn5WExCp6NKEfUAA1eG",
  "key21": "2K2LhbVzPBtpdJqizz9YQjesF5eDfFy1nfLoq8W99f8yLGp27pUXDeA8n6oathnyssSqye1kyXFnYPPTVzaRtVAE",
  "key22": "2j2dvAy1wa2AUMJdDocNKC9VKhK5JvqhRA1tmctuawkBuEomazkht5x3cnV11H4ynNGQUnFLQSWamXzJQXYjqEqw",
  "key23": "23h8W6rC2V8mXBpmmHHM43DmG6voiUytne1dpaaiLqJknKTAD6KMHV4njHa73hm7qC7rSAjWSNiFgJnanxzdbGaE",
  "key24": "MVXKxWNXigxkRwuSFUhHaJETUqrxo2rXNdNfy95tVAEkiqvFkzuaZnGcGL2F51ZKk928Q5ft5vYPEiSddAR3N9y",
  "key25": "4ertRDLjjfZgxRR1cHHC7B8H8pBE6DKADBZXqoHe3cxeasrD1pXvu2CtGeH9NsfgFhtTBM4bBwdVywAiMiNpKoaU",
  "key26": "YLntr6PF56m6MeEwaapQ7s2qKuK6p3UjM3YGxJaTJUj2JGE6gQNUn1gyAq3TKg66mmbQsfgJt6QJiESuRVr8BR9",
  "key27": "49XtFWqjodHjkWhX3CV4SrEubPBN9n8pRuGWJigwBPZP4V7F4YoZdxN5xjoFZLAr94LUDV5zNMHgKwG3Aj4uzAma",
  "key28": "UuDfgkXBQfy3fwFc2tGf4ayCL9eEqQ7JGcE9hmqMAQasV1j1qAiTudPojcsdAXeUPSoekQfLJYygRDizmkfXnEw",
  "key29": "2f89knpS7ZcwwUHWtFsHiADsmmhnsnLzxguiRCdaXWfYp9fKt8xbgnbeow3DbHhY9rF8cTH6NycR6CxkRDYZBWwk"
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
