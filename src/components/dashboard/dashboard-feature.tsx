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
    "4zLTgqT6cZNMDYrt1Y8a7kVAZC6nNtUdQV89wtSBKb1uphmdjsgRnLt1U2jGamA67mnHcCoAv56enHREGRMuTSY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaMZoMyLcbmuMUixZNNEJhi91rfmtonccqzGXjZd1X87uRJdS2ePgvLG9tuQqvv9KAxiDuX18RJQDcuAMtKpxZb",
  "key1": "21j7uV2b132vPHdPLCMgKgGfzKpoGxHGzBdDKGCsktSYGNuCgjSMBAyKqgvXnoTDyU6E3ZSAwtyVPLdpHYAM59M1",
  "key2": "3cz5UQrnsRrwAnvjoYMApBWPMA86ogUisw7rPQUUP8ieTDHtAK5Q632pfRPjWvq3jdiQgJhygrYAVjNdhh3ACPHG",
  "key3": "2zMR8CFcSPCWyLyFabiPRqiWckMwTS7QuWJnPDy2FnQoqSrDaxbwgKErTjT2KyE9FWRXtt94HWVn9pyP6cBdan93",
  "key4": "37JXNXjrg8s8YgZdcfAsrLKZRNB15xWuTHXmHNUxpL3GFz2kxBKztU5KBiLH2veaoTfdD6zcPZCLmhsE6QDKk7Zo",
  "key5": "29AURcbdPp2MhLwWuwx1WxkadWxgqbt1hsoG716LqFpUoy7Yo97tP7W71buR98AeENTyqDxQzysknuj5FJKTfPr1",
  "key6": "2LwLDCzbc9EfSGsab3mEg6oKdVtn5nsix5jLunn67ugfGD87rCEUHBYNAJWuJx1yENhhs8os6HrdX1EiD2tTMsj9",
  "key7": "p7DxunbuUtmzknssWUe3LEQaSuhxysnnCDFaN4ydzkdLU3mKi4uuMfTqqVEVXFChv4DGRjE3iLbr3LnSYftxedn",
  "key8": "2Wqft4WVSgavNTQSYSEZHp9cUSDGbmc1P8ChvuCwb1rQbGubRda4ymwoMYb1ZvLnUHjQHNcZckq8a9ZRwaDm1cmC",
  "key9": "Co1tw4Mp6j5BqEoQSdmDdVF8eaTjt5gDkwRu9EK56ZG7cCgXDVFBsKcWkGoLRXunRCL2oE5ZwPZfEzfmjH11ujL",
  "key10": "J9eg1CTcXdWPLK8v5pnSFkS4gK9JY9ihKX8wf7timn3dWzXGUj6rkyw1Ycm99xZejwRPfcBRkqUASkozxFtMUsC",
  "key11": "5TCu2Xo7Z8uvwtzCYnR59UEr6Nw535b9TSjUfsBgM5KWnQQeuAw12xpkw2FzUVuo2w9qu6im27dM52uH6gghgQTu",
  "key12": "3wJkevDatTmpqmNff3qHQ4fUQi7NeRXzofdZ8EHj5EceHSEncymWuaVDnimou2HR9bFRRkbMRM5vDCoUMkG578tp",
  "key13": "4F1TaNdc2FgncEvpP61J4cnFRGt6BWMjz4E2HfXPAXaCiG6QEQA8qHoE9i72qL8jFVfQvYJfEmuWAWtcnZ91kytk",
  "key14": "31La5MGqocXJkrnsBVPdhR6kUCTbzmxeP2XX2Mo3P7mAcC3ffqS4hupDDMPpq1TnMjT4ChB1Pf7hTJEEySiiBSoX",
  "key15": "64zGgbdvKMz4NSnCVEuHk4SACVxbd31FqsDrTkgdKrL3vgBuoVz2gMVF7YsNkWvP4gWbowSLSnj5hmF8mFB3gUNS",
  "key16": "vPek1f7zWbw1p1sPS8UoCUWfeAVYfRzwDj9W3UJHdguVsDjoCu6CMytEW1ndPVHxQYa8itxJDVjSWYpEcEMyeit",
  "key17": "gnNpx9oFehmdHmimYt5YyLrFbuNkZcACppWbpMz3PwpmXEJqPKAK9cxYtKsmrDtn3erXZpysuA5Z6uawWgFMM3K",
  "key18": "5hbFDVhG8oy49UtGBbsQ3Es5oKjkBRDgRkiGwprKgHF1ZudksacrRb9Q2abaASgSpxMQ5SAcXvJrGcDVCLxziCLu",
  "key19": "53bHm1wSETtGiRfk9jC2bTxKmDwdYCnCeSoqjCLCXvZVcqRe1nMUKeUqRzhmhE7jyEKmKF3FzZWvdXpw5ehwbLog",
  "key20": "2A9hfok5nNtTBmmHg2W4UaZx3Tck5PeJxhBhSak4opbZm4Z4HJzKja34yTn5nVGTaEnsgn92sAh5bRD4wiqtdCSb",
  "key21": "4d8B3USUTPwrctn9z5TbJ1qtgGAMfaHFBHA6dpUTatTWYyrmqcS44WhKoHgh3zBRmv1sPpw5CTHfZTXpgkGfgs9N",
  "key22": "5rXPJPxmz9xXLEAaAVcWTGrnSui9TqHpEYS6yjbdzmnnGmQFJDtjXtBEcBHxvTrohdThyhWvfeXBiNvhLvceNPCK",
  "key23": "3ZQNmmFKHvFe7qgvjMdNjAcDbg8XKh7USAaMi8xNJzro5xqAHcBm3Hhh2iDyFifqdVcDvy4Te7AP97j4orDDjr2n",
  "key24": "pWQMRcv1CgbYWcRXwGjnrJLGHBCypR8xhoeKoEkrZrJeC6bHaLRaeQdiGajf5WkcHELPB1qUuNdi5DhRxV4ZvnP",
  "key25": "2xECsMTgwWb65SphayLH7Bz7BmuLyT7R1tAvJr3HpkCU15qQvaLK9djqkPHj949uP8HAxfEZq9wi4WH3pnVMwUhk",
  "key26": "3WBDQQyv9SJRyBEcRvfC3iTzdkgVsYWmTUDjCFSBohf9asLvsGgPqkBzc8H774P6inBxuDCF7rFxswtSUyBrE1eJ",
  "key27": "5EfzXNo38kMvvS5eSdKN2a8yrqFk6TDp3XHYQgn4edZdFUtMQhqWnqcQ332mbQEZockX7gHpXhzYQtAcBXihYefV",
  "key28": "cWiLJxVCf76L53To4RmRsz4uACSCpzA7Gc8xkeYXuX48SUAqYwTVYzphoFG1C3E2h6GgTt2HgL2svZuZ7HLZag5",
  "key29": "4zzj98Jr7ytjXeemQwTALVzYehc5wczMJX2KHKXM6tcKPJhXr8P8aZde2wMpKfFDiuqXNBewjBrBfejp2ngWCGji",
  "key30": "3ZMnsydnW5tMjFFEd8ix7wX4DkBgb4bCVXJCKjvXukwo2iE2tkFARcdmpKkemeFbxV3zaH8MSWYtPUXhLbYQCE6y",
  "key31": "4kFBa9sP6A8L827onjuwE3dD6m5YnKYaD4Wv3oroVHhoJF8S2wdHYvFBepmh1UmVejGzQq7PxRB2QqWdKdoGda9V",
  "key32": "5mcHA7xV5z7vWHFMWU3tcRhWZU4QBwxAsPyUjL4t48thRkhUiZNdREbJjzXhA3FHYCrhmSQSYxCiWSvu45AoShA8",
  "key33": "4MXPkiJwxWbxCjGayyfUxrSe7md8ZpAofVphr5ZUoHAwdpFPZw5DhkUtwh36RhpaWviMgg9Zew5WssuJjA6ZFQGC",
  "key34": "378cPQPsLbFu7nHjoUnLt8dDQMrBeN9st8PxF4t47ibfythfBCNe2NQYhS1xh6BrbmAwqvmkWzWB9JodLZUs62nz"
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
