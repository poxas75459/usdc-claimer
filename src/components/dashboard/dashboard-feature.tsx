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
    "5JaAH7fAjt9RwtSKCDNjcMv4FvBhQJeSPodZiNwmjnB3UZvW8nhNvXWfSXgV3EfqY2NHi4So2Uj5UcTCju8RQnTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ns8iarAGkAADoxXHiPsJir6556Gv5RhpJTh86UBBManA3Wp2ySkC5K2ZpueGWbVcqUDchCxKZfDdL3E3Nvkx1mg",
  "key1": "4ybpvAmufZakEhsaJZJuQgNJW3XbiUdu9hCW3GeiKQMjbSbMrATxPuoQUGWDNKicg4sjYMqcx354fqMhBLph5fE7",
  "key2": "3KmQjBdWZohXVkdE6JjkFL9LWmmki8xAGo4jw4Rqu6GZdYynzDyARTAnqUpwErcfaLaHRygi9NCtApmaCugU5c9g",
  "key3": "4zH1u8kVnB6eXAxatRxHRmwoo5bNPRbQnGrZyk8Phknv2LEY4M4ZTNrJwu8XtD7tsn5YX419CLCkw8zT2k9XUE14",
  "key4": "3UXTKePUrDwvfStN3MDnbUaXLYZ3681wGwhaP8tmj4aSXHiGRVPqoSdDcfgZmgpZz3eyQJgEJyh178mNWkAFKbXa",
  "key5": "2tV1MrXFcrVyjouX6h68wievaxSLqx5W9pEuywZX2twFhom9cgLk4cTL8QxQBvV9huNiKDBAunQrnZyEx1uxz8B2",
  "key6": "f4UsDrXvrq58jGrG1qkamdP67maULrn8uaM1mjFP9Yj1zUFJT9shpTbLoyZPPTVPKoPwRe8UezSHdP8jJCkJczu",
  "key7": "BEZzbRZN6poAZbqsooqs7Da3Buo1pDLDCzHgGK4MbMFRkWfMkVATta6zo6RQ94c5XLhkjwzF2kGpCazVi7PGAk6",
  "key8": "295SFsD8hdenAFvzBc8K5rS4kL4dTJcxu1k1KfsuG8FrAyWuTyFyLtwPh8qWeaxMK4eQH5h4SXjmRGCkpdxtAT1T",
  "key9": "3jkZezqZ7ngdtfqCR4BQWJsAxLCCksqERAMsk8Gy342bpGcPSwhWLRu7snd9soe4xSyGvGGwV7J4NxK6JD4SS7mr",
  "key10": "36kgsNubpTj8weFXENixotsZXdKDfm9x4APEWpAGmbPZxxXsMBEu5LgtHzzHWczq3Tn1TZs4ZzYKdQ6H5LRaE59c",
  "key11": "58Emj3SDLrXPX3wme5VexkdYwJb74M3xL31egpUWms1CntCdz9oE4S3ZbpkigD95Vc9vU7y8Bb6uXsfyPopkxjfQ",
  "key12": "4kDah5Co6Nu4tW6MiebbAvJVqPqYHSWN3VHHWoLqGHKBCG8F5YBnnC6dx8Jkk5MUfUVbwdkZovRatLGATweCJXGQ",
  "key13": "JQ8C3GSM8PJAaBziDwq4sV4mDgiRL9JBR9TFtCqmewJyUM9iu9xWKMB2qq6Rmt35DKbLFpgfQm5w34ieUrEAGsC",
  "key14": "2qhDr5aoAgjb1wMSbxbGyTZfWG9hfxutL28UE7L6kiRwQQh6fguaJ972aKqwXuZJNKsabdUJGnT3daoGhbxizbaZ",
  "key15": "3yR5eov4sGeUVivUyoiJpaetFNgMBNp1MSetau9fHpQ6JEGFB9jwqtpKsRN6us8MgtohykoyqWgS9JosQqH4M97Y",
  "key16": "2QNutEqB5r2YEKLwgYZu31wrFRczB3SAbxGgd1aeB8a882UrLmsXQesygLyVcvW5pkujVZ49nvrvYYuseACzaPVZ",
  "key17": "XFXNP6qziW4SBdSoWfTtctvceEnZArQoa74Q611ssxK5XEXkhhzc4wwmxN419gQB8R7htoeL5S69f9pKJ9PgTxC",
  "key18": "5pJD9TiG478ESv3nSwFeedNd1b2zpXhZUQLZyTazs3ofJ1rcFaXAurB47XbvHhVzyyBPvdy5dpqmv643UyGwZpPW",
  "key19": "3LKP2e4NVAV3VZMq662tKnNsBYGT3UhxmrRAibDqGeWa9dgwHyA4pZxUS8KuorZLdaGCJoxuwqmgChTYD5QcCLsP",
  "key20": "3bqnzJk1rmMjoS7mHNKbUUQcPFK5uB6QDYsmw8NuVvYSnK1FYDQ6FyeJuutbpHaRMpiePuWzFh1bXoDDZTgiamn2",
  "key21": "4ng613CceQRB2aujshJyT7Dj45uFPjrVk4TniB9hySycnrHTcFdXtkBYDyqH3NTiAeoANjSJWyWKrsEVZS8y4aRD",
  "key22": "2AuUqVtF7BMa1PMUbovA52H8mqAXsLufu6k7iHoU4FLn4EtLF6U585zznkmzwL3G59GcKn8EjcuJ6w4NUk8aN9mG",
  "key23": "4b63cfB7h6n8x12TNfc2amdPabsxZmmK3qXJeo6ADafujRBPREhR9pKC9Qsv2b1dDWKccQ8yaNNFfP1Kd6c52tx6",
  "key24": "2e3McLNyhwri1aKZeUjavswWGUJpmohXnLS9xjm2719Sh18h24FMmHBt2BjurxzbmKSE4QGHALp8psukPtqcyp5Q",
  "key25": "2R1KXtJwJCZQEWpDMKfEtv5AWGZgRanJtsXAknzD1mE3AJpMw3UxtyqxKoAkErtCHJKZLWRJmZ3HRg87mRL1bFrD",
  "key26": "2FZ8spes1vvxBNPhZCXYNLjdZFeNCinP9qiRg1H3qvbCG5LeM5GJb8TmafGrkyjK1JZW5mb9KPLGdoL3E7JLo3yx",
  "key27": "4HezTWy8ypKWidS2XsaDkQMj7tEhvVg2Zd2EceXcF8QKNdXZzyWYwkgXjaWH4jvgPmXtvrigQzFtQ7fN6VHCDoXn",
  "key28": "3fxCo7MK9pgh7LNr8BLw6ac1L7wBk2XeZxWRWbvRrYj8xGA3SQoi9G5MF77MsTyyg8D5J7RahZPt7NVCewaQzFLR",
  "key29": "4PaVtoG25GaUzq4oxTukFRyAa5pKkPadYT31TogiZDQhHd2qNooTzTiJGZFdThoPoU9pJLvqj8PZrwBw8FFjiYdj",
  "key30": "3CHGgV3cdg72qR31YoSgJiCoc3UgoGYyJahqfjy3u4CvBuyxjoxKy5MBjaab9zTMdQkx3nXkV7Rv1si3ddE16yi7",
  "key31": "5ptdDzK12TNvz8r12tvnNbXUggbwnycDiFBUN2B9t5LH6XZW5qvov3XLxN6aFidzkyoEcdwyna3xsp3WaBewGAhV",
  "key32": "4Xa7HHUkiczbo5sFjnGodQksgBthxqSeebRNJ8H9ZRybFJTsf5uNXvZ1BiDTzyptKTW4fuxXHsEfY76xbjbcuLcp",
  "key33": "27XpM9rza5hnipevrxnfVqJqXZ7RQhrZRVf8Rq2GJXgdaCHPmsEhAJj1GBS58NHYiPquuEqjvjQg2Y6MsaFdNGM3",
  "key34": "ofhYpGqexZKWNHVrAj2FFPsfrmo4xZ1GxigN8w9EG13qqmNKUgt8NzUVYKC3fP5Du9Xv3YoL7dFYirVZj96bPoi",
  "key35": "jRi8fFd3HtN7KgxDiUEDz2dZBu4ofHw6iC2WrQLt8odjFhY2ZRuPZiZGeQh4TpuD1NvxjyVCHSEsSunNnJ82TCA",
  "key36": "4R6TfxMryKMnkJ9nBJ2uVZJTG6S1vQrFpug89CioqWsDc4eFdxxSa9xALAQv4pF5scK26iehB5tXSY8p55tLqMeY",
  "key37": "64CSthKuqPfzqUvWzg4JRn7vfTR1FMyg22r445cLdVqWYFv8jWm6J5mkyPV3HQBJWXgAyVDxhhebvhDX424rxCUh",
  "key38": "3dsm69y2nmauWtynviajHaBfMVRTPvwoW2jNMKs6NFY8fgnxuaqMP3F71dMiWxWFV3PYyjkcd1NZZNhcPuaU3V2e",
  "key39": "2b6PGQGcYqumY4GLWvtBagsyGYeh8fpXjQbC6YxxhKWAQKNEsJjHh8ZA5XxYQAaqWaRTbXZUSwtLE5F8gfik3pLt",
  "key40": "4giRsQNW9s6es3iECcZYHVgkoV4b1U5ezn7ca4nJBdRUVsU12tRh1Sui9BhVU8NphedgnADtCzRUZLD19q9kJVP6",
  "key41": "4aVeqsdCyBY2EA5tdYTTMdRYFq71Th4qXVYryhDL4s7Wy5uaXDcZJ7tguwJLzDag2vU16pxnEKcFh6fyV1CgNgRN",
  "key42": "4cngL6oNEbBTWpSBGA12bj6Vb74b1izi3z7wyLhRDeffDtwfeYCKHSxXggNqeLqxNYcmQUbkiDH6yPXVVkk8NXur",
  "key43": "2NasatBiyoTeetkXXz6ceFQRcqXauXAqfLPbdhX3DJGb4FWtArBmtU2ciMuqSCX5vid55ZiBF2paxSbn5uSURXCR",
  "key44": "4uUJs8GPeQKsVgmRAwaSs1ktoRPBX149AdvMVrz2SrkpM2BUMCCcnDKh1HooWosafipBLBwqow5GNLENwCB2jSKT"
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
