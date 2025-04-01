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
    "2ekT3wMxqyZNcR41nTriocnHpwqiF4L38gysGNT185Zowy62E7NQC8H4tm6mSJmR8shRpb1xWGN4twUSDzLtA9qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2Z464cn6h8Gbcs1S2jbbs8Y3fQq78TvtnAjvnESJLsDbvzosfi5JQ9zZS6iwNG29B84371hMab8QNv8ScpyvFN",
  "key1": "4guCVn4rPkx8H5NLzriFxnTdKa6JZLVShRDBc6HUwecjthvxdhGEfEKAUHtRaiZkJ5K3gJdvcG4xhEXCFJjcX9xz",
  "key2": "5uoZ5Baurk9D4331haHZ88PQtbNmTqmGgCUnnTPtavqbDvRGezbU5VZwYrTbT9tCFP4Um8hztNuZUtwziXGqBzmg",
  "key3": "ZqECrtYi3pJGq5DWDTU81qcT7J8aETdjjrE8ReaEGoXNzrpsA9LeBU7hxLJ2aY5tQcLGhrEE9MiV28zBxrfVBWq",
  "key4": "2o1ncuxVQCoNqAZJn6g4hDWYvNUPRpJB5hMujhZU6BPKYtzQrCzHV1jo6HVkTwpXDsVXJZ7zHS6Dj6gu17rChueE",
  "key5": "5ywqjwLmr6FEg4goro1X1mj5rtCuoNdGaew43M19rBWiRyNhzhEPcbFshtqa7Bd7yMBRgD6x9F8b5jr5prM2uhQJ",
  "key6": "23UGjMTYAKp85ywU1B3snM9CCqYRCYWp4snofYiemovbLzMGezqFhxLGLcv7SophtpR86S51jhbr6By63yqrhAMa",
  "key7": "48JVXaBFcvDLS4sRMZnn15DF48Xh1JKYjyVBcc2s2T2qMGoAoCJ6A9aq61P8zFLV43E767MgPKnjx7P8Em6VSfE9",
  "key8": "vX8eUeAgGr7DLbXzJWUznvfeMU2QvVgztU5iv2nfVtorGqrtWpNKjYqKNPfSp1RmBBoGu989fp1rwpWZiZUvJdG",
  "key9": "3exvcbbDXDGp6ZzGgQtt4Ws8AAyMRAWrFm7k5q5BeYXLnhbjoKhYvqsLw6uPqM9fqLDoQY2qdTRD5VaDhr3e3mT7",
  "key10": "4J3uyxkEnjzZasKFn2o7mzMHMkg2Shr8LNokLyWzKnaR4aNzHCm3mjPFwbxKR6gDnVWKst1oJaSixJDtAnDxVvXK",
  "key11": "3PFo8u49uGYgqb6W48Db297LcHC7DsaHWcXqRX8iXxHmEYnvNnzBjqfaYt4F2hNifgQ47BacDSGLuaLvVMj6u8f7",
  "key12": "26DhYCyFg1ie7C7jV7Es5PJwwUWZxgLYq4MjrbDH6v9yCVnVLVbrzCfyqa4bPDPHntCGfMFRs4SyBFLjZ3jen5MC",
  "key13": "5TVvcVungzot42HNDmQsgrTT4NjThCmHyV1dMkCJW91CFTfadiGspyXy7uBFAzekYMpnH8HJhnwMXXkC39YoFkRQ",
  "key14": "4Yi3RG2XdS2tvXcNbf6Myr5imJLBCMLjiA2RfDeKUfDEbBhdyAAh45gxLSUeCkEMEbTzbfyGNhDzoSoi89cHQmXg",
  "key15": "3XnEfYvmkGpNdvPWgcHjQi3oGZvzC2U1uzVBCcZfqCphsZxizve6MhGZSt7xSqYQTXaTkKtif4a82Awq9v6zBd9o",
  "key16": "2oFqpi1nGvKpx4yvLivsKk8Ce3YHN5P1XUd2pGVwqM9z1zMX6Vj5QMAzxURzQ8H2DWDXpu74NwXKizshWYSeYZsj",
  "key17": "2W1FAfEP5d4t8bw6SsRUPecZWeE4XKjTVBp2RaaHx9YM3dD3pfjfHhm451HMNsDZFWL9aF1gkJvdgY4Aoos75oZc",
  "key18": "V9YiKKLxoJZemNPwqPqZq4CcqQm6yHdd6HsEpmB4BjoJY9zCFh2UuDue5Yoo6gz3xfL5sTCw7M5iAkLEtgETkzu",
  "key19": "2vDW7fAsczw5corrPstbpmmBk84z8jvmX8qMYEU9GhwSx28qqquEsAzohZyX7jc8zXxi2G7hRTo2vEx5EYoogW9p",
  "key20": "ec98WgUP6vGnySL7Y6Gvn9DPsEUjZQVUxKvWpQDbcH9fqtEeoGFx12sfMWTRbsMoTQhYtoLNRskhXrFFQbUWAd8",
  "key21": "3ub7kCnvMgx2bm5hQbg9jxpLoPKgJ9rF5e3bLeEKG6mobFP4mg2jm2nXVn4yNuRfthV1pv5AHrBCUV27Lc9j7ifm",
  "key22": "uR2NgboAX12Q7551hF49mgk3DodSf92u55mUdUw8tVZgqp5qmWB5vcSSh1QtXfsuGDVfCRkbvTZAe6BAGo5eXgg",
  "key23": "3gzrqcmgz5rVmVxawHkHx1eXzhpgVfEBmXPi8WqMuvx4HzEiNtMEASeiYG6eUsVqaeDgiLuEEEMT6o3dUsUpHwa3",
  "key24": "4Xo3bJgi3LJpnUFCxujGtYEfBAZZC1Ky7u7uSWK9cQvGFYQQYQGPBGyA4E55t2YQmz6RgmLDCZiwpCgKMh2fXSnn",
  "key25": "4gZjBsAbKNkVkTXbhMGhukXsKArmzbMwABdvV3eZPeNmZTRNyGWdEHgR3QAH3AV768cpSg6wVGuvdw7FUXiA12QF",
  "key26": "4jhhNgFagX92W2F3H6pXbkRyQSPgd1pvXc1u2ncnpKQBrrqiaG6ZE84WHY8nbhrifXQBeAJ3fs7MkNEZXTkdwvBB",
  "key27": "54jAvtJgaNmx67QLarNzNFcqUkcDV5MzSVwYQWKwZ6miMmJixXN1neEFkbabBWF8pCgCzkkLxYQBidvLhZKfc2Cd",
  "key28": "R9ENuvMExR1k6E67rjdt7F2Hbfm8UWCUaDfUjfZCjBY1mDpF66A3Fecbybm3XXjF93jpavhXPXhUPGqMmz5YUSr",
  "key29": "46fE1aWVSU5dJYFmKB5RvyyeBHqAHx32Mfx59XQNcJvE9hC7xCKCYKd4U9ZnFkXT6RDeh8Gy9doGyebHU4q7seNY",
  "key30": "4vQXGy34RQi7t6gUn8uUiRn4WgYFfdJ7R1AGiHwF3f8vuKZte7zvoiT6wiV5Z22oAdzq7qaw5oe1qLM89yfYKpzE",
  "key31": "69m2PUqdDpEZXDZjzsTTYKXx4N6a1CngY8JRPUirXZYLK9YniQVTvwvaWrjau7puQh6YDbunw4MnNbb6Fj84doX",
  "key32": "E6o9gnKzuHuY8344GxzKMa2HCtSLgANez7gH684cou6Sqp3dgRoLir4mAwwjDqbto6ZBrcamyMEa1VWmGK3scZh",
  "key33": "DcRoBfBHRBn7YwH98KcTP7pMp9r1ZsaiYzJ4URasxYdTaH1UNccT5us5vq5LyqnSKi8ja2PjspuVT1EkNFLRNUF",
  "key34": "4emVNmLomjLSMcvcKvgjxDpSLWJFyVhhW323M389gLijSMULmj1KkziE4QLKbqvB9eoR1ZDJNDe1ssZYWSHJxHR4",
  "key35": "61mphLJznxbjWFcAtq6XDwYHceGWXqQeCToXc2s2GVZL7NmH2SU9aubgztRpNksqDjPkR7evDVPrVSuPRBvjM9LJ",
  "key36": "5EQrMcXWhf4Yj9NbuLwGsyTs4JjCE3KoN4Jxvx3hS2LreP2ZkffcwMvff53MNVMXNtp9hyTJ3UmhgQr8XcSAM5L3"
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
