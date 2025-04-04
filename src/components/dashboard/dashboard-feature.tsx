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
    "3nFrBFyfrwWyjRG1pESrzw1qXLykrdP7QzTMR61ChwWjciFct2AEemeyFgv43wNjG4LkVRQCr9yo3DxKHLw4rusJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdieTYnm2nsGtNdTaGhoPmMJmPXqhCex76Sg8e2RvwKTmwDLWwEf8d84rYABpggke3u8pd2WdELmtsr2nLwrNEJ",
  "key1": "33RJtqRFxLbjkeCzQDu26mTYTdPJKjw4Fv5J7YX7em2tiFbs3uDtM8eDNub8rnpDNBY1GGej6ftV8zwZCGJXsCYF",
  "key2": "31wTQMKMiEaQUqU6HG4G4hs7LQ28EL3c3jTnuXb4CswrqnDfzRkTSYY4hQhq1t8Ah8DseTzJEKjDxG6zNB1dxYCe",
  "key3": "24763YSBsaz7vqHUizRMuC7jgb6tcRESAcKxtDp1kzEr4vTwesfcm4DqS6Tt7HGSZ6TPSxPaNT5im8681SqQztoX",
  "key4": "32t4fd5M4prmHtz3BJ1m5XtYuVBb5m9aSS6sRErzcwWWhSvm9SranaVwbNJhQsPkdn48A58JpaKZBehkYB4dVMZG",
  "key5": "4DERMavRBq2yKE2HvdRWKC4ALnnzZfEpS9fxFWnSxtvgTgN5GzJ2YQEtaPwwwtvpUdfjpFjyVjfoLW3cGfpyGNty",
  "key6": "3u9R8wgBKy7UMJY7RucxK8e4P3YCLqWZZvjJuJwCKdG3X9L3bgjGVz6q5qx6UNv7i2ZQEXje6P114YDqCaQ8UhBJ",
  "key7": "fo2uwsxC6AahauaFGHPxF3YafXCd2Rta2E4gG2GvGRush8YzybhcxKzoYpdbuLzbnEYSTrs1gnQFiQ1PyDyqjA6",
  "key8": "jRCd8x1RMnDFKWFFMgYd1MC6Ej6C2EexbsiuvfyKKbc5qL4qVJsKxr6JV4LyYRmJyGa8MwaoGhdm2mLftMc8k96",
  "key9": "34uqtmNqQUuqwQJXBEQ2N7M9yarE8SbKmNn9o3CeQX7BN9gfV2dqrMuepyDMDWem7Mcp7exVBcwF2rHFhiAN77gU",
  "key10": "49sRV1AfE3KgV9z8g5HVfTjzVTzQnk7N3PHuggQpjEzHSKfZqY7Ha7o8iiRAQp6mJdjBALdfD8Rvx1AvcMAXsSVL",
  "key11": "2GkHX3cGmJ1WtboR7ZKaMfvFpFxDwySdWXvbMk9KnsFLnBZL9y3rxny4EzuNQpzGLc3SSsXa5jbYwbZFSKNN347H",
  "key12": "2Dmd4q87CDMR7Qrs2sSQ4mGZ4q4cgzbeQHFZAt6ucbUD79vJKaDxwgzQzMaNeJzhww5DFEmGQMxpBecTHdMm5yif",
  "key13": "3uoDHWVQEq7w55VRMtTdr9BqzrT9STNCefAvY2YnUi2iXgto8QtyC9zWVmYmvQ3T4mVxjB6G3sH9YDMPASVQucwe",
  "key14": "5unbW33Kn5fvBWh6zrBYvrQRdYZipQ4tVkXpUvN9XBUsEcB7RJ3fkB3US2qB8wZGUqdb4sLKMZj62VV3QhNr9fKn",
  "key15": "5VetLAbs3cSaoNvvJJmHBx1VKhMowsnhWYK55Ya3AtwjtiZzqYqy5NjKGmLNAF85YodDMVnyYW3Bxwo8BB3dSmU5",
  "key16": "2wE1FXbzV2kafrGDUcYJ5Jpb6mqPmgBgop8bd4XZgMsYxNtDG6GuGQDtMVRsdTFdstWFrVJcF3d7Z92P1f7ihyan",
  "key17": "66NvAA6zPf2NB5GSodqKFrCepMnJJhvfKpbep4QRJJbpFVDjkHd8mZgiyiMofrcZWGstbHJxnFU1ZXiQ7P3uKwnZ",
  "key18": "3JEGztrUSKbhijs31NpD1YAmZvyaXZbX8h7LTuVyBnGS6tV3MvBCw5f49KmGvywKj12cZ5zgvYr6K5K7wfgcm6PK",
  "key19": "3tigepeXvkuHraRheRnK4B5pssAVjsfxQRa6gpk3DKkqG8GZu9nXjUjVrpyMVdUS84vdhdu5yWvHZyvd2sAS8B52",
  "key20": "3PBbdGQWkkn97Xo342femEcDiQ1zp5zmfn1Yx7N1V66fYUZ78fpCe7JqbLxEoKsFZHXnx13pUEbQovPgFiU4Q8mR",
  "key21": "59iBYhrLZZZrfPmkNKykkU3TtyTunRvLWFJAmLzdyhiLLcte12j9vb7VgWoyLp67EBj5xvc76kcm8VTFDqaSz5EG",
  "key22": "5rPPZZYVuToMp3sm9v3Kg9PWMUEyUM6h3zLLoi1g6SQTUsa1ZzHNmbs8xQVKtJ4b1oDfZg5ZufymxcQEGAeQ2ML3",
  "key23": "EZyRaW9vYuFoViMfbQAfqWAUFyud7myE4ocMp742UiZBCUrpYJ6g9k4bPjpoKDTmnQgEQXS1JqHVd9vSb41TN9K",
  "key24": "4KzUbjN7yUWFD6P7GyedufbG9TANkFDGWWbqw1ckkgD3V3Qo6mHhkAA743UJT33MzeKx1WGaT9cG6TkcRpvZRkCf",
  "key25": "61PfJjDmzsCbYnRp5TDtemaGQYWTy1aVBRr8LG3jC2F4iTvBuCisBXmPJZM5cEpFCqyaDtX6BPpKiWBJoDaQGUjP",
  "key26": "2a3JL6sN62uFhDDjXAu4yfZyhhneMgMAWbM12T5iCxhGP7328FaSCCrP7VYiYztdKj8c9iQVtKvKYoPS8sq1mRt",
  "key27": "TKk9LNtQMajU6SVsgTR7iHsDZhg8U4dVm5wcDzysbiAEofaSbMNxrbWKy6LW9hoUkPtgaMHRaYnA9jKyViMc9d2",
  "key28": "2oxEuQmSc5jBLuoBpPi8t87L5PN1yUvLoLGa41SEH53xR1rn7QwB6Z6GWZQiq5HwfyomwV6DXRHwywejBMvr7B3g",
  "key29": "CzR8jioBfpt3E1eC6ps7bj4rF12V6be6fodVoK6qybrbiJAMHwHun7b9LivrGn1V4j8E2AmS6KNdwWLfvDoAsVo",
  "key30": "3R6wwupruThPynQRBydMaUvntxx6JWohhysH731uqsHqwse3tXXWNkPTjw3b64tb2KnHCa49Ba638H2iMkPaJfFK",
  "key31": "67o7ZpeqzGDAYptTFqXBVej1rCCuJ2vGnE2sz5tQfJsSxNfySagNf2DZhsE9bFHiGW9CywBPeffrNW5kwQWNH3a1",
  "key32": "jFhBVtZfRW6Mr8GMq11iMWg3QcdrECRQVGK3FDnirEMgDDWjVL5w8JBCH6Fi5qZB27yj8koiDYNRaGa8XgsQ3cv",
  "key33": "4PK2U81HsYeg2U6BZLg35ejgec8NM5dFLWn4fKC3B4ux2LBKoRWmzJn7mivcMhUbR4KXw2vMBBkkQs8by1qBjaUE"
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
