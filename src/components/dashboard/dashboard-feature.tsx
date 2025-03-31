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
    "M3g9uzVP3TBdGpQeLHGcskW7tPXDvPFicCHLPGJ8J8ix97qmHssXwAPJurcgaW2dJYB71cpt5wSRVfWLvR92Ggk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mp1SJwY7LTT8VwdJDUSSUTvpBwEM6XSaC3RuJAhdtUEEh5uCbyrEHiNjQTK2zdS1Pm35CFGogWYW8Edr7hbBetT",
  "key1": "56nL5bSPeoxVog9SpsFEAuk5AjB1t9U1G2igKABbUQeU3yDET73T5fRtWHLsQLVE5nS5k57FA7Uhwz4JGQgPR2Kc",
  "key2": "3jn3tSNeVFboHUzBR76MYPkzBhuBTLyiArk51cg1sKFHjHdDXgTn9vJ4QHKyHhzs44Y7oQEJm9jAJQUDHUribCwr",
  "key3": "28fuxSocxY3iGguK5zyScTzaEc318LZSTPdP2qtFvegWLnjKqYbLZsukHEjixDz7CxX1VFJ4MGD4FVdB6YGuHUdt",
  "key4": "3yUE8FX3ww4C5TM2SNPnc3yk8fDs6KMZXgYAgWmk87Dn1MmqRyRy81t9w3B6cy4cWLWYW2AfQmKa5kSrk9DUXnKz",
  "key5": "5DakzTyxWZNaBXUZCMWeLwV54x2yizztjN4cZQYzJ9Qvhx8FjkEgXPxGG3Q5LjMKiVN8c7yrgvdf1smNvBZSaMAr",
  "key6": "3bXozGS47AriTNpVTvxCdEdcxr4rvuF3YEQ1wtTq4Y3sHjLpknAjHCJMjm2VVmwVCo1AExD6Jz3dAcndb9joMXYb",
  "key7": "4ETC4x1dAqB5ESwMj5G1885TTYNK64pTfFKPWAcNXzo6WV4kXVaek68abDgnEwUX4hm9bpCGqnyzLCF2QR39C7Yb",
  "key8": "4CGE5eiNYNpEWrYn69MUD2NbmUTDPaV2eU8k7kBvTaTGDH74x5et6sKUTsFx16a4CduYhqomH3kGEVxHCDWQ3kWc",
  "key9": "24nVJkM2XffdTWzTLjgR7K6KY2kgUXnSwUc23q6i6mxHcGabmEwDwejzRvDvDGdVZcjthXGWSYSaqsGkvmnJsgi6",
  "key10": "SVAAhUxCKBWQXWSFAXFcQ8yKAj9xUAQf8m5q6EudU5GPSuk59ncJVKZNRDHA8TFqCreaXNrwVtwWFSL7ygZ6hhd",
  "key11": "4WTTK3mKgrzcyNZGzpkNJ5wWVC25CQ1Ne6w3V3yUomo3PiCTm69ZEWx9LZ1DoGtPvrRAmu3LxPtTiS2T7dnWZEcQ",
  "key12": "46U1ZzSpHBFw8XxCLJyDdHvmt8Kd7nAe8PfGFcCDu2cfoLDaWpG83oo9uX6V7fEjjgjmX1nwEayE7YJcHdkW36dV",
  "key13": "oUDaFmcYc8DK1UFkUt2yz3EWt81HJnGRpxuznD5Y4DBeUA31xwVYaVWnu8A2sRFH5LE75STB4twqgxRHdAeJWki",
  "key14": "42j8DNYw1xa5jshaReUZUq4n8PV3VehbdRkvqsvZxNcJH4unEMHFmtG9D4wngsBkS8zL1BgT6AnWVzpfZQJiKbK9",
  "key15": "33czPRbp875j1udSF7ZaXjVzQCtp3EJhEv8F1X8GS8WHiDRXaGuxTDtRUC2t4UZ3C57PKtATkAeqNwgRBfqLzJHN",
  "key16": "CAwcsxLa355pQGkmiCH6zw9RYY7PUprc8DxaL6BL28JzY3MS8LqgcmRhm8YELMUWY8PHJz47MTRUDhkzKgSUpkF",
  "key17": "47pAoy3M3vZjGPTa1WSQgT8PoXmYkLY2FFTGLvQnWejz3QAJAAvGXd7BxftqdSU2EMHcefVwY6BMhUS8ockMjXcB",
  "key18": "22qC935aB21BkesjSmVaHeks8zZKf3N6enSSxaW7F2KzCCYEK7MeUTqSQfJ3XVzK4EjMQDrGVFU9jcGwhfCk9Tmx",
  "key19": "4fTEbrzDqJLBFLe31F3GoksiYMJf4qTF75eRze7zwfLpuqW12EfRhKr92s4236urYsxL5DrBeBqDqkVtRYTy1iMT",
  "key20": "2K3kMhx7RJzsQkSfympJ9TemibWZPhLVbGYLsNdhGzk522Mr2Q5vfmrfaKgZWHJ9nbHDWk595VgeQLXpMcp4WqV8",
  "key21": "3BGqRPys3fej3nkz7Zm1YR9UwzUif8wkzCyxXT1Z7mk9wFW7gj4UbzXrELqHUiLyyaTetyr2aaNc7NapyhvvmwTa",
  "key22": "2DXk63xYGaAndaNLzqxGNmWgPh2ADJbNM2GJdpK68RfPa28jZHaaE5bspM8Na7kVn7t81YmmMkkixsi9QmSowtna",
  "key23": "5qgs3PYNVh6vCFAMAtR7Zm83z5SAnGUkYrpDR6hfTbVJRu9TwjU45Ljp2xziixCAAbSKbqhby34FNd4PFom5mfZP",
  "key24": "3sbHLUwQGE3TDMN5irkjDe5xwXehdqW9ShgrBBx6A18sogPKmMXNshJRQ74W1w8usWPGw5UaV9CHxAjLaujcFGWQ",
  "key25": "BsxHB26bXDVigpGtRBP1WXHyrDMSoXgdcHXyhdDsJ6pvNWmvPHwTVskYVSann2qDBtpTMLAvn9PeHjefm6hrrt7"
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
