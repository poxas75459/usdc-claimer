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
    "2mboKjtCaEQBSDs6RPzEvZFZ6yE6U4zeFb2uK2rmMaQmgsAyAGsHH5QERnteXctZtUtq9sA47JxUVKrwCipgTWfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DyC5pnYHx5UMoGC2KjyvbKYp2TDaYCCNwcyHBDjKLArkWox2MbBEnxWtpUEe5rXsUnwsnqeiXWtTheWAYxcmKM",
  "key1": "46nb1Y7hmEZc8SNGdNcjvRUHvH36oJDfYuky93RY55MYms5XGvNtWP4BkAmcMVc4T3XoYj5PTFwLGmFCxHeFwMtU",
  "key2": "R3uYTYRQqQVLyhm8gsgtULUFMz6FZB41q22rry3X5msnG4SojHSBW14BrLQ7kZSqtxtgwAJ72EmZeHtvFPxjoE4",
  "key3": "4nkRD8FTzNVUyHn5UZ4vp1rJfjPPtrARB7nvRCuAbApSH6ja87DUw2dZtbHr4Es64VxUx4UneC2Pahtj17QW8D6Z",
  "key4": "5fBWbkdz58KsbpqQF2zkQUzapZkZEAB8hrpvcyPTc3tVnXnA13fNwpZLTVxPCHVB9AtEuH3dCiAXKSjvrEeopnzT",
  "key5": "4j8gcVVM2RY74GD3eiS3PsBBCZTEQCiJHJ3Csr8bH9TjWtF7oHatd4XELKqexZsg1Pov2RgbGnia8Q1HdjxqkcLq",
  "key6": "3mQtp2f3k27eqqN6vqcUXAgQefezP2bUVfEd1knYy4NRXuMxAFvWDuHi63E9ipGNkwWxochx77ZfWGz56vfbVyC2",
  "key7": "3xYpBgtSfoHeWRaq8Kx6HhmCP4BkGLyZRm1FhE2BnrskPjRxRWPwJEagbTnUggbh9QiuCx7d8oaBGVdMr7M1w49g",
  "key8": "5gyuLp9RtvKPDbMEqHxeWWTr97ndz55sjLE3f3nmruGM2MCicn651aUFu8TPHrZXGMnnRBHneMvaqHRfmGxbqFdA",
  "key9": "uDUVwoqzbCaTEj9GDDrXtCvaDE4xbx4v3QQ561X5ZABpQii6AfeC8vnruMuqoT8mUrR9mFEEH4cMfmJ9x7SkNPw",
  "key10": "2GSbZM6MqSb3XxyLasECuWdebx3zoR8YcrZSHYbe59iF3MuSrNKtguTXVSNmGeeWtjuQT25LN2fJ7cogUoNokBku",
  "key11": "3TgN2fqsmRx3rdrhjptXuATBWpL6odSkZJjq9fHxDtemmrKZnzsVPkmriAnmssv2JXDsxcD2XvaZajgGobhVwc7S",
  "key12": "5S9KmYxn3SWqyUJPeuQxCidd4pQVdNtpXn6N3DV1QCVMaJBNUrcKTkRThEbJK1cXNo1DZ3ajQhLuWJsH8FCh65yz",
  "key13": "snWCMz7ucNwnyCKz8P5wx4kZnB9DFfFJMYwje2CSbt5fwQkVx5oTt2jYyKzGhrHW41BdZJZLon9VtbFi8Jwp4hm",
  "key14": "3Fey9YdwY1aJyf58WYTSXPrR7GLcEJ2iAZBNKTTAeo6dkzMU2iYBHW5WLqLb2RNn9D2c5LHmBYNmsiRuL9eVLNWN",
  "key15": "33NGYYsXBNvfh7HzAcAGHKA3QFdXegsCst1bE4PmzF4sGjkn8nKWtqkAXBLUH6cTGC5Ha9goEADa2mvMjbPjHDSb",
  "key16": "3TsbgAN1gfvVnSs6cxUwKhQPNs34HkUasp5XbfxX8Vnz7JXNTfW5ZZhjAuECb4zQgWx6WJDZN3ERU28tq4ooLRCD",
  "key17": "4cbrJKQ48s4B5SwzdQYUVan5xzUP9hWnrbFmdHFvzoUKeHkLS1ReaYQchuNUKfs9ysdDNretLgf28gKh4dF3Um4B",
  "key18": "cUN8qvwXz4mrYUq9J9fUSpj3JhwBYFoTA1q9DXmhDJ4U8WxEhf2yMp6GkusKbMHh1f7p8wCP4mswkNRCbFaf2nc",
  "key19": "2wzCy1Y8kenK1Uw8da24gB8ULVqt59JqMzXpohC9Vt2wc6t2PrdeEHGbsm7Fj4aasnaHtskPvPLHfzm59xqgu3X4",
  "key20": "3Gu6itNWafsLdAzFHuQS7FTpKoFtohxjmobuefDMdjii7vJPyp6Y9dmYjYSixWum8bKqsHbgtnA64tEiXYoNg6Nh",
  "key21": "4St1w8ou8uSBYuJ3FH8atLxQ4vLK9QMMMvC7P2RAtuyg3Db8fszBJp63YZeDCGf2uSsUVsPPUm6ydtD1RJJDuHea",
  "key22": "bbk1jxwnRate3cZkHEZJJeDj5c75zJQAiAcYQmNLj1oYFgeSkD7NFzCLXQonyDb9yPUTnV9THF5YcFhwUARLvK5",
  "key23": "AWBcMqrAtHZbzPScMBPtf6cF4KU1fkFsTR1pLA2JZYC5ojDbnVv3oP4wTX3ZKsSyrPTEb9JPs1c5fsgTP27m72L",
  "key24": "R7tfybGTWkKbdL277WpX3Kj8xrG6GD6d4HkRVTQ6DsRtQwv4gXLzetnhgKZYviP2bPDfc7RFFhF6mopqbY5ArKT",
  "key25": "5HbTKTFEod4CUcFvVqbqw4iy5Fe4hoV29phPZyGKpN2pvLBV1HNMP2XhJRurh69XTi6knxidWVspCwteQVjVENE9",
  "key26": "2h1LffUfHCtAxu8HauKNgR7HCAMv9pUYV3tDLyyJUtq4WPDTrAPGL2GhTtLnzVWJeMCiWGaEMNHBsrxUBYBk8fZD",
  "key27": "2gCZsudBE21HJQSsgQmSMnysGJkhyJ8pPoTcYancT2tMqs376Ay5SzcvouTzsSLJycZhpfLsKeiUcCr31mKMVnaj",
  "key28": "4Xc5ohkoF5aFBy4bwKuUUqSPofmyQ5jgJKG7u5Qxg96Sc3RgJacBjNoQy3FXpeGiMd5uwh65FTKrRWxj8xvwWN2Z",
  "key29": "4rNCQGB9yM9EsM24QZ7PxHHihCkEW8gSL43G9vD4foDcnUNcqUEk2ZRTxWDrENNGgd5GrozuJ2ULYagUU7eSPm4v",
  "key30": "4veWgVJYUUjh8XJHHVW2wdo4Yg5nA3y7xADxB7UbSVn3vFFiu4abkTUe7y5kKKWhFM9g7UiuRyqpBoHDPcukj3RY",
  "key31": "hB9E5d4RLtiff3JYTHCCqMtiX72ZU5oFGo4o1cMLTtYEyz7TMUjmm8BZxgbQSMjLDXrzWFyYYFDQScdBqKZTdNm",
  "key32": "5965ouAwrzpu3KaBFsKcy5eDbB7cFJdrNcipfeQPNJg2exBHWP9ienEHjG2W7czVCkAa67EuXWLVhYxjEbSSAEpg",
  "key33": "3dYd7vLfpSRG9orH1AwwJ3kYyJUhiu1zyAihu4jNR787X5snZ94aGAUNu12kuDsfFvT8kKdsX8PZr4rmwZ4PZp4j",
  "key34": "eZuQnfTzWtxnQCr4XVSW7SKYNP7UgC1BZNWzwMgdaKiCj9vE7HChtWkryJU6584M1isnpaQxCAKnYHPYw3eJppg",
  "key35": "2ETua3w4zL4h6iwNPeVZrFQsxYaXQwA1hMNW9NmPGYbzQeciWCWgFct8NzcC2GwS1BC2qcjjGzoBJXCTgS5XdWQU",
  "key36": "5ATK4zgxrepVS9yY1b9Tmofspi5UZJN9L16xm2fKx8e5ztw8eJBYfERQ2nNAsCqexrcDw8jLyM7aysoXysHzxKet",
  "key37": "3sjjFmNREHyXvochrbc1rRCnjenR52MFkyPvyQSc8uH4tG9xjLAYk1YmBZQJhHShuxc71VKLLyqRgJdRLL9RqY1v",
  "key38": "4rqGULYbK8yrWUqUvRmyX2h91Ke8bkP5mcosU6viAoNYi3hB1fgB67ScX4hFYvCBCoRDSFruBdAjKJaYW6Hc62Kj",
  "key39": "4WgHQhX5bENQvPeEE8bFMx9TTnwEXUiTfP9iQNExEFv6Xsw4bSzSq6qvxabFQaEJW2GhqoSWCdWPXtdU7P821TYw",
  "key40": "2esuRwh5S5R3tYfYgPDVoUnxY2ncXmiML1VtSGA1PgFkFCmmV8HezT4JyaGQtntURY2pgr7nAfZa9edX6pT34UAE",
  "key41": "2wkT6AMo4RgsUav9eWDChrRjgJEFCdaqKjbF3NLzKymFFobzYrUNkWPkLNKeXMvUVzwt1hCAcbzaAH9F97pwdYTQ",
  "key42": "5ebE5dDHBq4k9zuEESBqMMJ1EFXL2YEq9DC6FcVnR8FDy82WM9Unwsj2gWeqRp6Tj1giF24D4LTEyRZRbUW5CmyU",
  "key43": "3588emmnuotKzzYwkeMgGUPCzECXerHBuLbc3JtzgQHWkA7q31HF1oTDYDE6Qy9Y8KMDDh8H9NsvXDy48kX9PXkD",
  "key44": "3ooSCCPAhDDeJLBqUpzuENJXEEsAhpGsP1zvWTKJ3ZvtTFNxs1zXPy7Wns11qFAsaXo487P3HYkJsVZ75xr2JeBK",
  "key45": "uaFArdM8vNty2Ur4G2UAaujxa7riSQoDsRoQWFdUbQznM3um4jxRjrvCDHba2sLiydGZb1LozQpdVmujddEKpDM",
  "key46": "3n6Xjcpc2vtnkNKHDVhbm2hHRDiUrgk9FfFmyCPvH1tBDuDnjsZ8X392fHXgUvVMp5kEYCJQHQGbAvmPhZKPYC5T",
  "key47": "2bt8ZJbAaR63NVxqgsGXCEfQbxCQhoAzDrhjH1HmSiUSp8x77quZdA3pGW8FzGsENPAPUcgQrERW5j4tLqrQxDqN"
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
