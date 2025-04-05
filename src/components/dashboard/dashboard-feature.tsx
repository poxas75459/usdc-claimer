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
    "2tB9reRGWLey8ngvRr62CXiQ6uomnKw6tfD4wuK385XRoF6uYJFCAJNvyUfa7eyXoTidu1oqStSYMxK5i3cf9K5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZDitpA2k6GSJpLAkmwwmVxZpWHTxC51torU9ABsV8P7HWMqYpwSdMLfjkkG3E7hh2Kxr12RbcS3jQenW7WJiB5",
  "key1": "jwLjDtXWBzAF2gEAMpwFYp4okMCzPY2RC4F1PiZFAX45TnmWQwwyBLiZQzfWztgBc4opnokAPVL4akdMhwnwhwh",
  "key2": "5uEqUAxPpYsY6kYwYwk4YpaNPLNkEgKqAYLP64fY5z1QM15S8JA3WSNMPofFaQ9zYBKTGQqNeHLczsNFFagitPda",
  "key3": "4Q2zsLu5YU7Y8KS67BqgtvrwssEuWSnTrFfzwDjSULGAZ3nZt35AtQs52nsVy1KHLRrSHwmvFnRqJmNquTCiTh9E",
  "key4": "2ZCzUV6gM9vkHcBxC5GvsxmYa64W675w7pfmemegsWNz19PsRmd1hk3QR3Wr7R9En2mj7Xf26J8iUrhRKW6yvQcd",
  "key5": "4oErFmvaEFCprkYjzjpSpq6sSwkCVoC5agqY8hk1yHheGun6TEdFmJDyYAQMMK46TswuutaL71dwimcYh8xGzLdh",
  "key6": "3ZdZtWvAxXy62T6JK6ofQfra6E8ELXGytC7yyS13XfjyyWLoSVCViB3ero52j1pjHtttjPDeYWxgQDU4JCYzBkwK",
  "key7": "4HEF4tnQXiEWH21y2VdBqsnYP8QJ8vQSqsZ4Q85fhc3wUdj4htCPtc3DEHF7vyffMQMYCGhWiAyb9hDwcBrQMf4R",
  "key8": "5W2iuoM5ReAQvPALsLea8YWNPpeHL3Fj2qcJ6SjXiaRS19CvMfK3XCGvqESMVvyvHEmViAUPmWeXQVqF7FRxKfUo",
  "key9": "LBHEJtwwhdvTJbWxJd2CEPxLSnpY7mcHmMgEapkhavivxmikaodod4cUTHoncSrQXg4FHwicGPbF9BUSV8Fj4SQ",
  "key10": "29NNwijj7PfdtNT3gDRz6dpBWyGebNrAQ7Pqv8ksxohjMS4tHbvh8oJcqwh24t5mZvgmqxzXuDhxBCvnmZCWorA6",
  "key11": "4enVGsq21APDbyegnPpgo7rEJWJgyUtVMsPxQ6m36UBu2CLNpxrSr9gUJXHHpv4tSY2rYMoBFSnXz3MathhnXtGg",
  "key12": "3MvXhGo5x6jHUaEbQkSCJdPohW3L2MhFMvgQ89CRezXSffcRTRkADK17tQk2WhkDmGviHhEMxbn6YqxsqeMuKdoc",
  "key13": "5ydSHiDxaRdjowVdpHwrZisHJVUjDgBWtTKa3naqqgi3cpnS6dxgyik6TLHFJmLk7xDg1dv21AnMbsZFdGK19JGS",
  "key14": "ehvrmsBgkVnBo2DzhMyJiuRtKzHySGJ8XiioEnUGAY9nkA5ACtgQu5iHnuCZCtq7xxMWqpUANNx3Yctn1oyUmbL",
  "key15": "uhj5RLzcjLWZx65asXwhfTPn3YABiiUXyXghWiiKbzjdQDdAs2spTRa5Ra1aB5YwtuBjyEetdqMEoBigxb4S5P6",
  "key16": "3TFpUK7etBdSwr2goheSN18VKPpfDHAJ9b56NJa4o8oPR84vHpProGD5NYJeoMUCnYZaVVht7L8uZ7Z8Q9x18bH5",
  "key17": "nx5ipQ14iVbqkrrxxm59Vk8GnhRzUkGfyphabxCDEtuBt9whBxP7d2FWp6ZWoxQw93uMSHkKMcz5jy75gEJbnr4",
  "key18": "3iannKHYektXg22Ko4RnscUAk8A6aYY7c2351zwvBFKCiF6th1iSVyB5jQLZPGtWiv97wDPGneXnTZ7TtDPhGkMQ",
  "key19": "2K6jAJMkcv97FQDRUWVkXYQ4LC6tWG4DeTNFKbR9zcrUk8HpFnjJnyD8Dc3RjGewMqtLWpDgEtbk1whZYxuw6gAf",
  "key20": "3AsECDTu2FeBxgf7pn53pxWHFJw2ZdTzP3mneeQxjyXREF9DefsXCYebJ5M8nxVXdK5mvfBVHeBsooUpsHDrNwEs",
  "key21": "4WPCbsxUMTx6sUkdPEUbNvRmRVYsNP3HZozE5JzezJSusKhNTBF3G7EKhRn9em5FpmQqg9oGy2jrksdubCJ7FvSM",
  "key22": "4rcXKb8dC3iRuwHpBJoJq3ffy9m4vMZfLCY3kr1kAXGSJD18amsGWPgj4EspuGGkJEFaPhp7NoNcWuF97Nhih1vL",
  "key23": "2B8TxvWSbkG9pT2iv2TgRf6o4LH4t5tKqxGRasbzyADhSYvsDU2H9b3oqMQBU79DEYq2YuaNrd5Kjs1d5AfJ9Bgu",
  "key24": "37YW6CkUHZdXC4rKYXdW4RdPxSL8ecaTvC5kcnS7FVju44oe1oG8stfKaHEiqGS5mKGMwg5auGHk8nL1TtCi3SpL",
  "key25": "j121kxvx6gk8LryRLokFKBpWfoyFehnXqGnJUMDYKc5xnUL3ZVnb3JYZga1zeheaTeiJzJ1KfpXcu4hkvTJj2Zp",
  "key26": "4phjZQXPPCFNm4NuK65CNgB35LbH4W4Rk6Gr2v74aWUa37GP4TZQfZku3F4fGj6V3SQ78aCKrUDsQzFCLY3ffyAs",
  "key27": "3hZPPpriAmbLreu6wyKnqijvtr1ha9wZXRDT7Jr8pPDtzVLHpaXckbfTQ84n1NYoMRQQTiMKey7DB6tb2mRVmAjY",
  "key28": "62wvJYhYsWUD2Me9e642L8jDSnUR3KxWQWD72E298trXyata3WoEEMZp2SxUy9ndGxq6vSv98MpDqb7mCyhmNK5n",
  "key29": "tfRaKyfrX9iKZKsCXz8myMvSxNp9EcMdvAMr4sEAb1huRFgZMDgrtGNHsx1RP1fSZC6okjW16b7QrbAAX31gu6u",
  "key30": "5KB3dYePZxwWokYiCCYL6HhDEHYaeKrsk8AoUkZnphNHq9CJUK2eN9wLEAkHhC97cwrUXaXVGGFDaYBWus7NqC7t",
  "key31": "4natVL6dRdDmLUWJdYBS2EGsUvgSnbXmNGU2HEM3LKBRaL62Cfkq95fHfUnf9tMga5PBoN6rpWX8audAurwEyZ45",
  "key32": "3Sgoo2Y4SqEYLWCUHbbpsrxXkuVPMWWeEnDRVrr5kxaCeMm9oV4jsx5XsL4AfTpqniJa33Cn3kuDMbjDAso8S9Ze",
  "key33": "64zV7UuXKn8sM3LdM34XYGX4NP5PeahDR8gUiXobSZF5CirqUjESN4HNZ34VbyKaZEDPPDAmzruoiXoZZEdha87N",
  "key34": "2DKVSG12dxctWxWhAKXDBmDcExQCa4LX3GEXVv3BhnVbeM51kkvS1jxcfeyQj6cjshmdVDB7uvuQEpXvJaFCUtD8"
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
