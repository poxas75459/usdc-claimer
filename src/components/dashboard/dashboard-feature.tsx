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
    "5sJmvp8pqAnU9YHF8jKJVYUktEr6tBdb2eU8ofvJSgEbfcEPams1fQyJBCLuVuqGJBSA3eVhRqLZMjJnJxABPdHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYT7sL6BBw9cXgxVij4DUTfXM4hGDAsxxpcbMQyQ33756wSBVot3j5MByjJP4G1LgKVJpgaG8pNUBK4UTVvPDYp",
  "key1": "5jsw9aszeP4vqPdQ4A9H4DPybfKJFxWU1wLjNs48aQ1vtbasW7C3s7c73bT8dhMzkcAXc2sbsMu7YjMG1f2XmPSZ",
  "key2": "48bNRrwqySb53z9QJhZE96keBvFFuj2pkqKCeJT39Y8W3L9vbh4krX1irWzi5n3eu4e7MJtASsNLZdY21MZYhq98",
  "key3": "5FRS8TGwZyTG8ku8ztvAAgLswvsrYR96PndXoAh5vaQ1bw6AQQfNiQe4cYDcn3WFNSMDpKCYfixRwGT2Wgj58aE6",
  "key4": "122iptMMdMBaXXGz7jp4zJDmpisRg88d2QfQxb6PjDPmisATaBnAN2xstCoHG6ufehRugypX8z23eE5XvdLHuJm6",
  "key5": "3HefzRsBVtFCqm6Bfs15hL5x7an3Z9ByVTvbJKRrqjBQyZa7dt2BWrjCs2AVoTUEEiecEW32Hj78weBzSva1T3MN",
  "key6": "56h9Z93xrTcsiPYaNspBtn9EkFWFBPnHwQsfQTHCrRpyuRyr9epnFDQeFhHymRZfF9Syc5yYpJwameSm8aZXs6J4",
  "key7": "3rdQ7hEWSAwboaVv3ZXuXyTatocx8QmTeysoDzvMCU9J9NVyyHdPFhZ99i9UTt4uZkUzvnk8rkxGayWF6BbBKvp3",
  "key8": "3K2dfYG8rGj3yaaXnUwtDs7ozV2LjMeyTmRhKd3gKjZCqw4uCyAWMhMXWUcjGMKqVK6yhDr8EUitfhsxCZMUGL27",
  "key9": "348uioPcUsyyKkFKunVxdnAkhZdUkCM7d5ZQRcCjop3GRp3NPafts4Ducozc59PpvbaVefY6tzakM5YwKkBTiLjd",
  "key10": "2o1kTgmiLEEWeZeRZM9K63mBu2sZ1i82xWjwdUZBuezgpQMTKCrC94NCaPDZuNXRErxP1SZeKki6NjPbh6tNVCLy",
  "key11": "NgiA1GNCoRMMvFQ8ANSme39pWt7b5RVYdvRUiwuwcEohH6EYcUKsGvv4u4AZSSR3E2V5TNyoYNgSUCqWsZeizh1",
  "key12": "5YRnwoK3yUi7yjBuFi2rwCbkLfR5ReawXxhVYQyFvLWDeH23kqR1YwsFFnA9N1suPTqq4mwnFLwzd1nST2maVUhe",
  "key13": "kwPBwQxauBxY2oK2S8BfY9trS5uf3XbrGw5AqUbNnJBNT2zBL4JHSjb7wG7Q311YV48dKa8fdF7uPtDYjD1n9qC",
  "key14": "5Wsv8wKfJXsK4WC6jb6vSVAxm5Kf1yw1ksqtJgzpPc1mVsbt1HHHefG7cTcSmhVJcJYJZPpLZ9bzjgi6fYg8XSzX",
  "key15": "xvCBUAG1rJsRv6gmAgzfRmEETvnWtBxerGzK3bzwE3kTCA5EppgZFYX9nVnpEPQCe2NrYSvu61nFcHvBZ5NFnbs",
  "key16": "4FRBs2jDc1VDBVbk2PEohwvkiVKgqsWXZ3zzVi4j5PcBkEUaas7vcJpJTRdtdbfwguD3U92S1Ui9NVoPYW7qp1Dd",
  "key17": "2JXL7QYJQkHJSU9hCCwtS2LJCP2xM2UBuhTfUYUUaSPnXz2UQXsdHHzMUvstRK8vohDeMoDpUZPTWNZcKA5J3C6H",
  "key18": "3651Hngxrm5feRAr6aGVYtjJQa8Tk814BSv83FBb2z3hDcvBMVKiGAwWUmMDSwiTukWtekFMynwjHF2nD3XMFshg",
  "key19": "2oef3J69VDSgVwSxvJRRrxsSSi32cmceoF568Sx4nnd3Y5p1B2P3iqLCiz86Rhfk29mhr9uLBhg2govmiyMcwS6M",
  "key20": "5DQ3rqiBnHh9CG6Pae8C5Aib43uQSd1iRoU89yUDC8j54hc2ppaQCrrrbUXir5V9PEibB2Tf5F3UhU9CYsyyxTrg",
  "key21": "5ncqAqRQHbTnSUbCNuEAh5J22En55cSZCDQTdNKWUmNs3X417uHXJX4vGXe7YhSRs16BrTgvBLJG5YmUv8oBQGRn",
  "key22": "3KoktwRLoL2zzEF4t2omLU4r73r4isbZEAcKr6kF7EsF1eXehhWhaAkTpTLy1cwjZWBkRzd4Tx61E5H2ELjQe59E",
  "key23": "umdS2gecgkiQ5c89F7L7V785jNNzrndY5cJNkvdSYh4aeJJy72UDuKNgDsfVi2QXm6L38py8PTMCXBGiDknebaa",
  "key24": "5LwfaxxktDuQzuRmDpvk3HLf6CjPgkAiryrnxtSzA1ht7HXq1sWTqAYsannwoyAHVCwHySnuSaGYpLmr2qzjkZmD",
  "key25": "orGQKN2NA6KqcBcd3wo9TePDBwRh5D1YoTiTn1YA4oJeP9qBYHpwexcFEBjb7HWBessWZwoBmJASLgttUj5KhJL",
  "key26": "3qvjgSq1znijTqCEj2qZKuKtzJ7oNnBkPvqWYL5qXxVxHn7Xw8x5eoMxozbKRFQpDVvvZFAEpK6WqbzrgWXfQ8XC",
  "key27": "budkuG42v2WxZFCcAgCQTxVUFHoQAagR9erv3qqsv5hWLLwK9xYHaPUW5vHoJYhPGzgHwD8paDdFZHuRBBsmvy1",
  "key28": "51ygwaU5aPTjKCwvsZFQ79dMcXHnNLBob8zYxaBKe93mN6bwKHYWTugSAg5gZaMVCStM722rNQhTFkki5x2BL9Tk",
  "key29": "4QgDs5NwkSR6SqvYw3sxnFyxkjtMw6Exkh1uvRM6VWiFTduMVkh7v2Mgw2u2F1NRXYTMD1guoJPqo8ZRp1JYCNwH",
  "key30": "4yNy9JhT5GZSHz8vZagU28goh5QyJmjgxjwE8PyhkwLvcN4XZijuyx31rqzdkFCnAD8sdWTWGxBFetLoNVoasc1f",
  "key31": "2BHjtYgQYFEXi89JcY3NEg1WWmfEFVEARHkGYayJAFmstiwJrT5AnNfMV1vrTmiGVfp3bAWfcWAT6GMLQGAp8Qmm",
  "key32": "3dqeGkP7YMJ9AWdte7mnY6PQ5MjLABimfE6NGDXwGajbh39HzQKtqfUkYX6tkbQfbMbEzro4EijF4XGM2xUkTS55",
  "key33": "5CHzVyz4528QNSv9PXcCZfDuDvhpqSkqVPQPTkjz46BLhjBAwf2teWcYomesCVvmc5EkcGCZU6YddWNyhuhifz4m"
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
