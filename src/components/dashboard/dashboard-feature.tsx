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
    "4ZsYV7xqHeT4VdZacf6oHvBvamgFg3ZiuBCxjxhNwEhWGK9EBvKBGtg5R2cqmZLa8bwGkaYiWCBWQ5sScyKp3Pz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oJ4oQbtvm8Vfk7XP7MA43BG3ToUTeUbFUM7hojTeardZJQyoQSYkoEV8wFjhthSzLhpb2CUCKcRh6G7H3Regpjt",
  "key1": "yG2w8gNJKjvhspobov54FNbEHBKhCiABJFC94AEXdByAWqYvnwgv2mvpt5RoaPEtKnB81QsT42xUsdjLyDzno8n",
  "key2": "61cxU9XiGo5Y6Bj4Xc1vpuQkVp3FA9YMnBCy8BWhzsBQytJuGS4kNmzC3HPmHzfhEM251qoVYpQgvkUAJyW4xd5A",
  "key3": "3Sau3cFK4ahHrNcmvz8hgJVQpM4SsTX3mmThWsA8xxdhbNB4DoyEvDc4aDvSwuXtueaaRrnrtTN8h6a7iTztgxfP",
  "key4": "2MPddTvqQpmRCmAjry1v3quqXTVUXL2Av8mZsmhBVvt1vpQPrsYJ1oymqRM9EYpLNDjL7SVvSeZCfJZEns23reRe",
  "key5": "5dg1L1W9jnL66tWvGJ8KATnFPGk9MJyayH5tqztG52w3CMiJD2BSt5UQu2v1XH6caEYWezidwvkisGGWPPGvUqnJ",
  "key6": "2z72MzYFwUrqEQh9BXGP1WY5bNNGh3Yp9MAENKs3kPFNZBCgpXRztKDtXerV5M5ijtyrvaVw5teqDcFHuiJkCJXD",
  "key7": "gVj9QR5JmpWdbY9S9S6Y1etm8t8b5FoWDXyPuPH5VHms9hAZGz8TD2eWvw6qv7BAJhvBSDToTU4iB7vDmGVwMZy",
  "key8": "5FBvvLsc58HaeU89L5LpxmRnJ67R8iNfH2A1RYuEAJZhBBTnt2StkiCzCM694oRJPVqNTFXqy7kCmmMjbJgHHXoL",
  "key9": "5n9N4dSxBgo7MhxRQxzGwt7xdb7vLabXeeLLyw5qgxQYcMca9CjRY5Xj5bxTcpRLLHxdVMVJJq7kRcF8M675FCdL",
  "key10": "3cy9PLk7CpWEDP73UFJfXojPXNanWB34t5BE8U3ynhX6i99gCPk3RTEToMHDqDpfRxrs9ESGgcbryQMWXCeTXNHZ",
  "key11": "3LHwwHFMVz2ifr8K3BmHM76zmyF85rvym5TU9qn3RE8mBpoN8vT16JjfDHdtHnbkys2muxnYhSYQ9XVMN33LD51q",
  "key12": "39Z4zPi5FhixKEsfLrKVWCkZ7nicHRQ3ubPTqH2bLHrjWpkTYcuoCdBRUTqhDHi174Zr8gawugCYcDhiZQ6BtPsA",
  "key13": "2GSpsX8bLocakr2YXV6yhRVgZXMeDXoTyJQfQgazCRC79JQ9rzDTuP5F6FuSDbaom21mBMUXUfMvBNbyqfqdAfXr",
  "key14": "4mS1UtLu1SzJhxRLE4KZwPSawCM4ZPi4czUr2D42WT5vLCCHgUGsqUkGPVHLpyji9XNYAYSRtnsKyg4tgKTdPkJe",
  "key15": "FauncSoUdEpzhNBc9bXQjeYJd3X7UXmfeVH8orAAWbjPcgUNwwPV7LZVddiAueSsQRQYujy3UBeA6oaaCeGcSH8",
  "key16": "8qGgW9kwbZracRkeEGvAouZkLh4E7NUxY6v5hrsRi6vAcrBdzwhCgY6CH5LuvNPPnrpZMVi6HqiFWs1y27W8JAa",
  "key17": "eSBQuPPjCDuLuMmkdgEmyuqX6vRCaFQN3X81oMscDVaWePMEVeZtrNNnWE1zDkMhLSGSJWejrgZK2UAxnLXiDjo",
  "key18": "41C6WxXTBiobPDC78P51EnMBENeief6sc13jSYT9KxmEeVBQGgYhg1JiJom1ybfVRq77rAjK4SqR95Ftr4omgnPY",
  "key19": "2z5kmx1X4vUNApurPdGp8ZmA6TY26uKYomESC7omrNMYyZFrj6Px2aXs7N9pximzMcY7EKnRYaES72QmkuJou3ve",
  "key20": "YZ8FqfQsNZZfdCPBEmmWxqaj2kdviVr8LMqFRpdWqdKhEdbm3RKfcgvJujXYcdsoCnGAFQLamTdsCyRNVsRp9FA",
  "key21": "4k9YZubEZPzYEaCzF6NDMHEp5xsKKjaytXBiPnG3qsgXPqeevRBncTzjEUY3e1qinumvhdtSce48nakNZwX36jQn",
  "key22": "2addFvcZoguysNtZNo5bas4Mw2zMLx8djnJdfnAMrAabr3EUvsfpo2qxL3SNusRArDyyG8Xnuxe7nTHs1cDckXEa",
  "key23": "4J7z2p8kfFR4FC1DLoz5QUvHeWArX65EfMPRioF8EtUFYfLkzU4GXRZt46YX1npGp3rF1k8Ye6jgSjrA76dLc11c",
  "key24": "2GghgweKHnosL6tSfMy1gz3yMke3esrT6g9k6oNMzR9pmNB9Pq4vnrs7NoXgYQSJn714wwLfYoFRi4A47iN1VmHX",
  "key25": "3w1es42wTtjKMjCapLKc4kXx9Gxoc59RRq3df3UrNcB6bgJRTom5s76mbB3MzzUiTJFje7aPsRg8HJnL7i69yk4u",
  "key26": "3dmsh26eWL9v6xCguaC8doBCWha1trbopQgYKvYgu6Y5TUPF3Qra3aj2LymJEKSeMPbhouUFpPMNHzKjayjanBJa",
  "key27": "2i3Faa3Ahyy8Ns3VHgf8gTWXeJzUn2ozVwZRezCFV6EdeLe9eKSeZxQQrD1uxKfTyfjzuNsKiPn6z5rDykMfPqxs",
  "key28": "55Cr7GAgHavh9XFxCoLoNWXVhwDSJ4X85ZD5RnPoYTFyGAfqSc8NAq4RkBVVBmuNwZ4YgqNARyDWbefYKvT7o3jj",
  "key29": "5oyAD8uCMLDiRnvwodRHoysJAdDNp9dHc3nR6Csuhv4asDYVnBfmx4xsanUAbRHEo6f5uRQFyBEFdySqeynqLr8",
  "key30": "3nHpSspDfsVP9ErubEsw1uTPmkY6T2gzL8GYBbo4BbzAGsKZPoPr3DkdjiR1XchSH66Wxz89dx7PidC1KudQjL6u",
  "key31": "4SaE519vpZiRmkn9o2sELerv1oCVdBShHr83TdfbEg32zr4U9MzHvLqgkWEMzw8azKu8f9A3T7HkxHbtAgTC9REC",
  "key32": "2mGndNHTJ6n4L2anBFe8EQfb59FjeMhbQ9oMBieQfX1Js6A4LMMQ5FzNVA6WK4gtE627F8jw3VWuJtyrafN7A2N3",
  "key33": "3h7my84K4EAhyoqq1JZMRCSgqR9iRg4XsQdzaWbMYtdLBjm3DAWYATZiWmVY6tmyq7uhMU94aWSQBdGsjggcZzNs",
  "key34": "2Ck2KmGr4h84fYu794SDP4Dyf1QbqUgyAGzMDsEzBtjfK1gB9aEj2nYfPrgyfRbm4xDoxP9rDhvf9nRa3uVU6zaY",
  "key35": "2qTryGDuKfTzQNfw3Xn4QTSwZv8FA1YfATC5cBR2z8J3kfL9sBrUmQAYRsFWaNgrhbu8G2Sn7kE7fGNiF9h5wk2s"
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
