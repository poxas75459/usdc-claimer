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
    "3ktjBUzbyqADkFGHnBbtuWWm2vYQcd5WjVfxBY2aCW8BHAqdm664vPMrcmZwvJNh5AXQqd3gEApDHf3XG3SANw6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39j6XD46re7ZLmBxEuBeiZbwSJEyC4ikPhj8zTa2vfm2ryvwh64Ma3rh5phk74P94YQdMQcvEVsPvVqxBf1qForT",
  "key1": "3mmBpRQ3HCvia6TzPBdh1yjTwpWhgtu4Hi55YR4sjkpP2Bf1ierGG9gH4eLH35w3QyZgQzmGDYu8oYTFNVi7vxLf",
  "key2": "4wALfautFzhL6ojAJhrFZ34dyE2QrbGPtc7S6FECQChgNmS1B8CKJPEjgq9u7pH71jEgMZL4RGr7UGRVLqat6Lyv",
  "key3": "TDygXuCMSuB3yJTx4tXmSSzigxwtcKhfdhYfRWo69N63RJ4xdH57yemGFeaPoJTSj9ECg6taFpy2sMsay5kp7MD",
  "key4": "45kRYSRWJfXtAS2pB16Ubz3UbNKbwsB5uyDT8oBWaWGhJNCGMgVEAXeDUAgoAMmPHpfbmHnxRdabxruDUv71uWDG",
  "key5": "5oJGBSWG7URMBUNp3rv7ioDFodsQLFazfQrUyRAbkN3yVckgDMGf4mfPDGRifkRtC2c6xiogeMxec3in1658uL9T",
  "key6": "4KEHJxaBaSRe34hT9H2th5HJ9VLGFRSg1ESrrMW7SUaKEPUWywJTbn6nvLsjQoaRw6af6vwEe2G9QULdE4ouATSW",
  "key7": "4CeJN3bdNv9xdjwxJp6XhE5PwAZV15ZfcT6kQNiDsTbv2tLgHZ4zoywmLdAobSLravMxYijmynR89CZpXt2LQrzR",
  "key8": "59267WkrKoM4rMnPx6TFndxzrdynBS8kU8WEqeEBg4NXgvrCDWqcC1m3mjPXAhpYqmRcTiLNcXh8cd6MNdNmufMh",
  "key9": "5Ekn8FDvdXCsau4o9tz14A47PSa3wfimt45EGNzs3YSmrswh4WLDaqkSKcbCq9cewBayxXGjzzRv3QLwiPq2JAtW",
  "key10": "5nu7T6RtZK4i3egf9YTDLVUN1b11CETrPa4kdwahjww2ic5yKZp72J7heoH9UWDFS75LXtKzMqvsDiBM5F7cAtUn",
  "key11": "22Hauzvu3SZL1tncPCRgmZCitfSxTZszQ9Raq7PNMTzpJo3zzc7BCUBfhw6unHz28zdPNmRzDHEt8imC7ficSeaf",
  "key12": "2DDs6oBZCcsnEutG2CTeSa61B7yBD6dUg8TYEojdXtt6MecPxdKNuon5CvhsZxWQGffvXgYBLrEwnAXb5ZHzWGtF",
  "key13": "4pWdZ4cMd6Kxwdn8ZefTkevbEgUWGzao5bCyWcg7ERkVonSwB2DgvZAtwHq2YRzr1rQQrZGdv1SUJkAxrAV3jcKD",
  "key14": "SCjBUHrX2Tpp2ZKeeMM4UqQucZepargMNKErVu4bSLCbJwuA26h2ULMbvHAFMNdn3kcn1TyVmEGNRXrLtV1AL9h",
  "key15": "3E2ZSip5MdfXQfx2NyvzLf264gZDqWi6QvQHomPvH62JdfL8zNN8QgZF6ARU2wsHo47mXjZd4DpMg6mDRScYJRA1",
  "key16": "4dv5MnU9MtXo8YRbEgurtF4E3BncQmqfzTaiquBT1pv4yFcxcTLNWmMA4YnLk7pXDyKuSKAV5YKrFs38n4d5vt1N",
  "key17": "4d3c75qoVgs8pamJe7oCbx3oiA9BDNJCG26vk8ysXWhpdQ6ChUjbdtDvzgoEVbSqDWZvftxZPEytshbtq3SMQ7Q7",
  "key18": "55nmnbVUR8vBo2RJHcWJyj1uA5cenaCsAVHP2ASbYjEJDRtfQ5D38psMT9kh9rfSJVQfsoYySKKir4CLhAsz2k2V",
  "key19": "h5cyvih4tud9fb1n1a9EW8rMLfdjNRsMmDnnJEhct377GPvCj7zEUD1tQAVmjuhE73CyTgPD3kwVxTFQyEeBUi9",
  "key20": "2dLD2RpCTR9qkw6SLnQUk6HWBZDtG8dyBcJfhRtQNK7yTCyRrgAnkggJWLAuXnf5LXMbr6rWstPdqPFzpDbfAbtn",
  "key21": "xtdxQjTg7LgRNnFsxf3Y49RhtQQc9fGsyF2NcXEU4Zh5hjkcfp3KAzf4m2po8A6UF7RC95dtZ1cJydVKJ2JNL4N",
  "key22": "4qfoafcZdLD91AYqkKYvWpBJfcYz5ztaWrbSVRdEezadq73TgQBoWZekJtNtie6vC1MpmkkoBGK2jwSoxaemreng",
  "key23": "2sevHDUbpfSMMVEWrhRUwTx2Vyx37cHoDztMZcXKzgKqtwHzMjZPcQfpE9YERdS4asDBqJ7Fg9gMJ5CoAYzBsv67",
  "key24": "3WJ7Yu9LGBzf1JQicDiGP1VksNtcporQTaffasPERpX4MWfyDLYxo9xmmkbd5mPFQXhZQiEt8YrWzWdHzcG1sEpq",
  "key25": "3aPYXXAmGa8JHjaeB1JVC3Bh8yivNaebG5yvG9524ryCR9eL4dxCUDdNawTTqSPGKy8XsKnTQBoccrWLzm3bR7S5",
  "key26": "3pmcjG2mrmLcvfjtCVQ4hx6bJuUYz1noyuPoyfEJdmwdbY3kKMFZgsVc6LcwNvCgUFAHTLEvQaB5oQ7jyhP81RQH",
  "key27": "E7orVwi919cS5xH9BALcc4P14tWAqCitfCHxqa3dELTSmGDXiVgT611D6ti8JCce8gvDbhBNxDzt9e1wiL3XP3a",
  "key28": "3UAbEtPyKXjWxH57t6xA3AU1sVWohdNfgaz2yrdQqCaAGXJAWPWfs7KJQFPdChP5uXBTwZ6eZDYr2hSqL2voRNyT",
  "key29": "44EBSYKh6CRvjWi8xKjMmqSiFoXf54Wftcv76oCaypqDLVqdxarVe4XpW1nh2ahV5NwTN77Tafu6d5f5k972mNH1",
  "key30": "2qe6vGpQvtyxDcghXxTXC6jsKUpVT6oe1BrQvDwFjeqkvEvyowJbAChAY8xCCxSUTrqNiHCRtcPVbiqdghdaKe5o",
  "key31": "4nUNuxZXjS1UbgVarHYfUBU3qQrL6z9waD92CKLitedC4LJ29ULLfWu89KppGuAFL7xJWWRdFuVTwFkEvSrgjF8x",
  "key32": "2TLiu2rDh53BmiB2phAYEJ95of3VVJ5ZPnRqKBELW8rx45vqqcbZ8RLtQRHt3SzmrxnqSZQUwZ4GRpP9uEENXDpV"
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
