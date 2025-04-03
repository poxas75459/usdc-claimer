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
    "23G6NaQLo9EhJucdao2Q5hgvp8oMSaEqhStwWmTUDqsQzdeav7uJeVt7sebqbnPoCMwpoGCFEia5Le8p3AYkoV5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VW1GzZtCre1ztNekQjaREvZD3XS7prXpVM9q2aLSXGTpJA5N9RkA68zrYBKThoa1VFzJuVEhvi2tQDGM8hTEBSG",
  "key1": "3RGrN9m62He5dNRMNrs6rVmjsrf9mkjV5BD3sPEupnQze1eMU9Yvkwy164tgdv7ifXGyEcKk3yN9X5LfPKWxqrgH",
  "key2": "2DNSX36cZcccPa4a8SoFScwmdxoofdYpnumgEX9Yoe6uZUdsYG4oi6H3RAirxfYpxbGMCsPDZwr7gf7UPL1KV6xJ",
  "key3": "61M9DqVXciWkF97nwGQ4ezhWamXwMzJGVrYfUhpCKmE2k9b8VEUHgLy854R62RjppjQ8fKaXELotyEPWeRj662f3",
  "key4": "5n7P8cLkdo21uaRS1ad5G7CRfxh2gFz75oTgv6DwSCk6jMoGBJBMZinZBaSgZyMu59UznpF8SyvVzJzN6X9w4K17",
  "key5": "2SWpqVhVvvfpSCy56deJaUQpp9mLYD7pKnerBTFT4edijMd45xN9FPeDPuPSLJK7YD4JCBuAwPEjbXSpvtrb2dFr",
  "key6": "5H2o74yqgU4EntK4bqfxJv8DyQQUHsFgMxP6rdzmRjtzjrSuXAqdKsLzdso7vXhthDFWygEJ2Dmi1nc6YTb8fPuP",
  "key7": "ARv7zwQuJKxfs2ay3jGhM7wUmBMvtxd4UDV2v6tZxyVHGGwdxoyTXDdXE81k2ieDsCafwC8ZZ4YG8VZQStvoitL",
  "key8": "3wJUMed14JHFenhho9kiFg6UyUXisyo1FLBp4Z1oqy7rbyFEsQGF8So8HWrCPY3MCxmvididpwXH3Fq7CD1vjtrU",
  "key9": "5834dkD2QmmzVXMD1uYHwz4usygDcm8M7n2Xwk2RJ4fyBvtES3BuvtKt8Vi7ieG1MadHoZb5oyxXbaeEfzNd7UUg",
  "key10": "4X2F8frzJjcUXcyPramKhokYmH9LdU5oFLzdxS1tdbEu48wZFvzkkMbUcp9eiqG9spUwjFTYi3SJRFQV3TwpkBry",
  "key11": "4ywRDPAzw3tY4aBrpzDE7KSBMT298jAjaActXt4hXxoqGvB9YCLUx6B4jV8TajLTMpJ5gnkP2bnDcpdxBBHo4W81",
  "key12": "2Wqv59hFCcnyzFqWLiexEjTPSn1CGBRiB7cR9AfdqKVj9Su23yaAouYLLhdiwtnsxCfZYTGPCew2zT636QE9w27N",
  "key13": "5svBHBqaBrm6jWJVEKv9xikvykH1jhPjYji2kdZneG28fXNrAsh6F8AyLEqBLNXdG9XwRybx1U349D7B1hGqJDET",
  "key14": "3RiDDgPL54HwaKik1FVUGnqPivLb95k8N3dNauMcLs9QN6tRsnK96nzg7u3nbu31Lnq94s4PyaQxGxDNxFR6fy8u",
  "key15": "aKvHM7dJtSZTscbSG8yoMWTDUTvPZEiBqheTj3tpe8uxJVnKvVKGPdnYKWJkTvCMGEuNcz1SWSTWbzQJBe2747n",
  "key16": "D82fU39chJAgdidaztMv65vf193FKHRiw6AK24HW8TFeF2Ddk26c8LaABvKfGGFf4fS7Hnpn76mbC9SvkKTeFhD",
  "key17": "mAmFvFVQtiuZRFHELmXqPrXa5zTi2kL1YEEGk6ejPq8YY9CrgCsGw6cMeVVgUNkTFrb7YG7DUGBnCZmhcSYW97G",
  "key18": "31vQwDh3vNQ7WwMsYNH2Y25SNXxGCpV7Fa22mGm9mtvLQ4HSSJYCxeeWLTgzSNT6tu5adt5wgUAB1Lrz5KiiZhMC",
  "key19": "WcSeAjQQJrvrGQTfWFg2UwGAkvxor7R4qNg4BXBd6ZgjW7rKV9HRJEgfFH1EXWJ2zbCpsyNS5DWmKtKzF3CH2Ld",
  "key20": "2Fe7Nq5NCxebkr69DKzZv1UmR2N9aW1mQGt68Q6mssD1p1iAJsi9efvVfa6WzZbUM6wn6yjN7DE4BQse6UHz98nU",
  "key21": "nckTKwpFZSTuKFJfY3XtCkEH191fpZsV1apKQd5ovGvL3fNvnLPaGcvDt4LV2yo9SGFQ9FwohtqHLPFFMoTaRpD",
  "key22": "3YodcbbULzeCKgoTtGPRTZZQDhwARUykNW2ZXQTyYzFN9JonLimHQe1JdWeTeGRBh2HDzn1QnL4YzJuYhsSngJVL",
  "key23": "57VHkn7qHgR7JGmHDWkeCBZR18JsbYUp6SMVkY36P81KhneNXuXiA8YKYYLctNFWUQqThpxrWuzp4YRFXPtGeiQP",
  "key24": "4pbr5b3DXCAbZh3rFK9CFsSBUhembAaVYe1XMRNEX2VeXfSKdF1Hg9CYhdnjo3pVERiG53ogB6V74Sqvtppw1dXY",
  "key25": "3TVUeYmCXxft8pBsHSS1iUmgTUBzonvfFfZRzSXKL1hf2sSHcoUxudVzVhQ3or5Djs8PzRS57nZjwoqdy87mAjs3",
  "key26": "ANS54uPQJ9yTRP4zD1gR85S47gnCnWfe8gEFXarG8TDzeXKHNK1nk21D7QZpLQJCXNiCqPYYvyJibTWm4GibFMP",
  "key27": "2DfKwuRPnEe2H1KCguFSQBKke1AHjDJYMkxbGzR3dcopfe1ibxkGaiy16ZwegGZiaaxGb6XrWjntKDGRYwM8N99v",
  "key28": "YNTrkWmvRYeUBUXUC7ceiFr1ZSBS47tm7ejhpiHRtZESAVdnsVyGxtVg4oBB2Pnqf8ApxCF9B83W4h7QMgwTtNk",
  "key29": "3bR4BL6dMAKwpnpqy6m8ZUMJabHcGCN4CH2MeiWKY15m1QRFPPPkNCNStNJ5fGqC2yQXdcyBHumhnnp59rASNQsN",
  "key30": "5TKQdLGNM7HoAasC4D6UufKq1xUcYnkqEVKEAih4C4wtPeHZRYvNnrvrdcjpJJJPfndTvPpLuytzCJSZQddk2a9A",
  "key31": "3WWbsQ8qBUK7hJvshPAD7jnEJM28XpTScxR46iLLPamjCRU4E2dNaTkFyoCAwYVEbXpuSusvdYj51jieyCeviy1u",
  "key32": "2LKygRPECK1jo65bcicdS6C6oiArKbqXyjGXpH8MJXFq5D7tZjxsTvJQHHqVczSzZALyxGiDVNfjRQYYUPVNecCf",
  "key33": "3J18WL1VUUrBKKUEMVmonTLRyxkZvKZo3YaCRRFVC7G5CnEArPLXc6zxwydnsWfyvs2D8HLp7tGftgSRAUrfBkuw",
  "key34": "5MEDezm5sKNVmsveyKqfsQyj6FvtwJR3TisJA9dZfbgekfu2JRm8nHr1JppJCPkuu6QnGxj3gpBPmxvsancgkx8P",
  "key35": "61abSRZPczAiFitmwxn1sj5AyusDkhgyPbzpkKJrDwEiaUYSpA76vDWpaj937iNfchfF9TCH5kYt6wVY7579ZyQy",
  "key36": "4dQkDP6oeLP6UfLSwxQNRBwsey1PDkd7kEWwqte6HZPBmKdQTHNbBH1HHKKwPBNwM5kAjYQjpAPFTEbZ2nFVyN5z",
  "key37": "397GXGXiFYBno4Y7DhYHavKn6sMyycFotmADhzEGX2uyx5pW9c4ygCDfWXbrP2ijj3ctXX2v6RNKRkfLhtaKpCAK",
  "key38": "2iG78unhkiuhUJueFkjW8yeaGZepjGiXbm6KRMc6DgJYpB9f8fSTTVozok8mrx6i2kWw2yhDM4FzRiG7Mvt7cNuJ"
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
