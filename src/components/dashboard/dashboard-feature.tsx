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
    "3Fg6eriACV3qYuGxV9xsU7Xwix1CcBtF5Pn15PnhQYEhsTxxfCNTrX1isVwjhDsvbuDM3fKPEAhwkHT7XfpzPKXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w843ZRgzcfd8CStJyWbzb9rE8uJzUSefENfVmm2x6bZsZWu5pAmQ2kXH26Tvu49GVHoKFKbj9mVxuE6MFXma7Dt",
  "key1": "66swomLqp82QYtKXJFcLHD32XmqcFZubQeJZyNgBKVjKyy1WaJ2LVvt9DHRS4c7NkBUkUYPJCuuZU76wjGhtxyFw",
  "key2": "4hGJQFgdnhiRXd7eApoHEytGY9ZaZ1Zna5XEGw8SNwRynz6e51wMVzPFKSnsxw1S4v8dXxPsTFHFowggApX4yZMd",
  "key3": "24DkpADuU1e7fggc9stvLV5h7WfXnsQzkiqEoCh9K58M2xKBVX2iHnAWG4tebSkGQNda1p3crWp6XReR3oT9sgm8",
  "key4": "UX4XqzwdXFoaQ35vsmAUts4tkFoSnc4ZvPRL6zU7trEyBCcsVKNTwi2b7K67u2srjkXkiZf7D7HAaj8Lvd8iDwJ",
  "key5": "h8dXTNzsK4burz2h1d1EdWczMHYC5fURU6mRXQwLJVmhQnvQucPVzTnFPYg6k8rrM6XMiX2Ju5Q9WiEdmUoKis8",
  "key6": "3FM3xaTWY8zzk6RGfzzBvwKZjYSzfGU5PUDVZEvaak1hW7xbr1CBmuSPXgDhw1fYEYZ2nv3Sq9DhFP8tUPDrsbWj",
  "key7": "5yptx9ztYv8Ss1oa7oHhqPs1jpxshsNQj1RF4co19QgU4jJM1Zvn2Nz8xzo66r7dgwxF6odSmkQr5xvGs73eTCLB",
  "key8": "jMCtt4TZxFaKHYVELx4XbqTqfzcR9HErpADEHECm8KRRn9dQyuk57B3ohbudqM1up2HSCAcikdT7id5vnAv4aYA",
  "key9": "2jubvZLLZAjqrxWFC1NcTtKhbh1PmXxBf8qktwai8P7a9RXz7tpxKBxoYijaU3vr9XER1AdjLFGKFsjuPVhaNiDP",
  "key10": "4FXgvWUmJYBYgfDKTDArN77GbFFkKe945WaMg9SQWZsSZSjYBR4NeF5Sz1kwUyYQhzQcEzuoTSB4AQtLachg5viE",
  "key11": "3zyKiFm1grE7D9c6hsCsD5z4T8cUjStjjrQ8Yy532vxJv7UK8Gi7m6VpzksNMVpqHtbgYqkCh3TSNrBb8M9GiBpE",
  "key12": "2ca7tpXAedZUqeiKBHHHRitPcNcTLTx8EWs5LxN24CvaLdxE47GFfYcDfYtoZego7pHLf6aftGWYWAbPaFvs17V2",
  "key13": "2w2U8SpcZLtbTEnZg5VbNWsYbuUxfLr1dX7QuoZBJnpMDvkTpJdPvVcDdvNWwbJmhTP7e1tX8BRyKiS8v2w8g1XA",
  "key14": "4zQ846pg9FgGDyeduFfrFumvK7atrwWs92PqPnzYN4WmxsxCMDzn8cVzbQG1UtYrDfC9YaUzai98yyxLYt21BoTK",
  "key15": "4U2WZMbFbfkMRYe6zMRUSaLvvdYKwjupvMauvJSBF2g8JopZQWAJnJpgZbXCSwYkd3uYLMgWH5Mh1nVwi8UXksHk",
  "key16": "4gY81y1Qyzk59WTkZTcCM9NjXAangKgbZKAg7PoaZShV2ELmCuYDTwnJPmaeuvStUPudUAVbTuM4iczMkdTB2rRC",
  "key17": "2Z3v1KEFqdJL1MpFgDX6Vk7HG5yGZunP6jqfFSV9DvML2Rk33xFVL3v2WNk9R14SfyLqGKBCeJNRG31Ut9kcresk",
  "key18": "2isHC8JmwbEZfu6iHeSW88wcDwnvsDPy3umybAbeiJebk34w6C7eLYQrtEueQgs4zSM8XB9DFfP6FvKY6Xsz7qhq",
  "key19": "3sGjLAE2X1jqXNEocUVA7thmdPCsSNBHNAF95dgLHjgFjyCEbnZHxSLtuGPPnJV6npwdp9wDdqVS2RhD7okjdLMM",
  "key20": "491S6EFTCo2uVqNQnuESv8xajNzJ7KgkmqbgEVdxYSqN71TyUwXyFBw2Z91MXotBMC3LyHBaLpMtdmpGTt4x9jG6",
  "key21": "33v55XCzFeXupqd2nE3eYiKZfxQMXjQVR4MiRmJTxd388WeDc72f5UEnp5tsqqKMA7X3sDGF3ttNwntbxQxhXFR5",
  "key22": "2FrQ7XczbqgTSGKK2w66EEnaSPfiCpeJCqz6Qsf75TbVmUxpbQpJ1tkkr5rPGjG9TArs36M1nXejxMqPsd518nwL",
  "key23": "JwE6SvaiBQzotP3Gq2T8vWrSHyZqmnTv4DzwxNJknfziqxYLXtTni1XjDPpy6hpDRUyPQVtWNPZpvgr1i5uSZbs",
  "key24": "5R9j4LiQLK3LKwgkfy5Wo3o7G6uZ4ez7UMzr4gNbpevwG5BczLeXTdgessoUCgPKk7YmhkDcfTZ2cBHrRoLoDVw5",
  "key25": "4Jt4aMRTWd9zDikmFkTR9wmtWDdMkDzAKKDzJTqJxeSi2horXrkNcN7UBnJ2Y2G5QcJwnf6ZCvBKgNQSpF59gRMq",
  "key26": "isfrx5BFnbgSsVzTZ1m31iyaYcDAp3rJ2FVSCvBf3CcS8b4RxB7JJJZrDP6bLVwuh3WMnstt4fKK3ccQtMaDY77",
  "key27": "5XdmNqytR663ihdZzdXh8vjmjwFBqQSywPtPkQXp1fuvYGTRkfjmxwBbDEvUNraCYYQuHtgCLHskNnt7hUNWCePZ"
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
