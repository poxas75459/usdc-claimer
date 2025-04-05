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
    "3DQBRoidqUKPEBAuXUaMqcrueSpg2DPDegCeZmcL5hhp3RF5dq2iX7wPdV3aKNovTF1XAiQNLC6qT38WxZP3SHj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKULnyc8GqmxBB8Yau14gy6oFoTVWLgzPDwMiMTmMnpnwHZVVa6i6xQpU7uyhREtxvMMuAhdwy4DwSvgLLJNK5j",
  "key1": "2vGYKg5anDtT88nYzZc7XLeiz8gPh2o4BbbH1bse9vZNBpbuk6tvXb2Q7kWYmhm2sZBMsD6Qims7JTWx9r5NYMK3",
  "key2": "2B7SoyCWnMsLdEJx5n6Np997KHwkA7SLVibkf2TGcbAs4EKoXsHRP3V3sJ7z3qh4mCkEnh2CqqJUKGYmDY8adjWF",
  "key3": "3uUXjFotgTisBSKgHuXM23wy7Asa1PLx8yTwcRNbHejZSFsqFbh4N9m7Ysg5dpfRJFa8e2UUFzez1rRB7RfLwyBF",
  "key4": "4do2X9QmfZ8yn33KpTWbmTFdMTSSoZu5gzJAQDBbAyFinCqCxqm2Eryw7jWnEYybQfFXhG85UwNir79muK3TJVrV",
  "key5": "67JNZJ1q9G6ppB41qHqZvmD8o3tLA17N22GWgaK79PjSpbuUspu7gigEupPWMYpyWxyxvZ3Cqk8eFU4itVTd7dWQ",
  "key6": "u3qXhXqusNvku3PrNASToBDHoyuZgaqKATeSgyK7x5XXTiZGaa8thy6gAbPpdaBTRiJsmgtY1KVXbfVL29z77mN",
  "key7": "5SYrc9rj6frViHU3W45o874g8MCBqxm3PQpDcF1nAosvYu367GDr6a3LSHZLBVygzhpoEBMbkNfVBpkmo711biWt",
  "key8": "3F8LEyA74zSPnkhf1xbuQUUE9TxPueFYgjkmyQKxLe3pwxrfKWmutpbMHm425LSGeRt8GT4z4QVebwFik5nJXV5c",
  "key9": "51LGN9KUi7jjjGaHJt3FTxcWjUBg67ZmfShzECSpDSyJNyaa2E1w5zn4EeaLSFmjdU4RbUHUN9evniTSGj1kR5mK",
  "key10": "YYT1eGJH9awJrDsNJhzajJT6xmdHmHHcDfQrWYZuKvrwUQ8X8L8DidKmxz5WwX1FxaDsXP6oe8zS15GCJRjDTjf",
  "key11": "522VCiiPKNFJkhzqiNQddZKe1jSSbd5oMjHND9R6G6A3fsNhxLBJNJdYvNe6zUh2uupqDsUim5UiNgG48QhL7WAD",
  "key12": "infnV9uNGdnu6UgiQbHPwt9ZUQQwSWDYsRrZ3rqsE2FnxmTLcVaKZg7AoQoeYHiquZfkQK6C8Xb8f8rZG2swHSm",
  "key13": "5myS5fjDj5uB6Xf8Zv7bHSwWW9dx72kttNKU1Qo4oAmFT6bMicke5f25EcSkznG4aDQA4ep7MQsM58VeSXW5fYWv",
  "key14": "2ZL6qFnDn2zjsqYXc97My9qDaj7YN1xVhEyhmcxFduKC4AL45GBq7eMzKyj55sL4d52ZZvJ8L9EVUA7sR2i7ELHF",
  "key15": "5w9AdJfTMV8MBNEwHnGsAmP9fnjvDuw2HzWg2YtmcNoBAisqg7jdMKzqRwfCRnLaM7sFcy2vAbpz8ck5zkBvshDg",
  "key16": "29Hxkvzuscd1adaZNRreGMffSgeUcF38iYw1mZs4CNkJ2CbSA63iEDzfzL1bKEFuVe6251yyBZAtuq8SS6oxSQEn",
  "key17": "3jHLqfR6kYT8gDXMU3p8Hoqf6oFv8o8oay2Ssx33zgRmaZHTmJEEJjicSAnsudfQ6q9tjWvsMBFHRRa5sGwThzV8",
  "key18": "4nD56UgxuVbBGSKQpvdqUHSZv6KtMYDY1dApFobVdAEvoC637HfEvGFBpXXMu2CeaTK5qde83L2AN1GKyd5xpHMh",
  "key19": "4TY97gNidEHi8kiKyNS6mDWhCauogj7Pw71gxSqtd3netCtcrZgmoafFY7iy2U4zAsjq1zJd9mTsinTWdxdMJg18",
  "key20": "4N16KgTfC8D4RSs3wGk9S7ryg2Nop9eSskCoXhsVeQi9vgZrTGXtvFFXqPNjCeZbSgyrG1nJHSzGH3REf3GcqiGt",
  "key21": "5kLxgdWBz5iREDWMk5qjEHusMLJZGYs6zLPWZF8TSgncYvvwf6NVfGMyKmubZoMTrc93u1nL4fvSxWEEpcqwVXJb",
  "key22": "3PbJ3aCm6oeGrtaxY6fabVkMiNrYYDpTmZ2apzcYx5rdvuV7NG5kwRunvxudjiLQaBzFANkt9YPpbX6psnBqwkUd",
  "key23": "4JxxotFEZ6wuu6miwAxjXgHrJ6MSuZRDdNPARWMdsmM8T54PqeVJ89q4BPgDhXDCL7UqNw7gw5DFqcxD4BcuzhKJ",
  "key24": "pv49aDLsn5cytgBy6ciUPoAd9KsvwiiAJLBA4dCmWcF4fUix4fbJx36qMFgmqK1USzvpwL1KsPbQpn4hGG2GmZg",
  "key25": "4ijn3tobB1AcTHqRQSi4S1bqboLSKZgqfsnfmoGtaqKDLkpsXGPpLvxWqkVdAri27i8guGD2qsRJ9PFkEe5wXzcx",
  "key26": "2N3SERrX6Fw3gAzPSk8mLCNBPotGXmqwedWP1ybB5Hh2Vcynmf1Bndidy26sQUWL3NWqKYMx5tTPyccD789dP9BR",
  "key27": "4VMzXSZqS7vm7k7mzEkvfYzTAEq4bp987cgJpgtUCTEGDL8zKXg9auMuGZKgetUx4yx3eD4nwDdcWeX3RwZLp6Ge",
  "key28": "58W2YcVg37UiJvXwCRyNdUxTJ5fALNsenk6YNnrED1sdZRPrmwmtDDaq5TpmtY8Re9KhBEHjte6jqgVsez2Vr52x",
  "key29": "522ZgDYwQV2xJbSDLKmjnbScHL23uzzkBD9fLiVcypkiorsBCy4bErfALiFGe2151iFxakkLnaS9dRj4foTypQWE",
  "key30": "3jZuydoouKX8vgbNnwRBJFvUp16gs9eHkwxKkJJmSuQZZrMQTguF2RPuHbrLKnHXa9t2dKVQ2keS5W23z8PTBANM",
  "key31": "gATQd9ipeFsu8RP1Gmp1wutCgt5zo5qkzRSmRjxeZ5Ay4GsVJKzFiu55DEuEuNLGCuXYnWmHwC9RZAfrxKBLfxr",
  "key32": "4hi1nwXPZet2h6aospikxrymcFxCiD9HjciZWuu4jGjs37tC7UwM8DRh9WoQiZE6qqc3BxC7F87yarTNUSGyWCi3",
  "key33": "36evvDTo2STJSs9sTSJ3afoU3wPhtkdfRbhAv3PuMLj2Yxn8aTQwRpFdQzRz3Gq8ucktgX53fP4eZ51ZZcAppYfM",
  "key34": "2gpRveeQFgDuetB19p5empnNNdV27z8AjHxYDmykakPJkGUWaTXY4FM44kxGcp7np26c1WJBp1bdDRujcYmHHNGP",
  "key35": "4HBsMMjJNthdYHJoyi2d1tDdKUVjG2QW9ojNCzacVhwq6SVpxRSHBPKD9HiAXw8jy8morWwGg99PVrmZcSMNMZsN",
  "key36": "4oGGHUJeMU6TmdCXZVUBZfyCSa6GbNNBr1outncoYVHneo9ke16L9HBrE98idmoCqqzMHXMZnDFZZUMGDmi9ZXKG",
  "key37": "4Ho5YWM4CUwj1ZsSxQTtDURNaRvmyhrzVX1XdTKe4LzJJGqtvEmLHf3YDnoN5cL94xuz61GwXCgNicAGL7N6yHcJ",
  "key38": "2q5NHrPymvqCfw2KM186832J4dX7H5JNLSB23hPdb7N8RpQzs5xbcMK7cWUkxszCHLAYY5m6nehdnQr1LbTEwBbU",
  "key39": "44DRHWznBY1NdLrLGNHTk9vqgXESpmCYpsJE96qvV9SuhhXoAe9MGthA58kccmmTQuRR2qck99EFHAHS8ajavDEd",
  "key40": "4FmasDoUfHyJYorz4d4RDKu9MNgkUNxVZsVni8EFa7xunBQWNLVcDytBB7Cookn6B74poPD6PKCchWFo87CG3Ft7"
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
