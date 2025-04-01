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
    "5WBB2rVLfyG66MHJ2vhCuum6TaMMC1JZA5L5iY1B8JS2ZQ7JV1FnXb4M6d4ZnxMxCmRHq8VEzqAJa29jm8eN3FCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x7RmW8QRZKQhNkJpM7Eg1LSfPp3zWabhio4U43Ui5vvCheAx7cWLTbuuub4r8FoXEFoNQZRtEUCj6Mihs7cwVHh",
  "key1": "3bt58g2bAoTS9zHDXXiX42S1oB2NLBrCWevHhysb1dtARBEZdiHuzACV3q7RM1f2WcnrGpkz3i86SSUWTikgqXt4",
  "key2": "2UfPMAUabX5Q6ux5WCZyNNSmGCkrTxMQJeXKT2PGhRjXxqkSxvnegPdNkH3vDeWK4ShGq252xGzGgnqMa8z9ZFN6",
  "key3": "4fT1NcQg5WuJhAg7mN4enc1kfXLBwuthqunSQGKV2MbSeAbkZsS995CJWjCbGYJnZSNYWQADCd1uMSDeyZnUUji2",
  "key4": "5Ya5UR5Ne7gNbhnScra6pAepZM468BZKTGAjPbFuUzpNaciQSeicjjq1QxgjtMqVbMg7aKL8kryVA2wADePRCHZX",
  "key5": "tQcEjMHgYddw6ETn7CjNN4MveYipYzPe4WuZS69LEkhLE8JxmSHPYBDWJ2jmACBkXYCVNHfWiTFVi4sEiSonMc6",
  "key6": "hiTHmBuQASzL3Za33Zeo4hMMKivZRkzun9DygwmG8bUrdesZ2agPoF6fRGsbRdMH4uac4AjAq1PpvKE8pWL8MHF",
  "key7": "3wedn82gfkwLcQCse7KeBBMGx1uejr5CYmwmRWxpe9bio1bfWbEJarqHyCmMV7ui5xq4gM2ctbdLV2WcBt8zLx1c",
  "key8": "3aPTA4f1LuEibj6ovuDwsP8dv6RV7hXTghUnSNXZogaWjTGbY2c7e4Lbnv54ErsY1esuKNurBykVPhzir9Ca8Mbz",
  "key9": "2C2k2ywDkPKyJeErBxccTcipvGAvFCba3hGnrjLqPwpKfHJA9TKAhiLAkgfk1iN76WmW4RuLWpaxstiYjdSX9Su7",
  "key10": "4ZHqmdhNQZxYJq8z2W7PyBVKK4DVWS6NGbAgQnkaqhPDYwYPiXb8fAAepe7ydBVqVKn97ud5y6nKWcVKD2s3c6zp",
  "key11": "DLjAAXTHYfHXiEMv1ZiUJPJymcTN821cxvjcdjLvYrLWnnabEXgYonYA77LUUJfHN39Qcap8nb1MJmwYj63UG6A",
  "key12": "3UiPvzwrBhHnqxTNoLw4YUYCGmRf1XE9L5amt3rAt3b2zhh8ov5FB5MXctZHKgenA37sGRsjMDqzUKgj98UcPcno",
  "key13": "5BiUCQZycuv1YsnSiFqWYKCqV67fLGym3xpt3aAtTJyHg3FWHLN8ecyDDXL55CikJipjLLqDxLvrjKNo2er85znB",
  "key14": "3mZ1XnaBQ5613utTfnUyicoARsq1ZSzVfsmNsYKLKypKWUnzZ8c6QaQqccTZRnjjASYKUA9JWbQ35131q5e6kZzS",
  "key15": "2cP4bV381yRf5GKDYpmBtDWVJvJWj4UJbYxhvGUomyqJngUMVaWK7C1QT24ApNj192xDi4JU5XJKcaJYcgkVh6RY",
  "key16": "2MnW4dRFKRNCisL2KrhCeFU3c6y39375Tf4qV7zHAH4JLCKYoPWYoYo2jxbKZ6kcLA5vtoRCv2opnvVYAz5q8N2u",
  "key17": "4GDMZvn8UQYVXHaP7iC7U19dLpyUa43yGQCbpgGL47WuQX5VYjnqPq3kCG7fV9HdcfiNFTtCe8Xba4i3V8ngrnx7",
  "key18": "4MiCnCiNrVnB5mEYw7F6Jsuem4oUb3C5bfRZgURHpzA4mqFJztiUWaA9UoD8zBnmkeMufXAg8UaQ1pPEWkXhKjtv",
  "key19": "4eSjpg7vSXBJgPEEJgZbge34L3fUGrFhMZAqWMKPqzKHn7N5GUcLqGNaxu13qR6hu92cdu7KH2JHeMb952TLxnSr",
  "key20": "3vq5XdLbgUWmxDtNnUbtSt567NG1j22SRtFgjidK7ZXogFoeUeyVpTjkaiPT6sCspkRSETxUvGusTJSkYRyZDMoL",
  "key21": "3QEWKACH8uBzGD3kSgx6xddcCyeJ9G5c2PHfeCa7MSPmvqR8XkRfxRXoZL2bZPaqNU3giPUMjRF7vajhkGwHWk4n",
  "key22": "rW7k7ggM3PDQVXX4dsDR5fmzgXgVe9JegHYKkdFAr5sq6SuZRy6RgS1LKzGaby25LWAG2QPPXj4KhuSxW3P2CPp",
  "key23": "2ddnB7ewHcJxxRaHnLGEdr5Jta9V5CD1S2ZRgfKkgrXv7xhMsR6ZGdCZrtpyupf9f6CscBj4dWfBRhwdpn2nttZh",
  "key24": "cRYm8krW6HsKN7oGx2ty1b8vbSGwVLkAHAsZR45k74DcAGumGmHL5Eg3BvTBw3L9P27tRxrjMdRdUsJJvA3nG9G",
  "key25": "3JQRRxQ2tgRtQYeT22C99PmK8N1MBJ2AMPoqTLPM7EaKWwdNx8vqWTmXSBmrVkLsXRayqNR6pk443S7Vv3UtF9NB",
  "key26": "4fz6SyDt8iENpQxxvgd6t91G21i2KS9Cnv4jbhPQ1K8BWEBKAudnM2FN7kbBXn3b576Agg95DRMzL2Ave3LmSY4i",
  "key27": "i69fQpgZtc4Wafpa7scyWQ29AZdtr9tzkqDeLex6NqqoLr73WVwrbghtu2jSyPoSW6dyhzTGLCKgoEgxhJPZV9g",
  "key28": "3KdvqWvZx6kh8YGW1PvatghQ3kuCkXAm4hdfmPsNmJxbsnb8AusoCrf2DHctQJNfcNy6dfdbFLe3B1bMHih4KVwf",
  "key29": "4N5uDXAMWsaxJmGRrT8VUCdvjE8eWhjXqaQeb5hbkiHULvn7rWrxXZdo7qr1Bomz7jUcGZnWtTA2iNG4nPcoEFt3",
  "key30": "DfnYyp9zD8mRJ2Ff3U1eNbDoEQuKXceVgzsqJi8LyPR7ciZwDT9uQ5Mmg7qpYfSMJTyaTERHhnkZSeX7gUwodAa",
  "key31": "4bbRQFvnbdjj3MCAG5tgvPNwD75Fi6s21AWxuVELdQK7juWJQpfV6MnbvzjdvY4cn1okKJaLb9fJqtdwQgKHBLEX",
  "key32": "545FnBrxYPECZMuzTwxw7KzAoXoizdS5BCd6AE6Mi1HzSpmWEFeifdjddBnsVsd3Uw3UNTPo5iCXTXhnB7NSXRDi",
  "key33": "5mwugauZkoh1JVuscMMWPmZpQtgyy3kGkp6eXTRB3f4AfBzpeFyang1BdLopBMETEGckNMLDr4chBfNQA66RgWS1",
  "key34": "2wToeAd61FsXKYgnEbjb1tffrX6th5MtB4ist6ZALERof3TxQHZjh4aQote67GsdKb8t4PK1SLntsiLJf2Gtb4je"
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
