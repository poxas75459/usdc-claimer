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
    "2Uwy432xydFdoz2TANxKsuFBMdRRCUgDTyqWhex7p4bGLQ4zeYZU7PUuFrc2yuzELNB4SMzNfBP522sUYHpCivWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7PGkS3KZ57dYKD7kouuaSGpLxjpGhs94JsTZBinxNYnRDW1mx2VvmkXiuhsPHPpCQVBng3ZXrEM2t5FZyxSpuqE",
  "key1": "5ngJupQTkojSCA1rd1894zTf53Za6rhLpeU7soaJf8Dgx3kMHSDPbNaNUqYoTsUpH6kGteqymRDmFcWjNqskKNgG",
  "key2": "3ekGErmC6RFG6WosSUJYp7c2aRZVVEJKoE4aFi9gznN28B1aB9KiDdsYrHwdX2uWBu3viMAaWKZPR8heDu9TJLS1",
  "key3": "3pMfEx8D59iwgoxX4soEKwHCmjcTCcTKJf2o1qd39D8zQh9xqVgv2kC1FdDuh6pWGcNzymHxTeHMa6BV14f9LA49",
  "key4": "4Vbs3cChGmbfAGLBbHeq74dGAFhup3QdBp8rcBfFiqje2aW3rkYFVg4WKrQHCD4m4ZeigiSXfX1NMiyVeitKSk3a",
  "key5": "4k6r66qNVQaqMdoFuSgCx1FRtCyPrYXeNHcaEB21WbrdjkVTqSmkAeYmKDNEoEGyQPMyGryH8nPafmGVA9TXnSz5",
  "key6": "3DbE7F6m5EhTbgFZ7RYcBjLMB8gbkGHN7WWWu6SYdSVzSNb2Btt8p4vCAmjAXVzSKJ3VY9JarZYytss3hGzqvpxM",
  "key7": "5Ab5YmWmGu1fdLzrXEQ2Lvdt1kHzV5htUSqQnQnqDps5yeBhx9PkMCyKCchLKE36rQpy8kpXDkfUDC17kBHwNhJa",
  "key8": "49nkDikwAmsZMHEEagCFnMomTjLd3pUirwwQa5jqVbwCWqJjCSK91XWp4h37WBa9fbZCmkLt15cGtySMbGTnYo6i",
  "key9": "4d4VRYUAfqcy7bwYAsFWaHgoRuEuoCZP3wXs9wx3pdxNijiY1kGn43w4Je5o9NDoYap5xQrZnNPsqnbwcoBJCCGe",
  "key10": "6sEMdXffMePSJFKQQzELfL4etyQRdw35XVQXYHCzPMJqty4gDAUCAG1EZ3Xds5jeYGKpDqJRyw8Av7QA2BTG9iA",
  "key11": "3tbsJym9kNn3TN5TwWCx9Xg1qWNgAUTtVgbtkqeG9sy6TpuTaLsCRdNr7fau8HKFTVZcy838ZTSqkEibqbRdUmKP",
  "key12": "3vBEieD8ts3ZZa5dBL5DPFYZGPos21aPFnoNJ1S75PEU3xbmEAxsFvjzz8vPBirpEKCo6q2fCSgy7in6aquRyN8f",
  "key13": "3ykFTzGYZhm7EUZ5BpDoGME3LZaaDDGFqLFupgU5TqmxrdEwGjdgx8Y1N9fZq4Q6EqVHLv8kHzTUSC9gBBRqw4Cn",
  "key14": "7j4pUSJyW3uq83iyySSzz3RuRjpz9JafN29fyRrL3FgUJ7EvdGhWH85fGJCpwfEosfhVz62tjZY4yqao1TPydfG",
  "key15": "3DQjKwT5cLXfDHpLT8kyn3yFfmgY1ud1ubCCL6rxQbvmUVPusupDAxaNTVQZkbBE4zmMaQUJyyKCJSXCxw8GKXdo",
  "key16": "2HzoSLJD5qExSoSGG2p5WbN2452TAnmckDBNCsEcGpYfe88dVhAQhhBEPR8BWUu3gNfUfrB433vFzps7yvmbEBZ4",
  "key17": "274HBpJ6EPMLxsJ7rF4bTBD68EBMJ1xFw9qCYzwYha87VER6gYvrs9YDgv1wbor3aQV3vJYWzaxraUv2RDGNgddd",
  "key18": "2VQn3R59sN7xaNmtNZgF2unUAWPSoV2tmGM91L3j9CYA73NuikVW3YQPKENRspLCHfyT83VtdXCxhzKNekkEefJo",
  "key19": "RzFXrgie73mB3TjppzWMhXopwkv5R2GsSvs9J9BKQ2xoTk1GanzsknnnEU566ZxjmU9crNdngmYRyuhq7jw6gtY",
  "key20": "WLS4aLAjDk7S6f8QH5fhFQosRBXQfCuvdpGt22notn5VXqbeAu3ZAK6wYjub8E5teyFhLzxVYRRWdgqkDVY7nCM",
  "key21": "JVDZBF8k9x65KZWxzQgVoLRL8xuyLSWc7fnfqRyBqCw8WtrfPqWgAmKjLWguwq5CdXkhhAqmhZuLPvei29ihrBo",
  "key22": "393Sejvu4zrd1nVYpRg2wAP7ppdfaSrqxZTFVMaqEKvPdNGcT3fSKwwjVeF7pwtQ6fFiVzuWMSvQs8myWnFJNies",
  "key23": "3nHTXuQodCctAsAzoPtYfuctoY1B6KrFq8wbS9BoDq2ZAbR1zyua27ZfPBvDo2VVQWV3hLsiZvfv5jszsRPx5bik",
  "key24": "2RT8HiLaeJY9aYeXee2YgDHq5yXX4f4S4GRntvPVcMiYHyRoo3UfnXfUDCkJbUL6mXoNHoFbStnHUHNcvXkPskAd",
  "key25": "39SVYJVt3SZXXDmLhCKruB752T4N56rXc9Lk1KA7jUYmzVRGZDxrRmEdtHKAzBgN86BCaoDsUpnH1D7VhC7sduuM",
  "key26": "2Z4P2VZPcfxeh6vDb3JQdJDoJ8dN8mLerrWEWxLXeogq36Sii3m9TM9wnM37aJTnZjJuBNz3suNptVXJS973EEKN",
  "key27": "5T9BnHzTveTyvy8VJGN8aFBDK6addt1vqgJxGy7CvxUaovpKjgYD9nDTccznSPEzQnwL3Ndtc3tnvaXzsZPUXF9c",
  "key28": "3RPQVYhvYQvp7xxPAvuTTHpYge3d5KtgU3ZboTUT7fHqnB7nyQsH2sxCYUpKAQL344aPQKzYTdB7URFC1FD6k3ow",
  "key29": "2RLY5DTi4h3hFqoBrczU8GtRrc9AKTAghUSz8to4AXNnWHKuZNTSXZsMS2HVLYrxPpxcJNs3rL66XJmeKur5dARs",
  "key30": "5Dcjz5pv7xkw49NBWHGbVZmy6HNogcgVz5CxZ8jG7C7p2WaNfzx6Hr3NWUxmEMGmCaDKupX72tttg6ojdy8h8GHL",
  "key31": "61ASGykvJJ3qkU82xN761J56MMM21p13Skv9AyzcvUJkUKuqaja8RjfSbv9EzVJvSMCMnp4apEyRVfTESzQxrwge",
  "key32": "2ibq5xRA6TKteLLACBW5Xao7KcixYavYmjmfRNkpUrNnjJF6aaMpS7FJVv5UWw6BFV8w9EeYxnVrS5oiQoJEmmQn",
  "key33": "EVQ8rTPpidzFHRxCJXYu3amnKhFynR79bYWQWdKvz3mzqc1nK9Zy4xG52PAymi21TgyhKsGaLJit5ZHVdWC1RfN",
  "key34": "3DpgMG9Zq8dk6JrJNktAD5o6LUt4sC3wapTjVd117C3yWrJasHRxDXVbZ2ze2ms9bqwXJxL1spyTX9WjZdy3u2nV",
  "key35": "5JtL3xdN1poP1w4fwq6XybpQ3nSHu5jHUmz3jyKYaXMaiCBC3HP4V6jgynCkxzkKQ2D4nkJdz8gpKGmZSka1SCoF",
  "key36": "3ZktRKr8o9WBSsNs4m6XPiRrezSLkwrzoEY3DzUZ19ucwM11tF5V78eius7afGdXbMXByYzHwGQaB3x8Laeya6KM",
  "key37": "xH4E7Q1Z1gmiDUnep2kn7RASqSPx9qmbifJoPxHA72s8uRCrCwXxb1s64pZQme13PzoEmxddyNSzvXTS48FUX9A"
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
