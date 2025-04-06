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
    "4FThzRwvQga9sTzTuA9W5XDywCNqSRMEUdfBmZ6kDD5313JjbcLNBqBRqEhMR9crodrfmWuTxJGTdrXd8sYajYoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zLYc7FTPGGdk6FLruMu93Gc6Jk5KERwuPL48Y5Q3avKdZkM6WC6pVsgBGDi5MKKsBBVt92VjKj88GhXmLz25Ltg",
  "key1": "5HsHyK4zmmzR3RdbNvY1631Zy5PYPS55WrEeFCeFn79qJqwLwGmqNpwssFPwPx1DsiLTF2axxcKVqJwopHLyCbXh",
  "key2": "4oTcMV3aq6Ett7mHSqkrGUqkHiNfPs5naVQqTzR19emMAZfXGQe82v7YgADTSpWrskoppYCu6NTfDyxEq26y3tEj",
  "key3": "Cc3MEkEnH1Fxde31HTgwt3LQ7RKa4eSN5vANr3m235RqvDwQVE2wycnQKwzTiNpgLzVN3X4irt7ZEKSutfFiitQ",
  "key4": "ACakgMbqcjBZtvNbAY47arQ6zEtPsCppdWTZhKZoyn5trKCMj9Epdovds1Z577rCgDcEm36j2deev5XYBzJ316A",
  "key5": "2rPduNHMWZ4nNVNNgChmZPGLk6R4tUuHMLsT9dRNzKPhHvJ1KwDQ54or68xfURRK4gUYSKGVCrJWjkZBwUtpgivi",
  "key6": "3YaooWNJfK3o4U4FNuZz4sXtirEx5tTuyuBdo5Mu8xvH4eCqpM8YXq1dQsmsbRdC3mSqiC2YndpzqZjCLWXy2Cpp",
  "key7": "5JMTvtwwpCuvAqB4mLvdzqcAngDXV2KSiJdxV9us6oMDt7717d18v6Tq4MLPixXiBazXwaboWJWmhyGi1Z1kkdLQ",
  "key8": "QdCUDjsaA9EWdtRGMKad2SZ4QFp1tGHnF3N86WkDAkkpMBCM4mobMKpG8PPa6sn72ZhiQfDiKWiEyAfgP15mF1G",
  "key9": "3m2UMGCe931C7hSe6Eyn47VdKCr9bb7rRn4oChYzyvy3KuTQ52vSVASJ7r1eDLKiMiMiYt6Tczzc7vU6eyGbHGm2",
  "key10": "4tZGYL5Px2ZAEoHp8frUPSq3qxYLDW3T1Q81JTaRRTqd2udyS4ZBzEJLbGQXYyECNgmWTj9NkmFDaVhonkF7QVTy",
  "key11": "4STH4uGNWbMLRPWQViPf9rkZYMrApNCS12NQPtJhXJyo9MmEH1vXXeTCVfDR8X6yXNazX3hCyKKMEMHHCw7c5nGV",
  "key12": "3Asgw4qjXTymzHpN3ToKekPCR9BGED3KCWyqTSdo62Zq334JbGdFBhEj5tgns2BZ9dRL3PtDtKwQotHVf6eZmq48",
  "key13": "4kcNJkuSVvw29Nha15eAgAmd3C1d5178Tch5eYPegd7cob5pDWxuvM8nTAzfj5xBNaMyqRb7dphX417AXhBuaajo",
  "key14": "2e2ydWqYJwFfYo9QJuBJHvYDQu82mQKpZgMrmSVwP9VMDuHs3S7ysWP88LfbRAz1E8ByLvDYyJBPz14xdYYnUHy8",
  "key15": "2j7JxzaUVwiKgXZorr2dHJn2mgZhrs3xnmwGM2Dcbgnsu5WBwyGGXCqnevjqtNTQKmHM4nZd1rYhjW82dTS2HcJM",
  "key16": "Yz85qqkcJakstsMzQnNN9hr6eJfyaGjpCLsfHdB2VjoFddTBitPXPbwLTKsN1RuprbRAMi8bZbBNK29qxUV38ZP",
  "key17": "34W6dXmapcRM7BvW8NYBHKcYQBhzGByqNa4X8FZqWHhJHNetyCYKF4fke9GdBsN7hG3fCaC9YxEBbGEzQndztyAG",
  "key18": "37sSE3gHhDdV6RitdeeWdBZxb88iyJhTAqfAU6gZvrJYhrf3hELwGKLhWkYa5JeR5RJBos2BMB2G4hZWYESWXP4r",
  "key19": "65uwKsW9bHusWVfppNjcZzConCkRi2m6UbmYY6WHzeGemXSHELVgBVokEtEN6fuHQwjLtTPLmTq3XzvuAEo71Top",
  "key20": "66cQvU6RBj6ojAF2MaqapdgvNwbqUY42EfoFGNAZshmA6Ltvyfm6puL83gEnQwep2Y9qqrn5eKchmTBMkzNidDLN",
  "key21": "5D8Tv145MJFSfdWexqpuMifGMJkETPNJV3wiWXgLmoZLy3o2U3V8TzgwFdeRT1v1Eza9DuPLid3aNLn7fdoSLeZ6",
  "key22": "4D8zbmUmZGvfwGYfWo3a2TK883VkFbXyhudYPUV7Cjk9yr8dEMQqLqjHZoygo4c3bgg7anRqF3c6rZnp5aY8a5Nu",
  "key23": "4GpyBgrjnWSRHpCHDKMW2E55c2HCpxzFPFvvdhUnQ9oRTuEj8rF68SBwC8vXqe2VVrR8MCiTbAbcUo9eeChaeaYX",
  "key24": "3HstQqKjhLNb4it81RGAmymxKZ5FM8UhYzikbpohZVr4d5UuQNTWHWqoWAjs1a3KKiZVxJ8U5pnKjRnVovE9ASHc",
  "key25": "618zAASqDmgQT5zwiRbSsXiMS8Y71HBchHCXn82g8kCusKqynp69eAp6PXQiYKU8EfKtXEyvjfUrMDzzbzpHpb7Y",
  "key26": "65V8xqnqPq2Wsmfst5ANUiuBFoxdPDrV5Moc9omShcX4baM4RApf1kd5MNLfKUV8DrGJpmKQ1Wt6Gce6PLgTvbsP",
  "key27": "28PZCbA115DWzacZSGE1xesnsR1xSjK5nmmvAUHbPJRbKfKgoHckWTHmdE3xx9TYfkHxTbjxUMcSYEa38h8WqBri",
  "key28": "2Ps8qghH6dQfUAma7dStkFoj748wDqE6kVVame6dKkkWhdxj2G4yN7YckSx5mzEcwrJBgQQyQdW5SATjUeCFrGGq",
  "key29": "2AS1jVNxfEUnGkGg6Spiu6z9We3a7BibaEodvFLHCPFPnnKmUb4p4PQhf7eTTJUYBZgcSuKij19G4fr7qVPxAyRq",
  "key30": "tTbrpx256GrkpdZBrTN2vw6f9Ahb2DF7bVnGC5VX1AwSuEikrXMuQpBaX9NC5pEwCBPEwCuRL9VUModptiA4FiL",
  "key31": "28kYHwWzvJPWKGY6o5kwm5jypsrkPqf7t5rDi5VL9rNDgR6pcm6yJF4NFLh5YwiYqCsp93hWyPYcoFsSwPh7i5ak",
  "key32": "2QWukve192UnD44Cc9PCoCcnNSo9gzKidjPdUxhin4zxfTxJX2MPpm8JQaYG9E1628spXbFFiBGEacxqej7KvH1Q",
  "key33": "XLJdahMxPSLiuotueC6nPhpcRhSjLcDbA5TED2v4vsZS6NxpJexroK4FjomSa9ffks9njXLwfNaWT18YnWVyDQh",
  "key34": "4i1akztsn6pLi3foT5vcLwYVcoAXw62YNPk3vQyJ1GKsDBYEqxDStqPJ55Lt17jhqL4hJsnqNdww5nNdaE9F3Wwr",
  "key35": "3NQiJQXkz8hfaWYak7jPGTkAbBL4G7M9cxEp9GBj7hUzmK1SAeeCaF7NUydFnpWEEwK4gBtNi69ad6Uy3Ljcu856",
  "key36": "5JyLSqXhfTu5dNYjBDApUkPzienLet6FtGCxvjYSmnnYMsmcwGzuR6ByzWCr9AQ8UqAKLkUbsS1F7cxf4fQ1YGvG",
  "key37": "5ctHL5p88yg2fG6M4yJcv3jUmvsEDE4CJ87YdruxDSYoEzoXsKyJEqCHZYj4qzRtvXsEFDzx5LL5BXRWt4kr8upE",
  "key38": "2KBmbzmEAJ8ut1GE5j9hP9qw3FN8SJJuYKknVjqiNS4KRUQZ5w91WZtZNG3izZFtygpaUx8RrDDDH5f6DbFh1Wej",
  "key39": "aTvKXYyBnPM1DbRKP4QG28ZX67XoEPxDLwb3wMTEC1gPeujLwHsT9DDxc7TxArrpWJVusBZ3fBjCq2uWfqhgxiw",
  "key40": "5qTAYNXp66b8FHPJwt98wC4KAUJXuifNANK6aUmcvHnzfrk1WBTMDsf4GWA8abxQCym2U4BpaAFKkQqAMWCf7yva",
  "key41": "4HSMTuznsRZ56RaZXCiGcLV2FcCHQfmR1RxiGoxE1AZ44Mzfpxa6tSQ2P8aj5qJGuLkCLLdScy3uGz2ThC935NaN",
  "key42": "2HSB9RmLFpApiPA2hFae2KuLsLSZkjGYC4vbkKARh7eRFU99b4Xpiv9aA9G1mB6fE8UsE9kv9pqXRLVm1AKMsnAr",
  "key43": "4D9WLLxS7QMETuUAeNQwq9uUKV5VDxTKkm91SqEiTahsQxngGrEoR5rPQkriH2GBHki14VprK8QKSCsVBhJhKMag",
  "key44": "4AAA5wCjpUJFpwHjDgM9JJwNyo4GehvfW6gp6Qt9rM3JuGuyzFTsaH9ZLWihRPsorCfPghdSFUJbQSDTUkiFgeFf",
  "key45": "5stVEZuMZGmHwjUZ5hzwAX1hjAN3Dt3Y1pYbs97RE3N4UTjgXwaFtdC8sQwgTofwnZSmrEtGxwCmpaoLC2iMgDtP",
  "key46": "ryA6MnTaQV8BFDVHiUAt65VZMzzEKTeegVrFPFNAj3HsoJK1N6XH248hCSyjKzXTGyGE1JjCFiWny25Sm37deSj",
  "key47": "2z4eHW87nLUN2gbAJyyfuBLobpUaJuqYZb2HGT4foshKbBV2wZ6Dr7gGSqVGwpmk3thVTxBkA8UxHF9Jtcuo7P4H",
  "key48": "3XoQgozvpCAyEraJzGZCVQgMJxAfkwmA2qsroYR9HzorF6vegkC6rD6p51mC1MJKBM5yMdCYi6Y8Jgnx3RL2pttU",
  "key49": "3btQZNjSpfgiqXtydUEQ55dLnX6P9uT7ntCLLCbDuLBticPr9k6LiHDhBhGM7uxaviXQaXhLPrKNJPmfvSYCJKf3"
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
