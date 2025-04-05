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
    "66wcvW8NGeUz3ReZNtH1WBebxnceisTwjSRWvGUTjkepP2bvGyGaJ32m4S6tfXg1dPWjFeEknRPeReoXEw7ngWjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "viFD6VFtMFqFV78MgyY1KCQ3iqui952v1jmnYx9BCoA5BxBGACbsG8Eh6eZDRE5Cy5xgdQwmomjdWxzJz8yGcde",
  "key1": "5mUYKraPQuonjnxDa2yrGyrfBiYzWKG4oY4R1SV4gvcDHMYicux89UQLLGSLKSL6NxsZ9ibNyoAYaTC4m3jDHhFp",
  "key2": "g6nadT1LuNw9GZeRNduRhj1H82ed8EjjJ8qZXSzmFdSf6fChRKDuVWkn1EhxpShLKcEKbpcTd15zbkTXXg5sKC8",
  "key3": "LyNRUUSrgcNUswkMAeDP2EayCp6NEbPZRtrdn4fRWoQx4xUMCzHNtVZbsAK9Qjbh6mU7vZ6iNajDzSd9zTeUGdw",
  "key4": "XzoE2ixAot9TJRjh2y9ypHWV5Jq7KL3gqqbGR88rehvszhxHq9cToDiYSvdD256zUmgk7Gccb7nEqdGvy4CNavX",
  "key5": "44wwYu4PwULBTVCfM9LDsJ3sVYxeA4Qt4cBBuWku8gZoySSWjkyCWQZu7LioqSqsPBfjQ65eHGjQoKF7Xa1UWgDf",
  "key6": "v73MYymaFQoU58349THTr4G83S7bicTuXi92whzD6CjYwyQqFxtwdT53Dn17fH3t6jYX7LUq6ukLSSrZ6bE2kPF",
  "key7": "2ZpAmpHGFVgniZVn675zzWEZQMEwA8j2e5X9WNyopH8RAoXjW3uFpfvjcsxDp7YTp6J2Y4v1h932wkscvgsPob2L",
  "key8": "3CYS1oNVSkRui3SbXrV2WD5yEEjpjiZtAFiTSJbnwDDoG6JjrJavYtRx8ZYizZC8fyg9UEGDoPF4KgGXwToWTBYQ",
  "key9": "3EVTeKnQcUcZzD37jU4Y6GDf9pg62q8nYKhYF8H76BPGRGk12thTe9jbW2qUoa8i1AA5Zx9E398m7iXcH12pDbJj",
  "key10": "3WiQaMfTJwP9yMyCYtkn2iGnF1vBegvjK2ocfCeSpiPKJjMCUUKfukByZGrfJE6rDKVwGpgh2nVvECDyHN6CMr9e",
  "key11": "2WEuvpDwSftgMYY553qQQ622YXNMaKgnCjzdkVPcKzsw5ZT489kJdfV8ZbNmDdtpzEoamkMYgA7ds9EZE8CpVTt8",
  "key12": "3ddrU1eEAXxpYSVJkGr1G9BGXKDZhLnXEjsLf9328qoSehWzjYSSxUL6oqPY19TRDS8pkJAnKn4PremG27VXWU6H",
  "key13": "2ZrmWt887A86VpCyP5UNbsWSsYf8141PJ8wMyDfUAooFYWd5Pmcen4rPMBWxWKRUAUdaF7atRAUg3TpTvpp137uK",
  "key14": "3D9LknaZCF4x7SmSgQ65en6mpfGdxJpBGLK5uD5JW6X8NEzWvS83Ys51awXS39Sjh2re5vQhaz2aj5tgy8H6pMjD",
  "key15": "5qAfUKrYkmbFd4onmghCJV4pThjNSHF1rVW2qJz5tkTS1XMkf54BGA75xQzSoWWgNH7zkferuyEgrshfLTUYcUTj",
  "key16": "2GD2C5sdxCNHq42GssVs7jFtwnEvpAHgfWHddyrFfX1uQcE37KnQRMsusiwVeiRgocybEP22TGXFt4yodjomzU7K",
  "key17": "4U3BEFiku8hDahdRKDFZoQF3vsep64KVivm1Pbk7vnV2QHEU8ghyFSVqd8RJFXderue1xePxAGDnbN2bkg3uDkVD",
  "key18": "WLrSdo9gMoewBiH6NyDLwfLKv6V8TzEqDKxNSdN7teh3gSTfQiujDDPKggX3Mz5Vw5jmzkgD2eUWZ9qJirWmJVR",
  "key19": "J12c6XY6fdZdnDDHWGpZ8rGzToRG8L73DGppUwTVFXYpJBESzXAdwFKnyfhBPYuLkmoxNZWctBJweDSkZjyGxtJ",
  "key20": "5NXMXhcxMa8WofCNY1Uaz2JvevGnfM3bsvGsEVQtfxyBcWsoUZcGKLBnZAiv8QqCHNycdNUrLGZ7p81Ksm6DXEpv",
  "key21": "2euwvc8xpQRFYTLu5zpMMP2NqTXCtAvRJiTxi1RGGEb9epnrQHpVjQLJsVM2JnngeSZQxPmSaq55WCxtiPjEgcyS",
  "key22": "4bZK8RtbpcxMePBvCeHTATC33P4Qvcr5eYwy5nUy6k941NSCC19Dqwk4DbHwaULHNzgs5xKipMxW2gct6TBXnXso",
  "key23": "5s9HqgnVwryVXTVf4tHKBtJiL52McdFkfrKEST93L4Z4mSHke4Fv5ruP2KXSebVoDyPynXsK2v8cqnsKZCNW6azJ",
  "key24": "3VPCwpT91snNA69kUwsGSsEbAKScin5PtWYGMnuJpjhhWWUXxUWUGprVkDXHsfqe6xFQTWnm7H2qzhb88xcyACbL",
  "key25": "3ALf3UrgUYh8UQLqxoZcKZXGriG3EN6qkNiKTSKmTbhZKJpRevRMJatiNjeVZwoARh8E7UKFDHj2ZRbEWhS8zqka",
  "key26": "5oNri4AjGCo76j8cQ2CfEsXW7MfV2eXGdEc5kXTkRDrjGRSWSakFNGvudrGQpneTCXqmhqDfB2k1VcAFS8Fz2yT1",
  "key27": "4XAhKbgMBc1TfrqQXrEZnd5UJsGTCXUD2vY686qeCVeDnaXSQ18zJggVrZRshWAxapXCsSBnBh9uH1ufxteofAty",
  "key28": "5GWYkurdLmptDYnJFtuGditTUC8Z1UK1EZXQwaqvURkKSQ5pRuWQRmQjqC28PbBBmXDnKd8vzMfADKMQhTx5Wtpq",
  "key29": "2ed3Q1QaNVd39s1iU8G4AY6d4fv7DytnJ6pQCTygqzPoumo5QuH8Tv9CqtpyuwkZ4QQeaVmZXK1KfKzBbSdbFvCh",
  "key30": "3nDKaQmn8TasvbxCJoJZji7jws5rkc6EK5cHq6yjk2Q8HbbcJakfMBFWYxUm3dGWZf3cgMfrw4CrLw1AR2HrXhwT",
  "key31": "hFYGCjewcYmUKaevzz9YZWpxna7TtU9bkRjKXiJuawefhpZSBbHwp8HZQT5e1mKapvCsCp88sXgi5BW5C9Go1FR",
  "key32": "3jbTgBSX3p7iu8VUbpnXkE9fmGigDS65yVvqnUFiK57ASoaP2RD7vhw6An57G7DsBwBKdkJE49kKUqNh4dqjaJjw",
  "key33": "4VSgb3eFFw4GPdtMz6xRrHutaXsWRnWsNk5nVMm6xtsfZ3kv4XKY8oRMkLZkxDzfAThXRujN8c5bVVFXH6h2LFn2",
  "key34": "QW869YXadMMB9jA6iGScN4DkeFbZpbjqvAU3x7jQCUG6n4MLVwVcWDYCTNnofn2YEA7acEx3xYU21XH9iisUk39",
  "key35": "2rsPEWwXXt1W4ugvKMtukvpmRNare39oXNQggjqVhxxEAkXrveMdeiXnftJMXmwjnGVrhT4726wLiRhW4a3ieiNq",
  "key36": "pXz6EKHs2xPoNumdW18MWtKUBPVMoz3DuXbjvKPCzsz2cDePFtEwZa3gEUbKj7YTycQWpKuJ3UgDaBnMuZaohwc",
  "key37": "QvakN4n3mgrihW3tUv54DaCUJ93b2dPKXrQShN9zeL9UNAwvDBz5QJEQypCE3PtxdjsJXtPYHCfhTuaStQhRJmj",
  "key38": "2M33SFBMfXxKhC8eDLZNuAyXKdLFxcQKqn3rRpANey5156DDnyxBh7djFTYBLTiomg8dMoXQtaY87Q3ECRYxvpkv",
  "key39": "2qeDBRMM6duFjw7qE1tCTjghCgayJboSh3YpnGEn3mzvDFKXUQw9KP7EvnAVewJaBVTWNi6eGhyyffFsbwaLanz5",
  "key40": "3C1MQKgLVQtzkQK72qNe1Njw1VwFm4CJY4sWf9gCUKcjzqx4EDm9sPxwSjuacvKUAAtJ5WUrad3SBMbY3hnENNvy",
  "key41": "2jBZbbthFLWmjaExTvSD6q5Qm1kMBwCuxyxqCvMQBGn34yWdaSq1xfUwV63Uo4DMpUnwNEqjzVmTZZyHj1U3JAFH",
  "key42": "2uPLuGTdjRL5HZBsp5grpcmvdKNNSjqXn7tgTsZVwq3StaPHkmXNoiqzZ9UFB5ujt6wTrm2YjEqbYSB59fnoY4dR",
  "key43": "3U1VfbuxiSa3XcdKy6Pm2DBDFUKuBX9TE1Zr4xQCj7b42TaKawJmZEj3cFiwyUz1g7c2cniviqqLsRw8bTYbZwv7",
  "key44": "5SvfPoqfDFGr6UuRmEawc3yXeniRJS5x1qbFMnXcwC8E5uy7RFzuPu4Wg7JtjdPG8yG5RXdRJoTab1Lu7krrntV6",
  "key45": "3UU2iSvsNzjuhKWytFKaZdad8rQT9GWq256tycjYLxgrNBgqx6vG6TVoji9Ag8NvYYNXd5PxdtNwq75xXboKQ8gL",
  "key46": "5BVa74VywMRzcA6npR2iTYwTswzZYdgQnURSfed7ixCaxWX9Q7DixuCTnVwa9ogJsyCcQNoYk6ZBM23cJUkLg9P8",
  "key47": "4hLgqdn7zdrjwmxpVJg731nk5RC37C8vh6qDT7kHrXdFxzka5oEWuzdJeXDgaexA3sSNEeUeeE82sWLkjfjS7hh9"
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
