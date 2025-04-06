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
    "5ZLRUtEgydDeWRjivMZwgDM7VxYbVjy2uUdHsX4YftDT5aBmkF5K2V6YtTCNFrGcDGpsCjVpdDBrMcisZrCMcCxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ncb9CdbSbmYco9gonyNYBXuTGF6dyndvh8ppjJgyZaWkTowQAD7r8Zcznuba7atjM8fZkpFzRjqVYWkw54D4eq",
  "key1": "4AGhKRGK3trEXJetzHEtbUU9XYZwetMPHGrtanXuxrbX2Lb81k8hVqj8xcvqfibvsYjzEQX24MdCokGmJMBywj2",
  "key2": "2czAWMdwQoS5BU5nReAwfxg6Txsup6NdJX73MukgBKcvyLNJEaVgEdsz3nLgxmGq2Ff3nnR2j4vHfjmF6aQdNd9J",
  "key3": "61atf2RSMbEqLzxtWxk45BK6FceCi8fk1FHSARiSceYHB4RASnkmz8Scm3oWVExXudmyrghiy5nGZPJXnr4GKCLy",
  "key4": "126VaQGWMoqKBadc1be2n2RDeqHGuTpNm48LN1BVTy3AVLMNn3NZjdcTehHU5KHoRaRkHpoKfaZvw2TLDLbXmDK4",
  "key5": "2bSbThhkrFLFZTEZEKo1o7VMd8CMup8xAAbYxGoHHdEyrvKGfVQsAN2shu6LX5mrfmAUcmgX7itmpsY7m1u9Zepk",
  "key6": "5z3L8gEwpeFuz8yDcAiD78V7Zn757mR3E5euZqZE9U2L8aXS33uqEWvu5f9eaNTmesEGYZcTNhD9vywUDC6xGcGk",
  "key7": "54MFN4FbR81WYTvhKxXPzVHNiVvT8DNvHqntQZK47Z5bFdFjtMNNKzQTxevrRVKpx2wufsyNv2AWUfGwirbDgF4S",
  "key8": "5WV7X5TehCSZVzvZGtRx7ToUj3HvdMRUTqSjYjmE1VGP1kfonKCP4fasT4vn13EUz61ntcmdfRGJCaK22ZmYVmN8",
  "key9": "4QQM4J9pBHaQ6Go5vMLRjhEUDT8jTE59LDaojZMVqmCFmWpfSZegphAERj59v45LQzZo91yUVpiQcmXNUW9yvFDm",
  "key10": "2gxwdVHmt4HDhuGX33yEZfTXAs381cBrLuzG1edyTKRpJimyNN2gVpWsvhod4Wz9Hkfrssh8FmGuNK957QodhDkM",
  "key11": "2jETZdMJdVUyeCTExXr7RQu84spfQ6xBoHZNcXPVZ4vwJnP5re91Ae5nmm5n8BLUHvU61gPSzxHruZzje1vrfp7s",
  "key12": "4dpGLDro2Amjqh96fPGfdCZw7J2fudWV7KitcEsyE1BacSdpZFUL6RqfQxhj8xiWHLEcvjTeqTT5KrxSwQyfLouL",
  "key13": "2uY43n3rQbVJDJmtM7Yaj1RzkJppWzKsaTieJozUWABEDsNTqvKGaQ63cuZ4XuPdv8zXeK3GbBVraLy6LQFUsuGU",
  "key14": "4dv7Nm6iBrdzCQVQ1ciRkvSnw79DdLXHRWT9NvfNroxjodfdTcfSzqu7gqKBWTjFDngRbvnEK55atbFDqwGKDDbF",
  "key15": "4iPM6gcqfdDmEPN1CqTpF5oMGpfRwmrCH4GEbhRBu3AaLRe6yUu5BhdqoQaKo4w28uskXuHNZiMu1fSHYVcosh8K",
  "key16": "P1pjpVC9J6TjBMZHT5HunWsrAowouVsLP6aBUzfKNftn8jkzdioxtraYEHM6kG8BNniLFMm3YDoivpuWBhNWHhd",
  "key17": "3KKUXmNDsG1YcGF41c4TVm1q1U28CZ4QhkJcHZy5BnVgCcrQJBTbt3TuF3nAynjYEonAFp1zdngKp9FJeFZNyW9n",
  "key18": "pGqE7VbW82CUaAXWeDdyE7Pe8vonZP3MbjmFzinXV6wA7MgywEThwdBeXt6Cx6THe7V851sue3Fi7qxBCQmADRe",
  "key19": "2sDyS4ASjosZneAppXsaLPy8Ka1ax6ETPt7XyrCmikrKcWVrFPw8unsu4P8cQDDCZYb5uFE3TEaqfjpb1eFGFCHB",
  "key20": "5hCgHgJemZEqet5JXUJ3Z7qr8vEu85Z6piyCcWVtHraFFhVyCHyDaKZC1T7kqBAH3Lqoqz324eMV57S7CdzVSC4Y",
  "key21": "62BmqKCttqdoWvbHkaN9b5rq7fZMH7MUZHBuyRM3jt9ST9TiNZ76uwjUTna8WyLN6TEcj9S6EU5P6CrisYWi2YFd",
  "key22": "7A1SmfW4abqnySjL8mPgDhasJLhKEvCX79vbYfusonBgLgWFEaXtNSQmBD9RSMowY2FBmEzUTiokaNU1Rn34Lte",
  "key23": "2KDYAcExyGSncsnfAgy2e7aBPHDv1cUpLFvfXjAk4preW2MLV3nDu9weQM3ckm3xg7acHVSRzonhCtiz6sgtqKY1",
  "key24": "4CmcvnqUGMD3JU5jBZCUTVeJd6VrgeFk88BBc96Lx8sGwEdafQAFWUFHy6XGck6UUJ9jjTdoM1Covzv43V7UrhWR",
  "key25": "4aQkqb3FHZficBtUAPxZ8agn32xfMfqwfLQrh9jgkAn2H5x3zzNWweGYWhHcA8wv1UvRHkczmDGUtP5XStJ5w4V1",
  "key26": "22ZEHHRR9iNEbpVGJXfrfBTEx9yiHEY6GAc55bsgxdA95UtqJkkZESh1cFpUCjr9BVTsrApWCy6fbM4QumezmTQ9",
  "key27": "42QvjqDVrNTc4JRBVaa6S57J5aR8B8HeAdAfNqpPyhw3LZMbuF6iWqjqySXGP6HrKwL4LFkxGMUEQkNkno4YGSr5",
  "key28": "4mEyio4hrBqZ7uFkqU6uJ5oSRon7ovu4mJTJedZg35So8JCCTaUheoJSp6W5bJCPc3HhQMz3Gjq6ECXZjfaYdR6M",
  "key29": "365Goe5jknjwq8Sooearitm28GkNXctpKAys6q88vKSVuBDhrtx675kEriduZKvbX9F9VrCJkUoHCFd3TXn8HfqA",
  "key30": "2wkYLQLjgJr66cgNJBZXVZzGYmLeiMo13UzSFq1xu6VPJXrFnHaFC7HHL8npM9j35PerHGgRvMjum9eHcbWzz9e2",
  "key31": "3Be4xaMgxJaT6og3TxnZ38MdWbtKJB4sQ6vpN7Tez2oKyCLGnq83pvWNPi3zxC6SiNp94T3gBuTnGAvDLcZ7efTM",
  "key32": "5hubW54kD8kvUMTeeRjwwqsNvcs1nFom5qew97APkAAy7ySxTLhTHL6ASPyPAzuf7bB8EZgYRi5V16bcHqyR5NSs",
  "key33": "3rC4vznert3HCBG3cqeY8pY1jeFhBcQff5FTmxrQAsDWq1s5Qdj4NkmYPYVVNXyKkxL6dPgXrDEBDKBhLcRwnsoD",
  "key34": "hCdbmfipTHbdGRNh2bd5mmAzut62hBtFHuVa7M4G8TjyPPsgc99SkV7yMqSYh5XbiZKvsV7NWh2tkVfekfsXC6N",
  "key35": "5QeBc9eLFKK55vsnh8GRkKsPSfKi4xENowmg7RRWz2CkLAjhod1KCyFnaA5wnkjnPQuvugr7YWT2y6bta2G8qEFg",
  "key36": "44pxGU9PV5tiUR8t4qBEUXP3V6LegF6Ap6CNWHDvbT453o4MoSJsNwUx4jTb8A3cFkLLdohHShcMWM5WgnR71km1",
  "key37": "5giq5UELCgce6L3y15yJY8RBnEv7jQmoGnpmVP6FZCGfh5NfuQrUsDL9SJTeJLMp2YsMvwjX9XtxUddtM8rtW76e"
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
