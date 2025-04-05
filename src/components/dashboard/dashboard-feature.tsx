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
    "3k2iZwzKKPY6bpgdFVhQZ8go92SuvML7eiso3Xm5ty7Wrujnk6XmNE28mrdZ3PiSnMZo1CsVM1EtSyo96yqtUiCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMaCMSvu7h77c6n7SiBwtp6pZ5zWETQXWhq86FhBqtqV4AzRzv4ZnkHsuuctADbD8phqgcCBNQreTYYAYtPxy9M",
  "key1": "nLxxGTGTi1JFxKixmJhti4c56HZxdHWncdcJtE6BNra6cyHTiz9nstdVKEd8R3qWrsTp7NncWcBeq74Lx3hgYSi",
  "key2": "4ah46WSK5vo2q4U47xqBTfjgkUSfmyC9ejgX14aBWyYVXHZdMmtyz8GHLr1gAr1G2zZrGwY4C7B6N5ja96yQCYA3",
  "key3": "3EEfFSpbAtTtwreXNZX3RKzXmM2rjcoPfbWaeJ7ZaFLhrcHerkgWsLhrDH1rF1vZa3Gw4UECeYDje7nMzd92c8cy",
  "key4": "4v4c5HdTe19c9vmEBz7FtCVyFy7dXdKnGSFnsXnmzNWjkW8Kdmwg7NtXrf9VmefQPGGrxLbBe56abcifmD3gGhud",
  "key5": "EBn8sjzJp2SvofLvdoCjGJUU38qPpcMDGRXCKxeNL2UWF4Tky45Xza3R3q5qorrZt6Sym4koNxmPRPKF5a1Rk9m",
  "key6": "3Vm1AVLsBKZAoDQZkDfapTM2ZcyUuUJ8HqKa6EmBQeSHPDdkkSufMMTk7s5toACii2eYTT7NruSJaYEU8pAGeunf",
  "key7": "4ScCB5cpkRcyDhynBGXhbrH7QtTkCnFoXSDqtaggdS47kndVQCwzTVFDv6WbyhAsp4gv28zAukQfFLS8i8eW14co",
  "key8": "3euKv1rJq7hRUwgoR49WjxcWurFZ3AcbKHBv24ygnEo9HFxfM2ap33y9kecmrwBjQfkrRtjkQp9jLFB1qVhK9GkZ",
  "key9": "5A5Z21E6Y1iSBzx7MWaAvu2FHVHRNXTExZW1Lpeu42UTgFFyKaUswYFnogM94PaousHaG495Vtxqttc2ieg6fKuG",
  "key10": "226FkTARFaynmhsb7oavB489JKRsBhUV1hW99dPH8h3vbmUN2r9htXxU8t4M9K1Fn9MZYfpz3gyhSCKTFPuW6KU1",
  "key11": "SbjU5iWZh3gaxqpyBS9LsU7yhuC4CYcs754nAC2ov8GfLpue4kyFgu5aG5xYzLFuQ9uv2xuRCNxSUHNGhvAb4Cq",
  "key12": "He54zGuK7yW83bRKavJmvyUY1yJieV11zYhcUgM494eb427urrKap38nKj5KPwZHFBm3TFAF7MaqyS8F5hZXTbh",
  "key13": "3vvnLK6YwrMQom24ML7Q6yce4w1vJowESsTkNEzzg8bpQaMDCJZDJzpat1AdrAvpnDfZR1JDGcfHFnALLFtbTvwm",
  "key14": "34fJzZRu2yLsXwk4EMnfAJDHEJnn8zhbkTUUVtjPVzvBU9VQ7CbLmTb9wkXspjCk8maVb5T5RR18Rd8AmCsznqYK",
  "key15": "sXJLgvRcXzV9buUj8DFW9DExGJPZw7yHNWToZRSxFgMm9oBSQmdbLLMMHjnArezaV45YYzUaLk5FocFWx9ioTnU",
  "key16": "5qNkEHjrBfcux848yJ1e4iCeD3BhiAui3xcXhZFXasykiKpAiJAJjmtLrjvyuCpkfMdvaXpde3ybYjSAibDTwHzR",
  "key17": "3zf7PkDsBT1iJpRZWbYDJTypRE32SGhd6Eg7juF1mvqmHV1fgYQ5dezpKVX7ngnj1F8AC6KedkHiQmoKwDpjhgT7",
  "key18": "3UtRmSRg4qJ5VmqfAkLcgnhtfyvs4vJ6ta6vHMRkVU4CDrW4aqgKdgfQwh4QR5aUoPzN7wPLsscnZTMvyFohdoMf",
  "key19": "2Vurc1Thj4JRSM9mtwmSgsMTqhH2KRKjVh1HCF9ijNzxn4c5XViwK2EPWLY5riioCTTp4VViXanrGovGjPEcwvER",
  "key20": "khnR51KzgsK1wiwPFYtQeh6jtK8QfK8t1d25TgREHdaykbJ68v3rctVTYo4w4Puamsw1n8bFwDjKWNHVYt7AvCd",
  "key21": "2UHMuoVn5iaLMp1gD6sweneJsTesfga6bLy75KqrpoX5bmCZ7RLhww3FTbSwxSEPwKAtJY3iM8s6TommK5Wx82Jb",
  "key22": "4CMYsoHxgCNngh2jqGkc1vUVCJmQrXzkApsYNvQ4ybdhC5VSGgvC1tRCXmPq5RCnQWw7vU9Ex7rDPa4uAFaDJc77",
  "key23": "5z4sy49xyeoB2Qv3LR5KHPpq3hHLKoieQkmZVM1Pss3UA6aHj1pTufUDrR8FTJtTKdXtk4XVgyHX268rwb39GczN",
  "key24": "5eJzACR1ZuhNBuPZLLCiGAhP8mkPZqqrtevpm7wf6Kp1R9dXqqZ3kzzggZb37sKtCdbLiXDNkrKhuUe9kuWYRyC",
  "key25": "246Cg38JW8wuD6XJrhSvzbKjmpc2eEF4grwNx3hVgCzK8ZtL2w6xG6YWXdW8fXUPrzMMbBh5QU6Nrs2yvePixSx2",
  "key26": "5NTZS7wzMqbNi5JLnXoeKZyPQ8omZvAKiDRSVqQaeSojd9ow1mdbo9GnfHKotCk2c2VGFpqHRBnd8R6WPojtZy8Z",
  "key27": "DP61sfMjs8eeCn6BJmfmN7DGT11TgMbWBDWovJpg797VgMTou1jju3wVWCm7kfpVQ21LhiTeF9AE2d6f7ujGy9y",
  "key28": "3DW3cNEPvZweNrSLVMvRyQQBNmwsjbFeXVu1g2fkaRkhqQnYFdk4R1kmEKQzWQkZdP7dXhwVwqY2v2uLS8hpPFYz",
  "key29": "5fLe8GZS1shuuBHZ6yEfEM5r9Hy8X8gRp1w5SwzYDxDKBiky1vbBymG7KYqfk4vxeVSaJ7WNe7WzJvMMBYAF1Lvv",
  "key30": "5PgmJeHeavpn1Sm1BwDLtxM7LoAScfaw7fvkCZ4eaTPtv3x6MK6RATh5FhqPeRPAsw9AYSacgPKMBveWvTY2M6Gq",
  "key31": "41pmQSHtzK92VT4Vk1zkdR9ec5sWPcS5WiQfvy9TVZ7dU6x2rxQk3SbLFtbTmbzSZYqHvaRhro8n98uDMTkQiuQu",
  "key32": "XVB1iyoFCAu5X64i4C4ymzNjhKfC8FLq4Ad7nDNYKVUAKodx46Vrhymr3ZUGjCn6Lg16hZBkrTfNcE6cH8xebAR",
  "key33": "3F7grvSwgfFWJUf4c4njoaEqS9PuRckXbd97oFRufdxpPcBU52kcD8cP3yiDo4zi2WtN3jpjirdU974tH4xZmo2n",
  "key34": "4EnB61RaqsF1rvTS7pC2CwW8W4DZxoCSUtppzWevPqxLKzUAX4KYCw2BgFELJosYHzhg5NfnzSfUrDDZgPauEbWu"
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
