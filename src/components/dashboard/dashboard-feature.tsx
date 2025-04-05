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
    "3sesRuLrDo6YGK1Aq4znL74WYTGB5aQwPaTcrf4AzgC65tNHs8aFEaebkahKGo5XyMxW7R7biN4QVZfVXnjP3uKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQw1sTNYmhrmZyZchKjDDtJH8nWzBRDSNANxa9q7UT2jkuPFsawtFs1ZU9SMHu9a4H3KTzPPCKxMMNRQr2bo6E8",
  "key1": "4KQTTZfJFaALbnLe498duRGXiQwPoeDpNNLKJfuvTW7iL1tqMDBV6eZpqWAYF2Atv5PCk8Xfa9JeQayadE9DZCax",
  "key2": "5uqo4xCkFgcn1HvwsLspsrNDuhS2DgpN4hXZDTCCkRDNPyVoYCEmnJAKcaR1LqkwhU4snHm8nPKUQWgxfBieYuPP",
  "key3": "3r7uvTXG1FYSko2kS1r4fiG1ig5oXoikNoNio7dXvS9PYBK3Vu7X8T4sXrWbPv2hGehCiYAbFASV2jtdFVEjrYEh",
  "key4": "3Qq2tuL2KWC7AjvQkSD9ftXoi3VnoH52ZxckH3UvMvREtKnMf2LPXy996rS4bVnx2n8ZZtutyWomZdbqof5JYqbp",
  "key5": "4FBEM8Xke5g4ZB5wTHjJKzEeRqaX8smfCfuoNVhheXmW8cuQegAb2Y12ebKLP5fp6FeTJh1PNq49nqvuFkTpjUD",
  "key6": "3H4qYKYjfJR5nB8QPNhNcLCsH1iY8Vsk6P1UKFPVdEpU96nymai1aRmAWCrvFQ24d7FXdsx1b3yvfoLrVV4RWheH",
  "key7": "5DZwGQmwdEhDSJB8VUsmajXk9XRkA6LFFzbRe9MQkUjwRTPaYhesHYbr82Aj9JHyarnTxrvN44So9zyfw3vM8gSq",
  "key8": "y4CkbJq8aQ8osJWe7HmKuQZ6S5RARXr5myKvkYvxwAxqhhCzmawXK1byDurt8y7R9s8TueryQZiRExQdqxM6rmR",
  "key9": "4g5fVFcFwKAfZqKkm6uT3JVVjVVZ1qr4qBBWsGEAtChwiWJfMrRzEdoEoAktGH5gXvH5Zo8KyyrLvbi7Xwqzsg4Z",
  "key10": "61zPWqaXeky8hMeBCMjGghCU1s8qygjTkWvRFSoqUAgHhLLq7F1nsu6kp8MsNVAUsAhX3XqBZABe9EGjsK1QUYrP",
  "key11": "5rdjCkQK9uzh6AGJdk915Np9i5Cc2w1QiMUTrBZxc1ZgZowFB6HxaR5RoX3JA4gpfkwRnvoBumxcUHMCoHB8wyVG",
  "key12": "MTweE5NDzq6U3sxaxEgfurPgCGYB2uxJWBtG1vuSJiCRbPq65ksjW2t7VuZPR9BPPoUDP8CJhYfXLBuTD1yWStS",
  "key13": "23TD4tiLToAoo2QnNmhrMfP3qUvAgZwQQT7ASaz9agACdWePwcbwUerUz2GsLhxE9HdXTpZEU1UHfjrdAKMxxAKc",
  "key14": "3rE4u9T2WeU2toybnVBGxiSXDJF8bycy7ER9DKpV2CK9Rgitg85FBJvZJrSe8bqtG7RuekzoQ4wj6A6S8v2tSXJB",
  "key15": "65rXN2xTUuXXsXnCygwfPfDoDWdXDJGsFkiUCxFLNqEv9USvVM21ZLdJydjAGAjxw3PMjxUBYC8s8V4Lr63dUr5Q",
  "key16": "AezRoqRZYrHXU3LGxH89xLD8pqU3eGqpbF148vHEGi6xU5VAaS7c4FenTYMYrJrXM61a7hQU86bdY1jk4UXDUUs",
  "key17": "66ymfhvhG5iEwbS6FDAcsQiNcPPtzFMfNrXoV7LfdPmoJWJD6FHU5Nq2WjUvBUGw1JCgUAwFBZYKKPYoLTKjcYzk",
  "key18": "32Y9d2e3ZTB2nX6QMkBUMf9LMz1MwBPmNAdPm7Co6deWREZmMotnyxaiqfP3aTzCakgknL9H46PTc3c62V2fSnGz",
  "key19": "57tugshHwpED4qt1EYkCitTwpmgqSaR7LFLzLCSfVpysX8QibgLsykMhfG6pi4NsSBvyR9bHXVFC2Rkg3B1cB7ro",
  "key20": "5ptBGDTN7LD1M6V9kQBkD56trDJig49fCEnwRh9LbemEP9nvEuwWw2ZejAi5xc8tob8RGzae3vjAtrSr7zVBGorB",
  "key21": "3jFvi3f5B88StnAZU8Frbfz6sDi65g8LZfoPeycQKw7hBdziTL9Y5YKoHANyjpXtf3HPXVJ5nfL74WSL6wrnQV8q",
  "key22": "5zZyNwbSZUY6QKNDVzAc3sSMa6cqm8vNWYh92a6hjFymWS9A3iSCnGT3g95Tfoj97Gx5WFnUWxDU6TdE7A56V9E5",
  "key23": "5HjfQUUNSZeWQtDG72BnW1qwoHgRndgYgmzvvpbpykGDRL1e6PvbmsgzuAg6QqdazCF1NdxjQjRvvV4MLdw2gow7",
  "key24": "3gcuDUUUgmMmkbsZGCUiQWFYHBwkBiWtyPR2Xz3HvUznrFTwgvrJ2Aq361TMLVP2yd8N8bjEhYBmCGPwmCvzMgtW",
  "key25": "3JuxrQoaNMzQDkyN2iA9Np7657jxfaBP8jcJNc73zLk9E9PnYTDBSXSmVfqs9qM5HFbaHYtst2UwSgKSrjKsSKfD",
  "key26": "4vv3YMjSNA5geqVbA9a2Ux4NRYrai73fWvyDqaartZxWDuYqNErg96tThUdSAv6rXgr1JH8jBB52mnvReDTpYxQn",
  "key27": "2MjBMScLHyrebvCCDejzHFarjNg6gUQeXfBp2pDJhCc8afQrJVtt8a17DZaR8NGZ6kxa9AMViUDPEWUbnVCkz1pZ",
  "key28": "Dt5KrW7gCNND2GYkKbAMjgv3Eo6WeU9bZiHBoDxmS4zQy2uytZwsqN53KQiP2B3mUUVNLcWLauP7JrBmNCCdvib",
  "key29": "5SEbbUXfvm13N6vFsVDKoUjfnatpqjLMJBJSdAsY2fpztaJVAKoxGQYdtEWtLTfk4R9z5d6vpksUYMADj4KLYjUL",
  "key30": "2XcqySkf24DarDxqn4NhtJ68ijVpPtfzKStDuqEUtahX4Ej3WShjQBXAapueQjToX7JKFdpjvyms8NjkhoM2igvw",
  "key31": "2pawP4CmCdYFRYUN2zAhZHDzrbfJ9vwgF6yuBZTLRqSTRhNFYHgRpWKQQVsJ8dJEJMxtT1gdAuUPap2kE6CeiDu5",
  "key32": "4FcL5UXae9kfSJQbQJEZEpJmY5TQFoQiWwW6vqNA8f56AHJWwKh4jkKA7wBJgyJYRLfE8Xs1wZAWVADZZy3QrasF",
  "key33": "4uS1FTnkigSCn3oFxxXMrj6HmYkejABD4A5s39bM11Vf93mUmEB59NhK3JZfruAC5J1vXR8EVt56GBKsKTkgfyGi",
  "key34": "36cym8QwYXkQnnrkJxyG6FuhVEu5vtxNCqdaVsiLfw84Q32S9EePmJo4nWp3BB77ELDr2wXc45fQ5WoXjwsehsbA",
  "key35": "2eZpBNAi8MxGRcjiJpFRVdjtxy5MFG2P8EZG42nrNUJxN7PuRarmbqhagQjkXGVTjGDWwpk2N6yp9ik3P5NMoxda",
  "key36": "Qputtz8c1SJ56XTcnRa5jcMMaTRyZNMSnkDa8UxzkGsUruG7pAf8GicYqu5AknQViX1FRcXQfZUpS8JVCGqqQXj",
  "key37": "3STLUhYoyb8FXdjMj1B7RQTydBgotvJmmTsSJoYREMxVxEs5Vuf6ZciadMwhAnbTCXaKMQBV8D8ZmZmWxSo47H71",
  "key38": "2Z5ufxGdqhUmdBAQh4GzDjVtvN92JgJ8DNA244yK5wA6qvkVcDdvQZGZ7SwezSsBBbDmHrHhNfoYk6NfRzNg7kz4",
  "key39": "49vD83T35eA3Frqiu6TS8Fk5uZmoaGotbBtWHk13xJsbA39bjMAXaBNrsFkpxtpS94Tq6Bry59FEsHi97bPzL2XZ",
  "key40": "2FtC19Sq3dexMCbHGbE6Ti1ZuZ4pH2vCjPzo9u1LbeJUAneaUKzhpB9Wd4KhEXKh8Dexzj5HwPz3dg6CWEppkiUu"
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
