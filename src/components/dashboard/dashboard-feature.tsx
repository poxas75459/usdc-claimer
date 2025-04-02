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
    "4Go8VZZrpheNd2DPUiF9NHBYsCo9PmfN3creniYJNqPagTDj1Me6YbvRt2K9PTrajUAYbbUvszYHuxvepZHixGnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFDAzSsKFaWJwxAcR7yRnueLvRve3jTjJErkan44NEF2pumdUVP9BW8i7dE749DHMDQ3pCMLBFm9L9aPfuPGdbk",
  "key1": "2TZA2eFVLqTUp3ypQJCsVjCJrkiM8yGsQKYDLkkorffWtuea5nqwtUjFd6n6qASoruopW6LQC1oN73f5TxkSRmpt",
  "key2": "2TDupDBdpfS5S3sjiKQymtyYjYhf9FpQMyixPymWqYCdJ6vyvA3aCRRSL2MVcFZq9YjXTuwyXbEktgZ1rHYUS58k",
  "key3": "5fU3tGPXAwFbxJiD9MocsEG4oEf4vuJRuFBe8wJcUjtNbfKRMcbPyCpYVM1NgmVEHPDTP6sxHixhvMm1EpU8R9ov",
  "key4": "D8cuTeiJ9wCFSZLF9mcZjmvWj1g9zst7BP4DqtNYmEf4RsNCbP6cHToAzfq8bqNRPmiDK1fXyVJJh2Zm9Wyp4BG",
  "key5": "5G9R2BjtaRFUeQfKxH33fQ3RZs33mvcNENrriwTcWVkFcMQ4GLTzHiwBRUnxwgKXXHeLqw4oGfJV53sz1iSyJQQh",
  "key6": "51HCoEZWHw9BLpt31Rjazz7VNBQ7RbnuEMDcUK5NL1mmG2ijiMcjXybfrxWXMjZ7JQ3Azjx4b7mhEJo9gzzpVfVJ",
  "key7": "3vyfYMCTu4RNquLH6TU2GJKwMJrWuesVqQ7v7b8rtWjV4bJtqpijA7zdwGVrZbqcFypA5naobprUb6JWCENovSNw",
  "key8": "3JjHHKWqRFzxWtNxW6kh6Kgmp3mFsqNTn4k3yYqZBca3xqo2pLUeizJeyBrLgngpydHFSNrHgKQSpyP1ddkEvYWv",
  "key9": "54ivnoqQU1ixxppbQ8yRn9UdEkEp4QpnKZ34jq9x4cmFvQiNi3HozzfBaV2Vxm9uiQgjFY8nGfY1umWTtqiGiFHz",
  "key10": "5nbTiUZZZrQksPvfNQ2JWysCcquyBT2AkM6XjSuJ1PmVyyVirBkMqttaoCfMtKCwp4djBCp49V9pk5yz7vP8uxL6",
  "key11": "5GhcFAALfusSpBwDZNdyy11Mgm4tdbg9SS3Mgv4KB6KUrNHpC6e199Wp5D6qiwYoJhQsZFRydiDkUNe78a7vRRSH",
  "key12": "2V126Ht9LwRKKgUaQAzoRatd3z8EMm6CnYzynb5zZ2pW48gy3QGCWMHPG7rMcUj3KMYw1eUU7CsfDQiUWb7RFXqR",
  "key13": "5h1CLwo3GUky7HM76dweakP377sktxWRZG4k6WyQ4RZWhmrxJCUKhJXAbYmsdhro2eLdT4R25otjSvSj2s4MvJek",
  "key14": "5CmmZytUTsT2Lm6yv6eMypPJihs8Kr5Rh5nKjso5rcWXkE5oTNUTY1qx4TghUjbe2By2CQSH5KSDisfxzqhvaAQT",
  "key15": "jjQfqNvvNYvyPkqdn6PRPpx2abYsvD9bGFgeQewT8x7TjGyYqFe7iTbbyQf7WHRsksd2z5ArbbuQbDkGLrhZZTi",
  "key16": "4LZzaK73ZoJYEHxPqHi9djbAw9F9pGJ71LL5TU5S81dptpCZAQroiZyXZuLhUS7uFhqBq4E83Xr5hMKppkzHLLyy",
  "key17": "n7xMGWUNGWyemJtZu2nU9aF9h7EHHZM5K35ftKE6MEr3ZX1MzWyuuQfKHgKPrKBPTpSVWZYZ3CmU9GxHYGhZ9k1",
  "key18": "5mSFs4Vb6vxjPtKFdeTw8y4Y6dY5ihJhkQsnbsdhB3wjFx7Haxptcdf43mi7eD1WeNncLGarFiakrh668n4hx4hJ",
  "key19": "4jMxkuhN4FSiEgch1cGXg4PZHtAsnU4EKjoVq3gz2bE3TpSBSegNmXV9qfjvMX5PK6g6GaVEWmAybA7KoH1GQxAL",
  "key20": "3v6mBVFf7jejjkxrtkXZwQxZ63Z1cHS9xoSgPoWb24yjcGxzLcnem1K5ZexpwN5iuUBBPTYFosTC6y2wEvsPNFyP",
  "key21": "4mpeWzh85NnWbtmd52XFqTrJQ4oMkQhtF3KHKm8ifS97zs8GZR3f5VEDSzqMvpJgzq85pjPKsg5roPTXmGaie6uM",
  "key22": "UJXj6HubtmdeDzHuPwdbx7KFHJ18UC4ApQjZiFzZgyxwdaxbDsAZqad1Szd7GjPSLQKwobDCX47bj6GyCcavNbM",
  "key23": "JKQ4a6fE6uZu2n5U6CQg3cZR5jBkWLQqzZJJt6M5jLBj8zcqyQtAgEuWmvy659yDaG6rDLeQ7ZwQDQ1nkzLRu3K",
  "key24": "3QQHdnggA7pEk94LYK3Sx6JYTerwrhQey5BYRd5PeMBbR7JKEqWDyTvPLj53Jcdqr2pD1DPuXKJS577BqMHVaPNq",
  "key25": "jFQz5y9DJbjk7xw1zYb8P1esozMHP56E3G8fi89Re5iPD8AFkyTk2MknZCMWiQqn1isrzSoMNtova5LBYqjheMT",
  "key26": "66gNWj5qZgABJzmx6UmBfPwTuBiFcc9TTv5j7UDxjbo45WPDB6XSEGdCKLf5irkzGRnRqxgQdCDWQ4U7UfG48Mj4",
  "key27": "43nMLD3N21eEZYfekBehw2yZyyhd4uJR4rzULAZuGPbbew3FFwiXsASg6ZunQtUqgFoUqR7E8o9phcWaN6onadZp",
  "key28": "M7QSiU48yxsYqxTtigooc3BhkKsVQCRAWiw6GQRjxKX8XVwVGi26QugSPyUZCxQHB4HTiCypmjAbDuN4FLYJ4Hi",
  "key29": "2Jd7JATJKWPx55JGoYFcqC3MuiUez8MJceGPQz6WARXozLPNKHEX5nd9RYgcgXSaaVCjhSFPp3hQRXkCXDbygHKe",
  "key30": "3zbJqpGxiiMnVgLykwaU6pupEYWybZnPJdeb25FyTEnkeDaG32NbwXesezHr26MKdpcQrzG8H57WxGz5A9aRT8Q1",
  "key31": "5K5dAGdmGiZ2S2cAQkgQiJoDAP5sjGY41ujrqARSGDYUY6i6rDfo93r6wyCh2sGtqTC2w7TkPPaWhfq4xSHDn6eD",
  "key32": "5s9Ni1yReJvNQWfVPtKZZKZw23CvCEQENwgUHRBta8QZDP8vtpHUPine8Hk4FCCdTzqoz6h3CvoopdNhSTkEiEHA",
  "key33": "huZRApfj3Djx7uPETVJtQk9KuF1aJSrzKZMMtZAdhTJy1LSSRrNTCykHJ1dMzSxaFZtYsbSMJ4yZDykcAf5eaHs"
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
