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
    "3cEBxTq6my76a7SHMcSno3S27hbgFNr93WN9nSRUHfWjjDdeN2JooUjq7UFXG6f1vgQeCzi2zwHy7sve98M66rDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REMWE6Xj3cRDXXjRtmTmqddTPfrR33eZ8a6oGL2zTY7vqzBSLe7vaE9MTAQuUarukkCfiEHukDPNsUDQMTrMD7s",
  "key1": "5orzi1hQpnWhMuBeAdS1JVe9eP35RTo1sBTZgZZ8kGMtys6fifPE7LyXnGC782DFjpVRXdrnS4vS5e6FLkcfemY1",
  "key2": "ThNK8dnsyX6KPrMHXwuX2KBPZuxbeBBrYAnBiqkjN9iWqXy1KNr2nSd75mCJShEbWyPzXwGGE4E15YFZPtQVu9U",
  "key3": "5XAMDoiJGqxxbnWLcESwTUHhRT3a5i72xfuKRVcX7YwKVK1GyhcaLdN5D7Kv5pDuZ3VjGYhMjRoode384S1xcjDU",
  "key4": "2eoYgXu1GP975hDt6agF8u8zDMePhjHWeFDsA7eAM91jGXcKg7Y8s1asNafrtixtigcG3XsfESFGMbsdw7dZprHf",
  "key5": "46xM8BbSJTMUs7VPkgwPDxDkDLx28j5tWhTbsnAgCE66sk3a4R4zLuZpM9xVXFVD8HCi9oaNF2WzmYRkss78Pxa8",
  "key6": "bGzggUK8VDNEzCKZdZpGcwjZw7M1kMdcw39YHm88TbzBHw7aPzurH8TdNn3JpahT99WpvHiHQARm54DtkE1iSux",
  "key7": "58B2bUqXKLrj5k7cWvNSSGs7Ri3GyzMLEz9u82SxNcESQhU6CoLJ3k18Cqp1WVjPHXQrmUTLLGcSgGsDk2HFg1nW",
  "key8": "5twNYPzLiJx5zTpiDGtS3dN9Y2yMAEvLU7Ajm5chbzipgKHXKjx3YmZvdATSgAsoeuQXC6Tb5558AomwcyXZZvuo",
  "key9": "3hY66FhxcCBaPKUq99s8EUKYiEyBoHH8yjr1E1MtCXfTwwHzTbbhAGrTn8vPRaJLUeUKqqFYAepLB8oWMmtXYJ5U",
  "key10": "2yiGS4AgKQWrTRg7Bem4h1U9b6dp3FhvQA8DRcotrx2JzeMHHF9y3h6tETYHZjQaB7TAFbR5B7JRpRESG3s6QPte",
  "key11": "4m6o7Xx4HLff8ro7NPifdTig3DCb5W7moRCTccwGEPuJpjP87v2kjUHkceXiUCMwDQTEK1QUhfVnBgxUPEwtxFre",
  "key12": "5pwK5VLzdrpyeJpX5Gb1iLJpFk6s4boYLFKtW98xrw8rWDeHaUaxCuMMJvG73cJ5sbjBeni8x212Bt9vhkSh23JH",
  "key13": "2oaun8o3r4t6BrF55mvTEp9gWeQAhpCbaV3rkU2a9LBTRpx9q589duPpXNpoKNTJADHruK9JS9GQknbkxztuViJF",
  "key14": "ZRP8ejwvzDuA7kD2fpxsBVc4jg87wc6uwQ7SH2fcbrfUSaL2L75ehCCDsihuKCy5vTkx7ciV1n5t2ZaWmRg2xTH",
  "key15": "15Sq95HbvuY7hjtgW9A44SXESaVATbEbsMRHxJ46RpNZ2QcQX453YSsZRweVFDNQ8AiENNF17LGEb3hZnEDQwnv",
  "key16": "3uv6daw3WX4T3DJMh41tSmnsyDuVhPyLFh7cXXZBjQb4Kzq9mbGjjTCFDwh2hVxkti3Zsx628WwG785XtnwwD67w",
  "key17": "3NTPHjvvKskJtUBDLmg2hMFSdMtSJYNHwHgr9QoFy5Q8SvWgcL7MQqo2JMtsVhCfUsP8g2HCGeTMmrQwRxoRVxq",
  "key18": "4ZCWEsAnswQ33aFm6D3AXwJfDcox9kqfmUoAUEmpZZXCrT9y1qYcYedUkSpnnb1GE1mkwi5hb2Jzm2q8q5e9ApvG",
  "key19": "Xt2rLJo9HwgNZFnyoE7yrkW1pp3TkTJRcoikFagwKC6ZR2VTavT2zTaErHmdq22tDNbPYH2ekaz3HHsVTWRxc3H",
  "key20": "47pFfsW73VLA22xv98Bp4HUr9AfTnRgqcBt3AWNn3mDSae959R7KL74a2n6Mx2Y8J1HMjvrKiVSSaoZGYZnyKrmR",
  "key21": "5zhZXs5y5Dtfu9NCDtaeZj41NXMnADgbPsjWhGXvBoiB1SSPW3u7vPPfcoP6RJ7twQHYetY1QiRg3ZYVQwmsu6o3",
  "key22": "Akfgkg9FjekpuLswq9VyHf9MuVrqseD3mtnNmJgdoXpbgypojwQMaaVjjKNwkK5U3FVWoHBiaxf6JvawAfm4Wtf",
  "key23": "3sP6ozLFNKvpYaJLjA1VfzQNwU4eUMx7BoeLZkVMpkrXpPKCfckU47JP1gaMiDUNeFeYxxZBGcj1dB65GpcaQrYV",
  "key24": "4VQzXh58ZCFgGh1zQfJgqTuxwZGMqkRc7BjrHZhSixFpgJZs6rd5AwVbVSdGuzmhA3cec1dDqgkJXrDHrtnKPqKL",
  "key25": "3a4WtsSgtofYYGbvM9KZ3HoAui4VL9Q3tEiP3i2nz2f3Y6GmkeMGHDsygrG7m3bkM9DkUkDnWLhsuxd37wyNkLMr",
  "key26": "2LNyiDvXZ6wC7X2cY1cRhYJE3BfpJkmGAuhkafXVwjFeDAgXUyiehjnD8qqoavMXU5hKYQkkuni3bCvdEAa61E22",
  "key27": "5g3x6T8eJH8MbUzSubqRg1oCwMvPwagzEw7GrWTrnYhaJayqF594w82Kf8mCAKrxYYQ8zNpoPYCTCnMwAsqq3rhQ",
  "key28": "3pwnnqBvQhQFMKTpDg9qEv57VmTkqohqdKbzb9EWx6vZdJW9AMVUg9CvgyyHhw9hZmEi993eTD9LLyAtMgAVKPRB",
  "key29": "5sEoXro6x4hRdnnDDeTfH7FVAAdJsSAvoSJmQsSZtB8BCBagZDuFgf1zfkpfQ6f4psunpfkqhCPU15MFZJVC9cb6",
  "key30": "2MLxbisWS6oiSxVwDzrbrHY7HgY13V42dG4yL6qSg6V6YaqAX6AuHZiJPp5k3vF4D6QuaSLAZU5CJBgQjTPnMA3m",
  "key31": "446LF9n6fsZeweRhqeotQVwtcdL79hv6z2xNvfJg14SBaVjhrxikah89oaoyLmJq6k6RV8jqvDRZEt5q7KTKWSom",
  "key32": "3sNcB6LPtxaB4AXAxNY27qXDKDZn4nf1zURzXYrhrKBctFEZBCzk57GJ88hyyb948qeiC6tVKfPTnk2yKj4bTFtv",
  "key33": "29AzEpWQ7ZvXVnf4Y7F1B3hqSn3CpbgaJ7jg1N4zzxVwDp6BuipKBK74rSmxuoo9xHzEfbboxaqrh44YLK4TM1LA",
  "key34": "345zoJJ7GhT4LnJQgpfC3uBL15xZo7Hzpz5CWXU9N9yHy4psWMqCXKiDPA5kupHkhNDHRjCx6CUgfFygqFRwkWqr"
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
