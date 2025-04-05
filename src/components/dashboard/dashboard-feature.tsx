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
    "5MTnp69Z87ZVHQ8dANFbbtVodk8maSKBqXawwpXvJ458Pnn8bFQARLG7kn4R6jXtDdhBm26mYp9PYusPKQaBhFCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qx1u7tH5WZ6GPTGaAhgWYsw56FkCAJh36s7jncZbi27xWA7kfDL1GcnqW2BH1vUmhzcQ1GhT9ewNqbJLgms6ngF",
  "key1": "2eJDPKs1aHkfoJbThy7XahXZ5acAX56Yw7BEdDrMTozNoMS9qnththyKnaPxB3DbGAjNMz7jzFWojDk8fJjQXG2S",
  "key2": "3bpVM4mAqjnqp9hca8bsteqA9fM42ieWBZTghaYstLvPQzkdnJSpwU5TqF5Pa7G2Gh6Qc9kRYHHsGLoZGx4hMyPH",
  "key3": "2Bvz2HUbNCDtsSbwpkDLz6DstWLDNUKD3Nsu8xgf5JpKcsmzUtyu3i4UzC3okFqLzSNug75GHMDpPdxZtsacWWiw",
  "key4": "4UEvtDLmLoJ2BMj8LzsBbbuBCrnVaFUewmFrQtpmh9adDRbMQQeKjnEWKESNxNAMjEpaWtNYeeTdB5o91MV4VuUE",
  "key5": "KEmxXnnokk2idUp9QwjSusa36dvFv7DkZjmpMW9KH43gNeLSg1cCfQm1BJyaYsZEv25q8TRydwR5KZFuWaXGMjy",
  "key6": "WwNUgrTN43LQZNRajWc3gUbmtTEhdJfNmWE8h9rznuLKhtH8GZK18oQrbbJN3D9eJbZ7QF2ecA47PowUf7Jk71c",
  "key7": "3L2yVv9HGtz5oiEK7EfbspV6QwHD7yW8QTurrWTbfUCy9aWqH39xiij7DFGkYeb1JKfntBejQdhuM29EVFYWjcoZ",
  "key8": "YrMZe2Xs9jgU5Zhvxdcru5utPX7wBYboHVEFhsKPfFC76HdS2nhhmyHEgqaDrTE5Fh8PjCzSYTX1JcUdLRpsXn8",
  "key9": "63dE6TTmCfVJK5qYFr2NziTWGpmzn57migqBJkJJGpGTTuLXiB4xDNmgpw3F934zJ6CsSMTyntM4YVFL625trViK",
  "key10": "53vdjaxKfXsUnQsnUV8eztweFmSaZaaBexCDwSy9KJsfRETsPNAgQ9WWXEHaw4ttzi7VX7htUptqdYUcAn9QaK1a",
  "key11": "ZzXbBE5WMGsn9S19KQsXBkiC7YqyukokbnU13G3Sd9xJyGRTfbSFtUoU5CAED7NABpMF4kG7kGVRBp9oR8F4kH2",
  "key12": "4jRtWBvXK56o1jDimdKTdJ6rDkvaTk24m2d8usXa8EmJT3pw1be97TShap9SYnU31dtPSTb5WyVAxr3dPdQt8Uos",
  "key13": "2qkHdm8ppxHwxVV8Sm1Z8zue6ArjBGE1DxiYWV9m78jjBFpoLkrBT4aEsBMU82ycFwuh5WZeyZ6hfEs4XXGc52Fx",
  "key14": "63Vriq7tVoD9a4JBieu3eYhVW4pfh76JSJsNkkgj7A1s1EeUeiTHVSbh7ezBKjh6AK52ty89495c2xgjT6XDYm1Y",
  "key15": "2LMLyABZH4ewZB7gnsSyuMTuUVQuVQJvnpHUVhw4Vi7Eu73tw2MQvFtNSmHFgxUovotBCsP2bDUAXyZYUc6QbAAm",
  "key16": "oeW1sUQsiPMfv6MwQxdpXaAsUZoeixmXFMCZeFsZ4CE3f2S2NTq9VCVyjZERfNUWeFnvvpbVRPY3QDMGof2BDGF",
  "key17": "33vc1M2exjYwThor4UPggGxQxKye7s8eHhavFEGRNaSdusK7f9Cq3cWu72xV18M6S6yPq38vMGP6QVXSQdai27Mh",
  "key18": "jYGeJGQzBV9j2eV5evXCUu9THdSMr5rKW9R7E6WKzidGQZSHzMoYzUqyHtZqqVXzoTP3VtxCPzj5WQRLkezM7cJ",
  "key19": "2uJ4sBdN9RmhGemmH5Dwtm1cSFY72PDZpeZ8x1h7F5sEKJKxDwnwahjnhGT8548CNUfNpu7XF6DacEjxNz3WBhTt",
  "key20": "3f1GYN8ox9AQNthrD95pNZE5MnFg7q6JpQ8LHqQMHw238pGdUVGms7MtE3ewgpMGYNGHuV7uQJ6AGjRpDCVivbrY",
  "key21": "22MxA3ot22dCppkzQzyNCsfz7mASSMKFB6ium7xCcBN1BSpKXUXRFgUTxVAQuMJaFG5yPMFKNLnUmfMd4T5ofJsY",
  "key22": "3QapGXpNB2ndWwuRP7qh1JuttGU2B6mZwvb1qHSX5rNpTRHw8sNHakMAaFsmViZ7chiS4CTfZdfjVBVyQDJANZGU",
  "key23": "4Aeixyz5mc5fRPeP25iesE9mh6HyBhinHP214ryQNUbEHaJcbEkJySSivpJbHUHjZsJLgS9NkQLCx1vamez7qTeA",
  "key24": "2yXozT72yJjtD1HBN6XmWrWyArEraqUeyL5qekeQEXYSWjP2jHW79TUYtXh2ASuFuKMMMR8fkwMkP2n3Rfz9DTnE",
  "key25": "24XvX989rP6maD4Z67gTQQowk2oUEmv5pkaPng4ZWCs4XSVZev8w1fKfXta9Pdh52ggRBLDDUJpTBUE46p6rv8Ca",
  "key26": "5L3e1YjJtNSZMnCUzesYGeCgPHtLp16rb9rpLXn49g8W3FmuPxp7p5yiDJSUJhMrih7roe5KUAMu446An5cBYMDT",
  "key27": "2tyhDHfg6bCe8HBX3aGy9wjTKovAkw1ciUeBVvwHRY1sTbwj1C5QNx19X2waKTJtz6Rbhr9VuwPSJgWDLVobdZaT",
  "key28": "3jzSsJyychs9TNCLmqg2XfwkuPHnFhFsfpEBRw1hmLYfm9mTXyyXHZvD6Fe1C7qih5tsFTD4jjowFkGgwArZJvY9",
  "key29": "EsiG9WLhuWMgvEtJi9DeSLsG3viG23VLRuEgK6eLz31fNhixYjjj2HCbJFXm5ENqGsDQ9mdRhyy3oBrj8Fpt7eB",
  "key30": "4YnGUHYLkBVT7fwmCEqW8vxq7pw7ydZjbG5zenVy9QXypjKsgqG2u6Pj6825DY2WY8BDhLUctC4aW6mQr4tiRgXw",
  "key31": "2UUKEtL8erhgHwjfkwJmgD7nxcK18CPBc457L4mGfWJnyiSB1HgcvNtzFMQYoER331L1X4LDnjmfJeX8jP2jxK8m",
  "key32": "2SMUNgoxgTsKYGGWnN65h4ALh9THDcTrfGS5n9T2sbu9s5155218uFvpaifLj7dHziiy5EMhGTA2rDbiNpy93Buw",
  "key33": "2e1UAZnRnd7sa25cSSgA5i4F9MPRsHzMEkuzkGVht2RyUTX1JovSxLTPDzDExVoHgLUKadz6aKYLigm5yr9iLjJp",
  "key34": "5Ys5kXX9xC1im6ov9e5wvnpSV3H36TC9eYfS1HHCcQqo6BNgC2JnTMpG6pq8ZUPUwhZFUGrHmht9dbGhEwEJPrFA",
  "key35": "UiRCD8G4jX9ZWucLW9paVonv555ZMVjGa7DVUhBaFeCVhdxs32yxFVxHGbQLyaS6d5f4euXQqv2g9XdyVxEHjAc",
  "key36": "UgoG4MPAcma4sTXmqo5TqQvuGRJxdnDZohS4XxyQWUv97KQ65X221zoa9d3zgh9JGrnBGSLoJpe2ytKHbU3ZK6k",
  "key37": "4KqseWvpGdN1tvWzKfNUdgXVpMnPfpwA64dWAr6BqaMvrqenDVMWKVoMKGjSQ5rGiqXatxMybyYCnTmz3AUiZ5JV"
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
