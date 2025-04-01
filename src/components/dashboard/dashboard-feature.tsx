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
    "4cWAYR7Uq4qwQhAEpbvXHjBEbuRcNBRxk4E8j88AEkaRxHo9Z1H3bYjMmEfjvhWEdtiwhJZ6PffMzpcZ4x4Nemcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxYCcGXEkwhDnjuz1aqjoatLrA7KdPhFihKApV2H8mi7km3XsPteB7UdRoc54FPoqMWeuznaMHSzB9RFQM1Gtnv",
  "key1": "4ZHskwDEL9cBeP3pLh5Y9BJ9pY7GUGTKpvPavJNftBcDhAnu6858yUJ4JA3hu5eTRnCfR2CfuU5JjjuKF2nK3zj",
  "key2": "5EEHqYbNDQctZ4RmSqfT69HrcaiU8Wc56Af7r6AGRKQqHS6B4csCXHm912jyZP844eDHbsxqFdwRzGrghV4ecE2U",
  "key3": "2jDQCn9f7m1vXjnbBtBtedceXpwaBxsP5SBggfkbvdRBtz1WpUvzqk3iGT6ZyPiEWqcGJucNe2ov28YAhGddtVRq",
  "key4": "3Eg1H6qddABbVKhhZtnE6XmCXHUJfmVTQG1Z7ewnPPXGezpM4JJzNqHHNDxcKWCwXVpSmWht28w1ENXCyorxS5vN",
  "key5": "8G4sU8ULgYX5jPkbCNQhGGWDdy5YJRZWZUk2kEcccaT5dRGkbNxPVukrLSJX6mimbFMCCU73LCx1dCvHUrxMSa7",
  "key6": "5MvcTpoK9CKtdQKYbQ7yyEj9s9EfszprpNomroKzu18SvmWxk51Cz3VJBdbMcUamFFQ74io3vqqKtGiY8NfkEMFY",
  "key7": "3WHDtWEhW6m42GccnBK6fnbHsY4b2JTUWSwmzAJ48FSMSvxME3XJU3DZauc52JE5VBNb9Pgo1Sd79d6snnXxYdYp",
  "key8": "2xdVyH4tNcHdufhXGPyqsPV88oUVgzpB1yryCXHTgZR1u7YARHcCNNDkneGtTWavUu2TZuzaweqc6rvjRiiw2bb3",
  "key9": "5aaJQUs43dno1X6WoyJ83oTnjnits8VP38PS56PQHUNtKaE3rCzbMLZVWh24W7BPKmr6vfhoeuKCt14RaoTxambA",
  "key10": "3eRV9CQwbXWR99zxjA4jajowdNSbYo6gp4364wvc8zToX8Ef1PpLLutf55iCUzYEdsJsRiVjMucxGcRPArd8dXWE",
  "key11": "26uCsDLxGd3RJhopnbS6auqX66L6dySKBb5WLed9eGGwUxAUiJBBoYQiqJF4GGkfj3BBqXLvECKiS1Kd4wsMft2C",
  "key12": "31vnLQVPWnGiTFXXVKYbGqQJKGJxJ1hEAzBevvkp9U2te9XJn2XRE4GfdD2pHFME1cn3xviNEMUctQbs1YhyoGHc",
  "key13": "X54exq36qnMw3mFYoG6iSVQZwUopGZ1gYCnU92zPfXDTnfHSpSiKXJ7QsuD2yTd4FwGcDa9F69HyXtgUNSerLKK",
  "key14": "5wFT467r7AP6GLEDqESVAYsSPmbGt9TPZTN661zk1HczX71ik6QLjcxp8nXZoz69LiXvCkLA7bSdqb1GedJdy2Du",
  "key15": "2jnFbywegVKobfAutfVNbJYpf1iYG3K8y9xHJRtheLQh2tFc8kfJ8gRMPtmmJVkSXLnBbehw28TjU2CbWAtz8Dd1",
  "key16": "38bBzGkEdKmAMDfaN1DrrGqAfAu3LqTHm9QRXrxFGQ8Rmp1xCPqto6B2sY1CQhkeYPcAF4bdY7yq2wx3kK2futws",
  "key17": "41SpSA7KR6ytSsh7HzDhHL7maDwakiiPmnK6fC4Fqma2HC5xpoHfazwG6Un8g3q2rAMjxheW6NyHqrmTPTrKScTW",
  "key18": "NAZtmBrBzCwfxN7hPdJeY8UtqcKYrwsGiFqnL7Y5WRMw1MPMUsUKXurSwLF7AzGBNNJ9eAe8Uhjqew19aBAk7ZJ",
  "key19": "2fVqvCiRRBWT1TXtenFfjZetBx9XCfHhDvTmFdqX1rKF7iYmBwXGYsapkN5FbsG1PHCs4y4N1PBGy1yu3BxDS5oY",
  "key20": "5hYBs8xejTHYDNaL16dvE9CCmNxJUBjkyb82sdrXtMJcqYQXx2MQEMfcPyEM2YRf1DhGk9xqRn9V2qWdsT25TmxP",
  "key21": "3nHLS5KnPSUnSH9nBdTcASAGAhwWTYs3hci2cgS7G6Gndty8mj9noG1ZTDviy5Lg8VHCqRYc8BFQJkybCxtZKqrF",
  "key22": "UHFR4Q9d2JQdF895fecrK4f2MZ2XwttKE3jQrqUTYUGXzey2pGW8UooRAbiZAgWhAG9gsLqwor8DDsVZUVnXBFq",
  "key23": "4mweMdaw7qn1TCyCjNijaWzV2eaj3oAGYQZimy3Ri1B6deuUHmGAk19M1Wsioc4xmdEYspzLHKvdmu7chKfto8Ps",
  "key24": "NYv498UgAgvw7eft9okhKmfZeRZy4h6Nq8Q5iujM9P25iGEiHH6Ms9oMFHLyB737Z1kuAZBHfkMRUFj4oCRBrRX",
  "key25": "3xBWLjWbUpjSeBHRr2z358VBhYroRd1bdPXt2UQydyN16bRGMbjtTWjXbQ3Axc5uL41Hwf2dykmEvTDTPP5QkfYK",
  "key26": "5gd1P8YR3iSthEE9Xomk3zx3FUD1BT1o51wp9v66AXu6JHF1AazQf9sd47KntKvN2sxPn7WK2St2V6uECToqR9CU",
  "key27": "h5gM32LqzcXzQAXbfjrP9t2yc17qpPLd1MQMmRVjzCU4huxYtJy7okCyhJpkcD41zi4ms6djQJJ9J982YXTnFxY",
  "key28": "5sJBzzK4apJLBAWygEZMcVc5aYqMbV6gBpCbXvSDtdwuLsyiyckFEys8FAgnY7s8fHhScdoDyNtBTfLngxVAREji"
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
