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
    "3fp42MvfJi63mcW2x1h13361wJNLawttj8t6PnxUc9Rw2cGpxVuczmVXmYibz622ecszuoKVYmkLvTBqQSXxdfpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iNqyFCt7Pf63yjY9jiX8dMoNw2W6LD8e8649fGwDxcK5tgfza4XjWmRiFoPNtP4r3PmoitWbAAuPW9hEt1ww8LQ",
  "key1": "4f7FJKnW2cxGdLVML1p6D5AoqWkJPPEbg6L3DwzmT73ZUueoPViXXN8eBQRdba6eSfcH7q6yAQhYNA5uo93vexJi",
  "key2": "3QkqcXtw6nby2EC6j5LMMzHX9J4mFyj8P8A3E3mW2iYYaWzSHe4KUNhLoP6dX1fQsSNoxPbkQYHpuKC9Dr2qN54c",
  "key3": "5P2gttyHXp3452qGP1hxwgAZW299BKwsnAELsY679UzNxxU8P9B6ERk9fQqqv7FRhNBLv4EKva3Nyb4dLNpgu4Hz",
  "key4": "2cidgQzvy3MNZ1fW1aj9mXpV3k5k1GwcZ2FTfnNP2SmpivdEhsKCbGrJ6uvFUNr2XdZR19jx7dmzS5nFZxJ5K19q",
  "key5": "2jh3mJKpEKwwMJSG6DuVbxP5tNdBpYz2JjbciJHKs8BKVyoFKcDQgb9ccHL3uXGDEAY6Zsvqstqh9TQmZAb2v3GP",
  "key6": "5PVC2kGsEFLBJuv93Aaeh3DJqzH8p5Yv9vNG77TrHiP5qgCRBx7y5bNZRyM7yiRw82nWTGWHqNEMsuQbY3zsDFvk",
  "key7": "4sF6L9j5FmhRmpT2Vs4sV3pLvufq1qTF7W672FSMXmpgqTt2MVfAkezyqdESgx7mL6HjUYWhqXZGrJJCVA7sDm8a",
  "key8": "49seESDyHrFP9hw4EMKh2yoBhWNjcRvoG3iBrb59KjHu4abxsWRE3dgg1AnqxmLPSa9kUZWrU9Ru3Z17acpGKTyr",
  "key9": "49ap9NF3zjiiXVFeYju7cEZPzukfTKb2BpRscEzvF4mwzfKpaJNgGbr98Th9DGPwuw4NksLNAeiX42vQoJ5qMAFC",
  "key10": "4x4vdqVMr3guYmy3visKqDMHuKxi1559P4WD84HP74Vs3G9Cv1Vwg16yhUYarQGViTFrCXbw2xskkDiMiyWiXNF3",
  "key11": "3rFkykfQnbnHxGwiU6fxbUFNpkwhQHzdRqC3rPCu9dZRSQJtWqsWBbYPDuaGJ7AtxvJF2UAGLu7DMPs8VNuKtLW6",
  "key12": "242hyK8qA1agTT7xYRBFkYtghN4uko7z8nZof8hwvYBLxK4UAtgw6h297kUTkcxW6vXXLNo3jNHDsoraQV93kKbL",
  "key13": "VdeiYv7RxsxfiQ57yNAbYaBbH64PBUx9E8fkni8AUYzQgesQ1cdqSeXB2LrzZ3kBPgggCrhLM2uwBTahVT5WJ5b",
  "key14": "y95RGFSD6499xcvj3epaaTdLtvVU3SwBXwUqer1e1KPp8hbUPYPX8zNBh69xdf6Um61QP1hpZSAbkrAioWVV2QQ",
  "key15": "24oGyP7zUwUxp2YXc34EZ3mryUJvpdbcaWLMohtmc2cjue3ktiGb4ANydC6TKkRSuxMoTw8JscJuvdFeq55EdZZV",
  "key16": "2hEpfGrcJmAyvs1sShzorPtTyzKMtmFAMgTAAkjrNDE4w3qpw2NZD33nG4mnMvguuUUW1uuQexykqYzo7FDfBJ5S",
  "key17": "557nSPWztUJbwvbdKRJq2aNxZCTyGzVVPriVrZCVsbnXcbYw3ZkFvdAa87BqQMVzupQDQsGw4fgjVXpSuhgJc9iy",
  "key18": "Ndt6xFu1znnqSPHJgc6S4HKuaM4MFuRAnmGi3Pqeza4JTjQkbzVJVzjCYgT5t6fXyR3hZH9Zdph2eZJeZadmqHG",
  "key19": "59WK9sWC4Vgh1dBZVXDxx8BsAitUNM3JyHRdLgCXdBmxWMRMVoV2jREzDcNvNf9ircAEeqdtYS2oH1RaEcTk3Kp9",
  "key20": "3oLTCE5ZitLHBj3XZmDx7oH9vsUqgDFg7vk35ApA6srokD2z3c2XUrsBkqPiZK3vG9zkhTMkFP6gHEj1LaVwmiFd",
  "key21": "2AthUdupsDBTy1y4pbWh768jXJjoxNKEr2x2AgKc3cxwejpJh6gzTEzwhzw31gZDRsiq3MVDaZTJcwVkkUyEJmUr",
  "key22": "n3joLX122zWPkYgQemXxzboXFm9AuhJ7H1scbXFcDvfdTvCS4UtQhTQ6zVTzFo5Z83mdKtc9mwV24Lwq7sc4Kau",
  "key23": "3J2o1SCtwpcCBxJ8mpzXGnjQPN5aEMkrgDNLEksZ2JprgSGfEEbKYN9v9Q31UvH1562Eik2ium6CnoVuTXckWsrd",
  "key24": "2AdwNtDMjgzHD3itk6L31f9fmvTYaniKJhhgi2mFdypx2TURWCJRYumLaDm8uvs6G13nvJragKKjU3M338TRQHzP",
  "key25": "MmSo9mRSjCeajv7Eh54kDcxfwHwy7wsbnsuDZAZ1g9Ka9H9V8sQjCQ2jEHDH4bJ6LqzZoM8UqEyAjrPVpZX2Q1F",
  "key26": "3ZgVchnJWGTV7cCms7ZajM1UBEESfi81EMs1YoNzBBiao6NbpKffVcVDLnHRmUyRfpt3HhSSBbbZrqfoK8maR2h8",
  "key27": "5nRoey57SqnM4Lt6xNG7LhUa1Wy16CYDoRJ695eexTspUsQEkf8DwbPWwhpV1iUNJvJyq6nez9Bxn9Lvtfe1AApc",
  "key28": "4WFC6Px9CiUuiPK8NZufsdAVoJyTBmbmG1j2ivnjUxWb32nHDCEHRNALNwoEKXwnTMTTJzMDW9a13uXBjhqpHQvd",
  "key29": "UYmYRZorXpsftjn1XW8KknzwH83BZSz8RExS9mZtgsv98pQY8jFg3aTWm3TW9oy1hF41aB68tVYogvxjEnBWQNh",
  "key30": "PUiqyKPd9Tsvs7wUvZHMh5GGQXG7QL99cFMAt5WHGKDptfvSpQxvp9HJpnKTAPjRDoorbKzoEBDs9feCyrQ1rhW",
  "key31": "5oTRscvXCq8FNLkhKpa6hHo3GW2PRLVFxwiawHxLeSrycyzNtjDLYCruA8jRH4d48Fk5RdQ2ZFeJ1MfvqKveYn2C",
  "key32": "59zEJLvTjMj53Nb8P2fHX7QKQRbrbbTREx5QjQXo4t8DVGVfbA5onEzQ27eqwQs2pHckpULD4eMGUMC3Ts9PiQb2",
  "key33": "4d8YvLAG5jqwhXGGYTaYEBiFM7cTYXcZ5LJBXKfnyzoBcWY6dc7RQqoKrnKLjqj4boqLrZPV2Gy1i5yCbNJcSmZE",
  "key34": "2nh5EhVAmVUod9fZr4ekcwtg65jfaS4bDS7oBB9GbmqsU3o8w1spG1tYVJuy2Ze2JtetUfopm23qLz3VENgcnGq1",
  "key35": "46eTmEXJmYKqkPXf7AYS8MW2ELL9c5NQopRyNzkDMasjmVqcDWdyYu9sv1wajnYHGZQfz8YKbqod1HH7sYWWFodT",
  "key36": "5mMAFqcCuA3wY2k9W95fHqVTCTgE2tYmc3VujPDwTf4N2r2CKgww5rbowY2NxnYECfxPHPqhXvEzEdTafrRVDPhB",
  "key37": "JmE7PfiVhHPYkZyjiXDGieWsuFjY2bBzyidxC68bApqQyVENi54Bqd9ZqnAeUNYFGz7bKFLQn9z8ucUyKPBEWkQ"
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
