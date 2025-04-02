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
    "5ff9qH4Vb3mzZLv7oYhEyf73N7CHecSxgCVJ8BgLXtja1RD72MmUuVzBJ2fuGiaQEmAsSUnXJhoKtuJTGew2Jjoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D7b9ZWnF1p8wK6ceyoBqXc3JNcoCWFMPHZ8W79AumVacU2RdfRQHiW6VN9LC1S5zznpT8c7uW1QUn2WtugwHrgy",
  "key1": "KQCzh6rD5vv78oUBxgryh8NWZ8SPPbpSd31RSLr9ezYMfk4AHjKLLq3byTTrCurbj5xX2mf2cmbMbdfVH2ZN7Mi",
  "key2": "31CaVvy9WvUFcHt3yGyRNZcm2DuYHZztuSWZvEQdC5QTegui9ucXRWbj9PxNd8EQDnoFFXGA14SmeDz31TZHbbrR",
  "key3": "zx3HnxTymEXgbYCwcv6AYCehe3MapPRDs4GdhAA7SDx8tzqS4mEHPcwuuGZvGTUvDydrrXthBdW6m2A5bLFBm9Z",
  "key4": "3fhYajCd3aakiE4C5uvs5ETGtZ5Rr9feVFs2N46Jwtkug6qAkcHD2qqRTEJMWiVgqpgUZNm9ATiUv7oUba9YXya4",
  "key5": "2dzuXu1ckCUQmdc67sTf5qorAo4YgJZrF2bJn7uRFMVAngir432oKvCuTwyZ4hYqNyZi7nLVQaxC89m2wMYZFPFt",
  "key6": "4sQZDvcvCZnPox9NXiKCrTGuFoVkdFJFzEvdS5kqNwWiUbWa2H2GtWjhPyLDByNJPAhjSPQcwDyuXtwRYnniK5wo",
  "key7": "3HzWaTjnXRXR6irMVbpKsAthLsRVs9jy1sQqtEPK7za6Crd2ZwaLvkLqZJm9Hk4Uq3Eqb2KXxbYoMTz684k12xsX",
  "key8": "35KwJxaCWZL8mYGw9tBBaY2tda2mCpSg8AmbywgH5a63mMuaY2HZ7LNvcvqnvGPHPNzsRnpx6AAsJ52KPRFPcm42",
  "key9": "5TQQZ2zhaSS2uj6AnpHKQAPtK49JXCKwmEeqSFQL7NvsPX46ieWRnh1fa4g9RvDMiVkEFSvddxMqBaYsarP3gLWr",
  "key10": "iimFAZ32J4vJ1ymujoBNiUMgkAvjLBYLfcdDswtUGAhWajsVNQfFpa7XTwm6EBZKRko6yrDp2XZfKuXW7Yeq75A",
  "key11": "4CJDS3osDffuFXqS9beJSvVAf951i4LbQFqU82KhJv3GdTdrAmkw1scpAZVxbcuCDjSqi7WwszVR3seWSFQMwHPv",
  "key12": "3HC6kpL2SCdqN6GSTd3iFEAsmzW1CSKEXMzKGD4da3RRiPpe1s2h66j8p4PNMbfmWUtF1E9u5X4DJYqDhEu2heSC",
  "key13": "3ZU2FtWcvjABbjZZzETk2cAh8VpVjug85nXzsJT6BvwUTdv1eZYgnj2q6EQd6EY2SjLjZeCLSkv67e82fyKfi3qR",
  "key14": "3faPt3aS2FswQSjsfnukfzMpu6k2JtSVhLpmcSdEX9vk2fHEVdFTL5h6N8c6899mMj6JnqVZX4a78iHFhRpYcK5E",
  "key15": "whKGs9jUDoqtPGbvEdxr6W8mXkXar7zyVjCeQJG8HhdxE9VFv5RDDvxWoMW66c24sTTmioN2VMghMcy6P2xnAKe",
  "key16": "51f45ts9PyV88fFjuGJyaeammYShodJssLaE2g7Z7VJMEAMUUfvavctB1qMRA6oYj9XAYbEAvn619vVy3gmnu6j3",
  "key17": "23gDC62fVU3bo9opwq181q9NDRMF2zTqiVHkLVR3Ttzd5vJT756bTZ5V249rPzzDik3sRAy6ERFoaK5S5LMgVvKY",
  "key18": "4fBw9rzBJ1uVjkBA9fVXFFfnHpuiFWi6LCGLTVk5pmmR6ZbqT7TdgrtNscsZKzNt7sbUKwHry3rKehCi9VAXWyiR",
  "key19": "4DVoX7TKXMbRZk7cWd4PoV9hkMomcZSc5x2vmKRefCberEqcKwjengHZvp1vacDvdPq3KX27MZwYDvR7BtEQgmfX",
  "key20": "5t2nW9RPi4pfsHcjwkdWjbtZ3K7fk6rowMjrz6GZETL8jWMeQz6TU4NP3zMAcJNntgiRFCpwiyr6PLJS1CscoYk6",
  "key21": "2hmzS4eU8VzA5KyoKfcBw1g8n432cQjEs12E2Xer7QHRg9PN44Vw1AHfpBauDQ7jy95YWN1LLgXi39a8vN4596HH",
  "key22": "5nB2sp5kbD3FtiXuakXPmhEaDmkHmf4UWu8mGrcTUDMBRSH6Qq33G2CttiKJsWWeVNoLF66FSSMgf9Tr62pqFgW2",
  "key23": "4SMciDRycUpbu6dmmJDduacqXwAWKNVe7CchmgTwN1Ff8ePmRAS5nFNiYjjVnyn9yt2a7by1LgwdvS4xZNQgn7rf",
  "key24": "3iF3tXs8TR4jwhFe7hnvvYfT22kwHYWq6g1dDtdDuG7uugkzqaLmtiktYTTrnQSxoL1jhgXiHet8R6h9RtP6xpys",
  "key25": "V4mLEuuAii2P7T5DhJWAhpQwKsLWxH6TPZL1xQQAdaGRj9mGLJL2UrkFLqHRsuqvUQkVgM31nLjBg6KNg38T8LG",
  "key26": "tbS6DKBNpJreUegqWRN6mgQcPk3XVjLECikj5TEPPsaHKbhkSkP2eZeGhTJARLePSuavUbBHQJYuQVLSkizCJBr",
  "key27": "ERHEWhY2iHxgXtWchDAFCpCSAvmWHtFgVMar61HUQGdPc9MZyEsDZGYVNpTQM2UUcB3LqukJmxBPp5VA5K1rzyH",
  "key28": "5mdXQd98DUAyA7rF6uNVcnXRPNHZkpSWfkYPegHRQcaLnfue98DzHzpvCQgE5YpLvKnVnKRVy4WNyT7Djh1HUnyd",
  "key29": "bDQonN2EhRCcYAFSwVUPSRZ7S77UKbHJCPUxwoS1bBwhvAdKbddiTnTbvEbgAJCD158fd26j65xbRA5CsZP6Q3k",
  "key30": "4T5soTb7YnFYBjDBZsuS5QZ4yPs7EM2SxG4gq7gsDZQShjWVd8HFmwX43fj8tJ6enqdixML87SLhQSZKANvo1kYz"
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
