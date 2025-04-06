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
    "3EumPdS5cdYPSD6wNshuHwnf1hgURqhy4hUaG5hit56ZBDvwPbi4Ha7BZZQ17HJmoUXUy3havvqPwLjDbeBwgr34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Naay6L6WvrDR8Ammn4No46CYZH9zFEUyhyfnEiWr9hHs2czMJG8XhoQq369nzMeQgmZqaDjfjmZ39MWW1x5Xxgj",
  "key1": "2bL5Brp58zYkpsGoNjgV8mPbz9WT1amgabJJPirjzzhy34By1938VujDfHQeS9JPZn1Vu7jWuR6DTMoFopKSMH8s",
  "key2": "49pUbZ85bpDvRDnY5v5dZBUUs7PmMZfWHGH1L9nx7d6EBnAAytcc76fP5Gu9RKpvDPwENwZcPnK2NYqAbMhiEsrb",
  "key3": "2369QCELjQkmroWbdMDwT5BcGK6aCE8TD8ayfEuTVhXoWcz4ziuZ4eh6bzKNuibC3vXw5ai1XMaCwFdjgxjFUi1N",
  "key4": "A1SKkGfuardGszceZRC9in5bGimoiGTbjeiLEJhSURRMz9yAKcT2Nfou6AWE5iPDkhxoeLJ4k9yQppGfZNxWQNN",
  "key5": "32f97kz2AoT8ciic85Cd8Y6Yh7VaacditMGnbcTN3ocHtUbPH61YFk8XEVKkREu3rQbcC3tvB5BGT1ZAYXcT5JQk",
  "key6": "3WUBtwV1bQJ1CyUPUEuAx8DKgWyj2XHs9juL9utJtkuocYDdDyKnBb8SSjVCXasyU1U59cYgzrmjQkbjAataZzPW",
  "key7": "388wepXpRh6K7PNzz7KrYC2L1x9UrwRSTfoDk3ZTetoqUuqYLB3Pv9C67zPsTMHeVkGKQcWcat9786CmN4RzDwgV",
  "key8": "5ugqzKpyxUHEKpujXoc1UDvXU17RTxSxjy5mXMq5F2rZPtEST3GMc2kKK2b45Q84AfE6wN8fSJ8pT61CPSdXymgZ",
  "key9": "TPoBLzUjLtHEkGyti5mD3nZRbVyWN3twawGTA9E6MnrBS2euie7nDokuzKTPYq5J4HCMQXJbgnhNqYvWKKhJirv",
  "key10": "57DG8iYguB1PfjYcTjYBShQGrVx83BW3Bqjt38kTyWPz7DoR4pmVJoAu5QAnoPZqLGEbPSQtDWuTqSh5n3CEt4C3",
  "key11": "32xA3rZ9tntbEFfnfQVwb6mQaeqAjnRFURAqFqA3DXq5bMEuRqauEMzWTEUzH8sFh34wXqBbmsheq6F83UXQrQD6",
  "key12": "43S4eqa3fdXuXivpTsqFFgSrx3khAAYBzXSuF3BTVYvE8FWx5rKR95QCuoittwMyJf2ZbjnLAvgBwo4TPaAgceiD",
  "key13": "4Y74WQJyM4TJELNFmeSKxeFQWU1zJF9uYuQwyJNaL6hWxa7ASqrfUdqLq1es4YwQeUF7UQhnWoHkkPgRCyfjLdnH",
  "key14": "rXQLgZQhVw7d9QfN71fyrvGkwWj4W8WeUggM9JhymhKCMQBcH8P9vnYSZRpoj8b1cgdV1sUzrUK6KDY8JiFFSyU",
  "key15": "3aTE7ASpfUam8aSfGiNsEwmxhFTxQSU1yr5NUtZ3f387VhruJGH8kxXYVoY5knMRCT41DxEsD7hMkdeNj8JCG55A",
  "key16": "25cfPoxT1f42reL78GyJ7FpYWsR3HaT9C9mXqxzDKoSYu2Bfgqpwd1zrA3kza16j28vkbnDSespLpHGgVu2iMhh3",
  "key17": "2cjmm1PS756tWECtuEs4VuyGF7cMYGWgU7CzKynyMaxvzbTzL5p7SB5nfHtdR8n29WRdaHtTEsRdFRbdQDXhEN45",
  "key18": "4THtUT3R1m2toTHxzfJqy1WD68MGjH4z4hNWMUnBZMvKQ2T63mJFnFFB4CuJBfraNuqTNZ36ekRsY16kGCXPUbX1",
  "key19": "3pGnknnVyAuzSpJAG28nNYwpi1y81nBNCrMkGcRsb36ejWsNBhuZv92GzmxgCzbV4v4aaEVwGUTfJvoZ54M4Jsmc",
  "key20": "4Ybt5MToUdxTGE87j95LayubXnwjAR5QrvYoKDv15Q2aTwN9ACvPjMWb1mh36a44u1RD6eTCN2avGmo7J91acMsj",
  "key21": "5FDDAegPeH8oCTGKWRvs5xD2698MmMW35dw9NnefEvYKa73JhLy64vGaKboaU2AJVsn6r1rkFARevSisqePMKD7b",
  "key22": "37NSmrsLGcKfFZLbMCrantj6MKhma7S8hfeYSVndfkFxJJARYnWBvH3fhaWN2r3vZzTwxmL21cWec41eUvYqhcTY",
  "key23": "2WfoH4pYHLqiq1QX8g2QndhzYQwBURHqUBYfL38SePjZ8QA4wLLkPAmAsfW1j2yNVuVZZeAkiLMyhJSkq6LWdmhZ",
  "key24": "tvFNtzZLQ9z4jSA4dLtdMRxEUMzrw1gdQW2nQ7mkVmQSjteoPfj3cJxoTkwuoNvNUAGkhGYJsuyVcvKp6N3zUHc",
  "key25": "5Y9mnXxdd8Z1Cw18R2LAcj7gd7G3LGCSp1Cu2gKz1s9tpxsnXPsQ1PFsbrxkv3vBnHjXmnSGukwmo1RsaXQvu84o",
  "key26": "3NQ387QX3brEmFeTuMqfNNXgemLhRgCc2JArK79gEue4M4oHDc7su4G2ridN3faAKipzWWMMg73W4TfRn9z5VKB8",
  "key27": "V4YNgUtxGfHy54DGw8H5SgnEvQMeCMKd9o4mQXX6L1jFq8s5DkVZqHNzFmu1iUUtbpPhPSymoovJX8AGToHAspp",
  "key28": "DknADLnBG8Fz1d39bNVgrR3csurj594pnhto9N6Yhqpb52bt253y651yxCZWpyN1bH1wcqRFsuvTdqE33TVqUm1",
  "key29": "4BMGHFhkY2eNoeu4xUrnUZ5X8HEQa6DpXpAL6nmYk73EPvrKBPpe3gsgo8eXcd2ZByhCMvpAM1zvP6qeZDvoVD2w",
  "key30": "4csaf5sV9Z2utNMvPMjMHYtybxXzUzBSWQF8kZikgLxz1kHVkTmBV3jUrj8Dfz7ZFatL34X9G1tSV43HL9ZgHKkT",
  "key31": "8GWQJ3tGMGhw3EGpawvxtXm63t2tfL1FUZz1VdHqJSMy4gSUz6cJAMnLQKKo7kkLF9LWxcQQ6ivP9C6eKociExX",
  "key32": "32xZYeYMQEhsQCujFqUR1DLoVKoJbuQnRkDreBQ5xcojFKoSkSVVLizFWWakiKLjGsxB1ibn3J1PvuJwpSm3D2pr",
  "key33": "5aqkTbMHyp695kqUmmQsTZRkkYSn4DYdpvfSiAorA4bF9H4VNCyZyddBsHN2y4nE5N5dPGYNS2qq9GrbZ1o6LPHq",
  "key34": "4GAEHUv5XMVmjsif4z9RuyvhYCGdsHnUKF2BMjwdAMhHq1NLdRj7iyrLPfUde1EChKQRL2PgWzJ8QD4M7nLWbSsx",
  "key35": "3qVgTfqDnfRmHmF6aifPtxbRZGDxrJV9927Mmb3A1EDbpX1YuwDRJjFFiZKMJMpbH5MNcYS6H6GNgHSatAwC5unU",
  "key36": "62myUbzjfEEoAdWLhXckobWBSGcYJX75cvmWo91mfFZHpEC6pZGG7184Qtdz2VAysqnsCUZ1vkhcFkA9S3GjPKos",
  "key37": "5QNTaoA1oUKXRF71V2CRbG5nPLDunY9t91kHo28PcLsrPDSrYm3XpDPJxCmubewEtb5WdqFnPWo3bmVPSXKweDMP",
  "key38": "4unKsQkjbxTDeRgnqE7ZzcnJZ2bt4wHJSJLJhNkHFyZNGE4cMssb4PRo9z7YxcbUa5jdhEJdPxxiVPGyG93AJbYr"
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
