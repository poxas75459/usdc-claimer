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
    "5VAVQE4HKmUUaCd5ms13u98bJk31CPthKBjQSmKEtahBsPcCTVbMSwHZULEMscD9ujJ6WsKLmYHp2sUAdqVAhJ4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XosAe9mrPjmYfgpF5NEed6AjKt8tffL5W3SdB9Zx95XyesB3USQMyHdPAU6J9wNGqk5qeU8DvAEcatmJnJvyBRj",
  "key1": "2MN7zh6brbCwxXGfhTro5QGVpajfzPXoZb661Ps47fvW1wnQVFs4X2EhhsmZvm7XK7PFmdN2p9KkTbAMgLAVnvgZ",
  "key2": "34k6qxufnAZepm8g6kUe1DhVFjsS2uZuhz7pan6VqRv4btQ9Bzyeru5hGK1QmPawgNZPw35XRoRN8eRscFnkyKDk",
  "key3": "ogx6p37DmUHVgyvKsjsPyen6rWERL9XvPHQkA69QJTtaxL8YsSU7pGkA7Mqiy9vFxTWmN5qRM9wiqgbGYcFTYfJ",
  "key4": "3FyiWysKTwBfR9MKqP8ETTZWCXgBWtdWFDLqZmncSHVXmN6w3rNUeXL5V7yjgBTkyseXJaadvi4XSqTz3CFZYmcc",
  "key5": "2jPxch7arqLUQHhSJFQP7zQM9toVfbsuXYBrz3sutHG1VVkEAnviDryBCvBaLYtLokTNyWj1JisckKLmAtn5utxq",
  "key6": "3Xo7Lewfpg3kQhdrJBrTD7ERcUP1CKbichTM8BcYYL5m8PaMkZwc444zwWoLAvK94PQgp18tSz6qW5ASYBWtxer4",
  "key7": "3PgE15yybnACys8ivKVstkidoxE41BNNzKk2LzXLfR62rWbqB1ZPSX8Na6ELunDJzXHPso8wTbnsoyPAwtcCVVmk",
  "key8": "sUAmQVKKaT93219N3dd5Zn6AZP2WFEGiXTUR4F1BYWssUr8DpCC8pZVwZQHUwknQJfBNN68bwRb7cktbDDXQ77U",
  "key9": "2YE5VWsqLVGXFwJCnN3nKEfq3RjQP4FLXYumd9KU5fhSSoWwmpSW1ZLvJ2YYJ7WiG4jP4sa9bco1jMs2pQNrrPjc",
  "key10": "bUL48NZW85FZ7qYvic67FkDoSL5VftU88WDfGkCqPtmq9iucGtjA8MLuKd3mU51YeBt6zhFDCDDEnKAUBjKFMTt",
  "key11": "2jEpXiA3rnYXsHcfyaUSu3v5AnFqFsWD7F8a24fWxZw7WpHMQa1jXPoF1gvNJmavXMm2tWhrMbJmX1UQnX3sznof",
  "key12": "2P6Rbmn1TLP85GFHpXh3qjg6XdZPcK9T5srMZJKTrHmUowSTtGXgXQ3vU8ct66RJNrd8CFcNH3Gy3HcH742jyv5D",
  "key13": "6gPZ5GU6WNMF7RH6nexnC3zpMyR71yiGDmuKsk5HygVqUNUXQgKMDp11HhGHmF4S92wp9acqzA8YuRFJ8Tsd5A6",
  "key14": "KJ79cjLYBdnaSUH2uXipvUG4Na1foDJiL6oDBdiQcXet8ZbT3fU9k1nNw52PEYrqtzySyrPik9Ho4NoBfQGoh2d",
  "key15": "3dhooXWVhwidkeKcQxajbLA2JoZyTumurdwps8XUJW5CRTq1Pg8dJTSgv3xH8G8dK3abezpYWQpmro9GCA1k85j3",
  "key16": "5HknX2GbM7NLxr4XoNLbDrAYaPYsBPdNAG8XH5Aa4god4UdBh5x9vacwcCESirgJjWd9kJVEmF67a4Lpw6LdkpjU",
  "key17": "4SStXzMpxrtNv35Pur5eMNvBUJP6SE2uFjFqrQmRFaL5zAUPU9cwVH12s93uKeDL5XGSDtiScNLvBFYPKZFh6K3Y",
  "key18": "4HRSi8NQ2K4iz44EHiiHqcZbttnrx3zcnWk8dWF8CjxGC77i5qDk1224M6bymwEkkAfR3SXXdXSzptYxRDrkgsEX",
  "key19": "4tgmZuA1hgZcg8QWPj8oAJvhbTXjvtcosHStEFGjCyXMpZjwwExAyW2T7g93TM2TNjr3W7J9ABNbT89J6Q7g73bT",
  "key20": "2KfRDhoGFarTo3WQ5Mn64UQFwkzCM32UZRep2ueDj2rT4ogAuDzdsj96R1zsauh629msiCagLoukY1uFkC5S8P1h",
  "key21": "559sQvV54D99ii7srTVpSEsb2hXQJkGNB7MikB5sSR1z6YKNcid4LmtQrNZhGnC8eWEEwzYz2KUeXnDVVxbC1553",
  "key22": "5KBxkmMWxj5D6tFWibMF9cNMsYCv7kXeEjeYz3eL8HT7gf4gpdfGnXJAWpwKgEjzpoK4LPHnySB8f4fJ9F3jj9FU",
  "key23": "4VGRj4LhKV29MDX4etphyhAY33wghueqoRTfznhoQVt8exhKJMXErKRnaQfFy32sMVVejKKUr7GJwzn7bPkZUmA7",
  "key24": "5zCT4gT1EJZq6EdGdUMv9xbV1kg8wZFW8RTihaEYMP5JDbrWBbi2wGma8rnLsytPV2KC5fDDD85pxvPuMc37zW8L",
  "key25": "3XpnMH1fqED5QeJXswNiXa1TvMjps7yn574w6YgLeTgviiYfdxn8XBY5c5KeU9QksL8TZGy9vM7VDPzQdXnoucGz",
  "key26": "5ho51WbRA99VuSpJbhX64dFRkCZqjEekF17CLgTs6Z3yNTWMdvGDnvEUQoxXGm9T5o6UV2Qzgk1xb3QkqMnFrdvK",
  "key27": "3U9kSiACHYn88qznjs8kQrsRGcJBS3H25YrJMK8FdxMdqZW1xiVJzGvQK6wojWbpwsKe52t2cD3xFXqECvDGvRPA",
  "key28": "5qABkqasGeR8f54PXv94ekKvcJ5DjtTQM4oEnCgBr8JFyQh4PKQvyUbH4QsvZmjmqubbDmCfyPR62quK1Sxnwph6",
  "key29": "2jXRkQG6gMcCZSNLz4MDwc5AFoDDN68YmDpXT6HXDcdLq3z36uCuiL5Lcsvf4ZyVEyWFHj8JDvPNCD2b56eJurGQ",
  "key30": "4qDmXrnUu1mVonBWRpWWVCwmVqxYRfWFqKxVFXKCRYTk9WM5dnUmRJPm6x1aMWp4oxww3bBBdpQ2ds2Erbm27rhG",
  "key31": "2xqKwkGhVXreme2cWQQhsBvUDGbMvQGvnPaDjd8MTZdp5ePemtHV77AaBhqnZiC6m9RPkHdoxUauCYDc1TPoNaup",
  "key32": "5i56HdKceKP3tcfSgMYWKKSyzRAxFeNwEgPhVdbRs7Q59fYgJbdBpfgUCiyW8vZCPKGsGeN9tGRYHcGZ5zhWDZZg",
  "key33": "4GQain6gP9qC2pHN4RBE2ZibH4YdJ9fKyeoLqD43X7A15orzUtmuTPi9ugQGH3CKztwe2VjJ94notwJMtYydktup",
  "key34": "2nMf7o7x5Xu6qznchaThhwbz6Vs1QTpVeyF9mcYq1AmVujsxeirHbUAdcadgmMuXxpXqAsF9c1J6MkKnha5BtxdJ",
  "key35": "x9Q9iXS4tb1QNgY57Defae5Tqn4krahoZDrqJXaxZpBGqtYDwms7gFaWgVoRKx7hEhZMrsbYsMiRLMX4K2zjDZr",
  "key36": "4e3Bpa7Src1j2Vn5thhgUdXnRjMy3C12tTQkdK5oueQu8gSGv37Y1ZHx9J4qGcniZhsquYBgyvWj1ajuwppp17P5",
  "key37": "4bWWPYPRdA62QNd3e4a2d7VKKJxC6WPhwvzBCxSx8Aohiv6WeEvZ5Yzci7R8kqh7KoL5nf8xH3ypeJHT69Wdm8tY",
  "key38": "2DXA1ZrmfoAf1nGK1qiBbK577AYAMU2A1p4ey6YYva3hb22p8vVTKJE8X1tPZEj3NsKD5f3n75XNJ7h7RD1zFhMv",
  "key39": "5tUy9yMUpa7bMgfacMnYbHN7SkRU3K6F47dkxA5JxMaqmKrpuQAh91oeJJhVpZhLnxmJSAqwtFwZ2gN3nxT2RRHT",
  "key40": "5AUPYytivL92tEamqr3HjL6Nbqkxb7Y9FPqvf3TSm8m23ZDxtRDDT1UCj3xZX77poMpE6AG2QMjmbS5DH28xXgcK",
  "key41": "2RJZLgzNDQJjmvB23a3L8WUdFAq7huffs9VWUGF9StM7KqESvRfdNRLsypKdCchkUZbj9CBuqU7SvH88yGyQYFsT",
  "key42": "5ZVJs7xn5htSnWtor3xsDhF68UkJMY4oSRmZUj4V2RrSqHxVDAP11HRorhjoQsZ43qZxkXZkZ68VEmHZaVdGAXBY",
  "key43": "41eXhiP3Dtp1byFCvrqtRPF8kamm4jEwWzgYbf6jWawy1aLzbnAN4mrMPfatwrhyzvCDdAbCsnZv6bK23UqVBLUk",
  "key44": "eutN4DsXRu8ee2Stnp1i1vMQUhwccUhQQkFFV1xXP1spKZDAhAkwoVogFzQj5WdD45m3ghRNYfyDfduogsX8Avn",
  "key45": "2ELKBNNAGRk3DwZrhmhfdo48nodCLRKGLAcc2bDyRj8PDAsZ9kAbYDHwrGYNzLpstwgTre1qmsccmjUCVx7mc6of",
  "key46": "4ze7DgGcHMhFt8Tj2PbVoSXZWW736wuVqa8vHJGUoWmCx9j9bWykc4Sd4pqxzL5vcqJVyBcZMgDB9YqLxcnQWsNp",
  "key47": "56WRNQQTyi7QShf6H9JgBjLG4uFmgEPtZD49Upw5sMSzqJEXBAwUEv9C12epbxaFrjbT2PMxAQ7M3ngP22r2YCMK",
  "key48": "4hiXCNX3GpboXNSAHU8RxGG1yL229TY5F6MwiH88pjfQC4R7zXbJgQyGXH964LaJPipRvLFiqZPV14EkmBStEony",
  "key49": "4CUzHXhPhB9ZuwR1HHTFtT7bgkEZ2ckWL8r7AR3xsKViSYXNaBzFtoSf7kHYP51n4dDof4KdhMYxcdME4LK2jUZa"
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
