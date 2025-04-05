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
    "sijw1boYrE8pQbJqRA6QPttaBxDeH9rcD9xMxxWXK6jLfG8VjiSUpqXxaPfmRKsuzhrZNaRtKu8APpp1YQ15C4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JseYFEWzaYm7e2JXbYsS3TNuC6TDB6zp2hqA1C5P23uArfGts1vUdzB3vRT5KtbzVgpmgrkdhRhfdGTJJxz53T",
  "key1": "4RFSYZS9cAtUesEPJaZgKniuudVu6xqqyrUc5WrvVQ1AiTbiKVwSKSn7TPmkb96Rr8Dd5HcLkbSsgCqcWnbBKL7j",
  "key2": "oZ4iLYKfe7jVKZtQnKTeQG4Ld5fL9UDzwWQyVpmZeZi8PXDXeR49i1pRwLqkm7j8vVW1KzQEWL2ApwbopciNsN2",
  "key3": "92BSEmW7kaoEHFqwu1nYpMDG3iEMuNVdpRhhzFQVYHjxGuyroKwLw1Kv93ZHrB74MudheM3EGvrMDzh2x8pppeq",
  "key4": "3wZDtgz7TV2CefZsyFgqyBVx9LdQzh9ZPx7NyDHqE2hZBcCsMW5qWW1M9Dn8HLnwyx5QmpACDCMzYNEtu9zAu9rT",
  "key5": "M3aQdpThQArZmXBGjYFBT6zzK53VY2cj2C9v9szxdDqx6ew8NaMGxtaEokNYtPB48oyKokYC8hMm29W7Scwy7E4",
  "key6": "41YgekWBv29LhHYkmLpPiX9Vrmo8frJRFkr35MRbBcW8g6t1zXRbCG7e7FgRwg29oAibhT3RHYUBQGLFaVpwZhW2",
  "key7": "2DnXVi9zpb99ZgwnJqMUCDGUNdfGBDTSUpt2BzdVaTxBqvaGHYxBqHTK4ovuYooKLP6hrzGAZLvQKwSQPBRThpq2",
  "key8": "3XqF9MWJ7kNwFCyuWU1JXHBMhVESgTPfQvzcXQMpWmZKds5Mx6CESznKcZRDeeGkbcydqqBwnucy1LGCQm39iPps",
  "key9": "3be932XrCaMga66yUuZefevceZfTm7xTwJprpF5zKrAB3A1wrHAWerpfkNMH2ZMQy18dcigGSBBWu7vgsbgXj1Ra",
  "key10": "368YT5n6s21TF3HpwMdi9Z4m2ZiMJptXi52dZbYWeKy1nmQQExnyiYXR9fMfRJ9vm3i4HQFwpD2kqQUBxBE3mWbd",
  "key11": "2UHdG4hjWPgD3WP6LkHrZ7bVZBMHuTNbBpzZqTqQt6ocvgbFWT3TdwJBxJitBEStCkSa6xeLKGrMor7kDsTKd6NS",
  "key12": "d8pTyVmuACRBmvYMpHJ8dUc6oWNhu9AqZGL1ksvbF3S7XUjamZVFny4sWGQFicHEKci2Mi3ANfm3HFfCgir1hBY",
  "key13": "sENSFmzBM4YfxcboQSsQkGzP9RDTVd3vATq5ZTH1H9rLsuUs5FcQebzrkAXuCZDTaF3nag2XZ6cEx42M1o2L9ce",
  "key14": "5AtKZycAXMNh5zNeZG2ysvzSq8DkQBQ2aUaFx4sL7Xq95Yb3zir9dJsucVB4MG1Jhg8whqqjkp6QdYVXGyaKGCtZ",
  "key15": "5TzSndFdK3Pbawo73gNFqn4iezun9NQhmMrqJM34GLS6zYh9hVxakhpLYY8NE7X2piutp2CQpf3KynsP262r2YXy",
  "key16": "WkGhHCYD4mN8MQeFX6kz2ENNfR5X19jhFPMgcjNdQ5XQ1Kmh8kdMcYxoAgB5GraLAZTJRyD4QDSHFpLbtZCNiaS",
  "key17": "51tFuPLgLsKPjbkjRu6tLepQ7PGPZXvvMM1WDA51VNRsfNk2Tknk1baV6PYJfi6eeVgaG3uHX59fmbCeuRNRRR9q",
  "key18": "528SHVBbACm9Wm4phdxPew6r2x5vTvYjhSXGRjvVF4TjtnvdFDYTpjgVMuc82GeJwLGfSuAidn7KNNKB3gb9enaM",
  "key19": "3wCJZujsvV6VCW4DWPHUw5nPdN9hQgvkZe4PVbQ48gPpkTsGfXeL7a8nL76RnsxwauDCTUrLPmVALaB7Vd3zp55P",
  "key20": "29utKj9xvA6SccCJGcBjm3y6F2feKbTkEXLtEHj8ZZZEJAuj2H4PfnrxLh8DurNjX7p6DKs35xaE9xTW4qSskXJP",
  "key21": "37YjPuNsdofmKjggzHqnrQsksRethtFRaF7sbwrGrCWCQuLmdSbjxUA8w7LueW56MHTPviCr8fp6J7WnK7Z8smeU",
  "key22": "5X5S5i3bdB5sh4tvE8dgR6DQP8Cu2EKsvaj5mfQGZCP4K8RLZKuH7mJFSv8HX3HRL1hWXGtCNgG9D3ziRLDrwWaT",
  "key23": "5qvmGtnBkkq9C4vnYfo1qCsDqhuv7jM6H5FcpXLQXhi59393yWfsmreiQ7xEwgGV8psbcKySdJTmiFQV2MHxkzvx",
  "key24": "5fWAsXB5xRahGj4ZJ2BuP2AzdRhHnY3QPAaVDCY3ubvqmpFRU46ShcqxAUBaUt6UYCuS4qtv9KJzGW8Ua3Bhwh4A",
  "key25": "2YgeVsK8BFZJFtBJAcmKAciRdyXRRcaHyJAZhMLCvWw5BMuJGYMpSRFBFUfFA4ZguRqA6D1FfAW2D6csrkoMvLo1",
  "key26": "34FEPH14AjeRvHsxbYYj7uuXC81rArJtVdaQUndf4LZD4AWV8M3dMzT3jvNSfPMztZtnzWpLFGHctoyM2MgSgJjx",
  "key27": "2q462uvsWFCyUzgij1Go4bRvwecN6bqMU8Ge411DtBnFqY8PfDzWSNwMa1mB9hXaS5i3To6LfZYTeeKUXPxYHUDJ",
  "key28": "3MTgjVrQ1MXrtKhDA8jbUv1gqYdnSy4sNgaiFpvdsL59Pga8nSmFA8ELe2PyZRwkcuavgPwQ9MEMcLzs2nBJGhfU",
  "key29": "3F2vCtzsFv3bfPYjnFZXyHjvn8Tx6n7BmdX5gqCFQ2E2tR4Lqo55Gf52FMYBgjYp8yKXSjBEBaDbm7LVZPSLLe7r",
  "key30": "3kYadnn9jSQS8TJvJEgE6w8juEnsu7qSMRhVxXGKh7zy5eSEWzVvZ21TgnFURPu4LHDCq8Nd27zQt5Z2q2KkNPnk",
  "key31": "39kYfRRJeCzS5bnQJK8X2CCrXB1k475Rfqi3KDCMBWsL4WtzxaFjCqZyVsrYecWpo9MEUsKuDEQpowQZznvm587t",
  "key32": "5Rb1ACo4SCWLWHQ5fnFVRMv9SsYuXU97wG4VSY2BJFNdRdvGP3Vy4VT5oWTWsXgHtaCNkqxXuDxLLpGn2KfVD17W",
  "key33": "5Ygr43u6tEjX3DurdrYDJQQVSGQEh1MmmMy6Kyi4jZRFZf9THSKYaCMN12qNoiDzJVVUdnWKT2KMBLnP6Symc3sE",
  "key34": "4bGzLcitXJQ6Z36hPThcPJZwYbkUvvDMFKBuJFncrxyoxKa9VdsSaCqTmyvnBGGie2TSjaqfhHzCwmFkohVqLWsS",
  "key35": "5Pok8zmjQfTq8sgRHJjAQanj4g9TcpsqrTSZeWc92YRoxPPh5KVxzy61NUySUQEBzhLtEiu9BuacSxBAakxm1Nmq",
  "key36": "5XBwH3HAiUzkfuADMHP77ELpYcekPL2XWCLgFgcNNdsj63uTC8RzwrG8tpUr5rKxoRDUMUHfnmvtsXK9TMToKRn8",
  "key37": "3GMhgXwqKvgom9BvbwMKizyrhBx2ZF4S8HFtWfr6dLh3s2vX5GEvQUDnWZZAMyYoqnQQJZ1RnMb9EvuQc6tn9iXJ",
  "key38": "HsJzAEe8xQpF69uibhuLjmMzxFj6APu1uTur9H96QpkbxYUX7v6Tdp1g4CXEhZ87vRp8QDQNCP49ySRPByHCDC9",
  "key39": "4GRjJY6stRhVdHiPnD38bEW5b7hcCQCpyErpzvvSPY4XYZ6t5ymzJrCdALyjTsjDxsgAA7cy9twn2hJoz5UyCkTM",
  "key40": "3pPG828h1so5Xx2bYnZxQmmXWxcRAhshA6PPDCkStY39THAPeiBJyS1Kako8PBNUZuPsyhAEA53CM9cVE6FodDuq",
  "key41": "4x1a7uVGaXDL422ci71ik98CPhDznF1wKwmr1B3er3zjEmXnWDDhSPbWvBj3DEqEUnE58UqHSNG8rvs4yAEpVSee",
  "key42": "3ps8RyG5hUS9fVSXWWw3Jsxsa4r85XeAyHU24yXJSmw7XpUpNLiR5ixPjEL5UXEUuXg2suYQdk6J1trLjFqLeyQz",
  "key43": "2vj1NHATnk4xWRoj3726bSYmB8upFAjrMag1BCtk23hnpe1uoy6D2GNbbmLDhBaCwbHtAQF9wUJesWmwM32a8CDe"
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
