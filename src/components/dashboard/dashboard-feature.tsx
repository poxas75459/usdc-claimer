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
    "YXgM96NpNcpQZnUkh5wwPicXAZNNVX76JJLBPc5u2UkrdQvbQvU24zpjwR8N7xsuSmtVSdh3GquecpzyKfaMh6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBFkUjee7nLvextJQx9pzVH3NUDv9k5tyCSMXPGNV1xguSPxZSMZofM1ucpznQKWEEDEXUg6XoWuVdsGNLPGDju",
  "key1": "2iaxt4hGvVy12kGP6tZWNh9FPwza2hAbnmZBtUD94YubWAiXLZy1oB87xAHj2Uhyqfw3nNCXdr9ax95PCCPRkkib",
  "key2": "2dsqNrB15J4ripjXT8GMxpap4rNNimWntYsvQ9eRPoa3ign27qQkTqsXSTP6MS8PFTVUby7knUmUff1VBiT1vJtc",
  "key3": "fQpFaCJNBt5hMC6Ho2B8YZkQkJxNF7CP72gA4pzvqctRKWepMQMCiGmexQLUV2QPcgzKqcwCWEEeKXuSZQ5Ufoh",
  "key4": "3BD4HP8heDPZgaNSm6dhmuiTdmDpXgeBm9NtA8ZTkDzJWYwpwcwvebPnqRQAPnBGsB9DarEPBSkqCvzgyRvy95B8",
  "key5": "67rCV9nwPLSz9NoYj3M26PVM36jvAFKRxGxLGa9SG92ytLj6HVdoykFjiQZ31KBekk4mnbTRW7dKgCQnKtSoz7Z7",
  "key6": "4h48kBrPUZaZhRfETfcbTGvMXT4qLXm1Kop7gZ3VhG6ZavUPsaj45Sdyh2DkBimLb7f8yPS1hAWPLaC1MDrrs7aU",
  "key7": "KUMLa3sdnF5BMNW9mnpCh5JxJuUosW54nRKfZgFR2RkigfA2ve1zNZqDeFRjyq53rS4UX7P5cNmXA3sp8iXapKm",
  "key8": "66E6GgC9SGbef42RnYR2aRSCX8t5xt6epoTfBrxyfAzGzpAJcPGp9X9mmUM2JEqLV93dB6Lx2rK5vTcB65VCoxL8",
  "key9": "3RCBjbZX92DKzpSoFecrNQtze1FfwvLvqrcuz4wXjG8kc9mMbyXnboDnYQ1c7r7VHRTrXpXSQ1tRSvDhmp39Dp6e",
  "key10": "637fyrJ22uRJ1Ar4EnotbK9FERzCAi9ZP8C5FiBWSt4tVF3H1DBxcQE21QxZi7jC5jmYcCVg833WvaS1exix6FKN",
  "key11": "4oWpeRP3qXadMo1QrnEa7mUNT6RWTzP8UgeVC2zJVzETv8qV2wKybfeYXaZcAU92FmgFxFuFPBdDpgchcm1Q1kin",
  "key12": "4qd6LCEerqjtQEfnjcrcXSd4cdgxZgHdLy4Txhseb2bjy61RTj6rQcZciGoWZRGpFJoF9xEHKTw5mN6j5mp1WDyz",
  "key13": "2gBNftMaKGmds5f6b8BwyVBZan6mz4mnRs7tCupYirmByGBHz7sxzRCd1snti2v8dUeM2nydipMF5zcsRL76eXbJ",
  "key14": "2WEVAmmL3eQh71buchwUqHyssPX45mJEfXSBnjDbfK12utL9sAnMgv6Je6FgK6k1hH28HVXvwg8n63nG6odWWejt",
  "key15": "516T3xHMAvufvybofHdknNe9qs2XyvSAqKVZfKcZYe7hchvmmTNocx2YZLvZzTmJRdjxhuortQN3eChPgEoHB5he",
  "key16": "3yexkSHjbbiJNgP5qtp7VHpvqJzMbPkg61xNfu5cuTk5mAbDjdi8N6YSjKFcQtbfAEDCpTADAXHT8xznPLwSpEZi",
  "key17": "3cWFA3aiyGe1SkSq3EjM2cmXje4BZheE2ppr1NMbz4qmtWQ9gK4dyVoRuMTbuQ2GEpPu6hbpcMWDkE6GYeocGBZq",
  "key18": "4XZjqMsf5oazoUgRsS75QhVuaZeXLeWbPYcyHU6MzsemiDRoGH5rwfJ924hCTb8cVL29fozxMmNGPwnf22snxtGC",
  "key19": "59wuPTQ2zz77mr1PL5UEPZKncLk2j1xZ7dzSxdeZTWmrXFChTK6FreTYg4bUjtBJ6yNuRuQxejDyZZ18eBgKkxpp",
  "key20": "29QhqNncUsuxDnsfZ6gYVe6yUidNcox3RivUsEkbx78THtb5gsRAoVT9pXwgynGbYhVQQCVto5Vwfb2cYPwqenjP",
  "key21": "2kqEq9apSzJjL1mBt3SvNPkc8P7PY5pHLojSWFXSLaaiziN7Vz4Uf9dygXWUcbZbj4JkoSdupM85uPoCt7DTaEk4",
  "key22": "28E9wmTYpD8Ft3yGwuDWbuVcxEXnz9AAtaRPhit5fhVL5VdsATbkjGxtvtEvotJcv7vzTRzFfPWZXfvmBWDrJ7bf",
  "key23": "3kg3au5VX1TUubct24M7qDvBUaa8v3mziRUorftiebvNjCjWwUx2rFwKajqTYNsxFD8ZQNpYRdkW5Q1XqUKazQVj",
  "key24": "54YS2opW6dawat8ovMczQN2fbAJDkfJeKaqMEnsoCZnzav6L6AU7m7ZfyEC8ovHjEdxaW7NJ52gYcmrpAk2WLAVS",
  "key25": "6KfLQ14PSYRxDX2eqQ9NVJevSpF6rytHG993V4mWKGgjy4UT1EmdZDKWvuH9pfvQyyPTxpXQaGoAsK7Zig5SdiA",
  "key26": "4NsyE93Gtq7N34ErpPK8P8KHTGrjGvKih9jp48dgb5CPtpZDrKoLi2hiGYgceSPRwRzBdq9sb2hQQJycKWznyF7y",
  "key27": "3vmCQRoWXZJhs1FTwQ3xdRXhdRWQtid371JstkZtGWwwjMReCyBwgVc2P77bqbi3qjS2sM4b3HALdAL2exqof9dy",
  "key28": "2SQ2yzpn8cFGKHvppbhrkbgBeVnuqk661MiNQ7HG2zXvJ1vEtTP49TKoTSqKvx2VnfaX9nmahL7MbRqy5gedFvbr",
  "key29": "3zKky8cSjjg5fXxYL8H8C4vNyhqKqjoGGDQeFKhc2YJ3FGgKgJG19Jj8UF1sEH6J3H2SMKWb9bXWyGvzoz23WN8m",
  "key30": "5F5JXyoJcFHzq6HFBjwVFCKfVry4oFQbTsFEADfoXgi6eybGMnveNXehN7HptpFLAEc5ZFGgNaFHu2apnYgKgfyA",
  "key31": "3x8CsKxq1aRtPBBDvS3LDmcLaYppqKcxfBpq7TJkdJ4VoTXUfiET2YGDPHf3ziehkmGX3MaX5GgWVdZjeCpoTapS",
  "key32": "2mAvvsr4y3fcRxEvPuurNphEfG8sRJC9yjT15HHkWNgS8b9wsPeH4zdJsvHhP9MtXCAdmuMDjQ2vYDMwdcV9eJ7Q",
  "key33": "5Ghg25nWYUACQsLhRFaZQ5eaq22yhSxajVk4hav9J5WooE6X6qkdMUFnXbuprKXFr2kcbZLjgg8LzAedk3hSZT7W",
  "key34": "2jC7iJm9yrJUox5JkF7DDnwsMyzjQEiHuy6vD4PXkKaPRohEugk9DZ5Eu9UM5BbDcSsVUT3R4c4Y6Ef8GXCpw8QL",
  "key35": "5jMc9dvn5M2xvEHRFYsMmxikYfDWscGcPKjq8C4FzZEgsoQRUjygDyZUi4whDNjeSsYbAyWBTUBM7pPeSq1iYCiz",
  "key36": "3rYCF9oZ7bUPUSCkVoYSUyhJNbAExVQLN41EDj7VtFkzxxTk21RhaY5hNJ6fxNprWbWWbe7JKFh8PTjbePc6kZnv",
  "key37": "3ufvyUhrQvqNGHsVqUCR4hGZvGMtd56vK5yfir1g68L4C857NUcHwMLUDimyFEjM19GgiSeFzbSft4G8tqWJFYtt",
  "key38": "mb2yCcG3kK8WTZniTy3mousfyhRdbxmWmt1nj36Mtq5JSAYmjGQFAy3VSgjx1tFT7jtU7hddRUEvzwaWXzpbSzm",
  "key39": "2xMTK75UMZf2PGyYfTnp1ncdix63PuNPKMZVB8i3zJxivgu9arPX5Vca3NSLrBx9jwe8dynmvGedFhb5zqekHHFd",
  "key40": "4yd31Zg28vR52hJmmPfs9SzdgskLD3wJ4vYwxS58vTuu9vxb8xdQbJfvEDFAetC7GRDrvRTaHiANMKg2XMnqCE6t"
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
