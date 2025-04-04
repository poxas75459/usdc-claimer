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
    "3LWsFbPaWypFtNWiiPyjrxoS6FJN4rT2ZHTEshdXp33w2BUygV3vNo8cq1pCoCFTL8jQNF65FDDikhW18bjGmCDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvoXydWhoCuize4LQsEryHnWdz11Cf7839ZQFtiAhaQ2FD9tFcNc3AAAAjJfL161mrckXr3C698qNF711ass8Jb",
  "key1": "5YZXgK3kWSyPeXSdcCrBvtqCPfMqvbEGspcHfqmuJ9jG4nQc1GWqALw7BzurTr8oTqifpSax7TCEU7aKauWSo8zo",
  "key2": "hLnjmRXDbjED8Y7atFPdaerLc7Yewp61FYRrEjwtYSTUuZyxUSgd23aj4XHnSYwyMiQrqxTbEnZKwPZjwgoGn58",
  "key3": "opLnyBfrfy2DpzxYLaogLLaTs13fFpVEeGx9sxfGM2dZQf9ozpBHVcp6hPEe6DXP3TvveinX2mUCN18tgrfpj1s",
  "key4": "5aWaMUP3AwTk5NNJ7xBiz4CHhZJpL7FZ9PcWGTSpGens26uNeEtR4suWFF5Pwm7ngKG9cCUGuK72Fo24gBoNLcnV",
  "key5": "3CAH2vvNvjEm5nfVnJpWVs5q8Ci9tF2f2tdYJVNWxKimvEnEFKignpenUsWrfF3khC2W4PkU4ZC6XdzpmeT34qG",
  "key6": "2c83pQUd3dsJdKAAGfxzAAihXzBbPh3HQo7UcuFyqxmd53UqUvQw6v6ESV4pGJvcGvXskZ6dJFbe4ocNLUVoZ1M1",
  "key7": "4DcA5hrytqFtCYfnPXoKg92qQivHevHTHVMdnq6C2kvTfMHHtMUkrwfUarYUb6W5pJVHQWYJv4q7ZKVbHd32p75u",
  "key8": "2SHrV8WbYytXxdjLJd1VkQtJrshNZB97hzX2gdRpEcwrHg3TuPiG9kjQYvwASXDccjphh52d4hRybyQQYARUUUvz",
  "key9": "3ggnUaohiPnEr32DkzXb9dasKeLiqar7gmXoGuWNCgPfNQk9Lo86EJEXGGkWZwewZy29wih3n4UGPYEi2imNDh1",
  "key10": "4rhmhbTxZ5XXYAERv68yjQ4xky5eYPYKNAdGNbqEXk55kcqGVrRCZETwDsqXap7B1T1Zedvfsk8UGkRAQjpwuGU7",
  "key11": "51PJAR4WsCWijLucJwK5WdgGa6Pe8juCgMKfNGQUrQ5J3ckNz7pdMTLTybXAz93WULa6U4vzw4mKMbKg2rWUk6Tj",
  "key12": "25n2PmG7KZu5qgJ4VDiZbjhjK4huWHxts2SQy7ksnokqrtJRQVjBjYsFyRhy2QLvcRNHxJBz4U6ovXGbYjF2sykx",
  "key13": "4Jc917sFyWYosM1FQM6UT6uT7DXzbn6BpT5Xop6FJuGC4vn5SpBgmzDEhQupsoZayntj7n1QhUH1YRRr58KaZpQG",
  "key14": "3Tu9SogEZViFz23NWQv9zjsQ1Ctyp1pQnjY4sEhgYeZ35DSRwWDrTNmazxSmBMo1qUrKUpVbocc18BKhGWii7toL",
  "key15": "5VBx33LiRsBt46FRTJpVRXcWY8sDQeYBbexvLgccePfY4k4MzazrbPBqxeA7sAoGKxRn8RBVLyUz6WFQEaaUxyxz",
  "key16": "4aNJhbFeMY7E277yWiQSDB3NqGTiKe7WWBVEfpH5L3qCR6vXQJbvs9UN47ErRimNLCCEM2S17LDvk5HewYEcgBMQ",
  "key17": "5pwKy6dDC1Vi1X4CEcr7wMPx6vxbZPyezA2W4EBzy2gM55bxcTkF77ayBsBQ5qxBC9CEbYSSP4y4e2aAGAxdU5x",
  "key18": "21tbmR1sdZH3euCYgyNhuhcS2gdqVNoCwzgrefsseBDRexf4bVt6eRqUdivykDHSpt1QonED6aWE8mwmqv7A86e5",
  "key19": "3kjeU9F9YEUbaiMkkUUKwScCjc51N9pzYd2Q4Ch4AQRWeAjkov9zgpsCuACKA3TpQjNK6vtuCK4UYcKRa9rjqTfZ",
  "key20": "2BZniiRHMp8Q9VsUPYFmHXNuYRJkU8ncE8jWTSSepAs9kHddAw4tgLDxfEX2PjgJiS1ZVndBUp4T383N3bQ8v1Q",
  "key21": "5Uve3xWBppBmkAvFukchX9A8UJCYbG78LHUbDyMGE1NCGYrtKPdQbYWeQDKhDSs6bqqS1D2v8skB4knSe9whEi2G",
  "key22": "67DQ6cZWXfuYoaKTsxBTt4bzFhSPrXMLJEm3LoAWTdexJN6hw2urPwJRtBeXxVxUPd3rT25kB1er4GBw9RmdFf65",
  "key23": "2xvGfhBTQCdjDRSdzwTfAuSKCX6KUgWj8hmpB23SAPGiiTaiuiqMufYjULB5gat6BaLGgooEXC7ZvNsuPue3Qjs6",
  "key24": "5gqF2ga6rN7Ankdmqz35SBKGAy3Fkr76RhRRfNGr1yU4G5ViK2FG5UqUf5NH7x2EeLkyF2VTtExk5CmsRrCYE7wg",
  "key25": "5zS8yuTHZj2e1V7xwt6EHUQUp2NcMSMfPjbcDuuW8YJcYed13wguSbtVkhgb7YDMi97wN1uD1d9xKoVL7vCwRseg",
  "key26": "cGsG4vd1KneoRVHf5hkqVZooRhHpiWEt3ojKjcRSHxHLfWYNsMWX9YKETEbo4R2SjDPoBSCDpYkncyZq9PDWoyq",
  "key27": "QbroJRvtYVvPtyKCK7jqqi2eoe1USQ3XwHWtjvbj5GoEfBtypYHuhBUd5ymJGBnBtmCkqxUFCCMmCiBj2bEiEVr",
  "key28": "4SWwdsdjgRvpDSdvj3ZWWGfXyAiEx4Q1LwV7RTwtM6jYUHpgN3cPBzJNJ5MYcXH7CQQJcxdAzCmSiyYPoJoUPp1m",
  "key29": "3Ug32QS1BSvnrbH8gG44pZDFpW33Vrvr8CHRunYENFHJhHr5oP3VwRtBaqeqeStp6cNtRSJfhbhkffnVL1eBoD9G",
  "key30": "26FkF4kXUQLTahm1HZsjeTH1njKyBGUGi4FCnAv7RzzpeqdNCy7iktJB7o6xJPzdrBqbXqHQM7jJBg4SEDbqe8fx",
  "key31": "x1cKd2sKk9NyzgUDQyov6KXFZZRoi5LZxE8MhHos4FYX7NDLa4dwmcbtejc9SFkvVzfhfnwhVgWQdLL8MhW1TDG",
  "key32": "4CybUyaEpwzJJtX9bzmKLkNuZrviyYxk1NUo81Ek8KmpYDvBystLiUmf7SmSxLrTutCYASax7vjTfDZkzVbuCfU9",
  "key33": "59jeMXeRMN1Q74vLbnNMH4ro1ZcRY318vEVBZPYpGi69VDUcQyh2NAiAkpXcoNQb5fTBJeAEWDq4aCyeaKfz5uME",
  "key34": "4rdTfHDUEkRtRTZoVeECb5qenx8uZqjYF4ubcfEfNqnCqLrSuaQcQEK18ZpFKm9Bo6jb6EjCKRihNFPKyLfhDZUk",
  "key35": "4JbPvY3m62rTNYVQw89gWD2NUEfMhM9Z6UvAZJSZdoBzthcayf4tUaNWsFK9RQz65xR65aybnqYWoSwDJDUPh3oE",
  "key36": "2rncfjhbNbs1wYCBBGLHfJGH3cFbwhDGTB85Tu8eUoVxoKQUM94bCY24ReRvmFU9bvUcvYrggstDkNUiW3vdCmU5",
  "key37": "63fADYLVvdsGDnshpMACupjLXxJWEVzyRszjQRGYfkjUvR6TuwTYAmC3ABL7ZNjzUS9BS7bGrFZmwb27ckkcstGW",
  "key38": "5WpfxZesShyCo7q1qBMTydTKdWFm9WEtgimwg32aJZsZMDtLwRa62YZLkz4JxuDuvDi7sUkbofVUgBRg5ApTPJhR",
  "key39": "3A2KcJMkWJJZHbftZvT7NWt92hesSX8et1RCjmzdJtyjaeb6t8KQTLD1TWypcYRGzhQbGnoSEGafxAWRfryLLkra",
  "key40": "5QKXkLogXgemhEPxauAKNjdrCVyYjaWb2mvNx2VrjTKgmcjJmuMnDEgfwPNgJU3kmp6U7JsP3vsS7qGfJMuj18tW",
  "key41": "3g4vZxbraDGkDYKhqsK8E4mtZGEhp1qo9Tv6GeZo7gL7L5b9e26tvkMxgXuhwN7hurt4FoD6w8YquVx9uD9tfxMU",
  "key42": "3cM516sP6FyEZttFEkTSp7gJKmiPbTbowpL5B61cpnc8BmAHXZ2aAqtLBjijqGBk6GaURhQqoMHzoAGGVjCmdSnt",
  "key43": "127pdRz2TaapveUy4wGtwDsVKoWoBqwVhK3YdRNjFWS5Xxijx7WjnR3UYVkT7js2RPxdfCfCUFCSGGX6juVfgEF1",
  "key44": "54PmptTz46mCHRf529LBJKshqfmGxz6PHraZMH3kR33jFXtvhD1bguSQF3Pm1gRP2aXVKvTtjcgJqYJtBqu6d1FG",
  "key45": "whm9DdFTBGoGAH1e6Skz1k3PFfL4mVToQJiN45ZCnwUsB54Fs1rqiwpf4N4pXojWnDyTbWPF1bo2KKNuwygfxVx",
  "key46": "5eAVGtHWM7ov8WLvUGcTTV5DjzJhMBhmxY6gBbm43Ji5new44fD3h8y8RRXoRUQe3Z77KZ75reA7iUPfrYr9Ry3P",
  "key47": "4zsH3jKeRWwBhu83HAqHR4f9K2QhCxEKQZPWDEhrBdeEafzmm1aJKdxUwqyxnPrTdiDwEFPz5W1hDEQ9m8LmLnwk",
  "key48": "2PTMfemoGd89mJf8XiiWU3Uc2BUBL4x6kNWDtAppVibhjQWFUHrfoFXRSTYS8wcEnZNPyU3B994m5iFDXRthKKUH"
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
