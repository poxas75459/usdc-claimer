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
    "5nt9NasQhCuMPpHPAiTRmukDxFT7a4YMiVn79vuN3DFnVW4PBVZYBisCRCoijPasjujnTBgwJWMGvLQeJaGT7iQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMSDnad6PvAvAaE4aJb2BMr4LzAT9nkJRq5Md5Ev8PabLMTfJLxVdcYUH8RQWh6hWkqXmsiRfPBYwGji8FXbUN8",
  "key1": "4otj8Y5Gg5dvW6ocaZAjGhwFeLgRh9248wsiAEN19UTY5BfNfnjCyzDD9Bc14w37AWuftmfyQT9uAVj79wyq1Luy",
  "key2": "5o9L7x1qJ8KvB2NiHKLutJ7rWadbMvSy399Fzh4VJJwcyqHLA6fJyMjtXQHxdCps1WQFuo5GQpYSWfLNWk7zrD3L",
  "key3": "26PQAYMfCpfViRwRUfeGhXxdcs1b51eiA95PJhxokTbRf4zkoiiQzxdfFAtMJ6VE3vbYMk3xJrthDy21dhbyD436",
  "key4": "5qSaReZv2BkuzY6VaMHbvE37ebsUN1AryrS6eMkFzM9C62kATE6PM9H9rpcBaV93XLLwQ1NmUHFwmvzhK7UqCi4w",
  "key5": "45sSidhpVxf5EyNa6UyYbxEX8q1k9g9K3745Ww8P7wZtCmUiWHRwC4kP4i8p9ayPQB5dC6J5oAJd2V5HKGUj1cy2",
  "key6": "56rEHM8zq4F1Ddf2NzBYMv8JsBsnn6Q97iaXZkYn5GjM4xbavbt7c4ukyGQgrE2TH2MCNP3MG6L9GFE9ubJweQnf",
  "key7": "48t6K7zrfvPnVHBZGhVx86cJJfgosh1p5BV25uzkEd7enmHBApBbcaeVGk161dj2n7cRpUJefoEcGo2ze8WWCVAj",
  "key8": "5B1UQ4mi8McgyQokPovc6pnkEJ3jZy4xrez7Xn9wNcC5DyqqHkLXA2GE7xNQSXbL5DdESW5kzSSQMu4vZRzry6Co",
  "key9": "5AjqpfjWhSN6vcYJ3Kjux2qzZZgx7zGtjbeEfuytmWyCvYCxxDNSxPqAWHhiQjSy18EhN6CLut8b53sEC7sYCpcx",
  "key10": "2TNbF9PjVncXqjvrHuwwxU9d8xcGikL11s2R7s3Ru1c9TmjLW5ACFeJ4AAtD5CEFt4rTM9wmTgR1HGRwPDGE2M9Z",
  "key11": "4hsLfkbZVLw52KYrCcn1paZB5VJZzUUb1CBcJm22r8jaeZc1MDZpgkaPnEbv3dtmbSD5vUfHR3Nb4rpRGE65PvSp",
  "key12": "3WR879TaJr2YjL5QHx4eiEuhHrPmK2ZTa9e6vSqM5782i9aZxJhkabwA6UYNAZ4rEv8bZiqnj28YkRHj4WRN7bQk",
  "key13": "2kJ61JNQMgzzXVsFcxMP7EphcxGyKQctenYCU8X2Vu4nVuvqNmn4VXLLtCqri9LUJRHN7ACthbQ2ssrXqV2ALTeY",
  "key14": "5UrCqGtyg71pXJ4me8rHS4CfLCz8yJXe2fDdzkwLnJXWkyamJr7uL4o4dKmzowoYRjPEAqzUJmtwruwTGfCSCogK",
  "key15": "5A7dvn3roGU7owtYjCDD2rv3xD8iUHF5KZV9FzgeFziaaS3qTVSkrS4ZeQ3JJdKUXCm5en2CHM3Eb9JDKZAHdm2R",
  "key16": "4Nu2R83TKMVtjnTco5c2KMfci5GJLBdnfhSFqPMf1Qr9qNyLhnaQt79iTtrMFhPgRG6nigtKX5w1R79CuQCWTjh8",
  "key17": "bravG5uEk5dXQqS6qhFEnCxmobgLbSCDiYV2kH6y9YPJtikCLUMiiCgDEDcpJkWmrExPXsDB9ZCAkvRmjGJg7Hv",
  "key18": "3LoGyH4Jdjgz3vWGA6v7bqhywG3E2mdpufESRmkRWH6Fyz2DqbN4JrYPLeziwDsj1mGv9ZoTa6KAz8MHuHCzkMB8",
  "key19": "2wtWDwVn5Uk4MTioUyg1P1VEN57H6VN7ZmaVg8npJM2fTfy17R9QmrXHYVUWCkQxctUFEX5WC7hSY4yWAxGZR8G1",
  "key20": "3YcPShGutiA1zZLwCJtq6225uHb5F9rgaU826Tt9QUs8WKBUcvbCFuD1qxRar4tbAh81VBrLph73mpc9AV21cSCj",
  "key21": "2Ws79qgJwSbwzAAVnPKckeCQyQYm3bfqFPFMcGN1YpD8TLUwR2YKiEZcYQDJCmFQNsAcnXhopg7T26dasQa3ZG67",
  "key22": "3YYabnGwhu9ybMux6zmKi61Ax7xLAjtwKnK7ADqEKwNtHN1yhSbrJWivdUgmcGcPqG9sAiEsfe77pkD4but6tgkg",
  "key23": "3yhQdahG11x9WEGRuioppAFpJ65Y1EBQ1pcLFxmXL2T7wiYyPHzqyG1DmQH2T9szrNAjtU4VqMV37sgUxki3xwsn",
  "key24": "5F8v2gdWZ4cPfP3TFjHUKtYGGLfc7tVWwnajSvKQkFkx47JssLb3TdqTpqzrM4CGVNmHjKuWzxbnTVxwAZksjJgU",
  "key25": "4UK77poaJiGFAMTV8Nad5dQWuN4i9wrbqWAQTf3Q63FoZa49Zx64BHA75rD6fEwn58PQ6US3JbeCazEvAMeizbMh",
  "key26": "3q3KRQy5XWhV9ApkFEtcMpafK3o6w1VX9ET1k7yQM9JCQshz1hmw4MJT1j78EsatVQJYX8NZftqbVPUc4voyrVgm",
  "key27": "4bHJKtekwwR8jDULYcrksx6sHMtqjUMsPT9Z2krnWwKcXJYFSRoFvHMuHAMjY7FRUL3Q8fFnRZhkfBtNfcngdU8k",
  "key28": "4Az9PMBgHXGmG335JuhbyiZsnFXsRLzd6jAcfgxsKLbbAiPWCS5vpA7yDYhnyxbyYaTUtahNRPcp2H41oV1e53WM",
  "key29": "3EfpLdSyyCwvgvXqDfKcT3ELbWx5kqUAPKJphwhbTSYT6vtUToYMoACuRfiMJuuXvvj3ET5dYaHTZoXfkcp6vNbN",
  "key30": "52XogxBKzL4yHukyspjLyYa44NzvNQQp8qQzRfVcX4sgGsgJ1ATopmLxvdQPa8YAS5xeD6iuCDWoaarBy1W88moz",
  "key31": "64kwd23433s5vLg1Jne9dYSMwcTgDC8PHhbcDN7L2xfDhuebFoc7X4iqPQAEat9uwUfLeGphSmbmzST5yoXUoTiB",
  "key32": "pkE4q89vZD4G8VTCzsL4FJyro65FZuKAMznANVo2u7zGFSAECtiorJLrj6GD83RZLABN1giiwfEiWzq9okqE9q1",
  "key33": "4XfetDpBd6uGE2s8BSiRa838gA7zaHJmxT2msz3JY2iHzhmkjZ56hhqDooBCYP5Q1EvrFU5J7SPsa7KBKfNFRx8z",
  "key34": "33MxWDDBnJAqQ6ES33zTmp4qWZWF4oWze6233wYYMa5B8qHHY1FaiLwxxxKxkjdnjjgq4DT6XMDyXZ3eG28F638v",
  "key35": "4rH2X1tZU13RFGPHsrftFgeyc9pKhVsL7odVjy1A9W7Rw7t7DHHrBXUE93pueqdETXRzLFFP78ZTZbog7Drr7Wg4",
  "key36": "iDxMDf58rtoSEdyY4HNP9nKJ46XQYiyN6YiL1WNBxY7jv78srhxoEuq7BL9DkGc2ESpNzt7BMvvDqzuX8emmFyH",
  "key37": "icFgngraDmpzyx3xcxB3NHh75SBYNyGswGmVyZ3qhcULr1BM7TayWNRZ6QseLCB8zK644imVoH5xTVy3vsx5aFd",
  "key38": "3JUkf8H2SoLTihnVpinN57G9dQsZb5DRth3n5goVyuW7Pc8Gnm1S1VPvZg5mCF49kRxNw986UPe128efDfeT5459",
  "key39": "3DYChq8QcGPZhtfk5TDe2jZBA8r8UC1owRhxuD5brCGBmLwyymrCdghCU33ZddirLEyBc4EBpbEjpmWzKSBi9UH5",
  "key40": "3SuJUT7eJ8QCGUwyYhjVFxfFEN3gAnztxK1NnBFDrarrRYXnxt6x12sS8r2LMksZ2NZqK5tDxVLvZPBtyo8UALfB",
  "key41": "qRpNuURmqH4U3wg14GFDdnLm1byZounA6etRQvTQ3Y7XoqGdDo2Zmvo8zeAWRnw5Y941b9BwiiWbp7pjdEQQqxn"
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
