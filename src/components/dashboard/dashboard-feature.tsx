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
    "3wTP15t2uwbgkVuygeHd2yCde1oMWjKmuc6XT7T2nt9JaHCNKrSdzVL5zEj2btiRyX1JTvrDD6sqae9BqKviYv3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38uC97SVNNC4Z4nGCCm34hMHtwbEWc14nrgih4s4gz8gUANbTXxyAUjfTwhCnJZL7ZLBHRUQ9dKacDQEmVw6Xezr",
  "key1": "3feu48QmqrKo1aBga5RdKnMpCdPjHkbTv5VBcJS82rbmzDdW3VSn1KrW19tGL2Cwtv9eKgZLkReBfzo5SJigzauL",
  "key2": "3qsfStSk5f1TAZusUrCoyLjASmNta9ooudZER4Py6jCAxmQjyUgWyTmkCo9BzZqH2XWCWY9W38XQaWqviqPMrXFV",
  "key3": "5V2S7gHtfiihpQamz8d5jmZ9DRkSdpJZnbG8rXMJYugg5MZum9fkWYCevw6Lk1mUyXkHss6wViR8QLQB8jDiafL4",
  "key4": "5u637UXZBar1tJg1QPovRKXHrjREBGzXgmeLJcMn88aYGNSPSJi8Mx9y5LkDzfHVzZRwxYAMR8wSWgwvKsh8CGZ6",
  "key5": "TJLBtaoqeDBBcEQ121BNdYMB6cf1Tndkmg3xxSc7fb6NVXorJP58LUBj4FYPKCHUWhvt7pV26AP65e3K57qQ99V",
  "key6": "5Hz3MAe9PnDkXhK9YWaKP3Vz2CZ2arg8X5FXqoQeWcaGcF1STe8XtegA3Jqkwasuk1sqwDWsaNwomXppiRjknopu",
  "key7": "55gwUmejPHsmo9XuqzP6MpE6chEqHTrVC3TxFQmY2f5KSy9PEEfeaAxMoicYCzrqzMX4QTZeHu37bmYEEo2dNaEc",
  "key8": "MiHxX32u4PAQbmjCueZzmcXLqUTELxTJuyPCitT9tc7bRXEhRY8ugpV6R2AXiYa81CyeQfukRsSVzk6DbuCFhw8",
  "key9": "H2fPEgPcgDTUG5EefzG7RttkjSUYVEy7E4UzKAzijmwQzC4sFnJ5D1EfWCSNDB5CY6gd8gV3z8MaLyJrSyQQcMF",
  "key10": "2pmFT921DHAY7ZTEthDpvvhBjpipBX4gfisg9cA665gpEGF2znb9bvJpHjDgVGYisH1AzsZw2SLi5xnhSwtmqbo7",
  "key11": "5xVS96Ws2tBQv6g9wCGDQyVq8UGXw4sjMLRfWkoPveqPVN4GexKyzhB292TrHFasNoccPYCkP9zoSKbSkUUeo1bB",
  "key12": "NeGv5uFs96vHno5eet4cbvKXm5M1CRLvHbn86MKWnjt9WYSgVqVu1URLb1xigRUVoTkUdA27YS9qy7NYuKW3eH5",
  "key13": "2zx8JaWQoyuzemGzmFTE6oorG2VvmbjG1XiF9n4CnSeyyDNzq57cQ7szQMDgmshPS3F5LSLBo943rjPx5vGYU8GW",
  "key14": "GmRouTty8SLcrDUoN6dHSxYyXga2y6GnmNH3J2FxbZHdSmi373KVEwhMnBHG6Na1bBRnF4bg8bdHwRxEy8tysbS",
  "key15": "LsqifP9Xn1waNuMbwppgj29JG6qkEjZgjEko3gtwjNC34Hwy9tMWHzTzSkXzvACTfXVtmfLw8CAmhGHU7cuRkTU",
  "key16": "9UUxVYYEKUBuiZrcT6Ew6vyEakp7VeWCtS64Kki5fwfhKQx2LNXRw72myz2gqRgyEESMsw4FYKbsXuoMYZnGkxT",
  "key17": "3cwARLSttbNi24GVNQjHfh8SFHXxtrYzL8cLr2i8tpfN2rFfufhrNNGsAP5c9Z1vLgtY32o88aCrJNQy1yVejmdW",
  "key18": "4CECit1ay6mu1QcSboaCm42afkvy8FcfTX8VHDrZ884p1eiVsepoaiSpsLa4JGnk9tSw6cKL2xnbEJupG8a8bd5N",
  "key19": "38wKbtbPNrzBymKkCgGe5rF56PKDAiEmn8UKXEiBZDeKDju3KXJakVY5VTypK1eAUex5Hu1xXnt2BYU9PZu4jEmN",
  "key20": "3XkWzDBiMaejruTEVMGsC7uPx9Fj9oJARCisdokZ9RGTcoZxTqkCx7YZ161rw2JhzELzwCEPYVyzSSkNT1UGXtUX",
  "key21": "YfqVWC7hwaQnVtfy8pcfhm6KYVBVsyeJEjuJjpymDjvjMTHm99DCfTu4vAq5LBNUnaqU36eWnTXGXRv6VHFp4qL",
  "key22": "xvFcA7caU6vpqnYJzfUnrYbro8TV1GLFuu5NyYLG1SCpSoPheisURnXZ9q4qqwRprFQvvz3dzyX5cEY1Wtcw4uQ",
  "key23": "AHQDFJuPHKb39SQjxoL5X3NjAAT6dyUKRG95E5YauVLHPh6MnaivcBBf6UsYGGrNNxD8dKcYdfkoeMNrMjb8hxw",
  "key24": "64uh8YLqEV6QiVDwYfEkEijN9LLzjUfHVWuict37pecfXtJoHo9C8L1poTvQCrUv2rcbs8DsyGUL19VF2dtYD7Nq",
  "key25": "5C2p9q9P9kFGPNx4u63r615NzXcaXL1mK4txjn56xrKbEgpAQL1mdzwHxzrLRLCDypKshYK6qzj2bDDoL2Q6RJww",
  "key26": "2cen8KA5hpVqGoPuUy8Fk112N3Qisofbp5s5ToJWWFExGkDoKpRrwvg5gZxuL9HK1WLFztgbaxRcjM6DQxME6E9Y",
  "key27": "61FUvT4Tz49BZb8EMNkQd9wpYsh9PauALYqUaCoBVA2LxaJTrFKAmpMSijeHtQ7DVVBoxZdG8kaSij5EhrMBXhoc",
  "key28": "23TwhVXj8mzRcp5RChjf9siEaLjGvuWXdsxgzbacDoJrRDTmM6cHta8baakP6staNrJA3p9iPg1d7Ld3tzbDXeVN",
  "key29": "h7qKfyBNPtrFbp7FYpJYcA4L3Ho89gtpv9bzo7Mbx7LuhPxJYsXUSDDzF2SXDYKXV9A47d63Bucz3n7FML87V2d",
  "key30": "3ZGSdZZkNFTJnXpcqjQyRyQpz8SZQiQfwcN2N79AQFaYY9ELcWKVDRpPV61PM3AAbtXpap6NDaprDhQGj7ev2vbe",
  "key31": "4Sahs6SP74rrQQgRsYpb5Uz4UZBmjmR33jwm8pnbk3obXDEusoevm5qeZVnCZ2EE9QEYCHbUFVXkBnqfXfj4ghAk",
  "key32": "3XUt2Y6VAWJdFmDDQ2DLECjbkkCg8aohwiBFnBKndfDkZcoAmxvwwGFgawUb83LnKdv1j1AZnJyH75muaNjRNZCK",
  "key33": "3LTmkZWebvk4wq8edrpFrpDfH7K57XWDQi1dwJHQ2fv2c2wt2fQGCA2Ddsk7dPh9kpAnQSPwPV2afDfgvTHpTeeL",
  "key34": "n23rhsw1LQP9VAcx4NyBCuedpx2V4EU9t4oRhJfwpQ2DKwQ1aN5244xnR2mGQuWfweQFa6nBnYcSWadVVo8A9sP",
  "key35": "5TiPGqavY5vYJdc9JAhorP65AjhNovS2btEQ9PUNmVYT97MQc4A4u7qAxomaAXZTaspBNP8mwwjzVZVN5C7Rip26",
  "key36": "5hPsF3SEh8Fbw4EDtfdSz6GPHjFe7DDoPrTvcTnPmVVxtFpVD8vzBVjRkqzChPvMMMi1Rrv2PoiooWpUbhDXsvoe",
  "key37": "C98U9UYRoxy6YB13sMfHwHozwtJbF4uXVpkGYZ5DJexBW6aHD6ehqNoEFPDi1p9bAHNvXMowGhBeFgUWFCCj5cY",
  "key38": "kSkF5yc75dJ9Kdjgz9XX5uF7By2aS881sFDPuEL3hxhJMQnSFZuVf1CGZQDnr6UkNSVAw9bBXYu9WWzsZF4YQFC"
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
