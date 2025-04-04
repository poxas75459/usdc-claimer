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
    "4JRjUMkkdEhHR7yh2Bn4zfaQ3WBexFRTWEjzr1BePyorMTbq7p339H1k24uNEGkVNf8dtbTNkbLBxc6rbZWtEmd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBwvBFhjdT8urGmJ7DzHE13MXuA8bqt9afw7ZBf72D2RDz6tgmxhX91FjpdQ6MbnXNosAiyq3JvH7BP4ZkG5a4e",
  "key1": "52GfqzG5veUPepdrQLVUxh1iJ8L8oSBMkr1vefu3hzrJZSj1p81iEMSYTVigMJKw2SGBQNa7jH1vFiKUiYZM4GpM",
  "key2": "4q625C7foX2Gp6GKbQPeKKFr82Hg9XL7Tzbx9AUXyWdADCmYnQ8LyYffmGBZqTyStTwrxAVfgo5QhLPH2DMbw4W1",
  "key3": "4Kpmhc1BucBPoqYvv5oFH4PF4UmjkFSS7aow6x4f6LRKZtgTojKho5vZeZNUKq21zr1oJYExMZPst2nywZgFpH7h",
  "key4": "46gMESeNHhUBuSDyLpu8SYcKHCBwVHbqQUngaE5sFCZQWz3GyEMRxo5mfDTq8LYMEeB4jYwTgRW46Tz7Kx5JGFKF",
  "key5": "5sE4vSTDjoSVKDrLbPeCf5RkpVveCkTtb78QFmYF48BWeVXPyhqF9iG5NJzvKVbHjz7GU1wrWwcDLezqSsmbaD9U",
  "key6": "4gsjsXAms2HBSQMPhodTVoKPgqmV7XEBhekDMMCiLs9kkEpKUAdqz8ad1TbmDMb3Fn4hfhrz3XtE86FjE5S5gmKE",
  "key7": "5R3KVFbErT5ENDmJ9EADy6uFx9hKugx3qxL2ewfMPePvsN1sYLLSRDiUp5YE97g4ctnKsVatpxqpRxR2wrUaiD89",
  "key8": "3sKZozxdhAujqgbGcDJdCeGvgDkMXD2FeCt8cPC6x1DXJ8GQESKW8SAMTUXSjMhc6r4dw5CcagnP8WS3xqvLeUfs",
  "key9": "2r4JkzRWuyAmwM1vhbhEdcyZ3wd4xDBq1so8qBX69NBNfzFNvynPMCc9rQ5q2CZq6rxrLX2o8funKCguzHtCQxdT",
  "key10": "5EpVRnFgk5hbrT39duPMYQGqUc27zc33z4yp2es42A83RDVrjYT7vtQti9taiwa9JZFPx6VWtDWWvExDQFk8Fd93",
  "key11": "4KWP5ktHeixscVxVWtYkBo3VyT7mbwLU1cv1Bg9tRBZUtQTawPHT53JyKuyAKLxgp77JjXvLXApHGfYetjh3qZZX",
  "key12": "rZby8NfB8R8jVv4vud41k22FG3uoyyKUP3MGnXwr8uzZ4hSZVtkGkqiv835ZLhuz4JK88UuHd8gjXTtKzTLSXo4",
  "key13": "yyUaMYHiyVYjUUWCmz6WPVXXaVQc6KiUE5N3EjdeZNoThQ7NZwqowXti3CwFhEVMpBux6s2Rh2joiEgP2sVAedU",
  "key14": "2jbKkb3ARemBR3FTEVVHYdNWxYSbnUMhTj1KLDxWGvJx3bUNb1uddQJ8P4MJL2mUJ4BLm9YJEBS872MirGQw2JTC",
  "key15": "24EtALhW9xzZomfw5kB6jZ2QV8j7xZDwpkmvf1H36rHFBmbYCQFU8ro2GaiqhuwsRNMcvrEqLYLjT2MiBfYwbZaz",
  "key16": "5RfmGA4jgyxeaFkDwk8cftbtHAfcvXA8pgW1BxyCeLCdhAJ7HjnArLevfmfG5VH4vctZXYVZFzq8ANTSQeQS4YWJ",
  "key17": "3SE2FRGEdKCN7DzwKN2F8Wr8JHfPz1a45NS6Pdezt6MACTZcUNV11V1W7fLr8PqH5W4CvuM6XmFSy9GnQqVDawrF",
  "key18": "4kMVpuWmL2k7YBCGCxjoGnv9iTog1zqGRGQ1p3Wers3kLquktGtEw8tqzJHJT6BYm3eAiVY3BVXbvqFMnJiK76hQ",
  "key19": "2vSxo78eYaMkzNRCvcNqXVHmirh8qQbYVVW3X2asBSoxohKsLeNGXhAmZBsCRbxGExY85h6FbKJcdichsxRhdu6s",
  "key20": "3e9MzmP1c6NyPWXYWne8JM6vK2qf8QGmBbjZEepMgQmWySvcapkp6BY1B4J9N4i4a8hpJ34ZnZLBPni5AnGPeX2Z",
  "key21": "5n4mYVmH3vL1JbahJUrQo8PkiuRgtxgUSUYk6vB2fqdEdy4g4uJtPAckFHizqfTKXdzx2jDrq9Z3MKECHDGrLKdW",
  "key22": "65az45MR6jzbJnfYEPjQYtCAJ4TN32mzH5y7SNqkZgr3uR6MPGnbsF8MN4w81T4DFADrCQxE7Wv999V5UZu27YiM",
  "key23": "vbAjziWcsPYtsqE1BTLPxfKH9xhZawjduKo9tTyPAVEsKXKoBL3yvVvFBoDKkktWPfx88adpALBQxkb1Vr4DPKA",
  "key24": "5zWwx9oR7WNxvLJzma9w6eUGRD2CzePfJaATPoHeAnVu7iELNuTVYQRERNBqFNBiC1godNj7h4KCqo22e4XJwd9h",
  "key25": "29GZNKwYgmvuifvK1XbAecBXJusnfhHvi3KRipzeSP5KnTbEuWHCMaGexaUULapjhAv8YYbzQxCFKuLpZirttgej",
  "key26": "3RNugNdXN74Ty9WPCefuUFK7jPhkxtMUDUCHsEgsMpPhw59Ns9w8c7Ct5k7A19QHHG2LPGjaHrF7VG3gyke8hmiF",
  "key27": "2wf82egdfouDKy1Tpk3ape6xyLqJu5LCakCEVW7byiZgT8aG9bBD3rkjsq9UCvebAqsu7xLd48aap2sgmVTsfFGd",
  "key28": "3ma1m8hidhXbZjSEJkHJc9dnfj3bbL5GSHwKAfdy8LnXMPPqfevkkKFXwjUjVFiBgt1Hpbq57wwQRi6W64sJuVWq",
  "key29": "3QLbwwbk3xBsxWytbGkXMwCbQYNUHJgF7xSztcCn4eiB7vwhLrRbc3HEhcStmDwDysVPW2bxLBgZSVCGFDnvAmdH"
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
