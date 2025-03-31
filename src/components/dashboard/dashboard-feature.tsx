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
    "3gVXtHxXFXay7LupsFg8f4DUebaMex4dx4Esau9RDRMwtHytX94L7beqCEgdSPJdtfqjK5m4rcp9nVTjXy1EzXhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uK28DjwWvqLS26S9wPh4zCHjqPUJW86SqLPgZ2Fjt7CBiC1trbspjzopUSiHxxtBY6xyybHMyy47xL76ADnpDfA",
  "key1": "5dYfdZX8XgXhkF3ysQnDeQrefwit35nPD7Pa7GygifmdZLtj2H4kVrnXWQUjeHCno8ikCur9UmPM1ppphDmAoU76",
  "key2": "ktKkw7bUiEyYWD94yrWmSs8Dnwv4k6yWQCgHiEbj6o9TpdFe8eURZBLkhLXXaqn87ZfuPTbrVdEudoheiY4Y1xC",
  "key3": "3hwzDUM3zkxfesxaqvLkdxqzbpSPEuq97gK4NKYHzFACPgvYUzCH5uTpxCpJw6sNKNhXDSCXE3VyfGj1op1sLvi5",
  "key4": "2oYQgQ7UC4uNXxW7ghf7xcrB2C8JcjUndqipg54GdGWbVafjTkyLWELDnGnoWL94RZSogLTveSrfg4d1BUp43SJy",
  "key5": "4PSyBSrerU1izEQ3yLvnMs3gjsgiXhs8nVdUjyxwVfUQVYWtWyVHFcBf6CHagKJrNMcNmMqYKDv69J7a5LZ5AHY1",
  "key6": "2mbh5P2UHpABtZ4yymkSUkREMexTuQXhf8kfQLSwqVKh7zJv41a82SLkxm7xQQB98XLz4Gq2ot4khNnJEhvSSuyT",
  "key7": "56LKmmUU8nXxMrUqLS4XWVWMK2PNiD6Y5Poc26DL6iTWWCdXSQqe8AjCFdo1jv8wJpyFk1p53RmDq8sKW87FgJqM",
  "key8": "5RR8o7Y7VTNsx6Prmc9KEvJK9vZPXbqSuKGyXpVGqC5TovmrzfgRX8inrB8BpMKc32N1CwgGkuLH2e4U6BmjKbDK",
  "key9": "HDCLK1EQe7xnHPXYWZdEvB8E9LqEwNid3SmjPkNUQe3M4xBzs51cf1iDdBTytrtGhe87jR7odtBxAtX7rRZR3TH",
  "key10": "5tr36rzbmGFnkEcHM66n2MjFQsi4rKXS5HYg8SBSiCwm2NJvBCqSiVngb3zD9GgppGzDkuJFDSL4b4uuZTeJfDB1",
  "key11": "2CKKFHXgCexdopUUixDMxZVrwR5gofstsojPWYaCWEjySCRzqBnMi5CD4jR6HVW7Hp3fmbcotJY6bgbNhQkDYdfH",
  "key12": "gpoEqFe1odwFKXq8iKAqy3fZYCnTqKo6ydXN1mbXpB7zzgqE5ipTtbsDgivbCuWH21SZat1v9PVPpmm2p5CfrfG",
  "key13": "6MobWRU8FbfeRTAR1kgJW8yzYGm6QvuBtEuw2XSHx9LaVVKTPrjhPtytqkiqzkHPhCjDcnYFivdjceKWEJUzUtW",
  "key14": "22wh2odSYQB9zj2to9istESG5c9kSVfH2GAtk9QD4hEVdDra5S1VDMNbZAPB4NWJoMeomen6utaGSyYBvfwVorQr",
  "key15": "21VcvtPDq93eR2urDLbRTkwCQAYc6btntPyn3fgxYcmMAKfnfqyZYAs8GWbJYHSfore2b3DB5fBqoLQGiLvH5Wjr",
  "key16": "NEgAr98AwV41Gf3RFmVPWVnnb2wqc4vdj4U5ATdQtH9d7KvZtM4ZhQp5MANYMcy7XZMMCFyGMyQBV5v4db24gue",
  "key17": "Dsf2iPJ12855vUuQ4sLEffKhuVHC89Yq4Rww4DP6AP2b8wGueELcNr1WNuNM2Y15LuoA5t9g64WYqt4sYSTJheh",
  "key18": "521F85TXnprKLzMriAoFPMxSN8mzgQEuTgTpr3KpHf3y7DNyRMWsKdHoSgHSVNDFP9WDpBbcCdSZ1JbqLdDXuCqa",
  "key19": "sknWtDZHRxmw7shHxqxd1TPVjPttCLLRC2mJhrGrsQDhACYxHj8mutcGeJsRNHH3p5QTWjYEMcDAZcikycaEDwS",
  "key20": "3AwFgHGXpAFDr14paXgnPSRhQH8EBMmsHrtJnjjaeiGKWFEDuKmV5Andzn9MwrE4T6m5FdjxHpvkZwSzHTa5T5sb",
  "key21": "ChCThHeBCtJWePKLwvqW8fLLzLbRaJVbx63D1wPYaSfjSUsEV5trgiFUtCpaFaXFWE2VBp8H8VYkVnZP92hJSfA",
  "key22": "4Bd6MnQAgTcKFTNd945eicqYTKaNyVEMKGHje7gWYLcxqGqcTutRoUhTeL5wJBTB4jQfQbrNQM9N8thTe1NzcDa7",
  "key23": "2rS6e6pGzKJQkocc8TpTRWL8dNn1w4wCiMxSNYUdfMKBpVUipt3HSzTSiokKY7AWzsZh3auBUX4iV6HnbXCytRsA",
  "key24": "4hTmoRE1VwvBBuZufxWk44SYkKCHM3MiVtRvVXb2Fw5sqiko4B4X45LdVDYdwUoZVKgkBNZEGAr2iW22xgYavGrZ",
  "key25": "63SR9xYc7rzz3qxs8PSAJgyHxNXHrwvrjUtLvxCPJ6rh5jKw1gbP5jXT7pXkav88ka5ZFg3Rmf8Es19QDds6sWK4",
  "key26": "3U8fw17cBUZwzpex5a5gaVt77JRaSa5MSVJYLMUH7U8cn1hsLAzsshULq3jatpbb2BPp4L7YAKqD3EahVJT5YBsr",
  "key27": "4vBQZM8u942WcVnvHagCmMnB7tY7qkMd8RELaQyPu5ca5hVwCeEsXuuyc58bkv5WeqWhwE4ZVyRNGPUw8qVdjgQa",
  "key28": "VbaRKGUG7w2qWBBKHF3fpFgCR6mYxEoR9bK5gAb4gj1cWMeQQvT1QbsABSD39Fpv4D8HtjZwKjyLbo1eUkgebFr",
  "key29": "2Wbcwvc2fppotvhB4DvCZp7ujdmFQiArmb8nKD3zXarewikJBBAM7mbGNuX4dUprZDiiLfdR2dBSHgEr7tUYmdeK",
  "key30": "278UoyndNcMDKv2MvQgS1TviBAt19YaDKeatqbeFXaWp1w8DP7whWWN2JVpeQiKx2HJvpecYH4D9ihBShxMzXVQP",
  "key31": "364NjczWZsnd9b265QbCUuaKV3ktxd6HovFqKLNQoZgvhHCa1wGCwf4WEZbqi6EwEs6LVFeYbufNeqsyp9AkE6j",
  "key32": "5SPJ3FMZ292rUWX3vTfto5oUaKJo57jHvSvZAPisNUi7GcDhTPfxh9h8ttZ7juTiZVzMuoo7dPTdHvX9RRrUj5SS",
  "key33": "2tAscKv42EX9niJ8poThkKNNNWx1d1VxZRfwmK91EUZFdTGHRevTJJ4c5rM3Be5SHsxuMPkp8WMqMTCsDXBBkwAd",
  "key34": "3kAeic3rfTwKaKE43EjE9YYjEi8kXoDLkZE5653gNYFmuUJQbB5hdnsrE7Kft1W9qoATrutLPktDnz4PK6GHFr8e",
  "key35": "3nWUeUpiHxcDzMg7aekV8kw75JfxZcN6xcvyGp1KqF42Q6pBYUULQ97UtNEHiGMfC5DjhUhLh4KKMAv1iyMKk5D3",
  "key36": "28wPtDheFE4RSsw272YVZYuwhT21KgpwFPWNXRpHn2rhTCruDwefEiW4VvU8CnVzkucgSshYjNJRU36CjqnRb32s",
  "key37": "318maHcHLNd8omkZoHHsykTZUVbnfCMVhpSpxVuheq1LJqoPUp112Q5EEM8oc63qfjwKP68udroXVDFqYBLNUrPc",
  "key38": "3wyuZdm9ChZya9sv91yvq8K7R8hjZCydyvokPqsn1Dmhym5Q2ibcBDfXDu8ZHwVJzTHBXYB27TESVVznSFGvfNsP",
  "key39": "51g334EUPiuDBkjxgBonygAJuyyBH2hBWDf61T7n6737WjnyCU5f1ca3TqMZWaaGw4FExHs4TaED1yionfBZGLMK"
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
