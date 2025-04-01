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
    "3e7mEqsoFJG257HGZJkgDvXXUK9k2MapYDUQ1mEbYQFvSfw1DthkuWJXZu5Y2gdNjv9Be9JXQQbe39PfdWxfhTxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vQ3ZsKyzmaDcWBB65ghGYFHUmYYtbpvsvVQPvVg8y5vHdG8Vxsf6prgnxwAfzocuFhTxT9HHsc2jUi2tPtpPvAs",
  "key1": "33wpfMp9PKEqAWtfaDZBnBgSjzYtX1rNxo9PPmJ4CQMvwR51XcT6RAAxPeiRXYTrhfq96zZ3PoqMVRrj57mMHmtS",
  "key2": "5WYoppTLm7crJueFBvKaSgctXVsDfjdCsMaPzLGcfNXEyzaD7sa7x46wbLubRvqvyPVaHndcfh8mnDLdTd7bbo7C",
  "key3": "2eLge5ghp4jywwHHoH9sQ8XXLqPTs7ZRNcPsKpvdxf5fztqCVvm4RFw7v7j61CUMcXtptHtEAzv1ra25NEW9cAva",
  "key4": "nQWHbbSJMA6w1tvfyRPhxaTBB74xYKhApnFDgT4tbzFxajMhVBEymDnuy8wQ7neNMrbQJSjRppiSM3WJRgiNyA9",
  "key5": "4W271K6BUCbGz6RibUu6MKJXh3HHAw3a98kJt1RWVGqTR4Ui5wKfagBvxinF2wHC7yCMSWvFfG1BYD53LNcegXQw",
  "key6": "5MBMbF32afeue9pHaBpKCUZy6UDwDphSMyNns6mcAHtB2AQpMLvEumwqmstNS3F8GtfMMskFichphwGRY5Qz625c",
  "key7": "4yGBVLNwcdwF9P5gRiN1cpZi6c6RgC9kkTBshZ7za3hBZUnrZT3rczYQKTR8nB1dW9NPrgsqo8fTZTUHMGbZ9cEv",
  "key8": "rrSt67keXARCihtPVRFyoWCXgZPgHF7ZxZLMjfhyP8ZrxnpB7pmHeTHiQDmaDKxbisBGpmhuRorqdR5TwGGgw8M",
  "key9": "LLTXSJ4RsLyBumMZHni29BqQEsuLY5XQypQAnCBN3m6nxhhg2eHaCdVuhCBexGtWVJDr56Z9j6i7U5RC3v1S46m",
  "key10": "4i5qius2th3aA8LhGMaBL4LEyLBsKFQEMCvhm9gWiHt6yYzUCqSBRwYDcBd3Qte12Rn1dFuvN8haCDd11HsT36P2",
  "key11": "4nC6m8mdH342m6g5vFLeiDutvro1urWMRctGzhvE62UNg4q2abJFLd9sFqc2CALZip1Z4mwrWRUjoM6wxgWE4dX5",
  "key12": "UEnLqLk6vfK7VQiivYt2CndNke35KssEqBZ6mz7toxwEHKBvCW9Cr8TB24ZX7tCrtzNU3jys5Ap8KiwsqUeE13Z",
  "key13": "4yurTjFN4FyQkTWvVbG5sEnkESQsBfn5fa8NUXCEK1QJ6vdegUncQw9tsWiQ3iubE6vNp2TLv8Lwpw9LQWk7r8vT",
  "key14": "2fwSSCsQVZUYMSB6X4j8zCJFtRbS6mDMuWxM5tXB6efygGw6wov5dT2sdPiqBwhdaQTegiSSwfwwXRr4A6KBZbud",
  "key15": "4e1NvNru2cSeL6zxNWtRFbg5AqTA2sSa2VVo85eRHCFUXRrQ2bgXmiA6HWn4YukYCRNjVHkJAtNTGEhuKBDfwojH",
  "key16": "r7Qg17zX38YMzQfAVHNkUeGkBGqk8ESw37UjgfjGuX6FfP93fXUqofCHtihoPPNwmtqnY8Jx8Ek4xJr7BcVzKMu",
  "key17": "4HU5QxASnf1X3M6JmXMduxduaWdvuzr9T35JaVoZEozZxaEnxz8d9gCPiXb615nZP5AXFivg4eMd8MjLLtkpRbFk",
  "key18": "4sFgQWY7KxNGC8h9TUQpz8bXRaAZ7LT6CTrZBZ7Toe93mLYLkMqDamWZNr7oFkf53zFaxSgkMkCx7D8wPqbFyVcW",
  "key19": "2g4AXCqE8nD7yPyQo2doUFrTfWptWE9jH83vZPsHz13Gk41JsUx53BJKyH2iUmaGNZTJwvf6FyKRAam6EFUmgNCp",
  "key20": "4brvAB2jXahe8KsXnKYS2Zxn9YzN7t8oSeDnpFUG3jRGUmYSqud72iMjgPhoSXMbxxeH7NJmg6J8YL2RPyzBShiP",
  "key21": "4AmLwUZZmGrALyTaLvF1qBxZZRLobSMZubMoYeZUnYyRRb1SQbJ2ZFh8p3K7m2iAsh91wxDj8zS4Q3dvBxKBsaSf",
  "key22": "3zVHNDuPVQ4HNM8TGdKCPvT2fum7JJEivnaoiwbEVqGF8n5v5ZQfouynsg4aXqfVMv1zhDykMH2C8hqt1ibpBvaY",
  "key23": "5dY1XXZ3L8mtRHZZ9ogNwNWyGam4qsaGNUhjhKmx1dn1uHihuVffgXRS3Q74XYssjZR3pcKthX1CabWqBWcA4E4Z",
  "key24": "4CYTDFJGrcAzRT7XfDRX38R5LCJftEmRmnE2yuL8XxGQY8qyF3qroyEtaUY8wxubsjvq8XQvAs5CFcMmL54NLUE6",
  "key25": "i4vXfS53iCqFVqymAKv9aQUfqmFhdzjdoBVMyqhRBvKYkeiej5sX7LdNw2Pz1RvYPmH5xQ1A4RARhkw8V97quT1",
  "key26": "67YK5oB8yQTWRS7MHpDDuURkSXeidbRQvYKcNZn7Mnb5ySS2SGcHeCT18z5wzYfJVVmKz2YnVSyFR6mtGipgThXD",
  "key27": "5rPYVjZJp86CG7wEoRyaDVLvm5Rjz6qe1A7FCK2gsxKAHP9X2nyozpMrPRgszVdL4CUEzvX8hM2qyw7xyKzhBLan",
  "key28": "3cazmJ3WSjuUgJrXUTtEwvHPEabPkRwsRzDrn6s3zhrLs1UMhke7Hg8AhvavXQXAJCuqGjhU57LLSMn7iVm4ykFF",
  "key29": "pZEUSYWJNrYnB4PTzFhWURjh2pQyVn1DE6uxdXfZF5JsMdC7SqWSFG5DaCQqdzF6ABy6QXq6VmXXVnQKY8tDYxP",
  "key30": "4qARGivBdFGLDfTrmFJkunq8t6UstapjVxrLnyhUKBPiRjq7SFveq48ceR7BAZS9MAEJuQRjJvbLx1xdFWJnqVXh"
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
