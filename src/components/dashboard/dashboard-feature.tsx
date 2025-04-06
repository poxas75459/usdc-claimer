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
    "3Wi7ZFKS79fPLHtBda87PpeJwuBqFUo7nPdfMYSfdrnefsLuqZ1g7JngCzaZDvx1LSj48vvjXD3JHQUkRAhXzjfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57jAECDGrWw5Dj3ybkQzzsfXhF9uKfGeHoW9rQtbtQDuerTGcVN55JRxFyUnSfMBvDJv36bWweBiPVb8hLQN22UZ",
  "key1": "3XMehyhR1xpUkcW7iUKWmNb7qmt72WVUbDStwCSsnezFpaVB1wNbzQutmsuhUACiJUNygRbDoTqgfMA1cKWoxrP7",
  "key2": "5Yso7FWDYGFroUyeoRTZCt7nrKy8ZNX8T6fPQ2Fgujkm58mXUwz11Tm3GT3KENj8sD1gsLvaDSfphPWJJ5tG2u1g",
  "key3": "2QWug8QbNK1BDeJ5Aj8wo6dk5WVLsCFSe4vBCBf5jrLuU6FAuBcks1FPoiKvDDxSM9FhRb7pxGCb3FrNw9w98E4u",
  "key4": "3pdZLgMQ1g98RjPMvefmjUzvBcp3aWPXGaik41tRMqgwxypSgfwVuRfcX6h8vPDthJeWy1xYnTYDhK1YwXnVXTfG",
  "key5": "5Y8KS3UtTNJESvt5QkaBbbD4FtzFxdDrRP2PWuonKnoBkzgCe8XwG7yh7Qy2EjSnB3azdVBJUtw2VeHoK8yuomZR",
  "key6": "3USLH9cRFdEaVfcX6ceeMuNTYnhJFU6ZSpJQ2k6droVtzHfdVZiezGoKy1A38dK6HmBedB7BWESYvLSD69PCcov5",
  "key7": "3DRfJXZHYm4u3wkZTSoXZUwrKKWUtiPgbh4vXVn4pS5eiGUVtqQqycafKBaJbvZXgKp19EN5FEjs1zB7TpoJbLa6",
  "key8": "5BDHd5uAmH2YGmiNrUa8KMGh5b4YJbaCucZwR8NZ8xTkAHJ7W9Jbts37N9SijQ4tQC3AJbhSmVMEqAknroq137M3",
  "key9": "oMUFANSAP1z7EGwha52Tp36pa3buDxHX8wB4ur6pSA73LqBqtqQTR2X3GrSgUbg8bXehN7PqBpJB3iUiwbWojKg",
  "key10": "rPNYCuQZfXb39Qq7UD2PgC6fq4Z9RBc5Few4FAh2R7xuPenxaWqtEAQSytcapFVtnSN56wJUnwFGqA1RT72n5Gt",
  "key11": "22bgYPoFYDcPFcQfQ53wVQwm1hvhcAKQCeXjuZCQfcScJHLTjJgZPegoRXBoCnBtsqGygR35c5A3ZKRfJ77XPBGe",
  "key12": "24eg2dFXXB3LY9PJFVYvzbbKbHKiTHqBz8CX1eCPwYwtsSuW7VexphaBcooN2p4nCgqbbNK7pXhevKnaTnxA7wsg",
  "key13": "2pRsFWnBttuLs1y3hNQDBRP8u2pSgfXoWZ7Y8HFaCbWmtbSsmiM65xGSc1kGUVQVhYnGkRdiZ88marQ7kzwvmkUm",
  "key14": "41P1zyQdFYn88sMXkZ8zvJhfmkbuNXBkbiWRnDZ8PK4qZetqYAyaPnbccwKMAxfa2dd6NYufgrMEfZaP5kTqEPvQ",
  "key15": "3HLAhKtWZzfhReXFcPrsN2bszdbHTwCeF4hbui5wuqTgukYWzXJSX1JBrVLBSGAjec3o7Q8RdSCnDjLLkYhs1J6F",
  "key16": "36s4d2SE7v5iQgu8qeYYKgXHf25ykJ1JWsZz7u5r1WWmSAsSfVkz1FSDR3cQUfTx3N55vWofnmFkD9WuZ7Jjyn6K",
  "key17": "57zX7UwemGtyPm1dcEzmvsjCn5Gcw8J2UD3SttehrJCZRynRyCoWJdASG4jAxk4qPT795kYfG39GdheSGAe9p2d1",
  "key18": "io8xo1dggrT56z6xrGBxHgyF93y3Z8apvUDR5GXs531Y2rx91xY9nRWJWnFChjpkv8u9Fgyf2TYP5VmjxarWUBg",
  "key19": "479fWcD2zq2ZPY13dFiBbejSWMUFwHyBwNCPBR5RsHVq6KAFpakNyUsbLPr2NzQRNsSNMEYP7XVWTgFEiUF18Rm3",
  "key20": "576ci1upPKeZMKmCH3e17morHxkqtPuEDpQ8osT8d735dXz3Kk9xGHsj4ZJEhzT5y1gnHfk8QPb4rTW7btV5d7hq",
  "key21": "4vhkNBhMGF6bGRtQeaN7ZP6WKmyaUQ1WJ354mZjAD1PHCQvLLP4CbUp8BPLhF2AAKZCMtDNfuAtSjWhZNnKckdc6",
  "key22": "2K8yQPkBbHNELR8ybpjY3TvGhDhuSs3WYVuHuHbCEvX1f7tgx9UyRW35SXnr2GXLsX2brtsGZ5kzYWHiZmQoABYq",
  "key23": "3rhyCjfcQKcBoyZAVHXzys6kPwg6Ziw85Ze9QSyfaDsH1zpUUSPi1ZH7oyZ8niNXVc76MhHpcv3ZBSUNomuZtofc",
  "key24": "28V5QPjBwYeb84Dgp1Zkjmbo1e4n2mLHLSiHrqRmdBpRWDt4ADiztUWLaSGr54owF3nGzrjuhoZVJgnAhdNH7hJ3",
  "key25": "66xa4nM1FvzeiC8ZMsdZoGRZbREWksqhD8TczAraBi2T7CaTPmacankiH7VkUwinSkDP9UB1D3TkWJkJhYPJSZGm",
  "key26": "3JBNFHD4dXNzMaikijgLR1fzvJXYQ3SK9VyVeWBRMdFVnFVxoJwKjD7jPZpMkoqixn32hAUUP2bDNQS4kVByE7Um",
  "key27": "3s7BLgEWy195quuRqsHginvb5RNQR4rXidcNZAB7gQyiosE967MpjosBnM68aUk9KdU6VV27krwYtRti7fmJvmE5",
  "key28": "2VrXXv6PCrb8RYq9RsW91FXNMYbSYCFUZodvehRKQeKKix9t1rrkt8p5EFMv3uALcD9KdjQsXQMcxbDw95JfHPBC",
  "key29": "pjTJZTLnBvwTNEHav9DNqSx9xzQaJUPYjmhR1qZewrnjfnkWsaqWztnMnATgiVL6JPaZrJwP8riGo5HAqqeQPpp",
  "key30": "5eEKRURuNats9JtrHZaJYFjQsQxzabJKhFg7gCTV3CS6zWnULUeAMkKig666UxvKDR1eizjMtn3m6PbsKRgk8om3",
  "key31": "3oVxffXND7q5uxdehRHAiyCqJ33fjXzNEh7cGQKphevDX7ijf7U43aQbJRN7SrUPzT4nizABRPKKFMmjT4ogUm4i",
  "key32": "zvbUVzRubKcDu3xZBRHo44omGbzf6k8K6nNhoLdQ7n4hyjq4No514KTVN7s9Mm51ynhcCNznKrNd4NXxx6GUHPC",
  "key33": "5wuMC7FareprxL5mvTGaot46yWtiKKmYBVAtJJYPVLeEeQrwGtvq6DUyA7o9EuL1ca8C25YoehUB53g4tsbYfew2",
  "key34": "4pavcSzwc44Nhz8MaRd6rLRaVdhTs3GB8MmtFMAKmzLvHeio86LAeVGq7PSDBfNPER9A6gM43fRBK7SnvsoNiRf",
  "key35": "4vfoSb5CCjz9XrjGeKurhm9sWXBrvDpTVUiFv7dgZiTh2MnqHJsmv7rti2fVhwexEmZpHCTt3parFHyyu4TBeAhB",
  "key36": "fp86YNWKJkMSb1W9kT1VgR2i3FbD1hjZhHgqSWqdL2sjgoeC1SCYizRu3FB5cgazq6LojKugVm89ScJpxnJFPgT",
  "key37": "4bUWGHPQFtJwHZaVkKEtYbhByWPBmBjD22s6rX6qXCdxF3gswFFCo3pMU2zmDniohP8bpgx66oeyogKUHJdiuQGE",
  "key38": "4c7CukfEQwcVfB7WdeVPPb2WM5RPVH9b6yuM8PwDEH9sURN3VD6mDRdP57hK1fhN4QJmr68kuYX73iwc1oDxTBya",
  "key39": "5zmGRQ3VEFgSysXkZkGKp65TV5n89Vo7HfWzx4SrLVuk2NbtnM66Y7EBGWso6p3k8ghXz6XssSzjUDp83TiHgEoV",
  "key40": "5jkzf7Lg6x9Ta6ZDSGWzF2PPXJkFwq927NjifrDcCMPQm83h73vZkpcAR8uEP7S4dygLj7JqhV75RRNG5tAEQfXc",
  "key41": "CJgpFaXvitJ5e5SNcfiboWm8ju6tzJ4teibe48V3yYW2ntMB3yh4MywnyuReHGNBhx18W3g3kwynkU8T4Cze8Sf",
  "key42": "dHF3ZZnsuSoRY1rBiTLD8N4tgBhdxfX1oTawhgGGuabxsYbbp6SqmxWBB4rwypBuguJFGtXEcv3LZcfW2VpHDzu",
  "key43": "34RABziS31c6nymPm9kPneCddxjGsULPgHbLkqw3ecBwtG7cVmE4uu69aAZ3y2WvVu7xN7bZQMbBbo3x3D3EVoyG",
  "key44": "7BLrcJviyW65pNupdNGjzvVkCGy9TgqJTKNMzHD3F2wstACawkteEjrZ45WSmgdrqcVWu1htbbEqzCbfotJ6itg",
  "key45": "eWsRXBxUoXAwxsPKWXsRVRDF9cFgpsjngDyTkip3vgtccwxkP2BZtUXrk7Kp7LxnrntCeWXeupXCfv6kXADjsoq",
  "key46": "3MpumpnzqfX4FCubeYxS1X72LUAVGzaVbJzhAzJ1TygT8b8q1UnbWxTaxCYWnz99DaJ3d2d6X8mHXHSAcpadmbq3"
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
