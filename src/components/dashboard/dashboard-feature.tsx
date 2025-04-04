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
    "K8nJqpZTGpbjkBtonZRbMLuvFRnKWGqq7F4AdrGMFQt7iWbbCkvUxyT45cB9HTKmR23MJ7a7vT7yvRvL3ypsQKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEarpDcc3XMAUfrpYH6SmwikASukyeWG5z3BWWHdYdeFYSETRN49td9MzMykiG3PKsa2jEse9yrZpV8vA1mmQt5",
  "key1": "DcqGV9rZKZsBYPnphFxpKaCUMbexd86hsnhojq3UjkTv6hSCQBrFDViGzH6ZQqCeEmnxKRiP8b8jKRwMGhNNAWA",
  "key2": "61qgYKRPfBv2tMz51EGwyRK3iziBbC9CN6CzzwpX5X9FTtEvMynDfABBx4uZBdYVTpdYpGZ5EbcQG2YX2pRsSsoh",
  "key3": "Zt8cPhqT7vPrtKgdt8wPdWhgpBggMgTChH5c67i6VJcho1qd3FwABhXP3Ee7eNqiKS829Tz6uw8SPb1T4STDXQT",
  "key4": "5jkodrUHssHwu9pUowzntoZKrfGH3eqTqi3q69TfTUrChSDSZfn3hjnSH9TyzHwmsHExkaW3exEdbHsrZRsdBkFs",
  "key5": "62QrpsovpVvUemmwjHSLgV645vpARJHi7hZFLP1SnNLrhUeGHEE6Da3zteJ2SFUvTsc8x5LzAWnAYdoXzrYmdHPw",
  "key6": "5Y9tSYxB2ermAr1TpB8Z5XSPsHuVon2a7bM58zXde75ginW2hJbfZRzK27CrCvBAyk7mxvQ31wLrqDSeLdnFSwov",
  "key7": "5htC49JzanPzMQJZEKUsKdCF49KwHiBKdXC6bKWWBx4QgbcqjtRDW6Hca2REVBe8F1L59C4Jz7XCBgGjqTVggPpe",
  "key8": "3hdGpdhpVuESmMgaZdrRQsKtoSBbsy4E3U8o8WUMzCqLUSGc6G7EoRcvDu4sWRWViyba27QPmJHZa2vBPetYPwDw",
  "key9": "4y5r9nh2Y6WN2qyL38p8Q6H1kadS2HJcxXAPSA5SSgKeh2ycC1UhFGE98MUDegq8YDHUdu5J5LxirKR8CLLcqatQ",
  "key10": "AuSDaEVqjRkNFpCZFQRpJbkCHdqYNc6HjRiYqMTQRxJuJPyVP2ZtvM6Xv2WzsTn1uN5NFrzNXvN8P7tJJnQBWW7",
  "key11": "3EffFUQXRqXiz2buJtBkKGs6VXSYBHvES9R78DUGEPDc2aVZvoVodGZLcywSpLcwPZAjXeBgj4NCQ1wKS3Eq5aAr",
  "key12": "254N1YWzMP5PU4iK8aZ5fBPZ1BufjUfZCvSxKHVHvBWkKFP8JahXzom5qDJfuX5E5eGk6vJxezyYoCAhY8FpZ7cv",
  "key13": "58QdfGwHrCD7fdrNB9fcxWSF2QKnjDMMQNDekEH7hUtkhz8GzYCZWhKUYixADa5vP587ZQmh6DHFWYLH3nRFDr4F",
  "key14": "48y7BBXnpDXrdAxuEC7ze3xQTcYSRQYXewBs16yMaKc55aekWqBYN781FsbbE2somyiWt2tXSQzfJ5Huy8DiiLJ2",
  "key15": "5DQ3jwr7TBXdDvUMCf3ovFGqPNgixJXaGuYagf8acm5Q54aMrRcBW3vpGTFLFX4yFNTp1nNJAvJSJZqsrnu2SVc3",
  "key16": "gE7HzwStx1Ju65sFsKgTMTJgZTRu1GURp5KvGV4hPqQe7Gyp1F4vrgNzuDv54hJBr4xXkDZKBEGtE9brzxsBsYb",
  "key17": "2LErk1Tn8cyHiHxUQM5vnHAFaXtWBVRCtXJbxbU8kiJR5pdDw259V85puUYctKsUyvq8iUWTrfRyrrFMB7Fjizd6",
  "key18": "49Ccb2yaUZwWbsDzdM3ziknyhugfUzEtpFLLT3XTi4YokUrXm3PXF1iS9aYisQgiZjX7Pc54AFHSn5K18WQb8Vuo",
  "key19": "3ouifUaxp9232Uwgusp27mdMKAS8rZZEUh5KFkqG3cYWyZ9hqGR4UH9xgE418XXX5QtWXN5orXpN66WbXkoEJNba",
  "key20": "2BN1TuuoRfxVPVVu4dmQq761BNfsZDFw8FktaB95Wud2C5xBAsd1Dgh3Qw6s5nxh8sk53mm5b7ogLD3nNRKQrxKZ",
  "key21": "a6mRB4o8bpmEUcZHRdYTQrTG3qJ5FDEPvLMzKauh4tZkcTS61mWnQjvm1QnvEXYGZF3vU3exepGorgX3wAAbst4",
  "key22": "4UUyKUyPLvEUPXv8CTsN8e88oFWdptb5zsyZUmNekvLe1pSMkT1x9bcie5zUNkketQsQDAQTSJCGpGFchehnvdsB",
  "key23": "QpTsgQ4g7rbSF8PNGLKuvUXjsLzNq5mBnMpUYuVRHoua94RzGu7F6DQmxD6213wYc37wVYjT1eicPHH8Tyh2QZY",
  "key24": "fsFvJBZ3UeKnFWzH34pGm7Hp9PumfsXuVLYBvgBYYdEiApUwNUaPKCTLQNsWrnTdVtV9QMZt1T9VbLq11rnuJZC",
  "key25": "4p7yEhsdpnw1a6VdrrXV7kWSCEY98NQ4WGmriSsqfMTKCKgYSVZQppX9kXMpotWTB8cEQKndfwkcZfU4gSN2Tppj",
  "key26": "2TEqx4aKxSf2gdCJB9ripo8bappHtCzMZXG27qv5jaKEnQfdp7bGrqfEpRSrw1pHiwUjeMv741fjDtX77zYyXdDA",
  "key27": "4pEGdp86UVHq5LbWvPTazUrDLBp2h2dicRDXA8NZEEennVDWkDMLaocSM3BS6i4zP8CgVdP9vAUg5FZaDAPaQvEU",
  "key28": "65usdWGWoSg93zrgcr8T9GAGjGBup2sx3bKWD7wrSapgywXU2LqWnaABBUXTKxDvDQUujspHLKMAjcFxCzg4R5Zw",
  "key29": "6479QGf5tRWBJSaTxge8MJfa3uGPM1Kw8LLzoL3nvYBZidAkogKrV83BFcE5bHALDg6zjY2ATionUsz9EybqN1hT",
  "key30": "Xnxkzdp9PSsQ7qNWF38vujPtZUQSgYHpuSGigGx1z633DAyRFHje3wciCEjaWA3sMLP9QuzkJvkhgCTggDRVNYV",
  "key31": "3o5ZL1X3THsngen2fv37ZKbzg5RwnWD5A1pUdgSxkN6a6o5we715DuxMZ3cvQ3JFDjNA5S8xaRi8H2XZQMPEKiCU",
  "key32": "2yArfUkJtQKhXYY6uGje9pyxEmRY5WbHYZC4FcBpccP7TKYLybCWXAP46ByGqQvfR5k8FYafswhyyFGsHEktMcwC",
  "key33": "4B41Gn2PfkoUsJrBUtA1owNzW7doJ5JafkpZ6ZCut9NUn9gpBaJTAwmfnUvnxLnePBcUpRNX5MsT4XbzXsXjGuyu",
  "key34": "2oYQZygXU4vwsQjZWtVBD1BBrkDKDGrndw4UvQdFxs45QVnm1SQzKpuQLb5jpxmpoLufRKgazw7bfP5RLY4ddD8W",
  "key35": "5DfCjjiFu6K3dtVGJ8QdjaPQYejgxBCGBP72QBkTkavonce7LjEycLjn6kcbhVw5JQBcoWZQj7WjsCHeupTuci8p",
  "key36": "QZnsqEc5v4SC2egGqBvGCXCFe15xLm5FkxDUmmAiCK22t8aLHmUAksfxTkRm6bZYbii7ZFq1tcCEnJtDN2mgst3",
  "key37": "3a6nwxp6bogY9tfWNwYhuAoNWaDVdENLvv1YRqhKSPYLb1sqrmmLPSdR6KPoKiHTPkcTVUDzJkmunLUAM2vBM4Va",
  "key38": "39DovauguUUwnEcHH8hy9upevdQjBXoANNEvLE847Vq9dmRJUVA8j2ZDtuF91MYyF6A4etUfhHHbdJLwiCYvpYXr"
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
