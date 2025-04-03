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
    "3yg22Va5wzoUg9XZj2Fx4b2ytD4316VRKGRQ3i93r6ZVyZXY9rPdX9CmQGfXxg5i7EsVuPsMj3WdUqFX83xbKhc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYtsVFR4CRqJs17mRHBoKUDEeJSj6BjvBKGaQc2rVi5huZY8rY9pxwRrp1cbQJjfyoBjaqeVioy3uYJikdRepDd",
  "key1": "3g7vGtrpsYhVooF5FHDeFvEgTy4ffdDete77q8cDpnm8HmEcR8Lh8twhy7LUniXpvdG4pum4XvarSLjAPWVVH8eM",
  "key2": "665rPJ31xQQXXotpMVqRuuPQ8W2k7tCGg4yCMVDrgeMvjMqkwUAJT29Tqq1DzmnZmPmdeemxXqk5TcZ2FT8414Pn",
  "key3": "5zBBHiD1ivAFZpqKjrvDLqtgjYvq9qoK4ytejNyxw7BRTS5ZWqAKyKA5972dynXfnwozf7rEniV3EkCHGpYd1Ard",
  "key4": "5mGfVNV7v5x1UAeZfHWbrbRtPUGo1SfxujFGnA45R6kHk9hEAYUfkmKHeX9ZVPSPQfe4nVMCk9q61mxGyPX9MvY5",
  "key5": "3Am4AeJGT959S4rSSVShf2FMjhNXKzWVw93krvS7yHckrv8JvHV3W7uGm56FaMA51To9pnG2mSsvW4CfZUGbuvpb",
  "key6": "2vgUbCSUdG7Z67mSPgrbo9PtwfA66qdVgoE46d6KQrfQN1t1U3c8fsepbdH1BxSM5MQaBaLKPdAKbjpw7DYrWwEk",
  "key7": "21nJLN3S5AbbFUuVPLkPHEVqwSHqzkXGapLyri1A1knNoneQ2jG8cHKiTcMH2eTHnTYTRHAZ63c57RH9h6oQLKHs",
  "key8": "4YGwGfGTxKJTMRDUhx1j4KXLynqaDJJejZq9wmM7QyJWnRDE3Y4mkv5PuimmdRqfv6HVQPoBEEWV2iitwXaXqpVQ",
  "key9": "4iYf7ex3usL43WMCupRQFSL5V6vnnepNP6FYGb4168cLkwkDp1r9cjrzpffu3PduEVT6d6ZUGoN9j6RhMANpr3FE",
  "key10": "AU9x8bbXio1ozvmTSscxvPF7nD8ntFHXMucm39G54MEBLYnNtDauvLoKgp4tQrcM5oDspNjFZx7Q71xw1MU1aCb",
  "key11": "KzEg9vQwpnhr49tYdN9VkRLTy3fmeg22TdKF1qj6xpPAioXf3NRpLYUMajBtmH8q2aR8pFJ9x3bvpjprXgeoA62",
  "key12": "UpxQoxX9sMqeiGRTbsD2tFNLpfghPozZYsWj8XuTWbUtLhi89vBsuTG3aHkZFZ8Toz3Fc2n3jmpZayZXUrhZq7u",
  "key13": "56bix7ntUqBdMTZ9gNXvEBPAuDMuRr9pbzVThUVqKuZQruLzCSBfoZkaqUAAyKdwNKVKfXEGmktjWTCZN2gEauDN",
  "key14": "2C6EGiXaGVgQwCQw13qVs5BizyF2SdDPv6UEQayUef9Z3oSjjaNDnQKKxZrJ2eBcnUTP1fpZJWpwZ9Kj6dYkvrrz",
  "key15": "3AWmC6jW6nKsoX8tVJfTEuoxK3d9CzJaTMU2qR5sHH8o6NZ5AuvpP7DXvHDjLoHB75kKKEAPZ7dwHFdYC3vH4Teu",
  "key16": "2xRAxGXZhJHKjraLgR5KwugTSDCvFQStJnjiHzCAFHBZxbzA7xemCTc1HiauAuWsGgNKVEoMxYqDDsEboMYX5XZ5",
  "key17": "2QbDzSHk5uZF6MBVMWznV3NXrchDZmoUSDyiyy6fPuVkTEXCNNLHaTS4YYQWTy7qnkshj2197NGbighD6NYeH3SZ",
  "key18": "2zHomLrbf8Gujpkj1caQqo9xcemtua4b7dS4Mfbc4PEEZsdyq1yjPxxLtH1mwb8z4SWkTHHwFwnQ9Z3tGNpCQudW",
  "key19": "41RLNpnLLw2agqqowQ18A3zEur3af3xVonFbQci6LTqfh8PxVMJ6G6UiKzM4iQ46tjzgAZqiyqHGgp6PzrR4M1rR",
  "key20": "3KuJyFa8S87WiceYQ1yFH9SuUMySAxxCbJK6EMDTdCT8tpnUqQ2Wbsp8guzU8umbmE7f3t8FDGSc8TAnyhBdCoDy",
  "key21": "5QXSfio23uwyXXDNZ8zWxSvH1kk5VC5sRzhmrK9KNP4C3mopWoEC9QuR3EYb9qAq2gVK2y69KdZjpvVzJ4XGnRSG",
  "key22": "GssbkutnRM8BxEaj52Rxe3YEgthMnVP6ARsXbb4T3SNw1evy22iYJiq2GSW21Kmg5jv143TGcQ73pAeinHcCE1x",
  "key23": "3sG3LjGMtJnKtqUGBEBPLpu5h23wCep597mw3FEeN5ioirzLPNZTjoGj3V6BENYpSpPTMrWG9fpboLTqk9rTnTRC",
  "key24": "3ruSKSnEcP4XrkmvALxU3StkQBoNHsfjnskQhTTbdNkqn7b5E5pQYpxgZkmNHryiqNjxZ4EQaCyVssEmEjfTt7ai",
  "key25": "wJ1MMu5Dkyf5QziQJetX2eEtuaNVNsQDYLGHYWD4wxjWxNm85xyFf6waBFg7ovXgiBMWM6Vs6pzebAR9zhAzXUj",
  "key26": "7uftkj7TfUfp3ygxtSKWzYpBgK2uQTVKcWaE47VYhWiBhT1pfFn31B1LMTutLkYZVeG8csmqF6YETAcVUCJqKPq",
  "key27": "3f5XqU1aqkJ6xszRhkVr5MP77mEwXKXa2wVzNpcyuvUaAbEcrbY81vjXErKGrSi5UCiMFL8PCN6AJd3sWVRVVchp",
  "key28": "9LMN54ZfQLzZZK4TgN6AERQ7K5RdUfWVfAuVLkEowKuPu98BzdNicBS6fMNJhzLLaM8UccHkWzPjDFJZbixo4eN",
  "key29": "4YgRi42rD5oE2KaRyyzA6msT3QxyP9DpKXGM1G2HKvjCJmDK94GMCbh5i7DLCzLUMCYodpcJMoQgjmMpHGgR9DwN",
  "key30": "4zhzpkp3Kfri46g782T7rTdQ9Y3GQsEYCJfFTXp4ZPBk5u3j2xdz4fUdzeEWoEd3FsGAhuHh3EQm3NWAX3ZQ66hU",
  "key31": "44LC5gXztzKmJJJiaLGWHVACnaL7BZxCrttVe7UFcrEVMCAXYzXjVXPK81hReZ7ffKj64dbUWDyhKduM72TTYGd5",
  "key32": "2n1H6FTm3gs73EPBFaBMiDvZ42CTXVzFHYXrp645vTQa1n8TzZGpiDVdoDZHVo3bJWP5bqPFEtigDcK5nExBHjq3",
  "key33": "5ZuCsCRwN9UaWyHiyQmY7VF2CLx4GpXJsbeAvtrv3uFAxUjPPcLBPcSWvj4Ruf3skPHo1ftgrNUADXRfhuf4n1ms",
  "key34": "3EVYYxgDGNByk9o4cjwrMF13j3HP82XXqmcbDvYMjPxiC73RtwFdKs32q7gBhYjD4zK6ZEMZzVKQ4V6UxL6kGwj4",
  "key35": "3hRir6fXXVNrqG6v3sKw4r8jZEFMZYoajiStVv6C2o8phcNiGcR1GZiDUeZEdN5nNfJVjp6tWZuLVtuhAyey839Q",
  "key36": "5uLJbXdNS6ADLt3gN5UnMMQZxvrxkReABT72VYY4bmAvuEvzpoC9U2sFeZm1bN2z2N2MXTvcQt8y26W2NjNS9J1X",
  "key37": "4C3mswe7ogKvvPKDcE74SqmYjCrcRQYU8baUV8ysQPDZBnxz8ARD7HAQ1WPePtAx2apFSiV9HHiwNYHWQ884i3V6",
  "key38": "4uFrv1xhhqTK58qwgvpJsMosVbdFU2sUYs4Fe9yfv7NEeEMEDoTNM3aMsLakfvNqpxQbPkE7vFy7zpbKfgrHhEvB",
  "key39": "5nxVnTHXqeCoexkgk3JSxt5TFsp9wv9u263y5tXRzzzTeHiitY1vzp6oKszdZVs6k3zmWg5hQPSpDGdqr9CwaEPJ",
  "key40": "46L7fUFjKGijUjBjTCNzfaXiSNQ9WB7uLZZGHB3kBe1ZVeqtbbsSM7ogB9FD2JsdAVMsBPxASz9deVXbk2bPnKrR",
  "key41": "LT8JnJW331SidNfx6yZGcwcp7qLnJsGGVy4Hqwz6BKv8ANAJBWrx7PMR3ZtgLLxrjmYuMFUAkBfJXsa4AsBACjP",
  "key42": "3Fov9GGT5gtVxiN1At1GJY1WMySPhJ6dnPAW4Ks7ehJX2Fu2kFL1f2B4n21EavMbLYL5BgQWqTq6ZiZtYvSZ7WLb",
  "key43": "314Qykcbi4hqxzFNNw4wrTwA9grafJ87KXzjBPwh9Ucjt2jviCQttTVmWe2dMsCDFXAepnZcZWm23asKRt1QcwuX",
  "key44": "5ENdkgE2X6XaQyXvRg8y7XGa5WJ9CxZEJcsYSsFHknmM81tkewXJVMANLcjHdAxmpAERhSHCGwBSopq3iapGywf6",
  "key45": "2WXmKHVxjs5zFdggf9WWXFNxjk6kWTQVB7WTFrMKWYmRpWjzZA7KVdHZaSYz7PVGpUnYPoFUoX4pcfYd7FsZVtj6",
  "key46": "yBAsvRXpzGNLRhT1BCeAuKLtQiNgs7PDwXXphCR4vSTXb2DsaYBacDKGTKAxe46oJeih2vzpNKzTRRxfKdqpZAH",
  "key47": "4DFWXTronX2c73HHmNoUSQg1YuSAxiBRdWQfcCA6QXpBKp5Kt37v5HTjiPVq216KBbrS3xo1YRE5wszw2D3p9xVP"
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
