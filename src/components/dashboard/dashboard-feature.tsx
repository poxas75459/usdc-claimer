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
    "27qujSMrttzxyzZRwCkSVuNMNsSiD2KuEpoq4i3nnEtQvtJVsjaNs4LXqDxPHxigSLL4QpV9V34igq2KNnMc8ZkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gC568ryBY2XDw1QwoSKm8aT1uPAuEfoH8fwDuJM2GDHU3Sqf4jpzA1YkPSVutfjzgWC7fCB8impHh9KwgLGYojE",
  "key1": "4SaMSgyb5FeTGcZuoxgDyedW7YYUCU7vfphQemJJ1hcdGomWDjBk41HLTGZhmTBo6438mB9fJ2fbPPEDYjq3x4VY",
  "key2": "82ybgzLd2LDXNzNgR96vheWygziyagoK3yiRgyF2tgvqVk2CswsHmjJQ8D8G9owMxu2AdB1CCNp8ZMsvZnLHtEY",
  "key3": "448tD73FekUgpGfJ51qAbLb7x8DnP9QViA68s5vKzm27mJ25pPYUSNfbmL4bu1XobEVz5HEE2SBHEExymjqzgXAf",
  "key4": "5bT4QN5UDZH6ARnsYG2yhzjmj1rYsrrwpJBUsKUJBvcwL6m588ChGSa1uBHZAQnPYBFcCKuVNydziaBfmUD14b5T",
  "key5": "5vw6MzDm5W6yAYtEKogguxygmA6Y2DEtWdfDSr3d7KRM6mdmJuUUiZ9oyoMaQKSibZSY6HKUqzQkP5BbmmCGkxU5",
  "key6": "5WZPEaJcGt2UYw8NBYnvHR9uhyVtw5w9hV1hsS2ofwZZD18usp2U9PRpDwQPwFeSMGyFqvrgRk2hRfEf5rCjEUm3",
  "key7": "327Fm543LstSQTsG43GndNywVtj3cA9jKycFCBJikwt5ZSLZQxbfME5MR9qJX4i9m1Me2FbkRrSAzYg1VYyrSyqV",
  "key8": "2FQKVJu7no6jtKbtSVGJ1MjVSHCzc6iPBcrFHySY2AAbfrZa3xnmw3sU2kgmV3fuBEwwBBWP9tsQBZnmPZi3CQjN",
  "key9": "2VxJbKz99FM2siakTXWHRDDUFsrdU6f7mMDwE5qAcCc3YwFD6sn6gQWiwcQqyFnpRpvntDaCSzjumvcC2YBWoXfq",
  "key10": "3zi1oK1Eqi3vpnt7SdN5fhyiyP7285WjQ418h6RhUdsdDx6QTKpUAXixsoKJWQFR9uRb2YKBP6uBJ75bQZUdEqa6",
  "key11": "2PPcXnWCZGNJCnQsqwN6rbrp6XZRdrema1xXadNQyXWyGrECCC64im25BjxeEb5MCVdTtHsGPQoLV5xkKwFgYtND",
  "key12": "35RAFyQoChoYVwpX6jJDYmy8dP5aFzpvZ1JjgrWmuZSzH2poMwm5bbfMBNUMovoAzKGeZMq6QsujdfcDsBQrP9Lk",
  "key13": "5xvbTsD1Nz18VDbqbfzT6KXRbn7m9fRUim3xGAtEQkf4CatZJuhG6eXdxsQjSuAJMB6D5VNhidYZXVMdZYu86umy",
  "key14": "2yAEVxpuqeXTrufTJzqL3FAXiGd8rSFMb1cYDydfBwvthVqne4EWVAoCwcPYuR4YphybyL5sSqmtxrDtCKwDwmys",
  "key15": "MkV8JiExrK8YWzWnWHMnyCYPEr81zs35KVMkYhCcXnPmDUNGKQK5eNGCUcVXg7bMwWpdztcY5JHmZc8GjgGmrJa",
  "key16": "5A4v5qJC9kqGDjfptm2LeNFPhyA9vpwpHDB765A2j9WQvUvyJjDgDvq4LmHdXNdwABw7SF52MFBMS4oqP9ak1Caa",
  "key17": "3EtajMwwHf8rd82QiJoK1YGaVdHkU7iAXCbZmxpCAhBHVdqXR6BtSpiFek8TnXc2CK3LtqBkpVCMXTebGLDp4sXN",
  "key18": "cm1PFRAcNFj1A7mnc2PETXaxRL2N4LTtiU6xcP9yU24MKeC4ird8w39mqhhaUzSLX1vSUr4oj2tyLykvoRDCibs",
  "key19": "55tabiVGht5z66898zpCBbhnHJZPt34fUQ77yDabwtjrFzWYz5YfcXt1CWKWiCbbUJ6LdtfzV6EGdp9N1AJBd8Ks",
  "key20": "4n2WZp2gjrHEC1hftVjED3dj3euvEk7xNwY48G8Q441x4XRCG3vYFqFhHJyb62dkyYuquLVEmsnsS9N786Uv1upd",
  "key21": "4F3oVrmpY7P1CADEX2UDeK6ux8F9LiQMDmDz7W8KZ2d1XeejbNzpXb7Ao5yM4yLk9hy1piRn71C1jabmd9T73Y2U",
  "key22": "5MrvuPGwtcnGGNRCpiSqtTyAfppjp4o3jZxL2Bn4LCWPZ5yzBMEWBn8sYXUZDSddtp62CHmV1UrmU1VtURuX1qx2",
  "key23": "egkUw7Mm5tZQZpRa8FTFkvrCRu2X3xsXVLJQMWx5nG4Avwgqa8hbJZ7gW2ZzrAgUzULFycuc66bgrsnE5LF56YD",
  "key24": "yaqdxLqZic8cQ1fjS3RsdgkGPSLbDL59LE4k7rtf7Ekk829MNTabeTQAuyxG5wV84k581fZVkdtxRwASHhBZ8zM",
  "key25": "5ki5AXPsWLQg6Gh3QFcCDsFVDnYGXqAU25jkr83xbGN8Uou5DGbxm6hRUrf6SPkwPYgiaBBfXoMik9wRPUbtL8j5",
  "key26": "27Yc8PdVqQ6Q8BhHMrEbRsFV3Q5VPmR7VoqMEYK6Bze11kXdvxGvQCxf8BK4Usr6JEu2qaN1aMyLVMWxkSQ1hR7u",
  "key27": "cXpVF4QrSE6N4gcmx7Bwagbt8qy6nwTgT2EQ4CGPopw1axg8pHhiDxhPCsuyZhzivvn6Rf1BVJ1taErNTG4mtwB",
  "key28": "4N5fhDbps9djmUSyG4xC4HtJ7vvTAojSaXik5iSj6irZ1dpdd8RQvSzWuEsFhXv73pB8gh3gyY333pdrBTJnMEWV",
  "key29": "JpJupirTQpE9aAoKNh9jJpCVPJeENxEeCYRwgRQmkTQhGHVituaHRzx5HFG6PUkWrhR3D64PcY4RiQEWu7vn8rU",
  "key30": "3XF4YguJpTCaFnhZ1JxKzkzozZdkwsySEgUGgxTeUeWmrMfmB89eSvw1SJxC3nQNYCvZoo1vZ3g6cA8J98bZYNVq",
  "key31": "2ngwxVppbGYGsULeiXxct5m7vQ8Sj52pJTT8W5NiQW6jyEJU3GwBb8BrZf4QDRWw9pdNSsSij1xogrd5kr8QauU1"
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
