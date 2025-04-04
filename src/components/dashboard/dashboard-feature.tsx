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
    "2r2n7G8dpvaETeGRJ8HKwiuNBqVBYEv39mQGvuL2rzvSphFgtyS8ccwLQ3D32WqiF4Y1ysdMBHcNDQ2DVc7m5MMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2piPaFtZW3DutaiqHaWqTs9u1YsYj89RtpYfwzMLiZehNJxuadyrCPSgsCc3aNim2tpCLuzaeV9WQBi7BsoSGdpQ",
  "key1": "2YSMGBBW4GrpEGWpcaWww1JMRBjeByW7ZcSYXb5iR4kmFjckDDrt2jZiiqcAAxPozzivbPL4T3zMfmHKCKFfGNTj",
  "key2": "4k6yMEhk4JM51ydh9Lwy4pL3StrBH2SF3A3d4FH2PAmJoWvrbCDXHgWPYW45zYnzeYqN2nnTGe5f7YtQaJ9hkbTH",
  "key3": "2NKLaMXpzfucyFPrRJr6ZWcZEZ1rE8LtS8SdsocNQjjVPZaV4ZTquvCGNik2EMZqio4s3wsu9vYjvC8iZP8x9mE1",
  "key4": "fmAsVrZm6bJLAxt2RZsf4JjVUdabUmD4XrH96V9y5hStXaHrExYqCw9PhXNZBnxLb45rTx2TFGvsxVST38vgY8q",
  "key5": "4aaNLKbR1misVSodp2syAoGGWfcKLH2NDyBffwm6LxBnmA9hmgiqipz16oJ1S2zgJgQTJjdbBfuw3B7EmRgrQmXW",
  "key6": "4HuQKDEE154KsMEk7VLgyDE866sqSEdhJoqk2yNoih5E7yQR68Jcn1B6YvmMtWWTc5A9XVWS2oTKYsTNSQj2X1hp",
  "key7": "sPuWLgQ25fYPJaEkQqsxBrhXnJqzL4x1t1QPZYoZy8BRNKrCzrZTvoAYG1FKTMepbg5STtXfP6sche2mUBQf5JR",
  "key8": "2J5gEiL1NsxsNktWcGiWwhjocivdfrosoye2TXxPuxzGhhMzjYWSxojctcz58o5vPmz3dGLnZ8jK7B7Xrm9Xm1cn",
  "key9": "EiJ5e96RaV7y7NCRX8AdME4J7keBkwizvV4M1fFaPZGLRygGsZQiuKtCLjEPTvkREkfjgUgYkq3jvq9mnJPvjK1",
  "key10": "2yPEm5oUkyhnbAQGrjUH97niGtyvPDpGibaxbnwFzq9aNPJu7ZxgWPaYyKqQjDS5fHbxj4nDj7wehjxKJvVJvBC4",
  "key11": "2duryHPwboabYYdNcXmXz7NLLfn8svUDV7B3LizBhG2e7rL2g7CgSZpsBwcauiL3i36FBPSYXDEqCgnvF1FXyJ1b",
  "key12": "5wnaQVHFaQG7it7CtnnbtsWVnwCXgYdEmVgM4GFyCTc2xRkuJRtgostBdyp3tqA1P7ajLAv6ibVwfht2NPXPyxEq",
  "key13": "5UKoj3pbUdRkycagk18ZyVeFi3v9Vi3ycJekiUPrg8CfHLEKFYHg3f75iXL9NWc1FvFskNT1kY2tdhxr1DeQu2na",
  "key14": "2oRpKZJYhMPanyr84boLu8JUCAuCdYsnTH4Ub9BvvexkyGcr4Sp5KLonTi4jaoLRNsj4mVqUrKbmZjdnr9Le9jPq",
  "key15": "S5BLsTuHq379nqj59AVVorFypMFQsCXUSZf6VecsAHsLdHFyPF1yVx3EdyXD1DVN6Gd53yaCC1vSXwGjCMQ9GBE",
  "key16": "2XqoHMDY5BMz4GwUjuCLd96nBx2Wobn91sZ2nFyB7xKuGkqKuRZuh4pBjjvVCqPrRkp9WtwdTLyWrGgAv5wBBdgN",
  "key17": "dJq38tCrydaZF1r3n15MfZ4ZBkNNhRWEJFQG1n7fapCFGmHQW624Dg5iGTcWLgbJck4gQuRMWDERhuW4MhuZe9Q",
  "key18": "9DnqeZA8n16LnPETaDzxzYayCwhZ1at8mngApPiFDXbkKH6sWmnuGd8fz5Fy4cXyaE9BUh5KM3Cays2Xxptsrry",
  "key19": "3pV9H44TPRrzUN5NpgxVEdw2zjHaB7WGAkECc3cT2g7y592dDYRDPdAzqPmMiRe6QwHbLfNEGXuBY5J5GxUHJSs5",
  "key20": "4D7oNayEoBF5zmjWbdxYJigLVb8518Ur389Umeo7be5MfmbVMJykkWwKhCogtHp9dVcYUxgMJQ6mMK2WcWoX4hpG",
  "key21": "2hQJRr2zfbCv5gbEY57XS8t2i2N7gG8NKxXvbkpgkjuGm2Fr3BTCy2TrqcvHcDk7twq3dVdshPytaUqSqDaMzEFr",
  "key22": "5gAvtMTycGCFDH4SZuBYAkhbsAkYJWfDhSMRxsAjD4TeKP5fwbM9rUc5wtpdkz6QLE7FmfLVnz1ZTnj9jGY62msV",
  "key23": "RwTCuYdvXEHDMdgoVGshSnFvrW7bbuS9AobBjLT4Pz9aSUZkvxEv6ALtTcCfcJYC1BoMApSqzWcecUPkGqCpKX3",
  "key24": "5odwQh3EH8P66EgNjqMf1ccBUE788xCsyu4SD3u6tK6kLySe6CwQpwsUQn1zTxJAY5BwLg1jx4CJvPAyBSNKErRz",
  "key25": "5o6A7rgfa4VYmAmNhVcjkNPh968ixonTMFuVEpmFsKFMHeMC3Kn8f9Wtsdv4pq9LPGrj6h3m5WjBdFu1ALQZiEsS",
  "key26": "3EiArPixPeBrAzxDpg3fw8f6rKxqruPTNxVfsHMi91DWbdsHETaFNkvcJi1U45APcVkNG6ifX4VoRSnCZmmP4KGj",
  "key27": "48gdmR2CdRnNvK7N9AVjMVd1nLKhEW3c3Wqv6AwVsQuHdS6EdHMw53GE3igAcEGSHsprNhcGJg2sB7d7m3eqmH8K",
  "key28": "3YvdNWK3mNWc5dmnBpjvpDb9T7PozrcCjjGg8Yuod7WBRRiNYu6TSXwE1dkgkTdeYFMKwwBY5cQMUZz4GX6WRJ2d",
  "key29": "4wJjyk56LyEkJWxSkbgscw3MMF3Z2xELoM2f2ajuJaTAX8cGUPFHK9TvoY4fnEvczHoxJfzybVoqow7QVnhoPQgw",
  "key30": "5ZsWNobSuJFvykdfnxbVj74d53tTvr4yD7KsmZ9t447aQsHDhk9obrZL5WkWT3NN8hYi46QS6xVD2sxrLyJ5gqzU",
  "key31": "2hY3YpYWEt1Vq4HNiLSE9eHo6GLB6xGoYkEAiPUiDpXjbv3hKn8tRYCp1Fj9sQBhkGG7cF2tZuJpWSR3Bnjf7QMs",
  "key32": "2gL78BXY7fVyg7ghZbPANAg4dsTpFvzD3BtnNFUS7cFN3uwVsKhvBKywVxGejKqmhy593D7fXScRoqiLEBZYf7v2",
  "key33": "5ULjZztyHeustXJe3L5849LyzFCffbJF5onog8q9iThNi5XGg91WSVFVd2rBS3mcRJudXBt6DuPHM5zWpxX6XoR7",
  "key34": "LXi68uLmu8QgFgy3t2SKUt5cE2PJe27oRjKBwFFetU6fhXYCzeA1bAZPrLahFgPyPUUG16UvmYRCP3VpuFePD6A",
  "key35": "5kREF8sSZgeu6DAjGZLT8QiMv2Xv8hHWfHEKfYfH3JSrpXTQ7Y96PEhSUnZVbXdRyP9b91ukqwgS7DSaaNyxmMTF",
  "key36": "rEc3pWWQiZRfRERA9XJbUtyx2DJJKUFMFFeC8pgmK5bpork7HAYaXCMaTMDzTSSo4kJFSojPPWWZo1KZPQ13ngZ",
  "key37": "35JYXjPtmxikB9MTueNDKdp3woMo3eGQos8zi7HifiXubpKKTo7wYLhk3jqo1pFMvA8TG7pjQMuTo6ib2pW1V2iG",
  "key38": "5UKWgiksAYmfUNX7oVeZDjMMfL1pdckLai1sc3z19VCGMDuwaek5KT8n72m7Cysj9FV32D86CrPaCUkRy4kdvei4",
  "key39": "6zezFRGWw2QaxaKd8kinzLGEmmtQUkX35XUkmUNHJatqszQmXgBmy8iSTT68Umz7m3FVEbK4Wy9UDtUewjNSxYA"
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
