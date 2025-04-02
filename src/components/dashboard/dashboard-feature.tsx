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
    "259bpbFeXToVfb6CyDXs63cPHuUM5epHGxrmywKt4Z1ZUfheXGx2RuZUCEQdA6F8xtAEyiCudp6mVULRx255HwEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QA7hw7hZFUiBoDmPN9jUEmXRWjWQufZu1Guw4rknQv76BJghzUGhYazwouErWMGsMp7HZYGLFcbtz7Nmaaoaja8",
  "key1": "5fC43JaismbHmQBsN4BxKULeJ5v5iTrj9RURSegsB5ehdoK1cDy9GXHpSMAx3pJAQrthWsJNimx1iive4GsyMCsD",
  "key2": "4X1ik9jtELHwv1b4Di2DfGUFjzcy2r8bta3ED7Q98g2qdxFn8zQKPvgvXxbs9AxQ5YqmXuvre6TK9U4Xq7Zx1bcH",
  "key3": "3miENqjmH1NGjmnSJsKS9w3XAjtoCZqEfdjqc8tSKareaKvL5HMV64GY7YRs3kvRkJKMNKu1AdHQDzuDVigFTx3v",
  "key4": "7aJEV67eEjp6MghMsSyGD84WMJKhebuexbzSBCWNpNY3e8tJBMWbwngrYY5Gya53Qhdfn6zqxdz4xkvZKVVbMCp",
  "key5": "5AkWQNdkWEgYbn5qHouzJiPLabGbWrShnd8KrYA243WVdhPFaACmYNw2YyRoEQncN4NADPwCawc1zgPMeMY8msmV",
  "key6": "5qA1c8g1o5NP1bopJtNQAmQ3VyejZ7p1qaJUBGY8owfxXmoRjzS1WKw7q2hV5AE8Sr7eNxBixoBRgpzmMyGVqNS5",
  "key7": "Z68f2bG1cDMAhicgi61e6ZgBqGk2Ecr4edDR9xSTEDkhGc2geiygwmnCrkacaCYkyf9QyDkni5d8mJoSna6hBsE",
  "key8": "42k1CUDLQys55t9hwr2ueiFapKtgMFY8XcQnd9tfz1FVQvmwB6KkBpoiMFSk3S1Um24h4EPkoLk5SKYbdzJwb3xi",
  "key9": "3i5G1x3ZeTWMsgdHS7utWUBzPzJNntPRt8d6vpcWdBWTK8SyA7JqnuBiToV3fsk4GnnV6yitExKRkWLZH4wT5Z43",
  "key10": "3vobw4dJEKtCQXBVinYJFjnzN1UnLWiMjshWXiBhcVWE2sbKFMAjeJphvbJqLyxzwzUp2vD4XxCyEdbRNArtajUg",
  "key11": "LFyBgh4oF871XXBZZTyKNgoENjdJpBEKW8oZNjorrFTdYcnPtrD69z73gjheE1dCkjRRx8tA6aH3Nbz83ARCYXe",
  "key12": "3VW2uPq3uAorN4WPqykmYqCDFPA5gnHHp5W7cdMn5RsEDLFPuqJwaBdRpnt3Baq7qjBaHeHiKDXpHG2LmGM5Ng4f",
  "key13": "jNKwZW3BouMv528WgG4awkGQv2dkaT71RvquTjvDHW3aTHcjfqt3HqLPrQiRCUpYaDLGuWETu2gAm3kcP56vAuq",
  "key14": "8q2tFgLofZ8z78d1vUPAYXJsqj6GnkUjYjNTvzkvEa56qyVn9GQG3mqST8zXzPfcusTGyPjAyyz717XU6P52Vsq",
  "key15": "4MhRVfwWfnwM3i6anYuasozw3QrLUAJDgFkPbcHoSEt8HQMm395uxwuNV892xcCWDHXJifEG5D7FzonoVx396D8g",
  "key16": "4ytxFosNfKyzT9zs7CLgbZ54nunG6pqtG3FYeQhFQVFsuvb418sTgQAHvMTf5aN3tUfRtKpJfoWz8JcMDTPQaYYE",
  "key17": "25JZo5aYroBagevrvs41uvZmEsEeaEg1kCrRr9QQCPcgXXkvVw3KarqZfD5ZSE1BuwZMjZufDrcWRuFk5zYvhiJM",
  "key18": "3DBG3mBfZeGZZpP3juyKcQsJxC6vbZHbBafSKXhdoxJ5f5S7gR9s6UGNNMbrkar1sZc5Mo3DHhgB8hHiaDcKnHp4",
  "key19": "4L37DhyghXmngvZZkj163G5GpWhu9NUbvS6jDHJvvYuRmDrfixTDEabW1JJu8cA8gFZmeBM6ctaLaqmwKokNF47G",
  "key20": "5ph3hcoeAubAi1Nd59urEGCNyQTGc6wohGg95YyrJ5Z9MjGQrgKgQuzmGUZSoZiFEdkJ2urbbB6Tk8HUERz6D24W",
  "key21": "aJVMfZJdeYSCAebEqsUu414LjU21QkbH2y2jAtsW7td9GVHgo8KPrqU7U2YU1M24B6CmwbEbosT72UWGUEpJxmv",
  "key22": "5rE1YvSLvhQa8uqT8Nj8AVTQPX6h4aqDVUwnTfanPLEmuTN2s2DZa5Q8R7E6GTuohcNmws5x9uMqXBYXLqEamnZq",
  "key23": "5KhEsqkQXTZRgncm3sSuvF6aZ52183Sh46Bten4o6XRYL2SFrG4YVJiTDg39mikfNJn8Xr1EhbehFWUbiaNZZbBy",
  "key24": "5dgJHR6g2tmD491oxtR7nP3X9XydhzHkqD1FaVNh2H8upQczv8prZ9CinusxPKnCCKmtPTVEDsywMnACX8MCZgSD",
  "key25": "2Rc41uu3jWfW7mP5HPp3YxYMkCitprpbJ9u3VtnRP3UngKQJBqF4zVSkik94Vgsuy7tDwgnPNH7QVGGBz79TMx4e",
  "key26": "5yBonqtuHKTcgTPYacFnjtWgQFbT6djEsoZ8PkCV13Lk5xkyXaUxVpEzgCgsJKZDk342sGkNChwnF1eRTJRwo1Pk",
  "key27": "5EFwnu4W6Du1KbaZaoSjqCZ55o562d5pLLoH9Nta1L5BR6CcDQV3aJDronFcoXY5g9BR3khbq79QvqKrGTora7Ci",
  "key28": "48M5VQYqBhadJCNBaM2z8iWBzsSyzGhmvTpBtPofBoG4QsDFHqUFG819AakwNPMkvuRVzw95sae8BCZMYpRYELph",
  "key29": "4qBFnv1qKy4UxEJ7rMTQehUuV48QDicFSQz5BqZs36Th2kijUer9QHXAnxqCV2XRbB2UfXaZrNzpkVPHJp1TRXu7",
  "key30": "52kmecAzJ6rhWxVemTvZdNdXSvYmFRBUd4gAHWpdY1Nc5A7FcbmiSWrYBMeopjM2UrRxcxBbzFRKmxKLCgzBZAgZ",
  "key31": "xS6zz5qaunNn8hWPD3xMUjMwohD6yHVsXAHFw3BkfoJYPaRJPjTH85yGj4tmPLjp8dac76hWgYX8hxzB5xBncFv",
  "key32": "5h7dCTLHBHBe9LA27aRpiRMTprenCmTmWhx6GhwW6zP6ff5NYX3xLWqWn61qSXRbL17hRmRwm5FQThvpQc3bUuxJ",
  "key33": "2stZTX6sM7o44ZmgTUgSb8QFRFNXTwJsX4WGCi3di5fJWTGC3zDx5zDPy6C2B4o3WTqJbbt1Z7WDZrX5fXAoZpAL"
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
