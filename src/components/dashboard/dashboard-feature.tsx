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
    "htv5Mnx6SfwsapjbZDBvpZ1BsRxdnu7AREF8s5YgqFTckqKSVaiJn8zmCPiT7zLDgwXzPuvNDu8fPZWRzLgmDZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wkMfMekSMxRV73CCE3fyfqN3WYDtEoHH58UKtkM5yxPJGm2KYzVkYMMrs6k39RzwFehnS74v3BptEowCwggRdkX",
  "key1": "4zg1ackemJ8WTiNEj6Q1ewxf3p5zZtUd7hKnMazRq5TZYmF3uScX82cwQhex1zLSz2Tfpg4WJuLSBGb23BKAuAWb",
  "key2": "5PbU8PspQGzBNCK8EnqwGfa9q5RuaDEkkXDXp5VxGeGR1peQ7p5jg33GHpDLBn9EPqYGbD1zUTX5yBagUPW8NF18",
  "key3": "2tq5hg3iNMybpuN7pWy93DaKrmk6DWJj6vhQJCmRmnWTTCJjNBfjRy5STTGhyZMEv8UdXxF8LHv1W8mnoAr7EH51",
  "key4": "5g9azFNtpuREaKbrSTPLn6fjh16wmz467jk4c2xg1RGrNkAsPTy59Lrp9VuWAv1WjJwvgnshn8oHhDbdKBuqpX9D",
  "key5": "2HDpck9hmak18gTrhT9fL1tqFeEapsWyEKgjnhK6dz8rveCm6GgQrBbrghf1BKmutXbNhnAbYjQnKn4FThFxk5h7",
  "key6": "qV6E4ofu6M7jvkcg4Z4hdzjG1Fm75bNVbe5xeWFVzM2TxfmpPMjCZfHXRjvVUaHmcYLZ4qgNacKwZ7svhgFBpdb",
  "key7": "4FMoT9qv7eF2WbkuRHebsu6JaEpAE9bfebAuY9uVzJDdAtEXbZSTftwRdm69i8ThgTVmDSKxqHVRPizEYWnMy4BB",
  "key8": "5TYMtue8LwXWj7RcfzLWxgxuqcTiUaMfWHe5CSX9LC2Enc3epCgNEZQ66uvx7ontca1Eq4NkQQ7pR1PUNDoxFPdT",
  "key9": "3sBwMxasNvoojABVPDQJXdBzS9Ei2SCPeFh32SHuS1T1uBTZTwFFnbLPPzUkxqbxYbnGy9KkVrBYNtFjUHz7YczC",
  "key10": "V47cawtHqBo7QrKF5fmndYmX4NDoqurkXrqvjMEP72JXCYegRrZfgbi2fY7T5tp9YwAk5iEHZertJqURH36v45V",
  "key11": "kyZ6n6cjco9dQPUQCvcKeFxHKSdhCLQHp1tB13uN1FKkqGZswXEB3TqcT85tVbTwXQsTzm82m5xUbHrWoajchg6",
  "key12": "4MukF9cKq1CP6ZuPpVfdetrn5vpctaAh4irinxEHvuAQfMfyfmPU4yDsNW6vdSDwf98VjMDxf5YPkTEdQZe2A9r7",
  "key13": "MxHtfbKbKkToPywEQHKaaHJyLA7d9Ufi7rAJ7VQg3iduUqUDnhjm2pJV37Sq9zQb275q5NDBaNmVuyVbkJgpBSL",
  "key14": "4fvjPoA4RouFHYcsEwkTFXwrg1qCTzryMVfrjDXjp1gUmn1J9iDtHTbw3mTXeH6S5dEicSxinhhrqBibPzJBR2Nq",
  "key15": "5Y7QTW5XbQtx311iwv24dRgoAru7v9TRyA2zoviuBLHZ3RLCr6w7iayTgpd3aYsu8KKtPCJdRCaph1B9Qv6pi8JR",
  "key16": "3rnjt1SENwFu7vMuSKiJgNFBS6eemfhWHXeLUZNrSXJvte7bYuNosBu9xoYwt9TKGioVHydAAyaEofadk3ZKkX8s",
  "key17": "ds2wqUMYRmzwvYQ29RAqgBfEYjKcZF4fYbENU5QMRJmxX5D43Npq6LxDQ3EonSXH7BYjyRddYzTTVpXFKHPYaSn",
  "key18": "iHH6vRUo9runRUA72Kn7rRY4g2PVmpRiC5Bq5NCrMxV1ycNtCoM391nG51bxwn9w8fTpLXhcfCBMPQS8snD8exY",
  "key19": "3hth5gRgmmge5oE77v8vzcRLQhpJhuxpVho2J6716wrV7h8BsL38vUaury5NLirTJMnaw4QszrMAnMzYw8uoDGi4",
  "key20": "5QxsVEw5biydSM8EhRRyhw2gWHFtkAgJK1B7uxy62prMGzGaSeWEwXwwZwBLS5aMKM4Sh7J9sAmjcCnf4wXQmyBg",
  "key21": "2YUYPN1t664LrTSfmpTf5668wmcZzuHjga1zJrShQCkhM3TdwHF9nzjgXNnD3Mpw8n9WquzpApqwZSWm3AMeZXyX",
  "key22": "2tKLnKQqe9LpqJRCXVYymMUQPYf2qbSmLz7iY8QwevPuYc9w6cKr1Y95JoiSn4EpMvmV2jHbNjEEAxAu4ZUGB8Ys",
  "key23": "5WAdxB9wXuMejjDpNCJM4QRZnTwtQWivF4Sjdp1sgzs91CUmBDymf7AUxwD94PGxSh7inLoSyGgV9gM6sssjSSY6",
  "key24": "2AVxZ9H9dF7oTTiWQSa6McznZzDYWGAYD1n7MPT8XMP4bgixZc9rZWjJK2g4UGxQAvHrMC1TQhwg2mHcFDk43JfM",
  "key25": "4nuLPWFYM2yGphPfiG89JoGAJ38ZAzeZ1ssEmV7jFG3SE3NEjJ81DWwbozqg5RA9KPvtUxSkjZvrKRv6Au9f35Ep",
  "key26": "f7xfU3RfJRc8B8KP36SfNdUzsdGJ6RmR5jR21JLTNjHkGphbT7W2wuabYZfBFbzTRojVorePHTM3XzEgFFagDKg",
  "key27": "2fGVwLVMvbTdvudj4SjJgUTrqj2VF8wsy4S7By1xSJRPDksGboPNDZsRYwJLpAHPqHRD7K8MuXs5APFUVnaa4Xzr",
  "key28": "2JUqHJdgCaCSx2zfLAg1rsvgMjU2ftLiyHeAZ5SxwRFmXAqaGmCzhYv9hDYkBoHsvr588sf485WMNMdKqy8x5zHJ",
  "key29": "3ij7uDUCS8eMS1FmBqzrbuA3Ms5bo79dgwFqqiUgweiP3pLBgnxQBNH5iALSwF7i1fz5W5rVbSJcCT7JNRrZdics",
  "key30": "5Cu2rnhjPJgqGLCmuiax1XhJW9MPbzzC5fWRnvrVb6pVg7SVvzJJLmk22cwkSuTGYAzdaHtToFrkVq75vn2oKuRf",
  "key31": "2X6YjogB7MaDtpQShtJQDmvxjVidCnc4EyuFWmehYk4J1hsU8kmWvT6q8mqzmzjeyoJoze2FqYnVJM1D436v9JfK",
  "key32": "5ScGPn8Se2qNJktZ2tGhtPU41uLX2KaU2J42UazkjifHrWkKWRr8VQq7tRddH58gcKaqzb1WZSr5DsFYFSfb4GDP",
  "key33": "2SSqxvD6NUBkSXbbzv6BHgpn6oPCYXgLyQ4MeGjDmCBJ2njdKKMr1FN6TkENAdfj3KG8PY1M46tCrRPvqdLiJ5Sa",
  "key34": "5pxLLCvthNQC9nKGa8oCYnj8pzzZ8nsCmhFAXxZAvDGjrtC9peszWumpQFnPZhnvZ7ULkzEumUoWAaxozQfJiU26",
  "key35": "ziosKaphA4nHc2HLXPEphistx4Br8Mb1nDYxzjooFa14m8ZnNgJcHhLZ6wwfm4o9CVijNZb5So3zDz4arg9LZmR"
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
