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
    "5SFCBGTWZqro5mbCkXo9WSF6em1VPHn1rZqswSC8UVSfV6uRNqSorPiJFEnh7Av754ovzPiAFiokB8jBzN6mm4NU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MhGTLWZfchCuoRe432wnTLMSPheqfequv5ufabUcuWKzS2egsmWipZ8vaTFvPRwXmjChSP53Ba3NjF5zFyh1miB",
  "key1": "3g3bNJE12oVSnQKveHTBq4gWRXfbYQbTRQvTE5HMRg8T2y9QMeKv7AgumNAiX7FFjWgdP2nbieQ6EPSBQ7DH8946",
  "key2": "5Fmb5N59P8EynhP7hugAFetQYnVeP2kpDyCXBXKvMJRL1rRsdbYLkjKgDqcMP8WVGDjhMoYpemmxnNUP5mAvsqCm",
  "key3": "2EddikiSDqrnR8f37BuUpZNfAcJQPwrqmsVY8imjv8KF7vpArzxJHVjyQL7RSExESt7KjYX8nWnVWmdNEG4pVLkS",
  "key4": "3YshSGjbz2TeJfZL6rTrPvXAv8sXbZ321xRwJGxeG1aewLpgXHqwX4Skgt46inHj4379nC9kjCaSaa9amKjEEfkc",
  "key5": "3559ZwfzXwCqvDe3gS6FNtC8jQ6JeyidZMkgo7iyueRtctcgQcLmo8mCmezcjtLoDJTZigPz5c98WJd5kM9XrsuZ",
  "key6": "5isxkf8uzXACEkXP1JCvVnrM6FzFnbJCr7fuV1UQcAHV66UeWoASdEtPpAMTE667MdRT228Z5z1cdXC7bBBbxYcM",
  "key7": "3PEhE8EfRzQab56Lo7VU4KugNbtdigqYrRhfMbsFCxftnKrkHhSAQq2tNCGuKPcZnkAufMbcKWdMhhDJxg9eNxwB",
  "key8": "66zh7nYtukG2mJ5z1dpzeSFW6ATpEEe6ZiV8CoZSBw57kCJVTeaZKQ4Dw1wHtp3CHh92Zd3M8hK9s4x7fyeFpZkH",
  "key9": "2SSuzdzb2yQN9Z7BqAqYeNPbQ3CcsdhJv2qBZ9UxdytMHHjwxcvZRuTCc796SJwJ7paCAtMwUzCyw2TUD7CgnH3D",
  "key10": "2op2PVfHK5runpU1XJkhEswv2pu8xa4xHzoJhptTtbXq64tg65mkwpbTyrjMVithmrrrBK1CvpdUNv6mRLMmwBvr",
  "key11": "2v9oBS1yLtgVN1tXMBrLu8fTBQHsGtbSWD959VfXrP52DGs3uVitktq9Nztqm81tCog5vSZ4HPG9oWKoEWC8pxQJ",
  "key12": "3HWgtqV7rbguuWF2P3pAf8vN9GpTwCtHBTSVK1FKNgVi9cNbSbNLXewCisqC1bu2cttTRpuqnTrwmXngshrT8Ltt",
  "key13": "W52RsWgtaUCFsBuRWbEqodRKsqeVZQiituWFY2sY8SBkJyKdroahJ3EDa4dDFq3YhvYmPZjhCn5HjHEEjozYL1d",
  "key14": "PW8Xwo4V1izeUZej5R4DxotqibDGNybSo9PkirPpqXW4cTb5Xa1Rp77QThRh4opxnYMAu3MHQ6aBQxh4i11aUcw",
  "key15": "4CGMs7aGHN15QDttoKrFXZ5zHHAHRp5ihHRk7LKNGqW8uyAvV9ts3eMSmrJ7aypF4ixf4GgquDHxiqQWTLHXVz2U",
  "key16": "5cuvGgcghavSqjdnXVddTPFPYhmhir6i3rAyF2yQsSwZ3Uo4fKqmmfcsutqo1DkV3BDxCh9PddXU9NomeHjW2TPD",
  "key17": "2YLyGA9PzuCUxMxrzQGQoMi3KgFEdCDghzW6UjRomWRnsoB91ZitoWXJxjuyMw91aYrxDVBMurBE4szTLirRxJHs",
  "key18": "66CZ2yZBi1XbUPLPt74d3BYAEqQjbwbHAmtNATgjtrjEbyRbxzjeRexMCyRbv25XRTk2K1tmaBJeorzpZpUQwDis",
  "key19": "3XdNNmSK3nwgpJvyjqddLvbEbrSrT3Rav2DT8FgpJdZsrf9wDUJhCsBE2zcmRYpJidMPLtuDUbAeo1zqPGAynoSr",
  "key20": "P6J8v87hbZDnuGdmZP2KsxN6UD3E1JTN2z2kPvFubtxiSV5DNfJnYJ5eXJNgnQNmP87oEHB8vmSLvCjsm8GoXfJ",
  "key21": "5kAFUD5HxrgXw83UyjseGbf7FVpoRSzVbxcrcg81mzpUintMfv6s6sCpTXLXP8XTwU5unjdW2PtXCE8XyrEWc68F",
  "key22": "B6svwhBd98JjYMxk7Nuqt2ABRfu2MSnjXYr4j2YTRUKLT8Q4NbENWo6YU4NbKhenEkBvpjB6jtopTWvF6ncp6Zq",
  "key23": "5mKuvcs2WJCt4WMrXyufuR1uk6ZKXYML6mBwYdR111oAcoQHyhP7YpfudfV3o3Cju1PBAimdBNmgWQd9EQ5ntacG",
  "key24": "5ThDxMG8L1ZvFYxUDwBNUm3K4UfCRVuENDkqjYUqed6i3wkcYybbfHn6AL9QigPC2wHMhQ5nHqc8i4KcF9bzZb81",
  "key25": "2U9grh4jdeXG28FHxiXjQ5yVMuYyjEQtBYpq5KiNesotRxbsTy2WH56Hu8sQeyYukEjCrb6Nxb4wJ1LxRniS8eg1",
  "key26": "woCx9ABz2m5aowY42o7YWoXprv4SrgsVZENmFiK3PZp46T7qYQNiFB4zE8rQUkWpvTw74SivCEpxwMrpNb4PWS7",
  "key27": "W1vwAMG2EDLYondshz4ZvxftqjR6rbrB3H3J1ySPetUBAGyeBVHQhHFSSJYVgX7bEhNLtiwiwPFBwoDX9uRGXoB",
  "key28": "AJi6NJfTr98PHe1XTG6qa6P4uBmZdkncB6qgjbJiqoxr2fjzBmNLLM5Lbt15Y7vm199SyW7Zn8Cd6Cy1m6wmyUu",
  "key29": "5NZzVdapRJ6XBLpNKQwEP9Gj9H2YwYrKNbgB4GUGA8bNPR9XUS7gEqbCEdchYSBJYPFskBy25pBpMkUetnwrGb6h",
  "key30": "5q9mgoWDqPkuoBEAN5fHixFB2aLnxUxG2viU1nyuCXurYrzuQ5jmPQS2oMiN4kbQWNtrmdzuLG51ZkX2z7C6C4n2",
  "key31": "AF5mkovvcCdm6TQPtMdHG99kfGGzoo4dw7eu8ysSPaAr7NbqpBqp6gUCGbzd8jaCn55tcfUEgP28YQ7Wpyrz6EN"
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
