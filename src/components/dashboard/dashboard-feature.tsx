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
    "3489kus4QPaYAEV7n2xqVP6S573kCHPhEbGsZUwuYVtngKTybpN4ghTxeWxwK1orYfS51To8jXdedKLbKM53JULv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppk8zLhQLHfztFfjjsX4saRUh1eh8oCEirkywmwarf7REzENr7oLFovaeSdVA2LQh4RrhAbb7QTRv3oENWBDPwU",
  "key1": "5sss9EmWYXC5ecezhpewCommSCKHyRtifpytW5hQdDjm9a716chx7bvRLjUfT4mEPvopFdEGoA6tCD6W4CWFxNxx",
  "key2": "3yq28ToWnWgPYUP2ZooYYR7tQH7fRcwTsDEYrtBAv5jfFMi2s2fJ8Hi2RJm2hdGAz7tJV1vxqPMPYKDBbG2JgdLN",
  "key3": "5forDXjt4Kt68XK95rwUGodh6KjwuD9Y7vHP1zbXi5f6QTWU3pjZf1wesnuvBSvE7bV8w8sjr4wX8GjqorazUVss",
  "key4": "2TTGbUP93X9L96nsRBYtgMqjLUjtwJYjayZAQFjhzSog4qyi7a6K179cSxToqUuyg8G9RwoJVZnNpAE5cUVb3eR8",
  "key5": "4azeZfUcZUdzJggyryyv6TWZG3HFonYxU6EBNy4dU3VzDoA8hs63Zakbtue5fZh2m2yGKGbbkq3R2Srrw9YtVYks",
  "key6": "3EePcRsEsnCuGTouHP4gdEVy8rckrub7h6A7s91LEiw4RVav51wP2XNa4DLaX6C3uMWAt8m68s4sqhaisaMNDsFc",
  "key7": "5tEMZbJYJCqzBYMWG78rEgZcugeUsvqxPYug8c797FruYrTrRuppFFMCfGdQnZWN4pL9QZ2gRrx4vUQhSPFbStXJ",
  "key8": "3fjC1hQSma3ALNJqiDbEH9ch84MHXokLjUZemG6v5GRTEw18z9X8Ta8Ev8eL2cHsxZ6TS4vTXjWZVtAUUwifPGF8",
  "key9": "5Bm6q8QJzGTEpdMSQDd4vasGYoQNqX9YiSjKcC5noJ8bbpLTr4M9Y17N4D8iw3BGkNurX3mmbHeQ5AMtKMEm5PSx",
  "key10": "2MAs1k2uEJhk4TaUiaapLYAjJifHE1BaABJAhPfmpZ2bjD7U5BYvp92mtKfTJrB5Fb2VaVJ2MBAR5YxnDZFEY4EP",
  "key11": "3mV6xKmwtqDrFuKLnxvHqmUsixZpsTbRk4UPv3LSeKZFB99AhfpkMPdDQAEyy2jTnyDXK8zmhMpmhYEFSTWCeT3g",
  "key12": "3HrxWWiBpGnr9hnAsBYyKxJoMufvzZvatVhy8uRd5mywmjaEgDXNWFawz5P1paqcmRcbwzgB5JNr1e6eh8ypk5zc",
  "key13": "ATxp8UvqJRmWRt3st5jEpz7PZvtVBU3rM2tZX3JmXQLGcHPzvbF6JegKRoRFt1RBrxeejYdgtjbgffxufGF1ZPn",
  "key14": "5Pqu635t3b94nf8duEGzP7uEy27TuKQqAm98Et2qaUiUyZsrSUgDRD8XcXtQryW7ngYM51DuhC5RbHeLpzdwfD8Y",
  "key15": "3FE3dQ8UuyTHzKrzdZoY1V2JWJajVmpnZZT34xGpq32TN6w3Uue8AyC4k5T3iRdWsvecKryS6ytgTfvdWNmqZbsZ",
  "key16": "3EKW6rHjwWMmYhKJUWANLShEsAq4r3ZogSt5L7oauapBNeEjQnU7YJT7L8SEBh8qjuX3iimXfku5qK8SnSbUCTUL",
  "key17": "3HgQxCnt6pDXbj4QDVKHpxh8FLKjJv64Yip83HY5X8XhMrdoGZ727kpmJ5YbWrzPuvYiuqPymVcKozXtu7rudw4A",
  "key18": "5KWNtkQzutnaLLiYaQ2FjGdvMG6HNCE9TvVj5dq4tuginpkn2gvC25ufFZzjaWvFUUTVC7pdG1LZQ9uHy3ww2UZv",
  "key19": "31MMwizi93A6PqXGKfvppefeN7MvXfRbNyNbKLWjxbHdKsYyzCj7MT5Sw5ChvSzuiVK6G3MXbnFaAhuB1psJXojx",
  "key20": "5eiFuFEyTzMV9ZTXK7omX2QgokzN8PivRntSHkTrd1SqEqfvCMR4BthAU8tB1Us8REHCT6KyQiTiv6cyqiT2dykN",
  "key21": "3nqRAs1EDQsMVLGnY2Ln9sgteygFvtKfrcm9yNTNQbDPzfP8yUuWTcX1xHP82w9mTwzXSbjLK1Y3MMXUTZyNacvW",
  "key22": "2cWP4hhhdw7sFrvyoFnk7zGDUrbmQZ9cBo1xgFUADKAuDLvA6DxHY1AdtQMWp2iB5Ep52iHi71Dju3iCXU53FdLX",
  "key23": "zQX1qGbS2mGWerD8gkT2ReEGvKgR1hDotXuiQwVk9C6W8KoLhzxUicvVvKahYTaZc9cgstH4F1YbYwX36hgoStQ",
  "key24": "5y7Y6X88xJk4AuoR3nqQYokKyPoepcAfz4cg1rGZ4Fe6tJbf7QSmCv3ydr4fQRMe7Y4QMJYNy3H4biotKrQm6epo",
  "key25": "N4LeFiPwe5jWMbpJD1BKpW9btNSsN12jCJLPdW58EPXnVPTJexF17tEWDqte18w8EFB9x6qwMteTeragg4wsoaH",
  "key26": "7P5FMwAPyA766BwURikjp7mVhoDSEvBzD7BTfNYYMekmn4dQaEtx1Bt1uMbcYAJJ5rgXYUVfuJGERb96PzJeMyf",
  "key27": "F7H6hNcZH6Z7fLmj6LuNQAFiBJjTvyaRZBebUYAfcQjBKSdxkUYX5LbxYzxmcfpxBKsM3t8FfyocRAcjs4UEEjP",
  "key28": "2aQavaJfuWZz43k1iH3gUubJBPbfc6itE4sz6KBbXmURFc92ptfFmDyQbNGgpgidAReik3ndzjKmgdXg4egNS8JU",
  "key29": "3xnbf8Z8VkFKbySv43aHEzg3RHvkb6FNAXCYowuwvSxtPLAzGgPZZaM9DPHksUri5jm9Q3YqyegpxhiP8uCg3kGz",
  "key30": "4HrazyNVFVXc86C43g58PFdMuToVCoJ5VCNdJ6mau4bD7qC8HqAKEnPb58oV5cHP9adtWj8Gg5GReFJiyhdvDHZs",
  "key31": "35aNh9JtUDXZfuUGAdMSvhNLo1sv7ik2KjQgtw9ZLQd6EQYN1tiQQYS5GUcTcfwWDaVa2pwra7kQaDYSCdHg9FFK",
  "key32": "2n1jkkuy2Zmg8YAFbz85oddZfssn6dDuNMrz5sDbmHCM1z5C7qmLcugSbhhmKD9qhRuWw3hWPTuCuBRoJUNaad2X"
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
