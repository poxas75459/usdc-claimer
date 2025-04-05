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
    "2EriPcbDSL8JwbYjYtHdKnqGVQJC4uVXFk3d3QVA3N6HcLbuFGpqdrKieBcMrwUdt1ojqGGrVL8r2bjrfaBXzrBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K72dgB5qeSXsemwX7FY5jzzqA9egeW3DQkpXNjMaCZHe5WmCy7njF3VbtRgjQqmZ5D3nLKp4mCpEsLCS8QBuu2D",
  "key1": "5cfZY8fGAeD2dMxRozvqcsGfgtQz4UehjBUwYuorg6ZAqqDwPCPjedapMg2aKdA8yffrHmGttXDuKVvF9WqqXbaw",
  "key2": "51XrohvMFX8gwsaVxQytupKBH2GNPZtXjw2AqCoST6EpPqsiAMZpL1F3fhySQRZPzBnQcFzTDGrCgrHQGR22RcaV",
  "key3": "52e3KHTV14Mjc7FH834yzhbv25aePkS1eAPSnNKXFzAMX4mdmG27BS1ophraRYpuBnzUHbihekyu6hxycEa7pBA1",
  "key4": "2xwdp3PdMA3W1R99S54w9NC4wWsttk28edKQUmLYhRhdwEUUtVFZqFcucgtE1BsvzQxnGSXWTSgdXYZJFEUPXdGq",
  "key5": "5RjbV44tDVKEXgJFA2HbKRN14bPY1UXFryrParM9cpWPZYqKiCXLEBQ6hSJeSkXdBXLRZqVC5XoVriq6bG2FXehN",
  "key6": "NrnNjsiDa87icQBiXeP9CeF9n17sxbRZ2SqzzrEsetYEcTo8dfMkRa5wtkhC1z3tTsoxYNsapzw1hB3wDrZRTcc",
  "key7": "2PV95fiG5UwoddzSTkfJTXZ5xiELw5oiG2RC8qer2GXrFxzdL4RKvirwBeMwPsnrWRbcyod6QeXrs3eHHsjVsvGf",
  "key8": "5ncNYzNnYSmy8pGBxsdN11YrvP34CcEFonMivv6VGsa8YjM8sf4R4ZxinksCD3YFxXg6ULpN5xHXvuFMCbjoatQN",
  "key9": "mGRxT5ax3agTddRi5uFmKbBJXeSzWc8frVyi93egUaYKgjnMRXCsL7bNTe796Eap61bLXDXw8EbrkkKnWfsq3Vg",
  "key10": "3V2L6SadcPsjog9qtEVy9TobVTZyUY1dvkAMNEfx8XMUcGRpVJeKTGcGcKqK223SmiJj7Z461FptpuvJ9tqk2KAG",
  "key11": "2MjqWXqHFUxjW6KqhGD7A6CuYhieyzTvp1BrmvXK8DcNRE3YkvGR4EZpnokPzL4hcVAnUKwXVzDuPKTUUcEg98Cd",
  "key12": "4uLSvjDqPYD53BT4tSEs6gp8ZxVaP27XpKfmDxK55RMYWNPAyBUHLvsc7rJf2Cd5gsEf71WevnRasKXY7VV7TBGt",
  "key13": "f8eMM16QeLnnvXi4Ae2MNt8H9aSYPPubX6VSpJFhFENXECHskX6F4MnbmjFMxPJqBemqqZTwsE6HKBmDV8bPrn3",
  "key14": "4o4wPzpwigpDwrZzy8YqTobrp2KqyfiBpSzjAtcUovyUDRkhyyJBSbrsj4HWx9Euf5o2mNTyPStXUwBcYzzzKBxj",
  "key15": "35xVjh6y71uTjfWjUV5qxnRhBaYr43Fg6BEQXUVhA3EmeK8CDRj5UrTG8H7Mo8rPcuEU94akt81HQhHcK5xhewyV",
  "key16": "4KPtTspW8FLwoB1a1sbfEgeKnciovZo7Rqp6cnwiSik49eiBRXZgeK5xu5G2u45Jfc3vfzPsaZNb2XrVRnp63eGR",
  "key17": "3hszXPqHuGo1Xkca3RvXBLcwszwwnk76Tz5TT9nTruTzbWjvnzALMGcT34Pr4myFKFzPEWpT4smufo9iLf4ad3Ws",
  "key18": "2yqzoWsphrTLY6oN65HcJqrBK9SzrrcLUY19RTzUgGCpixVc7w1K336Q9bvBDZU6ucbGUnzzZcxxsMosFsbm5u1G",
  "key19": "2rAVM7JWn4qoLPNJxwJtHNvKU7ZYZ9mzAH2L8qDC4nDhnNgDHkHAuSmRrjsWtHgZpCzFbXJwT23jM9ZTpRUZvJG3",
  "key20": "2RKEPo9bAL5zSsXdvzMbF5Qkks3zxvNoPFy8QhcthQCwHkpXw4VJJ5UdcRnqa5o3GRGn7BTj11PWNscMnkqS67ti",
  "key21": "4JbaLTR2b4wMJhngLWbccwpexx4FLSFHKqpC1FhNcX5u4FLza6jxK6xHBgTQeUMWzKYeftkxTPonbRB1NMJd2UzA",
  "key22": "5g2Qk9xi43xuQ7NbtGnsNzNyGihDDFFpYF8jXS3PfzTzcFUFUdm7vi1at8SSreo6PZQhoDHZeR71pd7PDBTrfP6a",
  "key23": "obSa3ANP1TAxy8h1eTpvqgGSQ3TdWBVwVrh8BkP7hewEGtdZgNvAAuBM2hAiYDC6eWr3oQBLtd6Mxme3HEqqvNi",
  "key24": "67NsZ7QRfY29ejLgv5yGHPvWnU4sSrYszEsMy1L9N1xpP2qBn5CHmVEB66GiE6zezQHHrECgRfQ1NH26YhSBbfp6",
  "key25": "3oZtGAUkyZctoXcnW85crYsnvGQEce9FR5K4BNxHF9vZu7oNB3iwo5FzZDPMsqcoR7sceWtTFxYUgpvxtnPHLFRK",
  "key26": "pCsDTv4EJ2J3a924G8oZXDmzC7fiq9KKEE8xyTsYYkvddKM4efHNeFFZwhq73HUVNbdZTRf17rUP9Pdhap8DSYy",
  "key27": "4ztWGgCujcSUnEuYfF7TKvAhtRWm8JGkdq94TzrBfp6kcR2dWneScUu56C5nELzbuJJJcTpfTVWpF8LbfRf2EWgH",
  "key28": "3eVNJz5tU5Y7m7jo97Y2PMXHoh13LtX5hLWAz7x84Efw4PurHc7WrDxmfezShjAUEmRfmC7V8hEDxy5KDVcpv69B",
  "key29": "8VCABcefWSGWNJpbJ4nKSPE6zrHQQmYGG7rN8DETzLg2xmNRpvjimJfrfPY37Nc1gkrUr3NdJDZZnpdTuGNL297",
  "key30": "61Wpr2QBuHtgGZ8YrtrcWEU7jSrD7B6kpQpA3kx6Tpfj976bGk4uwNQxHtDYQcfhwNfNjPcx33MJJcHweeHujtEX",
  "key31": "2pnhxYjWCaAvT6A6ykkPUjn6L64FCEAmpctd3aHQQeSzuZH91efAt2UYCsdELZrRFnn6hqevbzrq6LbqhZSjWBdg",
  "key32": "2jCzi5E2Xw4496ccLQrL7jERFTZqJQoewbj29SfVJTpUVLt8toNiXTbpjaXzBDELvVA4Bu4ihYj5SYg1JjTwD79A",
  "key33": "2teEr98bhekB93bbLbLEFuSEZYqZEtVngEwBEEWpXmvKTyiu1SdcwmvZ8qinniGN88tnSnmW9Vg6fxpcQv7iBnGw",
  "key34": "4J6kAdBbtxMQMwcQQpAsx31jPzyHeuzBL98zad72G6AcpZYSQFv7gXomnZHdg2ZvZ6MEUi8DAbnAV8oLpsb2194L",
  "key35": "4GLdK3fYQQDkMQMpXoWYpk5byDwpGsw2F21dEBYPqPdwXiJv1FPgjJJUMUDEJDT6567dp18wPWqXsqmAHbuBjb1V",
  "key36": "4ec22HnmF7A5TBYPPZ1nWADMHtrYUvi8ecF8SQPCwmkythe55QyPtY41VfLF3enijeNqbtFksJehVnSvL2tHa2it"
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
