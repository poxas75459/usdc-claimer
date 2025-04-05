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
    "3dQ5ebKRmVJCSU2jDtMKHgZkHVEtgTdXwCLeVGvbxtjbsaMjhTN4pXB3nwCw7inTP2SmK8XNWdKMxk2c6vBMr64q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BwqhPmkYGdT3iRjLDXUxRL7x12zdN5GmqrTLUSmW3k3p5rFX6HjbABkfMCHsAWtvBJbuMqyqZ2oMhAtCGPmspP",
  "key1": "CErsq69pHi2VrPoYFVofN6mKU6DRSepjLRtWXCkXhgEeDuS31sdNeQQpm9ZfAwcyujP43JtUQxZeTPy9wvk2yDr",
  "key2": "471oV3rXS977YVxrXwxuxhQLrPG42UMmaPvdiEUFwYPcGm8SrUh2M5keZdnWxzEzwqtFdFs1zo3tE3rDVpnTc4tS",
  "key3": "3k9kgvfnAZqwQT19uNzM8rmusv5so8RXN5edELiQKjHjRSWpYg8GKu5h5Lvx876nAf8hTfAPPopHt2w5Von68Ymd",
  "key4": "3WQG6idWUNaNQDzPGxAbkzQNmTJte64AdvbGRboZhrxQir7Q7zzmmDhfvsebj6ECErX48kMWKTuEnkTXK2LyF87u",
  "key5": "3ibXocpktkCvYt7DizPmtkrH8eZyVvv5DwwFRxMcyzGUr3VsqKkuBJxxFfn1tiEgykw5BkcMHeYsrM3B1aLtDmio",
  "key6": "41QdU5eTiTAeBeDTYyrDfRgBa2tBYfGPDmThKru15kHfnxcMNKUh2r4oMsXs9SPYkePYceVYZwB2ERXK6k4mibyk",
  "key7": "2rBk5rpBnx1brjo6dX5CK6f7WaSQFhb6176zGVZ1H1RchZELpXAYq5qJCt8CD7c7MCXxtzLHbuMK9Tyr6gH1sZea",
  "key8": "EmNyX8K3pPoP4MuXTRKzThuuQGTeLonYuRXGBr9EdfvjgeaxRR7mbSxMocM1Woz2UAah4gXkd3CahfonqMQGru6",
  "key9": "FWngWnZbd7vHi9V2xaUdfcVcrYFwXD5G28PMtWrvjcAJGh16a3AewzcXtTtzNoJrwmeDY5xHF1tobAWdDYV2wLo",
  "key10": "5xo58tdy12PM458e96vEN2iXRL15RXwCej1rUdtnLNV6thKxsRUkwRg9tn7HmVDYGLKHkQvkDkySF2rNwtmyu3mj",
  "key11": "2Sjqf4KMh1pfdBM8Meu2RRDvpmi6f6JvVar7Fd7i7f1f3oPQkBqKbViBhaT5ZVuWihS6zjS1FABadTuXq5o3S7qa",
  "key12": "MNRaFzBLu4SUpm17U5nmpgmGHgjPeZBWkXrTAXZkaLqVxU5yW5XrBzvhfmTudEbvVRNeQn3JAz2f6eWWQRkZfUC",
  "key13": "3tqqCsvXigf3imTDA4yDnQbkrYu4P5cjTumfr4dV8bkFFgFBrFi9wNQsLguffBVUrQHpRxU7bcUn9KpdDJ4VR1Pq",
  "key14": "4ZsRgFSDU3rHhUoHxTuAXjKMxwgZQhFotQsCY9DjbsAiL1qMPJfMhqdwjmESWeuLMBeR4xwr8Q3pE4aYocdsUw1q",
  "key15": "Vcbh8RXzsMmDAk9WwZpkuEBZMCJ81UkYzguT3DvdbNoiyHfNzs2Qi7xnmJMpTu1XzW9vwQtU8da7rLu7m4UDRBZ",
  "key16": "665AfRTgcASef6YRW2PwmUp3wcnvfgL6z9s1Tm9qYm9N9G2zY9KvafQh3shPmxnQbwYarTBZ4uaQirj6WhTe5cpY",
  "key17": "2RYe3Vn5fZiq813StzsAfZ1ptSd5YiRmuoJqo75u4UQNPDe1momwVDE8sgkmrGfoBJi8CMsG4NUyjWnWJ6p4VvRu",
  "key18": "5EpcSj6quDEvj89T8KjZQjryRyCfw3q62JWBUmk416t61ba5nRXgXe3dW1H14HvnFG6QcKfg1GiFzzD3QYAsjFCz",
  "key19": "52gLKjKu4PQqs5t3fsniDWahNdp8qEsZGq3hPYohFbPXJLZ98HDz3qj3CSqr3JZWR13RK1DGBfoTXP45KRwWMiWo",
  "key20": "3vMcyKKvZKkJ7Vq8BEqg3HLMssmpjX8cYCXPTZYdGQTyKU8EjZ74hBXku3CtAWpy9jyFEqAr6Jeyh2PoGAYKvXXw",
  "key21": "2RR7cyrmHXCuHVRpvtZ19yuBtNQbmPa2eeZnxeihHL7zYVGthercaegZgm9Smsq7yq6Pf6xzXuaHSVEHFnjBYSNJ",
  "key22": "2hekjt6QtyNf8Cx3TBqDpq6QJtyzjSY3iJcrLwWiCFdKmbCYowmHetu9zyAd8osEpbaahZSH1SXMFd5skzu2QUHx",
  "key23": "oLPpYtqVWbDkroccuEHd9zPvgmovSo1cNa832otF4huaqDZaxt4QV4Y6YCcVD5g1ddLKULBrg5Crv5wVBmVGL4C",
  "key24": "5UVQqdB56DEiRMr6njAQEUE9YW2ithHC4CjgfgH7ZFNJrrCFT3beuCXnLh7tLADhihy7D8u5sQSRRqw8gCduBpXa",
  "key25": "3ciQWCN8Beryjt2Qa964rAbrg81TFC1udDgVaKB1N2NMQnZXsfA6jWitCNDYFMtXjRFddj34NCrVZXhYma61paVX",
  "key26": "ejXT645Z8R2hMWw4YHMH5EJ5k2XL5HWM2Z5KWY1ascHLkjGDNn7CDK4d4hj1o8xcAH2Raiyp224iU56zP779Stu",
  "key27": "5z4ZRe4mKnWuQnNfd8yt5EjvXTbMgvCXRsLtxzcSSngN6Z2bHdWkR6La8tTYPgLWofC55pjHQSqWf22AXd8WYTk4",
  "key28": "316LUhaBAGAZRMTN1Hqp752YtRsqBsUHyLnLjMXT2XEVexYTtzEqF8AwdWzNjDcvELRr7EQGMF2mBeg8YmwfP2wd"
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
