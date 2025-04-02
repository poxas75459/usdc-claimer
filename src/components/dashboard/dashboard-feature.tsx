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
    "2pBPA9CUWL7ZYGgj3hSpja7t1cJojz1c4RzjcJadLHf8CcQN5oRrZKUw2TgsAKsQtC5rV3qL1YsQ85zJ11QmM11Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpYr8bFykQtKYCr9evB1BqHEaUNycz31XPHQuqjorgNxx488ASUVhaGWnnQ3mXFS47FU6FaFBMikFEYVoYxht2w",
  "key1": "3wkezaAy7zchjbxeduGWBVptx4xGsbbUXviszVc6Bj6BjwMDyjBAkDWGxjLPBqeKhQLop42TcBYJ5zJxYfgPhfH7",
  "key2": "wxQokw8ePxGaoGDhRMDjzzzhecsYWRYZMkqCx3i8i8CNTMLWt1Qvo5LM1AUAyECKv9RGx5mP5xm4Jn4JTYKrLgt",
  "key3": "4D9rRqzyHjhHHn7L6ArAccbgnn8YZbJNrCLgp2SEjzCUgibTDNxd6H3juX58ADvBUiw6oNdC9mLzC9V7vGYGGTVx",
  "key4": "24iRAgBadAY3HE5wd89u6Hko5r2gcCmPGLkBaJY4Rgpp6rnm6ecGiVYR5MJV2uRLz1FBMQKjY3e8nrRMPkkEddTV",
  "key5": "34pc5AK35qubsEqKWmiJ6FR3FjcBrPZUTmZmvtXyX9NCJGXiHAm6eHXojV8G1qN4DWR3TLQcek2Y77xMP4RMkfSY",
  "key6": "ofNPg2B1edSqGQwABYcceLfE6qmCzGSv4WTb422FDNX5srNfakzUy1jZ3xxGPzuPq7wFhhWQGzPgCZpFamN3rqi",
  "key7": "41WsQxUShLy6PXjLWYCdtWAYxJM8WhNjnZbB2RDLuqBom8U29Ha5NUpCq1etETt7Ye421rBvd8BNP7TgwbnXSa5o",
  "key8": "2SWXh5AAWxqyPxYy1N2DoV5b2awLsw6sxmGjPDyjn19R3JpXPu6z1vQuS27ZhHZxsNzVj8MrmZCT8UCMYH5XeixF",
  "key9": "2dKBLshPpQ2L9yCgHDNyCxXWayAcPk7Mk2gxim5fMFmkiGryGbn11c3heTkw9ekE6J6dPmLXH262NQuiXrzzx5zG",
  "key10": "5xtM4PFNfmFxVD1YhTp2oSRh24D8YobuBr7LSQ4HpXfwPC6N5MXykU4X9LrVzKNymdJKdxtktZmLznyZtwPbcbAi",
  "key11": "66HhnAacX4jBWUstLqqScj4p8Nfn8yPheaSxYte8vLmp4uKZGrb655Wk2DRVnesX1fhxprZpXygzCxpsXGFFSZt7",
  "key12": "3N75cmcAdwgqsAKmbXkRs27zWjMBpUvitN7kepJizj1pv3LhfSJuLRD2Bwk26a4A8HW7C5FZcMTk9L2nGLL81DoP",
  "key13": "2dEKZ64rikLbjMMCzRwTfjhVgwF6b1YF2XSvwtUjsnbciWiwBhUtZTNUHKgxc8o2JvDHvChQzAWknohfA29Q56Ya",
  "key14": "2jU6moPzibMV1VSzbiXSk4Lpx9oCuY7uTh8usVT3qM985LFyXA5XTCi7vss4RhpJsgex7AWKX9aNRYcbFMwu6tEh",
  "key15": "aPiiQqiuosF3TK7PPFt1oJH6PqN88fncMwXVyUucEvjSQtgnm4LS9SztuFGwKpFg2ya6r559Q5KiAWQyUb8EiJy",
  "key16": "5jWNgb6eTdeXFgPpUN5hkfSHKRUqTNsa4PnQKQEkmSp9BLRxKQd5EC9QaMrpRPAQ451qvZ7Quw5ejkkKkpMh9Hzr",
  "key17": "8EtKJwetZ5BPEJPsKhV8HriDQczzNm8H5uaJEbnXtdbW2oZD4xJPQNCgtaq8pz1ibhwFiUZxLoC889VzEn7GBPD",
  "key18": "3frfCRnwFsd2vzQKXa1KbJRUey97KrD3HWE7ZxF34RuwRXan5d5zDecgzwEqXu9nbSmDamBHvLnALsjYsrdkBjN4",
  "key19": "uPaqgu1Ja8XfaxD33DDmbNdy5Var9AcbjAq3x4DkJogPRNH1Xpxh4iZxnXkSBUzztstaQopW1oqBthieZvFfFNd",
  "key20": "3KDh6BFmaiEtPpUY6N4qr4eZyoMJRHkk4PSgEyDrzsUW26wd6siRyWL1DmtaC8yNFDS2VvR5vHMAhaiP9BMWuvp2",
  "key21": "46Eo4egBpcLGbZcigxx6hrr8yo3WsEjfQuSzHeNbp7UsrGg6hnzcz2eZqLbdpoDTdK3rT7gGPGZGLjJhG8WbL2eU",
  "key22": "3Z5tdFM3UeXgBYiwFRZkiVTrSUMqHYK2XEL4BTzJehVxJ5CSkGRL1SE6AWoVW8BYZ53E7fQjZ5B56GBstS2APUjn",
  "key23": "5bJ8zkPiLzPWDPvNxp6jfUeEcGk2ywN4Xhd3mUf5RqaMeCzHdc2muL42zWwx1rkoULEaZRLo4EL8nimLkkuqUMtD",
  "key24": "59hvzBeGTfgHM765dFTcbphF2VgcfhPikcjXKmruYoUY6tEf9tsZpgSFwoCxhyjdWACANG3nEr6viC5VSDPWnZnE",
  "key25": "CyKZanKc2ZZmVrTxF6hVwPwuUrnhijDYovHhqDE6m5EjGriDasGn6fkTbUKjdHFVpsnNbtip9vSepxfrSciDybu",
  "key26": "5ERp5JfdxU3iR4pokDe3CzETTZSq2g6LavHSvRv6RiasSjULf4Qxv1E5zHY1BawbXp8wpLTnkYh9ka5bjRjn62vq",
  "key27": "29rohzFWfP27iKD4gnyogtnodRrnDPkJSMBYFgsotBATZvxvEibExR1sxba9SpzjuEEYq5t3ebVzABWnsByggeAA",
  "key28": "35rqfRvRPT11ayHBxmaRrSkitH6NJDwUnRRY7KQi32jWFNcs3VdZ1JYwWYDU84b4z9aYPsPYC9iMn1rqVSBDK9Xj",
  "key29": "2uRvXFmFSCRpPK3sgzXALmUGjJMQoPPC2wNWaWvFddfNiiaAXXcpfCR2da6NTugrGvTiudy34epbEUNhUxjVWtrK",
  "key30": "2kYvvvEZQ3dtP3ECZExdTPZ9e5jzHxAqV6BSPNCpPxLYYgzE2dtKew45Qs8FymTpXTWjoYLSbTXYhRYjaKdanJrL",
  "key31": "3nvZu67AZuo2Cy2Cd84KkoD2ZSjniubSq3WVbGaTeGbwCGFzTKvcmpVK1o8buhd9nZiKuMDPpEvUAbXFhmAcUnck",
  "key32": "2GjW9DLWEGu9tWUfxuNvWyE4JJ9HkYWZC3QkHVDR7nv7Tr22faFAszeMWSi18BdDUjpSuWNv4XcimTjsBXn1Aw88",
  "key33": "pp7GkNvznvJ8hr3MxTW1gMDdqGnuLuaGm2NsUZzsNkiWKCfu9BKAzFiPvGKqk6QDJoLvYRr5WGSoqsL326UcNEa",
  "key34": "vHEhNdXpTVLZerbB2S8Cwp8MCg3UctZap19gDFL7xpV3JpwfdqHRYYdeHwKX7uUctT9uyiay3j49ZnS29awJqkL",
  "key35": "qn3dG22Bf9Xwvh1jho8U6jorSmGcs31fvE7n66XmZ5Mj14becqMMY6qvtm4i3jVMt2KVNh5jEy34w2M1VGNNXjD",
  "key36": "sB5NaaE6GrvpCnNgyExv48Kbf6YhuENdUtefVH5i9vjXNhDsdzsRkouXsgDbdkmUyf6tU7Us7pzYr3Y2fmwjdFy"
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
