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
    "2XMJ1eDHaJRS74ExuRvBLQrsdhEw1L3mmnDub8XRjs62LMWGtthkSUpfrADVJc7Y6MuVYUF3mHuEHMsfB7p4nuiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jHrVFCcfM8DVscsbbyMzsTGvias6R5uM8GqWwnMjgSFdmTSVRQCdvCwfbeK73hjAh3EYH7pMvymbUik4rtEjKhU",
  "key1": "WtYDwG9oSiTV6WN2VfLLmEmnwazvvr1yEEMzMqhVxfG2yVrq4Ujd3VysZKaSzTkPNP7b7cqfGEPC6qjS9BpA9re",
  "key2": "5Dd4xfWdHx6xeASf6dXNAbZ1tbp3QhS7CtbDLibpPJ1fTUrs4zg3r4naL2RY8jWHVideryNBqtGCHvwvbBHGchM2",
  "key3": "MWhd1WBzj3KupvAm7Ssg8vc6dTtvFcrFuG8F3Fibymn5tNKgDWHLStkMjyhou94jQZESS1mUbvNmDc4AejFL1zf",
  "key4": "2D3bv8LHTiGHKDAWzxmLsDSAJHi7Ekaj2hCbqmy7HoeaQ8F3RMSDJidJ8yunG1b5B4fsAacPKBWKHtcj2oyx9p3n",
  "key5": "2RdKYnEguJFmVVLTQmrGBzo6DAeHrkKqBpRNs2DxKTgYiNzVuGLfXvWQs8dXDcZeag2XnbGo2npJykvS6Nf7tiYY",
  "key6": "AHk48qTfMvdyMf8urrQE3srPva1zmqBtsBtAs2d5A1bA5SWcQnxtRpXC1SZywKKbx3A37vDnk2yaHNkGke6wq7x",
  "key7": "pHWT7Z2R4emHYgNaQVzgGAW44GLC712hGwe7wFLJgw574BgA2GLfamrEfq8NprtjRLc8ZBcKLJ1itn3MwXj7LMA",
  "key8": "4p7oESrk2kbpTDmMoLwAStTQtwWzR4ivx1mzKrwEc43418HuiXu5A2kx2PX3pYSmgrutqMyujjPJMyCjgLmnE16o",
  "key9": "2E2USYsN5eC4id1irC9Lzrq9DE1JVyjvGBsKNBqSYcVg3Jjewfmfo89AvP6SwKuVFRzmyz1KgBaqZeaFRxt7akC8",
  "key10": "3aJEpzZokrQhDe1qF9dem7qCKCgiTp7xiYFywjqWSrbGhzqc58Wxfp6dd4Ptxj1B5aYNB827EbZqSg8HUbxU5gL8",
  "key11": "61k4WbeP692bsi2FFRHgVoLkrAdUEaZ3Jt29ikHQ1FRsGZ2sFqMohHuwW8CvmsHLG69brZtRrALCfH2n7VhtqhSe",
  "key12": "3RbF6KVSKXHd4TmDvcc7R3Tjmzz5RwawsnfnRyuVkqag5arWUAxh8mRm1dAWGhzke6bKumk7UC5WSf2fMCTRfEkv",
  "key13": "5MSPvAUwUXWJQsdoDPC1FeUUvbiRBUfTXWm8VAq8ocL1wpUeXosPeH1VCnYTggvJbixhdFgiece5QF2d456o39Q9",
  "key14": "2fyrYFsB2btCkAryiLF94L3vcDb85f8TtqBCaKUDRQX4BgzG9pNFZs7piGb9Zyg6gc5PFEM5K9Wj1Vyw1XkqV5nG",
  "key15": "3U4P1mUqQPpwe6JR3UQSArnzQh9okHZFhYtu1FKrni5Ar6zwNNUVaUz3L6MzLhKn1aFzZW463VXkDavmZ499GBnD",
  "key16": "5Ksd61JWH72hj1ahvy3CMek7ej8rjDQMbX6a6xyYWb7CNnvxTG7ypxijQMMqLyYKXYzq4QJGpB5moRAjBAXVuxpu",
  "key17": "wvSNubAxarDrSy4ezNMHHKDcW3L6bDNmmZEPQBhVeRuG72ZriHXaoPXEEYBpfkeVsTKiiUsLToQyadBcnTx1Yit",
  "key18": "Tmo8h1dZ5vtCaWUP8TbwUffdkJeinx4LGUPN1UDqwvjTAPv1mCjydZEQ929s3WmqsMmdGLSzu5ZShEjYQ8Kcura",
  "key19": "5KyDDZMKWTt7t5XdjrtFZ31MThLKsKcmQoEEhYhKiQCPG3EVS7h2GDxUuv5T6wt9tE8E1AeUeEpStW6UxAYrj2M8",
  "key20": "4EcTZC5yP9KxUwRTmsa1dCqPMs1vJ4xLu3ZDdsUBbHmn9PAybS7z1TnzyF8sokM2fiNvQQLRvBwVikpCp3FyhmmA",
  "key21": "3iNEQzoUgYEyba35h3zViwAWFJwaQVBzJSNrTRKY1j4KKE2s1XenNUs8SQ9Lvv1oH1HzWdT4wbe3YJKyj4C1EsR1",
  "key22": "48o7ahVmsRb58keP2L1fB2jKVrBbMvmhU3ZnqbBYNBZw3zBrgYrPqmWHiSnJBGkoHQi124k5YULGuLb6jcEk9Cz3",
  "key23": "3zbXXWThE8qR8ADxuQcRXYxZHW6mpQxgHBrKxX2BFBGs8LLqb1KoQctoa7Vnt8xQ23c85Er7CcdsoLGwR3LAzBfX",
  "key24": "53w5LHhK6zKDwAcyu1CfpeTYUV8ZeMSpniWBNDe34HvXgVPqQcRb2VudYoAtkKbJDhwoRnyBWYKvRh78RKfBQG54",
  "key25": "eZhHyZWeVy4D8EAszCoyovoKXvs74y6URpab5BjyhZ5VmopUeGh7632RdhGyagsmZdNUj7cg6PJvzYcSMEkNYZP",
  "key26": "55mXpxgM5YDQMg1xcs5XeWJne2AdW2NEMv9zkt85RSjqyQ3PBoU5aJfnydopREZzDfStSvjRJ7DvJckobLYsiYaU",
  "key27": "3e2oyUnu1c4x73b4iRFQ4afS5Tsies6z9zeDSJveYDQDUmCmCn8LwdMQs2jVbmqaGCJkZE7tJBa1oQ8BfDboEtpk",
  "key28": "GNGe8JBpeatrhdU4C6Lnf6BFqtCDwCpuqXhHRiZCmSaVPSQzmZBm4bLidnxAyDb6BRwNB1TcVoiSv8T9sxJASyU",
  "key29": "4JBGVAiwSLfPcQXkPsTkUkAjz7trXvbDK6VdnaaLQuz1dMhtHtgAsKRQ3vFwQQAhcDJFCBAkox61ZZug6xTVrnq8",
  "key30": "5scmjyHSJSHDkxT3N5NhbXYAjo6W4LAaTmxAX3mBTho9RNthDn11bQysYMjgrXk6fevhtKqDVwcdSGmUu6PtFePS",
  "key31": "5TAfD53nuZ4Y9XTmMQEEjyzy6XNs64TC8yXummXBz1pvpxUmCCP6vfL7kfPfMHknpKpxpscGxQ3uYARFNbtvqYLn",
  "key32": "tLmxseYQkeQ7ozAtQVtwwSF6BJ1mrs6NVdNwLVoTTRuwJtQmdc3drscPMd9pMqQiv8rmyNe7KqBnqZ9KZkZYJM5"
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
