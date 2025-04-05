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
    "31M6PdwwJ3ETSEofEmKesNf32vkz3AxWKmYhiKn4PaXJKk2sK8AjMv5yUMPE8vFoQydtNWwFdP5opMpFURf2HnLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49JoDynpuCTbRrddyN7zKmFdmKWLYpMhaDcTcesXmDpnbQs77JGV6hBSvnRzeadBzrSXZs3gsMkpX59uF9n9sxxj",
  "key1": "mT5rdwC5vn3W3dhM4koKMmKzzwPDFGLzmJr5f7Fepi1fV7GxQ1iUVahuU4DpyrjEyQeAfPmKuVmefAwjtNRHr7M",
  "key2": "56XnsekvXLfPfhg83uY5nkg53siRhxS9eHk7nDcjp9JdMiXtc5m18mdriqct1d6MErfMsp8JLuaAX57Hh3qZKX9F",
  "key3": "2rr5D1Thvdwh4pe9qJgxenDxKtTQ7FsCY8pknu177t5Fw7KVxxV7WuEP6Fiv6JALEXECw4MkzgusRXdp3JvRkeSg",
  "key4": "36dnEXQ7CyUM8eg6PsHeUSiNr3dutPmTUcnBjJGuG1qqdvfu2zvP5F9HE3p3sNmi5oxT38ydxnbLR1DHGXFcx9h1",
  "key5": "42VDx1Kjxz5EjCTCtiZ8BduwfdE9V7p89s2Gd8jVjSvz1vSYpG8FBVc3LSYn8bezh5xjEw1jZh2cwG46FpvhUS3m",
  "key6": "4HGmdY54XTFsq55BfQGzFF4D7YDyu7Q3P3PBbaSuwk1n9xtoQTbCBuvsn8zs8jmNjrX1Nf2281GzGpwmi2K3MRzB",
  "key7": "bxRy5dXotp6uefKdnciU9W6xxNT3g9Sn4LThRUDU1EbeykjA7xNCbCsA1JB1AQT2EET23P3cnJyGQ2d5LaB4Tip",
  "key8": "Kr9XKKHJL3SqWyUnLqSYZVVDo6Vrpi7PM5S7gyqgdc6aroZq1tJcFYXcBm6szBd8BVZn5BF3AFqqdmz6PhGDCyu",
  "key9": "62JyvcswYnnYTeHfToLUpCCyLX7GrERsavLqpjW26NuMd3gNniDtzB8eikGgLUqt2EvM4PtSN8VX5uE24wUYocti",
  "key10": "4D1mL23V4CbAsNPewDV1oxvPLbr24YvDy1tWUo9tKfP2Gps4hsrbcV5dMjA7LtS42qEo81Pk9ok6KdkUJA4ZbNvE",
  "key11": "jUwDh2UU6Pjgn2qDZfH8GFhb68JeZkhNWb2UKVSh2TsNtt2p7wwTt3MYwaoXHYVFVALV9Qtk6tZMVZ1WfDd3K4K",
  "key12": "5q71GxmnPyYW3nfgvBTdVGcewiAE6q1g2s7ZQxNPR589ixWBWdmaxmbGxJiVgX2dYzavFmQWNJSm56gsjSt31GXj",
  "key13": "42yC6UqaM9LBfW3Jb283gWKK7ci4sykHVhTjLdVKYVN2BjE95cvp9xVWEArPuarkMJdTrVEGXzceJTLpsm1vKHnR",
  "key14": "wBrNBNxnWhJxHMVEBQ3KqNb8U6oY3gxkDMbtpRtk8ypoX9hM3xuXcRaDWyec8cSs9oSEsfR8pZGGU42C3zsRgMf",
  "key15": "5S1YJJq2GfguXQVuoz335MsPcDeaTYbT7vMoWNQsSjubxECXny9Hm6zq4GTNMEiN3wxaVciqSb82htqCpLo7fS7H",
  "key16": "4dHnD84NgQpyUz2vBpZd7rTPi3NX5giiDwkgiSapzMRwSp2GWfWvnEkR2i1Ls8z8JTXyZxjvEA8Nzxi1QWjuZwSE",
  "key17": "2y5afJu4tE8Dv8eYwrecpTHWP8fgK74GJTDVPt5GaMti8saUaNfxeXUC75V7S9Vp9S9Ws3JCVcqGVeSs5VnhWk6u",
  "key18": "37FoPNdLoKhQLRANPRgcJxVbT5n1fivo7faokusgEXfBfpZm8ymivYL85auUcdpMqoAQg2xFPcb8nG8We83rMg4V",
  "key19": "39wGTgsNUppERkuX5vMbiS7DfzCGEUnJS55yrAzhB1bnPTdmF1mjmJR2tZ6Y7MJdJiNXBmHQfuyuWUeXDUqNJBcn",
  "key20": "28rD6p4nmpxKFwwyGnCKJq2w79HYrAhfymSJYuQhTqeZo8ufCzfR4kNurtWGZz7t3T9xE1z5JxAv3vJqoE3UKyua",
  "key21": "4oceFj1nX5UoNwqHfUe4AcdWJ6kQPipEtEJxdrhJSKjT2B21CdMJ7emcwk9fxQmm5J9dJHu1VFVsagSCG9qF3jVY",
  "key22": "oTab5k94ZDAU189ga5YYYF2Vx9yGA6dY66SawWeyCwcqGdcFoadeDTdqN76PasSqmuhoKW4LeMriDr8D4XWhBML",
  "key23": "4vjWAarFj7iEiSy3qwqfshbd5kZTUEKuTMgDf7gKkEtz5jGdQynGkF8uypdE9RULRQX9nZM6X1uBRpvD2x7ah8ws",
  "key24": "23cwGHhAv8B7R7vUScF23oTj9Hpirg8o7vJDntZ2viwJQZj39M7Ain533VUUKJdSzQw8pYo7jXa1PCdPB9zHPNKD",
  "key25": "2NbCC9RRBYMyCKkMMGZynAGhHat1f5qXvrgVpjTeq28QBdKpT7QmBBqkWr66jsiCtPFyzc6Pvm6UXRjujHrE9edi",
  "key26": "2wFR41s45k3VL9YTYGqpHYHwHY1iYhLqMbuD25VbsjGxkqMoBtRnKYPWngFbEJYSKfJy147bj9fqRbUBUWK8Stiw",
  "key27": "2Qaovkz6G9x64oCXTUQHqPDPncqkSW2bAtNM1RfpKtTKgCGrWz8F8u6DpGiDGkYRFgxU6YTJBv9sApSejXfYtcuP",
  "key28": "2diuuG5B7hLo7MCa6ib3xBNpqTaZwPpV6R4co2g9bRTLCQhTFB4yz4y63FZ4DdPcs1NNk6YK7CNTH2RUBTnUZGT4",
  "key29": "2gz3uqgrz8zdQ7mR97vrVgCEyNTfhorgdibKxkeGhCykHfqowF57JewYk9X7WugCLYA8TcjBCLe96zrzRMjnF7ng",
  "key30": "2TuVJ9V4Am9Uu82eYaTgbHfUXad9PVSLye8xDATsM58djKgVegdMSd1WRtJkunWemeDdT2W4FFcgMk7DkbrUU5Xm",
  "key31": "5HJiu9nCQ8v5i1fQfgXeRLdQFFbCuZrf5iS2nh1LdVZ7tEMeGLPuLX1YcknDLBgBxJpmZmFGtBc2buaVEZPVr6Fx",
  "key32": "5TTqTNBadShyL9K5cHZQQygtYCD3AdMbd5ZnU3rYzbGGdbdpwrnLNkkMYvUycX9XH2TgEkQb9ednXDycChZHQimE",
  "key33": "4eoTpKSjN6dTNTzYzncz43RjmwSRuAP3kosiZBKSYYzdHCeGcRAVSf6hu6kzCMWjCtjHarZu1b8xvGsjCn5DzWXu",
  "key34": "h3nwR3rRnBgqdHVUnf8RiFhwnjwspyssVz3vgn5fJYj9kgDUv2EACeH9DtqzBnUCtnuxPQUKhYnuUV5zQUvbHnJ",
  "key35": "4sHrWswH8sL2wPU7NvP6D8Ee1ixtEYKepaqKzXhSZrYkXi7WWd3xsYyUNsH9sjvLrnioLCLGt3SvP2eamcJpKe6S",
  "key36": "2wkP13JMpxE46fTeRPWw2vmU9p6ygW4zWrUEFgcxJdkULdhM9XpfCHhgct2TEtmuFATQsjpSaRk7eFUVLWsB5Vfa",
  "key37": "mRkN6oFWEqB5DQX7P6qaLkxzzQtAMYrLgSgEKLGi2j7DNd9qPnqmm8mMeYditkp2CxoFpsZJhy1A7ZE3jjyRXx4"
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
