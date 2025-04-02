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
    "5fUj6bD6Ra9kHNA5Q4MJh7PcWgjJ2ohsFAmW8PGtxBzYxfK4pWb9T6GjMXLUWF76GF24qoiT6g3TASzjLP1Jj2zZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8rTuKh5P7hsTcQTASDcitB3ZYJVBG1buA6MXJTmyAf33hf3AWSmomWPvdNj7iNETNSxxR5fTmdvcZFLiq77Eiw",
  "key1": "5sqjaarzfPWkV5BgXbzD6kg2f98SKncL13Mp3H3CQXXuQRQPg3p14sGuP6aADboEQP86sw9CkvLCMGXVndmE8Uhh",
  "key2": "BfQ5DRonsqpZv4cRGCVT7CYEhjTPR4c5CAaNtfGq9EUq6rpN3BCuyEeWCYgDAmwHCTdoLbRDEU77cB8FCAPH4Km",
  "key3": "4eaR6uXXUAoWx89Wru58jpLvFNWCxJeaz7AWcCz4c1auq3xCj6yNWivMVy6dRHPsYHrE4DWRFuRP1M9KFmQCEF1t",
  "key4": "vtUuSrqZ4j2qpfV4jFpGLzSUr4SuNZXp9WfTaVp9iVb56nphDT8HDXTR5N9L5Dvtxp78UdvR9rYnnqnVjXPcFJd",
  "key5": "31375eChP9UKjS9eT9jk4wqepeYmkNPm213gddmAgNgD4VPzQHx8uybkogJ71R8hPeAfR7jAfo1uG8DgKgXH7xVS",
  "key6": "SYFxNyGdqwKyGarva3Vk95mQ1bVgsMQZeASRDjXAY5miqqZVbMG1apDmaUhKYtskEGV2QQqmd488P4BnDHr4noZ",
  "key7": "3w99rYuQoxhgQqs4xexb1UVeMCDN6PutJEz2WJLFqQqfQpC2Eg7rAtxhBZnXBBzSoTBkk5hQarTmvf2kT1L8hxTW",
  "key8": "2DEJRVwW5HMp69K25AbrRhjh5pCKj4brMxduujXzcUzBQxjqLwjC38MkVQiejybVjmsWP1Fe2EuHsLfWm7WXQa3W",
  "key9": "7b73aj5gb7hAD4Mvz2gsR3iUbXADwiRBDc2P3dayRV7vJHFPr2zYwuYirbudTq34Kz1e73Q7YEY4RUM27Xyg4NG",
  "key10": "5M43s9e1YszVw1e275LG7duCZka9cNcKe14GVWkbLCUWubjHWPjgXZSNM4isT38u2ezXkqfxC6m8RfazpaV9XYZk",
  "key11": "rWbMaJcevT7UjCEUNgcrQZdW9Vmfz9DrpWArFC3eoE5HHvj3Tv1onDuZSLuB8zdAkgb7ZDTjoBaXS5niSRbaq6r",
  "key12": "32ZEigHYTS3zhLRxPaLm2NjcNe28S8w7XtHFXBrQqZ7qqF8daLo8fMX84Ehg1N9SocqT8Bpi7fTEFmPvXy2EirA1",
  "key13": "59MVqSPTGe8e3Z6rm2CCkwsvH6dqdoAPXzha8xkBQnH8nrRaBuNjdhK6r4BVBbaR7APLdA82dcrFZKK9gBbMEmB9",
  "key14": "4ZJD2CsfCsbYC5xkX1iDi75T57XPipaxzLRAhBqwCBkNtCN5cxLRMprkS9QnCupmV367MDtqiUKoHFZ4sqbWQRhC",
  "key15": "2mq16XB1xEC9sf76S36R7riddiUB1jbPiKyqi8ADvciRdevr76RoVj1j1pzBTrDFTky33tHG5MEA4Zd5mTNteX1K",
  "key16": "3wnbw8p58LGXEg7YxFZA7h2htWeHJ1hpSDRFNVot62DvfbTCvc1CybgMR1r6FtRgow8spiyVKxPYpJbfMiJeQk7R",
  "key17": "5bkK6pCLZjXQYb7RqNE2VUkMCDQXnp9STvbuYjXsc3NPRKTT49y3wKrFrhcoe4nyzphk4gSCHZmCemWfY6tBtDYr",
  "key18": "3APrvsd5edAWDAYuGQ4BgVn8Yg1yDWH4kaidgwPLpeghHEk9tcEzewYHhVAX259gWoxNnaotfXmiAS12p1mSGoyM",
  "key19": "5d64FvgzrzxB7p2266WV1ArwhKr5a9rXJu8kiKfn226eZi8STgzvaVnAjTXfDXeXZPgm9wnUuVvgjia4Xa33E8qb",
  "key20": "2VGcobS8wxEw5LbPvA7yDMZADD6nAJA7eogBWBiXDW1BxqU3cuTYTqXZ27oUFgmpL5WoxCRE3tJMxNJzoccz9Zvv",
  "key21": "5WvoMEVLdPmRQcn1HcJinQmQmBzcXSw1SimxwAMH8tJECmh4qm4EmkzCDcg6oSzEuQ7Rw7MRuoKYC6ic44ajkFtE",
  "key22": "45Nz5stz4RcShBvazeAg2fE19zF41nGb3MLkqtHXPj234vUyw8q8p2bpr3Pw3PGM2peSZzUUEPu3qQkZ3dqbKUGy",
  "key23": "3HDJVnZGfT4QGB2hiR4JbYDGhiYspgAxw99nhkCRZmDDCz4jA8bTi3XbK2si5DHgBH3bJhQAfqkQTiYQz1Ed1kBc",
  "key24": "4qkf8vEXJbMP1Sq1X8vyEBncqqL41DrSbeca5R2hT6fTVwwsxJzn5RA3psUT3wYxy7QFrMfJ8oHASM1188FGWZcK",
  "key25": "66SU622Q7iDRFKw3uVc4iPA9G4xiZbuq5Zv8waPxWvNQpME8MtWAazjrUUvkLYFhrvgURRUNpAd7iqm2b3sLqmbj",
  "key26": "wBXU18CA7L2w2U3tA2GjKXNaLcZVt5HgNDNnXb5oBc8EbRtZaecSV4qdu2mt39YxQs7BpjVsPwjS4W7YTVbs7hn",
  "key27": "pVreMRd18BcwJ1ACHzpGf7KJ1mL4KG4o84DSQp4jjs1yDyxRyGreBSPwNJurm4XRxcM1BuxVSztRY3mtXskN6w6",
  "key28": "v5x3Ayv2K5q4m6V3SEJXuJdXrb7LBZLtRULUPXV6tREqBQf3ayixa6URj8mRaGeDfAWGu1NFPuPKqruUZwfAvtg",
  "key29": "3Y3ocZkNbGDYHz9p68uWtmBQSvfbW17xr9jyFM1zS6gZ3ctPtwVJTD6geahDx7rGw5GzcEMpUMDaJdn5pD88pq5K",
  "key30": "4cWqDEYskzTBqMKEMgdpvjfWiUVkA12bGiTEkZ7acnRhEzKBzuVrn2MaZi5ADeiRuEgtZqKWesfaXJGXqsUi8iiN",
  "key31": "5pfpnr8p61X89ZJGrcSmgH5mUyhURwJR4KogQ3kx6UWXTG9TSVXQc4xC516uWsrRrQUW6nnXCYAdjJfRWFTD4tay",
  "key32": "3avc7EMo1uNBvDZGT4tEQQiPfTu7NMe8NDrc1CR1hWkWs8CYvtAfbsAg2uRvKx4zh3zhRrPb3PTMEZcMgCKVmTdn",
  "key33": "oDiyUsyVzanX5YskDqsH12WuSqd3bkL9i414rZWfLrt1cu17KvyEBHXHodCdAg56VH3PGfiYchSSR5eR263KcY7",
  "key34": "3fFfwqvuxUFFDDw7cpG6bq6yH2mBLZZEJNmCMzawBct7QiqXZMdJhPA2MDySnE8G3StXBj5pm2eB8wXc8Jpn4Vdp",
  "key35": "4SBNoZv1Z2BEEZCH4NEqxGnQU88A6UaFZnEN2h8m9V45jUfgkgznKKU94AAC6dhHf3o5rDCR8hLWFzDzxfrWvAzj",
  "key36": "UnhnZdptS6ckMHUJQ6RfPZZZjikc1j2iyohaiawXJEMsgjydUjXCXVs2hskoYu5EMGjDR3xk4FTmymmr3vc4Ssv",
  "key37": "rPwBn6dSPdvH2eXiapi4dBUpmTo7eC4pK8aCWDhYzYVxdsJ2cMQJCTWvNQQJLMBvVihP6SSoy1HNFexafNcGF1T",
  "key38": "4V3YbFRdhRP1uGGjedutSviT8XBC64CmHDWrbhPTxQGSHKyZshVJSNi1fxkSrdQaDWP4nr3ttSnY6z5pvzoMKyqW",
  "key39": "2ySK7oRYUgMQ3kXwVo5FX8HBvcTL2tMzSrQjTw6okE8ZYt2hmp7vcXgTysb4q31YxStwTAR8F6LwxDxtm8XAER9x",
  "key40": "22Re6FbFHoPFJie6bMCa952CYst76yCY2wmyPyQe3cPBYjKypgbFv4Tg4Gf7e43kQWsXqJYR7YcBz2vgKVKuAejZ",
  "key41": "4RJmkuxsEdfA1xWCJ88vbLSZVsfrcJYy8eNctCgwG8EHkwzEd8mQzuJeKMCyGgJYaKDZ5U5bcDvgc8s5X3Jdvsqf",
  "key42": "2iMZkLGjTaDu8dsFTFVdrhjU4dDyQ8DiAtrrxC8Mmm2qHYhH6dUpbmEfWP7zSMNFQefBF7pnNFD2c1YhbuywwNBK",
  "key43": "4cLxx9LwDhfb8ZRqrecmomHyixuQL2KNXxBzWKC276PfSmqQxswVQtDUYXHwRf6MLUsfULHJkqtJiEmLSMD2Vagc",
  "key44": "8q6Hgi4vJEUV8QJQAtKScYTUAUpeza1RR9y9AoXQ2eLz9joKY4hbSVUvuVjfmPBHwB8BG2hU2YobRsLE2kP3eVq",
  "key45": "3Sh8h5k9GEMY6bjG72iKhSoU91e4ggYCYWuaZb3dvcUMm6W1kTivAuAZytSrgsk6m96ZNAG3mBvU5j8tXrQnJQU6",
  "key46": "3A6WLkWVbRyHB3YvMSy5JLD4fMhLVDRsbq8KkGfiUPoirh36ktGjAacfvKrJRK1XH1xvfvbm8EG2LZZiWss16Dx3"
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
