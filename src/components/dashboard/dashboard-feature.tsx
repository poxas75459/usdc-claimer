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
    "4eG29e5wTWjbP3uEXjaKTNistrqLfvynGnaNae2jCLC47wufpQBTQe3bwMaDo65Ef4TREv4sNsQAFLdLHZKt7NLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MMBoZ6VGhjWCpUiHARWxf21qr48MVZkaRHVvz8q9b4tvAuyZmK5MjUnhD5wqwWLbUNzZsUKB2FApjZHcxnjBhoW",
  "key1": "21CGdoNhyQqcmSzgwHFGGsJFFoCZqVrBH994NYQ8ZwYDoLEeMebWcSvwUTx6k6fenuWgxrYBFJxQgNFSC7oe5kR4",
  "key2": "fKP4ADBcREkj9BBtuANoMdXuTvuErRsfcGmxyCEzQ9kVkr8gnMzFL3AvWEsgJZxD3mgUhMSvNPhfwt5RwScgmcc",
  "key3": "2T14hrcJSAVhJjGRjpfQckeA82PgipMSovF8QtKJ1FZRkXLDvhesbEycETjN28RzHLGMrXNv4TkN5Jxa5ChVCVgz",
  "key4": "2tcCgquq68nVwyzce97D4NM6KFbERt53W7mVW3ZiBUx6tfpfK2BZSRhaCnteSUFfrpz8br3WhKEaQU3fesTEWcNe",
  "key5": "2KtkTso4Xb4fJupYdutaWuLWYXYA1nQ8f4PfNrQPTV9WV9X2dFCr35XMECvdDAnRRdy99BwnWvSfTPRrLvDLaNdQ",
  "key6": "3TGmnewbDbCQVyLwWjz8QryFGJfkFuPiDvKFH2jzkecrBgDnjP7tmZf6SrFMSLBdSnoAXk4qrEpkZKx58DJzHwrn",
  "key7": "5E4U3eDok7EQJhCQ9qJDkykFswDrUFaYKavhJUsgeDEc5Mk2i1kWEaupVgTEBY1NR9kd3jPwceWpXvzaSxHfR6Zg",
  "key8": "xxJ6khDnhum6gtKMtWAZkpq5eqCLw51qsokT85NEYNSKRHsDdnQfZXV8xcuGAVQYENa5bv2mQT2hTPri8w5NyFc",
  "key9": "3kCYEYkdqy4seaGXycAKJwBLChavZvzmWyh1rGbNVjnBfJF8BvtCbTEjed6tKdd2ZpacJdTJ4g33466LpEVQvD7b",
  "key10": "3DaUStUxh7Meg33njHqSy1JLhE5QP7Q4sgHyno2pjtPPhH5jUjngiFKZnwpoYMb59k8qvUaKovbJDNZi6Z42hos4",
  "key11": "oBCzpda5nVfJkHf1Dj1t9M3vfYt9b9yDq4jbGKWP4ktFBA3Eg8oWk6gpaGydtpyDYukFttyKaSdt25noiAnUgAn",
  "key12": "3suq8GDXKfZ8ee6apeSFhQGaCzR92GSyvzQW4WWbnPxaN5vQ3h1okoyxBWKQNLrMdQEQPhZV4eULLhurHuBZqHEJ",
  "key13": "vfppqW5iH2X8KjeSJY3rn7STVggL4gxQkmr1z8HgrrTq4Ry9WwukKP8sv2DeBXzMrJzed7LWfuwRnS4updnq4sF",
  "key14": "3aE8SMUUAVMNZZaR4oom8ztUZp2wizsbAmznDfaTMn5H6ofcpQJohJ2b9jgvQu23wyTDu9h2BB86DCv7QzZWmvD",
  "key15": "2QTut8g2YiUemygFoyoqKU1SQwNbrVwANV9tMYXRdqeWXx5R5uDc4MWXSoidRJZvTgxrURrZ6zJNhThUUM6hzcKb",
  "key16": "2VZBkDBZESCXERXJWXQWt3dQWR7dzwFpf9UpHtYRJBWTFvAe8SqR9zBQAykh1LVsyp1afmACsicZkbBkDgFFnTUB",
  "key17": "2vBG47pvM7X12Zyw4oN8rHmKcYKXLxNhYaRK8vjviJ8yavkmCHj7kHh7S1cv7JahEocLDSDNnqacCqKyZvbER3nq",
  "key18": "4m2k2gxkbjYUwVb6jFK21CzWB5unvr3FMKse3FniEvcuj5yF4Do3K1efDBsg47rVUPwAyMz7HeaM4mhmfL2Wbvup",
  "key19": "Kx6eYuf8hdHT3DeRVLkHJnk2vQNsEpwrASw2pJWVgJDg7Ws6kKjyEWfvBmA7w3BFDv1gDoJ2eAAqNhuA45HBPkv",
  "key20": "76xSrWbofoUiYDffCeMY4b3ekpA1rdKHstVyMBK5hGXWTVWrLiBsq8gh2JEq92NoUgVRmfgkCa5vgcwRJ9aM39C",
  "key21": "4u8tL3T17V14XQxpSWMrKDmAjhUSrrS2QiSYrKNMpSJiK8QDu2UZoEDTZWp9wAFh8yZAk6Z56HHMkAA4Pp7hSJsp",
  "key22": "3CngRrvq2PQBYxNUvs49822BWzrMBfZeaFAkm8Kz8on48gzsheqj3v7YtWnKrhbUoY7JNQZsaKYjT3jkZybssoqi",
  "key23": "4Twtg3zN9byDbtU1SyRCzzKPAyPm82iRgwiiscmQJHrodB3Tx8hB3EnufQ3Aa6sTpJzrJTr5RwwVTXkhsec3g6og",
  "key24": "5y8YYCypndZArFCi7SWBabXtL9zv25e1yGNqm6xFaWvgrDoVE9c54czkrpznV7yYAqmAmeDxXgrd94e3wnkUjiBh",
  "key25": "4UAa3cwhabFRBfR2WscWP2iXUzBVpoSUsVjas41piQTxGoTYktpbfJoLKQLS9BD2mTjt3aCVqbKpU9RPMoSu2PBx",
  "key26": "522exDw8SYUyM3szn6tb8JSN9mVrer2nvvTMmjQxXQRPT92ZLDVYi11tLijfStEo5rPHAKo2HXHFckBk4tQDaVeg",
  "key27": "yxuMR9EpcVyNKgpNsvRbrGBSHQRoer3xE8peQ34UnEFFpGCpiKgzF1Jd5vv3MgMt6ziaHa5RnLcVcG1XkBoX7zR",
  "key28": "63Y5bGZdnKexGKBLcSh96NNatwKTYa1JNG6X4XUmfiDSD5CHYqB8vG8V9eSappYRNCrUDGbnWx4wZbfUFqp1XAro",
  "key29": "3ab74sHyn6CqtqS3bLRXvgzpGtBSand5etBiK84zioZTKusghLXSHVVqQYDR3Ru2E189fvC9Ndvvx8KAxMMsBmM8",
  "key30": "NEQn7MMahzApSd7xL6R78syAPtgwrcJvyBXYmEnRjPjCYJBJJYXdY6J9vHbNS8Npn11uJzv8nNYS4NTihsEEp52",
  "key31": "61uuz8wggHYyF7zFPsF9jAowN3rtdhTfskmxiCLzufYWGFZ6EifK1FDpWMkTCuHwSCrqA1rwYbLTeqpcT7qVzzgk",
  "key32": "2MvuZc5GVruJtgjLrb8FXSE26m2jUiBixWUt23iybTKHBoPFY9DrnhDLDTpzZxBfC5gztipkG4cZC3qw2cUbQmuA",
  "key33": "5gamVxzSHWJnd5NUsRC3M7fs8yWqatHMyVQciQaBXBhWzWq3JwxQpArXUGQn8BXE2oRyrNH5iz4ErgfAUC6z54cn",
  "key34": "3Ez9QgR3pUXx2GyNZ63vvzpLJ8C7bwLMpbpB1ehiMKTDGqHtdAJr7YtyMpaRsvL7GxRyomVcKTxkrucLztL3vFxi",
  "key35": "48XbZvDgPzhSQygyFXXQoTGU7LT3hcLR9NkF8RoX9spm9i5Wh49MkFemF4SGxhCUj6Sz7XwAUajoqb2rNwrfuCEq",
  "key36": "62MGrAkFiBY7NhZaTqLsX9V3v6BYYASauJMhWZuVWVkS5u3vXGB9uf82CrgAXztvGKtW2cH37X26hFYRA5eKwmR1",
  "key37": "Fv2jECc1TtLqvRrGzh4F7S3xrvMego3rfqYuknb7kLnZCVchJoMDASzBBLLRu2ANMm66ehzhn1H9V5ofKd6VtQh",
  "key38": "2LgUsZduBvbaVV5FfTDgf6dexR8ALrm6YYQ5LERLgS6yC5FabJ44d1d6n6Nm2xrzTSpyvgq8ZaWhEpdHnax6fMuY",
  "key39": "4xrVx4syJLhwkGHky426bUGi3snofdZfjpdH4PjPDZabs1ZRcLTcoKcMyamXUuL1vfXhbVvy4LpeX27erxxhYHWH",
  "key40": "2i7xdeVYRKf9sGE9Gk3ScdnSbcw8sA6GPX1Kdjc5yg1Q7khLvrJzwp2h6QEay9m9wbmrUSQhL46xaymdxA93oUzz",
  "key41": "4A8d8WFKZ75bFQvHjKEsJTvVF1TpSA8yKvCtD3G6CzCitUNpt7ot4rXQ7xSy37UyGnxEKBTjT9Qv8R2XPrTCx6KA",
  "key42": "4qUMFEUX4jG7FX5T1yifwQ9eg9uJ5cEXonrwSWmcRMRihcgkcF68ZH9UjGhzxRkpWdskSKnZAkjZbnvqqMbtZBvs",
  "key43": "2KZBnSaCcq9hoVupjmCzUry1hJ8uSX3Bp7SN8Mm6rKituQHtWg4ymCNaSpufwGeSHbaqdWUT9k5MQ6y7EGYDn8Qm",
  "key44": "3S9nGHyLix1VW8LD5CRfx3zxKscw4XB2mZSrfJ6LP3XVyRziFPvYWgPLn4tHJFvv7aHmLi4kJBJcaDAWzGzyFeXU",
  "key45": "2KyakzSSmiD5ZZZ7jjutNXDAQ5cefeRuBK8rAAnQDwLbPFjjktJME3KcM61btrkBBxDDDW8zp7SjpGZcdPHuabJ1",
  "key46": "2AMKFyas32Zh7Xw3uapUAtCj19rAZmTvXpvZzj7kZJ2EKai7a8ehmYHBGdvmUTUBUefUciCwNcgREyBLumbKdMux",
  "key47": "4zVhuWQJZyDo9Ds6YQaCwRopnmz15GWPL8poPib1HGSyM4V49XKYxz1osbBKH95A1hf1DWnaf4begBqZnZs8QoZi"
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
