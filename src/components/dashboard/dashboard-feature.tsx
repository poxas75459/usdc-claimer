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
    "5Q5EJoZHmV6vQ8pZwzZ6QaKh9mbZyDvtrWKY3Mu8Qs2n6w3jG29v9Z7mJcVRW9mPchRzJrnUDwCgL9DBfeebZt6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fnCJ7NkrEFN9dFhoRkzEPzaJb5UKDLZ6BGqWSmUV3gdnwCVYmt4FfmDCNzpwaZftGKBmaQsrmM4rn6aaxSzo2Eh",
  "key1": "5wsb4senwqsRUfGBwAyWmXPeqU5iDnFSY33aKTVX3YHBS8nGiGwsMVXtMTsSphGEje4t3wxy9LJgbxYjSAAJv827",
  "key2": "3dw269pDd7opo41iU6CD9NfAHevMequVUzi9h9ae9XQMwaktAAPHxHiSn3LSAUatfz9awWk4jMBPABri8BWj9HrN",
  "key3": "gsEERQZpbPGGx9wWjPqASHrinuKM78cCHWPRNYGvJQMwgfLNtcywSwyRjFb9QZQrPxtDM1313gnwUbf4tLYmNZj",
  "key4": "5fp32EEkxi2WquFtraUieuvn8eqnqdxf7UvjY6wGMDKrSRC5Zny8kAHaRjD6w4xT4hqZrrPvrq9pbZqR2Skopyuk",
  "key5": "uz1SPJaXueZ6WmGj7Bxngjzs7uzdSqYKDRvsNhKgThMxAzMkV1ULd7uJD8WqCzc1uo1qUG5jyoBFRZ6MM4JHLfU",
  "key6": "4vM88Mjmi4ixVd5hyX85nAPLzJRQK4WrBzA9oW7QNb7W2s43gv7hHYVv5tANpErQazp6Kvn1pgGcmxjjujuZJ1Jw",
  "key7": "5YnZZG6FYCT8JQtVaiorUyNf19esoG8fwmcWBW5GcJB8R14ytBYTepCX123tGxuUos9sdGTp7TkuwrwrEyyg45Uv",
  "key8": "5LbZoz88gotBk6M9qG6bgZrAfurNbHjrV2P2vZmELRJQmMW1jMfcRqjAynCCC2JAKtC9sHfQLiRsDoDwRbrFK8cW",
  "key9": "57ArxZR193hVgCDeC4ckcyWwr2pcrxoediJHSJWDxmzmFfamwHmey35F6AGL9inHUsDYizyshHhMtg7YRq4Wvg3L",
  "key10": "5kZKdFXwS68TnvbwmECBmJ1SY2XtucNqXkBbKVcR3ogYAWc7BtEMstpix8vjN89CviiNRn47eH6GB2Tx5H7XgwTL",
  "key11": "44Cd5FS1VbbYvVB871yTakRyk4bSbiv8Pr89sB62Wm29YszadQMQxT2ahgVkts8NSsavH6FTYYNsWaC52Uaa871P",
  "key12": "5syJYHyWWPPiQBrGFQKQjVv7MYFjgx6dXSrgbzHTEcHzdkS4jSNZVTkENmh6nmRiNcinqdoydYaHVK5c8a3QtUcz",
  "key13": "5BuUP7hZeVGxscaqtPBY1NChTkH7yTfa9o5mXw6MVkWP18C47EBMhTKKA7U3zHJiEZS7pJMFFbow3zjKMKqVfLT6",
  "key14": "3AhXUaXmJQtCUnvGGYEW9LD7Aeezz71ZoFo6k3QvRivZi6okimQJ7hf7jkFFkZHkp1vmfhggUGWragPuGJgobG8p",
  "key15": "4Vbz5N56rxxLSUuahyY7puxNMzkTjJLbxP42jSDJwCWPFJayT5n35T4Q7u7wskthjSRHTccSwZYazg3EVuXBrS9s",
  "key16": "45EFNpfuo78EKtndC9GHSWmp6sHQX9AKL46Z16hMLLNtnjoU2TXNbCtq187NjxyvjVC1KF8YGsQNmGmfht77Lq1r",
  "key17": "3srwfXwM5DhANKM8hAW55tExy5rqETrUDoGBWfU93PjLjsK2kiSU5aitb3nJ1tE6ayTcFN7UAmPUerTmoUQNBEuc",
  "key18": "5TSHvxigKbwn1Y7YQpmLC5KJxHysNq1Pu5YyNKtxfUeeVXiaGCgc1W9mPJi1MQHEZnLjrqkToUp6PUqi8cNMGsDP",
  "key19": "25bhFybYdE5Us1EJfCzfncbJEMGSEnp3sxHtuACXtoDFfiLz36sBaXNUo4BoNCDvRQNbWPpH57TFWggVAMsGqVoY",
  "key20": "5wpT7R6GdrsQpNts9b41rfsxqBfAebeEQufJC633tp6hhXiaFTchYuhmT4WxT6ibA2Wu2rvvrejzneDz1XSqF7WG",
  "key21": "5u5zxV9fiUKaHJsTMhwonN5T2LvE9mScyya66MbWbvF71mvBmq71FJxDWzKiHVW5wcrdYxtpVRdk7XCfXLRcou6w",
  "key22": "QTKfNj22Srk5pNhGM9xaYN8QGez47GH3AE2cq62F8CErWeeCKn31MgAT6LFXk6D3Tu3Lz45JVKgbAtNdhUEn5UP",
  "key23": "4g7xRpY2FBy2eLZgwSzYhETHpUgDx4QUAwbcb9c8HqjqeWfDvLn9Vex1YaMaj2fqxuzSi5XXr37zPB2FwZXmjF5S",
  "key24": "4cGnWLvXnqJrNyzrGnBREb55XakdBLKYoxrdcRvmkf1vXg6hQ9L1En4iEUjMbKPEjVJDdk2Kk9Jxfvsmv751XUwG",
  "key25": "4PqeZF2bZZMmRAto5gtCBtXXWA1hsMAJLTBvp9Zpn3WyCbm4Q7dNvzPJcDbC6i2YxmptQ3821VSGvCV3GuLcCCLw",
  "key26": "2HNztjqm5R72R8JYho9bXxfqRq8YjNVewNMQ71m8imq2oSNmBbaD98R3iDBiG4zDvdzr2LgW3kdmC9QTYHswmJ2z",
  "key27": "27jmdMkNX3wMpCc1pWWMcfK2Z54LdmG1nYvyxZTKWCx9huWb57BT99W3JC9hDS5CNasSC9RHnvDVdR4SmJPCn718",
  "key28": "36x6KL7TN3iLXcwkUue1RPWkQqJTZWERDz9zdAMKf7qCVRcDZNAxKjemxZ3pNF7FgAZUXqVwJyUubDahJLstZemu",
  "key29": "5ks7aioee2pMJUSzNdy11utCVkSaztzetXnW45aVJgfT5Bh9YTRn255bdMcGL546CfAfb6f7NApG65yoxiHSjar5",
  "key30": "3hq1eEJ6xjmdXWcCLjm54zgVhYEu77uTrEepRiJCXRyktL3pu2Lpap9rhT3j6P8eF2reJ7HnfnAsXeYnaXxYuDPN",
  "key31": "jYQ8xJgPqFqazaKbgZ2SjXyxkzVbZzKYvLxYByQL7erSVuPtwKHt96XTsCXTu4zEZ4X5QYmAE6KfigX3B2uqa13",
  "key32": "4jKK1rTbGzFofX82tLxvRTviNcQp7Ucn48cs97ZqoZGmaKQK73oZUpzo9ssFSDEufoxd9UcBM8rPswgFs1Jm7mia",
  "key33": "5C4daW29BPvH7njHnBesAvLpbPFTsKyTskFag2pWnqcB7M4nxQM9v4JsV3VDx2WuPmLNv52qByrqa9Hm5usqZYtq",
  "key34": "54PMhDUoWp9AUAAooGF1L6xTeSceaoFSkGe4bVdG9B4uBECCSpEtz5wsbqB6qYzPKFaaVRe57CjL7s7BWgfGuaVp",
  "key35": "5qRd5fcMutrNA2CUvQ4LmtbGgBp78LyWW7t7bTxjeRmLbsUaWRtjxGKQJM3dhLtAH9hhdjWgnDCW1ZxjKKcCSWKp",
  "key36": "3TtykcJXA6kWvH9n6CKZsTTFyuj5SSxj9eCPxMc9MoaTXVbvNjGu5Tjj2p3goNkShVf87xLfX5orwaL5vrjjUjUe",
  "key37": "4aHzahayH6v8pJP8JCYBxKfXYZjRDwowYBgf6AJWNUSrFALXVvUqJv1p1YqLAdqVpaSCsBRbs9dYdAFvHpb7AJnb",
  "key38": "51m247igNi9j9GTpFSdrhsRf74sNCZ8QxQA1ZpthiTBfjUzjUTdVBTcB6iK6MnhPH3ucvunbYi7eVrKjZZR3PP2D",
  "key39": "37rSznMiWApMCzdttmbzHZnk62hbqnY7Uy7vFzw2Px93RfTszGi7dRqsY8kiQLCpJG1b5adNTEASa8qyGzaZa7bu",
  "key40": "4LPk2J3gpwgtYPTLbfMGKkWTtrYd473EtbSbJ4aFWfbkNnAg6cNTPckiWTHAfjd71HeGLZDUMYpBUAmNs29MBgvZ",
  "key41": "3CzA1idyd9GbpQ5t5vhRNBEVJgjkz1kAx3rnTi8djfCKzaC95ZigsMAnoocEzNNuEfQ6xRLjprdfwLbxfECC9gAw",
  "key42": "49MwGvTf9THWN2H2LAFmKfR9r2PrGQSEAjKPX9hhkXUhBx1PgzzysgQjK5M8vbrpJXgVm7gGkoCXdf9jeVbxMHr",
  "key43": "KeNbNgj1vLeCEdYWSJ1Z8En5gzHm1HFi3CoGghqUQuxAJvtLMjvJxu3RhCMj6XhcUQbuW9PMV21bvdJhgTckx4w",
  "key44": "UnXUzEQeB1wEB7ovJs4NqvcgJ4jF2fkbbbNfYFgFNZe6DKRBGedDkJeJL2jSLwvpDzT1RjURiSBPv6JnpAU1weE",
  "key45": "4b63nRo4a4RxiDxiP9fGPCZrqbgQydfaxqobChJkLQgPP4dQhgmzUyNBfTySpnuwMWTFZxsREKu89UDkumY14mvg"
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
