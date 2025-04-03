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
    "51dcjTLqDX7Hb655PxFQA9qPWQF2Nhg43gtXdrjRzNw7FDqR9FMGY5dNKY4T9JC6uSHkLNFL4zTEiEp2Mmn9MgNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "joG9jprVNDarxRCUMkFutPuWoHqCDjNjsSxaLSVaRsCkPXNzfd3AcQgYn3E6pLHqmuG8Qiem5usUz2oqTwwpCYj",
  "key1": "46qu2qoP5xSJe9S4w3ctoQoVEKMUSSkTTs4oPeWVCso1Xp7VieHkd1R4uSV215QwBVLGTKnMHGhKDps3UZ7BmFod",
  "key2": "hnU8QG92L5shtFfDWNAYxWdSHyfEMGp4kyYVWmNgRVpSNBF2emJfU9KMmJYgUR3ji6qYsq7v3fXMr3AsooWvX2x",
  "key3": "4pWFmnSCgcdRZ6SfBg72CKeKYrBRzQN441CR9HbPzuunXc7sGJEU7EQeJtjPzbxwbW1KadVi6qwk2ftNLGxuDHMM",
  "key4": "5QYNpBbCDbdkuuyTjQUzejqVMd6nn4oj7tPkYv6GaccttuvzYXjozETAVVaSHwQj2rxxjFibA28994ixj1BFcVY5",
  "key5": "2FyNjtYktzLuEqVNnA7kHzJaKLbjNFLKhbRR257yVP79CwE6BfHrP3c1P46WrxdepBkPm9jcVFvyiDX8vei2P4At",
  "key6": "5KX1LXw3D9imAuyre95N7rVpsk8Sfm41fMovSKXpXiDLnABfaDM12JgM2qGi5JH6yt9nAAfJKATAGU2y1QmzC8pb",
  "key7": "5SzX6D1DE8rpy4hnbgow8bScuo2YZPmEFAn7oRkzUFi6hXo93e8cgLrsibZdziBTuRzERi4cXuxA6fJYWeRZge7j",
  "key8": "ELUc8fDkRdo3dMAksddQQzYAMYD4dqAvWeoEGfzhU1s49tL9gtEMW9roo8WSzKmcwUi9bxU8ETSvFgZgUgD5fnc",
  "key9": "2Finvq2DfnxcjaH1XCBDGtoenodPsaVbCeaDn86mwggBCpW3Qr6KdNSCynhpWuLnTbD9qMGhXbvg6JYtKPhMtdUZ",
  "key10": "4ssFWpgM5yZqiiuKeUxFP8euaa9YPwDBok7UoMvVYSCT1PPjn5WhfNyD8AMYEwAresuF4zt2omSSfkJdbCgUrA15",
  "key11": "295HPZdhzmm9ZqAzNqYfGuDCAjdCRjHjrtPTzAZH3MKBQ9Eq3e47huMJHJGrpHWLwDyCpom5G6pKYurULdcPoCot",
  "key12": "XchaBx2NExJbXk79q5NsS2WY2wz5nqJMqzcdWRdbVwxqKXNcebAXzSUMqvLDjYbpkgEWE1y3XfeVb4J4hxUN5iU",
  "key13": "5AfbP1QSVZythHzgw86fNBw6exmVvFfo5RRKZRdEq2N5brWvKSh8jHjwkqMeDLh5zhMuniU5QBXVVcfEoWHbipCN",
  "key14": "497EJviRwKZZAWBREiZDowy2EfbCu7QM7dxeNgzyvxqdDMbWAkHS9ACJVFHcaPZeCG62qFEZVwn5v1KVgYrrm1me",
  "key15": "5EHBabcnxstQYripyjKGPj6kLgpiqU9ncnwkBmeLVL91g8UAe3mPzyVtq4ZUxiZUD1yjk38egP9Xpf9hNN16ZSmD",
  "key16": "64RdwEK1gVDjBFrT2QzGi8uDHzPBsFjqxk2bqbR8LuMPDtoyyFy9TVSGAZxHwfbfg4xF2Q2t2oCJ8V53o73LfSkW",
  "key17": "2vvUP4MYDHxy9dRJCXAeNJE817HpN7fMCpNd8tcksrmyxQqErwb7ezZ2PLzNJcv9JprS9Fv6WhjTzMvHGy3EMeUT",
  "key18": "8LMqYZ9VnPCVRUPwKnoMEU1is1ypnzsmNPzcvb5d2bLCSBZCpCoVTtU9Pw6VrfjoLKPs3YoTUbgtJEQmLESGDBa",
  "key19": "4Sbbiay7UajXBmrNBxNysVWchx5sHCRzPMj4iHFGF6wJ3D67aozeBJDUagDQmSwnmSoxQa8DumXoLNQG1sCRHkk6",
  "key20": "EbHe3PDyF6wd8pV2Pjb6sA4d9SkDdHyi4VFFZrtTbuckqXPCPkuFfi6DTxAzNybbeEgpu5PZzQiED8SWMBpSBYZ",
  "key21": "2Uty1U8keDyqv84KdYheqm3XHZ7Y9UdUcotQQaP2g5rbX6XqiLuWF9f2S41SRL2dopBEazHFoyJjpzZyGsMvtVBi",
  "key22": "5ZnTR3pLteoTbc3T92yYy6P79w1LGFPEMLsE4gebae4Jw7DorbDEDFitNX4i4bhJ72QwmH3QteYfkpofCpo89tm5",
  "key23": "5t1VZW4wedtCpPxVpcDWMJpoDE3jq4S2c5GvYyd2U2kVYKXi45gBmHfQMXQr1bS5kVN4V4BvnsCXVhK7uWQ7Ybdy",
  "key24": "2nUifNw3xqRaZU9JzkZbZYc5ksaefyDphaH22TChfksycjSBqnc6wJFUuvgPGrb9K5A5Hv8U1WhCmBTJvJxcvK9N",
  "key25": "4oVxbSgBpZq9xhLtba9SmVDFHHjhwXVQkPNaBCuDPwFnmBUXxvVmGkAcQo6PwVazLDNXkAfmDApRD9DzaAc8J9mS",
  "key26": "8fZ1TL4MXz7udFeptJvBXX2fkXz8YEkE65qiR9HkY65e2MftY87WkZqkhcWUSNHmcCV1VHkJhGttCZqWagX4J8L",
  "key27": "PHiDv1MAcpnSJPhLLuonBHfZgqhp55wLhJzRTyPP4PAkVkY2givWCgRBsFhc2Q8MFMFLdMrTtXDZd7rn6LZRGiu",
  "key28": "zmV4WLU2PHEW2TnyXXnsaNdB4SD8FkYvE5JGMtf9rWkc7um9hyCSNRuh9uLQLBTmXizjzjGscpcJqRYo2UinQjg",
  "key29": "4pvn6dVAMNA7fFLK3Vzi7vnxUEcvR53FzNUNxgwZep7hoHyqhe7uaFUe3ThZu3uBaeKVxG1kjgjK5KRpYZ9okWab",
  "key30": "43soKfXeaERiy3muMitaZc2BVkuVNjnqasWdvT3tQLMert7pNhnr2vyC8dgeW73zgZSFcgynCA9NioEYmeHaTxE",
  "key31": "5ooWMsVHcLQKumvuq8VKYZgCY5x6K7PkvKmwTAyFAZM3mZQwrpsZBr7mUtpt3ZYBkwBbo46jN9eLyaA1oKdZvdVY",
  "key32": "66KqiDtWDDKfN3NTafgvn54enmt1HybuGKcuo8rqsfVnpPNRgv34expgrTegsTNpC7AMNNV2C8toDa9rWckSDigz",
  "key33": "56qPyLs1jJKzv9sV21J22qtRk4AfHrARf6ym42ySWu55oN5n4r6fB9b63FVHeVruK7Vo5RRJBFdZHAF7PEE9a66o",
  "key34": "43dVPac94MBaVd9q2MpnsZmS7yWLyW21ZmCYcEjkgnDK3iHsPpQn5925B72gtAesXKpqfawY1oFo4qZ1nrd4QCJE",
  "key35": "JhoZWxozvuEUpEszzeaiKuPByMp6U2Fb5QntDNc7F6cM3zwWNgey43kfez4EewVaXJX1XhFzBi2NphKMxwBWMKY",
  "key36": "PJvwCFpNs1MDSigL6xzS1ouMpw8ezuMvmhEZYxSz6MncM7fQhiRvWc31ftF89J9CTiS6Vr6ECP4nF4Rw2c6g5yD",
  "key37": "3CvjHbsYnnQc6gMJ8GPgL25tFbYXcR6DARkvezD5xiHs5BWQvbHKpKexKXiqLRJtyPFLNV8oAQ3JnXgdKY4hPeax",
  "key38": "13xybQpKP7PgfYkekPrFZrpp2iKkPTmnyYGScKewDNfJTTv4cUwHPPnc75KsViHnMz5jLzGyrQyWU5jXWCwGE7N"
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
