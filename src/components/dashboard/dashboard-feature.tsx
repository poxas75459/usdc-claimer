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
    "i9tE4wQ12hdoy3ZHAshcpx8JRf6b9uzLv4UbfW18iHyprcs2tMtmMPMdcg5kuCEhoUhq2Zt2ooVsydjfo23rwsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ULKHHzqt5Rs3HymAqtLpRQBTUUUq3nQpqBrPjBJ58mhv4sLG9NnHVHSmtz4ygpG6ThvnCw74q2ux8U1Qho6V99",
  "key1": "gE4WAXaJ1bvz4Y7N48ymbQw6eCcYo2NuT1SMB65wJX2sAmg157JzfUbu2K6GarDLwRFjYLtLhwyF17KHUwJ2CV7",
  "key2": "f5SZ67qydNuYapacjKScfS7irUcN6fh57z7qWYhx1XfLnGR1o3EKt3NrMaoJsCwnnwiyK2iQrQKvRhgb83xcHHL",
  "key3": "5D54LRpbPkCcLxKyfHWtQvK2EGFodP9s7gjpv7xZCM8KHbFPqQ7roLnnUtk4hEfHzHeEqTido9D787paAiUaq3Ht",
  "key4": "4FJo2rb6XrxSYen1QRyZ2RtPFjVdjE5vAyEhtMcSjG9DCvQxxj2PxprhRSCsD7rwz28V6FdEqvd2RAgzLQBaZmDn",
  "key5": "4JtoSj1GZ99ebcnVx1T8Urhnyah2AGJ2h63EjP24wPEPaKw2onMqxmU2P8tDSCPRNpLXTri2q3mPgpgUDn9DJ9uo",
  "key6": "3HCYddLds7MHzYTt31BMnyruwKcTNkfUaJF66DX6Etx2rVDAV8WAELCodb2UAyaCkZsCWUmtiCeKH15Arftsh2hA",
  "key7": "2tdDYHzRiMNyEvKToLffZa92dCebjPugxdHhjJzp9qA1FSU2du2SAMY76LcPoH8QmxJncMMZBYiWQzCugwyfhwux",
  "key8": "NwRrhkezZpguawfLfeKHeT7qGbZMC9o1gDZ5rTZNKKr5c8SQv8dipcXnR5xTvkpNdHgcZRNqe4aNUomgo48hiFW",
  "key9": "wZz7xxpB39Tmyorf1znN3NetikJvoUHdhp7a8uDyUGU28RJDEoKWZLXvWeENQuB8RojqnpaoPLNbjvKiE74dXuy",
  "key10": "nwqescsJRxiPKyfNpt3bjq9TZTPGNTBDAjJwhrbQsr3PNzmr6woX7oHtnDHYknVAXzKgMmrWdzpCghgMh6BtYfR",
  "key11": "2TLYNBeFyvY1F8jf6xsQRvJgEi3CXkfEnrbpxBD9nEx3Pu4krVg2kkM4qtbUXuYzd7pp9TCUfRmhisZJPrCozuhD",
  "key12": "3yT2oiocGQ4gqV1AhtYJgAvFdUPV7UXmsKoKLVuMTjt4ey2yEHffJnVLCTZxCCpSpxf9rWGprN3Sm2aQCUjhU8vm",
  "key13": "3FSfR7cndccsdWp5EL7k8G1imM9WG2pjeBiQrUJ7ai6tuUZvMBAogvRXTdw1WiBBHHimAywWDJUCmpnD6GbiHjrd",
  "key14": "5BAyz1sCwyEXa2uEV367K3qUXTABKKhH9Zdm8xBB9gb2v1KdhTw1VnStDxhh6LK2nyZ1U1wqXA2KbcJctR1aa7rg",
  "key15": "wXXsFdX11PyuyNzKxnRdh7oX9Tvo4VPjkzZGcNrEkFK3ghPJiKkjUuEHabfeRNHPSqfNoZFVvM65KTwgbVGtbkt",
  "key16": "QEP98Dib8KSGbheWWU7NN3sjVUk56WWwacntjSBgvXTC8BqZgfDVhcNjwn6tS6eyei9Xh8LyX1hF7FZajWAk33H",
  "key17": "23Nbs8Qfa2GStnGUwCUk9HuXZHvorszP6DzHbwaVULGsXxSGHSqAVF8qh1rTb5ykibPhruvrpDkfjKmewUV5xWAP",
  "key18": "4uMXcX9DiVUiWpJqrnxWXphabwxHyQekKCY7oJ7H2xJS4awWsXV3cE1GioM6LhJCrbSKyW1HX477c4z3AmvUPXAc",
  "key19": "3qP81pKarTwq4dDiNV4grxSNndYgehUzm7HaTEeQ2kfVYGnVoUzP11m1KnjYiG6JRTgbMkmB6SeQAUKPcabG9s8z",
  "key20": "5FpVjV1zBBjLCFSGLRBmkqNAN7DsydYU2FoXzuMLyCiCbP1q6eBB8HuB3VSv5dSFTZzJwz7NurKBCpayj4f6SZoS",
  "key21": "51VSrmKC9yutaYbsBgDfDHpL4eZJzTaRqWE5Kn4afFpfLFshqtYD7t2WAoDi76dqnub2cAmBM5imkXK92BBWm2xz",
  "key22": "37wxa3p5Y5h2EHdZwsC4vy44Qs6cQFhEcqKyvK8Ax1KUio2rdqxU6KgXfoAjPDA4Vsdof1hYvRSJnB9GMe1cEiK3",
  "key23": "3tEtCqem9mjkqgUaFiJ7B8xffpmYhAe7vXFVGWvQ8DvmSLTbufdW6EAdiSXZFN7WgJAcmufkLkXuccXT9poTuy6q",
  "key24": "2SvLroKTFTqKLdYTcNQzzeH52M5YukHTazgEM6u8Wd18ocNoizqtcqvDD4oojrWN1o2Ng2BaqSyxg29WuGbucWhM"
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
