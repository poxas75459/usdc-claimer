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
    "3uFCTZmByJwcgvyDnav913jNLuUwuWZU4nG8AUZGBA9NRrqgYHLfjAjMFUhyUMBs6BxJ8w4Hx5UTDAyTXxSXq6x2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Pj215SzAbLYU75wuCr3iPch85SqiRRFqizDnwbXRPxe4Q78QjL7TpprY8zb9BDQtxCtsR3jU8n8rqaQ6at85Rk",
  "key1": "57tBnNFYq4jdSctiVdDTZHiFiHynX8PPHJxsN7arhewCrqu4XUfXkVQwLzah8bkuz4uHG9JQwPKEumDVFGWo53h6",
  "key2": "4ZfqxxPwkBTXnf75ukLJQGoXweeCLEEo3GNxyMXquswT3KKTETZbedhJLSNYUB4cZmuvVfW8ivcq4hzscoCcQwCU",
  "key3": "3zoHC4Eazx1Yq7JMvE8UqGH3HNzdww3CwqbMMZ4PZMr3hmX9saYfiYqiWRoXQywHhcRXZMBXTWULR6RtdZwsQm2i",
  "key4": "qrt6zsC8idRgUtVmZ91LNNowRewY9v4H48D4zwW3CZ1npS4Apy2nuUt67KBzbCtnr6Dk4vm53EnVtCMuNRPWEM8",
  "key5": "67kjB51zkJNKECjoYt7gdpWkg8U6VadcCne9KgLuSuUjm7Pf3bNkRS49dpurc34SnMoNKFCCLd4uqFqfWf8PAn5c",
  "key6": "4PieZgcdm2VfTsXvrsR729uSCRULjSQN6S7ioFArRNQpbW6M8MKtnaWmF8ppfGQPMaGYmTUD7pigW4ZV3cCD6G2R",
  "key7": "5FSk73jQzeP4cHWe8hHzutP857iK4abCtGawbkPXzZLwaXxA5J5zAZZhPiKMqPqd76XMvNkw7ZgyU66AeT7JiQVP",
  "key8": "66pLrnyNNAR6f9fks11bZYULUj34NiiALd2X7E3sWHmC5mGijbyxvogUV244B5HbD4zufJf4c8AJkeeYCmMnTMtU",
  "key9": "5Lhz7Yci5tbrXdBcNhmm4fwnmDdJYzkw1UKnV93hq3uqFpmNtECGpPHRs1SnTSPXUe4M8z1x2rQ8LPbNgPHdoaqr",
  "key10": "5Zt5SBJ9fnA78JoM3Nzefs83YTsRqaECHnvmkUYt7UMovMKHFR7wXmJLPQZreJwKfhoCDQ3CH8aTRXarpPaz1n2f",
  "key11": "prMvdKDAvFNChqxuH7GJmQ7a2GKp1seJcK1tHjh7o4nQK7PBG9hZnXXNa5RhesANagmpeUKu8TUfWARTpsQTr12",
  "key12": "3kvYk8Sn53Sr1DtefmBiKRxARbxR9emqkXpN87ETEywPYZH3q8iH9DibeK1sxmNuJ1i9NubAy548vFCUMWK5F7hF",
  "key13": "4ZchpMyoE3AjibwBsJa55jaiVy1yHsVPyoFsz4sTPCSrYWL79q7n44SdhjxofBhs6dEwCpWTkE7dPNqL7oH3DTp1",
  "key14": "TJKC1GyT2GSSVHyV3nWj8xtfjJS64kzGA8qGMmgEN8dbwbuhF1htjtv9qmmJvYeRmYCA4k2QTYrD1eoWjM7a1sQ",
  "key15": "4ZZq46azxWSuJ4BnMv9dqY3zrkW8EBNWdAe5rLkTk2onBeigcA2eK9CHLuAZhkXWYHtzzaFuV6bwzkdaneb2iEyk",
  "key16": "3573sJRYqngtSoLnsMMT8e1L41LZYh29g8PjxQspiqRgPAgyEY4bsgDrfvBNXtHuzark5mo1vzWx5ABNjfiqYk31",
  "key17": "3eG2yk7PMSGC9xeaDi8GsUqUcaLogzAHbJiJ6C9hHcQETsJJGgq48rFRwm2nMc1jG8tg9Lu8xTXC63Q456omPteq",
  "key18": "rzEYNQSR9AthLCgvny1BBvnYaiTAndVvR9wyoSb7E6KHFMWJPCzDVfukjbFYqJkJqn2PnHYm5F3A2eveiEbYr3F",
  "key19": "4qwQ4ZVbCzSLGV1UjT7vkRxgXUnehY7aMLiFDJ9YnsuJiPra6CQUCah25qVwbEeScrhQ5pX1EETkWRB1QPraHBFD",
  "key20": "21vu7zz7oXUB1MexqEdrj6sBvomTsF4HTeD8hE94bCkomBHrMF44ehnfvYjiWbvKCbs5q8KsJhcLnUkLbtqfPMqT",
  "key21": "5xvqTpui5wkYN8Ce24BGHNg6GWsFLCtkbSLzhDD8tqeUSJpJ1mcG5cdh9r3RbJazBRhAfUugp78HHUU9n3eVjEwJ",
  "key22": "f8Pe7Tpzd6f236Jhh2X3PaRLASaJ2EiuC6DgyAqB5hvZs52uwmgEXaoq1MBCRqNenYuAtTUsTk8Q3GhvBLVggFK",
  "key23": "eN6ywTLNmCY5yXXFULdViP32evvqoCpsj4EoJc8NpXVhwKoGBuLx2pnKokv7HoTKhZmPtmEJjWi9tYaUgZkmUqV",
  "key24": "4eYPAnt18JnDLvBfASKLMK3v9xmsd7DCKw57vQzTjebtcAJUjSyo8FPJGimExfccJJYQ3asv4YMKujDMHTcaqtDs",
  "key25": "3QUqqVafBcE3WvxNMefhYACyJZf6rCVvvadX2bHKEubZWHVZ56F95dBpH3HaawWr6JUMQJWDN4e6apPYW4tr6bpc",
  "key26": "3QCDn7bGqggadraSGKxurMTcmbZFhiSdK1T9pmZSvJJwc4fXymo6rVk7h687W3NrWmoLeMqoUBjkbhFxn97i8Ean",
  "key27": "2fFeXWS8mS4wHYbxV6nZC3H9ZdrhyKpCmP2pqZ5D13ZXkyXrudjuTCc7TeHdcxkfEGjiz1crwnBFtsj75z6kjMn2",
  "key28": "5wWhST8zkdAGXN2rNzRDLN3vEGHxozKPBbAPtkdTjcZcxg3QgW1KXpJYrHsjE466oaz2wTFBnqXb1SFUTnNVjXSg",
  "key29": "9UNmoNY1jejEq7mXBcdqEko97uP4y4Ws9ZVmbASpLPTorBAY79wXUxqTE5iGCgUUTLwHPk7BUw6gGK6zw1ApoTv",
  "key30": "2xfJswmh8n4BdF2xNEDpCmakA7hiQfVHgxJ1nbdQKujpzpzizMnaTdWMhBBAyaM6ycaxrnKzaVmW9Mk3g3WdSZ2M",
  "key31": "59uV1VLAVY8YH8rwjeq9t7jcJbwmF7fQhGhtDvvgoYRqJWBa8GxSEdZqpYRyH4pupEeyp2SA6bPbDNhrP1XBDGnx",
  "key32": "3yJPCC4xof1r4HXjvGABUVYseQGjPQJuBaTtEK5rdAV7YtXEUpVvhCu7gcb4eEQXFGBNdkNyd725YJz1GJ1iq4bg",
  "key33": "4KfN4Wi1F9XNSPeZafC6DjUmEbkdBgLTMfHx5CNu2XvsmQ7nVfepQ4VPqZcUx4h6hDpr1W8efKSReJiaNvMnTh1b",
  "key34": "4ksH2iYBTH2379fSYhYhL79q27eRxPkB14WV38CMqvnmniPx4FEtfJLUwYvuyv4BBLKWRJBFXEXRGXAxE6QvgkYr",
  "key35": "4gfKFhtbaNPmopGx4yHtz8VMoHds6Liq6gBAhj3k5ejHTx1afYrEZigjGzXix7YnrxHHgrVDtRNxaxqqL1dp5tCs",
  "key36": "67RmERoeLbf23xKLgCPWYvos6kkQJYE36fQH1vy8tFBKnLTkvBCeuDvxwiC2BoPYc2r3bAHsT5zKsR9cUJecBcSW",
  "key37": "3Z3BNX4yywBDwoFv66FjRKUvgH5vnpHjuYnK3tw9bmZbWtpnFVHuyktasBUPA9eeyJgKv3mqQe8xmJDEtRomXkpt",
  "key38": "52qNeapq76MFpebLHCkKjoD4bfpA9KkLBJXLSkPwFS4scB5MEktNMr1N5WowzimAHvnoKtbDr6k2rpYgxMy6tQrW",
  "key39": "21VBx8w896fH2PAeLE1EARruNHBydZ2xEuUuCCuDmqSD7Lp2q7C7ksqpw2EmBaqGvXWpd68bJDzbfeFFjpFBnrjM",
  "key40": "2NwGw8cEUGosBKBWJaFGSQjcR9zXvwVDtdqryE1SLNbVpk17tsgD1AxTyfeVC4E57DY3Yy9wPxXuRfKjUcJnRmUK",
  "key41": "4peHuNw1TnRtCvFrtgffR8rRuv2u9ubY4t4xQKnKWVU4sEqi5ECR1LhMExCEnJ3YQy6RoF8WUNed3oiopZKGsozq",
  "key42": "58d5dZKT2F8VT6sZzvNKswYA6seSXhk6r4NNf6f3vWX4LbaDkLUgRY7c7fpxkinJiWHwzRS8pmvuy1xSzqB2X2iV",
  "key43": "5HTAzzEPk8QLNAhrxJJL4QYiuiKqMHmuYL4LgzHQa3DU3j5uZDJ7aFMh1ZeXxv4FGjcDbFT1woHcKB75khTd5eXV",
  "key44": "3JtV9qJAaREgF6uqAHoSNkF29gcwqUyvJNLoM2f3obKHQJEEJg6jotdRtq93YReKSD7jYw9o3B5McqC8T3PXwbGd",
  "key45": "4o6QYSPvm1rFH5it2ViF8ETG34GCQp9dNNvQgXZbTgSTk1fDSox8LjeqdnhWCx34r3pTRwUhTcAWosAh52TpXU9Q",
  "key46": "3L4c7ZobFDbJyhDz8REZ7mfGhZs9oYPPY3GxczP22zQs3AWdoPS1V8GjTW9Mpuz4xSw6iKafztPfDNhQ4bCy81AK",
  "key47": "5grPkeReKMt125MJMZVqSmMc5FeHpj3PJifkcNkiyuVDYTwtfUv85YJsWTBKatUoEB44nuKgXfxfa4VJiaP8jLQR"
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
