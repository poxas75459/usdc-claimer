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
    "2462oPoraGSjkmsRffqteCKxYVfFzC4X6QSy47HESq6j4tmdgHT5Eh4kK6C4r8hrT9BDTZofi6rVLEqapF5yd3vT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUn6AYBndBWoeh8ZYhhCwy7BGsCr3LWoYzs51DpYENrtKBq4FUZN9o5R3shNw4wttvCgjCt5pXAFNA8mbREzkTj",
  "key1": "4PGmwU6TzF9EyAwzeGcmaVXkMDmuyq8dLrGoezvqkPg6qWNF4QLUQVCoePKauMq3H22wCXZcuB64T5ERgYa87VPK",
  "key2": "ZMK3kYNSiKx6gRuvUMuNrPHW9HanJdT1ka7hJ4Q7JxVe5tE2GQJgQQKnw3C2DqNwrYq62igMUYE16E4gAdemZFJ",
  "key3": "MC7Pg9fpPrmHJKASRjJc2bjAz6WytTV8cmKYzopCmTA6WQvhzaU39RNE7z4vken1Aze9r1e3dM7GM7UBvipU1Zy",
  "key4": "u2iPJCKeWFVPWGeBP9sooc2uMwopT9rXdHeWXy9QHEmmdJyBPuQkonpJBM1ipCWDbdvcjDUvAvU7CNEoGPQs5ay",
  "key5": "4c3CUMAUBNMA9QCvqrwgnymjn2dkjbhJyKx3qSGknsWy62kRCjohrAgGDQn4qoEHzyjDiCowxzZrrSiGeRiircai",
  "key6": "3NUd1tq7H5s9cjPCtk6EFsqaDeRJLNUoLL2YHhr3MtSdd4z5BFvEuVjuQWQaaaVV8eTFaJdsKynPBWSKQFXHwW2W",
  "key7": "4UrET6k4MC3uAhYGMX9g9Da1ArAeM6iBNpCPoFTQGMtmh7uTj7p9DvuhXQBdyhupvSySnfRMm1SXcVoBVZr1MS6s",
  "key8": "54fTmxv386kzFFroX5zL4TMQdi87LDwf18ZtmrxmwRyKWTGi4kS9B2DKwAZ1w4jF2E8odsYg732hCpXD79N8uVYe",
  "key9": "AqwyU1mywWPizmBfaRSuXeJgbatNy3qwS74Vbtq3UosJWxHKUTY2qDYRH87TMsLo67PrYLaJEQma3kyKm3SD3Tv",
  "key10": "5J1XNruPpF7JDPEMMDMkyW8h1y59NjPrQEHQSfeidn5G66Xuwu4GYRfz4y2mQtFHxfRZJ7aukzsubB5Pc83HqWRz",
  "key11": "4gbRS6Ko6to1aeCs99TKWC2vS9nFJcpd626zQ4NTkYdnhJ8UxfdzTQaMjSeQEtCy7Hww1Xym1NKEjgXi8HRtaDxw",
  "key12": "2BUf2GrM9FDWSLios2UkQH9iau5UKVSnAEGiqjgnagu5yPqVRijerXSWFxLYVmFTNUY8NtdS6yuVqBDqYw8ch9zf",
  "key13": "3anHyhwGDHUtPTTdbCYeVkmqRBNKMR7wyKeXr126SN7y1LpkC3JbN3XxHAg6JKmNAnphoFhoeKZWw7eSxtFbuv6A",
  "key14": "2L96G2GKBD4uzfMY68RzL165xBuhBVfLyzfu5gf4xAV73v8Rs8t4Pjhe7GN9PpiukFrXXZzGQBRJ1XzuRK5ZQKhg",
  "key15": "3hEZAsov7MDK4HzCEAn1shme3C7aKiH1N45ntwHdXDMXw5kXsd1mDntn6gHCqw91cpTM6jMbjwGkVYAJUq5jEkfZ",
  "key16": "64DWh3eaTvoXfYsYqjbRF7k6pA3ffKP84pqM7xErSjgSgpdLNViYfkQMpsLuCu4vJ24wsJU5UT6eFC75FbTMCDDh",
  "key17": "2BtPbu1AUSSyaVM5wnwcbsN3B3YHPZoYU3bQjMGyMSpANmkwBMhi2dgLx25hS6NyNmCwzQSxrs8UAJjjb4tvMKip",
  "key18": "5GysQvTSrs6NekPfp71hS1mLisFZ7JLzdSvtJwY7BTQsYNavQfAjSxWLYpZfjtX8pyZVp6yEKyWhmyNuMjWxtUTs",
  "key19": "4miaqkqVDcvjuNDAfq4iqV2qN9mQVPgbYRk3ozQ7aeSCRkWkNwAHrif9hW14SaXBNQE9HkTguPL9BktywUYkYpHM",
  "key20": "3cUfKgeki1d3UmAqcueBvMqFB1VLDY328hEhJwhqLdj3LjU7dNYA2S7Aex16psU19r8YFg8c1q7LroGPDnJh9H88",
  "key21": "NYWujMnE5XgNMzy48rXLdFy5F8FEp3tBGQkBgoX1GnGX18H3kSRTcNb37aNgjSfDw4GatsVKeDBgCXFDBu12AcZ",
  "key22": "m4RfCkvTUYrkZ95GK1C6KhCb6n7Jucpw99chgkm4jkRYVcJA72zJ683bSN8WXDVnrQBpg3Qan3ANHyqAv2uAW2K",
  "key23": "43QQiKq12rvSxVFWHFuqZFmrQCoEFq3SyUdJkZt3SGCaDQShWBnr1C6x3cwLwFCbrzHXYbeLvH61hsP4RZDfgqFD",
  "key24": "5n3hULnSWsdkCjcSRRCgobw9Q967beHc7JoWACwDmZmsEHcqFfpeRExjX64oPtrF6sBnsf7HCNVxTEgUh7p7f3s2",
  "key25": "2ZR6WFNgfVf5pWMH8taBYeH37hA7y3duq5jQY3a7KqohDJvGwpWquLLWiF2VGN85F4aCDUYM1n5wyRbydtjsgUo5"
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
