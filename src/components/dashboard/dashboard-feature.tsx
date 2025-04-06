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
    "FPfJMj9YGKSyoLQGujiW6DkGJfDYM4W9dC1B4S4cvBKZStKNEcRTVN1sA1BSFd26MC8SumnVGVGNfB73xQW3XHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTNfZTaxAPnfzPouDAbXuvDsPW9ttyiSCTTbsESKgnhprhKPudiW4GVm1VH39tTp8Y7UL155V5Rw2GRh1wSVEre",
  "key1": "27nVscpqQiukk2PP3zzHFCJo5DvTdmAcXf8YCcVCe3Wxz7Z8oN3sLF8CF1HTm928UbiLVSu7RFACAjgBqhEgJ1oh",
  "key2": "2oW2Y4EX7HeMvCoLPJJQVo8YGR8fQwbgRjGAcuhjzEfJzJXhvTqvV3N5RYabLRB6QKBKnL4hDpGwqxnHcHX9EFbg",
  "key3": "5nuKjokekznh5Xt4M57Pna1MLdwXLfdGBp21Utn3thqiVGhoQ79Kf8N8on8bMM6R1goAQZf4t6HADkGFPHuHYXkh",
  "key4": "2QThgx8hvfoGC5vwmnELcG1yFz3GffCaTvCsrPYzGFwEBSDV4ef8TUFc5X3uX6j9yK1QZ8jFp56juB9764qkMdj3",
  "key5": "DbbrEiJsaf3j4Jztf2RuuPHmVvcZTzEyKBWAVvVybs7GwbtNwhgrytVBxxjXX7PYwJRuvohWBEKDS72ZkbhdcSh",
  "key6": "33s8h6SG8aURX2veVTUWjPekTBzB54o6uu5TSGqWjvdGFftZbUitPft3Gfa2bkQChcbFqr3NuvXkAMsF46UwnPvF",
  "key7": "2m5RAsjK23BRgCw7ta6sFeNjDNMecBRb2rWgrKjdRna2hNN24K3ABF4MoDi6TqPeh7fWz2jiNp7iZnSvdH7dR98W",
  "key8": "2QJADpAYNHJyMqEC5VCDzDk6RLfETvw2W66Tcjpzn4ChGjdgkPXcCjLRnLbrzDCJDmPcfNKNr3Rnd3RFNS23F4HP",
  "key9": "WLL7JwqEpef252zr1N4UVVPe5cHjH61LaqXyaKUaKHxR6Vc4qAsfZtGJRvpDs2aLQLHZzRey1oCEhFDDxQBAczF",
  "key10": "2BxosgJUKRZr7nsY1JEFPF3dTAEsqxjsaotZxv4PuzUZxpc75D6H2g2SgE9dFbQZx9fyysBEqpn1eBC3PELNU4rA",
  "key11": "4sYNP7nmNjXJV3g6iGTcjB34ipddoxYuJnAbTbSHRDwHAiR7kwYhvLuiaEEgWFZm2w5ao9mpKiDV4XJtmSkeJFMP",
  "key12": "5jjn1w6amd6UGWnb62TFw4VpXTGmGVKu8Ygt8Sh9UjJ7Q3QuhijeYgaHxrxjbpkCDvz5b8F7YsNRcEU19rTqYSsa",
  "key13": "4qoRRtRz3JPFhwvaZHnq4Q8u5i5DMCPpHdL6Ua1ysrehbL34EwSYbW37cL9Q2aPAbx4Z5FaJBvdweFFEgmgmCNbC",
  "key14": "4A69yTAb4KnfmozPRsWF4BQkRee4JvvfWNUx15WUEj1RcdKuFrDN1jhXWGotx9oZ33qKP9H5qaKqrQvLAjAzigsa",
  "key15": "328AZy6S3FZ7ii9vqrjVZCYEyszriuMkC4iBdxFrv7RJMbXSmBEyjB2RH3jtDMkpVtCQMHZt1norMzjfwEuvt5s5",
  "key16": "5QgzfVaHmapLkDf7rkPxKEaCqWbgq9cA8bsFSqSxijzpE5jCmFtWottzqEJHNanyPSK2D2ECwWjrkmwmS87nKEzx",
  "key17": "2LaMUnhWMqVqmGJMC45JkG1jRruAK7e418aQ1uiiYh2hBY7W8Lz82cpdKSoZksR7s86JbzHhUf7kMGuKSnbciu1Q",
  "key18": "3jBQca5FXY8iwo73wYJBtvQciDAyDM3tFvg1ZmreGoLyEg8uywthV1uFriFP1hgTRoWzFXXfzfiArqhmUd1U8PVf",
  "key19": "58jsPxAX2YUauY8vmqU6Juf9rZ7v7q5AUsNnBGjfAnatpCoZcDfDpBu5SNL49Am3j5LXNt1313WwygjycP33qtUD",
  "key20": "3NBjYsxWzxUnfZ4kbBTw2qTBXDHdvWNAiE75swcHATdWgejrpJnF1msjgWvyTB7CjEDYTPzmQ74nnHpfnks3kxrL",
  "key21": "4MsWRtBApM2Z1vmrpZaavCKTXz1AGzDTC45TjY66rEpGFFyK49mnVMpWxpswJDdLTe33ej2Dnabgua6stGXX6cD6",
  "key22": "59tQ9nnD7AU8nJ2rxvwazcoVNe7u3tua7EaURCLdFjpc8j4zCGZHXTwsEXr3xx1U8SdLpb3ecTJTCnf9SiLyAdGv",
  "key23": "26LqcxXfnVvzpTFp5anH99nDiTxEVDUrrZ5rhwpSxYXETh46d4CJzyPK5oExrzPkfBecnfeQoimUQnccxjc6QnPb",
  "key24": "AFurjycUyfSV4dPwoxHbEUTRvFjy14zWFKPB7uAwB11xRMJWSCU9DoT3ugpVh5pj8Boqk8UpgnwbnmCxwPgtHu4",
  "key25": "3zHF9SFrSAfWZw3fmFcfZC8EzP442FfdwMBXpJdLWmB93UacMmf4bSjfgGJRHN9pNdarxDW9H45emgjn9kqXznag",
  "key26": "kxpZ9L1v2KeXMkGuysoJXi7JYE8YcZqfkbwf6KNq43h367YB8mTm8sBij6QQ2mswiGK8x5Jeyad5ESy7CMKZ6ft",
  "key27": "nm4HTNbn2SVVTB7213xvoT1wS1aj8raj29zB3ng8hpFDy3Ffh5DEEmg5cE5SjVVZddd4CdCwYa5yvxQN9Y7BNau",
  "key28": "4co8NP9eyoSEMNhVW2fyzpXJCEwrZgGxt5LwNHf2YLSdrnSSKd6bXUdN9Tnz5C55zrWHkQGB7wbFv1FimxJ53fqJ",
  "key29": "54Uv7km9nFYvHoAhgvH8tgzjZNzW3RqBYPN3uGXifASJP1dFUwYVWj2TfWfJLys4cCuwb1XHYU3pWPj1jkRDLXLM",
  "key30": "2Ez3UaFPsEJUQ4tJEqvzi5mg7Wcsak5cqBQCk417sVympRvUzbDuANEvLyXib9PuLrSmQvGqhihM1WfLZNjy2NAg",
  "key31": "4zPio4ymt3XqZo92GxKhb6H4u2G2tbToXFnn2BgdGJPAkT4Sfjz2YxcCvw79TM7N5ekTgVEx1goDfkC7r1yFfTg5",
  "key32": "63hjb6JgkmUq8mvYX2BfLy6NjUX6knDqEWEBSkofRGd37QBrrdo11dQdGz1Fp5ruo7619m7Zz8cxZbkHy2MHLNxA",
  "key33": "5g3biQtJdP1ejXWgRurcG6Fm8Yz2D8ggrBSCWvmin1c4e6ntghWZhJYh4kryDipfZr9RCuVnSrRuDyP6sXtccBfE",
  "key34": "4X5UroL8K6RuiPK2j91gJvyymwPaSPstiqG1wzEq4g9qHMXrsY3da5W44pZYwZzMPFW4LX9hZJTbxHBFW9pKJJWB",
  "key35": "5XW5gPptF33XGMvEL7hvxFK8KgHTJDQgLzKmMNQQuc1o5qefKakhXz9U4wPrY89sJRmRBf7FhBk7vqD1mm99QsEz",
  "key36": "EoeMLxoVZ6XjExXdMnwJvj1diYywhsEpzWaT83FjNvK4L3GVxQyiYCEss4kLcgNZWQGjQpWdxarL4GMDCW3NP1p"
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
