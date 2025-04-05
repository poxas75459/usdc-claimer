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
    "4VyMxauBNcZiCEFHYTaAFnhZXESgrc8y2Anyrp9R939rpgi4yP6ZEvyvnP4pGen3RxCubqHr69mVoxnEWWJgBCL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRU3rDks1EgvqwZ6Uec7aKzpD4SpQWiVNi6VAtJAnJsYJUe8Q5yDM81B1kTzWDo6n3L2nCKrpFRhsecPuiAJiFG",
  "key1": "4asKy1Sk7bHwXZvinFnNfY9b4P7ZqFMRfvKYH8NmBQYD4753QhrHNuvDCdCgLBE8aKZeuVWdaFdPguQqYPzjfPoE",
  "key2": "2EEB9zbEEGGq9yCUGxnjxdDkNCUa1CBUPmEmZBzqWeQsLHrRPA3wLgoa9aJtxXQ94KuPpTY5KPHe3kAjmuAeRuq8",
  "key3": "3CUUJYS5CBUd9f1eMcHhYivddRA14oXNECQA3yoZJ5Uq58Tk6RDiW6NfuTqjek6gWB1cJRscFapH5gshcs4mfsSz",
  "key4": "4pKnBi3nhXQcxDRrByFvqY1yJmg89zL3TfR6uJic27CNpB2heXFErCyKdZfooZDS9euAS9H8aRyzFyzbnYuonaXE",
  "key5": "3o2oe4yUUHomM9ebGG4zuCREU7h5Lt1BvFbKNqRpcaEAFe99Z1p18FdBMhg6SEUqab4JyaubBFwB42iWRfC9PzsP",
  "key6": "3ABKSz8UeeJ9DLDqiwK2g6D5pN9bfLdZWiAtjoYdbZfqJYNVdLwdmppmph6ydFZHdQWE7rpUmi4dvG3mFqwmmvwx",
  "key7": "2GQCwsRJFXLqY1pGuZ2ctqALjRAwenUCtRKWbFb6DXxBQkmLYyoXPPHfKtGBTEbmsYZyfqodD2zHnDE8GBothuu4",
  "key8": "5YPdUbiBSAb6VyM1LmGvNKTxEFvRRQsvcRV8v2vagWt3AYGbCi6FC37WhA7bXm4fEykUxUEGmF4941k4qiGG8hcU",
  "key9": "51nr6mDBJoSk4zEEsBRsn3TJDwcdxAz9FASGvNtjVJeuhmQLQtWQBxccrwREXuJgUcs7r2GxpZ3wRKRqDQ3pbVHa",
  "key10": "4EHzRt236GUkmEBamFo47kLtVu9NeikT7BCG7fvcnc31exroe8gMnfTKwyXD5GHrt4ufBm9uXX1tuxcdqcdJoS63",
  "key11": "2yw9gMazixBKLVcCd4j2YpXtcUaECXHt941KqaMXkvqNTx5kUUYXykGKFJyjoL3UHFaRFJBoVdBegzFPsYhpyk4Z",
  "key12": "5BMqJhbFRJZ3cgLHpw3Ld3TGgLi7mjYfzAj6MGWbWLcnQd7c5CvUM83VY9xPN6HDy8nKEASMTyZsiU9kXE4KG7DK",
  "key13": "22dnoqjvhyoffmxt8wMPemsqB23Y34zgfaFmkUwuHSgT7nxUcFmaiTePpGcVRiM2H9u28dn3U6x89kuwjfvEhmrj",
  "key14": "4Ld565P5AuZy4jPc86hK1ZkEHrcHCQQ2xU4ofxujYyLvDHJAPpxCbyex6gXGqpzijhzJZMQ3poNCMsZCXvmMAjGK",
  "key15": "2uC6Wf51mPBRBn8HTDAq7jxdZTJipeuLy6pvf7RVgDniQQnTNMdQmVBdqGAW28hmGGyfEbomsUsYYSknVNbnV87x",
  "key16": "yS68PksWmUJbqEoZ6HRwNcQqfkr1kCTrYwwdruHHuLWHj2xHS8n7DXsus2EHfhHnnmtY78dAM1MR2ra3vh4Yfif",
  "key17": "5ACE5Ti22U4jJL2TamxNtaYazrsSvsA4ncDAAThc5Y1gV1yD9s1EAedmNjhPh1QNCD8Cevvbpj35oQkR47duSYvc",
  "key18": "42xWxLs4znBPjKiQBEieemfS6Ardu2zkgLZUWNC6Ja4sghJuxmSqc5hQPTvBdXdNpCWRMfi7thMdjKto61Cxxwvd",
  "key19": "37Bxb4y7urfrHGYJLY1hV6rwi3d5XN2mz1xpbQ7ZBcjm2uY3uPnsCMQYcv1tfBeLXEc6bjSnh9kXDrqtVxFAeD9B",
  "key20": "4VoXagA8UAe1tKcXc1bdf6irhXF8upa7UuofNFotqW5kvdAwfLHhoe9XNiQZW72K2eTXpjdPoANggAKccnrc2xXc",
  "key21": "54vnFjnnG3CvfmEdYM13uk2PyYM8tZiJgJsaci86667z7eTnyqEDZCN5iXMkUMAfumpHEJHMR7eSzwwd3hsk1ZNy",
  "key22": "215yeL19ktR7bVuqLhSNJkAznrGqbMUw5tokevatKSJ5Qm5RVBQyWDVPMU7S51M1wzqPD5bdcnB7u1KvPJDPUmkj",
  "key23": "Tf8pkHgKwUJMLCKQp7ASzSMfL9brP4iBWgyafDLKE47mBnQvDC2oS6FtbVQE1UJHYi7MbQwi9ugZ2njPvwWxohT",
  "key24": "2hXvV2tQQWrK96SGw1v2hMLNEnaYJ4sZRHF1TJ9pUELDuA2xFRUUbEyKcLW6SGTD4KT3NkB2g7xWuDxwrjXVLETP",
  "key25": "3Emw7946LcKqNpKSaymirXMVmBfPpUAmeEWS4KLnoKXEwrnzMBSRLLMMsiE4ncR4TCg9VwCHVg9eggfqqEYAb1C4",
  "key26": "5Q4eoywHo6hxjuDZgRVaKgUvdh1dEeVvd9gxMAAyghJ62QicmjDXNwrP669Hs4zsMDYU3iiv2ui2hZKCm1p3vLch",
  "key27": "2avy556RVMTk2t8TfzL16kUa1nVEF1wDYcGjxCrTCLDjqfQV5GpCc6AK1P3wCmCiiaePs7DD6fpAhLXoVUez6jED",
  "key28": "3grxuvU1NokjPk1AtHkW8Nn92htLEVKp7wnaPh5mRho3Wugx2qxfK7BzZ5FRzB6FopuGYBRGG1Km2NXEnvyUuH2r",
  "key29": "3n1wopBL3NA4Y1wv6My5SzeYpmRnUEWCZySxexZQsbz1QWr5B6DoDQAwSiv9quk8d6BohEGUAPUSJR4xB6aEV5Ad",
  "key30": "2NPGCNopTZY3KMDrhUDwjnmLWBqX7qG6zVrE2WL9vmABxLwy3QC5JEv4yX2AQapczUJFf1AZVDSUzTtRiPaWmZcc",
  "key31": "2D6YpHnBa7UyNa6rGYFSRTLnyDE7zXBZdveYcHoued7bubDySQubZd6JDcv9Bj9GHFA1uhLuqM3fwyVvcQP6eqsf",
  "key32": "3VqrXXo53Q7MzjA8iBMGSX52ueVvHXVVycZHyiV75ds4t4auQWVwLheY3kNnuM3kGLRECcHrxWnBV16wnu4D6yLy",
  "key33": "eQR9odh2SfxgeBFsdAeExJ8qszWXeCSUp6WtmY9rq1xweBtLBCHRQG2o9c11TevqVp5wtW6rcHHiCcgNVcw6Yr3",
  "key34": "5dnGgVMBFvR8tWu2PnEVDtkt5FhTfbRKW72sekCHBHrFbCe96WKsQqwc9GBKvjuvG4UjaGXxpDuq36PdqFkGKGVp",
  "key35": "2f2waHCZ6uT7V4H1K8uoxtF53pezLEF9GAPVv7YNyTUprPrexeSNGqM7Wd9NNB5HTKwfvSuzF7yueYMuYCh8esQu",
  "key36": "45k76FogE68Rykf9eEJrugQkWEuwATRnFpjVYBEs8K93snLeDYgdDyZgHPRC5XsGe6ZtL6LpMX8u2kL6hN8gcCi9",
  "key37": "5Pq5w2dybjLPEPCti62wHTTX7CTCa3PBzXMYew1pgekcmLnK6ZQ4guWnV1GovAB3aQdmiH2KADtwxtZGE4PiEVmF",
  "key38": "3PXvLkYAp7noY12FBLMNJqwzfmQF6ChJzmRPX5Gj99WWvCWsVHPzRPGXzAkCZSngWgA3gaoD59E7g9Et7wJ9ZDPC",
  "key39": "4SVhBEqr625WBDTjJtK2jShdbN2DJtDSxFt2YSQQRm8Z93T3a9z5TY4vkmc2pWNwfbqoKo81xytqAmNyaUhbHygb",
  "key40": "KmKgTqFVWWYeo7egcWMQcTSz8TRKirmHrKGJZyZsaUpCku3SrnvcEvQJPVFWvoYZPiWmdV7uPw8pCb3PrSDjaDA",
  "key41": "4pY6vZK7DhfuLTfBR4agwwEBjGmgWaz9sCBLrWjp8AkXd7QLMYAeDtZLb62Bpozy1PUyYucYoy6Mad2cuC1ptDAw",
  "key42": "wVeGAm9Jo8pFuMnxwJjdTS3v93KMhWhwWNwmcdWfzcwrFFvt8Y7M8D7Q5ATGGuzJdHLbhdob2XaLjNvXNbxcLiL",
  "key43": "65cxcQYvf5wWbTkjxScYZqyD5MrgCCZNYa4dYDpjwPANTZffychRGnHHU7Z8qSCT1h2qbEcbeiSqu8DGXUm8MmBY",
  "key44": "q7uQmqQ4ZEEDnSeV6nP6XJ3ExZUFZPX8wDP4UNus8xH5vNuSgzF3bZGEoTpCeVZTW54wkd8Ka15DCsBARypjfhu",
  "key45": "f5niedp99CnaHeeSgzc39hamDArDjuBLHrnJTXHU8vY7dLH54XtfgKn5tMtax23Rtjc3DXnLLQ4H6YBpBpRxo86",
  "key46": "nCXuSBxUBkW76vJVaoHuANmpSQ3LR5bKjnWdem4dQXV6q3zqS2BgtMHNLqUboPLKZuLSgwxcKWm2ZfZjRkWbqXd",
  "key47": "3iVvVbAX3AWjabEF5yDKCNf2w7knYXE8c4VDS7CXq7qMFp4ARGV1tqfNenGcb6vBZfj631Pe9WD9R5d7PCTtnhyb",
  "key48": "259UU4Zp5GtVCvFkweuZiX1RCXDXoetnPA2hzxE4NvLXTMkm3BVL3o4hLcpQHqaXsiAg417xmhCoTULp7KX2EqVH",
  "key49": "3VpHyi8nmAh7PHxkyVL5dywbCFSDzrSfWHUzW7z5aMx4kybhXvcZcJXcMVdParz6A6VYQbS2bPvVNrhKB1u6LchU"
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
