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
    "2tADDoWEB5XsdDw2fqX4Ei7woV9nK9QbQrgUes4pnbwtDnzf4WVmTqaLXRmejdg6kuGGE8ELmNmfUG6FPUdUtGcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1W3JVgk8y6MAwAzv1pZA9qfjSfC9rZfe6SvFBAHugHGhJaNG4Sw16T2MykaV2RRDkGryWKZ47Knu1XV2aqNQcd",
  "key1": "47ttAhy4frC2wE8Hziovrp4oPa99Hpt5HVsFU37jAuvSpJCN1gu6TNZvrdiZoxF24W3eVZmBUoN8jGRWrqSXKAtX",
  "key2": "ZPQnNr7asn2jBtJ7gRns583PxfZPQu9bGncNv9M41i1UJpuvmfuvJRTL9y5amg1PvfhjbkXH7MSdAGqUCL6s91K",
  "key3": "AoqDdtkCm3qED8yDrU1SNpuaeRj79duwJvr7shR9d1yDw22As5zQ6AWp8aXBfiLSr1aLfUbfE1Bh9o3GiokQEkx",
  "key4": "3VRVpER4FXi5Z9ghBQxqTvFY9ke3xSXuPkZmUs862W1FZPvUWhb1vKstCT6D9KZwec7Ko3BvToFdBGhsDgmZgt4c",
  "key5": "4SGt4HAGcmxXrpG8R1sfMA9u2qJWT5yZ6vSx7gEcq74mMtuXJbeZM8dNqXhm5DHQR3MqrbJtiL6M18cpgPt32G6",
  "key6": "4vxBVEHwk1FVRkrqLuqUyHh8p8ncTZZ5RYTxmn2hmPwMBG2EJLLZamDiR1yNoGdKW4vSRQvhBfNbAax1rn2m8xWh",
  "key7": "3vehi2gtLtVtXq49S9g2KnHWAMfwpCpMCVax6bRY7q8drkkcpJgG483kDNRZmoC6CAwQe3p6Zibc4Ydskf4Ncd6N",
  "key8": "2bpJb4bXShMfM4MT4hbAt2uemeWQR7stGaNHtZiTtkUi7nTAMqc3uVp7AtRxuiDz4e4x9oKUs1kLeAxnzgHRnS5P",
  "key9": "42uW1jtkNUsbXneaL8WmwF3Vv4T52K4ExeuGuMyocXF9mfNyizADENTtXknbrM6FiR4Dsba9gbwYAj7nM8bvKhef",
  "key10": "4JTZMqeoNgfdb7K3SvdWQ3RkoxeFUFyJ4BF9AGgwHcVKAi5muDZfGmTmEYg6fAr2MSQB1GywdQ6BsZXfituB22bq",
  "key11": "5QfMiywZrnZQTdaLsMjGpCNeojfQ6dPdayDwq9Jx1D28oCKrA4LPj9bL2cx7WR8kBfxb1niNXrHfLN5FjX6uwdgt",
  "key12": "5c3Ectr88DKg6GWLfSwyBuJqj3sY4CmvGLs2kreaqFUxmkkHmqULmCw4WprDTKtDCsndHaRC4vSErsTdxhHV3y4P",
  "key13": "EsiAdZwyc2G7Nx6k6MmMnh9f56CuyY1fNVgVtQGgbEzrN4HtbTEcFyspqQfNUv7QqFGhbtmLD82o8HVPXMCNBYx",
  "key14": "wU8uLxq1T4PSzjqNVTGCivjsb45x1fnVQzrMtQAfCnwKw8a4bc5kLNT73X1aFkHcfA5CtGzpnApt3d4vLgqG2Qk",
  "key15": "re3z4kXzV1p9sn6gKGWczCZWbcmR2Ayc2bcMNTXstfPWGzjzwVwxi6uiEd97CTWMCsRF1KRxzoGZ9v5yzMSMjg4",
  "key16": "5dfvKTNt6dpXWn9AnpvZWHfW4f55VwEq5PqPSdMB5pxosinBQFkb5kQpdpxGtkBUdMwsTNdCRxzpuddT69cbXtJs",
  "key17": "ibBKumKkPZFJpSPbML2jF2EJkMgMQtnT8GerUFssnJiTRGYbuwbttzLfCEXdnhGXuNQ9YAwTceii3iRSzkRWf7P",
  "key18": "3ABdKJqzuyM7QCTq2NpqTqWvokTDWVEefqtQxFQgX2wbDQZRKK8Du5bYJFKpNrD57ctezuRN7ePCpNitEtqCBpEj",
  "key19": "51jgg5zXjjqWzRwPrYZXzxRUBk64Y5qEFo3qyG3KKsmYJp52brw4U96B8KLvi29GNQGc4KQ84LKKCNXsqzNRvBag",
  "key20": "4ULUkUbEu9FTvwtNfRsTgEWccsJFEmcMg34626aySWjbkwW9Bp1KDF4uwFnWFhTyrFaHT4LbPkigWTzL6aHCR2Fn",
  "key21": "3p52R5Fnkn7qAtgtmpsxL3mNSoUGae7qmHAAZcwTrteJxQcSZwWBoVoXBGKhzkJss2FZCtyX57ETAP8DbFQruitF",
  "key22": "SZWZLA9CUqotkrYX7sh4MFiYaP3kFuyRW6YRKBzZja5SmLTZXEWM5Q3Mf58wraGXimQcexjv9uNSHLoWSY3ukdC",
  "key23": "3B9gUgJHGtY29kGH6uA8KvYx11fU4geN1Nyxt5Qri8zQnCG2YqatkRrjSq918EJqYsjxyaz8o6JeTd7fuoYV1oHj",
  "key24": "2egpA7ALDCEPXK92iayXw1W4HKtFrrAbuRQ1jHZAaLFdpKxf7jGr8rW7E5Cy9RGZnk64vpJWk9MVR6VL7pVcSSQV",
  "key25": "eZXgR88riQhdiqjbxxwvKkJLYwhmeC66FKeR8JcsnTiNfw1vhavodA88YtitU4x9nVxq1yMc1V7rMJiNyrBfDS7",
  "key26": "2boPiwiFjXccc4YZAdSgprpFVpiNKXBXoTqGVjUeaFxoXQLqQBmGRJ9Hvycmf9F31xs8eBrj5cDpxXPpuEdZzwig",
  "key27": "4Vs4TxmdEBhLjr83Em95eoc1cmWTHh18D6rWpp58WT2jHimu9EvSvAUytaFDP68ePnztGTR92ZtPZnm4C5Kv9bZX",
  "key28": "5vGp5eYKaheU3RJKGpP11iKWkvAP3Un68ogq29i59gMPUtFKqhTPRSZj7nk43dNru11sjs2Pg9ZXs953uyRaVtgF",
  "key29": "37NcFXcBLhskZ57Er61Fv1SPASxXdvthJM4Fxc3JtR8vVwCqrVvEvFRVbqYNUjVreDNgpHPGdfUEnEAuGqPu5rDo",
  "key30": "4x1fVZAsQeAvUegmCNKX48xBBV3VpXZJyF8mDySQarhU7kxWxYsCcP5pmKuX9rsyqaee44YxXCBgNs3UAYM6hYJp",
  "key31": "4ZdVm3SpET2WQ9TxkPJcUci7F6yicSKeUxbMy3RSug8yuSrFyyey8QvoaKiSuFQzgtoMyWb13uzPKjNvCQbBCm59",
  "key32": "4sUnsLJXQaJqpBM8mBAvJ2dQ8GvtjLEkncRKGB176FWxbgPQmUjyjZCoSvkwJkL5PqbuvxsmjQgm8ebNt5FDfbHB",
  "key33": "5UauxyvfZ5WYAAnfVmScBG3hAtQMBa8rvmMwxUE5Ah4on8yjzzGwyh2G4kvCoXAo83tiMixZRatVLEjPu2Gfdk3p",
  "key34": "5Ucr4QbpQD7kXJuoFGLD2KLzZDAqJ5uC6dMr25ysqV8x5kWKZv33mHZmQXjamc86yZ8hRitFGvmHuomFuG425LE",
  "key35": "2YFCYK2gsDx6LZx5jRTQyH5upZQ3SMVXY7w2FtMu9mv3VU2DyjFvUXpFVF6nFvgEDjWCTGuTuy5Sjd7Vsb6H1spb",
  "key36": "2ZZXMVNHQut91gMZdWSs6Wu77LY93aqVoHuAqAWwkEGnzM1Sa5gGgNQcRwqnGSQLSXfCPoCkqc28xLmCA2xsi97N",
  "key37": "3FncjwX2uFBEY6k4ixZDs1DCBKpmw6eSQtu6iHv1epuUgvYaRnyfjZEtS1qu14nY58MmnsEmzzaUUHa3H78AGnYH",
  "key38": "VMt6bCqWKRHPwUcffnR5iJMopemGFBzrBGoDA9Mv3hYhzZ9rWBXfxoWz6Z4xiymSC5GCQUtkEeMcpx8eGirM2bt",
  "key39": "5GX1xdCb9o4LVamxXdAZmeRPKUerE6xrMLoJjpuxxX66pbYeX3y2uBPwPcGUJz8piMsDYy6cdJaboecdViA8Whem",
  "key40": "3b2q4mmwQF2VvoRTgHysEY9TqKaygfKCC1UbQHUN4AwFDkZGSdttjdSaDifcAio9JtYHaAQdaPWj7veftUaH5mqi",
  "key41": "2nuCu2sU8ynAu4Gsu8J6xLPpXsML5sVg9DZD3SWYZhM9wTjnstp2k8AMuhqrYUEARF8vCL1djN3LofvXvHiv55nk",
  "key42": "4WodqTDt5XetJdEinvXfTtdhjEkFgFzQUqtfZnR2it8nuojzziJYMaLKr5Us45oJrtSmBqXuXfNshFrPrHbVporv",
  "key43": "353pRvD64XoTF738hRvgkeM1KjhYCxEAiKvgvQqEf5XU15RMPD2jA1LE16UwohGAZ3g7Tsk4RLf9QaqTvoPjUR8U",
  "key44": "383QcToxE3MW1wvJjqRi7bBvkCMXaUH7LUsiXJz1kc7Tywu97HZgX3rj4kQXSXiiCUN3Qizw2LgCECzNnzDr9EGr",
  "key45": "3z6YEYU6XKiovvtpsCNVYwBk3pGNDzqhsrToAhVCu3P3vay6pvkjAQniYzG5LGaKRfMjikhcFejEb1vf4VKpLeVU",
  "key46": "2zzeCKZAofXStnuKV6Cd2xqdujDnZofgRcZkZeCc7dhSZCbDqcbGXxixMt3HsX4eQgBwEhsYqj2wjaBGFPwyBCBB"
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
