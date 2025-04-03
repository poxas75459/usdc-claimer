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
    "3DV6zCLdXcHSd3pBvNr57nxpNjZhAC2nfAHK85cssHUC5YK6RPm9vHTzz88mvUYMDvSSXPfnWCE7XsnR7oY5om45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36TLXfphYGWXNQQtyMf6VfMGRCp3uMWMnY6NNmqCjtygnnvavJjJ1SFR62ej716JTKxiaLmkTiWJaxpXnQ6WHr8o",
  "key1": "2Rm8jiR2DD3Nx5xTjT3wzJrYzqxGYWsKh11c2jX9ERabM8qiTVT8vSNkVVTFndmZc4Sa7fo3XMyjEgdUQvCA1yD1",
  "key2": "5PURbVQPiNmPg8hPAWQuCiTWKx2BQ2N1wK5WGnc5gjakAJJNBQStrC4XVx1eovvUPygx4KVbbgqy4wtueWnHu91B",
  "key3": "E98kLCJWpaZsd1j8V63SEYtDG9HuobPXfY36H8ZZktY5hJMhNpvp2nhcE52rvoY7NyvdiXme4BdPnL9qbFwGXjU",
  "key4": "Y2hPdGz9Gx3Takq9Ke5NtkK4MTcezhLi7ucwqKPrbs7VXSQ5wMFqcg21tdQLYFKSQWq9LvBEzup4txEUyZDYcYA",
  "key5": "2FcRgx4ooN1Ms4yYyRjZzDF7fbuzw2Kr9oyu3uyzPdWc73XY3kSFKJqhqfJVMj9GRCwna87rXMdL3mL7LFXtCVrV",
  "key6": "Vb3esg66jYjeafwXovgDziT19u5z5bMmDDz8AkfqktKgXkscZn84EGwVDpF5UxHDEu7XTRwjCdBuv3NprMqokii",
  "key7": "22EaDJtQ8oLL74FHXEaX3dUhC4ytQm5PWYAgWSz6utdK3Zh3H87PVUPkVGKCdarGj4gjZ7hesBigFo3ajNREMnZc",
  "key8": "4MeoUeSucGPwV3F5WhcfsqEakmRN31GGvEcBRgoKCmat6qiAyTdgFBCKx1vPy5dG1EEEFanRzdt94QQr4wZ54Hq1",
  "key9": "3WSj4zkwgoC1aka6Q5q2MWuvEu3ZxyYXR3saXPLP1xm98EvnxSTXfJmoTESMcLLPcWY4be3UFdU8a3xsQ1B5cg2i",
  "key10": "4U3QDpzKudxjQNEpJRKMU9D6Gwt4ymBBuM2XG5Ey8pn1qh73KPaazYDoXVeyuBtWrX3YtYceJHdLAtyAAgr7Jk6s",
  "key11": "2XxF65j81XnU8yxAEx1V8RwtcP8Pn8xCTV9E7VM8d35ThoEv1DFmbD4Be7Qs1bFZF1tEjEH7CZa4BheikCfSeVME",
  "key12": "49tWztzf75ZTzHYJfV3WtPMoQcRPvDnoWCa8YEjEwA9uWiEwLqoBRF3ZAnNgUtPqAAUqYWbCbh5z6RgoJMRANq2q",
  "key13": "2n9nKAs1U6FS1zL9imVWbrVJ5pLvoQfZmeW2iV3Nz2CTReZnj8hGEUf7c1hXs3NMwxtCMZ5846QwA8S8BvT8kVkt",
  "key14": "3Qi1Nv5EQAszPiQdszZ4NxGkMWg5sSzVcbW6XhJFMHTeVhoBeB97S5HENntF2G8twLjhr8S161uaXUTsKe4yiheZ",
  "key15": "23Snz543dm92SwDqGQXC96Hru1A64MdG6T5BDCuC1yPojDerdXoiKFms3HnWADoCk5Ry74txzGVcY6idzUNzUPoV",
  "key16": "HLWgf9y6esxBzWwb5tLf7cbRXbpaTRCY2uEMkHJ1E3rxqFmYDh2RQzu1XFFrhfkLJzrz9V7fvh4BoHLj31J9q1Z",
  "key17": "4JwviG5vV4HE2La3dY2597Y4tDK5eBnywvWo696Qp4UtZ83yUFVN3CfrCdAnAamCHB6rUYe2mWf253AEhcpwkmSv",
  "key18": "42y5cGLS9NkidqXEuPbgDVy3npuUA92CvkWJBh8jyLax34WdA9a6tf2XSuHmgxtkh3UYmyeMry3TKTcVwtHCvbXx",
  "key19": "4EhCfShZ3A7uzjVcYxCvvCQGCH45xDg8Fk1Po1AanaDNag7dxy5xeLkV6Yuh9VBbQETYVDEitLxurJ3xrJwLeuCn",
  "key20": "4sRkrDDj5wAXr9ezBPCypkinLKhdriBXjc4nTjni7qe3PFUj96jGgNbfESUxBbg2v9XdtyGJqE2tUtzDzrLLokkA",
  "key21": "2bzPdp63zWedvrxisAmmmmW4zFy14XP9VvLcUYkZghf1JLdH6UD6g5NrBXATTJTdVyVLNyf2TewmJMyggMDctBzT",
  "key22": "3DuUc3z1p9AEEAEHDPcbJ2cNWE5FPhqLU8phNc1ZiFjTy4rSxnVbxfNY8iEFQ1Tj9qDjRJKkHMqfeuv5KsitYy7q",
  "key23": "TAuxn1mcnJ17NXaiWfgSpvmsX9HTv5yKHXno8jWnrf1fWHwrj3wv3gxBaq3o71aaJcfWx1kE65Jrkjyc4DmhMnz",
  "key24": "47Pn1joGzApxccoAk34MVJX6Z7h4F15vvhqvSysfmrf2gyjYj88f4gACz3BPWxPSi2A955Upqdjy5tWXK334NRf6",
  "key25": "2jKSKGbNTp9z5KTg1yKktySf7GXpfJNHCwrJjZbYzeXB8rmntf5dq4UZmWGvq77eg3YfyfWSgZ2FDFiQaJKRQogi",
  "key26": "5TunDfpd8sLufdoKLNp9UMJi86H8wXnXGKk7ADqoSTVrrTDtrVHsY8WFeRnLqNeH1UkDm921U6NecEySWe6UDSQ3",
  "key27": "5ADWhgxq8UnmmjxyiLApXD92gx5RbJGmEDBGynsfVaQA2Yq5pEHCn2rXSLgpcWA31bubdpadDrHaKWmaUUP7jBoo",
  "key28": "5CjGvqmUv118pPdkVvjTnuVNGYBA86qNSsW8CMKy9fTspxTxpuuZRy8L27RBCSGPyMpyR6U45mUFodCFtmmkWvib",
  "key29": "3nYqzPwDQ8w8Y4WQSccDQ8MGR5RCAqNcCYYQBdefCKNkWZ9kVCYcRYiKtNguuT5gRM6NsEuEq3nx1zhVc41S87e5",
  "key30": "3CMaSNghTHyWKKPkyETskBveDgTfWrKT2mhEPsQLwPFHFS5rJwCvR9SQ2G8QtMfrb2sNxbKvtuDNrmfKgR3FDLuF",
  "key31": "33ankYYsUEvfL4D1svvpHwrmV28upUKAejjB4BQ5bnYhXFLMY5ZRGKr2M7HHUvCZHuTSPwaKE1cjFMuSaRQVJ9JA",
  "key32": "56KNWEr7NgjtjQyyg8vWgJHPXaf13XYowrWkNJkxsPGqXXdKwVUC6BTohcJQXAUwzzwBvTnFx36ktQhbe2Yaw1Ye",
  "key33": "5BxV8JciREm2Md4HyCB7G7yzZdAeFKQcRKY53pdNAMVim2ovR4zKCZ6sN28qerBzciCozkhvTqdcMgh5yvPos982",
  "key34": "2avb5HafkuqXYAEzBqXJrWV7vJggAaYZXWfQtXq4LuKJVnEKEmFFVEMEFBszoii42NEipmD38mrd73jjxkvuHX8G",
  "key35": "nHRyMPLE4RDjkUjTqABs7jrCMND7z7QeNs239qvickUC4D4hf2cKvQyVZcfe4Vzmp6Vw98sombtMnRxnmr8Sufz",
  "key36": "5Yq89YnAyKWMTrceGBdkTgnD8Wo2xBASWSx6zSHBdsETYhbendKuWur51sA3H8YxwohBYEFayfD3YLvcdSJNEHWt",
  "key37": "3p8d3g7xaTKP4AhWpq3KV11Sm8Bf2x4j1HSkW1g3JJwaPqpJzXPU3swrKp2sWWeokrWxDBLtkES5u5r8NUUmAZ3c",
  "key38": "4YQfXjwKspxP8gficrYuFH1sq6eNDCrquf1yMCe4dhgLviqo6UF55r6QUa9tJPnJEYHJSsUmD7fhJWfgNzosHMwo",
  "key39": "3M2R3wybyfQxAwrqM15VerB7zuL2Gv3v3Mu8Lz6itxvbz7YfwQZS2Hh5xtxZU9xsUPn8czYjtm5yD8QgVZUiV6Ek",
  "key40": "5n6uTiDdi3ptaNNTNLWkvPb84dHpNFemL9iYEK25iGvJ2xMEYfNRDu1ZQDfynbQSaRZ32h6b4To3ary2joi4LzzQ",
  "key41": "3s5RZ2viSgXyop2TPdQFFoedzHgwDmbY6TqzfqgbjwWSVPZkgzd6RfrZ5nr1KPnvvXZ1nh2m8rvpzf4hxHtH1scr",
  "key42": "3NqisuQc2UnrBQjf9gjyFkE8N5tegAdRcwstBS3Lvn13KTRksFWdpKqw6GKHey1Rqxw97J42c7zQfsbKJigFWBvR",
  "key43": "4eJjdQnmQN2GesaBvA6w9PUG6yr7hGomiV6KtFbM23LcS3najfpAf7323d1omy1ZSGFr1ecZsihbuxVuKP52ZtaE",
  "key44": "5MnQYkCpSxM3ikzUCFDgaRhq32AKLC1y9jzS8vYbeDkNh8tgNNy9Y9QLnnpkUdE438BaAEMrdzhFvHaLWg5WS8uN",
  "key45": "4xbA9oDcFP1bbb5xffgB5xboxBb3ymQP2ihyoK1usnVWp4KjtmPFzxueKuRbSAg98VbmHVqfzxfi7zRCk2ofwh5c",
  "key46": "4d3dZvqfhsNojxcHxnGm3Qy4qXmmBb7QSmm9CBEYML7dQ4FipmyPHzYnoE3iG6hvctTfwbMvbuPj4PdxJQtut6Z1",
  "key47": "5axrdNLCAveFNgTuMQqukn8KK4in8Rc6tCJs4qyom6YRWxmG8aVoSsDSRv1Cx9MJqNw16EPkigUaEXqniApMDDzx",
  "key48": "ndXbmWLNo1Lm2HA6d21bb6kQNdpwakR36cQdBRFb2hPfQ3r4nhc8z26Zg1XEkvapf3CPyQLCeTooKEY4qEv1aDh",
  "key49": "4HRjPBFZsi1ZaMBFBo3R4Dx887KqD4NYKxcBfFLhJrjEZCa1JJ2xKbwVfkxZU7Wo2EJY71NCwCuLCsrytrcEhRLR"
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
