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
    "2XVpkVC6fJKsh8pV7EaVribADYoJAcSfzUjRE1F3A3BvoSnvvMRMwRG5oW6rmNwgFmN4skFb1hGVyPiXHQE2PSkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6KPFAUjGkSQSddUxNyRxzj13vMVo8Vc813psp23PQNKGQgzxUbYUHErASmbJD1U23PaKsDGnERMexSFxv7y2vJ",
  "key1": "51JrWPjrxsQnMGnxoQS3Dyxe48dNZXTbiaowvMhnKJXZW1mmMWjuebHBo7phACuFg6a8ZtUGMceCUBdD78Z63zqW",
  "key2": "3ei9XquZHVpXygrTGVLvC7wLrPSD3XjrYtqoZZzX6Y5VbMh33hq4hQw5A1zFY3cukLZ3uirmJw7r6DBCxLRWpuo6",
  "key3": "2pJhKvV4MatrD7AKvzubGSv8qkQ5Wm4e49YjmPo8vgvFh86tuWQZgysn6wqwTPCeKwm8ep6ynrPbSnmdJgwQE4ne",
  "key4": "2EzCWbDUcLTrDhFaB3BcvQCMS8akKWFX1fstYXpirYgUFFePmhxKss2gXjS4AgDXTRNNoeVUWBtN63YY9QMGobAL",
  "key5": "4Rm5ig7bVoA31twwAPaR1zcu6ReeUYzMWGowzfoqxdoQnHbFFSyuMDjrg6DYFFw7xeM9cobBEN5jGXwBq82H2GHU",
  "key6": "FLE9BcRRMu8VSQ1HipmbEVgbY7zddDPdURijKmh9Z3HRfpzMEtYDtTz5Q3vQwAgxkRTwEGmy2FinCiDujsfzXmk",
  "key7": "2LgrVBA2gHUZ8iafpZ1yunPUFxm2rAqGT9VEvDgCV5LkbGZLgnhtYZ91PxLWqpCHBR8yxD3FMBe643qf2UJCabrC",
  "key8": "2RSPio2KxnrVVtRiRGx9WE6h8ihi5oH1iHbxGLWhTDpY32HB2HJy6Ld9FP83Brxjm7RufyPjjw5K71mcNWD7DCZy",
  "key9": "2iRWhyDkmtDcPL1BhgyNgrFTPCMxV72uGHqUUB5a8hDqqcoyrYqGTkyqSR9KgMKmmNkPcegJn7gDGJ3GBahUL2us",
  "key10": "4y7usnECtfdvz9RX1ynjbmj3U8REJFho1DB7ZhTqwAg1jMYXZXrX6DExYFk4eSL6Vd7xy8zfn9mGCRiTBvzj7BdN",
  "key11": "3q4ovshNAT7tNetWUaqkKWRiWwavMJCMpJgTczih2XuZWU3onGziQTx5XGp7iQZKaC94QJb6uoG8Q2bpLFnMiNgW",
  "key12": "FAUkw7ov4UpcTsZGz2hnxpeUjnMzmwYph25sRJBZjHY2yn5xrDMCL4dTZeK12Ttc9amvCtdY8YWVsVkG542268C",
  "key13": "3xN8ABxF4bLjNeTQqRvdRimP6wcNfTTdDTnVKd4Z7C1R2fDKbWRqjUnzkDkuHF4PC5ZP9Anx6XsfboCw9ngR2e9a",
  "key14": "2ZHqza4K8rApTPCUyTKTMb6Fd3omw7MBGYjxxT4FEWnjLasc5H2vPGvMXS3SN9aeef1E9mrbfyxsYefPfJxvSNen",
  "key15": "2a6KFhR6TU7yca7TiSMus5TJWCHqfVshu7kzZCtpm4odakBNmBUvu1AceDvYkaN7jzCfXAmZ36PxfD6nREZHVbxq",
  "key16": "4tp4Wa4Tvx9zGsCoEC1ksKTdoWeBGqvQ8rw7jEBB4Jy5U7Te442zrpe4UK9eKr5f2rUiSxdKbSyF43EqMx5P9jw8",
  "key17": "2xnoSMqrMt7FEBS3gEQiv2JhDhFUc1EUY7ARznoiQJ3UvHoKoEaA3ritnjQ3W2NNrbjGK6MTx3FEGgxNcx4HZ1Af",
  "key18": "2aRvCekxaamsH8tQL5AtN2apX1YuLZ9Cc3JGGXCEaZQrixRBfJDW2MwoScUmkDRGHWcnXQZxHrDQZWVqfSDHCva2",
  "key19": "5CyvDjJ8KTVayM2kTPs9AYR5NNoqQCWNaYodDm4B3AVT97A382KVt7He5xHK9ZisRYJ1L8Hh4cpKweJLFmUJaLb2",
  "key20": "5EEY3L6gEc7V5AaamNt1FYWj1zxNiifJApNJis1z2y29PY98arxpEVRa9nH2hv8fwvvtSrjvVjZMcGYUj5Bjwmbx",
  "key21": "2Ff1KUVCovq4bQmJ9wJzxWWQrGcSb6LD5XKFFcyM9i4NirGojoS4tH6D6tbbqcvBLakrmunQRTmZ288pnpKHVXBF",
  "key22": "4dy3bdFEqrXC9pDxMLCLQtZ7yqKWgbboSwjdJgucDcDjmWw3qVX12mTVzamHcmcLrFYgXKy76693uD9LhtbEg3Mx",
  "key23": "3LRUkEoxpt4xe4cUwrw7rC6sJX8dHYzsqWyx519bovneaAQsYG2siGKk78wSB1aVLnsjJ1y4VgcGPD9s1j5oxj1Q",
  "key24": "66Ht1jCpr3XnLgw22VEMXqQX92ugwtxmDqbBcMvbhXRsvf2qgrPU2ynRMDpurUsMVMGsmUwebaaf1X1TKQME9sw",
  "key25": "3fF72gvQV5UUHg6CgMwpiggJq4zJTbu2Nx72N2fVi86khB62j4Z7Uxzw26XcqhS634jUC9V1vp9G6vPE4YXymhwJ",
  "key26": "WWRGK5AoSBNcSbxjjfqBCht6e8g7mSMeySnbnESARZPrLZmnQTmanFtveNdQJv3raevChLEP9EoZkfr4rg7uHMd",
  "key27": "3EsGUvnRLp5txQNLuimZLhmuEaNsgSfK1pxEicxdXKVxa8csMYRrNZdF2PnjsrCg3K5EgwWhpeeGLG3rznkHzNx3",
  "key28": "2rKvHipThpayKSBoFMcmnku7qsA5cXC1NLdcNvZa6H2j5HxNj1nrTA9EApxoDAA7CaxxuUgVcqFcwdNXZaNuGrkS",
  "key29": "3y4CGDsYDndAdxCm2qwFXGNoNbHTkY84D3eNqbZGc9txmXDKsi2QNQbwuHq461rJjys1jmT24ro3aKboiRxEBsCR",
  "key30": "6rG6CYLNeEMwtavXNS98TcQq2iWdSYzurSKs18Wv2mL2e4vLSH13fCPZTRvHSXB7xcrSN7CAcFGpHQtn5XmQUsQ",
  "key31": "2QGXHaFMnFUxMrnewz82Sxocm84cANcHVoeUJTrSsifkPs3cVoW8pz7uysYFEWj8hRC9CEyehxocoAfZbgzuk8hy",
  "key32": "P1t1GtwCQL5xGwrZiARVdBP9MRS8vVxNXmQ7ESTRHncCP3qnhc93pSkuujactz4oDDXuFFQ4XDwr3kgsCxJk1xG",
  "key33": "5Sm6QyqbDjaDEFcMh9owd4hf6uB9n4fpaU2RDp1yjxo6jkFLS3hrMh7QQQf3Tg7wmot7fbsPWhACQtsphQ8QPjje",
  "key34": "2PTwe4M99bF4a65SKXWXECvsai1ScJrERvWQaUiVFBavPDq9SmwQqyyjBts8khg6igtWpjnnThfzyCs3mHJ1NHES",
  "key35": "5hNhbBzD2CtEH6Z9FBm7ZBzKGKE4s47f5yKckYds6DpCSTedTB5RSzG4Ltw964wwnhAWS2mvJFNvkhNvfGVx4RKa",
  "key36": "2PzDXm4165EqoUtueu5MTnFZG5MMdDPHHy3674cUVXMSeNPYvFAVw8h53UjfKf96djF5rMiWNHKkFUwhxFHijyeT",
  "key37": "26Yf8j31FFQ5XPyZyXYSHHEmHdMFwkKi39PpwYudkonLLH4AnDJsdWAi3MewKxPW7QF2QhvDGNgJp7vRAoZHm6GQ",
  "key38": "rH4G9zyD6SX91ou1hXJyou6fJftNa5DMJ6bdRJ5yYNCisHihQbzFYYMTd7yHp1hdDBapRaTHYriA8qFX8k52UDT",
  "key39": "62rDxXS3gTHYLVG9rFTp2Cbqbk7p6U8ABgSmeJzj9iMZ1iSAV3BQVFaaL4t4kEz4tpDf63a1pdJweEYYKuFnVQyZ",
  "key40": "57rtJqTraFUrR71u9wQH2CjDBCny7khXmPA8vUxTDKzGaxXHfGja2jdfpDwrE1jvZ7FUgxHuZ4gXF8Lzegya2DNX",
  "key41": "gY1xt4wtgBDMFR2yH9bCwKjMF1h4391jH26RZvGLJ5kNj3zWckR6jkKoGEjJy1e4ANQdj7w2sntL7Rfy4sgmpCg",
  "key42": "4AY5Kc3HsUgqoA3AcNyk36odxQbvZQkzWPEJdZs3TuKqqGwE8Q8VokBzK3yQKRg9hQN5giKED5ta7pJvrSRRAr9b",
  "key43": "5yH5VfDSN7arhRZPjofMUGF8M6U6X1Ay9EnDbSqPVu1kh5Cr3tLThgF1GkZJ6vkfDLWKjKyhAZZUnggYJbAz8ZR2",
  "key44": "5ht3ee554eSyNjW9LrW3XnPg6Dcw2zm9M9kHK3ww34gCBiAhCfs1hyDkavNsUB3pvgYyQ1HedjPhdjkoWBNKqbDR",
  "key45": "5xnWvpnvrj6oXYCipVX41pbPZEgdqckUgTk3W2UhSZUT1X8KPjivKWP9druZKQhCd1v5BMYiupjVgkL4wmEDAkwa",
  "key46": "aCxSJgLw9DovXUdnGrNcbUwGyx7Eu1TSikEFS1br5wth2o9VBmU6F3PbneX6wTHW1k9ex3g2ivwHA8LtTXvXzwJ"
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
