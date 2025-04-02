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
    "5vQUJaAHc8gZPDnrxcAPF26oHCzPmDXg1QsCLkT3XNRgcxqsS2LCYeiVsd384kHG8gcBGjnpbAeYH1uNLRzraBKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgxaYeHUSDZTaMcoB7K2uiexsjyS8AbPzL8M7cCkZNEnuVP812yj9st1G9WrSoYA6n5cWjrdzSwra3ioGL6wFQn",
  "key1": "48bhfqiwDS7Ne3zxkLthotU4UjqwotaRmD6W4fxg69oVENn1vttoVoGxmxL4E8sdzQiHCXZLWu8K7tw8zKkxhJ4k",
  "key2": "3eEFHmRcLRF2LxCvxcpTRgrPYjA4YPhYLzCDgnsMUWELcijxUubfqnFBuVZbeGzbsZiiDJmNnK8vFhzGgcEiyjDT",
  "key3": "2QBcCMYa539eV1sFS2HxMupe98vZ5ohhkUKN5yScXeX2ZZPNKLg9mM3VxGNnNphCAjgkuyr8keCs7Y8Bx7Z57JaT",
  "key4": "3FyyT5m1s2rSrhwr1SEapVsMG43c451sMZQoMgMXBEPv71tgtSBceXc3V4NyuMGDyPKgQ1dT4VpFUeero2XBgXB5",
  "key5": "5phF1cqNZWiGTr6Y1fL8BmKg5fUFEFrZQuDPfURuYdmaeeT3S63Net3FQPqzfNHLR44UpnJvYRzmsWn2qhq1iei8",
  "key6": "3uZ7GZmAoz5XqtKkd8S82vAcJK1FmvgevkbWz8CzYizsre9X7YnqJcsswZxaubnQ3ScV6jg8Ly9dpT7GQB29BLz3",
  "key7": "33wHTDAXgS3oZ7cQh4Qsq2ZC7RbRKw6wiKcpeztFFsbYRudoFp1JzXwG3N6U9PQEKH54RmdBv3mJALwQX92smTeo",
  "key8": "5QpgzvvCTGha4BKrS4M9wShzakjC1UgbpAna1v17T37GHL9LXb9hQrw9mYMHjkoLiww8YWTMqX14oc6A8ToNzoSL",
  "key9": "RrqFEpyjoFa9RaGjgcQWXtsUnLU4qmntFJgSGbRcyAcahC7EBfXK9EaYKWkoSChJbcDDgZW6PPeXCRWiYgg2fFX",
  "key10": "3A1Tj16FnZ9M6AFmYvWC1aNoC3igqoiV8UVnVM4i6ap3DBpptKq5pcGm73NKNLccdCS2r5pEv1aS3AzmqjJAjGMR",
  "key11": "3KmRXtbgr8hWcuhWbYqLPAFFd2qV5utTP78ydysvnqhoy92rQrSkHw72TZQVRUtKe4Uz44UcShPoNnLcCX1AUPp4",
  "key12": "5PBN8LV4JA5MkeixwKBVXQgsQwgeFmPwdFLgeSZXLJQ6DobwDx5s1kGB1K1QeE7vffdi2ckvLCiagTmYknR7hU51",
  "key13": "2cAPNd7qtS6gYav7gPBEQ8jd5QhfpQQB9TzWBF8B9JWKLGajjJLfAetiecQuVddSzAovTCyY6cBTmWiMRW9xvWiT",
  "key14": "4B4rRzdxZ4WyDwjLimc6ceM1Nt86mbenSiApW3MPy3m4ka4KeB1bpMxAhPiiUL536obe5jVkoCQvtQ9Uhv79GkFz",
  "key15": "3wCqMh4hyHB4Nc8zS7cdEp9JgYCNtFaavEkZRVm5jyL8Mtu9xz27y8aD8SRC4tJ7HDmLyMBtyW8AZgcLEseQf9e9",
  "key16": "2aVZoKxeqcAhDhEkkGumWsf84gejiZZaxhASX9B1tbPyCMjr3nGng9Ac1ynFurvbivKJmWHZmVn6o4jYFtsgCPCM",
  "key17": "4R9B3zG3w4tPr43ZheUcfBskE86qM3BFLpgNFTUPiBEVwYxXyybiQCGk2LsydB7UUijWKK7REEhvDDSeuvneoctZ",
  "key18": "2zNur3mwwutnV5j3ijMXNFC8CKNkKpMfBUAieUWSgHgnEFkmDCeDLtox5vF4r5rvh9JFRE6jcqj8TYw9C5ahzLzt",
  "key19": "5oWJcARcMoZoujHzwtugxqXpvM7fse4QbCA4ADZXeq8yDrEycKTuPNa5czBMEgK4mgYKFmYq1GyX5HiGEayoGQsX",
  "key20": "4gbfzkVaEF4nCAyTc36tr5g6LLf8pjnji9JYBwGrwa1vDgERxzDpiSC9sWrvhiHBAzEVZYSFABnpKtAPRDMg7vQS",
  "key21": "jbSPBmHQgePqAAMahYjtHzHq1ce512d9rxaLdV98o4kEbXChMvNFZigJYA3Xs3fzRkrbf1EjDJR5VHEJVQfdFdK",
  "key22": "2qTHhUM9FtV5HM7rqRXpqrSYYSdLeQpR2Azn9XfKhMFMbuLQDALtPqmQCdviLvtMY2ShnzZUciPw2i8QhgKHJReG",
  "key23": "4YwzF9361TJsebzskxNdiRA3aS68KZh3FPcB6G5qy7icNS2R5a97g8LuJqRBH3qc15kdkncHJZSQUVGkUew3RAwv",
  "key24": "wf14WQncSK2vusZpXverJoKo9D6rahq2JPad2HfuwvmhY8adTRbGzKkw2cpJCFfvD3MdqMxabmuTXg9ETEnFELG",
  "key25": "4PyCN6MG3bzYts6SrHhE81L6mpnjUG13tzUkGQNEYP4DMB4aHMjKEDdw9K81fC5e3NTRCedhTPLyMge5avTXYd9Y",
  "key26": "EvX3Bg8Tzch6KZ9TDYsKsRyYwfRUv6NQyM7cGsLYk4W4fVA5Nb4Ry2ifjqXaqdBwZDquARaAST6uTBVA8rKRfLQ",
  "key27": "59cU7qxEBJ8SkBPSAvGjqAUZxtM4omUQMUK16s7uTMdchRfrKdgWEH7otZ9jh9aFH8da9wcrM8RuKkWDtcjjQ35d",
  "key28": "5dNMxL6hFscUwQhYTXjBFpaQeupPDFDY69km17RVTTSjxqgh5xncuV6BDKMLDADia8ZoLh9ctUusMHuQK83SCPtm",
  "key29": "2UeWT7xpeLbpaakGo4C898ckbPEqbHDv2A3SwjDEhRk5qnJHMsKB3hqAEEYbqhSJwraE5zcFyQLLo6uYzE7BeT9z",
  "key30": "5pbHHaLDyP6dQGkn22Qfp1ma7kfEm1ac4VzWb9FWpjTvfJ766XpmaTDYkvTsBHsf2ePhxra2vj4FvoHr9ANHui7a",
  "key31": "VNmP4BGoGBSLP685eMQEzoH6L7QSJkgC6ewSQ71MAqnVLYUyZDyeScMBQwktn6DVkBU1gjsHEXSnec7JoXXeksj",
  "key32": "4WT9Qop7QkFdWu7VgkXBxgguLzeHXdFBNnLe71AuznaHWNQDnupCuvtcsDMiHWpTsEmaHG52pvDAxf8fd3Po4rrc",
  "key33": "xirHx9KE4KhwEKeENJAs2A71cUg8nCYF4qBg3VtWXWV4Z7HtVHKbxZY1fmXVNS3roeTMkwJKuM8m53GqNtN1Y88",
  "key34": "ZM38o8DMt84jAkJiVPFpbyhx8EKhMy32DFTusuAbpZ87tLM5Lca8Wf2RTcHmD3axXoeVKBC2WvveYpD8XLb9vQh",
  "key35": "2jBDjkh6EgTDZvZnwWeBaZP8vzrvgg1yqFwT9gLXv1gaSKcZ8r1a3jBncqpMM7r56hAoTJVBoixqEj4dqPrgKRZY",
  "key36": "82JpMJmCxsJNED5vujbeARanJUE9Vy1mbveDeZpBH1ky6yuAZkNB6DsTDUzrqLhLMiQ1U87w1sMN9XUdwKytoxf",
  "key37": "3DCyeackKB66ryGmG5HEcEufKqHanin59C4jA7VuWMd3h5ZRJUsRwmPrHBuDJodM4ZPkHmLBmpH9M4wPompUbC5Z",
  "key38": "4PLAraeV9o4mLX4uSXDZ4uK8mDvEnsf1HoQrWoqjyHG4sMPDfbmvnb2T4k65hZWAimi9GfZ2U4neDGShT9xrV77v",
  "key39": "2yKsHXeBNQ25bJ69AbKNVCsGrthrrN48DWCf43GJ9w6saRMua1YrYmnQT5gvFGKKEFhwhvmwcwYwyZgKtjHcPo2N",
  "key40": "3oSKHo2hrmHWZzqRjMZLoMu5UxrT1nuR9xvDUqqWf5Bt829tdFuHsGHBXBZvpTaikVmteDJqCdwtL8cWZ3tA2S7",
  "key41": "43jtrgVrWZP9uCYBXJoxKFovK7eGoF6YHo1tBhJibwMZKWc12ypMaB31KmNXLvfySY5VoVKSTgGPT6WP1WNRVwVS",
  "key42": "5Qh44huK8hUPaNe455Sptb8G7mmGEMrKKgBoUQ8FqcX7UVdUizLxgwXBqMsDiu3Fjm1HV9xkbCkgUuJR1AShvM5h",
  "key43": "5ciW4Ukt1YbDGMBXXaXkS9LDH5Wr5SbD2RBBNr2Vy4JMf4y7N79meDMsXmFQ4N2nDrrgBAhs9RuH5fhMnCohQGhD",
  "key44": "eXjUEitPsyWsmY4ZsyWjpEeapHGwAJuuHiaXv6mj8Et6Mt9d9dkt6CV7eKD6ZSbNTSWyiEZaokdqNzy8USsKtds",
  "key45": "xiRU9xGvPnVAvRjNQb41td88sXiARUfucVX1mzpTgzHS873J4rAGTMPQU3ykRWEwgkHy3HYJkRP1qrvhCwnJ3xu",
  "key46": "4Zr8NH2wB3xAHz61hMFF9TFvTh5NApXVohsNfrN6t29NdZf8KKtGcMo48c4uqUSEbyvQKUp3UjVftnoKaskwaCbL",
  "key47": "3xNdf8AMdWdjzTRAwka7tGpP2KG6RtkbvdYuCBJc2Ejt4E7dBFRTxDzYR4KTUqZKz73hGPpNdrSd6NWm9HFoi1x2",
  "key48": "4Zb2HVabhDAab8fX9BvZcorrBUxBQJaB6EL9b9qKRqanhAKYjMgmh5KssumvZm4zjhHQascche1Ev6qjcGrnQtwZ"
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
