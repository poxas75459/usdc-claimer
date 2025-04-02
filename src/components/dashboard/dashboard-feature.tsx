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
    "2MpoaJ2jLqcNsDGW4mjDWSiMf31m59ya8xpSC7LMTPQan6xLgz381WPf4qV7Jfe7xVnLgkLstVS5TDsQU4ZkkhGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbDNWTGtBoEUCZzzZZr6Q7kRg57iUV655Uc6erkaLC4jbhYbHqn6pzagind39UKpqheVtP5KrzZnn2GCwJMajKb",
  "key1": "qZQDpHqfn3zq9DW9y6xgXf5E7cAtiFAujT93NhZ3EF8R2mCeL28VW4VNWKWhQSxj2jjjdg98SRUqDKd5gK7mt1Z",
  "key2": "26zZjhKWARgxYV1o84yuE3sRrEwVtSaQ1oMmLfhifSVn1h7hTS1Gm16zP5v1eGS1kNq7iNuhS4N82gHX6vqAgeNT",
  "key3": "3QxtvvwxRfQAoQZwpPKp5u935PAs2GNjGjbETp5hHTcqHM8ia8JwGCKZJfd1swWvfNWFKQZnCTCeSXSZ6SPAbTtD",
  "key4": "5YRUzyBoTQ78y3rJQvf3Bx7ogdTjVnBqz4QdNDdXrEVL2PgknACLbYALLGebNL94XJEVg6Ex9hKiRcpMgLjBunU1",
  "key5": "3z9e4M7CYiCGcyKv2LPDU7MuhxdwfzVsbFqhuBG9e8cs4EUG2q1hmVDpy6ZZtW7GtkMUcm4zTXGJn5wyQxZTPVir",
  "key6": "4jTHnXjyw2T4WjKvzcoecLyKtVTRFStxKR7nQeKfVP6RNhhTcnER4FftYkyoAptSedJCzBALud3HTHEdFmpdhKmB",
  "key7": "3aZ848kTWQaXyPWzQBXB34hLKR3FTGo64mDUXEyzWQeej2CvGxjhtE6J8t54U1BqCuzSnMhnMh1G3adU62YtHzZu",
  "key8": "2vjqSeht4Fsv4NxMJft3DNs6ZCvmynLqMrjF8ZnfTWqDXNFQKcR43QuibSFeQWquqCeNH9ZrNL8kphmnyFAm7MFu",
  "key9": "xAk3nRsjFD97cYu6geJMrkFjdd4W9aHNQr7Wr4UTBaA52FyBCT9jwF4zmT5vmuL4kXDiXzc49jCVoMpPD6THFF5",
  "key10": "3CRYm8BwVHyoLGNjSCr1ofE1EGf2f5irsaKsfzWQPbT82r3xN6N5rLgoJpeppbP7PJv7mModR11ZzcfupC7ZxjBv",
  "key11": "5m4YHYeytyssJ9z8yTiX2CRk7nd5spusarWbFNapn9gxn3Fuy3GM74mGiQqt2Mf3wmdTbLKcueFW8ypSXfgPpBH4",
  "key12": "3KgPhad2g5QXBdMEpZKwB7tSwwtf4uRYtHPupAuYLKCEF6Ho4vXFrwcVJ6kAxnHBG2zN6vrQ8xox4r6UVRjvQdQx",
  "key13": "2EJwVHSYoWKZeN2RR9CKD2vc9PVgw6CT3FzsEopUN4sUfNx5bCst6DSdKpGcxCNqwPdCzjYaCq9RDBjr3UoRfZnF",
  "key14": "4bV7PB7h3ecbmBbREKFJqBeJi1E5cTWKZQcxiLXS9Yf9gUMmUrpNgv9R8bkZGHhFAsAvt94MuuaWcijt1EdqJGuq",
  "key15": "zKUE857GrBifXkuUo4B6Vi6r6oredqRWGWiHFy9zJyxXw2T9FnA6Qh3jKAn6aWqdM8oBosvwMSkZdazbcJLuQrP",
  "key16": "42XXEvhTWbRDSSzSVy46gbQmucucGujHMBfDLts8QC3SfegvgrhEh1qsz8aBnjvUdbBZLrrCkdJPebTt9ZpR3Ex9",
  "key17": "3FEKjUJaPEaXCMKdCYyheGsTPPvJ6sf5pyGxEEmpvvjXQDoZf4raHVC8mN1tyBHStKsXwgqggHd18YMZKX9DvPgE",
  "key18": "TS87dN4cPDfsqEk2WT2gyqvqTUu9yttqWpSLP2swfZYJzJ9AZswHYSqtZp6MJJeV8EGFgEDn55bEBsvsypFGSgU",
  "key19": "4h3Dzdtfh5zYDS6wKTRYmMQkWaeGeJe9WrRpi68tqVypL8r1c97ccnS1SBxXwx8bbA1LojRUNUXQb6391DjqbA3M",
  "key20": "3wCf6HJmTJVa52eLvMdaQ6c3LpEpW2XKZR8qbhokGfRmhRi1QaHzKmRogrDGygPfs6nCx8nuB1PPiXGfjrsfkzxj",
  "key21": "efPPcjaw8nSZAHqxw9FQMYFxJLFFdNd8QnaC8LDCqNZmea5gH3ZGyHkUg9KFpX6WSE7XxJ9DdrtgiNy57WwsYGN",
  "key22": "2maPrYYdXfmFHBJPa1LxtumKkWhKMG4XQnCDdPvc9AyKmywLiF3xzaywA1GQtLZmYaBr9e8b9rMq7TQKqqbNtREe",
  "key23": "f6rkg3WbcsUuKkxEGd6TYDMMDJN9s3oey7qBaebFmaqMJsUbZM6upNbWS1K2J4n6pdvkDTLeFmHyZEmqXRBaEPi",
  "key24": "33fzm4nmn17GQ8BtXcuqNMX1a5YZWBsK4hD5wMeSHopfAGwxQNzjbwQJF5jUH539gQH7W45Sghyq9qGsj1Va1jfL",
  "key25": "3xgKbQj5HAgrrg1dRjHrWvrYrfJtYtbJjkrhZx9xzEeCvuy57itm6DreTScdHh7Fr1GGQzswYYtELpVjGWqwJd2r",
  "key26": "rHHnrzC2bKoXTBMfxZog4weQNzdDRzGVDkXAc34HTMf8y3d7bx47nBxFEhCm8E5r8UiyRg7vq7Mf3VZQSXjkBkp",
  "key27": "5s1ymqTPDup6KxMJJmUz2YoUJH4kpYnuV2jNA7efxa2sa8g9k8umTXjCagbbRAff1VFjUjYu4FJjkfpkUv8AF7YN",
  "key28": "5VWLs9Jf7STmsYfpVKF8csZXytDPd68EmCb9ZvnjNeYBCpYsq5rBhC8extamPLs4pFnG3cD9HMUFir8abzH1iL9i",
  "key29": "3vRzmSM3hNPAbyVrHWyNGLNJs2ghSwWXZx2b9DDeZjsjgmKo6e99yfiYL8HUKGNkZbTysftXm4hQh22Ag3FzUAb",
  "key30": "nm38RXjSiNtUBhKm5X74hm6m1AuMDBb7LqUvC4rS6xSK2zor2PaxthDhGoWbpqurJY3QFX9165r15irNAVrrG57",
  "key31": "5ubvAu7C7w4bn7ReD3bFis9ixESrqc8b2pxZ6EmZ1AqRGD77NBU2s8XZD65wtZZaPmr5MhSRevj3iTm1vCV7QEyU",
  "key32": "5LSE2L2DmgWAdmrueeak2cj1koyTg95SZbG7mehfZCg4hsfdDv3mSVgVqBpoRuVjQEyfyZvByzokqhjM6ohnPqiX",
  "key33": "335JAf97JQzdwXfJukw4Sigy6zhmeHH4k2AjiHrULWomanTK67xgp3e8HmojwCDjmsmzf3VHPcqesRELr82fS8T3",
  "key34": "55GtywARzEA7MAdWLkkdM1mrKQsk32ob4r7UHrUMrZ8so2XzmyjUoNqNydgZqatC46zeYVmLNNg19ghq2YoAVyx4",
  "key35": "392jiK12BLQdKak899Tvrsc88XcCdtQZgCha3GmHKwYtdnnRBPvDedYP2mUMx6CXSnQiPsdgu1JexSzDAvwaDZbe",
  "key36": "3soPfnFPUFX5mSQqBxh79bZxXmqDjCTjpePAVB8HyfJQuZEdCJbJ6GXWWKi43vSa1X1VAe3NMFETvRFz6K55K1pM",
  "key37": "NmAdg9cMYr3xTYATKKAnZNt1cVaso5CvHMJBsPqnDdeT8C6PPk2bwgc96zg5pztkKvNvx8qRNjJZz7iPjc8TSrs",
  "key38": "2KU6iLU9ZKxqTGKjXaboTBrLye6YyaNH29rjGsjmsGrFdHJ9HtUaHvicXGP8vrGSyhBcJLfNTwBUGDRrewBMpno9",
  "key39": "2qN1LjMwtvi9iudEMDCFLevDA5f42SDqc8FDV6SN7V7xp5i6RYWVyNezyAHX4bt9Yt8MGj8eZYPS4oMncgY4oKkf",
  "key40": "q2n9Chj3RfAtffKy2ETU4xZULzRLmFtDnj2XnmvbNRFvCyyLkCEozKbAvWx3oEUs4ucxWBRuUjLQSvgtyd8Ky5s",
  "key41": "5soBij613GxmYkRX3jcSs7fNipFPZ792eZGwiSMFsp2XmuWaBrpGgFmv9MDftNDrTGkMqkrdWA9j98kZ7398vYCq",
  "key42": "gL866vTe7Lb5NWNLu8NcFt3ivYYQuuRwkjCXWjzg6Yq2vnfY32uCvLbFdATnj3S782AMdD3uTZ2McyF9fzFf4X3",
  "key43": "5MqLuwx6DF5nC4c9MQpciw86vUR8nWWane5zR7sn5vgeB8ELfgypPHcccNQbgZAJw6r6A7AjwrzpiANz9LYz4ZTU",
  "key44": "3UzTm6swcpaQ1RzT9vxMdL4FTtU8x4EgrARMykBnzJyuuxNAUab5SnagLYCJjmWY39Rjw1Vfwcfbs3G1KiGRWz6D",
  "key45": "mgqx492fPbScAXYgtrWeyJshPUDroMLB3xgR9rwGVn2GaLw4Ftvb9giFVKqQTVrZkhDnV8uEBwnydFDRpHCBsqb",
  "key46": "4QpnkJqnkPooELrarhiCjbh34jjkcDtgVyeQwq2EhGhfJKxgheM5Du5RxpF34GTWMgkUAjaVw6sgcJpRXLyt5Fo2",
  "key47": "24z31hh9dpz7cvRjEVg2Fkfrzg1YuR7MSvkkAQ3u9XFhiSjBTbqceBPr4p9fGNRYTSvtzCuUd9vmtp2Ebigy3gkk"
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
