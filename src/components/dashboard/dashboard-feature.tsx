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
    "2aDo4St23a6XXdkRBk68XWLHXXQ3vrZwfk7R8Lkin19pvUWG5tKRVWGVFGi5bWrvS9tcLfAQ1wiZUXdD7F9ZyJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fccsCq9PiDHgid5VqZnCSDrkF5zp8FfxUjvsVvFoQKYUZZ7dbzbcjo2A9kSs7V2RiJZWvdXimgudGZoY2zMj5Vu",
  "key1": "2Bk9AsJCHa9mqgiqxbpLvhYyN7XYScgJ6VeuXxELSjtsv9ktKD4CHRyMGHioMECYjvrt8xY6ikhLuiKevF6jNcw8",
  "key2": "3YRL95a3VSmwuz6Hdst6RU3R3TnhAhH4zxp9AiBrXDm3ifjSvVwaNg5mmsV8Rgtdo5havXo9yPLD5ZMsaJDFvhYQ",
  "key3": "2981KRRkEF572Sptpw34jL27Dqq5pu5ZAAJQTkkmFU43xWXdg9gYVmMneX3FUb73QHkEKXwsZFaregcyAukns9Nw",
  "key4": "CWWCTKpxKNn9nGnyV5QBdQ5NreVMEj1HPoRMJJnyL268EiquNg1rDC6LJmdHcVNbTPVLKTtkp8xZak2dmmGcCZR",
  "key5": "2oCATX6VGrphjDww7tY5JEBBtMNuMfLtuHfouYA8nujAQsLU3XmEENhWojc39WyvYJs7MAnsx3GjQkh9gDQ9kJjD",
  "key6": "5aRdi9Gi8hoxkkD2Ziw6SkWu1cy3sDTYxwLxJvAZfBBZMK9jyLoTQ6SN8yTb1JbHJ14NvZgPQkXTT7uBnsUXxZ8e",
  "key7": "DkCvtvY95w2Le9UMgWuYbFUe4nm1rSoV148xfAfUaw2HZXGj5EARNW2X6FV3jkqHntFytdgT4YjpRtULfVwfrPF",
  "key8": "2PvZX1Pi68XyjKkcPFGpo8BqMYdVpncCz7aJ2YkXQcgMTWevSufJJ6CkmcFYuvn8sodWwSXBbf3A5zrdpxF4jYF2",
  "key9": "3PqkcDuDRSSpq4fjLZrRXu5FP2aCBsmXgg9dtAe7vUVcZj2CnWNs43EziCk17hjrAgmmkyS2TCv1xyJ3cPWbqubG",
  "key10": "5axLM23rpNZsw1rcGMfPHuC2x93rHLvQSWpKgXCRXFccT9oadgNk5Q4AMA8h4yF8r3PGan4CvwTwX8nPjzP8RSZe",
  "key11": "58cJ4WCRyHM6wHyxmRaUFJFi9sX7b7TWu3pwM2ddzsxYU61hAjmtiLwto3qTVRCvj6f4rUTJd6GvXL7sPLr5PoBD",
  "key12": "3njDhERFMhKbQLyMoB1xYLnP51Bxdv2h8aqbM3aXf5YgCr21we3VJCuKARk9syTVSR1yE7znTmEP7yyUMvy9pHBb",
  "key13": "zvSGVZknhenSwadxLDB5TPrt6Ub44Dz23yBjscrCHMTxrX8YLu9JRpomb2bt22VXPmHdT5ob7eFuDa7brQQhC4w",
  "key14": "3d1dnBqb1tHNMw5WhQJCVCHyjnw76bnia3Sxp6P9X53ksgxc6BMXV8b5mWwiKPestH2vis9gDaxwsFrJLNXY6uQC",
  "key15": "3xyBhtidZpGXvdCNQsmsXRbSHrGQ4mVTDvtkk5K4TAqTh9CaSHHpwDckegD6Z4xtoJaJbJKd91yHzuqYCUs6gUjh",
  "key16": "2kahmk2gB9cVks5nw8BK5Jv77govcvcczEQdKU5zG2FhGPpRaZP1QN8eF9FDurJyjz4dDuE3Rs6Ez5xTZAA97YEn",
  "key17": "AJFNrVr8C1VbFL1UB23oSVNJuWCAGkxLXvDqndyeLe79gneXNhQDxU3H8c2xNECeX2u2hsS5aWRrYBw5iqMxogz",
  "key18": "5Fv3UKQNeHJPMy7Ya3yMELiFLJNaFraqe5TfhtydfregYv5SjLDTwJAUBmpXVuULT4v6SECTuWqDCHk6ABLJHiHs",
  "key19": "4ppCqonPdfo8Y1YwNPHtyeJm1roYMAGkfogdyaEPTpVgpYM4ipLPYZVRFFS9mkPxvta7anvqFiV6V6z2VcF4UrYA",
  "key20": "5UopgraKzCmyAuSR3JxegjgF4knG9CjDAATUkG6dUTZMKdaLxgPTK8SnGJUaPReQusnyhqZnJ52JUxDgUKy6wzgP",
  "key21": "3iFvDnjtBpBiGDjWEoQtWLMA78huAz39zDiUz9KWoWYx75T5rvXjXYmpsoZUzEKqMMan7xUijajGQ3JYRizRyqfb",
  "key22": "2HTaxvm7Ept5n8x31uB8nfN5zQyeXiAE2MmFqjB6Ma3LHqegR8GTjLAPoFxQCq6Uxa4Mkzizt7iCfZv1DWF7wgCe",
  "key23": "5oVW3HJv3efKi4HKKYTNZWEqq4iDvaMwpx7cq5hEQtz1sisudhuetEa6yKCSTo8bU5BQdJnVPPczYnbSRMfT84tB",
  "key24": "RaCBGxUJUBJzDay259BFzZuWbaytzDsKxNPUjBQNYLuLRGcTm2vphrDsCgLeqqjksggiH9Fn4TAdXVbX4cf3TGN",
  "key25": "2STZ2XenqAkAwGYkgcmuAoZKENTnD7fF9D1FcbL27r7PQYUMSTaboZNG5xjHQE37XcFJP4skt5qjhzqATzvLr5Vw",
  "key26": "5KBz4VNZchBvnLk7a4qhstcwbNU8DBJJEPBaHmFXu3eKEB5op37ZWrSFScJPWycnEWbBvT3v6H7Zt6vCVaLHELXm",
  "key27": "2JVzby2iB2Sy822t1Ns854itimsd2imPgvj4UzxQbueybWriZX2P7DDDANgU42rhyFyqJ42Uonpn4hzjcfxKoTjN",
  "key28": "3eWCPtxoozqzVEY1yJB7QGEbzFsAnnWnjjMq3LxBvV8zRruPLRTjTQSRvrjXE36zLBnUP7VGN8E9JiqLDit2Xd1T",
  "key29": "2ZXzRRchqt4RNqHaYSD13A9htp8ASn8JsXQeNDURGqumnmBrZk8df8ojc3QXVeQMfTdsD7jbR65m9gcD9u5UcSfq",
  "key30": "47w2UthEnvSUc8oV66QEEWqkBNEEogB7tv6MZ8V2ZLjyk8oBmZVwY83hJgZoFNK3qajudY5yuq1A3vkbRnqfFfbB",
  "key31": "5yffWATpz2izsKzBoCbgi7ohnftqXaMCJBhnigWbhk2Ztii2VJzzvWFsYGBigty3DWmyx7A8eNfDaHXzJAJ57rSs",
  "key32": "4s4dcHpnd4ZhKBSLytxf3o6zVKZW7dWgL5Aemts6jqy8iuPXdBqHQ1jviD2QB6Kg85YyFEr8jEGat7gbBgpyjEQA",
  "key33": "25RBB2K1r8rRnPRNQxzwe426kW9HMmqpYuFC7FiLsPukpRWgKxckZ6YVfRs2s3pctr59hpUEE3i7nZHV6vyTM3rq",
  "key34": "2ep7KzXtKKCs9MPYke5CNZL82j7FtTwsvDv8FJK29Rp5ynXHJHD5XmppSFnKPow7hrf6HHp5dRQaVD41hNeTVw4F",
  "key35": "24v9ja8h762bEon3CdcbyNJxwKXcDT3s9vF13gpohWgpJDKwDtVP7zZNbz6M58GdNNQAXUNAvNGQWP9ZoyYbRnwD",
  "key36": "3QirD7DWhtfzHsHKCU3JsutxjMvoNwBrJV3Jg33iBcGgNaGnUBZegwuvtvF7jBZ1ohfu8Qu2m4RuJSHLmKo9yznu",
  "key37": "5PFMcFYAXm298FmcfuCUzxzo3SS1jHcHeAhd4fSwXCGE6FMWkBjwE6USq6ukXEboKem3wcJE7M77wDMZyLX3EWfn",
  "key38": "3F6XDJxKQiZY1UcXVXRzkDZrbaYkpQnnUWPVQhd6CbnQGiucjqC1Le87hdyrkYPHu3gs7VommNw3CdYRk5F6Ew2H",
  "key39": "4mw1tMZgfGMcqPwttSssJ8xgtT1hMMRXWvFmFxb7F4xgHnRcn1PdCf2bBhzWWH6sP6xLfTECB9G9UTqrXZKtXuVP",
  "key40": "3eJMabYnzkZHe8oguXxR9PDyahT6zm2jKqG8cVr2nzHqxY5Pa4UyLjBj17iztoiNtvKqzWnBWjPKgmduGKchtbeH"
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
