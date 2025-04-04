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
    "2VtMsbWFbR8rDQ5sbSSPcfJ9cFDExn5NrSAXYozTg1yHSRsucdRd9otkpmavSVnhKvEacCw26V7yE7NVqqwe7wF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpC1t5a3qtgiQHD9iwjeBHT79P7a49kJCvKw2P9ZzR9CHHDakJLNuRWqVHejQw17SEzGf8R9oEyfJeCuJtBMB2A",
  "key1": "5yKybq1k32r7ovd4p9rmZuYGVm8LAYts6Ei3WSK32rqHygNDiaATg15dNjjhcYCnfVpyQQRiohr6B1XRoPRFp623",
  "key2": "4vosUZR7MthygrJ6QH8KmN8rWn11EhMgDo2v6rTDMWMCFrGjFkQyEZ27MzmD9dVcp2gb5uCToaP1DTpkuCCUZb4r",
  "key3": "5cEP5W2bgpJm1HtPj8sMFVPcXgxAxNmBtqaMP74h6by4xS5tLRGSBtstfbGcNNcHiAwBnvKBobvNoHGtJUgevTp4",
  "key4": "5o61wQDzUY93LBVqRHdbfF9SemqHS4e39S4RSHcSLr2gkvLhcymoBtAdNews1JY2Fwv3Ln524TaFgWwJ9N92swJT",
  "key5": "Azo4snHLCwtXL7Y7XNmYqmY4EkRWwnQ7mind3VgFAnNsjmVXWFNuoh4yFpAYBFhWgFb6fJ2yovu8F1hDxj2SxkC",
  "key6": "cnLfy5sxpGTDc1ifxiQ1ecfqkcPcZ4kaHNZxGmHEA538GHjNEQFbnwaKBk6jx1ivY19kH1R4MdQ7kkBx9P2UaKg",
  "key7": "5y68jQBRiYxJ6MfkdyhUW9FQLwJ9Rxf6wD6rUiZ6ZpU8smsT8mcDLvW3ve3WmsppbZhyouUxKUfWZsAFqWkx3dNm",
  "key8": "meP7LsiwejRBURZTUoz4Jir3s751TGPLrfS9p7YmMkG9A7YPCcaxpaA1b2SXtEFe7qv1FJDKvBeb3q1eD6ZJiDX",
  "key9": "2W6oWLdk8xXPjpyYrCq6rFW6nCscjaaWyPsq24o8zw4pjzSBRUjASLDudVnDfVuQ1xqoV5uhsDocfmfsjJvWiwDP",
  "key10": "4pMVGoojULL4beJcXhAMZjEeqBP2985XWxro5WvVGwaUgS97VTVD4AsFFZTGQwqqgGXDPdh4nE3vwAzbq6YZQ9H3",
  "key11": "49YXB8eSosLrsNHK1RLdPMuMBQciKscvY19hzjHpbfG5tKLMSsLECMGL6VxsZxSUc67JLqWGwY9mhxMzJXbCy2x7",
  "key12": "5dUnzNzeu62yt6SSCUdgT6mrsvcb51QL3vHDwkWpUJn7Ksk1UsATuNbsCc9LmF7vynPKgAN6NF4vyMyY1os9HGuG",
  "key13": "63uwBQaypV1enuwJNZ9P96jTH5HrRYXcY9Bq3HoDYDQPqHugDBeKCNcGTtUCDrwxa7XxjGBT3wwziYAvA5nKxk8a",
  "key14": "67o5pk3qTX1Q71Ktdu1wWmUjpqqHYCVt4W7RuexWb6NubjyaycG3VoUbxAWw5JTXwP6anAv22SokbLFZFBgQ3gR5",
  "key15": "2NhgkByagvWtwVydhzgSduA6iBYEwZz2Y67tzMvo6VkZ2GM9ysnZJ4dSNVxS8RVMZKxv9hweUdFuPPeusWaRcRSN",
  "key16": "4mkaMgY4FzpX3g8ca2xKnNdn3cfHv6Wq8B4HnjaVHRNDCWx5zeEAGxWjfsZ6sUEHT5hg35DEyQRUz7hJAv11JfdP",
  "key17": "4LLab47m13i9wFyghYnpV7m6PSGoVtHbXcsF6hXXbyB8d1EbpQqFGUGj6rJXTqbQLi2L9mMnQggRCv9xW3xnxQG7",
  "key18": "KLvxeigYW2JC2afF63xQ83LqFizAzgk4LKng5PGwceyQBanDNpia94u6kr7ySS7gPJFgbxZWpw8izKdvVkW6AFW",
  "key19": "5R38bqEqWZ4NhMJyqE6NK9t6G6i4WrGA96UhaPBxC37zvAeyzSyAvhqtu141cUmph4k2xFN7y2RJUwjryjjFZbeu",
  "key20": "Kma35tKF3j5qkdtdYPTL4AmcW2FKhq6JgKMjyMSTNbQG3DSQzsDoAeu9vrBZh8XSFycEpzPCxog5v61JdkNSNxm",
  "key21": "2oaU5KiZruer3oyhYPyhv6Ln9PRwGFhScob39wGfy5pfgKp6hM76Lu6oMSmNigeJ7Geresh6YEGKotTWfTMVEBwo",
  "key22": "3kAeFycfqPTyha8NsrfhguXhtnTmYnpqeGJrMa8WiiXdLXdkrgfpo24HV6iHir9z39RLFhH8HRGPyEsx1JgapvQD",
  "key23": "2G6R7NfsFiA5pttTbAYND6TviQpzN4kErTMPJKAGx2edLHgRnya382EBycn7AStmd34N6aMhGEKWMdonosAsSr2D",
  "key24": "2MNALRWtGWPjyuFBUGPCmXLNsjH9hWPESWw9BLF9kdDeV1vusGv6iSsjvsYgkv71MYvxSu3Zdbhn9Fykf324mCUW",
  "key25": "71aM67kE81T1kebzCuFj27jhZEQ2ZHNVEgdiPdcCRssGqfEm3LC8tNRVHALpHWQo7cmgoePXpivhiSmhor8XEiK",
  "key26": "4zd6ii6NXT7dA3uNEbUq8HzkBc8LizEr3TCBwQ9bx2AukjVP111rxicSniw57EaBTK8BbrM3a8BUFDvp62PKPnWj",
  "key27": "Nre2Diw6KphTLo7a19MsDuyvptrZZmqkw9WfHdjm1Ms4bghcqDBXRDYFkMJK4qSaQ3BE2L61LRXG36xisWCb3SQ",
  "key28": "5n64dECvUbSjFHhveL69LAtCxDGFgB94vbTJRvCUcbRGevbgYpdpJxbPqjZRiFGjwtDYNjhiURUwZDDoUu4vmw2D",
  "key29": "3hQZHrxBSbCc6Drsb5Px349PXmWJDqAdFeGsVVNCofj19pqycmLpiWczghb3FiMd2rbMV5xwdEW9LQdjv9aboRjG",
  "key30": "4R89nSXdmjruXsDmw3zFuyDoHQYGxteoYgJ192ZWgWqzKbMsXq78iRDnRJcEvZ973rhA35fgEYzMGtZpfkQi6nDK",
  "key31": "5EXrsQpoSSJEY1Le4ycnwLmU1dP9XyCWzgpG29TPx6412VPNcPBQcVX6gewos2HMwdGMJX7s8v2junfzmAqWgcqm",
  "key32": "3Qmmb4kKdNvos3YsL3VHymF2vuioSsm11PZaoSZshqDUdY8M8oCE4m15rK8Z9dm1X85H2KUHksKkcL66sk8p6LSQ",
  "key33": "28r9dosjyJYbyP7CzfTwfVGkEUDXoyVJKWUz61AyywoDDLM4TYLKxcphbo67ZEuxMzAhfED97UTD33BUzRbBNRSH",
  "key34": "2FMXoaXcjN6sa2NCPgywF2FXNVdkx7WRASnrBaGg3GWMjcANVyi7GuyeK28qrPuDFzfomdabDgieSLKvqkeW8u4G",
  "key35": "89TS8zqNPMjSi5nbxtJ6uYYwgnhUshj8ekehZWJHDJ3JLxPo9LPDQdP9ELEo5VGUY8AwviS5d2g5DqZiqiVNAUF",
  "key36": "4ziRqhLXtP5gsfEAnFzPMJy6vFdCToKJqAc1NWuKN2dDoHNiEe4Af1DYnz28chkRNkvrwF1EKYUHywFDXiTzpHbZ",
  "key37": "5b6mb5QBGf46wmqNcZgtN5BZpkkeU62idyEwuNQQbwVuNmRAJH6hHu4QL9pkuyZVrcU9Y716dAbXW1ReNNFHctJx",
  "key38": "5BY22TwL5eMjQCG3qufkbgF881kjwK68MLsPYpyJFHb4LcLDcxXLevbAxGmq9fpPuni6wEPvfAQn83AvsJAoi9S1"
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
