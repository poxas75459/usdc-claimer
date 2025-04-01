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
    "3aBUFsaqUx2RshKQB414dAqwEbtL5QCxauTF3rFKGbg3zqBwocKgKzV3gkT382hZ4tAnM1t8ChXE6r6wGE5XhoUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fa9rFYSTEtPRCvyKwgbU6uazoreyGQd2UJFnLbro3bXGG3qNNjSaegdeNuw8eBbyXumsuuyDBSzk3dWRLj9CEY1",
  "key1": "3aPPN3H3vUPVihEFkFME4JDnoEMRVdprE1jK97oTjorsVupvXRxyUmE759asvA3NJL6bkEkjpF6qPC7poZLEULgJ",
  "key2": "2c5zZAY7fYcvUJu6ABUzKMcRf1kX6q9c8Gz6g2JeuJ5ASoNG8vvyUroYk1vkgTLjPQRvp23rQVn8zteyR1sDzZnG",
  "key3": "2s3wthfSfc3AYjNTgyHEV3Ga9rmYWBL7B4Q6fqpMfNzjksvKFguQjhTWvbcysza4PuHgbsha65aY3HADBtxb11GE",
  "key4": "3QQMUx9eabgdg8qjPKbdTNKHFtEVhD7v9TBN7C1aSkLq8nya7sKeGbfDXtHvVXRj5GbojzroGTnQ4EBwoG2BKLKe",
  "key5": "623ZTzxH6JsHTcy1bfNfTLiLMd7ZdD9zcnUATCkdiTo9Ew8hPBVbaNgqYYSnbn1m5dK49LvW3fHAFiS2JgUHF2xN",
  "key6": "5Fmc8wUJ6LxCbo4hvDV3EREFqePfj7AimNWpgTasL9dnjE8DTHXQnCu84pMX1gk4SAkyyhobbhtn8WrKCZaLsFLR",
  "key7": "62tfDB7ogDXuPxwks2iPn1rtZfHvknpUQqKLGK1oGgD2eyR5A2Yxmun8v5fzF3V14eLoa8MpKKAgEZk3ypP6uiNj",
  "key8": "43gTDjQTfE668V6vt6aRELPiDgWyJcHf18wwnis3grDznnU5JSq84hHcm7Q6zN3jnwZADqGbTrH7csJojEVwRBRL",
  "key9": "2QBybznhS2aDPza8uH9RvRGxweaRrMW2WxgXENcekfFmipYbDci9177QeYhQwYsXUpGCHT2E24FWGsriRrdqwcF",
  "key10": "4qQ5sppSCqB3HVe4DT1Q4Ru7NgmG32jRxvjBjcKr1EN2PjjfrMCcceX9LpKmasyjUt5eDGT3ncRc9CD7CrsZfijL",
  "key11": "3hudeHMjz6M9ynvkijx2vuBQctae9nRAKVGgJkrBeEfTca4cq4hodRt7amCFcwDDNoWtpM1jDs31jfGB4CVeKXsP",
  "key12": "U4C3o5x6LCuvp3535EDY3z3NEmsY82SAZkgZcXXfdhjsfPjFgE7jYSdLFNPkzUBdCyBxRkyxR4QozkjvKUmAsZS",
  "key13": "32X1mGLrxUgdmx2X3cK7HQhPAoywoNnYWYmk7rh6jCcL4WEgqg1mW3cod21ZT1A75ga9BmePkCcdJBfzthiGmVH8",
  "key14": "4SQ1PPAQViHK5cqsfzdCNmyVP9DZ9WDYGYyLubpWL6ufGHHdNmQrRLcJLkb7WrEn65pMVCHfPAsLN2TKjJv3KfhG",
  "key15": "3g9yCHT39VZzcFiTHvzG6iuJUS3hWuayZtsNkFTigiHrAoN3WhSUgGpKaa1HgeqkNKt235sbFGgcX2RHdDVGhZU6",
  "key16": "i9ccg7DoK64i1EJ3c68JMx1PCZQHnytUeeHAGAXJdhgQoJzKVrxoqAw3W3pfuJGoNid6jjwLGriDjYe2jSgqdwA",
  "key17": "BTdSF9Yb8X4yFBqVQURrGgRewe9GrMoWtvPvhBht1xmSeGHbttDVw2jLSA7jfqirBCr6YcTMA5Ae9E3YBR7mHrD",
  "key18": "449FQ4crLMyk8U45CNCNt4AZSx5KWrLimCxDcVpr8DYkfKZhV42fFBuAkzLNhqhnFZJLkz5nyqFQDSLwdwfr7sGk",
  "key19": "5NTQdesqCjRsxt3aUg27xYbvYnVX7XCDDm17haUvnwrZNzcwCvnaSaJr8JYgYe8tn8uxhJJwtzrVb1rb5fmzMfWJ",
  "key20": "2FobbnLDmVX8To6ns76nbwaQXpz84fsVVsAmKSQZovDqZeYUAQ5S2c2ZHPufnWZCebrvbijNYVsHj3Yfea1FZUFq",
  "key21": "5Am8z9rHZh5gnxiufkRgqirJKxVJB8t12Hq4m5WiTmMFP2JAzNiFp5CPpX6TgRnctQUgGonokxzSbpeZy4JrakTM",
  "key22": "j9v2aSXiFY4Yp2VjNvLs3zx6aAoz3ZLDXrLHEiKnisXhWDwsHnyM4fpMZPqW1uLv47CJztMckXEnv4WhiQpNktW",
  "key23": "2gtG51cHBzcSN9QxPed2SJcQu2cL4wfS55aERteLwEJGuFm1QVzmkYZ3ZQ241xhwUrqmHKvro3nqYGaqCpECdDUU",
  "key24": "3h95kJ59NmsrLYv5fJbZ336CsGPTEL2AZkFf6wMomcaLxtzGEifqVb7WT325VEXXTMt6gcKRiA9S4aods2X2XrAY",
  "key25": "4wWo2UZZ1LLESePY5z5t2psAVoVhKXTWoVyz4D9mvqcZ6aEBYvxZt5EtqkhTD1GUtTtgRSnNQKoqryR239UsvJuT",
  "key26": "3ALtnR4x75QiuJM3NPCBWdZWKdQGMJQpf6hXpp83AQ4hqZykyz7f6z9UCvhYCZMHtanTszRL2sC9RNWnuwaphfwV",
  "key27": "4dJRJUfVk4aTEesohubYbfV5sUAEDBD8AeTXoddMGZUcNK37QvyTqEz77NkdS6TYVH8r8BbstqGtPbfPeuNGm4Bp",
  "key28": "fZpUbVyHDMKQeB4aC9vNDvyJUobxAgN1k7VXpnq2b7QJgZRuNY5fKFjevUVHE1wFHt2sogzqe5XE5Rb4tq1ZUKV",
  "key29": "2ZXMXyGyDZEdLkGniHsZkXSvGDBkoju9sneZCRP3e9NT7v4WusPzjzs6Gis1HhKnVpAMKPRXkdyuYvhxzKST9CPc",
  "key30": "tHzM9hWE1PAGgqL937dbBF6uFpaE7B2qL2S3ZsJUP4r71X7E7rKGvHHfpEDWdXtMJmXy7Rjmi9hoQ7tj3TzUEo2",
  "key31": "5N7Rq8gj82UCiT6FUJrWtLRqVSyLv76EDEWeRpzQdipjgPiLjqe8fCQSF2R6zPyYAXExasduc8iYqSaSXwHXpzmY",
  "key32": "Pd1yRgvw5H187qifb51APavLuwfdAE8QhMDQpgNDQaFs4XUJWuTkaA2dvvysbABAouNjToqwZaEQKViWxa4Xf1F",
  "key33": "4urcDRmLd3cTHYrbsjMp9wMen7DYrXo2k7UFfuVgwxDqSkS2U5q7VRbKxxQjrw5Lf2N1TDUjh24HDLCNqX9wGajB",
  "key34": "4Aa1Z9xsJtqAEtyZ5HQDiJE7iLYSVSzDckPSVaWdVdRkrj99qz4UR7WpysJakdGewag1pCD7oFqvGjK5MbiE33n8",
  "key35": "3sRDPgAop18Z8HPdKcunmckTjq9DU3yk1oyLSnCCvXqL13HjRNJWYaFoQXaY99UyuYzbX14EzryvAqGHEQjENg2Z"
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
