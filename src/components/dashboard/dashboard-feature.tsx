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
    "wvs2RhktjhCtBSWgcBPNjpZijUDZGHN1RFbfn12vHP3GZm3w1p1bGDWMCH8sTbCQyz8XLr31rkmoD6oeMRrhA2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4oDNR3ZxANz3Y6fx13NvBBZT18cP84CGMqurYFATPw1LDUJqE6UnxGeYKAXrCVAhtpTbuB9G3FWQDESnCyiiR3",
  "key1": "eDjJAZPQZdYeNvmSPUHsy2w7N39NvMSqvTwAkfa4cDf8bCGFn7ohYb8oAQQ8j1N1uYe8rw32fzG14jCRmNTakP5",
  "key2": "5Zs2qZa66JUxUPF7p34U5yXgzdxhuVyhVMDxr5SENp2jHwXDM9tWAeKfH7gmJNpropg4F1ZSre2tRQQ9iB3Xiwjz",
  "key3": "5VJbAKomkaXNWhpw7wVThigMWvb2ew39d6yQWxbJQqWr67k2iTMXXUoLGbizAfZivKcYuVEWsybpdnhGaRKhpiZk",
  "key4": "3eWKYpwfLbiNcX6vxGAeDNQX7vLKU75e82hRWh2DEizCgGGttBYK7Eec1YwdxY7VCFP48ovuL18yct21Db7xiC6R",
  "key5": "27TTkvFw2VKyj31dHN6gmBWgMJegzTHJm1ELqx8Qv9JRMVCXymdM3jTZ1FZ6PJzxdZrdwnFRdibPH9ruAHiAnTBf",
  "key6": "ULd2wQd6XK7kKr7L8XHE4DLDyj7So1Mux2tKx6zBJjJVwRMipdMHUvYpVqteY9AJRcKQq9sx8c6LhndKf6XyLXM",
  "key7": "a3CBXeiK6t1X2p9ZK5UYAgLnzM4EnhET5hcKyV81nbL8qUjhnPte9up2zXKLFugZjxkb8L3GPYrpcvYHH1VDCxY",
  "key8": "63qasVQkD92AYFNv9ZYHypx4vn1fL9L1BxLAvkXid3SwZckEhVnqWBj8PUHxH9zNQydvjyQX1cdbVdJNbarC7MYr",
  "key9": "4sC89PgozQro7Tip5rSCqE9BHXXmm6UdwP4qrbtuWivPx5zMivRgGw8KmvdmAduX5Gq7LTAHNpukTi3S2vJbfyU2",
  "key10": "46RWKkkRJAxzNRzkroZ8bzDw6carU8i4wYxstP8yrx2Uq8UHHkPPftBFUPY51nL7iNnLexSM4RSwEwMmq1Ep8Qb2",
  "key11": "hQjfEwUxeK4YdZFseBWFtVnieqC8M8gfKSoFhd48xkJX8iJpHom2NQjVsYWvh9QLjtjCbAATrgaobv9J3hY1eWj",
  "key12": "47V7W1Er92ZBM4pNa1ZGRYLS5nuSUtmUmMrS58qmfrunza7MZUJEtKRkRgyzVPwYSvgkSyBdwp8yJFM1qAdC9FSs",
  "key13": "5qVr3RGKxTZAo3Yo3KeZuQvrQTuMz4rSxTu4C7ngoVLwod3iqKkmXa4Jq6Bxrc9drn15jx3pDS4Bi97WhQ1fYhms",
  "key14": "3JA7XN4BxYbAVsjsh6SC1Lzx4JhNyrcBe7go2HcJnFhfuN92mh11qGQyysGQ9mLRWRFPMBVjG9jZz1k98X1Bu5Va",
  "key15": "5Mhs5a6VxiuiBRHKFymu7MmaG3WtYTRCNcXKosnQzJdHFDVV1vG8m1bhSy5azdK4zsHEfUohxNppB7dgAn3Tue5P",
  "key16": "2U6jhr2JobCQo4ZooSHELPoP6m5u5MN3R3fmM6Zam6YyXQ5UmY23yQb83EA2jPKArwbCA78ReoU7gDHGHdumq18H",
  "key17": "626ddxeKdXfX3cnjVPAnmrtoYMwvZQbsnBJ1rVdPhuerfZRYR8ZN9uRe6FLJN3jFYHbtRGG7CP3HLcM8PvutSAAG",
  "key18": "J5QCA5Pjkmr5Gv1E3Frnr3dYLEJRuPLDxu3nnYpCAygdLvCZ2hTkwRjHGEbGydDB1CgrjAUMSLaQCfnUcNrqurk",
  "key19": "4zjKtb2cRYUJWnke2V6jpMNapJ96osafJJq4FXUCUi7pdzvC6sZ8V7iwzhQzz2iEH1V5hPiM83j2gxQst6epDx6C",
  "key20": "23YntqzZXFycVxb31qN365cfxB1TR6Z4BKe14G67VCY9Uw8zQNaPKb5dyCiUxHftqmPbin1PWGxruyBGJo55z3dY",
  "key21": "3sGtz85dSJGnfB5nC7BcBmSz5N61Pp5GZpyN3iroFtJwawfxw4Brs8dNWYMAtrkb4hY4uRrWCm7hCMhGsNx7m1R8",
  "key22": "2RY3j3Bwu4Ph3kthNJzc3vEqAbxNmBobabpSx2yF3CbALhwx6wiYBKM1cMjvzx6okLyytszNEjXzCf8CLX6g7xfW",
  "key23": "5ve3YuP12ULJ5YGckqHSBnm8uskqqhsgRPJwKhQaf442jgTemrN9n56EPzomv3N8JWoGRq7QgNBryuHEhjB5yjUq",
  "key24": "4Qb4131eHKahxELouJM7Jvo2DvpTppZsqpTqcZij6bZCLGMuaBbUGQGhaQ7juPYqqornNUKL1i9Y7uzaEuu7AcUv",
  "key25": "2UWDFL8SpKQ5CyqaVFMp4SKmXxqPjyKUen2naRywEZYpU52wVT6uEdB7ExzpZxGG2noQpLgJfdmsFyrCdh9y4ym3",
  "key26": "437ToxfY3jWLPJb1JgDtN2oZttrwm5PJMM2YeHoAmPyd6onwtz1C8eZ2NZx2L6rmCJS39TGnfmGZ7rh5PpN5omPP",
  "key27": "2cULdFqBtTVVYc1heHW8cYZzQjhTRRRVxobrd7Mv73aJd4V1itTRv3t2BukJktnKahkGqjAo5MdQtPTmwvHzR9JD",
  "key28": "cScPSU5A1zy8WB7FfA8axJ2Hd6abAftQ8ZEaxcV6gkAntHD5Ycrn2iBb5Xvx2VCdCK281BoUo3PCnQwQgMJHHbT",
  "key29": "5rjuMnBcojK5PMb48Lu9k9ZP8G1Y5UVaYUPYxB3xoxjntUjDia3sYPJ9h7mQSXtzvqxSjwxGomuZKLyCPhEgCN7c",
  "key30": "TuVRpaEu2xMMdtnvSRbXSG9a3vrGgtcRRVg4Z823HYSmbUDYKNphGiQt1Etjnx7odx3cdR7CPoEytML9bPgXVff",
  "key31": "2T6zrQBxpBHvgUqNqRDYrUDNKdWC8BLMnJtaweogXKAZ39psTezpX85KRaNTMxJU7JJWnSNQLPYiNdmNCDHJvx12",
  "key32": "5s31BUDHVEv2S9HiLiXA7ovGKDgzJ3mPC8aXeUv5jqWwE7GHTrHxJLvTRM9sBmdaX6TEK7JycV8AEJRFrBH9i1Uy",
  "key33": "5F3XaY9gYJuxK5neLfUF6mFymGkzUKeJVCCdYbyt8teNUXiN55zfhLBJNMwbXnkCkvivfqPYVPfxErgqk92L2PxU",
  "key34": "5Zyjbj3EAtbQxpnWbzboLhkTFTJwByfCDUFi5aXuakhUiU6qEZUHamq3r979wJjAyZF6E7akJitdY1i1mWknJRn8",
  "key35": "5s5VUZrZuFscTKSM37zKG8uz4zjahxHzNHcuQ5hErcur2ryPhUHWZwVwpxSjmF3xbPhw6yzyBEWdAbC95LYxbyfh",
  "key36": "3sYxc4YUP5xAS75Lz19M4gELcvmaNoUvXcAg9xvTkq898ipLqyrPYwnwZPbnEX6pNqqagK8vyTP7TBBzAQid863Y",
  "key37": "2xfz1JcPhXsY7GmzSwWpMSFaFpJTac26nb7qG5e6oFx22aowVRQVyEiqE1N6ywzh5kepGd5B5Uh37nkQPM9T7W8p",
  "key38": "bHgZNGUni55hEnLwCAVpvKkdM7joRHSviVRdxtoKvYifKh9xmKxwaYTFstrvaDz2SxuypzZiX49Zz4zQ2C8BhMX"
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
