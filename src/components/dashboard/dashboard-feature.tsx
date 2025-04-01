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
    "66FwCKeYT8CaftVrAm7Fn6GU66SnNp6RsfacWbjqTsH9KLcqDQbXdBDVG1Eubb3Si27vD5Ljqc2eCWVC8F45y3c6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9qwbkDzyFqpydavXLqqCSDg7scyFdERM7kEHU5pX1EeaXButSHkXmxfbq3NzSpZ87Nn2iZvPQQc7zhLtmNWrG4",
  "key1": "5Lg34VXAreR7hUEJ3iCa4sV8GWj8VuR3tQnDqykJRSgzxFXb1SQy7beftU1GhzDBXY6BR8KFGaD8DePNEzVWTxSY",
  "key2": "4iQ9ct4rqAnT1MsARuc6PiQ9uLZPZ7HGszxRKeZrtNW1tzjWvDuQuv6bjq7ffFsJcs3x6wT367qfH384Burp658D",
  "key3": "5vPopQFrerzHq61RF5QwhEtG3SxMnMHFc6uXhRjYmze2opDDx6FrrFSeZvv3iTnuViyKYj5ebg6okRhED6oosYde",
  "key4": "2cd3RdQuiV4AP8TYshENHdvxKF1Xy7tJ4yPBA5L9j1oR9bP6W4Vjw2XUg4m4b2U96xUFJogMKx4usRhkXxapYoVZ",
  "key5": "4uReb8yDzgv3vb57XCtohjyZhZTaU3RAbr4dufN8pssk2UYVCauxYZpMcgstmcbLpAYM2bhU3Ja67p4iBxfZY6Jm",
  "key6": "suSbWKsw3GetexC8EQW4dUfvTDeiw8KhsF7X4sRE3Mx3Dec8gsVeaxPZ2x3hpdBATmsAHMSBYEcoev5nPrPXZ5T",
  "key7": "2GzzR2pKr4R83oD388ZK1FWKRYK58mNh8E7upFQdiCKHz7Fy5B5Efvz5pzNa53v4Udcn5dGBxQh9rEDwsheyVzBV",
  "key8": "3PHJfwa6kxHcRnPP1CtqJ1QJS3NUN51gXrrLbxaAqDRwbPFGHmCo18bVe8gsfoa4sADuB82mjXThYavzzJCs4Lco",
  "key9": "4d7XUEjCcHQjGeUnCNbiMa7472HqmW3cvNbeQ5tTNYLXoHvMBemKDasEsPXGaZCPZEt616tfmsbehSsFdJHvbm2",
  "key10": "5Nhh9vRYx5iHkvAhEquPSGB3M3YaqSwFpvREGEHJMCn8UW8faQERMMj37mmNREPWwAwrUrj2yFNKgqq21ARyScGR",
  "key11": "5reCXvjEaGys6SLM4W7Lvb2HPad6QwKz5N5NrU2GKqXvpBmC5DBZjQ65Ai7CnUjJzgNqMk3z35S8nteYtm2BjxXA",
  "key12": "yPMWzrZoW2cnCcd9UcM3kJouPtt5bejCbT6WHLvKbvLZ3o39gt8WTetsXVKcwBPAznoguyJXu5ayFvE34dxhwVd",
  "key13": "4CeBYG48LgnaAfBkv8Ebu5pK2AcwK83JVEobFnvJUsBKw9E6bXqDZHzU1GSjsnGDUmae6zqam36q32meaqdTihc",
  "key14": "2uEau2aCxSdE2pfuEHYNvyJxB361rfjQmuyfF8ZRGoZVjjYVsaCgJMmU4VZbvmCuruNxuTGfVMD9ER1Ak4z42XaL",
  "key15": "45p1x9HPGB8igqdB1VsfLWmGbc5YwRrFXpdqva59CgKT6kx3RoUKhrz6ZMeSRnEN3QaJmvQxrECtbvRQPmiuun9t",
  "key16": "34zXZUXUAb4hQ8HDUBHTMvWsbmBSUjN16xLa1XHNmNtjH7AaM1sNeYbieep6fieuEEgAPQGfUZL1qNYoF9Rpijaj",
  "key17": "61HC5yg3G3ve8gYPGrB84GAVrQLYopGXGvVPTCEechLVT2EZnVDntEgt3aRU3rDzaETSyVnU8fgWMd8PZPbpV8G3",
  "key18": "3t7dvM3n4si26W1kKAYmNgntHDRN2WU1m9eBVRyZnFsgkJwKcqS6t9CPgqHQEz3s2iXCyVzaheyYbwLmh3zD36TW",
  "key19": "5DHWhA4wiZue88BgNLcS9Vd6MJewiejsATvMyNt5TroRXZvGAQG3667vQaJNMjKhxrhqgZDdpDuGLzrHTsiLdHMB",
  "key20": "5iP3sLLQc7vyZY5kJoEX2rXMEHiBhNFRwVxSjPRd8PWTP8Xmk9NmocQopBcUAQas87aHw2GrfQZsNZXqXd2PAGdJ",
  "key21": "5XQSSJLsKk5HFbpDpW88Zjpeg1uMqcY5w1VAZz9ec7v99MKsEQCEmrwfm6BHYpobqVU4LkX1iFtLaACwkq5RXhND",
  "key22": "3Juh6we48zWmBxUinnGgyzKva5Z36UExe62EQtjC4uZLV1j7ZnnLQH7ZDzjuuAvWSx35qm837GgV6UZwR46yj5Nk",
  "key23": "2Zbca19oEqmY6gckx37B1MxNF5THyVuhR663gYHvnmE3ugFhVwyqSw7UZ9M4w9Z6FDvVSyzLm4ij4JpukXyXtN2t",
  "key24": "3k2HhRqDsk9rNu3e4w7iLHDfm7vNezufnVYYCVa8XCBhEV5YNbbsdNuEvqjjZMeWFqqHDsrno267p5EDFaAy2Xrg",
  "key25": "2veU8naT6XGnXZdHrKdD27fCv2jzCpjBZ9e6eqZ8ut9hW2YW6wu7jmVtwBGxweRJ9fD7989MRsxTmozPRGKncTnu",
  "key26": "4RL7s1UpYJBad4e2LWg1ssFMXHftvamEkZcMAJsRGGEc1WHf4nniD7HwwWUxHNUxnVNoUTdegBxSrcy4njKSrpam",
  "key27": "4tj3S51f5WJk6ZneYeitv2UQhML3FKnfSXB3y2g5BzWhCeBrdbd7esJhvTC8F7GofhQQkW1PgN2oimxFYJeuJSWF",
  "key28": "5rvFzJ1PCR7dSh7wEqDGmexDLSawvyaM5fxeUbW9czFFS1rC6JRWGKs4SVxR1rZLijvVmRk5pJCXnyDc4oSQJEqU",
  "key29": "5ZcLDK89Xi9WWK6DVoCtTQmbTs37BkgXjMF9TBi77seBsZW83fM9Avt3tKa2Mnktjv8PxuwvCqc5hcKtH7wUaVt1",
  "key30": "61HSYcUmTzqaLbq2WqoQjpRjDcUyE2tjJU3PfJjCXLhmTSgpoSGQqzQikiFfRLY2s5gvzbju4NrhWQrrQ8JVeUzJ",
  "key31": "Mzchqx11bWaqcR9TNqGNxNTzftHBUUnsedDrCMLZ3cLfwte3oW3fuxCuY5GvzBYGoX3zUrx9n3nVmVDMe2RLAaG",
  "key32": "4hR4uTr2r1EZqivTxei7A2b42dyFDM3odYbNNhkHwxvczwKehXQRNhAuFdxmi4j6P5HqSkFTtrkboxc8aW7ZoAvb",
  "key33": "eHsjpW8ZkbQoL3rK2JV4Anrxq9itLZTS6XYKb3tzKa8hAB2BRQx2g9aRNctoXMN78uoWBrudy3K7YxMdhKNRMpX",
  "key34": "2UVdtN3QJSVTFsZeXcPTj4rYRg3TVsspt4fMeB8MMrZYVJZmdhkhZ2E3Uc6DZSVM2y2vzWVdNR1q5HqxZGYg7rwm",
  "key35": "f75HPmp5JJxKb5Lvqi6re3K4xUAFbJYZf4tQi5zVWbEgoc83HgctuVbRJkeCCSaG2SjCvbD7HzMrEToQspwghtW",
  "key36": "2xJXAyNvPX81A9kjJB4MwUEdAsS3zNvL9rgGVoNAGfa7FiBPfLJnXS2xYfn2WMprqW7T2nj6Ropty2jLQ1ZxUxyS",
  "key37": "2sKR4HWbF1DDhmp59AKNuVMz7GLNiie8GebsYxcj9qaz77CsL9T3jD7ga3qv9WJ7aLWw9KqpzNzr8pNeyEarrkoW",
  "key38": "if26yphCLAxQh1sf1z2wKMxkMq4HsmeHN4hfgxEk3e5bmcjYAQf9T8aFNyasVyf6q776Y3kmnAMDT81mXGMAdx8",
  "key39": "5bohK4rqPXQnUGr65hFXsrhCpJYrn5nbDQPBC3pEHG6jTC7pDnocxgFgrcibPFzVZFAmBMqdh7Q8F4Ts8zMwfeHV",
  "key40": "Wq4WAcfdaPsauYzaLYR5Ty9kYSEMaZabnfcgJwAbzwe5Gvh3kQWt8EmAREGmfU6dE9sdKziqF75fcEeP4DBELp8",
  "key41": "4a1RBN77PvniCCLLrCjckD3SU3J8CSjzq7o47Re2iRVB3UyBnX9cyM1rpTLwDB2Q2bQQfALRBaQW1QGNVyYsunUE",
  "key42": "3FVp6BVKB99bywHypADnYYeF5AZNaUDDnqoxQt7zWB8jUNrixyBwrbkwMLaGhQtcvYbkvZTLCxq3JNJQcMhEo5NX",
  "key43": "5cVT3Dz3xBGPbQYjrpwNgWNbGkTrHF8RRy1htNzoD7QvbbrbzaRSVJcZxFa1VAPnC3QN9UVzDvTMjZhe94nu14V1",
  "key44": "3uL6eRgzS19bFX1WDCjaEWDcRsCdXUk41BSKwWDdUcKVtKirQdyxwmY1oxfFuAewGdzYfeixJhRLxkNPBF4tjuSL"
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
