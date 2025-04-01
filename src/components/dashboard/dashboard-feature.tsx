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
    "WETbEqm6VgwSXLUiru3rK6fxBkNEW1YC8xZSKdyeLXWBFte3BcXQ8XcJREmxePQKuq7WLy4AjwcDnmDYWreDRuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TeVwdsbcttCmDxd1iv8fdGf9oTfY4aN4zCfrpmZwDJmwByj4A3geD5qERbw9dvt8tTJMspK3aPmy7NG78YDwk8h",
  "key1": "3C9efE2wGPfstfVwUPcc5Smt46TFgwvsQhJCNBC77UsZjcPXyN3wA5mGL2WZCCLANH1yQxC4heqCKc44PuRRRr2w",
  "key2": "3BFX49Px1STmDkLVF1QG3ukMQGBWrwTqGeNKf6JqGCevEskr1cCuGTfCCZz8jwBeeVqBjBwcjs7ZysMGtH1e4id1",
  "key3": "2YPi1muMcabTReKXhUGQ39kiPeRK9P4zAu4fXQads9EA2HqoJ4tn96Wz7DgqaZFRbrNcW65cbcwijyCm6PgKTbmD",
  "key4": "fkhXHQVUpDT312sTEwmpucwW8xVLi9NMNpB2P5NoAkye47JEc77ntTnx3coM3fjEGWcB2aXZSyZwM4t4yRph1Ls",
  "key5": "3CXnePZcJMDAHGkFu6Ljyv6bUaJjCKtZGzgSYGRnCUcie62j5v7PWsiKtwRjKQxbH9oDqwYbpBfTjmUQ4mnq3G8f",
  "key6": "2fQpti4xqm6bjttX8Q8dkHmajVhu1tZrVzKKZBKx8NRSDqDRFswusmSnK263no9MFNSHzUUCCM3iYWfN2GuQDS7m",
  "key7": "3FQYe7Qkg3GUr5ojwdv2K6me6pXugA8Z54XydUXU2qgd7EVU9KfA7M8nXHkeUF1eUNGKwXYr5Y3YfCBQKujWoNC9",
  "key8": "3zKZ3ZSbCUzfrTJQVhWMBc4b55EkZX4niUDA5QSrx6tvEPFMTwXqm7C17X7zNFos49QMGZGnkmGa8n3Su3ncwJVP",
  "key9": "4VA1ipbrMW8txvc3UMF8MXSQoRGJJgiE67bfyqm95ZBTFw4edWbXF7HyTqxafKotKys7yJdkLtjdDHAZLFdChVsX",
  "key10": "3CWrPjvSoZBTorHi1pJVsJRvJKNhPepzPUCmFeDxofQbesWZNkMJLicBF3dFY8ZVvrutDgdJACpCPe2zAAp1WCV5",
  "key11": "NvRwYdUTDsZGaoEeWtJUEBCqtWwMa7ALrcuk1rPR5z1HaW93iDrhzG9WSVj16L3t33AKgeJczf6LnfswrTAZift",
  "key12": "CfukYH68bRSkjApVCMEA4HGPpCT6ze4mhevN4ZDb7bkfVNtQNfQyZtsRwLgBGMARJR7hHz15j9tWi5GFVR5LFrK",
  "key13": "35EbyqCxZgmAcnBBMTZSFYnAVFugZhdo37NGAVhJqBcSb9FvEo9SGrttWcsp4GHJ9oNkrWXVSLhext2kK1TcrAtc",
  "key14": "3MJDX3juRFtFv8ToTE6Hs96ZPBdApyhcGtoDSiEnMWe1ExwtW2qeMs4vWiiuXdhRxBRbuuknDPkT8Hh1LMQeuUML",
  "key15": "TK97KHCJEnWCrXnwoiwCfeqftbYgRhdcgQGo15uwTeK3xuKUkatvrRrQfowy17TAJBnYER6yQLf9nC8fCm21yq6",
  "key16": "5x77aPi7BUvTPzEigbgJaMJKN2MKVvj4YcJKPjec7eb6Me6gw1WcbueAcjjTidjMhKUY2J4Kzt7u5KzAY8TyA2zN",
  "key17": "4RD5CC3dfXbjXcEDC1AR3hbYGksosU8ciaUreB3cxVVe7YCLztpwiMStN4KYtY7uEJexSm5xLMVZ6eihNceoBNQU",
  "key18": "5wrcFQdFPkxhSEpQp6qvwSZCehwf8aKEJ5LuwSriecuD6ZrRM8h2fmvzCDPHC8nxGEEhF9g95iVaeer99hEVoqo2",
  "key19": "4frtwBXNGH9bQyLLQdeDG1DXpWRmVZQ1yj1j2zB1b5SQGQEnQKe67vjyX2rtmNrsrDPewXJyHyKsnuPNeWZkURv3",
  "key20": "4zsuCVYn9QixWxBULzaRLx9VLZ552zCUth7hEAJLetADKm1ozxE4tBKq9iNJPS7kVgf82ek8czuG9wrMcRuu4yra",
  "key21": "5eJdP2haFg83cCuR11KXf4oWbZiCiba87TSEAGQW9DMaLV1dPLGMhfmYaNjAnYtAnzAUv3JWmQZNpPwzeiiiuMpw",
  "key22": "2QFqfoyYrerEYgz1XWoPdVCq2qzVi5Bu4AyBrP4mWW7NWgRcQMBHFJ3XXFiv3DnVtLrfJ3Jd2NcBjkFQtgFnvmZh",
  "key23": "tGBTzB9uxSQxnk7cwMjoTS4eCeB3JUQzjhya9VjHh4SExQNUCJws1aZxi4x6ykdHS5fR8qoARQi5UrmGfws5AeT",
  "key24": "3gN1UbKQdBNDxpF6r6gmGvR1HJfHwL1MW9KvezS76WcY1Txk3iLFMzyLQz9dssswfG5U9UUGzQHxrnysmumsXjoK",
  "key25": "4m5zydwP2zmS6bGpUB29FbfxTLE7FrL1j3o1c6DDNfvAK9ptozUZ58v2wMJ8hqCkoBh6rzz7XvL3QvwAGcwtVScf",
  "key26": "4FC6FmceARo5KARiM1BCGTfe1StjFcHD5WJaco2FatbgEcZWuoFphZfhfjjSCnMumoHmj9h4HiSw8aej7iRkRTfa",
  "key27": "44gRDG4NCwMSZqm1KQaRhk6fLuqDNFyCsUtt3vhvN9RAQ59CVTmp7yn87RKTdz7CJWoEPmoH475xcQF2bsW24d4S",
  "key28": "2sLaRfpEytbnSCZeZbpzMJ2ywrUGkB2o7nyc7Ydug81x7StEG88AmkCMDiFHvEUi77duLcE2hUg2PCyg9TcD2CTi",
  "key29": "2nt2oeUi6QQxvehhN6J5Z8WM8cKnswuP8hyiqJ2bVFep3rVfHaazdRLKXh4iAqE1vNYNoiqnCRRBSVJox21px8ww",
  "key30": "4UyAyxbiKnqsBnba7jrPgBPCDoVPZxMkaUhawNmmXazKj2s9uEMTXqSuuqEDb4r9Qmp5k8YwB7pdnLcCsvyHeVNE",
  "key31": "3HSxuknmwsZRLXZMJ5puFZ6GQZewEAfRVBWhWeuxCcrD7mvLkUQRuyRq2raF8bgMNazwbyNDdiEZrr5sJw6zNwEb",
  "key32": "3jqFdAfF3PngxcXMD24WSiWyosPHYkmeSE1R89DUyfCB216FUvbNymzAfKD1icMu1MhQG1M27JjaYEEvMccfGnNW",
  "key33": "2z6XHeJCKmckmtQJCEXNEf4jBa8NfwMT1mhABwwKRS7g1E8ioxBVVqk8T11KvCDRJ4hdbs1yPmz3sa4RAKd7mPbT",
  "key34": "yoSC8DyjMgsLsqMJkzsythNVcjpXFdkq3rXCxMJPRjSHFaTWHBLzY8uf2vcAhh5AARjzcGKvxcmX4cNV8ZpwoaF",
  "key35": "4YjAFBzRqdXA2eEWcZX11WS6et6SJcosDc6jBSm62C2QyNNXzniuUN6BKK8WwSHY1fCDHWn92n2DD2DJ8cnDu6cc",
  "key36": "5R2SbJyvudJvx2cVW3z8VR43GXUWCqar2YgWyAb3ojBNtSqoLZMgEjqCvS3qpd6THtJfcWh6dhZK851DHT18nPqp"
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
