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
    "Fdbv8uFU6rXazTqPX7MKyE1LySn8AqBTZdVzGe63tPCuQU3fWoxS3VSyk9HjHVaqqymtcGY416GGXxadeANDwwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mt9gAxzJvhLPXQY4hckDiHeLe4UeY8WNW4jtcFf5ABDYhBCTHt3ak4NQwhkztmVoMgw3U6X4vxUXsdXpngVt87v",
  "key1": "4BxEezdiWdQYFxqjnVLo1hGtvXWszMAv4hYxLJA7YbNnJJHmfy2NHdP8aB9s33Y5HH6CmYmyT3bUnViibHYXddAY",
  "key2": "2yy8rhBQxqaHZ8dvAEduKyDVepHyoAuWRTxXoE44KZ4s66Va2msj9mNy24hwuSXiy6Si2Jhc7DMtFTvXfDitxAp1",
  "key3": "6AfHxr7oZEtY2CCQ2BGyja1j5vtGqQBp1ddxa9GR8X3ycm9jSBoHgDvqYxvEj94rzjD5H4L2c5gAhEu3dgh5KHG",
  "key4": "HXqc27pCENjWwHb5sU9VmJ4wVrcypDWW1aT9FWigHPRbb1iYfaxECeQZqBMLy3hTDWSVsfEpoBj6d5fKyr6KgEJ",
  "key5": "24jK4YmobqXxTWQyD7HM4shTEMqRMP56H7KsTvvnydvQELVipuRsCybgBHQpSEia9epdnjhGMnEZooM8FNmrFGXJ",
  "key6": "4iTBNJApJi6UcLM6FVCJLDraPPxWEvLDdTTrWU89u1gErvNydExAsaPXDFaAk2nGMLejzWJUeHQUvNEHC7wJA3a9",
  "key7": "4ihvYBdFkveRhUk7AMvwRjpsZbopnBJDZJdYqEp4apHuwNAxUqx6Yim53hzFFARVMZews1uXcRrCe5VwGazDVJvZ",
  "key8": "5TWn1nJsGmo7taEJM7XWS48DegoP62dHCSP2ahVgNVnEtYzVXHaEX7noJ2buqX4Kk6NeKYFydn3TwsZmEaG9LJsd",
  "key9": "4EWJ1qgd2HLLcFKpYUUvC41aYsnw8Gd1QAzVfCZjpmYtmJZ5F8XoC6UymvLCbS5X8HDXVpz7otea8PqAHcHc6Ra7",
  "key10": "XK21rYN7c4gQbJZvunqHdmw7Xmh9YQoHrbDcuEAqjTPRRb3mhML4A9pJDWX9SpANuxqaxWX4yBgdQei9EWAXbzW",
  "key11": "2TEaH3P2EyDTtkgvDoZkdSMdvmE4umQvXSmjr7LY6uBMALrHsr6yRpgwbzJmztgLZxjDkPS4rF78xeXjtXoYDh6B",
  "key12": "5pUW1M5kpVCkybweJPDxN3hTbtVCtKMuRxku4hoq8VpX4ssa24YLjtgoK8ESFPS5wcZkbrzrYGWvcnAVDR1xBhu9",
  "key13": "53dQ6fBkqdT8dT7uVX16pZSHM6NaxHaN8xCUnSvTaQS7faDdRB7RtA4tdPzJtg4GHZU62xZhwE3VXv4MNjyZm3cd",
  "key14": "4z2n6U53zmbj7MoAT8o5U5G9eoCykEFiXKYZEFiHEKNU1REtrwSwthjspQV4pYs3AMTc1hi3XP5zdcM5MuFpHEhR",
  "key15": "2aULJDrM89Rf3ALLSLyceeiFLBt2BMvf5Wr17cWEeWaZtELejsB7gN4EpvEi8T5DM4xJG8yBmcs31rwC74XNYGVR",
  "key16": "giUg5kypjJ4CriKzpcpejC34yza2DFaz2c6wxLNsYvB72SjcwwspF7d2c6ViWMXdUiNpb7trABFRdWfmaLbqYSp",
  "key17": "3BabbzbnifTqeYpvoiZg4JGsqLjAcLoCGswHZE9ronFpfzZF9d7BGw5qnmu1sHcsBkK3ki5yhy1aYHjhmS64P2Q",
  "key18": "3fz53JLT3RwP5LsGvut3rzXxjRos1ZH9Wu1QMPTwewXMb4fTgRsYc8vHRzy9XrrVVEPk7xkL17ENegFvRdeiaB2i",
  "key19": "2Dr1uEbaHLbDBPB5sicKkjb5f5Bd359My8hrX4ZPXNhHnzt1tW4LyGHXUDT1nbpBScrYYBeTBP3jqxTSqPxEzbrQ",
  "key20": "4kZSmSRChqPQgeuMSEL9yBasFqEG1Y3HtRKrecJapiw6kkri18FKZAP2qpUhdkk37KcTwH3QyDqe8W75hNF2bP18",
  "key21": "2e6ziUzx4mw7jeXBdv4gmvxHs2cedxgmoocnyf56j4j2VLK9p2nomEZEnEPx1wh7uL59L2HuqBEdXxwHWcNccSzy",
  "key22": "4XPSLTT3xkGLey1bNEvhDHFSERdpNMgJjqzCTB7tgxG6Yy2KibBKF1433SA9NgPJQBH2EMqmruB7dpQueB2Shf1f",
  "key23": "4WPknZqEJXXzhYSk8yys6G7g5s9So7TqymARW8a9SbEK7QFwewqk2cpmp28o9ZPZ9yv4CXBYtFRV9PvXHz86nu1T",
  "key24": "5PjvbGwpZWYwKBAijdwam8EqMhuAt3pYUanwF683gvMJf2N8PKWhdXeH15EbcXNuu6Hm1kQXi68zW3NRo5Jwhnsd",
  "key25": "2pRPvt2vqKhTvH58zqyA5k2Rhca86DXAC1HzpR4592BCv7y1ujsNdi8wsLFqJFSjAQ6jtsXPJApp6QahwBDXT4uU",
  "key26": "zWfGrgJpoWhLG5xgWg7z4BBRGLQY5AGh3YXp8EsZmSt1x3aw4XQFrhfEcJCjr7L3hVJkeaVfVdGGDHry5x6iF7M",
  "key27": "5todRxtgMgE7g7QHvek27GbFmVjJgTJTo7Tu7yWnr3STetkF1Z4GsHepoKB7p6Pg9ZaWUc99r8QBJUUfHo7WCCJT",
  "key28": "24AuKfCoR1KfUaxUoeS3H1t4Kn6qsAC326ChQpGxXjvHXrdCWXPUfdcokfqkQbZy532rKDQH3ywka3U3a9MPZt85",
  "key29": "5wL4pHMjCAe29psoLZyDLH4iE4kgrdFthWAa81FUohuafMhnHL6YhYG7XGWbsD63Wp5b5Y7m45hDp1MH4227z6ho",
  "key30": "4NCsYNtVKpiaofjqVDTaDey9krq7haPHvDimSsU3YYMyC57XVtja4o2z3v58w15FhthP6UjW56Moeu1CmUHuKxDs",
  "key31": "3FNhhS2vANy1GqMaM4ZALFx3E9HiDDwmF49wCm3qYFE81hrfWMjM55J7yZyYgjmQwhdbMmEYn8w3UmnzrZ3Hsdc1",
  "key32": "VoAz7wsbyBVa3w3v3zWyC3rVbWES8nJFKFv8vAXM2TP68PoqBAq7KBMWkWi2MgCLoLxAAoEp8Qt8RUuanXwxz1b",
  "key33": "4Nq1qmnbL9T4k2wsDXnh8aJ8Mvg3sN1Yiiahnm4poE4aXjncMAmZrWnBd7AgLkFSy5yNq3d3r6MTwMtNqsyA4Lyf",
  "key34": "5Pf4gJin1W7JAmAx4qm3FvVErFT9nphFkkaXBnUwMC7qawCh2u8jgXEJEd4gvCs7Mru5bSqwt3RNQQWDhTpbkc41",
  "key35": "2oyyTe6tydFBwWscqmX7WvMPzNdfVLvPC21BWVsGd7F5XaagirEPzcRH7PSzFfwUUJ65vFAshRr2WpXBCL4o26sV",
  "key36": "2ZzjhE6i5SEDGdXLNiKZpgfe4fc4tKhX6pRewVeV6yiBTTMTMv5bqu3y4HVy4k9rGppC7DYBDQpgQSKcmiLdNh5D",
  "key37": "3JeivSwiTftiyDibxEoPa6MPaYR1ihbkNuMsb1acLNyXiwvaNbUUCiWhP3gVkk31re7K1eVpdwaeAC7CYB7abCBU",
  "key38": "5MJCSvUi49RTc67hbiNYsc6wn8McEcEWFkyFX5F9vNPwWv7FCLvHWj2fdaSqqH9zWjpzwnE163jpvXAKDZxy2CXC",
  "key39": "PA5SYVtL39kXs3Sat4qVktFFvYkangRXARtcwunjFDAUibWGkyNpDzgh1K3L5NuW4jHyXQi9SNxSXJuqkGsYVgh",
  "key40": "2JbxyVoki2eJuW8G5ftfzsNNMP2X3X3AAid817kWqDKxso6nMbT337a2WKXVND88kppt3Q7QBh52VfrcyQMBPZZz",
  "key41": "vxD613GQDqYioLKzW7VSbeA1GoDpTMaooQAAukCv1jZkTusRCZhEP7X2ByWefSs92C3uocAFjxj16VwzvJeP2pd"
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
