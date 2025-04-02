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
    "3psQymoYbarkWq2qC9D9VtVMX8ZTyyrVkvyTPbvRBkQ76JgKatYXKiqdAgaBSfcxjoCYCiDnbnP5UZp7xPBWATnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LjNjU5nAjR6ChbfZYBS3KfjJbsva96zar6B54HdpBw1dWpqgduFhmTpBo9em6U8ccoNaeQY7Jgq1jFyKbKSY2Ps",
  "key1": "5q52hBSMfEEkCWVdxzuVejyQJBn1cRRN9U7oAjTdqUJgq8iHuiCFHssx5t9GiieFGjst7KuBBguZeT4uHBXzTByd",
  "key2": "4aYJccLhnRF8tUZoprVtE6kkqSHbDijwA1Es3VpsTSNe4aAJdbn8Xabcz44C6wXCA6WaGCiJN5RwK4GfFaw85btv",
  "key3": "397jJbSLLUMCaQLP45yUE71SHbzudVsuxuTBisKhSpAjWqtSHotPA4HQjNimX7MpiRA9w64Rr5NDdLDxx9AXmf4r",
  "key4": "5rFfypHu3b9tGfQJ3RPPTvqzoPK7Ht5msbrFfVZX2RSTrineY4xuNv7cZEc5JuDq9U6oDWR4tcG7FFKLFNCQWqME",
  "key5": "3BM6EKsSFPfTXMNbauzi165ariK6dy6HC5h9qcc1LzeTNLGArQR9Jkoaq3JLsuPXoNzTBx6t4VZNeMcX8FRGXrSZ",
  "key6": "3WhJPtU181NirkWHEN3g6j53HCgYbAGHLc4i3iXUgyBjehxwrX9G9vxWDDtrbGrwceBC2ruRcTkWv6L7WkYscRAJ",
  "key7": "2FrAapVTvGrtNCYCkA76fRCi1L3vY3reHs3bnq1MFG1odd454fspvQi71YQLyMrow2eXWa5jc97MXsryasZHayr8",
  "key8": "5g8CQM6geC18QHnZ4qHLnqC6CJ2oyrpGCFEXQTiNJhPzC5v47EwS5ZGvHpRBeh8HgificsrK5PxdaFGKNdXXPiDf",
  "key9": "5V8gqZmdNvD9pZPna1F271pnzQy62dK6KcKpVcuc9dUV8N73vfMvEoEvmTgjQUMGSje15A3PL6JRj6MFnkz2D4u1",
  "key10": "32ZBc7huKtcdpL5xdJHGXG3NQAkGwzNG9EBg31XZPDaRQePYa4JvqmmK4E8r1qyZpzHChmbvnXVeywJqsDq2wBiB",
  "key11": "HWrhNeyDAhztFNAYuby3atHaWwpV6S12xCECB3KyHEbfUNwykiaecWsiDySGWBofCKph52sdPF9Js5xREDYayK5",
  "key12": "gKGJgKB4tWKzpL9iNsMtpBUw5GdUr3bNBfvV6BsxMziv94vGSp1G28NvnxmnXnGZp7XGSfmXJD25J7bMTM8jx5V",
  "key13": "J6Knf2HDJGrY7yg4dSUzd6srU5gQfKB5ZLSkRAkYgbAjBn7ivCESV2pZFD5tq8JjNyZUQBPrLunVfHL6Rz7ZQJx",
  "key14": "3p6e4LgL4g8eJ2botQEdiC5xE37UgPpm7kc9gVT4jV9kVTQh3x2qh5VQzzqApgCko6EZUAhHpPfToSqDwo9BUM9z",
  "key15": "xMdE5UcHMtax5uN1qtP2XJz8pZybFo4wLR5zA3LL4aeiT71AyzzHCVsTRTa6VjyzJP6286X5qunM9CAisAKdzTK",
  "key16": "K2AJoWo21PKjub3hMoqJDPHQatndcP2QoWufAgRxi3bjRfP5UgeVqk64aYDquBYodokPnh6gsFPYwTEVh7wbTtm",
  "key17": "4zCpjYh59NrSistDf5HwtUF1RZ8iibe8wvn1W8JcC4yRoypdFpmdexKQcsXMjpBUmj4MZjQmfZthjDisMForudSg",
  "key18": "2Zp7buHzy2CGnCkgkyP7bYu82GaAu4zG3kpixwuNmYGJTpepToL7FikrtHtLvQDTY4wvmYsrW2JnDF6aCH3DC1xV",
  "key19": "5gG9S2wLKhTxpKLigSkymQseSyryEHW82cV38FethUKXVgC8rxJMeGnsbmuSg8iUQaXeKupzH9mfwTeNyHqnZjj6",
  "key20": "3wj5Qs3QgFXenwGm2SM26t1LCDzmmkyxaHKKrd1aUZyZsdj13uYeQZg94ucixRk9Y9KJLbheHiMJQAB8LiCvPrY2",
  "key21": "5gWyNKqCPtoz92ELfpZ2sbdNuGnTPBy5TVYdoisAj6vVB3h37dn7h5EbDrZAFt57B1k1bAHY2EJ86QkxomFyc2No",
  "key22": "5ZxtsHkpVZJSmAqzrSGWDgRdJs2W2ufjCCWDeLjsaMUEqLwwqnR61irbCJQmVqpf198hPaKAw65xuU2M1kfVY9zP",
  "key23": "5vUDVYCH9ZUR5tVKnYzbAzM4U4pYRsxEZgs9iV5uoCDv2Yj4j5wKz39kL9iyi7hBUVQHidK4RL2zs1XLmnJ8Qxbi",
  "key24": "5rAtvskgipX8aQJPac44sXh8XL73kuJgUaB3ywRvNJqmXYLu2N3t3arj4R5jJnsEWJahKT7c9htdz8mqu66Df12e",
  "key25": "FZiea6WL2NdmWWnW5BDS2ySfZAv7uR3jzN7pNt5uWjYazchwbH5cTFESq3FXqdCi3nrH3fyCYGw6m6s5qettoPu",
  "key26": "2AyCjUkHb84NAstpMvaD6WYxzYWrFxYMXxJmpvCHV2ssYRHcTnYhVDTdTdxUTuNpT5cPYu1H11nrQY4Q43QEGzJw",
  "key27": "3LdH5Y9gf27TJ8yiMQhZai1ZCzqQGjaWDr5WmTCDyQ9rQuMMxKcHE1EAgUsMNFWSe5AafKqCuNfuxh9WoNyG4NXP",
  "key28": "44CzYUHtQy75DaR41RUzvZC3p4wMgL8ewYxffuoxGw4J9AkD7MLh8ny1H4fNvt5L4z4eFVU8mhgjaPQL2rn8g535",
  "key29": "57jq82AcdRKyS1MECZnTBL5wNa9v7Ymmb7RPRdrwoXXnawkTapGHCKe4NeP9Eu3x5vF3oTDwiLgjKA8P5FaETCgC",
  "key30": "3KabY8TYUfeuWxA6MN7fzTiF5wyVZoe9YUEJqcPbo7HhUmqpq9JhWeHowmkXvnTbAtbwMDtPg9uCSgBYCoHnv251",
  "key31": "5tcvaR6WRKaS2zwYRjFG18bgQhePR8N4hU6VVpHzdQw1YDBXUAzZ81JtPs6M9jfqFumzP81ot9HNojBZKLNm5A29",
  "key32": "5os1GoapbDeVeESRHCYTM8XR4udaKUoKdSyuxoEEBBZmAAwHn5Ku4zT5s8ZJx3qZnuBCrRBGJwhHZxLDT5NmPE1f",
  "key33": "5ZTFHgGgY2VJyb41Z6Rh7QGjGrDUrDiBY2roxXqPWoXAk4ua1FDnEfiW9snoNWy3EpLsjAFtqzMrX4VAQ4i6UKja",
  "key34": "1zVHn2v4PEHSWcRztBj6NJGBE62e1APHqoAdTeJBTmJ587MaxXTQLP2aJjBQTQ8FQapx9z4BrCHZLaHXJe7TTmW",
  "key35": "2zETmcEjFJDGVquAhWfwCsZ8tPfWe1F4NrLtJzmFQa6KLuNeHt7omNGU6x57EnAuRPsqDgKjbDb7jocXfntDnhKx",
  "key36": "74gEKCKc6tc75yJVnYHisDeoC2XuxHgUqu7t7YwbK5C94yTvZkFBPx23dP39k7274mqCdBau4MJCyMj6yWSgS4Y",
  "key37": "2KgDoYuDvofNANwRBnH6A5xMQonqRGY8qdWz4y1FSUQSY8vgcfUnxa26D8YL8AAMcctWKa4Br2GZUsDCbyExhxrj",
  "key38": "3mPXzNXD3f9uzSyddzhWdvfkCDN3LkubBEcyLcaZH1HiZJNJecGv8n7TG6mbhfC9cFZB17M6yNPiSsuZWA7ZijPZ",
  "key39": "3hc423AZinWFYvS9HC4xxigkCmJC6LBELjYycN6f3BEURQAEDBMMhwZZx2G1ev7VY1hJwgr21Kj72rygWAs8ZtsS",
  "key40": "Yvf6bxESsb3W2AXv8VHu75N89uJxbcHoMXLNEi7TqBu9ivkNBbui3o9oxXAZM4UCkDjvKHQoaHJDAVPCMtgaKFJ",
  "key41": "23FgyNLiaSM7JiFQgxt6xRCTeakkFgoNAjZ61A3AfgqcLiZxNmAU2hHizdcyDVsCF62GMBCUqWRvhj4Fo2ZHDwXY",
  "key42": "SchBpbk1RtdGQc4Cbbe6h4UFzAptvBKHtuaRpSyh5GBuKkNGz4QGN9YuKWXbrEJ2VMDhS1piDeAzS2T8cJunMs8",
  "key43": "4sCCm3UQV8cG4S2ny9mfNdtpv4D49jy1dyEnMp6uCzWfSx962QVBok9Kx96tmoWTg4sCoVL9e7aGpNh3B6fsRYVd",
  "key44": "3Pzg4ymBnKksThyUYKc3126mFRFYumpotPa9GhnSPFoYr5GcLUn3FTP6wz1kSUoC5CjTj7SgjxzMZSEPB8pAkYcy"
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
