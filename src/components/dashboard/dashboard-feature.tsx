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
    "DW6XATrvngAfasw9ervQCabZazKSMtTHTyymF2GrK4sPnTyfq12LmRMAJ2RNgnUmex6CGiiNynaJYq9WCrCdzAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tX7V3Co1PKdqAL2J6dcs9CnvHHfHYkPqnsxUfqeXsLgqbc89h29NNMLPq1vVBLQtXevxngp8hqdHhitbLY9e9SS",
  "key1": "5ioSnhYcszTtR1pxs192w1zcRVd2KY5XS2CKwFxnqnA577LNJDHDHMJdAsELKA41kuYrfAAQqESPv3grsFnzewQ7",
  "key2": "2MJP77jiyUv7grqbjqn8iLoKv8HFYbzcvzD7aJ39MxT7Jm98JL2mktixHKuqjELs8LU5pC9vs7fAJnGbPzv26Bt4",
  "key3": "5qd7w61A8o3pmQdkfNuokP87mqMaiQBep1bT2xu45SFcDQRbVJjNLHtvTEGCRHoEYERt786ctr6wF67abx63Mew9",
  "key4": "5hMj82mQ12ckyaUixRHeM2zYEAo8v8bUsk4Q5BLEEWCsEhZjXKiqakdfoEECgWWZVKsa1iytGpmAwbPFw5MZKwpQ",
  "key5": "2pEuFPdzHskFW8xvy8wa2kYHzuXmJhaHvXLgi1jeNJaBZ4PvhYykH8xntHrAbUf76z1kVLAoe45PZLh2Qt58Gzwz",
  "key6": "5C1vZuKxCecgVeCbMDrTfhBCsYgYnFgRnpuAMT24hEMn1MFrSwtvm5deKEPq8vQe7HWFoCeL7wUrS72aHmB3Miub",
  "key7": "2PoG6quuTPEsU6dABke5r2pT18rtVuSCiCMbhopEDtoMv7Y74FWD7vjedmesCruJnmjBRCbAWj6JZD2EFYvheNuw",
  "key8": "4DD2neyPwJbTqucBk3D61Bbt4KiXd5Qzu5RQXu8NEhzWhpznyX5eJxK7z3vav4ZfgdPg6koEUD6dq42BBTqdj5Jg",
  "key9": "63Hm5unGdmncfiTPQUQe8svei6AV5sEeDWVEbifRu3e7SfswGmXKeiEbqJ4jEKHtjewoUyyB89di581gs8EjhRzY",
  "key10": "2tr9SXhBnfqNkYVVyCapMA4CL143CkoS9CpyYiMywsvAJmah1VtGzKeX9ki4E4aYqT4KneZL8RPdyzbjt1wRZNvb",
  "key11": "4fb83sNK7AeBo4Vd6aqfodkJhS4BqkCjHPqQDoKMSnfSNFNjtp9hRshaPfHDrYwMfBv3EdqULSzrCMZ9sWSyd8Fn",
  "key12": "2NgkC9oeCqW2KkK2Hhi5gNstJgPZHWSzqpv4yn4fq1hNYxvH85newcL2yiMkwxekn8kZEXn584EEc7DEBkfQgDyk",
  "key13": "4yo73v7znhZ4buxt7cByZ2GiPwMnUQh6hvJeEa5JhB7qosbeEtuUv6NtReojDSU5g6hVRU1128uEuhu4AeNGgjPG",
  "key14": "56T3aPz3kByZTRq4kkhqNBvtmv2ZgkJi4VP5sX7j8CAL64E1nfcqE91cURnrLjRGMpZzVN46jLgtzJb9k6pL1Vf5",
  "key15": "3SfBG5PWMMS9jcLeJQ35wbTTRs62CyBJkzweZ5ictS2BK3inxtRb7nKVUDHrTwCLkkYaa1JouhUNHeCZ9Yfai3iC",
  "key16": "5jGC1aJCyjba2mq4mbCryLpznf9oJ1sGPtDkKipjNNnQWecetVeHrcAuYR2bAr8rqFjmaCxuCEpg2qiagb3Fa2hL",
  "key17": "5X89fobcdhj5eT8caxRttB6pfcM4p49avqp1zShmQ2XAgcwy3gvv5o7FqNRKBHYvnTnZPTg3VAd1VhzKmUivmvDY",
  "key18": "MLYPyikEQncRgx3ozqExAHteHvoTBzk959G9iRRAdTcLPuJo8VWUPP5hy79s7koZrcys91TsLGNiZugLNbeg9nB",
  "key19": "5XWh6ASzZr389fefaENQkX7ZaVZtbJtMBSyhuB5seh1WvauzZxwRz7Yzy7UXGpRd3n5ppF8y7C5qW7uR4icLGPJQ",
  "key20": "2RamX2wb18h8dQw5E2ZDV5Q2VB114mMyY9JNaXXy5RybaDPJTZ7SaWk3aEWRSUzWVBgaMKt6Q2yTpbA6T1CAaQHZ",
  "key21": "5yZU5R9kYsKkwWqgo9rF5aw2cCjoLTcwNHZ69RKYk3V3jjtwg8wFzaH5bpbTWis12yNYZHYxQrh794R55Y5CUCVp",
  "key22": "qnyuxLqi4eeiDjC9TfjnBXbfJr3sbudFWjZaoFWGqYSjqfyPUuA1czSnJUaJLsQJDyNfU4ELLdyUxxAF7Saefj3",
  "key23": "4gW2adv6nzPL2tZFNVbNHfgC53VXEMNngiqFbu73szTZcT87sPnAiA2eKpdsqkj4gR39ZbcJvSfmYggX3uy94usr",
  "key24": "4Pp4P5RV2cQrdndrZU41KQnJadNcL9T25LYiQVKsr3aqtyv6P6M2SH6MmMKec1avymikHwu5xMEtipusAt2xDYPM",
  "key25": "4NZvXZGkm1M7ny94vW3huE8DsfnNGzWyfRj4NQtb3b6X44Gk7s9TudUp1oEW4Bc5zUzBFda1otQkrYfB8HRs2fLV",
  "key26": "25RqmpNpG3czuazwybcahuBxCJoBkpRcGrKo1BNQ5tsGoyW6Aioppka7otFteTUMnqgF5hDQudMksNxoNqS36d6B",
  "key27": "65oBhs3CJ7yNT3gmiz5pMHSjY7GWouk1PQNox48HyR2xV3zX6a6GeX3DD1e7HbFhthmxmNBQVFug4Q5i7woorSaV",
  "key28": "4eQqrxsSxdW2jchfcyHngp5NyRoYcrMGgoQkxCzPYvnbFdo1Vx8gX3xQmSaxiQnSy8dxBJWxGTy9jgWD4QjndzrD",
  "key29": "ZUQt27fxNRCuo9keXhjiZ4mK3Z29qHBZPtWvjrCMhrskhxKRBG8oVDT3LbbXQ4etwfD7vSczQp2umLgfxTw67Cn",
  "key30": "zvZrxVMKS9qSM6XG65S9Sjnwr3bYVT1ssw2t1dkFKEYVVDEQMvp58RFAH8B4ztT7tSerMcSSzikGZYdz4okbedo",
  "key31": "2XaAwW1nBYBPNwXgedFXYjrCsDeZoZuMyCpDGG2A83i7jRhnqCCMw4qB2QsbPjGeyq7xWkeMzQ19V2VyRCqHVma4",
  "key32": "2hLFbmz4EuVYXXAsWGX6mKJ7KeS3Ti2z1zpLLH7WAZ1XHpyEZi9aSMn5X3frEQHf5sHUaRfeUWpco57cFBpzhfuX",
  "key33": "3p9mP3HkzrucCBW6SPaYRNo4H7BrSVLoUkKBef8nqCL27NbdLq5CJnhXxf7S915TybJzHdxt1qBASqjJmwKTzdN",
  "key34": "3qtZDR1baRybnnCXu5ZT2inzn9XvvK5z8KPd8t2it6Kmiy96jKstERJ8uby5Ka1jKnNLULpXbeWAUThxNVcVNZXs"
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
