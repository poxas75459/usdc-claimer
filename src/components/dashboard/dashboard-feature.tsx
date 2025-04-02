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
    "55jyfLRBnsqQC5x8xLfGmoiydn6aqgG5x5dzvEhDfXGgHLFSGhnF1S6ptMBEYYhv31skd6iXek1EyCXdwzMrAqDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KY3U8wY2Pf3bfMXoYp5B8VaB9oZGyhX6tN5uFcx4ZPDDmV14et1rzKNWiFKaefK7NkdsgqtbvvV8Ut4k5rWdQCX",
  "key1": "4F98R3c7RUfsKhMPGGyY98Poik3NZrAVrYdiT5KChj9XYmBdfGFAx9TdajWXPrEP3gHAbnmquDp1hJnxtUj4Vf5M",
  "key2": "3JQujgpvbaZ8LS35UnGFxtYeVWuBym1bhgs3bzAT6SPxqY1zdyxqgJURrYUy1s4RimhNFH5Tczek6nJ6w3Zs97rM",
  "key3": "5kZKDHXmcvtY1UQqvpSRS1uDvZ2A8ztJQMWDtxwgjP1CJ2mW3nH2Emyhezm5UYLNBpoULXVdQw1QYGQtSKkv5bzM",
  "key4": "2gakxWRZ3AgWfDLJgj6Ua22Jw4vuYtkYkg9qqc1dfUUv3hp6HjiW3XxnkZqpfF3piQA2YKKvX396CKTNGTs6BP2L",
  "key5": "2EpJSYEDLxtQaBK9fKHmwfhJZGBajpLur7VXNbEU9AUVMp5V8VJAnn9Hh5qtpyxYaEFsPESU2y8dLR2uLYnX3JEK",
  "key6": "4u83sfDsVYFEwZdQwjT2734yNWP4zaaweBNyxHRam4dTVY5b1pXwRwMxMiU6FnrwpyMzg6EJVeFFP95YEAnvpMQM",
  "key7": "3knD8yzNTkGf7pucfiU9c1jWE7rjb23ZGJESHCAuu7oDbTLpRhKswyEg3p7UUD5zv1vdaZZWdY4rHVda6Fnsnb4E",
  "key8": "4N9gRgjZGpR7McfQWaGx15Xy8GzjaJ8rgDDPr94MWVBvgKkH5jxTM5G8mYfS2g6M46RuxKbor6f6UcABdKZoHeGt",
  "key9": "agk37NFRjHvNaLFYnuM3trrtLafywH4PS2rCTdxdWLrVhtxtATRPKMAXhbB7fM2GdFuk5JR4hh2dPJepg1DWxUW",
  "key10": "4jakNLjnztWg3C8XMEvUB4H15tkbQyWfmxyuRqncXxVsD9K3EEEWhosibJKPrssRySGS2grBHJw53HRSnhJkJTMT",
  "key11": "YS7g5UKqMgTzzSDmm5JyQqYDD4u9CujCPtZo3GnWTLTWvMuwdccGqE8nj3ELYKnLUHLjKkKw2G9vs3MtnxuVHap",
  "key12": "th9KBfKbUTpaETxGaWmmEcHqCgurmTdBxCaxCKbAdEGUfeX5tTGJYH7a6vuxD7otaQN57ZoAG1X7nzyRU1Knsxa",
  "key13": "4VR9H2DLrKvuw3Fp7u9y75sSteb9xNCHV2p5aSY1SJBgGxXC8DTqL1dvGXoUVwL2FuktfP5FXQmQ5PgsuPwpT455",
  "key14": "2Q3pXFELy5bL5DYTWoNDvu8GWvHv5WGqpJzFSctGxCbF9s6MyRcCPAbedcNgPdBPDhW4mftR9stJkwRvgNtqPP3V",
  "key15": "2RAZnYgQMSmMeYxCvYA4h2RSuJJpkcRsSr7PyBiemvrxn9RNAHvFtg2Hu4YeXLqtTjQKK5F4iot5yK3JbeeaPtuP",
  "key16": "67WhFamqzfdREyUzS1SSgj9nGPCJhnBJGvtThXu3VT8uDA9cqySy5daNx4mn9utYMvbvxQdt5YKR5VC9nsYN2wSY",
  "key17": "25sta2vonmsAE6x515SQfH8ioz8tgcLhyXtUw1Lh4zZySYkG2iyp68x7pFqo23WboiywCat8XhcsjgtQfHubv6mY",
  "key18": "5MXYzUAP75GGFVWKbTcC7rtU4ygJzKVx7t9DMaCrj5Hm76dN77vaZa1K4ufQHdGy8osnGdMjkBH7dBytjZe4M46T",
  "key19": "5kpiL38Ti9jPxRBsTNLoHwhfMsfoBNKwvhSWLiJYtT32wpidyKTGPXh35GzzP74BrzVnvKRJrA5mvaJVw4Yfj3bX",
  "key20": "34JzHUhu57GEF21Vz92JA7K8NFUhQJM3DKRA1hqF8SUhedxDdBmSC5rVuBUUkUTrwoVnNK8zV7MvpAkCFWxMgRsD",
  "key21": "2VzAh3vtPmF8zy23HYdzQhote7WVhci5eZbdfjvkPoTqAfq8YbRMFDggJJzLUMaLqQFRYTVWefJeJ4NLw9DM5z4o",
  "key22": "5oM5gE8aMnR4q3j8shvm8P87pCQupYXuKeo2Sky6Xm1pnCRHmXzNjcXhAXDy7rK8VJz8Na4vCY8jFVsAJvVZ1EXt",
  "key23": "5USC5g67MXXJbrQ6r4q81scJcBnnJE2kuHdA1UcWUKG4RE1CKgBsfHxJPJDrXfXfY8h6RizJGaVbpjVSn4kSerPs",
  "key24": "364J1jXxoowaXyqe4trPHvewMVh1xPFzSfY24PHhRL8fWVawLm17upNSCsshKbWquNLG3eWedwrDmdA74ER5eCK3",
  "key25": "5vLGvpQ2MSbVeycNbSqydEGJRbgFcRGNsFDtNTgSBdC1PbTBtYKLf9hwft89dV8MKsqMfohDAu2tuxaieeDQxR7D",
  "key26": "2iiJb1XEwTbrLaAUqjx3HZo4hfcS4ujns9DB8Bp3HYVExf4Lc239RpWDMfFqYAvoUXkpD7RUZiJMJJkgsv5LXP4F",
  "key27": "3RUPf6pSRN1ieGz4DdK2qTXyei8wvgvfJaatdmKrbwofyhxk6gNrd1VEt3Ujc8yPANfb6vRJ9AE9aAuJyppwkagG",
  "key28": "5gw5rq9DUxYJvYTw5YQJUQRPWTQyHoZCkdwmKHgjULuqiDzKurZ8SxiyCiMNhUt4vVPGCNnFii6YTqUCqTm6nhiP",
  "key29": "3VMLXMMzfX7v8E13JsWuEQ6j4uuijfn7JcHx5Ch1cj2iXmKabkqQYvwrLze56Yraj6CS6ayvKEHuugfXLkJtBFUw",
  "key30": "4jR6X1SPe4xZkGBCick5TM4e1BpK4Ft7z5ZxGUEdcKhLudtK1C2SsMquEimKg8uXswTrd7BykGpfbtCbdQGEiHSq",
  "key31": "2NEnND94hwukZsN6EXcmDfCpfMrj4iv1XPtYFvq13U5rdk137dfUpdsWpbnTJHC6UVmNcEnPRP3mvhvuPYnah53m",
  "key32": "3hgLMaicEA7T2rtBGGkhAf22qMz5zm6zRDk5Y5hyH9cFg19mCWgetuqfyMcrooLikNHiMkFrfq7AArRpJPh8perU",
  "key33": "4Uk8ftVbefTme38GYyAirq5985FzHtcWtHS8AumRUVN5Rh9eevneVazi5ifoFGcPhhj6W4rNrdc7fvNFFcsDxVvF",
  "key34": "6Xcn6mEdxcVvB6jJ9TRnxukwpupFaERJL6MYTiM2VJPRQEqBYwHu2fSyxKw2DzgcLFUCmyoVW66GJk4GoLSVYnd",
  "key35": "SuS7RdT5VuxsCuoHgZTiBFux4RHR1NWmkiCeFjxCEfBVCScbf4NNK3JrVeumqkkWuezyyt6VCu87Cbnzq6cD9aK",
  "key36": "2wEMyWkHvwdAQh4gjP2DzDoYa1WX6c5Zaw1gv3LPsCyvJ1xM6fpcqWCGAGQ4FCa5UkC3wQAnicZGrAeu6KAr4Mum",
  "key37": "5drdaL26Kh7BYswHjbiWW6GnREzcHVrkwajqYppC5xDWUawq69MpYVbXn5Pi1H1sAWyJUv3PcnNWBx2b1VjtSwUS",
  "key38": "2BQqEwr3e1cGwZ7L6xaPGFZHjrSGJPztpQMUnckczTQVGPceAfzpdmqTfuWEJs8tXQg6VCnGgexeQKdiQqycH3Ea",
  "key39": "2v1MLZLnvsJyE2f8vvHhwDmtMYyMvXCuc5ZXBBuY91eVc6GFs9UXwpyk7zfmdw6WvJKER7Wj9m9H7WYL8egjT6sM",
  "key40": "RUNp1i2b8s5bj7Gif9bBNSs4q7zAwJSUgszHRcRYxpJEHBLBsEkvqLWHnTKykmqpDLK8UApQVhjAytA27ZwJmES",
  "key41": "5WJ8JhEYiM8oxG9uX6xpvfynHdacskMeSH75apr8yMvHz91Wjz7BDYDKJgFxaFZ3pCT1rAnqnWkS8SoZB2Wu62CB"
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
