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
    "2qUX7TZAj1krCbPoyn4KR6nemCAcMrecRatvrzWJKzxSjfKzFMy8znB5Ymw8Lf5Kn8hC8z7bpCjCHN1P6us6rVJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KE5F1iNi8NX5Hy8WK7RDtzVzB6dsK4yp1QoPpTiZftzPncUwsRqigsEg3UuZtxkLPpJd3rQAAveNyAPzwFXnYAS",
  "key1": "5ALQKZL1s2jAN4VbfciuYPaXywXkGFb9za3uCXr4i3yhA1Sngw1BR6Asi6C1mALj44i977sUnW7xC6u7HbfinQrn",
  "key2": "HiUDViQRn2eYebNBSRaVtrAZxecRLPXL2aEnTYQQPF9D9cgy2986FUPZg5G9DcDixoMTUpS36H2M9zjXqLPe3FT",
  "key3": "3T8MHJFqH4bzav5sTa2vV3anXz4i8nP1kdPBniL4LkSxrCnTnTVAkcCQipfo5NP6ZsaGJDAxnftW5FmGDCHq1sKk",
  "key4": "Do2vN7MxxtdcQhGiCnD79hs6mGRrjUWBn3fAJ57iJxPdEB44AbofR8tmdFKbNA8XTFiouunQpgGGJ3swmphKzYL",
  "key5": "2KteeaaEVvHzZBxwUJDQ9jyTVb7jWwotk2WEAQX25b5yUnDBuhUXCWwfXjawqrPv4h4HJY7cMiAUNySMQXzJF6eY",
  "key6": "4HygeqAgcZTGeT32noci9Nzge7X5Ftcog9hE1x4VbNy2MqDaex9vuYrB4mVDcSsgQe3VDtLyeQgK82eRcLMJ8DDs",
  "key7": "2hqE26W59rZEK3UQ82PyqknCk8wnVcyhza7J9eHvtXWRnM8GUD1umy76qd3Z1HKnRqxawoxoqVBkKY3v6bYWvFgP",
  "key8": "4snHrapagLyc2TBE1jiQKemQvRtGPcj8VMAAnx4xaPSnakkgtb2J2zDVoX1SonB68zKqFfjFpucnfqZU5pkyvc9c",
  "key9": "3vUPGD4QAWFAyMUdh24w6sUFUNgdszK4GpmpCxcsGKhY87GTUYWRCTkUxX231pWqcR1wnpmYZ3tJhL6a91VaA9LL",
  "key10": "uNv3EwaQzk1RvR46uj2rFdrhvC7tdX51a68vLdSVMRndcfdM52x7Zf36x7nKE3mHDn3ZzYPWfz5tmE8oqwtTxFC",
  "key11": "3vUakrg56sjYuKJxNr6L2xabqwqH2gQAsNasEfJUDzuPsmHBhJjeNY8aarJTBCS8m2q2EwLfypfJ2XeiqwXxPEQ7",
  "key12": "3m1gFdvLaLMmA8eEW5ZT3Q14yt8KEviDXoNAHTh7kDUPERXWd4DayRbXCqFsjU4iZza7SdiP9qdVBdboA91tRYHu",
  "key13": "2itzS3HJvsZHHN63sJSiQKqbSYxdbMoavHbGNMQNng9oCGSSbufkD7LZYBTQPZCzdvXhk4uqibiCZaDs9e1t7Zo2",
  "key14": "3qYsEvqiuAgcNRgz9ioGeeE8i6MDmmk9b8yAhChge5edo7S3Me1F7aofTZt6ukz3vX5RREL1xQiDWbDrgHTxiNBn",
  "key15": "5nSbpoaJRcEmntQWGde4ZcbviGkSxYLSyx17CeknQjtj9Qewa8bgnPoFJCYDGezEPyaWMYAyBAcwgc2k9G7RnRkU",
  "key16": "5Rr7PWWu7BaRT4EmoEB5iWjx9DGmfn9VKqeeGjnci8Ym8CeYYtwf1VWPBNRY6ATBFy5GQv6uraRBsdqYjXdfc8EZ",
  "key17": "wJaEMF3XZ98xhNVmHEBWsoQjGA7PUfF6i1kZSSWCf5eiJMwH9N9CSL8bRT7nGc6dz9XQ3wDNABix98Hag3xXJZZ",
  "key18": "qBJeiondK29RDE4hfnX6hghUa58rrgaPuKCK3EKRivXQe6vKPTZCiZ6Vh6RA8oeApyP6NhoboRnQSMTFy6G5Yum",
  "key19": "9X7GNUEBUBbWTT4xBTsZnZ1YDpqs6WLrEvDsj2FPWCH8WgFGYbtod1aS7qdxs2m8XYkbeDwC21paWdH7hTvzPaR",
  "key20": "55nKGzgKU5CHgRpnBahJJjZyDJ6JnogoEJk2Ck59FVGM4KsJR2MC1f6fvZeKx16VDC7YGGNEMA2dtyfN91AYQZJU",
  "key21": "2Dvkrbpd6GnxYJoSN3N5TBsCK8rnLDCV9gzPPsSgSbAKJw3bYB8stKKxsvWazjn6cEKvHbVUtXoVSvBXwABSjVXy",
  "key22": "5dUUK1X4BL5cTXJHCf3iVvRuTLZwjri8G9PBuUFku8tVCQBfQmgWTo17JkMPuDALwFcN1AZJmJSpZBGwJk3YPAjV",
  "key23": "2tyMrp8FF6BVUPDiW4h9P9ePf8PCk68HQHw9UUjVqNNFxP8Xqbfk5v38Gty6jm4taBsDCyFkNhPdBjQwGGtB2Tco",
  "key24": "4mmUq6T2HrVUZvihsSs7SmaHva8k2pKrGehMvKsi41oSQq46oqXpgA28Fvu9eiRhGYtUg6k1kkikVxG4HQRwAyLv",
  "key25": "4rkfHG17KMhoDDFLfmAKJiHDkGC4CKA7CXUtby4ZU3s9eGobYD1NacXEL8LLi1RU8U77gRqBmJqx5TvZJdd4EBkv",
  "key26": "3eArepQAoTwspPzPQ3uLYJe7ZquyAMJ9q3uRSWPBukepfnmyzy2nQF6c1qhDCEceHmnDNaj4bgirF57MCpidg4xF",
  "key27": "2nK6hkBnHzc6jQzzkAuZGBp4KYxR5uonvGLBJb71yuq1Mrpz4Vwh2QGmQrUhT6sDBsL8uPshbpAi4xHC2iPoX7vm",
  "key28": "2ptw51oyLV3tY4C762wtmFgLisdJVcsbWHwsEk7HQthu7cfz9frkHtYoyhYegT8uMEFWF2YGHtWc4mkYK5MhNf33",
  "key29": "3LfREcLKXk74tFkRRHXA2gepKGesetKBBdwDXs5N7vvy4trNgPbVL2mcPmwAWngFLKHtoprddMMytRCGjUkcKrH4"
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
