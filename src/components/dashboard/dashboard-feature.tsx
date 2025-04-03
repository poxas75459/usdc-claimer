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
    "5G6FvDuCnU4BcCDf3xQTCDXjpEEC2WHDTrqnZHSm1RGdC5F5Un8wVWM5xs3PAY1QRy3qWuivqbn4bbTLySHKNTH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mD3zJXWEw5CLsNTYUHko5FfsSJWp22tMTHezLZagHzqWsEdhaz62thmFv9ZAU28PTaDHzVHawun1DSSc3VCizCe",
  "key1": "5CsHCR6PD2jqVaze2CjaLJgdf6VYXhrv9kBCy71smqF7C8YZMmXfwbUZiGd1DCWXBkHGr4HpwnQp2QvYtsNF37ET",
  "key2": "3Hd3mEDsvWextDMp7YQB21KGHjFbWHtK96sPkjLjhezyheryH1Mg7h133PEzMqR8ENB8jk9vZdkoRUbxMGeBnm3A",
  "key3": "4E7qevXaHqtgqJL9bKXQGzi4bGd9PL9MoGdobTzMx2Evy81NvwNywAa1YpQT454pBrfRVMMnXkwsk7GxoQPArR9f",
  "key4": "4JRPsXwKYMRpgrfoyPp9oFHEtUebq3heXYRKcQUNDDzNaRqDjrE2w8fAz1cR6TK4Pustv5QyDf4xbVUV8AzLDWtL",
  "key5": "4SgbBmrqXSoofvmVNUMkg4UJrgnsu9ti9aztj1NbridpgBpL1DuXgHChUjgPmDzifyGaYbvJma1vvZTz8LezBFYn",
  "key6": "4sFU7nfZN4tV18CW2WXzJWhGiqch2JHcuDrJveggj4jb6jUVutSJpPVSnqM6LUtkTFnhgimQ55PzncRkSmafnt7G",
  "key7": "5nMyv46oAav8UCTYq9jguuwg71QdzKi7UrdvAY6kQtwyZLZ8dBH36L1JNVYHw2fkpKydLTqtjJBrrbP9CNxzNksV",
  "key8": "3sQVUdkpfiKT58vd5yThAzZyvEQQ8eLyaa3qkXuvo1QFQr7rcvFEumMg1myisNkDCGx2DaWtBxeGuKkgUN2Q3ryo",
  "key9": "2YSuXNfkYJPwDa98uvspD95uNN6sXfeXLvSKxcDfMi1XAwS7BMFZwmDYCohynyNtjg1ssDPPQLxVJ6aJmFMcza4d",
  "key10": "31mgrJLqgmVWbHEDeU7NLR18GsdybNL2G4aKNexgiR6LvZMV5WT5Q6KG1BrQjLu1z9iXS5NBkfjFRjv3qvHy6ziM",
  "key11": "3LJrHJC8xbCZn9KuWwEXQCd9UgPtkXXkfLpADk32zW558hhpVz7EBZEDYWmJAimZCHe2gFBZ7td3LVM3n3vqbmrh",
  "key12": "3MXt2ruWs2vMrtZdZvBEn37MJjvYptXBoqwRAahadhEfwxLuLuzc8BLHCU2jC5tqdJvk5z8gF9ASD7ixzt7h5QsM",
  "key13": "51kiWEijoNNPRzWP3bDeps6N6V2ovwJW2Ld18MBr3GtMsdXe5VBRb1AWDKs8GVCgYsYVyyUCBANuLcuSAFPHjBt5",
  "key14": "34TqWvPTgbzkFTGYBZHgDxD8sMQWDyw2wfGDNHzfpsuisBP2VLr1W1RRVkxui99ZpfnDLuEK4BqrQ1Z67FVKQU5i",
  "key15": "4DLmwYoZjvTUTF9DSELbS8FvqaJiCG5eYaJsrjegrofA4S4RzoAaDpSGjutJgu1uKBVQUZ4ibVU7Knoz7uLhowFm",
  "key16": "yS5k2NoPRK5CaAnQxNEL3XnVswmMUXPUMvQYUqtYuLcwdLbuV2yx5vbDGZGnbmGGUancbFCTsKmiTdQdwXdZpq5",
  "key17": "2UsuCQBnpc1Xd1S834DJrwzPFjaFYjYdQEegk3bvj7sPdrPaPJE1KytNsxLwvYmvcN7yuvxhRvbXrb7cF49pAzqz",
  "key18": "5dEj7oAFp6MaiKphX7XqJiYrHU8NeaxEuUvWZv7aY5uXtMJU2dnspmB2x4M8hvdug6k1afWmeJtZ8hfqkjqmngcB",
  "key19": "4ym9LUqHU5VCJ1sZFF1VjUgn5TW3U4sCDfjrWSifpw39x26jT6ygBSKy4k4D5N7pQSkBWvGmAgmEviDpgt8maMQk",
  "key20": "3PKzoFhiAw9BZUFqCKNwTxTGrhXgqmnKWhdFfgoKW7BTLfbQPJ4cByTufgyUSTSD3J63dVDbTBXRv3xrBqcyWheT",
  "key21": "3pDtPuGn2qpFyk78v4bbwivYSHHfahumi4FK1mLu5hHotJyDf37s3v6tRNVi2CuhSHWBXcvacm7SA1McxzZBSvKP",
  "key22": "4MDvsAZns2gcAFHMVx7FB4BkLzWQh235TPbWkra2ugnVhP3XtNJqjYfcA9cobmCWVm9KC9GvG8SrgF2uMpvGLXsq",
  "key23": "21Pdicj2twi3UfmP9h11kwW8op5jPGqLsVmTrnfGihQc3TyV6SqNpugZoYvWJnMnMCNy1r2c8T4ZMwMdPHF4vpoD",
  "key24": "41smFCMLx1AKCRmM2T2sbj9v3DDvV34ME7M2LfK5gjF1Sqt9yMWRDTPAaoj8XCDK7RLsv95sddoFBF9zWKSCY6FB",
  "key25": "h1DFL7QhtGBLAhijxwwMKC1MaZGMXwfCBknG8HcFud81wGGhGp1yxptYYWASHD8vcLMLSdPiEYTQDqdQQy8Fegx",
  "key26": "4xi8HdThj97TMt2EzVD6x5AYd5GMMZfGVwPYc6GdDrRQkcJtGELS8Zb1KB5jMrLKUXLiy2Yy1kcJjSApkrRN9MYT",
  "key27": "3UyEeEyF6VT5SrEabyVUbQbNJVNUbharkT2tNfzYaR4MkueK18mMphL12pZehShQY8sR9a2R2UkyJsR1RTv1Nnd2",
  "key28": "4YRLUoiTum314bXDSALYbRg7Vs6sbLAc14jbiTt52DJTnk6wK2je12Gs5US5aP9ZeeDyACYWLxaE4mJUXTB3vh9K",
  "key29": "3UxFvj2eTDYG3HULFDorZquiHWpiTRXv6iDS88vKqBveh7Np2rzDBkbbG6wiDrADRWT7ZoW7dzAYNxi6WjLCZqH3",
  "key30": "2pcgHGkuhrmVhpW2rYfuGVjwF97gMHTWznW4sQzo8wp86oVVPDMYELxgjEkqZE1eFt3BFpZQgnRB1xaQ9i5KaAra",
  "key31": "2V2PFUoKsrtM7ZNHzWTu2i1As3m66yRhVRcpTp5DC96Nmz2P99G4WNsi81UYco1Bfv5uFGNxu5EAFuCpfrXuqTou",
  "key32": "5ERHDSqHpcjRN2se6rx5KSjCC4vSKecdmpHGcFZss2qurNUZP5GA6TBHr7nxvZ4UrV3KbCeAjgvbY6rq9XBdUJLk",
  "key33": "2ZybJnuJGR3f1oVzFV69WL1YfcxAqK31eGXQ3fzborRiJqvnUwXvGTQDXfH3d6e9yugNWLVX5EK11f6dxrxPgb8Y",
  "key34": "3WF9dm92i29xj1CRTjwdpqDbCiNp3ALhu71Ngrm6eeFCmQ8e57Zxp7YVV36wDPuWh7UeMf8QDVimeMphCaCQExq1",
  "key35": "3UuQ5T7D2Ar1o5fnpgKMuiAFkwRoWLeepcCgJDd9rcHT2pMvJqYuzWHLUjSJSU7omZcamdF9xroEDukZmgPT7MWa",
  "key36": "4952styjzuC48QM9pkheT5VdkRqMiimwVitK2nYQTiEQoQZ12YT75Gi2VkEn7soL8L9PQ6cuS8ZDZjo9xGJ5B2XS",
  "key37": "EiuvGwgDQ3ho3C9evD2ms3eVREWDeuPNfP46Wnkgjo72h3B1jPy8TJsNL4B7d3rhZoKeqyPNrFrhgNuMTKqQEF2",
  "key38": "5jM7BcCbyBYabkq7iChpe4VrmPy7vbKGZLn3QB3wbDgYvzYmMXX6oWAbyj3qKAcRVboStSH6EaJTQcr8d3CysHFm",
  "key39": "3cVKksXw2WZpnJsK6RHdcGqamXJgyMbMJMBathwbCAVCfEDDNoLfiEmDx1qGMPnCabqvP3Xv7qYWzGzdvYjphxqh",
  "key40": "5bsxcrZUdnxmLF95KQfto6SqUKATx4pogZB9qNCyDH7R8Jqadf1UoDpHeDN8HLHMyEHXR2Bt34x26zGfNqN1tjBg",
  "key41": "5cwautW46jv4hZ79RXmoWwS8hSogbk25JQYxRdWa7U5L2EG3LpGqWW2mzNrfupHdbNS2UrQdoVuT9j8rws61jZdV",
  "key42": "4EHWq9fqTdNpb47CC6UiKjMqpm3bpDeGDtP2vV3yUoZew4P3uDDbm857dTpDbVzzEnRtoyJefXr9VVLLBihcdbww",
  "key43": "KdXwrJJ8a3t9Bu8AVTGRW8PFvPkCFj7WapYyemczDbsknxMcM5BcJiCiJw2mA5QBgnVQXyFgjtnz3BGP93y59v1",
  "key44": "2JVij5dKT2RXNLs8nK4PgeZQYttpDWXmM26ouGtmYQVvkJciP7eLGEoZrhikQB52i7inn1Q1LzwQVeoU2ZgWBZAo"
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
