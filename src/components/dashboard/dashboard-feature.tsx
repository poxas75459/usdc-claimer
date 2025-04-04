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
    "3pnuUKhaDNybi7ivsDHLmMgCfZLe19ib1XpsFutu1caQ3G99WFLVwdwxPZNdY3SHnyRAMCbDW3rFsTojyzb1jRac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xp3QUkChCC6LGWD7xasLW1mjWPtRX9vArtzxrq56Sh5VemusiVbiqKJ6MQDjwijWkj1fvw25UWVEcXVAhvjWQ6y",
  "key1": "4UDRDvirgR1S2szyUUczvsw1mxMsT143kcmsZu8kVStfLSjXLK8Rq7atEdB37gGuHYqP3nCSAuEQfM7L8NMNivir",
  "key2": "2A1JWDmRkdLpcQ2iK2KCUuuQ1Zneu8wpipVnqDnNpneTVSTLbtVyNPYvZ22ecLUgZ6MbP8i5PtMzKPJxsBLgwMXC",
  "key3": "ccc4PnWnxjwJ8Pp1gSQLRXWv3c2NNyrqq2qbW9JXnWLMX2DuZo5pgUKEMbfku7tuACVWRMAT6z5onkcw6HymGwt",
  "key4": "5wuHqJnzEQwq2ViV8tzc82AE1Xmc5DjXCTtzACZdB9Cza4X9xdtppBkMVawJ4m9cCoMHJEc3tMvAA99DxUz6eogf",
  "key5": "5s9YF3UPQPH2BHwdYUACA53ptYgRSyTSLiAqDrMSoquFEbjKdKqwp7jDiPJJW1qnyAigWMGZisE94rDk8AxRHGRG",
  "key6": "ygsnbeqdUQDof4rDKF46REBdeMgbqeaFanbYPERHyw4bZQ4o4NmKn2bkSi2asAkL7tbg3b1KkoJ6RPuatygyxKw",
  "key7": "5yfZokYtt5AEVBsiydVNuBrsZGhRUoYbSiF6yj8dYWzLKsWmrNm4Ypr31sHiBe23ycUSsASNsXkkAWWKmxQMUnLe",
  "key8": "2ZtE1RUKUsW9GMQpnH6ir2gnhFkTft2MM3nMDTdsLSF1G8i4CYqgpB1B8RWD3btn2xKgkWjK1YyCjc1PZ5Jo6CnF",
  "key9": "31nTH3JkzDDMwZY7FjetpdmmcLuqg7k3eh8LimrC3KTnTaN2w8e2TuAiTKgmgGoL7nodbrWrGPzgnrskhuPdvbA",
  "key10": "qycxJt3HEwRDMarZihGUFuhKXjFx5JEVuqerXdxp58CxXPBB13ycEQ7hhAr9ZvmFzNWMtxSQhKPkKddAJ3ygCc5",
  "key11": "QxaKbNjBMkXc6a7Rm1tsxp3r2EhafDfVPGfBBkFg5SejyTV5NtWCte2xiTYfPL3XTQeC8TGg39RCiYwq7Frin8U",
  "key12": "2F8m6cg1wKHYgyKFJfZgYBsjFthgSQo5bqjcYQqZMEEo81hP8BuERDkasozSTKeq3JjM61RVdeUgKGR3b3we2Jdp",
  "key13": "3bVZSndP9RyQp2T7vg1xXJXNSUPfYFWY27Nm9JkjdHMcZwwQ84R3bTMCLYSwup5nFz9RiL89dS5EkEJvNL6YQiMu",
  "key14": "4LSLDa7Sv6yKDfTAkj7ZSwTwnP3wDT1pZojdd8YLNtLxVHXsy4iQxz9aJfr9CL7b4LCVgJ744A7Lsb1ezR4sSo13",
  "key15": "4fGQX41zd6bywjrQkCMw3DknLPFN6DpBw2wcP4Xaq1SEN3SjmUxRPSFGJ5baiX6FsGStw2UuqeHc84iTf45NPsSK",
  "key16": "4chzkcMrbYbdGQkCJgUPfnd2KUUkWUwmniVzhqrkxuHhwGSLPYhLwuYtyZ7B31jw85EMaYTxJ24SSjp9wGqY81dW",
  "key17": "2eKfJGGoQu8DkcNGBbKU7UzeW46JbFan6BUJTdVHEuYQMUwEQLfa4zPTGLnKscfPwsMCAWRaStTKFGopSM6tRoHg",
  "key18": "3zx8QSG3YXzYCTqwJb4EJxyyr2MaxSS7dVp69LWRVBs4UJ8tWKMZ1g44FbsWBLpinBUwesQFJSQkL8auCoLijcTw",
  "key19": "7vMx2wFAKEtUK8H4tugGUDc15EwpswWTEUdg9Eyz57u1YWewXTg7HWcvwLUQmkE5DX45vSTA6HkvXstiaeM4Lfn",
  "key20": "2VtHq4cf55xWAUsck8T3j2FthYB146jhnr3eoFU2GmzsAb3wbUUUKywh5WweBsH8R9WrEvJ5gE9F68TM4Xc77cNY",
  "key21": "53ipBmGCzgo9fWratxJBZNmnG22GTJEmMr7WSXP4XNmDCNiFh7RuoRqeiYxvpN6bFiXL9xSjLN83GjCpr9AtutGC",
  "key22": "3H3HuihPhW9GXxaVocVXSH5kkvv4egwAbtDFrHBzKaTN3thCJ7pADUWa7Lex8cq3KL2SLgdT7cMfTPsqZshY67uR",
  "key23": "2KpALHhhd6XvgraRV7nRJjUwzkUD1FX6VdSZjEdCPfG8R1rAQcD3Jqhb5oiHfZZbQRqtZ1CS1t562rJJfGzdGQue",
  "key24": "2h3octX39n1UvgQLHT7kTbjuN3YbZ5C4Z7aaUjwTdrXaEtmZsTdnAM9J7mFwinivF2wzHFTJ6AnwbZQ8uw679MYD",
  "key25": "4zTwBoyVJuPuxTy4R6r8LrPhaKRxawRKEhrjXUyyJafTo5jrdpco6DtPmRj94K8MPk3BxyCp7pqvv15htdkPTo4U",
  "key26": "2snCoVgGA6qCEfRM1fh9fY3ZCGAuecVKxqifJJwE7iC2gPs6oCD51oz1Mn19KpGonTe5BnHv2itHYTuZiLZiPzyY",
  "key27": "6QHgiHJcf6jeb6GKb5HdvRLTHadADD4q9CYRJATJDkJj54iNvHRpvRaM3T4NisuWRviNbqt6okxz3RGL7LU5ifR",
  "key28": "5oeULeDnjChYLjK83LxQhKs9UHJC792Utd5kpXtnfgChU3ZoN5hZRa9yQmuwEhviieXUPCTbZhA3ed9E3c6txSL7",
  "key29": "txvTrKjRiXBRsv1WvxEXUnYtUAE6Ayp69LNibUFnrXkEwCpspYbF5W4LiPZNSqGqyK71She4ww5Tg36sxzWSauV",
  "key30": "5hkR7MuFe3LfL4BjQn7m9nF1hz25KXPU7RfrUj5aNK46KFDZAWHuvWQ6oMT4kv1fhWTEcDJLbPw1qnoUZLMR6rtb",
  "key31": "3TMHU4KwBX5U2WyvC1CUQKXZTEk145JUZZ2BUKXqcqNkrEWff5sasVnqdZ5e1JKqT3iyhYXKThq5aw2N8omwortL",
  "key32": "5XN2nKffkp6RBEv7agmZZkCSeXxMCQesLKFukhErbxcqpARmLCfTpSMbqveDizhRbMpm3ce3Mf9oWwWEA1HgZwDu",
  "key33": "46MKoTtuhgUpvC1ksWLA6TRvHCHiPRgtWrBAAPJGu1UcjLsNBGPgLrXBRKaJzvVDindsbx8ZJVqJFvvx4Y5BCp8G",
  "key34": "3dHrCq8JiYHhCbrh5KnPqGTTWow9wcV8ZV5cKypZwa9Lha2svYSNUnYDsbpELjyvUK3SNtXfMZbiwgFhHWv5DQqp",
  "key35": "5dCDupzehhk7MYKPc5DG9pTfoDB8En8TGwNYGzremsupjfCXY8o7wG6yFzWrxbBDHCBBmHLvKyLNnsi5DwpgVZe8",
  "key36": "5xxfgTBp63TASxjVBBhXEJHUEe3XKERErHW8XSgcxzmAgephRhxP7k3mMipWzb3C9quwUdR87TsndRTtrTE6qBFr",
  "key37": "2PCM4y2jREWkay8VF4Cf3dRZnQtsXRv44pgwFPZcucWd6EzkEC94eS52cX6i41knwTBhLRhTQSCu7ZeGdXeQQTA6",
  "key38": "3ZDyt8sRjAAbnuAzK3zkTqTPTp8quf5QsaUwWwSi2x59M3fKT66b1yhE1tCNRwUZ3Sa43ain12je6Xt7UdyjaXfJ",
  "key39": "37n2Ap9TeMUxaKp3cZd1hgcz1K8khpDkJ6JpxEFUofsyimcQuMr6T2Qb2VjtmigS7zMDricFFMNvYKCpdjJBELqj",
  "key40": "4K9UAoC1pi5J6HNUmJ1W9RuaepFueJanHfSGwMBsVps7eAWbprDVthgX5zcYgUUbQ6Xz4B14x1McebzN4Zy9YN42",
  "key41": "TKnqtMo6iK3z5a2FnhFNwymLs5zAYUpZVnFLK5LxfWLW9oVBPoV3mdBJd4pUUpc9Nim4ddZFkyy8mQDv2CXaDr4",
  "key42": "sprVSEPcUvEZPHfDGczCxrZx16XijyHXF46vjuKSyuAnv1xZp1mr8QuDpaGMQuCVo321UUL9oyHSko9kmVpMUH8"
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
