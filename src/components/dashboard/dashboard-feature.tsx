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
    "rZsN52ujvB4jM7vpKQkGe4rCfQs3u7J7YdkHkHSSvE3Krd9hddzh52HLx2FbDN6tkCC2ZPFe2AWi7d2YphHyvkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2ZFqhhZqKTVtxG8eT9BrKMnZbQKFqNJ8d7B24BWJNGH8ADYXu8k958cb3iygC7QwBTnK3L7RzXMix9iU2zYDSp",
  "key1": "2vzFhXJBnuTE9MY5b4MbQ1Hz1t9ZZ4NuKt8kSJxQg8pv1ZWkbkYV8XeURBpfwSdvjSw2w24PZe5gzpRHYcbdcB1V",
  "key2": "4aZcqSE85M5uXZ9mNtff6fBzMRgNvT8x7YS4soVhx9LQGz3dFtnoSunGLVbLdfjPcqczyunn5q1R5WiNWkhgiHf1",
  "key3": "4NBu1n4F4Ey4KDC6A6iwWqntjJe7ZVxnELFDVPyHyyZyp3GZhQ2Kr45HnVJ6m6qTsPKommJKnKAf6tTacFYw67ix",
  "key4": "Te5AJGptYDpRAhvwkc8gHDxQVazCnDi7tFMTmRXdw8UmqaH2qi9B4oMW4nPJBNHwjdSdEZRZ6wo88kXL1bgytvU",
  "key5": "4ieRcFfPLSj9SQQPT2KSNuncEaxSs88mucCP3mHBY42wne8dgvYsGvce9GafAkXpoDpZprSh4qkqGCFBHRajDYLk",
  "key6": "5cPDn28VCWTsgzXmKh8W45eLK1VLrVa3Gv8qUG6oASgBv2E5zUPeejCgfaNxNZ7uCBpLDBg8JqkkM8PE8j1j5aJi",
  "key7": "2fsS793zMeLRe3bVjofS48xPY8Mka7vWxGe6mNWrJUwJCTHNgqgeEKizsqTWNEgTQ7FH1UL1tZjTT3GMbx3AAkKz",
  "key8": "5crDtQUnGPcH5592VxnP9GZeHkGPq8ZbiJB7KjGnsqbToSkNwVeCkPXThV2Pd6T9wewoaWSEvTZPdEmkHZWoCheo",
  "key9": "3jfRMtDo9ekmojU8Sje32yDmD3sRFswjcrLrfnYiM88WbH6JSfELVUp4KPqfFDBmWXVWwgGwqUkyP6Mwhg2TuKwg",
  "key10": "2x87BjaWiwhCv7DEUKsYrzfiafyzFncRdNV9Ny2NqKhU7eTMz5jfa97MPAuiMKeAh1Qe4rSr1EK37fweMwq5R6Jp",
  "key11": "5fcmdW2WS6oyw5vzAS9U6hXCwBifHqLopxeTH1FpCxtt9evBKBisDtTcbBVSXj7hJv8uJ8Rs1CBK3C1r9onbezox",
  "key12": "wRTqmP8fYYkqdzAp5pPH46RsqmoCJrZ1sdVVpuMosJX5ZEBEzZ4NaHiroC8nX6ZkRyg8UUWGfdouk69WGxMZX9L",
  "key13": "5ip89CMi4HddoENvwthZxtvuj12Ybd3JYQVbcf67kTfKXxco3cgFZaRKsn4AcSva9P8ztFxYZxBG1uJr9pj2zoa3",
  "key14": "5jcYaptPnfaqtQBH1wboBGAoAKjefFkjfcxagudYDfkiTVWJ7pV5pRtk2tzCsk9kY5A9HbunZY2bZtd4CKUEK8Ht",
  "key15": "4eFtm1ZS5a9T7GyCBxr8p6zuptRHX2SzmM8J8ENhWNoYFt9u1VnpYddvchQK3KtSLxxp2i9D8eDuMvubN7mjtS6Z",
  "key16": "3tEb2uonjfa2NexcEbofpTKhCZLbfJHMkNgL9vo336s3pZ8qwsvEL5VoDHCuoDGtyEEUtf1NZfwstZLt6z6HKw7y",
  "key17": "5bbgFM8UcnHkUTeCTrMatHxgGY29B8vsQtjo1LPNvMgBo7cB4vVD3tdbG4jixcmVcAHggXV8HsnvpzS5epGpPk1e",
  "key18": "HGSazT3KvYMjwdTEmVdfPghPjBj8BJ1JrgGv5FbrSBMkQBYz9FsUqRsGHGciN9JJpKfVE4DLYCaRKAbvnv6qpmu",
  "key19": "4du3Xw4VLe4WYJdxNnKAFsvzNhjhVyySSuiynFNba3VrKnKJsLytcYLx38Chcfwra6Fio8B75phS1ymT5e8WSGaW",
  "key20": "3HcvAiL1feDKXvZHK5xM3FvRzBuoJpX8nWCP38TripEMyExWLzHJbxVBQcJLf3CgX9mPfXaBqPs7Qn9ve9ukrm2B",
  "key21": "44mmYLWcRUhM15Akys36AKsznmv6yecWvEqj2MjHKZ3tJfujRZxRCGnmWr8UNAUSSFAGUPtZuejzvjySYBTEViga",
  "key22": "2bcKf628Me4hQQ6w5FTX3W2aGBKYdqAHYH84hci3EENJm5C5vswME9zGQv6xTqx3PWuWpqTBpd8YzBZ3YaMyNkKC",
  "key23": "F1DM7v4GKwwvWEvTmcJZc4uvQANdeffZGoWWMDuWPQaMoj97MkqZSFXMEnbgwfyM5R9keW3xKgKwDdaXKkkEd4B",
  "key24": "2fT9FHXnGJtmidMiPghMxNoeG21thHGeMxbnv5NW5Su3CrhSmbuJDmVMy9eD8uGyJ2Rd6ynJymZNg2V2Kvjfk9ZN",
  "key25": "GYnpT2y8DDurPb6Xvse3U7a6ve9jgn8HRA35MJfWpbyn73664fxu2yG8EdJZhSD5NxvSwnVT1muXcLQeaLLEWGn",
  "key26": "28iM9d1t2LEBXtguUQer7yQNNn2S3suHmJcgbRkmTJF8wgbRqyBKKesZHFLLL6sFTb1dKmp9urWfZiPYaPyN7qbF",
  "key27": "4c83gxpxHQpptbmzW21FT6kEnViVeHKtFdTkjZoSoLuK7EyntRCzFKit3PNFKePXbvBt3ZA75SLxo93VD1QCYN1n",
  "key28": "3SqrJdojoUZDMLU5GmYBjuGTsEcwFbwyCBAevboMVnB5BKBwZC9jQBguCzHomNauCcmGeYvqbFu9mqbDERSKacDb",
  "key29": "2AymN1rFMyWWEsx6TthgU2T9cKprtPzCko7Vdu6YiZQKc72AteyjXyE4dXkuy8hPiKs2J6A5meumD7G7r1mTSmGf",
  "key30": "SwTKN5wXmtYJt8WXU747Zv4jR8ii4HfDoYcceZnu6JRTDJ6Y5Y4ukGCGx3FTyUbdZsse4u7LRXWyJKSchaV4s8E",
  "key31": "2mcEAmefZxswx7rDvvqDpBvy4WN7jtfF4gbjfWzvz2NteSwRtBkrY3xubnYQnpAegaknjePW47LG7ZZH2MtoKZ3o",
  "key32": "34cpTpiqkVd5bnZShT7yfW6ykZWZ64kHYthjbvJ3KgW3DwGaBGXEd4xQMZMJyNExjjHh4LUMvwWvkcDZpRiZxbvi",
  "key33": "f8o3XAEkW67YDUcjmC6oEYwTQpZZ1TjdG6CbG2FGYCBL8s8Ui5nfYBnYBhDJvCJ65tQVeGeC1bBZHXcyCVJrbyo",
  "key34": "c3QMwF5JKHUPo46ssPvQkvQTczRZMKE6RTPJtVMsvKY72QyXfeb8qeYp2kdtSRbiQaKzfrTYXZ4to1DBEp9WYD8",
  "key35": "gj7Z4MT2xuyFT7ML1doz2H4GkXcxCATzCGZkixa71KztTqJmDLoFEsDyfqsToG9nPwVwQUEKHxiDvK3emyVpAL9"
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
