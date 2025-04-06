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
    "2MYFSj5Gybv277QKBceRhrz34n7hQ9jUNueSFNSPyha7j8io7D8DHpXhzdEmVfGKiDm4YGAzDpwe93F69AN6z8WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWsfrqCpyf7QCgDGCZ6UKfzf5njTtSUToHJpcstzsGQWBjvh3yJwvCf89XfVgHDd54gjn18kthNPz1NvPKjzuf5",
  "key1": "5RFMDeyQxwJVaREvL83kqPVXZH2Jzew47nvgbj1suVFkV45LTid3Bpm8hRNFdm8YnBWeE8H1RdZKcJjEHi22KG8o",
  "key2": "651pmXXvdgBz3PKbMFxYapFpBM1egVB5rTki3avsFirJi2ZgmsBaTG45U2YuAWqhSKH4hLJhRdqp7EwXA29kPk88",
  "key3": "3CG7fSdA8qx9ckCiqwCMt7CQUj8SWHTnJrDfH8ZsvM1E2vFHNHHr8eZwSUN8wLQcvikpybgkZC82YGfeMJ8mZQwL",
  "key4": "5kWrgyEL2o8s4jdYDkjiFQABUubnKSpbYHXw7taV3yix9mF5aT3eCnFJjvBaFvjeTtr5kEaQUnS5tkksESTCQiQs",
  "key5": "2kiXqXeSSRBfARWLPYaHdFBeCvYPX8DbUwmbyq2FthxwWuMCTXmLcW6euFwYP3Pq5nwxGwjsKV5pqGFYAq3kzqhE",
  "key6": "3eJkyEHGXCZ345dHk4hNJtBy6vK58JFLANTiJyjcRZ31xX93Tt9er9oMeWVshQAEUTBMfWU4xtBXSLhbMPughcHT",
  "key7": "2cfcEL3g5bBF6hNt41GKZFSW3rSJt9HMz6TjEbx12ih9R6NTS7pg3v8fdBQMTfRVTDRuB8DLESLPuTpc8ADiTBNP",
  "key8": "4bFPsUVRZXNZu2BNrJD5nxnNgYZZUooBpuMNsuXdNUpoyJtYe3Xs99AmTC7AC7GE7WLZY4LSSPwtNLbq3QwjRoo6",
  "key9": "3WVH6hHaEH3wHwxmKFghzcfcE6pWMb1Y8o9LFqqHiEcu48dbRUASc4XoyvXtnmSQoaU985PEf6HL1qSvPEDgjFsV",
  "key10": "2m6UQQRrMo2AoN8HBKZPyC9dnmNQcavQphj4y1E21qXxUF939EBiHbRGnecsqBpaUrvRZTRyvxt1YYZ8JqYjszhD",
  "key11": "2KQjQaw8UpiirJyqWf4YxgcDMP84ivpq5nSDSU7bS1bG182zGntRhAKPpxoGXP8CXR4UmQj877j3NdSFPUq1LuR5",
  "key12": "5CSQiqEafxEzxkiRFqnYwhbGscmNLuceirmUGq2HH7ZhaugC6AqzWUxBhR9a7SU7GRCCo52imy4hFQxsUYVDCqr8",
  "key13": "2u89EgwZSScZbeNvP5WgKMfgKqXN118uuxU33Sfro4a4QC9fRjnoq4oc1syhEzgrwskCmJLq1BQV1ueTmwxapWT",
  "key14": "prFBfWPWnLEFVjp2ikfQcQaARKdsxpsA1vqfzsocZUxuz9eCKQk2BM9PVRjViRyvcswjqMJyEqhxZYLrg2DEW2y",
  "key15": "3e97bVxVofbBJe9Non4fcju3eE8HyMBpU4eRQfXcUWGJhf15msxDKxUpWYx6Sytzna8Nxa63Hcs6yMmDfHVnHy6F",
  "key16": "JAAxR5y8eeouLAk2JwGA7kAsVJ35mKnw3kKosEbsdpWKkm7WUVm75iXe1YuwMKyySaEdNCcuCwDKe74JGGx4GFs",
  "key17": "3sTSQ6JCHfNsPkYCYZqwtkSMW79K7xBpi5WXoXVhoysvBbAujAQGwMhtndxqTtY3knBrc52i9NS2JrWMHuSEDjYe",
  "key18": "3C4ersLbDyU5LuGznLkPBZCs3CNF9VRua847Azr6BaBL2DXGi3xdPrfjYoQ5ZyeNBW4vQMSSusfHpk3vMF9hpUev",
  "key19": "4USyNCBs9C2Ky9M5z9GjN5cmPUerKfArG2zahmzPJ69iqCk4m3Th4xJgPXMj3e4gNPwQQoR9q8nCCVBPLRzomeio",
  "key20": "5q2pH9DBYtCSTDhdKJtw56LgcbvBrFy2UEcALcwddrzG7zUEjSuvWsuMJbVqgpPv5ieFq7NzkVSxXKneabGWkpwb",
  "key21": "4iYgw35UgzN6xsYxNJEPPpgLnXUNBT1PsmMS9khU3L8PSiUK2PHyBZV4Xa3VHoYcdW7bN4NVgsypjKEoKck79bBm",
  "key22": "5mRdwTNYn9iDwMZJW2SJosN37zqt632oCAe8MVfFpEynYfP9qpDCdMdfMQFf1Tq3t4ERLWizBAocW66J7zTcQeCf",
  "key23": "4cPNwuTHAjBdkoW3oib7z3F1CBPHnTdfvYAAXDrJ1K28pXi4xa57471pNkztYp8nrEayTXkUXmtBsgaeMTy4Jzge",
  "key24": "4q3ra89mfwCWdJZjPYtUEu7MA99svrKU86rtkfj4Fsc8m3rsnraQ4DYoSNZJrr3UZZPDNMCvnBgkLCwR26zsoeMK",
  "key25": "4kBtiggS2bbmNZtjzuYFSZGqpeDkoQEWVonqjGNNtQ9b3begL5AQDGpPLsDwwEWCufw5821VHJy15SEado4JmVRh",
  "key26": "4iPGVT4viSzzJdv8d8hi7omw2FHQTxbFc158gEdackNypTCToR1eEh41X4ax393wua4KtSKUiVpZr3cJAAa9YnA9",
  "key27": "34LB7kj8J51V86DJUJYks8pUGTCwN9dRKk67ok6CtT1W5LbJ1Zs5QPncypuW63zM1FD5iYFwEAaHX8VTAWWyTMgv",
  "key28": "2Fh22fUvjvKQSm7hBf7L7Pybtt3yP2wHYuBXQFGtzevmwYkXb1tB4LnCJvZtXm7N1HFrpfXJyBUDJtZG8iYdmhRC",
  "key29": "3UbVt952TVPdT21rMmLj9kgEFYoYyLBQDnyuXFMRfKB1ECHoNhrwh3Xyi84q8X3jB4xjtAMYMW5dseLS1Zs7M3DW"
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
