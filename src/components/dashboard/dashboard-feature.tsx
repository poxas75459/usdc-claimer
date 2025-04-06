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
    "5BvvT3akEvck4rWZk4JndqETQcneYeKzEYFhJvskhRyz3R5VdZkoGjBmxQDxLD8nAzKjssVwqimYYDLnRPkK2a1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3brjA4TGrQDijtrTgK9Vd4bqKkA4kGcd2zPigQRFpAac3wPuspuKfqNAco6PhyX2Y6HnDk17Pq2t9au4NGDh96n5",
  "key1": "3scV3sQT6Nntpr7sFgSDD995tyvvJaRC3tHAwt5hGoSBpYdVeuFrFbFHLmAUmY81zKBGnaNKGCQZJhk1TtpSTZnE",
  "key2": "L257xLawJT6zpppce5SvU1tZKZ88HPpM6jRbx98kfLvpJREyrKYqJhoGY9Yg8L7xVnBdFdivogVyygdkZ7vtWEX",
  "key3": "3vREy9tfUKsr8nFSJHqVAvbCvN4iJ3uYSATWcTva13U3YgMQ7q79i7qyRswhNGLG7DozQU3RLy3WZj6xWDST6Zc6",
  "key4": "5D5pNeq3wFxApA1pfoyntVuXrpB19MrE9cKnHkCUG4P3HDKxvBZASE8f4qF2JvaH1o8mLo8FF2RMfSt9CwADUpLU",
  "key5": "3bbqsQUyZQfyvGYUZ5J3UpRidCKzdEBiLxrePrBHE1JK6rVkGGMKmjifqAgocYH5kFPDdREL3saerK1Pqu2m6rvg",
  "key6": "2CTt9S4SwHq43af8yUi5A2k1z4xE3Zr4TeL9kZ5yCL4ZPXsF2yJm14hRAsQR2rfdYzSLKaimtPRsiccBQxLzh1uz",
  "key7": "5kSSMPwCg52ejsNk7jPQZjEhnKYU2DCATvRGXCB4hHXz6s9bJcabi3627Y8y6uhahoEuqHm5221ZcNKxMCbJtKqD",
  "key8": "62u9rExfvP8Kzz24pJnWdHXnam9JTV6VYFVDR6Pj9ruM6igy5iEXNmvSAbaZ35VaEo53n3dm3VcuAKEnPK4DmnYq",
  "key9": "b4oDAiuDEEF5t8BRXFHfWJqh34dMr5Vf7zSkVLaMHg7McAsyTCSZLBDauGEt6MfGhGKjQZMNndMeb2CZK27PhHU",
  "key10": "5z6dTCei7ZT4TMfTDT4tVmVyipyfzGvvn1SCttMxR4MXEyqySvmn52LxFLrJtm4XBjS8iDXNtJStmaij8epsGC3U",
  "key11": "2EbUtrzfEoCdXaexaX8s14bjDqW63Z38crUd1Z2PKzLg3DKEBW9HHAavJQ7B19M5ugrRXaXsoo27x2r9nmVg4f8g",
  "key12": "5J9xZgBWxJYvJrDpvR8oorSz1nzAY9dXoxmWKPxdeoZpi5cETeR13jgU3mck79AhokGagZjRRhsCVsnSKave7zdC",
  "key13": "K77wRAtVLKrD65Tm2JUxGgqnFrcTe9zY2bn6E14LQCUrD8pjiXJj1Nitg5GvAXqxaQTqAechnZay8YbDtdx4dLV",
  "key14": "9At6coezuungH4JrdaEztfxDqMWpbcf1PJEktUHwuXKmuJ4qZ87fg1PApxJhyzCLe76UZioWEP8HNgEHL7XQpkk",
  "key15": "FbDboN6x9UvNroZZx4t8acdEdTektqV3MswjEhL2tHiPNY75AR5QxRN3rPejxaterXqFNa8oC3JxhdeiJeebRhb",
  "key16": "25vTQDEVu62pGjcEwS8wZJRbj6fKbhN4pbSokjNm7LCj8s5YegqvU1AWHMRxHyXZWypTBn4QLdQnisAkR4YnwZxb",
  "key17": "39XTMWHbX6RfVeqF8s3Mu1po2T17JhkSxs7ndJRqnEC184WeFRJgPc8u2g9uLvHW72yAURJucJJvte9YLLLSvshV",
  "key18": "2RF4q7FxHm6Kt4b7WtcR7PCvv7dV7xxkhDgRFV3Pce9LsnXYLBZvifY3Y3owLi5Wh3nB4H25buw36g34CCrNCzMw",
  "key19": "4JrPtiJ3dYhfYJCGn1CtTn5fe3FiXUkae2QsErXshdzkSPsj2XdpL7SPsUiVEUctHXY8CsRxnEqngjXdhXCtonYY",
  "key20": "4nbCPsaVzzgnDe6EChaUrL92HdC2wcVpenyaQ6t95tofGfBkjr6eeJ8y52hgYjf6g2q4AkpGfWKkhJUa6ptRia41",
  "key21": "5FkxRxEMaodJGvVEMdcZS26D7BETcNs1woWuQrzepDam5wATvrV96cPacz4yVj5hkoEXjwZeZ821zaE8TXN3WaFN",
  "key22": "544psdj5b2p7UK4wgupZYxKKTnRVW1bBhSYiu9Hsuapnw5kNWgAak6MRFoeQ76LiBiT8LrfJJJRH1eaWhCV7uxGC",
  "key23": "5c7JuuyDnJSBwDyMFyXgz8YV9ibxudsVzP3UniR1cjumMDTTP3op3QWkxFz3D1TJpbi7TuzqcpCHzbSu61CQK8qy",
  "key24": "2MuY8jZHc7YwhjDF1D8JSYsbrCrit8H8AkQPfwsyPd6G4MnBaXi9KeE945SycWXB7gfwP7wGHXkXt8jNQGzAraz9",
  "key25": "UkTtNoMhAUA3NnM4PVCh7gEeQiCxfos3fqVQVqMFH6Yqn8FwGg2LR9SEyPGiKmaTgiiLYBhZR6LVtzQ4GKHyRZW",
  "key26": "49qWSGVNaRgEweLRrGKuQxnpWau4y4KoeK2guEPtqSBuLpgj4XdemLVmWqvS8kLq8zcEzFL3Csc2MRPVrq5pojAR",
  "key27": "5h3xrtBKLUqkRNRshAkJZRiU1qS2vpZ3S86ByfqSgf9JudRASjrCBFoLyn1fVx8hBcp55EQ2n3XekNPwSWcANfEo",
  "key28": "3mxy4NEUfVz8YzYV5vjiTyaZsd6b6hXh7e9UJdaKJQBSMVXTMoYb2eqK7HfZYAG1furtXcCswZqz9SCfuhNRfCsU",
  "key29": "2q6q7cT2KF9qoVcEn9S9zYRYhkv6ss6Mn3JmNrURaLDvK76S5UhJE73urWAxSxPYpcJUGLecGoDVvC1sfdvHQt7G",
  "key30": "5Spo5GpchzGbL1iSnLpTCoAFzAmVRp83etqDswnQ1W3yXdDgyxRbbyVTMV9QCXHXnMdUPmbTfE37dqZBuZFc3ZPS",
  "key31": "5AvEudPGN2cHsTSP8R1uS7in7hL9e3HS145BNxpF1Ppqp62v4WDgnj2KGs8gd18cYMBM2gAcDZrKjLRwtBwtpcJ4",
  "key32": "2wwzrMMi6ykiEEGaEJzZrh7s2aNmcDcScmu6G1tjvWXSTN1CC1ZiPGw9VeCf1eRRXVcjsd5toDM7jSQpLuDWjjnL",
  "key33": "2ts5b9X1ZuGVfjLwaCpiKLLuAYh21Xi3fe7CK3egCSoyyj1Hh6Jj4jd48X7VnuQjTAkauXFRjpWp9ZYQWsP66QD8",
  "key34": "2SATMvVuRRsJctEsenqnxaCyPDzaXWtaDb824jsXCB268tVisHXJM98cbv4bbYNPhng4oZRMheXN6QErmk7tfctx",
  "key35": "4DHxWEgC6ySoLFcFo9Z4zbzmRtZn62jjWb1JxPsb6cSPzVD37ZNPiyuxCrcHFpbon1m23YUWFpRgJqgknJme3f3t",
  "key36": "3t5hWbLrLcJA9wQ5NtN3m9sfaHPqwoqjVxaTEQ8KX8Yoyw7UEVVcgPZSYntaauGM5dh1LkMCNyFXkQPxaxX4srbk",
  "key37": "4KkqfMqftLQSjUkT9zqyDK6JnyMjZQGhgDhVxUjXpEDTSj388ZkjZ3VCbry3wE3rCtdcGjvfHShkrnExvYBGv4xY",
  "key38": "5f4r4JBVhLKJ5J1FXtoUgPvKkNUBr5MbbbD46F1aRZWDVwaGFntoUs7exjtshf9RtuRphKC4QyrTiSQYyXm8VjrM",
  "key39": "5bG1a5GrTNupwRqnDvRs3V2QFy7SmfQ7hLorucgy6SQ1uktQ85stDEk4Zr6BjrCKWQKXVBn7fbqdQBeLa6RS7VT4",
  "key40": "4zgahfPRnHacGCcTWEhva1JU1N3TjktsDzAAziqA2gPP4ffR5fSppL4PxUtBixtebQYnauNvRNkGePoiAZTaoo2B",
  "key41": "5FYDTiWH4kHNiUqcWrbxxHpXFP6nws4RTdS2QJEjEEKrCMvJRQX2ihfShMoEpmYxcVkR5RJKYaQRGDV5mi4s2rD1",
  "key42": "2vb4dwXmHDqWS7oFjJEpaLgsTmNRCnu5MnTJ5FRCfPT9ihZxkE9z6M1vibTj7op44q4Q3sx6mXGk22m6xaKxX5Jh",
  "key43": "3ujWF97mhZfdotPnSrG7YHbTmXbsygJ2FnJFPhf9MFwD6G9AZAKp6fHhtcq2WKMsGJqu5j51rU7K6Hfxw7TBzED3",
  "key44": "NCQMqJ3W4yckDnVF74hnnNuj8XYKcGCCEcYwW1yAQxdRAAHZqM6tzxEfyKRj3rB9UNeQAhSqYCR22jm16MYxM3B",
  "key45": "ZM3WTeQnxPrKxoRLQR2kdX6PnoePB5nshyGX5cd1cVzWoqxMuW6uTeEznBems15FL2MCXgwT7zRgTzgZYQaoEPK",
  "key46": "KdwyfuVpPJqKVPSJmUTmbB8vBN2oEAPHwGVwbRNW7bmbDfVcmMF3kHiQPXPGtvaVaJ8xCA3ScYTpjwNhNZgmNWC"
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
