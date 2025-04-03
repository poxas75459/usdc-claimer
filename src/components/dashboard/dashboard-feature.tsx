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
    "4s1mQQHZ84hxY7BhfFSSdCM2k9zvdLZDY4mGEKN21qsvdhRJTsqYjwN92RjkjWMh1UGUoTo8MA864DZ85UZhKifp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63CiB46coLsGvF4EDzgkuAjeDnkaeGFNt5gF4jK1xwBJut6kEJtvNhxoDapQ8aKUahnRBnJRqCpoc65oykiMSiqV",
  "key1": "66iRtVsr8SFGYfA5727wHzFH1cvrVMnLkHna25CTZsfdVhBaZad6dsKYTLWbPBnNq3mmJQ6DHdfLohX18ZbqSxP7",
  "key2": "4DMFyvgS9JVDNLs9i5MrGGahmwJsLnPrxY7UU1scSddVPWcc8gtWMMYw8nJ6vTvqbR5V7im1bQKNbFmeAZxg6CsZ",
  "key3": "4Bfu7VnNY8gpXbARNkJp9VZpd7dfmZocgEpgZgHGTb1UeuKE8RBxccrp725yCLUHdaEhcVP9YZx8eT8wzuXWfZ8",
  "key4": "QUsp2WC8q1o2chYKnC2KvoQYKDLFyjaHerVm4jpn8P9V9fZ1Li7gXMDCZSkBWS6miDsBs89KutBSro89qYxEb4u",
  "key5": "36KK4Q2tEqFu6PjkGLoE2jkBnDXgWZDnky7RHgHWZwKehiimuaZ5yrRjo7RF7FgzyoAj9rn2zymEgdqu4zLYtTyi",
  "key6": "3q8q4AnpwSs27omXBzCoN6CMDzVGAU7cf5YgNta9DBMtb5doKt6ixG9dUdby7ZwPAMbaS7fRnBZrfFRyZThx6vxe",
  "key7": "5efPDfh3pjE4MTzJAE6jx4NvCgqyzX8KcffSHGW639QAvQzXBfPgJriR2B2TU9o8V7TXjqr9FsDpizy6jgrMLQE3",
  "key8": "3LkLaabcyLpynuCBjk7SVEbdnk7ZUWSGUGKGF6W97yEx8bRbKmP7uwoHbyR57pdZQ3xsHfqBoFGn6Ci9VWtJj2yJ",
  "key9": "5bxYAko2m12g8J2ye2ob2FuUarWj8PQ8yEgh9pf8LozhtvVc4ybCNxk7SfwM8jsTujbequEi2n2EJhcNHAr1DP12",
  "key10": "4zdpQEhLjfUGyPeEpUSd4zBKHwewfFvbmuzHabvoKqKpF8YGXrUUA3U58M6LyZK9tr9SwYUAKp3TVmtnMwKfQvks",
  "key11": "2vFSZuMUkJpG5twS8T3JEhmCLwfiHRgt1RTq4RgHEEwsPLdtHkCiFpH2xE6nHeyT6aRmFWsXptZNcq2skQNeVfJd",
  "key12": "SBMwABUmD5Udd1RXT4s2WchET6xAaQfrgvqRL9MDNWKb24dNpgDDMTG6FBAaSkZmCX5sJGZhuw9rRGYtMZUv6eE",
  "key13": "VT7bhzpCuiZ34nrnfuFMNZrPSawZRbcZmrr5hJ3P14VzmrPiZhwN3npivjWmEcsWcvvhfKkwXzXyZHz9XQTrKMw",
  "key14": "5BAFYBY3MNsSvHhcQyS1R3DzXELcmgBLTR59ngVTHG1Xh849ecvbN9t7MEpkWmA4S7ViBPDtBcVdSMGuDjW5eqJL",
  "key15": "3VjpdRd5chKXbdVVQPMEQPRs2EyGcsBriPMwqVNfQcVRhSkNDwcnkmfxo4hd9WYbVabTT6uyUsxvL2zCGbTJqLPv",
  "key16": "51e2APpwrEocg7VHmhpBARb7DrCTby4ib7f6M92JM7vRZL4EHkJ8fBd8UrF9QEJGm6Z8efLCtVMjo6e2rhJr1Dw",
  "key17": "jk9X5oz4VeqmcNu8iYsbrj4bBeUXMrdZf5ZM31KNZGfndJN95pvpsKB73urrxKgWLPzjoP6hYzuy3uWCNu7nJhe",
  "key18": "58eGWAyGupdKXNzuqUKHcjNWhciodXqYAYxgzrHf8eVraFenTn7PouK75U2upcFyaFgNztYEKDWgN6D6FxUHJHXf",
  "key19": "5eE6Rwomzrkq38xn7W1nMejw4LQdxmUSnUnk9uj7t74mNRt9JGC7PpQNJtZm1grmAfARsk9oURKCpruz9nNPwSUh",
  "key20": "48S4KZcBuMpBQHyT2i757FHufTSnyDiKyW4mabHFms3SkJCqtbJqes4Sh1XFRcW9kB3CWUHQQxk1UJEVXtM7nLzU",
  "key21": "3mHHC69S1PDSXy1oWpriDNWoKQudpezqFJXyVq12Gb27kgaQBfSRus6Gg795RcAxygpCzJ8prLP1fGQvttno2nMY",
  "key22": "3JrAHJtsQvj5nD7uBGsudVLJ3bbyUCPpxpnKxrokCD69R5x3uaDqazzL7zb2gmpHMUwW5PEDKmRxovcjGz2tfbTK",
  "key23": "592B1KMPJKsXpEHYw1ESmJgcBw3DnyWEks2pReK3ryYku7wH2xJppYfoxUM2v7pzmxm5KHa53Y5Pd4Tk94xmfDL5",
  "key24": "4o5Eei5NUwj2o4dQAEXYS9UTHmmk6eJKafJrJtcSHvZe8jzmuinUArMpxLiiZ2cBERRL6dpP2vHk1P9QmoUvuZCc",
  "key25": "4K4Er9ZHUKw6WWrorCVztYyeJ4BiLQqP6ktwCw6eG6bt2KBZtn9k3rehyYqYYqg2WwT4cKkrTLHULUCKr6VFHMpL",
  "key26": "213rnVuLkuMnK666J1BqBwQ2fx1N8nQ9bNLcLfyCSo7soNchCG5NEWx33H6ZwgtaY6qsevSoazgmWB5P6oCA9rLm",
  "key27": "2zaffumUGPXMWKvZ4rqXCqAeLuYVkKDW8dTSSyTte7su36EE6BjZFZcaPa4peTennmLgypoKfyBvo1myrj1v3prz",
  "key28": "37phTkgLDvnZ7UZHVbvX5SCErVhLuva4KuLre9BXw7YdBDKpWJmC35cWyTKu3e5sNBRs6LedxqoQeGePaERoa7dM",
  "key29": "5uPGx1WSQf2CfxH3h3sY9UmCUJeyAsQS4WqNwcmeq7dTCnzrPwcmgiAr3E38ffnDbYU3ZYUXFE9b36A7V6hjuJgi",
  "key30": "2caVgTxsgUpZXUxp9PhjLgQS76VVVLCKEte7MgLE6vMHWrPiSZ6Hs7HfwSbojZQapYHG35irtTK9vEBUUctEK4sr"
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
