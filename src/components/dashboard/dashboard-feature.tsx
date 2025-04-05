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
    "24YrMXBEEWF1qjKUWLyLhSpjLTxwRWLGehRvUZ89JFYHeogAZ8cVhV2bGP1BjbYrpAXqZU6hHhR3KL2QtGKGYj7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KF1YhAHtWaRjLBg92gyqn3jEhRSeRsNHrNznH7bzxzxKKofWzuohNLwFWbB31J9aknGw4kCfMT5kwspUM4JPk9B",
  "key1": "3t1Vpkn5KBiSPGFhawjVJb3oo7ArjjDyt2K3tMUUpcR7HUaQHmSURhRjmgRapnkhcteGaPzmBde893c3DJrtjwgr",
  "key2": "54cmsBNULgd5xmYz2LfBVM9vgbpPbn9dBoaaFA7bfXrcdqtws6N32CiZZ4rD8cvUvecYjC5KZC9yxN4QtJVhdkTB",
  "key3": "5zFDgTNSr5oEVyxBZuskfWumbVub6hmJ5T7B99WbG5RZnPAqqo59f79MfpQT4NYgbjcsvPsBbYg678aHFytUTAPt",
  "key4": "53oVRkEQtboCuHJ8ckcK1Wj1U9XTWsX2iwBPiDmm7KJVYzwMRqcRGhcyVhGgteV5VAC1arT6uJAAV81iiX9biZqk",
  "key5": "5eA44Qyuqctoh8zoKX2faFGJ6eg5pNtggryCcDabd9ZHsT39aJtQpWGegPBemZF5bBf8bV5uKaCR5JKvAZXyBnAJ",
  "key6": "21cQRWwN7qhnawtmj58fSJayu5rAQbw2ShkJJPPFe5uu2xy448iXcu8ZY2jSSvKRTz5R1vqsdQXoMDT2Aa6Nhdzi",
  "key7": "5jPous3H2x9AzKZ2Yu6ubWeG6yP6rQ3zQ4DiLFm9t5TGYbRRpDVspTnFYftxffrFreRWq5t1gBS7TuRgANNSBCzp",
  "key8": "4bPxB7dyQ5iLCXqed2sRuBnWaoS2B8fuXWxYfyYQd55s4AmbjzMCaL71Yt7oJwHaUUDZ5LSwYT8TL7sCejpq2X8T",
  "key9": "3mVmjjdGNKc6HmAPsyKE7qww5HFdXafHkN1aigLwhigg7qbRRhckY23z6woLqUuwBgYwwxjRBXgMHRqHsKLGcXrY",
  "key10": "56qj64zTuZYPccevE62nTS6reExvnfsqdarS7R6hUXLrubKYR9bhULJP4o7cetYkzGzy4hzk8FrWf1QXHzkz3sEE",
  "key11": "4JmA5q8JXumjYup6xiAwsDW8VHg3q6xBeVBJZxsfjhtKqfu7F6X3g87qEsxoQ9zYqoGC474MZ2D6Tyjjafdm8aHv",
  "key12": "3tLPTooztZCUFikEumP1p2YPWqapEBwiLHs6DQRoxTRuFmN2Y5teUoDRs4LXrxqkimSH8d2zPc9c5XjDCTKbi2xb",
  "key13": "43eZKf1sM65HT2kV716VvjTvQDuffUoWfCzEH7fGXTcf4t4xvi4CQqYi7Q8CPZkLkEweAtZfkr5XaJsNYyQbkeSy",
  "key14": "2otzNSqCs9qWxeSfSUjTrCYxcFnxVV1FmQxdEwgXe5UPQGVFytUSsAUWrFh8kaKqVP3ac2UF7yzP2zZy7kArkkVC",
  "key15": "5Nq2ADm1idvyhCaL9jgAcCgmbFQuxadRu8ec6Edg5piTHrUtrvj6YxGJcfZu3QqKEaosRyb1wAK8mPNvPNwy2ND8",
  "key16": "4tFZ9JWvLjzo48r48MVFnBt1ETi2R6XE2v8WbLrtv6UDFfhYHSvduZ44YDZNmg3AyrLnwBqfV9LJ8Zy6G8FF9zzJ",
  "key17": "4YDfTkyxGH6dxkWH1gqimL7Xiqe9LBxQikz6CFspEYheVGg3E9Y9SA1Nhi4PhXzHTBY4T9qyAiasCoE2MXTpKJEh",
  "key18": "66y9GA12u8zG7gWTMkttTAxEFZTJE51nP8gAJST2UiLdX17uQRi2Qz4B8gqC8eSsJAMjDgBBE8HPkM8tfWcw9sGG",
  "key19": "5oSGPAT2ce882UjKWsfCG4Zp79Qm11ZA3dtEtanh4wu9ekoGovjrTA2h922HgzrEE7f4fYE37ZNveM5LHg9kntun",
  "key20": "2AEa6uMjK66i2wMW6GsLerd3ehysh3gbke58Qrhha35Wk3dkbCwVcyDb7hjP7hXdYrt9EfNPqChNKhXbAmpugBAo",
  "key21": "5L1Y3DXUnC1Y5swV7n4t25aGTD6dsKhrCKSWitMVjbAt1VSgpfMLBdxGRxdLkcdFPuG94ajh17XZ44n7ShVFiapx",
  "key22": "59dtfd8q1vpz1Rzz2yUma69jmSrd43WLJZfwC8sqVQGMcAMkfi2jB7EnwUjzun7TzggspAUcLpk6mjjw88ZZFFBS",
  "key23": "3hAUxo77JYhZgHgy6N9dmaxbeetiGV487ZJbEqUP3483c7Th6QVcVpZTjdq8SwkKZXx1RSeB9fUQ2hjorg16yT8J",
  "key24": "3tgJpS8jUz3bo1HbcpCpSekMk4cNrXKAsiJ9PkvWaSpAg7g6wrr82uFs92nxszfnSXGo28aChRa31ANBCETWoCZv",
  "key25": "2N5419winacWVEPr4eEUdZdR9RquBL1shYgeenkSn3q9HwdfekRqDR5jCnB7JipqRJZ93rV9SuC5d516LpW9sNWQ",
  "key26": "UFxzd5AuwACStBvyVzd7B8o6KyEKuLe7WFw3rKs5jegJBKaXJ1u1aExyuWQea9ZxTAkH959J6g6oKpHhPdYMXbU"
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
