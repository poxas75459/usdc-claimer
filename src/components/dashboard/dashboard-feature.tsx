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
    "XnVYE89DwzYj43DwT1hCcXb5zLsxcVBRgagRuE4LHi6UfFzbR4e543qeWkGa44EgMDwwroPLck24Mt1Em5cVGh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WQPhdMmvxnURH7fyZFLwhe3vxqik1MpRbdc6sTC2DXvFZBt1HL8qDWvim33WjhGnvFQP43Jvq3dd1PXVkv7hPz3",
  "key1": "22G2WgnfYJywBBCZEMNM6umubyCKpLuqjSEMJ9yiPYwxvXF2jaAn416tWMZ7Pk4CAEKv82HEGogThwHHB1935gEh",
  "key2": "4Z33B9JcvrXeijRhnHYMLi4cw6S1RvuzAyTJjebLXL6sT16nnX19J7pkuEf65YuWA52xk14x4yiPE3btZSVD88ut",
  "key3": "3mLmGtAYyXZygckP5RpLzKQpXfmKDQ2X46RYWmi8AF79eZy3faXsMVY4o1fkEXUyTHcae5kGsj8JUrz2ze3D5FaZ",
  "key4": "5KZz863ded5zG8DQiLD3qm1zAeZk2FcnYLgaHZdBiuutyh91rpswU7bwNkmnLQYrSrWvu1fVxnmHJULzGzgALEWb",
  "key5": "5Tk8FJxVsh4h3biNoSFv9xJgV59QQdbaHdU5j1SG9e5PGypr8iSSzD4jGiDdwMxCWtTbgEGQYTvFSYoJ4Pf6d1me",
  "key6": "7mGqM8MqsN1QyV4ykAdGRvASnRt9wQYLy5KFwPxX5SsuLNXXQfbVEaAQNkzJc4H9LKvNz3by7zszjGiroa8fGGa",
  "key7": "2zRH8aHAJjhZ6K6NVaDP42MmQwTuukSedZRsRviggWqHkarAEdRvJ9K46akpe3L1n1LU4ZxTy61xGY83nUvTNqVL",
  "key8": "4hpYmtoSLSAsXHaUNSzQ7udprege7Gu9ALQLyKnsk2AAex8shg8DEYYz7vqgy5kHeEcWfwuggto73Ap8CeiR7mYA",
  "key9": "4UnAYUwWVBMR5Rx25hWMV8ePJwR3B3VEXKg2u5zrZwNGkDM7RdDDLd1RtyZHm6QqunMkwedzkp49RqY8Xn7PfpFy",
  "key10": "2dcBm8PMEjsqpufRkff3KBP6AgXi5i3joNqewkp8oVZk2R7MDfXeP74CRuyxF1fSJzQM4GyrXNdxsgfhnazGUYm7",
  "key11": "5qJnFL4iKwj2zhAeWZHwZtWdRTDNKHULw42Ys1YiPkkAg9kdAKmYfWLYBNMzJsD3Cx4WMajdiUX6QX6VgWQgaGS9",
  "key12": "4SNC2GwugTjtB455tfztcaSBubAgMeoXKhL5AoUT2aUQvbNm8bSffDfWZ9eTFtm3MD72uu2iLwzGtZ6v9XFtVt1E",
  "key13": "5rbR4PhNTavoeHcx3PZQXcnB7iiBtcMj78AbHA2CpmWt6bwMrv6DpCrmdH1pnnASrMRnBP85NAMoR9qfwwEV7HFw",
  "key14": "2QDzHJ5dk5GcjHBNcQXNRokapBEQayaUdJwRovPtSyDtsLaiLsa3sGVXpCDYu7vRvwVLfDjzo9RPvn6LcyRQWaJi",
  "key15": "3WKrHwecJtAsMiFr9K4XsWjS87BkrmmMrUqPhfxbNxG9FZGHse27NWSwPz9Niap8DmoEZboYTqobSCZCjtBmGffK",
  "key16": "FSUrGjuXq5aU3siid34chPJ6ZS8vgoYEeFjG1rxFkfLWVDSeXuqS823VSxNvU94qJQY3K74QC5oNU3XQvFNzYbX",
  "key17": "3JgQFRM3ZxmncCvEW2RhRPpcXcRkH8NsZjXE1RCW82s87RFB8PEmSpE1jXQ4CkDJbxwZcX4JZZ6unNL1TV1o6U4D",
  "key18": "52PQuss8JWC1KRaFwg4EZ5ijcBUzoX7Y2nXnewZVDTwt1WsrTs9mYKMWDugpgvcZtJ1Kj3zN528jgGkYJ8LLUi1y",
  "key19": "5kSUd2Z6oxsT3rho4cJNm45sTryP2g67TsHBfGemr39enYXiTFpTLiNpbW3Qoc3THu9qfQ1XFY72FbjekeKUCUPd",
  "key20": "3JUWuEzd1rr7vfwPqinFRNGEd71Y6BJNHKE35ed9nimtXE4tWDQ9Kbu6XKx42k8QKmKctsd2CknFc5v9UsXt83dB",
  "key21": "4YXcEAX1QMGow7NDHeRvvctCahZ6vSPH3NHbXC3gWfffBAYsF5avKw7HLFvHcn9WdkHafsJZa5x2YycDuxJdCZsG",
  "key22": "5gakDPHfeN6JccMQeUSWWVBbeELjJJ9dKpiPJAmL9H8UzWqFZtUiXD93kQZV57aUMVVVkqQZgx6K9HcRVSeSrNfy",
  "key23": "4ry57oT9gnFq8ARehNFDQjFXGRb1T8HJWkajAckSFeapgsxdNXEpgqtJTttL3d3qj7c93L5WDQHJ43jYFyynLaia",
  "key24": "4KQUV8x2oNjAv3FBSmJ1aiGJhjMpb4AdgWiWxmUeKTjgkYbuCMf9xiTeHbYBEszUGmH9BuJv8joxZVgm9HBaJxC2",
  "key25": "32GszcCxgg2WWcjLTonAnmMF2QTXmA19MHQ4fviLLPK14aNA7aTv28f7iu2HZWVkwy7E4xSok3ouqV99t4i2YDZz",
  "key26": "4txS5bLq1iRNgChdWzxkccLSxq5FmxTeLUApNZ6CrAwsJXyxC4FxABKkX153uBMYcHn8ecEppAoMyjNg2M15c6XD",
  "key27": "3GyJMK5mCH5tWhvcA3ZhK5T8uTaT7pn28j3Ws5URkY4CL4NgPjfNGEQubhUrFfK9TvUq3oUWqiLrjoFfP8Tjx8mq",
  "key28": "2FJN8buPdfCpv2cAgv6bEsYEyMNRMUDxxJLsDzNvt5csesh4Ev85rgaDTmrVSdurnVwEcoL1tBmWx8rSAKhJybyi",
  "key29": "4nTdrpK58Qo49sYzG5hcjev2pXhw7PXvpcWZAyZqT6QGRX9jhdx63piDbBJf2S4Ujpwh7vtNk1AUT6off18Hbhrs",
  "key30": "3zD79kyPYaNTmqEuNLL6RdKmA5CyVLE2CtaH6EChUx4Z5VvLxPDrmA4s6QTseVaVkKsSRjGHSpDdzGqkmTdsoDAA",
  "key31": "27fn35tXraCFXuKH4R657nP6ci135gF8g1sWEqonChWKMZ7GE7QFKBEG1iEqhkZuta7xHU6V9vHR9GqZcNS6oTCe",
  "key32": "5V4B9ec5u2tH7BDUxpKiVk1GMxbnSENjJ3TnhTDs5GX3wYoiL6BuMKLkcfe6FLTQw876wFkW9BgDfw9accyQ3f6W",
  "key33": "4SbbD8qamiJZvoqKppwv16n6SnDZp4pmVKa2K9NpYDdwekEX79zX3TYck2y3a8Tg41JynznpeQVbE5yPk7Zg9eC4",
  "key34": "hoEqGovwoU5AAhCRHU7tWj2MNeW1ARw1Z4Twap7BAaR7HEGVmb2zFwJomUBtTPMobJsYC2L6NZCDHE9G7aHkouj",
  "key35": "4tEzCpgKxA6DqVSLQXgb2iGr1YesU1vjKQ9BWeb9LPRnMdgQMVcUL2RAhkTNJy6EuMcfUv5tUpb3pij6mkttiZ5i",
  "key36": "2A2VpjHbzxZmuxXMbJT18js1iNYwPeT9j44UAyvUYUgLMWhE2unA88GwVVmq9MjkawbcnXGuD2jf1geQSB6eYUFA"
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
