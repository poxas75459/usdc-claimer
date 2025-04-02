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
    "3U4xDhzYzs6628Wxbw1h3fVr1J15JKyKBrFQnT1bQMfSSEqcsK53B8xmpJvHXso2FrAynTbDdbNdGBtQb3VJuQhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oCrcCBWXSCQ9K49mB6g2YscAtJFJsFm1PMEbnmqL8gTPiUuTxST1DmS2Hm7jp1D1HPGKEFcVigKXLsKNT2qvbUV",
  "key1": "5pQNk21cehhx1H7QnoWFJjW24cL39P2FY3B9pWuRau1bTmuiTg1NjKkqbRWUw4xmZbiso8337PEKyYW12J2gSmFY",
  "key2": "2RfZv2JbZZNU8C8sSgodue14Hgt13gGinivxb6D16MxVXLFpG7invjWzN8nojPHV4p4H2YBEcVHSb8CEfHpwZ72q",
  "key3": "3bCT92cKYm8KCCLnuC9iqgwwhMALQYUU76KuFCtiHT7Ly6C1DH3zgothTtXpaBcG7D2VnkbJ93nBKJQHWmkPbRes",
  "key4": "5cPRrdP9YgwQWVQRfYb984eqJHeSXPYqDsTEAdM3ngqSnrbhD9HYiznr3Z93PZSfRTKVeTyUPmcxoSwijUdW9PGq",
  "key5": "3GUFdHvXCwFghuEKSyMYjJciMypUXfVVociZkgmMnR6Fm2AG9qxm16VuyP4nd9vXK1wxj2EDZuTuSTpTxMBCY9e6",
  "key6": "5JbpkP1jPCmhVMewRQQ5fZCkqu6UPH62GtN3bKec5jf6dsHmreLTgtnL3sV2EbHMbVVcne1zujyPdmCe9AFgG5jw",
  "key7": "5ZLGMFEuCzBVjWWgMWWodWdpYGSLNpAgJmxm79kMgq9QnEmgp6iCaCVHasxgdLd76g8fCsUhjQ8Vc7TxZXDTCvwW",
  "key8": "3fzKqhMKhBhdi1H5azp7LQpy3euV2RoijaRy2tu6ScqnwWUi3sEvKn8NDskPx7jh5L4UWf1XDQG2mJT8BamXZJzc",
  "key9": "4cZobNg4BJek6QmdznPr5eYs7WxodZk9birryGXhs4XAsEEBxMFDD76yTfN9ADu7qdRL1UBcq1BNjPNLniAYRsYi",
  "key10": "3R4GcGJyanHksrGUC2hgD2PQNiHMayF62iub4UcH6nyfz5yrt9nxPKhqR91BDdphx74H3u6WMt2h8vDGQ3zP8LJx",
  "key11": "5EsHFYV9bkiSXjSsFXBYuE2k5eRkcvGCMD17VWyDNTHtMEznmYtjn4J5mmSqbfA859DJeMnS1dH2wUV5UfVMXpzV",
  "key12": "4XsiqFtnAtQCaMCma6PFDqvuUpfGE4oKw4cTy7639L9DkSj2bcfpDsS6dvrA5KMPdr81cGH3Rbx6DCGuzZichYoz",
  "key13": "uxMHxMT3EpEMZ8htqumMrDAKJTx8wXPF8Ha1fyZBmZEXZBxKNpNbJyen25LnUQSeWi8GuqkQ53BcfEF49eS9zaw",
  "key14": "4tkari22BHDx76QVzKAFMcnYASjAfHwxyDa2mcPdae6HRGcCo8e4wiGh52LKrhi9NKjbXZNH6NZbivacN713jZ6L",
  "key15": "31CX8ygmeXc9bb9GkAmKD58KE93XkmA9bJ7ur61PVpxX16HDFsYbhJGQthAqHLVXuXX2keDKPHZRogMQSEpiBaeg",
  "key16": "3prSgrcpQ6QBsrhzNAssLBV1tpbAfim2yVfrkgBLVDB3973gQuD2g9pebYZzNnohy9LdSTdbE8jau82aK6Xk9AKB",
  "key17": "3H9gxyydY1JDC17tfat9fCLMZKcGJLVY78F2UnG8bXvZK2zM6gRWi6jLZzAd5zU8iJGf6r72G6WR7pHXdC1uJbWq",
  "key18": "42Pe9YsnVbkAjW5gzKWeooB5HhugKJrY3RPhC3cVPrBCvNhWY7W65ACwsgzx7DvFUB7YkncXKRnPnCXVsp3a2pXv",
  "key19": "5ePCUmrRQtGcGGvi5dmDDoXnJbMM9XapQsfaFVR6u8n7kkGjVHi8x3AyMFsRzpzR3GKxPNkupSYW2DgKAF9u82zq",
  "key20": "5evkDdc87RME499VxdTuHYLeZfrJaSp5Z49s13yp4oNytjrUUuUx8pmcxZWMMBXRcTRFyn4LZ5ZqijKbGA3xgmhQ",
  "key21": "2woCDjvcAk5f8UGK7iU7xkVZomkQsRS8A1bh1kWiTU4cebSKTvgHGyehNGViYh5kpPMtjX9gSpVi6QzUajyKCrCE",
  "key22": "3Vx3twVDzEq3jMdGEUFBq3WRp3DEYzw28RAwmTwTkRJhbJycuRsf1gEr6i3EfCNqfW95zEMBGwL882yhzqnCJYwU",
  "key23": "5ELGzjqTxFwWE4BVMWYY3QFsLcKEJdGXd2hqMUe5sCt39NW8RjdTwXPgBMYayWNeAnezQJUoFG2sNMtzhy7b2Fvf",
  "key24": "5hnr979ngU8XJxxMCge1tVcyxXkMSucsHtAYD86fShVh4TZZZSwDmkT1dtw7dLoqs4GggBhMMN89xB1ArWwPv7SY",
  "key25": "2e2yubLkgUGoyjshqbYtXBiDoqU4PWBJ2QugaeQo3VWdRuMNtSZSTMV9aCgRvpnks2LsXVx6kJXnwXE8YQ1sSGSm",
  "key26": "UWhFvjsR2DzFuUDz8wioVRUejCe2DrBTBWEfP5Jauj23TDFfvf7cStULukdHFfUap4zZ5VofCETr55xVPanRZtf",
  "key27": "5CS11UoVb15pS4xacjfWvJ2NHKqRiC95FPprp4iLguPy6upua2BZBDWnrrnkeMPn4LATdcToVZFjM72JJPEbnHtm",
  "key28": "2rNMcH324EkgoHj83haBhdWgnBSuZ5AokuSoeCPJk3vv2dPTiiwZtcxY7zk2ZEVdf5LuSAXFVTPbeYKXZXRob2dz",
  "key29": "4cypq1euXz5Ds1ikx7oPgwK7dGh8K4ZwWHpgUgBqgdkP1EM4FgGsjzkVv4xfFsPcWoVw5hsvWGRCiVRCzf1T52Ji",
  "key30": "5dETShtM641T8P5zFYAun2HEXZWz3Xc5wwjTmUqtgwq2dhbxJs9SnhNf2PY7apopcTzPYnXstWeMaHThPndASb5J",
  "key31": "5Kq8uRWFYtcUfKgswstcd6FNXsbgBysodCwKmc4rdjQeqQKA2GmbLWHLvWrwSZYuxPRwQGdW6kH4pcJg3xV5iYMx",
  "key32": "51vSooyBnQKjFtq9YmpDgNrE9TZ5nnUBwWV5EaSj1a2tZSmS3VPiCCnDYFntqBkbppfucxL6X8h9VSKbWpsnRiw",
  "key33": "iA9jJ1tAPW93PYcA8UNXmvmy4mewTjtebiRbRy8HPwxhPPqeDv7vhg1Cg5o7h6jGoFNfF4xQR1JWCee4fVDYNkT",
  "key34": "5PVHtnnfEZCLjzP6fhWYmZZ73jHx1k6SY3E7w4QHcTPGRqk6Ds3mjZ6hBAanC2h8mmw8YWEPYhRKjZFCcjrK4Vi5",
  "key35": "xBMQw3GPth3R4MjzGqUgeY5Kx8GvHtDerEcdJnDGKG1n89pBR6rv9S5QTbieEjBZGUrWzAiF2DfkgmBEbAVB4DB",
  "key36": "2LMf4NjgzuJRdUygucN8XtxK2wKj3EAbmjF8hpviRFxHWcbGnkrxc13PryJtPwA6GdLtHs7vRS48uiiaACWKnZXo",
  "key37": "49sX6S79whLBoWhkrtJFCqDsJPQmEAVhE7ScEb3GjmS8V9Zqk1CPbadi1ufUcj2kbK1ps9q543dsYbXm4Ke1FdQ",
  "key38": "2k6DDrtCGCHr23DUBq6wxPKYiFUkwXVaviNu6ord6RVLAw9kB4XPWJGyuv9t6banZcn68V36nj5ndfb3HU9PL8sy",
  "key39": "4JAeuQRhwZ6c5PB9s2Z1G6qaeN8LGFwjGcho4iNVhKKMHQxVx2bbg3x4VMFocndNzJsfsDbwzzKzkPkfmAq3h6EA",
  "key40": "2QGk6ok4eLYSrAAgFwLKe9yrKsLfURgt2iHG4prL5CBD4qw1WSEgLBDPPuEUSV8vo8mGC32tjqETxhzUmabFrWxQ",
  "key41": "4WPnuTdwfV9zhpXG8c2bKDsztpi2E7JJPcbqsLgWXbJu9dmkei8QtWpH9eivRePBkdfYErr7ndFBdNw8XnB2N2wV",
  "key42": "4QqoCQ9zzyrLi1K5J5gkoGHMmSic4uqP9YnSRwDs4HPbQ2R9jsbJgNzBNTMbAmyK5oFcz7s23X1NeyuPFSB54Auj",
  "key43": "4Vby5KWcvtCy8QjxKKaHJyF7KU4i4iKeVRdbQDX3X4MbyxxW3K8qt5jwZqECsD62yv3adRsUHEu9GQNWcvhAUDo9"
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
