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
    "2uG8i82tfH2qVJ7A3tA6f6PLsZxDDr42YnD8YrXrpcqTPv46qdU7MAfAvtEvqd3Q2xjG9iag1Lxp7AmwjLY6AfHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHNBXn57ip4zoQEirWy9qdiXqJuUt2ucfK9ixTypFrBmK73ZMh5PaTRJ7zHPfopwnpStfhvUemY4JduG7q3Ruvf",
  "key1": "4DdgF4oZGe8FApWHsHqVA2Ka21EeEyTDVFtsrQraqax6B43athAnaC5hvUbaRwbW7KUWE22WjmcseBVnMs2iRUzQ",
  "key2": "4mH6CawoGYs24kWUaEMcfVjd7ykubhdDRPg7BSiE2SJ8JdmqPj7328fMepMhrNPmvfzGtcbKigzQZBQWJYK4aATw",
  "key3": "3b6m2pA7QYiC8ufVuLziU6ACQDK7TytGh6i4Rp3PEjmNTjNe57WpizpPjdYt39ams2439SVv3hBbJPhGvLbeSy7G",
  "key4": "3K8qv7dPexTmAiUtPA2TCmj1ana9qTUebHwoQ2Xf6P7356jwxGvdtNTTSq4VE9dMoha3TCoLPB5wbHveF7UbwJTo",
  "key5": "MvZdQANJUnDRtM3RT6tsgJkf8fQbQKqVRqLfsypHS7BhjX3TYSgifyRKsk5qnZm5Kn1HQntjAi82iWEAbauLMca",
  "key6": "33yAvqnGziZ8T47LTLBKpcAUuN3YrWe83ZCv2MFj5ZG4f63VrUcQyhAagVkZxv2Hgva86A9spvBHnnmkfU4Gp7Ce",
  "key7": "RdgyTWYJqhjWjk5DGzVTbDfV7PiNJW8Udid54AZuvMyAADzvMo6DG4zKDzZgXGYXuNeEYTmUTW9dj8VTFgUmPrb",
  "key8": "3Pm93FRb4WWvKVEJcVKwn6edzUvUVkW3RTdmNWDrcZdkmafAPACZknEwEXmqWo5cPXM6oiFSZftxRgVwqinuooPe",
  "key9": "2Navg922RW76fGkjFHRdQVSsYV2pMoyZzodDB9cLnokf2e4Hx8qPvJ2uDTo2Z7yiJ4rTaZ8ZPn7nANCxwuQctoyW",
  "key10": "5JPsH4sj4fvr2sW5PZLSWP1BC6fTPFLqmzeGtbfd2eJqqoZsCDPcs8j7WgeEtNJRwjwu26BE7uVYtigPeduYRCQj",
  "key11": "5e8FcJEpoRMi3KJtaMVoFSkXtsvM3moQS2FteJfvBgCAUWoaFy68Xpz3JWtWJSybTzcuQmmMnyVy5fBGqnmp27nq",
  "key12": "2GhpTHZLWZy9k9TjmvuVjW1WosYTUfbEVRNpHt1VqPBLGrLX29gz2vnsr7ZTmwKevXTvNFVNfAg6q4CjE6zc4tUS",
  "key13": "2N3kMBBCACuCXiUiRmsk9JcZEtM2zrbJQUcKsGCFtULzmVS6LXZ1Ndcpxk5xBMLU2bdt9toNHrAu2X242qFc3hEx",
  "key14": "2TswpJ7W4xrqVMMiX8m1iHiRXo9fARD3Yu4qPZte2sG8WVuDpBKfViGcFfr1T4K4zHSaCuCVQbhjaKLKjSrr2Gdb",
  "key15": "4HwvycaTfvnJkp8HtunCqfNoFpgyUxeJxvSyya67AjZN7BjysBATi47YkVfSugULzmLPFXmiazU2C1iZvFXiDrtG",
  "key16": "gsydRNSTLriTowL63LpyEH1hEGftVt6xj5Ey5mHiNKXEeudT3LcUd6ayWHm9fGasinK9kMYG7uFh8b2Yykd3ghE",
  "key17": "pVLWvwJnCKn3eqofHs8YxaRRRfX8XtGAkGhqTE3esrHsYv9J9PhuN9DazMWkuC95cn5Gw43MCXsEwL4cTZvS7Ta",
  "key18": "55YzUKfPjzvUsHbcna76x3FZ78m5mj9JsagMsAuofQnZb5QNAzoCM3hSyFZc3tYmKJR3FS717G3h45UpuPzE2M5o",
  "key19": "2VwtaB4a4onk8uXymeX3iqft13pJ6Vcy2xs5CRzrowuzozynWcR5Zf2HLVUuwaZV8dv4iiDRABEHjevWkzs2LH5v",
  "key20": "4hYA8nqc2CFVC1ymHLhX4aRHkATosS1tbBf4nptSkExx7xTiGY9W8861PhzuNiKE8n8dg7Ja5WRBVhBRvaqTerWX",
  "key21": "2tpYScBfXbwvFz5csdSPDV3kxwk6yJdXvH9NabuXpRbwAaBTTBKLTqL9rDq135QiQ5wFCSAbJNaDs15ANbLmiNnx",
  "key22": "3J6qKEJNEkgMfRVb4VZ4qarRY6Ba7YpgsRuDLLc39bko88GqHkEmgAMBLKPnJajVVqVdqhmWh5z27vHgUdZw5uF8",
  "key23": "5hFcr1L1Z4ovAPFCW7Ab8S9i1zyjEoUQb26zTG748A9z7u2Ua5iPbZswpJAU8ypozjaPVS9RMr7ekzJYi9rwfv22",
  "key24": "27ZMx9iSCceHJVYd8hLD7f4WzG22CmBcxgdtSUaz3rXYUfddAaSovdi7Ck9yRoNTQg1XGjYjTZjQVXPHoreu3gyt",
  "key25": "4aFvH8D84bL71EvcgazHyK6FjG83fEjNNm2vCm687jp4vWe76j9zbUiAFXEmiTpcR5FXtFrMKPMj3koWj9i2puGc",
  "key26": "2nDvU1ytYRy8ASShUZQ1zgoyvtWuN5F3UPBs7mvbvkmZJEhMXtLNX8UtAtZvESorc776mFDpeY8BsxkWNxA7dfcK",
  "key27": "5BDzaycQo2MSy9wBfSPX7ZG3t2nA4aQMqwRdj6q8m6FYx2MNfgAbiSxdQJdJtT6LL9mBZ6Qxe7TxCxeZFM764ps8",
  "key28": "DkktFeNTwTcURUvou88mw9chhYwSqZW6YzHzXVzq46yGp8ESLT8SG1hSio6DdwG2foZjmCpLMWiXHHAtEpUbngf"
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
