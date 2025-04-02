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
    "4tidF8pvc18NKRxuUa9gXy2g3sJkfWuLGXhjnAphpiNpfY2gWxw9Fooge33FcryRqaNwg8WYvptaswV1vFuXrri3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hnju89FJs9tSyPMTdP7zGLzePTYZ9JkgSe22dB3BFA2K9HVBzCxmtxrH1VTtcNN9t8aqQRMnRJmSuMMLs67qNXu",
  "key1": "47RUTBTftbaGDf1LPogUFAMAYttnWLCxpeerdSD26E47SiQgCZqLbW1kSayZrof6rErS9KhUDbgXfNNrHV7qtHxp",
  "key2": "3KKzBavKzmTZDXSB1GeL3MwUCcb2gtacok9tGZGWiojnzRstmeGQNvxGaD4P3jL6Vhna4hhFQDVE1o9AQ4JvfhRw",
  "key3": "3Jttj9xLGA8xQmbfPGazB5WxiBhimPuSAjNBxPnkbVa94fZQQKGyv7rJXPX5T7QexighZkMparLrxmZBDapuwQXZ",
  "key4": "3rNe4w4ZR4ngeVJXHHcaqXBwE4sYhuSXQv2ng9G5qeAStmrwLjgyb2MUdXkYhP8W2y9dqqkU4Y8Dys5ZiMG8eJMr",
  "key5": "4vx2LAjf45j4WePHyP4HSvwxh7SoPb97RHG99gH5rKpzVxP4K1DngVS2siPc8DM7qwDjJhntAvhyZ54azWTEGGpK",
  "key6": "62bxSqHyxpHuLvChAKbX3ujDWJ8bGTgx1AecLKuUMVRLANzebhzASrS6t9KzXKV87WpWcueHSDpN2xQ2bHhBxiRo",
  "key7": "9xPqwgFyFoSPgrUhT7gBFaDsUTTyciRq4cyveViGZgvbg872BUSjcbYJVg5j4ugNMScP1ByZEepd6Ztr4mrZsLa",
  "key8": "5pkjyyhg8gKTpSteMJ93B4VCnhJX4RyTf3qPPjTQCUvx3q74zmDoA6pYpFrKZpbJ4BTHGBjMRtbB1fSZycrECCuq",
  "key9": "51YCjDSkfEnnm8GrfaCftaqmyjLdq8pAknxkF7DBRacB1eVSJcHovp7kzjiEbbca4SAQGFAH9hCezE96evMbFGBL",
  "key10": "ekiNwXjcMTbRE4uWkpN8TVup8THMStsuxEuTAoZPm4Gdj42eoMqGypz5KiVjd6wYKXNTQk1kN8wCyFwLBJ1ZLcv",
  "key11": "37MpeaMeuKwHEUTj8LVsdfozaFvR7hakKR2viQrMAEYvfVz3mkphgG35oHJZ1oo7tyzL87FiicQh1ZWvLjPBwRW2",
  "key12": "JtfPXqyiojcAvJNvFaHm7Lj3B9rCj8F164HWf6uTpnpJCeMWJZgqwaM7Gj6fTq2coxp41aFu1c7sKtHgZKrUJxN",
  "key13": "NEHv8wwqGEVcZHLsETfVjizL4nTJMTsrwJPmCVXSYEV9vTu7ED4YdiXqkymEXgcg36qRyKfFvE7aurvB8PEhveF",
  "key14": "4HBTx4KaLiM36fcgws3uz4hFJ88fB4GP2yKCx15hmqpaCFrJZzMrjUTMhEa8PTgYaVhzJGPfDCw9vJR1ZEjxmfry",
  "key15": "2J5PSYtb5S9g5xhQi7vi8sZWpqxvb4khaKoSyH3wQCvTWHkjRCpizk651W7fUp83VubownsW8sALtQDBjeQKiwdp",
  "key16": "38ZnCiJWE3iC2kKGaasuXRxyxpA4rnbGrJPSUgBfiosNPVnwCCUAE52F34JAAVorC8NqHJ7drbEYGN7upwcfrmQp",
  "key17": "5keEEnZwsmvyjiYGCsFBXBVmG9qvc5siu8Xn1SwY9qYcNtc9y1N156jXhYSSVEswNNGrN6qGAqf6vK7a2xKBRHuU",
  "key18": "z7dUga6XZLxyQSLapBuiAjLyNTdk5YB3RCqnfxmAbfmKwrQdpvNdr1sMChS2YnqKoHU9iWGRh7Hme1Chc3CNNoL",
  "key19": "MeZC8iWSWj32Ddy1qKXmyqzXgwyV2AcwtYW7TSWFwT1Qp4yWDtNtQHmDipbbU72FrB6oQ6ipVhS1se7wwruJfqj",
  "key20": "4k62PsagfAKEwNbiHSZFxRfuq8da2qEpBYREci9RXRZ8tzKGFXWmhNbdacUsZoEdtwSmA9AxjKdPmKRCcedYhaET",
  "key21": "5PiHYZqS9XNx6RDwZ8zRbznJy9KLF5T3xyrTyxDEyWsPPHAUzH8r15X4wtYmUvstfKhVtG1tbC3rzbqdLf4RxmkC",
  "key22": "2wvbkgrLdFJYQcMw3MrCwdeHbxEdrTR3r86uyrkxd7cyVAFXF21pW7xgkpZEve55Eejju7YW6RRNh5p7bgAVxCbh",
  "key23": "qWTpa2vCsDTUee5ansS4hYZFzv9YuGhms5FKb2f9T3VEds7ZEcofe6wr6kiJqNaw8w3M4LgnQsf9mGfYsFJdhPv",
  "key24": "9YLearMDgdgepQp1JUwTzL8EDuBJkekgVFJTtjEGFBskt2xDP3cHy4FUy37tGUc8dy8Ce3MmBq5sPmZKbK5TgTV",
  "key25": "3GVyPuuu3bgTg4XTQQXLMSJJAgfzRsSp6o7BE3Ss2xd9hcwW1MuGQagnN7w7LgGuPM18H6uL39iVZScd8kUuZU7n",
  "key26": "jkn5iAKpoooZtDmf9aqR2JjnbjnjRJDxP2b9E1Pk9yc3tAbLYy9w97aTxrJ8PowqoyRNZdijwonL2bA2pekBb8S",
  "key27": "3y59fPPLY46FzQescrSpFqr5QGEohK9Jf52jA8L68AFj2W2BHQayBJRQa7uVbFpT2V6A9qkygKbiprZsbEwRGEM",
  "key28": "64mntukuK6DFtX8D1WMVx5uVL2EqunJLC82uNfoatN2ZfZH7gy1pXSmSWq3T8XkrsUAuvpuJP5yKeVLe8d8VtkZC",
  "key29": "3dS6V4LEjHScyA4mxxdh1U9u4S95vWdMqrQvrDY2ha4NfnfQoHs9HnG6SvbSNC8E9hSKmUunjiQqz6qV8eAFmFRu",
  "key30": "2UijCuqfZLT7Y5oZ6p6dinU6Xm6UzLgTLZJJ8RJ5zdKjXwPHxBDAE79AafWawamh4zyrv7XzTzKb84c8kjZrkQ4k",
  "key31": "2sHqXfja8qXmtm86xduYDXGgrqMiqrYYrQFbaTJbXQWeQXC2q9HmB3X4VKf8zkfbDRaLGLTGRLSKKausfD4NjR5H",
  "key32": "3F9Phx28smR5xVn9UQvXUcLudLHzzCV4bKBRPKmvmfkiXs445qeBXVpivQntXGsQdkstNPRMxJBMm7h8pVprMeZS",
  "key33": "4kx8xPRN5GcHLawyMqYXP5e9bffHG58urkyWXwDgPtmFLtc1GkaUptkpVVjbYZv3yseYPudwqfe99C83JgjLGrfJ",
  "key34": "5RVc2GJbjhRYoRsUKgHQeSUo4DRtx99tuWdSPqoMzRoqVTve3RTFynLkU6JQjBwY8xNU8nPDo9oFeikp3WHa9hKS",
  "key35": "3uYQnFq2bttrzCmsBjLtVr5aNJYMXrjijeAvYwPzgwqvfStA6wfQy52MAjd47rPmJTr1o2AJMXRcBjnSQzBk9Gab"
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
