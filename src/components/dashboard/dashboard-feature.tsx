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
    "okvPHonakRBSCkhwfWNRi5idRcranXL6nZgaYm1Sv437SZn2cKU4AeGCMvUK95zndenXGHtpAfGfR9hpEfHNART"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQ4bwdGnm8qxrKS65f17q4mK5tC2ThAEg21BtqkYNLyLcUMkWxL85EDfeDsmsffLhUedTkXmRMmtHdU6YAwQ7nk",
  "key1": "5b4JLtmuaChG5c5ixCporATr1Y8pjwmi9oMpTiqAYrTVPpEKKCV3J8JapG4tsy7uKQRtc2fHp9tFLCCbJNg7qDG2",
  "key2": "esc6ffzfYvaBeZ5WGVfjAsNNhS9CTcpNE6fPybqM4aKzekuXYdpRii51A8Lgj2aERRPnkULMqJ6ZmQTge5QqbYc",
  "key3": "24vEA3DnKzhTTmpp5u818b4dgW4e3upcdVZkV8tLh6YzYMkDzGE8n9U3yUJFzXxELK5YDPABxwFxNkSx7yEX9tbP",
  "key4": "2yFj4KpAkfPHwjnBFJVH9kdJks1M3xu5NpRqzsBYELJy9CEtP5zGEoTAYmyUjiTYs88JcJ5EQBu1BbjBzJHd71WA",
  "key5": "oePt9WQT2mjdHHjVkJjJniG9nf9DdfmjXZAeiL6Sw1LgsHJ9N3wxxZ8nPUudfQ6Er58oKuZzjaDpkkP6Mo9VJFq",
  "key6": "5Zgf7waA7AFrRRhdTv8sSE2ve4d1piEiAV5C4tqw4vmG77BbTjktxSvw2C4vD3gtrn8V8z75geS8durBmQcDCgug",
  "key7": "3yhLsjqCsFyk8w6Woq7FJxVZKCaSMsUTZM9P32bLjnaj9hTm9P1tup6q2oNzZD4xdXR3mTdFwqvhxB4uvT4KjbQR",
  "key8": "3FCTCLQ5so9zf4bh5KvYu3DCc7KvcuV4oWNXEUhezCAkkjLQWi7KtFoV2gxPPFjYDueK5ty9w7mmFa8gAAukm1HY",
  "key9": "5pukzSaHYsgQwuEiQkGDvNPghuGmV37CqhRJD8ZzDaFMrDWfj7RYRaieGQAkQ7kCRp6Gbycg4ewNcnega8zjGpya",
  "key10": "54j9dEYhgXxgRCNGSxd2Yfv6cQPAtMWps4EL3weWB8ZQVW1PBkhj3SV9PaFwW66HX68Kq9saWdEHEG4Upg9RhtHB",
  "key11": "4SWX1bMpwyRMN11qHs9xWhU2L2n49r5nP1yJQK82tCZTMvnsEM1Bd96MEi4hbPAbhqU5cQRhakdjwcCgz6xfGmtN",
  "key12": "5cM2MXQKvqXKLT2MMqfizEf1DRGokQp8ibdvPQV6Qq1wUUtpa4BuszY7RbHaUup9di4z3p3DmoJJuqbtrMz95ruR",
  "key13": "2J1D3xqha8fzd2TypXpnjYp8EkFp62CxtVwmJAxjBDS6JVAwzAtAQKfSmVnjd9xv1cHh5uo6JVgSUd2eqoD9tTjH",
  "key14": "4BZgMJiFKvqDou6jPgLYbNFEGaPM2ePAuCRSPFSNMuBn1NvWWhbUpDvpwRPbdwHVSQ1zMqbnJVCwAv5onC7kqDZX",
  "key15": "4QXFg1hNt4vD4Px6EiR1LLmP2SG5Pz6K4KmDZDDY29KXLMrUuRki7sPc4Lkibh95AXLoUREReTeZQANPi7NkkJLw",
  "key16": "tRJPWQhpfDeHSvk64wM5Qpcdh7dvrQsKqw4bKtvq4Mam79UHdTtWs1WDQy3crX4AnxmC7hhMU2e8A4biQHy8heB",
  "key17": "gtvhtKK5B1L3Apx6xK46g42zvXTdsjyHxcG8BySorWMJkrCZZ29gb58CxNi6fxUv1xgco69vcwkDpgXPVGBxEXG",
  "key18": "22rM8bgQsZ5R2WSDzdXyzWCGWwy1ic2VMChrHrtV16KgmVyEtbHdrwwzDnnmqy2FVqgFQ8BjVvaghtqsgbZdRVZa",
  "key19": "3bM5rsKZnPyDUKkfbxryE9sPD7d1rno5Mv68UmVkLhAAhJHxxmGgWanpky79hiQXPyUidnYz6qt9mu4orA86twWb",
  "key20": "2KJyLfKGj3aavVV3k9gvCNTdLeiJLoMDv3rC7gF89yVyAXmGWwcFXrQZ4Xee3s7D53po8o1TX1TJjyuRddjaJXsg",
  "key21": "4rW68HjeismUGsXNo7fMoRM47x56CLoD6LXeKQaWDdsfghvxujNCUFrY17ULWjS2VpEezmEG3WJsNgyAUPn4T9Wq",
  "key22": "5FWoK9sv89akD5ninp7iZFX5dKCLxrbF7QWNwYHdoXiJFoSbuPCAmPHBSyPP3aK8CMqqoUXTRaaAtBjrBiwHBgTQ",
  "key23": "o9AwfGPTgnq1s3P3fJG9rUodvLnTtNuxtHQbWWyT9MgShhLz3QKmmtHfX63c7ouw4XXS3cGLY9AArNxk9mNqXAE",
  "key24": "4dtmiw19WqRvmotowcVu9Ct9TPHARfBvHYGUhZhoBv8r3DQyb1ip4BT5hxdPBAKYELSbFqpM1nX2eW1ni9QsgA3Q",
  "key25": "29QhYLfmKCqnNgmk5jAsB1Xaj33oTMM6W9U5HC31wjSG3d82ZGTctrpFLXers8E96cKqWKKTyRcjJVekATACL2BK",
  "key26": "4LnBoi3aaQRpuMN1XTxiHfnPSjEyxCuoiFPi7gBRBPiyw4sMt26XWjHdb2qUA2MDqQRjMKP9ccxvjMRbmYw9qshq",
  "key27": "4UKGW58BoF9zZKkCMyGBpJzTKwwPJQMxvbXuVW1zxrxorK3irNYembeky3mRy1akQBKkgYjktzD8zVLs6x36pwTb",
  "key28": "GpLXvK6d3p1P4cZhxdiXRe2bCg4YiNg8r7LrN3ezcSacM33LrFMCDUKFfG9TMJ1MHXYDXe6t8RLudFPFeGGxf5d",
  "key29": "n4rhTgGCwGKyMcaevwShQNukYyLzHEDRxX2mb6urkwvP1UJDLA5MQEqqU4Lfws6okL5Si1sDfWkAVz4QDi7kuyo",
  "key30": "4aH8SYGUC4GHFYikmfLiu5Ji11a15TB9i6c2bnwEGvAPm8Df2Sik1XjCGbg9PGGwYXfDFpjwJWpNQtbPrbfoBfFW",
  "key31": "PHF3vkzPxUEjjeX6xLcVAzw6j6CWqQwvrJG4Cv479b196YYR5o3iVRLUBE3Vfz983UbWCfM3puESjypD5FJ6Ssy",
  "key32": "K5b6S4bXj81eZRr5erqoA1TGo9MUoPUCuy2wWfQpxXVk3rd85oecSGKG1Nup8ogHcZVG4ftovogDZfPkx24PRrG",
  "key33": "3qwBtaLAA4UVnX8iejYtd9dgudZTmjzSKQ7BzC5ZGDPy8pi7wpYh2jJUnkReGHyZYG2QriproL5DpWza3hk37CBW",
  "key34": "3nwboSiw6t4c61BfqBGy2jvYprww3RGLaJvqPiwSWHLw4o3JGdbpACpW46vFjMF8hHE9K4wrw6jBSMEkLha9icKq",
  "key35": "4zJHaaNztSb6Zqog4kqUU18fkgGXM13hrWPg3f7rB9chrRiSw3TBTw3TbMYZ878zt54JzmtnBuKD4VPGfD8Zxjir",
  "key36": "5z48oGUt6hfyYbruEaG5jXWpbWewjDj1WuhgfZ1k3csvy9ybqakAPcSAc2YGe4bDkAkpHHGk7qWTWzYnR5HQ4vK",
  "key37": "5HGbeQr2hEJLkmkyZ623EUDf6fH9t9g4ZhnD2A4SQs5aznvq2VWcFERdHMmbFCqmmBfkN6rVrU3C1tUAo4Y3nPbp",
  "key38": "tUccYkdwsDf8zhAZJMw7h28U8fHWYeUCNMEfby8xyrzbTERRKP6RazKT3UXLiN9oWuPMofirzxgPJMk1ewDC46x"
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
