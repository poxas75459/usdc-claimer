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
    "3yJhoQ99rbbSbWCUwfYTFwpspRiicTg5EKydpWjdoss9K55PE9cK8FX5wkrzJ6jcs5F3YAzuWXswHJYqdfAqS7az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41o9dm5qiqrwRpAuGXdUrzZWAtWvMmXW2NwphyetNwA7PY4q1zx7BJBzpTz1LiC6VSw9j5cvX7EamGnb1azwRzBb",
  "key1": "569XrqJ2eg6F3ekBxRJVTSDz3WFLVUTprMbjBBhXYmAxGp2md6nFVQ7adYq7TAsSaK88U3E6ioaRi4GkJXzg94hH",
  "key2": "dqufts7ZAX2kEi7dU2xcCZKgevTUq1PB7PS9gHQrjFoaJQTFw6EYKnDnSV4b8hKPFEdBvyzFQAHvpRcZ28zT3mq",
  "key3": "3ZPQVxmgicaRUuMaR6zfbwicsygjuXd9Lk3BNw1soBXyhz2dDZxYAfC6fuwe7uJLsEZd5SAcnkjsrUggLWXYEydy",
  "key4": "3mVmUGvwPgW1YnGoLWh3RdobC3fgLACRR6ftyi49PUXWLopyMUqqyhwwaFuB2X1vXxkgKEz19bkSP1XMR3SmtxeY",
  "key5": "2CUXv66EmPSZX5Nf66FVM9YmWhC2ypU3ZYezTqwJip6NEzmqfFtuviEyFYUP41cYQBMUX582ewu8RidHHe1km78H",
  "key6": "veSDiW7D742iJ8zm8W6g3ZQyNwr2sUCXZzFJTgqG7jdUyKqepPsEGVGd9jnVCCbifo4Ztuv5iVaAFui1fHLWAXe",
  "key7": "4F3tCdZGfetqNTe6B5D4MN8THRLPoSvjFwTMGQhGrwEU1gKNxUw3xZmoHAoeXApa8RHDodYi2jV6prtm2AncyNNv",
  "key8": "3X5Z8Ug6anovbfifqVa1rTL5MERU1eDd4J4eLQpNdFzzm1rLeDoeLhqjAjELEYg1f4wqa5tU35nVvQ8py2MEWBhg",
  "key9": "3ro9f8NK5ckmfWyjbgqiHjiiRssRsYuRQ7u38VH2sCZkYi88yTbXRCaYFeF8BUW8bhiZbzxySXo1AdfVk5TmybKa",
  "key10": "5XJ4g4fA8hZy142N3qtD5AF2zga5V3jDE1yGAGdiqZnqwjcbFtAACLtt7xsQqM7nCk8WnA4CgYSE3MatL5XPE29T",
  "key11": "4KCYFpK8wwTj2JngGRcxcohRe4JCkVR6Q7kkh1uaHtzfDqi9XtfoX5udC9TucLiULNNHG9u5xByQ1keC4PfRdbM1",
  "key12": "5P6V68EAwyU6mEwAfaQoMyjQncvZVb7yM8nKowPTxuG8YmmKcnwx2pHaiSbAEHyryd5V8dS3ip7P7tUDCLgcYUZz",
  "key13": "2LEcEJW6hC19RcFYr4kccLr8nG5t9EhEZwNeHNh3D3UbDXJ3UMez7mcbURgc8bp4qc9LnUQexLxHuEWPi6PvnGou",
  "key14": "5dhCrU5ZAAWtKkj6QmsHDC3o21WXAkpFFDPbE169dzJwTSuYEAPVUz8wbuey4LK8ZodJ9SYKVnFj4UBcrLtC7TMz",
  "key15": "5RkA41mKmjj8Cpbc8cj6JrzevUEwyD9ZVasHr4H2H5keLkGDd44ETywPktokZ9yMjCWRQJYbqPX9Q9mCq3p5g7dp",
  "key16": "2j8128yH8K1c8BZMqPbCRUSQG1DGE85LHxSFxsk1nrDQoQYUkTdZgoRfnQG5Ho4ebcj84hdWTDjNx1GdhdKRaf9L",
  "key17": "5rGUwfJXaRkkBojgC4JVPVf2jgGb1QyqSL6sahVKn23b5SUJVQbjLJhA1ErnYQxN1NK8q9vFiG4Skfpc4s317voj",
  "key18": "5yJpRZkSoDzKGzabRw6rrfcgY1S67TdSF5txkpr9gCL6B8nh4ceFFQySR6J818TYx9aST7iT2EuTasUEuoEa6WkG",
  "key19": "483KtPJQQpiccsSSTxZXAS1wpevcUsQqiyb9sjZaHiejXr2NNqNZAqRCpgxcQYNzprP1mUpnq7WHXhjXqqhM5YA6",
  "key20": "5JUY6HAPkHnaPsjYBkT4PaTJAm99GDtxznF6JtJDdJXoxBzH2XGNMi2dz4UPAwgDDkt1JBZPLy66MzQWHWJ4Emt4",
  "key21": "5ftWD22Ak4MXmYZcHNf9mqSTx4bfnRrsETUx9W769rsrMLY2CxjJHxACRfC3aAUfKT7m7qTP1NAELtLX4rgdPSGt",
  "key22": "2ju3gZZ5RkHBcw7uTM32zSWqDYkJDadujXgfqQzui3qeXqDJLkJrQHp8NusF4BygM1cYsjKAnhvv2gPSx2SSGNwc",
  "key23": "4bceG3a2U7SJwTVHqiH1XzHBBZoKCBWyRbxFf5yDznrh9ZVnfcvUXNGJW4Y4NZ5vnVoAvwyVyvYu5PNKjzpc72sT",
  "key24": "zdAH43pFV8A8ckQGkfJKCKhybqmVWHhrsm2SYFCiqgTrqfoZN9zejxEhd8pKsV8tPKLvPqsSgvCzMp4VmsyXqzz",
  "key25": "3e2L4kxke1QWnTpWgKKPu8fQ6gt3qDKGiESqKECS8tWFHjW8jqFNzryVvLrtbBFJ82FNtdAoGVRVwFS6LbisvrG9",
  "key26": "5EixdLJkfTwEFxW4nvVK9ii5Vt9BbHjA3TXFDNWsocaeE2R35bafLNTLT24nTHw86xmgQz1mrr4izJA3fLofWDxm"
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
