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
    "4H6rk3obv1qmnWe2HU1eyq7jNtQXKf8z1YzFJhSJhJTM3Ys4E1MtPZo7QufWGc6oapHkLVNGyLF1NwkAsDvCtxEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66RwKzSyJ7WsRycWS1eLRe64VWMLX3ZyqFJc87WYn1a26srJkwvK22gewMFwA8u9GXiUsT2rk4KfVHsWipChuQtt",
  "key1": "47nZkGNfqdgLQ9d9rm8BHb2hfcfkvYHUHd3341q5jSqfujyqVG9KDRtnBJpktY6fmtn4pTjLoJmSYjqKkSU79VXT",
  "key2": "2xkQ91sPqcajVeJa84v5NuyyPg8bDQDPTg91x777KRkkrh5gKzfAuMNLAS1QbGpPcgizD88Qz6wvsbi6XVPUpqnh",
  "key3": "3wKpAsoU8UEzjkzg6tPtHaxfyrWfTkZbT9UraWW8FqsmMHZAvFJcg4z8YksEYDzHVpvvqgdCfXKGWty5fYYmyAjP",
  "key4": "2EPLdEErmnuj6jszNx7B3zUfaSGtyGWAQwh7YTEWy4nYBqSpLxteTTyGJ8yjwF3NKYXXa8jG6gsMCaD2fB6jL2X5",
  "key5": "2fi4SVioFkJrLLVfXzYXopkoeqbjmewZyNSuExze46FzLwmFCVefhbHrnoUqVfynyAfzHS6nzzxVQo6tH1XzJpv4",
  "key6": "3KZRZwc2d3pvxbHzvSkCpmmMUpQNcRvYKaUM5mHSVooppgt69iuHzRjBJWNA4a9rpUX8mPaZuyQrYtbXquA7h21e",
  "key7": "FciuW8RG9nRXbpszxk3ZuEoXGjytNK866S9beJcRfV9Vz6JhSmzSzxTMetWRKXLBGUMQDnRc7Pi1AcfQ6SPAwYA",
  "key8": "3j8W11XjCFmeA6crNpVmPUkscRUuJw9uWhzp5iaEDS4f4JGD8Y5CcwnGMxuUu9QNCAGCswxCEoo24Up6fEy8PsFX",
  "key9": "25oYgUvDXxRSbDmQujemaJu2qwTeYxSHxmUmGWNwFSLcLmFMRFwcKjoVtiB2m2U8PxfK9gkVtp46cLqwPDLJpEDL",
  "key10": "4nfdXL6soqA5Zu7MuhXL3kzTwFxu6QRTmHH6V12RTxXvwNZEForK6i1gYotkavrV1FGwkmgAuWMT1Neq2rUHmS2v",
  "key11": "5Pg4wm2ha4DWEh5AB8bLRRB2WSqbKtCC6tzP7aJY1U2hDUQiuM7AJYKsuBAFiL1Eph9n7AAvoErLPuaBCUCyScV5",
  "key12": "4MNAjoKkjNhUj2nvybPFnA5DQKhCBj4U5dDAdUEgD9nJF3h9w8LDc1ESGdFQjGBCEBifkcYdnSU7jTPw5vjVicxn",
  "key13": "NTi8btsPRoz7AMCNnqhA2DkKViVyWpwtbFQhFieDoDCdB4RsMgDRyaZA5xMPyWpsq7KEJ4s1nhFd7YMVSj6cV87",
  "key14": "edxvqQehxQWSUSWPArEfCGu92KR8mjsDdSUxqRfEaUsKFc8rRT5yhXk5RteuvffoS8ac5tzVQmxgFh1nvK1dW6C",
  "key15": "2ALma681j59cHx8Q9uTq4N5tpwFJSkTT1oYm5Jma6WskRRvSjrPeABf3dRxE6cGwTMoRdFQWzeiL3xWeXhVKZ3sU",
  "key16": "2fKr7frfbaLxEUUoX33X8FnYFvWJp2Px4VFM969aStRNawMPz3fvnRUbirtjWk1i55arUG9E8xvaAQLfe5Go6oUQ",
  "key17": "3jKos2n6DGj7inpjG3YsBj8jT263uqZNZGqvhodGHhjSaLCqjrMXcHg6KQnyQqrT3aoFDBRXNtmSnMeXXBBzMB5j",
  "key18": "48yKLdwnghWw24afxVoBPVt2DGDzVr66wA74tJ6Ea4TEnJEhV8qdRkLz5nnwuo65cV1TzAxKkT7pvy2wASNhrvCb",
  "key19": "33ahdHXYDtPMwQ4nXXttSrPoht3eUaD1BoKnYKnShosUVTCqyRGHXicCpfD8AnMkbREkwxBpZwC9VkcprG6mbvYb",
  "key20": "syYnpeWikjSoAFhnLZLNJMj93RKpMGY3hbKFW9XqeFSAF6v9KdGyk2JUUYNo1d2VH56Xzc4si9ZrWFHqXKUh4Vh",
  "key21": "5TvjndJyyNV4EewnkqNcmG7JwQsHyFFTSUZn9LsKtAZcRJD51DJ2WWLqCSwQun9pXKTYsYhLodcgz7RgMhbT4hMg",
  "key22": "4K9A8WC7ibNHw2axYiQTLFSRbYH9X9XZEQ8mSRS9yvBfw3BrQCDfHkacpBpwu4E4i7R26UNPnxmNXxsMsNBn748b",
  "key23": "4CujuWEQChpK9eCB1p83m2wHv9PicB714kjLe3TVqXFwc7Hiqv5ujwhVcWNTziNUBHu97Yo4siZCpw57U5S97kcm",
  "key24": "2rCN6is3ZAAqSKVbrEFrEkqFYAkJSjC9qJL8MUZC42LQi3v1SRTnrCkPjueAMGTfmgbfELAJb3gKmjU4899rmqNa",
  "key25": "JUZPky6RguqPaLEH9QUFugT5Phun47beXftCMn7fxRJ1VGL3gxZ8sV2pZuX9pd7e5U73PZfhJDMEDagzvJz2Mo2",
  "key26": "54BPo7NsXnyHBThEKvKSZcGAVx3HnGfnVEzBcETUcbnUrEpp9h1BKnzKoc17uLAJFKVZanyVrzfnExaM2S2Xfo6V",
  "key27": "37YdP8K32H44uaycUvGmpVkfM3q26yzUFzvsP3cVNWtTXi8BFZTYjs319916DRW8cQYsDCQr9f1t1TqfLC68MCuv",
  "key28": "3nY9BkwFfLemsA2ZcoL4Edjp4xokwzG6FmNd1Lcd7zYUD3PGGq54pCbNGuVrh8pTaCk6ZvvEqFi4PNcdh8WRSU1Q",
  "key29": "5NaxHyYxFcDeekYSXQqry39i2nG5FjVxYAKAzVXKNHffMaoDLLdmJendiKRdbCQds8gp25ycCDUDjdsfSwr1pf6d",
  "key30": "vt3EAjiJj4wve3jUSt2ufZhBy5ByZd4X9xnfn8YXwbqY9jSKhXTfcNoc532zZ8bmNi2fbcuVmcFxUffNQcbAB2b",
  "key31": "3tU6PZsHYZADqU9Y2r5qNsSaJuhnhH3ovJ1Y33fUw5PeHvz93jzcEsQ53Rq1E8qpuJ73CzY3rBzP1cUeuLyLKSco",
  "key32": "4iVH1DoWmRaTdzdJwP7Ccr8BwUhhxbpvF7zVsU44n3aNdJAyvRRNLC2g81cBcHzD6GxfaG14rKytmMRwuQkKFXSd",
  "key33": "5aQNcEX3NPxN4wknrmTURfz2dBwHJ9qxLVYqVLT3rNpbHQZsjSTkRr96vbDtPoJva78YJzdHyNsDyP3grn6uweGJ",
  "key34": "2AWYDuqT2XhPb9oTCpKVgod2UD2RcaTVCRYVr8B5ayGcyNJCsR8cDy4JuPtUeX8EVsPixy5LLQnbmp46yAfqMheW",
  "key35": "3nuD1W7zLvTKLZjYjFPUMJPy4AWCaQLboUcF2CPYkM4bM94MzHH7QSFZH7ZYgYu9HQUDVaNK2ThVijqBcDMxGyxd",
  "key36": "4o1jFjdNaaKq9jWVfPQv4CuKCczbmjZnpo8TuJvMW3gQasyAA9R5irn4wi1LxHyNqXJkQDYHXqsp42J1cHBCiAWU",
  "key37": "5M2cZVosb4MB5VtK99mRCJF51SLrZhCaV4kYtLLboshy9JEQiYBTYqFXeWCHMMSTaMQWKxHrnHntwjVN8X7jx9FH",
  "key38": "61A2eMWoNvk5VGB9ykBdeF9eQpiEoEetWZXV7QywrV9eUKzkpXpMQcHE6E17aFeyPSTrML5eVW3Si3q6xJJo8uim",
  "key39": "u9rehe9xuyExMMpH7UxD8xdQaKmYgFLB5cN4TDrCE7UiVJAnxQzLNL36HavXaVbLokZNRSrkBzhgtQeVHS8UNY3",
  "key40": "5HohVkp6du9qtUPAERgHEWYB1sxZhU8WwomsJUi4fVu9ErpB9dgq2qVbuHfpvegPdKYaEzLeazJswbBPMWXTf5fH",
  "key41": "4AwmTLrDbozrmNomx48ncK7ThEMkvddM175Pq7Hd234uCzYgqb7JPNG4dEFvVdKSA4cTS4KLrvFM1VXVzZqKP7yq",
  "key42": "tteKFg1TLZkCnZjpaabepvwGFJmP4Bn1cyLyapw8rpjy9EoHjDjHfMSoJrD2NpnNZ8Jqb4c49CmgzsTwSAHtHox",
  "key43": "KakA9hw4dYaXV5eGootjUJRhwjm8ZChciC7QKTAWgMXXLkHd1pfNsPiftwejQPdSxuyv3mgf4gMJmWhXN1vT5UV",
  "key44": "54DyyGccGBrsp9ncBLeiz7fAq4RfSZJ4Z1s49tEFF9qP4PChtWsdd9VniYwcxHXSkg7Xx15BFZXaXwEtGkJ3ud9t",
  "key45": "5G2wTtk9QM7FXPXDMfBPAY1wW5fBTUdbokrcNsJk4qNEStw5pGo2AW9Y5SMga1HxYFtZHKsDMX3fRDB1m3ZddfNF",
  "key46": "4KxJfHg9oEtAb1uHBpCKhwVdTCpEeZhoYdAh2nxwDsQ2eJubHubpMj9eSyS93rSNkcdiQV3nnKrMpyCkYobawY6j",
  "key47": "2HLZcya13jB56hdcit8Yj5hWqU9kiSHfhypCKJJCswutBzQQsWVaMSvoMKbJiYMR5ZGmT4t16W25UvjQZ2sPhTRG",
  "key48": "5ZiijZsGyua1USTXnw5uFwdhmLFAtQBA1EwMtHXfDN7YU4MhZMvjzRSH8Wq7y2XnFBXo1AqUhTmeMGYeWTg4ZRX2"
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
