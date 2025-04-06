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
    "PZUm7SMxMaTGgcUiESiPSYpmKR5wZVjT3jpq1ZRdmoVf79GmpB43Tfrbf1T12oVmRRqoca6T5Vbb6V9yL6nu6mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nLzLsja3mmFSiqutDWRdSMjZVFLzGrPuhFBtmajE44AS6CcWKsVAcdYtBus6UW5PViLkNoqyXR8otK8CXZXH6d",
  "key1": "33CESwvEt2k5QgGhTAXidga2jEDpy6AGENGg7FSDGCy7wx2ZxCZfxzCiBDzY9f2Pi91ufzdXm3gbsVrjwDGe4zMx",
  "key2": "3cKF4MoWMHC6oPpXt1FctDnG8r7S2TDkJX21k7TK3CfuEpiuSmgdMTXZ949ygRimiwhKyvVwuVwdGATtoWnNVM6T",
  "key3": "5mZ2rQLVxLKisTThDYVmZQ8yHSuicYZW35R9Gtuqb2SnVqYHaK4E8TqhgXY4rupHF8KpfDnGb3yrZ9eHM9Hkc68X",
  "key4": "Eg1oNhsr4Bi4Ex33g2JkdZyZRou92md4QCwhxm6m9vAjpyLBGTAdkUooetQHe6d4LWpThUozFgsXmSLLvpe2EvT",
  "key5": "3GWgcs3JJpkdqqWbp4Bq7cWLDGFfUAue7XNHu63PQ6nAKc1n3Dvw8rrmW1Z49KEjY1yGvHbcjJBLqo5iggvqMrY5",
  "key6": "2bicwBYjnk1HzH4uZPeEBgk5dpvzcVepQGmnkPyn8ZjXShe2cqZmUXEn363bb8r8rtvQJQobc4JX2Kb5P5BacTuk",
  "key7": "4vEeSyZavWUPQx1MEZjpfhDwzRbQx72UtYQ1hDXTazXKS763ja2GTTZHVR6DTnUarqFrHixYzQdN95zVVvhvQbDq",
  "key8": "661mL5ikYqCaPoVmXqFAxGyERssFhBj19AcWbf2nJws1imazexovbwE8ZnLvRgYckRQh4u5P6K7fyWTw1j76RhTX",
  "key9": "KbrsPY5fupK7Ewu37EDqUJV469f2WPGUZnairLqU3fHQMbJhoCRQmS1B3LoM6wT3GRV4wLHvPSEPZaQJvvRNXuw",
  "key10": "2SY8vKy3PiVqsuLL4b2JpwTY9vBb1v5Prc7pxaxjg8UZBMaF7gNjN9AHJQQZhZcd6Z4pGGi5TJbPKzgzNms7bNK2",
  "key11": "61w2iHUyTg61s954mfB8x8pW2BgxJKJ5ZJFNqRx1xYvG666gDNa1j3mEMXhCCKfFATJ3vPpcZrPjYosettJEYTYk",
  "key12": "Svek4o9Tv197XbmhiPsiYcSVfSJUaAPg9sDS8nSC979nCDVU9G8opnU2zjAQturLPpyrAKAX7gV5GBMbaiY6TYZ",
  "key13": "3TN12NYx5syDEXKsPYptndJejTUWakzsJ9gDRFmRdvLbUrc18Zwd8wLVtCE36Y6P44inqiEhMnucE66wixpzQJ6C",
  "key14": "c7FoEkNrDvjBA1Uz4BRzSyRaoUZLMJpbpvfTTHRNNLPQusukV4dVgSb5JA1LYiWKuaNJcxjEgif5EqSDiWyLxV7",
  "key15": "5asrNKWzMReaV8Jr5LRYBtT4ohekoTsVky7mpzQCFGxhZ5wk4iBN1AF5jtcGATuzJP5yyog8yw9Qpshu1GyesBVX",
  "key16": "58SzYd2oQzYrAHJPERs8dxhPkj6yEX1VA8yNwQRWHqWThakUWd75yUCN3wKoFe23Fa9KgmpjbM3sNoaxjPab2wqs",
  "key17": "5UR2gwCfwV1wzJUUDxun7iCFWnk64S9AyjTXmjQnoVi52amhrF3pkzdtChMrHrRn3GUWkHPR3dZeNd6m6MzmKmpz",
  "key18": "3CWWJX6Q5jHa3XS68GcJUCmj6yhmYJ3stwCHPTEpL8PXn8Qm9wyXT9b57VUAfXabzgxNQUNY59cg9Lign8hueCwD",
  "key19": "2w5MdB9rwppxiPsLM4TQDjqEbdDTEBeHsaRvayNZwbi81pr6x2ZzdShWKD9f3Xd1mRGMK9eqgnxEWdG4RUgsLfXV",
  "key20": "4NUyJbknETtVyZREyxicHzgyamWCQQENkzWsgwrArxyereYH6UZ6n1uC2FZDkSUvPpauYUMebvp5ZhijhfKjCjTq",
  "key21": "5TVBfpcAqXXrYZSNVh5d5QiniBnJuneJYFFwnoUKZC8uzQQdJv1LKHn2UwTuZRUupYp7d6zeto49p1UL3V187SrH",
  "key22": "2L3TJJNyPbWv2jpkNfxKGjUE6tartctKYsZQR1foaY4NdCzozJXwBEivzTpVMxj5XR1qy374p74xXhcYDdurstbt",
  "key23": "5M7zQPPGeonxwai9nyZH4yNjW3pvMTsXoXo8ffpAGDomwhqqA42g315AoW5Y1tcHxWKW1ushESJYCF32vRpBCcDw",
  "key24": "2EQoqAUeAN1cs4arepL9MKheNKKDY4g9YLg8Pz2Pzm2FykFQyWK77HmyJ77HftvfHR9A4JWHhLNacj5yj9f4XYKB",
  "key25": "3b8TjKh7nhdF55mAPeDjJSs8gPCx1fdpTymtCk3LykuMHJiRcxxzBM4bPchSryqtX1RGgCwFivFxLYXdcj25C57F",
  "key26": "5zTgs7n6vgbjNe3DqeVT6N9SUVAmUogQcP8s9DkuhjzLxzVRGHHVLSU7WNsu6iGpP74Xf8uz47pwq47TGZhJGwzo",
  "key27": "2NU5Ux1EdxmMHBFrmJGYaZozJ6SsLrq6WZYWEyuypDRAMpuCHjRChBJZzY5sN7bBviPz2dNn1uC5c51PrA4gMaYt",
  "key28": "YcZtLw1v3nVTP6HVbFdcvbDF7y8pizhvobSoeKXwCEKuTx3ZT8Vcrk8gG1RdzeS35yhHXxyH4PME4oey1gfsEfY",
  "key29": "2h9JTjv5gikiLtUHJcATR6XFAKLh48J6JKWTyN4WW3wJmTuTd5dhYvcvYuLtf5ecBTtKzjVnPY8DyFzVTotDPpwL",
  "key30": "5zu3aneDcL55sdMKaFkHZfJwBF54Yw4A9iQXAn8WVXPy7VVx5KVUyj4ZtK75qpAYZU2Ciu8yzfBHkPhkAyasH8KE",
  "key31": "LK9sdBtttvy1EzEv7V4h3kKMTcn162M1cX1Efh5VqpV5EJnUGwuz4mZa66w4Yer1JKQf9dXHpfCkx6ZDw2FAaep",
  "key32": "4bvLsDy5QbYZTeUXzgzqTUbRBf4vovQB1CZjDaaugEUwEP2Tk7TQGq9ZFqYgjVyLkjrnYSzYqQeBin1tGSimkb4b"
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
