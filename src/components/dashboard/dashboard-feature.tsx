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
    "2oWZMP8gu8W377hRo7ovFLU7zZ8wvx3hbziFsHGECxybgVQ4p1kSsk6AK9Kg7ZSEjziRnAvpDTgW46B8LopsQuHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXc4YRERp3DFbbQdEZZCgUdyicMMzmj7M2E5dc2mEbw6ea5dhJgLoMCAndqzvdVE8GwEddMe1FBuC5YUhpcGq6w",
  "key1": "abMWz1YUEfj9UADV36QjuZxKQJGcNfsavuf86ihV4wH2S6EiZtwf66qK6zQKDYgfqCSgAr8S8wcGS67FX19G87v",
  "key2": "5HDGW1wkJLc7zuQAMTAjscZq4HSo9bykJ9xfnpgVS7cU4GZF5ZmhPTwWLA94g5h844Zru1p2ho9BvQ6TViRHwt7T",
  "key3": "3rUMV1Bo3yL2ZHZL1ucZTocJKWDEZnGEqZkMtk6PumhAwEdAh8dCHiLva6EtjExJNJPNuxHgEs3BNGUyWU3rkcL7",
  "key4": "4zDHtrFnWkAPHwZ36xF9HosEQQRDGKNcZY4zUHt76Af5WbAbprSaEEzQHTNWPdVG18JsmwtD4cbvdmMbph9n1Fq6",
  "key5": "4TpNMzXuEpg9XcQBjphwFCpyoNP9B4Re7uUvbYYie18GaGEJUeskSk9Sj4sthJ5Kn1an8cxuuStHP7RE8WnXTHmG",
  "key6": "rRaeQFJYQk8Zm2SUHHHhaCa5bjF5uAur8Vd6Pa17nZtaHVryxHBLGTbbxp9BhtHSmmJvdYc93SmKLQNfKY7PR7h",
  "key7": "59sJuWNtK71bD3Sm3xYC1fYnRCGdoayKTDRnwhtDAxEqLUCV7fec3EqYCs9DSekHoKKUMmxkCxDgh3fvF7vsD9pv",
  "key8": "2zahrPFYZBLq8idHC3DFixjsFgpB69Tx2oVhS9F2QmS4FrB3X64TRAnYJrUb32roXY2vQ8RDsqG2CpiiPpS5Rr9B",
  "key9": "5ZdP9b5UjgsXbUQbb1tMUF4nyD3h1mww93LuZA3nH1XZZGwmqzwck36tZZNCFUor2YEBq6PytKeE5Cv5ropSGTnz",
  "key10": "2U4AEr9VBYo3bq3YujHFBz72xm3a6ecwmWYVMF1X1PmEXpeomCc49ADyvbexgw8mqG5athu1hwvvgXd7JQPZdLGw",
  "key11": "59e2HNNqxP2tQrBNbBJY6kb1vxtefmRqBwER8C7UwUjULqjEYpNLBbLtYCud3LxmUcHd4nuATy13qgabnMAKPthN",
  "key12": "3UZkABRfKocEYe1SwT4qsavsZLsMVPiZGheWydevf4BSgTqAj6BC1jTzZhnax4mDXeb6TbzxymFnpVwj56BDrorq",
  "key13": "2rTfurdRaqx3MtwreK5tRRwWirz3WwzBJPuk5s5n1baVBhEyPhqWDNudmGSubcVee8ys9kcVM2KiJFdq5ZtebRTd",
  "key14": "5MEkE44WtmULm1toKcWWsmmYrqYmk26VBamZzwo8g3d12Gc7ggZp24tNW2rkaZF1nKMtWtgYxLrSWSLq6USmA4zy",
  "key15": "5YGFk4gdoU4FpooMGficNdw7Y4M1MU3raA1ETR8SGgYDWnnSY8hmTa4rMGALGtaU7nsCEQScxKX7Hq16NCBFkjRb",
  "key16": "5A3c5DbcLLruq5w4zeMNy2BKYN6w4kr3c6agGiZNYSm5qszmskgPbbbLxCDGyz9G6GmnCGZJHsVLLHE5zpYebfX1",
  "key17": "4HxT2d6LVatL5v3EYyANsZbcgZZqZXf5NotU931fpWRWjcSPuBszxfajruxGz13y8sWULfsX53RryEjSJ2K9fKji",
  "key18": "22PapxBMv6FYa4nqef1pUAC56BoBB3eZ36Bcoqe1piHYKSniRTTNG4MDC6EUmLdWQv8uXqjxyWsHMsLPr4cMG3LD",
  "key19": "yMZ8J7qG21iVEANrTUVeTKhjKLoFYAeq5FeL3apcWphgZQHBCAHb7np4LXyhvGG8tPrfzAwGrFXXEjWsK8tupiK",
  "key20": "4DsDhvyHz98jJsEHiPm3M1LFMUA7MU2L7smYMChZ8FpHMtMYW42SUaAnGvfBHQJJ8cpHCe6FwnLSp1xAwKDBhKcJ",
  "key21": "44ZejdgcK3Buphpgh8BGYiFqAavxnEMmtrxLF8fkp9KvKyVQfiASoYhBJQq7FoCuuvXsWHxqGt1cuzQcB3v4FZbg",
  "key22": "G1cxP66JWYekvSn3hCdsBFiRLYrr7TqqpYeffgfpJXaYKqsc3sdRV6XhVf2tc2PyWbm4jgRehCZdE4MLg4HXq6h",
  "key23": "3yssJXMdwoiUAETeGjc9V5hhyj4gA96Cz3P1vN4ZLwP1FmwF4rUYV5sTprY9u9x5csYmqoAdmunfkfKAf53ptb3T",
  "key24": "HK7ynMmu2xDKeVE4WUpfcZgSxxRnhNR2ub9biNqCbCTMrmMwT7WNk8K185EKndmBLeXpUBPbyrG1ongdFKbfxMU",
  "key25": "3skJnQ7Yd6f2Kh7yN3Y6ncduaTi8RgfofRSfWzWvNzVPnbbxBbMiCfRyKEGdAtiKzfcV9VQQ7Dh6x2HbAjPHraBN",
  "key26": "5HSwch4zEtiUTx6vGQ12EzouZzXx6WexHUMjqQodiuXY3xPGpqw4S7juimZ7w4TdTc3RdFvmwsHT85e8boUAfUkw",
  "key27": "5efD4sPR2W8fXegLuHVDZPfsM8KaPmbY1mzjFtNuzp5cfgmMjzgmK4EAhJqaWbtfWNjPnXrQzqp2ax4pZ3VEuh5e",
  "key28": "vtyNTBSxToTPPHXH8eorQxV5GpwhJEGtqg8QwQDCCQp3Rcfm1gQCWJpk9qU7Vracio1FxpaH2JrSDEiPEh52wZe",
  "key29": "2NeghstMyhkBiaCseV8exLxMUoHXzbr1p7h8FU9LNiGKi9F5fDzambuYQMvEGJKC3nFEKDa9zwd7GjUw4MasTjDz",
  "key30": "26AZF1xJibB9B86ZiGGNksXYGkQGSiUmArGobtcx2dKBSiok6cMrpyTUxpY6w9DMHyGCKPtTchAC3o7jmER66YMP",
  "key31": "3VBvZgenq3EfkMhAzdQq8opHNBAzfYNHuq4q6QyCAQdLvCeZQWEMyeqn8wB5KQLNHEm37KgQDYrs89z28TXe5JS6",
  "key32": "43Pue6wqvWnSaoQcoMqLj5uLrm8cWpP4CjcXutEzBeHsznfHthMGQxh1x83DmCo8ePQR3AD2RFmfL9S9s3HfudGJ"
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
