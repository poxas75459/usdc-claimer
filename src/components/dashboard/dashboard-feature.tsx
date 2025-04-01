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
    "g4KP4XWkViozVWovQCwDdKUz7TthE2v8o6TVsQGftTAs21xWcgsGE3dbGKuFTmjuBeqKPD1LYAe3k94vvkp1pt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnQT49EUjsXYQHZYnrF9sFWMkGUiK7rSFWBSPWuSsKivsCWJB5r931HPdu2omjm1eFndZ633jWiza7jrRxRV9rA",
  "key1": "BRdXdwPM1XpQXqqLD7ur3tcpaVvktmhGMKHfD3uvnQYKSBmY39J45vC4q8Qt12awQpv4eLFRfw9Qg1NSLgcrWpQ",
  "key2": "4eWpEW3CQf8Ke7v5hmkmHNDkP6QHyL5tK1EF7bPbWn4JZap5pVi1Qa1ExZJZiqUXvmquStyEntHnLBYjcME7o8z1",
  "key3": "3kf4WGco61gaNLsUp6iH7nXUFTPdA4ZnDXeoTa5i5RYigEKj3h6QyHQoRhC7gzd28U1MSZBpHnYa6qTMZjxVJqim",
  "key4": "4jY4ps4R63Hou6oBeN9cttDBe8B46KV83kgKjoq43tWrrg2MCwj5FtRKdrKn3g3smvqr5WRx55bTnw27B7DpTVD6",
  "key5": "5goKH9EDPjjjKhN2oVtFzwEC5etq3i4LBKvWVJMksTfa1onXwhTpyssCvt2hsGimn38thUsgdZFMnV8i1f3Cu55P",
  "key6": "445FgA84yLSCQwrwmAxCBTLp3oSbuatdyjcEDwhnX8ZaoQkaCfd5EYDAoyb5BkBaMny9oRwTggv6XtLFSfSXxHuL",
  "key7": "2qWE9BKEGG8NQLbo8eAWqHiS5CpzZHGTVCgid2drgbDHjeYRXsj7ATNBCiBMjpWrK7u8qpL1wQGthWtMd81uGP86",
  "key8": "hjFF3GcFZ5u7b4gC4esiDFidKUgdFoXux1EoUJKvEsaeDMQNvZQETnpCFQFC6H91tzYKMVWnsg5vja8iotbnevX",
  "key9": "4xmsfvk9tGeUcBvwD22n37cckVpkjsJaSafEAwnF5uXokcex43SRuQizkekUXKDpwk8KE2Kijpzu3VtqrnauuDPN",
  "key10": "55qxsCnasmzMQCVhAsqDgWvaJn4cHb3aW1Nm6RKfbAP7gg5ZLQmrCABNBdo4ZuCYKQT34nfmNyY7xoHqvapTjDLm",
  "key11": "5qeKajoJZYZm549iQ9ur6dg8VgpDM2beCpeZjPhp1dziMUonPdpLrvq8ivvRY1fmxjKnBWiCRoCv7dhrNnqj9iEg",
  "key12": "4bTYtDLVwCFcZnxTvdX7rQuh8FniQvNqAGf6ef91yaM6fsJw2KDWGjgsAyBWDCrkxiTCnZDZS4wVH9dfwqFwnFFe",
  "key13": "532QhzD5bGjHmQNKrp3GfeG7ASEgz2Lor2N9jwtMe8AEnmCY8LFAsdH8UBVCV7vc1Tq31SpkWBKCxzZHvy9PxCH6",
  "key14": "3Qj7mhYpvvnNA4psvZc93KhpS8nQjmfPw4PMbyETjuxdFrWLWvaTqLvxjUzH6YqSF6UjGUTCsyZsKvkVmxva7udM",
  "key15": "53xKbsFPY8QgpPQRezKGtxWP5nso5of3JWgZ135dpaVskdeAoN5nkxEXir2j88YPv6LZi31BkNEEKW9bmU2hGdQE",
  "key16": "3qrQyYvcFFX8mHiBtc3nUv6rKMrCLiV2MXMoayWvQ6q4aQc58PxLJVzCa31ZVe2gnFRHedCuV8Y4af9EejhL7Bdo",
  "key17": "96An1ZU8RfLvMx66rv543DmdHZCSVZrCdCev6UwmJrwtMHS2ZSW8ncsNwLknKqfiLktqRMHyeLkuQSsRqL8RGar",
  "key18": "4Dqgwu3hYKt7aqM6CDrBcXgQxCYRLEZNyxZ78HrBXva65VG1Q1TWLMpkfayZwSuK3cYUjvmcf1ujyA8KSm3UhzRH",
  "key19": "21MZYwx5WKSNtSBxDta7cjPQq8PBRp9c9nmEykXVfdgHH72mDoSTrLvR7mwQLu8XovyTLPUgJ96iAsruj6q8Gn8N",
  "key20": "4Y6ZbFMnx2qLuws4Gn2eJyPuSmoGSNgUVMnpaFBVbbXHugsvi8WRnWALdZqHpYSfqkdhpQeVggRD6fmsEmqMXk3u",
  "key21": "abSBBAq2oMHUnVhYJsvbuLWDc1LY3JHBe9agRJ3CLRV314zQUPNDEjffYx5QgFWhJLuErpvto4dvLb6D4T15F8G",
  "key22": "46EGYz9ctt8mmuJGbtH4dFRvHrNaqApchfshB2c2YYBmDVAHk87zKR1c4414xVq9FoMuXupDHUSq3Vy4zyzE818Z",
  "key23": "3W2caEMMwHNA5zoBsrHpyM1NrUrh6DoW9UbSfy5PyS6S8kygk5kLTz9WDSd8BPAu8sdRTBCkfKn5uaS1fyEMJTDa",
  "key24": "4UtztVqUuNMqZRpYiMy42PiRE8AxGV1K7vxE8BZ6y5nzj1hFPHoZM3rWj6BBZeFykbM1tX4xqXvGnBxcg6m28HGX",
  "key25": "5CT86uTT5iYCLYUUfRvFY4Kh11Yg1hnotUSFT5Kqs9anNuEM8Nuy9ohBz8wJFnDtGWpgTaeKXvXQNzHuECFuNMoS",
  "key26": "4rPrtUuLVpUUnEjxAgqSbdd5Jdv1kPhtFcw3FeMiuJ81pCtAGmYWBFtXPwebepnMW7jXdQEtVyTKbPHUJM9G8LsQ",
  "key27": "4qKaNgqDC7rMvKgmnZousoxbngwtCjPkm5F6USECkKWAkNKzyZTxQ1MuHHLpfNcDk2JeJaNudXac8wLdf21HaiMf",
  "key28": "37LZvNcdiQxgqTZbACXqvdUpGY89N11hcYkWvDfvcqRJNaqTBZxtwVRnvo8CvgNsb9MNmSLxsxgahWhFXubmX5h9",
  "key29": "5QFBaYgCBUL3LV14jC3hnqPKynCoKNAUbPH4u1XNjrZc9PAiSvgL4w4nP9WBAeEzntgo95qvqinxTZPLLjhXqzoZ",
  "key30": "45AT1MbiQi4Z4hMRxtr4ebMo8XaAyzMWaqqaLohCo51XJBAFbeyFLc6Rk5MToHSF7AQRFhoMASBwHywHF2t4ESGj",
  "key31": "2TNbPWdN3s8LQF698C6wvqNrpSPvWqXHvmgrm72KuRgc9YJYqWx9BmzVPL86txtm4NpnJSH65utmyWcTsTF7hHE5",
  "key32": "FUKNwdTj2KNkhaBVaxzytGSMYdZTK8mXjM3o4SXnc2XwKZjLZ31G5EBU8H6AZmWZ2J2Vh86CDhumhAKYhHpy7gs",
  "key33": "swx6xo36wG6558sbAgxjKjQR99J6ng72uekcs5fEngGtxJhooWhbZL3UZeBPew3n5ouhB7gkuHJJ6iFAkPaqtVA",
  "key34": "5C19nv2m9QoRteBYk1Adtgae4txBQsXQ7wweSSZ27e2vdc8YeEsCBcqq29TfwzV965wgY9nKybRRx37KNh9yT9T8",
  "key35": "49e9n4sFnStHdvY78Cx3PerzDm5CFNjcVkDzbEvD6dK9L1ZwoCbRRd89JxeKfg225r8tuikh4Khihpd7qdSD3Y7q",
  "key36": "3oXnHrEMcQgHXgM51MbquvZaFPD2QquLJuMBCN8WzLRRx5sPXLUqhPkf17H1K6ViDYK4BohDrkCLmNnxy3gpmPNA",
  "key37": "3WEbwSaJcQ6ptDaPMHEGREBACXphFH1zx3ErXciCms2qpyvsQmikCJ9aWX7ZHHpCUP1aipHbjXzD7xG4wSGcgSWc",
  "key38": "4gPBafVpoVx96AVJbDsfu8DHnYWsFec4e1SzczrKLYNhZa9WGUAZAwTHBjyJXVFSF6SzZXLBMHQJ8zwZap2mPLw5",
  "key39": "4L9Z8hdXCF8D3LdQ6cU9tQoYbhtXcjCMnpuSHa4kLu6A1JPECcSEdeKYdEdhEDYcyEDtvp3VhqEQTdKyoA3zkdxu",
  "key40": "3h9VSNKc5MMuus6ygbWdHQPAVUJva9e1LZCAeoeDvZ5hjrVWpjCfBtccSwEFEREbYFxYQrbMdkJbSRDYF1wTbCD2",
  "key41": "2fNC36CHW25DzhfdgTpbavoZ5MKskuEEu6xbYDvHYVKyGhUVXZcV3Jt1eRDxUc8WQzLQwWngLQ7YUYSzd6dan5BP",
  "key42": "22NsMoKLJLvf7ZqBwK6G6Lkc33GnLbdCKDJ2ztnm8y4VnmQ2ZEnDkTXbw7LX768BTpghXDeHwVRvdSKtbkoy4Fbm",
  "key43": "4hWCc3i9JvC6VA4uhEPiptoAskmm8EQH6r1MJLuKK4f4f6XfqUp5fSXigpFtB28L4DGxnjbN61CaZDJfZZHyx2J4",
  "key44": "Dct9JvWZcScfR5XbzpyofX1K2RvwsuBTnQZmUYMd4HLznD1j7E71Z4LVAJmfWcvxSmZamxGPZGzUnwtxnAmqLRj",
  "key45": "RBcRv1MDKARdaWEyC7t2Nd9Vk1vEWYUV4qzRahR15tXcQbjZo1qQj9iDiEhf8PyP6HuwXP65dpE8ks599j5Jtwf",
  "key46": "4yr4ZXYxD8xTvkQhTu2QWLTgtnkd5XmdcUKmcXPDmf8TqXAdkKznUwj7pMeLzpWKbcFNJqV6Knjk19wgu2vsJ8Mk",
  "key47": "5AaySE17rA3p1Xahrcie6a3gRa4GFmPu8kYFXnjhiRpmbMNMr8m9LRKW76VUfHmxHC5ERKhr7NypeovZ6XCMRRoJ",
  "key48": "2YKUnFysbT7r2i8fm2g3pdfn9ucPm1K9h82bUcBRQ36DyZpyQ65DTmnFK9uDw1mB9x7tfaVnE1zX5LTArUM1wNiS",
  "key49": "itHJggYmZGfb7p1JR9D3cSi8aMbdCoqNnTFtYA2u7tcLDgtAPXUZtThmPMN5aTEgnmmgsMjPw96iSSWMVTjPYT8"
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
