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
    "3rUEMShYf6c8v3tUe74HhKVqDJ2cNZhPVTqM8izTKVFBVi3z8HUqb3yQR4UBzXwWwL69ovjYZRzSsSe2G8PLBBvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pe5VJvBjyCbNu1ZwYUKfqx8rtUnaVsHdTWxhYcYpEW6mPC4h5xhCZ3Qf4M51cHJCs6pUdw2edNRQrQgp3PBhJGr",
  "key1": "x4kJfcB5aHh3yiq9871pbdusnkmDKjrSkp1o9aJq7Ax91FMgMZPWN31yr9aMee1nkYGriiJXa4i9XcwdiHFif7N",
  "key2": "3cP2rfG5CjKfk7q6TKJFEGob3RiMqokDqcsVrLVy9CX46CXUahSWrt2JJygroERoUtgvX8Rz7eEGxREg8jfaA368",
  "key3": "2YCftaVMmwu5y43t74g4fRmxVGMN8oHZaPYRwthqJhZxGp7xQic7b6A6pRVzfzZa2PLSC1gxi7Q5Xf1N5sw3dsPR",
  "key4": "42xqf2VD3MMqEG3Np4S7mriBmySkFa95bDsfrd4Rd8tYUP7ZRW8rS1xER2h4W2zSqDzuX2seBTbDuy332X3pJgTu",
  "key5": "y9gk2vBnDAHTvAXucNy7AATamikLQyXKMqkGcpy6Wq4FoMX4TpXEPkjeNELDd5Ar5trCFHWFfL7uQRQvFSKkEpa",
  "key6": "5JUrqpGy6MCPcCMf7edmDE5FN2HFC4Ay8eofyY96Wr3w9iLNU8RuqzZZpXbepxCguetqFKpw1ZDa5jzK7cW3NoVp",
  "key7": "2eR7AEB1yLRhn4ybqLxrTPUPxydVGH36Qb751tuPVqKv9qtE2AYTK9hEm7Ar9hKbuo4WW1m9D8LiBPLfzD8hDG3h",
  "key8": "2iV9V3m8vMPTHQNWBuWzXdr2tCt1xZ48eYxWjzm15Nx7cXTQYyMpGe8QGU2NbNCW5ZTuiDiW1VGRqH5fbSzakg1d",
  "key9": "3P98CF1bDoBnsovwK8tuDUY6VkRirUfN2ran6FQznhyVBKPPE2ZEN99AxxgUMj2X14PRFXby9CK2WGQrgnmPD82p",
  "key10": "5NAdRwwA675p191Fbk2qWEJt9JrV7ij3RuRgSpNzNaBNNgrkcJdxMBTEXHM7eA9hqcXWhHbxUTe4Rk5G86BxWs8J",
  "key11": "3jbMxytMkPwiD4XXr2aFHHAgARqYGPb1Xrq1mGAxJTZTyWZp7nGdXLojK4QWEnG2CNJiwmjnardtKQ2XG1uWUVit",
  "key12": "3Zr1k7CzBKXnBt5r1w1FUUafxJ3Sr5sCwEj224Xj94ZkAhRhDAAkLNdip1jHHKEebPZ19PpwrwsF3mvuune7JGET",
  "key13": "416kYjRdeChCoH3NzdtM3XfpoHJ5VccFdV3vQgZUQhbdjQ7FcuBdTXvtCYohfJNJCZFsfmRTWo3XAmxbJGtCuyNc",
  "key14": "8cUE7WTCKSabLgKwif6VqkTpzS2CsFmHrLiuAb2pJdoya3onQp2hTa8W1ytmYDLzUgFx94ExuUa7YKzmPZk8UVj",
  "key15": "45GBq651wY63MbfejsAmXQNpjerSPgp9venu5skvCZYrm1VuDisLNxFypmDtiCubQjd86n6UKBgda72A4W5PMFg3",
  "key16": "2xkPrdr6ABW5P5yt1nrgeUBqFCGScqnovuayXuwuFERwsE1x6WsPoqDAPCUfe2d9jZnUHb2nRTTaPe3Puq3qML22",
  "key17": "uJhK4F9zXeTNyxmwAsZKVUYqDsusGcgZJRxBKYRyK5Qo8Qpqp2zFgmfYQw27qYK1rhzwieaBqvSvUG6gd9Edq79",
  "key18": "4KLeddSkWVpQKEq8Prtb9tSUZYrdzJmpf3zkpbM1heJXNbbj5m6vUuYNEF79JGgoQm9bbhFtHSnLGbYCM8Aav2hE",
  "key19": "2DDT4XzM6TSMegf8Lzwj9zfRhFzEMau7YuyXa4FNKu7XiZ1M6qSCA3xHQuXCp1fmP1PzJj6udgbaTqCC4g9aMDvh",
  "key20": "5WX1E9hpwRRX2p82wS77VdSQ2UAzTrohKD4FdnhtzjEPKVvHXFeBQKXqE3gbNNMRCZsLsjrNAZPkezDdXumNevX5",
  "key21": "2fPXu6yRAnVtkBzg7opHHhqWCjPuNz7ad91AuZaKKX6xnTFoEGVaZvDoznTitpLhDLNcUb4W9ReuME8KbzcZNmkx",
  "key22": "2yFUUwqYsjhdaHH9tdDNa5P2v5FFPgsMQuNaLaESxtokEe9rRkcUB47TXnj4Upr9Wgr2YAFZxHyH18KVnwtSwEQo",
  "key23": "3sLeQTSeiswdqzRFj79wsa7CCDmdC11GMHuuVvu7znTfbga6PWdzw6xPF72Jm4yP1SqopTTiLXkqvKLkgoqHHpQn",
  "key24": "2cTuNZXp1dDn92apd96o6mLS2PFtTRju61nXkLHLNrrjDTZRkHFBiwTHyH4drfWNYv32yD9oDzEzx3SexSF5y4AG",
  "key25": "5JyLRc9uDh6bVyf7rXTYmPT5aDoijHfDH4dwxXxSYSj4K37tkqNkLARCrekmRXHr4D9kBMtLLANheKuRgyeoZfLj",
  "key26": "Vokpv872P4wGQhQULfXawwKRp4nRQC84V9C5MRbxrKMF5qsxAQFmuN4LyzWgk8a2tabghskXVMWyKoVKHPgob29",
  "key27": "5UwGCEWcJkmGB9kViQQSjv6Uy6rdYB4xXjbtEe5FJtqtcGsH7yMC5KXXvEuZrNCpvAp4WPVMg7u1kKJgkA638WyE",
  "key28": "36KsvMZCgyjk8ypNxGyQdwGgdwjDG9YiZgmhbJfENNQ6ZqaWNXq5yZVLeS6P6fxaHu9mU3goSeXiD7SZttm4eQd4",
  "key29": "4eYFsFSCU8JxKcnfn1v6bj17uXSa6LDwJHnU67avbbsqD5N28SScYHX4eUf3Swk8EbJGQXgKiupSkevUJzWSTUAP",
  "key30": "4uuKSBXQ9Ncv1zW1jGWY8bZbYTGnYf1J8SqHR6ydUVNYDFnfecMPeSUhXEnpxTW4RUDj2HzEWLk94UGnkmKb8tWs",
  "key31": "ARhcNtTQotvqQvMm5TVoAfdYtio455DXsA8K38cAHnYQBovB7urgPMYw5dF1F65fxSCB1v33Cfe5WLLRUwUJpRK",
  "key32": "4EC3HFjMfno2NYXdgEX3159DhJpoWqPkkikk3bJx8D2bYc7CcDiZ8gVx5DcyFs8SSBDFNF4kLS2GPawq7imFjWjN",
  "key33": "2AiYSGjCAJ5U5z4VzzkrAVJZkfFzE8dtvH4fvxPoeLyfWBLZwXeHxNErSGkg1a6h7sekekULsuATSi6JmYKCWbvy"
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
