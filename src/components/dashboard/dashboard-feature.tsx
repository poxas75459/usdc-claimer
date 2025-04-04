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
    "wZniTmWbd2YWHeNJDkrU6eLYQ1R9nUZFmUop4SxB2w2xLaJrMr6kHNoG4ZggCGKeCZhVJnHtk8FBci17jmNVUFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367BXh7Gydtxr32pbcAFuZUg5vLZH4vjGWuYTzzDiDmzAxfxFeA9XUXp6y6ytErPHtykx3hCtQcmvnehBbscMXva",
  "key1": "4NHz4854bqoArqvw4E4dDsjRbE1hJKuMM7q2o5gokgusfuoJSY8JCK35tMc8eNLLow5XN4QorBwr7XRk8yeF8rvF",
  "key2": "4GaBFP8YEZDLA1WiC9wWGcmpJSLLjBRwenfPFfsHNYnhgRrg1LDUnFYuAWJfY8edBF9pUfG1RY6QQFEzMdh5xP7s",
  "key3": "4WiPzLQm7dPke6yE8ZM38YDPERE8SBbChbMCWU9sfBbL5homZ7x84CGRJqPSFhiQGLQCZoVsY8ADH1ymSVCfMMBU",
  "key4": "5gEQLfyh2nQuSp233kktVg7pYGvQjP6PX6nEZp6pVhVe5AHapmMKAsC3Xfd4gQ1Skx98NJ75JX5aR7Ubf3URk7zD",
  "key5": "21dCu7TxZcp2vH8j1Ed1P1GCyksLBqxjvYA2WpXQA9BhT8UWHvy1xBj8eszU2Uu1SNBrKDDojkuZRncgbWTwiTya",
  "key6": "4qhryMfi6UXnDGd9h9LRgTbqVk51BtDFAGGrT6UDNAtCbCTH7QAUo5kDBfRw649WUK95m4cHSbr5AVBPZQk55qPS",
  "key7": "4ipS2LacRgzxXbhJRKFsTs7rTmk5MwZZyhxGTHPgpwGhJGRyrNHC9kwaxYs6LNwT5KHwX4KNgoidHFmE9sWv8vPk",
  "key8": "Tm516VrFJ1tPf7iWwPvxNkVg5HUaiBhPX6ZY53XsYG1nFmcRZrNx9tj9MkeTDtSQnMdRPM1kBdmFbXKesyMTzyA",
  "key9": "3oiVpPBeJaDSSV1Dj4hE3YNjeL7auGUhJ36DveToGzKidHHWCf6F4ADwxwumx7uJ79WsKE9sY4HCw9k6Un8aGwnQ",
  "key10": "3YdipBifa29zhH56MWf9ZvXU1CEcJjWtDHVS5mFHQvaXTiHnH8sH152Feb6WMMRFunp5BoQseARohMhTV2rdoQAh",
  "key11": "5fnyiZo2iRZVbu3mmjiricz2iK7CdCC8BUS9DAfPfzujDUq5mwjjUEB7s7t4ckA9b8Ft6hfyGMifdYugAZ73AWWU",
  "key12": "4VfEoJ4HfhsujKUmpBNcdruzThr7cWKUD4qoMXagrVWV3QRm82tRjjCxHsuTJpZBQabgAKkrwhLJveUHkcrb4vvF",
  "key13": "65FBix5hhbmYGz3ZZCQVHMs7coHHcHqUD37XDYQic7QrAK6knvS8CZesSGducSFznwYZ1YHVU32b3jvQr4omMYTr",
  "key14": "3DDKURLamezALG6LvTNDiMCgw15Ekvku8afGLarDaDLjUxJ5Np6aHcct5ikB5PuhDhjYEH1P6hiuF4sUvgsvMa1V",
  "key15": "5RDKNaYYcz8KpT7duMKCudBcZvkFLBBZUFo5FuC2Ay4KjHsmMpULJ7mGCoEsUgDoSzU8LR34Etr46qN7AywS9XDt",
  "key16": "4EGwQrgohhBP1rzhmSocZR8vAQZuMgUuhEdfKaRJCxF6dUsQZN8aYmVsM49BCZKpzQQMAAnuvBxvNTYo29qspbhf",
  "key17": "3M8sRS1gLvMJA6EebCY1iLiHFw5Qj7rN1diMNjQo9ngVCj2noTwQb1dpyWs1NA8Kx9AxnhgxeDUvK5nBq4BRcVbF",
  "key18": "2Q62jzB4Yijhxiq7bC2jfPYdvpqYwViSrxcdsx5tZuFX48NGe4eqpp8C32X2cvqjDVCUmbhBvKWACR9GcKotjqtp",
  "key19": "2CFngRdwi16D51d9kCJGT6i4zgpbYJLnWeupLsEatfL1HofmSSeqNHTwVQd9BuwJjgD6xGD4Ygsi3UGVnpX6omdt",
  "key20": "4jta6BnGFo73opGsdBZFjKLgUmSHVvPzYJzy2Tw8LVMWL72cjVGWz8krVQ11S7BQiycpT5w8dnAALEhGrUe98d8N",
  "key21": "GhtTCdF1ZuiLvDSP79QtqtjYuV5bHHLeizyEpJ6Q8iibPxuDMkQ9PuMYKuJ9MGrzR9g222GEYVgSCGAvbmFagPz",
  "key22": "4sBDVq8KEnU7QwJCN2P86PDh62rxGF3qRkDwuTpzFYExMSGcTcUrYEtB17McXYgQTFgJvMUCkemYrkAbNtgUb9U1",
  "key23": "2GHHdu5EZqh8J1HcA5aR2aJJkgAm9GgcnaaaUQ18PyNFGEZPqpdkgzU1Fga9u7gRYtujfS9AUjX4WAhGntESFSoA",
  "key24": "4SeQBWEktJzooCC28CSJbPyoUTDMa9YofSNEzBp4BhPWswLhKRUJTYpXs5Qobw8Cw8MgPtVMXgJrzVjGNttLAoKS"
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
