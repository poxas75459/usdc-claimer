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
    "4GuaSVJ7sYRGtq7V6inGY1JZ6S7dQYWRUbzyizCkbUV32rfXuRaMntwTRboLMC1wyhMA7m2APc3nm2bvv7oYvpSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dHkxhbigoa6WDNSJabrqosHssw3Q9YhMGF5gZVrZ45QFBm4uYbv1w91L4YkkoMA2cD1vhZfzmdwtB7todZdATP",
  "key1": "36iZCRe1aCjf8m4JEjRwM8Bakbo65LchuFGvN5VC4GUukSmXZeDHTNqe1UXnrAvd6H4ZjuEyBETLihGMtnPfEJSc",
  "key2": "2WCVj4qJ79mqX3sz4yHE2JfQ8RcHCsDt4ZDWqnHPE2jjpSnChYrK5L4qm7e8trnwQZMgaX8eADf1HjEhvvphE1zb",
  "key3": "4jHYfueXTEssiJz7UtBmFJxTzoQ38oBrfYCBUap9SKQkHdnBjZpRyZSmcEbJdE4oApP9xWV6nG7238UtMB7uxBGo",
  "key4": "rgTPFcKC6tXRPhxTYavd2GWnVTrimz1TjaXdwN8QYGabsWq56KYkesqyMx2VDvJVTTMYk3ZMc6gJWcDM8XmtCXQ",
  "key5": "4AG8yRRP9ZHkqxxDXT1g4xVEhHQ1kwPQb9AY2CgM8uwqe6Kok1692tcTbZr8xv618qVia9iSuPBuSkwzYUYEZEc9",
  "key6": "3w5ojDru4NHwPP1mqGcyKZ7CwupUyXdmduqLM25Wtx4hJRkPo92dF63fMxV8quZyqfHWoi32WR9yH7uHmts6tUYU",
  "key7": "2SzZHMwhxj1swS28b4Nq72STkqiT14n1RqygHGmby3B2ACrXyP58msfcmaZ9tpjBufHdFRUFjHA76dA86B4cXpfd",
  "key8": "5JV2RMjQb7H4RFqqStC59bvZLdzcXshsFD7tJLNB3JMYYKdH9KtvaX9weDpmkzkedA9pAey6gsdEBozKn3rYoEPR",
  "key9": "3SBxzi3VgTFaVLCC2chkbnezW6hCCEaw7E5qgWYxGJ6eYtWDMpijRhriD5hf3Rqnfk2UuunN7RmtM4cUQ9yyN6Be",
  "key10": "47V9EAfbwS174tgfH6KwgHQhEQWQbvZLPuyJsuf26QD5mxnHoRJBeiamDZxUNoVtNYvzqhJpVEvAnmoVUZ8uokwQ",
  "key11": "676WEBa1MSRZUtXoThiPakMzUA6ENJfgtLLBLp4KcJUSaMncwXrHjZuH2DRLVpwzfPFvYT2i6B24oo44crdUc7mg",
  "key12": "2bQavfza2zZBN9uAeHoe41GFME7iY6E1N1z63ZmzTfpAxfMj8v5j36ieMR6TzPcD5tN5J6QSyPGVRZBBbhuExBTn",
  "key13": "5ptpugsj4UKsapZCCZjUDwwzKo8DKtkEeXZ46iFKsjQz1pCoD2VLK1VwtpU9MPfjTKTbicAfkMuCURoqa6xCReMe",
  "key14": "LyKa1vtMQrgo4k1htR2rCiZqdVmsu4nLFHh1QXsChB1u4E4Sr7P3PcqKrnK3xCfU7R65XBUbvprgnjoXhdaDetw",
  "key15": "5CWYqF9Je25Lf1UA8gRrLFNNqVLMk4TCucsU2PogVqpD3b2ieH5ftTgzLA5Djiqm5MXcAiiNVdpGfHDV1FcMu73H",
  "key16": "28HexXDxNTeLkjeQoRhcyE4GxJoKjFdUN6sSUbs4GThJTNg264eZYScuHH6yMdMF1dLqFzbZ7JQXk6ryGycJ9hdF",
  "key17": "Y9AoQUUjcHJAVxxG9vo18YEVRfKYJY3Rn8dpET2MPnr9yahKCaAf54URZdHyAhR5up8dprXXYywMn85Eu8NRMKq",
  "key18": "swtnQoEbRc5aFx95jFMVnBdsiCe1kM9C59rgxbas4X8nzjFS39fU2tDGgmzftbSufnYTFXyfHqC23BwkysYP48R",
  "key19": "66c9YP6Fg1LXjF2TV3VDGMW2k9YGKwJNjvgbKPiw8hzuZYgGi6XhtqaAxFHsv5EbwqXgKfwCz3TiWCFgtnmDi1ou",
  "key20": "3YHxCwT1bNAUf2JMGXoT8wGfsUgso1P9SKN8u2dxz6oqtMWFg1PfP9Hs8fGoHVHaZG9LMGeTQEkDWWhdg6RvCSzZ",
  "key21": "61EMQgKZqhjL6NcRu8xi6rF3VSaoNkqhgkeEA9EffWjpRrYYHwvMHz5ZYrhgViNN1RNBMSiW2U4XgHr5iZdZu9Dx",
  "key22": "45yRZAvN9QiHco6BU6Ga2GAtvBLNLLnpxMQ2EaW3TqnY2LYQFG4vatYxmNQxvCQ8WYuCexRatxDTToReQGSX5yR5",
  "key23": "3g4UVm1Naz8oYicVDUS1X2MaDs5k5gjfQcy1PrUbqtZDmcTCK8xhr8CPxhidZsVxfcoeivCNyxsbNwF9XDbg85v3",
  "key24": "2uDhn8TNyqKoFHHiiBEdgvgAoLzPG491ZSqTQG6hPUwkh71gf4suMJPa2P78e95uUp7Rum9fvxWMtPtqXS1rgQQm",
  "key25": "641jfZTQvCDBszVZhZrJXSH8yXXZz9k982vT3EcfzbGri6cWx71LJSgnFwKJY6pE793DJTND2Rq6tRdu4RxrTHN1",
  "key26": "5CWvvFRxu6DbZgR2fJm6pBLNit87HYCYmWVSQozyJUtv2NUQ6HWUrLBjo1orLDspnR9yyfrK4yYSkbiubJyTTvJ4",
  "key27": "SFXU68GxFgEW52uEHQoi4sS2C94LJ5YLCnm2MdQJZBiPCYsYL39y86LBFyYCmSgXRXTxr2CVhfbxsFcPGPUVoy2",
  "key28": "5h67saerQbqh1hhfcCRqHma85tVAs88kwYxHW7GUq7vVCCgy9K8kZCNq1NJ5Gdxc5946s58pJECap852fAFbMNdN",
  "key29": "4mptmpQvU4PesgHTVrnVB5YSj4tRYRuQ8b1xc7swanmTncZ8L8GS99JA9zdjaYyz5yky2kPicHpNMnLaLrw3uXVb",
  "key30": "2vkWHGRuM6Mymh56gypWf9ZeGa8o6o4KQMoz18wxQ4AU9gRrQx8q5QLtXETnBFHZxdnuKX65QP8xNYy73d4ocTUp",
  "key31": "4ve98a7TUGWNM3ja8g5Pb8DkhWcRSRP4xynzzj3i6m3v4Dm5deXtJ2JT6cynp1nbr8Y8azMXKVb3ApokL5QBzhXy",
  "key32": "2w3esVm2pUQx2uQYWwXVc9MEsEigTFyDw6c7gyVryDPoTGfkz4x2UqYLmQjFRxYNCwLot4MSwSDTPGiqcj71Erfc",
  "key33": "2A8bKmVXoB1THwhEzU4zvfgWaopZYjDqrDtZ5FHiAMFgWuvuCFpAjQ6zsL1tmGduEx5S6guVmmrwojsbuDXFHXFB",
  "key34": "2CaVPGnuhacNdhQC5HbiHr9fSWnzzPFxpwSxmzhtPYtQssFU8oJUBJknHgak5M6qnpJRPRhHmsq9P5mAnpzVn38c",
  "key35": "3HVBoKQdc6GHM4Uqm3wghRDicr43VJyZgVys1akEiseji5Qx4xier1knoXGCibBbKpv7UhEH4mZxHy44GWQaWfVt",
  "key36": "2oKA7PX2Dh8SubmT7fAwgSFbyyTeHLAxGR2XNBCVN6QaTDpSLWAnhiSBz5i8j9vahu9rSagvAbviq2VjLLpvyJzY",
  "key37": "4Lpw9MJYurCA8Z6ehYfZgovEfpVjq1vzFZ47iDRYWKeu5eNnbcBY9mEokPs4CAVAFCmVPSj1Q26rPJKXx5wWTqdk",
  "key38": "4bZ95xKGiiUTnhePAG3KRg6Rw6KhA9M2m3bf5PUGByi72j82mdfHzN1fNeuisvEvhSMezb5uT9ehVmsdBDuV3335",
  "key39": "2M7MSEWHsB5SmPwYFMJjy58NGhXnuBmfA44H2JRPyAzkFjKogruEfxyAZ9gpWfmLoRXLtXhM7kPMV43XXJMC1iw6",
  "key40": "bujMXvQhDtngV8YNCt7WvNBLUMEy6Cwk4s1ivDQ32DrpKbiFBKEvGQdUCP2tMq2QK3fZaigpviECjTjfVYA7qoL",
  "key41": "3k9dqoUvV6n6JQCg8pQcURihnKqgLFC4mYpH8dUQK5GHQo66NAgP24JTWrDkpVSc4Rw6uL2eufww4FfU2EfVF2zQ",
  "key42": "5MNLB9xcRXB9YSZxveRRLkRJorgVnsHTdGwvw9Tbeo132RrLEBGzgcnDupe8y35RiFd9CpWCwURBGSzqPknzAGPo",
  "key43": "enYKpJEGNs637Qyo6hNY444EqKeVsprRNk6VfV2skCFe2ndsxNybTDYdfPcXwF4ukXFJAprh8MSvGAxhUcRrsAJ",
  "key44": "Q5KqRhjTyyT8mBLBTpjLR43CNpswUB5weahTf9GoWEPCVYcWHeJ9EjPRzMSQ7yKE69smg6K7DHF7rsLpTH93s4V",
  "key45": "3gYRBgiHJBfuY6LXpJqD2V2bx89thiFM89eZP2cxXJrqowour6aPLM7ypGzu4LmeuaiETCHKqTZo3UXhcgHCSyrH",
  "key46": "2Z5boDqSvA18rymYHoFSByz2kWshwj7fZwFdkFrVkb6JQujTmdLdLEBMwX4nMRmEzmGHsKCbYu8RjSmbjAckZ6ud",
  "key47": "5KCca5g59CXTvizgaMDGYdfSCZzAgF28vToQnZk92G5njsJUxbnKRyncfFEX8gNTAyuy1JM45fC6ifveb7zt3DSc"
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
