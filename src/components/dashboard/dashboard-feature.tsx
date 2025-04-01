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
    "FhX9nRxYJ7kcp2Nq4idWsW5HHp6ALKZH7Q6s8V9DVVLksz1bufuE3cNuXmZdwcJCNVrDrA2UJcZjHGjkNoihM8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYSFh8txLs2LCFjKVoqQfSoq3ozA8y1HxfTMDyjH1yEBNjNYatgEoBAEC3SL1ZNEkvfQrt3HnAAZNFLr27WthAs",
  "key1": "5P5HsjfBLUkuSZP3BJKdAPUZJC8gR4iGxaCCKxuZdV95xbAkhC42uvL17FFodpyauqJypSjpsgbaqRo5SyiffNuD",
  "key2": "28k68Gao4owi4ypdDoiSZRFRaDCkXMFUo12B43PKzwaNuuhXa1Pd3a92q6pyjWwe4RHbca77o8TXtaSq9Yy9QtfD",
  "key3": "5iz4i8jrgmZ8596XXEsHWmkNZ91pTU2495112DLwpuRRTjXf5pQrG4bwyg5E975pJEiuWZhb3cb279pmNVPwYZ6A",
  "key4": "464EhvEbBY1JAcpRT2b6tPuDhB9hJYCkyuzUPcVfULWFBoTw4yGc2PN9PAsUGNu9gitKWcN28ieFsAsTQjBzvvRG",
  "key5": "5mNgmURdRD9GF7dwqKKGSy9b1cQ77q8s9tUZUrF1cLvc9csMCEbRzkSMDkPih1MEkfpjde4BZmt62URnBQQZHmck",
  "key6": "RQGnE5xmxQbpthdzpS47Q1cjErW1ixoJuPxFHnNL5KwVuDLNELB5pWoN5mADLGKo9FUeXtgZvey1fCLvhSUkixe",
  "key7": "5v48DYWbtqQ6L8GJ1gcav4nn5n46U3g6oH1unnGLzeCZBVazntunRrcPqSWNvhZUFPAPVWp8RYp3nzB4u3R4cbnR",
  "key8": "5E9MBd6BVpfjyRcCV4a5HmgLnNcEVidQfnntFwyceWXUfQm6AjsCsePEjZvNuEtN1uaBTFnK4B7vYEdgstArdRrq",
  "key9": "5LaAoKj8ct9swGxCN85zuUNGnGEATwzmtAHi1DB6tc4eWUhtr59YzMQugKjhnK22MAAYwRyq7Eq58pV568cd7EPs",
  "key10": "59f4FHJuHddwjJrvY1sVz8MxEpJPQDUqk6zLhGjy6ciD86y251V5Mk77gQJxNSmxmuP14CXxa2qRYn32XaKGhEpf",
  "key11": "3S3C5uvXXHeq17HRzKo9z1BSTnyUnJwBLR9YgfWaWhMvSPFjeXdoqRL3zKqaTCjEzMSdgB25kPANi8bBvPVqY5KR",
  "key12": "2GgKk8abHcC9bMekLPWWnZ2KznWSyDfVzmeqtafrPZ7MKcP7XSpPeeY8FeWGdqyAviznjtbMmzDqxsciMMbhCxNn",
  "key13": "4g6V6dnMXMwEdgLbyJqdFHQSzBHEmchTp4yg5sQ5XPjACzN4Xh5fZM3q7RNJ1edjPxqL3roiyzQSt7Hx5VxEvuBr",
  "key14": "4tpfNwoDT64ikDaSFCHKRkTa31JAHtLZy69qiR6983kG9Jp6mbxzJ6ezu14aFcKZQNVmqXRoYL3v6weW5QfN7hYs",
  "key15": "4d7eK2FhL8QzJNeGUTNWAK8VNYxYRmYXSA8Jpt7zW4Xntv4L15CaXgyLmYszc97QGdbgvedjAFF3DL3ADEGi1JGb",
  "key16": "3EHUJy2QoYAPf6b4aW5Qo7Y4akiJeweaDcsCoWJZ1fRhLAH39Sdv3KeA2NZqCrKbaTd6VoJ1cVcSLiAhNokkemiF",
  "key17": "4vYEvreww6kbGHHW4a8NEJWCiBLNmSDqDxpnR4paBanDNzUoVrE5pURWQLtAYsMrwU4mmKGy2qgGbpm4zoj57DvQ",
  "key18": "33xmZopFBeUv4RPVGVP1simbHDSmSptYMa6RebnLJdr46PddYD6sYjTJg8RmJDMMNxa2ERXcieauLfy5MqDihWg1",
  "key19": "5xkcGezSbb16Lk9Ubfi7KYaL73c1HgMiVdZQE7nyE1nsdvax17GE63kVzAd7LkmY6ZQGxUNgWc2LXJvNxRTeye3x",
  "key20": "3NLgUuTXJnsbuE3WtvmYMxNJcVnM5tKGibuLUd3LDqbFecVqfQ7Cxux8SuVP2HB44kgymHYVHqjXFq7Vwh8gBEnx",
  "key21": "5EPtCkvE9vwXrFkWJFUx8b59nuMupCVK9jZujGJYyVV7yJ9FmQ8oUPT8rDbmVi2UBfrztDLKKVVdd6JbUaT1FRqf",
  "key22": "3bmU3HTCJK7r4fxWpWoanCXRvDQEep2LpHCgVDPG14mURzKnHHDhbvKobveqHEo3YEnaaQ8f4rdZCDZPYBbRV1qx",
  "key23": "aPbuqqknpkpmMRY7mvKEPzmWMv7DCVvsHG3g5PvFB8WXAjRhQyse3RWT9JGjw324bFEHrCYHV2jHP5Po2L76kE3",
  "key24": "4Fnxc2g5RVBbfro3i7C8hmBtuPJeijwQ4zfrB5gjrKeBJqinEnS1bdP9eKRiQ7ABgh3s3NGF7yqsduQ8oEbiDHbf",
  "key25": "4iVuUsay1iBBet78ngF4BReRXKsQLeRAZGN2EB6RpWj8kJxvXyrwSFYnBfQuqJpt4FBVJmjq5vJnkwSamv7kcKWt",
  "key26": "3qjT4bUHLfX2B6atUDdoYermMy2vey2ouLH3kSsVb71dwC4Yx6cM2UmGaHTbKTBD8JWf3Czb8RYSSaiV8P12fcgY",
  "key27": "8RVS143wVLE61wZCzN1bx7eEStknYxcoSF54Qmfh8tW2Dn55wufvtW76rTygQobkLkk9Urvxgat3gsjT5QUxxfy",
  "key28": "3CYLe41X2jt5CiqAtZY6tmNKM7hfX7oWfHNJLt3TWFfSUVZpqZGsB7zR3ZnRzR1ePVRDGkXNqHxTSWCtgr8otRrz",
  "key29": "439GeFTjq7FVF3KM9qc4XJUYz9W8SHTNLQoREymKZ16tUPbJocbyCF4ARN1JvntJGqSc9a287vyvwsUUekF3hGjt",
  "key30": "32S1Cf4dQJ2gJKMsPobTrr1SFVgkqjrn7KuGAJFzR28kgMV5WU6dJ2bSLPszvh6GKRr7JRq4GPULEKUmpCTcqQKh",
  "key31": "doR1s1dFtiQPreLfTktZG5RACPgfb2XsqBfZDjWaDn34HUk8z3DnF9PwqC3nZuiNSnxmvNggNBCCfgiURyc1SxQ",
  "key32": "24tVFEMK3YG5vdKYjx6WDakiKGrhFz5dvAgyKZ2BoYAcSKNuZ8cR4bNWqCBK9q1rNvpBe9tUeDaWqoFJoayh5JzU",
  "key33": "4dJrLVYZA7HL1EU8PJhR9wz148nBrmc2v926Q79ZwYN6qjYWu3aUNFCYjQZqtaHoPUm3xpDUWfcrodYN28VubwsR",
  "key34": "4j4u1BiWZMsFvi9fLVg5Tm9ZSrZ7PHi3utVfr1haPeu7L7xY35bsu5UcwFU5oi6VCjv4hrtZBiPfxpeXBtUNz2y8",
  "key35": "5ZB2MwbspeakUBx7yaLL4yHaBvtAiEqtzBnSDxkYEmtgCioQ6TrWki8n22FFrVntyMQnQ9YqNTm6MXNcYYeGGfGy",
  "key36": "31UCZG6tgv358U4gs34YQGSdHdu8sjK4oLqtUg3vnrp3SHAfMHLkmuqBzRCEePs8w7KdXn45gAYacYZDWA1qeVgS",
  "key37": "5u5RFpKbtzT2Hs7Z2thj9e42Z4gDjDRfZfHjot9rtJw5gTfyj8XwvCpwNDmvqbGKSGStpLppMUQDWP2sx3GFVSHs",
  "key38": "3wQKzus1ToX7dsXKLsQ2amY3x1YuXRCWN7HuTvocoxtAUwJEFNxQbe8Ma4pVzYihyk58G6o4JgG6rNEEeoTMfUSG",
  "key39": "3oXbepKPUd9ktYREvxP7qhvsjWCGN5Q3BXEDrmHzm2N69duHTZ6qcUK21qF5XE89T4Trv32QbdCA2Gy9sRBy3FAZ",
  "key40": "2dCXQvjeGbBVWG8m5xABwpXHdy5RqMykSYs4MdX39JYPxx4Qgsc7HhEmUkYuAXpHAeiXAUo3gSoSwyFq5aWhW5hW",
  "key41": "4DuoDVeVnwzTBPYgzLQxvVrJu7q7TpACDtfJScmbTGhDuD5zedddup9VUy7aqW26E5PzPyi3staRCmf6nsapSB63",
  "key42": "3tfLkFgD34zjKWmcgfuhPxAyWpbYGNSyGxmDrfgmYuDHyyR5SmuStasZ939Lk4gWvYBx1M6dGFyEXZ6mjSUX1ovg",
  "key43": "2AvnttmYDgaS3ZeMMABtowHUHUxDrG76xYyaspgsxzAuxHVBJkpZMbJC1oQaQA9i7eR1cNQdweDNKdxbs74pssx4",
  "key44": "VcUFiVrjB5cGC2XFnUukDodchzSWKeYjFnoqdCjgkGwfiF9PgzwYU2PnV1R7Xc3u6HAMT88AMCnwgkmxRsArgVP",
  "key45": "388NgPzHqGZfsUuyM2Jj8S3ZhAx1e8s1tLS65D4sLRZEBrzJkA63qFMAaSQYtAym1ACbhpQ9k8v3KJBe9m14gaeR",
  "key46": "3yXqdeDUfidvFT38pEhWFtZRBqeX8ow6JRivya5LfJHb7XL9qX23pcLzTxP57sZh2axVEexAJnJpfCcNFeafM1hJ",
  "key47": "3vfDjU977bYKiSDPAmhdjFBLvYpqwwRjEyVDF96eTA3AsccqfgLmHzCYeMCcAE3jMRA95osTeFA5cDV9WATRRT4j",
  "key48": "54qWCevSRpzvqBvwVLCuzjF6ADD2PXru8RWDD7C1pDAVJJovAYJUJetii24umbnv5Xy521eCLC2QvzjHx1kHBr4B"
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
