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
    "21xzKCc3JemVBYMTEWJ5VE2bqnohUHM419V6pCyRCnA1yqUzbcUfcXBnH8XNX8PSbAv8eUgc8u2UsQFfJYfnngdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQb5e9iXcxWAbqBn9aE3eM7P8abQ7YUXapv1HDp3zc2TqqvjRXNLyHgu1XUN7zxBvauGQ5YUDLg4QshGwBox4g5",
  "key1": "WQmaX4PoxTUJU9zqT5mpDy3zCNb88b6wKwwwQuN6CCE6Rk4991A4QR3FLnvcs3eGZmRHTi8MsoXZ2GFh18R1tqe",
  "key2": "21i4XJ4CTdzfZpXK3MSGVBRDTUKBwjyH5PUdhnF7oL7uzkY4AT1ABAS3bwyBoq88Lckx8d2wyQQCCvhxtkV5aQHj",
  "key3": "3QYU7RS6VTSz26dFXv5unszv13zCPERNYzeFAFXLUVaxtwR8rd1xZUg2M2jTWCdvSVX26KVK7dfN5nrGKNmzNjHp",
  "key4": "GXPkxh8ai4b9rJKRE8auziZ36pvpPY4ef8sdCfueA286R6VDq1g1oJw78aTroXh66nGBnWoZf9qseQSZbKYcrtR",
  "key5": "45CQgArvkNFcQyGdnp6FCwJFDtyVK1xaLFFoUjrz7DVaRrMs6GaikXAHEYEm1GaieRZpeGf16cyyXHKMFubz8Wke",
  "key6": "2toBDntBn2TkY5CQ1N6geEnRd6YZ5vEPvdASBnzkySWNTTS63SUGmF3SAiosUgHPU5SMjRPNTCypdEpk3VcthRg",
  "key7": "4QeRjnGANUFBrCwUG45UXvxeHkE5YmknkbHeP2bHWunRRuSmacwXYoKE6XGn9n2vieXNEy1Ckc7fmp3RJQeymUEm",
  "key8": "3LkPfDoVEmn9pTgdp8eKnKSffemYv8VQ4YrWniqzQGf7FTFFS5QByxmxv5TJ2rLTT6BUjJfiebScyR746XpMciMz",
  "key9": "yBbmCvxRqStGvETzaFRUZQQ5MPfNzEka5eAKTSj3K4ka2Edthufh6BTgXosPSK7x39HkdLQxFB2RMMgB7tffDvq",
  "key10": "N3cWk4LyPqLrNxiUSiyJBGo3ZmRaQ1dUs1h3EpM6inm3AavDnwBQLC4BgaQ5suaJbPgnTFCT28c4Lj1muxJGYf9",
  "key11": "di6dEW5op7ANnz3Mmg9e2H7QMZ65si78qimLbfq47AU2LYtyNYWRZiv4jtbbG2Sp1P2CGwZFcBCGpWbbyvPfMCb",
  "key12": "24AzDCex4QFUgvYyJJXrJSWMUZdkEFnYdByr3DvykRAbnfekT3fNWtnHyrfFFUYWefocDXXGwPuVj7EBXPsdTMsd",
  "key13": "HUxwMaTPkMY2Cn4JLqLmL1nVvVK1fZrhMXDiBLv5QDp3RSDmSx3woLM3xg483JMXHW8EPSfamNS9py3xkXaT5aN",
  "key14": "36mys368mp7Feo2CeTPzZuhLHHARoeWsgz2nS8iyU95qvFXg9Yesas3aJzswgv1abnXVMN1piQuHVS3FXHKLt97g",
  "key15": "SgweUtcT5jZkSneMhmsTxWnjS1W9VLHLX6aVTLPsf2b3Rfbt7QHTqQXS2DH9RrxidNQpHevPUJB7qtbLY8v8oKG",
  "key16": "33PtXpLcrjCEY4dHXhGu8v64BUxxnBJdf1RkWd2QTzHniTg5Uq429mx5atLZcxLDDUF3wAZbvtuQE21jRwujYczH",
  "key17": "5CM1diPVwcTHocJUb1zGUSnJgBMmWs5CKQoF4ZeEc8cmuMqipo59HueV4xXKvM9VVjx6ju62a2Lx8HCvMMYqZk3W",
  "key18": "3mVPfSuvi8HaBR2B2E8dKzgbTHa3NXQJxaFd6FyGwt1uNd13AUTiUC3wiDbEvcoP8u7EDkarunHSuzY7pPTa9bQS",
  "key19": "4gBxTihZSRPZpnDt1RtjGT7ir82dNhgfAfKEtWKeGacNJcHURqL5n7cL3175EWFdYaXgFxhgZPBpXduHgSZwRTrX",
  "key20": "32z3Q32pNsHcNZfWUXVvvzLQj4yBa2GNns26yR6bpvzqWAatzY7WmFMVyZTPxn8k7bJNAktW7oK5UAdWowMCVjoP",
  "key21": "22ZTFSNhVZEAKwisM9GCYRBu7csEXy6F9FeyjobgLUJpYbtupXSyqesaoxVaCGYN7AchYrcxLswyTp7TJDJoT6ka",
  "key22": "5syo7YAkSqiwFoJbb9kwJLbNJs8TxwxMyy9ESvMuFSN4fE1ZjQjSJqyMfsqGH41VDmc34dKemXQiRnqYSqZnd4yp",
  "key23": "3CBCKWYrWv6HKdfFC7mF3BKKi4g5E5NUhDCi3kgh5tZH7CfZaBj8KGgDsfoeDv4mmkahr8gvP7R8YPvL21MtC5Lv",
  "key24": "4ZcfjsHcoRBQbtjs2jU4i1Tmbwm2GUraxRLzaxCVoLT4fumV5nxCuLKeDtw4fhHoCkXvth8rq5QjcknFS1LfC6Dg",
  "key25": "5vN5zqNRsd7E1c5DcJHav3UTp8a5xCodfVj7cNncWszjRRLWZDz4HVqEfNPKL8rpbKGv47BTEdGyFp81EAWRRNFK",
  "key26": "3h9i4pnYi97BAZLf2pxc6BLKjrrqrFAkvrQ7FmVs5reEyrN9qUjRXFGJeoJDxidiF4GgkhsuP51zHmpQqyqcQvX5",
  "key27": "AzrkrCiiF5qskmsdS3gzbaw8qX8tGDbHYgT2puddzWn9faTp6UkFVKSGaGaFrmLLhNFcPaQ3sM3c4csb8w7GTWb",
  "key28": "2FFigMRoUXfRtAg19N7Tht7MbM6p4eFY6Th3bCGA6bTnhgDeKTditnaVsFhBot5HKUyS8V5LwYw3VWnyvGHve9PT",
  "key29": "MUnPhKsFMjX2v1mujb3aBX5v4uMsTm2PzuvgKcsZKE76ACekmx5p6F9STfPeJJsC93RKhZQZ9vGMUEqcNWrEATe",
  "key30": "3igRrHbK2ygyFqqD2x4FeFt1eg96epn5SwVK6ERstpMTZ4FYcHmWAZo9rq6dkhFxBNBhbaVTRgcWBPf5mASDgCLC",
  "key31": "5rYjnSweYdPh7UaT7mu6sXVaoJoqHTogLPL8YkPWJt7cCdgJ5zN1zhcuEieEVhenCDfbQA8DXnR9Pwm2qjZchx33",
  "key32": "24rXYYWfKoJzJvkvJNrPXuaiKtnAB4E6pQyRd6TCp9WKpdTB21tcEyQHQRWntS2jQ9LYpfGcHKPxsijRByVjxkL3"
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
