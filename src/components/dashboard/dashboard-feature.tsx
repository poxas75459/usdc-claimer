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
    "4G3fUyhMCScu9212uXBDu1EiM4P8KLmRChzvJn4v5UUKtA9HScJMrnwSnjpUY5AXtETXLMeD2zdKeuu6ATa1YuxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "291VZhdsX7Sxy2wRX2C3uf9jDVyWbkKBHgRReggSfwGFYhVARgggxDSoCrCaekxmNxAJCwVwugyhi5yZXkdq4mVS",
  "key1": "2FEfVbmrMhWTrxrfb7XCfjCk2BqgokVQHdqSgJUbp7gCMrpDfzgwiU2NnBkSAmPDoMR2mARL4QRr3F7pgZgEgeQU",
  "key2": "2hh2CG5UUhGTPtuSuLrwtBYMvbSJkus6x6TvgCfBtiXmtwXr5HPZgm78j7iqqk7D6B9kfydtsUQz1TtB4v81SEb6",
  "key3": "qmAWSQdSsfC3aY4heBUZCvGykuSrkqn3UTMBQa8KJEz8Z5FCPRQEvVj8uQMJqLYMPRGmT75ZFpg686iWhhgE7C3",
  "key4": "4Kh8ZBYo4Ly7UZ3j1uhAtJSTb7pXWD6HWu8z4rL5jQcQ3Y4n6FuVPwq1QmcaEshRPnPaczjcyZKigPkQE4uiCgvA",
  "key5": "24tiRndaPQmxQn2ePFrRGPXNKNUTH7JDVzo3LFUvD7U3KEAry1YsKh9FxdeBw4WEh7ViAJ5WuXa49x9wR8gMJKJ5",
  "key6": "4CmAf727UXdRq8kjZX53RvNFQZZnJ5nPxN8weV9YCPdaKSZGHufyKVeXDxv8dpto46BJAB7Q6qCZTWnWXahevxeE",
  "key7": "4zr6pTvMhcV4XJjT2kU6em553HzNqTSvdNCfqR3ypVKt9gtqKtE4EZeAvqh3kGn9b3xE87vWH4CacTHMHhMgmAx7",
  "key8": "5vT4V31bhHsRcL4px4qdwmr84cYFNmEbpBdJyNCkkQARanF7ndWeiy6Z1qsaNVR1HDRutzf3BcpP1LRQGqrixHQv",
  "key9": "2KFMmv7UJ7ndAoEQJqEcJTy9sR4ef8sMmXnUiCDdyF9YPPNTDK11j7kA6jctYtrXemz6VcADzTq54gP8PW83jJXd",
  "key10": "4A3raPsepBdFVpdG7yVQPZkkQeXkKTU55RnpmcV22vxwyZcc7eYLEpHwKmmvCwhuFRsFpmkm6eUZkxqXt5gTubFT",
  "key11": "4mL8maeP98V8uNwGgN27RNH5d5Yosb9qmHKMkBBvE7WJtjWDUyDW8z9hVoNj9qtnbHYjkwYUAniZaibdBawS5pX4",
  "key12": "4MRTHtenpzZMVkvPbuBydzsWAR543cLFMdV61jdysEKkGq27sR4YFc4LR3yko7B4hy68JcirLj4DRvYuKtmAYpag",
  "key13": "5GhmXNDQg3PvgLX7oXMPJcpYjh5MasBquPttZF5SZAAtmbizwin6BKQCvAfrYd8xdQVZCsdsFLTjqobxxg4FRaHy",
  "key14": "5yaPNZrBBVFJcDcirPES8BmmaxAfUQm5grGBiRXhcF9C6meLpiSbqaP3nvv44rnWKs4aHoe35VT6enqkXR1ScfYm",
  "key15": "4rx7xBLT3U9esF8RZHXesQ3gxMKJHMvzWuSocMK9EdKqLQTDqTZq2AtQeNp7njMzjjCmJBQZaz78N2g7Nn1j5CUm",
  "key16": "54qALpFiH1MXmy3T3CUC3a9of3QKuWDbCvubmLRqd7utJkusqTadPUXwA4wUazFmH9sw6hpjC9g3bpSstexcS9yp",
  "key17": "4EeuKVxah5cJQnNXYUrJKDbmncuDHsVUDRoB3XZPYKq1RcytBuUN7EgwKNmpAV5HT4pE7HHAzcUgMY5sEh4tBcAJ",
  "key18": "4eU1sEDk31T4HajptnH5cdzpU9HDac5J97DEctEgYZa6ArzqVpQsRq6A8F2L61dLYyPfLtZd8Qrct8JpRWtFoXaS",
  "key19": "26uGe2Frm3rF2GzkgoTn17X75gv2sWA4d23CobeFrogf948kkte7bKWKznMXdPSSjfauAoVPQ7HRH5JXFZDfRQmi",
  "key20": "yXvtFfTjdQSv7F1GP7b12nGtWESFxg1zCskZjwT8tmYzS9PoLW8dCTmsx8nF2kAXP26WwLRe4wLEhi6J4LCGToo",
  "key21": "5aaNptfDDfrW4u2niR2n84vaHQhNXtk8YdQVKEcPgq61AivCWzk2VYeXNXXCjqCKpxdAnxd6CvQRUHXw7yENwYfX",
  "key22": "5QBxZVmeMAK6EtrqsvNQqzaKW4VNnmcxyvDG27AfuEo19aV2yccVKQueHJiSMBNYupQSrBCv2BPRNbBD87TBgP3U",
  "key23": "4ZAZuNjxcpKzDxZxbzaRriz2j91b1cPT6map31HaLLv6kbcNYc3PXDJUVZT4ArG5TM1zMitG8uFcjgdhdB9PJwWx",
  "key24": "5QL3KDBWZBVGLXYBs3vGLibjPjHXGfhmqhy2nz6jbWfn24tS5p4FMQohu8fAirm8sZwobHAS263CSv5BBBCUmZ6F",
  "key25": "P11vBgJyXpkGCacTqfJRzdKvgmk488VYedzF7fGuPNw492Ah5ncWWp5w7MxQFShP1sxr4Zfuqg4ZJ2ZxedZNs8P",
  "key26": "62QdqeVYAJp1ib7makQn5mzVVrUV1HW8U65uKffFgSxCVPDF4BwT5KXTfuU2ninijPL5xTYwER5QZcH9FtDXescs",
  "key27": "ujscGrunetEkD6upitt9xoHamVBfy498xGZ8FuTrGxuGfnuBbfsLwaQDNsAgCiAHg3zgNSGaAzAuViM3JgDo2qr",
  "key28": "3h4M75Aj6eiRMn5oa1UtJjQ3tJyBAgAfJq2wJVsRtWKLXDwX7wmU3g7WRgrnZhpDp2dJybTNxt14oPo4c781Yj9y",
  "key29": "2dj9e2TWtMgcidcAgKcHFoTyv6J8EQNuen8BSr8xaQB5gw5s8rjHkrqNqM6UsSpdDiun21zcVbmtBM3JmBDLV8P1",
  "key30": "2xWCPCT8hghKimTHsG75m61dv6UCCeb3TUKFNu4PMAHR4HKng8nLQVUR87qHWvVTCTYEq51TbXxo2vXXihATatum",
  "key31": "2MmDeG7UCjD7iM3h3iifrWA9oHpiTexCVMkwgJb5aiCmTXaHSnkGJknJhUmMHFJVyAqPmGhf5oLFWvnzbnNSuRXX",
  "key32": "4HVBX3HHLRAxkrseTAZyTaGpbdeou1LffjhoGFHqtmFunmyYYeAiWiSxThWAcLWRrdNFNVsdmJyJDMBYT1bJUJ38",
  "key33": "2Hvm2xBC3DzezWQwvXQNNfU2fx1ZCCF6hHm7SJ4n9Ui8PWEXt1L5aSM3Ag53YpmZvpcK4yTzJzBWNyNQW57bBLgs",
  "key34": "5McFjcd8Jo7RBCRrZvEuQHApXSECmGxoJK1wqLrRhsZYEHa8sdvya3PX38Ny55M31fJwQNLWt6e34pkFdGf6XFvJ",
  "key35": "3ArQCJZ3rhqRrYzzG6NN1tKALBK4VbGHk13VkHdygvrdYJEzoXoiCZPL36yxBz5byDSTgsmyS5KtNZzkJ1Xx9GSF",
  "key36": "HMjmMv4tAVNmXe4ooZaQCecKPzXb9nvCXj8VM8pbncqGnrGr6JU1GRTWFQMtutmW2csUxe8f4YrffeoLU9LciPq",
  "key37": "2AhWtMo52Pwz2ZHSStrUTSNW2mZ14WvkuRkW3D3sUWfVsVMtEsDagVu7uzEac3Xz8zHvA2gi3vkPs1hfYpJxJBxT",
  "key38": "369J8LE75dHYQST4cTJJhvJT7DJ9rUWg2q13rhafkg69oZ8tXHHREWvAQf2sbSNiw45gqyJ2rFKdfvpEQvoN1Dcs"
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
