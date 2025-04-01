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
    "5wjS4CW9NQ7Mn5mrDYUNiFx2r6pHbkhc2rPHiUhcxTzLKf4Vp3L1Vn2wurY4AK7NozVvu9vEPic5ppUXgyWPseTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NkD3NRneW58xmjpboxVGiY5WiCsVmfWms5SUFF3YvdeApf9f58CrqSXNrKdgXACrMQKSVFCYVCwsxACZGSjw1Eb",
  "key1": "2ATfYLuBUsaXPyUCBSmspWTUCpqM1vKoQ9oAqs5PTPcPms2yp9vJf7pzRxSeDhEgC6mNNEXxHCcViQXQ62ZPDrMg",
  "key2": "5wKbhxkXaxH2FEe4X92YJ4AqF5ksUFftXnumoEa99vS7XfNYytQaoMWL68Nuh6nKRDk7gF6gvEiuDw9SdnsYqWEv",
  "key3": "fj2UdBEiK6NZMo6MZCGseQz2hkAPipdTaU9tvrNnLD5VyZGCSEs9MEdDL3MfWMpJaNUVkthFrPuX67SeoCP4pDN",
  "key4": "4G2JgiofLXGujeRQQFWFi6R4AwxJ6opmdK6ABEmCXGwhjDRFn2Xsuaxz61rkckpJKJxTzU6LQSRiJzKH3CXwU3Jh",
  "key5": "sxigic7TPDAk8B2XMqKbg6Gj5FfSbyxUVufX99goqmqoM3EYb9JgLzF6nJztBzqLA6SjqMN83Zis6T5q4ta3n89",
  "key6": "65FyEeL3JmBeoqZhBWG1CrBuxQ9V3Biui4z73FUzv8K8aEah8gTnbzqKdByiec1PaAjFZPDeAXorpHhTw5Sfmyv7",
  "key7": "3jk3gsbBBkQ5eThcBiuv99mcmKpJYTq2iSZSBiUYQyoK6N7UxBHtjS3CssfnVybcoDKtSfuULEjuoZheWoYipRjR",
  "key8": "4rdiW23dmDuvRvMvHb6iKboaMVWwcU9PSA2M5yLAs2StyKLa7rkogAAjWFDRRwXy5zz6KV8vnvvvcJojJPuPHzQY",
  "key9": "2XCQxuxpLGgg7L9LiwK9rv2p6CV8kjvJw4tCPbdc3W3n6Dvey2xc1NCmxDbPFRpPXucTiYT6ggLJkiBGchq6fNTX",
  "key10": "3eNmz6R78J7fVRHX89zU36qL2rnuewrS5jUjsXjjcVtvp6TcPxW9XYsBi3euhzeuLc83coU5wf3fzfumsL9dtTM8",
  "key11": "61MuCyUc5deb2sYASJKY2pCHcrpe6J6xh8LpmE2A2FytdcdnZy9UeDJ8GpZ21Np2sRedMFxNKjFK9WyDNT6KfwNm",
  "key12": "wo8pjvHsdXkq8Xff3RaXgf4e6v4cD99bUzdwoazoGZLcxvzco1cHcd3pVSC3GLH9WjhLJCUe75wvMJgngyEP7iy",
  "key13": "3oYjkWoVwVz7ya7ChfSvFcasYYmEGMunbaYyWEC9ZU58UddMKSBB1ozUdJA8pzyDYoYa4JoAQzmMQFsjUC7A9gTF",
  "key14": "5Riq8nQ6FcLB3hQtCLzHdSUAwSKbCEEEFCsrwTNHQSWQxZJRudYC67fqVgP254x3NozzUXzpqFNaWaApJuuvcoD7",
  "key15": "cRSBX1n5bq79164TfGXNndtdShnfC2UNXSUuKdSZGEJz23UQXRt4j7zjnXSgGxPkZ8Yc9YmUioJABqNyZV8vtEp",
  "key16": "5RvnysiQdWgTSiA25Nt5xNGQBE4Gxpi9mmRNssDf69UsAQC4tpwu8wbF2FHqpg1R6RFWKCFyYE4Hmt3XmGWmyDyg",
  "key17": "5yqatNjib8qbKvVspVbcvSeQts7WSF6XyF7LfqESvA8Mp5jViPrBDg26SvBThzFMMGsHNFVPmJCSS3QWTxpKsrm8",
  "key18": "37SQ7T16fXofAyDpaKraJApvNdVHUSYtjfWAiojnatxTwG7mseQik2uvejgWKBRumMFuzXv5BguPnsP528uvRBQQ",
  "key19": "2qJ4EAMTKp2X48FxeCA49NJNpAitaeUennjDDUGSJ3AXpzKWhA6jCyh1vDMSNGgofKzSg7Q8PSgXFC6c7v5B5v65",
  "key20": "KC9pdWvFEuQSAxgwFca2MNpWJ9Kcea9LEYN1PkEEkZdQqH8NASVYQcVLmR9Rpry3M6XN3iiru79GNhH2Uqiigpz",
  "key21": "5jMruE4tLgBYBTxwJUeGbdLJS7fJr4oK1LMCUCu3kU4vmEhWRakF8AhFkPTQjUc85hPqiFasT4iG1zLGB5FWdQT5",
  "key22": "4cYkqtWx1kMZwgHWYegGxB6xhG4qnKKHB5Fik4Zu8efXrV4Ch4Qbxw5W7wSZpCFY8zKtnWQZzk7KBbfKPVqPKRWG",
  "key23": "5JeMQGK45X9PUqvookVPdmMBxC1XNdsFtymZagDFWwxmgstsmj7yF2B9iM8HD18SgymEhxDkW7cjJrpNTyV6jHY7",
  "key24": "2H5Y8KsMCrhoGJGbQkyhYeSacWxQ1BajKXfBqFCXoJeKY1tZHh7ogQNgMA5xeEuh7imSjW8CXynevF2meiJSVZa6"
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
