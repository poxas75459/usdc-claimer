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
    "5EgobgxynWbQTQ3eGYxx3tgjwQY8WFGMzHh8r6NN4L5NX9Ubb8nXMJgtoA7p2zk2KT6kF2x6RammmLo2BCtaoeW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLHW6tYZPhD3ZEEopyXWgF7hPKDdKs3njnuwMHyk1wXwFEzJBBBQ27Q8sRG5WToNwX9UmhPK7CFmhanM6PasCyr",
  "key1": "9tfmn2iomSU1pff4ZrVWHLt9RgFFFxNvZushVcC16u9AothuKXdFgMzJ1B9D4a9JUjnhsXcZyPbFjz5qrq5MDyq",
  "key2": "3xybQpYnCGqNgmx6fKKKVAnXzk9EW4jX1aGsz9nD4MFYqX6B5d87bEX8yoY1JLZchYEgjz5Rbg4RvZFCuLZ8VV9Y",
  "key3": "2UPssW9SSizNeFvfPR9H74pCaXATW3FktbWNzPGn7hEqma5drgvHnPhdT8krmxvVSTarkc8QUvQmtDSLSDH4jd5b",
  "key4": "3rxJbrUESzxqTjukcTWDV4eV7YUgU2A9MFc2EW42XHyniDnsth4Bqmi3JeEoZqhKsSKDxYVmgMvaZfXP12WtDu2M",
  "key5": "LPFJ6SRhK5aGkpoCVzG2vczLXvnLVJoK1w8DyfJbtcVcxiu8MXR6Gjjj53cS75hxqYv56ip8gKh6DNZ7g316Wru",
  "key6": "brcCx3BZQPe7QrGzTsJvPQK7KK6r618X8gFwjW41Pmvc49LUXaZuAjzhz9bckz3iKHsuXDzp5oL2HV9wVBmjxuK",
  "key7": "4nDSXsVtSwFd9QrQ3jzXnerbQd165EPdFiMMiQwErBrets46U2vyVy86bjGso2fhGjvG94DABY3K34F5zmWrCi63",
  "key8": "2qUHComdexhckiYGgMxYx2cx2MqRWQs3ftLsrgAZBnBmZnV8PHacRHYqxAfWKnZQP9dt39G2Tg5vauqt7SVrjRkK",
  "key9": "437X5DCd9kd3PUdTzXFwxKhzHwX6bhwY3xzuF7dNXExrV3puvhzts4E7a4z92B4dCwK14ZCAArZ7Re1PPPvp3mwj",
  "key10": "2K9DUCnSSUheiW3wv6Npp3VVHo7PFsq78BD6hySdtgkzayc1zuksEkppFKfen1rifPURL8pT4mUKsQatK5Zt8FxZ",
  "key11": "5FwopRYmKbYNAUi5kiWVkmegZxF9FGqz1BYzggpuvmLy9G8t5z2Y4irxK31zVN9NQ8JoM6ZFTbUd3x6rrw1Tfe2y",
  "key12": "2kg4Z5BV74WZLM9mFGVwfWPeTh6hSVELTDg9GspqFXh3AA82bgDYguTHzpHfKQHF55VytGvHEKN86QgBBPQupkri",
  "key13": "5pwZSiRPSCHvF5ocQnbVrCG2RrvY6cbhq6RF51dX6KkUHe65PejcfZbrCuQ5oMUiC8gRPLEJrs55aCXbnXXwLx6",
  "key14": "5bgRSqqNXx9jYTS7upEn6ZqPDxjuVfGDXtUJtQssBygkwcVYBGFeQKFyqMGWV57P9NpnbuRHUeC7UFHN6TTqEJHp",
  "key15": "4fZosZm9g8w4aVAuJGG4xH8zX5gNqULebzAjsSZmZiDcPLGFamMCYb6UrcVpY1GtDWGLVSDQ7PynwQ9dAjkT38bY",
  "key16": "33n6iSCBjjiw5RPYMnoHNPxHYM6fyzPmeD6qQ2eVd6jAQdjjMCpdLnNfQnJTrCQLfyrSsGQmMmkrk2XnoBpC5cNu",
  "key17": "2tZqFnHHmxsQxwdxjbKXY6zrJx6qKvE5qmuQD8KL7LFRvV3bXbq6x2hQqFyve6zA5UxQ11mDjgdZ8eSEDnjjA3K3",
  "key18": "5JGQA1L2zzKkcXVZpPzRV41ku5gXewxohKA4SKNTBgfFv6QTXAih6nBRZ1igm2xS3eyWrES7z2EdzxvFgcq3RcUV",
  "key19": "3AQamTUdHuyg53yHJUyRUv1Ggztauccewfx2RM94hBcFXBcWDCiUHk22cHTbXHpn9doPbYfeCNtF17Tcvc8yA5aM",
  "key20": "5RHFeK69KUxPQ829hvMhYE6JADUCvtBmHy7ZFR5EYozxZKQR8C3bgCsTjb9Yc4qrsgMfhwuJ7viqCA8nKevEMnke",
  "key21": "qdHuajmSqPMSAM6g2iAdbs7X9tuq2pCZDumeM5uDipQQ7GkJ6toBrq6yA8TTHxH5KCABE5Hg4n3HCFr3VZ8u525",
  "key22": "4VtW4xyHsriQNXW5QhU8msWjV6LgBRtzfDyNXiTPx35YmwxgN8Rg2bAmCtyaUEAFmvSkt92FWW2VJZU6f9GiV7VP",
  "key23": "fHAnZ2y8LWoYhyefb6pd2r6m2DpKk76Y9ffmsg7vb9QPHj4SZVZeZB8PcnNUUXNjqP9DYi6EVpx2kJoCfwQCVnL",
  "key24": "5uTyy7v3A9UCrTupjRfKfQ6gaNtQ363fRexLkdYyBnDYyfpGc5zrczeHmbkhXStufooscsJZ8dySzcM889ku8eCv",
  "key25": "5BhqJcJ579qc3fB5hjfQnL5g1MLHHbn8uuqpipuwnboarvoTEd1fNzrgCVEw4MFzPxTCHdPEUBhbYEprSKaTz5Fr",
  "key26": "54n95EBbsZ8529APLesD7MHKmtAdh3yvb5EW3AYitiiUGSGhCjKWWPd1pyLmTUwRdwjmLh9xKU1dWDe9V37wdY4r"
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
