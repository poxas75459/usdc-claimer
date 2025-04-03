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
    "3uYTcLAvPF8qKnJYYXQbM5JXawDZMCpXKapbN1rff9PunB4FFqUrz4rkyA6S43xyfC8LAc68ey1YNGTtaho66o4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27eaN2qjAoDGEWQKxXLc1g7WhNt2XNGDxx8mrDnhRmjLkmiLw9WPNhFA7z9hp5GdsFaSSBbm2iAjrMBhxSrAvgvj",
  "key1": "2c4oyXNhyamAdm9tQZCzc8s5CL4jUzH5oJX25T59MHcuGNzftfKi1cjHvxrSV7FBQSe7fD6CK7vDRKtxB1u2UGix",
  "key2": "RpwRYwpNLoiWZZU4nJNkj53nHLMwkp5ihX22chbpYV2fP4qZKmsbN1PuJzSX8ywEhUGLATMZeH7gSZbXoE15VQg",
  "key3": "3EZoRiyq7CjyJpd6AH6Cb1Ybpgwxj4LQwwM8o8jyUbcv6Ye1v8js5mwFCJkpdHc7zKvoZbVcrCQ9YtWDB7QpvP4D",
  "key4": "2k6YbS9PNfhQzFQShf4KCuH8zMt9fAeXwEw2Ba4di39iBPNNxgMRk2CYEx6JodRAnVMsv2RmdeWgEKXyHcSYo79f",
  "key5": "4pPZdxYSpksCwaghyjfy46ugm5VR5oequthtUz74ZUEqRcReP9p5UQ2rYmCLVz9caF92mC7vwYne7MQ7HC2nxRMD",
  "key6": "487x87KGsCQPahjq5tL5ghias8wTXcJeKDRiQPatYgvnJRWiiUPd8N7vPPS6wobSQas8W89F26F9E97GFwmvpF4",
  "key7": "4rXZ9znb864F3uHoRXw2Vm9ux7VHytfEmyVhYTGHz3mJfNH1beUXMTF11D5Yyysi2CXszQMz1GUwjxYKJ8kR7oqH",
  "key8": "QVBeTdWE2z52CPn3HtSWbXDVuL5wLteuqAGJ9SiTKMrR2zfnsxwbwkixgcrUsRrFzUDD2pkWuATnxbFrP14eTtY",
  "key9": "2NRFAHoMk2DcDz9XpMisb4SNxoLxTFa9BMcvih8CQGJVqDKBm1Ac7xrhLq62cPDzWSUJbiNes7CMTXqYCi1Fs1WB",
  "key10": "2Ljw9Hpmb2xLvDyyXWmU6iypGnBAYryQzCMARWSWDr8Y9EJDZPjmTPkyABEPuQks2YEhAUKCoX4AZKT8uxauLKKH",
  "key11": "31S2UXwVQBs2PvWSGz6MvCMe5bE1dBKG29BFQwaYWzpZAthwaUjWzFKDn289oifSGCxviRomuSjpaj8Lrutk5Ak6",
  "key12": "2nuTYZU6c5UQ8JUt6HDV651Qmj8Qe36J5KGSzKuSKfz6gHvjRLcnrvWfjCSo2UMQH36cTXYd5NPSHkAZsbJ3zNFB",
  "key13": "2YJWEk38TuDeDSMFd7dGYQ5jmDoKiG8Srcn4UJHxnvejLbFHKbG5xgKypo9LHG961UNnH5Kdnp7iMnnKWDciJnsz",
  "key14": "5n7Bgg7JKZDb24S6MUCJmhhjT6e8d75Jn23E1XA97vaKZmr4rPBztSu2XCCVekbrVmmCnDU94DvbbuWxpDs59PK5",
  "key15": "4cQYQjz8d2GvPDcGcRLSbrRmMoMaSKUWskgLrn62381MP2xZTG2E4hLJk8ko4PNMMr5zr5bW7u8bmdfq5pcF6mG1",
  "key16": "4ki5fJDj1syZvphwM2sUppw3tgcHRqRKSXeyaX2XUne9YfxJgHjMpkNk6mf5saqvYomfe7YMmzMN5X6v4eE6ysQC",
  "key17": "4em3xsRv9yaZhEVk9RDNUEUNgnyXjsD6ekbszDpRhWuAEGpybWXjbMRbUwwSu9FQfs8TZFBSfTSqyJVPvrgy2Cjs",
  "key18": "2unpWVzypvtDwd8aMreMmtwWvetfqRJxXHi5H6RjyGZRyvKWKPcj89vEruq7RDVR4GzBMB7N9MCTsE8aRmQsNYhS",
  "key19": "5EmBZwmf35WCGtzPYeXExbH9rdfwWJFywF6Kt5DLo8xBPBpuSVJwedp6DhjajNZm5GVUN3geRZe2WyTj5VKyyjpt",
  "key20": "3G96hNuSZ9amdyewdE6PVZ4ysjkfF2SEP8muteguQvWvQXBYVFgp7pueyiQYqZzZDBMmWdbDbsN4jmbEg2wUqiLy",
  "key21": "45Ppj7wbCJGGTqQP7ak5mzCMKUPNGouVrbudDrjZSghi6LzfGi3NZDnjgAzMJfbAL9xfVpoLcfsRrMwBBpMawAWK",
  "key22": "3RetqSEt3eUZ2hBaFG2KPDNWkSSmfXtYx2DJUxQ3i8AL5xbVuGURApATNqjYrmfmMfaZTNwty2tKDhnCTgAccvMC",
  "key23": "33DeR4xm3xiKpCCNRXJJTXJYEFh62CRxaxnSmr4rBAY5yoejJLrsmQxwnViiVtXQXg6yaiaGVmticP5FxoLRLRxx",
  "key24": "4TaFhVmzVUyTYRxGz8hz6wDMGB7nmKEv1bLHDp8MBK4VyUDjP9tJSm5pBz8sES6gR58r8mMeUVgBRz8wefK2SSNj",
  "key25": "4dgNwArCuzNvRhALTH7JLstjSdpRb2obKQ1S7UaDr2Ab7xXsTSHQCy6EZxqgqSZA2Q8Nv1CkuVsmrKEanwRSLuA1"
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
