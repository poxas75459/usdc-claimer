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
    "5qq9L9JemTNeN6BPFVVhYUmcdx3ngowH8R7ymw77Uny1R9VLf33F7suq52VraDBkqKKX2fV9WuqYT36ELNmqq4tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmpHvTRyRWV7rkoe7hTCgs86QTSsD3E8Zpbu69HTRCjD1rY7P26er5WwbWSauy9godbRRA6FL8XcahkZ1LS8Wn7",
  "key1": "3AbT25JPJdzuVkzsPH1rbBU6fYNeZ7kfL67gAiwrNyvmgxmDnXSx4L2KE1iXJZZprxR76gBktvxzheknS1UcB25w",
  "key2": "e1VvSZCienVGS134fBCb2taXXgFXyEfGqWZd4PhESvHPAmdFgWQ2KkUEwXvY4stUjUzh8q2seCiLHDsgG4vakNf",
  "key3": "5JumNt9LNMQqFurUWVcePhanZBmPuTYP47wnTY3MLSQEVcB9LWVM2kTtqjVoFR7dxgpCg3xWr2sDTzw9Z13t1SKJ",
  "key4": "4ecH3HNtdHB64g7yR8WDmgtZJf3ADN1emqb7asNjcfo2YHs8NEEhK2tp7tRepcKPH87JGARPFLRKojdJw6BmB4ih",
  "key5": "26DgkAaZj2NyHpmtFNRFXWzRUGQBLFnLG1n8UKBzmdEDHsubpC6xKrT2tMHFxXMmoFEg6NVuXczXjRRSEC8gstBK",
  "key6": "3YjJw77NwARRwzRuAgEyL3AZQp95T4vkb13syEpaX7t7dggVYUuaEVg3vLtgeRBD6vn7JNG5SxQ1ZKzdBqNT5KDj",
  "key7": "4KvpK75szv6qQqqYNWXidsbUosNeYEvxJjS4s7kENdAQHVon7m4mwVfZdwHbKcokg7fr4o4dmsh87RTQo5FQdCyu",
  "key8": "5jKZXtRGcXMQvGtQNBGrfW7j7gD6Y99sdCbMNW7rkCTASpmkTbAmhyrJe1a452Hpzsm67wZWp9VctnJTZqeeKfCN",
  "key9": "4yAsTckdxxk7vL4RRppUs5aLjepKzLpzVXsYJ8DmtJxv755tk8HjgtCFsJt9SmBxB6HnmgDLbCmcgytHykUHg7X7",
  "key10": "8eWJ9Snwu1d69CWFr6ogCtfM1F5Lx1hZwGaySHN1MQreSjvLSXxtYFKjPYHwC8KFt52kUFz57wU3cBYYeQ6rxaP",
  "key11": "4NeUeqQfmXaVMb6LbbNN5J4aD3FmfBK7XdAMw7CpCS4FuX2SQ9prwNHDZtnfs6RVZzzB4kZ3Ze4NSxAVP78arEKm",
  "key12": "1d5NBx8uUN6ghK1G31hovaEZ7oavPapsqgvjYpboyEDMGZ1aPtfFgn5G5x1YaZtBcHeLHE2nS7sbGT8SevqeyCD",
  "key13": "65tABY8Vs3dKj7x6f1AG7mA3K9eM97BwufHf8T3KZyGueKQXqTRhU9WoFsHYV8MLYghhctSgdpgTA1JgwytZnPtX",
  "key14": "4dwmCp9HWGBfZyv6sWh6ef3Erf5nUcj5VkgQN4f3idpFsENwHW1q57xPHHFZprPv1AQWRzDxQNG26A2bYbgN3G57",
  "key15": "CKHzA8r5Cm7Evs5ZscCyA5svN4z6YUh7MqvV769sKRavCUPA44sbHN6jTB97RFe8hSvEZDWX7CGmwZNUZXNuJJF",
  "key16": "4WtumJJCCUDaa9MR3UXsW8gZXAKYJgS7drYSoHYv7DZLGscsB3WEBGm1Mb8iaQjPGLXn8fGHFVVadthcbmpafEN",
  "key17": "26kqjQ85dtD8pBfpQjvC4kV8PhcYk92W2aXU9kaGXf9uFFgqRq2zmHbX2vRsGrAzPagex4GrejSZGGBQz3AtMfoi",
  "key18": "2FNfqseShfc3T6tvP5Hw5hNFUjxe1LoAXGCB3LToZ93xgh82gG9QDMrAiodYP7H6zSrzDf7BZJSaq1Kw7hfyHkM7",
  "key19": "66fPpYeCW9LmmoetDx8SzFvPYtS4qvHzR4yPG5auACUzZrHPZ6kYjj5fUfvqsGSDWyLtT2fkRBcRR3DiHvN6zdpM",
  "key20": "4FF3j8KZoWf4M8EJoLpdF3C6RNdzkL58tB11T8sNzkgpFMWtxPcn2eznsD4bBypowqLXRxBYCciQa8EaXgim3dGH",
  "key21": "2KHa4JkYem4bB6BuqGMYJPhVN6oKo7zexUL6nXJiR3U5YbSpVuF4F3Unsx2uBri6Q9TTveQ4QrHcdByMZNPZ6oQg",
  "key22": "4zP8R8wKuzLynV6vZd6Wekzp6wknqLPp2pszdkGRBmR3g588dpBCCBTWCPqe27vdyjsW1LKuk1BW6dyQJLj1VS2p",
  "key23": "5NqA4AFBaEqS11MnmQLoryNH3igdbXFSHnPMqadHSEX7JPSok6ebCQpzMz2ofqJkxxf1b4uqcut1Rr1m1miNydzA",
  "key24": "3xwUncYMZFakKPdgvghq8hyF1oq4Rg9fTxVtMVahvLJ63pUbCdRdcQY7yGedBWuJupUbwLGKneWBtyw6ry7g74s8",
  "key25": "bsBJw4HUDdP1DwrqWDAjMVUqKkxepE59yc8FVsL9t7PgEGo8hUwPXaitjLHB9YSLkMiBoCE5Y7YxixmkcwoW3H1",
  "key26": "3TivZXwCSMEZoLiB2jm9fnNck1Ho3nejrX69Q9jwdEyiDXCChSU1EcgGTFEAUP3TC9iLWhb5WGYhuvfQaVSErKco",
  "key27": "cZKhqcPfoVemb3twvgrJdf1uXpDZYT5cFhzX3EPbcerAA9AhjrheEqBsAethAuFA1412MSzYvbro8nSch7uxHhD",
  "key28": "5TvFc8vGSUUm2gu2FeJPKkjMZwJou8b6yYML2rz6v4gutwZw2dQ223zMwSqD92z1Vn7npvBhVGFSDQqRigou4Lno",
  "key29": "4SLJ7FN3mZ6YQ7gM6ZoLxT9QktRfe1trdkKUDYutKeA38zQCXv9GPcFpUG286ZFxsuBAf4UYGZGucnFQuR1ntbme",
  "key30": "3h9KZhXXx5ZeLcbyHp1d32Aei4vp1Ujai3u1KQSXhKxu4fwsQMBZzU4ThFyFT2D7hoojaBccFWVv3sMbUvGVExWc",
  "key31": "3DG7YkEAQvesA5Ck9Yq4MERHSSCjXYaFxCwQ2bjurr1fcpF4SbpVeXHDpwtre928ipVtDkFc5oXGrv2Cdv5k8GZC",
  "key32": "5s2w897CwVpxnfortu6tDZFNebohhcf4zRa6EJxU9xfAx9msGKyi1sZKHU47td4dVZKAHraDUiSk3dvGoeni55NL",
  "key33": "57uSrS1Lj1CoR4PitYGGRKntQQeHdJPJp9w1EjadvwZyi6qj8AMm7GUybT9u9fJP8zzRKT5u1hLYrAjJgfVD1kWe",
  "key34": "upnrX8oVNdne2SHi1o3GWVRyYFs6kfZcgPSTxmmX3JFEkVbKEuMu1AemPTv4JLYRvL3ELsRkXoAndTewgJiFEyA",
  "key35": "4PShzC3sKm8eQhHjbCYiJPtT7crk9NVzy2DVqt9uhUTSGWNPfyXWV4oYmf72xzzTB2W5288T1VzcNCw8nZ4SDs8K",
  "key36": "3qnvEmuoxsDY7smhYqqDGKwLoPVhY4tkmrUR1VJVMquyMtbEKgJzBxmX1TZ6T3FsfVGpfrhgkfKkm8MWEUpVhXJe",
  "key37": "4Guut52rcrBCa1otvGY69JCzVzMogt9VvKh2JkKnckSqFJ4wV4xranrihA61ErxMwio7aL5EzViCqZLDFmgW9Qdb",
  "key38": "N6FAm5NaALJD1Nq4wHgLCDeKi9qYQHjoTUN5HmM3Bb8gJPutus5KKWFv7Ztw9SrcUs7hxnHSr8sXNdV3mXSNViX",
  "key39": "RwfLyNm46hwJ6qPHCtw6qQ3JfUkgJiZNJBeLznSKF3jjeg3oY7T1J1xuXTioNY4Wi6xcMnfCiNE1fA1c9bgYax8",
  "key40": "2Z6xcA9GP519Dt8J2ipAxLGRc54UU1GaysvJid2sajZGsW9M3fLPRuWSZnz2xPSAencEPE2LgdKtwnD68Q1nihkX",
  "key41": "5NV9TRosxPX94hvxsiE2ZCQFTjkjp34x2ur5s4EMf3iLKdQ3m2SRiT3LKAkjhwgKqrxVdfEtKvgfoSnrFKMRswtS"
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
