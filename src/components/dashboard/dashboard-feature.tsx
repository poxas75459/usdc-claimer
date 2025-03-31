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
    "WUSxVpvDGnP1F9oxn6TvUP1riPZjxwHueyZhDRpHXoGgNaRz2NpJKNun1o5oBtBdtg2xkBngQ1sLCMyi3CU6E9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yv5ewQRo8WqouVJa2CjSY7YWR5MY6HgzQn4oGSPY5D5jQSpFawwjBeZ65DCetD4WgovaHMUJD2AwvbmsKdypjfW",
  "key1": "1wyVCGgxQdTvhAa7zM8AsnH1SpAE5VnzQ4FHSZFnFyFuMj18uCSBHRHvWRo65SMLKB364UQoEf2fD9DQiKX4CU9",
  "key2": "BmN98QtkYaz9FV8ZQohs994sHDSaJNUBwSeQF3d5azc6SxARV5WEqUpLFd8iCuLdSJD3jXP6HBXKuBR3AXD8uer",
  "key3": "4QQmQZkNHq4kUdHCnurmfFBfp478yVWsxhEniW7kjrSHFCBgx4GWQDSstCQSEGtxFiRNHrcDRaaFZhV6WpSsBaJq",
  "key4": "W94Mrqks9puB5aAQ3PkcB4uqz4yd3xEsTbwUQ16jmGWbUnfo39sYyt68qEhywyArNqxEo3HwUP2XdRj3VEoc7eG",
  "key5": "32Ja7K5bD1wFdSmDopvP9pMSVDaS3Pu5okyAJJC5Q7upsNWa5iRy24qkBAC8KK37vW7Lr48x6gmJi1Gx7LX63VWA",
  "key6": "56YVUnDGLRywsxNuyptAbzQuFFqPgZfPzm46HogYkD7kBs1C9Vs3TuCdc11cpbJpbqhYHSyjWn7rnxgPfPCakYN5",
  "key7": "3jqTDKrhpRKjdmGVUSKMbLdMhfMSUAEbeW6svL1PQE9wfyvowx3CC6tm3e4L4HttgWmST3vx52bReP1NPCYJBeeu",
  "key8": "49oUp7E8phQxWJbdQrAEHXYjCqAYBimnWni3eCaaF15D7ynPjXiiRzJ1Jjt47GZbFkqDoXCnXYrrghbfeTDUBCYS",
  "key9": "45aqSRT1JVX6DhfAQuVQp9bH8svEgG8sFZNprnmYaiQJZ6Lrz3EPHd7u24jRPtmGosxVR2UHaicLP6ohPsJ9Dbwn",
  "key10": "4mTE2dhygMDdi7kCLWM3A4D4pHxEHCd8nNeX1zrvHzCNGuE9aRv8dWQtLH9zR7nhEaaBuUMws46bArgvru8nhHMe",
  "key11": "2zR1qiQz2rDLpvoNACheTCzvj62WapSt9SWwcByMhJzfkknvmvuUHBsihFqxSawCsN1f4MAmnMeCP6i5aDxMX29c",
  "key12": "LDm338DoVemRFNEmGA5iaGukKTDJpZQpf1iAYhp2Kkdwe3ACLmtSbBsvE3om4zPs7WarYrKACbn8mkoy6cA1QuR",
  "key13": "3tA19zyVHVRqZwiTPL8b1JYnA7yo4Rt9NoqgiFF8pCd4h7L692Aqece5ECbpkhibGCpfgk4EU4V5zGqi69dY8Rp4",
  "key14": "SNLwJj5pjLbb3L6uYUp7qepFsyRKp89wUXbRagxGqTg7RCPXKiUepwmjq2P8jWhm9TAaAgNzDAdaS9ZfWGdPuUY",
  "key15": "2yVDZQTHZ4m5vCr7kNRBabKVqdf1UmxjV3rhFvrSKyGz5Ad9aT3XCABJyGUM4Av83Xm4Htecq61MKP5fXneQKtRK",
  "key16": "RQL8peTWMxzwmyVfNZ4PTinm1cbmDXbRuDxoX7Fk1TZbbJGtgwZyg3FwwWCUTFzBHSUPwu6uGocoiq1uSkf3K4q",
  "key17": "5qazP9XRS5de3QTFWwoL42emc87LGsATHDBaodCy4N2JgmejcWn6Ss1J7yNKDmgWfAQijx2N3MCVSEXC4VWZDDaz",
  "key18": "5iHx7FiYenq7fA9F9cPdb1P42Ad6NPMfTPGvn8BzYhgr6SXUTH1wS1aaX9K84M4Kp6Ywf5LLsSW7U2sDgStiVpVF",
  "key19": "g1bcg1go9ynWvi5NhfahxmdDVabjBNvLSJM8coVmP4WNjB78LdtyrQQPEt3ou4Li6GrJbzEerzQbWNmEAV87Se6",
  "key20": "5cEaydLozvWVYV5h1Z9dDu5ou41WFZUZMNSgqagHjMG2x1uojQhxne23nz6GbW78Pb1iazKqVftWiSe5znZUE8c5",
  "key21": "4oyYGyFet1oDvvefggt9ibtjGe96tj1hFuozLhwBSgGULAobndDaRAvnaDRCLJKtuDxcrmRWN2Snpv4FDFDrveqE",
  "key22": "QsXo2YAo8ThLCU2dRNzJ1DFWG329aJqdcP2LZfDisSYDD1nTcMkNdjC12Efqmd8FKY2DmovdYDABSnetc2NHuLc",
  "key23": "2nWQamxVL37zjECLimjgDSCnxYNVkzwZh1EKRtzPNwLqEzfSgEFofzkoFrAJ69DrhznVPXJdyrQy2iHoEJiqvAiX",
  "key24": "Qcd9gZ6X76fWmKshJu1J7VSNWvPh8SqVYVfFUp4EbWESy3kC3muRkjZLujtCEVUKeBtUbbQFaiz7sP447RnSQf6",
  "key25": "atkCL92YHFqk9HcDzhRkZ7ZM9ynbYnozXYYLRAERNCgDLmHCYo7JwZkc7XWWpkjiqkyXCYJBvAHBkQKdXzmCmpT",
  "key26": "3y2Nu51GY9Fjh8Vovet51SCqU4iU9MnwWUitzZnQEJhiXxY5dtp9zb27pzQBGdd1FsJBWbB9BDQP9g4USdG7Ei8C",
  "key27": "5Peg52R2Df719J9jkFh5JgDxWcyu2vc1NFi6BiknerMtpfoRKx85PiYhPjXjCqMfBAixykhNNqxb54xFJdnm9Dd",
  "key28": "3yHdGrpKeNc2dshnnyDkvFEcSUju7pfgRSj6LqvBBsbyzuhAj7bisGN7g8UnyQFDu3NzwFQXFGgpmZP1W8Aqes8o",
  "key29": "3T1sCVB4GYBQbSNMzecMjniBnhrfgh4kAtYEkJtoJBEcTeRvoJVsWSV69GjbLyw9rQX2Qhf6gFWEf4tQDSZQxE5N",
  "key30": "q5n9UQ1j4kTnNZzP6F98dDVQhhBff7jSRF8yyne1KHdXh5CEgy23dV243LVSgvCy866Ekeoeg8Z4K1PLHSdfZNF",
  "key31": "2GSKhRH4VKCVGhz21VyBjFcqwMEURAwQjkezHazPPvcAb3TVQ5YcoFZdbC5Le7X4KutswKs4ob26PCzS11wjAuBG",
  "key32": "5gWCZEyaNDaULZgG4AcXg6p2GBw9nuKBajaDvZueDBQySD66x11NtWV5cRmqrLiMQZQdyREWEopHWZgKhDJSi7VE",
  "key33": "mdtZDNbHYvJQTs4a6aPWkiuZeLdbH8SzyCNozuL3KQncMpWp1raode9NRLgyRExXuueMyeuC4Zv4YmaYozDw7qY",
  "key34": "5P1TTDPZeSJbFGCcuzeqRaeWaFagV4nifvEXwcRcG51cG5A4v9jsJwBHiFETcERnYoU5xhmS1o8MUaNycAysoboS",
  "key35": "C6yzdP5QdJ5B8tcHQGrNbaWrSSr2dX58greo2UpVHqfdm1NZc8ETfhBzFFCqsdbju4nxh5gPx9vdiHFodZFHMVc",
  "key36": "56mGJfH7q5CGR7h4BTrG6R7eSSkjq3EWXVMvLrmLuJyGZD8kRyf6rVvSvpowvLhAW6ahXbLoJC4PKBBbUXWhrNa2",
  "key37": "22bjsJpAdLWZGuTf7i3Sj32Cbvg56MPSSXzZ7mP95vJNPPpWy1msp495PUMjLfvqG8sY7JecTW69dKu2ntHLZSTv",
  "key38": "3eiDNN1yX6v58nkzhRJKVmTWXEaKDH9fUfzoCs1TcdL9kWLUSvQ2QaJxmknbUaBqzbXPJzFAvCWVH4xE7oZ26hny",
  "key39": "HTiAFiLWzsKUAoVTct3J7KAZpJNEG3Gt9teaukJmSEPnDnR19C1wdT38b6sgdb4aPMv2x6XVxKEfkmWHK9ratV4"
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
