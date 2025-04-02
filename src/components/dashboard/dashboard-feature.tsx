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
    "2sw7APXMcccMtrNcDEpyGpzXDFKVcxbTrrCtvSF3ZzpuMopBXvx8KskVEH7Rgmb3XNK6WuC78HefZv9TY7CAoSUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c3wAKRccYtchhC4SUehQub8neMfUQbSmddYHQsQ9YjYcZa5uoZTTiv34aQgi49bjd4tkkdKSFTbukPw2SJxzmEv",
  "key1": "3eK8hGujzWpNThWyTyf5URKWpkP8bfLcTW5e3fLrMSBJEqkLrvUfCzJUpmXoovKyfzc2rfxhXJJMAQu11UTgeECQ",
  "key2": "2SMCcvviH8tu6qGy7wNF4R8Sb9XxBWZNS2EewgsELajbbUSpKpdLVCUN8aM98cC8rqwCMAxWugLdvHGJDAbFjetV",
  "key3": "Z7NDzLsNiQqPeZ24rzfSTtCg5fRJ2HKhhqBbA4onVdSKzQsztq7vh9S5Us5kwAVC82GV36xaHPSHCs1SXKfGD3s",
  "key4": "gf1AiUUAhv78BgkQ6BfkXLwr2yPsLgyjHYUTLnJDScNkSqrWVoU9Dh7Uuo62yriaTkZw4QheETs3YviQpHy2p42",
  "key5": "3SAb9qLsierGrUDQSadxwnzyvfg18TSi1K4mx5urYBjzazRaDfLRsb7iC2pCi8qXp7E9oCUbQB68igZWcN7DZtsH",
  "key6": "5ydaMhEbopVJChwiZfXobE9Q8Gd8sJ2PTPDWDYnN3qovbTGAfBJazjqMWS5eHpcUNhEjCkERuYXSRPfK7CVGbtKh",
  "key7": "3vdHQ9DJ3CLhNEUzunXp1DNnwYuKhDU8CQmaFaZtQmudeb7ehuouYmoguZQSSMoxbKmmcjo4agMZoHdx7MH5B8E9",
  "key8": "5zhQMXPd9gMn9YJh1JSZejCXUuQPcqL5kCVe1rETHpYvGVWL6bGxmJQXcsSQgM6DCCQyZ1r7oSgJHvfdVtQpS7Ho",
  "key9": "5JT6okj4npRVHevSa2wLYgiUo75yRN1dxQN78PXUT8GudCV6xFh1mWRSaV8NR5QWskBhnvyE7b7FyAPU8eYBFbiQ",
  "key10": "2V6Q1tnUUpjmsBec6zCfrsxk5uNEKbTVWcwCCdTYFH74ZHz8K52KtitZD7t1ousp8ddinpYsZaJz6steVj2nivhW",
  "key11": "2SWHhHmwJjDPa6L1hfTEFWTcoQKdV3E3q4UhxssHAg3FocGbFHGtdVPfkAaZfbQhVekwvcHFqtt1EKekMTxdUZpb",
  "key12": "RRqJTQcSXvAs1AWDBSbqgnEQgFKVVps16zKqwXYYUC3iYp6DTw5qyAnFCF5wMzR9xrwbcQKCdNhkPz7eMKgicWV",
  "key13": "2FWSyP3YKxgNPgaqUFcDYobGeZbcmVr1SomuSyUSxCNSTExknAL7YUPfCNUGUyyGc6xBtS65ouFhXRnYXW7j39ii",
  "key14": "5rUaDWxRz3pjXs9SmKN2ofe8rje5yC8jYfJfQJur1rYgoeQPv5pSubVYaJEBZ4aq9RCgtEAxiqwtubJtXyPuX4CJ",
  "key15": "5Qk1R3DB8EGgqqYzjXp6jw85ceGsj2yJKHZCSUQgF4mSLt2MgY4RktYHZ1PRjQa1VqMoFz1Lhc9ENYCAvLAdAVAS",
  "key16": "4CFYL9A3UW9Kwfz7vjK7dPAJxAfRt71tTyuE2TC4JFCEvboaCBiVymx559jdDuXHtJV4Z3kDMqqiJWdafT9ifb3w",
  "key17": "j2E78F6PYeqUq4KCrfcFitLsoaK8yrcon6GY2f2nC2TZcwRmRAyXuSrTYfku7WL8gRG6aKssKqgEZ2RCbetoP7v",
  "key18": "5w7zC246XjkvfHDV3GV8nxKs55URWMwDikQK6RETWSMps9Kcjy3qzutgtR1y2K5kQhLaZd38oMoWJqpk3D2kBbyQ",
  "key19": "213eHg3aQ1DyRTrX89NcS1rQfYbMc6yk9nFeNqWBfd5ZVVYXbgzHqsrkrJJdkUvLSzE3CX1S8Q4RFKBpQajWMQBq",
  "key20": "5jBc4ud3WRkhMXPqwCiNwAKWt9qcAr5vSoyR4dSDRMKwdpFUGaMc8QCgMpvS8iXytewwiaZWp2X82vxDTtvdER2c",
  "key21": "4RP9yKidVdjeh9qseM2ZKud4EnG8cmM8iimPkVEbZ7gU6iTpB5dqZLjA56DB43KmZTxxNEi2Bm2HovruW3n8TfYp",
  "key22": "64EzK7jNApAd6wKybEBnXFarqwd84xiSsFCDPG4nqxXHj9gEPinjpJyLnLKs1WuRAq3BXrHNRC8fXzUJw3GABHWL",
  "key23": "4BZWdWrYmr5FSj1J3VGfX3k6y18GFy9yBbqDAskw5bkuNBf3NwTXDozwQ92QvW3LYejJs3cQxpFgTLYhKh1C1uSB",
  "key24": "653DmQcQntmKcV7x2Vqp92EwgCWLGSPoUTaFV3ymfwgBpQJnY9FD4sh7ViJR24jU7HH1BP8rkNPEYRaZJta2DKER",
  "key25": "3hJkhzRQ83PRFHSpiJ3sUDwgnhYjc3K6B91yQUb38cyLcZHnPhKXK3hsdjwnqjkSkLyebb3ft2orWPdJMT34AQPu",
  "key26": "5jrm6bMXZNd9p75jU8bLLKF7tgej5DAkqVvgwXv98FvALnwChQwseytDsQAPtjay8nihinfiWf8SXtJhivgDv9a2",
  "key27": "2zgRQcgrwYYJmqf4Ft6uK2HU9kvrVVUvWvTc9JBsYMLZYEHRsPtS4rW35W4yqCgzWnDGMXzRr7CtGomt2fh77GhW",
  "key28": "5JxC3uT1G59XorFZRD1Yd1frxT8ea42mnN1df7DLcTsVoM5XiyPyPpzWBAWaGmBLMVJrQPm7Q3SMyreTAUJKiLjh",
  "key29": "4kdHBQETJ5uHqkvGd9yhVd4dFNgTYPTD3vK6odDJjXRCKwywmUGoxDtF54sdVU4gdL97MQr5W1yLRaGR5BvCgzP4",
  "key30": "x4SYW8AFLLczWx1mEo3tdUpAB7YVWb9cMFdBsaMUvUZvAzRR6ifyLsyD4TAm3NW687h8SuoBgAA7h4nbsDHKWcQ",
  "key31": "4b8VmC5hm5CZ6fjemYaG8pVNJkE1QijsC2ykjDLb6DNPu1NpXXmZdy5PFNcJE1wN4QSKXhrf7aVhEUuDCTGdmgTH",
  "key32": "4zgoQyoiNHtPdYYsZrkb54GPiBcb875vJ3bry9nBkcEry2yWeQ9EDzdFKiPBgJn75mKwno7UK1xrGVBzXCGnqM5q",
  "key33": "3oz3PPbCkERguKQVrS91hrhkVTvoURTk7mPmSiMD6YVj5rE4nUx7ZqjXZHVwvuhuam9XNzJtZn2cyALhih63EqcC",
  "key34": "7RcW8EZNwR9j3VDNv9txfH3jffRYDLJLaNZZay4KDBjHeAxnYhHwzxBzchYVycrsDexkuUQ85m4eVZEPwZwPkoV",
  "key35": "gvsBJd2fi8xS5nQjL2WymV2ahhu1MNvAX7i7UHubmWiQuu7YqjvsDasPoYCPrVjMFhnRjnJeYRRPdjqsK71uiLG",
  "key36": "4LHY1PvBSZWZrwr1VQfT17sSYHWPZHyg395SA5jQr4kfzMkKKBKPHk5J1veMEMZ3KfsfWCs5RxF1u44aSVaGAkQa",
  "key37": "5cMV7Z5Ghp83cZQcUFKsr1tHTFKMNrWMHgASQ2oC4Tn922cryuQ3xXp9nbBLzZQLXyWjoAqz2o52nj9D4TbJLHDY",
  "key38": "5xzrFmZoQd1kgzq2VmmzEpoe8ZdsfsaJ1aMZvidWwuPo6feS1cmy1HEWfCccgMMQsJYHKJuTYuwPUbLhhHek11d9",
  "key39": "5S2UySoYT84cScke2t8QQYUHHLvzsNR88CXbhgfhpHYHEZ8THrG8G4PscdVToB5M9ZHQyKLbZHd3VDQRiA9wgtEp",
  "key40": "4wFERoZRnvkZJGByWbtGkgjzXiLjy56fUBeUUpii2gCpeh4x65B3D6eGnay4xYhE1C8FpkTvfhPjnEjiUPBCS1kT",
  "key41": "4QdAj6MW6rx9bZxufAbRV6erCm82urbPWgpnEmzBQkjxhagX4jEWV7jBytUoNq8hSSAk95gL1aqCEXj3FG9SWsNc",
  "key42": "5e34UyrjE2qyGbm13YVJibzMJ4hWExFJHzXqjz9QdMkKWNxFBbcpydQWXBELPLH5QW9rSM1p8EF7RsZzfzjjgebW",
  "key43": "3JPmbsRBkgPzvSmwZbk7cS4mRCtcYE1ifQy4j4dkQuhNbAnnEsJ4eVDyaXCZzoKPqe1i3nswmwwiwCLUTcG1LThn",
  "key44": "4DLcFSy1hyDgCtkPBt66mqDuYhahq9dGUpokcvcSBX5kNE3hbvnMuKEMWGYDrbtDy6r9ty9npXvhopaQ1f39PuPj"
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
