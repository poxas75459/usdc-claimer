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
    "52jZXA4V4LnvgQonjPV6rgc72BNMv1i68czywuSDdccntyQw9WPCBNPZXosKy1oipkRKRFdnGJBJZ5o1dfyb7eF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vStaBurKfE5GvDFoSdzeJZcBUTBHfEKDeQC8CmYYUGnprZpi7eikJp5EnHajnd3DcfJmRVqhrbPzHZj18sfkkV1",
  "key1": "4ePSAVtAS83zPES7x3GggVKNmkLcENQjUgWXPsXB3dCx4gVVMm5znWwawSzTPSNrsxbTTd9jHH5g3HyZKpXaggmu",
  "key2": "4bXn32H58jUYKiQpz87DuvZRqbQPUJbtAK6Dxcrfob21uXyUj5hMR9BEAyc63L1KSkE5gRDNYLo4yweojHtt48xh",
  "key3": "4Z4ji8YMqBbYv9FG4hfRqLCma2M5DmQFSbT5oQ9tBEEir79g326BsuyLqXS7gKmjrhqi8cS8B1xZiqCU2b8KH3Uj",
  "key4": "2GAFZwrCjbP1h4AsbUhVSik3DKSRPYoLG8Cn3PbmSm2UYhQWoVfuavSBLcsjhTu8rPTo1sTAKt6xjXzPZTwmcmTJ",
  "key5": "edLwLKFGH3S2MtfpddbLXQnPMafh89keFvMSgNKQFFEy6LnKtYhLAs7N18ggJjQ5XeWcfYkTmKKx7eEoizvaZ1W",
  "key6": "3dweLwBCBsuXER3jME8cPRZNqfc8yHMD31WiRgYj3TGACvaTt7TUfYbbyekpi74mVLUhi9LZ3DK7GADjjZbxp5KM",
  "key7": "iJktp9kDQPeNrFPJTob6nFUgVuwSYZL9sHCpuhojid8imhuvQk9LK5yWcArtLnE3aSqhik557NYQiuYcsjhdzEi",
  "key8": "iYnApFGmAya2c8afUaGiBnKiJiYa1ysY5QY6M6qmxeLo7bJpLeXW4F6osDFUnqTRmFDkRpnFymEuze5ALkpzJgq",
  "key9": "C1Gv6ug6v2Y3xRLzKSwCti5wdJ69CuzzkCXkAA9Duphm4vRU5axC5oYSeMnndwofXZhxgbhDXnVfexui6BoqhUr",
  "key10": "3P3eWpDHGiLbxUrxE7AnBUdAbreAK6NfANBeopfoXaJBeGaYkhjkrFVKVGGznxCLkfrUce5mgYGncdqCWVu4MzH5",
  "key11": "4htQwAg4Smb3obKQnEjcvHVJW7ywBXMxhTS6RCjVKTvzY1Pat19RLmGKVNv9giDVFk3t22GUJESUnqcXFKYrM37P",
  "key12": "FYuyUBxJvnk5SwfwHGtVLVsqBSnTfygWHFf8v2zAoWNUvKPRfNsajyJvYmpEWKZDFdQ9TeRJ3jG2ob2nhGBqh2K",
  "key13": "2TArA1JPE9rMgmL8S6q3d44Dp4Y5r4Zkjetb3BowBoo2Lf2cnWbhkmC5VzuaQDmbHiC1a5AqNyf1VDVQMVZH4PaE",
  "key14": "5zWEgs1cW3Am7vHGcUFuLwaGnFhMr7fiCeiRrHF64WeVDHkn8ZUft6tUSnvEzxB9psr7ykAHmxPUATvE6kgELFkK",
  "key15": "67RufZdpF5xYDmGx11UDkinrfvpdai4aH1MLodk9LQude37rhavYGo3Lds6csYMS2ZAU99crpYnL1sQszxqWaPDW",
  "key16": "52cQPEJZDfASvwJt6oodVssv2WMySDwZwDRdpbakA4DCqtcFVDPiG3mtLhWM2FnUuk8KXSpA6jbbMvoa7QktVsGw",
  "key17": "41tJ8WBGdMtuLMC8iQTKprYtKQNBT2EY1jiisSw7X4983f88WMWi9hqqJgZhCzt9g2KugoezvuJd1YURU93x52Px",
  "key18": "2Cq6GAVj9RrzsWxvpqA8mKSj63MayUiirVDmCG6wsJ3tdENPQTJwdZhLBznQ3KL1EHWGhENHNsCXyoQKzXyAnJZD",
  "key19": "4yKvR3wBB6dmST5QLbGPmFBrq4JUtnUQBRxJ2GKJhWdFtPno92fiuPsyTsEhYLP6YpZZC1xz34V7Hm8FnjEwqugY",
  "key20": "543nEA6edZJuuweDFs5Tx6MYyshF9y1fx55WhsAb4YnY5DBampUfCBvZpPGJJizhq46jhj6B6jba4BregtfUPyAM",
  "key21": "2KGAXfNjpVwyo7XjwEXGAok7fzE6R5rqDhG7pAoiUjgP9SbFc8ebkLNJzANG4gFFAuSSBDHRkCnV5taTVNArGB9V",
  "key22": "5BYJnaPtsuoDpo12583diuY75nPcFkKE6jXLGvG4P8MzJRTcA9FcZDeaicYwaUyDaRGcrwcLAFFSWcwza7fzdzBB",
  "key23": "71C16qiKac47bY3rgeECr4dZJjFPQBSvwMw4WPtZEXfKpNSUQsQgUmeBD4f62ah89HjhijCCVS6qFeNE8sVbiPs",
  "key24": "4HiLWSkbsnr88vrmLnNLMzqSW89F6G4ytW1QdFXmrLX371EhpoKLdX9cqxy81pSaKZqq9QY2NPjkjskwezpgmY6F",
  "key25": "4nHZaoMqdpEMZ6aQZfGBfYXh7hHzToJdDCACTigUB6XxS4VgW1deGvTA9ugn3GjCrEbtQTARGKVQEVYLEVyu8cWh",
  "key26": "3r5SAvTrFUc6Nmo9SyRy6iwxFpQ2rPghgPBn4oEoGPJJVW9LPCKrBUuATCTUEtq6kpGTZfzBEq2swR5iKhKKLva3",
  "key27": "3EVpTA7oYjJ5JDKBRzWXZEvTevUB7UVRtGHz3tNFaKC5X6XVVnJdBt4pcm7pY2fKkkMvDd34NgjR7CmFdRR9p9C1",
  "key28": "3DZhJn4jH6TBBPzdU7LiwL56v4UW5WLpn62Ttzf3hZfGPC2W1EYFh35HBSV7KqzCpvNf9NHwrfXb4jHCmGPARe6x",
  "key29": "4T18jkSiiW1N9yEaXRfBatQsr4ipBhDjDianERDLAMeoKL9feWNprZKj33syM3JroAoN8Tki71W3p1vgrhCZo5MT",
  "key30": "5U2sR6FrLSP6ze7xhN6TQzzXvdPxHiZyuxQzMHXBDHUPwTjzWnaqGo9AvosoRGMiEukL7qa8mNimqjWCokwk5BnV",
  "key31": "4SjZfj7ppHv1VPo6AH5XofTAEcH9Q9uCLxkxRSr48TjGrajzqQSYbqUiEWpgUw5575uF4nb7PVZyM9Wj99kqcpVo",
  "key32": "5hJBjvS9ChNReDR6sve5fZu8WYJBjLRTZydcvDj5pTXeZHzs25VeZ4qVk3xcWEpB8GZqggZbGumMFeGm318B82w8",
  "key33": "3Vihb8YoMQYTK9ZX73s9sPZeZdfin6KSCURWrEGfDQmAqRh7TyCqoVkzRL3X7yp5CfgEwKf2iS1S6pe7wA8zAoaW",
  "key34": "28zUh11atgjW6ZHvzsTyFicQ1fZV2M6G2SXicjEKr1a4QKZPKzwtNR64FUYp7F9U1y594MA7MZ6kCVYPGevvdiHh",
  "key35": "5v72zaXLuXEF3HhpbJYyjaajVvCVJCW7En3aX72mHDqQv4h1CbSPcKHfcPsLqWHGeBc6bGYhqVWYwE7zdCkBAtZw",
  "key36": "2iL4T5dicmSnrJaEX1dLv16ufv8s8XG7LAnKiGbUWfXh8tgQw99dF9aB4tpci8rWXczPVp9BE5GR2NvppEuH4Re1",
  "key37": "4XFym7X6tbpCvkQkBZvfHg4CBbUF7Gk7m6z7uQLwujoNq1yDiAPTFopjL6D8gobuy3mcJ5BTK3JJMnJtduRzESvv",
  "key38": "478hi6mDKjQkFUGP6rXu6WXCfVTTzTpRqK9nCMsy27jGfoMdGVqDXtC9xw8AuGaB6KVengnbB6sSkGF49mPfZudY",
  "key39": "2So18fAQhSGUH8uxWA7o6wNkzJLySfuvGciehAAKMfGZpEPC28M838L3fqHt3DRahsVk8T8W5PG3JQPu2PknU8Rt",
  "key40": "QeLE26YT7xGi5cVdPuHrA7NwroNgGYtcCvQXAY2SqqUYey7LVkinq8RcntFYxfP4fmKYi8iU3Xie7shXbk2D246",
  "key41": "6w1CzJ4mKC29v6eFDjPwkETyVeyKY3MarovEtpw7ezrav2LJMhbvAKbxAySmExEzQSVecZW57hZ4LT11Ctyr6WJ",
  "key42": "5KdvWjoJg9XSoye83GUyq3mULLkrNx88iCbW5b9PfLgdqtszkf76w31H61YW7jiyVHYK4SKeUcaTym2ALvg7QgGT"
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
