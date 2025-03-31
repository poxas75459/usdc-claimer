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
    "5nadCYWrp5hdhGmKayeEJjDRqZzf93ZTSHxpT5TGjeHE5WXXz9xmANSCjfSZVBMDWguRvdY1bG2cVGQcqPchpHgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szYNxSMKa2x5AbKdce5uErewtLKKJgrTdBFPxj83PZCBW2vd8W9e1N92QgAkkZWxuvDDo6noyotkasxcoF6tmqE",
  "key1": "4Yh2vqsSMZzNK1zNTAMSMseRbpTxpGDc2xL934igk8ZUaHDAQMvi5kDzD7p2FiXEoZir8xLU2EzU9LRzvRp2pwHT",
  "key2": "4giqKasvYTJqkDWYKCZee6GX8CHk6kAbqGaKXQpmxS6ccQmaLQSwXJyoKkW3QjzNEDDVJSrx9p517hroCxX5iJrU",
  "key3": "4ghZA12b9HzUUuGoSL6LvXbJTCQQ48mLMGy2Pb3hRsFqJirWrTbN9Eo4uTkKeshTZHv8pk1DDfySwB8UMeQFwkhh",
  "key4": "4BAVaxh6KWkRdvaDzzRBfmvjZKkoFy36DGzhLtR7DqBn2yDk2ARjdpF37WCy1jhbt2SHdZ5j9aUKdd9yqTEUWMR6",
  "key5": "imTrGcxZhkn1cexMgekckmMsdnPh3sam9ej6xdtGVQuuYLqsmdEs8JPQtSndjqZaW6L2hs771Ko6TSQ6Y6hnoM8",
  "key6": "4B7VjUqDWtgUhaaCKLBViCCQMt51aoFfvM1YyBQtf6F8F4GMntCQyeQHb83LKwnUNUaknZ3c7Pyn5rBRfFaXrLcV",
  "key7": "3FTRhJg4kM5XyfjDmBcBTNZgKRFzXnzLJkrjsTHFfVu4653Knz5dTz5C9BPhmEuAe2fEx2Hh6bz5aThDJLqi96T5",
  "key8": "RaGhEdeXu6p65rPDibeYinMk2hJNZpdASrHEaTLL8SRhQDFUou9QrHGJekLybcznPFZaRqHxzepfimj5epHzBQU",
  "key9": "5PdR79oeGnZGwpMaDSZ1tDQt1EvstNGDRkQ8Qft9bLWnZtxcgr2SnVpJZVszB15RKPToRN6qWpJSHFsxXMn6bqFH",
  "key10": "5BXYVvojqWSX95vtUBW3grqvpFJEysQqni9DGva2dRdGYbFpYsrbCaVi32E5roqyejJvKyVJyBkN6CATRjVSKoE6",
  "key11": "2CHYB9PD4DkGMYzqhPbDWW5bF3R61M8wuUUXYFPwenLLzzBmvz2r87YiwE2CcVWFERokzaVv55mNmmJr9ZHev5ji",
  "key12": "4nSLeqq3DvxKHNVZ36q5MW1ZUDbQp8n1WGWYCZtw4GEsRRXpLMB9XG8WQGMpgFMVh3gPFycQivHXDSeGLSD7SMPy",
  "key13": "5tSiaXecAkZv55Cnma54WPXhX9R3bY4kLCRuX18JDPKHxLXP4YupoWEuqeTjmZZDZMhw39rTM8A3cMJK2vS7oTy4",
  "key14": "4hrnmXk5hMcvMQoxKWc7fZE8SYvGky31oC459MALqctCiXsTaazDRyzVfvNssguKRWJexvV1UNDufRnYHw3rTEQ8",
  "key15": "5VEsrRwAqkWAtFTe9DSEAE8r3JbiYcNxpueb1Fytxb8n46AKtbKLsU8Bydk3q3qdKZG9XoWZXsra3k2ASnhfUE1K",
  "key16": "2hDCZ4UXV6n4zCaV4tRSysA6y3NbgvjT1NrCduHUcaYtZu6NSB8fDkiCpYfGpsu2zHr62iS7EHd6pFApskC2AZSs",
  "key17": "3cq19h4AJejGivgxkwrvLkWBtMnzoXbQvj58nMbwXVKuC9x3x84UhptkEVLPwmNopYLHkVbtiLXEg54ZfZvGUFeo",
  "key18": "ek8e4Aiu6aZumtcot58YAu2UXNC2ncP6FnY8kvzZmzEcENPnnYA378GBorKiGKZQBQz32AL828aNNWxZVTPD3Ne",
  "key19": "dWXP5gX43RtL5xYzeFuvHNmDdqirUe3jdbz4aovsRRxWdEfaKon4pZeJSknhfBWDup1q9rJPPmYcur9mUYc8JC7",
  "key20": "3gwRc99ueZdswoXnhkiNLF12wyxaJ41nY9s8ovfzBdtkrzx6bqqhxdBxyFxcSrYGYFfLYAmiU1VAoJuTqxYrYyMi",
  "key21": "3kPXraw4k1zauYzPRf9QWQEF6DDePbjJqi77Bdgte8BBAYHH1oirbPzKnU1YJhWPCUej1GupgrXWn1uZTMUJfJXa",
  "key22": "38nDGXMxYwfEaTok8Yqfw2VaHuKhVcxhBPY4uf2nBrzgpBAKNUkDYPtjJRnMzG5GFTVMqMCpwSDaGyVYSE2weLGL",
  "key23": "5GwL6tDjgMcecwKWBCtoq4drTSPf3dxgtTT4yyBEPhDFeXd4izTphUvCDBvWVS3JR6PTC1rCNAHJUkFvGAqRQQMp",
  "key24": "5na1Jgyp1LL3asS8NzhWmygRakGRvz4Qj288XWJm9imvASjjUUQGM1HmihLWS6s7sUAaPto7t3sqkytC73ysNoCu",
  "key25": "FwKze1RaFV9LLbaQeAzdr8U66t7yRZ9XtDgTsq6Pgn1ptB97pnDJnYVaH3EPwGj2Gj2gGdF1Nwy459o7MDiqzP8",
  "key26": "5msrh87WGKZVWQ9883sZBQa6auBApAJJq69gXxXBP6BFckLu59CrrDBynPV1pHCQ1B6vKxr2KKVFPqo1XwFVkFUd",
  "key27": "JvDthpjr2y5gmCzEBch4PyKzLLWyvsqn7aigULJ1PVG7v6XYzwUxGtXmAXvBozE9EVuwU8EDNyuU68sFgn2P5G3",
  "key28": "3AK6e1tkN8CJNp5d6XiRyK8Z1sMDyvB6QphFTuwXgtyNHtta8Qhtqog2E3vmFW4vVYbRMqHBNywmCr8MTFHQy14a",
  "key29": "5Tt4vuji4hNjaW2PAtPWd8gTzYdMaDHaB9s1ALyAzkk42kc69dhveFLgLT8R9SPiH5cYXA37p9uDbHYRw65ku5fV",
  "key30": "2WQiDXefKZgGdQ7WwtmeuKreeJ1NjuYRMqtmF1TQPz25LLMoEBAkuuwd6k4LJHRdpBRGyTZCGWwwJJjogs3TNWc9",
  "key31": "2SyxEemYmD4c5DVb7UpFVJvyhZLpVS1RBLJPHGJXKxwrZuyeVuigJTecFo2G775CNkbX65pu55WfEVT3Qt6cQ9Bw",
  "key32": "18WoiPV7MNT71eeeen2VxyjLA8ckcWJFSCaw9ZuKt9csaaQ56o6k5UEmZx9hFqiRhUKoVo55HFZgPVVdeZEnJQM",
  "key33": "Ebr7BVMYC9vYvUhkXfZPLUFWfAovYtz1DUPdQnEqF7YhBJ13yCpAeREeBDnURyKoHTFZjSJxDbb7WLukVJaDkyz",
  "key34": "3DhZVnsPag1mMxNtKb5QJpRh9aoBKUVDrQPtDXQmBhbHKFDeCPQfFq6hJyLPqSSADCDb6rbMHHwhg5ciSxfT4Fn8",
  "key35": "2CA5Go49ULHyUn8yQnV7mpD4GWTQ89C6Brx9A23Ni8F3GZ64Xs5uZRaEeWM1MP4zbatWgis3x3QbR3jewbXNyfH3",
  "key36": "MwXTfThLkTdoeNycdBV7SJcMFapmEhayqrYLsXNpdJWrfz7AF5fGchc6bXUzJaqEwpebo8nJg5JxkNu3MBWYudX",
  "key37": "3wkqBnQEpP46E2hHV1hhvsL71Z4dHWVXd833KgLf8WshfxrfqKLtAGFc4jps139NamiW9J1kTAX8VqfpRs8UhSVG",
  "key38": "4XQdx7GVS7BUvxvbxbybNr3N9gbQGHFmz79at2uWhJEvTTijSraQTXBc2DQUBqaGEeWaquwrHruvQhhATTvFU6ad",
  "key39": "35pjMZKvEDJPYa26bo2aD35MkNcCU7xoT8JVBCRToUSWCjrhp145W7EShykLC8r7AvhYkPBcN5c95vNpfzLBGc1o",
  "key40": "4hTj6HheaMJdTrZDRdYAvAx9Mv6HfEa1tPDKQQUEzrADpMUuA9kPDPerweueRwfY7RKs7AAPfSZMkmAsREvEZewL",
  "key41": "2ouw5CYWHnyFGupevHkuUQtmqcMJnRBhPv2tJY85QYD181raE6nneVXxUoebAbg5otEmwrX8xRXFnw9XRtbLdooA",
  "key42": "5DfEDCALstp1J2B7HMAYxuqK2z8nGSJDVXVbYCHYMSLMmxRBmHVp9vELh74FZDNPgFDsfMa2NdRZiotwddN7pVkj",
  "key43": "V9hGeQzo18yoopV8agV2qH9PSTEQymRezeF8EUYrdaCUrKfiXWjRHsYvYPL2T16mfNRRVebUzvKLvZUVMgKHbFx",
  "key44": "5cLKcxmUQPeNtNmSX9vkLKtqg19SN69zmfzGfMryHByPyjgA2BksWgNo7k9cU4PeBM1S1F2n3J7NMXwpnUyPG1cG",
  "key45": "6716CmP3ohXt4VoA1r93YJxn4FjzyF9ZTXXTrZttWiedqu7Ci8vRGJAnzB4TrKZ4CS6qWpA5MBLzbXsXcsecmoXf"
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
