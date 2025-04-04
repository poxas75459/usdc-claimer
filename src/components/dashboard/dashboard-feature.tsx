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
    "3tDTormTKjF9BGyFPzpGqYcRyeeuuBap6wz8fotGBWnFNFD7DcC9tFfnM6cit9rxXJiwAkwvRxPMUi6h1D9rSZqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Z7aYy4qvKjsrPBX66MVgpqQcoRf6ApRRgJvVDENwmrcxFfFUkaJnGYdv5WLQqABANssRTvZ73q5Yjd4S7mrZ41",
  "key1": "4AkNgS68T1mQi78pJEuCv7aSz5G4keyYkZw4YtKCDr5RJts5ZeotZA1bLnYyLif5CdHF6Ky7bHWJWZcR1mpJtqRs",
  "key2": "4umnHoVi87eQTj7npKjVDiRtgvrFYruyHYaa35DV4uLXtQr9TM9rkH8W6aGk41a9AWQiuv4KtZMED6bbpGCYL5KR",
  "key3": "4HMWYZDDwHSDYpEc7gCUDEWgoj6ZfpQAH4DQje6r87RxnTPpVStPU16W2DTieWQLSmVeWUWYH68SmqtZVfXfUoUE",
  "key4": "3kGDjXfFi7mKgbvZEAt5GdPDrZbXjAVtzUrFUMfB15gCLuxgVWcshXUsMrmoPfcr6aME6pxgek5u8okWo71QUpNA",
  "key5": "Jq3yqGzxY7qtAsL1ZFqtoios1KKZfHWNxtUS3ZYqA2vzQj3htys9u1GYricrjhxyNLnd1W8TmsmhTtFn6zt5UGk",
  "key6": "54bUvbbYtYbXZaPJnVNTo8sZ3RumRjTYnB5hwhq8NtqvG3CcjbdQanqe7xLwmCXZ4EKCkfjEWJBxQ2G5nC9cUtpF",
  "key7": "M99vPNEcxca6MmgqT2LL7KMogFcG3Y9z4B7E15Kj6JZn1nJmUjgqLunshk4VNVKGSysmaCn57Kj5Cff1D6KkN3V",
  "key8": "4tAuUisxgpAcwymJ2XkbeCAUbidy4eKsLqrxKFzz8iPNYySwvfbSAQDa43yP3EYBYJzo1ysSqVNzAJk4ypKzppfN",
  "key9": "3rKSNSprsYnn27KnScvmqzaoQqRt1oSphbkkVY3Ufy2zNDWJM4m9PZE4WCf6uzJbmj7N4Xs7g9cgkTTdSPMwU5Gc",
  "key10": "54D5dRB8JHYegLHiaDgmDP6cKA4wkkWV674o6363XhX6HUtDnZtpEB9Jo9r2NfDNH6j73pgWXt1z3gXaade4f92S",
  "key11": "LDAUN61Gvw3K2zwUjpaNQNHqCaHUgSCETuMJWYWtsdgyP7kt61NdECdPDvJDz9fpW4f9KMFSPBFo4KSxH1kpaTW",
  "key12": "3uWTNs3iFbWtS2t3jicowiYXnn7px2MJsEjg2YLxsBEobMRvGBARPMXvwgtkCVkphHVfnGsRz2VhEqhfo6aEVZr4",
  "key13": "3YHKkQWJDvE3eB7g31U8QLiuVxA8rE1SjEF21ZqJJrtS6zsd73EmQCFH8tpZqZRnjdfrFjBAa1LArqaKfUgR2JEr",
  "key14": "26FH8feVcv9F83aTxeUydDF5J5RAvzySKVRn6K9P6ELUizfPMpcbWz1FVC1Q2pZYtHoymspE6HRcDWeQDhoLt3F2",
  "key15": "2tqZeFTGr8Y4uuLhE1hqRUB4RgG32tnyLQFn1uBgBWgshhgnvpTQ1bHakRomwtyAmaw4Gi2dk6erxqwNxyvcHqp8",
  "key16": "3wHN9V1kv6kKjYpEGPZMm4M47TnkPJXQevwxD8EJBjyGgU2J4rWRsNtV3h81TtyBejKorxrs4KpBKcZNSpiXw9d2",
  "key17": "4Wmxa4vdxratmhbr6f9JNxZRBB5is49JBfwirRPFDfbkSSsrgVgmm1USAmQCZyeVbXV8bvvVNAuW4G3JQfZGDr3",
  "key18": "McYvKcNpqWPqKEJ27QQEop52srsuQow2pQsu3CfPkZNQ92MkcFywpg1Ly5423rXqX79j7vRG2wZjSim2bCYsQDk",
  "key19": "uH49goHXSCSkCCfbZJ4s9eFMMgyXk6GptuhfowTyq7E94C15ZqcUVkEffYnDKJNM6TaGkaMXp6podQYFBHGbzc8",
  "key20": "yERXDdQvVa4AUfqZr6RefdXPgVMDMwyQjw7Wys1mNZicH7BuaPooSPWcwFSkSGbARiWvpNGTSQrQczN8GTYjN3Y",
  "key21": "fhW8ug1dfBBb2CBigtXi8eUkoKikQ8L77jbsw5x1Wc9rYkXs7GwpKi1k2Re7oopYt6VGdEXDvjh9reodmjyN8Z7",
  "key22": "4DHcohKnvap7Ua7M82kM4U7vj8EaaZs7QpxhzZXETQZ1dYjHgbQQFhNUUzmpvXXqxDh9sC5LrESEgXbNuoGyQac9",
  "key23": "D6K1DNgZm8BNUxbhjT1DBgS1g3exTgm7wykYoi8h9Zz25ExjFnSAabi3eD9NjRrXBmLtxb8YWtjzxMwpmVonnDY",
  "key24": "43TWsQeVvVDqHKLfH6iE1CkCFAq26ZSA3ZZMAW5FcuKscvsKGkoyJx9ZHGJBTWE6dQiP5nAfnbqKkenTN1WLxHyu",
  "key25": "4z5CxPPkz4Z3qRXh3LMje2g8FnKg6Psv6daERYpQGLuMvvALmTTmgBn7vjMdz5PPLVHmC3kQzewa6jUjoaFYJYmV",
  "key26": "3Q7Q9GUV5uJgYp6ZMqGBygAxCDuB4tiWiN1bEUkH1rYvDUNt8q3LXgsjBEK91gU2D9WF3Ztn36aW7dgd4rQKQHkd",
  "key27": "GTsqmuTnGEaUNc2PVPm8wQHwMrncpagmWkD8Bt3zAWefds2zBy6hPKEDePbLoeDmjVyTD8mWeXi7qMgSCv3rMGj",
  "key28": "oagbSyQLueNQ3BHPzrTiYYeSV5uuy1GHQ3M8CkhhVkBeKQvQFedFUWrGQoV37QhJ8y1nEhD9KfAzhySBNkwZduu",
  "key29": "2F924Hu3UJasGZ3hyB5gXwfVJUn7q6yte9K5X97e9x2KpPcpuX1JgJ4EdD4jxQmbUSKnaP4Ap7B2VCfgXB2HVC6k",
  "key30": "4KtkiuGxDe7nyf2D4WYeR4LfpovyvvDHDke1nu4Ejj8wjxmiGJhJa57ksnc1fC2o7n6xs4cbiJQSVvUP3UpJzwUp",
  "key31": "4xGC9TvwB6UWGs64pPEpaS6N6A7sP1ZXcHdF5QD2mPKZLzVHUaxBaDpKDqm8ELP6Jv4GhYwyZUUb4uJjoemQ6M4D",
  "key32": "5oLZpkTGDtwJ4nF8rRt35D4H3xyfMmQeSDtQnQKcYN4sTJePmYcHkKa4nfKfDDfUEqG78dwHeZMpjXDRdm3evzUk",
  "key33": "2CRTNWTS9sPQGvahTVNgZqpYajXdxPwim8dect3gPM59puiJeKjukwZWQ6h4TMvRmgek6RMR39AcTJHLLjTxomc7",
  "key34": "4QNuiGAG1QPgu4w45rCjKKYR6LLSaUkeFnUsKx5irihYXikVhGYvQApPEMpHKPPXRYvqWJpqGqxw4fPgp64bbgLp",
  "key35": "5z23RwznYdrgmiHXsxWm146iwxRZFto2wrHSUBBeZjRYacKRtFWBTuF8s5Fn2fbMpw7s5GFVn8YMXEwhHaCe2zJ",
  "key36": "5h9bttjzDUBPV35K6vv7m5wkUsdatzoey8jo6k2wgo5jsbGmQH8X13qkZdPDZG4fMyyQAopPnLdxKr6PNLuEMNis",
  "key37": "5TwvfqfxAmaeiCLypbVyqRxnWiWxMwBeaz3FqEJV4XYBEeDc4tZ6ij5y4bUfTJZzKmh3dA4jtZ2msBe3ebNbBPa",
  "key38": "3MGPeS55UbrMKq6xC9w61uriaXQ1T5o1VpNizMYtMftQwTxT2WpCWLHz1pxFWtS78oox5EgFr1FcJLBTL2sEmnF9",
  "key39": "2oYtwjM5Mhm37gcjPFTbywAjBpSnFvdkNHhpj5nNio6ReUir4UnEj2Bvz21V1KvQbNNBsjBotCP4iZp4T755QfYC",
  "key40": "2n557ZX6CC3JWoyTshwV5QvdkPG7eDLf8JaUX7ZKLVGSCPieM7o6KXRXXUNG6KDkJhQjmB8AEqubyyaCAy9sRy7u",
  "key41": "3CRudAboB2YLJVggP4WBaDR2H6BfzgDYNedbjFNJM2jbSXxDKxvLuuJbGMo2R7L9jAn4VsT7kgGppkssFj3dWq9x"
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
