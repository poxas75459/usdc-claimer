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
    "4twqde6BwNsdMRTTP6khJQewpwTc9R5wHdkqUjJAYCQZcAdfD8UcVHJvBS1iaxR3B6kSqFUFyQ2TqtigLQd58LCD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u9EwexBJNB6dHjLHB1TD4GiKCva57jWp27uTd6GHfZ1tgVqzDv3taohG3xHUw8nF2LxGriHy9FaahnJ88f5MSG8",
  "key1": "2HpoiZBLLPC9XGmHtJTPCSjkDvp49axhqiEfH2H44hLXjEyRLwaxunuskZWr1gNH7s91wmJ1jNfJeEmpWcvwFeQZ",
  "key2": "5qvt1ujFQmP9MPLFmCSg6U5K1vH4qgVYkVsYdMyfN2ZEGf73dU1cjYnMgrTcJDdTnhSeHY8sokcCBbidxBYCe6Xz",
  "key3": "2M5dRzBNjZPxqer3G3BVT6w2Ly8tegyJhNiegv2ULnaQ8EYFqhdmymizcqD3eJ23V4tt1XzGuGvaNTuaxCvCJ1J4",
  "key4": "21R3RCdSqgZhgJni6jWPvXJN4LeeHsCpCrd3GAeicyuheYmofQJdHFkKJNf6hBqGudBbY426pNpwJ4D7nsJgV8iX",
  "key5": "JtptZjCh5Uvem61vDsuhSwav3mKowWMPLuLPVbUWcxYU8uM81ojDLbqdCD5YUZLZRMMz9RqFTdFGkVxaqUbHh3R",
  "key6": "4uM5MDN9sgFTPHsGkkkKQkFhbiLyPpQHPojbrtQvqXUsDMm55Qp6DM175y2TczARbuLpEMESjHdCEAnb7Qe6v89N",
  "key7": "4snzqz8UhcmmwpchH8yojssyXxoyeANjk5Mtum7Jo3yidCCQjQaAJggp1qp1aqzrui6vk9PkUeBte9KmLeNhL2NX",
  "key8": "4sZyA4WUZbN7e2gSvH5nwNEARHrQBzDSa5RJRGJiHzuwwUAJ7HSF2yWmnDurC4J25ymyRfebkwwYYx5ZKpCb6c8R",
  "key9": "LH2XeJCWqZPULoiyYngcFzFEdWkTjk8eAy45E46uVVmqzKLmj7wjf4JoGbhbDfKxT9czspoMrpV3YmU5fzEoGkj",
  "key10": "3NiVHGjj3kBJZHsHAscBzXSGhij9tP1ZWT8PmHDYi3ybWngk7ufXWfks15VRq83Nou2rLSCuQhktguqPgAMjGSUo",
  "key11": "dMDyFyYBSZykKcEtDsiLLizHaWCWe7aCTEwqzQYmaA1cDH15x1bV1qYJGDgM8DyccSsNpj6Q5qGqYwMtEtufH2v",
  "key12": "628aLm57GpSfPyHvbUMzJnWc8SRUyBmZCcvV89VqcWhx9bwqucnZohoz637nQ3pj71S7P3JpmjyDCRjr9WGzjWYt",
  "key13": "5XxvMB2rnY5gCJ7gukUHBuPc6PKpnYPsoRU3DLyKoMDP1Kzp57EKcjGSWGWcoeQeu7kJ3HU1j8Z3uC1njiEzYX5W",
  "key14": "HHtJYAkjjE9FKNVutQpyiuyfx5BKUnoXtkMP5D9Ygd2CBQM9bMozCL6x5HALrwyb6rBEarSDQc9hHXRnj3EsWE1",
  "key15": "48amDnyuM6umHA3p7uVBNL3XsZVsCRLdAwHEBvNp42iE9ySbQKS5QRKrD6k7ttHJGwcSSeuuetWwHN6J9i71HkXR",
  "key16": "5G8HgYQEtSDRRCZ9qqB8GVqsR6vNckRSMH1rsi7CBTax5kLMXcDux5MWbcdFRp7hdC1MHWNzwPP8Uhq8RpNfHtCN",
  "key17": "3uX7AzF6yDye4ifmzGywpJWkWBTorX9vshvCSdmxKDpPySpcastvrPpVZJseJF8PAMubsxn7T7j5itJiEvLNA5xi",
  "key18": "5pHA9G3sznpQXgVSf2rmGqmADGuznsaxoALJiryZFyPpvwon5S63mWCE2URMTdn9xt3hTLbrTR5ABBGPt6724FtX",
  "key19": "45wcYTNRjNff23LwrgsHPAaLqxDsYZUn1L3NGHPjhYfLRtxxB314pTUTaotetJkaAzP1DTBgtqSajY9MPdbs29cW",
  "key20": "2vewnzzbTPCC5iviqDd2Z1GQkRGybpA73VXWa63ZYwLvJEEF5Aqto1XAaMr1ie4UFsRy2a76rh7LBCingyFffssi",
  "key21": "636ju7JnwBHJdDaMzpWQSUHcfin3ipMdiaWqzFT8Lm58JErPxk5htmr17CNBypgnHWF2qERDQaHA4iALQZgrJQTa",
  "key22": "CWZEhvdqNabQy4FtMbsM2BFWLwPdCAnXmRamXfofQzxkb68oVseuSMWF7w1YMSxwQbDQCZiV3dF1AQBMiNwDyG7",
  "key23": "3N7cRYh5pV6Ui41tsazN397SAPURJi8ZB8AuVNRTtNNp2KQ33umKEhRgGrDbebxhH8rc6BciGr3EuwKfemcCk1ec",
  "key24": "3zYaPBN8HtfWGbA1nq1qxAdmDESvpNttG46jV9V8FFxTriyZiwsnrGfzn59BfiKWrrSRvMQDBdUdC9gBCjhdEr2F",
  "key25": "55pRUfaiMRRytRuwPiWgLk77Mxghj9LFakKxJMhm7VmH846EMJQJxsXVNocv1To3PeGymkwkvWsKkChu6xW527EV",
  "key26": "5PbfbwBoxLWhD35BxZkuKJsWSEMJRXDuAJvFkqLNbiiPKDoBt17yueqMdiuhY3piovdkfAnNvrxWJyaFguUEVSaw",
  "key27": "5MSxJjHY3AX35vz6uvQ7GPvR6syo5rez6VpmbqCkFgK411shYXFb7EmtqRheuM4xL8GEFxBL95xmwGr7zDbFC3Jm",
  "key28": "532iyQNmkx3MSGdP54VwX1hBLrFry6GfEUq2Qg8Z3Uyx1EknsxJ5wyfqcyXa9myJAjCV5bQdoejnkZdvJNr6dxaR",
  "key29": "66rN3wAGe8NBRaPgwMe53gysMcfaztUF7DB1Bq1mMWU7ssXvohqn89n1FuDshAjRcacN2s3JfgKUmxaZ6zigfSBf",
  "key30": "62QMNNARyPXUzLRbqdTr23mQ2nex9ufFf3nrk97y1V9HHzJKS8z4yekxVn9y1d8uQ9zgBN8nAt6UvpE12taUpA6F",
  "key31": "3fdEt5KdvPjVc75fPhbHK6kwLmun5zc7apxfhKbh8cUQEJMibDsBFfDgWoBcrBXxur8mvajwAejyEN4FBvf9N4Nq",
  "key32": "Gnpe3Rk5YhytAq9x3g7KcfRkcpfSaawJqLZjUfdBbxksaDxJm47jEcMfha7EMNXtio9DuqNC5Fjfu1EFxA5PTip",
  "key33": "3uMsA7FyUtXJ6TiXryzVamxwxGbyiJADUEd1k4RcAQP49iksFKUCFWkeHsjntjLM7teSH98on5SXLT1bmRzmVZHN",
  "key34": "MMUiMdQLnkP6pgdDF3Ap5DcF1JH1jTmWB4Tn2tCzteX1RZFNuvvRw9PnsD4f6P5LpoxFPnKBagLd6cjiZh5nWA7",
  "key35": "2zbeJ3KNpFvrU1mFJwsQYERkgbwbQ4GVSGr2XnSfxHdVDA64jZE8tztuPchU7bP7V9m6etr4NjoNFioTn2SCX1gw",
  "key36": "4sgAtgnAqLj6ZTPPodNpZ7x2fQ3ZtXdNdDJv98Q3mcHDTUf64LhHyVezFxb8FLP2cENg8U9MELLwVDskwVqqhTms",
  "key37": "5XVZiMdPsgmxXWyJwYp5c5gTYGY2SM8AjPGavbFe1WoKiuMpxoHxByZipmp4Qg3yRGuaXQFJr2YCuC858KhMdbWF",
  "key38": "2foSvHqYBc2spACAwTQE1SCbQUitNL7PwUTdWBkYsowVqZmv88GWrh9SDpmcfmbZ5hAD2DiGAzQTZY6XkFeFyVG5",
  "key39": "2y6UiaLQRpSrT4dfSseGHpRuirTWjyz3mU5ci8sitzd1zVQE74bu7dLhqCL3u76YF2B7kq34UC4WbJdQ67SfSUdr",
  "key40": "2aufwsCTqFfBpXmsAvWkEtYzDZTf2kk7qo5CZRY5eGUeu9oZg1RQD2V3g5DNwiSua1JhD1RvDe4b94qD6MQ1A4sA",
  "key41": "4aWwUFf4bWHJfAE67ZzWeyVLZggXJr5SBiVULbXiiAcf1T7BzSoLgfAaN2bgHv4JeynV12SwCuYVeft3rYu79e8q"
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
