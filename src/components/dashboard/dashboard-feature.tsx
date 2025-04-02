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
    "4YypJMDBc7JPrNRSC71hQMYHqKFt9W8Szz97QsFHhNxo5bEsC1bKJCcZFi389rbgD9psML3GN49jVyf4YDevNjpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hzSYThcNezzarZoMUYWQjWt3K2sGgdLxqPGYqFoy7SPepHkaPighrf96GExfLx1ToAeW2qLG4DcE2QCdxfdC7Kt",
  "key1": "3VbBb5WW6Yuw6pCB9FiZFpVJE887bBLtNFL3QQnzCAZuqsdpG5MZpBEbReFDXQfZdUb1x4gR2YkFmh7H1LSdABch",
  "key2": "LYDVd628V6JVVJbBUSPByujr2HcG8pHnScfZGqaLR9fzTj6o624cTZpaT8BgPdivCDTuzsPgr6PBafhVhrP2c7i",
  "key3": "3k2H32kq5rUJnCEpCMNi5fU5evUpXmkJoeYhJk25qwAnhuhxyMTe2bS1phSp3eq6JScwjcE8VRrqtSRRis4GgRrA",
  "key4": "ch8YM1CaJ5TQxRuH3e6ZXRYPry3co7GXm32YfCfe6rcjqYofm82UvVPTySJZpKYEtGZWUqCTdSCk8745TnBDSL8",
  "key5": "3Axj3M7oW3EHSz74XRYitKBFwkZZ4GM2wyFUEepZyRgoHE3LqLZgJASmjzu2yKRRq5mxFu3VqQ8x9NDB1XvBL4xU",
  "key6": "5QmrePCg9aGvYeaCa8sGcjZ4S1RHZcL93ZvNfxMAMht7vUS4KSjTb2Mr9rbQdHXB5eygNVH3EMxX73RkoMwMpFCz",
  "key7": "5NkLoB2tMHDVKso8NGuhtaEk7rkCdQa9HNY7QBLgABuJTs9HY2AjtQwBoHZmZNP6SBRZsU6bAZWG1kLoXPyUxXB1",
  "key8": "5zgm3f55FYvDhYDU5Eztpvb3mmgMwAZAFHzGbs2D6Ru9i3GvH5Byh4ZuLwRbWHk3GQb5AQgPPwXMMXUVVbvCAenU",
  "key9": "CV1QJHjoLyj7QfPrCKz8CpU2HR5oMqf6DHF1QhqMakiJhVL4gy2y6e6Ae7i6q1haqKX84qjo5jzBsRXXa4AHKBC",
  "key10": "4fGd83EhqUYxHMWfX4pC8fMVgpe4rixkvtY9zEtrY8CMc54YfNKoirVzHZmNovrDDtTxwt66po5sYX66Za8j9X6B",
  "key11": "5cR1hEx99PPd1DQATu4JqvPmNTQQDwc4c5ydDX7bNqfV1ej52rrJeA4wgGZCmr2rafJ1kegTE6vpK7jT77FbMxPm",
  "key12": "57bezAHiRLM8mSehaN8atvCBA2KxMQ4UqhDz22tbm4NYghEiyCXSJHWjZCcrfRHfs6Pn4VNGA57bv7Q6JLb1Ah24",
  "key13": "4yZkR5ZCuv6LyaPPVke7eQJAVzyVvkDHK7EfoPFpVNs7Y84FfWaN3ngMCpcLCndSEAqVLAgnppjFmLbCQB6SnYCr",
  "key14": "4tP5veb1t7Z635hsSFUVN6MgyjiMYDqBxPGtDYFJ5sJLseK9zCbFnqVLk5XZdx2MPyN173yFAhB39wQHNjH9QXqB",
  "key15": "65p3Xkpav4dTGC5iUSoEM9KF9izin8VxUNd7Fe6Heou5sMKWHiEkmpKWXgn3ijkqnGCE8tRHAA8KjFv8UHsZQC1t",
  "key16": "5uiWu6HzKfXmqGJrnoEvJWPF2PPr3tH6Azg9tGZehkXhXAjQfFmmrNxfKCyxKSqcoHXN1jiu4zSTKW8afueV9tvt",
  "key17": "2scTSSfMyJA2aERBC6HvWhrtoom5PKCgSF4FtRNMVXwNs87pfwBoH4PpwqUSj5uNEJWnU2JGGRmsSgximTkwiNV9",
  "key18": "3c5G3d5Vh7iyBv6qMRLybjzKCPXjBG5pfihbngG6XqeBQtJMxwWiKuqzWB8Pi4JoZEbRHfLHZbKYKr38E7EV4GHA",
  "key19": "4My1CjJCBuzqMJQ2BfoVP6ADQyUwSPAiswrpgeqADAvyuVqeAdhtPuMHhjuHpX8gNKHSJDpzTGtUAZyFqQWxxRPt",
  "key20": "5octYoMoB94GfpgvVtzLybt2KHJpFfwSL6yWP2VVd7x91o3UQizWivmtMNAariM2kj3gwfKmmbgPozRFudncCm7m",
  "key21": "2hjuzbieL2m7wNTFNMGfpBKTJfUJA6roxsdZD9dgtbD79nQsqxYLhWMBwNFC53ssnx9aJMpRHLxwB89ttHa5Smt3",
  "key22": "6JdWA3Hn5cAw6um4LAFsaJKSXcCGno9Witb6GmL4EDDx1mQTAetW64kxQVhVU8zGRq7zXnKLe8a6z3Z3e9jWPRV",
  "key23": "4ooeTffQ3nzTG1UhsSeaRbYY81YWhsu6YjwKofx7H1qdXCbvWz2qY81g3erA9iTBDpdaSYEG1HKR5pU5VTKWR2W2",
  "key24": "5kALXhHtuCKxSkBBb9M6Wf1XS22HEmqhbgbrmd1X8bbQ6LSSmpykiwuC4PHKC7Gea4R4m9WNzYhzv2wfG59cx24R",
  "key25": "4oCcYcnaC8F9qTWJwwyb3She4VGTytkV7YZVuZJV3pFSaeW4yVzSWuZ5pZndJVhypAqc2PKM2KtEXv1saYhcCSzM",
  "key26": "RYxPMWtkj4phkBJUSN56CheeLou9xfEQaDEKNCKqDL8xoUNiRivtK5xxXtu1cgTvhWaHaksknohhYW8orHMd6XB",
  "key27": "5E52B1g88heFnwXXyHrmBALKpWAz2pKUeReUYhgvzhe9nDJvJTTrc3WS6M6bFdYUofFDKb3u4RfAHbDpboWoxFJQ",
  "key28": "5s29n1yrhtdAX7wkwExUj8rASXDc5mH5Lfd22ZRkEmsuhQsxqLBa8PTJcckNgqMEGQwzJU4pbC45fX3SHAeyC7qU",
  "key29": "2BmJecuaZswafVHRNbSE6ow8mUNNSeqYPzYbyhgSQKd94EtoRPuJukQWMmeazFDBnrH28bqg9JRfXFpJX256g6Gp",
  "key30": "513jryZtmYqWsrSbCsjaSYvfamc8vx4m1CgH4x5MJaQxUpFPdCTEkmYRdubQDGz4Wkc9VxwmyrdupxNngBmKqYcq",
  "key31": "4BEZZfEYnGXtWs7naD92ZmpMQvANxKzrTtTd1DeDczjVGN8WzvgkWCYZYS5URNskcKZzPWesRgmrTeBd2rY4ideE",
  "key32": "5QjWC6y31CGbvzkLwKHe2dGwjuVGva4yLSpQyBhtJUhs5bu7Y39rmvETb7djhaxEveTUoY7vL9jcy6AYphe3mzws",
  "key33": "3RhscFDsZ9q5Jc4vVwhmwXH3dfFcgiTKjzPmB7Ugwx5VJGRT968cUB6f9ugHiuRZCxvZZWXeDou9dNNKQrKoTCqJ",
  "key34": "2Lhhuy2agMzgg5oyRhLe6VRUF8e8L1nhiX2oQSeChNbYTHGwL3tpToncrRx4AKtz2apwLjKmF23zWzDyfoYJBM6W",
  "key35": "63H4m8Shdakebp6nfWyKtJXvTaARKYCDXmH63HwKDFH2rs5icxxpx7SuWXC7sAe36hhR1yPfLULtUbDcMGofFUGb",
  "key36": "4uj3D9C8R4zRKuEKch5DtHZyfq21ZwuJXuGvvEkZPfc29oxAM5vRAKDzbmeBzAMbh7fVCwSVmCgv4yG8PMNSiTar",
  "key37": "2fcxtjgVLnnkd6bVkfLLiXT4Qa8FPDRubkxDgfoMuYMW1tPtb8yRTbykP24vJ8aXbxLWF2rzgV7SWuS76SHW5wz1",
  "key38": "8C872JZsgjQMhHQ6nfuAspLtHkZDVtTpiCgR9Zd649ib9izvJLYdJLuRsZmzW4RH2dKMuWj6AVsNjkMGFoTfMqm",
  "key39": "5jshgVMaoZSLyWGqCFzEMr1TbKF7Nffrif4hC3neFadxfTF1dabtQ4JwGxPjupums2xDQMYs6bYpV4dn58S5hE5U"
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
