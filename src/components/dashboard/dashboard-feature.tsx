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
    "5BzLwLDNTyjRbXFZNfeBpxrrC2zbFwee1iuZm2nhZgp3onca8wdsobi4g2F35KKgKmGjQBF6fX5WNA8oEm6pPDgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aDfMDkyHFUKw6Q5Tih8N48xoTu7Frjz7tZnzRJUaGtusi8G67u66yvc8eEGjynqFwnh5BM1o3XL76HMaoPsEwFv",
  "key1": "4xoeQQUX8gBPtFSmHcN5EsNnAp5Eqk32QFtzS6YASHnGpvhHwGUCqpaMpiDxMoMrJZ68RL5XyfpqdBTCeeQ1zPLH",
  "key2": "5NYwZcn1K6vFZRHqBeT8X3WFVBiWoYSq7fhANucT4e4KdQfernGdBGsSYg8GXXMYk4Y3eUNUS9NUQEpjLLwpfQ5",
  "key3": "3PovWeYLEtp2d2UnoGh9zc84NZaVf1CR2HpLWnMobxTXvShnd3tNxeQ6oGVpqi1CTBKgweKkZDp3TVCkJqw89dGq",
  "key4": "t3VYrJSqNUau5q4nuR7KxsUQmTVwhuimsBPYjhmTaJFQ6cjDajj5MWCbHy6kMuRszewAkqttyvxDyotKqJQFw8D",
  "key5": "39GNXkRRh4FnWtZoe3zuz6jjK1aL1THSuabPg11RQFGebNBumm4JB3uN51iJjjNwbYRwkGT1sKGpDusrAQ5QUnS5",
  "key6": "goTdMtaKSyzT1p58nL3qDqoYFGopttgKkZ5Tgj7SB2LM3pyupYoEyEXyLg6JY5SkAaTmdyeTxvoQUnRqswVdLvz",
  "key7": "2RDPgB68kV76GsYktkVLTLbBi1ZUUgYrkpr3zBy3eiZsyU51YvnS6VEYPJwbEEkrMU713s8aUtDqPQteNaSLjMfQ",
  "key8": "ZRa3veusxaYjbAmhq6P4mWtx8keCJwnGRDzB9cUCjxjJGwn7wVo1EEVipxMQiobbd5rTbYHqQ8uKCzBBXpdXTkt",
  "key9": "34vND9Dge9EmqwvsVbB4nVziiAg7vQUkMvmJh3DH7YbFFu2MoQZYBfJ2kPMak5DTBtzkgKGxFC8MYBfQgvugdjUN",
  "key10": "5p1oqD8EiAgw6hzDyGuLgAD6mdcKGMCPqLmrAgS1ZT6k5hWH4kzkfFn6fiYkffjdShavwNnweffifP3GzgKUq9Y2",
  "key11": "3HXEz6RUS7kCG99fwb7G8Jr8jvYT7HTmwdDTbp6LVTVVMaM5uczBs5F1PezMGHHicENACkApTDeC8GMDiVnccmJn",
  "key12": "33gwZvavdooaQzmgpCXAUcjRjP68E7Hwtb84xkoriDuth3ir9jEbQBmHyd12y8ato9LoUqxvzTYbuD9nhyDCnt6d",
  "key13": "5jtL59Fv9FZKimSh4KuYX2RR42JsVSdtBoPRnuC3nXdUTRndrvindCtY4Qk7ANjqCEaX6UAJmvRCETyrazt7WrXd",
  "key14": "4oKx9W2cQScvXvaakKoT3iZ9ksStK9ZXouoNuRu775LjbKnbErbUDrQ1ugnf4dgDFxyBnV6xFKPCmYWgbhbmQCDo",
  "key15": "2PgPQij1tgXuLKxaSs6pkNgdqnGh9XDRPG5ykaMNJmH6qRsG9Q8njLyhUyYA7aGJMRkYwaRhfQibWE7JyrzacAnG",
  "key16": "29FiQw6vDff5STQ89F34n52GQey5gWQAo5rZbsgVrMBYHnWfwNhtYUyiqxfgoiWrj2dZScC467iPxoq4BejgVPyq",
  "key17": "3x1B66Dd94Z9XqZ9jJYQCrzKKqNrogK3CoZZTgZXYJpn5N57DoRKEKsTwo6gc7DDzvn6NNftkwSCorPAbuv5a6v6",
  "key18": "FZtdA3GUfiXypQ5vJodf1XwKEkdHgkmEE1f79bBn8Sks6gLPXbwANUdLDgskoHatXK5Wqwus61ckatixNq3cgaa",
  "key19": "5fTMjSoDkzuXTcGEYJCE4BvPAnoHyTbsiNtyBBeA8qTfWSMC21pGweAMBxTz9A41Hbaz91faULX6ANaEfzkS5XJ9",
  "key20": "2TsqypYrczv9KKRDF4hLntq2hZoHASzsYr4bvcXa19CRn7WYM6Gia93K6gHg2FEpPAsx6sKReZVN2n64cqVnahs9",
  "key21": "39qSGCmuqMrTjz5P4KWevUyH9e9nyxmTW8fVSbU8vRFqgWFk888UVjy5E56P1wKgP5QMD5bMxHxyytD3bYozxEDP",
  "key22": "4e7pVduWQP3vjcsP95PEUMeX18Nbzr5KpTZFgKLdufV1zZTBowMbC59hSN7L3parz4UWfzUongcoRksncW5k6Ydd",
  "key23": "Cb4kSfyqn3UeMV99QC8a1vFJv1hypHn9rxG4kZVehPzMcnaEjAoCnfTtWr4a65RbMrSf9a4FtVMqAeLXVRC96kx",
  "key24": "38AfuAKhSN4zKPZv7nDeDF2RuCcqZyqWxfSEaGP3bbeAYT3cpWpHTZW8Y2f7SYiHvEYs67HzSuukweVCm8ciYz7c",
  "key25": "45mnKnev1tSLWvkuuYVWXxcht85yUKzDxPq2uKc9ggGMKfmdPFfh1Xdr8aQ1wpzvFWLnHgzqj4uiiCtEqCVM6pvG",
  "key26": "4NvRr7dAVAkVQAuMkfM9wxbfftTEDcuKthbZrRsbLdqUNrwBWZhxnN4q6wKMXhfa15iHnqW9LwkkpVNQbmm2sbHi",
  "key27": "5gMYofZBjPPv6CQAAdXMKDBZNamivCinUk7a6aYjpQSfJ9mRa6746XuFXiqtiVpettNA2c8SCw6SPbtyoYXVFNRF",
  "key28": "4szDqdQPZsbmh4pRgpz3uc9sQ8XiAGYt2HhAExF8d32rUtjCadgRVyWgfHbSLuFiEE25K47kGWKD3MvGSGrB99jN",
  "key29": "5TdPhBreNKQB2MaUSGYaY6dudyQ7LP6Qxrj6YS4EnjHjSyykXycRxwtPEmbA1kZe5whQd3AX2KjgA66vYTUKjp5d",
  "key30": "3DHDgswS3GbbEYhDJ6E1PYXa5LUiFWZtjZAi1urNNSm6A4oCEeqhSApw3Y9kyhRX2ZEfwEj78WuT125X6gJ1d2ZG",
  "key31": "3Hwy8qzNMDRE6U8xoTCDWorPkQEZwR9xRxtffcgK99fZkPv1S3ftx7EVHrkfEkrcBEt3ogwRfMAjLRk3APjsKx4t",
  "key32": "2CZgSppWNU9Sp6u1h8iQR1biXJSaGtpJRRFE29MPDYdTgTrSpQKEjFRkGwZd1toWzBj2C4wtD99LYbsqJ9LDT2eS",
  "key33": "4mY3a8dHfLCsnQivTBDTzzYzYR1K4t6TY3LuMXJoNJ3xH9a6twoJFTXSkwsNLLTZsGGYRAsHnV1gbP6UYxicQpc2",
  "key34": "4r4CY6mj74zFDspFHo1iPYkpXFAtSViqy3iTtiuqGjA63cxb1vJ6g3MKP6DAhjoaJBrrnVz9u14q8ZETpQRCYm9g",
  "key35": "3Nyv8LdtfNzNghJN182rqBSaVVwYk4kBzPHhxzSiUX1wsxNGNemoQFSSFuzzZCdE5PDELc9dTTkoeH2PWD3iPEi7",
  "key36": "58NACvBT1Uzci1AeozTVBGSbsizJJmu146tdYP9odjK7EKo1Uz4T19DdbtRmRE5izzduFV81EDWPQnMhX1QDhjJm",
  "key37": "29dLjoHv8FLtwHDCgdKwoTfELxpr37BPR6h75PT2U5Wuwwi8Ef5mH6EJEnvQep5HrQiNy2RaJeTCToqawsL4nNcU",
  "key38": "3EQsGKsUZ5D1bFV3uRiTfkhtqv1HP8zVvonZHkU632Mv5y38ZQfWy4ufBuaJ51P4PxYu7BpnDtXBkYzjUc4zMg7v",
  "key39": "vgaG9ZgwwjhHa8TxgmKg7BEURcCYfbK5jDekgJ2565wWT3QuGSUmxXAnvsVsBvHVJHKSny4YuYN8Gpe51vaoYLb",
  "key40": "3Lj8R7Kwg5oNcuHzx7m3JWjVjKsGGbXjbLp8LSuXTkm7WviQ5jshsu9wNpfHttm1x9pz9ygMzj8mRhBA6L4MfAHe"
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
