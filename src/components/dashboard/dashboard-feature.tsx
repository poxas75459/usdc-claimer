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
    "ZmpcsPtEjLswGoneQ1EESkwmEc6aVtHDnsQHV4YsCFzoSLEpySrsfyWC3oic1KqChZHFyxmZ2vSpxQfK2b8WRqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QeJdUTdn38WheqqGDtMBNQYqwy3NAvaZAm43Z46xZWU8PGUwRbhvwUUm4bCCUtPimrLr7DffYRdj7x7fUwetRcN",
  "key1": "32AK6zUEmq5PKkCLq89msZnFu81AuirfmVGpjGkMrjw73skPAfjQEn95uJBVtNZWMGMeFYxpgokE1Ec5bWrkAxEK",
  "key2": "GH6sFaF5r23XagJbM61k2s8hZHKu7Mqwebnq6QuY3iiiiLAyqfxkfjtuEoSsSsW1TWnmsZVR2sr1WvyLrcNoxyU",
  "key3": "4Ppfuw5Mw5wZHerNEZns6NSSeEYgQjstMAij5trnhctqeBZHiJUdkmzBBgpr5ybxaf8QgYKrBcc2KCgPztEmaGBv",
  "key4": "5tVcrt63jRYNF8R1LHaLWB5uZ3hUxPyJdNfbUQVtUkXgn1okvjztuaBaCGnxh2REgFeHZNSkEaqBB8tjnHENB8kS",
  "key5": "38jKVT3zwuGvnSLjwwxzUucYQXsQwCpLQe5SiHXRn8NpKhxkqgpsFb5oBZ9aqBxUxH8bE6Puid44qCcV78SmFpUG",
  "key6": "62g9viQ7avUums4SEsdXmkCeBvgWfM1Tm3PHnV7HQ44yL1JLtkDqfbAv5NLZMP134eBBrwkFuApVc55rt4gnMgm8",
  "key7": "3LSzMJHCk2VpoktCX1zcR29ze83vF9kT7bKARtLGbARKVRG1hPqfUcaacqszyyLGC9i2fTcf2r5ZV6FCZsB7sRd2",
  "key8": "4MrgsnwpYhomdozT5QEsRWVk7JK1KoczYNDa58KuGx8bTMsi4LEc3aVUPxndRHzyiojRUgEG35PYoCMgDLHyx8Mx",
  "key9": "2eNDzuwtkYvjFPXL7TxuTHcGQSMBm7kZZLB4v9Sa1ufvfoH3KEakfm18AU2LpzjJyg9wYdwWwLHixEPRduQNhDfz",
  "key10": "3WgL1B7csPfpq1F9JL7YzHSA23QFynvWvamRdBtYpCVL5pwis3NnaMefU18B4yMM5wGBYnrrt4TFYgpMSyNgTEMg",
  "key11": "aXJabochdLwvPj4h93mJGqCPuJcYaiydjUcjnDzyRUbFBUVuJu518sCSdYVFAdFyXB8Xg9sjTXeVoVboJcwaSCf",
  "key12": "2ASKTLwLsKURJsWxQ33pu8puiUKmNw84ffZFzvZNfDzNCXXNRkFAdA6kPFSYAJQEYZv8RZza2e4rKouWbisAPvyi",
  "key13": "VP1JBhRuEFi4w7kv6jDNutFtzxn9bKobfxsTta9udJ7JB1brv278io7BGP9Re1dx9191rpXX8c7Z9WuMjR3UdAT",
  "key14": "5iCuMdSSEvrVno3Takyz4deJDDPGkiLaxq5aBwWgtL7RSfhYs7UBYM9oG9vde623me3PLSLJWFkPdsZ8ySc6mSt9",
  "key15": "5DzGfFKNAdgj5ziPUPdtm8r4CzNtZK1BoUmZRpNvioKQJR2cv6PK3ij8zNcBWHuDvNUxK3NhKTZXM3Zu619W3vrm",
  "key16": "3sTiisrEkNkCTKmMXgEsYrcEGGu44ctgF3kdz7x9o67nHyH2No6mUiUvbrjSR7H9zTSRzMrZ7mxEw1b6uH7FieJ8",
  "key17": "4Rtr2p8VwtSyz18VTWin8Nd1eqQ6UvzppCWtwwWWu9iZYmLJJtDgkQ7ztC3FotqevGNTZaniuQcv3iKY1Eg5dZyk",
  "key18": "4WfgKDJJrEAUfaPmDVDbnxMhAGCgtpYz9oo3TzENR34YMtA6RcLmt1EY7Rd6dCJinCsa74mtQsKN8TmUmZnrp898",
  "key19": "E2uFdVe6q7cLHE8oPEnW8R3q71X4VZBdiq5JP5Lq1Ggo5wudxMPiMAZSymZJteoS4HRnBNQmgCMEaeAjgor41vr",
  "key20": "35aGbSFosbbKGUmM1TGN5HcP78do2sXn8Re7nfm1XiiFLdMopcJrQjSQjKe62viqxnvyq39wgWU92YYieEoHizmW",
  "key21": "3ZWt86tvg7uq4TMRWSQ6CeHvRq9j3C7URRFvANSACuS4nHmtYzJhy5LxHjLmVcPYLvNUs7FiofitKjTG85ecgB5j",
  "key22": "65SPhNcrZowgoGsovEyfJcQK1CaJpd3yShq2xqrSxJ7TzETTWKDib1h8CHkyxEvkSDX8AMGXEvzvuzQtYZqguPDi",
  "key23": "5JAPtigQ8VkrraWmEPCiqcq9vqzNtZCSPiwKjAWCYTtzaFjriseAzcVyXsXfG5yWRSAFRxjuCKTfsE9SNcLyxqDV",
  "key24": "3soLbzt9GhkYvab7DdCnVGGDBEY1xctcNebvmkgL27VF8zTZ14zy6D2TaUyfCZK5fcqcTzSx7Xkbqb8TRVbsAvx9",
  "key25": "429EuGicJ8NnaSySoah3rFYsLykbKvL19zQgNtjYsazw54ULeJsvUHmQH5TzvLni2VanLNLYBZFLpunSZEiK1cpz",
  "key26": "3WEAdw5CASGJua6gpnCMbkB4xFnXgDdrraimzF3EfoVzF6RGsrj1RgyCEidAPJpQguiGnZUDsedNLBvKqdKAhuBx",
  "key27": "3JXLNJXEPsbcFjLq3SpEJmQzXkRmrzZHVGGLitHCxncMX6w61bPatrLFkbsZ6UqfEpnDTeLtAPXf4oWBqQzHqWRs",
  "key28": "27ma3sLHK2UdPPiPToK7CU42E4fviTF6vXTJCeibJ759W1xwyBX4NyxbsGGADdjnwvr2jTtUAsP5xTqpZQA9RHoJ",
  "key29": "5ijiqxdQZaFoWaeRKigSxySbeaTMq3LzHbHyNy2WFf5JcT49pNZZUxsgj2dg2DEfzYVJgtJuUCawibJFyWM9RAC2",
  "key30": "4x8AgNU2KnqdhrK2KDA5r4GutTuR6chLGppqRS8EEpQp12k5nHREmdacALvxqTwez7VmHDuX4BXeQotSr2Ap2zo4",
  "key31": "65WTojQCeDvwafmoBcq6ENuyCgXyfa1ab6uN2EhjNhQzYHjMEvQDbTGYuD2j6RxZU28WwfEqr9WmhzK6dW8HE7JB",
  "key32": "fDYpvWSfFXXYqg42n8srC8iNxUWW4ijdormZqqMKfrmkgGbmipGB3syZo55pTzuvHP3iWFPTgNAtr4Q1U5B9VWg",
  "key33": "2djZZd24cRgHPLqYKPXfgmXNccr5iAQW9WPpb4BcC1wLW6SPFvfwp5kVtJmzXGoZRFRzR4xS3KDSy8BQ39bCdqJm",
  "key34": "5MbPLTL1GrshmPUv4mksiitPCHLac1pkvXiKdAyXUqHD86jhhhVCLUGpsghWG9tmyHN9EdH8hYH1vqz41VoeSHpc",
  "key35": "oseWAruik3YAwB7mTvPioNL8wyTLGkNwBFFS23FjYzMLE2ktitRtsR2Yq5TQw8ph6ZAcgAi1D2Hqw5R35CGHuzJ",
  "key36": "5cumpfHDPDu1JzxCzG2rKskxBEHAF7iFkV9Hhsc68EwN5K1tSaQCZVHKaW736Njwqjx6agEVDMTonzTDo7tSgozK",
  "key37": "2Kre6MfaEjHeDppomt3J6SjDEFHrXVBtJADwnSfuV86qqqN4WfgDmMsGaeCS9vYBv6dTo1CBLymDfDesMqMJmnmp",
  "key38": "2aUMGhQGjX67YZ5xDEz4Gh7owHsV5yiz75cQun1kQGA9T5GyN3ZEUbDi8YWy4EraQQ6MUDSkg2KxP4d9yXgWr3am",
  "key39": "3ofwpZZD4f258MLTG8dzDdivBPaSxCJSfSAh6jiuWFWGUV9n2b9Eop8d4o6Ed5C38HJ42R7S6wRt7tvM7dLSK7vm",
  "key40": "29s1cuDrYK33EUe1xcNbCF5gEkSmgb7kBrVTW6zxGpogUXLeYBTroB5htbd1SPY3zTvXMGnWyF6qQKDfB8Gqyjq8",
  "key41": "32mdvKpa5PGotfiRJB8BkrmR9JCgwcag744QadZeALGX9tw7a1Ps34MLUDkfgw6CdSKMxiSCWndyU1grvqGJaGgE",
  "key42": "3pT5ZbDxRFNZWdeg9weXEfBMkDXzwa9puCxPYRBWMUeRoGiyEmVzJ4hkoVyw4PGzmCs9UA3yBW5WFVrMVgi5CkWQ",
  "key43": "37Qoa8FFEArtVvn8g3SbShMSSyCcsiaKC429667MgF5FsGBM3zfpoj8o6wagwHkytbzyqs2fLKxoGBVvLTKafH2",
  "key44": "4GjuEYoQ4Eec1FzxAx62N1QudgeeuSp4qucF733AgJ2c6SHNcErRe4ypoM44m1vxsrWGWqaK9fUarG7gPis9FEhJ"
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
