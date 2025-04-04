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
    "2MgJmzobFUaEy4MWMTbywPSEaNQ7pVko2tLEvBvEcN6r7mqPPPuee8ChWjTvVTeGMkahcVvrBaRGCs3jKfaahvkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VNR4dMKqtMWLswjGmmJRmgRCgvwSsUTyZ5nnAwamLMHD3ofNsU6vFtgrjqQhXuPhawBpZt7Wj2shS53np6PiQ2C",
  "key1": "VGoDTmhsKFYNtrYpzVLnRbM63UdTdx5jxctD2fRj93fNKagC2McDRmkP1UgF84vnhpmQe3QNGQtCt5Wr9gbNmRw",
  "key2": "59XtZy6HYzuw9ruzuaSVwg17KnKU65Ph83zraySRxnMdkhH3irS1ZESJc4S9X2VWTqpPftuP8HJUKoWwC6yqksW3",
  "key3": "4wAzcJbLRqWAJaF6X1HotPNKPHJd8rf8Pa9ui2W6LyMfcN62BQ2SrQYXg3J2CWN3qNK1vfTR2ZXuNCX6GZXp5bqL",
  "key4": "4SqUrQbpyPPnP5NkosEgbaP4m4p1k8hsbJDx9a6bTXCULK1FZEs9K1Z8iLgmfikpNeevSE5hGyofBYuKuwcZdHaF",
  "key5": "AKe3vfZrBWKpw92cEZCBGBvCeJViRk5wU3ciVkPbEEdCeLcAdTRTNbGuFNCJjKcY8KxmpxyPrZgXnVHKqka6h9K",
  "key6": "4WTpmtKTvUXyu56f3iMRn1Dt6QeAaihwiMp7tYgh38r91U67Qs2JBZxAGg7pRUVoU8TjRqusvotheXtgGNgeyMc4",
  "key7": "48tCSTVsAyeGf2jad92mGU2PyubENnMywnh8jWD3BXL3U1LfzTvHsd3JhAx3J1YrJ7yAYRpu4x2ZWdXuiPsF1j9v",
  "key8": "Rtaekh3tfE6Ciy3UBgJkamKuKZBPLiEPcoU2Dshmc48XEU6PxKZo7i94ARmxZt7ehc6tHG5xqE3FTUeN2Q5rXKd",
  "key9": "QGDAgQjtm8X2snJEMFh39UmKecYBWdKEm8y8cFV5FDgEokUyyaKFcEvpNmXZyBdv5PebLtkxAzAEvtpdxWDgBPY",
  "key10": "3ceDw8B9Sjg9uf1tdcCj2HMP8JykY2am8N1gNZzbjSB9DDqUe2vd6HESincxNTFSSxhVAhSi9fNVcmZypjnmmqGb",
  "key11": "ap16ZJ4f4urq7Ak8CiCg2Xcu9fvCmZBaT2Dobcy2vEdms2bweDFqirWZvheN1YZkoRew7bMyKCUsMB2cgL8hB8H",
  "key12": "5kcmBVaptTDLD4cXahz3KPsd5T2PG1XwMZXtBZFP6585BUXQhc33eyoT9exQ1D9t486ECbM884rZeNjij6bvg8FV",
  "key13": "Kpqqhu6f2SqWaHvKYrZfGcZkJs5wEUxBD9Bb5reokGuP77yTGkgRvhxeABGVcaxJz8yu7G9z65FmaQbMe54EcSb",
  "key14": "auwREypa4Xw7mrC99c9qaXzebAUbukWLHtBhCxRddRskgUGQHDvMEsYFmgpzjUQ5Z8KQmvX7K1oqAuevXzME1LQ",
  "key15": "3sXZovULjGzftoCawdaUGLcpju3wEUUBPJGoaoroE3hz7MhLvxk2TS8zDHvwzGXCA6wM4mM57FxgWQ1nr8AStehU",
  "key16": "mcpk7BeyEMtvDejTx8N3QV492j5R2C6RSWujUsC4mjBS7MVyd9TtmUxCM7DuQWro5yyb2f2KpexfsSTcXeXG2n9",
  "key17": "kn2VFAUWKp8MfZhCkRevZADPqAmmGEEX2dv7Ap3tKKykoYZrbhz3BvkTqsbiPyjL5TBzqimY2T86gisUgcY8cMG",
  "key18": "RJG2e6K8YaXhKCty6gCRnXi9353qDkrRnYPu4gBcJ8aoVoU6AX27NLprF8yhJnjgokLFFthVTttBDQHtJBcehPF",
  "key19": "4Fha4FidxJyBNzGQykmmqBwke36QmnCiVzd6g2MVhpiV3RmPnu1bHaoR4SVGzSZ4GtPCTRSa4wj9U5pxiU6YRW1y",
  "key20": "5S3nQcSEASwkx9mtZ561zqiSS2LEBT4Pye8ye28e5HurP4JHrovX7TjTVqCeVfxj36SuPVJX3DTjffcyfAD2NNus",
  "key21": "5EfwNxGirFi1J1aHr5ftQTghVPxfE9X4w1Azxaq4giiD3aT728DkNaysFmA8fACw5Ko8thpP1zGmK6pXDJTXUirY",
  "key22": "2QHrMowb2i6WNvXW1qFA2Srt2ybg9AyXvTj14TnNpNsMm6SLoSyyf1azYGvW2nzMEj21gHXrormGSwh8Nmx58rGC",
  "key23": "Ht2SVCbLxM6z1rc4idKWNTacLKpQa9YcwJCxVVo4Bshcb28AF2Zbznq7u2AR4m7x5h1RbtBSGuQFroSJo7Ag2CY",
  "key24": "42uXo3CdmSBHMJjQb7hVjmH7e88FWHivuEtqZLMdv4LFEb97cDHVCmYbZjxoUsU6RkXF5smbXEMHTGYBS7kYzM9P",
  "key25": "5dZthn12HuHSkabP7LcB1EChRzRNMCJp8Z2uVepSajRG4dJVwaA1MdnCg3yXvFeNo9ytord2ThDuwRXZGMRvUwQJ",
  "key26": "C93ApWJZzBNDFxZCpzfQTrPWegs2z6VKX95uDJVxxMsFXqyhYcJCeDeDANrZkuTshpn1qihHZ8uas2Uwzci9kwY",
  "key27": "3v8L3aCHMjsHvvVKoXY7fStzG9AiYvphsc4xptFd57ry7TRSmDVrCiUBBF956qKR6mkEArFNMMh9aftz3GoCZBma",
  "key28": "26XeaabBB7XXXuqWBJCZekQ4YQVCG7p4WqXSTbxFLLdSucxJyz2k8XkURPWokWcSfYLxPS3rEdsUqhaQhEBEHR7B",
  "key29": "3AZBdtDFEXQSwdd6dT9m5RJ3Z5LFkRkVZ3f219UQyH92hbRkpeiP4ptfgmHAjQLtmLEnU2bM9s5Y6hvUxE3LWJay",
  "key30": "4feLFz2PbL5SrU47Mz9fkq1JAu6bRS2RyVNX833vrBnMxDrA9tKbc6WuKPvgpPzsmqwVPtNc6cgfhy88MAzjCE5k",
  "key31": "3VgYMQnxE591rL7GJyRkGi19snFczoPsXT6q4WiVV3cmJtY4HDk7mjYTTzhBtjpikPuKabe2UrxEsknWjQYRDKiA",
  "key32": "2VqkuANNBHGgVPCCi3tjseeKyDeN1292VpScsmbiyZ6yvsniDN7oYgMZHhsiXFf1JtgARbuFM39qzvRfnZjDL9MG",
  "key33": "6wTGh9PfkLJkAGKXY46tdCzPH9qEAALXBMEEXVu5rf2cWXW8xfvMXKQPSgKUBd9qoLtjXokUbd1YoZNNzw8pZpV",
  "key34": "5gfsLo3YCTohaeTP2yZfHSw4pnRkdZoqrZs9CCKq7wmpCh6CHrFTKoj8vyMfJbuc98MkBydSHE3dVPrZyrX2PVnQ",
  "key35": "21s1xTNJJRgN3H8bpS2VqwaT8cKSzHKA4KLE9QPKaQNHiXMrvJWRVEEBuLcueYYFLRGiwVbZUSSaxTWbC3tsUPGp",
  "key36": "4NPoyV2tTtNqsokWunbCjwoANCPhtyXPqBuTGnapsyYnvDGD4wpwptUiJmJswci6k9kLFLuQW7qnsuuxefGf5gLc",
  "key37": "2vpzhtnGP3KbAZPSSyb6nwDkLUovU6v2spaDWFGuJDuZU7XrkVaW9fXrQB5aJN171pSx9L6LMmeT6L7eTdinMPtN",
  "key38": "5rHyQRCwfQ5BVuwHECeLybprfVUy1FF8LdJ9yU5FVht5pEShRaKzMwbAi7b5KnqBNkAnPvjAdLDkv9PfT88Pd14X",
  "key39": "2oyi8zvRYA2Saq3oVfjyC2YzhLzjZggHYeFm6ucGAHfdb4zdAdL6R2WMjRdJn7P9RqRZHCgWmCLZaoHWr23SfHg6",
  "key40": "5wHALTpPkQCDVkUBbYvK59fQMP4AVDUSfGWK8V2b4ZYo6GzbrgxhosvMbqA9m469kdG8U3y56xAayPbxSKe4NkLF",
  "key41": "36tgRjj7fmYpBQhyDLA23vKhi7ibjVbUpJM2PrV4kuUcnWX2rTn6ZiLutHkYaPRZYPppZa5MNHZqXcuAqczUmRo7",
  "key42": "4cHVUDR1D3dKsxDpkf1qd91QykbKyooBEVN2QJfFcZxSMUC7Byyx3k3QnyWyp4b7jc8W5S9UfTi1Kc5nVEuTJYKj",
  "key43": "3UNrrmhYoM5ZoRbBxPKvF4TmZMcUWrZ8a54NjdoqxaEE2jDMB8axDmQ6o3AjMhn53Qkd9m1BUvAM7cuGAKns1g7F",
  "key44": "2JdAirz3q3oDjwUC3piegSoPYp3JdCS5vkUFEgVRfw6NHKx86WFBhGedbt4tLDkB5y6urJHTzpRUdUwQFYndMKp5",
  "key45": "3inigfpJFoN5xnbr1EYVUg69WNxHNyuVV5CsefFveCjDgqhewSxZhzinBPzsr274dDgKhvVUjpyymcxfw51VevjF",
  "key46": "2p99UsUeMBxpKzNPLyGPjqwkE8LHqE2YiHTVaPYRpSvBGqnFkEjKcFUWDxdgYT7uCJDgJiJDBxioYhCVscF8Gdxf",
  "key47": "2Ly7kUQPeEm3W8Tqm9ppd2JH1ZnhGc2XEWyVY5XcX3H93C8t6qL6XcJZDUNsRnrPpc9fmBwkavMqXFX7tDLPmM8R",
  "key48": "2HXKsKM7DFqKTe8HoTcQAV38YFTMjPskdMDNJqSmJW2Ns3VW5ar4HqikKXvopfAv1evwccBQqtPk8f7RfXx4JYMB"
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
