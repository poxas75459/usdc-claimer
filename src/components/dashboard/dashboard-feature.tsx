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
    "4ia1Zsx3cTFtAdk5LZK2Pnd1xjZYx1H6fT3AHZVrPLnUpgo1rGXq1uB4bZZ86gm6hqqcHtAyNPw36iKtsAXcBhrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmajP6BYf3M6nX9DvN4YWzvtwkK8ZEd6NCDPnYB7R3n7wKgio5ELrLPzK3UYRn5UnGy5Fbyo8AjWLsh38umxta7",
  "key1": "44jMhSpnEw5UW17heKGdg9kX5F6iYJnXvynoVBKMDyWMVemJmgz2vSUWqdsSjhZ4Ve1WS3a63eaDHUosnqXs3sTd",
  "key2": "2s3L7DLmkeBMVhxPoMmbxaRryCdjWVGrR7SM1Tk5WaKK9DLge5Nbbe1AKsEWZ7FBpQziT5kDbyZy2Rkdkmcwy6bf",
  "key3": "5aRqNfQWspgfFg6x8tBdfdu6t99p4JPveYg4iruu6cueBiGkM4M2Cx3YivjBT7uWkd5F6usvq6Kv6vaLxzvnofUz",
  "key4": "7uiNcVJjHK99HdAsymgZroqUt4QJSkvUmp2mjLBmTnLj3LbLXEykNUVW4k5mmg1qRWa9EqZBC93gwRXvGKpjh81",
  "key5": "d2w42ibtDytoa25Vj9NVQDQzNFZ2oFvjcQUWCsemXZ8LSsHmb54La1L5XV9KY24pHLLGKhN2c1iVRWbYMWU6hzB",
  "key6": "5zX1T66zMPfjSgAqger6sfz7zGfBuqxVdH3atgtHnpfTddLeXTwxmM6Lzyna67HcgcTHxzqEexZdf67EefSLAwaN",
  "key7": "5SkiwmYMnPx1nUb3n8M5vqAQVSbHiGhaimRGZCxih6EnaqURUNR3m4WHpwaXhchW5eNZ3ipYvKhJeAYwjES1oH8d",
  "key8": "3QSP6JauXVd4bpRN6939pPwgMoaGeY9cMvF2gNKVngxkTxFabTVXjmYKNXPXUtbHeYPfQwK862tsVEb9JmVL7LKX",
  "key9": "uYq8zme8UZNcgo2LHsGmpPMqBLng2cTJKxEhKVfHCEeQ2j1m6SzWrxd2Vyhchc7MhjubQzkSqfPGT6ziuJ56x3U",
  "key10": "qfZHFnhxee9U4zuUkHeEVu78fzZNrEBfCPHT5ALvFBtKABBkcDckdq85i33FGDM5srRd3ZvfKPmvbpi2K9jK29H",
  "key11": "muShre8eqz844rL7j6se4myhQbgDk4KNc2Aezo9QUEWJqh3Q9y9FNsxYhtC8fWKUGVgmddJgfpR9c2LPQV6AJ69",
  "key12": "443ueC8ZfrrNMNfVXD8r7A7XWeGgFM6PJ9PYjRTNT9nc1ZJtkaXAXrPu2XRXzPQTHzmPiEZrXTAju5WVjPrrn44G",
  "key13": "5Evs6AUKEeusPuZ7JLB9QKCz8NTjT1TPPWrLjVUDo2emdKfSTgrZfP9jDDjVsAkvKnQmATRBhLm23xtE3AAdjeex",
  "key14": "5Lvzmt78ZKuUUy8YcNUPB8y3PLXNpsiK79QhDLD7woDGLRRHsQPAz821qt8h3o6dvtQTjtdew4VNZ1WpFPJqt3ib",
  "key15": "eiJVKzbAR4g8rnzRdwVZvtRn2BDLiiczrNNokYgkL7zbJi41xwhUixAQxZEcR1qQwxyuj7eaUNp8N89i2VU3zji",
  "key16": "5JQuS5N8T6fuiRNiX5eJSkmrDRTg5aeFip2iSZt9JtVMHTJ41ZrgH8X8WX4fkBg9moBsUzfcEYqjMqeE6DuAALx5",
  "key17": "3Zre6x1aJK1Nrsa31XtEZMd3qDssj2YY9sEckq8kNr34Z4mqpQZdXQGs34ACvw4K8nsX9AFjgZdfz8qqFxCe7fwp",
  "key18": "5QBSTfkxA38nbc1e1VktsGgMmUZ39QkB5pJB4mvnUEFxNnyUr2bUxLoCgumZtQSFYHbciFo1S1R6pxggqJGCP26R",
  "key19": "2P39grsoZF1sGxNwjTRQsRvN2gZE2RJjLWC3rkgsZWbeKXWwxCuyuDW2ZbHiFMcVqY5AyQd9uVbfVierdap6dGse",
  "key20": "5dwjLWMadAmviJ1LtaEkfAXCSBC4VNGpAhZjwPDg4moThNqrooq3JDVLUJazB8TCQ5cXjZUHzK1vKk9B7PRia6qV",
  "key21": "4QTSdFbyAFDtVqfK1sWSMDpuui6H2GXMdEjx2Ngqr3d5BphrRcUgUbaD1rMsPEbFKV8VX6tcXjpkwLfk7Kf4psLP",
  "key22": "3qq54mmbJ4a5jLWygUmTFZ9CkhGGb9i66XSMX3QMKTh2CyVEc1jnMvA1nEozahP8SmGY7gDPXhCZNtfDFY2j1gkB",
  "key23": "4JMZqbiNqrDoKGay3vvwZq7imPEHGmCwE6K33AKULp1BMMVe7aD3yfgK4x6vr3GZWYZfCUurNMPToSfcVQfvePqR",
  "key24": "36CrtM9M8qPCjRQZyP62xTmKRxZyHjpKtCwhVboBdecLSbgHZgQdVipNH4rQFXobHan4FhFFFyLy1747FGGkdx3m",
  "key25": "5rPaynDCa1DL21Cjh5Ct4awR2ADEQCJLcKvTz18rREWAALKbN5bkX32T2aNw5v7s4ss5YMooaNeq69UxSctXgHRa"
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
