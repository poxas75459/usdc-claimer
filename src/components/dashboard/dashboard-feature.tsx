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
    "5mw5FwmuDG2Np72Bp7hDFA2VrqMTtxvthaP9gvfwHuSXYdW63jHkg2tkCNHYs6sg8EDRpDgr148mFbQePAVPUPVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57qqf1DmCErKV5wt8C6iBw8zyyDM5Ty2hdPLCTYZzUizhMkPPTS7Cy2nT9RGgR36Bvh3DwD4tG4UQfiAeytqXJWH",
  "key1": "59PoENMia659V1pHWvwBGvR6TAi96T2nikhckJcsCzuU5fHptQSPBERjZzb73YYwLijHopz464dM4oL5SLoAFFRz",
  "key2": "2Biz59tkAtRZ3ugMtNfwfn1iQvM3rrwGzmD9wrFEAZ3o9Jg9WsLNh7FyLukcZipiLJSD5qe8CEiS7psoF5qCM4sS",
  "key3": "4R1DD5AReDvg4qX6zAqBERUeDaQ2AGG9ADijaWegUbwi3BfAa2izvAmghfH5TfRpbEarH7CJqNGpt7AqpwZSrvfb",
  "key4": "2gqsY82mFGJS4KDz3waLtgtd9KLJhsCgJPRuKJaXUKEPFgc4LTQXdRYMUjo7ewcU29EwVWDaZHDHwP6nMbZVCfMa",
  "key5": "3Am6cg2n6dxtQyjrVEzYqDk6vhVgp1sEAmGVaJnLzqz91LdhC9cz4nBxyrqP27spae4o9ZQ8x7vt63actnmZS7Tg",
  "key6": "2Wfx2YcbEPVjbiZj3pY3YSDrDMFSHscAxUUtyYa4PjfWVzqERqsrfV1oBHJuU3G1Ygaz96oAnmanzEdjNitv6Nzz",
  "key7": "5YabJGZTXKD4i1jXJvGVxGCMwnDdAVbPz7g8q4aiXZDiDwvUCdZfnPP7Cum4RSP8gke2TZf4EnwQCtJoA268bXd8",
  "key8": "4RFJZ4UXkBtHn5amH3aVfgVNXVo2u2KiPx5N9rNvBWAhC1ksWKQsR3cj6GCRn2CMQsSYUAxzu9dU5tgfWv7jTK7w",
  "key9": "2GGYtwLbpVRtsLMZh8WsVnKWRVzcfms5C2EuMRPgjbDRnZpHq5uL7UVBXwkFkGVEWpoaWqXoa4s7wAsT45J23sQK",
  "key10": "3LfmfZQaYWA1Qp9mvUMg8s8CG414J8kKJMRbJGGi9USs4h223uUMnNumQ1MaCSwe8jGTXkyBRwSeFtRFsZsjf4by",
  "key11": "3FiUrm7Mc4z3BA2NF87KqBA41h1HZ3kNyC88LTxtpJCnFDHdCDQwULBZiU5bt5N86kfctJd1KfpobmRcc5VXSF79",
  "key12": "5y3Bo1ytMZLo472d9recR7xPXBNZEeAjXP4am8GC3tTWLapH6g4cr5ESdJt36at8efm9v3mEqCFASFJekMAFBscM",
  "key13": "4keoqnny3DWXyRpGaVseTpkw7VD4sShm7gJkgCfSffGHpUFb9jhTD6iA3xDnmbCzPWcMBVvWmPwAkLYVECyKdQiN",
  "key14": "5q5jumtt7VLZmvUG3N7Z1wi5qobQeFBHjMxwxh23NQH9ut6rmimiZGLUUjbdAxY65kja2Np7iUcRQd9W8TATwXxK",
  "key15": "2Rz8ZNVF2PDmUiQM1pEbWbeEmqqdpyCowh4JFZB2nbSDDCUGB29zmxrVEU1kZhWtHgMUnjznXXiWX2fKJ3PTYtBq",
  "key16": "5aWkdUL4K2WbqzE1HReW9wHTe7arfd7sNnqbT6HfDc4jnKJs5DuUMKExCesbf4n8HggtbhvsiDEu7LZwJMZtAxYM",
  "key17": "4NtqWTEV1wdkgRLhvQ9Sw97gqYzx8m4hRUbNTuH5Vasjva7vdnrEhNy6e8S1LB1H72MxVTwJScpCkXTpdJhNY59E",
  "key18": "5ELNzuwoyEYGmaHBAqJHX79sXSkwVXZSKgjMB6TvP9DC1nRuX8qPCoSQh1coXUxri2utKWkWYUHQ52qtoahFbSdX",
  "key19": "5CZ6pTZyiiLTsJSMrkaMR4xQGtFuvJ8QPZK619arHX4XinRetTwDDgpz8yggtM2UFmkgxLmSDxBC8TSkY2NZs7Nr",
  "key20": "3t5qYiRxFYkCrJJHZPK4AtRdjbrvRwMKvTyebrNnFZxBH4Y4a39D1QpAXVouCGx4Y9fHXcdTewfcFdCX2pP2H5sJ",
  "key21": "36EoPe2kpuTFQHbvD6LhVmNNbYpwvmQu4wd5QzMsHnKfKow5mWVXrppdeQqVgAZzXxLwPJSrutUzSrYG8yRkJZXx",
  "key22": "2uHnVuhTdRykBTbbxVkDR5Ng8XJCN5NVwC1uQx4cAEBwA7av3PaFKYXsuUUKq8nNndQc7QfpMivXAocDBW2g47ct",
  "key23": "5CcenisPpaSQBntNpEdqiXQLwdicpusecnkskysijKp1oVeiWiEdr3uzaj1ZSrUCEGcEJ8WEsWSF3Y1qUDWHSfMq",
  "key24": "4JH2TjWyrSPa5aGHeiw6ATFT7vYm69qkTNP4vetKtTr3vWDZ1E16RCzUWN1gnRsASBWCDBHhhqFA6BUbBuL6K7DM",
  "key25": "aPxirsTC51XmvCQFD4964ntCzXdFVVVX3GC2U7mjAwEzwQwFGVY69rQAq7vXqfZjYbJ9eAzhBCZJCdBUqJ8DZzD",
  "key26": "5LSa85gV2j4tV9gXbpCToPN6pcXetVJWnnQLAtHpmvdqdJjrmj6EvHfzxm2Fuhmy19J2kLTsPB2Awv1EwSakK61N",
  "key27": "nTSkjKHtxfqmoVawgxkKWcdwyKv4FbSNy7Fx7NFwk1Xh8o4K4SNDvsGbxorXAf2U8D7Lqvc2x8ZJR8o88nLo8dz",
  "key28": "qH9zX5qLZa6BB5YmjW41YrVCkEUyriGtgXWEmqMJdqD5bM5rMZJaExs9z64sn4eeG6xb6CDU2EqLGjwJSbHWsVw",
  "key29": "2pYyUsBK6SCM9YusRLKqw8AxVivmcbaQ3CDHD41snt75nUHMH6cJsrKQNfxZ6iUUeyF1v2uGXumTyigsiwbNSyap",
  "key30": "33EpCr4hK5YdeGW4ygeZ8dmQ4iVmnpn53y3ZQDn1vp2zgkxxnUdg1LyhCPs4nMph4KQwTidCddST5o7TFfnyZGuR",
  "key31": "64u3NFpRZ5sxZKZehRLzyVzNZN7JAeAkSNLjmCPEX3SKiympFjmL5rfhsRxMnFhWyKE5FVdigvVgvsM8TJL4bqeS",
  "key32": "36AboH2ZKXh6jFrUFEU92QSM96Lg7S5XpSDTGzA1a3KiBkMhN2gD2iepr84MysDtiA32C8wyCqDuEs4EAM8KJcQ",
  "key33": "35nUfe19fLvdgGUeLF2X4WMp2vvQP59DLQhZrc3EcXXZPd4RDa5tPi6CYFekaS4NCDi8DsnkybmS5W7fPFnfySa4",
  "key34": "2Q44KH19YjserLKEARPAUXKsfSsXMAM49QyUAokgTDdNuSSzamhwjt4gA9AX5yyYEhyBkF3tiuywKtjJyCVNtm1t",
  "key35": "HYkg9K2DdYkQysh3snvwGrRvpsWNUBRXNxh6ifrxngvdHLs8dxZZD19YQmFFW4VpZp2Wh4wYwRNy6HPTCAnHxhS",
  "key36": "4GEyPmQWoCxBtDN2FuVrFXiRVuF6Pj5dXwapoXXyB2Tinb5bdVSgW9aqE7873FE7WuWJWYKaNgMFXNUf8WtDTE8C",
  "key37": "45SK7WKcu5ZgPQeEe7H3geJMoHMXABTreHjh9YbRr15P6a2zX43jxnVyMoT73dRxQZk19Ss4qp9m2cAZncp4Q5G9",
  "key38": "21FMZy66g3mioeEMANqsAgADD3GDXdVTqsmvAwrWiWBavELV6AMiaaLmwbJTgMgcvwvrG128h6eZpUjWxN2oxCfS",
  "key39": "22TYiSV2e7iKcETx4GuFqSAiQ3FXVE1d6duFUGdHSnKHe9dEsj8qUjVUVfpD6W7pW7JBDHgFDcTKEYqeMKtR9JnN",
  "key40": "5PTGpng2iyVZWxdJskeKTaks4Nt3rkMoLrCAkgBat6QMFq5HKD4J3yrQJRx1ttK4JcBcjqWPPT68HZXkVhVi3Lm",
  "key41": "3ykZx5WQPjBv5v85d3PMf1HanDUJrrbyyxQZXUPjW4kchymBFcydpzYADL4GRkgPRXMydCavYKgj2keF9ndTVQwc",
  "key42": "5EVGgpLyrWpYx4bR5B8svs21ZoZoMdpxqVJWwJrWaGCriJH6qW1MMdP9SV2oenGhevYUEjCsdg6DQbyUKyhW8v7F",
  "key43": "EP8VDP2D7X6n3sQwpteBMFsTexV2PegiDqmRZkXD5hcnKvw5g6egBGMtzW5cbzHdP6kkjsxTJhLVYcyUUsnPLpA",
  "key44": "zsXuSzV4P73q99eFnWAyi82YromSFYKoXHcL4pVkNca1qefSTJYER89swHtV6EurC1QKFCNLKxhSjTzqPycE2bi"
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
