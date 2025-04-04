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
    "64f5ZKcDp3FhhefNQh9mPXh8YjwQgpZaD4a17oHUB56EMyKt3FZmvVad3XorZo4QuJxALLidrK7hSRapZrb1zxXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vW95gnhCkgeAFSkC48HJ8uqK2g54B1Nsj574MuR4xf8QrmES25MDADeBTWRYAqqMqmo9rHGbhC4qVnTiozEZ9K",
  "key1": "5iemet9K4dHXGwEqaUUy73pAe7KhbH8kiiGDiVjdUuKnRZ5c6Qr44XuZFmStCoZLnEGfyw9tjSgyUdkKgkrWogRU",
  "key2": "5RxM8JhnPPDg1sDnkHhHJq6CesvpKrZQNkd9DeESN2ZS6TEcLXowhPPkWFP7kB3XpKMvSu63e37YMgU6PEjqowSb",
  "key3": "5opvKmcSY89XjYgWg4LJsN4BDWXf73L7zcsKZx31WcBfTW3xS1e5u24HaYZh5PunFYfYagJpXJczAWDAqCPeUPye",
  "key4": "46Nxgr9ay9agMiGsKTXWMCsiRFfPv732DsiirAoR4mULsNF5xKwSUEaYTdGB9zXgXvPL1XoB2WpmMqkKA8UKSnK5",
  "key5": "DE9Qoof5BFy7Fp5hUDZCPygE9PuHv8xZQpB5GL4EZJHyiSVBLjfhAjBbpmi9hvAVgnXRR8iaVdHN7qeGJZzBi3Z",
  "key6": "4MnC6rj9Ja7m93f6HavJuvMvmw2jyuwh653YAegZ7RjEMgijFf6sYNNFvd811kniEBKGZD8t16knrVDrF2Cfi5oQ",
  "key7": "5rcsok7NmWjy67su4KDLs8r2XM1GC7DEtm4EqdoML3ggABBj2CovHQKVNBjKwUj3AmRx75tz7S8NiFR8CXwKZ6ym",
  "key8": "3oNjvXf6rvZyM1unKwAc7wWBH8eEqJJNPKGJu85rik6irRppQQNMJmNiLqsyrv9Ey1qUKy9NUcKGBQ41BFqn6YAB",
  "key9": "RPUuZpo5WmWZvsTuvtS65GadaGJeSAkxPxpCAQXJMEcbRrdEphzqWrEfPkvi9j3Ae2JHQ2uiGKPULwQd8TdyhkQ",
  "key10": "KicWMYJhSmC8XbWeMxwkRig8L6vss5jAhT5hStb2SEetbqHKynWSS4QhWoZrtzJBEQC5oPx8gwKmLAiexSygpes",
  "key11": "bczUF1U2w87XApTF3qH6K2YivziFxnj3egXshuzKqgEsdSoJfV1oMBGo1SHFYHxnaQ46PqrHX9W5jgf8JyRBVtc",
  "key12": "2cmdupbtSraeWbHrKHfWDQSQwsY74XhZ1fRNAe9MGJ6Rur9G6fW7k775dWiKFzqoT9GUjj6evtb6iwy377SsAWqM",
  "key13": "5uTSUXLPumRY2jaDwnfQHmjY4eGSSkvNiSdNVEgu3HTEKq367mkg9LhyPKEyJYcovCHQTyiS3TQUXSXPuqdo41JW",
  "key14": "4pFCouiauqysNUkFbFtEepjoxSs5gWThruxcKsxq5F5d2F3CaR7NkBFm9kVR5yKx2hr11RazZb4pr8q5TA46UwKX",
  "key15": "4JYiSF7btEL7XAVGF1MyTAVVB6ch79XbjcPvFmtwMuJvxYaBmAbND56JgNveGUmDCXSij1u411UkNGQLHPRnzy1U",
  "key16": "2f8eApWdesRbjRm6kKayBvUDQb4RMZSDCxfyxut6q37Dve4WtK7fLUcRQiDR1aqHxPWaBAHhdYR9JUtqyn4hpgkz",
  "key17": "2WTgWjRwV1i9tDrWyTu3Qxi1iXjd2Vu5CBNaiwsMzFDPycvBfG9zRXNvAe6hfWCrG3cz1c1SFXpT152vPQcJKM6",
  "key18": "Kou3qtMLh7MYBYFwX6wpxyFKMHpKEvPDJgSTLvuiKx5HfgSeZH6ccStRFfVi891fnvTKyoSJJ3yZu3hTD6mssvC",
  "key19": "2PTTGMopVZNUgKuDpXFmck3MoRj3N5UuUE1ZneDgAnVGx6CQ5Xw8KpsDWMwdzmRCtGFCUpef8ujNgpSpos5HBLxB",
  "key20": "2MU9eHj8esfhQevVZcT1H95g9kF1hiFPfb38uWb1dbMAyipD4uFCUPkCW9CqBVrmX9DyHMZj4dviXUj3y3WPwbNo",
  "key21": "pz2L3x4MavrcQvoGmLofyuAVNJyQtsBoF3q1dTuzfvYxjUGNoL4nWAtJR2Ajz6JHCG2tL69CnVFKgyPidyohJYU",
  "key22": "K9FpueE3AnPiM6kByHS96YczEZ7hq2EnT91TGEECGTU1FiZM7s6iSdfaLQjx4ik72tETwCgD5haJNsTGQiT6sAX",
  "key23": "4Bxno5q3yEJu8NBjRSKsEJEmDDoaVEYwYCPqYtqMFkEQ1mgaYVv1f2ShzPDG3BLPcGBEsFDhJxhH6gSGxAwSRAFg",
  "key24": "3hL5XkxBydrVGge1L96C39qBsqNVTbfqzTZdQvtCZEr2Y6pjKZrTRRGxa5kXqdKwKEYwkEHKmZUpkuEq5oe9ZMm9",
  "key25": "3Bb9Jouh9nMd1zVMoHNLRD3iSUhzuYDkrxCGoRedk1yCbCgMC2mDpuyv7fQs6wt2RfmyHUQ1RHPbHZGFXJnFYBCV",
  "key26": "2RST6RLuYSKruuWizWR93fzx6B719VE2Gi7hLrxA2MjLjnx2Z2GKHn8aMg1h8GG89n9drNyDdFJ3NMJwTvFBg3Tr",
  "key27": "1rcFumYdJ7hXPSyZrK9mv627WUGEvzpxEY1mjLY6QZGdbGfNYE14gXmzdEDNh2HuGmeKASi1Lvp3BUVcxF2HULy",
  "key28": "55XW8rTmxUMpwfHyNdVuArbZcfBoa65GwkCFujaT9qgpEjhZ3R1yNyxdp8fQjVwwS2qxyLuzdcj7Kj6HkbASZ9A",
  "key29": "8rQDar7f3xbUVw41M7FU1Tdjxgp3Rdcm8rx2tiPChvvNuMTEWxQ1RpxCkdzo6UUR97DQaSciV1LYtHR7u74XJH7",
  "key30": "5SHp5VEzv352dmHE1odeMatPcjixpAVL8jVchQLshbCWVwDpzcbcRLqAhz8gYGucMGpNcVHMjUAFaMC7q9PMfT8p",
  "key31": "5QxLo6ZfayUEogBnZ63Hcr24LrM4DuqogCzDXVsRQmHQu9LDDGGMs1h3uVLnh96SgbzcespMxDPLmJDLsLqCBHSi",
  "key32": "2pf1QezArtoxfMjNftmXykun6WnPyjqkVgYcAyKtzcWVW4qJpaR5mqMycYNLDHMyyXWvQUjc7jDNqSeJaSbJBHxu",
  "key33": "5nPSYCWoYHVMcQwLsTHPPYLmVCxNSns4QHgroiV5xNNvn1t1TypTCe7zktT3YEKtFzahscrf7nKDg597pNAjecWp",
  "key34": "ThWN9RwvGQbHCGANqXHpdVS4Hg2mW211RTtPAzuJx1wRhWNpkzbm7dkbuRov5xEu2QePZZ5uLUNGKNFHuyyjrM9",
  "key35": "2zv5PP8T7hHFcXNLb9V7K51shUkrHu4abAWz37Byo318igX7sTaNLLcga3UkfXQyhcVNv5bVyZVeV6dbhDvTbuTW",
  "key36": "5Ez3sTbriCkDBTxhm9jF3CRbJNp8Y32hsWhqJcUa6WEKWbEf8DS5HU56oE32XG7932GShvFdCjeksNkvj3jLJ12b",
  "key37": "4m6YERR2m5KrtWczqSJDjbE3sg6qxvXWcQJB4iZ28BQdzd5gdw9LPg3K4MmSkMrg2zST2qoDBCeMhBHboxVEBtBe",
  "key38": "3Z9dzdK4os6g6UHQCkL641VHhvbZMaa4xfP3Ffhin22CfXSSr2Hu38fAx2QgkwDnAfkkG5tmytW9J6NCgwzF5JkU",
  "key39": "3jMjRiJcyALjU8eP3rsB38uiT9TNTWYW1KfGaTGWbfYcLZGwogcb35ppcmSE48C1rfKPktZWH7h7egBim19cfDG9",
  "key40": "3KNtkQ7cXn1735RXakbLvzJkXFjkd7Z2v1SFkbdh24bdEhapqa1f1vuUh3ZAD52hCnFdKMyFEE8Gy26APmMsdP8u",
  "key41": "46J8gbXxXf1NCgLLzxLG7fcGapTeWBvuQ2QuQjKQFMhqDr7gb3G21tpvBwZVLFdpfWF48jKdawiwsKrx7jvU7cCd",
  "key42": "3bS57JgPC3kprPVSZzXFsHkghNrjFBAaQKnvQqc1BGmo1D7awMGQkzQ1mhzo6Mf7hYN4W44izE1SRseYLNq3EvWE",
  "key43": "4ewe5xzJRiut2BQ4tnypvtaCUEGFKGHgzi6o35mfs9QPWhodb8aZFLhwyFAvJbHAJhXP52gZNynkB1w1Jm8E3J8J"
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
