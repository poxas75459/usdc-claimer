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
    "4PabQHkp2oK1UgXwPJVadcqPi72LqwAM8CEJbA8nsHBVxTUPASUwuU3ADYVce7KS9pZNrAjbFXAnkD5me7CTD5AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDLwY3CqyLfuXJC8oZyiFDwuDk4u4xdedAoUFN7ky6xN1ZLEQLsPtYY5gGRLVUexkea46tL3G61b5d51vRFsXYk",
  "key1": "3dJChiRPZpQBo8xhHdgf7EyCqYBRvaGfYsdzTkhwyEptTz6UQUqF6wkWQMMTdoAAUMBJuG6inB97TZBmo3pwPFmp",
  "key2": "t5qiZgmDBTi363H4AYHTML8oTUVVhDZUEfJsaCjeNGn2Es6keLq2E4thWXbeVxFceWXEbsHZMgar2LwY5W8d4vb",
  "key3": "4L9QeVGcJnqatn9W1kPzLpqGDS43xMufot3E439bHLpSCyHfRLqaHfEJDeF32Ebe6WBZyRd34ofKPprmifRy8AN9",
  "key4": "g8iG1Q4CS7PeVeDfp8kySj1XpgF9fc93DoxUWJUWBDkhRZVdJ6Nshm48wwwaNi5wU4Y1Z9U2NargAnxrAWQLBuD",
  "key5": "45jkbLhKQ6tfLigFMGjAKDPGQticxFyMJXgU9LEC64ozcYzPrfs1ZK6VcNKp2Rku5JAdDXQaNauwh9bSmQfkDPTW",
  "key6": "36MqEHqWfWoaU179AbcG1eefURcK8wDVssk3nEPSnBX59fwV511fi4cEsR7zUtfGvF761LrFQAmZfqQnpbnXtQVt",
  "key7": "4hTKycKpDWpzaYAUYSBYQDaz9mwXgNmKaRnF97gY6rR5aszAqhYXyCKtfxJWJr3ibq5zjArjre31zuk4HY9uBrNJ",
  "key8": "5fnZVZvt8fzaVZ3cc1bunB2ueihtPC3q1A2hsQ3FUnF4fnuLQKDAU5a71Kcyjvydqt88cd9omrBysSkV1fuBviuJ",
  "key9": "2sxPugzvEL8YFyvCK1imeDMMANS3QFVfNNPV1WDeKnK42t72jRpnnHGRANKkm6Zz1Dk53kAJER7XqwEPvaTt8zhX",
  "key10": "4C3BXacD8smE8refY7TNu1oDzmc7zkutHuKs7waN6m7un2fNE9KGDAEGEkTpDdUZvonc4guE6qGMGBLCGkanoYdr",
  "key11": "8Xc6cys6MYrFo9cAiQHzrMjtKvm6G46GBoZSECrD5zSRzctg9BVfeHxsGbCtepiyKT8d715Cq6aL4tiwpmWDAz8",
  "key12": "JiLzAeHVgWmKW7GyNhjCwRBkCC9doisKHTSg79prPaFyNLnPHcEvkMbABbW9m99oN4NxLi6QHELuALQRSX37ayo",
  "key13": "Uk4jJYFSacUpfHHJzqokvZCSwND2YPDZWpLmoMgf2V1WQDiPjp67VV1VhVP6sz89CrXi5qmh1PyGxeLMhApcNpT",
  "key14": "BQKbznBMD5wGXVqmqjhZ4xdP5C73aLj8bx47YVdqV4t472ApqQVMz7jFpzEpJtuo6DKQg6n2YVfRZARPBz7PSR2",
  "key15": "5sjK49HxH9rh8BCdchwp7LKpMiT2fkqkmM5PqxLS54GjfLGVsrcoDuvYiRYHJB4acRtqSwG2ShhwKNB6Uu4ZwnLd",
  "key16": "5Z3cwHaU13UFBxeEmUeQcgu5GKUpotPERJNGNskXZsECs2Ha1aJi4rK928fkqzgpM9ruzMrVpRrhdkQ2a1PzcZe5",
  "key17": "369otaevqfGTwr79NEYBbqDifZ72UvKjtrHTtF5BPRdjiSuJ3imJXtC2vPmss6oePUPqnq5F2SZfNNaYbcADVdpP",
  "key18": "3dvjcvjG8UHGodySeHzwqQSNzH5MZzN3EUVLF4qVkwGPDuu2CDQK2y6aZUU7WrRdpQ7PDSoLQjK57hK8eimtFAPi",
  "key19": "ejENBjYUMRame5wRgWN2QbfbMrDq8MNeoHxFRH7Ag8x9Y4iwiAarDPLT6EF9WLgZsf27GeVVRe6RQAtRSCVX2pG",
  "key20": "3UrD1a6jH17Pdqc21L5b3rXbL6k3Lf2A1GC7F9Yr62ESdBkrjDNLVFGNeaaouXPSrgL43jgTg6KgnHUNzwqCNhxq",
  "key21": "3KvYnc9RNPsP24jLTWy9gcxUAmx9XoWN8zRaUK9AJ9FGUpSV9nZxUyMHJbE2UoXhnJJ4Z8LxTbXv85n4XZVm8K2j",
  "key22": "25HAwxoYvDTHkFsKVjJuPqESXJEjmNnoCe42xXfUXDhkgrHvimjt8BAxWDYwCANZdytYQvNXminCDSyu4QQPuXoG",
  "key23": "3ZaaEq95WgGPEc1zc9ZpGoeEwswuodvSckxiUStPH3zg5i2rTtUQruwSuTTaPEqRjL5ynybQN3a9tvFX9AqFVHD4",
  "key24": "4bA4p8721VJEjfd2LS9PwNZXeeRDpTCJ3seY5uYcaKpeyxPq1UXuN9oaSHvpw39h4d8EXva7WzqGTEgmcJ6J8MPn",
  "key25": "4ByysS2BRBMb2xKHzmNJzRbeJeqcNfycEAUpLS16AZXbN741Nz9mwaNWpEk54v1A4pE1tafmM9CvMSAY18z9WffX",
  "key26": "4T8nc4MDX4LKtPgSkD4BvnihXQuK9HFSpVmEEduebxXy3f9SzFULZtbyTwoGgveFATDjmPM3N8ffrhEa6yR9W9cf",
  "key27": "3mYtLHuPhRjWrHJqFXcv8cuAJdHxsSNh1d7xspDKyu8w63BTCHsLzeXAyZ6XcGPKWpZNg1bSBThuX3GMnxR93J4K",
  "key28": "N7X4jpBGqExwiY2QupvTsp4iBNgF8GwP9iBYNMwWezNPgFYG3cPnJFhVheH72PuaD3NJ6nCetceTE5Z24T6FWia",
  "key29": "5kKzWP76rBd8C62LEgg7jJaXgatCdrpwV7dME53ttb6b5yCJY9XFCUkCEnEmF4xognBUj7J9huCJe8EsRZqvMwt1",
  "key30": "23fqemUA4Gz4QdL5Hv3tz9WrDykeiZ3kKXa3sJoFyNDmqgLJZkgTmJ8LDtURJ8qU9T6gqqhfJf2BjyDoX4F9ieqZ",
  "key31": "4tYqmVTBmARBSEj8hNMAAKFjX9xBA1svY3skEcMFq9g1DcNLE47gtoZNnEcoUTUVvK1zPDzPGYjWUXaF1ZUpQqDB",
  "key32": "3vcUNPuzyqiY7Mxk3giBZzP1fD9JsNbvV4SohCcJhXWuk6iWQuY9RsU46j7dYX3yqbztJVC4bq5Fpe8DyrhA5zqx",
  "key33": "8ngan34eT3JchtjBkWx94jeBZwqtqXQjCU7ZrYvAeWvcLFLywGXjuBScfuH62F8K3bxNXXH63WDvW8GaoRDBdzU",
  "key34": "38oWxSm7WMBPECwqP1Zx1a5V59uYUqymNEQzu3hx8SPreGuk7zK1zuknLqYh6zNeZ9RPgqUAdufyGQXjU6qJW1xL",
  "key35": "EBGFT2qAwvtDnNvLJsUfHo3srjBUdttxBiEVhwJ16m6zYQJgxaA2u5WZwSGBYD33dowE54nUtRgRFXd8PsBJmLB",
  "key36": "jNpw5gNx7h9kzaZUeQUvUkchVQ7Mjp1d11QC6rYc5UJWjg2STrdh3jdYHg6FnsXZps9gqf91nE75vRe8gM2hJaF",
  "key37": "5pZsHrRyMctbcQHavvsitAW1v6rip6ufH5ow8azTRfaYcwVyHb4h4i5rbYeirRQGW5KMGP3tNQQ2DZU6V9Hk7V7q",
  "key38": "2BeQYMzTjPJ33UsuRjJ9Z1GxtfqJtzZvmNLbZ9ZdaxuhqNTv3pQj9cwxWyuu2sm7Fas1e5D8eQ1qSBiojwk5Sd7t",
  "key39": "34so4KSCDQQtW9tmosU3sT86HMfSKLcaKYuXpj9JzSmXn44a9ioiHSLNBmrXPMc1vZJTFqdmKHGCzR6ZerFPyNmW",
  "key40": "4k9k14us8CorMGEo8i8aberotLyYijwBCboa98SVbWaNXPo6AF41bkkxxW6MwCbnij58vU82CaiJjFknACS2wVSJ"
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
