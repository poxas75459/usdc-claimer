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
    "4hi7kTpned4vyQjJLD1pyiEu1ePpiMiCz9CdHguFcxCQaRpBVMGnfhPxxsSfJyKCgXFiK9VtfBL2LhtcBPzh7emQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QCtf8ndTsYP7RMQh7z92PXwfagdgZUNSzDSr6Hz3Vo3Gu1JwuwVGzdEXKRYLsoFZqduJqkk4gq4pcpY6j62AeAG",
  "key1": "3s2FJGVVY7C4JNig22zyV7pGmU9DQXRuXxSym55xpNhLYWRApHTK6dSxbUFPNfm2FrHGaTsWpo5DeAEUKhKJTLLZ",
  "key2": "5ihcEu32R8BxmXkwz2RuBywNX5cSsk2WupqoRE1ZweNkFgVnob8nT7uPDRUT57ijeHaMQ4THt4ZU4jZEMmwDoejE",
  "key3": "2YD3wCQNM4dyuNnALWRokoECS4HxSo5YWGR6APfdgTrLYHKiLk76asqxh9atSaRtz7V1Pqr4FsaNCFjqiyVLvb5p",
  "key4": "3hVirmTHo5wufHa25mExYikWGiWMHfYKFJEiyyvuJGAXmXKDViLAQRn2FECnuQA6xYELwjJn2fzhNFGa3uD14Mdh",
  "key5": "vGhD1bko4gWxuckLCtxU47QmjW2LnVtJmFDpKMmPCz2PoNBrSj9uohpNq84dJcR9bASX7VvswXZSWa8WPqoM8DT",
  "key6": "j14DNwhELcpjKZkXSCeYfnDbwPvHVp4H5YGi5ujDkcRk2LShYsuDG8y9MaUopm2CzKaobhkzKc7thowLQL6vEks",
  "key7": "3yCBNtqiQ2cHE5HiKnWJqRhrvLUVCHCcYuDoiRkfaNByavrMX9279RJj1thhD6WVqGnHKn9z3FPdPRwyDAcjS2NK",
  "key8": "XCPPTegHuXr8BcP3vf43vzEewmxvv9JarcLHjAZ3b6YNSPcmiV25Q48Y8ipsg4XMr8hVvkcEvwotwAZXE1FPHbT",
  "key9": "5Uk4okHUf1JagpxCC2pG6uV1L5avAjVxSdjQ31bfXMBGRGjpWyZcpA7Lb9eyRwE6i2S2D1CnHAXtQiHT7E26FzVz",
  "key10": "2zJGZSNvFdhPqp3ZpvQBkUsm3wcjBuuDb3vg5Nn4AisSsh3KMbkf4ZBfTjpsKBQ7wEHrviNzkjFQvxp9Rrj8ibCo",
  "key11": "4chF8QnuQJ8WJNE3cC4yA5Hgi3zuy51fszRBwpNaarqpoWLHfJEb4joqFVkwpKiahQf5uDL1Zb57kQjG8MwtFPBL",
  "key12": "52EL3Px5Mnkn2D9E67Bau2JFqJQogSFbR1TkxE6LAwHhDCtSM9GtppSLY9yVqyAmvK9cN4uqqky5qxjpC9YgEus",
  "key13": "3nvShByd7k4gnCrVeko4M3FN1fkKDVeRyhvECFj1oeDAuuAmeniXKpHwEmQ8ohqrhWapogBVi3VEfh8ZJ7QGnv8k",
  "key14": "uvMXBZzhEwg3ZDPZEJ76Cc4FbJFUXjr481VzKFYD795KzhkUryWoSyo3MMoDsAZZHZysegRZ2PehGvyno1j7EBW",
  "key15": "22UZuTfbHdcrBcLCKzgbZVLAMwZD3ax6SNHc2h6NtdvQGnz8qvmUMc52fUXHK7h8mahqSDRUyYNFsVXsTrAgqTXQ",
  "key16": "39XaCxKJQKctvNTFCmaDeryrqTpUoD5RBwQLKa9rsEusBX4drfRuADnLGLt18J67fVSfDtKeAjGsNSqC4ztTHFTz",
  "key17": "2SWb7VduAL44ChRbfgWX3cpkTnDqQsodeqbs3mjWD2CL9KY5PwMwP1S8S4fWNNch8WmXevDquqBzbsV5ckaVL2PV",
  "key18": "5SQHwmGD5BgX5BFr3Eg9DPoTkTdu6uMAhuXqJpee5JpA5tfuUHj3sipFTkPqTMgGcLoJzLMacXeXvjCvNvfzVK2t",
  "key19": "2f6QUe3zC5VchidNBhkXEKHZZD2uZVoqRWGgV2WYxHMZgkGd1Ne69xY1yvd3gDRHk5qbRgcVZUMecg9iZRoUZsGf",
  "key20": "5H6ptWjsHgD8mJVitB7eXjJD5Wghh4jhwJi8eodnfJS7atGQmfaHeYTUpFkq3G4syaMo9oGeznvzjExE5hxKQDtz",
  "key21": "5Abge6jNHYAVGXGpg9z5p4rRuQgmt61h7ms36FrUq8Xv1vxuk6BNSqGaB7yhd9thieKA9CKtvLrgwcDdB1DaSNEB",
  "key22": "53MZfauZCdy9PhRV5BQxyJP1qqjJaNn8JupnRkHqYnjp1dwVjeUXLNXGPwzxNt1Ys5MsdJRt8FwNY3zALr5ekfxj",
  "key23": "5BFKpVg3AueaAswVxUWn5EcdhcNXufFyGFrEpZtpzsCEeHTXKPn9NkFg9KDVThwnG9mj7o13mJs6WQwLwwuxAjed",
  "key24": "rxuFp249VjJgLa41JerejwB9o23aFWhdTB68wcS6o86Nf851Q4WN2LoiMWg4okh2WDib9jwRtaHRMAdcotnfNds",
  "key25": "3jQ2rdqd4zUKvm8cCz4YUCH8Dh3CjXX1w8upTAZhzK4pe4ePGZQHrw1Tz26UuefdcahDHpS3ca7EwSofF5yv4KaL",
  "key26": "4D2LQHBFgZEgG4UrBkrFMtJaku4TqmiaFcYv92pPJN3GNRMn5hSu99fbzTXW1evabm7wsc8r9Jd5TMKxQYmYhetX",
  "key27": "4Bc8KkhBa2wwEH9RcKdjWVRQpUUFsfCU6UrpSh46PXFphoJ7iqHv39kUbVGX7QuHmm1gq4Z3qpkYf78wVjzEzZKR",
  "key28": "3eZmUbC3pP8kH9ncbDSTT4TbVynXpBrbgSj7LHgg5U4Mzs4UL3EhCbSzTtT9HMNmAcawvzsC82c9mVSmc7FPDZNQ",
  "key29": "8nNXEFuc93VDAo29DqijUfs6nfDQjfbrQBhVaZCN3kcKSnrKHeYdJcub13kkikdHf9n5BwkE11M8aXugqJR6eNv",
  "key30": "21KRZheSSCAu368vDqbsidAXHPACwzNNhY8EwUitAZVV6WWmydZPZdQ7GTvtgGRdiAe6LXN4J2ETAtkMaeV8JMcz",
  "key31": "2kq62RdfmTEXC5LeHAnggpM2KTXmZQWczBJR4vL6maVXFqq4anQX5KVLEizRvhpFugPsrZwhYfqwWFWmgpQNXMsH",
  "key32": "Z8gFSw8oRwJBU318uZrQ88DyvfiKXXnJvpUELHXeSqV5JTncxN5hkuBfeWLPaoryoRntohvs1kuGW7NEZkhE8xA",
  "key33": "55f27iUvAEuELcZreyiPGw1HsyLZQ7pCiwhvvcagdwsWdvG2QMNxCeceqGACXoJggUYHEgx5ehpxEEwTMvXZeGYH",
  "key34": "5V6j5jZerQUVsVDFtuKxnY3ZG2LEjj5jPsaa99XJYEEawLLXXqmTcEQy5yzvm76riir6NUYC1fuVvB5bK3Xi4UWV",
  "key35": "33nbwCbydXHi3YNFcqUzPNDB72cnL6iucGJCkBWzD9G4BhYqpLHtr7X3sjCC1LogNRSietzAQ2C3QJx3ptPaadsg",
  "key36": "66JRrCN12JQfirYSmHz77DS8s88Zn2u37jnnD4cFUuJrbZk8fSavmSsvEFHAmDXAqkhQyetNserNvsaSyXy71hED",
  "key37": "2tzQnhe2ZicESs5u6CXbVZnx1F6vJM9bQdE77MC6owHC1FEfbfAA4NGmD9a7TcGqNhGz3nfhffc1SyZiCNJRdsaE",
  "key38": "5zAgV3SQ2cFUvHKzKQBZjUvNxLXXGsKXUSortUjuW7s3n4f2oc6BptcPkrCoj8QccY5D7HFQbKGmaFKQdSXo2H48",
  "key39": "5kMsPYdLTQ2B6uPNQo7zamDMbXDY2RpP5qpS9mPSPfikpo9Bu4XCRb6rMxPC6KrKm3c3QvCCD5LigCp2EeysjTgG"
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
