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
    "a8pPKPeu8nBTvLgxMMyUpTsStpG5k9U6eyKZSs3eDYo55wnsSNXhjRKWJJTxHJJ83gMH9DSVcvy7BTzMnN2pNsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AxDU2awBFyk922iruvxzgNS7easu46U51y89aH7jcom7Py6geQrYAAZa52VkHmfkorMc2gqP9F7YPek7Zqf3y6g",
  "key1": "4Dd4WBGWoc5MN8uZkKpvXfjFcxngRFGXBnKnkUMWYzz8NrvGvvZgJMuRW4uKgyEVDqLoyTLuUv5h6F7MRF3x5Ahg",
  "key2": "2SnrzEB7SJaP4KintLqtSMZD88w1mVBKEYJdAHFU3AnrjC9RxGmjLvTy8U2HJ7eFYrLKyQWFTbm23BmL8oKMbnwj",
  "key3": "59MKRuZ73DtBGhGztAjcZHVdLtGcQfKTE42zhUcyuo1andJKTXyM8GyJD8JGMbt9Yc53qFgRHhj2hMHvMtj7hbd5",
  "key4": "2iKWgMAWgdWTc4zxgCFCmEvSuwRQyf6TGoRu6kChmeAggrpLnXVfDPcbmk78WSboCsCnvcYA3dekFdoPaNqDyf1D",
  "key5": "5Q66g3pCAfw4TmTNDPRAXv1iYz2E8jvpFDJPS4WGspVCc96VRAQ831KnChVE4cKvVtrrcf9xsFsnGS84F47RM8MR",
  "key6": "2csYweNCVjhZVZwT3gHmU28S32USdAPX6eVFK1GgFXYrCr5zqicNcV9oohTUWBF1tmQShK9izLnXaryZW4b2VvbH",
  "key7": "3CzpBtkFQur6qpfeykxDwtBSis5pD9Ny8zDwWRDT2UgMa1n7Yv8vX5focGkQBhdyDT1KVevZALBfiG5ZTQTKd5sb",
  "key8": "2FJDEBYHYG4qzfcWLRugQ5wjDMv4jSx9UowFYcEkzA6afqhGV32wguHGtYuM9jhu2pWy58kMTb45YCboQtcaXtMy",
  "key9": "3jcLJn582vh5DX5Enk39T1r5Tb6AYdBRU7ZFDQGUNfVVGBZH5e35rnXfCG6mDNkHyXXsUnwT7733mmMXLVtTfQ3a",
  "key10": "jiHbTkaJy4sRUB6cmCDWww5hMJa5vobXU9h8a9HpWJimpSpsPF88Ca4nWWKdxsR4m4hsynu1x7VXSYnpUm5hmDp",
  "key11": "4m4J59c8BJ3s7EZk5Dih8nutecMYbayQJUniKvxn3noVqKdng5p8aLNUyiXVsV8yoBW8EuZkpKwCJDbUNyfe4CjY",
  "key12": "52tRZ4QWLrcuUTfbZND8XYrBRbYerFTpTCoTZE6592R1gKUi9yCY5CnYoEdUgAnetmmgxF3Jin2mN5P27UY1K9XK",
  "key13": "5mF1oCwPAUHXdEGHwkyJxa1pZ17C6q6QYHdmaucyFNaSxxtC4BT5ZLWfzc6L4tM5SqRBRLyuzqJZomqpob96eR1d",
  "key14": "56Y9ed8E9tkZW9icF1wp9FtgHLfmqH4viQ3s8U7bQu1VFHUa9saHJuo1TKTacSTqynCsfs4Mws6NhU3XsQhWu44G",
  "key15": "3pVdYzDukjQBaRZYVe83ZQKJ8g9kKkQwU6KTmLj3rwrgF2zjQ4LsNFnPV3FD1B9GqtJdNWbVdBLqbPZtVq3TGXWG",
  "key16": "27Y8d27AF2ewDKkumuPqyRpGRP18rTaNAu2nvz8EwPoZjHaSE5MRS6pD85PEFEHo942jCrPCk9yQfzkysbzUQ4VN",
  "key17": "5MD6FmGpoxikpLxEAhVFaXuPBXy2zqPKSQydwB6f5ysemsnhLbCbwg2JQuMZ4K3vg9msGdGp3G65hruwNq5NWkD4",
  "key18": "2DVxrjqoy8a9od1EtcdpQDXPpzLzS9ZLtJ35FU3ejHBrZhpaHMJzkmSHwowTeQxoDZ2hJaSmPk4BYkNN7rFwABGc",
  "key19": "2PoNbXgWSPSnhpc7KJQp8bcMuj8v3x8ucTcXHm954rbrYdBSMjTA8D5d3vZ8QworhMDtNukDADnJrQ1bwgNW9fMj",
  "key20": "2KREef3pwkVwF1DhfX2mz1tNtMZp7k9MigFgW57DW7dkpujnD3Szxh8oVrbWcUx3QF84qCRNwjvauvbkqcnuTn5E",
  "key21": "5njxjZAerX7vqFVJq5zC1x5gEjgtoWajdUWUmUvgCSQw8Dbrw7Py1gmfjyZdyVDKGjyni2C1XZiqSZsgUyxTdivf",
  "key22": "EmVxjuwB3KZzK34iKpDa5snEyJDXYCtnSHQDnVjNCWpnELREffo9K4NohFsLFCxQGdvrsbLwfYa36Mc9uHcu4EG",
  "key23": "59z6xKPtx8Vmb8QyNUcDNJsUrsJ4GKetvJJoJ5CSX8FFSGy9nnXAA59wYAzhG299pqqp6hq95xidSDSNFdt2Hx5E",
  "key24": "2hGUQUdRhxUHd4zLnjF6Q1S4TrfSBnCXdtYrZqWKropPvu5N3sZnGfaa8YiTpWjssjMkQeChenj5xy7cEMgVm9WE",
  "key25": "3ZqJUKt1WphH4dWJHkqYLXA3LL5ipNd8R9nFWB75KQx4ttLrzDs1QeE57EgvSDWuoK4ag5Bp3oEBoikrTGYNcXH4",
  "key26": "23Ck8N1dBQtDvJif5UW2Vh3ZJvvsUt9mapnBEBtEtBHMif8WVrUvTk2vKvqdLpxSu7nbVBRuvbAMdGK9GRWwZnet",
  "key27": "LACKUk1AcFKXaFyVHtxYfFHktXb5jp1eRGgtiUF3aFaM5Q6kuL36dEcCovASZE7BMpBZ3DGobyMc72mYDz2Wcg7",
  "key28": "5uwwXQEDkbCa96VELxQ1R735AjsGK1rdZr7NwFCCd4EYTrVtYuEy5Q4U3ZjRuuZATA7wmL9SyQkQ8wWQYk2itQd8",
  "key29": "5gyQAP5mv2pTbrQhmzBEdcSpVfsk9LKJbLZPiUPSt4MXsPoU73qJaQ3CiKeXqS76Q3w9826VyKbKT7RcgXXgoUcN",
  "key30": "2NJe7RDd1dSJGPz26Zj7nyDNHuQrxuWNXhnA9eLYHi145GSUD1sct4Hvjufws4VWVHdcoUNRSJtpm84XUoCWUwqB",
  "key31": "37tcBHqsM4755S3NFhxqLfkb8c3y7vfZdnnYxCGevYjRZkrPLNEx4QHMEgAtk6kEt2z85wcb9GsA1ZUKaX24DaZ6",
  "key32": "28AGSPB98nMrgeJ8pRBYZjjhnGymV4jwR37UBdRmuTgYPsznPRS749wdzzwRag14UZAtK3tykyWSDX4nj9uJ17je",
  "key33": "54kRXSSPBGqkGYqhguPTBsWDm7RtjgPwpBa3Fe6mF4LVVu39JqzeRhfACf9MFz7VftBYyBcyGB6joc6cKXizxB8Z",
  "key34": "5Hwg8mzynPB9es1NfuPdD9MSgQKg5GeT2pvB4QT2ynowtENb6h9yoHqipz5cq1SFtPBWcD8Kh3XTL6uCuBd88NSc",
  "key35": "4jK7MNRw2BBMZrvnNgPzhQ7X6L9J65uE1j4wsm44usxoziFPLWmSALWk3RC16BxPrtL6qyUryiU4TUWJJyUt7FmT",
  "key36": "4Fz8k8WJEs7HN7SNa9xLPTkU1Wa4AdsTSF5pXJKACYsgR6AnijqCHYsMYHLjJYeVZaZV77Pj9cVmsbbJKKnqtqJJ",
  "key37": "4GSoSWUEXQitrQnExbgJHzVZNUgxkFmCJ4Z3x8pYFX37WpT7oWt6SZ44hRbB6o4X5MLhQGx1MGgzq44pvKH7ovzs",
  "key38": "57op3twxiGbe2hvEhUavgB5bA2riQuJTJM8qi1T5ABW8sStyV4tiwkpKXD6Hfcit7MqHqmoxy6FDmxfgpBFiTDnb",
  "key39": "2ziupvRaC97TvD12GgtTBHWqwvt9KnJd4f9yio1AF7R5LY3BPbPcSopv46TdJXHLhjB4xzcJdHWAVgrfT9HEVmTE",
  "key40": "2NFXLVdt2NwWMTs1CrpdFjcN6gWFaUksB5tRzUuzyyKXrDHdtuMuwJYHFJCCsEDNi8PvrDrJbBh8miEH2XWz8tEx",
  "key41": "5mBC6ewsStvbQFbFEChQarKaQaakf9f13zkdBay61SRTv5sezE5YnUqE9YJx6pqGuD5Rqz2N8oFN2c74KvehyFhy",
  "key42": "2fqitUGQFvG1idKTYmWQWS42dmahdvdbadAES9bn7FdmGNhddCD9vuaTPYumwpGzrWf4zaRXBqaGaDLTh8aKxMVT",
  "key43": "3vHQdrKA6ES3wVeRa95ugxoif2K3jBSpCNsLKsAg1dSG2ewe7kp3hgMFZHbDcBKxxojFCjMc6y1BLvZuwxMHfUgH"
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
