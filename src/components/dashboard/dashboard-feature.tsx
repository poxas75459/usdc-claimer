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
    "5X1yJEPaWTU8zxhrGMWHYo9CVGHjKhZDjd5JmoMpRTeUuHd4umPqpEcNBY5Q3Q1SiY8L1DXfZVqS8utJMAEQbQGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uXpdJZ1fcZ8YRXJiKv225beMENtLVFGpUB2y6KRhcXDvcP74Erc7NKrgnkc6ZKWHMMDoEH4U4hTfvTtqUAz6HUB",
  "key1": "FXsEbJLbUm7GyC9v9ixvorcJcKjUNFKscgMiZqDq1bN8z3wtGeG1Jk1JmQFtVxgfr7dofc3DcZ4jfBvEHhvBqyJ",
  "key2": "dFQcYpgQ4zDQMm6txNRZiZtuSbGgU7yETgyN4G7VmZgxSXfnJWQZct819c6co2UzhhAeV1gszekbzAD1t6eoYZH",
  "key3": "3e4pmgRJ4oJUvME4pyW3QuNwoPZtwYqNfxSatEwwMqo7ZwHxdu7z4g1SMQmFpCjaHPbaDbaDaCsv1ZggY81NjarE",
  "key4": "4jDPFcUW3HX3GmNsLApzRUuN47J1BexqhzHuLu3x31FBqdZCFn8MXCDVFgGiTPJ4ScoUnpHFFoSctBQD2rB1PC4M",
  "key5": "5h5HXb1QuCHAyFpfCB26Fkg3DHQrqud6QPMH49o8azDZnwRNWMpJE7YSXkeyU9PzpH7mWT1y8hj6YGhrUtbkofWA",
  "key6": "4L71B4r3Hiv69Dwg7RWo2sNH4dW71dVZ3kGi7YjaKqHAT7shqNeonBn7jCu4tCjLmHxBu9Q7Ghp8sNxrmjCdGHUV",
  "key7": "3rrsUSAUraxw6Y366DDvg3PBHqzFnZtXgyEZ1AEbgpdXSQTg42vF4zc7chrbDF7vAa7H3D7wPSxDGxZUTnWhHNwr",
  "key8": "2dVLAowfxr7bAsrJwKxrzi3rTpThfYbniCsxCpv3kLL8oscNXDDpkQ4K2XvLRCC5BDJjENKyTsxRtPVVrHtWZuHj",
  "key9": "2qEbd7uAD2hggsmCBSihRLfqQ549RpotLqMpPgFDoRx7hCS9pVHPmGwkaMYcX2H6P6Uq8euEaekWdLUhYVuK4RLN",
  "key10": "2YkgckXhAcnXBqJVRtVZLrCjMfoghXj8weAgh15PUBDRosc1wyzb5YuUuaP3vQ5VZpgByuURGRgQBqw3HKRXrdY7",
  "key11": "9hBmihkkUqjDJDjRSn1zhtgcekyCLoKbuQ3KXH4p4A4Vsc1zpfg4qkkG8dqYY5EuJTHdzt9ceYzWkpCTxaYQaEb",
  "key12": "vPtr2sRWEYXHLjYJHNnYPviBDDB6LsB2u1NRWbBwfxRpZBEgmExfzg7zX3sohLmSUc9K3v47BUgw6zRCUjcDQvz",
  "key13": "4ETgMqTapnQAytt48qEJoaXcAHV4C8pnDFDkaBJcDZEHv8EGFpwv2H68Tf6jWUwaNN6DLVfFJ2ok7sza9fwMR2Nv",
  "key14": "33VMtUbThRg5oddWZcUfA2pGnixogniAfgktJ9FvhqUR4bVJsYhZCtNnvrHLyHrRYHhGy3QDJMKCQwtwaf3h1WE",
  "key15": "5YB2xaxqAQQfUUuMcxSRk5wwyXap1kjMNAjPXABT1fPYu5SaGxGEdEASVxCCtHJT7rD1tg1nup4ZPwBbnKZBeD15",
  "key16": "5GVGPpFovep8CmxvscMuug4pLDiaCKSzvjYkisdRa5n2bM21nJeURMAhhpmRPohF7fixXS5mebX6gXteqS3fC1V1",
  "key17": "2zawyzqnLRgU73aMzJAPgbAVV5ERkbKfKfEFaHH3Zv6rRTECezji5DSQaiEiZbckKA1cJB2L3HsnmFG5Cb1Yj8U7",
  "key18": "52xpGjCL7HNvUWdkTR7o9YYYPtRnMo9jYZBcxcvoQ1Q7Ujg9f6wQ7gmJwcJxgVdC9iKJevZE9duRzjuRpP6yczwS",
  "key19": "3zq2mKAfJDn8vxFSAZHZU6jNpQpPDutdNzDYUZJhdBZQCiu2ZafoGamRh5p2rGDK3dbmAfWHEAN3AzhZoj1SjXVi",
  "key20": "3B1uhCXL4SKpjxDQ7fWcQt6SD59DCsXH4xNhuSqiv3hen6yNY7mqbwWjP9GGdU8fcQCyMnyp9Xcrx5XJ2G6YqWas",
  "key21": "8Tzzkt6wUpWpciJ9VUpMCKBV6oKewpcCuUYdjMHHdkiDu4hLc6Btr7uwmGLM9aupAnoHcM82Dnjbk4JptEKUPDm",
  "key22": "2ucPVFNFnbE4KA5AC6aRTY6PV22ccyrkfw1YygUVNo3NhqZBDbbNPkc5U3TkLYZxRynmNgqpLJoC5cQarWuQSy6S",
  "key23": "NyrmgAU1ec8pZSbs6dS7E6yebLWrJrZvXxiymhtZ5UfFou4BuHQ78bWzCaREZvpif3CB6yJX9U8AjdpWXWLEgjv",
  "key24": "3hEXKY2YiHFjTXXTURPzebBmaMys4YuzhcKu95io4pdMZrhiNpdjdbdByivEA1qDu4znpzYhEZ6G6bN8uduzPT4g",
  "key25": "4sv8awjiQ6zFQVkq5vvCDXyZXQhHPyT7WPsZgykhYXHozVKqU7JhUBKaD6qXFxTTKNT4Eu54AeC5PxUpbBv1sg25",
  "key26": "gZVRFvSdkL6djaKpjFpQyBxM9Lddk9QacepzcCPbdUzDU1iSbqc7NKSaF4dWDbAtfauwtXYL8tGYKYKhRoH7XiY",
  "key27": "3fBF3ki3tTeovuZ95EDUatAHzPRWRU12qgLLehrD5pdMS7sHhYmdk5GfFs6vHmtkpAAgGA9uiEcFnGVyvnhtHfRA",
  "key28": "2BCWf6RkfzYvJ1dX9r4kB1y5UsXcWyLk3V1ppmy8LXcB3wm1EVpV8XnuLfxa2Vg5QpZdk4YL3KGqsNxyh8RLfywr",
  "key29": "27CMQHritmZU4sZ4pgrSECLumos8nYBZoXrYMFZ8fhbgKrJtXqPdWaigWx1H3bewtbRyfArN31GgVMiaWU2taL6v",
  "key30": "RfUidqcJa4iCwohn3u2awabTP66BX2QZkscLxbLBzM5dkxwQoF2QZHj3xykbk44t3fbac3W7uLBe8EUFu8xD3T5",
  "key31": "2BvVzR3WX11GtiucB25uB6bsFQ64nrHSfTwyL9DmabQA6FSry27QKvyeQDDzaD1jJJ2Ypk2HzifwFoRu7MVfmLTQ",
  "key32": "5r4pDasLJhPJYsfTZuhKhMuTcDDM1346J3S4FbDGSsaDrFNnfMxK2YyR6rcP5duNXu3UCwugXg5T3XYRCN4RNwuE",
  "key33": "5XQqDUHYVWX31YBDsiDx2RgFJSkuXCtbiJjYfj9i7r22ygM5MhDqURKpTdjWLdmC6nCxzESxzrVCV25pf8mtqQ2V",
  "key34": "pbcd8TypAFPAJRrd1a5oGKrNvPY55sYctPcSL4Axu587D7yydXB8hU7LdGBqGjFsjnqt91PZMpBwkdSA4Gnn6bR",
  "key35": "3wbfffiaomeWFYqD1zYNzgTVd27GYqQPxq6KyedEBSwYxxy2EeTyHLQBFm1PvL1ahXWmHyyKkj9zV1DjTPYW7X97",
  "key36": "2Dj3PfmwdoXZwJwnaugFz1iJ2NnJRunw6up8G63aA7qxuZtxwNWmovyQmFmzTHYhup6eTFcmSSVZDbBuA4pMh2Vb",
  "key37": "4Xifz3cFaprzZTrs55QnnezVsbuL42Sa1CnRho9TRLTgrFdqQsXwG1yJiSXdkpnwknyfwZLRxXoSgyiufE1maafP",
  "key38": "24ove22hdnRez4dXMfRHYjZUF3cZK72Hp4aeYdozgfBfJ2oMyoa2ZGpE7TF7zMkoWq2WJomz4zZrdBtPzLBFXUf3",
  "key39": "2z4Jzkq4kfq3RSfHP3JgU5hjXuPxSQdLNYRZVYxzXE19WjyJfDnjT6EXwzAyhdQrmYfdT2jf2xQzYw6YQfyEbfyd",
  "key40": "gkHkS4WUtG8TrBt8rF1ebnxwUemU6nnUSdw2ZeYtgpcbRmHdTdiH9ayELr5xYU6ZkZPeSzvVVJ2AzyJzKiGejop",
  "key41": "4mTVMCbk7CH9SGK9qGEMUvBowXf6rXfLDYE9jbCJadodnNvfXomPc1LcGbY1PtEh8UTQ3SRJYfczAsE3ZwCeRqod",
  "key42": "38BuAaYeXseBJUPf76eLvEq5aTT2AHTTHMH3uiAXirFicD5VjpuBCvHDJgcaVxAUvkebRecfWViJsbQhzxvdfAr1",
  "key43": "5hMXmJgA7DfLRHhN96JQM6kmhJAb7EpWVH31QmgDq7i7a4MDcnu5AG9iBs1m6VWfKXAsHRHAdwphahyAwFMiKdGa",
  "key44": "5xaVaqDxgEm5yPR8e22rAyd6RgQ7cjSaBeMZRXbHQpNb8NsBK6QjrAU73FNN9D55zhRwW7aL8MqkFyvgws7wV2xU",
  "key45": "2Z77av9nn4j41TPEU6Jav11kJjwRRY74jREQ5TpZVJztNTmN7hxD5U9xL6dQsE2WjnvJ2ZsPfKx8SAjqy9Ps2Lww",
  "key46": "53zgRV9cWu8rYGtVE3BWchQHZfKf1Pa2aEiwvFJ3TLREpX3VvweEcxQAPpabVKgm8FjmeS2ZkmGAU6HRmvyAcwYj"
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
