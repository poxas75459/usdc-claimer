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
    "3xRFKwEu2SL8XjL4dBQgstxwwizrjM1yQRrkDqa3FCPd1wreqeQCJ61rjTghx93fJDHGHEFy3MwktoeGDUdGu19Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcCiH8y3E4XrtHxMKpU5kAgJtM1GgPUFviNo29rRLzkzoxUJ5gWjTaHyfVbYou4JAjSXjDN1mxvnHEe23g27jjh",
  "key1": "qJ12eEeXJQ3Fu46sqb4pgXfXypVRKBBjmASx1p8FXwnt2hzFcDi6z2Bibk4ezVSkcCK2Rm9SANZkczd12mWWTc3",
  "key2": "2WQgcrDByqfD7gE96PPBPeYYdUzt6dG4K8yvcTADKho35pFosJeV3CeEuezKnktLgkr55VUPV5EDm2DjztamYZZa",
  "key3": "2LCJS9k46krPkSGEugr1Nq3Ymneh2En2egBdzfcyBZDZQQ5wzgtNyUbrQeuqDnbrfVX5HC4o6k3RpC41SSwSKF4s",
  "key4": "3XiyiVT9jaXGG96FSSgeoN48Y5DSQMRpTXk3Ey6eCMNp7FRGdWyoofFHeyMUfjeqt2w4L9vZtcw7GuhEQCvUYc2t",
  "key5": "ZGWGNhxFG8NxfToTcRiYkdaVh9onG8XQC6oeEnbKn7DohzPrWoNRqXpjBnkueDFn2BkAxZVMxSijSgBndHGifeW",
  "key6": "r93NgZBFS6LczqJFQ399Riq4RuqwBDxJqQvexNuxLjaBBF8Ayad3JafgV5cHcZp7nUFfrs2a3d3bSB1FFZbyqhT",
  "key7": "3K2X9ExM95Ys6T1bYuJtydNSNmfDiQoiu5gMw9pSZk31VVYHiaSY7CsNxJXV2xkT3NRkezHxZrEsgqkZiGjBCg7b",
  "key8": "52hq9XUfVtpjPN9J3Lv7xmoJq4exNmNer4K1FcSd2XdcDbHjsgvJf6YUVLEAcmGBZViwiTSXJKhr6zCAhwm6rYrM",
  "key9": "5bNq9z9ug2nRQFtAU6GC9B1UhU7WkXnWP72Wd9utTJbPBEtHGWSwXz3fRS2L2iGSdBsxexUwqbM1cSRgXqACiRx6",
  "key10": "663M6nohNW9MNTBENGcLUxk4MZDCctHmYTLC3c7mGNGzgE4ttGcaioJg5xXrCDgri454ndoMibBoB6HGBiMsarmu",
  "key11": "5pkyUWFPJECrxwWP6jGzw23gcEs5iVjrzgY743Ljc5ZZwYWhYza3CfXhTgvuAP3NBYm5f5A2xtJ8Nh54sJHdCBL1",
  "key12": "PmpjpTHptNpdVqeoqxWsy3A9rQedTRfJtZNDCryyXj35SJs65ni8v7S1nNfrqov3BVaisfxzm2YCXCRQJwL5EBR",
  "key13": "3bihPbMTaCsyjvcZp9Gbk2m2yytT2wb8cxScaWFB1QaheioaGxiP4HEUXJgKnn2V4SGpAFXjNHcToqwUtDtvb46D",
  "key14": "3fiZSubahRVHv4Jw3buRDohpL3fra6ae8D1g5DujwfBY2i8kNivigSemJ1SkeQD4NhwpJyqqXsXtcUQVq6yjLV33",
  "key15": "WZUNjEjhghZMN8VA38K8U5zkiSc3JXVjpdB9DWNUpaWDR6LE7JeUaRG2Nj9KJRXFf5xJXpLNzfa1jqCVLMFq6HD",
  "key16": "3ByCJGzgWGySpL4tz3JaMwfiTSiXsWR4xfiWjVC8xB6GdSpBp2RVX9PaHZEGgGAg3GaMLBgdCNe7vsdFDjWWfEZV",
  "key17": "5iZ1DBKxt9UC4ktYi1oRiJnQAchMUReVxVTTVGwULqKMToKgv77TWAnYVEaMPA1bkGJKkFCccARoU2jjECxe1Be6",
  "key18": "5oNaiwP9Dd5W3koN4a1EykA4DmoJz9B8yJEM8gLjDKJK5dEgMszXZKUJDgAWcjsbKEBRhW2GroSZSo4qDbAzPfqB",
  "key19": "5VzPfhd838jSkLufUou1zxa1g5AWMJTzcxvGPjf6uUPYwva43qECgXuJw4NXezNnYwMt28buGosMAmUN6JRN9Dqa",
  "key20": "52tujqZM9kf1dbzgjeMNjbrUUQnM1BsQSXpdU1DDawou3SYEnmGnJi9YkTQbAucKtgJptiK5cqumKWUmRH3FHBae",
  "key21": "2vDxroiHd17K7owe8zQMHKHiV8oo4yZ8XvQ8oa745x1U7PD2Vq1fJnZtbeGptiHrJCzEZw9v6HCcXE2U3EfTzA4C",
  "key22": "2NcsgjDQdwJfXRY7yBJN581jJnZ53Yr9ksr9zLRZsCdw7fDZhBHv4f9Qbs2LPnysJi5cGDfm2RyfvmT1PYpzfsno",
  "key23": "PSvYnCfrFKiePeXNbUSRXWkWDguXiuRPvQBy551BQZ8ZoBTqTzqjQxyy3mBaV1hgocP4dWaQaNCBF2pcvoUnRoy",
  "key24": "oahKuuQHLYUEfQsehZZq9sW5yQ1fZQZrLJrjc1bhBJWCAC7qwnRVwZMunCa9JfGKL7skwv6N68RiDWMumcfvHd4",
  "key25": "4VVvw2Ka59vN6nr13U1inNhK6Y5UjVgRiMrTuBhnSNtaMcZGMD6dafQjkU5SosFFoq7j67KyUHLVYktwkjoSBeFW",
  "key26": "4qwpE4L3qbpgHEmcfhcsc52Q8oX6PApCzkNEA6Bm7hmpgW4VE3odgp3wuR8EstRBG14qLiHhXAVPzYEdxfC2HSvo",
  "key27": "3v4hiDc5SYgCn8a2Cgsh97x91nSMDomw75yjLPnTHLK4uVujbZB84TcMmejFdctdcBAzc7zL4f24af5xbMMNWTGF",
  "key28": "HDToLR4MGckLvYik8BfvDjb58WDFhV4nnknUd8QrEa2y37KEhDwdY7xKM3gQjoHBHtkyrd54pisxN1qREUUWJdu",
  "key29": "3Wkof5cprMo411f9DgTEdsE5BLyNQihHd4gP8DXEFhrgVVXZb7MD7un4P3394ENssabbvkCTkkb1dwpDQmHTUdcj",
  "key30": "2Why1wKiFTi8wbbKeW69qn47RoR8n6CYNHFA8823iTS8dZcDAE317E2kLezagm4DY4Y8ZBQNfXTqcc2iAWwM15y8",
  "key31": "44uRpMPWbmMR4onWgGTgxEgXGbLzvHnV1zPnvaJXLWUotQVycuDZSbHbRyxoUz3xpqHKpemH2ixrszEH9RXT1ucU",
  "key32": "azg84zfBCp7HwcrWeDVoL1hXo2o6C8LAQEsiP76V7d4zejEKPCuziorPY6SWHRTExtF7oC9TeJby4q63Ue7RQhc",
  "key33": "59S3NZrZj17Q5bxNcVWeobdqQ1bdSZKqzk4uAAdMAYnkSXP3QRYpjvFHfLitjhMWXBGPDztVfEUfFTaq1Fs3H7EC",
  "key34": "641buZcXhFePNWkvrD8hnryruhacPJfbsEkBmH2ACdgRLx7oHBLQMPgQi7k1jCym6xTYR2umAH4tCA6B9QGbnwKJ",
  "key35": "4eAe6e95ibk3dEy6m4dAWhae9T6YcN3c2WP6HiWSomSPkpNDw37SYN5NuxL2n891RmpQvecN6qKXi6opQg5tiWC4",
  "key36": "hZ755qbsirjg7gh6qKv1dSoWPdEvZzuRCXYLJE7g2TUE54NcZLkb6t8BPABooMhN8rK2aQwVD5DryR95m1Safxt",
  "key37": "3gyhGa5VVaPxViVGiddFTDmBXXiTahvg3FLZWNbGyxpCd6AeYbCovwAp1rPNbmNNnMukvQGQbkrMF74uCgZdCUoc",
  "key38": "xVQcs1yHrWTdT7xWFPjhgdF1LF5MNkDbx2eAH8SK1wuCr9nry6F2HDYsnRa35rBpp1NBU18UQ2ViqchFR16Qdp3",
  "key39": "2cG6ZjdRTS1osPd8xz5wSVWQRnfHNxczwNdeQorPP5Mo1XobdHZYPUzGqgs2So7w2MzPcs24n2PkeQ9mRYBN1Anq",
  "key40": "2hDvEkA6PECcNzjn2zxhSSwwJmkMR5pTT8APjHAyaXGN52rSipQ9BY5x1zTG3eYcHC3rozz1M4oKSsvGK9jgk6Ha",
  "key41": "nuN5xwy9WvuXbp1hDxt1hbAZF717z4FWWDAY4RTrr4GQgPRFJGxJUvWgH6sq9BooBLnQc9UQL3iC8CCoMjmwnZL",
  "key42": "1qxhWazznd3Rw8JxDxUo7EipyUVtRPxy3qjCJNZPQxahmRBkNrK52EaHiw3DWM6DZY4fg4DwFk2G9SKY57vRPda",
  "key43": "3UTZZP9gS3RTK534v8BWKjv8EafMmJ6ECGQfogXiyehnXnsCk786Dcr9URWCse1fAgyrSkzW51nMuzAqmT5MmYA2",
  "key44": "2qeR1H83Qd5zMsPWL8zayi3jtvwQXMcEK6GBx6qsk3AatTekjm4FjGS12seDYfyZ117GqWR7w8WtbudPfvhsLbs1",
  "key45": "LL1HRyhcsdgdM5ziM4s7jKUMf3iCZDgi7ukDn97YxmtYGzkJSFnb7VHt6WTg3RkK1rumnRVC7tJvCJTwMJqcvBX",
  "key46": "zB8GbKb1BHcGQjQJ9Ffm4cxQ5hNj4RDQxXWemM3Y8Ygervb9ExZybmMMZQC2Aqnc2daDYU4gnExJbRxSSwyg7Bh",
  "key47": "BMVkdYxz8zW5BRZdGFgtAzy7syUuv4dyXGrNsV8DidP7HzV1bmssPAkjnJydk8weA39TroqudNXTYr65bj3VeG6",
  "key48": "NNzc3uvfpndyCzwBeC6Uj2h5amAuuMb3aKZ6emwJNcNqQHwV4xQgAk1u71jgYjGRYy1VLwn3yBGCKy1tWMDvELn",
  "key49": "2ve2RTiaHo3oXs1tf1rYsJMcJgLESaXpoNmBgP7EuymCwaUCtouYQ4xY4cPx8iAKiB92o8yu4J6TvwAjy6c7Q6dS"
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
