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
    "2TA7kqd1zDqCKSKGvCmiAXso2hjsNCaGFMDU294an9PnmJxAE6E9AMPj1ozxerc3yWpDbNjnJYky2mEsrCCdj7T9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNE7dhMyBurWzA2JNG7NXwkziPqP7GfXZkTeVu7nVX73HiRPMwTYdifCwbpm8R9YMNaqqp7r2J9hxYnqi2Zb7hS",
  "key1": "5qbd9JtBVC6g5cBh6MCZxtQ79Nruqe5iuLYLPoR9Db3ZyET7NnpT9ZvAcoSPUZcVjqNwaEEEhbKcgrLnV5WT2eYi",
  "key2": "355foGR2J3zboeWz8rKc43vgfWtiLrMNsHhTk5Em7PJM1jeXhAEkd5ZeoqF1BYGWazzHks99Se6RpiT96JpxQLNj",
  "key3": "4uDhVYxuAYerN7aBoJ1gLQ6yp1M6r12S5LyJv9MeCF171kvatXc46EJSgSidauUsFjKkKwYcigDoDydX1bC3eN1s",
  "key4": "KBfPcRYmDY6nGdGYiRv1J79LbM42LfUrZhNYaGAL6RGYG8vFRs68wttHGkXn6h3h5ykTPNdnY6fFHjs7zd3g7b9",
  "key5": "3GgDPg9QsSqCjv6LYWVB5fCZnjBX8SYoseE3t4iQfkb7emi9YYt5mDMGxvM9i2gDtNSo1tphkBTkDd9XB345YFdc",
  "key6": "3zshR9pyMEaW8874oU9bsR3nXmo8z97mm1uxsup1cbz2CWjvFYCy76iutbK47Ym9QJj9PgoDsevwxw4AUidTHjpC",
  "key7": "5bdHk1d1aSQRehkdEhZshv41onY22FuZ1dmcTDRm3APZNM8kyzGLMLbvCisjWuK5f8A5CJy56Wn7LeWUXXW4xMYK",
  "key8": "337fgXc9VgmXE9sQjLEEvdTNabmPnjQSUgY8vRDrgCFY6TuWVkKFniUEi7hgRRqSxcPeA4RR26ivdcCWtQNFtDSt",
  "key9": "4bwSnbZMfR3Gv7H1jeTDkq5PHGcgQNVjNtoRr2GF6FYxe9Yg19bwaFskaPR4LUKf6kdeaAwj4rbFMRZWkRqCmkLa",
  "key10": "4ohm6anroS7sUg3TQT4GgQeh8oC9HFnWxKGavtzwa628aaeMgerwAd7KyxFa1avpqQjZweBsxJtMhvFyQyp8dxep",
  "key11": "5q3QduxyfWNgXWHiXGAJ7UwbkYnTBUmiTKJkRrFU6YPXuFit3Y1mRtqANLib7E6pBkojuj7bTuoPRVpoVzJKsvhV",
  "key12": "2cvxCLpvW4i7Kcni2NQvBLSzZSCi9UTa2Gp62gWhQQBfSq8Jkjw5EqEAQPizx5DEysa2ZTCG7gPPGCh38mnA5moA",
  "key13": "FY4vSkZaLPpjqhCGEF7kysNd38jxa5KQQ5oANRKEpSfXfBdAsYnGxiXbqG6NuxuA5aC39hw4YST8n98YjnmKg45",
  "key14": "3YEJvUKEtyQAKCCbREdChDgWPsWYL9C1VR6wDZKZ7x3wH2H1oERKNRVvN4PecpnWhd8o3q9Gp25dzt6a5e9MTWyc",
  "key15": "5jnkmdcSzSAZPoV2LcZ4ejFCaQheYjeXwqUjtDPFF9iZkh3T5fwdHdUBTN3Q958nt2SdK289M56BBeE2e98if6wb",
  "key16": "56EHBQPtxUDktndfgudCt3BgfsDDWjyMzdSitmRGG84Ve2VSqBDSkvqWjqNwvF2VP5yX3WJL7St4qtnYpyNubs1x",
  "key17": "B4Z37S3v3iYz896AbzbQkr2bDR6pKpbvHafYNUdRxQxxJ3Df5rnMPQ716CcaFbhFQkq6rNgzKsnzpaXya2fXU7M",
  "key18": "2Aoq3noYp681P2zoyazzR7Saai29MrdRiyR36TWqrEws9GdXRdcyeDLanLC8v2jyN46Nii9pGkUPRJah56WWrdNG",
  "key19": "2LswLs6VQoTDajLW9A2Y14eDx6J1unQwyPirqdjCGn7KJZBxWGghmtRTbwjY8ph3FgtNfDb7uwU85r8GBtdpFqfB",
  "key20": "5xmnmLcoaL82Hu5kEx26BozaNP8jaYqcmZvgM2AqRqyxwzzPomkRveUPkPEvDR7NGvVU16tWeUQrWMnLcBEaxw8G",
  "key21": "3FaKns45ViEzGzmaewJq78MM3KQFW46tHf7Zvm8kgjUbJKLL5osfmCrUXqEo7b9BVTQHEgs9th9tQJeoQ3mejWwN",
  "key22": "2DaKXjMAAtqPBHmCafY2zuF1UCwtyGYWwRg5FpGotDM9NUnDy5H9eCwJGGhjBaTaZXEUTDWtfNAQCgjQGbodsdUr",
  "key23": "5VjvvHhMykZanvFtVuGAVX7prTbPx6tNzCLSrKgrouX8T1imQsNx17WimczWQU2Hx1WqN5QNgcr8PBB1m9cbUKUe",
  "key24": "4nPtLo5CBhp8ktQPJm2VJuShL8uFyeNBGU4G2cbCxT8fCsMiv6Hd5VmC9UiFD357LjtFNYqQffYDEdExiQtQYQc5",
  "key25": "Fbj3G6FLBxu11VTQCt1q4ogeSgvoZnnZ42cF6Exgs5viQASpjfHEPrqzYdT4MiTQrGVLDndfTF53Fne4Co1DXvd",
  "key26": "2eGxyvAWKmaR8WpEVC2KTUsq7D1m3j4dhYWGUCUbqabCankgFqK9v3NQURp2VeqK59TotD9YvjnhiyDUSmVubmXL",
  "key27": "4AxeQraedVZQoTQGFrfVEsTezBcX2pszja4RBwUpGbsfcZ8A5B3JZJpyhoAEhCkaARsyfqk8KbzvWSyrVHVPo7hG",
  "key28": "2s8wz43ePrHXVKfcfwtAvvUaPM9hMRbsQTogitXNzRm8EvHiq1GDbaiRBQejkBYD9MzCjgM5C792zB9wCZPeqKqm",
  "key29": "WkujHFvsZrwKoqiNhSWKpZ22dqJYH2Hgkb9f6sQbdWAvY2uFWvRKhywUQVwUmR35doKsCVz1ojEkExJ71EB2vDJ",
  "key30": "5WR3caiZX7wJhDf2zBqgo1X7kkhp7c2zbKTRxjBeiZu9o1HiFZouSkjcFfvTE1k7ivjgrBVhZftzGGBpzyrTcqqB",
  "key31": "2B1d5XdmYniFmeS7ry2VCFqeZi4FETSEkUUV7gLieRbZYQTmc6sgA9q1byhd9KAk51NLoEhkQ84sru3xDE3Pe5fw",
  "key32": "3Hwwvkft7TbygcXTmrkB8pcjDNbQWwnb4Xff37fTCmx2mQ9yKCHeX4RYwTj4gz8Lc2S19uDxBwCqMA14UoRNAQG9",
  "key33": "4hEj3k48PEBsdXGtXx2x18afKcyZLJcwnDX93Mmn8SddKSJDiib9vJYh5QUvh9uHK6FqTG1pTniYbRZRBqEdxTXn"
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
