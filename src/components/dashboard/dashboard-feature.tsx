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
    "4TTSdxwE15WKNhF7K733kDz15LqaXxtXAVwmoWM9gL46LXbdVSoFj1XYF3fByatMKezJNJfdiqYwsYihTAhb61MC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLV3qps8ZvDp2yBQ5Jey9boa6XevCDpGLQj9VWdSCGhufHHvjtBEeZFcJP1ZNaXqxaBTAp8B3mVLa5X8BNdJZW3",
  "key1": "5eLUqB1YErykBcuvrHSQRuBDveuBaatZBqtca3Q6sy8JcYa5exwH5JLLoemon1mn4EgWhTA7P4fgt33ZNtD1j7sJ",
  "key2": "4KJ73HoM7NkybxEZ9MifgCGAoLKF6h54oyrWBZYU4dJvdqsAEf1PA1QLdPLZHTuK8ZjktB6KchARJmnev1nq24iP",
  "key3": "3sJ4uTgw66N8yJU81f8TPhtEpC5RpxsExi6strVYKSQdonpJKxRWXnWNphLX8mmXLn9ULnUbtUpBVuqDfFiaUmCB",
  "key4": "3bYMcRYvqh9mGUdhWDNATdVo1vsyXHznwPEYkCy4kW9h4NWyp7vufNiGRtcVxZz7tTZwXPSg2wJpNTiPcSC4oeUH",
  "key5": "5Q8faGQ2ETCNM3qV3afGYW1g8bzDS4GaBCiF9RuAXjedxCgRZsnWBmBfD2cciGYynqLJWzfZ5zpnQoh5KigwUagJ",
  "key6": "3zV3FQqqHc93EV1fRSbK4uh7hGLbd75Ahx6tjJWqKEz7jKKEtnQ2PRmXCT5J7TefgNsFCQBipqhCqJ1qV6dPzTnc",
  "key7": "3u51b9q5uryEkdUNnwgRJyiL2xR3DPbMjBXGhcvdTmnV3Db8CsU8d8Rk4J2HbDspgzmHk94Qbz9Zyufbec6ud6Pq",
  "key8": "4BRdf5Dn8g6yPMVgdGUvUDjKfZf3srANvFjQ6iGMa6t1RfMirMx93iQsk1Mj5enizeP8NjxKXAHXkipzKFeXk1nn",
  "key9": "4AKo5byqKec7dWh8tmFTTMvvmVWGkVKSKTkBKXni2wk5DR9CT97yENVxcCnFGAmQ2NssWiU8Svn6LRwLUp7N5BeL",
  "key10": "122FWC8dUfnn5LztEX3ogEajZnaWe1NaHSvfN3QKFGNiDvNN1twv6JDemCRZd6KR2LfSeXsuWXoDNoaq5JtZN4hB",
  "key11": "2pmJ8Pd3CnjSDBXMjWH5NK21cxijUSokF8tfxvjmZqAwqnakXY3F5xvPpgUQRLJsExTAL8JKYcinVSgTokjZgZFm",
  "key12": "42krtgGR3kTQ1TsCyKeGBq9byL5ShEgL3spjEYpxfqHAQz9eX9rYoPU8U8pC34dfoizd7dqiBEfQb5d5MPZF8L3D",
  "key13": "58pHzpmsrsTNpD27qQejszxq7BLB4ZWCwLbMhErqXehx2iLkaarRU8ikFQB3xszyknY45wAL53zwn48K18JZDLtT",
  "key14": "2kfF3NnFPEkCoveb5UAgkrLA4xcRzsHJGrHjqzjCwXXaCwQ21kt7jfa7RgaWgLSFr48GfiNwGGuXx4pmva8KWtYm",
  "key15": "5C3aKj4LpSAxpkN58zMcy1Fy7cwak12Th3KSGXhTYWcwvL6qXY9tEtXS4pVsLyFtT3M25z8q2Bj7YozdhbfSdRC9",
  "key16": "4FdCBn9iLWpS3h9HXq3FCHh369tKpjrcR3wHAHjkeYYae3YkGT8SE6emouMigtG7cufBMz2jErpeQjQfwEZc5ZeK",
  "key17": "2g9vYjZfpqAtPuWWFUowucDaHhxtsseN5a3yW6jcGjMqQQUCsf3PHwfiLpDau3KHq7mvqevD5TvSx6YqsXpQVmzq",
  "key18": "5uHzU9p7jeAL1HiTt9dd7UdksdRrDqEKorN65Nsu28oUzBVLXSMiRbDnzMV5oGPkib19BMENeUFZKCNL2YuntQt",
  "key19": "2Xjs83DzuxdFRxVTeje8BK44Kd33wWWoMBfeY2LkHgiRjgzB5UQnADawdqPjNWCSuB43gGLDbTGpwYGqfTXufZv5",
  "key20": "YFWy7ZJuURjwGxXR5g8oYgWxX3p9FkoDde4GWEsx4r9H7sUmdTDrRXMG3EjP6xBa3vpZ2qFDn7YrhVEDxdt3C28",
  "key21": "3JCfd3Jcb3sQsAtJBaEnan4wqBq9mgYmNpZChnQco6f9E8Kw5Mzr3pUcNvANei7TvNLnMEBHupudyruPeJbmquMp",
  "key22": "2UMytxBsTvhamTdsQb8eVvYcQ8WPQNAZ8EHtAQxgHtEMGTE5wB9bARKpgBNYw4XUdTtxVKfiYZQWGJCNzphKe1Yn",
  "key23": "2ZgA1xqnYzaA7B5KsLr9NGnnxZMmgmZCGmESESu88xobsXyNsXCfDPURb76fMMWyh7yk3SWFHkcPJu9i51f4LER7",
  "key24": "3yHa3h4RgMNPP7iZQ6tSnMxDpXwBGDqCkKykNW3xT7j14G4pgAHrjBXAX1AzJYVeu5cw2KEdxYzqJEyqJTeSUkgK",
  "key25": "65S4TxwREL9TjkvrVHTcc3dDmimTWwCh5WyTPZ933eck7jHXQ3T2GS4CfH4HuARjNQbLNttwgJgagZJPstZRytL3",
  "key26": "WTR22WBbWeaoYzniEWH6fPqoGG3kcMvhF1DwvdhBwH1kKN6HUXyQwuKdLngjbXsqjZkbgUQnpp3fkSE4KWvfgPB",
  "key27": "2RdLC8H6AFZZxq6cok7F7L6SpY6NPGVFA8wqWDzPuChuX24qFZGDhLFZDXHcpqgFWa2AN1T1r22qQdC1eWrGrsAq",
  "key28": "7hC6h4Av7FdWQyJF5x2pTAX6ZNFkfFwssCH7bRuBPAnvZVjX1aJVVsqMrtXMbZtZ7Xh9n7VPxHcbSYxgVYh8wPw",
  "key29": "2hLkvn5XaYzoXQJRNRJ4A5NXDZJaEcCyUfNjMQd48HekaUNaPdahjrqA6bZwc7u6q7rfFMo4ueSBu19hjTxuwhwk",
  "key30": "5Ncrzp5Cu8qAejpviK4EDBfD127fp7t2bDy1nHFXpMLVaFJiVfvfscdjKuovdqsQehmKozCtK1ueRaHiFC9Y1FWA",
  "key31": "5Jcve6bSo9tfFkdC8hkXnY2rEpvsCSprSUz898uA6SAyrP1oKd9JxWufKZFa9QRPYkQpocSeAfrFj5rgGjDcPw2A",
  "key32": "2PWYLsTqXJJYowkQemejkjrY2nmbbH8rv8hTkRKnpXfS4NHDQUnCHCCwUt4VLEd4j55hN34JSqdVEH6753SByLVm",
  "key33": "3bmtcVExJQEmTyYrcTTAVhWSDpm4Qqsm1eXGAbJpUNBgeb7UubvD3RLXuwVCevo9Z93MVkYMLvD6kZuaTvVCAXBm",
  "key34": "emAPV7M6AB1Q4RZvtjPhPWPgmtqDP11hFyURYBE9YcMm4thAtCBVXFEvxB3ja8Rt9KbL7dXhy6vY3S6886ZcZ97",
  "key35": "2j3p34Hquaw3jLi2J4hu4NAQ7RvUGGPxLLvCeReBa2dobkpirreexcwU19mi53A16ntxFgS4vtQbfq6AM78dCUvW",
  "key36": "52Gq982UJwtHELPMrJ6ws7DRoGPtutqdRjpD1N1o4KfDykhWwpnCKCxoUJnXcC2ToZs67jrP5PiKMgXCLNFti18E",
  "key37": "51YzsFaJay8txyEUWkk5cvQwZkTjCxntGyA54yCqRzvyjsW5STszSFauRYZjyu5nYJgHQtE3pEbpHVaDMqGnLNCb",
  "key38": "519PjQpjPX6TXL9kmk2NA4cREson7TPSyqp4sUEKBFsQD586AvWTzdQScXLj1VGKcqK4ncavKoEKE2aoiz863jR2",
  "key39": "4YJTvK5p7VpibC51FA1ytcUszBjmSrwaJ6KsHcDzDU7DhF8x1ARKxKcHePb5xSoQHpCsjtiUrHNZrAnNHWPGo8Hc",
  "key40": "4fgJ5Vz2wCTVeXFeQagsqb3pGs4JoWUEJbv821zRGWt6BztBAfneBh9f1fZgjzwp94AQso62xHhTqtSCDimcgMY4"
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
