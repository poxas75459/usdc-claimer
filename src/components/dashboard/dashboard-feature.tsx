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
    "5aF3UciidDWLNT4E7PVHf796mA4J7pXrfsxXbCzfA2m2rCZxr9SZNyy2EEo8CEVsKFpBafyzRMqzRMDXpMRYQCaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SEa5VSxDRG1WqU5WenBUZiHZGau9MqfYKrpQR1iK6we4FSMjQfrAXpGSeLLGtNvRrg3GypvqYyyUkn6rukqUVK8",
  "key1": "HyX5KHjnf2q83FLVBTboYcNT5ZDMK87TdgsV3H3czM4fVc9SASD3JzVKgs9kgLvyrxZbxigzTtWxNa1Qf7GJ1SZ",
  "key2": "21rKtFmsRJcuEGfLniQBpaVNFM76hDrur7GkiUHFTTgQmUorrH8k4Yfk5baJ2QciF2R34BDCUPGz5Yi2W7LC6LHe",
  "key3": "UcL7BNGYpkzkz6RnC2FnWZ3Rrwd96Q2TE41GCWBYiMkwZwtJXBczMSQNwt1AyopQRHD2ohi1H4ittyKGt51Btw2",
  "key4": "3RL8BgB4P6FUNYwg3JKmECN93ev3rhxd21kTwe6FuursLAUTkWgq6pefF6qojRSyBKHhu4ka3ZwZio5MBsnUvBdY",
  "key5": "2yBTTvJB6KE2BNd5aoDVjzdNc4CUixGHontatpnc8HJYUqkJMYPaK29xvSomWgHrWpdyckPtXRXRYxLs84QDMSQL",
  "key6": "4zSWG5qiubJGWmk9N2RhryrYLNBAwH6UCg42u3k5wHe77b8qAoJYGb21YPC1pkFNxLc7pEMceTNETK5BdoZRDEhj",
  "key7": "4AdmGQQugD7WLDpoQvsz6mkP2v7pBFmXPHjSPUb9PLxD1zo4ar9prESSfm6wMBCbi8nvbQgKxwB5fLUA7C3sKHZe",
  "key8": "4ZtLY9Us9MhVpkQmsHwRDf5XTJRPegtf5hZnYAAuB7hwKh97gyNV8R928htHGYu6uBng4DcdNNN2tVBkroqCRvjS",
  "key9": "WHqXdqbUUYPvLAFkHehu2Fz8AUMykS4ZiBZPfYStgdZFdGaXEidDUtNjUfr6PfY91Sxb7pP5izmXer4ucGCJ4cQ",
  "key10": "26SZT83F9h3UXENc7SBZSxCNxn383N9ynhcDF7iHG5cBT6qHb4SWHkmCfJiTWy5CyMvzH5iJaXnc9MBDd6wCx2vf",
  "key11": "h8Ccs7wFmGQvowLgYTTX9eqXdqcSQPw4t62ywrBtas2n5H6KHZcJtfkg8SyHsVCScqWB4v1Fs6nEbXmoi5Gwu9F",
  "key12": "B9w5RFcKXrfkrXzH37wvXz7jg5BHCcSnTL9Wo2igsB8pVQHjToUj5haERCPegV46kQEx8TE9fNMcqbPuUD1DDrw",
  "key13": "2MF9xFtveUn1BXqwKs2M36BSWRPRaMTX1F2wXDT8EMVFmqBB1UaL1q4d7SiW2D7sAk4srmLiibXbL8gAf1RCMuvX",
  "key14": "4RsrDSpSskK53NB3MptvRF9CqQsYGCwwvRf5695Wz7jbdP8WdVjf5LzuDU9TRp41iEhNBNUB3DzSEKqf87f4owph",
  "key15": "3qmseWHdhTBiwJ625SpMXTJxrkN2t4NtUeERGvrHcSeiPBzYKPd7KJoS9tofv9VhzKBA4cZmjYUcphVfdhpbo6LV",
  "key16": "2CTjXtADktqZdotPVXLsSgw8QqF7B3z9Ba6wXXFQEHvVcWF91rDVTUXFN8D3oPNesrwvpJ5L6pENAtbybjqxjSzn",
  "key17": "54EYMxHCb4mK4SGMBDBZ464VPbSnGySZFXcCC28Mes4BZSkdZa4MgLJyPCWPPmkfa9dg4HzDpsm2oSSFocgwpJRm",
  "key18": "N2wXKbkmjGexpWtFkrWAy78BiL49Dpz9PQT6Gavk8uaY5bBVfmdw4HNfTvmJBeSUZuuU48nURnPhi5buu4AknW3",
  "key19": "5BrbxyKJwPpCpU5zvC5sMjVqKKoZH4ajMTzQdmNLcgCTFJXNXBecwkmXC58UFoDzoggzAGd1A495HATTgukfMt56",
  "key20": "58x9v2jemCSTQddpUoETGEA9XzgYhVs6V4dMww8U3dfhwS6iJ4zLB2SrSk2FGj1GqDatSWWagVPn5NjLpodAmYiC",
  "key21": "352REBW27qcMke4yNTXtMCZnyYrkAnCabA29JTDxGw6kVgZDSC6C1rck1fjLDxKEC1zvstYCHwYxPuHyfM8a793Z",
  "key22": "4PBTN4ZSmxyGG1Dm2uygv7PBkHvc6d4iNW1xeHvB5jJMhh74dXYjHJoLrBQLcRgGstzzTjJcBdTChknJaQtQHrHL",
  "key23": "2VLWsh7yntfcb9p24tHvwb79mMMNgh3FfXTBZDH27uvFExHuXiP9ASBSzxr6Uimv2rkdH49uVFx4SaWGC1YJhrZs",
  "key24": "2KxNBEwQNSQ5hzv6TSMfup7SrSRL2cSfnKgRpq5D5gSnrjAdgnys7PEJtD1K79Jf2NZsHSYU4W3r2Gp73Usg39ks",
  "key25": "5mWgLBi4GzHEx1w8dVzWNjARzainVYxvMovQK3ydJZfmW9c3gphGjxW1vJdRMLm7NPb3UiDBMu8CQs6h884DKQpS",
  "key26": "c5vJ9EMYExrbSzigp6UHqYhLreg1bgYQZD1W2GCCipg3HogAMijJ8fQMgGpadTWBavJjdEm3rgmEyGLA4NcLMgS",
  "key27": "owj634BumN6zpXmHVi7326oHapbwb1HPAvvakAS2MpACVcGtTEjaxGJKYm3yVKwXo28f8BPioGHm7SAVnyKgs6k",
  "key28": "3FqqpEAhKF8Li2GVeqFVsQAA3r9QgznyLSKey8YTuaay9n1T47qKQsFmeegcbDBNbxwzwnvMPnUkUpZovB9WW2oj",
  "key29": "3nDs9FAkEwbQ6Qn6Fua2X8LYA9kAUerDPEvrMuKfdUQwzuFz2dNxqFAEyFuqfLqhA41PqYmb4uBPVXVK5c2eZZt9",
  "key30": "5hnc28FNAHa1qRJ5UQb3wNDDtiTmRziJmk8XpAW1rCifT7daBZU6BCavTKsnkxhARtDci2XzkXz8bbCnekVQGsE5",
  "key31": "3GfBQ2ar35n4NXUEJrPSKhiYweU5Rhd9R3dWa2LExbULFN7ntcsaHiS9qA3SYmfkAhAcDQnooiAhq8sMauvFcWx3",
  "key32": "4h5yYwHFFAEnmoAG8WuygnHPGkTD7GcgJaNrzYBHyyrRecGjHJ7ayeqF5m4frM16WFFC72sFxGJFdPhz2sm2kYCp",
  "key33": "2jtRNvpTyCGKTS8C2HU63sCTHTrnnxYWfanGzJYkgTQR9FVBMV8sAVb9ZVNMr92FSnvBXutmHffRXtvRFrS8e8iP",
  "key34": "3wN6iFkBvH395Kk3xH2EhYbzS8b33jATQjbT2RZMKco4SXBJBEoT6BpmpByCRjq3pRuzMcMHtq3CYjqdeTeApJGz",
  "key35": "5hUe2BBT5vLCXoe5WRnU7EpffqY2W25Hsk1cXRC4nH6H3WmdNpKY2ijX7NFAWGWigtWRLy3YknsrwH2fymATq9YB",
  "key36": "2FUYG3aDgKvu24vMbPWXcWtZHR3e7Y5dEVnyoB3jWbStUAzQpY71U3wPdNm4NSSNvzodoeX7VhqjVaJHz9Kgt1FA",
  "key37": "4fW6JRTd5BpQyPcSyCRswrKweF7DcvXSVKCEqBx5JHgxDZwr9W7u2dD7rcpnTzfgG1tkYrM6UvCdfXGALPkESBuJ",
  "key38": "2bLHKMLBYqyf2F9dPJ7RpxBmsUKemARGtkcNMsdn5EPdmY7GtrgRwcEgFbGtmAMBJixRN1aaMHvD9Na6jrNE9pku",
  "key39": "63n94itJfQPtbMFeAwj3HHNqFGQ4sC4xMu7ZxgHpSNkTkr4RHsKzQnd5cBejrpp47GMvAhfpvnEeL8DUYCVX8p99",
  "key40": "22FUk5jyhm1c5smHheQwkExuxPFwjNkvBsa2ewzUXo9hv1WPUydP4kPLCcwdNZntTMoGxszzvPYVqsEYbiNNMnrU",
  "key41": "4ok6ongG9PXhgo4obW5wZzquKSBDaNjid97TL7s8HyQLTCr5xyexGooMe7UgCQb1xFGFRCHzNnL8qLWbmDQG5UzY",
  "key42": "4T6TBT6LCoMu4onEPJisX7FYovzmyXpV7z3xJrAReekTL4DMpDv5b61VtSrLbHNmQMKm8Qss7SkzXwD88kzQBxGp",
  "key43": "Y39dGi4CV9xrtCL2mG1SGSH92VXBqXooaktZZYEXTB7vQtKj2GFXYJwmaM93saEZT74cgqmozRoJkG4PSJ2ho7n",
  "key44": "399BTTXD7DDyDEuQJbpU8F3wzwLuUJKEiLAWWy1MgXaaxo6k4SiRxWaWDToCJZdJmfL2hhaVSPurHJNfdpS3SYqN",
  "key45": "49kc5EvxCUXPF8HdjgEkBGZeXs6yb9aKW5THKLvWuTdDvZx34AMEdxgh43ZYXRtdJBFvTUMjUJoPTQujjvyhCgQV",
  "key46": "5ddosCGADdPQkcSNju21qVaFaykWDm4ph3vQiRs4HyMzHBSdUvuzJYSDezmbkpexUkXkeW8yASPuetUpqtjGwmby"
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
