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
    "3W5WtpFwLtX5XBTBqyqMfc9K7qcuU1dQpj7ePJTgKWESUGH3f4KTkm9iCfucyBtSWapFJhDkiGMoAv8tJBL2k3XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aVckrJwRPHuF98jef4Bzx4Zq44UVPbqZeKVzBBKHiZjhrf6qvKv3R8xVYqo7KPAN9WAd2U24P5dZ1HpYCMJQ1VZ",
  "key1": "2FwXUVeRxGXGbDabu4pBK7KmEoEvZ9UoUAZaCdSzef1wxURVuxoLQ88e4Kq8UYsBYxeEVq7J3EzabGosuBGdKLk2",
  "key2": "3DBvLarBc1Qs2GHKHApdDe6K3TVzVKniPovdBKzT5jGnq1RuhKQ6YbP2iqLqmJ1rte8iPt2qgoAKHGkRgntJoV1S",
  "key3": "5uK1W6jZB7tRNq9BYvMENkM7EwLd6m7yABYAW7aqveLmzpw85VrgGAButJqBkwLZ7JpyPBu7bvApiZ5XeAw8uXnq",
  "key4": "D74DnAMuvvMosieD4NsuTdtLniKazYq3UNexxZNZBkpmHQ9GkgVDDXjMBJfHigh4CHvPM6TW1S8xd2zBfGsAKsL",
  "key5": "5cWyk3ZQN91UNTG5e5iwRSDDjUoiVzK7s7KCGhcTqMUKua1CoAYo1sJyTm8SNQLi7PWr5QRHnqh7dUnJhnC86MLC",
  "key6": "2FzA7TKZ5NjAHJrQT2XhGrYGAQR8G4yGXomE11mePNQ7RVtuxUBeYVevMU8uLp6gUZCDPahNZkqpv38F9cPD3MWp",
  "key7": "2AC9jZULE3Ff2nPKE9rqMCUHRNnLHvHGjn6J7H1eaqD2nhY9yB2kLP49sKmkuTThdS3aqob5WWhep6U6H6pm6t1u",
  "key8": "YHhmyLU9LDcGFEs9zc439m4NMYCvt8fEM8XvkC72qh2FM8pmPqiyLiainm6SnuVoiiC5A7A8zLsr2mjCBp9LQEp",
  "key9": "5unUvcFxuMApKpqnRnT3afTrUanvRiuHv2ETeHjbNZUmw7f3tm1NfWdzSBJnYgy4LQBUqUEBueMV2kkRqxgTcYC8",
  "key10": "2nytU6HodXi9qsFKZY82VEebrkfbCosSkAQ7G5wPDawQp1i74SmuYmYKEtCGZF3pcv2SYQBSsSSxKsa2riHLcc3k",
  "key11": "oucC1w7CTJmBk83P3vypFruy2nA31LDRpCLXjCbcTdfM9rvT7sFdHKvMDkmHRFq5pABNiVK1mctgLxj9VZQCjip",
  "key12": "3ZXKXXieECcCHs4qhd92KqLGyghQ66kG4Z6wHfMjMCPq3L3XcJ79LX5Uw9AYfdRMH5sqqDV46TYmjziKjsm65JqE",
  "key13": "2SBDbFW9GZZ3Nw351JBsxMM6qkFxVnoj4yce7gVaQWin2QaPc4sj9zkdbb9N8LKMjHoKm1Cz5TKzzUejPCdHj6HR",
  "key14": "3WnRQdr6Ht8j1J9jhyXKrLHw7foRUmmVcwqsVSMbUbbx14a8rLuuFtPyNXa8ReXjgiBG6yP2kLKy92Lvi7UwwADK",
  "key15": "2Z9gowEVdLDqW3C28x6qyFKFEnGgwV79LrVa3v2Fw8R2ubct2J3MfqQWbEufsjAZk9vLcCBu65pF7q7msMhtCi4a",
  "key16": "3uXAWqVAKRCNmU9HeD9fHfa3aUPKBmVQwRGQX6Rc9A2hmeWAv5zZXRQRHQPNd1zEgbjqTEM2mrK4oPgwChfPTrRi",
  "key17": "5Dn5ZXmof3ggm2hYDMmL5zoZ773TEkbYeiiU22DDE8utM33bmwkjRMC54CBwqCSk7SQPV51uBhc5KQabHu2CLsZG",
  "key18": "mh6xdJDyhkxdnpVNxXUsGDA4GJF17cgW8PMB57swrp5g6xchp7rY8qU9qY3ToMmw8NZ4zGF3GDZfW1uFRVaS9fS",
  "key19": "4VrwDP1kky8JejEFAazXVYmJCWCQB3DtyLn9sqwgAYMTwZrmFZKqZ5aAbShJy1nT8JpdbonwChgSVwfasscmzajv",
  "key20": "4A68UHAoh96bDosepX4RruQ2CtEkAutGMKd1AUmUEC2Frin8ty4aZLVScf3JVmZExsHEjfPFv8RQasCJZLTdAuBN",
  "key21": "5EJdvG4DcPS7Vi95RmwFtLHc3F6NQtMFaD8VEJsDmXNBSzi811T3GPtTbxLFQq9FqkkEMLjrwSbJ6bNsX6HBWfYP",
  "key22": "3cPBgqb3NeWu7snJ68e6CkvzN8HUjZk9VoqP2AdoU4TxZ6Q9Cj4PjGfrqnB7sQR2M2HzDsFg1oC3eUNAm2LKU3bk",
  "key23": "3QUsMBb2DCEqYjWeviJELG3WgzZHALWaNB3eT3SYYgSxfWV5EG3Y4n5XS7fnBrgMKR6TzSoWCbxQjJwBMcJdugMS",
  "key24": "deX8LzABmT1CwDeFiQ75ydM7CasnNvq652fTER7DCnyuSq7HYYrKPo37UngQs8w7nVuciNV4KXtBN3DgMMXrFeq",
  "key25": "2D1QcgiK2iYqnmTFLPHyzYrG6Uoxyzw25P2h6H5aDVVWRdbtRMGgVUn4JXQsL6FbRRfJjy8BF6uzCVvWJUGfyVFF",
  "key26": "2ZFQqEuF4cPxjfSWLtB2WMgpLSnUGfUqx4fe65C4LfNu9gamkcAn8f5BcQtcTySV1NFhCV6neqv4TWqFbLd9bhAx",
  "key27": "5xNmiuGevdcHVKctfsjxhoGBMCd34XucrS6JwWGoaXmPt8pcDW4bvBZQxmRmodk8t43foiB15eCk5e28Ky6uGybS",
  "key28": "5aVCdB4PswEd3nDaBEJvHKfMcQ1S7uA2Zya8tGhuFBgeEXtEH7fRQDADuiUJdLg9G4q3uF2MuAnsVnjXEChgV7Wz",
  "key29": "iGT4EeR6vprofeFdKqNCR9qgee2Moe5vhYE8GxGgXbjGs4o5edahddgPuYSerxhfTqehrMRX4GjPh8nMEF1A362",
  "key30": "4y5cJfmZLUHwHAAzJxGo284nwrr553CQoSsb5soQr9ZNyEeNZmh53kwRHVCLTuHeAg4BdwBdxxE2ak59f4QHNrsR",
  "key31": "djosQxCvJePGjRmbHpZQZ9DK5kbEtLNPtJXBUdthosRwTNaozsnyzLaVBY8ct9Q7zoRKWUHohoFKNQxsuyhqxEF",
  "key32": "3pn9v9AvBGUdLbjKH3u8hE3PPBVF5SN1Zdaw2CeqB6EDsBdDq9xxaxtsFjCFdrYobmYhVFbxsCZ4trkZpsRQKNi8",
  "key33": "5PeYZJxj4uDtGZbH82fimKQ6xSfMdZn6ZHP7X2sXxMizcCTN3EzMJYPRimRgz4giWfmBHvxArHZbWbBPD6S1ZYbW",
  "key34": "539Ge7qFE3741bAQa3nmWEttL5wMhgs5FejgcvH3i8rDEVjWsBpUjGbCKfTyZ3cwUaaaF4CrsLrhTCcfhTqZYCDw",
  "key35": "xLoTS7pqrg4yZRL96WRgR16uxeXbfc5ihAJrQsUDKQtA8aQFkXfNCkeL8i6MbWnPZDfSjNXJCtnWEiY29kRt45B",
  "key36": "3BFWAgztLqfcneauo7LggHzVa8r4wUKsJbjCi9HiyQZKmtPYXvSEeVUGVxyznkg3xnoL53Ja2CU4Ftp1YUuxn1PT",
  "key37": "3hhznb55zL6wgD9fMtPrwt64BjxkT9VikgZPooHtnhaPztqWFUejry6L7zsEKafRzPNkxcmhbECXuv6ULLmzAyVt",
  "key38": "3GJyV3vqUTH6VJGzXj9pSCcFZ9Bzx93eUJXr72whhgZMhxkwmyBhFiokbobmN2ZDuYnts8KL1KbUCBNeLuDv7k7m",
  "key39": "5EofB3REUWBbdn2oW85DGU3yg8Z81qQVd2YtgEuAH6UMi519JS1QXbQ9KMT5vXd1tZUSMhoNypudpB9RLBysmBcg",
  "key40": "26YMXEQT5gHLfC9Sb182MamFbqyZTz9KMsYqPQ4W91L8dW9fUzuNfF3icTPmyC4oomhwwrFtLP88MyJ2ygZgF52j",
  "key41": "5tXMU83qF34VZpAXQNYE1cSbGtnsKHmHVEp1dpA69igKowAfaPbdFbqxbf4bfWgFj2rfx5tW5MC6cytBevaGcRpY",
  "key42": "43VG2aen3g2qXX5AS29DgqyVediaxFDR1KEvPKrGR8Cb4gxX3LYWrxUjBubHbTwrv3JuHUpNjhxjKSWUMhuJmUxa"
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
