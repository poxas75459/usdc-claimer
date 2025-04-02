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
    "5VGwCMe3fMDM4G9XLfixJPksJCdoBhR3wr52fSU8h3NLj9rpkRKMt5fT5WntC5WMnxShDqp94UXZmuH4AW8GKvmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FeMj5LYAVwACjjKQHxgvcygncCcStwDvXAR73vtrvyQPtS5xwxdx3YsWoLUjsZucn4GQ1BeFXRyUKWBuSojp5U9",
  "key1": "5hmvHTVisqFVN9y3L7PW5L2YcVw7maxQK2zrLJ8m3bRU7tkbg4rQhekVuyBBp9Dv13L8gpjYnZg1N5E6mY5mL3g6",
  "key2": "3nu58cYP4xik5JtN1n6JYqFsUY8fXqYADwPJPfR95TcZ5nKUgTwntNCDQiFaRWjzLigKdVPfDfNCDPcTNtjFrzet",
  "key3": "4X2FRqaEnJGa6z1hYMSCMtcZbhByxWseovMZF737qdrVgJaGqL7sdnzLdhSXUNx7J86fVVTLbBCM3QaitgCdh1s3",
  "key4": "2QnREudi3efCCKqTdhwKFDBJKmb6fUfWtizj8bVyCRVCsmM5k1APe4oMsa4gtvx4AHEPLsgBGBa2R2bjmZEYjLKw",
  "key5": "4RXv1WZBdPgmrKvBGVzXJ53nMxJpzbfj4TdpoCeRYDwC4h49XNJyMvbtHWyzru5qD2kTJczyGuN46eE8oYJHoMFo",
  "key6": "2KV4zLEX5oSbMJhjXCSZUt419YFGm9N1SeqfbPEfjBx2kFkbRMi3FbUqHCphtxEvdF7DN8WvuPm4zWN6HaRcAsy5",
  "key7": "3wABKh1ZZKeBa8NSUYvSqME5KjFLdZywhFww6dqA1mWptAouyaKUjA2FadQEvUGJeXPAxEiHLndfcomdeLgKZgh7",
  "key8": "4HWwPUfbjE8U65uGZQhojrntWDevgMdmpx4u7QhkAhnfstmkKPMJK1PkxEWy5kEJQnKTBM5LcRyZTer3ut2GXcGi",
  "key9": "tYiyxgmJQqt3Ffjdj8XkZZhPkq2GW2PgzLnzg2SD6jyCNYZFdZ3GuUuw2FLaAxhd5MWvJjJ88fjuVkhPzPKhCsB",
  "key10": "5nVu2QsghMRobU1izh2ZnDN8rS25aJdYtoXDfr7jD34WZV1bKyPVGepEaaCGceBKiXXXwXu7f7R4RADWaPpB3mED",
  "key11": "5wmKxrND29qhSps4JntDti81SNfEkDY5W3Cu79QZbpGHE8MjChGqMLkP8Hcuj2AHELnKNP232JACu6DhVouFFeBM",
  "key12": "9yL2f5SJ8MhNGzBvD2AhWFSRXQnPiegaH2RsmTPUXVF3H6vxYeQt8SP3BBGnZZSBrhDb5oyLMZsLbzSoeQWqvNU",
  "key13": "3x6ncZQrYYCue1RcPf23YXdhhZHa5CE8cPR1T6tgYdD45ZDj2EtoKbf7Q9pPaCC8Gx5r52eXzZvV6dwAt5ZPjR3c",
  "key14": "JksJ4km4dH1eR8n22FJZZkM7ciTrJ7DWXCTWueDrPCPCNVZhYc7QiNaUUy9QHmGt6KrCqWXaiHwJeX85fiRZ3Jr",
  "key15": "534T1GytAFhZM97bhY6DK5hCCraByApKzHqy2Fj65WZoLHdegXZv5BRNEr9ZJhJPDBEGBEew7CTTx6bqbUfwCTGH",
  "key16": "33nmHtQTsY9LW22qaFzUmwWU1gDTaKcHzprSrXkeYAqf8WDSpPM5KodpaWcVEgSLJ6iuLV7McAGCY9ZBgT28SeMj",
  "key17": "2xm7XE6BkoWaGZtCrawJfXq6MfuEJnx4r1j33dABzLa89AUZm2GJMPscos9SxKWBDYqz68NQUHz53Rgke8b5BDjq",
  "key18": "bfR4MBA1xf1HrLoW54MxnmkWVo3yKTFoUXJABrNQqJkPbET3TE76aioYf3HwcPpyDFo4VMBnASJ5Upu48wYAywX",
  "key19": "4ZTeYbeP4qkGEege7hswZYg8LUBE31vEfZTTpNko3jZBDCAVAF9KjLg5hjGqhG2s79RHEtx8hn6vtFDGAoSnqhy1",
  "key20": "36K3TH6XHRMrhT9M5qncBjrA5yXgMErjLPf5CTRfy7Uy2niZZqEXhWf3Rkw8riAWFTxW8g3z4M5f8bVRsPYFu3uj",
  "key21": "jsfe1WEcUeGoMNf6JBoakns74q9Re6ik9PzVbbx1dbBQo33A3jzwMeD9DPrvHPWnsJs83eUVR4HaXhJJ3uMgvm2",
  "key22": "5CzUrbeWfhsE7iUyX6PiZy64uHfEnkfK9RNeZ6vLZ7aAhVZSWGyRtnoWTqrgEBEd4DoKjmv1rHWgFdgsQ2yysiAi",
  "key23": "B758Vr3W5d6UsJBghVci7fCZ6VP5TuTSWxgbmeLVAuEXPvgi44SXTk8s6Ehk5HZJcNfK2ahdEUQaiCMUZdWh89v",
  "key24": "44XpVtnXPbdDtcJDFwa9zgM5uyqNaMu61oGba5BoQ6DaeL7PBLEw9bQ2JHK5ugCqsFxM92DLGXwWpMuTvhJHPEo8",
  "key25": "4Grs84UHuS4k1t7hDdMTM89jRNyNNV1pAxmqEri3CrJdbmcQEeSGtrPdwEzFW9HwS4C1ZFrEQK374usK3MNgoKUA",
  "key26": "5YsjmmbUCbF1CRNLKDq1mreWpr3y7YCxqjVL7tCe52ug5UrwGE16k1stvA6imzMMGddr8UTktxwQzMXcJoZxvzC7",
  "key27": "TvjyxidLkNN26mMSu9FigPHDFVWVWcY8Wm5ohu2qzc6BruRXKDmrtKwqa3oPwtujKW2nfGDLC8V2JV9KRVUpk2t",
  "key28": "Z26mESeSMR8MFm2pV2e3p9nwN28KuTPxoFJ1zGwf34HWYAYnZGEJDzXBNRWhh4oc9CLWyrJPC91xCiYQsiwovHw",
  "key29": "4JkN9QExJBuMTyuMCwDWQ6t5WTpMtwJFWos7mht5W8CTuwyQq7eicDXhcFWy9v2jTUTmSzd3xWLLdfDt4i3FWExY",
  "key30": "4z28AUiGwPfhynxpsUEpF7iBWdLAHr8PkEh33Ri48C3PLyEDxAhR6vcRzNQbpaLTKVhXqgBG89AT2dKUoaisBmXp",
  "key31": "aw3PQYgHZzvoiBS6taXguLZoo1B2axpFoPn5ABTaHpnTimVPWbEhAcnRZmYPJfLZTKxyCmjTvGAwrfDTg7A42v1",
  "key32": "5X7jDRS2mH1gJhhFvodAxGNHNtNoExyQcGoZJ2aFrjgpe7CdTZJfB3fBnWXz44gQJuP8BTLfH1wvX3FJeFE4e58z",
  "key33": "5WMYDVGRDXn7xNjHaCpUu592QRyasbc5YpKbN4hSqse6Nn9SMazh5rN3W2Pa15jqZS3tiVrmV2u7ib2JP8LCfFVF",
  "key34": "5RDatzNJLA4z5qdift9y7btjmX9s9frbBMk2CxvENF6XyVvtYEBmAWaxrJmFTqEdgBYowPgC8YXCMnRP8H7Q1rFL",
  "key35": "4Ahwp71pXiyWT8bUMm35GjaqAEY62TJB5KKWqHTA6tsLERkJpfZZoEY9pbQVY1KjdA17tsy3xqTf6MyGtg81nniE",
  "key36": "VSfZoVtQvgfpXb6TsyDsLSNjAL9RNM8cKhBtAQGRR4udeES9wJty4HQFaH9Yk8cothpASWvZeaudaRnvxqKLNSE"
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
