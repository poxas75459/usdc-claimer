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
    "37dqh9xoRpXAhvpeonpn1FF8afrWHFJtXs9qxFkvZ8iFy21kUjGYsSh174q3brDMyvc54JPNRVLDN1RyUKRU9C7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "248SUnJ5XXfGSQ6myJrf8tTqYvfDJ4cSNaUUWNGjyFTjCgWot6tkEzVw9VC1JzVqaZTsKKbj4AWmdkgbbDRzRYm1",
  "key1": "5Hn5vX434FbnJzyih5aj5JRBYUPVhKfmUGXoBJtx45heeoiSRQRaYMELGRkTRWKNTxVvbQRZ4CbhpLikyoxwThVa",
  "key2": "3fb73M8Ls66bh9JopC19nDYK6bQ3bBVxXYBhgMgerCJQ8YrTzecGXrx6BoWnfU7vvDpfivxHEY7ze5NmhbESKNhU",
  "key3": "4nMKwtDXcJRrWCyJf1bJBNn6dfkhiHhNWAkeFrdjN8wQLBbv8j8SDirY3FPzTK3xUqpp79QEkbmyXffc6RGoJy8N",
  "key4": "4DVW32fBeaXdWwxRxKpCYTFWz1AXc8z5znZVbtb4rKR4LLKeuR7bG4SKBNupkWQYMZP4PriFXwKYYUUtV5xqGTp4",
  "key5": "5WxjsN9kxfjVuv2ad8DyHtGkPeWZLicXk7nEBoRjKyRRv4dZ3bJ3KcepBuni4LTGp39CjagK186VfT6oqgmS6T2z",
  "key6": "4usEn3Ng9Vw9z464HQXonfntZrNB1uuWYrTUinvVd7bAAK9hxeKzqWS5w7So95hewRVKCAH7pRc2JWguHr5zghbE",
  "key7": "LYej5bBRTs4trEiybK5LGdSzC1CZHYo6x2Wy3JZWmtcjWg6JEDqYTu5bu2bJGBdQ6MkhYELTgA3JUsYWC88RBwg",
  "key8": "2dohM8AuB25pFcB9UtYNvcjgff88Fz3icDjDMsB8t71ZH13vX7v1yFe328Kr1jgXuNTj8HYau3K5bsx1G51iwNBW",
  "key9": "5sFQeHgjgZfVTSR2cn4HJpmVDLakCojwXo4KBbiAqSUMgfXEN8jd5J29aQokiVzhVJJRR4k1w6g2QV7vHJucYiaS",
  "key10": "5dK3P92EYyGrhqN6dwgFb7hwjDkerX1DDSgHLDR2FYtiCe97FWyU3Wj1BTPzMwPzNyacYU9mfbZ8BaGtPswzULGs",
  "key11": "31VSfWm3ftaFgswnqdBzyWYXZKxnLRPWBfJtG6g2MvBPek9RGLJYdUirwwGrZnn1ZgnoPZZM3M2qMHFwg1m4DDFu",
  "key12": "4o3FdAZoaWfeSRpYnf843zHyQMEbCV8KykkBagcD6eNomSjrMTfe72XXey825CJ7DW2pVXZozGMwqMhGUuqBmQ6D",
  "key13": "3DfkGAoVPrGGVT5BZ5xxBZPDF8shAeLCVB1r1sfM65kvji19EvQD52KK9ZP6TjT3vrrerdHVRQY7v4pxsVT2cTPh",
  "key14": "3UTvYRWktmzB1CcP6x13Hbqvfimdb7CqRqK1hzS93bbXinZ3ZF18dKygMTmHy3pJtnmucTdWgtgCF4jfk81NfLaN",
  "key15": "229ifJfxaCxyaNx7m37kSirxnrrVfudbGytjszhwTHNBzEvfwjm1zTeNpBaTF8rYaRSiy27uZ6koY9L1gnqopD3q",
  "key16": "285r2uBZy6ofU5fp5yzZkU5fCGNw6EQdKoEqkvfmXKFgVFrgfsscaxHC4zs7kkXcbCtcFJHQC9V5W8f8H3a4EMQF",
  "key17": "3qHEVTHkqGuZBjx1NBy6ezLXnR5CXNpjtEYRHkJM58QQFhuRfXWDrQSbHacLD2j7tv3uSjzg9pPrCAcuVSYagUQg",
  "key18": "5rvLmPJMHLAoZ2QrbSFyEu4WWKEMoV3CnPVtN3Y9EupudiK3Bnm4ZfmjnuzDBfzgeKjLPWqfbVB3yvmvmg3RcnNp",
  "key19": "63bAL4kyr39VpC5Eg8H5r7BsrnWTqzGk2P7WQn4bYQn6tvG64RG7mp54FGdWpyymKgFA8s5zPi3KgqTxRMfnP2zQ",
  "key20": "2Kwev8QjsrynFT9Pejt2oahUg9jL8a15nMUnbBkDfF8a9h2gBEn9La4dCVkoe5x41Hz5XPLBS9EArbS4VitoGREu",
  "key21": "2MhyWveb1MhgEHKxTqqQ4LZm9VyCk7HkSenDQMs33KyfAyMbXp3XcpRCEVrNJARwvA3ZeMoFfDt6BmkRaVQB6gDN",
  "key22": "3NW9AntUfPVRs5aF6zRqbYrhcDrQFaAwCkE1qQQ46QyycNKy4X5E5Vjpvg633gzf6SXzAxUkv3qbqDyv183JG9dc",
  "key23": "RyEAYCTztmwiSJD6SzRwgwTkKvxez4JMGXT8KLkH86v8eHT5yUsTPCz15ScXqbySq1tgZDc9PzcYfxJBYj3bgaF",
  "key24": "2qG3iYyUv2vk51L6kF62a3EooBr5H5c74D32HNexmPL9XnaAZUnbBuhXLHPB57w5GurCbwR1L7BZpcZgpEr43dCA"
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
