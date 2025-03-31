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
    "4NL7jDdx2jo31LAKXpM9v5a7ARgdd7tQFGGWsQ41Pvo9NNZnyqgPYcBgWxarrvDZEn7x38umPShXCAkaEMSZUwAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGBpJ7zvHmo6TkAYQEN4zDvER2eMycjgv831cZ3Hn7zveS4HQoK8EXsjuUx6uPD37Wg1ENHPKkeVjzcdjHVTVGN",
  "key1": "4SVya7ZLcjxC9SrDCVLaKJ9KTL5brnQGz9soc8thXdFvh1mewLuJdUU4GzMFHW7g7k9Kkx2gYi2n7ULF9aG6qro3",
  "key2": "4C5FsRSg3NM9xEhoYT2d8KE3uFR13K6V7ekRmXvk3Ry2j4zYMoou7DmCy8iWgL965VzNAG2ViN4onww1JupRmbdH",
  "key3": "4Q8iKcUiupiskr7Yr2Nk82CmZUgMbwcfFrnhgEq9bRaTnSoieSRPq8Bdk5rJx48NzrR9ZdptpDMcr5r6ohUj7j1L",
  "key4": "4K4n4kFFXCnLG1JYaZ7bAMnxamNeiGMgzx3WHPH7QjwyaaYyBwmEWLaHQM42eVk9tjpT88YbZy5w6bRWtWhpTwRk",
  "key5": "3kdjqkJRzmXohBzgYvXvjsm2R526Wvza4E92NtxejCh7hUXrZLhgrj8BALY1oi1G2azhSv44wm7LF3zKUBtooS12",
  "key6": "4nX4fD93vgudgzZbuXMwEnRTpBxP5dkfwaKJCtkWdhThmVnwEb7UqeMbUrTPnRX9Cm6JizFbiRm28S4EkNpMvQrv",
  "key7": "3xwnf6gzncBrDXuCZvSDRRo8Q39CWFreTAp6J3amUjiBogAWFuhkecKwJSe6BFGU61SZRqQuPQLDFutqyvEv8msp",
  "key8": "4YyH1ryy2To5XPJ7Xnux2xuUfL53559UcpQiGYjPaU8vjDQ4hbA7XGPNYihGXG7nNbRykw9ri5oRnxTRb9bGZZHQ",
  "key9": "5hKbd7fYfWqoMpeXPaDN34ScRWQr9uXmGc5ePJhCFVhNuTAH9XpKxhr6qtpW4unaphJ4mLKSN261p3YesQfMnFSe",
  "key10": "4epv85hxxgJBMLMaJDWktpSzWEc5XY8TKqH6cs8KVEfGaWKgDSuZWWefN4147KvYspabnYUSQvayC4fWEzcb16vg",
  "key11": "GYG8ZcXExszb9rFeHnNEo3is4LmZmFbZMctyfNmx52HGhZeTxrhTD3HPeRyM9FAn1HtN8wFmHmnE4ZFpE9uTAPf",
  "key12": "4D6TcGL4fmai36mMCiJU6f26RfV8YHPNLeUefSZrSDoSfPWXoRzqHvtpG8M9s32tuRTf2hwXWipaVy4eGXSUyxDp",
  "key13": "4v7RLr6FXn2jMeLLt5dFYy9c1iy8gibPQTxZjrJd1jbYNcAcZfojxia7PU2wn6ekYWyQrdLrBi2YjsFwfcX9hfm3",
  "key14": "5gMsMeHrQf4bx3Z7Ei4fEb5Y9YsexZqQ6yVvdkWctz2QEvCBXXtw1AjSNwGFGabpHioPXQkopnZhn2Pde3pjew52",
  "key15": "5LWdRWDDUMjtuiVnDbi1xd6KHmtLqnbFHPqC2sFq8p76XqibsAKc2T6uVHN9zdZiTHip6V5wCKJBVSb9CHTnV5v2",
  "key16": "4x59f4DfaCz9MPgaB4FxNi2gAxt6BKrzrti3oZ6zkjw2mAzgrjXkB54yqpcVR3v5e4w4Zg3Jfh9YC6K8hrBUjCLE",
  "key17": "4712caFrg9XqWcgvuFj2U8vyuo2jZPwpiDytR2PjJYf7tKEqcEHZ1EqFDAtz7bspwepfvHP8Fwg4Dc73vdWwskmQ",
  "key18": "2VbA8exyf3929KCgzLJGZv4EnuMWugLUJkSyirPgXMrmagAtfHYC2ZbTq3MEYj7uYHcwNvg3LPTtYQaw6nxmvfxs",
  "key19": "5wvHdHEMyY19TzJyJCdWfh8sEiufoQdiftG1LBb4Bvu6AUKv1vewxHDgcMouqPuogCgCwSxqhoxL8vNrnLdKrJxi",
  "key20": "4Ak9Gai7EhUUD5cjYvxapgVEwdJGSLt1geiuZM25XHTHvfovAVqJfZ51cqnX8LK4h2XDg5AZ6SgLMH34hUcGbYkE",
  "key21": "pUDdu9sPrKi87tcEY4jt2TGQaDS1QkdR882VRcbo9vq63ZChqzcHxb7yk1YYSZxvu8ctXTTs8o4QDbJob4owcmn",
  "key22": "452vXGS1QmRCPv7dFAF5wLLDQ2EnbFzEGL5vdDMXp8wfrBmjLMCsTv2uFNZvNHoNJBo82KX8oytj6XgEgXRWa5qK",
  "key23": "4R9QMWfZf4DKd3zu6v1aNo1MCBCGJF7f8AeyhURn3gWy4ECtrivQ2uEBPJ9UyqocNpPAoRZWL8Nny5e6yLfkuGJL",
  "key24": "5c2MsCnfcP6jCGtcpm5C6vXef3TLVeyg3SRa1FDDjq2ZnqYJ3e2nUtf7QsA82CRvcJZ4CzJcTcmSRnRWFJxR6H2v",
  "key25": "83rgNGMDCUfasqmBqrHrUncKakHPtP3BY4yPVbyJJctRzZaGKTVR7b3afkiczdCZsm6XWFBjh7SDuS1nFZe1759",
  "key26": "4SoM2HFDdfofGmP4xqNGNg8WYCDasjj2EbivYyB9dBh86JN4rvhgkLwLHDMHvt3ZT3QdUJQwGRoBHQVsBSvyZCcR",
  "key27": "3Y6bQzeoGnoYmyAGPiX2FQifU55nsfYvjevG5SVjaHnujfEfrCSsqQHcb2f6WKgM1NTWBpdAVo2sA3E3k9SpfKE5",
  "key28": "2LpfKMPjm4PzvQzzTak5CJm7QF6pgNoB1MTjdcbERg5chCYGe8pqsUYFeBDmL9TqAo9QMTwaoYPeimRWzKR56PDb",
  "key29": "5PrU2KdenzjfuAQpHBq9gT4q6Z9xQGE5qPjyLnsQFtjMihTDT3NZ8HrinNSjAwBJnHDnEKymE7Xt5AGJAUF2Utuy",
  "key30": "5TMATazDLNp7eT35271MAYzL97ZvjXDgqFfMHQRGB3dRpiwqEc2aJPFrEfpnjEumffWgzZ2WWMjNairYBPtB4Lxg",
  "key31": "645yGBDPS3iGY3ou4VQu9rNmTwBqa7cMsAiyVgGkArExT3X1DCtVmnmGipfWEPkNNqVQcthrSsS1ewzt5s46iw39",
  "key32": "4DrS6qipD1Sh9J3KfNdqBrJNVQ2NoG94PsxwCTmE1GUpTB777cn1ZpG5xwDWYwgLRS4AzoeeosfqokbxLR7CXgsv",
  "key33": "3NB13sn1T5nD7asVGLavB7T1k6VfKSbo8Dfjk6n6Edx5DKN31x5PG3QpG8oTmEXk7PA6JeFKFrawVg2dLA1W5PxZ",
  "key34": "asbQF8EPwfgNKWVqQpCrJj8YiR4D5wELocnV5JMdkWnPmG2pD82WSBqNa47ofRcrgjFz2k4fhaFFcf9VwXBkzi2",
  "key35": "7v7kQxxt5yoebSDSvodiL9aEeevkmD1DCUJwivGrRQMmtDV61QzoXcvPPdebHTAi3oY4S8TTMJwpA5uyS1KqCFB",
  "key36": "5RHZ2eCnkKQQgu25osh5VFsaQXyx3Q8GNLwMHRxXEmzYae3f3eRXfniZv4aEUFr8hc96dQNPNhSL6cRhGnP8ciXa",
  "key37": "5tWGaC461aqs4zJrqSHXTVTELmCJHMCut5uZHom1JKZCnbWusNcKvQ2tjZqMkyaFeNK3LSmKd556dYsBQ223jd3o",
  "key38": "gZwSt6EQHidjweKuZq5Bw7aTSPNvn2SzTZ8YVMEJc2xwct5vx3hDfVR8REvPfdH88TryBYZpyLc1hLMT4ZqJypW"
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
