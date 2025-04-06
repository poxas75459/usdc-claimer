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
    "3x5WLLXUqUavQ6YFS2GQECGPxwwMcxBiuSQBEsF1jnGvhvhbHFcUEYLFqhNXUncM5X4ttWzBaYZWmFAvRKrVdscQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bvdtwb4XmtaEMRCy455KGy2Zq66tQcuw7ugGZJC7SGoRHPydQFf2fxQYzwwuwj7EgcQHAx1G6YP8B3ExQwpowwW",
  "key1": "3Rvz2AUQ8G1XdcdfRyHx8cwcGW6pMivWqutVKFn42zrFsrwa5SomCdd74q8LAigiF76NQW3MwzizEXsbEThhXtbT",
  "key2": "3Z9sn22riARNaxwbPVxTVfoVNuNESRTdTVF38zic4TBTwgUCZr4g7gsavTLyBooMd5GUGwir1CnZ6QtxxWD5EE2S",
  "key3": "ECWm3kXgYmAVcZsxG8EEqWktuW3oNVmYNCF2thvoZAw4c5PRvVcDv3aNW9oq4fqsDPjo1xbENqpfBm1NZek7V1c",
  "key4": "44xopVHj8LMgGCWM8C7cYqWwxJVq5uheRwc3zx9haZUkTJ3zJndaGLTRSeUb4eqtuB25ZeW6wvmrZtLnB3pyJf74",
  "key5": "4Hi8eEX7wFaH7E9yPLiXHFkJ9Fgz5otvcJPWFtfAzkEwXhafiTvyqkqKKdhGnyYmi8zYG9X2wYAmBEF2i2uAyp27",
  "key6": "DmAnDCq94DbiP32HLHiU8yTUU7sbV1JSya8Qw3rYtAUDtiQCvYZ8xefDZAaS71qxECbhxZkCUdHQjF3GwQ2fPja",
  "key7": "4VJTJgHQ2479jXVNfFYFfppWaRYXDNFUPUgZgfME9drbFpcrjqe2JbszSYBomPyMMjB7mN9dPS6zXrrEKBQPkqaa",
  "key8": "5BG61MShxMJsxzdft93eLqyE4SfQumSYFTG3RiKDYeXra3dwjPuhcu8kpzZ53kwD7r9uHKYtH7d1PXQCJUXYDAqh",
  "key9": "4VoXB9bh69thy9fr2xNYXbgQEHPtNnchAHqVqmXg26MDaRfGxKEQfAGhgyPBPcVTnje6g63WSMEshfB8aBoydQae",
  "key10": "3qFj45T2qvcGxn8Br4tSygos57fteKQ7K7Px6Qa37pVSY9UxphNaxmM7hJYFiDkRPfi25LgnxwuBMT5LG1VLBbRy",
  "key11": "2xMxcupA1qLxRwkFSSLwwtpj13FV2Xw9EqsNFTLewRdbJMPTKUeuns9nGppnNUCyPWd6wbHxczUhmdT6ghkgzoQM",
  "key12": "AXspqLvrbGigMD4pU6KGtTczqCZrHEKdNYtDxJrj519DTP1mEUT6CcWqbsBaiybqQ1CmkKSWaL6tA9ooNjTgR6L",
  "key13": "5moRMc2BRjwzB8RBSmxVrW3KExPRPDgZZpdyhxKY9mfW6Q7YJeLG68H8cCMmTSUP9tPjSaW9CLhZCNj4NGVzpqyr",
  "key14": "rCL7UUb1rjfpPNFCbdbbz17vHn21T3bnyQCTLfE6a6Bwj3h5AnH72XEsBfSdJsvuroVyMp3RmeEyNxS9mD11pz6",
  "key15": "52cnntz8TBmazAe7o7zAcFE9s3nKjrzHsaf867qTKYFsZnGHW2A561aDyNvoBFEPYdZUrjXENa1YnvjA6A9SBmfo",
  "key16": "3bYpCNxqCa1VdEbpUQXqTqwSixp2bDT3zcTKYQUnVPEYtKQRHJd34PSYPgWdkNJ2kqggX1iPpmR129ipuvB9hY1k",
  "key17": "dUth3S2HWse9tqoayJvX6RvZSQrah86tjx6c3ERFJMznb4E47SHooi2Zuz94MPEiTW2qKL8p5egsWwyzK6d7kPN",
  "key18": "2F88usGkxp5HoWaaRmnYN4x9Eu88Lgyzcy37cfHRMrCqY49oimmPMKLEXP3AyafQxANd4cNg76ySTzJyKfSYYDW5",
  "key19": "2K7PX2qfBjBnZjBK7BQZe6PQmPBx2m1vtQMmp2sppsuNnRTPMwT8e1zgA7ZuGWDpTUtVxSUA5Gep3FoZxLaXkJQQ",
  "key20": "4ntshPsK16a1xzc7muXNTDwPmx8b1Et3rdCgSbqCJadCSzNN54Gtxbw61BKJe5Dv3H9bTHBsQjEtcmLEt5CFdVUc",
  "key21": "2QYyUwEzA58phaHVYpNAwjTHWiQfjtPCTJKMrQ2TyzbDwbzNu8crimt1jXViJgSC1QL9gAb6pTkqp1LiWT8zbMf",
  "key22": "4Y9Qs75ELokwEr1SYLarNhBj4mxYo6LQkePkzwhum5aTaov3oZGHeWcYeJ1ZvEUgtx5e97mtGPT8rAmUNYrBFhs8",
  "key23": "49t8QBhABrnHBg9BUjdJ9nKSsyPXAYGbM3bosYV41zhtD4kERU22ZeeRVx6PqtSfYCDzp9RiRzAjRyUU4w4Tc1Xi",
  "key24": "4dHGzzbLNQMTcqy37V39ivt2jqjRgfWEDHVFBSNJCRRwkCs8gTdMGusdGFo7t9yFdimQpgV7W7xKqbKvoCwssK8Y",
  "key25": "35zV9cU6injsYCw5CBn2UhZS5ZiZCczwGgVSkg4Wbd35FWYTCWk4ZyVgjZkas2eee8zWPLpZ6VTNaL8ERnwEw9SJ",
  "key26": "4GaAhboUuEg15pNndKDwNbqyDkQ8voBc8ZEdexoyFR5FUbMKm9BKJGcwJ7yaQ26r4mvNCuo2MWSdPYHkGzGKGEaJ",
  "key27": "5RyCR4Fx4k9CwxtxGWBVp2eHLSAHTEZJDymYK1zcgP6n3L3EStuFsV8N36omQt1XwUbwZbxkvpFbsB5uSF3KcvCF",
  "key28": "4Tmw7TgVMN8FuFKdDaFyScHkXkh3pUwQFU8oeS4APqaL4STDxMwAu3wh4fLDTAMsZYcA36HPiFhoRsX4fcXydfDh",
  "key29": "LAihnrwWLtE6Rg9bsG6MPyCFKPPC9EBjf9u24nkpL45ge2euWJduTstKKsWJR8ZEKkud1SJikQrKCGR7jfSRTwv",
  "key30": "4QSDhGuABTsb5Kk1kmfxJHHP9C6EEcsgPE4p6mmNQ7Cre34a34v4M4LupVwfC3SAnnHK3Qe7Z8wEA92MRomRvzj2",
  "key31": "3NTV5kN1XFk7PKQofeutkf3NbbxfVbAb3Q2zzCuR7ozEgL325N9SRmHFa8HkoqJQDVGs55HwAZMqi47vzaQ26Vwx",
  "key32": "3wqBbMuuJhopDAg8PCLGL5anNGgXZaw9G6DprVUhUsg1EjjY6TQoNjToP8qVi3jt5LQ1ZS7yhBY8y437YfgqmHN2",
  "key33": "35VKD4bcve5VjPSX1TbNcq4Kqvxnw5UyqqowqrQW52qx6evXRCGQWQtGdYwveMphYPLSDp5qQxuFZTP7udvsq7Dw"
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
