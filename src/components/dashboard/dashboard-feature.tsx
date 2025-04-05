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
    "4qdUZ7CZSgCLkGbo26LRJdBcwxhfWKh3GMqpH2usmZpwJG7bpQE3Ak4YyfqU8yeS5PVCacARMy1YcNFUPbG9cBdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YfmEonXArp5zwurHs4e18rfkdUd4cgCvGTo7N8RCagmu7BkfVwrJdxVccFirjYQXJUqRrHWXPD1DWsBuknW71X",
  "key1": "4SwMc1haqTFepmu15E3VAuG4NiqVBwJWKA13XYuWrTGp2KEVGEkxSVX4vsLQxpAonUGdkJiFzNcPT9ciqXVpBaBN",
  "key2": "25dtzkTtgqR51UHwhByAXPpLmjAYzDrjtdYeaMYZpu7Bv4ucCMLJq2Epjh169UNEyvodV1Dyrbh7qFoBVJdGVkJD",
  "key3": "xcoVVcirNzy5gS9ro778Zqf5jGZcLCx9zcpCP2cQsXyPXBHKUYfY2JhquCFYyeNaghTPmySK7aoS9enpXboUdwB",
  "key4": "4Bp64t4XB9y9AavPV4ivU3eVoaVRdFcutrWevXoLf6BEkPtsZye1YRwWVW2S2QrLhqjuY6K7GCd5j2f6WQyLqgxy",
  "key5": "41re3JCicjYmpj2gbwHvu2JUn3jU8swnwLfC746e6mNAkDkAtMBafgGUqTqtnBy6s8ezUfQJfsUtftVa5i5xQ1hC",
  "key6": "3K46MAZRvzhPsTC43TFHJ3MYfAFa5qsUxZpssVfXyMNGxp3DTnq2yHGKCSaNe65ae74tjJVcqSNmFANWV32uHFdj",
  "key7": "4WrkzkR7E1r9ZC3HLLtgj52Hu4yULXqjYBBPjqpHTE5VzoAVs5Xuz4Aig7rHKKsESJYqzzXWHXZ88hdKQAbLCQLB",
  "key8": "5uX385KwbAd8eTxzybvTKBvWjvKegXP6GjUoCR1eYfAzkML6c8mXBiZ4WvHD5Da2mSujPV951RCqMXjsEgwSPBh",
  "key9": "3oa6fHJNGfeodHvw5aj4Y1mFwuXRd5GXyT5cUYcKhkUfkmr5k9DkGQNxqmQFu4qYBiD5SVAbMtdrYLM6BFniN5Kk",
  "key10": "2sEzHMZrz5FhqUYXizhKfaBiscxPaqm23AQmdfMjDdUGKDtrgXHExfdtGwZ3UY7mRzpgjPwq76voK28ifD4aJAjx",
  "key11": "3wVGidBrt4CWyX8kixjeBxWxYyE5EZJBcxpGVr8cobLoCfCDGbWvPMiwxaKb2cxLFzm3HQDHwG2x6emD4uwLTfiK",
  "key12": "3zqdnYnxxFYqLxg4cghMPyVEqParAdCDjhhCk74g6tJSk5H6ArQDmZ5wUup8yNBYpbNipdioNsh8NqhF3aCeecJF",
  "key13": "5cLn5F2EXtUemCUdhSupASxw8Qx9pMEyrhxbmSk8RSAf2PbWK7pyBcdZsYYyAtarm3sraxqRkg7EwLbtxSy1TPh8",
  "key14": "3YkeNUWb7df3Yaz3egvrvaCLT6HwWKARE7ie2u7TDbmtZ8h3yJCdmBnFaLFxtDEnYTjn1DF41nUx7VgR9r2hf7Lf",
  "key15": "5ck19hyA8mGbhczFWx66n7GgzgbXKMeMU8WYtpaFQH6wh9tB2hJp8Q6XBst81AAFHbyYjs7XogqwXcZananPmsvz",
  "key16": "2Bx41tJkWy7AwspaV9J6GgLNRtcz25WVThEGtcWrNQJzzWw3FCpKeP9ucYrZxLD5CoyGnVMyVM2aEFkMenNUdnkw",
  "key17": "654k3iLdWYEYyDUNs5ZvWgshF7YefvXNVDbnXA1agVhdmCfCUmJftFAFVacCFPDH9uugJ9NCq8GkqcSNyGhQcfiw",
  "key18": "5FP7oYoxH4s3wFDMNJtaPtrqVNai8HgEhZ9bwZfz6cv78PvJtJNMG73F1szV1ozqMo6ybucNVP27rznrjdMA1beH",
  "key19": "3ER4gxNew8AHkWvDXDfjTAJHDjN8XjojarehcU7UVBvUoYh6s5UEMZoY11Xx3P6BiiJYS9enLFNDj5hzQ39KXFFx",
  "key20": "5VTiPenGvYUGvCBQ4QrRLGzw6uoqcSde1CmK8XBEE7LjBPcWnvhJFF4GqEyUPg6s9MYyb4VbPFRK2gxYkWcDyqXt",
  "key21": "uoq2tvnDSZgfrJGfQsX9BKG7gkSYAxVSx4WSCC35yHJJbJdqr6gcg72M8p2rzc2GcPNasNz2Yvq3pMwS8omShJG",
  "key22": "2euxULGQPwaC51o4HkgTtB38enCgvMgqHjQqZHiP12Un348ZSHs7qCEPPmkxvaPkeWWonxafAUSiV97St4TmFiTy",
  "key23": "4ZS5v31utYApL4dmG2yXx1qRPs95xdRfwjzdemtE9KCPuirUidFMYcgvtutmHB1AbpXPKVPD2DULgrTbGZDhLBku",
  "key24": "2T2i1f8iAce8bZnGwachxCRZgxRDgiyEuo3i9dQuEcxXf4XEBCtfXoniA8z5XcvbjGQJ3Fiso5XHJvrm1uUgKihE",
  "key25": "4QZbZPPXaeXy2k14zAh87YMDgt6fwWV9f8oLcubvbRgMcTx9YhfKdCekQaEGwyYh7puJKRBJn1PUazcVCTymdNnS"
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
