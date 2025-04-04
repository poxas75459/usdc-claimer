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
    "33zaUR8t2rNLW5NMn635jGhsD5jyP9rSHgx6ki4h5hbbMtovuc3GcfiXHzyq1kxUG3TWEiDfpuFDNwhJzRy3hDak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PRNf4kYJHhu8mDVphzSrHVeiwKAMYrdejMCuRqXFzTTyWDuSFdFuf1iTYUaGYCYdmG6jiPaCESWKSLowaFsm8gE",
  "key1": "5LUtxGEJQjFVhxpP9j9ZyYHgHFJ2rhhBduVhJiq7QCdgGSJB3tB5vLcenh7kBwzMmP14rrVvPP4rGwxcQXaoYy4x",
  "key2": "wi3jiS3XSH51vmqrbmshVpG5EwH6iiycNkXyUGLnxTEZNPcCX5q2uPQRDrMkPdpryxQw8Sb7UPrLVBuNGgZr4ov",
  "key3": "3LPU7ip9R7ziDvAUWJRsgD4NhYhAueqrHw7S2BebTEdw9vqgWMpGwtb5mRg4ugDZutZkVEhMAp1BnKdBKExc4qt7",
  "key4": "2HW4tMp2rTcXCM83NnqckL2txH2afnzfroaDG2GX47quCsWTbEgxUEnMdTSnck7U8doaDydxFg5fGNhSvr8cPY8i",
  "key5": "4XiPkNBE8Bj2kZWYibcb62iymNsK99mcQMrHFJr8fesicLf2fd5apbv34Pa1jDzyxoz6VGEs1v6KFx8xb5UQXQfL",
  "key6": "G7RDV5XqARbM4yoB1uHotWToG2MH96ScJJWEVv2zWZMswGYHVyXJSqb2Ey1L7MafNbGJd9Q33Lyt4mWSpC4p9ys",
  "key7": "5SKgfskVYswi869Ei75yNmTXeb3zPPGp8WAVuwN2qK13CN7Qc7SCoDnvrdSsocQyLTCesCDWsdjNooi9UREEXE7E",
  "key8": "37nutnWCABJXzTKFuCzWXmx5uoBGTqaSm74ZNcvVoNfzTKhhTARk6ep85J8RqqU6eV4hhThSpuviG95xxRBLWu6H",
  "key9": "444noxrmgPCGSYTuJMFF4KsqZSvsbT91JCR7FX94X4BjGeSmYWdbzTHZKCsKK5xHJ2YBTQ3ReQBnFvjCLZS36n5X",
  "key10": "YEodScwJ5271N2AcH4UP2g6AR9Dn6DkFhSi3Z9vEq5jXQAeR1wBZ6fDbzYAi1sr5P9ytsi228ZG7rhcVtnADjmY",
  "key11": "wXpb4wT3dFXv45KTe4twNBDqCfyQp1ke3TnZW1mfk2capyMFfkvHa7HGGmLHSw3UCrbMJvNmrK8zP7e2qhGmjsz",
  "key12": "4ejH7rUwTi2KaGxEva1T3fFbRANae4xT7eWkbNk3SZmonxitVarYJdsm4vTYpeSgEu3sdZRjC87bX69iY28f5vtu",
  "key13": "43SYtmqrXuhXECZSW6oMihx3QyPrMiMUP9pmhef98xRaT1v1px4xNSp6dQJPE5fBo9uQzmNXRd7yp1ZThSFG7AsQ",
  "key14": "5irAyTB7E8JfzhZbmMx7VcYaYbrnceW5TCJ5932omH8m5dR9PBkED1xr1BNvB4iEUb2ZxqrXGBgxBdrj5y4THemA",
  "key15": "GgsHra4Yti6hJZn4zueKQCPS2eCjNAvpGRottXDczfwhvDyTMd7d8qXeFcEENkZsCiPHGzB6GJEr6BS1FAZmzHa",
  "key16": "2oixNAH2L3iQyGMPWpmKeafMe3vL6wac7qKjjeFsoRM1qX4FdDceJGSGr4jf3C1LHkGGC8cVeh9ZwFXEKtBofQTj",
  "key17": "5kzepVtZ1XNn9LxWrmu8WVj7ARakP5enEnp4g2Foj9VV1sbPZE2RJW3tbaf7Biqe2upxvZNncGgpPWXmsh8AkQ5",
  "key18": "2Mq3Bo9mpEQJhbZSDGTZj31rr81HN3nf3Rmt1ZbEmfnwGAEuBCqeaGS4p9RUuXYStJThoHbeqoroFNFjeUwpmoG9",
  "key19": "kjUsFhsKXpDv1BETjSrg7G8WdAD732NLDwCPdnobvQLoYeGeKskn8QCA6S2PKLtACxCZNYCtRzyy1WMnRxFbUYB",
  "key20": "2RGSJyaSCJR1XroDBp68FPKmVNvd5cnKYLTyiKzh867GpaSr4ibPbB2QxzNL9DLgrzPNr5MQXcB8bEJaSSr9xGnd",
  "key21": "52NdjLaTJ8KAYdwRgdXXRAofrZNDb461nNoJ28TtHM1g83AZzoouGTsddCKG54i62mEeKfT2KFGoGP7qR5uLr5UJ",
  "key22": "5ZosmegcVnbHZY3Z7eJPZVkRiTpQB4N5aZWJiM5uuqsnerMcyxZ8GNewzK1pdtV7EdzRcHJbN9B28WvtKLP8dHxK",
  "key23": "J9yeBWoT1mkdhsizZg71e9fwfgnpTbWayziPYiVVTjwc2enoYLZx9rgW1mrwdQPjscKnuoyAqG3Y2vNM9ypbqpk",
  "key24": "3MdNuNHxbUfViXABKBJgYytC9saVk49JgGcjGbvy5ECeVhnCLQbXMgh4RKDUpsoEzMm1K4PaiYA24qT8qsj8FHma",
  "key25": "3GzZG6Fg6LdX87tNWh8QHPKPSkxT8VP2iTsYgkP8qcZbz945eySZXAF8q23uT2CyfG18nTFruB8BDbvtkXzhQfcP",
  "key26": "xuVE4pTaxbUN6zQfKdzunhC7SMudzhkfQx6xxVP2P5nKtxWD31i318matbzaeAQJoQgRR6y8z5C7J9hGHmccD1N",
  "key27": "5qETHoAUzmtGHBmVxJh52cXpjcMW1QBTamPo4dgzemixtqK3WunMrVnxEwW82ex6gUt45w3P2etw4harKtDuP4aa",
  "key28": "5Ho6fFBjB6bnpiofWTU1FHdbjDEFeJMATqbTFbM7seofD2EAgNWhqyawZ1uT17PLdnBmEZVZ7jwb8Aw8DxnTwJ4n",
  "key29": "4LmEgZpHAjj9vpCGCYG9sezDEEfPoJAtitbMFisYGxqAg1A3tumujivnwXu5zAeVK6wLguByfn2oiQNywa8ocis4",
  "key30": "4vKDiiREnkcfbYj85WdrmtUkjSd8gxT7uUm9Qo6knjjmc9DcdvCo3zG7wpZeGaeSUBkiPSQHV5qXYVWPyYwaDJru",
  "key31": "36z8zTNskAjMrL251WKHARA1moN36nFWZvTjVkGL8M7PNVExCaxRKn5kVcY3yaHKhDBfwDK1divowHMkPA2jmVs5",
  "key32": "36SmzzC6CFxqMWLZKd82NxwG5rd5Ws6hwWSJXJWPgVXf5QqjvuzBBFJwvgNCRaNuKVymxMdCDrwxzCVEAZdGcohj",
  "key33": "r7xww4amffF8iPwRqga1DqyqCt4Aze57usSimRPu2RWQj4xYg4bQCKTucYxoU4ZCdaxPbBztnNfpc3gAAcyFnYH",
  "key34": "3Xt6dTKtjvzb8aY8mMF3pfrrMLX9RGaiz3WizmYtkjpxXYPVRnhKq358QrfwNCqGPQF9eCACqQAESZVoTWmM3xNo",
  "key35": "QfaeVSHDYLfohQTwoLmBfGYjCtezReySQpvYmdB2JkAcH3fTQzscRVV8GDzEmEs8oF4kAvmd3RzgvPTRcCUeE1m",
  "key36": "52jtoa7ahY6BDUzdmJo2T4P73upou5M1Bw1Crs6tVzw9nLmFZu7MdaviYLdnEazzD1vrEuWdseKNp9urMmCLJ8VN",
  "key37": "5jp7cimNb6GeX4fn65No84A3rY1TSGzd1FWhMw4599YbXXLC3j7mZqLDbgGzk3AxiR5mQWp36p3M1MtbNVkHukUh",
  "key38": "2eofJZ5fbVZWS14rrQZ8wopZcbCJFvn4AdzpaLxuLau4Yzutvo8PdgSpkYi77g6ah2nr7n2JvRcBsUXxg6SHgm7y",
  "key39": "3MnT1GZA45hPvAbMaE24oPKwsDZ8dfrJ1jje4AmWKDgKxLWENh2Sjm3FHCnaad8R8WEaNs5PtumNKAAopsCEYPAE",
  "key40": "4nsHXzWhTPFTSaCCh1CCQsXvbRXg8u4V52FnFiuNYcNx4oToLRH1mUMyRGEhMBiGsEW8gMgDAwjqLxGKguRSgQET",
  "key41": "BVmgFyfdCs61C4NjWRNqgrS2LStkSYbAapn5k9dqDGuT4v93cn2ZReT1DkngXy1cAKy32GvJBRTMgHycWGLR9jt",
  "key42": "5pegQhrsZZVC5PJdBLjLszRXWzo8TJRjq1t9JWRxcTkfkK84TMQNszxJwxAWrr8jK15SFJu326qEsDLKkSjb6vhG",
  "key43": "ZMytp58J3a6W4CcH1pJMdtG9n9kPtUxe7EPVFFTpFQykqTCBc51nxHooQkK5oZphdUQKWS7sUWxuvfvi65KU2MT",
  "key44": "3uP9mk6UFZpq47SDyRYx618DGacSLDrfuUa5VJvUXnNbr1GqG7t6eB49heG5ZpzwLgSGQpLv4zQk4PkRgAA975jx",
  "key45": "27QcZdgCFdzTYML5JV32JRy2N9qho3ytmDpeDAaEkoEUuLC5s6byjZisVUGd7haC1gj1gEw8CAV4d8EvYQcnbc21",
  "key46": "2ZugF2mVSd7YJLRwqJrN3xZTVv5SPZkqUQZQrLwAvyCf7V4wJdi9T9Bx2567HFDq1VcyseiueBNwE1aht3Pb4sx9"
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
