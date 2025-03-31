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
    "56bQHXWq2GdEiS1CVGkp4zMZDrkBzbEMD35vrtRK5bHV792NNVwsVXfNucVugB5Q81ussSCRSYcpdmJsL1YUgywd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q9NMkuakhTT8YQU6vDEVjf73yap13oVzhhxGqDNRu4cxLujb5BSsGirg9asohDrz5RvWjigJNbWvFGDouNNypTh",
  "key1": "zvZZCDvmHdiQa6quRisawKcPKKqsNvAnBj4ZqtHeWd3Xm9aPBJW2pVX6xNfxgh3NL3e8rbKDKXkcRY5qLWxygcF",
  "key2": "dsGp8C2QiCBzoWAUvof2vBzoGnnDrsoNEYwY8sFLgAV4mt3F34Rmx8178Mb6nzvqjeMtUwe2VSRqqSMwzvYekVt",
  "key3": "5hHztEVpWyUGTcdvDMtLenJoyQ2STYbaAxodZxajakkBtRULnkxFLDzmeoZiPrtKMPjuMURB6KPLRye9GrGmTENj",
  "key4": "2WqrJUw5Ax27Yfdu351M8kueKBXnRvySWwW5DFPQuEpPxV75SQaQuikxKuJDq2A5oyLvNCbkB729JDb6yLK72o8j",
  "key5": "3TFGV6YBH8SnDotXVqTnCskPxjELNUuP2SyJ6spPUu5m1jBj6fza6R5hh3zMWqR7AzpycwbyJyuRvBHWNnhNuEZ9",
  "key6": "3Fg2J4uksvQAx3a5Zf7oTpnXUJagstyquh8RTzKTNG73n1rNWXnFfQSDQk1QjCNdMEvKmGsDKN1dLBvpJ7Xhhv4n",
  "key7": "2yNsK5p61SoMG5xbzyyMp2mm8KEy2RHHBn9BZjfAs6iwzaxf7y9LCRaEUjmgonZygpgtpELJnvXbWWxPCJZRhRJm",
  "key8": "55QuXo4tzspcJti6EmEeiHE1F89aEHqSrz4seYrsKMD9tqY8ngcEBDcihqdsSgzoNEBaATS7SwyuZ3MmEP399wYs",
  "key9": "2DMhyFSes5qMTwjUfnSBRJ9QcD9VWs5jtbK8apXfUm7vYtdfgpE9NS69AXisfzDUeqU13PMXtbFccFpcVwkMxKW9",
  "key10": "2soXWE3nEnBN45dTC4NmudseSfGeLCrp7Zw7fRG78u5imJPt6h8szzfH8rKij3pGtukPoWwUGGN6K5wNTBCacPPS",
  "key11": "4dH4J7x8LWWe14QwRivdfjShbApcD1RLn4S9MmxD1XKcS7ZTyKCkaDRr7e6p2uo74jMTuKJ8d5qQgi8n1L7PmVcE",
  "key12": "5uKfyYecN1FGUNikP6Lv9Wcrsegp68EtNETUtn7wPh6XwP3jBruuX76w9cg1B7Vivp6q8sib451NzuMwLT5A26kN",
  "key13": "3FiXmgRy496LBawBbJNbEeux97joSxLYq8dYsKxoZQgpQqRyEvHhq15NwdP4nmA2EhYMh8d1GgmkT2k5UwCtEx7A",
  "key14": "4drQKadEfRnhNsbwC4uq2pVVgrWHGdnGASBGMfT3em9RmpwjVAhSboFKGaZ4cGxnZK3KjTwW7uab556tLpyCoE4j",
  "key15": "5g9MENkwN9j8Efhbgoiy9Xv6ZpnS7gH4TyU1aezFiWGySwJ34EUYGTv8oKNMa2awoiudeLximDTJ4b1RcfeWJcrR",
  "key16": "4mTpic7cr5FBfhCrhbrXYqKbCf5GwpscBqjuoTHSjp1WSHYrCo7WHMquR5wzVFF94umtChpTZ3Rq18C6KyFVuRWR",
  "key17": "61HJwq8uontPRhf3X8iaLmUiVhBxhiBft555bUAvJ2EyFbsDBL23uCrcARNYEk37z38y2nBtg6Hr88L5X8AZ4dTa",
  "key18": "dLNefWr43a7RrL4e5t22ucwMMcPEh8FzVbC2j1uexS2euHvYA1d4swSujYoY894BGjVzK1HoBTxrVo9TdJK4QHB",
  "key19": "256RYdc8ZzafYhdwzoJuGCBCsKqzwNFHpEWZdHzAKwQsn2cYEkfCLRxRkCbct25LmQZZhWM5eMziVe328oxH7rXL",
  "key20": "5Tj25CBGrrhWG3s2cxWYHYmb5nM9BpLouoTGcj92YKeAbqiGBkRtwNyQfQRi2wv6EhJaacFGjFb6oUjhP1QRNaFx",
  "key21": "3jmynfRmTLqGG1xfHiJsnV4NrQyZgBN1mFR4QHaZQMtzM7cFkekygxpDYcbherrR253wb2LiqMw2DCDsbYGvdEMU",
  "key22": "27xjubc9M5LxUzBjRz2kJiei8Ngc7WmEzZBNo3yxUrEHda1FAv6tnoFswmntiwVbKbyMg1ovrF2zX63mNcfNNvpW",
  "key23": "3xRkqqMd4PFyyEB33a2DujwaP5VREhVEURMwxyDnoykzGvhocQP13xYLqfUqEL5MXapEaRKGuwExdBiKU3qopNsS",
  "key24": "2djzNd8KtyLc4YstJmxfFuT2y1WDfEwajhKvtkD1f8HyX2MumMvx62q8Gv9y9zKfRJfQTKRpC4dia6vXf3L9hTE4",
  "key25": "4DAVfbUKtizXXdb2acxjybcF865aK8n1v3UizpVa6cFKfhHUc9JJ6oYc1B7TCDSedruMaD2VzL8mxye8djFYA25t",
  "key26": "tqxbibgF4rKX34TUqtPWxwYf8BZNmt72cWK5YBmjrbNxXJfwLdXxRP26w7zD6upYmg3uAp4qSFzWxnkEmnM4rd3",
  "key27": "4o9gg4U4N6cCYmp1rzqHXcB4kTU2po3LCHDv8SYWuhqm4M7Ae7QjECnzfaNqMt8xFZo54kHfmJihsh7Z4HcQinLk",
  "key28": "xsfd3vbhfSGHi6FC7bxKnYe2Y7asQJ9YdRhZmGAMNU55A94T7uojio88dThkVDhKrUN1sWqQeerUwRWFH2UR5Ha",
  "key29": "53HPHWyRgUGHp3L4c4w5SCoSh76Nx9adp8HHdqosT482vDjnKwXcZb6gm4RYNjGxXqqh6yhDH6ZhxyX2Da996TXZ",
  "key30": "39T4gm52Ld2j9wJoHTd8jncGfHNDCArYYXCmh6xR2ZoNtZeuJYd8H1RTBC5yNGASPmPcGsann7iZj2z4FjApvPhq",
  "key31": "4j5embhtuSqxYs4YRRdVx5oYt9Zq4UEbU85jtwjrWnxSh6pFaj5BWL5sepodvieNp2BcUe4ZNty18HTJSwnsc23b",
  "key32": "4wTkcJvQMtsaK6eNW4wetDBiwoAU9umdpY7omHAA6JU8vPsChvQ86cdUkDXtHgeC97ziVyLB7c115uMp13nyTr43",
  "key33": "2rT6KiRvkHGnB4QeA1ShdXjaEnfiAiu4aZux3dMgyJZzUqBnsHn7krshDhPEmKQNujZbMcotdgTVfRnBXbGSCjy8",
  "key34": "3jRjdR3xEBbkrW2drq1vvMRDsKZoXC6n8F2jRMc8wVq4rY3RVTtNJMphtVPJz8RgfxtRmscLq7zBsR36ywfrRJoc",
  "key35": "2EaH7GtE7Pcc8ywGDTUjhBKbwFjhjFTWfou7WkoJbaYX4vcX8NFCCVWhds2RJap1zKREz3prcSqYM6En5REC2AWU",
  "key36": "4PoifjSDZgL9P2EUNBfbmEUSrmkvSHJB4wBfqkx3m1gwNvCEm5wxHoSTpDBwbMQa4px5deuyZVkjt3CsTz2vY6p9",
  "key37": "cBR5gAiwCUhV3WgPp4KvCCMB9CpBcVtdMTmwSxwjfvNwQQYpCgfNu82gczW8MuGPr98XDkdTBxouciEzYrRVsBc",
  "key38": "Az9EwtPeWrd2z4ntmtgQL4JgDK85Rxm7GUefGNjbU6v1PZCTHyV1tRog5rhbcDWbXQZqZhUYoH1YAUZiTcaXqCq",
  "key39": "35hckMLUvCui4uUAkTiZskD7AAUbarhGhPn73auttBVuAcBscHeybhUAZbFzYdQe73gNSYDqr9pnMjqHjdKkJFrD",
  "key40": "3rpSfCBL9KQWNg4Y8cFLFfLxbrgYdmp4FuWqeM1KQ1Nqqb8jBysJ8o7jb11EwkGcoCRinwtHBpw9A1LQCaqL7XPB",
  "key41": "4y3JgMbXHGaJA2VTFpJZyCFPrTYEi9dZnadQjK2ABjzStAXnnxGWRr9LfgGiKpNmnrAyhAVf81RHtoUpWT9tySqf"
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
