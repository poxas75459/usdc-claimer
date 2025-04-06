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
    "3RPuABehxjYFb2BFCJhQ7k6aqTEjYNTYyrQ5eTNRQdwLq6hXKZHt6WCqTEeYAYPZ6LFFKjcHB3Rfy7tatwWrPMP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rSaY3vw5RXQJiSpkkBWEQJqahQC7afyDvr8iB1hKhxnEiC8FseKD4LDuby5akEdfxVpEQukg11cfyrPoL1NKvzi",
  "key1": "2UXuBtJoNcVr35tG8PfyXPZkZ2CErkphHEYi3rTruZjjxtkeUHF2zbKnr2hosi6vcgS9rgSkoV8p2T1NNK4j5ggy",
  "key2": "66aSn3SLwh2o3PyDogBxAoTmJTRcGwGAgdyyros3Cv4McrU2UuU3tP5epfLezsb3sEcTEjQBjMFLursEPSqizPJ5",
  "key3": "3CuwYG78vtvEiPxhhjKX9jX2nJ66fuaJeX9GF8j1WyJxdbmaUWG2W5XePi6ndNKq1BAikP9E7LXr54YcaToojRPw",
  "key4": "2c4croe8wdGqebvodoBuVwHZhkM1D5FGNizPa3KfsVNDGa4MWWzni26VpUHsbp3NbLXwfct1aGMRRQQyjDnVD7d2",
  "key5": "3FvQGwppynCfYKQA11YLbPN4Xe5un741wdmChgHcXXQFVzY8r4mXeZcibvexARdECiPmTkpNkpC8rwAvoybeNfC3",
  "key6": "3JgUwa6H1gWgFjigpeTNfZxuwikcNTYV3F7rUCrtxLowyQ9rSNgrqFqVzEvfJpq79BwaBdL7YWQp725oHEguRQRX",
  "key7": "57P18RfkRzwD2NSkcEQcTKytozBGdinAHxJye8hkiBbVNX8MFQagM9U6eTzoAK8QupKwGvRDcHbAZfWzU1vYyksa",
  "key8": "3SawWPUZmr342ifhT4eTS1vngWrvvBUquDJhJXk5XHJdmPAKafY1gfPVmgpLTB3FNqZ2MMgSWEMeQwqJUvQs5sWZ",
  "key9": "3KuFdHXKUr7D7sGbBQ8qrHvUY4t1ymbVFMFjeJRqFfJTYCPGrkDHG4aLGY9yCXsHY9chKMMtQfLQRNdr2WjGLupm",
  "key10": "2Z7YXoeoKoFtzo41c33aDr8hVxda6mytx99vYasSzDGRrkdisPYeaWUSKeYbqrdGzT12L1YEYzawVYWVqjvX6AdD",
  "key11": "4wFuDsfaF3KA3htMhFVaNqnrBbNc1dz2jibopGFT4ChqDUssgqkvPULEzaCsQ2mGhPKNyWnvLo6yqFp6x69VJAxW",
  "key12": "5tdA9cyYyDA6CVnYv6TwPMZQYM23fYRnMCXKeZ3VGkfTm1dZwNRwqhANtv2ZdaEi2yxTBSWzxNMSQ9p5cU5mBXo",
  "key13": "3eGRNXcfsqDNgEW3oYZsALBbELwrsWy53XFoeCwWVFreM2RbwQRY7uBBPMbohcwKBjB646LnAYu8D5N5NBspb1Sh",
  "key14": "2jgAkWSFwy4FAsZkDj4KpjnmVhjhXDUBziYXEboo7TNyWWNU3eyRDGC8N3sX7WuHBifyvMtvDundEcNtkuZiXxbg",
  "key15": "4EZa4BXdEQhChoxJKLQEhDbxN9sMR2dxawusqsj64Mz79pdMvsk8dpAxJCrLeoM6d9a5uw7UGkj8wS7Tr31waVfT",
  "key16": "3VrNSZVySvL7QdBq7TbrhWLzgudumNYZt9fkkY5GYhijBCNusc1KFknU95S69PTZkmjHyhnbyyVyAWsf9NU1z3Fz",
  "key17": "2NBivgPDJknVQAJL4j42JFLQx9GHsNbUEit4BAqWaZY3geDQ3C3zkwbnuJ9zg2D8PdjkQPPScVSJSs5YRWdquLuo",
  "key18": "353zAH9UGWrXzZuf8T9h5cNKWkJ5FaJLWXhJxqsxBJUuA2jd6h2EQuPtSncrSLmb6hWUvvHziLrNEa8wXUB4GEqF",
  "key19": "5C8nNnWC8wMRnL5ovrXtseiJUe2Yd5DssBPXvsntaccWVUxmGiGJ8gVZBS7RYnaXMXVAT7GNZA8H8yYrUxZkgaZx",
  "key20": "3uhNSkp3iStV1JjbDoeiqhwtXmQhUL9RYGrTcv7VoJ9hSLnty6AP96fDjPcaufKfihhCv2aRCfKjTLghboTEoVi4",
  "key21": "4CwXKm72oQfekGfUPTUeKYZgjaZCGjopwpq1YQ83TLVP7dvomfHnabajs5AqxMcDJs2sp87AYxVYWcPN9kPwRrPu",
  "key22": "4ydyYWmPob5NJVUhRVHUbp1bB2TqcC7WtGpk6BCHhjndYuByAALa1oqE6xFyDtT1NVjpv3jpyGPvu4MDJsbkvJtf",
  "key23": "2VwudkBWyBQcbSTeVYrUWD4SzYNUWQTB1APmtHkAvZAJE3KHNXub6RimYiMmaxVxUKdGzLstVpWG9bY3LnD7zrPj",
  "key24": "36zBTvDVCUo6Me3ZU8sZBRhpjNtcmbpeaDcukho5N77HDumWjxakthuTkVTpSXdApAdzyh9qUcvhnsFfbt3UM4ED",
  "key25": "5wRw45h5hBNHnB4hWAWjV4qavVzPr6UQro1jeHoifcVzfrw7iEYug9TBYaXbPU1NJ5PADRKLAKDckt4EJxajvp3y",
  "key26": "kFo2DbGx8XUt5mqDmHQVyeHbrr69MHwcnh4SkKhQawtTe214tLcGYk4UEnhL6U23cFJLi6TFYoo2rPcRXVBXg1o",
  "key27": "Zgz3ghjppnVLhYmkBeWQ4GFz7i7cNsznrJMECDEUZQJLGnvQM7CPdbra72ttLYkmyaUpGWJuAdBpPYuU6Pk231a",
  "key28": "63ntunCo7v5mNSbTMeAARZNyRBPpkGdzhtR8wvt1Ayz2PcHGVUpREGgX4RcnPUZWx9fkbjAmYYF8b5F1vEfnp9it",
  "key29": "5AdF8X83X19tWqCpNkSmytyF79UxXrFnRvEUAh684XraBw1ZRd12aphEcLEW2sYn6RWv8KybmHs4Waej9WqEu66S",
  "key30": "56NHgSHJ2xy4rpRz9gph72uVAEhfx8Ay47GuR7QmQhmBPBdMpVT4eeZcN7TU1UqAR9MJwFHUEfEUWzGrj2jLJCUN",
  "key31": "3cWX4FZn3b6XktxFincVSVao7zhtLfWMDWW8r1yBfyC67SJJjM1fnf6wzCQWdSXKReENnUCT4pY1rHKedBq2bJEx",
  "key32": "3Zekvpn5JbCKoZU7T4HKuVFaUSqrxF8GJCnNp7pvNJwDpNntamTCuSdPHpojZghpFDtZsv5dxtPGhMYNRTYMcDHB",
  "key33": "2kpw21C2vtzmD4vfeooB5m3KFXPFskqPJbwL7BVr3JmWurwZMF9XLHhrovTRN6xQgGw4CohTRWuL5zZe1qwvLij6",
  "key34": "5txxUGHN9XnLBj5qor91BQ6Bp1Bbi7rz2RnXdm8cAtmCGnK62hsCyDJbFgwyjvwC3HfNMSQvGY3KXMNjHwvcV7GW",
  "key35": "4uj3EVR4rmmj5kz5KJnyY8Y7BBSeWEKfyMCvutXTgPtCwuT3NXqdHJ84yhivHHVofDqLdM3ASEWNKsr1nCKQUStm",
  "key36": "PqCnm59JcH2TCQsu1ZhXda17xGtpcy2X9gC8csVfimHPytWhN3a4kYNmjHBXYewXBnYP91AddC6zcZWea3BMTKE",
  "key37": "3GTiJcoCKkShLkdg7XBCTEEZcFWzcFB9pXmDU6AKWbFDLGhhepGFoev9EenJsRynPzCip5ik3j15Yse5F99fjSGN",
  "key38": "sRfdKE1gRmJBqmDiHNNRq5yfFsYcQQQpUbhffymAsUrENPfA6kvX5JmecGQ1sF8QrTx9z9wyumCH5u5pV6wgAm1",
  "key39": "3KdA73TFyQ8Vw29ghHt97UnBQ9hhot5K5A8HrdLkKtC2g3wdNgVB7HHwn2qs8A5y5GVT5DjAEMhDUgqjZZXhjKbG",
  "key40": "4N6QMPPZ75e1B3ikmwj6EKeMdkmFj5auQSisUnVVonfohRRR3Xi9C4EDwLAfLXCJme24WuhBTtXYRv51oieNprcq",
  "key41": "4CWX3R2btNoy8bFGkVHga7oqxFJhWhzLbn4xuHFphYGbUM5YYe2viBAZemwRehLYPe6xuu1cEVXqWcUC9wnRLZQm",
  "key42": "2yQdjjiMctdYxKEgpZNzbZb5EqGssToVdtrcrqyYa3SywRMJPYU2FcYjh1yBDKbbexQtgNttWfesDE4dMm8P6v3G",
  "key43": "2TSueyEq5QD48Gp7DV3QfsLr1d8fWaUqZPwTCyJDWkyuaiS2S19BDhwVYimjjnc3ZWsExEjd3ydZma1LiL9dbSzk",
  "key44": "2XSMpRgnLBPeyModpNimjmgTbHoxMb8T3NaytW3GPB51Ku9nCbaJ7SVVCAiA3rJA7J5N8trmLSc5uUS25RgxKFvL"
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
