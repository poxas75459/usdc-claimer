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
    "5AXJUVbUbctWZzrbMYeHBE3Coiciirx4iMEW8pksNX52NxWfnEcMDeiQphGA2UrRewD2rXXaoGtqWgPU1jBKTwxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAXpxAkrmvE3A6DatYYf5TSsZkAkeQFmRrgpisBQRXLgoE2HThBuqk9HS3ZnfEbVV6AXGbN8jeo3fLB1mUApfD7",
  "key1": "a1sUAYpgQKQfy72MqZfcEVt5AsVZJR6vV9LExGdVsfhteg3NC5TbjBvbkFuwy3gUY6dyb1TMNxGKr4z12QLR3s1",
  "key2": "4AoVW5omzCEw6YNb1yvpj7jwzV1X7fXrj3eNjDaKZHJdmXBg3Y4yAqrdjNtMhciQU4QkXh8jC4E2Lcvr98ph5FHb",
  "key3": "5eDFAZDyknYJGm2Hr3dF4hnU8JkPaY6CSHX5r21HpsesVMmsVNodYGkPQwB7kzAVm18d8Pcbvovq2Hp3kPCw1R9F",
  "key4": "22XFAz2rGsYDWMtJNw34mZcpviEqZqDXQckhT1REDkr3kgbwtXwN9UcYckgPXGwHL6SmQQM7cCeMwn2PYCWAQY3F",
  "key5": "2ZcD7MZBkaXH8Zc7fYDXAvZY4uGh7ESr8sFuoZ3vAgXHoh4xEa4KEG5dTBpjwjfuKhDgk6Gk6FccuZYULcaSvWUU",
  "key6": "5mVp1Rydmr18G5KD1F35chKp1Gg2Uay6uCdLyGMaxGfMzcw26njPkp3tq1FSRJKKFPFoT14Up6Ah69CDtjPBGiHd",
  "key7": "5Bud7ZtT4CbYXbTjbyU7Q7ispT3aSYCTdpaUjhTxkJJdFGaT5em9JkvXMX8j6Sa2z837YJ5MNuHGQiaGuzvhYcfd",
  "key8": "4ojv1MgRDD4AoGMoEN6bZJoakitEiiwr4YLs3upJeexaHEJAYHUunaryXjib4d3RiyaChopys1X7eyRZK5x6649v",
  "key9": "3haM32k4xB33WVMC7NjBcQVKmXD4kqtnAQ8qVWJa7qSAtoJyaVfo9cCDJeejS3qk2qeU9Q6teF2SEkPshCEQGyTt",
  "key10": "3qMZ9ZbdkyrtU1KncTqzacTraTeaubH3ppeR3VVkerJhsw5G4Xs7dT8S4DHjhjdHWz1To7RGGn8c7bjcj4WJm8Q6",
  "key11": "zLhu2x4GhVzWAcfXyfC5XAV9cvDz5GVGUWovbNerXfw4jXPhs8ZnQF6TkiDGeGbwB1r6XviEiH7Rub4qvFWSPyL",
  "key12": "2aKKLCPENogepYAZpfs4GAqV7GMknUaVjYtpHAZB1frHUVw6bSQyWxWH6Zr62rKaF7v4vcybBQ4i4q9kmFqKxYn3",
  "key13": "478VEsLe17iVu7GHGRPtRytR6XHQ2EzZHgEjnKcAXTC4qUHV7MjzrkeP6pmSR28fyh9grpUQbiEz6rUhdUCAXA2o",
  "key14": "3ZCdEL96ykG5AmaAkTLWhz9S5eeAfP2ehLtmZTyCt6euhPgrxDr8XA4nomtDMRN4oyCtthHMBh1LcN1sJqc58czU",
  "key15": "65ZRu5Ugq42KYX5gZ7crLqFCQvZAXqWncpBcQdhGsJpKTaNTn3g5aeU1ficg2XStkpVboCziyEbzZkpEzqP3v3fP",
  "key16": "2tJNWztZs3QRwgZgKvUsoNMaNh8n7wLgLYy8fq4vg4yGoEcghFrpw5kvL5kP2S1Q9daz87ewtw5u69E98Kdf8Kth",
  "key17": "4L28JU8V3i1wCRepyGmdUxoMRewD7RwhYvE8vrsMEvMBqKa31XsNNFx2axiCnivcEddRQbchwdC7pxPqi9rLBL7U",
  "key18": "5TqRyRuQ9SXVrXhn8nw4cxUNAvY8dAw9c8Y29MGkhJHnL4PFfshHgZurXkGKBh1ABYyLHz8pTnVnySfmZGMrxnyL",
  "key19": "LxHHFYMdapgyK9FDLkmsizsAsAueKS4jMfKU2xQakttceM9stHXRRjfkWtewaU8vohgYBSRmosqSpSrpbyJ4MHD",
  "key20": "3PMGKheXez7ERXoC6XyKovSJW62e4xpbCgfo339oa8k3fvzqBvtRd7fzmrvLVyfXYNqo8NYssQPegEWVwTKhm3Px",
  "key21": "37YsHhTh7cSTwZLVqgDb9EVMtMt9Jffoqz8ZmLmCCRBTAFoX1qKucEe9gJBDo8v4zFJXguQCgcAp9UnkNrwLT2mh",
  "key22": "2cq8t98zwMuRMwT77pNGYTR8nLmcEqfj4HBcgqzo3e6Eu9yQBEkq5idnzF6N62baebJ3EN9Kfy1LxCTcERKGvpYf",
  "key23": "2mV65fcM1wUZ3LGekAWL8HZUSbFB2AwZ9D72PAJ8ztdF5664ohYCz16r6jxNEqn1GFwrKEZAjtAzXQzJopRqVv4H",
  "key24": "3AU6jTqiW2tbbv3sQAgYWVypmug8GV8Ju8oRhMVGnqQ1m3W9z2RHFa9PGD16fPy3PMeuRv69okfdrXsLrbThtfhj",
  "key25": "3PmyQuSq1WsaKeqWM36QaFLbVUCkrP8JZohb3GCtC97j383UGKFJnJCUfVBfTTqh84BaHobgaHY3fNATQo3oZshV",
  "key26": "FnkGUtLNUWdGCBDBWV255ymsQq3MNwAN96JvqCM5jDhx4EiPyhUZTm7wDBXDdyvkifb2RAy1DkuyWbT2yxvhFuk",
  "key27": "8ZchEfcfWP8zdtn174oujXM4k6mRjBsQVqGco7cLBG35dZwXzjTjAo8YVGBVjBxZMQ5FtWB9yFaYVfbzrquF6AF",
  "key28": "EqrAFsRWegS8LbxkCA9mQbTdVCiMp97GoHgonQx5mTP2DXKjk97Kf4uY3pnBUgKXjgDUVsK3YUqjHW5FUQSb8jB",
  "key29": "Uv1SnsWw4fNgMJs9npVEpqp9LHUmDeNM1XDWJDF9mJKX7XcVJaxPPnkTNBe7NueDuzMZ1PdBmrQGsk7Q7NKG8AX",
  "key30": "3zH9Y3yDUhhZARmAxSkLehMuCJP6bFuvUwsfoFBrFGp8W2mss89YhYuhp442WdPa5qUs9wr13LC1YcvviQu4ipsg",
  "key31": "5c4oYnqAjiW9AbUfD4bPXMrFxQviRhN1GJHTyTQTjJ6KAyPNW8433nGVAMKnTsNNFk1sPMwYHFPQmt2CZ511wFUc",
  "key32": "3k1XqPNocWmgpiyfJrQSyQrMCqxjVmDbv2hgACGhgHSddEhdVNFUSyBoFzZqf4Vtbon9EQQoA41ySpQ3GQ9mHxXR",
  "key33": "5iSZDoebJVAG3WJBV4XLhLA9mUFRYCjerwLYRYEa8zzokub3EBujb8281mNY9jmTjGQGc2QiEvMKKrShvqyQgSoy",
  "key34": "y5TEjc4tSvTdXgw5vHwdKT75Dor7G3AoxoPBK4n4hjcJEY18CjL41Ad1RRo5MDZDFosQER4hsdzAJcZ69BNucrV",
  "key35": "2G4ewjCapbV7TVVSXmz3sHNnGnPmUPGk4gy6NV8ZXC549EvWRT1MQSbEgiECNJqM6E2UB2FNcd9pM78X4H7Mdkfg",
  "key36": "4uCsZE2pEnureZYMj81HFTMmwMCbnvxgE1TfGTwnNvftEpDrUSusu7bMkiftvaNmd7xKDTUiZYYE5dXXytM5CZ97",
  "key37": "22p5ryxXEhBnQFq1ju6UWbKes4XZk6m4iAddEktJpovULbTzHoLKLhC1163iiieqpRetNzwmyW7HUpXaYjWEyWR6",
  "key38": "53q98XueAAgkut8TNyyMNDbYXKX8XYwMXag1XovKgBAGNx74QAym7VaHMHyj1NEJryHrzC74Mcm83wYE5UWjCyye",
  "key39": "2SnHKjJWSmo9VeEJ37ojxMSBsXnYw5MZkEh9XNz7Wff1w5BTdgkmiwWgae5iLe6Fkt7aFB5Q3fZLvNUz1pkEkzf8",
  "key40": "BQBoNgucVkMny4cr6FiGcmKK55KJwXdi77haedztrUsjpDxoNN4AVG862uJowcpUXo7tmwANwvui9h4sQ8EWNVg",
  "key41": "5JvtQneV3xwPLcsjufSFcV8oKp5r6DNNZpBKJcKSyQZSNW5pUGxQcLprbnZyTRd54ryC7MU5VXC4w6ewV3zTtwgx"
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
