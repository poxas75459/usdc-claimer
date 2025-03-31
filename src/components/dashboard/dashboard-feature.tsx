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
    "5dzsFNEwWoDKSthuFiX2nHCmyaEjeYhf5y9KgFL7ffqYrh8UfhmPeGTcgc1hXyPhmm8JzmBgh22dUXMcRgFb5gZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u5x2MkeBhJ6sbP3hnTG2NF5AijYPMTtZ6f5EMX22EWhEhFJgJmi2UkBQkVLrLBwN6a2nYD8gvzGwn5KwLXgGpZV",
  "key1": "5JvssiGiPP6SCntgkbN6K65ZwG3ndJzasSGrfrm7uu3Jwk3vKmUrwxgyaG46oK3cAXcb8uR78wpTWte32UykGi5V",
  "key2": "5nWCMUJDE2tFZ2paz1XVF6k6EwzYjX2SjrVXaSwGhHtCMGcaFMq9ytVV6jLGz9oBE3FyKRrFdTp332K7UpYWxtoW",
  "key3": "2yzY6F5STRDdHttMVkU2T7g5vvwGY9AJNwkn4Vn1Mjjkze1fmyrCU9EC4BTueAZxyrU2kmJEFthT2FDdzbgGHJrc",
  "key4": "4LDQpEjg9h8c8xSJJBwRxvx8SH7Nw7p3LbESMeGoBH4ncd55UHiBWmZFBjKf4yDr2hrPeXSvtugH4TtmBSQLHFHq",
  "key5": "x9LJ6EQfcDMub879WdrSV4SzQ1q234sBCHJzLQcSEw7ENM8ZbFkSwWGwm2rMjvRHGzPuAAjCPtnB4C7Kjw37Tuo",
  "key6": "5ds3eNNxbmsPEZfLCnycoWHEDzPLJUhm6mGmDL2wQJHiyrryu6JHdzEJ2NV6522x37HEnhwYPPYoAiznZh3d8DHr",
  "key7": "41eSPBEaL5sDpEHWrNUh1YtyEcVjtY7ySj4RdTbGYcb6S7QFdF6TXVSgkykJbmYXfqGEi786PPzDQnmuTWaKUPbH",
  "key8": "2gx8R8n6Lfn6tUpah5dBP4kG1VbuHT4znJxwbsHgNjRjZGNx4wp7Dt5F3VupbGVkGyYLRwx3ywmFwrNG9JDhpAq",
  "key9": "35pN2H998hnkgoPCns1AGnY9ZtxbMdSTeNFCuWvq2kNNdAyNtDA61tikm8gMEodaMVM8Y2MtE4NHfqUU7KPh5DK1",
  "key10": "5QBvuD8ftbByhDLR2J9LF1GiTnKvg3nThK2U8vfCfdMgwV4reZQatiHbHntNDfqML9is6uFDdcu3bVuZTrMaz6sg",
  "key11": "2r1eiWkEsLEYtb1bgoBv2A1mq9pncstXzRGL5yPfUeyKM6xPyAxEbZ8iJrYwNXYV17bfxkiX1kvq37zuKpRXV5kg",
  "key12": "4Wt4qkpNmomRnULmxLSrDfAQCWpQqS2MtAVjQc2kL4ogtxwmNraSD8tMBpX3wbiTmSx3qrpGae7RV2YadwzAgZZH",
  "key13": "ZahBxqpxB9GdSi5WF2rN7VR68fMfwYxGZSxN5y6h7JE24S7iAsA6jfnGdvTi3tzM9PipdrJj4oGa1aCt4jNqwaJ",
  "key14": "2J1KfzhSF89wSaQQS8DdTWsiAAxcyX1beLGrgEAxVLWqxutHFjcivYn82NcEgdpbKmF852RvjxkdueoydEw8dQ2Y",
  "key15": "4hcG6MjMpkMyfkWLeDm7ALdmKa97BRCE13zFddKaNXK3h9ADnvd2wLQZHBPMsJh62Rjdoj2SUtWYmMoVNM44fG2f",
  "key16": "37f321TS3yD7UtEvwcRz78nooWg96JkkFbTXdPz36foVbbVS4Ncmo4ZUqpDwASpChCyvZsibT5MHDE3sBcLhizxX",
  "key17": "d7GpUtAvhkdi6JYPmduCvurxpcq7yWybPptbkqoSwk74cMqWHzAeGZaFP6s2DDbsGK998j12G8bnSGmCuDrxmiN",
  "key18": "53J36drADErLovAeKHDcZhW5iBT6rganQDtoE7woBLb4AuvBtHRtRXTWnDh8XYdcRE5EK8ACwcJzNtHcVppVyNT3",
  "key19": "kQzm7R7oTg6cdEk9KDH9zfrdbLLMeywYxTesWsMvyh87ttNDvd5QmYGBcnPZAQnbYzG4Z857YnpdY9cG2G4xhHo",
  "key20": "sXUKN1urYr5AT3eD4YArN2oqctjCezkpg33wRwqkUbRYafrwuHQB8xZnAcdGtDJtnScvB7RoFEMF5gFWFUG6nfX",
  "key21": "2XAK8ZaGmdKkXmW66WP6NFDEYgNGqfEyn4etRdtdAMyqNSERPbNvEJ9BTFAvrV1jxauV34qQAgduePAvE5aVhAn4",
  "key22": "4Q73n6XYTGGdvY22NKyDMwobx4ZVP7fg4GHKoLmjL1geKTFt483yKWy19oqT9BNKvwwBiRTCU1ZFqb8jCEyujoWa",
  "key23": "WqCbkzjw2ShWMshqv7YFMUWqcKMn6PvBMiB1JHQsnxti298Zr1btsDS4W5zcj373fuKXD1SgnBMWY53cczSUmyC",
  "key24": "28YfdceNtyYJnKAN5iD2xyhfDKpsQ58gTR15YKXj7Gh6LuVEFMcYSAhUtytWFRxnuufKEwWWpvpSFUVUHn4E4ruv",
  "key25": "5cioB2deeQbrravXcAkMoYvopjLxDLa1Bi32kFkcoSP3mKR9Gt1N9f8LwtHaT2S8g69qoTmW1Y67JgjpUkuTuELD",
  "key26": "24RSy4HGN39Uoh91KjyZMUF8DNC2WrKvJrfwRJ4V5Y2CJo5zo4Z8ojRTV76Sv7XtV3TJ2V8MJMZXJ5egWQMrd6x6",
  "key27": "478aNX1VSFCj9SE658Sgo6hoLB9o3UngPg49BCXPW4xYLjtU1m9gJtNYTjAjy8ReTvzZYFQA2mDQryxfVvNZ3osh"
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
