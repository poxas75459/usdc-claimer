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
    "3n7wgjWJzGcHvsKyDPBKeY54Xd7njYKnXXGWRJ5kURBMikpjHDYyCWHRJUeedt8iR7jYXmteBiKvagKLLiFC8oJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdzsfUiP7Qieki1XX8FdbWcYJwKx13ojVeJheYFYSuGkiTvJtpJLT7d7d5gsAAQrVVymExsguyTi3hu2cvJCGZw",
  "key1": "x3a9xTzoepuLvqcwBVN1mQXGLtm8q1EW56FAY4KXa7FgBdWKXV3iSU26ZfmmSmmpwz7rkjkcwv33aWaNwChu6YB",
  "key2": "5HTzQaMuEB3kaWeZX63BfvMBixyNuxAYY6tbWtAraij52V82tVGRd4MzKDAuTkyiFqbmGtHVXzsoA1A3bjJXwfTt",
  "key3": "398Fx2rRxMRkSFL4AdUu7JcrXYnb2JdVYeqT4KZNvKunqm7b553pd9YsaFXBweMT3AAuesH41kiQpFPNnnoKvxrU",
  "key4": "66AGGCkyZzDfoMCpuZL9BpTZfJ8MZnzgbDCESd6ztYQqpjqHidbEKXFEdZavCwyA5vuoN2jz3w3LTvCxfTxB5LLd",
  "key5": "TPQc3qV7BMWhPMHAJ9CBX3Fd6zyhXNMM1jrmRRRoWq1g3F6R8824QCk1QZi7oG6wNC2Mj6XaY7pUCncCpsHh4YT",
  "key6": "2HXPzN3148H1jZ5pYs8LWTx6yCRvsrC8kYT7yDqLHwCjWMF7NKnGqbAhz1ZJv6YjhaEeb1hSq2aWBuUi2szZ3ctY",
  "key7": "58MfexZxSMCpfgWBtUzMmWrbNDbTijGnVx5jHnZzNtZAZndYtrcQCDWqwwsnMiz12Cz6vaEtuyYQ1Fv2TN2jwjaA",
  "key8": "61swGx5x2K1fte35SSAabdYGKyeTVvjUXfbqXXzAMnZ4fnbhzekhTYVgf7kgromRM5R22WCLNztbnCBsrv75AYPH",
  "key9": "54dMReCbAXpCXgXcM4J3ozreFarU8Le8JKPkddzrmhLBaErJExS4pij2kLvLTD4vxVJsE6dhzUJ2Eim2JWiyyx1N",
  "key10": "WUfxGeunu47jgn4mDQ6i94n9XZQbiRo9tPS3jTGTWqUBQAVvCPy3RFFEHhmE4xsj7xhL41RsBLjJh7V3Ui5Xt81",
  "key11": "hZcB7PjmN49VKRDuQHKrNFrsNAFrHrHA9LF9qEk1ZxXvLrPaJUp6aURdb75uNEhgEMT39Rc8uXXbDe7nFfKrpqP",
  "key12": "65ac3xSvE6a1p3XjYx1oMX6UXm9u3MEVEigrmZHUdzXkKuFPBTZpsRXtQHqwgu9aXkgbdu4bk1t3UA2rXpJCAwnu",
  "key13": "3whbQRYPAmBj2AmLn27eoeNHDRBXbJovJuz9erHice9UFtq6ZLGLLwZK5VypaJiW4PzQm1LuUVosCcmVx7C8p8q6",
  "key14": "26CxDC3bR7THbXVKanbwqG9nRf1iQJMnYzVqzq8qpSZDzLHe7FyfpvaC5q2xNiU9163VZj9QUhHrchJgUSbD53yh",
  "key15": "3u7SkXkGLf32PKkdsVEYwsZWH8RwLB591oRDZbsYfyUCQyuh6tdHZw2c8FnHUm5zknU1FzWc359gHVP48udJrKmf",
  "key16": "2LJP8utXeBNEitLqUkCpc2PjnAdzC8AxM2AYJrfXSHp76g3ZTKzMeF4A6RJq1vcSRicX4ux3vSCdbjRYTnZsfFLT",
  "key17": "XHirj3pqjw2pvATCHb3QzLamsJmmUDrEsCZMK9a144BBpvybb3foVh52uPRixNy3zoMqyxsjMivsWNsR9LVimtu",
  "key18": "TZcQ8G9Vczwt4A8GZyJHd3vJBdvoB3AKh7sUQL1xhGYZknEviq3EC19Kzdn8MoG7kHBYBhaEZxhUYxKLW2bEsKe",
  "key19": "5i44wUQHLP5wwTVvoK2np8d4eyPDCJxdeBXmCTkKHFWje5v9jQwguh9v99eN14GistRgeT95p3wdr9D9nia52ioB",
  "key20": "43z31NFYtKgmyRVPLp2WRW9XtuVfRJJSfsPaeqTWYaBDY6AKEMSyUaSGrWBqLEw8GhUC4F94B6d5yrZsmjbmKrbT",
  "key21": "5yyaiht6gd5YkdgSeDHdWSYZA8XJ2SWSDzrgsG8ge7T8BoTXV4WMDV94yMaLEtcsLrUay788rLqdNv4WzNf58NSB",
  "key22": "4d92rhfdsiUi9qHMNhQr8d3z2cizyBwExh2Ay83TDZahBRihkS3N83cbw9R2zY4AJAcqPvT6fbZrRiVQpwv4dRww",
  "key23": "4Svixi7JfxJoL2L1kZrkAJJP7mYPLHH9Bf63VvbELEfX33vFkPkpuJvioQeZNs39SyCUJ7SwUaEdxAUpZWrmfhew",
  "key24": "2sPaDHPf8gPCXacMqpyTKUjyxRX61c3pHHPLN4kBkrYnJT5ATcwoEn75Bw4Qw9EBCYEd2jBBvYp9LZCtJCdhDEMD",
  "key25": "2Jy2pmpgGt1fTD5yp9vCAvMRNRzDzVjwowtH6sPhtK6xnr3YLzJNGV7b3bYo8pCKp3FaV1GF5j238fUS43e5MKh5",
  "key26": "eCgyBqCFXvKKe41byHhbwNmxHrbvkYF1FrRr55Dq9eY2Tqz1cSknmJQwyj25xNHUE6H8KGNtjaQPaAQE3Z7H6X6",
  "key27": "2kNYWeFvF6rRGcMXYUU281cWGFmZccvZH48b1T1H3jggvrJhLkbMtYPvezeuqkg23T5QJx9grLoKiGWHbKU4MuNp",
  "key28": "3aF2AMg5AQ4haQ1CPKVqPh2J4qeqguPEZ7zVyw1BV5Hwge8pFf8L4AUGAXMfCELkP8Zqmw4etVLTZhf64TuD1sPX",
  "key29": "6RkLBP4jXVmvGvegqWU7Xeg1FfKCXFAq4ag7Kdf7DyM5pFYLJmSSAKaDATbMrzW39o3sEzN9An6dt81VNUAC4HE",
  "key30": "34QVb1rJVyb7VGgkgHCCrXmiMT3oBUu1kP8g8bqLE5JpnSyAvwWLCLgZkfPhRf6c3WmURWYjouGwms8dXuiEsKCM",
  "key31": "2qpJedUssk9oF8KjYnfQ8hW31zyQyR6tZ5oe5vyreidtWqh2LyVYDNXGeEsxYo73Qi84fKRvFVXagirewwd4eg5F",
  "key32": "3YzFeWqKB9KVbhw2mtmjES8F8M9MEBZcUrgy5CFWDfDoL9aAWeQTMUYo4Ad5anKWoAu4hntmUTTqLD7bMyAVnLeb",
  "key33": "4FV7N5tQ5cmDE9cY5LheMkdT2qBcWJmYe8t2F5abAGhZBocUbND5dMKiv6kM742TvE1eotLtwVWedJo6gLWeJCJ5",
  "key34": "2BUu1mSgogqubedCqXVvW1irP6gsK62SxSw4Lh8AbggrfZXFcwkGNvpr2YQ1T5pqa8jZFy1cpPadVnURJjyJAa7F",
  "key35": "3WHET5r5aEa65aG6Cr4NqGwnZXbGJUBkVeF9YMmWfSNDvUMXhW3dqor9v1iHajSGMZBWmPBENHuTuhvhZoznhYRn"
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
