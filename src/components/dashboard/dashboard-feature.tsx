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
    "4FCJhGDn73iFjoPyzszeP8TrQyCb8hbAT7usv9pnd45kHuxA7Lrdf8gHpnyXSDosycdG1jo9KjzmV5MJq57Pr7Xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP9GFVNj8b22tvibuoSToX1DifaCbZHVXCVAPFz67NXxG3wsEhK74XQZ6tEnC4J6X3rx3Ukzig9n1xfnYJ8iknX",
  "key1": "5p5nuVzWZRy6hiA1k1Kxsza7BHMrYrtNePELG4Q27UajKoTiuA9nD2auRadZWfBrAycZHfuojn1ShL3hz3LArXQG",
  "key2": "wVjnkHTnr1FtkCu41iyTwLUc4s7EhJx42eRhhuCpQtzuN695YgYTqSgsmhdjbKnZBuWvkMaJrLxRr3gFyTnPCyr",
  "key3": "4LFjco5fLrNbEsShCgmrF2ttQnM8F6zYKMkNqLeiwuVJrsNvvwNnd7oE4tsDGDHuRhXxSf8hKfyQ2wkZ6LxZhZfb",
  "key4": "4E7bEoB5WTsruAjQJ3uateDdCQwsAjjZYCmkgtAjyfZwH9ftaQp2aPDfyQ5dBHuWFBg7i8J6tjc7x3JzJUAJzKop",
  "key5": "2fd3Utkfriz9SEkormz5onH7qmQDGK1TD44LyhYuWSDVsUupuBiPxcbLyvH7HXxskS1U5erwDDJ9YvEwiFjXdBWg",
  "key6": "287zaV9c8uPW73Ui36zc7kvseaJVVyM2jN6j4M5ApVMuqiqvSXdrwxfvFGm2nFnwGnvjHWrzonqCVatyknwRtrgd",
  "key7": "bdUeyX8ojWXFBSxTnLwRYrgqDeb1QEzTKBuLWhyfTTiEWoLZVaWbN46USjVjcSCBMSNJVyaUKv8S5ko7PpjBiv6",
  "key8": "4CQfMhna1XqkKyNA6ZQeB6ohmxQGBBed6ostiAYNaDzTQM71gfKCCcMDqSNh53xgcMD9izNqDyDe5xKLDBnCQWey",
  "key9": "2QdMoNwnBiN4adMNJ1uWtvT7xgZZBU1t3K2FQA3tuVkPVMj4HMEFjLyxhR9xDhxi5yaK34N957bXRYXuG1nCymv",
  "key10": "5MABSPDeKk8QAeEcRDPGKbmPLicDX2wyC6eJWy9bv9sdxzwFHPgiGvtDVVt9b4s2bWLKym6Mi5fs3hV4hJpenKL9",
  "key11": "2Hb9mBcUog6CMKzT2pa2AYNKpxFXt2A2KFNisgf3WetAqwkTa6XPg5bEGXBxSYvnNBU33YDuMsYDNn3j5uuAgjGz",
  "key12": "F8YETb6QSKVTJgA6krGPvi2mHwB3qxLRiWYHV4hUn92VzS3s6kG6FqNrkRdB9BXLtQ14dE4xjCS4baSNmy27ALT",
  "key13": "5ZzmT8QhKG1YmDi4ZfaneU3ut3uJGSGhZZ4gEV5C8BUb9L1jcTpsbHyfGGUPwaLHXTNiLDj6PrJRjdBiowZ3PoGU",
  "key14": "46eqidTZqZmewJcJ7YJaszdnWv5ccgpFisi65HuvCtARa457MMKFf7Fu7vWYQpCKVFwMGL63qSTrrmmtqP4pzaPh",
  "key15": "4rkuYdf1iX2hkqzb5ViN72wAEVkwDwTMQBPDmcd2eYcQ8NRDKUxYQMV9S1WbK6x1YtS6ckkA4QDGaLPYuM4WbveV",
  "key16": "2hKAGjttLQwRrsscjFPo3eb9iKFXEgyP1LNrBMHNA3brirHC7sZPCpiNs5wm8JKoRHByWGEQg2nMBVTPhecETeiA",
  "key17": "355SS97gihFUaWBPuhBsbqEtggs7SvMZawMxUyvVdLufpBcAPLNQSYRwiiksYHVNq5K9znTaaFSUqgswXwQGwB4D",
  "key18": "21QwsbXRdooLmmqw3CMPyYgaH8hdkZoriBAwgxRdiCAPR7Jod3t3GjbsRrtX9wxxUvofgNSUXjM21B1nbNNrdtuz",
  "key19": "5MdEZLujrkm8K2btPSUsmbj1JdpHJNdk1zgdKsSE6AAvZkXu2Hyz8KrYXCx4tqREv91e6YKXuWW3AipFgYJxrjP3",
  "key20": "bGQCkRt7q7fRnSYqeEiYiARijasVmonm1quGFvGbFzUPrB1vqd3XEEabk5bYBbHk2ZmbDuc3CR8g1729a6mtHCk",
  "key21": "2JfwnQW6mynvB6ygfQT7GQmXXcLui2UTWWqcnwjL3RApx2MMC6Uj7m1f5cyKTRoxixoq7wCh1YVQocMjimeR66CG",
  "key22": "3cRPjkEj4iH8knYC3MGja7e7mUH5XYRYrMj1Nv1CyggRwUUKVVp3tnevCuFJFDjR2exzF1gruhjHAuJZAh9FhKsU",
  "key23": "3GysGecxsRZzueMuzspuadoKWiGPE11R9GNSj2ZrBrQbVyQXNRQg3MP1QgSqRBaYMqznEhKUpBitUEDHpHvueeuz",
  "key24": "2bDy49a271tgzZwacsX4DMG2ua7ku9SuzfKV7ztceqfh5ApiJ3Fxx8R9aarmNQrXjSut4iRuiC2gCvScds51Jm6y",
  "key25": "3w9aevfcwjeJmcEhthkiCP3g2eVxra1P7jSUwymVxHdzkddE9VYzLndSTqd28TFEcwp89p9NGSPVu4juo2Cyjf9p",
  "key26": "3T9bozfWhd49MhbRtGArZFZZyzuj7diaZvknxnoPbn6MaVoGTw9q28355cf4RySx2QageirWGGGNEmVscwEHpJWx",
  "key27": "5nseg9UbaDeQ7GJ25YmTonzAAp4QSvukAkcxvcLdag4sNW124c69Mppfvdwd8cGQYCoT2cHTrKBdkZG29ARobsFf",
  "key28": "2rSq4Ax1zt4SYP3BtSpnDV3zo6FeALVzGNRdPTWKZUkHEzbFkazj65NpVgsCfTKwefanKCkrqztuVN7B2ar8XxUn",
  "key29": "QNNwRHR3Ygh3SkCdbot7hzubz1S2shN9GazjXxVVFDUHzxBiPgjXBHLJSjjMbJmGbTzy3dbQTZM4SDLG1bheSF1",
  "key30": "B8rVHXe7rhhCXusiqDxbjzN21MRLD6a41baxLXQZ3H9D7yhHjsdLBAWXeFH9kQTfEvHWFftCLaiHDphsHxd8QZR",
  "key31": "2urLCpMZfSp5T2kDffd3f5y17XdVLBnBZsa35CkZXwUccpCzJFNdBAAVzP1ArLe7tPQwcJLTXJ1jtnxqjx9DAVAQ",
  "key32": "2L3rhpoHU6gwc5s45qGmy6U8uSMFQF1996rRxuojqeb7yFvaxA3J5STnf9E7894qMfbpy8nTbqzTePEtoGxhEa3v",
  "key33": "5T6eP62PX6H1co553pw4wqKqKAbquQ6stYArs1BXp1QAtF91DDXvZbVgeGE7TUpo8KPJVpynW8CXhDgSVXjAtCea",
  "key34": "387xz63poCDcQrJvaZUSDj4jmRrY9sT5sem41SeCweDvmsgJJjHcseTPkoc7WHs7Wur7BBJ2cpJvWxhJfMTLSF9E",
  "key35": "678YSqhG7jamoCi9U6FDiNgUG383sRTtiTxf8muDP1kGN2L6HDWiEjQpKyGXxCqmpjsXPrgapQdKFdtomraCu4r4",
  "key36": "CCuakTr5hLenq6JccqNZQztNcEcHnYdLZzu2RHyLdqpSJuDXgLjxpCiHUcUP8Tqazaifr6LCsr9Vgr9q2nhZkda",
  "key37": "2tDkBd86wtdM7xrPNGiaYQ3grSBsXLvHvzQPuJ53LM4sSGGDe8dvfbdKKaGRwbkwD2g8FVfy9KvvqozeJMtRgZJX",
  "key38": "gFatrZMDocXcUizfURYeeAXnER7YpRwTH2ZYNsVwGLUuwPxVbFLzEjqDwxFbKE68ht1db1a6pgBtcshmHFXuUYW",
  "key39": "5DaSXFT5A2qpaSAivrD3NtfJLMqnnwqPZFqawuZJC923nC8oqXVoAAU5Z1NF9H8XH8qCyscys2xbuB3hESqKzQ7J",
  "key40": "4iTiMD6PD2GkrD1pmedfM43LzhZ21TkEekTkzwNbbFS4LVRj3XnGEBwEF4a8FqAMt7o7JbWDgn1XnXbyDq2ESiFB",
  "key41": "2D1CRvA1N3XxBGvpeESipWVcWFaxeb7t3XsRGWTJZSCqoHzdungJMmwYPuADYketSj72GKnLNJwro2V8UYZymoba",
  "key42": "3j7SuodUzPwza42Wq1pbBRoS96XnAKrLvPyELBSL7pKh9WbxTMP6LVLuHHh1FMAgid2WjkMxg4Hd2cdnP1JhXPdN",
  "key43": "9uocgvbevsHAA4UmFEzQ2aN8EUVen1zexUbhXLvtCvxuG5qEYidxZaYYbqghcj219bHXxvkExRMvcefoQdDxUHA",
  "key44": "9vcVL7UCCjrnp1sHMLDZNdsoYnuPCAbrhjXATVqZ3PhNqH3Ns8X8y8LsjWtYi6hUkVB1UU5akzF4JEmDKbcSUYe",
  "key45": "S8dMFAiumUdoj7CDaeHcMW25hghFUUWad9iARk4yRyd1bg8wQHS3vFMgg7WhA7EtbeX3pHwa55ctAitg1gp7Tn5",
  "key46": "5PuSsqRo7LhcWLPNd69ixZAiNrYpk43mVmN3bPDrbhf1mRsywgNKMRiUhdEpHgZnhRgjsAj7wQPVbcmWRRSmkqrF",
  "key47": "4bqWEdda4gYmMyoUQLtvgcDY4uKFW8ZedZuHtq6d5FXLVRDoAJuy5cQPzquWUyDe7Hq469Xrufmr6DvREvsUwUiw",
  "key48": "5PS68jZuFNzFr1KbsktebLTRHekD8KXJhoAL5WAJ1bt5fxZJsyaY4KdFvBRh9szBSfPRW1Z99UzGKXTVrcVwyhHk",
  "key49": "3wfrPShHHVHndjv8LvJ7JVbrnC6LQqgJ7izwqoQX6iRbjbWoiNcYao8cTgzgnCpTmG94ToXMJ9uWvZRVzTjW82c4"
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
