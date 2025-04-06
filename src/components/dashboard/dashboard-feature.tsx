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
    "2hx2vmZfnkATTJn5aTARMrpyt6i3WaV3mQt2NzTN8JYoh3nYLJNRJErnEFJXczdch5MHysm3cHPmUybzLk9vyvch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kjs1L45cPyDJWf5Fm42iV9zGuQVPcJGBLxg8jdcMxuY21aJ8iXTrzattNA9cB1wMAz38MFpbudMrJiTg6TUA4tH",
  "key1": "31G6vKqmwfsB3yhBMmdk78xgdXC4LeM5jaUza2EK2CaMS4eEBhkaz8faaGcgtvMYrLWhPvBVMoCvUKSn1GLiWv9M",
  "key2": "4gbjPLC3sspkMyTy1MvcVpt57WJQJS1qnrqfKWSVoUyZQUYtymHaxZ1TrEwKxskhgx2XAnZo7retNBFECErkFoSg",
  "key3": "xP74cB2rW8qR676yZTKD8e4aX3tofhVS2LsKhh8NRE3xaUys1M5qB343Cfsu9QVUMSSCziCFm8aX8sbaS9MCBxZ",
  "key4": "22RMd4skSSKzyF3prM2rVEXn63y7FzSfcBXejykmgUzZ6JAsmxycfc8M4Fq5Jd2bA9tG79qRJgJRXLiP7Uv7u9wY",
  "key5": "467SVGVz1xcjtp27XE2Sa89hzwb4KaCiXbaV1h8juY94TNq1Vz3URRV4iTr1s5oeFP2GGkFUGcDLB2i9pRZbFJpQ",
  "key6": "Loaj82WWNfDr6hPTL56CFzTnSpATah7TRhQFdWXMVHnSbno1Sa416GVG451g6hqiYPogFdJQSyxT9CzszbYese2",
  "key7": "5dcHwNsEMJTb5qAG4b1kLKxnopjD7yr95vHYvosiM3ApQUT9uBzzirecsgHArH6hJk4xMMJUZLRE2PSNZkK2bBsS",
  "key8": "5tUFkjU3tqct9y6DxwYnc4VXFPZ6WgjYq6FWAKGTMFdXFZiHK5fmG71zBVg7idqkKiDnAxovcgJbR2E5JmvBKiTK",
  "key9": "3GQAK5M5A9zrGcAh3LjuKLJooS2CKYH1WCJjVbwAbVNEdiXniPwQVzj9qZABchNqQt95GjC6FTQNnWNjudn5amVU",
  "key10": "3RQhyMgSbNqbX7681qViuVdPooTveL68xwaJePHoJPSAv7ApSUbR6V5CmQSkxU552jjFwCTSc2U1JXrK3GLrSR6m",
  "key11": "67aDvYryJJvs2JpYUZQTPxcXgScRmuhnK4T8FDiVzjv8XrhKaexjpTu6wAUqq3FC5MqYn1KXCvpkYqbbKETRLC4",
  "key12": "qpNN1GQNKsLBVjrnuh93JeP4WFgxU2uk1rxD5L92CutaDQ8LsTRg1T7G92TqBiGf5bVhGCU3y4PLmJMU44scFsV",
  "key13": "35zdeGYC44nKGyPRzDjekscAnxmQsLVtWZDw1J5JesBMpww1yvdmkFDdw4X6YVBYvY9Togp5qvWphmU4a8XU9wMD",
  "key14": "5VA17bZDhuAy6feapdJ6RyMgtR1o6HYYXJvo5bBYddvRMWc8u9mEqcXRFN3ighEVGcnG792iAS49wsb1yo5bGaPq",
  "key15": "2nbWELaEWYNXYJiUSVXUWsvqbxqp2QRioFLcxgwweKcYtd9wZaTgpkskhR2HAck7NbafLrt4qspWDVAVDCXow3Gq",
  "key16": "2GRk7aXN9Pk5uSNCWzd6EtZY58yviU5qLtRYLLb57dFfFNxEq21FPn84SWtxyyTcCRBDKW8zLvhtEFEnrtMoEHH5",
  "key17": "T3Rr39U8aWk1TeEfWcq9sMM8YSRVytknUAxLReivzocvvsvwnpMcVQNdLeLL53ZyVfkE7RHh6JkTx8ZNeedkBxg",
  "key18": "ZA7hu2wRY2TxzcAKDcTYBs8H53axBnfJdhq1A6oUaXdzP4EnPJn3RyMym5VtXaGWK3KTTtqykgT1xvMbAu7uj5r",
  "key19": "3yBqehDEFnd4PT5twgXLaCD6A5vqxfMpfbN4q7gFBMk8vHcjF4HN2Ps1BSf79ay5UMqs9zM5oHsaMxXVJNqHdsgp",
  "key20": "53wt27iRWneRCVV3Tcyyd5h4XHuDtVaR33mFm8avhchhFACWMTtFFKxA42V77k4GZY93d5kkjLpx69gqhzRrzqqb",
  "key21": "3mfzhdjaKu4uURJt8yzXWV4U47TEH4jeW7T6DYcKDRgCk52ggrfy5PDRL7YFyCK2gaR1wyXy58uvbwZW8R4RqCnJ",
  "key22": "3zTyPWoHpvMzwP41foRQjxfwyKnSxkkNGXfRfB8LD9qYEYtCiPzrwbVzWfrJ1nCUiZXA3HMwoyAeb5mJ9t3TTJ8v",
  "key23": "4U5AERZa4F1iGdELsCUEenfthuBohf55EqmLxGz6NH1TRwTd7a9B2jVKJxMa9o7mu4ue4gx5mTYzvooYY2pY1usH",
  "key24": "2PbyLAmcqhcBfHt621EixNMtLwrHcVgXRkUy6kCwaGU3vzpnSDyXPpZbLnpNExqvDgHViVBHqSW6BDT1QMT9c32Q",
  "key25": "3P7iwWYwEnnzs3GeqTA6Puvr54BWf8Db1na5qMRV7CVS7qLo59wzAsZVyzx3FMyP1DcEDYMgujfnQJLrcyhYZaxd",
  "key26": "2zb7nTqvKCWnQeFmE4wA8sAvP3ir6fXYsFvu1N6h2bCZVLyx9BeNysuv4ii9sjAUK6L71cb5NC44WW4zLkbERvBN",
  "key27": "5cSoZaw7a7PKZ1Lr31bf7bGAnThjYazfWWznM6NUyj4CBsmJk1jKUPZHrffvxH2gFqJxM2Nq5wmitUaVtkpk5VUF",
  "key28": "TL1VSyEVn8imgiqtLQjLDo3WuZvtXxji8sufMQ6hMhGJHYr8A1TwPzz8NzM8ALrDgaKbEFJ7b4LvPoStQheqcmu",
  "key29": "vY6Xhqess37VT9FieRexwUaJmLSZLm1SEXNNaXzHcWDhcdbK7uykqRLMo3ogKJ2FLmnX7uwmQQojewChEyseWm1",
  "key30": "3mGc7Z1Qvu4RnVqozF3brJjMU9kBK56qu7mzw7Ue18dfJvwYo6wGCYCMtTqr9ns2tN3pJZSQis6y36LmJofk1fCX",
  "key31": "236e6vudwwCPeVXHia1KbopTCmqxx8tfz51fnADcB9H7QpMbzkEXrXtmfj5mYuuvmzK6eKwxJVhL2Fp8n9FB1Ck7",
  "key32": "5aGPr7jshkzK62AWNHfhSKWjPMJpXda5kfC54rFqCbKcKuBdYnWR8KCvQVebWG5WbK8G6mdo15PUVBA7wm5bVWdZ",
  "key33": "5Yk9Gqx9yd9XCChdG6TcKyx7vvY37cXqFTxMVBiDFtD69AmCxaT7e7W4UjuqUR9rjKUENwdUNSVhftrfunEAEfwk",
  "key34": "2jHApp8cQKenPCCQVPfjuTSk8qAk4s58B1e2Dy2ceK2bHGgCVjMby4pEoTNK6c4jFhRPqdovYwDCtX9yABf5TqbA",
  "key35": "2rgearvrVgrZruwYnfu1sZTfre1TAXkbQSfRzNisxU3oAVabKroqHGbUcN4ip9LXr2z76fC56CmHCv9ujFqketnf",
  "key36": "5PdbVmwDX359KhMUgFZetF8vbYpFYon5CiPkKqziQV7CfDPvPYXcqouR3wqEg5Vfb78CNRbzGzaydgPaYHe4NyNo",
  "key37": "iK3yw2iZmRiu1STrgZCgK1PvfxZ1Cg9kUD49mpiChTseJ1Q2rSAXDGx9iisqtfhR2FRYUXF6nAtNkBq4rLri91Y",
  "key38": "4EGhQ2rM5mcwab34PZRSiBYaKRMyZt7L7k3ERjHwiQfTAE2KG4aTFwtSKkReNKoLrx4gnkUzuvpeXUEyGL4DnDWs",
  "key39": "3Uezwb4WkyKzcsovGth6BWvjX8EBA78R56FpTW9Fuuofi1oQw4TapYqxrbWiGATfrBrAGTWbNkx73GkVQY7ZyjSH",
  "key40": "4bxZgLfsDrHQ1cRXLasRHLHbPVuEhKs4wz5hEsxVQA1nPwZQoVtA9vZYQtEvJeDvY1CWF5e6h3CThktQ9ZDWdVfT",
  "key41": "uCThdsDZor8wrnHuUtTGyVRevMzonKkphFvGyQEYrXQR7bX3F6qknq2YsaAjs39MASGKQQfB1QMHUdXnNF8YByZ",
  "key42": "3Uk7R76JajAceqEC13HGuX9Ee1yavWmY7opbi67LAFqe6m9otx7k1JnBSwpXkBMd9PiAFTm4UZuceh2TK6yTgkZ6",
  "key43": "47Q4ggAwgrD2K2DWbT7DxvTq9APi8WwZDofaJKL38hWGbXEbQevqEZw6qWfA7GmXTHze7bFhZJXjvwFEMW6VZ2zG",
  "key44": "huFdNNpt5FukqDAWZXRFtW6m9euJZsdGWXKXd3AAa4WfozLcaWgwHbr6mre388D5pwq7imq1gw3dNoEjoXaXDKF",
  "key45": "5TbdE3dxEq7j7BdFpt72tXFwxccVnJXNWn65G3UyLYoxNEHKycw6o9xKQsQwFDw3JCKaDFC3wK4dHFJ77jx7BWUr",
  "key46": "4pptv1kANrCK2sEGXr531JzQEowUUcYLmN28No7nE7Pupjv8SWrRQfb7gV5D3uERaaf9p6HUwzsjPsp66B4RiMCZ",
  "key47": "5T95pKe1XoW7Wz8AQyRSemr8eDjZBfZVPZ9pzFa7Bs5MgiX7DyLDHcjCoKxxpYPAM8oDu5TnvxgNnYsGpSCMfQr1",
  "key48": "5rcyHrJPgkDdRvXTH8mtgwk8M4FdsKM9SZQdrKxMpPk4MP1HWXsyS8BHAUdPoTAg34Pz6JYD3XA7yhV9PeqDPsJ1"
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
