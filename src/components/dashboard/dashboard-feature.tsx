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
    "3FbjxZTmUMPL4w53e4dt4hW7doSkKNyeW3Ru87anLwyGj4RLKtrAR3LyBnYi1f2v3jsv4ow28YBNBC7Fd4XTn5iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h2FEwHUAFcUq2hp1L8cpSXkbJJfQGQApbVNWGLAsrDibbGjvmW9Mwyv97hNo6qARghhZBKyr1KFX67PoYkPCn9D",
  "key1": "3GYW8nSXE9vuhcXXSJwLGnXD2QVHuDd3mL6okgw6VHhY1wjbYf8Pg7xeKGt3eYhyXSLq5xr3V7WLn1B5VCLyDssp",
  "key2": "AVSwqPbBxCSFiAF8pabCtjAj9F1N9kGNU5FpabhZj91SMPXmDKGTjPJTKCUgjbETkzjc4sdJHYTtYVTUc6mYS1m",
  "key3": "21mKnUhrNH5TY7JGYHhiTvWjDGXTBSW2qneSLPDmNcU4pEMXTmWA2dSS53CMnoNJMQ9JkkU6iZZqrxiTiySTSErX",
  "key4": "5QrHqGGKd54g4nYzHCzgQnaYiACn23kyiATzvBRxpNMMsgGWyzgmLLjxbSqV4PojmMtYSb1WNumhbUB9kdE21Usr",
  "key5": "524TM5fMnjFgemR9bZ8Dw3TY8wzUMoepBZSUDUCoVkKeshZyiMcKWich1TRc1ck3aufRVxgMkdVRVWtw44DXscRu",
  "key6": "5hxBvnuegQGwXvU4kL1qQmdBWaUxupAkXSvKmX4XuZ3EggfpKXjfGnwiCW2ccrE6oB5WYw3ZK7ewKeUATmW8fE1R",
  "key7": "2oJH5nDfQzb7DDTWE9vnagmA8baXW2orx8REzL9QWSJn4YDtzXtNx9C2kXcg28UTRxsPPN9dx8PiEGixhLpkNqHC",
  "key8": "4LukYeCgsF3gR6eMpTnV1ee4tKcLNB68EHXRvT2hFKnCzhj24WKmF48MHeXbsf9wyFUH7hPovUMfEtxgPSqhW8b3",
  "key9": "3oB3kz7rtJc14277a81vpYacAKT6L7apXt4zm7kf5CPxrSeGu8UyRemshQWmko4HkPHafTy4eAuzbEKA3ML92egT",
  "key10": "59aQhETpFhQSZYuVFFPK3GSk6UgJKyMa5SfMeswjsX7Ajns5y5Zw5BzyE6Z8NGmgbj9rie3Sp71gTzMx9vXURY37",
  "key11": "5XyXCLD5W9FEQsyMxfFvRSP9E2WUC5NB4oyAztiCsaJVS4X7DsvkSwHkAghupokEnWCPdgxAfMUd1kWM9PKtwnWh",
  "key12": "5tz2194CTXeCB8DaiBMLnksqmoRwcpGTaiXSwkzSjVHAkHxphTzgvkJmjYUNtvUdr4QRGExt8ZUpJsmMrjEY9Bms",
  "key13": "3jbKHwVBSJYQ4iraHDeUnXwqxFHhgufz88LZ1eE4Szvn4kwSdXM37ZW6V69VbkEsq9o4YNgKRLAvvY8KUNY8dLD2",
  "key14": "3LXQErxwBVdtVe9suxaQn7VEbxhcNmS2aEFPwbvuftmMV97K6CXvguqniUJGFcdmd3X5SLC8nc36bUEsXGEKYyoM",
  "key15": "hXpYtW43ecjDnjJeR62ZCGoY3F9ZTicz9qvmALvmNDYc4zqiYXApXswuufHoapy3stKrNBNMoEv3Z9NkZqvCC6T",
  "key16": "2RF3Yorrc9Tg8bnhTGvUXedU57ymYjERX5BWGUJGbrzcKC3Y3Bqinh1DXhTDEWonetLTTsxDCGokrDG12wWxdemk",
  "key17": "5CXoBSkSmQp3zrwx1Lamx6ZdX91CpwmzKGKAL5xEzU39ZcEGneuTPC4Q1GADNKndjuJ8FetyqZTew7vNepDKFKct",
  "key18": "2aYdUb8MBKEd6eTYb9mopwR8HDhj3ydr8V5ctTVc5mjvu1dgvVAqvpNbVYEPCtP9y4vXeAA2w7rHSS7BH4MNAg2Q",
  "key19": "31Dh7xqeyP6unzWaDWnVkVRLxGsdSEcmPcHw3KEgm1fSjCAXcn8gVD5fGdPrczyqB5rymsiMXwHU5BXgvAoS11KP",
  "key20": "5TurUds3hiA59nY4KEvpLR9fmTWdqh5uvzvEBeSB9xFybx81A7JSffVbCRHSxwZFj46BhZWokgeVRqSMXZ8ssyuA",
  "key21": "2wgaW1zHQDyTpuGNSwC5UicxH4omUtdDjufYgCJmUTXqts23Amazw21Ao8MMLg7K5q8gJtJwePXA4wEkzo1uij4F",
  "key22": "4XnPFbELwcGUxVpzmsxXNuiCF54Uu1MuRaPpeMceM9VwiRDsPgV4rwiYPBV7b8wUxqkBpQQghxP6FfP2qhC5Lt1Q",
  "key23": "2wdo5KytnvQjCfZFQHsvTYXM7WDKLF3h9XJmQYQpczCbFpdRDWBWpvHcNgWjvLr31wcxb5iCXXSQtEhhKgQcBkS6",
  "key24": "YS1mNDiR85cnypziYkt1cpTCA56w3AMpg4w1npFWDwZ9gTdmxEWYctkZpaTzaxCFzvcR7isw4BPhg23DHhYL5rM",
  "key25": "4pqyV8ARZ2729JMfXviANsZzSorPL8Nv16RbLpRVfRnqV9B7oMRDMSBpQWNQJGvniFcgjTJnEBkaQ5iY43uP3ci5",
  "key26": "2pj5FHDUQxKJryWJdCXuKmf6uXfifwCKsRcamCdydn1SjhEKgy5U9uPyJGuVLauQGfXoTpbmRmm1gRzgxp1mFTaE",
  "key27": "3BCfHnLgnkh7KGDbPciTWVsTGkKDFQ8DNQdDdjXn6VTn4k7StSchVDZCm5syEeH9idHRCZVL3zTAVB3VMjtgeL9A",
  "key28": "47zfXRxuyZGktfpTZAoRPfQ5GqKAQHko18wGQnYVy9B5T1cJhPVHCwQ2wievuLTemPJ4Zay6GN1Lfb3xZWf1uVrL",
  "key29": "3P3J2DmwdeGSQznUBfZ4k164KZRnd4hESYKTKiaFNqG6uuL8n1RAB4b8gdyPGBmmeUjGzPwDD8hbPxEpX7ezWuEc",
  "key30": "LekeeHvBU2pJTy1EEVXxdMwNNZSReWCR9opzAVtjbzEwLHSHqjV13uT3Ur3i7aAgLWHZGu5TFKj4vaB5rcZbM21",
  "key31": "bCPNACNQ721Qekwitzo2jpYvGxqMcGaCP4uFgXqeUAHX4HAiMkfs37HGd3XHJMGNuy3WPCVbMF1GL7gXePLmzGx",
  "key32": "35TEDMdGukHTUzsARMJnrvod4R7sdSG4BtMvo9LyghSGCfLLpB9ph4ZuAY4qYkftQTQ6KHHxLqQFKo6qZPnAANyK",
  "key33": "5XoXnqAbFWYPSscXsDCv19seEw3xM7axzUveaVNNFLdmrkmiY6cQBZ1aeEd51tUqvuDFMwuW9RJTb9fwZ7GXKbeD"
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
