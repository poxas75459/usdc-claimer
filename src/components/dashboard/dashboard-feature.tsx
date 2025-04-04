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
    "exYkBBsSnG8HTz1xXxQmBZbaP2a6EUqG6SW7kRvdo4DPX5auBqeQZGkciAb5c2Nxexw5dsLf3BFM312B913Qe4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGrwCj7gz5KKDgsScidm9L3bTouMEccE3eTJ4gZTu4peMzdknWYJr5v2vwXELrkwphcmDqPpQUJeHz1zA8MKdTk",
  "key1": "5EMXrKmWaESoxqMi4uLVL1iPsDx2HEwhbczDEvuqrdsFkV2UgofkrKYd2V9P7EApMzxjASytp6dDRcRc9NJT35MY",
  "key2": "5tEyYA4mwfkioPLVQKiAJYKgfBac1p1aURq8RKbcfpL775jNPyBJ3xHhhtAW7h8HFM8Kgdaj8rJkbLcnfJHu8otn",
  "key3": "4GGr9MYAVjj24wsGQVHEkq7pvxJK9aJrx9RSYxTWoaRov4e9c2AfbzX2LB32pqgTC4KZ2AhVeDfk9nhQN6Y5NH3S",
  "key4": "2pa1uKz3YacUoUQpLohQxyUNcjkK55K42DSi7fiBw7xGhZx9edatoEbJWMJnShLZpvKpZQvUtzoZpHKzTZggHdi1",
  "key5": "5mGJbGWcJjUXkFQe9mJrLQATLQgS5v72Jps6r6Bwd5HJw7EPVBXwyCKYDWp37aaqB4JDi8cD7iuiQcVb8JffybhW",
  "key6": "5eJDLeVF8L2cybq6XJWeJbwkVmaaFTjfDK9Df3X5LfXALduLgZRQ8Li7bAWVahyyoiuojx56hcnSHGBBsgUa45es",
  "key7": "5dDntEvhr6oDGr72efTgHcfLK6ATdWRkU1wuXu4cerPGwxTMqLXUeWNudWK4fVZDDEu9Fo6u5BucWNWFMHHDoFWR",
  "key8": "4ECRMX4X8JQEkBGtkyovuRTXzUrwZsoxMnxnm7ocmfc2LL2CyKtMUrn3rSwHQPrqZatfSrfjHphYqv7rjem19iRu",
  "key9": "2bN6cLQxcH1QUipjvyMxWfRPxrXWvx8d9hA2Vmo6VTB6fcDf8qTtMPLNcQnPvW9Vda7oGnXxaV8mZytyh6XqpsfG",
  "key10": "2whKcnP9tA1LfY9MeZg4SnXSNCi8X7h3wpbeH3P5AjdD7VrUNe81aKmt5URubdusVzSWdk7Uet39QrhkR9XL2NQ9",
  "key11": "2WcBRMfx1jw6xL51F3qBuje5r5NAKafhHLtaQrV1XdL6bmq818y8YKRSPewkaAHM6kQTDxuPDcWCR3r3b1bbdSqe",
  "key12": "5QLwQy1AitsYdtcxoXkxZtH9wh8vXdwzbFXUPmXeDtoEE6xMxWHQTQMYz25myuVx2d5nYdQgE9w8fw8uoXpbY26q",
  "key13": "5cSioj1mWKpV9HQJm2pZX3tncAkosinQnFJY8KcKisb6VVQqCANX8Wbv6ePCBrjMM43sfhipqhkYqoegf3GHiB5N",
  "key14": "EDjamPwQyGqnWjhfgFbG8pgwtGCwenL7Atk4wcA3RUX5LX3i3P5t8T6LyeHJC85KKVvWzvyDBHxUgPDce18yXqh",
  "key15": "4aJhwcCWDSD5QR2iyNowB9LeUNU5xJJw57iN7coguButPEr5XdtbxAvJQXzz1jYjc57xBVtZQoLERWBuHdznY55b",
  "key16": "3G52ZXoVkmU5fkYmLg5we7P4sW42Wrv6z8HFXx88FnP4K8oWePpRf9A1LGRsB1DFEGazEavXydguRDDWduAB5cfS",
  "key17": "3hYqpnF9xrz94wfLxjRAwrDsAVrvwU7GCMK2zTkfpSA1CC48iU9zvNxhsomG1oLhBDQnnwq3bWVvJZG3arhFNDaU",
  "key18": "3UGA9utiDWqm3S8Af7PswcJxC5QiU4VX75NNMnZdW4bJXxTsPGFuA3fRyCcPnU8bHdzGP7n2M3JGXUggtjmoRSh8",
  "key19": "2Gp4Jh9zvm71LHscjY7Jmb3WaJxmim3ZhgenGPernEXgV4HE7kycdqc2Sr8pzGxm6wAQZzvzLDDCxADRVwXKQtH2",
  "key20": "4cbw3Tq73X9ksbdQuVHSqk1XyTfejSabU5HxgTDNSzoYcNNqgZZXfXgrexAyGGnMapuoZ8rF6rsCNzzTusKzFLuB",
  "key21": "2VXWVk3FtUfnyre93hE9fXpnpGAAHgcBrTad82WZgxH25ovStx8ehYpa2Ub1tSARguDxTfKQiuBcdeixDTBc42KB",
  "key22": "4o1yRfPSdeqcxQ7iiqqt7W5wAJGyH6swd7DTKcjiogmy6ekdAhMsHChryZftCEhfSeAhZbMCwXoVRhBRbDGveYTX",
  "key23": "5jGaxV2WbTWV9XVMUWfz5NWbBopqEF4FaKFZ76qcBBaJSWfhxuqv7un4k9hTmvrGZSUR5aCBWdn8tcEKtJDMETz3",
  "key24": "2i55229VfzD5X8WBs2br3sb5knVbpWuzjpqwwkFac2ZPLxCm9E2i3cqifiGWVFc71J7YJLQx74dAFnBxULVds5qH",
  "key25": "4m7qnw4P9U8QgxSwa5rf9Dh1541dG9bfPn2Qz7guMvuDqyU6FutY1wHRtHVPabDpMfsfK7xxPLDjtG9HM8Z5WcBQ",
  "key26": "4Lv7wopfYKv8A3brAt4seSEwh4fbzFnN23xbbchTGsUymmJ8fYepvmQZCpixBjzeBQHWTDCm9yRLu54nbpSxLEtD",
  "key27": "3a9WHgUFPZyLv1q8cAr4jZcdhvCg61iZMdCwCwBCYWRfEmoAo1cTMQM3wb1ePhdhqN6mazL9wij3abp7KFZ7Z1xs",
  "key28": "4X8y1pTSvDY6j3eRRUkJpX6bJHUSZkPprca6ECcdfknjD6CXGtGgAjU25yzSpgLiNvXSpTqmJD6GeH7CeN1iGmFs",
  "key29": "4n6q6fhz3if1wrMNrEBudWRADDGdKiFWAd7H63AEUqXEba96He4GWMZNqfUA4PaGRYMhtgaw428GfxfsatxzxPuX",
  "key30": "5FcPLyZTyqP7HhEt5xLhDvZLimXP4uqioY1o9ZboVJV8whKWnTkR9UagSbGCQXsnhXaw9CmnKX9Aw3vg4J1brGHY",
  "key31": "2gXdWTRD3tpspuFfEJCcjoWUnKjQxviRNyLDy9WK7yoCkTEEEmjehqnbSyEZn4FDJQE5UvDERzRitKrVgrNwQZoZ",
  "key32": "62TzunwcjLxtrYYvnHC6eQkPMCxFuRkfZSVB46MAsqDsQCrT8NGV8MRiAt7UWRoLGqZ6JdGRUZEujhwo5JJPq5XC",
  "key33": "qaM7pevwB7Shh2XBELCNcFDpCHeNdf6jN9tY1kSiYfSbm9oHGw39GTR3GYgnmwh3iDpw23jzVT6ehZZKAQCCkYc",
  "key34": "JDUtokVrsSrBdXPsKCy8hsBJquCLh27gQprA6kTYwguDvMWd7PuLTBZaYDJ3Vr4NH3d5u85uJicuZcpAhkFpuFr",
  "key35": "esDd3xLV8Jczpn2TQc1ha1HHDPRFAxSRySdZPpoU8eSsNApMxKF9FTuSZmRf6vbKTvzmf1v863UHsap6TDJjaq1",
  "key36": "45DNbvft8trR2chr5VPfZniUEfxUVK3QgcUHGM3SfVR39E3mEd4eDMq7phujGYrhnH281ENLNBCecotgtgu5D1fk",
  "key37": "2UMG2jrCHZjQRyCMp1vebktjWFuZauB7UaSmYFq9W4cjF254eNhKfM7MwNKXvVfDbJcQjJRajfHiSnKDBENuvcN1",
  "key38": "5yeZ7P9qfKjarEaQoSjumKFxiEhd2K11yVv45HRTexXhWjgCR3GyCsUvw86wCVeHMyNML9bvscXuQHbHBgPwQiHh",
  "key39": "L2hykX7ZtuE35YWKX9SCHJWgCpJYt81RaeoNG7WpTadSrCmyw517TiVb6sky9k1PMD6TwXLkYY43zXKPRouvML5",
  "key40": "2MnUurtgVQipwiRaDxMi6ZxebQbmEWrR8X3hswoCVaHq8ykuPuMRfYxtMgnKbDpjh5G91qCNfVB1PWojckcuqwTN",
  "key41": "SMbNWztNTW461XmAUDMJz4wQTY4EEnB2mPEKougRuhfihh8KUf1U8MHQ8nid6aEg9ZumgBZpELaVS4Ppi9NJacB",
  "key42": "497mkHW3mMj9jY4sdkZxBVh6nn8ux2VY7jzhj7m8kTTe9KtDTBXQEBR52kFJt5u6BZJVT4jHHL3jcV9DwmAd6Xix",
  "key43": "5N14PYLgXkJtqN7U5qF2Urhaw6Lmm5nFcfP5spGT1S74kWcc7Lthx8WQtTwVbee3b3rVjj2345HnTQ8tqSfzzF4y",
  "key44": "454Gy4iNhRMLds4PMKwpFyyZS88oKgez54CgFberj16SYskzzfAiqg21e81pjbXqVgM9whBkpEAsnPugAonRo1Zf",
  "key45": "2GDEELvTvPuhYUtNN8kTmaVEC8vbAiRjC4Vh1ExkxEgd7nrVaRsJaA5DWeNmDcx5wfbjv5btaFSABvoBG9oPu95Y"
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
