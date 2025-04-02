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
    "2kbpUdCvPTmVbxjXe4btteVYtwT76JcNsK9WtjYGpcpPwmb3NiFKKV76AFc6tbF9WFxAyrn2XtsJTDebGDiHLRL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSU2w1Smmv2isX4WLQxm28WJLBxo2fC3xAzYprXbztqzZ87vkU4V3YzZ3tuyaCEgwdAC1yYAdeDARA5K43DtiNV",
  "key1": "5MVSvvoLNyDk41UNCpANjKFSUBk5EpLKwseTwBFoNhoEESgPeeKp8jqxaW8Uh3WJejfFZWB1qUjaQe2GNRxnGyxV",
  "key2": "3Hs9YDA7mMbRb7LHbZkEqT4UkpfZVJbVwTGfybtwEwR7PKcBBEc91nDzqzC7SXpbUxH56JAp3hqjJ8j9yXroUJ33",
  "key3": "5kvPNMPDohPbfLJJ31fJhBHGdAoi612XPwpyRAPSfG9rZ6Goudvd4VX8c1MYzMgCvHpC6JyxrFkc9wS4cwcvu5tS",
  "key4": "5bPoTbTCcCkg4nzmE8WVTch9aRSjTE9DfZ3ZWRAon6ZGBtNRhrftRfkWcBs4n58moSqSwWL5pNMwV6xLysSjLRze",
  "key5": "3FYbrjp6MmitWT2AysAT2MeA7GHPKB2AqB7YgXtBz7mMpHjuQzB3JJv8vmseNGDU5g5fLU41dFCCV7uhQy8ndNFw",
  "key6": "4a2HQwXGBGHDTWXSbtBVhwtLjdCmgJFKPvSa2h3nbnDo5BHTzp6YCQbZUzkGoACD4tmpTnfdVGLmdyxZ83dNH3Hm",
  "key7": "49hEmsGG6zpRS6Bcz1JqBZ4fMPPvPLZ4VvRvQGuQeLzREMumrKsiFRxvMKHvce4UXLzJHpp6EvMXxmNBJYK91qEz",
  "key8": "29EbUagyRMRTgFPebH39DF1kd8jRe7n1uzCpp6tcxEkHGwjieRsg9AmNQKZLq9FeC9joSdjHJZy3yBps5UggcayS",
  "key9": "4pvMaqWRdohTEkAZ8habHtkzrbSnB66SiF5ZjLDURCrt8caF4c6B8Ng47REuRyMHJkKCzMJgCh1XhiH2A6dpWvLm",
  "key10": "48YZFywqFKgTrf2KzHWnTrr8KnnSVuTTW7757VGmfYtaXkLMdmWbUp21KHua9hxHn1E772Y8ek7uSJPG6LwxNBYP",
  "key11": "5Bp8BCUUioRHDE8Vzbvx3tkiRNaHA8dJr6LeqtS9Foab1cB6zA8uXBB5SP8x5fjTad6nNJ4SCqziPyZogBqdYPLs",
  "key12": "3xcYBjpinz3v8XN3A885Q3yeWDmXx26dPT511bsq3cmaBxPaPjjQgcg3AdKhHzALxAUVghZCc1o1ubuV9j7kUhj5",
  "key13": "5geRxxjni6uSzYNfF4Nc6GA7PTo8YTXdD7TXmYvQNvDeWc63LLpG7Ngj5MaZUdzMoSFjqVjzLKyGoh8oTCjGBFHj",
  "key14": "2sgtaZMjweTrhAB2oaZ96JTWgYvWasUvYbgZLuwayd6gYg3qCVN8rmtGnPvUkB7yNfnvY4SaCMCE8Acbmtgjh6rs",
  "key15": "4PZJC9ZiHs8Z7mLjVnj3paaf4Vi4qdhN1hkPhCBWY8nRToSy9WCo7uD5s9JuP4LfYDwf3grrrfZJ8rUp6Pb3ZvHz",
  "key16": "2vCLJRJyMNmcx3N2EXbXtzTjTHBUkgNzKSdUtRJcu7CFzfaKVq2aznwxo43QthEFVYivJmSpeHsz9BftKUCqzCXg",
  "key17": "2D7JdhSfqD3bHmQDJpduY1L2oEHqRgZzQeibBmj57HL9mrzFCWn6hE1rYNRfPpscjUG6JbVcXBdAUptteaL1dTWz",
  "key18": "47pbKWhRg7pSurw4vXHgkvUCegY1uDnUVCJpfgwuy69JQhHVi1RQBas9mvvXKgZbXApHrT9aBa7pMLcxwQZhH8zX",
  "key19": "57YGfft3rpJuT7oEWHMWeDfXSkbwpzojF4JUqvDUo35JKa4D65BoNkGisr7YsKcGrUrXcVboGCAtdMgtptauGojv",
  "key20": "5vyBoAtKcA5wk5TJuQmNMA5BbgBkJ1aPRFWZ5PTQGvch453NUqdzBmjjZ3JxnEzvVpDYmtyE1RaydTCDd9HU5uKt",
  "key21": "Vufcpkngw3AEeSkWZCeJrt8ch7KaofiG9DtpA8mqN6mHJC3655Hms4GxvatQJtKtTsjs9qVvkVFGG1VDUhGFLov",
  "key22": "3DYFFSSkfaystuwLNDz7fB1o9NSGAbHQTpd1iaSjGobi6SsMkXXXXmpiFQSYZawF19o2Kh7yjML2UfXiqSjhE4Sr",
  "key23": "2oGbSeUHK5UzgYiuy7t1TvaMq32YCRQqdw1N9pZidCQcdSnvTyhXpkpS1cyi5Nm8pogtFhZMZPzz5pB2A7cGS4pV",
  "key24": "4LGXzwbYPjDnCAvSHERkGxkFu7NbuAc9CVnptABGbnjf37FVbcxWEQxNRB68uw31DRV299C5M3S7xTvGVZuJZyt5",
  "key25": "3jbBbRywPjMTyjUijHaY36HDdhM2RbRv9Hi7HoPdqWx7hKYK6a2PBHrogUZRf9Lm9PYAk8yAusTy4nbNgCk2UFJ3",
  "key26": "34tCyjMFkZ3LgJNqKhTN3iWyieGAZJksgFVzaFijRNipYoVvWSYoTNbkH84JoYrxgPyiG9pjYepayFge3fasaHtx",
  "key27": "35mDdXR7NBfVj5emBJKLEprY4VaZJmYWivhSGpyMRV9kqeN4nrxEStQQnARqxN9cV9j62CZJZuqd3Jdamgd7min2",
  "key28": "ZdY5QCUz5TGEgqaFD8uHQjiUrVmHKemaPZxEGo5BXv9aitWDL2xdYdjaVvvHs4Hup1QTJCXkEnyXNvKDu1jtyrE",
  "key29": "2efX7eZDNFUuraBP8ddmkukrKQbt5PUB7Y3A3k4d52rDS66VQgbCm1jCXREbBMmuiXHngEuzhZrJRN7DQiuiGBCL",
  "key30": "3s7hzmyLKtVjbyoVXgJodMFRsvsvbn6DTEi1ZvPKWDDKoCdRaWwsLEM3hx2QEMJ5RrynkuRDWQtit5a8n9JpeN8d",
  "key31": "8HBoGB1big6u2FGKQhXu1t6GsXsTAKdZtEAdrdXNWavLfvcHrPb11EPJzbyCdSURw97uaf4vTgMDYTQKHpDcDMV",
  "key32": "5ghWjUCFCvGM5XaSMuenqqPveFGoxjkRDggnmtV6yDpXdF8VjE95aDutxtcfe1dX31jzvMPXXaZVTySiHh3PNMC5",
  "key33": "4euzyYmDWvZbyDLgdUw12CWnyfNi8jb5Y5M3fTV72cgf93TbzKMGNwwZvwcWvDTDMUxPSSyTVjUnLhMfdaRYfa4H",
  "key34": "49AQaAhEfDwoRg3rdUjCQYdvmSaDQ4xor6YRJjX3KpS9LV7R5JAHMrUe7U4v8bw4EZ9e1ouhitDJ6mPVYWTmxnrH",
  "key35": "4j5i7WTsX6fNgfmqQ1CqX7cAx8Q58Xyaf1JWUQ4yWDXacQLsw8pyAbbeaGSXTqCj2VKaq15JNmgzfGQ8ETCvmx3r",
  "key36": "29YdNqt1YPkuQc3koCVJbJ85Ubwy7UBfCdyhN8EYrefALK9GT8TKKUyi7zYHsCSybTx3t3qrBZbDFE2QbLejNRh2",
  "key37": "4nAmW8PbVUsXyfpzR8YdgeEDjCn2QSuuoBWQ1cvU66VxegQsqX5iPCx9a5HFmiaB4U6xSrme6p15VsQFBWXWqPKy",
  "key38": "4jg4zXh371ikcByFqKWZBg5vAr2N8ptvhf4Nenx8nA1CQBkZB5dF769QFi7dEEebttErgoY7CCUfcs59EMpjckE9",
  "key39": "2MidzxB7JWQPoisGFqhuXoLzSwdFNWdRxbMakDT6dFuAckG85GN5usNGUm2GxzYgdb8wvaf47MNihZP6W8HDUd5r",
  "key40": "3mN2mKKLjustuCecZkefJFa31n1cTJgo18PcQZARp43zv7VWNv8JjaVAEii1veeBg7vMhP4NeLSKSNYy6rgmrzv3",
  "key41": "3LrmDUMcA96f7AgMQxkDSaiqoccEPgNC7QbR49WGCPX1uVtL22sB17FouKqGMosd2fmNGGGxni65HMjyyxmProUZ",
  "key42": "32i9hrnz4boDA3b66ygi9YYp7TKgjsCcZPbxPrFMr5aa2gycqdU4jhWUsr8pdUh8Yn3DgSyFM7ExtThZxQnMkXmL",
  "key43": "4jjJtfStteMwDQ566MTJdtGZRj26cMuWHj3hyFqXkMwYL8R1bjhMetzB6oFjCYpGiqP8hByZEQ4Ba8NPdBGZCvKc",
  "key44": "2NtN7bGqicniwjeVLEj12BdscxVEzP3ofa13HaRwYyb5aA8t9W6ZkWszXLYMWMMvtborfRJfANoM6zkHMc6AN9w2",
  "key45": "5pmjietoktG3A8is3EBpK4jskkvYxBu6ATbinf3iijnYdQeaaCernom7E8iCFREvMQJuq9WjBQVAvHXkPnLgE4HF",
  "key46": "JSSBEorTV2gTt7QZp33CBGHs4Jyye5HGmxPCtjK5W6GxoEFZTJDaHP4kR69Ei5QwweBnJ8WaqUSW8DJ54HZPzT2"
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
