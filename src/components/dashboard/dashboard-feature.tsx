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
    "5G4vLUbHpGRDKDpguBgNqCGqYEh6hsURtJkGez9SraDUxmV6BKx9VzgzRULdKJq5sZF63i7Qnq9Cg8XjZK9ibEQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28QxycxUs1eqiG2WLDK8xwttpLCWTy34DqboMS8e7EgD7uVSKTuodvoph87WvX37C4FAmpBAZu9T4SSUXFfchdfD",
  "key1": "4zAWCXQHhY6WpCU7ySxpstqcmhukcPEk1gK7iqdx2qfKcRyZrSqes5gEYJcb7S5XAWhCttcQRbM86CBjfwnmaFGt",
  "key2": "5LScsBoXCVfGvmcmzQzhAc8Gu1suVTxfJTZGHsEZbnjvTjb3jGDyi6diauun1t9yXhyNEAB5kENWQBR4pMzckZhh",
  "key3": "UM4vN47M2YgPhS4UM8EqDhdDrFGPMFfQGJeW3TkSFPTqVrX8nxqCFMUeo1sN9KzRvL2ix97FoXwawVfjYe21WKt",
  "key4": "2L7JJPVajGwTVe6pqqXXCoa3hpCjZntabu6Nrx1VhHnher1ne17uqFvabCAV9oLaEwv4QsAxq8afWPtRqu6p9U7p",
  "key5": "2kFGiFcDsB8sfnAhkMkwu3U5NdRygsjp2Kb1DAZAiwfFNns6ef15UKEiekDUVpQPLB2uUn7zDQqGPrpawUmv75bb",
  "key6": "2sAJ4aCtb24uHD3NrXuP8axewS5djGZATUBkHfy3UB8JDvmCY1zTygmtgpdZwzpc99JjauUAjEyNKXU14qZzHPMW",
  "key7": "57zsTU92gjnyHJvUEeatGt796zUVGmsNfGLaixUWRdaAbuGmDibzDjbLUdJaGCdoLbihwZc7wAt5dTsjcyi9ob7m",
  "key8": "3CMqnuC1txeNmtXHty283iBwoLXkLkmzxixGgtKmzRE1RNuxMsGaaB7A6qq4BBA5txB3AQnYbb55tSpZBHEZwuuX",
  "key9": "38ew9Vw1hRrquRcrpsrfXxwUrW9UacS85zbdQukDFdfPGmmZTiyPbSRTxhaUtdVpL6NoSiYxgzVtcceYkNzetN6w",
  "key10": "5Qmf1Tfr5RyX3yvB25Sdt4hXFrGhbTedzr7fRQSQ6ShNn6iVkfGLuwG65UWxQMpyPoKFZWnb6qVg6KpmuiCypvPq",
  "key11": "ScuVwYPHyvbrkV3A1HcqkHffp2GydvMeUCbnnjHA2wcHAkRSHrguxnqdgkcKR2cQidzKTQkqbFq2S6VwG7eXuRa",
  "key12": "2z9uVmAodgViQNDRiAe2dahGJebUPiuRQh4UzpyMwTYqW9Khiq97mPtoFd2EmKcx3mnopkGrkahJpFkqApwFPVY6",
  "key13": "bv4nQC7oq67VwWPCh1UtnTGtJiK5eYBoT8b9GtsFBam6zUuHkyqEa9Sh6MzxkQXN59D9hn8GQsACohAGG2kSYud",
  "key14": "roFWMVaMHRGPVmsH6iRqxP9Uh9xT68UiPUCpjSRrAX5hMpgtDcAKZq3a2ZiqrE1jM7Z98X8e9DMa8Zd765jC83A",
  "key15": "2LNJEgSyUccxDSFigHRgYSWZt6ou7nB9MxLBw3y1kKvgqmwFJYoPndk5KByHmzvkqAHxPgWEx2vaRugpUZhWRNCE",
  "key16": "vVnHpm6AkiyTKZ53rHXaykre2xGTR9BTF1KoXFP5HY6wAMyobk9trxSCQpU8bQEHZLcuq1tgPszdq3fkhFrm583",
  "key17": "4Q7NRETMo7sZcqSUArR9fYbg243taNin22VbUkhjPG2iVogR3vvfXzjvYoExT329a2y3NDyXnAdNgaD49thpCc9G",
  "key18": "5Cqvt13byGBe2KqQW6quETYaaByJAFEqEVGtqn3DGbjpQC21HqHfkDRNBDnego47fCYKMSKqETSuoUJ4UNx9L6mu",
  "key19": "sx52AG5GunFfv586ddgKkBsdnpeaY7jxQsoDnC38kR5PNaBXTHedGvBYja9spdmA7UV6rpos1DgMr5DEh9XNRVL",
  "key20": "3ia8YLqEFq7G2X9F81MgFvjyQfXUgH98gWqyzWLvVLmQ9gcvjBs3pyFFkZpfzEVFyysuBAxTVc1tEC8FE4fc2ubk",
  "key21": "4EPtaysTKd1M5ycrH9sVJE99LCp6rNW19MgehVbtoWkDMW9FdBoAmSjyymVC1KShBx146t7YTrnFueub7qWP7T4c",
  "key22": "3sDzSDeKaMUkfNXdahFM9iiUEvxhC1kevNPwNGoH5smkKewCNRqHP1vvqAucAhP4G9QBfpYKci2D9YkpKwnrf8Ui",
  "key23": "5h234CMzTp9uvvh8wB7ixvM6nKu8mQrWshGjVfcSYgoCxYm4r81wpTB9fB8e5yrF2s3ErboaWgcVnTM89MpLRW5r",
  "key24": "QxKzHdWLuEjiubyYdVZVVmjUxw3PERrZa4xdviwxDhHDViqcMrbrSJ3nCpm2wsRjtnAkdohowxVgb2c8HJXtda5",
  "key25": "5y3WNWTMxonvdZWnG1UE9Jp7UMXmTynJxWMLF7LftQcBVsNaiR7NyjT4whAEfLCGagCKaFHEJbZ5Rv5QReFKqRwx",
  "key26": "4aoUShuYdFxPCrfBJ1ScoRCprv1dRZEu8bzRNUK4P8pEqhMjBXDAwVyrMUBzz2ofEJhkfmgSdyoMmhz8TBgGPhn3",
  "key27": "5yTsGgL4DBUvSvJkLaVCT7mbe4HvZgK8xD8ECjXd6cv3GZXLTSHMAfs6SfaYWhmakrivFJBPGhNX6MMp6zsCgF3w",
  "key28": "4ygKypVMMUfbnVi4HyAM5KABAEsoUGjvsxgPRMAPDQsxfiySEf4sP5zBSo2ywBKpU5BigzMLBZ1zo412g52NUzXw",
  "key29": "2RcdncypyBT27dt5QCRgScnX5PdQ1duqU6pSaQgAav1cs9dSK5hcZ3HwMPUXicbrTSy5kZHviDQDuTKDJq6EoqGg",
  "key30": "2o1CSRuHfn7YjPBZLY9jLrDNZVu8tx82ATV1wCDopQfWr3CDFm1Q5JecC3huhRZoxk83Q4XqJL28hzTVZ13EeqFz",
  "key31": "5gxubCiRCXXN85BGvPfgiekVS5dHPuzUPFESxAZ7ugcvPrPKoQhgabPnQZ9qEDX4MmZ5VDeFzHqb7sYU8a5PW7TG",
  "key32": "4JQn17zr4EZKc6WfezNMCrn1ZK3B9auCqFJhVb92ciZ88pzTyT9UzFUBdbBniGy5HX5NZGcnCKy9Kc7abiMAuDCh",
  "key33": "3k2HEEViuAsLNLd6oXEBVDsy5DD7QguGHzeWKPJmnyWmjrxZCGnEhdqgo7UYE3WGJGCvWbDvhNYwJBJJa6ABzqa",
  "key34": "2JQsQDZnvDXMrGVWB8EG7REgdskDmM4tNonczwf1rroozzjWzVXiNauwXqQ76njVUrxqF1R46XPe6gw5LRvp1yeF",
  "key35": "4tSZ2gsu7r1McrEq4Qb7bgVFeP6qUivtf57YxghQ2MV1MyNAvrUS18JdBpWwnaahKLeTFyu6VaMq73g1c6wfJbPs",
  "key36": "T2QjD1tRL6jP21CR8TqUsjhVtqj8Tofi5z5xY9Arn4dK61DPs6Lz4MiFwxi3B5NGTj6xdKJ4nXf9huUHuCogPk8",
  "key37": "2oopkSTgx9HfcsRm8FLUpCGxomBFdVFSCLGxZRYk7P52vZGyEGTg9UcCVqJMjvExTPSxVMUvSzGoCQJBEKorTTQh",
  "key38": "2FtnWEvbUaYK9btgb46ZXU19Lgax7f5LeZwfwJgXBXQrN1Wf9mNXRaDEHnJyiN4uQDa9c7HSCt4xJccwkZ4hv4Bm",
  "key39": "5mWBwMVxNfJRDRzL6otkRXHSR9Sj3QapvWF17ydt8w9LuLHYkkfVmpENuyzGfN3iZKHGVUpzE8dZDgdEMRzCHzgi",
  "key40": "4HwCnVWU55DkgwCSBiJsyKvpaDWaDgTRySaP1S12dNuXE6rza9KEdE6zB1D5gcnNqkKUvYLDNV1ihVfF7qajAdjW",
  "key41": "2NFk9WM1PMVEqtp9HNuFiZLfF1shoyKiC9mXKMPrQ25mfZXSS9hduRDoLB6mHZ3o4jBHHbzS5jk9zLpPUWKw1uCU"
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
