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
    "5zLG5e9YUpLrBverkFe8sy1LrJkpckWR7V2gANDGgSQzCTXuWtXWRxk4A4LPEYigHE6Rkbaq93LUA3YN2d2FrJwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "418VZhY7BhqK3dYqiFbKRxWdXDPDPxGaPMJ6xcssdgDZPtiZcYFEYtLTLsBcfvvRfx1PyZV2DNgPmNzkKs7GMaSo",
  "key1": "3yFYUJeVmZP6AtQaP6TKCiLSUrJRikCP2vn1UqRBcpFRVWUJdaX5tiJNps8ND5AVCtpvig65ZCg8gD5x3o9C8JkA",
  "key2": "2TL1v73gp5RY7grReUDcdKd2zammw9oseNYeV7BwwKAdTfuox7LMChqBBHr9tKEgn3qCSgzVFsr7puWRK4JvRQGQ",
  "key3": "3anf2gS2DYmj8tf8yWihnnPXrDvppdZgDrfdxs72MYorZZqZSxjc7PQFF1WawUhcTdgUFYfbovBPRj1yDiLuEgSM",
  "key4": "SpSV9jFP1ZuNiWQm4ceqEk3r971A7E8SzSEPJknJx44KNjavEEm4iQ7VZpEH7qBAzKituKXARfs3xTLCg7Cd9s6",
  "key5": "5XB2Fw4qgcP5PUoEniEu49G3guzXNxuUn19dXfeW6ecEKuNNLKZzfANZTkKcMA4cjDE5uxAegZvg7xDz6nWZp8ce",
  "key6": "46kyAW7evknBEqiXMe4EVcDbD5mAfmkQkGhp9oh4wP4VtDa7YgfjDR7RxMywpBPWRb1hcgDVjtGDsiSLmyfxKzeH",
  "key7": "5JDzfqpRT6Nq2Fjph4uVGdNQSawDAhN2FbqthornqTrnUba7hRwrUuEUBbHHLxsBYsxCLpQqLgAkRLyG5VhsBMcV",
  "key8": "2gGbqkiG159jvTCwkGAq5dc7QzQg9eZkBTxcGVverm6baVEBEogN2Kmgy8UqS1JGNnyiZLDG4HroPbbVdpEb3uT6",
  "key9": "2ErdmRXHatM62ASPoVXK6pbJ23tdHraZmUZbhg2SyV5BMk4MoZDeGidY6jAesyTtM4Z9BGhPskbXeFhTcq9zJ91y",
  "key10": "5YMxc23ABLyfkBJA9gnqU22oo9zheR13uKkpqJcPVuGWs5g2cwbV6AoLtSeg2H3sWmNDLx7nSzD2JuimXhXtoLrR",
  "key11": "212jv3QReF4FTxxy3j76Gsw6hMCgg1DTtshbVcZRYnYM5ysMtJCH86CHatqStAj4qnexPpD4sLskapx7fdJ5dZzz",
  "key12": "zCrxsFDXka9Z46iZ5cJg1WTm8415eue8dMo7NNfxSxRZZRaoANaQRmc6UWNV2Wv5MCzHQaxLzBXR5ZPRJVWvrWg",
  "key13": "2a9wvZCcjRizhrXfBqdN9hhGCr2x1GzHVPwwDmw7jMWz3tQeJ9A3DcpbkXr71KdvhXNkpsHtwXUWTDPdJqzECMod",
  "key14": "4WbTmBYyohUwzAbep7iDVaqDg3zWsz9fPbVDNqxFrbGnmixNvJPJcqiACUJ5f8ZWvXW5rzAGECxDEE2oe3qLPQQ7",
  "key15": "2VLBjCEvsbLDmrryo9oeuuRcQVii8ViqTJP8WPoRvYkFVGqN2MWCyzktYs4sgCcTqgwkExxXtjVUheagy9oPn5za",
  "key16": "5cBmp47m8v7YUKfvzqq5DtaYfzGN868VCNXhx5ugBhFT9XWDaKWTchuzYcLfToeQjixqGYMBP6ta6NdPiPvWDqnN",
  "key17": "3mwwPGG6Rh8xZ71Nv44siueDWK1iuBppTtFetKFAViy77nNEsqZyBKj3Th936bXz628dWfRGj1ghwv4erF77pdoL",
  "key18": "49ZCiSPsThQsRCzsjiHaTw1gAsJ3VjMxQGyG9MbrK5smFV9dYDhkc5XP4rP5JPyv5iy8oDiupRuoRLiFKq9jguZs",
  "key19": "pQPy3BsfD2uk2GQwNXm4CKBGXDk9H3M6oppZrxuDcGreeHhwTcAYuBKWGsJZvSCBSqyhspRQpEGNCfsuyck6KkP",
  "key20": "3thWrh7CJqix9X5gaPLqNg9rpRgeD95C3ZPZH6qAaPQCDasjeYPRXQWx91LMcsVpwbcezW8LDsj5v4Cyih67q3e3",
  "key21": "3vT3vgHPbHU22NqmErSU1JN73e2kxQtvyc19szafh3SxftZ6tu8h4w4gyQTgZ2caoWYGNLQTuVhxzdzBVSBg1n5z",
  "key22": "2wXg8zUMofVJJQacq1MrZEprEHNaX36pdxbdLoYsXLKoxFWGeoUHNzcpgbqrt8qCbrerinKsAyirW89bbPd9C1Vx",
  "key23": "2P2f6poU1MYQnAvELa37M99EYYH9ZPvCtzo9RVHk1PB4Khjnw3U6kENEBvAJjfgXNFvDxFMjigC9hBi1b4BKsBjt",
  "key24": "Uq1zvv5FHub4GbE9JttCd61Z3AvcnfV6KKeboeRjbbw6iDNyNAKh3tbsRYW3rennzzFB6FiLKn3xCoCnZrH3u31",
  "key25": "5H3NHNZL3uhNACThgk8ByB2bphwTWFRG9jN6CVd6nWvf94VDRDtQoZhHeSteZDTckr1E6gZ2RvnHczavyeECWfG1",
  "key26": "5TrtLvwtS23Ly5UnAnv9sHs6mHf2925fyK7hX9FWPzk7YxcGZSMRjwtz8v7Y2fWMegduk5onw5aksR9NzS4W4TMk",
  "key27": "5ZDp2kTwesMctWD4Ap5Tg8uJWcgzCt2AuScBYV4amT36fmjSFUzrBzbhmDZcoSZL7XDC99SRjVv5uS5LkY5Juxi4",
  "key28": "5277ZjDjsaE9iNCZBfH3sLmjSowFnCiSU9ZpmL8KxHUiPcVcnGVSh1duc1nxFJvi2HVkB3LE5eAPigarTs1Caxbz",
  "key29": "5sh52nLTc7KUxMXd5R7zYYYULjCjCjyGZg2jtMcJR7QoS4cW7oiLHiM3c7zKgq15UFrSrwVZ5GeRCPBm5FteHNuk",
  "key30": "vmApgk5QErJjXD1wDXXptEPr691dcG2Z8ufZ6Kr9hCQQRKd7wER5ZE2MEsgPX2DXKWyWeUoe4SFFxKoPCr1Cap3",
  "key31": "32NLBo14PGtuNooan2RWkuRZ5MWRtdYCjUJFE45kJvXP2BwVeG5utwKWynHwe6qtTEY5iFf3vmsKBfPK8m3aSzrb",
  "key32": "5KUkA2oUDYjo64jAnxNxqYViPh6e8t1Jh8GX1Sn8TUB4aaCaLXo1ekcSHQuq73j7WCTpSULwBEbtH9dKmntYP2kX",
  "key33": "2yLNryeonVxcyQsKfcm5AzUS2EuE5mLWjBCrZaYusJoiMANC7zTbYi3ugRe4JFGKCs6hqd6Xw3dS47wzo7gWRJcz",
  "key34": "4nmXJXceKKRKDR8331yRjSTHtMspMqzr5te3qGAdKjy8kb6eJU6Vcv9Dfbh9Hyb1ccHhGF8km7zcGiV6x7Ls8Zqj",
  "key35": "3YfKBpsLvaAACMMyr6Xb5RHWtGQnEFUCkzbPW85Cyvjuo9F8V27zN4xGFUHv6WbAekCnf1VssqELuWHCAdAx6xvV",
  "key36": "4rjAikK9yrrwisbzvWLQpYU9AmW52wxzANkzWuCA7XCQLxg2R9WUoRPcnNczjMrPM75GJ1qM6agHpLqNkzrhiTwQ",
  "key37": "1beefSrWzfDtsfmxFkNZpA9rLq93wDHMmDxRi17ZoDYUyBBk6hsCySWboytZeqdwgcxYrdiSUBk9iYvykKd3BNL",
  "key38": "Zc7bqQ4CJZMaxGF8Pz3uucgEd54sUPxKV6eDYKmpeDxFcJSp3wnKfC2QWbtEvQgG3fBsk2uWsxfko7bwkgjuhEL",
  "key39": "4r9ed5dzFtpqecnkngR6XdcDvy6ptLdvgUbMjvmFeNFp3G2gptzb7oXnnVSs4kuMDdam6UXpNuag2Na2gMerFj5S"
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
