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
    "3Z3Zh7voh9LsH6TzYW1sjsJpoyUnAShP86Ws5FndvHgaGJxciu1RDo3p7VE4pMEe7p2xTzeyHs5eii6gYutXahGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4922cNjqsXpKLmnGLHJ7uR8DxbddK2X3kDJVXxTmtVzwp1MX6nKHZh8aJZisx9FHaJKCC8R6NSyJKU4a3ei5cHL9",
  "key1": "3s85nNqx6JhyWpHhfMKMVjgcU6t2XVrJvABXMF4NDXMfahFimwhStpKz7WYEs45ir2Vj4NumKDUqAeSh178GEkFv",
  "key2": "3VJjbop8jr51Amq5rkcY2T5oi1yBxf1Q6a6Wqy6QE3xJ1UvqHaJex2xs6jVGJ2HS39CTBwGxP7RSNak8vtBtcNQY",
  "key3": "4MsJycqicjUUc3NRDaXWTYBXcXwi6t2hfQw6wVo5vFctfqjVC7ATsaSJqUevMZeq6gRSrxm9jpAFMRQ1Ahub6vT1",
  "key4": "5xtio2CHWQi1wtoJaUwZ2HDZUCynaQeM5S31x3G2SCPhm8evs55frTyhyCRq12An9DnHLP6kBJXtiavpfXNsviUR",
  "key5": "5jYBYC2wcySaLjFUaEQMhLZgtER8TsQu4uV5EHiqKatFYjc33CW2U7oeuu4xi7aKj3XNh7gC98CPUzQTgrS4yc6F",
  "key6": "2Y43NsXcVyMycmtez9wNFXM8EWS5Q5brkGgz8bTzT36bkXQ7mD2bFbqJWS8QaAphRdHDMyGFrgF4APsANjGY1Cab",
  "key7": "GBap5rMjxLeCzB5wYHNHgvXDm4JsVK8YjSD7ydEaA2h3FERMjWDp14RoiDwy4GkKSyLNZ4mT8qhWeg6BNifVsZn",
  "key8": "1vY5Z3YR9s9mtBRgPzdftpWfZUfWZwrRqEBmw3FP5grmKWC3paU87pqvkE6wnodaok4y1fqf95iiEudoLBef1Fe",
  "key9": "2Q5zktrwzFFR6nmKPwg2TxqpxzAkAdwV2VG6uaQwJ3LC26sUdidmnMjMhn24mXQqiaWAdJpgwhao5F6xmxZVnH8z",
  "key10": "37FMhLBJqQ7ZezU3PFjQeEbG3PBfPsEWxdSjg56r47qyDpDuBg5S1K54ncp2Qr9dT1ReCG5FjCLDrGru2jrYT2tf",
  "key11": "4Xk7PRgXQcSGY6pkesNYT2B1mBNkwYQ3GWMdcYNUaZepBjuTyQ6w4c8QFaUF34n4CCmyp3HxbW8SW4oRx58kYYDP",
  "key12": "2XcNVkA3zwiQisD2hjaUMmfjJbY3boc3vQG9qNLmT8xkisu7o5QApTu9tBSLaAtr8PUFC8Y53XwtCMzQKh19oXYt",
  "key13": "4Cg13SPqFNT37PpJFKeSbhdAvZxzSmPWP5PEg5n3XaHWAp5n6h2u4QV1Rah1G9hM9mymMacv6tLTgTEVHhXCAakJ",
  "key14": "4txFZW6CqcbHKK8PZP3XzduFmZEhCcFys9NSgafGAnS2CCyEm3s7Zy7X3i4x2v41aQqzqXr8mouFoHvQny1ZRrC9",
  "key15": "4YG3gK3ZckBwfXbV2Rum2jptRj3fvjyeVBfY2mGmCrPWFzw5gzAvRvjciYH12mgjVxcQAaJUzfp83Chym5Djf8Lo",
  "key16": "5fH4ZjEGT13mJACpBk7wYtkjYBVZjWh39YeqBwXS3ZYmytTbg1ZeYGU4HedEkKLSn6AsSKFZfSRCndkcPBKwyrBq",
  "key17": "4GfuJ5BNKixnPYD5Jm6sHnUUmR2hD2vGJ5Fuz6Y4XBWfoXnu36HyUJgLtbLXhWaTs2orrB4MaaC6JgiaGD7fAnVY",
  "key18": "2L231DgGHqZmk1e4kAKyuKEL1m4D7GpZhDc7G6fsD84JBu8inrrgud4c49AoLSnrSQaT2MG4ajL35U6nbmoZHpf3",
  "key19": "495V1w822iQZzKFrw3qVmdPjc7yyrDR9b3Ff31vFmURHnRt1oBPXi6C9Wr29Mwi1ehL3anKxKjA7n3TpyFHC7ohU",
  "key20": "2FbPWV4gC7ay7gHiAHEd7U9SBb93TVXd3XwzgM2xKXTV3rDqhvyXySsMF92cK2SWFudz9LmZaMQCNZSvvYz4Ccvr",
  "key21": "4dpW5hCrEzboXKBs3nf94uwpYbLYdkTDWS8fuW5un4C1rwXqZveLgnvDto7wx8R1jsgcaLuj2FYihMSsiZ3E1LqQ",
  "key22": "MHuynWXRhb4bwTz9Jdg3FZMYvydojHBDKYSrELiAL8RJNbrgZ4bVRUgDbPEWZkrDsHjtY8rf49sLb4XGRMcozP9",
  "key23": "3zfbH4DJgcYKpFB7Uat9muBpvu4NBUZxmibVv4VEF2jL2LY1NwSf39vVbaistdJMSsqFpUSJP7FpKeB9b3iXWaj3",
  "key24": "4xuZ15UUJkQmfe4MFRsP4gUkPWHzHZVRf3wmzucfFVk73VHv85oDSsjaaLVTBFN7cvp1K1ekoqT72fo4ph3jDbA1",
  "key25": "3w2oNkDW7JD5P6n1LoRAt8mn4LVYJ5dgeyy2QzacFDzECqjz8qsru3XPRyMkE5zeLTKqXer3zMKPkysLqSErcMS8",
  "key26": "Fcj341qVPsQuqprcHvDpkrzNxEqPGVGJkjkJKPVj6Lo1EHJDZXNVm7wvpLUWQHPyJRshEGRszZUMVx6kpsy8xnS",
  "key27": "5nHZUUrhrChkVrjyKWBE2jBspyuGBZo4w57QVadvaWPEMqxR9ATeBV3xaqkRaEEzQWic2eNBMLtHDniLPrDvRK1J",
  "key28": "5VuaXu59AqkT2kxSkkDo9E1dgE9NgukH8UtMbKT5nJ6BW4ZCP5xC9TEAJGuBAwnswqFsGzk7etU9aqwA856z5m6X",
  "key29": "dgzLV4S1TQnBFrqXP33CBt1qpBTfeNGWfAKJb6y8aSUrXKdPwi6XUNSecLqWr6ZtMphLBGAxP1ho9CwMB6C4hdb",
  "key30": "V7sVDtNVDFw2LCJibLUxiQkoysij4WBtcKrGKjFixVKCsJqBa4iMMx8nb9m3Put535B3bDuRECMaqnfEgpmBA4p",
  "key31": "4QUJVvCokeozptA2s495YWfJ6c85b12ce76WyLZknfkVNjuBYZnZ9PwivvckU6j34rzK5gwk6pZJ2PyuVc3dG5du",
  "key32": "mMeW5xWRZxiAVpcV1rvHdYRCMLikiCTwciwczBPfYC6JkPjvUz5JDp7iaLKrLRnM8yKZvHvU6QV8JgtY5uqn5mD",
  "key33": "32uKvMAEpyVX1HLQ9jLjKJJpMH5LoTMrRAKBz7pCiBzomz3jTHKHMEbmzqxsanAwFRtN36cfqfFkjTJk5Y1KVogm",
  "key34": "q6KjPhbTMmH6Hwcxaus5CLJ9gq9uQy5eiQxVSC6KZjSHBUXBEviTsarnv6dZ8bGFRXmsZP7Jr3q4gV84YbQE9tc",
  "key35": "yH9drcdNag9d8fN6T6L1WbmvD7J3WVMfoYQdwonDGHMjpshGvdqGaKkU5komUkCjk8bXcoZoghkCDrxiwqpnMor",
  "key36": "WHurFuCy8ZW8T4iJDVqxHgY3HmVECLAFS9XYShtTxJQZjuiBN3JwF5Z7GpwsMcmq5Zz2xfYwpJnTPmF3m6VoGLB",
  "key37": "38nnyJP6PRK8faQk5UxFHfxCcJW6mVaunMDDdE92TaGZ2Mp56AptBJz6R697JBZsjvk4DWGT7au1Gq2KbhexEH8V",
  "key38": "Mp2o1VvNT9qNJU13uvbEXaqySycG4WbrLAkYkNjCBfGzf9uMKVtZh5LVaXiSo43QnSZZ2eh7CvgBm9rN9nU8t8P",
  "key39": "5m5Yz8UPJ5GWmioK8pPjy5pA5qw2hb11Yu1RnZLUMU1aZiR5e7pSSiLe6NwfrVWZCU95UFK4ijaxjMF2aRz9UxS7",
  "key40": "5Hf9QasCnEKrQXjkKw1aj6vwmQYNgxCxQSCp9HKFL3YqmWMqxT4YnWk6RReNj5DPaSzPkuSTmvhHQMWzwEyMwyx1",
  "key41": "2fsPshSUygzPE7SQjBmsMRHBttMzZf3W3WyPB1Mwzb9bLFk88TUcJN1xSJ62Ni6VWHRWUopTbaub9rxzxyieEr1b",
  "key42": "5pt3cpSZND1qZrkdvVrRzSTZrEPUKaL1b1C9C3XGDx6UhsCnNbXuVir5ia3hXJ9nBGsp5xUnJ68b8BV54X81VzjV",
  "key43": "5zQnZmVQuK8TRQqmdXkYsWVBZKJJQvKnbqAJr6kziRzcojzW5XwYBmYNXLPgoAUBZuFhJ1cyUhnrnvM48R1DzEdq",
  "key44": "3BnwGZZvmx1hQjqbs9XKdat2FanRtLFMbYN9LFDyt1YHQ8UsAwU6AmSJdas7J6iV3j3obQ2tgZRkqXwZHvKvKrHw",
  "key45": "4kqwvQEfxWnEah4fiDnQNPmpbq9GE7fvujC1T6mKe8GnTpRwvaXgjNBXdsfdjzemtQFhAnfDoTfHzdX51cZPXzPU",
  "key46": "ByZSe1vRNantC6wuU4tXACJvEHzYyqJaw52MpqMQNyLJTwHHDfpm25kZrTzFMammAaYXXAwJ6fQcTiwk2kHtfmo",
  "key47": "odbrGb9Uzn4X8EMv7GaJUkxyZhX6Py4C2GudzEUqSyERtBEuQVAeQprsykMCQatNJnVdo1GHSk6DZn8PePZZmtM",
  "key48": "4fnk6sS48ZqhAzbN6sw6zJzVJb4yTCQBtSF1i5fSGGgUp9GFA3DJK5tDjDvYSmn3jteBZ1pp9WiCuZvdeEys9oB4"
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
