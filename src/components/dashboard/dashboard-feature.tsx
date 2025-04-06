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
    "3xb3ts8uoJVBGZVRi5AMM1GftEhHtazN4TJhL9muRxcQpDPZ1dkC1gRaiQfXfSz69M2S79SHj6mYgpegCJ2S3er5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uTAMiL1JFLj4uaFR2MFqSPcoaa1KpaMFi68dgTVBTpBUD5qw33hcRETGGF5rQP8ouCr4KvTSBDkrfBgNVkuYroY",
  "key1": "5yRuUMMHhrE7C4y6RPd46fhtuBfezRNSdUXu4tW8fpQ3vsqTkBv7jA5tgXreeLDYuFRsRBbxvbpaE3A2vwbD7xx3",
  "key2": "2YMJpfsw9nYMyZ8MCGHrZ7SfJnq8EFVPL2Cd3CrXhS31cBraUU2jiNFYG4txVf3XZrCH5G7RUX7eDYT5vEaeM8XP",
  "key3": "7eVTAwm32sews8JyKWaJMrca5kYxQfaNNqGMC7gTjmdPJ8scqQRxEkAwALfzKBQebppGYe1id5rDpce42erfH9b",
  "key4": "4N14HGuCLzrDWqMEQPsp6uu4irR5Ro8Th2orhKyQw2gqxy4ZHLohfhKExqQ96XQ3Xfxnfn8hmkkVqKTykSrfpGpX",
  "key5": "5UfFei9R2tFx3MaDyJgijSMMwTckHCeCaKMkSpJNMSnmzvQpAwQ45t9CkVTGBsofbuV8r8vAKWtnfq75f2VG8Kpp",
  "key6": "5XTmMgjS1ZDytEs9ndTrvaBFADZEUn5c2Xkk3MJCbLJWqqtjDXFvPRixEwqswVsLzJnuVJsRJhbJtewaDxSRBtZ7",
  "key7": "3FtZRXyVDZVLaatRyWQZEQizcYji5FpyxN8aSXwynvw2rn9DRzQsavdvGj3snjw2JUzR4WSo9KkrPuXTeWKhLAQX",
  "key8": "ZPt49SwDmxjkSuJ5v88E8fE7os8aicLsyZFtBi1wmEcMcnzRGStgMbjojSrJ2uYdv69y2q8oxxGnKCHdNdFX17D",
  "key9": "4hSSY7HQteGC7pGAuxsHR6PP1toSrjrxhKo2sGxwy2FJwuNPYSaqsJK4iyUZXtJtTyho4msNb6sK2AwA3oUkreAP",
  "key10": "61QHEYr7TqZC4GmDS8Ub3MXemzAQZmgykHr1CvLJgWJummcbQX5cAdQJK7n4vP6aedJN9dAfQNnMKnMsmjmd8Ujh",
  "key11": "nKjtVUsQ1rBn6vdEDRDkSb9rWXHBJsP9KW7YF8iRgPYHUcjm4EoYEsiCyg96PohkMuUxdxSiqen7ousKiqe1qet",
  "key12": "3tPD18mLeZe5ESSA7HuumuWqoHPFGS4o5R4C6i3hfrVzXzZTkjPAQBxVY9mcw41jMTtNhJQPCrNuAxvWXXqUqLhH",
  "key13": "3zuugd3yYpVxiJiCssmkmWmsVcZKNRB4JarmsNBgWb1SzbCDPuqx9kSKZWps1EBUpuF41Xx9eppTtRqZiMo9qZM6",
  "key14": "2woZCHa9PtSu96cRLAzjAFbhfvR2eW9AK59G3omYrN3BCSMnDBkHTHC7UApgWLp3HXpWKc4UQuYFjoE2iYU1U4GD",
  "key15": "2Z3qLNC37q1JZmq3kS4NAF8Rr747AZArA3aZMnH3kb2Zjm7GTmUX7xRXenRPgJtcnPQeC8i38F2WPp8tXB5yE3pY",
  "key16": "2oHWMXeiYVx2qBdmrCLyhqRiNP2yuEFJiQADchvVMt2N73hXuXQmLKPXs77EEYYMNsBaWxBfnoVUQt8tD8cVStGj",
  "key17": "4KW6Hurcusx2bJL86WtxZENp17vZUDAdBbkEPZvUAHbxDoXLVtXmjZwwWDuTnU4sR6p2QReV1kFpAYrENRNw4ysp",
  "key18": "4u7euDpY2oKiwNzWENAn25J7HCeKbj6grCYrEGC3CJxy2dsaKgWNZr2XEPm5gojjCw7X2XwNE3kNeaZGPiEJtVpz",
  "key19": "5XJcHX9QhA8ZKRboixEu8FwvYnfZGEidYJMAnPpSx574DH8qTUgvgVqUdiCgwWt4tTBRgL2m1GtqRYkzoNancuMU",
  "key20": "2F6hYeJk1EyvXRRtAnDVQGgbswTQrPkywqb3YebZm7dKbjFd2bAsNWhYG2X9aGJwKA7SQrsaUhjKib7sTxbRBntD",
  "key21": "GDLMnyq8azDXbkGvX9XVYR4zbPL6t3PLeFp8wiUvXite4DfU9sF4htc13LNv447fmRvc5YAzWrzX3VrkqXez6Bz",
  "key22": "3aTpPr9MQ4MMBEmHcGssRNiuEayAVjzHnJkkJKQZLbYCf8SkNsV8XUcbyo7Wq3pH42gYVae8ittDnN3ydZSEcE6F",
  "key23": "3Tv1KtiSxuyeGvR2oihSCQUsC6m5anqnHaLcBLoMT9pekUDpMu9tZyDV1JmxBHUP7dbudvf9uVYz4xnb4k695H5z",
  "key24": "4AECVA3Zyj2tWX92f9tHaFfZVv2QX7WuA8iowLteL5vrNjDdX7JcPD3GAU2kyoV8NfTWVEN5KBbSTdS4xboWVZih",
  "key25": "53VwAZzE7pL1Uz2uRDRws4rypvCpsL4JZbGX9WxKPzfDQCe4dU26X7ews1dcnT7a76sLdXBitMPfXBXJpGxVk1VL",
  "key26": "4x3RxQg7mTdGsHrZnA1JRkaMTpRkzfDRwmAxJc9wPiV9SykucCqq6YwHwtXQ5GqFiyf6DxcsRUrrJ3EAssv9Cp3",
  "key27": "5FShXoUhh9Mt2LzZgMfCE7hxFeT41qjj3ciGC5Wjjq6AFjPU6sA3aWadjb1nQfJhKJu6oASL6WnPCv5mJFwHPf52",
  "key28": "3bxa2y2pmhtymKq8wf6pUJrV7CM8xGjj3Z2fboKaWfiEphcF9h5YGdG1nSEjEwwzj2spYC4h9eCZHE9w2an8A5L8",
  "key29": "ZcSePzM12jxM2ipA3bNTnBKBB8vmpQaPmgPjF4GZkFZQzvvjh7KMEiYZvrYyQqtb4WdoohUZ5WsjTRZdnMo1To4",
  "key30": "2VCTccNNUV9Mm4Y2w1jMgDYUhs7CbvN3DjqAJJjZrBjwVxeargMaXoZn62wJ2yxB4TtVuLKsTdkPecqDtFW2nhq8",
  "key31": "2zJyWwV8KQrAgu53G3xUcvYHrmKNweyEtrNadyA56MdqRGKqma7LP3cwpZdpLrSpWLh4J3GGBkQZzZ5ep1P3brc8",
  "key32": "4E7R7aTjme6fDA2vhESz37GdNnDoBdSzouxc8PGPnVt71m94d3aRjXYL1eLXsZSadUuFArEiHCaMwDxVXPeMU3K2",
  "key33": "2qGpivgnM9KcyU5e6q7DqeXfhq9Mqdvit1SAWjrfAt4myWuBYeCjEZSeR1mKFoaGxHRC7qYiFVuM7RPFLNzvqYDw"
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
