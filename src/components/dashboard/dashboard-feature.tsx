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
    "1y9Vmm7dskELdY3RjEiGdoXkijBZ2vF7GfoLmBhFmpQ3homc9Vi8YRA77dbbusx7LJycwFemkNXNbbCrw93VuVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VgvfiGS3NM1RW39Fu6cjhNhnRYhnXvipNSMFfoddjmZ6d9cfJL4pGhEkWB3qQunSiX8d3iy4wSYrtURnoHyxAHP",
  "key1": "4JvmjZv2LdCC3YeEgib1LHc3YoSGKCZQCPo1XnvjE4NqsCy5k9SymN214GJPUEUhjokXqVG7y7aSowmqaemk4xGi",
  "key2": "FdF99UAWQMT2vBGjs7hHtFWTYGi4RUqTDqVMhUPpZSc474ehEHjhETvGDwjAHAooNSZDh9FP8HHEDkNYeAkHwUF",
  "key3": "5TEfFAga5QQafT65UR8myN3zoyj6hrau258tx5S4VuF62vgDwEt6iBJPXRKo9u7baSFAxmrMamtKcWvezdZqYBpV",
  "key4": "5ftx6KHHKh6KJG6AC8ecQnEkmUYVqBJBo92mTHFXNicdqWJMDiEKdtrJ8kY6RXT4hJW37gjZ5KpudpJou1A9jfk",
  "key5": "2Swg63coFo3PAGnoxPJUcWEDAtw62bAqqD3J8dxXqHkANNfViBdrpx2rjR2pwcy6nr7naZj8QYeWo1eBe7tqSTvp",
  "key6": "26eSuQhAV47JgV5PMy4cUMZ2m6yR3V5WeMdrs3ENrtsq7NiTGwWAmsbVpWn6A7eadJdH5MJihiz2gtpuMjn3yZNS",
  "key7": "2sTkNrcHNVqGn4TJ3HfmSxGNHVkwxxkZGGPgwzxDUVJZMmSwiwPJYTgA5vmtrf4SXfvEyYzCQcAetbWnMhmxY3mF",
  "key8": "2NVnfiAVU7q7dWjaW7Mu2dgPqANTiNtdWuxTW6Eq8zKLrRgwQBQdptTi7kDhs1hgXyXchppb6qKnzLEPS9KmE9E9",
  "key9": "5ZomWBJQj1w1jmJ5yJzGxQrp1xqE9BgTLyff5mpiJpUkMEG29BpUKZohU5qAAnW3v4bvmDZR5UwCjBACQpRY3bzg",
  "key10": "5S7AoAD8ds1hH54tZDgCwq1P5nkvZRJ6PF4bNZUBxWhhENMuK5z5zky39qNYxvZ1Johv9XWUsrWXr1ZXDsUzJuK5",
  "key11": "5mLQaG6j8GmSN4fMNMrydXjygsD1FBo3HHWY2wq4LL9XCidfYR38F14wSVRi5qnZcJjfsNj3bVL9GgP3dUhwAoqF",
  "key12": "2iStpLekgBDjaNSxyApg77sJpxyYa9My9B1JW83iihrKjSupjx5u4mrh1Z8L6To33d4Rc9nVHA3iQqwez27RdRKC",
  "key13": "66LYhtVX4Ced2ZAKFz127jiL6NV4wjqJCbPXtLwcyftDayc8bxoNiZ3fo4H98QGH2zhLU3aYKymbz4YLVcJyqy5o",
  "key14": "2ZsYfCknhBRXegdmVJM5RjD2HGJFSzNMtevHubaYCs8yjFAm3Q2EkgMkHRo38u8jjrLLZPM1xhAEBNT2LKzVy9Ar",
  "key15": "53fBsUdzTujh9FLcdjkSPgBvCkQzX3L8X9w8MqG8kmLkfsLsz89aNsnRPsYk33VNykENaeRyQ8bkTSG55rb2uJUj",
  "key16": "4MdaS9vjZiGDdfg3fc2PbbeKaQqX6MMFAmKmqNUqT49mYQCQTvNKnuCFYbzjft8fwgqk8miKspoJmkQZutGKKH19",
  "key17": "PdZUeojqXoWme4cUK9hYrAHP2q5ETfbuwNvpWGk7JDKk8XYjVCgmjG6Qb5DgY1uum9fUKQAbKWMeKVNFn3wncsu",
  "key18": "3rKNTCa83AvfxQfi2dQqwTkXmew3qf5iP3c1cNRWRxngjkDUTyRezahmTgYx3PTGj64xqA8XJEGSKpXmM2nttejT",
  "key19": "4rLScWikmva1am1w7rRFQ9F2vaxwR1XTuXQT3RXm9nXWkFb8ZUgnj34z5rXW6KyTNTPZVfF8FttrG15t7a8nxwRd",
  "key20": "3SSMJwv7FY4STmxQcpFZD3gJEFn6Q8FsGoxA8yqDMHTQRxzobu7LsbPXuUcUTQN9a7gRw4W8rUuKgG2mY8V7aFHW",
  "key21": "tLCagG7xDUffbygzL8Hx9RsD6whZG5E8Nd2Bi1YSKPWFtdKZ8vJYBa66Ks8czaPsxnk9mgk2nKEeibBTct9Ed7Q",
  "key22": "64H1LoxH6U4eTtzQbggFewABDhLzdgj3odST7iYMcuHht52fXk4wBq8AaYnjX2ZUYPs7Rf92dApM47zwfA9oS4XF",
  "key23": "LupkfosUYg8i81n5FwNqqSYGMfPCrJYmJLfNqMTBUXwtCioF5bwB6g7crp9MczLUXMkjv479YpbMfKy8XMocgS1",
  "key24": "4wF34t8r2xECfM55Qn6YKU8n2ocjSNXXvM6CufYcUc2GxHMugomSjfpZp67U222TVaZw5CyhLPbLaEZo7MnHFmg7",
  "key25": "38ZDfohs3UxJqHA4t3KwDwRbcc5bKVfydvGkSdeZcLoPLYxGA8X85Y7uivX4xvWZuLn2veoC4XDNz4xBHsXPFLzH",
  "key26": "KXygDs9ZYBzKCdZWKyC9v5Leh1fEvrxbguCkcaBULmvQ1LtJMEavofonxs7WDNriCJL38Dho1hyXpuTA9P7snEQ",
  "key27": "Xs5VsDgsmBjpm9ECqZyhvwsRgqbpaLSix9CDGUpEPwc8n9j7Exty5eJGnBJ9c8G4oXguQ2j2BYjcfS1XsBsPRX5",
  "key28": "4siEnj7r9LNG4cDuVXTvB7SpP4nrHoTcNFuyWXUn2UbeDKixa75oBGkR2pFc3fCHNNt6LrfwtRyEf4gF1P9Pdp6i",
  "key29": "2QyyJ37Y4LcExRQMUqyuhB8RzoerjtJMAQWNsBEUESKWvnZJv5LbEnHtKhx9miKqLV2Le7uWeJ5cb1Mi4LzEti4v",
  "key30": "5VYtXQWVHXPzUkaEqbB7aDuq9Dkc8hdrWhZTs5rhohSUTJUdXeGCT7fAukLmr7f94Refo2YABFf1P3atZhEYVe5C",
  "key31": "2wsrHyqVnrsgHYUQGqSGUWbQWQWyeUXtMPoBLFm4VzHRQYKyeJ6vbAnupV4wXeApVCjQahWsNtuqxqvHXcuaAneW",
  "key32": "2upt1fMUmRn7KAwZWMe5mGxb2HTrVAGGvjZpaK93hzJdnRVtQkfBAeysmJStFMCbh97FKq8USDu7kfRFjVV1dNQk",
  "key33": "4PfGxyeXNCpL6FFpFdrtPnukTBd4ULqnpbVEKEn1tUmfBPr6KnRLLbEjRobdZdyHoZNVL53qrsuaNYX4mrkUzzHC",
  "key34": "3Z8odgJMT4KF4Svh7C7Jkh6sADSApkrvgtXfwkubbyXJ86Q8jHHKBdyD2rTr3f8H9RgZvV7uY8maHm5w2DPHTtAP",
  "key35": "2mD25gCYftEvnMRKa1Vgk9bFTYcnSUAA4z33PK3NPyJsyLnTAX1Sr4NS32U9ZQGNhf8qLFhrRZgRWPfGdZeMCtgP",
  "key36": "29uRhEnTMocHBmD5R5aRuH4QNX88p1wj7qJhY8pN8ygXChtha8ntRqkni29LbG51Hvadx4HPzCEQR5wF8YnKjtVs",
  "key37": "53dDVFZinnbu9nb55aEhpm9t8dTbRArtMciEdRyn6icRuveT1eryjDTAL6dr9cs7tttpWT5qJt9gNxmRzba9nJJS",
  "key38": "4ivbHzg4H9mynZMcpAUAiDotcLfkYvCKeFBicmnFqGJnFShQXknmkDuvxM8d2p1HUx1kZrnsr2tqBLcsBg7Rus1z",
  "key39": "3e2FCLU8HVqrkmmhLJzkNCGHQA1BPPK3Fs7qZkREDPBM3F7j4hGUMyLt1FjHjKxqydn1D9FZi1bsWi4kGDcKVsQq",
  "key40": "55K3qxq7nccpetujqvi8NdkrmQ7cXX6NDex5j8pEekGeGgocohyRnWbzjBsuLTGL4T9dcW3o9qAqGXuAdSYwjV6c"
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
