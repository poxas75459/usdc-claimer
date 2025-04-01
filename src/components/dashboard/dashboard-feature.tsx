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
    "4w4tvjNSr27pQ35AYXpWDXsY39Q68oVwtyR8gW6Y1TYWT2G64DVU8meZidCrRzsdfRZbdzEowXEio9vcrerMtUKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HgYbLU41gCp5Sgam9ghfFENKdXJgquYmVLn6LbTvFLaeSj3gFj8WA42xbyUusEhqhvCGTaqTb8LGgCJArciZUfL",
  "key1": "U3iZeq4omK7RrSnyy64AYki8kkoemvAC3peQyeUKoj4oKrHyLHRCVnh6eWu71JF9LDcyvd53bJpgmx9D4acdrmx",
  "key2": "3uQASgVEfpoEAmxkvZsExGzhWhRQRzUK4atsoEKi8PtUqXxGC2kjuXE2eRSKXEy4kbLUpFeVMgyeGiJMGVyrRdMd",
  "key3": "5cSGzLAKPbaY8EGbqASQxk45kHrzvnRbYg6xdGFwFRZe2ACLnLEStqTdc1NY6LGfWCHJKPB4CnZ1UNn2qmXagt6U",
  "key4": "4G1cZbjWgDA2uGtCJ6enrSZ2uAoLNkgDZS5W16HxagnEmt6eJ31jQzuoo6CC3W1oHzDj5QuQqk6rx9SDq8FpUYnD",
  "key5": "37rMSDD8UkEi4dPGd1XHA2SyQdkKRS7ubNTYTjXKmudEpf7pH87A2uRhDeEhYxCsAMDrxDWWbhYc6CHJtrBTzM2n",
  "key6": "5E7mWo4LjcP17yYUZq3Td3KtxsTyBSWsk1MYLLiBnzkvMZwkL7MzGd4fj5UJnWRK1pzwVhp9eQ9aL77RWNHLRFG7",
  "key7": "4ovY3yChyvB9gE4qFtAtdvUpR368Hv5oN4H7giJB7MNVXnkspYnFyfvAfpiAQ7UBSy5Kofy9RS5ckJjFmKZhKXum",
  "key8": "33VWxyK6LVgzmZ5Ut413bsAvWuDsVPpoB8VVF1y11Y3Yd7AY47xxwV7vUaLPxZ17huhpyhG6fR7TGSA8zj1vP7op",
  "key9": "VcB8nyuTDqtzyLL1RSDEwBN9YP9iLGLrMkrSQsQNPnoexv6xyF1QC7vaFvNLyQnKqTKUC4kkWTNirzhyY3Kg2qx",
  "key10": "tVr1ubC2KqwQYSanvdQ33bCqBagtAVyCG138JTNT3XZRzVyhzTgnFVTyadcMq3VBVnj7Msv63XeNhZZ58e9jwjc",
  "key11": "A7cMF6dppu2SSq2YeH5ipFfkGiu3eYG32vjs1PpzyD82RpHiqqEri6a4LaQugiMHngKocS1Y6Hv3GfJjqTGQc8E",
  "key12": "58UcNFCLPe3zAfb6VmeEizVsfNMyFYEqEvGogJpVk55Gr7gUH1ZqKPbKtoRzNXL94h8VRadoorQUiULpDG1PEeL2",
  "key13": "WZmxyqu5VXns6R7LDtodxA3SHCndmJ5TheDh3t1rCtBwqHWYaAhPvUKSavQ1jfbEw2ANfvEUFfwAxRd2FYVDHbN",
  "key14": "3bUtGc7GfVvCHmJN8Xnp7ac5QsqBUxta65q25RjCFa2LkQ6dzwtsg3QpcxZn7T6YZ2nasHfvshSZ8aEwHr6Xn6go",
  "key15": "5pWvwVnze49y8T1t1SzMc1v4tgD9BWPcUeXrnkA1rbpETwjbBycZ4homBwnJAeELwv9vTGbzWySuf7AMZRQv96LG",
  "key16": "5gmdsNR1Sx1hoNd7zXLT2RioHd6QJVsaAi4jpNeTabK17ZdjakPh3vTUGEmnUzigXMUWiNqJXfoNcR5G1mntqp3q",
  "key17": "3GdEQG9wMzHqLUGh2ytTUExXm5TUsLjdgRBvEvC4PS82BEVfwAgQWChZT74SVcwSiUCZmajVTipZWzqYaWwfa8Tj",
  "key18": "untbLaQayfYY7tmGXcYKuZqG9vyb3q33625mhrGs4rKjt28KbZUDnzQuSUgGRcNQobK8omD8VCxZhLkZnJBLRpr",
  "key19": "2ZNpnfDBTpEGrNvkJqvgEksv8FXE98VawszbSN1CFGdd4Gg5Utj9zwDY6Nz3kF9rZ5FJkXnzso9bgpdmB4a4J7QN",
  "key20": "2m9wcFqgHtEuThs8nbxFSTXgtbM7KCbQuP9b4xaKyhTi6fXjSm9KG8vBUfzGZsjPMynHSaJcKc5Q181Ct77KqA86",
  "key21": "4e2jNMiqUT9GhHTpKqf84pa5Rw37di1qo3aevxgu4fzxEqfpKXaZqF1dUKZxqNkJpBm857LEmTY5Jy9fyLnM33ph",
  "key22": "5jcQpEGzVJu9KfRAAang5LzNqZmpn56qWYZRKmmpfYki1sstDjXqPbNmjYbE4cnLDUYXJwmKUXQMHtM1TYqFrk1V",
  "key23": "3RuFMDVFa6VqJB8MPgAS7Q3JatCBXntGtUA7Lu9ecqUhmMEPxoQPCm9BQFUJaJXiiydyZgJAWmrHV7wEJPBvHo6z",
  "key24": "3jwb9azroT2acsrQBhmb3dTJURLYMUxgp6YFrYWPRzHbZ3JXEJBjrsvVpA16LSmRRa9gZ4q3PZGWFiYuwAK6togp",
  "key25": "2hC8ekFRk6MsXv1Gwby1WSC3ZpFV6pnS74h7j8sDja6sS1ooxwQ2QPfGHp1tTgRYXn8ekzpwVvkZVaUyF3pdYVUz",
  "key26": "34AUe29i1aNstkq8obH1cX2Gb3sYPg1BYn7hXhJ4zjNB6pCY4f35umryL3i1AJtGsfYRczrEQWBvVJopVw77WwQm",
  "key27": "5mFbbgiVbEz59atkc6wR2h7Hd7DX5Aq4vYZKfyXDB1RhfZaYtAaa3uEZWFxVsssFh9ZdyS2JuSbbhNEYXcxXaLxG"
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
