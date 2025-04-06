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
    "hfo12g7RaTMxrxaf3kMgu3ZBpXwFrC4p4chU2jCRaaY5j9dFL4k5HMABbtWDYkzjsjuksTvNCcikzakFqqr6d9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQcVhTWnMw6tSTzrwo23Y7nDaro3rvykN9YVWwrqkJyybwvXE1fBDuD37wXn9eNV2G9Mf4gKArZ5dpRMYUuHko7",
  "key1": "5hbkzF8cjY9Cw9SyEMM4FskejXVrnUViiuqkzmuwtF91atrwNjcUBezAuXh7yDf241ZikoDWoW1QppEzkJHWwEq8",
  "key2": "E93YdJQYKxmVEsowwmga2d1WPSaGBBEyx7R1TAaHG9VFw9HmnZ1F9xYnKRL79thfMyKbCJtEdCw26AVobHcfXfe",
  "key3": "5uDAtoyxHL9c2faAKXeUsf18Cqjo8ua4kpcmnf6i2BhkNmv9at6bTp3hxRBxqMGqBZZvwtXE8krhcgyN5RiCFoFD",
  "key4": "3N4M8deqJ1yDt9NfKPBV83WnRU9Qu9E5KpGgGdNTxVG9MvhHVCPqbkgfR1fy3t8UpErnAJJyhCtnDqNNN8PqCV4E",
  "key5": "2uRRfpTA84hofw4XwUksBGktdobdF8FahvwYQ5FHxcpn3jwnbmyUWmTEiWYYwGZDHLpCu8u7FyQYFGWsYXbKtJvV",
  "key6": "VqyFqctNxA5itc789MgRGiV5em1wV6Cp956AVUJYhQ1eyMzVqjHPfnvHpobwBFcw9oNNvgEhREGgFJS6MSeNoPQ",
  "key7": "8gujjPNcDpRBAVEChrusUJUR1Fz4AeDtvAdcYeTfKAgRd4dpAd1kmUAdus9GK6g2yYdXMX73ytXrQnSV7jkHgVd",
  "key8": "34UdrYbvQ4GZPMRux47JGXWPqjhaw5PXCzHdYCT8nT35Ba8zbGdXM6gzDptre1vEgtYXLiuqEaGMbju5hACbBg8T",
  "key9": "2ZbiSRtzrWcqmgN52v9CkwhVjaRUZiSX7qVmnZeYVZFvBXR1MvWcj5oA9HfnJmsA3rHAihceWzGXaDWuYhaAKtck",
  "key10": "5iDqzgVNkqMvM2MT3V19UjnNynY4iFXVuw78ZdVoYW5xrVqegU5SHVSToPFQ2AgfG3jn6B6wxTc73M8FV4vTHDFw",
  "key11": "2TH7TZRb9pa9xTbKyXpV4tYCJc6cC4Nu7EMzMk4RC46dYuWYcfhbAT7M1fkgNpXcsF2UgWBYtJLv36G3i7gZZ8MU",
  "key12": "45jiXTbSrgJTPt847HV7vhAyz6TB5VRWYZHuegZXRrRD4AcdyzCqkRkWj1cJoU4MwW2hCjpkB95Nyt6arFCBT2Nz",
  "key13": "4oKdJYCcQ4HPNR2CiJdTBRGLDu6qFqp3Bwmcge3tQGjpUeaLFU5QgZVJpDLw78EZA3uYQ2QigC36f5Yt9aN81Q2w",
  "key14": "2y1CtwQcKp18WPKGwd2JSciv2Rgq4usemFjcQ9FF4DxncpPTGmiqLx9NKt8Xhq8giaTn5EtFBDVFLRrGGtJPuyQn",
  "key15": "vx47qHZzRDBHkXx3oLzKk7u8PaLbEYp7aRB3X1hRwWy1tKjUFC6DzU688cezVaxcZUxsdN9VezMUvno15xYunYZ",
  "key16": "2kKKLJPUj2ExmrgMjZjcRdFVjchRq9JCV79qfxCjgi3kF7PWX7533ZBude23oMGA1nT7CQ2WmnamTcvRx9CyFhws",
  "key17": "8ZaQYFixWAUUfdfvr4qPBW6YpDxXCQFyrUvMB9CNzrNTMnaysrwsLJu2XQvoknuZi4ujtH7CyhYeX8wtVW6Y6S6",
  "key18": "34pstNqyvtXgin9czVMsDUmTDfn6TTm8VdPEYCnbVHKiToWCHf4bMqPx9haaj4X61PKBU1faCU2gzZGWtmgRduPG",
  "key19": "5sDEUKqWWMdj6Mt7ThVsAJv1gnmw7cjQLDRECFLGvnaFzVDuLamqaLctq7LSpjMnv4wKr9DPBJMqP9ji5qzEqgbA",
  "key20": "4BXyDApNgtsHtXL21UYZN1ERE8ewoA5L8AdrBQJiAa983tgy6XS4QFEYQohXsAzb2Kx7N1jdRiyTSKFgz88f2MkK",
  "key21": "3VPJKJzCJArdJSNbF8kpP3zJtnhpiDWBbpbxgTYDXzqZJ26h1gEe8Cxg4gMXYZHVSgKYymBSJfQhoUM1CKChto91",
  "key22": "2q5NDruMmpd5ndDiT4hYcvvVUEW3PLKar1bxRjtJebeF2gY52syXV9iX4iK8A2ztTdr9cgmxcATrhpVXMFXEvQWq",
  "key23": "28zsgrTskybpztG7DjNeZUi6jRGLvfgoCsCNPR3e81y8NGTx4ECwXuf1VNZvZe6ReDzTLVbeummzfHmskM8r7S4u",
  "key24": "2iVdCHHx3ZNLG2bB6UCojzeNKixZYcnqHt17gabKjHdWJ7UoHJ6jCoBKKEMXrDpWqigzYQhs5TZvRxzGYMC9Sjfd",
  "key25": "3qocHoWz9rbshcPHXmMaYJtQjP43khNaAGE8wfh1AabV3No4DjwvBqrjXvy6FPBKec7NDAqF2vwqBUFHCAo2dztS",
  "key26": "38iwXATX39UeCahjZKxUZqC5Q6XgyfAmKWhRh4x8nPVmX25HUULMw9wwTuN42MEinizNmc9NTb5QhsNUTSqSshpy",
  "key27": "2TGgfPamz4m2A85ZAFn7mtUKfataDnPYzXfsnnQ6gH61rpanBjy6W7xk5mVQP7B9Ui9ncQU3q9F5BuSNZu1x2B3Y",
  "key28": "2VnEw1SMo1bfD2dLJfMByd1wK66Eq1hcVfkyUC5qoF9my99VzT1De8Yo2PKUduK3YY4LwJ6Bu8UmDE9aHiP59sqR",
  "key29": "mmcTQ5iMhM4m8fSNsZqgKEMza7QpzJ7VhbziSnxrL5aTeGz5p8X9T141dP3k7pqKRQQcfWqa3oQp8Bv9VkTmESr"
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
