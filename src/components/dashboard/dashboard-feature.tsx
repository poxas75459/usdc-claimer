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
    "JUmLCnJEXo3PupcMZ9bW8eEYKRcHAjDedabDPC8GA3tx1CQRDw6FDxc9WMxzNThknFDA5HwXKG7KCGU22FsZsTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVpVckPjVi281nt3MrBdEZ7QfxwQTejLgtJHwfcnywVDDZnZaZu7hpnLxuELk4F1xTeyqgpnwaTkBYSPLcoQmnA",
  "key1": "236baVHtNGDn7H2Btp9dpqp8pWQmTpkf56vDqndjs2xf41sR8Kei5WNh8RxRTzta9Zeo6NCFXKp94aBbhBLySc9G",
  "key2": "2DGR6JByVsscCG98DGAHNx1tALPsU3VrrxegaKVgw7A8154djp4K4uVHHc8266eubBQQHUptactE7md4bHiepjWu",
  "key3": "TyHtymaPeKUxRhhdNbuTtHUhAujBF6AKJm6JTXKXkrjn3Y8V51guQT7o8TjGpWGygG7GerzLBP7Dst1yFadtV1Y",
  "key4": "2DMSRHKcG9zT6ymNHaRJ6N7HqHoxQzXiSkQhs99151bYjgRMWxac42GEFxZLtVHdtec787BkJXm8GZRzeuUhWRqW",
  "key5": "4vGtPV18nz6eixNorzFPc1q23JmxD8niXTBhz1qVncs4dJFv3MA7xepo3gtrZv4dviVSpNx2ar2JwyaYCxcMbF1d",
  "key6": "3H9oXi6nZwX2mVHKu7RV36BwvrkDRyTcRcheCTRra8pT76U56PRSqMsRoC2kf5jK33ENuZyXCYqkmEgHtYN3Hcau",
  "key7": "2FHeHegLtvrdrNJyEJFein4STR3EGdnqHwi4VNMdBagpAVoEmZMrCogdRQUnDVruivbBT2XRGHMLNfXn57guSqAu",
  "key8": "kZgNvESeLUNfAJBuFxMrogzNw47tomoqc244BWVQ7RyEVgfW2PTFuQwBFfTmkFvkj7vfZqp45zNKbtVHaFHuvom",
  "key9": "4YDvtnSzCYWNU1xkeGeB8Sukkyxh9RQh6JFuwKMNowgNi6zHcxgFZcMfV6n7cRHUfXxGtAvk92U3LtiCFLWhC5fV",
  "key10": "4goG5CgGRyAqHgdd39SYTg33qN3bTtVfUSwFKexnrSaqUqjDZ9aYJU5DeXrmZLw7wWdY8sYkNAyNDjxNhBFN9vsa",
  "key11": "56YKY4Bvs38taYjHSA4Tz9AsXoiJbuc8HScvSMFchCdkRtv9ppnzcMtxT717CsdS4Gx1yDHVses8DwYLiXhAqRUJ",
  "key12": "oDrA3rt8WF8kQxVjZZuSz5VRGdJytr3Nzxx5SuHWxe26HpBGDoiUa1P3ZNP3WgdD9KQbQRguVJETMK9wTLAvadd",
  "key13": "4NLUogKPgDKgR29Z7JcumATF5eS7PpDaJQnNQVz6BakB1abJ6nLFFEnVvTxeurEBymS4SZLjLpXPvDD3gji1iZAD",
  "key14": "52Tdzhh9AykSkomaYSk6Zq9tXfP1F82Gj8QMqkqbXcFwAJSMRsWNcS49t1BjNigz2Mbm3zyD7835ATAy3MBrMrMz",
  "key15": "fmbMbYrKuNuG8Lk8tY5cTbb6oqRSe85HXzYS8Pny9vgxN5Zr97cwspUxLpQJ9anvvnCHjqgt5py4V7xdeAep6Up",
  "key16": "5NdRRFqeGXvPB3Wb3ekiJfRt7dWWpirGFmNkviNXfcHumrcrBeQaTxp7R51yfk3f794cTQYMJBL6Y7KCRqnMhALN",
  "key17": "4VKrUYXymNrzDx19SYuys1AYAQFpPjP89rqU3EPRcqNakaFs98CoJw2A58Pg1B77BumpikwRHPQsFgk7ekb47JG3",
  "key18": "5D1V9SCW5yhaBqPvUe6NGEXTGdEhjEskSnuzsnW26goNePRq2kycnyUsLkm7vtgiYdxeTdYGuUmYHz88TTFRwNNh",
  "key19": "UzhGsv8MaCY2g819AZe41rWxZCnE9BGPy1DVJ7BW1h7nN8t66diViZk1Qwm2j5s2oxgHQ2dhdHuPBeqxQd2JtnZ",
  "key20": "5d64JDNiUPL6bevkPsT1uX84nuczuSsXYrNnnYgvQJSuKBdo36LM1Y6Hf78jevuDm2rssTAtts4E5Nw2e84X9vuL",
  "key21": "4HTsUN4vA7QhnaPFbGQHnc9twJQrRYXq7k3mV7T17yrHmi5zSmfGEzegc45672U9FRAwabK93kH21XZiEsZPzSwd",
  "key22": "5mQ78XLX9Zd2mPs2baE98zXJus87ZwadqvwKeQfnMPcQKmJaxpW6XGQ4hJraMf2gF9W7iVccQFrkvUhA6ZDgRsJC",
  "key23": "MMoJ4ma5Srgp2MRQN4txTbeQcmqNv41FAKpn7stzZNDyPp2xdUkQwiLADCaCmmjSpGG3xgkuMvjzbS7vU5SNiNX",
  "key24": "qYz7nwjcZiugPUruA5VAKHaiUgVqqyxzT82LhifM6GcWaaWSVXHUsKnX8tjRdvUyNjNZ9E45RjLhwtYjvadKeQV",
  "key25": "5wLc86yBaN6M7yuE79asBZ7XAxAYXR2QhSQi5BhMKE5eJnG756TfQNc3i4hJ8QiEUCowWFz91vTvgg3iK75qppAR",
  "key26": "9X2e61Gax6qiyeuyTiFWMtcHPDY6AavEiYrUAwng3dWuuxV2B361LkfwJHgDZmsj5fphCRT4oHKKo1KTjjC8QEM",
  "key27": "3P3VmmkMwbrJz4Zk8ZeNTbQVau8Tm6w6SGhL8Y6rAkLb6SpBR2CY7hz5s3wGYmVwf1K6c4GKpyLe6Scx82eVDcb9",
  "key28": "5phwTMyVpLhPHE8NHTvHATioSLLzyE7ytAtJvKKwZSs1oeb44Y2PAvj9oZFMZuAH6BE4dNEeR25fpL543mXqyan",
  "key29": "4qHHEYdeSQeHrUKiuBjMuymQm4mao3eYmCzPqZXvKCZBZWANCR1i5ieXLKYGCyevzj755AWmoBn4dRX4WRSa3cNt",
  "key30": "2vBEC51tdCnLabFS5ZRkTSWDYjsrc8W5AmrqZt8KFV5s3xEvjLuxuGvicKntymcpLGmJHe3bmJxNRwRYXEVq228j",
  "key31": "3cRR7vZz5F3Gqj8SsQtQR94TcYe7h2cetV6o66odDdRN8QBbhKijBEwR5zEJKx2CP8gwfbUfZrNKSTbN54LuvMTU",
  "key32": "4J1JBURSXtjNrUC4pV8T84deW86iR66uKX3BaifzYyqzYYAFV4a5BnvM15B4kDtRURHsSeThVjdXVofcP9SZ77wN",
  "key33": "5LMhyAebq8oenTFguqECxwtBNDKgYuLcd4aP3abiKKqj1SHZksQYDXXnp18hiHjoUEJ9CKyL5urKwBy9UhpRzem2",
  "key34": "3ZjvicQPi8T4LP2RSoSEbqrhKPtJEu4DHbWpRV73mvy1rnQS2SvZW9sCRmu7bMmEBH9bhuv3kkTZPugqyFoqb1AE",
  "key35": "4PBi9XodsjQDtmD9Gwjy4dPC2Xsnc4S54v2EQ7Vt2727wswJwk8HyR2mfy7jNJWX3aPgxobJSfiDkzGyzfe8YseG",
  "key36": "3gg6Uz7mSS3A7E6gKifi5Cb9MKaJE1gFPJHvYzKMVC1ftKEaQhEFdxeUgpGtkcaA8xfMq5LJ3XvmoAE61cJ5CB1F",
  "key37": "2ShmeSNrocakELCBLBsz9awhNqDGYmVtQCkC7jbLMBGLMMd2Hh9rP8ZpyRnewnqncqqbxuBcDjiDvSkyVSAzydTw",
  "key38": "2gwsVVhsh9aZ8pbqQyMyFxUji6dxXETXAeF11FDmZdxGWtGMTCZMXReM4MZJX4Fj8j7c9EMbx3bfgvatPLaT6Cr3",
  "key39": "5KTd69NdJ9RFX3WAsr1grCLuXmbiobj9Je7nQcZSuQe8czKphUXyEGHUDVtfb1kHMQ5wbLmGxkBxuFXGXnxJCyQj",
  "key40": "3jdHi6sm9NQNjEP4ZTD8JXjUY1C7tcK7G7qaLdhXhoWuva8DXwccN5iSeFPHX6aAJLRA3shvdu2yfCRJbw8adcSX",
  "key41": "5mSMsxFT9xAkb5vJXHkCb7qLjpGsS6TkKj5FaZ5KhaVs6Cqc2UxPTKucsT3vwSBJpTCk3fychXuorJDgnB7bfZkc",
  "key42": "2LEmAGKyA5re781DYr8wFp7iqjbGAkjFR3KAQcvJ5BAB7xCk6ALqGfWLKWt6nQPSbRSwiYEXoXfrtAxqhZq3i3cp",
  "key43": "2gQL62DYiKRqxcmDz8qPwWZryGyqJGy7o59cABPCqocErUXT3PdPhGNZvKnroZyJDLq7BnvMeZuzrfcMYwssgguB",
  "key44": "4cmpL2YeVzG24FUvDKdkCy4hvh1e9GfcGVPSjEijcaKgxMKxbW4gPsUwJDRNxENeeP3f3m9PgTPZWoSKkHgtfxhx",
  "key45": "3s5zpxXcTBcWZpVToaDCwueUYAXpX3QMJA4WMfLKKnfXvi4KHN4kpmFtUZqfyDt5tG439xWLAEhXbvYA6D6eiq8X",
  "key46": "3tCtzgBauT7QyAWHZBCft6Qi5RtUQWq1BtyAdQtw1bTkDRHB6QKQtKTGt8MoePiwKADFGNN4f3GmhvvyhqRRdtUi",
  "key47": "61gfqTxMZuQyWnBtsFkR6he4D9LvoKfJEd51jwzhFW2pst9bjBTViy6Nq6oiKkdJq9xbeQhSyaUzWRTDx5BMYuRB"
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
