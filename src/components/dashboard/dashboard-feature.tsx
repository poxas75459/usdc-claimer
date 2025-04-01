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
    "p9vvupvwy8emQH1sjP7zTGdsDqsZeiHPmWhEPDmBRJjGbC9XBxwMT631FaJT8pjXtFN1DcKCqTMAui7J8M5QfU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUdZ7GboRcLutH1XMyDd5Wjr7fHoCmPvDVYzaTzFcAy6pYy9GRPCTkBz4EUdbMoThodQeA29j6j1MD9cKg55Z1u",
  "key1": "HCzwXBXfUpns5en2fhVyt31Zf2tnYaUgZCwBmd1VkUtzVNJMhWiU4J141VbhGUvSj9WmJuqNJuBQWB8F3xf71WF",
  "key2": "125eXZuVmdxiMzSx5hHDTyoZaeAcmBaJpCbUrAm6e3Kwh63CbHUyiZiTqvb8RPGniUpFfrBKtvCSnfjECEiZo3Ew",
  "key3": "2LRQxn9Hb8xGyfVxt3PnDhqYvDABwiWSwh3ys6dAVWV3VMjAoYo4JrhGY9SeAW9qLxWPUUPBR4kQKCuM3vXh2sS",
  "key4": "2ug8Wt7WYMnw7hFk3a1b8bYnyeAsSNqsJ1Ebtdmd3NnCHX6VKFFW5XPuN8xkLXj7dXceipa5QJhjK3vjoJLWC9ie",
  "key5": "4zhUhxtbQKDunQPgdP4ZeHriPCxJ1GkmTa888odyTL8b4ENPHuP5SWBv1zi1NkEnuQaCy82tnrLttB84dmePRjrT",
  "key6": "5VQhzmGYGkoXSn3SKd5U6MdEgeFkG9fGEzeRqh4G2j6qwYU8GhsE5aDNbRNkxEy7s5K35mrXYmxnKhFw9Dc4fpya",
  "key7": "36briAUeXBLVhSZyuNrHnP7iqqfxrUjcCAZQdtLWpnVs2rzXbQqaADRGyj6CXCpPQS95M47H5T1R7DpMGvVQA5jz",
  "key8": "5KfpF3s4DuCJF3M9JRokj5bVJbMzBZWDyx8gV25je7Xt56VCbirkiMP1gMZtYEj2Sd3AJon5DuRU42Uo89dqVmGV",
  "key9": "33qM3M2QMLoLukNCtKeJDBaPhYo3nQWTH6kv8LauNuCz5fLfrpUXRHzXDsHgcWyuLAgnPGkraa2GXkrR3nJ6Bk63",
  "key10": "4AL3sg2SuNmBiSmPbPHo1msYLt6UHM3YAQA6717pibXG7LgYWjBhmF5GHttkXG2YUHewpcEu2cRxufqAnEF3eYFg",
  "key11": "29tpnCqWBy8Gy3HD3AxipwXFQpTmoDo6dBccjYr2enHALJZ8BuaGMCYzS2cdgHLUgD5CFJL7rUmD8GgYYMeiRtNN",
  "key12": "2D7exvQDh9FojtAdnKo4nAhHGhnRzirQFkTLppgxypeBNYYNcj7iZQdW3gEZiryQeRPW1NdyhSQ81BTLWKHKaDQ1",
  "key13": "isp5wfCZ5r2GjHUmN2FQyGR1Ko9t1csv2hXf6kgurTKRCG6WkgREieHAiyU5tXty4fTe2V3ik5LaRK1UwLgV9ho",
  "key14": "3iebyKNucgdGGxKWwxK5jV1TN9TDTiUQtXFu3GP2oDrtho9vKQapEipRrS5aSsqr7XhV22WyungwUf87C2fWq8H2",
  "key15": "2HHHfR9zqX6Qjpsa37BfBxqXeb2mKnJLmi4iUsjab7bhnJcqfum28Sdji1mrjevxzf6Xv2f1q7aDXCE4vgLZVkSf",
  "key16": "4HwuvZ6v9Zak5hr8cNNJmzgKfrZXqE2xXPyfNVpoK75BdZ8xe54BsZ31uzABDs3z9Qg7YrtAJ4Kw5RdwZTZaqtDg",
  "key17": "2Qpn9jG6CnJwWEbXuWjx2Pvqemc299okuy4gGABGTdyAgszBm8N84tuFvExxYuWUWWpvHJz2NsCnGgAMTySHkxZt",
  "key18": "22Dr6geaCwUCs2PR3zcL6p1FPTirF36vq4g3vFez77TfptwF1HYSCEwkHN69h7sZqBBMKbQSf8N6den9nJHPu2BA",
  "key19": "55wA87dXsQxmU8iAiV4FEha8Mrt2MWoAbwCMpWDVSWNEzUmxvLKv9ut6LGAGZRoXBcfNQecyybTX6uSPKCXbFY34",
  "key20": "99VESR8X8jLQVzscsu4vELGtQLEBEDeUw4YWmDnePiQmvkhnnPaZZXpAnUzm6F5QSZT7uUKkfYAKVtn8pr1TQfN",
  "key21": "3ZdGcEcaBZQeXtwQ6758EAzyRmPsG85rM1jiYbG9SjzqBgLqQBZsf2ADCAhDyEn42qnLdTXRwYxfxbQdWBN6HYt",
  "key22": "2btyZriWygUC4kTj3qkSY3yUE4DgY5VnMNE4UDveGkj12igUvrff8bBQ8YcUqdmDwWy3883izpQGN2HfXxAfyALA",
  "key23": "TyuyroGtrkqaNoFV2p9mxGokjWrb3hmBVti23sWW3TzZco7GNTZbZEmkK39XVukqorF8KjKShgMB7sRYft9V6uc",
  "key24": "ukaFkyLuRuBro7joQWi5TEMZdnMLUjfNChJGFxmV8aQeSu2mWGhtxyYyUosZtJZjychQXFFYMm5sD7BYnrGAQUL",
  "key25": "N41xYGGHV3jJTUTA6UFNxgcrELvYSZmaycBMeUzxWEgNEpJcuZbJxdfjyjmvwrk68BEKf73QLW6BaEbUzruExte",
  "key26": "53GkNm2pBzEqXPbaKnwNNpmVAzBwFjqNZGapD6TL3R1uR9t7mMZboiXGMN1j1rXbvhn7dpWQ7csaSHFusc9RdBrA",
  "key27": "qrw8Jx9dJc5s8MnWs3i7xsUoEUEv1qpYfT4gUEQKi8y3cUvPAbvKSkXd4WcMBBRPt5ukbLrc1rou52oAZpaUKm5",
  "key28": "5dcmA17oyjRz8416QS1ZB28CBk2XVpL52o1Fm88VjsezB8CBELRL4SU3Ra6mXLf3EM1hr8CRRnBrzhdWnF45tLAK",
  "key29": "2tbuj1QCZmKbMQmd15jravhagiGVaJ6GRsN2RyWpDfW9tEQPuaENVH8UHM6JBxqmEF9Y2pPAMLRFKqge4YUPqKe2",
  "key30": "593tMw5R5SWhUQzNU3qgq58KGXiq6ryj2PXDyXHMid1iUKZvx9UxfM5r1hSKF5cpbKpiFcfFsbcdigDfsWAUowLc",
  "key31": "jR923WLsV8G4PHR52pBavEBk5gui9AwuiXrVVEJHX7NpfP7omrs1cqXsw5tBXuSuZk4AHaLLhEmCscW2SyK4CdL",
  "key32": "34Mukb8UP1mhCB8NKCZWgvQHJRHFwUmxEWNVwXDos3oJ7XKBxoAGHGZNaqPKXQQ5zkVta9EMKszSgjGdakC6i7E4",
  "key33": "3X42C2Tj1AjPiJM4V1GiTPtn1p5toFSFPRcgsBMCrBCfGdxhQT8Kis7ch77EVeTcVR8M5djn8WG3NsvsidmK716B",
  "key34": "3nC5VsH6birZ8ENaSgjfkRNRpVdUo9a3NW7KM8HGgM276KDASpXEbeGUqsiEBanJu4ADtePe8g9ty4v3XWgo7ePE",
  "key35": "5QyuCzZwRvQnjvcBnATB7XymbNuCMHezLnjJRq9Jf5EUvPK9fd4hYNUu7nqCKePR85J1hf6EAiaAtPcGAiSTa32M",
  "key36": "31DmwK1nkxukqVXrNYVPvd9KXruDcR9eYfTCi4kpe3fvGwN2nSXedrVUH1ZDZoWoLEai2CLNWn3xknLop6CS3CHZ",
  "key37": "3cSMfvV9mhXnc9R4AtQUdhBA8YsjmkHKVm8KtMLZyCw3Q1QPwSHgtegcuuGo9UAyxQTq95xEF4m733gPNUF9GJH6",
  "key38": "36kvoppWtZYw38SocFeGvvXZLHc47LyaQjnyv1KEyfLRG1KUd3eW2yrzunYuUapoBUr1XChjSaEPNYRZZQtDUti5",
  "key39": "yAuSARrzmgbSrDJPJnQaVa3FfZPnH2PMKXHY7w52cUGFpF2J9C7MnZNcbvEUEsGKfxSzTp8trVczFDR4MfeVcZH",
  "key40": "NRPK43vvva3ckFBwZVoGAUbaDgvbr49rcjCW6sBqKvW8C5dmZFHrtvnhUoZjV14bUH141CZq43S4tL6VWaqUVB3",
  "key41": "2FR8q4iYGUAyRiWHiEikmSPaUAyvxyhKZ1v95R17iACsVsD7HsnfMmTPaK57tLmhWEuwLca41R7GjW4sgoSLMkMt"
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
