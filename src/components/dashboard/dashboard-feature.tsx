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
    "3Nja1Up5pHWy2JYo4sh1gEbHEEcvUUPky4xJBzyAfULcp5k4yWmzLCSzDjg2D5nggcZu2zxL8CwCn8QyK3vAcQPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oBbL4jWcYdKMMcoHwwmftUceUyMMFkEBevd49D91XzktbHB2afb8qaSQNj583FR4tzLskgsWgWafnQYhfsEaz6k",
  "key1": "2U8kHMEmWkPoFpsKZsYECdnUShZdV287aHja7qord2aoQQ3Rcw3vkycvcXqC7dgFrfqffRnAXuVD6nXzKoLkGxab",
  "key2": "4Fn3opRo87J9K71Jsz7qd3Wk15iFdzMk7UVcK3jcdm6FHKk5kNNMFhTEJoGVACqSWJjhqtJ83Vej85hkfeaKCnSy",
  "key3": "PokY8zCaMzjz6GbB4Rbw1KvfYENgt2cC82WcBrzFaKZ3sXpVyUreydMF2ziT4X9e31wWJaMNqeJaoz7pHycxrMt",
  "key4": "5AvV6DkbYFzMR21vRQcurCXpUvcRWdepZLKvG73AhF4fufY4dFR5Guyo8uygMAmcj5FUrNVUPVHdZuVytkvKGook",
  "key5": "bXFKgFGViP3XPTZtt7ZV9jPA63q6kREMqWWuHexYanBsaSoqBm9fD4Sncmv7ZuRLuhRrMREDpQXr1w83oxGDdu7",
  "key6": "2kyLrxaXpPZ3XiDBYtkvj9dXWbos3ffchVgv55SnrNt9WMAmgeMmTqenrdUo3pimS9y7Zy6oQGpTpnWGRdExa2cA",
  "key7": "2ULGMnx16j8QKAH7jdBaUBPhB6RAa1PUf8pgouiif4szm71N9SoBfubB8L4LgepFYyLsiaN7sSWqY4Sne1CswuLG",
  "key8": "5U4mntkLYGS1dYH4eQz25AymnatvAE26aCDGnvfweH8fWC1WcpUF24SbnsDNcsHnE58TQVbJ64fqVsMg2VuPinHJ",
  "key9": "2TJG8jqcWrKWsh3W1hi4waRamBwyMePRq2NLeyqrvapEbfpeKsEnjQ1vDqoHu7Uv89XSGerhM6rGLd4hgVx5GPf",
  "key10": "2RVJuvxpbiAaFfyYwwEBrj43W57iDFHwYwDTqJufuzEgoANDWS8Z1NFa9JchAJMd9MMLosyqPM1E4Pgui1LRadCy",
  "key11": "oC81zRBceWq7aXYRBAUxWKvRy9tbKzThdpJJRuJKvrsCu85zjgLr8DNuM9CEBagCHvP2TmzGGok3FMUTZt5jDUt",
  "key12": "2EwEgv4MWPA18SvS3qA6CcS9BpkuuYCiewQfeYMJnSFP8gt97ykaunKa6sodf5axKxHELwVfBuwWWXNamrxQk1rK",
  "key13": "2kc5EjJBKTqyHqVnDVE724qd22yaPwoZCTzqGvzfz5ZZXCMLAVjKnSkAkRUGxAYkC6j7oqKKNn36MHBFCkvFbFiD",
  "key14": "2GZYwHsKRdyDrzVRszeSXQLBFiCVgHdzWwAAnmJCg8zqfiPGwZyfpGFSR3KnjLfRQvg8srtZnw1WLH5m9ZVgUACs",
  "key15": "5AmbUDCsQnTtBAKg77DdRFANfaKo17Dsm1RAWfvbELWThuSz748p5YAFhZHe74WkpX6WVz3NxbK22a1ZKsvqWm1B",
  "key16": "3dwrMKAEb3qkkfvNQof5eDJ1p1NptvEvq64CJqRQi21EktwYCwj3JTMTWNvcZTJmndCxLZLTejUjbTPWAYC2Vt68",
  "key17": "48a1dNiU66vm9AGgRtwYWnbxqp2LpTUaXhHGp6YVHdKAeFkUygLiPTofy9uyvKWtTzTL1CoUvBVDSg5hPX699isQ",
  "key18": "5Yrdc2RkQnQeydXorR2CW2Ko766LQY9h6KohLV13YELG6djvo6B5LubdPS6Snqd7ZGtS3CnGgSfPJivJJuNvTA6",
  "key19": "22sGUUQN4zXk73wogtuh8YuiUahemBGTpQsvpWEd84n35HNzEi65jdDgHJvnpq7gVr852BxSxL9rHFLbcbSDorzP",
  "key20": "d4nJ9omNBJTmhwQ9PjnenKkVjcxjiSP44krf6cR5b8qSCeWMdd8r4ByKJUF3e7V7MFvmmBeFP3SkAGNpUwRVrP7",
  "key21": "3K9HK2sd4XsjdSYkscWzgAwPBbYphjQrGn47BUzeoXauW9g2GsbsDcPdvDxewvCrNU6Yf1A9DVKzfkoGn6aLsd77",
  "key22": "3wVKzsfurdpfAkBLp9TceMoPMWcPtYSWUTzmRDv42qHgqn38AhxCNzCffan9A4voQRhx9rW4WC86AGaqn4XTzE8Z",
  "key23": "5iu1Upoiu5dUDbWK5JG6ctnrvkPf7Y5jXgTuvrvpuo96nk77DD2UFcrBEPhZjxrCWeCtZeWYP68v8ee6L7L7r8fG",
  "key24": "3MvQ87cZwwT1geqVHRAUt52CYHaHLjawkuhtZEKS1LG9EmxZbyMt5N2w9mamGyQvHC5qJd6fnKiZdQG1iXzbds5W",
  "key25": "2eZjehcGWfa7BythhC9RKQ18EBa9DtJqy4YEJ6z9z1pGqoiQvFFriDcXj9YBK65jLCqKvsf75GXMF5LyurkSgDev",
  "key26": "4Gf8DwoFmZFN7kVWg6xiex3AbLe2C8dzWF3eLwnERdrogjxAKErr9h4Gj2QBNXYikbAGkDP9DjbPjtgepov1jUCo",
  "key27": "3uXQA4g5GZW3aRKYAjGFakdW2Jt4XGTcJWSEBLu2DFTp69omaTFNBHBFrQPkr7NMGPMTUbVW93Zxngf2Fx7jCzKF",
  "key28": "5nLowm8tSn1XVNQeTh2XFRRuHB1Y8PriwY2nC6T7xaGhKQwVhLSQ7BHcPCP5BeZHngn2i7YFZ7CAthPhx8Ms8fAY",
  "key29": "2EhbKijxtRN7DJK8rmssr1s7qAmz53DHfPjeHHTUnySgeevwkgnDStvkhBPFSRduCzyMQZEdzw5D69L2fqoCHQX1",
  "key30": "1Ybo85eVihZUzDQf4EysfGCm3ri8Vpbp23ux3rpH1oJeZNDgXKjYGB1XtSCzgk4xL8FW1LpDkTn1Ysh5gF5YSKi",
  "key31": "4r8vQ3BvdnWHabnaLstfFJR9cAnTop2sWThuxjAD3WmatThK8mfHUGapnrjRsDLjuB8EAML4Bwpx2RWGTfwcVJkC",
  "key32": "5sg648FFCio4c7pYW8A33ccKRJ6br7UzNFpLJS22xBsjBCbLq2USjC49Fh5HBSbyrk9Heiy4DCr8SjNvaYE6johr",
  "key33": "2TWtvgwZ1UPoH1ecAv5Lau46aDUmmFkaAsqQGJ9YZWydyrbzfD9m6Yj9ZMfLPbgk7owbcdvAq9QG5st9FTq1Y9TL",
  "key34": "5RSty5VBVx4LrJmoEUW286GnVBkCtgdQbRNgww2vXLfGDLiPdibAxbPGRh8GMMXQNmGeKEhJcR8s49M8ZnwSMVTd",
  "key35": "5pbnzs5zmBxUDtavZTC4gnkZ4edgXiYqPUSaCM1T1wUaaF7QUaMGAQ25an44ysiUvCMwWTvncHCtHMNKgvfxfq8H",
  "key36": "62krh8Bkswx94oTuLP8sZwU9Cs2TmW9ajiMRFF5wypeZ99NVmbirAxzvYCNNwdqmgyRj6uhNQAqZY3uL8J79u43h",
  "key37": "52RJhHpVZUAsUoxi1n2ccUAbwcpW55LFWNNDa5jrCHC12C9mMk5WFdSkebEAUEG8TnrSacmP4X855iALdryceBQS",
  "key38": "3rw47oKBrwYoetjDiiTXYcrwyuC5jvu7PUxjJRRrbM8xLKPJGc1XWCbJuEx8WUMsAF89osXRCUztvbU8wpEdBnFy",
  "key39": "2MFbYcmY5YfH3fjmmhSsk9yMdgy6pLn4BQ641W5GPtmnt8F4mSSuUsSyoMWGV4eFZpx61bKKu523WrzdYdSftv5f",
  "key40": "2JmTkCGLVDdKcv2sPAm59aCDZ8JBxZmJ1x8ErAiXumQY5nHb7s7f3R1J7KxG1Qw96VxXzUBZLwjhdnUiKoLkxdBc",
  "key41": "3B6Ux4FDWUu74LvxCWGxXNJr6Z9ocfFV8rCeatxmCGRm14QV7bhfVNiUpFf6eKk93excBaFJZ7926F5x6fGnNADr",
  "key42": "4589DDVykDERRoYebukTQaJpAy2eVouYzHXriFTGZWMe1SZ9qvybwHrRZFLh3mDLUXZsSsgZkrPVTWPuk5L8vbJd",
  "key43": "4krJvvFLfPH4jnK5rjtfcwdz4F3zg17YjGXL1ySoNUbUfewVbDgGNRSoJmDtoGF4btmTzs1YCEJekMzCWwjMV5kr",
  "key44": "Tx6T8EW47Vg3NcewsUXZszMM2f9SesrzXrfj41GBqeF4r5XgEdAbkHpeUqt7pPzKVqRqKCeQ4A3WDt7Zp98vuVR",
  "key45": "3cSJtBReDZ5RcrK76RUD8QLvSc8K3Ygyrfd9UZyjFzKJJm544kCmkKp9UTQ5X34AEAqgiUUKrXidCDqXSkgVp1qx",
  "key46": "GstSXsAwrYBG52tJTZtvmz2Xt4y9jes1FngsWiBnitfbMAuPtPmPcYp53QdHQe6YZGo7UZEHrjswRfNhRtonYRF",
  "key47": "4AuCM8tyM4NPkrsquzGtqSYDpyFWUek7bqj56BjGvYQ8LeVHwzoZwdwiAmb9zsgyhVKvN3rgF1kHPGm8TiCZbxy6"
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
