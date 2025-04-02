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
    "4jZ4xa4RpP3wMFPnH5veE18rLbw7LSw54H7oT4b5EXqG6xaezEkTdkXuuzCPzk6ZEArBChKPTCtQcCAvwFXzMMwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNyqw1dPZ2j9eazynE68vLVDp8UrqgvzW9iKw1S3WngYBStcnU1L9fPtddxPcJbqwiWTBnYpGz3FhzquS4KciQU",
  "key1": "5jxKMM8TiWaHQYusmMVvMZnCQ2D6pBKGbUoXnYvZcH7sjnkaczsLDL2QXicwKBvNNTNSsmwDzSKRHeAaGkxijjhL",
  "key2": "5wudGhNcrf9JmrGPku2wpMWs7ff5b1tMmob6EHua27ojiqU6ceMtT6z5vKhFZyGAmyoUgmwX1aTfjMDmCjYfCwPX",
  "key3": "3fjJ8V9Vf9LA2t3VQDwziFDrTRBd73VHtHCcm6M7ZwsFreMwWmBqFHCyaZ4gQPvmseh352qrU64B5hFpAswFCwbs",
  "key4": "3ocEebBdgjErHusYF9HEkYcoMWt14eR9LJrwWu1P2tqqGuizkfK2ut5ni7rYxvew2TSf7LmuR7dToNMpxwCJ84Ui",
  "key5": "2QBbNpWcHYrbYwUZPqdWML9HNRUZEAUVKXCzBpQNHy56jdHACEGc6sJ2krPK2f7nRQ6xhWxztbf9JQXifb2zF3Zo",
  "key6": "4JG5g7mey2qvALPfXtcRiRbast5P6vVwQiXzQ9REQ6Yy6TGX7Vx5EKx6UQJrR4gEc4fqBFv7t5L1UbiGK5DwWVjS",
  "key7": "5B8uTwieuv8mbg2dVYArBU7KrcX8s5yq5tjTqx6NDmgHMYi9cyftQ4MRygoKap5XTbzne2msbdBaczrisaXCozhQ",
  "key8": "MDsDoS5C6oafHmRfwMycRCMHmjsv4sJMQ1dTuYtBLUetWKdh7ieogbAundU6QbTexyJ5kEwxp4yqkJvLpMd9Ltx",
  "key9": "49kcwq2y3GWPCe6mto3uusYZiywMfzDe7t5BQ3iELv26T41h1qYHBZcQiqmcD4tW2cCsxXoyf3FZASLS7PMDPJ8b",
  "key10": "vRdSLUqSaSXJszTgoiopQTGfURQ1T6UWiC9uWFBwVUnr5m5M7myoCP1MzfgJcNcZpvoYAtJatEBjYxU6JKFWtJT",
  "key11": "2CLddR2sJUtPS5bwix47LCuSyfY2YaSxJp2Vhan68XKrY9iz4AatDhkYM9VdSBHSgEBe4eMwQUr1t4q3aQjdfhEC",
  "key12": "3Xts6N6oHDizZvanHwQmkfh41NqRQ35jLiwVktjho13x8Yi4RVM18EWXLsYGhyfX6pQzcf3Tkwon3znZaLGdMMu3",
  "key13": "4RgeUuPgCkeKzx5hhw34iG6beTvYt9TnTUACCYSm6VnkqQGs7uHrD3KZ3pstxsR8BoJmvy46BtzLYk3AxbsLUNQT",
  "key14": "uUoMJobm83wWfXULsVPCByALT6GHQV62MRrMUSkgCGVKqMxJtCviUzCNt15DCr8hp8c4LE3MJ9Ku5FSLHxK5ebr",
  "key15": "4LzCFbeSunnu3vtiXnJvP83SYpMXCDkzzEVNkcoXX3zDHwK7iQtenrnmaFEuKk8Lpami5AqALfci7LcxZCDTD5yx",
  "key16": "3mxyRLn51R611ZC272RtMukQkxVqe7VPoktCWkcSZ138DMymwp4jaWm5L3Jq7YAbXPQU1Jx2TKEpbL8RVLnzdQXG",
  "key17": "2NoKc3PcCjzZwmUwS8eQrz7zRw5FTKPCps32Ucb8wKwRDNYbE7y5TGZhTYoVDuL7qvzJwCaZ14eQakfvb8Bbf4k",
  "key18": "2Vavw2H6Xuni3PZpDkqt2h3RT88VPk7JNTYjrzUaEzW4Zza7fVoZHzWZpPar47n28A2UrY7JDfDmgC4ejmUREkGR",
  "key19": "4TXHiBVEP87ScujQdAYk517VGg6EWZ92uHhM2zxKpwAFN951Z3ZZKGp1ELXM3rx4g2a5V1dpCRbQnkGCfDRdqyG7",
  "key20": "2qYpcaiHT8uiur1A1K3T6tWXJbms6zYJmFztVvKN1GnNpzHNA5uyFb72wNf5K9sRvD6sKkPASTvwjBm9WaJAKz9S",
  "key21": "2ff9ppHjiQKtxdK2K6ZwmRR1xL6T9WoJvWfkjmFWALMFAW4u4V3ycvxviTo193RNqt7Q5tZPYiogBU3gESSqvdwU",
  "key22": "Ets5efeYhm3mEYSH8CSujhwow2rWz5TgCWRa3848KpctEgv6CVSbDzCpPQRE1qGLqSPLJQJKMWD3oJq4DPoPde6",
  "key23": "3NSdqddeWVu5P2wRnCyvb5hd34wcCsYxkvnsh9iQzfjQfQVijNcdQkR2jxSXkDjZ3H4yRATsfEnn5rYesomLsJhb",
  "key24": "3diQaw3SszdU22hwCN4GDiT2AdDZuzf7P8a3kPDVUCyCa7ELwgyUP8MACnyrq7qLNP9o2ZCZuE99qqTwhUZZmDXu",
  "key25": "4dyU94wvDRBQPmhw4RUFZancrrETR9cZ9ZxujRXrbvn75zvRNVFS4R4etR75p6hGn8AAjQuXGSrHpp7hiMefqGbi",
  "key26": "4Nhu7bQ1YUc1y2XUYEeQJGtVydPYVxbw79mFDNMapiWrcrpR7Ap5mmqLWVSmUu7XR5dVj7fR9pFETk3s2kRuEkeQ",
  "key27": "bX6GR1WbvNqW3Dj6MiTcEf5CPPcN2GE5XZTDqHhG3NLff4XhA79YVeQNQnFPYM9KN3XHaqJdtkrbUy6hpfcdZjY",
  "key28": "4PmU5omF5t9nWMPCfAEQDbqbrCtktHnrcvHUbG7Yeru5cgo4tHQXwCAYnAu7qFMLE9GnFYrfjDuCTU83TJmVmF9e"
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
