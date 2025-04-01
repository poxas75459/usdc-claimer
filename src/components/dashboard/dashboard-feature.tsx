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
    "4mqrLpYpEYU7PpWFLPRjs6vSpTH3t8tGK6MvkB3daK8PpYXtAZZ72tckodywQpU1Gwc3VaULAyHxweUNKRSPHTwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQEoyL4Y8aivYUVH8UjndUdj7mwkTEXKhYvouemkfXL6nBmopf7FasPruky5PEAZ2MuGuNKJztrpwyrV5FjGLGL",
  "key1": "jMUkHPQbxa5tWHfb71KNBNB3rSXLMg4Y31hNeezzu7FfAK24JBqkiVAiYThmm8gJsSh6QFDAUMB8XbBkEhEnaib",
  "key2": "25SzoVBsrcysnT6AjRjnqQQAcjDzmjY2aE8ccA32u6iY5AHfTGuTuz1g3C4YG9MJS82pcrfnwVvFM5o1yfmfAFgo",
  "key3": "21PyH6V588zFcS8Rw6vRMgeZq49rE4dyWNFM4YjqTpHeLc4TZEc5c8u61bL9YFo3tmjuYuvSp9eW9EL4kzEsL8VF",
  "key4": "5j2JDr3adiH6uJ3AZ8cJx9rzknDtwkaAXFA3fsHrh9BzKEHacfku8ZbryWNYrQNp9yYuF3MbUMpCGcwR6moG7aUN",
  "key5": "2SVMj4WM73dedHK8RBG9jognJLysNBzDVCCVyPsSutTDXfPuzFBMuv5UBXgi8hwYyRKrt3ptdtg5eTZXfu9F9Ae8",
  "key6": "52K8ry6ZSvGEFTumfD37qQaRdNLea18JVYBWdBFkXKr2tWfmwc2NX4vdRtrHr8ow6rQRfkKw52v83jDrQjXS9XH8",
  "key7": "2ztajFQaeyCNfJT2yctHmfffkq8BQCWTcgpa5BnQKo3S2YKUeNrtQ2hWye4aTYuZrJc7kCWSDoSTkT8n4m4QiS73",
  "key8": "3LZ4b7gd39xvti4k1wQkWHDkrwBG9fdiPicNdKbuHybaULWCBoyz99x7zv54c7k5W9aJKscpzFvo2iPws4eww3z9",
  "key9": "38zzmVDeNWREG9kGs5PycB4TWH7P7PsbznVLdQV2miFPGe7JB8B4m3qKtfrshNwv1zShgdBWb63XjfF5PfysDmLv",
  "key10": "2mL4c5nkzdNzbungQ8wQNS4p2r5Lgfi31jU8UoTWG8rnE5KdX33sy3ujG32jmg73LzEVWPCX3B1CYr6EwwhqGLsc",
  "key11": "4Km3WLtqzkWcFYESvhm8riu2hW2FecxEQGCyk48KaKV7DRofJzSKbaBA4AfTznw6QNUYkBMt9gaGYrXMA7cz6Te6",
  "key12": "ESLxdHYqpf3JCMVR66TUYTp7Ufj3hg3oZ4Yjy5jqpb5WWMtPSBGi1yCft9yggpE4SBiwUwRxZ5qvz1F17UfxiGW",
  "key13": "61uF7cvCWJNxjZzCAycHAd8TRx4Y7Xnj9AFBcNo3vjnNpYr8Zi76kxxUyEfaJuePQM7yJ8smLFTYeKtYtb85hxhd",
  "key14": "2BgjUFbKjANX6ZzRqyWskwPjqXN1YRz97qpVLAo6hCUdzY4X8YnLFDGjCeeYCmjDpTvK3Q8UNzMFsUPkCKHporPW",
  "key15": "3cAmbc3PnFnqCL7YvLGQFE6VyCKFWzg79Wr2xynRPWwwtsmApJiCMucSQt6QaCm86QLzPoHzsVeUVmnePkHFvYg7",
  "key16": "52ntknYuaRz8Ybv8zTzhh5zLio1qXKLyWGQZH2t79dqKEvxt1SuxuRWAfyCBZ6x3vp1oFUD5tHEN3KzpS7rHwqfs",
  "key17": "2hfB9eXScsjh8pWeJmnnVh9NJHbBh9TRwWHs3RRDrXmCDzXTEn79KrJGjF75VXJ3VRFnCVz7WXEeq5qH8LQ45rk7",
  "key18": "ni8Khzgfy8WZUrxhL7BUMN3Qx65RczGA8Qy6QzRQR1sEwjaFdk2b9BeZ52wZJkiCVtbcDWonrgdN7kKkfKUSHC9",
  "key19": "5DNiQeJ9hQ4gCXFGeR3NKNpMCaVTSAH4Jf1PaSbVDAf5eu9cSV68uzL2Rncz45JJBQ79kzxSL4d21DhUvQndZUBy",
  "key20": "3yJa7WfWh4cVfedNb2sBBzsZYPev4ojuBqHZSmSAgn8L5R7dcxU2QYorLCFgtwXM68Xn9se5x66qMG1xoFs2PPR6",
  "key21": "3ukADTX5ZkAzzuxassXyJrTiiBHiU7sUAH4nSDrVXE7zpAbiRd2u7MKbwLRx2fCnmG49xcFmdCCs9p5GK2ztazBy",
  "key22": "2uYfwXk48LbvMg7jCSJ1DMMX3Y94tD135HJW4MP7LByuCf3a53StzCo7LLNF8zRoFLDJETTMYSFeKAUohSPfu4bG",
  "key23": "4zZpyU6ktXJkqeysUHE6C5667ientjX4DeYXpUqEZC73iSz5YZ9A7TPm3iaQqLXa5RyYWtdRz7XTJjjzY73Rjnmn",
  "key24": "caiWCccLejXk4GerKyaBHrNji883iP34zwzeuypnE8sLmU5gnUyVHqwujJDoFPuwwMeJzW2vjosfGHSgb8rxbUT",
  "key25": "hxjzdtnbtYRZrRJhk4YA9CW5GkdYtWpDFjM99mVq2uNpdwepieKm9YGrZA7aezQpN3MG71QjBMFstmSAFXfAjHH",
  "key26": "AGwXmXRaa7jV12ZnDkeA4X4MtyiK9nXwCXJpA7uFeccoB4m8Zx6E2TM59jdqWJNw7x7x7xFga3p2UfB1RsPTy8A",
  "key27": "3MigtpheTjG7VNNgf8REGrrXWGofk3HD1WNzEcLTqQaP6ywrtmDeJjy48KjLe4gTzRnqd72LRhbeMEwHpuABBLgu",
  "key28": "3beaDYSjRQkrQnumAMCPBNtfZpnqEM3bjZuzKRkeWzJ46damujsE9ErjSeTFoGdt7VkBuwpwofboKrxgPwqsBLEA",
  "key29": "2dLUebawvJ9Uheo8a1HAvSo36GdEHZgnZfBJ9RZYfXQAVoW9rQX2Au6XjVncoF2Tuo2SbtSq4Vy98AYXL5LBpxNk",
  "key30": "4yPi3CtdwKPASs9UzfmSczMkcASBeAGJEFV5wESJabWHtAFi9xKSzbWSRxjrosqEkaD7JtYdLEJC4iFiW4oxoM6h",
  "key31": "3fgEBpBi1TvsPJWznETFpyvGHqEzSmHKNavkEK4tifV8HR9QRr9uQgMjCaFR33mYAiSYoAUE3dSNJDn8n5EuDgaQ",
  "key32": "3uaAJSoRMZ6sM5q69yPhC8rM7ZJ76fN2oUAoQb1TvCYepdS1Qeo5p9YjAwFzwYEvfAcLmCi4PHNzfvaDDbfZaqBF"
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
