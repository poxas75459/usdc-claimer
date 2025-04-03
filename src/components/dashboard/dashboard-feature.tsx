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
    "2THHmcUsScDNShYHZsnzsajNinf6mEyUQRUqHaSZf1yEjnB5nCjLXmNq8jU9ooTFrWYYV7sdmvcL4J1Wh1VREHNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgVSAaLBm9MUe6Mb2FjzpjRWyaZNQ3MfPtP7euNyo43RHNtDx17TQeLN5yvcaJXDaqtnYCEA4CaiDiKXeuAw7ij",
  "key1": "3p6vvRwCf3iusWNtvpdVg9R6nJoRnaZZGvF9A4yMzP5LUPfV8nRiD3xmyyHjP2dxEJtujYm4GgoEYJG4v4Gctmtr",
  "key2": "21wJSsJBQrGyD7eEQzr43PW7zXZBgaY5J8ipiPc6dd8B9Ff8Lh5g58LMkoMtBUUQKHcxsiTySqRBSs8GeEghLZSt",
  "key3": "2hov1TpkEMbNnp2MdncRL1Wj5gzXPFALkgznmTBRJ4s5g7qzUvwm5AxQrBJREcnf49hWpWT1VpnziQHKNzo9pTNW",
  "key4": "DArS27rJWbGjA9M9bNvYGBA8vvuVcun2xcPguC2jrvgq8H1UqfY5LMiJiskEG43ZwboEmeLHuRUSxZd9DwptsfQ",
  "key5": "VfJu9kkHY51yKufMFcXNFRLniLVFGfBNH5vo6USxhKWpFEHo5aYgV7VXnS5meQYf7nJ4XqecjfxmKbTsKGXGveN",
  "key6": "4T96erx5Kxunkec9AbHX54SjXpfvMp1VQFKFJPuN9zDahN3eL9WWgDQJb148gBy3hFbaKm4NRTXKxqWSbkyeLY2Y",
  "key7": "DesDCPkQEsnpNVSeRfFz9L8mhUFor5RBPV9aYmn1pCHMAWFHGczrwAbQ6eRnDBxCoraVZfHFbfaPAYDXRz2oXVE",
  "key8": "5xLv3booFLNipXewbJZaUeegAyKRf6RdHJbCzbGgWCDNY5v74if5YdMtLrYKdfowegeyVnntUwiBvFwCSdoFec2e",
  "key9": "5yjn3gHHcj6dnmp7zZDkGrU24kfNDdXmxC2azF4fuFoQKxDu1ALEFGqk9TUDBAWD82PMaDMEjSNr7XcpKrA1wPLc",
  "key10": "2sEXsZLgSi6sgcxujkS9zSYo81rNoyFVE33W7cNvdvSbQkgdgEBqjoBtD1JWNjz8WeAqsuzenquvYKRPie3v4VGe",
  "key11": "dhaAfg8nwMQzwAPwNNB6vosGGb1A1sxSHJHNMaF6ijLeNAQKQTFKkjMvBmz6TwrtKdXoSwfXAay1D2frTFrRQAd",
  "key12": "3o66coCGLhELSvibtt8a3PQqEJzjGXX4Ycr3aKQXn86bfr54WtFp7cxQNfHHEs3SaFtU9cr8kbsRELEb6jRRGeVy",
  "key13": "2piXTwcYE4XCrgPQwR3zw4QUMpNsJxFCrKPmVVLdprE9tjoNALHNiyrXfbjL3AkE6pdUbPRYN4Pbt1sHYXfdjT7B",
  "key14": "5pM4kfNGiVwtxmYRrG5nHHa3yiXfrg6y4iQfTnZGRShK1pc5aah7bkYqDRjRRaLtPTHVGR8HgWbrmrWR6GZdr9u7",
  "key15": "5us3rqV3w8G33r2cBqgjEuCZNfn4B5cMxiG8vPYH5ZCudF672GQVMtaK7AsQnQf2ikUJDWcR6aVGYbCxdLyBgUAF",
  "key16": "31qfAQ7tkynGFTFfVJ6a3EffRVRMJ868NtJhqEZc3XG5hvREgm6GNnwY3VozrsVQnXHqPZutsoTUobBQB6dHe4jT",
  "key17": "qbtBsVmuMykhUWDpieJJ45RC76GrNBBt1sScvm2avCNBhTFShiTM69xAGB7egpTZg5zSiKq5nJMg56mncZuGs6Z",
  "key18": "cMuRehGU6bssie7aJiUQzwH2F1xCaqjr3rGNMJgACbe5FmMfdJDEKjXm4GMoXSpZDW3Gqiu4vzpLXaEycBPPze1",
  "key19": "5AP43f4UxAc2M189BVT74gRHW9aVEQhtNhDDK4JeChEg88uiwvGFepkXjFC3iU3YxxYt9KnBKvrGDAMxBHfQ27zZ",
  "key20": "czJyZYV5EPMLvqoDXH6KJR4yPuP7GNnqjk4J9Mkkop61XhRoekViVn2AGGmQ44oww3sxN145F87undcoAyBn3V3",
  "key21": "2QxvQGPrU84CooTkz2VX3PmGF5tXatwGCPuDQWxgrErYiTiyxV94FNrgBj9wYTYzoeahZCuuAnhBJDV9jp9vyDHZ",
  "key22": "3TR1cVkjC3L2WNoT9gy3pUMKdX5pGGn2ctD5SUbgzCCsVmnK1CUcnwvNkQDck4EJRVCAufQJrKGm3oVXkqjcqDY5",
  "key23": "4KHQc2Ve5MvYKKtYa97BACrLprM5C5Vdw7KhXPVp95QMfYwgeh2RxS1zScPbRyxCnWcmhvsBUSvWDnZSteUvTLT9",
  "key24": "5YKCKK9WGPqacx97urX9qV9yX7rDH73g41AgyTZDbKtkUn526HBG6iELiERUcCfZgeX5kUgSRMJC4omdVeGcVS2N",
  "key25": "5pAWFb7m1CpvyiWhmhFD6L3pZhciNFPqhtxBbWsfT7Yjxs3M44vEZBast3ZaJV1hQcmUgkuoXHdk6KSaw1TCwCcY",
  "key26": "4ZTsgankCAZ1VHNJsU4vShDeF6pUKxPWm1M9o2ApzVL1ZGDPRXpx6qLTWuuoWE9ne3GQbxwiyvfKgA2WA6LLackA"
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
