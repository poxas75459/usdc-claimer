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
    "dwC6pGfhvu4a7gGErFDkzGVWB8Lko6czvsSsBu1RuZhNFrLPojskdHmNTWpoVb93JHbJni7VrDuvnvaN6AFu5ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMhoaMSnbc4CgsYcHV55KKqxcNu2HE3vPrcWNkEzNu48MKuTNKRzxwAUbUQA9yZ91Z2pBaUuybehVF14zAssi3T",
  "key1": "2J3ntcKL4WVU38DFEhbBy5mV8Hihvf2vV3M5K2RTd9UAoqdHr4JYAWJbmDjkA22TYH9uAVfkjsmCytRQMK9kbdot",
  "key2": "4kUtrkqHgcLcxorT3erkydLtZv9Ki78hwB9MixKbqpmcrZJugzej252w8tfBrupitr2P7ecVXNwVnQYh12vjZNuW",
  "key3": "29kbWWRBPfTYKsPVWSVLVYGBWz6GwhPuZ9CkXsNT9tRxqezPA8SnpcRircf2VaBFJ3HoK7jFPCxRJ8LmzgtPY9tT",
  "key4": "23da63B5w6veo7HNDDfZqTa4gZFGbmbBKRMJTBnF6axunzbbgy7szzpbPTK2APVSBJ36p63ht7jeNQMZGsY247XQ",
  "key5": "4Apa7KFqtNV2T2T8NwYb1XPYYAyWahhYs2rc8Rfuf8nE5RgWkxB6NtwuYdn9mkJJwcjp3q1oUqiBp4fV42Gw9753",
  "key6": "Ed4ySfSydMUjX3dHHPUS91dUUENhnhF5G3AjNmqvRNKJBDuNqLKYU28t4aRiG81eQQnMDf8LLvKyYvrT5emqyek",
  "key7": "4w2QND9Tua8VL9vxcsi6xXy5cEak1wFfw7HLBUALRq71dPAj2tddKTuhJA2vKY7vzggyj4BdiNkzdcM1JFbLEBmP",
  "key8": "5bDvhQSQTLnM2yvzKf1igVZjoVysLHkxZ2sUUipsaPmeqLUGi8fzynpDjvBKks5FvPCinKuVyPg63synT57w968v",
  "key9": "4ChXKXiDovLXSRAtjtuGawgHijQeYcr1PRKfsgMBegfg7rByF1xfPzqrEcGWy28Amb3YAkF5z7CyKk7bgkZu4FRq",
  "key10": "eL3wVSiC4CAeF8x6aGADbYmQBisBTXCAuiY4CGHjQMU5iMKUJGv36kanaaePQi4i42goZ3sBvER7UwnZxxdtwmW",
  "key11": "213uermJYQYhdaoB7QGvcLkUcs2ieq7uWYEYcagT4Btp4rKKB7xYDd2ffGA6P4NM2w93CzohAo3DzN3JRDNWSBkU",
  "key12": "3ZwgbncxgNwbi7WDuzMdW2WzDpPTLpwTaTutqf9HPJf6CFLVshZDcVNNhoKWTbsSs6ADWkQcp1KVp9hCkkW5rdHs",
  "key13": "NYBAsrRgq3uRYBKhjPgrUE1JfiAbPjR15sFiFMKQqbKJxw5GWrV6cZxZJdDsBASJULsgn8nWzN6ebJG3ZaD2yT3",
  "key14": "2VFJHQNJQtD7a8nX6wmPvyT25DEBAdTYTydR9y3iEuiWWjg8nFvS8ZbkMoiPSzX1FyV2E7JKoAhY7mgh7zMiuuh3",
  "key15": "3PrCQhg5bv9wLuWotKwfUC3RgoZ5Q35qg3fRpF5smLNuKNn6zouS2bwg4sRvsoEGmAtWYj8JCdiLL12vNWMsGpst",
  "key16": "22M4QGDrmE2LVnjoWsQ791oDJwttoYQMExJi1hZwCYqhDgAHypZiL32XoCeYL4pScBF7Awk6MnPs4TZqMvYXBbwC",
  "key17": "4sfRL4WnhnApsR8fwbDnWBK2jApMqVji99pHfCocegQe482YTth97tqJRwCnSMWWYRg6XdUPPKEm9RyJ6WH6kBey",
  "key18": "4FhsKFXHWVGJvmfUEb3hsekVGYuQsartvLt5ut3jHm1G3gVdoYzwg9dT5fFLLHQdzDiZAwiKC8UCACrg7qW9zuQ2",
  "key19": "WycJahv6yVG9K8ppV6asoFGxSozoyXYVdgneyZxfpy56tPZchnV983ZZVZCMa7qsUBCMb1NK8bS4r9G4JKUYqtc",
  "key20": "5hFdm3ozreitpr8kCPkT9p4GVnFar5mVs653MdLpwEo16UjfLZjA3GGeruMoqW8snweihbo1FvukWe68WqGZ9EDb",
  "key21": "1Wnt6TGKmhnbwD5YByKwwCw1EPwEoF4hPoZSgxJnXa9voSkYgoFEDjfKWPFfVQ978AQjRmD1rJXtqDqorWbqXAS",
  "key22": "2Ka4K7xPPsH54js2MfqecU2a3PTJWydbCgpzvJFYCFyfL7ceE8Th9R8S4VyCt9CzWEmfeZtm5vTBzCMcAVM7fHxH",
  "key23": "extEuuVAkTXPKD9b8iYbZ4iFYibqCay5GAeugQvRtH3PX3u9hsUxtvwtPZPkqutTkfsCGiu2TcD1tXr51WcwypG",
  "key24": "P9mPm9NgUnuUjyJSiambKrbmsndYpR3gJUsoohXtpafk7TxzWH5SmpRHc5fCkiT37qPMhKdth4wDcJL8k16r7XK",
  "key25": "4CaCWB5nvEGdLnUmX37LZca8uP5h9yC2UdRfftPsjRiQHDz6neqcyiZx6F57jtnWiRF8N4kzWwQDfL3qQhyoBwyY",
  "key26": "yJKpqXF7bGAL2NLuX3JcDSRU59ZceGJBHNUmbjDKVveiTanZDRp4SvTiAiMrQWNsGWVH4gL7nkb1Zy4xquCPnbf",
  "key27": "2eqcfLMgJgSDPMj3ufnws8aUTAQ1LxBKnrgnDJ8B5oKQ3rZY4AFSqn5FgF2mYaKPoFhVZuvs8yERZSXSXKdrjB8U",
  "key28": "4N5mcmqp4WXMVm45C4xJD7w6wmirKbNywmE2God619SZYHgAuzwoDTZqyDHuYfBLMxfTZFHPqTnKkk6uHYS3iSoU",
  "key29": "5T6BcAgnianH7wqc2rD1uZ9PqvhXr7xSoA5iKgnPZx2m2cVbBBfiC4AoYmuBENeyaQ6ptTf9gSAoxCHh3KFQkttw",
  "key30": "4F4aZrYqdRbmxgRTxfyGP1coJbdcm62feusF2AsrPwEQESaSic38VSzKKEkm4wG5HkpTUbvnvWMEFuA7KvzsnMeL",
  "key31": "3Khybdr4wm8JATL1XeEyvXBeDRrjov7AYLaGkpmrcCncQ4dThLiMhqUJdFfmNj1DuM3ManjW14PtuFyyXqmAqxRT",
  "key32": "CrvJsdWTQJ2Z67rRmRdHSdtiW2Y24yGDqV4LN8xLhqcGQY19koLRQJUh7T1qYKXqMgBnE4tpZC42ttsmLqc7Zjv",
  "key33": "5FL6woK3Np6ticoma2SbmcJyCfDWTfemxyYwXfJ6gW5ZzRs77tA4VB1rx5YsvPN8GkNgyA3mWNGDYbazDUKRfwKQ",
  "key34": "3pQC21D3MvJ4qa9a9rc43ACYLRb6q5EceUoDmVGieHAK3MHfRQ5JAYs5JaVAmKoT8wTRndgaVFvg66aXrZhXifgW",
  "key35": "5QnQsbd1jhFeWUS9WK8zPrGY7WLm91UUVU744qpDMn4j3fzxy3zLnq3pBWmnTupGFkyUcz12eqWwJeDsXqcSV2Rt"
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
