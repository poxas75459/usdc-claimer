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
    "515g7ifctxL7vgfyMQpkiBbFpewZmPGLHfvM9wzsMNyz6thHQMxdEqB5EiGq3sijxhDoAgBvmi2zT38us8ETW11W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpeocjSMNGYkhBL5jhYE9Dh5T9jnR1nAAys7UrsP6TQxGhLCYdPog7rtNfeqkGz8GHRKzN27EjiQBTSMgZ2uFMC",
  "key1": "3PpYSFfFXJXoQBuo6BBD6xEdrZy1TUHuLrKJLr4PTToR2gNDMj4JgAYrd9BBN8GUv6rFbudvyVVxxgA6aCAYPaLB",
  "key2": "5qbpuGuYGU1KSbQzZhRgj3KWxQ71wa4P1oJk6buNH6F1sv5BPBFKePVztBqRynMvK3vkYHzEwRRWEvytCxHFnsmV",
  "key3": "4UgPF3BJAMJQYrH1XsPPowbJgbQenkyMJJDpxYW8mKhfDGDZDVfoHC85LLu8sRxQbZuyCRPXtP1hrCGDXvfnUGyu",
  "key4": "4t8YNkW9BbULYkcVsSdCPhfnNKNPwGqWD8NPJXXQ2xRunRmyceyuRTktrBSKmEN8e2Ri3E6cugPu5AKGvUC3pTed",
  "key5": "4cjrmtMKRcANdeRhsPPuWLpurhscMnqdwsiTY4kJUuBadPoDHHQ1SwxpPfDgVkF9U11DYUcLqNL2UZMXwiJGd7Pq",
  "key6": "5jwypypV5F5gWFSKibghzFQsd2pMkRqQAFxCJQjpxWD4v4gpER3KpNn17VUnmig46khXeSdrN6tsuvxLmf61MZmF",
  "key7": "Mo6pLRWnxuGCmPmqi6otFF5YFomBq5quxkppfAkoUWB5o4WTF4ZeBRVv5cjkbJyfk5zvb4EwdsgJXoEmrjZmPVq",
  "key8": "2Xkjc2DnZY6WL1WbQjeomDHsmK41s2xZcXmoudTgFMfPKTcMc5Wd5FHrUMR1EjmXrcEn9WDwndrSWaBVVKe9N4s4",
  "key9": "3Hj7pDWsoafQcETBL4QQ4iK88DRXHC2DgqJFweLHZFDistb3mHCuuUEqkaFSZWXM1QZPGawVRanv39m3emzLKcdS",
  "key10": "4hyp2WdxSk9BQNsWjm7sUB5drzXENm5n9KJ7REKLq8inmteRt6cSyTgNB2eWYsa7tcdp1G6V6mQ7MX2r2zipFrwe",
  "key11": "4Jj69pH5yd3JwPv1LpMwQY4UtzWQgNtoUgBptiGRvJJa4PWZHPsawYoxVGq2fkJquUhkt8RMTZHtmYArb4bswtqg",
  "key12": "62HAQYySaFz5KQJa2gtN6kzF59eZVDQAwivuVrSBJf8N8sAvTqZtP63WABJe3bTQXhWGdWwvEnG127QSATQv9W82",
  "key13": "5VjyRqgS53zv66ru4yHW3EPwPDVe55K7biSYpKrTFyJBoKN4qSWxTJtC79TNC5UwL4bkSsNTrGHeoAxLvqC4gmp9",
  "key14": "kAXGmbrwf2HJcXJDnoKJn641Lmwz9v4Prk2HiEtPrKge89bccRiLa6CBzHNbPbbXL1tZyPuA1WBdsYtrpKYYcYd",
  "key15": "3AHgiH9LyGoDj7ysQZXKf8ECZ3aepSutb1uWBeMupDAksW5bwN9F63XQWi4ZVfFezV92zb39zYnnarAzV9KTSabb",
  "key16": "3hFewrcpGEwohf9BRvCHMMeNnKgtjmhyhsSdi1UeQk6PmEvPvJF42KJW8FHYmscZnUZkUf5Ypjbo1YnK3Esfkt5M",
  "key17": "4LWNoobXxE8MtDCeqhwGJpHsYpPs2WZjp8gPeSoqZsCTPcD2gEd5KWMf5oZAK3VBQ5Rec9GQLVxTJLrTTrCw2bSs",
  "key18": "CWdKaPZrjRAgxMXSfSaGCc9kXp1fgVvFWbCU5217u5wHhVekXi9bFhUmk3984Dy5ApveSa6ywgxh2aSp654vPRH",
  "key19": "38JuhbtQugYWdgezbs7sW5dQVrTc2ZB3C6WNcwFjEKWFDg9BrcoWKxH8KkuCVmtp3T1u4Cfn9beuzAeJKLJ7a8w8",
  "key20": "UuzHDmhpwBQ7dNrCRiz92adBJQGptnjCGTz6oXkKV5UgArc5sApedjBrUKzuGggFL17FjLV3sYpnyJwg3DBd5uh",
  "key21": "vNBnsk6t7gGCy6uVaYsMqsQSGm9KGCVNXzJa21SxjtgmqGK7sioGr3wEhVcrCSMbLfueFJvWv5moLayU9nFrZ7k",
  "key22": "4iDVf3UdpkyM18JefVoNvbChGQieD6bso96kZ9G9zfpk4e1uhXmtKrrkP6Y2QUa23P3pJDUKF4ACQmnfVmsxh56i",
  "key23": "Q4H6NpActpd4zBExbR96roufYWviqueBuqYZT1fthKL8j5zEf2wk3pebP2eZ7mTsRJvueb3zFH5jp5ePRgJrM1E",
  "key24": "5ULXdaqtindxrZMHuNHtPpdKuLZE2DzqonyLBAG1PZyMs6Mg8XduQMtjvTGSp9QNnJzaNUc7UrBFTtbxT1373rLP",
  "key25": "Hwtqo5VMLJW2mJdterKtn84e97KtTd8bCL3xwvrB4uTDeAnwzkJ5ppfk4qNdgvqh8CrCc9WT9Uw6W4upGNzm1Mi",
  "key26": "E72tKME2rtTBEAMHy2t8fNJ5rVUC4RUD44ymKfWu4iZhpEZotRqH72xcZ43q9SE1wGwtaU4Qq1NU1t8bfs8czEm",
  "key27": "4iFHirVUECPikXYBu4cZtJxQMBK1iBcn24HHmuRErQn5pTFdq3n21s1Ce7SxmhdqW97bUZf3FMz1Nso2vJ4irLq8",
  "key28": "PV1A9Sghz1znbDxr2hKaaT5KgwCiL7PfKMrwMwmawVWZDF7zky69sZ7uRMnwWZuLwfiSxiVsFTcPwokB3q1xepQ",
  "key29": "2eU19uAZjBAii2DFnoM4APbfHzqxb4sEy82ZktbZPRfs8PGcmoUNFqDTnq2UeSUJPuj3yiASFNznonpYMjRPvyGt",
  "key30": "3D3RjkZRGRstBSgzD2YUufPqLzSvTUBUave78ehvVYRQyqiSk1FJFcrGcH81a1TW9FTh43jM2QF4J3w31mqUWfbf",
  "key31": "2r1ctGkfsU2sLzfhvTqXsSby8ACvFXUcNy6fgr59sWM5eYaroJL12rhw4DRKfQLTxMwTsJA72S5kFnQZDjfSU4sy",
  "key32": "4NJWWMsi3ftMBks2rUc9wffrCWc1s98desysVVZnEBQVdeGVZyZiqyU9uN58QV89VbtsmxuTHEfoZr6g5bYFW68V",
  "key33": "5aPXDCwjhwRxE8E51FFSrLmnYhMyTKnLRG8KZN4Ed9sSY5nFHPALQAVNHeLeW8oZ8xVwr3fHiKp7tkB1HkbtT5JY",
  "key34": "23sJ3jDrcusay7W86XRLZLmi4h1W7uyUoQ2YwWGMhUHjVNJTsfdc2XaRno3RpQsUqanMus8wapS5GmHkJnuRyBPK",
  "key35": "2kHo73RySebPsGLkhMYhst43JB8bEPwXFs449qY2v5Qx2kpmv7cpa9AK5sqxV2s1KFj6T2a9qhSDTPqjEU4CmtvT",
  "key36": "5atd7gSMca9W236oazsKJkvaMJaUdetWbRRZHfmdFVhTxFqqBNjspDcrHXhxXHhrmbyZhn9n39wEe9xt75vm3iAj",
  "key37": "35gC69oKvY6Hy9cBV6YVY8Gygqk3rUJwRgkkMpcfrWe3vfdPQAfnQRsrfbmcLqupQTxpSYLMPUUeoyQTHAjuWfPP",
  "key38": "3rVekpD7UMEtkiKZbx92bpUwVwTpkQNeApezUAkuuLGy8bYYzkS9DrsTcW6Vtm9hLPHrECZKQqhBoFBumy61MWJi"
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
