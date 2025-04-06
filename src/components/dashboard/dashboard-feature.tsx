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
    "2hajX8oeXNtM4aQUWVC5zwfMFB3fgehKqbo574hjWWPjwSusZWmZ9Hg9CRBeooPuJiCN9AsTmw4XVRiXQkugMFo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6U9kQbAuuC35mbRu6RmB7kBrV9KG3K9UNKhagfBP6PheGtJiMr6KstqvuQSj5cd55TdD2st3ojYUhdPrGdx9ZN",
  "key1": "to6nK6TCw29ATCdJTjSvZbLojUo552U82E1qG1fFAHQyCcaQjX2zXTd3bNjJxA6EZ8986PTwkUncDErH1SoyYBK",
  "key2": "5yweup4BNhjxVdrzhGDe7fQee6NNJadfMrS7qpmSgiEwKbTuZt2c2eoJKVBZeHwvxbzeuo2REa3JTRekiNaZWKXT",
  "key3": "3Bpi1voFaWX1fTS9w5QakRTMoTuJntzTfpX1egsEwVhKhwFXCZYNptiJUCEWsHNnBeU9KHgV5jw9KRbKBAFrcQyK",
  "key4": "3NQ4vLTMeNJJ4YA74TzXyvWVxXv3NnaMquXMfxj3Y4q7ET1SHdGXFbLEnn3ToQNUJnqGXSit2Ti3UoRwRYCtieEK",
  "key5": "5aHC3bE3BByVdK481bsdCbBVd3aqhjSVVUJk1r8ibpiss8EoFYCLKZPgRwxyAGMXyn1CwDovgLuByBdmewEKz1ev",
  "key6": "3StToRfT1h7hjtshSFjbhF8RGKNqAzhzqH7kpt2JC1Cyc2w2oNdwQ85Sh7LfYXFZa7MtfXRXnJF89qwhreGErBr2",
  "key7": "2ExKGEvDe8kqbq489eFuuEtHqZwAC4NvoPJm7EXDFhM31E6K3j3PrJK1UjSJtw9yzd6VEn2W5QTDiJ3YcCWaJbHi",
  "key8": "4ejDkpJEYXWayMc19dsquNva6cvj44MC6r51bSXKGQAvfTmUrMSHJhS4jmXTmcPTCSLCqAbzeY9X2Wii8LcexxA",
  "key9": "3K1YtA9m4TM9tgqb6wSg8Bw5HympXXr8qNj8Cm4AfCgCYKa53wV22MQf7EuFF1atLLBt3EyLBdM22NtqkRj7MLzf",
  "key10": "4tf2jQHGq7Lkyt8g6SYMDvYT2k6qK3nb6G8KRzorCAycspFtijZPQPigE7aEzUXN8va2dNz7YqPBvm5NCVZv5Fi8",
  "key11": "QwEkRpdVee1hootTTeAKntfHV8dZR6FWi4Grjnhz46ZWyoHQqemPxVHFEeSLntzncPjfr5CeZhrHzmPbdDonyEy",
  "key12": "a88KhJ1H9BqswAdeTarqgBr13xk2WwtmQaEZXgNUw71Np2kTzFwKkD5X9VsmyPeLn5Wr2vQdJG71yDj2mrjbe13",
  "key13": "38A2gtn94h6BnipYqD4csv88sBZMiUSsVMCdusgcwm3dsC62g6BkHtXfb8pA2xDi2xU71hQyxwjWkko7gkk46Yv8",
  "key14": "5G8UkP7jRqrQp1AcouUkhuEmRTtHykYVn9VCvnpueQU5eJKR4uGPmy2EwdbwbXwHZBoZYHyqjpEU24QtycxZ6B88",
  "key15": "48SLAbJemhWLohg24Knbo55R7PSLarYABQyBA7SsPHC4Pk4gti5wxKbfP6HKXwmnmYqoB4depWLGtJGxCoJMXQmg",
  "key16": "3NZH73aTCVaJXkhv4kxiAHjkipcAbqR9Eobjr34wb8UTamrDZ5VJfx7W9pkgAZhnuccnBy6P6QfS15hg1cjRKDGY",
  "key17": "47KNvhCcxCV4MrvGx8Sxr5wHXs8iz6Ev73e8TBha1RFajwJvT9sn7Fmzbvs98mTHCiiiFfqGxpR6NFPHbBJvaAF3",
  "key18": "44ipriLrq7vadYbhiNbQpCBSUnYz2emw71EjaARMN6SUf3A58Dg6jPcfCg2ZzQ6W7gnUyepFhRovfYogBYLJXcWG",
  "key19": "2McresKz5Pjsvjibt2a4fqEsCNajwEK75xVPLUyfMHA4XVejHnMCyAjWakuhD3bcxY7NmgkAxKHYgQEKa5gSjR4d",
  "key20": "4hvHeRZamyE7zChtmA9UvPyDv1SkGC1oAt6BCfjMB7om6UHA7xz24a63f3oHqWmnMWdL2nk5NXPFajk6pXZXRr5T",
  "key21": "2mDAFm9pTf8uNEJKdbXb7AfUyi74nHJzos5w6F8ri6wRRyqxHKgFQWHSyQouSiN6BvjK2NjCTWVQs9wRn6PyyMio",
  "key22": "4QVzM1figyzKjUH2EENFKm27wYgKVgSBe578mKGgmij3xxShdgWuBySDhtn31Psq5bnHaCbCHfXLe3P2rztkkFd5",
  "key23": "5SnpunjZtFtFpE7hCefCmVKgFT8sSJ5TxaRpejBQWWA9fsunsRVqx8VZc8LKvwq5u4JsoLzx8xVstwi9MS7pTegb",
  "key24": "2MpLmbjVZ7ZMpwNCD8SrEcAReQo3FYNCv6nmogEu7DSpCKq99GmSzGhrUeaduqdqzNzWWEU8Z5yqfJpH6vqJnhgV",
  "key25": "5bsKPR7yZBDQcWCptL5swBD5tG1VEdXtZWqD7q88bRE4jsz2CQ55hyG4ERLxDu4pdbmrTtHueWkmaWbbHNYYrzee",
  "key26": "5Gx3X6akST1g7rKpvBsVhkRZSZDS48sMjpJtYMFq63dyepvQomRRbZp3RWFfE5P7LmmFLQ6gzLnKSG3qhhAQxQTb",
  "key27": "X8wta3WUYHoSng35r8ctsrbmWf8UeXjZmtahJQNYRpHqjD41UPfZcsnaMg9AjHZhxa7S9iJggg37suS3Jghp5vA",
  "key28": "2jHtj8Qv2GzHP9fNNB6bPWTGUHbEzVFbEjTKzLzFRyK3EaGRb2NNEqn83cN22VWdwQU8hdAXCddbtBsJsU9yZvms",
  "key29": "5KUJWADnRUwr81UzbGBZskVbhSCCA9oXrmTf1BCSoaP7vswmcQt64DAjnPcWoAVCyPkPCBbKBrSNF13jU93hL7mF",
  "key30": "LcoPMm8s5PkFd2ZtPmurLa5a7G2qsMJL8NHARUTAyCeZR9xmwqWMu1hRT6FBhU9MR8qJmJFQw2odM1Vh79HJvd4",
  "key31": "4Zc2S3r3rxVmRFxBvzU3ywkCiiZY7JLt4LAwaWbVvoRGD56ANz7HgbzrCXqrVU9VzHrkdrAAVLHJC3YJ94twQrM7",
  "key32": "2T99H2ftZD3R1fp8VwXZknrutsaeAjAsU35eg63wHrWfLBV9Mexj1kZym7TP21Mfb5fYEdxmL7by5bkjtXaJD1zK",
  "key33": "3M8WauAL1CDGC9BHc89PZX2SN25Ma1dYpRED93BMLxmNaWnTz6sKzT2pGNPe5z3y91t4G2iugkubqk4dEE69WzUe",
  "key34": "2K5kNrafQRPq6enfXwdwWm1s5ARryY481RHJmYg2iKTYhryf3jabnYKLx9GoLDtKeYMJBqefekLyox1uRuNqM31",
  "key35": "49TMiuQfvd8oQ986xkKpi2aqQy4DXsmNkNUreg5EEF4sdMnTEMZsxfAhNuCE6bqrQjz1NQidQzQbhAfaav9Eu7aY",
  "key36": "3umfq9sN6jFnTxHaufe31rxFeSDMxsxv85bRcrYZGwoVmSA8F7LEZktq8JGbcVwCkkoRbgC7VcUpJ1hw1jtsQ8XY",
  "key37": "4nCRFmkhFevka1mXNmHccghM8ruqz5HgARY1sixokSEhWhPUoxjZ81r54rMqVSXiuLGuA8Ne1VxNN8Ea95nybHKg",
  "key38": "NuGmXURPbgeBdajM2jK1XcFuUUPWVp4BxGfm23YLMGuLd2B5L1ZCmw9igjRMwUn6fXNMwn7BCAbQpG2M73h2CSA"
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
