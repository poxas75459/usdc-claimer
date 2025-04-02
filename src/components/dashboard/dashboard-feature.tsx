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
    "21URT5dnALuFhZhj9JC2jLcqwE7Rmn6WVoxm5Xb7Y5471sHSttHkBhNtGuCP29rm8P8zCAZhnBZxEKruXb6atAax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yACVsNn96R8xJEyZFHEBHWHgsRXwQtLjzLYB6rfxQ5sB8Jdz5bY1hfC3bPeQ6k86CcmRsCFcFY4zfMCpoZmQZwB",
  "key1": "2n5a7PwXPznZpJWDoJiCsdQ7DyhtzpsUvaDsZeY71RCPkCEJs7u2aXBaqSXUepBgTY9sk7zSAbp1ttCT7b3iJVqj",
  "key2": "5GvQRjbQkwBi4uRDpeHSoBAQnf7vB8i6zFpqF6iUcFRGSFeuoiHHfRdzvvniK4A7fwnFv3awzcVdZvcFpCGzwUys",
  "key3": "38kYwQtNoddEWENuBNsB6YWAwktofdqNaENaH5i4Nd2BkqHnqCQDtEvyLhAVwze6GKTo7B47Fk9wukngqT4n28QF",
  "key4": "2Mo5v7ZENJFVduNoN8gsRrAvP7xtjs9CWeqq6XzqA4DEXZJFqqvRDf1PN3nhN7kyTMDgdS4omZpxCbWmVPLb5pHf",
  "key5": "3vG4MWyVvsRJpLgNr2Yr1zpunJNTNannw2NwdLs7geq7feNw7uTvom6BCQ8WqTqsjb9NZ1UyY5BZackfKXEeEYGs",
  "key6": "2ehb4Tasdd2xDHzFpRGvBCMyW5S3pNQdHwRcAQ9N2euGLNDkGwKFua5f63Qgty1NoLoH8cYpQ8hfQygfV2cgZgFS",
  "key7": "2SxNVAxJSB2t7HmvvLnHjY618UeEAyCnsMF1mioWRJ8dT7gXjEfikWT4YdixGMKHoYecojRTZWS2m25TJemDCmA4",
  "key8": "2mxCZdTmmqAHZKKiJ2Q3rWQPmBcQj6woSteUjkCMV8Qr8unFKWNyNrcWt2ty8pLe7TyW7RcXCFHqgJmRNBamHQUf",
  "key9": "5tLXiaqvv6XD3s333A4A5tnXLAeqH1x2iiXJoTUhFYkJHmudk59mwWQwP4xpisK3AmLDgvGg7sSp2AUeqYgXys2m",
  "key10": "wHPpCvUTwRcr1vEvkPgY3sQSVmx2USBPzLkV5w64ZVxcEDY15J7ksXtbK1FcwBbefDwsmbv4ZGnoVbaz4BbHCqT",
  "key11": "3pHnrfUM9QnucnPPD7Tg8ngdJ4rWAqCGR1nmnErofTNWq7hZcn5d8uDGRGwUQgDJTtmGJjKkKyceVWPndbaG2PmP",
  "key12": "3gdPGyFQAczXfX1a1otGCuPHqSedMgL1QUCBP4CSLnjyGze1zUUtDQnHVDvkVnr1ZmeaU8c9zkYXCVLvmvs8ppMa",
  "key13": "2DHNhpPrk3nqp5GKAh5bhPio7cJc6a1487wVvpgBn9TryAwSFxCQbSdE15kEj329qB8FQdXG3ECQJqtGizRdNpJM",
  "key14": "44gi9iY5MbEynYGccQ18qnSNLjwxDi7ND2PKFjBcdLaaWNaB6KwGNGTDsu5owasWv5KTvECyQacg3nmzhuH8s1R2",
  "key15": "36EBSUYtL6zViGocr9MPYDXPc8mGA9pjfvg4QHd4nikpuRSyUN5FiZEAyYVuaZhkMgsdsZmLPrvo3EGEBECuhwbs",
  "key16": "2CanYLVQEy19oNnU1CguByPWK4oHhZbQKPxomWRqUCtxfyKuCxK62qRkLmYD1Rxrt9zj1pXeohEZikbHdwN62W6L",
  "key17": "51PtLSLJw2mTNqTGHf7Tg4btYbzVqmB5w1y8o6iMTyk7sjqWPfFte6hXbZLT8E7MjNxUhJuzx6vnn49zEZVF2U8W",
  "key18": "2PsEfH8uuXhKMMuEvYZzA6SSFRoFZ1Q9HF6tFWtL8P7ZrgM3kkthYfCFxHrddd1NdCHD8CnaVS4geivike65SWTT",
  "key19": "4mYaqeh4aEKjHktkYbkeEfizNxo9WfsDVDHGWEkCoLDW9bf6x56RutLeyHcWquz9QJ8MCAg26QAxCboYewNZkppu",
  "key20": "47yQEdPizfpp6gVcMDZDJVKVhBSTpphz4Ph5RoxvQAyT2SWanzbgEjyuGa6WT2jTV857QuNDXYLzFXLRjUf4iJJ",
  "key21": "szfing99Q61GPwSxmqw5VieHP7FSys5SjkeKKYKQdwZEPN5fxPmr9rWwhKB56pTrg52PgVK6oi1Jy64AQA8TuCY",
  "key22": "3RG3MT61YvyBckWcgdLp2sHD7njFTbPmUKq8eEGfoF9kXT9QrG8itxoAYkd3pNSKNUdN9eNv2VWmKQaTm9UZvk5C",
  "key23": "3tSsPGuyVM8AyVUtbktzKPMREjBQtaMzHt4dRYXVFWDkq49uewEN5Gx2r5KALyuZrAXP7K2cmkxNmbSMeLhdGNZu",
  "key24": "2xw3jY7FSPDXnc94rHiSwPAQGa2TMwhAHMGrdPkEQRPD8aV3sRDbgfJQRhCEovWg6hF13y4pi2k2T8F8WJiZFJZL",
  "key25": "51UXsLuoMicNaD7w7ft6cujdxHnLTXjHTBbM6s29ezTtS8h2q96erNCns8BcDaXtMd3nztV5YLqtKbzTTbi6bjFp",
  "key26": "2VyR3XP42syrewwVa8UXK46H9S21ZyNvgA9ChH9459agpavHSfptGTdRGfLVZt9q9NMefaWu8rFX1XXca8bYykSf",
  "key27": "64uLPtFfY1ZFLgxXGiA76sMPjYyfWnqnx39pEhWAe4JjR2XUvf2drR4xPry2Z32PsSZL3XREixaSgFC5KBywYgfw",
  "key28": "22dWmT1JivR6toageLMNVFsWG3vDtE6MUny9EdF5o6wNi72FEU5qCKbKV5BvdaGpv15qixXSHLwY3wZaJKGRzddU",
  "key29": "3rxf9EovMvkm3cxD93vFmgtk3SRRUoHMGnY6XepataSySR9q2hvMQ9S5iEgKnrdQkn6qYnmUuANXENVBdhQojQ8G",
  "key30": "ijQH6iVxKnuZH1XyHDFJeiopLkvdnMyqthNWagUZAc2AfQ6gkV4SXgCvQCvwKMJgvWUjo4kk5jHXZbEidWPNawL",
  "key31": "2KUWyXSLgtCWnRUQ7nom1krnymw4139jMG6CksAj8MMptXVSjyf9te9Ma1kXWduMxFz6xAup7ebkWTrYGQQvYm8E",
  "key32": "2wBpa1bXxndNebic7w7F1KaDZ3CqvGxGeDQJFJRfyf4xBdFJUvVsMjX2UGh7EAr3664bQdDCjuJ3cVLAKvzSnQ4p",
  "key33": "5Amt4tqBhbTTD3yqpQFzqh3fjoXfsJUghmzC1QbQm8hfNgnwcg9BV9sPPeUbfNSBXssdx3S6RDvEHAr6fvN2yAnJ",
  "key34": "4ZJzdoSTe7N32oxMggzh3nWfpSrhrUPnhXhr1pzUdqt4SWamZ6gncw3nYSCaPZZBcaeE24EEjUUMLTm4tpEw4cAC",
  "key35": "2myqDuUtSqxd46WSXMY1RdoXW6PeAZPvZ9PT1HWKmd3rAkQDFsTcKXEpt4mAdctfFJ12DXyimeZ8r87zTYBjEg85",
  "key36": "3U1uDUcRqAgWY86FuXijugCa7YRcUz9NLTb5asdm9p6Fj35suWnf96MqPKgqtFpDy95kLofGEuikDBHAzRtng7PN",
  "key37": "VpnT7GtCt2Jst6JQPPQ6wjCCn2nWJghDNZ9FETtCvChvh6bJod36RRz5xwpQVNqYGBa1Sg7xXuiHmsfSTSLFdYq",
  "key38": "315JJQKir4JAkeKTkPCMfyPVLFpwqUczvPAJEWPxSNiDF7VDFy4Ci6aXd8Sng4dN9YoiHshXxhJzwyzh2TekDkZy",
  "key39": "4xnL111qUnHLPxKH1oDKHyQihHqtBsGsJrmgrLHRw71mANpwuufDcnFSVVdPsAGCnGjQ6Ffn1kbsRULJybV6VZd7",
  "key40": "5u6KSLKyREFCGUNAXoey4K9eCWeXxK1UCutw5MvbQugdaMz4fmH8h6N2NTSxzKCUjLATtf9DpMbiZcYdLHy1hPCy",
  "key41": "5u1jf2pxMCwJy8ncQoBeSKjpN6QvJSedpdcLsKzjdtLKR9cuNdwhxKvEz1ms14NduDe1xeGziKyoKR8AQWBxxQ7Y",
  "key42": "5UdMD9gsZWQri7ksTyjtLBszTiWwJGHSj2B8f2G6GHqSkar7MJR8bcFG5peNma1AwTV4ei5H3xxtc92qXDqBwvvo",
  "key43": "nT55JQzYQAUmX4aDhNBXg7hWpGEhFrcTPa6pJBWJQLipJ91hdvnVFpaVHk7EgHfY166W1UsodYDRMoeBkP2jWWX",
  "key44": "2WrN8X1S3Huk8H8qDUHSAVhtGFkgxQZDTt18TNqqWj1R7C3sMfeKTYNC22b3PWdihXoy7Z5yrXMmjMzBhHdPP2iN",
  "key45": "3CjbgoAALV3C9dP2gkGzq3QTFvfKdmCoeXS1wiopxsUghE8nYR5SNUCozpB44bL2gXb1AAnPLPyQijfWcvirQfSg",
  "key46": "43GRDDMqW1qx2bnfDTXr2M9ePx7mDi892Kc8a6YEfNHUjQuvQ2wLxwA8fc4Cs5whuZowGaD8B62sprcYeQkXTsPb",
  "key47": "2h6DQcXHtW3h6zj648DDTWGrApjLgHLwT9z7NCePhH2sunxrMpxTJQaGrJNv37swYHbrtBQob5yUEE6JBfw44PhS"
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
