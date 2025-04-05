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
    "3waUprFhfKD2T25xVQ1ySDFXkzQPzyKxKcubz6dboSKD6LToYzotUfkd5yeZziV1AHVvogvShQVYFiZA8gdvS2ju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ennjHjFt9VKqPXwiYkczudqPPduPgTGYUZYBQLjSmqTFuH7vTrhLsZnrzoVLCVAW2hfxfUWt4nNjFHFoLVznzjx",
  "key1": "3iQqSafLB8Z1WYjcz5xTK5DdQfEdDz5RXJPyCZSXYrqKhYGRZwueKVPaMWCEssa2T6ohQSgHac2am9DA869x28zZ",
  "key2": "32cvyCAw6QUXDS8UNYuR1hzR9FWsk5aZcttMbjnrBtjnvMQyZhfxReEVSyHxkvqtQtNNsD9635xneCDqp8vNodUt",
  "key3": "3kK3JbxPJ6hZfqHD1znnZFiTFuqpF32P5hMBgzYqVMDMU7J7KDoPDxfNnpU3FGaaoevNs9XnTP5SbNDQkiDagnQJ",
  "key4": "4Wf2xV8zq2NxwPycKPNggF8EwmsfVcNm8BjB86tHS8dPuPeMUgeEyfkdnxq3zK4LT3BkmkqZVMhmXoYwpYaUgns7",
  "key5": "4WnxqzJA4DR4ooKch8RBYda9XYgTWttHfYLoLmFkNbymWrjN3gALwN542UfCWyLj5Dg3AFBQQ2VM9XuQfEKjnd8m",
  "key6": "5FtT2Xy2WEXP2NnvnYiPpPK3V4MWzHanaB56pQ9ur2MoLuW83rEKfNEAAZpRg7Z33GEscqSZwCpshSjmojRF9Trb",
  "key7": "4SVRcKopLGFGLsDuU8H1vmpAks2STrYXezk62iueNdqJVmGVnzLVY6vrCkhzL3YigimUN1w2MLhLLDB4XNEKNo4z",
  "key8": "44Apk4u3JBTGbFXao3tHLrcGh72nHN4Rj8Yxh5HWywT7GANfWdcFus1MU46ec9QCiPNFJMfcj6kEGheRPnbPTUqc",
  "key9": "2nKT9CftupGSMS45JAieKTwZHwFDYJugiiP77sWvP7sWkyt1gKDZkVdEKaEnLBuehPkJV9APFxHHFzedUTjAh4S6",
  "key10": "3hBbqMwGPXjSDTJSBtKxxhjQEFfSgKDaaWJGk67mxCNHUPmAURAkNbyHza84GHrbg9tox2vcYd7qtAc7hZnPxP5o",
  "key11": "ChUdnEScS9myjVWahayR6hersiTMfwuwNVg6tXAnjhN5BNDUFD6iDYZ5rGSM8ouNpG4r5zHtJgoCfvMkewtHKKn",
  "key12": "2ny7kWwH362Xh8KHy6J3A8pG7afkPz5gUCD6cMbFrHAaoVMJQfd2G7GFg1v6ykoMqYzCQnN3vVeMs9NRzAjp7aSF",
  "key13": "RVdHRmLfMfC4rN4GickwQiKPqCqoFbN34HfoZjsWgRhLnK6C4JKZMSyG7mV2BZQ2HFMsFctXUy24dG33JJPyQ8H",
  "key14": "c99uDg2X8x4mmaWa84wRkQEpNQKsbP3gu7GrFyhoGeYBunHH8MJS2Txdn7fEm6z1adgVbJMzdP6Wi5essJb7hQS",
  "key15": "43d2j5Bsi1uxJX28CbbnRxn1uamBX2XAmQo3WMB6QaoaEdMB9Vtb4hZtGhBRbzKjCiWX3ywu1WmrFDLwUB2YWBrU",
  "key16": "2LFbcdMPN1brvKSizKKSBRszaksr8J89FSWryvKwCRwiDoq4mW2TNVzK2aw3QSnDEJE1GbJXKSXzra2LsodZXHcM",
  "key17": "2QZyZNub8PNqCHMbciiU4zM1To65tew5mDMAf1mASF4V6NHigppSvJn9WYwXnQ3wrsxFbxUgekbULkx43LU3SEm5",
  "key18": "2QBXz8gjbM3MQtr4pHd15HLK7dKdR5AEvQJDNJbUTpN5qJ21HdiBNHqaR9f7tFDeESx6nTJeeasegUpDUkJiBeK8",
  "key19": "53PK2A3bUyZNSSUzKUAuRwNv38dQbeRXBKXJza7gCZFpmQ4BtN6juzGTGtqWrujdDB7zVTF3W6RJHemGjhw8tQ9L",
  "key20": "2vGp1sSjzuN2FxfzMgwWoYrDPUBgXrgnpKydUmE81MMKXMreaH7zCGD6rGSL2w9iZKhpKhNBFgWpzTkLzUCc4jZh",
  "key21": "24ozci55bhQU4UWgfg5ZDm8zB1Mssd9WsezcWvVWxj1EHvHwMaUtdGSqjn13KQJpZsh3ZdUUc2tSP8bGFeEQ9Z7q",
  "key22": "4RjLQN3xzW1SPceFUHVo5vhEdHbRM2G1YpRezdzMmtuXhSfUmHT3XASQMcJdasgp53HVdqzpKScLehgo1AtZ1Q2w",
  "key23": "2vPhxJwaFXHZv5fUG2QxFqZ2tmbC9FTxa8dvGyiuTqc232zNY41VdGS6q92MP5HLxKsWRYKX85WtpYk8UTmgJnf2",
  "key24": "sxhvTg66dVxhuoCTPyqmWXTRTTvUsoY538CAhQZ24Pg6ju4uEFVzuhG3kUg9XRi8LqYHiqQHKzHx9v6fUFQ5LHg",
  "key25": "4r8eX6C1r97SYw7v9dm66YnpxpqLoknbcczqcrycZpfvGRhGiym6JN8Nzbr9qqYz5JiSi6sfy5VvabtrJ5jTk6eR",
  "key26": "51n8u91da1XMjEuKRVLHr2nGG65zbyevMeRmyPKRPVW4YAc7fQ2393GyoYdCRXvnXJNosDPMSH7wbRBf5J7wV3NS",
  "key27": "3LyLWwKRbZp8NLXKzt5XFADFdMxbk8RZSA6n3nvyY32yoe4SrvSvZhMqAuA9VcJwZYCPa7zpDgdVkKDMCutseS3a",
  "key28": "5wCNXypR9vqgCqRP2KXuhmsihhh6kcJx2T8bqfzF7BygjvhP77cZ1MM8XADbhrCyMeNfYuyRJSN6smCANeHBYwK",
  "key29": "5kPKV5PSeooPTLwvgA6epNuR2wX5RMC3FqJzt3bk8A74PGvpJRCmHzbqcsidH27ga1Zjza1rKN1hzd5dLw3wdNDv",
  "key30": "5ZMQiiD7RmMh642pp5kRVMcsqbGe57NUjArGwSAMhNr5i2bGZyj2fTbjwqsJQAMsQdaqFYzSXTgsWJcz6KcptzLX",
  "key31": "3Xowx2psQZTWm3862wgnUQUAwTHZ3x43A8EiRyTev1MbLGchu7pthqFfbyt7NG66VucvhMHApAxc9mYyeh9sSHob",
  "key32": "3xfgx6szuYQApxaMkQDHaEpNF2XjymZ4QYK3NskVzVUNvAHg1p28SZbtBmngSqHLj44Bwp2WqtFKGX8s2Q7fkzd3",
  "key33": "225WZnwMqxx4f1pDsoYBNfVgChJFYMZCanLzcabdrdLeM3SGeQVXbGCKTgX972hQQAPPKMDhdhR33yxF1MBodtzG",
  "key34": "3gfVTnkWbapeuyQwc3SiWsKmLEMMZYzr4HXqfQ6me5wqN6njyGNpcvNFfL4Bkxcra1N6aVgJJ1SXx63JdXLdidPK",
  "key35": "2un2k9jFBvPBGCbcoTYbmbfJb19as4oBjfCjTBsabG1Az6c9Limwfa2cHHaQBaRwDzXLzqEReYb3K4g5FHtFoknd",
  "key36": "2BfwGDvaiGyvPPSzijWxzW34jQb3kBXacMBTqgW9JMbxDwiZVccbJbZrheJj4KSfbbHDsCxwZpd6JVXxynRz53N8",
  "key37": "56ptCgLCPw7jvqkW8x5CGzHg5qvt4dCemXqkCnWRvgSMC3rNJkubmYmwqhNmePftQn6w1aMhgsMKFH2xRn3Yswte",
  "key38": "2q9SMmogG6NYuMnYomfpPotF4zSh219mbaghq2yTn6qJEJZZXiR4rhJ745jygu6sejEGAvgke1TRwcFw3kHcTcPQ",
  "key39": "2N6JwCaSyhFPigmJ2Ru4kxrwKNF2bYfAHsYeGyEw88axQX73DuKxX1LUkjhtxVcNgjVhAR36jifus9av6MqaAQZ4",
  "key40": "5nstUeX47yAPN9dzAtgSMA3LoQJMQ3up7nWy2fkSoY4faKSAsSTYXYAbWeQsTSh7A9PCBttSk2nCbAjWQvZeZPcT",
  "key41": "3MTZ5VjRKMHH8XrekDRJJ5Xm51ath6JRjruoBU7N8zBB8aAHgmpXH3RsWdwaqm9jyPxrmBTDirLwicqVM3PTyLpJ",
  "key42": "3E9VGCvS5nXSUULsBd2ge9Vt9A1DuBoS2rdNQFWRuBnDdCUrCXyJPQ3KvmxDXtdz7nWvuXRtmrENrPUwaLbjR4dP",
  "key43": "wiYoMXBzAXqJUQiRvKXSQtaXsd8oT4JPaiQB3dZ66X75615tcjiUfeBZBnkpzUFPom7xBDyDaTHuqVLWsTapEV9",
  "key44": "5ihyLv6ezYHozaXaE2fFtjsgvDU9i8529vjuukggXxf5qAqEDxe9A8Y5Rbu1cbvwZH6vA1eqe6NnZiPmMNkvNVVg",
  "key45": "5jsbVhjZYgdACsCXFebdvjzMusvVSWNPqmp93vK1SPSUx2MivZkjSgR9T6W9XUJ54ZsgtBQRUawSV8auaQKanECF"
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
