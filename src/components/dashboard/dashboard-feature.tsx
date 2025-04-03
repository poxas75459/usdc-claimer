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
    "4YogPWPkPJ38MkK2GsShr6jJ15vu1LDWL9FKaN7votupdgkWNi9YMHXZozaW5J5wv6ZBTTT8rbnY73VWkjxcPJQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MaTEuqq816X6u729317nzMotWX4esHX1GVyrqKe3mBcNpi94eqCWpDFPvumkuupN7ygmxaKwj2RgWC8p7KMG67T",
  "key1": "2AQNhRVcLya4vrx5oNPdmQq1ExS3yfQkReJhquofsCtk7D2k79cCCyhsHrUVWJFyvSAPNEcxdZu5TbRXvqqD5qDu",
  "key2": "yEqX4xvbNZkGRsCUNdGzhdkyiCmazG5RyRW9ohowMU5yFfAZ3cMkQ1UtMdvrFaofsdnfLvggKmuMpUS7rrnyQZi",
  "key3": "24WnheYpJuNBZhwe3Q7EZ3prwbUMQxjmF7oULDbssdckK7CEj7YLgCKfLYkUjBcBKzV9VqWyZhMQhkkDfrrkgV6J",
  "key4": "cQ5RFxuhLvFJZWt1bFjFxnTpdYK1ocvsDSjtUTucCssvHQNmwfFzjzCgvfTRQZkrQGjz3ecMshzpJSdmHK8uUJ7",
  "key5": "23ai6eBZaqvC5FMNK3jUqvxBFbsDDyiTt9xcVvsuJLqmdhsrQ8s5aZfBy5dYJuApGyMc9DRELkQGJjzr3MSE3nuC",
  "key6": "2ELBDV8tk59jtTRK9uvThvjstEK1dP8zFZuuieKZ97iujbiBttxfByzSenLnK9x8AAN3NBjJJE9vdU9KQ2qD4H6e",
  "key7": "23zWG2jcAZV64A9pbhsErDvz3oy4kSN1Ke8njhj5WAZyFTXsosjLE7eeSqT3qygj2M8mS5DNxh9j6h3RsCL6dzbT",
  "key8": "1hA95MrvwiQaUUU5riNfBrbfHtx5CuyRznxwG58wLri814ofrax2QdyJmWekBv7bYwyAWdj1PSf6rJk5zUEhMfR",
  "key9": "3kppsnHnGuZJ8WAJQ6odcD1avo7mXZCPxJQw1CP9zqFZF6u7woMMQTJwyntgzLjNiLvdwnhGmdVfxyJDDTvZmmN7",
  "key10": "2PPgRDNLNr1ifw5QEAW5ZfpL5xdJRSyDWY7XGs8k6JNs7mTyRWS5c9CqvpkxsPFyb62PUitrUeK2JpP16vpsnk5T",
  "key11": "2t2RsfmRxxMZLnfgypUeTazbgECbhFnT46Y7NaoiHQ9DJCASkQTEUf7xgh33fqf2QCXiRB4Hb5yxd4gfQn4nqYU9",
  "key12": "3FeJfTBeVjCTZ9Sv3Lfk2S75wQsHCva1UFKqqqtUV4ZaTMjxM9kxML6chRamQR7WDb5D1XLVzQcTnBwgVTanADe",
  "key13": "2xcSwpJbh5EFU7R9nsV84BMHnKhnpzjTjd6xYE3oG2swzdMMiEv3J31oXSHqb3XWDg66owS5RimXTaT5qACGXEq7",
  "key14": "8EHx5niusZvjL92z8rFNvJg4zH735UPzH6NVnAuSMzjk5YBDoW3tuJiWKWhYLj2VXMYACZvGg1gWqSdvJh6hJFF",
  "key15": "2J5YVKZCtR2bHurpQ1Fyo6aWWWLYknXacX9ML7dKjMnRgwHpvYTXt1pz4sLyiD7NKbEVp87PMr5jeBWNn3VJe1iE",
  "key16": "5XGiXM54PDTWRvjp3YxbEbnA3XYeh7Dgi4W4r9BuaBTG7HgPgQYk8BvZ5dMojjfoGzwvRBzU9mri2gm9gYA6ArPh",
  "key17": "4ZXGfwwDmhhjMKuq7vwyArLdFsFsFoRMSYKVdf7GBPtS9vLE5e12rh1cefcnEUwg9y5kkrCk6zm5TXFX42S55kWX",
  "key18": "2chAr31X7HGf72PzzXWPJYFaxcBexxb1AThvbgzQ8Wy1xJ7F7kFaSdSgHWwqTfgyedYY7Wxtw9rUKtWibkx62vPw",
  "key19": "5pAx2itMUvfoNkucALqCmyMsYhMRbdtngganfx1TQa55K2UFZocybSqKpNnYkij1Geo2gacMPNaX65wPvSFxXWGN",
  "key20": "4vmgRbCoUQugZ255A9c6TzheG3reZQ47s2RQh3HAiZYAsVF6rH6Myev1sMADghiiL49DFuyPtu6qm4vNSAzvkpnA",
  "key21": "4JK1SWs11xgKikdCwXAVeQ2G1fgiy7htdNQ4Dj2UruSdkgmLHCocEpQtVsttD8qDJJxurccffAjgdNWZ4AbMuEsT",
  "key22": "ZHui8p75G2JeTSh6QU7oHYj2wnssfstQPGQCiUYpPxKjWdq8mMXSJnPN7uSLASqAdHfyf3YCP6KM1RWiAoKmg7B",
  "key23": "5Eoh4Wfu418X4eSEFmkKqVjBeFmCAiWNiKpjmDVcBABbfq97Rg8N22zB6wvCjWHGoxwiegzJf119fVNB3F15E9KK",
  "key24": "35QHRKtS2QFjFcMTBhwM4p3eNsZ1aPNdzZcmpZHhxWpuaTy5Bk7bNDLep1vknmQPxjqieunpz9bCzA4bGVg8GQpr",
  "key25": "4zordzeauthdyaf8ojTK1F9rPAvanS1AYSQ6kiEthtaHCJdCDaZCXn31RPUPuWHqgXTR3GJDYEV2LP8cqiQUXaPm",
  "key26": "2jnZnLAypsVXFHthxtWNrHSq4vrnXgPpho3rFV8xzLLJCsURZkzQBb3yL2GuSM1fjw3f194VxFiwj5AfsJ8McFuE",
  "key27": "4QeTG7iAZQ77LW7DiLbRV13UanUwao6LGbLLDFKurR1Q8p7g3k5bF4UCwo2ehLgPF7xqftik6cFsxDwfhjHd7UQi",
  "key28": "3mcQioSUGoGbP9UnCEKw9D9y4VkXAdTKRZtjqiwb3xB2odEoECjR1mvd6CCgqAmoLVTpne5B4jYjqipMfKESmrvL",
  "key29": "5Ku8rVBVZbCow3ydiTPCVdQbVAYWNR834TcsJZZHhC27juBGtWoJSw8sMdurChuhpXf2ZeBq7Y1fUc6zHbA78uHy",
  "key30": "5hS4dU6HJiNa9G3mcpryC7jApZrYLjkguDm3JFSUpguW7vR8HP87Bsh4Lub2viqhx932g564ZevgT5ArqKoqZD8f"
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
