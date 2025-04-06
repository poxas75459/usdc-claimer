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
    "N7TnXM6NRfCGMfPdVJHDPoXqCuwHq6PgnZcdXqJiSqJEGptz67qb3TjGNbVweYR1VthP7oxsPtAHDYj1uRi3o7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPtH8ks6T7kjMj9Bxiu1ebBw7sLdjBnqskg8jeb4xF9YFzWGYwV4qRn5xBj1fBoDwpUmkUbDdFmWgE93XoYWFdQ",
  "key1": "jRpQt2x3qHxbQTuBSnkm3RehkyaH5CkDvQVSNpYArhvmTHq9KBFZVdnaqv2CzFtmve5kwqmzNc4ASTMPZ5Xc1gm",
  "key2": "BVkgYKRhrHNFt7VSwWzwb5zY7KVj2n1SvvTPkwvC9MMRywAbsUJponJ5szL9xAKc8jsBqchdKReoczjggMPRgtE",
  "key3": "2CAqUdYxPNyTryzFNPbm1fVr3QMfR69kginfTBqMNBE7KfEJhQwyNrzuLux2oxGPdke9ewPt5bz6MutDN28etYjP",
  "key4": "5Y2fX9T1kXStrsWqDgBvN75a2sJpvz6NjJNJqMPxSogKAxvtHGKMyZnhsfbQPJQBhvFqYvxZHhL6MP89RaSCXhGi",
  "key5": "CEooEW7dLrPMffKevq6aA2cX9EfZoZeT1UA74ioShFwdEoB2J5nzPTf78Lw4ftq8M8ufQMdiqtrNkFsDirLBhBA",
  "key6": "4dv2NeXbPFjVMSgZrWn3TsFZF3G7QGsKtWVD7gyEufx71S3MtVeeXvEDyejZfYA7XbyLoznBv6nvrtRmJAA1CGJC",
  "key7": "2resgQPGnjJcc1iniMLMjH468jsCUkHcuxkMTFgiwfaSi1ESK84JuDcF3LR7FPtLgaLA8wVFHXnubsdgxHLV9LR2",
  "key8": "29U3DpnoEmHNnLCdwpPh7qAAEFkHfQpQRWj5WydVvFyghYLtT1tMJvVnrdT44L2CkBFCvJJTpeZ57L9uis5NtT3t",
  "key9": "4bm73S41KT5g73E2T6xvrG6H1q7C1j5NED7RVcKFk3qqQ5u4EqSZXyCPH5DzXnqeUraq467TzENUyy2yttsYghpw",
  "key10": "3yvTdqrUEpVehtFU6Gso1zYBds9hVZNVmGgiqakvPNE4fFoxUCp4Mv34RGsDQtWMrTpoVe1PNUsBBcFqmdpBo1HP",
  "key11": "2VBU13THweGBfDEC82dS91swK2YhZibHd6oCZjPR4tfbgi61RBQ6soikA5ubTUMMfQHHCHLQ4PS5MZRmBv7UxMdv",
  "key12": "3aHGWDV9K2j4B7AVnFAvrC7TY89epTsgiwNhn5JvV4hJV4T5bCP1TZRGAErypNrzTFiB4RDUdMPSKWsEdNnXMQb9",
  "key13": "rYTMoY3nRnnBk6soZH7tPPQHtsu12iwXJCrBDEnCCuwP6Wa13p3BdAhFDEbaDGojodtG1gaTsKWd6ZnN1DU3uxb",
  "key14": "ENHEeZTkA7pYesdvuU2v4vWzcXRiS2U7P2TRieGankDqR3m1Hf5ZvwtWnxDc82C7A8GbQMAUjq4iFZiYaXjBHXm",
  "key15": "2WgypKNwFq4WZugrGVN7rGL5y5Un5HrXGptJCnVrJvwtnxe7Q7AJ2UB9nxkaSRNGdTeAvnRNGw1hnQPBudYa4stY",
  "key16": "mAYHCfczN6RDRbNXZ4fVJ29SyuFhjJ9T141mPTLraXCEsN6H2q7A7b3TDywEq43eMmgvioDqH5jRZrNaP7fL7SK",
  "key17": "VZoLWqjJn3YjHVXPboCEjU6ZPmGEhnNi9eZJMBrzKAaqB7TrxZyfM4Sev9bDtWVmR5MQengBTXUtFwfHQA9v7by",
  "key18": "WNAxrtvcMAFVY2fzGJeemo4jq4sAGKvMs8ukmBzvY4xsBxuPQBy3tJRLg3Cvekemz1gYAuaSz6cD45ZYVxmaT1J",
  "key19": "5c83FDajjndQNZCPsHd4k3Pzhm9HWykeeN7UaMuHJzmTawkVhVJLwe2vZwNYKCmKgHETzxvXuU5xLb6zqpH2SdWb",
  "key20": "52uWNpeQAEYoQFBkeczDbSf3zNY8TY5D65Mw9VfJJBY3tahkNPhQQtdYMB4t7JZJXBiTcKun4cNpBDaauuAQejNR",
  "key21": "gJTjtyDsFbVCo3fDiFSNF6iv1mvjU2B7BCYYv6CGGURu5jBZgNhU4CYQjmTmwT8K6eLKXCtwAQKgAyxqenx9DrX",
  "key22": "5nafERn5AEr9utwkCgmoRyAb2pBgo7RnYMtrWG4MUhY2Yd4Yp6mGHzTqw3RbMnwbWy6ZvgwRwwJhhHfDG66179bL",
  "key23": "52mPkQ1WzkhZUUpZH9yv9Dc77YgjzLcy7Zm89i3jt427sb7TSrfvoBTQy6iK7jxkk3WLpaZX7YLotgyAC8m3WVBP",
  "key24": "42XYcEfrTVgHhDg45WjVotTk5AGwwbaKuSbtDQfW2pXXtCDjiFooir5qe3q1eMfHm71gAHJWhEvN2Ma7VCHXssqc",
  "key25": "5LQ7ry17BXLBgXQuJHtqaPhxsebSQoeoioKtmmwqJ4Q8Yx81G3s7m4cwF7KTYu2k1CCLfegURPF8nQdUj3sgqTDb",
  "key26": "rWeWHCiw2EyFv62JQaVXaCWXs6R7Tx5UMK4pRytUVEidW9cGkufCzSZAEiFXSqdtYf1u5RLHWv5ampM17LLdhqF",
  "key27": "u3gKmopVXqLxTrtDZapPRoU17KVLb3p5vGurE14a52gm92iJqPwbme4AMr8juLvmbJnGhBeWnyicc899dpkgAQC",
  "key28": "ZfpQ6G6366PgYPwLrkkxtut7QsT348ofrBmG2osVpfGxefDp4UVEzjZ56pik4DhphVvxQvXcRR1ZoQi2q453cw6",
  "key29": "zqkbjfQHxQwEYV8LzYV5p7Yx7W4x2DnYCcDx7qDtUCraiFcfwtN7HpHkqWvJtnvARrmuwXErq6gfZyYCkDdgMYr",
  "key30": "54xWfxMSoShP4s9YUzuGHQGR3vKUgLGKMxjyXD7Fga2qmEvm1BfW4b99DiJRfR5UdGqQNhsyRZBqfvc8SX5eSBmt",
  "key31": "443jaci4UgYwz3CxdVT1H4VsM3fraeq57M2Kg2C8tn9JdXKnMZkbjPvPjHKsU5fSAngYFNVY1FDETbbSQvyfSFC8",
  "key32": "wpF2XGD7vu4kyqufsC4SBeL3WBprn96iSQL4C3iEiwEn9gc4AzyfzrrPf1EX7BBDN9TnQg7hV8kwQ32ASPRbFFv",
  "key33": "4FFqaFWVAYEbSQttx1yAH6exhHssQFNsKDbWdnrSkm98xGEb9LeoNPx75FaR36keLpTJZz5Nyr6D2Lw9BNo9L52N",
  "key34": "32Rcx4FmDX84j8TSDdsWR4USsQtUHxD1stWg6GemQbhSg5vuCCXZ3vYqyt37rYonr6SDcxtbJe4MCVg9LVnPTuVm",
  "key35": "4mQNE5GhLYHxTNzYFm8ZEhPCyGh17BvQYoTKmKhhJHPszLnYZpLLg8cmAya6dEb4o1dFga7NKmnViRXofMPa52wA"
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
