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
    "LAfnY4QTYdyW7wyetm4a9eUNriBS7X9kfwcbqXWfzXkqNEpx4Q9424UFZ2fG5i7uMtYa6pP61BJBeFixmgr2S4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53HUubAoJBvSb6roXjnSKs3gh4UrdBL4xrCs8RBZKS3TtyBxi5sFhmAoRggQwfzPBAJwkcCqAGZqKDwB4DGkuV38",
  "key1": "53WEVUCuqt5FasjmMh1WrW5AnMYrqGEMtTVcUumQzLpjJMK196PmTtZex4JcJmx2Hv8QoihFoQ2YgKe613sC699D",
  "key2": "4DGS8EXWqKbeh2qbwcKc19cZ6SGk9G1jnNrsoeq3QEHM3P3my3jDCxq6XwhvnzVnGks7kkAhG5JeewxZom7gjH1B",
  "key3": "5URtyGMY4E7TVL6Rx7g7Bbjo8qpcjATWkRWMcTg8Pe69cARKQQ5m65B2k6vQrngyqaFmWzwwdRj3FTvMXeEDLEKU",
  "key4": "mGTxePVn9nJT9kH7vJessv9dwCZL13M3MFgnyA9j3GfKrftpD32GUvv5nYZvYhkv8V5ymp7hdRJHuNQMH9vFrYQ",
  "key5": "5BfY4VJvGz5EZN5VAenjnqoBQ7BNXiiBf5DhmuvnQ1yVWDbMkh3TwJkJm66yGSyY5uZHejjb8pshXtUcdR9pwV4k",
  "key6": "5PEf1Lx2pdwmWDvjcxyDixR5VN2hqPLtt7s6KWNx7szAoJnRpxJVpNB4GpKQN7UvnvQRK5bgP9Y2p8hhMLijEq4d",
  "key7": "5LTjtoQeJnAumYy7Qvp6RPXUSsWviyAHYnB1HzzyJe5SCSkeX63PAcSgPqvTViDieAk3KXAYi8UVec2Uj9QzKr5Y",
  "key8": "5Hh9TRBp1QxXSVk8YFyZVLNpJRRGhGg6BXC5ZiJeavm7QwxxSF9Kj4vSfZto8PXZVPw3fnwKLyDTj5vxjET5s8FP",
  "key9": "5ffTMc54ZSTaD4vFKNyo8g2fuYA3oHc18zK8gg786oukKbaTzfy4HPupMZ8bfmq8VpSEQEoSmVyx7zrdMmL9DDZV",
  "key10": "66DhFNfzFK2UyV27drfJkAdNUX6U7T9pt2cwhuYbdmF1hnzCYACAWojQKDoL9tPjMyXrwfoRv5jAiLp2iWfp6tGP",
  "key11": "2K621ji33quUFjZ2C69pMEQJtZAo9FksbaSYvx6ZxXvk8xbCr2Ln48Kxkz6SWDrU9ev9mpJJYymD4uFtqUConfzU",
  "key12": "Qn4gcGSPG2u8iN2XQNUXJg9wcVN1XSUimA7HsGSqQeCoSXEwny7En4LB6E4KcWdyhDmjvqwgb6PaXuPxpiYiZN5",
  "key13": "jDm3Q6wtNeNPBBKwH3hazM6DYeJy1uWrYHGamwV23xkHqGfg5w9cZXHdZp46Rpt6jtyzxcpUefvdUruUbtJo36k",
  "key14": "WA2tQ2zNef2PExrXNMkjjtHLv6gSBVNch5b4sREs1YRrGZWBPykV4HbUhvtjCVFkjpr2VsWQeZ2TDLZpxUaw6Dk",
  "key15": "4rHL56Ag5mtzgspU8fyy81FsuycvoWcN1g6NynPqX5eRPmaWBvM2kWxQ2D8jRHLjBRF73eMKQiCg2yMjXuofDnAV",
  "key16": "T7HuSUEtCoJroL2m5LmNQeP2PzueuhdxNdoFNP16KMdDVtbxP6vEfU1ofixa6onDHC8XouH7HL4HV56KRijUx5z",
  "key17": "2Teu9oLeTzXc5pjuu1eZJFsLmdfJiHDirNfVecGTpUyoZ67es54BH4i39UvhvnJuXxwAfWX773AiiXMmvHR9RCQ2",
  "key18": "uHVm8WDhvpGUbrZ4CieDMtFV4BY61Ev9v8TpQr6GMepfQ1tdnsWnHPW7DC98mciiJXeDcVpKzCgeszPG5RB4tkh",
  "key19": "66ykqMy9XQ1P7r2wxQRVBxdBByjKM2LTNP1rm8CKz7FYqD3KDvrPur5ddAXBncHYexBgpGsogwJwZCPG2e9BHAei",
  "key20": "4x4tDGSdessEVMAL8wdiCpGFqLovmdfg2973d45m5F8k2uJVYCdCwrGsVaFdTtX4BTYYdYgb88VrN3HCuPBEm1Kq",
  "key21": "4QJxGEB9NnL3qnG5NPNYUMAxCSTvbLS7CPyKjv9nXVrs7Zh8HoK4LK9DwqwAoatyMLouuKkQ6phaF4p492UaAwJE",
  "key22": "5YFtfrDSSQbHwctJCGtdrpnuQu81U2t89L9ZzvGSrXfoxnsLYR7Fb9f62kDseDpqRGaFzymdXG1t5NRiARPdsTYK",
  "key23": "XBsjYSVYgDCJvyyoRLCTDbm3QySFyrbHMxafXA1jmyBYUJ3mrCqVaEUbbuhRHvLYvAjxdLAn4whkZ6W83PqBChJ",
  "key24": "5gs8jN9GUQ8B6yLWLtA59PkUbJmp5d36GbUZmjTv6YH2vqLHSfhZJihmuZRdsUqbxvzVWLN2iGWi5SVWftsW6RZ7",
  "key25": "4C5pvffo2mQuBTLXXbMzid18MnBJjDrfCohQm5NWYb7929k3N3bvzUfrvcyFkTtzjTXr9Rd7ZHtiVjciC4DSd1Rx",
  "key26": "5MXDQCxgTMA3efifta8DaqfKMfJ7ZNKisrd1VJ6Ch2pbvjxdMYhJnYvFd9Hq32DPNdy9Wmmsut6arin88tkEVKLi"
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
