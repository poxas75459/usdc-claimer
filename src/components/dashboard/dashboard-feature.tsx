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
    "61CXTBpnYBqaeDJNaKCo1gmUZ4FkHuFk2ZP7KraS4GZSic2B4gp4JW2mKMHpBu7ggTM7e3Eb66mi1cPTN8Y13q1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFZ3F1X2Myb4GhuqSEcbrUynpL3TH3vbrc8nTkBWXyCuCBuborp9rso4p7KH4XJCsJ4MyZwsgavYWzKcxVG9n49",
  "key1": "5rmokLPKt72RowtXmzqpdkm48pgjodFagGDnw3aVgJaFaVUHTkbr7yQVCYdmAiT8pVwajZhPSmBqUbdSaYYc7Tnm",
  "key2": "5GsovsGD3CVQhgTgCqqNAM5aoKc7uN2eQhn8aRpkxmBgzV5LLkad87fa2sCBpcjy4i9YYABWyTV8Ep95sZ4VaL6g",
  "key3": "dnnah5edMbipgopvSH6z52TWAsqsP16ptFUvnFrmq3YCbE81UmFUUjMTGux6bFg23hM6J93m5w184yA2Grchbr6",
  "key4": "4zYa4bqiat6UNcJGD8SUgPyyxMaAqMAUDBoVEXPyscDgSpgsZfZB78FU9XThr1HhHwz2o3RfQaLXKaSNqcSn2CKy",
  "key5": "3oogGoXryG2YXsaLibhBn5PN1XyfUfEazqBB1TydHhMtxq1SwGbLjyDQjpWuU5BYS2wh6t7CTmwsNbR1bn2J5Lcd",
  "key6": "vKcBJQjAr5RoyKMfSefpmB32QBEWakL6nVxqqFYG2K7UqB7t4XBentSd5Moa2YW6F5kSFZHWFiMQWHJrdTAXxk5",
  "key7": "4Xz8CVkjcLj1zR6f5r3953CTkbJPUxB7jPrLUXSH5jcmo8aasbz3xFRadxJU9n7yJ9HVVpSzyy2bpV4sQDRe3ojy",
  "key8": "5m1D46HTHX7T4jdrCU39vYGJPpbq7Sqt2dcaq6SqsQxLhsKAo3gM5tmCMavrDptweZ21da5smCFvvtQy6rUBFYwH",
  "key9": "2u7Z8R6J3SKsu1PcS42Z5ZLkmbhjUgEKmT9D1n7p3eH7JViDv8q8Zu9rAs4bK1LcxfLgXrhZCndaVqSedshky5cn",
  "key10": "43LWty2YFxHYpnFn73DgRWQgmYcai2ERAR9F7j6aRscxQxnYYEBRvMU1VLAtRzHCo7eFsE8848qoKHsSh2Zk87TZ",
  "key11": "FV6KtMEeNQHotJ7ZkKw5QpMYDKbPNqXPD8hDrVMHxYptHWVmBGLTFGGK97WJh7nb5gTRYrfbtTaJet5Cn7gaZKJ",
  "key12": "4MGgaPKfCj53CHra6E8A6rH2N6CKJpyri9oivTe9qsNgAq8n5mCbceqwwqJ17Yn7yC9Z57XZd2JJ8nifkF3qiy5E",
  "key13": "PNVgxjCPTPhugKwMYWvm693zBuyDmDDdhQ1FXTFcJsXotGM5u8XBeWBEiQaPT2KmJr6HRcsAx7NCFQFc9VtYh1J",
  "key14": "2JdCaH7JwRocNu6xJ95bRVC7R8U12A5ckrUVdCKyX2siY43aep2by14qS8Yf4PaGQR2uaprMY75aP8Z8YeJt9ppJ",
  "key15": "26U97gidBYmsdmWH63NYuW5i4JuEoQCcSNNQGr4ap43T3TD3KexGn2Bvxo7jURxekBfww4rxgJArD6w1xyErSywg",
  "key16": "Pr67oL1GN3VsNpa9FrKJvdHcYuYgT4Y81MRe2gscpqGRGja1LegcrSKpiCHvkohXjvXPLKJBTtuLEUZ5qd5vJ8f",
  "key17": "LN9FBuycfGuFZXFYvd5WgBZXefFkwSHB2R7TfTocWPN8wcYe82cPeDmWrEhiytw9RvYKja1SKtNkwzLnunoaQTo",
  "key18": "57dAPSgmMWTpcYuMcvj1b6ui6yw7tSr5QQtftwqaWtcjfoVJ3aYEu8v4EYESKDqtLKdGqtieQyXRpfGa99rCgkKQ",
  "key19": "2KUQ69m7XrDSXVdNtk4aeRUCRchKBGtEJaJZGqKep1KQ5NCwucmHgZAWCj29SjR9K5ZMJLwqoRB7U2gYEjia8Urr",
  "key20": "5rAsEHSa6haeMSjj4EnCpmNudTBMvfzcJ462GcVKn4jZq2Wc3veX1DVQAX2FNsjuh2yFRnoKuu3HzDZmBP62RVdf",
  "key21": "2zyH5WUYB6hEhQU9dgv6yGNvDZs3noSUp6qtWU8DQmuzLkmEcqozKPqL6qdQiNnNGWhCZhNa7nrPfUdNwDMDVrAK",
  "key22": "5mwSDKTkajxs24YdgPEXYxdfWxjPEd6sSLQ7VBb3t6o9qQoXsS6hRx7wLmzL4Wk7LsuGGtJPnjwETxoEjBnLMRCT",
  "key23": "2wnjU3bkSXKBM3f4ZzKKssXGQceGAeZuMAkvpNjhk6hYewFu2aU8aSADR4iPbECz8i1fCwicULUfZaFDdp6GvHjo",
  "key24": "5N2XbiNNqxCrk6bhGffyLExSJq2npCDuF6GMLVhRp93V3XqRy3EwHY8VpP1sdGRgP4Ab5bGkU4hGNLTvGUhLoprn",
  "key25": "2m317LhCfvhcL6NxU51vCzj6e5a5jbBH687kkdKP7NMgfkqqD6BzCaFgk1nn9BgGaSsuCxV8YrUNPfZjsHRgD2yL",
  "key26": "5LEaxk5qTxaLbkwdsqdvm92Li5NKJXE8WQBqQ4To3tUZ7HpigLRzCrnx171CzEdTSRr4UT2YzLgNY88gJxEAW1Nd"
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
