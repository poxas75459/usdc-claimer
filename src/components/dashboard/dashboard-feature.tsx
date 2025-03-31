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
    "4efWtFqxgXsSJKE46ySyH49TVvNmmDeWiVAp852JjjGn1NcYLWY3feLJrQmixdeLnttX3nqRPAk1ZRo7PtBPMni3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48gj7Zywogh8uTbpdsFxubffuZQg8cf6RnY4YwkLbD5JAhu4F6WJdWxjUGPRKhXMFuAXQSmr977RKytQvyouX1R8",
  "key1": "4WGTViAUmb3MBkeKuGhQhuSUMyjxQueUVw1uVuvnLghQYXJFGiJGzadaw547Aa6LctRh2XWFFes26s31Zc2fMfuk",
  "key2": "5ZxXftjF3zFC2Lz4rGdLGBPE2TVtWbMhPo1sPDk1U5YLaT7nE3W5RHvo327SyYghhyFcwH2dpn8wzrymsyjV1RUS",
  "key3": "rSSxBCRaFbQGuxXwLC3EnrYGuZkC93tomQ6zUcdJqVJgvAdkMBX4st9qbZz4xnUBHtvBHHdnsPxcT165sZgTYT1",
  "key4": "pqU4UDSN3Hzi311nVoru4pxTVGTstuFETnMgBnQpfps96bV8oJPWJ58SbBRQ7NmdEhtw1YkXEVwKANwtfZtpFa9",
  "key5": "5Rq2aVDSz5joK16bJ9pxaopgA1DFU2dRaVo5ZnNCnjyh3ar3SCekM5815uKRbhVNBqhLKMuC6ZZBaGM1XaXjSw2C",
  "key6": "4yNAUNoV4AXK41JtLYfyNJuoPGv5PgruPy7sJ3hkkHtA4bbeyM5BFeFBNRMSMfgpj2ti5tJhzGSgZ399fwDDTe6k",
  "key7": "5e3CMVSaWjjHDgvzU9BG3Rk7jdfFj5N3RQwk8WgZyrh6RkXaEYaVGRGHvSRZdbEDUrkG1HXL7sRFD1eyoJu5M1Ja",
  "key8": "5JPNGQgxnR4wyQcnnnhJHhD37JqWwAfpzZM7yykx1iqgyfVYSaB7DnkQk6h2kCEFaxUrHGu7HZBQULku8tZ2yGAe",
  "key9": "4ZnQ5RG1uswGnLoKha1U1f7s3knVBnsXxFom4mtfo3G7FB8x3Cb2Fy6tSAcPN6yfecPwYFXFFafj63vANPCUhJww",
  "key10": "f6nQ147YeXCGFB9UbibPtwx6s5HwM7nuAMVVkHuzRZ27zkZximMjubDEksYT92qoba4mBUb9zXv2BcdQ3a552vY",
  "key11": "VQgMGTw6NdP2M3DHjjd4eKkMYvZ97QjJAum2rVUngFbAnxe5mLwYXyzkKPPA3upwySH14wDck8NBroyqNiXSH4j",
  "key12": "4RyNK69Sh6nxFgBxCPv2TGPHjH3oGNTzzBwV5JXAMNRncHFyCwuXtrktT2DHkcGUezvzrfH3Npe2CZaYzaEemgrM",
  "key13": "5cDz2dHNh7hbPKqFGExKRPQ7iLy9P5Z9LvV2uD2mHJaKJkd6MhcNNQNTj8k6R6ZcCRzbuCDipqQGsbkX4i894Q3o",
  "key14": "2NMBfmiHy2ZD4obhc4NYHLcTs5QBVi9871exYSgftzTGCY6hCK3sxmmwGoNDB37bneUk3Zk9T4VQKC6AguSWKGus",
  "key15": "KeQzZoRLvZKNACZr6VYfXtuDDpdYUK1on4P44818jCZ1z7mXw7pPaCmLTHpaGddh3AQ4tn6xuzpD8xbDQtrWH5a",
  "key16": "3NTNMVdZpvfnXCZz8BKgDETfjarvYDvjp9BHghThybmnxd8dSCnm7RLPcK4Srx9iGYVtQjP6gf44owCThdLknw1w",
  "key17": "PtKoj6A3EHERnUJMvibukLBg8X1f9swmAJ3PYJsq2ScBPzK2mLTmSnHxcQ7xBYWWCmp9kTRZVMzcXzYEMkxchFd",
  "key18": "3VJxsi2AyRgbDpTx6whFAqcYUiMyVGK9Bxy6Hrz2iJPDSv9G3iFDCXfcvvr3k6nKyDfvmaBMhmK3pXqRPUzQrmrb",
  "key19": "3jxCJTx6VUv34snorCLVTM6k8soSj3Ndnqwni8kzNAUJpX991J5DE1iR2hVSY29ddkHj8YUh8gES3s1KrgXJqj1k",
  "key20": "4DCXSrUhENTB8bYKnJCv77R4k7YaxfaiBjHPrBQ8BmyXbyFvUDhAiY9aJsikiRhWzmynGWNBQdvX1AjcZLRoC7jy",
  "key21": "3VjfhZhH7WaPaJ1NQaip2xvtvyxhAqWhpbNXmLLba8zvDfA3TzaSS8M5a8FTVdnuuwSRPqaMZ2VL3MwRqkswvEsv",
  "key22": "5m4WsSR5rYrSzVUHy1ZzvtLNKreDJFJ9qAB31NiKpEMThJp8KzQZugsGad8Lat3LiPvn3h5yZSFyNpKPfwC4Qu6",
  "key23": "4t2i2jhfDp791iJGQ9ycF1tmW5rn2JVPqwVwm3W6Bx9mk6wwcHBWpT9EauWPpmnzGSc2ZrBQ5TWQpen2RdqtZW7N",
  "key24": "5a7oCjd2Fig5gAT5JE2QbPZuvYBJoNWAdqmG5CxhRbLU6d6RmGJKXtBqahF3gcChQkcSUh5ms4sMARrk9tTPCaKe",
  "key25": "4FAYcBcMjyc7Xru8ERTzNkL5Be44BcVkBHKrJespEmsfRnmTHQP2mNE9TnF1uGiVuMjaTDope9qcHJi8pYkjGUwv",
  "key26": "2HAGUPE8y74vgKWYjYHhrswXb4h1mYgKjUPNQ31PnXouepD2SL9um1UpeRXfNTZUrmBhuxqsAYkx2GuvMugoWDfW",
  "key27": "yyiEWXjB7eojonGMupzFQKUd7Ek9uJh8d57nDzGx2qwUdx1uQa4BtVsGx9qgFSCJVV3fTJrShwEuCiJDBBxSB98"
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
