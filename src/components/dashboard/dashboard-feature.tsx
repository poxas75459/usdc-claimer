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
    "4LDUw2NWrVKYYPhuYSXAXAPW3XLH2dVov9khXuaReRaeTBzYfeKL6PiDQ3aXWkBXSRg8GADHWp8xTfjWAHMQxAVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYb1vcpiq27VLaZkiJqVodymUAjQBgch8BtwznYAre2JqXNiVJMvbe9BfsdB5iGesRDT9UWVQkPsXHNSkuVT8uj",
  "key1": "2wKt5vBZYPGrzZshjdvKNNy4a8PLUvd7Cn32w6195XNXY7fx6JeQWL4iqJsG8HmXqCXnzCCNWK9o4y4CGR19gsg1",
  "key2": "aFr3bwdCohxFLDjTN6vUDdz21xPEbjYSGnQ9bo2KGcVUYooNs2bXD58dqXy7g5vNajLbZdzmychP85Ea9Y6tvpe",
  "key3": "41XhYZVMTxMxTCw7NCMaMmb2PR3Ap2jrvDtUEfFeiHvs5XKi4iMfxsn3eAxFfugnX3d5dVDEDNdgq6got1wxWZpE",
  "key4": "2CQKVsNd9ipGckjJMXqFi6iknJAaimdCSYCkquynQsKNC1orVygRuyK9Z651tYvWf49YhVNcPJP9nBQxpMgJYcGJ",
  "key5": "2kHfdaqhzZYuArNfY39ovjCtzqBuqJtaVonhuiC8ANDGxmJS44rM4cAJRfgtQLV8eZQqG7UwscDTjSwGtGbpRPUX",
  "key6": "5LHzAc6cEnftjbWhr4LYKTadDqXSzKByi5vH9aV6rvkww3TQGPLxRYrx7yzAnHGNedQEZ2L9AnQpByyaofZ5qUfv",
  "key7": "4im68PqjeQv4fCjEPJbK37cXnB3N1RZX9x1R9Zf3yo4mMyw3m4YwCmKjCHKC5Zdw3qPGmhcMBt4TzNR8HtFBCykK",
  "key8": "3azwgUoBoNLyjSNMCHRTZVdW8PGKwfvTQoDzLLiPLTZiNMrhzGsvbBSyJq1pP7h66qfvKyDwQmF5mqpv4WnyqCnm",
  "key9": "2Lpe1tAhJERASqgkoMkaQe53Q6oZFBE1xVHfp7aG3jSLTbkYX5cjvTzLdXKVC1e77N6Xdp46uUBZngfpae4gBKqW",
  "key10": "25h8icPcUhbzzhyGrqEJrCKMsxbwdZx7FLsLksgzkn43zCyA5M8VrPbmtZ3Qy7LbsabxURVdLPavmqDroT9iTNqs",
  "key11": "wTUpvE71V1iKimEi8zuVXJFa8Z5PyZYwqaQWQB2MARgHdifTWnNQ2G8KSBWjysGUDsaAse8qQhcwKw14159mhKY",
  "key12": "2NMfiWaTXhH7t6Aho8e8xGaZtRrSzMua1ajughKAcF979qF1wVm4Rd8XJVN1WHgcvNCGB9LCbbNNmxfT96odDunK",
  "key13": "4pQ6Egk9t2S33qsLk8iYZ7EGD6MVa87MG6cXZQxmZLTKQkGxJGUgiKv9dDVF6fE3K9fx2Y9ymC2UugThCdLUF7oz",
  "key14": "CMRiVNMdMychfzxYoPcLvRDVZcDHyuoyc3eqJKiud7bUhrBpVniJDGhh4vkpd1YzcdmBwzFRHbbh8ncD7ogWuZV",
  "key15": "3nWwnU7d9ebYXmTaPBTdiCGuL3TVzpinQgXnQrTJn58pCAdP6VRgDjBtGpAmWZ2pTZX8oLiLmDHmmBm4UkWLQAH7",
  "key16": "2ixQZr8YZGA8dZjyFFcstxb7vYz6VDb2pd3i1tFeKRw8q7XAfDj4KrwZWxYDT9LS4coL8pnK4vHqVbAJR3dWkR3a",
  "key17": "oFfFCfASPAanmVcoGHWrfy7LVbiYxstZbZw6pzSiHNpQwzFPgMkxPTojbvhG4AZZfXd3PQpTaH5cDCBpvYFxH1q",
  "key18": "4g99zZiVivWJFUL3VMjBdANDyTTkzn1a8XWYsagqAMRym8CdeCat1rzW3rKe4KR1Z6wv2hkAUCTZ5Tqjh715pnbP",
  "key19": "GXapznrAG1LpBS5dxs2LWEoH29cGHx1Y6C4hygbirButNL7tjvMtSuE7HSe8sLaJTiw1TenDSyHLRvzvngxcp5Z",
  "key20": "3Jy1uR6obMsf3NXkjnudmyTyXhQaukAqMJVDTvnGEGgbfQQVLsFGHtPaq2BirrEqPAxPRjh56PaWmo7yBYnC1M46",
  "key21": "2Qvz7MMysF9EnXyb5rGcpPL2z5DBqwYfT3BeTykVB1e6nNRoLWuggSh3T62vG62L3tojAtdUgRDKgdYeAZknTDp4",
  "key22": "59VjqwZcogPFAgp57kvmC5Xkpf6NWpy6yYzjm8MxdUrzA464x92WcNE2HJQTHVfwyqKyrCk21oNvct4QYtdSLtGc",
  "key23": "5Z22KJvJan5EvuUqgSNaTkhRqNag9VADNSHsrM92MPEEdJ7Gc7xst6q5QFiw2575rGdBtyjx4n4t58MzNmZVAhC5",
  "key24": "3Q5CaNGnGjAggQFZJYDQBRHdE18RjLcy6U3YdALxJ1VqxFXFwmSPLAAi51mXTF2JXZrGot17KZxH7FuTcKw2ALzf",
  "key25": "5oBaQMJEQivV9xWFQNUGcYmiDa5bMSXFEC47fdR5uWsTgg4hZs1rJGardU55PzSqxPvdre31pV3BRGD9HUtpLh4W",
  "key26": "4SE3mZPdYrHa3vx678EFuhPJJXx94fndYjbWpv41dxADyiUTvzxmDTP7f6xUfJ4hBg4nRm2Y2Rn4MsdfThN8kmsJ",
  "key27": "65KEH71fxsTTyfb9EYLhBcJB3Hf3gGoZrkjTgyWxzRMsgCBpDwmfTXwvEBGq76tjwk9bRmXDsye4H5c7dJmEJAQp",
  "key28": "28Ty37FSYeKR6pCWTcqV54LAhL1pfgHUPrKURRwFyJYnWz9Y5bXoaCf4cQzjpdHBb8bHzhp8Lc1uQbC2WUxwtoc3",
  "key29": "5rKV5PavKiTVE2zFLZ1uAdj2cUPQXwpmzaPZFtzqwEphy5Fu9fNaNubg5bmLfcxACpYMMVGEhTWKcrUFpiCEBCbL",
  "key30": "5DnxZdPymcGLZzDy2hN9anbuM5SNn814zA9sSDP5SK1NWJBZ3uJCVvY6Mis5KfaWqPYe3HDfbxj8xCAHiNHLELN7",
  "key31": "3epHsG6xQ3fzGuwKysy3KSNUmwfMNySHmZGRD3jGB6m9gUH61acLPd1TeGucQcPBbnJdrBdmzdEqJ1Kb99aPiGnh",
  "key32": "4xtHMXuYpiNLSohSccbWvZ4PNEjti2keVbXRnuB5XMnqD89zSjTdbtaqXFL6XTd5on894mGbCL7GiMu3pcvYW8tA",
  "key33": "29B7pw6FNMRYALeLvmhrJkhXAGTzjpeHKbVSAA9LbWJKSuWWh92xrpCQ57KbTBsY9LmTV7H4dEAnu6B1RAfUdpag"
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
