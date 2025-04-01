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
    "5BAoEG2XcEpHAZFfiAFf54csQB5v1ggJt9bmxSaRRZiBKxDw3fv8hWnoy3fYKBZy4FZcsVYoYhgGwq78GnchCubq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XASg5voj49QawUC68Vp11dYaZ8pBiMwRbyxdf85v7MWsozo6u9jksQHJu4VJEvhfMG7stXFsQNcXmgWsy1CU18q",
  "key1": "5qXsnWpQh1hWgjjPhLEXzoqoT4Kshjku8eHTkKFSYSK8qnGwXyzrnQz3P165r137GmCPCWLcVHLjrJ93oDFdGe9D",
  "key2": "5TSNmcKi8m6zQnUjgCZ5P7yir5jfeHZjENbYsCHCmEVG4epQzi7UJn4wLLTGwDry6YGcJbSu88kjLgkWWMvwH8ng",
  "key3": "2XpAxActBjYgDUrH7HwQ1cdEjkjiqMZPt8WyDH63wgF5wkGjd66KSBfheWaFn4gcGMRxAUiHFdcQoXjH9snGgoLZ",
  "key4": "3hGSyFbGL3u5T21LgKMYhnS3QXraTUrMhWV98SUSqkW6SGeXXmqpTYqiu84GezGPn826ySBtTpiUhp9ax6wJ3eHh",
  "key5": "3y27vKKMMLvJzo76sEUM3EJnUn3RxzCu2uDFpWkaiVQoLfozpAqwpTReXa1MVYiZreygajp418TfR9WDYUWasmMP",
  "key6": "Y1fmzLg8uar1zEWxTyoQfYzzfMSAoRtdW6yYimxbbrcVjFzWEXN7x16VUz8NdscagCbHj6Cc9bbxtuBHqAbJSz3",
  "key7": "4ocE9Pa6p4GyJaUoGU8tDuHi1pThicGMURCzKHp6AqjGX14GzFFRvpP3Q2vNJQXu341QaRri8NaBogrrefRu6Xav",
  "key8": "4CjTAEcnzetoaCqai9WjC9Bg4HSuq9MR9wQuCMPoLPevaaChU1VSb7zBzkZwrF6FKMVho2HF4L9ZMHrr4bFjZnyp",
  "key9": "MET9ANGfnkoKcgHgnFGi6YJjh1H4UHms2jjHQkxiH1Bjf4KnsrHY3T3sii4G6UsJTEax9jimH8ACVPpiXiHsaiM",
  "key10": "5LPXdQ48Uzc9Kvt6WVc3KrYfXEje1EA1JeK18G81EkEzb95WrdeqptiWdbh9KoHwJFtUdQzxBvQhdo8ezeqsktZC",
  "key11": "3DiDzNbE442FfzxmjntUJ7NzS7j91te47B7F42MQvmqJJHLFPkRCMMP9u7yofLJfoe4bhx2EiKTP6GRpXfz2RV16",
  "key12": "5PDA5TEXRxq25dVoZF3G6CLR5TbRSMgBQGcxWzMQ9j7w1QVHgTJze4eLjDdmr97QcfLmZVHw686SqKK1L8YNHTTu",
  "key13": "37K32kcDKGYJVorsFZByPz85H7MSfHTzkf61Rv1DZ3hweZJViXwTYrC98Hr2sgMaeptHqwHTS9FcPSfUtXsvhVm1",
  "key14": "2aT7boQdJu7EX6qbanKfRg9mGiYfcBSgSXoGuqQpkWD3cbY4m1SCfPQCuw5Nj3mzNYm9abbmYVMsPSCMn2dh2bbU",
  "key15": "2i9kXzWrXkK5WEaB2GhkYeFKXKb1VStudeEBYJcmx9LRVXhzs52tpkthxkC95twoeyQREeY27jdgVRhTM6pT9Akr",
  "key16": "5rX6vKjVhZd1Hyj5PUagQ6YTybMeCEN6J6rbWgvRm9uBSohbhwcpWywm7HA4ZcJB5svwQm67ETCNJ4e4bXiN1uZZ",
  "key17": "ZygkAANZdUPF1QuuUQNEMXELnQtXzMd6kYqZC8zrryLTEUwVkpfLWVNQ6EtdWPb8UAee8CfuAGuTRXwGa9tP5D6",
  "key18": "4GzEYtazB3ytcRapeGNsSoWUd3mPtcAmhdg8oLE9a2w8HY97GKrHVkjQZp1JTrRwAC1kWZmturbg1zYce4sMUwXa",
  "key19": "25bMUNTFzJmfKBiYXrWgotey5rDP6S78Cx2fDqnVgNgKqXiJ8YgYbHVgaR7QczrjXLNvZ58tV8vtbC336BTZovsa",
  "key20": "2ra4dYkxy4kzXZBWkngKxHSL4urw6cwZikpHE2Ui3Tkv19cgsLtmGDgUdX4U6i3mqDMtJokxK51ZzJdCvYcj8fJB",
  "key21": "35s7A9GzR52RjbqW9o43JcdnAsrZZr4JeNaiguwo8rXu7XDz4iDEYvsU9nWfEUkoVx8umCHkbkgKZ8qtgQ4cvPQr",
  "key22": "47PZu6pzdtQ8hvf8BMxgQtj2timz2uZPEEu7c9B1uMMCkwWfe87pAmpFxi6ud5xrjY97B9u8Gvi89m8xpEq45zkB",
  "key23": "4k67EFcQ6tnwTHecND8mB9nk3WFs91BV3ijY2R5TRkJr5Hnh3VheRX54iMGgzE7w4wQ6nDdCWh2tLuNDiayymdhN",
  "key24": "1JonAZVQSyCJvCnApysFsfwbLBaidugfZJ55cUV7sX8KMAqSUGwbBmACnea95SnNxCx842vBmprN5huqYwCjgpe",
  "key25": "GahtqUVRDuEWpdq39fYAYSWrnNtNQiakx1AZhZZnmG2z3gw1FJfdgdRotqFDGWpKw5YkdPtdNAtRu291sRwSWEt",
  "key26": "2UUfAnCNCPZFHhVcPkD18sEpLv3Prv7nzN3n8oTPBqzK4njTVwXbePfTohqBSr97LcuFaV3en96Pvv87oYQACF5T",
  "key27": "4x6UEFNfF6dTsaWmrKXjeZav1ykNe8pSGUE5rBaau4z4qwbEEiAbYEwDZsQL9sneTnQUYguqWbtU9YAcu89kDojG",
  "key28": "24AXxjKeDb1sgCJJXmZ4EESEAyKxP3pvM8pa6fJEsdYYpdmRwCgK6aTN6Wd41WBHQkbWnFtwcx5wB4GYJZ3Sm7rJ"
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
