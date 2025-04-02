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
    "UatDSger8Qf3TZ8u7pzMyQGTT2fuooNGwzMnKimvynF68gS6ysRCdmSGGnWVQDQBJXRrzPSv3PyKc9iTK6yTQu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYjJNjHPWh4xuS23k8A9bHciE72QU42J64NaepanR1fZtcP63zB6viku7UwmgQqUCmjAL99aymdxJNaSS4F6JjD",
  "key1": "3uox6DwJFLPHkoHqDhhKWMK1YsnyC5EiTyGEz3fZGCcHkwS8L1zeVmxkcU9JetQg3qhEzompYyzeGTfrT8FHNwUm",
  "key2": "nNYm7fiorQvspitSdN61xhxuf9bh1ChZ31eWjHsws1M5oyNfzPa4JMHcTrLjyxPGvMeCwhqbr3bjxLG3TvftGmc",
  "key3": "4HpEpAFqyLuQmgfjSReKNLa5d92jP6A4GpSeUvjBKYQzmXsTvnvRryGorFdmXrwfXrpPp7tiHhVYYSigTYmVxV7h",
  "key4": "2rnrk6D1KvQxxEwfX8XWzDxyRxCdB5BvQh69g2voRxaixt8TGRPPzPxsoN1SMKP8Miyhz5TYT4W8HjDHMYmvVY7o",
  "key5": "54MCJZ8MEsZbqbqNWxE3o7krY38sV3gfrmsG9x6WF1S1F71FoLi9mQJKGs742EQSmEKtttND1P1GeSfBjpeuMy5n",
  "key6": "4KHrMEKpASF72MnNmLFCHPMmJLzRFG1Guvd8MKNcqUfo2MTRQeD62uQao13htJQdrw7tHXkBR66Sa24trN15DatL",
  "key7": "4YEsh9h4buokLBu1Akwd9oYxvhFf232MAaQKDcy8Ln9mA7AGiejs2gNTZKS938H9LQ6gLx3FL9BTD63cWyYEfgjd",
  "key8": "5tWNiA8Xp18XQ5fQGUNNamupEu8XZd1ZqoyoETout7U92pamenP2LGApZEsY6QddrAHeThBhFtoLV32QnTjMwJFC",
  "key9": "54RjgbixuvoBMUt7Nn44y8996byYWB58BLjBPv45JdcRFrzjKQEvZAqna4F8mA4EjjtCsUhHz7tpfQ1GoKrTVuGw",
  "key10": "5L9qov3b886k3Hps31QDpjbsSdD1MbBVGMyi1V1NVn5uMZ7BAi9LmaBUdBbqVz2WDGejszYq7AuQW3BzqszdQJfK",
  "key11": "4jMwjgF2QtUpHidKZ8n1rb2HSz1UTvYcjcdAy2vSETYYiHuDEZmZ2nfiimQT4CNwmEmUxp73v4djWMg5cMJrAaZv",
  "key12": "3EgeFGjhMzKoz6y8EGGQLM4NGb45ST8bnaUQP3CUeuWJVZesjy79s8kVbMSYfogb2hXxPZC6epD6qu5rmVRuPaMj",
  "key13": "4HDzEmLtNBQ4FDTene51vkFq1gqHJTCXpZMa9z2DRP4NVntDRoRD2wVHcqukquiWeSjVSs7hSW91y6w3EKUGWkbw",
  "key14": "54v1eS3nLNpFGLW9Mw8Jh1fafTWspwwUagjgY5JGAnz1eK4GFzdedocBicpCRXKwUbjdu6HxhDhfVQzp7Dm8hYs5",
  "key15": "2J16Qjdp1y4sAQEhYzJgZVwNuM3Px9WzbBtVTnopbfRSdtgySJrYnf4ZZKvxfv9B67fHx76ZAMGemgBsGVYpQ59Q",
  "key16": "oB98ygwxxeU4F2W6WB4pjx61CxijHYPZRWgEdNjRWU6dBumhFD62N9y9vP2MpJ1RWQZQMrpysQxGpzgU19pkPUp",
  "key17": "5hu3MF3xjUDxor9pqxS5zUf5JvihATjah3uQCUtHyvor5vLcWei2dCPuLizLHzzAWjH3jDWKgQevEp2BvzPQHJkt",
  "key18": "2uqVqd7AGh2MF38YitGqS5Z3XxrteiCVXMrmhWje4Y327xC2swqutb3ua6E1JAuE8zu2Xu1pSzpYi76eDGf8Fz8o",
  "key19": "3MRJHxz7aSJ38Xtop1HwFwj3CtqSwwHaofTehG93Vr333mUNi47uArUWR96LVosBAzmGXL8v1fibfE4KFM7WUryi",
  "key20": "E37n3Juq2ykuNAm1mtmjv9svxLPAMa6vZHWiY5e7fMEaxrvJKM25Qg3a4xSxsVaK2pk7jVCPR82yfg1s6BApfKr",
  "key21": "Qet9fVDVjRrcKmWp3mr7pcFzUyUVG8NNzA5TksNnYc9yZZ9aanvN9uPWtWNQUQakgTkm24gJAXr9vAUAukp9saG",
  "key22": "3cgEJfbzwUe7gTjpAuEPUcN885mPSeSN5EJmkcr1RdSyFF9EiHyDvMzctVUQGviAJx2PWCr6URkC5mSbxHJjDGkm",
  "key23": "5xs5T1dDix3GeBG9RWkpJTrjCGdbuS4nsh7VBvKUFNYZc1rBuTWKX31GyRdBVg7YRUMyU2GCAVXZ1ZkW4L51ETBe",
  "key24": "2MHy3xSEWUdxscgfpNqjPTNXXQZoNrStLHmaS39hiq1Es6JcTYvpGpbm5mKwkDeLQLdC1EZT43AFMvuJAEQpLhvF",
  "key25": "SMEk6VaqfT5Q9Bx67BDMfvSezFF1jVP6wvMKdpSMsJjDDx5SPCutq1eKzoVjJkFVUBpyqj4kujDJP449XK1TwV8",
  "key26": "3oLR4JwrBvJmJXz1hHCPtY9bVsPLiooy4bRLsMpSyvZobvN3w8ovanTnepHMw9BUusZzk2wuQC9NYgm5sizGEfRC",
  "key27": "5dUuAUeN3mnHC5EH6QYFpMuiaRGgGKDFZfmidNz5HKPPKTeAovevQV9HE8c3Xs6BZQPmNNy2Y7PJrPHn2KVuiMQq",
  "key28": "xb9hKZyhkQ28mBh5yhBuAKW3EQyvE5HAe8JGhdBMqtMBeCb41dUhZUN3Qod1UweWbkdPCU7UKm7LhSTF9RdVfGC",
  "key29": "5sbYH1ASQJcuezyPxA3sxLBebnZN26Shvg11Nt2TpfvrTDbpSWcEALzSMNDn9vSk4kEqqiTN5RurwwtHpqLwYfHD",
  "key30": "4cizjbykN31bxRxfTvFVE29r7Qa1uozVGSRYQ2cYaQG72f3ia4t7n55V471wY9UFf9q8bm8E53Xrr5Thdu2UvQL5",
  "key31": "5KfJeEkNpSGrqm5qGYena7UDhXJEqn8p37gLesUr2yL5pD7nqBVqs48wb84Ab8f6DkeSR2iP8PCoYeS2wEFwBoQ",
  "key32": "5ka62ixv2YTq8kZEGgKjuuEAYkmj7SVLSgJytPcLwrwkeJuaRHEi5xqSc3pwJfLj7ZrQEV6aWPrAJyAeKWr1VnUM",
  "key33": "33snV4zmQN1Gyuiz2r2P7vB9bmLwiz7br7o6oVApaq61U9n1Ks88tAZk7aDrWqgPb3Fa6nGqyWBJJMXmqdq31ePG",
  "key34": "ejSHEvHQ1VftGrfL2s3TZTZTqr2UiWMSYGpmdwHdDjAWxAK1xECDphegyPmYt78bgzMMBQ1pqazgaC884iQUyDB",
  "key35": "4TeSogfAmwq8abZ1q6Z4fJ4Q8svSBgcNmuE9qASiMaU7ZSTwb9g74xjMb89pxzs3CLGRVuQcYuYqf8qSJ7Ddgimk",
  "key36": "5B78GzxXQaXBJ5AP3moAc3Dt4WkL8MXHciq63wRH4EMJpUPBkE2sPwMMCh93ZtQJkhTpxgpBGerN4YVHij9zuoyv",
  "key37": "3eSyxsTphxsPUmkPAgX296RVtJwgzZxhohnoVb3JmKzsECB3L2PTDh8mTT3P1NVJHai4zqWNrBfybsHSATjiLDqq",
  "key38": "32XXrHAcZAqdeYVWaLLervASxqSgcr7SJWYiAz2DgkdsLEJUVQ5YFdPfyKbqJjnvBibH8ykoqyMXGxmwKK8SH2uW",
  "key39": "2EMXvGZKRKSdnv3K8H8TyWaT8KNeRgnXTpFtP3tKmp91cWSvqYVDbwKRaC7c18RKD2azKbURyquqwMGmYJ4Zpvvt",
  "key40": "3iYkdkvvyhK4WJHZ5hwGLoqb5UktqdLEKpbvEwYQsuxeBtbFgpNouaFjYzzffp947q6kha589K9yzpWAZuWFooGc",
  "key41": "3Y8txQi1cgmqzXio61ecMPX5LwgwT1YidGgxmkz7ruoTjunncwypVQNm5Er7cg18W3dVzXhS25GYkqgbChAVLxiw",
  "key42": "MNtpJgCXkMxXYhF19NBPj65QbacVZcSYcatbdUnAV6U1k7RNgQAjwci3kvFhU26NCXsxT1b9QBRyRXqU4N4NeD2"
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
