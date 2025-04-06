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
    "3qSUkw65uQDoYQNfkk9CFxV6N3qhNizKiWGMzG561wHvny6HcXQZ6yJWNyVq5xiWCdQA434mqHgaUTfWgjkNhstE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SyEVKEYdzGhyCohQcrimAexRbpoY7ka3bQrCk5EXEnuAbF3qQrasUSjyXMrkeWX1F6pdd9wNpiit1Ebpwi3RTvQ",
  "key1": "5fkhzxbardvQVPdSjnkZr3x7sEpiDkhVs7JR23QKsjz5boqLPenBqRHnUBxM2K6zKTSz8Ys9ULq688QUrMjtAP5c",
  "key2": "2ATsZKJNMwioN6kFmBCdAcXNW5jHmwfQGdd5gADtPgaG68XE4pCMAy9HaiM6tPJRNacXKVyNrmzxS8kePxFXDqpi",
  "key3": "3bGnQfPSTN8XAirNJ42rxuDLVstcKusgAfqdcAju2do997SxBdi7fSFiJG74reNcChL2akszs3jQ9Tv9AhugMv48",
  "key4": "3tfnreRdszS9QV7sJhoZi3YPGdNmEAU6nE6NqCLDAWBd246QEVWZ8a4jLL64HHo8xRohesvXiPvP5Ac22D626KWw",
  "key5": "4tCGnTzDMvvsWgSUrvWZu5Nf5sRjh4akYwKLJeti21pYfkQazgrgK4PmQWry72h91XqXfr3UZhyJDZLjC9fU9PD8",
  "key6": "29zo6bXDVfGpMLDZHkdpeEE7CSCLvMh6trGiyh58jNxm6gnwgsy3bQRZMv2vyKBi5gcPFQLGAuNWqRAMzmitJyxP",
  "key7": "5ZNQzaFgfYfdPNaZQjJvP9p9MjWmKwuHohwotg1CYgQfcF6yiGoBaafAqw5Ue24Eq7ThrdmdEyyj5Fk5ePWWdRZ2",
  "key8": "4oKALgsd6AVmraB7FcCgD8x3A3T6RqY37P4aKNhepbpPHDZDLqsiEfdbvt3bCK1ZEeV34oEdfdkZ8rzidhU2Qkzw",
  "key9": "rMiUqTzuXpuBc7piKPNxzqyEumfEs3kaas81mQxoQW4wy3m5GmqXSnpZtx5GC3AA9NzkXU2NbYHENJj3D4Uu1LS",
  "key10": "3G8uCzwR76kdAhxvPsKEx3Rt1o9ge5uL89SxS1i9DbKjWGFajKGjDX71cMkpw7JtMBKFnyDqq3KBfdzp7fW24bCj",
  "key11": "b3SqbXsWQHnUhPW3KdtMSCbqZDhFR3DMq7TgT2xWSJ95Vquzy92hNJvK2ZXAaXXXv8UWpsABXyHuqNdfkDek5Vo",
  "key12": "3aVXjJXFRWGGG6Rc8E3LpjLdiDpygVeoUhUrGkfp4Hp9bCfYtoWcHpRRhF6BMofa6z5PaZvgG1bKzxfn4vFr62Er",
  "key13": "4XvAhwhnFhTfMbp2D6SR3NPQaLsLNFUJxDpFtDnyywDW2bKA22kh2SE47XQBVSgfGaqb3gXqRCrNrcYTDdJFJZnN",
  "key14": "HtJrWMtPvtDxF4LTdvmiaRFLGiCsbnwpsaXKzdjCfFTcTB4o3D6xuhSY57qQ1bQLczxFnP12D9b2wRNQDPHK6Pv",
  "key15": "3fqfXCy67HmVzBBPiNbQrUaKp6U5y7373kRLY1FtCzsCXh3MmFf6AqFwtzeM4PTdSNHvf4zLo9omSTX6wfvFjwLB",
  "key16": "jWuUQ2UZ7gKX5sTgrZsiaNxcTkwMLBkWhQX2tAJmbCDeyMR91g8T4GxKjSWLAJg3ujT8XmstEJ4mv9sJypxq6rC",
  "key17": "2rfJQiqZmqNQoFedC1eAt5UfVGm66etNsHdWvZ7TxSYRN8omC6EwvyNxWmQsdHGaosKxFZBz4DZqoNztcamPVPak",
  "key18": "4ZiuntZrADhXLn5psJTu6F56xPLnUbLB2LtsYUvuKgEhXcD8fafxZBibQvGq92StAQx76SWLvBc5fX1ATeuzPXnq",
  "key19": "3fevkrXweC1iJghu663yRtFbyptdBELTLSth4DBD2gBmWtRVBoSxUNxbm8h6mfrYCTfbydYUxiuMAKSyHYKTuLiV",
  "key20": "3QAz4q9MUsBmR6QoFA2U78V4cgU8mRcuFgoHeEd42bkxW2XH2NoHHofaUqdgmXQbgKF11gRC6yRKngzNvi7Wf77k",
  "key21": "33VQiBJ9MXUWHH7931vdh5p2YAWqX9AffcPEMyXrN6vo2Kyja3zr2tpk7o9iYrfjVSqKDRoEt9hsZeX45FdnK29h",
  "key22": "293efVPBEjhPF4SH4xUNvh9Zr2qahW6D98Z7NHFG9w66ZJa6J7LBrUKEcQwoV5FQUhfwJ1qUZpEXd4xy1myxeoVj",
  "key23": "5UmqWeWUxEv1S37yADMf5zzhx1pqqdWXoL88cuUSTDcrg8qwULstdRvGPmsyQfqoFUJUoZJjB7GgVD7wRy2SSVQp",
  "key24": "6ZUpoMvtNkphYBMhy72KHSMZqGv6cZ5iHpwjiBNN5w5VTp6MWRQADPHKn3Ux1JmyGBLiYL811VM8oehN8ZhUsHh",
  "key25": "FpuzRHff3MNd1LSxH268LMBycpJXmFUPkq7tZsYJLjmXPtL7yNTuxq2qZyVhcCbDcfJndu49cs7YCw5WHVkQMhn",
  "key26": "AmivbZiNh2inoPJUoFUseqaV8piUD9u6DSTQ9a5UyPPLsPwF2hG8j5xr9wgrjrxLmguqWAiBscT4Cged4XfSAoz",
  "key27": "drVso5ua9Y6AXCVDxtxHjWQn4Mfqvv8kzTyjQgAP5P6cX8fGH8pNsZWybXFmJkB7McFndvr5bkhbUQ7bSA88kCt",
  "key28": "3W2vRTQ9DdJwnYWSJxPtvwFT9aYtkyy4Eq8x62xhuBR78nrNmcXGng3DiWezEYjT9bJAskdpuFwVM9J9qPoVYKnh",
  "key29": "2BJe9dzN9234RQGLb9xrAoGaDcG5RBWMVzPuMDPUyQuP49cRYAychsM7zsNjYg9p7ezHd6EX4KcmPunPMpYaxbXM"
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
