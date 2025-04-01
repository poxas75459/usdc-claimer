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
    "2XnH2L5V1AJdFofdVVaQUncxE49jtcHkZ6J8i3EcXUNBR571mErCt65mtoMhH1NCk1DjkrZYtMTzxwV6Moq4G2Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rob8Kdt7hVqoKWgq197YFCAeMdxZbHMvQbS9cLXLDc929x96CvLupNKPTGwszaccPLQCqmTZHX3WH8JvSpYXSTg",
  "key1": "5HpaJ6KiFzZ7fxSBwDN6aoREA3oNiHrrDTABRKYx5nD8caJiLxghb4SwpiWJdwfAJVkG4qXX6QoTC2UpxAsU7Ces",
  "key2": "ztpCBD5AmKqVptqmkCh8JwSqp58KhscTn45R1Bu8RSYQsTCmmstvP3eRL4G9PvSyGqra8n1uTpKEWWz6HeLNCoX",
  "key3": "498dKGXK6eTPpZAgpe2wc3X479wv7n4cZrhszHexvoFXamRemkaCVmxhtvNzVyoeG6twJzgYXWeov36KPX4a6DA4",
  "key4": "c4wMDapSjtgtrrSqEknBHYirn4kr4ZLJi9f8EFL4HkTHFi1ts4QfyNmy2Qocc6pnej5ZkqiJ5LBt6NgxKd15a7Q",
  "key5": "3badwpPjqVmFyrSrWN6RaEWGsZEXEu56kprTUDMVFQqh9KfMnfUbzH6w7k9fThQmcVJkxoxgxLma9KXffuDijJEa",
  "key6": "4MbTzZEoVZC6Lq42uSws1ght5nMB2buQrcMiTX8RDJhuZqKzNCLNk9PYCc8UBvP5xiJtfu1uhyMUDoGwRKYrSJCb",
  "key7": "SdAPfDAaLe8ZafRd3Wz7ZjH6kr3prdR6FAMHGvJb2zgEYvVMPqnVXFVCNifC7SDdRaGqF3UCC3ECBYL1HbC9ja2",
  "key8": "xq7m9dBvR2Ashce1yfd4dPeRkzqmntg8STzsTxtKpxWNkWkwEh5d2Bcz6rNh84RC5C2Ffo4jhaZc5cbNTLSuXqF",
  "key9": "NMKeUr3mG2xUAvZbe2xdcDhj6vCzX4sR6JWiJ28tN8DTYhwNpymFi2PK6m8GCPYyVkYNaWCbP7YrtsDh56L4FpC",
  "key10": "2sKJ74A4j6GfCBDa7tAaE6skHp7c1wEEDCW1sWgXwE89qyfeK23WrhrwWeE6sryzrk9KApznwzzUZmh2hinR5Xqs",
  "key11": "B8TXskTznDaUSYvwGLDqCcGVDBxQtETJ6Yodx5ctHPuograsU34XffNYJm3UJUdZJrzuLk2TiYGaajFXiPTZ9mS",
  "key12": "3ijXKp3igUaLt7c6VtZgpuURVsbofrvXbHKvs5BtERV2Urfo2knLQZGmJPENPX1RApuuaka6P4hr2UG6mKEgfJxW",
  "key13": "4121campxxeeU2ozcs5JE9yeVcsmSig2mh66UyncRPZF5Jtp8RNSCA9UkfiHkJzzGGn1iasd3rmyJmubs11VSW2V",
  "key14": "3YtdxTmTFmn8sisvyBbED5bxUyUBo3ok8VHuQCThW238Dq6Y8XHYLjFLX3LrqVEe32BPiQoN3HNZucFT6wfkQS7e",
  "key15": "57k8ZCrFW986zKS7gaj3LTfcC69idfnF1nENkDhHG8BVcCivMVwSUnKVHuSqwu66Eem4mJJgrbi1yuhazdio1XjU",
  "key16": "4H43Ekgr139M6VCUBpMovrnVmKBvrMVG6yu1tMQYBaTcNHecwpzojMCcCDFvH6bZyyfz2WF7JbPgbbJ7ytWVfour",
  "key17": "3PwCpJLrXDjBDPHxEU4J5Yf3MUZ1CNmpxdYjx44oYDm6y17LQpkrW8H1UFGNRGxy1v49HPXcoQAUm5zYnxAi1j8A",
  "key18": "dDXU1ZAXvBLGb6xfjA9T4E98ZXvENXATKNWjtQ6EaVzjat9v5KBNQ6d4in1JFW75YqNM33dNfUWpTvoUh5S8kPm",
  "key19": "2WBY1PgNWCZjykPbqC4U7QTVL3MtvfRsHcuxjaAC1UwTjQTJ2Sig8kKqPyjnD6UQd4Mj5ehxthn2Ti7oV8KaeFB1",
  "key20": "5GbMCNRTYXZiiqbQb7TtwsZFJcru34xU1tvAbjRTeD3Z3ATqamXQXs3QSykxRmGvqDJameiMoYdvg6jvwfQNwmQJ",
  "key21": "2Z7N1rYrBWAGh35J6e89NnN6BSGwV4K7fuouSifQJGJUHQU6hrBi7CRhYQwQaxGdJEijj1ShgkSnDDLZvAWAaBPK",
  "key22": "t6KcG3jBbk7NtPCCtJqWSE5EhFnMk7CQ22aq7YF3sk3ogvWJVxELK6rTGHa4WbuH4NCf2mt1wyhyfvqhnRtY1Ye",
  "key23": "4yvaLaWKZdyhpCDmcjw88Xtcc4afmrExnX5bb8skc8WRDA786geWC2JeduyB4yC7mA47ic98WYMt6pFTR7BMriLF",
  "key24": "3x3WjvB27SzroHTpS8d1BynqT9ZpvS6KbsHv4Wri2PBqkzhhoUHWnazBtqzwQJVPNh7xGceyHzRJszRi9MV3WSNx",
  "key25": "MMsaPRUjMHezVPMbovQWJC4RBuftaXL2mNQujDMN4xJCki6pTXmtiaaizocLdSbFkJme86nLkdRDtxwqEpU1fxn",
  "key26": "5MtwnYYmLHeJun58X3LoGgur9iGR3ccY163DP8bepNESuwtKhS3xWPhbv7VMoopLKnxSUzT8iBsGAdZcEAzMid6w",
  "key27": "3MPCvZzoELJbyiLyq9ynk6A2RArrM1gJ9ogA62ZojzmhTShgSVkGhVUWvTzyC9LpqiuqSriBLGtnMivfHabQj7RN",
  "key28": "37WGJ1bx1QGQ8jgUdLkLyAdJp2M26nxHQEwpsaF9wbLfw8KqCETZkwmLs5Rdp2nLqjmtqQXbBWgYumirHizVKAdJ",
  "key29": "4KFVjJuRzWwSvichHGHNA33hGJQT1VrZPvYrD7Kci2Djn8up5TKEytykPX9ibX1mXftAPxbTn8LhhW94npzRJkFV",
  "key30": "4sbzxjLfKb2S487LCVEt2aFF5nGqUum7ozb62UYsjqofeDeEwaf13tHy4QhRfiHBTvBzU95EZTbxGbEFURaDSbm7",
  "key31": "4Nc6CkNZ96T8QpssFbq8RkNtp3hmsYJfzh3v1oH3Tn76fXSsHf4XwAtPc5d4ax8hA2V4S5zUhzT6DDU1MzH2tdy6",
  "key32": "3xNvxo4bHFevEoiboDfTYrgxgS2VNj16YSxpVPf4FhrxY7zrBcseAvmm5A5pJZvLyhs37jVxE8VuSTJvrBZr32P7",
  "key33": "3xBx6BfiPCgWVxhZ3jeWyWbkm4bGr7ysvmDmWLGQEWi45Qkjr6yBs1Dx4BFwmUMQVuGmX9mhvNmJQ6V9duxYHxVv",
  "key34": "59jcByn9eT6ZSJzMPBG3zM2Vk99tsoMk9eLBJ6YuzPni6VwdWkD1cTn2SEBdYt1uxjtPZsvhyDEXeZCuk35M18KU",
  "key35": "4yv3raiRcMFbpswVQ24xvsFFi3wnYybYPABVMzC7hfwwVYFGqqPFHYu8EcHTX9oKwZys2VbibuXuK1yUFg6cvRiL",
  "key36": "2Sob3zyptY7fBHdEbxBa1GKePKxs69YMUmNdipg7pn1QRKmpL3NomJYx1qaLrnzWac1QtjSZHP4ZiVJEoChRDa9G",
  "key37": "2UnFNEYYHnGDYcsH3D4LPoCv3aLi1XRLwp7L8b669B4Ak2R45CEyepkMzQ6uHSNL2vHhx295SDJtgXd3faZR2wd6",
  "key38": "tLwpDqfQJ5aJ3Mky5gsBTpMRq6n6EL88onWnNnKKUBQRms9LYWMqYLFUHaxU3daW4FMjgnf7ninfxrt2N3QvnEm",
  "key39": "fAfUP5tRmFaRed9kiSG9WcWNFVkPV5JvKSJFsjsUD7VuupTkvn6wCWwxoxLk7btAPDenfHkwPjwKUZinuX4APSD",
  "key40": "3YRhtSTmfYqSrBoscK2DLjYuQ8c5kpYMZgW3LVwrXsomevY9rMwUJn1XT4kYW8TXZr6dugMAZ71zUQuw7RcXhxMo",
  "key41": "5W62FnTw3LZczNkXxrkQMA2DiDdyxZR7z5UzGU1qVmyfcQ5BzRBLrHGqCEweW4EtNAsqC9xgRKRUQVPcqjQ7CrHD",
  "key42": "3PCsxRt1Gxr6at1Z2qT68JeeBDBdtBGFaTGgTn9hxcNJSJjReNbmEWDQaxEyeQN2viBPQcH5BLLBrGmv2cvkwqi6",
  "key43": "MpZNfHheBaFtzceiaetyTaZN3Eaqugh6wwXUqadGuX73bJSKionsrPm8DCvUJN2GTqvyBu6Zpxot9k8sBknbvkZ"
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
