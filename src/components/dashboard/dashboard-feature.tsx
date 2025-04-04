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
    "4CoEfExF6Bjbb4Nn8vywgVx53Mu72Hbo7hQcGcSt3pMiigV592sc1teRzfpDRb4q4pRUtoL9KABv8NpXSQJzCsQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvWVbssrnG386BvFzTEMDew217qzLv3iSrYR7ELwXpywpY3hVeCw6Cy9GpG2QNaeAv2tQbdVt5ATktAQBRzJcoq",
  "key1": "2wKg7nPmd9HFaCXo35CKqPQXUmEtvd5vx4pXm7iD2SnQVmwcwydG79nBSoVMMzYwYLnxLfEMHu4NMQsV6o7sZr2v",
  "key2": "2tm1FtupUQqVP9E5NqRwrdkULyUgMsNFqargtFyWKyeD5JNxtKrWSNwbHsosy4i21a46CEakmzbsYw4XVhA6Qhtx",
  "key3": "3n3mpYuQiPce1AovECLGWjzA1szWcTTw2EcvrBYKv871UBNFAD6nE3nyZg3HtpgGHZfrGaENkYCXG2yNuyefHdFe",
  "key4": "4Rcd5aCib1TgXmMYa5GjtKsW7Mvseb8K9KBf9NfjGX6vFxzHQKjKj4eum4wKBLqCeKrEVQ4fupyiJ7sx37xjSZzm",
  "key5": "z2jLrzwUUf27ApEVWp8RY3pFiUmagQeHyHnxvSifZ3V8QTfBwk7tr6KTZJmKx65eCq6v7QsBsQCLNbV4RiNLA53",
  "key6": "4tar5aJZiEuPDmaow4RE6HjbqNTn1eSfpuDy82QvXojVJRDr3RcuviQ8r5YhsjgoBiHgquPpMvAHFq1acdtTiEDf",
  "key7": "4HoxR8vXpkVRSvyyiFJUG3yBqUq7MRwwphwnmPovQaTemYcyB7MfGJQW2HX9bThqk7wagwDkBm78Dn6cbHje3EPS",
  "key8": "3i4qBwg3ZSbfQD2AxiePYr3nHpqxydbK9iTXQsG4ZJi4Eja4TcviCgDFtUYXjSa8cBN4AjiHwqDzABHWmwTCx5jW",
  "key9": "253MdoXz6QFtp5Nuk6ALgCkceVFAY7erEc9KGRoEjHh5DgZiBfUVQmTryetsP1xvJPzfiRbxiEQd2W2DGcaS1G5y",
  "key10": "3UKAteHcdosTZMhGA1gvXHj5CobDGLFtvUJeQ3HVMSEM841pBTAoCLzinCyCyeMxUDt7QJLyQgetpDaBfXJBALD8",
  "key11": "5nBdBJNVfaRtZBQesdnMQNCNbpQqgXkwiGRB7uvcunUsTDKqUziJimGcCbsr3tUdeQQa9zKeSfzQQQmua5uxngqv",
  "key12": "3TaJJzgb8gymRZimXJKxXUtK4QPzFRACwXbXwcpfjch6G9t7PF7EEwRdLiwCmxZ7AZbAQD24NCfoczCyAALRDBM4",
  "key13": "5EzTkSS1DJf9foDZNHSJV4A5EQfZqx9mYQNV69Uec8yAWELeLJiAkdQTus7vpnGST1RfbrdTYDZmYhwSieMR1WXu",
  "key14": "4RMKrfezw5wJDkx9pPvm5JdNRcdtuEwaMXsQHeEUSQ7Jgqps2AGdhCDY8tbMHjTr66KNyRU41J88JzGphMn7p2Fn",
  "key15": "3hSZ5DuQAF24g2vtCTwsU9CD9Mb46Wx2phYw5AEM7rLFE3xfRdiGP5PK3NBj4Bt3xtPyXs1zS1LQbnkNZuHyD2iv",
  "key16": "3qmj313jh6x4hoCnU5ah3bBYBzNM8psS1Lb57R77hZjnwUwU8FNtx56yAwdFcDKfSrqTvo6XuS6U2dvgv7u3dpJw",
  "key17": "38E7TjTz3TxFgAzxNyghFj7Y5ZZNoCkuDqC6jvsJXrByvwAJuGB1kBVMfLPnDWSVm4ai4hK4y54m8Db98vsQRfEc",
  "key18": "5CVHUqHAQWGi3RzMYHetknu7aztVkNJ6C2H57byWnKMjgwUGV61burY3TAa1kEv7c7Fx3PJ9LgqpBKjzHUYuscyV",
  "key19": "3APurjgAD1uCQgVTFaxhFpRaEcoqQAxT9BCs6XPPmnpE3A2q1gYm4awfoYyhZ66SPYwc3CYcLdM6A9xZEUdVeACz",
  "key20": "3mpgog5F11baRefCCwPEvHD9avWyV4hh5foBB7ykBkJxYz2nDkrvUd9AN14XSr7oYZaoXVhppLGRs7En1LXCZiYW",
  "key21": "5GdkJrtzWTUQSdhTA1DyugYnpcEXarvapoAGjwqQHtoE8QpC3UsbSo6Dd3U5N2D3x9vwHMQVUJvM6uTZMjgK5Go4",
  "key22": "4fGuWFTXZn7BPqojbjHCK9ELgAfbK3kTzLhaZBtDmDfCVnHv6r366GsGAWSCo2DV2zbrezc1TbyWWnSTp9koisKW",
  "key23": "4n8CarwxvDRyzo5GRZcFZUoLUEYzv1Aw3PVHmAYKi7rxwA6eFMNAMo7tg8mkgKoMVnUNSKKbgSPni4a5t6JcyeYi",
  "key24": "4ANaGuVRTTyzVzrSdyp75Jq2QCnQBBiDkR1Q1rrLeHUhPSLTPctPVKKPqXTj5V4UDHNB4sPnq2MPUjP5oNF52rph",
  "key25": "4nTAYbwmgVJvtt3bZ4dGHfM4dHua73iqruZo9ASFn1JWADabaZ6XFgXqSw8GQtrN7vg67yT31UQKer6dLqNd8Eer",
  "key26": "ynnQJiXY31exbm9eCUT1hX5Nch8keUvoxtVRsgpxGNVsJfP6vvjgLrpufy2oDhUHLhyJYCRCKiVnuzLAqLFEuZT",
  "key27": "2ehBFDk6B5NR8pKvEA9P1ZJwRGWpbHXQVMW5noqTA8MXVeAdub1imFv8Gt3iS3mnXy4oxezvULx9aVRCUELV87RU",
  "key28": "33JpoAdQE6VhChzkeBX8etmVHesBkskaCHNQ3HCaRKq9iiZdBgBaiNw43QXNQPWWrRXaExiB1dnmPxCod8MttugM",
  "key29": "5hcohc4bSDxcBvTjLVTKz3cCjBrU9tMJT81DSz9eNNNHt2waCwAW7myT39jQ3dGDHmLK3mwbPTubCjYgDyubY1Dz",
  "key30": "3VdHYsA5FapRwA83Etx8PaVpGxYfc4GzbZeRC2L49L6uNd5X442XJf4FWhJ2ZoZe1UvSb69MdMshgkRe81a1z9d4",
  "key31": "ngLepxgTdFvtnQtwzPxwdMGnyg2K34kdEhKQUgCdZUVc3ai1pemSzSPF7Fnf8nUgih2r4AFCgZdabGggnNE8Ae3",
  "key32": "3VZFFxjXLgy9cZKKsvZnticap8EFbSfiwEJ6QnCrD2EkdW7A1DxMGbM7aj2VGcJNUfqb61geJKYtnNeFxvi4GLuU",
  "key33": "4942EKjPRDpiTS5NTiLPYUsLCQiZQg9LskgXaGCX6krbRRkvvNFvuqyzJVHFZv57kSjbb5zYgkhzr1vpDyM9o9XA",
  "key34": "5MDMd7HvsHY1aZPTaUkBBTfdbY3RjYTaxnEnfABHQbGuthroyGqujg8q6imMtKqzbV5PzQzm6wG7uAKgaCdBSK11"
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
