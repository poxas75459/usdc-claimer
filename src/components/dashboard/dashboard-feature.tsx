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
    "3Xgpp3Rya6EpottKGohYACww3yeShUMxftM2R2CZJNQGdi1qv724eoDDKfR6CcU9rakhZpGumkoyNJh4fksQ6Wfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUKBD7Rox3R56n8FvsbGEM174Eaaic8wwFKhsB85dJywAT3KKqTZrrga8AqgCXPv2bW2kahEVFnyD5vAZkdYh4f",
  "key1": "5nXFMQun6JQ5W2vrgaBrA717zaeb7cLb9iCYTJf5TP78dZaCN7ML5sSYV11sTqWCbZA67Jge5KuW9vXzGjrLMPt7",
  "key2": "2g6yicCSoYjXSQb5E25QzWzzN61xcXqZCSRg8h3upSSraGkS7wDXD1iYfU4k8pTGJAMxEk5kucQPWMv81U6PpjBC",
  "key3": "4uFnooo1sUqrpFKrZc2zxAKKL5SNkXokcr3W4gHtXMnEXZg8HonWvGiiN9Ww4Gxqp2gWAqwtUJTSBu3Vzwo69jZC",
  "key4": "4hMXhZyc7iLHztffTXYFqo5jSRvU6BjXVMmgZexFqGPUHKhLancYFVUj3W6rLiwpsqyfywRFXn6WFFx7nEWd33yk",
  "key5": "3g1RKQMY1waZnn2u5aNZ272zB1bc7ZR9JybdaLZsox2ckfXGS9W6w3PhPj3RXp7jkgLdmU8sSGS15oKo1xBqBSTV",
  "key6": "37fZJzMETFDtu5fUQ78tBYzumEfQHZgqF9ENG3vSVR4rC6KoDPQPkprVAcK7U2Nr2rnTiV3kg83wDJbNSeF6drjL",
  "key7": "5beCGkzPvznTKAsEWRfoUBg5si3cwgWDzTzcQgEitkT9jHhAWaseU2naAmHqA2wRg6VTCobgHwNnoDD6bHeoBWcg",
  "key8": "2uo5gorotiWv7hQ3JnRLRjkTDtm6qjZxpcwGBArgE9s6L44MsRToVxpAeEyTF6H5weowqTud52T5KyZMrN4ULWEw",
  "key9": "3quFWk9tCRsYFwcnz3VgDpCATnk6g5q5r9cULUFRU2xVrcW69itewxd32Y7pkmRYE3vfNFb7QZEn9GmAn6d74t8d",
  "key10": "3ikPBNavM1T3RWGPJxpumtAqp7Wry6GZQ3DjD2qsNhEyd1mR1STratAZEmHXizRJhnkmBixjEmcJJA31rfZKGWcP",
  "key11": "2KVW95v5rTDXK1hNr7JYR6PenA1a8JyYtcgL3EGYH963jwdr33xrBgTC2pWromErNw6oiqfxPvPHcxTyVMQVjKJW",
  "key12": "5d3DiztrTgjAPNFzHy5hRRsJJQdHwsqyjq5kxgB1wcne1SUbTBLnYvrRzvsJ7UZPRnYBCYNVr6Yt9tktxDQmq7k6",
  "key13": "5Ax6NHKvgYcGukiozFqoUd3sgwjzKVxkG7s5EfPLXChNNjgGGnx6cyaFD4JEsrwNyEkz779tGtg46UqqVJP7vZbZ",
  "key14": "4ogCLWMKPFDJmSXwjzwuWTTnRa7vGpBNxRvDAPx56q7PW4WGXCniiZKaN2iJRHeyAVhiacfV8fEakazXSxeVEZp7",
  "key15": "2ovLkcrtLWbvnNRUCGbHusVe5QcVLZm2B99QioVtJYNFBQ6zLTYpzc1FWbDPn1VZ6eYeQ6JkMCufEn8Bp3cCxtX2",
  "key16": "56u61gYMmi4yuoK8mGM1VZRt9ZUnJVu59TVC6iMvZGnarn9NGSD7FAuMKVguPUk8TQDH9TrieZuM7Y2dZ3sScedq",
  "key17": "5CD2KGpANm43oyMERgj3F1sCijkEBbmko1tdymCZ527LXt5ikP9z2iPNu6PT87nLj9AE3Bt3DekmqGUYD7UzHHJ2",
  "key18": "59QcoL9ZxL5cMTSbHMT7SBgXdrPGeV3U6cqLAgk9s3wW4hpru9d87Mbn9hE9V2VKacsKxTs97He6yuZ9u3PNuYWj",
  "key19": "37qr2iWKDhZJo5PqxEVfL89PWtKUbKxJTUJ2HvrPQTc1zFhNUyhCdwg8sySiv797gVKUbmAbTo7iJxud9JGTuDrx",
  "key20": "4RZf8poe28JHiQfizEZpBz7ovmeQHrYvh4SoXZ1m6kK8xSoCqTi3P7u2adjrSJYUPe13NqKp5dnCov88zAJ4NDJZ",
  "key21": "3XGdzMTtXncpQRrJKALsWxD9cbGziJRXNDKGi8J7qGtTbi7BVYJrHimizNsXeQeYg2MWMFYmdpDYAhmVbaFKmfti",
  "key22": "2QD9JR2n3R9dHv5rSPqrFg2xadLrZ5W3KDwc3bxSH9HgF55QTiv436ZjvxgADjiWHYSGjkejusag3HZxCdsdNgVr",
  "key23": "5fvYVNz5QnS2yDkrRwgHRssniW3FXFMw8L1JMi4kbBPKReBJY9ngmWo33zKu1xjMCRMTpj4cWQCysoXYwHt5ygmS",
  "key24": "ssKo5GuUdH6xwoh19c4RBB7tvq1rQSJmCBCauYHbaRKsyFBx17aa1nmrcRV936hvH46fnhcFTrRb8qfpKk7mwFn",
  "key25": "3Byj5c33L8KAu7ZqWvPuhFRHwdnhGkH7vHniAyr4uAcP4aab6MekwhhPgmfqZeTrfe49ezgQ7VtPoSCRqWyKr7Rk",
  "key26": "ufD87w7evkvShfTiKNcMz9QyJ7W2eS8tCTAR9VjxJoRhiQhtg77f9pcvLyrYeXTogB5ZY4KFzdrrbUTzCsejoU7",
  "key27": "5HAajQaE9eRqwKKmkX246w3zaNrBj3Tt8F5uPkQc3B9JmyCWYM2Q6fnskv2VWFxfRt5j6tVTHWixGMhDMz4M1La5",
  "key28": "36UpfAr2o7Hd6UmoWpmQrocoNht7XUaUjsiifW7YcvkDte3JUmB8PUNGksRqbMVhEtZyqLF66vR6TDDpBktbUeaT",
  "key29": "3DU8pXfwDMX9LAqvmcGGWVUAV8uJnSTMmADzUbuyb6T4L24MRHtuRSb6hX6tUx2Y4K1AwzG56dBsB7taD7SoWw31",
  "key30": "3myvFqSgBULDdcvBDnn6BVDPJ7hTDFFAkGx1i5dWTxnUisGNABbcJ5JppsA4UL5GEuGsfFt9G79RnG3vEVr8tABp",
  "key31": "5HkRduGPgze6crb4t29dAcWqYERabAuEbjUbUHSj4gCG8NKcGuPg8deSn8gA1oPu4z557ktVsuAAG9uiQiGBUUUD",
  "key32": "5VBu5wRmvYwWPd7fBR7recNeKcXhD8eRdLmVAza4xpyqoU4D448cbZrrFfyyha3fJmhNs1QTWqhcvHUhbebGaa6Q",
  "key33": "LmWg6TLzK2MeCCn1E5i7hbLVx2igBVRY6veyap2Ajr64xMiH1LDLZTEi2KGEs6JL78Qq1zYfntqVUJ7WWN4RgmC",
  "key34": "2TseCuABMUvhDyCMvU7zLv8xMMk1C2x8EEtcGA7Q5Nx87wJSFRo7QQZdLjTPJPHkDCuucippXMX4X8uJur31UMfv",
  "key35": "5E2UcZKd4K7z1CcHtCypXFgLxhopBNiLLCwT9xKVq7edYUvQnAb2KNhUXFRn8U1aANVXEF9cT2EjNq4LsEpajFb2",
  "key36": "3856mevH3iqmHkHNm9Q6Rrt6T3PTJTvHrEipwXYUVDwHPfAfNTe3FFBJSFJiMVM72XHDw5bGnRXPfWnBa4jGME16",
  "key37": "5eZqu2GCNRRgC9YQZX8X8UKNeoqQXQn427Ui8ggZWLtYCV8QFj52JL6bZNVdmG1zcU2KxT8QJVjn22KMCjCvmNKU",
  "key38": "4PD1aFje2qn8DLHQMUrkKaFFoq7n7U2zjS6ojmNTQ6Sb3mAxVvRk3uqqTCT7NrVss2Ucx2yzxNKrPY6TqoV9j4TQ",
  "key39": "4rhagbK1Qy1gRqNTv1vMuadsvnm5ybTwaooLi9AwWP7Ey6d82WThvt6Zn1aFTLLMw7mU9C1Tk2nfq1piWUpXUbrH",
  "key40": "5aR4AXgLrwihK9e1x91sQX79yDZ9Q2uXLwRSwJPi3KRnMYakKBo4c3GwokbQ53e6bafGP6H3mFikeezZLznyHhgf",
  "key41": "2bAeAhYrovs3C5uRFNqxqVEBrmrz2fPXSvTa3rEXFMMfc1qCb57ySHkCHYpd1xehDvtFfXLLJrH97AZEWZken4Xv",
  "key42": "2rEboiM2zwybq7oqPzD7yqg6HBx6JhkqtWWnygiWNPUEbtie2wxnKP2m1kEFvrEwE6THszWAcKu1gC19J2wokhJY",
  "key43": "3spXz8QPv3LsJHP8RwSe6ziDoXPJ3cexuVr9TmoecwKUw8FQkHFwet4dHuDkWx9rx5aheFiCA75xecse7p8wkUfY",
  "key44": "57JiQLhT3o9azozkJu4zVQBMxEaG6aGHscuFGJaGAh2ojimh9V6ovmiuKmb8poLPdWEWrYMNyz3zSeiC3xRuw1Zx",
  "key45": "51XAq2DE1evwQZgJS2kU22pYbQne2ApMKziyBUSDuhKs8gNGTqnJDoDWxZX7j8KNPyDsL3HhKLB2KqtucVjbaWrj"
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
