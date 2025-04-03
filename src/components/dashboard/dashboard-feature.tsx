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
    "SGmu3sDLCSaycDY1UvLCtzYjRairUKKGsUm6ss3i8z97B7FZ33NHTDMVBrhdgAmvRNP3nx6t1DpVqGuRsszn9mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9QGAUykCVc7PtnF6G66yKaMt3FnqL1yVrhJeQ48xoCBEH6gz2vajEpv15P7QPB1SitE5G5J745SNMhVhGeEWd8",
  "key1": "3CqqQqUDo8pLB1J5PUbrh3sXUXEnSN7M8AW6r8MSrvV6XbHgvfMWirxrxYGyMwsBft4e1eyZK7mZce8o4Hu5UaZt",
  "key2": "2i3bbQo1p3P9M2ZS93oUkH1KfUsTAodgvK7sH2oxcehBoYNwg2mcDAyqGTCGbRTaDgzk6ySmSn3gJaG4ZBKBaaFj",
  "key3": "rNAGissZBZAZcHVj3vao1RSUK2uz5z4BJihxtiJXB26xQFa9cndhPeNmGK7ktDwvK9vE3a5xJCoSXqFG6fx5Duv",
  "key4": "2M5iJ4hyrY6AZXcd4gxsDRUDUVprqyXFCcXQcWC8f8ZXQ6qt6kqi7mR3qJtjcJaML5uLN9Qo4xybZ7WredeBYEKT",
  "key5": "675J76ZvBLupe75Hhf7UbVS2uCgdH9VipvntokbZgKMQipaiXy6rX2YBVF3yWuEoWVvSg4Ksh4sNhe5MJi1juLA7",
  "key6": "EsEzuCaCitwoHMduzpHDSq2qpVHGJ5XxfwuZX7b69X5TvVjK5muPsTBJ9KnzxDBHQAp8KyVzVqfze3ATp6ayqQi",
  "key7": "4y92AaPL71fxos31AXN35pcT2LK9bUsxAQacABFu9SBBukWBjoHd3R6tL3dLmR382tict7aBBJFYckhcYvqLUQut",
  "key8": "4a4imiXv6xHtWrG5wBFQHMRG9gEavBMPtFZYumy2uJ5DT6LeJdAhTJmpC2jZUNEjmkVE7USMufALS1yRKfhKBj2x",
  "key9": "3XwurMJVm45dGTSckvq7y1yWBtkP5GHsy5sr7UeV5GB29a22wo53r2dZcAmfV2mw35ztA4RzVPACqrUBs6kew3BW",
  "key10": "4A3r2AvKUf63XoFgfmSVyygBwGMhRKscvSUSKL3tszJA4Z3iPXtLmd7kcpAhnjkYKyuX887JA5M8DsfB1JPbjQtp",
  "key11": "5ZsadwXHsXuRDbdhghLPKCvV2NugFQwsJELy5PDSGQB1GUqYn28VfAVsWnkctgZrTBoJcxcSSUK3rwKUEbhoJs3k",
  "key12": "51gw5rMoVnY87eEcrcZamV5cWgmfsWnHsKDggRq9GQobGvubkjbEytWKjiVt8CcvxqbKk4GvXojVg2K8GgZUvYQY",
  "key13": "5zyvEMUDLMuAjqYxXWZwNKT2DS9Txgxb5ArdBhtZocHYps4FddLScsH6xmB4s5mBwQ7ZZyyBUfxxCJ3KWQa4RcLQ",
  "key14": "2neUkZAo2T6FzEfLgARf3dpdt1G8gP5CcAfufpJQgbTZAbWHrUQt2PFLU62B8riQPeV6We4ZcR8PGZAHMeNWKUXV",
  "key15": "V4DSQfZ1tPiSpJkGe1aU89DynRRvN9AWRtYwnUX3UBjpK2gyAwrKMX5yJcfngW8HiNHJPKa2JNnDVQDhqgbXuPZ",
  "key16": "4VqNSM5D7bHSZoy2BKMz8Xng17dAmS4Fa5rcuayUJd87MCxBSfmsTT1FDo8sy5jwRGm6BPisiovBQBQL7Myj1Tzr",
  "key17": "4gQJ9VQASskraf5q5VZx4YSc7d68VkjfBFip5Hz8nuJMoWn2xWG1Xb99w3A1RxMoQAQhhnXBt6UXkT5J8N3UJwgj",
  "key18": "5fk7zsTV2v6sGNnwe6RHkMU5iBoYzVyYPzDxZ7aeUpDEpjiUGAej9qKbXCMRdRwFVX8Ybv7kfN2yMgDSqDBNHHyh",
  "key19": "62FdoYWBmGpWZWFuHEQy5epmBVjg9ZXx7c3F9WEQrCv4Y7WGA68iGoiM9svo25YJFhC6kAMcvWPKsYAd5QF3Vn9h",
  "key20": "aMUNJ7CEHNHSUgh6EQj93AczNGv8AnmmaeqXXfJkL4pyfcgG5oZLH13yy1b1F8BQMy2kNh4ETDVMnw4VgeEuUtr",
  "key21": "4QyQs15cjuZ6gzgsGYkXe8HYX6MmKCogDT5xVyYsNFa1PKFwSPows9LyiuSyaGVrg2NUKMw2HwdR4yjyXRrGi5ME",
  "key22": "3rNhzqPas3xJmF5VCNZrMsTGNLi31a2FAoq3jTfk2Qbfv7ZsM7n9xKC5uJm9jzyUNM4uZsH1AvLFpc8ApkxYjjab",
  "key23": "4Wy7N2GXwKTtnjtAcAN8RzapUCNoojcD2ACuW3GRqECYzfFWGhX8sJygUD4Z8CHubE5L4QYghCUQdDk1CR3Fd6VJ",
  "key24": "4p7ZwUkXUUHFMddvH3dVWsUnFwAk9PUtTVizwxijqHDnJ6aHqTuJkoxFnb9nShmgnM7T2gFj6vj4MhCjEHnDX6VA",
  "key25": "5hZb3WC29wYxGav6T1iozuttfztFfiSqj6X87uxHL4AVTKjnJoVXJZJs6CAtDUmgPdZG1pciawfQ3TLVwHGYSFXR",
  "key26": "LWSD1xrtGDjdhU4a2g5Jy5139UQs21FmdzxxJ786Nibpz8EZNU87UFEJ3xmonWCLFrYegcoxTU39c7VBFJjPZt6",
  "key27": "5jvcxaYfuE2HCito3n6zcYePbHcQSWJAXxtjzv2V5YGYo1zGsuwkNXVGUWCSBFQanHQUma2sz1qtFLYXk2c6JanH",
  "key28": "NxrgZRnnTDAPC5YxLjNAdaERiyByHr9XocbDbwXrGt6mSdrNbYLWhatw3gpnMKyF8cDUTDf5wqMEi6FnnKdbsZQ"
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
