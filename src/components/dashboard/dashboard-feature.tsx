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
    "2JL76DaU1VMtci6tq9aBAErNPoZyXbjqS3CMKw26rKMgqccQuP5ZkvvsBgPmr6scEFaNDcFrB7wDMJ6DwpfuniJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ab6VYep3jddseCcfGUnhMkS3ePH2mQboRtBH4enpFqYuwehyGvkusgvFxp1Y3mnMNfg6661NW1PqxPRVoTV46ot",
  "key1": "4ChMBTEN36vXVko5fv3HgpJE32RwF2arkMGxpTvNL13DvD5sFNhdKkZz5CAVZhwsZigxs2cHzhu8J7wdnghK5xPt",
  "key2": "4UqCaKtjkcNR1qBDaMxU92WX9vwXYuqqhERNi4wJecr94tdpn8gVswyqEhe6731E5fgX7Rp2sKWuZTQLihrnCGNw",
  "key3": "3UztkfszmUQKK2fByQ4pQS3cGAbbmimHykCqiPeqrmQhYaXemQNf1wFKAtMspUEngKM1N7asWjGkzcpXx1GA2ppv",
  "key4": "3erPgxGXfd7F6aULEEUpCFgG6c8Z43GrRSr62Dn1t6M8oKBNwUVENNgCfJwLX3eBLCnL2V9uh6VxiZyB7ZJNtp9z",
  "key5": "5t85pDtQZADeqZAKU1xNXetbbx9exaaLCQJSjohJbJChPUj944y6HwT9ET3eDqKNyFpfbZ96z9FX5kpHmKv7Nyss",
  "key6": "3c4pdmGypzeEa17gPkGZoCLKm8jM1jG37quZauGfLU7hJjYrp3g46AWsitLC1yy2tNEHrUo1ctKk7WmiL1NZMQZM",
  "key7": "33YZej6P9PWTnhA7k9GL99mTdkQh9e8cV9Q9cooZhNnYaVap6vhdPmN8j5xMKnVzGc2GvQvURTxeQTwkNwZQcnEv",
  "key8": "3eKM3QUttvRXeSm93vEQYxXiJuALguvvDtUdvB5yCZvN54ZpkuJLAEyJ4VvGTqEEazt9r95ATRTM3cThr1QbuFSd",
  "key9": "5XdzqBB9gpegPKSmWENq1uhiCNAr2KyWc5TAP6Zf7zaBGgycMvvrFrrynaGpjMJcNC1mHn9KGfaMKjUfReiyd2HF",
  "key10": "2TRir1Rkyy5bPk6TET551Zb7SdPcdKAR48vqMiMstCfRXYuNdmyZGRDi91okoDCqxywBvNivTAo2kKKT94cG16Pa",
  "key11": "2sHnwHjWbBkotZUB1KkNzX8B5YDQBDxGf4eiWMtko3aiSM5xun5QeKKwAyVR7fCQ1hVRgmjksqjjqcgBwVUZb1CH",
  "key12": "5hbvPEqMGphyYHv5xySV7n2sBejyDXLj9hbEoKimkwbE819uuEffs6HZyvJJvkbzw49XoN1TARhhwGrJxNTrDK78",
  "key13": "4kgBfCk1JumV4DHEuaCV3zJAVit9YWdG4Q46iK8YvdjGH2c9gDgGaK1NgMARVaYy1aFdcAWKtHyeFkj8W5cWGe4c",
  "key14": "3ixLYfRhqDhx25e2PPSRHpSG35JmLvgXQZaomTn4at2gm5jkQdjqg1jbR5TvYGt2nhCoPcMNWW1boJodYh2CVrCj",
  "key15": "4G1wrXXzGpmFccwBnU9nzghPr6PwY6tHvekeXeimBNW4qDS4njFK8uFHorH8L8rnc9d2DR9f3mH8fAU5TyNvxf9s",
  "key16": "2BUUYfFkQ4BPEr6MA69kLTgCYDcZCKcbGENgkq2Z8QEdkPQp1CrXb5LXWKhxPmRhsPzcdBucQiGwEGaKHjeZY4sG",
  "key17": "441N7s46Yt9EskAMacovckKJasXhW6QYZ6534enEXEfdDFFSLmqHuydT7Smv3Ab6PTyzpvbyC2sgnt2f6msS8gdG",
  "key18": "4oyyvWowvTp4R4n1j5fWHnHmmUQjw8ScE1CioGfAQ7VWG3duudPP6FskR8TwSBQg7fUz7UXiF1iHb8r7RLkB4xci",
  "key19": "5sUzG1ELyaXSJfk13nvv15NB13KX1w3CfMH8RKaLFS316t7TcPiYgBxGbvVhJJLBWr7ZSdSZ4bcUx1p2QbDjfPjT",
  "key20": "LUmM8JVC6XZEv8kLSVBSeBpQPYxCzwWpaxt1zg9DX9ivYwHuNeCWmW3haMJg6EtnmAzEWqY8ttVkAzNqH52Z4Yy",
  "key21": "5jiCz5A2npXNqJYeiBscr27jNnnAowD9PXpmmaw7cCUVfwcUe2gj1grqEJPcBdbffSRtYpVqA7idUTSfMUWL5vAJ",
  "key22": "8Xxe9dFyhhdYHyEqdjujR37z4hdcYM3cpPQ1D7cj3DdevnYqZiuETLMVZtq6DdGDZC9hgpmVbCEFSwFQsLugUzZ",
  "key23": "5yPYRaXijVwjb4Svdkpqm7bF7CfpvxcARZE3bKKivnq8AMAMirzUATjwioRpYSHxgR2bzWf9354U6cFnU4UzRbqv",
  "key24": "4a9tB9i36bEeAjSB9GVihbX5twsafKnqAZX3LKXQurvkP6ePshzEXFbVywDuCoZc9zM167JnzonHa7dcohCYXnoL",
  "key25": "4CsYraT6aZMQrt9HUoYyQmQ7o6A3Tj3dPN3W8UJrUd6Y6tr7azni2VMiKdEHRuVwNw13ErXdL9CRhfzRoLkqxKRk"
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
