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
    "2RRwAfMiyfyhoWWdsMoMuKermJVNpSfEyJtGhknNFR8BSdZRqgzPA22gTXkbD3sWqjKEapr1Zfpz1x6UZWx9wYXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LMMBRQfvhBmWqXvveWK5ooLnfHXyZMr2FwZdGRFyJ8gmV978sn21LzNW74VQ1Z4B9p8Ph74SpbaYzsaVF4D4Der",
  "key1": "2okXXvc2BDYEEDw8wUPGgiogu2M2tCqhjEWJCHZvvNmx5Ah14yycPuEdnErKjGEEjVQ9CJjmyPhddstGRNoEtVKk",
  "key2": "3z7J7KT5MC81zShfpkAivMk1hLeNwzBKQw4xvCdfCNkCb65v8EGLLrWttbeNgD7Usd7j2HHfZdnWgaZ6mFyEJWH3",
  "key3": "5ctajHG3Wh9Fk23Mcispi3dJSvmMLxQx2TvYTKSSeuf5YN64gVqt5MTugv1r3zTQY8quKpGkfv9pX2fyh76KjE75",
  "key4": "3rcUmvqXUVFTjq2R5cVfV1F8JCDJKBGqzYdAFqtrZxBJN3jyN7UwA61shKiTSWsPxVKALtExc97BaLMCAA3CzuNu",
  "key5": "2r5y7AqUtaPSoiUDmdNJKAeH5eidU2L1YbBNmT6QXzYkyBgwdzDuBbbzhTXLTiYTQ9bSFzL8EL4y4WJe45KA6Tt3",
  "key6": "43FA3Fnw5wuEHYFG2uSzWCZj2Lk1sNzmPbDZoxeYFukVv5yD7dfcnjya4uUoik5mjha7oNNwSLxK68RMxRckE4Kc",
  "key7": "3TSuNoycHuBMQJi83awGW6HyvGjbpftNiVogD4JAc6B5cvkh4TueHuSYnMHj1jpsDERR5DQSy9ro4cSgW27KPWME",
  "key8": "4qn8PnbYk6BqDNRPJswfPPNiG7PTLGgE2qfEy1rfZaDPWW4LgymZ5TzfYParTLTdTAGbPryByaDHvxrYxwraMRPK",
  "key9": "2iH1zcRjyYs1AeuFKXdZsxzxQ4AWrqmcUWtAE9XcKcVku7g9o8AgUvrjbxHKk418kuPdgNKCuyNwWpV8TmvMZhAq",
  "key10": "2pSTcNACznfyULEWgGAeRdLQVXXGazR7gLSybEpbpVTXu6xEcn2TPZWb1Dvunhs65YRYAdgHYuFMC4j3U7J7j2f2",
  "key11": "fumTgU6tPJ944239JHvy96EvRMjNV7JaC6JVfrArZrdNkmNmBtreaPKY87cmoF52neckqo3TRJqUNWdk2TA4aU3",
  "key12": "3sv6GBjxh1UX2EovX6mCyhgD4YpHAtuM4GcVeBGPRhJhoNbEXbomuwEpE1SpmxqcNANuBpWT654KD5XQQyieWHYM",
  "key13": "3fdKWPCUPV7KrsnuHxsmyovonyk7m14uie67CnKMhrNMUbS7RJTvFhNkHFd2roXakp7toYG5wiCQKVLi5y56537s",
  "key14": "62STioXQZcTTzLoqxVjZApoFbcQD5WbsQp4fABDMcgwKHxJNXHKqpjyFuzQvvcoUaqLqLcZ96X48CrsTYvNNkvay",
  "key15": "5ie2ubNVqSfMsf4cQ8QAx45rAoTCifha7fGDoMdjhjWBXTHtUs6bM9GyHC4peXbAWuwfuVLneDkhdUmrNa5PXCdb",
  "key16": "3a33m1UAttwRnpPY7arxXfUEhxTqbaxSAsG3sHJUinEN4kQeC7hfbUZqa9Qma3wMMwmWSce6BcUtuBiaXR1ETWw",
  "key17": "dxxgtHbiSKUSRBV6aQCr6zeEiSTCfD6xbDLKs1XWk7RmA6uGUY83iFKzA7KkvAauyxHvzdf3okXZRLPwPHTpaA6",
  "key18": "biqk8Luoyg1q8DsB26nvXy7fUU5qccYhtUH8wFt9JCbEgWQAYgQHhynkd8CJiYcpLeAFyoCSCsDeZhbeG62XFnk",
  "key19": "2tpSCGTjYcyYf1VoL9UQVRDQznR2bLVbD6yJPPzYRstNjQtFY5ez8bPxJYQ7RJfPTqHgafcmNx97TXiViWqfgftf",
  "key20": "3h2oHTukTWqtVcAH1sobmFx84hXcnBoPDNMAe9tR2i92qNLKCxdceP1E3hHyz3XMUKcgTzEqQDSJCMbp7K4Wyqbg",
  "key21": "4Ft2AXgg3CTRPexmioEkBSHMFFegQBRJJToKaz6fMcSMqYSEA91EiwgB1XzttNfcN4NefNDsaqqNcmVQUCQm9aUj",
  "key22": "33oRShqnC6RT6My9yVzixHq3sbmT37NUMFP3ngUaq9MxejkcRgmL3heBMEajFNpht4RAeUWWjJBhoyi1G8dGgbC6",
  "key23": "54FaEwNGMxg3sz83F4ubhNy7TqbQ7Vy9ZyTRP1Guy5UXNqf9egcx9xgDrLZ2xtVRPZnd97ZdY4bxCvWwHsZV6ynV",
  "key24": "3roWFntN6w773c95iouWkQ5ZzSsoAQsPvphqt9Cseh3LvpDPHqVxnrWas5qsxGhKpWoUVAwy3zM8bnonkHsD8ePK",
  "key25": "4uErMxiCxV1LBobdmRwshQR6SrCXk8W1zo3ddk6J3nkdzfAJ6uNmts9HwzanQQvzqJRW5wDV2gMriDmDSCF9zALn",
  "key26": "249ppBpBn5Kw2P7cR5sdmiXWoKVX3hGDucZafbztQD9ouD8Vz6Sw4YhHx8A9uWzcp2rRzk7EgpxgQEF18MRcGdcz",
  "key27": "5bzBH1NrKtoXkauXMvcxumpc4wMqZo2sRwekmXAMZ58TBTcxXgLK1oPa3kXvq75j6Ya1hUEXRVi53qC5ZAiRXrQo",
  "key28": "4QTRiYDJb6xApZTT3UUgbdLrDrhrWdqKMoi1oKGPbLdPh8bXzskGHaTF2gC4F1bm4Nx2KfySXp8F3zcbQ1wYKH2o",
  "key29": "3dwoqyKXpEw3R5RkHbcjbTBvTcQhC3MTspFUS9UYqfnAAVDFxdpPbDgUZ81yT2X4t7PFV7UQ3Vn3ReL1dzGaBHDx"
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
