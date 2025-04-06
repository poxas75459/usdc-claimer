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
    "4kh8tghW9TWtiwD7XPysjy7qXvWWyzW11fdZijW4PAwWDLjsSb65yzQgV16MgUsPiviThUZPvuL2RauV7GJ9oET2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szX4fBUAMiEFxxehvfjYhiYJ2hZUsfHGSqkartpGa84RmhTswbv6B7XzP1Ye2ZK3osnJF5jCvGfsw4aappde2YK",
  "key1": "3ueAZzuP6QFqYoPpczwhtEZHoPbFmZMTp6GuMjMV5EgHUTxHPXL3Q8qXUsHJ6LZvXRy2PtQT5UtRStVebpQxz5sa",
  "key2": "2W252QRVFNoPbtRUM5ZYepSXuoD1KmT4Sz7Lbjy3s7YbttM3wUwwRfZczXB6PDXyyx21N58euNQaMAs9dEJN7tkw",
  "key3": "7zcymSk8RJMZhcvMnyvU6gmRGTdxd9AARRrz9wtSAQoixpCWoCj6mw8Gv2cGqyGZezAh7jZQE8jvkKb3DK3Roc3",
  "key4": "5Juve4zRxZcUSfkNapaQrvZc9wW9adLsfGc5cwRJvTc234R5ZQtdChMMcg1Z7wv3Zc6c5pHzax7BN1BCQjGh76yL",
  "key5": "4Gbx6jNB6buMXweensBdEmgPhq6wnYF1ZyxQZtcwBfDZGzw8jPGyKffWuB5PZvuix9KZdnnJTgPPDHRpNJV9FB5k",
  "key6": "zqv5sWbTB7r8sC5gJMWV3jF4DCzwMojjahmRvvHpNJsBNWxTepFM3XbSA4GyTSGcpR3RL4nXu2khaJwnEfDtDLP",
  "key7": "56nFqLuEKMVwNLKoA2a5Y9wgCPJRecdyBbkKeMcbzxhagT5pSdhT5LjyEuPzqaCCdDJMEYgqSQv1p2qrYe1up9Zf",
  "key8": "57CTcKz8nwjwdDaMPAHeZccwLYWH2hKVZCnNcc17nn1eXm1Dg4Yz5nrH1XQXmvzonAZBD2mPT5GWE6ahB6XLQbmE",
  "key9": "4FmhPgrsXeSEfyodW3Pm339dPboMrKW2RhGauBNBMiz14sDe5DzEJDQnEFR7GPb6pq9UfeuzryrZ1us4MCdFLAEx",
  "key10": "4J2qBmZfwSvvuUxhaqHnZxmEu9BZdoXFAWkzcWDwUK4QkHME62G74exfAgyA3XJKbeyMYPCF1XjVVAKzhebgqjaQ",
  "key11": "35jRGrus7NhZmH2hhMkf62VFkJecMHXXbDXZECyb829aGAKMaonabYM2h2Eciv7UCMkNcCUrt7myYhb2F2xSZaYm",
  "key12": "85D3PYrCNtdsLcVfwxRRinz5pf3cUF5spes1VaVVvSTkGocPPUDL8AMuPgH4nKfzf1QhpK3Er78os9kbFidxgWn",
  "key13": "3NgcjeaccsY8vnQimZHWVmGYGKUH5uib49xP2rA6ghnCGQjsKrUDHgvLMpUdtmq8KgvfYYs34Tq1J7mu2dk9PAQ7",
  "key14": "2SJKGLFDUAME5MRfs9beXVgsKRZsGhyU8wyEqyw91cwdBsvxhrsqRPdfo79g3JWJeYGSKvmXEKw9MUWhK7zhkou4",
  "key15": "39fESDXF1ZFecaXfkA5vR8UP5USDKZ9WSUJZKm4aX9goP4K3rLbWvAkm4ignVBL516tpbxNeHh5TCaiodhwE7UuA",
  "key16": "4zwWWTR4fLFpzHgQ9RrirHBfBZkYjNMUTCyV7JGYRRQqkPBquNfH2moUVLq9p2AHmUWbCZ69YiYNxnW9cdxW6fDN",
  "key17": "2gmMz7g9j1SoE7SxRqdjUrkvp7HVTiZyUqVdbDr9Qp894LRo9VgYTR2oUXnkNqvvqtntPwxL38UeMRe9XHQBZSLV",
  "key18": "2aiVQK1DAdkAwKZFRHqY33iAjgQChB3iZGaQGMfupsbJDD3DVqbRq2UeVrZ1z5Vk4iGKtND3m7qnixvjRA6B8PdL",
  "key19": "MZa2a1bXFvHVKWa9zf1htw17oAd6bi5hTrcxN7Yk99fBDrwthYNuuVLKukGXwYtMRX8G7u6gBh3RM3eD3p9iUHn",
  "key20": "5veSjnu4poSt4UK2Y1x3r3Ajr8tqKCoWHaYe2tTwe1VhdtHFcF549sRpAQgPNRC2E7UzksE83VtTCihxGaN8Bh3P",
  "key21": "p8YybBhKWbxBmHFzTahdBYTaVtguFbucBsjevPsc9RypJR8jz5unpq8nz4Z7rWKKVJvkpXmULT4p8n7KqGj6p1t",
  "key22": "4APNgCHnfW2vN4jgZ3m2ArgCUjFnSZd2vdYMBXrakRaV53ecK8BvwF1Sn7qa4UVXUZAfW5Wbzv71WkivLyx5pRNB",
  "key23": "2crqi3cWcZEfLnn3ZgyTVs2tnofsgZ1VCQcwBeZ7nGS3CRGYHwxNRQ7kuy5Q49tPmb4yETQx5sJumzR3arH871NB",
  "key24": "3XDCccvk8G2nL2GDckeM3K2PUg5G9GcV1xQHafvpmEgroxpPqXucxsKocha8oErpdvondyQZt7AAFjpYPXrbBhV3",
  "key25": "4vB3e85YqvBR91bT7e2iGv8BFQtDZoPQbVNdvLiZ8Shx9wAHw1CSbduSBAypZ8fcYh6QMrguLyC7xG4hPb2aYV8v",
  "key26": "33kYAiGRz1nEYGFRWCpPkaNha45e9tNyjjoE1XLhWdasANS4oRrWZYVqxTwSRbzDrYf9ntkT7MGFZNriuhve1W6X",
  "key27": "4f5kyo4ci2BC2dkndxciSynKjBFoQ7ccDq3dBymZy4fvaq568PprBm6SiKtaz5HuzVmLCk2EbGDQyTznHW5HeR7s",
  "key28": "5WAmAqP6DUAKafnUoYxzVCnUHssGqryCMQdyPrkqgqnr2CMRqNNRAqgWY1WX4MtSeuF8epCFYYPod9iCMSfLoME3",
  "key29": "2rPvoNCZnzkt7Dwb7NuMK4e9qKELDBJCuho3YwBbrZNEujkHg46emJarpwJCTWJUsspZUKhwUq4KCTmcFV2cXA6",
  "key30": "5AmdRKvJHYgwRPbDNThX52wk14ZPWr5CTundes9e5ovba2epCoDYebiyNKBZqhPvCutaGS2gur1gnyvGqnyWwrz8",
  "key31": "4Znv19HJGbTqXtatd6gTMk2pZbuuBUKKV7SKn65syE3fssyCiKh4YKCAAucucuXnRWCTy9uGphT14n1k2tPJubGf",
  "key32": "4SVUi37KHdRi29JnEydW2xYyiCJ2af7cD9mbtAzXRRu9yoX4k8uBjymj8Ac9WmJxGsXwh5rJs8u8cZePt8YrKK4N",
  "key33": "ufErLPmsTA1EB7H2iJSjEREghPxLgqLJPkVNJCDADSEVdPs4dFGMgsWeq7hyj3hcDHnzVAzgMb89uPQ2wd4BX5n",
  "key34": "5H6vJED4XNLP54CQ2yFUtLhUYzyPcgVaQshu4wvzHxpQBDPeqzPcctgPbHW7t4ok1Hm54Da7jJ3LPqw4TYNN471P",
  "key35": "3f8KY8qyYM5QqT5ZFpXd8shUK6LQ5wBscvoEfPzUtzkxZaHwFrj4tYJ7PKGa8FdAxpU6jKDUtjHo9W9drUFgGpZz",
  "key36": "3mThRvJd5UdCQ9EFJ8woVApGBYDMYa9w52ttzU5ZavrL3uBwYNZmT8PpTcKccuVU4U64bhyxgMiTiiURktgYCxWW",
  "key37": "5CgDG2obFCotE8k6q7JX9uCfQKZtVvLJW6S1hHZr38oJTNUih6aDSxbwQADahxQL3qNdVWXYd8gsk3TWVm3tFhmL",
  "key38": "4rsQQCaPocSUDJ4kZhsbewzdL4Ku4uu4CyZ5dXwib3EwQmjawQMkffnQUqfJRHhM7n15coQWF1YwgmDFTnKEkWi",
  "key39": "4bnEKpfH6tpcpfp3iupaP1acq8sq7XwxJmNPX3pGSYYmzprEjtWrGucxwg8NLK9aGnKco5vdbryBsuvFkZvfpdhX",
  "key40": "4asykT2sSjZZhuRvUFcvnypo4RhKriBFDFhDQeMg5TZMNtwnTYDKE5EKAPJYGz522WnxpGPyJbt2ex4KeuvFFkXe",
  "key41": "2HZ8RHmwdwW3JnryrobaNuPmCmASgs8q51Sfnjq2eN4jYXoxSoaUeXM2K3SphR8jpbM9caV3aGLxFPkY7yQFDwUH",
  "key42": "3PEX9e8L4UGxiUtH93Pf6SxAqRdspNbXsFTq2uQgWTcgpRuCJpHTeV74ejbY2NboBAcuyE9yRPSazHaDaytFsMzv",
  "key43": "2iLX5v3hDQ5rAtmaGxt5iqiWuiGAQQpjaKQhAdToxpdhEZ7zU89bWpKqJ3bRUo2XsoqDTXmMaZXRDiCV3tdLp3P9",
  "key44": "4y9zNeEaQfojqPgQL86BnVgioo3Ha4hMcXkRSA2qw3xgYuJ6tgHudWBQpBTG8VvAek3vB2XweA8XPRa8TThR15Q4",
  "key45": "WjoPqeY8hEHoQQxdeA1oc8NbreEyUHQTkeDCYAjGBnsUQmRdkg8ydywjB6ke5nzSh4oFXd9ntyQMJHfWKgn3VwS",
  "key46": "35XAySEwnLZ5boiXCwLLSq3DCjxyBypXEDHbPf7AzDgzJhTBH5pcdwzZBSjBMoLs9MfAGkFKkjkqL14ef7JjEYxy",
  "key47": "Pm1FZLwXbkT8vSRNRpRckW7AxoQL5LFHEDfEJhwtsqmYEQQVPG4kRt9vRjcBqTzswgNHtmvHrMv7NiyoSCGWMHh"
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
