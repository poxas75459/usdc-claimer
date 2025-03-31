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
    "4MLrNP5fG9Kv2VWZmFMdvC7qCZJXncFe4fpADKoWiFAEAVA3ZLCuJnQsLHwmr1aczf8U9kk6KZHViE8mKkLpfPfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48cLzxzQRLarTjUpwx7nHaZbA4Va6MMj3GLWe6WukEZ2KEgi1bLZWYJGkRGkLeAKAFmc46PPeEcC11LyDM7JkqcB",
  "key1": "4XGQ98qXcaYB8kXbueS9Pmzy4bSEEpiG7gZsxfrT6pUnxqVRkn4y4iDF9iMk3BFSuwXJ46AhMCDHGQj78wSHfn87",
  "key2": "4NFSDYZqtjaTq7dR144hrtDY2VcY9PfgNH6hoLrCoaHGNSfDSvN2QXqt466reodorMbNPg4sbcQRH42tqYyA2k5t",
  "key3": "53GNNejVnQ2xuqqN1z1GcBVM8HWzMMFyYUtu91eZCqPq3BDne71uUU5zwRt9MLkagCFamKmV6zFeNNRtk7xnSeWP",
  "key4": "55NmM7sGQx8qnh4w7TYeUegDRD548dS9CaUNixo8Y99jnKi2bb7gpVTskiH1sUcQSGoZY4u9tQEGAJVuAUUtGLYP",
  "key5": "mzojiQ8YQ3P3YwyQnu4XwCSq1VWgnfAXEJZDsME5KF9TrHVBKk4E319PGiuZUzkKrUkwFGEjCwkf195Fszb8RCM",
  "key6": "3qj84ymexqD1yZV4CV64tkrWmboLP3JH6i3Z8syzEpahz6qoDRaYqotd6PVydAvBuap5YCmauF6gZVa13ggVZnyq",
  "key7": "4QhZ96Bf7FEh4qK3zJwsAzeBJin3aT7hXMAike4J4C68EUFj7FJJ3mLgfuJv62NR43hs2nNy7JgSF3JLmnL8D1LQ",
  "key8": "5W2bMmWbsSsDPQg9iLE5hptmks2dEXy4y6dJaa9uoW9iC4v5hHu5yFpBUduFgxKQd6Ka1epKtX1kUTnikEgiL1uf",
  "key9": "2veRUAxbWsZ2rm8jm7f3XVTfY6ZFDwHzMTuTvfbWwpqGkiy6KZA3y4Ro9udqgneGsnrtsb9BAkhUsE3jvheXfGBh",
  "key10": "48kFDbgnnRmmJRV2idWvy5sng9BSAHNxGL5abXgTw2GcFehCPQTHo9XD8GNra12o53gUCHuVvfLFvWF22NDh9Qzg",
  "key11": "62bKU3sQsrkFqZiwdq49EFpek5EjZGxWFLwXYo4t6hreoFavZZsAKbpX42pjJ6yvxrkS8J4tRdPiafBGwsBKNKqA",
  "key12": "3E72B9mXQNyy2HBWvmdPo8oLLZ5qVX4Zavt7Sus8osTT1uQe1aVP83V6DRm8YhrAQMAKwwPkixi8Tebh2gzv4KsC",
  "key13": "4mhXkdPZBrNXXe9QPmfm6AVVyaS533cjWd9YQfXBhUR48UMFuCy6r5EztxmbNQoAqbhAR2hEZKG5mdhTJb5SyMc2",
  "key14": "4LoC9omhRL2iSicHRxNCa8my1tegdtjxF87CzN2Jfic3mK1niKuwS1L9f6cjCRjKAG6ZPU8wozceyBJCLKZmqefH",
  "key15": "3m87bfw2iSFJYEiiAwmJvGXbnAVV5vvjwuMJRgd9R9G2kFN4Qie8yQhJWKFn3XFkbHsBAGCBpJn3SNBvqoTB7WMg",
  "key16": "4jkkbfho75n5kpeCvNcaWawh1jR7QRombP3yLLKhKZsBARKUJmjRhUSeEPT8fNmSLAB1qYzY6bHuUtULaQs9VbTV",
  "key17": "3aX8R8qjNw9TEU4FJhZwE4GD3AVDgM5Ei9gKJ7fqihFVTTYAANozJadCxxeZH7a5xyQx7kogm8uG8G4CDksDoWCt",
  "key18": "X7FgjGR6HYUQtzioiYESvosHVmgZgpz6eYoMvCY32R9UqskE2LeV1DyeDSeRdc5EWLKPrPqWRrcCgdgNdkkNgRn",
  "key19": "2U6C3k3wKS8Xw48dcyNFknURSbbWQpeUQrExRQbGNmQN5DToYszTRdC5b7dctZmuNassKRw14PbvRTfbaY73niGn",
  "key20": "43rAPj4oHbgoc1C8aDrmWBKqM2WPZjSTka6b6YFouc6yaBpgwgQxak6UHvJsTiia5j2HLeyrCNqaiqh7be2z3gqC",
  "key21": "3GmYtU64Ec8Mmc7CWH6ZzhAXgmE4a2zod8sCT4Y7FSPc2GoRe2YALgr4H9Dtt5LvTsCuMBgq5kpCb92qYtsn9Q7T",
  "key22": "4HheoATdB4H1CV9qF6pdwcrdsbP8GaGkqJSvx3joic9tEymAkxQtG5hBQtJiohHCQxdWWhKioBRNstQuziLrZnkH",
  "key23": "2RYw4TCWjtvkovajRNGj8NePEMXUPo9tjT97RBQchhR1zisxjLY9cXxxa5N2JGzN1R6MRQTXNU77GDHNn7RASEQ6",
  "key24": "4UNgB7udXUcXc4BWL8XJT1gSWa6kkX7zcHGMLoqL3sT378EoMDUC8xn98kEYQyiwUpCpYdfEzgDT6E34L9MMCrpE",
  "key25": "21ijsTadLVpk4HxMfDs6tKh46sf8Qi6Y8kiooj2HzkECXfx8PsfTLJJwoDURC9bBQABFnLtEArNzewEp1rRTpx42",
  "key26": "5rPYpDFgN87GGDe5aAna8WppyF4oFDPU8gRThAQMsqrhDe4NCD4UdTdJf9dX3jvSx2LEvsEymv4YR3ieMkLA3Bk5",
  "key27": "4Gk37C8SbvmtZMTFVr5tSK9DECC9TJzYTEk31HPvKURr3o6WbRY3nMptKCpSsj1p4DW5e2B3Aro1UoHMaJiGzrVz",
  "key28": "3NpsWGWPWHj7GFkfrtbM2vayjHeWY5Pcdu3r2dwDT2mq6J55qJaUTyqzBPBHUvDgCQmMfv46CwaszVBdFdxjF4pJ",
  "key29": "211WXF3L6acyyzqRBDLTzGio2oZ8obLUTxRgdYrpbKJQmptuo1VsdpgJNRNW4V6h6QXmrKAMDqAngfqQWZKz9aN2",
  "key30": "4WRSh3AzV3iP6v1sYMnbNcCDA8DPLLvtFDnPX59sANAmxHsq2EAetswFu1Cb3Mw5J31z8bhgLyWdAHoiiMcj8aqS",
  "key31": "45ySNpyHSDaC1eRYTB2HChus7mDftXvPKpB5wxSyP6L6BNFiB66BiGi6TZPqPMQVmhZKbN7xjf2U6kEvpzEDRJni",
  "key32": "2ZLJX9fAcF3S7hZvqPTHLCxbH1FatsKawAADQNCrPZDWc2U7hQvAocJWVpiy84Lq75DiW7WqEJ4gw7V3dmdwLFZQ",
  "key33": "3NK3R7vSDdvBMejJDX9Z6ZvKrooBUnejL7N8UNPqf8GfKsKcgg1M5LAVRkEPfK6PM8BS47xXfdWsb17yg4mVdL1S",
  "key34": "5GfUp6KQWWp3KeR1LsdZfzuwmsDRqBqzh7hQLrPgiv2zMmeCEAnRRQ9r8jNtS8qPuhmR6x1a3qZjzVT3euDjWk9Q",
  "key35": "4yN13N12zcXbPYzDLFw6JL4UmZwngNwqv93MsXadm3bVWUXqP64yg5bCNT2oD4ojvcdRYahFdxkf9rF94FACaBuz",
  "key36": "2AkP9iDsYph52tBz3jobVzeVwwYcWZDzwG7VMpuJT9KF8R94L5bqkG7M27e1ZHhRMB88k6sRG7fq776Es7Gzuo75",
  "key37": "5sERHnaf9uuwYfwTMRFtbVcXrduBuJXd2v4BzUEVXuC5cbARUz8oLkoYgQfyYnXZhdrfseyGJZ9zLFuvMo4rpgEw",
  "key38": "VYeSa1daJ3LJ1pK9xFe8dGBHNPM3drQ1CDd8pKouTmFUtiDF1gV3uy3H4hrZQR4Y6BEoBEnVhpW97kjWsTztpik",
  "key39": "2ZgC1srbxgWWaAi4W52S7N954RactpFuF1HhGzosPJhJ2tgnRoZiikM1ZD9iwNFLRH1FU4LX7gsEjBDhsjpUY4sV",
  "key40": "32b1wjJkLEHmcC5q6yjUXnFvz2UMneMJivdyPko4uGF5B1ai7UAYP7o1QG6ipcFQnUZo66bcdZ7UrMPzanehFQJx",
  "key41": "3xX71FG7H3vsc5yQycCU4zNdbEuyYPn5Soi7V3sXNHz4zxr74Yuvcz9vijTzXiVoeYM9c5uVAQTDsq8B93dwqPgt",
  "key42": "4GMUcDujBVNSdKwEQ8kwRpikkLQAhptR8k16d3uz16Tkh37r8pSURBxCn963FSAkq8KhFKkQDujjQP3mRxC2eNkx",
  "key43": "5Ev9pUWxLbuyKy9c9HwuxbQaMCPKZcV1VtGFHXh8UC6qgKZofBjBGbYdqy4QsrKB3Rd9bEHpxQiTYhTSCDjZGGZu",
  "key44": "64CSg7es85AoV82hKiLmYUbCj7Dz493Jg4mtY6Bepu9i1Em6Tt43DgMtgjU58qUwiSmph35TK32HvBAo9LugRPPZ",
  "key45": "4yUSxKat7ZQDkMGJqUkUGJaCnm47jWPq6xDKpMPUuSAMNDRXbn8Hmyo9jacXc3MSE3iYSpTwVdwLVxoRYEZyEeVd",
  "key46": "2M4foS73ci88VKahfgw8XaP6Y1xr7ZtwxirxixfTnHQK7vZDtfk6BuZtTooELQpjjTRgf65rF8yjVLb8DtwDTJud",
  "key47": "28EMyhsD95SHcTScjD8EcrTDSTMFFbxd8pWKFTkRzLasbwpu19Tj2BuyjSMc2M7u7dM4i6VuSFiegNmADxaGzWHF"
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
