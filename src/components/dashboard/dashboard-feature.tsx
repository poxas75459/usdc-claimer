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
    "4bnUYNq5Yavpq3gXaNePwFqTGuRhMAmfV8v16g89bymgF8YnTRsbKMPaTUv6cfZWymaWwVz3GGPHUwCVV25dKngA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jqb45NKvduvL3RWEGoBdoLqAJajPBPxLGm2Tkj8vZhYcKqcyXSLuC6NiwM79st2pthjBgVC6psGxZc3cSwN9zQR",
  "key1": "65Suija2aXpxUMPZYBBg1Y6GsWUerfDVee6Ayr2ejNkemKZn544wHf2K9CewyaEntEo8DQGkCCKuqdbdqPVFqT1z",
  "key2": "36FZudqd7K4vfUgFEt3TWByLrf5yEVjukdG125ESJrh9yEqk7XMV77Mc62qi3vgcTnPaV53Q1M5FDkNqvoRVhfAn",
  "key3": "552XdQEd1ecsP3yXCJukSQJqEKcngUv8uNqhXes8L3AmcfeziP8NA1c2gBkQU9Gib1criHcsefWQh1TA7tuEWTc5",
  "key4": "4ctJkjMTdBdQhfVi7zVCNasEYA3bMw93oeG8Pmq4ZHzPcgL8rMqNfsLH5chvZT798Y6CpoFdm1DAurdQH2nmQLPh",
  "key5": "xWABwx1HUMKttkcCs93nyVhfQ2TAQzfmH2siYPNtMudr7YSmsBrEXDuMdzwtZoFiwVtBxQpgqSYm57GEiNq2MBW",
  "key6": "djeQc91tJdiUhnNQyWFaxGaac5YxsDKzxNvK2vV5XFvLjw5JUmHccnhh7jw9Wxc24QKmBduEomjAvyFNbXd5sYq",
  "key7": "2zMR8qLep14tDGz7AmMHhG95d3TZ5tJnXnxW2vnytJkUhhWEWcu3piNE4VVX4C3P7uqu2ZHASbXi6kHDgwBHVy9h",
  "key8": "5KQRYEC1QCP1JNbGjD5HMEEFtTA5VwtDEVpqbmBzm5ninpLFqhhZkcCFYT9Q471yMKVNhpU854gTonQzHQ8CMcYa",
  "key9": "3UKPvBbqFQ6AFk8LvubYQ759WYQYWTGoNHov6daXwd3iaEf2XbtXXwjHiY1gxBCwQTfUgC8yKLrdJJo24gKUXBL5",
  "key10": "4ZGaefzY297RWzrTjMjz4AFws33Sd3nVFcF4pd1T7dSewz3eNTy6xD8MBDm2G7sJTRMKkE5LMdKRa8fMXVWM6K21",
  "key11": "44gdhwKAF84ejTUwzbZCPwUkmBL9oxr1bWdjVr1uVJnb6gSZRuefDwKs34WXRk4GfguDRWXyY98vBPHGtV8CNCmm",
  "key12": "5fjqCPrcUErqRsGnk1ancuzgnJfhZCmeaTqBE46x4y5VJVmvEyD1TzQw1yqDn4TbRgvu8BuMJ8FsKkoWkTK1w2YF",
  "key13": "3KCxb6AFQkGA1DThTFzSW2sZkweZgFBGotk8BAvCAqcvf1uTqiuRMqheaLMGpcb7poDiVeE6asGskTpgSue9XKqe",
  "key14": "4KWr7darn5hLZhUAbWuS2JFg5yZmDSvptQ7fJ6pTKrS21L47bbBgTWmFTdQdCtji4L9SXPrAbRa8R6LPCUNXj24H",
  "key15": "BUuHVHPvRgoseTVjkUc2KomDQhkiYH3oJYEHDjq4rzNcfXepPdfzi195JWzdRNhi2MovkeYx4yie638MgdcuCi9",
  "key16": "b6xuhjHmJEGPqTCuGaTYW4wcsMLxzjAGBU8qXVEXzW2J14eUXSDfDW72m7B29cHRkc2KViyYbkrXhFqD55FWLvW",
  "key17": "3F5Xf7HajCBT1RZjYTCNQVfdMrcmcVT6mz8WixXyRgToLMaueh2F61ZzNd2yN9bAcWhbaSovazcR8kctq5Tzh1TX",
  "key18": "59ogSSmjaf8dFLPE5Ga8z2VLoXVu7Ziobdk7BDNed6TkE7LUE7zRLSBNVmycS2pkgfiQ66a6HLGByF3sRTSGMf7i",
  "key19": "4gybtbwU3u7Wk4bhbUhhnoYSWjmXvHHBdDgcaKWto2XiJBuzW6puRHWyeqNbeVTya2QSPJCZzajvxEEMRf5usny2",
  "key20": "4mi8JTHG2R6Vof9dmJKDHyUKXmserNPQs4rGKdwjDJT2RhTFpNyXM3SDdxDbnzZxdwsN78m7KuY1DBNi58VyHJ1E",
  "key21": "2gDvFpnhfS2gUZoWKCSHJw2tNCBsMu2iFbu8UVhUbDHMRj5VgZbC77Gt3tQjqktSsBsPwzJGcqeRgRfujdWGtP36",
  "key22": "5w3pMbcZfPp8KCv8oNRr2BrE3RkHHZFZzuDXZnpxtPPM8815CrrHgQKPH98VJVnAEzKUzQoGNiZ5wjbj8BJHnqgy",
  "key23": "3sRynB37BJ9rRDG78xu6ggMe8NY7BzN3wmhMvSr2dKYXXfWWTihd57x5wXPdTPnNA7SL6q7DYyjekfxkgQxtcj5i",
  "key24": "5MN8pFPy9s3PSKRBzzbw4XFyN8vKDNFREZbdGadMJ85zwTZ1CdwDWLXF9nzaPRdqv9LLjH2g5G56NLshYfNQjNju"
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
