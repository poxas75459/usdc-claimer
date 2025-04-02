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
    "2D7P3bvtfTDDGRud3iGL6L6FeDp4M5Nw611bbQyQAhSp5wDbGso49D42mfjj8oyqzn9HUfygQddqW4tW37gzEGcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fg2uMSNVAJE7n6SqoocVj6Uxp6FFSQqcJffTSm8rA45614wW34G3B8DLGGgkTUwW4gojFCkCHebA1tQanH1R8Yj",
  "key1": "VNWrqDdKrid4bdeP14ArwYZTsMG75fjsh9FXPuHWxS22Mtn81E86nWtwumdSNdLUkb4T9Z2zY5JkLRUyN6kTZMR",
  "key2": "3wMj2qKGAj7rC5G9pMXEi2Gf9xRLiQvBnHPQfUrsHxu2kYgvvhpLr9o7Xq48PU3hCFhVLoZH9PpnxpnnzAeWVDH9",
  "key3": "4NCw5BaDzNQQPpikni6ithBmPUfcoVp9nJBb3mHXpLBrNFtW3dvxwtPKCW6zQPVws8Qxky1rDi9bUbxMt2R9xDJf",
  "key4": "1K8yFtfUMiVZyriWprJVpsfBwA83dMWGvkGmoiyGmEshq6XFq53KDZEbSsKT57uf8ACdqg6g31irL4qcW8mZsFW",
  "key5": "44BMJQCuK2moxeEajCFHJMYFu1fnHhVvU5EkLQE77mQwXRdkByVTxydRjDjuCFWT2tNyU9E4DBHZECF8tiyC9jhe",
  "key6": "47fa33avekkaDDNPgGSUqaMi4FzGbRoPmRX21ko5cdmo69TJgGk2oDmfy2NTw5sW5jsHkWwRfT9TFTvQm65mHwgg",
  "key7": "5xd3i7BqbG1kGeUDJXMZoSsiXAZgGRkm2xzmXEg8T7yVoZQigstfNfMULRPSMmosd9WuE734P9P86moA7Y7dJGLV",
  "key8": "oCJweWdyAG2YzCwJnH2eFBgG4fHAXYuy7yn5L8mTpmwQt38N26TdwRnVBny438RmxRqhZPgFtHYNMooczCLFrEP",
  "key9": "88H8p8hWMe7ducVkJrMqLxUjvGboEhvXyLcf3XhyFPCUoJEQTTDeyu7knLA7T5bkM2bLR2rKpNKMH77985RCNDa",
  "key10": "39DsZWAavF9jYLNS63aSnAGgZVhZDtpBkEW25zcVuwaHJop7aV3f3vUwhKcCms9dSSSZdK6JrCobQz3MBb1f9Azi",
  "key11": "2Wa7fumuhsbTtSBBqhg5UKYahWbhUQfq7rPpFzP95ZyGkbaei83sMnKj1JLgmdCNPag1V7Fx2bM83kr82rxeuz7h",
  "key12": "4CdEfiqBj3KGCeKLRjMdXSe354gFsU3ARGNexvQTMLKzwxgEnjDwQQtfwDjwkJCctoGUp5t6mDNmKkeq6yfuyy2q",
  "key13": "2Ki6LaMmGfnN4QEnhQdibcDE23Auc7vUpwZwu9yAehWvPbhhGFszR2ChVJYAfQMaKMCJjEwHrsUAoCAZyB48Pj2G",
  "key14": "3GTNNLnPCn3JkXJrKykqcV2W1WWjQEjynTU5i5fqdyYsdwqbjDhewmrJ4sVkbnBXzmNYocrZLyvLaCaDAoUFwx71",
  "key15": "52BXvXdyvraoyoozsghD3zisraAP7zZ8ua4iDMmyj3zSdqrwrD6P9UCEoGTYWK7cSpp3YExjECA5uPXZSCt3hfVg",
  "key16": "3CuRZomSAHTTwXeMipsJHcMpVdXSHX8iNLJL7Ndwd2dkDNt2cdktK23nzsXEu7aGuG1YP68X1hffsBjQAoRtPtP",
  "key17": "47z6wW26amYyEM9mUU1dfBApUeDKJuqHLsxnKgL1B4doeY9Bv9jgCyLxH26DUasJa7QEAMn1tkm3U8zmZiyxRHNg",
  "key18": "4GMCqqinhn77QhyBPsrnqYbmqGSTx8BzzUuexhJTLL1rGstpiFTUsLdP1WKKSy5A9fN9U9MArWmy8xs5uLcS31Ay",
  "key19": "4eC9MxN1YD3VDGshRc6jWBqhUxbPxCDTW3sQ8rjKYkhgHQc7LbcpykEuUaox4rDc69XpEac8GjwjU1kGfuegP66e",
  "key20": "jv4xmWEhreqPMMySGdVtTmWLyap97sKvV8BJed7UwtwcT583ciaJY61C8zWUfadU1p2sPcqhyRznZHjDPK5vtmJ",
  "key21": "236oVQ5odQkdRnvaCmHHBawEdoDhubvgyZy7SBRGtFNZVWhFMBQNp8kCryuU47WS5RPRo1ZbqPey8668QTUELkC4",
  "key22": "2VQyyUd2PRnU4KZaLZP6DHZrs2BeKwXuVBrpBtVNKrEVXkrhS819WvPPhmrumhQKWfC5bRptDvUg8dV4ydDx2xVi",
  "key23": "5eYt8xi89ptCagoDM5nbuUvurB3MnGEFWxjbyFswuxvdHqvpeLz2qbnXybB889BLa5WpioKVMoM2i3v3YYbtvReG",
  "key24": "4yu3q1BqsfmoSFXLE4tfB18pWnyhHjxiewXzoNFXGShnwVuouzkfE68rQ4DvLmkYkbB8LndhrEzZVj3ZftnmBV8q",
  "key25": "Gv8dRPavaq8vPkFUQhRzmqLqanFu13a8bFbFUMridFf7A5jko43rMqoURJ7weSnZqjn6MCnj7DbUfg5R2mX8v9m",
  "key26": "2SURe5iuRrrp5ifq4GPHibciiBoqJo4dffkvdn9YC6V2numL6t8qRc7DZWvu7eFWLKJpibidhXU8PcmGxMVcJYeY"
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
