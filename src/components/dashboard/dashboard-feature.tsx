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
    "3SeXnFAi5Z9vkcLcfxhbPmDwwQQLtvDq2BspMts888zfkQoitSEF3CDpn4WeJH6zFhXLEr98ibdCaUAK7pT8HRov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BD8RwAFSDjaaAmNnGN8PhUe6eH29oG8sF3cLLU6EPNBM4ccYD7JCMSYTmDe1CTkYo1xQWDVuHGcQKZs7kuDPwVK",
  "key1": "2M85tNEzsSsPqp6KF1tgukdjzB7YPjicvPc7SC3jWVYr57AHy6ZAbeHfPGn2pQzakjoLaGvnq1SDVVoS95g7orbf",
  "key2": "2iLj3z1KfSGGWrKKYbzHCnaTj82pmwxuFCm1r7mu8u1UuAbtUS8DEo7X9zmXLRKF71ySV6NrCB32vMQJ24YNWzFi",
  "key3": "5g3AvHu8gthE8fyvfqLJPRnCkvZiT163JnXShnapTtA5hBW84ETQjS1GeYDdYgPjo6wvT9dMr7VB3xm7JEYK423w",
  "key4": "44c2oj1k5UXkXrrXmHMgf8UTXSM1AT9tkkKHewkmzHh5SZooja6ju4rwsrDVEGFCdHEJgbmEE2zuPVnZwwSGL174",
  "key5": "2A6LiR6f8utKm2mRjqmEVxMxcBPKPFaSakVRR9Sdh446GNhuejEA2cMHQUfrhFkDJxf1WdcJsMQAFf1HQm9hrfwL",
  "key6": "4qbPpDXNUuEd5cRWcdw7n9zdQcZh6QQ7nvobD61WZXQ58JraGQxcMegYvSRyVGVXf9dQ8sCf5dSzGQZdJkrh5Q9W",
  "key7": "8NxZEW4nVcvragRRDs2X13HabfMURwXkb9FncELzsYgtzrUnCtxFf87ASMQKxGuAoV7ZyFTLPzuCUjxDfacE3tU",
  "key8": "2zRoTvxk5t1VdJHoKZwbKgoKDC4Q1qPZdpxkvosbpjPQ9AimVB5VF7dzL1p9j6bAemMYZr8kSq9aosXsJApM2vmj",
  "key9": "4idk7iWxTWQaZSqPmULDomX3MnvqQFV2zfxazr8EdkCZncbom3dMYs37Ws2LsFhXD9YTsZZ34iaPsLaxU9EASfj2",
  "key10": "5ZnT86e5xoLoP1YGZv9fGshNvQttPQLjuBvrwZj8yMeTVdhsY4N7UQs8PzZE8opBWu4s69SZ3XgBzzVACJgZFhxi",
  "key11": "61KbacyezV2TVbCeguy5YyVA1aSfR5duW7UrL2e6Tx8YcK91VFYuJ7EANL1XtWvgc6tvxtXigpuzQQzPN9Vv8P2C",
  "key12": "4hp8VvNTaqSeUP2dsgnRUngTQMKSN9R6Y5e1GumPsWfatMLurLdjge8RGSZHjEdi79QYVYz1KgaPHwz7jv71nddY",
  "key13": "4ipUcT9nZWg77EAQtwFroooCgXxV5ihmPEik4c4d28x7NCAQJGGAJjuLuA7kBnbhKFLKHpFDiThcJv6ZBtM2G4Vj",
  "key14": "5x3UBLwnadWwy1USug3EMNNzfeRNc8xeWokXxivTau3ShKSzfoQTpoG7TY6uGJmZ8aY4y8yxEF9sPng13J9DVCTg",
  "key15": "5xQoSir6MapWmsCBT9yrhcxhy8o1VeDXEPacpq12zrhcSVjzRjb9KaguiUhdPwSHuaK26EiL5AyDHcJxsQM7ihpX",
  "key16": "9YB5kVwd5q3BYeNkfsJCDCTAhtsPS7BUjQewiT4tE5Fuftf1bQLMAAM1iLywiZ1jmsHoYcv3nGg15kHXhqPpMp6",
  "key17": "4rinv3q1V2W9UU7WxKbCpSwGyGoeZRF8tASrFWoZ1KxcgAFrCwGKqDKbLM2KnmaDGoxH5dNhoAajudxfqmnbp5H8",
  "key18": "cpgL1LxFuaDTy56ReQ5mNNFpfrDzjhWQeKvibYjB16CrBxnadzGi1P4jL1NvQfPB8R7UMoTJD3ba6qiGLADViYN",
  "key19": "52ac1SKBieDciyKosvraEyXmSfiSmHqr3pLNA5WjVXGR4dxZJSwDR7HQAssNH6e5kEZW3qkdbc8TGmsgX1gPRqQq",
  "key20": "SR9Avm8YunFbKvxe7Dgq7MW9tGqEtF9G4r2HeSro8Z6Chbi2xfH3EY8kJRgcPyeFvm3GWeW2tzr2mkG8HqMEafq",
  "key21": "3VSAGF9ttJfQ9fxHCPiwEXvtCUrd8MRW5KBbuhxEdwpfMaJ4zUNaStosGD6GgcxoYYwEoScpF4z2sm2jaWajVwyL",
  "key22": "3AUy15qv8VXLE4WnWENtH5MYasJwkFkkXZNo45WWhwbv2B7LC1jNQJNXaAqp82hRVXZJaS8sfR6RZnzARkYWTQkM",
  "key23": "3bfnnHLV1WP1WV9o3E6ZuByLYwMw4n3TKncxTsTGxX36UvpACQ9RvMtL6emwY7Wm7nPgRFG4qJH6j21NtTxjfAJ2",
  "key24": "67PekDsg73Vrwc4X35GNgsgcQ2E8prrjDZzRMtpcVu4Ms9oGdxDzqXjCUJoY19reFNiq3y1Z5EaHJzU2XMvNq5Qo",
  "key25": "2Ln6M8oRwgv4HPGwhAbLH2UxHxhp2fHrJ4k9WEkzpzgDgPJCVymevwNQY8zpDqog3GS7Gk2HT9ZAdTVpMMS3sb2f",
  "key26": "uwadpGgmL63vBZ2jteeYB3LHQ52odfgvJe8BTet8GhYDo1jQoWLJroBAfkvCFqez5eLCUYxuR7hUHrP2JaLQvxW",
  "key27": "mKBGpEBR5aq62jExcCj48HmYRUhkEXwhJoShoEchwYSNB2xwoKD4F4VZHYMRM2RBkncGg2b6YogmUasVtvkr9Y4",
  "key28": "42exWzH54TFbu6w1KmfSC8CV1yGxq3x1NqJYKQXj9ypqSye9bZ2dAuDEyPq6s31s7V6wrserrAgmCYg1v4UVeKm",
  "key29": "32D9qmdEJezdH7sCwzzNcQYhB8Fu27vpHgBLENWTz88ZwtN8mftHSavF6RwRJLrgCuGd6ZPF9FoPbsVpDHvXahR",
  "key30": "91vfgBUDSaYampvrbR2dSUQxsRxp3TaLYgWqUhuM57wxJbhvsYyxNYVroc3tsngPPHKZ4G5GUQpT38qvL93zq6E",
  "key31": "2enK3pnUA5tALGGqG1ihemz84gn7fp5dQZT25FgcgZLcFSMYToSzVeBnsZpJiFZEUWy7ArDK5CyTTxoFmXcwuqf9",
  "key32": "2458ZUYibuqyB3BUy9vayfPXDLQbh9Ro4W4SAzLXvSSeqV1H4KQSJ3J5pvj1g8S7CycD6GJYzXKPUPYAJ4Km4mBL",
  "key33": "4NkihdgpHd9jKVA3aSjicB8uuS2mkX5nYaT8iT73jbidfGb2ZhCmHT4rT9YKWUKPAediSuLVjqQEgpmS7CrbpGYD",
  "key34": "3Mvr9VcTh1kQnwXyAS6Cruo9rZ8UYHi6qoJkNUdj9Pno1hhZxP15Jw3GqwjUJYngCLRV9gNLKNU8YchztFVDSeYh",
  "key35": "3gyKFhM4bSWC4vM8DD1Sd3xxK8uqXAuz82ebQxyCeA7EBHtQ8DLkcr8xgxGZiTQcm4YSzaxiWBeZqbExTgi3DEvN",
  "key36": "3TconNypo38o9hs2Jm4TWduoukV9Gc9d8TXPTtSpgc1uLGG4NYfaXRuP59Mgeprb9UPeKN6ED43DMiHqtCp5Sy82",
  "key37": "2e2u4Si6ufE6WeGNQFzE2r3Fjz3CiaF6wEX9bTDUA8QY29C4N93RFLqMc3oJ1hQMeYBBznagTEKG1JfpEYLAyPMK",
  "key38": "4ParQJNhXKBv9dzuLXvLdH2izV5nuGP1nyWnUdhZFWurFdBV3kMZQ3gxyEBt2t4dyPNw9WHAJsSKeeFncVKW5Zhe",
  "key39": "2HyCsGEcg7uFY2k4BmiAYaX7ugWyPLLja3fRG1rAVWwzuKBgn8eQmHPN1vNTy8kCgRbUdq5MUMNMCiS8stud8nup",
  "key40": "31MtyFrU952RXU3SDfekqqyS3RfQv7MxEgMMDmW2xBc8CzgEsK8xhpa9xZ9ceasgHEPxqRwpq2aWDBv2YrUjwHpn",
  "key41": "4WtCDMJdtVThxJ5SWwhiNBVLKUBn1dpyFUUtAqhZQJ4GkzXtvy9bBwHqdwkjde36mg7jQ2wXFigSGYf2UBZU7X9w",
  "key42": "33z6b2gn3daLdJL7ejmvgTzm1eVTFy53ds1tV565QwUEwkvaa9cYSEBaof5bDXtYoo8f6RZCRe9t7eC4ArWUQkfs",
  "key43": "Z4W1zzhysWYqBULkH7H1eaNrH1FvRjy5P7m8nz8q9UaEnwfSLzreFuPjZjUE8tpyw4w1LD7t5cuPJBgY1m9fEop",
  "key44": "21r2aeE5iEFUNGsUDbUYPtPhu8bJBSzSu5A1w3jiFaJKBVwSFbZVB9HuUak41pM58BNqE7nqa42oeFP5nHQvS4k7",
  "key45": "2AW8RYLPxkZTQWFwbbi2qnaX2BcSFb6cVqMDbmAv1bRMd8aykGQ8XRNoWDWfywmcDsBsu16pdbWaVmjKCScQPXdt",
  "key46": "4XJNzphKzuYU4zXfAKTz9Z4bpCYjQqxirYDFkAJfetvpFin8z17cYj34DLomAbf9AVWF5g1GQq2EGZZ8xFYRKYcC"
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
