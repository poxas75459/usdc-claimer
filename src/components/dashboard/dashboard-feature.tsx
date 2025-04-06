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
    "58qQEH4rdQ6hnmpYgREswT6639XBdEKJhVMe2zzckDK3Kp3tSKmSs5q6Dg1P35mZ2gTeJsjsucq67j4jkpBKfYAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfHyZ1gADvFGcNvdv1G7zNHncDVVnZFc6D7GzijFqtVoVgTcJm5mQPxYXqtRfiLCUQdvCDEEHxRCcpvyF1BMKhq",
  "key1": "65DVb2MN9NYqSAgDFH2g1XQXsY4MtXY7Ky4bP1NKLfTwCnC1X2A4Aixw4M9duHD1Zo7jTEohbMCF7cF6FCjwkixY",
  "key2": "1XZbuiJK5r79bAc63srAHBZF4feT17jkFb7tcxzCHxZMUHVcWwkmC2a59QMYed9p5nvMAqRzXPsGRtNhP3LkhT7",
  "key3": "VDpiJ5qctydMXLQMGrBBMPBAsyJ92otugUBvhCd6VEQ1rm1AAYtuEw7fFqzJd6vRKwtwYyG13KDcfZFd6gFUkjx",
  "key4": "5q4JB5y9CSZ9vbpAd5NvfoqvALDghkaMKmsSjRB5AGHuyHbwNxR2Q21BBb4K8qvFbrP5eenpNqBStJBnTTC4LVcN",
  "key5": "2sWGadCWgSaVf9it1ZHWZm371Lh4o8oR94gDYaHnqvbaZJvHbaYSpjyNFrqTo8sGipZ3ANNrVx2zLGvEaqQhNXyw",
  "key6": "42NjcWK6yAEHNyPGVDFRe1XwHMSJaLASrejMsjXjHQQqXi6Jd7k89so55GzMDU2sJ1xZcEtPadRY8NMHAtZnFYAF",
  "key7": "jKmDKro3y6CHha8LwirSGguJkzKbV46hDoDyn7ULCxdALQKnra72KnGEJLVVtjfNgDbGCpF7t9UXp3WNcATWBXB",
  "key8": "351sEDdc8W3pfX73dXbGkh3J1RDZLwTWBV6Uvrv58oArXUX6oEqxDAPmuFxygBhZMPb8UL4S92ToivgkgrG8iak5",
  "key9": "3TKcmG1c9PpsV6iCeUNEvtun7LwoqQ34jFPruQQY6sd5UiAAwZ9sZaKTre8tWjrfJrWwFgP1GZteac7TsmyneSHd",
  "key10": "26tLinXhHHaLw87Jadb7Tj1EwkR9LypoaRbXNYYQ15y3EzqbPcdtGN8Gtif9N8YYNT2876QdgpHZV8EQa9zHqdi9",
  "key11": "5iEcWukqLTNP2aYNuFeAcJEyEGX7GRuNNGzxLYY5t4EWe4Xh1hNv7ZPZrWgtCgp2cCT31bXcjVjWNyxbjwN96k55",
  "key12": "4WWu9TeiebD7hWR4Haqr7LbT7AdUeyho5uAFcSigaiVZEfeVqfXXKrpUqoYVnpbKqi8eca4MfZpC6cFZtJrUdQL5",
  "key13": "5j8bEU5ERdE9wFTDHn3Ahzwirg7TUpoDTZsVpWf6S4YzZXuDQYrA74PAhuweK473GQvH7M1EDjzaucgHpvQppF6r",
  "key14": "3MbD4Rbo43TpJe7qjkom4ZaSxtWACZqzGemMHigTXmHSAgqKuDsmhTguSCZv2Vqk9DgPmLLtRC5YbApxKvYfDFQH",
  "key15": "5SXEHR7fismji3BiAqbKPR3JkkMK6qzjLWvRFR8DdPj46oaQnWdbpDPGoJihcG7QPJnUc4151Hpeg1ANa2qbPXBT",
  "key16": "2YiKxzQmZw25q9XLzXPHykatUacRLHAVp38ysUDKkaFziiDVvXcocQ69AY8zzdd27vorNK4jtQRvjhquFQaNFJGN",
  "key17": "51YnqWTm4APJzZYcvcnVjaWLjkJNUH6YtxFS4LPu1DUGfqoUXmpdBA8GQjthea8wkPDDSKt9uBPsHpWjDeRreXTP",
  "key18": "aV6eTfo1YqGn1RsZq1WcCjHNmZDNCqo8WMrxBguTSSNwnPEMtzMmPKfwfjm49yJkTV7TKc95rvrYo3Rv5j1dzjt",
  "key19": "4xjVHwFGFo8tPeXnAB4PMHcC1PU2PnfKvebCxHix7wpwUL7aBsqFFvdhCsvd9ndQN9hLk5Xq3TnF7Pj1CaCDUJJt",
  "key20": "56CtBuN1owUg95GPE8xWcC92aQYBx3LZcUFumAYKpXCjdfP3DGeaSvUHBYmLysH9SrzBQy9Qzy5aZAZNDxcZq4R1",
  "key21": "4CYwQaMBPKN9h6HekvbWFcwQG4e4PQY8wL4Yr9KXmVsfWqKMRakejJf5Jb2zkbvQtb1A6LP3ehfc7aMW95wHyKQ8",
  "key22": "AvTgabwLjoLmyRQsaHro3C6BUQyXK3FdiVG9gCCGcF3jg68KDP3ENtfvsfKZB4XktPmoewFr43RUahZePK6yNVn",
  "key23": "4FxRsFHJP42qmyVkVEqAFzQmKdiv5dvaNeq1UaSMxGqaKAw6aM98fmE8feLCsohcZgaokqP3oEM7CMwnxQnCQeeZ",
  "key24": "3x6o3DA8mfpWMrhGyEbQGuTjmC1CLV519F3egSudUZ1MocxQZdZh5pBMwzWBdAwVPZnDVFmaMG4tMeMCPQcNDuya",
  "key25": "2489p61SokJ81e1PBxMsoMBMiLBWLoc5hdwKBGpnyPhRFQ9bgexhZLCAjzGQKtTHMXemPWxk6U93TTUYJrv3i9tK",
  "key26": "2bMCaZB1xWrnkoBp16ynHjAzwnxQriGufyvnWJTFxkb2tdtfYofXGQsB8Aj3EDauwbRfByFznuN17Zz2DQzF8U3h"
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
