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
    "2tTHoZhCyAtduZHYsn2tZWon3vkuFX3hLe9TZPpRReSqBW4ibbNz4yaaCYmDzQ7GSfMgfDMgR9YKS5YuSusLX8wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MafTExT1L9t5HHER8YcAN73nhq4wedpCAc41uUBUVAX9LompVQYejcZ26Pdb6eKgmuMpXboPgcBq8RwBiiQD5nP",
  "key1": "4SyVfeePy6bpwanuxycvuz8LiYsXmQjeS5AxMpzqpXmut7H4kqAaqomCaACSv9E2Ygkkki3b7DvesSoMhUdhKbQH",
  "key2": "bTj5kioRRrxiZZMK8WhMZ71XPcfnu5ZZZe2DcCw4j4UmHnvYJZf1shRsmoJzLYzbE3XQUVnhGq1Go9S3aM2kTrk",
  "key3": "4DUFNmu4wU3pU3PEM2C1LEohCwxEP685XbCUUhd2BND5tUZrve17aXKLsUGs9wRjZ882M5sfkk4ndj4rnSA8N2hP",
  "key4": "51qBaXLdujP1TcwCvG9BzjxJx3J4PmFNcfaTS35HJnThjPUU3PMC4BX5BB1MLJ2XVteirbuWfn1ominrYZJTbMKt",
  "key5": "4Fg9vxkrjsNCMr7CU7c8TDCEXsc9biMRQdWvUciWsH8EaeAQ1jDyqZEMTWG1psoHaCDSafvUxvLvLo6jApUWgo3d",
  "key6": "4PoSMZHjrb1Hf7FhpeHhFe13GPm9f1f4wUEAbN2ZTP3efRjTp7PyTGWWBu8LwysFEfrVrM6HYPkLBBrBza5j6KxX",
  "key7": "313JEVr4nhwC8jMKzqb1NYQGkX6U7T93LAFvjCdmq6iLyAdSEsd8kGK13KbQxpNCFnqnrQLqUfC1CTkkFRffFXPJ",
  "key8": "561bW2Lhvo4SV4qjyN4doVsNrroCYNk2ggrVzW35dnsqL4qKqNoQLvtWCdj5VWzMdyopoAHun25nrhPAyW8eSsm1",
  "key9": "3isUHDqPMKjWXxYGvf2t78CpPMs4RsfXBdESecB4Z35NgE6T9Xp5cGFgMSzyquVMKbZ6k9zcrTxmKbNh3vHe5Z4r",
  "key10": "3tL6MKcAgJjrh3nYUMQz79wVGvAecRkCXMtQEmgRM3znr5DXiJeNLhjbLJAAZHMYoXYaQR5dcZsmWFJTqVjVhm59",
  "key11": "4fydRpVw24R5GeK6z48sgZ7c8k6A2pD17QgoVo6H8jEA4NysH2KANyEnAbm6EJcEtAnXNA1ZLL8mPq7htFgbMhq",
  "key12": "2M7JNmDBGL87xCgxJqHA5H2PumEydLNonAo1Mkqcnr3x9FzkzRkcpejrYYiDtoHaRu2BKVBhL1zyQfS4cXvcBdwY",
  "key13": "4yXsXEhw4QXbcXTdKrYsc1NK4jCH9gDFMNWZYHGwRxctdYLLRJCUv5E8517e4Kj1LTRnAouS7LJCA2r5E6CzCef2",
  "key14": "Yx6u84BgU1z2LjfpvL7r7Gcaj9UUK83xULWfkcSDmf2XPxvGVA3FjzzMob1fhG9VMLJD5Zfz9Ds5NoHkKYDkAyC",
  "key15": "R1EqeiuKLpHyzwX2CPxESTP1dqFyZinWkNXw9e71m7CBmkf3iuxzX4AtABSUdwadq8ZfXpgMsZA4N679UCApsMg",
  "key16": "3LxUG7UX8mPptEVuDZzPvEp3FV2bWiQFohpP7eqNV3CidYX6J8HJgoyW3LaJFhbZJQmymgQWVhCM5zMMhFegq4bv",
  "key17": "keMcd4f6wh1VEKgfMLip5hdAhE6sYtuc9DKfUcn4h6fxcwHeDDcsj9gSiwoFLYLbdmG3Xm7mg7PqZnd5dSNCTfM",
  "key18": "482NyJaWMVWMueKrT48yupuW4rsfdfk5LD3NLusWkdA98yCXavL1qim3ohvHbUdfCRtocEbYzwxjQZunLmYLAYj",
  "key19": "ojBVZTKMrny3uPf5mvTwacHPeDn9fWMexiey3NSG1RDbANPE2rU6PEkogpvDw8Q7oigtC756TTvxLN3hAW2Een4",
  "key20": "36v3NjCeVViwqDcSRrW5cK19f1TGYkJSu5gCNqKVez9swHknx7zMn3t4K9YYbqPRQEjgzXQbwfaj8S2SvaSkPzQG",
  "key21": "D84GGoY6n9AZkG95HGGv8SBoQUnQmzTSauPcLzU7aomrh3hN2q72W4cme288TwoYCLveoQiPk6FtmA9bLGkkT4J",
  "key22": "29Eve4Qe1skMoWNGje7eFiibQG4tC5neBGopiKZJNwAFy62TdSPTxD3gQcwMXLbawLHAaLbmbDGjc9yvPhFj3yHw",
  "key23": "3AAwVywhL47N7k5y2mqZ4wYHxwpZPJnhNzqhkcfzp7314HP2LdDoNypzmAfjf1v7rtNAjVqRgPMpguTadp7QzJma",
  "key24": "4ih6bcPXsoTm9Qw3qceDn3zJsWPAChdRndg5dSn9gxSLP9HngQPx63xbj9uKpVV7DnexrF5KuMJngTeCoasVV7My",
  "key25": "5ssH7NytvKAABvwEsRVqVpfCzjvCrpg4JRMLuKcUUkPRrAGxLfGiyE1Cx7vbYDERDGPCzbwmkH8bBJs1FS7k2AFN",
  "key26": "5bq8534GpXjxCSJj4i97w3Bar59Gt2UE3V3RYXpXvdVHT8k2K3LBuB5fJnyRMKnTcbmgSEdCgj2wbYrwRFVHRTxE",
  "key27": "2qZwnkEEbZJS5AHZDjrLHU6QQTu88GPRWyYk6fjfxaqY3yoBGumxLYZYornb5wqTm1TN9hyUdT6buNB8gDXcUtg1",
  "key28": "irYQ4Phcxv986CrkYj26WLoSRwJGqRxiv5fiHpGqTXKiMzWoUrU1RE2muR5Kxc2zTED24UTNtG4h6QEJCuSLZB5",
  "key29": "EWFTSEgqsb2ctPRkUgyZoMwNsC2tGi3azvcVkNa7HuA43qiEHFjyCDGmyXxAhd2Ae53Dz9FVNQEZG7jPQixDzJ5",
  "key30": "5WhSi3CfEqiJ6TxnHLWTCEuEzoNtwmTZmAyDbxno13WL4urZK96MCj2BjBi1YEydxPY1YLMUAcnGD6c3WspHB7tt",
  "key31": "66ETW93ibPUBGBTjb2ro23jwMorvukFFStHCxUn3fL8KPEBvi7mHAp5eQaPdT9gQTePa38Gx9XozowTPhUUwRmhA",
  "key32": "65ZFcRVaxa5yiKCyGSPmqj9EC6FXXrZSeygPqnHJKsxPtWZt2vrBX3dF8cEsWc9chEeW4E9AWDomKcHgVNwBjff4",
  "key33": "5vLEDBbSYyrN4frkz4Y8YUehzX8Z45fqxZzkuE3jkF57eHJSXBW6wjVSsPGBn6ayPf5aENCtkja6AZg6rroiYyrS",
  "key34": "5do4RShrx3WHaWw2Befe6QLgHzbV3gDjPoDsQKsCmwtWpjpJN4gNMf8J3YRZfC2sjcqYxUfuez7wnDNYHwKA55CU",
  "key35": "Rf5Qdc7uUp4tib6AydRuHRFUhV5TQ5HytVDqf8f9Nh5WniS8AGdEafyKkzkky3mDtjbuivE3zup4wf9fQHQyGCE",
  "key36": "33GTnEAUJ2wk39uZqEvXBSBaHbR6s5CKaTqJuQFWVRj948JnqVCEKF3pEfecQBUs5afP93m13YWMwsEvYqh1WfsY",
  "key37": "WDeJthTta8m5e1TRA2bRU2DkHCkJCbycrc7nyXGECG5dFTY4mALPRQBSqNqGsVnBp5JubZ6LHaY3j1u6ZgSe6xX",
  "key38": "42eHmaydjqPj6MqLdLcLJEVKVtbaBgmyDKcuM5Wbzk64eNeAJyYjswibYyW8dLeCb7u2SriH8Cxf6XK6Zci5p7D3",
  "key39": "28cg9pX9VLWSzmE26Pp2TNi9X5mvr7guiEMd8ozJBLhEkQTutW7727rMzMy27KW3EArVzD2Xp6L2VwqUnpdSSmAv",
  "key40": "4UAyh78pZAwxTmaqYzumNpJrXgpAtzciokekXaBDEw1mM88HBrCYT8ws8tstNY4Rm2Ej32oDBRtxAnde8wJAGAdq",
  "key41": "HpPnyLQmwrDWXR5o7LxuSWuPmSkZztVW8hkLzMgsFzv8fcmfk18qNR31cS8qgjFsGPwngmFHpeyevoC9KicpMWk",
  "key42": "2U3GSD9hXdBs7KPgRe369UHjaxgVjLz4VZoCLEJ88FcvyJit6Bd7rWwnKXxcUPKGMq4HFqehthyutozii3hk7MkG",
  "key43": "4Y2WjwibhyhDiUMW9995yZQVgM4dfWcLb9PQsZNpLmkYyfAeVgArLUMz6ZKmket5P53TXfSBPmXSXru17RwnJzUf"
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
