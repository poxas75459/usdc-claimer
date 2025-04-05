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
    "5YUedDYntGcuYerkKZiHB7LoJTNJtAfy5fDhB8P79wQ9YPfsrZSwUAmFAGjCnWQ7FBQExQgekyT9f2mf6vrQ19oY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GLAe6VfejgYkyYGDwxtWJhMrwqhm37qq5XenuLfWwxn4LVqsqCgvSALgMAhiPBF3mvYnGCKrJsWLUeCuFwToph",
  "key1": "JEzyNRhWEB7WNun4eoynpEGR5Lh8vEirjFziEiUKBQBWUrw85wvmhcwHtE4ptC1AeX3JCrcv7jqFnJ6hH7UGsmR",
  "key2": "3nECe8S7Rxw3Fsj9o6NhWYLMpqKuwqjp8Ncqre7HP3eFtSK8xec9gbtQ4RPUry4JuDLi1hoF2HvZu354G3KW8Vrb",
  "key3": "2C2wKS6G1bwwALmAakA6qR5szAtHJrvrmywubj7QvS8TLwbnZXsjAgTNA6MEmgBnt5b59YJn1Huct8UVHJoYUSdB",
  "key4": "o3EhdT6x1Mo3dCzmiyP3HcRXyRrYxah5Efbtf5GdVb1y3eZtiJvSajNDeY5ou52u9v7tQai6jLmvBaHnebUZ6Hn",
  "key5": "5fw3gN7YjEfLcynEGSBNNfJtFRqwPTMoBSzqxDSRYDvymSAFiFWfKvUtL5p6aeUxbtADqu9MATqLjgLvBjV4Bf6f",
  "key6": "3nLeNY6LcaCXoFTYpQSqQjuRSFTAUrLEHkHtCu2919qWssDoBNwDH3iW8dDDyrHhAGW2VJiH8HMuRg1ygg3t7VXQ",
  "key7": "2HMHG2MT5KqPkUGeWgtcUZsEcHudKGuUvXPjUUZ73d2W56XA9dEo5gyMdz48MorWgzYFy7gBGcRGMDtsde1oz8cD",
  "key8": "4j3uZBmfT562uxAqUYSvePyLUU98nNBnQ8ryeBxGQFVSJij2hN58yfgwhWqcEFZShGFJ9NcsABV2iea9js7G1h3K",
  "key9": "4KL8JV3nXeMM7A43CWynfXxTrKYG3DQ9nU7mnzgGAHUjfoWevDJDpvQrym3YpcHfMeDEJEg6aYDRviCwwioHeYaj",
  "key10": "25teKaVHmyWSRuG5GjrpiuTmEgJHHMkmqjoBRVhg7uoxff3YqtYX517xHQrhXDtaKf66S2vUhpSL4diGVsZxjPGK",
  "key11": "2FJqGvfLRMpFM5TGXm2qiryUccvT7pSgXXPa5nUa6BcFnmAwf7twcz5NoHYWJjXd1o3iyyr6uLHwVKocMnbBSw6F",
  "key12": "38k7wwJEFzRc9ycNr4xzeoD5vHwsSnjBwnXb6LfkwetEaXdxUXfeyd3KQut5yuwjNqWiVenH72ZDBDXsxJm5bLjH",
  "key13": "36Jk1pqWsCJnZ2QJUkzkgmPXX9xcfruSf3ak7mjSyETaBqY7Mzy2VcoevBD3A5DxggvLUzP5ZeHccpAUo61gFzZC",
  "key14": "4KKLtfzZeCib8qMXNzXfuU9WjnG1AhsiNVWyhmdYrD4Xgzrm3RPerJPTDKQMvwJf1EemC4hydgXtLFCwVsfWo2xr",
  "key15": "rUt7zWYKAh3GNYf2m3kR3QhUdYipCZujTbMi6tcVp7s3aKN5XnwpCDvyVxiY8gMKgjrRu56geEXpU7pw173FqhV",
  "key16": "hnmhSrGYqstrjWvXPRJ8nRrPtLriAE4YxqYXN4CzcqPjdhcyC2FGT46EK8R9Y3jJHACEYWRTdKTY6yXY9vxiBqz",
  "key17": "3Acg5Smcu8JY5a9jXkHdy5VLBrXMuSFPDAVGSH2iDHTpMwqtCY6RCnRjUyGb8JygGoHEZjm6FgKYfe5k8tQEjMe6",
  "key18": "oofhfQTmmGn4xm8poQvz9BfTxq5hJsZVFUunBYEJnh9TrXALn6Xh29mzo8TqmgNyLQiSZNYgcjPJxhZ7jMF6ohq",
  "key19": "4QgEifdW3amBYKSh7vPmo73YKxYD73qKtk8QjSvRgcaWYYkBdB2yAybpg8Vj8b61z4e2xLVACY3JbxE92uasR38",
  "key20": "2WfuJYVbxbRM6kqsNzP7AfE1H2Tpxrz72b9PsFdRT3FiRdVDwZKsUGaQR3HPWSpf3euFHAhvjngorL2kTMDupQJq",
  "key21": "42fm6pdw1TYzF4STKwuARt9mugAYDSijNr9f7PhCAfWETZBAHzFwFA1nTwvGeyK8Vxf3RTHTHnn4opW417kj29Ci",
  "key22": "3Yp51cVVrGAoM8AqP5qvqzmgmkiGmPg9LaZZ3B8r56PDnv3g9f16j1zYMeYdoQvQmnk9n1a8au6s1YfyS62fVxQ3",
  "key23": "2uSNpQRfZrA9272TmyrPirfz1DzPJkGPnVsfKbsk6B4AdSmR1ZJpQF61641fw2im365KjYhrgQkDnDNSEQrwy5kH",
  "key24": "434BTvGmYqV897NaLtnoBdkHCcRue8Sb37GdqyAKXKqkYmmCNgeZc6CU6NCEvX6w2fqH2ZBDFxG3qVK3KJJHcrB1",
  "key25": "4C4taYmr6ihLUN2iqZC6PgaYZgTUrinj3No66pDRxySotcNZYfZSpoUkYhdBEMqhJXq9etvssBgsKcwZ1T23iFqz",
  "key26": "ck1zqdSFSfQd1Vzi5DYfMcumm9YoNPsCQuJUNiYwE21S74ReN9gipWfq161LFq177M8ndN9akYjan7N8zwFRL7G",
  "key27": "2UeDg8g1yRLdtLpYPNCCemqLzT3YTmfnipXdC3hGDykByCCjapQ6iw4FqvedTu4TLvNBR6RUnimhRqPmHNYcX8bM",
  "key28": "61pYykxbCAdZNWgpEbWU7Q4dG3ma1EcpTkU3noV4qKRBLbmK5wXV8pZCSSAqTyyxfCchHiWoGNBSrGNjyeXboRY8",
  "key29": "4CbfeHGUcEeVQkVyRHvW7nTHpKVpUsqw3iCPaeoZQLeXeSsnCv6v1zRUPJYjTjxcH9MwsN8X5wGCZkGVvmgPhhf3",
  "key30": "2rJmbx3JiWB1xNgvtikxHAGBPVeAoXdwqs7Xu1Gv2ETx3BfAFDCLMrQWNKzdFoPmUknsQtYtiYpqVNLP2spRKzpq",
  "key31": "5phx9NBgGxYNP38vJEtbTmvHLvjXCCBuoEG58zsmbpVWReTVpRqfrCDPCMB4jHoN1D1pqTynMEWxQKBRa2kBNTup"
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
