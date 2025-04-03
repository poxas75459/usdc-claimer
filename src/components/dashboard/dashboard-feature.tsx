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
    "S7mSxYpik5xB3D12vZ4zDzPg2A5szt8mgXLdqHz7AwvUKc4phB7KAdEB4h94EaL1vpPJyxVAe1NY2DVnaGCZtiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbjCh3YNL4Y6TiyWLzW9mdrX2wSzPTMcrKTXiarg7a4uQtLDReKpqsj89JR9jLjy4t7QhgmbnnqM1T8bpFC9wg8",
  "key1": "2xoa28xUxomwKcuHXJpNSfy47KuuASgHbSQuFbDkfPNqCwNixezPGpqzJJmvPdMkAtrnemGHH2chjWU2qHuTdJxM",
  "key2": "3odxP3X2nyR71mxH9gyVS4ozJPT54bUgW6VJ7PiiRGVxMJomArwQrgN2WjCp5xvZCntQbEZktFPj1gwyJg17ibn3",
  "key3": "5tr8VJs14mEAXkiNjBK1Jk79icxtya1ftU2Gvzv6BhVmr7j1j6Ehmv51yx3nEuA1CusENTkYFeKNv62RP9AVzD1X",
  "key4": "23KteQZUonLmKmLGX7aySmg1YEykQbSC4soUDNFFdX3y2VvsZ8FWMt4GmZ9j5ZNjLtEiGMyG1kRBj3VqB8adfm4D",
  "key5": "5WgpQSbgiMHGkkfTxEgn8sMJWVocoxWnr3GjUkcD9XHB8sbdHisB7aMoxnn2EAg9Y7oMJiVe7f2Ymb6o4o3uHQRF",
  "key6": "csbMQGAYDM8stmKQcq3FgrgDZnBEZDPirDgKMmtVbawVE39WefstGLbb2t1C9WADstCHyoM8HwyQ5PR1u3jEyS3",
  "key7": "4fn5GbUyJAmV8mUAbGRVC2ETbMyCr76asGKKpS9Gdb5rKrGYiRtP2fmsRabYrZ91PrwR8grXDaKAcFNRvt3UQX7i",
  "key8": "2DgUPCQacdMoGEiqVQJLzSXHNjsiDFaeaDCVMv8fgn4yWHdY9xFfTi2FsHrhSDQSqaRwEbCLAJSWmdBhR4HqpATs",
  "key9": "5y8oBw9KxdvERw37kPsRe4YLWBhZ2y2SG3h5E9mgxznzJwRuqiXHMji2RapywxquKYDSNzUUJadd91bNvzvKkktK",
  "key10": "59xuLhkNkq3A2iHdp3QQEQBaqCg3o5d3xFDfWNAe67VcTQmf2hTGir1VXnqzj87UPeqryF3A6UPm51BT82GxE9Dc",
  "key11": "5N8PRbTh76VrnpGbC1CKuyvYx4JhykTWtw8SsS3rmUcxVq8iENSLjr6yWb24HPNFp4QhkP62WHJdxtXkSCRCEM17",
  "key12": "4kmJnA2wLRk4bbyijvuGgwB4LaPnnZQ9ND2QugtmEZ7VtKWB2aZ14B1LokgPWz9BkKwyeb3mr7cv7pGBewZJohBw",
  "key13": "2xp7gqLx8XsmFGU5KmtiWAQr7iWGaQC1tSwYADgcDSauZS7uLy6e8wWGTydu24J2YEuc8Rfi2ynqhwewqx76s3yz",
  "key14": "3239g9GzENzjdUnt8RQCDGj5V4xcGB6tk5Ar51LTmy2sorSJoJBrt3LHZpDzaVuSjh5uNKAAS3nfioukSb9eQ8DU",
  "key15": "47azcv7yPvRP3C1C3VGSbATvD7FNbfcvbrCPcfaZnMWatZjDHK96SM3VZraTh533nNKJLRuKAwcTvJweBH5qKBAF",
  "key16": "5eh69LFGLsSkrm3WHZoNBK7pXcifttPAA56U3f7mxjC33weP5VqEJfHYUSjMg5zTkCJ4rodCBQKQ5PF6mVSFE481",
  "key17": "CbAidSLF6T7MxgjFUjyd8GKfrskDsahqfdsiiLPayHW4yJptSEB1FKASPtBpHpUNbNgypW4VacGV6bkZFuhcexF",
  "key18": "3vJRHCdexoiujxStvePi9PZEfNoK1w942ib21xAHEwxYZa23sfuy41xqGqGYKupGriP5p7JkBZMEMoHszew6G7vY",
  "key19": "4Lrv9BuDKthRhGYzeMGWsq4unjcp5kHP6W6THaTqaeqC4UwZ7C8e883T6ujxs263Y84bd4Zna7gCf5N3rukneNFB",
  "key20": "2m7dCPQfY1c4phde1ye3KmVUPJxoWMbdyTT9JA8TgRu5o7M7e8F54opd7YFjUrcWJQudHGXSzkBGMvqaV7fNc24S",
  "key21": "5MYZkL8QuHM59MgcKWDGvS19rGymxk8mmwvw2x4tLsXFbCM7zPeKRfmgZK7xGKQCtDN6i1du48U9m5EhoB5W8uFK",
  "key22": "5uD812gVQrqsCUFw22KDaYc9WkRiEnLy3G7ptLFUqi6Q1QmELeQPc75CpPySXm4dSJGG6k9rfrhDCXpSGsfV5JEi",
  "key23": "4iFgHk1h967Gghj94c41Z3fWaMZCeSzRkgkAUb26EeUn1XursfpG8oKvTiJTyQiWgqPwJHMTmYya9Q45sKXasK5i",
  "key24": "5n8F37hxwo34nVZqnXtos7cXE5915fcBEX4LyyfxeuGZ1VcgzuwbfpAhnijE2mGy5ndMGp65UrHvmF9U6oritSxE",
  "key25": "32tyZQV3wiRyQdzKfJRiFhnNGo1Y48ACyzA6MoS4iXmXsmiKUJR6ZEJn8WxF6PPcHrFcKvtcQvxaVTdx2rqqR9nH",
  "key26": "4xkJuDcvnPA4FzfMpxTJaBB42TULbMtYK1j25e5PqGbLr76VZYto6gj2SRWEMt4Mq3hprXpSPTxpkfjM9YheBXuC",
  "key27": "2ZV5LgTgsUvG3U12PZfwygpscsvZ4XEBGmP1Bx2YMrvU3gnrVtBPk1DGX6cMvE49NDgUtSdFzmViADkY88zrPfNY",
  "key28": "33B3kUD3iSAV3PuCTTAsUMXWskrFjnCdz8MnwTpKEN3A2ysRBxdqnTeeRYhFEvFjfFcfJb7gyK5uqQ2Ee1ZxwKRA",
  "key29": "4roXmf33TEoCUx1XVCdMTfKSCrpwpcfkeMW4dduuXwGWM2zKJu3RJqk8GC1igzyeCA5W8RtGoX3W2vsAPHkou7pz",
  "key30": "2Ym4QZzGX2ELng5tQydkkMUj36gbxJYKnTp1n1CiKumwAkRmpLrUvFoUfPTLiYncyPpdkWjhJo628zHgAwyzXwy4",
  "key31": "2HDm5hZKwaBpTvDcpvuMTtN1vxKqu4BH432C96Uyd18cjPTtdZGDaKiZNfE4QypQdGQAW85z4XV43HNaTmebqz4X",
  "key32": "4XsUWu9b4jkbwKXB5s3WJ4VifsyWFHd5138eUe3QNBX3b5d8y4iSSK4DTh18112bsWXaf3fFjSRoT8ezhQrdqwqD",
  "key33": "457Zd1wdtghabQ27Wu7iidp2L9rpe8ChoANKKnfyBhR8Lv6J6x9P4jwd51naN1q1UMsmU2vm8odui5Pw1hUm862i",
  "key34": "5oJTAdFXb95QzAXWyAqz5WiHcuZgWxrcC33DF2MEDEGTpLEXQpCxSpKrXGn7P9QcDKT6FBCu9b1cLjTAXTredq77",
  "key35": "5E389y3CeEBjtj2s8WuVYeScQhKjGEX8dE76nsQXxywPocdcioWywc5uQXjxc3Z5DqTDS26GupdRfWbNbj1VvoS",
  "key36": "k56EbZ7Tj9cshM1qoda5Ua8ZFsW8EvGuyyTNqwrZwz33LPtLM9oHbwq9R3gkkfeu7jg4j7t732iN1XGn8DShdU6",
  "key37": "4or9qehtGMrahsXyNWa9zCoKVsEkVUin4Lj2ZzYoYHTNvUEYi5Cj4wMsT3rsbNAcoaYwZQ1LfYq9FVJ6fQZJFjuf",
  "key38": "5zbPZ7eCkSFKWGa34RkCaqoHJFiUBsre57XeksKqBSQopdFbBysWjeDTWaKGK1GYULet9nNSDPAJYFCXYG7RHYqa",
  "key39": "5dUo3okTSx32fAUh5vrwaP6Ly81KPu3qDBAxrfmmTsdgzfmvQ9W5fdZuCotFmaqJ2Swmhe6EU2RyY9HvYRnHH3zq",
  "key40": "2hWhuvzr3eqNfN3fZCSSoQYhaXrLZktopYM7faWRGsjQ3VdgCwZZajMC7kixRMKiyUM4ZogLcC6je8rC2buQePWa",
  "key41": "2hhQD8v2vHNbDJQ1CwBJJNTr6gYekuNN9TeFSoVczuxGbfhBuPqEamC2Ss5HGmHGJBa4EZRezjznceqeVG7BCYZV",
  "key42": "8PMDg8TdJtX4sB7qNsxGpqLBqzjfQj5vm4sEZL4B2TobbqKhAriPNVoaqohrmCNhhV15rQ4Yr4Gp8bc7YxdxPyy",
  "key43": "2gSWLiXeDzNP58XzbzT1keqTCxUodE63goeSFJub5VbwoC5nKrXrALjo19cuQz3tZjqTAZVmvWY8PeSgyy4wS1dm",
  "key44": "3z8MUwx9zgmChBK629NBEy3tZ7TG7PSjdwmsZ6CmCJM6qA4zNEtGoMriP8P5Uvigsuni874X4WxyBcLvaffAbHkS",
  "key45": "4LmxnEeCXnzTa1ttcsySCwNLEv7qYieeiDb512jY3CQ9SnyNMWfvCfoNFHGsQew1wuPhvnBUo8XpiYFLo4ragEa8",
  "key46": "4d5wK2ERN7Eo8vSc1meJDQvEuYz5sAGrwQYi3nrFTKuDHThxoNkx6HsEMMkWJS9rPrwKjbQqjBJXSEsL1Y76qBqE",
  "key47": "4hvjvQHNF7ZB1EZrX9MnqdYxg43PRBqZU1dmkYbsKr5e3JQSEn2Dw91mgyNktahpxdBgsDmVG4PrNhP4tGaZKYPz",
  "key48": "65pEAAjmsPCUEPAyFUg9EyUQGvnc7boPmfGf6T6zbD853jfgCeos7yX5mVeiogR22EWcNkUk1yNwtsUrQuU71AnX",
  "key49": "2YrnwHhpyMNYs8FRgLHcCYToN2Ju7XLm2NouHFJqZZxfc61x8korM7V65YcQs65hn2vZosjUgQ8oJ6vcZTHjp2NE"
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
