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
    "5d9dSCtqLVgryWvBNPghj6qqoTsbGsfk5ziw5FvAy7iwasEzS6v1AZ6tciY5pd2TvhPYN12f5czaTmN6QPDb6AB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEngSh7jZLG6BQhEXdPTbw7dSJiH8aSBYgYFLXbnNJjDTKH2K9agrYFXvfQ1jresZrvyAC7uSbSKTiqQfGZbpnb",
  "key1": "3CD8JhTyD7uWXqwMkTvPZ6nrXS6VjTMBUr8deBMzGeZHLUrEPd5QKxCZYYXcqWU29kunX8Txt7ForYhKT3miF364",
  "key2": "5LPQKMDwkEFek9DWuxsa39yWpF3VxG53kPmjye8GFXjyEYqivS8MJjAs5AjCSpeQAxR8mDd6XkC2GvnbfLWeGuXh",
  "key3": "3HV6iAPVBfHickNyyCAhTnLTyn23Hb4Fg21GUTk6CTBzYUo5NzaTjccCcdxfnmP92LyDYT4PymAjteBzMytyh8np",
  "key4": "371NgA2tjSjFja2LBbw88cY8R1CEyegp8X1FTMYmR62Nc4HvfEBcRyW17FKXMZuZxAWjvEFQHvhWr4zZrywH95xK",
  "key5": "5cJjWcKD44vSADx5u8jZDFVa6f49FtMojVD66H6kQAwkgX6acVMok6B1a4rzZnYEd4qdH5w4bLxApsN6vBTk4bB7",
  "key6": "3FYpiWiBDoe4SLer3WyoxbT1yhKtKXuwRnHi8qgDvVAr8H8AmBvcdvewUzNyk5fv7sWacNDBqbYbkQkk4zB17AGc",
  "key7": "3iVqiGxrANWumcmgx423RZC3j7mou2z5NZFZgTeZe2T24cMEXHXvchhpNaU36fQAFPqYNUc9CazbpqHntXUX8nNS",
  "key8": "4WcrydpN9sEVynU6P5BPydGTFiw7D7cY36YoDDgnUQ8z4CuYSSUeG6JKzkjzcUbRyx5JVg7JyUFzEEuTG66xrYaf",
  "key9": "3TgfrZM4tF65kgHgko5TJod5iWmKj7Fmiq4SBcdBJg3vQKwtcapycdLKEUi2N4Rb5yKJcMWHmX8sJZ7gafWw9Fmq",
  "key10": "3VDwBiik1cr2ixBcVQ9iLucCF4h7DkWdDuiLH6yBw21nR5qq612it5sAUZCxs1X5L7hbXDaS99Ayoq28MSHsiU5L",
  "key11": "2JpxAWZiW2jFAw2Hw8ZdXYDnJFaenkqnhQ9cm9vBT7JVQUsBm6im93st87mgwcQru9vsxT6aBB7tKZNEiSEwbYWF",
  "key12": "66JQ6dSRfsdG8nkjwUhYBTsYsJ6UjBrPNqRysdyspTKbSaPfCo6AiZQAjDj5ZngobcwUvGbnZCXYAMEXbAxzbwBz",
  "key13": "4UKHmz4aVofHqyTjHceYGmdLRjU12jJfwA6cVAUkUFG7b3R4zP42J6HEAR7ZU1sbR1xbcN8hEa9HT6fL7WcEMjAZ",
  "key14": "3cpd6twnd56utekTUBvnB2P9SUj3xmAxp1DLhQ354eEBHN9HE7dR8aKHmMiSRR2iKGWbGAMspegmZAk2X7YyhxtE",
  "key15": "3Qszq4b2FyouBWjYQzpmGHygvnRSMAuBZy3eergMpqvuAcUFH5u9SeLLNTtWqz1uMhYDnSfbu3RedLCjSRwEDNP4",
  "key16": "djwGfrsBSkvofmsdv4ShmKEu6NDFqTBZWenbMfggu4MfirvGykz1JtxwGzhEpkjFsBy9FknKKyecNToiPhXkEP5",
  "key17": "2uz8gBiX8bdi8wCnnr4Ds8PxBbnUawwei1fJFhDWhn8QCk2VeGvj2E2HmC9chBykTjhtaeGybEp94WQE9QQ3khnU",
  "key18": "4iKJ876nScGrH7vNcaNwDHxDpsbtP8wDaRWkRC1wqDAa7nx8KBVZFi9x8Hv356EdauxPr8984RkXk2cKJMKuH8cp",
  "key19": "4evZnFPf3pigqXGqmUy6bq8qvAG72dCtq3yy9A4tdky1KCALKafDagM1tTxJbJzMfk44FKauGaryKA5FtuUSd4G2",
  "key20": "5uabHPVnTWbzDfEWCPtMKBsz8Rmp7bv6qsWWcTMxYCjYWf2ZwhMoc56TwXPobcGTy8rfB8dZ4khGxJrX7gFDwDuR",
  "key21": "3h9Fo7XQ8gpv6oeCeK4v8Tgtq7kcSLpbidBfcrWg2mZbtYYNhzMJfCuQ56vXVFtPyPyMYKBCMueLmgsSi5fo5odK",
  "key22": "3PTJRtkj2uxehFw1aeJ4urUaR5Defb1etpoLYV5T753SKmkzF3NwssWNgbZvmixrneefjG5MeRPFSkNTDrVdNRCs",
  "key23": "4kFCmbnL3ZsdkFRFuVQAGatctYrZ94dtsBVaj6tvTR9oHQtaLM3dq5aoGvd9YosYSwJAeKMHAqv6qWqjKh9XwLDn",
  "key24": "395XWcHSmEkSLo3Pk3f2uNWJA4H78MZPBqtv56ZzrLWgcFx4Sn3p7svZgGHwrVbenc2Q39s7G24uqQfo1Dk6sJw",
  "key25": "5T87jTse5xKxUcHfVrhPqTS9ZDYMQGRoTsd2Lt7Nb5Fb5vcD7yt24WZHTS6tMEdzggwikijMXHa2MhNysQkX5LPr",
  "key26": "3UpHQg386yijKvEgVypckWJr3YC4vYjaoWFKNziUqAuMTvZ5bBLvfG9TDxpQF9u2Y1zVFnxwcsETxGatQajkSBbf",
  "key27": "54PqKiyQ8D62mY36HYSPuUF1zMk9Yshzq9ZzVj6spgb3GhQHrWTSf63H5G5GjLKo9iWvvLhNuH8SEvyPb5FAghFH",
  "key28": "5WVNDZjcZH1BnJgnu8LNREgpkurzdrgqXsrGUMqBUG9soJUYGJhKgbZRdS7pJU4esYYMHnjA8AWg1uT1Mn2m4HqE",
  "key29": "2mBh43TUdYFugeLACFzYE93d6P3LTMP7eoaiLNYcHLFZtJZhFp5k8bc4mQmc9fRB8rihTzvKGZf7QVpUcHbJBDDA",
  "key30": "3BoyA3m9b7Y5LiiP9DUcDv7bU3sDXYpawQumv3y8oTaJfCc6SEsZVTnA8vJiDCqSZ5NUAdJMzeND7iL8dmajNftM",
  "key31": "4UBNYB7U38G55tAfhjUxRtF7gk8rdBnfRWH1XtJc8NJ2GrrmUgLhCZrpmedBGURHEneD3S1CNWCnntEz9MaVzk9d"
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
