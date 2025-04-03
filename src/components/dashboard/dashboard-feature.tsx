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
    "dMKp4jtwL5HZrJQsnsduw2PVH4Ug8qF6x87DYeQsjKpe7nkvJmCKXXtCo4ULce9EQ44tg3PspfwBjX8Z1qwizi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iW3whu6PxFtsYk1xkfsjF1E41h4sB6TMbwvtkUgkBu9Yyrnz11MyeCYsDtUxfqs2Su4aT6mDbAX6b7dJHWZrD2G",
  "key1": "69BFL7NUqtKFj3EMs3V4NEuhQfw4V4Rme8ktVTGtnUtDxpZv3c2KbipcGa4uf1uNri6S3GJGYixpbHAGSyNZChR",
  "key2": "1aXVYWkkCVFE1J66VWnraM2fRBYTLbzA5ag12kicr66Hr3tee49aSZTwBHczpY9MRKw65rFMtGiopmhc9PsmaXt",
  "key3": "2VRoUUoE3iLyU3G5kPvtuSm14EA4phH5RctDSzLcsrZXKKpHE9fo3ve1w91oEwJUmK8Umbnfs6bHsBp3ycqk9rGZ",
  "key4": "3ciaHoegp72QWAkg77CuG42mk5tEgFWRKJhUAr3ghHJHMFBT928xypibQ3Wt9KNEmSpsBgzGUdhAQoDoTmtfHM9E",
  "key5": "4wbkie7Jy4vVNYLt1gfqTAKi97CbsyVj6ZFFo3ZwW5NKezv5w5rgtcF8y7hmMGgp3DPfG3LDpjvL4ofaSLrPRpyo",
  "key6": "fdyyEjofoisuWtzG7AkDy6zc8ENEeAWDkaTxDLrbZTcCiVBCajfwuww6KAvhy6YXW6qhMPow1W6B8L3ZwXDZTMT",
  "key7": "5CdPH5GxeK5xnSuWpJSxrTDfquo8Js3men85Vug1soLhtYnJjKDC6psximZ2QQPqiVX6zMWNdHsRorAZd4EQNkY3",
  "key8": "MnVJznvCb1M9szd7FAV8W723iFzihdeiirJkSsTaQQ1tAigoBWHb1whPrHPhNPpzG3yLT9LxFjFdi4JJv5ZTn3m",
  "key9": "4JgnobS1K4eJQ87PoQwyHUdRaJ4FiLXnavexRecCgUtDTdHZ5xMhYyKpA2og5919TLWFkjPwMJQyZtXDQ4zRBjqJ",
  "key10": "2dSN89BcqFQnCG9mh96M1aWmPGyzoXGbaRaXqV9qfq2RidCyyZnJB9aipkc7jj8quuQPtfPYKtDVv5GRHt3cq6dr",
  "key11": "JAMA8JqR5DbMwtAJh7HtS2YvxeMcdrx9PPRVwKA7viwuAWa48fB3jQsBMrUdoakUiMgA2wbMcg2KpP7ferGGU6s",
  "key12": "5rK7VNagWUQdoAZBH5b4QXab8a85aTMWi3KmE3y4UPHeSCnDvrUz8bmNUfeuKD53hMqsrC6zD7W7o8oMYnSNjc2a",
  "key13": "2PHqREAFTBTzpgTTPVqHoWEGKc9DGMM7tpEt93FxGcGctt59Hxqzbb2rySmhPd75s6EcVQQ1J9vi3RYzvxxqmVFq",
  "key14": "44c29nUpZeAZ83RKX9MmNBcu8zoxQeLQerRc88JW2YDJ87fkX9vBhYRUVuXSCKVztjgEaj7TmFwP8YCqtmQmF8nA",
  "key15": "61bX7np3kdQjALNon3gttb84uNXcoQ78sJfY6r8FD4qbihyF7qFaBZpCKjdXqnGkhebmMR1p76KSuuWPCBdd8CM3",
  "key16": "2idPxoeT599cLbSRecisifCYVAWqadDNSQLSHACDLKETKRoLoHHqjbZ1rAi751RppUuYWwhr7zvbu8RvP7VW6Zix",
  "key17": "5zNz1tEkK3zottrvBJQf2QdE3rvQqESuyUiLdeQXXxhnBovBbMZXG79ArA1TPe9gDuYEsb1j3URm94S94CJ9EUqc",
  "key18": "hoi6yMXgnqBmWMXSs7K4EBpjQr3CEJaN5b6LZXfz4UBTze8a8kVwpUgWviJaNTXYK1TsqLq89rWpTG1RkheNqjz",
  "key19": "2iP9zEmGfAhvXCgoiqy7goa2bM9C2NpAvtpD1fQufjBwqE5fxYtFqo812JK7B1atVdqaUTeQbAQK1zZ3uxd94JqC",
  "key20": "44c2K6EAHHYSEdGw9Q1qAQSKE3BgcZCnLyTQRvhpobj23B4HpUpYdR1dQf5rVmos3MaVfPcNxAXyXMyWvS4Gqz1H",
  "key21": "4DzgNf7PVU9tyc4eaoPdp1fjQ7fK2ZoprfzZpW2FzhSv7KjnPHrcKthHM8Q6EYY2Fq3ZB3f5XbFwtf6F5zJorDES",
  "key22": "4eNGmGjEo5jhsQe9HMum7MT5wvAEBspzTKnnrBhYYyb3V98WESQThNKY9pbqoBR6Lc11jPFaATc4bE2qNbuov2hP",
  "key23": "4qqFPzWZfHGxrTeC3xaVTjDRwnBMTwHg8rkYXLiF44q2hSZokDDEu1CxeJry7mnLDza9vPQJRNMM9nggqbF1njK8",
  "key24": "2G33NtFoMcoLUrEAyQQAeBt2GFSxzrRMYwQACVaPHJJcC1XiwS7qtHhGuMhd5BQnpKGxHDjakLK5Ws8iVidVvmyY",
  "key25": "5rLMcaDv71gcdKRUzrfs55T7Gq5KfYq2uAjTEK2U53ZJF9L5XPoCk6RzNGmqox9jTgi14kL1WfdDRcFMeNX4zVVE",
  "key26": "4Rbe8ZVs11o2LSZR65MfcE9sFhG8wHY5iwicCrVhtS4pFhKVttZZYiEseQrHDYL7gKKqQznsWrdnvKttMAkcTXTc",
  "key27": "efxUcCSdhpfSeDjA3KuAvkzzwTmE64VVB4dCq5bWnU9Pzmc57MjRVV7rKnGCabW3xc1XPz37y4EwwEKozSinqKJ"
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
