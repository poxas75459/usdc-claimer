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
    "4y3fKd9RhbrD1Rv2B3uqS7u4jUpdbTh2skKrJ4apUfcs2fBJquT6wjF8RZrDsFyqQMZKdbXuxtkTi2NayErPpGuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfHdAh1FbEWGaMx67UQ6vXhonyxmNbx2qE4i7mhQK5WpxLaWkxnk53QMsDqVYQsU1k4FEoGajbgVPbF2DtjF3f8",
  "key1": "2ePz6eYDJy3s3oFAQnqfn4VPZCLxA7b3aGKWUhaNQGoBvz3BkY1NUy2PSGPnfr3mcjcJGkybG49yd7WHPAxH1RaK",
  "key2": "2JvtNbhLXbTRPVwnTLsmesTaSopvNQ6xaMiFrKyQst9qUctBroa7iDrMgVePr61JmKZPjJdwap6v1ZmfwGSAKHF9",
  "key3": "31rTH1GwKccwPSkdXncKKXVGq2f4jR1nc2me3zJmVDi984VjNS1i5dAgVRWXu6Jz6K2ipgp8fe9p8WDkiq1fohLr",
  "key4": "41foYjHN1vJJbJjoA8KNtwHRN5trQYQY4s7k6S22WgUdSREHxKGh8echhuUUvQshG6ibnYNv5yWQgUiJLjqCqM3G",
  "key5": "4Ujk53sHLBabfQak8HUCJ3qrMf7jcUoh8TcuMWDtKr2x4aFunSfNmbUUU5fiXWzUwjSCn2YrVhY5qa2Hd3ECz1Ff",
  "key6": "5vzPfM8nT22Wazxrc8ebDVMFoGDqhrxEadZQVKDHvrL4teaQRXc61fmRXutx6ToyiGYQjYzBJi1zuK7V2qpGKMyV",
  "key7": "2K5qtFZytZv5cy3jkJoZEpU2YVXWz9HwSBMJEPaTioJFG2Xof9WvVb9Ms5CYmYiqt7dk87fU3PkdrM1omMNxJz7L",
  "key8": "DbWS8qcGik9eC9KqkbF3kjimA6wyUPwxqqFF8XHSXGD37mQ1a6s9XiC9JE8Jsbt8Rwc5AtdegCumoJ5VSTzkU83",
  "key9": "4v8Ryj9Fb4nEkYgfGS7GhUQRYPK6Ah7GdKFce8XH8sfyqvQRjxwFU8UzMQGbAbugkdsCK21QYKiYtZPEBUwYqegM",
  "key10": "2mBhuerifDxe14oQX3BDUHqVstDSmN47NnvHqSBCXBNTgqUZU9JrZ9yDNrK6VEs4pfGXRaxo1hHzRXgqm6eaorN2",
  "key11": "3nF7orgupFz2em9K7p3JP9t7uJNC27DyoYzHrDdXh3UdPtwSLmhUCiS8Tot9oGEYmEzpY9665ZeHhJWmy4YwDyjg",
  "key12": "jfXqvfuzRLA3HACxLnXuwVh1qUVCFNbSQpWMqtuvMYipNPiDyCkhVEpjH7ZpLsFioUM9VV24JxVSoHfMQTNV3aD",
  "key13": "2iYDJ1Xb7nxEVseQnEmxCwu9x8EckhK5R7RAbZVi6xxLuBiYV9Cwx4U5FoXGahaJksef3NUyHFpm81uz2g7V8tFw",
  "key14": "HNKy8s93XwdwBm3fLNXEvmR5KbH76tuogYt63YigZhUbS6jec1tnhCJYAKBSkRmAn6NufKuBmj8haG8CsJZa8KN",
  "key15": "2M7xaKQ95usab18WVW6nCHtUAw1utPMc72PT8sFUBfzhtqajUt7ofoGQ2f5vBMUQhvm4vkcSDhBxEajrts6mLjHa",
  "key16": "2u9kuahLkt6KU2rMdGGRKWTvTTEsaV2ut9e3VWsxFjNZCiWCYbie8NaAhNq8ce7YQa9yyvzgrMZMbNgayZWJnHgK",
  "key17": "5j9buXPNzwALnwn2tsrDhXx39fPYp4ywHQHbPyF4inoK9wu7JucuNdfYkzFkJFG9bejR47h9DZpTfAL9JVbAubsL",
  "key18": "62UwRsog8GytH2NkaXvzobiGgupb7FVL9R53WF8151x8d1R6Ndi9EH2eeKMPPyfyeaLBmxC7kJNDL4hrYqsS8Nzx",
  "key19": "2vV4JEkGnJ85Nvb5ioRsNRYZvL9eoxRbpL6Fg9hJcZizFzs2Guu87kayZM3GxvWFiJRVpLUVpYEZNbrWa4Pwfsnc",
  "key20": "4JetBUgNBUi8SJiAULj5pQ1os1v1bZyzH7A8JpL9DnocLGXazjzsymwCaam2VmzQaDwAR7CF6xfT76bEFxUP5FUm",
  "key21": "4i4HSAMLzvBq6okw42sCSYUEBCNHbzXzkQA9VZaeWwJeYtiWZSqUSgx2GTL8X3Ubgzg2gpuknZAKQ12S2PYA2nDp",
  "key22": "3xLi2sENYB3GXgqEP9smVjLVzruPtNSEeQyxe3Dg7vcJyGPuKpqEM9K6BFSRqG5W5RCSqCy27AkZfRby8ghPEYgm",
  "key23": "4xFee1AhH8bg9FMF6FbKQ2jMznK3ryqwYmNRJm6UwayGA3b4XqkwrBD6eeAZE4hFM2bCRtKTuqaDPJVMwMuxq5AZ",
  "key24": "4Vsg6wZHs2AusUrmBunW2Yh7duabrkeFJbEhSV7yePVGViY65WGzDCvpeWj2r39yghEHLFuXQ8vdKgG7PE3W3L1g",
  "key25": "3p7kge5FwL4XvX113vTZvtTDEJTAvED9QetRnh7sGXHUryuEefCJzvZUkFE2PUXZhJqjmqf3Y7HiiNzrbTMKv2Tz"
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
