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
    "2bnnYRP5NYLqshsrhaGARtyuJHnufBdp97iEa4xgPu9bFAzUa5Jmefc1BgeStSfruTJ5LKMHivcAFt6KQB71uj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4au3JNBhk7N2njnVs2vvSJ6v9CwhFd8zsYEVhDgbcVKNcXUDPpgZcC6Eh4VoL8oDJauvKn1T4bpeuJRqV3UG9VbF",
  "key1": "4hLv2Xh9gzkuyi4q9aT1uoEC2TutCSgXcR49ye4ZcHwetPBVsKvjAZmFywXa6TzJgmBbCPyg9kdkRuvRmWSHts1o",
  "key2": "26mdrRC2CW61aZs4UCZ82MfJZ6iTRYDUPPcTDpVksznQLLUu492dAb6RxKvJDitTPfEmDqQZiLF6ZahSERi8Je6y",
  "key3": "61h6i9SkiLNyMneU23P9KzNwY1rck6BkTvvu1xRpkoHkzdngeNorGQV4UN34JemQwaZ4266NAFcccFPy4YwGHqhN",
  "key4": "38aMJvsWyjEwxGHHXRqkqgyn79VC9kemtnAbsoYP2BWJ8QioL8j3UhPmu3qTP4hqnaZ84Rk7nqkoZW8ZpQFkcmCr",
  "key5": "5c9wGw1iQLGrM2BKVFcqgY7XtBkay6KFVdrSg7zJhHZ8vxpLLJHXynjcDJMGsEEzm4HaC11oV3gJprNtFXw3vqZJ",
  "key6": "3MhM1e5o6LWAEoegFifF43kQFTi97nJEq3MiQnr2aNPge8jDo3Gi5G92Xwn91vXdtAkEMfE7sW5z7MEexZi965TB",
  "key7": "5hzAWSfX91vpwWgjRAFn5jtmuw1axD6YaH7UWefLkstNZNa4UgwUeBpCT7DvotApMMLB7DYKs3EyqLsJ3ciH6LHM",
  "key8": "4Q1StZZLV8Wxf93dqH38mi4GCCdYBq3qrQfvz7jgnRyHf5DhZSGhoUFd6qPcAwExZ9xjaGaJPeSjS9Rdvgb2YL1T",
  "key9": "4gv6U1WWCeJd4TKjAWHSusKg2D3NYYCfmsfAaeuHnrkbNyzZuTDuWjGRXBJ6iwSGSsa9mfhFXDSLgBrLrDbvr94K",
  "key10": "36apMS4xzD2LLQHbemfYcPVWreRaQ9ytHFP8DDQmKYanHFLjdm3Jkd6kBQz4LnBKmJzNykQBgVmYkRYZ3GAKGa2t",
  "key11": "2w2wMEszAYbvo1orH454iJmFnveHNwpq4H9HVFdjFfHqjYnai32E1WDt2bMsPC6X3dLxsTR56CUgbbZtNUPAYSk4",
  "key12": "65jtPmS95xxs59m8k7qZknWgJZFfpcLetyNC5B64VMzGEsEzQe1pjt9n5s1KBzSJ4rWeAaRuDKyAqcQHEYMAAMZ4",
  "key13": "2szjzW9yMhJsAUksbnxHmu4gpXDSpCu6T8Hh9niJChYrpYhFmiwK8jBJGehHgL37dXiCYJw1RD2ojAXHBdhmLyEA",
  "key14": "3YTcJPhBgyfmtY2bykmZY18d7aTz7LFfpF8xmXV6oSJWXypLFhnuPJZkxr9RPxUEtAzP1ABLNayb2zGgZj8dP1Ve",
  "key15": "5Vcboq3BRXiYaAckixWBRcNoSv8PHMZABk8YLQd9GUUEeKx9i6F1kaQnBEfgfAE39HAvvQn3vRT3psTa1RKce6Ss",
  "key16": "3kepdScnjk7F77LpcjhoKfYXbKHQS8bRaGfpMuVMPLiPBmvoMgiFuHMpJRXyMQbmN3dTrdsQdChU5nyFAUYUB8Sd",
  "key17": "41PStT6JdFQMK6nRqaeNfLbLcQg2hVWd8jyMB5bDWTtfqc5XTE6wfmVcSPZ7s9P1gzEoCMZk46S6geFNhJb5aroU",
  "key18": "2EfcQnyxwwx579hNLNZbMGRhqYjXrc5cxbLc9cpABjfPPaSxaTfPyfvXfyLPVBX2tHjUSQi3tEix1MCT6EsnWqbQ",
  "key19": "39c8XZjNjZvx7sNPVrkJi4NpfYiak58hQXLAd5aHKK6HkJwgCUEdBxPSBTSioqcLK7bDp28cy49K8fa3V9Xaiwqp",
  "key20": "2wKQNLkjxct1e93vQGqBhSycuDTKqPUyHdn1wT7NHGa4UbWkqz132mU66GQgxQoX5VaQjCtxmmXXaUR71UF23n9z",
  "key21": "38JQDkPvRpLTR3yVP3fFBeffcy7YkxiU34BxroW7RfEnHFDSEVitFehzDcCQFJDCSUaR8BHqSTfefErV1UGvtaK9",
  "key22": "4mvdDiPxEU1d7s4v8GKR87aENQYNFeZ8iPbmVBEifGErxMVdA6kutBm8eCECBbum2pj6En58wmFjhs2QQwtrWvnA",
  "key23": "5dopDHxJKUxkU5hkmX74x4NpF4mBR8TDzzppD1DsdVQvqC5ZaYmg2Xv5BepN6CCue8tMVK2Fu7uk5s1nx58CszN5",
  "key24": "2XrV4wSjr64sriD1KS1pBmSgTnVoYuhDxXSVGmUMusJdZZq1zQD5YTKL2eFhi4L5c1BHMtyUE2wR6rZeVBXtvdAy",
  "key25": "3wzcH9P1Y9VQxUWwKpG3pYx7VVF9Ay8pj41QUAqWpBMjDz6UUeqiPWfEcpzMbr8adX5ogAo6Z89muQudhWhzznjf",
  "key26": "2xhrvXzjGPezS99ma5xxZFqWQBfeghzJqXmr6go1yGVncyoHgs9AXJXqfM6RYTeXdbUrMzoTio1XcrozAFpGkHpr",
  "key27": "4Tn7XqrfcikTWoRruPHRUbbEFa5LV4GPkXLeHNd514WZWuaL4pgxCEeC5CSgdtiBTfMWxtyfzhFs9SEZE3zbGnhb",
  "key28": "4oyadvDsZPhAq5txx9vQmvE6hP4MwZ7GUoSGM57RVKk4otEPcarUmnKPkaHJd9onHvsxoKxBAhXjciFpEMp7dxV1",
  "key29": "61smC7jD9LmJq1rCH2mGmhz6xtYa3LzchPwu3BQrvWueh9mMe1JiruHL3mfBnYsSiwaHVZJzEDA7GARVqZyvVyMY",
  "key30": "5YLR54TBbMxYnpBAG97NZPstxc4v2JpWkg7YS9tsb6uWJ1Xyh98ezTFG8CuRDe2gTtnHovdsaqBtseh1rftyUfyC",
  "key31": "nxnPpsRB9WAzJQderZYebmJLCgtTD1f8A49vLd4Uy4ahrwSp9Sxrp52J6y6PfY6GWJKNHqgMVAxH35uTZztU1bs",
  "key32": "3Tbhetzrg6TawxJATB3rWhqQMZrVNsGZxa5EBHTtJH35oqwdw4iTP3Fj8tGz41Vs7XDWNvvjwnXtkzba8qN3jBbY",
  "key33": "3TZSoda3ghhCJRk3wJYvtWFrMozsxfjNqxGoyfM2n6LReDuqW5B8wgcrnKQMYzygvZ3VkAAQJK3VmtfXmXgz6eME",
  "key34": "26TGwvuVTmzQ7jn2BdoBpHCPBq3YngzDG92dEZxayoPE3RzHkJwVWx7J9JqRTv3MrysHi3AaW5HoAboECWn1YGsD"
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
