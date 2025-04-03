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
    "2ddsgggqFWyHBxKqAHVa8zexrb2TykNmL5bkN1YKiW2GigLWH7LJThUBnmG8GuXa4DkJ5ZhqwB33gBgUZZTVZAm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iirV8ANRrYVyhbaEMtK1ekvftv8dfnKHioLRcnHEP5jyZRBPaDcfAshjXbuCL5aZzCUu9mF9NCtrmhM4jKPy626",
  "key1": "4s3VjyTNrzddgiyVSijM2EJn5vZ8Yx7TduoPXdYMBpnS72ezQpxG9LthG6NtTN4oCT7xctgpzPes7d51ZBfCkirR",
  "key2": "QAD8746VDghWeEUpjoTn3Ph73thRKqCh6cqsu8BvAQ6o6xMJB325T12KnYgz7aY8TUD3PJMhLyDbBdNUFKevejL",
  "key3": "4epNDWPLt5JGPc4z9ex1efwAHCsqQricZ77vh1o9HqMLDepucGD3DZKtoLpBNR6VrMjoJyBrN9RGK2eAWCUfq5Eb",
  "key4": "5PY7hMJLK1Rr69xV4Yqq3J3AeFqTrE17QEcxNF8rQDBoCFq7AS322LZNqvAjPJdRJJk8Jc9PGbKSnTFtYejt96bo",
  "key5": "2rBCDPsBePPebGaPngnyKJpW31KEStnznCyhJ81QfbkmwPF5qVBRGEZZPdixQ42G96Cnx6qjqXeDdscuNszWxvVN",
  "key6": "2aXikWcqqFZMMWVZNpzqDeQkUHabiDzUQM2r5aY1Vpak75UDgJgF2dyMMx6AvSFCa2ipSRDNvb2GKXVicVBL8pbq",
  "key7": "3P1Bmv7PkhUAQ5wfimxLL1G1gqY193KmA5vNdaCodjSki6zg5JC26M3JkSdD7tGbXu7a5LaXaa8NHShn8hmFb3YD",
  "key8": "giZUUvmgt9mjPU5i2xBj1sXRFt8R3Y4ZyPfDFy1EemqDSFMPNnF23CGiiSj29ojcGa3sAvXN4qXB2DGfcUCZJjD",
  "key9": "4Vs3BTyt1EUyP9pL7MkXTLXfya6CExLzBFxaDHn3vNm4AUiJ4nJXeSjsaa6KF2qcSo2MgbviQAugaZvu5UhzfDh5",
  "key10": "2w61rkb3fJkzyzik5YvTDCqPdiR4UWgZqT91gbsp96EdApzwLobQUzhFy6DznSzEZ9sdZTGcXsF6Jy2qrfFcgo6m",
  "key11": "4EAc5EFjXjrzjaoBNfsgwFFG2DfUwuXxnqzbA1LkSk3kKboGGL3MZQ5QiMW65sCokaiT6T62EemgAQRsX4QLmPSB",
  "key12": "33hPZ4z93BA5aayEAHGQTs7MRTjnSRrffWxHNf82qdPHXEQyQRR6KY2DXpuwpmmHPimoM6NbbWZCiT1FmxhYU3K7",
  "key13": "4vZiobjBXbe7xmmebarzKFAF99zUzH3FQCpkm5u9sGL9js7NZNhZ4kPfSjyMdtwUzR7Gw9xR1o3EbGK8y2LJhnEV",
  "key14": "5wNn6Cy66K6fr983w6vFDMqwHp6CEx1n8xNJvV6ptpybzX3BczkWQZc8nJYKmJTZNoifcurLdYP4GZmiG1Ln2JxE",
  "key15": "95FUETMqR81MoaPFfcXBAJybn47Ax2FAHdVJQCHTFj2q8iG7PHntNVxTifH9twcX8szoYAEy9vKtDCrcLqFsocV",
  "key16": "3jyA3o13488HdZsWhi21XhvfK5HgHsBiipAQasdbzVpKYKysUE1HTQAr8wryVLnKG8tu3Ti4bWdv3usKtWvcBNfG",
  "key17": "WYnYWevehw9V7hPd641MjDUo6i6Bw1DVFRoerwEqojw5vdKCgxtHCoJCFFoTuJJYtBgtVWkVHSE26f3uPYwFKor",
  "key18": "2J3qBstEYXpf9Lv7ozAYjgVQ1c3Cm5Lxabf3Ny8mGzz2DgLqfvXvF1g2ngWccY7JQwzJEK8ZiEL2zpXrK9Un6Hhy",
  "key19": "3cqEz5NJHJZWErPKnC6WVqufvNWQRw8NsGLPao7uJaUfiy2NiNr6D55CFkXdxQayYFMZYFhLxzY3cF7uoW4bjZsH",
  "key20": "5S2XhQGxs9yp2o8hDXi5uKUPAvpiBo6G5Zb93mVdpZtaPYvX3GpxSkBDM7SS1AcPFwZNsJiPWL9TxUjWcNSLpbYc",
  "key21": "62Gh9VDFwyjJnjK6xQjh9Y7CXH1prNbRgLSth6NmR4U8Pwwudnd3aXTfGBK5unVw5EH5LFxzybap4n3yZ4fbXX9A",
  "key22": "73cU7gYSz9wztKvwzK1fxaNXiDAmuYdRf8PmRugPcpURcWqCsFoRBarSna9Qu1S1vYif2yfjTeHBQuf8RMb5GXL",
  "key23": "5rznYUy8JPziJwcfKcBRQhx9HSJbYpHCkdGQ7mfBx7FetuDGFzmqwrYJjykqhdG1HbsfeTDHK4GWTtuDkUhFThQR",
  "key24": "5yhY1pnTF119JWB4fGNM4TJnaTppYpjc3PxHm7JxDZ6taELJSEyg6YCRAvUYMSNA8b1Pr83o9q6bzpvAFJiFFigi",
  "key25": "4MRp4UE9NeXTxz1NdesqfJZuHs64MUi2FchPKFuuNzJPJ2z4hBWBj9VcJbRAL9TfaqUNcAEzBRT3SpJVtXNN68sQ",
  "key26": "5PxvNDrihaJerzQtjD6mL83RPhgvcZEAwUCnDXwtE9k6prxZ3JYASzRX2FrCTxC7Tf8T54WcBDnxerkxTmXppLTR",
  "key27": "3LoAywR4rBbQqHiaAUP4HzY7e55vwZmT8foHJndRXwMLM8QV7w7ykmpLq5yoHuRBek7D6kpFVVkv4LgeEyFG29fV",
  "key28": "XsR8CVNFMrZ5HZSFuJEgdZuFcbavRdKrqaR5qw6ePPswJSFurQVzV1VzqeJSy4oPYfJ4v8Gsas9fZdtAA1vPQ32",
  "key29": "2wbYBcRY3Duv36yzbYx6eg3aokoKuFvTJxTjY6SBynegufjfpWZ4eGQuabdXnX315ubW9j8vku61RCZCjS37K4rD",
  "key30": "44ymE3HyUU644NR4HDM7egyD6mvW33mA3xW4QEAegdXKGQtET49sgvM2ydcm8gQYRP98gJ2xUgdv8uTdY2NsEwyf",
  "key31": "7vt6kLfwzacDX93Cb49ScFqZtEdMuFV1LX71z8erSAvo4ckCg221aRCyqXr5wSwikr4xNr3seZxSY467vwhTnqd",
  "key32": "2tJ2D7wnBQDGPW1V2BRYWecDZZqJ8iPwsFfCPB2ahWNSJMNrj4PJPdm4Vqrr24ot1iTLzePCn72qBx8LBQjdQcmn",
  "key33": "4KKQdpX7PX5fVnzmobRYR71ugLcFvreNhw9e3W7TtS7eaYDnn8h9Lor2DNMfrvaVb97Ry2W8SJCDrHGumByULFzn",
  "key34": "5ohSjMh429gxXkKrX1UfkCdjDwoifAZozTJLRx9bS7CMi1xboinoXU3yVNtkydkRnAked1r7VHmpVnbeQai5ogr1",
  "key35": "2puPgUrBiRpgMibE3aoKfBTsVENT2Wvwq5y6pxX3Rt4tgM9rEB6zEeHyLgaFopTs6GUgeDuEEHNDTTzyMLKYaaJ7",
  "key36": "63Wpmbqz4oo3gwe7gXqQQtMa7hFvcTDZc7o2QqcjNZxKRTtfbwXGJybAzKLjVYb82g7HX6oiPde6YFxZKjaAKbp3",
  "key37": "265PKcpphZDU49f4NykjkrmJbGfvb8vggaV4C6aQVxETsLSpn4TyXmJxVSWt3Hhde47puM1f8k5tX7R5zr4DX4gd",
  "key38": "4ikh9K5FCTv22Sfc6htuGi8uHTb4EXWYkS8Z7eqPLoxpyQX3ZjeCbQaPAckUBNaPsoQnmwwcjWBZhzh4YHohisBs",
  "key39": "3SuSSV2b1EWVfHXWzVJZ9M473wtKDVEcz7qm7ACDfVvDZDSWEqkDAFp4PRJvULL215M66oFoz7tfAwQ8CNsrxEw3",
  "key40": "YwNF1Xwt6bt5aSdUNcsrH2PZjEuXC3xtMDxQxFoGeHtp3qjanvygMxxrsFHUCNtdtKLQ4xRNAJQ7Pkybg2ZyBNW",
  "key41": "2FDosjerfNoBjdrinwsm94cvSGwAf6XoFFCj85r2uYryu9FZpW1Z5oQdnZDBkkUFPvy6FW2T7jY6yT47XYVohQjv",
  "key42": "676nEjYkLC3sCEszp9nMfBpuKv16aQ5LhMzDRj6VHmNidhXBjvDn9LFd1yCJa98tKyDn8HXMbYkzzycYL98NA12G",
  "key43": "2rGmw6Tg3DH6mcqLfTuB6TkL8TzZpFHitrFeL4WxN2xV2psfovMyjNcW57ZsKQXCyaEL6y2aY4VGZr2hTHHwkDVq",
  "key44": "21Jzxg6HRe1Ze8QKYLFcFwqYYGb3MSTGkHUiWXXMP35o6YzUkDbdV1eUkSJM1Dpc3muXw3qMoCWqDtkrbL1dBNtS"
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
