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
    "2yKYii49VnQY8d7baBMPzqAzZ2EDu7rbZwuU4t6iDdeB5kkQdGmVA9kKscHhsP3sVihoW455eatNmFqsQkdUPS5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QDy4dfyDp4QWwFFHXeJCcMeXatarV9FBzRUXtGZedm6gdy2JGaNS55x7xR1mpHePrRZQxFBRuE9Kq3hh9hedfS3",
  "key1": "YZyD2ypPRMaBVH9krANDY1poVF7DX3QU4f7rkzhTgfeqsnSSrbnt4xVY283LdkXfBfsA3xtUBxmdpVdfuqdLvdo",
  "key2": "Dct8RDfznag4Bk4juJbSznYvUC7mbDyZDdiKsSRZ2x958TBJgot8a7b5SCKjEQnkbGJvPi7ktVf6w6mQTGYEqGG",
  "key3": "2vC976dATv9ohBgFX2EPirABUCP2sFCK3rGTFbPigeSCxyktL9rV6YiMC29oBbrrBaPP1QJeeodTFYdM3nnejzMM",
  "key4": "4UKkh2ER69xtt3fh3NnCPgG3gvF1n6kf8q6KyUqk3mK6jNjTRugX4i3rX37NyTfeUAZCWHYZnJGQCzz4n2oJPQEV",
  "key5": "2CmBsUppa5rtYMRQ5FyLvaUbG5rA3QtM9TgzJVJdH4QDoaRS8YjA4bovSxmWWT9WuRBk6v3TPeLXiCXU5anjGUEk",
  "key6": "4D6y6NPmAcvGDmHx3fk7mDoYVm3dRqEKpdZaz3L742NkYaWbjK4zwqjEteKmtcRknZ5WKwF55npUVPFXTvbMamww",
  "key7": "Dp3Jfg3xs9vmqxKNLLLqNXQcDTDWB4NB7Mkx7QDATUotR3G7kYQrRCDxrfzfj9RgKEnrAihEMpKZVSqN4xyzphX",
  "key8": "5hb5QyS3wRCLe7wkdETbPSWJWS56XvRSWR8dVNmPqPvqeEFHHJcTMmPtMoLBnKaGKvu1sBWVAydAgyLy4HcYXcB5",
  "key9": "2CcM8ksYVGKkt2BZLdDvxxWhF23wXCc6r8NBRN8Yw9zDSt5yJfCn322nAMw8eANbxkuYDZ1evA7AJt8NpAkDYR9o",
  "key10": "46LLB93AEzpC1im2ppfbmNxoeKZ7USHaWVpS3aYcUEmeTZxx2Az5fFpEThacbuc3jjBwZfVdREBuReTdzfhjG8YV",
  "key11": "4hq8NAm2VeQ6A5iuuzQ8UZH3nEjkCdxq2eNf5TESvpQw12aJEWPSwYJVsC62gpeM5gdEJDcbBJUP4kbp6A7VNPFa",
  "key12": "5grHh2dkPdHTDTHC5Ji9txN4nCHAebpYzVvbzecQbJJeGZTaDzV7sc346xa74odEVJMeQbbnr9WH7PcJ5Au6E3yz",
  "key13": "445mgWkvadviD6PFrSfNkH9FsuBMgmc41WELaK6c1ZLr5f3qgAJYyFa3USAAAJgZQYPbS3Eoep11MUCHXBAam6Gn",
  "key14": "nnzMMv6KM1CHCRM126xp8zaNbzMEo81XAfzYb1jAXumPbNTnhqTsFoF5CpLHcDiMPohDdCeSbxBaUoSJwo1WnV8",
  "key15": "5j7LbrV6oLeiXN2wDv929qPn8V8xNF42VKXXrihThVGh2jcrcQRE3GtNWUUowgM4DRojcbiFdB2GLUpLwxZbt8Lj",
  "key16": "5vg18DnaAVEJnX8Jxm3CsTT1MdBbF9y8Ww9iHWv2URG4HYktX9gaLGKKWsg6Npwco9BY5CvUX1dtTvH965byimrd",
  "key17": "4HFRXpmYq1YykjkRP5xVGJSaiZnLzwGth7mr2NRne4jaDh7NbQuzwMdBKTznJBgjydPbRH39aoRXAwP5QsheKjaQ",
  "key18": "2Tic2uMgjdSJoy9uFivogn2LwfAF4o9rEvEyuASUCM7sZ5TnxuRh2RumFJ9XRBJht6PKBo9uh9Q8cTSVsQd66Com",
  "key19": "5Q63kfefhbox4ihjDbXN1jTx4ZhRcmpZFZhJABUTo4Vo81C2EBs2HCFBtQrBXyHAanuCjZVUFC3b66Xqd1GW3sax",
  "key20": "3zze7ZLYxxkUvpVJvGz6Us6aKe5K53YRjjE1FWkoR6VTCXxJWR66Xbr3qDcmTrGo6PsHTrSoWiAMfoFdL7tXWMPi",
  "key21": "2hanxcnoqD6F3WCDcMcqCGxEgDGVJqUXGXVnHmrESjbiLS938oriYXnG1EmY5yM2T67Psp6ycr2PvEtM9ituJ3QZ",
  "key22": "3EvtGUixAZtKvsouUD3yzkfwpjroSR7p4xK5EQiNdwPNpDUMwGyLxeGR8Spctphr1QL3yvVNFzzgzzdc7TWVV6eL",
  "key23": "3Q8x5rL2RHq8S5nA3mA1Y994uVCxb7cReVjuxrMqmZsioWDGS356k9xGH6GhQc4fiB1jKirjgFVk8as2cgXHrUTf",
  "key24": "2KgGTHf4N1fx3mpoYUQwhPBYcVWmZfLrtf5MSNxzPaHProjekQJE1BDpYNeNeofZ1U2tzKcxhd3EaNwgrs9c5bU5",
  "key25": "4gwWB5H1j4yS4nzN1ZwTzzD3s35YRSDjWkVC8PQ5WWp12wP2JLFoijENVTWZ3B1roZxcSjfenT5RXBZuh9moTCPe",
  "key26": "3yGfkdk6WEzs9pfUr3hXmq6f4YAoZ3ESUDH5KcLzEdJP36U4d7k8UiLxBezJNLg2swv74GTBQiq5JDSNXA421AUM",
  "key27": "2veUTgRFqp2FKM5KJtcAgoVeNciMxQvRUiAy7hD6TTHAwNcJuFHkv6orMhzBi3Es4KLES863euhKGzUqGemtcUno",
  "key28": "eGzgxV7J4rTVbJQupxZVjGMvH2VeQq46Yq5xSvzFjfrKw3JaeMFFEmcwVPDGDCw1nhvzKBnhxSorEzgguznBvRC",
  "key29": "pugik7MGc9ZSQoX5jSaQNF8zqwq9o47aUiZdo8rfncDoniQrXRZLNzQFK8847nGgUXcJHcAjwqckMWsS5LJjDgc",
  "key30": "4S5fKn3dTxmdWYTRZVg7R33wXcxpMfw72bMyjR95Bw4fxYhz6vCyTizynuecLUJNPGrMzrJudtzx1YL766RnWzY4",
  "key31": "4Wkck6VCMUsWqT2LbdtriTq4CrkPdEJu5ViGKEj7rZLpSsWD23Uq1yXz7wAqpXkshMJmtXKBXtxHzX29pZugf23h",
  "key32": "5AoQ4hVkbYvJg8HiEFePCTBpufWcUGv71KSLuyJNz38wBWLJBBmuvPKDxzf9tMJHqt2StqhECj5aNSLGdMD6PTHA",
  "key33": "o44N6DxcPYQLTjyEiLPioYo4gH8dYdVoRFWdW4pjyPKgbybZVpc44NRA3bbqTuReVXA2PEXba2ZRi2ESG1DyK49",
  "key34": "5pBpjbW5z6DQfDwm6zhdDmR3wsyW4q6K5fhsuJGEyQ2RPfyv5srg9vuCYkMjBQUB1LC5cht7FP5tNKVH9Ae3yrZe",
  "key35": "52g7HGSiep332XLn89Na1Fh9nzkdzNxdxLtsQVUWY4iLDpHKZg2FouqiASZe5M9jFGh27zGHQHQK23xSZbKaMvQj"
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
