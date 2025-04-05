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
    "3ymQMpbjH4LYLdfb56Z2KEqg6L6Gy5dg7qHRqgNnEu6Sx3yzHdY4JKQYTdq9f59UWSYQLYq6icNivaTiD1H5JqC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jyyUSjkpp3ikyjRbZ3NBHC2EPb1TQiURkwVpm2rx9Hm8UorJkXGtSE3F6KKfcFqbuZiQE1VR313mN5UpGtkusyR",
  "key1": "4Aq6kNUNaLa1xWY4AhXsAR5Xjgd6NJbJDMAECwTibEERs22uPQpZTZBcZcfP1XX4e9Ycv4VoKFbwTh9cnpPusuBi",
  "key2": "YFALFy6dDLk3UMdrmTBQgEfVxjGJKJS2Gy62shdFa953VCRs1kBkjGo3dNDSfSEwtd6x7yq57T4pui118xPZqs9",
  "key3": "2vthQGZNJudxqd9sTcVpAwYgDBvk215Kq47bfTjyuS6NS7zBLsdaVFpZ99k45L7a5fD3NRhHZxRkjPPVYfC8S97L",
  "key4": "22iCr9AsDVbawSDmiJPBbSDKAntcque8wEzSKxx13o5HoakRqwpF5vw7P1cdrjFncW6KQcECVCeeFc1qT3MBRjmT",
  "key5": "3KZTwdNa8qGWdzRxUjX9Ct9qQAaEVi4BBKe1vLDRzmda6TV2cHjETCvSDkXYfHh7Rt7nukG5ZaRQga67ee1BjDrQ",
  "key6": "5fivCRfwiFVcqLbPRRqSebQ9hioGsrZRiSvH4cm1y1MnM83c4oef5b8igxWjjJXCsVnyExT6oycN1B4gXUWAJMaR",
  "key7": "4q4TjwzAXbY77NoGT7demoXzPoZtx6oBEH9WJtkyabzd5VFsF1iHii3P8pCgzTU55FAggJpfqNw3fK6H2hpMJsTU",
  "key8": "2w6sgGjFzqnQCUxu2GEvZGK1pygytFQ8Sgmn488VMH5W1xPQmGfQZEeeXukv538MCP1qZojaiTpbiJf3XxrUU2Mb",
  "key9": "3YY7MA8RpbsuCQAJ8vdJnuLkZX6RHZ9eFnpG7tJB6wNzq2GjHN7gX6ymmUYFo3bjCuYqwBFnJ6XCqCHiQbCzwSm5",
  "key10": "45mYQZzuPBADrsvzzViRKn2racXHNq4yzgo3Cfyxtqrm1Uh2kMFSdJoXP1GVWGBv6zDo5M14ApVRuuNy6xESHnzH",
  "key11": "5fVJEVe6q24bn5BQD16pmvgYu6R2w9D4HDRCzyRNf2QggH7L5H1yA5t9m2PPAfjKXXs6cgRMnpYtmZmYHQnh379T",
  "key12": "2GVY1EjsYdDdvDk2sK6myzNUPGzWdJ8VHGhbiyaRPseqoi6EE63UFhzN4TmXC7cQEdZz5gu5YcZ3v1KNaMvuevZ1",
  "key13": "5muZEaKKsGVmga3maZJLzjz8dK6QX7ydpAzjjYQzxcx8oP5dPUY48yHTXdhk9qRrymeEhaqWwe6Sn3E5xaXyncJa",
  "key14": "VMtQCXGatwLz2jaAyo9Bv61XEfmvC7E4vFSsYRKFeqjbRxTMhGN5y2RVTWVGHpzYBWcTMaqjiyhDjM7BtsjuiQH",
  "key15": "2RgyGwJZJYURTkbN5kEdzioALKUn56Q8CbZ6cSxVXs7XtD6ynqFBzgymTZAKHZKiDhuYN2qMqdwTEdi5apkQaNXD",
  "key16": "2AqGYwV7nNF3FchSFL38Fsg3pwuu2gJV7kMMJRPRNDUJUdujDrcg2bG1WcQhR8xa9f1P3nCfq5GmwCSbxfv4xKC7",
  "key17": "5zY363WZvDcQofyjqw44Fq3ux38XLJndPFDTkEJNqRpTPB9dVb1QZHiA5CznC5uHF7AKuuusZChHvYXxVZheqyMe",
  "key18": "5QrqRNwU6U4T8YdmJ8iWfWqorYA8e5KdZTTYeX6ogLEwNkyqeR3wxhFWs4gUUmKQnDK2Hx4Burm632qanKwqDWPS",
  "key19": "A3ng83ri49zi9dR2xYCUdXoicqrxm4L4U2GVwfPYh48E4aEokw2x5uhBwzygqttKheCHWE8U5YjjzF8BT21ozHx",
  "key20": "3ixyMF6AD53qaRh6QoLRbSbpxU9oxQ9XyzMxsP3yJpFsc9QjZhSf11rfefgfQQK7HwoDQ4M2nDhRMUtD8sDaY6Gv",
  "key21": "3pGhLYAUuiF7iMjrwfhnvVrtEN4eVHD9AGhceKNfdn8adTET8Mi6rvu7f9WNPGeNMQZz9AXSEt2jqWydbL1sTMNw",
  "key22": "2SuXQeV9pHqfjcmY2i2VdWzVGnRN2TBGsj9FVdgRL91YkcAKbBpxjPDfwXFsAwgBqFMzx7gBmgWrtzswKAQNErV",
  "key23": "29jJ3ENk51MhoNPxeoyWxDD8GqeqpBNziJGDbfrVePThi2gyXWosAPeRKfetBnizwyVWBYZ1234Vzf2V2MjrgYCp",
  "key24": "3tLyadKwKx2KCG93bvXKnf4LekpSKpZDzaHig8wsoUdGXzkTEsELfre6cv1LMGNbe6oxNtsEm4TbYCX3PNu6nv2R",
  "key25": "672qF8JT2khTe5QqaZbjdiUyDBttVc1paLPMKVfjW2anYtWs2bvyDW3fCM6kd3pebfwBdVZ58jCy297PkFbFnFm7",
  "key26": "38VyUYXUJs28BnuLv3zk2zSqifNJPNt5DLnouwKCGAZYb5JcqoFC4PJomy3hXK7ZNwtRtEW9DufG6FthHjW65Yk6",
  "key27": "2qKcJPtgToqMS58H3D13wqioCeBJ5kYmWsEckug3jewudqUGDPxvhSrxjh6pKpkWdBDNKkQi99GcRRbhnxgWStZQ",
  "key28": "j8jxFWPVE2oYb57tc9aSeBU7a7tTY5TSBbYDQUPBgsKkvLfGoAFE9cPZFAnLPrfKEznjpkDBG2HEaf8e8ctKftt",
  "key29": "2VWdeFUW9j3f6gMHopbzFX5jYSm5tYyVyC6h8nF7QznApVbwFypu7Xuc8RzJWxiZFr6RM9tf5iHFxc2kFe5hNjQG",
  "key30": "3kSZ3h3isRnjnVmuBmfFHqxdgH8tF2y8iCMQbbbJ81fsX1iiRxsueF7Y8LLetn5venzpQpr2g4MYgN8xvXDNJbNa",
  "key31": "2MC6bNSh2rGsczSvz3zsYf1Ctrx9afgDsKwunhH9HAuzVo1QW8oh9TD1JTrBkF5dFmCwxTmr95qgghVcZFo2Ht27",
  "key32": "28NAi8tCGTCZtFpsztZt1utAh2pvnAyrKkNpFEUSkuUtpDYrShCNU8sB2Ehmz8qYo1uxjhnHspZ8xUXKSH2278g4",
  "key33": "4BtNdmhmAeQHUDfMvVJn48wzRy6bpaTwMuo2BQ6ghj4ELXBL2gZVaegfPWexDZ41UD2fRwnG9ZNe1BisA5g4mBzG",
  "key34": "4B3fnWTzUkt8BUv4H3yZKdpgF9NFHazswGnGGB1AqnS44XioCeUHcuRXGGsDSQ1xLqgpDEjWCzhBqM63BZsGYue4",
  "key35": "5B4xGuGZcQ8h4mDT5dUcDxxCbqHj1kQvovoAgbZgv5UPUygwVZyfQwSWNwMsPooJYtiDQTNVunMPENCfVZ93oTqF",
  "key36": "4ZvxTeKxKXw45YbRH9qG1ok1BHHmXaQ3AWycnwkePLyazAUdz1qpbUcv1ZcAdNpKke5u81Nr1ChYT1FhUeRPQaQN",
  "key37": "Tp5qCNYGXkDGCEWDJZxqJk2hXvLhsyCLLc43t2QePY3mwifRmDf7BUSRjfn3eW3LwBKrTFaZ2fqwvT3yXaG5XVe",
  "key38": "d7oocQTVy73Yatxk6PmXxv5BhmwtEEqhZEAiiLPht8EguiqQ5UkTri6nKGA6XbopqUK8PXsqiJnptfY7i7bTRvo"
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
