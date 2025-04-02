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
    "126ekGXUepzQt7ySpkotnjVrFaJP1J4d5zwTv7rrKaXr8xyFijJ8JhQPRQNMDU7T62rjzZBoGJw12k7vhDLrmQSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Crrh28Pr4jHSFoxhBanbtr4YtZLQ78wcra57NtfiNRBiLKmUQxCeV7ZtBcX3bezWviEigjGyxvEL7AHrFeBfWD",
  "key1": "2KPFXicWCK564sWop7kDqdxpZDnU9oL7iMFqSjahY7LAQH74EY3Z6PBVcjWfvSRaQM7zLpGA3s3uz6VcTmnkHxZm",
  "key2": "2AFFnmtG3wCCiac9X4nRwD6bKn4apQw5LyvBQtqFk2PMfYxXD43g1nsV1PxHhzxGjTVCM4udBVDpMHsxmWRwPQQ6",
  "key3": "4e7xdjQAXWfg7Aw9UUhjtz7FtpdeLxwDB9ebdeNKx7sd2h1TE3mFdKyWLy2TrTEjKwJWFEYk6wN4f8DUJrmXws7E",
  "key4": "W6LWXfEenfVT4HrHQRMyMvmgQUm7Z6BrTr1frkJWq6rf24vi7D5qi64XjmFTKpqwYqa2vJ948pzywbZ3cv4LS2E",
  "key5": "377JgfgJNLvBoVXs6NgpJWVykLozVFJ96RktY1c4WMGuBMQooPmdMNsh6rkuSbFHRCiPxZyQVrKw3wggE78rfEp9",
  "key6": "yxDhyjoLAmDwicHGSBgwYVvRKgsiqn4BmQ2x1pF6BveazmZ9navXQiipQN4QxUbTuzwGbHxLoi7gozLh3Nx1RGy",
  "key7": "365DojP7HRpY4zcSiobsmuQauSnQuFjNzmtN3pjdDqwqtyja3Je1vKU1JVDG2DYmVDTEMSJwrfJU9RLmAk8onv2t",
  "key8": "3NYoKyZfe4yLj7b6WSYanENXHWcjT1vvvWoa2UsoLnJDaK249DABfqSTXsxNs96S5LqGrzuD6CTfmX4r5fsa5qsv",
  "key9": "4V9aCaxeZ4wMwuXFhWKpmdk4VqwGqhvPmvgHUSyAM9zeypLb2EscQLY4ZcaMwqZod8P9uSWbBhr9at329jhstSGC",
  "key10": "2VzzNFwopfQ1qvdfS8HnukcH1cPS7pffHUU9WPv9QQocU8eJtwbe4sShYpTX6LHMvdrskRrf65K6C8yiDCx8HeGb",
  "key11": "3hsWQTkNT1bTawuHUjaNgjv9SagNHUG1k7LKcYEqfDC9fZg3opBMRUr7sqCGJ9g2eNoDZy4XGK6wpndjCd3AUus5",
  "key12": "c8vYcRt4gu4Y6VwpMsmTWYXQsmg9FmHdKQPc7s93867TiFdm9qJpj9fRcVNMTbVg2fY5UNUiirwEFohjtyGemz4",
  "key13": "4pohdRkCnjjtMsucMGUzYLqmhJjLsRDFLGuVNrVEsMbVK4WfnWReZvTPbmEcKEa5awJg852E95ZD8zHwV26CSNfB",
  "key14": "5MGFCff8BCQ5B2gy2ej7UdZraKHKgmsWUwsvMnr35z732L4DCQfj7qfse2cU7wc6UnjDBuCysFwCFVoUdA42sUhz",
  "key15": "4zaUXCQQi2obx2k7EGG4px3t9tCFB1KfcAxidnVVzYY9AMNt6UJmwQ33dwsEft2FD91XSH5spbVWrBiCXqZAhVBg",
  "key16": "3iwY9HRUKtFKkerwFj2kbVkiVpKvEShgCJ1Pf29i3AqMbSne47tTBHTq9vSGC4DL49d8W4587vyFPVi3UBg1E9JX",
  "key17": "2YS3VH7brhhEPgp9UoB4Swd3Vi8ptiW7ZQxPRfrfcFv4msi9B22zwvDDEE3Hhm1v1JgcJL9P8GsgnWKV4kEg3YA4",
  "key18": "5qEkjpjCgSZ5Kxb2Y3Ckuhq8byLa4phNocNyE1ce44Gor4RAZqwDbFD2vd9tPKdh1i6r7xoKy9AYUT8xbiDdWZPW",
  "key19": "21AodGttz1pXcCcBKVyk26DYn64bTEJfKSRDqCN7An1NbWGKpDvmNBKBRRbum3xPrtkqeQWH4WuUrSztuQmwnDJy",
  "key20": "rcdakPwhurJ3FB8QMBQT9yo1co9zQ8BUPdis9XYEr5FBmFyswC4By4cQeUtaXuuR7Yt3bfpwPaWz1rphJrpGp3d",
  "key21": "3AjtzhvEoHGC8iAXUYE839hWMKNx6JanxFDMkiv7umr5onLnhsCLrAv5MCrzJVo9ar7xZyZBwCCWBTZS4jC5KWih",
  "key22": "kXgDBqps56yH1uJmHY68Ss3e1AWbqKLUwXTgVWgwpr3P4DBoJzcau2aYytZfnCACtHWa63gcsa2ugz44TURfRcW",
  "key23": "4fNaHj63zWKmryCiyai2FbrDmq5wok8ycNCB5MDDvvtHTvZ6N6CzTTw6JahivYtRFMzBo3jbVB4wHtECPfgHVHeD",
  "key24": "2v96c9PvXcFdrD6u3N8WJbeWnXjfBqYUU7HVG5tnoyGwPwQhQ2gncEpMPNzeo4h7s4d7Rw13GDVttw9GD44RmMrb",
  "key25": "U3tDvCwivf45z51dbKQmRPeV1XKyH8ggjguM7eFYsiKP6MbKpLVQHvvyrpw2M8b4Ftw6vU6eh8MCEUQWKFUUQSk",
  "key26": "2UnwSiPdvyKa9VxNQLrbgftb9gahmVfDh9qdi4P8XjcStD7uBzg9iuMvzVrhPqhHEodj4eU7TreKVWiTrPMCAA5w",
  "key27": "3c5tpu3rGxvXbGw35bY6RzPpWD7AmwyHdi88P6Ti8J4fMYv2JpofpB9pj1MLAZceWgqXKw3No8HBfAFv1FtqfQX9",
  "key28": "3pAs7ufUgUbizmSQ7h599LYee55arnf3cPSyFBsCrqHHfmxjnkRkpMx7x5hdc2ZSZLmRoa9TFVo1QSUdnzMxgz71",
  "key29": "3Vym2dATeNRCbFuP3vQFbrwTUJQhvNd4mcq2EcD6wJNMkP5xVR82iFY2FqCr1UN3j2xYFD4MnrXBW2NFprHdTqSX",
  "key30": "4t6yGXWZgRpVL7YR5bih6LFPWMUkWr26RkgL3XtWzJ2QvDvciyFy44bKFwm3dwZ2VouXL9smENn8vQG5J2PoGf3h",
  "key31": "3cChCjG73jn25BPGT7zjyLNMmeqb99FoiJsqM7rpVDZ87yh5BL9ZVGTfwS6v9VEhoSmVgxmCyEtYpCXUp2eDHV5G",
  "key32": "4VimGfFi1fGgGab7LzMABnFprCnZkG357tmttf4YBsPYVZMZaVYzZVtNPisRcwuotXEomp5hr49Xm7cKf5LMxicy",
  "key33": "39ZX12ANjCkJRqRJbNsnD5vUD4p1hwzuMnNE6nyj4qBL9XeHGXtvXB2E2ba2ycwvnTz5dK1ytchKZ6XZAuEKktAQ",
  "key34": "byP95oJ36P8VCwNoTytrpeZfdRGyGf4k9mrMCfRrMifdprpqJ65Sep899mUwLz7HL1vu5quoKcpo8Agb7uBJveH",
  "key35": "98ECmwgLhRFEVr8grLUveHGYgQdNJAmvyhmfXKXEWpyQPrDcs48BDxopdqGhB1SHmzExETnnJ3oUx54uYPzE5SK",
  "key36": "UfmiWQxsNNZRKBt5Lc1bxMbsLFgKMdMk5K1NTrJgsWFK6wTviCLRtPyondvdwMo5yddCV8krFxhJmbFSx7Ai6zB",
  "key37": "2qGG4h22Q7Nnzqe79FT3byXXuH2YJpfL2VnCfP5sj85qUEvBqNKuDYwHFgWyZTUTUvNJ1wd1MCPoDmYrQj7PC8zw",
  "key38": "w4LkMwYc3gxWK5THmU8HdqwZjWENsD89tBpn7mErP8yUvNYL8HnLKzzs97ZTQhoUwAUQQL4wuUfS8Ar4CgYK3Qc",
  "key39": "GoJ3Hb25hENCRuckAgw3nSKpu8sdq2LdQBsztDniNiHMhRncvAzsDDWsgoQRGL53PDKewnGh2LWWBgxDyqRo4js",
  "key40": "NnM1WkxpbtHdz3mzqZ1jwJ9ny3YMcVVVFg9gjSxRspQXwbjdKWgMvADNd4UKwcn8EJXgD6LvouWocJKvZwu86Eg",
  "key41": "TMoGEWnFGwCffYz7Xsc14XS1b3pK8ksEFvzHoSkr8gxZvzbt1iGtpKdD8iF7uG9R4PpJvc7z7pTSyjv23DapYZN",
  "key42": "2ZBLhcz1EPGuLGMLuwVd7zLbc8Y3Mj9BUQguZA4RW7F4enwAHCRgt1YErYgTqdnY72vw8VqXnjzuqMixm2kGa5or",
  "key43": "5tU26yw7cW5AVUGNc85dmpv38HYAEa3sPdCRCLLbA987CBKFZko4eXudaycAckXYJEvRB5NfVt1Mx7wQEDHE9vfg",
  "key44": "52B5TKwvPEwfDfYeE9gForfVdFbs6V13Ru3rqkNYps7dfcawjC2RWcoq3NUBew4PdZ2XoTADSE4V7r56GuctFaeY",
  "key45": "5Mx44zE6zbMPszfebp4eZkptHZRL6ZmtQTYJgijcnHdMD7MjaSYozHa4YjEGWnVBi36sh9sJfxYWc7CWfHQoSjba",
  "key46": "5e43cYnYMUqBC2N96C9GEpb2rSqgZa4LAuBNsfTTPbQPU5GiDgjzayFwHKWpbAiu3Fi66VvJSijvgDQPV2Vnxtq9"
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
