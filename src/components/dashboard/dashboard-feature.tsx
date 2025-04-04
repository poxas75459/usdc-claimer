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
    "4DEfzvbRwuCvuRaKmSp7p5VznnKES7FPuZ5gzbbi3Lu7bMTT8yA4nrbJJfkudyTzGbCMpGJ7Jr8XTDBBgyhafGnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EMsfzk7DDNsZg97dVgxg43rn2ExzNQ3fGisRL49vygj5Z4F4XPAFTN1S3H1GnCs3hZ6rZt8qfTgywLrSZVmPZ8z",
  "key1": "5G39UdiKgj99DGQByhxWxPk5ccJ7NR9hangHi4Tbz9FnwxRQtC5RDvnA775rrEB3yaeJzptmQeHrz5pc53SQwCgA",
  "key2": "3nrrHc4PM5yQmEJC2nFUt3dUSEQxW7rNwn3sB6HfUQD6TCRbrFSrtKMxDheUrJPgrSpqVWdwMPHTHnygPEjPXTgw",
  "key3": "67EtpscB53HJVy6jJi2UHvf8qHZym12gnpnG5zr8i9MxSRhW71tf2boCgnxgdufjSwy6zY4MvfxzfwsJvAWN7eki",
  "key4": "3wqHfFnEqQo2MTYhqq6CYcgq5KJw5R28EMq8pLgQonkq344PZRSov1hHeBsnusNXqjJWEaWe5J99RoH7vKgxVUsu",
  "key5": "5RjsBkUXRUUzKPz4fTVDSb8cCUrBiMYahFxCb7XixWWwP2vsrvahuHn7Y2EsDcR4xyBDuvgFHm5u7aCuDg1QLjZp",
  "key6": "369dabhaF7mEmvaDo4e5KGFoT2d6TiKPgnG8bWTT9ZtpHyf6EPtRMxjf4MpgQBpRzNL5paFEDXazrCX6Qd2rx9hc",
  "key7": "2Wxx4LENhHSvQDE8fdcmpKFuhFGCZXDsxSZ4ikrjEpicvC3BwhDemtFfwHVZHFnnWuB64zCv2Qmmwn8GUyFnDiCd",
  "key8": "2Qdxx1ayBuzaDuxQZWz4k1KfnpeX1nzBsZKcsM9jfByWk3iGBb6ePitydRAZP66JNtRaGMdGCMjpK7w96JmQPyrK",
  "key9": "4NzT8wjKmqj7bVmdx8mkoepP2wMNBuXNiHzq5UpRPszed3v5hJUoSgZa7oTdxfqyojz5k1hBeEAd2VRvyWZpjw54",
  "key10": "qgL5TxCk7bKissakzvVbwtgn9pe1BaJvks7RZMHkTVDdJzAk5N4F2krtvZ4dWHcKWRsScvwRWLx3yg76boSeJnZ",
  "key11": "4Bd73jMVyn6mqoUy1NZFnikR3qCptm449CY9NdFFPn9fkQERnxWKvTQeSPjXvkyBhMKQC8RWmQbYXGousJPMrjBQ",
  "key12": "4ga32hyK3kNyVj4MHUwbiffjawstHgYWD41Tkd5t54MD6S1LDUpyFFWnv3yZipUPn96b5eP9HqGe5x1Pv1GXrL9w",
  "key13": "qQ4iyCRKRz5NMAzomkaZSQqKMhribzXwNJLwV9SHJbMLhQaftTgb2f7eP1nUwUd1RWu46np1dkGcqGuE585nMu1",
  "key14": "kQQYdpqk9KzEi9HKVg3JWHhn5ofJKCiS826ps2cQCCVcPQtVgR98iY6NR1CVZ9yZeB4YPzqBDApNggTe5Kju14e",
  "key15": "3R1Vw9tCtbJnVmxdgB9NjWFCndyNfsC6tLs4sd9JEswvQNMMvM7sRPDVQmFWa2hKAsQYcKWxv7jTB6hqGBGSQraJ",
  "key16": "ouiBCnRAqz8bbosneJmybk6rF1zBGnJPHeMU5AneJKh3GYCX7cNZ86W8yKcMw5cSsPbEHW3pdducSNfHBw5BYJY",
  "key17": "4DdGNggRvxoSSh6y7eZb9eVD7ohaDBNiWuFHzuUGq5noAcJznf2otKnFnw2Q2jQihEz2rMUEipsw8oKs7h2NsxkH",
  "key18": "aXcVmZdcx4Y4DBnVC4jCZrEv5o8tndRkkLS5QU5cgpufCHP44dSr7zKsM9GzMNMwHWoA9w2jeT1QBHvTZPkTDeN",
  "key19": "4UoxneGR9pp93UkejCqExmJsvMLSPMVxnJoem9xT8wQ2BaJvHMuvrRju3dhP39P6pgyh8S9WDnCVqm1ajDUFqRMf",
  "key20": "433QSJbXPjT9J2g9X24YRs8RYspYzh7eCeefNBq1w3WyJbak1GrPjPQsmsiEwUkWgr6ma6nwQmqN3HwoAPdfQnL4",
  "key21": "GNCTyiCtuhsDP9hrTVeikqKMN297ooqqwpxY4SReTPdWoTDb2Q4GfKaAqrfFqA1iXvf7wEfkza1SyNmoKYDQXWX",
  "key22": "4vZYrTzjEMYDNwmkQJqWBuwsESTxsoU3NqwytyhASR73X1axrXiTg59vmHbJgyrj1Szx6MSawxve2cN1kGyoYXU1",
  "key23": "3hd2DVP2fWz1ZKzL8S5s1mJ3qPkCxwFcWYW3oyby4xwyDG99bQUnCkHrSYAsj4kJ7KpCapBTa19MwWMV89xaXZdt",
  "key24": "2Lyw6RWm5UZ68beB8EimWestgWPE2LWUtcbMtiAgqRefuu64jq27CkMyjGYHVE6ShyF43yJG1Dgb8PJJVduquHAy",
  "key25": "2tJctgaY27NDQBESgKB4KABJUc5Txs9hWXMb562CNvkoaQxXc3otzH6iRePykn9nDtq59rxd89Lhs5J63JDoD468",
  "key26": "4t1aGZA6LprLoni1oJ5xp6FaRfoCU5opvKQXnqHuMfcu8JZ2Cto5gofybc93SYvzeWLtXrzFJnVv6isFxqgqxx4K",
  "key27": "2Npyo2PmT97P3pFchc2WBsEVDFnNxSKykx4HDab5BzcbknVE7CMKZw2NWkTGbfHzeYpUQd88vrNaK6yFheD4yB9K",
  "key28": "4XkM94zNZ2XqS8XZUSKNuFQedkmx8bCyNMRbyNae5s2MNNHEEkniBJv7LjC1d6wgpMB9vgm5zDpavDF1aRYSMNwd",
  "key29": "5dWwogYWzSbMYQtREbp7h3KuwxhzbVeVSsp27q5hvfQE82ms6EYyspHjsLZjMQS4sqDueXFBGAT8nm2jmpyWLMGc",
  "key30": "4xsKZfAzYBD8DAcnJayCYnYSWoUbgMwt8tFBUGSm4GGcoq3EMNg2K8CBo2SSMfcBski24QD8JYuhtarSskTDAPz7",
  "key31": "33j5cVXNu95zXHxrtrJbDncEFzaBxgDXmEJgPotJxWduet3pKrNE8jDYkbvVDjS9PyztfinGcws9hyzQUnMWUzvS",
  "key32": "5uChpMz9NYdRqxS2f67zaK2eosoG1KiqhkD4atkXFU1tuZnG9TxtZSJPzXGRJvJVfUWdCmsWW3SBXDjDJHdmbaoE",
  "key33": "x8a4CccXds9bqrKBeN8s73Q7CW1CLgg2bdKMH3CveK8CMdgd5sHqZgNjzbtBBLRMGd8MsVLMeUkaKfuyjrSB8tZ",
  "key34": "snMde7r5MfwxDg2Ed5biDdoBZtkqVrJxfM3E7sc43kDfa9Szco33KEuEnkkrQ2P9EpcXK2MU3HuanCpMa8SQB5W",
  "key35": "34ut6VmTE3ARgQ9ezwUuY2ihVBa8MPoYimPYFHgkivM8DFVBk7SLKmnfxQahNnErscgkfMyVAERaEimaLyRvbSNf",
  "key36": "2bdt8LysTZhVCsWnZQd2EmHC73jUngAwQbzqmkKJKim1v5bBXTdHzL5LEn4qkuE23BVT784PxkCYPJ8jTj3qndC9",
  "key37": "4wtVKcVa5GFnbzD7AqwUCa97kNiR66kGmiVm59VtEuKhpzk286sjFvSnEKnCrmza7PrW2KUCyS9t7Fye1XZeoJtT",
  "key38": "5tuCZFLBTSFw9JEEArRNpfrg1gScWwLWq54K1CUuqWLUUBcStn6z2eNsDgYcH18caJzzANi2LGjexwmDB4QhJ3yM",
  "key39": "4H2ztd8A1Sra4zrCMsLrkxc7g7kdFQVLA61uTVNpBP2CxQMmNMQbraG75fkeqAx9busXkbjHEYxyfx7nK4VNomrK",
  "key40": "98ymNusnuNQFZxVptCnMyn1csVdszfzbp3Fk4LZAPpWf4LasQSmssQUMiS85DETxFFTvC3TaSdw6bhcpMCHiYEq",
  "key41": "67MSuDzeoCGdrQ6Y8FXfn9jApVqwFzuSTTain8VDM89mFnNZTdaVsVQwoeRM9PdocmjCd7uXyx5NDqnNR9aRa4CY",
  "key42": "5UyP6aF7HsXLFXJHmD77CCtpAvmPcSDoHm5Vo387YHbMEfsuEA8Qi2Xb2RDSrMQN6uQ3nyMB35RuWV7dYdKf5dQ6",
  "key43": "2RPMPBjJYufFfozPZD5b57v68F8vnZmCvLivgx56T4EuDikfwuM5vK1uxbqAERNpDPoXSwd4fUBDJqBT944h63R9"
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
