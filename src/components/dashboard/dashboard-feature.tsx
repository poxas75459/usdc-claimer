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
    "3EWXGJh8rXmog9J6jGnFnCvwDD4z4z1WJhrJVoZaB5aBaWRVP9QJoxMU4k6ZYxgzuZWuvcdYs2kshSNTaD7CQFHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PA1T4tqA5iw87b6S2G7sXMBaSrkdwLHWj7ASaX7CeJz2HWaf2txUShrkz4Gb6eM9w1JRSu1KzPakZKDsBqeRmdg",
  "key1": "31qDmEJg2SLKSWa48fh7CaaQ6gjRrLt1hHxHqBMepzRTThHUsuhbY6rTxpg7CCmFNcvAxsTfQ7smPMtUtN3R73Ap",
  "key2": "3G4CfKrDJANvhzpsavezP7x44gVVMWUyagXmWQaBTZ2ew8u9k5ttbuDo7oZyrvNybQLthS5jaY6kAMduvcuzMNb4",
  "key3": "2La8RbQ3joKg1nFcRx5CUGK8k8ZvMXjSS57XbvAtVTtGeSJ7kfWU3mgWqw5MpB9gf2C42eCAuVfk4PEbQtUpRaEt",
  "key4": "3tH88CnyxoTFbYvErQxoEDkQ2Ncno7a7C4GDbhEPAE6ZyjfsjwdwkmfscU8BndFrEGP2dobFQF58ETgA35yhMQVs",
  "key5": "2JL4CvV7RRtKMLv8vgDKChnaL4XfpD7ZXH4zhd8bVPnLd3NEYftcy5KBhjE4G7TVCYpjTrJ4FSbaLPQxkdVkDP8z",
  "key6": "3dz3JdvYH648LSDjJYtKCX7xsk5fVgiLZ1GhKh3oEvvs1mRmmQ5uvycDj6J83ncBhhdnCYtt9baki2gxGDYZsL4s",
  "key7": "2YmHfdqPVjN7D8Lczq2xyjdaNX9v6jK8BLVCyMjrSetjnumZMsB5L4dZhYGbG7ib22o7wxXtBCDKir4tGRq1xXNE",
  "key8": "3A5QkFPUdiAVaDKWQTC2NpTNuCctTT3qfs82o2T6YZVxSpoe6MAWuVo4zJbzUyj9gGnj4sWrGkcYQ4362QaCG6r5",
  "key9": "5xe3Duwj8UA4B4zfhVVxBZ4nKNNxtJsbjWPNWs33XSfX43CPQHk3QyczjmKYB1wduj8fxWhjJVGN7MivZHfxg2p3",
  "key10": "5K5oDNEGTFien7S7jFig8AQzxoW3b2KPrmKRrDFvNxznB8p7qFphxiDRq9JTLnkdECtQNfnewBisqDdefefzCLmo",
  "key11": "WPmbusDLiNYHYJqs2kdFSFLwLyt7AbJEG13YKyZhN5Rc9yjEpxsm2qLcLABXUoJigsdxV7be4S5MaRa9nHVFqER",
  "key12": "5JnRkSgLfrHGbfoZtdiogf7vySNLfRQm9qotfzDrUBGMjqoyXJj2sdBYPxq41LP7QJ9Mmb9bsuvfXWkULLsMKXCJ",
  "key13": "3WLYynK8CAjA5g93PzUh4dnHeWWGQENXSTV88A7pnDD1ne5iSaJKhWxPwuvmU5411GsRjiJoQLa3E5jGY4kbS5U5",
  "key14": "4Gze48teD8eHsHPnxAHyAd2B2CfvoNLFXAusomqezyq5MeyJSxrbRbJcdjKbpYTaAXgzC5vkg9ijaR7tD4q446ZW",
  "key15": "22TpspjtMWafeiTrEm8aimhunbkEpfhgU43BnqSDoZSdN8XQzYB62y8tfDEcDCE6qSr1a1eRsVm4HwTWgjKZcy3h",
  "key16": "1TaDqf37ayy5r1WyXPKJuttyXyrGgx1mHMbr9wSAJ1pCZaLmVPmUQZzmuL6N8am5R8y1UBYj3roZMxbcGSPDyfJ",
  "key17": "23Q8ytVFhBdLKETWKUJ93pBtEtzLXMde9YFz3UVz1G2YVemsWCy2kudgGd3jswrx7aPM5NaJC1zMuXMU9LgtL4jC",
  "key18": "4QTgnwTBgVv5wQmSwytNeSe6sjXvnnmRXDWZvs6vJfGkn3CuAfkTvZvo1eASaEh11n5eRxjbEtQEXnrw2PPhjdPx",
  "key19": "5qstCbfAf8fnVvP9anPQ4x251QX7n99dpA1u8BvN8BqhjeqruxKVgfkenoPQgfxocPRmsyKvXEcn8qqaceUz1Dpc",
  "key20": "5zw2cfM2iTYdN3KAwN8PK9zrFHz5vm35wjriYbT8DmjRLmY6Rz1QxcR9CshhZ9ST83c7rexFqSKtpXThsrEBAcGD",
  "key21": "5ykCGYNcLz9Y4vBkzZDSwK7Nw561hGEx5mhLMnSenTns7TYm7t3qcqA1UCnsodf3FrYxs6kQ9c9Wh8R7M3g2AUEb",
  "key22": "29VJuErwtEWE7Dx7o43Vg9LTWrKY1iqwe4NpJUWUUZtjnPpFwpCwp21VqYbUJU2YGzJtXZY6GCXoLV9wJtXiWu9R",
  "key23": "5Fn4hBrdVmMKzPvdqv1huY5aHyP1rgPiet8z5pZMVVS4UrXb37ShzzeVSVYXTypNfYb92acsFznbr4UvAcwePsvH",
  "key24": "5Qnpo7uaDRjFs1j57tNQpkJSvn9Brv65uJV35S36wP2NLRDsL9Rchh3UPmJkDGuLi3Sz7YiWMSDt9R9dGAHr2Mgx",
  "key25": "4sWdr6aSgqycReiaVyUGDdsdzUrf5fXUZFtANXVweC1uDtJqRGKAxtftG6dw2kTp2r7zpNa9ZGv5PiAR4bqQ164s",
  "key26": "4qNvoykd5zjXEAz6GoFHuZsDsUVRo2Fbzy3rHUhdoWbxE72nLyXCywbJpScN74CycWSmZpvrBANJRBbJV7tz5eq6",
  "key27": "3dqKSonbAoVALvjPAbadJAcs7A14x6o7TnCkar9B3exrupPdmTeAUs3snXyaCh8jLd427C4PMGDZ3rxVdCXajYMU",
  "key28": "2MoRM8a8Q8vYgQw5KsU6NSBYpimcBgLRiPKfi7ixiTkqRwbfUSvofDBRbvmrZqsHHXbysKABZt3CAYRGgbbdmy9o",
  "key29": "33EysvVQtYtrfMnFDXUedQ6EfU6e43XDkaKoFUeZJCdFyzpt1zSRwk1HLL5LCeF6LaRQ3hTSqseToPYK7bdEb3eK",
  "key30": "4V4nsy2cgpsNvDeD1GAW1x41aL7JmQNJTwB6tdkCD8CCW88otv6aaqZFsErD7jJcLktj36jAbnb2sQhM4fSiXTFw",
  "key31": "5i8sUnMbAA6JoJ5ACvNBW6YYHbEzmjtZ6yC9wj2Znose3MvWDFAwVpvet4e7Ahh2HsEoXcrD2nhqyjfz1T5Gfsoe",
  "key32": "vwGjApZcqqXm5ThTPNN49q7LaCTaX2BEbJu7sUAdEMQ5g5WUMCtZMJWfEAtLtafRCyi4WTJoDrbw2LMrpRbWJTX",
  "key33": "3nUsLxyHWF3fCULB52tdcLxcM1GLQmstEBJcWdnSdUKERqcMqPnNVCkpdpYVQ5oEf974Mpq7Ny8LKgAjWbdobD5w",
  "key34": "5utUjRfHNfS6NHKiFtPkuMkrcCoR9gFp3A3CZGCS7TVj5N3wwLitWJ47yVV14L4xHVzcpcrc4dZ7EGQRNPr7h6dN",
  "key35": "cnHKLpPmtTdqRkSpJLXpsEDX6UDpdkhuuZQonp5H225cNVP8B34TxnqHN548BsCQYdw86V2hRRwEfSEUNxgNCS9",
  "key36": "4PBfJe3FnhXsY3rLpKZzXfudSszSBa4T18VLx6zXKJxWAJfPy5w1QbNiukJf3Tf5EFLbuhUsMbEyETQjB1fimn1s",
  "key37": "5z3u9KDWz1PQqDmeB6U17rH2QY1ArdENpemddwWKiKBbMxL7YNZGgcJktuBdsAetfHPASPnR3vSnoPPzPBwYj3dF",
  "key38": "5WreCM4LvV4PacsxbAC38maQyigTpHcjpd8Ph3Zy9aTYJfaFgprSg4x8sHQ5scE1JAvm2YXzWHomgw7p6AThreBd",
  "key39": "54gHKXBfnbzBpTs5zB4xmUBkmSWWNwoFL6URCDiw6ekupxA3dK38A9EggCTThZz8xoPQTb86KmehAa8LPSw6MeWq",
  "key40": "5dL32pdqxazNPh6zkjpJo3Hz8YnKrDUzW2RtjZFdV2w2mV3orrVgcwwJPrpqKZkQGUuVAos5nNTbSqGZwcCVFfnB",
  "key41": "5hdHhyavPRNePid7oMRdV5kcWy7k8GcE8ArUxfreEEW5qthRxWYzezzrjhDncDBCPxyEB7Rnru3NwDGq7MJTGxrN",
  "key42": "2j4Ko4JWhhLAvcvjjtx8SeUvC3qsFAQJa8D196WMq3aCQAYzSPSBxusKYXb8J3keyjCpWMqYSVEsNENtTD2wNYZm",
  "key43": "2XtmRGUjuQWfZZbe4S7RJB1QJY4hAqoVjUAqKm39Sc4sXkPNn6bLoM83gKJSzt7X1ppSMVbmz4xzk7C2B8TDXMLp",
  "key44": "2w9bCyKLshKgH2kng9DcmBtCo8k2mJYt6S3WyTRxmP3zB2obeWDefWYZjhCM9eymBK2cuCWxSCpJsTH6Mio4ZyVH",
  "key45": "4uhTxUUG9ZjHnCg9za1XcgASkQ42LXXieNVJihk1C4BaZTbKTVoT6NYWRTgd8u4m7fVHmuSD6ZSwc4gfqq7wgu3D",
  "key46": "58rWnrzAqvraZb6LQKSUZmnMmrdo2Z2V4obng9jCyHhEwf3xtfFEihoC13GY6FBo6nwE8u4Qe68LGr7bwTaDksQg",
  "key47": "3tP31wZW32caDB7AFTN5f4XXaY7DkTDHcf7nBry9bVzJhi7Ky4V5xYRwGXxukp39CVQCogPVhMoHhJQtGk5M9RkA",
  "key48": "2BxKdTKf64J63Lcep6FRucVQwQ2k1mogJAiaexcwqnVnGXrgzqioULDK4D2d5KGhkudMJUoECEAPW8vQHKRibn11"
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
