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
    "37QQTzcqj5VVLvN3i9MTteBjiHDjmg5Yo6LJ1W1eV6x6GsRdVPXrJujKaYetvaM9S8zzaFg5ki94vsgGfQCeh5uW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rp3XAoRA3E58Hj9FE2tPxvJVFz7QkUsj8kpjmtRcLejyA7QuBqCTA65PYA91TisfZSVg82onMc9Q9o9v1KGZfUx",
  "key1": "4hdgutGW6JMvtJtuDiDseM6W3jnvDSBSLdNrwxzFe6SKRPxsBEyQ968oA4a56NuZbu3A8D1zUhVG92w3dWYyxjje",
  "key2": "4HY3J3ufn4yqhAnDjTVGVfzLMpQhbweoL4zAEJ48R1zrmMVMtbW8Yhmb2QnUoXvcjxwzdBJ1s81kT9XkY1jGhPdf",
  "key3": "4GsY3nLSerGuGkBz72CXexd8ztGSVqhgfEPVsoWda9s7qFpqJEKvhCpf6tEQ7xhBd1bsqo9nJf6KGC1yTE1YGbAy",
  "key4": "5uaERs1gk9wNLKNhxfXdiEmZ62dd3sb7aRmsKZE9Eh6hBrqbnmgYKPfvUbhjGnzFi8bARLkXxdFLSMkNjEkGJPvC",
  "key5": "5GtDfGBBdvNYev5HPhnuy83KfYBpcQw9zEHVmGNYfTwQgTChfm3Z9qERap2gyuSmdNJugxnXqpyb9U4dDCWUZBbT",
  "key6": "2kzoR47hQK6q6PxApcEHD83q1fP5nhks2JVekVsEAi6m3aTAotecCwuSFx2HcUuD57amaJTe8u7ahtvWbwzztDQQ",
  "key7": "5MrMsnfEY3wTcMUV4sFEpRkL5nWnYhoYURSVmcJyfgq8xi4Tq4TsPeXpZimpR9LDaA5NrWTMwYgd7qfnpbMkE4zx",
  "key8": "JjUVvpuSBNchv7R63D4zzmPbBDr9fhd1epTTkLTSZsa1awCinNm4CGf2adSVJ32BA4foVBBGmyeLmpycErStswa",
  "key9": "3cfUqyxeQ6fA8Y1jFh8Rjboyat3qf22mewmFZCG7dwambtuTerNqBkH4WPSXfTrU1Qx7v24A6Q2BGv3mqcmcSheg",
  "key10": "5iBCb68FnK643FDdsynWCLp1T72DyLAbYJojNUER7puW8ByvdF3icU9cnCDR5c4jKoPxyjtJ9KLTdL8pidnE2wU6",
  "key11": "5NZqZht1kZV3KPYjkemNKv2o9eWoibXNNPyKVKCZTVvLJcu5NSjaP5Egnx6Hj5jRdSzZ8UYqagFZ77eJd4iwtJE",
  "key12": "3fd1KtxAP7bqCyUf8c4Sq9wKAmWER1zS6qqfMpk4NsUzxP8dGt8aKZAJ2GoN1dYGyQrVewjArZbGaEjnQujHyHYz",
  "key13": "uAksmx8vqBsjB8xcmGmnKRENKh1VNzusbBQizKaAcZz9Wxy2oWY2b5RB9dgF5MuaD6DEwXMYRKuvb1TpVCtDTbA",
  "key14": "2WQ6aAVNDeNzTKHuuu2QzofKr9sY6NH9poLdfDJ9DTN63MPjat4psCR53PmSzBz78NFkzsDztbP7JYHfMYTSXuNb",
  "key15": "3gYbmQqHH52gcoX8mw9XNzS2VhFeqFBGzokUC8iqqB829Xytqe8PijxQZqici3DWdXBA1pfSdjVFBdJeYT4UFVDi",
  "key16": "4FEB3wwp6tnBqUL2RsUwi4wYV8zawkRjG7YNQgkSjoDnKPDdQ6y5Md82jjBB2CQbcT8G5mQFKujCET6Q7PHsAjZj",
  "key17": "eBPovxYbg24Nb7BFV4E4TG59PPVeuhbbrxu9FvmMZQ6XVroTEaEJWsWHFgPay2bk8XatZZUTNrjicUiNb4FMj5S",
  "key18": "4t6qEc2NpBUzqJEpJi8Uo5mXgYsbqjQbDhUJtXUGMpFh3E7u5ZemoTdxvpbog5twC1hQhmwqNS3jjye3AgZhCxZn",
  "key19": "2aPiB4MkvjrvYK5n5AwbCLTTzmhawR1egWShcbzPqrB9SJ9XnAWr5uxG8RjvBCpfa9XTdnQ2xfbeC4w1QGmCPtod",
  "key20": "21WTnyC8FuRD7vbBREQzb2wxcZYEDA8Mu7xAQojkQKAVfyC5q95KnTtpMPEfifs14hBu2KTg61f3f4ntbWS9awqS",
  "key21": "5VciEWCBa5QkdAp1sviRujWdwUqmk77Pjd3y91ynM619J4VfKVCmebqDFDXDiKLbSPrHQCgVdNSA5YeSM5GBjjeU",
  "key22": "2vbcCSE9umFnyiGhW4HbDyTdMRtAJ4KLs6qRdnKebPsMhb6NC4QCCmqFYBHc1SiGTEVaHkGywQsW4FDDsG9wkGxP",
  "key23": "5ZeBjmSYDozp5kHdP1D599KiWS8yf6B73J74dr4J4gPTJYiggDABhcKDzjNeVRQz5SZCQcPWpvCgErVh2XVv2eKG",
  "key24": "2PG3SkRSaRVcW9pD3WDwbmXvq8w9ap5LST4ZMEU8ymcmx2NQbaAMdayGgePY1mfognaH7YBrD2xZdJopQRJcdq5h",
  "key25": "3KYJPBsyECntPFobsP7NLjTWNoP8cCZhA5hyXDNyXze5eYijcit7Ht67LMhYr8HzxfxDT3coCJJ122mfVJWTwxuh",
  "key26": "3RSyz9Hu9n7Q9vz8AoTgmwzKWk7BidSQsaTmn5iqSXAF3Z8SuLpBombkPPFJidiuWpZ8kaecddWUr2asUhawruvk",
  "key27": "3gL8dxEPZiDLZJGG1ZU74E1cKhsZ8gLyHPH3yDa8ZztGovWteAX6uqdVoCLTz13XaKU7Za6pvdmPBSuKMCVyduTq",
  "key28": "4jmb1qCtMxpQainkXP5rE3Uv9FtJBN9VwzkBZFmWFw3gzZAVHpLrsfmVf1qq9cmkBGH4Msf5JMpQCPBeVZffXjF1",
  "key29": "5AezPRA5mBgNG2CBuusvkuFYi2UJSZH5nkrdjEmEYWWF8vJX38GknWiGGjNeS2Are5ahxzS1hjfk1BAF7ySrAf1d",
  "key30": "2h8x2G94qE4RnvtnuTMDsn2EepY34HesJfxmcktxMUMN8X1ypiCprTxX1eJs2ypZ3BPsqwoR8zMBnpuq1Lrwpe4G",
  "key31": "4ZMR8qrTDvTHvxkMrcN7cF86GTPrDCQ2UFxcBHiCRCtDhrAzazcAZGw2N18ccSJwqXfd8Ehqi5nFjV7xNUq6o5EH",
  "key32": "dqUM3MWH2EQjkv51gWRMu5dkxAYsu5tMNQvoDjo3UtcwkLgmmSYABhp5Bf6S8TeZmuSYLdwQGaNR7QQ4s2Vq96W",
  "key33": "4xFxGw4q9yr7fkSzdFw7CSeumTcwVRp8kuPG6X3dkP7Ry3dBfgxsoRMLrLZJv5g83CpS9PHJVUZWyULoaGQovQVK",
  "key34": "yjEWw9anQgKWWeNH9YP2pRZMfYLzP9zYa9KD4Yg4sB4XBdwMtMqLzSoPNSYmms3zfGHGfzgSeyRJPk4PhpRVbkK",
  "key35": "4mpF2ydPzLmsKSaQUsMKjAPwG4SWHMM13MrgMKdWaQ99U31ja7pGvfnLMg596qkXmW9phEagg9GCcY9rqbLGaCLy",
  "key36": "2oHeLsurH8yT4SgXVaf7RERFGi5NLsSzfxkfcPtvrMqeNoYQFoWowAuAXsrcseVviDkm8yYwTm22mjojzLdTG9kU"
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
