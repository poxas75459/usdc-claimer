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
    "FYu2AfKLdfBEaK7191rGX7BwNNZqBrtYFBuJLaudPyeModgWmdjEDhhmdv4BhdKy8JJUrDV7vb8nftjYdN91vrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCbJbjAGZEksmDREyoofWZFykqSF4h3Kq9aopMRy98TDjnboVNVpiZ78J2CuZF6RwFARBsXsUDawpaMrauBvrJA",
  "key1": "37NLDgviPuFpuLf35XPCbGxbSRmo7LWxuiW9FW7K5GajzpAasRWGEduU9GvMf1u77XYks3jPeuyDWAvjTwdBZKMN",
  "key2": "2FF2itjtfxG76wE7yLc2RZcn5aKChvCsdWtgrgidpi8uhsPhDy4qw7oMrEbwCoooU1dajwqJQXeBwZ1njcqfjPGN",
  "key3": "r8Z1VyYE62JmaUHtmrVUpjc57mmANdgwUR2TkyfsYQjodJUDkRsCzVsN372R3AGk8bY5NEkQKQkNGSi6Q3i7RBu",
  "key4": "5GTmDmhNxB97kphyGC5fvnghRocvKTRUyfABNwGh41sps5Q7yY8YkbxK5ccpps4ugPBAcyXRFKTBeJntySZ8Q7je",
  "key5": "4miYzV4YiYQKfTMfyMLc2n65jyqfV9SFfJCsH7UErTqPG9Ptg2Dx5dmT7BqbkKf4GbsDfBnzz1Y4wbTSQLsH8S9q",
  "key6": "4dx2FrLaPevXukaiAL5B3Bt95Bz7VLcX3fjmyu5CfkMFCkWB1hcQX8eqaYUG6XRuTMNapn7dvtTBZvDNywWSZuQG",
  "key7": "5hsH47YJgkt7Vg4jVMHNFtt6MzLNmXB32ML1JGLpKcao27nxwkvU9PbzNRx6dkGDhiiuywUMevafA2DvDb8VTkAz",
  "key8": "5minQgB89zwTeT2R2hoBGstx9gGExPtuGn6wrph9oeiwybqxiDhZrXQBZU3vZ52jEe5UjhDEEiJYS2dqUTq3gcrx",
  "key9": "42GT7ihZij7iDKuzcDGNoHYpg9LxeFa2mJT2VA5xJ7CcC4oV6Pj5DKWjkBpiSCi7BJKQTqsAkvsJVKmtwvFwe7WJ",
  "key10": "2qJrWBj9TZ6WSS1eADRhGBtVRA1BHFLR5smoXFuz93PKN3Z4DNy14TZRHFXDeeGFtuGURSENww9hcB4sxzpzJHCY",
  "key11": "Bs2UDMoyGGzaAoBKuUiL4KPyfN3HS2yAS3CkBbBxVbHDe7PYVsKzvVKNysTGRP5S8RHBv7gviD6D6KkpFYgxdWc",
  "key12": "3ZcGqwTYz5J5ea3Sh2KrKC4hCvnBakPE9AFN14CPT9LYSsEJ817ZSroAu65bZ9366MAvJsTvR6HasBQGeXU9zmAr",
  "key13": "zYaCx6RYsW6b4JYAZ8DEP5yZiYSBCxKyWQBUn8cCDD1tpd8v33jXSwht8E6VSLeBrSnsGJnMNR9M9HzoJC2SXxd",
  "key14": "647LF61m1EKa8pXEPeVyjsvfittJzUABmb6KFrCJ7YDZ2wHkoAq8ZYWJw8TEGMM4xgzdhHCVfkXUbeCjZ4sasRur",
  "key15": "2JixsMAXNQPMJPtcpKTfX7pPsB561eViUifnHp272SvR5eBjT8h2MYL2m6qZYHKAAtX1XKxiYfWmzUXJjqHTAdBE",
  "key16": "64BAUqva4XhpNdE7sHAJzQr2aubumwvgddyqag9TN2YEA1h7Y9jPMuxrABbdC8pVradFJYyfPgMwuFPTj5bg8Cn7",
  "key17": "msY2YUvYkmy1CunWukYnivtwYcfGdWypkFd7xxF3CfV5uoeKxrr4HMQdPVCZezfvFWQAAt9gj8HsGYR8PjhPktB",
  "key18": "myDt3qk5n2fckx948TUPDR8zC1wWD7crfqPHsXX4kaws7bjM6tPoajuxzcFkCGGWjMJ37DzhASLoi3unxLc19VE",
  "key19": "5nZUjW13Nt9wioiLL8sXSUM28CBaF9JWgm8mqXpYfPte1Na6oS7VxauwKEPxhJiSJkmpzzmPEznNTKLyfAUvNZuc",
  "key20": "2VGmtNdw127AMQZPQqTN3rKSCDwQoptLGfP6X3LK97PtriMMqb5bFsF74gUYgjJ9xTPm1nCPT84XPFBX7HkGE88",
  "key21": "2kcQKPhDQjYKd5PzgHSdXxCt4t1GhSZ3BAY1ZjxV7rQwGo9wDsQcQZSGMQL1nJmEUNmmzA2iWzBjv4LaUppg9kUH",
  "key22": "366hUe8LvTnp4AFtrTeHHDyjpP5d8jdsZTfy5q9cNoLKLcYAYBnnNC2fzGyPZ5mJ5r5yBxSJFYWjQefUCAZie1wv",
  "key23": "4oK5qoSNEmFZ5rm1fYFPaSwfTZPQG6HtEyGvjtPfr3xRhT5QaQMxMeJHNmVXnm5p2k7BFrzGsE2er64qA2ePAGmh",
  "key24": "C8VBK55E4NzCDPzyLXNPQ94UxTb6nmq9vPbmvPaMRUaFCqTQ3nQqHeUDqphrFec9PPUHQzhqVE5rosrbDPDbjAY",
  "key25": "5b9E3N456CwNv4B5GxX4gZZpJbRkpRLQ4efjq8HZKD5Co44kE2C9gbaKm4do9ZYZ9N1Xyd6taYzoV7GycFoBttgT",
  "key26": "xMr9a3XhKYzEW3W2Se2sbSaHmdRXcLgSRQzdTsvccC4HtKVW2C95Y8wnfxs2YPqWyrjcAds3uBNkzExTjiGvhtu",
  "key27": "5X5kjYj3Sea5UvhrJ75i28c4wxsTzuULYoF5ZLsiEYeQDBLdcvmrpVQ1EqBf1G4JqtdTHZecf6Ww7Zup5dXVxU8u",
  "key28": "CBkpkyZpGveUn2d8TQLA1EFMpYs7qfKe8aoyjLX83QJycAtpnSMiamjRzNPyDB5eeHuD3JRGdZepQ62Hjp1poXw",
  "key29": "3Qg8pZVSbdftW2CzA1NGfnxYdkCXKmvma6Tbpyt5Q7VcrvdEM9swzu2ej96ArZfbV7jjeem4dQiWLQZHirb7SZyx",
  "key30": "5fGRhDDxiNapEsofswZnKzGbRxvXqkc5Evq8vXS9xLWvi7fs2NftV2vYS5CR3Dfsmq2CSNj9DoA2a8ANSNGqmh6L",
  "key31": "5PgyxByyztPdQDMJj7SZXEaVw7vU6Up7KTY8k7eoDRdJzrJH1HFe5si1eQ8KNNLDdv72wi4qzb9r2WkcwJc5LzXD",
  "key32": "5ZVf2wqdWjXMYmKT4YFjfX26yohyafmUkaRDzfE5RESjwVDWEFfp6uttcHbEjLoxjxhdBtehvTRyt3NCw3zHSbhJ",
  "key33": "45rvH8urMgGP3k33UvG6SgcRxtvrqBUzswR9Rs7kEu3WYQuCe3NSiZmPQqMAA2cC1Ccq44yzm82NhdRHZofXAEBC",
  "key34": "864EgXaGHRwUQ8fnKQQpHxk3MkfZp1H9swDjnmH1V7cxd7CQe1gfY9YZapREz3jKN6nqHExJVV3gkm5RSWkYhVE",
  "key35": "4SfvYtmjBkbjco7F8mqHGxJjXj9NjbqpjQ7tBeRNxCwGwKqkm4SRtMfWYaydjPk7vMybEscxvajeWVZnoxkg4M4m",
  "key36": "62EZ4SbcnzNZTVokpjPGfrqb1PbF5UY2EhYkV8zz2kELx1tvCp63QbLSos6wfNfAbuWdExgU89wUjEvzQ4dJYZFT",
  "key37": "5MaX61KwnJmve2JByTp9vrQC8HTDKMcJp5qgPGvDvLt5iwtuXKKkjWrhmViqHfGfZp8jdv1gmGw7QJ68C73UoVey",
  "key38": "5vZ1mNxGF5aNg2MWYVeLVhcy3RtGsEbH5suArdwzot9hHkh3P1V1C7SRwS9Y2wct2bLYUcK6Qb8Aoqyy2MoBXkCJ",
  "key39": "3dGn1ygqQW1YpLGNL7PyQCxNXJLEcinSc8nN6t13ADFonVdrzoLVG1aYmzMS5q8TfSozeMmzeHTMQMY1pttNqqvn",
  "key40": "5t2ps3kgJN9kgigqCmjjizaXxhG2U96k6i3c4MnKcCEHsciW284ir3bVUc2BpK4hEq78LXzFRJTFjtktroU1RTYZ",
  "key41": "3FWS8uU37x87KEDLFPVCf9w5VZUPADykYETY3JfidbyYntUVXtg5LvN2wLh23firYBrNkyJC7gbamX9JQYqgj2k5"
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
