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
    "33fKSa5ySu2fXUWJerzDKAnoBz3RHCPFtMpTa8A4qMJpTUjvQhnGeRCbMTqYHioeAfRK1pMYtTS6UQ13UfEdPEcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPzjdY6AR14xCQ7oK2wyKEiwinvJwwXTJueWzqbvQKNxFXfdsRksLoTuPxP96zD2kK4wc8MyZYcZAS1SGm87xUn",
  "key1": "G41Zy1TXe3yFe6MMeGBgR9m1Ry91rUB7xsCfhHpKmRTPAJMvEmuPkvkouqJxnifTrUwRTSKX5tSFEV8xf6kyjbs",
  "key2": "3QunchULPoGmtXgWfx8DpqgHzyW6JyWnsYzhHpBDfYpQBHUCAGAMttwKJLUHzocDA543rVLW2setLK75Y1qjnHW2",
  "key3": "owqXcFUhv6LGAGqZ7EJe5fVKu2Qd211sE7BxuPKEJafvxeBiKnxWZbARRWM9PcnbSNc5SzyMwptfnnYfp2ibhk2",
  "key4": "37nExiE8uSVqaUYhLPCwFrBskJTCcndE91aMzqZGoshjF9mcJ8FZCheWUhDoFr8iYCoExXcd816qyN9SEnJm7Dw7",
  "key5": "zF6RwHYgNvEiw3GJNcitbHK4DUX1tpBjVzMYPnjVassnjWfpBgdrVVryFm9DvzTkJ5KyEtcaMgv1UaQRu7WVBvQ",
  "key6": "FKVKXzHEd6VGNocobD3rTjg5jpyremDnSAC7ugFAzyqd3tNbNyB7vPz51spuEDtT7x2rCWHQbgSaeZjwKYgGd73",
  "key7": "wMGScaKtDGDXHQFscWST5vRe6oxrGe9uGq8QiHs3tVTV7DYGZtqqS4BPELgBKqvzbTg8WbCXRJ1ypKcbBehQ6Eu",
  "key8": "518DomBgXijpP3nJNJst4ae2bNt8v3FW2TSohkyyrY4G8z9c6MRAvQMMLj2guQNpuu3SmfSJGCaDRgnfpMkYEqRL",
  "key9": "5TE5XEDER8LS5uCDSwEWvXhVGmkbajjWA4xUoE6AQ4pLLkt6rQpP3ezP2LqUKwMCGtgd128GbQbunfaCh9cy88gJ",
  "key10": "NEAdrB2D7xtExXZBhNVxSTuGJy52KYmHNvxVJnLFufBpMUAwhzXyHe61Gv27pWv2CUy6NpkrTJEL5N1MiA3bbrN",
  "key11": "4WvLvisnwjBqLWcYbFaus8iZWyF3vmvm713Wia2mfKH9WTFz82KEmvt5mthudLfkQ3H4AyiNcLQ5eYxBwocTY1hZ",
  "key12": "2sPnYwbnMyZ8iE1YZA8nXqbXaF4gLJeHJioKuJK4QSZci1oTmGHjfTw5TWx7jYryzAcKoLFKjpxaSdd14i5Zapki",
  "key13": "56xjJCDupjHGacVcYYcmkjGDhrT8PU1wkLkconRm54Jao6xFgJngHRAVMaeREBuAkRdR6CYNdJ12tCNnmhx8H4P8",
  "key14": "4MQrXskKLNGc1xUASMoWwFP2PGAk6gJzszE1X4EauW5TUoh1Ld4DtPtSsmLEXTnVW8zsPj3k3nLeTSfF1oCi1GaS",
  "key15": "52rAgSoTTFpBmExLzrZtxA8LW36LjRH6WjCZcbgYAAWQBaqgU2pF1LvLd2LKGjC5C6PYNCBpcxJ9cCzVC2PP9JXh",
  "key16": "3jmkybH5nEssUsT52z1C8wGz993atcdRntYu2vW1qjxh4MiCHtnA7CTJvQfPh8MpTKtiqV1TkCGCo5feYFTDsCkQ",
  "key17": "QgLR2A7pGinym1sTTuvFd455R8ohfhzYThHFMWm69KaqJCUaZVyEQ1eQ9n1u9WBrQk9miucxShEwRF16tzVoDMr",
  "key18": "26AJHA6Mp97h3GUgSnZaxcvWrXpMKd5hfdYxnFfEEZNwVHmTVw6X5ZBbg2chNb2UPp1qAo5NE5BB5Ty1Ys3zRsnT",
  "key19": "23hWxN1rNKVoXcWM11Leo7XLmWpyuM3zPDDbSKhqAcSq6bZVfbstHCCi8v2iV1meFGhTJztPoWCKByHKsNdEjahy",
  "key20": "2ehU9mLaV8miiESZ3bzr5CBwtQvSjRL62ZGtcXXLgyB7fkoJC1i1BovNPBmNLcyhPU61V8PK5NT8oFBYPMzBjgaW",
  "key21": "5WEZE43v1V1GyQphErvJqRrqgZHfgeF3B9tLeaFPDsSpU69cXVaHmHFgQAz29zDgJx2Je4hNnSNiSUGPQG8mfNPt",
  "key22": "4wau17WfQbF7KwmWrWXi134WcRC3nfSnSAGBvcZ5ED6PjUKRG4rJGN6yWgeXYCG8iXgw65xJVQMsrDiyW1TMBGUc",
  "key23": "HYVMAdXNW4ysXwqTKAyASxRT8JiSwwfx6WU4N8SqbkA1JqXZCvQthDjyFRAum9AXzEPeZfxSk7hmhmGwNNpVgH5",
  "key24": "4UYZBSuW1DR1V7AL27XZTReKZFkwzQsfAffP8Q4feXtKZH5mBqPZQasxKqYYsgAsfKXb7h21eG2QzTY8P1xvmQ9a",
  "key25": "DtskRaW8Y4FjeRsoSQpbc7wCSmBK4ZAnYXw47SoJxkWhGBzeePFYwGMnHhuEixqX6kLfWa5QbJFZANw1LYRjorn",
  "key26": "4VvsKtBPPik7L25UxLCKmf9xUUk94Bb1Sh8tZz5p82EgbgXv5Eb3WaL5wid21wLCd5P6aLhnogK7BCe9FJ5j92qg",
  "key27": "3ujF1LcpKHkcoXGFvyysmif2qUb9DRmwdh24rHpCskhWwLMwiynDcRmbfUwtc9he9EfMBBaXCJrsUPDqatUokD2A",
  "key28": "dJ9myyKgxJfsTD7sVciZRNVAjUQ6LVzsGAoa87up4LcpDAJxeMne4rEChghsBq6DUmBFpAd18U9u7XDFDT2vLah",
  "key29": "63Xn7u9X2C6ARDGrY6hp9MHK8eEBGhx5JLoTNJMQpY5TSxiMkvhY54mVK9Rteixa9PShVV3aM1MfNYkcz4Gwjv7X",
  "key30": "4n6tUAtPLnEJ4qR6hHMk13Wqb49m8aCL1nvPspVFthp4ipkNLmnMe64AsAdBL63NHJcCJcXYi7VKkavdBvZBEZp",
  "key31": "2winuFAVbeRmQCHJUfB6msZLjXpffvkbN9MPahz8q48P1GyiiEddJcQv4FRmSddeK4pTFCq3JBmBdGCcumWKj7Nq"
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
