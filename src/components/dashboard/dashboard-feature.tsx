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
    "EER98kR6divLWy6k4MWfNsJ9WgKeHEdNf3c4HvHk9rLHuGTxYjTg8bRt4bGZ6zrWa6ZQJNWTFGp39WEEiczVjt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "591NoQ8Et3rkGXoVLKCdrBoPEmePQr5Qh5DVYVockR9mN298nGUsKCAeWez4ZufbtwhggzHJFjQJ35kBXepgukEu",
  "key1": "4wXaiF1kYDSJUEeeT13UJ5aGmUHiiP4gwSsqSsmEt6FsGaFyUf6Q3oppsPNEJLp8s2vLkPxSBxKzPs4DzuTxdgYC",
  "key2": "3Jcu6N9QrmyBKXuAQN9Mghw1QeiWZvxFh1ZifcuoazDAj14aH4UwmKjwYSZqexYnStusfyZVZPSxMAexCePjGVLQ",
  "key3": "2oyLVtQAvHDkNrX2BGJeqKcchnJAfiN7hZx1o6WjEVn5LK8N2VVfHj1zvPxJnGNwiVyfefdZtCvbxoeapE6oPn46",
  "key4": "4JAnEMRoVs1smBvUW9jZECDKPnHo6zLGSKHgsEuScfti2g3eizagqEXQdgBpEGPCmTN3uerqLdW3mtVwAqHKzZDa",
  "key5": "4J3PpjEJMCj5dzhfjpaUkkiNevfy73gpdK5b7T4yGW7TQvJNXXM1nt9UwjQSveFfeJo89YbQNCUbYPrQxYePWApw",
  "key6": "2XRNGq8vRoqUJkVUMLMnKq7ufC88j8pFCGJJwF2p29M1xKWZUqBEFsq11wCmXT81eRB7rrPpB855JwfHQX4dXrTe",
  "key7": "4dPi5X3LUd3qNwxwB9SHnWRiTSZYNeUwsH382BJwiMN5Dn2cmbYB5wKRVVQBL94ZZAcF4U4PKKuEMndaA232AQr7",
  "key8": "3JdDWvAqoBJh7bgLKeDiiBWTg8fvxeNFYpBwhJ1CS7R3cVkydN1ex39ExhfeQKhFbuqx1tdRv4efP7cZuM2t11JC",
  "key9": "K4fVUJ6fL1UeB1uFYyyHgrrFFMMvKx9FCR55oLesvdNdr4WjUFbTMU3aA2GzS5FWwD8SoE4jR7ZtPRS6TPaUjTD",
  "key10": "4sC68wAcfSbQnGnqHYn1SJ2DWvPpVrvLN2MQXCqSCuDYBjCs9tD3sNjpCUNytuA3TCZsgmvbrySHMbUcopg5zWq3",
  "key11": "3Kco6dh8SW2Dmu9riqG2CRb91qn5KPcmWTVumn8HUt7YQPyuoH7FFbzk8LtPNLBXhMe4o8Tc1isKDvgdpBXH3yYB",
  "key12": "5r3R1QTFRG9ALwSKQ7FrybWcfZuPaJzwnMqafomugZPEp7oqZhTLJB9xVFjd8KV5NyBYGmcR5VXF4ReQDkuMHFnh",
  "key13": "3kohY25RyuZaUcZrmf3KbJcyxJvfX7QEhGdPthW2XzCcN8tq5UYXE2mAucpkq9v163hEs6pgBJ6Wx4hCycBue4v5",
  "key14": "ZNciBBr3fKw3M483Y9rNX95L6FNiFiAfpU5NXKkHBLptYQEWTpwvTMf3xqqsrD6CJAPabWRX8SYAvdGLpCpGA2n",
  "key15": "AYTTos8zw1sgC1Md54FMA1bHNsLB2ya4GvAVggFJfqDEwPU2fZzxQnu5rwAL2Vp6Sx1X6seAkyj1Lf6ukyZ3hCD",
  "key16": "jdaUG6nTRNB2NukLqvmioe7bMjh9vKVvxXZ3urkYye5xb95pfnWXqrkpnorTFRXCBZcLDxPGmLdDAupG4WgbfmW",
  "key17": "iX4BUe2YxWTqyLQw5vC8UeCxSZ3jeARHpgzxPSr2QNGYFh8ko1oLfTSpUmBn7NNEEhzQNKb8ZYHGqF9VqS8mabx",
  "key18": "5sfYnyZoUBmMjyieN7QJpnaQmGRSvvEEQZDuTWiW9s4xr9UXZpcDmXyzCUuXcSeKTW4gwKLv6LKT7mmPtUPaRk2E",
  "key19": "4dPjSJrfZgBdPBRELWu4DrPp6QriRydiruQayixonS9ga7QJi21HBSMA7jGkbKFoiVVaQfZA835XKkieBi3RzmCi",
  "key20": "2vpsbrEgJWyAHb45zsgGJtqndxzyJ5gaQeVxHTqdqWXnwBU7PpWb6xxoaN8Eq7KY8ZMbG4wBKMbdMhZdzKC3JkBK",
  "key21": "5xTGfAu4hV4WhU5pedZgmDqK2Jq9w5eTEHAZxsQjiThYkhWG1Pags3WRSfZmZPUgRgYF7zjNBLkW7PKtwSqbzLJ9",
  "key22": "LSkvCgA9VT1tuz9BX3Xv6jDr155jZYSDhc5gwZ9gQSYpTQ1ed9Lrc8aGJ1RqiRx7WyEMBvpyRSmdmoDXN5v2vgH",
  "key23": "4kWUmVJVQ9oJ31UDG9nYC1MnXvBYa3FZthgxjq7gcYhWt4yNBZ9YgJsHb5ZGC4aThFczEYSAzK2Q7vLuDSVAc7En",
  "key24": "4Z748beFRqmRcYVkrjiHGkvBNAz7rd7Lub5Jc6QDyKHiFHZhDDUMMBVgfw1Ji6nSBgSQCEXnWmUTqHypdbAMuxjX",
  "key25": "23vHLG5VZYGomVsXJ54ceHS9DTD3ed2TNtEfRUhNzcTarZTdvG9dZcxPujkDcm4x3zg4tS6qsd6Ci6uyifXey6vp",
  "key26": "62HJWNKTnp3NQ4gyW71afGbCRX83GZc1jStFZTdWfUzYbim8zccQuDNknGpijHJPpL2wabzmbsyei9QJxge8b5Vv",
  "key27": "2bhnaF7QQmYBgQHT4vEsUU2zsKK5aEoxsFn3scZ9JrJFdLpHcpoMnspmLdyyvRdGZafrFVFBwonETnDPSjmjirPh",
  "key28": "4RTYnCsnmMtzfsvFnsbmGSuwCxbhKY8v3BYCvepcLKXxgY1AkyaBENW8KAm96zXgbwd13MUXLdarqrHFEVcNxDvg",
  "key29": "4wdbsKyBe89Nv95qzXuzNqDdsXu3qEw7focMsurjcs1iWasE95p4pLhGfjYqriK3LX8fKjXpqCmoB5uKUk5r1vGQ",
  "key30": "56zAZF1h8dift8GZ1Fgxikyjt5Sd4R26dVtPyvC5gCbU91RHqeRNo3zSiUGZW4UyQQP9ZCxBAw8Uv1h7vdxVRPSq",
  "key31": "4kj19Ub72f1STx9dEQGktwJuWT2ifYXmMDMbs7o3FQC3NNppDmSDptZtDoccf3hwPoe9uCJWKUV3LeyysDvFpXbb",
  "key32": "3SvVreb5cvY35ED7srez8JgMHvswbDnM4rakLf6u3CAjSaguHHh7ecgkopGpaw5H99AgcofH5MFjUYMd2Ts98AFF",
  "key33": "5dSeUua4YBJjjAW3kEKtUwgS582evgTjKChTSAw9WwDPrgNBJGZEXoxizVY7BWRsouiWsjXjNmENnRfvUdseT52z",
  "key34": "2xz8bgyrLD66KwJ9E8Y2xbFU243FYNEfiDJtv7JohgCgWJncTvi7yPpJWK6XmxYXBEzRkpChPoPAYQXXt9tpiP7t",
  "key35": "2MmoEcEChM7UdRGBSUVskFG8SmYpEYhD4RvkeExZE1TsuQ7fcr13x8yW2aepjr6YoFciMDYRBigvWqLjJED3RV1j",
  "key36": "YmAstxdggUWsMFmQG38viTka1XsveBc3iEmfwWpkbvLg3qW83kbsNVMLYcSc8K5fi92awRW7YFHdvC5igmf7Z8Q",
  "key37": "8RpAvh6ybGrsjwW7oPL7LJYCdwjbaKHu919riKGumJe2dtMEE12RxqGB4ZcNuXhMiNuFUS6wwy9NCMNjq7vUkzx",
  "key38": "ShpdSbKuffGjmg9MBMc8CfBfTRQGGKV31TL5UAYsnjUzf4gQwTuJUya6kFhrFrmYBkvxWpp7BqQQ9ZhLk62YYvJ",
  "key39": "36kBM4mJTDYSHcKJbmFU1SF5NBeQQAT5FY8uQef8zazrc9FEK251Qt4fr9GDL5cesbq1S1QFSB1xuFYPhbctqq7q",
  "key40": "2dL1J7Ak1pFsw2qChWu7iVhqGjYJ4Crtka77xLPGaMdT8YJwf8LVJzZ62XgrG4gEVjRmNVoapUjnyaxuhBEKXY3X",
  "key41": "37bvgr3edL83msieWNvmySXJ9QpQSKRvQaJPMaRB4rkL7tDVU5V7GfdQmtqcFsuXSytxu9xo7nwJk557uSFS25Jz",
  "key42": "2WB814PTcwbTnSEXfHPVc7RWF8SzrzKWGoznDAyJXc1pDb9iHyYyWGpzWNdnatxEtwUcDXJUSAJVA3pgrkMSXFTx",
  "key43": "47aizmwaLDodPvpAbAAeHHqZqjvQtby6FBbMvuHbPmRj9ErRA64i7SXV1PAgugtfu3phfQYUBPhyjbC8KzTeCHzp",
  "key44": "4pBAbYiBohRwYFnTEmtTNJ5VK9byH8zPVcfwXdgvAz1FuSMx6bZ6ewjeUbjp3qmLT4webj6h4e7E8Vc2twj2c7z2",
  "key45": "VPC97iYuNUBujkuhzjuCSRJLgofixrHkYkNMwL2qxC3iAmpBHYrSmnFLBBNELbGbQQ8XRLVzfjzGKteUqbALBtY",
  "key46": "33iKJeVQm9B4oKQMyK4m441YYSJca8FTZyHvsKZDtJThhjmKLca7vCA8RhTYTTnfb66V6d5zYhA1ejbfRBRAFZW7",
  "key47": "37FnvMeULMQiRcegGC61A67siKzRKJHcug5T3TvLY8efoF68TaXoGfWrBo2mATr8J1NEggTWW5dJ6hpwyp4W1r2c",
  "key48": "3nDimFzj6J4ymz88QbnugiFyZwYng39oNkhN9PjBACqdrpNasmJxD36GULhFuDoTMRvvjqLsShqjH3HUoDoxKeKp"
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
