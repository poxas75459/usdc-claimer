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
    "4JzSHQFhhHP5LJzC4eZEyYjGUMsYhm6KLgZJ3bMxJNL8FsRxrcZNykZzH8ibxVWw725xvFtF5STtgN3NcNVVZhAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1BywtnJ3LBoKZd4fcGabwoaaf2VEsPF2CRxwfn7ocnjWkkKqXxmqnTn6Ftnwiw5kuysvX1Uv1eFryRKfr8gnv5",
  "key1": "4PgMkXbxUuJKSq1jYyLoXhESpP4Qk836TW6Rn5Nuu9MX3sTbQnqaEUaspxirdYgY7dQ987QKJLg24ersAq6gHJdv",
  "key2": "4qFkhwTjMjAhbD3LKWYh9w5nbXpM2vh29Bd71iD22BAirSN59pGc4X1s38YAHK8dTjwDu937yb52BSS7zN1ex6Za",
  "key3": "3wJ5hJ4e9b8z1aGUbDvHrmG7sK4BkqFJhksk4YrrtsQzPNGmPdYrtppsGLeUbUT9uyoameywXuHMKsi3VRNj5soL",
  "key4": "3iXdovvesMFUron3hA7mXyfg1XvzNeFWvQrVFoBB28WsRPQXFjy6VnBQzXp8dgUSBB8vntmKmLLbmSMLRtXFYdoY",
  "key5": "3YSLQSWKXBQRz4yHzmKCefKKm7V5kuKFkqrZZbAw1dVgQ7enFbLUpwRwKLZwd1UV1ruh9s1v7A3CjstWxDXqa5DW",
  "key6": "44MeoGh6hH1CaSK6w8VvujvySnP9hjE28AtW6BLVkB2fxeA3CGmmefN4GVXwo3YX3KdjTo8dDGchY4AJw1kCptHm",
  "key7": "3jKbjPmR9K39U2PVfv8QZPfQWDmZRQRzJGj7RGkGjDBnH9mPBgeDy2MSs3NGqgMriC68PLCnGn1UWtARtdT88pqs",
  "key8": "4UsZAGWb4e8ytnQDSasMy7AJkNE7MpVizRob8UnQ6U3ooA1ziKCFzFGLpvAno1dJd9sEJDH36Kbei3iRmkGWQv8p",
  "key9": "5KJgxBw6ethnVk8xVzVLmv5q7s4GctuaG6ToeDD7iQQuKEjt4sg5dNiEThW3JBtavVKswJBRRMNuFhHELYcgUn6r",
  "key10": "3hXYbjg5P6RHFXD3koUXhDh1Ms1p1hrzxpGhvTCzaj4hm4MQe23XYTgdwePACyfQrGGjf1saTg3ACKkPuSk93DEn",
  "key11": "3PZHjs1z2Ne4pc6x7dznuEFzyTscpJ5BC9fUj3tCWVLFXPohmmrwBTppcgNhFRdwXyLDwvB9PQnL7kifcKikwSuu",
  "key12": "2FcRPMXphg6wjFYzhdoQXxbAkrvnRJkQ4vXvMAVcBfhzFzwp1oRLPTYe8a7XQHpPM6mUJrvd7C625ScZ3iiCUNk9",
  "key13": "4v3VV6zgoC34aBmMpW5o1nZHhw1mxwSz9pxmeVvowJCaFHTHF3ANW26XdPfQNatQGzBjQBwJULdPbghcsGymRSDK",
  "key14": "4f1jtj2vGgcmdjFxaCsotrCi3QvSkboqs6wb6p25w8mdcT17zBdYDvF71LhL2bxRgMBXKD5xEFSuipgPeip91vcz",
  "key15": "66Uo9qfcS3UbohwkDk3KCHURVj62i73Wvr2HZJnpwUC9bn4vYRts6mw35Wfb4JYESNY3F218NQWGWPUJf3J39SmP",
  "key16": "hBffZvu6VdpTK9iShxLfudjxPHSrCSkKji3EREDExRaiRXQH7bmgLsM9SmuriaJEU5UhqV3hSF8kXvA7Y5XHMcm",
  "key17": "3jfH3ZyUjDkNDMJtTdB7E1MyZcj2dawK2sPuSMnbyMb2BgqXsRg3HrK7qwS9Bdvd9vcDXbiFN9kmGajcGBK8QLX5",
  "key18": "5q5Kn1TyZgM4SQkDaK3vKWxaYyVHEjhEpYR8c9ug6zyEUxZggzmK68HzK7Zym91XbQTboQgDKJW21NRHfXBzxmzF",
  "key19": "61xTNZ5raTt5QEfnfbqSY2fqEbABHUzQEeKB536fjjVCFA9LHgXA9ivtaahJvjFG5UwQGLAZrWg3xWs4D6Pm9AVf",
  "key20": "46TPEB3vL5x46MBaf2yqLNV38j1cbmSjS5xt7mdAPJRT8TYjbzFMsFqCKMuR48RAucaarfTHW9GL9hhQph7ymXXa",
  "key21": "53boqoTKGveNE3r6AqgG414STN8Vh8rbsy9ZrEVNGEEbxtjmxqTeVLWGo4uuaDjDCa3KLCRbYXXgjJXpenAXPDQo",
  "key22": "2qveSVZpHGaYHTA2BButiUfW97YdXdwpUwnfRj4fiQTwbctAMAKZY771YfBx66V9jxCm552hQ3cfq73fNTSq8ATE",
  "key23": "2RXGy9AWZZ4A29cw1xrikiAVU81d3i4Cu5hYF4KKvAnxxoZtCx6aDvJ57aSkR8iH7Ngd85RAYhXghRB32WUgeJww",
  "key24": "5zxVmZtEfujgamY5fHokgtmnTfs4CUKP3aCyr1Gdu6wnazUwiwbirN5bAk2Q5Ptyn9LiuV2e5xtUDZUrehb323Ww",
  "key25": "58GckXf2bcHL15CqRbHFLgH7PWZdXQkDc1Kct4ih2AKY33tRCNPnjjS6S1j1GBmuo59Zs4ZHYrBCmxu32TT73Rok",
  "key26": "3dSwfpCR65JfxUQgj1LfLtAfLc1sQyB83mW2rB7P17navVBHhmMKFhJCq3vZ9GoqmsyMQNcZLFN16GShXF9oZppi",
  "key27": "43R9kPc564dkWq52ZTLD9BXSedQaCKskfWM2BKRUot6gk3fPaV7Uf4p2aqK6uzPPBUgNC4SaKZSFLk3y7upnYJDX",
  "key28": "2DWzLWGCuqd2SCTx8ZPBrXF6ZrkRhKAgPCo9hPDgMmPr53cHMp8mo2Gew4GWJk5cGkFDLBeKNZrbZjdCxaRubHeX",
  "key29": "37nobedXomDSphntyvXo9sBSWpWBrESzzRumj6UjbAPX12qZC3LELXYqbEqK49fEnxpyzZ9nPtSQnPyZdpkWdKnq",
  "key30": "47SWs2uHXeVCJMCtwAveHUFy7KL1vrzWdz62Ngy75rKvina8sccVvHpthD9xrc4gdtPEE9Mn6uXgAJoDMqKL5oAQ",
  "key31": "46w2ZxjnBN5grT26KKQw85wKEjj7VJRyi5KEkpWUtyMVbTSxfN2GuoZ8SNpiSs9SyqyAUKkYELwEcVschLzYuJnP",
  "key32": "4ctp1HQKsokZKsVEwgFepEbU1J8U1PekfTAAM8WHJonEckSGgNGw1zntNbhBDomEgfXKZG7uvCqMKeC6bd4J3qUK",
  "key33": "2UzJzHvTfHgh5BWR3HoCKYPLjNwKffhK5MXWpRM58dbp2XcfwiHNNN2BW8JSkoUwJQNwXwTKbxXxCc24Cqtv2jjH",
  "key34": "5R2jZUDtYxdPsL2D6qw4CXyxFvo8m6FWE8sxfmEiB3kv6MVztbYk8KoHTDmRNEWQcE5EDd4gjPyz2eNCGUsQa4SY",
  "key35": "XM6opNBqYUpm51DQVT2snNZ2khWJNik3VqeeySz3Q3Yi8EznBSdtvoZ6ffA3nL3bVpE5AJEJxDj4v3mwLrvrdZg",
  "key36": "4EL5yrPLY2yeMvYn6Yw8ine89AEJGvxcyiwGBkucuzXLUTnT8T9vpYDk7nDVmwSdtMSEDQNtwNBKqqEhwMyWSJcx",
  "key37": "XSD7eDnqdaFmYSehA3X15CBj1MyLywXfYLcQFs1PadQKkJG6jZD1Z5378CnVXAzVfzB14aT1UH8eT3gLqhcBefE",
  "key38": "3ukVbLdo9Z2hBBjPcUACK5qtuK8aeLqY9sowDgsdYgoAgXhYbdnyJJFRvK2DwvGLnmufMN6PrCfeH88G4SkkqmNW",
  "key39": "2hR29z5s7YP94idYZ88r998KRUr4NpnP3Bkmq9g8Q4gJbRYmeoL8dhc6sMNAGbPoKenBJMsco4YS1JzDfLDHmFzb",
  "key40": "vFfXTvYr8RjeBA35xeHiYWp4kYQkBN6g9WM64pUvcauz7kNiVsbG7aFqfBGUEqVFdT96RRp9uCfFD7HF6x7NLq9",
  "key41": "674mpwjnfkJmd7XKiEfqB9EPXaVEL4SzN8a1bijvcEGkhFtBahfYbEToUwQq78ThJauAHk38xoGzbqT1kutEmMjy",
  "key42": "3jPZrsPiY1ds9zhAC4Sq4PnbwHEFHqC8zWPcmm8bjznPmwLqUVazDN3mQx6HQWGEGs17UoZfiFai5JnhWGmckNAs",
  "key43": "5F2qWZi313EoyH8ore73pKyGYb1QYThGQMwXA7bFbpNGnikqHLvTzbq3vjCa9wdpyPdn8zzTCwrTuAydCVWECprW",
  "key44": "PTrERhJXLwdQRfydM1HCcEms6tooM3fbn8g7qvYe4xy6q4gKCh8fMvqwNXAEC2hFG5XeYcJYNN3niXhb2qiurE9",
  "key45": "4xkwCHLpUu6RrDAEB2eLMeBeyNxhrgqEUyL8Wk99U67wQoo6zV3FwPGF92m4b8Yg97Z4FFo33Ex9huFPuC6SzJHA",
  "key46": "2NzdsMqLuesijjKniWwdPEnXwhQXC5hcDeZ8541s7Jt4LdF8JFB4832zrW57WjCMauA5JkAnUFNpRsb5GQwXtHDZ"
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
