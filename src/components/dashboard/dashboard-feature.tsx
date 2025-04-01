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
    "37roiAmDAanE992iGa2oAdvC1ECEGt4en9U4SbRcM66u44cwG9SXH7KT6H7gBWfzoXMFFBqFHWc5csSJF9B9P4z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zZatLr8fi1XqkC2qeC7i1hF6HK8VTrQSUcU7TJjhxzJEFedDvy7FvVW7THeaFwawUPsWrcp8ZnxRczkFPZRNDPh",
  "key1": "5yHiUgNAJVFZqQPBJ2ycd6pzJXDpD5igUBEyAWczLCfmZXDMLF26ttEFJEFhoJRwkuRL4KmETtmwN3DU7kZJ3ueq",
  "key2": "3m6LFMomKrDEgoZ8qFE8Y8B6Ti2ps2seZ82chvcBp3zsPpVwrV5JW46eApFQufs25ZHj2r86j12fnecxmvovfBUQ",
  "key3": "2eNVWHRjS38JfjkKY37uhEyosapxtzT4SJ4sw9LEYHy1tbEUvAGMG21jM3WfCy2tEBXeNAv59yv6CxfeVdUYJCiw",
  "key4": "2LDgRUjpGNFq3wpJXML6qiWkEkVxn1GVQx3E9AG25NPMFdvwDGN8ij28JMQukKk4HSLdCG2sqEn6FCVUVfoBFsNs",
  "key5": "2byTQkfktTUXu4i8JuYbAFn4uTaFq6ajPXcR4mHbHBYfjQFkwHcd68E6ZTbe42mFJYdL1TB3vFUkQXYCNRDHwinZ",
  "key6": "2q413VZrNiiMBgBdc1Hc9Wm4W74YjruZsymcFvLBzqaVUBa1MddCa5H4pNxxMdeeQNMcSqQKaKZgKFPRrCU4hqdu",
  "key7": "3kzPG2ydeb1Z2RK7M7mzbPcVitULGQzHZqZq29QGHawg4viKMDgtxmhMhipQhHnC85hNoaGoPh8uteSM56ssrwyc",
  "key8": "2U4Fx938RAcQRKpk5R5P5JxtexbxrpdoZLENxJXKgtiwNBwqchWym4J6uvtkcpuTtFdM9UpqCm3z3WhMXPLQRUnh",
  "key9": "27VhAExLAkviaQZRZnchgGMatE68AfMwG7AZTukgkXtVDfzf8fPBCqHiHkSH4RU8mJxxXjSSUSWZhNV4QkZ6QLLS",
  "key10": "5goB4VgKPHDQiKAzdvh3UQVcPdzyEtRDcQhdBdBQdohrTax8Rj7EYax7GLctZt6wvxKnDhpoZncQKuxzkiRJnaN6",
  "key11": "63kHVHJL5zkeFstAyQmRXuJkfGmKiJ1gYzUNCcj7RWW98fAQdpW6TJd4FdVjmwxqnn6Eh9ys9acsKHnrtpSV5KpS",
  "key12": "4JbUWKgacrXuYwuUa5pbtj9LDPUNcE9WDYJcxmBUFHha83N4vsyP5fbABzNJdUtS5H57d4Ba1fYoVBW9XNLkWk4o",
  "key13": "4ctveuco1SRuh7NmguwNXNjzhXA8SGEZjFTzCfrL7UUq4QAjv2vMJ41uCPUAAv1gFkmZCESHyF8e3MTxq4LuUnMF",
  "key14": "4Q6kar828dNbsZt8w4dnjzDLroKzqUhaPzVXae3TDwNoikguf4SEbXs85rrzbc9iyWypMiXTFUV3uCuCSUF9bHkn",
  "key15": "4nYY1JbccfVzUTmJApq9qzfcQMtSLvM9hytVKvXdjP8pPJ2GvExW3z4k8kpFoRSahC2XeFrU4mXviHCisT6S7Duy",
  "key16": "48jUGw518eqhyg59nSMRuvgoXaa9ok4FTUp2cMoE4ant4qcYmqBkHiUNteTs6MGnaV7ttfFN6SZu97VCtRF4is9H",
  "key17": "B8M1tQzk7121LvxJ4knUMnBETnW4RTpKCYo1GXU1Ya62nxe3aBnWvTLCe7BiM9d4SmKWhkoj8Pefm5EQCTrP84W",
  "key18": "3rrCynsu4gzNPCvGr9fH7sFr3o3osqSqur3nCTnEJvo8ETFvpkpvHRRoiPNCBVkKNYPniXwZCpBL2oPJYPU2JSj9",
  "key19": "5xtRiUe28sBqQJb3eGgG5H94LhuY2Hwg9onAKMjhw7zywJ2aeZrvt77yxXwg7hnG5MBAviKJhDv4fFn6mQvXo5WZ",
  "key20": "5Cm4YenJA1ymhBtByMKKmMWKBJgunvBkhxVS9K1WapFV2jAJiDGzMAX1N4pSn2yBXHz4UbLBfN4xnytRNUuknapX",
  "key21": "29wTco9Ja6Wx5W4mFJkot9Nq51EpbVDp92QJFrBGv49nCgeFAYVkHgrjT1Ms52Xiy5YHWWBFsTr87vyAbVSWsFGN",
  "key22": "2bF5eU4Z8HFUYSJgLEGNtChtKpPmJ88PNT1gspyf97FHdcvn72CkNf2CnSDsNS8iRZLkfPHHiaMootVfwpj1dU56",
  "key23": "5RPh7hZ9Gw61HXWWsEpVYtNR876xchRAUf8h4DfMMUm4HpsMETXaekWTyKpoxREBQ2MbtPG2NogSRSKm1SAcBqsJ",
  "key24": "2bwFiJVE2cEEnjALhriqqyXzuAQY5oobiBMA3DsWBU59bCudv3EBEqHyGDDKDHSumnPi5pirzwjpSNvvwbXdEq5N",
  "key25": "3PWbKwVzFHebDH8QqPWeBCUTSB2qi7vmRw5QfQNNfBhbjz4NvuGSSdwjGG2yM2BaGirSHVfVmBJEmPajFGGYREnV",
  "key26": "SVimg8hg9zzGcgSvrAqX2Y5Y8xa91XHnUaDyob61pkxHFsjpn6tRMvHvTX3TNh8m2CgzCUFWT2LBAaJeWVBXzCJ",
  "key27": "3S6coAXDSRzPn9Eigon4Qj5geCg9JeLWXRJZsrbQLhDdo8BwDK7BAboHkv8MrxJ9o7Gj6HqkcgR1KMJ3jJ9Rb7kB",
  "key28": "5ipTRYqWvc6si9mHW9TVWJvP8ERWcS3SfeT8Av6zkEmf67wxMJzrnkKPzAHwRwYdaYjFUX6U6Z58aqnkcpmdouvy",
  "key29": "4wXNydTM1bzBv7J8kLozpVinohu1P6otzEbB9TXNxRCHjeYNjGh5Uxd4BR897SiCGwEjtzUhHBFFNyxUxn8Ccep6",
  "key30": "4pxsEDB8eu5UhfyqWop3zLmYHkPC6KYTzhNHLRhnNTiraUsRscyxLJZDubXD4t9fpMm5m84JZoDfog5xz1bpCEXu",
  "key31": "5vuC31U89VWBq8nFHMG2QXqhv3MTZRh35bKevGy9VBrAieEhVhaJUAqKb2CSssjv3YveyuxotCaJMybb1Stp8gRD",
  "key32": "628ueyzxDxyDnG4619FxdpSdnrnnBwN3QPQvA4PwG21mdtVYTYT4kuYvVM3FwVSoi98iGKkeTQg2XghyWTszJijM",
  "key33": "a9eW1g7maESF4dC6PADeQb3ppe2Eh9p6ShAbKCVqKDPvjFCcZBQ6SM5NwCerTbwbnKMP898KsmuKK2TyBjaFyft",
  "key34": "5JVxqfDiJiZdBbK5hNy9qPgwSAs3KKpkk9QoG8kcWqRYHvpF4m8GHjyXrSShYjBxRzKiM2yddTUez9iUEsbBvmhg",
  "key35": "reCkphoFgpBk8oxrnwPAa8gN712V7BkXiZGTme9RnCzUytNkjJTpC97kphuS2rBUbJq6zySzUUmcjTZTuvNU9pQ",
  "key36": "tDLxwtFWH8yyT8As9F3V3m8u67qgcWqnfeJGVvYZ5vNb2Hp4VzZtAF5cpcqu76mR7RUbw8QdkPWwMV6ebVK4DW8",
  "key37": "232ATZ2D2i6Y4nnB4cVLtkHfcCoirMaq2H5eCBHYinGB5eYNR5EfqFgtWrZYBhr3LJi3LSi6RnXKjd2bgkRLh1PE",
  "key38": "4nsHBxvsbA6dLJJh49wjjWAw7NLwZjdHLdzFYuixKXrQkXNfz1ktXrjYSbJzE8qMdiEnK2v1Dd7khqYqqgZeJduJ",
  "key39": "2pqE2f8x7CjAeTsHjwXq6appKJdt9BMQVUFcE6mq5Dm7eesJevhHtvrFnid9KE2oCCpAQWscStzokKrGEoJV3JAE",
  "key40": "4UywC1qCjs3xQeWM1eFxwLC3nXfRGQ2F6me5PQW3UncPzoSCeU8JuNy9SNXrMCA3s2dd1b6BjHRoLA97gFztTmj2",
  "key41": "2AU1aj7tfS9ns6gJnM8tPx6LvVeiHgw4GpQSpNjRBpkdJMkTdrPUtQ58kEzvQPQ7qo7bGGeupHsGWCesWbpHfJah",
  "key42": "2sFXYevLSCZ2WNx1QwfHFPRzz7waD1JVynZNp7AdbXbuaGKu7JoKKu6pmmUEaMhdeeyFyBZyXCiSN3Ti7W11SyEK",
  "key43": "qMohgm4rDRfZyVtvhwP4BUFoU7LQNGENYrswhqE2iByoV15tpEiQAwRbwoWXRgg4b21ggnAWDUCZzucaX9QmCxa",
  "key44": "5hnZvBn7MJRZtmQuHeoW5mFf5KFioXPdHwZ9bTLnwGHU9W3zvaZ4zsKafGUXGT6yF77oG38TUeTEPLdMRQJEHfaT",
  "key45": "5Rg8dWrsWK7mj59rdDK3PTQ65MvTBW4MY8SRPg6XJZo4uqXL4Dvs8LPsbgf74c6Cq7u86cSoGE3sVGTueQKP5JvV",
  "key46": "tf9CNeuQQueRRqB3FG9NbJFjRyns3D8PyvcDeN7cZDj8uRr2WHqyxdB3QEBTHXjaMY2c5N98aHEDdtd9KsjUBSJ"
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
