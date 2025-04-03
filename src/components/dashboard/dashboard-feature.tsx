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
    "4LJbMxpwQxi1GpcjyTaTSeYMqxrabeXki9fC6A4FeCMbUZk6n4u7XD5Eq2JWgNYezwKEe85Qa7Zg6NdKxSfAA7Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGtK4iaAF5G1XcVhHHVoTCr2eS5LMWqNnyKuoesUA3vSLLYL263vhuwr1wGgvWZfaUu34Ao4GuT16n6bRNWJTtB",
  "key1": "65uNWS5fe44iGp81JMVnLBpfBcDTP5TZ9NsvmWupjFWREfR1si41GQLdJ5cYhbH2i41rRLKHuB4hx6EwtPUEpL53",
  "key2": "5QrmRqG6LEZzWnYqXVepir6HFEpwmEzZZZ1iRP1egjFkeuc7ZgotwfPgest3t4mYu7U5TWSpyBrP4CrzjhvGzJFs",
  "key3": "55WhmAkSvXBKNZKtSHzDZCKJ3ajmCqndhzsgx4N9y6hBHhg76uvp8WPMT1wbUoPb17DkvEXcquAbBk98XW5V2x35",
  "key4": "5CMdbeD1NisayRK3fRwK1UG1UyJtzGy3Vpy565C6bPrxGswY17LudzYyzhTsXuoceYhYDcUSRAmgkb2KNYG7snAg",
  "key5": "2jkfXd5JwK5MeGMnCahWmijaMi79GA7S2jnvHLgtjstRTEPyUJviC64efd6hiyi3BTrCMcXMxSP1dzgJLy8kfnSK",
  "key6": "41AN3ePxwNHQwCUYevUswqmvcEjKwsEUKNEj6zQdFTUHcAzHentM241y6CUhHBqJyqgMe9NFfcPHAoKreXic8xKH",
  "key7": "4RHZ5UNs98EW5VfmgKGrzfzMXU3R9muUg4R2AjFjQ46wcAT4gZnxCv31FhfhDCWxHTvziaAMSB2rJZKLT6G7AexW",
  "key8": "3qJaf7uAKPksoeKPRKgFD1z65DcM9xqJphFZpbEhm89H6yqxb2bN37JP4DXBRK31vXizX7kY9czfRojzNYNDc9MN",
  "key9": "5n3VQbCgiq9mpMHraTk9ZcPfPAZKGNJDxuW7hGB8MyoZSjemCC2wmsEGsBNRtz7QT2cJBUiF6HAoZyQtE6PSbpzR",
  "key10": "2CXV16DMnm4jT61UiD7Mv1A9NHA1hZx4SCdKt7BUurm6GhmncCmmJxQEMWrbSRAnXe6rLSXXU5u2PLUq4JfhQVT5",
  "key11": "izRANyeQw2kAi5PbRetc9q1SQnPZdhGqgKpDX1EFWssn69Kpx8PQZgeq9u7yejB1naNXAhznrGmDvS9P7kB6GfW",
  "key12": "jfrGxqvZzTwwR7mhUsxD6FrdbGBjprdGtaDxeS2ndpPwWBatnh92QU7UWTVHLa38xo28PPMGKWkUXok3mfDWjvh",
  "key13": "3iGYgMWZPin5Aj4caGNEEMGsj9tyrkpBuQ7Pkb8UK7ZtCCaku3ijDUcN5DPtNjHQAq4Awcae3Kz9rYw54oMr1eK3",
  "key14": "4JNU9Y4Xi1fvNfUrW9wxBwsY21PuKcbeAZdfWB6sCjn1z7cvErZ21f2RDSyBUd5ZNco7oxkykQUtA49tzzsKhhhM",
  "key15": "5YhNK5uTLW9ymzuZ9cvCkhZEk2U1S1dkZmhXez1uaEGA4oanJt44D86iSRKNLm4EJ46Wb1v9CxWQ5MqUBrtTe44d",
  "key16": "42Fi7DLiPzNHcUVpUd7M4xK62Vhn2BWzxx77i5RPX1ShY5nq8RYv8QRRyVtWA9kERbZyb8ssWtVyQa3kS4CVfZuw",
  "key17": "3j9n2X5pGsXdoEXidpahwbDfvriYuUqEoXfC56SiNKVc2CuGfU3gY8cUyecjAsmH6RrdUg5Gdqxwya8LpCesBAc8",
  "key18": "3GnryzNHjDFpBA72TzC6e26H2upictUjmNht9E9Sr1Ppa7XHXr2j4SE5EgySygh9rQQWuuV4g8ZhvVHq1KBF9oNR",
  "key19": "fnjHR7V57MSo8955cfmrzctgbQzmkJd1k7Hwp5FoNJrBGCA65wkRsXSNrPAGNsG5uAmAWGLvrt55gnyoGUbGrBS",
  "key20": "5TDVdkueNrxUJFsuqvP6LV4Vnrc8PoBx6ozbquWeKCkb1JRPAyzDynwUW9NUD64hJUxBbDJ7XsphxtR7ZCjXgfe",
  "key21": "4hfkMf7vtj9vTvFKKR4CQzdHgHh7zVe4zZ7X8dUaA1kUADMK5hBkRKeAFtKWDYWimVkHM78mFJqShG6TcecRvb6F",
  "key22": "4ba6RFRdmH8wpm3FkRy7eBev12BZ5Rig9SAHMiA8BzRF1ZkZboJMPRBgwjTb5KWo5JB79gb3fzg8iB3Z2LxPVGRg",
  "key23": "62jAMSFZYpyRsnNfxSHhTeGbVsyrqV6DhP5xRZrKbPeCgAf2H9LJWbS3DTCQ9UoXY9sJLnKkirPBVZ6W7F429C99",
  "key24": "4aie21zUThctj7RopuhzKiB3WPZJDXdtrH6SdqN7X3bj8pqmkX9mDo2Fn2G8Cs3ANkL9wxvcoy3jYD6VHibzndCE",
  "key25": "4PgmNspF9rDNqBxXsRWny2hgSMWRw6piJXzoPutMDKSw48uMnBXgeAuMiUqcHLazQjFJL6G3MQgZxdGn9fuPw689",
  "key26": "67RujVP46Hvq7DHcGGeqn36QhbFFQWm9nJSyi6RLA29PVuRKuNVeW8JyEPn1HRx3UrW5m4fmAGTKa24aPUDCJG6Q",
  "key27": "5oLBmU5uiu3wQ1MwRiZRk9vjraykkCVgrNHn6P4umhBHRGUX7zU4CY9E5ecRjoLbpXeKpsquGGXc6ArxVyeHv6i4"
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
