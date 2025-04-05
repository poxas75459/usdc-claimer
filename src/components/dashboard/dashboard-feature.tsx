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
    "4E1qkip4rebngU8hBMr2yPUfES8ANG6JrP145jEayPhQf1aZW3iDtGwgNTJYbjY14G8mPcmZfXSLYQrxLfFBNkM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNPhkd9Lj5ptEKURcfPWJ1X5YRdVeXgKyw8YxdTaWsymyB5hkMYJvpDJgPJR4yjiBAX1Qdo2NKxCnmZrySu7PCH",
  "key1": "2wrp84UZCnoYYhGRqNsJw6AU8TFHoQCf2fgawS1g2X1wY1dUtTnDhwxhKrHsemGEu1SZgjR3yZhUimwCZJMzAoo9",
  "key2": "4TqNL5LXRBU6mBdvArqkXs8Fpw91pH8wiLZWAS7ULe2NR8Kd4LVKXX5BTYSnK2SqJ68xUoR2pQXGEt6RufwXF6Vr",
  "key3": "4cPu3qdMdsHu3rWjrYdUGQPCiDTJyzBdmAfPxuM1mjdAXFFTwmLcgdocVoreeWAuKi1gnKfQsY7m7rJsKWKAE5Xo",
  "key4": "2ZSkk2aCmezsm4oCEUTQZWo8n2yAt17Nwx8LdtXHEm6qnXGoUE2NTB7FDkWkyWXLiiL6Hek62WT3BVvu357m7FUH",
  "key5": "LWDFqPqWpbw6nb5xQzTMfur8sjRhzxJxs5m6ZFNLNZ2eWc4foXWshGjDA2Z4c9atk2QtkNfd83QnKzm3xXnF4BL",
  "key6": "2vKD5aY2W8EadFtkXAaGg87KXwk4QdkD2oMwoVAGrghQWQHmmarjEtKHJNsgqWstwuWe9msEVDHQYpSuoUK11RhW",
  "key7": "4EnptUkKSM8HG4TvPmqLP9DN9YmU3SthkHLLAUWWXXC1tbMeC6cjHH6wddRfRQBnwcTQTkEWzBca4f6UUj8sZCLZ",
  "key8": "5Cy55YVWBXD2jdqBGKJUWfRRLkzsbQ8dtcPitX3QuAbotW5RyyH76JyG5axFREXTWX36RyH2kkBab3RQax9J8t4W",
  "key9": "2ST7BoZ2SStCd6F6RNrBegfA5MZ78r5dWaj3GQojgvFjbQNkMsqRViKFCXGrv95U63LRAbFEM6KTEUUyDfwpV9Et",
  "key10": "37tULKAHnw7eRaTSDqhpsHop7Dxde2it9na4nw1Gqc2FurFGXjKCf3MnoFkGEMhJuCphGLzZqj1yTVcEGXZ9U8xV",
  "key11": "3JSzPz8Eq7HrAzHQGm3QXkrEyGBnBztbJKHxfTmP6wKzBYaPp31ZBEEfBPE1fZ5r1d4ejcUnDFJXKc6jEwocRMV7",
  "key12": "jcLHKumNa1HVcUhKW8uZD4EhXtfJBB5umRQ9WFuPWHFYLzJXzvo83AYprCdhAfixcQjeXnMaXaGYok2JUkc4feS",
  "key13": "xKEJ31TsM3ztDM6JRrrEmpjpmJ52C8BdCRrPsRDB3evr1sEKUgz3Vd2ScGgmmuNi8hF8EtDB7zQhsikSYq3RmD7",
  "key14": "4xrfZLAkbX8GgESp763sisXuFwFtVz5UAD4oT6CQgAXJ3bfykGNoTuPRgtiXe8xRnM7QgmA4yp2peoD8PC9nyX87",
  "key15": "3wHx1N26wHTXDZirQYy1epGAy85s7G54JQUD1mTVNrYUzdoTsKmUKqP1sEv4SwpjGyD3tyuiauoaC2N2KUSzncoM",
  "key16": "axGNsDir31ev1StQaeSs4WCwCBGH9wfEi5gbsxqsbfaUVqtHZDYVFBa1TSbsoZAEnoYtEiTJvk9MnhzEKYhX7y4",
  "key17": "3ptm2HwAoU4uJveoQRnZDBE3DthgujSbZKJvsXFcCDwQQDnhCk92Be3jUhWi5vk4EfPi2Tfkkihhwwihmdn5m2L2",
  "key18": "4Bj2YY8RnU64WuAmGxJiqedRnouSdS1jNS1jZ6NryjYvqnmYK4LqSQXEzjxZRs1WU9uxo1jp9KRZ5z2mkekJT58s",
  "key19": "4hrZEJkM8r7nrjpt4XWuX4T3DWUEsvruXKYxYD927qrddcimVZF9xmhX3Yny55k9AbRn1uuWNmqUREJc6dfqdteb",
  "key20": "2s7s6r71tZsBJQjLpCo2PHG6D5iNzGu96Ae7hjPtnruJ5XusfaN1bJLrCwhV8e5KrgUgR6Wef7cLA9dF6FpHYJwz",
  "key21": "5jzDK1c9a6Yr7AQ7QDFCyWSUaYNxkNLBNKPbGnwsxc1FUQWqdZWuHXuiMnhKVhi83ijJErqNmizjiLX2V2VbZQPF",
  "key22": "jo44L58qy8Ee52e2MDxD1rc7Zb9VjUY9FBVt1raEW7tx4GdNmj28wTBZjxSaFBChhwkC7RUPwhnipchxpsz2z1M",
  "key23": "PR3vt8dLXstXBaC8vxanqfxKtmFbuXPW9t4rP6howRCs9nYor2EpKsni8nYimFw5LZ5i9VgVwF9vzavbeJW4bNL",
  "key24": "vL7CzzRDpHiva5Cx4VFUExjT7VRZ5Haqs5KPXBHWZLE3fXJmTGn6o74Lzxuhe35ZPdVHqpgojhpUsCSSifkgJDx",
  "key25": "39gFDwsULfxMcfGPCQVEeVK1F4n53EKuWErDiCGb1JT8bQ1TVGM24u4s3sJVz34S9U256Qa2YrRpUUGiqVXgQ2L2",
  "key26": "2Sxwffcx9wqE8ZwaKxhkYXU2MLwcXbEjGQDLMdnKQdZzyHUZU9DcR7Esd1CqM1V85YRNKVAfTgbGr1FU1UW3qrWY",
  "key27": "z6NsjuyQwdKBJsQo4MHuVpLbbvxPg57hkt8JAE8wVL8L6oDqXaQRUEHsVURVcQr3Lzpt9QnMyfsZRCop8Y2K464",
  "key28": "5WzYJZcnRkMw6cQHtjzEAGqy8DC7ng26HWGef9f73Dodjjjbx8zcQD7iQHg7YUU8Ez9sUGxGiP4ZvyaNDrhzsmrZ",
  "key29": "ZhBQe281nQVz3NosHgBSoph271ruKpLy4cfoGsej7Wx6LT9UnGPx9brGu27B3QGHmxKs2JUDNAh3LWjqoKjqEAE",
  "key30": "3EeWx5UWrPu83zGR5SpLCni7ZiJPYdagp4YELTRvD6fnysjiwtyXmvUh4MYBjuozGkH8EWfU4K47M8Mw4B9UjF6h",
  "key31": "54c2hapxH634JdhgnqSq36CGtA3ZAe7WFimmEARCfi8P6Adrad6XP9LG1ps4eaj3ptFaRFiU1ZTs8ZaVVRSAkUpS",
  "key32": "4HQtzp7xhBER5gqp3qiksGwfVRMJLzWcPnPeJjqBA8oBePjJzvfjyLWtDv8ZLSuoowFmCo8qVhZkUJLvKZMfkSQF",
  "key33": "2d6jx2RTMRSbWAKpawmwENzos686A8vkSqKUN5aJFpkcv6WQFeB95N7d4YYQdkPwxfhPyzYNbijQ42nyv4mPT5wQ",
  "key34": "SNLtEgnWAuaAx9VrUkPdCdo9bFy79C3N4hc7QvuNiMjVPnFhU5evNboeEyGghfoK7FxdjjWoyQ2iJVwP4ajG5hn",
  "key35": "KU6wYt7YjYBfkG64Q8U2ELyK9pkGNunH671HC9mYPvzAojJBdURPQzbore2DUJkr2kLNpw6Fwgfuw4Y6vkNjjsm",
  "key36": "3LvoK5jYcBeuB7obxeSf114WGoARHPDVxsYwDSMFggrQp2fpVAX16GGpquYuWVCvpJ17UHUvtkkkzv2UQFuzsaiw",
  "key37": "41Hwx68KZ4akWEkG7bPAM8RSA9rnzJizsFX6wqvD1172nEauJmZXphHdopKjvqpqaeRT6DqV2FVJfBGRLkY7L5eQ",
  "key38": "3xP7uKXMU9tQxzEz2UPMHoB16ZEmmdvPnoBhiiQ3UewZTDWzaWZfawNPTijCDa33xqnBpiFHQNoH8Nb5ces7KEuA",
  "key39": "21Wnj5eMNCoCjaWmFe7bCXeTUvGM7PEXbPZiraACZRGH1e4HbFjZuV119YhFexg4ppqbmoH4yPBFB2baqXLCz3r4",
  "key40": "5Yh1fqmz8RmrHSXepmEnfLmZ4F7qhUENLZ8jhRXeTp4pwzy7UsiexW9znGm5hU7Z9iPMezHri6TqpPd4seDQxoFz",
  "key41": "5z2Q9b4L3t3cKGjX2ioYJhx5EDzvJ8sThrMwnPpSB7JjdicYX3P2ZMVZCtwox453wD6vThDok2vvzvBoSLJSorJ2",
  "key42": "2pgWNDAd3TtmNT7J8rWesQGsNpcTA7RSbBD8pysTMptXv3LAdi7ZARPExfMkX8SdXRVaZ7k61PtaEaQVY68iLGdF",
  "key43": "5Ctmz167U7CNBymEhkaK6dtE1hQSaBE3mBX4TUwqVBLtQPYiFic3h4FPajqaHzTwqhDu65y4DztW2b8w9VQ6kKW8",
  "key44": "3K1JRmSiycX6TXAhCxT8yeEg4M5V65Ae32fk7f1arBPoh4Toj92EusbGCTw1hZYkpQraYVKttzdkqY6UU7TUiQXG",
  "key45": "2ZN1m5XcY7STwXv9EZdTMb6m5FpYaULqTWATbGAgaYVB4E9VeXpPn2mj7M3jW1v31tPtHTKmWUwwnsVByerVKiqf",
  "key46": "4i3wNcWXqrZmizfHq9ghWnWqTmjWWKfHMjV674yf2WYEezPbZq93RwgX1AN5gwERytiJNp2MoVyyjDzwpNAUDhCx",
  "key47": "4ah2YXJRY9sLUPGuqiz74e7LE9cwns8uq96PuceeD5VVdQhshbYxKV4AqniWoCmmhNGrLqKr3L5hemfaAu5VQCB",
  "key48": "4Ct32BzR7d7WHT4Uuh4NSKDtwDUx1SGhgdh1Ppga5xPZFBhd1zn72tBn2n6MBd4L7Hwc7RbUFz7cznNQVJ57ZiGq"
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
