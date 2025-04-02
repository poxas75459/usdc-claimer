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
    "2egeDKojvZytUZWKZFhixyWi4xn4SLoxq1QBWp4FR3HY1FaQrLyR1JsCALnHtyyRMph1i7DXokbGqfGQQ24nV7Gc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MHkiRMU7iarrSw4PKFwVXxHjzo1PrWZWDDYn8LSsFVrYmtHSDvJnT1Eqd789iFv65zGNoCrUGbDHz1E9W88Zd7c",
  "key1": "2BTmFGWKfzzBKs7pyCeSbMbpfmt9fiHgKgqxyfMqFY4RgXLEiPcWmycuTJ5Mry3exdVSLFA7etNRihp8NRwszFHt",
  "key2": "4agkggkfZcTfZTtYeWg4yPRXphGUttTZZxBxLdzkHuRXi5vepBbie5y141Ja6Roj2VTHE1YZo95JXSTJ4kUt5uCj",
  "key3": "4VhsVAMvj3iyiH9rDKM7Gtqydbfyo5ZNnPx5HHWxZ2YoWhL8raTU2KPWyEReEFh22xnLr1gqwcCtaxBvdzKW328C",
  "key4": "4rq7SxuS1effmvGc1YZpq3pABATTJQ6CnY1BwQu9tJcvSSNbrD6kqbzQRey3TvnYfQwAUA8YN4L526bD8oGaCZJW",
  "key5": "2bKQA3arXrLbQdA7G2Q28SXjH3ZMC9N2MGBaDihwnV7TKRM2q8W74gmvueQar14p38YZh6o2TUkHWakmGWSZgsF7",
  "key6": "5kGpFExcXSTuNTWsgrs9hbecMPTmgTqD4Z5hP4WdzXCNwsiJGnUzqV881KFzhJ5m7d8wtRsGuevicYLW5A4Rp7gd",
  "key7": "5Fm7ySmT4kGiXLSoWbEKW5CPyKXRqDCLv828WUJVTCPEr6GwDR4kBcPsKyQqVNCCnZTDrxrYG4NjDnWAzWzohNNW",
  "key8": "3MyJHhRvp17jrjFWCmQaKNttsos5iwHsmb9ogAMcLo3hkkH7To9sDq1eLYbCcwaZiZtYp4jB9THDJhrGpZAE6AMK",
  "key9": "5SFUx7NiU1x5eHv8uW73KKp4PPPPVRvYWQS1wChky8gJppbDPNwv9h5H43sS9o6QzHLH3kHeBrV5gwra7qDGaziX",
  "key10": "T2zA9uSfGCUyH1rwBMYnZdXaRoByKP3tbJUK6A6WzHWtTCfAU95vw2Ux8py3hUMfK3pUiAPJ6w2Cw5KM2K9vKpz",
  "key11": "6165FHWewi8bb1KZcNrzHXcCftEgaKPscJqcSB6MnUc8QNHfDVsAYpqvfBo7Xf56iZE1ndtbB9Xf82xWFs1smptK",
  "key12": "4Qdmo5eNGZzgdXdVQXz5xcXNX863QACy8VmQS1nSNk9xSE3UtrDwEs8GU1bvPeVxAeJCbBEq6vrKQbYr8e5SkmvV",
  "key13": "4huixypm76Zjmnrpb1byc6hjpnHetvpNzciUp3i2PmrXN9u8LeeFqgcw9fvvaQzsVLHHH5o8pF88W5tFFt9ajcUd",
  "key14": "53QzCd1B7h1KRGcXBGwf2fqG47Ng3FgYRZBhfPnVvZonj6oJWARKsDWGoTuU3edwcqKh39V2vxAAdzaJRKVUGdjr",
  "key15": "5yUBGiJmGswxnxGDvgZKoNthETESxsauJPQwcEPTMZvbZybEkTmRLi7dgAGyYLfBxGybLQKSmr7G3NkZGvgPkBUw",
  "key16": "2MGmEHkCKCYuR1AQCaPvrHVD9vFS1EwScDE2WXCvZzVRivBqTzub7yutjWNP3xjTtSFU2dtxPUhHY3LEZqHFkEXf",
  "key17": "5nwUbtbvHoZhCsQfzacNuuqSJL8x1NBGU1myAwaGqMze8G51QvbZba6FjwysrNGSw6nMREb4wKvq8Nu9xptmYBdr",
  "key18": "4YG5eFnBFVxnhGcu74v9kMvbbcimBse2WR3Gzm489L7DrPD4fA3nWdxwBGPdSFx363jvpK5R8eb5aJQ7DAWbRH4Z",
  "key19": "3RypBHykHCFSNa3e6GZ1Tg8rur7a7qWpEXo2vwdMnjwNPSuHGSp2q2Cr78DjTZakRvm5Qk7JGLn5pAJbYV1vfWaL",
  "key20": "3BQZp4tKcimmGQWUYzEzDS7KSY4zc7WBnQb7VdKw6QTEKXNAnYRoYtPmcZUhJEjg3fi4y8pbmDSGAZfHbuHeeR9u",
  "key21": "32fK6p8jD5MDPSmMr3KrxWDxmKXawcYCR8SKue68fcTeBLsCTgpn1foZB5ULKPgJZ8nkq9jTQQ57NREkFChvwpVR",
  "key22": "3vPPgcmfS8YrGSn658PsR3fofiuapCdAS2y4SrqRFa6pMaeJrZsiodUFkF6yCBz8BZDESG7QQ2voVHVQvQUePjWn",
  "key23": "2yCHx23CRYMKs3UXfwmhRpTk5Dgp6XVD2Hn81jKv5MvpKRsouNrYdEMkgBSnHdACZCEpXFsjkBcDmfaWgo9eBZvy",
  "key24": "M36Na9pBVN9DdCE6S3PDXFLCZ2YYF2qS29MEWGvKvT3agPptwXUd8Layg7yEEac15XJYHXThkkNtZTrrWSGn5Pc",
  "key25": "3KaArBCG1KswfPuYw89ryhRDKHBeoHgqxZ7mVv6hoBDp8Kfi8GAAeiNNBsx5vGfynrLc7N1TGLu7WACizu9U4cwL",
  "key26": "5iGxg7bNBmXuZms2ig3nLPF36exLWMvq9wT3Xt2nkWAA4KUEZTBNodb5iEZ4X7xacqsnjJWmcwVibEFYUWtxvNyQ",
  "key27": "632fjYnPsTFXDhTwa85u1Pbkesud8QDxuuSwwPS5UyUX3FDw7UEuHTKZMxi71GACEmgrMKeknikK8EK1h3ohAMHV",
  "key28": "4Q4ZeMCSZHxYk6fM8nYXPFNL68PS5QdG45DJALMKoLfkfhGTEnhw1k6esW4XBYrJdJm7cjtCp8V1TgBWHysJgZGJ",
  "key29": "4SwTfeYiBcRSpzgMhBc3GvvFJDnEMiJfuEKYZYNSvs5VZXLLmvFDJHL8XECfmFwk8ZCxUk7b1noC6MYhM8JTpYxc"
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
