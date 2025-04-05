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
    "4SqQYZn9tnv5KaaG5m4LnbHczy6BEHWkRVJX3QRVW7C8YtFe4kxWdpN6HjJ1UQRkbfiXJW7Mz6osXfNVX6bU34Px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRmwkwBrcqfQgY8KaSAyi14Eh61693DeYhgj8aHMPAqXLri6VbLQ283R9trXimDSmYXfn3X4rns43tJG9t21Q1u",
  "key1": "4UdL7xNQbqUVbDK8v9kJWWugit2LTmmFWz2zvZGqTtsgQUXs7xxfktN4VQEHVg3kTxq4nos1V83KVHfAAHk86Nvp",
  "key2": "ag3qLjdHuCLant3azXqZdkqKxCGMm7Hz2kEP82fQyEqbbnrJ8rVSCW32zCc5wasRNqTim89JgXMEB1bsG7h6KLi",
  "key3": "3F3kcnezxujWprcedevVTvT947iEG3NiauNANQNdSPTmf3gYQodwUKn1LrkC63tFtFVKzgp371wgBEhoWM7P98DS",
  "key4": "FjeiuWHJYgtoc2Z45XCYDE9cZp4D85xsTXh48keWbMfvtdTuU5pJb8XeCtvbUABYPUQikBEY9U7emG81q48eig9",
  "key5": "iVTC2qhCEEhaYyvYoC7jPFJm1fSs2nzkRzAh2MNjwY6D6TeCBNWQ3ForwUsFbBcvTvvJPNWvSSuZhTgr94u24Lb",
  "key6": "545J4D5JFLwYmkCgNSNjpciUUjTtvQnY4yufCpGEfufqBfUzW9kTVj2MwGkh3SJeA56bo4GGsUJFUDrAAQ8KVBzv",
  "key7": "b6c8oxr5uZwVAhicxVeJSpJprZXngfay2tJxkADMHrsuJ43voNVVFRUc9gVVDA1Ras19ukbKWB2Fsab9VFp4MEo",
  "key8": "41LndbwaFQ4DPMG61nVp2FycPd2n1jPxXipFBMhDTBQdXf5wSMVeo3fXkgVKrcMNBMnxDLjFkrJKgzyJF7ZaFWgV",
  "key9": "3jcy8hfhLLdnRCmvhwpb3BZt8DKj8HBdNX6NxfAThBT7S8n8B1mDRpbxefZXnVPgMZDzronHPh5Xx6KL2bRo7j6n",
  "key10": "362oq7TWQHiU4p25UH9A7PmYDQdEi3RwHFePJrDo7uNpLc2ud1dgBLhqi3hSTchsQf7bqEq5WwjmeTF6Gb1Pbv4e",
  "key11": "3Nv9tuEprxTxFv7LfJYcPkBX4L3K339gSNn6i5KyLa1MLrmnHFbs3GfwyikjyPbc5puxfRAKYHF72FVGkd7VNbMh",
  "key12": "4wHLidb4Bki6Anm4CrZGsygXbkeXHWnDP5tULmL454CqEjXuaq24DpSgYVFAeYCacfDbe3zWW8qNSCwmVkgvpw2x",
  "key13": "48W5rM8Y8mbhMg4qBXzYtkKiuFQnHKwcNyFBuya3utxj7xb757iG2xu6ckirV3fQsXFwkk5zGhamPmj2nphn2ZpH",
  "key14": "4nTa44NWnyJ4rQk6VP7p5kK3H4pKp9RU5hqGtnVSkvBeigoNr4tsv3PH1HdqqobGXwoARgPwpydKTHtu2MFPtMLM",
  "key15": "2f8ineuLQ1kH6AAzRcAWneqUra1tRBdGhBPpR34FSP59gUao5Aadwxqszrf5qBybi45eLAn5JorbY7sghX1XGZcL",
  "key16": "3ahooXkK4KJ468UYaNK5VpUAuWXD5ZioC9tiGFLK74nA2nKcq9YF7qjvEKevS3AWsDBYz6TqKfWjiE6whEAVbsQU",
  "key17": "nFGSpRqLeqoKnV6JPfuwsdZxko4R4k7NKpQogHbA7gHn6n1ku4fZxGcJg1HUKVHrDNhM4r8eiBDTF67YH8Kw3qy",
  "key18": "wJEPDLLUsEtygnUH8vmNtBAbXeHYjs2uGKpujtnBHKdfeNdh5kgaDGGjPPCXsnkV8Xq9GN8h4YaFMxhUw7g9YYh",
  "key19": "44Af1kkuqSpMBv1amdbzoWFzKa669nrEgHDVMeuFR5QQ15Y5oDUfxx9k7QXphpWm39rRcnmd5Ww84nPuAZGmksyr",
  "key20": "6629JoixvH4DWqSwyx78biBixxBostsA3r3v7i1yFnut6e1iCY5HjGfPojhfmMME5iFb6cAUoTK4ZcCr3yMGkn9L",
  "key21": "5iF5NvmGPGdqrQuakunya6hmW17X1EyKPtKtFXvCkxfcM81pw9BBb84ZaZkDvU5WCKoLaxeoZTk24R8Pjk8dZuPF",
  "key22": "4473bHPP89S8k72XEoRdN5Wqv3Za89KnAdSoQimDCHwBxregrgSp8cadj5b7wFq6F1knsskSMpLEFKsuT64VaCdu",
  "key23": "5qRHdvdTT2yq8EGnzZ2J7Xp9QftKfTy3WdRynEmCQmXeAR7MjEPs8WeDFxy3rCT8qLUbdDSadqPoeiypJDJqA9gV",
  "key24": "445WrBvNxEVMXHvhMx3zQFdgb2ARHFdoR8rmd2PqPC5ff9yqvjBzdJX17BZScZ9PwM4nF4yXXJyZRtnF8wiyGjTZ",
  "key25": "35fc7d2fbuEyGKhKrHUJNEkybZHjiUQ8Lq6FrYLDKwHLfDrddHdP4fmbJogQmZwtiC4Q84v7VHGtYcRW2QHH7m4z",
  "key26": "LT88rYjCSLuNm3CwrrDFxoR1iygGq8Rb4aAUDYs6TVmWev88BTug71s1sFeUJv4oXkN437cdr5JVUpBuhssPy6a",
  "key27": "5GCR4A7BCB5KbQJBp4g91nNJ9MqAUEcjgB77jvjUKMQ9TJwDJE7t5Ve1R4oeqPuwNjB9xfF3jqvtYuJpXFtRJGFw",
  "key28": "5rJKni491PQR5U3by7tYesfq8PTZikehHtxY4QA1mTbTPrx52xM42GFT34nbPntjkP5B9th9ntCHttExQbtZSnTg",
  "key29": "3K6PjN1zwpNA13Sjeid9tjEQuzzs99vP4MNLG3k6BKeoEH3VvdhSGDWGzST1RQvZi7qZfMynSKN8LidfGhPjDk7s",
  "key30": "33K7P5cG2sWMC7MpbtSWRePvERApScXCNMtRzbqSu84KjzDHngV2E1gwZ9B8Mr9P6wtaq8SrpfJzP3aemCumnTgz",
  "key31": "3yeq9wnr3tvJk8FeubUEbXNhgzfxswFSmx6f3eADTEVy4NUqvKJR9KU96kSzWNetEKQcAjPkmdeEDS32ieYDSXjv",
  "key32": "4ygPQAZTaEhgUnBe7LGT3heFFYoYLPDxDcaqPfjAvRom5LEMVYMAdpHHsegYiU7KAy2nHCMmeLcPrNt3Lw7qiaFp"
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
