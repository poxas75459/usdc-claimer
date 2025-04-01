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
    "3DgMWaYLuQv1PN5zoe3e6VCN5s81HMiwVnjmYU4jor5fnhJKNHzE27kpNGdByTA69umuGsubdTsGzyjSTrJK5px9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AdP7E8WXZsPdMgsjVRTRsf6W3hNtnLikBSYY8H1GokEemzLWU7hMtVZHRGP75zKGtquN1vAbfAxXCbznTMFNHfF",
  "key1": "4U2s2GiH4ekTz2XrDqaDMFhrmpjezW1SB2hrxzpZyiYKNQR22gGjtCTFWVVqErqGP6JcugztVkRUAoBHpfLSc6je",
  "key2": "27qmsn3czQpFAWJd8V8YP8R7dzbmHEjKnVDFs6kgaEfvxEyBHiBSGTLbkJHd9XY283GJhk7h7Vn5kzoJQ7G5YXdC",
  "key3": "3Qz8PyVKUhApYFqd8Qiqk8i2wJV2mv7ad8J4RWSjjb3SD5K5NWLNKDRSJh6CGo16vbn79PexNgTasZKG3NDDdELp",
  "key4": "3pyz9VZxYSGB4y35SQ2WkJSCrxzM8eWAuzDNvxboVJyL4FR48MvtG14pCyFXPi65EpCLpce47tr9w7h86yjA9SBr",
  "key5": "4MvShw659mv9fVoe2h2E4Xep7mGJAQNuVM74LCYdX1U7RgweqJZvtWmRniJN3kFsNC2jdY4EFaBBFVhyyNBx9451",
  "key6": "3zSTnUL5qx12ngDTTf9KJ98J2SWiPq8BPmiMMn92LhgU4ayrraXKn9hp8wLwQ82rugCbm35WkFwGZagCa3h858wF",
  "key7": "KKTFXouknMPw5ozbKZzNVVWzTWS8cb6hPLiXvkjeF3kTUTu7PE4GYwVZ5c2mSHLEGkZBw35bYaxmqVW1dCq4tFs",
  "key8": "5Zm4XvEzq7yVEydrVaXmVqo3wfnkcJVq5UgbsGGXnTTpVHr9LDfyQ5t6SxtVLMbLphP9bQQjPKWhCGnCCddbPCbM",
  "key9": "4FuaeYnrjRiWz4xsBTPKapZj8RWHULzwWRCQHoBWuGtxRjiiiDsWgLbvvRecByqL6DEv81F6nfsSZek6gAgN3PW3",
  "key10": "4KRrBqjyC3cVCy2FcEiVh3GwyeNEtSZKBhikZw7sk5H4i4niEXi5gEVg1DKFqWKaLMMLW482VDz9Mf3VFKPREHUQ",
  "key11": "4MBnF3eiUfGofHf48mommbberABuJuK4Wuqko1nLo7J8gSnj79353DiSKaRweFgQMYKuSgC8CDcey7BhDdTdwJ57",
  "key12": "3tnFQL8HyhgzKknkJbd6mGxXdnJGD88G4k6kg4pAECcaQsDdMdPerYPowsmXCt5yUEmtScMAP8y1vy2t6PNqckxc",
  "key13": "3Zo1PyCu6hPND5EEJr8hnmwjXVL3Ykq4BmzYwN2AZiBBA6Z9wWfYNGnYqU8c2JUE5AYJzzfQBa6wkxqYZ4MuqynV",
  "key14": "5ZYHWLS5QgeiYAWwKBT4pV57oXJ1p66yctMbQ9BWeRyzRrX5L13EkdDxJVYZggX52neW55Ywx9puZ9PHfz72mcrZ",
  "key15": "4tLqXhTCPm67LQqUYbwCmzDfbVcfR24WYhYtKKreNbNfeXrQoZ774u4WdYeFKFUAFmHxKk1X7HunC3xPMA7bGuCh",
  "key16": "c7wsEzjDganfEAXaNhredac9gni8B6JhKoDX7yFGbwzoTaMgkCeGz7EXwd975nTUmc773ezxvyvmQrR5FVdopA6",
  "key17": "5Mei4FmszxBDAKtbm42XvLG3D6jG2HyDfsqfAo5dafnaPSQpzc96RJKA9d96ZpXdX3eoxrAJ7Jx3ZjcGxMV5pGEb",
  "key18": "4QzT8dTCPCjS1hAUgit6Piu8hfF4peZ8HBZfFrHCvy8Eh9bzuHNRD8Mw39ueET31Bhtdtc2qmynDnf93Fbt6mpBb",
  "key19": "3SBcPRTTngXat2C2Ky2My4dXG54Kb1PE7Q6ot5bgmWH9mQR4vdAgGVVYSEVgZcHq1DCdZmXvy1dkHCpefzUyWE2n",
  "key20": "3hDPqnHxPCt9sXAiyxXadYQzFNMJwYtLnCnNFUumU2Tup8T2adACGV9ySxGccTY7CanFdYJjVNVZdMdZd1orYb4A",
  "key21": "25AN63gSs5h9UN5pcai5sYCBC3nw69B1EmfFv64KUAm3q3whyWzBXqJCeRr8uk9dYRi9zCanCHnJNh66gNJKxAmX",
  "key22": "4UrcPCehofoeQkUbhQ2nvHAMCUwPY9Q47T9p2hbtWwDNyNJCv1sJxD1adFx68jSxukbh1xPS89kBhueDEAdFJm7f",
  "key23": "22whUgbSq8CqNx5xn6vFPKr73Wg8YRrkjn2XgBife9xG7zN9Y17DLVaNdHGCRPtYL1rj2X9ybg817pn7NGtotcan",
  "key24": "28PUqS5dj5CTWWSQSZfpXG6fJeByy7vkYvk8zz2qLy8dzZwwoVoMkN3kgCg9hR1FjEtziDfXfXVzPRz8xqVAJ7Vc",
  "key25": "MThezLtduR4nso9GrzrVnUachhR6zYHggPJcr84Hv27mq5Gwos4qZaQpoKuVBCBs7Uvgma4awh91n3FazFQSz7P",
  "key26": "5dYBXAcYHqkvzL4EJVBadaXzr5rZm6ngscFSgLu7guXjNZR9UWtphgbTnKaXDJmtmPTwFTeSi3GBXqjaPcmiAqyZ",
  "key27": "3fyKMu48t4Yp8ia8wo8D23uCLUfSJxzFgyzEy4gaYsS7RFJopaLfwJvbPeattfSFb16HaWXdEYNd1LPxJTBZbM1C",
  "key28": "3ybGfMosYjMfpQ7MvTux3Mr5ecXYNGdjSJLf5nV6gaVgesMEPAtooAbcE9s1GByLHm5zNa8xN7YYj4RUY3Lh1E6w",
  "key29": "4RwrZJmufs51F256Zcck9roeYmKnQ14snvhxzLtWQ6hSQxNvGLBAaj5sd7MMqT6CgCDywGFRtTAao71QPT9LPZTT"
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
