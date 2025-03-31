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
    "41MTmbPLk3eFtECSTEXncjp983c6XzR6b4LPkTsJ646d3en1c8uS2QGtsPKQiez4XoCaXyU18LGUdSJTof1VYiQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxMjrxQXxcgisGcXZrpvUAARakZLpXTLi5U6igtGm4khxjkNrmyAR88UZ71BApC3gnTSgN4DQecQ1bxxzvzXPMa",
  "key1": "fHGLgmymxXof2HsqgaHmTd8TkTDmJmHUgFBkYX4omJ9LKDPzwLMCi4h6f6x2zFUrLR6JQiFWGFsTTaxKtHm73yN",
  "key2": "4BJuYc4ezMLBdfj8mxdhGQsS8CRfbN1eU6ytAYR5WpNJhxg2h3WkherBwba4bJWRi2u5rmoMG968e1rgtBTMx9qo",
  "key3": "5BYsxgq3SDrVeqFPTjTq9wFWmNiVKPEzyj9MRgSuwcq4gWsHB86ukZgVx2KYpw4csUtTo8q2ToyCrf6bMm8ib91X",
  "key4": "3R1RRPy3Du4Xc9md4WzNnTGUvKRXsDe8GgqbEZYvK6JqmLr87Ernqjxh8NbA8ni429aAnZxG1aRUbwSbCvi5U1uG",
  "key5": "2iuDeM92WVEa35B13L6FtJMsJ3DJH2j9CsEJfYvUN6715f14HDSdgLibTVMsTrwsi6k8BCVAPvcFoUdYhPFJ6m53",
  "key6": "4mGKPynz3MJBukXdEFcba721DcdseLatvZbg7sTEpVKzGzoFYMEeCuGqYzVu7zfgp7tW1pzrC7GSF2CAkoNXhbd8",
  "key7": "614oobSYaKTh8dZxzxNHo4TnuKA1fJz1oeWy1qt585AA3ikQfoSKGfMnPy5LQCznk3hdemcet9Uk4UqPbZQYnPhu",
  "key8": "UakfioVwbmGVXbgZMi4rAndFTQ2GsBUj2jvRePx6c3kEY5RKEtPZy692A26x33NtUsjbZ1bi41yKbzZhWE79QLY",
  "key9": "gfhjZvZpWy1465zcSzzdxm4k24UMXhwnUBgjoBBvq2UoAwXiAXBfCBeAgDABqocK6Qhous6fggfun53vZx769Hd",
  "key10": "4LNsnpmCoRYJvL5ipvcenJYknTrBqn7hrTNMAayy8Cg6kwpU6dZxJePNYq3oeWiSwMAXNNLUMeXoni1JfHUaXgMj",
  "key11": "5tZ7WgjKxBJsUEgrZzZ5FZKKgdCn9SdEDVGEb6JxQMXTGCufm1g7LH7NYHDBj52qU9osq9C45F1dgv5PwN6iGUqe",
  "key12": "2jAM9D7MNRbkYG17Zq5e4VeQoAgUzbNZMQ8a65KPKbWyhhVG8qwE4QVQY48C1gCdudJ7AaxbeUj7X9V351PZJKkV",
  "key13": "2cH8WiabiQcBUw9fcUjukSVwNdDnA33UDVzzzBD7zgXZPB1rpE6iSSqLEzVVgGxrVSPJtooWsu3NuFq8eaAeymqz",
  "key14": "3gpBhtUcEe9PCvPyyyBnBNsgq7SRwcDwDmsmjn1qbiBdjmutZnmm3kWFQjN71sarKhJkedUkLXt7So8ZmiuXzfPU",
  "key15": "4bsYYcKjWMtxBnYepPh4AU295NbWr1SY5WjwwZPfimZjvnRfmHJPbSrY5gtUNnbPk1wjNFzN4yj4mMYXTBD9nQdP",
  "key16": "3ZzpPgFHyQT23WZEXKp9vCSAZLvfzHD9tri7WAYaADR7L3NApsoemUqnEoxWXgYyZXd1DGNY16uPgoKaHGfps1rZ",
  "key17": "i9GD3Ak2qecEUgR2GnLG6ovxes6vSf9WxNyvYsnXWPGuijDdFHPEzS5LN8baHbyHgwMs44VJgLWkCGwLSc5xEPY",
  "key18": "35m4LYQU2VXUY4baTMM8wKKWvjLz4WJKR7KKoQqDLQ48rw5EHaHTtpeqgwz3BwGBTzZ1dYJyKNLxFhSSR2gPxyHp",
  "key19": "2ijdZ1qqH6ssKPJngsYuhXdaXPorhnUrpFbUobGP6syuJLT1uSNEhk8SkCWe7qdXCJDsoTp9QVVceQLFF3x1wRvM",
  "key20": "zJ4Ed6cyVJE12DcyfYNzJDVz81ecp6bxJUowWbctFfPtBWC9iqcf4iQfxe7ZVp2CUofCNzmaHeemXNG5krvpJDd",
  "key21": "4nbz4MJXKp9rTvuKUdFpWGgrHtnqpxobSGgbD49Qv6bQwMrk3uMkFNNkpffSCcNyXPhjTjR4UCrfzFAR8PFBLoRx",
  "key22": "2T1SD6PTh2f5wXNE6LqYw5g6JbzspsURFJhc8sXW38PpBhoogzfW6kEKWAtoGJA2v6hzFgcuC7MnXomxEvjVr7tz",
  "key23": "5eNSi9gX8GYcSKyxi6CX9hN2bRv3wmgSnngxu2GuiEd5SBtDvg2kok46gHNNmVMvh75a3dvNvkzj6ZZqen3XC2jr",
  "key24": "3LiFV4uMvtCsyfx6B4nYLaoY2Zfn9W7J73N8nDU16HAyBjruHVC9fdEXZoWFKtrhnVtoTzq6JaKRDK3RQ9Akctvu",
  "key25": "25fysLoSS1dAVbUagP1KqtMZymUnvJzRc8DWJTjDbULHhoHbL47edPo53NEGjj5NKpAVgLZAU1JZwfTdUfd5khjz",
  "key26": "3ANYjgBXJ6K8dVeuz6QT47r86kTRufzgXbkzEPYWthQgHL7L2wPRMoZxE1eAo34KF1nCpkmCPaM3EMgdvXruhEPh",
  "key27": "41csFuQeuv962d5uGqyQ67mqQfNQkFdb8ZP1aN9CErFt8JGmhPWTMEHPQuy3obCpEjFLvAhkbN8tW1XxweTFzL8m",
  "key28": "2Ly6SxRbp9XzVUR9RryvFcsRgJBJmCXrfmknCQEpVm21zP1LPKxvZr9uShAq3Jx8jMfcZd4wRuDu5uqBCFdrqKBW",
  "key29": "wNuLysv1dgBXNbYLfoG4i5XFVEgJ8wNMNiYHuXTYAWuux1dsE4Qnt7wB5KAee3s2yRgAHTwrVUWG1SYToKG1KsT",
  "key30": "5cvav7u4W13SuLmVSbyLqaWNVh6ypaDVkwZWUJxd5UJZxwEst3pBgTTC4DppkUTZGU29faNeLUnM8fTfnyXo6BjP",
  "key31": "3UfwtwabGurz1pVMhUUQzHoqBsV6HKyZRghsXeVwb6uE2ixjTiTdf5ZyHiJEAbNapMC7fT4Vfg3EGK1kLRAMffko",
  "key32": "2FNmrP6aECAkCYnPftBnhiUH2z8F5hpUhMsG9kFMGtuGWzRigDuZj9voafe4X8SSYJPf6pUQLFctngQ22A7jMM8N",
  "key33": "3LMtvDgtxrQgjyFHTUuXZ8W1LEks5YjxgQcZRb7FiuwwH3tNT2TXjrHxjc6tCDYow4sB13uTZPG6RGffDVmSYene",
  "key34": "3Ac6jHoYXhDVHdAC45SVNb4vmjY11p6SxemshTGJE57gTEUbr5byMTrsJzc8GE2d8VA9eEoYBysKq8UnBWfERm2o",
  "key35": "5pAZbtZHSyEkmC98keQg7mHhD4JG97wYr8SefVZnYsw4iWTVGmbat5DFYsHbwctiENTfg6npKt8b6ajM3CfFb3NU",
  "key36": "3MhPGNsVYCMMvkt21G811a912UNfBgWaHbSafdz7WGAJ6QmvQTPUHEpewCyvkTpdP3MXBZxtaHv1uARuDk9HuTEn",
  "key37": "26objeveueQz4AQ5iH7HsZq4eaTwStXwppfC5GhhhxMHF12m4BC2TsTCq3yrUyoemqTG4n8fk44i3bDZw44fWrfZ",
  "key38": "2ybkPWsgftZx33YTcgGjvPgJizkQXqHD23MeGHbu3VTVQAVeW7z1S291tEF82FDCd2HMAee2oFUszFnMxzJxuQMr",
  "key39": "4GGdWrjoczy27UsHGomh6cuTDWM8X72rJqDo2nubZonnD5iEFAo7tVy7Wu3mY5CJoT3WgqLSBjmwfKPrjpozXgjb",
  "key40": "4hiK1DNetB1a7xRWdoHpic6tRjo7Ma9TWmZ7hgwt3f8sMjJvqWEkMkr7bef4YyvuKpav1TZrubk4BvBmYDi4n3FC",
  "key41": "5U2rUguMbih7YbHqAJhAeDduPpF1zqzx2h6SKNhh7oS3i7Dny9XNoC8nf9iYCt3MCd2omNteE7Y8JLVsYTdu3xBg"
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
