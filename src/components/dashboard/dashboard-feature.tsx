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
    "3bDLbU3N5E71RwuTEgnbhoVkRhzf9XNoMcXkswvs2AJ8eCZUc2PFh84oMD39RzTindP3Tkp3sPQc96goheKHdjQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NLdEcUWpELKerR3PKKknQEp5kNyPics2fzpt8sBBtQny1znnymiUJMqnARYmGTY9UbQxsS8W1EN4UmgykMqrbMh",
  "key1": "M9KnApN86m9LXe3k8fXCjFSKwGEddtquDjGNJmJW2BThBX4hCeFte8iaFsy9hmydu1eWUycf1in4gyP5TrzAfGU",
  "key2": "d3PYP95LE6cWhtHLqMs6srQG5Pb4gKKjUEyG59Fu3ZE9Mw8iDfzgmRYV9k8vd5DviE7EkqxutHzWSbeiHKaVw2Y",
  "key3": "3pxNojv9toKNLVap95GnoVhY9kTpTjuUngHqHc1DQAFHECZqby1pWTfAgWkQwNUoy7b6zFbvoDoFkwHa3UR5Gc9v",
  "key4": "AUvPegAMt4FcXjQmiCxHGMWDMLQaLC3AaJqFj5eJGZgnKysEJNKKGQdfAFu16ZSjoFyh3T9aPE4m8aPtFK8jGMg",
  "key5": "3oA56nkkY8DBUGRR7MH5o5Y9UnyLmVNSF1BuXtvT8TrpTtvbfNYVs3pDCUuyiUrXu5iHMaEZPgDXeXHWFPrW89q4",
  "key6": "2HTiB4DWjYqZcMswnVTNaRj2ckNVFmaRY4ibBBug112W3Q3d8aKwSrJ6dHqCWyyECBd3RLWdbEHrTEZcXHpXbhQN",
  "key7": "5HU8tMdpUK8BifGp1yXXNUgK9zspeCyoqfvfrLLxFqovMQKAPZAkEjwYcaMPFTCXjoRaUtbp7Ma4BPpipuxARWDU",
  "key8": "49sMgPDEuumvWNTnRbV78pXxyeGC2NAhL1TwxPsAgx6yQqm1M8AQ7GMTXBxCxJ6KLd969e2CkNnwGn5J17rTJZ3i",
  "key9": "4oXoekRYNkNjssATZYBiUGUh4UVWK8QNi1Hj6JfBtueLSmYUkGYaqECfi38RAktuvWBVmSLQzA3rf2vcWvS89MGE",
  "key10": "618gs1Lxck9BdXfFCz93fpv6bbPYcdDEZY53dXy3zfukVZaf9x4a9LpcmKnFkeKSRQCtfXXtq86f5aemjzxKcgR5",
  "key11": "nknVPQ7XaFfUtf21DWus4w55rEUzZ44BzAzX2ReKBhCQWaNK9DxxbJuSpbAkfoiWh3MruwY6xYeNFJ6RiJYMZGN",
  "key12": "4X4BwXcW9AHhvrNn6fgaY2rR5LsBKqdFcnmu4vWGjMYDm5Tf1TCCFkDo15PJEfnuzZ9EQJwguZpi6xJbZ8e3N9FQ",
  "key13": "pGppaw8QNU7XxSKQo6G6tXeMrAXJrD9ATL4c7wk3LYz47smf7J2WZ4bUny1m6u9CLvFMycQbMNPajS8eaXvBy7U",
  "key14": "4gzca6kW3Y5vRRZTFhJs7ujjXdsh7JBCuEN4kUtdZivAyBuu4ew44RwFwmCM2MuVNpSak2iEi7Nz6Efs5LuF45sc",
  "key15": "4PEJLVJ8uEq6EvgyQXbqUbsZ3SVpG17bwwaYHtkKb43MEEshwp4LD99wqj35oPfkxuYWck4r6zCa2P4YLkpEiS7g",
  "key16": "3voWtJbTcSGpWoXFde7RQMKs1w9FM7GDCYTmdHnHsUuiXa2Dseg3QSrYhpDgbkgKHboLxcLreDj6kC65d1V9NV1s",
  "key17": "2auWNVWmKcxTi9VodNoWhRWsWcP9xNKXw8zbaD3evRT9n4duATRd5X6hJu1cVmnpZy5gebdFsoPGf7w6szvkVpM6",
  "key18": "jmhjyyL4qYjDt4R8KmGwDdEWFV7gb2CxVX81vJAMf8sQbRkXrjTqC3E6RsFXg1sf2VwcXitvj3jjxn1wyib6NWB",
  "key19": "jKHmhLbR5pp71o434P8NLuddaKTsnDuWFFVBnK4g5PpKnn9QqFXL1PQqYwTfgGxEv7dNTgyn5GBpXWPUgCuouXq",
  "key20": "2hArqkgyNSx4LcetALQ2Vwdyv1rUvxoxWx9nn8MEwgmNPxcXopFhCJwuRmzTJvkVJX1dFxTUr7bNAd3AWMWWCsCz",
  "key21": "4YdFGpiGnXY6BTpBg36qrRZsbpwYXMf2byNB7QgC5PPBtSBEFmJeqFMzGp8oiv3dsMpxnECe1CE3YQoeSYAdnaLK",
  "key22": "5pXgJrp7yS5kiQnaHWh4LcB7wziCqZP35uE96tSLZAaFYoFgJCoM5E498tMHAEWGh63nYBATuMcsuu6oJUJcxnLJ",
  "key23": "4HtJ5Z5ooEFbhj8Rgi1AgLPqHB21hNvzhEfwbHxk9eCEQmmmzfd5nzJtMPmfGt1HSNSFDy464waSJM4wcNoKX5Hf",
  "key24": "2Hdh1a9fdQ5Qx2DNusSnrSaMZo8yhaSP9QbqkkSKbVfniP54oeZtTaAuDUY9hCpxFB1TyqN9fHshqwn1xYKffXjT",
  "key25": "3opGQcNKwViJYmeYpVfZMyKLhsj99P6ip694akLrreW39nBDBAcnf6uJ4w3BqQjqGBdgbGWZy5vsQpMiKeLSsiuh",
  "key26": "3HrbP1qfeU8Z8K4e2LPzLWAqVSizeWsKSQ69M2CxUiomBq8Y6Zdoms6MRW3M5ExX2a1Vj2d9uc44Bu6sLRkjL5HZ",
  "key27": "4FzJeVmkEfkVweUt99CUnAyXfxFnVLUkqDWrNhmKtgSbZocUC2ANrgmdXHUnG37Qmsiv1aQH2T8UN1U6kn9ZMBCA",
  "key28": "GuBoomg952zgZDfU58NGWyPoef5XB2HGiAiJhupSJhd2QMzx3DNQxwoEUFKBXZ5Drw8qifDaJsnmvdNuNPmEmG1",
  "key29": "3ZpEpKa9QmkZSa4NJodzhSYdnJhxXa5QYVDqkH8CEi3nCLp7ihZ3TbGCYfsQcYReJb464ostzmfpyphEJvjDTj6Q",
  "key30": "5z1RSp2dUYmaSaeXSNQq49G8giceDaSpUwxqHHBgBwiaWrRYnXw96KG9kZqtnKrNHWNx5fLtrkTW2Ma2VV5TE7wm",
  "key31": "4WWRWo8JK2zPsYx2uRyeBRf2XAg94XfvUhP4pydkNaUMrhju9pN82XxEL8SC2E9nXsThr4pEVdPdEzYoPtTDwHJW",
  "key32": "3n1MybaCWiu1t3BjVf7v6ExnZHCYqQqvXGKbhRLXAXCjc21d6gEsA7XuzvH9VeQr7ATRiAVVakPjuBL5NagEDSbP",
  "key33": "5T3PPMG4NYnRGhHTNWHMRGp4K7mR7Qxz8GiqGtZSBuAarV6YQutH7tS6RSronSNHtim8be7ncvvRHAutEF9yDrgK"
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
