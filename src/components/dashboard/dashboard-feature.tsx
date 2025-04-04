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
    "32UZCuBCfHAkcaojmQrYcy9rFAkHe7vYZqm3B3JQgVMf5UgS8fvuRop7n1JEbMU52z6LLpDcmd2eAC6eG63k77Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MqJ1mVGFTg2ka7p36tijHEkkmghEVv9e4FrdNQnnQLJZ1UhTor2ewcEi98VqosJW9WqMjejkrG4zHJyHJ9HqtbL",
  "key1": "3htrMNJizPJxc6XcRrPkA4zwPUVj3cqnPUNhQBegfkqRbkF61g6uh8kneyggQwaU6ak2PqBB7ytqb6saZ23kqk91",
  "key2": "7AZERC1QpvmJKZTvNFzpeubmKUqR1By6DPCxmBgju4rSPwXcQhJutpi1aSQXzkg9adcqiC8aptbMZvXCpMpoLmf",
  "key3": "2zQMfK7w6b7RAySkJ2oEfj4PF2nPAkxkJcgaKeH4KsM3iYEVWRbz2yZZKPUUZSsGdUtztcJhNYMupyWAHcA4tqaR",
  "key4": "21awDe7QhW9ogMwmvUJnkyGtx4xYedHduVJH6UdVozqd5ZYeNDtFtqBUabkNC2X4NdVjWTxZnS5dmQvBhi6WYsBG",
  "key5": "3tuwM1ZHoUKFDJod4vcq6vE6LRwfabEoRCvcmC5CEUasANPovfPnmJLQEvA74LosJY7QNQ5vfqErvJYRVsJCk1uB",
  "key6": "zrAFcYjeEh6zXfwDFPa5aFq6JsuURpiczYCoXxGjBhiVHwxa6FhLNxSrvo8hbmEL45LgnWJNAnkGaUjTFPy4oTH",
  "key7": "2WGRTSZZj1923mzKL53TBMA5iREqAp2RG5KgznHm1sQq97K2v7dYJa2aBwSrhJ36YcmYb91Aq6RGfwcimC6YyUL",
  "key8": "21Dxiox9tFgP798sb1EKx4AV2mRh8KtvdM8yMmcnNm13p7Q7SEDhKD8gF959H3i4bgWFWHiK74EW3deRAKf8dur5",
  "key9": "5DazSDugR3HYtHrNwy54Aw4StvYSPBZTqDPqgM1RmPZyHCdVJfPzJKuT7rCzPQ31WQt1v8mXHdoNNUHN8ntpL5g4",
  "key10": "2vi2QMp3WZ4CK7NYTHmrchGy5o76xKCAnbMB8zLgvmHdak1ENxPJ7kpRqEWUAXAPrUj5sTpFxaeyybiwFFUs516E",
  "key11": "3w4oP6uh6zHDSqBVuHLMfcxwQdEZqdjVWxsUivt9LPnYF2QHLitUcz2uawaqm9Vrkn4ADZAJrprp9vy6w4iYoT4m",
  "key12": "3feVV9mNca9nsP1yrnEa5cZ9qG4Cq2z1iwhPV1hwgpCmjmUAns6shdqxUxakrjng3AYmezgdp3fESKnoc8TFJBPv",
  "key13": "5uPmZmpybVDbmHX1Kaha9sHDyKxKpEDNESLVfArAJbQed41W5K9xk64xn6R6ereswgeDUG5Pz5NjGvN5bUGhYAqY",
  "key14": "3fv7PE14TtPefnZ4LZEAPzGWBnvjDWnbvU6KXEYreCb1NqGd3n98mfb8wwREkcMFQwKnVwsAr9Xp2sYPcPdktAnU",
  "key15": "5PVSsXcE7v4tRpUKvHwRSk1N934Jx6e4BCT1RSdSSnVkZk7T1pRP2tZVJ31tuPur1T4KQViK1piZAtxEHurddH45",
  "key16": "65UHcVV2jETsziYuKzaAdX8NM4brrLBr98xD76CQDTv7dNGb85KCeUvnczq2oHxZs2ESUVbheDogcQRP8yVn8NJv",
  "key17": "bZvnqH8n8hpQHBmKNJVfvZPQEhB8GDBueM9nJXtkuF3V3cpefijd52uQzxKgXwxYskXeLDwLwcJQt6LFTkfbw1J",
  "key18": "5xQnYbEC2LyrvLBkQPkcP2EDc8FLTUD6Qwyk6dDoKtuR79hK9Tb4soU6WoGLDBs36ucLVwkyQ8VtDkjsFD1jhfXq",
  "key19": "293zrBJRkCVWNZjRZfUEwfbCsTZNXpDFzmo9JzGWW66NefwBn59vGweZqCvPvGWTLEVXcaCSd9DE4Roa6QQ5Hr6S",
  "key20": "9BLdiw5GpxSPSuGkcYvNMg4vTQmdqosV32G6LjDsAQz1AzXu6MSjw2vjFSSYdethS7wY7oCLdtn3cPzYhyWgbgc",
  "key21": "4c9krrEVrWNofncHYmVCiC7MXbfXR5MRyoPRJgcJ6dC1pURyaczRksTM2vHKUK9kZoyWBiADY2MFrVmTknVwTvfp",
  "key22": "4rmx4Nfdjb2JZndqNo6se21woAihboBpofR1NzAnjPm722MDDVBMST26CCPXd9ZthchWbZtAGZF6EaUxDaQR4UMC",
  "key23": "3UseMNzEGdjvtvUXBgyRrAsGQfxTvrEeZfwe2qJDwPc4orzpeeNqS7M9VQzCbHF2kUwJphVJacN2yKN4ng6Drj2X",
  "key24": "4cCw65aBbBMwMXRdsPDJV8WiNHJNjFW5HpLj4yuqFjYowrVYzUQ4C6trLhEcerC3DjG1CUQ2cCrbzAtKk9pu6x8K",
  "key25": "5yGjkWEDsPrTLpt8j67cbwWLL9yJgHRa2W82GvzLQBFZ826fgqmy3PXU8o4AT3pFSTNrBR6WuRSL3vtFiimH8HmW",
  "key26": "2Z2DfaXKSMoCGA9Rdq6UT8giyWjxJhe2kRnBYgM2WQCxs5gjKK4RmenmHAvTKJyY3D6suon72LWRoLmsAQL7Ne8H",
  "key27": "2U8kNiprVMgbp8u6nNbCwRQi9qqidNeisGaCuqBRMTUS7v48HMzjbo3dU26D4M6jTE9pLyncn91eFn4KAWC2N8CT",
  "key28": "3E2dEnFGPdmjwhGm9zzgyUXnvnbAirus1WAyGBgnGx5FxPEizNbmr3S9RyoaP2wNygGKreEXUxh8CgxphJ9r4Z5p",
  "key29": "3qZiAy6jC7gnY7UPKDLFZMyh8g6Ry75w1XThvz3hzHChAw9wRBL7JSj3uwgZhoPPMLRaJpcmVXcrx14S7jTYjCvE",
  "key30": "4wEcZHU81fP4scA5LomxZZqL6o38ARqD3wS4DCnNqN6XUbDx5ErVKbyHxdFhTW5dJYjNWMAAjtJ5sqJSKzVhbqXq",
  "key31": "2y7iExQLWVV8Eu5UiKLgGZdFGhJ2gG7Rd3PvVNPA3gmoBhJS3ZkFFGKh51ppFF4vENzYfv3Laens6kg8LxYZYaW3",
  "key32": "5wFmEkbqi36Wtk96H21ZLP4zpeq61BdP5McEeFUCHKQy1UjiqGH5AL83JbrnHWjtZn9wE1RNMsPCCoghgkkkkTR1",
  "key33": "Ljh8j3rXgtVwPiqDZbkVwiLUNzQiz6EtLti8wX56GVx9WhZxKkNdAtt3xPfJWTHsy9jVwAZn9KnDheAXVf13qyz",
  "key34": "2mDAVfCH8KzGKm9oy45APMYeBXMsQNQUjUwEVwpy7Rh54KqoH543RummsYt6kCj8d1qUrYBtGbRCUzvgyn4dbucJ",
  "key35": "2c9yhbBKDygypf4Fe82P4skzG5GASyTDmm6XoBTJ22foaPg7Yp5URQgTyNV9amGwi88dJ2HzVfT2LUZjmmdJR2nR",
  "key36": "34cdtsdQu9p5GYtsJ8sDmgANpv6XjUPSM7XZsPSVVLdpTVu7LxTsXAwd4a1aFaMwpgqCqA2vAiztmggeTgCBoN8H",
  "key37": "4S2stctid4VkY3GVRVZxWDmb8xgNi5YRkaQMzakSiWbZ22Rffd7nKEHHQkXbV2Te9AMS6H5KYukJ39ETw2VCELRZ"
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
