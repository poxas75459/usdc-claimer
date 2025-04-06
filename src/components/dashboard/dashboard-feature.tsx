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
    "3iUsSuC3dcx3Q1PcT9Y27g2PMoAThxDyooCCmt3m4QC48SSFeb8pEkwenVWqfZF3vDvi71P1koFK5ynjLbRWjTNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tSZrQoH3Ptvems2yVpcTYB8JKNpsYRifBhK5x279Z2pory1VJh88MMsHfBL4R1HWTMhfdJSrSWvUwa4VwXbg94d",
  "key1": "2Euny4K8YnnB4hLQ4KFsb2RUB56FtyrWustKw9KQBRDkvVYkvrUAsnQ34ZTtfiAdHmbrrafwbgEtgScccWpTnz3b",
  "key2": "eNYKMVHVuEJAic6vrd5kh6omKi5JHJ8qChCGdSsK4FDL2CpBP7MWzqd8tQSzQcas71GGx2fr3F5813ujkLGrzge",
  "key3": "4JNpYamicAFsjUw96PBG689drWyHXBZqMJgEv85vDecF6ZA2xG2SinW5naPA7FvRDmq2X89yMbwftkSRTetYq4a1",
  "key4": "57mobor1Ac2JKcDYuuQYZhyQPSPCFDpeZuqzS3pUYZXrCnCLc7EBfpwBbnkbUV85yrGYHMozBAQBUoj92CPntgPt",
  "key5": "2vDXNX8TKF65tesodCx4PxotkJ3B3fyK1w1cVf34CdWPi2VxE3tHPwiKt7jjiDFs37MZ5mBHahbnuavZnQ5iQqGs",
  "key6": "2hEE8hfJHQjZEUAPi74Djpt9BiEek9u4Lk6WS6Mv7DfxfEKQDCwyF5nnWQF1xL7fMNTSpf4dM3FnafNrwRVqS19m",
  "key7": "32A5WFbVykWHTC1BtnZhgCRmS3DivbFf3jW4nX958f8EFXkwqwGL87D9k2khEKJQg4C6FS9DRcravUk6uc6tVo8W",
  "key8": "f1yMyFS5UGYCYoC6Tjq8Gkh6Pk3EaxAjb6zbsH641Qw92FjkVEFWvWqvotTtEWpGrpgL95EeWCCmAwyfZjBphjD",
  "key9": "5M1PWKGG98sBuCEyg2wfLk4zAqp5wMxYABm7rounJoLN6pfGzSLRGCQ38gz8crzrHmcaZcxJeHvH6dFCA33tBfhv",
  "key10": "4RbqoG4ANx2PLWAZLhq7gknzoGWx1Abh5jNnyG4SsmPftPEFKBo751DtzEGPHsvuBBkS6bRa578qrYr2sn1DfNM1",
  "key11": "5KfTmqwTZwvJdvyJEaEbbTZ9KppXcPN4PJkrXQSUKtJhiyqgeCD7ShmXQuvQzLB2fP7MSHCTs95z6u9SMoz4xQ7p",
  "key12": "33UQykFuZTqdws6hozn7WNqgo5qph8GTJL5YcmFu11QQRGWnsDVzF2jBXfjVa5jRDPTx3wbkji9LfMUcNn6FFTVk",
  "key13": "3jKccXesVPGADuwaLYRaf9gSQLRzHtk9UWvgExj8TV36TXVh4yexAutfot7Fa7TBHbhLjftKP6Jknzf7CuywwKhU",
  "key14": "2QURexUdMisUW9uQnFtGNNU7qWUfHUqEWGwFnvAvwTkHRNs6m3gnpbMUfMgsiXL5R5kCerFL1tpq9kevp3VJ9rCV",
  "key15": "61soEkMm4GjupseFMccHXKkCe59DP3vuX1TA9FxuHRL8k3PAzt259wkt6rh9hgNckvmHUFX4YUNnjL2JqvEtbYBZ",
  "key16": "2ivrL2HGiZajMYyak5RGpTGyZRcebeHpVRrvKABuX2wZZuDJPPSiSRDdzZYu3bCi91VAad9L7vt1dnN715cbDQL5",
  "key17": "596NUMwWjDt9XtPMDYk33MEwn1H8pXzVmWGN3BeAy4EwKuRFTxe6PDxJUSvMJjV3F9U1Lwt7YRHQWGSWJNzqoUGK",
  "key18": "2mUJwUx8oWEzN1ivjouLgDJBWuYux8EoWVYk6DNfVkiKPsizYkLu8JzRxJxNpFokNPcPYnu995tUSsjWu2dQxKBk",
  "key19": "26LUrmsqwCC56K15XALeriCPE1JxbsTBytbuCAJeQr89QEYNAwpLKeaG4bhbLevUx3fFK8NP4SVHhukfnRDHtyhJ",
  "key20": "32LGTdKD3EmBHH6YmpJPZwqD9414zbUiXm12eSqStp18ShDhE9JFtXTgbeSaQTq3SH5RBaLApZGnPZWcZEv1rU2c",
  "key21": "5X2Wmbgeoo2zPJpD9PiJbxLQNSq2vseiYFCCGaoG9Lbxta8pqNQWgx6FD9aFbnyvStYN6ffxjxpV25L8kCUwKFHM",
  "key22": "kgbswkTXoeW2FxAUKjUZ8vi1FTUvBwekQZPTvn82YJ3QKTJyP8yhUvCsWXd5cd1bxHEMbB3odwHfpW5V1ue8ePq",
  "key23": "2qC8BoYyuwncMrBHsAXdyQTHofaAJRwzBWmWtQBBJPrDvMyLj1EYv3s6bqp1Xrg933ogsXvf8ggpmKPHW7EV9b7v",
  "key24": "4c5KVA6rT1FyCaasRQjGttPX2w7jeBWP26q8ZvjksV5G5cSzUr4Zq73r1bDbwB74gkGvyMvLrfWV3Gv6oNjgHwQ8",
  "key25": "44zwYntNZK9nzNvZKZY6PckXE1TXMZxGMoycCbRyWdohV2a6EYEVYXQB5B7GRcSFZkU6GZ1LK1j3C2x4wMF3H8Jm",
  "key26": "vk8yyq352mGj9vp34mLk2TmWddDr2hKKW75v8ocFqRxdP5hrFF19HW5oWUaAAJNRXTbAuBLF6b5jhoZPB1pEXg6",
  "key27": "2RuTWC94mayvjG79sWkg4LvefM9bgF7beoZ8TARrEaYGRTb1U8NCLmRouH1LRzgiYNaGGFjEagXxh7gHUu76R7mk",
  "key28": "2HRGQJGRiGenGmWCXNR7iSdcqF1KYLgLjHmzi99y3CtTaZmMD1W11LffG3CbKaXcdk3HM9bZbBAPNFtspje5xbWf",
  "key29": "5Sz3wGjn7kCvrFaMtTrZTLU9BGGD53s4tZw8ErJFFGqWByDgdzBvHKfHE4zaCXn8wUnTLeLqPhAj57mdBtroJPzz",
  "key30": "3So1bxV2DUX248ABQa9gaBB8tZzZXAHQ8HWfe2voxUGfvX5XiNrxvhheZGUEjgEnstJpDapGmQngjh3jmwMqwL2w",
  "key31": "2AQjAkdGnpHontxKwqS6Ls6hkCfYVdBYHSFvQkVD5td5GFCrxmUX61k8DWE8PVfpMVs9urejAc46iVCnHQcsdE5J",
  "key32": "T418pwf3Bm77DWgxACd7Y36HLCyWg5Cf5zm7hTfX2nHehBaqvehcqTJycTTNRpuBXA8DUW1qBqqk1yRx1on7JQ2",
  "key33": "LAJJcBG6FkdGwSnWKpz4mKyVzVMEvh9a33T9wFzR3iC49aBDo6EeZgGJiCTREGVf4YxULmGhFCedGTf8qipjsej",
  "key34": "4XuY5riZ4pUEB4jxMQF8pTQeZxWJDzwA3ZcJZYpGwU7QG7Hiav2n9LbixjNkUKmoa3WU3oUckpMHKAmV7HiZ1tE9",
  "key35": "37no6aWEMifAjEFhvkcgauaHnqxUvHhHidenTF5DbcHCgCwJPPVDkmyKSwroVtfymRTi8bc8onPZoWcYphGygP4S",
  "key36": "x1bL7Q1czVxdi1Q34VXUzCrxkdwQsYAdemtKvco22zLiiu86rAHGPibk1ALfk91Tb9ZS3GFzMYNAyh62qiLWBKq",
  "key37": "4NH8dGnuvNtUU9cLPrcWpJzfD2Unu9rBNpc5tEn4odxHsMZTEBsbY8uNvyfg6Krv5CE24BsLHHG1zZr2a62S1pbM",
  "key38": "4p2yX7kXfCFgbZXyFTzyVzmuC7ZbAmm4V5rkC4HRxbxSzYzD8mwmuwH13McxV1AgTZVRnQC8mRL2RSbyM51YqYCs",
  "key39": "oPy33AHQAi8SFiE1Xqys2fQFECVTiZ6UHxjgUdTnygoeRZDtYu2J73SYbenJn3egC7EoCBeXw8MJhaLYW8ZrhAP",
  "key40": "27cP6Sw3FBLrBRTxNGAF48nyrGmus1rTrGMbtqHsqHq1aDXAYCWZq3e6rR6P9Yu8N5973W9BHtusgAXaZCG5pujw",
  "key41": "22RaE2p4aWwapqcK741rzeig4srvhEHdFxozjQQgB86dAZzVneZVFwi18y9WQkDkLNbAtKkGqNPGuPYHmmhrBy37",
  "key42": "3332nAuhdipNSXfYX3R1pfxCL793BPfmY5Go3eiyoNctEymnZqLXMde8LyTpFUi3nUdpV2uApKQ5Ey4LA8amD3aX",
  "key43": "58Ahn3kG4e7krnVJw8Vh8fn2eundLYubUfd9JaSK9PeHtvc4gCNxX6shERb1mNGzStqAqx8EdndMfzPwn6PuqGZY",
  "key44": "3q2AQzcium5RGLzfKosVYw6hMq2a1JKzcsHcuXW59RQcz9y152xgeKViDLD9z71xSuZu67vfUbkD3pJLs7spbAze",
  "key45": "4sUJn2YRcVPggegMMBpWaFNT2krEX5LKuLULWXeuzUfijn4b3CWpVnA6iBBhsQChyg5EHjtiwDg5jToomkjD7HX4",
  "key46": "iRgSyUMuRmVT4R254RFrRU3p4rw4ixLetWJNpsnv3tsuYkoFJyftb7vVjwLjPkzjrjvQFzJgLTpwRQZe1ZdCeac",
  "key47": "PdUNqrNt5BnuaZwu6w3nnfHSniExxdz5FzyrMVdKQCEWqhedWz29Sa7kgSBw9HjNGiFvZv43SzBacSW6esQLQxt",
  "key48": "4obyYSuopCtZXhmyd58BH9jvknzha42B4YxL2fJsfMXVQTQpa4RzSLjSqpbFuHj5mLCWeUYzh7Gdnzcm2oh747Wp",
  "key49": "5DnsMudrysMePJyebP6C9L2KEYEQizVqW3vC2vCvutYdHsZqevjdSn9CCwrjpYrv5Lb3V82xk4x4tJRVPmKFgSoP"
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
