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
    "3vKpCBJ8aHyKkHM9QLko2cqqj8Ev94khsPUwQrvmT5ggd4cJgg3bM5FNboWiMpFuXgx32EAwtzEirnssEzcpweaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GjnyYWy32PbFHu19AHRh5847nvsQAvncGiRdKJNVJm4WAeZ5esKgrjYgfhJNaNP8MUKKqSv2X7j15YKKZTKkdq",
  "key1": "fGu7J1t48fLVNFngmgAaUuxK4XtsC8JdvHtoykuZorry5GieSoJSCQQ22Lj8VPDsE61ee52TeTXP3qRUUtSYJLf",
  "key2": "62FbYGGE2qbeRKSw6nwd5z8dGsrhWoFzaBsx8PS1DwDZsBfSta4rzf1VhGKKonKQxPVrhAnPduEf9S7b9WowHTMB",
  "key3": "3Lo8yqsf3LX9nE5upV5gSZC2XcsuraKBRGv4Bn3fnrzPh95kDUT7prnfd9YPy1WVCeoogHMbs48Qs1EWY7eEbQPi",
  "key4": "31BtdDzRwNQSa9Pm7iJD94PNp9EuF3P44psg6A6ZDAFXxGfRHZvtUEYcSHU65BFCwhG51eQHTCrnV59eM7njXyGK",
  "key5": "5qUhEt2ffydFsB5pYNugxu2Fptgrwv3yvDFkDKsEv7jC3BWenPp3HHA6PpJoq8JpPxua22Hz2F7xoqcn2XJBVngn",
  "key6": "39hrrkPPXo7jmG34AkRL97MnLuVYwsbS3AFECicC9y3YdW6Ht6EdiaG2fHML4RxTxXYCseFwQvJeFNygz6YVgja8",
  "key7": "2Q2nRPtGBUpgYTtqhD8VoKw9HzcSbtxTGxfMCNCnniGThm6dSTB47bEMhu3kVj6Verw4FDafKjoZQgYyRNKqGutq",
  "key8": "5ngiz6woqWSh47asXkHF41uW9XdKGFCnVVTmWYSqvjPiJueWKhtvctdZuF9fhTfW2PSeYBjAzGG8qcdn9XawfqYy",
  "key9": "dG89RKfa8PgLNRFTovR4jXWB18VEF1cEtDHuk8AegpSpHYZQNgy7hkSRdPTL2noVaWjoKVP8yAgp7rjhdZsvD3G",
  "key10": "4zq5F2DXw6UGsdTkmXJ3SUDUcNbBPPfREm3X4e6UpdA1dvxorGDUnqUaEZwg5ajx6GzTRo2vUzR9TAFmf25bFWFt",
  "key11": "GGLKLtoJXjgYhXEZ7Qgb8t62dvEeKApT75MXp5As3W4h4Ehasnk3zLYNzHwHbLsdN71jeddRJjRehzzqQ89jjCr",
  "key12": "2XMbsAcpQHhB49eSSo53mBheXpdmEYjjjDp3MNWbaBxLjBQtce6XAB3TYGc2G7wsTNs2GVFFovPorNzggkKXL9JJ",
  "key13": "3Lqj621pzHxXRBaKmSQqDawSVtT6WjKb3jSELMUeNqFA1yv26M39Fwqqc5oyrdSxotnLHieYMJ4fsoAYAHT11vX5",
  "key14": "2EGLtHKuzwNCWPHYURHzgcQ1PJ8cYMCkE5B1h2bX5Askk8MtsmKVRvK8JsqZxBVK2HB5WML3V7eyquTMWuhJse65",
  "key15": "2GZWo4C8jCMvMU2ZhBDvV1K8UuCXijcPm36hzbGvgc5TtNY9bHWiaH6ctzXLLMSqtgdvPd5XxjW9CSgpeLYGwHWE",
  "key16": "4rzfG8FpeAAAQLawCujuLzJJxMZA28XMj8J7n9cUaXHJUc1e5H2Ehtu4dSkQbdKc792xzwohNCpgz7grFWnBHnzK",
  "key17": "2MqYQChpMqs9oNWfbnXvGrFgouX9XtSKP4gzQ1aPsRYRasTerdAR4SAYeaMkbKwZ87EUCaYqf28L7bi1Y5zxzgYy",
  "key18": "wKJhRVEP8MBUjeQvft1jdjT15iwT6ihVHi2FEjMRj8AoqCnyQRhpR6XuJ2X7hu5CqRzHVMbtdjQn1JHqKD58XDS",
  "key19": "3LCFxCsUwn5u4R98rSTkz5NdnLDPARX1gYiBwwAm6uYwDUKJs9REWe4KqhCbCkgiLtFJHuvzDRs2h7KnAmKf5czh",
  "key20": "3cJXYQBrD8YPZLhwZd1My7JV9tbhAuD61uWU3ou5GVo3PaWLeh4UPZou4K7HKZTMHmzrg5Y7Hg8w4mmDqyvCiZEd",
  "key21": "4GCAfJJDjQNLL4i6QKPsorabA97oC3P9ttt973RmQi4etSkhebHn7td8kW7JU1Y32Y5AxkZinmsdP49kBZPfsuWN",
  "key22": "3ZyzLtoT3LpZaE2BWk34BxDVY9BdU6uG82PzPhER3p2WSj7CGTjcxM8zb5Aeo8giyFPrjEiGZiXakLBR4bfGRz1c",
  "key23": "66FDZMtg4MxcsfYz69Htz2VHXtWdc89VNY6y1tKG7XtffsP2Uau3qt5P1oLJ7HKxjJRuBbB1Fjxf2L9gaqiubcBS",
  "key24": "3QvMS7pkBt5ERjJBu2qu8wT5KsipCCSUyEoZi9cQ4rUUSJfiMkji8eSQ4rEeGqE3BfyamAaNnDYQPDXTaEvrUEig",
  "key25": "3oNLya88fgWchUZvPZCo26WznoBMd7YmViknUniK4512MaUHZiyP6KNoNSWLsVnWy5EMeCKdLFKSgJMeUbsYcJJw",
  "key26": "43syoTGAeP7SK49RKdS77Y37jFRvJLqZPJKJDdJFAuYjNopp24gDF2fWTfh7BzPTYh6TtfbXUBeJDzQW9vqNAigQ",
  "key27": "26ffV6DHUDR4WHeCzx14WQiqXQUf7s2beBjy9rQwAkMKaLBUnwamg4fVsuiTsGNCTQ4Fw9pNKw6LZFy8kec3sNiN",
  "key28": "26EofeK1BuSWa2cvc8ZRSB95WijRptbB2R9dFCV1wSqMfzy5hMz5REsJjKKbaPY6ozNbo83MbXhU2EG4TYdUduin",
  "key29": "3vXmorqzsSr8ZBwBjw6cG6Sv7DrRuE8DS6WSBHTjS262EDuEg1xtMnDHre7CHF9H6g33C2VSp14rSyoqtj3bz1Hi",
  "key30": "43RNAhRFqgLoQF1h5x2RsFq9wDxrdJBcU9Lyw2RUjWQJ6pPeRYYa2jGGA1krinZ3cd3mfsTeUvgaHWAbqXcuaX1F",
  "key31": "ctRXQwUG7UwTi5iaGyTgcQBhZgBVN5NZsSANj1qQvVR356xVwPNn67SDeHoV81sC4UCVPvH9SoDEJbuz3eVMdC3",
  "key32": "2MU1kyd1ivUoNRo82jwTWfBevkhNnWg5bERU771ccxVZqaaZFcKprxVHe6StZU18PzbiDnn61BjkXKHkm7BcAZgx",
  "key33": "3ngLR4tDurbMVjn764XuWALKSTSfa4tXHY4eZ7DN2gfDcEB6XmPjWGqiUFsciUijRVS862ggMaHSpv1VSQQrSeqN",
  "key34": "2rUptC5ER6LmAWosqooY9r6imq1MXQbzCnEDqPkHn15nhjzmL6uMgVHtHtmDFU5JBgsr8uwj2pRiJcpmpXd7XCmh",
  "key35": "63EvxYPuKHwyHYRNMCGB3s5gULwuUHTc51FEi7sL7mAjc5owi5qdJVbMd7AiujhxFC8F1pyRVfntUZQDc3zjCquQ",
  "key36": "3eNvpT5ZHJP73RxjUSQsKXFdj3sD1tueZaahQK4c2QDwK2S9gFbnaLcoYRSR5PV3jU8URLhLXzEJYAAax6vTUkZG",
  "key37": "4BiG6uXPP3e32ZgovHFfZENKFYhjSDWH65ZMMTaWUDj8VfnxZZzhF2jXzx7DnHPauL686Yo9bNk85ATD2Y3xZGQJ",
  "key38": "4FDqBtqbUSNxuGNBgnGWf3RMRGTdNF8JzSp9UDiYAbZQoa4ikHcHHU9fsyiekFQA7YjEkcN64BhoB57ugSo7mnkc",
  "key39": "4hWi8AboyLRkVPbsW6em5npNUkKehYFYsZ646gv6h8jbXVBVnG8s2pteWraAjdkk2xjUzpSWViEgXWJsHFvNFMxK",
  "key40": "2MvgnM2ytry2eDCCtRxnhyhKGn1jiKHADRhQi4pkPjPNhjXnyWiKzBbfw7PBmZAiC87hAbRbBW7pTQwqLvvVYp1z",
  "key41": "5pvEYg1KJi9Ls1KomfrKADwy7prkkiN9TDhwcdih6YwNCyQqCzACr2d2XobH46DZe5eBwQJ4DguMY67ApGenJiKw",
  "key42": "5UtWbR6VCUyvX8vy9TeUzWbeWnpxC185BP98W5SQoKVYFYfg4V7za4oEY5dpAxxW8FzqqrPP8STwGyg38ZVhKV3f",
  "key43": "3dk7pehmvoeTPF2BzhyFa1Q484KpXsgKHTnq7HwFMmL7Z2n2yFrjJQ2K2DB4LJmbeDqo2RZc121KnUyFg92gpgHh",
  "key44": "4Yswk4TqYApHsY9pew56ZR2fnjcz3JGGxVdkb9G6SUAYVYWEuEbXR98xSMn8mkTgYsYQfs8eJfM2dFVn7YD7BzcQ",
  "key45": "1C7sjQuETvvvhyYCWbbiEjuX4HBNvPCUB8sKeM1q7SsjxwNz4MeexWmYFTWQvDEwEVsCm13d3sWH73RousEPj9V"
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
