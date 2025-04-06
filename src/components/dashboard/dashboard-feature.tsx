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
    "5SeHSSERJ6SheN529s4D8jvAKZS81xvev6rzoaZzd4VHLxyER2koUYAHvbQRo54FMV7vcD4faWG9qX7j5cmwmoBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b31MB8FNCgpeMMmkvNqzfipPpn8tHCYZBd1ETWcuBV2hyHA5CF2P6Z3VVUAuMNuKraWXcwqsq83CkRgcBryXzWB",
  "key1": "PtE2VmiVQvMV4FdgD2aowyw2yGnfArdPct9SkDypWJgd585WNSHLwrtaVxHNKDo7mQnajrMHgKqMSKjNnWzNBH8",
  "key2": "5iMS3tPjJMVT5vmUjeY2V3b8y3mdTNozzjuTWkX6CPaLikwRr6Zyr2fFJrzcty9JYivFnnmaFdhrnXXTh8GcthT2",
  "key3": "29feYFAK5mfPCVVQgDvY58tphj6J853BoHA8e4E9UMW7WpJ5a4Mwd2t5gSL4UBRkFBr4kXdSq7FwVK4WaN7mrMj6",
  "key4": "kPhWF9zugEf995iamA9SyYRhXyWcVzk3uJbZ9gXwM96QVk897aiszovuGy8fuPZmvbLMqVkjXfMubyd5aNfHuKi",
  "key5": "rtyayhBZv98xavR397Kkzafkxjb5ikCmeF55FDGph5TFSStRT4bMJdcZHEnyUTp8bJZQy3EMaw5uTF345A622UG",
  "key6": "37KDHQtBF5K616gdV41UryVKgs6ZkrHmW4srv13x1fuCSRjdUpiFYyFeCVp1GFHjC4xstt7hRZE82EfBXe5pr5Hv",
  "key7": "Xq15EteiWFH14PZWu91LJSnZ7qn96LVtixVHQcqEjsr9ZA7XgcVFcp5tJDCwHpmQGrk9fWDbSUrQgFETePRK9xe",
  "key8": "5E15kFGBkhFJ73P41Pj9QZ5gkgMndJV3XnZ6qPWSyWjcGhmfTqRCKKz7t9McXSTtcbS3143kn6Yum3RvKoEjoasp",
  "key9": "2KKm6fXka3BiSxZBt8AFTTxHCXfLCPqxDjMGgTSyBiSgbrzx8msrr8E4dfwD4ayL4oNVidrjnJZpYkH8J4WiK3GH",
  "key10": "3GsRosYF8fWNtKbuFEjnLibxmQTXKreiRs4PtQVEADMz9wwxkuZVv6Hs98UxdB3yR54h3HFCTfHhsahNfJUyEiQy",
  "key11": "62ycPHhDc5AURjbdLhEihpsXCUTconZX6HyGdrX9HiwfpUj8B8gHNzqUzasLxJLf1x5vYqTZYJt8zX8JdhWSwM2T",
  "key12": "5LPZ4S7Wh4Qr8voBXDvnhNJVEbjsFFXAdFdXRw4TGYMc916oTdEa4pkhqAypmTahLESE7nR5RP1HEf98J6bJqWPn",
  "key13": "yK8AQeWNMq8eKC78e3KPgkFDtjW9iRpbkDzg129REFLpoiJPNCKuWL7JAyR3zVWDpjwJFM8QwebzRj1G528cPN7",
  "key14": "bXv9vK4X3kt8fh5tCbyZftPVDRrBJAmcKdZx9jby4Ayjrz84wEwmaG4pcPhMfcKFWYiaNwb2QQESYtWQZY9Y6Zw",
  "key15": "3hbbvxyF2wWxDx8Ut3nZEUEFgVmEkQRTmswndjoMWrnBbbGMcRTapXFKEkhjumWmnN1ZX11GFjsUwuiErbMcTh7x",
  "key16": "5DX3QZD21Giuk6jpu7FXZ2jGbTirtRWkT9CiKty74T62b5atqVMuT1nLrUC22tqCqZufm8BVSrnpY9ZVoEC4fGMz",
  "key17": "5srTCYxEVss5Esz63qFy4dXnXgzGe7NWzL1Ncr15GarFgVitT9sQb7gdVov5P8YErwirX9488iaR8Hc7X4aK8DgH",
  "key18": "Riem9MzqgmAp7KMNbC57BpJsS5fmsfGP2e6ZVGWjfAmkMUMrtwY6EPcMqF23QwH7eMpKfkUGDhodQ1K9SCsnRN7",
  "key19": "3kVoBrnPeztLKUgHa2VxL2o2EAtKLfX5R3Her46wRWKAH98eALbNk3MSFeg3JoU1DbAmJLcBVPaGLjwThrpMu5rt",
  "key20": "MiZjzp3vvdHkRaC1EFLLFAAQrmQGvsrMnVg9Q76nwjucZuMA16nPfG8wQwzBMM6hw9AyoupEcdmgNoSr1tR2xKZ",
  "key21": "5BA6dDnxQQnUbtRZ9u3jooPc8Rez7mzwjMbAaJHbbyoqSrSoqVPSfCTw4s4Mj1S6rvHavJTaSLogtWPMEjdsWTLb",
  "key22": "32Lfrao2o8mphUdpYNMUAtcp6SjTGMn4PZE4CsQFwm83AeNv7xjCxLrqQZWzpeyXc3CXsXWgUj7KnYoHhtKzuwuL",
  "key23": "5cae5d7oLtkCx6jc9J14NrCbVj9QEstvs7LMU2TwT1h4KaBjPWHs9E5shv4h6kN3fSrZ7qR494UDXD2gDD2otHG9",
  "key24": "5KN4c4AoUZaLpfFAkXVq92bi8SwdNDMk8rhrkr78aGb7WNM9Z6oN1wvDhmfBVG3xg34VPZfhdW4Lyc8AMDZ4ZDwV",
  "key25": "5GuzkhJzSu7eFAnW76jQFhg5pQzsKFatPEMAF8SEY9ur6huQ44LL3xr74jsb5zozWxiJFH8LMKHXZorAyJTGhgDJ",
  "key26": "2Wt9NPVDKUEpxxHjYEZ7HiaJVAQRarQyhSqBjM45mFNrZnvfXQWBHF3iRcfeMBTuHiYYJPNUB3Q4fkpfSjbcsRNE",
  "key27": "2XAPzBpWAkg4Tq9krAnE6inFtDRqMmvxohJY4m2q3oZ1aVFw8SHJHrNMGD9R5vqLkCRP2WqrrNERZdxh3LUEfp41",
  "key28": "29NS5WmTcpgUgGtBqZz7emSALQJYU7NcNVUPXn4sFwnjismTx345xiiaCSQo2u3hCjuUJF2NkZE5yB3zGvjJJi7R",
  "key29": "bRoxTiQaYThZ7xZxerWfH1rdVRqYJH5Bhi5RznSpQoA3T32y4EYfnMJ33fW3yBSBcmh4x4bGCWn2UunetPKuszF",
  "key30": "5jLGLzyhZnfR4qw2mSpyqGr67wrRu89ZbL71jVkAcmx6FFpbNhXsEdh1XchrrmLbBRsr7gTb3u5TJE5F31g2xrZD",
  "key31": "5RHvsbXCc3tqQzM2NCzt4LWBJs6SLehHXAMCzuLz2Vz9GRS1niikTXgsFMgyA6VSTjaTKDe34LMf6dZG3X1VXJRc",
  "key32": "ZLb7LjDPfeAiYaSdraCgV3SSj16AYMnrZ1Bs3t9rioXiJmPQUfkQmhSmDQBLAeEa2fGYHs6AxWmxwoPNjba2uyG",
  "key33": "PdGePBr927V5sH7VoAJxofJUpSqCmnjYH59AUV9NeGJaU1C8hMVXsSgSBpZ7sJaB64Ng4bzEvmgVqkr2nNCm3BA",
  "key34": "qZeVEYhSo5xjdPNe97nV9d2gNaDwdtAZ6VVX9jxz7vq48JPYQ9MunnwFozoY8w7q6k8Bugti819hn7458skX2Kg",
  "key35": "3ttWB2VKUX3Y4Kf8S9nxpWJWGxx3Bc88xxkG7Y79GHBPwQQZbHYodtjvMYD1je8HTCp6EdHCK4tsctxg98CtVisf",
  "key36": "3AxNNibuyZq2r2pVTGqAUJQ2PhX8EYSbMewGBsscgcntetZ6RUrAPxWeseFYkvpSw7diXJwiupKGBcdmB6pHFRSa",
  "key37": "3dAv5zxxKjPTFKjWqQNRsipYAkJu45DAKyLiL3QoP9QbEmCqkNAVjpbPQQywzRZnugifo8Bg2b42W5Lk83r8iuZE",
  "key38": "5wtNjquTvYvFDQidXeAi23v87CVJNVyGsCLgYigfLQdVdpritpTKbrZMpZwczfkJvWx6VRRxTQDErr6DfvTGBPss",
  "key39": "3XFnvYBmznC5Up6BdcVaLJNRmXgvDsK7xc7Lz3nRsb97keep9w1zGqgVSQUFooLtpXmeKyzWCZjxnTGxrP9gnzTb",
  "key40": "3rem2km8c59cd4Yr81zQgtscw2T4Sz15HF1oxvJ94UZqpK3pb9JGcxKXadtYqgUqb2izWfbkM2Bzw9mhqACcFTdZ",
  "key41": "4Np3y9zzp1B6sL24bLreGjGu8vsuDLKtqQKs9Lyc6mFZWsbHVS3qFNtsG6gmBSGV3Xiz1gXLHYUW1a3oAncNgxxX",
  "key42": "5nQkSECPeMBXynCzA9RfkdkowYTL5erV6Fn1ZN7Ve5D2Y5QD9WFVkAzvnKSvSczGpk84MXAjyPPxWWqUN83WXxMU",
  "key43": "4EuGHBKR1xUTaaSaGGyptASdDU8vopLWZPk5y5hBZG2FSxQ2Cb7nEFt2HK2KnnfiruP9gyBPfaeA8ASCuR83Y3Lm",
  "key44": "y411XbHxLqsY4BS61QsLd1Za6ze1eoZkPLRLHkMc4Qo65atAGrpXnAeSH34sYhncidPV49XM3FkKbffvqLsp1V7"
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
