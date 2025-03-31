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
    "2ACTTiwzVCkGqJ16vuFCaMGEY9JNudMSGRFtSetd2osbqPUNdczNknv8HticFhdfiFjeibUD9KYH5qRBbnsUyMdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VKTsRzQqpcvB6KanPP8gedd7MEkVPxM93AhnsYYsDEmGgdKZtqZx1m71SfFsSJ3VYA4vMGK9eZid67dU2cyMGp",
  "key1": "z8bY9DdzsQ7Hm2rkLLo3eF16ZjRsN229mWaXxRpnhC82xmTBFxXBzbwh7KMBd979QWQEtDPfJm8daS53B5eJg6g",
  "key2": "25HCnQ8PfXHE3xYdtXVWMrCw8F55QnZfxHmni4YXLWf69daRUa5EK5VGM8z1XJyCAV2mKTiuWREhj6eALLpUU5gi",
  "key3": "31UQeMw2nZmg3W7dbLsMxE5sWSoMr2AmBR9A7KdB2bJdUoW46Tqaogro4PHGCnPe55Gkisx2oPmA383HsnVwUVpR",
  "key4": "417ZaU56BiHyF7nCzFUpNF3HSpxRbfivYfr6bP3QQExUZ7dQp4XKsrhDd3izn2ct3KRtqgVaCwoQFLMoB4B6aC5L",
  "key5": "5vHDH7KVupi1asFhTDMpmZ2gNhYUc3T2TtHmeYdR2ix6j36Yu34Zv8Tzuvpa1K8eUNBhwJKvKQrj4jxLBotDwogj",
  "key6": "3DggfCaAf9p9X3DRce4mDjq3s2pqWswuSRvhq9NgRKAugHPh8i8vrv1xjKJd2LFbM8F4yiQSannyCTahqcMmgi4",
  "key7": "545SrGmkdUBBE6GFxF4MWW4D8ErWxgbqtpPj7SGgzx39FxkHydx1KcaLstutNf5LLYCQKrqhqUHbTDmhhvXsBKsm",
  "key8": "3UDU3P4xoz1zkMqDNfCHufTk1bF9B9yj4FFfHdqBcwGXc6Fai1jZ1Q7xiGDXPHZd9oxP1V5ZbgS5iuxafaD1umnq",
  "key9": "2j2urtWHcmxwdpzrAWdn7jwpTotXvuzzvNQS9v1cYNABiTgAyfG61k36A8JLi6eS5aCnDhZ66xMBqYXw3acN97vS",
  "key10": "5ydpiHuKW7NXDg8JNud6TUw67Xuh8Ec8Tm3V3io5mvJ8Hvww365E8aj8FmcT9KhVLPvVmqdaQ6vptdYcXMdRBH5f",
  "key11": "4TuhFADBaL121SUAWfw5VVeq5Lt6WZXXzAFPDY3DXm64guFBv1HvRSmGD5scbSSquk4voTwCGeKVU6wDrgz2m9a5",
  "key12": "2wDmuH7K8Xwmi3N3NnZzXtrpRvDCRyiofJkdyQStwaLYaJccY3KRzy7TVoX3HtXx2VHM7og8bZ4ur8eE7zUF8HA1",
  "key13": "4njhe6Mvx5RKu1b879rhPRJQjXWJe3dfbNnEZQe6DAY8jZG4wxfevQGM3aWpJtfgKJ2wNfqzKLK5TLW8sm4L9n9d",
  "key14": "3AizJWP5g2aMzrEbSRCWE5bc9txQ6iy3YcFsZiR1QqXq6ihsA72xdH5rJDuyezgPZsMUNbdhUeS126Qhe8CdxFFF",
  "key15": "5pSh7rqthVWccmyC46LcDJTknFhoPC9oFGBddCJbXkBpxFBQEGZS4TdHzDTmKMJkrZRGPEHeYZfMCcdnrmfNkR4G",
  "key16": "vYhTRJiWscG2Eh8Qdqxp6wWH2w7GvruAysT5ineGqRmJ4Qm8gvxAikfUVreZftQ5Mhn2KcbZzdS9qqsAKz4Evwy",
  "key17": "35JoW3xrFGEitqVEPyF25JUDP97G5x1YQgH9KDu6DNq9NkV3arqRtoC44NMbTRqXYHzwCmkBFBL2quMdMX6kd3Zw",
  "key18": "5SLEJ9abQEqEfkoxvgoZ68e4M7N9J2LDFtfWUZ7QScFWJgEFUkKCKBqcEsgznyy8irVHcCixJjdb6RZvaURCjrnG",
  "key19": "2k3mTAvzvoKoGaTa5XvGmptDqjFwNwsvPzoph4bcuLeyKnP6BS33uCw4YpBvNLmaW2MUkJ4EiUrk5j4XfX8n9EeP",
  "key20": "pBPGymPLdWZ43M8WPv3VLir6bYLd2dhM8pKwVHAxnGtKhiWXpnW36YCHjMLUK7Q3kwDQYUcCKkhB9WQCHXzGi2o",
  "key21": "3SMs2khfJmwy9hLNZ747qDzWa8gjNRBNdiKSd6TWVCt6PK5p9hThSHfPXdbzfmWsTeyfFzEyuzxwmuh7qSoHk2uX",
  "key22": "NSKdewxFQ3xU5iiWhNDGfAkJVtZxK7JBcQ1eERB9fMezrHCWQ7MQByWtVfLWLPbpdmXDshav6THjN8ntxBESYNB",
  "key23": "zBqRNE7BaF58co2tza8jVxd4mm5nefYBBdhC2t9aooJWcwJRvhs8tCE1jV3zQ7qmP9yCGQhw1r4tnfSLw3dGSvG",
  "key24": "5eznmVfTaAEVrpxASsEskFV6gDkWYpBsJoqs8YpkhiEDKUSdSHCfEnQturRQN5xqvNR6YYoSwd9ZKwAHgcPL39Wn",
  "key25": "5SMuiFeDYAX5EyFvjkthp1hFYzZdd9YQEGLSfFPTG915rXw3ZFZLG4bjqsnHr1uHC5DES6sjDRWNPWVtMpVs1MF7",
  "key26": "WUWnLRf6VC2k4nZ7ijiQjWaq4X3VFNXGVGQj2VmTcW75PDxnU4P6XkAun38RbQYCg5zG4MdSQqXWirLxfKpdce4",
  "key27": "4tWCCpX7h16iSKC1vRacX6HLVEhQXYqT6j79XgsbPuA4aUqmHJK4Z2LFgH84C12YuW1EdqP4dfmztQxrc5wX6uSA",
  "key28": "34RQg5x3WeExJM8m1uFoSKfCpYHRib47kMc5gCz3Er3xSog8QsnDBynnKHebqppHDCe7r3W34o1jp6EjA6dmQwoT",
  "key29": "5MLJDs3eVxZ4FxEAgLZLVBt4zCbM5AaN4A2DkNcW2qr9jfntmuFZm6WWYHoYLMyv4FsxG6wbrAkJc7DYmPjTpKU7",
  "key30": "5TvDdrfraiynm3b5P8QP6nxW7YV4JZGV6z2MEJzBo5qmH6GvMVtnQuswFvFuFzejMwxUAUcRRemS45BK8f3zvU8k",
  "key31": "5TB6LXm8DeUZqJiDtPky8HLBtU133KqBDA9kz2wGkak8SCi5KvPjMK6komZRuyH3HqpUvL9dXxN9gf9PdDPP8Asd",
  "key32": "2FtdHpjNG3F4L7DYVrEanH4KhwwLjD85NsNmCAFqSzG689X7S58uHqS7jS9fbRUL9c5u5eLK8Ge4LLhdfsSwRmCw",
  "key33": "4EfH3aocQnH3kGjBqzGbgGu8B1QDAQtP6wfGdamNSQkJ1xbSD2JiRa9CN68oAnGKE5k5JsBQqpaMGV2BFwpURFNq",
  "key34": "5SJjXKBuJ5EgBKMxHv4VgARzbVfoqF59BtZuhK8qWjzPfjqLhqVyEWrdQ9zV2Z487tBA3HsZtjaTkiV1zqHxYQQ2"
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
