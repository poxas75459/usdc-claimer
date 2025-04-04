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
    "x2XHXyHg1Jc4Xd6ty6NUv6E7usVMoGMUJF362YgvPsb64fuLLdCXkicpsZiPqkRtsh4wY5XyVYbK3wJkGxW85Yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNwJWW4cdiF2k7xy5mRNHh2j12Q628FJ2FupVYmJX3uQ9B1JjQ9gMQWqqWciHoYEmvi39j4X5TS12bxbGP88FFT",
  "key1": "2nd12qPc5SLkhG5XMho49K6Mchz8CBGeJjTqxe46fwatcUF7JDhnhzxBJDQrSeCvQirxzGCfK73sHvBrByueXUQu",
  "key2": "dHWXZjY8gkipPbWiM7JJ6QAUMx9Zk9JZyFY39pXje6qoN9xrCWyMbnb16EYZGxEezmoG11BvgSLb8QgUeaVKSdE",
  "key3": "3KfzNgS89SNhZzdUe7eSKe3apFmhaytDWZv4DRUX8xrHXGvAbsGNpvjyEgyEzGt8ucpMnhzEVySZXeimhjhk8qwX",
  "key4": "4AKDweWkZuwJQKuN6DRuJC41dU6AKMcqA3Qy8W4cbQV6zmDpZcXTtRL9X4ScU9wqwrmTxebHVy8Jk9CHVc7V9J36",
  "key5": "5k8hk7wUeK2GMRRyfvwVSkk5KCpEGn1ezycTLPCa4TWUFF76yswH33hA1WMoccqfeQ5sseEiRtXfAvuzkjsZAo6y",
  "key6": "4YdWz8TFSxay6X2nBr2X6MM2A3DVsFpamrEKiaCKvwmRw57A1uxfzWhYBSXKqs6T5hzHMzqofUsQ5vsBND4j5WGb",
  "key7": "5K9HQcbkyYP1ig4TkuoTKBiSpNsRvQTCbmDBLmgi97A68ZxsznMqB6hQuvJGP1TJwVvPDSUtqMX51YjXHmFVCCrV",
  "key8": "3Jns1v6Z3MTHrpEsPWdqBsNCwLy4tdZa1euSZJFAC6s4q1c7HDvYbvmUm5BWE6Edd1jENvrUTBoguKuz4bpKTyEU",
  "key9": "5v6j2NRur4xb4dNzdf5fxNuy4vBadvtE8PJWTrwQ8WtEpg7UyRj3969pMzdehe7pr8hNpQgn1L9pKonk6JjeRyfq",
  "key10": "5q9CQfZ1RkRaHL7ogYM9ncTb3oDb6Kh3N5qwCPwRBrYbteij1K3AyirVM3sYcDRe1ThFPR9FL1UAcp87UAHBLQ4K",
  "key11": "3qSeVgWX2DRirj38449PMRRMSCgEJJFwFGCjTwMVsh9XUXQf3RcdR9FYTgAodkxiUp4n1bWuGL6xHrkewsVtuHRA",
  "key12": "VsSJBftWNNqTXt1sdbVqBCeVFBQ2UfRYS63nVANxNAc5GZ9oimUM942W8448uuruE5Mf9Whp6kV6NEhn4ZxW7D5",
  "key13": "vnNFs38XvYPV7wRabSbBDCMgzFMZwW1374ekBszoeGjfuxGs1dFKdkGEF9P1j6ntWvE3pmNm9sTKFfGHDLWJ3tU",
  "key14": "4Mo7skA9fArTqLUgjFbCMU5qP95aZ5rdA9jZL7vf7reQ9pZrecug4V1NirCiEcX3Jrj2XhGXWi8S2WGoPHyby8fC",
  "key15": "5e9fAVtwBAx4Vr2fYBGXf6yGnepVKJnTBxoPo2Q7XucHdmPUbvEKDZQHVLRHtee5RUQuxr2ncePx3xSkF7R2ezXy",
  "key16": "66RAmQBKJmdj7gCRsR8oF4adf1agRgVGcAGwzrQrTwGKeAqyfiWA9ynGBqURZ73oiRsWW7DQqirwbZvZcjbR2c1U",
  "key17": "3Wx1zcVe5LLhUxqCxLHzw26hQoD1qr8XWQCMT64vHw36Ue7xZVKdqLB1m4d72FXquy3ZvW5oERvSB8XM68gjNeu5",
  "key18": "5ATdkN7euZsNicwqCK5YiBx1g2qJQnhGhmMywPcFKbZgow9WzTzmnBrFyacWw5GTNjuKX9VkvwZMJmDRbMWPPx1x",
  "key19": "3SaEowejUh2WcxCpBT58c14AbKFaBKHymxKY7qeJRXqbFejREHz4oCLZnibHKreWaRGcLEfe24HacaSsHzvtQbkG",
  "key20": "8ZwKAoPY9hV9fhzYJXuVt7nDsLFi1EB4AujHszPtYc7BNMFV2eJH58aLVKc4eeHsruLfw6C8xusNSFW4ufJK1Ud",
  "key21": "3b7ouv23JUFoZA6GCHrcuG6kfNKWXQxRDkBZtTZbQ7T7hyfGrNXnKQQB36qcGPEXsQUG94JjEYpdqMgWpMAiFoCh",
  "key22": "5CKKNxGzPN6dPhJBFsmBsfbgHJEKizh1pGDKofH6CQeCkkoL15iEMJypqZvVWHNQmihMVhURDoa9MmehnuwFxMrq",
  "key23": "2L4wPSGAo7M2M5CbGLqypGWGxtd2Kty3U3mFSbTNUXiv7RefDHJdk3eLvynC9BCFBNHupa7rpj5DSgKpNy6E1yD3",
  "key24": "33ePU1Ms6FtEGgsWsk8A1LwoKCpRNpbLmheXjjkenrN9SfcwVfLPLigUAHhXGLPBLA1YYaA7wbmz1MQw5pYwZgdG",
  "key25": "2rjJ2wQrMnNpkySgvBPPsbojEZVrKELQxoFbpxZ9VWdpdyiJaucbQWEoP5bnSCLoGT9GjMfASJvrnEWCyX1Y5sGg",
  "key26": "nWZtroXRALK4jrC24ucfvvFKe6c1LZWTCkwFda7dNxYj3y1XAVNRXVhMHFQJ5g2m6ihyXt3Yhj8HL8YtdLyY6Rr",
  "key27": "8KZEdNXGaR9aB6sGVYALrnyxPY3TvjL9WSwxarNou2ZGP9cmgnr7jFVctnc54wqF4XHps6zL1fu8eBPGTrhRrnr",
  "key28": "67bqEi6VvWjZiGZJT79uTcWZe5Z99EJivnThjNAHBRARAFPWXx6Sa3oYahETo7U8PcpfFbPbZTBw2bVsJqjRt6dt",
  "key29": "4Rk2kpeD7osSeA2G9rwtSeNnrt8qTTEhrCD9J9MxYfYv2DsLJMBa5RUu6UVmobQjFCawNurEizKv2b2aXYmuWMCD",
  "key30": "3vad3YmdzSrBrVipSpeFp3QbjqiqzKS3QLyMo62wEh1uDyD5G6aDztq7LRrVkuT4XNXUYrvRr6dcTiYQNqmYpKMG",
  "key31": "J3Kf1hD8GGyHbDegjfEMqNZCh5hCuN6tdAKHLs5Fk5xVrqrHv33NYbV4iVytL8Cpkswejkur7s97nZRPk2Fvnbn",
  "key32": "2Uj1acwRo7wGGLjtSJ1BPR7mbMzYbTMMRFrPjY3HJDE72drrdrLE2eaByZ3ToBPzFgqdaxmmRQeCj8GpdtckApsJ",
  "key33": "32CGR4jxAuMpiWjJ3HCFHpptBWjrxxEDznxVZtu5CYLnSA8tPv99o4eG8n8H1s6BFCfHxTbbHmcpDPf8d8GZUVVV",
  "key34": "3aec3jsvp17bYbjWC1FWag2dkgmfhpZRWWAuCJFr4yw2u2ieGmfiqeQNVDX5ebQL1sLXP5jwRkrmvzPGc5d4HcJG",
  "key35": "1GLzmivtEgjBN54RxP8UzghoCZjHRrYpaeDXNKq83Hr6CbAeuaxdDKWLnhYzMdoKFuWdJ3SoV5mrPoquVcjvyBs",
  "key36": "5PCdvCpmzAHoKMJNnbEaE55rxqBXgBsVDoiZNyziScT8ZhqMArK5vjk6PZSwvogKkkypGu8yPK4URneStUBXzKMf",
  "key37": "578oGd8PkqLBGht3iTLMfeQKQbBQWBR7JVffqwnZ4YcRGqhfA2NKte4NvaUmyTqPjCAbD1yWvvYCCGbpM7vuYBVe",
  "key38": "2TRJxhye6TE86zUsmEHEJop73CN5bhfUT81X1a8gQUnaoMpy4bB6JDwGfBH7oVusGvQdVADPdseBpQ3v39E8FixK",
  "key39": "4sKjxVspTjJEPSRXd9ECeT4wgYKK98T4boZ2SdEErZhmVBYMxxib1oQZsGS8qSfB2gXx2k2PRC7RpzwxuaMRpNTg",
  "key40": "5Xuo8wLySTzizbCdnDobtqghzo2fa7fcvueP6h4JK7v4ipT7sYCzW7XDgZwSPQK2aA33C1qh1wi9T5NgPYfHS5K3",
  "key41": "4oMELj77AxccfYoR47vz9yEUHUtampMeyFVJ22cZkSghs4Qk9ixiduLHCgwRAoXxpj3m8rf2Pz81gbsL2FfumE4w",
  "key42": "25V5aSRMEHGACqbrPCZWvraai1wTjYkG4FEXxdV1LPg3TUPApfgsURpYkBE1qwvpHjvPbvr2hN4VYpPHdknZkTrt",
  "key43": "35EGv5WE2r3xp7Y1NfCjSpXS1TnAVBnSuGur48yx3n81VZYciLS4zPXcYyg44jrimydGZQKFjhWX1ZTCfyqhvyy4",
  "key44": "4oADwTjEA7KEzAC75DNEZXWFVZCqaXN3fAhkQfJCpVjvJ54sJe2326VddPUPUZH9CpbJifRWCuXNLWVdjiom1i8n",
  "key45": "5XnthsoRFwsiwfsmYj7KbwLivXn12oWQo5KLFrKvmjs3QYkWZiwBa2fbpmJ4AKh25LFeZtHc8pLtcWr4snKZLBD8",
  "key46": "5Y6UDBxxTWdSdYSrGM1iSL7Qzb9nhKQ7fSDrPVh9KGVzCYM1jmWkGLEY8rN9AyT8haKPxsDCNQK12fUxUnpXK6gx",
  "key47": "3yMSGJaw5qxHzCrDS3AH6rR2X7mMuVeHabLt6ABCbiW6w2rHh3c5BydFPgQ7soSpURurKAdgAxQxZ1QAHz2hFQEX"
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
