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
    "3iocNQ8yWg1ygybGcvvPchiyx4dmdNPk9giGwG4KfcqnGwPCakT8FPBVtd4HQDCY8zWKFLfE5JznkPwwwA6VK7tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vstHyu8TkQrdZwuKjzqur5RZvF77vo8XZUQSuAcrct8B5HQZVAoMps7vTzxxyBGNVnPKXBs6W6ud2qie26S1v4g",
  "key1": "3xy8XYr3wjBs5XnuyQMWPGqaiRYDH6BJM4MdE6FMwdgJswWL2ZsXeu9Duaq8tyoCHm2pP2yfTY4W1aU8Z66XFayV",
  "key2": "1fTGsAHy7gPFg8jPqCQKp6urHohwtstK4man6t9t5qC6Ejzr3ZVsDkz7gdg8BnZgREPpEfMX7U8pHtWR5igDPng",
  "key3": "2sDtkq2vhH38KRTQ2SuUX7Kv5cYwhMAzG9c8GWzsuF3f1ZxC9FyWbSgxcvacCnHTLWLvMmE7ZxKYpdkUyQ5rf2BE",
  "key4": "2W1FG8dhdUw59dXmPPsF11ukfwnh3BoARguwU26uv2mXecjUh3Er4B6jFN8pgyH2GCRG9nRPohGdaFRA2aifPzZT",
  "key5": "2aHZ1UFRM4WyQcsVDBQDCEFCrYFL5BMQSfTSAooFJYUPGtwAAnrS4hJCZisE3byyWfP2tVm3TYQZitvwex3Ndgmo",
  "key6": "3LwkCgxJZa3hz57jYKxYonk56nXcrzajbBMBGEYRvhy57mUqnBw5EmQ6Xy6Xz7GsvdGXgv7uhqjPB7X3KcqksbDZ",
  "key7": "W3hpCexgndE5TiJJaNaKovfoPmPfq9wBdPdZ3TVmL3wCj3ZxRncqcRWBhe3Gtm1Xvyoh9fvK8XGj5g3fLNnNZm1",
  "key8": "5hKXjTVUm8ttKDvL6TZsNgGKLBJgrh5W18sfdWYnhKuXMGm5EYSDT22sWqL7brmmrN6kq3DziBgcBBmbWEgmuSCh",
  "key9": "9M6j6QxF6SXyXLN8Adn2H8gymcFQQCs8zYRSx2Aafijsi2DaxEuK8KQ5msJxe63Tu8PFReq9YQA8Ki6n2h9QPFo",
  "key10": "3KErn8VHYzP6McRNepJH8tRmkoExqCFUiTQfJg6iz8vF1VPJwxTgV23jdpmvk3hkFFESn8S7rc8JZDAaqrMZnRey",
  "key11": "4WVCGaXBMVL1XzS97g66SDon5DjHsdAZm49twxAK4fu9JG2pQRWJ6artdejhpsqyAUY59aw9jsUXMjTkBuPbU1uq",
  "key12": "5KFmdp3bEzwveR4h4C9pkDQNW8AXNgjRWdBFqGeRBhS95CDHbHFXqxSdgv3LgfT43SMH72LW96kZF8uEdpxr1twL",
  "key13": "3bab6CsgL3h78j93gvMKTjtr5fEw3xSpqm1444xXTH3mWt1vDUmjaksxpCjFxudLFZr7AgP9zcguWnBvieDeBMLM",
  "key14": "5tURxZvWNEomD9cNNr1ssmV3orCMcQ4bmziYQ1HkLneEKx495FomRoDbRyG1oUobqfVbane2pAqqQc2xDqcGgEMZ",
  "key15": "4TEXVVwi4diqveAGbK7oNoqND8EUzBipmd4ex9K2SCcFvFMnUD8WaiUDNSLhU1tY7iah2KiffwnsfY37L2M8McF4",
  "key16": "3FaRgS8v2B419ye2BAZTe8vmre65U2uq2tEbbxtVskqwR3kveBaWYJXv7eA8yoZn17iWkZYGDb3G8FWKUMRv2uzN",
  "key17": "45hgir2ra9Wfcer1DJMHDt4HNrfVANiv3c3hZGFcc859kDZzmsKnTASxT2bGXDFQyEoBmWQoELVqDEmoZuNRdFwJ",
  "key18": "3GHKncgucsh2kdFH5SnUXeVxJqL1x86RF4ZcYCF3EQsVuQHoF2wAMMPnsb5mmLb2svvg59KzycE6aJGHVBa6a9YD",
  "key19": "2zSxAfm7DojLxhBv5HcQYwfaN9m1bantm33wEfG8aXn38fJfaCLGetF555Jh8gjoApVmXiE6fGpHAKCVQ6P9kGLk",
  "key20": "4MKqMp5pyqfonqtLwyhhsAdGyqSEgJ9RRf3LeuojG2qk8MQpNWU8jutNbUbKcDJZBzX6RzpR3XA5xZnA3mo24Gey",
  "key21": "2S3mCSjJ4r1yFiQyFvg1HYrCgfFUz3oN9JrGCvx1SeEnThPdLuqtEVzBKyvpkfXjopMdEJbNM9kCqoYi1FJ9VkKB",
  "key22": "2cDKzPXPUaWty3zJwumtrYh22pHtDvjQxPcezKACsAAmshK63x6c6cP5hvnJEk5TUX2C3L2DoDAfE7PSRgaYNYUw",
  "key23": "5jbZokZP5bcn96SuR2uNWUqWFPWzTJrPnAdZB3x8foA6bpm7PDBDAkHRdWV6eoZRMZXuseUS1U6zQzfAcX1qwVi2",
  "key24": "4qBSi1VfhCuuDWAbjHrCnaydxt1mJTYGTURZADPvkykxeTjUkef7vMaFr4buPgntic11sW67rhtYAGH68zFkmGvN",
  "key25": "2W1AsREukfnjy5dgLFd6Z79yYxYGXitipLjPzQ7SNuS8iD9mjTg8Nxp85xRjRzz4DPyo3h6S3uYTk6C8JYnu4A7p",
  "key26": "a9ijocN89xSXKjEZnTv6iQFn6vKV7Zj6NEZ3raY4EufrCNE1nEWW4tjBwt2iYCNgNFGTsZHybr3mUonsNn9fb7g",
  "key27": "4eC9r28gtVnWK64Sis3ijH9u2Twxz8YGxNUCRwx1mvbq5owEqTwYrH6VbvmsSirgDQZTyQKRwrFmNLAnEey532Lr",
  "key28": "5ju8K4T9arKbviHxFowuozczmfbGaqMcdvU9uSjnMAYfixnsXmbtLnfXtAhy99Nsg1ZrfRRne6uhgtkpPcQYhrtK",
  "key29": "32qPJWNFazm1Foh76yKRd8Asuqx3ew7REvKAPrqSSYBFz5ns2BqSMoKPQhpLMmkDsPPp3sz35UQFH7GCjUTLS5ug",
  "key30": "XfTWvGYxxT3s9XaCjHTUwAaFvjq6BtVqKJv4o8w97X46A3W87gmN6QNtHrBiBZ1mWZCkt3Y85L8fwXPAXSCt19u",
  "key31": "4fkychxCJsWM79jmziqisqpfZBEsgQR7zbUmhSMFc8eeFJr6hTVgF8iepTrmZy3ir6Mug7saj5qsi4pt3QPA47QZ",
  "key32": "4GFbYk8gXacuv9sxdGNFfX1FAUEmy3BJvCw6PX5UxUiMz41SFuisMSpdzjxuf9U8M4dXp8J54DKm2MrdukwgaETP",
  "key33": "3qaSu3h2uMvyYNfZJtC3hv2bixrvz6aHW188E5NUaqHbrQzLUfiRmPZbWYJzqtYzNzhpHLdVoqVGk88zYsn7uomm",
  "key34": "3n12w2eXtHyPFfzRhScXTkjikGVC6GCp7mWTYsKznw842TMBAFsEqjXCCGaDFt2bDLuznhX2UdoycmygfqnTEzUz",
  "key35": "entT8R6BpnJR1EqbqDqUfQ9fXSrshzNnZqTdqiJDTtJBhhUTFrQA5Wr22KwSthJkQWKVpFQNJs4aQyCbfi5CrR1",
  "key36": "3Fq9Lss6SYvvu3y3HsoeLwxWE3Wab7FzFPdtoyoWWJze2E1PtP13ygxxxV7bLCWzEzxTNkJ1WDZPw4rNy6bnzmPe",
  "key37": "3xZt77EVcxN1zdrpom3k33EwwhE17idmc2xY2CdXSGXSeKswWb8toHreVorxmfzGhB9u1sTBRs3YFQXVE6b1779h",
  "key38": "2eWTgKNVVj4UwJWo77tDd8Vjj12b3jYZyTTKXwtuxpPziKky2hHjMKv64TWyy2QWV3LZPfLWAL6pSkxtj2tKLWfN",
  "key39": "zryfQjdoYXF6hUf2CLSy8w2qFbzgxT7g1zD4YqeSaxqdYbo5YUpc9tcBMrvyZbSuktpVtMPbHEGtC1GyJ1y9999",
  "key40": "5M3GWBhvG8w4sdVEtL53jUpLspQfqvKF1Xa13V1C6Bxrgqg4EXFqaEYVXgqxugSV5xk7GdB9pfBxZdEPTjiitZCn",
  "key41": "2gKFvu1s4ivVdcNYc1cAgMXaJZ7nEpETJcK5xTbmPV1PtnStz74F9doGatgM3rfeoryV4oa6xT8WeUD6C3Pgpq8W",
  "key42": "F5rYqSYrxwN8Jw1p7uujyjY4B4gFmPPNAfDCoCoNrm9HUBjkiM8HBSMwLeS2HEaC7tq6WHhK4pYGf3fi4oUE66z"
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
