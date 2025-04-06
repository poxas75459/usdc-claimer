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
    "425LCcBewAa2N2uvUWnRjdEw17BV9Wd7TvKVi8sEBp8A6y5de97r2pgQ8RFa7BUJXPp9GwMKai7WQ37yjMVYbTHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "miPQZM7XYg3ayJ9bAQtyeVKgjHGtXWm7SuNSrX75eSHmHm2UdKye5BVrQ519DwV4f1XicBUyXQbLYvMiPbJapjY",
  "key1": "2uNvT6pY9J8JH7rtXU1CWqcNnVAu5r49siNJyxyXW2YGFSF4XUe5HMWXnRBhq1qUcxoH7hw2t6deiEsWtVZMAKDm",
  "key2": "4kPhq2utQTm8qPByzSsahk1XYnY1kzMB5Kc3kcsMsBmeG3CmGK5uN2cwTxoUWXRhq49ihG2HzbZHjQEgq4XjhbB1",
  "key3": "3TNStcyeyvKw9iKr6xGKqyuZedWLaeH76x58GmZqynHusqGPVnKUiigD5qyzRLxRrv5sHteQ6T54Yd3V19cLXuMC",
  "key4": "2K3o7tqgSN5a2QGnFPDTG65A1wwvSixxXunFYYTKLvRM5HGGsLa6Pgv7R38fCdquR5iuBsWyHE2hMbHXqRUS5svd",
  "key5": "2LarkQ7RfdPKouAfN6rjvV7G573DuMLvvdgMHH7VjTfAA99pcWD9vXJstrHsxd1zBvhAGtheqs6CL8RvxPTP6Ds8",
  "key6": "2fDge8pU622RvPvBfcv61EVM9ZyKkHdbgwFhDAQQJbBM1eA4hgrJ2tQZq4h5VnW1Y5EDbPvuL9D5y3h3EBPr9WZw",
  "key7": "SuDsU4e21gap7ahWe3utBQ5wiaJb2z4YUCvaec8SoGdN5ChmWPK9qUw6rsjr5L7rDdgjpq3oPAQ5yMSSzPBPT65",
  "key8": "5pn6JTrDYj4xx31UVAm23qG4pExnZNcfFF4j8cAW9qjArMExdjNGXPwwdAbuugwEb5965PYL6oM3zhTWM4Zbkgaw",
  "key9": "3V3RAjSfivdX7H6PmpzwfS6GbuMoTCxjVdQykR59mcL1abre6qNscEEDsDEJ5nYLGiGxe6Da3sjzLR3kFixkovtJ",
  "key10": "izLNj9UKLrF4PMq7bEAdF2c8eoHqcJitePFF1X1HZdRyHHfSA78FZphA8DRihVQnJzdsnNQj5jef3eLqTqsVTup",
  "key11": "duwAg6bFhPxzkQnqf4mAF7uLdC9e7XKmSJGy7XprCKtNXbx2FmAsTwKdbNioB92a8iCWKNE4JXw1gPK7CtHauy9",
  "key12": "HajKDD3WUAJ9HHMiq1BnzWVQdGUw8ibiEjFrnTp55gQo1vgps13pTRC7RBYjijxzYtoFvQvCULVJUZwtUcKridJ",
  "key13": "4hNWuaELGaNoBxGykqXQ3Dsd6zRfTqb8K4ZqpY4CJXSGLGT4SJ1t7oFjjCQuZTZSFe2u76RdSNzf8FHqF7rWmjSG",
  "key14": "JR2FqvkKMFPXJQjPvrYJKUcSi9w3ChWawP5r6LUCjw2HUt4Cez1WtANKoNNHXC3EaCjtP8qhFmztsxbfEH1B74v",
  "key15": "54oZjydLSfAnocqptsu6YhFhKuZphKpEBZwb1pKtb9WsQg9jg6hpk9K4GMdVFn5jiMVbnoU84uGfHmffh81tkZ9G",
  "key16": "2q8rKjfC949CApCCuM9sTpdVun27yWdVdeeWR4eS3SZjcRo9t2YjPnZRvc8ZeHCHTRtiAumdXjBUx3TaRcd9DGUU",
  "key17": "4aAjHhLjkJUnxSXAoFbrgrJgJL47yCVXHiSzkMf7T3gywj6MwyAimZmj5F2sMAxt6g7yPhfUiMVsHf4nNVFKg42s",
  "key18": "36avsyh79stxwNe7xTiwFj3ytREciTtCEgefa5Cdf1MeBLq6TaTVxL7q6Ghbd1bf3osLc969pckVeJdyjVz5nbSY",
  "key19": "3bsQR85sJ3eAz2cLTniSJYaAJJqRcTCRmYpx4uXnYzm6AVEK7ZrSfDkVxW8QLR2dYzNuuyCWE9zNboU9fFXHNsRC",
  "key20": "3R9BaTo1K3fUADQqacXya1atWCLisTQmR8wB7tvnYNBcMfPEcgLKLPeoDHhmdKuxk21GVPT8x3RaPLhfzyoUGPAw",
  "key21": "4rqFxCoJV6ATvwAsBLP5tvLaaH5myDPCBMWnsojzF5mSo2bxqWRavByhfUtnVUCvcMA4RAuPgGHDt43crnJJeK3k",
  "key22": "2bsuuTjQtMQ9LTcMqg9MoH8jZpi3x2JeV84qSZfFL2bWZ36Gt4paaMScbqoBXcwFjFQFdGj3zYQQxvJzcauSQrHm",
  "key23": "4X3RZvuxpnw8YYG24fjVDtXgghxwxih4xnzavPbeJPdtQMSbz51ShgJtrLJq3TewzHZDuhSw82MGspFQQDziMoam",
  "key24": "4DATPtdWt9q3ARAVmreA6XE33G5g5EsbFK76jFJbT5XjLgRSxLG94D6d1rcGCPXZRBw3LCZ3L1y3PypCGNjJBF4P",
  "key25": "NfN2SvdZnadbhxx4e4iCUJsuZxZTuqjAfjPFDh3F1BQAPF6rtbFk4SSWgSNYoA4JgWTR6tUPwB2M6usDBEcxmWR",
  "key26": "CuRm6YJNxmx8V3UACbFEkEDketvRrBCvNYHpwyqNW9rxaa2QcQjqPqEQYdksZHuFnutGf4Gcj9xLaR1hiofJ8hg",
  "key27": "8XHQPqir1xfW9Hc3NkVE2zAKgsEBbJkSZbWZtP1q2GTFeW9ivjn2WTwE8GFE2ce4o768DD1f59CKMCbxrEy54nz",
  "key28": "2vAB7LpsmsPKpi7fXGsyVnjiAhVddXzc5ZCpTM8usAk2s41ZY9EGsb2JCdtcmyEHb4Kc5CiZr4VjCf6aBGyswrtG",
  "key29": "2mkrZnwSxNahU3ueytVdZHEKps9nPEiesT3PD32rRAaa4cHDSaJkfBjvaC5At1wjrSoyjavwFy1g65a566756dzi",
  "key30": "5L44F19XbJPM2pNRhmK5jC5RK8TX5UonhqXj7UkAM9qX1uTUGDcnCk5BKFhoUk39Xy7BsKA5sSfs51yoTSyB3vnb",
  "key31": "4JGT7vESLsZi6ByG4fBwCeVUNmhohguQuQHxdd2yKfPAnGd12nixACL6wmSh3LXraSF64wgHLKgBgdtSmUtZ46VF",
  "key32": "yCmNVthsRuWYZojT7mg5YdSEWw6zQDhQtouenptfEZnePjQDXxYpuNDbGvnzDvVaurQFMDFCnYsRakTKu6jqioM",
  "key33": "3HGG5AdDKELNxBhGnddbESz1rs7o84GoUwmpPneB3eEijN5FxDntEes3NvrDXXAwBBB3uborEjvLCWBqcMsb97r3",
  "key34": "3spU7tUY2DE54APRBtM6dCRxbcixxUWNk2UJZqwgETpCRwg1XPAgH5Zsp8LqXbjsg48smgBmrkg8xUzdxYVnBitC",
  "key35": "4CibDgxsioSG35fw1nj9oJfak4HHHxZmr2bup9DyevvUNpC5wTFVPUeRPRsFNvhVt57DYNNmwtk61txPiWRwkzDZ"
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
