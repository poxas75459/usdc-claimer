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
    "jsbx8HjVV9adu9cFQsLKFqBGbp6hizXUTCExRPcm8C4Z4dkc6xBqAfxq34UGa6HRWshoXsQJ6aHgrMDwEgKch39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21aNwaDHMnvxQU5LCFgxWXa6G8z9fX4RoKrC851T6X2UZdP5Q2Uvk7RYKP6S1XdFFiniWtZqq4ZpmBoWHawy96JW",
  "key1": "EihimX15ByNsDUgzcprL7c3EhAix6brrEFtJvY7ire4yYh8F62fVDeiew7Ljq5XapdPk7E51vRtt99Wy3skMPCh",
  "key2": "2t53UsuD3Z2n9opg8NB1EoJ6fxTWLgqmy44JoaM51UmXJdKZbjnumuCHktx99JkcerWXUYnaQzEzwZ2sMyGmGnfr",
  "key3": "41Jjq1cBKbC1wywjCLbq3eiuuHegnH5nor13Zt5hAACTGYYCzNj7AuXdaWBi4fTz76skxEaTKPgnne7XR2E38bZK",
  "key4": "TyEvDCBG6NVAfjAQh6afv97jVj11SiR1UC3ELvBsWDQynVyaiRjG7uSJYUwZRdXH1VBiAPEwdBZsy81JaPBe6Bi",
  "key5": "4kWVmPLoQGBAoG5U3ua29rodyUNwmf7u24hALfiEaT2pxnHWr7cfCgGd8WffnNPWJq11KEyw5G6HU1LFXm3EBkEu",
  "key6": "GSUSWSMyEqr1LVyNZzrqkNhYyoUWgSRfR4DqNiGKdJqk8YZbjno9wGya73n3hrf5pbxQP457pqKWwKEmYw74a9U",
  "key7": "5wwwm3P4a2xwe25PtW11wVg9mQNo3fnGG4DNxUCxzTCbBtHEDwBY1H2eNaoVmUujqdeuQwBDef8BwY9U2yaoXDBB",
  "key8": "43rYo96j1dhvygchAxEM5jwa66zPfHVBGHasQyqDseWKf2VTWkUbNUmiEjvdFKdRQU16YPMb8C6vTKQgzpG1QQGy",
  "key9": "4NbDYzL5MLRwtcjn3XAQb5yGVzLwYrJKE7NPUVcubZAnAuXKYEWfzUtNUERo1BgXNoA53BDSybSFNs43PcYA5PtZ",
  "key10": "2Qphx5pZagrqJm8uM7U6kRmvpXFQFTQHZiVMSTfb9drsnE8JR6h94AUKEue3Lp3b5e7iSMTe6i5Qf5oA7jji7wpu",
  "key11": "4UCeH9Gck2vwxuShkJPqQP5AP4hdnLKViwwcCHcfwtm9EVrFZzovfVqoVVhdtjc3iW39kKCRWVupfEnf9EdyBGxX",
  "key12": "5dZcyDba1HaKJdK2CpaaJ4Xk9ZzbQPGENKPTYnEN7LLryxtWiHGnSzaPQYHXdGz1NzEehyZhZ89UnYSoJseAjUJA",
  "key13": "65MuK7fBoNwshEMdkjRcUgCRCLCdTyvPQGWtnx4TVUiZRLTW6aFDEMwTCbsuWpT2YgpuAQaUabFbuzEDdgWQgY7k",
  "key14": "2VSVQQ6sf3JTFVvWfpgWu4Gu7WuSB5cqXFMJZiUiMP1TmGp95EfCnEynqEHbMzKZkdAoW1MTAo426AtLMGien4ir",
  "key15": "4umvECoc6aBkSeFbn3fKhDxL4EJ39FNEi1YEyiAm5jHos8Lf1E7KDgqnWpjwPzyJAFNMpPZWX9r9FWBLsmwqymw",
  "key16": "2MaNZDeNxTQPkBFuiSwZ68a4U2YLQFKXwFeX4frt54h5ayyzNb6kQ69xGexoU1QBpdWbzZztem8BHRh89ozae6vV",
  "key17": "4XJhYRZCfGtjcHNGQuPqyRePvYKnsArgJLPLpk9oP7puZmXc2zSCok2c8obDvaP7pm3yeBjaLQHwgpTfg5cUxhxH",
  "key18": "4HzasPaUhsVPsZWcGNAiVgWjMe7Bz21mNDjHkifZqW1iob21jLfo37KzKoWRmbLD1tPAmaVhxsYERAYX57EGP84A",
  "key19": "4cfmnowyUeHup3U3ohLkFzT6TQFpyCrZC7CGuTPikTs4gTo5Qc1HfgGqQW1XXvqrR6t2om65wmiBvwL1xJkN6iGY",
  "key20": "Qe2nBuQQeTrWujMqym6Xr7j5BASgabGz5skZjuYQrDC8AC7Ga67wJZvXQyh6XH4UGWhK44EbZQ5u3zFoHNSiu79",
  "key21": "5gvKmf1QEYKC4obmufkCqxFFKb8piJxtneRiuDU1EqQwssCSUbPayXpr9riRTR5MBGcKaMYFAEAS4o5gcdRcrjoB",
  "key22": "5ZJSUWP66B6tkWWTVy5gQuJEm5LEEbRHUm1xa7jpTPKp3gCTFcW7An7Ngv1BMmJB6BCgVJH46g3VTqkravJJCHSo",
  "key23": "kXxq1TzuRTrGttF9ox6ZZNBbZ95A6rxkEup5q11Y3hWKGkY2CAV9WYDNoMwYzse3NEWQwKzofXttCAFhHLWG8oE",
  "key24": "hHgU4vyBHS7C2UshR2yknTUjpmWjKUxiUCD94cAS4Dick6J1i7QcUdTRSaT2HeSmUqXYcY1inueLev9KcJfbSCQ",
  "key25": "LuE4Ax3nuH8vt64E91NonLtiUyoaWLvGt9XNAUeVwshgaE4mzBihYbGudYTCFPtAdvnRTDqoiHFuygG3bKNxDdC",
  "key26": "3NuDK95p2ZpdLtR1K67skugoVw64fAG8wHbJ1s9NbDVTcT5JAmcBCi3uJcQDinW2QpY3i8R5ecCTF9PrqYGsF7Qb",
  "key27": "57JjrRFvwS99ggfJsn4oDLAWG33G4dkCaUqNwdn49PdqQDaMGffCfVZoxombzJuLCXURPEzT8gtzKMpxbtkjTE62",
  "key28": "2bpiLUwHQfwhSbXAmhZzJrjEyEFoC1cddMN71LGDNbhZL5fnNoWTD7DdnXLt4n1Jakm6J4kowqcvTa5YE9jhDW7v",
  "key29": "2BPUMNnAdUCSJ7u2xfBaMqcPY8wPkbTdsaS4W4p2ZMY6DCJZaqZdNYFeLVikdd8ANquuirfrwsC82qJBJFeHg6CH",
  "key30": "346Tj7YEySeMFkhWmKRaUbQe36vWjGv62fpowBDjjFhu92CvZV58o5JeTMHjTQBKXox2WK6y53sF3u9kx3ApYSsR",
  "key31": "5mx7QP6h7CyB8tfuSvwTomJBZCJjNvXKov3SUdgGZToboFWZJQE9odwUt16NsLw1jwYBFFLjydRLKw7YKMWrEnBq",
  "key32": "5nsypa7qTmttbGMN7zyAaLwBi4Np9p9LvCCvcs5YPCSS9GTB1pnSFbvTRzLWFE5vjERN7g6JnnrLd6Nvku5neTSB",
  "key33": "4cAoSVHbb4jFU3tsx7pEUQLVhbDrQbg9Sm1sWLWk3VaPFyeqDNf76mczuduWN9pjiwyxeJRcXkvsDRpXUBRA4wEh",
  "key34": "2WbRQQhLRryxJXA7w2M87AHgPXwS9LUyzGtNGvYHQxEZNQe5AhbLjkPKCohdp8o6Ptj1ZAsKBGyXU7ybNogaapty",
  "key35": "5Tz9GWFPvZPNNLcQ5ZeRWQ3d6xmfZJrZPgstErqMv3RDi6Tm5DYmZ6pRjbmLMexLqGYNJuLh7ELAjFxxMHypQnay",
  "key36": "3WerqUA9Ji9qNQJSx5883Gbu85JJefPKSncFECitpVicRDhuN6oGwNtdRF4iYue8tTgLTVTeFm4js8KW5CE6WkDz"
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
