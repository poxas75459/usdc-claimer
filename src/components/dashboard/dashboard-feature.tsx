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
    "64PfkzSZNjunvWSZbkmxCNqbZe63oNmn63xKBcYvAgkewBtbt299e7mvYGQGWdZMNWkCSR7fuNcf6cNbKEQVHSge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TZ6mhEw2sjWw32uxfb76knvy7BMmu4zbXK6r3ZudX5GMkqobzS1QJV8DEfhi4rqby7Nq5jVVZCVpueBUBEaFt4k",
  "key1": "5K7w7Wgc8m9BJ1VFiqApebgY1zoxdRBH5BjTxgwzvn77EvpnuLUgHfMpourauzUViet2Zo8udKEnevUcZpQBbPU1",
  "key2": "3oymAdmLM98zHb1zdZcCyG8qSfMvLb5TztmZYA3AohZt5Ds8Zhb7GQGiqCPYKfnPJp2gFNrEpPAPncwaz9Vo8kmZ",
  "key3": "3hvuL4KF82mKSFSQcwBgZgDUcmPzbmyUZHXJAskTqqCJBzrBECKhaJUhWX7Y6tciRZr987SBkPFKUTHCEMu5doH2",
  "key4": "5AoC6J7iojZkHEpT2ndXVbr6GSuGffeo6a1AaDxJqDubmgHdrwS1AcswEJDEvCkmjD9nVttvhuxE4Y1e1WsRFFgB",
  "key5": "3GBHMUvTy22zeBM1JhyRCPV1kFqrFn79dpfxRdXVi5B59Feb4zvZnfAhvVxYsFRtWDwFRrRdyr81d8b5KZxasqGm",
  "key6": "2FcjCCeD6uv4LtKBB2SBhbEBDqCb1h1YeXEraHR1TgmQq3KD1tBA5tUoR57Zhb1Xggy59jH4Beku2LBeVys5phL5",
  "key7": "2fAHoRGN59WoCMHS1JBWGLDu3hPxWjJng8FsNf5e5kTdtKLsHoj9NSrXi15pgh6p2zdrvoiJPJv7WotamE3o6nQC",
  "key8": "52K4trdkD8qjY6Auxvby7QhH2DxMsPX3wxSYFg7ymjNxhcsQfix6WGxUi4S1BfmrhXDnkhXaw6yMLesAbhRNYsbF",
  "key9": "8vNzDuJZrZehjZh76ZWCJCkD1nEe3Giuj4xdVr52yfEg5fCwpNUrpjkRsy1fA1J6DDe3hUxeSTYQpVfqQws33p1",
  "key10": "KZnbCRaJ3XQ7kkRJYMALGvex6QxmHYnD9jjiaRmAAf53Hmjdeui9aep7AVAkEuYcL7QxXkWuHjEY34oKrH9bRJB",
  "key11": "2qFVm1TbtSrcfm3JJk87PEVTRotUnExGQEFUgxFAPTd1wQCSyBdLCyF6ypbCm8kbuFFxBGaD2YBguULyLsq3GySM",
  "key12": "31da991okMKeWZRE4qysV5VTuospc9E4Me8TfVdcrwfnGinWUmyMKWxgCCgVqpXvpDEmTqKt3Ef9fTS7mLCmu8W5",
  "key13": "Wzj46WX1n1J4EsCs7ccJVBY2rzMzmXstRjGSbhmtRMSRmR7reJg2r4EdHMQSQbVwtBc6C2rbXYeZtYKA7YYUUvs",
  "key14": "2jkpBbQmL81jrZ5vBSEhrUDpypDH8h8KrzvkJ49rLYc1Dy6dnC98S9tQMnjoBiu4F5BTBpYS9D6qEwwBukToUB35",
  "key15": "3PJhZtpMkduh2v4qQUh4ktDEaNVBtjyvbQ6zRpTeX7b5miWRMpb3rwSrTDqokpJkiHMjKGz7d944Uu7fZb2pa5ag",
  "key16": "7mRHfLLdfS8G9Jg66w2Ji4wCm5rhE3nnGNcAgd2YiHspwpXvy4V4qXhNJn5QJSTwq43erivoei7uGh4TYty9Yjo",
  "key17": "4Dnsd6FncVYwCmDriPacgAcqcVr3Xu7HyMH49jQSjK2paHVB3DCvbibCREJtkVF9LAtvSBkpK8QTPZH7K194Dx97",
  "key18": "3EjPHkYTDEfNAeJED7TWZQPoB2FvcjZU2Q4u8FsY36DiTEQmfTENyh5d6cYoHJWY7NDfGE4cEhk7pzWkuJh1imLa",
  "key19": "5wMpiMzFieh1ZxsCk1oKqUEs4EzBLQcCBo3dHbhcvBYDN584LkL6xQ7BNFwTXoRKdvfebtxZKtyrjuaLM7G5LtNh",
  "key20": "4BVcWADY9HLB5m9tUXpTQnJYJwcuHZyQ8kmT3qcBK4j8e9gVT6ZfK7eWTamPxaENvTaa33SaXSgiujwPd5Te6SyT",
  "key21": "gbbrz7vqRABH1aZeNNn5ZegixTuuCCxyhidNUuPUrqbubKpt5KGdiQG1h7G4buFT5v4MyHjHKMr5WuJCCzfzRhW",
  "key22": "2L9h6ZHif9ikTS6C2J2ptqFsDtvimqqCMoxrwYCi4bU8z3dcZF6NnCfxpwmysfAbxBx3a2PQ9fC7FJzd932n8Qzh",
  "key23": "446EvJKddZw64Cc83nqHzMZUUnnV5U8PkXvMuUs7NunFdi4YtN4ahnCucnGa2YxJ5b47LchraaMergnEvoJL5LRn",
  "key24": "MB4cXRa7c2jhoXHJDBK3mwgSkXLbJDasHyZjyqmddgPReq2sLhdRoCjDhkxLewDmajHjJZW51eoCQwmChECWNRc"
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
