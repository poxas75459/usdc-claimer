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
    "wbuEjVz5LKuMsmHzc8ZeGnZoufAjPcbhQ1fZjpzJ8kwTbMPQDawBXHSpuYEsviUWg52L3FwVrnYApAW7cn1Pdta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWA4LuqZZWjrMRnU8zC4o4J9C5QTtMDLcPW9Kxs8it3HcEPoSQQg1Gjyd2QVNnHrv2Mu4dE8vyjKuxK2pYeTqtc",
  "key1": "24ywXPvEYZpaqpzBWbP7fZP899KhKiiMXYVUj6QpB8sKyJd3dFeHovnnhG1cuaBiTGwYTWN9UBT1huqY6AhaLzHC",
  "key2": "3RZCLjGYhUmAx4EJABrFLeLRUExUnKEcwQ1b6NJ32H4Wf2KsCsWAQtXRbgykArZfjAxJaKEnQi1Dght1ywxr4LXe",
  "key3": "41PHnkD2bU8GTYQdchZ2p4TyCMGrbBYJELRae1BeL1H1XSVCt9e9xEUqnEP4S6GGzzVeQgECWErUKPgpuCS77mt5",
  "key4": "6b7qAXQ85aFfg9qDL3DmqVk9XVDbiwDgsLouLwxQBqoJ7KXnCJehMaRtFTdPg8NVCUoA79MwxjB7d93pKWUsujp",
  "key5": "4Jq2j5Pm6qFhxkpHMofL9CAgYrX6fLsghp2qMjZfqKypvMPSmi1D77dcJ8FKP3toMxukeMhKp1R2KpkL1nkdgDyB",
  "key6": "3Mrpt7tQTDhrbavHnNGnsvyPYRqgbQSWZkrqJuW6sUx8hasdriAjNqdkjaFr94zg8d71vJJm5LKyHGP3MHbwc8S",
  "key7": "9dnSQhvEjfQoEMvRWfn76nZx87Gmyfrt1eWsP2miZmV4A1721QuU751ZVzzecoHMZPAF5u1U8yxwJoEM1oCCdFW",
  "key8": "2V7Q9KSWs29UJDkQYRMotwP874p74CSgw3jLoSKqfaNccrpgLNgPao4kekvDaUx9gP1HFUQvmL1TnGbu4KtyBb1i",
  "key9": "3PPjman1E1YWjm7APo7fxVMUfaPQy6BCdRRCRuZkzqNrZbzUMMYMo7tJQX2D1CxqyCGf7M3mmEQEZkrCQhwguHdT",
  "key10": "5SMoygtYNKogysVEEeBNj5byowGMAtBXvn5Lpecx7rLkH3iCmPHJZWa9Xv7xQ9sEuPvduoZKpD35pJ89zi4rmLDy",
  "key11": "5C7axduwXbPXASwRCMuxY8nNcN2nucMiivujPSiDoA97dg8XiKZoFLybjmuMZbaVnKZ8YTgLAp4LavQbmjQgZr1W",
  "key12": "2sRC5tpBxZnSpHmcXKzXf3mKb9N3KYEbksZHAtxGWXxvAWntoZ4SGfYNjz2zcrKiuXkihY4cW5DhmwpdWuPm5bjL",
  "key13": "44r7Uwo4TFsvd8Hjs53nERNuAHiAfe9XhUQvzSFTukSjtKnV9TytXEJWYWya7XgJbW4fkE2ZcJAAStUTt6iHviw8",
  "key14": "2LPL3uHDyivzG4g597pWSnszBo2M6h1NappZDpSfzhBjgmz3wrpTEsZ6VznQZKwgUojx6SsZ1SYrUcxMPNNpHWJS",
  "key15": "3rPWRGNd9mQDJ9pCWT9ZzG9KxcjSvEDUgMoAE5MD2sxZYhKeseBVK9AD8SKaqiJK4jzp6tsTQnwH5upcHxrwcj8D",
  "key16": "5Q7KV9iWLFy8vdZsMocdmMXXTecnKx6zGbGSZ4BE9dVfGRko7zoxWMaoCvkvDTs29XPURossJY8BQEQN9CJUJhDw",
  "key17": "2XwvyHxYmTkbhY8Yk4JUhVVgJcmGLMiYcg3y41TXf574cCgHK6P5BdZvRNbMW8xoov4r7HSQHQZuiUmL8aqG85Aa",
  "key18": "5HE2SCYLnN63wGJosnoRu7N7XvQhxexHE5oGuKhB7yZnefxAKxk7kVQ6ntR23hPshH2WKW6FpzEjuMqnrdRjyRm7",
  "key19": "3fRQpgQb8LGEVsUivzx2LfPCJV2sUgHLYzGuNba9XiWmAn27F8ZSLVxhXf3LLRdAUipKi5hFVbw3v363eLLBK5NW",
  "key20": "2ZrP4ytY6ym8qwQYJi3bYJ8JrSPxVkSDSnaV8sD7XQPMiRvg4ytf3feRkENnkeDPqPY2Y9pySyzTo2G7bRriCPJx",
  "key21": "2KbbakY7sqVWjtyUQeFXGf4ug1kqEqBNGvoyRtrdPQgXsx8pkto64YBJ8CeDoB2i3z45bo48wknpRFqipUKVH4F5",
  "key22": "67VTZUTo2ZWDHEnZxB7L5iwyudasEYdHSuHvs9PRXvL1uPoqdyMW6szXAUUeeJxAHvyJFtPpjAgJq9wGWo5oBhu4",
  "key23": "5TGNe3AoiguijU3th8UrDUpd17NX11DW1A3EmjrLgoScsXcBE8wPhLdBWgNFgwGpxycYpwEzEJJPBVR5UWdMnKtF",
  "key24": "59Jri84cN5Sm8Ptj7dzwu8PLoxGFXdz7sqVqSYNLAACXwSAdPGGWstE5itUZk89X38X7SseoLjsnWn91BtkmqKs4",
  "key25": "5osCc2vqTQk16xhq7wgg3xyXMM7NFjSdSknBK8k6ciTfCNChdy1R5989kPTL3ya1ZpHPje4jChuEMqi1Xr3J9nDD",
  "key26": "56bRhCUye9vdaUKTExGQyA55xz3A2HXqVDkmi6E2vweJEjPfRjnQuC34T879N8cWm566BXAmWBSQ5YyG6qWdfVJm",
  "key27": "2zpkRszXQB3KdNqTm3qr3fHMnP13eDjDpdo81txzRefDzDBqHXzMZ5uY3N8Ludi5b87XvMd8ViZicNA1VENoKkWx",
  "key28": "5gGLi8m6kh4iE9HqgyjELRtczC8o6Tj5Aex4G6UhFpZh6Dc43yBGBWT7q98rop13T6g5cS8HtfLvDTRgLFk91v2h",
  "key29": "24d3W3DJtFXAc4w4Msq4X1kujsH85Xs5ukJr3br8PSDyFXVykKEdJzNTWoFsUAGECjyHLBRYfRx8Z8XD7Lqi5SGz",
  "key30": "uoVYqW3tfWJDs8c2K5T8RVfNHLPnM2QaGV48RHoYtzWQszCZKZ3FsqXpJDTVhGUYvustvXx8SctLYmN1bisYqkg",
  "key31": "XuDt4rHnHnqVqPFZ4gDF11ofUpwHCvctBgDAwacpNedyS1j8nChVfT6qPHX3bcKqUmXUvr2U5JboK9b5HdLmR9T",
  "key32": "5cGXoU1J3M9t1LSUWnJJ23xqmGfa6wmU22crJmv43zkHdqcWhs2HSTGsfxJwJpoXsVXUEhYbMDbt73puttpa1R71",
  "key33": "4HF2YzxLAoXCSeSHZcRC73ZTyiGKQyajr7E11Pt5GJBhzTUzGfknGNaNGPnWHjaPihiv98UduSiXpFQFBYNApMGE",
  "key34": "3kRfuc7jydhBC3BPd4DZoCaQzM21yFnk6weeAkoQyge56rqY9xccdwYogDDDnheLfrMkVkww3tPs2iqAoikgRj4y",
  "key35": "43npQJU2sB1CwhyMDpZr4U358rbrPYFPCTv4oNuAM5P9r9278SuehbfBDgTnFoHgbnq4GB4igiSNt3MCit7dui5x",
  "key36": "2sbJftzeg6DpTVpPMRC7Km3qDvwDUnTSbQckidGsQ5AsFAaPpnJaKpNUkcoNZLHsT7bAZZ8Nj7Q4Bh52U464tXp7",
  "key37": "4aGJ4mcDz4XpDTt4gZm689DrgUfV2EhqrxMgeunujsVxzYjxMg8wNa3GmN5ofE6AFghpHkymmdeiM5cvFm2UMLve",
  "key38": "3RY2jiv4PjF5hfnMHT3dSBRwmUQg6amSf1mS5fBwo7nrmE8G6uDWLee19iPBTj1AiR16QoZFiZZ33qanFVJpCa38",
  "key39": "2m4vyGUva91zJzhMzaAkNWgtw1fMnNrpwsQidwXX3dVSaSzJ6tBxDdHF8Gn36srW5ygXBs9VHccw4HuLDBiJcd7h",
  "key40": "3SQWkhbUXvxc35m8iA3QZoXdfFRBRRbj5F8sdvqC7ynSPcbyR7p5SN93HGFJDqXaCoQmg3E5ZH9PfJWRMUZF4g4Y",
  "key41": "VgCsRVvNQJCHCaVuwQM3FSJYSzZD9MsVtyV2ZvYdfo47cjm8erM3zTRs9My3xxvQB7LK3K6UZbi7Gik9diTmJoR",
  "key42": "4qNQCbyPnVCzSeMAiwygd4gwJ6Y2Z4u4GXgh8cdUE49d1cvfE8bMRkhRgsBc14ciPNK2mVsFGJpKG6yXLCeaCAuz",
  "key43": "4VBi3uTQFsju3We2rtBvo6SieQGcbBs8nkBDsSAmPFAiUJoZmKPogchzguw6pXrxzTDdFy4kgFMkwoxrJ5S6BfXd",
  "key44": "2baEP6eAZFekMKhoX5i91keYr9BmoXUL1VZ7R5SKUrmw4K9uYnYJSqX9XMFegcNNdmwjUikmThBVjN1GeZwdkz7r",
  "key45": "W3zFQS9SUFEevFAAWrEzk6i6CrzRUyPWGZ5uV3LHYY8TgGkVyLUR8o6exHvaQbYytpbs5E5PLb2C8JujP7sBxiT",
  "key46": "3jwxrLwVmjuLgBwqAxZZY2ygifi6W53QBHEhA6GPJn2XL1TZbjFUhjuuZvzVr2ys7LGrhbeFMcU46orveMcpYbLJ",
  "key47": "Q5Quu9pWyycLi9k1kPnVp6zhfTmpaVMSj6pk4PsUhE3NcFHnxjDmMC7NibbydvGAtKq3TZ9o5hH9CUZZ29h8dYd",
  "key48": "4LcsNTzRFZVnrbtihivs5QNXo35jDMVsLetr3Jm8486h7GeddcPEPvCDvgA9mr5AwzdGZpikjhfKjcQaSZyo49k"
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
