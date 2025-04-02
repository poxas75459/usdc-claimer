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
    "aCQvHsiD4v1EJrKa5xTRKhMJTNNeic6Fnj4dX8WUVCyMKrUHumbPFzyyUy4WSyYfedMpneeGfKuJ6DZRekwh353"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RNYKDpyu9L4fJBuZT1d5QafWegdEW4xxzsKHc4HtDFsR7QzKkxrnVeL1tNpw7kd8chpof3k8GGaBaTMBuEMCU2q",
  "key1": "5Kg1qJL5zEQA9zyaN3ZSB3guzYVH31K94eyUDCYJJ68j23SLma5k1JUEayxSWpqifeP4dMUwC3JjHTD5CfZEiGXx",
  "key2": "4dMf2SpyLVadwA3fdBZobBSMC8FEaZcuFKhNuaDGhMFB8cvPtz9wvW1SjGCjVmysDWKatouenrsirx2geNy7b3xK",
  "key3": "5ubh2EkEdzmmQ8aZLiRPvQxHiZcQPyP2YZiuMaP4bN9srvqTqb18CUuLYENLetY64qSVFPFLr1ChtejtA7Rf3a6n",
  "key4": "5fYLiaAnM2cthAUXXbjifWn5JyZDEBBmcPWr6MFu9fSHmQFmVncaNEqjmpx3RAWzUeBh9e1VQn9ztVmMK2uyshP7",
  "key5": "4c4zh77ouBvtt8ZTNmdGikvHqw951jGEtaDXHDWBaaQMJeomNoJECxMk8aCCznU3iy8rpJWUHjiCvnw74k7Km3kD",
  "key6": "5MCtqvcZ5Gi7CuCxdUrC7FkcBCMatTHmYxcZgx1FVp1Syk62qvHPbbKgbCZFyjH73gxZvCxJ23ypyDxBsoGD3Jbh",
  "key7": "2qquLNFz1u7u7MiSN34qQKvDe6iEjUdvTgj7dAhfGxj46yavvqRiXgZLwqJ4Gtwq1Z5oqEDxMTdF1Y66Jc4vigm4",
  "key8": "2jZhbUKSqBfszHzcUaq67z17pCvDom3bhwhVeWuYeDEEn345v61dwybasu5tBv5cRFYNXTqymjmMmmuCaWwGsojm",
  "key9": "37mBcA5D2FUnak7CHZUzygPSFi6yhD7nHg3K3968doAtY11CnXQQNq3NkguAuUcoSxaMfix92uLPaxvXwcdZMSoH",
  "key10": "4Chjg3xJU5xZfWLnKq52LDwpSD8KtCxe7c4TgKt8emaWgapK6iZxuwAmmGsySqPbnjzEaBP7GHSxRoghzuQCZvGi",
  "key11": "1B9tB65VkNUpHoYW2iYjNQnvKcbez5hZw93NN6xAABLS3fo1RGWrbnVvcbv4PVP5uzJwxbYPYMXkd7MgLYQSxsy",
  "key12": "5Go4auy9PoQFGBisdxjAbLa4QKj7fexpG4TxzvaAKwiRQzZyEhLTLriWJwNuoeHomjkMBp4nC66K9VLAGMbMZx6p",
  "key13": "2PYU7ZtJbq9XVocppEkS8dW1BRQQZRyNodyy6ypfaPoCF9PwpcA9ia1VXf1LuU6aYqzL3Hzb5PVnBVNA8U2wFXis",
  "key14": "2xozDPeMbm6D2zVX3ceoSyFMYhKL7Lv5MJWPPvoBP5s8X2y5NMPu4gKmCQZ74892TLhUn3y8eNKCQMLPmQgrUQeV",
  "key15": "5h5wzpfuYiAw768NRyWjrfcjx1QtGwmRCHH2nsdqe9LRE1rP8Djzg5CGTMiELWjDyc1t8jLVBHR7BFEwfeoqKHKu",
  "key16": "4e3fLcn5PpXjuiscf4JY4RyrvoM8hmramx9J739uUKhuBgwbqBqHfK8SUfKa8YLNUweLhzsCAnxpmFi5DsU5tJvi",
  "key17": "424NFqAtNG3j3WCa7ubvJ5YZnL396Vd4PQzgeSQq174ALDJNQsEMKfAYEwEnRBKfyZ3Ks8N7mN7kBfcDVwDFXWE",
  "key18": "2WhkdnQPwtwNKbpVCXs6cwdXCSo81vrarwRBjG7RrarRw5TQq7TXKvwiQ2ktAjbW6KBcZxtnstKZtFYtzMSJcUYE",
  "key19": "4vtkvmhFQXxtyzDGCehCyCykBgULeJJXwhxbFu1SPnWByYkaTtH4SYksFkFQwxGRH5yq5cmXDsaVSm8PHBfmjJyF",
  "key20": "4FHz3RmmtkE5MmFJNcUAKemSTH4RxPqmK6x4uoCeJ9UBSED3zivZ7dEqJ8Ne98gqKm9N8CjSxhJ483LYgaVGDFtu",
  "key21": "5XH3mZZdRkfzRo2UqPzd8ou5tzC8VbrzJmzKRN3KoYDATK14SVfE9miTGSvHgAx78ZBYbAFj4Nc7SHGnM46k5o8Z",
  "key22": "2L9BPKNG2Wj6GuebLpdMAK4BUKDrqTt5kSksFtc38ZSkFUCRT1RA7YXyuh1jgUNhJFNwMbPJ6CvJA7rqeemhYcvX",
  "key23": "2gBLUmVtiMMU9rXHHc5q92svrryo5Z9cXFVqhC8UpBZCwE5NBFzRKWn9HiDem7Wsr8moGqpBY6dW4Jx9wJuAstgj",
  "key24": "4CAPx5uxWybYWbd6fnf6Hk7WqLNrHNJRKRxn336sork9GQPZCQcnZ6MfpoVoq6HZS1YSAsZxUuu29Hmx8UoJMLNM",
  "key25": "3dn3EZMjGjpzd51WLDvHxYqjQucxAk3UHdyJFfaHCj21z1Fv1zTtMXmtsNWwQkXU6wPSxPLQvUefQHxVwPWPHRtS",
  "key26": "JCqosgLrbrzvokp1WymWiagaoyQwDTaoKE5zZmnZDwFPZPWgnBr7LBZZFpM5qWbY5SNHWaqdqLjMeg6TE68s9Eb",
  "key27": "2jYzVypBR6aN2A1pe5DF96m3NUxkmBe51BHBvhEQTiqkdnXD4V9BpARuiWKqR37C19U4N6SN1fbv8QM4usPSRmmK",
  "key28": "36RRTcF75Fr3tvq3WdcBYvNMNW4dK8gYBS9AM5xfTfqt8wBw2Y7pKdLUxpEWgKQF4WZnrH2J7y8w8aKZTmKj474T",
  "key29": "6QY3aZKqWWj96HuXQcmGSWAGrWjoC9Dp97BnKBwHe1mcVL4N6vPn8FFQg2g7qmJzKfurg7RdbTsCSqstfaqom5B",
  "key30": "4PFebJmkh1rMZNZDTAB8BzYnStTBDFPDmrofAJzVedm4LVdrgTLapw1yjk6a4xd2gxkVUK49UwSHvhZ77AEnVbMJ",
  "key31": "3c1vxCFi4eRyao8YtkbvaEowfnvnurmJFWBQft6qMHD4emBoohz4YsiRZYn2Qk5CYMvpEq9hw3AmJE1sEqYvNvSw",
  "key32": "4ukGZ6hfDy77H5DGyAtLa8JQHBKsk3hPEVhTh4CUq8VrQL2jvtWSSQpbws5tEviXUywivXaEmxQXn7a2koySKJGa",
  "key33": "HAojyi9xKT66xENsxVYu93W8Qrxyx1nQX9vswkSk2H51n4zDwXFhAtkPEfUpeRCmRkKwqaeASX1DCjbfUibMug6",
  "key34": "3rvvk89BgcHkZBLytch6pzC9gQ62ahouSRwAzUphBffZTRw29LwGF7iDBzQ96WUEMJYhpbrGjSu8RWWFsGMaHbJN",
  "key35": "5ozbhKfuhZHW9EznSLEbwFjNzJux2BHGJxtLpU4KFVjtFE9SQ4L5xTyj7jzqTJszXoRZnS2GqLD7Uiu3fTsc111C",
  "key36": "2GedADLvW2vgzCFSExYhevrTt4e7GaMrYCF5CeNCWRtYYPtbWU3tnDFRyFZzmZD9URNYHumdUC63ita8skTtatgs",
  "key37": "22DZq4CYpLpiEMmgM9qM7JesMkXNUucXpnL4u2NZUJKKpcf5dxQG7MjA2ut7MpVEuRTXniJPVcjNWfARej5tFZLY",
  "key38": "3gWtZKoGbwMAzG4wzYXH5PtFKdiDfZApAiaKE12BAcnAfxjaVmBmMnUiV4M1F2TnA6xVVEhENEUtapWrWk1uXzMZ",
  "key39": "hXrm3TMgpw27dBrhj74VehEhjMVT9mvnnUQ6bYNMz7pZ67wZumNJZv5EMjAApfYNH5pD71ANspLpYCqSpFmFf1Y",
  "key40": "2XPCeYyjvnM3j19qmmpKGYy56SVH7wAdLF6TKpv5G4SnaCJabprvc2zucWHeGePQ2wANnzD4qqZc6WihAPwJjEEJ",
  "key41": "4KqmBbvBbALDzrnfzWUtg1FzNP2WiqZiew2JTtSPg35aphz3DWKKtEimd2AydQLNPT218y7rMaXutvzLtdxboVan",
  "key42": "2s9H94B1v7HHyJogS45wqSmeoRjU8QVqtmALavKvfcm8KguntLsaEF1UMkpxQkYfAksuxjRb4dKe4gVZDS9ptPbN",
  "key43": "5U3D1D3zzLwSxMG7EL6Cmi9LyimPFsMvFMeKM6ZR4kDZmJFcPPMFSRTnqk9EzpfDtmQ5JPtCpxaFhhgGpurmFUoa",
  "key44": "5YF5kf2LaLK1onyUGvJrqQ9Cvk36qgg1ncVuGFfcUjK5K1sawu7Lk6oaSMKg3BvH9y8mS7kVSc6pvW2yuTfcQxjq",
  "key45": "4fHejipP7NSxvfvThbt6mJFEDaSDNWyU7uWoQGk21ZUbvYiNQTP9mGXJicptkiDUN2dk2AB3jrurYSHVkYeNDXDH",
  "key46": "2Rh2PFcCEHV1DPreZZJ6WtYFHMaJLLXhHvvT3tRjJRW6Xb8XPDJmTdr435mZJ8PYT8t2yaSbdz3WNKh5Xrd4wbt",
  "key47": "fKFFVPDT6b33fWBVxdnx9UhdzEjJSb1xnJ8YKqZApfWGbJ4Y8msT7ycQFCTaygRNhQTXPzr7kMaarV99eNhyYW5",
  "key48": "39eNsfBLr9WFgfGS7exJoeEcbcqbHvuvX3PvkJ99qbc9eazuxiQq9uMacek5rqhfi37rMe2RFa9qqTLMYm9sSdhU"
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
