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
    "S9mBwCy9hVcu5FkjJbeeX8GhFvEu7cR5X2VWxG1WCnkWqUj7skHXY4pDh66g7fF7JrfUVovqvH2sjYkzbpXjDKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sG5VE5HPuwK8bMgmcqU51rtvfFprapy6m1SbprSVXmujQkJfLaf8U1KVqS2pe1KWsimUYd8HQvsL9tMBETUnoL1",
  "key1": "4LW6byzP8f7EM3p2i6i6ArkYQZLtuwsxVmmmDwGfXKMhWVd76RFgFZ4HAytf6La96h57Upifx3hcUsy6uNK88vkU",
  "key2": "4SJLkLq9Vewc8kC4yy4gZLqzd7DGXdRU58bVQgT32L5omfyUAFtHf5cfurTQyYemLbsdDvjaeoTdDSsPvNF4iCzt",
  "key3": "5bYAtNVNZur398JiLgZwhZi22wAsKXyw1GqwyNYcF1NxwyCtJbR6Q9nXNW28YmxjWwkwTHiHDYdRaxfCKnsWbebf",
  "key4": "3HgoDMKtKTTEbMmPq3VQRNaqfkgzvXrSUsB1AYe3ArZWfYhvx4WeZDDzAD56d5NK8oDhRqq9VDARwBJjAJJDPycJ",
  "key5": "67UBUut5j1mJDBvBJGJBEgdkLQbCZBBYjX3hX8ZCVkU8SGyojPxoAp7q1CnBfhnUbeHnCcQwwdBFf2spddPDfaws",
  "key6": "2cHswZbpcWudWoPYjxDNMyrCbjabVEr8fbYmL2BoqLxNhYoYwBJkd5frDBtf59Yz7gAseQXQYGCix7vPUUkhArXh",
  "key7": "jGjXQQJ6sYErTbdQfyjGorWwBsnRqaTgcLyrRmAJnCuzCGk6TmbnGf9vf4KLtHBxwKSmw9JMg7nDB8uqEqhMGPp",
  "key8": "zpABBGtomrr26gK21zh9ooX3a5yki4foFdkGEyUF7LuA8KcyCKawpTEJkB9GJsehPsnmFMR93coCg2hPW8q5dQZ",
  "key9": "hjcXaoBJsNnqqtDFaXx3TwjUYd45AASgS5BppgWCW4NtXinKGQmzDUMr5PCdsncYhNKwA7Uffw5jPKMSKLPFxd4",
  "key10": "3yig6UvEZetaSixSskCzpYXhikJkehC2AoXaJUGL6eS1v34Dkto3yGr2McobqvX6u5tLcUvMwEUUhnvDkdHw8uho",
  "key11": "3bQoeZ6zVAanm13QM81YAP9v8FedHLpo3SSdtgCwuCs7bwxrR6wmwgaM86nRCRKU9updEjZMqxKfgmBXUyYqBRZv",
  "key12": "4ZdCSApgZ8PA4B1YiYF69CPaAa8Nwj6TVqgRFsgJsaXrd79ASFrns5vBK8fNQTKMudWy4TEk1ZRcPfPDwJJ4petH",
  "key13": "9fYRKa5um9rP3cTeBxqV9Pe3SDZN7r9KU3Fx6AKr5z59UvdVs9b7qhXRzWcTZMQHppj1cLUgvB94HCJAWtAXxrj",
  "key14": "552w8vaoWFF9AvgZGEVFMwPycBU8cGTbyLVJ6NCQmGuzeD3XqgEfpQMJJTNseqiAxySJHQLDcQDSUik93GPn3gu1",
  "key15": "3VYwryZoqp3yCDU4qwt5S3GqEXbgzdUhCd82b4R6CcVHnnkjxwa2FEvSpPZJiht2q46toZeBbEhgJmXJXH38nQbv",
  "key16": "jykKqfQV2x2HGKau3Xr88kWDdAqXQMR8eGhB3m4yxBAMNF2vLHnsDTd3GN8YPe8UNQcF6up9FCgxhn7rsYxcDvY",
  "key17": "62zyKWKowabwu5tPuTFf29L8N1omFxQqEqi8m5oRKB2GzD2zL6ebanLgi5L6rFFSebxabUe2nHf23LKVPKKNtbcP",
  "key18": "3GzybY48em5vhfRvThsL2KoiNz7De76VyGMfewZAmxTSNmBZmBSghD7PAVMMLy6smLzdH1n661Z1vnidtmG7rjsB",
  "key19": "3NTYcWWgpVwxwL3JzNdsWXJV7mAvTgd5EeCeDs25sE7WRi58dXjRzfp96b1VvgPv1FTCzM7qkHJzBmp2xW1pX3hP",
  "key20": "5ujvMt5uJ9QDZ9iSJuSHddjiJe6LtD1P9hdmcoXkaCZVACXYg3fT4eRuBs1Y5tfW3hynhRQqUamsTFDg1ZhLVcAN",
  "key21": "3xSbTz7APagxhUzFv4LPtsMjR1TJqBgWBBa7iNY5iZkmjCaWBNLd8UGYWEy7uUCLQkNHF63TRZABxGwM9tDBEDPS",
  "key22": "5xo8DEiYxDsEBQqQ4pR4RgMCDpisCAWA5fZ2ZsvMCYUU29uRVUCigyh5cFqhwk3YiRYudpk5zk7E84NUu3goDcXW",
  "key23": "2TZ8HvCRVoczEXGPVSvxUk7S2moz65CunorjTmFGL4keHv2MBiNqFveBn9XatzNEAZFiE3ZSeFngqcGsPxbfhdWx",
  "key24": "3r1yLcgZ8MHw8C8HWAFVdat9Ak4CdY54BMMbVwFSdERNcs9fXhgQjwdAAXkaTzxXje2y9ssUe32dibXSUdsDjizS",
  "key25": "4SoK13a467ZQH3mHZtX9b9Lnc3375YFUeYEY71jD1kyEPEA253hgXeQnWBZZBsoKjb5ZKT14MnXYWHNRTQSKvfUJ",
  "key26": "4EwTLWnQ5o6BetWGpeQu6bLvubpZqGTaUPo1c3i1VhjivYsmfSPRGj33bgfMUJpseTr8Z2Q9w8FAtVsNvDMzvaQt",
  "key27": "51Nx1U7iGGuQuYuHwVkvmgZtoWLLXSxNky48MMPArrtFuJcT67NH9kigL2W72G7GhoB7AcUcoBEuwfqJwe3Xn1kW",
  "key28": "1sFL7d5wSk9EonRPT3PgSJBtYKB8qcjZ6RgV2GYQK4qCxuJkYZm5FDsbiALZDuc4PsiskLbLiS8vRt9kMMma7zK",
  "key29": "y9U58SUbwyEaSHB99zUqS9LRbcCeM1PX2heNdUXq6h5FcgwTHZoE2ojGRvc6Rh9X1HpnP8yrkcs65BwPAoGUEKt",
  "key30": "5pizqaqPX67SZJUkivuSoBun1N2UkLHjEyvJzpdNia7rFah7cEduLcTxx49ZLkbN9qgqAepxqHsvg54V6njxdti1",
  "key31": "4bgFfarnQ4E9YEwZWkSmEU19yR5DuP8oV4XrKHP2aJska8o3CuRuq4R7Z4nHxt8ycZRA7FuxQ9wXm32gguKmTAsm"
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
