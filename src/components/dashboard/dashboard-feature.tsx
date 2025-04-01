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
    "KMhCFX9hLoL1K3QnKABk8Y7iy1CrRrMGzPDGJoxiUTFHeWEukXoSUFiLUrtCjngXo9gXdWfyUJQKoH2t9ByFkoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grr5JZi1TPRnGGsFqKrmB5HQsneDK8Jh497wXanTsaUVJqKQzgK6wze7LnHw7BSoGZTYBpGQJDzRrwbFRtTJYmP",
  "key1": "2XwHrdzDWREAYqdRHHVYWxMTdSsdUQ8EXSqKKbHkNsqxNd1Xcs6ReNZgUiikHZFQnTd7nUXyPN2BX5P39Pn41bVA",
  "key2": "2jeNLSZY5nfXZXeQHNdqeU5sBwbDXJXySCvnWopktBqwBK7U36KnEexgraRRYVH47RSP7NyKihPJ4tfAhHXAPBfx",
  "key3": "5Wmpr847vUjS5eXHmR3719ESM8jxe7wRvkTGmLHMjg7n5E6fHiEvDqZSqWJ3xNYX7zPdt6vDHzLZJN5F3mhSCT8B",
  "key4": "4npRh4ixmXt81NWUp4EBLDfF58JvYLTvADgPr4bkhxvHetJuQDbzRp7tyktzhDW73koa6KkSRHR6SQSPXutaeRwQ",
  "key5": "5wdrS6MuDYtNqjawhQmbNbxmFifeQw6ij1oFwmAXT6KkJ5is8j3kG1kDWrSwNiN9YXNZvhPKeLtBxX2hjqnDZFai",
  "key6": "4DtB2ebkAj4X5ifsHf5PNwiT1KnaFgpFpGnqttamD2mUoxuF52GeRcDa9oAbUyrYvaiQb3oR86pjrNB3r2kwzpUw",
  "key7": "3kEYaBA852X3bAgtU3CHKGs54x5cHhH8wphXpkLJFCcBqxU2Ew3XkzhstxTugtJV129zm7rRsReYcKPsNpAXwBDj",
  "key8": "4gYRvQMdJKT4yWkfLsAzfnTCJ4ftzz6tET6pNwAQGjCvAVFoAESRmTEHjADEXr9QM4tQ64U4wNNdTTp5UtzGc2oJ",
  "key9": "3HUfxXs7bbdnFXhp7FyX6K1a7biLN9HQujPYg7iC9wgvTu8yb62izGD1mb4MEpeLuwBgENFLU9jFL19P72qrrEzz",
  "key10": "3MT2rvYJ2rd8cTmo98PqYiKcW9UHQjGFSXcQnTHxcLApA5m4NzV21UHSuHTePzQbj63KovzEzktFRYF85cxCaBAx",
  "key11": "4KN72o6wBSvnTJmEPAhXHwHoKqm6NvySxQyEdTzaHLc6uR2eZo2CQr53zrVAxP5jJkY1hJ9g4vfYCE9xaqP5qBcK",
  "key12": "AqZjjZbiRhQVXMyPQLAZ7929HT1tTYaptYPAsXNEZ6X7yjL22AyomDhbKcnYwxnGGftk87AVNbKxFQMqaC2HxS7",
  "key13": "3zV8oekWdqtR73peNLp4d87yTbJt4BXcKA4eVHYwPbhnkXhDp5KzwUnzyCMWDRAzCw8yBRHNNt41gswmtd5goVVq",
  "key14": "5oyZxsSZBvMwMrC8EgwnCQfsbm5GmiCkH54njkErDNaxdHDtJ8K5uXSgFnCCVfq53McoYzSW8Aro7QePKdmdyKjK",
  "key15": "2DNFd5ucAh3HT2y96NbNZW5jZEYD7X7okZY4T7SRCXd9Cvh8L9tZsHp1tpszfjYujb663zzKxdEdUHJfYkBipLnu",
  "key16": "3gxpFWPe71WmsjsiqFzbUrwb9QW489k5Yneni4fgo4KupHcTTAfLfyaSTNqDz1kR8pPJfykwZkz9xsQ4R1taTjQk",
  "key17": "2LBE1pGBxctCS5mHnhnHk5igQKNmwFVprRVrWFxLDGGY2UkbmxGDkisZBRpE74P6AsGonwwJZWgok8Ptpnp1KiZF",
  "key18": "3CMNuie6SxSqRV2zNpRijccSAXiU99YxxqTvaoNPnEEAfC6hbDamw3UqEU9mgVjpMb39z3opLn5XczWARxdk4KJp",
  "key19": "58xC7KDcSf84PezzmCM1ioCTK2GzdwiLTow5UJx3owXyYrrAxoYcqSfA17vxu1ftxeMhp3EzH7wBHu68Y9McoyUx",
  "key20": "4LqeHEdQxZciZRLvp5uBbuKhKmjF5yNn5y7wMWqY3zDainH5kZKYWy1yQVcxr2y4DU8JW9AuJnkefyf2PF4qnZzU",
  "key21": "3JrTpUjqUFFj1sDEdYz73BW11LBsuhH3z5WkXstnGckKM4t2QSTx4a3T262ymnmyC4cfCTNJfggYcfxKCkFrXEpF",
  "key22": "3wHZXscgSqRsZNxjpthN6eYrWNy9Bf75rt8sGT2Fh6bH5iYLVDMskxH8dzLWkxQmn1AQJfh1P5ZHvHAxd91axq2g",
  "key23": "5HjEWhpi72ayAUVyhNRzafF5vfGfARH53w7vmAHCKkyRQM2XiPpGh7YtrXQ13i3rXQVet5pSrAwcf4vUPi2yrUtm",
  "key24": "2XrvWQrp8Sg7eoXckwwQf2MvyMTNka2avbmLkHMHdLBgV4Jqy43CoSkqUUQkBYfPQCGrSKse9FNApmMKdwDdSUUA",
  "key25": "2sZy9LjevgWEPVkv2ir8U6nNsYMYzovtjAtfT783MyK9Kn9BBUMmsA2qQEvvzyZ1xd3UA9daYJAKKqvYMrk2mvxF",
  "key26": "svovWo8tYCQBRB56tHA2YiuYNAt48GoUgvg255ubCLTS71NB3cyfMoEdxBzEQ9RhKH4t7Ju35csBUC6S4fz44de",
  "key27": "3BdqmNr7phrmF8j9mwBDdcwJ6PQsZ4KL1hQPQsiJN27FdTpwVA4Mn7M2XYXTz8vieSTTeoh2JRntWXhj6Gquv2Tv",
  "key28": "ajvHqF2yEmzfw47H7AVsNk8pBNucPkp9FxPFnJEn82pk4JivceyE4e4kbPuJ3qMfrE5xXnhSuoqVoGQYwozG2ek",
  "key29": "2ABW8iCxjzoak6jmLvGB84FCs2Nu4kUZuoWpKagmZfPCGBK5FqLZQBhRE9CF1bHDUN8S4EdyG8MNyNqGp79coctJ",
  "key30": "39N6E21QGW6YtVCoW7pSAKrvJzQpVwNW93f4xwjX3rsQARYTVZBT833F78oT7egHSLaPB2ioTpf24g2Dky8GLURN",
  "key31": "3GWyJyWDguUJC2rwPV1sTEog9tyXEA3mVheE7icejAQr3EiizuxN5x6YySWviMGiX4n5VeL86PKwmSvjRuhEXcdK",
  "key32": "55ej65bJrNAA3wBBJKpMJHHQ9PWLyefnNmPXwQzvzUr5yEUQCda7mM9T6nvmhJSXn3U1EfhYjBRGL6S8BA5t34kH",
  "key33": "5sqiL7UoDobWyeyxXbReRyfvQoAMjGAeFBoYMa16wJf6AnHQWFCgT6WPGYP21DbFLRMjX4G27k7dZprAchyNEA6K",
  "key34": "2f4eRjZDer5khnz9uWQqLbtP5en3q8EPJmKPjpAyaU1H2iaMhCapAijYoq9iihDyD6DUeAzuaxwGHajAmgmY8sU4",
  "key35": "3rxiM5Jqrd22cDg2aYshB3yLKrZ81AFhora3z3mEpsrADcPUDpgqEVjgKEWHxoZG2d6QT93nCe7LQm6VoZCk198x",
  "key36": "2MrZJBbFfENVWdxrGRE9cmUoCcraWH473LwMnot5pQvZeTiFZ5HkLVbM5vVPDQQSfnZ6Lxe9DQ51XDq2UAWFSVXQ",
  "key37": "3N8sBjTsxK8783v4UGomGJynXPaTaBdRu8YpAigSma3M9K7XtGFQxju8jdu5h7VGPY2KATufCMSBGvhKyTVeqVdN",
  "key38": "ZuEfzzuXuHwMJFycrLFSBqGWYpBviJCR1JfCDnWhzS7txsVhRcoTDShsvGTuMZisgDuQfvxdADHCcVUcrqPaw35",
  "key39": "3wvTbJtSo5WtWEpn7D3xHTPzT992vEMJntcnein1PjpqXiGoeCcb6kGVFkvXmyNETRra1mBct5yuqYHmSL7bP24J"
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
