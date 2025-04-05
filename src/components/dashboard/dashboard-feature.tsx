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
    "JeC6uftU4vMtq4mWCLJKCdRqAZRRFgUxNE2fu7PcMC5NFr3cRSVxh1bSNmM9aTh2R7ekeyrkw9tWCpm7xt2QikF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26r3ok8m9pNTAw5TBmqULEws7FNUC1ndA17yH5GFhyeiiCkQhUbSdGdfidJqEr7hpmAMf8AjJRZsyNxYs3XAxcNq",
  "key1": "2JKrm5X1rRyupQqmuDVGyhY95BB2xNKMMWfUAip95BM27i22QNncTmZcNiYAdimhn5MP8qcUCFksCBbfviJyKybD",
  "key2": "3uUUQsC1dJDEDBKwHrpDNxkPWXbfx9HfViizUuYdztuGE2wQv4endCLcd6oeT2C13VnCNsWmGaoC3Y6QjkHLh6Rx",
  "key3": "Sw4i2odSK56m3m9kUfcHaJEk8Ff3zWB93iXmPzmTYGsJ82yFRydZjudKNHm54o6w35rRK3cS1RjA4WbNJPSNRZv",
  "key4": "2rtpfrcP3RyZNy9owgT7GbNyCFyyvEG23naspr7XXa4prW8EnuJGBhLzu5bGdzBQjqo9Eg5xpgFu7MrVywjoaYyX",
  "key5": "4KobhokY1TGTnnnEpA6C96k1Xx6vRkcurSnwenYaqw7zhwLVJiA2GkEWrHK4bp5o9Sa3C8k3S7BxKYAgeaYLLwta",
  "key6": "3aeSxdKp8vaAN1M22Ejo3VnKqgFXMghMb6pWHLUe4X3aS9HbvdcTvDAmiSbGYeK4ghHUc79LoCaSVAP6LM8APcCq",
  "key7": "2WJqeoot4XYLGrbt5EiPTdkbcubd6hPHKkt37w4FCnVanfbAbc8vquzzucFSLUmkkR5xdMxptzNnwyRWynEqXgcE",
  "key8": "3ctWzhHpw2TtnZ1hqaruFjM2jcb5LN6N1jb6FovWC7tH93D27R32zsvZaxxw1Z1ZGk4AbWzM6HXE19M8P6UzJp2k",
  "key9": "4CnwDUaaumKWL95v247sP9NyQMT4GvF392G7JckQupvoWzVcrCmGitMH1KZyJNNDsfA7T5miwbhbnxMVPkPaSYPu",
  "key10": "4mtTKiYqWMCDvQZzNSptN3E59Umm6ptr1CP6fKyLhKnCuJKzpLzfnaySEC2cQJBP4veRAxMXk9JmAqWuBvxLGJsr",
  "key11": "5QpYtYZEHPYkDTfeDoxBHbEgM7EY2mxb3HUuzzbAV9uCearhnPzWLxn8tmLrbac6UNC1LSWrSjsRxutHnmLicQYt",
  "key12": "4Dsxw1WMUvVhnfSS4hBZausVpBEK9KDULzWhrT3LEUkjRoiKPZXGdAXiuXwM9rcfAbRZKwhztcF3AfMdW54zpzCS",
  "key13": "2X1E9XBoVgacXzMMgAhzG4GBuR3UFLQEdsVvfXHAbuzwzqfWLw1Qit8X9V8oGykoAdYwbi5cdCEHskyGCFiGBc2b",
  "key14": "QFPpMv31dxJ6eqNh9aXdpVAMbbjiFnngWwPs1XJ9EpxDWxLN6YKpRwimhUVLUL4dNAUiM9LpXKaCmSGDEzbBP7e",
  "key15": "2ysZ12xAa1pc3r5JjxVB9oaqoVeZjom2bEPZhfAhZYVBDdt8EKvwhbkRvZsD6ZAG3t95EmLfZwfFTXbURUazuqoS",
  "key16": "3EUKcFWwjPWJJRQTP8UCohorzatSzS9CvWQXjJmTGGoBEEvLJtYijgSoAp3yLhEihxYxsACHfW7BjvyCL9qZiuJn",
  "key17": "3baxRDRWBXy3Wazg5cPGA46Fx6sy3NZJNuLwwCLmspGPHm8TRNgVMCMZN8mzuNkUTGpJGAQYQ6rhvYJq1qYwZNiq",
  "key18": "3WnysKEZtbPTp5WVcdCXYhUmf8fKknhzBk5buAVzwuGmEFHMrNbGwZki4XDn8hckkeA4CT4UWZFv3RNZhkccw7NM",
  "key19": "5khTtcjjo5UeJzmP9EUEJmQoXEZZLQ12cwRZysmcVPuqTW7dMDBM7av6wgibXh9DXbNSajKYEMBuEikcXkEtJ3fR",
  "key20": "8uGkV19rcuu2tHpFymp8ajQQd29B8i8zRmC2QqkJNXeYnLsik1bvA5nrzYogMUtNqfXajkiQW5HxrU5ZGR6Vaqy",
  "key21": "5nX8nfzkBe3Csth8LXhhRZn21VLX9v5kjuZZuTYLJQwetaPCs3iPvF4M21YzA4fMXPGAFvxZNCkiQdG5oWkrNbWz",
  "key22": "5ys6rrbvJ92rhBUuZLmioMdPnEAPkwmS3uPfhta5vMmsYTReTpqrcD2Wu5pTNK26om1nm2R7vQcHMFnaEBoDaNFn",
  "key23": "5mcHX99gxnu5wwc6PYBdLTC1HArRQRENjXnrc6617rELh5JeUw95A5Lik91cuw4UY8r3HCperaG6Em8H3hShme89",
  "key24": "4pqFL3PHj7j7G4E2oUMPRCx4XW1YPAgwXFY6ieij3KvqWBnjUDKwwqbgkkqxHA1YLKUJ1WRV95Y6Cz9dBTi9ZZGU",
  "key25": "3wTbA3n2gv7eacTeMzBjWhbn7Jczjb8yWZfbmk339Afq718tqqU4qNCSZZxPpiGuqEu6kCWfSZs1cJ1URp4KtjGs",
  "key26": "57tqxBPkV44bKfiAkxk2AWuFnUHjj61P6DvGYdF2p7Q4sTRns4vtni8aDUkr6raYTp68G7cFkFUaFdFKuREK8Xrt",
  "key27": "eQvxebQp5K5AVja9H2iFpZvexMTkm2QxwRxzc8urAgZGJZhGwMx9K5Juwd2zdHZGoHpD1FjHQ4FbpA9TNWoAk96",
  "key28": "4TC7WgCA47TmDfyK32VUuJz5AGq2vRzMKk7EskQSYrfkX8qh5fSpH7FNCX48VZyauX3cfezbPWigL9BYnT6qn3nq",
  "key29": "4wHPcMMsPL2F4YZhFjFGQRj4V44Y8kFhkiakgyBtxaBnnPpCP6e3NdVxZdtgt3SiFUzeyKUg3Hw8warXfdiPemz2",
  "key30": "4swBAhxS3CUcYXSkWFxRW6zKBuiDAqLeeszb1kRgdstYqGxtSnLfU9hyeWP8pyYvnkAsjqj4oDuRqHRzkQyPQH58",
  "key31": "5HeCo7RE86yqqShzovtx4hNNAYFUVUccbvuetDGDf2vN9Xr4azBzznJ2hL7L9ygXpsPTA4CPCbRXaBbaoirfAgUQ",
  "key32": "5xc73ciht21o93M911BRKfGVe47chvWh3AnCsYxkZi1sd3uCLjPT9sbUx4mwW4RebHWtrcwPmgWdVH2XrabPjVbw",
  "key33": "3kdmxjQPq6DjuoZaJEhKCsoTy14njym21JQXqAQAbEPHnnorrerdmi4V21KojRc2i1KX9DrvbHs1vnSBA4rQTPHm",
  "key34": "5aejBecD1X9EUwd2upbCqo37cF1D53tipjdSJhYR81cRuBqPSJku4dTz654ZNuTjXNtCXimYWpPHzhAEbihpxme1",
  "key35": "5FNxiTkcb74J9hLs4d7dVu35AjKQ6xxySkXTrZut8UgQUnVSU347XU3eQhhsRMmYpY6J6eDwJjwDsF9TU7whKigG",
  "key36": "5ydDUhwtAZz2dbnr41X2dxKobLfTHW7joKwQZhmFjjDpH3krWy1TV3wo5aa7tXLmzGH62tmCJssiegNMuRFYsi1A",
  "key37": "rqDTvuttKAMKUdqbQiGnB6RLREDk8Vru5rpuLZAWK3MCD7sPBTbw7YnbN7Vga5hibQS5xAHLvQKn8vFmTdkMnTp",
  "key38": "52JqCcASJN5Hj6F36PuEULFVfJHyutKgwZT6okXhJwWPfvnKrWLyaZbnARbfk5JAKm1Gd5ewqQdvnq2HAx9rWThm",
  "key39": "3yZ2PVZ3VnGcNrJRdvaZheS4DERKgnu4oNnkTiqEumqVc9E2rxHnUpJWcV4XBXgDVR2LXxdJDkCaNQqkasMnQKLo",
  "key40": "3X1XEMprVfT9bBNZzZhtoQm8Bo3s1mNYao3kZoGdUAkQd1VysnfY8zUPSwMPkGFbmC9Lne51htbDAfv8DcxEY6m8",
  "key41": "4UCimLBziZkAwaqTBeWS1bDAavG2iaeYcaPmqVf1QUNmpuNC8FT4VBG4py8vp8QTSJMNqwWQCDQxCK2W2Qz7upqi",
  "key42": "3K3qo3vWsuQ3rQUbggEi8xGC4azezLwoc4DBf8MQJnz2vFhVzMRMF2ohoYBzjo6pd89NLryRvKM8ZbCkPLBkZ9Pg",
  "key43": "2Y9S2GgRjePNVXtkqeV49h3JWiE1P1bcD5eRMz3QV827y28CZJfL3CLe58oeacEuk3N8KvJamaN7yAEYXy76UfdM",
  "key44": "rEkBmR8SC8WR5eBmST5AJ9WPYjgSJqpEtMfAUVzJiDWsDGRxaJ8Z6NuSjErAdYXJ2YsXcLiYH3WzuqqSkg6kGcC",
  "key45": "3fgbXQGmHQ7XGxMm9aAWMRkvLU7YA1hmBWLCQ4Spxh2r2fCksBvvwW5Ewnt7KKY7g8zN6KRmzxtkT1c5EezFuv7U"
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
