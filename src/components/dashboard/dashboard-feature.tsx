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
    "5bQPgsJMRsggByftiS4GrM3bF2stURdZjfoBhnPphmMo65C6W8u8Q8yCpcHnTFN4Uk2ZfjdHqsJeEoSuTChWRvHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKaAQuTRKkSDo5zgizZR54w2mZSTEsuzV3rwgjVjB3L7vMRT8KykFsVayqSFQYZMMaYYUzNwgsPZHGMsjb9hUci",
  "key1": "5vVnrSvM6JnB3HU4WrpTNNwm4f4rmGusBEZXDCZhqSyS7yVKaLj1RewVbiWsPzFFjBnBx5dsHva5NJtkTMpqaNJh",
  "key2": "29XCHtqwCP25o1obRfYPXrKR3jXh7cEFCPwyWUkxoxjD7TBUNDcQQhavnG1VH4Q5FmHttYo386vdK33BLtYZPhem",
  "key3": "5v5Z5Nu6bcnMdetmRqGRKRus9pqJUD6dPJVoincft8dAGzGAbVKC3FLfMm3tSt1RMXfbcoed2Nps31qy6mu34kUD",
  "key4": "2p9X8k6UQ5rj9odLaKVm3yPyDndzEVApuQVjB8R4gs7dcNdW1pC4iL4y7zgSryL4RcTheyyb7xFMTCFnKpwQMuSq",
  "key5": "61ai8TufBJktFHMz4ZdFwGjiuGasfTj2sipQzKieAcSiVgPhCks8pmZJmMJ1P7vBhSHGHV5kR8sbVwyeENAZFP2",
  "key6": "3ViTWJAAFHf6J1Gee1vQcAe1XoL1QHAMxBvRvvFddpa6mT6YT34qFTyJqbRzqBmSMHhAeSQskC4HFZmDiaQSK2pj",
  "key7": "4qJqJDgU9VQ6Revgi7o4JQMC5jQMVvmhfrJ7Ua49dAwAY4naaicy7nr6YGyQDveeYVyPodrmwiMQREZ36AsQj8jm",
  "key8": "2JtYyff1w8mtyUKpqmGGPhBK7Z1Koo6qsUvzoN25xBDrEeK8bTRv85ypNCmrBrZhjtWRbAY1jeCnUGJ3ZcNmdXdJ",
  "key9": "3AUaQWaG1uVc6akLuqhLEX3NrBmHsYqabJ988h9NF74PaaaZaXC4LFM2CTfbDV7Jmqb1kuh4Nny4HD1z1kSK7qVu",
  "key10": "56LKkK6frau27QeyLW7W6YK1hS8JpVsGKCLUyxmGPvh21wpsG7Tbt8yLyKU7SfSRg6QVWp42Ejp6UUGLcMDCTysv",
  "key11": "4JxXUVa9fcLytdUwaizq8vDhyRYxqkw5abm4BBA6dX4joQEfE7WaQ7YszUM2yqq6AocXccmEH5A9rh9ednr7yW57",
  "key12": "54PyYwctBQYN8xkxDMg8KU5YUG87Yfbt3QAjTPRUhhC3vnCjNvz1Hdq8fn21VpD7XJSK8sWzSoiFdcE2NaeijaPb",
  "key13": "3sSUtmg5kuhh28JCHPguzK1a9efFV97pBXFNuA6id1MrDKVqZBmXB8amBE1YSkjcXudBM6pUZZtqJs7e44iEDQtV",
  "key14": "2mArwQmYUTK3Eyt37SBbFkXjx4bdmNDsVQQPEaK8sZbkgBJbmqNYx3uiGSaFqeM4x2VnJS8rEWkVcudPchQLza1g",
  "key15": "3MKqsVpM3oG2WGiBEDEFHwUt8Y72N3UoFRKJtw2MQuD1mVe3HXtiHZrcwPzTWAybUadixRUAZ9A6nx2aTWUfYz3z",
  "key16": "2U7iWAmzgmn39EHpB8uKYYkPYB7wYnfLPSfrbomqDFyJPGaorbqXHUgGZbwt1JkaueVZe4A2uLyXf1SMvWuieTdu",
  "key17": "4xt8LJzLboy22xmx7ZvyqhkBxuWkQMfie3QGUEBWicR6UH5N251uj3DvySqq2h1AGeUchR22qYScnYF5zXyy66kW",
  "key18": "4t1qoPzdqTEJHsTiFk4nMsoPwi3v2xZrgmgBDoXidf3MDPQJf6ty76pnPhQyKntxQUnqU7sgY5tM91UzeVnUooYy",
  "key19": "3Y3uPHpte21sQ7sCSVcHwQmDZtaaokCf5c2PtHK9Le1bz5U87Fcc3qhDnDbEbECgocMvBvMUvveKHssK1Kg8WoE1",
  "key20": "4jjQB3t8rrAcNFz1azvEQsynu1yNFJ7BktrSoWzHiz3FiPYwUPLoPm5HXCMtAddgXHSbkisnW5b69YnMRYZ58svT",
  "key21": "drbP7ppi7DXih7MPbM2atxGMTsAFxGp7tUWdZEbDRbtGyLKKP82qZ96QTzsE5Qy226HxNLwmTMhGNi6UQ86Jpg1",
  "key22": "34PmNUjxzE6hRPXCfJKCNq9nbQn6bqW5LwiDZ3Z9znveGttCQwGAVP7TcU1UfdSYz4PAUJX5TUyy2tFWFswztAHy",
  "key23": "7W3mUCao63ZS7SwN7WwJTYcCw9tYzg6updUGAFWJDPANKB3ouvyZedp7Jo9S1XTU21VrezHSo9DqAQPY133BgP3",
  "key24": "25XjMq951Cad8NVn9YonevKcAsRaPye3opygFBnX5CwJfZuT7JCbWQfnSNMMRrAiaM7sNkxhVBTw9UA2R3SMgYPy",
  "key25": "5SoJYtd72gYYnDLNRd11ATYKnfSYwcxY7NqG9xpem2LFrkwyVod4ZoNxwnd7AuvsdKNzVHa8dVSjazE8mHLxJAYz",
  "key26": "4nzWVQgvdQCoHR79hkyQQkxcdFTbPpgYu75PZbEvnNZRxf1DFCVPhxVQTLG59amBrGijjjV5EF72FmmyJcspctiR",
  "key27": "4R3oCM6iwYyM1HgWYjAQuaKZhoHK6vgtSPA9fT8VtsZ98oQCzjzYDcTMrrSmMGfR4s1M4Z3pD98d7TfvcH7JZVDG",
  "key28": "4vEdJMh6ApJT9ZZjNY2u3GTnFYHGaRt6Bvusu3vCV8RVLyNKsWATSUHzq2eA3pcbvLddwvBLqLFHwfXh8iW1d65t",
  "key29": "2s2Ygr4SPNdoZeYnJzbpjqvCRNffQSSyY6GL4rg8kmHQfabUQkRpcNxRCFC8vZDjfGdfPwRpWtPMRosLqagysXR6",
  "key30": "2RM1htvnWnsFdocb16paLqhL5pyp5hZtsmUcZEdRg9PKCefvg8vzuYvKrycBadNkoUcqXX33CGqTXKTzu4dgHkHU",
  "key31": "3KXPLyYZhFPw1Bej14KfESkBX6L2Zkw98ii9qmYsnCeyzBJ2FHNrQVxbLEVwaETn7XJJFRf3hDPsfdFAKaYsaU6N",
  "key32": "2QHzqGToKV6Kx2dhmMrxQrAZfBzA4J55eNLmFiVDMjxUfY3dieiuBeGAKrhusPSxv7jJNcDUFd7gzQHHtB5k4h6G",
  "key33": "2voSzT4j1so82Sn8WxQvk2XkfqLpe4KXf2YcCHSRRgyHApYEjSpMLC3WnjkVuZMFR9avvp7hQkBkNu5qhcTFVQUa",
  "key34": "4q4so4NmYRFa88MEwjRxEaZTFJwrchWySAnusjJ8d5YiVFtDZUuPLasRAewvw4ZEmQN68EUfg1bs1irCHNQHMNB7",
  "key35": "4c9bfFfNfBzJ9kKmNur5XaFvxQSo5yZ2GLQcZ7cegysHFKSejP26nT3CsvKDiprykjg7EpdW8GHGAPCtvmqbiitV",
  "key36": "58msQqaifuVN3A9xZeVoUnxqqDY5WTiPEbEa9T4QuPRZvE7KBUGYBKVcginWFG7wDhYkVPJSu1gVpN7p2G4Cjang",
  "key37": "2zEqg2y8ZM6MH59xkLpMha44nSgeGJNy3vcr4mZtf9VyYtLvKwBuY5inKqMWMqSmdqDtHtdEb5H9bFh6rckW2A4e",
  "key38": "46jjAkThL7feasn6Vr5z9yFNBsp3f6tBQPTdSPcGEigSSSCXkARX1jA7kAmUFVcGUmW4WuSGnocMbeUgjJxrVb41"
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
