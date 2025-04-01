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
    "3NZ3s81sgETkq8Q74vFT6vvzxAvHkYLtauK2ZVbTxpjQ28H4fdaw78vJ3TdhpfpbxXNrZ84coL3KoZRzLqh7tPhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34L3SE6SoknvFebDaGAEccTYzqqPLzBd4sfGGHxCiYnPQ6SPrzjzbpAUi829N152Egn5GKbXt4QRjkgHphDnPQS1",
  "key1": "3nWc3BHJ1AGBgzzWXat5RYoMnyJ452TnRFPcahwaSC3quZKpFPmyxuYbJMGYB1LS1u1QnLafYoGkemkfg8EyeMdC",
  "key2": "VQ3aKzQtoirRTycybxGwCgU9MtHL6jLmU3zF6wUEwDAHdHAVPmLmHhM8Pu3GvT1f4gsXhk61VjCu3ZDG5AAPdc9",
  "key3": "3yQykBsyoDmuw84q6rVnyvbEAdKWYGutKpYJyUwiMafvBMY5zWmq3jPy9JLKLxLPYPP22tGTAZvY1SvTUgZzeN3z",
  "key4": "cxBzkiyXCNFhpPoQNz3ajWM5nXNHSFWhos8X2YrtdjRC5a3p5wxfuEEBWwDRQq3TC2Pgpt6SgxR54kz64RigqiR",
  "key5": "4M7SSAXmDa3JQqyAr6YKh4mnogxfZyK4bzhTmdNdPqHpSaicmq8yhqMEbbMXJUqjUDUQufNDGJ9vK8hfysNEMNXC",
  "key6": "4rc1aSViGVjeGk9APtRjHE9u2ST1auXXafCLafVoVKnk8YiZNdFPbNUtJA9RrRFcpwMvhUPeY8JoFwzhqxP2WQU5",
  "key7": "3N55MFXDtGDe9yaA7hisKUb7JNF8DjbkUGSqCrp95JJZn66JJmeogtP7pVsYScNbPjyC6hX7XHroxTZ1NHLR8mWi",
  "key8": "RBKLnQJSapiZWCDXurVpUaWRvYtzuUvxmMHfNT8w2mh9pjbcpG6dcMsfmq3j3Bu6c7YWnDgXq6VW1gAhDRya2dq",
  "key9": "3mjU3tXsRuhpsYCxcNS3mhty9wDHgusHeGJgaTFUhQcK4sWzmhWASt3sSwAcrsb4ePhrFa5cEvroGRmVrfYRD1WE",
  "key10": "3jGLjhwn1aZgGDXBjrLuEHqmrFapDH1AKmNTiMADAxAvKBdD6Uc3xL7uiLCkXcshs9G1ZBhyfbWDHpX5FL3JVrYc",
  "key11": "644cT18JDyMWt4XU68QYSkLqBVkBAgqHjEQ9mG5x4YC2AkWk1EYm1t31M6XhK6PDEwRQkrMSeiE5mLFVo4XJkMy3",
  "key12": "46cBXhcHDHQK6SvhKoBCLJczMYpFFeP6K4qyararmRXFDhnVeboSUdAgwVhBo5VTsWa3HPE36DyQ8vaJBofCCjLD",
  "key13": "2gSue5vaiXDMeHPadJubw5q9s6Aoh4AcZcMNSZCP75tt3cAW6XEngjNynuWP6RBSLuTzQYzxt2TpvwjbtvTnRXkD",
  "key14": "38aLVXcrXznFaE26krhkQsncnDZeL59W5q3pF2enTnzQZHbfLivwejoBrhNXZH8W5oSp9cmwWrnSnNiHUdG8MdF2",
  "key15": "3JMoXkjy5LvpNEMKth7xDVB78W1HLjEomzgYMNMXsgany2LjvPE9oGWAYdytRXUGriLDMVabF1Lm9wKNBX6mF2F3",
  "key16": "3JPziMKyKWTz9Quy9Uu7Hodp66NUEBi7J6RzLLtaA8kofYjGrJVJiVdQK4iVJweRRyeXunQDXaygh2MS4X7jLUjx",
  "key17": "3zKu41F7i34k4TeG1HhFfG9npwUvzrh2jveipwaiScznsWYhVjWddUqv7pu7z6rgkWjZ7LZSRXww85575qCJKDsn",
  "key18": "5t3zudWKMyaWggt9FyLHTYRdrT333XpjtPiLzGhaKyLvEybymtuCZnrQijdhLBigr6BformbT4y8UTPVMuQzRVfb",
  "key19": "5qiwhTKGjW9JrMb2iGgpRMQBgEcmywSyUwAVERsJrY2NSCQq4YUsGzWfaU4QC9VWS4LtcqzKNyyuybnyT7zm3LZQ",
  "key20": "2Xj13zFejnEJ5Z6NojXD4G2cGPV49GufWXLZ2wpuBG7oJjuAZJ4mxhXskmHaLo3GznkC81uoFJn1VAHQd6ChTREd",
  "key21": "2EgWFy8RnW2KEvTfQas1b8GoiUHB7C2mKbpGbEt1eUG2fXeZL1RdaGZnA1BvDRTksxyWtKZ6BbcLEnqdYhA8TMh2",
  "key22": "5svomPJdhFNVc3Ng9pKxVSBhnMtrNmic8mhW1wGBB2xdhJe7SuXLZjvNxCJEihUZy4beURzZMPHRgzfSMWDbKWZZ",
  "key23": "3ngt2XrQmgUf44FSgPbrwtL75angc9DCArkRCMrvWp2GQTW9xp87yrXRxXEy8F4krPhU94k9yM37vXTDihocQhk4",
  "key24": "3tv5zZt9Pe4qfdMdFb8Tx5si1nDJ7g2gzjp4bWXMxrywNUfaRhqTLKCZDFF3M3yopF5Mq8dJZ8q2QpZFy6Qz4Loo",
  "key25": "48DNM2s392wQEpFgwYXAdvzauf8Dj4eJe4ULPMAtRTDnhDGTpu3Ghikpj8z4tjbTtPAsQVfv4FxF6f879FjPFVy1",
  "key26": "4CftE6mtUXTgeWBrqowgDMRgznFQfLBrApTv7S6znt9fdnjepNY1zorWedk5CGPjDXn7osXEzcZXhDX3Ce5vPv1B",
  "key27": "3rCGjbUemRgwy3Ebxo1Ta6EdbztKfw5kSFHWisGqYckrQWFeDZSvtT3FfYDn3bcs22h6XzuziFMAHb3UYXCB27FE",
  "key28": "2Ka8yMVrP4q3dkYB1E2Y19Z8VCBARCxVawussppkWfeuFVfEdzUCbk27ZomhyZn5idQGNDyiKUSRcCyFbVB85FSN",
  "key29": "fSnn3fDehzssxJBYY9iBmR6gjgvSBih6fDiVKCsaBoWucUvPCHfNbi6axdnAGLEASpY3Ux5g8UynrzBEkxeX6Gc",
  "key30": "3LGWDfhXGskNiiQNh1GmFi6bf1itGEnoQPEFoLBhf3kNHHh8DvcQAxNSQHRJR615quwWfxQ2FKqGAUWQKPoxuE1p",
  "key31": "2HwzuFMjoHWfZRisoFAE7BKWzj1SChr7Wsv9y5yqRo1mXq4Cdszi9tgqTJK9y9xYKGjDgnUz5V8yGt3x81nbXkZt",
  "key32": "YjB53e7XhSGz7Xqbp8kao2FNzNEV26tsEHWdcnQ3AJBC28TusPhqZftYX1cKwnQcrQAZE6QxmdnnLkJPbQuMKg5",
  "key33": "5zfLHaHTSZuYmh2cjNXjs6xJxTkUU1k5FBCrWHBwB5sZshW3FZs7D8qbHpFkam83bFaHtF4ivqmGNZ1CVa57FXqr",
  "key34": "4VyszwoMDqGu2zPA73KQ2pT5DkF63s1u3eDWkknTupiEuX63EXJkbYtfoQDjw161johaQKfcyWeKLivmTGHmKz7B",
  "key35": "3jo96nBKfqUU8cyBc8p57rBvMvCKjsXjpmiJHHqqggskG4nvQZPJUtEJgnCa4PEQE8LWpCfBmb8pRaU7oRm4odDc",
  "key36": "5cDCCgMgGPgRhfpL8P8oBpeEvQz2zVaa4a9MMhRZEzyirfyj1jjyMzi4YWq3vNtVpGWzaLUzbzv1q87gXFWrukPD",
  "key37": "5nUKvNvnJ7zBdaogRCQpQ29L42o7cjhsmBzVvZbtafVUYtvSmM2GXYXoDMuckQx8XAmprSKmTp6jeGDE6c5SmXfR",
  "key38": "3duxkz6PyLAPd5TCWeAV1Cp3ESB5QNC7HA1bMYzK8atTTFPpBiFeYayRpHRVncjHt5PaP2rDk5kM52G84PY26XKu",
  "key39": "2h4eAN7f7nPn4yx23P5EcP81iLHpjr3tx9BDyK3Rb4bnAkfYGvwZBYY3cA3od1q6DeDkpfqJ3RGQqPm2yiyVjCKT",
  "key40": "4vywyYWsTC6W5hqDxYPZNh7bRSJEUNszWQwCQFR8hLf3uCU556cikYxaPb3j3dwfPX2tneR85ULy3u7wWUaYrFc8",
  "key41": "2raDQDNrzXbixSyYbyfRr2C8KNYghDwTGrDupsuhBEwTXib6a5Pncw9x8zXuAtALgevgP7VCq2DFFNxUykBuXS7M",
  "key42": "5tBsUY2FVsCy7oiPFbX26TcfA7oWAVUtvoSm1nHSFs9nNGq6j41pkrnFU8wrmdWdjZC8wVkPeMbDraeJJMrsZjH6",
  "key43": "iDkhwGpAQ1bjy6Cq42y5Kz9yTBcaruNmbnazZjRsFVJ5BHRRDCG2Rrs6LRgkgTAYEVQ4F9xoo4yLLzSDkPedmhw",
  "key44": "53oWj6CavM7GJZQFrFL8a9C9WpuneZMekYRxZ53fzTTG6c8csAFY24Kb9FY657UVhjSDvZGB53DS16dYUA648edY"
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
