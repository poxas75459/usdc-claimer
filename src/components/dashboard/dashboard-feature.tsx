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
    "5WLXX9Bk6PttyuWr65oigXVYA63S7TFUhk8fm3KHdphuJ1jtcrekX8ncQwMLGxtMkELrAVFZdm6o3Uy5AxU8Qe6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBeGMPW2qaV885zqvMrTNQnRxJKH1mm8SE6dpoZpgqUg8JYVby27uXHAqtDNQFVRgi8PxcvbVD4KzhTgnHkh29Z",
  "key1": "3CKkPYzAK1qJpgU3gX3gwH7vkyaxEDQGkZZekKXBvVsQjjRpZ17dAa2w4sWRsAH3HtFAT7nfTXEVkPmUVJ4NuxP3",
  "key2": "2btKZnSZxRDD7jZH8V9BkDiZrpa8J1i81AX2S2jfbYp5taKzqo3JbuyqVDRkgxzoxxgiQcLJvrVFp6ribyK3FuTy",
  "key3": "WGT41qxveNGPgmaQ5jErZFwYSzU5QtsnrTKZbyoJw2wAkBobuLCeddgh1YjS9WvMyRrYkJ4bxuxbMbCqtrctD2v",
  "key4": "2rfSiQa4Z2FbL9eW662VNAVdtFwZhoKVHYUWMCsnUZ8Y6sw6dq7ggqwjws3vJPUZaaTK5LWLrcT1sPz1XwJnSDjd",
  "key5": "5yxuVbQcfSzAwTFfAeM1VVP3sUGMhKSf3xfZUjY75bBcU3f78N4P2wPb76C6X4LgrBqspZmvY3D92n7wGJZ4BAtX",
  "key6": "xLUHaxdm3UMMh2jexyKgJZWRQawQA4yMhMXWBz222poN1GuUVTXE6YuPkw21SSxpferq6bQLuRA3Mty2zwx1By9",
  "key7": "549RuJwZvjcenZtGz3Ku8ZMTfeVj5mQMmvZ4gc8oTfZpjp3RL68U42EHSLKcweXM9HAbZ8qmrPjrZTXm5ynMHJC1",
  "key8": "2fjS65T9cgUyhmC525s6zDz1rzQwDqfJyDr9SuiaFBRbqs5tdUz1U5oGyctLmsA9pm7Zz56F5kZL3KaLsBU3QuiA",
  "key9": "3G9yqX9JWZYmFzDuy8bCpC7EinQ7cDCNmN3gVFtRen4AW19FSYRCzZjAqKtrqgWYbAJ7ACR3U4D2GqbtvXKHgbvC",
  "key10": "3MUNbw2bR815kUYCHbjFKAobJsuVbvFehti2Pza1mNNgC2pnrLHNVxnyCrKr2pzF7CpDFXMxuqQiBmSrFT98qC39",
  "key11": "yBXkrMnf3P7mg8jksP672w8YoFcDGeJLi1rEiyvdpaGR6ByfAHQ5LL6Rv4XKz7pHE6VeNRxeyW9DP45dU9f8Ri3",
  "key12": "5iiZhMYRAxH96U8VBqKk67dkbDQeX2kgFunMYcZ8yQYQHPkGnqVddgtMPiPZ6W8vC2rrZ9SzMVAxWHsw3BwXn8GX",
  "key13": "W4kG3gDmJAGcoehrSgzDMJ6SEztitsDCMii5rLVDQnYEX1Fc9b9Xh5NzW5mGTKYEZ7GyPuSXNqUpk5e74uD3Vwz",
  "key14": "3K87ye5gXja1bB5oL5CbpHKD2ZCGCqQt91YjqQHNLdAzgsmcpwjfLCxH9pXNi2PEWV7Jw2yh1uHSUDkXZ3swdnmA",
  "key15": "3nsipz8FHrRJ9eNix6rRaP9zRa1K1ApBeKrcC1nN3Bk9a17e5bW47Nt37BenaJoC4HZnsfHQZ72VM42tZSnYVm4V",
  "key16": "46Ndsm5v9GMYig75ctaDEFrzrR8DfCYaM8onHDgBBiP8uTYJcp7xgxWc7Dy6gNn3vqqtaGSNXZSHPcHCr2f5Xn7K",
  "key17": "LAFN8rmGAkbDPSMM33oTkFVHSEo83WPHiF3AYtetdaFf6FxQb46nnt7eFGo9E5Wopxq6T8y2HyDkEHtdqJqrmgB",
  "key18": "4QTb9kEEV8ACT7b4ZE5hybc7L3f6D456Yj3TqAi422PKYaS4eKvfMmapb92qbzBQWygoN9Kum3nr58hy9ztPGE6s",
  "key19": "4GV4HphKB2mGGWPfSVtLu956WHiodc3neP7YEJ3Hk2ZZ3MyARrobPN6Uc6xSMmeTxLwpGXASMsRVLLgW88KSwT5H",
  "key20": "2ZRm46nzPCVDHZ7FXzo2EKkx9HC1MfdAWQdWscWjT3pWzCfd53neKW6oWfDckr8WKD4RcmQTAkRFdMU21U5mA7eY",
  "key21": "4rVct35Ai3WPfbZFi9TCLaXa6rLHNCUPBtwBYMcEXv6yhCG16e5t6kgv5CZD6oiDYNEgPW6C6AbNV6qBSVPuHPN8",
  "key22": "35fA9tz5HugYHm7VEHGzhSH8WvqHcjcUBjEXrddGkoBdeVnKiaEujVUPTkHTnxjMRAscSJnprefZvS8mCDuxBJ8k",
  "key23": "3Jpas1rmomZugRzyiHPTcb27UpPghVnGSoHkpYK9qas9GcE8pWVpNWYXNmtbptLtFP6PziXyVVQSYk6wUV3KKEy6",
  "key24": "5Dywrj9rJ2fJGkHVz43ZqQnX3X1KiBUJcH23jP74mDTeiAEJee3by2QHg3CqC3FCGWgbF3sfiPVqAuW8TwxTzTfF",
  "key25": "kx2fifDaZQcf9YHTPK1JNmGLqppBjFT1qX6uzRHe5ZzqKRhTwNxFHbvt7bzZCa1sevvHjZs4p2jqG5riv7phEWa",
  "key26": "2hc3Zme6MfiMPMDkMnrL1E62the9qLbFJMLR4GCYNAANtsyCUWkrGPSJSRHFV4EU4jHAmnxEuBGnXMGa7vFG7Njn"
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
