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
    "mL8GgcXQxKPtTkaErMzPDb81r2Ha5VuRVGdo4fYH4ZdT8Eu1xhUuERQggqCsVcUwtoy6LqRPoitsNTRvUoEJLVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4QTFQ3zsRkD2QopaWK3Xf6ihQCyXyN3YKRFmDZEMiwMuWsEr4UoBzBxQuGgNhCTkkKnS1CaxHfEAHXuNBfvNLa",
  "key1": "5njjB9MsGimKVtEogmPkZZBacsM4ty6sWzk3CQ5oHK3WsCpU34YP5YoYjRKu7pszj4RYTLx1Cq9WTXvKtTzVWDDP",
  "key2": "4xYaqB8R1gyDxVcJKT7xA3bNfWDiiHzf4ixeFNQDQHjwBeh8ttA67uCVjyc5rntfhsMnar59pTPt2fZHnrEqfRPP",
  "key3": "3ngE64qQcURhvg5Lcyi7jeourRYzoQUZNETzfixsT2FmTkvVpMehc9osQTjBmYmcu9aJ279HmG9Th7SDErDpasKe",
  "key4": "64fpURJzfJYupwzgWLNfkLHTy2T5A9W9pKWRJf9xH7qDMNdqnY8p937Ep5QFmkT4ieqaQnX8yVAAa2qJr9EA6uHB",
  "key5": "eZe9qJZFBUAyyfFS5EJGAzhZqC9t4nwwmihwNPtPPe16g3Zs9cZ58CrZgq2o3quJgeCHHPXaieBg6dHUXax2eu7",
  "key6": "4sUAiQ4GBZhufrbUHMmfsUdyJ89bqA565xo1abn1RVJMAcuQxbML7geg1ko72C2gw2RFh8saAykvPxUBFQ2MdZXf",
  "key7": "2yeGfLUCFtBcauUMuAwWWQHa44QBm9HjrHE3GzKrs3b6VQX3CRiv3hDbPvsbFRF5F8q7vcmTfaJxATvJsKBHFZ99",
  "key8": "2P7YmrPA1nPeb73qrifx9dED9yPcgGT5Z3FzzwFvEuaprTnhZDqrwxw9MtamMX6oSymLuLCh4fgde3FriuC8XFGo",
  "key9": "3uBb9zWqFJ8HmwmhsrvC5YBKRhvJMfNs5aNNcdLLcjKPQhhFMoHQRbt7zG8YfaoTmgcGWX9zFvTCwmNFHWz91yMN",
  "key10": "2VeTtLkgjRmE3JCX7eMucyVAJNgbsg9ioR3nyZ1PHNSTRGpp5vmZ4Y4DZWm4teZvAEVGNsteb1M85khZfmUC5fzc",
  "key11": "4XUuVf5noZ4ePAyTPwF6Qhewwor8SGLzZTDs3NFbWoRUMZvTsZjNtPDQgHwKWgPrCcLVQvYFFs2FVHwKYpSR9Mw5",
  "key12": "5sGeLpZxBLLL5rZL3TpuPmwTPDHEoLm8rYYJyHh37C49eBoyBUReX7WWCsnG6bztFt8xWRrgR12wXANZvvpEDJR",
  "key13": "5R3TkZNisAGoRD2vD5bW8bziCymw6YmpjAGo4kX9mEzjcQJskiEHBJNu7ppmEbY3Eud6yCiK1Xmg1B4N2YRrCw5H",
  "key14": "3qKExujaZMo7DY6byRrDJUyjSyfWCiinYZHwJVGUjDVpsbBQUK6dd5V7M8TeCKtXZ9tiPW4zk4QjrgzozaD3LJ2C",
  "key15": "4ypojKxwGN7sHxjAzpHvSPMBHfTxYzchqfFp7qwx2QQ6QD7M3v9Ft3TPaaSkDwCZBLbuv4eG8LMGFgd2Q3Py5iPA",
  "key16": "gvCb5vxNdWdS8bodvbiXukH9iXxQZyc7jqjv31ggTsWF8wMw6DP7exxzuSFJtmzaDkj9dWGRYpLY3Lp7heWL4Nb",
  "key17": "EpRRaBPSSJUqV4wGiwpvMoMorDRqUWn9MtkA9D5sj68wMJ1XqPuj1447214hWV7mbfYLNj6s5uUM5TXukLrQDje",
  "key18": "3wb6KEXtWRRK3RraE7DfCH3RnVthnk5bDpibHtdYsSniJSTqojCPANCQtRbK7bPbWjxnkZvMtR72RWtvkmjYy8e4",
  "key19": "2AjKShifWHmAaeA4kxuPmcVsFaLniqoHS8qVRFnSHrv3fLA6G6PW1rgfpXHAaXSRVwFQ13xws1a1bU1WrZdptKyU",
  "key20": "3oSCefcrBVA3QMKbhHM2zFkkx9cEw3hBJyXALo81LUi5JRnGajpXpQwNTXomRJtEcP9F82eJLRbTzjzr47m5GhdQ",
  "key21": "2eVvbj8oqnUrtQ2Cme6EuGESdLeTKwAf35SLVg1ZVnd5C4w5S6c97AAmmpUQRgX8WkwnSv8s9awUWTUBwrPL1mtC",
  "key22": "YHAMXV2CRCEH1aV25bv1vMj6qQKyNzCKXStKnm5338szcgn9ABq5vjDGpYon1DtmZwvgeUqwUnv55tHX4hvCKy7",
  "key23": "3ng8R8UPvuGRpoxu37JJ4H8khYtQfdH8fw7JZx7oBYtEbHJjELbTKCwVVYjaydCr1wxLfiaaEx3jwx3HNN7uSBFT",
  "key24": "3w1nyarz4DmE7cU9LLyjPMnBNyNJwrfcoToKJZ4Y47UKbDdc2kkb9fkt3kNEtzCemwuX7hEHHGg8x1SJnE135Zgn",
  "key25": "4SxAsgDeJ13EL1n2r715tNqUZAHQzhwgitA1WWjyFko7zbwkBsSL7drkk37cXjE7BKskaNQSsqst3sAu9pWtjvoi",
  "key26": "2boTzqAMcGbyfwFZG6taQDtRqbtMMsM2MnHPoG7QNor6HWizKLo3W6gyXgivMt9gx9Wj4H8a8CceTFgCM2oS5ZCf",
  "key27": "43TxsVUniUCpeTTrSQS6x4XUQZhA2m6cbRyhtV86KuHTxUeZCbRkGs6BYyRopdJXFwP6xjj1qcUHgopvgWjqoZ7d",
  "key28": "3kXJ5L5mZVfri87Fv9pbNrdv6FNuyNSVHxRw8cgrshKqiV1dtg2bhK3yyrcSNKEcT8Fv1d8GWHQAXkhUvzDYvsoo",
  "key29": "4rxGmiaYeZ9yEcqvVxZdRnaaWJquDde9zuNHSsKrC8ceH7XZEoxYXy7B3S5YEJkRAyPbotVgn2UiWTEfcxJM7A7b",
  "key30": "5B2NG1N2zFwfFzS9mFAju1rCVTJShEQqopbrkc7aHv6kL5fYgpzm59igbJMYxRgQPruPKSpaaoXdUarhuHkvkpcw",
  "key31": "4biZD1AYRduF4LS7p4jEeZNV3RDR7X5QX8h45DbELVXx7mQJGdeSzmjWuuzhNaSo3pbo3JbcCGG472MWiVtvFsUr",
  "key32": "2W2PEJEx3qDaL8UUF4eFiE5HziEEJGbu6rChC3C8VGydaRE6kG29KnLuyDcbmhaA4jCXEhbvmmcfM9oyq3shVtiG",
  "key33": "5c3mM2rPxVtEPKHB92FmRP8cWTnywHfL6ShVvQZ53XUZvzhLStuLAXNMJRYMNL7bLj6geB8i4SN3mcBzwKMjPGdw"
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
