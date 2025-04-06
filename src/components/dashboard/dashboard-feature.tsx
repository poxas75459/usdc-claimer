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
    "3ciMyQQ34qTUqKj7BVx6ZVWX9rXuGnzps4JkfHdfxN6Z5t4zdEmJv1u5t9N3vpaKozh3FkcMgETpi2RUqXK54peB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3126Zf2BBCU7jcoXTBz9LRjqPPy5YceaaQBr88G4g7Yt1A4YkxwymHQ5Z1b2WywN726kJfG9XjdyZpQPKCPJitBL",
  "key1": "2TEWUYxyoXtTvsJRPWbAWtkcjZ1QwCa25NPTnrXWt1mefN14BZGAjHmuRP1UGMKTuuSpRqJtx81ghzWaM4gwDS4n",
  "key2": "4cSkBS2wSZUAt9N1Gt4kvLvcoqUsXtRE4gpDnbbWnPsjLR2tp6ZuY7qUZ2fm8VzR9tRMwGt4U88xdLdNKatcaZ6W",
  "key3": "2JT8EebS6gZDK4gqbm3hVz4MHuw3D34wLLQJnvzXW7CoBkDpvtycP1E4trLYjfXATMaxXdSyggwYeL8hYWzFeny3",
  "key4": "6fGsjgWg3hc1H5Q1aX2pV94nTCeLAob8Prer2FVPp3Pc1V3tq5DT92vcHYm7oGzkhhwn8eHdq3WGXQjaNvkznHv",
  "key5": "3nFEHSgo1TxMzt6oZVsKXcLdkcLoQrP54o5YR6UYS5pdbgvtM2rN7kxYYBuovJGnqUHMkZBYjshiKVnFyf886gS4",
  "key6": "4UNtizbCcrz2NdPbTueeSNHA3dPqqpeivci9FJDsARD3Re2geabKGYrJvsU91u8ZDAcLvzUKPKL5misX5RWFjBRi",
  "key7": "4YsRpJkYVf5P7m1sZR5bkQuQoXpGWUi2sotFdwa1jhYb4BNdSmdyagNLfTBn1LPUcWEz4q287wM4tJxKkpD1v1qF",
  "key8": "5pCf2LMD3VjDCrALEWCajD8Ao7QKiqAy5sfwgbBwqQ3QZLR3qsTA1FMvrzUHeEWB8RMeXe9K1RiRPHzBcEuUdZoV",
  "key9": "4N1GHrScVYZDryR2WFonko9u8BAd3VoiqWzyNhC6McAwJb8oWqmSaozJ3xpPGcVPf4ayoyfTrSKtTWu9R5s6KwLN",
  "key10": "5VAWCN8seiScyCfb33189vJnr2cHheLBPCW3ypsj5sWDg2iTG3fNe8tZEHGatwDxwke1wsEBaSrbSbX91K1ubkur",
  "key11": "56XQ2EP3nH9uEfWeKcMHHcHGU69JJzYTbhdHxEcWDq7pB92zjeZsf5Hmq8oUJJqouLUj385Zav9HaemU7F84WQLG",
  "key12": "4EkCXaLJGY6YZuhZFjy7d4TWtbfmPSTcqsxL5WgLYh3MsYFRGTW1BuVFqYKhiC5Mxoe3MD47dWsmVdJSYNTrrSM",
  "key13": "4AsTs9EEJwGq5ox3XAgPzmLG8cAZPCqUxDGubnbhahZhoTmQLHcZFpBbo7yzdLc8NQznHa9BKvVkUVjoxs31S4y9",
  "key14": "4cfzjCpqPNrRsY5b32xzbZ6rTb9nSr8CBxYWmaVSZb5GuwcsyF1HRGGNStEvKFXfQWA7D9vMXae576KLqxQpXUQB",
  "key15": "5WgiSmfLtN3WHCo4NGo56LjfB53PBwYmvXsjuHefh1jWqyKVZaCN4zrzv1gmRNZ4UDxVsFLguxcSnzJ4BzFvRmbv",
  "key16": "33AX4VY6wuUW4ieK92BjBAfx6UWavVxBd4ehEoEoM6H3EhdHX6QsgmDQANNxFPrKWhKDds4jgGWoi4eoEtE1u27V",
  "key17": "2tEjQh2oMkuPxUuDHp5zVtMMo9Hn4uGvQxKrGS5Y75PA3wZsfVLATgEnCGouVsNb4Xt6XXXui4fWacVamx5qTx2Z",
  "key18": "3y7W2dDktjShaqskQpiYbxoxSe6iNi5Srvotn5fzSQcjbrg9EietDfXg1M3ysZ8AmJKaatdGKbuxNJo6D1JrRUSu",
  "key19": "5v9VQqWFN3BTCD8yoGCxAmYztNBCuPXpnRWqg8EcvwZrrDHzrgFCH3A95RjdWoRGSK9DCzicZimQRbD8auTQzEAM",
  "key20": "2awHC2Ket4ob3VuRiJGrtpeQ1Bk4YGTvT2MKKi74tCFyshxnwFue62sxqPpxmLpERtdSvfkkzgb7HTGb6VxbQyY4",
  "key21": "2GdMRX8otZ9aJWAFCupzMd1CMSGVoi4T3uf4eFGBZF2uMGtMGJDD5bG2uXKPD8qcMjs3THViRnfBz2yJQsDRjxGj",
  "key22": "2cxgqY6eNceh69vBdMv4kpvwWMr5LmXVPDrXWmzLaXatd96fZ4vbu2SKifDC6iBvXn4Cy5PKTbUivR36EL9ESSm9",
  "key23": "3SJcMo6FRFMSKDBaKuQCK7hYwqPoWu7ysF7LAdfn3PUt8pGPcnNYBBCZHekLC5tbH99cuoazL2JwH7hWt7BBk6EL",
  "key24": "5j5nxnyos662NCfacsEzoA1vpdLCqAMJitbetwAnzrnHvmtVwwzCzNfKNETz2vt9THASzBNGzkHMvqnSKSt2tYhP",
  "key25": "3Cz1MF9h9GL98Q1QxvvwQfxuVYB4wSCjaMewa1vyhAuKzBnT5sEHjMSgynjUDxHEknyG1nDG27enM3tVNysaC35",
  "key26": "JKTMsj74rYRcjJhK6pJGqD2jTLVAVjNv1UvFXPzYUHKKoxLu3sGRZ6gBm5eSYBWEysenhMo6doAkgMkeDgE2Nn1",
  "key27": "3ELk5i8S79E4NJu9rtuXJmWZiu58h7iJNs82rUD9xFmjSWawY4BekRaPPjarYCYtGvgNvd1iCxhWfQR33km3PzW7",
  "key28": "4fUpC7Ej8TVWGQ26RHFUcF3oukEGvYNa6nB6SVUu7NcEiNT1hEC3C3NPowy3jDEZX3KLdHsyfrpF2J8YM165kt4t",
  "key29": "k23w2e1YnHwVay9XqGiDV2BhukSRjQuj8uF6wmJ3haZXagt4Cj3pjnCVD4ZvszGBYudQPtnftw4tL2hSoBN3qux",
  "key30": "3RkjJ6uozid5csnFY75a68fvPYgs33ni5dHegZkHKZRmbZKMHhSG5RZac2dfmFEStjR8RxKj2MC3LYjUTFBwfTky",
  "key31": "5kX22KubcsKveUDUXecjdSm1H1btqLqPzq3jLMGBuhX6Aq2vCkfonAPhRBrN3xzzBjgU7NKjqVbhNnHj8EZNDr7Q",
  "key32": "3SiUBQ2nDNVHto2yfsdcxkaL8fsvxePSfLsojFYmudXpRHhfN3Kz3AxinsnHyexXKo5jEP7upkvxcJRYk4MbyTUF",
  "key33": "32kVxcskCD2UXmf1ytCmkAJD97R8K8azKasLjToxp8yPArfsLRhNW5aLbqhw7iGSPJ3aaav4n8J8L3FyLs3vTnCZ",
  "key34": "2rVgQ2oUZ5UwCBgad4D2qBRdxGuRVAjzL1LXCwm5VaeojLqNtRPWeh5CJ1C427R3JtviRjA7cT4z14dgWHrnUi1F",
  "key35": "4jpJxJQBEwh3egB5uwE1mzpXXseiDpqT2SwQQ5X33a5C3J6gEY46zQimGu2jwjnsrdeUoT7bT6ZzET9GSiNCPHYo",
  "key36": "5yB88yLTXus2LSs6Ens235k8wjA19i2FbXMe889ptAxMhyjjfKfjfjc21ivBtej4xDvCSpgkGMLKvKLcQobLapz9",
  "key37": "58C46wR5b9iRQucX1sKwkwRvF17QpWTjN4xEvXXA6Y8MYANoSQF4tysZDBTjJCKt5zM9oGADapMKkqdYWtWPdUCb",
  "key38": "5e13pekQNEjiCSy49i2DCBSYzRYMe789g4aQ44pJcwkcMnb7uEExMMEnYPWWHn5JJ1rVg5XJJRx5rmZpeonJxtpj",
  "key39": "5GjgQokNroDMSmDDMg6t7bWez4KFTnNooRk7wqbhGxJRtckQCPRCYo9oGHtAYcRvigKTKyMbH62QXF78qiTGKo5k",
  "key40": "oaafcPAdheL51or3Yhkb2H2jyWrEVuYR3b2rGkRMwmraFoKKcy9nfszThJrxNGaFZwT8KfVY2wqSAt5wRhBfd7B",
  "key41": "3KTKQM3FQrKFqWXTmGqpqiPzcWbp89nDH9xBsm8osokoCcULZfBUk4dApGPLetVGWfvB4wuxAYa4RCk3bA6Z88jK",
  "key42": "31rYjG3VVHvU8osMUiaRVZvt893Up8hb2KMPSid6PcBQTgoEtVJoBL8XHiTKvfxwDvq5XwjKJuGDWT4nWoU7z1Sk",
  "key43": "36aUGuNRPTkgYRxT4uaJgzVmJjHycqrFtKacGe5sei7bp4VfN7q2hPAUa8fNZVUEzHy8RPMqw734K1dSgD4sPqno",
  "key44": "3bF2jkcMuqWeH48uwjdqY4HQdDoP42eJgcV4gbSaYqXDGWRQA3vmonxbW6b6PLq1DZmpMdoYmxRBtnoKKC8H8iPz",
  "key45": "4EPJiMrg1YCujypwZhYqZrhq9HpggYFP9Ti5U44CBME9k6WkS9Buq883NYe9mG4phwnKtNSKPDBQfpKcBJp7zm1s",
  "key46": "48ogLnuK5NL56qRWZykgcqwtmqsq7CfUvTJacC8Vyyi4W9fhz2Fg4jYYpaAExfs5VSQtxaCGcVsqziNBkwQxkXEQ",
  "key47": "4EF5TqRRYxrW8ZQ92Czn97a2BFzNCrRVzaeiUg78DaLoXvJn73dQYrRVk6MetZb2PgpmDTCbJ8SjMkZXWjy6SJ8p",
  "key48": "3dUB2NNGgWCtoQvdn3zCZKNar9Jkr1oe7RUrzNG5mTNczve29g6DxNsfaPMWVS2cLUrrrFZWRm6XTFW1vbSNZcUV",
  "key49": "5puzohdBhLiT3hAJfF6V5Na2aHLQBSv7WLZUF1Gu4MVh22yRdED9oR345Di8qNLgB9A7X9oUmC4CZuqfVibTzZFs"
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
