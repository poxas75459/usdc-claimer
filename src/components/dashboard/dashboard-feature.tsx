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
    "5RFgQMBtKvF9f7j4MN85DHXs9HmuwGqGJskFPbZVMmqwR1XFZbXUcfh6yv8gT2gvEQtPiiad5udg1gyFdFMyGKb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52M9ReaE4zDMPEkSfpvA4GCCZ74AG84VVfsM2PXA2dZqLEgJKqi8FyjodSzqk5hDEgMnD45HHAY6nPfuPzKEPnDq",
  "key1": "5achpxZq15MCP3rWZC963NyZTAgo3rZcic8MJgoqWjSLKn6xnXfprCRyivE6ipgQKLR1GLUPhJtuQSETDrSnjjuK",
  "key2": "61Zm41n3dEmzW6K89oifELvanLnQqPgVo2cZuJseufo6d44tqMDiYn79utbxWihFj6rNFAViYwRATcEt81jftSjk",
  "key3": "5up8eHqgz4yDZngDqEirfqEi19TKTN4eL141x3UbXnKHdE9mDTzrxSsoVQXcjfnuLXauw5Udktx6D8xrMiEhS71A",
  "key4": "5ciic6UZbLwavfZ7MnuW246TZU8imEFw1V44nAKFooow4Brfg9pKdZ4PUpmX4NeBpGMKj6jpwkbDhd3iFKv5BdRH",
  "key5": "3YVYu9KwiLXk3pwSzbGpk7DRmLXbCAgktpbVeuZxQCz8RVRbRb7vG4T5yHjKgc9vYPoDCQ2yKuVMSQ5V45ZUURZY",
  "key6": "4ZHL6xhVmmFVAGT3gXLtgLC7YgpZ4Cjgqd9VD1j5yXk35paUagbacuWfF72vnNPhfqvpqoHZJwoDT6j8DAD3rzoa",
  "key7": "4S7CzbTNgP7bijztgsnmrX8335GSY4t7wLQjHRKLFsSbZUUUpDFDThxhg9hcsSQ1ZuXqUP9KJQHSQFBQYFUKaLSc",
  "key8": "4q28tRaUnTojk1ffhkQLP4Yn1xX2RmPvjRy1PxjUoREYXcJn7UCBsigytqba2NH25xi9AEPGQaM2LQuSAjtncVZS",
  "key9": "5PG4jKLS91rbknQfaoSPEVvDGaRN5fwegjz54NKj7xf1SptVbPRLRs1UFHVFmwuM1A7nqwFaNkuqMuQs4svHMvc2",
  "key10": "2kFpnxeZ2RvEeMtV4GZNkUoMTzaQ2MBVo8LYZcJ97m4jVT1RdKT8CZ16JxTo1ULgsy7zu24GCAbwbdc3Lk5iKGH4",
  "key11": "5qNzUg7H7x25KhoyjDLSJuLPgkRBENjFd7CGSgGZC2ettEVhuYV5WhVLRs5SXehqUcKF9cghoMXoJfex4tMjzxXC",
  "key12": "53N6pRMKPac7nEroE4kP7cijNSzjsXtzmf1xNA7ATrziv9HkRBybQUQBnJnkm5KiSXZPtUSL7fTzeQszUp6okM2v",
  "key13": "3wN15jte4EK9D5n835Xtg8vTA3iQymB2N2z3eeWarLVXhzvbYZdFud2Qz5vGiQ78NzCS58yGJoQ5pAQM19M682ZQ",
  "key14": "3SAAqxYT9UQtKR4qXmLrdU13NvxbNmnv4NZXvok8oYoAxxp15kwFk5nUybKayNtwWqJr6k2UT1RwKePFFE7ULnjb",
  "key15": "NMGKP9YLto8ZChsbz43FEDsAQrHW3yeMuano5HASXbbpDy54Eq3VBZmB2sjicU3gJ8JaiRU3dhGcgAdY5t4o5u1",
  "key16": "3po4JRKqBKuhenCJpdGt2UJ478iDJNbDDkLSXAg7NADkodrK5v8ZYGPZ4NuCH2caCEessBeRpMbvAHa5BGJeq8dK",
  "key17": "26fiorKD2MSh4VwxdCHtW3HgV54eeyG66a5ZXV1EZutmsL59nN9ijmTjAcRSgtBBNfsqbZwAMrSu9aGiJLQLU9ec",
  "key18": "3v3QbGNVuJ5eYPmpN1RSS3WyoeMvmGXcWnH1CKLrWMWoxfNbwpKAqzsSPB9sm6v8LKreRnGBasycKBYHTPbinFZi",
  "key19": "4LkrSq5KsRpxtBfYNPiGJC4rKxtMhpXpVttDEF3u2h1hLM9phMZrY92qKVSSKjx4wfinspkfbfc6aswFi4kCxUPa",
  "key20": "3ZZd2weqqoAZh9PzJXSegKZ1qdSzFxhJrXtuVhXm9k9LG9yxzAa8753miae8kYPyYyPycQAQ2pJ79SSthdBicaAn",
  "key21": "2JcuDR6jFLhhfdMZJ5cAV6ktt9WU8zduQ4bLgi9K8mPKEXuUgj6JGJDQyr1SgLhG6hjfeMCTWQt7GNHFo5E5KFjT",
  "key22": "4T1XZebtLapaFVtxzg4qMKjLrREmC46D3mgaDanbDYbnTC61CywH8uJSh8DBQaXpbhFF7oVHMzHJBuCUzuUv4uX6",
  "key23": "3L7A6gBbtTvsTYX4Gxq9RrqRqRUTx9vXk4xyzHu5DwYu2wkGSHkvmCedUSYyKTe4yTiG8VhPP7hcL8QZLuYawKj6",
  "key24": "5mFaB8cXu18PGzUYE98976kDziD5wVMxJJzSGGeUa5PPe4kv4pBSy2RW7efzapwj1fpEdAf8bS576hYvppcH4b5m",
  "key25": "5xJSB3GjnH8FSNrNzQXQBcY2az2yjC8bQMj9nzCJwKN3KbVpftuhYRzKSScsq5WCeEQpjNMWE1vvz85KzMeKYbHD",
  "key26": "2dmBJVVukKu5NwgJi3wmFQofJVcedfrEkoPcMtLB6hkdiEunpu3nDaGQg6Ng8CoDAA7xNBen3cfcfA91WLLArBPA",
  "key27": "4q915kSqYxxwD7eA5KVEcfzTuBtsVtZ9V7xTxj1kJmNS9nQCXdBXRxsccZbqtQvJh5DjaqN8EkvhxD2CdVL1sE1i",
  "key28": "59o7fjtP9oFdnddpV62eo64nKM253P4Ex9YQqKtWX9HAaDh4tT3g4hmspcDMdbgM4h9aHrp36xxE9aEg4wUtSB4g",
  "key29": "DVCbou1bQ4RUXYDJfthGfDyeagpoHRwjzYGexGMC9AkqUuRM6FwSPDS7V4WxnMLWAqr6vqJ2BZJ32VmVqqdvt3V",
  "key30": "2C7stgZKjCfm9qbnV4faxqNFKxnWhRuru2j1b5SctoxXL4qMDxAv3Sa8KumToEWY7RvbX42jxYdZ7KhaCoF3grc7",
  "key31": "2CFF8UabrwFzxyPr212Pgzzsvb6ER5itg66UZnayhe5SkQhf3KfwXA6AFV1CPQqRgWPdbarfEy59Vo3CW3VGsMu4",
  "key32": "5Vb5eoDdR5ZMP1jzUV69L55N5Ko5uebrxXGvhhm58hQPLbEdg1jyYstnQf2SDanUGSfLJ9PHzawLaZ1oCqNzeupK",
  "key33": "3H3RXVUFTSnpAmh7JnYPh83LiHYzH4YhYzpVrXntEnp4LCpp1Pk9edgVcf4H994hGkz5iYh1Ncc82fA8nDyqbV4i",
  "key34": "3bCpSRw3ToKpSp1PKFHUm4Jv216RoEQorQqdoSF9KG8BAUiz1tf6P9L8bxWRLMcfiVjXS48WqrBi9fCaTNHGfgxU",
  "key35": "3kagNkzGCyPRE19FmyhUUqmiAbJkKMWHSJEiFTHZnxC1mwMUDqxfCd5PDwasWe2MDMJFd4YGXamBLexeo2qZbWGs",
  "key36": "2yF2cQzeBWfRX67Bc1Evhk6Xr27Rg7ZWpnebXopThaFKF6NX5KnMr4H7Ge6RT2omZXUaZFkBSo6cFigR4MfauYDk",
  "key37": "639Q24X9u3LhfgtDCE8JVenWEzRw8QV8fsoQeo3w9NjLUPYmaus4peiBxhxG26Ds9cWD7DYUDcED6DNKPpH2o9ox",
  "key38": "4i4GxMAQDwripckq1mAWcFMp1z7ao3gsmv93yyBt8jkZRrwP9tGYY52hJzwE1oo9P4q1rp7Agog62ngFUSRikqgL",
  "key39": "4gAonYDenjsHCvowTmmFbPh7WMcMdCFGsUmVK7pMDTtqdPbQNQdTNfaGhGdsCwkCk1oa125Btz8LsbAVCqWLDTRZ",
  "key40": "iv7HWkwNxSXrFT9ggAkGhSoNRAKbdXXu828e3gYQ2dEMuosJgxTgcX6gFus44p4nLqxf4C1QurfwoLjx8QQePJC",
  "key41": "3UgzvCAFXcZEEN9zBPoTK8QJ6oz4gDncW1qJFv5mdt2B39CswQMgyLwGLoiqwMytw1zMK1UWFzB9EMSj9GBx6AZ9",
  "key42": "4gHcJHN4527QFePUnoHjH5DBqta3uGcvxuPyXvT8cGmaUNx13RXMCQtrQN6K483DwaetyMHzR43QnDDYza67RmXv",
  "key43": "5G8hkH33KrAwNRMbswXSV49ybD2Gu9n9VXqT4FzVbCwei3h9GA5TZFbnY3U7ziSXDGB49A2b1y2DFt65jAhMkT6c",
  "key44": "5LD63wLMt7qvhSvKuKXPWrUagYfjMsrBMauiQUvBMHvKY8o5dvCS9m68VcLPVR7Dcm6qhanv5fNuKjut5hx8vwkD",
  "key45": "3tFDeDJX72up6TpQAaMGC8bQFN3gk2dR2KQwjZ8RwK9Yf8py2riWdZqqvnzezCVeYxrg9eyQ6fCc1WiH8MNcisZC",
  "key46": "2AC72WR1Cq9HfJ4dpsWRFFzToqt1h6awtHBKZgbjvwpYDbXQzuhrRABTp9JbijvDKe7dzo6MhHZMwERsr3ArdxY2",
  "key47": "4FVMyyRNwjWXt3qHLfdsSzHYNcBit5BT778kCAuf2nqUY64j6YJpnggHHVMobaEmFHaGgLKbqHWWyWrXyDNagvHt"
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
