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
    "aiEa3fC3dhWqW1t76GvtVSkAdgZHLA24bGhmitXNySooZdM5wQwnD611WWBJ3seAvWKXBHnPciPtJgYq8zbV1CG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eosn22cYpdqZqkitn1kA3w275N5JzTCbqCKPxQwp1s8RRo2NKDBgKVUMRAbC6HfVjPAUAn6k1vUc7weEFAfx6vq",
  "key1": "2pkUMw4TSVHtBUDU12QwRTHDZejJ6CTfDaU4p8VNJF8K7xqBFMLz9fU6HzFu8C7Csvvi66ETU9SyiUJMxxSPJneN",
  "key2": "3DzLE796Pr45Pb5Tcp2F6biYw3vYYTuCCZg3xDLWyBtLkUfCS12P1LLtv1xvRto7oQ8nKrvWVkDMa3LVAimbmrfE",
  "key3": "5LsdmcRowf5HEWfC37CiVzFWpU8i7sKD755wR3fxuNR3ryYzHTxUTnfVExWbk9aciQHsSypJVw1rB821QxK43gew",
  "key4": "3vPm4Ge7rC3PoxsyzTQk1qgxtRGCUBF5M5An4U4Dws7ccsSFvAsz6GiUD1T4WvQwiBzdRbP4ViCgi8EZsHqzfjNe",
  "key5": "36CrepAMXRt5d1pR6rgEQ2QJMNuSVmfTyKC2AAX2vdod7cFE7vsWsazRHkU9tFHTi9y1rmf8bQDuXvZzdH5amHm5",
  "key6": "3EWCE5KYwZQTLapV4UGNjXVCRcJfkrurJbTpv7D3ftagqk8xQ59HeEdPtQrLa95JpiTbNzHp2Z5tRLPueSFYzYzf",
  "key7": "iJgoJnv1nM4q23nEzpb9WZP7cUPECzvxazsKQyh2KdcxMmPuRftsutykRsjaGh7oDGmSnqmfnnzwDZSxdmm1Sxp",
  "key8": "3dHtof8faBsXop6MUWTF6oofsYTN9Lm3DJxoZYtxbZmMYW4sJ8TYz5z53uiP3eymWUCdH4i3cbXbRBDjFz7NWpVZ",
  "key9": "3Mm81frXfgd9aVWV1bCd79T4Pu9Rc4u5AJzRQhNnTbHWuWz4sM4s8Dh8PSs5tW22kbqWbBZvB7sxyTRW1cpNpnuP",
  "key10": "3hffi8PHRtjB3zRemZtM4DgNkViozxht85GGG1f46PRkqdYCrcFb1vN16YZYbVmQmy9SzBAqUdCmRoD7H1vvCU4e",
  "key11": "2BUewYV48MfDJUsAzHMdb653BQVggUQmadGuHjPaBfqhUyU7z1h3AZnF9pWJeR94xAJ2ywXY5q5KnSQxA8CdPxMw",
  "key12": "385KPerjBz6EVMUnjh7z1m66g8Zb8Eknd6993oUCCafqFLedtsUYVMFz7WELyXezoGaETGE6DVV1ALp4qPmCbT3S",
  "key13": "3CDyPnz8BwxUr3qg3ifTmMSYGnDmM2dwgjoLEeSJcQHJ2jxsxmCe3TGRVcCmUCzyzNgMtUA6gSa6z8RdCUKQ8YPm",
  "key14": "4P49YqbXGFPzpQ3RTx2HBsoNxzWZhiL5RXjpr1UjUBKWSwRuDxNcbNXZe7MEK7yFgFnoi1Ky6AQfdri5PvcRZENU",
  "key15": "4KRNSFoqKZdQwFH9wEnFcEFRxE319jDSX9V6CEtFFB5VoTGUwTKDprHiAc35sEmUczfMYYzHuUH8XTvAZM2VwQ8q",
  "key16": "5MbP9wQfmAmpP2YLBQa3sS66eqEwHxNyfhtpySvbQYmU9Xri78Sh4npDuLAfeLwiKFSzqwoCbUUrQgCAwTURCwHV",
  "key17": "4xDDefyz6d2wde9uZpTRCMAgjVeU7TZmpcXU2QuGZbCeEQwu36NHaFhRGKU6Gqyyh3sS77NwXrsXoL99ABVh2aTm",
  "key18": "G5p431BkLCatw7WTRV3yGN3SngBinhviGKegmrLv8GDt31nEvLNc1egzyzXLwQVyZtZzdhzc3KTwcAhzmSrTw8E",
  "key19": "KyqGqdur8YWWyLF1a4b5RgmnpbBXvAtJPsUyG6VQPhGK7bdPFrNgK9mTT3LScRSXZfX5Y2WPEv5TewUKeWjwq2c",
  "key20": "447g4KQQFhF61zCyra5FufN5y5CjtFZ1cgR9Tpjm9oecDWLgsxGaEFAnT693rXhmirwCYnb3yNs6v95ZrAoxLukc",
  "key21": "3HsDKDyXJTx5XN3LKSs8thF4CQZhondXBHYabf7PxrNy1YJribJgTMyhnMhPcraGrfKHmiheP9Z4AdDfLyJxXbDa",
  "key22": "4scYtYv592FAwhZASdMZ9VC5qwFcKXGV3LfpGgEPxSMwbeoKdZ8ZnTg8F53uQuR1kNzMUs6HhQ7aDLHAgNUNEkDF",
  "key23": "2eDpEmzj1nvzeNcbv8G3vxCeLVzisQU6tEda6sQRHDsx9NDiBfXaNqyG6B8vkyNt8r5wUY7oKLfjcJx2amu1wtq5",
  "key24": "S5xDngq4g517MLrnBiU6NejTRAuCGemU3Wk65u75tTjCrb21hub4DVTCdYHPSDA2h3RrWUsUbdPLSio5tgyCt1f",
  "key25": "4ReoGfUbYXTGCKe8oetzSARrZixyX3AXRcR5pPDn7P6M6Zy54kiyPUcPdVbUGQretbe6UXWTP7Z7b9vYj8DyV6k8",
  "key26": "4pR3n9Y6epp2b2iL8tBMKi8Yf9BdP4pjNgZXsTuStNzKhUEjuUpshsDz3kkegzevUfBW6D2Hz4RM1SvF4mqFUAq8",
  "key27": "JKS7AkWAjuePfuzE2sNm9PpdEKs3FbdupkeZhRhcmSq4XeJFYbSj6jmqaMvogVNR6StR3TpvE4nMN6hzmv3z8ym",
  "key28": "NSPZjPEjDywaMcbgLLDo3jWymieua8djZd58TMZT4tm4seXaDv9i9nDHXDuDGKzb3hq48W5XeGMW1yeyxN8qJ2t",
  "key29": "3xZd9Ji5Wovn8htkqv8szG4FH6xmmhJyDi4mncYbwcB9y7HK8nsQgpTiY7PJqbwMXW5SwFca1GHTi8oL6wFrDgjt",
  "key30": "3dpiKG7Y6wsRsCuurxSsj38Trk4ZKvJZTRXEYWueGQADuS8PDqvoFSPAZdvWZHgeK7EAecHc6qHsYFyJ281zScnU",
  "key31": "3Mhpzsb1GBsSm63NB51s3HBw5DJ4D3evhdLDkHyf1mf4jcykHe8WPRVviAAhkHKeEvtzcJyJ1bPaHjX8zxodPGt5",
  "key32": "3JWCaZ6M6zwcpLm1doAtzjasbYaGkNagLsAbrcgzRDiV7PunmCCXeDxqJfXc2N4J9uosTBqyZZ5ttgx8uqf42AvX",
  "key33": "4bJxFQEHF1qZUv7rq4tuQiue8cVtVudsF8ePnMFeZTLY277Yrw2ikkHtpHJBhYop3tPLmKZMcgLAYA9AaxuByEBv",
  "key34": "29cvug3BbYFpHQjyZAEW2LH77KS7WrDQ8LLGEFq3qaQBhDiNe33iWhj6Dcz22dk8hmNwN8nz5QwZqrvu7fXQVLK2",
  "key35": "3UQfVJhpFdjV3yGWQWZw3FX2gYxEdYczAwXjtenHJLbRwB3KBXrizxXJ3yY663BJUcm1N8wd2QgWDQdAekCRAado",
  "key36": "4Co9tHvbZJNpHmhZ1ci1WMBCoPtu1f3uHBWafDq3pWnsBC7wPSrJgKcMeyfV5Jr4zHkXq5pzrS2xuDSNVL2MXjrf",
  "key37": "48K1a5TiKSHUKN49ZTUb7i6H8LQdgNad3kQrv35nMPoJB2kHKU71jm27nARTL2gm1LvZEc7DRrheZmqsR5WCtykZ",
  "key38": "5kjmKyFryMaqHVYa8ckGgSjY4aKZp41NTw3tjtHb9fDL2GCQxdwz5P1Mi1vuzaWPzEobFQgxhGeih2azCfnCtLxZ",
  "key39": "4bUwwGKtBCE72ji7oWxGn3BKFjDvasp3Ej8DxNh8zpuWSjLvhT3fnhC3R2BsVyhWbv8PLfYKG7sFaNeDrAxbsFtr",
  "key40": "5FQWZGQH7rT3E2sdxnmMUDahcnLSKM92AtWzZFx9tRPtisoyvPAHBUnXV6G6rsyct5WJnvUCv2v3JnyTjX3dyKZg",
  "key41": "13jA7TCJfVM2KAyNh9Hbegv5XTaWb8hcKGNGCxw9U2Lr1PrKd8TasyotDoQhfHN7wCgnB93RtcU55bRPQhoS8vT",
  "key42": "AA7rkLN1hjwKVLSiDykFsdbwUbsKcAp66MD4aPfZjLhxCunpGiwLXwt6YbahU42cGhXUYySEFJknmt5wsfnWGXD",
  "key43": "5XePjrWKBMR9TLGGPeffBGTmEF8aF9SDHYZRreAaNxUbqnkFppoZxkLZt9NdpVbZ6MgsTDLUZUxGKw8Cj9jydNCN",
  "key44": "b3phiMDJKJs7AuFcyvLLqH4eRfbJZDfxEkLBFfnDtJmHpHVFMCnucZo6HfLBx6KzQa2kJR6LSiRbmGhYr3oaCeM",
  "key45": "4Pmr8bWUi7xvoon1NbXpy9M7hNzHUTN4aCYYmm5xCnMie2W4PEjsrQxBJyWyEAeZYw5TAps4nqNPLhZLP6QvfQAQ",
  "key46": "Kq9sDHYCdJyFvztQZYqMM8qCVEuZc6HtLKegZqSszDwZ1MbipyEh49VBhuP69tY71KjSwvFbmMXGwyWQD7357ch",
  "key47": "5HFQbqK1nu1JJkQ96JzJkCNaLPHXw5cQtT2Nzc2SiC4gkGwQYkcnuL4nZVHshAjcuETs6WK7A8fLgTsC6EWrzyVF",
  "key48": "2E84NKq5RVivJyDpLxMVPULvjK5SHyX1LXiaT48ZfriUMh1JfwDnnFNYAAEwihxU8qgt7UNYQiHuYKpZzvmVr8q5",
  "key49": "5TCkbNY7UuH2DxcXqtnTJhCHv7R2rzTTaHqEcNoP6MNZ8nC9FLyZmH73YcruRCzke5oUwzaoMmxJQjnEnAUE6hCj"
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
