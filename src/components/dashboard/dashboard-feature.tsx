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
    "4xVGgDDXZvowbRaqYbeauv4vcc9qYRpDXqh5xeYKTSARLuTtSuEdF7doWwx9ZF7djEjymntZP1sCis3dueTffeAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uf5BtPBY9Wzttad7yDBE54ELwnBvcyjwps1rXHNT5TP5QomCbPWv4rpmtK62EJzc7H1axkAs96nycw2DfCk6Em9",
  "key1": "5MWF1cs8JGNFWEpQBy8MZaJqpnRgVAKmGxs6Xp8p7rg5aRg4hcHqX3EnPbTGVLuJ1kJTAyX4RnYHNrzwmV7Qvuzo",
  "key2": "HqsBDSzGBRfhKsD5sefJYA4pKY5J2diq4Jsc8VL9ss93Y31u5G74aHnhsZh3PSMjjNNoA9XV6CNUumn8y2taYuX",
  "key3": "4N73a42je4sWAv3MMfAPmn3533kq9fVWXHQwfXbNwCEtcNJzteQcPLYggveU4m4Aaa4QG71qs5VfG4MuoPXJX66G",
  "key4": "BGtKYBohmNrezEzeUReq7a2YM6YwoVEZDF3MHUruJ61Hya5RHEYS1ycBye2WodFJLeZwn5gKyhp4Ya3MfTiPo9t",
  "key5": "3DhU49uALtggdSUkWea6dYpCdu5fpcaLqzrNyeuqgkdoyFFrSkUrAKpswrPJG15LkfEfV197f9woMfaPe3by39RM",
  "key6": "64ZSa9aiq8X6wr2wvzoUe17BnF68yJXAGuGL9dkUTP5HnkBC36ZNVkXrjrAfQERwpb4foLV6CGsaQCEpi7pVoy8t",
  "key7": "5X8KmgXUSdkHKyPa9ca9Akxrws8wgQEpEmrfTNJSxaMnHjQ9QjRXus5412ygJbhqGfyPpJmK6mYU99wJXgb3PoPC",
  "key8": "4t7QHpcfUkT5AEzoZbPoph6hhEPtFenRJUurkoeLnSbgEtrXUtmGg6ri7N518iZVj4PBneUinQusxXDjrRVBRU3w",
  "key9": "5aoTVps6ebFvRnbG9jEXLGk5jTiN3HaTegGBLUnz9RaJpPqjmyaF2RVMAtXLYhvwzPExStx6ttWm2a54YdMgjfkk",
  "key10": "5DSbPw2GaAQH2n3RLDgf6hRScSrjwnidWRX98yhKvAxHy2HD4amagDG5nuwJqJ3vGtXGAJ73g1ngcArFbH2BWDBz",
  "key11": "4GG7jCCHbwfBkG9U4ffwPRuSBdwqeHe2YjDpAGUU2Y4ctF6F36HgFF3i3eQHKYij17vp7hWSCD8prpcemkjjwAWq",
  "key12": "2gbDiU6BHpDgkmHP8Xt7rLxBo7i7M1bT3i98KifNHtfMzhtMkHdR5SmsdpbsNJoBXiAejK6aqfY4zEE48FyVWew4",
  "key13": "7gGPhw5kFmWmmQFBcjpFuprPfJEnQaeKQWovbkHKxsdHc3iWgc7gXSB8AkNJWQUePk7NqeEDwSFCTt1ExgNZ2n8",
  "key14": "58eNCmQApWjDwE6G3Hd1gTdpDiwJwnwAyjQmFp51mAr2X8o9bfCC7hAAoT6RJ9UNiDZLGGPMzK6gCjnX1uxtW5PK",
  "key15": "2Kzb7P6rcbvy77o9LXud869ETETKtn9E449GS7vZppkNBVMGebyd8vmh4C2QvrKCU32P5Ygs2bcuZu2y4oavpajJ",
  "key16": "4DZLkAchvCDr8P9N4Xmk7dYfU624brG1Hsb6DzzTPmyiBCMv6xTgzPJ7U8Jg5zWxEjQKhe4gCo3GWgwCYwFQPFPW",
  "key17": "25jwGkvxKA3sZ6Cw3PrRySwoo1w4qTLhtRADDVg4M3P3bSoTpVXVsx5yAw11cwpmXMQYntPoJqFrWJR9bQ5ckSfY",
  "key18": "3zWr4jVroUMrwz8R1eusc5yBxzKoki9RVZk5gWEV1jmVtGc8bgCCVdM928QNd4o22f4SVLL5UEfUemFsnYy6Xj3C",
  "key19": "4DUjjqmgYkRajFLdH8YQ5jXiqHLCBgm23kXgy3JtWfB7MMxMzSVCXAUMKf4qwGrTVzAJ97YNPLJi6u7fQreCGTwK",
  "key20": "UPDtPLd1U6283v5hVPGEzNybHDAG6jxfjV6qoZLLa1kQrZwYsXS4wgMzDkBingnSZU6vdMBcNN79d8ZbWm3zTZC",
  "key21": "5J1jxRzrTVk734zUQwqVjtnSnPq5eiArXfbG7xaEez4LnRRcxCGuZtbiGK91Bb3ehXCEMh4Tkk99hrdkXucM24CL",
  "key22": "6dinHLkKZ1J7t8kqnLtVuzxYBFsjQjjLWuJSE4fZN23fNL2aBvf3mC1mc6btDuFFyrjqEgSGXcQJYTFQPH3M2jT",
  "key23": "2hPQt86b7ygZH66DuCeYV4aUoCC9DSaPEiEreg9eMUyr4wjzka8WP6pKHfm9buA6bMs6koqhptFSchpVwg4dtCLg",
  "key24": "4GZEPLWQmMFXRBbDqh9SSkSyeh6kJCxXfR49WwpeUraSgzYLVPJBux3eUEWKd1t7gaYFPGZcbLqD4UM51EmkxCjN",
  "key25": "3EQTb9iQqcgMH1Rgderq6pi8DUqW68o2SsnDfe2hmuUbhXY68w5B1rt95wWarex8KdvkU2fMYVNxG2BsavgADx7r",
  "key26": "3DHWUW6m2ESZ4RnXEyRAcaeBwmk5Lyoqtj9eSpWquSHB94mCAY8xEWYVgPgKMUZNe9C1PymgvRAtwmUCKWfHQSRD",
  "key27": "4TvHjMRyyPPkUAcBwWgXNSZfLk7m2zWuABrR5Suu8exscYvNocf8z8ofyC4NZZAmhtmQE5rZNbgs1zELQ44D9KC8",
  "key28": "5iThjvTrsUxWDshc6EUfRzrmhaG8ZWE5fChHttM5Z7Nxx5zUvYuSPnqDsNq5ghM94dEUATpHSZzoiikH3oMUggyD",
  "key29": "56L717UMy6Nc6teRuqLP5YGj3NCa9kcHmcdqRwtaVEY1nb4jDEtiVviS5UgBVam22Ej4PcK7omTKva3irX7vs48j",
  "key30": "y3M5bbXwSF3eA2MahJ5t4uto87PA6bJgm9aTVTNtcUCqCzEwghfScJnhxxCjm3iT8ZyQZ5nZZZSfsZedeSUPGDh",
  "key31": "5fkTuuPPsTvXCDHGSGPz2HkaFpSNbWEaTE9Bmk1PTxqs9d6bhhvKo75H1qGkF5XZhmRo6YtYHoqs3hg2FwSVq2kE",
  "key32": "DYR4QPceNo97aNYyZBMHRrQunYFQ36jyLes9FnNz3bLcbR2zc2PNkQXAQbWa7fASXXhA6UeRe6sBLLHLdJYoxpt"
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
