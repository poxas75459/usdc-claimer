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
    "2NChxxBqN1VbytJjs1uBu1TvKE3JkWtUmzR3rRwkxvudvTeNZkegcy4faSRmbHnVS8bJPT7PtAtyg5A3jdREiM1h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bAaZmn4SYUiREbFe4jRyec85MfpMBTVH7L1JSK4QefbGKu9UWSuvTcayRFJbGfEQoGnXZeBLy7JpQGLDqbiqd1R",
  "key1": "65o4u5dKF1ey8tLFuB13q9jd5Mo6WY4tiJWKb1a9QLJXNqQYV9WJrEcbEudkmcckF2oqPShtze88vEKTBuKRmH9g",
  "key2": "49ndtn5nQ3RXZaDCRwis7qVfrRqtHkTytBHEcxoEwLAkHvfTybqXZGNfyHtG6YVRManXhCPXBcvNiGyJpPZFZiFm",
  "key3": "3BvFsDMheGZd6rVsPCxzrKVyFHjdar9LXa7jrDXJ1UBtzikMqNNZFkUJp9s8vAgxWuzr3r3QHS4KpgeRE6PiTHro",
  "key4": "46oVP7eyKtb6xfSdFMdpXjGLPcGLnkp39ar2RRUj5fg9bPajQqb776TxYB7umiaayS637aNS66nhvZ5qSUTeK39x",
  "key5": "41i3EuUjXhRMStSC3wMRDQApVitT5exZNyBfRg47WQEcrYSGNmWmagMcfoQHExachvPhd1JfESqu5kKL7EyCgG6w",
  "key6": "3BJpeARqmXjKLfU9F9akCb3euGEvXigti4mhuifqrNLQUXseBGsmGszzFfGfB7seSjDfTF5z29zCgxkiaJa6Jqgk",
  "key7": "MBJ5RxChBdCfMeJXWB4NyKJRcuQjUF4GHvvV3SauXsZf5ULAgrcAM88WYT4cNe6N8nFXRYGHjWxdpcRBp1Pzick",
  "key8": "2Fr3TBwfXyDthxU1oBjd31ctwh59NEQZi5STkqskPZfSomdmyezgTNYDYg7QKpU48n1ZJpFik4nTxsDZgHf9pJtm",
  "key9": "3PCRG7FUPHVoDEz6ATq64BfCAkFtX7uLEmMm315yR8BTB6etw5Uo87qYzq5svBrL9vx99UTJfXQeTcAJyMiaqiuw",
  "key10": "2vhuQkFzePzigUroA3kD1bv2unKooBdmpEcXaY2d8j1rzvsDsgj1uQLJJq4wNasMkqc9MLzyHTi59jtMexS8Gds7",
  "key11": "45LNRvpQ6CyCZDJRqjLXD4XXJPwmuLmkPNa7hFvKCj11UT8jhETfymeHxSA5MwYEQDdwRVMWgFr4Qv8zpnQvkyRD",
  "key12": "511Aqg5rVSH3yFe8actw1AAj6PLhiWhWV3VLBZPHpmtgGP3uQfv7guxtebbsdRgJtDrKKun8Tf3v1Nk6rTimwodC",
  "key13": "5axEBGvWhdaD7y2w2USBMm9SFdeJnAwLmoUsmR2xwzPCEDNTnn2B874NJf1ac4A5ZTJ1aSMWDeGMRBcJyHnzzNWQ",
  "key14": "21LGtAT7w36gu2yuSKrsq4ahpGdZ3jDy6mF2bgRCyV8YQRibRozo34gwecFwVPhy3nrNLkLHFuAPpf4MyewwZZoZ",
  "key15": "NpQWqJoSMnm1hw679zGu7SkTHptYgEUV4yv65r5nLHV4xzLA7iA65cuCajZK6doRVdKiDonquBvwN7juMde9ZvN",
  "key16": "5vsSjgZM6mzZkN76KYePb43pnBMtDKmehUiHf1co8uaJXayMGtoKPcFUzBCQHCmFLYoz8orHB3VQGyTZTBYQutXg",
  "key17": "5A2cSuins93WAGT4c7ABacEPdRaWSDtn41fG6bMKf4ZrZtTBNuG5VU22JAFMx9t1mGJFvMbfgM5gxn3NaAWwozRY",
  "key18": "4tVX6XSxdHeqmX5QbyYS9cLdAsWxJEMdos3onjaCstpjXhPh7qtWuAb4LdGKAGpXY1H9p6PyT2jdqGijHRyPZVA",
  "key19": "3Vzv5L71ntfPEQvn2nzjenrJJz6gXa8aaohFEd5uzeJv35ZaDjCdYvQibb8VUcbAo4cVtTV97TA7V29CtsUpuXqn",
  "key20": "2GVmEpJZtkg15PC9ei56TkGN5tDnjmQG7R9ZMtgLufwNzTPZXqBD1X22p8umWyMbEZaqQRVsQSZZd5qSixrmFHgD",
  "key21": "YPkXryEnzEGR1toMReu69in5xT8tPtNahoer4mEdwZSwCm18A9ZTLBurL7AxLjf1ird8m7xAX54CbEajCe88tWz",
  "key22": "53LSk7ef1QFTyHnBnGJHADR8YQadJyJC6fdmG4LJmEbAEtvNGycS6FTfXbGd3dk7egdhGVPvwvzeg5tiydugPV69",
  "key23": "4HBmDsTR5U6Nyw1TQPAv7qBh7zFLEmmn1bCfZ53gnLN8Z6TSRy84wVPKxNdpKDgTy2pooJEHPLCVmAMMTj8govq4",
  "key24": "5BjxCXEMo9N4UcHfsgQGmHdeNDVUjKFn97ypB31qHiVWXduNq964PCmg4a1UaqeUGmkTZks8EsNgxuooHY7Lidxf",
  "key25": "4Gzm31T67RzvRw9WEMb2dH3MrguDgo5a3FRpst4oyppR7xGjVmJPh7HmsVxiRi99LDYhBFEi7gqnsCDKiJW1g1DK",
  "key26": "4Mt9E97ePyxeBM5tz5s3EoJVpxPA3LVpFD9AufBKvpqst3CgLD5hkaDkGjSNxvvcwdXPM1TL6Bg9RTwSBETLyDTp",
  "key27": "43qg3fYZNymDKPxoniDC2QkEZmEm2h2r6HbbHmFQVuxYMWd9FnBRofzzFCRs3DxM7fEMBodKs88E8rbHXipGa7b5",
  "key28": "46yjohdUeAeE1UPw7e8AkAmv4jt48K5ffVDoxfNUxHDbRBqRa3hWK4aEBA8DLxoG1QZ98TnvVUMY5rqSshPkELGP",
  "key29": "5LsF7LKwRdptaUESGdt7U2yA5f3FDhPmq22DaZNZgqPJRXBcjfD2YhFqQpBeNHY1mC53HTKXkuBjZGBqTq3HCbML"
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
