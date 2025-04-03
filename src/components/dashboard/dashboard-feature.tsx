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
    "4qHBsyw6oidwtTEeARHu7LbvJBHgciQLQLj3tDCd4MHveE8JD3fdchpJFMJT6pqsFmKmRM3s6Cx4b7CF3fs9XWgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EYgi65CnP2wa1j59MFiWFUsizu9Li5NUpmX4rtggx4GSnkbQDVintnU6Jj4sZtYyFiL1BkwDWXVUCYeGqBB6dom",
  "key1": "5TvswhBBrGnbQBXMZEV3eZ9mZZN5KHzoAAXGzxYUsAECg9CVQQhtiW8cBmdPLj1nXnAcDFmmuBpsnZ935ZBXRPwP",
  "key2": "57f31KBUH7tU35c3QChEXHMakLkfDoEJChT3yB5HXCYUDc5uDcKECADUs6zrmf5bLhuiK8jT4pijWp3R2yKgx1H2",
  "key3": "4Y7xssDwBtKEXVd5yxFCABQBzdmexxVUhaK8g4JR4Fdn6DU1h98Fp9dWZ99tSdbPepw5912WtTRQ5f5YNy9V1yB4",
  "key4": "4K9uCZUvYntM8xzdmtsbbFvxVDELMv7XYPKgosLYjjaPGa8uiP6bmLRCDmjhHMQqf6E15BLrEJAJNXiNbT8ALmJJ",
  "key5": "5W9oUsXEDqnpy2XqYShEPkS6JG5VscPi4NeZvR8dGA2uqwm8kD9UotJs2pBFBJEvsCiVhQobwzo2GANzTpA1PjdP",
  "key6": "5YpRvBJFEGnh7HwHdYsy1LVYSgQXRnvTpHfKaCYe18X1irDX3LyArHiNrW5iApWT9fMHcoGY8cSx9AX8yCDcbvsz",
  "key7": "YzSU2tefBUcnDzkZ3GbrDYyv6AC8QzPETTJm8SAjLovBCXs52qVGNcEVA1zD8FqFLLhKbRH9BnkdKij9tawhCGA",
  "key8": "HMHr6RBZC63cXp4nVSpqWkJUnQXofkUq2MQzLbufKsovM6RHfDd6y8HUbzt7YuEZNkxZ4qvsezQBDHDhheVMWX4",
  "key9": "5QDn2zhFBgnJRP4ff2cURzQpfKuj1r7aS1NJFRUmGAjPJ8yhBJirsbNAgmZreDNXbKL13C87tuupCN6ua5CTdKD7",
  "key10": "Y5aQGY4yvcXZoU2iB1ufWdD8fMQKGPDE5BSsNRhMM8cGKu49Vjw3uW1PLQC9um6E1iS3vvfF8qJ42TCoES6zJp5",
  "key11": "4oZo6qMtEEYmneGRqKrkrtitaVLWh2s7F4erjhVWrLuikozVgMkeLXzbbDnBE135Qvb3kq4QUyja1412bH42kVn3",
  "key12": "43UTnyuqpNLi8sZivBwiefhft2jyi4JFEZ4KTjWBp7mMM97uGaVU4AGgf3tbPY5hJZ8mwz7g6kxqBDhEV5pmw7kS",
  "key13": "piqcE3AQAdUMh6C9P8aKr5Zfu3q9RSTzorE68zN3coQUtJZLJQiFxdJNbCbCcqQLJ8qheDbHvDvffnh2qpLfYvy",
  "key14": "HdXxQqA2C39KzDFpZCLtSHu2oiFCBD6muPGTiow4253fUocWiGn3K83YNn9kTReqm9Z5bTmYt8qfe4hNGU7Be97",
  "key15": "5h7KknHyc6R159qRBH27jDXJ3vYJVJV6e8kmaHErfgasTVfsdrZS8h5uPDBbgy8rJojVJcGfQSeA8WUi73NULSXZ",
  "key16": "54q5VGMGfc6APGEKMA9zuaYtcbxGZtt8UzLGYAaHi9ZXoqm6PZ2n351HcJ3WY13dy74b6vP5dXVPm9ThcEgKtwTR",
  "key17": "4zYHQadP4FoSQ5edquCGXMdCxY6GggkpaGgpngmwu7qLNA9bR8vPPVDx4wNWHiqAPWQE8mwFYqQpquSA1WEQTRty",
  "key18": "3q69heVRH9oMNwdPoujbsZBRuMuCPFKyLQsSJaBqdkAy5tJCGLQYtqMU8Y14UiPQ84LiDLhLEzKjdyGAeNpwnbif",
  "key19": "3yA7iwH637maBXEiW6PFgzBtZhpL3YVmzm2neWHGKvWsJbNEXYVTgzwdqFCppX8a1DuXB2qHKUfhtgAzJ8APLcCR",
  "key20": "24qp56kg7FZxXBvhcZ7YpCsaffd7xuGMxjv372Q1CDnpYqT3jtJtM2VGoMgQyC5yoxYsjcTvHFqyuqMjS4fdgQkf",
  "key21": "5cJmcY5hQzV6Af6JQ2kRFykjq1j8AAgcHQrJ3H6q4mZUipzYCZCo4rRtX7agkVs38TeU8FQg56FZuJo5rNgVSYYT",
  "key22": "47e2ZSanz7Sbca7Pb2vwGgdYFgKeSGcTpyMWiAwHAY38GS9pkVai85iAMhe8p2CeJFcotZyeCDaudiqAjyXZRuzQ",
  "key23": "5VguJxCgLgbhSKxZT2qzPJYZqjFT9WNkX6qftNpkZLwFKfYdYbV9EbAqZRUSWpHcnwHPDwk8mSmrRdJsPXRrDxie",
  "key24": "iFsYSTTLeb5UVEEmLbDqNuddLqCytr4F6q8ZGUPF33QxdupJyJEcBsZ429rEmodkz5Zr7cLarSpqG6kNbJp5W9Q",
  "key25": "8fev513fpJRM72nQcnP7e1WS6MrdoYJQgKtNNNNmAB5ncAsQTJ5HHRk5j2dSJfbR7AXNEPp5tNQtYdm4gBZzmk4",
  "key26": "2PGdek7DSCfKdCXEMZwqc1SVnT1m5se2pWnKh7awu1DcDyMUKfjHnWreBbS2TcaPHpzLNWAZiSE6kKJXFQMo8dmS",
  "key27": "8zvNjPrB2QWWdc38t2DM1sCUus3tctKQmx1cnkdyBMD6YCXyyW8mzyqHHUduzLDfCuvXwnaZfotEFjDzsUunti2",
  "key28": "zFe7Zr4k3c1PxcNpK2Me2Rw8XefV66bdVP9d2oEeBLjXchenkZkPpLp8fYWDP5xVKkLbd6ZB5o3KmSBhndzqEnY",
  "key29": "RErsTegPRAYBe3x1vuGer8paMqDAEvwuzpR6MwpNtTA1BsiGBgxNGLG1BKaWsLyvi2a9JjdVX6XiPvQM57gzJoc",
  "key30": "3xZ5iHKgabHyeBQqwyuHRmqev9bbWnSKp6v95QdJ4tgXiF79yktYPk8qSaE4guSHK6cYJH8oDieQXutq7RbU1bAB",
  "key31": "2XXhDKqqMBai7wjt3vbKCGB2P1zs81obJQLSgKqXDaA3eYbj5hF4GfzL8Midg53esHvXmHruBiyT2BXmUM7ByG7a",
  "key32": "Z2vqKECTFzoHjhEWexJDUxPHtfERayRs8oBAPYGVZw1pLtH9H47Q2bttdPtvbh1ZnAjLRF8Z9tQAzFsmbCvbGhr",
  "key33": "5nTTtY4jRVLwcqT5a3q4wPcqRSjvaNr6FR2pxdpJX8b6cri6uUMFJgpDTgvHJ8diyuU54Jp5gdChYUcvymjrq8hw",
  "key34": "2gSKSSFeppzBvApWH3Mg8NffGFbiyWvzD2kBgtq59Vp9eKmxfcaccbVZ12PBSdJd21AnpdbrwrSmvVSBd4DEP6Ay",
  "key35": "3GbvvWM9sxB6rsn6BK1LACjDLtTUZ12U2GJzVW4pAepjNvyvCCbfhTMbmfbStFRA2RxADC6fDpCkHEKtui8ojhUe",
  "key36": "5gcURe3TSM89M6EWuAurmMqZKPV94PGZrcgqaq182ayQumGgCEPsZWhtLcHNPkZGgojeq3PN6WFe5UyDht1kN5eZ",
  "key37": "3P4vCrudPyzoneK8eefDRyXoFey8Rritf98ZjKzSqnkRWmg3STaawRdkFwJZAgnbGpy2AHr6mrusHnn6NTGKPDMb",
  "key38": "2KwBfvJoNcgCtijGgXVwUfNP1zyjTzwwDzM312wh31AQVJbApM3jrUNcUJm2Ur2VfQW3EyLVB9vnwQ8VYvDwwRaK",
  "key39": "24Mf9VmcxKmcVJkkowNEzhNqYagN9v1V4TZ8WNNg1fQkNixQjwTDjhtj1hHwyqC5ZaTUFL6bG1qXjdzSQkq5QKjU",
  "key40": "2hdgaeKgT5aVxmzpQQShduAs4ArQcZaEYXM3SeeovVghmbcAjJ6UdWRxFaDuMQUZp5gpYG56V4Q1YamGT3a6VRmH",
  "key41": "2NoDKn4dQ9mQhUAkd77VDKZoXgcW5n6ZobFRz8bg74opFh7boAJaypKs1ZGG7uVVFHBMJnb9deFNbrdwqx4UkoDA",
  "key42": "SfGB14PDZDCJak3fT1LTgoo25ZZLCaGF5VxH1TSFXHSHH9CkWknv8zyVnecFVZxNvCa8kTUM47dZrqCui5hK4ag",
  "key43": "66BQfLCFKZBVp31u35CjkEbsFdxyM4rkmb8Y6G6rRehZ2HMfAobMd7ViRKoh9CHRL9qN6c6Se7gkQHaasqZkkfXs",
  "key44": "3oWvQraX9nKmKS1Lr5TzMkh8fU7t8pwCB3nNo5R8ALv1ghRBFXmbFFNENA1GDJKj8uJBK1Cj6wjDnXdr1rzZTLDu",
  "key45": "2tTd3CRbxYRjsYYjv5Foyhxh3tHQ5vL5ByfPgLGsUgxaWESA86AobtCphQGwQaysdgaup5PZBz2fdSoW8Ctvc71P",
  "key46": "26NbpxDeCXeeocG14A3cfmatAJ7Jw7AqLVif1n8Nta97mbh76tpKJQhnWkYLX5jWCjrQGqWF36WBTayDzBbLeAaV",
  "key47": "571nAyLfEh52QVtVbXLkqQLC9CLzyE8a9t32E5W9WvZ4GeT5929qHUxyntrC7MNk6F1HhzmsFzDXeQyoENVK9q47"
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
