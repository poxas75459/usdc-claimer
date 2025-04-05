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
    "3mVRCHYQt1QMZ4v8w74myNbkHn5Srw4RSb1An3EBLcstFG9gVVusWyX7sv7WKJXmEWgdMYqCTg9Zs6RGXvW52sni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFxmch2EYRdCKE3PeTwFkDzWsQN3HCHwWCRKUTjKYBZEgpzyW7T6EbAR2xcwuW7hx3u1KHvHXeph7VaCaYZ2tKt",
  "key1": "pAbTFtzMo8uVaWJey7MiPvAhmnJw4NBmyPyXvAM8aJQEZ8A2BT6ywQa4nBurTynfZ86oYJD5BCr5bKd3uvL8JZc",
  "key2": "JFCVAFXjo4a3RncoKH3taNtNPKSYrFcjwb9hVsSwzwjwaw7w7XrP4SmvMG3Fpd2857npUQu6ddFFJTWrsRhD8Kh",
  "key3": "5pEs3vsq6Krr9fBFJWHdxFunAs4WVXzwwZRKKz8GURkctuPbv62vw6uNJRaxfPaVMrouSTGoiSA6X9YRXu8CyDsv",
  "key4": "ydpmp5QFW1DH6PXjFAwgVyni5rmXJU2LrpSu43EWfiLXbMh2QPQrXSF34kLihuCWVjRWjKXHJUuVZp4thH8r1mE",
  "key5": "3wxyQFybXrmEn17PJEA18RWJvZEF3P1aJN8VgkMhJ7tGCsoCZAyEPKQHKajJYej7W1S3PCFuJky7ocRth2nQidYw",
  "key6": "GJXT9JzD8iaHLdmizYxtVEwb8GjEixzqir8B6iNefpPhidzqXHpTZDFGTQrkyBXzZ6J1LT2urTEmMY5jWHd2B4B",
  "key7": "36C2yEhVwqL5bpgNtjaAMFbjDJkvWXCx4ijAJW5oQER3bn2yVEzapMe7VN5jQWikL3Z4qb5pwQn3gsaTtcDFxYh5",
  "key8": "24xPoxuxeanNhcSzbGXZFLyp242XeZ7LnMshvuBkUTHrbXU1fqiW4MPfbaG4Uz8BzbiAK6SSwkhGdJ92qyRskb2s",
  "key9": "5p7AAWQBpbuHi1PvfUUwZWmLYhFYqGm2b7UmuyPa1wTZ2sEaT6JEm3iZsCDjxP8huY5ebrR16fPQNTP6m3yevVNV",
  "key10": "isw7MqhxcXDAm5qSQc8E976TJ7CgdrTsag6E9LEshtcRH4Y6NXAt3dLEs9Nvcy4yTBsYUR2idCjKkG5Jw5pzL18",
  "key11": "5qjLnH6GqT1P2QL49mVAGUCBZwfKATHLXdq84PNGNHsT29tzjj9Mb7GmyHNF7jP5rvnF1XFf66vKfJFdRLtWhX3g",
  "key12": "528CURxqCoENvbjTuG8FqMfzrpo3uEnA3fkDoNWR5fbFw1k2dnd7kgdN1NcqVWg7zvTMpDvxeojnDpRbUcPSxLXR",
  "key13": "42w13JGnXdK86Tn6TCacCHt3rSmGDyUjZKNGugxwibhwgkkoQ1C2pLJ6P1QHtMZfNMJhConYHFHytHiQAnqyFFWX",
  "key14": "5teZJhCCp1iH27nt6t3ooLoJKamz4UZjg6ZXV6ekk5iPZcV4DYXe6x8vNTPuKkSarb1TgYKhh3ViWqTdeN7W9fTb",
  "key15": "5drQeNEiNAxKC12aBFWs57zTGYJccqCQR3QmChJEpSYSFUVdfpvLBmCgkWAinLsLEEvQoGB3SeyK7pYS6iF9GfCd",
  "key16": "pXExihBWBHgVnQ9XjGuNKUr8wYVhV46XBcHUb1DYUiPC4U8STUeHXMQSFvbUd6WhBR8YuLHiJFYsYHxob53hHRv",
  "key17": "2PnnH6Fo8MNMfzJA1BA5TGp3DtF1XXB5PyNSXyoVBBHCwbWSTnHHGKSrRcMw8AdY36ZHvWrRWbdpsLhunbkt685T",
  "key18": "p3G7KcukjQCxvmKWV63KpMrZTKZkJKRQNksRGhKkQf7AyYfb7vYQr647d7J3kb3QHjk6GSDD2YpbeiwVcQuD13M",
  "key19": "Wq9NwHex9Sw4b9bnrV4fUrmnE3XR3kCYxPPkW3HvpUfAdi2tMMVWLqzLDYQKK7s3Nmm7mm32WEf7Crpa8nxsF1Y",
  "key20": "5VnYFJ3akBP47atxxRvhN6DRZUepGbEpqLhr1ZdsKcfDQFjffUKzDitDyk1k8F9qwtvxLStDsesbwfY8optm9gRA",
  "key21": "383g5eANdm2SCcBvuLsKFEREFHq38k6ZQEyEq8vKDTUovpfx94asrGz3LJHTYPf8UwoM2YzzXJfsRjQrqbeou4Fm",
  "key22": "29k6rZtjnHvRQss4MDQPieHTstt6vjUECkZhhSeccnBgLKMk9PELWHmreoKmCkwQHFnPbUKSXuN4PeHZQnGjCuz6",
  "key23": "3pWWDRP32b4zUuCL7DsW5FYBoE9cVNLX6VaaFH4uFxDRKdzgbuvxCs2f9k3ZN5eNMYEEhqFA2EyHrR1m5CMNpzo1",
  "key24": "2tNsMszebzbYD8KLnV6vaia2G2H5Chj8BZiEVpMocctbg8KLRoktTRVUFwWpj7ncy8vzEuJ8ufgMiS3oKTHmjeaZ"
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
