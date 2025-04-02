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
    "5UEjvJAaqKPKb4S5st7dJXnCgYSHvHt1cLHJYZC5Zegmg5pJ4DpJ3LrpSqfZSsae5BXa9adeXjgaUUeKoTisJXrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aMsRwQZ7RRcj8XTknNbg1avKmisipdVfwEGutKnji6o9b4Fqa34Ko2BdeGemi3PJm3PrMohMBiHmR9AYnQwPc68",
  "key1": "2gFmDu6X1dnPcBNKwLWCfwN3HoSgFRbGpabZL3zR2EsyT4GXiXEwvNK4pPqowCHAWsbnpTGnWgBfLdCr3hq3zAju",
  "key2": "4Mog8dnFMiXsydDEaJcQm1TdZmNsCAsTnBZL9biYmUBdrebYu1uuPoMjkbi7JexXwcbV2t3SZHwJfgo29b68d6XH",
  "key3": "58T1qm8xJEXajpowvn5DuqAqE2u7MHGm2xAaVLuyzprih7n1mL9fuGfxeQefz5SPJLeoh6mEQTq3ZcnPXPAMmD8H",
  "key4": "5PmYpRJBj8a8Fpykd5JB3Sjt3m8mHZVgvuqYDw9dwV2NQwCxdQcRES16tWCfqB2QQu7tbd6Y6mk9Gi7DHbwPGdGQ",
  "key5": "55ro5NG8xx55yb2tRPyMWaGdNd2xamin8aAE668ywMTyoomnpw5VG6oCsKaRfxru2VcmuxeCYvUew9cWqwGYP56W",
  "key6": "26rFyaAKh1WPvVahCRyoNWg7vKuqf9B3iemP9GVi5UKCQfMEx4Qj9dUkm43w1x2sg2gWZE4G2PCpRcugpRP6u3e3",
  "key7": "4TCjmQAKZh4nmo4ZRFLmBMxnTTbuzMsnMEpZUb3A5ygkYC6W1AQcuqw7uP6RiKEaNsNgZpRGrPC6ABPpKKEhbJry",
  "key8": "5ffY5DVWqmScqcdibpjdEbgTfS1vPY5iFbjqGcE8ig5v2JofFvNy5cjWC2RuykXfkX9XCMJXxPUqgAHk9w224gkL",
  "key9": "dH3isbWzkzjrhh6vDL1jszuzgv22GBKjJCkd9njQD5uZXGr4g2M19sCFu2WYo18mG8i6wkUF6E4emH7kKKvtsgw",
  "key10": "3LgM9ZmPSjBBnp8EMnLABfaoDWfuQivZSQ31319D1AoLDF3dEgmjvtjYnJ6bnQuy8dGg1CKgfWzi5Go3kGwsw1nj",
  "key11": "4FCBrod1CDJgXgbFjKPU6PyW8wrGpShV4mx7kpuPPLhnq7yxorj9tpKJNQXZ7KFrz9fzXt4ur6WKai5Sx5WF9HpC",
  "key12": "9hbdfMPKDrxz3pLten8gRYhjjgrGxrHEsahtq3mXJQu4y1pJKyEQb1avgkoigtzABCX9FkSMhQNfe7AFqsFyiX2",
  "key13": "3LqppK3aTpHucBRvXap1DW9CV5nLtWN6HQvyEhbmfDSSq6LwY74YbapCKATT4Mr8oPqBHEWfaDzS4u668HkqzVNd",
  "key14": "iZYXh16WkqNMTTEnWpeAnyyT8XZ6GzrkbavVZxiRramXwedt3Bgmfm3MgUvc6ZWLgcF39C8jEjCf6HMCFXiQj8R",
  "key15": "2cJ6HzxxNWwxqmcs7vJWSRA7aVyU9yH1PmsKtpcDsT3Wdj8iY8GqL8GUsz7ze8GtqBRKLYWWVWL1rihAU95DyhkP",
  "key16": "J2QnBX8ugkK4nmwreTHYSRY9UobDRhsRkNywhaxyHAtWhiLFxPVqV1E1EKokSL6rDJP93aEEvdh3YzmYtahZP3k",
  "key17": "3pNvT9CDEgyA6qW7ZWYpCV8AFSRFsU7tDuShepKKgthxuu3RdRKX7rPSyX1sWr2v6QsGbs39N3oZdQKgUR9dhVUg",
  "key18": "5k4vV82jEVQU7a9qaFuFMcS6kfYPzSSCq2wCFD1MWA4DMWX9wQ6fzPwcdJsSCaQ52xmHYeewZgxc39W81TGJeWTN",
  "key19": "7rUhdiYFrEoJgNvc97eUcXa52KwHkitUiAaCcufowE78P8dDYMmpquXcbPDisLPqjgtRQsn9xH893Vvkcetjh2N",
  "key20": "KJxtNZtCYCbRrNhEXEVtVUycucUfyPuq2LrvfiRSxVUTcBphaKSrKq7WoQKVxLWUzxvNKGPLkEG7VMkxX9Y8LAo",
  "key21": "5pPZYSUKiNytFLMU5D6o4SZ7G33Qbsiq5M7dNj6KbzbCRKAMtL3oCceTadmDZAGaekv5VLWontYeXHej3qJjugQy",
  "key22": "5u9h8vphxwJFqNryKsLkbYw5ixGRAhprfh5FsnmMW2F7HisMn6SJKRWiuwYN38ibPR6TdPHps459P6uGYf3bBqP1",
  "key23": "5jDfCXwGjvuFETpfjNdShvFR5TwvHi1AqYjwivzKikXT5ZYatxDFjax5VpcS1PFXnitQQdwn2KR9isbUCca8qyaB",
  "key24": "26xhSvh42pVbo63vDTS6eCYB4SyjUdRywamDHurDBfsac1dseJ6zs6RCLBk13RhTf8TQNcNfu4U2YudVpez5RLpu",
  "key25": "npE9UMErpjzAkwB5rvV2G9VVha5VeJeTgZdxbYmUpEGP4b3v4GDZNC1aBDQfeyNp3J3gQhsQS6RxcBiqenkJQ3d",
  "key26": "46vK2VfRAD7geEbhK4QhgoDoi5PEJRdiQ8G6shXKKUR4Pn6rffezLWhwfGCa3KCDJQExP6g6RN2qyebEtTiyEeTW",
  "key27": "3My2qnHPX3QkgFP7SVaK5QWF8hvmk9jn9c99ehcqG5L3ASRapADC9hkMpXTBG4pQvfSrPRgd4ZJ3CjPuTWqyfrhy",
  "key28": "41VympnAL3J7rME2dwDY4Bq82QdtHpAwT2mGSNbTrbD9hcVrnGCEk8kRitMrZjdmj13V4gVTaQhgn8KdEvpkBFym",
  "key29": "2XZxX12bVB9JqkLWu4ojTbwbS89QrHKFBtCJfhBYTAcShMDMAojRAay7onmtUbf5jbSDuE8Md5oKH8m6SvGEbpuv",
  "key30": "2XorE2ySwwZ5DPoZezBxTdtjBCbsDYUpQd6235ELRMY8dDvmMweWdB9ij7ZiH9dQegdLJ9Byy3zoHX3i3iR48Bch",
  "key31": "3beFspnpyrJaFbSLS1SbRMdnJzm9W2FpXnCo7xZG9tV5Af3n3nr7UKTEGh6MGwf9Q2t9yerbzAGmmKHwVGzi4tWf",
  "key32": "5jVME9zsGAMp5SHXHotfT6GjXfAhER2zSgehT6kfagegyPd68uMP3Y3EBocLHrj3mTXWFBVoY67FtdJK4KbhPJV8",
  "key33": "2ndFZSA5mymWpu7fxfUieyrntoTtd2jaxxPKDscYG4CpBHxe8e626LsBmJguq8ybJWjG8EryqXomFHJSQUUioaA6",
  "key34": "4xism33b9H6XaBkBQN8twsMUasjLjNmMFZLgQskNkeJSfBDwj9MnZ4tGUKBv8sD41WmHf9NyPT3mGZqkYZhwFmqv",
  "key35": "39nMAqJbvd5xe9Ab9ChhNGfnKhSLx6p8A4dhzFA5ysE7a7WVv6h2hjNKpcqB3XsNpyyoNvzneL55mLZ6qAx95rVi"
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
