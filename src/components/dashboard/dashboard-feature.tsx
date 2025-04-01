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
    "ahueFB6rujGRKuAjj4xDMhd2F93CWvHHADFAWpt9gxrVZnGenKwTLAQKMSfYKELb2ezWs5TGsWRUKsc2P16vSYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJoL985Pxmb5WtoZ5sEHRUZ6BbSQeAm913kdLpwnxDvbLEBPy64aiLP1ygcgt5Kq7wnsXaSq9N9twfyVpEAhJDu",
  "key1": "5B9rJfKgWvu12ehuzbouwo8tkSdCqQ7rgbNcrDNr5kK8h6isb2BE2juZx3wqDjZp49Lmf6SkxAGNT7uzuCXv6L44",
  "key2": "vto2zFz54GisbdfmN5JHuB3peLGSDWsVUmHXDjgvob4igfzK1Qvx4ymiSJ13FqbM7R2rLpFr5DGnsDzzpfN7XEU",
  "key3": "Zj323qWGJ9MwLT5ca41MjZfVVJLBY7nRe2zjunosqFD2fWs31anxPqD1u9aGXn6CeeyV8wZkZoC4u287ZVEaEdT",
  "key4": "2vC91rgGox7rYaLhe3ME2F8ckT7hxUUNxJ8T9MUHtZwXumuaC8jC6BBSQWoMPPSsCeHfnFLQz61UiMxVeyYopsfz",
  "key5": "261jErAbxqXtcUk3ieDEZ1JXdUNgu818ZmmxeiFZTFfYFZjtCP8tuB6AzMxZ72ipSgRhN8Joufhd55g9aVcXg3L6",
  "key6": "24zDFKrdhQeHVT4MUD6qFvBjiX1tAdRzoViw1YQKckQMwrVeCnBnFxhdZAmX7esG7tS9KgomWAcBEjDiJjky3fx8",
  "key7": "3gXZyJDVS7qt23XKrGC37No28aavGcqo2VqHUrX8fVkV2wW3pSS1tbENKYSfFj6gWtGMDbbddoTu4WJLiuhVBkAE",
  "key8": "2TJzZYoAKrjEoKKgMxsoE6caX78ufSu7AqQBJL76nMXfCwvAiCRGaSsv4sbtCicR2cTv5aEhMjNLfyZR4HjceSV5",
  "key9": "CpGeTdSbB1jsNsSCX482VFMMpD7pXqrJdGtmtFcanbE3R5Rp9t5kyFuz7b2QEyeWTYCiNxX54SvbZVbGgWfUyyW",
  "key10": "3mwXf9r8eHhzan1kaatwiZ3VxkJ1pTypHWkWjztFvRN2F82Dj4q3453ULQ8uV2dR3jyvXebyMjzx91Dds9Nn7tE8",
  "key11": "4ge6Ku3cKQtF83yHZN75BLe71aNgEm5WfTvTfvGPXPvGeVpmNfkm2B5CZLQzTbg6P4cJg3Z2VgtEFqLyu3nPSAja",
  "key12": "3XGK1HSQHXN2NzfEoKdK8h7EtGVg2KAzwDhT6wz2ioYtZ3LSXnTVLuo4cTffhj4Gwn9d5yGk7pxGmDg178b4wLKo",
  "key13": "43pYfkrmyfbFgNnvNGjEXLCqpcH9KQ8CH4jFQfC2oQ2y88kGKhGFRQtda5zq9212XR8ehUDEurRHcUbJs3UwgY27",
  "key14": "fuaYAJsk8WaTmk3v2gz1VBpdaycx4G2izHyCEghHNna8TXVho4ZBAmg5WsHYfVFCwFoNgGrKLrL7S9NURtkCJDW",
  "key15": "kicu5LqZAGJdT4dRd5pvSxDSV2PkLHDcmM8VSY8xpdVtdyi8DDsP1x79iL7yYbProidtTQTGjKUrEfuMmZ1e6Fu",
  "key16": "3hvWKrFFfpft2f3Bs1qH76vYrXFgKWdxcpGfFuREJ94hbHyUpVpBk38F1UBxSUXEr5FaRD1yQPf38L35am4ocWE3",
  "key17": "4d6sWd5hRLTCGr7wH4V5UBDpVqapyma19xdjTW7U1YGv88jXzKWBYicryaJf6A2ZSpt8usPw72cihaVpzA4ixEK",
  "key18": "4XWKQsXjySjA7E1WCapMiBEA3Mg85o1CAMCjsi8H26gvm2FuGduywUdBbiUnbb46mpZtNsdPWueU6Me6yig2PEYg",
  "key19": "2QgjnRhGJQBnX84zJz9CdX4h7qxi1MP5XQq6YYdATtiFzUyBHjJSjZWDTnc324nJkmXQVp1W4SEnWkbrGy8mEEYg",
  "key20": "SstyZisoph1td2HzrvRc87n2DAdCbBjdwU89UVfSmuTg1MmyK68LnUnRwbwtWZUtw1KCBFMhhFs4PNyQPLV9Y44",
  "key21": "MQ67SATuvd5hYS2ZsQ4tw8PqxpeRWNb1jLJzdiHa4nr97nAkqC4a1JcpXr19vX1qTjGZhFc3U2uJgwzhNKJoNwq",
  "key22": "pxtSth5FaS4vcbVaKFDB82g3WQshK84iK8ohHtj1boPqW5BvF25W4znLPhxLTAxRyE3oYnBb8oteuoTAMuEr9Pq",
  "key23": "5VbgeJgGXDbVpT82sxTJTnWSotkj62hResYQzh8wjk2tspst6ZzPi6ptBWkMLMHkWhbFLZpPirBJDhumxctWPziP",
  "key24": "A3W2Qz7bzRVYjbog9PqZfnw2tcJsepEvVstHffqzxYAREB6Urp2hXqL4YCwdmF7bLss2ESW1dXuSyp4ouB8w5fG",
  "key25": "2Qv2vn3ywMBd1neuzDAohsHGu6fEx53j9hyADPPHN7wFiHdm8Y1WGG45BAc5WoGr3Ui6mYAfyYyiBoeT3mtoyN17",
  "key26": "3sCYVLeocfWLCmG8wR5jGVN2XfbcBgGEvk7oborCdZBrwNXqYf1uoALFkVo8PxW5Zf1KFNXWQmh1fZTX5pegBG1n",
  "key27": "4tWcEpWH7vWsaLvLWHPp5wEfmQQQBpT1Ye3zSiCCaENkhAn2HbpAy5yaWejF4cRjH2Z3n6BbcX1BMHF5hVCkZgGc",
  "key28": "433EFfRZpDGfxgSJPgukc3guBWNnzcQQbys1ftgrNm4G4szzkmDMRGxEqbtWHarXtdgvp4Xy7qNQDPf6AoFwExug",
  "key29": "2wcUFD8pSSrvJTdMT99v22ovZr5gKtxN3RFqRPUZZndc4Rs7NoMbH75tBbJgZbwAoovXxDpuKccmYapEH8S1xqRB",
  "key30": "3Z84zS8njfJkaPM3UrKcY14hmLu4nhjpMEUwFNcL5uB3u1RpUxPKiHXfxVypj2FEWs7vA8SAmURpUL3XaNy8si4o",
  "key31": "5nb22gQ1GGBZZ64LvY2Jiwucw16GwW4763Mw2TZ9ZX5h34CB3bnnVNBA9J28GsKDfpYssRFpQr1HKFLPQgjw56ks",
  "key32": "524T7G4TULbTkJab4VQEDo2uSUugzL3QWnjQvwoKSeAzsZ9zLwgJdBz4ayvaV7FesZB6WzoKntjaAzdDYfdNDSjh",
  "key33": "5frixozrbDHPk2L6o2dbBPQuQbvb8Z7HR2iaZvu5PovawPUEcsssXJYrzkgu4sb9g5BDMH1gbAiAYHJqybTRkLBd",
  "key34": "Nvm6NQa2ERcWf7ufW94q7wmGvpREAoPMPCnYR8vnw3cheME9F8hbuiqmpvJMHFZ4m48CLWyKSfm6Ezv26gJVdDU",
  "key35": "2e68RnFBMaBskbRxCqJhCMVk6XnwTD2iuXvNrgJqhqPECtxioRsXUpAWVCLJNRC4JReEYCtnb5tNeQWjXR8A4KwN",
  "key36": "2UTLdr4w1XJts7BTWAZEtemiRjdJt8GwZvVJ9t7KfuyqN69S1eNxR5BGk1sesLoHYd5b9afLXnhaDKmXGuNwh5P6",
  "key37": "4rfcD3gPv8zohgRpbBP7DqHAuijBCjCkr1ArBJPe8Ma2a2c9H9787resvLa6uzsXoDqoWoy2pJE4qfRbiSYJZxkz",
  "key38": "2xnk9Ugi1ScDBGLNqPK9aF3L3JhzoP3uuAsZmzPbi4hmmSK4xUzebFT2sP4PvKieRw4UtpB6odXXnsvoKy2MVcb6",
  "key39": "4x67k3shwXwac6tFA9XugfHXoZqaxYGwJDpQG7H96uMxsgxgZcPNvqTHgr6MH5c4jhjVoffkxPZCaw6hTdy3e84M",
  "key40": "62ALwELLVFJabJeYD7KLCZPqUyBZVYkJXDfRTi2NtiBpQmdxLpm85usx9QmRHA3SJkm1fpAexjab4g6SYgVZaiqj",
  "key41": "61SUJfGfcrBHQ5jADpyi6DjgTRM6LpysZ2oVMQKbpayRcySDD5Rk8Wnosi7S4UGxfnDd947EDJv4JTvCCUL8nuru",
  "key42": "3gLK6XfPZ838CMuM4gZidpmVBukEN9ZW3fo9Jz3wHj6TQQZLaQwtwR3SZiu7sbMvNz4P9RdMi1QTQBktopWE2ayN",
  "key43": "62qcWENRRiDydXxLqDgxNi1XE6UFyNBBVTJKx2M2xr8bdyN7r53B5gCfZ3AwywEyWb2einPXjfRXmehfo645XxUB",
  "key44": "4sPPnBfdhpns3YyK9u1pN73pxwc2LRDn7uJJhbZi8qpqL8wyL1yiiCE2RpvWqDWr9cGivgqFCHxpHUjCCvtw2CUC",
  "key45": "4qAf4qZwy2yVKo5XVdE7sAMd9ub2w54BRQyJtHZt6KumqCuwXXKBxG4fFJiBoBkNQLtBkztkMPW2PmvAoDhmd3Xi",
  "key46": "3VM492Czb3J4HN1M56AXfk7RDmwXHBF6wCAmADbhHpfSDFC6xirUwzs7Yz4rU4ANCjFnGaU5zwyF5tdwQrfJKNb9",
  "key47": "47EJdZ4Qq37AufQSKxogE2AaBUcL7nCDoTBY4AvMUauxwioDp5swxKG679zvDVPPJ8Zpi79uiGgDnXLfMCRtnQsp",
  "key48": "2obQqjmidUmRZDZQ5LRXUwETEwZJatBrvKAzNz9vTjZhSLopsVCCHAKVuzZD5JjfFaG83cymyoS1mrgtjgu2Xii6"
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
