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
    "2sxqUmHXRzTCMEwmCmuFVbpZJJMn1L2quFATY4kRwDNsFrA5r3ZBcWnvCEytcC6gF8H4GCHGnYXdSE8zkPQdFUmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAK4TqLoxoAq7FLuMqgFQWdUGvhWS4JhPLV9jsvBdZGsXTwA53CaKbRgUkmp9RFHTYAtCC5vQHob46oMk7KLf2G",
  "key1": "53vaJ33sVsyDrMt5GyALAbjjFeNGfXvSqJSE5V9f4FVxp1STxxh7bDMjVFnNGEZe92uaAB2FUV6CdXwPoEkYjxrP",
  "key2": "26yWVsynYcWtvbg1SRYrU6PN2v72tmru1K426mWtHjSNZn9eEUPAfvRhU45z2SxJ453nzDQtCN5aYHGMcBT7wJiF",
  "key3": "2WRZnKdfZVtzcSCkD5Pnt1HUcCRp2MsQ4D2BBfMZ5PBBXeSoHhQFzP6apvW3fY1ZfVWsKxsvT8H7QYmzxtLWG2yu",
  "key4": "4mVFay8ddkLWWFH1S7k6cQDHccs2MmUZFhwqY5d8zGCMJcHewqcPAyCcqN97NL6ixMqrdErRiHvjhXZD8BJ3M1HZ",
  "key5": "2M6raou598iycjmbW3qXAp65SUPQKru3uKuwctGFDtioFCKun7CNHQEatpRnRcB8ntv7a6442xzBW8soo2jEbRFJ",
  "key6": "4TNQzpEEq9Ur93ZZjQRF3tKCZmbRzYnzWsa9oXh8TZQc4WPCn5JbMWoMB83F2eX3LE4uJNVoEDEZ3vD3NcbSB45b",
  "key7": "2XPztdxmMgmpVvSUGPViCVTPExP5jVkGMBcuRFZ1fqvpMqMaRwuEZ39Qp8rNeTN5mGyXPmtrNuSSk18yFPxTo5an",
  "key8": "36KpRLEHyjQ8KETUPvmBhYQpKkArLdamhGnREgfPbxAHedjaeg4o3qj8M3dmKrD5dT3b69BN3jubHnqk2L2nNb3n",
  "key9": "3aScTM2DuXTLxzf2ozwqwdsRUsZBmuRmyhdcdLAdeE1hWLqBNHb1NxD6ZM6P1PxFQZSJE6mXvTsLKV62bgT132Th",
  "key10": "4kFmvMAWBEB3nsGYjLBBt7tcufW2164VBKuLuN4V2WHTdrtpRpWy9xhGAVb7hStBeGRQ69gWR5ftBLxknRcYHABU",
  "key11": "29ULtbpnW59B6QVGjJkXupqHkzTAsr47EuKheMccNduxWcW1H37cxb3RV16r9oaHoDa14qPyDJpAxcJ9GUMi35an",
  "key12": "4khX9gbdMFRKTRb8ABjgmENDr4DPxNLU89gRw1HWAUybJggBE3v7LtEa2zYssqecHRcHFHpqSRmuyCQ2EJB9ABPe",
  "key13": "4NtcvZPFZrbEbmmPPwfo3MazoPF9LfrAqTmqA41Ne2EF26meYm4CEy5ezZXs6aFNN7yPhfjVEiPXzPTCVS9NP6Cf",
  "key14": "61aBjgECwoCETsmVPtCBPMsKNbWAEBU3FvJSJuft5w1Mayq7XR19SYxTTFkzZxGMfQWdcfGpjJ5hqFtJekQstJgN",
  "key15": "8JyK3nmEJ98mnptwTVt1S8RCPWimjpMF2xzaiEY6rNua91eJRNbFpmvTDBf5wZw9fLQRHx5VYEFESMsv5B7kmh1",
  "key16": "3tiCZ6JU5rVfccj7m3J1xjrZ1amCqCY8qJFEe2W17E2a3UsZeq6HLcv15rDZyiyHAqk2VNaprkJGs8ZwMcRA2xtD",
  "key17": "4JPTXV7PWkamLfRb9UJ9RZGXJ3sxafcVRvPkZCpuwx6hXzXH9EXQuaicTex7WHAjfAsmrNipJMEHFQBXJyTdNNKA",
  "key18": "4zvL2DdqTeoPZPmj5amimjYguSNK3p5jnbpEW5g89yLj8RxMHdaZc2LTEB8Zkv9iZRopBM8Ev5nySLRJmwwwUsrb",
  "key19": "57KS7SaDLCsdsYzp9TSooeeWLUhCXhFdtHHqu4J2WGcaiqNJaij82iAMuEsjgSxgD8328EReR5LRzRPMj6auovrB",
  "key20": "mhSMAoe23NUJLxWfiLDfg6n94pCacd7EvYVj6LYQLAxXZ1hwd3nHjv3Z5o22Kgprkv87dK2uFxhgDP42FhUzHLm",
  "key21": "2CktHDQ5rsMbt8aUAKN9YHW3TRLhodhgg3bs3TzdyD8CkpDGxfLZ6VqA5uzoKJwGLkUzZqwGXCwY3fbcTSYNmshP",
  "key22": "6Nbqp6of1u8nbMNwHMGxvvbDVkyhncp9pkXUXURuBFuAdvaN1hhbVeRWmScoJkxv4apExThmkt3N1cpmXRVhKgy",
  "key23": "4MSVk2pE7AfoEzi6oJUXkr5eLzR5ze1ZDsUBstAsuBykysnjoZPriABSxDvqEDr2vyaMVP5MLGg7Jd36SXufrBW6",
  "key24": "39AqedSzbLHAA99WAJyPQaeprsgB3KabwQNQQLvKmEA1aiwha9EXia1XSWgUDbxF42TnMccw1Kv2uFG1znYkQeYH",
  "key25": "4JDswobeYs6dmUk63QGGnQCNL4FRYXiiqSKnWYJF3A8EL8TCfVSwWcPE7qhXvuqbxHbvJw7dnasjMaMKj3wK6SV9",
  "key26": "2yeiNAiXLRdNJbX2dpsX12JYx8vv91YZzTrbs7TWGYkktHbVDi8Anxkbd6yUFS6NfjHeuXNSrgGb8nmyA9xUE7d9"
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
