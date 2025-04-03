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
    "5spRLiWryZJHVzzrZX6k4qQjBxo9sYitNCvZ3CLqGBUdMqiyKGSFJakcp38iExDSSynx2zcic1Ch1KHsUAF1KxUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JVtEwSJipG4Rt1Zn8JpKzks56FRMV2C2ABd92LkY6w13ySECrLscbn1CoB7D3z3gRY2vFccTUvKWniVsshJC4m",
  "key1": "5brykqARmuK8JfMiD1vtxxGimHfk3LuHtXjN3nmDfhr55Wby28yoZxBJzGgeo8UADLxS7CWcywt61hstaX6MpXCV",
  "key2": "Lk6fYNC5F6WJqKx32P5jx6LZXXx3pxX3tCirXMVxd5DdP7EKsBHGnNNwTvvyd1ZrXTDCNramc5bBgs7WBPXy7Sp",
  "key3": "YGHDvwPZ4eKLkRuEwjHbGCM7apPU6y235hpyx5UTCxKFPEkXDYgySQmrUdPuRwoyqGLnkkek9cdJd9pCCTFSaG4",
  "key4": "2vTQCKrNQHLPfym1hmnnFriEBFExsn7Y8t8paFM5katEBZFTigGohJUHddtZwaVuSmy4xq6s2XdRmcbTmv2Txq5c",
  "key5": "5gh183M7afM5Zu2M55bc6i3FxqVQPibNKysTnQQPDAPZAiP7oCFbsmQAmxdekRfApN9VJH9PUZX3BxSWuTGwt225",
  "key6": "3a9afgn9HoTPeBsVssSqbXnibz38ih7iVcNPvQa4tegKvY9zGKPCgSgnqwvet6mVLWKsAgmSmzCERuhR5HeFEND8",
  "key7": "2QiUy7MPogbwmMtuHNkBW9PVoBerj2ceMpRLv3xwQBAYh2PdbNHBLvKKTxDuTtkbRXYaZmokY3YcR195QyQVw6Wj",
  "key8": "4hYgt4Cx3Fq59WdzTGy89VSxZZfFhJbU3EmXYU166G8SYRURA6SFgBK8HSvE9Ep1LupWYteavfJfBKTTHGstsHW8",
  "key9": "52daX2VdFc6ttGtpVjKjttMdLzjN38HdAcQTqUjxNhaSwfWuo7gmZ1kZwjqpq6JarP1wSQwbuLd3yvSPzPQ6t6e5",
  "key10": "2SWDQ6vcy24McvMpSvgm4fx5Bck4WixWXdMUAKgfLUThAaFxVYj2XK8eG9UhZh34N9o8Sw1iTN64daGBCm68FRr9",
  "key11": "scLQeYsvxsR272V22cpxiaJKuf8itVbX8FRWUtmGV7VUYiy3e9eMkkSN4u2U6vkioEJT61EBcDkPXSh6oaa2PpT",
  "key12": "4PV8qXPsjWbfJhE8xBhEBaEdgnYZUa8bB4inLtBKexFsQstkQ2p9KEQiNinqY4amjvYyPZ4VzPPb8jDu3jh5Zzwh",
  "key13": "5QFpwsQuXcHo4k5dW6DvptJKL5hsy47kgdaKeLS1aGKBtvCrFD9BpJjd3DK6ejT2Xhe46E6NjmpuhzWrP4bhNmwA",
  "key14": "3ZNVgr8yXUNqpkeucXAatxd58i76AMtLE1VSECQ1qGxtm4umb6d2hhkSAppNkPfmKMXnk9oWMLaxRJmckbMESaRg",
  "key15": "2xURcpsUxPKbX8x4VcAGLFgKjqiCrE1vWVP2mjAndvvf12VGFJCuGY86oEEw4Kc7CNMD5eKVLFVLQ89LSUmRdhXX",
  "key16": "23sye4z9ddZYhzYpHJer8itK17RzUdo6jX28FVS9W6br8QVUD7vZqnQ41pifbUGFjvvrrrD32UyeiKAq8u1zrVfm",
  "key17": "XsnvcMxTFv9pMs77TwjRVqeD5gVX4mzGP2DkiWZTXEYEkPCmyi742xyFv7VQHFsW8Qy4nFz1UJYhtFR1Dh7dhHV",
  "key18": "57bJz7UbvwfQmPq69Gzkk6PPpbJ3FoHYPo91HxYMi8es3hwSsv5rm3a1dbsioDg54t4koz79oFqGx5tPEcN7pboJ",
  "key19": "AsUKDdAb57VU4pH1t1DBpU5hvyv1ug7AEPdM9oSN2D8W6BNsK8Z41np8W6fMkzVR4Bc8SVEfMa1ybwtgjKM2jnr",
  "key20": "3LE4DbxVGp3E2H3ir5iZ41AYjWphT4AAcAmVhp5Tjehp9fekLVhbCPZfyioQXU6AG4A3JHR112qdeMa5cifuTqst",
  "key21": "3yiUS1EjfPEepFG1Q2pqap385xLVpTw6nCP3HNe5eEwgPL8x5XmkTjYfXufxYYiyp9o27cJg8nCYfgzKrhHiobzT",
  "key22": "nPtEvZfqLd6M4YqoW7VeWmf6uqusYZiaGCTeZWHReLHjYjZB25vJZ3LPKTnProorYs9VbUPv4w2dFZ6s5rTWeMD",
  "key23": "HervcARv9Mg2QpY6K1jxPskcoNUuUXTo2QWsHawTUKthjhf7oQcRCvgQJXg9cZP5NNP9MD5ycVK1p4W7Uc1s1N7",
  "key24": "2afyocvCKqrqDkxxCDUfKjgrJm3BVnJjHPpb3cFsDu4VSTEMYYabiewGN6tP5pFrmwGsJ3BPHhMtQpr1SRNuFqeJ",
  "key25": "67oZagrfSNVFSv57XKGJ1rw8jhopnCkYjAZGPXHCqRhrZexyQzGV7hP37cq3mQhWmGqJ39E2otdeNRpWwSXaxQcQ",
  "key26": "5d4mYDAeVGvbFyJr7VNjDrVsftY4dobMw4rA1QCHkWzAuryw1pFF7D1PyzkTNFC4dy4WbzREHxe92H6LEJTSDKrk",
  "key27": "5Nd7QG7GE1vsN58AA5D9D3KFr5SBcmTrS9Sf22HotqcVXqJfRafee8Si42wSY9cF5qGzb1vddhsYvm2JbMPqtvBc",
  "key28": "FpwFS3EBH2ZKFpPosbqEKTuktAQCLfmiuvsRnCbkQYuX4yxn1hzyDtHHCxxEMkonVHZ38r9tzAXof5ZzfJzaiZb",
  "key29": "2CAWCAtswsDQ4xMJEiCf2mNzwte9uD592LcEsgT6RkBpVMken4MJ1gK2N7XTpHJ2uP3xWdMXU228VkPypfDofCe6",
  "key30": "28dmxyVXpnfK5NHzV3ua4gZcs9FdtikhYzXPnBmC9z2DG5WGV9avFtKAyBeZaX5Ss1WZKzSnYMCodGiaP6N8RuyL",
  "key31": "3fcRXhSqgGKLaLbFX7W7nKgzXPtsvmifTnQyh5skmJMA4YWrGJfpTkM89fZDAxCgpFpxq1ngNscSEBQN9cafnxWL",
  "key32": "6kLBEbY7WaxGK9HfD1h5RkudEQSAC3LFQyq31eMdXi5uDVGNkYPS83dMhEzWMfZoDTUBLy79MRMawLQ7Hbd2KRp",
  "key33": "3QUVWXPCpzsKFBnqpAUt4DP4LfoDH8gf6SSe6Qq8kQGmgRjgEJEYSVKDVaYdTkZcycfNkFxr2nSo5Ak7RSACQVvp",
  "key34": "mE54hMgmv2ai3Z5jMvzMyfpp5dr7AmxB93pwvAiRi3NFXUwevwJddR73h3DmJeyoxHEAE8TrvCb65bgSh8Bjxcg",
  "key35": "2Ve6F838ShCMe8bwFoxTpAxupeh9BwargnQVCCEnWNJTD3vKHmUxHEfTW77gp7JEVXbDVFLxLd6pzxdeEm4hk9bz",
  "key36": "N4Y8tS7n3dyQX9WN5q6g3CprW3eHEw9fHH3yS2cP5bohzF5QdCiK7EA4iuKT3wTqLeouoeUwrrxQ1hEH5p2gTPv",
  "key37": "2YzwHoLuHR5sMxRCKEmzLVkpvyzDeZb5zDwYksvTBERcDY8WwjpnBRuiLepakHHRsbyeU6ahE2DmcDkFhkH6q3dY",
  "key38": "47PPfFALqeymQornLq8NqoXv6Hq6Ye59BeiBv3Jctig7Df53R1nSEggZoNyiguWevUDPZvaReDKjCEjojYR5zZ2F",
  "key39": "qTPL2xxsyZqNyT63ziPQvGEnqkLk8PCPoEY23uYBF8muiBocQAmDwrzA1oL1R9qf7N6qLVTThax1yittQcM37Re",
  "key40": "2tJQTiBMSJqPehuhXW9yPKMDmqtQeJLZ2batuMVi34uaLrybDSn2zniUiux38uRW8E3pbF8Puf2NXsJtL9koTBuQ"
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
