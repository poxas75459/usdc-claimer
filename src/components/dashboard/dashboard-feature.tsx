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
    "221zAkMhWD2WjG59bPJAqqWc4x6L3oDeoa2VXDe24ChCu4eLun6BzZWz2Gvd3KZXXgRo3f59chDj2WDFoiVRiAHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vRaSxnUR8K5PM24PWwTCa8KcoXxGrdsqH6B9pypkKUe2PVYMmqBAk2zWJBPuRkE9PHrAFiX8RZjhfkaWEwa7K4K",
  "key1": "2WhV88BMKtjHcQh9v1kBYtTypx4wEeSDGXwNAjuwrqLACuogjkbMvYTQNTduH81ZbC3GKXabtfutm81hiwNRhaC3",
  "key2": "4QAMhj8mwEWs6KT1G4tThQ1J3D2ybQEzcLsRddkfavKGGe1sJtHcjKNMHsk7q2kbxn2yHU7bnSLBMU45nhKvjVfZ",
  "key3": "3YcbCLSWJ5V9ixmSwZcyhbRMsCJz47rQja46Qbwt2riKBG8MeGymQbvFj1uYRdpqQNYbuWYNxEbT1JD5TLvRaBPc",
  "key4": "4oUUFthsFa9dApDSBtqkPcgnZfkGZ15XrvPi1s2bA8fLvAwm6aWkoSQJj19G3VZJFhDy4mVYAW8Gx94vooMGmwUi",
  "key5": "4V9JUrBDnSUNcWDXYU47e8e4PpXRcQfvwjwGSvowTWvfMJToCuBzciiD6irJJyXFyM6Kz9Wn2CkERdrHoKQPxbSQ",
  "key6": "5m34zs8Zbcz8CcXX8R3GKPYMW14q8AchE8xT35LiGAYgeRPyu58i3NwdNfnht99cVMEgSE9HsWjmVxS2YSg87Fjp",
  "key7": "34YvU4ugNUudtNqeSfSe3w49Zn2ZLRYeJcjqaGHspczPah8iPA6qchG68LXncqAwDHY2nucMxFidjt1hf5C7oeL8",
  "key8": "3AjKUgSSifMaeYoKZuBcJsvdd7rAaStZeEb9DCotGUEUU7CFVZdmjCmWFqu7SsLER3Pma8r6uWwN9kEyMcLAs8LE",
  "key9": "3kCJmEdDmGqLRLL3TBgK5s8jqE3U9JRedryrWPSNxQPBtwyHjRYah8YXcZfejWg3jsY5iXs1dUpWJt7ocHhJbL7y",
  "key10": "47RRma2UCmDVNxqT3BHfMxRgucm79weZkuvGLJX8ndurFkZzEH4xA23k4tmSRFPLf8cs78tMBSHSNySTzsD1duQJ",
  "key11": "5rAosHaYoPPd7J83mnVapBBXpiaX5qBPJhiXMLjkEXvZ4T5ahniCHb73ed5g1h4pEGCK28EAtNGYY8vhhHZfjeFZ",
  "key12": "266vERiyX8ptwxd2kKcnBroViR7JZMqY7Sg8sxoFdrkuCrLeCcNj2oCzky5ntR3oGn7ihsKoNmB5FL9TzTtKjuMs",
  "key13": "5quvuMoQgfbGeWcujJyeWrYzuGvLC5chbbbFaUcbJX4wPCMgHJa7DbAuEfNvgjEcw3CwAypqaPsAbs6w389kccbo",
  "key14": "LWoeAnGd4UpFE76FuEiGzyvyRmu1fpQ1fmxLYMh9hSAH6PTbkCWckJyZYsBfPs2HPjpYZNVeSY33KgvU9KmTWUs",
  "key15": "1k4ALpe4wBmq4EWjow5ZHbSzXY2mNSdk4hN8brn8SdqkxoYp2yfYoeTqmvMVD4TSMc8tqoxV3FrVPy82b6Fbf5D",
  "key16": "56qe4G2WY1PZCiR9aHeZQwcRdrLBp9EZmudWZYWsxZcXm7faUJsf9farZnoZJNRehiZJpkFwVCCggnTnDZuq3WP2",
  "key17": "A9XpPndMpiUNz43JUxUtX4kLVPKwvk68JXtXa6szZTvL8EQ7NMQ4LxJuRZczgpkrxjHUmwvEJXaRAw7AfmgceAx",
  "key18": "ZmtEPgKX85JgsZ1neFMJbg8SptVcvDGeXNZAM5Tk55Yb3sZTNwuNA35huqxEGyuMxauApQ9wd98GisRQfYZeZ44",
  "key19": "669qcYcvudBckzxC2wX8dxshiSayBszRgvQwgjDKhFHtt7ck72iAQYu6o4zFhsGcHU1W4MJNeRFxYbiwaGQNTJZ5",
  "key20": "3gjFKUAwPpyDs8DGHth1mMmTdtt3B1nW4scfF2PTXfXRXvBvz2baUtUntWEErnnY9UrqSFiri5BwdMGJevGMFR2e",
  "key21": "4AtS6TiHF8iEYXaSYLMSh8Hhr4JNwVWPRN5TaW8grVcFH9fh3a8P8htpK91p9hnwueTgZLumRSqzp4ebLKvTK4Fm",
  "key22": "5zSD39sutyawko8CpQHiPbmzdo3L4UE7YJWqWxzdXYNZZxUj3p8j3j9Mi3fn3yRzsfFViHSbnQ5fgeyX73wabrxD",
  "key23": "NCX5QHahgPs9vEVXPAEHUKTHzNKnnUdSX5SRRMUAtzTynqv3BbxEksK1iiFh69W91P3u7KhTjC375dRCw1o5vAe",
  "key24": "5RemgbddkTVVUD6RmYVUpk4KuUUvqfPVLxnsd32J9sAfz5wvJAPrxZm27sE39q8w1ZJvgruvDPFUTAW9WYy2m61z",
  "key25": "5io6Rv71DpfPt3L5hSX6jBtG758dYT1SZKwdqMHUdmKE75K7XjT5ijmMgvm9CJboqoCDtibrZiPe3SNhnxiHdXEJ",
  "key26": "2F84CaJSmPeKtgZzBNw5WCu9E2TxS4S849Y9FvwBhKkBr7CiWL3MS65vsYpTtdGMTmZxB58FZ5HFxYf2JUuKJTHW",
  "key27": "5oqGR9zkBKNYVUo5c4jZSHmmE3CSuWGGGprZK9zCicyw6mCwyjRQysd5Tif9WozDynYBJas4c1JLJQ2Wm8n5xwci",
  "key28": "3qswNRLN4bkYnx2P7sf9AJhZS1wzXNQ6mzp2DeZvZuziViVeGBv4gZvFXUPcDoPJG7GqHTgrtgd3F57SXUfzERcj",
  "key29": "5gpBoqQpFs2xkKfYkAKi5vwqoCoN7o1EuhzYcphRp3wWM4UKyVqUmoN8hU9yLbsNDjTaYUQMoELunDXDabSm5LQ5",
  "key30": "mRNkyJousJvusLHdvbFJFFV3Z4W8AgyM3TRjTYeSGFSKLz8GoNndqA7BuFQpx5NDV9qSQvrLKQriJYPcHfhXPPY",
  "key31": "3EmaDprwdbMtqbiArccV2U8bTsSqJHU1netWWds1u2Zmubh5asUG4fLTBtYwa9HJFNqf5sy61hVznuHbdbpgbbLb",
  "key32": "4wrRhASYFaKjoDjZ3gJxng9XXAaFLGdwp9wn1NcjbCPuf76Mmnm4XWWt7Z2AMuhD1h72w9NwtM5fvuWuFQdnjTXt",
  "key33": "fKai3BY8VU8fmK8jHvfFkADSNivyRzviHVEFGS8jRaBuFwbjEEeTmDjW224LcKUWHp3e2NQYScxDxGowS8FdTfN",
  "key34": "5U7yvwwCqURUVberuK6a29tbdsn3mXAuQ2BJiE6CmfcDeHXaus3WeLkaHi2dx9RZqzE69nqvkfXgTPr4HjvDKA2b"
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
