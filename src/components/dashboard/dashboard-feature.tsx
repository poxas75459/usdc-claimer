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
    "5VUVmdV8fKkcdimWnGdTd9rLZnWq4AXZ8AjBJazXPxD9KqDcJPCZ9CYoa5ULsrmUJetQ4WWASFnffP3D6vP52u3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24uFqL8EjhMVvwRgsf7CaApa7hmYCxqFASCqxhZoyXti4cqSuMjdPrQWABZM9CoTMoKWuQxy3d4dkwSGkweyi7S3",
  "key1": "25mYkCtbvGeKHhhxqf3PA2hpzd8ZU9ers3kF68gYegUzrRy5kk2FL3zH4ubpBoCjWB6JZRnXbNLk894MhWnRwN19",
  "key2": "3Uj9p6HkF6fB3YXhQ4jCjss5LbAuMV3yWMvUWoRixTdS4dRHLjyiFzscH6QjgUbYNQY3m1qLydiC354fX9Lz7HHv",
  "key3": "2ZsE5upmd9NaRe4UHzyW3mfKWcCi3D7s6DfCR9jK3RPYiu5ExuGuSDi7UzSCG2ZJAg3eAsD9bQsCjDepJByruY52",
  "key4": "2zuQUzFfJwdUKCRxS5pQ9oZuopcfbB88e9GRYtgtDTGcnR6qEvMsYh32xT7wLZfdueM78xQgVT6PZcNvvLBC1gky",
  "key5": "5bmxiCZEvXHr6UTazQbyg27iusiNkiNcA4Mf8TjN9aFZPNVDyP3DifXzAc6DmVSxK3kN5bBQ2MDBT1tX3q6eLkRt",
  "key6": "38xdcwVTFboRt8GuFJVbVP8tm9uRa6VTt3br8vFY6VWqgnjd1DQmo8GXs5Ndtf1T5SgjWbCtGHLhXNnWpz2UBsqy",
  "key7": "53Wx7YT58DHkYfL2Nt4PeaV5wjE2o1aKbXxQCboGQpegMu9mETaxMmT19TnVPH217cWR3h98EfhuoibhfS55jSCt",
  "key8": "61YUK4AWrzv1Xq8S756YHuPm8GjH6u9ZHiYXRrwDehC19kASfwiM3hfZ78RtwY3E5DKEX2c9oAa4iE818HV8qbK5",
  "key9": "5iugbUVncpeDUkHQBGJYN7nTZdZUbbFTwjowBmwTxAx6bdtM2j8LHHaaLg34j4mD3XVYhJp7JeLqQhfEniqBxWXW",
  "key10": "5esMghtmZXxZyS2LvtqtuUfu6DjYnU2ike6TPspALJgxAgmGvrW8FHTHLNUbijUvknKi7v2jG4uMAR68okxxQ56z",
  "key11": "4pkKsv3nVpKVFjmLuNUhRCa9aP7SLX52vcVc29D8qWPbeHRtr5h1huUveX9QYGJLSi1bcRsTYgcSbgfEuqv6Saih",
  "key12": "mfEGnqH674FT97mfJYxwHjTAfRqjmZ64C4svdq2ypKqrdZpa9ZBHxPNs9U1FqNXNDFWCceCRtyFt5jXUAPveHQ1",
  "key13": "4ARJejBmmpo1s19WMnk8MZjTzzjd3AGZKeLoc8Wc1ErgkcZCYy56S5Xr9iEYCPiccHw4ZGyQPWGX8NQ9rjKh8vPd",
  "key14": "VhrZ3uXzfXgh9L8wLvFK5KaNofmEhhb3TLMMwpBGdj19qZZx8svXYYX4rHpnhEnJCZ8KKTCwNX6MpAc3FhLedKe",
  "key15": "nieu3KyJCypd17BRdJKGv2BKRp57c7VzovWHwG8FSG1EHE3rNVpyQRoetpFMKM4k3B2vKyXRaY2sLzRtScWu5WS",
  "key16": "WYGqSfm1qGfgzM6heVMukoH1vEab4U2caCmrV3W81nw2LFi5JZGtiRhJhdj85cMMoGQK8pdLJFM1W3YDPweiy4j",
  "key17": "3DaECyqLM8MFjYoht7SPS2H6RET7qV1o6hDHNcmoounbpXevHQtCw1d3pWexNnSYeL4aPCeMTyYChvC2TF8xQs9e",
  "key18": "4bSZwde4YAWBwDbyzUjmiygUGz5i4VNybuMGkfkr8yLXVpmYTFFEkvJPmUrySqjHUPf81jbzukUWYRo2Tf5gacCQ",
  "key19": "35GJFuUTakJwNLx25DAwVU2X5RqnrBaT5gfzUo49S7wY5gvDvbGPSdH6BnpR2avCMK2JTCnur3KuGhSReMgfK2cj",
  "key20": "4gp17zqh3RmpFAu9EtKRgZp7nfZRQngG42YCADaw37mgYDcWZQ7mTXPPc8mBTq4v6pxAZVkxnakXTTxj5DV4iLz7",
  "key21": "4LwvByM9iNmSpJm3iAGXE5b5tvzeGdEVZD1p31zeaQcgjtC6LGHBEgFZxW9EH3NBmaLjKEss9HJeZ7CcLgUEXkPh",
  "key22": "4Ue4HkEZ96fBY9bAtXhTVNc9QXnxGYGp8t4XHUb6Wt9QMoseubrSq7XEqBf8pk9Rknvh4maQVMoF27BWBrcG6Ryc",
  "key23": "2RCPefdU5C9dhBd4hvxYznWpTA9kxZk6BF42fimpd5ueYdbQaAN7dprd5d3fVSSD6oVAnUKxUAAiCriHfFUctUMG",
  "key24": "35oeqk2539kFUL3nSwHH7CyLg96HqKC3LhjZyGQd1haocNQ1a2gYXNWsPxgqaJxbeWvUhPn1BvEBbXqFBkqiLdWk",
  "key25": "3BGQ6nZqc12eB4bDx2opUY2GxRPWnbNfn8DqeA5VpN1kgCvCU48EirdjxFC739vhuQLtsQmQzxMjEyMm9uvuKb1v",
  "key26": "3eryuFUwHMjeQB9UGDNbXezvtx3UwzvPwFe7Mc4b6tEWcVm6Cxj2sffJTd7duRzzs1SiqhaeQqFPKyWuG9ieobcH",
  "key27": "hDZt12Pb3v5gssNkUsiWMhC6nFcFge1WwxAhzN77RpZoY4Jgp1ta63hLMnqLhcgcLs1SUKcqSsHw9K1dNuUh811",
  "key28": "5gVrFiQ17PcauWdezadfb2wJWurxfPxxXpJ8aPXPx3o5EDBkKqUtHF3s2VRusPdjZXFJuTbdog78KaD7hoVo8rEy",
  "key29": "4pRoHmajYJNJ273R9dbDCHH72AoUMkwzFKv7G6dLnbSMUH9tBPtxAAqtkchYRNzYTW9X17u3EDM457aDWJH3nJsx",
  "key30": "EggRndX2t4BFUTiVbf5TRhoELhsQK1VS3Uo55vwFvCk3K7fBFyMgtqx2tZVxpnGQpVDDTGoKzt111Liq4fBeUux",
  "key31": "4hcMfqfSB7AKNsFjAsUpLy1U5TMV6CTfF4LUYPKqE7vrp2YCXC1VPjn2UVC495F4RRyPVWnZRNkQzbEzzwerStdS",
  "key32": "e7unmP7e4Ei59VEDdWaZgpTPov6uGgEGqXanaos2DMHd6JDEkf2nNhKxRUbzofZ3oBo8v3frvEQgqerwLnmbH4J",
  "key33": "2hoitcPiXn9sEAZqEZjDwiD5r4pJbigHXjsi5MGLw3BkJCxYqWZEvXG7T1jfLy8JsLsMoyktm9DM4MDfvs61v3CN",
  "key34": "4pUEXYcezXYXuXyRmgQb3C7qeqXapZtp1k9SHgZx2k2U93EEhghfYXWWgF3E4RzidNfbx9MZUR6WN1zzKkdHhU6E",
  "key35": "2o7TemionhV5SYJiMyYxHt5eiuypcUUvF3NMuM8higykCZrbmVMrpqGMDc9uEBPyrsWhRm5ce7nvbKzSntakdZ69",
  "key36": "5szv11CdSrSksfYWcQ7gyFChxzVsvJABidbfGzC9BBeQxnvvAjzBoPXkdQfah8WDJLq6sv94Z3ygrRMQ2geYhz2a",
  "key37": "3VvVkXBq1AotcXncVJ1pA7pP71gbrFFURitJctYydsHcAgpBRMC94RBy4uCzeDP3PNNVpSAvA289sXMqCA2Hr5y3",
  "key38": "4Pu9eFBuvW22RG4NgLXREB9iMTgapL8gdCk5QtA9rTV2qD5qBmdwfimSZf7YjVYWfxaHRHZ439YCKA9JGC74KWeP",
  "key39": "2UWFoEngcYFirLEJFRs5y9QoX7FcJ6bzUUZThHWcaEoVa9ij21awUWwEq7DBQqyVunH85AGcYA1hxHg2NyUPVYgZ",
  "key40": "4tkLomziQzZXkXNSVnqtszii6nGMCddVtvNWJTHWZMFpLRnTSavnNATuDdvj55KhsR6AvykNqMf5wuSmhpnbirXQ",
  "key41": "2xcNPAEoEdy8c3PRa1knHdvQk2LQVHck6VSWccAdyu7sLR3V3W1GwjxdwGaNX9aLQ1XSuH6TPVEPpDzNSDTNM3mv",
  "key42": "942ZzbjKicYP4csph9gTRFcBcC3XMsqdvsNr3v7bZTQQWirfwZjLXDL9qBkZCF9KhxCFB1Q1R8A5rvAygTvnvn7",
  "key43": "2yE8KULCkLEgEig3BExycw8whPpD1oEMs2awkoHFgu1TyrVqU43Xg5y1BXTAFtRmNU7cfpjnnzckudD2mU4Kz2JH",
  "key44": "65FHBGbjoQHTJxaVoQd58gBhJwj7ucrsciWHFxZmBJFiET7p1PJMTjD8ArGkj3DcSLQza93BzGwFyRmFjtRy9wCQ",
  "key45": "56DmBtxT3CWVEGf8ySTvHct4jUUuqbQvY25CYCX3zAiAj3KENMKxFUWsc3GepqZShRFZkAX6hYUXv7LkaMN7A5jo",
  "key46": "5DeiK62AGkRmJ8iQpVVdxu2whjCEzFXpYcVrw7iop5vpwGdzCCPUqVmUSLnNj81kqFisxYXiaGRQHpz7XaFS1Yf5",
  "key47": "4aBfHiaX8ULGNMvrjmbT4DwV3ss2Ho3MqsJMYmmpuJgajuHTNKcL3Wn6mZwZJtZG1xyDznK8n2twxW3E1rH9ZBt9"
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
