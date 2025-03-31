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
    "KXJ8vNjJUprMPqBZNMpicVo1UVujpCJm7pXGA81ZV3KVE7rXpXo1enyhYL6DG3KRFZ7jdgRLJQSr651nQidg2nV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36YQb7gYZJFfYhXjwgBdkTKggkPELULSDe9MmakLRrRAGPzd3m85eFYFsJVLJW2CE4wkeKHPTbvypMWzZ4RL625D",
  "key1": "4Uf5uDsSvsv3G15oJJwpEdQiGPnw3tu3RCvJgYcGhyS3c1eLprZrzukYTiUCiVwnUm5CR2SJARbtCj4kqDcWXky6",
  "key2": "38EEZPYhCrxvyyjULxmSmYSKwr3FabwQLkWDP3fARXUbS6cDq8RtZkzQeLHzySkyV1BDtTMY5JAHnaEhktsfk5NZ",
  "key3": "4q52VWdEwPRKUyv8X3QPxD2XYk2cZoaZet8jfJRnnDpgDz9PU1osDMeMRxg3SLeQL9yJC2T3HPpnJon4iC8fH9py",
  "key4": "57zG8AveckguAuwhNJpUfFhEXmE1rRozoQhoYpungmx417iAhTWKCjC9pbsG6mWuMv9SXX2VY6zhigZBgkhXVfBr",
  "key5": "57fv3ZCHXrK7cz7fymzqbtWJ3x4LehfrPvGAc9MVYeMz3vHpAZFyfsbTWKToHo3AjjH9NFrc7hRsuhoNVAaN9dR2",
  "key6": "hiDHnvXTb5DYYiV3j9bzR6Y95nAkKof1vfxU7rrZdJuC4cNGYabqMByxs44FF3bMxZ92dvnm1wkjAsgJm2vPYXD",
  "key7": "3SQo77rvmFKifWcpL6kywBo1BEYW9iKQwifGT42J97imRUavcNKshjsaYkfKZPzFb1kWRrtYeu6ZJt7ghpeKpEnU",
  "key8": "bxFdy7xvrAvzZfR8f6VcLb1Pi5GM8JZg4BkWbEPasuw5icPw1Ka7VsKwDcsHFFg4hHzQMrFHVbbJ8gj7TNwQv2A",
  "key9": "3FPvjm8UmcEoSH2k2LGPfvsvRcUkadSwkJxcfxxjhVUZr8HcB9BiaYjNbE88vzebNuk8edhPDdd6bdeFiiXnwpru",
  "key10": "4LVL3udJVbuWc6xeXjbNypYseTJsA7QB1XR7G38sDCrxWC3vbXyETFXyqXAjbgw2wA8ZWrAgGSFzYWNNw83R2qQG",
  "key11": "5q6TJJVgXGKTEPM7VjpLwchYoPCfUSDAEeSKFRQDYfHxuAPszbaNa44a7QmVrAa7r8FNgUq4RZf9uka9Pa8WdNhH",
  "key12": "TL6Fno1vz3ogPH7RWH84RhMuvNBtq3K5vAn8E1AmnkQ9zrXw5rRLNZew7mDdLxgk9AHRnsSVSF9LexQNbXkgZML",
  "key13": "63TJdDeyuMZRviHMEbqZGfHrQyA3SayCLSPcP1mimscMLdvSByweRXEQFuErG5mVzyj4uFUdZA6RtU3v9Tg3kKaB",
  "key14": "4h5vLJaYjFbyfqxSzx7uDxTLN6gQjsfY1oKzrbK3pprg782RSNh4o37CXadMTN54gurNtMKh8qsU1ndfX9z7hZPW",
  "key15": "4w6Eq5U2iAzmh8AZFyxGFWK16dYgjeUPpw6nSv9tugA1QQUnppd5QX4DyYAFKgZAyqnAA6Af2cN8VZjPwNjip7wN",
  "key16": "2gzQeXHFstbGbxcognPgnpzdQE5FBwwy7nJjCeCjrETrTKRQTL5jH31rjBbGgZR2Xh3QspsDnHgfqM7ionNXCmbp",
  "key17": "3ELet7BaEcRuMzA1kT64PS84XVveJ2qzfs68Yd7wrgi1zDwUTaLCLqj1JVoKykvDZTEiknMSehMEcPnqVjeAzQVf",
  "key18": "DTKsKkWY49FgHGkLRrQzUMC2p59Un4Z4ZdwgMozjRuVvVgQYhaiZctKu8uQfqwUxY18mSMY45QcB7MqJCEMpaSf",
  "key19": "2gTsxQdJPBu6Ksa5dtP72TX2y7QogALb8TPrtzjitq4AL6YdERorsJpXbDjX8x2gjKjYm8ykWRSPmoLXJnN4z592",
  "key20": "3gDtgU8X2SkZWuJWCi3kdjQr8inSzJEfoNjaWrUHGJDo9PbDKhDSDU44XqVt6XQdRcPAA36UiWQ1c64DETQnhGsS",
  "key21": "4GYf5sjUA3eeSLQ2BhRPXdGo8ENGxdRX4e4ri5FtepeX9oNVHjj3HjJhRPapAnL7hL8mKSAe5g2RYdbJ5iaP2T2G",
  "key22": "4jUDb4Ki8KVArXfpN8tCLuUpACpjA5WPFLUnum9JDsMGzV4yav8GZnjc4mCDv6LttsMVtMo4Guff3QF8mZT8nK81",
  "key23": "3eAavMS3FhEheM24jx3Jv35RaiiH25cbEc76xhRQyHsv9EdmJQstNaymtswLZUzuihJvr7h5uDUhC6XSSgzEdWgj",
  "key24": "27RdHqibVx71MRPRxmAAsJRhQsVgKhzQeHWSnw3WNxQNVhmWeMaKuLUcQs92K3FMRXETg5PsY2zLGRhVXGKja7AY",
  "key25": "2ee5Vtw9WRoc9wdFSSkoih9nai2edT1mm2qJCvB8QhxuUjsEWfF4vbMVo9kuLPWBJwRSN65zowLAe2Y4nHqoseA1",
  "key26": "snrQn2oNbRxRNeGt64WcL3JtFK5R4bXuBxX7PEqkraMWqVp1pMmJEKmiRVfWvyKyKzW4tfQ9UurDEKYqdoYVMNB",
  "key27": "ovuRtw2tL9RbURv1pHYDc71ZD9PdiuL8rqcg7MVNa9eqp9h2omiDt7X5DrvzCdpbagnHAHrLJtFtfNaW6guaJzc",
  "key28": "2bgDZnrsmfigU6qFCpfqetgGG9NC5ZxsoJB2zpukzKCdr9VLBRd62Ez7nBFQHhMFDVi3jtMGdFEpetiF4SfYEFQW",
  "key29": "4VVK35nuFHoN9qoy2R6XNcGdFo8TGBMnjAy1sYDWapHUaSwUaBM1bWBVaoDybG2jwATchf7hZXWvowE4Uv3jUedo",
  "key30": "2oBy7QKPqin4d6YKUCYzkF8HQjvmh32ucK5mmsZTQEieJmY9BSBkfBHnnndUrD2DTwR2XBTBTjYdhgu3PAxoqtsk",
  "key31": "4Rf59myW5f8qXLEKsLhNHgQbKHdUXKyjn4wVnyzLbQ99AF3dLACD3amsNq5tjjVXJSYU2XeCswvY6rUi1guYCA9L",
  "key32": "4FYkwTezTwfzzVug9qXZehjmzPjjTmb3Uj51uyAEzCbvq5XDYgRyLnNfaESxrGLQhTgUvS6FdTXp9Yu97DeBtrK1",
  "key33": "4yjozswE6TbyZMBXbo7E2VvgCpAX4tKnWmr7aqpg9Cr8W3kwPafVjpLuJ8siqDcG5W1Vh9ahT6n8Z2u2qzHkzwwk",
  "key34": "4CZTe8SVXwaN92gVSipwiVQvwFqguLy5jSDVKuB7DRFGKo7mexN4cmekZyFgz5fWZBVeEUdyjZf8XUCxufA1KAz3",
  "key35": "5LNz5KBxZGf1559wkYV7MLYGmuB7Y2kNWMxYBtirmQnNnGiX88VXfxXizP6N76hLpFVs9LuQvbMCZXUUtr74DsSu",
  "key36": "5mHQDnM2DyMEi3c2psjk3ooz4sJGdNLTUstqejPQ4PenWCL7monf9RsRthKd8Gx8WXCqS4YRp93vqnxUxPSw9bu2",
  "key37": "62qSTENSDbDwNa2RXXWszwG8QRsG5zpYhzBEuZLfA6vkwkM5e1rvh1oxJKNW7YctTt3brwsh775i784qwn257Mym",
  "key38": "5VXrFm1ENXuCFZNBGE7a1Lwj3mMLWNRnmmVhvBWed2qyCEEaoJ1RY9JBJ9VEtUMZEkrmotKuugmsSzhSY1ZigAda",
  "key39": "2fFvWeRhAP4iGsdh47eyjvkCxk7SF1oH4Q4uJJrQr4uWmD1m23Drz5XRCm4c8RBTz9QRY3YVdHyYoeKJtWpUmzWD",
  "key40": "3fbfJ2YZpKxALU4CqSn7oJtoEXJosZ6coBquw38JpA8yKJ1A7rCf1qGcRXZySgGT4cxrS9grHwBHVdQF3YD85cSg",
  "key41": "4keTvp5ukp543g1TaStrpVP8wCbMBaXbwyCbcgSPcHh3k9XZNvYdA1v1Sgq4YEPMTQfyoaEo9BCfAZNkn4xCxDnM",
  "key42": "5SuaTMF4fpnCkLkezz1SfB2tHtcdmfYZUFEWM4GtsKQT1YzdYbiYoatupTjJePEUBPW6Qj5iKBUFF38REyj9VDwk",
  "key43": "64qeGE2KJdoa4ZfVqK8ScWHqYCyGdFMnRiGPG4y8MvHVpfZLAUgxQBkGjcgyb1gNSRMJm5xSHXwXCNZrhihMvwX3",
  "key44": "23m5u5v6AarubrrJBLoCrqUqb17E1m23jKWd1tTqPDskJAnRbJqzVGLExeC6WvoVpQeYcHePN4NPyybBLVZ3fE2c",
  "key45": "CauQALmZyAiB7Uq1ZoU1Pe8VWuGJKfutg9Zwut8SMpMAeYGLmgEd4Qt3D9jXwCh57qEFby5Tz5spnGLorx9JoRn",
  "key46": "31rp8rFsUEnSygGNkqEVW5vhc2aGK1i9SwnsqG8Wwkc45XnCskEVx7nPMuqD379Ty9J3ob6Ehd1U5Nf7aPgUk2at",
  "key47": "3NSCLiUeSTYjMCHBzLZ8gyRKVEL4H6De7sSNScmNwk23nz4EiHE5wxUBAgtZtV47W81zRfivfvdYmPvsoVjcktmC"
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
