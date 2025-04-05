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
    "4EdofYBSxhcqyGxJ1FQ99d2BuXiHKRDA7VPKeguSj6oKC73KnkP3eZqqPvXdrczAJQK5Wnk3d828dfTinuWzhih9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M2HVnmojVvqLdbiSKGw5d3HTVQwF174oSSbatvzbE4JvkEC32f5e165wqkZuLadrg97ix83k6dzwtrt4syosyPV",
  "key1": "Lcd93onzJ3USYxhrmmPBdUdCkUPk8V3yq9xjHHyMRpD1xJE5MCJNjA2mHDPyCESgF5BToA5BCaCDKQbvaYJaZfA",
  "key2": "3znEspPt9sf1u6r5kNjJzhYeC4jVeo4iVuqCbKiq9yLigtJJ9n7idUbiViPyVvWcgvnnvnNembgdJkLphvXvWuhf",
  "key3": "3ZL3i3TRYQHrdQFxT6i5pTtHNTMnm6oMY3CPRrv9ZiCNAuy5xVpmXsWdCiCeFAwVKivHSirDvYE5qPGSaZMaZGuf",
  "key4": "ootRjapnz1rJFn6Ei4QDhriNnyYHikJmptWcJDsUXzMB7mQ96DPV8mwVoWeJwrkHTjo6jEvjiEBT6MWXXHrkP5m",
  "key5": "5WziK3Ho3ZQqcf9XHRUPaafNaGNthsRbBvWW258Zuy9q6E6mpKReJNatCG8YE2nixsq2K3BUrFGWnHefanevJycn",
  "key6": "3qHmYvnuKtNQqGaPfcPTpP6b9kFE8oAwpdEUKuXaLFkEgmaG2fJs1afCxNgcHSSqZ8Zc4cetau6Q79ygQy69MKqB",
  "key7": "45ZAQT1kzv7rVDmt51AUpxsTcMwFvbsDauAAs3aM4XjLHhcuCbL12AxDyB5zvvWw6uz1ZU3EAiJiA1FjJLLyVQQo",
  "key8": "YLJpiNCoomSwYyfXTSQ2s8eXBcrvUos5d7D6FnRYznAw2YzizGS5wAjTtxTNoXREbszuKb9FZMdCwz8SYbwWFeG",
  "key9": "2PBYz3pCDAhthY9gic4g3gQFTnepcKhLAToF3bzam9gQ7N8Vjv4L94cny3nCy6tuc3opKWWYZ29mE4noiakSZ9cb",
  "key10": "3FDWciCLyYmXMp94G9tJv3FQiNoNH6nPzYjxCGyf2xMf6uMMGjTGN6WVPKicp7W7T25jpXn8gWdMS4XksorwRxcQ",
  "key11": "5z6VygERJbTiEjsjDWcvDi1UzWx2iB5L8v9PYrD3fg5yRFqv4gAzjWGVtwSJ8HbGkRN2zx3K1Z4QZj5wdTd3U4Fq",
  "key12": "58Aj5pZU81bRgLJW2wc2jNuCpLmbzhfeAFMAGRtqAd1pq9hB4XpWQdGCi3qKrrJNtRZbpWGGcmoDwALHK1E4MihF",
  "key13": "L9H2RsDruwXierps2E8ZXHfZpgGzZz2hSZy3V1E8y5GpLB7B7dFpgniJbSRnYGTVBYYvfXnyRqexfJptwDR7Apa",
  "key14": "4bJGcmWdYFRLPu8yXs3ERaPCprzcAhR1WqzjY4zeXKhNtwbNThbWJtS71553K2hys9gdogPUpFn3o1DoXUUkk2zX",
  "key15": "2hiYxZ3AzQeAB3FMXUDs7GKcteJV4fjQdZ2xZ1qbstVYUckoNKMu2ksT1s1rHCEcgnokFGA7JqkRVDq4YTB7Ug3Z",
  "key16": "4kxB9BeSYxYz5Le8QcQpj55T5MiPCwazzT9zCmNQ5iyFpxgg2BECaHMVtX62BmUqjbCjhKyE6szdfZ29HRz1tGgs",
  "key17": "5GYtviyaPjZd7ycWFYmsbGwHZfcP31sdGwxR7xuQnv6jN9UL9wHDU4HizYanbXSJJJT7DfWrcetn2qso1Nnkxzps",
  "key18": "29YqCxY6VU4iBqV1tB62jRPchdHiFdkKaQTDYkwmcNrANjXNSKQ4Lo7Njmix44UJVL54KL1NnVtTHSYhAeYbzmr6",
  "key19": "5W7tJqbVccJzv7rVJGNvPzDysTRTvZCGybmAmjd4A38HgVgh8DqsDLvFDWj7AamvTSnDAW83FQeuv4qP7tzBHocL",
  "key20": "67KgAK74ob7UXgQKFGzNtXGzQw6Rw57Xuq1qVTzzR2AZyodw58CJ3a7UTNtTAkeh4PSa9H6jXd8bPrLr9MSZuAmn",
  "key21": "2MpWAMT3afmmfQKYyMUrXZkrFkZK2hYMs2hS6oZTQnLQwNZr8zXXi4RqqAQjFdouyesTTbeWcbpR7z8xCuLyBL2H",
  "key22": "39oaneuGpibMh5gCoTNDkhfEwAk3xWzFJuNbtWycZirLTmvgwwDakMvQgJBUHWTpdzkpR5PWaKfqXBKZmFexg9TG",
  "key23": "5ruvZabABHjNmp1zoq6NkSTV12mqNpiJY5BrdwsJ46t3etHWo1uyLFRqzvjA5z7WjZzXd88wd44AkyTUSApxJ36n",
  "key24": "2JyFb36hGxb2mcUzoX1WXWUvqvmwbMzZtLDzhDiyez4V8aYWWZZEWJsGLymUQAc4VUfG4orZeQpfT6PCeSCHZVRj",
  "key25": "rGAZV56495jCkLfqeV3LEqDTcByh6cKJYShHvjj6LvMUEzC2yZ47v3oFG6v7MgxtXzJbPJqKhyrpPD1gahyLYSa",
  "key26": "VkeiJuHa2kVf3dFYSBtXTAWrFJM8xyCpC82GtLdLK5UVppUGTRUZSLpSqW7hotvrXR2yTXGgrfhR6gEqEbKQymm",
  "key27": "5SYCsSAuT88Sb1T9ws2P7Y1Dq1pNvLSqG3HVd1RsLdDrXmNDBm1VvoEVmuSfqCLMUKTpChfFGtHpyKo5Eo9Ckpfa",
  "key28": "2im6CyqRnFVRnt9UNpUXp9Fipxo13iWSZBwU3EkyHJzURdw1b2sTwrd7M3RXVcsnyUsjkrfw1BoRCRCpTcY1dQjA",
  "key29": "nD1e8j5By3ow6sEgF4MsLJjWsgwNMQxheMH7EgYqT8Bx5cAPjn8xu7gPuVj9CQJDaKxrGDFCPLjFciUD5W8G12x",
  "key30": "YutXmVMoYc27gTdfJYqaSTy3536j2EWyN7rcK1QYs7xkMRtZAEp8tMonhi9FRGMJn2tpDdRghigzU1MTCgitjE7",
  "key31": "3TAb2LbBK97dezeWyi754FfY1zgWxzTHQRj8MSfoPmjDQfvg1p9oSitWAd5dXnTYDnuAQATT9R64YLxZ4tM6UxpN",
  "key32": "5Nj4EGtbK1nAyzbgjZJ6AuoBtnBMmwFitTD5jkr8MoB3zHv3ALR3acseZmd6Ykt5XzP2JDzWiFP6dXsdLZwQBnMa",
  "key33": "5wRe26iA155EsNGRj6afuNehQEw39FBJNbKXhDutoMH33Ag5xhNACJSHT44Fd8kFjNdrX3TD5ETiEEwr4V8VM6yc",
  "key34": "3w2D2jcZJ32wdrd9AP3euCRAdpC5tBeaEwVpg6RPUa5eXBGTfSvEC6tMCmvRZZGgbWXDV56KoSprkshxHfxcUyWX",
  "key35": "4ZACRypTL1opwYT9PFeLDZHoN7BGcAVdYcj1wgmp2mBqixaYT3jPjWTi3FbGNH3yfpiReNggXLLAvdwmVNho3wAV",
  "key36": "CmnUNZJNHMuToNzjzwajrtB5iVYnZuurJW5XwUm1SjbnYG6UdDVU4ZBpMagKiEwGToSsLpLvpKKjFb3EA8PCHER",
  "key37": "5bb4ToRb1GVVBej8CnZGdp2FsZwsm9Fn8ELTg59FrywA1XgdgNAYB6R8aDRvzunJj5b27S1bpvzot4qxKZBJcB8z",
  "key38": "2HTedDgQmp8K6LEs1KgW5Dk77zNEkMgjrcuHpabi9GPZaZGgFf47N1pAAxBGEQDLCBow9zdHyhJWMfvhQRryJzBV",
  "key39": "5q5NLvBUmtcxgwgctz3nggumXbiXYRKivEf4Lbb8dU2wG3jXV2ceQriFsFJ6Z8snHFnMco3G8KLzSwBrLBGEpBxn",
  "key40": "7sm2R96D5sUTpNHEa1Qb7MwNKmcwcJnfvbN8CLGUvPhYHkBajETDaQ12TH5r3oSB2eXTU6UrDZEMtnxuXoYF5sv",
  "key41": "cz4wmbfNoQxa5fhB6aDz26wjoezqDxughyTgZbJBq8v9oLmEQU7DpFGGq4rcFf1PSUFf7UG5r3e7huebm813f7a"
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
