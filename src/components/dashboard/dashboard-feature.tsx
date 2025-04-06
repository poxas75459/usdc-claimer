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
    "5TUmW2aRg8hz2C5ukVtXQ9uFucRGRc3wLBDndyGVARRJa6Mo4tHVgxrJmEYrRs4zqJramVixhjkj41fnxVDSDJm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MVpg1e78jmoKwHQUzmh4Y96Ja66HZpNmMLPFwjd6ZKaGXY9KqVz2bPNnYACuHkoAUnxjHws9vnrktWgPfteHf3K",
  "key1": "3g7C5biNmLmtJN2NvJoiDER9U5CruS4KmccMzWjQueFgoP3MXNZ6hEuwk3s7z41XFEZBhpBfSWNCtRnuaapYVwfA",
  "key2": "5PHcd2M2M1HWNx4ztsYLcxTak586Ddwx9xSJtyaF6kihApukYBPxh2eQYzC4t6EakSXCg2BbszJtzs8jxRWBRpTn",
  "key3": "qLhCMA8e5FAaX7Sc6pbuQuszctUrLNoDaGBYDBcokfTqyGGTowPc9mcYthzR15F2iAjsxeHTLa1wRhWUgupHxeY",
  "key4": "2Gd4AbdvYfgNAWr6fzZQrvRjaMuty2pxhYN76CBxtuYYsrcH8gWTGKvqMoVcdVPtnis7hrvfyxRopn6LL6AboKv1",
  "key5": "63nagHs2ooan8gGm6s5ezS5xmgxWX6BwymWzN2fuBP1kavgga9McDUnw5epfxY3k1a7V7xkceU1Z9sy7XWtkSe4c",
  "key6": "fC1owC89i64peGTSKnxA4bqNxp1bL6jqr8JM88Pt33BjS5tJKUBhuTRV2wHkJu7XATrHZrrdCyPL4pcfh7TDk4V",
  "key7": "R62DyY7R8d3tiq4Bqnri9Zr2BpDG5BDU5mPvgc2eade5KetvRQ2dY5QeQN7UygeZN1gvUFFBU3z5VNcvBP9c7Hg",
  "key8": "4kdwkne76g4edjWdc3VUhF2hK3FcbaA1Krn7U1yrBivfmfLNC8fLDspMa5cssR9ctHCrAUe8sdQfkLqmdxYN9hbt",
  "key9": "2UYpaoXVLtLwnM3LcKSMFhgHdjtLEW7yLAVFU92M46vDigWvWAYhQ8dSXYfaALpZmFnKdZvU85QKRuJtpJMmfvLH",
  "key10": "21oYszFyHVKdpqPEvo9a7euszmToDnygp4Ex5dkjyGSsZkoHKZj7rGoTxR2Mh5EfmPdtSShLVqNsnJYHUgrctyzu",
  "key11": "3sotqU4BedQX64ahNf7D5JxfgbPAXWwH5VbhFQwHuS3PHy4Tj3jdtLNV1svgiSnWjghckeEDMNo5nmJmq7QtzLRd",
  "key12": "5Qbuc8c7XQL8MQWg3Uu9aSmKL4Mv6BY8rhjw3oo5374J8DCTGd9wRkqwGcDEnvsTjEs6GA1q8xdMrNKtgdUTaTrd",
  "key13": "5vBsdetc823G55Qb8gGCmfWzX1eN8U4kP3kR1vDAw4NvTqKqKYQYJpXkQo2akricgiVnAoieK1UBjYh7XVHpSu5m",
  "key14": "27WjzgZq14JxEZpme2Eh4YKoEVKL1SiB188qjS4P2KX3Mm8uU8urZBZiYgym6QfoPf7AqiRrG93GhvFzWucjPEaG",
  "key15": "3uZoZTUTmxsmBj2WMMq2a7RRL2DmZDPVTBjiR9DSZgakhJ1m89H3shyKvYDM7TcLkUxid5Kg7SFt4dH69SnJMmro",
  "key16": "52Y29PMqRZasWLXJ7y7qXABVaF1FAYNyxcqciK5pFAw4ANBpm4sRzf11BrEcZtVFhbjHE5x6Uydm9KLMtWzMaQJV",
  "key17": "3deMtaVyuVpjERhV44cp5tvztxTjBZpPcyTo5uj3hcZVdFR7e2m5YTLNRn5w17F1b9GqR5siagV5agGhYKyfQQ2",
  "key18": "51DcpKaMJriEosQxz6rsqnFjkK1QdjQXiBSKbLSYVKDe3ovKJrVrYSu8D5JSsmKoVbz4TGFWw1WAezY4r1u4ApEW",
  "key19": "38Vfvy5PqR9nKsKg9GzSpg2EzDbqxziML3UuyWyQRcjchF7BbGfboQJjH5aPBDiNciRmV1UUdibc4yRs7611Z7Jz",
  "key20": "4qwx1oxTs3dLSfmtcJ3eUN57fpL9RRLpeSmVRrKS4VaehwMiHZcmDgqktLRDgrskBdWXfU3fYKXty5utGdgzR6g9",
  "key21": "bpwwLPDxiq6ejULTK7vLsLAumJ1HPSecND2Lfaqzr6bY678F5Hxjx9nrZhuzAe6arUVusMATagPzFnNbRzJiPM1",
  "key22": "4uySBJ5DwbCBksNA2Kgtjt9yZsgreg4vTX1qvXzFQ444JsUQvBEjgkx2Nt8VqBFp5nPcgX2FZH3DaH91a1puxx5f",
  "key23": "428SWL64WNAnEPkBwAbXDuXeE4QkhovYGwLMhojQL9Ah3uij9mEd6CLNubnyqeFpe8BcUj9Kx82sgGHEU68oTMqP",
  "key24": "4QXaJXrFbkE5WadYUGc79ohnj2ryLHr8m9g6UwQezoYUgLiBbu27A3xVwv3LLYj9rV8PhCJQoZTHZPweEdrRVMS8",
  "key25": "5txvZbiPs9Cf9RiXyxjRAe9XL5uWQ45jgAhQvJgii4jwbNf7pj7YMDUopqnfyK7mYU2pFeK9ZNsYhwYofHA7k5jz",
  "key26": "opyYnGBAfQqA922dQR2mG1dWuKGGzKz5e3eEo6feyuwaoRSb7zrAJ6A8Yk23yfJvqnYjqBeDgUdncPFNfQ1q34R",
  "key27": "2XL9Fe2BcZ4EZ4krEgH8AUHsQkgSqoVuV1PxKj7B5Ci9V8FQhEF5yTKkpj5mS2ZBifE7XyVu6CztFPs1EcWvgNsK",
  "key28": "qDLMB5Cw6F1pb9WbAbgQmDpwnMWZyGt8BxKz7eFutGCpBLhFLyk3Gb3WMtRDrMgo3gLFsihjgw4eqt7GQ46bPJJ",
  "key29": "QY3qeFDpTsDWGNueyvs9UJSiAcm6mncJCD5yRoeBAb94KxM4HL3JXPm7To3h2G7tg8URXCDes8pzNbqrfJYNw3y",
  "key30": "2fmXg99CceU5EijejE2bUToy1XWS4nmB1xNe218qmPJJy482Sx6wjjTD39jHMFfo1TDwswt1YwL7ecPofErVXDcK",
  "key31": "2eRaKZBFJeQeobfktFkMtUopLLkMQagDHShZs4Le26c1JpoYEoUWpde1i1Lp72LL9kbqrmiHbtyQjqaSxztUTy7j",
  "key32": "4BZ71rBB4SnJRLpTVUmwvsjA83JNLUU4fuyQTtHMJDotPyxLtbSSGpfbca6eFBRuRZdyMDztnJRjJSATpQtWgLMj",
  "key33": "4sz7aJAUFsGMXFrQRqz1XyGkJ8W653yLN9eMSHSty2aZ3K8QQHShTdpTpujS791YZwrJfBxs3LoXXL1zzELbEgCq",
  "key34": "4ovuQBsDWYoUNAAGVJsPUsJdihw29cPF8k9dm3fYLwQc7Jxnm5PVnuxorRKVmYWgYHy851KZCENSjJNjuGALydyp",
  "key35": "xF2HwKF3ZmShhop3FBpZYU7Lp1DNQ3PXcXvTkPRBkp6ZPf3mBUeJwkc6HbmB48GpX2Ee5kvZtgw7qpmryB3CtnH",
  "key36": "4YNzASC69sDGY3AYeS2RdTvmUKY4GHUdmaTPxnL8qAHwFnnoGVmVJRmCuFdPso8fRhr5mmACrmKkv7GmJ8YCJXHN",
  "key37": "jU3KcxHe37XCjzAji5a6meAAoBDYc6c9Bw23En5gZ9xNtqVB5skEwNgKtVWb6uKz5WRs5KtxkVWzjKLkEmrcagY",
  "key38": "5iMHKGxj5KxWkLhgAMwxjWAfwPdB2erd3wFKko5R3PA8rL5PqXmHiRjk4iVuppf6r6DiARxYyiaJS5wpH3n9vZud",
  "key39": "ypVDTzExeSon5oVHXXk1QC5yMvcRBZZp6dF22w76kxG5je7vFN592mwHU7316ErFW1PRNYyjPuzaLdTW3xUDauD",
  "key40": "5Y2deBPdRjriNpfYxEdfY9FpP785Fk4ym9HRGSovkMAeRtFyLRMNB4qyUm6gR3VHENLuYbCSJUa9VqARm2D21QfA",
  "key41": "2kFyPf9TyouDtLsBKfLA2QaC8Z9VH2UofKcjmjy5xihqeiQn7njSu4kzTnPM79wbqffWFF1PzGu4dWBu1SFnpEez"
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
