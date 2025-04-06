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
    "58zK184TKBrKfEaY7pA6tNvG1a2RcY2JasEJPunngCzDTgYo96gougfy8PgwocxKqD7CjrMU6RmMti2HjUzhUtzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RyySqB8XVEdgYZ67XtrM8DRdy7JqK5twBjW4kZbWQKtUDNSyBrUwAWcVrHe7LUKpZhQ1qmQwUzUQjcB14wuoYbM",
  "key1": "45GkCVBvPBYytNyXWZUanC8S7diKTuiN3WPJyZVNpJikMUpsjyvZ5S82odVPNa7iR2hm4S2agPCaumGUte7RkLos",
  "key2": "3iHUvejsV12H6KASWDHd7wMfu9q4PHTkSvBu8AtwTNxGMaT4hkEkFQZwxYs2TVcPgmyHwtbQHbKiMXHAnYExftJX",
  "key3": "y98prfiXwgP7mdSCRUjLnP448Mod7HYRE3xM6PGi4m1z4VrdQjvHGFNRE4Zt3frpShm6MmRLz1sr3FkTbQqJXAi",
  "key4": "4gERXKpw66Tuh37jE4ghdmv3Kvjac5MPPoGgoMuQk72rFU7gLH9R58rdM4VgvSjmYhNhJwgpkFgnVv5W9p4Qh96X",
  "key5": "4JFao51xvFZpUrHtBsMYeotzhTHA3U4GCasJ9KpzUgp11jCc5z5ydK4Yo6T6KPTvsk4fCGb8T8Gpy6VTitmacihG",
  "key6": "3GtP6UMnpRs2u54MHENBjeaAtsAtBVkWRiYDSZ8u6S5mTMz4nRGg8QSzXZ9hZb8SnQjZntjUKvdq5MG1qpirHQgP",
  "key7": "vaXF4MDRAskfAqJbiZWJXNt4ud4GiEMcBHz54QDUUTEeXdCdZJSzV2V1F7nnKtUrTwHF2BvMGC3DMrBZv2EDRpt",
  "key8": "3UVu1ta9rndU6bnckvQ3MJkFmbMmjztZ3rqyFaJji23o66aMDF981Esp7ZQ1tRMz4YMq8P4WzevrwPccXkV2oKM4",
  "key9": "296jt8jcKQfW4y2paoTFLPJF9xEHkCWm9k22sUGux2GXDbEVQT6QW8G4j57trbzvaes2WKakSg3qhowkkSVCtvmT",
  "key10": "48Ve1JgtJLucbBzBd88wJYTNHJhagzcPyoXnB7wAXhMiGNMaBLtkTqLg9FA57RQxZniqntZAcfZGPKsiLmk1e56g",
  "key11": "48bW8ScnbGXtoGLGY9AkAK2RWx9ZeuAXhz1dBzLjFDGYZHkjZRT2vKcK1rt7a61qB18cggb2LjvxJaY2mvgsjq2V",
  "key12": "5hAtoJZTMGpSfNj92D1KUwfhMsQo2XWmRps77Fd5m8E6DNaEepxEzogwaLW4dnWL7pu7wk58v8vxpuDX3y1A6ejU",
  "key13": "rw1gnhmU49bNvBddAKrMTuJpH7GEJgfPhpRFJKycyib4dx65GZfhkam3BtajJ8jDViYvJf4xRBrk7DPMDQHSuvR",
  "key14": "3xaB9tr3EjkkKYqVgUhD9viaeFPFAxD74NVCxHFM6vzTLCwGejfmHCjJ773rWRgSMx7G5u4q3GCDVQo4qJf9wWHH",
  "key15": "as4TsYYr9T7pQrKkbbYbDcNzSvJWATCmJ8BA15sxQ5eK9P62v3L1CgHMDT7C4QhZFS7bADcT2tJ9wZEerQjcyeX",
  "key16": "4CnQNdBXe85nbsZDw6cyUB1BUM5qycoTmEUXZughK2drt7ctXpokz7de9go9SPzntUMgyCyk8qbhK7198nA8YM1z",
  "key17": "3cmFXzkTvRWbL3U4aw8Wd7mK6xv4yZqxUTDmZVXA5grz9T8RmpxoESs15fG63FafbQVUY3yhztHHEGms8QAyVmW1",
  "key18": "22DMn3R6BK8zaQCpmqqCNoYDB1LFZYNnFhci4FHZxZYojp9R8rKyCQXSTbjdG6HSqtJFZ6Pju6rd6dDaZFgCgZti",
  "key19": "4BSiKtUowdPPMLqFJWWn1GEybEPMjRstUbS8wuSq7aiDWwZ2gYwZSPAW23ToHM2H3RhmzW8DMqdz9zvWS8vjQewe",
  "key20": "39w6dLkG7orL9TUTyaH82bY48PthHW9zhcgmrtzQPycPqNx7qfLLUEoSxrNqkxkhNwMk1XcSgZyowXDS6Qb1bfjA",
  "key21": "9bRtvNsn9HUQRDvsNhaz9dPLmok6YHhPXvBiR7xS13wrK5YrrB7ThvWZZKtjWe2VVcy3zQRyv9jCkAoWVNYwQF2",
  "key22": "3ohd6986beLBKkw83zcwaV9Y7iogMUiTjZuHkymsSqgTDChT8JkvoewZcPftifCkyUuWrNtgr1JPTJymwPLKP9Bw",
  "key23": "4HGPcdQbzJLYVtkMurtqdSDJ6vAGFECxD5LbNC6UYo3brkw4iPM2i2zNVmvGa9ovCFz88f4rRXY96gCdokTuR5Gr",
  "key24": "39Bqdw5KL7n6WtWEBXfapBpRyHVZ7ZW3AoeeC37v8mAsFCNyQcZ4WjNMd8FDyDjx9a6mDcHj9151RJ1AgU7yo8tt",
  "key25": "3rR2f6F8Nu7mVYCZicrZj77F4HBo7uYtJbcxBoTHe2BQXuJ4bbWj1yM6a9wjTxx7VEZSySUqGhhKuuQmsVfHmrrN",
  "key26": "4XB9kcqUuqrjEeG5LWkf2UKV5UxhKQU9t4zEuFuK2pNnKdzKF7LqqbTa1iLFuEdKYAKX1yqCrbwLYaZbJB2TZR6"
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
