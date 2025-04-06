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
    "3efk2D7JNUdSVXzNUpH1VARpxjkMNZ4J3ojVUuy3g3sJG6akrinrG7gzKUZinAjR2PBARmvWa7ukMUdjmU9J1VAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9cZAAnVquxUpvo4pWuE6JuN24pyY58nqKC94iBho5me7emrdH2r2iy2V45v33MrzbusyY64Zym46zvgRcAy7D2",
  "key1": "2sdZ7WMtkyJ8v9n5Hj4QL7nPmx6SdK46Riu7cFgzxWDMLqL9efrxwToRsHKMXo42hJ8PNHyKEp5KcFZNviRwMVdM",
  "key2": "57Qme9YTPJW76PF16ko6jJTdP7aMVmUny4EqTBYr3mpxCKH6EDmKeXMTGuJgLfgKVg1wzTLw9HLrH1knKH4qPbGF",
  "key3": "59EzzwifVweWCibEqbw1KsRJaTuepSJJLQAbakUh9WMEBgLUeEL2EVL5iScAkki2gwtjxLVZopHeUWpnqhF5zQbX",
  "key4": "jN8e1RNAvHack9mjaWtvgLhDJQNjW7PxtM2gY8wAziAtsXB9oVudHhLL9rsLhJeGsHd57FxMoyQKHPRYr1HiE7p",
  "key5": "4puA98uiWcQ71YLywfRsrqAfjkA3EZrsoYWkiyacpxU45tYzMMShTMNz1T8pL3n8Eanihug84dFHCkKvXLsyawsq",
  "key6": "5GFPTJSSCzhCovXdiKoanQ6HGcGf9x9J6cHBcD7vBaxyf8sLg9HKFEAxJmxzLnc8CgE9aBGdcyZnGiTTBXsZTFik",
  "key7": "28fAJ2s8HXMRZ5nsZ13e4MRB29qa8rw77ytHiM7Z7EukrinfjCW81kvibfsGQLAW1gsq6mJpwsErLnc544gurozb",
  "key8": "3Y6FLvA2bMJZCokoqdtCTfGE3MJbvjM4ahnLeXos6v1xAxysgUUcMqxbgmeownzomWXqVMofonHsbzKQcC6G6xWR",
  "key9": "4eJczxsFHaabD4RvCBe8tZCjxdhtnfeBj7ngLvZmoEQcKeEQNCFaLwD51VxPFhaM1DmiRCVpmHwhz8TrpHCTCYay",
  "key10": "eYgtpdkubpa9NGSTxeBgjFkWiaeHgDBVCmP6iRZWCfTfhhrRXZuNZkktPL4HCJ1ioUvqhD9oMBgymTQiTjBV8m8",
  "key11": "5pMDeYRUeMix51qoFff6tqHWAY62yxkmB9sgbkn98y14FSEmSgzMonjhWBAQChC66mHmAMAL5mMpjniStXhPrYFy",
  "key12": "2Y8cH71cDqS5jLmHr6ZW5WcsrGgcRpFxsz2wDj1nY7zyzGK3Ktjx2oNt8XFEpvuqTdBK6FiLdh2BZH67mV865rP8",
  "key13": "5ToCMx68b5wkYpCb7ZkDtkcBtHVMfnqntyLEgihSYsrJcdXHGyPJaojDwuaCegfE8BDrg8h5T3o5bVmLf611tpSL",
  "key14": "4gEDqMBmUAjXwRVjhYBBft81vifc5SFWMbxrEtVPStsi2dQmyMakxMB3P8bp2CwL6qZ4iT6oQ8kiYxFT5LoSiSDv",
  "key15": "jU4YEsHVvyGkbA99tv8Sc42z4RtQed7BvM9gqW9dYLwabut6VR6yAp9kumjpRWMvHPDDQXyFDDxPSMB1tAyFWoc",
  "key16": "4gnZBtiuCZeF8Auh95gEiEdehMUfDAEaUvhqEi5qm1g5e7yjgvwuqPMSEaAzqxrHtSALhtjqV462FvDjHqmjVR8W",
  "key17": "2epXicJ36c8XmGThz3njzmKZmbnUMGq8aAF56D1B13ofNfgXCMcMfabnRZv7zQ5eNE8TPhBuR59RPWyv27JjEyCg",
  "key18": "4hW1x2fXW6JZHp9cnZAkUqPYotpENQtmBRELWfohKya5BTXH8jKDA65PLiZSdoLre4xRtq564Vy3rnM5Wo1crsxj",
  "key19": "2XdXdFiPmTLM4p7qGWTRbu2avtvgJ69o58yHBAjexHSaSFRS5LYobNPcmutw8XuguGcdb8G5t7VovWRSVTBPwiug",
  "key20": "3WMMBVThDKRegzDzBBMrvGrQiRZGUqdi7wvVPPAuU9HWaXw3j5VRXSN24tFrjry2mTE7DCMhmtPcL7rhnMsExHdy",
  "key21": "48cdf1KDq4pMKS1MjAtpMxaXuGLerAUoDNkZPHvLZtDoxVLAsvjb4Sg6VDFq1WBT7AxhdUYuXYSiRAAxjuAHqN2m",
  "key22": "5K6iw4FgxfcCFQTVYa5bmqrv6vWsxD3RCuddsT3fqpyrV7Uy4a2R93f2PRGLw4H3K2dRfrJB8eM1iwLje9EKMwXh",
  "key23": "3WwgmRvYFviGQ7RCqeCXLXGpAd8ey2ywoogzDRiXvNHP3d2n9yRCn2CAUnRQPGAEPhdQtoPwi3TnHa1xmyxmgSi8",
  "key24": "2zEWGUpGH5eLQ5kB7NoLxtFjZzdP53N7D3ktuu5rMpDbzUd7tJZBtbGyS4cAsZeyVhQ1T7BtdNZEB7Ha6pUmKxQ3",
  "key25": "3XXSsHD4UNzWaJ66uQQymczjCZR99Dpv2nQbmpeSovJYCjw3j1nCcC4uDr3NoQ4Xxc3qg2BZBj17EHWoxD5ZTRMD",
  "key26": "avsHQUvCj9mDDh5PVfFhX6XztGJKoq8PXVMipkrK9ftVUg4XYy8mzqs8uHqWQpTiDnmq57svKcNfntCL8rtKniL",
  "key27": "45erSvHokmNHocH2epfZ6k7rVfGRRLEq6RPvZaNAcsM7kFE9A2uYXKUVjzNkeFFpiawp2w4XiQvZ4JA5FypsM6JZ",
  "key28": "4dmqwzRVKEgUB2amwuB1YMX5PLa5phuHwU77eqr7KWYg4mNq9XGpNpka6AFXABR6Aq26cH63EDgHPNmAnnUVeegi",
  "key29": "2xgwDBJm4d8gkbAMFnax4BBDLqEw8snP2MyRabnrNFjJSdkLJgZJfUpgy9Ls7wMx83y2LkbEsGeKoZQE715ecBRo",
  "key30": "5eayWfJ3j7nZVV3RDci1KqawC8vxRpSDMdyvh9Vppp9d3qS7d4H5gFrBbCCz2tsQ5EnpksLjXzAPWH314LyKzPmt",
  "key31": "3yaQnVyHi7Rhsmvh8vnX241pSVZZkeqzydvNAhCPJHf3DKfPtgFNe1YsAvwc4xEgEBGwb6fF3co7b83nd77B6nFc",
  "key32": "3vrDdB8PNjTfJBhvXznUwJUJoW54x3bYLPYv6thdTCbR7JzFGtF7D35Vd1daaseGCMA4oeQFufF1gh4tGWZAtgfQ",
  "key33": "5nFkkCzKdLC4d5Sggesiqro5NjJjAsqDci8pYRjQixzUYH6Ls1kSjKcDqsYMmgCB8rmm8y15jJYdnAWyAmAy2MQj",
  "key34": "rue3cesuayMSGp45QF28zFe8jc71SHc9F1yEgAPJjbZfZD4B7Qh8vgNDSjM4vJkEqCnSgc78c24e9uZjZ3xGub2",
  "key35": "5LSTp3TCN2RfPobBEror1YaTT39xAacP1gjJTHJnCncJqrZRWAs5sGp6KJQEWXAdJLes67eQuY4QCKgyNubgocMR",
  "key36": "uMKj6e4vpDmLX6rRtCai6HQRsjNG6S9DGU87fNp1DEvmQQEtqzu19BVNiaJWbPFagV9taFdkfeE2j4Ca9KPkxXB",
  "key37": "jJsJ8YC1VSt9aGSP7eGEgcDz7wrjHEoqZG4pejSi4Ua5qUxLh9FknyjqZ2vmxYfVAczG8cLwQnonGpTR2iikMWj",
  "key38": "4U2KZhvKdRZyGCcNmPKHR2uRHpoKqsmqrmSs51xAHFAGMNmPSwo8nN4eSnD5kFdE5bi864bxB1sLxMEzXcPM4wDR",
  "key39": "31rFjFVxw8iWB45gY1QvK7Fvnz2bPAf63GjLmLN21azynV3GyZipwVzGotJ9NSUWWQH1FdtL7MZ5souYDkRoRcMi",
  "key40": "5m9SejdnpkBNYxY8xs4m8L9a2VB849jhE51RLrNFmkssqP6hJtaGoAjqi4cwh4MEvyYqy4EqBt4qka8vQGF3N2fj",
  "key41": "2TST4wgu5MaejksqhztkN4fQtedstVNjnPMsYHDzK5XRZVGmrcnfFQ9aoB9Sxc2VsCgSrzHku29F24DZn9t8bcHY",
  "key42": "3ZJf4vTudj6mZi3Umt6CPSGPP8MCgxLF7YjJ9RmH5K6LYLoUsGnMoBmLGYCB7A44NGg55hgq3coafYXbd6WoB9mc",
  "key43": "wkAjq3DKgXcz3VtD56dm9HniUwt41XLZYF97LjTKA2cTgmAdEp1AmYS6cgByFTRhTyWhwQJNudhJkUKUCd8rHFL",
  "key44": "31UU7MtcWuZp8aDNiSyeLxLJTWv6kpVw3nURyZUgxcykZncbsAYBAMtYtySHwsNiY9WWRCXP5arBKQNj3FZkFEmC",
  "key45": "29SgHF32m1TXHtg3YZnkqsVPokLwJPMShBeCDp1LjojFzY7YgySUviBL695ETn4yAurrzkPbqckp6RQ5TJdUjv9v",
  "key46": "3bvqfYjnmU8bAKjSw3e6QF33iw4skHCR7iRtvuxyTwuCyg32pH1pgc78BTxp2iVmTL1vFppJZCZV6nSXW2C3VyhN"
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
