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
    "izRwwHExacgcVLbeDLjbQxaTF9dNLCJpyUcHHxKGg6XeeQ7rV4wgfxkERVbWVGpqz2yLH1Fghu1BMpq1Qx5GYji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qVq7s7oYksTACRFXJdTFWJFfdFi4XE5v4GeRDy9gAi5hsaGTERX3jytFnv5jNMRLyRPsBm373zDBsjzT4F1pNVs",
  "key1": "442spq3SH386ocwxTiQZnDySGDN8qRszuuERvbsQGd4RiSBn61EMd7ciZnL7as3mGz6tFqC1fVDRQtJpgmwkSShz",
  "key2": "2v1tnAxoR2EMFDwT8JkuX4MUqa1GtMe1hrbNGT3HMc4Be6yEm6YwEYC5X48mHudFJ7fHVHx8ST9r2yGdTDTYxkKJ",
  "key3": "64ct7iyi7Z78mCKtytYtCnNY7EWFhWufLwoZUb67YQ1S4aF3hb4zmuriSVD8nALE5tpsjCsbvYDLmjP1mihWg9qN",
  "key4": "4mBy6XySNkYWuLie2yAUPXbY8SyGESmDYncfg4idLSUHT7fi6L7XSMMKhzu6wLqXM8XsKPcz78fhJvBPPx74VkHf",
  "key5": "3v9qDRP77H38oFYVeAR7NuFSPPX4CTNksUUooK71bgddJZDDnUzotqbNiNYcY4ogfSx4PNsVes25xU4MACBmozRQ",
  "key6": "iLmbp4D6rCw2LNC8a2Bt72o275gM7yTeqBVjsAz5CP2aojPPoUSea8VpcF6BGYgbtfaGENrqEDusDQbHzQoSoX8",
  "key7": "2mS8Xzphq6qXagD3hbDawu1PCDEgvDcDsSKjfqDcZ42vk6n1N4BPAXPk8QxxoAHWQkax2UHBbbEGXumDFF2KmvR7",
  "key8": "Z1SZJCeLoQf3JSzUQzt1DhUCdUS2seT8yXhGHoXfLymQiDLmsYrPaWi4AVBQRvLmbjsLF7StNp9EnsdcbXwoKkR",
  "key9": "5uW9J45EjhvoGutPz7UPcDZgTttHpdwqEhd4PA1ALYE6S9ZVgEi7oKBrekVAemSuzhSZavuv7E9oo9pR7mz1uSuq",
  "key10": "2ucoGseMoiMQ9RVMnWaMaUu6Um8d8K23RMRy5eTNP68xTDELNuuBmEUJq8xHUjzKgTaZ1x4wxmpJsPjaY5ZUHxjJ",
  "key11": "3zJRi8YydZnjMyg5rvM5Q7Jncw2ugGAtTpoHwnPerxpSnTyiRDXvFnbBqTwWHpWAVPgji579nHmt8GqHD3UuC1sL",
  "key12": "2ki5rKrgCxYHXa8NeyxTwmWpPtyC1yuUPoZ7TqNuF5Fn4TACoSFVQyhnxD5GQx2VdP3xs3bD7x3fXn2kJKjMKngv",
  "key13": "5cJNHCqJzCiadSLe5TLR9j4eFQgQjqyKr1spoh8Cqo75KfQnkeDc2uVRiXwu2hMkE9ZH6t4LTZPfpcvorzT4mjUT",
  "key14": "4NjzN1K6etkxsBAj6hLKdx7pL4k8ZRRf9uRbkXAGPeTxpfWxPRZoC6eRYCtSBDCcKj9uSuazAwEtmfPm5YnUevvR",
  "key15": "247gRbbPmcedSt1CW9JufF7LBtEZHR7SQ8R8AzU6w3WjyEdCfs2YGCmzVzUCEPkSGsjhwxo8SAjK8JZiHs25ZWFB",
  "key16": "2qn3CNsWp2jtC7ZpBxe9BN6aUYG8cf5gkdbuhCh6Yq3GfErrKbmraEgQMeSzrasAKWs1JYRmxker3MpWtNNi5azd",
  "key17": "3TE6V6RgGA6GrHJSmUuj7jBqvhLNNuZBdmhe7CCw5vu1tNeaYmWW9931BLTsGFavxzYrQZrFYN6ZPE3DmQDC1dTs",
  "key18": "5iqTqocFBhnDj7RPRPwDUboyv7CNb9bjAY1aLgJFxWVjEExPufqiPCqkTZBG9WCfedMHVs7mP9knJhctXGtrLGe7",
  "key19": "cWJcTx25GxMtZqbeo4f8xawEGiCGNhCQfsTx45vXoJo1skuzKrkB1HomyMhq8dfSWVy9sXmXdFuxnhA9aXxwXKx",
  "key20": "2LLfy5VoJmsKDnsG9ngwipjTUqMpoVMbGQqnJG8QLy28H2wuyqUDoubXK5uDBYUCYg1hVTLnHoPKVUTebZt6jgA1",
  "key21": "4CXqgYq1sQkCyhefF5JecapWwNjNSTSwW6yCrbV633ZWvLe1Mp98GCXm4jJJSkyqBT3xGhzo7wLsaXVupPkA1Uv7",
  "key22": "2nuhfD94jCMmZVrfTxhkYUkJqWzqL2se5t2rSxwaS1WDie8PfWKXFuTe8KKAfnnnvzxfehT2avBia7bseNN2Y3em",
  "key23": "5vR1DX2PKASoqc9HEXQxDZvY9N9NVqXF4MwvbzbFXjQiYfRXgrAjGe2zmkhXLKFJKr6jMenvzD556Dv2C78d8nzH",
  "key24": "3iNB9JM6QkbbPQe4PRVxykoAkirFiVDhEZnEeykDiU9g7ruAsUQSn1WvtmzXCxP72dAgomDqfmu8NDgH9qKW8pjk",
  "key25": "4vjA1JnWbyT818dqFcQMmv93Xr5fWZgdxDms3Gaa6NJyVftccfy1CVkKRjpwrEyg2CYYxB2euBDZQtQipGNeHELR",
  "key26": "4DauNrghnXSacUActiN6kxPHpX6ZLTVB99HjKtdMgoKRQQ8Xkr86poKK8Cwp8dPr3STgFgVaGAuJvJywbNPhzEzS",
  "key27": "2ynqzqciZ2UQ7H2obxKM9HPLD9YbegeECdVDLa9gSWWKzJRVVc9QcLeasRGHkah2acPvGHxXEkMwfGZ1b6aNRp8n",
  "key28": "67djXk9AeTepWHpoiy1XTkk8McTgAN774jdBns6ekg5kctjDFhzy9FM1TbtpxGSYR7KfdFf3kBG8pMCWyZmZ7jSY",
  "key29": "4GBGnYFNA29N5XxfbuzBBqEFZFgT9Vnzn7J1yggB4ewg9WzjAhYbNikuTyW3zRLh86xBZUqxMm9AbSLKNhEVGW2j",
  "key30": "5AFvttuYvmVUe5XTEU76V7ZfgCkgYrPvWJkRyvYapajzg8WmrAAMJq25F9ZfBmMY9Ui64ADMZ51ir5BhfHRkwUPk",
  "key31": "4zg5DzQjYEBvoUhS2mdyagnmVeeAeSbPJUhVCx732derH8tMmXAzoCtPVRyHSrTksuqxw8Hx8T7YJ1sKDL5g8UHV",
  "key32": "3kymvZgAfo9iSt3KFKuFapkYHn32dSSmmtAW1dv1JxKejBY8q5St6NhVzcCPYdV9pqqsG8N47ZUREfdmYi6PqwqW",
  "key33": "5RQzXjuqzQX4euxW2rcpw9wCdBwfbcG6K9SoyUFEUxM3D5PtwDGsuxsrqvDUopJ5gVCpa1MaPBEwA1DoTZVqEz4g",
  "key34": "iw4nv736jpw6twQPoM9L8ewXDzEKiZHebkw7DZd9vkACapdmxjpRLt3cQNnzA4hsUzh4ohUAvBvMbZJL5gAzMEU",
  "key35": "5b2yeYt9e7ejvztTsqTqdLvHDBnQ7uDUK1CkjZMSV1juN1t1ey1BMLARrqQKURg9uDFBfUWuzJh2KycTTh5mTP65",
  "key36": "2KzXxn8EQJw64N58SvRRUrH3ma2DUs9d2qMy4PyyVtkNFdKZKYbh88dvaf8RiU44uQ55Vpb8JL5T9QXnVb7ttibv",
  "key37": "61Lq6JoJ77aDaqDgkpGsLuufnEtPw43T9kEAvGuymNasQ5PkmooU1VrVuCxbaZnNkwq8YMHgVAKrmWu47h9PhCHj",
  "key38": "2jjHFyio1NP7TbU8NPFz7cQtJrnr4YP2nSY6PckuASmD9w8sQde9kvirqmp8fWTEp3nivZ6FzfZK7DsEQREKGr44"
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
