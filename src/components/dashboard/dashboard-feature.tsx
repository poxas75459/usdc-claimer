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
    "dKypcU4cXSNS5jVPbDAfS6148JmFywPZNarRhcejHiKYM3ZMWNKDBVW4Kw6UzFc9qXR86R5UJTzEXmDB8MxCKLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n8NXJ3enJroAHdhTbyjFWeCstUED4UBE9oVCSnW1FCUELVNPD5BLqd5nqhC55wUYGme7Q1ZukdqCZQe15nuV3Bm",
  "key1": "3Hq1pWTRV6Mkp9VomT1PrU7m32qrrw4HdP38sh6Pxq994t8brLSU6MNnwhnhzFd2D7b4G9U9rHu7kEJa3BoHE7tN",
  "key2": "39WvAPY6V4GHUQAYeD49Eoz2iRnQg3dRSrTEQbXpFLndL5PWjYVtYcy8FnhmcHrjwm2BcdvcSwhctaJhVnhHrqRd",
  "key3": "4pWViaXchrFEAUnuCpbar7b5yx3zTSYTFFfSm3A3mw6YbtRi5Q7cXevRgrPMPFdmUMZiTChu1bqDnxTD1e7QgJpX",
  "key4": "5xtDYW4QH2heMV6SMeSKKLdAMsHKWaqsGLfSDWH5AwtJRXancntgYkGc9Pn3SDqbGCnXK5vKHiSvyYQ2PMBgXo1",
  "key5": "3UVsbo5B1zmx5GQWf8ZQgVYgU7o7DNZZUCxgr7euEYPR286S9vH8hBCkHrUB4hh93W1fsqidygW18GoXZDEEojwf",
  "key6": "4LQnjE1xk7Su6dmxZNCX5z9v8kko9Fnr7LYEYPR53X4btoLQHmXNWQQMsLEAUTBYSLHHrgHhzGgam1ijBdMpLVKg",
  "key7": "55B39vwDmjmpKi1YkmVAWBFs5ikKcGx51YAbTUYhkqNxGuz4dRsMC1SMJSUhmKpBfEwQv8wKmwpnm8SbJeyEYEQc",
  "key8": "oPhakXacHV9umZXV713wvnDYe17zgAXRsD95CizW7AWRkKcTvv7fRHndT6xFCFhZMyHye1wRuSnc9djssHppkSE",
  "key9": "48epvDWUqpRWSMpSPB5CVPfHDog7KTYbictZzq7WgtqhbfaQ92TMjfvVSX6VnFth5uwFoLYujpyiQ89iLB7ParRu",
  "key10": "2Sk6JHM6CRDu4U2BoncYv5rWQATw7osmH337tTEtEaeND5nN3bxGi2ip5FzMWtkiN3TrE9PHhF2gRSQNg2KWKtik",
  "key11": "2y8EctP1TZVAwCHD2nXrsDdi69taT3QqjQAE33ukECvZPe5Y3PPqqgQ4CFfdQHTeLxGkEwgoJTZPAmediRjKZXfE",
  "key12": "TGZT4U2v2F9Ag3fNMTWYUMpDr6x3N2aAHR49yR1iJ9Huur1UfFEGg37eU2sHwK2JXcy5iSHVMQSP2WQDeLwEqbz",
  "key13": "3PYaz5UgiJ5z3ofUEPWAezbsV2ow9Q2nH2cVF26w3NCHFN4fkcJLrMKgx6igs97PHxnCcZuxVM7zNY6ePXnJXTDe",
  "key14": "63AcP5TZ4NWBrNQdaV8kSjJnbiJki2APPTPXEzBZ9VY3iEQS7WjNTbQN5JsiRc5ranJ4R7Triop9DgjGioHhQjc8",
  "key15": "HFFHMPi4Er54mvDqPJYgA2e2aULm5LthqEWCgamgQkN3wNMBGsFojWk9uS3JFRvWtbTx2G1hAagNAzhKoEDeeQF",
  "key16": "f8nU4P5TrAAdRvnsjphE1vh3VzHYppmeTxjiz1xCuHUHkNLpPxbR4Yo2qqD3AMertNpHCXXcJnNZnMi9WAPbS3J",
  "key17": "3NWgVRDvkyvD3bpZMSBmnRrZSX6xDbezjJWNvYk786qjAYcZousNFjEZ1DVQ8ZJqh1E4kYWK4R5zC5aJ1Gg7TkjH",
  "key18": "2i1W3r9dpJvvaFt2DazEdqEMa9PUEVPQQZUQucQ1pWLSs4bVLDNpVWGfubBVpMTd3PYitZE3WK1rUNqPkFtPisBg",
  "key19": "jJokXxg7EjyuXf7uipwxcc5vDCMM6cxwk5S4nQ4zWezVtRqbbREz9Amzfjnfi9ngzULXBwXPDK3eu5uw5s9X34V",
  "key20": "x3Fbv4xCiBaQyYbYQ34zfcV3XVk9UD9L3yVFeUUu7wLE2xQgVFNnFhGc1uvCd5dzaZMewU7LqwE83PweJ4vpJbW",
  "key21": "9XzZ5CPEVxEGX6iX2WBgypyMvEto2PGsTJuzBDLXuxw9f5canVWmawigiHGLToo1C6bKARy6M9hn77uuNzNwF6m",
  "key22": "5z4nrmGgofFHQpUZHbe4eggs5VdFDweQbZz8HNEsr9BDWLBxXbM9iNB5QSCtu2inVNYqaa4MR4VLzckum6TbBDmW",
  "key23": "3eCbwpxHW6rjMfdaMrhqNpGdupfJ2Jwj4xAGLWH6X43E9QJhiGHbAmp2zEpSx76zM9dYv7UaswEhnGJ5n7XwdbMf",
  "key24": "wpmaSUw7Hr7qpXePB2jTSKrk6iTsR2XXa2tmmKGJ2gY8VobHbkUEkuURq88bp7JXJBw4wogq9jKBy4NkWWdJd5H",
  "key25": "3e2wdZie8TaRccxor8m1iXaQ2GaKSrYbSRsdKUGfoKQFBBWG49H2zBJsJX2fo7SNZchiBchkUFvzXbxUsMkWxbZT"
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
