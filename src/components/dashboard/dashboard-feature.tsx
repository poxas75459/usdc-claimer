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
    "4etpVY5ETkHFFtLfHCvkoNZ7kyAJJ2S2paNLoHcGzZ2T57tneyJGz7wf87J6MdDJnr79cdsvbJWoao9Zctfz9eyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSEu7Z6btHvn2s2xhajABotDm2d5MHknatCiP9vhiW139fzaxv3wkbJaWBqVm16zKbhLUbhK5szduZcmowqsQ17",
  "key1": "5CYpMHkoPZUscUe3Uc3TU23b1GFz2n7XdG3kJEojU5pEUQ5GSzPgZYxtjq5WL7kCdCTVV3raw4Qa2XLn2g6VTvyv",
  "key2": "39Cz89LNYZX8ydQAXtqPf7QCZGJhiS2D8UhiDn3FMJPvPrh3duTNqhs77QLmTeXxaRAN7VLSd32Bx4VU7rYDjZAJ",
  "key3": "2ax76M6Nh9qpej2c59g68NVrYvtrbYD7NVmuEvz8vvq81Vin5AoY1uuL6KzyhzBsHPF53zwyU6zeMAhafr1bPWLo",
  "key4": "iLRXTkRVi78NZNz7qT5qW4jmBwkqQsKhtftqg2skZbRBHd8ww5W8tm2ojaFdXEvwHgc7DQR44v3Zw87pGBV9yp4",
  "key5": "VCM5m93ZQiFutyR1G4viRHr73sSKfAWQU97UGgcGQthJ3B3DuxYvMKaf63Lw2Vh4soiDNXevtBC9WT6GyFWcd57",
  "key6": "5sy6kPtCcgsKobkmFfThsgKyfBgcr3Dwp5ZJmw6DcJFut9a6GguZJvTf9agLvB5VBpCFPUS1eFE3Q9JNosiERfFH",
  "key7": "5bb5R72aqHsB4n9XFeZz5cZuWyFePXTkqQBBSzwGsJjPrPX5xBLaXtZign3iRxnUvKByV44gzBdDk8A4gc5i1a3G",
  "key8": "41LQ8hrLx8nWPbAWZ4wMK8DrQUg33wH4osENW8uWgeFpJ5tf157UUKMRNsRj3S2dFqDfnSJYYkcn2ExMt3LZNhAH",
  "key9": "dfXwKWriyQYz3c8VzCR1ws5jVJTgzHbQV32qdQcM3M1SGbgvFwmyuHJK5kVgHPZxZdYQEYy8L4RigoiEbwv92Ev",
  "key10": "3CtjVghrw5ELaetxohd3XqwozxqYLJ9cCi9ra3gSFSUK8ahh25Xmku5onqonwg6T2wn9Z7gCVajFTNnRiABWDjfQ",
  "key11": "2SrppjA4Za5cm7wFNZn7CurGfi6mPttQxoHN4bVBV4tRh8M4EPhmtZnJ7SqXQKwKmxdz71PF562sUmYdwmTpEtmu",
  "key12": "4528LDxoju2ohiD2gVvBPSRjYXzP9iaerNkRQtUiSJNPGmnudrMrHDDwrmVSxmCeiNE1REAz6NLi8yB4vPeJdhVZ",
  "key13": "2y3KwshQs8kgq8DQmNf8knxbPS5JiC76zFwhmna88pDPcSXWD9kHcywYzztBRNEBS9UKE9EKSnCq967o4D9Z1oCz",
  "key14": "2uvgzNPmUazrJstHiriZFTS39MZsYKaWUHC8ptGST88wsstpJMSFUYihQSnfe3pqnPDMydQgRNup64ASiwREBmkH",
  "key15": "5dLtYj4DjzU2edeWqbXtUhqEn4AHyqeq19pZat5be9cDpStm78dXLzgBcwpaNnm6ihQ5vTb2co1xmifTECEP6VA6",
  "key16": "2c7xfrtnc4ArC5n7jncityx8WrexZtKUft7Ni9JPzTE2VpjzKETRJeusqfrHnedVqa8GyGtKrYjho5kVMJ3xtn5z",
  "key17": "677xKgQocM67PtSjCWjZDyme871vdGFggpHPFFBk8DrW8qsXCGrB9QmkcmtzJMKcrRcnfs56voHdr4Dhahsb1vAB",
  "key18": "43vKtMi7opZZG3ejDZX61fpxAuwetjPGkLtWowpBxe9CfPHuXaS7Hurkcdy2xmPjV2iykwoHF2RWYvNTpGGfJddk",
  "key19": "3jdpiDSqGpMxiQ4YLbRd69JmdVJBxjBuj4menKi6WGLeU886PiaG62r1JmNZ46gufWTnsRXHFq3U9QZ5iXW8jaYG",
  "key20": "51Tc1a5eeP6Hjtxh4mGHsHyAFKXYJMbiyFn4p4LB8ejZft49R3gYHJemvWc2pbbJ7mcDgn9jh48Ho5AEcPE4dmHM",
  "key21": "FU5pfZEsP89o8Kf1Qwx34y98mTgKY8MEMXssPKREuyU3Db7UoEPLDCfYuaJd5nrs9WLUh9J9bHffNeAraHz6sKh",
  "key22": "5z6Cjr7gifWpGYmd1Rew1EbKdMorAQ43RQ5rJ2Nb8sA7r3LgRnnw7LuNKEzHP8NZE7cHvbyveXNAsY864X8REg22",
  "key23": "66sJFtcqwSGyhcAcCtgKpmz8gsSEEd1RUNXJbppWczUsKLoi9XK6tTcVg7PA97eaJne55WoTDK7L2NTjkCm7EPcd",
  "key24": "515iakwfdnBEjpDuGvgKhKXekJpQiVEuUMFNNKMVa3ibf1biRFWdJmnXYCEQgXLc5pVyhP2zKqGvXVniTS7pbyq1",
  "key25": "3smFoArKqnJUztQTVehw3vTVjuZAki3k5Pbky46GuVotjEvetccsiDCnY6hkcS7ZfMiu4PCQ27DqdxZS9dkAMzVY"
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
