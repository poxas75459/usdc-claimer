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
    "2RzJMnUz7A4DJDmHHs9oFMPHd8gX1gXBChybL3vLDRaEYM4f769RS5NRTrFx94eujUFBJNdRysAHDFDh5kdZ3AY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Su2v76HTgGDoZ2c2jcoZwnyVKdKbPBUJov2C8eaJqDNb52WBhzoG4euzWWaVMuT4FmR85DmqRxJMvHqTUhnKi7S",
  "key1": "2UudFv3nWzqDaCGq46sBmV2ydBVwV1Kt3Hwb9xippYNxYdRGy7gotuMSwo9Hh1z1pj7K7Ydbej7vdwe4vHS7LzgG",
  "key2": "3m8rSotaud4zUhLELvfhdzHBdJYYX11Fz5aY3VMruA1hFHtxwKs8QH6HXXR5hPxnt3fhjtz8HMtcYANxZCQeU7af",
  "key3": "3VrYRmvqqQ4SJPA9ghpVzktNU1YRWimBpZGtG8rGicezQqHV6bcu6DCQ5jypqMk1J9tWQtoW4RvE4PxgPz3BywvM",
  "key4": "2azA2fY2hhtVARE6rUmHZKC6XVgN1cCUB4Km49or6VcX8zHUXrGwXFiVd2QbZLyVAXsAJYsyeprTqhc7UHGgXo7K",
  "key5": "2CqF9pzwGjZQbdesHpkhFfyynoLyfEnc5iutgBgVMZopkV67bcS1a8dP7HTRdC3SDqG1svW5osAzWdTDQ4tr932U",
  "key6": "42hp738ESaod44LF67VMhvqtaXwJxSFKKH7qhsNBRYbh2PiLiPwQV153si8K3t6rJybQ9rwzK8JXMFRbLmmWWnBb",
  "key7": "56JPZdQp4NmpvtzbA5bse1qLq3eecXCwTYwY1uBB3bhFZb57uYFrvy79NgyeUFLiTm5q8v352dqNpmqgKm4ZpxqC",
  "key8": "2tKULYXsDT4rfny8NDhN6npzqa9GzjZ6wDoDxsDUbQhz7XeERDseWPGFwviL9ZFag9tk5iNuS9QAcewE7ggce6Xo",
  "key9": "43Vh4AiKCL9ub7TEk6as3fRXdpLgE6ZCAQoAN1QLwpTSBYK9Mzj2heKJuvfQE1sUSJaeQgKEumgd9ysoGziQL8Wq",
  "key10": "4wuErrARMcP13QxMY4bsLAaTWad4CY4MvW4oKA3rtcMYhUymkwC9wz9UrzaHA12RfwpMXncAPLnwXQRnREiu1z5Z",
  "key11": "4J2DFYvdRRPX9QZoirv94jDBqDurPgxVwj4YGiP6JQ11JdxUVoz2TEDAytnh9mirupxSFwzGQPmKewEqHrVFnwNY",
  "key12": "5pPQfwXzztrTP177JjHvLWJPD177LUTPJNB2zAq8kzhctfAkfG4Z1iaLNZPajJnHmfdy6AUq21KxWx522nXudpFT",
  "key13": "5nHGVnXUVN1AoM3MwfDeEBQZmhp826ostEiv4T7NEFo8BTdLojK3Z86GLHXFLQxjbkMFcXZCB7NbwZzKKkEpFhgC",
  "key14": "3fo34EvCu8VJyaUvAx3GqRbs8sTSJ4LbEfCVq7P9rSN4bZCmkJY5TxREcrYzhDxj8wshgMK4V3mHw363Bj5vrzhC",
  "key15": "67QdqT68aXK8pLaYr657mK9yK5DwCRMaj44sPMfXEyrYiRLjeW2erEE7w4Q6z4PLLwKk2CtWibWL5AxXc9EH6KPV",
  "key16": "23yAV2cfv46w98DgENHUY9nXv642zpAnCyEtUD5mkKjamd1PCLmrrhbNN4HwUX6ApLY1q7YF9HJQJKVf6cn5bnXi",
  "key17": "2FsG4mdHMSSmkV7nk63QsXmnmihHKUL4XYXtvG3qwMuEs7iRuCoB9BbBtsPUuBgGuhX6S7VgULjz2TNgujjoaEST",
  "key18": "63gb9drRcMYv9gfBwAiwxPMJEYsubaJ2aq3CjqVuUd1zRmBYJuFo5WBToZivoQG5R1wKLedtAUNpFjzho68HFeEb",
  "key19": "28WZGCgbf7GuHnXjrkCmdz6vBtCrbTT9oUzcZszCVNFsDCi7QkZkozNgV4aTGhLs4oFCLRAj3i8qZK4td6Y6BdaG",
  "key20": "dn8qwVLvNZy67dj8p4Ccpgk45cp6tSV348m7ERPLTSBauGCLYiZhjBvXUdMkxfbs6uwFwTEHZuDN1FHFaQ7JaF6",
  "key21": "g7h6EKDyMVYBRZYNkSDED7zqsK8mftgpxiew25gYcXjwkqb1GqbRHiTCicqhwTx8UcLfyW9reSrVTjwiwvbvqYk",
  "key22": "22pAyzWBnBGNJkuBZzQeYUVmR7sSu8q4ZgkPCo44qqhSVY6JzqVdcgRoCjMtQ9zr3LXMPzr5bXAjuCnwnW4o5Xxj",
  "key23": "2Eg9Hnu3mGxVMiakUxDYzjXKfkr4SMBiPwQKJFfxwzUg5GwvtU7p4fosmwHs5p7TAeBzeyQLfe3a5fZYkq81CpQh",
  "key24": "5YYugeEu4PeawruPzL21H4NFi5339bPHiiFiynvmQvHzwB6qmtj5wkmzUNxZxb7d2wEyjSAxf9F3PVdLJEdqceQ3",
  "key25": "x6BD9GRjf47KGp2GuUYoyeqCowU8MkStjakP6uz4PSbcyASH4CcFaCBgNVz7fm87gWsMz9vgQMjgbFeyzNmf63y",
  "key26": "4D4xMHGNx1kSkgkH1AsYvr7frDkzU6D54qTyZRpAy7WbhAwBsZajyebLRqREfTGYNJNuwHtQ2mfku9vAf8yCnS1v",
  "key27": "2sMyKmsC86QmGdzZ9Epu99XfwuJiKxFZDXqNr9X8Vk7NM9KhvGDE14j3FABhYmniB5tb2AQFF1xkeGEMqt1NykSg",
  "key28": "5ty8dgTYtqQQmp93JDQShTGyba9HzMAAYsaJ4GJ5xChsesUb7GvQEkL4F5srRHV1gM6TUGjN1Ra7mcwZRpbvxrgK",
  "key29": "5jxxMJeyQF2NbH3TXbQoPivYcdjxbmsHaWt8Ny5o7Cv2xruNF9sMTUC5dTgo4kYkjW1TPFEf3PQr3XFFNV3EZFWB",
  "key30": "3YhUZgN5QM41AfWgBWXzcWYDMsj9XRmCxekAPZrw5X7LodmyKtBBjxFWkifN1s5zCV1MDJ8ecY6p3d45gViWSQTu",
  "key31": "3bAhrbU2EpkshwUr9mXacyc3T4NGV9xegEyCFu47Y8arXwG6gTxjoKJwB6mmsMWjMnWsc1Mw84EmmztSM7nNDPK5",
  "key32": "5SdveXkUzTnd7pU2huiV4r7qi2A2NVZp6BB8tg7RcTqyKy3Ze62ETX2yWWqfYtSWCvfj4TgVfQ3WT6qEd2d9RCmd",
  "key33": "c448UDZuAoLQeiR6PdoQ2upQdLN1PHzEM4vVt9gqEZi8r2dENJgNu3PALwZsWaeGMDJ2fMAj11k3EvTeX4Hp9bz",
  "key34": "9UY2dK61LAH64k37RHnJz7rycnrx3ByADHDn9fYhGngWnY2wnnrBWkt1nE7CPNSp7F7NUiAFjyKYmxVV9VfDVot",
  "key35": "2WPZt9zGvvSoanN8atcLW8G6bDuw1JdvvWrcDKnJEpco3MknkH6wTApr9M7S8umnbpiraJN3xqT1YWFSPSamPDXm",
  "key36": "4uU1Vm61GjSnre1N5Dc98KyXkciTutMshyow3LUwdx3cS9VgXbbMqxRjMcjh2oQ5k7jGx18e5wFKLqK4vkjkYA5Q",
  "key37": "39itQVqLcWQxDekXGAmtXyff2LcJhmUF6nm6NmJaCAnketHWXuEqfqd1HFCH9HQCNgXXZoh3wsmxEPhwH33Gvywx",
  "key38": "6cN6Cux4Mvs5HXhv8g9RVeEyeD19T1Cn75WRDoW3TNLHcNGPcj3MXo6BJZ8w1aYBiHpgQoDZXn8zya3Vw5Wwuf6",
  "key39": "5fVTXGwQFEJ4mfdXrmeYio2KvJXusPdrHbUWDXxST2W7HEfyvw52EG6Uf1uJqeHJ3SMQR2aX2jT174iZgwJaviaS",
  "key40": "62AMxEpR5AvTivQ7u9NFHVPF3S7BiUDrA6djacm1oDYYYAhR18PtDj2Msjvb9t2XFAPoWuQAz46STmPePvRJP1eF",
  "key41": "4m39dTGgaV3ufayHMtdsdqhGxdshtHGHUNKYD4ofD9rcwEiVa9KyLZYmgqpyNA65twycCZQMYdUY5gvZSi9kVrX2",
  "key42": "2eox9jEkzTXVdfBorcn3HTBEH8rvZAa1aaqpfydx3vYYow6aenqE29sgJ7SsSM5tYo1fjLaaVzmKh2qRjXpCuiMK",
  "key43": "kxN9T6mQyuws4Nta8V4eNwygQVFYy47qN9L7bE8NDgERBcM9pYRUAWjYm5nmCxt9TTN23vX6G8jTJ3oQXn3ULtW",
  "key44": "5BMKgqnfX7jv3q9pRnMfLCCbtDwF6PnqGHDCpi11Lsq4nrmRZvCkbSwbyXHtxRk17Z4P4n43rrdmxkY3eRUvA7Mj",
  "key45": "4VTx7BFMUeeJYzxncpQyk4qEPyWtDqfdEK2HV7Yifa8pzuaT5ymG4xhhH1H6A7tDgRhRQLK8THkQHXm14MYeExix",
  "key46": "2ympRQVcwDQDt8ghrD1cqWcEy4nQFp6FzMYempUH3AAEQxdu7oEKQV9V9yKCZMEDbsgqmiX4MbV7WBVmrsyeHU3d",
  "key47": "2pyrhZr4GiHssF7tuTLZLj8cSdDSfY76KXuQustSQKtSQ9MCBkKu3JpkHjd9MGEtzGE5qQX1sTxFtapG2vh4bQFz",
  "key48": "GnTTEPFgxLwayF9fZhX2uugStEGBXdg5s3vKBdMqLMszyLAEHHNzaxN9vtcoyuqvjjEELKHCTpxjBhpE8f8mkMb",
  "key49": "122ha4McqBJPjXWBj9Mq9KeCav2o2yAgWuuQ9mLXg4b3X9AYfPpzT2Kh1Tx4mAcMhqwvDvztbTp5rQWC6i8Fgiag"
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
