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
    "4yqRiRwCnXVrvUCzseYUAx4ECzc2x3HeV3i1HBYqVmPQRSbBATAZz2NTDuDuZpjwf6pQYgqzLcTrFHfnTQ6kTpad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NjsZuoYSwgah93jW92c3WBxDjcqe8fzfFcwWf1gfCPX3nDVBw2NxgBRz7fh6XakjiFEFwKCPe75SuCv65YJhxWz",
  "key1": "55yfbsnMrQxcSvX7mBVG1TcoLAmxbbVnKLkQZ3na5NrE5DqgareTJaKKBp2SmjGXaSHZFk8vrcgTEqGT6Vqsiemc",
  "key2": "5oioHnhRkNW74mvTfPppZVr5p78z58d8cm6seviADHYwBusrX39z8mHMaHuVKYuHfQ9Jz7AVCMWrLddwo1G4bzvz",
  "key3": "2B77mKoj56AeWAjHkJj3BtgVMT9msL1GHd3ZuoNFBA7ir4zLnKdcUf7LkNZmLB4aPfkhfp6tKBDvFiaeRSosKs9A",
  "key4": "53GVSF3rq1G5hwDbirPg4XXVpx7R1uBkT7W1LGjeapPQTfahCxhdF5KX6VLmHMkeqNxJhmR3NeWansKLkyMQAWfK",
  "key5": "32A7JotPmVwcs4hYHNyHB8u5W5jsuk8vqLyRbDntj2J9RgEao9vLEZDiYHDrvZyfqttV7qaoKeN95WP169ovdYh",
  "key6": "3ASnc2htaR3y59SypoVL7LccayJo1DT2Jcp4KRrZPBjFoMLNdFUkDCNAnzEhwq7Dm5mNpBGEi77mDqYXH8oABxSg",
  "key7": "5sZRTEBxSLU8VJXwN8aCprhKCgtcSPG4EKmjjPApg8y9epFoNDY1JipYF8YviBixeXsBjMm6mFXT3DFt2eED8Yni",
  "key8": "3oe5YLscZ52KtNkvcD9CTyKe7hpw3WjUxXDniU426S3H9X9ifcSCkkuozZxfMWcqdKXU7oQ77Wej79XxdE151vQe",
  "key9": "56DTQusYLXK1pgd5Gh5WngP5KNQ5VnoF1XV9erny4m5TFui2g5Q5sS5SvK3tThjNain7o3FNpTAn7eXKQwMASZXY",
  "key10": "3LL2MEGvXnTDAEZDCnETncKDxUJp3MxgFxBeYS9jdMfqBDXMFan1H7Ve2bkzDaJWP8zuZkJ2oKmyDJ794z1iLDxv",
  "key11": "28AWpMFioTk4z8s9tjwoducNenWBzaHMtFbHbChgNveAecrFtxZDs6RnLu4TV1FsXyobejufHvDWee849FahAEef",
  "key12": "4vwjzFCNA8LaPKJrfRGyZBq4wruy49ckJ4fyeLJA95Gk8eTgwFYGnKh4b8ZWTphLQQLpT7rQZVWm4nHwzrpWRLph",
  "key13": "23C6sf5QWWL443tAZAyJCtSh9ptmf5CkVy23JZ3hCtTFv8GY9haZt4Lr95SwDYN5Egcwt16Bj5z3hA8L9rM6v8ky",
  "key14": "4aJTUjgAXdcszC23zECuA6S4hUtRvWxBXzFZmRpta6zSW5XrmggHfewrh32JgBZVtGQrvwFBx4xjtVXzr7VAmrxP",
  "key15": "sBY6UWGiNqZMZPLRCKqb9gFDmowaQpGz7zrqzW3AHE1VYWJoG5VHhFtHX3uJ7YkW8TpkLXxcSTQouVq8dbZoh8V",
  "key16": "5d4C85dR8485tJSKKNtQTZ5UtNybszR3cTz9ZaTZ12CTYsHo5fBS23AJDw1FreAwfoB58rNyHmumXVtMFkQbLHo1",
  "key17": "2zXo7wbRa9vygLhvmBi6urhYrY5yyUX7oSaJT7YHU2zfe73Bg2VYeAUJu1MYCkDkHEdjxXiXjUS88zoRR8wiJKyV",
  "key18": "27jG4q2bfHFon7Xbh9hQjRsxrjD9pV8jHgZfqyEtCb9fYU3YdaXpqgd3RLwtTxYfERyGh2okwxhrWastjThLmbFp",
  "key19": "2DUabwUwN2Nb91erHXbwrQuf4zyV636ghxmbnsSS6cEhAxr5xRfoE9aVaW595umHL6LhzL9xpHRJtzb9STRt77u3",
  "key20": "3DoAYS43oogrFifn2P1LHHBKdhz5CJZPKiDjT46yAaN3XdNYwn5zQKtRUR5bwNqHoAufmbnf13uRbYucV5EN6oZp",
  "key21": "4KDj9HcqsdugATVB3oGMtpjHYf5bsSrJfPUuNq2FNwMm5f2RYYE2UVixAq6XHdyZxEBCpgByE2VgnahGKJfgh5cR",
  "key22": "212j4EB2KQREgQVx7JyNFH8RYtEDBC5VoP9jUYxTzTWxv5wkksQo55mRaATtZ3GSuTTFM6inJJAdqDMBHbJDdLEr",
  "key23": "5s8ZXAJhNBGEuKDw62vmwgaxZtLvYjUzu33Y8dL1tcauLnCQjojyYR8sZiay1SpkthYv3bcum3nY3YVWgTXZZq3v",
  "key24": "26DCzh1YDidJo7W9DwxCmoEqrFaM2H8caEmtMn6LVbLGQL3M2wgQ4EhPLEG62hfENF6EdBWEVahFyLupTpF3rtwn",
  "key25": "4BmP5iKF54F2d6dnMkpM8tEWaGZDeb2w75wVu49wDfpqztb1DwcpcnYQTuKdKPVDAwfVRniZ8RgqcdGVVaQzpoFf",
  "key26": "46KDrru7cwuozNx8aPVSuAj5cs3PR8YLqxmwTo6UpmiD1wjJcXxuZ2KQR8q3D5uiTCmt6iumdFVSt1vVtXTehCUs",
  "key27": "3VKYoSf7386BRSWgURnYwWWtnXKbA2W2qRn3k6yPzftLpDvSpKZFEyngihQ7eSozR3v9W7XxNf5Xnz4iu3RzPW7R",
  "key28": "4BMVoryUvMqgCXZep7suUFDdkyS9RmvWX2Z9dTfTuTLCyWVdbJDdsR9qKKw3eDKotogEFT1W9XQXBqiJzR3HkK9t",
  "key29": "2UJa3zqXAPSceWNuJiMya8nw1Y5xyxxouGtTeAoWTqx3PuEE1Js1zgGbUXadnbNp6AS2VEwRxcK6gkvMHsMi3sGQ",
  "key30": "4vDnG8gUniDqSBPLkywGG7vyjsZh5TwaCmYrAN6zCkTU3JPqFSE6TKN7Gh7p1BymyGyZzafD9TTD6yoWsFKGKWLs",
  "key31": "5cCQ254dRZ8kGAzjdjbQHkavaDRfbSP2wgB5CX5i4qJTvz32sdwGz1E4vgjW6AF69XPyPN2D1e2dJeHwiYzUY8j",
  "key32": "3fMGxVEheMoxVeiseeSS1NDcdT1Vt492BtLdbmjoGC9bKWNkBweFuk2cQBjjVWw8K2DG5vXLu4PLGMJuWS2i82C3"
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
