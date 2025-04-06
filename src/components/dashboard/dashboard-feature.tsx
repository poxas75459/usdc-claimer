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
    "38PXbqZAK4zEcQTHJpxyzW4SD7jLUHcwcPKBEFpc4H9ngyCCS9dfEkKyR7hUTPX9DLAWj9CA4bKpeG5HzhrmTs14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPJmUe4YhvnJADBDUcBf2sbAnVf5YT4GZbLEe7Q9oXqgLqCXFq1o2zpb3ojCYZk1FVJCS85shVKaTwR97hLmy2o",
  "key1": "5eD3jhpSA8SvkaYP1U7PvbCsv4tJcnD7iLRNRnhbC21Je34x6T3zuYzwRcZ8moXMnne9sfL8fMjBH85qV3GY5Ve7",
  "key2": "3nuWfNVbvak7M4qCgW9njbfNgbbFc9DejDQxjkop64tFJF4GZ55HMrUmTYs1cCdftU7njb14SmsHbRTSWyQSVRC7",
  "key3": "47SZ5JzPQ4xC6hj1T9fdZ3jnJr4RHCUtrN9EXxbKy8UAXY75hCezG1pkRJHvcfSWtGikRAePPrbEFY8jcMEYq83Y",
  "key4": "5kSRnrXriGPKym8gd8LNLyZztaM3Ao2a5HUw9w2wHFCjjhQEkLcjYw2CMtHzyq72dyU2UDsNJMmBhJKrTLzKb8Pr",
  "key5": "4fjDRxmvWpeT3GC2RtTztGtabE56Kb1gzcZU2ZvGRAR3Z4hviALpTQY4vYWcjHviXmjwxH5TxKxPNj7XhgYs3XEw",
  "key6": "41DGfXnXfRqMe4xABamumhCKdo5yJr4eDUP8CzxQ2ksRdGHZPvHy24svHBVysmoQrxrfmAsqJDYw2xjpfPFzposg",
  "key7": "59s4i9hhhL56ZcGnLVFeSux4MuzskpjnfdK5bYUfsQbeVqKmp6DvrYTRfaNjg5k3KuW9VhtXxxax3VNywcNn4u1W",
  "key8": "yodQEzByAbJv2K7cwSNBLM5qEmHTeoZ6gXeAH1qbPaC4GWj7LKkVvRYrnoKypFHp7fWEjFduvcvxJxwerzaGWcm",
  "key9": "3kmrcenBNw1YMrfiZqqGLKb6NGCYdo9MTkkD88wuACDvu7VVCUjeXDt1uXLvTMfTqLAyY19gUXgwJBfke8Ec6epB",
  "key10": "4R9CXEjUHzhDXfSsDEh3ExgxN6qiBGAYbemKeTug1UW8Ppuv1WZsUtQZ63q2VKBvbXkjtHc9pvwQecdgU1JY3N5o",
  "key11": "2EUcAvW3TEL223Gb7yHGcyvfpH1UMqby9bgGuciyFDxEHgcsCszWwiqSDnGa8KCcN9Y7yJRQ5RUkeeRbQRYinHUe",
  "key12": "5a6TB9zPhEkCx1xtWk798C1pvc8Yi6jU9vjUDVdGEXNV6e9knHGEVM4WSP1rvjeJ8ZEENmRx9U9GPCVevArG4Fv4",
  "key13": "5T9WKBXhBoiUG6RJGHhekA2uBY377CGjeqtEr5faeHqnqjEqNWE6tFi7mwx39k4nXtuyJ5v2UeWSKU5DYs5LYBWv",
  "key14": "5dvCcVzA8kwdPEEqquiqGsVhEEv8rFhsTmqMrd3bHkwmM6qJgoqvL7BJhtGrYTopAQHwL2DX1mtfMeEAwKvnCV5Z",
  "key15": "5QdBWXsUoi1CEcXCY934v4xPDH6p4TXotwY3F2V6vDRCLJsTsm9BJGNrEoyCeFkJ5T4oT1YT4DVCqcVL6JerrwS1",
  "key16": "4fYvwCL7DHtGqtJoesSkc4xgp5TbKPdZcXrm6r11TAJuquhE5gFZ9SwUYUgJAMaAz5xrgUC2vFuHQxf2DCHtgBmJ",
  "key17": "TEh5UCTrdTGKbbQ78rn5VkZibVorCtm4xCXSMWmeSWdxUG8BxhXXy6fCkAKCUXYiQr2uMyHca1Hc7zmGGzHSE7T",
  "key18": "4Peb3tN1HS16QKcBGtqh7V3UPsirgZcSRyWs2e3RaLbpk4WgmNhkNgBPrWjdxa5tVeFY7kLmb6nhEZFpVqi1o3jW",
  "key19": "1uLCmP3SJFRMQj5Re8GJgab1krXfHCWhx59Bmj3eLqAtekSNaBjvMLdy4aMYJ7fHS3xhZwoXFhcwbFyGQ9h9Y5i",
  "key20": "2YvqvFir5hd6C3fvfGrDqMPw3buNS8YRPrz6oZpDZ4beZL8pAhA2K1CYqcDhgFzyYKnprNSro6FtpPdWvqgwh6sa",
  "key21": "XzYy5scvdjK6ms5LvMoqg9FDETfJ5n7Lewmf8HwoDyGKZHLXJB7xMh24c31gGkMQd3xJGWYrTmxNpQwpQbMRJVm",
  "key22": "4XiEGMyyFjWYmonqUfKZcdroVr44vV1NrfuDUZQp9Rq8vUUNTeJ6XoN44ADQzv8U6EqWkb8sWYitDKHvKbjs7Jhz",
  "key23": "3Ko55W3VprWdtYVLxN5m554pd3TDXA6cbzU3p5y6Vsw2Ru85khLFqRoCYiwiaBsi4RRx6ADYq9o1tnMvoeYyabah",
  "key24": "i53jqsv58zvgQ2NoVS9fFqyP8eL8oLDcv2UTNZK7uUg8ozFUsgTiJypbzQYDkTvREi8Niy1GaE8fBycrjWL6fMx",
  "key25": "SjAJNRHbEtVgTockK8XNpyU2AeVVmBPjt8GxaZ8n2tCmcSmzD79Gvd3XMwaXuZdKa6DQgcSXcc28ujDThWLvXyZ",
  "key26": "3TNWVqTptz1f3t7dWK9b6mkosAgNQvrdLRQCZNLaRfYeHjGaMycHYGEXqvFfoAKQmHAMqcJzgkNzCMzQdophueXN",
  "key27": "2poc3ApVFzTBjFA4xSi58v4UhF19ccjiAZNPTUkxZGRMBYiw3WNVdG5FCtYMcY3DyrNAn1Xycqa1199gABqitenf",
  "key28": "4jXevQTVDi7z7UUAU4VhwuDuQdxuDhpxMUAPASmJXXkQwXDCCMqrm3fyWMGP4RCx5BWUdmSgA8EDx6HVsZCE1pQ7",
  "key29": "2MxqDmcLJ6yodCHhM1evUVkrxmPcr3eApGccexUu8rVma2UwPY3bBRYdVVAGQbHKpZwUiJ5MXY5hLz1aZkYi2J7R",
  "key30": "qFbXkc6GJ6o2afaPDNav3QJaPturkPU6x7NPNv8be3cQcoHN76gyQofCW3FJazaLvwPXn1q9aQk8trPYaHb9jU1",
  "key31": "2AiuArohdx5yc6zXw3pULPoXWZZKkZcXNQt15KFrggzuTBZ59yAyyBtjLevJpvpsYiQFQx1XpiexuaGhf9CeT1Qv",
  "key32": "24yaZY6Faj2GoMA9RjRsCvvxzHEn86CmTBapPhk4QNTNJJowJhKB7vUrS5iBdCX8ETksYn4LxMZdMjC83uTbCYnZ",
  "key33": "2aJEDgDogRMv4hwAs9pfLW6FUoHS6qtgAH9swGsvfUjystdtT2RQLVTqpSN5FpT7Xgg3nFLagyhVPP4DDfL1qDMc",
  "key34": "5akFmRkDd9mUGsgYGPFff1Q1mV8FDHTGVkTAF4bR5kTQPFuvQHEorTTD4hUQFHvxn1FWigZ9Bii8xnL1C5DHAg7X",
  "key35": "7UTUSQAfk268NcgTWPncMXAx2xaw7Re6pDFgAgjBGcya4nnyatqrfDbapsLY9qAkz1sjh1H47xCLYiaVCvnw7uT",
  "key36": "4HyX8hbu4spHL8rAVTSxarE4CUeayxYv4GJKqsio2F8fGtLLCGkbpbnDLC1L4r2TRHaYRY8FEh3ZatR3rFwszxSf",
  "key37": "5vQGbF1DbSqmmGvyEv4UsWRwGYkZFG8vyzhz57khGxLkbw8udytxyjDvLPmofNQf9KjdUaE7Bo4NVqsxRgczNdGy",
  "key38": "5x6A51EisUupNy4EMEZRENgqsHnDKDWSeVUgm3RoERApPeKxX1t1X5KXb5b9DRkV9NKmGXrNsbWhn2NTiHrkusDR",
  "key39": "5uXR5qXTcUK3RxrKCLpYXLV5Q8JR8urVyf4C6pPRKhq5wFDRPdi1knZYf1q61B2svB9z2wcUXECs289Z1zZPqbaB",
  "key40": "2TsQ2ykK6uZ77AQTisy4L4txRpbDAn1XJtFMsAtohdzCkApCJkAD1yxqoBXQ91Qqt6uYyVHcK6n7VbtHFLPKUc5x",
  "key41": "P1ZF3EoXoVAA76LzcANNnxBW9roEn53VJDov4xwsbnRL6BF5WiMQWWds1fXUMSY4RvnANnmBBwhiymu1ur64CWK",
  "key42": "5wpayRui1CYF4tQ4Z5DnaG8bHafyc3H9dBdTykQS7aLsrdAa2zmG2anLivSs9GAaQpXbhQLYMzWcuwvAiEFs9J6L",
  "key43": "pCEGxadLoHT7UGYtfKnHSBicrkCY38Ws9FfzFkBG5vsbUFWUJVa3P1dPJ2CtjLqkacXfb8hWM1JDTQNXD61D8GY",
  "key44": "T9KqJfKvtZG7ahQJcdeLqKPB4bu3pX1eoEMoCnexGKFaGAA9eQNtMDMHmG8Qcoht5Xq4qYwgPx37VkBDM1jfEXm",
  "key45": "2ZHTQz1wUrKRKorJmiKZWMRCe2cgcvcich476NyvaQaHjYVzusjMgDxk1LwAVB1Ccb73asAtRrQYoGmHuZSwdhb7",
  "key46": "4vnx28dE4xfZ79ncuewZcFNLuMtG9KphbV9h2aAXsuxx65ZkBZeKvNFtgMMW5R7htBXVckqfdbFsSwXMLa2jacwZ",
  "key47": "43422NaVQWkoxYSgkaouQd65dV8pvAjkgEC5bM3kMHwsd68ECyKNMkEC3A5bJK9M6cTrpok3BnTFTTgSQYqYmqBJ",
  "key48": "3gHecstCaMb6UA2umhFCgegYNix4FRuXjXgJZTXgSsThy1A5Bp9hhiBKwtCisUJmfswk9ngsPP4r1WLaThkxByFb"
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
