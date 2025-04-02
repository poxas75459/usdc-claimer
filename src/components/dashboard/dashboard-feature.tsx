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
    "3GQYVfUVw23jfD2j6A26CsJTiQFCjQGxNJNANvEzseRB2H8CrdqzsaEQBVSgtXYP3s6oi4Vi2XXJgmK2ZoxCJWnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32bx26uELet9tg4C3n8ngkXk4Ma1j7RyC7CHsHgDGHNWvMmnwtMTYf3tAvpyb7WcNfMNsWgNiTTUSbxRtmrQg5yG",
  "key1": "2E1xYx8fzfnbtLj9ymm6uw2u6CGg1uk31tGBFgGviMQaBjeSe7sYqBJgZNpX51oTRPxsdawCCEuC9Tde3xCTgBxS",
  "key2": "5TTUuKyhwcmLg8s5F9kAqKPES3bksnbfCgtPTAwhfx41QuThZqwrfuHkCy83Jm8XaNfRs22x8VUfgGq3fR8n5Cqs",
  "key3": "3SWS6U2ipzXD8eAaHFHeZkMX7hCRGkyMQLxdytWLR8p82p7E73XyMgfeeCFoZoUuWLsxX4ZePoHbLj2VLZDUvGAo",
  "key4": "42prBj9CdQLFfhUJm8H3jsFLENErjbQg2jLvkeh54NNEwdng8NAWtMpNrmNPFH7EaV2WSjkRinPW6vahcvgTpHiU",
  "key5": "TcMPgxH4HTciRhHCJchoGeCh4pWG2FqXd1hEtzTeyxEHBfhjjRSSqVgja6y1BtqRtHXM2fc3ZTYgTGTkR6ZjyrY",
  "key6": "3VZYBpb1Ht78uwrV5dNjuD1B6KnDkXNwGbjCwaX9Qtod6dB5FQCXTi4K4RL9fGBP5mLi1mPimvYVmVA1vrqmg7Q3",
  "key7": "jsUrk18z8KTqNHpDU5fvfjJDDnCV3RuWv4YbMgHrSBLwkQeaoLk6LAuCksf2m6Ss2teXMX6Qg7zwJSw4BDu1YfU",
  "key8": "27u6kA4UQgrWkLDLXwiTLR4u5dkK2BPHeZfhv4r1s78aW99ZEAdG7wcwX4heMURWPE1W4vPksq1u6DCYq3eX13hS",
  "key9": "32mrRUQSoBV3Nek3Z2XL5zjnuTvnwKDwMZQ4VDPEMbgn5Su5LkEQ79YiB3pmdMaByEiMP6GtPp3mV5GKCVjeLC8q",
  "key10": "gLfg5vXJixZvEv8QiYB5dPXrfJEjjAT4jmWkf9kHwJU2nKm5xkaRHxN3o5aePbGpuwHr5Xye1Dvv2d79WULj8Ww",
  "key11": "52HLhstBbHkkwK7H8WoYLFo45gtRRFGjzFz1ZJmURGctGbr3CWiDtCdRia9HB5ApFeksV8zs97ozuj6KrmHA1W9i",
  "key12": "34TMnq61tiFkNz9vxfwYTsUUSJYTTKyqYQFYyDa4HRUZnCLpqHHr7KAgRAtaQxoPFvpRSsVErePEp8gDXkDQb9Ph",
  "key13": "nD8Sowcjt2F9bVyxtkkpjXQboz8BubxhKTUrD9AAwP6Qwa5JW4UxNZUW18ckwBjUkCyoEr9oNVrj3ipk3GnnRiX",
  "key14": "2rfhEz4Uwcys5gQq9a6GCgtmyb6nfPxWUDsxKVEz5T2LdbTEVR3S5Wf8FEnoTbx8Ew13HhNZe6RqioUMWvBSfu5E",
  "key15": "2us1J1VNHfzcnFAN7Sxewady3Zzyrucxs5MMVJuenYThUiEod1kKAbFupBJFRjFLPNYSuxsvnuu4nZniXGRTECUV",
  "key16": "4HqqE5BGg6mTUpp2XCqCscaFHi9Zq8pdFPpLka1NCvgcVhC1tRqUAxQCUMK4pThrSo3px2wNAhooNaF6meRYhm5",
  "key17": "4njBzEAkcKN4n22o7ZdXasTHsBLuUQZNXiUtbqNzwWWg9vNLAn6nGfA1Jee5BcY1JCCGaJgGLiDEwGSYHdiNx9aP",
  "key18": "FifLzAENEBHZ8fyqEU1j34ewnKWafV8ezvm4G4yG2rw3GPeT3A2MszGs4rpX8Jzkh3c799nWGas2JGUHqF8TYbj",
  "key19": "2v66HsHYoShEUHGf7MBN3x8guSfiP46ExbiFS1bTsDEJkPmycheqhbGu8KB1eCLk64gEDNmB74Th7R2CGRE2YFU8",
  "key20": "4x3in7sYHyhfSpbM98uQvMG5k9SNMd58RUxMDyp1oSqTCVntTnuQkUgCCnZ5GhJrJZNK1SEhuSsLQMMcKMrevbST",
  "key21": "47aZifRRxVUSLZw4A1FkRtF6A6JKu1YGRhiTZtei7iMdCboENEgjJkBkj6P1poToPmYDWyKBcVUfU7FxAaTyKTdJ",
  "key22": "G5x78hdwBrAvKHGx17DLcvQeaGSkc5BqLGYreAg7SCijEYB6TTa8vMpZ7cvG3tPKXtWTGqCpeW5ibwnkeFeDTCf",
  "key23": "3vhU6XZQzg9GyrdwCgGLp2yPphwcucjpLUpjPZJB2BTEtLLa1vmH2YE7G6LXaiymNaXj47XivX53XL1M6WBGGKgi",
  "key24": "47yxm3eeAXjr11ao87Cuimq79AQrkiwqkbLSjMPXX3Z2jhq6PkzgY7Qo9iMrj4DFUESykxLU1M1d6Qe2DTsBH5AT",
  "key25": "59qcREagZjfMdsd93WWQkh8E6iLKqg9HhCbLeGfAVMQFDhBpuveUtzvUNiaKC7KWx1mj77tD14pgCgvrpEuRBxWf",
  "key26": "2GsKPkPL9imjggh5tzpKfMimgWQte9EeQoHqScr44eHtPks6JgexUvi3wfuPS3KSD1ra65XoXpNe2MExJCX8LD9k",
  "key27": "2BT8xEWNgxBDjbMEa6zwsMAt5m95DDn1cf9v3Vcu91eq6GzgHtTvU3PHAFFWhbNBDgKp8GUKJ28WpSipHVbpVav1",
  "key28": "3E5JkKY7Az5QHYFFfbpHa16jKWWiuNDyZejRqWmLGhDqnQ5kpnvzCX1L5BkS1xb3KztmPpu8icJ2yZii2Q21tQb6",
  "key29": "ziTNEiGNEzGX4JYpAp1v86uFRp9UsFcNKgJMtjogh3gGvH2pYAK3z15BTPPimgHFojAnXetyhrScF51eJCENDch",
  "key30": "63uzschLQEAwzqip65je7uF1F7SwHoytAazf4mZmaeN5d98F8oRmaqNX3BeWnynTVWH4Y2ByQEKgMWC4EqAfKToQ",
  "key31": "5tLjkxRajFhiB8Ba1XE6ae6tC3ptqftdpyhj53f3Px7jBttcURKWYfdK5rYaWfgWV2J6N6Qk4otvqd2kY54Vmfbw",
  "key32": "4gcuXvTXxTCfhLhwDPLyDMMapNs6AhR1CQP3zGZQu9VrTGBPwjszQGkuCwAZ5BVFHzbMSbws3rQHW6dSRHgJhGts",
  "key33": "3fQp3Z4gcck18BWozXdqYZq1fvoQxARrwd23M5tGr2M4RC2kd7jgeEz33HwSKqs8NvrfuEYrva4ksiSY1Vt9oys6",
  "key34": "WQrNCP4GC4B1vStNVtweDPNWE3HdE6FXAjJ852g1QopTPHgCMAheAZL2rM7jGBmsnDKk2ceuqYUHsHRKd6kreED",
  "key35": "2waDB2TzWik2vncRaodGbWCUtMWYhxDa1yUse2UTAHF5D6cG6DAyS3uRGdoUGrCS5Qo3eXvw9AFquhvkcbpmuxaq",
  "key36": "3u8fqGfgMY2iATdYGntjmRTYrdJQDNiQ7J26JkmcauTcvgJtGJgfjkjCK913farhnTwF2Mn4bL3MeUtgUQKS74Ef",
  "key37": "31AsjKULaNwbkRoVx4bGXkDJ3iPNMFmEWmZX5n6xjKS7D9spZ4WUTEBh91kUecgntTNdQGBTKKCumzqMwDW6ZZps",
  "key38": "tGBr7rja9K2MbwJWckfX8u56p54PistoYpfy2tiy5nXBu7skoPxvdPfAPURots6NdvECbYbVaJgg19YXjuCgkZL",
  "key39": "2ZweDEGx7BYLK5s1twvFJabWa2DS25ffthPUPJhQ7bbipxQQDs4cgijU1qF8W2tCyGR9oSj8Zt5baVDtqqjGsofz",
  "key40": "3poEt41zxy3CDyAEepHRNkZNcDAhnUb5zuY6jpyfxSgCkUMYK7feRimSYXKb1UArjTitc5cJkF6oJWanQV1vYDHC",
  "key41": "4mXvW6mmjnDSvjvUf1UkxKhkdzRSgCaSHpRoCBL4GbURsQjEj9vUmfHiCv1TkvKsfdp7zMacGgpn44PPVvC7nCX"
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
