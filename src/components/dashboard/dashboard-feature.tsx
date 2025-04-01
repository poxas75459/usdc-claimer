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
    "3eUYw5VC3uBJXCfTeGbzj2keNsEzDZWwURjwV9uAkRDbYvYWVunoCfgEFbq1hBeBsyQowaANGf1G4wgfHj1kZ1k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHjkKa3rExPTTHNJp3GcwT7CR6TUmxuFdZQof6YkUL8g1wih2thqrEU1nfXro3iqVyDtQtGv5Kj8y2GsTMkJR5C",
  "key1": "58q1v4EJDYWRGF7yNSzLbZHQLwnJmcEGPyaDdDs5Vun9DUU2HCmAZz3dLofaAWQuiUBDHpKyig9n9JGRVpbCRvv6",
  "key2": "2B3hqAXBFweNtTxZsiYLDgkEBMnBP8DNuaHJtPw3NZTs4sVTVyWp8dRmHjP4ZRdvEqoHwW73uYEkv8WnYfMfTPYw",
  "key3": "5XyPwYXFhahgyzdhA49SxdZtohyL9734xyj1v9JifCssDJbbbj9Dwz1veoHUZBbHRVsrepadBr8LEfdxSujb39KU",
  "key4": "4ebbPeYSozpjEA419KJez36xm8T18s5FKxEErnhqLdPQcgjqF8uKX8q4kQPbabhJru7qbYWDQaeS3vP3LJrUum3R",
  "key5": "5BLKwJvZwDEwGsjBMwDAGcioQqkdppQUb2hvtjxB1vRU5DokgZ76edw4jvegBPo8XTiKHtuNeheP24qV7xGGDGn5",
  "key6": "bUgDmz7cCJNoXfeHUBP7sPBZUVrdgiFTn537Dwq9iURbG4xwevNDUw9Lq146Wg1bTRtaP82QujAvFzBbg3bge6v",
  "key7": "5m3Zof9Jv52ScTKcE5b8fTTPcAVLAeNQPgkyUF4dmPuM8n5TTNvPEj69Z2E8exwoS49mAZ2DVpc3LKf1wCvXGcXQ",
  "key8": "4eAtXX7s1KqWEmdhnrVzQ3fkMoM6VNg8S4qUYMKgFWvu8NU2bfycevsRuZ1uV9QWwZoQi5uypneWoKHwLX5rqrnQ",
  "key9": "5nVYMyg3fY72xgEPV4Dw4tW4UcPSpg3iGVqYwFw5fdWhxHrHVbLtsQBuZr2GD2byPPpaqr2mTcFUPUTpu1eGvjSM",
  "key10": "4MV7aPinvip2VSXBjFHJzNb4r5RYrNhcCT42zAi2ivrpCaeX98aGc2gwQxY5ppLPV8ZN8cQoS6BdPZamz1XxeyEM",
  "key11": "3FUyaHkr5D4XwUBUebP8WoqUTBFKuy8yp5oGuLoq7RianpnHRuW5MFbJ1XS7TRMSJBUsMqs9zq2vJ4vWBs8KMPSt",
  "key12": "QVxirBjbKK1bYewdt6HGz5HkpUZCbRashUkFrDRATTjZuoo974ES5oRkjy5xzsjgpWXMHTjGT5ZUUhUXoZLBAbd",
  "key13": "4DZsF48EB89Kf5ZyUnLkkUotxaK8CBXVN5jiipBVh8fP4kkTcJhX4uFW9eQ18GQ7jfZfstJuNeDLDcmVE8FFRrM6",
  "key14": "eyt8UyDvt3rGqehEUpCJLhSgnZTVfkLkfMKLsAqWSpFn3ZA724v8qY7Dxxv61oD1g279HDuVz4oXY1a4T65Q8Wf",
  "key15": "3XABq3EBNTkApNVcsfygrQ3YKH1zjUhy9qLCTYfBvRKDdSwxoEEQvcbA5EYeoBvVCB4D3ef4DExsyvBLSCVDiU3Q",
  "key16": "4ySWt3VEkZGPNXH7qDVVhuWPqpj3yc57RbWKMt2hLCTGvxRBTNAfkWfo8gdszG2mD9j4hAcgMCfxMZwKBjwK2HzP",
  "key17": "3iQZUF4da1bXLTNE9ngSNaZkakvFokKbcKGkwQb298wozN97pwPqDxPoZQbghTKfXoCy4WssFfhCahTMzFFXYxrv",
  "key18": "dmgxcWe3FTdhAYjd6QKCt1Q74kBRRky6iHHKfCm2ReSotNYd1knxhQva4GGyjjUnAdxBZQ4QGGbxLbd6ThH4U5h",
  "key19": "xkTjrj9phDKomNq3YcQ2zsskPdVjt3SVkrEnbwZJXbtNdUEQMcQqRRvCkMsa8JtC4tsPQXHpiLbTLBuiBZ8wf68",
  "key20": "4EiKGBowottYD9G4fFrxgXGvHuaYHLMQRVFmovDyMqvEbXGApDP7QgfnoYoWm6WK1R6ZZBvr5L57GAqMLsN5xyMb",
  "key21": "64hRGJm6QDzoWVU8neWQFiczzAxhn94Et2bkpP5gxH1JcAASpM5y2CyBvoz95RoCZJNDmNH2EAGsjPHuxo3BMGGa",
  "key22": "5uXLzN4U5vi6qfYbH5cVBXi4qNk36GPuLbcjVFsxyq3W1VWgFhXXT7y97WfVFTxEmS2GQuk3kNFnoHmt6TCDco5x",
  "key23": "NkneUvisFBwWi1Jh7TZrznqacrkZUmVNn2u8BbaUogJwwQEMqHXgDycdHTdwB5yebCrVtQGrri7E3nGa64g6Er4",
  "key24": "VcRqbEjmWZLsWPiF6EtEizgmDXfU4bouGVgEajcoZWuDqWYc734i6joTU6EzZTgfJHZjw7yhpMTCQEGq29FAm8K",
  "key25": "3YRd1weaGG7L6KHpTMqGr4y49L72qJfD5RXo5BwVYAuPcggGMmAd572pWPeYjNzSEZhJLfQJxL7zyr9unftMuP5Y",
  "key26": "3t4ozioo76SuMPiJNxoukp1ttnXoFxPv6RRgzL9Db3zzqyfUYdZ9Z8qWhQSnD1ZYHn11vp8e5BYX4CbHipjZGyhX",
  "key27": "4HBJrEcjkn5Aaue2e6jXZxj4SGyxM8cLqbSj9Xb7zCJh5F2khNrzDbYXq5WfAeHnzSHgieb2jR5rwDa6VEYu3Pzn",
  "key28": "2d63mTGUF8WNyZfSPaVbuXYN7jL6zF9NbRjejvpd3bunS7SDRXBdUfxjvWmCSbyTHCguV94guRkHCHNq8CW7Q9QP",
  "key29": "5vg7EkUhGMCXaRXnRSTJqsZTPnGT36SwLeYKJYLbjHZ2yaXwmuYyS8LX81fwS3cMzsyQbvLGmPh5HMbFAMih1XX8",
  "key30": "3Rsaj8fFxdYbwWeQTC2NA4Qa1FoLpSuxeMHGMsQ3tU2KeTEZSjnyRAd7WvTz3eKKyWVMq9AyWZuucay9V3pensFb",
  "key31": "5o4QsHPMHF7tzTpeNDJiSeV6hXYu7cXsqcsxpMCZRqUH9byWeVEo4p6fweNV6QSJuk2DWqNBs3ZFgmCh4Lg3WJSu",
  "key32": "4qAp8rAjRsCQY4ppcriDpGUPcCNoouz1eWTvJrnGPyLgG6KK7N421wa4YbrkwYGuKAZzsKfwejmjfZiPwhYbMfLo",
  "key33": "1k9oEUzx3pCABXW629a7PhWYcFPDQUSE5wxEXmGNCcTTh9Wra8Sd3qfj5H7LNYAUAZU8w2ePKzqQMEhRn65foo7",
  "key34": "3T38EwoWrETwi9zJ9wnyGPnBpSf7tFdRTcCQBArYGS8QsvrnYS3FensAWp8y9DU3jbNApmMQ9iyGXXAACAwG3xtb",
  "key35": "2f61K2Lw16uZp52wmx2yDzKdkLcvG3EqPW27U26CtzncWSTcR5oLuDhhnXBJH8FvD1tfNSHmzpKnVzmPnvzgHiZi",
  "key36": "2yEL6aiccpXBDeL1V6BUR5BFC1M3WJJCwRHpdxg11G4SZX5aPQWNSTy7HH7ohop3KPrspJxNYkBCyvmwoqQgXMET",
  "key37": "2njX9CMAyjvBNgrWpWWPH22S5qRKLBZmPLEWVwgpYM2BW5V9wJw1JhXYPvo8ftgyeDRE9ZYyZvDJRtdGfw9xVYkf",
  "key38": "5AhtWzte7YmZAnRjG5NVFjwLFa1pLWNADUhCEzDiZ8xPW91YYMHv6zEqj9G6qZz6gukUezYdvmPwuQmDjkvP1wEW",
  "key39": "2rpKK7Z2qmgdZcuEuGjE85C1CWdzAJmTJhvcsr2H5wVBWLJRTRoy9zpan6deZMjMof1uDfZnGzwhJXQWDFEfUZCM",
  "key40": "3b7MPPbVm89zMixwCPAqMNN7UBrrXyGskLUijBN6jHHE9gdUhkKuVZPG8fGW7ekMKVGoPU71pVqQRkQCFRanhCZH",
  "key41": "4qtF1QCpvEZSxV7967fQxWYZXCM4XiadTJVTwGHDdzLJXvbANYMdSTxfwnKKTUsfNPWFbrwK5uxzAqbQi1agBawP",
  "key42": "4NCBCdgv3gN3epkLSPsHcKZkK74WZ4X1XBiy1nDc4dXgWWazJiYZvqQxSPmcCJfWJUjpMNtJDfHfjoDEteCuYsqP",
  "key43": "38QPYUP1aoVa6a7vdtBGXKb8dTz2twYsnqeDUE1ddrMpXHhP7CUjrk7NAmrpVNjeuCobH3XHdX9nB8mVHjTkiag6"
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
