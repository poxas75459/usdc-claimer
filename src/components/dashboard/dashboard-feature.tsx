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
    "5pVNwLEHSY3MKWnA5hvJHX1RsZnXLmDR8F8JBAw6eo93kbTeSrv2nAjXdrD5ntWN1jVHskRMxiuVWiaMXFfSPCBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQZHRJZQZ73yFfk2w8VjufcCyQ1pcVqNdJPHwRKCncg8PVRScrdN7yg4dPpa5rUMZVSrdCLJiM5kZ4b75D1vxMe",
  "key1": "5VpGEyXbUUU9gxuCuKthgCMaFZCtXhw7Y6cyQZ95MYt6WfgjPjoZkcGXYi9qbDymw3eeAMgCKde92fyhaXapNcx8",
  "key2": "2Bma6ZHHXcDxShBbr5z3LFsv9VrpoAkR5qvDJSzZsGCU8cAuackJfb6fg6cB4eiAgNPrpzuT6SxtMGxsvJ6hMXCJ",
  "key3": "2a289H7GsrxkChazNVUVyosEjFHZg2Gdbr83tbLWzUM2ghDiMxjkpfGdMkfvgkL6YR9pDi6ogCQkPVzGmbr3fhEm",
  "key4": "5DA9NseUDvfJ6uhACzW1key7qhrV3qGinGQXQ9ZZDttLnVdySPsVsVjoXhsGNNCUdsoSxaYo8zybLoM46tBMvCcR",
  "key5": "3nTRhkLGXknRr62cei6n2bRJZo13VGCwyAy1CPaG2zCfnwtTbvPusRAskb9G5td8e88eeeTnFVYkBAzjs2eHrey6",
  "key6": "4fjxRyigQ9PVvbBmdPZ8wZKzvvvRH7mT4ujHWsqAggNPwmWcQS1KbUddY1wpYEqxBBkdcL3p57m2a3G3Mwqq9mFW",
  "key7": "9cBjMM7eN5uvbj9kRwAzhPnU2qgfMup3iDVxJtqKpiNxPaDXMrwdvaeoaGJeUm1CAygt3NVrxz4DcAqru3T7NmE",
  "key8": "3haeeu124Mr9CJFBRrCQanUC4gPtcGo2QqzHUGeJbF3JaZEwcdhzzMKwDsVN2kfzcJd2TpKcfaDp2Nu8JTCwDDWT",
  "key9": "3Svsao9VGkRfsuxjK7GHEGdPCP7EEFKhyJubpRo28UKaj9iBLEhFhtQsWhdPsrT6HkvLw4mnM1r43kh6f4jzmLVw",
  "key10": "5Unzt8nxJszKwvGg6XXFkH2eGNUM2vh5UzKN4ggiZvaiQVw897N6ntsEizpKWujHLPJDy3BUCvBj8Z4gQEQAbvfi",
  "key11": "3fNX5TYhwP4MQVdkJLJkFZmVoNcm5MANZWE4GHqY9j8NyNE1n3i26U5VdCDPZRs9wxtPRWjXPY88H5WQP9foYzY3",
  "key12": "5K49nWu3jML8pKavjJhXfBFnDiWnoALCQzPj1SXeoFmb6FqiJ7ShLK3XMdSKSmkEYvfMcDshSVWADMcY1BrgZtCZ",
  "key13": "5T8t9tdriBomkHWmQHBbuYxuThh3mGL7E8kFajN6racdG5J8dNPAPYCPDuijWdCfFvV5e6NoJ8CSyi4XXqrWTThu",
  "key14": "4eUUyYoCwesayR5AhvdJ4bQaJt8iD1PVJBvtq43mz2DPk516GHw4NmBf29S14NDNsEDDAaGkDGj9GAshcyCtcd5H",
  "key15": "4NXtWnhdDX1c668qbYbeifciEUbKFZuoywqWvAuTcx7AagrYTjNDGBbTU2VryRQYKvjwmc4UYGEZuQA7N9m7MaDW",
  "key16": "5MEkq7yft2BjtJT4tSafFG66cgqn17iKvCBTzjD8GUsWQUiAz6bP2nxHRy7XQPRiWQQa3bhMiJuVsQcZxWjSDjqF",
  "key17": "K4SUr3o7mU5u5wK9j4GWnQ14Ke2jy998E9qCCGTqDQG4vBShwqfLZkChwv2tkyCK2p6tkQPMhhH6vTmwFfu676e",
  "key18": "25AZuKR6zekHu66W8zmwcmKfwBNQWZAi1TUM9zf5W9WijktYnL5h6yHckr6wpvc6xRg2MHu2cFjG3xW3U4Z4avBZ",
  "key19": "ptGLE3FfktMTBUHcTnhyYBBEtAVFXYput9iMdUEfdfcFFgRWbMukTvBXArvRu9boQff8WCVWSoQfdgHF5Lzj8a5",
  "key20": "3z3PncF41E9gSQFavgwXce6kiNn3pr3ZxeXpYiaKPnURGd2XLdb3NtEiPANEWsKz4QSo4xKfk1Fd6hFuXXogmepC",
  "key21": "XrQ6pRFj2WU64T6aiF6xNJ6mTnocThoQt9RzKtLw13sPMKqK8XuYKdnEDwqzwxZLBhgVEq52gKnJm7p6z4tKmx4",
  "key22": "2rdMaubNcppm32AaB5tiM32TfN2CBcu375PBJgZGyDh9pP5KHiGb9eRvTWjMZXuJtPEe5MLxs7VcoerAhcSuusV3",
  "key23": "3a275u1WmGe4ghXAffC63Wmnc8PyiXAhYiZvwqFFfUp24f34PZhP362iEbUiKucXAChgdo9aXxN3gDxU1h3Cf6pZ",
  "key24": "2EBdTiMHsZXF1uXBXqmUQneLcpw8Zbf2BqU62gexMPt92SmiZegsLmiDv2TDkEwBEuKi9HAp3EMYTP7twAwb8c9d",
  "key25": "2oAy89KsiXALWkgxdvbWiZj6KLG2fz1jYECLyoYoLno9UwCqVLFTJv52duEQSK2ZKwYKBfGEfzjxfHtCMbd4UY9A",
  "key26": "2VfSJ21gvrRuvWeAtigSWZoDYxGTgy8gjR6SaZY73e4ZH8HvUgz99s3fE9YDc5AULovcRcRy723Hn4hxoKYFLVWU",
  "key27": "2Z3z4rJQoHf4PzLRsX6PKpp7Dn9e8x7aBSHwBKTSNTyFGLGMQTqC3wDBQ3fxe4fTEGPMWGiiCGHgtBuTCAoa1zZJ",
  "key28": "2KDqbj43PNGm53kNZmaaTM7P2ZoToQaaedGyw18hY9ckmZ5RpcM596Mu84srrddeQcEoyasGu7EPn57vjRp8sQmy",
  "key29": "2xWgN8fniF5TczmuBpgfEzXXgonACs32ZkbSstr2ssyWWEFU9VJnVyzTsr7TDZscHGsNoaLtuXtZU7cvf9ddJh6n",
  "key30": "8B2sDPaZf8EhMVESti6BEigoJfrk1P9FC9atpdxRYxBMP4kFbPaQDy4YWiTjfsKpHRAsXZnZesvGF4UJRp19JfG",
  "key31": "5wezNcbqxEje4C9FMLccDuJHYrtdSrgtp1FJtQGgFTw61cdiAwbk8dKNsYHeNjQ8sxs9tYLsNpyrh3he6FM2ybMq",
  "key32": "Vvxvn2LXANzRgGaVNex6szwrgnTBSTw9szJBSqfK4Eo46xcxzWZ61jwjZKfM1kLiH7Z4TxHdKpyhvbZvsqgvd8d",
  "key33": "W7fXXKTP9jbykt24C2D9Q4SAjnEmxHYifXG5hMVuMMDdWA7HhYqnaqEPrqgKCDdEGPDF1RCwKMsmAt6qk1BhCkk",
  "key34": "BhMns1cRbyxZVDdpf817Dm2JTevUbJaAfkAmL9hP1HU8Dmaj8YoDVE8y6pdP69kGBKR1agXMBtr1eLUt9yLgdjF",
  "key35": "3EDMKse9K2sZCaqutGfeuFrXSgSLyS9JixaAzWTnCuEgm2eSGTcRfx1JLWaLcMEms1EercbjeqSBZ7JQRZLhCwWG",
  "key36": "2AtfT5XBokTpRH4wAcea7ig6JsRU6CvkuxpHEXHRvhjFgnpsV9bRkD737DpFErs4XQ7zZCFSpFYwELZPUTKfp8Q4",
  "key37": "2yu3qEUGXNLAR598jdptawRHakoQxSXJA7DA9VyxE3f8n3XY3seFSUr99NkSrP4GtL5viGcYy3SdnQpsNFwDeXQE",
  "key38": "4davapgxRUNb83eQ7ZWygYAaVLetND1DUpUSafWREb8SyAmMZRgS8cqedPquoUSSMFNTQonYcXV5kAhvTGgyhZ9d",
  "key39": "4fi9ormK4Avut1nrX5dcAFZDNZnVgxkR8dc5Bkp5ii8h7hGbP2Bf8wubA9Vf2ZXbL2Meq1qS9qKSZbLrew8KvRa",
  "key40": "4AJ59GTMvwzB5KA94LgJjyD6bPcAxZLYLHkRxsgUKU4Ygtc1qtesTWZFpkg8zHyShjSmgCUVz7gt2aZkrUMiWSdh",
  "key41": "3nfh7vxnM3H7abrLERvh1dBmMcANHcknPY9QJ46KL8oTKt6HVM1pBKc4k8CDswkgu4k2RuCcWzbHnSe8X9TWB86V",
  "key42": "475WgrTbNeDREkAauevGySyptLfV7UVUjNtnoDNtCkWyoezDPGxnEGwoxpEUh9LTjisKq8LN1pytU4PTXkAaTGkF",
  "key43": "Mc9H2gnwN4YSvp3fybrRvzQbM9jWFjeecKHDfW9tGYwHCKbmCatqCk8X5RNtrQpU2Ttva7GWy5kiqrw8Kuv5XVc"
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
