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
    "F7BQZSsY188MbbQ5WjWuiW9ct4xqr1UKyPMkwz4L49cbcdWrNSEjnJuiEFJJ6BFX2sbh2BoAmaLCSqWZ9nLWPmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C86QHZ8wCX7qXbMrHYgRP2HUWYtcYw3bBX3mcJK6VE1FnDbWJfkXRncvHwsJf2M6oxWSrQ8g1VG5XEefQ9ABDg3",
  "key1": "jNRRDM2EQMhvP83f6HawkDNtvahTY5M7qKQ9pu9qi1YsbKtbQjLEYWsXbkTuxvTojm2P5JDAMtZfyK7qfSNyRk5",
  "key2": "4wF5w3d4Eax8AtA3HhR5suZWHZ7rUB1V8qdUd7Noxn1h89jYKz8xY18YqdQKTNfQXR2sFe9DdSJoB7Ct1sVVPwDu",
  "key3": "5YENTT4NkoUbBZMmdEaBBYumfraFw7Uk7UdouZp6M4LtMuT49ZQSWToqyh2rLZ3K6i55BPj4pgtsUwWq2bVq7EES",
  "key4": "3q5hujnpTW9HPbLcui14HirHVxPC44b6kwzkS3rP8PUV4cmcxBWPvQmZvkFwBGSmcCYNsBA3AWBg2Dmy3w5vKmBx",
  "key5": "3KVhnpkCLTimiaPJtbULjXZugaTkgzqxa1ur5Mv9JBywWCaMBii6i99ZKmG5egbgy5Wf8HVEgCFNGMWWeoiKUCvD",
  "key6": "3s2NKKgrxiTkAVvLFVb5pxMG9CPx9KhQ9UZpZE36yy4Uw5JtuW4fbSKhDgkzE1Ww4ELgvd1GjchoCZNgx27rwk4w",
  "key7": "2yZKyKDgQYkVzQKskAgwiM3PURZMz8Q48REZr51MAq5y8gGgSRDX2W8wShhETC3Tsk5wkboHhQZeugNyVCnieRzP",
  "key8": "4GNixBoi53mtsof4VLM8cR7PxJju2QSY9Mb4i8Fx3qTY39ymNgkLRTchDUjaBHZdgDYaiUpWTJDq8poYgfNM8Gsr",
  "key9": "2w2RGYynog5kjfJ9v6mHQkw1iC828ywdx3wg5S546Fy4u6DgoZmdu6xeCGBefvBqHsx3NR1wQVhwnPf39vzuoBbt",
  "key10": "5WGWGmWBu8omk3dNvorD6temBnARG8g4nt75GjVL98d9W3E8XKGLnEfhoZrTabjTwBCQzTbJHS22t8uAfeenbYDn",
  "key11": "4jmQHehJgkJ5AQYsFMiGVQxYVDoKHkVtHaGYDBeJqPtEw3VwPQ5qeVjGZdFuWyLkdGghTzELJ6kYj63yKZ37bVYh",
  "key12": "2C6gv7qV6UNUTyqkkLduUA3yqCynu9DgqEqZXGat49BRiShKJnk2VLfbby77iX5bUSkAJTGFmibuJi3jja45tQmj",
  "key13": "3kKrFvoHz4JVGiKsuFyF3TRTeM1wmbNapoWSp4xhg21JXT3zFf7Qpi9m8Dxq2Dr6sScSfsQwnoA2Ct2EJ7hVhoxD",
  "key14": "2K2L5kXPGB8wg3gXMYmfYrru81LjRjtvzRaGirr4cioz4EHBxDMiVZYHH2oTcXEd3tk8udaDfGESyFT44JWwjqiT",
  "key15": "5onuhxTKzcc2JxXKV4xPBrcX7HuzjkNruNiBKsvtiS9U8QYxXEHLyauGfwYKdfP8uYaDcxPoeES2sq3WkvhZnWhV",
  "key16": "3uzKJJyPahgwfVkXZWSe4kBaRx6RgdbvKNiYPTxbunvkpTcZ1RTQFKR7c52Aqq8jTnU9WcrSt2u3JL2Yc56gpVDD",
  "key17": "5sB78arCMG8tN6aanah7egVwSqKo5uPeB9ba2VMbTeW6yK6xLxPvPrZ3k5AKW26jPk5w2dsui1ERNP4VVPZMi8aE",
  "key18": "cogAiYvrsRZJBjVUkDyokYa4GGVNmoobYW5Sqb2eXPumncANU3NBt8CCcxuAAQBE8ChDbUTMV4YjRbWvSuoQVaA",
  "key19": "37XkpPRaJ7dxzK6oeWkKSXtjJUX5Z7nFc1K32dornkRdo2LdYus9qeawMj2Z9aFhjXEFZ4C7FnAqbjHP463QvhvJ",
  "key20": "3FgqsoGCnzUKqVJChA6dhUpv43eFebHWmTJfr84kFnBqY4GwqFtHR2i6Z6QvbgC96cJ4wjnnxxunRpyWKf9P3tU",
  "key21": "5MU2JDULSZktjNfwDpMYqrKrueQgKifBVmZbyF8sBxf5XCvMwFLTtiB2PSMefvT4XyQWWhJfpNbBEsLyUALAXBjJ",
  "key22": "9PCXTYKEkGwXvWqQQin3yGoC36YwxCfG8vTLLgrmXZDmBoTp24cRzw3P7yuXDuNLuJbqCmZJ9XhoqhxKNdzH16m",
  "key23": "2GXCRr7Uh1eXCrNZ7qucMJnqeDGpbRJKiengiWCoCfmahUoFtSjAsS5tPHeDkGC9hjUEQJac4CMrnUX1JfU4pL5S",
  "key24": "4KrRXioPdqqftSSEKV47yrej9ZLCU3kFhTw99sxGqQVm6FFMHnHR6GRkMdw7fWuXxRJYoCtEeB33GtmzVSXZEBzM",
  "key25": "48UZGoLRUKTgLkkpH5jYq1WdTkQLMcVDk4zdrjwBs1GxZMhSnHmNXowTVUzMk3dXGojzNZzt8uafuvnmw3WNiq5u",
  "key26": "3GJhxBRxDQQtYz3WgFGYz5SkK4d9ZeGN5hUBYenpmYxxE5jw1t7fDReemgDquj6sTwwCAnsjw7KhKVhgtzgZTQgq",
  "key27": "4HRhHa8W6k5VKNA88AxXQoEs6egPKGZ2e1cDME6KN598vdjDonhTe2ieoTwX1FoYh9D5TTmeEz5xMQqucC1fW25r",
  "key28": "3RzWWPC5Sei5HfwmaytkFNYF54BrwmtzYNSBhQTZdAtWed6wNj2k67KH3yC3ugDHo1NpMf82tj5ADvU59agibxbq",
  "key29": "55Hj3Ds53RTTQUNkpWBvpvPDuxp3ZA74v1PaJchiQnxufzEPuJx5RqgetfGgGg2hRdfTRQSjUFy6DSY1ocTYDgSq",
  "key30": "2mXXp69Ky7gzzsi9N9HJyeyVsK86WiNeo16DJkMQtAeXiWxAFiy2sT4DYZChSBCjatZdR529hvVxT8MMSYWMgg5w",
  "key31": "W3kBJvgwaWYc9K2dvfW25uL789XfgB8j7U3A3EEM81bFEF8BuXKawjRupvCQL9ou7nD4q7TrfKe2dk6yN75i1GW"
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
