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
    "2F4dagd1L7QeV2YvFB3rQoNiFKrBTFiRCCTKPZeTMous2mX5mwshvYvVNuLmPxL7dHVoJH9s6aqWPVP3PCMNjxA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TFkkJW3JrLV6CNSRf1eonvjUkP3A3KFvfyNCV21ipAYspEd7MY9sGLSraUiePkmcZrQWEcjWhJDfUz1ihsGMLEe",
  "key1": "4vA6BzPm4pi4apBkfwKjJBpFLPM2cB1k6ePMeHJVMzA7ffUxEx6Es8av8kc8pTxdJqMYqq3mPdUcAAoV2e5vhgvN",
  "key2": "67JCrWkEJGFhJeJuwsb8GpcNkpUap84KPhcTvkX74S52rcsvzhYLfHEHVnzLJPMWaZ3PJRFX6AtgwcqkCRoFiquZ",
  "key3": "5Xc1BPL6Ceos5zZk6NUt2cFgm6A6Hh3u4TP4AJfDrgcJsRPMtHzYYn6swm6Sg5KDwDvsZeEMZxDzaFuCy62bVNSY",
  "key4": "Fz5px7d52tcSJCX2Qtqkr354x5czVTHtRBbXSPf59rzNMJJ3bz45ZaU8u4ZAnsQcUAtASYm91TkT7Twh7wNA6eo",
  "key5": "q2HEKG5h6CvHbuZt2RhXDJjcAfhk8kiVifAtXSu96g4SA3wwvgENVVEyE5xoYaBw9UD5EN29NBEXjDa1EwVNKdU",
  "key6": "3TNiUihKtyXuirPKxdG7LiZKh1mP3r2kX8TN5JxkkvbS3qx82GDWYaLx5LEhHS7CkaSFV4LyjUvTmQsndtF6ukAC",
  "key7": "a8wTvFnC8bxZ1p37YX1Whg5zLkLUfzx1uoxCQcCQnYc8LpLqChT7zEkiooBv7gcPnLEJtJLgadAQekfkvqGv85B",
  "key8": "5bac6MWFvcZh5hJuDyXN4Vw6HmGbYkK3U8jPF62Ak2ofnkJBtXiSiazyPPn6arTTDPmySXF4Ls2H937C5T72nKwg",
  "key9": "2uLS8KWuAbkXkqD5rzTrCrwefjjoDTBseT9x8kG28SBHiGVWv5XHFgVj7R4mHrm7gzK9UVqa9oRtvbYdFXHPh42Z",
  "key10": "571k6qfp9qeiHbs2MzaGuXEJvmtVunaYkt3nEE7P2Nsrau9qG172fDGeX6TRyshiw7rsXBSRuXBdmi9EDxWR9Jxh",
  "key11": "3SjhZhBEApHJEmYNRJXzhdgTgqFJjfH8MU5xK9WHURttVqKc85BPQcHCpwSsw1A6W3duuZmdirFEr38CqKPaHB28",
  "key12": "4Mx44tgFMdbrKziSpLTW91EjKs94QgFMiKPNM6eRN8ZNWRQ26xWaR4BWRDfSQ3CuNFrnf1HPb1DDozHHRtBqp6cQ",
  "key13": "3nvskefcot5M6AiHbCsqTgPDi2f8xvfq1isSAQnBkWrZavUbzdiPNar5xwoD1prwLg9TyZ7BzGMG6aevY1YY3NAN",
  "key14": "35FdoeWirWTonet52o632A35kL2wjKYHG4h1qvZ1ammJuZobEC4jBxjuZdpEdMabcf9AzubxzRatn6W6UthuFa7z",
  "key15": "2Kiwv3qMtDtbVjrQrdGEG5xD4P3pAGdrhDT3h8R8jQ1YrQU9Sq6jPE73YVMwHYUSD5yvobzjbsakbgQ83cMnfRpw",
  "key16": "3Q7J47GTBfpR1qgKVucUYPx2jXUVgS3btvsnwJLDAMb8WUYcNNYeVGux7rn7RQ3vwjdgWb5s8m3YnzyR7sdtV3xX",
  "key17": "3MeMysvV6GLstxwjGTGoNcPWSs9VQCkTFr2gdBeSK2SvVxW5St9C6G2hjZ21RpWCgMEkfc6PsQQyX3fWRJnrPVk9",
  "key18": "9C2CVFw33xah6YNbeM5HrvRhAoY1whJvFTgcntvwn9QinhfcmhkgFzd2Bhqaf2vvJoo1Zwu9Ck9KshZ1iSdCgBk",
  "key19": "2he8mSjkMrrr4tTrSWsEcwsfAeJwrQyk5QXk4hDqV3R1Rq4TjbbdDH55tEoF4eNK6WYwDiD3XePs6phMAnAivJCT",
  "key20": "4qQrE7hQFAtDSor2q6M99Zg21Ef5X5ajqepZRmqPz6gTinrzLu1cP8HrZcb7uwVZJMfrtMbnFQUWFfrqc3KMTMBi",
  "key21": "59x9UdwC2WyqCjktxzmjdgJ4WQyD83CgFj6BHENhxw3hPhNHzoqYKAdT9v51oQr87CwUjaiUwuF4WU5gKiy9V5c6",
  "key22": "3DzBUs7k5YqY3j1EcDboJ9kHNaba3jRNYp3WaM6tcHEJrJuJqHGhqN3KiFra1DJnYFUbohxiwotFwDwJeWQiuBNP",
  "key23": "3YhFpS4DpyfVzi3gZZLvUv7pLxMf2hntzQJyFNTXwdv7AhTaVbtBZ3gTbgPjffy137RwEbjnhPSLE7rNiLaVVq3K",
  "key24": "5dUigCaiC71nABtuCPw4aBYrEbb1VFWsXNXjHhEifnoanAWqZsqLyiCskSeKKhPgeShMLwjGufiTCKReHcuDyX7Q",
  "key25": "3DVY5kFhSBF5WhNgqfvQ7gaTT99oWhLz29a7SKPSDJtpRroWZPgy9U8yHbeEEHtyZVo5TTNMs4Bfwk4McYs3siVn",
  "key26": "51qoMvQafmDrHNsRS7saKd38G39wihuqEEw7BBqg41gakr6BMVGDcV4P4YB9z81B4m7i1jKeTpQZq9MGdirbzpUt",
  "key27": "3jmRtL54WCfzn7J6cNFkGrqABCbFJ7oGq6rv33TRFPWoGo53sWu6Asq18QJYUudYjQFvufXBSYK8G6eqtkgC82XU",
  "key28": "3N18tVJnUuSzwDf6DSPw9JjLezNLndA6yfjRsKe41yX43LGhHkeAGhKF9514Ejv6PyTpWHUCy3NduptNhy2Abuu5",
  "key29": "4wn1AMkNWPMVQPaWG7xxDXPcBWhZi5Pps4T69nkRbLeAxV2rFKr4MFrrGMgkgKb6jacoPzgu5eWhuwFU165wcWYB",
  "key30": "38W8amgWt79LQnxDUYdt4smvwt6q7M1qSmojR2nXR4vSHfgQR8yvPj3FYPTtj6warCxcQnCxNywxjVd7KKZ3LU1n",
  "key31": "4cfwkap5DDRYcYzQaJGskvxrpVx2GLJcMMtt65yL6kaRZJFvP8F43vRBt8rJ2xiBqiTxiio1csAmtTHxWPqJt25R",
  "key32": "3PXRQpS9ZvAsv4WjFoxEPwW2xXPM5djcVDg2u7bnosTVHBN72phH4rrGPYBND39ZUWDpNUGXy8p3RQmALJp4MRkU",
  "key33": "23HhXYxZQBCf6TR472CfnvppLZyUEzKpmtStxbauxWKihgoTrYTtJjZuLnsnt31xzWidLCJDxs5rr3n77SYMMP6U",
  "key34": "eDDojzMsPYhJ3bmwZ9GGezGVfRPtxHoyxL4XTjVya2WLEHi9KkAgfvxjgC3fxPFNaYUd5y91Lzek2PyjPNvFyLg",
  "key35": "5xbRYt2zP53ZehkA4ed8RqHhJvf92aeE3vfba8uP4NiKgrfBocU5ApES25yRHPsRuK2M8vkNeNtxgWCVscTJxMVd",
  "key36": "5bnCtJhfwQFLPPtVdyDYYafKVVfxGfVANLRjHDpg9X5UyV9gYEfCxG8R66XEv8eNpLNwE9xzKMDidnYbLNwgk5f3",
  "key37": "3gR61DEfDzqq1szTUekHnRnvkEGTsJwkQtiS2ZVJazGcCSrsAfovqWN9pEYQfLG2E4RsPsdNjBm5Z4kivkARoo9m",
  "key38": "5Nfce8k5EWaC2dRe3Jv7udLJaRskZJb3uVQ1LPpgXp8rW2CgLP4fkCFaV8dRBkQzbwJyER4MtaGSiwjocTG2MiTW",
  "key39": "3mviJgnasnEP33hSJyT2HoTqg6mYVvhG5REVLSboyj6czA8u9tXvfHBBpL74szURojAAcrGsXwzfCiPnRv9UgaK5",
  "key40": "21L45MyAXHfQebUzacqDVVtKax3nwWHsYcQ27qtjpGPDs4BWr9ciDuA6CuvDdqFWANxnDSukBShzb8r8i82kADvS",
  "key41": "5GkWWrXWjUNkztdanowbAnbnYRqxuGNmNRNgZ3a7hQPaMS6CKHMBasydWunwvARFXeVXCBz3CM9Xd8PwGpBE24PV",
  "key42": "3Q6JhYE8cF6nY6JZYixzb5zjMqW3bx8Rph8N8z9MaKJhrf3GciJ6sHv3Mv2kxtuMoah8vSH8DxzTVDfXcakCmeCq",
  "key43": "r4GTxfsu3pNjRnKSnnCgshYnHA5egemrb9q6x36LF8HXWoezc6XU7j2PFSF3XLBukRMX1ca4uRSuS9KEnfdUXEo",
  "key44": "3fKCQVLKia8kGKfFemB3wrQdbtiH8SWxd8Go3N5qGCKaJvGpUAvZtGS2yrA3qxZT8hqnQfdMh3M3p9s9wMGkdheE",
  "key45": "33JPn5shUyWGZcFux9TfESMMXSNFw5GLzq8tprWQcndacXiJsS6TgyKQJmzKXQKBLvdE4bYaMgP9j2sawmaj5Akm",
  "key46": "2zaLk61Hv4NuoPnH5FWm4KVU5YKbfQxEpdtscM3yHAjM5KsEbKKhxnrNtpJ34ZbpKJynFdfjgcGrUMdp2AvnhftE",
  "key47": "2wYx8cbNNJBHMBa8nSmbEDvCixY4cPU3SPtcTtbG1Dwcw6DNAu7MuUCCUDfb7yeM6PoKkifkZBGX1njWiCf1mYpf",
  "key48": "2z42J4HkDW5DoZxSWTxPs9PMCxLMQnruLp3tWT3GmJYG3kya6qgsk7z9KKZbzrq1FPhW2tGDanb87XFpZi78rgW2"
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
