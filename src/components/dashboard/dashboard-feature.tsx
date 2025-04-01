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
    "54GEwFzYVaNmYFStVd6B78c5hv8tyR9M8GWyNH1uGoCPGzEe83DUM58rtoyJUTS1vWWFs22WQi8Kbb6cNnGg5yLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M5Gvb7tzLpzNSshLfmLbPLwb9vpPkRBYeWwLu6pn332S8d3BSRZg2UkWyher8NnZQzs7AcxWkwGacYnetXw4gUT",
  "key1": "2HisztYtWDisa5yPHuAz9S9QHFFqWgV4EaUARiecunej9PZG24Vb1bYe4ExHW8ufLZbp4PvWG3JsvXzUikvzymU6",
  "key2": "3cQsLFdkmB2RagapTGSAEa3KgyErBR4UKD7crnpqV63YRTadShtDC6vAcN4iTgH1Y3QHfMd9EQMiSWDoKkDtbSHy",
  "key3": "5rfov5FJsuYHuPqUUWVG8K172yJVs4HeeKu5svTimAya37VUgRZvekptmktMS9WaJQH41r8uwSPwLtiYEunzGa3e",
  "key4": "XrYspiV5R6J4QK9TKETUz9aXYgZTTsyN3apL7naauEEU4rSmPDt3XhXcFoSGUozViAEXs3QZMSikh8iHKnES8cx",
  "key5": "47KwW4pLa94WchYftxUCWckvFJFTDhbqg6KkBh2LGzTFpPqabrcepLCwRUf932RssPXmq7A8oMnpgw9wbwWfafF5",
  "key6": "4ZXWGACGWWdSEpirHkQ4ru6XCHp1c6E52rz7dmJYxhd7C7nJbFq5Ss3MoLDG1n6Hhv69EBXmo5L6qzdQavcBLnJS",
  "key7": "34tVgcGF9uMG6k4R2TmFjaBC2KmsPTuXvRPvJmAH6RzCyescHqHJgKax9omTTFTKccjsVpqYfaT1V99aAgscKi8G",
  "key8": "3t7Fevn1AqXHpSn5msjHzpdktFTcbyjk4aiwyq2rzGiRcrhz2eaLedLmGejchi36CLEPf4z56tzwivauGbrLaTj9",
  "key9": "39hciyXgs5JksnhA4tQKUMsXiWpqCkcZn5voYyWWBooL2SmegEo3QxnpwhXuBhPzrrVErnU8pszKmRs8WqUuDdP3",
  "key10": "2s3TH7tASAmajR7WXTrUXpo3Z2p4npQktE269rGU88avzexhDkyScDDR3hyNY9PcDWFrTuaB9wMSXv8BTsRwEQdL",
  "key11": "23VWi7XskP2vmXjUnvKWwjMeTn3CwK3dSnBdKPbm2ZWXdifJSqiCt2PzSoLKyvZtJPoUJ6SSfH9N9HzMA2Ggbrzg",
  "key12": "5oWky6x5S6W8bA9fusbDpb4XA1aeFZTkrouhpco7ZQm61AsR8H5ch7jMPP2EwQ4kkZdXqh4yGiTk1Ef3N5d8zJic",
  "key13": "65JfcAAUbeuBEctzv7u3N7GEnaQfLNXoWkyjSsLGXzVdkxQaNsuHCxDpymkQhoNvAyGaYBijTXS8HqrGhdVNv9G6",
  "key14": "4KwPTJmMfvZD6RGuLz6ZNPvgo9GDxqLjFnac1F7EXz9zvYFb5ZQa3aLFtU6FrCKR7XzAbQd5hXUntVMesoX4Suss",
  "key15": "25YGN232unYR9R6BxF8udF1jPRTvq7MoCw9cJ6aQSvPTsBAtfr89FTwK59nj6PSTB9W4qNXs3p1gUe7BgpQ68QSf",
  "key16": "4R3VGRQZq6nJqVvrrnsqSVfSUf5AR4JpW9Wf6LhobWyynPXZWyjtBHP7ifyarVsEcHzgJgPm6ym477ARPKpV4Wnn",
  "key17": "gfC4sXfZSF8MDz41Umpnr5Dsm8RimMvQKwDz4CQsh31zn9zNy2PU1BjYuJ5pqbf4mcGs2iuqUbwHHJx9QtBazAP",
  "key18": "PVTNi1r8998F4NvPdG3xFqcxKX6i93vhmNwq35rcdFGRjydZUgf19EX4d2DfPJT3DVvK8LsX8EHfQPuWFFBYCDx",
  "key19": "fN7KAUuA4MhzTAs6v7P1P1F2arbzgiNatpCdaZDqCv7UDSz6Xh5KKXPSZg5CQAzJurXAzK3WRreeyVcA68xqMRp",
  "key20": "41Bs6auzNNW1c3W3RXHQ2VSHq2ZhJWyF1dR7FJkiDDM1ePzMgtg7iGFtsVBQvQRUqa4q2LhRDcE9so4hGnv7dUaj",
  "key21": "2dqbMM6JA6hrV8SZfeR6VtrZMPwzr72sD5aHa7rMVnL1ZgL7FjxXjXwcJnQ7diPg7fx6euQk8FWw7J5eaNAyDHxw",
  "key22": "4Eg1GkGENth6zvvUuwU9cmqoAhpewQn371Wdzwo2QnZcwnAeoCYSAz7nHzJ3MJdFLCrgQSVimepcuzpGMaVkaENi",
  "key23": "4u8U5NGRsxXJdzWaFMLgs8M2LbwTK3y69LSHrsK4VJTpiKDirHkPFzDNuyoRtnEaDMBhZxyoxadtLWgJLAwimU9L",
  "key24": "5YaxyNaE44zBeubT7qw7TbUMKopS2NV9SCdxSWNcPiSp4eSsuHHMhcWTrwiPzEsFKwzonDKjRBPi3F23LB43apwp",
  "key25": "2AJQEM4eRuT3H7Ns64HeD94GQwBgf24jk1BJm9iTKQ9VgYUCBrumhtawgk9AF4mfRRdYmNhhkPAaUSAFdy1B2zCD",
  "key26": "5UFj6onmWaE4nUZmBZEaqu8BKCDMwFMaNNxKQM15MejDNfrL8r1LjDa94vzNVEXXfeXTFMaSyJUsAH7btp9NPU2D",
  "key27": "2PGG4PQK4JSZ9emqogPunGPzxzAApRYdGj74L5JJ4E7f8V4P9nSdH1ZrjrTNdjFL7qnsLnkyLRvd1xaniAaE2dHt",
  "key28": "4cpaHYbVuQSmqSE2XSyHtiV9uP2jrvYUDB7Qih6UbcuSFPMDtERThvctse8wFiqQcJ22FHVCxdkXHSwX2XWH5tcf",
  "key29": "4QFqxJzRZ51DLVPyEz26HhvfZrDmZXqPhZXZVpBL1bPAW41o9R3YyWRPYS24B6nu456WpR2pt3Ss9fGeypp7pz1H",
  "key30": "2ckL1Y9PVdgCNVgiKzzerKwoz66KckKdtM9Bh1TFix1sRcFooxQd1un7E7ma5Y8Z6ZpBiuhXePaZFPVWSS4MuDmD",
  "key31": "LUT2Vnpfpkud6JGvez8YArnDoZPEUE2QK1NVLQJt5WW3fto3knsSrFy2bxmEMr52JVW5jNH1poUguzjyBGcYdVr",
  "key32": "3HRH9dhK2AHpm9B4nVvXo7p5arx2RyuNXFis3L884zAcA6ngbTuHAxLWxuZ1gSmiWftC8U8S3kVAUhNrpvEhgZGW",
  "key33": "utYpvxHUhyFfPhVzfUJshQC476WyexZSihVTSYpUZ6V1nRXG44uAytX294NLakZU84hD4r8Hj3DcDtxZnhjgXY1",
  "key34": "4zdGfDHqkg6QrsHxAMRmSFTkQsFrMSVg4pMmSfXhsdHA4yNweWa1WLwuquRjKdDEhbenMmEBPvJHm1C4bDKNVpfS",
  "key35": "3xtkis5VCb8YH7Rph5mazFQxwqkkCnHvWyUyJLKxwR37zUNcCFyAvix1izVThkesbbdYoc5CpCuqxUQg6AaCJU6h",
  "key36": "5G37FJgJkw26fMVsvuaHYVjDJkXJfpiX9WEexDyUAgNs2Vft3x9e7DAL6PJDCJadi5U1UkRFu9amSnPugU5i3x6H",
  "key37": "61fSx3JZVY7SfZa9BBe2jUMNXqLn3dywifiA2NoBQG8NAs99BTmDEm8AQTYVVirtowWNSKVdagVwuZdndoo3f4nB",
  "key38": "2BxGYAQ4KVAGKnNHMw5PMPnHkG8Mpt3PwcofyA4tisv28UCmri7JgcKvfZjg6L6GzSk5HygyHudvzfdjdT5ogJFJ"
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
