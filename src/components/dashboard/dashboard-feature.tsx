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
    "3pyAeBjqHrpDYbijmM9vmEmnSTfLjph2shzMSgh8rSaQnf2WJSSiaXdmuDFJ9fRoqVXo35CnzPTxR8JxfdfaCWxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPsMiMhZwPvikrx2rVGepHydjoxdcef3RSQ6QFak1ukgrZWsYRppah5RrpgjiZAStqnmqQx42VsN2ucX436z2yr",
  "key1": "4HWuTrGPKMawAL3KcwKDPXpKbsFg2fpi5aXe9nxjz2fkNK5i97KRpTRUMp2G3JQ28DhjcBS7YetPXag62YSCN3fg",
  "key2": "3AtgbJzNMZiybxvnG7uMnDpkcXL6x1RgDmXnVFPNgF3esexvkgE1EK8TZoQvBHYdFDyf1zw2pGSMrkFA6Scun17k",
  "key3": "2hbZJT7MZ8aW47gLmnLA8DmzQKPHiqrNkqP9AzSkrbB5y3CHkgnQuDYtNpMMY8QnEiHM5niBmRF6NrVMNBAcFnBY",
  "key4": "qZdcxWstSdF7JkgLEKX65es9egxrByq95RwhJ6DcPqnm5U5AhLJHCyhzxpZSKM3XajhVT9fbehhubvBN6HFLEGY",
  "key5": "3Tz3SuFdUzrYYeqiJkZf4Av7VcwsPyH464sj8VGbaR3PgrAkt7kAu67o8JH96YWeFTc6vaVbfQuhY5vdMWz7Bbu7",
  "key6": "tpxz145VZo1eNcjuznDtwPruK9ZXgJ5HHTZ1qtAr4Ci7cW8HvVzCgUSKLqz1sRrYARrVHQGWuVqqhU3VrcKop5m",
  "key7": "325zVU3nu4TBKEAQfmb8mWwwQgtX1kzwEpB12nuA3U2aVLCprZqAzsxqDWDzayD6DJrQmCyLaazBGskit6VmxF2p",
  "key8": "3T524gmQZVddyH22DiiLvGEaCHQCVf5BohENe59HHv9PkE35fiEMjULbeuxkx8zKUVUrfip5TX6bqR3TgkkTb1Jw",
  "key9": "3Fxjmzeadt2JZerP5tJsG59VFp8mgziBQUevMVVGXmUtMssx7AfyLdrGRCSXZ9S2LXrnfEQ2KBxZ9H6tbmdLbnYN",
  "key10": "3dBhFQTy38GHcJ2UAaPmC7SY3fr6eaf9pB5GFwyqGyXi4v9MKyCgHWnpcQF1UFHXeogMuTLPVCkpWbV56nGALTUE",
  "key11": "2ZHuWF6TQfrSCm7ThDvM3117Tcje87t7udgdNqLtHhgXNbSxY6rcYGA85ByBbAm2ttiYTzAfgTKbjHgb8fzavLTL",
  "key12": "3GEe2HG8mXYjNkVZXDX7k6uWUeK2i9MnotFMM7Bhny5JgvP22fVMR874h6bd3UD3wDUFNDM6L8qXrvm8btYoV2AZ",
  "key13": "4pzqda1TzLAJYKSHxfeRW2xjYtr2ng1UDQ1fXNxMzyA1mhiB2XCtSTKEi3sttDKgRCmbmeidxU64kLWSVL8uRTPW",
  "key14": "3TfVc5oKjRkwRDtSBVmjn8DUah8yyasF38oTN7PNZVSeEKVehLSCniWJCz69cTn8bLA3G3Fnk3uuPyfJj1ACmPDV",
  "key15": "4cwTuv5UuFd488P6VSFvhQD2KwnxCrPyV6RkUKEtKNyHdKNW99C1H3CApNw3t922i14Wry8bqZjc191jkRudzGLS",
  "key16": "5posab8KcJPR7dL9qPxEk6Kz4v8xdRaTmm8qmj1nuJC3CyvJyxA9RSdsBdDQ5bdCbg9Cx6SbTiRbwysxokYnqX3c",
  "key17": "26AJDKMspcLnTAMfd59Heia3S1UUffRSh4gyXP7CGpCLEBBuCjQ4yQmT2wA72FPFT9JGN8vQtCycfvArbEbNfB3k",
  "key18": "4BCgjGaA4YPF2xvJEAxRy5UCfQGpFVXe1TgmQBmyEs9Jo1yYrxzxdr32s5BTjB8rGXbTtxRx5yQYd7HXSMEQznYQ",
  "key19": "62snqN6V6zZNMQX1A2dXi9XwmNAVmwG5UgMvaAd6ZVsAkq1JpQKgLgpLTvsYxdQtHAKqvd2f29ntt2ph5mRV6ye5",
  "key20": "3x4p5Pt73fdj6HjAD4rHpCjVjT1xZ7X8qYQzUmEf5Z7GRJ1szStHq5WCyCYheYEpWCmuGVfLn6tBQ9wPEULWn6SN",
  "key21": "ovKgkveqfrMCK81VmRzc4L3TBFyHoTZVw8TWz9JrLH9bpucaMWrz2RWEVsgfD5d26ASnVh7KcQoznxpQW6YmNgj",
  "key22": "NKgMbotXyE8SshVAv4HPS7fK4wkP5NqWKKLCYkcx1aYLWVfieUaFPAzVnnnk8rK9SJddpCGxcB3ag7LYzdiUjwf",
  "key23": "5pL8bx6PUXyoHqA8rDEafNsPmZ12j5XJfTrt1f9XaDamZcL4PEAm8UAxwZHE3CkP1XGyL9ehNY5JPYT1rsXTBEgd",
  "key24": "5W5aH6N3umtiAsF3KM6QooXxLT4i8w22HeBKFYhqA3M9TWDCBEVfgsgd9K4gZPybDHLPJbXNFXRJ3wH57GDor6BM",
  "key25": "66szLat7gi5UP6r5AEsjn2MYufSRnMVrH1EvgY5ZAtyxZy3vL2cq6p4m4eXvNCUYLHccup5mwusryvb9BhfrBUxJ",
  "key26": "4apQf2EiNz85U6Bg8k1TS1YTJquUm4vMJKno7bCngUwqATtaP2hj8FzM1NWAbxpKzCHbMNaNSmmpb2WrxbkDjZuF",
  "key27": "5XmkBvSivvMve7FaGdrfCNbpCrujjXBJEocp7efFeQcxVNT3cT8WPSTXYdeFvmeyX6V7am45GJUhG9ABH9MWsHTW",
  "key28": "3AfU5NbE4SwiSWUj8MNxr2E7mf2iwnP5Sm7f5seRm945htJB62Tx6JhGTn1jY5gVnJrKNx2zbXNSWzuE98L6uVWe",
  "key29": "2XnamvqWtcn8R5PP3K75jWUq8zg2jHocHA7bLXi9hiXDjwjDFvnCUCfbGvTgg4Kxbn6c4M8PeKBdpTZbZodN5JyQ",
  "key30": "2qZor65QKqQ4kB9sN3yGnAnQQxd1K2ZSnnNtqegAqkDErdECb2CPjuGop32F5YsLsQaUsfT479139kLJEjK6NpAv",
  "key31": "HrLTbizdwWCTfdNT5TEno6S7sG1VPkxoz4QG4afZLUeHAPa4y3pBX373gLf56y1C76fuJ8DVUeM4ZdNTYu9PNpj",
  "key32": "5L6jz19JBZAibdy8BboaULQg5tQj33q3MkdnEXXM3y4DbzdrKZjt5cPjHDMsoq9DFQSNHQQYWYgVYfy7r9E3dS3Q",
  "key33": "48PKrUcTQ3tFFc6gqMfXN4iXukgBQbaxtJMFTaS98ffv5bVgt3zB8McAJFwTbqDvdzXhb5M9T6H7kPMcNRdU9nFA"
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
