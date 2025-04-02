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
    "aEu6JhKtEBjEff4h6Y3s8DZcAfbVTkvP7gDPdTKw8f5KwNt6ZKLngavzfZzFbTUBjaEjiP1vpBtQKL7Vop1TYoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgNRzaocC5Wc8rcE5sLCj11VtoQUqragR8a1Ta9nTmdooPDphd9EiFLHLEjDEoGn1Y791VjAdbV2ZmZQy7oJ8QZ",
  "key1": "64DX1VSMkA4wkP7ZbBsqQBFQPKB7Jj2XaQGAMzXDGXegQtU6hnpjPsNjAUUXSP3rFUTLKYwP9vSG5FKmJu9VzD5A",
  "key2": "2Bqwj49LWgjaUyD7Pfzcfkd5EGXPe84Y6YTyaNgducbfuxgQHw32DQo6BAghv6t1qTur1XFgmdbGJjaxghE2Cdgb",
  "key3": "34L663HThxmAVc65BuRSoD25Um87LPjzmJDeL5jRPaid6G5kKCJpwnqBfCYe6W8VnzKPwUK7TuyvL8r5KXtFv6QB",
  "key4": "53KhDWyib8Y1T3dmXGcAMJW9pmz9MC51fCwLNWxW2d9tikXxBofj7Q5f1ZXNzAvHTw5biFp6d4wEvU8EF761rbQe",
  "key5": "3WfffGBTzZU1ikSdk1n6Pj9m8KSWiCUFWQGEP3F17N4LD4gN8xUnEHmCRa22E56gRNFGmoXBswkn7upzG6KwcBvS",
  "key6": "2yfD54UAxgjW37g7iXVEugyLE5Dy9yNnSy19fsEvgN7nwijsRrfNDSUjurc6vyQbaPBUqaUfQKeb8oo7cKbGeAkB",
  "key7": "5jm1MNMk6zD9ihixSYQZVZdWHC1m3GeRifMEyQqc1oLzM1S5txmXkWwAmToQjG5i2oB9w3f7paaYkVQ1XPc11Zsy",
  "key8": "5j5aigu9yRVVwACjwRzpCbZRa4tRtYGLwA8KcT4hjTd3vd3B2vBHXG325HPGEPexpmvDSKgxqJ9qKjnPFj5ZvSRe",
  "key9": "jXaV9APtzqdcE1cf4QTBNR5T7qJAaXLsbKhAUyvKDsmAK9GLFhuuJw7oB9WEmvszdmePZrU6JP3FpSTn2Ly68iv",
  "key10": "26nHam3P4C1PXWExf1FyD95j5LWgrdwtmMeJJZrbvgdh2udnTzJCdp5AYnoNWy1Y9KEKdPhxAekQQ7SwzG6kn3cY",
  "key11": "2ypXZH8uvMB3GoShvxEd3TMRHBqr4HsvkE2Lcfo7RNosnxnacZAwAyvRai2eMr6VU9NFxjZbtUvSCrnz5YQu3nL",
  "key12": "Cdf1BKcyF3WeoAybjgnZvnBPDGGuLs6GSYXBRkH6vFvoiWnjRvAPvnY8gFFbGBi3kFz9zaUu1cxAyzy4qWfbaHp",
  "key13": "3btKYQjxPi4pS8WJPp5YeuJNVfcsb5eAuVsjV8xFnA43SkfJgCDo5gsefR3ezgaxMDh35B4Wvixf2xYzTWkroTVn",
  "key14": "5K2EXhiPaihLzJyGyF28Jf4AmZ9oJA2THz3YRKwUfYXZmiPsTGgiFnMhUw16ZshGRpV56KU2hxLv5ofGUR7JNd46",
  "key15": "4onWRS6onDcHFfpLFyqUsHTRuJNGywJ2R8hsWQ9CgqnBBKdgixCX5a1uZauwjNtkNAdLpBwRKSmkxw7m7ZD4Qz8C",
  "key16": "59xXFFRKrQQ4791bPGGJM5hQi9aNAx16G6RRoGxgj89A9boBT2RRAwGxfbTPiWrXJRSwfj9R849dSJJXxvfgtC92",
  "key17": "4aTtYsAHM69TWuYM1ovuoGSMo2S2rZay4FgQviHEGLvGVetX1T8emaJfutTtAawFmW1LnnFQDTjgXBa2sfCyMV9H",
  "key18": "5Sp9gdUS1pPWyLoiWBVRzpPABUh4rRYBwPNswDoopawzuQRZsZJwnVGRqQtxd8E9U5YTEUFah6TVExR3k2Nq5HXd",
  "key19": "3i3ywekUoAm5p5QR7KnT2iwe56j8kAugcypxesZ53GxHPw7KSCHzSrDVM9MR9xGYtKjDX8YipNnMNc4FZKuggBqj",
  "key20": "2TsNiehPsiPTPfkZSvpotfdNVu3ftiw4RCpuehbjkwUAf23Z1XzNBkqkMmmHsEy5srxpqJzpoT1ebNJJGfLv5QdT",
  "key21": "5QQJS5DbEpYsqXCvzdGBWKDQse15htdzvq6FXNkvoDKYYbWMFhKA9AHg5PG1hV6b83qGF784zfjnedhk2Qh19fv7",
  "key22": "3C7HC5JVkT3biMyLELdPNHRQfoVMHTwDGyix3PZcCee975bUKCTJcbcZGWzuwMepCAeHsUqoSzuSwXWFpMAt8Z7X",
  "key23": "37foSWwjDhokq8oGzuyrQ3Zbycx2FSFd75H3xxqXDrD3zUBUmz5NphVmR9MNy2FttTNYd4trDGdnF4kcH4qn4MJN",
  "key24": "5ZiPwGsedr8obERoH4cbg4dpnVzfG8kCLQWdQf1H5MbA7dhj1ay9vrvnRwNsnvFqSN1mBECHY2nu5yTMwq9VcogK"
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
