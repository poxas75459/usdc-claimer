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
    "5CF53g4YBLVv8HiWB3MQ3jfJWbGRi49pwMvkMjLhWEZuuWf2mBqCT8PcL3eYRr36Pve68FhFFKDibPKgoQUCUk51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DrF7GHPFQCGrELKdV74gCzPQfWmvAa5uECZ9ePEoSfDVzwGH2DrwgcUceJkVAPHJaThAr5aTiJT9pmkgDsRj3JC",
  "key1": "tJvH7awkmdsQAcJgVGSzW9LrY117vZXGzFV5332MbvyqLwD1wwbWqBZXgNeHbpwSkMVZofn2rzL6PAPSabWrCmb",
  "key2": "2aJ25vHbTdMMHQ6xpuBhsvnK33sn2JCPMZ6UP7RoXXt6Lf3T1eE1mrQpDUTumBhZXdf5AJqaVy3X6SQgvy6BmD7p",
  "key3": "3eeGwQTfSMnVnxJLyMfeV3rdzueW1Jqu9Xqk5ND5zwAi9y9ZrZtSCyNLdGq8AqnmpE2sqcExqoN8YTBmbhQmq52A",
  "key4": "3THHTg8CCPxFi3BfVinHM4iJY6248qqHDqpcpJoVRip17R19NLqtoFHjP71xqgikfdMMpEqJ2dXdvR7BTBLjodFd",
  "key5": "2vXakGmpo88L7DmU8ncUh16q6HGyeu7idX5x54ETcNW1eXkimcvWdCjDEJG5oxyh3TQLQw4tYZZG5Hbob42dJb6p",
  "key6": "4ARvwX8QW473fLK1M7DMeVE9vsXpon2YSEM8WfZhP3micfmLEGmNmUuqMzk2WCa1PRW7cdpcYa1k1feS8nCyrpTE",
  "key7": "d4ue77LAivJ1AGxw5KyAdfXztKFtnKdokryPKwsPoCFksENRyLS2BENRUrW5wf5FFgutsQcmwkxd7AtGACew9Ff",
  "key8": "3TPgcTrVujHRkfnFjNry612Mofz7AF729Ff5B2ZVrikeYBCKGY4FtQo9wXRqj3by74LR6rY4N1J6KanHrZFEUWU3",
  "key9": "3ogaZQsrVAZiU4s6gMP9AXr4Av1hDASPjTmUhSCRwUBXLCzd2fE5NucTwec6cpeezs7TMZdwwdyKM2LHzjemk89t",
  "key10": "3GJuF9zkcbcK3eni5icpDDUYUpTDCvd2XzeXHEFaBzsbzAxeuwH1i8s81PktXNQU4NbgDNoZMTF5hnQ5sJgX56jF",
  "key11": "2DfxrJAennfNYyT5862RzPTdUSQUxo88vbr7VuZ1wRngygnULokpNR3juPrDy3732wcX9iTL961gU3SSB8joJeXb",
  "key12": "4h5U1i8RqvNX2fGt2CRstL4bfTnVxFeoqtcBJiX7HW1c1LfRzJF2ivLZLwyrioZoRPQ13k6MJMxAAaPsy56rBhFK",
  "key13": "5kvsGFgMXApYosNcyfas25JUaDkPN1TrV9b8Kqdb3fKzAssLhBZaKiUAc73so2QQMTdfruzY1zMgTLk213EVtmob",
  "key14": "Aw9nz1cC2BazwY3rHWg4i2mAgXMbyA8nz3HyRfCmFNfuBXUW4kUcnjU6hAg3RPU9vuFRCpx2JDBWvw8q56CqLUp",
  "key15": "2Y8AH1TY55DnDrradaE2qxzk5gQ51pSESsSPmX2JDq7bWJd8LcfRRQqarMo2kDHmKPDQEW3gvKyUAeAFqyDQss9p",
  "key16": "4P81ruXo4ZjCNUUxeK6i3R7zqSikL4QpBuAFnV6GvZ8rb4PPyD1RyjhtRMF7Kn96KDyjvLNYDRSbt1DLGVofTrm3",
  "key17": "21gAUHo21hoVq7t6hMy1AkYACsiLFQg1LgXFF2NBRXHTeSzd5DEDDbH8EEMTqFTBo6SnnXvWf6MpB5SPEWHURdeT",
  "key18": "2fTk62K2k8V8v8vHNT13uCJ5qUVSYf6tz6qYQubCh3uXetFrT8RZSNF8Acuj5iT35XRYM1JS7Rh3cBcRbn8LndoE",
  "key19": "sTz5npfNizPGLcv3zUBXwcF6ffoYiC18GmGoKZymFignph6rJNeV1WsbczF1dGDSLb5s4y9crgBcgkA1YbSyVzz",
  "key20": "3V61m7BRc4NwgucY1yqHPjZdrLstZWQdpqEdVBoWSPXWpbJf8KPoyGTmRSVLWa3zUL7rAzSVsLqatD6kkTxgtSCQ",
  "key21": "c7Zi45qUXNZapTPpUuL4s153cWkxyVMS4Cdinqzjn4vvcN8ec3PECVnoBrXmwoZ9VJkE1hS5qnBeNU1vpiGCNWE",
  "key22": "5RNNPp9Ds9SUsxiCMW5FGfhWouiKEq4zMd36jERQjNNmpD2s1Sf6gg4NpjxcoUjjrKd2nDtB5ZcWbMLTkcnrC6hV",
  "key23": "4bF45p9EiKgias6sv6Co4m4KPxtBD7Kn3VsLTAnhUchkKjZRwzGB844FAFUXECH2cfzLAJq64ZmZG3xQ6LRhNwdH",
  "key24": "4nmbKHrt8WEW28yMqUwcK533vMLJXt317CAjZFxFz66CNLhfYrGXwEQWst19rYxcGVS5A9CVsDCCL6onZh74NBXH",
  "key25": "2jHKgi51YmBukyDf4NpDRMaQCmgBLcqZ25MX5ngd2B3UXUEwkmHxuDjAjGgPibeERFctzfpEc2THBLKr6nsDbbRa",
  "key26": "2W5B5z7bx4SkQfyqDTud1Uv5KPKFipfCyDAgfAQxBSKrv1MMMCNMaLY2tsw7oGbs5XiL9K9Vd8kvZkj6nC6Z9pis",
  "key27": "39AgSWkBUmy3x3KQoA42T7J6dbkqoPD3edDQheNS8dS2bC9at48CNbw7SzmpbHF94WD52wtbmKHUgfgkfaAjzcZk",
  "key28": "qnZQ9nDAnKgyvmsvs3dDfcKi8nNam1d1psYmxNL7gnyV5nt4t5PEfPJfMtQotCe5jsy1ZhycRW1wdqvy5c1QAn9",
  "key29": "3bzyYJRxQ9P3SqPfR5ajP1HgdtiUzWbKfKYVbnEEbJPgLKMLouigPKZdmxcyMjdq35yZfVVUEfT19NXf19YDG6p9",
  "key30": "3bCfkQ8AEkKtbEYPaXEL6KdeqVhkJWiZBhtr1Njepzxx4WDiufB8XnHKnduj23ggX4HHWFiRT6TMqQZ86qXsPDgz",
  "key31": "2UB467NCestyDUDHvQymrMVqRnnVcYPSMCJSTtZrH5pqUtsLHyYbKVGxpDxhivh8VRTF3AfirZH5ktgsKtKisH6Z"
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
