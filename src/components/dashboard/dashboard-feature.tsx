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
    "6XngpoKAYuQaBxpfxgzazUQszLda3H8q59R4zcRZbyXPykdivPsbdq7B8TnSzWQARSgeJ5YakCp1MiRQRby1i6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7a45EbQvfxFKzevybGDTS9oAJmuRHWXoEBkkyNwGAaQThMSUufuM4J1uLUafBqcyB7VY2wcwaeavW6fFmNDqth",
  "key1": "63mbCFmHMAZhbW165xQugQK1KcXgN1AzRfUnyh1SrBs7atxG7cQ9GHLHxVyiXubDBykuQQ3PhRj4mEpJQLJkiXrZ",
  "key2": "3DCdnKTfw2ABDJuQgQ6XhfY9YvHPT6VKy3mK7Vj1pNd4TkDNzuGLyksrxm7JuavKsJy6uHBaeusxHJoChuJg1Rgx",
  "key3": "4YbbYEKzbQ4nMyrCDR2tLKZxXUxsgwG2Vfs4jRcPBXxiCL3JDsPjUMXTjNnaCUKJXq4RY7Sy3yAezmTkQRwmtNxk",
  "key4": "5WJyT4RtABmzzScX6eVbQYjy8aLc7Mj7Ce8vWE6q5DD2LtTMTQ8NoETkJ35A9Kv1QM7cfb1aSc3mC6zBJkCPzCJH",
  "key5": "4w2aCzNxyD9FPvmQaeg1DpnhpdHnhnRyS4D18W5LyPDEa64SLcSnE3YoPaC4Co3tV5mnT44ssGSyj1P5QBLWFg5M",
  "key6": "uTsSTiNqE7v2v7CaDYGuesxE949hNmSGDAruZYPhdvHTB3wxqFtvdfuWCS2b8iS7y43eEuwHVUgtUSiU7r2nshN",
  "key7": "33pEyyooQw4zu6hukRgyDoFu8bnkJsbwAiJuHhBS1wgCSdLNTukdF1DuL9NEAjVWsxHTc9jorN6ji4Ys8KDpZWqb",
  "key8": "5w9JhU3BWHPHRMwC1hNXnpTUDqxujmtqVC2M88qwxJBtLaZseK6H8jsqSaojabXZ868QRJ8xQF1DzFUzBKxkuYjH",
  "key9": "22TNbb2VT5hADv5jsmwarDD2kukKvHSZ4QV36WzmeHeHCevWQoLVsfLsCD2DTuQAocZf3aya1dey8AyRwD77mgm4",
  "key10": "3S7YA4tJebwCPe82Hrhq76RDA2d2N1wrBYAqqkXhVegWNkwYUask2jm5Y1TLfHUKvA9Ph6jhbQz3Ny42jd3rihWL",
  "key11": "2P28DsQrAnP6vU2FxWDsDL4mMFDdHCGXdmPd8WQpHwphco9zdQe2HksHvFQjXFC8c2Jbtvyf5mMsmj5jH2yVvt2",
  "key12": "3dKmX9odpgRQUQoRekarcX3f9tq5Zz3oEt7n4shvMdvhvY9QhPPWrZmacwcUaWvDaSorQG3LFapDj7Nw4dDps7dE",
  "key13": "2Du2vE2WyNXWquHKPukPQ3Sit2LK8WzxYhQBnjc6tGoofFKJErm1muXq1L9grxn2DkVvcpttt3HdtgUdXtzssHay",
  "key14": "huU7aRDTkhea3848Yw69BPiyLPt5Sz2Ft75h5q8rWNW6jyp6h9TPqXYZJTSModeiNRW9m9w7KRfP7on6FsfjP8h",
  "key15": "JrGDxntEfFggpccCS5fD1rV7fuwxQgS8vMLWzum1aiBHavW33yAkZBSSUYcXAcykg7DyNBoe1hsjum8xHGp7xAf",
  "key16": "MoHd4xBFGd3kSJcUHAYtLv94QCv2YMgWUDJMRydaR4a4d4mJ3Y4s2enmcawuDqCRuxfojSuC8hh59mkLEp4i5Wz",
  "key17": "4smrXPTeGkJyviy2Q4gp8qubv52FmH9HWVaVgcSnFMwq3KvUEDv7LEXmLfFJWhvJh5jUbQo76Pq4JosoZkzeAtPM",
  "key18": "2AsJYEv8eHJFdioUngqzdthFNogs2fjXS2pfZeUZtAb5ayW74Rv8J6XmTLReW9xMP8sJTUTTnZNVWEySDPGGFR1a",
  "key19": "2PfwwQAYVrKosoDQbVK3Xduge85JuTG7SeRWhv9b3d6vJrtavkw3cXTSYD6Zuw1CHM9o4F3n5545fZJgvu3am7M4",
  "key20": "2bjLvXBP3hGcG6vPQkGx23Vvn9a6mPz58mzXZ2MYTz2rWdbDqnMtWTb8m6PyDtVESGwLz1vWWcZXgHh5ov1Rtc9D",
  "key21": "3tgVpUxXSGNszcMvK7foUZQnnhBCyjWCzcumUegAn9MYd4smF4jbZudu3Totz6czbm86gsMLE3zSf82dAAo5qqMz",
  "key22": "2Tzew7PXjpUb9R5nqV4B1v5FEVQTnKSZdtVnY7HqrRFFPkTPBVunV2jxfuY85fA7nbG2RggER2anMoZDojEaD6od",
  "key23": "443wy952bBbULqGfuwPSZRvhBxneGq9AvbbNoxQWBdZbS2rfWvyg4rf7N5HukLjfoFHQiKvrFMNfiUh8iAfjEZzL",
  "key24": "3kGeBXFxupeouZpWFWNpBwuhDk18UN1z31XbYgwK1F5FN4JKk2WyWLWKTnu2facQgXaF4prsVC3TEcdzb8ESuPHu",
  "key25": "5G7MrEn2xSmdgcBY6Ftpdq7QHWNyzJj4jJ7gWazf66ZKQNXuwEqA9ppZWB37aLbrdR2DysZPw7KRbngRuQoKiouF",
  "key26": "3kXboKHCwoXBze3u6Qdef7hofU4coouhhZbVxvdYJH8Sw1JxNXA9prFXDgfPwYEytPB5G1nJ48nQrpMXfAUfG7Cg",
  "key27": "EweNqr7EER9KVBy2ckZFxiynS4uD1o6SrkgkPTocHUy6prvpnJnnjXnQNVYjNkzMsTzBiRYmG9KeVfsY7aN4rca",
  "key28": "3W9WDUjCztbEAgeTHzUyFzGz5Y5rYniEFipyFGr4t1FLN12ioECtqK2wH9DZ21rsQPk9g4C6GB1jDxT18vfvCFfg",
  "key29": "2aLn5hxQjnmzgaBBqoMoGbnicUV8SDkWSicBGccvUiuMQa8cvW6QHJ7k6EUKSZasZWj4eBYNdALBtYj9MBKKoehj",
  "key30": "EsNLeMxH3SQdWMRBdTQYXfSDp9s9mohkTwyVrRNMS2prqCE8587VmYUTUNVdKVEHgSAi2asrUCcW2s6QtPwy8qP",
  "key31": "21z8g2RcbfjnNzCthg3RqAuRRYW9TLbRcSANrJhYNW3qKZVc4yyTLQ1P6bduHg3iEhUkHk2AJXvyUEMLe8B2LHcL",
  "key32": "3WjEvmy6TLGVzEjyJ2H7ZUrLkWoFPoczCfBRTFsc3CtgS1zsDT474DDoPwBEpKXDPym87Y9VhwxSp92ac5GhYDGQ",
  "key33": "5rrW3ty8AxC5jgBPZRs7YoJeU7irJQRafc9fB4PerWJEQZNp24WMQaFVJfXwsjmq1DEgCrLPf6omiFN83uvfUUrg",
  "key34": "5cfRcGQDuBb4rVxxPBY3PAGoQiHkMQzGkZkGK3TXZKKczBjV4qHVpG2c5qhyYqJvKCA7uhjDLrcdVjsYKQxPVD9r",
  "key35": "31RHP246a6MVWuAiFKUiPdMD7mxJz7dJ3YF3JaLedJf6XEdcKxeojkqLSe5172wvYzjhcKZsWFwd9afJvoKvrLEy",
  "key36": "4v3vicgwv5itWT39jag7UvBXBL12pGZfxS9ZXZfT81qQfzeyPZ34zZfrn7VaUT5DVHk9tq7aZuVr5nRFk2SKMKxi",
  "key37": "31Lwdkpi6TENphbiLekuL7QM5zPTx8WXiyWAbYoXfVSsMf5weFGzQjpaHhf9ujcM6xqKAoVEkzZtR2SqeFtRVR6",
  "key38": "3rxMjkMeorcevbbNB4vD9DKgUEo9YxvMDjjHp8pp25w75n9KTmouxA82bW62i99stGmyyV5prNNvH4WzmiK4LNsp",
  "key39": "2CUpo1aU2VozbKKg5tdzTfndcs5rFu9edj6otwWh9HxbkY4xYhJc6WYiqP5Xb983ZTaRdR7be2LvdiyJD23rvmw",
  "key40": "422TfpPuFUqXTqtJ9V1jnD41Rk9EsxEEDv8GM3KDDowkxf2sBRvAmXUWY1Dp7xd2So9EfgQsGvmxR7a1aLhvSVNa",
  "key41": "3aKuRGxisJ6APd3e17HEvNw9Fr3YjQZh2Np18ojtS9iktwffDUQsNN2aw4rscu1p9iSgs8cFsyoEEWJ1n6h6WxVp",
  "key42": "4aWaqK7y7KbFbnX9WMT2AjZyrwjrQG5XQwV1Dy3UmtkizvbbdLyKUiV8t8K6mJgT9wbWo2KVQwSabFduk5bkTpR2"
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
