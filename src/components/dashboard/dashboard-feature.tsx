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
    "4CTGz241M84BkdGXGkWVeF8xbwGzvn93Ne7EUi3XbNb2mtmVHJC77ipJLCumm8LcLDw6LHPVyYsUMqY1ZCnKBL46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iN518EYwHEMKKZ5SfDjZnQKZGDeNX7gJ4H4No2K2U7mJmQNDMEwEeQj9BfhSxaga4x7zdxR5xkzaMC6oXzBNPdK",
  "key1": "e5JvVxBwpYMNyF8f3FMjAUUQmFr7vC8rpe7LbugSLkkT7TTHzPn19tvNBckigKLiY5UbSixuFCg2bspV9D6Sf7p",
  "key2": "3AxFj4Lx7kAk9R7CA5skUEfwqLF4F26U38FikrJ9SzHBSKUohfriQTLnSgduLGCkWPxL6WrcLShPP87caNFLtUpQ",
  "key3": "5tkwjJ39ia86D2Vf5uZcPqALzCetBMGmmyycaSiuJDmB3FjRJvy6AT3RQEUfiuTyR22eYqSZnMv7GpGfLmFd11gq",
  "key4": "5TyjrbTSrQTDCGDJu1txJLDpCk8DjAU19SBRCe2kcnRWgDtorB4tEeUTiRCXXLEoTyozFhQNwj9bAgSAPEyD7hC5",
  "key5": "qGpwvnZ92Rkfs4jfU9wsvwTTUKYMaa4p5WvWiPQ1boQzetmuaGfKmeDnWJY3LWD1VEyKEzn7LwaCe6Uvgy1ceUx",
  "key6": "36BtATngCj6b4T9iVkZsC38nFUwaFLUJpfoHWoqHTieNLAAnSfmfEfbxhJYyrZPvRkmj6JkKFSaivw8U1NTvDUEC",
  "key7": "3Fn3YctqxLWseDWsjY7G2iceL2EvMinMNZhVqrL5atvuHGGcufF2i3AqY7AR1zqmXixoNGvnRNUNytd1e3z7y6Pg",
  "key8": "HVxLjthTHKc9crt8NzaYYQ9FJjyF6TUtvY6VVQeVFDbEyAsxJhowtGX5MDpZ7VK3pRdtzMH3mE7dYqEPzTYQuMe",
  "key9": "2FCwVJyCJNgcKR1ZDx5CzG67tb5R5wENi8UW4JyZ5NXXsvkPU9mEtgD7z86AKnUDitnU2QxFr3PmYoJhhBJSuhsv",
  "key10": "2rnPYRoVEmRsDaJ1UPpV8GuV3biUXxu7SsN7kdXMa9Nk7QWeVe4iP3pps99efboXinEZWryYJek95FEJAgNV5qqk",
  "key11": "3jvJZTdNTAiRnDud3BfBCZhnvnXFtaHFH5io2MYafB1Stre7DrKNByn7oSYjxrxr81Cp2mohenHDB3EsvQkb6CxF",
  "key12": "2shLLHwWFhrNV2CfsooWjUj2au2TwrMmgbVVi6awCp1DtEdYjGT8yAPKgTBGhN96zZ4n8wXP1P3ootx6LbdATa1P",
  "key13": "4krxrvytoUy2g2RZfaywgQ1LRzXKjyWbiauJu3mhxpoSF99t5iCeKEmQHYPZ8VeqH6qjwT91LyDGKddn4nB4aAwQ",
  "key14": "2trdJbDJzTjrD4knbY5Qvhq2rEy88UnzhrWHAyuNG5DqNbmtNDyLZsNoJg8PNDwHrFNCN3hWwfbNThoEMUbY8j5z",
  "key15": "2CPGmDGNS8aaPu487A9xU5bbUBQMGkD4XMRGKoGPK9joyLkTh2Cwk1GmEZAmPnfhuvK3s2wFrBbrSE8VvRuwEF6a",
  "key16": "2CP8ou971fXh475LnQVZGV5rwAbeLuA2Mf4weAf2pnGEeH6RNiDsTRtALfmhSuzRiEZZT2ZnSQQdx2KFKJqL1edH",
  "key17": "63cmRed3cU4SdHbvty7qYS9Q2vCMjLdNa23yYz7bttVqrzRHcXeb1K3KtrBvHdt2sTeb2Zz2LJznDAdDde17mrKV",
  "key18": "4gQWNEDS6Ax6x9yuaggGgMh5b8PXFxpy3b5PK6AjSddoM8MGMAJCZ3GKS3nC1Bg7niQkUuyo13USfF4guGVKypVi",
  "key19": "4LxC9zsC5hswjDJ6ZwMVomZefgjN5HUQMeYTGbEHxDJfY3sJd7Roj532bX2xdVrMdaCPjPfzv8EpNyuAJJEhdkVk",
  "key20": "42B3nCuMnJ4oDZFZFE8odBfA86x5HjEeH6ZnM672k8eYE1WXuheQoncyXEVZAHnGuiVh5zTcT5b64n1zUdPCh7tz",
  "key21": "65fuq7T6BzMz6pVp2jFD1o24aL9x8WX5nWDDuwC7TibVUCqV5GCFTUHXiJ2i3dRz386cHW82qFLU9Z1WfircqsDy",
  "key22": "2Buw1U2v8VDg9pYSKvmvdgXwBrvSm9YYoQ4pLoBttJRX1eDppmRxyNWw1uan6eELkxumFZ7GJKEgnjb98cia5Cbf",
  "key23": "u5mjU39SaCdTvD6VhW5UydU5yKzyHFyAfHcAAcoQXsq6JeR1TS61PBNNVDBJu6BeNyWiRonfRq6sj2RtPMLBX8B",
  "key24": "3psiGtLjL3PJ6uCU49xZwYYPwQP6sMFX2EGaPLGT1bb8R9Nc3t4JCTELwQbMWfuU1ALpEwwNuEZXhG3MedWNujz5",
  "key25": "4GstkpnFtLZBAu2vbCqPoTyhG1thbvcKtuyFb8hmZ67t77TfRGRfAz7hTo7c74cbRhH1XUF1hwpYkGbHnN2TtHpb",
  "key26": "qKfKXjofD3ntbxvUMozfwndqnBf1HUUxK2E86jqRiYti5FxDzoDniy59mT6WYKeSEQFbwxVkwTmobp2XmzziBPB",
  "key27": "2AZGGqn3TkNf7FVMAiwKvHLWnT9rZuFAE3XTbEpPov6KzchfXpwNYSt7Pzwdgd8RygTFrSkrJtAMKuGdQcaog3JB",
  "key28": "jPoYeTjBKTnbghgBeTQALmywKzdhKyZcWbY3V5hRNPxR1jHuXyoBQSpy69jhW2o1GuxmFJ8XfoeeLgnHmk6JRfJ",
  "key29": "5qSHKg6ynDC9rNtZ46vAhcM2BssEZhTd7Vhj8KDQhtpnzUARhbkP4fxw4QR4BPQexxdH6aSEXrSJGA6AnTy3x3Pz",
  "key30": "5crDWz83EumXsw3bbuuXa4iZ8a9Zw5yPyiikAjQtRwn385ZTfFrMZ8JJHjhWk4EaZ4SvRp1cT2MMX7imtifjo9dp",
  "key31": "2ETX3hQVNHbTdGM39uaevBsUT5gSfe3J7yty6X7C6mH2TkjaYxeghqT1wqKp8U9s5YgtYzcgshHWCL2RhYu9PsSe"
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
