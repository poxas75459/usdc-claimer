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
    "3sRRyQQLYjgXbsxuj8eVeFTJkYLAD4bxg6K5zCygmaD3knmNBDmawsqmwGJKLuaPxtNudPQnZZhP7AXQR491zaV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ri89fpknaLUkK2aqpXNRUhf6fsJ75vmC3DtT1yKE6zPyGSiHqgAG1it3LqFgNed5rqdpuoRu9ek2v6KLUrp8UWK",
  "key1": "2sZa2QnBLk2rMmxQWy5rJYt3NjACZmsLeJbUa9m4qE2MzdLwXhkrBDMtHdGnT73QjjrgseaFZWmZT6Vexh66c1Xa",
  "key2": "38AKvR9qMnKRkkEmirCzBysALYeePE5g59cKNPuskX5xaz1fzL1VooQXJyLs29AiyxZAzHsuz38UmQQWqFfnn4Jq",
  "key3": "2cKf4k35nUQ9175ffSp4Bgr182zv7cYss1srj1WENGYDTEHyrsHTTGgwQAMfaTXLF2gFoUgXU2wgALaMZwPgksF3",
  "key4": "SkSfw38MkfgeqocGTjj4Kmjwq8LZZ6Z2pWNKgKYy9WGwTcGfYP8FwYoy5TkpiS88Fi8iJY6atJHVxkmwDJpb11z",
  "key5": "3YMC9up3j67Ysa2FLn4KKM9LkKruxVQfYLZWU8Z83MUu3PFnBwTMQixtLcT8AB9buiPMja48LZTQG1JVENtGRTb8",
  "key6": "2cuircb6Mbgw8DUe5uiuntmqpDCytJJWi5uUYthiYYp4n8NZtgFBNgdif2Z3kHL1FgmQ2UQ3xoxDkyKr43vaXVtS",
  "key7": "4V4oHVtP4rVry4GDGqsam7Tf4NjPT2w1Me8NykJvJM7adXWLf47RtGikXoDoqM6vUJJXds4Ded23SLmtyfA2wMAv",
  "key8": "65tBNqzXgKJokos52bf8uMb2jownf8gUTYCYenmtEZdink2JZRqPdGeVyopAdkuXxcgeeADjuRwPTY3DD7DxHtL7",
  "key9": "5XMT7RzVx94vUFPQMTUXKQHuN4MUL3z7jneWf1d6yU2CzbMHU9ssTdoqinA9qxHuwdNedyaQ2fsfag7r42s3KFuP",
  "key10": "2pvMPNFR8ypwbTBTRtq9bM44MYVwocnhqAc75RtjBxqssDsT2kwrergHxLeF3aPWhYGZKBfZ7DAURbEdtkbLShZp",
  "key11": "H6bMA2sNtPmYKfV8LthKYa6x2yrqYq7s1TnAc6wLmmS1f3yQ4jfVHMj9ed2bpyB5yFH55vuSy1VDQMACHazExND",
  "key12": "3Sz9X3GE59srXQj2i4Jxhaw8WP6idN5ZmcZikpDrBYk4Y3drAyF7P6HmZyvuzct7nETENeZPYCjZcyqjj9TU7u2T",
  "key13": "4FG3G3nPpQTVjaCvfRREugNNR1V3TgCk8QEDDUkg9YtQjML9UCCdjySTGho82rWdotbHiZ66A4ubs4Kk8sp1FWXa",
  "key14": "4yGA5SWbrAdaAXXk1mQNf9vG3uKp2dSKGpX4Y87KQEjBvrCRd5ZAbYQtD7TUbbs9dVWyXijoH8qxdzCqA7nWCQxr",
  "key15": "5Lq332RdSthvBLztik9AyYQK8hWHanRNEaasJou2qqdhhpdANcpCqNGQT7Yw9YArphowmjkFSsoy99TLBKhb9j8j",
  "key16": "2thyucJKpzRLGB4XZhahnZgBc9t1TjQnQyAkVpaQzdNsEbPM5HovHxHM8XVMLB6pgvCzoVMjcPrCFPf5jfX7WHHf",
  "key17": "nHWAY1iyBm28sSNcTSjPiC3UbCk7Anju1ZVB5bTMeedvm4ot2ZrSFNkWBtVdvvEadh3SJ8oS1ZSVRABzd4yPsY7",
  "key18": "3uRrrwA4gkuXHH3fij16ZtyuPCXhFnCHpTHVo3GW9VAy1879f4Wizcx1u2n7SngHRmfHC4pGNSMoHVfLpdPMMWR5",
  "key19": "4WMzGd2A2ktec1UFkA3Yw95N7x6uV8MNC6aVSa74myzzcvvVxHT5YLNxerVU92BaZLqBEfn1fCY6Rn4BFkjPBrQk",
  "key20": "DqAFAghXpWcaQSVTAyXaM8hEzY9Kb6b4fEQxNN9JHQFzbTqBD16jnhrgfm8hhmoiH2osdwDErDVL6JUjzLPB5PX",
  "key21": "5rnQRGF5GQzB31NsDKrjtiJh2yM6NKu42JforJtWWiEPHVW2tFGJeBrNr4uMb69Hh8vf5GrfbnCDT3po1a244WtE",
  "key22": "2CiS16A2ctw6FCoChdyzkec5TYvioToBcj4rsuAygpmh4zJXwTZaJtbJxyYU1P7dbcvGqJZc9aF1gwVUpPB6wcLR",
  "key23": "Xmbrnbt1Br8hVcJHpgdkcWhzN6YVdFieJM8vh5WjJX97KtmCSAt3b5StSZjfYHQpzBdRmeR3mikVSMxpno2AwPX",
  "key24": "3wfyhC8KSJ1VsZKj5HP8jhs4u1YLzs7wXqFwEoFd4w2wPsP4jYk1n5zvhTELu9zT4e8z9KQPcddmHrdhBKivuZin"
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
