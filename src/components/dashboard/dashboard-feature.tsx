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
    "4QBXyZpKhMJVpsD12rPH91uLJ5NKVfL5P26s3XjdPZEtdJNMpsV5y4jpLeFnFfWFstLK87u8nSHucdsSTwHf4fzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kqd1sHcjqKXA3GvUHxQjc7c51sCygFsr1gLN65ThRS5gjEZmyoHy2ycr28JXGwgwjyLtmLKp3fv6WjBsLZBHUbf",
  "key1": "4fBiMSHWKwmzLkh8sdqBjhGZrNu3LGiHGRR4JkgaR8h5fMA6mNQ3TCxhujvaMaSjQjizt7J4fqscYqr1JrKnsR5o",
  "key2": "64CFAPXgz8PjNBpuvcqH96PGZZnHus2ouEfvfPiTpK4YSAu2fekS2uwij4mq6LMFt8MoQEab4hoKkJKueHKxvTmK",
  "key3": "1TRrvqb81zf2o63Dwzw3s6pYbuTyCJsf7heJ36dKrjMg6MRgyewy2M94Q2ZA6TnNHqpVc9RXJvoyJDaGkbeLDdm",
  "key4": "2KWkLj8bhRq21NMohZa1y1xmwzf7fyeCj1wCarM6DXo8tYvw75FyDGCaNzR6yEzFRSPc4aAGaGtWB3iwrM3R7QDV",
  "key5": "3o9h8pTap3HN2wvq58H6Y2og4CLnNQJADA7W5aJBwJufFEYoRpKKcDb3vruWQcA1ttGCjr3VCCvsVu1rFXdJcbfZ",
  "key6": "5xcJELtRtradpD6a3DgtagTrhPt34GHbufZb8J9vY9kGFyX368HnpRbNjYPT1eoZVxgsyJVYfYJWTbiNC25KrfJT",
  "key7": "4UuAdSUzLgCbpBZKHmbyfPooEw4P4qTn6JpUvb8LR5jiJ25RXC1NU9JDZejXTQntYf4Y6uBeEcyqgiitcjxdiREt",
  "key8": "are1zSC3at3HQ4Gzk9GzeJdXs5DQYZEwwKE9nZgqURcNjZVAGKvkCGWhQxoK5bz272fxamM35SunF6ZpGBdPq5W",
  "key9": "5n3gfqQBs1psS5vLDJ3v9PmK6nJZdWbjTkC9uhGCQ9i9zFNXG1dkGJLvNRhSMTVoVG7Boi3JpSzSAt8wvTLeTSWC",
  "key10": "5NBxWJsxUhGC2mvdX7wUmtAc2hzSiueZYXBeQ6udhcqEdpnreBgFRcE17oXftVXs9Sr4zZUT2sRqD9LM8P19C3e5",
  "key11": "4tr1JdE7qRSjYFgjPj7xTLSBouyTV5Xzxhf52AAMb93uWCMqQFx3GkAQebscct8VQWar6bS8McEPtoPNJ1zb7qWh",
  "key12": "oUA4UB8yJ5bafRxJnrdXi5TXnbunQzG18bFq8BJwiDSyu7CAG79hfME55WTX6s9phXBzHy1DmR2eP1J4Z2PFUBF",
  "key13": "5pGvwvg41NaHqNXjZxq9KUE6QbV5Qto4Ccc8xQz1C5kpdTN6gAU9xXd5iZrFNXeSLcKE5miNMsT9L7cJQDAiEwRB",
  "key14": "5zkj4R7nyuBCBauxNsBq89NMzP9BYbumoPk4e4V85mMSYCwdVZZwrF2bTfNwCaaZZc6wHw46BxLTid96PXFiwujW",
  "key15": "iwDajAX7R34b3Ld9zzabsYRGYiMY71Fe7rXqscvwsJg96GcxUyz338PNYRw14KTkSoj5g9bd2JzvjorXoU9bnCz",
  "key16": "2GstCuJoPCXZXFXtDf57pf4Ga7PUiyVLbZtzN9n7aWJK3SmP5gEDDhqGa3vtMAzCDCcXkDc7w5ECHKiAJFKewxfv",
  "key17": "5XHxt9PiDc8Cg8We3Cbpk7JYVWfEZFcv7AYoEmpg49qEqbYPfXvNhSBRD2zXS5rY2MxF5fnEoJ8Qtjb4TuV4igC9",
  "key18": "Yp8RDF3axjU8Dwfw2TDoFajiXjJyXDsB6iQbyosMyNvep7ggYvT4NyFfZRWcr8wGSsrM78Eq66QXHNQBFA4zu9U",
  "key19": "5vjs3mQzwAroGJdAds5bwDhiFbZie7EzoW4pJ4R2BLP9tnniWKnc94jXx6zJzQyJ1jZrWt29VtLpyeAS8CWUuqd4",
  "key20": "4UBC7eZmi7QKTFTaf3uEyYC7DrfZ9x6yY6MPuSyejv12UMMEQpsb29qqC2VoEoXK5QMFChEUamUiEX36rBmT6zmx",
  "key21": "4aNZ1gEkhb3QxAGSuL19K76HgW3afXh5TQ9M9jvzK4kcP5TXAWYs84atiQLBwmMvEo4h4w8pkPNzraDf6o1VfAWF",
  "key22": "3puLhZykAcDgn7Y9S27M6NnXEDobwtmEiK7BsAtar7EgrufchQmzTpd7q5VxVLAUBrnpc5vgKhQWP9vAQkGukAr7",
  "key23": "5CTpGL56DSRSEaMVfSwin9zDsGcwbemPq9fGMdEAYa7hYBnj2n3cfX7JRyMSgwqfMD4DW5e1ywKDLcK271hHVAXn",
  "key24": "inMVgZ2RAWABUaySGS7cXpvqX5z3Vi8xMfufa5St8mqSkamfKcefbQLNdjVVk5a7yDBUqpjj8datjqZmHC55uYi",
  "key25": "44waT9fN1SGyCvJjt9AxRfr1kD7QC9tJXwqpArQqTP38tTxTJPewgmtsjujoWPWMqY8J8TSTqjx3jYjp85tXWdDP",
  "key26": "3TJG8ysrC1CWTQNFD8AnJKYBMLqcNFWNf82skd4ZTidto1cs8FgJgfMVyDxbtiMS9xQb25VpC2sEjy954iVY4ATN",
  "key27": "9z9gUB76eNmQbjGF12tkty5YfACQyCkYGtxkP8NeoACqg26MwRmoVZaBjYsNXskHAVc3z7RiH2EkbdQrHwZVWcd",
  "key28": "3VytRzP8kqVea6DRWgy9BKCKs3516jHQMn6qKUoCyEFEiGpY2BkcURKuLFjn1D4S4Z4JoQAv43y3miUusEizTDYi",
  "key29": "RNti3SwFikxe5qJkjScaAxfV7BEbkzNmNyfZh6G6eG6jv19njTQki1eJvazT44YjcAZF87uzpjE9xWag66qU4Nb",
  "key30": "4QKUXKSFpAt2nXEFd155yUt7MTnFsUsRjUcscR6AFn4X3hLUwwvohTF5d82CNYZgeJoK9LRp5UV8tyTwgWkYJJaa",
  "key31": "3jpHC2hJb7H8FjxxMU2uUtHg3EZUpcbibS3dr6se24FwNwyFJDRSRtY2SNVHYgkhFpbYD9Utso2VwG2PPigopoyq",
  "key32": "4ZifVtjZSU1kv8LNtKuCj9ZgqiCBG3fHyDyXuZCRLPj6ugSDXuXE2r781t7tqsY5xuTZXVmS6YtTDVx77n47zxPp",
  "key33": "D9uytHF1MpeoLVjjZHZzweVoFgRpK7r1bfX3zQHPstBGsacWqt75BD7NkVMzzjB7E1CWhHWCoLm1njt7knqT4Nq",
  "key34": "4dKw7CWMJEYk39XpGt79xvz565kZdc3Pk67tiAdW8qPDbc39b5idwfSRnfTJSEwfkg68eJCYTotchgN8h6CerV5p",
  "key35": "3EToXiLN4cYVDnAxFzzPLV7E8yEL4UpELYtxLVjre9J8PCSU9HgJ5mFh3GKYnEvpnA11jQfZz73aja3a6oTuStMg"
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
