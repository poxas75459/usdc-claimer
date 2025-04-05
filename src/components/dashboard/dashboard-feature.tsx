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
    "uWSEfGjLVW9vVKgcBFYEtZq1nehs7p2XzWwhkppNCWfDPmovPxa8SK3RniVXAaENpfCSjFBzwdjjyJYLYiZ6Nx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2McjGEBBfVhaeDcPTxM99UADQ3PLPbAuDBD65j6LRYaEqoshSn2eA2iNi23cNzavjKXhbJmq4tzm4wpy3UD37Fh9",
  "key1": "L1LCnVtC3eEiXm6JkhzW2qGXZYUVsdQpH1fQARiEPFuFB7Eush8foUisyhaMwguv3AD8TDJmgLEzZ8RyVNX9ryu",
  "key2": "RtFXWxYZmbR5xRwt4ipw1JVast4hHKcvNGG9CyCzWPjNaBEYzqAfeQzh9S7zfoqYL14wj788NQXsdhqfPwPBHnt",
  "key3": "5nHXzyicQA8myt3SJycBzQuBzb7Uqg2gf5BJPtKSCq6EXudkMbWFopeADsZEn7TqsnmfySbWDSeNYzgQYgND7vmk",
  "key4": "5KXRFmGKitSk2rwknN2vGx9B2JRwmMwTZRaCsh44ZGG718xPhvTZRUD4Ww5adYvDfeDkCaR7NnSrKBhmGsSvzCQ4",
  "key5": "2gSHqtvLTRnyZaZu6BUiL3mApJJC2EtLyur4UyKLFFRvR9H2QpyESrxC9n7Wx4AZ6MmuBnDSaX2xWCmJxHPEdRsi",
  "key6": "35kA5g99R2Vc4DBQg5TxL2oaAdEKALSxXugdDfBEyxmhjCbi1girUYSSyyx7aHK8EYzoJq3skDjstzFu9wXv3gzG",
  "key7": "57uPgqSCgxC6VCrxKXj8dbymV6QFwv3sE8rareiX5RCWe3ofPGnDDdn24Hzx8wMiQjQdEnQaHzAoUK6scPWeTudg",
  "key8": "R5psV7gGo2Gre1p43jKBWYtScRm1BdLS4ewFKs3eYCtKg9g7B5hm8UzZ33hyeoEftnTybu7G3GWRrKmjHGYYP7z",
  "key9": "5T83ggsavtHd5mqdwjn8bEakVMiDCt2jQhcuV25HtpobvV5yZFbDELbWg8yuYjrTJnrKJEahAP97kCwsR5jPcdAu",
  "key10": "iCVDayEpyQpzmtF8ZdbDTtzf9tkyjAYvsuZ1rCczKJrLzR5qWiJgQwYiocVvKKjmLwWFGNWnaXcpCnL1eepGU8x",
  "key11": "3ddrdBK5om5pLWyjakPmJGaSNvqTSB2xNJjef9Qemxq4STuDYJC86jqdSC3UfJwmfNovtfLpCRQXyBK9mufTxJzu",
  "key12": "3RZ5gbShfkApqX47Ch1o68sJMJz21gtNLRnz1UMAoHLb6vgEdwTJBKHFgxaf6ZHe53kYWcQo28xoroXETRD2qNyz",
  "key13": "65mCgwxSWxk1tU5JxJDUmuPcH1rLRwrVprQMjXPbSVtEN6XhusZtnz6vKHPcoZ6CHTWqLiccZt4ufn7nW62KQhSe",
  "key14": "4c69enZhLsGBFNZ899txjKivpTJLmftaRo16weJEWm9maC5gn1D3rVd9sjou6kJWus3CPELtf4wQhRNYvHhNrX9j",
  "key15": "QeWCHBNUnduk7WUtSxVhX8avwkk38x2oR2NVxbM3MZG7mpdpzmr7FmaUj4feRm65JpyScxXuVqHSgg48MU3xUCC",
  "key16": "4arA5ZH7r2si2JaqxemqvSg9j3EgGXhHLtkfKonbYAbR646fCwHJd6QJBYt9KRcoPW9LKsNnDAYhfWgwh7Ntp5Fg",
  "key17": "4PYJG3BAR4zRvVtVqbvXeu2LpnAQRpJBs9YQmHdSKXNh8TCZFPnNZk31A6dCffbaRSEazy2bhNfDT5dwE1Mbekvi",
  "key18": "2RShv1zNUZkkzbwy6sNpWX53GcRS12jirxAZMUcYNQcB3iuskwhKQo7LZ5ZTTJFZVSBXt9mmbPaJtZgk8fPn13ci",
  "key19": "2dUSLdGjcLXiMZuB6dMzj8xZJzXXFhVKzdqrbZSpeFgWxWDjM53j44T8444mYmQHR8Gopqjm6SBr6EzqBWk6HAqi",
  "key20": "5JnNmTSrs9DnV95tnyFFeE8yVGjMMN4xkpesRU7cBNLrCMoLPdDSJMfdnVFVYrwpaFcdhDi7HgkG5PEqfTyxWWpF",
  "key21": "32Pxsy9JV6PATAWZK4mSCoP8o4wa4fdBpEySpzmGHxHyHwbcUBRzjccwC71eJ7WGuBcjoUoHQTAUKEP5QQ7jhwRp",
  "key22": "yV4HT17KJYvtokgdyPhqJiKNWaMhTUM1cad6jHDUKW8hfocfr5bjrxB926Q4re6LHZJ9Y4doV6UJtGMVF4VZRPy",
  "key23": "wARTYm61G9tYjrnNLp28WbdeRQjavufbfpJ9chfHE7Y8oMkGRbbHBe5eioWbD2Jbidj4XzRoH9Um6WYwgMuB4KJ",
  "key24": "2bMQktgfo9zn49EbWSBkVeHn1VXzeyffRo2kn3FGXKJe7gSuPUSPCSTj6njKLCaw5idUDH7wW6HRGpGntGQTLz9K",
  "key25": "5MJSLZ1SpQPe2BsMzHsVhzGKaaN5DGgUUwBLVdNfHPQdzRbvQPYMWM5BV3f4q8w5nZ833KefkNUunZAusi5heYCL",
  "key26": "5anv3PXujy8mgRXoxsyhBVFSEFmfCFhnADjUYZUFst7YfsG12yCigDRctsMCPYY7hkoQso5tg1Tes2YzMSEo8Z8p",
  "key27": "4Amro3DY2oSKpUV5AEVTm14Cv4ka13WAsJWxtCk8wFAadjZKMfxWLNbzxgdvG51Q7AZHSvvFmqdHRf8bD7cC6Fsh",
  "key28": "2XScTuF1tSMp2NArFKxyrwiHGDdV4HEcFBngRWacgNwe4dv9gsVuQ4ubG9d327bHsRsC443jvt2yTvWxprcniSGW",
  "key29": "ChVMUq6fW9FHNcTP2Knxyz9Qwujd171ic8LVk3DheVcnpriA7vbyu7CdNtkSWDKiKz11EqhLWjqFHuvSwhp4weS",
  "key30": "Uj6kGxLpK57LHvzgsaTs4rxiSdcbR2RN7JbY1z87s3HxYD13TqnKu7CLznTNNMZMtkv9FH5AoqmLNvrTqf5qYpb",
  "key31": "9BoZ3WRTi8WGVwHdwbeJssAvQYcYiTyCVFBb6rL7gTPm73ReRdoFwm6Tq871w5aK3VkmZcL9X82SeNwCNoZzrJS",
  "key32": "2cpFeoqpvyN2DHhgJ5U88LW3Y3qfahYe5jXKdRc9nrYCM1LHuBxCC8hDHA98JMrnR65br6CaCNs8Gi7uhVA5Vr5M",
  "key33": "2wDRqYcNEoDY63B1nvmnnzYwzTJMG7zvXDAjjQfo3TJ5E67FpkUTLFbgRwsBuQ9M2kXL3DMg5E3yaxia5UiDqhBJ",
  "key34": "43fmBZ6494PgiJU1v3Yc7UoPVhLJ4xUyJMMNj3x2BNAedjhNHDRjEjPyiSqpCodFw8y4WKffTwHhrBca1guBeBHZ",
  "key35": "54ksuWNH2jc6fKS37J9XFbFLTJtJg5PvSdNU432b7wgChbv4VExfGUAnF2xasmDfnmHo5hHQHkJTZiBKHZooEfnY",
  "key36": "3uogvMxjTqbvmHVquMMybBaeBXBrQmHHLFdDxz2frCqyMJ7o151myg2srtmYNcPSoMt9uPwnE8HsjotqqGjFcbYy",
  "key37": "4KUR3YLsc6zLKMpVMSXwKeNC1NfcU5kwCwGWpdyERgjUoQgXfCDPV6NAegih8wVKXWtLkGqJBDERXFhkD8QJikQa",
  "key38": "2UuXtYLTGgmcSkSbaYTrFbmhHdtp7cDCYjk9mtyLN6XjXxy96HoW9GKnUWxA3DbsUtttxqL8BRwRQCFqN46hap4G",
  "key39": "626vLepxNXVfezojG3mZZiETW4X75m15ib5trbSLJeK5gcZvLcR6fNXpEGCbSmYhVCK4zBS3X3QcRRQg5LqC2wzZ",
  "key40": "4pndxKN1fpwJ6YYVTY9ER4JMX7sPhx9C1wYXMbYubLRiTTxNtrDvkfjje1RDeD5XJqN6VgsiL6z4mcQa1AdS8vAt",
  "key41": "wCTpZvsVteaLs9mfo5Mt6hXaKr58TV8heucsiyjAQhX71vVbnVMoDSG9vtYM9niPzqLYZnzBN7auWYGPdjsAsR7",
  "key42": "4d1iFSezi7D1A42RWcB87BCvbpaN8HPFnYt5n8oadwYirMxPZ5G532S7zbnepx5FDr1FioBEJAp7e3qHX5fw3z7P",
  "key43": "3tJwRcQ3KTb3EqQHga7xSoBiVkhiv1ZacUQ51vYEjuY5Uth9StTd7M9gFGyRRS1oiBtAk2gY5JndjB3kqXSenVUX",
  "key44": "CX1QWaeqzvuVzGwFEVuZ9hrkzR6pDLSKUTi5TY7363ZqYzdxr2xrUELydz6e9qFNFvpGsvGqqmiZkcw9rpFqynQ",
  "key45": "3PQb5j5hQNgwnjTUjnHmuGv3oqar9WsfpsdRTMBz9GZBmSbWLZayyj1cWyzdjyFsctPKBKu3qAzUitUps7dY3fJ5",
  "key46": "2tWiohDxtvhJVbuv6NTWqDvQGbYCGogcXLBp395HPQZKVRDLKbrT3LkgGL2EdyWUby9wmh9icZ3eLxSzkfC4G2at",
  "key47": "5mqrKJwUsREhTMrEnvxdA6VhDRnmzZBqxLeowRd7gpXWht8CffnXziUfgyQi4GMpLSuqnCzVUQbyRv3LamQtULvu",
  "key48": "4dRweLL1YfRShuMj1JDhWLLZtZuqSBQWWVC1h1TiMUYPPWzo3SEUwr7VuusstU3JE5uoCVoDUoDM9ooydtXC13Ce"
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
