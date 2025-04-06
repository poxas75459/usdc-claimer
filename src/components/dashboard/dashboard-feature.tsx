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
    "2DDfdYWeAkh5GhgChGARhYJPvj695zFbp57booGALq95RMhYf6N3c6UVUHWR4RBQi6b5di3NMwtDKb7tvupvz27k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxFQG1rXdP5HbgiWLsLvAWvXP7zbfeAZ6zPgUXxt754BaGgwMEvz7LsWxsWjSzmq84kf6rsHn3iCt94FP9VznTf",
  "key1": "2hfpjg2Q5fyVnVwEsMADbrJJf9k4EFjc2abNNmSVBXsdNunJyGgMNsgvXZTNmKxSu1hvKRVWhGFS2EUKVDorJuNj",
  "key2": "2HBVjkgTsLPncnENGLs9DKQzz7yeaPpSSwAbhoHom8a9kTQwEaLVcUs2tPQJ2bnwe4egBWgwKpszDQBtnGDcm7d6",
  "key3": "3Gtx75nqFpszEui2RjzBwFqncX2mz88V9vhM2N7hrqJtiNvDpVyH323m6wqKt5R7T26fLmF3KBQ2L4shMh5g8z1E",
  "key4": "k7beaFaSgPUhwtG5HSpmCJakWYoZKYKpXigYvRp2ekLXCcpjNDExEgvuPFM98VuwkK3ep1Pzn7CCZvUstTNNjw6",
  "key5": "2PPYfGasdtfXE1jrs8jrGepfWXiEqgJyfxDS5SdwVb7nL497sU9M3xnK1ta4QTuwoYHvfXc2eUeVcgHm6hckdDK3",
  "key6": "3tiStUhQz8mHtvp6hKYU5vaFe4Akoxb34ZepogEgE6Dpc6t4KWBn9qpHJKfhui89neZ7346YrDjs4MQDvBW6bne1",
  "key7": "3wKD9FJacEBvNL7ywCGZuXkMCW6sa4oPZaMMcdRK4q87QW5uCLqr8fuAZj1kvarMovX2Lk3z5UETpqeuRqRizkPM",
  "key8": "4CWQg8N1Pzk1dEskquRoUoP4JAbetQebgGYb3QdNFFN3pfBy4cLYEWgL5bsUvxniSnx2tY59cLgQVGvkMs7AEGo2",
  "key9": "3FSBsG4QcYrjWw9Hyhboq3qb44rhGauh1uq3cMjHuaEP452roNvG4WXT72s957pHB7rnk5d9zMbC82L8gYysdR1a",
  "key10": "kPRFLSqkCGd4wDhcXQ2AboaUxAu59wT1jyYfJqc6X3FifQi5JwQxFHNMtrQjvbf44gF2AYwZfkxy6bCp6q1C1EK",
  "key11": "5zBy2y3Jpck8z8WCpD91QY9gQf1Bm3ePorDqcrNNrwBdkHvwCjz1kUx4bwziiGQauJdhABWc9CRuwZuAeHVcME5W",
  "key12": "5j698jWfWy6tSasVB6Z3xnX4SdWJv9UCBroEhGD4RDDgt7x1CMSz8mJRawKQEcJgsDvWJNRBovknR67oWNcGkTx4",
  "key13": "2F91JAd2DqSFZa5WMAS9KwDnu1aitFHZRqFPsWmoM8WJjn14EEakdBov9HEPaPaHUZ6eD7vKcPNHvAuPsficwUs7",
  "key14": "4yMnzR8rr91mMAmqcaunumEvWW57T2pZQ42HXpCkkUjzVSgox7v9HFNnJACqFw3ph9AMFYgiUykJMj75ywwmNZYD",
  "key15": "5ADq666bemMYTnjaN7U4Yz5yaeKRKjPtzsrTo7X4jyPpBYhPMd7dhPHHTj9NfUjxwCAv9Leuovu3mLftYw3sBaTJ",
  "key16": "2q7rYAhg84rJgwgicnCtA2227VWUVb4zeUw4PASq65RiQUdn1Gc9pGKpDDajnRJZJuR2P3x7RipTTBaLqV4CD9aF",
  "key17": "gR2Xn5287VgP6UrBoX94FPmQe3usRpcJoT32VTmvYkxvyKHGFv4ohgbx6R4p4U4eTuQTiMdhqtkzWeyNh5n1erS",
  "key18": "1P6SYNaAU6JgfJ32aogdUSdu1ASgPTeiZdq7shNgaXwaU7dGiAznCEHxTWrk4CLyavMo7FnRZQQEgWi1VWasVbU",
  "key19": "219Ybw3m4LQ75HEYY74gJ8GWb4ujMjTMkPaujyUNeMMwsGh9f7dmVc6ERVqjchj11vKmEH4coqor65UJAKG5yE23",
  "key20": "5Lt1qTXLnwHSN7fkd3xmESSHMCXvh4E23wDUfJkVvHeZ3LNJU5LwAQtJZAikpmc571W5ZtLPGuZ3jGutvuD38gqf",
  "key21": "2CNyh8sb9h6fhD1THUPUasF6wDidP6cvgNjeE4SdcsUiR33yMa4xSB2svdEGiYn69YQMhnFvwY4FJySzck9fHuje",
  "key22": "XsR7SFf1RuSBnpnEa286q1EFGwZrVajLF81Z7UyerLzv1uXKpiiS5FLLhVfo8813ebZWCo9KfKvjeQCatKGa12k",
  "key23": "65Q3isK8ARHuRVzNKqvkEdJTEfRtDSHtKm1Rn5d2wPCnDyDAjKw39az3JdSwb2gMK2hRrJ4vLBdQYk56rpTai8ZA",
  "key24": "3cMZgQ5nEkJs1vcCJNsFkQcKvh1DiktubgbjUvt7umAp1azTMfeqQm8Jj1VPJ4LrKFb8ibBmJgi5SJEFwU1rgGnA",
  "key25": "Mbu783LYzvy93WQixWdfZEjudk4u2gyFNofqhLVEwuY6gqTZqa5Zm4J6JXVCmuKNsjURDr9CCMGtmjX8sRN7r2E",
  "key26": "3jnkXiNusoqYEZJR5wFzrerkLoJPs3G9yLq6TGGBiJhaLuXRvKP4gu5HPzGfnVUEs97gavas4UJGTq8kBxtukw4S",
  "key27": "4LDMyV48L8918ZnspixDLJ8AxVDB1XQZc1oMaxfJa1VMUch8R4znQYbZvi9X7WQv332VyP9Qveh56D8SmHZpeHjh",
  "key28": "53kG3BZ7kkq1cPqeG1RMunadTScLZ1LmosGcvDcc94Zvk4V2qZ3yjNouuyQQyrK3REjkAdXkKx4Ko4Zh9RGsMdNH",
  "key29": "4QYgnsiZAL3qMShxSACJrioLyCqEcLQXZQvtGR3u1Wrjz1SJKLfMfiWfozohjkKmggzi28CzEq8MvBsmKu8maQPL",
  "key30": "zNMAbhEpFhB92hFoNRyHKm6HoqxztoBCyJKtCqBxpYkGc3JAQrnwDaWReoKsBp8FW54x3Scs3uKcxHgcMVZoPo6",
  "key31": "4gBhS3ocGeLhTAxMnV8xXrnFrzsmquZSDA4YgFtYzPd9Yui2WavQyejAv5cVXpMRewTs75ZtiBSm7M2fG6FvtEUG",
  "key32": "5FJiwm3AEXmsNkzJLFeJkverAnqimBw2hky2VANXixXnXHQc45zGL53qCJH1nXXwA2EoGgHmzvP8LCWdwfvJDcSA"
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
