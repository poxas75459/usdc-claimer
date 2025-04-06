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
    "26vBdkD5rmpHLm7ifMDVK4fu4wMUZNEixbKt16wWYJ7YJbxWEs4TqK5wU6CKMmLJxNdx2XmKvqRKB5aUV9rAprTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4M8a81c7yowAo231BqoDojktMneAbY6W6fJKTuCSSw2gPakRRdSuhsGLRRxfNspBV995CSjXQtWY95UDo7aNx9",
  "key1": "2xASdtgtLV3yL4yum1gdKBAb8jseL9dAvJYiG2tZnPKDhFLqyedfjj4ydWkvy2SSmxdPfLMvHCuUWbooMzUDKQYL",
  "key2": "2pweQoNh2WHLVecezuanFy76ZBjeN1tzSgqMGvG86rp7tdaKqvCJEQa5GVJercR7mDUCtHQcKMeAxsHLxWJ6pNvV",
  "key3": "45jQw8D7gMRg7d69tJMzxUDvemLpFXxe84opKbVQMCnCPcvb56nQY2HxFwZoeYrsEHe2KMN59D7vegahFz7HSeBs",
  "key4": "4VbMFcuvxBtkt4FVCZbrTCLECUu6iSc8WDVJA2aC3CQ21327P1S9gkdVyi9znzB5Xdt5nSHbRC9kzueYuZWiwFXY",
  "key5": "34vt2UKMGEuEYC93ZEnRmQSjF68KxdgfjnBEcdCWDTo6qHEmJdou3qdDSYScH91meFLmbc8p8LVqjmtyfZnm3kve",
  "key6": "4n2cNfR2JgMHma4hL7RFddLfUv27V8xbhVyfR8Kx9WQ1UPXaBcP2yPxXTBe8n3a3o85oXnLoMfyg4tEKYMwMsLn8",
  "key7": "3ESTmzDCbNHNFxmj9f5Uw6tParvvvg2w67K9LrpXYHqzH4wfytzhis18ei5p1XuAYzFqdhz8BDGcfyo642g9gqT9",
  "key8": "427zNkHzGjTpYFGPxLPYoZbGGVRkJKqcLDgxZErhPBPEnvpGZvE3xE8ZQG4JEKkbibhQMPwKLDMhsrLQzxVayL9G",
  "key9": "2b7p5qXohzvGXVDNXymf9MXU3MMmKUReyyYCE8h8WyniGn7Caa9PxbCubBnbexUxZJJ3czbqDFoeGhVMgmQQmadc",
  "key10": "3PoU1yGhjo2D95atNa7ikHkmzdjhQvrwBtZz9NRhJVzqymWbkBBWgkJfEWVqy4GVWAv2GWVBVkSt2GWjkdSXCkop",
  "key11": "4uQs5VrQ7jNseftaBSJw77Hk2L92QnucZcoyvNjUSPBDfdjFNYKPDuvDBrrQh4DX7ewRgZ54x6d1FthtWSuygkEY",
  "key12": "2exGxj3M8QizB3c8suP4S2F8vD7hQvVjM39KnKjWVPaUdX6PhxuPWTyBAnXwdVntwy3ZjQLu4VGMcJZaQCMMmGwZ",
  "key13": "3fH84Pn36uXMbt6pjnQ62kgtUy45CvEW5VAgPtT4Tx2yFVzR7mW3rHzzZ6McujBv1DKfeYMxSLfRn9v46W2vV5kL",
  "key14": "4dmeNsXwhEA46cY9ZGbFz7henfzoNmpRoLDjuTLsoSUYrctdaGxEaqsmSDcnzyTeDhtUwW6mDeJ6gS2944hpoZCd",
  "key15": "Wi2ZRnJPFxeNuRjSzQwn1o7ygXFM4ypix7ZkX1mTsCwMkaysMDSodpi2dzhgcK9qrJwyzC8jfpnVfkKhgqhAjrE",
  "key16": "bj1CeRzSyHpqCK13k8tqSjAVNcow9fmTiPdBpTxbNVNKUm8hZp3WykozY4NgKdbuTa4f8d6MmNCSUw43EasLmTt",
  "key17": "2AVvSTVEbp9tuHRRNKpWs6H4BDsMMvzfLacpJt8idZLKsxEZKMKYqzwsVm6XA4jUjatSeoUFSrXqmc52WfMgoypC",
  "key18": "4MXnB9EY5bbocDbRjjP7nJZZ4WXMvM6nAhJePowDe25161s6R9N8tWybizQA7M3Yr1DpTjoVDmGASfAYgmLdzSeJ",
  "key19": "4siTEw62wHsfACbPkc9yma8B4jALxHE1srs1dFPo8FEuTW8uogAwBw6YmM4WPrHPgxydUch5EUCHC8R4hWG7uUVy",
  "key20": "2byrDsSwGbTBAamwmU1eP6zqFjbeUxkrsXFZQAsBxNgaTebGPiLKFgE7WzGD4vkvh3qTV2qL1HHN5j8qK2Ys1b4x",
  "key21": "2w31cY7BC1cxk2nfLwM8V1UkH8ATUmhpt3iZfgDwjqmuPJNe8uu2Z4ieQvi3JBWQZcR6B5kWS8BjSnRccMY1A39Y",
  "key22": "5LRNWtkoW7M1g6S2W7i8Sodk6ZVGApNqYUzJd3yjL4fpTeVpZFVrJdcB7RTogeusf1mPJHXSjaeYtVLk7RWwX4nH",
  "key23": "4jkXdqqMkLgJ1ovoGmE1fd5PJE65iD5d5JHbNe1B4AfaayFuQhFAJzJGQZUDhb43rjp4KS3EzDi6jGxBLz1bQads",
  "key24": "8YEGQhhfunV54k6vDECtRGmp4y88q3aVFghXk2B8xeUefmNSpNsYYcB4EAnbzvx8XmTNjePPL9KbNzhryzAUHmg",
  "key25": "BNjB4QY22uA1o3tof7wHXzHj3vhpdouhJ37zk9W3DPYAZcR7nR7btLqHYwgGFk3kVwTvwZrX5LShXMZiAcNLXWe",
  "key26": "5z9Y3fWCrZtb7VYPKHPK5iK8HT2g6PxAVpCDoVsQ2E4rGK787kBB2YojeECaHD5QfsbbhePe8C7s6CaC7BsFMKWK",
  "key27": "63hrgZHVQCUyvB5QRHAcrnFPx2dhvNPLcbkAiBeHgR8XUPkBBpL4PxhFJsksaTZumn2qoQp6BpUAXRviLunABWGL",
  "key28": "48FD4gQRiQSWa1CxtYCpQw7ERJy4ZgX82ZSRzTZvk1KpY1F8MroTC7vmmu97msKFChq6qfEzxgeZCpi3u5Z1Xygm",
  "key29": "53ZDs3cXywhp24Yiynt7DS8Dizx8jkunXGMDK4wDXRTFwbk4NBBrUrssm5A7jsyRJ7YVieV82f2c4VB5VfrSgVgM",
  "key30": "zampa9cDMoZU23WzHS2TSt3tGLJQpd7q6f6qfGXpp3QudsMp7umEUQPqAyTiSvF4oZbkYFQhKooVwzUgkrbfQ9u",
  "key31": "2Ro1CRUZe4Y4Kvjna8jJy4gtQ476oYDba6tDVPwfAexd2hXsyhYLxKbrxirhPdndEmNgNfmhhQYJoEzuBEBzBB2v",
  "key32": "uErKqDNhKBcM84Q8zzzkgXbwbxgkKmdHA7nLD4h5y3qQegDPEN7xhe3arQcD2L9ZCpwu2K3UT2U7jSWXFqYeBTq",
  "key33": "2YmSGGVs7KCqxe42MCpKWpL4iAcEh8o62Rwi5qdHvaMh45EsACXU6Y4F79rTrUMZgcTRArTosWMgfELCWgu51C4X",
  "key34": "2RzGW88u5rUnncREJzMsbhxmaKBLYz1GcbCrpXtbhtBfMZpFtYAKiGH6D1N1AMQYHEmp43knRAu4NVrp4ovVTVXB",
  "key35": "3ufB7QpAee6GuqL6jxRqMoCXn8k1YU8gHEC4bkzpfxsnaLHST4onZsH7ANtQn5yDRdm1NtN9RfnACDwsK5gCwsdG",
  "key36": "5FicFrsrshJbj48pSxGgDcbmmEqoxkVXMuazwEMrgsR1acuVvfK67YKa5JVJ4coAcw5mTZQYHdtVnKLSQuYwPSD5",
  "key37": "3ykH6EuQYGQt9N4nhmCBQa1HPFzgZcsPxNTe9SbCUBtQN39fo6JU2mTNHhMsS636XzMRVriuznqaQ5j9myKxePxc",
  "key38": "tEartZK5E3R3EwmM6Fpjw4cQGXwQYBiSVpRDxYV57mfVmkukLTL2AC9ZkZgRcYNnRmqRXuXRJDH6cHEuWGgkS49",
  "key39": "21bR6PQP1ywWn4biMg7irj7XBXRDSd85iuZf3rEYSkf3fw2nwqsyBECxoWgjVZ2XSCcAxbxGFwcfvgewEm44kKzp",
  "key40": "VKFSkxjbboKZ4demKPbQKiu1avJky19GiRp4WSoCCg3vJFUiJ3JAP9Y4uvpJCaqRW8P3iMKTfByaS4pbdLm72mj",
  "key41": "3J69ywexjZ1g1ZU7UYHNxMe3q8kjqeeFoL315cDREN9jNaNmabyyohtd8ZRMGif7YhqLF37tonH5AZyk84M7Zr78",
  "key42": "cPCgZ97tdkMnRj7QyudYps3Y27wxxpz2xRsF2fqL4CQSk3dCizW3WZL1YhB7fKamKDLzdLTGtnnDURM1gdU4XkW",
  "key43": "61XzXL6DvpEMVC4ii2PeCoax9k54agKcXxkEhoB99qUQoCSt7us3bM8o3KNeT31WPijffAo2mSxKsEkXX5BPokbG",
  "key44": "4mN89RapkkA9zjKpiGshgwWdL1igkFo2JswEwdujMYghajU1g9AVEzZzGG8UKU95JatsgurDT2GGAMNthUap4Vc2",
  "key45": "4rLbeoGw9qBK2nZoYBQKB9dxtfY8G4hzUizkfeMMxFKCmtRfStuGtzify7VFfpzgWHU1JAzeKhfjDk44ZLkNBC8a",
  "key46": "2dbMD4ZDYajVrbNHD488iRt4AHxRA2QjL4sP6sdguFvvbo5QK7B51V2SFjTezGALAW1eQSywQryKQp31R6H1Lrc4",
  "key47": "41FibeCZkEFnnX3f2p5ohrPZdUALY9K7ZF4UoJ8EywuAhJp4csLBV1GCySmCPDv8RSy9gqZTY8mwWiSB8meW5e9",
  "key48": "3ibjeH127Ci6PLNvCCzZ6ebgBjGrxhYQUABPvCQWbWDCaNCQWD47cAfWXRKBHU4VputPwz3QSAepi73j6pLMWKpA",
  "key49": "5VaxkSHv4cSUKbAYK5dv1n99a1judTtbSB7DmRma1DLQghjdZMYZpb75JMLYCsVXcLyrBN4dNF9Fc3bF36tVgcMv"
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
