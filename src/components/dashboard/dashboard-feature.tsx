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
    "5QPeEhxsmHFARCv1craRBwh3juVtTu7ja4EW2M7mChWp8gyHdDQptjHFDZyepLfe9vdbRMMCb4Y7wBYRVnVD3TUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KGW4fic52xSq5dFhSMbpuWmGDfswN3hYfBAP5hc6RjTLAS7ZKpmdecWvrx9MhAk5uuMJCMqrcpPCZW4kXDdutf1",
  "key1": "3gYeHnDziWAvV8ARK9TXfwmGodZXo6aj1BcYgcoVfybyj9hwR7g7V6byF6hMXdCwWh2pJCAM7R7zyQt7J6wGs3jp",
  "key2": "24h4Dhv4WDXWDiVfsCr5tGJYS7jBKszhuHJ3LhyGou8KJtSk9K8yGUWnSD5UH5cribXwZ7zAF9pJnZtTMUDyKCyg",
  "key3": "GV4BHCdihDMu9SzMUzwh3h3X6sgvTwdNNejX67gmpaikqsi8CTNPuheisvLgxdBXfc66gmfgw8NMoQjwmjvL8sA",
  "key4": "3kEgDZUrNAvzsYepLRfmM1rGuHjkjQ7QivQWzevj9ua1pip1GeX8ga5CP2T9JL2B7HEdsopGxDxSuazUuZ5tKRAc",
  "key5": "2gbyrTLfpE7zv4dMEykqCcZxuVvF5e1EbVMZs661xfk3eqiXMEgvxiCoPUqxUtDaAKU1g7BT8b5FQ8EreCkPCng",
  "key6": "feVTeTFDTiSzFtaZW1EweB319N5izwPJpUiK8xDpQ5f8Rqh7J7vVzWtfZ2tSv6TtbpCL8iHQWFsNnGyiCnSZ5tY",
  "key7": "4XnVRXd3QA5QWMierGz4fmY3yKVbqGZX4fYheo8N81boMScrAohnU1AjjQ5BpzAgBGhWq8Ub9wB2AjUvmWgm5s5m",
  "key8": "3pRDFmpu6bHvmHt2h5bQ8vQgYyKEr3egdcXvU5RBWZn1ysJkW1rfGvqMWYDsQKqHb7HpKJJKkTz9YRg6qMLeYiJZ",
  "key9": "5KhVRL9cx44oEsx1jTs9wXMRQbQXq6B86zU7vzrqYnaX1xEfoiMfb1RAcyD4kxxy9aZqdCsfCNVipMCnsCL5yVmw",
  "key10": "3BU7idjkHWt2nB9QfoXqhYeqVhYUh7UT1Xp8gzyi2wq52fjcZu2AY9FZcn21gZY5u83gVPLymbc7CSGvtDiE95dT",
  "key11": "3qiTwjm8PHucJcLY34XFGAX7qJiLhZ91RufUSHwYiChRS5NqZfd9T2DuK2XshxJXg53NNHT7Kbeh2ER2NLt6mKdB",
  "key12": "KyNhsF5K8AvpBGxMMgcdbahcDuh7LVFr4ywVBXYqp5WZjCp6o1SCgqD7ktN4Dsw8836D2wkqUYqSFteoh82DNfB",
  "key13": "rdVUBeKBkJXuMwYhJnKfxjQUWPMEBEs4xLj35T4xMwzTgSBYzTgqS7pVfhUd1H9D7XsyCAER775Gv4w6E6aAhLr",
  "key14": "5LYnD69qeKtCk6mvtWSUkZLr9pt7zXCvZDtgKuJzq46RfX6ka4f5HCvcwZtBJMm2ds6N2Xp8kK7FMBLMU6kY2a2w",
  "key15": "542BHiKpbvxPouG6KRB2DrumPSwpwZwMeTRMKZtQ6GSYsPgTs3LWjuc744oEPrLgEraXFYVJMrDzkkV48B7wwEDP",
  "key16": "4fiDpLPqznB2W9tb61xwJ1sEzyXRe92jU8Z6wjQjeQV2WBoiTuVmtGu2vVKAKHxidvYdGJ2cC7knYq9D6q6kN4hL",
  "key17": "26uvgsnLUN9i4rnd9x1TXxmy48wgP15KCk2eEWSdsoj2L5GMPSdLg5Y24z6UZ7mQ3Bf9KPCWEMmBLzbwKLfK994Y",
  "key18": "mF4d7xi9z5BvgoxSQWbbFHL3dGfMrY29stERfHCA3ec3f9x83JqbsuDxdczLU8mtm4mCzvaxj6iRERZ3SeMwYZw",
  "key19": "4PyALGMZxBGZZNbeGQZ7xWRxxqdNEKFRf3M3nP4LZSHFBc19mgrrwT3sktp4VVC7JEw6chrtgqcVaQ5C9ZKHmGc3",
  "key20": "4oJwknD2mZMUv2Wx8TJH7KqUUiwLKhPMM7kZBZpWL47nxtzbnLS84YZ7fSx3ZJrKHK59DoomukMEhFekc2WpmVej",
  "key21": "265dP2K86MFtYFaxLniTyWV7eqKR326RAne7Ttz5SrnaXnRfAkEPLZhFWjTkWmaYgA9ZtoU9BWr3NLm4CVYjQcFs",
  "key22": "5WrCQTQKPWwqqGpFAyRTzkebKWfGEKPuBAqpSmCtYFrbA6EWeJXuwfg2SE485EG2ac7Dad7vT1A3NpDZwgXCMinB",
  "key23": "58XNZ8xbWyTU8vLDLn1idkKm4qjWAcds4myCWHUeVTaGw4D2wcQfiJvXUVJLiuvpCH6DRvNmJ3G7aHnbAvAnP3yy",
  "key24": "2G3wvrmtQbU83h7Xyp45ddp2TPDfHAZuFd2Ze1BVWSL1CC4vEpdYcoLFo29j67FdT7JQFxeCqyDqrBjHxPCUkxck",
  "key25": "5HGHXaA162UNxwGXhRExh47HSkrgCipG6SoUmx3TGHpVcriAFNu96dxQ3LgHv4LLfzwFpwPdYLATHajAVhPtHtX4"
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
