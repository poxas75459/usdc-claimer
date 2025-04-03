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
    "3trHV4D1edyxRaXDyFzAifckcDt9ChPGvdubrTqSHwB49kqWw3awGt73Heqn9DjCyUUdiBhq4EmdTdGxqoeKkyXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Dr6P9376Jr22pH2n1pNBo4k1bjM86cMij1WHsnSVd3KbkL3cKrx7wufKN61crCRJjmhoKvC76ptKXFFB3nNmj5",
  "key1": "31oJCMmkdx5V5po6bcuuyHSzPwn6fCZn3LiGZSnzCiaxa9oBJ8qMhjnueBMi5igawRkRWTsRyG8mxgoW7actpHpy",
  "key2": "2gzYRy9eGRM2B5rAzVehTCzJspT41ph9zHJ6qCAAhyZtTjo11XpC5VZBE6yscrP8ktj8FoMyKqvzvCCKf21QS9iS",
  "key3": "bedg5eNxyn1i9nbuD93auEQKF3xKDxe2ZnC3URYnXPsQZhzyzWGdBz5b69wvna1WywvFTrGxBzRjkZ1DzACSq2Y",
  "key4": "5Zeeex7i98siuC4bH4vdXdSFHJk2tWAtpA13oL3AevWQ4pCit2BZNZUCrxfjjf5jvqz32rqBNEPcRJv48bExXxVo",
  "key5": "27WRJrJFdU4nv1xxcANoJEHUmXCW4VHLgyKQsMKc1yG68NDzwjqQYEUoZVGSGyZZPcWcGtTvsvQSGmfU9Hzx7Q7W",
  "key6": "5Zn1k5VhgztCZuaRSTcqeqqbqwVh1TgcH7yk6RYc4trE5QTmS6k2MQXvy7ApXVHTsCraHmRU7qsF9EbCjf528YWL",
  "key7": "5RyoogKS8PE53RiySKFG2PtZ3KPVaeLYDRdQ6MdFS3nkEffTDpfTxxLyPFsx7u5VQ6sREakyuQf4bM2asP7UzZdY",
  "key8": "56FdB38QS8CryUxGaH52Lmtfrsa56pg81LuG8WDJ56xxTWgtVPvEERqLMmcNRVYQiC6zfuqcab73Qg5AQRwJogHE",
  "key9": "2X4khqDrFEVnLpJSVFiPjKWePtN4z1PzXSFVRji3rZAFAGy5y5wxtys28Wn6Sgjrkn8nyn3SMfRWfm3CQvSQ5qMV",
  "key10": "MpD1Spu5oEGRSV65YcnNbpHJXgqatr6EvbFGAahuAk7KnmnGD5rpv4sfLM4MrZfsJiApNgr4bNe2CHP1bq5pWPB",
  "key11": "4b8xTfer2HtZAJPMr8u4nbQkr3Aj53T4Q6FzooWGKnDnLUMX4FquM3LtVccaoLJ3DsoHkfT5X9kwzLvUWxTRakqM",
  "key12": "3QfsvW24PcvMokm5nD8zixmpgAh4pZ1eNM2o3BrerbzuMM6nfF35MssDHHL6xMezu74LmakExJntvKUCLdPRGDTC",
  "key13": "pTcWDjWepuWC8SbseKYnrdW5BBWkWs5A5Lgo2MhEGJtWEMd7Mp7AM94hgeJBEsfaaCWa6haeiUsj6DxAhQ3Usr2",
  "key14": "6ca2Vyv6ctzyLvfeGijdHfV93Nr3VAHr8a4TbT1DX2BDfLHYqTfy5oEc1XMvKJTXT7jm4hnUbARnAaRSWXhZeNd",
  "key15": "5qeuwoUWQh2dqiqUH5zS9UHMfYUFh3vWLu3c31rnZTBY9pL5naQHwz37t5iCkg7WH9NRk9fhQkkcWkd49JQRaGjD",
  "key16": "349HVKUS9RDtUWGrV2fNtAi9EJRXTmSZkGQZjbfZgoTVsHTMAdpZdW6uJLkSD6DyYwDnJtLNRe5DK1UHkwXo5cjc",
  "key17": "3NYaMff8saqjYarnwhDdwGdSXD5spFRW6hMvT3NLR6ETwsgGBc2XD5k7Ro5bz4APENDyiYQnYhVcXbsSqSnco8sX",
  "key18": "wPFhbZQ5udJmq1mk4eoihyYsPpazAgLFVq3Fyi1NvDg7kNsz6WwjRBzdrivAdecQWNZ4AxcTJtEUADnxmb4N3U9",
  "key19": "yTMzMitfcHg14uZvcvgPdpP1YpWp4HnQULDUByJCmsZAsFWsRmFheX2kZURaQh11E6x4BrxaDnD3tgD2Smpsgni",
  "key20": "3Ajb7tSD2SfwLqk4qEWSkvUmHdi5a5nJ5bN7wtvBwTbRYpjssaCsjtfoD61gjKrGxVrXzxqUizXfEvtDBvRpFLHZ",
  "key21": "4bmeD6Q3wd5iySx2pkgR2yU5jkhxMjhXJRswxpEZLf3cRibeacncNjoSjUL3w2Cj8FXDNPjLhdjnWu85Y2DiWbvc",
  "key22": "3xBCJy1zX4Q9kF6EVS9yJmY2uY7itfxDN1BtY5vbbaTcRnwGNcibFubmpFnpEfKCu9BuAyzifwUXmYQiGwWKTYJJ",
  "key23": "52tYWxnyUrgoQdhgPrbYSYJhrFWGjdy6cRjx1JtfLRAZdvC1a9E5Y5xY6CkXBY631FLrZ5rFzcM5S5mLLoENeDMQ",
  "key24": "5gitLuGs7RC8yTvaa6LjeUuWHu6k129erVgUL9pEPZzzi7ohXhEHaUEez97ikdV7qotZdyypGCSTSdDkSDENhe5s",
  "key25": "UqPPCTRWvdU5Xu7unw49zULwhYChEGFqdG87Ky7k7tyiTa6yyxLufA8XWVo6VHSyJm9JJynQGUbdMFmHvVFmSBf",
  "key26": "3vdiWphgMKowsZ6HsBa64d4UGRLBZFE5D7oPN9Ts3MuAvCg4KDzoJaQPsTpwuwHfjnndem47AQGM7Db3aFvFGLXj",
  "key27": "5posk38dDB3Tz3UFyvBYrr18YoaCZqzGRTgjaHs6ZUkhPyVA3Lfnn88EXSu7KvEqMK3h7HuPorcvVqaq9nAANigm",
  "key28": "3gFJpzbtWFyaMhzYhCnKX9ft3DowadMfabNvvcDrz4Mzm3gVBBoKNfiAooFTL46V44DQ1HQnwMX6mca8dMV3uaXa",
  "key29": "vkSqA97yVRoMM4S9gu5nDV329w7mTY3WMQ429onoBhMtZrhXW1r8wtYk7f1tUSzH49zZUJV7QJmJUQGYm98bezW",
  "key30": "4sed3g7c1X2hFV9hmuT8Yf3E8XSQ7RUbBacPsW2bW3FCCXWp7W95Ym5vW8uRA2c6yyoxnzFvPyG2aPgoh8PwvqnZ",
  "key31": "4LU5MUj2MHqccGqxzNWMg1DyPdZU8zaVYPh4ejLNSeqM2Kcr1SR2PS81LDLik6KX7jFSG8nXNgRAR6UMxsSq9kcg",
  "key32": "2wRJ8daA3JaCSn9fGe7zmsZR2Sdkyi8Ud4PLSW758z5EEd67pkrUxSN5BaDMwQTKnerPBpv7uQmFzWm2EymLQi7a",
  "key33": "5R7otenac1PHuT62iHf2r1yRYLmyxkbWcHCD1jxuN87G9qBxvmsMAcPS6DbE8QKqHcKnr56nBA9PULYs4jXqJsMG",
  "key34": "5DWSvs2H8kBVeEiMo6L8QK4JPqb23aLgTtzM59LaLeCeY59edFrKXk7a3oCaWAbDu497kcRc9fgQtJf9ybWi56wz",
  "key35": "HTpUngbbGrEQHo9kgEEeM1zX7zzB78BGBU7vVnTPkGNNHxmV5UrGA4kHLypUGaC7wJPRwZLUPaaeRmDh9ZPnHYB",
  "key36": "aXzu1NTrqHvKcrRu4YK68YNszKGqsxkixGpXtg19bdmbiSYJR455sr33YBcrajG6ndSQfsco8GTQiUiDuL1GPkR",
  "key37": "422bjBRsgM7GZaVYzCcd6uSu7hz1PhWrkAZgJq5yjM4X7bxRnykP5MhjRYpvhWCNSDzd52PerkbeDbqtvEhSjyyu"
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
