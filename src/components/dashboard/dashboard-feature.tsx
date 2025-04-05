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
    "5vJBshuw8ZBa29bDAndowWhDQXM3ScJcjTcxmsS2BroZUKGc8pj7XbEpMqj67GrLvJDH6Zw9qptZBXHpj5b9uU2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rWND89DfCHUzbnkhCXD1sBoMWxujGHDzTa4wo5xUV1NgM2sAXEAZjd5vPur9EGdYvipSDuNxgAFx7avx6dJMALM",
  "key1": "2AuQMViZLyRz6ggzuC4g1Se1hnQXoCF6a9jCyr7nKupAwmYPynL2zzMCtgggPRE36CmTjRBeMTyujJPYSCKcH9z2",
  "key2": "2h3UZ5GMosgPGyAEMwoaRHMeqmTrHEuprTmAiBmyg1jNQ7gJDDNFikF8XTa77u8HtcasRrMWWqKS2jWC3bbe134W",
  "key3": "22DuqjSKtvmUaxW6CkykJNVfzEk33pjWDPjXS82vyb7vsdocof6Cgm6vL9VYSi2h79FcngH7eJ7Y97naBvU8nZsZ",
  "key4": "3ciNpLs2ttN3qrDT1wx1xpTtVXdknypsQvCzeBJ8uY1qX1QTb4UVZMXA3oASgRh2JvzhQZwcfgRLPs5Fum96ovaC",
  "key5": "2u4YyJSexVhU4G7rcmJc8E1Ah77ztYDAbGTyZNir9QEVUbKgTe8G38YPxrB1iQSjwTrubvbhYvoFy4BuSW5jRk98",
  "key6": "2BDk5XjTttW4KG7VsLyCGpPULyzFdFi9w1crfs87UPmdYJDf9KV83hWaa4BmxhrCBi8sKMbTcz1Buh5bAtZUMXwd",
  "key7": "3LapdgHeYFuKqrCFxmXMDErAxv6oZxtpxYpFqkNWoHKMfyBb4gtvCebEgSrrZbViuFR4fZBB8jejfsYLWnqfFYm5",
  "key8": "65JFysHti5GJzM3Xqwc3mUBcDvZVWqKVbxjderynEGeZoukF9urAsVP2WkS56MJpGuY1dntVpuBXmuqs7NTi5bJH",
  "key9": "9PNyjGBDXUtNMNhgNoCnuHF7RTJta3XuEfTDhAYqy6kWE7hXdDLLWMJ7uBpnGxuSLtRxVQpY337946Q7FmS1mSt",
  "key10": "47KQU4jSzQgvaioLuHnL2Avrz8dx8QbA7sG3X98hJ9LQqciBC2zEHoiXGWsMEkjghA8WuK3RmkvgZqX8XmAv7gbN",
  "key11": "N8bHGhFZZNirFTj2HsCQiBXTANe6B3m74t26aDqRUjn3v39YZ9TYr1yG7ufvecTS8txq2zaxmBdHv3kywbK988k",
  "key12": "5wRuCoLSahgrR7cLyokBojzmpf6711G2x8BiyXMSsGwKU1B1GkEVyWYG61ie9ivsoBTNHsxRVKLpkjG6WSQBn8GA",
  "key13": "3uaZ2BKwwUubiZqkFjcFMWsb1dZ1K7Vbc1WhAWGnP5mdnmwBFHjMfTyPz9wrtmsBfx7C4hisStkLz1ApF6YnXjpm",
  "key14": "46U8jRy299YtVgLiU8cFJci7k6kuM2VRZYyyxeM6JFyD6ZmVKwFMsdtR5MvJ64D6xmN3qAbgFZpnrMVdLEJhmLhc",
  "key15": "2jfh2pPHsknLMyWeNujxAo6eUjjfMMR8HSj9yT5oGpLbfjZFiULDgHz1HctXH4ogg8U5DcGpeudhEmYVhJwtdLZt",
  "key16": "5XaXeUjGM9CSMTSsywf6MrBbz6sVctH3YBiLSSJbWVevzrwMxWjmj9CRZx2LSLew7prr2sQrQ2wAPQRxSYi87Lv5",
  "key17": "2rmUaL6yp23DTwqDruKCccgYX2YiT135orieZh3YkSGeCPv3EDFLQ5efyukJcaAGXV4bnB3qK14MDE8iTiH4bway",
  "key18": "4xZGcL8pG5SzkJm8kQQXAjyLLaS8ipWJUrdKB9j8zifnQeM2fkNXyEKV1pX6ZTERkvNAnUAeKgPrvY4XAsX8VinY",
  "key19": "2zRWNHWixxLPpef4RnfyJ5tfh42wLMuZbX6EfwwUow6raAykepWPbVLkYeFtLsgoGJptBL6yXhSZ5wmdH9PjDerx",
  "key20": "5VSCagyXEnv9QGEgVkSwZ28CnPULEv8tmsQuRkRGj9F5a34Bm7QU2LhuAwPULxXi63CyTfVzQz3nHsjJuMJqn6fa",
  "key21": "51yipJ2mpMqkaLjZBojubaC5cjVP6uRvMUHPCG6ob29mXwjVvPT634opmx2H3qTfbqyqaABgrJs7Cx23Mbm7xsS7",
  "key22": "zFJWJ5ykkq4px4wcvpBkmjTRTUEaNQuRmWH8f6uVDNbe6eoLDTFBeRuMwVGbbKYjkd5k5waa6bPcEVP79xGWsfs",
  "key23": "jwdrt86DMmGXxdEmUzfPfdmbsuBSVsDmR87oJsv7qhaupZ6LKJjCZDyQh3nCkewrL2ZQoYuppuT7Z21aKVwoqZS",
  "key24": "2EyDekm3ytsVM9xVFji18jb9yPSHJqKsmfJhg5Ee5EKs65Tqraq3aRTX3L3DAyw5hX8GxL1W1HN5PoC3kCATUrEE",
  "key25": "hjgyZLHSkUMmabhDC1zXqL3jfbNqCNas7PiuySMC7kLQ8rv5WADfZPZptkuUZ5T1TqAcCZ1LPRuHVtU7b1tpzSp",
  "key26": "5uC47X6MeWKTu7NDLZ8EHNYRZku4jHDDyaZWiacfPhREcPSVuw9UGJYo55dtp8qWjx8f5KroePdSgRkufZ1tvurv"
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
