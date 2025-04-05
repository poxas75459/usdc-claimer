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
    "4rjoV8wi1fZvfnYakzCADZy2EzAMFQy7fdkZxbN9XrLMdTg7VFGDcUt2JscihFKVjFJi2a3xiFPScdD4b5uVoiZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LV7cz63u5GMTtyQx8RWAuqG5gCRbiJVWb6jpLXbUggT8MweS7Af9MqPXyRD8cRpczrj1u9yaVBxXLn6tQTfnXB",
  "key1": "xGoYfMBvr7RxHzFnFdNUBXjVQQ149gKTj64fcjZkCNZRT5M9rCpMR2Lcx88sZv6baSDL3PpSznGcWfdWdif1pUk",
  "key2": "2NPFZkH3c5Km62rEzsWUnMwqsa3LkynVHVL6ZhTojGd2qMBpjy2VvHSmFx5XsuMFov7XLwGtF8LLkdnvW1rJKoKJ",
  "key3": "4QeV7Wa9DALyVDVMrFd3JpxBeW9Adeby6bN2uV5FbAKtbNdkYpKphDSYx94T3UAEX7V9QK5KFWEJDPyp67Wynrpy",
  "key4": "4xLNh5CrGxDJVJinqTnGFbdMuPQc46Bf3HWsMDqqaPEaikgtgxMuHVpBGH3bAabd9hu7YaPvWYd5kaa2JP9Nq6bE",
  "key5": "2G36ypBzNSdAGgu57j3GjvZA1eZXFxQyctD1Y6wGfYyQDUcDcq3xGHwSsuPF8jTALQpF6zh2rWE2ar2f53NQ6ovz",
  "key6": "bcu7VTE1LRLteEkxUmeAdBowy5ksga4nV8cMhpw4b6FVAgmMt6XG39LM45Uai9W9FuSL9Q4m1bMrELov4Hovfki",
  "key7": "3W3N7A3Er17X5po2VtCUbWbrKj47XVxvYVrsbeeD7Vusza2k4uawbRYuGEcnBjLugCiKL7tnN9G4jF8dgB4wgHry",
  "key8": "2SxKmVBTvcWcqgJHgk4esCwHFoomjyJqqLYPpgsHNAZaZXdEHeb8eFjGSXzhNiAxyZmJdRyHEPN45vn6Lq3JNsHD",
  "key9": "vdB4cbopVPFGfNTTVKQi5wuuW4YXQaeYER794X6Gxish2AKKm4HRiSdUtwFJUVJaaRSrzumPaupFNDQSjPPg8wk",
  "key10": "48hb3AEtqy4ZNSwRiuiGatshLvFdd5wtjm2wapyDVEpTTr9jAnWJ5U7RFENAXTrHy2ahFae8Gew6zmn1gVvLMFUt",
  "key11": "6DpxscFkShKUYpEwWxJZU7iFct9oP46gWyA5W9829Gpfz1qokA4X42e6VCKkDXMLwqjSvSSh4CSYsvjbt7q7y9u",
  "key12": "5fq7NWtjFBYuoiZepZPt7QeUjeyy4kTzdBR3oCD7KV4wekpTTP6AC4oWoiWwb5nQmZS8sQMaKJGr9PWPY3HRYsV9",
  "key13": "3J4TVNNSfhwC57V4mFRqt4YmEHcxWSKP8ozawYyCvZ1xF8hr1KQ68iqbnBDDTLM2AVvbiDMgEPVGGzpLZbiePiGX",
  "key14": "2pK9kHTbu1MnhbsVuXZx3BHq7CsqT9eWri9bAQmBHzkYspCbRoYa9qGgLntrce9y1PYe2FPHeyk1zcScSZvNVKKW",
  "key15": "5PDZ7XAPjctPSTM9tgdbx7WAk8NPXf1Dwg4LGp9xHqCJFvRiN1rFiWp3ohFQAoyj7YNfpoJZHvhgf5ukukP1jFeh",
  "key16": "3mW29A64h9FESQGLwwN4zZ35dXcY6LbonMGyTSDQw92rEkaSCBQje5YzoFeRP3vEUA9MGuRHWycyG4aZpCW5WcZx",
  "key17": "2mD6mpn8zpPuh8APRTYAL5wgjj11amo5ESUcngFjLQs6pGUHjofM4Y8ZEfFu5yHq7is4fVjFoQApbnCH2t1xd1DB",
  "key18": "5yKe2YvbqgrcvrKS1xqD5o5JQM1BzZaBnxJi853LTM89zm7uZBeNu5rw4x2qhpBeZMNpQeksPNi98NiWc38b76Ew",
  "key19": "4T4hqBQgzYKTrxcuty7YR5NMsc1CT8dHXXFdSvLCi2tiK6rArQ5czXPny5v9jAaTNbmd6fMMf91pCUghVnaGrngx",
  "key20": "5WQPVo3fskfnYr2iHfyM71Z91TA96T6TWnXUFhHEA5CFk7wUyLDJ73YJ5tLYQksZuFRx9fuWAL5bRhKcnP5AEq9n",
  "key21": "52UbdZwoEMAJ1vgi8p2gcWFVEwEb93Xm8itaP2dgogkTUgjqf5EHb3btbxe5yV2zXDT9rjttX6kWystbGZ98paMg",
  "key22": "3PPUV7nTLDBjXrEBr1A8AE5Y9BWeNj31x4hcp1uhDwHogGNZemsho1YNHN757j3oDb4McqT6s7585emNdkpxHzNu",
  "key23": "5speKQBivX57XGW1yTehgka79oRvGQbFNzpoBrP8apP51piXHUWJWUfJ8ktA36raEb4DCrnbdU1zmT8yF23dxbjP",
  "key24": "57ptGFbaYbFeFKQnWjDYtgAHSgbDax3AYSPdspFHUyp2cSAa3Mzg2BmBRFoeqvn1bjJaoquF7GrwgG6sFVHs7H8E",
  "key25": "3TgAWuR8idKfpvxq8QE2KY45kfCuLww9FJ8qZoFmMaHUXmeh2PJdL1twufwWCw6mExEsp8W6CYdVjEdfVEHupf5g",
  "key26": "fy4ib6e3hVDt9BLgE2CzY5TiK74CiZLtfGW5rtH7sEehf2i4haDYtvyc4wiSgV89fE8xBDKyXRm2yB6RM7ebnAc",
  "key27": "4iCaY2Ur7rpncKk8k6B8iv1JcsQazHtvwmTbWRje4JtrJxdPWa9Hko3p7c5Bs4Rc7kyg3bJsJ154U8Sse3R14QbU",
  "key28": "224KwgU4HkNvPuBxnjMMt6K3a49mAHczZ6yLXjs4CeeYkxaVzk4JSq91D3qtR5VGgCh2xwMW3xyuyPdce4aykJ6C",
  "key29": "56BCTAgErKi7T3napRvudQQNF51bAUmkq1LVsw9Ch1vvvP9128gDjZwhV6UyC4BXuT6X1umitCRkzhBYxdUXbQUV",
  "key30": "5YJa7scvZrPFLqDWKcyTSk44suVt3LVyQsqTyo6Bg9BvBN7QDMvejL6bTXhL1SU5qKYKypGK1v2mWZqgrcKNJf5A",
  "key31": "5Qo8qzeUUkk8a4hbpX57vy2kQ1J4FF4Qto56vmKr86wrGGh31swL2PUePeUxEx34F4ypPQ8oSt6HEEoCX2TieTfp",
  "key32": "3e8LFyNTWjBH7BjwaH3i3ChEbYyFWEKR1dEANmRsPYoZPEuwDw8LXXUBMAqtw85FYLajGyLkAxCTX26StPrugLoe",
  "key33": "2dCw23Azn4jrxbJZQDYVWx5McHqALoyyNJFL3J91V5BJsSfiXnwRDVKAK7uFcbzuApE2VEp5E63z9oGdwD68XBsa",
  "key34": "HKid7iQ2HYiV9N5ZT3HNuTsmvG8E5E2UeGvFHtCzkRZAazaWLTLjy6orKNRen2ekHFAM3m3dbGP9HWqCUZ6hHLk",
  "key35": "2FDx2qBULHHQQrr4wm1wpQaWJrTry3opkXTqLajZ62ThxVj8nb1YhDZda6rYA22CjDcnBE5XRdaH5dkGs3JKMauY"
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
