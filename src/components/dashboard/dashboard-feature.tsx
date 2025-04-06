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
    "5SYzZFynt1atReNygF9D3smuNkXqHV2Nk81tjfwzuwtvMq7pgwScaJY3uHYxUhMNxYSnp5RNnAHj2KadYehUgNcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tPmCQoQ3mr43m59SGk2a4LvbAgowLZvLyuMtYy5Eqp2iBoCsEdZtMs2rdnLkhiRaq9ocveeCPNSix7UY9UkoYbb",
  "key1": "4p6v5aSSSGdgckwFHTq2HkxoFNkPyDXDJhU9rn9ApQ7sN4Pxk87AEyzaEaX2GLPdrSXhwFek9Hth1pCa8fSCmFrh",
  "key2": "3LuYrYLSYwELTup1tSVVqiU6a4Cgzuu3fEFrgecrhofKEd7YCC8MML2bWBn6ELvBoAxTn2TYgDicsoMEkcJmf8YE",
  "key3": "E36EzMqdPmyHnk96sMmQ6bsZ5Si6SUpNu1G9E3Cdqbtvg8jh7Duz5ocUHMFY22TVX3uEPzsj1F6HUSMXbXajh8z",
  "key4": "4zubY9HdXcJKmFyXGWzHG782iBWVqis7VDspQRBWkxUT8o6aDkiR544ZFjJAPkd1QttzZN2k9RFZopsRqmoaNsUy",
  "key5": "2t9iZu3B1xQLYibJNBAUnUARakdWZBUgQivmoEdeernSQKSKo2PknwedD7pxp8oPfEXoM2jXxiUaY1ckqvP4iNt3",
  "key6": "4XdbQSXMauuaHgLcuoLB1mrfDRGvjejZ2SSXFBuy6HcxjwjJgtAiE9BGFvBbLbJY2ZfGEKdwJPtrb222Nz68zMTP",
  "key7": "3Dn3fCz8Mb2PwjUB48c6r8MrudW2YTc2x88j9WSXJxpSDJe1yX6MiJSDpMe89WYveMNQc45uVseKPTn5F5W9CKWa",
  "key8": "5sozDF2TYHQFoirW7txateoZqFEapwywuimQ2sdnBEdiAnYVDbn5BDVGwMK17UoUo2aY7mTxaufWjeYpSybuQGU2",
  "key9": "3YaWV9cfMac3ZK3bBeTsfmz3CNu8bATijNAq6Hdj68cMEikzNW3VT1yMfJZj7jY67eptt6koqsTsTymKbFReor7H",
  "key10": "H1RkPBENmUvq7dxB2uhoZFnDpAqMc2ns84f1X1PkgzthXuvVDUgwunFJTKgJo8yiWjG4Ba8Vm7Ng4FzGbtrpUUH",
  "key11": "s7NioAPDdhmCYvGaAo46onfM4YG6D62Zn1szJpyhtF4EF3zvxuUSfveCfNUoJSr9mPXCbBJgQ5y9cHe6fBNn46v",
  "key12": "oQrTVd6vsCJ5Z7oZDSd3BcWZR79SGg46vtxAXa1EZsEr8251ksFtQZRnJsXXy1ogWCLC6nSKXV4hd4tgUMtQbuJ",
  "key13": "3NqkwxRTHb1X8CNJNepBockvFsiFgesTe1vhEhkS6J33AbYuoySf6HpuzGrgdaSBf6LgZu5Jn48mAUCb6pqwZe6t",
  "key14": "5rtVQoim37mtcA1HkRc7mDh64C4XTnzkTAbxrx8NJ151mg178o1SqjznyThdKHmSLHRmiB3vj9Mjugi2W1WW6opH",
  "key15": "4eCDUhq9bqiXApZX8euBLck2NmRLrFcCEAwjW6GShD5qhjU99qGo7WQjjkV5jMBA5oaLTCN4e8tbfqMeQh4SLxSn",
  "key16": "AfL8b8CqAQcLoUeH3dDxhQJ3wYvXmE1aKmXJC8nqgRMxJ3btNwGRiDQ4fBawfVEEjLDpBMdh2CoqX3KwjVGL1CM",
  "key17": "3KxifNsZQonK9tJLns3X6Bgvg1i8CX8PWFmyQGuzuree96XeGCGMCaX1a6RhTWbyCqm6JWpDFsmaMJBcGgnNj43K",
  "key18": "4jJQN2xruhFwHduUqww66XwXfEiDsNT9s7fBCo1t2pNascwwmhoERWvuzRvmvv8iPFgFv233cmUFUwyAMCse96V2",
  "key19": "4tHxDba116ckxEwfVSYCbXs32RpPkMpjoGzQCmi2XGDX8Ls5EMUCpTa8194NuU18q9cshUZBPk6P4NqiGSubYoCQ",
  "key20": "4wtSJfQ717QLMmBkq7hgNgycaTEZrtdt3hbhqvUEYV2rSjctuUGTdiMfuNzW9GuwDqsV5bKPDucM7epimT6jWJQP",
  "key21": "2fpNaBWVAyyWcDi2UnPcDXRsg6FkhMz5eXHd1oFdfRHxBvfJ62u7YxR4WrB95gazmnFSfnZDM1H5GjjpqEZDrAGj",
  "key22": "5ajw3UtTCSagjA83A8d8rZ5fRkp2zj1YZGj1gjEqnsiWzDyXMrpjxJNunVHLtHBJpa8kApqwSmLmL4oRVwYwJk2e",
  "key23": "2xf4CcscHNrmmhX9MgyYf7qBYAL22XRuHqLssD33WTx8KF9e94QKt1ZxJVd3hyPYEwyJmYgqusJqgt774PFdPknW",
  "key24": "3MXX4kHq1yLUnWydt6rkZSnUB2CvEZPNAGfm1AsrotPiD4inZZUzgv7uqYqrPV1EeYAzYazVGhrP6hNJXvbZcYf7",
  "key25": "4DZHtN4nxGWRY7Q3zV1DnJd7ZpubPht5Ea8boQ9pKbQe1yBdsqLBR16YyT4DAtZ1Y1PuQHSwxbT8VuYwKYFZ8SJT",
  "key26": "4GVkeXWoTg91Urr1smhftoTe83RK7tdGquJuwH1qmXbYhzChYSnXkHKRTTxoPnPCmgiYF1qsLn1Haeb97pq1dE3D"
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
