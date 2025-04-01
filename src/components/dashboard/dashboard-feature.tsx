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
    "khtfmK61hgDQJsSd7AwfLnuuwScN4TQPjVJytui9VNL84ceh6JzPKtfDFViKdzWE8mhwUtjxZu55GxhDzqvAn6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jZxMLsXm9B2uWpT8pgzfaTi9jN1aJeDh7JmGqbd8sBK35pssB7qKpEEmGJ8YvDEzndfYUBQjSBj8NEC4EGikXDs",
  "key1": "41GHoMhJr1uge26ZWTfkYr2mbr2Cf2Up6v7pdTyY9Y1f36aRVEJhR47NZq5WGQsgzQQwgH2RZYP9ZfzprQPYsS6d",
  "key2": "4XEPCWxvDMNP2NGrQNiepYMUxSoiTA2cez7HnDCdvAsbczbjBwJauisveTCYv6ZetqwbYzCV97Wr1jevbgF73WjV",
  "key3": "4mDYUb2f5D5mi68wX1nvWtxQ8V4SjTtUjNNyzvL4Wdg4rjoRqTc211PjAT1iFc6Wz8qqyA3fTnTyrCVjywx24G3t",
  "key4": "4P8TY1WDG7Hf8hS7NCD3oBLfbqbeh31f9sA1hXsC4uPhgyAFqtRomguVGSBg67QEAJFrkpcKw7L8mX1Y4NEPXdWW",
  "key5": "BMeEi2kBuqqzqe2V2trkJR4c41k9iZkQa5BEMqJEqETJWK6M799XzWZ31bTasg7uvE6BwcqdgrTknCiF18AQ7Ec",
  "key6": "2dcFXiP2esjGbL8zFnaQZ3H8GKxfFYj5dmb5XnDX68SNYCpuYgjVBKbVJrwqYKTFKKvWzv4D8PDhy7Ss5CwvCPj6",
  "key7": "2PJmovX9zv7UUjmieG2zoc7kW9oWpxzdB4sQzigSXVLfJYKoxN1mXUtZdN461a8LqQLREZgozXcB5UkpiJFZ5mbB",
  "key8": "5TToS8SYEgjvZJp9MPbfonaswQYhVgQYS1LDJRZaUyNn2P9dyPdAX1coHbExhvYrRmuhGkGAh9SwswMiwExKd2HU",
  "key9": "FGtpaT14wqzaihrZaAFc1aDmY6owq3SFLJbwUxhmVYwvuvZHiRHNwSuy9VG9WqFKBpb8Moq1g4TbLeRc8VG2TBL",
  "key10": "4WPsSdnthqTxzXSugc3wDGNZymwqqapxGkNHfkJ1W91nH2AGTn9UMec4FFphn2AttGYjXoTArQt8drD58QAXtzrv",
  "key11": "48WgUBr1UmQJHRVuayrcU5tCA86EwJoKihCpq2ni3aUq2njzaJRtnKDVXqsmpqgNehY28g4XQzEkgZj3MpxfnsHA",
  "key12": "27nV9L3oFgahEGKKHSe7mfjHfG47PMTCwFeKqcFQBFzqUHzFz75FGdd6oB7tGLrtjX2JyAE5ihLNig14MHE2rob3",
  "key13": "hDSMTzJurzxuT43kpZHXEnvQQ6XYzJTxP3gYwVa9SqtUZdiwKbz75qJm2v8iY4NZXWxYYhAHwrPKUTsLac8vLih",
  "key14": "5ouX7VSihWypYC5EXod9ceRJyaYM4Me6pTtxz3DShgJWCBmB2P4TzyMkVyz4NBGEkngKmL5mjafeP6QiE2XRgfc7",
  "key15": "37ZtQxo9WFVQjaDc3w6kLFwN3MpJtuafXJTJFHEd2vo7Ly7wwosf8qY8XaENWU2e2dYAA47tJC5aX6Ko117CvPXz",
  "key16": "2AUD8ER7WaFinQPfe7ALUs4fvfCxiGeBEGq3EoPnQZXCuPzsVcdxCHmi2XDvekn5gbzuNpXqunrG5Smb9jThkyyV",
  "key17": "5oTLcwtTAHf4mgvfZVNnbA54kTYLTdDYza7e8hosMim5fhB9ADdQynsvb4WuTewCLqE67HGCAX3PA9x5QSv9Mjcn",
  "key18": "5LDApuSietcTjwfM2NoyE9mN8gzgvS6UvHNVj8jNaWnf3ociwVL911LjbPPQKw7jt4HAdmJjaU66wZPALeshssKz",
  "key19": "4vCKeA8fkfsZsCZuaFmyspbjoePdKYG3QiMvYYDQ8cWT3RRtZFnjRNFDZiEEoTZsnQ9BQpFsULYMn74UdemogPVX",
  "key20": "3s575nogVVkSa6uJXgM82PmyAXZjNJrkgUEuH4yJ3aU6i91U42EQfxWPmcJmqiBfkQRmpeSme6RpCuLBVGf7hTeC",
  "key21": "3bHEe4SRAxYkZgRKvqk1vnXd56kccsdzxt75NgUrQTwHAJLX7zyYud2BJAzew6RTnLHb59Fz28fCdzixgaNzu2x4",
  "key22": "DzFD7ox9VfedoJyiMsiPc6nU8ANiXbp3WRBskwMi9StNCE9vSRWDVrALWR9RojcD5Gy7KNmSJ8PdUT9YzXxzkBs",
  "key23": "5NEanrod1jzLagJvobsDaGNh8JWa4hZXNa5JZqj4gWYWpm8T5EKbA1XE43U9GwvGrmT6qoXmZis86VKJg7XaS3bS",
  "key24": "2Gf14kZH4kik3MxvTaNRxf6vEqJpjdYeKq8bUt4rv9TYpy6HWmV5PAPcacTrYJmxmrL77afGspbstMhRQDbKuTm6",
  "key25": "jEThQYxJA1k8trKKp1j1ZGA9hRedGnyRupxomgCUeAXYZbbJJN3yFmsekAcBW11Qq3tAaCeQRp2dwTtXWv5xfZa",
  "key26": "5wnj9ewdZWRcRfgZGg2fLdjVMe6cthxxN76erF8aSBDUUH5CPPQsiVQq4GdvuX5nymWdTMx2cUVdp8YBKdjzmEBK",
  "key27": "2Sf7dPrZYyXkyL7optL15syUSkPYHN4fHiBzzEfkvVBJVuP4fE5pLnuNPAs9rDMezhTqsDstVUrq2uCZ1vtbTXdM",
  "key28": "5rsvPKHieBfo6gwc8QFnKLcfyMqFGKv6WZPYYMKvnPwLjG13setJWb3M2WrvvaSiq88s615QdjKG1K2EZXn1HxM6",
  "key29": "3wtKj96GVWTWVP4JRfebXmrVz3vRn35AB53oEieMR1xU7A7FwkMybsDXvq2WguygTYeG6h7BbmGAcs1Kz74w47XU",
  "key30": "BDRSyAXFUSiH85BXPC8RAzza55d9pQNbxJQuFFUS4pwf5H2wCF8mqwV7m5gXuc9XBDdNhKShLewhmBSu4iteiTa",
  "key31": "5tgsncqPpUBnmUWV2hFzqLGxp975SpcHrMyhyfLZs2uftz7CiYTEZEKtfQ3yuRnaPosjZe1DLKUwPPWGmWjSmfW4"
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
