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
    "5KKoE8BvsDovJp6opR4mKKjHtxZWeNKSULixtZujbBM2LU7zexwDN2geJr78PJGmBnhLiJdF6MEr6B7z5EL17sLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mwonWZH7GEZQQiAxEtGrq7r9XyqJbJrouxbkvWWxT2WRySZikpxLCeqjioTRnPt2CJknp6tf1Z2dovFjT4Fu4oa",
  "key1": "3sTsF78ioctfguYaCyKXFCQKPUXPkvvEVU1EhCemXGN9gUJaTWT6atnkeDr7uBYuP7HMQuUiPbuqmESsdfbfKdCv",
  "key2": "4QnmMbXXnJLM1xKQNz5UjvKE2t1wmPWg9zFcEpdf227f41UpNYKAQMhAvbbKWjhHjLByR35fYH5YuZ94vVi4wymR",
  "key3": "5TfMzgv1PYnGjBFBokyndEBMbhu8hroSEvX8suMKoKbS1ukwyyrH3yP4cCoDxHpBxEAknBDKafrGjUse5VRUkYnm",
  "key4": "5CamGDZRp9GJf63Vj3hUawEWMwPwn8an7s6mgfHFLTcTKNzaimZCJAZgnWAAzJJdLBg983qdJ61rN9YVAQ4LL5nz",
  "key5": "FNWnnwLN3bNSHDj3sTkpmAkkr8cj72RkTDEUsQm1d3M8iuETdcGP2SxKCeEErCWBXNwBairG3NQkLofymrJjDpX",
  "key6": "4XScEiiU31qRNzE7nRVtpcwJ4cVBT5GoeWC9FEH7AWTbBpbnADGHJe5UN6ifBaasUuNh5zPQShw828vd7Qy8Tcne",
  "key7": "65gPBmox4w8zP3AukeFSmG7iAn7LxmVKKuzrV33erwJ3w8m2tn532wqYDqpYiYZuYmbVGKE9uXa9oj9BBppi2H4W",
  "key8": "3Pdbv8erf1jEtgNetoTY7vPw1j5SEKtd8SyFhZqRZi7yShiX2kanR2nny18NMSjezwHVeBN8m7y8YKQCU2gC4LLC",
  "key9": "2Vek64jN5y5rAJVX2s5B7BP95HThEfGnk5JgB7oE48GXX4gCxk9qfrhV8EZ6i2zEHfQeN6UGKAW9PTP5AkTJTWMG",
  "key10": "5s3DHEkYqcKVq7BStgnJKxGkrjcAWpmsSUbKFUcn6j75fgNXzZqyzSQhSFXKCtkYBH2jS8QkcNxgWydi4ySdJg5N",
  "key11": "9w88AGh43KrZh7gk4NQp2cfJPtuq3mzf2rM9eZrekPYMWeD9tZFLU5kEd3ZnLupFY8KBWughaMWwcyq1VdrnJGb",
  "key12": "2SoRyygjefbm74MbUadGWewDnynNjuGNDA36yFu75iMrUtDMdVxnD7PVg19sKyEYtz33oSt9yJsDg7q2XaXFrT9R",
  "key13": "51pqZCZZC73hv1H6b4cxESW77FfeSSy81D2onhK1qNVGndcU4DU1cT6GhBZXEgud6WvVtoEbZYhWuhoPwXm3d3gs",
  "key14": "vynppzSxzgHJQ1Sn1HvrpqoB2QRwBpXt8J6wkENxom8WhWvcAVZoZ6m8M211Q77nQXZcaDkMcWi3We8vUNJV4nu",
  "key15": "iAcxe3LjQZ38Eqp7jUkZ6bc34T2aZLWxpjWcaHNuAYoUt436EwMr2zbA8ktShnipxAn45je68QmXdE1G1oZe6sf",
  "key16": "39jabZwwjJAdKwmM6zF86NcUtQFohHaBLD2JNbWGskUCCUH1Bbzi1SciTLybee3rFgH7eCkcqs6nWfjsBsaUSpf",
  "key17": "3buiYxL87yAFUyNa1SaWYmC6RGVSoeuEeDpwCh3TyReqzGEuHB3M9FTxUBRDYpzcAy2DVcjdMf1SAeAtdAxDG4S",
  "key18": "hxYTAyiHAFNUSxvsXDKPdeqp3H6ckjVsbNhoPPHYYymdBGL644GF6hhZ7S7cVdyGMgTk88pbXir7QKuTgqTJuFL",
  "key19": "2ryLKaEWLvdgyg5nVp8Q4r8i8ZAUdGPmdczZruxGgVJQbc8GRPgQoamtf6ZKCnoJD4m3vYqXbGh4VBjpUi7sJKjC",
  "key20": "4qVpXoPZ9RfJompvrGPceLtZ5K2gN2ecRvcTMVkxW4QuLb8bV3CvvchAv1V9xYntisAChzTMRsx5kwnQffsn75b6",
  "key21": "5ny18TqtkP4N8chmhirevPGxv5WZKDPakr1kgWBrgCa2RGrZNP5WBSiyb3FVvrfjra8z8aRRXtY31mNbYBQDsUHm",
  "key22": "3EVcMn83LxNLJmYwz9Uh8Db89qigwnDtfso7WRxcKMT52rv6WrPJUwJPsEAw7bdaBJsAXQkufBtr8hJRjD6DhZhV",
  "key23": "2MmJh9eFRQ8FBTuNnW4JJHXixKwh6DnfwZenBriGJNfAtYdHVCobTnfax7GMhWXvCQp4GAmJ3Q3H9vquwgsPGE9t",
  "key24": "3d7rMy6egu2ns1Dv939geZoSjFTE4bzpemcYU8wQfLgc1hVrf6VgxY832Xz9sUMJbZFhWE28TT2zqWe95nydTe1q",
  "key25": "4ME2VviEf6DWKjdbmpinc4AtXsbquc9BJoD9u9sThd6G9diDQ5WGwCFjQmckaT7Jk9Cgza2EJ475HJEz2xUrEdsg",
  "key26": "5pR11hw3Q79aQBeBLQoZf1ABPXN6ZdKj86xi4GHTvQEQHx4cwzZ4aLYkg5VCTxP2GAZNonmLbp4jBMkLAasPfhMs",
  "key27": "Y2hEBPA6hkwzviqLNZWQozZqSxxEGiPPhQmYmMf1nNiZNKtmktbSMjxnuXGmDjBJQimNSJUMiSPjqBNgY7GGTVK",
  "key28": "V7FSqwTdzA6tbwMuaKE2Ub1SPVDEGd8UfKZTcfWMqYMT2fhsupbWqjpWnGLVTZZD1GTW3Hyq6Bp6VfuED5FMwWr",
  "key29": "vUYtkJFfHcjbzvp2YaZGcUZQPNJskNKH6KChhwFYVV7EYAy7owxX18TZU13AeLaUQWdTGdPtmXEa3BpajY3kot8",
  "key30": "2uNp3aHCYuARJdnvWuoZMvNATAUmEVXeH8rZe3De1HY9G23GWkiMpRNB8PQFFFVpk3cX2wweKNUk2xtkHNECQrQP",
  "key31": "45HkcjqXWycn12HpGfctbYubGq29KPapgeBh1ePhzAzN5HV3MDvLyJmqkL4aESy4K8qWEnvF8DdX5y5QQztCLEij",
  "key32": "3TCbPF4sJwmWUAevfjpqyu723kzNo7oJStBuvWeA7oKPNhAWPf3exBZaXrzCgVRmBkKR4xk4RutTh9k3XwGTZatk",
  "key33": "ydG9ztgtKXwsA5j3jXTXe54eyvRPCn2N1Gh4WbjsyEGKkYnEY7EtTk8FEbLYKURG6WutcqBLvAUP2LeCmj2KCpJ",
  "key34": "5TtQGX7y16C5PskDcAG2beRKjYx1E8Zprg75KrQSTsFZzHdzjMDqhjYsRMXYzDbU73Nm5sVgYohev9tRkSvGsdDg",
  "key35": "Rrh5KE8WvFtuULot1KSeMrtXuxqUoqBeftUEszgSxjAnQr2dcq1ioVopWnXf3AJdq1CDXVVzAgcFTfr7KPfenLg",
  "key36": "3w768C8QnNbW7XGaac73MgVijtjtsqAf8q3WwW7KUTNcZBNK6FYxi4uDXMEcrNKd7krLPgU3aTmQR5nk8TNsviXY",
  "key37": "4KvxwZ6M3NH7jHHQRF4GmadojcwMBxKjbFjukUJiq8PGtJCNvn3sywip1wyDT2P6FpMtyYjQ6aZ91NGygeio9nRm",
  "key38": "5yDb1JdGres5h3xroKKrZpZ4swqwFMwmYeJib46G1H4aKg6RYnBBKcTuWMm5r8vVHQBknDqAGYv3hf8UuXH4NP4r",
  "key39": "44v1rNEDsHydWQQ7WmEQZ4ZcHTwLVW6hqreCdgbinvJLUMyw1CP1eBwUUcpv7Zh8WjMoTMT9HzrwtvWLBmHtVJBQ",
  "key40": "3DUagCejcCz7k9xz1SvXFF963MjofnMKwqfbPrEvMFh7WdvTLSjA2Hm7Z6ycD6GQHQ4nq4RU7DicZYyVaYTpyciK",
  "key41": "3GMb1ZG8Xzoi8AWLktM33jBiCkB1iRq5tSe7fxUNCptyPJLsSwWvszCyon4heLdfvdBB7iTzFvMi3qKFS2m7rAMn",
  "key42": "3GMF1rJm137tgWEBLStA5PtxJA7pfNXHJDX3wmGCjqVPxJNjRjrvQGQWzRBQUpngE4cL6MVQbXfJHCzT1gzMQYbo",
  "key43": "2qrUXr3phC68JkkwCagLK3gvkkqLtCMpuRgaoQZNdnEqUruwGZBxTdP7ia8CorKHkBLewPHzcTm9vJrEg2ZLVcb",
  "key44": "5WcaZz99KKAfZYhNQp4HCZKvxQy7Pm3ZTFszjvFWnTsKn6eMhAH5mho9Sf6Qch4RVtQh9D91SYtnE2vQ5Md6KtDZ",
  "key45": "3WTZ6MXiHFj9evK2EP28vhVVsuWEFsHmt1bVjpdhmyA4sRq3XVdpwXLPqK5HzohP49K4s56tVLNg2UA7nYYUnJY5",
  "key46": "5tqi3XB2PjgNV2YTgiPUsHY6U7ogLnpJpWWNuEwZSSR8WjayEi89tfJAJfdAwXNGRkVsFJLUwuyhWuXtneaZeT2y",
  "key47": "38ZApjXfVeVRz3LCbsbYYbxEqyqiZYhT4dAng4Nj5wGwcX5BfESZfeHjb8NRivBUF97C2v4we7tWzX4gvzRHy9Ca"
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
