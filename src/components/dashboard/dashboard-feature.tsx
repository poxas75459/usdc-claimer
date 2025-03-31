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
    "5oGMgvprfCSg4MESFKzkznpZqFxUp2a7JMDcW5gXA8HEQ9yuu6TZwZdfjWuHRcy6w2hVzFWkLLQd7YvsJrvtNx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qg1FkdJbXxbY24SPbmDqEJqFrzToPsXcDsA4JT2TVnyPKq7iP9uHRbWs6MeVzsAg8qV2KQwE3sBMXmLUCGEqZA3",
  "key1": "4twhzmsWka1jejmV8uDBEUij4YguGK2jdFjm7BcUUZ9gZhvN1PV8yrRxMEXoZX4BZ2yeUbbKWvsP7EfAG1SxHXjY",
  "key2": "5uTTZfB6ndkAakcN1QnwDG1A7zSqoH5N3wEfYWX9pe5yQyhRqMKU1CMgHUkKjnMxNss61j2MLAtqY4KGe7cziNhW",
  "key3": "3YxkZbTfivbn8B2e1hVgducL43CG9Rrv4sZu4UyTCz3vxQFiWnd8qQ8iUti95hUKdNEjDS8NJNWaG1iaf5wZhwys",
  "key4": "645VHBpe2coAQ7gsfsrXTaPm91fbq5nQNevcjTr1rEV622NVBisEv4bwEK2RtMvPiSx7vaQyMbuuee1yf6yUU65h",
  "key5": "5zm1sgu6mub1Q2Ba3d84v7r3f27w9HFM3eZaZeJnTwSbH5FNSEi6KbdDf1epsYU7FXrmhsbGCrM7Yf4DGSeeV1ds",
  "key6": "f3c6E581zqH2ncy413j3pQq9Z5Qw7gnfzHZnf6QaTWnLLqXGEA4kL7xjzVh17o8enYgsy2YAj3vjkA3b4nkApeZ",
  "key7": "2mRXEY9TUkhbgsbydwNpXDVuLRRscCf1QpkaRkrxVrTjHby7yvq6svL9Ro5mh3efti51vD6JjX39p1aTw8kzXkXu",
  "key8": "WGMDLcYdSmZ3ou2vevXuWnKtSWBg6pBSWx18wqc6cPrfT9bXgD5et6krazLyX9GV4nt95uUgxAvVcPRc8oX4Amh",
  "key9": "4fCGcFKYvQyxxAukbY7M4tgBmuZNYazF2oPhc1J7B4pkdYZTVZ1amfgHeng4Um3mnGTsp2CEmEivdzBqFy5GtEPj",
  "key10": "auFVydYK2BPTvJL9VgKzTbDwJDfzRm9SwCoBKv5q8gdwryvD1Nqs6ozDdWNEafKv9sihvkocEpf99rRxEHsiR4P",
  "key11": "2VddiU9nxZRg3cB88UHvwGuNsNghXL8G8yPZZuQT7WpN93Pc1qryZgN4uw5CGnz2Lc6hyitFFoT9hzgryWgfss8p",
  "key12": "4fP456Z9ZAqcqeRsTaiYiN8yjFFETTEkmoZ81xyf9RLTnEGPZhUr7i9gxUyRBRC5y1T8mR2BoJ4bpnNqtEctTywU",
  "key13": "2NXm6PZQUqrgQY46D23sMbDmjSP7NPQcpT9n6x2SqHQbH88Cf6mJB2VkK3v5iFws644ZYEV4g33UmW7aUpPZA1PG",
  "key14": "8WxUP8rfPaN2GHALXoomGueFxMEEXhJRvfojbhRC1RHyMqZ3WDzUHmvuRtLG8gUQpZ7jrv3PRPwtmrC4Q8umR4L",
  "key15": "4ZEAkF9q3nZwW34qDYiSBRXVZMqHFK1pjERgQY9CviUmKfyh2pSNaAv93QaQJzzMFByGZXPE94tbZ1dhS4Nbzbx",
  "key16": "fuy2XeM5sM8hD5Zq9hazYQkQ3vQNwYKGLRTJrPWLGjYYSWXaJUVovKG9hjbaFJpwTGjdsaky5qobbu3WtffJcvF",
  "key17": "bT8cL5qTbRoFx6XzJQ3JpRKxQcviDhDKjcmG5PZbiiRwZ6XLrL3ecYGmmTiedVNd8ZbRafH3vD38q5fpgRBazyj",
  "key18": "4GcKKFdtoWpZeiUzx8UH4yHTfCbb83CBV1YYcACRQeWZ5tKjniqFpgTHcs6TEz19VA15JsJeBHBWzMz4jjhBLsW4",
  "key19": "cr9ZLsTiF4wXz7vs9WjN8BKGnJtmjTPLWZtsGv7LSMqxeXUpKM6952ZfhGTmDnFoyVm5eb2WY4iyuKsRajU15gS",
  "key20": "2QBPMSSw7cs1zEoJameKQ4E2yYjxCRDwRmySfagk65QE7qTXMBZe3oGYbMhYs8dtRgX8jwRRPBTQHe18LYcsPeM5",
  "key21": "y9ZsrJrqXNSjs9jSPG45payXrpSBdxSnC9KQtvzPoR2BrWZj8bFVGwy5tvLd26hksUDDeaB8qqKGfT1VWW5PpHG",
  "key22": "4neJfJiPaqneSu9mCjBoY21Rm8a8Ei9QVHYCH9Th1RWpF1CnUCeJCQdiPbNsKnwHoyFDNeZ2az3PArucKWKzqJq1",
  "key23": "ZCkNMwoziHQ8DHYHNuaGBLjUiuk3AKWq9ajYWeeUqkCDGPdwva8oT4bsSnEPbWF1L5XEezZskv7vTqispKb9pVc",
  "key24": "5b2h7jhnaToTGNhJPiTmaDayLcKSuvwNoV3WEnCVC1ZdbyZMCh3StgtzhZL5QKstQC9aCiLJQ16K9mrobcyu534U",
  "key25": "2UqzsYjuwGp1m7LeeLMWP6jcABQqX6x9os89t6QExjXTJ1bemr32egbELpRmjGzJiBNHBRiLb4gAQnGENjqBxdJm"
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
