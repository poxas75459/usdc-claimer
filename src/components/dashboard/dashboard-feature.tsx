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
    "5h2vJRrUCzbKTfC5hkziiPkNevonSEwqr4tcpfEfgSX2KTaKhRCwodzK4TXKufQrM27W9rPvNNFauH7q9JaNZaYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GGwDTb9R1ntu2yAtNWAT4XhA2ypxCM87vcTLjqzv9hZysVtoGMPvmf2k6J29J8PeV4VB571uuhscxSwrjXkFc1",
  "key1": "3L272q9189YyMT2xQ8JzjNE2Gvc4HEZA8Bz3G4DhXqzDjwzLp4JtYqpRHyZCd1mnRzfpSdrTvtLasw7KKE5SH7kQ",
  "key2": "2oTmyo8Lw9gwoAhRyqoa3UDcGgrnbHdMK6aCH1FbKhRwdWdd43ewWei3hUh8FQ2UcNuG8QSDZftZAUTFZmwaL4es",
  "key3": "3ViJASGGDwC3Ft8PvePbbyhWH8bfSxfgk9xPBHTim2uCgpfqiDx9B9G4dWUmsfExCLYQAWPPRw4oAVApJmznL7Ff",
  "key4": "5YEtvQRgt1bQNqUnwrZ9bNP8pemDdjcyhrvBaUrQaXQUKpuXwduu8CNU71xj1mxLbGTaMERSjospAEkusi2CgRp9",
  "key5": "5FvUBmuPUK8bv9YXwpvx7ffGvborkGL6xFWW4iJfAFUDtFR1DWtGXeg26nQffx5TwLosBrrvAwaKDoSyjmpNNZpM",
  "key6": "2dXV9syMpqtBD79LxRJqBnHi3ChHMkP1L2npAAqLKpe6FpjtUgKK87DdqGiaYVg1uUh5rjhyYC781VJryv3hGHUY",
  "key7": "5usa4yGgsZfvqH8WrkXtc6281TVSdgqZRvsx6skKPCuMLLFt9aXKL2PKk46k1jgVajcq5B1da2rRacQroz2dK9xn",
  "key8": "5ydGag19rqzGUDTAEnCaXW6RogegUBHjQ86p3AFDtkdP9StJBu6dJq6vjA4WHfBqdZ4kHdouZiBuegesdu6gp7rm",
  "key9": "2j5r7Bb8WVztXUdTdn2sLnGnsttf3hHZaJiQzJvtLYi5bBHy4cN3QDsfTSVcjty76jauLb2o1jhzbeFfseaBy3RW",
  "key10": "4YJ4fdUYs5xBMeKj3GUanfq8rRbaEGvZ1CebT1nodg6E6ZXSM45pdQDKjrcKdSWcgBb8AqxK9pZ2sDV8ZkodBp7m",
  "key11": "2wEtSuNCmSdv3Gdok63U9VBg3LBP6WoNG3o7KfJLzVpHiksT4wBhF3hk77sCxuyiaYLuXC8LNFdG4w7siYf4ukYt",
  "key12": "ZLrBEB8uqsk8ZZZDGDeRwiU2KmiegaPM72JCmoLGZE99GT2Po4s5s8q5HKK6KwnBVQLNmPEQd6Z1Cbpu6sVEGu9",
  "key13": "41myusoACJR9eX6wJtPyEf7eVbRt7HRve4JjWVjUWH7GNMxMdh6KwWi79Dn7YbpBu8p7FSRbxD9m8PUhrSWouAaR",
  "key14": "HyPx9R6FBM26XGygsEDZsGXdxWALuXi4B9iKuUzorkPRncRo9nHgZETQ4hwjVCEtCrRUq6xn4FxCS1ULQZQYh6b",
  "key15": "4HaN7C5ZF1gg83ztPFRm1ketd7dgKDUzBj2mYSp85s4H9Cojmz32wwoLyYQQ4xfFePucLuoqUbNcstfoKZFQqeeD",
  "key16": "3PDZSppxGxZjVdvLKkkn74hmwhVNpfusWeiEeuwus26Ls3px18nWxiEX24oD5gY5JSuMBcWFmvRWNVjG5YBc6NsH",
  "key17": "5dF1avqRu2QnCkzZiK39Y8x1UNqhSD8EwLe4CBu7wRmyqHzjfdtnqoh2k1uq2z1WsnLgSKEULozXRDfCukXcavRy",
  "key18": "37qvAv9NMbJkZeAiEbvXSrQxbvqmUGCSivQ9EZxtvwCy3waTx7NRN3aNtiZ6MJB8bYc312CjHYwt67BUMCFmvB1i",
  "key19": "UR17Q5SuGHj6k5rk2pBXCA8vFTJ6g9dbgBsZehf9wnSCSqpVopTsZ5p8DzixuxJk4TvvEVywBNV2Nz2o9nhJ2JY",
  "key20": "Ep2K5dF9irkccQe9CAtn43QGdqqUxv1HqmSdQsooyGLv4jzMaaacxYvxZBhAwnmMtseNk866jvjyZBgBH4FT6UM",
  "key21": "NeyczGjobBEPFx6S93A7bh1TdvYL2PomXf9CrCU2NRCL3scUHdC1v79JdYUzA1M2AwxUex9dzFnG1YauqTT9PUk",
  "key22": "UvUkgPP6Y1JRtNq5WYZRiZy9uEWRkKXTEnSBn5t3jnmSPnUHRyVS5e63YVZwBkFhGwyBKiZDXNtkrKcaoMCyBht",
  "key23": "5bfZpwdWsGbjLmLHAU8zZWCL5cVsdNCtZFh68prb6k4Fguq7gjSxHeoZYfbKpyWmD6z72GPcCfW3dYjLiScfrZih",
  "key24": "5wpX3xyDSK8EzNJCJKBFjAi3B3UsuCeyeocMtaVY9hXiL8yQLaPypWd3sECvNC6tDM24fAHEaQdAgJuSen8ASk3U"
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
