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
    "23FAHFmssFTntvZMwPH8FxDeje1Rf93wFwNu54dEHmAq7SU71FbfNcYraLWkMBd58eJBSmDq5UKNiarhmQd6Jfxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34S6vb4SwoiXyLeo31cPcB9L9doMNfvMQ5t429XuJXMvFJ5zxhuyvqg7mdQwqpwmbPz9syG9F1eeP3UwmeE9VoxQ",
  "key1": "46qxV8Sa6kmjQhTPpYDJNHTaep86S5bufJv1ghyqnwDTevR5tJiippHJWVCCk5pCWWNjiaZN8GfF8FEmCKcHdkrt",
  "key2": "33vuBeNGDfwkU8gWgUgo74xrdPBxULuw3QV6XHbSfW9cC6kp7ZstkwAWkHynNw4ocasThaqK1wULnwnaCRGMciud",
  "key3": "2hQREeuZfhTDBLhgTYsMXKwcoSChBuVQSZ9LH35PDTGzC1UjuCDTM2brQ3ujwiQhEbYA6JeJzSwLwscdNqitXK94",
  "key4": "88SnP5zbf761fyaLWMYeQprEXBEkZugjx55wDALQvRMPdnMQ4HdhUJoWmh7gTX922Hq4hxiRQf8AdAkKsDmrJMd",
  "key5": "J5WTLbVempK1qkZYcmvX8iCK1UU4pVom4wXHZwZSMm3S7xWoXMKTzjYCWYxopD74VWf9Su6undrywzp9DLu6H9W",
  "key6": "RjHLTUJ8Lft5hu52QWNsrib4umjNv9ptUnbWvCQoyb9PktCWKKAq2kWbrkTRbXrSG7sXyLPy4otxjc8pUKYY6ka",
  "key7": "2EKYTuJsvZuUHxkNqRV8o1gh88wJG8WpuHsCBVgxJkRSrWp772pSGSeYToXoaUToAq57vryxWjffucxBwW6JgYoq",
  "key8": "m6jzVMjgpMrWNYGWh32Qb7n65ezDdoVB1qCScRY7RQsk33Vtfh7jn5uFuyUDvMTU2V1XcG28Asy6ZUkAzkRDCPM",
  "key9": "4hFSCQDYA59SyWHXyJHVp8Xs388Lny2DbXrJTmPJVQYsnoT5KUuJcNdArGXzyc42hcCKu7ChfNw49mfsSKU2JkzX",
  "key10": "3TXgL9CuUYzKbmhjkh47pyfWhvrkNvRXqPH4o9FdEhk5Hao5qgY3NJWXCcuXAoaybgKh6tHKZ9AspsLemnCvJWRA",
  "key11": "5GZJtJFkn4pNC2aTs3JzbZGaa1Sv2nR4cnu3AWTzV46zkruuFPo7d2bzJJgmPXXwGsFB3Z42PugB5WX6VtwkYXh",
  "key12": "2oeM5mwngXr2PNGNzkRaFnmzvS4pDfBhmCWrxJTSRPyki4RJHVKeLKF6bhz1Jh3QZWTcPPd4KAKYucaKKmYMnwii",
  "key13": "4TeXznyhV1qocns1BbjJ4UdPCBjG9G6hgUyYSVne63ZPDxe57kT1P6Misc3x2favUbsvt1DrjvxpHWsEqQex9V3H",
  "key14": "U2YV6wtesoqYSEfoXK1x9wH7qMc8pdaHQcZDtuegTkWinqLxEWdnQD3z68o4rG8P9KkT7Y2FdTYhaCdREMP7j7K",
  "key15": "4hFkxYC7HxMjQeeEEn4gtg5XfwXLB1jbfbvwvMaWVpAUgZz2reyPASs3TrX3bpHPoL1ywqfQALQNbxHZDoCvdbRu",
  "key16": "4pgXPiNwURFpwtpdkAyPR7eggJXvBALMhsE421oP4MWEYnW4PGeiEEqoCqUHsDiosmw4YpRbecQXmZqY2W21MM4Y",
  "key17": "33CrnU5cEbsKhR9ZSDsSZLe9LzZnFzFwgh9We49VnL24bvuzdbGvYymhFgUA9iB3XLN8GaJmnsBT19z9XEdj6bCt",
  "key18": "2DG2FatWT3kzM4CvxwPDZtr5pCAkKQ9ACPj4KykVDZfeFVi4rkvNeCh6p1wJAb1eojyy2YGXCirVzqxEMh7QdWeh",
  "key19": "4h694FNBd5GK1gm4ja9AUQa8wL2UrxuvD5eF2oXTpAqn5AXsJKpPM11M8P3RnD2PQFiHKND4SdsAxLpk924qVHBj",
  "key20": "53Dz7kHbtSToHcwtD8aCdm8X5fyVxnnsbkqcpySg5GRSsSEauv3mRL4so9Mo9JVtpRMXkwggesXZLzPYj6tqr3zn",
  "key21": "3RwzcTdD1oauKm77g1CXqVnnvMAavRGwxfJ1oStsECNXuthkuYw7a4cLETCwTh1sBmCbnXUKU18auLhrvMrDyRaC",
  "key22": "5ih4468BRg7gQrE1578YpUxfrAZCjetEF9N1786kpGjZzMHq2Bs7aGDUkicLnAqvg2mi2VZ5398JeH341THRf28M",
  "key23": "5nAp3v2y7GpYvx2hFw8AspKagfWMFwzjFcWhAix4cJMGHH3rngBuAtauEn6F3Pt8E4mKu1XwiFR49HTsHVg6GJ8g",
  "key24": "2B4TS4eMoDg7VqZm9BvBEkNmWteDeq3ew5hsFfPGCn4YVNLCJr3qAT4mfXVTCvUtvv2iEJvodnvc3oa65XvSpEjK",
  "key25": "2za8zMk6gL33HT6KLnY7WrvrgeSyWEzgfrGirgkyKFHcvAuCn2S2SvDEk2B3NzNggbtXdu59pa87kaGNVVFW1CTH",
  "key26": "22TqmifmgibJ7BbDHtiHsE5vSdg9DtidJirANTZUocfRWNXnyJVUAo2s2HqamrCTqHqdWiHtzuwgPx2LEYY4CMSv",
  "key27": "fDNS24rRzob221cV5z74SbKD2knUgNFxFwFTFD5zTf9wpLxpHxP18CiRjs6XbtPUALYDUvQcGdtTXs5ya3h4G5N",
  "key28": "4BoGLvwePZ6wLSuKNvHtHQNhd6RvwugaZsY5jjojn1VuZ4ixQUJe1QEHLrJYYKmvWqg4R3GrPHY3WjPVTBNhfnAQ",
  "key29": "5TLhU4BFDuuPf8TQU5n1T6p2zEdS47Aft2rwJDghzQyFyCfztJsUx2f8kCZLGirdMxScQ8YZneJZnMWYn4HivDz1",
  "key30": "24sVAUg4V2ZsokJKTgWXR4YmSeth3agvSpz2rknqrnp2zqb5XMQd4Wfzq3DR1yqpaSd9tqQtAAVysRR5biQizxgX",
  "key31": "2ebucYxTqVRmYgsxJFjn4tz6WJoFAmiVuSGDdp5VG8DnXbb9F3TEJyvZRFdwj5Gd34xE3EJG4VshvcLLgVanyfKz",
  "key32": "4pAPwysUXnkrBGk7Qh51sRgZPeLofJqWDzvVRagCWLSrSKUaxisfMvN8jjUgAouoN3BJWLexodA5pRN178KjpeBt",
  "key33": "4nKvTe2xRHtJQLxkehwRf96uB9THkPBJFJmGHnTMBPGnrqdSdEee7xZDhTEUFRzhzpw5WE7oXL4zk4rWvFexMmxo",
  "key34": "5iQsBV1MtWHAypZRrQV53Bn2FdsHhSev1jtANggncB7rT2Nsy9LxC1aNyH6Sd7B2mVLTVC7pxvntkbb881zUZHfw",
  "key35": "5t1UmU8frf3DXQCHyEV8R73PkwPdtSE9hZnF6FpBgJp2yh3gPkaJCyKJoRJSNRvAzwdxQYMenMH5m27mvoDzYFTR",
  "key36": "v3V6HJcZEiKzqBBM7iiwhjf1saC9Biq11KCLS3AoFeb989snT71G73x2C46j7VjXmjndkrkQEjg4fevxhdhApUr",
  "key37": "FrSEtdrbafCCUj9pXQM9N8GDGVTDKScYjjNLixsaXjWF1MiZCEpDHzw9FBj87DZTGknGXbaRy6wDgwy54rSmS68",
  "key38": "4KKLLuXLvd8n9vrmn2bk4WGFPoW2Lr4aCbQbmh5W1azXcmvHprL7dCvEDpbfPBmktnJUf53RPJnnxaUAyFsVYiNU",
  "key39": "2Yp8HSUJGZWLTLFurbc5PfC9cRCnKiLkoiSru9VTYV18DGLr2F2YV7n8TEhPZCqPDETs4La2pZunsyKNAFHLHSGK",
  "key40": "2nJwm5Cc8BSDhT33ezko7z1dEx1gp9QYDySaRejvBKzo7rPipEFeUhCM6Xeaai74m3FCSxsBbc5gfWaff13nWHcH",
  "key41": "vKieWG8UCCkxrVpm8ypKrNXjZvAhZJ8a54cfBxyQiWvjLM5YNmwmur9fWmf8LWQW1jfv6S53ugTdxtCg5ZiRqjt"
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
