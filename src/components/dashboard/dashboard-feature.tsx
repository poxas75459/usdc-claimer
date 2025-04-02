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
    "3jmFdAGtFoKYvzVgTsjid815y4foSXYHwgXYWEygg8vxoESWAGqcDSiCzPx6buXFxj7K2zaFrg2qAgd9M8m3J75s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZYzqpD7XMCWRcm7vm4m76rmR9PzwJkpc78hu8tV5enhxiuuzzuRcJdq1pZWPuasZYXTJP71yZRAsgrg7oZdZ6NR",
  "key1": "ZjeShA181ZsezzbwbBAgzwFSa4AMxyVjDM5ythg1uNhXd4yimTN1yAqrF9hBjuLUjA3ugJjRu8LkTa2uoWko1r3",
  "key2": "3zmm4djRe4R6Ydp3KegoHE5gRWf4cruYs7WTTmPWDJxZweGsUtD31yBzvQrKLzxTmph97hccYtLCFUemWJ8mwRhW",
  "key3": "5FNJMvEfXGfGJCwK3SmNFAprr2Ssvg2bpzarFxubTHCtaAzPaamVMz3iKDc59SiuoAFjGQTuJ11d2WJjS8P1c7zF",
  "key4": "5gC66CLPPEDMkADFpyw8XxgoE1yDeiMTvtry7nUqhMMLZidoEKX94XUD9x5C7sw8iN576B17tQSxXq1o1wU5jr2p",
  "key5": "4q5mLt9n6eLNP8DG9b415cZ3rSqkivjB4cwN2WVEmL7QGcHvPtMearASbcmTG4i6hcnCYaEidiNpE7ubk3pGrRq2",
  "key6": "2tTafHoANR2CStqad53joaU93RetBkawZHmUmFrSNufyLeuk9dqgmWcMThz6hkU8DVqpHv8mGJRZAQZ1DPBqmL7S",
  "key7": "64GrRCLN25m1zKke2bEFS43RuexBUaH7kjXjtJUUD4GwvjFpUgkVBrBvb9XPGSYNcszP1Q9Pt4YD4nFxJCJjpVMP",
  "key8": "2CdfoaKGEmzQBTuhRKLv4ux61dqNHgC7qswjExZNX3BtfCZANUEmhyHujRRWTSCzTX3L5t6kUqH5aYDwEu5hWRSr",
  "key9": "4YEv1hRwU3DWnAYwGHRd9jo2SBednaxb1FD7GXha6QFEwEKiGX6ftzA4ScmJDG7He9WyXAvkU64kDvRprsmPwKzy",
  "key10": "2FFcnRGLTeu3mjygDceJVUh3hS8R4659CJeiHttem3pMtwNbFJou4JEZsjohFtfHzFFYRG6iM445ygT4zoxXeic6",
  "key11": "5EkMohomK7P6ihThwhG3jXfEmRrq9YTY7iDbkj7NVmqwCcUTfzMf1v752vtKokBBc9dUYQUdTauSt8Awvv9vDDAY",
  "key12": "4tXuF48VrayD544hDWSaK335xxM495LhryFsfs76RDiyyR7pshYqmGdARLYFfpcBqaQQ32TAH79PBgzAuQNe4dtd",
  "key13": "vUTjgJaQrMPbuuhANWMfHTjgfYSq6XRD7MiV4ANhvdut6GA5sQUDdhjhhDfcPkEbTi3s7A4TUbErg1HfxCjhyaN",
  "key14": "3rYxkAfnZDzsWcvxrQgfkp7znbpoXWTvQ4WaJmff96N9Zr25AZQQWnG2nXmwWrwQoNHawArsLNBQ4pExUP8BByry",
  "key15": "2APjVYTx1tPj1HPmjprkE1iZA2zQbqRW73rH6xab7yMPfAu8zw8MLcWMByt2gU1yh9FkBcY4g5q7QqukHZSdmj26",
  "key16": "59TyUW7kxqgwncgNeySDDiPH3nUsZhMzyhjiMnn6JZDpPBTtiV1Mn7bUiYQEYxiRA32aXAF4HbHUuB9icHkfywsG",
  "key17": "3k9D9vwj5T9uXjHhUxXmDG2kayaM1EThRjwMbDiR88ckPfnA3ghfeTBV6bWKawjpyPApxMnaUni6DhE6i5EamQbE",
  "key18": "54CVH1uDcJaWDdHtdHdGDoHMbeRTXGUbu7nZx5SDurCqKoj5CRU14EQ22EuJYoF3CFwvJB7yviL5bB5SYh4hFx6W",
  "key19": "fpe8XwkwidnvdkNSriYfzDJ9YfMfwnUCahqMZYWAM5dzJ5XzuAokJrmtKhkeup1NwmohEjfrycQoMqM9MWYaS8S",
  "key20": "2hqzjfHvDVY9usu6H3HMpy85s4jgw4vJv6un5YpFuZ78jCxuJKBrXtBMyqqVwaApfX6thsjaMrT3j2MDz7jZtAv1",
  "key21": "417vBTtLzoBcFFHpAChEFvQnHPtWo2n9rm3Wrf77jC4tFtawFcsRDuHaxjFdFLLH685yDFxEroyyMwK7wfP6xkBr",
  "key22": "5yAaxYekPnzdmx6m4xjErzam3W2MfCzmj62TL3GpdaxFrcAQqRwr2CGF4xUMzi9vbGnX2NgaKkmqvdqR9YEJ6uET",
  "key23": "2HvZkexcM1kZhkGwwRHHHinuLE6sTstBQNsx4P1GJwMoE4TwbvjkapmqxpmEcFyMDBWP2m4L9dCwR2VEC8QESBXs",
  "key24": "4nfXhzynEHQ5mAxSTR53Qof7jvHgG42WruFifvRHaoqsQ6oum2ncw3WhyZUuC7JSp6pr8Z5qekMMwYVfkeiRNQi3",
  "key25": "YKtPsJNMroVArQtDr2N49rt8dpqZMCh46pApvqpzeSUqsoVjnNAMBkkdEMQ8BKdgi4CgSNBTxZ9TLYZyUzpgZTw",
  "key26": "4ipfNRSPxoseddLh8AS1xAwWz2XVXwRjrbanj4y1tTdwiQC8encs1gHGyrhKFsj8jBcvRaNPJf3afm18mZpmbfpM",
  "key27": "4tVQNxbHSLNnVtRTkr4S4eTnV6J5yfbaVG9FhC8ttbhAqDmTK9j2nvVufZ5QzFiq8Pawr2wUHZMXrBbSdbGDAYDb",
  "key28": "3PpAegrDCZ9nYx3LFZjGUJAzWK1MS9NUCkEujZFXUoAcsmAcjPXj7ZTVeTEtJqSZGMkVaYZi5AraGUyW8ekRddEd",
  "key29": "2xWQq1QtQuMAgmxbww8SX7eYYRKEC13FfvNqTFb9boJx2VAaZQYSud1bXC3BCDW7Jp2uyt5GZtPEa2iw87D78Q1s",
  "key30": "5rp5nme6MtpA9LqD3vjZSMHTu5iYLKifRteNgYakZ8T13hgMh8xfck5kUEvTeDYB7SqWZ5Xr26PThY19C5n1W7kj",
  "key31": "5AyFKQNQgBq7FD8swyUVeRzQCueVunf2pYD3QNsQszK6dqT753WvkdyPKqJw3QjSDrZeFtt1Yuotedwcr9w9zSwR",
  "key32": "3YzvQKkAPCVFYStJfLxzbE79W7nQQ9Gr2J2Na5x2MhxBLJ1ej7kymaDDBBVk35Y4KHnm8oZXDeUi6iFGtMQttcRN",
  "key33": "3eFFk2pM3qMZQMcxUPrqLwz4aBAbrDLhymeTvUeYsMjFMJmgXSsdsnSna35rUoajY9AUhVycXR4FpEghWb2DDDVn",
  "key34": "5mwQHfnPmamkggfxJh6YbwzRGLFwDGoPtahUCboekY8ZiQ36YpDC1expYEgCBcWr5kSra4bAdQ2kRZCiFd1ih3Ea",
  "key35": "4J1YgxEAx8u7ZRBdoxVccty42McxqBCM7nxX9WecxURnfwMmpBd52VYTJa88Wu8ryH7FqPaK1jTWejtEYGqkg81S",
  "key36": "4QfZ3NzgaxZecAUpiV8R39DfXv8CTwcH7WRPz1aL9n9SMZUcSymujEChiBpwNtcHw395AoiymUYVSPUSExGAgHbo",
  "key37": "5LDNJ1mfcNFMfBxxbuLqFFZwKqVBU6Npbg29PVQazB7s5My9NAPzPUfyMdwhagxWcwjZkwpv2LmdaNxTEkgrhNbK",
  "key38": "2bx3rgfjbU5unc8uXt4WyKbSHuk7Ft39cJJiWkCb7BAyTV8sLh1PSvdRnP9WWvoLcuxcdhnZa6AS2zUoZurjXebQ",
  "key39": "5iVoi72YJ6V2MX7KqwMin3hKm3a43n5DyQAyQxQRwfMyHv6cduSbhrP8eRt1gBrSG4hwVggUqr41u4w8JP4g9ciT",
  "key40": "4n8FeDnuQHfo8jLfY7TxrpZKPm69Cx5iyaUepzaYDfw8LvVsQYG6SSnnBDgVFvvQeeD7rwSjS87moLK3zvGRAZNS",
  "key41": "5XKe1VhAkHeMEEri7iaDKqQPpBHrtw3DyWw3idysQT2BaCPszTsDxLyFN9JqSnLmpFMwt2AoUqAjjwkhU6Pn2qzA",
  "key42": "4299HA7U6G8nSP6binnZHERJVm7bSE62Q4xC1aGJQMnLDyokj1Dfb4EhRGcsea9q5WSvfQ3gkPE8y6KNQCGTUhPq",
  "key43": "2ce3m5KVGkPRxcjFejB6bnFqY3cPuZYSbtq5jtNvX5Q27aevtBpc3AYkH2JnR2opegMB78duBJmuNBpqX4342ize",
  "key44": "6544JtEumdnsKM3NukGXmc7JBmi1u9mSSvMtgZsorGbjCMFh6JTTgfwSp3CMH4QsVC9zpwVteE81WWtS9icvhtY4",
  "key45": "fFNkhZFnZB9TXT7K9QQNjxmandEA1zXdCzds6HsnCo2mFo5NzFaxBBahUiBCiSN98QAg7tT9zF8WTPhFh4DqHuv",
  "key46": "ME6DPQ2S1gvHoxybpiRnhwA7hJq6N1XAbPpNjhJGSovbSpvadhXWL781CNio7xjTDW1f4orUJQAwP7yW7M3gzP2",
  "key47": "5GvTuMpfKiLMVMfnQXcprDfyAmDhMBwy6fPSh6RxhGvpVLsptqr1q57Rukek72J9mAhiSDnCcWAeuy3D7vGDXPp1",
  "key48": "3gta3d4mnT9UGuxQmkTkiyw1bizwqW2ughy7NR1qmLKxtKWhi7tm3JwGURJ5oHdTyeLd6y5h6JoxrzZ2wSmzd5Xz",
  "key49": "3PBvack7cW7NLnUPwayD2yJ2sQE89tXtUR9GSME4iFDaTXcm6Kt7Jc4joA2qduYnX3d4mCFznpM4VjDhpA1uw4Gz"
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
