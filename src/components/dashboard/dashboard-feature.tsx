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
    "1fF5S2jqfj78Ug6g9RjkiDcT4u8ubBhCAitUevu99up2mga1L5c5n4ZHwMHMxaJYcCnxh5cyEJEUhnqDNmkd6tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHvnjaaU8icq5ZZ7ZYJRfmH2js8wEMed1B2eCYCjMwX2NLoe4oLgXPMvTSTqGCbXYi35nJECyd9GPU4jRth1Jt3",
  "key1": "36Tvppc2p6BxKUYLbuxBP5vE8AFhPUTomXqGVV9JZrDTChikwRnGcU7fh9HCtuVekfuYSwSXe2trKKSfKAqPnjWd",
  "key2": "5qtRrP917V6yaCLcyHqUZXqbwvWqQtLgLw7Pc9WSgzXHgJ6xUY49SeipG7QTr4waVthqqmV47A1h3o42MxfATTu6",
  "key3": "3JhhoAZsNrTXKq6rduC6Ygb7b8WLzFV35nEdotCus7AiwyaJaNwPVEE5RdVZy85VAVVxoQVLvWsjFK77TUyu7yz7",
  "key4": "5GSd2tH6oswPokFxsfyVDQYeFzXjCKQQcqFMpRXrWPdErWRWT2y4ov8mZAzFx2tpmtYaF3oSnuieEtapFeFZvU1t",
  "key5": "3s56qGTrHFp73cznvy2iKnFd2rip2Gfad3VcqWV4Caqh7JWaKPfga8f5EFjFMtntVCDhwzrpeHM5gCoxgoKNWDbj",
  "key6": "2yXHD8wvD16khjuZ2UNxw8g8o36ycV8kFki63VteLkbFuv25NWf4Y3VqAMVGLXm1vmM6S5tzRWxwPcMgVcBzbJPW",
  "key7": "5XJfV9QfQsAzDzrMWL4LDKXPodwjnJykogav24yyfjBUJn4R8nnBA9Mk7eRF4gnQpbJhTX9JTaMCcEoqmPevSBng",
  "key8": "oHqiFirK5yM5CwUhyYAhYJKmKm7jFkV6teVtR7kHn7nouRzyeA4po2jdeXLwNEeJecXGZB73eX7WRm3rFRKJ9KL",
  "key9": "33c2HNaCLnwd5PVzQCPf3a9C9SsPn1syBSD8pWtNw4eXs9w5GdTbnRRXLiXy4mJBCKE5nf9fFcfGwWdaw8jme9ma",
  "key10": "5UNCxp9yxVwJbkqPVsK1PzfWDX9PLaL1adb5XWwXKq75CHgZkzgdVXGL1R5ppCsukd5R3zeAUijfYoMEkUMTYDtk",
  "key11": "5j3AyVkFDoJ8jvbyCsDsuADSoLept71jKnGgQPJVvswTd3Gv3KtVreebjxZFLcnX7FPRnFzTNqgVrWimtkpVGJrD",
  "key12": "2Kw7Ky1JNPFfXnTLLJVqVAgdiqJy9Cy86wnkQnSGK23xyX4UayDVGWi4Fu5XAoD52UTvXJHop27Jn52vkLcZZUUE",
  "key13": "4zP7FyF7NjHL2ukPKSv48Skx1FjNt4ntPbeje7JNrdFqcKTVVcr9p4EyYTkB87NUaKKvUkog6yf2exy5fPmdTFK1",
  "key14": "2GCu9shqA2h39WHiVYmojCViXrrS72frk8Vv2ZurQfDqsctDaXTgrdJZiQwpp7voW3STpBPvWZugXetrGqAHx2jn",
  "key15": "27rwEeaCd4KXXyk4QjaigZ3mXgSHUAJzGYaEB3kXrCWTGVoBWhXmEaFdxsgeWSYiBqsZcJPBMgJhu22XL58C9Nq1",
  "key16": "fbpQ7oGR45pDYdDgyw1CRUdUee2Z81nTFAy68MAdRhA1iFM7KUC7unryCR6htb2wm4DNwCyd8FH3t59g2c3n34z",
  "key17": "2ygZ3QaFV6pip7sAFLXa4vQ9NCyBL87x92frbMkidpnJzCyFVx6Ejgj6oQxuzT3KAAxUeP4UAqr3kRyEaEHdz2tj",
  "key18": "7kfEtkDNXuYNerHvWFBD46k2ZmikgV9zyNz1TMYaAxujDpAwxPsq6guaogU69JdyZXmTZ2jScADEKnubtWMLrrM",
  "key19": "4u6WugM5U8mc28hnJHMBT8k5hKL5urxpnWbej1kJ61WBuvd1y9EiHiTSppwA7L4UcGLcobtvvUd9wirTAgc46tpT",
  "key20": "3N9To4Zjo7RnHb8MDDmZyTTW7PG5MQVnNepqUM33ucLcCkRnY4wiKkNwHGXxtLkV1pexUTSgjCJSu7YwftfY6zg7",
  "key21": "2cBqAgRkonhbATLucuDCyPQ1QH2ad374PXWGwSqD8PMnBGHpREssDwa3AvivNn9svRqgcvqvoUW4ToY8CpgoBiU6",
  "key22": "3M9zhR5THneU9zXq993cbE6RdpSXyb1CQhPFN9HNjWd5X8YbKnPRU72ykbYidbFbmMx1ETY8yoNxSf6b5aESzzD2",
  "key23": "5g9od7L73X2kptzcoqwSZS3tHHuCrKVEW4uxhyF9dAJwjHuLmEQre3CPyCd9XH6hdsd6PQoBXBScqhLP6rmEDf2e",
  "key24": "5c6tdQGrenjbR16goiGw1kuH7tazayQ617UYTNXJWbRF4yK2hmQQPjtj693QfqeaUoJCzkEyX9tAS9Y5b6CssjwC",
  "key25": "3yNTz2EmGgbR5ARmkBntcFCYiHPKLLicGBEacK7FKswtDNvFHeKLnHgHUD6KzTgV53z4LmRhqDoHqWpoS9xnTW8K",
  "key26": "3wxdZbFnZv72NvW5CFMY6gDwGhnQSUXBESycNasXehbN6uf6Vdy4upX22sVu5QsVkpJNMHoeq8ZUrZh9pMi9kfge",
  "key27": "4sYmKJGPKgwsffbVtuYKBaiYFYgn2wNC1tToWWWF5T8khdKdqG3yii2WrCsV4nwHB1CuWoaTHQ7kWNeXkDQeNpmQ",
  "key28": "2ejmxNBa2FwzBaXhLUZKB5nAhAodU7iuYfnm2XKoncF4Z8zKXomW3TjdEoPwAso4qba4hu5LpusuqKUC6azUKhp9",
  "key29": "3mzk7n93HZRJcTfUan8XpjYGBmScHpunhWPtBKQoxueQtyU6FNcwvpVGqjYHgtgv8jGaTeuedHBH7jdeR8WQAtpW",
  "key30": "3z64g3EwGyDgp6K7NZSc613DsNk6ru9xdo8tN4cjzK9oviYrFfmkDCdjJ24DvzzFcpQND2HenBuNTUhygwtGYSLB",
  "key31": "5LWKAGAj5mxMJr1cG8dN2ju5MBPpiSJKhbxpugnRXSyoeZfiy656DGHUF6x43wJvDFtoajwe5CEhquoLPfT5EBYg",
  "key32": "5XM5sykHYh5HCActxwwfAdAzc8iyWoT8AbkTVX1CBS9VWu6mLWhAFAuQHVrzXD6FATANJ2Cs2xL1Zu1joqNL6NBt",
  "key33": "2Uq76kS716qENCn5WBqroiWnHQ6vjyjpSF2tJHM1Nn3fBQTntXJCs5vGvcYnenpBc9wZQo21Rn1vt4Yxh9LeX3Ke",
  "key34": "5FDcfLnPFH6S1GBYHGmibnFCaByTb7sDMVuu8Z7xnmfAFjycd59GCjUa13kW9fnFTo9xwq7MbPd1qwGnh8JdEmaD",
  "key35": "DjRWhuGU3eR7U26EujPkMgikd64ydndGn9kneZ5945yc6eNPdJs2JuNtkXWTPNJu6xRS7HBXwMSiJPvyZeYTZSE",
  "key36": "5Qu8WtnbAZHWVe6qBFykMNg4YrosjM8EM99ntrwKuBiAUyq8Bc9jndXFepAgzX2bFfSKjtd6bSeZWLSNupPKBS3E",
  "key37": "QsKBMu7p4oLhMpqXcRJVNLNR34VuyiKXD67q1BYpJmKnojQ6wkfKRBr2hftmo7kb1uo5EEasQnRX3zpWDf8bZ64",
  "key38": "4L8ZX3WDwNtArYcEGZTHhQzwg2Adr3ibKNw7NHx2V1cWTnLXYrUhThL4aXGpfn7gGQ1ToGe9GfDUwdR8Wsp2o4br",
  "key39": "5nqqXZfVie5a4erWEZ3SEoWUX61cyWrc1Czvpzeh7SWJdvJk6VaWnLuNPKJER6yGSQn3odtZETV8EjTzjTw7eGwu",
  "key40": "3mRNcc6UPpeySkob6uuzEbYN6aJ8yRRuA24ikyKYMp4q5aVxCKBwzaTFvH9hAzAUvLqxq9NgUCMeQpSSAFqwtnTz",
  "key41": "3HJS9yeBkNba2qWhEXNFA3PZTVai37pcUkcqmAyWo4ceqLnbmjXqqpobzNtCNcGPNwCSaYe6Lmyqze5JZarxqxwr",
  "key42": "5PvpRt3fFCwxpwUBPNYLvnDiKMA4qZvEov1Xe6mxmhYwB7wBGB4PwLnYak12SXBWbsKLuUfsjPQczhRHsAeE7N9x",
  "key43": "4EPEVmWYDmDDe9752EfCZH7jQXQM3LmzTB5Rz72rZG6EzLGBC52ddLqYT2foN9RpCWEVufbQJsgbXKiiYadVZeXT",
  "key44": "62MfYyq5mBxqdkfmf9evfE6146NXvYT8VK7uvXmzTfGkzRauibMQCu7UR8zwRsSPFshvR45cFZjFAtGRVA5VUqPi",
  "key45": "5Nfb3YHXU7bNC9YH8MmoCLuda8fYTqvsjvgcd2WeSZB2UagqKX46kkdSTzocxRCsVFM7GhFydr7jEkEFk37b7Ac1",
  "key46": "1Zp6axmVKrnYg9z89npgvQJWBp72KiU7d6KBQPz4kECRk7sL3vZvHqECrLmHmcPUXuUnQVKbF5v1M32D2HpC1mE",
  "key47": "4bpT6hcsbL3dV9mv8nBrQpmdTkK9q3sUKnyYQGfpgHtfz86mdedfnq9z89AxpARS8puzJpyTAB1WsctAqrRZFCHp",
  "key48": "KeJtAzX1fqHzmpmDiYbw9kukiaBfSf3ht8DrXFmXqi9677ufRFNrUAqNBCaqSxyST4VzM839AwyjLnwnDK5bPC5"
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
