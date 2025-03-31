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
    "4BhBM7sYwEAAgyZ2dW9cusPQomD8X9k53yV5tGSZdoDtxuXocMrEpM4cdhWcztoqUuxrXkS4FkNAvHhKwRURreSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DEsqFQNetKZzPZBYyZfsqtkRF3BePTAJ1G89F9BdbXyHfhBkMrt66Syk7AGPh7biHqozrNSpK9jEP6HBFtNDLhC",
  "key1": "5L1qKThajmL7fV7k1sxuAZhrQCKCV6cxBoJLndpSTiMuwi3xtefLXW2h3R9uUGXeLUeCFDd6cAzyLEuNCKpw4hXv",
  "key2": "54PofizpQMPaGW1BAbafCUnsYLLW7N5Z7JZcWrKhZFPGYjja6r8DziZLCEzvc1nSBw2gMZHEJcVtyUxBifABuqGo",
  "key3": "3t2yR4xzN7YYZZEJPiQwoHX9MBd5dbFFcgpE1wkoAX9BK8b6mpBRnPuQHnqvLgajKEfDXdrNLK5LrFzVVQt3W3sp",
  "key4": "2K61ziDzYScJR7aS7PPuw3JybD8TK8r6Hy2JgnDQLaEwHm6unxLXHoV6P9UUMs8QmzoQgPpuDU2KwN1y4q5pEPsR",
  "key5": "ep1qRXZmbVMq4MJWMx9sK5Wd2m4zUEyPQDNRFqUsiQrHoCqzdAGWzCLsRLCPyqvgLyg8GPL3dYx6ETx5wsCgjKE",
  "key6": "4z5Aq3i6ukbVWUYCVxyMnqfNLBwoTcUJNGmqjPRpTC8xo7mQ3K7hK7avadiPbFT3n2SXAt64mKj3QQgcr8FbBoam",
  "key7": "2TJaGCzyFGZ9atkGfxsQULLjUpkPZ21s8emgMTCgh4jCuAN1tN7t2WSSh7p39g5PoQ4roLVLfCndukj4PDgcteHo",
  "key8": "4kecFfVA6dG5GDafB5pZ7NYEQkzEN369WzvJFjRQNyMmAEEwkXwQrJ8PVrzDCCJPPLe9nwX9KLWCYQTazCDjupCA",
  "key9": "4atpxRLJwbQyCtWa54GuEvac8UhGGi7wY195XeL4yoZyferbE6WzARAgPmatbE9JXPxChqwAixat9psn9243k84u",
  "key10": "Tc19DEmyNsdCM1fkErrcg3cpKkBtfS9GEFMTz2hZ82SF6h7NQqyFKMVErXvwgsnmhzE6ZzugBr3edstVFJxCu8X",
  "key11": "2U66RJqMr8dDLcVvezLNZhn7LP2SB1dtyswAQY5fdGzuFqtJmbifJwgsVWEhLgmh9V4iMkHwnSXFUYeDmKo2FDpG",
  "key12": "3hDk9DY9cXNRNZd7r2X69sWuyD1ieqSfgkCq1GpcBZNpkhBCz1MbUSQxHdyBXMxVvosheyXCQzXweZQrzV5z12DE",
  "key13": "3jQXo2Cmv89bndpEvuyGwZW8gtNhk6KBk2ixn4HwJr82rG76SurrGA85qu7rhPyXc6XtgWEovZNLo6taU5mYSm1q",
  "key14": "3YYsSSKy1JE8BoaFn4aJKr1USFQLtU45gpvnzkQt5Q3TbFo56oSoBEBVK2HLPVznJmnrhFT8ihhREuZrhovyGiHy",
  "key15": "4gHiKamcSyENzLFicSRxBwXDjLRqZ33tvdJz2MmFDMwy92hUQcReUKMF3ephW8tv8DffUHRLW5kPbgtWh9wkDzi4",
  "key16": "iSeTpkqSoFQyXdfBBNfCKJya1QWUxUd86pgUuSZWmQCCfzpHSecdG5nqAubGMdNBoGGhk9a8B4tQ77AkioTAmPd",
  "key17": "4KSX2QBcFknL62hyyGm9k14yXs53vH99CMwCDWVpiJ8nYJXdSxyJRBgnHtMnW976815T2zbgdceTiwwiaW2GMdUt",
  "key18": "4iZHKNW15TfwntkK8DDMRyRdE7rUUWA4pv56VVGZfUWze2geRhz9ndvanRmcChkiysRw1GKRdrEFLsu7CM2UEjNq",
  "key19": "3ac7G3pwJKbkNA3QWscaAeW8oyAQikdpT66EfbAzQoJr3hNxDbBamfQshzLaBBAHTFJQgpEfYfmPxKMHGFsXWqpU",
  "key20": "3m1aY6k9U9VvvVBVFR7JDAAHhm5oDcp9QARXTDqRk1nYep2A7Bfcg7Ej2LmkTsqRhPuRGbGwyWKQDFixiU6b7eD5",
  "key21": "5Z2aTKPbQEHWcFksjDF6h2C29GpiVCMCk9Z1qJqwpcg3fuQAoUwhDS5J72H8c3Wqs5kdDqPpvt1bUXECeiiVA5b3",
  "key22": "MvdF8j2KYaNciSaQA8ntuLU4opgi1XBTN4T4BQaVx84Qj8jrvjHCYC7RqYwbq8uPuSboWdUaSGcGEtewMPnSG2j",
  "key23": "4HTsxbY1qTRPHWmT1g3E5wgbQCdfyutSKNTp3Mc5c4UKe5ZtnECJK7gmQnam1eu5XdwztqofgKva3KAW3ip3Z5NG",
  "key24": "2AFDKJ2A4Jg7GDr4sj8S7hVUF72W8JJGm5WiZ4Hnouh9wbiwK6Y19E9NEgeQJyvs2jRET8u35yoXRsEsUJeH5EmL",
  "key25": "661DvgYTXuvMjgKHGcmgwHDnTjbNy3zQDpdGzGGfo4WC55JGZGkWLudKUBJZB6uP3Y3fvL9MegxkQ24yuuteagcD",
  "key26": "2jPVxT5jWeEFDbfFgUYXJ3Yec2iJMTJbULkCD9V8na76PyKGUDbMiQwXJ1STjLoviJjTPPGEAp1csmGe9vCHErvS",
  "key27": "3Rpv8JqjtzENcAoZaUKGrPbYvCPWpDesR6S4brrXvyNkzrdqLCpZbjRvf2CPfh7Ec1BCaU9bkBR1rfBnDt1PRNFn",
  "key28": "23SqjrJPsefAAAw9muNvbnF13jgsareS9KWE9Lmn4ZHjrE84fqPKrv8HsyXTgrPn1MgJ4LuUi7zJCMy8ZGYVrgZF",
  "key29": "5KC2JSmMxP8QBLLLFhASw1fUwPP9W2XYi53WDCdu2rKkwM4oRabiiyFokc5R5G5mV7WYBYfYNoqj9CtE8G7vEt6E",
  "key30": "5u77yAHWP8pRYEDc4B8udbkzBsUJKXNMXcozeVraZsP4GaGd46E2bZfBdEUWiqnVCeU9wSgwiwdQucuNYkLnLGhC",
  "key31": "2Gem5aMcDCee97dRQ8zzWVX4gA5Zkjv8zvLLbCvLT7QXg44NDj7dQcNe1BFYjsv4ghLH5HpghDAYRd4q7HB4yhTA",
  "key32": "64EMe9QFq4ErKCCVc3U8uru5R6iNwXAZWBeJ9BnZmPzfwh4Dbg8U6BLyu3kZCMPzNDWpoT758srRH28e2BiLRgVs",
  "key33": "4j5JYhgSo4kPTs5MdvtytYgrWCuiBMqYNL3A6H2cmeZtu3jGLfrih7pvr59WKJizFMTY6CS1oVcmbuCp1w2dX9Le",
  "key34": "5rZ1PRcmEGxCTyxJiRQKnnDEpJ1kPCfdmxhoBbRB8uEWhKikFSK6k6vKEeedjjiYRYRaeegc5qfxN9kdiYff4XFF",
  "key35": "2m3TJe4BR3j7rq7ACbV6YXUv49ZSusXPrRn15Ycb6udzVL6EbUnXaLnuQTc9gfkRU4EFhbzmXYSCMoCwNgTE5N4g",
  "key36": "2C2sLFJH3hK4FjtTYqmhuj8369vjMMWsq1tHFgMEyYtwwjtkjK6dbXPtR7z4zg395BnX8do7bmbHzAW448qNdn5e",
  "key37": "2eMxSA4MA6HuF6LgsXXs7TbyV1XSHvhenhRvSeQW6yajCXzLC8bdRfMoWMjqyTrYp9chcoYPjoEPqpLRAnkkL1Fe",
  "key38": "4DcCPtXXzaTyQ7JhTVCpyWeHNmQn9tvNH4BgrMPvm5VVaby5hTf7MQYPipwUoNfH33Jgsp2RSDGHVn35NkJfmyRW",
  "key39": "56EcBBnQQ9PRwwRCDL66gAQCouWuuYFmm8hXHc6TkZyhVBF2LfS1XdC44Ad1YY8vy5BsSpZVybpsKG8sprhnXDyq",
  "key40": "61UoHE58eLickQ3KJewi2VE6Z9gsSFrosffZ9WvZM8zdEZ4AtNAMsehpnr5YQKobVsdqrrkYqMWBY5pzYobdY4pK",
  "key41": "57vtBxM2LcVkJUVtBuhpHdjrx7jsd95inPF4WyNCBHkXPzxGtqBsyesmugE4cFex1JUyjQJRQoFa5xtvgehV2bYc",
  "key42": "sEspAjt2hU5hBZu3XhruY4e3Hk3LhimRAngat8QwrDa4BLnohj2J8xmdLFnjYZocpnhHL8eHxAV19oT2kfbtywA",
  "key43": "8C9bEs8TyfPw8aPr6J2FJmDLAgqk9JRhCBHMh8Qj3rFqDrazC7rvvnkrQkCaJLJuFksajVA6WfuWxXjU5nNphfS",
  "key44": "4dL6sWnqyQ9UGPpoSbeU6WGJC5QG31HRWc6gFAUoe55Mepsqb4yq4S68vQF27ZqfjVYP12CYot5epU9WThpC8B6T",
  "key45": "4ZWbnt3fCSeLasuqaEcwUzfTQCnsyYmXghUWtzaGCtJeDbaEy9ePf3q4ti4sHinMxWLUoCRQu3cUQLfawovVPGk6",
  "key46": "3kn79JwFNqkJ2urK7LUrqYyrvc22iCZdGvzjXhuMJj9YHK3JVv3ijSRPqU3rbgjF9Dii1tuSi6UoP1Ahr7hEddk6",
  "key47": "3DTq9zqtyyZ2kvSgmVZDDQjnRwtZjz6i3b1MAZ1aMeCszkzY5F3tYAJ8fngHiQsJRXRUDyjHEdG1VbsgSifJnjZU"
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
