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
    "4ciR7qLZGHN5L8wG53E5DrE8WX9ZYSZpGapqM3UPBXwTxNqEKWEsQtqFJ5ugkJCq2W1BUup1RhmQHeDT9kkjMDAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "68JuaxZize2ADGaGNMMDk5dVjJiswkzNqaqRmE5biSacpsgxycRSeQ9EQvFsmZdBtd1oaaV3QUGKR5Z6Y28K3b3",
  "key1": "GGS8Bpja9eezpx63V2hXF4UrQpPVXiNA3UDHnG1d9qdgXi8rBtTK1KvKG5EFJEuampfoJdAANMWxghf1z8wUcKn",
  "key2": "3eGahkaLWG991TWNsxayU1BLPY8wbL6VyHz9X22qBChkUqTZFSBmHAcGDHDNruwbV91Qu6FJXYM8eQhUhe4Zju2S",
  "key3": "54itCZc49mCLHABBUJ2BU6aPxA4oUjh9G4BaeX8PuPGArLNJJNum9jMGQK7AjbUtGggTsj1EMgqqct3ygiwQ6rKC",
  "key4": "3SxbLbQ8czqQeeA1DreHG5qekWABXzD3vKVgM28UsRbKytGU81VCVFSr5LWrMTNDGt5LnXybdSy58qZ19f4RLyfW",
  "key5": "5iX5Sd8827J6haemueiBNF55vJWpi4u6J4JunXkFjXWrYHV967YL2K2T7eNzuqCGArdMh1E3G53HdcVSnwCKLZ3m",
  "key6": "4UDfkEnyXmkQKL5FJNNTxFNvZ9N4szUtm6VtoG2KtE82ATw7dsYXNBMe766i5yKWtaFfYT8N6eFHQgtzPDcKygEA",
  "key7": "4f2b2A5k1KHTsDwuN64zDDBJ4eAnJwsvDJU6TSS1ykHyYPsFib4msCKn4nV8RGWYgM8c2xL9mPPYHfoBtQZ4Sy4B",
  "key8": "4734bGJ3xfKifnWqoj3VuBRPaWKCH7kAwJkvQEoKGUFN9qw13SSUGshfTutYK9E1bkBc4gALWTPKawqV56BTj2ym",
  "key9": "4NuCSNK3MVeHpwEVGSRN3Bq4PgAsmedXEfD4whxeC86mN9sabjQToPymd7b6PX3gUjDs1ijr4DLzqdpodmQAsAe7",
  "key10": "3RFERWAVrSG6PXcNfNxC3oTr6JpExDuSiTGKywYAJB9awXmn2GfdieX1CrVwCi1NyCgKec7LNpfea1Zt4yhpU2r4",
  "key11": "3g6cbc7fKnuujWwQsEyM3Mfenjhg1rz8nfuhxjKuceK1MsrNWzWxau4HeoMKBnbqYZBTuJ5ShgK5KKLWE8b73izc",
  "key12": "3YNixp6PDSs7iTnZQ9r73bvB7kcvP67yZMR89d5iApenUu8GoWAZoknWFbSw1XrZreogjgT2zmNZhjcADuBt75oR",
  "key13": "4ozeCDRFqGCmopZ5BaLyjJU8d6q76HNUSELZXCuGp3ta4G1pNgg93CQLmpjAWJWobVXikSL3h2zxyM3FbaqMun4X",
  "key14": "5A7VSu75mtTKRtM6q9qL9kt5iQ5sEYhugC5J85M8vaviYQp45CjSaY3AWit5sftxN7tBXTsbLUR2wkC5GT7WFzvT",
  "key15": "XP9guzosWpCqVvQFEETukSJVgrqtjKPCNXyA4DerZpDvpt2PnHbJqH5ET8cNmv6U5T1PGAGsMBWnPdE7xwxxrqv",
  "key16": "2iceVS3DvvyirW9CmsbPF727gtz6pvXLuPwxhqwCKWpeSYSN9MpRzVtdEHDVF5XUAJxbTgsFBBe4bwKcWGUfYybP",
  "key17": "3FjxRbjrNgeY8rF5WYtHfTAsSrcn5ZWrDifiz8M5j9qx6CaGEPiah2hMipKGVrTBfsxARgdEb3GzDdBPJEBtjt51",
  "key18": "5iy9krKdHQidejraiJcfocyGsy58yW3u1wS9DqRT8uUvGLgUrDZjvBZDK5FwBuonNydc1HabdMPxGzGnbjFXqd15",
  "key19": "4h2DwWju5RvfSyWNrmfvfZBFzioU9xc4wvxKsQDyW4S5xBcaKEeoSMS8inKtsL9rz46TENQbUwJw5yMeZpSVbWvM",
  "key20": "V3eKUzxeKrTnymB5bMNgh9KWFhq4mvJstKMFk4H3NoGsdxLDivBkKkxY87ALbGWuodGJE6jv1RoNqwUd34Jto5p",
  "key21": "4abZ494aHx5fUVTUCzKmfRi6MC54zfxXZNxPaF6SVCDm2ddXTvNuGFrijhKabuEAzrmhDrgfKc8tdGvXdWBeD5m2",
  "key22": "4cQTE2iYUPKXqNAbfzjQWzFBzmVope3gMfYSkAwvvRjUzHRRBJbBA3SAiqtMYCZXjvw9NYrpqYgbELTtqS2N7kW9",
  "key23": "3AwxWHqv1iCntCFzPrqeuHTTrMuvf3MuhhncMamX7VFLZToPyqNr2FeMnu3MrSEZV4YMgViri3p73CvekWSL2Vim",
  "key24": "3ymg1KP5erQSeXMftCGq2gtFYQebWonRaF2WNDRnCPGi17shwTvYPMPgWY7UQ8Gqz5PZuYyqNp25fiRcLyJUCm69",
  "key25": "tVN3S3rwqCDVa5XkiK4kbMELCr6Af25GuoPamZ1ywsvfHkvzz99bUgRWqm2p8gaZV5wFqhq3GT7PwgMnAzef9BD",
  "key26": "a9vQtHJh4Shw7LdXkiW3j4AZQkpHrhy2fBry9DBQBygqFD7nNxbeoAG9UvogRAqC8oFHSh3umt7tQCULtMmu6Yv",
  "key27": "tbjP8gbtmr8MB3K7ggmF2TL7ESSnWNceSTiPNChijm7AbBu8hwo88AsMpi5oWeeEPSfBgZogDMRAbXFynYzst7b",
  "key28": "5QchoFETQUFQ6qRZx3FuXF3FSNAwgyy2dQDcZypA3qNcuk2RYdJQ6Tr82WkTADzDjiyth5RAHYzUK2wyRFxUx63W",
  "key29": "3hQWqraxpixhpyRzJoPwFGi4FE8unJ2Er1YSqbnhG8cGKbCSjrC448GAvHWbUHCuXdVM5QUuBVw11XVj3561mNNi",
  "key30": "2ake2fcEunQ6hAwiGhKLtDYHtA2V3QE84xfZqBKgfVfkaXY2oYm38Sf7TZ2fgTpkpdQi6ezdyTabUR5cwZdd2iM5",
  "key31": "i8LSDTsMSr8qJYRuBgbvSSmpyegj7Cjgi7ngVECu2Hn7hkWQt7ys6Nu5AwKH6gB4z7YjWaZCJhhqaJ1JePXxzk1",
  "key32": "2cy6swLPQytik7v2tZ2gVNBC7XjjLpLhZgLeUVGpYhUgCLuJeto2yZW2CwBjhog9wvUwSk3QG5RmHq5vB6WYiM3Y",
  "key33": "3UkjTuZRa83ZiF62Gijmpgny8BDbFXtJh875pDYGznvMn21CthsdZ33XVSscLMF7xrnvgHfRvmQR7SX6wtwQw5vy",
  "key34": "64CbrnUtXxT7bVjndDPcPGHZ7CnWU3apXFGYFckcb3zMovBCczBE65NBMkyo2PqodS8Jdwr15B3D1a8H5nCMMtCA",
  "key35": "29eXbD4d2AUVZwmsiqRTDgRSESutRCGEeFutznBaBcqpwtipBEshuwGP8g3m1tQtfyHSSE5RTzjsti24GFcoLtnr",
  "key36": "3k8dhro9VZnqCsGAGNNCNbc2V81gYYzpMcQynyDwf7tUdepDZEbTLTt5oWkkXYFEWY58xgGA7u8M9r4aWc9ewyVQ",
  "key37": "2im8jzcWcHsbraKc5jk3vsTxDzuTa6P4AYGN9D5YUtK5Tcr9FZ2mLwS7uUfCUreMwe6H29xMxr5pYim7SxLSiYkm",
  "key38": "5vDM8UwhqumQCXX6YSdqDZ4Re1H1ANuCqJtpbaKQiMdvCys1y2dg2MHEZQeCjSTbPr4XpqEzfvQoiuac6tUN6LRF",
  "key39": "WHymoWvMSE6H7H53cDbfY6Vf9cBR52Rqp72DAd8wfamLkPm5DwwjaSJZnoB2RUD1JFNygiHUGxXhZuLAQZWLCfG",
  "key40": "2q6fZvAdybhE7V6JWWVvpru5qMma8JyoqUDWfjZqW2etL4fGDGT8Tont81W8MLHUq6o4vf4FfppvVLRdCq5rcPt9",
  "key41": "2atvZcAHBMpqVpLV9A1wwhQ2xnDJmVHAFN13fM7ETBwd41ZYD3LXu2C1e3LkrYJByY2CL7yBd2aN1G2dDHwzoTz2",
  "key42": "3Rv2xcoGoBdMEfRxHTVGZW6mjY6ECPmmdiBq8rsD7n6ECnMZQZRmn6pfNQKqEr3g2JMs8sevhFHFBQfX61RkeKRz",
  "key43": "42r5scRvPc1Vpb4fU4vnrqSzUS1nVt5LuW7nng17RHN1fgZ43SHDn4EJPDhLjSjPGMYjKXzXJdULcTcaKyaHRj4K"
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
