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
    "22KkuyJriprA2QiCBqYHNRqQ3zahkUamjzLnxCdqUT75QHdw1nFArk4uuDtjbX4R8J4fgnR5czLHYUfPevn8XSVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjXkUBdQMGBJmQ8sUTKVgqTife8d1amnXKpLmbeT5J2vrz3SegBmggjgeKp9oangyPHzoarjc5cngR8MSkmyyvk",
  "key1": "3ENdzwzGYQ3Qaob7YV8Bo1gjQS1ygz34b4FSyub37DMn93aoSLYEhHNMYpgRnx3kaW6gsVHWJQWacdccJmsHg1pv",
  "key2": "41CA22zJtqhFsAd1EPC9qfAVXyPebq8xH2ca9qNULdWaGjnmqCEnXpHSbAi5Zt19A1jVTfHdojSAvKpfUutaHd3S",
  "key3": "3m8RVanrGbsMWN85LfPzQ7gwGSbVhAoZinhf5iNTb37qVPsurpRzZ7b2RtAmVybEsmqrRumsd8Bii9FKieKxJYeB",
  "key4": "5Zevk7Q6uSa5DMobrAijyqsHf8ecz5Jabene8yRHkfQHBhQt9Z4dam9t9f4z2zwbK239PSnxd7XbxAcnRWhbYFz9",
  "key5": "49KCuBYubzhMG6Ga9mT2Cm3KfsaL3eiFFn1vEzqdbsr6Cts7SkieZ7hBna8Z8MuWEULUL66t9Ev81GhijSWziGdE",
  "key6": "231he3fc4kgYcUBzBSLvA3FtsQo63rWbnUc74BNtsrzHdxSB3Nyd5pGo1eZ499TyHD6TUY7Vp8ppdDdxi9eJqpmD",
  "key7": "5qiEAdog8FCpCEQwDHYeYNg1YnpmaA57as9Nw5PkeyQ4M1UKvk6hrSp59MD2DhLRkxw64VqjKdKRHsKJMuM1LYbd",
  "key8": "3J2cKNNJkpQVJnQ7hDFws8GkSLsAXuVAznAvkeBWB5Xpz6ZVMDkm29RpzAxk1JKyYQ6fmJcxs7wSE4vyHwzx8p6m",
  "key9": "25ancNqiUP83MnF7GLFwL3J2d2CJsLQDaXYSKGQ71fGnrnNTGCfNPSkY6NcQ37bnkjKBF9hJyjG6v1RKYa4zqsif",
  "key10": "2LT8d8eiUkd5S9B3TMqp8gHwGXGZ6oQFDt3pmnz2P82eZiYWgb3Qq4ViDmweCxkw5iHZv44CBo8VrpMzLa5c7fJu",
  "key11": "3Nh79jV1dwEo2J6smyVh7gpJFxk2sedqUN6GmHPf7PsGK937kqKTmL1JTBMbupL9Qu2SMwtSivpUgUTzXjYSGUZf",
  "key12": "53ZCNmPDxMum4yvbsLdE6uQLHKkFSfUnr4ndrgN6nzQsuj6KuapJBZmQj7FfSw4VYqNsHPKxpsJ4SUdFp9HrWGpe",
  "key13": "2s3QL6wn9b9hA2zKKJKMqoj4E7rFav5DqXgAjxeSfNQk7knvj3xgJwinHEP4EzunrozxgJSCTLhGnq3VbSPdtjqk",
  "key14": "2SK2HhMDZzyenSJFbyNcgm7noHseWwU9HVDjgiXjYvp8iYtx4oxg9QtKajjaH82dcQg8vNJq9Ud5t7x1hn8rg3TP",
  "key15": "63jqBVUzVr9DiE9K4Y4kb3LmQsfH51gXtyAQ7pYbzwGQLR5fHyXdxPC8EVVNp7Q7WUqQJZBMa1GgfQhvfyg2ykwg",
  "key16": "5WTb6UgNEs9ZDCtN57DaHyNheLYzGzoo3yB9G2DmjzGvDct3w5MUm5SVdD4b56P7vqBerZkPiXh7y4pZUKDjmJZc",
  "key17": "2eFHVf1M49VnVui4wNmEJJhka1uernHCSbXccPM1ZhR1gmp7mbYQCPMsGYGhEYh1hgPtb3Fpa3EUFFgNnMY1zweQ",
  "key18": "5rwoMXkR13ZeC3yQFWu5Sm77YeDtUzKRsAcng8wyAdAqRH5Ctxfr25e8kfwA5HaUshpq94hnVtXPkqeWgAAYQNjk",
  "key19": "a2PJvaFNA7syibjcJdS7iRbcDRUDXXXBYYXx2gXHySp52RRBCgSwnBRoiypd2qjo4mRUPbjeYoXJUxRP6KJjJqu",
  "key20": "3H65jP6ndcsAkjSaKRrreXrqjuJ1ySbw3zFFeUYGXtYGGuFs9nFTRKX4pvg5Wqx6WhWqSvEpWZ6JDUdJ5dFqUa9u",
  "key21": "4XqhNcVqPLsxA8xxRw5LDh9xfGhSv9wGA5V5bhoPS9ad6u79vEQnU4TmKDaKkFTq7qHmQgwhYbu2b58oTXdKXBKW",
  "key22": "3NxauWg3iY5wxBy5Px95SovWhQ6uLdne795T6qCuYeMAJqqfTYHgqKvkXcu85bwjGR4U1NTRZPJUxPULNkNQF7z6",
  "key23": "2xwG6BdXsomnzMFBkZYYc8vmaRDHLDUtTv3BEYpebFRYLyujvxhuyKmunXoWdvduhxhMyJzN2VT2VX7tn46NtK9b",
  "key24": "5ri5pUAT7uCegQX52wVKmSvwMhdZyoDjpx1eJDjyCy3LunThtqXVTLS4b6nw4ZjJhsDojW7hHxbiQPSn85z38xcH",
  "key25": "33KNmm6poAwLSy4iKVnTQCxhxdgo2tVp4mT586nAL5enEcEufQny5Pr2Dw15dfEfoXwPSeBpCwRC1sZhpGvrauzP",
  "key26": "3WnjaTZSrCHALmLJDhmM6Sns9fufw31EQNG9kG4buav8NGamWDSEBNE65947TBsrp4pULmjFDYEJonnpznriHZws",
  "key27": "3MnqXJ2sfYzXmxQ3q6Md1fiA6jPFv7v8qkse7D72H4K2L31gQJHxAKyEsNMdojzfg7NMc6XuFb2TUWZnEEuKUtcw"
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
