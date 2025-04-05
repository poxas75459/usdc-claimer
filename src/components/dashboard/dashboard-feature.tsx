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
    "53VTrDAZhis2b75ADogeJjsF5JjJ5w9KQ8h4JE1Ds8Hrq9VPayRKwZ2bgEktsEmyA2yjdET1g78rj36FtXbscCd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkrunemy5MCg3C8viaCdEe9dfjZPC53cFkC4HFGDmgWuUH5yBhjUZbepvY4HvqK3WBYbZCwutRjsPnz4baocpiF",
  "key1": "cSZWrPpuiUBGHHgFcG7Yh8g7iDuuy6myUWrcB3j6bVksFaVCcAWfaAbzRKjSechfEKBW2S8PcwZbs8Avuzjefn3",
  "key2": "2ENE4PYAa6L3cRFU2eN44pSsBog3FHmfpPLcyGA1EbB8jBSsZ6HRAZjSpdAHDSD9LVyiXCHjEKUxHttaiQCnT4DZ",
  "key3": "qY5RPY3Wrfp8WBqcnSsgxPsmCAvCp3sck1MoZ5Mxb3qDv4xDJQCkcvxeGLaK9h5BekXFBGiSsQMectJCGDCRSUa",
  "key4": "2d79eKiEfwkNCjqWMdSZkmjeUzaig87mmAz75Gx8URFF7q8D1R8MhTZLrLVEqLWYKpDMCvBRyPf1oBVUaGwZTsoA",
  "key5": "5tMLtbax57Gvvozz3yCcdwTmV6DAjUbT5zFfchaiF2LVSerkxxdTretF2zNSuzxMYXXxpP8A1QLStQaMR2iMUgSZ",
  "key6": "YYVmd8rWL7kiLpfSsYiLjD5zfKHAkwfJgCuEZ5HjzUawMVfin1Goe7jT4n28nARQRj1ZYr9wVnBYBBfPN1aRKYV",
  "key7": "2WxG5LcYCXhufGCMbZMXnymjYPcaoD7XLQjBPEYijhu2vSK3mHX8AZVmgqVTV6ZveMTSXkGTFz1RcdyWcye5i7EW",
  "key8": "5rHiWLLKebw7niRo6ntwsQAyY5ueLCNjdyCRKTf8eL6U5TkX7MLmWZDvcsW2T7mmW8x25CfrYvr6ypNZjbHNZ52t",
  "key9": "hExamgu6iDiq3r48yFB86fAzRt6rjJurQaBXsJmUuuW3hnGSgjUn6C27CYVAg2iJN315R37THUBTY5NuCEPiqqJ",
  "key10": "3UicLE5AvAaE6kRbtZiY41jWozbVu8vm2493d7PwjU8xKPgDZrvau4EVSLSecuokCqWb9xZQ39advp5PKJpgttnL",
  "key11": "2rGDbrbeHqEEY8tFMKLtjrQpsVym95DLVzx4ANXEQbu3MfVX5j6DuoQ3AU7bsv4xnEuksWg4b82aEVSQGccxCJsE",
  "key12": "dVK9ADN7SUq5y3aMbNg1MALMvSAJfXznS5w6vrHzr2uxmULG2FjHZGfrySmvCPpVVJmVa7wuD9J13F1wvvbsGRD",
  "key13": "VjVrRqpgdvwY6ZnV5FsVDPm8N8WhwJMXUeqenMTCC2DiCJyGWe8ytifBqXG7WiQ3F9pUKV4biT5QVQZ26BTyvui",
  "key14": "e5eJwTRS7ehHhk2gic291uaDZQ6qbDeaCr51XztwCEw87ddUC9HCHDfiN4fh7pBn3NAiF4d5ddM3qcGDSRnw2jx",
  "key15": "2pPe6UFcGFrn1aKNihYDXeKDdAgDoZasXZSkf2wXKsrV6NTpRGdGYSQvZi8edj2Xqop3aT7p3xGphs8ANrT6jib8",
  "key16": "4Xi2Lhuhzpdi61ZAeKG5M63HY667WPgB8a4BheaaqgRxLj3z7XCZLjEhuXFUtFRWyj8yJGeA6VUu9wn5X99Vahug",
  "key17": "26Ta8BHcsHvs5FXUsUcYMcDSnuUECuffZME6fdaU7cwdbMDumPSERFPewm6vZNdDQYpPiir2k6c5G6x9PLKGJL2E",
  "key18": "2eGv93ZWyFMhTkp3XJSJuFro3TPp8yvYcEeWcRmyHvLobVciBLwxQYDoyrLCA3wFGMHAaBisJS4AJzQazTq2kTh2",
  "key19": "5CGd92FJ8cLzTDRvLs2Hj5NYZW9rnoFu9A936pvZDhZ8VJviFW8AScPGybwnhe7cCy5eSDh6pEaBdf4iezuNvWKX",
  "key20": "3iK7phc4B2CT2w7wUpgjjnmQ5PsNCbAZubjFA3mjRXBnmSu8q8RwQEpJ3kaXptw57oq1kwWzjweMKFHXs4yiUtKU",
  "key21": "2pbFjiec7omj37HEqaFpLgjzdxDfdVAe5cg3VfQaJuRySdDr5Nug4855g3cKHgmFRzQcyVgkkWmmtGDYxQyCLho8",
  "key22": "1GXHMV8f4wQCTakypfUuZ3UHJZKon2HrMx7cXC5i6SJtHDyhTBB6mXmV6zgtcTSqbKqxFC2Kxu66rR1t9KMMmcZ",
  "key23": "jt6hmZAfc3rUHXBzymBP444zUSVgCtWjFxLwg1TyLubYoizHjFauRshhfqvjuSfWGobvRC9M6h5wpDfbdYfNR1K",
  "key24": "63BJ3YzDmjPUZ7878RSNhbBPyMgv8SzqvtpefVtTB4rCvSnk8PiFp8XzJEQfbb7YW3rdgTWihvwhnSPdEyUrM3HQ",
  "key25": "4MFMLQ6vNpVTqMFhurzony7PnDzxEaN9h5KhNiYSoYmRXHbQbWLWgekNbm6Ud7GSazZYDiuk2ie2t52bDLu3L312",
  "key26": "4zNZf4YvSyD4fJF1L24QBok4LSJgoLsLGencBRYha9Bv8v7ZGgoGJQwaE6cfdsygtjRK2ovnatPZEGZaJJ2YYvjJ",
  "key27": "3yEV4gjD77diSr84SwQyAr6bJDrcdsRhVWQ6UGACrk3sfVsdtXG2ZBWJ5AWahV78TGQwpAuyYtbdoMwZzoaWvDSE",
  "key28": "5tg61KE9Js5Sjw9v6opiKo9g5oLsSBn2Nus6au7UctAiEWPg6SFyfKAt3vvsKUTyxtyCX93NzeUZyD8482mjPcht",
  "key29": "4FHMHptzrRijG19xmJu4HFrKymwmVmGB26c3LBeCdN8oQhcXLmuiEosMiDBSYESQAnfk5fYSohFCYdeu5BSEfiwo",
  "key30": "5LW3r77VDZgGTHXY46ncAKDifjwUr7EJPe1bLVSNEaDPskeef7qpX4b7Ny1m7RUp3wYRRpMeejDrSbm5w3iEEZM4",
  "key31": "mjJ9zEfu5g5DQmGTyWpxmy8xh1767x6CrH6egGgcjh3UeLquNjvMpbUsDZVN3rqSUeCGCDP8LQNKK7CTrmVYjqD",
  "key32": "2K3SF8SdrepjUsPqykiaAB4hXoiGDBDG9CJPfNDtgJ2QNpi6PaNJefLFpRkjrmFrTdTmAXLx34Yy8jkiCoqp4Wer",
  "key33": "5aoeyS14juoGov5GCRb5WD45veLH5cd6C4Nxjb7xzJjg8nfh9RjaDbRRaWzK9SmfU9t9bG1NZHEcxFPkKEuzJUYc",
  "key34": "2ur4NxbYAdngjqHExdDn8DdrWqkC4vZTMYK2ajGrBjiMHCCXDk6XW2nw2TqJrwVPHwMh6QsyiEG3QQHXQLsftTZV",
  "key35": "RN57NYcU7vwp8eXmjbGvJSSXsApnoc6KeGXi3Q6KqL1nyGauS9URp6vxfhWF2rUVnySBh9qKPccUSRu9JCt3LF5",
  "key36": "4hSTChLXnrDXwzxTQN2SR7wkpx94tyruxhgnN5XodCrj7HpmLEYA6PTw4bG9RBQZUkzUkQswT3KhpSAfnrjVwRDJ",
  "key37": "4B2tAUPUx5HkJ9bgnqReqmUVxpaFoizeChKksEFFHefcKQHSZAyzqrDSaUZFpmuakSBRP4FR7jr1YgDFRzRxkdEc",
  "key38": "5ozf1CpC6LX9tPAmsvr7K1D5EoGUtRhj758sWCzk241Mr9m1Zs9oaa7c2HoSsLupwW1TEAie5r3XS6FfM5AQ5PBB",
  "key39": "2nVV8CweodH7s4JfGpNqVZK6tjV4WqnGUf57bQEYPV6uCVAbb5nUHowrGt3XyhbFRc7pUWWRFHC2vkzdgPceuH6y",
  "key40": "58CsMnW2ZxtV8kDc9RKioJooubrqXMVC8FUjXpN4kEt6jCECyPhFNE7eSwo2m74PVrXa9DtCv356jsgYve71vHVv",
  "key41": "3Y48WYKRrDwkSFVXPP7qDYkXh9iCM3YUQ74fjJ5iFs4cPAa5Fz2nYi2tXhne9DLi2Hxi6yXtJHLpTRiYY64rbSZj",
  "key42": "3seQH9q3Wwktftc1vkyTFoC7KPdPL6vJD6uMC17FCek6dLfJ2PX8EN5uFsNLREhynTwAg8KbrYugdHauprqgsV84",
  "key43": "vyZdDgH1pqjBGy2mKnrQUdqiGpExQKPxeojVQzGQdzDqwoNChWzPsECDGJYZykL8p3vzV9g8LNjtkJGu4Y4qvYJ",
  "key44": "39dBG69xHTvhUkGdg1Ptmx5VNBED6i5tp3BRLX7ZqjMuN9gdoBzUXjmQS5JZzXX2qCNJVrtHtMkXUCx5Fq2mMNQm",
  "key45": "cjjGhmtX6SyH2cpfu2xnxnFBAAu8LmYcUUxhRnneEyFExW3CP6tYQzqkjTiymZ4xzJQB916yBKyhuzoriTQUw8S",
  "key46": "3gKDex2aanQYBaaou9CUjzPjFsstUqon6osS6NQoFKXz1qCJSDfPwm2rSRRF4feEecrMtNYrWn3RFmRgctHVAQ79"
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
