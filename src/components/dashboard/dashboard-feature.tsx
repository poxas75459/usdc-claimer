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
    "N1wRneDx1XDrUJSKyRks4AEFuh7izjJUfDkkqj57zmdM6NeLsMgFLK8NHkCLSzkcn5cZ2dfpTa15GHHnJkBvVp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8Sdw1jLCC4qVMQD1hBJbB8SW6bp7Ez78LVBN3EHoysJLV1ecoGVK47sXQPyjQ8iF1TydTRFUp4qrqFeYp1QLQL",
  "key1": "58v1LVE6s7K3zMwjdQX6GVQvkyXcA3tYfDebYEDfasyKmgB6mo8bhBRDXbjiSf2iPWfp8AGHtKZffRN3aurraqUg",
  "key2": "4oe7r3wCLciWRvTis5iJEvE8zbxbx4nFBdm2NvLSwTNrnCjy1i4kPL3eBsTJfZnbC5th5rPtoNYL93qwAK96rtvn",
  "key3": "WsYEXAhjA5z2A1HrcPXe8r5umawWSgFb15jNDVxmDgissmK8wRUQjHGac1Y6JC5BYk99RXVCFETum5LcZoHFvYK",
  "key4": "3EqDZ8W4zHFJ7Cuxioo8S53PJ8u4S4FQc8gBQ2skxwiGmfgYtyWRzQZGzYAH1TMYqCErX5BLuWGUFaSooq9eVPc3",
  "key5": "5vC1h2VMzLyRJftxvJQxDsiR4TMaxNhvX2mDyyk3MQ7Ds2bsP2Bt6H3QmddApHCD8Kj69maQBZSYveUk1rDJoTS1",
  "key6": "58qrK8wL7vvxbPqFMKVbfAUJJpGqNZ9fW7YQWW7QKia4XfRRqyaTV1ae4MvEc559rMx7RQcNQmZoM7xazd1sWT7S",
  "key7": "2asz8NuRac1ZUw1U9uvKBNBQGwRNQzMfRW8XbpEWPsNyrYssRn1TSBXzbt3HL1A7yPkfEFnsCpg2ZRwpiLpnqWWf",
  "key8": "61TBF65GTs9Hyy7J6681V9ETLygPSrc9GhA7WB2XsJBDuK2yu3eCcrRyurjWKxYUmuY3NY7w1dSXhMtvMoQoQuCn",
  "key9": "4xmQ4Hw93oKL1h1Nme2jAsWHafuCJCei1H7h7ZMP1fbyQRTbp3ayRvLYtwr5vN19fhaoH75Wvss5d4QbygaKPhfs",
  "key10": "4JhxsJmfLXkaEophW4dNtN3o8qTcCfuRJswBkM8d61U7TBMdxqhxoBh6rQLYizF3T55N2ErARrCvYqyYCrUEmShs",
  "key11": "5DdvhDs4FJDyaMp7xmaw4h53KQrfCvBchoyE9jtpiZV9yr6ZmLFoZ4pURniAin649EJAewTsRQbmZscehuS3pSJ3",
  "key12": "3hBvtc4av5s7HPLGCATRfpKzct8g7sFWbghRz5EoaLsPUN3LUiBuHiabad1vsenEGWdrpM1gs7stsQJtzaiGKt32",
  "key13": "fmytTPtstCzEyq8qAM8wW577bCfqx8tRhZVxs7McaE2akA5Qm4tfDx7yxEYFH9MvnZbVe3kiZ4WWzKMsrNDj4fV",
  "key14": "5u6DPPjbKnowSBNpE4hakEbkmMEjFG9bS2cxCSrfEbzdwHUE86cvJPFqqTRyB5GK9rBvN1nKD2PN2VDPtb3C4YAK",
  "key15": "5SUZqhuHxsPzJBxGQswR2TNQFMbcb3wT1bS7LU2StU4C15Kxp2sHWLKxbGWp7Qj5TBEXrdzvk48JCPfDX9rouAW2",
  "key16": "2cK9ubo7jSD5zBefMVYNE8CDSmirRg6URHQL6MgxVsYM87axsQQrSn113T4B7ESYzp555LHT3EbVG8YNP3wktGCG",
  "key17": "5APWkHvvw3CWDBy11oeimYKSUC9jfrTSVanR91W622oKer3e78FAYeLg9NocmALP2zpVhHPrfRFxdtdnm7ogBmA1",
  "key18": "29RjSd6XjnjM8vibDqEQ5mGGzWcGc1MszYbSjWc21r5Ly9PVb7AbFehzVuQFRY3ex2zpg2RsP1XqY49ce4xJQpLc",
  "key19": "uxeCexDCNd86PSNQbKbtmdykLkKXnV5xHivmt835Yxe2SRZVFa6fPvSxfCRzEUVuU3X8NHna33R3NAfC3TVtqyu",
  "key20": "2yAqnHPvMsxXfYrKQhCjvrggz6aLB6qhEeVVxKoxdQY9Ano7VvDovWA94jK6tpkf7Lf9oRV7UsFiRmXLNfqmCM5S",
  "key21": "2Eb8JwbHjXQFu4yomEh1bpzUw2FMfURosMjzNuSzVDCoKPBA8S4nMDagJ6PrNLWBhFgdYBwWiwRogeXFzmTvMZAw",
  "key22": "bqhhT2q65jBdGLBXVb1FoTkb18LUNei4kRhJkyau3iayruvHgahhyG6FiMzvDMWenymnchn2HJt98a6bWHgMHHr",
  "key23": "3BiRBBdL2HKDTTrHg1HXM2ArHQtBZ8b9hXjM5K4qmMmkHEwA51YvHiiaGvbVQtZ2wygNAX7dUzkJy5A7fpL188ep",
  "key24": "1y6xb7hRHoowaJL4E9koSzcN6dDmNauGiXmY6j2fymzFYMrpf6YnuQ85yZChXyxQkHrpwmkqsf78s4WrBiZL7bQ",
  "key25": "5gd72M7vspZNcd5G8gJnf8M8fGWkWBqNag55j9EizzhtNiKTs2Vx7ReXWFR23RsAMXj8AB2ycjFjTdxy2uKeSSjm",
  "key26": "eieXGFQkz6vqv64EjYbu6zJ2PBy7UKFCYVBkzctevrMXcg841sneKxoGJdWEBvyvfHXAL2DMZE9vz7mgfzsFvAn",
  "key27": "2NoYhwqki5uG4JrHzcyVR1FvAYe7wm5vnbce8c8dgjHceLutbQM6bLGXM8PnDmaME9RPMa1PZ49jV1v4yVkVbc7x",
  "key28": "24HBrJDwXCrEc2LCEJrrYGEzrmJg7DzmkQwCNc5cvG7rV4YjN4JuPUYBXwue9vKEzfGfsw2E4WFc8fNiLKxGkSDf",
  "key29": "2tnTZRphugKTjgpb1T3qh2EGvME7S5rrJaoWUWX7ZXrM8GAXGX2BksLkiw9gSj53vGPX6TEYo2itQnU7A7hiHPUM",
  "key30": "27uH8FPxuotkyf171Z636v8bBLhu5hC49TCCD1roDDRQMZf4vKKWP3n9VcTipGS1Jm96V3Ph9q155TbbByre5QoZ",
  "key31": "2Ha1ovF1w434GkStQhn3vnCuY85Z32WDqQeN1FbJJccQ6Q5ngZkkQwRgUB1CuAVyVkbhMVQ8GLJvJbwG9AQAdftx",
  "key32": "4ECh1bEGac2yPiqutyGKZEVZXNgPBK9JjoJuj9HViRFrkMNs6JnRGjVypPpxpftzKNQ6vpJGtW7iLkQTKpNWAokQ",
  "key33": "52voQ4dxri7P5qGr3UL8j5VDmCBkcd8c5ZguRvYx7cQ9unhZjxSrKwCxHMGezPrg8NpDhpFb6PfwJzvDAxhm2ewm",
  "key34": "39vbkKHhRaPkCRaBzZmWW7Nuvi9nyoVUZbPx1dWPyNyDa9JHVLGREjydTNNM8ZUA4mxDUnaugX782ZpuvNb2mnm8",
  "key35": "4nw97kELGuhWTAo6qC8jz7BhBrW1r66rvewJrehxTjKPFCetYXHCXq2hJNjqbUfxSrua6vF8oBKtgkaUgTYYocNq",
  "key36": "4ZPUAesdnaoMWcctCz1QXpB1c9yLjspvD85TYMVv6ZQBRk78mCcNfaMVA9ssxymaiVxNWbF9HvTLNVzwchZcJaG8",
  "key37": "NZSqafZSHGqHwJvftddWc8tqGW7PSCSqZEEBradR7w2qD9q9mRiovCdM12FG5fKM2xxiSsHHFyTCjfNWcp3ygNm",
  "key38": "51X7sbJauxxyuC5u8GE7zCB3TJ9xx8HYgXxL2hs5jBUpmWB7rUT2XozTGQYup8EdxrAhEBfwjYedTKcz2fqb6y8j",
  "key39": "3BhBwN5hHokA54ExvsQdfoAyZQaJDQ1Z5t5LQvt4ajL5QCE9iaZtD621GbWSpyVW1ajHS94Dr4pS8wCU8Sm3p1k5",
  "key40": "2Fy7psq4L9wApKN6SK3htY5abzAypNRxy37HsFCZVvgRhPhJuFsJgyFVqvhnBzygfkcSr2cTZQq3w1KK8GS1HjRs",
  "key41": "FKmSCBn634CVmMCobwAdSrpE4oP7gDDN5xKMviFjqPbvZc7CbK3QnWqPikAwLt5vDPeTpbrP5XEKiHTsXFEhzVD",
  "key42": "4Nucaugipn87qcxjBkPhVcoBFitAtbV7PV9uQdfGaxLJTzwMoMnqo8UUCCkSsj59qYCmePi71kERiMMcsDYw1nZ7",
  "key43": "4wKPGv9jXGR81U99ghXsroJCBGee9eTt7oujYPo2dxrvBD5v41Kbrpx4Rk396wZRRRPy8zTcPuvmEXwMbmQBKLJP",
  "key44": "5mHCpJoFZi1P42zJJa214q9WdMC7EXYNZUWPub9BtBvzAaKGRBd8PpCAFpUfFvgvYMpagdx36HiVRQ7To1gdJ8Rm"
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
