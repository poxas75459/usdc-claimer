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
    "3Y1hoRhWtcnM56k7HfpwMYU4yaEK6DMhwCz1VXh1CBDnwkxnUaqcRdDiXT2Cv9dYFbVeiiAU3kCFPFQqGcUkLSB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8QuUiQS113K4cqBAYCEV6oUbHe2rZ8q2t3KHeJZqt5VTu6aK7GuHCHjcJGD8BmrACig6kZ35QY96AjqkGKGJUT",
  "key1": "5nhZZNvhFBqT4rqwSiue8tmZBZeSYwSQyBqLfGViKcWtvvPcV4ikYrXCr1EJyZYcmVLP7iy1SoVpFFhS1FTN3LRe",
  "key2": "q6LSZuNpmUT3qZsCBiNKdHhmpfVESWCScNtNKg52SNai2J748sauxhJBASNhTuBGm3ckr2sP8fHQhMQ97mVuxix",
  "key3": "4xXhFpBhtrd4zo1Ggoiyj2xDyzc5ZoGvVZXHabfQocdL5pXyZsWhifPT9UsfR9DUpcRcCV3dBYGZudjEhBTyrQbT",
  "key4": "3sPjg7Wq74c3VwnbkRa96drYTQ4e5NY59ojDkmQNfhAJ8GmJui2RRFuKNqmVjXumpHb19uUboYie4PGyaUHp8tVb",
  "key5": "2X58sA82mwE2rpZBFU8q6woSiP81Nno1NYCjgubDacDWLvLnCMxqKYes8Zc8GYCFbaScfSdGXcndmzjysgW4KumW",
  "key6": "2Q3y8TLm8YFyoZR64uWvRrBqa2ENK8G7m9QtnjJHFQh8ApLQRSfZqTAXdTqtr3jcRwxSBEpZYaCZBC66cosfhF37",
  "key7": "44CyPUoUFmgU3ZsPhwecBdqa2vBHJpKvqy1h3bUGWwjVB78JZhPVytyEs2tBgxLHaS8x9ACKB7PNV4pWETWzuMLp",
  "key8": "2M6dQbLs2vcSwimH68rg24EQT1js9qQv8K7GAaHP3zVeLKN9CFTbaK3PZXzeCVWLtQuV76A9GDnnyf8Y8bxZKzUh",
  "key9": "VnnCNYCRwxLMn3BLiM7PVfXTVDvbQWCR9NmkQ1bewidAmhygsR54FGvRSyvroGdZeteWLwCdsvNb6Gp6n8fiEQQ",
  "key10": "5HutZTPgK3UAkFJvKMy3E3f2vJ1USk7e5KRq7NFgDWDBcYdqRyscEBUpFN9VZxaxuy2gYwZqMYfS1uP5YAsvrbC4",
  "key11": "4C4HhA5sQqmppi9DwTXeHCtfCnV8KiqJjZEx52NUQg4Q64HW29aXbBGPDVe5mtQJzQVBvuHE1DchHeUVpq7eCvPn",
  "key12": "5Ku18q32qbQHB2Qf3va89U2uQogT56bXd43JWfgB7F1imcBqXnqgNuEhULs98inDFh9i8KeT7sCA6hxGhoXpp4sg",
  "key13": "a9zhJCipNarujFHGtaRzSyBNgLfys3E36SAUAWNeWjASgHXSy8D7SLdd4WC3Erc9YsRXta3Km6vEKaVTyocj7Po",
  "key14": "2LA9txVru8QfHHjH4er6G5z7HQoZSicdKoZX6tyiJyvscudvZ5nkqfPq8E3VuiKfvhnoaYvuujTmXMWLsTtw7hza",
  "key15": "ChDYTNgKFMpmn4kLynMm28BZXLzU6ZJW1bq2vNN1dW6YwhudeNKwQWNTjBTf5VYZ6PLLXnCbsQWDTCrR9BqFCmZ",
  "key16": "5mvpdnVzufw1bwk2g4Q4gFAaxBXaGseWSYECjh5FaxQRr9he23bJ7ED6NjpjNhoS5mnpqrCtudq2HCenjdZc1tqB",
  "key17": "ghRBUMa5iE9pYUMHwat9t1hsw4wjaMCgaaw8dVXfNWp29QN8X54XrFgvA4Lr6pYa2MYLxkZ7xgBc9d3TQ13muuN",
  "key18": "2aimS3YGEhgS2rq8EbLwL7UFNYrcSKmLwWSdDKFV3GQ8QjpLYyq7dsGCquqEgBkP5fZbGgzBVkC35M8XyWpiGYhk",
  "key19": "5pYPTmAkHPppGZ6RA8anQS79BZYUxM4QW4P9QmCSwBubPUY5y5GQjgCC23M23x8BQnZnMfEqGUqzVb7gy1gxSpmU",
  "key20": "4pYre3uMUMifrR7WB17c73M2K2qJqoNpMAuw5nuM84vVwfVQmT2zWin9APL8hhqegv6gU4Hy8HjeVwonvTwAinon",
  "key21": "4yQaa3nh9HNEhv4ctk3ZdDR4k7srqauzbZqLcCaHG1Vb2WCgQWQv1nA2TmxBB1tZpJy1Ec322aKpZ4Yiuc2MUu4e",
  "key22": "3gv3S8g1ZgLSjn4sBncDiC6R8g9swZfcs45PjJcvygUaEP5xbQJbsnrrTxYdQDqRbeXzgYeJr1dVpjs6aa8f5nbY",
  "key23": "3noSNsrNbsb3omhtQuF2B46NQdqBoCqz5nGHCtLBmfZFsDwayELC5VQQkKrxJZiz1gebNz4VLmFK1kZD6EqtV3HE",
  "key24": "3S2h7N9AUgd1g2m8xKwTVuUzFzUjgaBhttPiMn2GGMEV4h5SsRXb9E1HfTqbxuYc5HTU81VRZJuWoNDqsoRCmjiE",
  "key25": "27SJiB1zenhf1w2HMG7VFqRY6Uy8uW5HQcLyzcvAZHshoLtQrYBcxBuvbdUFTG9x294i75mKjWUtLGQAZH8JD9mV",
  "key26": "5huVgyCBsHornbwizzNf57f47mFJWT7RTzzmbuHgnwLrtqud3urEZBLUjCkLKA2y3admGaZps42kXTYgVyCZPEME",
  "key27": "5ZDVFpkNJdnj7zSeugu8p5Y5CCrkLcwMc8mAkE3U4VjBaKZoKaiMCYabQeQx1cKKptr2fnhMn9J5qSpMiD8Hnmta",
  "key28": "3yxiAgK2HbXJU54VLQnMoHQbfzVTAMoF7eiU7cCxtZEhwwCd11Wq6Z3i3ir83sFV6kfn4Wtf1PGTjtNnZBjMMmdc",
  "key29": "2Md5f494HK6ozAzDAhxhk6AncZn6MkSb8hUqyNZRVgb6vZT4e9qWF4MRxeQ42HYT76Ca1NC5vZBWispisqvya3V1",
  "key30": "5vdRF1wfPrkorkhwuQvos92XMJY65zjcDRPpA1mcNTC2AyZ4kWccF38QWcmyMEaesAgfanEitdtSx4HUwgzG2Eb2",
  "key31": "Thk3DNUM8YW1rWWu6A9Naf2yszRG3mbbTkTPetv7A59JuZHDeSDNb1JiDTFwibvsWyCbzAdnKad6aVXjf3dfQnc",
  "key32": "4PmBA78DPpNbF7jT575S4u4HuLz4tDE5ErcoznBT29r6GgU9xNXDXiBVa7svym6o3i1x7zfL4BsdktpL58hdP84t",
  "key33": "26iD9wgkTMKhHaSXo4ibBqPbUqXqMnjzjjNS2Hf49P8MYQJEFHv1WcD5PichtyvafKb6x4DRj7n4ukJRniNNHVu5",
  "key34": "2sch8VHSGBQ5QZAXU1VrurdH7PAznwgDEaAiyFW3eRkvTpmdVYM9aSD576GUdAu65NA1E4qU2PcyKAVG6TBBiYKF",
  "key35": "5mJyN4y7mUxkVJtfANRTD4f3gCo6WLzhExANDP5ohLQS328LPdWZj22B4zL9tYrc4dBdEav9QNBMirgmvo7JAk6m",
  "key36": "2M7dLtNEiuuEsMhy639dzL1V38vW1nRKnhHuFfvsZnagKFJrsH75CjrSncckyd8KUKsWbvB1GxVTkGLF4xfLEgWr",
  "key37": "TKcgBdrFdEwrixBwPdcWn4LE3sfP5x3VpEE8azAjMKPqG83XZdhiz6m7QEwkAmwHypwXn9gnNxMdD8gGwDrpvRx",
  "key38": "3UPFGv3yzqvjEBqzc5qCVKjigGN5wpGLC9QAbEdJtzCNKJRjgv7neuE1TipeKjf5TDQNhvDMVUJNCAuLMoLXpnX",
  "key39": "HTdRTddEx3FU3rWoktrx7LL3Tmf5bCCxFcPiiQdNvGucqhpYuT9P6Guu17fAMZ1K6SUNBqrzcLshvaV2C6MLU2L",
  "key40": "3hXvH2vLF3vSnWSRnNf4S3gqaBpZ7B4TXRGbyC2MX5mLzp6Md45CraDffFweWyUYdovnFiVBqwfZFhGv7uJV9xXt",
  "key41": "5TeeC6ZBZJhgcrFtf4didhrf5pJSmui7LBVLxaN1YzSxUe41SKpqkunxpt6Ucg995p6szkBsoxZJ1KCv6uoSXaot",
  "key42": "2PGYp2oShMk3fYAszBAMwzeACfAfGPWECZv9Zu11oumZseL8qXb6gQvFWEFeemztY6FL9CUpeF7vg6sG6zepuPiG",
  "key43": "5oVDRi7R1CrLtVSUdzhzoQhXmWMaMV4xGR78rooKGdGNAPhK4TDCzwuscmABGGYqWQcJywkMmSWC37KKqxNjwFGX",
  "key44": "2sQnzTPLvCbrAy1zUZYRVhuS7Hh5msyvhp2B79jApzgRxarW44j9uWgbkjPB9uy5ysrqSejdSfc1KqDxEoha3dVP",
  "key45": "hdPpVqm9w4HLw19scNZL56Hf9fThEaeB3KipMscC4khaZs51QEBY5yJTxrFF21z9NTRaC7VrMoi2gnm1KhpYnXA",
  "key46": "4wZsURTcDQnTcuF5a22vV8hcDtbTB9hZjCh8fLDwc2Gi9A6FMEnU284JukzjAzAELdTMdenxGqsHtTHvpMK8twuM"
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
