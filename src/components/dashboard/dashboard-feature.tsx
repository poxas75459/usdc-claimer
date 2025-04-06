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
    "5RQhPAa5JQEoZgGv8MJeLqD7AMHcEzvLkdTZYgpKbtsJXhq1WC2UUnmSb52kTCKrTb7WcrERLKTf1UAn8PNYeYvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U9bvxDq5pvyLVm6qDmoGk7qhEXdDkLvv92uE3TP8bnfHsWCWP6oaBU1Tbm3kts6aPkEsJKtYburdVHHLZVhBrMq",
  "key1": "2w1bHLadwsgFEtQGTG9wa5v8KxnFJzcv6u8sWyJ2UECAgAs5de4Nyw4BVR71eq6ShwayjFK9dp9G4i24WycTUNuP",
  "key2": "5jmJRnnTwPZsSCf4fWh4MbCyXyvzJiFXXCJsXZEhsKmH9LeP4NXR2MMwaPaGmMuKVp2DxsqT3nq6wAuqvE82WFgJ",
  "key3": "2Xwav4Tutp98yR1fo7bMgSpx5YvXTCREiZykkmhMoxjcv2GjNuQ5v3vK1ATNdfX6GcuNwZTp9dcHzB87L7aNwr1X",
  "key4": "TsTzoeHaKaU5UtAb4H552Wgk3yBBm5CgGMuQYaR9YbzGLBjSudCiYs5zgn1KppWQyuMzqtCNkKVxCMTr5WBXKmY",
  "key5": "3Ri1DK3YaqMyLKconZsZx6PFLgkQBsuJ4fP6cwf9YHCX5DEAtyVRqNNYusJ7GYVDowcjM23w9G3AMZmzYQE21iFg",
  "key6": "3Bosu9aZpHmxx1HwpzQtC244zcz1haAqpxLCohmnhDi1NA6Zpz3uhxjCPKnpKUeKCvQS6YTyYdT75gaHDmMdkqyi",
  "key7": "5z21xw4YxCvXWZHLz5mSfa1SdvZkxnjfc2PFVNBUkG9gNc7E7TuTRAASYxdNkdQJTCU3ZbWhQVm9z7g543EjALyi",
  "key8": "3EHWgPSMCtYg6YyRYjSYXEPcuXHV9igXRoWvtrd8QTq5CQ7R1e99UL6RQzVHTHiza27wYg1fXrWWTnUMpVAUusxr",
  "key9": "2YeoLDRdirtxECYh6YJRwShuBZJNRfoQUmrD4S4L2kqtwmrdG5LBSfXLqA8RFv9BYNk4csRtzhYiTBUG4CsCuJDt",
  "key10": "m4umC5SvanUEHwTFZ6TvAGpi6rP5BYPMacehgKagwVifHNruVMF4wvBpExZ53yJ3xBLGNyxZTZkGj9fbHpTLVMS",
  "key11": "5QZzo7ttPep4WxTcueFuRZS6wq2d73t72A2CVC118NoNoxngXeLqdkfqHuPmUqzWgt3CCNd49JJTYmJUsZYfVrXt",
  "key12": "BKurevK5N82jQZ6k2Etkc6fc15kK5XxeEihd7gVc6QNPPDU9U5nBpTCG9sU1Kn2xdQA4fRgFvNJjJMpHfA7BNd4",
  "key13": "JSkmPcBKtRTQ8Db8mteceU3Krewrup2Nc6anS8ySNhxj7sgndwSZFdyDBytToez1o6gN1ib83czzmGFqgpsjrRf",
  "key14": "45Tn2Df69rfaKGZTaHrTudSo46RgRNHd5juv3FnaDbhEEZvmqakyasN4XeXsJfZEvSkXpJ9vGGiBuHunNpUkwG1R",
  "key15": "43r17pojWHosmpaTutbxv7FAKzPC8qEu9Mn8gh7GpWvEcgYAwcaogxPDDi776CtaN4qbgpGv8b7NmuteraYk32t8",
  "key16": "2yyxaF9mALsjcAftg8nPxxGCWukg6TT8mMbeqyLHEaFCJNf19SCaySBPNUR3KeeG22JfATYgMwnuA6Gjnrnxdg4B",
  "key17": "BVmhRNRT2GxYvwFiLbdicM21zn7D8NTVxnz71wtTvUvmeLCZkYiECLXE1KA1669dSY2VmavWXyNYDqGjqYe3c2b",
  "key18": "5BGEaMnpfLgTG1TdRxMV5G8aC9tk17w88LK13sfEZ65ur59PzqQsYrCKCkd2MjDExskyYTTffm5ZCeqR1j9jHW2p",
  "key19": "57kpFy6iotQDwg4QzkQdLRwn8TdN77ZUYSxE5ZYmyyPsYLpUsw9GZLKY4KBGfS1oqqfJeohftUxcFQM82NprgZgU",
  "key20": "2cTcRy17e8VonPKWT2Z5FZqEmV1gsWSwstFaxTSdti9auDX2MtuJucYmZneax7cXnsCNQkhawqvnRbCQwcPNHRTx",
  "key21": "eAyBbD2oGCzFCADWs9E1w9LVSbjWjNt2VMxuK9uRU9X4bMZrASRxdVsBBTzLh4t5gmcNES46muDTZ6m7Do2LxJ8",
  "key22": "45Eu5TMYLVkeqVsupHGu3BFmmk6F8LVGY5do1hDWfaZYLNXiWPp7iFH7JEoqM5JyEZTSg5TP9NfhuW2TKiXp2awJ",
  "key23": "39hW2saRqjSJS5X1ARQbCiqChqiba6iKoMsXDtjUnNz9WpzxafT8uHdxpDgHH14qMvkTQrjUByr56ssAx5a3EkjX",
  "key24": "34GMEPWgcKthBEKGneiCyFs1pP2GUhyw1YEDLsk9TxmshRjXvTFptJYpyYCzv41GSa6XUqb5gkdazPqAwqXaj7iY",
  "key25": "35VkDZoAeSzsJiUWRABP3EwZQ8eZpyhcrujMwGhKHmJzax3DaeBGEBwUmhcVSf6e1PGqAMRbFEvdevA8fA9qHMBk",
  "key26": "3tijY4LUsRrxAH3TfhwksETPpTnLMbPuiE4qTvsvYRnXHEHQd9UEmreDLaxw5bCCmVPKgxBowVJ6MCFcrykrkdtT",
  "key27": "SobXQrxPfnzg26wEHZy7Uy4HF82DDtW5uad5L6kn9tLHDhTmD9Vkg8TzUoJ6JLcjtbfrjJfGb2jKAsYwUpgh1db",
  "key28": "3U7KB2wBqM8KYrdDykunHhomapKLzVi6nqzhTTU8jDbWdNY5tXG2gnbyAVindXbWpWgtoHF6aKwHEoeohAiFCnoQ",
  "key29": "3rp1xvaJWHp9FhexAGGtxspVysDASshUeqGZzqJDusC8TZZmxWnfffBeoNHpwqWKE9CC5K3wkGv9PqinqGjRB8NT",
  "key30": "4aLtuZ7vQNnurA1xe7RStZKTGAZmhQbUSykamMsNqcLe4LNJ2Q7sQRnvpstqrtAeahFRreZfbqS55UbZJ4Zac2W6",
  "key31": "43gcPnif2c8kpBC6PF5eNJtzsLESnJfYcnCc64Jaa8MvPykEtkfXL25KnjVpQXoA9BbiUdphLT3Cn21Dqh7XSTtB",
  "key32": "aHLVt2xt1urFAKjHNdnjZAd9Z1kF66vFuC71baBeMRBENSg1eEkpm4bzgZPmPzGxUoRCqVoyjch3wqBFn6bA64m",
  "key33": "2PJCzxL49UHdFJ5DB1odVrNdGa38R5Az4dnapeNGnbU9JDd4sjkUZT77Ycw4wetTjCaP23EB7z49ir5enTL9s3k2",
  "key34": "3V6UgnjQqizMTfmNvCejqMnzEk7fpu6QuP7pBDyJwVfaowRftyRsPUkTV4Lyw9m8nt9uNJm47cbp1VYNTZ4GUndo",
  "key35": "cN2JvrTDm8gLW8Az9gC8nPJgg55zjXeWSrJSD8TsDCEST9kiyibjoDo1NgpRUZ97qkZxPiTJf9V6qo6aYarTgSu",
  "key36": "31Vgk186rUrPK9jjTKuAgMdFmFmuu5px13qjUm4fWoZnRz6Yj1yBFEBNxysWdnbsrSiSEH9FkHDPMV2aKQfXeqMY",
  "key37": "5Arp8jXxuxtWNgTN142R34iAGEGhsZ1J4QNtwYNZ9c2CMjahWLXCHCxDLyUhp2D72kxy9Vh5vbYrjXuTSnKzbnEm",
  "key38": "2EeeutK868b2XCqhqc3dFZLoAe65zm3QaEDTz6gWpp7b4TYojvoe4aZwSECKDBo5q1sNh6CASDuGXB15W7GCa3qr",
  "key39": "3WnvUaJuNdjUNn8hNxuz5ShygDeuZHGHgZ5fwHtLyfp4VYXbZvngd3Se2kdC4u3ogTzE2vmHPY6AK8m712CgDW8Q",
  "key40": "jbQLs2z5utKTkMGVQdLxMtsiS1hVtAzQopcRMLqDtw6tyPPr5BEzR6gkevmETuvmqphTqcmceKB3kdw8kYY4Maa",
  "key41": "2a4mBoUdYkxB8Vh4TQuQ4qET599i8HBhmxyyi97UHArhgDWMwvSjVAkE5U3u1huvvPohfwwKmrJ7ra3thjZQpvQ1"
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
