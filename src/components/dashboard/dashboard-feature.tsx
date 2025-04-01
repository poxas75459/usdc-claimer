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
    "5YzLw6jrQbcATA49DgMmXnYTNPBLZ6gbpsqspbHK1JMqG9XeyGUiCn5DXoByrmLP3EaMMMimPrEi49wsYY1VeZGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSwJNu1qRfoyo2FrnaPbREeXQSTWfqR1vhSddcYnnBM7cR8zK7jCKotWwnwcfcZAVJHytxZYFa8io3JZXGWEced",
  "key1": "23QfTkNuvJGhmAhj1a5vJ2iV7VYjKkfGeZCDmSDsQgz2a6covPxWKBoRBqj8kTbc4ixmpcpJ1BWpq6dUgA9FaokF",
  "key2": "LfWemUKJPS93yGxKpZ7agBUYZEMV43kXfzBPr45KRXFLBN1fab7t6jZZfF53Am5RcJX4Rvy6WQz8wuK4RbJyCC3",
  "key3": "45YYSL6soMCnPwcppwHSKvvdFVGWcVG9UhHMMrtg7QXj7CR4CVASRcDc6darzJoaDSCT9rTKth9JSZdvbPAoXMrs",
  "key4": "5qpVCuF7tyTArAAH8fgcmYZ3BDoxutfufTq7gGBVBHSiycLjDkLi8QEQbz2Ysb8sNC6JBssBbxj7eCkQT3RVuaMg",
  "key5": "48Fsu7FwoZopUmNzLK361ESdvRG5kMH6xrf6S7m1BQpn1HZJSykaZJsaJH3gtCy8AiZt8pubDM26dFa7EERYb47c",
  "key6": "2j5SdSty1xjXmNTqhvnY5PzXGuhk3H5SKVJtWQ1mjfYBii54F3mqPUgbzw3Znv9HyatPwZjVDtrwp4m7kvmnWhYy",
  "key7": "VewnJJ5JUmi8yLX4u6fmGHjVouj1bQh9QgzZPpP2X2ZzAX3F74VJZGKjRoN99oMAqRzx1WUvvdi3moyb6qYgCRG",
  "key8": "w8JTSHhcnsjx5qpGohHyuKzhbKxZeAViUVjETFAJyv1kWzjyf9R4kgnmzehKtnT3odWRS2nstJmdEbpH8UnkHkh",
  "key9": "2GVWzaPJCwoqRUPSUNPFnRgMrjBpEsuExvnfbKSaZ14zXQyi9bQdwbYzm3GGp2iUM9EpJc1LhmxCSXZ4dfdTjTdr",
  "key10": "t5HaurVa1sBvFoNjXGmq373cijR1NWLwf46qtpQvJALwWhfV2x1o9mTBKhaTgjeMMUFAm76AZCCUzYNLmk8NKsY",
  "key11": "5bd7aYzeSQyFW3UHq18LDfNAshbDJqzZYuhbLWzDhUTmqJF9viZLeX5rZh5xukzvijVnFXHVKCzWQYKiQs5W81WU",
  "key12": "5yQtdaGjFAf8LezK1Pag5GmZtjET2dzpVQYNvMfYkQPNNpcj5WQUHiqihXatK98i1mtt5KhiYCBMqiSq4wSbrmsz",
  "key13": "3yCP7qek8eMLbbmJekvLoTsDB9CZbHrAKZv2Rb1MeaWBWEynpCm8uNZcnVbetURk2RrMZct9aju4RWrDPrfUUFbe",
  "key14": "2pCQBy1o7jPfAr2mQDWExa1GDLJuNtAU7cGTYTTotfrnkxbjdbseyJCHbF67mnDbkqbYAr8bigDS3y73Nui1uejs",
  "key15": "2LpeVXeXbpm7ZRCE5bsghqVz3EK83JYXBR9Ravib8Kkt4xgP8RvzBtneACujMd7VhhYkMbqQfotQwgEhpTT3jACW",
  "key16": "6DkwAs8pCdeQU6R1TmekraoFtLh9mAiZYQ5Wfv1LpmmqzyFXXPhhAZJANN1ow6Ch9r4V9vjMXsP9PtDJ8UuwurJ",
  "key17": "3EBue6YdiXFGbvvXZ8kAfbfLgag6ugqjfDwYgJbq5gwqtrLBeJN9UxWnBu8nAnzrxAUYCL7oFRscx97AnXHqSamd",
  "key18": "2FXVBJ1ZLhufT7yMwhSHJbXaufhd2vRe6YYnF6uwCsD2TwfHo74VCS4CjaWPAHDoUejPiqPmy9s1vWU2FiMypeGY",
  "key19": "vrgTGp961UKK9S3KSFEnzeDuC8r8JbA2tXpRDSR1CT3Soze1tjkwqo2R9NAGff4GHH7WM3N3EgnRZhSMhWGLN3F",
  "key20": "3Wzj7SvbVDPc4Xu6bXLakf6stbQ9RdFE7V5S6LxLFWWWYogPKTuDRLZ58nRC6yiixtnBrkjpgBb2yMnT7Ua6bY4m",
  "key21": "38HdBLMBQhBz4KHZjGxGEtafSwbporuhAUuGSdBUd7KuaC8tCCV3XxFZS4L6NFPKFd1aYaxswiwfuN2i9SJgRHbN",
  "key22": "3nTWPiFiWcouyeuMEZYU8iU6VBqgf4qfgSa1LQUmKHrkXYUA12PGTpbASNyFRtb3zW2YHnnjbZ4V3ypTyo7wMNmK",
  "key23": "rTohGZindeK53unGpMAnhYKWNFjDdM54LahnuJWMoxCqn943HhJ2P6ASLenq3FiXL7pNC25kK3oxxDWiMdwLMaD",
  "key24": "tDPXzCyqC2NuEJ4pasTpc7zATYdf6uHwiSEqfmQXJjYg4Jba54sRcc9GuC1zxxoCzu9etUgECBy56f3rZvQLPzs",
  "key25": "3xCAc7kWLQHcwQWbaBzaPwYncbgi6YJWogACxAbfyUM1c1ZfxtH3Q6bkSZThrPLrwTzVXL1GXdwbmdGtFhr91Zm8",
  "key26": "26cYEg4JBLDQJfvnTemGZxq8MP4nE1H7AbRexr4mmKit93CrYR83iq6JTZkEc7Ztfa3UhhwssM6GSP85WGi1YtYR",
  "key27": "48uGxXxGh6CxMJAyijh4XKVmTqzct9GfxfUTPxPs1XGe5X8K84LpgTJWcD5zGcgStyjSjcXKjwZnaeAtoRZJNhmY",
  "key28": "NoU6kUx1fLNTfeWrzWXdoVQof4TTT2jDJWNhkcpQnBjebXFwQ7ukMXj3SgKm9T3jz1UBF59fbMCYAa6fXjfm2Ze",
  "key29": "66me25qFQ2D2wuRSzPfLYdtFL7H1bTpAEBZ3ZxbnFFzDp1T9jY1znZz32TS4qZgpXQQwPxHvaPF1vGqj2ncodXka",
  "key30": "4QyLDUTp3wMddqQVoGUyL4HdGkDRzb3hpu3trr7HWqutKthfUi6rEexcJFpHvfxJyHe26yr5CLBZ7zvEGafuhe7f",
  "key31": "49rnx2ScJBDJJ79YZwfFvQHsfYKagTtDNrHW1a95dPPMPXeS431qNHZTavMH4o483RGJ2MTATiar65b8Rz2oRwBW"
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
