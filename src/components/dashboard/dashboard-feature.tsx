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
    "fWizKspfhu3TzvFVBFYV8kMYNAJ6qo9hCnmMc7Q3QAJeLPfk9YvB2EhyKPeT4M3Pna58vf6ynTfkzZD5UPkx822"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUGz7HwqaNHwQjTBkbFQDFmJySLdp6rzq7bRE2bGwJ9jbisbvZC9Hp4TmP3AiA5rgDfEpNY1uUUYjNdnQByXu4p",
  "key1": "3CnWUKey77nQNmo5R43jmYkknGvrbmZaRf9Kwp1bDZ2q7pqSLZmQPVFM1Yx3NEqvqcsHQd7VE7jVaE8WDBw37Hed",
  "key2": "5eKVQKBcL32XXLobvoS2EtU1E5R1VWyqWjyc9zimSajB4ErcEL3zpE6BvvcyhU4AXbnoX2Dj3v28REUJvsprHmje",
  "key3": "3UuRds6gdNLqcGPMMxCRBwLSKsSSgqDCZMyET1v3BBH8knZ3tC7ujFxW1Dm8UqkmbsSmNEPPAEhzTg8k9DnF6arr",
  "key4": "2ZxqdL3E5Adnq64vMMGRjre4tUZGuP8XzZyZfaRhZoV83i1bLnJLnmYZXh8ho21sigSyejbgXKvaV553KEGw4rp5",
  "key5": "DzjoYcdd5EMDqpFSN4G6utr89satAACQcW6sq3k1HWabsmAE7H1wuT5E2qnRRPG36CiHASyDYj2BoMUw2QSLEve",
  "key6": "63R3fVPhiCQEEsbwnmcWikpKaBbZiS1dFxDkQT3xtJKLaLZ1ReFhiBG7TuwDfbUypYGt25Kv3fDXpan5nvnKCUeJ",
  "key7": "38TgxQUXZp4jcT8a9zxAmjsgJA5KemeJSadrauh8JFaT1Qwn6sD2SstSdo1kbL6whY5256q5p1EPpXGGTo6uKrp9",
  "key8": "4u7JHkF5gjaAwTupFcJ2d991g1C6ARpTEfpUqJHv64eWSx435bgZKaexP8XzYbys75Zm7pTnHiHuskd3Zc2DMxkq",
  "key9": "488GAFkqY18cPeZt9fDqYRnP6wyi2UCDpgxBxBPumioC9b7qGgJ7ccycTHPFGLGwGXMeSYKL4nTX5XU3NGSuNEVD",
  "key10": "2FyJqTfoQBRTixD8qR27gbLGqPQnL5VmbCuBPJP17REhrEPbzncUbvn1ccAuMFdTHr8tvSFeTQwH3Aun7DmeVogb",
  "key11": "2dHsQ3vceGi2zdpQccJXQwnkt8jUXFjSekVCGuJyd5y2wyVYkdH4voq8WV4L8d6bPbiRNHTAJmm9b8hxskZuszA4",
  "key12": "4gZcKoq5qfEFmA69mi6oKJU7ppQZ8xBJeySc1uaeCFYLcAXBe93obQ5PjXkfV3FFn2nYQfHd5uX21h8jMYydxBRm",
  "key13": "4ZBCPm3e1uyGfeJSest6MpUSYNJ8WJrXFfmrUh5bW79s8vBgb4Ur5ZLRzr8J4NbuSF8eGMVp3NPu917JMyPtBSdH",
  "key14": "574sukB1YMrBFHpuyyWbcpU3KCRB3Pkj3mVUStV7NSU9mhTxpy1uH9u4bWx7Hywi21GEJSzmdohbtd2Md5FAKruF",
  "key15": "R8fB5J5G7MhD4zwq7nWTypvUBE6qcFoqHxMYkpUe4VF281VkJDyFdzYvTTw5BSvcGUXamoVngfGdCtWAczqX6XD",
  "key16": "2avqVCfgPLDXKC9wjR6UW9BrrXSFEYqo36M7c56mzr5CmaT7ZG7wNKKrAXw2tnxnciH2d51bDJri1eZhnXpMZPHD",
  "key17": "59SdHBVvwfxQt2Yp7QMVmbELA49VgtnKkxKQcqwXgTi1wfKiJJER9Cf57RwJuvZ4i2NGpzdnB9cKEarMM517jh1b",
  "key18": "2wArCyMcUwEPqf2P1yix4CMx6bFwNbUaYEpXXXxeT6krfNEVUdiEGahoz4TzX4XfQQeFhRKjqRrnorBtCKs1v2Yi",
  "key19": "mb1DfDtEdQyCr3ZRmm7og1TKEXjaWFnKasvVWWH4JZA2ftUP4CVMYwYH2PCptg2xFvd3yuNPfbxS96QEZd2XT7y",
  "key20": "4tFApLc59TZK2DfGkari9U8kZ4zqqaXHGB2NyTeQzRq3F918LUwD6rsa83DbvBh3iz8gJQDBZGWGYfvCbJ3XupuB",
  "key21": "67dHxAsdpJ2t4Ciozp3jSdjgbkkyjkg7jarQFthwyALxereygVM21KpQJuPpfKsmT5hHRyBoUSNRcpJzxVomQ3dk",
  "key22": "3LDH1DrpQHae7LFSGstVkTTUzmQ45dx3rsEXG5ip66xKSskigCULiyXjrHr2Eg5TmWgKRS3eJQ1ed4kjMm1ujuns",
  "key23": "5r28NcMhpSKMtsUgjRMUTzniTxJ61KHqhNp5JvNiNB4NrA4pQ7MiuFeHCzkhxxeAqBvw7GpyN9gnH3pYgjN9iJYL",
  "key24": "4NvTxZMYLam3B67RzUsT2uar7oZwH3YheDPZfHuNChQdLztkBcpMafQpwkgPxBBDzuFcbeikc8omHQ4WWRH4cTVm",
  "key25": "3nCQTph1k88nPMnyazRzo7T6NJcrrbo9tgrJ7889fADJeZ11zo3GEvjVniJj1sbGkiZESACVhoZnZThW75pgvgyz",
  "key26": "54SLLEE7YTt9fTUjeJfw7gcTnCvDWhcHbtHC7VAUbMSegZyENVQraCmBRn16mwhDtq6CmoMaWkjEFRQ3SA1Bamuq",
  "key27": "3CZp8ii8RBgsBJf6NTL9X8esQfKxT5XLvrayq8vxe82FfnqkSSeQQHMiN64L52775fChuMpN4evy6w21esmCSS2Y",
  "key28": "3hbDWm9mpWXhX2RcZtbhh86MZ1BeiN5zyngqBLNxU6g8FqQctFbEPNNcAgaGTDwjD82m6Was91nonhevRS16KavR",
  "key29": "2prPp5jdXvaurnePgReJEzCiZyH4dYguHJEgGuM6q5dMHG1VsPvBhBiBaUGr69fR76Csx1Lr92xsbST6KAuRVKNw",
  "key30": "27iagXwfAv4tcyUfWfbF95U1TVpEpkTeuLzi2eu7gn1XipiMgyqdsSEPkXfTj1ft931E2iqMLTwgCWMmvBz1b8w8",
  "key31": "ivoQpjt6aUG7ot7rApcyozYHLDv2mCKVRGZoAfMgNU9vxSgxc7GxNGjRaZsLr9CpSsChC3LUMydEmr4Eev7Vb2x",
  "key32": "5SoyJxANwqP1of1aFMujzNY96DwDQ4GjytaJsEUCRhGWnvrCPxK5AEwBZwQEoc8NsbEzwwedezHycYYuQcomPLgU",
  "key33": "oF6BhEer9GsjxXaVYNXGgfqSEyvuEZc2jDSHoFfsAizueyuwh7ByPf4kB2NPcW8gAsfe5ZCqjohPMGts3qgB6uK",
  "key34": "4sxu7yh2DHb43LELf2rpesTYsuhKgiD8PTAUcs3WRcyU6BWSDBPH1DfxNGz9yuMbeeQPqBThp4D7GF3BecUFfVm6"
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
