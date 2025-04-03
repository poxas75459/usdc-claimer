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
    "ceLCph29JcGQDFXdRdHdcntP3anJUDmxt1JSsjewikKZQfdiwSfC43nSv9rZdiEMF4nGspd2Wk1CtchwPcgjF21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWcMVuNZX4bgYGE8ev8uo92PxMBVke78Gu64Y7qx61xVEVrSrqii1mb6fDftZM65harCXHooDf2zxXCe1gjXjKp",
  "key1": "2FMDe8KWaqXerYsaQ7KeAbacCPzFkDd2YVRDnVnBaTeqpH3rGe5a5SRm92WVE4P7uEzAxAdRtup7BQ6GnwUsTm69",
  "key2": "skWwoJCZAmViqrq3pKndxBMZ7dGfoZsWCGx7fuox64yHUMbYUkqYcMLDhfXRVa4D5KCaKdLoavp8Z9jpaqGhAdq",
  "key3": "4T1w5xKKcjQogv9q3ApxffmX9R3TsG4gDsZkPppnqTrBByn9fWtMg4KcgMvcDnJkf1H7K8qdmtEgaTrCPqTo56bD",
  "key4": "2rzcKzeNRGtK6p7awAksFTy3rFWuc4eSPkXvuXxSfWxKQRV7vfvZ3JimcBfDoDW5ZkXCCg2YzpnVRm38EyykmdZ1",
  "key5": "46jpYFoKC5V9c7CcyKVVfenc6zUG18F6f6iF8RngowRdr6zbiUkXxJXJ8twA2eJ6vPfSDVAi67dZvSnvJwH5ni7f",
  "key6": "58gF7mDpPcmJ79WDqMC3XRhPpRxRNerQEzJ8eCWPFF8ThSfL68agtuzP4DkcnEJuE3YVZRjBKfYutkmW7RDBwHtv",
  "key7": "2cbguUQLm9C48JfWwuGJPKAXUruBqHYaBGFny7XXNxu5Un94oHwgoAg5zJ7jbo5UHE8Qjw5N2ML6Vrz5ZKooxeto",
  "key8": "WVxqduMC3KBLQdG3BZt1EAXFfkff8yqxoENGybjxN1BPPtLdAbQCkFPJFLNGL83jfYsaogtvuR7GjszeNxihqNR",
  "key9": "2H8RJUCnvMnyYcgnPA5EzdAkwP9zXLjstmLLV9J2gHEFAgXeW5QP7r5JKtLiCT8Nyastg1VjiEiWmM3D5Xh1UHup",
  "key10": "5a4CYsLNcJeFLuYG5ajgY5TVEa92bSzXk2s85ueT1Bwc1v9VRxrwxoRBEVEWHGEnyQL21S7bg7NUbC5kW4ziSS91",
  "key11": "m9znq4BsfVkz6ngjwkskNkM9BxqMP4Rc7Rsfo1B9gLSAN2vqdns7eZBAz6uEM9C4eiW46SQjYiQwkNUcfsKxdxZ",
  "key12": "66Xk15mZJ3caziqVeHhejx4WVZDjNC5yRjVcB29pG1iS1dWAMmbwqQfbf2FUBAkijvbMA5LwSEmNoEm9WCQuru2X",
  "key13": "vi1LEtdssh51hBWw4VkDdqbwi8JWwr3T5BhG1fWy3BVFpHybDYJA6TnmsnQzKNKtsSfK7MxZNjtgkbDGioa7zZG",
  "key14": "FERt3AmaPRMi7DY318WFuJxyhTdzKd86U8DjGpRA2xkrygt3MkbP3AmbT3v1KnVwGZScL3uk9YCZGcxdrUVJpQ6",
  "key15": "3zprXyQEjBa2FeFMfemaovcHcPKxcKbapCC2SazE3sQkhYPZQaCP79PxxbSpj5vZZQrF4to42dwywwbdSGMeP4Zo",
  "key16": "32bLm6xrvHcUbusLXPJLWhRHFpZvjYF49BMspppobFuoVjgiChQ9Suqv1DwUn8BGTMgnNyD8GYoS8ZU3UTW52V6C",
  "key17": "DBJsfsVczaikYDodwP5zEUjUwrZVofd9uV5ViT2HrBoeKaadgu1y1Eg5JcVTGSCkJPvQhhZbEd61brQ2BiKg24T",
  "key18": "5HRSSgTf2i7RXAuXFiHggSGwiuVNTA4Yfmo1xec9WJdaxKYxAzVHUeWFZWEUpQscS2VYQ7tvDkSELXzygtivnKY4",
  "key19": "5YAv249SzHfPnBbEyaxNzKkjeYMStXY4C4dBtdyjV9dfiUFhiAgnH4iUATvHVbYady5HhiAgn35UECLkNMVLbWkF",
  "key20": "31WxFDA5kQ7nwNmYNpYXHwqULfiKz58SypDArLxXsnov3v1s7hvApVjm2Vr34NMMEiKYW1SYQumJFXiVpvpmEirM",
  "key21": "4oFoCrZRL9XthMscxcPxn3jbTYUhgS9J6xZDXBTkiLZM8Zf2rUaku8fmxY3TdbDQ1yEs6KjuneGEaS2VrXirAe6W",
  "key22": "2CMRAz68yuApW9ZtHxcSPBmVYx13frUiMTThhnUH3p4zcEXafacjyZ3DrNBJSbUraQePVDDoJ7xFEnRPUcMRKo3Z",
  "key23": "5wKgbmwDJiy8qCy6GBcu5ZS7Y5xwGD2RzhBk5cTDDnMyZTp2FixHeXN2PcL91upsKwuvPae3W3aiduHNScyzC4k2",
  "key24": "cet6eNJq7yvR7SanVGQsh6NmH7Wd9C6TtogLdjXTJcxb1AcShHBJYJQexwYo4KCGFoVCsdA4exyEcei4UDD9DKN",
  "key25": "2bZtbZxXdBhE48iu19sZqWwD7CDP4qVeUUQDnUjYrnwPsybL9CoPmN7QiVw32t1eLa5HcLumfGhhaK7ZypUE6fX7",
  "key26": "3E4BV7hajYAWgAfXNgVM4XXvX1WQ9WnWiiTw6DzgnnAYScqtCwMLfd8PDWnhbRagi1JS9Yyk5EasNcQGYYQnSATG",
  "key27": "CogeySVRWzzP4sUdebDL1iT7HMQ1fCeZD4YSgbGyd9fDppxB2W6SMeizPZLRhSTuntgNxWZwyskPmbcaLPzVGA7",
  "key28": "511sSr8frmpNXdumaGkUSx122w3XrfwsXpao5MhpEbhA7JdWY51xyDwULPekzkFDFQQUnYZFX9kGd6nVZwPHhLz9",
  "key29": "3EBHEDTWRtxRcWYzHWLsGsS9iNHtV9GcztEVb1wZTaG1Bead4ZnnswdpFNc2RiSB3ajhewPsZedJSgGyDLRk9i45",
  "key30": "2FnNzp4fbUt1X3sqgNXC6ZeCwsPwGwCw9XcUCLNgqiK9R3dDfKcKQtMvkw6JUxcSwcexR6a4LyU48eUiNNAxTncU",
  "key31": "551hG11FUy2dn22Rvi9DzPwTmjdzXrL8Z8sfPVkNbkwvpqW7pHoANNkP7tWmTirLD3F7BwaEAo8JojqPaxkrQyyU",
  "key32": "PDArvaAKut6RkZSR8r7VadU2joHkEkFzzn3VAUSW8VhfQPrMLPYE8i33pkSPFwzkSbavrHFt5hxPYhhe8FxzPPe",
  "key33": "3SCCMdeXqQ6HdszD5GJD9tfMb4CSibKY2DBUMT8fXQpBcnAN7YtJXGFXrBak2yDaNvLaPNXYVSeNJYE8MU7h7XNC",
  "key34": "4dCCddKbSfiCnyypNifbBe59PsDEokysLcaRPidvTZ9ZoqYWQ9YMXhAMiShp3nCDtrPnE71LsXR4WW9XuFbUtGQx",
  "key35": "5g9C3HFzhouttqRG2hG7ekZLqrs63EfEHEN5GAXwCsrkrqnPHLMsZ7XpeN4asqDLHjAPWPHu4ebRrB7bjaCaCEzq",
  "key36": "3s1JdvGu3rhE2BG7hbohvNSKrJznYAbKwhsnctadZUWkrM5EvDWJaSxXM7dNgKYcfq2NSHcNSBBYrBRPpfAxzSrj",
  "key37": "3yWzo7wHvHNfpqsXffXuqDfDrjxAEHFxBr5o9H9sJCJXnXbvZoq5YvymM4Y1TQZNDKdCUW3RPGEU9XHtYUsuFY14",
  "key38": "3snuD4aTkP1kdMWaxpGfH8rTfdp2ugWGAKURV5aqkWFLqVnPanqQZQYFfvvXK5Y3zGHh4xGRdnnrQezSR1umT1ad",
  "key39": "26B4BuFNjMjYqunMtuJdCTzLmaArnQp4VGKPLYuSrHRmweTqpi6Dzwgfu7RgETSq7X2uBKwctiUkHNn8Z9KSjwy3",
  "key40": "45XgABofWLjPCCxo57tGK87Cj4pgc6Qz8eeHEXxeJChqiQSS6XSFFWH6hTwXx32GFx5zPzAKuEaaqbc6m2859sCo",
  "key41": "4mMh2M4fcmz2tSCVR8jNtR7AU95K4yPPEPYzP9KqGzTRhwKgwdDacdxxN6DRd4jMXc2Vid2SfNMZgvyabuUMvA1q",
  "key42": "5DLkTqPboMrKvwYVRqdAa1tnroeooAo7JAQ1txjvbBgcVzYcpSYKe8beri6ZrEDjfL7wdRo8wHE5qAjFNdc3t2pY",
  "key43": "45ZJGSqdT6Mr4BzoS5c3YCyWJ4vKRFQJ4pYEh4zqJvhaqwgNPzinzkhqo5qtfpxjew1exkd8mDMeB6vA8788x9Nf"
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
