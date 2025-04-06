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
    "49g4zgMWm1kDGiVgpuw2xrvcwto45dQtxKRHJLXWLFGXiKiyhh5NbQC7ghCCYif7LQThhmJyi25DcdQMwJvsAKv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2id7HiSdAfLLtHYYM44NAKmtKH6ea8nVvF8617zRk5ochAitn9q82gZKegvsAZRZtQ6666FNu4NMdwuV8ouEjSso",
  "key1": "3amnv4u8LHdfo7vgbUjP5U9pxQJBv1rzDFHTi33QR3z21931KQMuPPt1Vaqd4iSrsgbqJQa4GtFpkZE1nHTBFjmS",
  "key2": "a8pqKSK35vKNRetiEL7LDmWNLPZqMCVn7JgE2mRBf5XsvVmorosp1VGfunQCgmC4V1p27xpwq5Khy8M521tSVak",
  "key3": "4X5T5uqWm9KVicrAQhigLLQsAXP9URV9GW6h1DZ9rbQtKccSZKBPoDFSddDtUVEYCEjYvw4ZjhcL7ADUx7oZcz8p",
  "key4": "3BsyAZXERXBjsBdAbnRtttfLtZUfQ55Uf891itY4oKBAumu4wkbv3iU8644pXjgTtJha1Gxu74jenNhS1VxNR2XZ",
  "key5": "4USvaqwJiMhNY8k211m7Q7CfLrQY4mBTV4NxNyLrp1b1ZCxtHz5HzPFHytGyCLQQQvxgADJ9kUe6aDoBSZdPm8Wp",
  "key6": "iEmHx7dVTGPRE1cF69Nr1YVySf7T2ziiXD5zrWivW6Kdd7D3oM4xXdwxV9jKRGxQ1FYKsEeb1AYDjGu6W6jNSZU",
  "key7": "5HTspSDShPKJcaG2i8yYFfa34jUBw9x1kinx5ouLZhGCHTHF1z81bV6ym8MHyfK9wQD5TxSzghH7Uv8hP9nnEk76",
  "key8": "5WGVbK84kmCWQxY88Es1aKTfgYStdoftd1QAdhN8FMmCGQEPTSNCgUhi2mohFSk8h1mQgmoMLivixFrQPhP9tFB1",
  "key9": "3VeweUMPkupnBJNVR2ghZKXYUzibCUr75Vxqo2pKG2EPVRunczBDgCVeM3C5uzip34Dq387VeLfrzKS9GCyhi4n2",
  "key10": "25PV7y1itkysFvYu318P796ZS4ZruQwKoN8iTwjLerXNfwwkUWYy9A7Ng4i5u6him9YtBVEhDJKqnN15CXR42h23",
  "key11": "56UCuJXbwUsDDVS9Gxao1Z9MW3xADZm4quvLoXdT1x11vEAiwanfm8n5j1C2xRLduiDpn8vutCzdnjbyjA5pCM9R",
  "key12": "2iybwioz3mizD4bBs9ouGrH2ZrzCiZwcXC34xoSTWVTC3AJ6PRLyDPpL4TqbngdVUNjwh6MchtobaKqtFFxaaCH5",
  "key13": "gLjKv2TNExGKQgx65pmexuK8Mi8oqzGeYCXJQ46QMjbgVpQi2Q3F2MzBvnwtyTTyVCf9kToZ6FjquFC7wa3nqCC",
  "key14": "5AHigPoDgrrT73K4ofymXXZjEnGrcbd6uMw8iNc4QkwdJEWq4zCdLsuNiv1uoaYF96UPUKgqhrdpxzmPJkkvarjm",
  "key15": "3qxapiwmxXDjQ2WbxegYS8N9wSaomG5oe9P49tTWbKVUDcmKDGvwYQ58pc933FjXA7ydTtt8FSJc6Tdip5JVFJoz",
  "key16": "4ndRHiuLYpsSJ1YSqV6Mt6j1YygnmCpG2PijoaAt2cy5Qr3qkfHaG4SZict1nChRUwYimvQaXcJZ4k9tp8qpzDSy",
  "key17": "49fze8AbdZLpdQTS4EgtLfPus8278B7vH8Zt1bawgahZf6o9DfY5Dks2uoVszqaLigbHGSD2fvBXEHKXPqEX6Q1t",
  "key18": "4sgjDyvJgk9igHfTz9NaB3p7bhY8yjxGYwyhGz4yvLfyMCkF41Q71GGwtZfPck75Hw2U8Ed49MjPGsYRC5wo1gvH",
  "key19": "4HZexRpBmaP4fj4qBCiKW3VjbDbMn5RzkmxcmmGr7j3iQpkX1PGwqvWpayjcL4uEpCmaXVXMgiRRANtMuQgjCaAC",
  "key20": "36HaZCAKJjEfi6jqBCqMnrKFf3xssyCBiiLcg7cX7t5MbvBTn7jM5kcX9bkondukuGUTPbMkyDhejV6rPkrDS8hc",
  "key21": "21wEPWWh6Yd91SMWYbKaNkubHuiDqcXUb4VjEp3oCo6eRrScSLAUuNNVyzSigqA7vyQhYap2NjvdWrFiRhiYbwNb",
  "key22": "ixnAtoHJK5iJgMv2J4WnqhYTEYmVTSAdmjv2WwNZ29yTzYFzDTY5KFGiArzz6wXyvJuncop7BivYLibWWWxJ4zG",
  "key23": "54xDVJL2umigjGPMetbwRjKhYfA2jDHdjdjS5ckFfPRECVXBJX7M1BMjUAy6px7e9kNm67cq7nd6XwcAoRjxC5SX",
  "key24": "27yYneR4KuxqVoa5nt175aBd6qkExPYYXEXptFQgiUR3z1RaAGKWY8MnLkKEEKnoiW9jLSeyAzLAd2yHQfegxCzy",
  "key25": "2YXER7U9g8jo2R7KnXiYkkqRFv1G1GaKGQJADGNSQNBv9bBiQZJaaMtdbbju1rhCKq6m6pG5KeLDMMjDstMjudYX",
  "key26": "2TzhdRXZ5jssgcBX22WU8hEA7HiiB65aGiPaLwBb3zYzduo1ATpK6n1S6FLoAxoqftM8VgNiJfqSd3NzJAdnYJPZ",
  "key27": "4be6gPw5Cwa4UjiXgnoPibp8QH9XmfB8DArkc52vWS2DVedU3SVJ162xVbYBqgQjJQ6hvWBhxmj6HrhiRYbQXjFP",
  "key28": "2cETLcLxfmmJijciSoSJKFr2Py7Z7vb5UeyC7Rw5UCKA5pgDQ4S9sQqLw1vYZemAm3Cw9fxFi7KwdzaSdbf7KXK2",
  "key29": "4NbxewDqFaTtDKjHMakitoa2Sk2aCAzmuhJi6Ru5LXr7ReLnZfPtYfR35HW3HqqvyrUFwxk3MRpFrRD1Vd6niZn8",
  "key30": "8ZNeTbDL1Zx9wdqdGfD6y6rDcb6A2gxhNixEWtknat5tH2KtwmGupayy19ecVu9t4JHGar2wUrgxsyoWoNtXmXr",
  "key31": "53Z5YWV6NxDkkhKu6iG8gATmqDVzKgjjfmHDnBUdPvi8nBX7FenL2RGSop3YV6nLFZpWDPdoGnPeTQxgndG5mfQo",
  "key32": "3miarux9dGnF5DXLMdq56gYC6chsrtMgPQKXmcjNE6VoeXjojakXy4iNmc6BgLMQYVhwZzNWgjWuZ7VDaLKdprdZ"
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
