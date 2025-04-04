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
    "4RmQ4HrYkvxkGu3vqngEPF2BRyJEmvmWynUjhfdYL4cGUK5Y5rJn1X1WszhkZt5x1yiotULKxXuGhFEkp2nqH8yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gx8mqEyGPqjoLBHj8EyksQM2p57SfBdh1vTvE17kC3Dh9NyKaRC9X3eBhFaizWfTzarZyoBRE8J8sxkAt9pta5D",
  "key1": "5VpcR25gtxYSGfYnXBsSCAYLLwzEsnZ6TE2jwyV2edMkZ4sYaQ3pKYra54KppQGbmZR1epXY4rue9WKS2KujFArP",
  "key2": "4ddzafCNxpWM6pUYWGUanNryMqjmJJ8DfYVErDki1JcwQ1msskZPP3ZhDZVKXSk8xK6MhNMY78jBMLbRDk4UohLN",
  "key3": "AiyYw59VbPUvuq6fBsg1x3reuFPtFoQRAPfvJjL7cqf9tbW4AvTLR2xFg8oW3wUFtaXhiKKXZtZJ8sQLFTz8vGk",
  "key4": "64ZyxF5dNekPd3i3Zd2PDLzMsjba1EnKjS45mDWv5xb79wQ2psQzMfh2NsDQCvGHc4gVzuSKJZ7ervPUdUoh89kA",
  "key5": "4U1xCjo72PJuHnbgVnw7uWMWGPMuSUgVAM3t48JWSoPzKjjUGJHg2dKHz4XWUuHsebMGb4vk52a5SLki9B9zE8Nt",
  "key6": "jBaxVzKzpbgq94KrcbtToqve5jCpycVVaPAKPGH8Kpx6rCGPEVq2wsbrm3dDR3CSPYTu443LYkLbEBViuhpdZoB",
  "key7": "nvWUguJiXDeeqS4pjLpMbgTFaEgyDdRXLx3bMyM2CJdEgwczFGJkbQ6LkaqYnPu8YoyjDv8W4MEZMa3UBGfXvUQ",
  "key8": "3gXsA9mnv3Mys523FemiuXz58m2WUPFwPk9rQ8C3TyUpDc48gw3aGx9rXLArt8cgpdu6tXkeBc9xbKriuhF1Tonw",
  "key9": "4dtVyV1Gmo2N9B1wrry2p3qTgEGF9rMg1mKpGxoS6utbTfZuTtvfR6bbAE3TLf6DtGjY1n7CiszeoDg6AQv95UF3",
  "key10": "2KpXEUtZya4N7Vo2KXAU8mmyXtm11fgVXWAbMuY3zZnLZGMhCYeDkKCvKCacL4NjtgjZxdrWPzt1CHRhATmHan5P",
  "key11": "59zQMX1QSkLUNUw4C8evp31pK81AKv8mpec2JzPd3upwbEEAKhjt37Y46X41JpYPraCxf9EsHN6WrzKR9sVzvuzy",
  "key12": "4UcuZxh3AMQyJZxPgiqUkp9qdttE54HZdKdaCzTxFWnUo76qTK3bcvK3cr4QhrDZ3EHt35iqkG94MkrwFUcTcAXK",
  "key13": "2htC543K6mgFZTDtpKgcxsuXJFmANZjJhgcAkEGKGowXxbDBbMj9SH2Ejcbk1hf1FpcPq4vNzMUNUkqbqcnhq3jR",
  "key14": "4VjhskiWzjkDL7pVzCof5cDmA557ycPchoYucbHBMrrGUBjaKEBhnazs59NP9pzHFcLkfJ33a1djdjf9HftifEec",
  "key15": "4zkmRfJo8yxoXU4pDMQSqDgmrcwMLBp5X8cMmPfRUtzXEBhhzPfsTcTzc5adnG5sAEnYwvVFrkNpfxwmjQ7fhxjL",
  "key16": "3QXrpZJ6NRpyhDoGYxhijVzyUUx5AcRJdeNFiqtnj8KiGj79TBwD2rnbi9bYLbkKvmHbikaigKwdjMLR7r6xDeSs",
  "key17": "Bbs9G1aLHuoTCwJGLtKCNjqzoVePjMSjHuqiW9X9Fv5R4xKqk5tBz6coDEgEDMuYaRjc2dzfhTW7nkuDb36gJXb",
  "key18": "5z3MUPhJiqi3rJ53AYQhoLXCcKEg2Ni4rAEc4HFFUabjhy9CRWUDRRJbaXAFLHnoYJ2mbpfmJoGZhMNm1zGhP4X1",
  "key19": "dpp4VYsWEXNZDkFgtHt3Xf2MbdbDhu1GnZC8dJVdvtzdkKgJZv3ULGsgxvS9d2DKXKFWk933szSTTgRoTMLA6hp",
  "key20": "51CC7zBCWyDc2MBAR51Kk4JNhevEKdFNHDmavMvVKsYC4ddwrXhhmqkw4hocoXaz1rRJJ3sy4AHxEpU3js4b79UP",
  "key21": "3NLH1yPgXxVLZY7a82mfVZX45ZPBMYQ6KXecrvoNDqDN2pAMToQW4cc4UwwuJGvSDeUxVaHTLku25arPqeRKkhSg",
  "key22": "587C6QeBAXFXcFdAVCnqfPhcGs5guRx2ahFkjbwXZjXLFwctTsLXf6mQb8M8RA5jsLGoy9mSfABq63Vqau63e63S",
  "key23": "3u7MtAbpixVWMisopJjRwp1fhboXuy7xtuFDbDvujZhrE9VJQ5Y9VU1BkBnkwwxQnkBDw7ny2jmE2b2p9u4g8uU2",
  "key24": "2CcJqcKxY9ZVuitYpeR98L4cABozbdhMEC7Z5VDVLxsSkVwUBgRg4PBh5k379XTZD2nsGpfwxbGk5mVem7KdQFKW",
  "key25": "JSAoVcTzVVNhRgNQ3TfPHQGN2RFzq45SuMjYJw5MSfQjREpYGQGwDa88fduYMu1FLDjdp61Q83DMNXeyeg3QjzP",
  "key26": "5NTWKCJofNRtAgNn1NLJCTznL7g1d66iHybZNFYaDqBPt3v4LxR7KKyeYnh9Q3HCLqCXPxoPtNyW14NNobj2gfD5",
  "key27": "2DE4iPkvqneGRpDMbSfAvqxihSwsaZmDgdHResiyRQk1jmxBRpPG4xemgoeiFtVvQx7d6eYwPY2YqU3JRLjhPjCN",
  "key28": "2iJGt3aqSCakYvZTaTNJ8a9W3bJgRmuaEVtcaWSDAgpzXnUd59k81tNbvCCmLgpYRQAnQUCUwgjnJYsd224YaUR5",
  "key29": "wMm1nEpvr1MmDfwr793hmQaDM5m9pjjRgEtGWuJNgvWrMMRR6yyvp9E4VYt2uaQbHZNtBsaAbZRWo2MQjsAZRVz"
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
