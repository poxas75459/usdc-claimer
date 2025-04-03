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
    "3Ec41fgWHGs3BwebegVTqz7GYXcPQxNMFX9qH7a2tqmSPDvAGEmVqcqm48DtjWTxm3WCpCLjm7mw7kqFjFKJWGgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pFgqyvtEjrktJ5jgWiY5nEqQEoJ4FNzPSxLqgvdBv5PL9dsHGLnShPQLsgZ87WerZfb9iNaygfjN5DukPjfAA2j",
  "key1": "5kcgWMPwLsPkp4arD67XpRk3XNkcPAjx3MiLLdADxdRnpbRJ5GduMrNRZkgweGPJxczx62LdoQ1bt2Fac1idCCfK",
  "key2": "5q8sfpVkia3w21iwDHz4uoQMCm7cBKhmygrGRzZtdwkUncqzAM66YfGaNHW5BnMH67HfqxgjMJJZNWoK2pEJGhwV",
  "key3": "5yatLxETM1JJGi6yaU9My2o5DHYpUzkQQMj4ZJ9rBJSLFhtDp6v5qgEDe4BTCVvJrEsnCqPfEx2sb8KroeHoPEdB",
  "key4": "5LTrByUv2JWQfAMckwVUL4eghEsqVGZLMPXMpZGtEjXnhaDeW9QtLh2ReeU1AUcusg99PoGaBQnXDGsXC33C1euR",
  "key5": "5M4ArF5EFqrNoeXgdgPE2copyCJ8HrfroSZojLuJY2JFQLsCvZdjh7DbBHLi5pc1nucT7W9mA2q42cvVeh4k2kYY",
  "key6": "nZVabZ7Umc5pXniQL2eohGhPQ4gx9vPU2sX7QZNHZWhQbxEvBpVjBRHadwWXj39A8XKhiMbrtANTU7MVaDVwwX1",
  "key7": "5LKsAu8UwAjY3zDM7dYPAywnGodT2y8zZotffH9wN3Ty9sZZ66Hd5PdmN27mgeUHucJrzo1ySubyjgC64BQzSAb5",
  "key8": "2hV9daBEfKJC9nBvzUGuSAQNg8pt9eAmjcmLHdd7wRA3nYdrxXTcENPe5NUqNc7g3vaHbhruvVDR32sA62jcsVQu",
  "key9": "3QyYdAyuhfxSbvXDnbVDVVWFryArLeuMFknFUtorYDHCpHERn8vbANgYSJo46J3y5gDncrUii6NwAkPtcLKxL6WL",
  "key10": "G4roiHbacy8pA4T6M5gTP9Xs21RaFRsVaT7wGHatcJh8PZpkgmR6QsxbKV1YkjBd11w721nBL8K3didKDxArNRr",
  "key11": "2fyikVGW5MPBLvR6Q7hYuPggRtfiRhcAcVyX4Y2ZpGuqHrcpZLsBehMNBrVB47b8hY3XMuQu5wnXwLs11DiNUA7e",
  "key12": "5JytuvJX9yycA5X1Xm4y8bqhhptRK7oaiT4m5GYZHQNxGc6nHTDsJy3Hr3gsGyB4tUDdJs7v4VbVU2RZ9kmxaSGL",
  "key13": "2rVMYf3xHSVnpm9NG8paDLsKMCg8kZJo4cwksG5arkHMx942KARx3Xxequ5EDKWJqVV5CZnyvHmphBVSokT2ND8Z",
  "key14": "4n6RGyoeBi5kcE8rCYrxuXjDAjcY1qgozzSZo3tsp4iU2kA56TXckAgK8EpeU9TACe4WsbG55oE5wkJ8FgFZArui",
  "key15": "4BK42QWMeEo6xUNWUncttofhzQACxhiKkbDJFZft9aPpzQyiED381tLfQur7eo7qMMJX1YaUYeK1m5H3NPq4rXD9",
  "key16": "36edegqde283wBq8EXSAQTH5gx2ZujK4fGzohVgfPG2MtLE3BeduF7n59ciex7EwhLjwnQLPezP2nVvRJo19sjEQ",
  "key17": "4S9trsd7jaezTvrpRzyPFRquGjK3ZA7RMc99c7Kez4DoXHoQMgxkZdFKBXAHzVtu6LZYarcaUyiEHq8Jf2ncwn5c",
  "key18": "5nBq5q5Ds5M535KpoDRgAQQj1eyroefatXeLEXm6o3Jfo9rAk19PRes9mtChBJM19GJ2RgZKzFXNMpjFnDaehXsR",
  "key19": "dNug4vXQmdb7N8vrLP3q6KyiuNYanCwsukf4Y873kQxBvAZkbSTHqhW7mJ2o3chHPj2UGRP1vkkmy9ALerHnDJP",
  "key20": "pDdAhJVcR8wds8SRJAh6cssE4tsVfxmB5kPrS5bt53sdqabfGx9Vt5EtAdxsKACnscJDDwJAjBfRQfmYHQoFRwD",
  "key21": "1rPwRWG9zGDvbLKbjJyQkqMMPtfwjgQG59d27DuPsDqrTz2CLdWPdNnxe7NgRbaXMW2VRAwvoA4wxYpoYoeb5C7",
  "key22": "3rYhN86Hx3AUSk57BrWz4pc5AHZ4YJNf3n6n1GDsmnDhC6Yspy1J6XWyPcqPXLYL4x5shJDefnjrYTYVjQBbKhDP",
  "key23": "4j2S66KeX1uBygZhR1RuT9AhqPQQvQ2CHoRQKQESJDbYBNFdD1mV6NDB84DbRfuWFz6FjBk55ArepQ2NM2zcSByv",
  "key24": "5DzW6JWPVqALW6rYrxZwdC6PjcMMbDUnjg3bzDAJseVJETSDKdEuRGvoiLYwHTjkg9b2pwpGVRVrJ8bDutLsQubg",
  "key25": "4CqHfAfcGV6n8ntSrcezCqpPENwayjkGXF7ZMm9KcdWU6U1t9VToTareXFn2ZWLNjN6ZvTFPe5wQcbcRK4kbfwSx",
  "key26": "24sEEyz1rHTTRMa4ejnMb7Eu2TndUcDbjS92q6fkmejYAPxVSdHodVqsNWFLKWhMz9WAU8YA4A8UsHZkBgbSvx4n",
  "key27": "4syU92VXirbhBvmehE4irPdjF3KM3wRMFZ9DMQqoRpnk5dmsrKQhNJSr5n2jL26KeNj1H2Vg8mam6SmzziVjN2Lp",
  "key28": "24iPeVBLeF1XN1652U6q8yUXGbXoPN9PUrmmEBA9jBJPkAJ4Z2dRY8xnM3zzuPdQyqJ2rktSJZC947PbZszAEWdM",
  "key29": "5m8uynsL1gHRNJhRVJ8Z7FMuZKezidkJJtvuHspFNFuJeaUR4vqoVDEDm1AEZe5FeHkjkzxYRf8LntNDsqSgFPiw",
  "key30": "5i5oyN64SaoBgNADJn5ELsSsjGmww1AfvKoqgqeTNT4e8XxjFvrxJmecReTcDh5naeq9qiqaX9qjVGyLd46jGYZc",
  "key31": "5Uwg3nHYTnZf59yLoun7jW5ppqoyDyx5ub7NiKYUi4HtH26BHfTeNKDTGpovcoFRNrNwmXXcVFbExnJTANffQuWT",
  "key32": "3YdyPdid7KFHM1vD3s6t7uRE2EdXxie3pt9TvPiTUx7m6Vx7YeMz4zyLe43SrTy8jGMLgpgULzLbMvHE2oTFmaoj",
  "key33": "NKwnJHjryoukswpBydCB4b7H3bL2W2wbFik1t58pCPDrxFgR7bNYmWdWbr3bqWKCRvaiSQ9A1q4j6pGevkx7KKL",
  "key34": "3VKKgTaPDVGxW9gWtuQFeRQpC9nUqDstYBwV5EFW7yxkCsBeRokoHH187ktrhk3Rsn56ybCmihcDgf5rp8h58xMS",
  "key35": "5NFBXS3X3kPGJQ7r4jHvSSeW77uiBZtaCzPWyg9365pdXL9u5Lx6Gx7QkWMSonYZD3DbExBgsikeiy5LqLEkUz99",
  "key36": "5dr2FFVcLiMRGtJsqTLGcxgsawGYzouf3jvR9L21CReJGYyvZiDdH1mBv7R4qcMGL1NzBirNGywFN12ieiQSjdfU",
  "key37": "2qPjUwJLU4XW3ZE7RUs1ZauZsNYhumXM4WzjuFhajj1oPUq1yAu9oDjaMAxd5AuoX16Hk5oWPw9bvmJFuGSG7HFy",
  "key38": "2MGKkG3Zq4uLbeM6wGLwixgZPfHQ4X9qLrjTYVJUiwx6i5n6xfK8xFCBJnfxCrWAxZBeqH6BvJYybHyeJVEbz4Ce",
  "key39": "2YK4iW2Finb44PZBu7Z9UJRXWqDR1owxEwSMfE1RVMBBJMdq3SMxv7muj2PVYAx2nQv9QTnFaG7gMJ2pkwNRkuxf",
  "key40": "413H6QDD7BitFUzKwXadXmwZPAhQjPNGVSoU3t7hp2eBVNK6FmCDn8n7d2p8T6rNv74C4SJzWzQ7UK9NmJoD4pV4",
  "key41": "2W9WAgJwAuVvGmk5nkpEKH5ZEby6mPFCRRpse5nLdfgeGwe9MuT6ZSkkMuMPqYPksQMgxLohT9nn4EmnYX22ZWvJ",
  "key42": "EAkNHvWDYGEX5MK5DpPDZwYM4Y2TqJRh2GFi2ozf7cRXgSe9HbbdhE55J8XMxc8tVTH39n9S4mcpyWwbxmCurpL"
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
