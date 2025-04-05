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
    "33ZD3KE3MwfHnoqN13isu86tZUY3QaT4ETLKSjFM441sQY49x5jyZGKw2xqL395VjRAad8Wn5EDJX3T2eaqqWd7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWNYackyYp7omYEaLV7rsVrvwUfo4zr8MbvejztCA94rosUYqiovNjej1CjAs2EuWPjz4X3aEzm22VjSbp26hxX",
  "key1": "2BeyK779ha2nWdarFp51RKWaWbAb7z3uUcRSDikKC2i2GabRXPRTpyu1BvjpM9nHwZgn1YUb4aUYDyydHcwLiBet",
  "key2": "2GfuhbQw5twgbEg3ScEC44Qu2avGR2tnhQUmhBnAEDHfSfwPHE9LmKdzq4BvS1Dpuk1XLPFYw9rxLzZgiPHWKTGy",
  "key3": "XhGumzTANhdNbpy5aViodMphQwxct4saW3J2Akrj7zxWa7tNUG1YMe6ERsgU1HPPnyzZNePnS6x4sWfDG8bTfT2",
  "key4": "5oaYzab8bzzAStr79rxoaaJStb8WYt4MxKFmZWSqtX9yJ6v5JKrHmQak2tdLLEbpJQNZsNX6HD1m8hTrTxJZuWYA",
  "key5": "4Ss86Rqb1C3hZr6cvqPbUE4hmJoNDVPm53QgBp66JgVbN5NLqLkZV1ZGegfibwnKUMjLhCtLadVBkexM7PMpXyMs",
  "key6": "6NmqA5auxWxtHsSLYSmRVUL8Ggcza89jpg6M31QwavCdLp3MoYP7kvoJD27NkfbpyQLXSEbRUcjhHBJ6KAQn7fS",
  "key7": "5F6TDdHSPtVoJxQsLu89CjdxsXtN4ytwNipUW8op3kNQB5hJcH4ph6BEMChoRgSRZWK6dctMs3dqSQdn3hD6yGk5",
  "key8": "4wFYFqDjmzsPGScrn5274CJMBCAowBhP9wSz7rtcW1Ctagq4QY6ULHJS7w7iVhn1NBbkdGuGdxSproVo5jNnMrpB",
  "key9": "3aH3pLmbeLFd7K5bn6BFP7htmNfsWgrwidYxpYorpPeWCGv3NaQoytXULgBc7VQ4EUHPjEcMPJLtP8PbtuCWY267",
  "key10": "5fMcjeoRuXPjG6SXj7vDe3nucGhrStwMEe35sdBt4owSvKJCRbLEaagGhSwdyjH2w7AX6kSWiNKryRWceosScDVe",
  "key11": "2qcnUn5heg8PKiGyM8Ze9syjfk5rwR86EXFAeawNZ9wspyqZmJj15XKifLTjbtuv8NHGtXUeiD1K1k39rDWewi2Y",
  "key12": "4ribboaXFYoxrbJRzsQaktWFxib5HuX7fbJXrNtJr1BRELs1YENLrSpcj9svJmiHTQKLtMTRfELdctfM3BSFHAo9",
  "key13": "5CLRoa9oXNcwLeKNtr3nYNvy7QQ5NKLXHss9xg1UrDrUY27Z2StdzbkrZBcwwjQhxVEoBAM87j1xn7rMRNCgyQNf",
  "key14": "2FFRBseGK87BWsrGBVEjQcn2X39PobWZqdiCDKjhCeMLYaD6q1Bw3eVSSK6Cnoc1Cr4Ch4p3m8zPhUVzLu44FAfs",
  "key15": "3wZH8P1JsvRHHSXSkoXB2J9JuwWhdDsMrY6yohXFSV33fUe28AmWNXhyV8NAnFdnAEcUkx8GNkCBu2GF6r5oqvb2",
  "key16": "aRgx9uGSfzpwyL2qmGndGpZyQBMhz1nW65m1u6fMmBoZGFcnCC8dXbqCMJtu2Nc8PBm52Lg9EHtt2FWLMS1oCUr",
  "key17": "ANMpjoCH6BKGKfvwnFHuinbYz6s8EZM3n1cAdMDsod9Q6Y2kZDLoKhzmTUXUZjVTxfScH42QLPuSugAGjSWWjWD",
  "key18": "4sbLuSfzpYrtsXxT7tQn2G4Q1GqR8u8W6VtzkAaiSfspwkFHDXKXJU9u2W6HQrteCQaoN7wrV3idvRwnoLeELLQH",
  "key19": "5n3Dvg2VT6DfuWuKYYw5H4riBk3mkeJ7shoYi85QRfDDTqAXV8BbCj2UxHfyiqMyka1q6X9KF5NNj1YaDL7r7eJb",
  "key20": "3NgC4x6bNqQKsgvUHCNhLEa1SF242QDWUgEHvmgW8FrDD7UPyyvw3Vp2k6f2yFYZbPrnwFza1jLS6NmvzBk6REKE",
  "key21": "GVM6HKNKRZkaPSgJk9hzNYXgT2nhvSPVGd3TYLyqs4ugmAsfhmnNxUhN8o74K29j3GhokBhvY1xbs2R3fqvvvLK",
  "key22": "5aFfKEL8ry5Vgc4voWd3nBUK7hEjHZQjoa1YYjAh8Bs3oMsA4NPM3jSBw7ZZ3czYit6mmk4P6HCZAjbPrAeYQrDS",
  "key23": "4xDXvyKSTwcMW3L8Cmz6tZDjLUADQnW9zqBgAN1adteuwdCLciWwfUaG8eF35YP7uKNvKXjTRSArgQ9rEQMQ3M5b",
  "key24": "45hJQycvBMCyCd527YKY1xNJ9YaeJ7AD2SDXFLejKj9ep5BW3AwsogGJhF1j9yvsFHGfgm4FasNb1upRgomLYYPJ",
  "key25": "51F6BVYiD5SkRpGN2NEMGtaUC4ZTcgzBDWw51FBR4gdMPagCs9PChHUnDXykckDCmUXRM8gmBqUQnniL1XXWXWzy",
  "key26": "3xcnh7oupRTbvGkfrp5QGFjNioZELsDF435kuWxvaWaow9LvER6eoz4CqhHFW4UPSjVxHcYd6xy5DJVt2fuFk7if",
  "key27": "x42zAf4MctSd9gZ7gfbrEonbVcWcXZZmhpQJJSRGtnmc22iZfZh7ErdGAGJGyBWvzRWhFfetjFYd8KH2SR1z3XZ",
  "key28": "PtUQ6YKNaT6etp8dyVtd4p3GmvYiYiM9WxjbxxigRCczmAKk8m2etECsR7wnxf3E8C4JNTzzSesp3ieabYLCPBG",
  "key29": "48UCXgWVYFVED3iT85Fo4LcL4DtVDu55yVHxL9hhTCM9SsmssXmtDfEWqLQmGNdCpDC2SKfpRtvfrQhgUTYMuPQp"
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
