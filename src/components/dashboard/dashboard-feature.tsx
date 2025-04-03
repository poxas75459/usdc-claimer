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
    "zEkPM65SS23dR1wY3A1NTUef9DRYSrRFG3a6A7FDHqU8LJ98gy17ABbBtCi6GCgvhb2RRj8S9szy6YKWk7J9LVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DHg3NHb1UYssj3ESVWczGtaMGBg6g34gmtatf6dNjCRjUz41MRdmHt9JVHVuejtYognUBMghTLjEgSbVDUbjuFP",
  "key1": "46nzVMa3GcWZQaa3xw775vcmZtx3WbtTDkKPGdVZTagtLzckoZx1tcz3fn2EskFx48ZvXwAjAD8nYNit37b82eWf",
  "key2": "5U7LsvqPHedwTeEjArkrLV5Mq8ctpXMzBC7uJMeAA65NtiSYuUMtSbB6b818YL7PftJGkx3j2mGmApmWNgy77q51",
  "key3": "3e6u91b8nWq5JGtEMgHSGeQx3DmfxmkhyJjRoR4HvvCHkb5VwKWhyrZjZ6mr7DJyDKK1vLLafC2EuY8FtPWXGXtP",
  "key4": "3uskPSzZW8phFxoCKcNhZbrkEkMPnLyufbnhcLBeQL7FcEswGwX32bs6jL9iq7xU85nyHYoWC1MnnNo79ufPGtMP",
  "key5": "z6DjH6RzdrMSXVuBa3xNxZ673RNscHyUUDeanwQ4Y7Bd7Q8FNcAvACFBBdqD9aYLm1C277LebK1TSXERyAvMgax",
  "key6": "2okg1QsKW3ri9KpRVvmXU6ZDTGyq8otgh6hunLUeX6vpdLSKHCjZgNhCWtvcphWfgbAvavYczkYhDoRX1PsfVt4G",
  "key7": "oyfsy7nt713qEc5WV6gBBDDQMvEzMuV9sMfNgyZTszn9SWMD3fwrysA8pc3KiLuRbNFiBn1cAdMqqSRjwhT9dC4",
  "key8": "d7JAYZbrWkB1zPpd2uW2kzkPdoxck6kZN58FxVnu2NTNk2AzKVo1ujUQ8HXvhzXMvMBtKjdQCnDNc6Tiu1BDcji",
  "key9": "3MoMPxtQFafRXzQVsiRJRf3RVqMujmMv6x3wPco3SqUKeSp49PateFjirYLtax5pwCFrPL1PLWZKPGZFCHfB25ks",
  "key10": "5ZTV51fCbHWvxoVs7gn2rat1x2nXbnS86yfmDcjFstUg2ezhpq7LLfwvU4mdUny7Q7x7cYE2efWUKoq1K6RmYong",
  "key11": "4iVJRNZM3LctFnksnn3ZmvfZsxmzJos3xhvc6sqAck4GMMhkYnXpFVWN9TtEJkn9KZStuo56v8m2RqGWnWR2WjRt",
  "key12": "48MqjNnC3h1zxU1neVkoUnuH2M1Zy4xVeNKqHZWKjVjYkb7EnoaaELV6YcdxtjTAdQF9WaANgNthpQB2YKbqwoK3",
  "key13": "u1noAYBqmCb9AVQjZGqSC2EE4aQHYU9egBhKByw1NyDFAivm2oDZtxAbkqmQGEGJEti8kMNkVvESE9HVaRBnuqu",
  "key14": "2CThSUimD7CjXxvmt9Py4mXWQ8QV7uXdSaLBoiau833MDqtboi2mJEYb7zjgj5rjRX8vvXW4omAfEms5syf2VWFi",
  "key15": "5ivLVyoc1WzhgFbfTZydExH7mLjJGEfpru9dXtDjyjXzpoKzZ9zQ3xBJrpJJyrWpbdG6BsLN1zwtYu13VQWaXdSC",
  "key16": "2eJvSMJZmnw77KCVnNVRXLgbirEg9SAe6WaJ25qm1MFhnvYYkXDaz8AoJbNC91WZ9BJ77F7PFazxvcaMfehP465n",
  "key17": "5KNN8FAEsMGGQqwfQcSS86akDhoXVzUZUJeu5APFwqSuwfp6eK5dZuYDxjvG7uAA7Bp6jUKuCKZCp4x671gVjsmo",
  "key18": "5kijqTnawZXrbfdYaAYR9epdanFBXTiGEmHRZcZVMLniMA6TZqiura9wk8evEc14B3f5qB5PAkschnv23o9Lx3HM",
  "key19": "3SqFTzdWMFXxiyBWPDiKeQGMM1EEdq5aEADrxrKUKFT6csa3sg5EbTWLRECQ1rCYBXstydcv86RJLwepX1Qm3e2f",
  "key20": "479Hgz8h2VCCh1HfdZRvrVTU4upAE3ZVSkAQxtGgh34zSPhgAUk9GCQPJxXWEdiZwwHR12PpKj5zhDd6zHkcHzdR",
  "key21": "4dDcmcgbcpDrjAXq7SCcNo8sWWnVbqxHoWSscKxv43YLcUWjBAudMMSkULYYmxKSXcXYka1rQ7MDsUniqp4QjjyY",
  "key22": "RrjSetLetqJ1FcciEDNwHBiuAMjDFW7nrgHxcWBA9V5rPxJjRfNgzvfuG4i3w2oMuGoXeYvvxRA82b7LJPb9qSb",
  "key23": "4gwWQ6VivScjaMCFvazGqQsycihyjkw7zYpykXm9713eWZaBKFkCfo9z7VovfwqAkSow3BvM7doJFAmqrTxrTJdm",
  "key24": "2h6NWL1S2d1Hy6Y6BKy6CuQCsFj9zxdB8Cyd3yBHs3v5GfrBKFJ219TAV8U2SDpJvnHzJo93i4kJGMR7d95nAuBX",
  "key25": "3LShe3u1nt1RDn2Rh7t56akqzzNttVs3yWiwAE1sPxmiHhy3QtE8d3jijuoCmq4rN6t9urDoTKbP3yL5rcx2VAiC",
  "key26": "5N6p3TRvb6BCVNDqNe9Uv23wtJxeNmSCMXK9MhFwLuHP1tmALNjqt8wyHd3XnU7676UW1At854gpuEPyEiqQAHPr",
  "key27": "5PuYK2ZroUmDgumwbKTe1SxkyCTTHmJKTmXVBTKHk7np5aX65v9bQEG99ZqgwAbhzGjkauzSNQcfN6waKwryYykC"
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
