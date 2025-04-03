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
    "2gPfwM52bgjYL1sSuv5y3uxBju8ykB5uJCiePnd97qgQ5HErjjsWqAr4SRB5KJWteaoqZzZRW3KBqLPrHxMwEB9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQJUuCtTyvLGAaxEkQBiCfMyiUqzKvvZYZgXQLcmhouD9eqgXJF8iax4E23jJLKwSFzXNmXFhrpFAfrU4p471VJ",
  "key1": "5r7bPzqkbDcfzfAqcSpWqDnF9hMWMGaZ1PChrNzHW2Rw6ptWSNKGrniMh4RgNcSUcb4arbe9LDUNRNYoCW3jDGvd",
  "key2": "4pyo8CXkcRNG6i8xgQczDWnGzmHq2BzrGk25E6LQJnraYq4soTWo78FkBQeDyXShogXeVPnkaTC6sayLhMT3zyD6",
  "key3": "2ms6ib2bM3t2FuTYUd9biU2LpodN4k5HsfyFmXzM3a5YTHUMuenUVHx65ZvcW6Tx2N9Neub9ww6Y7Ktp1KdnZixy",
  "key4": "61JiFyTqi88zqUyzoA4gHbo8mJ1d2YnJfVkcTzS3a3joGKPNPAGUcxPXtzT3jUwCANWL3grcm9XbcKwxffDD8uPo",
  "key5": "XRZh5RQbytJ9CkRvp1ycXcbvutL8pfTwaEaBY5g3RyWu2UJy3KQapTgjCVnxy7QoVvBxCYXd62YHuCrbAVBZGbz",
  "key6": "2ZfVKxHtaQXq61erocoRmPAn62A1PNksBsrC3NUw7taekv1vDTJuQekYMJzXtgcUzTCiFr3PZJi2PcYaAXxWKRr2",
  "key7": "2TzRCcnd3TYE5jdgv4ADyepuKhXmQMsQguo3myVzU4wVC4LczXzVgaah7Jx8Wu24PcEDzyRj1m3zGPZqYgK7UfEp",
  "key8": "3U9D99XCWcVh9DDTPLFquapeaYbMhWDCqpvwH8ESEqAjYq9tGZNiQDRQWvrk5DfQY3oEFfKC7oQyec5UCBu2rs3E",
  "key9": "nRsKS28fXNsvYrpL7amNY4QetDkngrJe8FCv4qssiqCXUhxyh5E3UK1JJDLvofmqG4gFWsSvPs5zfHE82VquwvR",
  "key10": "4qtunr59TvLPi1Qrduxf3vDsd9PuYM6M4L7rHL8mmdbsHoHWaFKLsARadadmSEd6RqRoLnGaRnc8Yz8WzzCTTZH3",
  "key11": "61ko5wNHhzuuRkhDqoGWu3oSoCFPpEF24eCiMeyGkvLNwVBprXtynFdQRxEpEVyX5zqnD21kFEYKAFvj3qSz1GLF",
  "key12": "5cNkD3R1jLGmQhwHiTw9xPfWX7TxPGGEf2fzxq6joFhxexnNPMiQb8ku5RVcb3TzScspRmgdT9XDbt6TeUAS3Xee",
  "key13": "zLghShNQJyNSDV3HaALhh3LKefpMeXcBgBCVedJzgcdRZsRqtqebHA6yduiL2JQLGcPwAjtxS9b91EnxCVTrj5j",
  "key14": "5orRxR1BAdK9krCT1XtTW1x8XzBpzpsFCCw1PiE4wpKvyqXAy5gL2bKdNDJLsrs5rrpYUa5NdXiwLLxijBbtyqwX",
  "key15": "4DuMqdLk7Ah4cTDHGS4BgvU4wffgj9UaZnLh9Wt2c6DfbccG66vdLhom9Fu1hPCJLCq1ejDBnH4Ycd9JtnmNi8zt",
  "key16": "2e5sq4nLvBHRdGQT12Wy7MdhmgAnHeQVSFeMeGnEjAGdZGe8cADoveSZETszmo8pXCfFwJrAMuvNDssyiV583qnG",
  "key17": "3YeMZohdqTxZCrLT5EoXkk1RuhiD3qizYYomATRktkyGveaQXGmCdredZ4SphEYoDHTScZhfKwq4sxfjxJKYCMHC",
  "key18": "Bm2LUyZYJ4Qt7AVBEpC1KrjdHbRYGycuPWuLYL1PKiHpuqFozQU8RYKzLHCGPPUZ2EfEcaebsm5qCjZKzn85T2T",
  "key19": "2nQDa1r7VRvkbKfJTpRJhEHtgMe15zC24eCg3uGushmNJhf2vcYjwiUXgFQQNHsiqUWGDbpP2ZBjqGs4jtB7NexT",
  "key20": "2Pch9qD5FpG4UsEFDoH951N2Sz7TXNzSJ8UxwWDFmxFCPsoHXnP6VM9wQv5K3Ny7KhBrTih4dcoKPjYYfR5UrNHV",
  "key21": "2i499jDYs3YqsrUd3bTkrkmM6fBr3ZUwSqudoLzeVjr8x8r94e5rFvYwZsjwPCa3UUEAVEf3YDcQvwzok8An2bj",
  "key22": "4ggb3frVopFep2xoy9GBuC3aFMFABX3NtYsf2aUqoX1czcHhjqDiLy4DK3ky6JmzYFzWVZyvn9GSaX13u1FuuL4R",
  "key23": "3GB8ag31sMpWQBL79qM6JmAZwveWDaJs2FRd4u1TdgWEaMnrHK3rrRqhZ4Bfm26RoZPecBGed1a2BXTMteCRiHJW",
  "key24": "2WECtNNKnEhWZHbBm3SaMx19AGyR6ffkAheET3xAwVU1oPndXsspVbAY7vkinPc16mXoL2phoNaQkeT6rGcn7vJc",
  "key25": "2ZDrrB7J66dToD7agNvB4FXTmDxLT546PSqMnSs454CVEi9hLVA9FzCdpSeYBqR2BSSTYbnyaAFChFh1cnJ2FsdP",
  "key26": "orYanwSG3LJ1gcS1wbiTPrPJsrkA6dXCcC7sAqy4GdYEPdQ4SpZVVJA54v8a8YKCARumTVogLgKDyzgVr8Hmwom",
  "key27": "21JJjDNXG2UdfPovEuxUzwSjBu81oH26Ra8gz2jBnJ5aUrnruhWA1b5a2ebLJZDX6MNrUT1VzjnauxXeezCmxnHK",
  "key28": "4yWMv9VZQWHq9TiWN3774kpWf5Hb4474CRaP7Mq6cijRBxtftKZT6ZPEafmDmQn9Dpxe3rkXrAkZmJNpoCZVRoxn",
  "key29": "4HQPU59wJzykygrUvEQwLJpKqVQgUHC3F1zq9r24AVwBTGa2nv62GMpEnK5rPpU9j8XkipTSMK4zcgTLttdRnq2d",
  "key30": "27SEhqmatHR7KZpDQ3R8B5LtMUWqKYhZRo3eF7QLMsEBRzaChCTYKMRhHuivVxAiBLTGVs58Mf11xLF4dA3iDdxi",
  "key31": "BSPTvuSZG9oMz9R1Y9acLV1GZTtDSjTQQTtza6H2pUGVVWaKYyd1xk26Ueh1Ur5kEEaMVNntZxPLQCGiJGEGTNi",
  "key32": "2zBhr5hqwgdqwrHGt567tmxpvKaC5vzftkd5w7Y8sN3eshEkcpYXqcyqUtQChecfgcz1MGCLfM1rF561ci9WBWHW",
  "key33": "XpDng3r2Lb6Bnc1L3bNaEsXKLTcn1M5aEZ8qhAUMk6fUJMHiRYpbaHfeBaB1QQ8YTqpr4D8zGfzNTyfxgZ9HES2",
  "key34": "2o4DfL6y4ira5pwsjDC691F11Jqk9NAAQmWJEHcMKXBA9V3xLXca7Q2YEuetiXew9dKd65NLEcZk4QtqnvWcqt5i",
  "key35": "2SG9aPzFUtGzq8yXbmorqWgTVSWfdwjr9rtmwcsb2iRKmQhDktvFdpiTbe3fs82TZTbGeu7iU17kwAowK6q14LiV",
  "key36": "4rmn82B5bCRg14eaUP4eJPt4Ar3K1TN8zUShrdLLYrX1VZd4jPDdVqkz96jZLk8NPhNB94a3LGCqk1WXRJWsFbpq",
  "key37": "4vb356R7SgmWgRZu6vHF2uPQATRGLGwRyDidroi8Zxp3J9ejQ9NLPqByknj2SGtmLAkSwDkomprkbhczQLcgXXK2"
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
