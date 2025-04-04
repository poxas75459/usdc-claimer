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
    "21zDz7WpXydem2KMY7jWbh35ptqegHY4JjKDjjA5WSm1F3AS5FTZwgm7stv94sVGZnvSB88v9qyvneqU3vm9VJEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oR3ZZVgfeUYT9sdQ5TfF3wEYzzMoMMNaVan7DLFVo9ikC5mBZJtq88kD1XjiFwFW4dyZbtS8uk17CPrtJuzZNF",
  "key1": "3RiqJkmGoXF1tv5LM4AkikvATbUTa4S4xg2hSW4dZq3CDy58Bqg4ewuDoLFDmiHpjHScdWJfnafCJL4vGYtj2yB2",
  "key2": "37ba1aViqPLJDohULvMukruyHe3XoVC3aA4CR7k25EmvZ4SzB1d7TCKPAWij2Y1BmNk73cARtrrzvCTgf4MEBztc",
  "key3": "4e7YzmBr2kCLcnzBckdtSk4Co7HBcS5b8eoUi77oQZYEFje9RWLvc8nne166VnSoF9jC6EmToovjJKHFpRxnxeck",
  "key4": "5TuAmQTMBW3rCo7C5GcK428pxjS2d2sHy2cgmeqfJecnvDCCWu72xwJsQJfS8Gu1N8y92eNMT6zUpQ7crpTPRSTr",
  "key5": "4rYkiVyU6dCPDv4oLYFS6K5kwm65PBYWe8v73EYxrapfozxgrgLzjCHoXaSUcxppUMDB4rD7nPqEwYkv1xmMQVsD",
  "key6": "5nKpDuYEagyitbiHw9jf1UbhST9TZhfP3zvfvGyjH99k6u43wjDTE8zTWhTpgXpfwGbG556AyPQc7aWVz2mfU94x",
  "key7": "4wnDm4AtZHKsmpinnfwdZUYEjbZTzC1kwtaFXCWspctMtQRrFjtP6ocBE7Y9BMQfLGLLksbeMKYY8YvodsRjiWXc",
  "key8": "2hMGLfuUuHWtCt855Xip2EZvwNxR8JyzVGrd5KuxJ8AfnneKSFbk2EiaQwvs99PAajqgSZJ1vcpHyBFHcYtMc1n8",
  "key9": "4RK3xAMbQPZyvjcsfiK8bAMuFHwxoicRo5b9CrVDjm8df7VRNWngCpBv7skrr3xWgVaWmAcKVqmUzWWyNyNeSwVH",
  "key10": "4D5MRKW1AuKyMY6pByt22eyRUPgsesyPDpFixRCMgwQyS9uTJi2EbYfZzZ1v3ri6NScs8smKMUy3PMg7YmFv3WvB",
  "key11": "DwzqDMPWtkZ9pGXVyaz9tCk7qp7tMpWQ9RGQrLpEhYi4EZ7j4FbYTj8JxNdbxowS6umvU49cTwugR29DgFStkSx",
  "key12": "3Kzj4ahikeVmkykciQcAFKkgp6azpWTcsf8iKxXYUoAig9gDWjhGMV5gT5JLNksrUtkYbkb1Jg2iXHBqRRvBA1Ur",
  "key13": "5MN44D6i17oBoU8xAFB4WK4aRTkWqBRNfSKGnbCUXgPr6qHbM4MpRoFrpSDCuxEaLHTazs9HgD3ZwuhusCKxqGwz",
  "key14": "61VXzKFhLhbsay6PaTLV1C52rq9g6zjNdKKGiYTFFtuya4T2kukm98hc8D1zGj9DfGYAK8HURdFXJryqA2eaDXH3",
  "key15": "2vip9C6F4hQBojPMyJz2ijsNEE294TakMy53tnBvgK8NpuqcXWE8YoVjWDTscCtcLxAFfFSfbxtv5GnL5dN7wHBW",
  "key16": "2SHCjQea5DVGL8DVnDLEnkqRSeuvAZDVL7zDM5U5TP3iPebyUaBpZMoeuuKsbY52W9gjrvEmdPBCyxSxqwXgaoK4",
  "key17": "3b6YG1mzG4GE48QGC1zC9k5MbaiK9jKhA2s4oX2vHiFVKL7VowSNRqRJZMAb81vePeozLskowEo6C3L1LrJXAbpc",
  "key18": "54k2dzH8JxBTbrpiCJZXHSFerZNQxc9UpwPJQT7CEKFLY4ZPqrPSATp2F6TULN3EoQMeYd2LbW8fdBQ5jkxPXB99",
  "key19": "49wX6Pvubkp1LqXvbQNx3gMnQqxLd3hvLTxoViQsYP6YuLqWARBEFB3SHsJWDRjbpu5xd5cYLxR2eNKDYcvXMQn6",
  "key20": "2usbfo8wSbEwEQvU5khmHTYbRT6Nt8VGJf3EpeVN7DwQ29zyRCM9L6oSkN36Pdifg699RgkLSkdnNSf4CzBr2JnK",
  "key21": "5QZDGAccofrCHQdLZYvPMcnMh3fEGhbBDWAfEuPWEjbxTwrhaLwYYhoHUxhaD2oiiqiPtCzH1s4SkuaUgt4H7FT9",
  "key22": "4UauJw18Zdtj314nPjipcrmVpykCrMj14xUpttpug1AiEkq5kap5TaPaeYdPrWyiHMkcozmrMYeFEzpipC8ujkGH",
  "key23": "cmXJdWuH5AL2sw9yvkq1bdipBY9pEG41YBAifDur5pLRpLBpkWkhAr15DrmBYjK7w7g5nJRcsqZewTU7nCDv9W9",
  "key24": "HVSx58Gu8MtGvBBVauZxigGAUzmUeS3jc6Ya8R33yLcD3S9nwN615KBrd25vM731UE9AxvXUXisCLyVd36MiYE4",
  "key25": "4gpktMytNfDdsKu8WxBjYYPgoVEoFBeCS112jmbdw1SM26KCdVhWNNw5frzzWaYYEjrN83JWZK8gBVNphDWvKp1v",
  "key26": "2NWyZPP2W4URE4L35CEniAd2hpePPbojjGCrDuE58teSWkQ1XzNEjqA1EaFy3cBd8jqpZffj47ZH3CywXKnM72nS",
  "key27": "4wAaTtR5UdoowFLcQUNnhVC4qcwVS6CsXEaecjvwLS1qsfjxifgEBuaMz8JM4Cgu9H6FDu7roebCDQLCqbnzjh2v",
  "key28": "3BagFbY24dgocsGqtprZ3paUgZcbMtnMeCS1QtN2e9qf7f67jSn8yjJ56Yawgf5SKg9ic1U3bqCR1qBTHS3vT88y",
  "key29": "5d9CodQW5w28gaYbtfwHeTt4eRX7E96617GzXZcGR5hwhMDnN9164f8HsTjUAr4VV98BrZSUYR4iaiqX75NENsWS",
  "key30": "yhEGs8mQM8WnVkq7KnvPvxwdvETWRS342dy5hiPWgj6sueVG2EyNWHEsJUEdRvNC2EDdU4Cc26FDzdpCyxVLjzm",
  "key31": "3ieko99eEHqB7NShFrJ2LEkRvkAn4beDZuxCWCf7uVkrC6MeTimbb7t3KWkJKnMJSVo5g1Twg288ceNaZJuLqDGa",
  "key32": "2qpeZnJqEcbFzZ4s3RpwwPnKQYapwGru5jaFHMcg6GL7jECCUjzvPqs1d93g93KVZwt5qzP2Z5xLyaFUiQtupUnV",
  "key33": "5DRVn8jwVqbmYfN3pMNAAWFPvAsnc7yg1WhhMM5D7p5vbqs7DtrFsp4aQZP8kPqsm5A9UFembHJsVv4ytef9sywL",
  "key34": "5CJZQPawLxQqV39n5AFi3su5CD5ujHURNQBHvDAqDEDB7cVnPCHGa8fcm3z8PrsadM6x1XH72cpSA6wEhhX69z96",
  "key35": "51MCsbB5Uro2k6ASrQWhpe773v5nD4bEPkHJPBBidA7E7wzJL8CKZuNS2Cv2TcQGWkvzsZEwkrHDXFiYThTmnkWU",
  "key36": "65rDUBXL885fKX3YcwTt5Xqst4fJb2n4i8Ye7BU4GaENfXmWnyQxAuhvs8oxj17bGuc8VgWKqtXaZ1akTkUemqWQ",
  "key37": "2rHGTW7Juy72feLdw6MAA1xTRCLYz5aZTUWRFMUer9ZzeDaoejYG8Fj4KJ1U3rQEV76xn6vcDhF7xcjE5CZ7auWK",
  "key38": "5o5rfc4Z4zhoXqXdUyaz1sv8VaG4PR83MXX62dkWMKaRMWAnMUm6qyDog73GQMyqm1hPn4LnzTKcV5nx8ps143Q1",
  "key39": "2yZGfPuTJv654G3UXknyLhogEVvRGKftGAow48L73RRHZqgpCVE973LGyzYd2xzLxNYFxhKmKAZbhkQLy1nZNHGZ",
  "key40": "5o2YP54E5GWBQnW4pTTehExc72NNttyfYqaEcsbsqwVgtLrd9hWQVwG9UmfCtwWEdDQhzFDByo8nDAEeEWAtzzmb",
  "key41": "5Dm7UDkSWrk6KSDvPYbG8LL4nfLMXCxE5CEbRFCdWHZDH7RJuFJAHqGBBEcLpiTza4KKaYVmhsceacxzbGeJSd9w",
  "key42": "2GNGjxR162drPaU5MLmPc2Afa2NaemiGsa243g6QiVCwQLxwHQGrtF9UyivmjYoKD7dgEHMz7yMi5HtkaxfwDK4R",
  "key43": "7BLUGPc7n4tyWYn27X1BZcVcVynt3V8DCU55ErWp4JyoMQLEXPwTUSuTkyZoWzY9xHPwp3gn1zsmdUGnTXRG52V",
  "key44": "5z1f2u5GNR95pGmvGnE5nkd3JMjfSb3sCahHgQd6YAxL48EmJ61dtWGBA8NFm1KtSc5G6sJshjtH7MKt9xaZHmMt",
  "key45": "5meHp8udyo9P1eUxzKo5MwdoUunCj2pa4PhZmpAumb9o66SmTKiDohT5kszg4ezmiTYYYX7miw2ecK46aCWgHAh9",
  "key46": "3UsLHFMcDNWDmertJXzePfr2SRuGGHtRwfUw3tGLFt79HyqV4WaSkaz4BBTgqWo955e1SY7XkDaozsKwSNgdzmnD",
  "key47": "362DQ4VkjUgQ4PcuEaoPWnxkxN2Hxi7WwHdoeX54QmXFmY1APw5sDCp5h2gs8nSyNULtaGKa4SXGTJheC6F2KPM9",
  "key48": "5xAE3QgBB8itEhHtrBRyZMe6tozL4i67JenhNEbbTUW4J5tTruJ1MootihgpyQki6tjr43VcgcSUQDAEtJfJPzi5"
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
