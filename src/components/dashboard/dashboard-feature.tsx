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
    "5LmcxbArA9tbVnusVupGFeAPYMiGSXmZ3JXyc78nDwjRJma8ntvqSHis7JM4Y8yGztiP2F4UHNoVAMiRXr5SM4Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ufTe7jEK4v9j2jZiLG3RctLkMJpA1NeJciXcc4KndUMAf6i8YTBZwqH4R4519QHDjdRXogKrFxhfw9TwiBUu6vq",
  "key1": "5yYSXhz8NP7jjQR7qMnHzpq8foYaBxTvGe3BA7cLHiJVXi9R7PCzDYHLLiUZRaNJty6TybW7W6JYEgugFm17cTPw",
  "key2": "3JDqz8gyiNN214ms17o1wic7LVpcCPDvAiDqF62iaJrsCszPp4XBvtPNBxihuBoaoR4D4zmGdFQrThFdN3RrmrVt",
  "key3": "Ts5UGnupxHizSQtmcr7M3QizKJKQcgst8DPe2CDoxjefiYNdFwE1jxVsMZfXkG8S3kqo6ipmF3SoVcV4ar6RuKA",
  "key4": "4ibaBGyeLRE3QoqL9pgKzH38YYiSq3U7sCPWm9XCeLdP3pPU9cTZ14bj8NMkq6BJUnWzpQ358wECM57wNKoHp4x",
  "key5": "49WJEM8VvSQY2AEG7cKNRNphLx1bD5pAnvf1xGtjBaRUPNTy2wPy8meZ3BS2K1Ekjwyw56TrXfQ3onCwdKdPjXbu",
  "key6": "2nz6Xvey67QKFKHsYg6Te8rffjYmneHg9zX3XmTvF7Piv8U5hK6mubucTuWHUR2ozUMn5zLJf8yLyMSpGTjotYi2",
  "key7": "2mH3GLny5RNcdy7qHgCqiPpPtaum46tRZEecLHFLmVYouNRqurWFERmRQJYHA4zxFHcShqVJzbAk48pH4RPG6gpn",
  "key8": "LTG4NHp69d46nQzqZLsH9AwyQDAQFnPb2LkfsAXJFwTpaA4HfxkpEq5nuQ93WXkaGEApU6W8BMGm1fu4Z13pRxd",
  "key9": "4GJjs7ZNUSrxVg52BBkJNa4MFNZzTGamjsyNZ5wzRiwt6vFfJs2VZjNfJ1MLt6KnxQ9P9zVX8dyBJwdP7v77acHC",
  "key10": "5axeUmnqAcwTLWKwgDrRmbQENKfSu4fvMirkVQB3dDNDhxzZGQT6WrVyfFwaU5HSgWsHRLhmNwHkjWtgQZSpdLaT",
  "key11": "2w9vzw1kJsPg9sxZQx7uyRVCWetZvXe7oDxJHpDCD2f7ahfAVX1GcUpr7aobSgEdBR1sXZdzwK7KhiGQ3DiwgdVL",
  "key12": "2RmCjWgxXBqLj8ctxkFmqp2b6jGSfa4pa6zv82dHvA887JFZgypcJp6mP8WKwCtaR1K2t5fKprK7hf1wDX87SUy4",
  "key13": "2KbfeGEz6CAuFhTHAqBJq9SEafoPph6v3oXxjL8uYfnViMKajo9jPq8jbfAfNz7T67nhEJVfcxGzYLfymvrx3T8r",
  "key14": "5usgNGhNh4uyEvNeqRxciBc12H8SoCfGVVBNiPpkiPRUhuxj9qvM3TFQTCMs31YWs4pofgpDXpd6WdgHALZTEMPQ",
  "key15": "yPdiZkAe6fjePCvQShQDYeiNq969gwJDimPbG7o1DkwgPTrYNqXZLSkK2Xom45vzAqgToaCgkY7dvmMj5oqzi71",
  "key16": "4ov2McAjfY6jWvLu6Pk2yoqawRtvQD2zgCbK3DT7KrdrVtZtQ9A5tcUeVW1BcmNKESeLU9dscVs1Nf4htP5x367U",
  "key17": "uarzhhGygt97xVX5v72A6LPxsvGhM8VcLwHLBEyHuqoSz1dNJnqrmkpg1A8NhusicxJBEMBtLFhisFFhi7kwGZL",
  "key18": "62PbGZXpdJ3wVmTmNJ5t98iFh5FTkbkMd5PuWpbr7x9kQy7vBfMhHmU2WWcixj8Ah39U2LsukvHZwEsMvobS2EcA",
  "key19": "2kequPe5B3ttYmguxgjMPGUePuAeFwFpTT4yKY1HC9FLYGun3ZpeAtNfqyZzCLWQucRpFbFd9Dk3UYuev4W3DRD5",
  "key20": "5LJvMo85z1FgQ845p7qxf5GueoWZSXD4FNpoSHfGUCFa5CKRJzFJYoJp4gH6VYXiPdtcxo35mg1eRsxyucdp1FaH",
  "key21": "pngcHNkRGkqErZV7i1PnnrJNxrqHV2dZD7rri8YENsks5urXedyUXbgsSnEhqLJyFfEWmsQr4XaZ7BoWA6kdAYN",
  "key22": "5RcDf8U8oqQDUbS25Xq4Es9HgBBqGYcvjomBb7SQp4HgU52rCL7LKnjGq9tES5EqxnyepX4Rx42cUWnoLtw8voqD",
  "key23": "3kTTKHLWTyAixkwrrLnRHSttoWRct43G8fWf1bTswBFB15U1Zm1Pvu329ZVpBzoyP8AUs5dEGTnyK663wpu4iAsj",
  "key24": "5GQ4hMg4Sm7yUBnhkW9jKjshmwxQKzEGRVth2ktViJ8XFjKPArmwCoyWimYqUPe5xPRRbg7vxDu5dbeR4thmTftw",
  "key25": "pdXjwNEnUjyVEX8fnUVHC1VMx5xxMXtv2fVoXsNjvjzCWCKyWNvWQD57SfhvVrMNESdFe566aeYpN2mo2Z4xJjM",
  "key26": "6534j62NYHsHcVMpfNAY2T6PinBp3CoBhX2ri9SaeRJZVtpTronwAvMYdXbyBvuNwNw9wVXhgPNXqAYQhhfH26C3",
  "key27": "3sssevRNKDm9RciY4C8jis23SRVistZj9GAyifWXM4S6rK5GHNQF6MPSHKA2r7SaEwtVhdf7BT87samApCtBpsjS",
  "key28": "5viB2xiwCQYgGiAtzJgyMnB4KozhufZFSwB6UuyET9kCGePMxvcTkHGhKVUVC8tiWcgPWNXMAJziFrxxW3dpAK4L",
  "key29": "C6Sxjmj99jemhqxs314PSERn6giJ123U1boNyr3G1gayXmNicK5QQQ2JRyrXdvYeveWe7XRMaYEHV2ZT8dxEKKh",
  "key30": "4ydhHQG8QhiUgPQMC9YWDp9QWD1ax588zGAVccqdSGspLt5dKJjPEBrVZCH3XGdaJBVk8bb8QCdJkYcnMk5gb8WK",
  "key31": "kJeLDeUaamF6PmywdQPV5o8tDs6u6u4EqWCFCXE5kvpQzGxpX2zLRU4yvsHHe7Jdq674rhLiz8LQaaWe2B1NUq1",
  "key32": "4T51NxYDMduR7g64KJJdbbDsQn9pnzBn57sMWzv3YHTg4BXRM8H2CHCXhP2NompxfSGRuFYVG8PAx5r2xAxd1W1B"
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
