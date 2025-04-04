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
    "4NURopMWHGkWVypbWnkhBQ83Dj2SdXktpJkhMCqLzJj52w2Ucu4teXVngbkzukuabghQSTXEfLEs8zFipoML4Eyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ppdm5WrhjhUkepWqXFp6h1RgcHMwPNtE2AbdfceGJFtsUDqM5Mmr1vxe8cwkCEMgTs3kFQs72BkB8CjL5kdJ8Q6",
  "key1": "65G8X1QncyRy6nTjJQ69o7R5as8Rr4HsRFE3HXXytRovN33zmX3zUuxJe5CeWywxDQWw35VEY8s2UZ4i4teauS9",
  "key2": "4Vrc8EHKKamxzfiAivfharFAmuzNmgiMVFWHpZEHXkiZBQVmbxRZ1KuGfTJKmWqsYMPT3rVyxQ2f93etKHdSXZPW",
  "key3": "2JzGV69KCVuh5gV3nsTtNnXThfdQE9Wom488ooSncCEbZQduLreFcMyD25AWK82UABe3j9k99eXkEqmyApH1P8Fz",
  "key4": "3kkuLRHLZJB4bt7e1jRivsUixVZd79tDYD5EfSYAhoiqTLXHprZTeop2fQh9CzY8EtTodsTnbaumHMbuhFLqvQD5",
  "key5": "3NDnGL1vkAxMo9Cc8YvMKLPYZ7QxzpNLoY5RPL3RmBuGMkREEdjn2gCQzzV9HfjQXuWLbCTNEZUuTJSniAXf7MYT",
  "key6": "e6XpTT7vM4oKD6pVb142ejESSNmWMdPpp1dXD9YErikLMheinzfQHYDkT1tKMsQYZbtwJsGGE5sebBzRiYqWcff",
  "key7": "4xJYLiKHjLynX4VJHnEDc2vb9LxQ4qyQTgBpioNVooCSqc4BU9xmSNWUr6READQ47WxWY8BAu1X7wNuGWh9bGQve",
  "key8": "2tt4kC2DUTM1ZPSMMKQ5wQSvWK6kQMKq2rHoCusJe7FXfZPYqy2rRuqWSnYrMWNnrPEoTgHUXo5QQxXGGT9Rz3Qh",
  "key9": "Xb5NYXdq1pPVKV9H1gFUiNguoKpu12465NHBxAAeXGsKwd8EouuaSrASfSBzgfwGvPcbmaDUNQnu39DRJQcp4h5",
  "key10": "5UjKqqFPH7E2mf7LJVXP5xKvZtXDu2oag6gbghePRdp2YafVhcjuQ7edUZ7fMnFfB1tvrEhyDuZA9NCG4Bjtt47n",
  "key11": "3y3sEyStSbZM6QGDqLdQqVbwSjuAWWdpDjM6c5MxD6bQFmCWecqhVMtDL9m5TMQJENT9ZfbS6h81UqH5bmQMwEer",
  "key12": "53FqPNRiFJTbnzANN5RDcqYFfmfL9hjXfHfiU3uLHuEei6wFtTkAZX5p8t4mEqTypRvKfi1NbXArtocypnz4kA68",
  "key13": "4wra7hZNiELL6Uq7dP4LdkFU96nSmhX8zqYHRgmJ7nBpLGcoCtWUyhmS9LgMbVhP2T8oGdFk5H3GcNntyrHyC5mh",
  "key14": "33oXTEe2QGre2FjhsrHUh6EVadUkgtKYr5wZ6sLxf9uT97GbaBs6TW2VKbUqyxodZAmrrjMJrYndY6Q4teTSDGdi",
  "key15": "2KGpGDpHL8SVKju55aVDyAtoprXDPPJJFa1kJXfCiVsWq4UsbQ9Ad6jaBgFU1ysPPEbjPFLVLfxYkB2dk7sRtxvw",
  "key16": "9F3jzbWzzF2sH6cpf3X1MAvujKfKyQt9WFpKLgQM2Zg6ZtriXJ86KovuSqoW4AkhoBwgWDnKchbTUAqYYLxw7PA",
  "key17": "579BQie5UWeFytdu9LFqme2uLne1quRZQYo3R64MuQX54k2fgfCSDtaZrELem5fTURymSemjXWRxrbxzdUecoaSY",
  "key18": "ZRpqVRQQJxDAJN15smoeBHZ6Z75GNhCVaviWSuuBz52zCGKZjMYKpEbug5zbkvbhGSzsfndvCiHTaqF9oiKWuyB",
  "key19": "3CSbrhcDX2sSGG2JTpNA8crWXW2EscUeDSXqKXRbnpSEs2ZQogsWi5cFMrapjeYsAf2c9VFTzdiafhLbdTTGuwRJ",
  "key20": "eTeprwxX12SRHrfLvm869SF6BzY9RQsFKctvNtPnS8Z1iZ4qRYT6QR1Cx3Wpd7YHR6vRpxFiK1iEy1YSe558XN9",
  "key21": "37K6bKm1a6k39ACUSx3YfqWVgmrq45G8kWUmPWWByvKJBYU3jSMqRP4RaHwYMFFH9xBSw7ZAptbuSaqXSZTdTPTr",
  "key22": "4RmW3TEGfN2CD4GhYgQEFQUDhEKrMrd1RXruWFLXRcCQGzziC5KhzBPVjVcqNiRwULXoiwUcgQkdzm19NFPEnUcM",
  "key23": "3uHijAHNx99NkD3FTuCSELy8MaL7LB7CAr8LXkWf1igY1vSfyYoSgVoDzbG6r6YDB9wMv1iM6Z6WKrAXcGDdb9Cc",
  "key24": "3NaLY6ZLutFTBv9UdimR5V8re4npHcEi1wjgnXxbs5ycH4aTPwTL74XcoeHBRMyMsvuuuGhc8cYXCstjPNfAU2oc",
  "key25": "2UJk2KkooW2rfRXT4SvM77DeW6Z6CvRpTLJnJwtcURt1xtb9PUunpC3CXnooFcHof9Hz2SPhQq5uJjHVfPqwXHWB",
  "key26": "5eC4Zb4KcB9o6qwL8DNk1YU37KQeiy4PrZ9SsYDiETG9TftBTt2fRmdzkYfjrKBBa1rpTqFqcrtdNeAbnr2nyWs4",
  "key27": "4ppvgjQ87fifRcRtz3AzQJ39kYZMqaWnoMrfjNZSNHwBLQBkiR3kmr7T6WZ5EeGgCZxhMriP7H33S6ykC2SuXzov",
  "key28": "4enAtzKGKmBieW5LxqSjC3m31kovM8wD57sz24Y4ZfR9CURgae3y1ho5MHq6hQ39qSiS7LVnKcWHU2MLugYj7nyz",
  "key29": "2bKRQcTyTKL6F5LPUa9zzLKeTkgofGi3haAbyxJez2qgUidTcTzYbmipwN5cEy6d1vuZdJSrdR8H4NgtH949AfBk",
  "key30": "C3ZoXEMbTuwSzTYpLJ4NrWejm2RF7qSgpXtw71b3JUUyCPMVhDy6XQCCzhUrJPJ9UmJSCjxJJnxiqGvqvrdtBUt",
  "key31": "3REwQgmCB21CQNd8HfknPU1rhTesRcEHXfZE22zNtjm85MTxLQhxiuzdzXuXgwTc9QPrBqZMHepmwkeaU97RTYD1",
  "key32": "2EJh8jGN5bq9qkZCsK2cFnHseHXNPqJrnFdN1ppjB3s4eWs7KLccPZcjfpYVtxKKyRHJij9aNt6xxDtpj7sd1w1d",
  "key33": "45hjUjqXHrHLmwhSJDirkRZ78zqytqjJJQtJKLZDvH34cK6BziuSP4oJ8xMG7Bi9UH9HjWhKJmZceN6PedqrT3bn",
  "key34": "3GJWdqSbzQ7Xu42CLwbhgvcFcdUGDBCnWwLdfgXApgBQ6hWVwaNPyU9LAYqptLNX2RtvXaK94bfB3vHErepcyeTT",
  "key35": "4FUa2k6qVYFbTgYvrqSVxTJuFe4YsNSaEbu5KtSQNsvDwx4HyzV439iMHkbLe16aDvrhtrUG6f4wdp73oB6hzwXk",
  "key36": "KkxG9cCCGXXMeq3x5RoSxCBuxMs1kiDUsDSVpgN9dUBHXq95UQJwvTuGGzrmu7JNmiAYQhk7fniccMKo8N7Rzh7",
  "key37": "32NHdMQizS1KTa6jtet1YTNAY1ZAPfKw1Q2zHRTRLgoDcwrrGBGCg7ndd7AZG3fTDrqVQiBhcWJxjaNNb7Vph3E1",
  "key38": "1rHKW5cA2Q77oVZwFrVnDL9AGnSfDkpUEp6KyDxC1RdZF5m2oBPK4vqFXWL5pULd7i9rjs5nyzWr8gVpzhZrPtP",
  "key39": "3uwKXSzj1yRptAySmujyZwWCVr3jC6PZkpLnkbGvmURLKBnmfzJs5v3LanYJ2zZTh65ftiNphccJ1FNcCnRQx2eW",
  "key40": "bGseNiqqyATfEcfppLKDDvMRHHb7pw9fsmXxzceUmu2Kk88NUGcD6KGciVNyY2xtahg4ZBQ7ojNyP6YqqirEYJu",
  "key41": "3Rm9RStsfogFjtMNzLpCsKD36NoDT9cWryV6aWtmH6AvAr4YrsjcFScdLSYGstvYQ17WibC8Jqpsbv64dNTbHxjW",
  "key42": "3THbRiNG84gLdMdC1jUkzJ5EBNP9Q6zxcnBQ2aqiXKyYJfGL5UMbGcD1j2cYrrbSv7T3apA8W5AxQRkEfjH7KgPA",
  "key43": "2LFhtv6LxUV7ZnYTWrCXUTwyr8ZWxsRUUuwigManEK51teoCAzsrBoVjfaH3Hd9UjA7W3WozRB5eHzaZDbqQFFvF",
  "key44": "2n2zFHsFyjH4NNjZ7nravDrYumnmz7X8CZcSA8eP7E6BdJy7bivQdbYPDSCXDoy3Z15P41MGW3ZzMfzmQH8nNLhX"
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
