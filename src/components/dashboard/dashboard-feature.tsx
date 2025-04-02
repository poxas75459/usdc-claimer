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
    "3ZvDoua2FhxppdVXSNMrMyM1KUzW29SxYxj3J2hM3t34e8YjCHyLyYqKPXv97f5RPtU6LYkbUfrqcMfNZbEhBvGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRZR8HaeqXtoVKVephLEtkE9s1Tw4EuKubEFzvKW9DhhRMKPmyVkBFMb2JduvE8uwUMeFwVzptx3VzhUZLo3Ghe",
  "key1": "ffVM1eU36CRopMuL1sRwG53QJZ3g7YRnSnXX1S4nxpe5A5SjvoPW5AG6yRfPtzaH11w922v7AZBVR7KcpXp82Bs",
  "key2": "XCqDrsWu2bbs5ZvxwwGUTnm46hHrsre67iRxkWbwbeYyzDDUebUjRGotEyze2JJPmFp1fyuAU1qDvpNHqXm3mND",
  "key3": "4UzRci4wPWSSBrVRQxSbS5wCxssULZyH5kpm9Vjs3XAJfdRjuL1wcjgqrAuzfXvcCkQjaeoZCvf2BHepAHRZ8fpG",
  "key4": "5oKURBHyxt3JnMSP2HgYzRo9UBStKooLfaUvCertb48fEu8s4tCfy9YQQ93C4MjKojqRgjS6B2HozBLodVRCnNFR",
  "key5": "5A56CYQFqVtmEvEMGeDWAiW4HovAwcqmrP9VRyd1Jy9oBN5CvipUcB6czTbEHY2yYgTawakLFfXmeE18PDNWg3bZ",
  "key6": "1N3kby4zR6JaKEKFGcEstEsxcv2XehwSrMohZCdMwc8FYsRHwjzBUfMmEjDtg3u8kkT6oVxB4MF8gocctziFDNV",
  "key7": "4hFzYUweVAyuu1J6puKBbuSU494Kb667aPL6eDmf8epmoVcZnZJbytDA5nML6WjiuFRTr6YeVxbs3rhjryp8srnx",
  "key8": "3stmH7FnRraGLo1UiV1fDWoQxncEBKr935iP2yrqeujEDXugmwUyvvZJDESXwA2dWW3s2FTBgZr9kbYaFS8ei7f6",
  "key9": "3Ezx6LjvCoMGkF5pssHsJuHjjAwKuSBD3XAypaJHsD3FbkkWAyqTArKRHoefzFqTxxiJXUmJ8SwWVi5udsXEz3Uv",
  "key10": "29J71i9KQRWS6KXNGpC1CQwwQXVG2zqoUaDhpCrejzBcWTNZJDgWkp45yitFNiLQqSsWX6dYDZh9x6f5oQWUVhb7",
  "key11": "58N7qVt8VmK1saf2KWWSDtbeDGCpovNX1VxAxSFJ3u8fJadMRBmhCZh4BYMsfcboj5DLgFFXnzSYdvS4MVKXc7nz",
  "key12": "4THJnQETZb6TGcSufV6HDUgwaniXQ4Nvak2q7WMExBpYBLEzKzKAGDuTozxWH1mvoLg97hEZxd2LHLyB9GkACsCY",
  "key13": "5rkyrA6UVJytSRQxQ12P7rm5AqJKytm9o2yBip8axTsRRwjvMPAFw3F6zeh7reWsbeWCH4YrAXEKGQvGWvnVFabT",
  "key14": "48iq2QVzM54FWFsrM5TbXDP5Zna6HspgFLUHVF1iYr9jxzxPidLn89dQQBWQFNrwoDEqzjdTMNVYi3ZZypxtUc2C",
  "key15": "QDg5JcYnZvMomXEJa4k4kgVF2CiYCbEyBMnpzc7hG1JRuQWApwszvCyfAH6eYPFddDRPtU65kDahFxDdjukxbpy",
  "key16": "3UU34KFVbXoyZJyoQK7HnHjxQL6dwwqegCHHXRTHWZ4M1odUTVKhW7oq6KXXwA2s98apqzArXEuoCNdsq3xMe5wj",
  "key17": "5aX4zAAsefHY3dHkdV6VG2jNZiueuA9y2vehXvSgg4Z8rkbeXEk6y8ap8idhrJUVAFEfrbWL6cPBbr7q9F9qQiik",
  "key18": "5bZmpBgQqBgUFNdc4Rq41CqYrtEuuGw8p7bp7UGsx3fdvJGwmN3aqtKdtuAh1jQn2SKoDT2soQg3N9JnjEXsPibD",
  "key19": "4s9VJD7D6Cw6y9n1Pdnr3uaiJJwK8gkT54ycDTpieqkhYU4YKrH2eeTyfuvFgx3cWsp2SwR9yXf7KC3G3w11casK",
  "key20": "532fyMbbjUWWCwBvgiNzpb5K5moNJmKCK9YfKRuUGvNVuhw6a71mm1tJ894SCyFzfgD4cKNs53PreFDAFcpdAnr6",
  "key21": "65D86Ri8MyLeAykzbji6c4jzyd758cXnCochbwo8WKUtyJGGChMi9YyvMAmaqQLqRuCFgoxRjdRPXrE4fzbR1HJc",
  "key22": "3XuqQ4HKQ1Kjxe1Z9tULPBZcf81AgJKuBPgg1NovJEJTjR3m1gyVA2aoLFjsdgwYutekgC7BSJ6bMk2PZQWhkkuu",
  "key23": "ndf5q5poZk2HbJKn9s7Ue41bz9xpDj1JGxVyLhYUVp7fMVxSiKFdGouiNAScVCz5Riir3HDBFen9tioprCtjoxS",
  "key24": "PohL9TJjh547X5QYVnEd9uFykZbAuozQ11KmvhFT9Tyu7bw4AaTZCVcuZdTgrHx3xbn99vRsEJ6ngEMSMnRT1vj",
  "key25": "nZmkVQ8AztRzps6gvwyi3A7DBxrCtKtxHwmYrnuMng2pa1iD9XV7Tf9GgrqZDXLqAQpzEB3WcTS4wq9KBvxwyfh",
  "key26": "2WgfSLHzPyXyVLxTa6FdbA4tYhoBfpkhQmnVoAX2AhmyTLy7PepqoqRA8snJshxMTQGRx4LPigBx17xwYgggAxc1",
  "key27": "3vUuTpFtW4fiKNytiSY5veHeCGGBQZ8wwu6vaX9VLUrB5vkwqiJzjnSKeTFJrmg2mwojbYe1qPBNcyhPVH8MyBHb",
  "key28": "3cusN3MYsk4HFvbiswtZvJcK2hGpEB9iSLNSiv4DmHDtg8Rr5rsXvCdYE1zrZaXYXbWEzUYvPg7Q9LLMyDJ6SVx7",
  "key29": "26XLQng8NQgCYdjQVzvU8UVw1sbtb3EE537iETqGEyuxQ2YCAUn5RS3qt9PsTdHesQweWth7QKZ5bNkDPaLaB4fU",
  "key30": "4Xx57WuPp3qFWTEX2CdGvdH6N9L2rT8f88yGbetK9bMrgGemrhUKJg8wvZQSmJMnJoDzpx7k7oX3ckQ67meHMVjN",
  "key31": "cejcbpjx2uPr24vfj4XS68Ri7cLLXyoMaru37JKsU5d7W8YrAxYWVmRvj35gZH4kqcbViMWewG4ZLaSfEsX9G5H",
  "key32": "DMjVgyHXADyZ7U3J5KeEjNp3eBfoR9JiPfHe4mHGpHxEwMnfpEiH8TUMD4yZgHoWN8J6d67sApFh3zJeVB3fsBy",
  "key33": "5HuyLbAStXREntU3JR3t13vWxUQZbHfERqBp4w8LJpKZakunn2pRMst5gPfaS5wfQBRXESeqa19z4m4f6gza8JgG",
  "key34": "2rN9nqiBNoF7zaSh9ebSLaZR8r7ZYr4vMsW8rD3fUAwceKPafb8BmqfVy8umSMiTpDhYVN3zn5BgRGdgfWgYtPfW",
  "key35": "5GXaCXkE4qyRXokzqEz51eWLrJ34P5NVhB9vySAFYLthAg6NfcW16JHnwJKdoiUqs8RtvF3fPvKmRcgEADhdp4uH"
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
