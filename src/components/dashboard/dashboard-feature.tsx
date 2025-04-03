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
    "4sdgYwwTWYhKPX6PmJrNtXyphBdw7YUu1qMjcLyK2KW1HihtS4AtmWQSdWBnRPyiQ6efq8TnFVbgeHizmg9u87At"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Y8yPBggRcCFUArzqq3A9rkcMWFrCtUwNCcSB97ofQBWAMxSG7iQrtqyhbdYXBEeRro2yddWD2h4f6KdTp5w2Wc",
  "key1": "5dP3NfNg8hDZwa9E3xQX1ndFkgywRW6hNTSyXovngUZDFwsQmDPk96ehvZFAUw9xWhjB7oD62fhsZJJ3Wt9fp5xP",
  "key2": "YfY4Ah93rcjbWVzUME2kod6jovWabKXQdsZhshShzsbNzTvbWu2LZH4QJzKidGZr7uqBJT9JjMCddQTT3tMMJTh",
  "key3": "L2bpiivJtyDecPgWwJ4fnZSaPWRqLyNgL7etfDSedmB23qteRK4iGhveLEv6tYdyKWkPQojLG4Cr6QHdhH4Ptno",
  "key4": "48wodRcpeCYKz5mFGx8YXzCKFFyL78b5o4TS2q73yAiSQHcC53eye37zfR2WBbCq7qtG35HddbTLbKjDetVjFEbZ",
  "key5": "34PnPE8EckQmd2dVPSCo9242VfnfWZgBhCkYxZPErAv6ts6Jjn1PrXLh2MobsRRq7MhfLPozwfRCdBSd3RxavHHh",
  "key6": "5c7M4HdT4uwkcNKyq7WhVfJbodMcMA1oJfnGDrzptqL2AkV4Uofqg7VjwJia4vnpSfqneAMwuVb2Hj8uy3Eto9mQ",
  "key7": "3TK1SBKM2uXbkkCDBpbJ6rjQHoWVnjDTBKMxVDDfnTuvzPapi3x1b5ncVvwst1zHMJ4uxGHnm2NxZ2CqyFNCFsd9",
  "key8": "5F3RBhuZ27XcSuq2YJnBw2D1AMGe7hMAfY6yCosgBMkVyJHnLM5PUJ16S1rNhemNus5jRkQECREUPhBinPGaRJxQ",
  "key9": "24zoxc2ZmoJpU5MRSZ4zY633QoASLTZyY7ycSGrHi77yHNBeQA5toFGJ7tqVyjkarrCLa7ypm3RQKdYvbdYYULc3",
  "key10": "5AVoQgrYe5woVtJZxWNipQbfBYeGnnpBUwEE926ukAqvjfmGFrNjbfXTaWZxtMczLEu9eh8nHNCKmqNfCUU1EFDY",
  "key11": "4cnp6RtPy7mK75Ewme6dQCWd3yrX2mUNtWCuSQqtkc9iRR3Gk55Zr8z3p1EFF1nGH3dL74f2B7jCBrcvw3yKmpC2",
  "key12": "YiYNwvNgkQEmKbyLuvHDmcc39czKTeaQ5jwR5e8uVfbEA4sDJRXcPutQcYBH27awzmwijPxkMnTu3qccr8YozbD",
  "key13": "4XFrRho8XL4TDYrPfaE92bDZbKjJU9gS4oHDRw1bSeFenzFSWdXkpXwLeLeAVNPWGSSfqjYGx4znGyW9CvvjQBsu",
  "key14": "65EUy6DkK4xDbqU8ZLH77qKqwcH9mT4uo1QYRq59WA6bFEMhPoEKxgBunAE54AkYAY322pyLQmwxm434bjkpcmbn",
  "key15": "pqvHKc3mbj5BsJpKQCssCMBze6eCYcX1zxKH3CPB4MhvN36jZGAGhzJpzfBB9BDC15EVTDeBoExu6hFaPBVeWxB",
  "key16": "4KQ9zKdWJmCHJrcmjzwUa119HbHChrg1x1no735YRdUWwaqg5AL1ekA14F5S6J1oHN2HwFNEKVYzk9dRjdpUuQyM",
  "key17": "FrmKKbsBJU3LFqEQyQc45J2PAF6b6fu5tUx2F6o4NFW3HuvVGxK6Y1MeUsPRMwevZca1jKJU9Q4pp1WKL3KN6jG",
  "key18": "w7bNymLG7iBYMfyaj4HAmqyv2q99ttV7ydomcZd9dek43CQbzPMzoEgrTLNJkMTKy1iYFcD9EWAhyebpzMQypXw",
  "key19": "3FNYMziQu8YTK6pThrzTBcneYEJx35hedT1s8LKxDL4yP25A4xYYoKP7bDLhxxE44fNk2CiBrZmQSVh9aP7JqgwX",
  "key20": "5wL1qCzSBQvTqXB2sqx97scrj3wnPNXXT4m1wNMsBMv4kQ95kXgDaGqrLi7vG28odasmZvLVpTPtTArTFCbQJd15",
  "key21": "4pUYuz3DGDbjDzi4wA7h8P4YBoRsHYwWHS89wbszKiJ2nF5K6Vk7Tv3Xss4sMq957dUFuTbRmGqiFC4BBCWr7H5",
  "key22": "5UiqHGqj7BGBFAQCkTh85dktnLPQE4FAxiDtHkMt5LqLMQszCecYNqzXexp9fmFCsMURL8SYhoNcLddoJwRTSW4f",
  "key23": "2tGY9Y6JgAwZBuyFXJ41R71o4ZsyEJR5Wd1fLfMLhBafdbJ9WibCxcRPudgAXYwBfRVxjqFd86sa6Ep449QrJ2yT",
  "key24": "F336ipZuboZMXpHMbsndYPrTkNtpuGuDjm7go6HWTGJ2Fsf2aiouXCGZwUJpseyN9NJr59H4udT2gEXm6JkRkhZ",
  "key25": "3xsU7vQc6EPVdnKJCagfnPstEwn1KkbPNhkWLcqh5fEWEXRCpUJDgsfBJ5oMP6FwdVaTNVjCUz3j8jfoHvfusUUs",
  "key26": "LAE4QQR3ms57mcshG2UDoA8Yq5HdteXZKpbioLgsCNGP3XCMLHJR1dRF1dPxJGzjFUPp9obScj2fyp45wcTJhkW",
  "key27": "zHbctvpahkWznYYX8sqr8VoRSobWmoFuJLMu57Gh1Ktu5GhAFL9BQLWEGFnoXvq4q5u3mxnDTg63YuPTRW4fjpC",
  "key28": "31AygcpmEEUekwJHXaUSNPzE9nK9YVLxGKTjfvWgkqP3UiBCsakGhYbLrFWW6mQDpR6TCMj5HtoBBLVPFR6hdhFw",
  "key29": "yzrTnCSAta9iSrV2ngduUin3DBS1kijBKe8cLWoKedSAwt9Chem5PKLwBkZ9CSKMoofn7S2Md6ucLoTdCctLWTo",
  "key30": "4Le3puDuVVFDopbtrMJuK95CZnhrnm5jKM6jx9FVfepJCYCudZAgQaC3YUXj9GWiN4FD4BRADePjw1VP7MnbMUM2",
  "key31": "JBhWWu6ZoURYbRKYF2bj74G5qgHMsu47wscjQkhzxdGLg8bD4bLrjFFgN6GNP3Jfj7S4hTQKZwSDikbffxxxNKo",
  "key32": "224GogbAAg2nfQd61ZPxSuNpvx6bfmuCXjcqezzLaJoNq6xBVJu3uRFac8P7w4BPwa2Xi7qTAma5qjEJKLYG6E63",
  "key33": "2b951tu6xSztNe55YsN92L62u6xjJUcgCckzmViYXivWSwX5nLJrKqwvPHK4GK4EoSNGvVCL3HpdWKzeJWJjrCcW",
  "key34": "3EfZDkamgkprF4yGG9UPgaCDozdsPVcgRB4NXRWR7bqAStxbfvShvoA9ocC7k7vLDbMott3Q1q5HuxqcFwsaQwj3",
  "key35": "2FzjxpDqnLDL9Pyfq3q9hYnJfCU4C4ZhiAsmU5pYWxLaGdXGSH8xM88KgXcvSXk4mSSBhLotRmJ9W8aXdijJax5w",
  "key36": "XVdAjhUWzXGv8greABBYvym3ugutMHDMtuaTnqg4aXteYj4YfHU8KacSoc5DMt6TXaPt6TUGyvWHW9vtEjo6KMc",
  "key37": "C3239Qk5B6nkb5zRhRznyKFvjmuD6eaxr5ZYcQ6P8ZULvjVu947LwGF5kzhuNrZ14fTLw6xBz2Vq74qej8tXAaM",
  "key38": "Szx9ywbP2KNCGxh4C2xBubWaGP3DBbcompxAoBKu2GLzoBdexpY1gEXiMNP9QuywLxktGcuhDSHq2t2iKqhHE3N",
  "key39": "4KniUvWtPLrT3bn7B5AJfy8e3nsSbbtQoTy1iCH1F2mxjmo4Azxi7SytoNfwAVXqLjJYkGQd4gmLaBTNq7mK4HE9",
  "key40": "4soiUyBd81fbjpXzPyvgo64zpZNVLUdDyagbNMLn9VeUHqdiwo2WMniiboVaqtFSWo7aXmx5G7DgoeG6iWNMpz98"
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
