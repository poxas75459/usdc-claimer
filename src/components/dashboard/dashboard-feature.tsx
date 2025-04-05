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
    "2cxeDUyb9yEyAxGnYcpKHRfgyWdfp6omBYd5uXYAzPPJTr44BaYpQyYpsRBNee8DXH3gf7cdYD17cJqPVSB3bNs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cep6UnNARA15GAbpGvjTnWLbGa8aPueMg1ECQdn7p2wcovdDDJLiwwAbg5J2RVN41whqKwELLW2S6daUxxMhzko",
  "key1": "4xniPq2EYTmwDBLw2ryfr1w2JU98WNPzqA344b7wQBkTPKFan1cyxHVYKXPqogEes5YoLzNGyR1NgCToSkYYYjc6",
  "key2": "5WTiRj12svkZKuvmSVp9SPYqvPQMs9RKQU1jWYchsj3NgfWUpUyZQVW9askSuhTnEk9pGw3xrn2VGSBHrYybeDur",
  "key3": "XoMpGvNzsF2xMYLMKCS7qeGMVWSNLwjiEuWP77nCjPMusSUGPYCngTbjMMnKpTCnw6YeWTU5FpHeZtSDJWxA64z",
  "key4": "4Zs74uYTNQNm97FmoLTg8R7r2HuWYEiXFYV2cfdY7mj5UsWx26D4EZ6X5RYiiQ1WKYQbFRG2bZyDajphB1V4d1Ew",
  "key5": "26u4SELYfB51YpsWu8s5y2bFLrjvQMvvqutAq5MoLoNKMHSwMdKctW6U1xXxsW5ohCW4DrjCocUHWZN75fLMAcvn",
  "key6": "wt6Qr9kyLVvs3EdsjaMzpqVY9udFNENAxWMoGxTdtbZHLZUnZ3ubfDq6kyrNxpiDRT8bKVpBh4isB9rET4fSq1h",
  "key7": "2oZrCnQnatGgfANadB2ySsVrRfm3itFa8WpdoqrsCXvMuAP5fQVa2PDXaWRNAfUcWaeJqrWGXRcdN6PaJvAfux8Z",
  "key8": "59Tk7dumM8bRC9JyuvitU859oAKvppNukSEwHmzJkTpGurzoHWA25DoosZZYLTD9c2entzJkFXx6HD27qWY9DAjW",
  "key9": "3abPN5ejoUf3eUQ7EX1Ugyk64yNRetRG5eBKBUX3fafQovsYHMwBtBL3ttmkKLy57woWnuS1nXQEvThu9UdP8DgG",
  "key10": "4Kyo5xXavR89kv4B9nMrYreFrx4hcToanvtuViWB1LfTBgFitJ1GkZDt6iWPnbGhR81YFvXtju77WKphCfht6xLk",
  "key11": "kNRt19NrKYTjgN6uLF8SS7o3agzGm1UJ4KDSgFQGzivRVVdtmYsudE9MhqjWnRyNwQZ2RjXUboSJHTE4jgKu8gG",
  "key12": "3owaZUiYqraGbHPh4Ef1aLzX7m9fpMW8Hgfaa7kKcZQwUCe5Yy63B5WfqCEenmCjEuVoH6mvBNndUVdgpURHNJSL",
  "key13": "kpvbzBRjf5apVH8wR94UgEzZswziocRXVB3xxU3qzNSrjaXEstuj6yEeTqb2DxfqPpFm5CoTjSHEr148Ds8CAFZ",
  "key14": "3CbARrtsbYH4h4zjCDGgmwHauNmidUQAxCNxNtqW1HJPBgdef34epmKTNCXSmpyLe8xovTiLAvhb2ovyxdr1aPPp",
  "key15": "2Cw8LtYzSp8QXRrK7ZqNt4FTnYgAPF3Gut8MWQ98yvjHeRy5d8wFnbBpXmDZBAyrZpahsFDM4uwW1GTrBVyVrqH6",
  "key16": "3U1GspdfLxuVcVAQswLsqJSa2uyrvXvaXT4a478QxPCXuJG2fh36WBqfCWmQaEasogaTF58AvRP94wWtLBveqWtx",
  "key17": "2uD8WtP6MqfMm4meTdMNoX7mwReprKrgaHH6rpKtReWecATZ93Vqi7zoWNaZsWZNFtN7ueUM4PfWyyKECpKHGDCs",
  "key18": "2HUK471N4WMVKBWaT3gr8BMz9TkXAr7zhLiMvBJ1jDe4jETiXXB2BrEfsc8LUbHq6JF1weiGWQtQsbhMSyro3xFM",
  "key19": "4AUeYEnpt89v85m7338Qz6NhaTnmB7QTuqszDigx6fNqmQiPt8DEoRKC9LjEJhtdKxVkrDtJAi7r6F3zf6jdM4T8",
  "key20": "2CWWW8mkBz4gEBnDtL4Z1CpjFWuoLSuWWstgC6r7yic7AANhcfXe6gTFonCjTY6eQo1NMsPbcep3K8ZyRak5q6au",
  "key21": "3kfE5k34giRMZATwdgBCjA5N1LyHs9Tiargz2Zoid23MKVzBf3nUaEswGNPh61oz17UwWb8v8tDtbk1AtD85MeGs",
  "key22": "4Pumq8K9Sct7qZStmPD5NKrwedQyqoHqV2nFRVbjuMNdnNJyMHsUb8CN9uGFxXneN7A6voAuXh5kW46gCPm1pWjr",
  "key23": "2pDvkMYyRxgBkTcmkjchhAAUrMDCwYN8HASnDgfRuHfREPU2rYDF8ZUMSg1dzgFiaV6UaMmWxAJiUZmi21t3k2Dg",
  "key24": "3tuPTbeXHMLirNwQFKqwbeSRtsZvNdhc58pWsfsnUVWfVs1JV9VCWz5zewbxoy9f7FcgM7CjfmxWpJBfxgqk4PB7",
  "key25": "32SMesehmYTcBPkh7bC1TF7miCUbcS8XwgxMBdfGdAW4MzN7nThghuqEzfjZXo85A4kgx6QU2SWSAVcueAkYGKoh",
  "key26": "513bKNU4S4S3Yud7nbboPeuqy3e6nRYToo3nVdrggLiFRXUjviLeotczwyC3WdUwK4j9a8jUC3h2webXb8fWjX2q",
  "key27": "4tXmWnjtRu5TcECCNVnMFS489UZ7mWyBvF1djCT9JJHkx5psLnPARwjChmgfAfPKv1hQGi9byE4PeC1xGLVHbEgS",
  "key28": "qwKsuGyArzEpWrGscsZVGDi5ZKb8MFAZh5fmZSSgfmGtuwKjFYPCqJqTh86Vo52W4c1XNfQqKRFWHFFE42SxHS4",
  "key29": "4SK9tXAxEq61nZn88h9dAPLL3deWGpVqBXct9eotbmgLXHzdVt2xAdjm3VPTiPdtLRjttyhAspxa6CATyRAZ8NYT",
  "key30": "4f1mri2qVg7zH97Xhn5yWQPieqaEGpQUZW1r3xhMJKdGLvkCBiFiVEUQTnPBcG8XGVnJEimvywbJeonFTTqPMBEz",
  "key31": "5TCLE6wSY29f4bNZWnqq4o7gwKaKBhRTwifN2GH43mZcxNB2BXUjLzKNUdHpXMZHZMdbaAfhNqukK5Y9b2rypAk6",
  "key32": "29T6To4eEGCe5CF5NBCx59LosT7DHNqiXvZyxkkkK5HCQgDc5A1EFzgW8AM1ehhWjspSsFimBn44mMCmQoa9bPq5",
  "key33": "bn5pCwXPbPmFGcnP7PNXrBzjVVu8q33K4EQGnQG5L8FNcqXGEoxt1xrYHbRSV2TFZwBtgbPCV4cc6Awm8nkk6G5",
  "key34": "26BvY4YJLyXHxXqmzoQ3HWEoTYtomVzmPDXRkby62rjQUmXZdQZ2VexutyfytjkvCAs9XaD92BQFmdhroKRJN746",
  "key35": "5QCbGzCcHJzSocaWJZxXMKDjAS6DLh5DJckqVssv95Pwxj3CqAXH12ynnJfPx6SbvYx29CiNfvxBULEr3X3cPktK",
  "key36": "jFnWtCTUEMTB5uhvmYm5UWFmzVT9ykn93Qe7ihxB9Jpei8BWrUJ4uugqprWjfk8Dhvr5KsjjoJ5jUo5XEZtfEgJ",
  "key37": "ewnPu6epQtpyNktYaFzbEmfDNMZDd4TU9wDc7WLVznXMtffvB7R7xo88uhRRHbaffxCBSoUQUjBbG722XNLow2g",
  "key38": "kBiCcuwBkzGJVfNvtooEZBoiAgw34cMGdou5GnTNntd7a4fq6nBX2v2hGeAZwZdWDMFkppkgANmAPx9t6FnVaMp",
  "key39": "5K6ysdjHPjX4o1imHLsHSwCUmJsJvRzbAjgMUSR6R7kHBaqpzEpB6F8yYrCVMyp42jxV9JGngkrrA8KzeHvbktEQ",
  "key40": "4mUUXTUtidxpRAHftuFWuoPxw9RWMTjvS8FtYfqUdDZ4RReBMU7YgCRU4wVUG3Q5KfirUgnKncJSTVjMzt7iLoH2",
  "key41": "3hHSKn377i39sRM9SUG6gLpkQJyWmgUbyQWCabLAtzvFRtbT5bZxCAQowRFvaZ6Gu3MjwwQ5yGCaWmxh8SF8dV9r",
  "key42": "hX5km1GQL2HWhTjKtYwVEtdy28wXQNKcpw9s1tbCUd48kcAFwYumLxNCcLtBWghSNdhPSd51sMxbmz5mv6ATqQo"
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
