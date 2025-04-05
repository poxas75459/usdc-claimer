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
    "3seBhkZBWWJ7EFDty7g24TxprEMZySTXw2Ns4H2BrhgcBqNtKS3s3voUaMDrvhLbM86qKMuUQeXzFTSnJ7oEhHQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Gxr6CsbhUUCYkbsXRzHSXpwkKBGMVptuCkxA8tHyGc9WkcUq1XBzRQ4W6tVfPaSRZkNyALvsQf3iKuV8UMq1ty",
  "key1": "xjwPErg2CADUr5vVih7YBgFunMt3ae1MbLczc4De7vYwUxsNN4cNwAbveVwLWzaXj7P3wTSFXSx4UqiZAE7BmsE",
  "key2": "5MQ3eajsfmHwvPkRLHhHbLbg5Ui4rhM7MwzMNeUztmM1tMYnYGFjFsUBRGA8ju7VjTGzZprjStsxgg1fWkJYLLEe",
  "key3": "4QxdeqMd2B2KjtvoiwD8pGwkjeXx8yhEghi9VDzPCpSqM3pVuVKamdKZT6T16dneemMhNfv471TGwH2TAcruo61N",
  "key4": "3y3ncMjhP5PpB6rvm3xeQZNSA77TGtZQTFavxT5cL8kuk1dQ5PvJHEEcNg3XFkFN8MiSa1kE6HV2gujkrvYcS5p2",
  "key5": "2ATB1mLzoAXcUMBYB19guUY31UPgtFvks6VFmZMtSnMiQeYG1cXxPcetqnRXDpDardbB1QMSEPYTwigoS7L5f8tz",
  "key6": "4WAsH7sMkA4P1B1JgdPEFPh89hkzPPH1cuz9Ai5jGZP3Zb8TR7KDEt7Ae5nDWQuWvLScZuopifupUNw7vanAyNkc",
  "key7": "4ZjVxPhoDmeu4dueUdAcwCQGkeASqYCc6y9V6coj4eBcXmd3cHqbvRWuyexy2ymtWDfGauuwt1gjpHYgBsZbMBEJ",
  "key8": "4MoPAPNvyf43yegwSyM118DZySeYqCbfEVrbtDHQ7YvBhiJrcXFsr8kXqgjGCYUtWSVALGBQHrSLpQqiorj1ikn1",
  "key9": "2iyBDjb6tyAfdBV3UUXiDsy51Y5AfakzTY8HbBE738bKUnynCRp4xi9x4JndX1M5JLckXvFMDyMDdTmQNF9caQZt",
  "key10": "32dMfeBmXBkbCFNeh4Ht5w97KEfTxu7qXcAkBZkxsruqeKCnysB6fJHt4QbDLwrza1XuHmkRJPWGbFGyi2XofNTA",
  "key11": "q3HzHfhPg44xZSE3kVXw8FkriJouC1BuUzx98yTNGkfMTt9AcaPg6uPtty5aBgu98n5z9ijWvHceQpTGnFpvtDX",
  "key12": "3Va2Y1cmmE1VvPQkC3uTdipvsvq43bLgthhTFjRiyRq9LnyyJokzfbdngrxaqP4HYFoHP65tL6ap2oFpFR4bJpi",
  "key13": "4TLVrmQoQzAtvMiaFpdcZLLxJE197GaiwkxaQacfwyjeKJXhjan4iJodPhzKYStjJt3cHykBQUqJnuN3WqK1xog4",
  "key14": "4d4kaDptueqWLuGQ5JHRSmNmkAhykTkmsQLctynnXFh4iWiYMtcmRoZmBmEL3MqhNsjUH7Z8azTYzAigy9CcowSL",
  "key15": "5yEp7se16B8ocN61gGXSfffsJX1fHJkushNauZQF8hrPRkscgSPdgUcS1qomHevD1UWNmdhqK4rP2LBvpw7uxdSm",
  "key16": "5U7o9WQsUbT1yTAhACG56222Up9HNzCPEuoygrVuf7sX9TFX4kxBVeR8WDyHi9ad8GLUgxtBw5eFFoMTACDLWLYu",
  "key17": "5EbxXEGcNpVQNA55b5KvjPFzeYgrdmAhru3A4DFkUYFgEXthLA3ZZp7Z9sgPYW8KwzqtVvxfY8wZTo4PkV4zrK8X",
  "key18": "3EzL4jgpPBG6rSamvfK33B5svEExTtzXkCt9iq5mVFMadAJykuDkQj5A5khDfRsFX3FLT4m2jCcEWikUNeRUHi6K",
  "key19": "2GcBsmNHJsdWPkX4rd4jYjoipPAgFc2xTLetowkzRjGPLKiZqW64EwRDFWxSeyommCDcp9oAXoBauZExhawsZYj1",
  "key20": "2wiDAiLvrQv6oGU7g6w4qnmBocjTi4nxuSWhG3ALddGqcWWviXtVcEA1C1mJsC1ywR6Q7wuaSzB9oxpM38uNxtzc",
  "key21": "2HZiVeuwN3Ur6VQKa4AFqVGm47SqazVxB8nmDhx8mtQHTBgo93q1RxKqLt2QS9pdXgTFKmuW5qQuHMaLZXcXh63C",
  "key22": "3AdcXuqi9hNLxiDNF2akN9oJG7rbqNS4W6Vk7YZcmRDfcRC9fLzN3Fgdq9xJX4gfHqy61MfCS5qFhSRe6D2nshby",
  "key23": "4kvPuxDfDgHytUrNe4C9HkgKxibvoDHyaLdTG5XwXrwQfNTM1et2G2u3PBhxfVnaP71Mdmw3p5ksDUJPogn9GZJx",
  "key24": "3oDiE883sV79A9x6qxnbjDgzF9MerFpA3BaqwRuFNTK7U9X3qtVRZvf1e89NM4NQCYiXmYhGs7mLH1z4EqdiBsEF"
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
