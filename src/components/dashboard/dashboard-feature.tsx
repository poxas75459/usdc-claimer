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
    "4csqcNDLUyNeD5K5qDajYiD4UtYYBZaBATVRvDQYpxNUfYuu3A7oQqss1Hz9GUSnbC9ssUK2pPnT2NaWmpU6GQF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MNFNEPgSaHXaw5xaxU4uj4v3jqDEVzh4CXu21Z4o5TcPcSpc6BiawBEmuUmzeUAWrsShPjmMMQdFbyod3wMuwED",
  "key1": "3t8PC4sSuMwNcit2DUEu52QuVaQQVp8sFAGaGL1QqvifPRUSZz4AAViwYSq8VKP7HfVGtyVeGATfhjgg2kwGQffC",
  "key2": "2EcgKLabGGk6h9oXnh9yTBKYMJio7Hc5Ub1gRoXcizrKTFhRyvzmE25cj2DE6b7D8nk1hP9QqM1tr5fiE8U7Vjvv",
  "key3": "RAvB6N6u4FsCNvaZoeKUTKBZnBFME21LmLshd1pSpfxcaXKsgHQvgdmWVr2Zhgvicx3PCUJWC8muJw1CiyoGEAn",
  "key4": "v5QH9vJ7oVzbGooEsf9EsqcitsJEcenhh1WQx7TS38v8LFGNH5mpyAq9h6Qejvau1CLmTpzSqzRWMKWQYQk8fQG",
  "key5": "43Fb3wXw7fjuK6nyCqgw2bGm3Tosb2dJrTErup8ytTFM1PZjGRk25LVf4PiGNGTd22PzfKAMUSv4ZW2of81VAg6s",
  "key6": "5reDYK9VFLMvJbsTf7YX7PVjhcpcsYDct24BNpNRQiMLAPMdZU3RbYGm23X1KhcSDyYBhN39tQRygNGkMRJrsFj",
  "key7": "2uRGc1rPJFxoaauBxwWgGmYmVic7U4xoxy7d8WqCr5nLp83n7swsZwsjTWoTJ3mBnwQdeTeeizV8qYF1MGiZeXhS",
  "key8": "5yNFSKqgsi26z1Zis6e76Z7xxpCbXrxZQgdYvdEzCXTsB9RnUQmaHviwf9FmP9NVV652pYjin4dxnNvDziTB1zhy",
  "key9": "2Yu3hG58NbpVNYM8XzGnSBEBfEgm1N7EJ34sCKYdamNTQew6mEdAjeoHFMSCyAYim5opQEMKZ21542oS3XDtNujM",
  "key10": "5AeM4w37et9hEnRqVq2ZAnRqRxXJNQiZBJA5vxTSLUyoJfcc8cJ7EFX4iv1SKzuhpSr1hkoQC7cD6FWPMPvq9rxC",
  "key11": "3ZPdcekvRa5HR4ygtAaTJn2S1kvpjpSWDoBpSDvsLtxM65rR3kzjsxEnq5TTvJdjcByGpnh8QeysYLybRhLKqvqJ",
  "key12": "qx1SNBpPzRg3i6DXvvNkJSe749j6UbEZBhfMtzdieRoyELzcw3B2YbCVgMZN3478gcigNKSKt5c2BEopDjNSgY6",
  "key13": "3MW5XdM7ArhcrLReSMfoeL3HV4amHhCLFp8qqLEFC2rhcuUTxWauM53N6w6R3Gkn98BGbr7evar3z5uV5DaYSQxo",
  "key14": "61daxcKwsZ5j5MyuSP2cGMb2WNo5oUnJTzdjWYtBuQsdG1Ujm2yocUwhUw3w27q6eUPGmodEvb9c7JTpZBnXws81",
  "key15": "5axzsg2fPdLoxKth4PW61LnxEQwy4UrQAWgv4VE5vuwkcg1EEmNoFcS4s29H76i3qWhiiExJUQiqzkvLSPaWYyYy",
  "key16": "uReSZ7dkYx3gLvfNFvr2ngXEAZWHcVEEtJ5T43DbNrbi1ceKNwFarWTaDqRjkbdY6GmbhdMUwoeiKJ3g9UEzxaG",
  "key17": "4iAvByg3kCdnozDU7xoH1QcjyfWFifBjPZGwt2EYsLm5Su5tHy6gjyVPDppEx7XMj4hMjeQHpAcyHQcTGNhaouDo",
  "key18": "4LLGEsitWMjMc8PbM8vU1TvHYsPjiwEMvtho8UfcxcTimuMYjn2s4GHJa26yEecuibcQWEx9mWmi5icDrHAAZCFP",
  "key19": "5jRuRzFUEnxaVLdvkweLb4wax6DMmBK8ZAHGg1TVBNfTndwjvBEbA9PUiwq98x9CzGq7rmYq9Lq2uSrUHFmErYwz",
  "key20": "4bKm7KCy7oe3LfHtSLBZ2vzYp7KW8GZ2ZBmNzCDdW68WVFwqMxmLWNgnfE7JjAFLtb5t1rUHL3L8wWFVk375rAkH",
  "key21": "4e2CHSJm1v2fj1pvPjWR7YA8u3kQf4YBtyiViX1UCW1dtuPZWMdtDii9aSXB4L7SNNpGk6AeubW7ni1EdTyGw3fm",
  "key22": "4EfKrGiciyQyaL5vf13rukBPPfpBXdoqqohxseyqK3SVt9fbt1QrPsKHvErqQmzpfXBLGGjZUcwELeyk3RpR5sjM",
  "key23": "MqBCfTziVsJdPCHY5cn7gQPtHV6yD9yo4wP4RjTQCbJfouhQYpWSGhW7Lks9xXbHybyxxh9wDs2VUWxhLB35EYP",
  "key24": "3hGZv3hmt1J5DTrrrikxjFmDg1rvEFxLtq6tv6rAk8yuphoPUxU44CNqvXdfVcRcHc4hzoL8KGZTnsfVmJxzM1WZ",
  "key25": "3Ez3z3S8ADGgH58HfrDuC6YBWiQRqmAUJw5DHQfdZBGVQaoZmruk3dtw6FKtLFxzXHnPg1kzXFbtPQZhxPuiX2Tu",
  "key26": "22UQL6EVJwXz1qWLhPwCFTDbQ33fmRdfDYEAZ2pJLcbiFVXSNHEojpCaW1SEJJbZ2AWGG9ELRPAi6t1SNbhc1Pba",
  "key27": "2vJLuYECtwxDVgiNPPydprRoSLoD6KDH5BcmtN81A7CGUw34W8ATSVR1N1yCfstVHY8hV6Rj4VzRWaUY9VL8yMku",
  "key28": "4kXsfHzYpGy1i4BF9gAk7sH7K68VqzgY42MPQYU3PCShfVkUsBmBcZcK69CoJknzM1cDmcnp1paUziiMC4Ut5Lrq",
  "key29": "4nKzJa2Fq1zPt3zMDAgVVTC5sjbHFjPcRYnZ3MSpHZpHS4GcaiiLr8776pU34LzhNpzaJNpvF2QvzbJuiai9yyvc",
  "key30": "2MGNkgiEh731Gvnu11xajeTau9FhvtsiXLwLeviYc4kA5hPXSxGGAwE8F3fGB1Rm5g7kZwzkP99DxfqcvAcishV3",
  "key31": "3h2P9xMmBwDCLfTqWAoXFUCwEpjaAZLptj3KEgmgg9VUvjJ3PvpdQLz9bdGLEKPvGufLP1Q5yMmvQvLL78GhrYK2",
  "key32": "3yeFcGmaYZq3y4tgYa7BbsAGZmNkJEjnR2jGnFKSHERoscZFjAbyzbGrM8bou3avaw2sTGEZSwP64ApwyG2XEoWo",
  "key33": "2WeEtnwGDq2aYvJNGpJQTRAnxh8kXgX2ynCAqmHnUzNDm8RnAgQBuw1n9dqwGMn1HBUZGPLWtXfFRBPwQ2HuUgd6",
  "key34": "5ssN8V5aymi3wX5kFcyWJMvxWBCTtA9YY8V7E3oXtjDcei8arcEcGTDvMyBJFZTHV9SMihXQgPCbYWhZzjN9dtKJ"
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
