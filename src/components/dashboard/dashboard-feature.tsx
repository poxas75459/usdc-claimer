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
    "41FQ56MvSZ9tDn2YDi6fyTQyCA6BjpTfPy2S2j67bWnK6k7nGz6mevv8B5ffMuPcLP5pTFtzypFPVTi31U3D78UZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22erCL2ZCfEVmAF3TNzBwGLsoDozJbdYMW6CnTobK2sYZ4oNjb68y1EDENSu6U7fPBtTKpYa8x9Cm6hUQg72f9qg",
  "key1": "fTegvKyebEZG3r2hwAHzaHwe3fjLtwWgaQ6vtq34Y7JuYGGzSBk8Dgkc64Hu9rwPEbdx3kPTpJw1yKXx1tweyBi",
  "key2": "3jvkvoLxzMLFo2an4TyBsZ4nbyDDqjMW1o7nYahY45KhKE9xy1VQ9jRkyweTthZvze8s7Qx65v9wvbzyADDMamMZ",
  "key3": "56sB1PeATfTGNAY3aZv76uuWgJVLrkDnBgVgpDUYkYpVHoq4NYkYQ5A2ZU1mBr1de4EZ7a9tyFQFwybBpMCNtgsy",
  "key4": "5nhoNDK66aZ5kxhv6JDYrsiv1poPNhiobhE3mr9kmthjUBN3vV8WtY4KTfqmWMTwx2hvvGBVgThtNySW3BGnDzqs",
  "key5": "2pXnzT1p6jeVUf2hj6LqAf8cKTSCJ8SX533nsJLwyf6Tht3ktP1RCEcNkGn4gM52F8Yb7b7FqhaHF1bdFCkXy1wE",
  "key6": "9me8vA4y43P5vR9cwe1uCxehxeXcpWtxvPpqYkpDfXEFWNT4Wb6dbhPGWaR5UD5kWowxd3PsaK3wo5beup533T7",
  "key7": "3V4sGJ6eFrqMwGrmUqU9UAo2A2tGRoiGukcmqGooAKUAMTPqQiEEE2NvFRaVkYZJycLDvQKRbhQf9EQLxFf9cgyT",
  "key8": "3ukVZDv16Z7tmXvh8GxSLfoxNEmrixguLgPKdUXbBiK1RZD9CBSk7JYr38VE4VTCTE22AJKz6wuonJUJqScMZdLv",
  "key9": "3pfDczxfvqCztPThUDb1JKppYh894wEmEqbdKPsZvW7bsxF1YnMMzfrXWMbL2cdSxz1iyAWJEDZWXxpuNna6XMS2",
  "key10": "2SFUXekbcm749Zk8fuWwwSHHMYJjKsJ7E6UpfEDA8hxLyP5oE7k87MDRC5QP9EeYXoprH1sdW7NEkcGdLMPi4z2r",
  "key11": "VWqfFoRiiBPztk8vAzocKxxrZKEkP4qczAnwZ38FPdT8RFjnS2gwc4jNomHo7Hfm1vg35a9qLfRP4RYWHFtho6V",
  "key12": "2YbqibRbygtE5hMXEnmDYnAxNgLmJgA322gWVFuuqg4uN6XH11AjMDVRM6bSX92s1boWqbSeQiiXEutFzhTmK9HJ",
  "key13": "8czHhzYEtNng1fJQRiRrBLdrCuTfbSRiZP2EkTPhTnyaxLTH1VBGs52w24Np1sWSF8ndp6eQtFDRZf7vRgLgb7X",
  "key14": "WFdtUK6VSV65DVBrKKU55KTKnZgAR6gwiuJQReq7B3QMFXRA8XpUuesynio2eFd4QNdJrvp3YqDFvsBJMPyPNJx",
  "key15": "2ByeYEbQYBxVZavbSk81uEAbNBpoCKWp9o8Vi1NZstoGH8uyeT5QaqE8oX21bHYyA15oYdB5h28UqqnCUt4fMMDq",
  "key16": "38W55HigzELjKib9KQ12F2TbXziGwU3Lt3VGL5YNChBDpS8K3kdBXtN3eSGdqAoRWjC6k6SqDQSkr88Mn62jRKGP",
  "key17": "4EfFe2nCByZdwPxwTtKUtAcwtsDsmrKKn4UpFxBjMKe6b8ACopdD5BnbfKuLkvzQhWoj9Lrg7LfBR3Mk5QqMQH31",
  "key18": "8xJgXowCaUawx4ZkmoazFpryJtQuJ6nkzVSHQMAVtG6pjACZhuJNV1APcm9Sjr3V6Z3qaMjyZnxpy6uZRhvGVQr",
  "key19": "4xMpeEkFoUoTKp1d9KMKusoXqU8i6nHGiTzd4rVQFzRhJ4TCg7MQwWWCYfkWhbQL7gZNhhC1XNYnSWgfWEcNcPC1",
  "key20": "23PME7NoNuCiAsGPPPmg86ykcC9ckjrahd1pLRqoXxpP85W2n5C1pF9wgght73bpRDP5QTmV3MwwYhiNseoc6i12",
  "key21": "3RbvuabbKxX8rMfYdaxpBxXwkY7GELhgdp4RVs6a6vsKnAVWF8KweRp4kjYaCVjMHY8zf2pWEViH7TPzzTYQ1YBQ",
  "key22": "52eT2dqxMu2ED5X5A4eMrWBBWigtFd8Tx6QCnfb8EG9VHLBV4yA8TjGe5eSCEpRUZdfECJYKzt4YZchUV8GAbQhT",
  "key23": "52LW9YJEBgxrHvfSSWh2v66pRkryKtnyDXcXSJw6bYTSUXCfJVEs7zDrXucL6oZuLqaiQh6J1Ls3sS27EckJWRKs",
  "key24": "154fxMBtPhxmS9CtZvu6ToT6Fr3AT4rVQD4MEqbP3dDWrZtr7DD2Q4cutn7zhkSTrZ7RNVJ2v1mbY8sbNWNs7bP",
  "key25": "qnCfp6Z7a9qgUMkY5dPwpedQK9eibhd8A6tqdUwPU9DmgK5MgpmbAZRLhw7NBNrxQWQoQDphhPTEJLG4KWzwfU4",
  "key26": "64y8e6P4htS5WsEcioNXH8ejczQYTHbWCvoBsB2DHfCFHkn5nuZshedKdKC5m3zsXBcis5RVhSpqSsVBfJ1c1XH8",
  "key27": "5gy1LrXGRsG2gvcWfh3SwLeFB7wXywdqst25G55c7Q4f1o2vt521TYxNmH3bghYhuLhHKvQSokMcd38jJ4HcjJ2R",
  "key28": "2SedPpqrtqHibHAWgJ23za5T9XZVq5juMxaUaCBBvnQhvbtgkeruM8qXxEjrvBaHyKdqW9FHLjGri9DDPMUNgkvF",
  "key29": "3n8FGSyFMyhyzWmhWNKrdrRMnB5g4RsfjtouJBmqgsvhQCwyVCDAXi36XYxakScSbbNWys8bdmM1PjjekFFHrZzB",
  "key30": "f1LCRruRAkUJhwDPdVw6jMZd3zUfPyDbjmwNc7iM68Xk3XHTjPxdX8uwxqHpbXTediSQXMXxbi4zMA2o9bxbfhv",
  "key31": "4gyUuyHAtzitLuykDZQnC4yBVtApe8hNvBfKTWL8oZrGHsy7WaMbrN8z95Sv3sNnxhLkeLMBRUbb8ocwahPRi85",
  "key32": "Pkv9kFUohZ74RuCxDs8gAe2XnHcR4wURNYFkKdSqKtv18ch415pSdtwdPvCzJi3WBaLC6ZrAcUu9woHBdsEnQ3y",
  "key33": "2PArrc8DdEZhYiQVzyk43Am5Zy9osVYwRn25cMj4RgCFi25h7uyZcMQVjAdxYcKNhVZ8MiobCVYm8e8BHW58zhxV",
  "key34": "2jtqHERxvyvtYAjtZ2WuvMzxPywAA39cGhHr7HFxJvx81i7F2XDZRVVRd9G3jaMhcpJJggFrLVXJHEhvCNTYpVTg",
  "key35": "BSwc8JdcUcxfcGfUJMU3FDc2TAuubdGBoG1mY9zUha73CHALeYJRMC794Lf4o8unmFukTrtpdgowNeyKpdkE6uG",
  "key36": "5awAK3BexL8Ar1FwpLU5cvgxk66Gf1xc73kP68Q9ZFLLBXgCnRsV2T2UwePvWFTa6H1nmgEwMo4cSRdWLKBJrzZZ",
  "key37": "3fF9aj6Eh3KGQ9DZ4NgRsfWVP6yfzqEQmkEh6FKq3Vqn9QyNH9H2RYooR4uGiLztBQZRNd3RcrVsberxG94B5ZEz",
  "key38": "1ocWhE5UJkF24QwnM1xj7BqQhDuE6jFpHCbUAgFdLzfVjkTQwHuKuVdPKtxGme6rUhVCjVtkZar9Qc28gpEiKqY",
  "key39": "57Zc5TTpG2XxUGPthYQ2XDm72cfHqsdq3eyYCgmfBHtqVuvfa1UbWZV1JNk5nPeUVTPYuyA95LRdXFiutTMd8K3i",
  "key40": "36nEPH8Af8UV7toQi82F2jvuLFLywptvoejqYWwii9eudAY438FiF7thvv4eiENRDnjxVPCjo1142pqWMFF8KXiF",
  "key41": "kB6N1QjMsPvvXFXioANbzaQceBsXHK2vSpAhQQDaKWBPvpuajBSzE1YhXZKdcjvGi3Up1t3YRh8p4qkCWiFxYFU",
  "key42": "5Fgr3zK5nVAm6iuA6hRRNN7gSDZtdwkCqgkcKkzarGSNexz1kchnueGkeyPCTM47dQdB3eFP9DfwcFn7wCeDMFjq",
  "key43": "gv3boZTrtxY7QV5r5iewKaFGJjUhiE9iyP1EJp5U4yXHzegP8sBMPE5irie64pWc9i3VtVg81WLoTpM2CKsYWPr",
  "key44": "3UPA13w5Bx9wnUvNHJcrszT97j16yG7zPBFdZps6RYEH5xfr5B2gZ5q93E5XL1mviXA9SG5Z87kFhC6eeNZK8vqW",
  "key45": "4sTQLjti5zYTNWn9FukYoYAAEgh19GagMybKojdAn2ookhWHChCnwdtGiHTFfgNdZsaVuSdtz3XZxJVY6cV9HHTU",
  "key46": "5VyJ2vTtrwYVqYEWbcyZWJf6N4BzkjYZx8DPniUfyXiLzGbTm3y6j1fZnmEuCkbYGz7R2Lr78kiJ2FPAfzn1GMVX"
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
