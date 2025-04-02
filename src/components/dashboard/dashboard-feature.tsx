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
    "346Nn4kENb8xF8k8rAp1YAu8RD4yt3Uoii7MbZHcThgDtC4yT1XkJXm6nHXvL3qgrhrdHg6wuvZuLL63GyHVeUBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AsRjMA4qohxy64tieNfB5rpEvqGuwS6aGaRF3Y8FFDHDMmyapaNikEhtTyKznVNyCStUR5FQAFW1J8bJmXG83AM",
  "key1": "2Eg2N8aJdf9tcGtA4aHTAhm6M9Bb7UNX9aL1ipesheduQ9m9gsTuJLVdRKweUecjjRbeu4MueJwu78wrqvZnisXP",
  "key2": "5psXyVPekjHcoQuajRsymWmRMCBq3ANz311MHuTXF3RB6BaKrjYDZcYuQuBeT1gYBda4G5EFmEr8hhVYYZUGuaZn",
  "key3": "4un1y7d8ANnWGfWd8QQmXAPofkCYGTP6YGYwytU9erTFKyrouj5crN7LCjdyzD2rufUbDBwQ8QaGytYuHGwmynJC",
  "key4": "5sSuu6hCpNSQLatY9JKZp16U7hXgZm8NDojbjcuEqoTKyXVATNcNpmPx9ESv7MpUTce5wst7z5wvD4r5fByF1W2M",
  "key5": "37t5BsXRLJ5sWUeWi7Qa1WcyQTQNiAi8pH5LWEZHbgM8XQc4XiewLgBA94tgxb8V7vL42jKqQbzqtgBcKyGHHdqb",
  "key6": "2RgRdbeSmgekEoB11esXmR4iWekpw28Wuvb2tCAYiL4rYxEZpXAuHvnXUU2euifM8aKH7Y6CvofPCSnV8YPLZDda",
  "key7": "HtJ1RJTv4RKNjLWfxaeyv6852PnQ31hUKZFE1ZaGnsdVCHTSW9Z9NTTmqx1VWTV5PHdUYGYiJVsW19vd1P7cCdC",
  "key8": "RQZzH1zWxAUcg5eVPiHYL5JB7hoKt9j84XpcQ5Y2VzWBQrH7HniUT4mVSKmTytkyiGtwLPPvPzyKTnpV2XjV2bK",
  "key9": "AtHZ5U2Rt6C3b4kbpqWqpHKsj4BRQF9NyHFUrEQaYLVB47kxATEUse8XzkgMNQhxAVtxZujT4zzCFo3KaWk6bJb",
  "key10": "48NQs86L9ZCZikNTgNf2evD1b4GdUqjc8pnzSQwf1r5hfxs2YwrcfrG1u5VBZ2ZkJiCg2GToT49AhqB2m5T34gxa",
  "key11": "3e5BU6JtLLh9tWuUpf1UUo3GbfzisnoZcLFoLCgvzoYR7y5oHgyCPzQkuXd2cGEqUpY3CJHuumWs1j7SFNcCGJwV",
  "key12": "3ydhGTfDFcnW9gtLa3iGcp5RPN5bkW2kL2a1bHXo5SydZQ3foZ9Dr39WAGTMMkaugBMMkes7S7Cj7V51FyV5sy33",
  "key13": "pHb1Jk6JFkztShixVVN89oXrRSdQxXwqbyy6kAxJBqsJKtTANoT8SM3b34Qh26qsz6xvfat1NH6nQzVizBrBSfx",
  "key14": "Yfvg8EAHfN9xVCjLwRAM6bZ8WPtuDp458N4fV6eQMi5ExjcjchHPsvpfzHAv6fPGkQnwf3HwKVXM6ewc9FLRwv7",
  "key15": "3LVCi7MvAyPdCEYfaSCCqzQfg4ggSSNw59we5BYoBNx11iuiJP8t9TYNBsQdmMoRSxYvAVsRcu57kRzGrSjRxSEv",
  "key16": "2UqZdYVWh1yP2TR7Zan4fbtzDtJozgzxXG8amditimqd8k7QTGGVi9PsTC61YnMAxTuJuvpLwBSxHPv5GE2DbUQQ",
  "key17": "2dYEY2qZ4Y5WfyCNzrQkMA7kcETyWgMBK8byDuUEa8Mu7hYwHzyBbXC4nvqpekz2Aca1er7YWkQgAfqf7aQNjPRC",
  "key18": "5S1m6ErdoDwhCQ5X6CQexANFBKLkYuxvHsDWh4pn6RimtQagL9bBJabfnbu74saMG2fdGDE99i5jSjVa8qFhJGeb",
  "key19": "3egh2kiemeHLh5QxCejX7RtHDg4hTyZfY3ApxwwH1kVyhxFNYZ9Dz8cWq81mnEqGagzYbxr8ZsQRdxGTyH3HCQZM",
  "key20": "3mjXjfcT45Az6MTdHWJwEDrnRjTCtxpxNBSGG7qWchKMxxkGwiVA5sTvRfap9TjPsWEuRXeZtV3TPS99a8KQVpBK",
  "key21": "4XBmf2p9tEDhrrnb4Zj3ffuH3FcjGAPgXeSj9bM7Zd8Pm3jDNzYQ5zWgi5euoW4sdzUesw99ur59cKZanZ44PpUR",
  "key22": "3Rowr9s6mXo2Df1sZhr5H1nQiauMwFyE7iD2yL2dtNG1dBfkrHC6kKCojP7Viy6EXekwaru1nakkgC9ufzKeHt3",
  "key23": "5cjZRypUesagcgp2daWZkebuxd26wjSbrLb1don69WeLKWWFcbHU8SDr9vVkAdBYrP8Kum6DjpLeEUkG1d1cL4gE",
  "key24": "5TnAk1pJyMw2VvDotXuH32i7GsFLXPPjS393iBzUdLoeyxGTz1WUmExb9kALznv3cgiLqm3HohyF5uCb941pmgic",
  "key25": "qzFa92X1rmx4MXBzadppnGM1S6LHbr5xg7WgqdkDVUGxPNhtcsP388FCogwMe8PqLx2mpyn1rWpHGyrv8uRB71r",
  "key26": "2t8KiwiB3AmkGha2usrgUq99uPpAeA35xh8PdqTLPrVsGeDiFCwc9HnXu8Mk6ozBd9ouTc7E8axEL3YHVErSrfsX",
  "key27": "39r4n5EmjEx84d4iz3RuM4EDaBLfyhBPeo9QsXNMX2Z3jdaoN6kHHLfxwXReikohekVhQCi9od5Nf4SXC1fTFLLX",
  "key28": "UaxoBwm8yWiF4GAWrHSVGr9rxi9rcgLD3CzJKseP9j22X8Ua2odTX2y8mJBVPnRPMBgd49ZKPtY1o8H6fKugq2v",
  "key29": "gSpmbxr6KTTSd64kzUUWyqsHn2R1TAJFZQy3t8YkLBaHFJ25DMS9AQfe5SNUnzeuzAZiikCri8A6WHd8eaC4Yeu",
  "key30": "3D6tBk1pjHTw8oezMwoYsvUBYEhkxPg71R2nu4oFGv222KXDh22Rj2UetjmLnWPKXPgLS6MHsEQsyqFSoqLpdjyU",
  "key31": "2WfhZzjTUaF4cq7PnGehsK6BXHTj5ao67rA8ze4mRhwKZL7mTi4g5n2SPMowwJBPjoWaFjcHaS5ZbgbdPVJ8jpRy",
  "key32": "5rNNX34tjtGSRyujgnE28w48HbnrVFQZkB1t8cREK94PsUgdTf5QUzPtLuu8m3Bd7Dmi3WevqhWKMDSwtBQa1Q8c",
  "key33": "zLXNKLsd4m3rLmfwDYwffekqvL8dfzkqnkLZZHjidT9J6Kw6H8QQnDfiEMgHU8PhSXFchuFehbcKL28FXajSQCd",
  "key34": "rdZvpiKko3JR5F8tzFKeDLmgLo4pxmEahL2xbTzUeb72bsoT29UBg7SxDApW77ff7GZfnjkxsQVRVTP3DP9hV2E",
  "key35": "2wxgJJQ8X3UMp8qEVrJuRQDRLbpkKPNoM6KcEqtezunGsnjm8ZEbAP2r5SQMYD1a5WnpDvAMDTQGfLXaZ5muFK21",
  "key36": "cc9othJb3a3U8joQvEWaNMV1NS7X3cPaHBWGyvS6HwxwtpdbMsbTadqa5qRkJRGZnEkV79qepn52W4DRnkvecgU",
  "key37": "5X5UnDKA2b5atRonTKcb8W5HDu3gFCKUNxfyJmaLAkMhFXVCfDZRwH2XAJXSvMjCbR6hgqdabePfFX8iWPKSSp5W"
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
