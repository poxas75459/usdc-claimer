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
    "24w1ERvUkE1mFM6qYo43dhCcjhjomieD2rNGvyTqamxVnwUKBF49vJs8Bpy1mvvE8Jih2e9izZUEe1wt4ARbtvd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yzH8wEyzudAByxmHQXENMCsLxPJvWiv3usT1aVL7UecJezFKqjyNdQBQZMRPg121y3aotP75XsnrPXee96s9JpH",
  "key1": "4xM7pK6Vo9DazXuATJX6JvuV1S4wAryaZ3f5pCVbd8Vt64HygusvSNojb5YAVtAbgyxez4wMiLeXyo8xbMtrdZKJ",
  "key2": "4gaNqvwsMPHbpjRbpzAtCKiyJAmzhmL2NE41ZH6KRdXmULZVzWXsGXtxArngH7VjYwEEbZ4cChizhGz2DQ8g83BJ",
  "key3": "5tPHEUaKQuL2gqgM2rfVgWAvdfqMiWtC3VheuEVQH1CkFHHdwrf9tQ3op2ggT3QtvcjhxN6i66tXExqvdS1cPutg",
  "key4": "49r2GLyfyQzQ62YS798cuH3nkepbixjeHhSVMkCNL8kocBtEV24cWDxZ7V75YDXYprwawZsgCL34Xpy9qBDJgNRu",
  "key5": "eLJsRBH5wwh9K1vVqx2DAVDJrtT1p4ArSU8h2AEGzVx1riGmHG8xNfpC8Kcm17AgYuwX4XCgsVjU42ZisrUmVwj",
  "key6": "3kwmPMhDZiSpmp2rzqxYk85GpU3PDH4pzVBEg9pkU4GJ9DUEfvXsCgyPbPgsyAuFp9X5dKyUkGtTCEqLHme2QNqd",
  "key7": "c4ryFkaCpWFrHyhDjG1ksveUSAQqGN7CrH8TkVn2vHqTayKcN5UtFpjbUVApd2vHfizHXt3Jah2wBacVbvyry86",
  "key8": "5mZ5ZgzQ7uToKPTuF1X2rygr4gzCw44TSacqR5vQBVpCpLz1qJytZDyxDBQ9QaTEE7m4qDkXdUZ43qVSDVZr2xEK",
  "key9": "62sqrzVphiGpPJETQq8RnDtoaXrwdHe6V2SjcFb9bQa3fcamsn7mcaVuRQk4413qZWDGCjtfxToLFCgcpnDKDSPs",
  "key10": "2SMRdhGeUTvFVEwiPZG8YjJGgMLASzbY2vzrJJRB8VvU5NUUUVnv4Up1Cp1458eGqrJ8fN7rr52rDNS9z3h9FHyr",
  "key11": "5kWMAXWhgWZnSfa8YLkUejBJhyrQ4PmMkb49Dmo69f568rqKcv5mxkNUyEiqr11WHk3fTXs2f4jivzoGfKCFqLyB",
  "key12": "EurxcSeQ79D1aTU6vZD8dEKdcQp2xcgLRsEGpk3fwmeLx2TzGxJ316sdpN8XTgGqXxmqwmLdrUs8u4uBWna4Dms",
  "key13": "5XCtUBDAjfnSqFmpbh1fd24XMKfSsdv3QAZo1fyRNnZdsudPDhBwF4NpoY2aByfaiGCnPbAYj3f7fsE9WZAM8rey",
  "key14": "2wjjEXUYSxL4CK6VT2WV5ttuwQ2qqmtguU4okGdoJFw3g8g4YoR6WiYMDEmSW4DuvZPcpCEMo3NNQCAMzYJaYeAN",
  "key15": "2rDjZYF3kTd5p6FAnAZm7vrEzypUyizNFDxqPiNsfgCmgKPud9gn8z2ZyZLuqYv4Nrk9uJ6wWKSKr5x9pB3miStt",
  "key16": "41cBXrE57s2KeTSQxh2zp5MwDrpY8gFQd9bhqPjnmyBpUfUdgGpigrK3vWLv2T6ep9JBgFHQo7EvMMfLsSoZWDtn",
  "key17": "cAEPZCqB3JbQY5mKtChggVrBALvvtChGaaRtahvPTuxAhidVZMqj1BR4jzNsKZoctMe89CdEEdKWPAh4VvytcUK",
  "key18": "CRWL5bPajPpuzqVVeCuxAQPJR4iniaoc4qwJrytTfgvrAVbfWGwFTff2stHxtsvRCMtc19eQm71pEsZqnHgP15n",
  "key19": "2c4pTnxnNjKhA4nGPcVYUMgpngMgU66Vkm2dmUiLoz7cN9e8S6gVYbpYxAo4mHE7YD65mdnoJ1WmNXAo1R1UpuU9",
  "key20": "5BHnNGyvty4C3G5ao7dAGQsSXnNT2zoE7iy2X5DwcJLGHoi18sHMWD7bhztkYAG1wKnRGYzs5qGLbyj2f6TH7SJf",
  "key21": "DZJgzZXKzthvVpVkCTcJU6GTXb1iAWEkvZxSvQfeTWam1b6cjy5JN7NgrS9ZzUfPzthYzBDYuTM44qeaYgL7NYb",
  "key22": "2EbMUggscqbmFQkxkhJkGgTthzLkXQSWEbZCipkViQcRrbfewom1xjcuQcseEsFzWETgA3cXANGvWmKjJGCdTGD5",
  "key23": "5eoPxtZxa9GRgwiGSw8gZsaDCQEDHht6ajytfZCQ4LBg1C786ESxFbu1ochyFFr2DzWko4suzKK1sVdCBbZtHY2H",
  "key24": "593E2XfrTcYYfSjVV1xDX5USZnzNgr7zmV1or7xarcMcAUriEVgtqHvjHejie3TB29mwA8euCrJ6DmnWhEmND87c",
  "key25": "4eUEYoRFGRn8Qf9XzS916i8koJYd48PMj1EDvTMZc687rHJLyEUvz8aHkAfAiddbhCTVmVUQkn7CcnjJhrxY3edz",
  "key26": "2oCQp4NkopHSoTsmcwceFon6XBHP6yDz69t57GufKMSubMZJXqQTja2dLBH141h2ZkLwukhigeya7WKRmmgvaRQQ",
  "key27": "4piKMneUnvQPBYmc71gkxC5CAH1y3Deit8rcfs2j7oSkFkobmHgAb1NgbSvsHxJDSNjjSFPmrxYdkFbXPqkHFeDK",
  "key28": "4oV3GyV5aB1bfVDCFnWYMgK8vF3NPUbpNmAvz4NzxC3BNpdJTMxUosCNSqF1hCLG3XwW5K5D6j2yVKGErNRN8gN3",
  "key29": "3UAtbuw7LoE2Eoi1WuHf9kvXejbeh2TFWCV2X2xiooWxM2PWxc6QXU3Vz3jY2WjFQGXvLVfgL5BpZeFg4hUjmgJB",
  "key30": "63MMryziwMT9kXXZNbbtWRVoxMhyLmaapa31nEMLzxR1HF1KcnqofuGzgx9hkdi28cVikE4FZdL6781mwoUBGi1Q",
  "key31": "2D5M6VSetdt92B7L1CXtc1mD4xqVKRpXAEEvE6BUryxrD1zsMhSew4FkHCY1UXVpEGHbK2bm3saZhaUVMkP1BJFi",
  "key32": "3NPswLrFzNF4zUgiXqAh4Y6tbMZxCtNM2kNQBgzq18d9ezFFfLe5bKzLH2obk1mbfgAz7hPBZCHGWaAMGyEiKVeG",
  "key33": "622qtvcfjBjPNcfBSU1Q5jHtY96rciirxQowXaVYZT6do2ZUUpd3FZQtfHE5jQnhLUBbWAsiwBriLQL7RYEGWw16",
  "key34": "3Nu4ExvAag7FGMbtkX9wLSahz87R6ajoVkMMSM63GQiZEtdHRigLNB36NLmgW2VkJ7ptDbN8gUpymmAqnzZF7HAy",
  "key35": "9bh5tgkwjQopTG8FLxujeSWbnwAJWUE5Kk2ruxq2T5gXLX6p3GXRAXoBSMY5aEWaWj5PYTe9mZzCtL66746eEjK",
  "key36": "2gRNKVaPhWbaXpvDnKcR86YntU3fohSPorzZUdKWkSkmwaxtEf5xngcSnzFX8YFodhw5zbPSWhpvpqaRH2kD8wt7"
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
