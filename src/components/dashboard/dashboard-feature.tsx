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
    "2tKQoA4q1yHVewACeYFERr7gKk3QBrQVHZap3NvJSjAimVNJEM2vrviebWZhTH7LgAznFsvnFttc59EPYMYoT4Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QirBJX1poHwjD3fviegJXJ363eWiUcU9StsD6LreJVk8GPbHMoq88ZF96r8cqruKmZGvRdRLrKVTUEnnbodJv7z",
  "key1": "3vWqKFeWNCJJT4FQ3Fc2mMUv142G6T8wVgEKpeLP35rAuqURdzuDBRAA9oa6s9j91mA3CQ883yPttNfNEA3EjEHC",
  "key2": "2WjTWiiNC5xRZwgQbmxFUTA6A6SDFnSbWBp4V6zgvsz5ZELsu8vMUD78ttnyMiqyjryeEs5Mr2Vv5PQa23S1zfeY",
  "key3": "3ptKgwBjRwJXAeLG2MqQoZKx8kwDjRu1raAEUpjb4sDmgR7mWpTJAJpM95sX9QEHoDs6r22WCjxCSd1zqxHccnjK",
  "key4": "188v2bb4QLsTcuGhEjQZ7AW7B5BQuoDDnyifN5ThkXKuxc4gM7H98PrgPZbWkCbu3Zrpqc6PXsMmeyPRN8pVRzz",
  "key5": "3JP6n78Lx84HvDn3stncC4eY1fCos1N49YDdk28PtGdvTg92DytpShukiZESgeRZbAVgvYuxVCPrmTj4sAdCrzb",
  "key6": "51Ys8BMepCQnHwpBw834ccMonebBt5G4xZwvQrNrmbWjQ7obBW9cicLPEg7zdZHKYiQDD5sC3BLC3cgnt4rjbgJ6",
  "key7": "9Jo1pBrdEhg3qB3DoXyANkT3eJdnFbFS8JxqXypzYiDVkxXXKoZ8vDZ3KHazxMsgbSvYeRHgijHvp86ekN5DhaX",
  "key8": "2sEuSKYEyytjTR17oSm2LsAhcNouncgCJeQkoKg5yma9UTtVg41zf9HMBScTnkf9LzuDhE6RwmFdF1szA9sXyPrs",
  "key9": "3c9ofLGA1e2KZnAknmkFt9dHojhk7jDVia8mHGSmF1Snn6Z8jrdMQnjkhjTu7Xmw7G2v9VVqt6waUtU4mToKvS8P",
  "key10": "3WAKddPfoHMS3uqDo9s5QrqtfpTTwuyvwnB6AyAPE9Btd4rMCsxzb1zrGoi4KD9seSj6W84fqWRWXQjynZhiB38y",
  "key11": "3EsFB24KcbB65bLuAfCV1UenCTybegVFHogGFyHFJ7sYdATeo9QyXzfrBt5hRcZ5rrmqrsV3U1tkiHkgvJ6kiML2",
  "key12": "4ntgCYrCEpxuN6dWFr3UApgiuBijRF2r5g7LGvdBVjz35x7zAhjJZcKjukXJ4bHSFm6SRQqZ8yWedxi88Tkfk4hQ",
  "key13": "2HyNR6CDYoqY7UqnVeDXnibybr454mNq7KSQA1U4jFmT6yqiYv882UGv6vBnpY79vmQ6X2RjSNCvsRLJhB7o6Yd7",
  "key14": "58ggZtdvKbEviUFX6zkmBJJSbJMvWpcvdTRXJ3C8DSAZvHHmAHRxzN2FBRZ3gpuEVJJAUBVab4Aw1n2FPUqX9LGj",
  "key15": "3CPy8cvV9QqF99WBis1XpTbcvU2QpCVkTpfJfSEvcVkjShogY9dWDaQhv3Zj9Q9ujBkDQSecZjuwWvdfDiGdXxSs",
  "key16": "37FPkSHwCbqjnVsznirhZFGAPEdapU4yXwPYA4rFmcyTc6reTAuANvvZiMwSaQmZxCKbVqFTKhnKHWGgKtEFtmxw",
  "key17": "5r3qzAkY1Gfx1ix8fmo4TMXqEkegTwG85mA6rMzStsWEHkk1vgKofKFHnYyYggTVMiCudvpp6Pxn37Awh9rw6FDg",
  "key18": "5Ehecq43w9TWWETM19Fwd7pT5AoG3xJgAE9FRuazBqGuPHBNvz3Z6CBVjptNL554U1YjG5RzLfFVzPxp5PUZLTre",
  "key19": "GugtwB6wvw9ob65X6UVdbqkqo64cp8sZsCTn8Fcpbgm1BfYbr6LpPgrBzcKjrsFCBQP9VDDggUsMfiDt33wJjvX",
  "key20": "C5jfrpRBXaCnG5vRMPoR6wmQt28PDa4XfS7wYazs7boTZwJskF3eFquGGaVrCBPpgmWhFk395hob5qzRY4PNYhF",
  "key21": "414RtVTgH1dVhPWwUMh2LXLrHxo3Sk6sMTgAJVsoV6rdUEpVqCjYCU3iMVcAT7R2vnfrvuoBrZuV6Kf5kgz3Lz8E",
  "key22": "4Mi1Mpx2QdAxgXTvBaXvssN9tmAsHXAFeYAiEHH8WkorH2TGchdZo3jiUrFDbRdKqTSCJ9AEonwyqsTKGqLNBtLN",
  "key23": "3Tv2hTm3RdKbRtiKMda8wgJS2DdV6HB6S41go7Z3PRCaju8Aegm62X5YJbARTU8cm8j6PYEwjSTQXKLsqF98pVTL",
  "key24": "617SPaNDqtGW4UUxNbtSE5BU2xDdcf5b6g6APm3oqPqK57BfFnmmwDCUeBu3eFB5F6JuiKyJyjoDE8fnHM4rM9y8",
  "key25": "5rHsWv2ReUifXa2cM26TNXqnNts2FvavSTuxSVSmjEPTDCnB8kVjuADW9PmPBDeK7po3LiHWcyizrEHEH6R2nQY7",
  "key26": "5jZ4aQg3dMJEcDvu1X824mdvvwY55wWPcmS7EidRha1stoDkNRWf6Wk3k5edV7XeeUtA6duzB8BP6cbKCJLMpdLZ",
  "key27": "TpbEeE1ifnfj8JYnSJgSnP45Qk6gKihnymUNAdCzTKEAJEuXbNQogcmuzB716VyYBF6KKAo4P4hVA6FyFWH5z13",
  "key28": "4chogSqE19czrFDfHpjeELCJEXiiURqsnqhsyc4g354QFERxEkGy4pKq7EwJtphiZ9B47FFdqh86o2gJaTL629qM",
  "key29": "3gfUDiexH7c3awwHaVDF3XsWkLMgZX8dz51xRyJsAfbjB8DJhb7AAw7TuUFrDWPZDX8nK5WncnVduLUcZkmgM5LC",
  "key30": "3FjCVMru9rxkRqaVzf6fe5UzMmfTwLy8PYe14f6pgPTjea4KDCLy5e2W1nHTrokoNRpex7v7NLqUEvBXxKHY3bHE",
  "key31": "4aXqAeTyiPCXniD7PT76kooEZ4zmVnfahPoRAcSnbTaT753EJCevkxJ9dD2PfTWQVrtbqZcdfTXAQL1qp4RMhZuB",
  "key32": "4heFNnvD8jWkawbr8ysmYoeeWzZDJCuPpXwEjuoA2z6Yz8HwTR5RwYTQXfxTp5reYULXCHfdTG5Gw9cqUHR95H95",
  "key33": "pBsPX7kR8cjL5mqqKJGeXmuzV6KrGSnooSUhR6FZPnnSonaBSEcd1psACBVfCZiSpjPvUotqD9NDtva3A6ihDqe",
  "key34": "2gmtb6qm1UJTUqyHBDnVuEqdJwmSksnhhN2PSQY1Eqh5zbvgNbpCMrcXGpT5KpTbGyhC2aV6JBwG7W81Ajabb2ai",
  "key35": "h72HZefGApMpt3s1vE9FcpZmNyMqrkBkjUePykYNq54LNemTSC9P9AQhCdpeSiQvnymZmjBYS5xDuhuPp4G2AEb",
  "key36": "46gGW5Pp2V1HQhSrQQFb5RVVCdxQqJPAAAtLCHfSLyZ8YdEJhi1RYyRoKn5jRiNGKhcftN8y1wYQRV9tRWmRr8U7",
  "key37": "YPDbHWv3AQuSTamzFATDznomNn5Jsh8t449PtGnGenSamUHS1hwhfCf9P55KgfTfkEpkPDQ1Da6NqBNNsaxtnGt",
  "key38": "3HtWrfFH3bK5vwaqEG7HHpVcBjdMsmoPWdVFPGigX79Z3baQa2Gs9fYuPYWsZEfpTZ85yhRB3F5LUW7WmoN7Wcag",
  "key39": "4VpdawZrTGXu9w92EuYNyTEvuc8tnssv1N1oFX8tZJZY2Sd16LNEvqzw5i69q7K65HndbUTwMHCCJZNHDn8BmXr2"
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
