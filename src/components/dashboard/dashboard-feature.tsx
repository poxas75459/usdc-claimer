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
    "4fHNzBUHcAaYUHyt32YCWtykeHV7iNZqdPx2Nhg9JhAYwJ4WUssBAFhds5BgL829xdTVNpidv5V8Q7NpEa618MRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hd7rBToqT1pV7newCQSYSPXoYEuj9B6gJi4u4qPGYwPmwPGuavv6e1dFywQ3WfV5MSSy7shFeYoKt5Wa9XnwmJD",
  "key1": "WKkEXwyR9GCcUe6Kvp6ai3LeF4N4LGpvRiM7tb8zVZaANWfQoa56rjkX4jBV8HBUutohwuKCxeDHNQAznwUtoEA",
  "key2": "GdnTZuLXKRCj7JhPXU6VzCS1Fogk8JkPfrXNihNbb1xftQjXRkAh9oiDSCigFaMHKHrsG63JXzvFBhzPJgBKFof",
  "key3": "5WkaiXuLePmyt69eAyn1S5eurTDi1FdeiFi3JJK4PeMZyjWWgDubuPUJQNzCqFyoTwWCqtXhQwCGJXgSCPJwZKVH",
  "key4": "2RgXzfVk8cUEdmRHbNygYNe2rkYLC4kPbMnzvhJiSHsnh7VB6n1grcsxTEL3y2jUvGfTpHXb1FUTSK7MM2AfzW9A",
  "key5": "2CHcWfbBYnZacJ1MGktGerRrZ92GXJwPZyx3QxrzRyUZzxn3rXFhG4pTo8WyUCczqiag4GVedTfV61hBrz6MeQdD",
  "key6": "3cUxWGaLcC3qAdWNYPAjcoASaEMXvx7ZHWZbX3qgt33uexHT3d9XLB297RS6JaKruC62hnd854qpXqD9obSXZxWJ",
  "key7": "3abaKPGMEqK4U2269xRd5WAqM7s2oVTwQyh9opWqA3X9hT4CmWNJTpUADKKr5kHQYSr77FyhK1GxpSghW58Pi3zD",
  "key8": "467Ug8TCatiL7PBeNtNbfRcevRU9ufvuSF8i4qBEq8SX8W4tWgn5U7FyNTmhFzHqtcCSa2KyMY93TZpthU14c6HK",
  "key9": "2286rsHkGPwcicQperoEjrHbkcnTBHJVjEX4sQXw1miigWJggDqSzG6rUKxkStvKiDCck54x8yYxpyDxTb9jtutH",
  "key10": "3LyRU26GMuE8WduXJJsxjPPSEHb8vtGLMbGDKfbsysUZQP2WTW311EtqjjCjwQ9NEy3DbEcXgYWq97unjrRNoAyW",
  "key11": "GSXNzDv2xGNDPBRi95WZMfNfMzHnVW4QBYPkuBSc2YrqiWUE39n6XVE49kfNSNTcmFmzKP7RtHdDEYAciMvmVsL",
  "key12": "59osmf5VAQsZwCchNiCZrV4jDRSxTftiMWokowWtQQxPfyUgY1wwK3jAQjUrdSLNkUCp5MgyPg8kVjoJYx4Z1Sv5",
  "key13": "3vcLxxGJ78te1mDQFEYE1qMG2CUqVa7wmtLdFW17CeaaUngJ6CRopmwV3XEP5px3SuRvS62G2JfrrhTCZc2WRbeT",
  "key14": "4QkZAfiQFSirq26cKErHrUDVeUyAsM9ZbmJ3dbbuJ4hfdN3TAMnyfiVKWBcQRt18EkJshdA4QGzLQ5q2i3qZ8mac",
  "key15": "5XpV3wRgtcLak5zaHgiVe4bNiUsn78t7TY2zh1Uc9n3SYM9jZNFhWu28BL4dYTurW5VRLVPnyNLgPLQi2rEio2TB",
  "key16": "44qktP7e5cfRGwpuSizaJUh4yRmrt9Qvvz4hinPADfQTuGKLNVkTrLjkmr3itCtR5kzpoyeYYas92VSgnw56Pzci",
  "key17": "2g5TjbDdzQz3wCJrif8cWgGJJDLpiLMHvzQxYWiS5RzYDVicBPdjmxfa51h84xSepngX5LU3WRX42GV4Antm2uxT",
  "key18": "3oRWPVvSXL4jeUpguumM9j71tdbsUpxcXHmZuNXKDieQBAyzeHRFMvBH3AuFZR2pHkn4zdWzM5CocnjTVLeeS5Lf",
  "key19": "4G9so4fFPF2YtgJ1gb33UBJ2B9r81qLbUT8KNE8ECWu7XX4VuTY2Xj4Y1fCfkKqd7cdK2LCDJHNM3BuBpxqYkgVm",
  "key20": "34x6eFRe3eX9buC5R9Mz7chB6EC3816pjNGpPgAtezXUn41uuZ5FXgEtERrfzAwu1Bhz8TyHRWdTjMvF256RjrEs",
  "key21": "28PafK1tCijjkswGd37iKd8R2hCQy1eegrKcQdjKDxTouCgHXPMsW2oT6zAtqbpZMK9AVik6cYLoKnheApLKvaDS",
  "key22": "4XqFi8mt14oKYr2RKfZTBAj1kuEtqb6cgvSS1rHkcPsX7npKTC7KDvdLhjqj2H1nrtv1FjGamBJPj5ud9jhHdg7",
  "key23": "2dvdAR5mmsJmqe2pcC6gZYTZFJ3a7fMjZKUnzZ3YMbk85PBnDVEnQm7mCCEDpZKGXpqFQiLfzLnM1DqkFXnUv4zS",
  "key24": "5ADke7FWuzs17CTno5TXpo6HgMeFhfhonKGh2RJDTd2STwbpDnTeYYWE1HxTT42yTKwQbvT4rMQmLjBLC5L4YJad",
  "key25": "2TGcnUbr69p4GebTxds2XT9L1mPxbbiBnWQmrFEs2Fh6WhWiuUNY5qXjaDxu5oxXfcfJH42nYJbVRz7rKZM2aowT",
  "key26": "4dx12EjSdBPjLXKUijx9pysMn1mHRpi86Dajuose7kkNhNSBMSUBbga7h7uPofWWGekDrNkncdM3Wh8gJzSM22Tj",
  "key27": "VxFZVsg6yxjtK5nDh4UxbjtcwzvigmgBRy5vEUiv4sosy5Zkq7dqNeiEpWvDAH1QqY7n2S9yyLs2XVirT4axZ7G",
  "key28": "5febbY7SHxZNXU4Pu6pZ6iu8qvvskPngFCv6QGMvLKaMDRopeQLZsA8E3m7LkZEWgzohUAdKsDrwDkYejj5bdVVU",
  "key29": "4PJk5njm14NYkKnmT7MpeaLAcj7QbLUJ8Df5LYoSR1pfQK9f7g5YekiJz2FkDEPty2wa8Yk88A89hDxE4pFMRMgv",
  "key30": "5cLmWSyvrrA3jbecgfjhWWr14RxvRpndZTEYZuR1r8fjRobiu1BTJsNn5ez7AMt233u7rd9SxnXLAS9x3R9NpoDw",
  "key31": "5Vky1jTSTGqLQbuWyCQd6JueKnHiXTSAGMpJAxXcqEjY5chG5PKwttDvbG6yG6C9ogAnwLCjWRGKEZpjMAUCZWio",
  "key32": "583kpMuBp6DE7aEfNymffCtfWeLpvbR6ZWKvAPLdfxp12HPUq76LsFtERyHTRx7W3qSnmG8mzLpAyPeyu1eZCUc1",
  "key33": "77eVkNrnC6WUEYpPDXFExCr7Vw8Ed3zdNH3KZDCWhhcRLgE96CCAYgJUKXeCRREDmUUEQbR4mKkLqf52aEAWvq6",
  "key34": "64QryXsKr4XLNwvvreopZYtvnmPGLsZ2fy5BbvHGvHAagHw6S8u3DigexrcVSyR4yS6JfsYy2E3Vq37gqv89TfAV",
  "key35": "5qS4rcFqSMc5tiqD8nwbLnjLRVpdxC1AFryf1jfrPXsJuV4pvnRopXrkAGRiuqSwX11n7sPnqmHW8EMgF3Tpgg69"
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
