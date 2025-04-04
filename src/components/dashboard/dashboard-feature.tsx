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
    "2UM1nUsfxjRXFDP3gB9th1kFxy3YpbWcByKJjn8y8eub24g5Qg9QQ5AjT9gxztFVob7Ar52hWmAoKkdtpBmNqChZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRSCjcq72TRL8d2fwKoBs6btQXw3iSKXDGneRdX4RqSTZ3vudgbJZ3FoJ2H9EwrS7fTAeTxPdC3214BY7Je9j5i",
  "key1": "sQSyrq73xV9odKBSoQ7cenJV6zYo7nBSa41XvbTmKRUqR7WiWCs29mW2bgb9HwZyu668nDrkDhEVT95ZiyyLeGa",
  "key2": "J2oguLRWVGHqWeBdJUunEMhygji9J28t4WjaXSfnKNH2Qsmg9zyy2ZyzVwLvnRLTGCgdtHuy3q3s2ZkvPPRTrKa",
  "key3": "35pDSP72ckcUDrpSBded397X5JqGgboMyenVV1pX1HSTYEYQBk5QbyKP178uqVNMpPgCcrwks8dB3egCWfXtYcK",
  "key4": "5PyFLBTgAJPQt5tPEgj95HjR1NtJgBvsdTKvXmiR5vqvch7842S4pkgXnjoGpXL1VF6y4N7SbmbHkguLdnHSfbDJ",
  "key5": "3nfhJFEzcnPw9YXBzitePP4ro4rTaS5iMUYDYvEDq7MqehhxVkyk9oUo2CiUTFJGz3KE98GDEduVKPa6YqsMLuBi",
  "key6": "2nL49mavb6zVXuBtc3HxHD6iwbBboXhc8eKy73eFkjNRUkRjTej1TthBp5X3JESDr2UMuavJV6dh8EaVkw3iWLbZ",
  "key7": "5hKgibTyhjibQopePX2kS38wsZvqVf5gSEypTBBzmW9Mza4WQHegdahtv82BWRieHZz4PCgrayQdzG74qr6Kq7uE",
  "key8": "8KFqJ759SB51FkiZ5mR2USDD7ziN4m7dukZejdDXZTfhzQ9bqdz2qsr9S51aCun13JsvseiRq5gbGcykuHU9X5t",
  "key9": "4ckHc46w3v4CXYMtYvEdkXjmYkzC3bJG91LhatBHFRCSMofhZTMK5AwzzCettXuEkFkpV3tCdKDdZUvpTE2qqKfc",
  "key10": "42DJbQh265R3c2PTbahBVvbb5cbrg38q1WBazVPPuwKkjax2wEkQ44wZPEFgZZMSX3XZbixw9xrvZreP88PZurpn",
  "key11": "4G1yvzsPdfngLLZtnCamfZzw4cp2d4KWN9YtpFpkxbyh9KVUYLhmxz7CBLkkT6gA9zGUZNAJTcPgsFQym2tJH5CF",
  "key12": "4XH4W48bv8VtichKFx5wP92d64prgbaQKC1L2bTaK4sfa46JpUmWSmPSxdLSLYSgVAnzKP1KxeUFVVBWBtPHwq1z",
  "key13": "3UxdJKzJ7Tr67wq9JazYoeEY7yASa16a6L3m4U3NzppPqbCgdSgRvdK44w722VfkdeeqwfhtZmKHx6amMndzFyyK",
  "key14": "34uZiAaYs1oveVS2KSSDhSTKULatKaqRkgqSGk18ij92h5zWWZTJBQnv6JK7XHSEQ8V4B3fwXpY7uzFMEtLkPpK",
  "key15": "2SjWf8mAbHB87P7kwegTjnuLUh5SLDEYwZUHqwssiAemDqnEsZavLcxXAs6MJgJb3EUtP6vZpCiCwvh4wj7G6bNt",
  "key16": "5utzxHSMkjipu4omtPCKT79mFoGxjB3qkUnjDXjo2ynw1skBkVgtHhbiDyNmpDCaDj1rP1YwXBMcE18ReyrYkPxQ",
  "key17": "2Sj9cwHBexzomnta8yPrCDTkLGNM52potTQLqPLrueBf8h45F41r7jkB4GuEjthVGtsVjDngrDw2Sg994m1qwjxc",
  "key18": "2XYt4hb2ifNjcSduBoNZbYxCYs8xKNrXojC5NhDU3vBQPsYyawx6uUtaquuEeQY3CijRpk5hYMNpbjQn9N6AXUxh",
  "key19": "ATnssAuNN6ZsBmQCXuvveHoRDenpG3244pMaU6XMJfPdupPnN3RawcnFcrVEZiJEdPNfSzNHTeB4ambFCNmJq9X",
  "key20": "5GBEJXPHbkhrwWzphkduBUHb4Tq5yd1i8FsCxAxqGq6HXDwMqv6vFVhYMcKAiJnZgCVqQr4jaNwSw9jomtGmsduY",
  "key21": "3SDe5DSXeLv6rrVnjzeCc7gbk1sXGtBVf4WxEufL4z1GJa1vGuYt88YbfiSTMsDSTkGpXG3pVL9jXkrngoSLoSoj",
  "key22": "4iXskqeL75JnWyDYPjJn3QnanRPCuDPZgoAwnNGE8yYzDCbSoe88cd269PmvnARjgvobnu7XPSTwUDgsxBtiZ3dJ",
  "key23": "4tW2UdZhvEumkDYhUKkhLmP8j8pdQTXunX5aE7Aor5pgdgFaeBkJZ9RLhCGKuvJt33bRtF9KSzZYEMoLq4kUQatn",
  "key24": "39n7633s44Pz4xSnv5wxpZJEGJzuHEnUmPFZ2ZP6sdAt428DAcfmtSSxyGLaSqaT3eJAb6osnVP391kS5Wn3Sqrn",
  "key25": "4bgKWoQRoPdAhKqMGD9n5aZN9RWddew6xL9WZxwpRSrbP1DezQcfbYxFV3sGbyvc8fhHn986UmNJ9DWk4tifgoGe",
  "key26": "58dg8bntH3g54QzYBWzo4NghBurGmNZbL2XViS6sjBaxT7jEQQBj6DsLEtq5CD1kPQFKGkLpQq5bpjmiS1QPpv88",
  "key27": "25nrAhoWSXmi6WGk8Wx5SufaJdBtuq5z7BrVPs5B9iLPXKacErX2cYaG538FxrFT3HJ51uyf6HqbcyiNuHfsB7uu",
  "key28": "4ewnwdFPwdngjtVa6SBNienu6CLrvYooFvr9xDi45K6HzpiYd69eZbedUGtaygrz7Sr6Ls7DEqfpNrC1pjCgsV5x"
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
