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
    "gJBQBtB2fyeQLEyJqxBuQ1aym1BdMZGiiesiXpykhiaXAMM5Z1L94CtJYLJLWTPwKHpN2cxW3nrQGRCQoWzwuC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWkk572gcx2u3yj5t5vEX5mbjSJfwZdv6aP9zpZGHBZ4GGSKAYttTbWx2GfvBrQhd2nxakFScXx7DrwyQvqvXi7",
  "key1": "nUbiquKku5xxx7hceNer4uHVNsftNYPmF9G6ggTzcVRVZJjMRZs9SeiUZ6cC64dzuTz5Rq5Djg8z9BEv4JoD2J5",
  "key2": "648ufyvwHZ8R88ogWdr3DavEvYtPsmG4RWM2tYDTocsMYtbRkN8dkTduMZy9Zi5bLo99Y8SuywgzK59pMHfJTXEg",
  "key3": "4FMW8Q5U7KsitPCkqADEfo9VYersh3irqYgDNf1BvsPUgnVxsni5Lo5Mopuuusj3AETXDC1g2iRGbUy7bdCBF1fy",
  "key4": "3qtgiWuf5HD9grMrwExcxL8cV2gKt4YxCQJovGtyxgkJkEj4io2q7BDvqqerH2D8PnmWbTqzrqnVN2q1hbyp6dam",
  "key5": "37FaXGSEgaUnWumWA9BMfWCzbNm7n3gTeAeCaQEK2WBKLNq9MntbNksxJx4QWH2JVq8w9HCTzJNH64MyDJZRLaap",
  "key6": "2REUj1R96XQntyRvgTpQQLG1fjKY7ffgHNttiyQwf3GmQdDmEMBm9Kd3hjV3c5X3c4HSeTYNbu8pRDrhmcCdFGrB",
  "key7": "5EYEzWcoW5wcdJfQ44WBRb7Ky3kxD4a8Zj9ybAXhaSThULezAPvynuFzkJDk8hWwyaDeGWVv6KfXEpw65UcfoZJM",
  "key8": "5s7L7UfSUbZUrBr8tjuVpMo69ygK8DLDp4uSWjU3dPu1gjTSpjtmV8qCFRqfWLPoFw3QKdxo6NzhMmdm4r5wxKma",
  "key9": "4KnsvhfouhfqywR52q6kQfEMtb5j7gZwuZoavFKUjygh58rQrdUtk9FYJNVESJTxCLasWbFgtfjgyjEVqMtWLZnP",
  "key10": "3Fqpk36fQeN51iSF3EqyX5F8CLkU51PqAF6gqZH3dK4GxYpBrNBkV6iMmo85t7KDqtLBKQpF4CBjh7ze5hFx7ikF",
  "key11": "3e5VLGZ9LmD2wzP4LJ3Fw1exppDgQhoJ4cdfKJMzfHTMXxrN25xFekDqz3xXqkc1u4XFDdCG7je6XkN7UAmpWykH",
  "key12": "5mbUiToVMm95jCwc6L3rjJkAdQuxfeRCRD5qikUE181JVCBBjQnyp3gRa8UXdLqnskuxHkgVqcf6sa3mVukiAwru",
  "key13": "53hsZLhNDkKoJbX6oggciQ4oQfscUpZn4XG5v7agPBjr7VSYtrq7gZqg8Tfw5DXbr2P84aWsRuVs9dDpjGzgwoE6",
  "key14": "3djieK6n88sNJyCyknnbUXnDnBwwzL5A5yAf1E47dmWSAb6yE2fSWrLf2Sbd1hw4r7Gy1dHgJ6YVvsJ82RNfDDQh",
  "key15": "2itpGbu1LtCGVnUmCrzWPjKWu9smt5ffH6xsFBQ7zb1gBk9UGRynDRbpKPei66cYePnpLPGVYARXMPBaXGmGscnA",
  "key16": "UZogfCiZviofu1GsKXDuDSrUWqfTGnpzFifEoAorDUCHEobyF6KKP45ZZd5XUyprv3TuMVA8KKqXa3echji9qxJ",
  "key17": "2NoecEJF6q9nTfk8ei3R7sQxFkysCaRnaRmHqnzAzsEVbf7gTHKsyjwf7uW1mW2MMNF73nN3XLMuavfLa1HRTysY",
  "key18": "3Tmsu8iYGgTQaVNQYJod77RFFAtj9r4EwDc6jUSPxj3ZkoaPh4eKvpkUvNzJwu2H8LcQae2gPsuTNRgHjMLUcv86",
  "key19": "2gXQLUGRLxHGyjrsVMtKZc1XJiGYqn74Ctw5stePEgDdJUTLMYGr5veWmmfJs6MG6UBnoe529BKvwTKT1PZnjZE3",
  "key20": "3wXcreCZHyuwXrBaUWH4zCDiC2FZPG5fD2zhUk7jKaiPLPzPk7wwT4ohdbp6agutc822DjEyxs1Po7gRXSSNm9fD",
  "key21": "43f1Ko8nYaz28vDMJDf4RmP1MaNfyyLk9nuEn2hFPseGKfUwcoDj9bcaxvxGHCqdFPaVkc8WCwPvMnRdUsW7hJK9",
  "key22": "2pmnTwzRUP42WqqTHWAxhhy6Zh8KSHWsEcWJJdfUXmxxDi9V2dxTqyh7JBjbdHqAHvuXPd3pGquJG3bsjsvvhacn",
  "key23": "2bk3t5iTAGQdv9Sf2Ndn1TiXJp9s1ZCndRwS3swoUx9pfiY5L34fKpKBBkh8sTJFyBDVfhXNiVGkr5p7aK9ASKyy",
  "key24": "4A2fyqyxPCMu2L2vmh7ArBt8fpVTuXS35wcr8DQmnwGPLkw5LXiSQAfT9jBdNAsJcD8n3P35xT1GioB3NhDtSaVD",
  "key25": "2dviWdMoMZbmNvPio6gwGD5bnGDvPrMogmKp2UvAmEcHy4wSiHswBrabyA6KBL16sW1pD4tiTxjrbKp2fpo6YxAW",
  "key26": "2vi9XCJk6nBRikSNgffwSraZEHWWKGFhMHeaVfusxxwm6CuvJubgJc7bJT3KBfwQtwWb11dbcaq5WKyJdBeZdqp7",
  "key27": "2axbeop2gvKcfNcnpkrFkx3mdF4o6GskqJpSLkvLL1nq8Ua4xEwhY6XP7krvYdLVwrdXeXM5xijZMxc6eqrQW9eR",
  "key28": "5F18TZHxCsbUeCiyk4KbEKCuv9cfdaE3AtdgJQ2tJAo8oJCKhqZNRMWqEjT19rcrfCRGjhD6NkgrdhWG17XCiBxV"
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
