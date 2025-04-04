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
    "5W4FGNjeQEkUWVJDxUxWNwBzBLPhr6cTeAW5uquuUeUuDVRGJHUXAqeoXUvyAnwJn5EKpDueqfgXxrQbE6uWCuwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpVXFtTs6W9FYZSUENEi5WqqSZdeePTfjaeS5yf3CY2rgRzoZ4aiBueo1KKJ1MC79Sqn7XVJpL5A91TUg6sES77",
  "key1": "jbAWwcF7NeQ2mpooSB4oRVZSE3sHjBiajSS98k6PCMUKzknpBN3NtgHt2HnsuTHGJRM4xjSPLqiw44KHEHYvWUB",
  "key2": "ZPzehj7juAdpkz4Q9nVsjWUkETDywKaatkLn6k5oizGSeBo46G7PdxQkCq8dBP5riXjNw4hxhCWyhZ7XWLyPzao",
  "key3": "2yQd9ctEw2FWbv74JHx1BmrSvu86T2bmyzLd3vrcyaPzXigG3Qdci3Vrn2ZTWfbdf2F8zYDHwXUoZNmhZcYvdCpS",
  "key4": "2aAhMFbfGBfyQRcwq5cJ88XFGuFofote6MsHuv7A3ygpdRapcXgG9uHyiEvc2KUXxNuYtkiQVaCMy2ENvKfwzBup",
  "key5": "52FrXhnNM8gpATEScwETnvzjDbxw4RLNR9H989UChSK2KbkYCsknQdrF32VWVvGBneXG27qrpR8Eg9zypnDkvdwz",
  "key6": "4W9reXpUiRDjM9VrdbpAS9beZzDYnfG8ChqGtTu9oxEfLH5nkBSgP8S1yMLw8668XPXHvZkHuF3HjCx64vWZm5nm",
  "key7": "4T3H8T2xc1413fRY23KfGteA5uSNJGr1t11irkVikdwXEqT8WQLZsgukfzv4t6U8Um4tSheDLSvfStsQxZfvDEUi",
  "key8": "423dAPXgkPdZUcFU9RRNXzNToWnGaYS4MSNYBLQXJcdLLLGTsKRQZZ13Bg5pjDoVvCEj4wU6Yb3WHeGVqjGFt6uC",
  "key9": "ueWjYdpqm7yGfyWZj9gPDWC7aU9YuGHUMMmPtN7cv1W6Aouq8vPGJN8evrPgNiJrWjCwz3ouQUyULtQMetH25ex",
  "key10": "4edMKq4pZShkcNhaHX8hf5vvyHhXvkJZihwiU1SsmNrz3D4DexJ5hqTbcAX3idWnRJ3As1XwYYLUYedyrB8FvKTQ",
  "key11": "Q4Veu264vXL8CwRB1XAw3XEg7FS9wecm2b1qn8bo3K8bBs9cKPNoqjFUgRxuqXm1x6Mkric7y3uid7jgFooSLBc",
  "key12": "21KKspvSFU7PjuMx611h6T4QEtksPbW2QhvLbyTLncdnNCjpgkkKqoGthUQDGc2AF4kyysB21tC52ixSS56N3qKz",
  "key13": "592WW4f79gBkq1ecMwqsFgXaMPD8GgrD1ruSZRyMroMUQvmJLvRLDe3s1mWLrSWxPbt1P3D4sP45egrkE6x16xXu",
  "key14": "4ijTpWjj4Xn6Dijy2qkiehrD6BnYGZdxAs2Wo2BMLi6PgQRgaDPo14LAPGZX8ngDD9fQrAVDJrNEtsJa7XgFnSxj",
  "key15": "ns7jSinPuf5BoNYqA5noWWzRSmNJZfSiyDNbE6fBffod6U5r7uAbzor241KMhvzQonBd8hpgjiDZiEZ9TGRoj8T",
  "key16": "3SSkF4YF6jQJ4yrSDYTjVqB8Uy9kF4qkNZTrioEHr4hSfFRKnbZYwZ7fBqWrLFzPeuicCQQ5Maj5Cz7BU5MuRfTT",
  "key17": "3ARLgJJhykGE4E31YcKyhPVGxTckmGFxKPcHY1Q8EvoiWYrKiPaHM8YKWAZbvPZVsfDCa2wzf2td29oNSaq46BLA",
  "key18": "4D6GT3yFdroKAPDeZsBttChWiMG3xFgQ9QHMUmDuuVgQFATs1E3H9h5TFqyPj3zJzTwvTPej17c6yt9Hfak6whBp",
  "key19": "22RFNcjYrXmzBimTSEKqgasApsY2VS74NjA2rUWSeyESuwhk4C13RWihN9dTE8ai1t2MdFLQ1dzxrhzXpgoX4aAE",
  "key20": "5spAQNYEkFiW1rtHq78a829cXyeXiRrUos4KnBFaXzCL4yJzAKaTbWEeyNcE41fvN26Qpg2E8acD5tWgDKjGEKWS",
  "key21": "22FPKtckvKJaj9pAsPXsokxbtz8kV5qbpqGHHd3PFyFvWfb9eyhRcwHA3QtKypqiTobbdkiNLjLtwQiqjMb6J6w1",
  "key22": "4oR5GhEp8z1Ame7C6SCv7RdnSqQe4g19F58DskjbbEDL1shhYf49MYMyb5zJLcfpKX1ZtiDLhKMEZC8169UodoJE",
  "key23": "2oGTEesvpnAxBdobM324bgFTQwDBD1RAH9DmsWpaEtvt4FWAFoTystXwgLqhf83rt5RU3XqscLz8cAyRCjS5keGH",
  "key24": "34NnSiLhWf8Ug8n4Sgcu7fHWwGDYA6QDLDsTQ4tg3paRKaJeRVE6TW2r8LZFpZVfoa7D35XkDTsZbW2K8RCiYzYR",
  "key25": "5KhgS4v3fJquwVph1U71mCiSCfaSB585vB6iXNhe1SkFoWNprprKUmDbDMs7gbJMiL49d7djDgxwARLJFvL466Gz",
  "key26": "5inUqieTDpZi4ruyqDkNfCEDGU6e4QmsrQAkF4rWMzjgihrYHenR4DXSeShLPPRvXR6YQ7tpVUmuTaTydi2DhpLU",
  "key27": "PMpW59aZ6AzTEpfdjSJbj9kadYwXMfMATk9Md9FP3tqgiAUGjYTU48WFyxTJdWvpVTKpsodJ9Fs6y9Z9eGuyRiF",
  "key28": "2PLrcgnFQVUVCipqpBNkhK96MyKAqbp366vWKGXmFGvZpqyEqY9CZEswyzWyTUn2pJ1K4oYsemJ4Q5Lo4Cwa57uD",
  "key29": "2SwxzYsf6KV9YVcvSsQ85Y9WrRCPtwCUbKmG48cBjwDeRffC7XGzmyTiNqVkGCXh4LTwCX7Y5hmgShJtxJTQLAPP",
  "key30": "4pd7r6UysugrAXg5M7Q8Qv5bXW8QDNwGxctJ4SRFBsmfMMQFPhsbHmd6fRL3HJPdroUUqZJKSeygMoidXmetVwpt",
  "key31": "MKeuPD1MrA3zuPYaBUWXaGrYKvgaAc5FKhMkfGNTMSkAsxpLtTtwNdQz64TuvmXpgaAL2poF3ERbihwYiQRc7V1",
  "key32": "3wXy3sx8Sz2TiKETsiZNqKnMR7xiycsFCPmsmAsTAMkcwS71oNRvHPSwG8mTjxcacGGXgF2vWMvt4DjXYMQRppci",
  "key33": "5e3Ftfi2WeczMXYpuqHfjrJ3E1Z6HJtChoxASdcqKV2wdo3xW3uZsREoRRktGXFC9XqVKPXjX5s6LAnUGrAYcYB3",
  "key34": "3HPCKQXuCMXwX7kGiUywCv7HpMAaNZnRbiBJKayjpH5WCJ4GfDaTbNVkJoX9DoMku3EhL165MQQM59VkvtatR6rQ",
  "key35": "4bGYXbGDbzchWY5mfBKcVS6TDTq91JUHXsLcudzrB3mFgTrMBwmTY8c2WuyM5jVBfe4np7Ja4MQQmQLUBSKieKqj",
  "key36": "2fBWvdPP2dYt3r2zFNui8uCVybteyp4UJxTNKXmx5EHk1Q2ZT1pkQ67ZeTHcponsqQPkxp6a6H7XVLuAt2KEfYaG",
  "key37": "2ZLQ3Q5ufbEeWmN6mUw49LZKkugYXrPpGSJhVn8Dz9B6kTuWbKT6J6gyWMRT2xZy79MqUbMS9Ce8UtTHxM2Ue3iR",
  "key38": "3x2qJFTo8CvjVUx2QPbKzzLVcpV6JLW1fchUHw8iz6ApLrYNej4UCCUyXnNiKEviawZuBzz9i5adfFURQc8YQjb",
  "key39": "YZoA5qUREmFioGXXsZN7MnkJcguESYSfHro1pQMRxVqz1DB6Stef6LWJusnyajYwaFoMzHGDUw5YMVhNi15nmY4",
  "key40": "4UwkQw7UrbxzW7PykNKBkhFTLbPgSvFAYM8yEqukbnoe8Vctgz5J97AMtXK5vKDP69Cpb6vNRXvRMkiPzdiBXwkP",
  "key41": "3RUgaJ9eKFefrfx3qwMe6xUkU8bHrYf2mF8NdaArTDPtHRTTQN6G9WRqk8S69a6Yuk3zGXh5WyEbUwYbZTfkY6i7",
  "key42": "56Bqtp1ESNQjrqy27aXJkydekCQh8QrtqbDDnXdcFXmzjYbccBmKvSrNjhxmbDEW59xek9PVXpn2CpP4Ap1hMBK6",
  "key43": "3Tdkqbt9xhsJJZtAQF9nMyY8MpP1t1VFUNnzn8shfyHbxN8Zmm5qcvd29ewzbw5gxLJrHj4T17E7CL5TwR7iJb9R",
  "key44": "3ziyocpq5UzSJ4Dvv2mAryGk2Q8x9pvMWoMgWBS1rWr5mKdNVvfG8uK2ZLFusieSKBgJPmcs1nAQYiEAxc5ytmf1",
  "key45": "5RbcvsTxVAMUN9aUwBnv73LMXhZiujKGmmhfg5T1fQCrdFT7EqamtvVATd25Dyp5Aste5nPTNpGaXvTgFdqEg4UA",
  "key46": "qwi5nDGBmsDbb8AzmJM7xttFiM2AgxPqPGnv4n5ShUAYmBrzicvTRr4Lqj2551jSx6Xxx8QpXfijdQQsBJjyqVL",
  "key47": "2qU5KjpWs7Q4CHPvnGRBrfqTgfs2aGDF7e9m2BZqJAoTPAyj2xe8NXXNuxurGCJxYiFTRr9FNvSGCyzvNb42KSCF"
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
