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
    "X4QkSDZNBN2Pp5NGmZYbDkBvpJy4sLhKq5DNbo8Lg6ieiFpjbV7HwzQdeSK3LKabEzV62rhkLpRk5nBE3t5icgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S65WX36ZH52ZE21zEymgYuMd2EnbkmwKqdDpgXyRs7CyxVdCk7a9twMyi1qjLwLm1vYUTZktCrSmYEB9XRro57M",
  "key1": "3QHtK4QYzyXqoRTQExrKdu7uddA8ogrZ8QPZ3Pw2bWB1um6FfbR4gLh1F5bSNjd6MqQhWTuCZuwU3jc2kKmB3m7Z",
  "key2": "3NcJdHg59V7CpbGnjFXspaH2qa4yWAzeeWjLwbEXQFwsSnKqQChn3Qgebt7ag21SRTSUFUHrfHvBA5gjsqbCzSaD",
  "key3": "8Yw3k74P2XYSqhqsnRSFGnvALSEis2Wpeg3zYPUDLEwpgvbi2BzEQdGjMQZj8gqjdDSujjVZQsNuiMNS6vCQ9fu",
  "key4": "5o7Zh3dXhaeMvRuJuwi9XCdoVYsUzixD9YgupFsyk1962jUSZooSSiEZEWF5rYoXLsTV5uMhg8w6du4JiH5AAPgG",
  "key5": "28BgDdgQ9YfQeeG8AiCFmrTvBZLLzdRoTwtHqGNgBjZtnUMMYoF24FWVgWb5PQF4zVnWnvvHLdnEh5jaKG3GaZQs",
  "key6": "4pd4g1zsyyi9FeGT1wroDVezDuguakDUq7fzaqP1tnUwHVp2NpYLPcw6oWK3tYKKScZQjGwRRehiWLQfkouny3f5",
  "key7": "4znW46Hid8rtomXpjHgPXJcMoi1cGpZteb2Q8hqKUEYBQaA1zvZzQq2ADFMTmuz8kFGaFmXF8P44eYAfK3fSszBk",
  "key8": "2ZbvtCyooQ3CpgkY8dVpFnWV2vG1KgyXnXyG9t6JxoKk2BhsggAdjjWf9dJJDjtckhBwyuimKwZFqzEqGwpHgyCT",
  "key9": "4MJLy7rnmQ8CLbdyQKEeZqUeHp1iKnEtxuLq9XreEBjWY7n9E3QEPyPEQgJ1LHUckfWLjfvKGmZ3ncFvZV3mm1QN",
  "key10": "3UNgDX5QqamdzHYX2mDZypx6YzHDuJyCv7aYCoYwkQHphe1hUniDpMszX9wuUR4kRdnCofFMs8hetinc28eKcnUS",
  "key11": "URDNCG2VKe1HY9XjZ8cGnKxm1WED6vSnMgVUzAryxQocpWjfp1UDzDCJtPMvh3PMceVE3E3dsizxxgunCePn9tg",
  "key12": "iNP9xSUEhxqf4mWqmuYSaxwNDg2JekBUDKD7k1ojToknhoJ4AKHvNJTnVMV15tqzBkXXcRP7fXvbDkmPRwVTyma",
  "key13": "4QxGKgr8TrReKoUAXM3izmy6aXirkEymQrWdvRe5KWKn13Uwp2DwR3wiSawVjcEUJeYGyVScdRekFVEdGwgWwUQ8",
  "key14": "34EH8kRhDEvXPU7XNLDjdNkGaDjUsNJAZw6VDVT6anUeCJhzu7LgGWJDR8owDtpvLVdSKhNS1wHVCoTYQrzVGceM",
  "key15": "gCvoK1JJPS4ofQU2YgPoxxnUXaLyycwm8SmTYawxBhEJhtWFcR5UexQbLVH9za4pFgLsy68c2CAjA68Metw6JWZ",
  "key16": "2GVEixkom2aWZUhb2HmJSxd3gBWnauQ4Gc78XR6nJi45wftUFB3xVgfrtTyPJm4p21ZAoahgiqZkrBbMzSCwbzGb",
  "key17": "4ME31BSREx2C9TjqGPVSQsL43yQtZ5mHgRWX2rdRt5516xM6gxJJTxK7QATWRj2JVoBMCVymyS96VuNcYePpMDpJ",
  "key18": "p8R2DPftdVeN2aKhWCFj1oXcNFR54BhWiQ4Zd9xtiHPqKSFRRVZ8XDujNj79XmbSiX6LZXm7JhXS8CPeAXZAq6S",
  "key19": "N3dvDDXB3TdJ6JWiRAMviob3dJieut4hMKZimZ9Vk86dtT3JP2XCzK5HhrRXkWQ9MPZuFneAH6SJmhFGeWy7hCE",
  "key20": "4iJgHFvWkBMMDNz9DZ2i4hna1iuWfZ53anek2CWS5q6c7TyU1kP9iiPuxpBJsQ8Hu6Lm2nvfdZYWufYocChozUPk",
  "key21": "5upxxDtsRg1wsYTqYKsNC25VMHu8ZoURm6BhyVugSfNDkUjf8hpwEfh3BcVmFv6cWUWcsjhmTAQhWMCDWLXxt3v6",
  "key22": "4qLabkhTn1V9KcpeyNzPHPBeYuYG9DUtpfeh1EgokteJBGA8qzN1U6txw7gyULLQuYp8wuxTfkfLgsZx9f2eHQSB",
  "key23": "5ccXtLfRZkpagUrFXYS9MCEg29WhQSsbJosvZZ3ijAJRGLfW8TcGXzcFVaJd6V4nJP1oTL6djAcHtnEgos7grssT",
  "key24": "3XYa5D4jkytkXpb4USLD64CFXe5Gpt7xVqAyN7nhh8AvdsHYQb1h57obDfWJuMvdmfRK4a4itCAzMKRJf6qzNvxZ",
  "key25": "3QFavnwSmfnM9iZyyhyjQ6jA3ZNevPEnft7n4BE5WeHokFEFHuKAJDskMGHycLoa3V9zwT9rqHGKXRDyzHWyt6D4",
  "key26": "28NFfdzp4wsJuTh2nXGwRrhoGW6hFCQVNtJuu9YWkTDsXAdGuEsn5nU6JCNE6UeGwrHm5dG5cG53ZCbBmViuwA2Z",
  "key27": "2Ew9RCbpzwsLbtRxQGATaFnAquztyTxmxsZP1aEE8cmLGok7rYnteAwSaxYrmoXf2y1PijjjAPQFRsosjfd44XGU",
  "key28": "2M3ATefBz2ZM4QLfDr3w4C1YdSvSrKAWa9bbJjN7gdLm33Cr9LCh5jeJawuw86o3BTfuMuGHi7KVmFWnrdP19yee",
  "key29": "3SAaY2RYiUP1ew7M9iqp3RMHuTfptquFD7nMehWxS3AHte7S7HoXa6UF8K8SZytn4V2FbaWXBH8mAmpQANkiUfaK",
  "key30": "4MrASZkXHB3aDNSj6MULZvQTHtiSSyzohvYvDeeDJUZuZbbNsFCwa4162QYygn1pDtFf3g4fxdufTdnn7VhvwRKs",
  "key31": "3ahNh2Ws1WcNa1VeBgtgLH9EEKR3gaVze6jTZ9nNPzHjn7sRAK8Y4kcH9Njivh94Vx7K8EddqJdYy6Ufk38z7UyL",
  "key32": "5xA6BWmF1RQvdBkTai1kC7VvZekeDcmYPTdLjfRQcvfSsFFqskAgvNMvubocE5gyp5jTvTFKWLCdyupR8R7wo8ym",
  "key33": "3CyLKjrVh9UFep1vpKyFiguRgfYV16zP7ABkpYvfFoScs8nLwE1J3D7H4B1WvGXhD2uSMu1U2gkF6aA7v6uebxeU",
  "key34": "XhapU1Ws6eAR12TdiJvFAMZy79CPPX54Nt2UsG1BLqSeJWTJhz5mc6MpfX1zeDQMdxbrLH2w787TyTG313wTLbJ",
  "key35": "f3xMEWYZb3THRfdAPkjasEVB5uShntU1zAsNHNJvMEg76eRv5HNyvCWWfgk9pAX3u4qRF5kLKB1uSpKzvKyYm8i",
  "key36": "3yn98wWp8TpAther6371DGDgNp779khuBQvDo79SYXvEoHcVLfywQs62skqYCHncuWPCBvTNcU7HF7TnmL1m4Bw",
  "key37": "4tR8JUN9ufBa4KYNzdhpDtRzi2y9SFE6Xs3pPtkQcE2CjeD4Br5m3EsmekkTDj1UHQQtZA2dWWcivnbiBGAAuz36",
  "key38": "d1kr8J85aNdbUV3GTwhTzSc3wyCG8WtcR3YSZXLyB9APgpsYYP8d33XRvLvi1Cru2gLraamo1arfhtjNujsW3B7",
  "key39": "htfKKy1BwsnYPDvn7ZMMK1vmcfUgCMzA91VLcoeM1hwcxydnYsJhWTmUE31utmJNURXjipjGRPCNqCZVsLxmQJi",
  "key40": "25nxsfb7iniCNJCgzo8WFJjy3NQjwrnYMrxQsE8ne7Hruy821xMTSoASVFZEWKm3U6aaFC3U5B5JKnjqDAWqRsLq",
  "key41": "kvDDzcThbSYpkV4ZPzr48hFaBzz7DLA3TX13Ma2v9YgLscrnvra1Pbh1gSyPY4qfJFLrxED3Q4pSRxhvPaAXM9L"
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
