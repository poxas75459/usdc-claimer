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
    "34Mth2RTVBiSMAW9QqhTqGsXPNM4eaoJtcxe3VxNnp94nerYgrMC4FE9cR78AnDo1SoaSNneRfNznusrJg8nVeQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ADaewLiKQ1K9q6xmgBL59NV4EqdVJ1uzdm4NfNHExos99WeeamyM3vkhVRQ4XxwHZXLLWSBLrmyzsm3FDRp9djN",
  "key1": "4uUkLWSCpK6PuC1GN2WsA7oJKvNYK5HnYnrzGvjzAGr1XhKVVdt59rf36piFTUHJR3rqeepSs3dBKZME6Aq2wJ8K",
  "key2": "3s8QUxqVj5UFMd6kbJmxBNQcr86FmqaDMaZQhv5RV1yLYtLbvsECcvBayqpw9jvQdvW6gUyjs1y2TeFb2pQiyRFP",
  "key3": "4XDHgRQkm8dWZez5Z8mdtytqdK6DZaTmEg6V78K5T61hZXwLVMRBd7AemeRQhwd6G45raqcjGWrUVYnhCDHvDT7Q",
  "key4": "5LGaVFnLBt5BG5TqCLALMnDVT3yVTZKczGWLGHGCxGAPkPXj5FChz8cJqKxCaQDxcq8kmsDzeTBnLP5WwYNxHwmS",
  "key5": "63cCdVvwuxkPcPFnJz8JtFX8VBWxQpP2uXJYxWg2duKdSUQTYcLV5FHLUwuwvCM9xm5YdKR4ekUpxNSZX81iUK7m",
  "key6": "5shPZzddHjsvuB2HFwdkzu1onqzvNZ56DhMRY84nBshYJ8uDVedL9DJZ47P1Vfi7qu2nFujjxeJAkDdXKcCnoAD5",
  "key7": "UiVDd9Ap1yAUr41oeJwhn28mqG1YEjuqJcgAAGV1diVRXDH9fBJBRX2DBwQTNgBvxU4i9PEQkkYEbEua1LzVD9u",
  "key8": "5u9ajfyWqSBaVhDfmdESCmcjz5ZAnsTbRhqbsVujNYszbGUjkGLzfTEtikmbMsizVTSJv5XhPnnMqq5HT9gA2def",
  "key9": "22aQ8PWgghr3ij9KLf6pfC5ZK9E3woHenRmpdVy1Q3xLFHqwW49e9RphA88EMF8XKPkzK9uPWbyoRxRv2rHEdveY",
  "key10": "5RZo1pvASvcNNFk9Mh1BrS5iFVNo4rqxXfyA1CoGXMPdyevPdD5GxQDpvx9QYSzUWLB4eUfVix1PMH25bBCLAba3",
  "key11": "4jJGTkL666pKoGfbjCqA2tFn7LqaMdCQYyfCpr7np1n4Trw7foSckdMUM1zubjDteun3451MwKGnovEf3vhBq3j6",
  "key12": "wvbWjxMLumH6kwFRjfUoTtkKBC8WzfJG9pfbwBHkfpWS7HqgN98ymUhLxNRa2349YYiWw8vKEfNZdzpFwwn3fFQ",
  "key13": "58QDCWgREu2df6jRP4WTBBTFhtVxQTRrraLJYsfT8y5SRKv6AFHUmjfxtNH8BwfUHCiJmMmgpUTmPuWSE7ZZT1vL",
  "key14": "HFyETEmvNzFYDW9TnD915vBHR2hEpkaHqaF2UABXk4mMJUTypWsGoVrRbyCzUU6989gj2SLLeKiCWJSFG7ZtmbK",
  "key15": "2a1PaupKmn9akmDqifnBSDdFBCky5mb95VBwisfyGyfvmSnEwFJmUA9DPFEHH5uSuADaSCPsyJPUpXcMBXySYssm",
  "key16": "57KQ1qFjJUbugUKKtrXbR438qKPu5rm2iqXGA6iKg2iXF85RFzWy2xgZxGm2tSgWVGgeB8cisTmhsTCpqqWi1ReL",
  "key17": "5dmMMZ99D5esaPs6Qvd5ACFaLd2iqugCHY47DLPU9jixwZAN4rw48C9N6y7fEm3ehjSSpytLksKfLqj3X2cz7omu",
  "key18": "KtFfbxszNZXBMYr6XJ3LNLYaKjitntHVt1sMqFTiGt1giA23iiPzKS8XYUhUGTuFYTkuBnbh8qtxEvFByaVaV8c",
  "key19": "3unpmsjoQ5DiDk22bjQce759NVjWCKA9pY7qLm5MvNDrcDmVWxX4iV9Jduo1Gvcg3aF81o94mH1cusRiQ4Sxxopw",
  "key20": "2ocwyvtoEfEq8ovgmKStc3cfqUTge8AStycXFz8ikpweocK6us5zJrYSMWTSGj3quVfb8MFKvyW8YRMb8zSbhkDJ",
  "key21": "36t7haaNUW7emQ3fdoQ2RzkyM6kZg28jtph3Wz7CiTuBmzmUQ7PWUysSVfwZbLFeSTqNsiJVJbDFMhTFzc1QZvPX",
  "key22": "ZTqdX7u5ZZ2syraTSEXZY5sex9VFFJPzbp8am9RT8x1ffdHDkGAPZAdsmXMeR8T5w1D4vCg7KG6yh7F1wvCvFQt",
  "key23": "4tTm8nU4dZS6pvmngK7yeKmiYszyw4hgnVQirEgDPUrDK62NhEtJLDJevD8WR3Ug35pvUY9bTMZr1Mtfsv6vWDFY",
  "key24": "3m82RJnm3LNaWtLjDGAS5FGYCddnQz6PvQXpwkCbQTFVZCLq9TQY4QSr3Y8g3Rm7GKSspUzXxFjmuVv53KygEfwp",
  "key25": "53ACFK3xZQuEasZjLHQbLpbaoDRicPXTiiCN6ZiDpAzX5b6XQNJyoskMFCUoc14BAgxABxKe6KpLRHexwSNgzhCN",
  "key26": "2tKfvZTGzeh5CdfQebLk5XQw9xaxJASN51zuqJP3KDmJxtiPpgqZrNSwpwDxJjwxtVNwJ2eMJ6Nib7h6Ab2s8GEG",
  "key27": "gBzdzFbWnCFmHn3hdABs7VbTgxUQ8xAxtcSfvisAyU7Ed5MeBpjWa4seFdiJLQ22JhLQEacymMtxDAZtNeR4Kss",
  "key28": "2eFF1U9wN41J7ujGrnbqzh9oLTtBGJJGsyxnskLWea3M75vdmzoYN36XpgXCthVm1r4Ppxe67bxmurHgMPYPviUi",
  "key29": "2BsRdVovStV6VNaMLiTk46DrCppgaHYqjq9TpZnvi5N1eaLwiLYbmTLrBPkF9KdDHqKHjq6J1V5foXRTpoS1fTkm",
  "key30": "2fdbGXstDC79fYVV9s9xfHmUjoT7yZnfXFFCDuzsat4gLcw3ko41XL12tX75fuZ1KMcw52vcnwJPHVdeGAt8upDx",
  "key31": "3G3pf3uBTPvsJenzhM3qJn1KczxmfLdeSi8FkoM4QFudsDNcULDN669C5BtDvvjdEL4jD6BuR3r7ZTuwNnwWFWYL",
  "key32": "2jyXBP8osNeNLYt4qCaaqbc5BQe31vsk1itAqbm6BDaBYYpFndJ4v1aemV8pHC4fWDBon5w8ggqkWqTCHhMpBLKz",
  "key33": "3E4kXg7ggC37WRg7NbJbFCuGwrUGjtmTUs6R4YTudqDeJpsPesASvGLAKybLeJC7arYZYrDcoKUiMg864UM7FUim",
  "key34": "4fcCCBaeBEKJ1Y7TKujMob13D8MUnjHPQjpZh4WjyVt88x1KStJGgFq1Rpn5voPr1wVaD6o7txAu123LZhHjfCJS",
  "key35": "HoSeZ26vR6BcHtha4sHQtcLYG7kzFCWs8i1ytbmLNb1utUegiBuArcn6fxZzt6GHF2Vq1HzXzhmr1rgru9nEa6U",
  "key36": "hC7ihJnumRsguCcAPuXEtFb8SVBiSB9Ao8bJ4C7shZeKRtZkTnLTKVCavHsLAQNHXjuZA6cnRvYN52UPTH1A3rq"
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
