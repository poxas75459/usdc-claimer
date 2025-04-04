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
    "7miTc1LNQ8u8AsGfqoKfyXHbeW375vCyq3mdFVSduc5LGkN5KT8K1bDSLMq1GUx9B34UHBEZgVzZc2LbPwrPVuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZWVxFc1KtULeTyALuhz1LHQmFo6rrcBaQngy86ku1AN1eoYVD29z5buoGLA22zkHfUGMtvQDkFpWBodAbFNAQs",
  "key1": "5b8L8XmEpZX5VMExLpU9V3kRzf1EXsuF4is8v4QhMNKHscUUjMZjAhUVqsFnPByEmZkvAkRU18m5tWUXumfCfA1e",
  "key2": "3gmPpmCVfWEmUbekyyUgeooHZC44WdPUxBuPcXrRmHofe3SDkD4nUeKGeGvxqZVwBt9mRW4qwsZeUemxjJoq29bE",
  "key3": "NPSWRJ5VYtYxgekAQfRhZCwALU67wkdFG1wpaumMsgiH81gY19QqXGkxMf5pVGGNHKwBJkQPGvRB2ToyYazQ1zC",
  "key4": "5rGk6F2vgrrDg9aMQxioVQaHAHmug1eSGfCzqHVAvfW4rahV2jTnzjHUkVRhAMoqFoTYTxkZ4cGmP8r4Z92qWvvE",
  "key5": "3H1Bj8JdZM3Vg7aqkLd3H9GpMuusgyJjQz46P3XMhNi31T8jMJ4TPrdL1NZ7cNM91KkmzEoERpHqaSFZ5QGJMChP",
  "key6": "3quovRD6UZxsR2DLbqU2PKDt4YZycE12prjDvUBVymuMyRKd7as2XFxGHKetZwfFfB2MGmnwgLUD9S3rQ7VyufhZ",
  "key7": "5t3CZfgfr4JaLjZaXn6AdeerU5p1aEDuxiySVeXzKvyYPdYw2NeHKsDzc7L2BzKCX7DfLw93Lx9pPF7dvgD2iiKc",
  "key8": "5af29KoMC2Lv1cU4CiBGCBcBmny56pF8N6mRT1MxxaJUBL83EmFFEWB3QTzjAdTYxs1nZfhtxCXABpu8BiH548x8",
  "key9": "3TekmP47CVdE3dJrCXx9xLch5BUZV7AzTHvejw2Zgx3YCCpMF7NZjbDmzYne3Wneyfwso2gLqhDoAQSTESPnKP5i",
  "key10": "5idncTCQPi9rDp2BbUVd6KFXdboRNYHQ6ALxrBvxf8nKHY5GMQvEqpgyyS4xgH5KXyzh5UNC2QHuNj9FAKiEXEHv",
  "key11": "5dJR9Up1PMxMkGLYsvv1Yt2NXBskrDraHzupvU53nhBJyUJ4mxw5N9o3MrDvsb4kxYAPthmnWK8FGxQ7564TUZ24",
  "key12": "65X3VenkaYLpRp99YFG1r4QkSUxU5nbiYTqoc1ZJ7Ji5NieNbA8oQz3251bYjdP1hRigxFZDXGMwE9cywCqCoJxf",
  "key13": "3BxMjpBE8qGMmtBUonDzM3jAYn3gfxAv3g3p24xWa8BSj71Yw6PSpQHPAUrtf5LSRnMrT5bFFf8L4nVnBgVqHQRC",
  "key14": "Mu3tDfKM1y3ubTQMzudL4fN9cKv98ZM7yQcXHnrTTnc4xKhzA6VEzZrmrCLKnjbfotpML9Rv2o24LShiygTj7aq",
  "key15": "3CCCoHq9NWMk1WVz5CP294Qq6XPNmdLtPxQtwaVAMECEERTuo1yyUupAM8TueJ8ip2bLd34reP8AbpPc3XLkDhwH",
  "key16": "3rcLALZjGVzXmS75eohZBpB4scvpGzWtchRzCnsrbb9sQupD9C54jgiRxDqyzfchiVb2HN1sSCUHkA1bA3GckecK",
  "key17": "3gRKDLhGzXVYfm4nbCjjetf5TLEU3RwJjhuxE6HChaMuyNDSUZvFomUdndZEyp1t2N2bRUJZqAKdbuSxTv2GRWbs",
  "key18": "3rTfJsc8MS53VXvByXZD8YkZTAa6J7TZy79pM676EALjk4cGXKjEbnosonELeSt94o1gzLt1EQYuTYEnXishpaDi",
  "key19": "4oHPmeMRbVcFiLkNyKTVf8V416L8V4cfraw4TrtrrmUa4P8WLUioSyqny5bReh7Lj5PwWFnuTKgVbwb9nS3dAbCF",
  "key20": "5EUkjqfhpMwMd3pKy2ez6j2tVojUyudKKbkGCfasmATiCHgAcC52Pgm3APHCiNXnna4Z6t557AViXs46CEu1e6o2",
  "key21": "4oRHEqYRaNyKGobwt2rFGbQFV78aUSNgcY211ekr6jgf88AnTdnn4QsayrjrChiuKx2eUCkyucJihkogRf45HvW",
  "key22": "R5XViyBTxd4BkbKNa241zRpbmNFDSTbx4ipirPLWoxGyx58ambpj7redPsHtaWyhUpyRwGziPS6tMaYNE4mfnvQ",
  "key23": "26eS34srrLMQr5s3L7TJSu5Jkt9Eg1hzSB9b7YNNyfSeejaGLQHBdRqCdi8Fx6Fg12xHyuBt2aFHRRWzAd8DCj1N",
  "key24": "2xpMAtKacscfAHLkng1c5o9eM9mXrHujBfaH5pd8Ghbfv1FgHVwzFZtVFx3ZtWdAtqaZWsSU281ujbjVAU24wK29",
  "key25": "4XaGYFpsyE8CJB1fa9e5sTWphv415ak6mVU1zhg9Lxtb3LWPdGwF2FmSiRgKSjcB5LFRFDYkaHQr5KL5JLSc9LzH",
  "key26": "5bpZ2Rb2eiE6qsCntT2rsozYtHXcP74oNi9FVZbnm7kZ884mai5d6UAPsr9uAPfUBnrRpBhYGd9a9pEckXmvsjrF",
  "key27": "2BFJa7SPZL3UGPjinR1GdDtR2TF45BEHBCGagWr2BETcmcRpUrPcEtpKibBwYWBVwPVEH9h8yiAwXi6tava4VWbN",
  "key28": "5VUA1bN9VzNwY8RtTGFA4iY8m4E4cMQhbSozEJFf4FN2soMgzzYzKfBTKgJxHTFRLTPiEHhhTiiGWV3WUerXMMqC",
  "key29": "2kqUsmk9cPhF7LnbKk5AZfkcjNaSQV7qHMUWNHkDmneesHiBzqPiJvvkQURTbqQDnmJjkY3umSSuYQNH2RkMbAWj",
  "key30": "63jkfmXQsWMq39L2PJVhsWZxMnYB6bdzgf4c7sV24CSyqbUzeSRu2mvwMXeRV6kJfKxwGrvY1wYV5Fd654F6nwJV",
  "key31": "3kH9rm4Wj2udsuQWoBUJKfdz8mPgDUej6ZEcRCVcDPjnKxvcq6GPzbmuPXbeYsWWGwC2yTg14JJYDcRbdbpmAqZe",
  "key32": "3xx914A4xr2P5kEHJLXwhZFWc69QB5s9vZjAAzcv777mDEDhVZZM11eSxyK44drDwpijDcia5pdLBD2hf2fvd5cs",
  "key33": "3XeRvVcACrZZqjbY5uBnNrBkUB6zzMmR5oLCh4LpAAtZne5qwYxsQEkXRmJ1gR1iPn95WgicCkWepoe4Az9FXvQb",
  "key34": "5s2t96m5kNqFy93JA3BPyYE8u2JsFpeNAVQTbUGfQaFrUWyveHEsoyaQXqj5x391s7QUVfKcEAd3LX4ZT5Ug1pA",
  "key35": "3kbkdSFNJqAAaY8UuUtguqAouhzPrcnbrFNCWBUnww6bFjafB2VhhDfsB7bFDHLdNiyjuVMGG8MZeYFhp4ruDiZ2",
  "key36": "2LnXoVWjhAF1zKFzg5TUdihW1sQFPvSpPHhPQcHUwrdcBTYKxpWhLWQe5hehhza2QTz7q2iNoDdLMacqgoPws4Et",
  "key37": "X4JUCyU19jPSx3BcSA9yEmR5xqvMyMFWqZTU6zJtYxuvsjiHnPeVNSpUrRE173h6RvrZhoszvH7bgvwvxoi7rDk",
  "key38": "2bTqtTmpB9gum8bncDZkb4MpXXYupBDVXAcTfG2QMCP8zMA1iFbUFtqPdVv94Q4zbQihDxzrjC82oADMTdsfN9PS",
  "key39": "4mh3spUayp14C1e4rQQEDtZ2jMET9H2W9hoseRfTUKxnZYFgUX9zbPweDoB8i2VuSGr3YWL133wmAFDdvo9Yp1Pc",
  "key40": "UFw64CCv9bqZcRQcSwR3EyR9TwPa5BSTF4tx63639P4gDLG37JjtLKfhY1PnVkk73cWipNFRnhhxf7QPnnyz9r4",
  "key41": "4nLLG4iq4sGnuKNfJYofVpWRW5A4ez8rJTPZE36ctUJrWCBn19apySWoDhqmBZG6iBEvjfVN7Fg4QWSnWWUwGAo8",
  "key42": "5feZgJGoi8CF9kjPsVesLgya98rWrjPKy7pmQvnc7eHZBtkW3an98Gz94uXjVWv54xv3t3CLruCQTho4VfRGaTaJ"
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
