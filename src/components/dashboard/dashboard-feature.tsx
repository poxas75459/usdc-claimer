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
    "5sc2THq1qUNJ5TtpEHzv8GQEhtQ6iHsdtaRXVwiub2a6trDGmF1rMEuCFpc9szyuxAkpS3opKUuT798QrpEcTZXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwvRVbByzJT4oh9aDUrX6EGPKNBXcNPa8MCwRMJepooCjVi2YQcRFW5VqMh1v8L9Z6bAC4Cx2Mq6kpWp3EqVpq8",
  "key1": "38MWMS7hXt5e5SVbVmM1ZfLkStDhgKnkQ9LebwLegTZRbRqoHYo683qzVQNXdjn2Wp7q2fgmprq2AhahG47FZyTf",
  "key2": "3m7vGgtqiLbf5Zm1wTAEpGboPZebvmY7wURWVLQGpq74k3FQakJZvXwP1Uo1UrNjSUG3vnSv4VkCj2CmMJP34rDn",
  "key3": "38GL7n6gvjrkX65mK9yY2aYpP1omsn4QiS62fHvca13jA212F2hZKtyvNJTR6itzbxSDJAXXPnLD71A7nchMjMhC",
  "key4": "65RgNWwy5ZywtXEpArCcyE3wTLWC1giMTKAkJS4xRkX8uc6JjxsNp27oHXeH3rfGcC712Sg4U65QfkQjR8V74caw",
  "key5": "563bQdoHvm57odojM17gcbTsiVKsXy8yXdM3e9SAzc2cUmTEwBxSgeEw7h7zMaE8eHYMiHW8AXCCMUD9fZnBhKpj",
  "key6": "4utrFz7JdmMJuCdxGZ73r4mRVfkdeqw8EjjjShVDMRx7aNBCVeF3UgHejyCABJw9Zb5SVowzesMvxKHr4wvGtWxm",
  "key7": "26uEg5aDj5Y2AV7QrFFRn8utAEt8eQva6rcbYCza5WuyxpETqVcUp4hb7muBr1SaWYM7XzWuCJPuYah7JRDFEfqp",
  "key8": "5zDoj1ogcNQ71YtLyfvoKRLmmHET82hgTU3HnL2E1yUScCrTFhwFX4UQCmiZZLWrJYrWqsviHx6BJwnCsMHGRSi",
  "key9": "3VrHBrCF7UZcM5HqBPZDbdd9Agsn9HY18MfQb9TSTVJ9UDmoRzkakf4Kr5kjYEMxvWSMtCBkkSF1Kp2pnGT27odY",
  "key10": "59dEaz3ixh19Pj3Qzi2hmTCYvx4icc1yG7KpWrGaEdSi7eteYZRbdRP9T8o9SECCawv4Hj8fRqhRdNz3xJG25LWM",
  "key11": "44rgVa6i5pCdfWEvzTAUMh8Ti9rAFjh91NXQMTBpSPq4UiPAwW8CEJs2VQMGF1nbLMYAHhZEa2uc8bfWhTsC19SM",
  "key12": "2vWMDvh9xq5QWmwf6QGfNCX3JXxL3emojiS48bj2FpKxHkGUm3UgQFoRtPvLScfTyMZ6pU5tqMEqjG21o1cnBvEx",
  "key13": "4uoXi31PS8zc4D7xrzLZVy3nqssDJSojEWPQneNmZgCvCyuSrgPz1JFw3B4jcCrhCTYVcBB5wLEGnNLjg2CtN4bZ",
  "key14": "4zozaxMmt5qMs8cPYE6iVabPk89HkTLwERU5gjhQoKZveiVP8j8qzPcTNwnGE4BN46Znqm4Djq33HTiJmTssu2mt",
  "key15": "3hw84UsKu3wDyBvmLvBjhAoJeXPWmzoFSUJUPdfA2o5BhWpvzo1cWCbof9jr4t1Wk1NvxBa9yfTjnUQDrzV6XR6B",
  "key16": "5vyYwcbJjspY4Fv2RphTHAzB18kbHSRFdmbyjm6TnVB82o9A4fpofFGnQSFmgoL3vzSHyQoSvLQjR9PSDuQQcDo7",
  "key17": "tXJN5FTJe5Beeh3RYYUGXu6wZWMgBQr6tUcsamFhzwi86q2qgUcJCVsvMLjgEPnTz4gd6s4R8veAh8B4DHaM8bx",
  "key18": "4KxtpQqEa2y85RN5Y4y1JBKriJzYreVxZZe2v148xQmpsQXDwUXQ3KFMHeG9DA68NWHC4Nbs7sgeFYVPgZBa9pki",
  "key19": "oka8aHP9J4JikmCj95LNmtsT5JTUGtBTcb6kdh4ztQaPdEM1FW9VJK6TCDifAuFACcL2vCijS4tioyVcufYwHFs",
  "key20": "3UfTFn2GCJsGuT7U6MfN2nYs5C4ByK9rv4RLJmADnPP64bGBvYr5MkehdqDsR9hxbhm4AdxeeBJ4RRvHJaner1Dc",
  "key21": "6ZSkgCAQ3YWB9hUd4vK44okiP1JypGywjFMvdFM6GxUweanAYDvnWLvcVhP7CNtCKVqiBAqoGPCUN6rtZYPJ5fF",
  "key22": "2Td4cen4cRKryqKtaVsK5FGSVV4LvWbLxQ7kq7RaKaJsGGA419iCG7Z72as1vNT6cZH1bkXAzZ6RsUGJ9nyBbcNq",
  "key23": "2nGwGG6XMiws7uq9ZxsCiAkcgh5VJUeqCGZNXMTRcJ7kDyWwrJctKPbGGUuRVpJvbD3dsRtYekGhN1r7rUT9kqh9",
  "key24": "66mio8AWG4BsdvY4h2UWnGVrDz5Qgz7JTomD62b6PQhyPpL5CaCg4vngzmdgS1pAR676tKeNbJABHH6hK5zTkQWR",
  "key25": "3FdprCL5E2iS8SdJGK7mePTophtQZHRPA68jS8Aa4RQXQVAWyQNDm8PNXjC6q5iFJpUbEeyHsSwU6eheDkjxPGcn",
  "key26": "5K4otUfR78nvjjkiT3KPWRcoxrWrtDEUuhwJ7WGFbTeMvE1MGbnyWBkSuBiyXSGm5g5q6NuzvSDzAB9tFjXHvupU",
  "key27": "56jg3V6jvHt25Uz51P7WeiyqDuRkMdDSNa2W2uwbhwkopfpTm7j6ahwtiDiAJ4VLeAccFgjVanWqnkeTB6eyRAWy",
  "key28": "67ZzBpHp1Se9j8NjBnnireLrqedH6U4m8rBBinyck4CvP7YV8ks6zGuZ5Jq5DcT3VNDa4NyxnRiZk2239fnqnbgr",
  "key29": "NKjGKMGcUCZatnC7aM2cfx1uf23uNoP4ftpPVGAAPjbiNCDDCz24o3pMccRyNDxcP76bD3ieEj1Nk8TwZHVsVvE",
  "key30": "4Lznrzp8BuCg4hATGboVc3bArUAbK1JY8mLeXar3ynsqsLZELE5bFR5SCnzCwjpJXuwZkPpq9e2jk5AfZJvhUMFR",
  "key31": "3LgVeLtua6xp8SF1M5eia4FT227au3Q8vd8PohPuGhswkMxz8qYukvXFU1vckdVw7cv7SYUvqz52im9PbFL3dNBr",
  "key32": "28Szi1AYqxY89KK2iJJpqYZ1uBrdNcjBNB6L8kG1QtrVzPTwvRrHcPr1Pq2MfcZF56kzorb8TBKYmjEFDvm3d5Ee",
  "key33": "29GafSVYxEL4GSXx9Yb7hqSGNCVxHFaCmYkN2uiGfRYZ9WKt5UtiWmfC379ioxpBXRUAti46NXLgYarZP9JVrXzZ",
  "key34": "3A9rTLMMJTpdvn9g29BYsPtRgthLDUK8fsc5YyJLxqVrBUNAXmqvitxoGkNsPcQhC5ffMLKpv3LCgaf7VNaGxHLF",
  "key35": "jZJT6hZt8fTgkgcRvjBZuFR1UybEdquUuLjz9n1iSxBrdktF3SuHxsUsLKJpQJ3jdpAUUJLtgAWcCYVfjP3cto4",
  "key36": "4MuRotxrnKAwxTZDp8oJDEDbXTbsdhZHAfr9scYFKU1tfAJTgxxoFhbAsHeoro7TxYeUr1S8XjfoYodLRboTcXie",
  "key37": "36Ew6SMfzVFjUxVdjieCq41Hd7PgjXbfJQr4xgN5GcVP5wTcMvXStnAWzfwebY8Wn3zhedhkBAeQDCMKw36dxJ1q",
  "key38": "2sX9ViDZod7hL4sisqhojTYToSjnu4BKVhFys1JA8QRFAqUxvobFMzsCjsuBCNF8QM1BfiNYuDNngD6aTbwo1RNm",
  "key39": "4LYS9AfNA5c6YhHyBMWRiVKjkJwjeovG7ZCWqk8917KPr3t4RQGCDgFKcWF2w7chScQ7QidkhD1PHHTnN1JXXZTf",
  "key40": "6JrjofitrcSnCVyQiySahXu7YkE5AALnxmd2pAnnGuULYpmCbk2vYhpwDANmHMrGc7bz5mQXSjh7WDwxRrfS2Zk",
  "key41": "5SyQXGTXjQQQpTSHX8Rde8Js9ZZbXFFickvMhbyaNZYGxpnmYDeyUW2NM65pT8AMKkLGkTbWMQMnXcQPJjojHKNo",
  "key42": "2TyLFiVgRu1Hmgsp94EMGQyobJj2MKWh88KpfAVGW4ndVpdNW69TZRUkB6iXcSLqHfYXC3eFyi48W4wcjjdMEhdg",
  "key43": "2tZK6jvmB6c2LDcLbmSuG1Ruaox9m3tqci4LJB7Q2qSKZJeUn7MNEfZ7gYwwBN2hhWHRq9j8zV7kFbUosEJv7hQ7",
  "key44": "5bUmwBsMRju6CPtwNAtQqL2hh7GXpnvwTteanqP9on5n1tY8oqnUmiSmwk3PCvrfjAHWkEcJrXAkYt4P8xPj6DsM",
  "key45": "5jRjdsRrn2HwxbZfsex4eihfqSqv3mquQyDKaCspZ2883vSwn7cFs3Yei8mGvNkH5erkGRsR1XC36A7ZVtosx9Yd",
  "key46": "4mkKj2JcEB7bHjruuSRLtc5FuCxLRQccbMLT9i12TrQBAvCEseAJKDTbRChusJYNQ7JryfYVCpmd4uSXp4QzctXv"
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
