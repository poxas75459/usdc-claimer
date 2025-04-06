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
    "2yP6SrynwPhmUjKrEE5RcGKjo6eQTty634zGXct2eKUdv6UtEqQAusNxx837zSW5c2YVLFwn5wXHLtEni8hQfoZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sq49rP7np4UutkdKRnoafjQ56rkUgE69h3HV2ngumCaaPT4zVfgAAAhzYpbBVFqrBGJLjPNaLHbwfDDxKHszg8K",
  "key1": "5gfgTGbc7R5Q8b394azvsSEmXhvSRfCKUX6deErdPYZiy5EZ9YFJoz2YFQKFBST8oxueAyAWeP2o2zA47ybx12VY",
  "key2": "5jhGEpcvUT528SKuzUZ75pLw12KRXHvbn8MALLQNae2uqkSLgENMjpyiJPefmnwyHNvtZAh8M2uN3WzWXwfWAq5J",
  "key3": "BDLRTo6rcBCH2fhgxHNQcZNA8g6Q5z99J8D4wCP9PxjJE9EuGPiaoTLKVbHkpj7fMmpwnRNhTNSojKqJuE5jrsZ",
  "key4": "DktFmEJeirKDy7qRGPqNydJmrX9bS2bTj97LVy9N5mZLAarQaRYiB1eUQ5GnpBv39TWBF65TFEXG24CXHARfV3N",
  "key5": "34Jo8PtyTLTZMGmziogMGg8CnuWgGUHX1zmiJNBygZB8R8Q1amkDYupzX4mPVUiU6SS8LWSN2cFyxiAAtv5BDTxM",
  "key6": "3vWVPWxKP4QgHdGjXFZHCh7i5cDdNMeRFdXKSXNVHrc8ZTuLPK6G3LDfwmqUmRjWsiyna4T6aSpP9zhCMTeShEcE",
  "key7": "2F3rwcDNFZNbCGVQ2PosHbeLnUrnsdn55AqqgH8A744rA2PjHhskx8WY2esRMobEyJoSyE72MHonGoV9aHyxTbPj",
  "key8": "iXqvgCFN3hKaZ6JqR2LQpFSqT8zfnHHQtM2MRPzaxjFySPdDHtZpeV71jnMKh3qwf9pk34ULVNn9iyfoCMPdCAp",
  "key9": "Y41zupskQzbMsnnMGeJLjZWnfsQut4TXWMf2ZAvQD6npViuwchsK8wBqbRedmLNN6A85cRDtexPzPsDoYFCMCxF",
  "key10": "x47twmgDH18SFuD6HyAkJESbz3Wi9TForWSFvYm6fVJi1VChW5guiRG1V9X3PugDVAoLs4h284uGZ5ZaRaYzoVs",
  "key11": "5iRXnSpC8eDS5zErUveN2RgBvpPw2u7heCcfoxBXZPYMkHEa3wCEysR7huoDNDDq1jYEFZYKdgt7DE88Suawzk4x",
  "key12": "E9K5Deu8k1inwYodeFYH5P7xCGzdczpkB227P6iob1HVSeDBjeTWK94Gr4adD4ehdv5FSGqyyMe1vg5imJfWLGb",
  "key13": "3SFrMmovMiwF5KRrTA2KxpRonAtcigrGDNDHGXubzvLCfT28RSCUHPBVERujMatsSyWNYaJ2QvDxtN7adhmF9nAJ",
  "key14": "21ZCyLysLDjGAZbxpPJ74hYeK6VxhsskeBMsNj9K6v7u31CGJ4E1TRPAtao9wnypUVXSTs6xYfCwkNMFqNZW7M6R",
  "key15": "416T4jyBqPfr31ookSFEKZZsiv1Ww6G467GmiAaqHqzQSFtuZp2yvX7ioWb3f5GLrQxpgXS3uxftNySJxsZYZJdw",
  "key16": "pLGUqzG4MTqyzRsUzMUUKFV8VsDCCZFKmmgBvwboRWmwoKu8YHELPAoZpx1V7up4fBDHqjU9jZNKCb3cGEe53CU",
  "key17": "k9mfh2SEU8C17QD6PfRJpYJ3m3Woh1JtHPxtCA8YGZhmZRWLgSHKL6mYYEYZ2xZkCECE1NxCfxe4dc2F9w2zWpV",
  "key18": "3LcSPvZvsmjQqTvJBnPQ6hSp7SgotcR1ay48C4GYZZntn5uwBMytsxDiTSvdj9Lx2uTxBtUZFpJRuYQmcZK6adt3",
  "key19": "2gUDh2cXuuCwcciNP7G3Sz2C5TyCcSX3wABu1bXTkzmRHEAiqbRTihzVcfmXFDJiYkZKTJ4DcUrEhe5Qf6msTdXJ",
  "key20": "5DoVFF96esX4S2xUUi4HEf2yQFHQxF4P21RtG54LKSE9uXzUhUHNein1UWzDsU7Q6RcANBnCwirfxX1s5HXLwQXu",
  "key21": "3c7x4AQpgEH3C6ULG7VuMHKyPSEEbU8gsEqRkU5mXMDRJjZUGjBLKLJtoRBzTeDVeNW1PvpAEeSaj8Xv2ihcyPDc",
  "key22": "TrWf9UpXxaNx8j2FrbCYDw181WCg1TcSbGLHCsh192RKw31aPJp4U5fnPf36S61GnxPFKj4da9NxVm2K54E423z",
  "key23": "9z9P8pi2mVZYSLMiSHNbrRvYSAVuVQDYgjfsWNAPfWEar7uKEUFECdceG4qvXen45VDfZobNNACW24CC8e5XbA3",
  "key24": "31dRMxJLh9Mm5r14hmRYVLRrjXJ5UfLtjz4R79rWHr9GNndmqTrrGaHiR27cbVPNQZG4PQs1F3caTMpdeeWpF1Ey",
  "key25": "nTmyPUFPqska4x4wfvaLYLF1akTBDtA5PuQJKhA5bnuqquuETSGfsYH3PT3dyx1e5yyFV7jbzGZQEEfDp3umRGi",
  "key26": "5D47tBa229QV9unK2xXzz9829njydqWgBtTgAPPj6TrEBfH9aUEBEpnUZtQxwgXwMLqF4ct9v79Rny8yJZLLSfKV",
  "key27": "3iJGPh2xepkoMRUbXbWNxRKbC8fy5M1Tv2TJ18MeUDaRjNUqwAL3vvGe4QXyaDDPjJ7LDjSand3F6eKhTyZJCQ75",
  "key28": "2tn8wto6Df5Y3rgAE443gEPZ2x8Qrf75eiEddwwuj5jVpLT1KSmj6sA5cMiMjJcwG4i9xjUL7oyCrud2AnN3XDWr",
  "key29": "2v7yWTW4JvYiieZ4XtMDtQe4gwCZxxzH4dTP1i4m36nfHnFraSN9REhbQRRPm9s8MB3Xcwf1np2JvMPYm3uCRssM",
  "key30": "c9ERYy3v3myc5nx2mJTQchPm924ooCoZRjf6QBotXRYiiimqthoqLGYMYZzsmYoEGWxxFHmrA6PcoQv7ZoPNdmX",
  "key31": "5hFG9envEvb96PQkrmD3gSW9TejbHAtKRAAiygtkMUk2DB3BopL1ifLJumzAft1dJXA6ZoDYiUjHGtEVLJyFuXe4",
  "key32": "5wpwZ8uD9msaR2cwWrzWyvNzLRQ3TiBof46qzK3rEoycr9Xb3hbgPEGBxCyevcA1hmmU5knzhq51zX9ZHDAxC2vu",
  "key33": "42gYQCYJqsDCKiFm4uxL1E5wHDyVuAPxgf9JAr432e9QyDsfqcFWQghLsRPYTvfzMbBpGUQYVMQzfJKA2pwybEcD",
  "key34": "3vYQSUJxqzEJFWGfNaKYW7dUDkep5djJo2QHFAHvcL4at6CQ57eyfAQdhzJBHSzdvQZfAKGZvoGyMoFbJ9LYVjmU",
  "key35": "2aHViMhzpDfReFxMZcKhUqYbnRbqPe8k39PyGysmY2ptxQLTRpJwEEQtYiWJHQZ5KHmFeSwQd4jzNwWZs73gYwiD",
  "key36": "4z2msWfEGJojaDXizwutUzY3kD4jU6aK9bpZ6VhBMwiymztvham3fKGKDLF3hfUdma8HfnKy5F7Y9n5Cc6oV7XgS",
  "key37": "4hiqvTTXMkbuzhnr4dgPhvvy28uKvtEtykCGJHN5W8eV3pNN3DDngDrLq8WJtK7kXEKDUu1hFhNXtBBhSZkGUM7q",
  "key38": "2dFb3czYMK1nMc6tUnpTHNhSoVNUMqE56yawPVbdSvF2kVeLq3GgVa9x2wcKTzZGQJGVbX2YmcoNdmSvVLKAQ6mG",
  "key39": "GDnVpgySmiYTmuKGCXfRWHzd1DEfsMy8wqYG9S8gyPg6ns2jYMmFsSgxwNPSNR5AdSoCiDpkdXvdzRBTD7khUbG",
  "key40": "2BDY93rHb5sddSuGKE7Y1VKRrykY19WD3eJEaEHRqJUDTKZfyPa5aq525EQ8AELoDdCLhESHRVBR2C73gKsSczik",
  "key41": "5ANYTxgkDnQ6VxffcvewHHjVSuM3wrJu7AKm2t1cLLkanpeYULiorXwEVEgHYeMqF6dfWAu7s7Sg2vTAoJbJWJRi",
  "key42": "5WAANCYNF7NFVr5GEVLfddw75cykmxNs6FPU5QZqqArZFeQDgWUdj7e9W26BEk3Xpf8HriTytFTL5AoMftvzSNju",
  "key43": "bKU898NdZpfF8GzgioFWCSVnwpB1WDUSFEAYTo714FksSJuTrQmBrtDTVAahuyV8nALZiNVt1REzCfTT5JzoNuQ",
  "key44": "5oxQqBhmixjDt8sXbs1MG1D66P2Nsiqni8kLyqLgB2794y3bca6FdykbXUvjo555QZLxVjazY9rXRwtYKkagDX8s",
  "key45": "4jJkpawfmHFz8mwLVgv4bWw4ugXL1eGaqmyj8ajX5ZhyLDiejKoJQBoH5Ge6vvorzNUpgtCn3VZGfrRD364MP4XN",
  "key46": "4yoU89QtSA5Fgpk8owJcFJhNy8J7QSmHd9hnyL4WJdeCpACgy6XEQgzoq7uyc6FFBeyTeNxPK9HDwooFWf4sKnBJ"
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
