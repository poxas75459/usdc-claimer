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
    "5R7pvFRwJDWeYGkLCBkSGdis8T48VWk2rcxmHaTBwvdEoWMYA456kongg5VG4ybN2ftG5KDo24jfokmbmVuDGkLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xc1k8VfYsVgcRAgFnpE6gwKSpFKhr2YECf5W4NWdW1P3HMwMB8mActJhBAjzTHGUSXFXJC6n6tVGTZRoB4s3xNd",
  "key1": "4uDARa2eNGnbi48YVDmfAdfPsJS975eN2stPbnnXkqsHnkTFYoAQrAATr2994NRFttg2fJoVfMpDPHhBpV57B7cC",
  "key2": "2GpTZ5pdKjxRNRBWgkefVHn5Eqi8URc5vxoUCcWKoRMzWAdxc4okdkWBL2jbYe7J42oj1briGsvRdUtvb4k2uS5D",
  "key3": "3qViXdJ3vTpLrWtmcTnkbW8TgsCghY3bF9pT7WbrzLKuqNjD9JdxJPfYU9QeZqgJL8rNtfe5HK7gLhEz3nPLVhEx",
  "key4": "3dgtECwV7ZQ3GmdFx4QSzKniWTqpKVPioXNhqmApmDUEMQXXWLrR2tXctWr4korDEkAoEBTDmTbz6z8czT5TTnDs",
  "key5": "5Zycy5XeKbK9TunK8LCjakNrM4dQqxonkCXwTcdTUomkzYaCnrPbsiiVE1Zx4NLpQbToegqoKLmYxufWM3tv5X7C",
  "key6": "Bb7wW6PSLcMnVPen1aMCNsqZ28X4o3aF3TCEf5Ses1aBhMWWBvARmpvSBftaSEgqC78dyuuFPMcrvxgoFSow2ec",
  "key7": "b58Rshx6ecdnHQbdu5Y1s5GXsi8HyT1tsp2Auirgdo6kGWSq9TJifk6QckWA5A8Qex9hyK4E2S9g2sToW9umt5o",
  "key8": "2wnSE9cufGxvFLVQ5FQLdpUyCBSRBFCd7tUvhHTp5WtksZTjRyJqYm7xyd6hJ1ZA1bRfQHokwiTvzFMzUvvkw2FG",
  "key9": "2YdxihXYnAB86cd2UCN7Q5gBTDzgf6PKwmHWhnjPJH46PRjHFJ34TFDw7dYks2rdu4uNianUpMZGXUoE8NA43QUs",
  "key10": "61SnuCVjfjYWGq11UuuvSoDiS9yTAzYnZoapM5gtgCAgi482kvZxs6b33qGFPLEJyHSfGBbTedQywdnVbsPd9fsb",
  "key11": "2CgZBxfYVU2mFbQLtoNoGNohtHpJuFtn4Toi3Nnms4YvbuCFye7U3jNYpgDhTqfeW9S7wtYbq3wS7yBPfHHUg1yu",
  "key12": "5iy9659UHyu6U4KcLwp4QpSZKoXSx9mNAWkofeMGfmRe9A7RMPm3r74F4LM2uGb2sc3rYhJVFiegPFpvL1vjULPQ",
  "key13": "eyuEc3HAiw6mLBNuH41xRKz9tVBoPk3C4zXHwVN4fS9oeAKKttscmZWKZTPUuUJVjFpVH1UdwvyFJY6NSJMFUUR",
  "key14": "36ENk4FNCP5vXYQczTJi1kYtwekMqvyr1dQ1CV77UdXgQ1oWFXZhe5Gc4K4LtrosV9t2iYef6Bi1n4514soT14yv",
  "key15": "64AJ2gkaKGecbJos3U2YmKVqhtkUh5PpZJii1EBYTENKr5HLNFkL6YLt4G6iZQmD5KbxGWZSh4yXp44tYon7Nk1U",
  "key16": "5Hb4ik4gEij1319eTBxQqAVELRx7XMj9QDJKzknDwnEGDehpwVV3Tcq9vVk4geVnTVjxsRXe7dT8MoyE1Ag5ass6",
  "key17": "jniR7vbMQkjGAKbsFDmjfLjoDd1Bkv5qBaNThbRJBNyFDydQLQXp3RLQuFvwgaLNuYHsak4quDwb9zKbspFExDP",
  "key18": "28WNVutdCafyT1nCFyqNUQZECvS54bvqxzK8DCPfhVrwddXdLWAtdj7mwLvBRPogrSPDYtuMubm1WSfbk15iewj1",
  "key19": "5ArzoAwKJFYVPbqhN14qAcUDAEsHdNyZrtVs67f1fs9GEYXuTDbKsdLQb77k589KtufzihgeD53NC9KsJKfmvvom",
  "key20": "u9V8bYonkbs2Tm2oNM7PLWcerqQZdKR3ZxXmTA2rn9JLhxLiVjq2qTpq33Pt1vFhdTqA9ogshjqojpAzQTdeEsJ",
  "key21": "39Sv8ZFgR8G2Trgi5Nj24ivnNg21BKMgCQBGqD63PotN7cJm237bSPsbHqAYyqj9SM7dEKNEqDC5shGbETur789i",
  "key22": "5rC9gbDPUrZcKuDrBYsMUWDsQfit9sHrSe1pxqPBf8DmHF63dRBxNJXWRjFHztWh6Wi1dt3SXXmtRbsQwjDu7UBs",
  "key23": "449HM2a34yyk3qzo4yBjh8APQ3Tporb7jkxhEC5q5RwvxaqvZpRXUMep4NZKG6zpRFLRJRTko33JpMXUqwoabZPu",
  "key24": "4xHe4WHf1BAbWg2yLpwLMV18KP1v1kNmBPsuGjNT6nAyPnKGbZA4gBD4mJDzSEEfUc6Ma8eH2dxmhGNY7ENX7N6g",
  "key25": "3zUMvizCFiQ7hapfNeevMrV8amHXY52p4vSqcJceNwfahrVApx1E4uwBAig72U4LHdGc6xX7PJr4dfTMTuvgSoCa",
  "key26": "2jAXSETfVLsoPo7jSX96nAr6dhSWi83X14gYbJMQ5kVSg2Jgqu7PosaMpxQHNfH2D8B7zjTmuf1nNGyQEwmrtYf4",
  "key27": "3KdiM4pZvsFT9fdqm1UShF1Zs37PhpS86PDw7Mh5Yj3ZCKZscGH4Hks6PymLL3vtAcVw9bAuuh9MXXmfQMkXmMod",
  "key28": "4DhFettdj19wzHt2z2XrT3wKpMb7U91pEqDzs5fDrLnJS3hp1F1BpbWvhTEbnhHsjNSM9yqw5NBVEQz36MLZVFPW",
  "key29": "5UTRe3HjGnsyecbqvTV8RzUU3hsnb3fDLRfDqndqRLsk3Ac838zfVifRJgenh7ZrwXJC9nY628J7C5LsCZ7HDtCy",
  "key30": "5r5sXzZydDN5PAAgfDDGmEBJHGYscNs53cQeJsE3HRiQuqLJzc4xV5RXaaqE9yuYf5v5JDaPRKkJe4gXfp8ZgqV8",
  "key31": "2BLA51fyP88RdrT9VeK7JjGfoecV3PScLq1WVB4WKYCJezL8Ka7aPHUadZzbjEyS1H389h336FzUAiGc21cBNZYV"
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
