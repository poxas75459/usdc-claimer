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
    "Vq3FLLwmBUtGVYwy8FkHYUXw4fb9tuTs1SyBUi7UcAWmiTGja57wre3oUiNrLkSxxxL3UQeL7jPra66m25BsXsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xsBeNoVC4F5xFBocAez67fkHnnpZwuPcNYaJc5hXf6RsXeJqnHu2Son5xxSAZkQJyhNQd94H5SSmiNBG5AoxfaP",
  "key1": "5fhkhkKd1YyRzMcQtFfN4oSbGVqEPq8FD6Q2kCfDnyK8jBPmydRuXHQfS8hyCPciLPj9ZJU93aDRhRAfX1U8UxSm",
  "key2": "2YrmcEa8fxfu8wUif2GQSFN3rSeozatJLkWANCD6PdnonbYqCSrJXpUrA5QvGqvtYevveqnPQsHp9HMvhtWkGzns",
  "key3": "2Cc1hZa4RHTmKYdhgERGUW3ghLUWAyMFVW9yNziW52E73Vqs7ruKa6JDCf56AFA7RQLKyC7t1Fw5n3reibmv9hW6",
  "key4": "3eYnQ7s8rdoELceT3ctuWgFiyahnUwUKt1Pn3RdZpmo4xwG2osFtxMxDSv3f5uSnSKDeQhQ2doGN779ZWb8Zm8U5",
  "key5": "3cRgXpS3vdMorKJDiFhTBroR1QRb7uCsyADyrgXivFHTbrHC9g2FDN5chn3eddj8bbTwTjzkwqZ4Vx2az8Eo2zA4",
  "key6": "2abA3SkZcncFry9PG18Yv6CD8kf5u69pfsL4U9w6an3UH3V4LXeBfbuQN9JXHqDksqPGDDhFWYe2DmqVPuFPg4Gk",
  "key7": "3VijM3uJX855og4QUHov1s74dcoUK3dUM94PV9Y6tiKGF1mqm4owqMoGrreMAuoBkdw4LRJQoBciC7tRyPAGagy4",
  "key8": "2GiJVLqBnpkbdUmKjgPCy67S8Bu9zym6DC9E7g1hKzYGwTF8rq21aRiHgLZE7JK8NmvBvqDm9XAJAezQ8oR4HabD",
  "key9": "ykBcUXySmeYvVF1tfsN3nMYq1VYQxuCGwW1yphg1RLU6EZhAikhwJvkidrTXSjoDDwKYCxsjMrfRXAtdrEZUXLi",
  "key10": "51YaKaTQzva4ydRboXY8Ed5msMjcHUxdMJYHBkgnkpyNCagMZbk7V7YRygDudq9Hpt9L6BDi99piAzkAozT4ueLv",
  "key11": "4Xzy2Y7tXKtLVwUooJe5LLyNjdFCeZSLHKNzCnZ2dGz5REvPbr6pGUix23Xoi3voTBytaruBXPtzFWZKPCXunYaL",
  "key12": "4de3MQbmaVA1CGyx8Am6ufbPqxFhMo935QKAunt62sDfVXNqCUA7zTn4mPXxsqg2vYxNJwKr5fq2ZkfTVGKp5CG3",
  "key13": "UvYcTdEnrjrVbAR2cyLCLoByorkEbKqQx6kYjaq1YTTisSf1nSeRxcSCMZzWqhzEPRTD3V9NhPKAC8CoHiJ3KUu",
  "key14": "3JWgkBgzjJnFcncWEKHpw8pnwhyZhghoH8vedWWSEnoEZtv36FmaRS7TzeHtk5TV9Bp7UjMH7nztA7sVZGFiRvb5",
  "key15": "2aAL2oQi3eXBNhDuTWWw6MkJVhA6GSuuqR4AC4SdsmH3CqRLEeA7tVjrPznUkYhnohX9u8kk5y6Kxe87zLteGvcU",
  "key16": "484PMdr1w8rKeAF4jBejgsZ7hprW7fbZsrzdFAt8gJ7nveQLvX5VfPtWEpNbQQajDCEMNU2PhH9YDatNQ5a1JMav",
  "key17": "4FrnH4W8DERbtFyQf6uiHuLE73WmjTgoWo5jinTtHRCohuYf8sABdTXpZGFiHdFAN5jYSvKkwVWXUpVxD156kpUB",
  "key18": "219rjnUNpErtMVouzFM6fgp5gpAQPUd7o2hMiJN4C6ABirWmtUokqGfFrVoZLsCUZRSDKwDuf1kv15DGyyjed96d",
  "key19": "3jDR1nZVWXjfvHo2rTHXd2wdr3CV961de9VfGedmVvnw5wGmFJRLqE4X3Aa18nt6aryRhfpqwTtGxDZx3x82cAee",
  "key20": "26mKXnBgGVgVLPxeoucStjxuTdrV1DWNj9imx4VTUZUGK7MBGG4j3YNpciddrzThfPDxbm8rJRYozdNCmDcAyWgX",
  "key21": "3LCTSsFfvfsq2UMDbi7rDVLrLvX95xKev2agRkUXJJcsZsKXX4RV6BUozz2iXhVwX2TKP9Khds9wHycmg4x8Cvk4",
  "key22": "pdSkoqVNpns5g1QDYshYXsf34XdzzLMvd744cASUdfYBxUBD3xUvSpbt6fNbegtnigfU7q8tQBAhgza91isgKuo",
  "key23": "2wpYbBnFGbkzAPE22R2FbZm4rEFyYxDqSXa3aTJTf8tXh8aedSaHnjcp5yLUy5N1Eqs3LqRqziKqWyZZGbKUXHUA",
  "key24": "4hH6YzoTF7rVkQqxVTNz7fdxqBo6TLDktwzmvKw3fYXdEqez4L15voq9GqrDJku4F3xrXvs2GS5koGm5ZJBvVqeJ",
  "key25": "3raf2EqxcrgsjvdqUaaz4Q4vjp85Cyf73Xeyvj7aFj13nZqYVCLJLJShcx3SNR1FfTQnJEtM1FnpnZGiXpYTq5tk",
  "key26": "3NW1i1PsdyyLoAkfaKxf4xUmoQsfbihny8a96sRFmjEi91GNH21GEDzhmBtd1bMRARCu5PqMK9iuF6BWpExSwnDh",
  "key27": "35KCSa5vFZc7E9ygj8CpeyhgxvgrBoiEsn8a5fGnGPWjNdifSszQuH6AibC7ZHeYEwXBZGKzruyTPiiYewRGMJwy",
  "key28": "5zLC2nifYei1RXRTbrtpLR4P18MJwoM4TWBWtjWuDRaoYeZAmVfHZypEyaLLvfSaYbZXFxHqjXZEHaXyhYkD6uib",
  "key29": "5ctUMJWXHPP9eWwqyHYS5qKjGf1aLH8wvZFvbbkArGJRk3yUQuC8vJELSSwnndaaLsV8C6ExUGyx3ZViC27XQaW",
  "key30": "4bj9fNXu5D5DCuttR5zjbqVTkD2P3MTLtNu7XCFQm9ecK3ShMYEJjwBuPMDMTZc6jECmCdqdoF4xJ4GtwnSAkTY6",
  "key31": "nPmy69Wr4RzEemVxUAJtFmX5pvAYxoZWBWGhDVXsjRAFPK29gt67b4XSU98XqS2pJ92T3Gvxt9J7LByM2n7mSb5",
  "key32": "2azmPKHEYxWYdCA41g6tVmfNwAVMn3RDhtLdc2L2t57fGsPpnaqja6ZFjw1PVEAoCJWQ2tBrFwY9g2Rnaey6LFd6",
  "key33": "2wHvjf9owaejdBXAG6xqzHXBy4a2VDZr6Ufkz9FqcqLeDLzVSLMPcFooPEmartL4iujakK5ki3y5ubBi4iWLE9Xx",
  "key34": "2YF6wHHjCs8JTTWXerUHWFq6gqhxpDaPBbxJmuz6o9ASp5mQyfhhoQSYhLhxDJuCdxuwabnjKS5NTsgg81YoAch2",
  "key35": "tdpzWRiTmtTjC7a63gC8Fxkno8Egavf9ZrF4ryybiyyEw9pi38gU3MAT3kvvqYPoGo6BhA181P1dbJ4qFNHr3UM"
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
