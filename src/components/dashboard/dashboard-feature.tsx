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
    "eTD9RXAd5QSt4fmFU1U6453E6i5ZzNbtqTwMB6BfiqNnStzDpUrrKJykqPtHGAk2acey34AgQwo54xPUiFopGz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GsbPHPdHPpyJ7SLqoZMtD7cvKLD2q3DC4ReGNTCpAV3x6HrLeVsD3joQpcjQY7hmQZExmM7rbfe29CpZsrdoWGG",
  "key1": "44T8SuS9GQ1UodpTx3LM2ovTYEBL7AV1LVKdxSbRUVrjnKhpqF3uKMHaEKhPs2GCk3TpWzwNJmeAUQGwKZCFXgPp",
  "key2": "51KKE5dBb6ALpcavxCpz7nbnMjpoRoQj6UwV2iNoLJNTPSm3nKBgoeEm76vXEnsgi74FcV26pEEt3FSLCpMA4uTX",
  "key3": "5hB3jvQsKmNzoTRc7vMToZEqAHpZ8PWG64mVwzN29GdWRhoTrc6JRkTA1JNv5YJSDinBKS3yKNr1rLkmz3D26cpr",
  "key4": "4BGtw41QbGmKWDXGFFYjjLWsAkgr9ztx4jMiEiyNRWkioDFF1M9te13Ke567roq7eiZ5fh2cmP8xCGzphYKzcifS",
  "key5": "2tuKmKk8zh5WB4L7dyGdHmE9mLXZKSYg3MT8d9TDYhq1tjcFepqia8axk27t6nKTAmD9uuRtSSFsBQty2t1Ez2Lp",
  "key6": "4rsWgZ38cd1sb8dJcXYPwUzSkPmZjNaR2r9Ym6WL5ZBi5dkvJjV8Zo4gTvB7B3vrNpPrPnfqHTtznWj5BycZP3nz",
  "key7": "54K7nseBmWY9rHHfpZRpP1hhwkV7AU5yMN8GvztsAPP29cNDunj3HXmPEwG6JcsQRo1pfJtWV2B59QLdxygUnn7M",
  "key8": "65ZJDw4PhwGHpVYtGBCczcWjzKANhVmdchWXwx62wbQ4HoLV9mVRUWVVc1DqucfbcQ329yaCUQrdxaiNzCEGM7Tq",
  "key9": "4Y5zNi35YLQz5j9viRiTvn9hXWiPxh9scqBdv1WTAffVcH9SJuosWz5KRMStKyky5LEy6F59SXM6R4DKzku2Vi25",
  "key10": "2NEnuPpKszFP8gFcj9LdpTQW2Nz8KxmXAowgqJsojhg5fDqbDN7eq1FGHxuoQyBL4gY89NYXyWxpTTc4jXkFWNBy",
  "key11": "57QNoLWwFbwv7B73eav8j1XSYNKjQBBT55sezGZC9iMzJHePLb8G4b51N513EYyHRDYAJcDwUaQbirokq8iJNhCe",
  "key12": "kgb56EawgQLa7QFoLA5aVr9KZkwdmJcNwfwHwrfSiPQ48GEBGB1T7TCUNjtexUVyeMN4bNqg7KgDvGzowPxnXeh",
  "key13": "KAwDumih2tn3nYB85fubkXq4ytPXbvkH814beZ41a6LbuQWqyPwt7eVeNeRqpXfghidKkFdhavA8iA5TNXgocwQ",
  "key14": "bsjDqHshVXAmPGcqnyQR6XvAsYaHmWHzjtUJH1xS1p36s4uEC2bTL8ZJEXkFBxoXRSdtM4wqPJmT3scb3ZwPnti",
  "key15": "2eP34CbXvWCzXkFDkRdTCLadruSKAX7hvupGQEvX9pe8qC4akbaB9QMbQJKkb5aQEUcTGZpgGupk9JF3ZCWAdAJt",
  "key16": "2a1Kq1Gz2DWCXrqznT4CwiipfHtS1wg11j4E6Dnjt3cADXhDfVtJ2gT4dZyjeAiRDmLHHZxSKHiAobLLZm6zfLw7",
  "key17": "4tBFQd4rxeHC9yBWoWC26TWoxntsJyPAWiJ87uBLZsz2ygGHBzJFXr9oBc25sK9VwsYShYjAbQivVbYCdqjn5KVj",
  "key18": "2EVj48eewhceBsgvMx9LNf1TqBhFVTvZDfiJ2vT3UUdhpuyC3xXm7qyTetDhZJ74a9GjCt9Fiou6T6Ppeua8q9q1",
  "key19": "5VEqyYMnQGS4Nd4oVBoKzEoCoPh3FwXocikNny6oRxE1GcYmRN1k7TZRoGArgsVgjRPe2MF2fkZpGQvCXDtyR9jp",
  "key20": "4B9vQ1szAPg6vrU9J5vrqL4JhLPdYtVsz6jDKViYHnY1nHENhxmZukaQABHWHhhWbiFtz1tBNi83GKjMJM7dc4ZB",
  "key21": "2e7d8qJaJfrrfRrk8F1qBPh2nm2PwJHwFq5fPRbpS4x6rR32RLDus7pyVB1JuNVG5BrF2fbhod5KC1PZTrxtwaWm",
  "key22": "5axgkm8gfeHJoADqGyBMpTupjosfHS6K6fhDsz5p2f3pycKxmkxcxevtESBw8FByNmtUfChvBBEKdmMjRAu9a7Wz",
  "key23": "52gWhmb5xDxPVZ2uuoRLhusETQko8gd7xohcamPJKHR2Tw5pNbSu3u9DFC9TyL45eHKHZxYosTCtQtAPEivahbiu",
  "key24": "2vbX3jVt84qjSs1fyxrR2sCyHTYvmLbw5h9NBgHtMVCmTpqrmy3cY8b8crzn6chVtiHA26ZVh4URs6FHFVtEBhv9",
  "key25": "4myBvkQR9R4ftjfTkobLram1FEPfDDTimGS34UHLV18UEaHVbmxnWe9X8km4UdJkk8wctDLqsJG9WyUv9U7ML3Qc",
  "key26": "5vWJMoDsaM3BLcKi2C8FekYPUp5PPWtLRNFeTvKX4xfxe6chKcvDALzecSRBavQdF3cUrqkENNmKQYifAFvsDK9f",
  "key27": "581K2rLavcNVz2QNgvPhgYP91bkfCqJtQVttnS94VtBPANobUm2UR99bnuL2osg1B865sGf6jj59W8Yciv8g67TW",
  "key28": "5XtYLuVCuwP8qPHMvtRck4U9WiqHsb4Y4QX6enxodstredPFXXZyphTbi6gckJxNBfVuLnyU6nMXXhPcUrd6ExA4",
  "key29": "3PBqponqfXRTm6GCBHGXo1bNYeuGwpb7cRbvBchC8BbhJk2xsTUEKXthJHNxWKaPX5WWCjU46zJzUqVfmkFtZD6k",
  "key30": "2cAf43WRuZuVjGz5u3cyWCB5rzzgRaDczbiKPBsqJXqbTpDQcdnBbCtFX73uxtu52u7pKM6iwcdJoXZ6GKw38uA3",
  "key31": "3WChQ2E8df9ywobwXcAPykSGJEx6F4W7EhB4XEidwm9Hkf9Hm5N2bvN2vc6hjEgtmnTvcECKXpZ3H3RDb2bj6LaN",
  "key32": "3AcLMVQ7eSQvYKK13HaTR3hBLMTzyegYWuqp1AtEiZ4Adkg1ti2tptrucwy4UbTZ1j6WFLtpNGuWobWz9wx7cSb9",
  "key33": "2QEjmRjsNXxAYxHVwW93MtcX7665gKSiuMkZYDxTomPQ3shqL1MoUw96C3t39m54EKkMoVDVJdwHxYoDvzsp7TjA",
  "key34": "5Gqr1rHi4pTeuTsZFsDUocckZyNxdfSHxL6Wn8BcAA9HRyUwiZgVsCY8BB9oaQr4mbDi2D7p2wLAwJJpDahCJowC",
  "key35": "5Er22sKfmDWpCQW36vKjgRKRiqMZ86EZ8kMYNPf2NDPzUzDhtF7rdzBTXrfX7E7st741qj72EuPZibc5sAu8b4YF",
  "key36": "yvSTnbqvbQq3xA6L7JdHoCNkt4vYyURfnXbYXqz29oy3BGWAnD7xrx6fd8kR7AsTJVj3kx1ZYRq4koVh1wf7dsB",
  "key37": "3o4krahkXQxj9xdEFvNqFYq8tLCmFgSjcouEbH44kPg9jdu31vqomdZ3WHxodFx7Besiq3jEPNTboxJQpyxmDBwK",
  "key38": "4yzr3ZvDxiNZy7uqRmDRYXhaH6WVuse4hTchmLR6pfCcw9CupqVupuPeXt1c5CXb7JNUe2yRvtgQqi8Txf1yD3uL"
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
