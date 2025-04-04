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
    "vemcxug5tSZuXFps3FrcicvjDdfoPTgnfeFvz4r6U8BnL1QfjTDRpnP5DAZbMZNMB6uj41vbCY9tmfqdyQ7CSc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hWfHTfnghho5toUhdPEiEG4sa7D7mbyfBKDZtqnKmfv9jNxm5Au8y1rHskkwursT9cfUhwuEK4Jnb7dY1JnYFyn",
  "key1": "4u7Aa5FEbBaHtQ4QT1dnEwC3M8HJFSghoxZBnz85ANqMtqtoZD6YuYr5CCjcvBLu5fKRPM1wBQ3xwt7q1DUBRG9o",
  "key2": "2qSiPXRp5uPCnYigMh9N4wn2hNVn8ogPBTPmxD4F8j2efHVnHKqMDoLPUUbQJ8TsDxFKyr8jPiCPu8ejAs3Rkzpn",
  "key3": "5F16sHsuCsU4t4LQ3QxNW13PBmvVLrBfk7FKpWgTrbu6yhkkGfLNET7kohu2cxUd9JRXydDSwT6qSTQKnt2M94Bh",
  "key4": "QSh1gatkSdnajLvcHkTuyMEMMs18X9rTs2N1AP5jrdNXcKDq1p8aEKUtAXHWnVXwBGuQDq7fPrp5pN4TU5gazYH",
  "key5": "3krBQdsa1aXkM6xtEzVb7FofDWYQX5Tz4uqGZTTrab5HJiegRApZeAMMrzr48ytY5GaLfqLsvQffyvZKuCfjRjng",
  "key6": "22B6BaGu5LqbrVHqXAy8q5ASDxbjxcsn9krD817exxZ8QU8RHeM1GRQ3FqqrK6jWj7WkbrPGMd9ZtnYeTpeS4z5h",
  "key7": "5yA5e5Nyeza566BQm3Cpcpdy9Ybjer8zvkvphQiaX41Nj3dx1GZ6SA2D18xxHz9v7Gt35tz1V7jaXNYqysN5q2fC",
  "key8": "GCRi3wncks6BRZrS4R1wB7iu4Xsh8HGxufRTUWCMtJPNhwW6RTzncWNjDP4GZUGN8K7TeKjQ9y9HMU21fSrPbWJ",
  "key9": "3fSadtsVbnx3hvUQETwGTjcyree1GmgemuJFbp9HYzg1V6BnZb48dnusbEFww1dH5hoVnFPVUGHLNs9sVsxv4Pbx",
  "key10": "3JUHfvFCD12KvuS52hXV3WA4erViwtmcWZKEmFnjV1k3tUXtufpzVpFEqnSbGN6JDYFyDnvG8MnApx8hSURtmRqY",
  "key11": "4hY6DTvzxENTiaKkKqKXnWEu97Cn9dkMY6ZguaDoBbKw6suKsjeWC979eDKaLi5SLBgJLkCUEqtYYPXzBPZH1FXQ",
  "key12": "66ndV7cD7p4Q7bTLeWtv3AaRLanSpFvTcZjjyR3ktRxNDCcLGeXVyuy5o1ygevfoUKdzfADavXuEofdQqvdSfiCF",
  "key13": "QgrUdxNS6jvcBaAc64tdLwYr2NTnoCbqKhwfWSc6pbhuzBsHNH7pdbJkDQMzyX3xeanrTYE41aXkeKgZpF3S9oh",
  "key14": "5Bpc2kwtHPtr8FA3MoJGhUqdJTpSsedQDYNxYBKk1ENnrVe6axTnABDcZRbAd68QGHxGLKofeTAa6baunJHXQ1uH",
  "key15": "gLxEHKi7YsDVNTgQkA7nT4tdKBh2FXYFT87cfz3cWvoq1ahbFBFkcSBtiXeS1zn46M89CPx14VXX5NuaNRudtmw",
  "key16": "2aCSRRVFeWJ2D7fZiQfCpNjn9jinJeXDRXkx46df8Y5ZLVTBeBayZx5VCXyjFyHAcxLCuDbrB6UTcH8K93E2TaTL",
  "key17": "h23zjPjqYLoxfPdWiMAwKUksTs96waPjgtBFz55hpCk3F5qyBNVJMk1aLYdM7oBH3T7vi1Wb1HHkyru3MUdmu2m",
  "key18": "5G75MrsDhRf86yj2gDDDcWzGNz4BejdhFvHQRPjmdx7Sv8wstJ4xffb3KoefztU3y7SMFBXX3iwn8R8iyrCqFGEJ",
  "key19": "57PvqEBQ6ChKNRdiGb2ZeiKM8my6CGP5xS8otsNyrTP6W7FbH8ZLg8FzFCtjDhGe4YA6iakBnPXnigAHNtRme2M4",
  "key20": "2Fzk5WeWvYyrUb7CTcN1MdPaFi3ryEjwzMMoy3aZpRGGqQRcNhhzdNSzUFcr12n2cNvL9W1uTn9NkLuUzNj3MLeP",
  "key21": "4ur1EpAR1wsXrXB1UbRZiNxxH7i2oq4rGrdv8yCAGDk3RLnEoDRUD3WZQF3v839DH7UGrJhvenUoFSrj9uJVyPjE",
  "key22": "4HwBSu155gaZGWx4qK1APnS6M6HoXpUfuchZjhbZCchWj6RHKcFaGUb8uL3bDoGSXfXGSPBmZW5M7ukFhdNN2ZwN",
  "key23": "2sea6zd49MfjgnejVprD2WussSrwFketDu3hjPLA28NivjS26V1cmUqxPNd7zZBkHHXcrAzVnXMvUoxVVnJEFzEx",
  "key24": "5euJh65xgEwUGvbHT4HkkKgiYKqQVgQnEk8WJrGZuTgA8DmHc9gkyfZJXeCtbjVepKwibc2K339bERjqA1ufGL4S",
  "key25": "2fFtNX3MbFUbac1TAkwWLDKGkQNidGTwngAScNMVrmSm6ot6qyjttbQNw7m1bvypMsfF9G6pFP35JU7qW4uRjc8M"
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
