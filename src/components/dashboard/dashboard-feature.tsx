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
    "5Ckn3Hbqs5atDauC1uMiZ5EAjhsUVCYvQ53QY8SJRAqsP7fRstqFEdrKEfE79fUyj97o39jD6BmQPy7n2erAHsEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VrJqxNgFsaynAdomet8KYhacWewgJx9yBUyDENtnicb7irPie8W6aCjtVbWkgr23QZBAKZiHegFaJoyTFbxvSSh",
  "key1": "5JPf9FfV9LBYCVxQGHctgB4UdHC4sZWbwbwArBKbhqz6GfbpJeyQZCUxbJfaFQ9A34TXTSe2uSzEKLjhVMCafpeN",
  "key2": "3FMnCh8VPkjF3ZCLaU8TeGWMmAKXvXpuxakMXxd2TzUtYT7tvagH4SEHjyEVggy8yXs3Esdh8LWaB7hj7Ux51une",
  "key3": "4bpMAChdCJbRCn72pVckQU2jKfWsEKvyFLo5UBGpmorU6L316gK79nHckdAbNdv1YPCB5GJ7cEHKRdD6YiJEga4Q",
  "key4": "XPVEvsEcN3a41b5r8DXD88yrem8G6UEEjhiQbaQVYK77UcC6H5EvSBYMsRAtyjdjUgHfve7SP2y8vnT3KcLoNzg",
  "key5": "3s5xyY5un4TXHNSkvTtFgbi5V8eb1oqv7ZWMk86JTmF7BF2phoj7EZbkYbhmQjEnjNFNMmCRqVHaMk32GDbVfrAp",
  "key6": "48rSZ6MR75MiTuGCExA5LcZF156thFYfS6f5pdf6ro5aC5mw4fksrHJHut6g4KVjs1qzeQUuKSTc4JteqYLAyL8S",
  "key7": "3RTLdoYTMyWWmxK4N2UXxZjyaUxx4wtMPx8jHxQT8z2g9cccjfQ7yUBgzXS5TXeYsdQekPBYewZDBwEppTLRbY5Q",
  "key8": "exYutBV8M8qTnvoGisNccFPgLvnTUL7TedvSZHBmHgqn5M4pLCgniZfXvnU8Aeuysmwf3b458HWPdYbXphjnQvE",
  "key9": "4aHun5nQDDXkZFd4YPRtBypjFUaFyGzgm6sfnD2YvaQdH5iB7U2C3pN6cD2iMDHDHXYuiFr5dn8h1Ftj5Z3NvPPd",
  "key10": "4vNakbVdKKb3EvE81HgeKEKt8sPk6X2AE7vGe12snea4pH3cCGfCfCR9S7cQAmvuuJq5rndi3ZAVsz42x4AQYPtQ",
  "key11": "28gEuBsj5p2qXsdDGu27ye9vmvTBsxKHADR338WC9PYsawnKDnwHSFspBy1C1vXjSf1mpToJsmhnBcafqiehqPt2",
  "key12": "3coCW1jCzXPdpTG6obpuqyTiVHRWAAoDadocQASrAv6xGtyfNgugEFe3RkRwqc4piJXugGKcdfT39uaEzFohxghF",
  "key13": "5AggtcxECNw3uWftYma5j2S3PkYkQtKjm8KrXdedyAXf85mYWjKk26CgNZ77F4iVidmoEXUoqp19GNZXHCvpxZU7",
  "key14": "2rUBkJhZUByDh5zUzyTgxQXG2qvDg3YQfTe7eHdqG4MehW6cTKPbDunJHB8ZL3xsisPvMNexSviLdaepDomXrZ9S",
  "key15": "2dLoHqw4tjYQtXnXcMxxYqjfBKC7LD7NXc8PPNzEkyfKkCKbCZzfvvG268xfqEKSETBoMvmcEbqGQUy9tuWMAse4",
  "key16": "tXDErkcPjmiri8kgirYG5jDhrZ4S3kRJ4SUJXsdHP1Z6vNjFx6XQRapvrhv1UGapJ9tzLLCW1qe6RMwsmF57RqS",
  "key17": "3NSZrpiCqXS5eEUW7wvPaJ1hpP74TfQ4WC2eytaEvkx14PHnH7yWBGWJPJz9h3qgpjHuwJehaRDiQ7MKHeZeS1uc",
  "key18": "4XhQYJ8yfVrqipmVbwhLdCJjNGasNVePQbUsbAvDDKCHYvun1XmexUbe3CZL3mFbp7SXCgL96FLWM5oAoLRkspZf",
  "key19": "53BcdSPNeZHrtnFYjgSk1ex3kq6bGSdXnee64wtEKEQP9r7ffouMSMrRb7KR1tXZi5XShZFBHKY4vHbpdjme8kcx",
  "key20": "34uRdjykuLHteHzaTikMmeiNC56CQUVPWsSNtp1HUzt6kMuTE9h74HLFWevhwtvn5LKKqwYRo6fZ7Js1nivBTBAx",
  "key21": "65XWrZ2duaAFxPRvtBiEGoD63JtgiprJAY5SYfSgLnpbucWL4KjCoeymjnYJcKxpoCRzDMAbcrswt6WtTKzABu5r",
  "key22": "5cJ8SQco1qPXPoFgfxm7rQg1GSJwys6C7ZTr3TXiUQ1HW3CwsDGVdS7wg6YCR3tL9LLEeRHXhyFNswE6tAmabsBP",
  "key23": "4k2kp359xNNh1XokuJqvgFQRuZEKKvivzExrspFPKqSiLb13QMB3cZu1E8YKNzGQw2Ps2CLQieB2gSUXHLcpt7Fs",
  "key24": "4p44sBfb53o7hL6UndRzGninVbRJdbjojfDrMpM4kJ1zY9nRHucgcmmpfSsXvUWtuZSX7dvYUSvXWYsqsqbaF8a5",
  "key25": "3rCE2HAa8WK92jspZcyZ9wqHH7mDdwy9fjTCehfJQY9YCG7Jz5ykRr8tPRtWgvbSw4dJhaRttPZDtPDhCi6NbCwm",
  "key26": "3rrMjEwdHLQtfxp5LL4hxhimbSCN7f99kcZnmoV98z5Ueok6k4JrWWiqVLPgD3RGjrHSujMHPKjE1mUN5qUBUxNZ",
  "key27": "d7zGyfY26vBhZ28YP9PQ5KaMzF1CkQgsjbSxsRJU3f5ZthfgnFSJ19idGV16TxpKdeDsAxp7orYx6GjWCVNDrmc",
  "key28": "ULtirSQngtMxTskbRC3i7sVUfRedz31tYem1Az1P6AhzqMhWvWMzRzx657A4zjgwp6bk5RQBEHpBTwm23HVSFz5"
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
