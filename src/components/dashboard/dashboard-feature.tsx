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
    "2gM7NbHX5N4cn7ADA4a1pd7PrqBEiRU7SMPtwSzUHzDYtPYnwXk3yrc7pDbKZJho1nsRznk1Um1rpZZmaYE46GyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3iS1R14RnovsyYC9cNWkP9dBJhLshEmZaHHmxHni74dWa5RtD7Cgujtq6c7UAMdU4LqVZvcV5NT918denYBEbp",
  "key1": "4A5ECwzYB25EK7Jb3T7nJ4yqSAfbJERHGKoKsTFsVJNt69maaRmKRuWHKtFeJZfEat81suPgFsJa8wwYJAsTtuVc",
  "key2": "2T6TeJ777kdexiwK68Kg2CRfofdqBhAgkywWnxapav5WQazD49bJMTXEYRmpCQScnQdc9ZLiegrjpjJTUGvs9JTk",
  "key3": "5ZQgppAKniAFLMX45FhZQ5BS4UQiDcBX7qVAWd3sL1azy6QEAZ66kgDnWan4C1ugF5hqiyVTmm5ZsJYchLVnkrS1",
  "key4": "66UtZE75ih3P9nWU4wthFqbDqnW72oUF7dL1KPbsma3VUg5CmxqXpCRD4CpJcatSQDxmfWNVgf1xq3Uz1okcNLYd",
  "key5": "3KB1MQNuSQejUEj9D4BzQn85Abvbm8A6A49H9AF17WRoNZcLxtWfWWYqUPxbFQnGnwpxwuDyfxzuF9ovtWK73RD5",
  "key6": "4FB91sCnmM7Xt3tzu4boyMUtCLNgP7J2u5WvWY2Eg7zaREYyRVX8eujJ8ZwULkPff9zxhPKsfmj6R7XAoAr9QRy8",
  "key7": "4mw8zG1DqHyQ8YUdXwmG3FZD9mEfEYXUsBvGjXXmxWxSgoCCtqyr3DJvrFD6Z5SWUTLB6sWkzJJd5LSYvjnqARXg",
  "key8": "B82JqAxkwqqYLqap9NaEEfBAyfyy1er1yZspgYjmJazVM6szDHzzw934T8AQq3D1KNsHe3y2ZzQTznok54kk3bQ",
  "key9": "2yKVrFLA66nQTdkEgcoi7FaUtP1bUkgtB8iufn3zNtA4K1jLE65imqjJ3jGoo5GDjD2UoitB7gjmDXWw9MaKH4V",
  "key10": "5z1Be7pc8tNxn1MpF3NB37iDNstR1Wq3Yq53LnmLhjncLUSYZQWEaUzHStL7Xhic4Phf6hznrwaZJnyHBnQCwu5H",
  "key11": "MSnEbHuPb2Y5EFNb93V3MXsSsvUM67NZJXWJgzXqTwyeUa8Pih4XkYPEXm8SEjQYCNx9UbCUkb2nsnGe2RLkXtb",
  "key12": "2RmrTEQrDFufLy9By1a3idPQ2APFHURUjmjHbuT44Vb4F4mKxG4jRpL1Df9UvvVfetM8hynpTWY2662mY3Sd8oiG",
  "key13": "Ay7g7jRvZm9EZaRwFGMfwiqyyXeDj8UiWEbuVvigzqK1ULKCFsizk5wNnRzfK5R6a7LvJdfFnmQmHa9TgnrgJH1",
  "key14": "3uqERG2UiXww1TqiVYxWZyZ1vudgFWGsiYwrntvXQjtx5iKTVj7vKA1C6xTMVwASKD2w1rmkJEyLgDTs7jnAVQ17",
  "key15": "3tyGgkcXcpnZoNHpJFPvfYWB3CRswnemhTHXRmvVeMJoDAzzrVescYmLHBWDRCVwm2KZB5fGKXtbuSt6iWR5wFWu",
  "key16": "PwA8WFThYPV5zVGeekUeLLo6CR9aBcmNfB7ug2dgD2dmstFAyJh6d4zVXg8JFZBNQrMbPdWvz57tRm1r6jTu7YF",
  "key17": "3MD49F4YyRTtsFEPvg5kYMWWi5MaNqRgenRsrMeTCxD2EwXVqVFXjSpykZkd7MAJE11DFLwWggVtraAHLctN5zs5",
  "key18": "53w95zLNt16xokeF3bdB5SJRyxhkRBNXhbSwxc8Mv2uqN9jW1ZrDt9KR6NShTihrYBSdYHKtuW1HoBSTvft2pSpM",
  "key19": "JkWMA2RsY5rzWpbdK7gzLLnUH6NzVA3jxg6K17QxCSaKbFAYdCLu3oV3AoraaHjhWsuSZLtkQHjZSUxbHtkxyuV",
  "key20": "4bgGCYxCLgAjtiNWQPUo2adzUxGxvg1ypeAzw24gDEBeXgbe3GmCN2PdBfWJNVVXSge3wwkUMKH9RTqv5rmZyVFB",
  "key21": "61gikEsxNc8wcnGSxeoGQj888DDho5D8Mj3u5fxhiaL5mM9W5Z12D9JQQ2dJXfgZXhZ6VhJBrp8SJhzK4Enf5dSP",
  "key22": "2Qo1DYwRf2cxK6KNZCfmhoWU2mLt5WCriKJ9ZUqt4jhia13XWrfRNd2vRpTXYLzu5McJWRt954GE8F4oUiQfAmAu",
  "key23": "bVXnHcNqDTxVKW52iW3uRuJxJJnP3QQLgpuLiunTKy68eswCMDpNxJ2gpoecwn4gDnAd8QR72mfumJtc4zSdFTM",
  "key24": "2x4ZkKAvxB4m7282MNJAoWE3Xhda9784LYijCCc9V47JgwYZSsiSbTPQAjAbXrgSygmWSVh2Chmmko6zb2kGAGgR",
  "key25": "4ye53m7Au5XHKNRtUSkt1WftCVNLs6eoKVfpy1yzy2pr9zNCa89GLuBtmM4Bi8ba8b4njysRC6cFgS9sAKqQ2Viz",
  "key26": "wKNAqxHL4j1TihJ296Mq48UwH5DEY9a9P1ELVsYygewCUn2RkSDKyLtMSEXgtnJZL1RZ18oQ2f881nzCtt5bpNK",
  "key27": "2swugJPV4DV3xRuxummgDbPYKq7xgsUHDZ9d9uuHFcF2PT4B8XppgmQfW3n6giQXGG8Hq7G4PqzGeeA3wjYaCujQ",
  "key28": "5vu5rM7pP7bYrdaKjJvo4ywxDEga8qijN8m6ad8Xg8v4k6UUg7ZK1ZzNjDoNW8BGQeyesyXEErrz3G4ABaBVMVDN",
  "key29": "3hFpRrC9YDa2n6kddHXfbKfxJ1YUq2peRPrcSEm9KAqVUssBPuzvAaygmHTJa7tuSdkkyrv2LUaL6HmXLRhZ1BHX",
  "key30": "xxEcxoaWJ43C9hFkA6Cmk1TTRMqLm21vmciueXDmWhHZjHLqD8F5j51DDPx4gkrFsGFFL74HrWJoWFXQ6uzNcTv",
  "key31": "4dMYCfmRRSfsvd2UHe57ArN9PqLnV88CkDZvB9mp3xkPWLuB8wBG1NQkuUAUxedNwZVMgiXtPF3NehcbcsRUQTPf",
  "key32": "2zJhsPjcoHoBpeRwbuvsB8us6dYsttSs171J1bHjKRBSbWXjaj7feRXUTDtqc7jmGVcoUhLYwxYnsKakpuoME5wU",
  "key33": "2EKoNVzDb1jxGDTyx2Le8Y1VS7R2ZHYQJr9mjt5LVY9cHDmgDtk7sw5xcLLUmk95xiKu7jDfrQkXCkQFjdYbPzH",
  "key34": "kcbnBGnttSj2nEeBcYCQgnRxUvTD8j16xkDmky38Aza83pyfxrQFDxnbDHi8gwRMyW33KECXfKD8nQCCFChFq4t",
  "key35": "34FiA12SA3d5RQdnhW4n4Vk45YjXUG7eivYUdmHa8nWWZpdAq3mYZ2bbCjzwdyGm6cSK25EyzCYG88o19T45tupk",
  "key36": "46EF7ZJqc3xveQkD8RFjeHSf2qTWFJtvCMmjAXegzvUUsZtfA35v4HJDePCZ6r8KaM8ji3125UWaNd1GFMBzEKiw",
  "key37": "2bBQnkY9L9Mdwm6xvA6hvz8Y4TXnUULBtqYbzL6jsM3GSwYcARpZfLHNE75R2hmVB4yqCr4QR85mKqc9MezZawPU",
  "key38": "5ZLQpEsfgmUMcAikw5oTUQ8wdXYhoKjNuXemaGmrqPvi68vefQ3ahS1KeWbNPRM3h3Hmn5AnknY78KVVeE1qiArT",
  "key39": "4TmRZ1exabDR7YwwegA4LFrraBhRJLT2TGABmeUP6crGgSipqV4D1DUfxissF2ZvDgPdJjikpGUzWgq9Pmmszinn",
  "key40": "gfn74YUiV9Dck45G7fGxiCqGetdPicNWhRBVUGyCWAsdLMRas5gwbfFEfJzhUk5nCUCmFBXxerFyY5aoTfcn7Yw",
  "key41": "7QXsVWvScW1sTitxSLWVprqVridpHefAW8eKkRSF3B62d23bUWJm8Q1awzQ5huibCaaknqz9RT42kCw1hmMx7uv",
  "key42": "3JmDBwq2dcwDVFSWkTA3iQWUqLWeSSw94jCTu9x355ViHtirjmcbqEaeYzRvvYV6kAkBoCcPd4s7SF4JJP4oKPMR"
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
