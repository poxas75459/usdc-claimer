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
    "5pWcafG5sM5fbb7DXDMNgzBC2YR1G7HkARpn4uhEdtpWFg3ycq8xaREiyKgPvjxj3WHDhf23uBWBPhB2ZAjvN6sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gmmvk68J6eDDSTMR8VGztFvVKUcu8e4vgM1eyTamRLYAE427zMhVBGKtW17sUvyKDy3khG1EWgyD18HZpm3juDj",
  "key1": "5ejLfH86KhsyDY3T9CLSbMiVAERHpZ2JvzyKp55utdEXHLjxhdqZKkNoMJr4b12qj2bbGAmKd5wtBgpZjHFkAQpT",
  "key2": "f5qziopj6zKmDkheLBL33tvqzEgZU9edX2fXvSnH2NTPBFQAckiS96HLMmbEncTSoRQ7mbZaXtS7xEMBg1bc14j",
  "key3": "4tbXivKkAL9fQ5WkGf8nMRT6L3sM7xqj6aLWVpP5yfe1REkdP8P974QaqNfwmd23MBDQ4LHiw3jNgFkeSAmagjE2",
  "key4": "5hq9cEU5agAAm5WTMm2dY5LU3G8QC3znticikhFMMXfTE6g7yyjzZ6HNJE1ZbKqnbyrXQfGzVdgjAVe4HThSCmYq",
  "key5": "5N1rDeam5j311qZmhkqH9WzDV95eTtE34tVRJ68oARzudoP7kg7sTBSasoHsziDaddxrtFJq7b44SVC3Bxc99a3p",
  "key6": "5a87PVxp6TdgaDwY2pz2ZKYRBfyEBfKCLcAWKQSQSZiMyhYJs2vcSHErZgKsjF3Vu2FsfTWxQr2kjicSMB8ebh4G",
  "key7": "2bvkLx4iyyQZJE1gX5ceXPg2Uy4zn4KKjSjVibHKRUa8JykXgYhUSe18b1t5xiFGqaJPgLhqVQ7j6cgcL9q5cDuk",
  "key8": "4jfVdBJPUtEEUAAMV3kgimeX1jWp2BexQDa2TyyPfnknTFMmFBreYu31wqFH8mM5bk9PeVLaNmq6S1kMs9HyyTeH",
  "key9": "AgdC9v576zeKjzpiCubc8YxxAYtkrZGKXqSsTgTgNzkfEaRmyTfMHy6sJiEKPNfuqJmZA9Ruso9Ramu5wrwu6Xr",
  "key10": "44mHjZYBPYGXxenS13HzUjGRQqhWVS31QsxnzEtZvqiuf9yLXzz76iM5YrwgUtvPzQ4puWBm58Uroh7rb6qGP6dG",
  "key11": "3Nt1f9nG7jvF3Yp9PLGpXd5k5CtCJQkojoayfbTyaqEpMFLESWxQ5mEtruKupz1ZoXqG1zqC5XjcbjvQSyMHzciM",
  "key12": "33J9n6oEVhfcwDzWWi39fz8gvB5WuTsdd2WA7L8C2KND3yFjPHiDqnpHLm5mKc4YMA8QQgiYp7GKgyGDsXUbdLz2",
  "key13": "5B4sHB6BQFW8iGB9VvEYPeuWiw799LNZx75k3DdPS1kcnbX2MEppegrZrhkBNHazpDtV6qacALWv3NsAqkPumpeF",
  "key14": "QCjRpQa3uEcm27ScEoLqt5Mi92Hg73ZwGQ5wqdrGJtL1zSya5votiicVR7wYsBUxT5j1BTpHjGGWVnyAwDC31dB",
  "key15": "33Zq2WS8p3M2XxZpug9FSsVH6hBzGSR4Gn5shrti7am6hZiRxtSf8rPVP1mhDBzeGoQDPa6rmqWggt1VsKrbDt44",
  "key16": "Qkj6bsXu29jpr8LKWSyvC2XffNqQPP5aaPegXHwVBzQLUHBQWeoek43cc84VzqHEFqDtxXD3CwxN9pafq5ChF5k",
  "key17": "3VGigBNoarusmxDsPh2XjkAKe3YJa8JC3hhjCWTz9cpd1Hnu6Ai5zZoRVwDvRoiTWBm9NQixW3U4CHDv2BtbfQZd",
  "key18": "ZjHoXGVkRktpRrAbPKdw3yWSgui1B8p1nmbbVH4d5WvLfyMEocKmtHHnCZa5crj7qqGpFVWy4u4KLYFJ8fP2s2K",
  "key19": "53V6Wf6MwmhRz11i7HXEWztRvd64FtyZEeDGksq5goeAeR4oL27ddTfFPCJ7yaT85yHFKL2anLEkn3W9mKYd8vma",
  "key20": "2mugyzmDgsLGdKH2TDywTQbdQPzUaTTpxV2tRjgy82hiaamm5VTR1kG5NmXfpu3bcGFkcaDGhAj7mVR9wEtFNUR8",
  "key21": "5PGTsaQ1CvVFccPuQNYCTR8UJ8EEcLvMi5eWZo3b6v417WgfARAUdgfnnGnSWSRJx8uD99Aiu7KjTCaDw9p8UKJj",
  "key22": "5sHbHni2nYcS7oR6vpCG3RRuHcZgDP66Zuw637kxgekVMMr5ssUDJRioE9nxpRYVKLyrn2s5Fj8uS2B4dEsmzYfJ",
  "key23": "3p11wR1VenLVcZw9p7yNPrJv6o9QfBLcwwuFtXq7Wy8soZwPWihHHoJoD86qXZVFtXbLFvigbuUPXnY5FDyNkwfR",
  "key24": "125QAPbTLC73PkZZEhgciB8emrGNQqJCsq8rFLvmGrYE8R3VU2nCZhCfLZbkECPD4upq7Ma58qtmKdoF3KLTR5cv",
  "key25": "TjY9r4yBukcFGsZwi3YjBb8zEx5g6xs4pTniB7ky6jWiiL1aEGjnpfSvCog7BCC2WE22XtYMiFkCrLwsY1UdfFQ",
  "key26": "4oHznWpJWEZrvmf1jSbYsASA4cUzRMeDA1tjddQZmKQsimq259uzwdsTjngzLqsTrpx9uwUF2zFYRsksfWyN6oZo",
  "key27": "2NTpAC62EPCBW1bzrrXqvVzTiGfZRTW9w2KvoXwrH4VGuVbnEqhvTDFUUbbfU5FYr6LyzZHULuZG5eBRBp8NqyqD",
  "key28": "3Qdoi2No8cwWoZkwhzF68G9WzsyULeyn23HnEcvKtgiNim9bJfmSGhB4VBCuXCTaHWCaninnKN8tNKyo3p4Rr2Ck",
  "key29": "4W3RPfoJUaCcGkaAFSwCNGKrBFSi2W9ZFTrHx2mmDXJb4nmL7voHkX3iugRgRL8UwtevZQREbR35JibGQSzSH31r",
  "key30": "TkbbxXTypK2NHwyyo2mCpaHzF2TUiQptXxHAw7UXWxK9CznDJF5ZPrrfiP3fiG6i5dDKTh1GF9AC4tjh93xr6Kg",
  "key31": "2wnAfmKySh1cUxaG6dDnxATnDYEGSiLuJFT1pWpCN47Qy3bGhu6qEwYyf3cfQHhPWWuBAGmqBX2A7o2kUbwbzsij",
  "key32": "4QtBZfp9XzMQYX2gq1thhuXey3ULy7FY3HeWnhfWwie4C32bBdUtvz2Rt78RqBuH61s1K6zNjY2BeGAusJCJ8zSx",
  "key33": "XvgGEJQPdgAxxrvUWZkG55VRbuwxQ7p7bLUvWjtSw6veuJZ28fmzzYo9PfQd7aMmwfumxKAbovnXfbC7jcJgZfP",
  "key34": "34AA3j3P8BoiJPmgDs3ovw6PwJGk89U9WobzuDjunFPt49DjvuwSPju3t6SHvMZn6SzajcxMrwHG2hJyq16CeVPs",
  "key35": "333wRHH1cJFzPmXiSpTJs3kLszrc8UUASfGfrdanND2KtCTgGkX4FmdsMK3SQdLwCFAVauWqPNGCUfb1Nbiz1Vjk",
  "key36": "5c8nqwXLZs27r7vKYa3vADT3XwTh9dgwq8y1TXdPB6tcawq9YfikXXDz8akQQBrudy1TH1M9a5MCYRAGbPNnXJCY",
  "key37": "552eedYkoGWwBENRQApj53GWPZ7gGRe7UriPcwHdkcCTpoyaAkw7hENGUo8oSMHARzZmrqPPQaA9ryt4mtvWjLQq",
  "key38": "4WfazM6kASvGEzKFosGuj2iUfZNnfpduN1ARrJPJbRsBR291mgTnmavN7hogTcqXLcGMoGNHWVb3Dq5FgAzmQ3CJ",
  "key39": "GJGikcvCuWHAc8AhMhNSzZymCapQrpXQ9zx3hJxdM5yg1pSXkNehCQ7Lnr8C927hrPRXaaAGH4qYA7Rf6yQbtqp",
  "key40": "4Cohqzam3Z1KoSxPRPNzd3BiyQgMrCxeBcbA3nPU9Y7cvBW76PENntES7iZE3g3WA51cQbVaa4KiFMLgXQyi1ME8",
  "key41": "4SZ1qCtW1mpQB7AMJBFzkV81LwS7EfX3QVKQimQs8ZcEm4VdkeJkY5yYmv2av2hc9ZS6bCEChPEGL4giWpyYJwUW",
  "key42": "29yTZr53KtacX3WfojpE9MDzYXBbpadwdRAm8v74UbYBPYhpoijeJBUVAzFEcC3VAguYDUeRQduBNDvbXbstbQS6",
  "key43": "9A1Cqcjy8wb4ra8yEQ7AtZx9jXLSh2qfTvZxGohne8s2w6W16fYHvGmSK3jRgaVM2qo8rP8zoEeR1opJGo6X9Rc",
  "key44": "53JeaBeuxCJLVbNMJY8NfhPpXf6Vixtft2vrr8ms9FFmb8KDCyayKGxRJaZykuJkWgR3hbJXcbVSdjjDtBBCKapA",
  "key45": "3Eo7iHaQgsAyAkjjp6RRfvGu1eBHzHNFyFjCqxepghNKqymCNMYbHxCYribze5t4R7nV2vKpPwrMAJnBcKa1CQ2w",
  "key46": "5Px2VRLXrnhjJbZdEVXhZ6rq7eZpBnpRRyFtjqD1LgTCfFdLfjr9vh6rAiBeF9s6jpBBwwsLeTqnbyHUfBxcmj6e",
  "key47": "3uVqtQB4hR8muwCrLiWuL1A3bRMnzizGRQshJR4vgm5bCt9tTu6Hz3W5p7FPYCojFUCj7i6zTSdGfBThHt4gukT2",
  "key48": "3M4TUjT44TaJpdoCqduKJsdCyZifsDDnjXPpZrVdJKiGUafFZpvBUxBzX2bXP8o8ZCueJ5ARhAjbNiEiWGrPwZBA"
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
