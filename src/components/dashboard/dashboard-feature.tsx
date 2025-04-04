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
    "5qiGPujkywGA7Ajy8JXQfCPvx8eVnmB5WeU2eYfM44TAWs5SpEck11vb5iRAbvgJ7zV4Zv4hxna315jUwBviL8Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41EJvBu7ojjC7wKTC1bwJZynGZsszRpK9osA1Cq17QSJRGgxPGWb4VG9aVhrAnTKco1ACwmuxLS5aEJeDRUmdkLq",
  "key1": "nMg5vEzQkxcZpdMntPJxbk6YkgfdsMtX4VoJixjEmLd9wMuqpdGw6FAQi78b5mmaB3bWzYGnqSqTBaR1ajquttG",
  "key2": "3BqPzUCu1m51G7soeYEaFGRJeN1Ln9ajz6pmJnu7SsV8esWLujKfVndnamogNTSdG9jFNEfGsJbBTwHV3sAQZtdT",
  "key3": "61NxkTtWGrNAX6VhVRzYk9q6MtEDE8kQb4nUcRXEwvSTYhD33Bpfu3JVQF9pnyJQZaAQ3UsV1g1D4iH8MYgncK7F",
  "key4": "4qsPH37Dith5h9u1C6mESkL2eXBK51N5gbzvvr6SJqSmQutLLAaMACCoabVJqR9UCfN4Qj3eTpQ3DWKNzyi6XBPr",
  "key5": "5YuLQFaNa6FubKhVRYkCGFvp3yhgoywNDWJ94NLbgzsfRBhUA8ytSqBt6jsU3N2uVNRzfwHYC4kXAJNnyvg7SpFH",
  "key6": "3E7NY9zDq9oL7cstJ7XnkrC6qsxjFkS44adF23tEYwGtfnbSVqA4w5YPtVPrmFU39ywvpbAGQoUb9uHNfJScDLcA",
  "key7": "61haVzLiquppKMkK3thv2g4sDauKPCX9cpsLdfySA6MqsuBv6kK9qRGYJmH8cJUMU7SC8M2szoPdYAAZU3sVpXLR",
  "key8": "55MbibCBxBdRXVJkfG1bG9WMaSj8TzUeFkknzxoy3pgjaorywQwQrXSZoXZ6yNymKy9LrAv56Q9Zbhg6zv9rxiS",
  "key9": "5ut1zUF8espPhSNDZDUpZ2UYZR3J2WCtEmLeXWqdUrHW53iMJyHg5gmPMbc6LLDTSds1LkC8m1z7raDKBzLJAhch",
  "key10": "28KwmTVPvc58nAomM5danVoiJe51ioZEWw19KmkEhT5QXBqFUAyUvM3mEC9HP3EaAWpJQDHgmZwMXZXEfsjN1Vzq",
  "key11": "4g5waNoZzngAbfv2bqq3wSjMALmaWNNX3pPmvNsCuQC2asbGaNNWqTh4MHesfnEsSjnRof7UmnpcaFvoktnwW5Wk",
  "key12": "3DDQfryKSfP1wLfyfxDKcx2wn9bNAZ39FutHPWcnpKQz3eh3VUgu3ub45ezFNPQq4ytvGCG1kiMo5nSSPta76jjS",
  "key13": "tZu6RKKmtNt9yQcnTTcEptJ5bufUR61pcmawyuWroU4QaHBtu4o17e2JHkf5cXfo7s8EVC72CPdhY6QYJ3osfDK",
  "key14": "52LuFHrnGDanQbHApRfyYUi4hKjCZvVzUYrAQocbJJTctkxRVdciiFu16E61f8RmfnvGhNbDcL5V5ADqfaqb4Pbu",
  "key15": "K9hMgA65SexvnTLNVrnURAywySGYNMT5NiFgu45ijwkySVnqDvC1Pw6peJgqpD5pYcSG9Y9irxpmXMLeroUVn2g",
  "key16": "4wLU5VG41hHzYvGRtm89yKRQ9uyQuHF9ZWVBtHGJqDewtXJSdMN9hR2qp8Q2L9wntkzRwHttJf1UBBQr3GcyS1Vo",
  "key17": "54s6oEwWCNDTktDrYNsM4xfKF9VaTjmiKDeev1X6HGueKwYKUX5sz71k2v6G4yXZZfRSxFDpif6muUw529Q8jCgB",
  "key18": "4v5dBb6ybUQVPrPzF8cWXRJ2RP9b5oPCHz8mtLwwhDWgPHQQr8QNTgHrTidjvWwSibZg1qqTWdnXRLWDfADvu6VW",
  "key19": "3sGHdyp5mApD5Un45MHrHtcMTLpDL6qJBmz5pH3yLBGNhdyqyJ7JsHVcEZ9LvrrxUBmHKFmGbV37EVBnP1xUaiM4",
  "key20": "5TcKoPARvgG2qEFHnXruHVNCwxXV1yudGuAJASFgUEewR5A7XLiMxuwNQQL5nKguRDWbYvkAx2JmhmB4dbatvXgc",
  "key21": "545Bg1xwCkDMx9tQkLc2UtPetQWj59e5JhfKiqUPJpEJ2FZR2nnLHTi7fYA1fnwWYhh6sSYBu3KP5QHxmYKwmaS6",
  "key22": "4qQgtjvx2J289p38x5GsEjApZm2PfVGEn9tw1VaJ8pwqJg5116XrY7qrnWrQJnzrNW2SU7KpGjgnFvVvNbR62DAY",
  "key23": "4Z5yQVU8i4vdX5scqe9VQhwCm63kJorgg3doEYfi3tSyynvoDouwmMRhp7LCMgrBfXALwj679Y5sfeaJXUYXqpU7",
  "key24": "i36xubxmtdiJfXcx94seMJGvyBxR8hoksyx4JzMDZ54GqpycsbutZaARrrNaqo5Hpqt8SXiWrqqkoJNKnaHntMd"
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
