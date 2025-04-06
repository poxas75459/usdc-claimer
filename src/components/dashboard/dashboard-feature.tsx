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
    "Xrc1cdDMTXGod8iGu5gXBsJDZwL4chkue7vdoboF6UGnFhg7KV163b6WaNSK1CamtSpxu9BL2mCzkzAaW4penRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxyYmP2v3iV6PiJHJeDk8cSUGyUc4ECmzGacjY7j7kfeD5wDtBWDyuGUqDNPhMhTavKyNtP7mEo6TVNSnj4rd5r",
  "key1": "3GQtfCKctrex6BGckVzk5oQAvpjxpnSkLuoY44fMFP6Ab6vEp3GFFmHMY35GdcCXeCumTvnvhLgxzBWASF424iBx",
  "key2": "AssnvefRNWJVUuCgeiwHqBMQa6bKpHCsfwjyqMMBqS6dP28a9R6jRAhNvTFfQg17r9cxGNkCTdvxU4GRinYKZG2",
  "key3": "3HbZ7ku9vN8VkfTDbrnFAdsJnjox9Awb3kPC3TyJvgB1UuqN9cRHgVKsxRrDD7WhQhRRz2U7Vzk9K4yrjSwVAtpi",
  "key4": "4v4YD4uRb5o7KcX8fMj5qJXFtemggKgUQy6nLkJqjhGhKt9FspKn9nVMNYLt4P6z7QrRuuM3rbbKJCWifBpLz1Sm",
  "key5": "64TL2QNoDEL6utLtm13SAgYdFBWzvwHyZzUivJYcqdXhJ8VRM1EtMyYisHVfJGT87ZtRiWCd7of5BrwNsfc2mYWf",
  "key6": "5qZFNJ9mPiCitfyEeNdHaLj9YSUqHmRLdwoEQZEzQg8z2c1stKBjLdgt45kTPnGS8htEDizHMF4kv8d24fyH1ked",
  "key7": "4ZpYeaXpEQYnEkPQu1jKF3Xtgv87PQ6wvMGHQwBcuZJoCxoAseYBdKrEjNVfkCoHUrcU1d2FLJVWV2AzMmvDvXdP",
  "key8": "yzSBrHuafNDCfuaacZmE1MKNT4we4qC3tgMAPgAJ8DpGt36SzzW2nkBEXu5h5ygsXkYDRAeHbswNhLncq54DCLm",
  "key9": "5iRbJUTbyn1rpYEz3mYEirmwmf56GLrymfZtVo46CsVnZn9hyTTdoEWLWFskax3EFz2SM9fYPmBeFNvuwgQzyyuq",
  "key10": "2sUwQxQouSUjXYTJjNBbfQhbMWpmwMghPfi8Fp6MpWydSRHPtfvycQwfMuXcXzG4UYPpayBwRKCawAazixC3fLM8",
  "key11": "w59TfiVVhg5wYKi7Fam8nGACNhUkQaBBh9MKosQPtn1EWScotbPQXLRf28GoHiAuJacKiwzxMfoRvD9eweC2jQX",
  "key12": "4aWF2MzV4w6qxmpp4Hwh9sshE6h6oHo3Bc2G4TpEsBNd5nnvihgN6NsFZgzmDGznkwTjh1F2KcNjfjgfDED7sJ4t",
  "key13": "5NH9rnheeQfkaYwveg7e56bQ1JFYUukNkVUaybF5CnX7eEsrJbCCBFHW2GpHNaaA9Jpaut557nq2iZhxX8h7zoXP",
  "key14": "H6PxXBvRLv2diGT4B42q4VyzjPLxooYbA8vAsXVKBkUeL3VbQd346PT33YHdCqy8j8X8VaAQhXyuZGrSGL1T25K",
  "key15": "4veDKXrcveAr6Sc9PZ5ezZBHEaDrh9wCeZagdeqQdFX4RWZ8sonBJqreyVsKGMXtrRsR8MW977Kg5c9WJsbNpz2S",
  "key16": "23p71EFL8rboCoyypDxbcbH9om82ZVqgiBExd4ZMVebAFMpDs7fPV86gUVpwGz5Nsb15woTia6sPPPMPdXf4VJjD",
  "key17": "3KSiJNjhrYE4S2ttiCiZQA6SmDxGuQDW2TkrXZTGiLCy54GmWRPAjJQ9nPvfAffGbvUuCZtwcyEpsLF8Q8xUwkio",
  "key18": "KVVYcSi4YM7vq3trvB3R6Ap9iQYkRucNP3Yqthj5EfKbdimk3XtZaW4xC1MCnShuHnXRwL7E3RYzSRHs6J3YmLi",
  "key19": "mwBdppWdH5VL4ZddQsKsz3W4zgUUGvbcEd5D9S3BgiWqaVi2qy2cWbyjuSDaBcRMZ1noWkr2ztZ9c88eUReV7ip",
  "key20": "4mFRP1dQpQ4Xpke74R6wTxnfAN6ZJeqgGHnY1J4pDe57wXkAxxfemjuujqgbhMnW2qBMNuzWaADSRBuZBKycbk14",
  "key21": "5eafV7vfB2hCt1LbSZD8Y8AUravoUjvvEfex6kj4nFtNNEQRETy7xknJvjnXM48cfdLgGxuLLoPviRV5mXSSmZWW",
  "key22": "4VfGumNQV5mNvKCMRDpxkRvdiQAXEd7VwqDwQzrYs5v7HuNkRvzXBPvA6h28WQMWpwpawejpCZyJbEjCKRNVZ1bV",
  "key23": "2AE3mSPs3wRzf9deiomHLju11qGDwkniL62M84Cf172CFsSj8qZZ2wUm5f2xZjTyaf8WPMeMy9fRSr1FgcUECDQk",
  "key24": "VddY4QP7RkY86UXKwKU6B4B3NYzpUJLRJcvCnTxnfjFGbb5AsZ3ETGALdfYXQgFoY9gsZb2EpJbBnDkSuQzgnv2",
  "key25": "5G1hjJLPf9EsbcqhRH7rsgziAKRUuJZW4J9fMFfVnPXQFRdRb8dkswxinS3VxuPBM1xGDCJg6K7xp7jCuLCxWobM",
  "key26": "3KbVJbxMyg3Hz8EsBzKnawcFqqKP5ieN7oJ2NRbz1cBLNYXS7mD2o4nMf6Am8FtUcusSnU5B2L3zKwZzVy8TQMBi",
  "key27": "2NrYHDcXXdBdwaPPz2XKStsgGahaBz1zXXKXGGk82rq5QbjXRm2vw2DGLJL1qDUMego32NA8XnVKuyHNZmLEvK5w",
  "key28": "9j6f9gdi2dekM5hbu5KeZgae9pNt6zJux56LkbuCxnWgCm6c9cY4mj4i7WAZrjEE3v6wEbJugg7bmAZfY5TPUTK",
  "key29": "54AQEEm8z2upCCtEEJSztfTqP6Efgb3sybjVvB4vU6YajmeoyDckNy2ZwVadU6igjaY3N5HdsPDRva5pNvbknefR",
  "key30": "5t8ZVQnyy2fHevweWBzBTmhCoGnYKZYbS9q5eJBtfjRu6V2263HKjzvL2UGyERZcdX4SeJyEGQEGpCCiYYh4X61g"
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
