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
    "yFScc4BUJx8tDBta6YGcyDy9NZoQewnrXThxtAb3n6N2Q2NiabG9s9WuV2QbcjERgM1sNM2ZKR64gq6b5xp8wzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTubiNi9DWFDX8fDiTD4fAWY7PC9h5FsAVsoaXfEpjYNHEiJnWcQr5SP1g3nBpeRDLJarq3s8hn9fLttAn3K4os",
  "key1": "3gpoQLHebKUCZxJbwywyZFo5GVgX1JyDRxWHYsTRFZhaFobm4VEfHQoZyLTCT2jbzjbmmM6353p1yKtkbbwjSmn8",
  "key2": "5D6LQsv1cfxELE2eu4LhQe77mEsX7tfW5i9av1pQBdVtE2ddmo9jH5ih12jUoqFxZafAX5xWxYsLhAE6NozTPuLU",
  "key3": "2J9vfv3d3Ebv1kWwbrptbGxXGdbA546ra8PSFvCUar6jwbkWakBYQyphhqsUaZ9CFqty2v2t1Rodq1M4Udx3YRkp",
  "key4": "cs3MGD5sHec26w1m9t7XhMBcTDjA73PGuWDFtQdUvxbrLUE81f9cjxbmZa3YjhECJd8MWQBD4KN3jrq7ea7ZrmQ",
  "key5": "2krwnW7shK5dsEgBdG3RgqbefyLZRukPnDvKEv9y1YG38vrgWERwFcYkzAYpK6a3FH3tkgo4g8G1DmPJFQ9SxYCW",
  "key6": "1d8URhoKSWGaYvn4G3wJJqhRFhLur3WWkKfoNhSBCEXxtj7FG8msVy7fYY4vibxCZpAjyeeSHDg3xzZkRdxpz6w",
  "key7": "596EUKZhcYWmeXDYr15XEhC8r1BsPPZuZhRfCsNa9KfJYoVJXsC2B4tKKRFi9MnTpUhEUyhywNUF3DPAwd8d2F7V",
  "key8": "3YW1CdJH2ELVmk97ofF98MrH79kGHQWB4rmskSqH5XLh8fZSjP9DCGDvETNiGEVs2uVqHCh2kiP7kMJt5KrkwPsk",
  "key9": "4KYpJYFYTfUNKDTBaqj3ib3HWCSVe4kz3WoF3hAuKjRsCL63aszMjQjFesGyAUwQcaVfkCtKq2F1XTSFnX6HHPnM",
  "key10": "41db813QRquYEQUz62hHJCrZsdqFSpukUsmi2L6CEub5ka1iNw2JKDwPvCAX6mY5DZiax7fEhV5uuvi9AA5TMjoB",
  "key11": "5vsdLJy1z16E47ErhVFaqL5mw2yANncD9XDXRKYggwdS8CCFQUYgcm4qdH7Cy1P9X41QYJVLsgsQa5ynhTJ2frxC",
  "key12": "5286W8U3ZDF5RyJ4n3LnDn9PcvpY2dMQw7tvX9yNXUEVuaEH9DwcgiJsWPPdmwRaRAofuZ26iRq59UxGttPSMq4k",
  "key13": "2AYbCriuMh6gnnj9ZZmGDeDwTigU9ZpkjnQa3JCLAqf8ZQarJk1BrjipWhPivkr5bgPGztPveFyuQq3xxKQN5iQF",
  "key14": "67UKByzeS7PYWHpgH2PMdCRH6pLoGHJ2iE6i63xSDGqLSs9aU3LHi1HnetDwsnUqoQkkemJQtyft5NuVuAcCkrAe",
  "key15": "2kW2RQ3Y9fMSzhDRcpzBmFTKRnFREym4Rb4BJYJM4zZYcLNook6BXob9UtqSy9LrHESXtoPqmH8Xsjbsza6SZ6uT",
  "key16": "r1RRpDrgwaxQKZ48SqL6K81VgafYRuzz8Rro7eFzgHocCqUi7BhMuFisGE4SwkV2FHxNBovg64eMdECbjhtSPoX",
  "key17": "3cgi6FJiMiPYrEg4HWFG57trsm2EHDfXyey4ZspANz9EwAQWq3iQPyadck8YtnZrjWthX1N383E2ZurbjXfYz9e4",
  "key18": "VF2Ni4o133yZ3ML8GFq8xZNCqVKGpqUg54onEGdyVJbzaioQCsr9ko1vAX4Ah7mJ3B1qtLGoqDhWF2mKRaCct3X",
  "key19": "5EXoH7UHHwR1qtU3HHpU8Lg5ZJFnv3PTCfmbjhtG5EPA4Q2JyehumozHuhVVRRBVSGpxYav4NGRs54A8RffWMhq7",
  "key20": "4rCNsg4fkk1DL9mqjwBU7wGCwP7Rr8K7A7Pr5dMDdgD33M6ssBpWvrF7oTcEFaZXtRF2K9uhk1jB496V5qoBMG9z",
  "key21": "52topkNr8omL4XKuZhGp7Yf2hmy1d2vyAZEq5sCzePnKN9TnDY8r6A2QKRJaw1auRw89jwRvs97ifgzGR1yvyc76",
  "key22": "WEQnepboFEvTvAG8V1h5hyQeFwqRcTiqwxayb2gruxi7VXAkizjBQfrQnZ2VDSpxKqdEysN8fa4z3fR2GMZydo1",
  "key23": "hTRZqXR9ww664A116MgifhhNqfPMpg7e9LqrRtLTfVSVdhsmqRQ94U6DKPsenRLUnmtJvDBtCzT2FyGoK25ff6S",
  "key24": "35La977JntL6kYbaFqNLbvBa13UYNHVn62bhE7Bw2C5hWzk6jkrxVLDucJFuiaJrrQSzaS6PTNzxGEsbSCBQFHMe",
  "key25": "3breirhfj3U9tNHMUYERkyhtKq6JTctEnpdJ22hmdTi8EAsnRKNNfq8uuWPiD25GoJD3tpm4UYcF7WsUEJqbiZoX",
  "key26": "gnD7yXnsmEuUdf3gQUKcPnpKvwzVxpeeF29xZj3qmSG6MWQMLrsEZ4RLfsmiDRXZ4wCch3DC9jEdp7cEbtrdPgY",
  "key27": "66jvGB5qWSpAEZwKacMuZyzSUnDCbEgK84MekdkpxnSp2Cic9f13qRWTT7bcZyWwuqX6FrdmMJxdrYY94iaZ4kgN",
  "key28": "51MHxZVEatwRXGB1ftKHviHYbv6BhwiB8vS4TcGMxsLLFrSLJykWAqNqRdTR1AiZbh9vWwxwhLbvkW9GFQrkWwBm",
  "key29": "2MDcMfwFBDJzF4nDcWZecnVPp4BLsXSfuZeneLCPbtxSFMb47ekw1GPYGdpaYLw5rXASm2cf3EeNzsM6VTZfpYmh",
  "key30": "4i569JAkzYwoXLXWG1zySoR8zRsmcVzLURQiLe2Sx7ToLiPY2Rvrc7Eywim3kW2m5WRqrdAptuvrvHHA1YCQ9xee",
  "key31": "5krTDP2rLsvPD4kfYQxhdhhKWbrbRRLAN3rAcjCKwuuBS9Cp2ReGBE1PxhQMFVkGtTYtXGfptnh6MKZm3xC1gmjZ",
  "key32": "3dZNyh9BaH8Et5rQdoQjm1rxfGsUnTNzmPBxc6WiAzz9qcGyPFZyvWsiegad5y8KtzatiXkKeAsM5iHNTNSFMVJA",
  "key33": "4A1okKZ63JVhcuc3K71zhBMqYSbBckCGT1auJcuMTDX1bdvGsuRkpXukvtC7oZhGC6p75mSvy9p3KPcQqZdffNND",
  "key34": "H3gVAgRayrn4VuuhMBGfdPWU7Q5xpyzBwWs4btaiZzsou4WdyMao9ZJxNgG5LZEpWNyAhDcRyT3GwQnQJz93VyF",
  "key35": "5pqUMrzVVwoTuw9bKvVND41Cvy3yo9K8DC2ktvPSRUPzJExEUQofFqAhL7ALTzvy7Wxr5ypyZEYwuNYSx2PRFKE5",
  "key36": "4a5NPMZinSnzZUUpmbS9NFwkNTbfwgGhpRi8rYiYCSa7JLhu3rxFoL9HzA41uBj3idjbVEvUYYK7grim4S942YRt",
  "key37": "3uiHs3cKpuLaWy5bjnykjLghZpK3oKymtbWvTnqWPQFfwH6PczLYbKJKunwJYBZH7jgGb5zfBVfHpaqMyW4REyzR",
  "key38": "3KGAVfuyBFG8TCfzhYLJuFA2dZFcq31oeQWueVHHMnZ1Uxq6DBmYfQJzPJcDsFUJqdkY7Smozwq6ZPhMmPvtEeuC",
  "key39": "4wuw4z64ZjpuBYvRdcy2pLkmft2qv1Frzf9Pkp9MbD3wBYHZovqLkwDH2yFqL4qMh2AfmR4MhFkKHicBUASW9jXm",
  "key40": "3zPa2k3uoFyYkqWfh6zMh13gWrV13gV72DZdYowLKKJm79EB8iaavKStDVKJGvSRiZtJNpYRSA5V2yax9HfEJJKh",
  "key41": "2g3MDDLc8JvVH6Krou6Ry7irhvkp589PX9kCkBi1EWBGJ4E7iwErZYKjDLvCxASk97mhSXcRHUJ7tufnA8mnPozJ",
  "key42": "4Fgvp5c9wemD7Cv68cVjBtHhYztQStxUJmcGPzGvZg8xmk9rroeCraeKHWJXRqTFh4q4icQvnz8YMdjECH8aY28b",
  "key43": "4AG9Aby1PPMqF6V6ny18yTL9sZpjHi7csQmazw7C5X95BTgMJdBho1KHCKGAmHSZmUEf29RjSvBSiXkbsrrjJg1J",
  "key44": "5W7nSe3278yHDqGC4CvEV7hmatFw7a7tVgCPnwhHJcZN18wq9WGa2LyWVao2fYzAYrvtQ5Zr3igqThYNfo9DZoEX",
  "key45": "3YqVuBWfH6FZZJDQPasDU8kVnmz6ogDUzHjzagZpwmfRFKRhndjd7Ti99gaMpXkeS5Ed5KvYe2f5eTYNzQPyCvu4",
  "key46": "2gskcjmnDk2GMcwbpj3SJVpKCviZFe9hNLLKYuowGaT9ssDo7yg1iMAhgrhLZspvGQCC356wKsWKuAtdhAwq9vK"
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
