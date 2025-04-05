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
    "3k4Ln8xsufQFcWWCTgHDRzATteasEjJu7CTJLHZo9vWtTTr4tZGXfh6H3NuY9PAe1CwSP1rUcrZ3AyEuuRWvLvL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XVR8646dL5VhxRPcUYvHp6TZXLTKrpsj69vfvNUVm7WinuZoGviFowGomdYeVyvthLnDcV3Kx4cy9LCZufSvUW",
  "key1": "3W1RJqetuCdsVKdN6djwxNrzLgkJdCisJ5kGfXVn3haAifkfb1AzxitU8Dn7oSBMvo4L66hNWdcoyviokFS1vMkA",
  "key2": "Roih4qKy3gNZ9Nz29a6jrGU7o9UbXRARRCjRTymTeCKzoFAxJK2wfURLC7jygQ7LomhFdyv791gzwsACuQPXkPt",
  "key3": "x43LS2x2Fd58A1LP9DEsYK7Fw9D356BP4Rmj4ZpmS48qkV61mpspGoUBgHkHbGCooBmnpDBm2TJsrGjgZVr2anw",
  "key4": "3uVZZFmFKUjjgjuT2w9RdpXQuniZAB2eLVRic3KMuLMTuvKHfcYP9qoZ2UeCVS7d5tfHLAse3Z16MPGcZSoAcG9Q",
  "key5": "3dweaZN8VneUYUXUVSv3NE5FB4a3j2e8vhYVKBswqsPxkKxfpMcjNjBkw3mTxhBK3caGLxGNNi9hsCzGGZRtUKY3",
  "key6": "3TJzcYD9SSWoQYUuR7VtY6CvAVF6ffhZNWqZhtG9UUbwqwCm9viM3AVmwDxB7WJDXujiGND9A1rogemH2uAw7bG3",
  "key7": "tKrws2vJAsBR8bfN2RvWGog4tLnWLdWCmL1JPD34JWUrVbcd8a4Y24myRE9JPbv7jDZAHGomTjVDiS4SEw8iZx9",
  "key8": "JrNVrPVUxzauCorqGNy4XHLKSgVvbvvq4xkvzKXU7FxbBdLJvC3HQMsVFsPCB25M9M1BnA1kV6nVV2tc42WPMkR",
  "key9": "EFFuGzdHzYUGbLTZwR5YbK2QN16N96w34tY5gFLw12gTMFX7UJKQN3iwYdoWfwYecLWVWZnqTnR747GdukPWAbK",
  "key10": "5jUjozqneBkb1f4zHh2BJthTcuUnZSbU1VTkett3sNeMeGJ48XwTWGjm1nwJpqXBkB3R21ynskuwtK5LWDQpCM9y",
  "key11": "2tD7YMXcJBYKmfahePxzVEj5Y2oyoix7XQ3rjNAVPfXsnHPzbESU4jKQjs7ZR3wv9qTZr4A6PuvJ2TrNJjSoH9bh",
  "key12": "32Amwpuu9CtZjtpfxv3oykErUhzi27XWbRXDJtYKk3FVSoQhyMdDfeagHbmZFP6JtXCP5UsSbqnUXxfS7qWTbqpk",
  "key13": "4RUVXuUjruq8DhY3gKmZcDqUX2ydXwqY2sQzHMPVAD4o2DCCkXtrMy6SDPBuUW7JLMSgJgEjQ7zTkvqcXYcDRsAK",
  "key14": "yBhYU9E4bjaQhjBqfeVUJnid6S3k1v9gUYZxXrzu2f2cwiukU6NvWpGHz3fV2zR2vfVX5zNMp9uNJ5DRg6bcKco",
  "key15": "4KLDn7zn2dhF4hCXsihAXgHy8GMsYZ65gseowXHNzvymDqRJR5D6REiv1ibWDEV7rWcV5DtPVTMx4zpq4zBkb1n8",
  "key16": "3bUmHtknmQ3VXPBduq3ehL5AWxHwvfcKb9avSnE6kJVzFow9iwPFtDHJyApDANxsTVaPbfQYKt92YruZe2jtMRjV",
  "key17": "j5T6ccvRpLb4xsmNgjrTyNFRrbkpDTawifqrnq7ntp53yZ5XHDuRo9jV4cPnJxAuPSCGHaew7WPpjUXfTKcfEuP",
  "key18": "2L1BsyZXsWJCeZoYr7jkYNz6FzYfWf8EU1mA8NHoi7Keb67hde47KnTXavQZGYJ6RAu2zSSbAdmXBUEr2EjJsLby",
  "key19": "FhPQmPNqe5YgRhezwHsrXhL7Fu6peFun3j3YHXsCkFQrNgV9L57gL4BSNJVGYVTvyCCjzaMdgbGpGr2Az9Lfjg6",
  "key20": "2Hh8xHe26TD7mMuV5Cfa66WJ6sTdLrQwm68KQzssqvrvALgzrrAL9KedVDB4zsVLUc1c8RmQZ1w6QbboMsry2xX1",
  "key21": "3Y39CdaLKaAcmpTWLceGQprbG8nkL35Zu9VXYRuhYwGtEQ7VSozivdgwhTM7rMXjCnEjU9doFgVTJtrgjk7wrwY",
  "key22": "4VpBjbn1ncDKoTgVkLDPGxdshx7KiYRRSa4qSZNRrZUdxZ6vpL4Tdu1ZGShgrE1utQAce6K2Q8edcetQ8FztDPhq",
  "key23": "5UUBnwiuTynXjQC2kAqvFE8ymeKYQzN8UBfVw815YPd2HKtHTYNQrwaSGsjvbUBJLRTYF5cP1GShEv4mwBHR12n2",
  "key24": "2LgLBHiRtBnwqUY6yA5uEmb1qy4Lfq9WzmWk1j7rQ43pSAF9oH9KPtPk8rLhRo4TRfR1JehGKrQqF4VueMum67QN",
  "key25": "3gGAWP9GQMJshsc5zoX57XQQrTx38cAxJwZijBVbpk5tR8NjXUhZfE9BjqYhfD7BJEimdGWJRssg4AwSKXnorzix",
  "key26": "4HaQBAEcy3Zy7sUFNEBsYNzUveRAtF3vLG5vEgFCMHpyEWLinwapj5bdNukpv3YN3vNVLNY9m92G6HtxNurBTgYR",
  "key27": "5izZvJkmYpXoNN8kRYLBN8DQdtzEZeawu3gUG7im1uwzTfn84CmRvLaZbDXSxVtAcBTY3noQmRWti6aPzN4TAWP9",
  "key28": "5BDrQwdCg3B3UJwt291nbAAY29VEzHCZnVZWbKhACCFfceM1gnpdVwMoaMg3x83gHZccfF69XjpTgsqyMgzRbqaZ",
  "key29": "2sQVQa1Y5cMdBJcSXQkAdDMrSUvguNjKb2oD3gL7XrKXiYWKa6E5Dmg7QXhRHtXgSiyp6gE5A6mdEMDyeygBqwik",
  "key30": "4MDRzhyePJ1rNBNpHytb5dGwkFWJfEB3RnvwUNBjVq4s6UHwpqynzqWjCxF5LKdYXzsNwYYxH3zMJvBgy9uAq3uP",
  "key31": "4CAgRNjC8sKuNdhS3yjXabNgFuJLcyWBnFzzm49NaY17BGs38YbGNGPjHCZA7WEaac5c32wC6kH2sKHhTKwRQExu",
  "key32": "3moiTRKWz7s72CCfmNVVxd3jJE7Yk2p14kEyhz4ntFMk5ASU31c3iLwTaAjnQNWtm3mSJN26DDpPhZ5LqESi1r5W",
  "key33": "2RqVjyrfRAhBRizac9WESydQNX2htfs6SNtjZeXAcE8Ujbo2a5JagGuHhoK6NHSaL5PY7x1L7Mrq74M9uGXwfJHo",
  "key34": "4Agqi8hhTRe5eznsVvu6AiLcwPt3gLLqDVWwxJNspvVoTzzvdiumDRBbZdSoomypduCGPKPTyWxE3GyqNZizngcL",
  "key35": "3pvJc5VyG6pfrho4PLb2YVRcxNoE1cNER7BTKRzxW4ZPye4hwuFgCRRDsyQHHkpJVMu2nvNfUED3Rm6eoMR8paFD",
  "key36": "MD32fqyNAEhbgJ9y5pKQ8gsJVqSypdczJ3wZsbuf8uzHciARgEz5TqueLijN2LJtvQ8QpbHH2ZxBdtLaNHXuZNr",
  "key37": "2ipmLjrN3i15zXWYetsLJFPDv4FR3fVZYLujoVbZeDKDG6opcqszwJziSn3zp4YnRcqZdAHVxrFjg4kXy8wPM5Hm",
  "key38": "4mTsN3fsQKCMghBFZc2dhw9LuBRhscPfLN1u79Jnkx6q5oC5XB1LFUMy4L9kvkVHAY3m64NkRBSxgQzRr1CBAEFX",
  "key39": "DLPnd8nKYa2pA6i5zEyCDaxRyMyAMXqXifu2oWmqeKgx5K5Rj7eoUJg3ECEn9h5PJce6h36JkuTpFrhYNHu7yNX",
  "key40": "x6GNgKqKfUwjEMtuEi1YE8qr7VVpjytcEPg7zyLrm5wV3x38imfhL81XQtwpbcSfT1mwyBKMoEzvBEEEc2A2Bmf",
  "key41": "2DPsxLyb9c23MPeKJus52UjKMRPAhUTZ8ndTKQBggn1Jn6gRXcq8iwMVB8vh11Rtm8EpanQMynRFEc6QeDYiA3tD"
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
