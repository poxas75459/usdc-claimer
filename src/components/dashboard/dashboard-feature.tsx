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
    "5BhRpq4obLA1ZGNp9gykr1V5V82V4tU2oJtfFvotzHAsY6tCX76uChiXg1pFgMJ7MSLjd9KPGtam54HGTqqqUgBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxNrwRf5ZD4K92NRSMok6h8waNpsnJv9eZJ95XhMWeTayTUh7Fs5Gso2gdxQAmGZEfRhRhQZpeQo1Q8t3DtUw1N",
  "key1": "nMpEkB2zuDQhmqXuz4jkTLFB1qrocaQjuAsHduiu4yp5NfnVSxuqr6Letbzo1dAmiwUj8SSWuLqFGZdH6x6LWCA",
  "key2": "2Z17FnzuQP4tJwjBnid2aTZmcq2WhNmtbRRW7pqui6mJpQ8wdGhUtEvYYX8xowzs1PrXMC581vzPktUiirs5tGVJ",
  "key3": "4YaeohYByxP7ALaPwkTQeFoVJKm2rGRU5FoUk3hgUmnL265x1YouE2WSFsuL2cWR6QMgaUSx18U8c6y6kB11s9TB",
  "key4": "3M2mp1aq51WGgTfZZP5oru9JWGufBZqwRzzrvx84MT8KTfCedu4sNAWr7j5rJesYsXjfZhEFMq23FfRuv9tExZ7A",
  "key5": "hZWY4Va55gpboVZewEvTGsjpa53axfC8mMx2sJ2FmXKt5rYL6tGcTj4cePP3Y64NdD2rZQrFicb9qZY33RtP1xP",
  "key6": "4A4cp3tP9Msun8uVoWLF2kAgA9UeBKrv7hYt9tccbUfJNbTwin2TPfSRwsqxb6XNzeBQkRJKbCPV4SrZY2ANcNFk",
  "key7": "2BgHqeEer93xYLuYhFXa3NyDxJEtZe8WMGV8Uz4sf39emhg9FwdFdaKkX9UKbvZ3jk9kTUc2xmk3hWqKgV2rQ36R",
  "key8": "2eqeuSDTHXGU2FFi4sKgB7VLSAMrj27uRq26LyLmcKmMPwxg5rXrSxt9DYrHuiuKcv3BoidTpoRHA1qaGiaab9iR",
  "key9": "59hGWJ8v6HUrS7xdreCmZbWCMQcgqmpQdcQRmDVvL6jGJuirvyKvyhdYRLX4wk6hrx12YRhvJFMt6vtNgsM2upDY",
  "key10": "4N7wB4BpAb4eAmNv7XgQy55NMk7Dbq2D2U3Le9pY5sraVEPW3WSukt3ZhmnceZC9nMCLspogFbzAMDRrfCYmh3iX",
  "key11": "5ABMbF8MfeZNRJn9KCo72XVCXAvTVJUZTfUrrudkePwmyjojVvG5SLDVqa4g2dbkdGHvbijkgT5QxjPb6AvPRLdS",
  "key12": "CSyjuuk4K6UmGRnDt8CCu4Vyoopoy4yPJaMoxNVzB5PEnBSDLWtKJGVKxFCauPb81rpGrF1kFX9gnUp1tJ7Dvnd",
  "key13": "26NMHQW73xhN9VQib9WRnEzDMZtsvhDS4XSAhzeyBe3topAuHqRBcJLAPZaWLfyaNEbV7UB26PtvkLxNgJFnchAu",
  "key14": "3rm3gjeE2tQ8mTZxhfW5v9ZAAAjzE3xgy2DbJwVaKze2zM1RyPnnVu1u6EgKuBCNzAnhroV2Y3TimqG9gzSosrHi",
  "key15": "SzmB1pCe1aKfV1rAPrhaej4ijF8hRifHvn3VbKZJxborgey4b3D9JTA2ebuGAbB2z3VyHkN3nwySMjJfGaM4BEp",
  "key16": "izZREwQfRv4YVAabzhUaizszsKj8NTCs2DSwwmiGG3p3NMsZSb3DeXdxdshepMovsBPN1aC5FUcxEzpHoQZCPmS",
  "key17": "3BzBJexUvoSE3Y3Pt68JzFhn8uYMHpoYBPnKjY6k2q1awYcBkR7ARqhUD9ZVv1AYWk8AZnWs5cJez7FwVBrz5Lgp",
  "key18": "4xa43gPF6RMcffhfnorge7Fa4tPCqHt3VXpEcLEzt35tNRqDk5WEgVG8cWU4ewTUzNR5ekVPBqSNNnnwEWi86cm8",
  "key19": "2GZjdSSkY3CXiyf7HMqzvqn5oy86uVovPuV4LCsiFgAdgSPHkjhYvFaA3zykwLUCmnNXq8beNy8vLFV4W6D4Uanw",
  "key20": "5n4eTz1h7Wnd9pt5CJ4L4n5GzUSkbDsgm9bZbxqsnjSTAtktZxgWvHhRdefcG21RoGHkTUZEQUAyPMWyMihF64Pk",
  "key21": "2MuTTYamhG7uRwCkQRZyfU6tLqJchnCLiXS6nwJSXNCuiU8VnYZpJYu1X4fuGkUbKxAexYPq1C4B4Ggdi2YqFTPK",
  "key22": "5iLHqLE62pB36NVRMbbyoBfEho5ep91zQZBeVCf2MkUZnkSRR5Bvk1hYNzhd96wQgNv1z1Nnifu4i2oQzGMCcpF6",
  "key23": "3be3qWvfUTeFrJ4PRiQwF73MtDUmwAB8EEZXQKwPWZJRBr3YsHdwE2VtMiRDgs6fzYuZFPdZCXWLhBgmduZBbbRD",
  "key24": "5isTHcatpALJLjL4yJ52AuBMEQxcAnvBYM5zqtK5wAJPGqFT2ACmE4qe6Ydwdmy5CE733w9y9ghMUCWFqisKiUgC",
  "key25": "45MfdxUjFtAwtF7Bv3Zecq7U7HYKZRsQGKiDdYD5d7x37bgA4uyLVAFxk7kJsqW5E2CT7ggUh3JVzEzgJ5HvArJk",
  "key26": "5jeVyirnLDWP1Q7mzhsGczj9m2k1n1iotB9TB5bcnz46kcVdeHDpfygknfPv2nPKMBACVFDi1QGfzuvKCh3GGVPs",
  "key27": "2Br4Z9ZEbxb6V8q66Eck5vVpLb4EjpwKjHcdmgsXbb3VhgYwfxvaUD8t24m5bphkvgntaybnf1fdnttcPW1fTSB6",
  "key28": "4fqxHtFiX7CtoyJA85vqpBJ1WFHPZvFDE7P1EJeDUxtwc36YxFdfRrNRB6YhFXEfe22X4srBmKYJFdMPvduuagF6",
  "key29": "4hx8Uu6PPFFTJCC4sPHbyej4zrTtYe2p3cCf22Z8wyKoawHqaeZZGvhw8eQUKSYxRwWbL9NmPvLpSWw1rRj5qxn2",
  "key30": "29bAvQkByhakzW4RqnUNi3hz9rsmxTuHxVG4KtpGtgqZRxfwMwM9GhxHSR7hwJdRL7teRRG1cxZCt8iv9qsvgRrJ",
  "key31": "uWfw54PsuX4RMFbRfTDJk3xtRWHaA9nptTHXSTRGbEDfidtEjYSVMwz4q3c9eLjaHnDXrTxMSrsy8pUQrDYkLXz",
  "key32": "5JcFvz8C2hMHdChWScLKxbwUbxaRGyzuLFdKA16utn7qRtox3ENGsEvT6s43vsXnSYMSXFnm2YCHsAZXccetd8ZM",
  "key33": "UKcmzKonXJ67jHudTpgD7CxiDrpupcq1ebRVdg7HdemaiRViiLXsAWJVQPbEHrrecHuP2mhyEjDurxF4KX2adGy",
  "key34": "2voNfkhZiaTw6fyfCy9GVfrtbbfk4BdCpYVg3QSqarFVFd17JCCYomZZfSvGoKkfRFCniZrPybbQiNyBDADer3re",
  "key35": "3YFYLMm2orr1T4H7BQ4ZPzjgxpMK3guMdQD7kgkRzUvRXGkznW5KVT6THMzny4jMpj5GSE6TFCDyEkDs8qeRfztf",
  "key36": "ZFg6BTGRHMZz3cCzVHJR289QBT3Zq25Mj7do2FjVyTpjSF2JMjfaiSbNmFs8BF6tG5iAgCRe7aotoJpDF3gaiFK",
  "key37": "32ZXiasoDCH4wuT5HZVbhdCtKGZ6DLGUmMhE36yzk56AdnEL6mBjrvw6561CTwfQmKyJ1KhrsJyU5eoHtWvcvFGz",
  "key38": "4xoWFMcHpVz26ECGLMSqrmepczdydT6SLttb4pb3GPBDo9qs1E2aiufAbpSy5RNwYXzqQPkzhwL23PBRC66VYZNi",
  "key39": "28SmvUpVUUVArSRtoasYTRzLuVXY81KJQLtrQfSn6Jv4GbPbpky2zzERvcBBNHgc6Gjs28QMXqDsbxrzjqJUnb4m",
  "key40": "4wRxLNwBqgiLsGp2k9bnqXZXekvQ19MfHK8yFFqpfRX6oVMYPfsH5K16PK87yU1yqYkbgY8QnyMVRHAcGqZAMS1h",
  "key41": "5mhmh1o47oGaMUKCfwp8vSRM2qWXJNen2axq6Z4JJrSViwEVspCDeoGXD7sTiF6M8zJDrkn6N6odmcAqjQF6ZdrE",
  "key42": "2kYyNEQTct38VRkLJpDqRT1FuU4VyyY1c2M19wbPEPZiy6RKrBrJLUiYNZYi8hn5S32LnwRggEwo2ZJ4kkbsUWFa",
  "key43": "stzhMesphj8USuaJYfriENcE684fU3kaevHjX7ZoAksEtsD1ProBzfrsZTpvHEmYu78wyXwHZPd91cHRWcUVuQV",
  "key44": "47aLpR9iABiDLYZZ32jCMEmQNat5cKLCHWWXcBL7aStgph5f9CDE399FArteibEJE3vhjGoEnQh6bMq5JxDf7a87",
  "key45": "5Qm6E9ppthRMgccniWZAdNYzsxdueAnZEiLNkwEquvaUq4ny4pSscuDJMFtUkLJDS2PBWDrmXyTRyxbFEvG6cvNB",
  "key46": "2VXMU8QaRpuFsoU35D8onYxFYE1cfAbxoUKRTXZ9n8Uj8dqgJz6J1QArEtSwQV7GzyWUj2PeEwrXhiBtR68Lizxn",
  "key47": "5GXFY6WVJ8A3Y5feesiQhyCAdpUnVngPQckChSvHzWXBp8cob9gm5aBM4RS6nigis4bmq9QUrnN4Qjm1ywTMdQKN",
  "key48": "4YLMpq8sg3tbTk1UDv6qfb6gshS8VHY1aR7zvx6upQEKeYwB7qsGbtwbAGVibrjAarbkFdXcxnJFo33vwECzSR9r"
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
