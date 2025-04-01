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
    "64mM5hnQS3xE9AQf8FkH9uMBohrQKWuRGJ67xjMva3ntHYRL8Z8n1WdukPyNQiWGBXAQkq5YuXTc8vxDBvL794rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLA4U12JBvNjqYbKagudU9kfuE2mNfLuJ9JQDq7hBDZDjJXUGjmabZx7JNgidfSmDP1iLU3yGX25evmJ8KwHefX",
  "key1": "gpBAjrsmhH4APM49nec2KW9VcP5K5t6YaMeakJMFKBQkKNV7hYS6bo7uyck8KwtA2AkbZYJgPW5Vh5kWQvPiB2T",
  "key2": "54L7otKAuP9NYXKhckMpiD7vQ58LeMmpJdmEnaFSF913TXPphexQwTELoSJS3GDh54iJV9jT3gWafudMdQMMkvYi",
  "key3": "2RmStcZXCBLjhe6heCi4b2ji9ucdh5TQhVgbPLNAdwT37fWv6FLenBzejV7BB9GNYmBSPoYfMtJbbBFz7FwZV6Yq",
  "key4": "K8hJMtdN2ZJzboKfyP1naJNBPuiqHLMYEQhSn1nbojdS9RhAGk8CEfi5A8L2mteRjvx2y7NrgM2Qvm57FrAZ14j",
  "key5": "63FT15zxveDSbtBEmS6xLuqWgoN8mWHftoHmCebvmy4aTBzbWstdifoSAp314RsBSiHs5sxiiL28xGt96zw6dJG2",
  "key6": "2wyYFBTmPMh7fQRcBhoVhpcoAYhqDEd4cw5tUURN1kMEBmPScwmSVNPx4McQh2X6gAmT5YziaoymmVp5R8PGKSee",
  "key7": "4xBzhjd1tfwwz3HBrxWqejamcFoE6ijdaqmcAqJpixKxa64ZdA6fLgApniP16ZTHxVrXsNVX94H7zYuvNKgF2Zqi",
  "key8": "CviYTAx9G6y8pbxmXGVcb5muiBFgqEPi3CoHJRNeaGsMWfMYYz9Z8vwmR2QuwGCpwQxVJRy6AbCLcEjvioitQcP",
  "key9": "3uTyTeCmJEKeKxhi8os6TRqDpxeP7naMP5GJhzSatdochEk2UyCTCEWAV4b8qaca3szv3HSNW9s5RF9vfpQZwz4m",
  "key10": "5RcxWkX6wYbhn8bZjKf6xgKCx5YZ5usLSHA72swbasyVHKnNjCqWgg7nmEMkk687GDZ8Fh2yHLqsRJCNYvn7D26g",
  "key11": "3DRMBoRgq1WaST58TCS8vC89QANbmvrxtavwJwiqZ8oewZGHsiHwMNSLgpZU4TKsd25movGiUnF8XvWeQi7oAA5B",
  "key12": "242bbZxVQ4NwszJFDrxNmhpe97TLS6Pohty3G2r9nFYfsmeZtLjWgnhDhgtqifRwMp8rYJkuYAgACvV4Yj1znnjL",
  "key13": "59Cf9pyCj6sttPDsHJd1BmxQkogVkGduFUpoT1Cch3z141HVV9Hy6ZqRZwBXunAJ6Rz2hgTg6RT6tcZyvz4xjtyU",
  "key14": "3caZahcjUcGLLTsV81uZ8cMiLkcSwuaSNMoMJJWcH5k55L3GVjVM5oF6vMpiGT96ymWM2f5yMyYqYzrN6QZw5wCJ",
  "key15": "2E2mxvmKmnUkS2TScABUWEt3fVUYi2upX51ReLiX36z6hgtTtf2zXkrGmhEsj3b5BUBthAKYBPriKVpe2Uq75EhJ",
  "key16": "3TpCyRJVqowo1hTZFSkUWH4L4zDsCD7EWhYavVedGqajo22vMKw5QKvewv8KNJjdT9D7sXDK4V2opTSR4jz452KS",
  "key17": "3ZZK7Xr6LPxkCm3KYYNysdVHfrDEY5PPLVUVtnwZYGiFWTXBCjRYXGcM4XpxRxdaL3xZjzA6G9nBWsUM1iTyYNF6",
  "key18": "4oB74wJYoVD8pbLZUZxhdfV5EUFfySn1yjBomsq2KWwZGo2ceWp9NgXQhoT7PAthDjHpsXsPe22gZyQEiryu1Ym4",
  "key19": "2kaEEm5zP4kGhvohFi7UFebKeEimYBxraXWRdZJgof2gXi1xiSr4XwiqYVmVCUPZkwW6UYjCFYLgFoGJKmoisujZ",
  "key20": "3R2GKQgRobvNLpUiDCCKN19Wcq94sSJVmFvoSXEf81PoWv1fAGCDAgEx9weGUFgzWW452WoGaMvqSeumjZoNXUFS",
  "key21": "4jnu8ZvrY53Cs7zvQUf4zf2Nm51rGQAg4wUVVF5oGVcNzAEY4T5nRjxj9QVHVSpeUUAfvL5mzK38mN6UoMcfgTLV",
  "key22": "5Yig2hioPHzDi61kzyRhUxRa62HV8oEtkk3195BgSeSDFeieurhyQ8ehhxJCV1Qu1pZQTgDayerx9LWY4T4U7cGt",
  "key23": "4MX5XdfBHARkAkZhgfi9GwxLApSVjySVykMq7gRFC95AveSjZeBicUpu3G5tCK55jgMVdBjD3poToyDyycn1pkEN",
  "key24": "D2G6p6GXWdcbBMdPK56VPZQdpbm97d13ZLkYgB6zPHWywAFfx7MuV73ZG8N722HhSeWsfFYLPEHpHTtceTdt91C",
  "key25": "AxkBkDQBPdCBm2y6wxeT11NfN4euihEMbd96bxmW1vvwPFz2nuyVUNk1ke9vtniGc581LpAsR4LGxVZLS5irhpM",
  "key26": "5fQr1hECnUL9HnVJnu3QHm1jbZQp3Va3y7xRPb4yAWLofB7wQQMQ4Be3zGNm34ahw9AmGMR9Ai9xr7PJZvczhuzN",
  "key27": "61MR1xiBap6vBzoR9tMjCxbyXX8p3zbdomKBiVNLf95vXogYLkaT3jiRUv8udLaXu6LeSrnQQpPVusYEiu5EHCM7",
  "key28": "3wjwqzNtgPbroe178Dnx1gADDSppAdbh4TnigHe3xqffConM4Tcq3b5kqZovASqVe7nhC7dzFYtuBzNikfUYvA1o",
  "key29": "w9hxJFzCj15KrJJ8gKZB3CQjP5r93ZU5LUXNUkpnnwSTYgJCgvwMjhn6H5DVgcHosSNAeXkZaGNykT3MDtrQNVz",
  "key30": "5ZimyxK1iMDDtg4PzewUiuoKeq8EEeqdpLaoL1NnxFL27CNHiLzKLSMmKvHrEowSrGxCbA4asQJHk6THqdk5AsxF",
  "key31": "izSb8fV2TWLQWToMEW6X94PZnWZYh18qxqQVqXyZzSvNePv8AzNjFtXVhmnwYfpQbbwz5F5e9uyJtQ5M7bEkSJn",
  "key32": "eLkK8YL6o5n657CXa334QhRACrf2mMGr1FxPDTmN8eQ3oHfhjFyFoFBizS21uPovx5WteeY5c67Prwjx8rQ3k6U",
  "key33": "5UZBxXBsTtVe3PUF8xjGAu7Qmvi3esjTTiPmazUKmNQxbDparLekMkCcQQtSvxLW2ozhQDAuLMCXE89cfnHxbbD8",
  "key34": "Vdx4NBRkYakgV2nFcTmwnLysoJYyhNoPYMcxDt677QKTzCXuEB1Dy27wdZE2kaNC7vNCM6bt8M67AFTxu7PNmg8",
  "key35": "4EzTgC4ZLHYbunvGm3YLRp5uA2edVtVHUS7kQmB4qM9wchNCvY9txLQRB76N8DGM6NoDdKQmMLFtWa2RLCCZBNTK",
  "key36": "2Z3Si2mXU63e9qA486wYKZ86AJLMin8QrWQfACTxcY3KwRKTAtJJjS2RcDK82MDarGEZ6rneFYuFScxMqDjVoht4",
  "key37": "5gLMPgpufkQxUfQqHDYy9AeD8V3AgaSM3Prk8kYQmzZf3eem9AxD9bKvoWTVNJJFaNa7LSBSVviAiQN9ouTxw2nA",
  "key38": "4f9YZkpUoNu4bBU2tgpM7EGJdengzZak4a9ZiPRbMA8AUun5ypa5kQsUJJJz9p7P3qAZEWLjUtrkq2JmanFFpbQv",
  "key39": "3QirxmaZdp751NraMSZXh85p1gUsCcY1pgzhG39vZTjAsEZeanbkzddSQTaGPMDWNi9mvJTtchPNC2d2xsNGXuHR",
  "key40": "4kbzLDoGpnFA6JDUKfMsig5VskqxiCqXL7FiBnewye6M7aTTQ6JNA6AANx36CQjuivept3Y8ysVCBVnM6TG337ML",
  "key41": "5QGkb6j7WUTNr62ik7SKNong9Sf4JPxVsZN4k3k3CGNYi6YLCxf8WXvGrxJ8vAvKjrKwrR2b1mGEdQPxBm9thi5T",
  "key42": "HUeLKPoiN94Sne5j8pfeea2Qek4AYt3wXdFHBxeuXU4HBubsAmcW8oZH6YRXNoshRE511xRKUTtm5SbdQST775d",
  "key43": "45kZzYqCBkNya1Zviun3Y3hV6AfHBrtBGWqpPdgs895RCC6zCC2pQpCjzYAqokZPUAc5yZkUWmWtvtLVJKng9pne",
  "key44": "3aA3HdAvPNNhstzdcgrc9hdJGmtHT5gEHvp6ZxY9HvPudeeMsKpBQ6fGjLDbarn8UwvvU68ihP5cNcEjUZNGZ2k8",
  "key45": "oXgfAUtWA3FerZ1UeXrxgTf6NT4LKjYoi4FwLXqmaMiVBzBM14FM4RbUJWJSbfbqQEAvCTicbonfSL492CDRUP6",
  "key46": "ouPkSgry6VjHEb9j4GShVnym4XaEj5CMTfhmjmn4jsB6uS5En9RFS9Syka4hwn6HVSrirB5P5jqCtz3FTtsLxMY",
  "key47": "5vNXufUDuZBYYL1jqVtzcM1V2EdZB3mFHkveSsbNx95KT1AVm1u192XvArRbyag5Ck8Cy8RjXvJnyb3JSrWpEvk",
  "key48": "3uD6GGTMTg3hruGr3WwpvWXw77R53Gxvtz7MDXRSzp7QtqP1AHre7B9uX3CuMniGTZNtRccxNnfSeZERkn77pbb9"
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
