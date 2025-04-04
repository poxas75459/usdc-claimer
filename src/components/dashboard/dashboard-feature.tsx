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
    "5oPQzoHagTEHxm4hbpmukwmF8UuWXdKqxEPVBJkRxa9jtW16pguzYHAPM5B1eiEp6j1BF4PFvTtJBVG233Zdb6Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8SrYmk5qE55rMfE5krjLqqqXdMaomwZ1EeDpmyu8v6Ddp31epVTaw6goTy29KYMN2nXyX9MbL3kFjRWitPeKpX",
  "key1": "5QTrXHg3o6oUkdEUyXmADReE6mFpeJ1PudPqsvHAVYZnNegLcL8adCX7BsAKuDxWCy4fhY8xZbNW1fVsYJMCF2Pf",
  "key2": "mZcAGYcXjz56vPhe1nEiK25XYBjxYkCWp7GUtmAzur7QzWeRhLXCunLtumSrJVuhRHAyMohtTMrkzmgfrVghhdq",
  "key3": "5EsNwhtivxokNc1jpaXpGvqFuAK2RxD4to9Zco16K5d4UxBdhDHqBYdtk58JFoXKx1eznpFXEwszjbobWzYBnDJF",
  "key4": "9xt1L2eQDqE1hRvNkgZGZxRCQ2EMThX3jQroRhbD1AxnoMTnLEAki8L5Cf3f9UXEEaTQhBKfJ9fZX5ukbkvKvek",
  "key5": "rqmTwVpkamYs215LHd85FUqWGZs2mmufd3kH7vsepr4SDjb2GTUEJoq62Spnms9mvmhkKbyq86SFXycnLyzMPdU",
  "key6": "5Guk4p8sH8HmFMG1FB9hYFuPAJwvn9atYwMdeysRgi5FR4BE4oDzUodHfAsrQgkokQwpgzexsyzJagb2q2q1NEaG",
  "key7": "2DKJt5CcddDs3YCXJF5FfShEqt8jF1M6r8EwZ4dRUwsxrTX7WAFqbAtmf7TzE2wdgxr8UiBLtnP4Dr8m6mB326ZW",
  "key8": "3xmbWUsp216c839UxpzPF373XkQ7Cosn47gjbk1SUFux5tZ2HV21edrKBP3McxWhFmykhXtRdgt3zmQjLJTCsjs4",
  "key9": "4curPjhaGK5LQtkpm5GZC33AahutL3e9owCcBf9iYocvscuqpLcXqLAqE2YXcccBy7J654vNFpWtH8MVqzNvURju",
  "key10": "21ndsaBt7wR2QQBQfZxfFNhN3PQVZfrzL2Bu9UKMRDtDR3BgfthpbH9Uj8Mnt5mcz7f49cGZW7UdFHrhvCA7KfN6",
  "key11": "f6a54Ag9KKhP5K376JAyMgNB7jUWo5z3rN6t3ykzJNBW6ASUJtE86ega4QE1mgM5aR8vN3FxrBcgUvhfgJMMv4P",
  "key12": "3XxVzv9ba63oSUqC1Qt5RER1Cxi9P3sHCz5odTyBDsMUecwWLP7HgvCcDBehY7bq5F9wVQPmcPbjqKvVf7x8miKw",
  "key13": "288VYifgBYRE69EyQJHdZVfXhem54o557U4TgzYqrGJfpXGKyFGYV5huiwaZbd9yNNw6f7XGWHEFM6Te4pSfGQ5e",
  "key14": "56jYqNezCHVzUE56PBgjUP1A9vt2wUi5Df7pZjNduzxFJf2mKJ6PavPwnxuCmuAWmNKPRvAMjWBME18ofc8miuJV",
  "key15": "4ZnC7Cmi6BvDA5AiCckG9xvTYfQgCMBadzF6wGYVnUcz9QKAFTczRiWpE34QLEZjETjRFCUMcqLz4KK5HcbZSXLo",
  "key16": "5AN3yugUEcKhHnJY5bkxmExHZ6RV4i9UqHbTNz8GeQdmaVusb3bDNP5eRoDauyH59AuQipfcLuvVyamBhMETaL8B",
  "key17": "3y4kNttkgZguF8G5dbVBEhzKvyFn2KNB187D1cW8RzYiKbTwfjAwriiXFpVFq24EykfghfjeYu9MZkVNaoHMjuyJ",
  "key18": "3kVbv5uwsWbXrr5PHAkpT6jBUZW6dhHqdGy7sDzaXq2gYzhH72fQaQy83D9pmHsDH7jcmt6HdZQ2ytxYvWJB3Hz8",
  "key19": "2oToaiysKRRopJpb6FTksyD2B2fwY6ZtZb15mXzZ1omQK5CBdCRxMQuaApWfaAhKoSmhZvAJcC6G718ChWqhuyPR",
  "key20": "67LEAnBEejCbv823QxDLUkCgb23ctHvNPtX8W2t3c47FVYi1QJ1YFda6N8ps7aUn6ciY1yuuoFJhucMjgzLmPY1o",
  "key21": "aYybLpNhkchcQCuznTpfAnMP7pvgNPUdoAkzBZ9zcvQHBHNqTsVVC2rnZHsTHKhdD8W618h8WHeHKYVzJ51z2ds",
  "key22": "4GsLB33SeMTkHmQuk2ozeaufQhvWKBtMZnvg9Dv9Q8g3SpuA1dcuhvV3292yFGMge6PE1HH9UHhQX4eyzHPjwtJG",
  "key23": "2p2UC93BNTuaMXjnbL6xDEDcF9UDcuFZYudH8NFQ42eQzSZK42bi7axhzcv7WtVqvsHMyc5n6BmExKzLrcLsRpEo",
  "key24": "64r9k5BDJzJ5Xpy3XXLSeKAWq6eHr1GrEnAjkR6345bV9nzdi9o8yzBSe93cGp4gkz5m5gLG9yCoVPcyZWB9t5KL",
  "key25": "3icsB4VBTQTpmMGpycRhKGqywSUGsz9hKwjtrxf7BVHrC1vzQGsiZLDkybbfzsEPnCsgvXLi49KS2JqsnykE68yY",
  "key26": "9BsdsPzYXq5JsoQzKXMD6vwb9HryU12thp9pV41axTSomupSAs337SbQNjpcR6rviT2BjDdzMEtw6mEvzgYWRpt",
  "key27": "4MzPVkzA7T1yFNWGnpZQDUSuAUznNcMk93UY4BaZ5wBvVDunWsPheVg4AL8BywLyx4KF5bibMnBwgvko6PWivh25",
  "key28": "KGm2QAZKYrXbYfE7aXtvfybuZ2tP4GyTFAjhZWCpFRTpt84cJAqXPbT4gTw6Q2MZ6rVdbu8h7qvJoEVDWJwsLR2",
  "key29": "4zrpB2PzbPGR9DoBTPQRY4EvGXQNvxv1TGjxHJaWxrUyBBvAcHcAHFom86WBPHqQvbVnTjcnNF4QtAVrDsiHui57",
  "key30": "3mdLCbLv259z8ptAkmFpSKurTxcRAdUNvzWdAxZtGEPLctitoZmHcVMmk6gqHbm4TTFc74eW7iGXssqpKCGzwa6y",
  "key31": "257QLu3v6NF9bZpE2K2uUYR2p1xb49i9oWgmJ1Nm4Wpk2iVHbvFr7psCae8uH5FaRSpC83N9AM4cWc7jy7ct9JE2",
  "key32": "4bxDLWLprZTbjospVQyS5LSEVXRDzjZKmLDLBtSStSsH1gYtFj2zVJnJb8Nt97ER1YTkK3QLzdeF9k8yHByQfmha",
  "key33": "5m6tmPJGZCn5PYxHeyaTa8wmhQFSuitmGeZ2dH8657EJFhCMuxtyUEXcqnByHZ3jNL2N2vVDzPf3uubaEDD3oVW",
  "key34": "5Jhff2rLNQAigttG1RkFyRWYXbTPXuaJzkVJUDHD1HtbvoYdmW5UqRKkAWLhvdqZaEcz19ZLmuQbgCSA6HRnd1Pe",
  "key35": "5YBUcq7ub3xaJpWdXxsCtEdP5qqLmaXwn1L9ygvbtQYa9XiBHCeHHtjXUuT4v3pL6nSwuBTTE24GMCn1va6nntpg",
  "key36": "29VWTFz3y1fYuSNbFTrLETYjJh7hNHnVDETHBVTuUUxqwB7bhunFLZnyaNLVRRqhaqagavhFN8KaaYNzKAqnEZq1",
  "key37": "48mrhNGprG81zqxuX2fKXs64gQFmdbYSP8Dr35J6bEaurdk3aQWNkUBxjHPCq5LEQCKShSCbbDxGQcr6sGnUX8h6",
  "key38": "4EZ8j43mw5t2tK8UKdD4sMGXtpUJEFkv963PBx2FSARaBqerndAmcx9ZpaH3Wbypv93Ehh4WsJrBLvk83neXa4QM",
  "key39": "3w2RXrvDydyXsHgNpGzC8ukLr9CsLvDCTFS93G3TKdyUm63mCUrsEW8MNHrjmLWJePL93rNe4fSHBYfmKf2vX61S",
  "key40": "4XXZfjzeizMCPL9EfdaooPT183prRiuqmrBjiwsVGQSGtoF6PVa3cXAzKbfqQVAGQKqmEK2fJDB9K6QWpTr69zje",
  "key41": "FPPqf4vqEKaifNkAXN868WeMQUzCoy3V9nAqeGPWhsgHQRrf83mpaZ3h1DwWpEFLMKqg4LHWFHRHrCnDHyt1g93",
  "key42": "3G3PyLMBXKKaascfWDVwECoBNXhnbFCP6Q4idmaPn79H7a5sBXa9UJZUVtijDPBKvbTZSVqfkRtVPzojdqyiohs9",
  "key43": "5zqpb26sJxdR2vxffz5hnHpxEYykgwXoNQoto2mGynUWGi8EXhcMVJmywwwu5vSwbv5wyS8ejNtMoMkjS2EqiTLV",
  "key44": "5GC1ibqDLEn2hGNdznNVnN8v5WF66U7Vc6qNkADApi3nrqFZ2Jk2Fs48QbKWAmL2gqRnhW6PiWbBX7i62DQ4bKAv"
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
