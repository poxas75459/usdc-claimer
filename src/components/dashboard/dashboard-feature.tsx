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
    "5iqsznqkEkTdJcRb6JapRKo3ZNBjfAyvEkDmbrmxnWty9AcQ6Q3E7xEzQ7svYr48KiBioqgsdj2kbF33myMvEpm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64UxNZUiibshPdoCqWn3mYVcSADVkMC1c5At5Gsnvyp2UugGW1vmDrHvCgmNVPa4mCYjaDXHEFRPiTd6uw94CLiP",
  "key1": "4EgJvFpEoAtz73ut6pz2eJ6kvhmbZJ8UyfWm3keQajT6WZTxXGFh3Xn4W3mDdAU1p19HwF2uCCWzsSH1BdpH5Rhv",
  "key2": "24UFTuubCqBhQwkdmDg1tpqifcJMJ89qvz8PGbLP2jnwXF3Jwe5BYpLVQZTdTRd7MrZH4ZFgUs2pJupEZ9shoBca",
  "key3": "4F556gb2LuoQ2njHZeamdDtbqg32GZb7y6zQUqRN2me8WDZoy43TYEs6uSyWGNjfoHdHzAfufPhbed2zGoKan8pj",
  "key4": "67mxE4RupJmWXvqWBnDsWPVfEUBLQ3NYaSJWzxcmDemMmh9Jnr7Mmv2Sys1vJQbcFqqEMo3tn7kqYk6sxAsdo3Yp",
  "key5": "gv5ZVrtpfjqARXMHn2owZj1W1kE5ywMVzyEeTCs6HFmq2jyoR8u6a4Uf4eJfepHs9HaHcDdd3iXMnC2yvJdDzF3",
  "key6": "2ztqGFuYWSuVjDWprUB3ZGMtgaaxuuGTd8RYgf9WUsxGSaQ5NBx9xqimTb426KVDRPHCok2Y9nzvFqjLpTzHvNpG",
  "key7": "4L5NcjqeGBNhY5PrRRR9jBdL8RqHnhJrXBhSRBqJNq7SqYkNgdb17AGshiueJhn9D1vkvn4uWcgAnQW3dFAC2jLB",
  "key8": "5pTFuyMTuhms6pU5n7XojyrQaPzcqMiuwQnGsNf41hkdXBr2GUfoE6ESxJgt2MgpxvgjGmdGDsysY5XW1JJCp2aU",
  "key9": "in9Z57SSSCNsLtjf4vmHWgeudVpZ2G4Dua9avwGqGoaMMNzMpxRoWtHoy1cCv1RhfUWPKSmDs7rDPVBtAmoDi1z",
  "key10": "3X3HPiYvJJjk2PE557SSFvAqtPYGg6wHUiQRmGE7jPSw9JNKyzi4qPbs93mfiAYvY6rYUXmwLnsYFbeK8dooh4fo",
  "key11": "4DXWNG1PJBFGxr6AHAz39VEp2xqcRgFofc3Z1uySeg3s5UDLVGSzkGDQ8pwSYae7E6jpXAVHBi3n32cLo43JnPbQ",
  "key12": "5ZTjmYPCkhRxGnXY9WJ1LWmHowe9R7k11dQieh5itkoEhFcFHx2ayPjV5jwSJNCxZULQUMq5gPkGmziAQoqjtqcx",
  "key13": "fE4NN1iTzkweq9TxUevfHyY9TPxGuDvVWWh4ech7XcjVNDwxjdpVYW1c3UxnoWbeSW5vjkyp5oFX3bfHNzD8EMe",
  "key14": "3FM9RDsuLDj2UiQ6iAMeozQxpqPsbP2aFgVW9osMc25wXbehGD2LxYSyVxrt4hTe2UDcD3uCQ84xsrkfg7mvjWCn",
  "key15": "9rSD1WQLFEUDrcK5kVPhNWj55hUoNPhkPjTkpqcAxzBCX9JkXyFYhQX3e3YSmx2tw2H8wcaC7GuAotvjVN9Kh1W",
  "key16": "5a36wAPqZ1iMUyLTpE1bCKWq8gprVZr4BNraY7sjzoFWEY7ZeYcES5cfGBkYM6ArkmULKo5eNDXZmPdbyZtSKL5U",
  "key17": "XsbgzBmzDVoZCTCoYZdMWRGjzeSMvCp2CDY6TLSB7iAwsureSZoFkXbZQUZ9WDucmBVWfomogYp4WyCv6NazEq9",
  "key18": "54SjnRurbpWYz5YvSFYYApzU3g84Zn7zKkkLMDpfEMD7jCHAC9ZjEJdwUkRZXyWCLEwU3FNURoCM9hxwbRJfzzRN",
  "key19": "2EMw9CJTQuDxYK9vCepbAMpjV7SjoGoMFdFugWvR1wzMG25jCpbgLFmKpzDApN6ZPtNNLEpA2x3Gg3AJ3ZH6j1J7",
  "key20": "u3uvDzmbzXSjiaC7TdtXSmSG8px4zLga2NaWj3R8NVH7ox6oazxRujjpYj7D9awiBfNVWHGbCmimR4PQCbTwJ3g",
  "key21": "bbjGsnVJGHXxGcACwCPoE7EprQT9iddqiBwNvW6YykQ5DDNe65fpGAedpkfya9ZNaVDdc5uk8KEE5nAVSSgju2W",
  "key22": "2nUsCQmkycv4cnKUZnds7M6paxWdqxxPDd6iibtAqtgLgEyQC9RNvZKVsNWcVVxEjrjz3rtLg1owrYmTkMhhmEc5",
  "key23": "5CvCMEfaGB6tiU1d3DXLUtdy9V4psg97NLjmaCYsyGGQCt7qiyrqdwEKDV2t1ZmH2JajuTANoJHL924Nzpd9T2DA",
  "key24": "4eauXPC98cFHXDQZkEkFeUazuAjBCMyLFB2y2hrYhkR2Mr6pz46z5GCTuQfi7SQkmfnAhxnQq3FZhbTo4rbELfte",
  "key25": "KDrvRfG2oo3TK7GZ9DU14J8jerscZFvchhCZyhCWkkdE9Q4WQ6k8BzQY2QYVLrhzL7dqZS3t8DYHNep8qnrfk15",
  "key26": "4LDAhAGr5QrpgNqXCrxwSRrwXSs4RTBDkD4vmFdGxU7V6iMznNg2ULkTYJcu4AiLQxzxuyWoo7SEzpzxBJ1JukkU",
  "key27": "4xVtiTJ8HiFJAEuWDRB2pYHpeMZSLeVxERkYcgQ37CnuQ9qQTAmBtfWTZLmX8bqDmZ8DpRWiQgB1BnKncf1MHLSr",
  "key28": "4kGbGRAuaPLudtYtBFxfbUVQABKM2J2R9hPfvS49oZm3FhHferiBDWjdCFRL9T74E76BgKHDKnvCrwBetSyVQzGq",
  "key29": "4Ct49S3FMVgbkrfA9mm9qMftfDwJfz9CuCT1jfvvVGkFxubrWCDr2XcxFMsKPByQMybGhf3zaPoaZ4QYCFkK41su",
  "key30": "4fELweESRJKfHBsuzJHwh8xexh9bPcsv9twG2XUFhe4UvxsD9GQcy1v5S3w3U9sCgrR2sSScpH5ySqXkgoD8AzPj",
  "key31": "2Fgbq4L1bmzX2vGXJ762fwzx3kCyaUESd5t9uQTbxQLRsV3Q4R1AdTf9qTUQATye179WAVJZwQU7Zh8wKwTEDMte"
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
