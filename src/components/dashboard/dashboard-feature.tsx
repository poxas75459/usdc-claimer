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
    "9svhG4YngwqVC25kUc6Ft5KXMwt8wRUZgqVeGu8Syg1GbghnFb8NmoNNpFbqSFDR5SPSD3sdqJ7jyaTz4wZy2GD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53QsSDxQcGyg5gxt87dKurm7GEzx9B5gDpmsJWm876tDaxBprrC8aapVB3Bw4WrtXxWqtYryJG2FaVXrCFtVQAHT",
  "key1": "3utHVGwTERPsBayqRbsaho6G4FNhMVLT9W7xyb1NGsPDYRvYBiCya4kxwAv9szr2h2nz4w27fHv2FoeqhhEFxSvi",
  "key2": "4rtUyBZXMCxRvem8xSiVvywWekPLpHrzt5D2yXcGWGkDx3awJhhiiREN16UvCZryxipfUKXfcJiHP5J4ocK83yRP",
  "key3": "4fb8EcJJ4n6dgZEmFyc5wDfWHg7PwsNWe7TcTtjzw6f72zybahFDGaTu57S9KE3NSdCv1gjFTpStp5yijX9PyDnd",
  "key4": "5SAfH8GG1XcEtqDRyZKmg5EWxzgUskS9LtShDS6GMw75EfXUzKNLAnua3HJqNCfjHA8BsEAzhEEeiqJZkv1VjM58",
  "key5": "4tbCcdp9geAX3LZSEpQEisRBoA8vVgBK3FQ5WKg2hVLhyi3mUe5kbA6yDCoKFmE6PcQZeoPUfRibGSU8ukZcL83f",
  "key6": "418Zx834Ci8oXTcCuaP9TEnq7pSvKS5QyJomycbgVYhsuiaGnNFP5zVkGrxVuyEDZ7AV6A5yh2KLxZcaZawuhfTB",
  "key7": "4muw38YUiTR3wmMzg8gcQD43GDXZujzwwWh44Qhoha461DuEbVEpgLQB5Cm3EiFwq9YL8XHAY6JJcSGQS49mgY2",
  "key8": "5M7H1Pd7VH4WcK21vrwqiqufHrGZJqXaSiPAQnQTFwcEbYt2nnzCcj9GiBurWWSXJ2evhZ8fTp3Ebsm5A5NztqZA",
  "key9": "51dpWrXb3JecEAh3muTLnVwgQi9n3BDpvrVVmDcwEtYBqejZSRWZgN7jmRTwUC8cpvBrEEZGmG7LjcAMX9NUj5vT",
  "key10": "3BRnecxCveqpyiKJBnim9hV5fu3fmkcXW35iL5cN9mtdnYFyKBjD7Yz5xDyYnMpuf7iYBMHt8NL68QoQuq6stJtR",
  "key11": "2D4KVUSKjjG3svXdsmam7WPQ4kf1fXyoeKxhJzsz7sfbocaw2y4FJZgfBmAYbGmz7sMd8jiZr1dSJfowmqxMGhY3",
  "key12": "3gNYRya3Ksu5chCLJ3Mbd9e6YELgqUMzPVVaHpkMBXxNdF6eFqhrZqtAczYsWTvXo557b3LxyY5s856UYBVMDQx6",
  "key13": "5fJqt1gwf9DFP5F26i82KTCkEuMF6BbDAEzp4fXPqQGXkN6D9RDatyDCJzPxBtLcw1u6tmpBGT2KFkjsf5ttdYQY",
  "key14": "3UNngxieRFRiUPdgeyr12PU18k4HB3xrHt1P29H4uT94toKejraWiHfiA23sSTkvD8G5cyXWKLT2Kdb2eNBzSVhh",
  "key15": "4RyJGD8gdGRbDBNAvMvK23UyLct9d9rfzvjxBcr2LsVgaUjMJntH6nffzTGMrV9rS9zyrqBqE97aeKoFrh4v9nzt",
  "key16": "jAvbbFqgsmyuBcSHpEXGGm38R8gHAMRyNXYPaUHXzCjcNLtWJQFXbjS187E6WpC1PsvHCTaQewrvVFyKGweKGui",
  "key17": "4yXoSvu6HPyb8GhX8vKMuoU19jPUQBjM8L5kfjioBQvZyjEo4gg3ikX1GnMCBrevcwF8whrStMjwSpG7fU3xKkhr",
  "key18": "2G8b6WeKRjD6U6WxtB4rJhsTuWhNj14zR67amuoLf7AS24dkEyqUyj5kWNKZrrFQHuHjLL7hGQMDMV2it5vVPrjP",
  "key19": "3dqpaTnypgnqz6yLgUCkQwTVKB9hQhGSvyfQmhc8zqHBbbV4NknW8MQJz76jgVHwzbrTvaRNBL3vJF933LAJiJWR",
  "key20": "5DgaKpPhDCBqDgxiddfBjG7Ga198N8rL2AMg6yES1Ltq97LGpoByCtXwH9xFz3jPimvE4GCTfB2GN3FgLkRLCiYs",
  "key21": "5eS4bwnK8kGonkFxXxgD33MSaEFCqzBm2CdcnEX2sGdaGqGkmbm9UvZdiqRrmpfG1Dpb53oCCqTE5mXJKTL1jnho",
  "key22": "2YjMCWcYKdDrQTHfgvaCSHJhx8dFx9nBQQPTzWVgh32dLh981kBD2guhFcaMvqKjU4a2kS9TcG93jCkGxMiCh3eb",
  "key23": "WNjFdKGhgZHhSFHgSomhrGbB35s44RWtHFEt76fFLGRBQZfhA9tZ3kCyuCEbXPvnYR65S1dGssz4EGwh73G5DnS",
  "key24": "36TnU9cwNtGW8uY7XAtQTi5MLvX1poJ4EWTZZw6nrGUYWYYL7ufHpHuDRV48RsfqGDtVzrepmeeuPm6StDNYnvaa",
  "key25": "4f4HVBDzLmh7PXkoJbd8p8DuUK2B2gGpL9Fo64NK8kfcFkLogQVkfmYHfwwnf7kaHaq2QdNwLDRnbH4XogmF2kPf",
  "key26": "22jzA4SvV99c8tyfwPyoPmqqt1Gcw5XseMi6ARqq434qTjafr3xbtCJu325Wvpe2tn38b7oo5WV38kZ4JMAcJAGu",
  "key27": "3CChPqZgYSRPn3TfCmQnK6PoRRKzp1HvYWrtCyvvos45hPuezNqGHhdk7FNKioVnuVmU2y5tSu7hvYVYpXGaTKrs",
  "key28": "uVAq2eccMA9L4KuJfwMLypL2iwtKqfCS1anRChzafUK7bRVDdEKqQn8F7NQ9GUQjdfgCqXLYMHvKuqRwB8zvHrN",
  "key29": "5c8NZywJhCFZkZNsqEoUMLrkuY39QWhQnLWq4uYFLMkPKeuDs68WqqHksrz4Vb5FQdmh1EJdiRhgQCVi62Xjbdns",
  "key30": "F8L3yMHYqcoc8itsC1CeSbJxwThhMCi3sXDgM4bqrFmke8Uhm1ooYieSaiPqqS2WgAW1TLnyYCXyV2TYNpkmVhx",
  "key31": "4211ro3BX4ExSkFBCGe9yqbe9hpm3Z18wNVsWLFbVFJnAsNeiXHUQ9kAdRxLxABWmDUqwj7316PXEzQnNxZmGGnJ",
  "key32": "3176xVx4KJp9uodZ58eDSJbtFXEG8qsVKn4pnY8dt6yue4FBiuAJ2Q24WYNAaQGhxCrxuVqPAgayddaa6iRdrVj2",
  "key33": "4PekJH66ZK4uyrmC1VBTJmgYQnMtJmXy1T4tQftHipbMQurzcTFeGAh72iqsWXxh1xGp4QPvcLuvjxNbPn6yzaQu",
  "key34": "ah6sD3voAysqy6zMtWtXfd58CZgmwsPqBpoPgrwntu7rKPLLr15SM5LwxBTuUNbe3EmRzvfEdqJ3LdRRHDNfX9t",
  "key35": "34v9HTionAJ9KzyvKpotcRmiwgtUgbQoxfJS2qggkoD6AbtxvDHn68p62ojsEYnkgWBXeXfD26snpCfayQbH5Szu",
  "key36": "2j91tK45cB2KqCk37M2hBYF1UVfqbvFoHhUM5zwzaRGbsrZLGAmJmLQ2rXHoLfzusZ6J8D3Wc9GdsAN94s8TENPV",
  "key37": "4xqTK812q7ZYEch4Lw46a8G3qwgHnQBWjmuzH7S7L7KAkX6v9H42i5XQAVf8Jbuv8hbiByKowNa19giTLRtU62sL"
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
