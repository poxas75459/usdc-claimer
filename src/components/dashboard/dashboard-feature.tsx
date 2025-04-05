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
    "2ctviL4RnyaFrcnZUMQ9qicQ1B1egDu18WvQkkLSe8N5GLNjfTnXcaR3azhsouQninRgrUXmvbV3T9n69zjc7HQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8MnL4mnaxFXmiqXsxmGW33Cp3XwpYegBUCRbdVsxqmUh8XemASgyHwNj3pVpjbgrCUMJvToMw7Zidv8fSzj1jV",
  "key1": "4CGQPnTx88xu2HVg6kBFuJUdGf2NtSaEvsBiWYxA3MnDzRWH9Ptyg2Wzx9quyagZy4vR9ksTP6Lhd4MRPw12yGVy",
  "key2": "53PX1nFXQq19yPg1XppyUpoa6GEWvRqazZ1vJdKbrGJjmQ8GkBiFV5patrCKGjZBDE9JYvnf8ti8RzNfekKhLovo",
  "key3": "6Upwt5hNWGQdiscdNFfemX1wczdnXQMjDmMr3iS98FiA3g7N2BM8RDkP6Z5mBEWeXYxXqeV91jNuUoJGLFJ83LM",
  "key4": "2HJHPQcaWKyqg7nwwyNNpPjfR5bUdsRqTJk53HvEewirmNExwGsMdi4gpj8d9ogb8KsurYmt48BA6kwsQwcgPZ5v",
  "key5": "2uecrgbWWD7E7AimEcSCGTLVE3JT5cpT1QuEZkGNSMo92w6M5kdnVb6nyzn5gyK4qUgJ85xm7B57vUBxbfU2cz94",
  "key6": "Rx29GmGAJ4BWZ3MGDrdJ9npCyVh2C5fY4zsALYGTCEKQcnpGGGD74XuEKmrbcsmB1ePmaqRNZz8kvkYg3qEEGJE",
  "key7": "4HstMkKav3xz8PxFJ7vYfFyd77SVE7irQSWpLDtcBwgwgDehNLJn6r6nXerCwbcfLMUv8eqvNQhcbcDcr9xw9rk8",
  "key8": "3cPBRX3covkPg2A1M2sG2YDYYTmEH6PBZH2guVM11C91ZuPVxtQrbbabsBYx3vFA6QmPMBgahCytE6YXjpcewnA1",
  "key9": "3GBDyA2bQauo7hByye7zKopVFy9P7ELYrW5Ho99ehStMVURkTZxKHNacCGDxsVwyN2yPPJjXSMrMeekLGfeNDAEt",
  "key10": "5dw3qWXhVskwL3Y2ApZXPzzMqTxdB6yrgKzjoQCsE4jUqeq4JxJmMV89JtWTXXnCpMbBtEjrbHKtBNB7Ko7uHDVU",
  "key11": "2zs53eyMrbTTRrhqAH2k7mWWLs1EBYWrjSJomcd1eCKwRVo3kirrZ3uAm6ukeo2vYYQk7VVuSfwPXzKed6ksxfUH",
  "key12": "3wXNSJD8RFbZJXXVJotmvkdKmNBGaVLmkAyJCoAE2HknNrWNtRFDNtKr7PLFGiitA6HATkaUmamdCQU7N6TvGrLp",
  "key13": "3UbKLf1kerwoJgVkoZHo86DYHT23B8rDi7YYs1fAZ4jiNUP33ALWLnxWfYFmQAm79E4gb9nejbK6neQbB8n5PZ4Z",
  "key14": "4PN1eZHSbU5nfu368pGqHq3R619nB7RMti8WZhUiwM8wzn8Pa2QJRGyP6Phu8vnQjLFzV4U4dY7dbUmdoSMN7wbu",
  "key15": "4SuQCaoJwKaib17rLvRDfVJShD7W4G49yn95y4jHCJ1yP9Kw2vQP8DXCPyiqh3cfgi3Eyz6gXKHtfbwMpbDugDkg",
  "key16": "35yvS7KwKgRP57daXX6jgTgMSEy6V11g7dgiLptEFyDJgwqi3qm7REvco2hsHu1s4Hzz9FQBiWoZbMjG1GJXiHmE",
  "key17": "2wDC4yM6kwFhmLSE6DLPZuo9VUgxVq8NxEooLTgJQUxiMsFsrMdDE9gpoeRdqWz3HmWtfisMBxsToqs7RjQtZzLX",
  "key18": "4cUjVkWtNC9EzUT73EkrJRgDs7Q3sijXNCM74Zk28f1Qub6p1VySuywvcwAzq25Vwgor3Fdo1Gf87JtgLLRY2t9D",
  "key19": "3Z2QzTqxxBxE2g8UzMaPZUPBjeVkUvgCDRSKMx4kzzvmerjET91cBaCXgRSLiXgiYocJdgRhQV96VKU35rWebCKM",
  "key20": "2t3YvaHYibFFS7EDVHAN6HZP93DN9WzmskMwDqxh4bpLx4YnyXtis6rvy7oNSewBzgsULTJxhx4roQua9bmv9J4J",
  "key21": "43snPhapUMvmGx3DY1ArgnoHphu4UyfEGanW1UuFEYavkx4cZrqtSDYpRdnvzbi7xkHBcz8R8PqPoun9Hzf6Cm76",
  "key22": "5Vgi9dKg4teiRWYv4ubbDePo6WNgcBoYoXv4VKNszpWAuvGWfbh2MHcpTVNf6BGbC6s6LniFhzJvE3geCZwpBtS",
  "key23": "3K6J4ZsRK1v9UX8dfHxM81AS8cSvcwtFRx4XtTuLixuG3SK6y8HFdf5iUHgGJBr8at7jDRqqvcpqmy3tTt4DCkkQ",
  "key24": "5zWPfS9sGqsspkFnKpaAAbyExQJUmAaoNzKBkQuYq5uAfmu3urUmPXhzAiq8nfTbrPgoYvBcRHRNDGDxx8uQ3zRh",
  "key25": "5h7EG7yAqyXTzZm1tnYLf6xrGEcDxbaigrdMC1yYLichXBM9NC4vQbtHHeH3rkzYn26Uychg8DXsf6oHYHcwYZ1G",
  "key26": "5aK7gpXWUWqsC5hoGdRMaK7qvtt9cybijQvQjUXMggtqB9E6YSyUMpdQyFFaKF3QrwGjkSZynXCu5M4jgK8EJZoB",
  "key27": "2zAsWWdTarVbBmDCWsrJPXkbF6YhM8gs4WfvWqjLT7oaVm3pyhEgDHCLMhbKzMMPLgRkL2SMeh8AHvmLc1f7VFjs",
  "key28": "3WG82hJHoZXiUpZNNw7R7h8i1zJw84qqKLawdRPAKT1kbDDf3JDt1TVzaUUkVfZQypBSzDcYTLxDpdLCw9d7p4NU",
  "key29": "bdtvaiyMSABDh22vPjQ4JZUi1QXt2UnYhHd55pcNAd5A9vDBwCuXvvhZRz9yPzGSgPVJaiThiRpVzjVr6sxcYmz",
  "key30": "guW7NMNXUYogXmCHKTt1BMuPY9yBvQvt37GPVaQDSNXHbkfbmV1Ubh3RspLJHGrW1me48BVRsCV5s7BqysLCed8",
  "key31": "62gVUj8uXFnwhfEwBfXrphTPFFwAHW3BcK3pwA3vBfZFGJErYbb8C8WHGjpfe6SRMuW5Yz14Qx6NhTh1t11aJDjQ",
  "key32": "4hE8AUSHgBfAeXh6uhG8dgeecCshTmQ2xLRopv3DCmwoDiEJFEhaRbdWEyd9DmNeNYUHsPGu3Tjk6QzFCDvxpVWz",
  "key33": "3T8eERWkqBR7PSSHfaWQLPD47HkKUrboFGZCat9nEarx4DFn4mN4QrU58g3gx5YnFD7J4d58TxEeQu35SG6u2HSm",
  "key34": "2Ua4SMsiTShysmuG5nEKCVZrE1z1GZP8wHW3VKtTjymCoyhQjnJDJ48XedsjxnyRq5vFKG8TGw2KXKNvyYLAm1G7",
  "key35": "4AaR1Lmb6ELeqP9nroWozc1tMxXCrszcRnZE5LgPmjbtPW1JXXBx6WzcpBgfmmMz64RfjKXFcB6gB74K6sCLcXiQ",
  "key36": "5ss18NMsoc7h2cj8cmkvrFUMLtMTzzCXkpN8Vr2ZKZquJhQyNcb2pQfqEiG4sFagp4ozdA3zcNpy7KBtdknxRgum",
  "key37": "4XFDG2yKdKoPpBSXDLsevGCJ3Tctm4Td1Bka2Gc2Nw2oWVC17rRbmMayRoyPggM1kgeYiPHsA25zL3RxNQXqNYkg",
  "key38": "5FyXY7tAvn7Pns1BXtk65egjGazD3ky8kR6adTTXYcbMAcSntjNVq9GBToUsDZT93XVx7LBbDqivHQTF63NJokxt",
  "key39": "543mfggYgd8Asp5inMGyfxiQ5j341As4wDaK6qaat6LD9VRZRzERUFJXeBQpadYonnsBoy2eqAc7rwodbPafW5Nr",
  "key40": "4VGj5giEoMopadQzTWKwk3GBm8kpy4Eg1hWFCtGkDzL959RC723VyC1cDH7g9inB46eYDYuhFeyy5RJrFuPGfZfg",
  "key41": "39H2foeXFEA1d5Vk9MEnBoqQLMnqEFGCm7TKJ8hQmN5z4eVCDhrsEuH28zdV8SqyFN1K9LPUU6c2xNDHrWSLuERQ",
  "key42": "VLrZ1VnZJYQDbdt4JyCYnpJkABMf94uVKYV5BbqWso1FYjZ6WAXLhunNhwRjqm9Fc5suZTpoFMVVrJ7uVPkfj17",
  "key43": "6HAkrr7cVW7kF8HJjCbWVZuNPhoXf16LcHoLiRMj8jKfhJ2NMs8C1j8JFYyNn6bskF4gpX3kP9rgNqvGhVEbJSm",
  "key44": "5t5wHpEa9Kj6VdJuSgnPabuuz6UKDBZv2gq9FvKTHwyQ69QxYcnEUPMtJqcvkNp9vctSuEgUD8hxMUg8QkVRh6yc"
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
