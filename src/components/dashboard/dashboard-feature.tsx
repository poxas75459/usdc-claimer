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
    "VJ5aVXX6L8Gj1pShW1zmt6oAVFY3UwFAx7LseWcRmZhALTrKWEQTjz4QauKbyapJbswToModdUtFZR5KDRpABWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBnTo9yC4cyHU55CeaxDEogNazmsPuZpN3Z5C2oCyDuuHrYp8xerEjLQ8bLK3RQpQmwoQ66aBBQqFxgzmbaEzyt",
  "key1": "37Nmr1je9UFkp55duSxM4HCLqq9bYTEN4jjo8p4gJZ1avgN1dU5UptHWLCM82aXkQmbZFM8YT2gmARBHYLXuc7bX",
  "key2": "2iBqi14VifNFokVmhqiE96La73kYqZymWrL7we9P1ZqLuMRyeLY1MuycYBdA2HoHfmSbPRUd3rYiktnZL2wHJbQj",
  "key3": "2eSQ11ZDuQZvuGLvSQQQbRK4NkE72mLw1v3EXW8de4e3MtC55mXP8sKBGDysyMrWHKYWkQoPaJ7gxnAQp4fVHBXk",
  "key4": "3sCpJx1oAqnHcEjG47Z4omgZxipna4w5UzrAExVxqiYrM9PmhZfq9hCiSt2dsSJLjLFQYq9gMHXv9L9Anqp8nfxq",
  "key5": "4WVBas1NkY9gp6nfkUHBdtrzWf1DrXwm9tpKGqemGLNsaJGUHPA8Z9KAN1q1RLzZRLJJUsQPm5nNVdSd4qV6iih7",
  "key6": "4YTtS72rZXwdWCg8oS4dFVEfevvMwbFh2WT2mNBDehib6xbBf6reRDe3UKQveLRGyVGugzdiJFSm4JmseRrPegas",
  "key7": "3NxLYrY6oLSnEjrGRrzy2ccSWNBvnoxVqGayssQYfERkZE29voiLtycCTr9Q5zxmA9L8fR1VgQ542fCBENgsZkbg",
  "key8": "3GNdKQK6pm1sceCjYA5WP7G7tHsshbN9R3HLKUi57qeTK1j7ZfiC78ZNnyGvMKAhpSrkRu4jxCeFr4B9RHD1Zgvd",
  "key9": "2obqJiod8QRLLKBsg9UzgW46F7QVqT4ZB2khVsLawgWHB2hDY36eQYDZF6G9V8mFUh9WZbDW6mLhii4TUaCMQiDs",
  "key10": "4FUboVMut7B2pKiaVWgNsz265WPDa8A13bUiQJPwJWuXzSWGXT9TCx1V8PfEKFB4dWP6qeBr7jUvZFCaQxcxbchM",
  "key11": "hSPDA2RLUQfvFLVC3VA8JKMWDKUdj7pBho8qtmPz2Fs84DcUquTv2E1B91Lqs7NH621KB8LMzV9HN5zPGd2b71G",
  "key12": "3EB6hKARuZm1NujcwKkBnRiWxzCYzHQE5ByYp8trE4VnY49DGzdXiceppKFie38HrqBmNLer36y2CuP2az8fbTLk",
  "key13": "2682TEBxMU8Z44JVP7xS7CThrrHFgX2ZoW6yjaRY1pT2ZXwHViCGwvjLoHytT4jeMN4qj3yCYMoxBfxFet8UJinA",
  "key14": "472gv7ykve1EjuMRJAYFfPQHKPGxoyi2xAWmt8wfgy7wMPjCaYYW4j432r3JGp1fAXjFjVnVVFDSyaMRdoQ6GwLt",
  "key15": "4aB36pvYJFkSTrQkR3crsDbtYgVomYafHhWFNaK86Z6HDCMZxpzSu7ASzxzdALzGg5GmQSLCr1d96byxuRyccGjP",
  "key16": "49NFuPdS74SHW3Q7Jkmgf3jXDPfijkPD5AJqadEkYkyLbc8fx8dMfXgASqCFHw4sq3rhxz7UEphVAQS2KffYtck4",
  "key17": "128uBcE7LJgfXq9NXGyzuepLvE9t55ktK3WBmgknsBH8J8v4WNeLz4tWhMVXw6TqwnTe1pWxHRwTh5NS75kvV8YT",
  "key18": "2FTFFjtUE6SQ4NZR72wtPh1ePcWsuxier3B8FraiHw8xK3JJjsGPq1TwSGDAW5BTUR3jrC2mZEokYnjrTTcnQaXg",
  "key19": "4Cobjrp8zRcRXZyhKyPdaFTiEWTaX5KJFrCfmgMtRQ6fCZ3asYM41abCR1YzGem2FB29NJfcfktS9SDBGgab4G4K",
  "key20": "31FV7zCfAkwT1Ue7WjYYHcwKrU456UfZXT3Ps6wcJBMkXx8ioeYHZYHMoeZHno8YiPykfBJJ6Xotq26S35Stx8HR",
  "key21": "2jQKcR2XtZPtX1TUHdTBZmLRGRjAHbyS1xjangaKUoWy487Ltpg3N4QP7xUPTJydPffHevGgtPoEunBKquSd7qmy",
  "key22": "2WmmTuZJ7amt7Q1i34jGu12MZvx3sk2RdGpGgtMNHTMy51rZQgF4CoY12mWfqXXg49qE5ZntFEX1P4GUdARBkn76",
  "key23": "53gywv2HKSxT6zAMMkFQJbj3nhax5T6bpXfYVoyRDvzJzn3yByP2cKSDrjxDiQRgAjW9XVmxqzvMumgk2x1MPC7b",
  "key24": "JmP8vFg9QPuqZjp1pcwqH7CE3S9gtZ1B1Pd3Pfob1DBxmFd6n76sbbzbsZAFZnC3K3Xvjh4uJCd2msW1uq7gN7A",
  "key25": "3fPNDD88vFBE1xBjaNosTtQ3DFwMLHcZmZrSBc7QGuNYEDw3hqDagD3na2oGGQJBrfKhGWtcbVai2ergovrKx2Q8",
  "key26": "4EYpaNeq4mzeEx3txNxKW2RjtwEtahtxpCz6XfeoWizR5JbJiQBqAY1hnfPm6AzxNAJUggRMbvhkhaHPeA2U34mL",
  "key27": "5FKGnX37azjX6CPHniwhDto4324og8KZdfqc3KK9DhhLkNhDnhGxbXjXuJMS3ob4kPHGd2ckhXYCj9P6uHTkYMW7",
  "key28": "2E8uwgPrJVfV8G7PT267AaMDr9qmxwgNudaPxPrgmTCe3rYCC65XB6poC7hGrU5cNZHqYcKhQbR1tufoanGjgrsr",
  "key29": "5sf9VyPtCMx9R9L3ziokGHcpvcf6exHCcMvWF7zdeKAHj1ynhzdTgQ8hNXxFpUQQNmECWZU51FStAzLMgP1NqA6Z",
  "key30": "5RkGNGmZnN7PhSfZtJhqwgL1mTQ3KiMW693N1UR7HZB17NGAAJXHfQ6sK7F1r5D3VTowkoGLyL8CHG1L31nS4Jri",
  "key31": "2Eypq2vvXqvWKNYBxMkzmRcEo3zZnoyLJ5EUed7TmrGEAyekrnxfmFGeT6KTJ71c1xwY74FvcJY9UnN8f5gNjffD",
  "key32": "3QqiJnCCp8gm5C7yUcGsZk6YHH7Q4iC14G8aGmTTc63e1AFzbvjY2dsxDJtsUgpX3uRzSqsbkYnzSeu2QD8kqazt",
  "key33": "5tv5zVEqyg14DNUPLWsrfLfMaNxFk4LgKXkfHj7hEeWa9qoXVTTxHJtz36Wi6ToVMNBXFFcATtpVkBqPBGk2VhdE",
  "key34": "YCVteCcEdCVXCe5TvutzBJA6AUQtBjeVcbyLU2PuNHs6dVss9DkjLwFu3a3tj72u92RnhykRyW881Tx7NTwFWis",
  "key35": "5tSHVeye8aS6A5Q5uVQ3zzeKf3QdYvjubzmLwUAx5L6Qz9bbm1yrLgEHX9JoFR4jdz9cUTtW3vBPLox8fecc5qJJ",
  "key36": "2L6WiEuvtLmo8qCu2NHLeD9pjGrmMzgLRPxFM2BWezDjC3uQJa6Ammo3qqpFvxpdFjSksBmWNRKWj2SmVvQfeEg3",
  "key37": "4qy72QHKFaivtGZmcFPkaqpbTp3zEJUkgM92muESh8tVn1V6aHsyvG3HramiJpS7exm3iGmN2w8rG9A5AEQbPZWm",
  "key38": "3uTwBcZBU6s9JQadahToHdnwie7zWZuY9QAWynQ9UiBHmqTPuAWbUsRxx5YsDi3ohCCJXEJfgjTmLj5djtsLcWYi",
  "key39": "63Gc7yqC96kemhT78MDep9aZBjvaPw3fmpSdiHS4VCqo4t3qwttC3mU7sCfimVsvtCwiyo1YLPTwmxgdLiRwsNQw",
  "key40": "2wdKZoWfyhpW82Rs2kv1FE4wbCv9MaLkQ8QsUJHb2BB1mGMPR4iZe5xdbaQEi4HnSnpG9krCVSSnqDvrbtJ35fwg",
  "key41": "64CmSksY7aGxxeyaQzaqEojWPf8Fpd5uynSNUf1AVXJQvbmb7HCWE1z7euNuHvnNyFnhrnqpqHFbu7sWxPnqoSpD",
  "key42": "4f6nL3djqpEMBquX9TKtKouQzbUsUV19ABrks46en1eUEMTqka6LfKfME4qwc4o5k7pCDyyxq9vivathVYKGZynG",
  "key43": "4sXxB9JDQCgoyYiFnLN1XH2ZcivTVzi3SjAw5tXzfUfMaSkLa3TZSTMLqLV8e6CTED6PKHKPekjzeaWFSvvc9HxP",
  "key44": "6y6XwT7JSyYGBG6uvhbJKtCx2ZGzbKuUUVTEDH4Wvfqvs5zbNXnVchQPzMqQsmRsh7Reus2Z5hmBrq6RK5bqtyc",
  "key45": "4obVEDf5kvEdXVj9NKWiudvj7C7FDXbWXpyeeqgYXLo2n9BXxsRQ456MaoHnsPWxo4KzYr9YyGpzgL6SgxtE5zJh",
  "key46": "4Pvq5LL8jZKeXHSJHcu5LUMpeubRhN34iRmK9VjH8Edxvpumc7DmZmg3wwBheB83mebNUtFrK91Q2KNVbqqNiJiT",
  "key47": "3Dg8AApuZYMuhBdLFFRpzeE7HcTr1WgZLWTaypwwKahHH3AxshsQidWeKd4svmC1R29QoUCndDH52cYvsCbz9BUc"
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
