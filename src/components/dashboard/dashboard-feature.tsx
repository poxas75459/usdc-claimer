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
    "3noQSBuq33n8ZHC82TZPECddHFVkTrBWGiGH5uNYe8Pii3RtwV1FgANBVZWbTcuAANbQDzhuSi7jKK6QdB8szzqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mLcDBV76TXs5W6ZTpGGS1diH8MKcPbNgJmviGSgAEUkTgTfNgEBwUZAp96q5eDQS8rrajwLjQj7R65MGXwT6H4g",
  "key1": "4gt4giFpTYJd6FFwrAZ9u42EUsG9y14ZNAgm3VFEa3esjyqzjpnw3e1KpH9qWahrmViuFxFn1ro4gHjPveCYzguf",
  "key2": "5trHLygsfUgfZ5vmETQvWhurASdetTEeFuXnpWrCTeyCvhT4FjP2aRNWbKakAef1jsAnmUtnDHvsXfuSvPjBUFbt",
  "key3": "4cwtD3eixaGyVqjcFqgvUe4PgHH7DnJGhqV2N3ubAzrFBYvD6VmaLpomsL54mGAiARDUJ9wNxzATXGUmTL6Pd86t",
  "key4": "2DnA7QMooNXGU3ddBzM7a5Ao2LGGXmYdy5qTGxJ3r1oDDtAyQixMyftEDDurB9fR2nLfo4NNMQ2AbHd2roXNeXxX",
  "key5": "4pHfQx3wMW2kcLBbpjqfu7mNkxT53gngkYbjUyNkaVpw8cL2b9Vito8gJr7ua48kwtyfKAKJCpJcJSFM1Mrmdrbk",
  "key6": "rbCzZPu5EEMXmhMC3Z5wikibNAz6eJvckYKWv9A2eZ7jPiYGmqsm58tEyCHZwZbDf1BPYKduvGg8MLDekxMaRsK",
  "key7": "5WZK5KNSZSZqGnwNJiHgUgPeep5dgeC8rHDhqLoSDydKbXVJSV2GFcHCFicHGqpTCBSzDzuicMEfugtM3hw35BFW",
  "key8": "3xWQLTyqVsacnTihhygsnN7CCNc8BFGnrCMAzCCwDazSZPMf92WTnVQ9dxpBQi2AQjEroTkn3bdB1aX5L9qLWyE9",
  "key9": "QMTTXSmfQ8MKjubQ93fpbGNfd6MdSDSojHuRkas9eS9vf7DjfB1XRgxHYmihJPBjYeTM4ZkhJtBjKh9amHZ74A1",
  "key10": "54t6GHfrNerqZo1zVAssYCXKk5e8nak2p58WwKH9BHcTonXZTnFvjNSxNnVSsUXbHgXiCmPKkakXoqz6mSjQyETK",
  "key11": "qaHFRhQ54nn3F4rJofL5Q69jxf1V92P6QjvGMHgj5FA3UUQX2BcsX6o7rDpQimzY9VgDSpfnfH6TT9E3Z2jmVRH",
  "key12": "vzq1Y96hZfzMhqxYM2zgTKcgKPV73JsbCK9yEA2TxuSgpeopjbMZ9z2j8ES8FTHupYXHwHhtVma76dKSSR3muPZ",
  "key13": "5QRhPhTKZwn8BSqqaeDAxSoRgcmfyp9yNebVdrW2kHCc6Y1c4huVQpMKxw2zoYN9hUX19GKL3aayEPzqj4qTRL7X",
  "key14": "4WZsKnSfpdpjSh16rrgsx3GWdCrXCa1Gm4iRz3cLnV9xCPTUydHMdxEp95ySZN8mQJ1ePwJnggC3dSRpohQo4Jic",
  "key15": "2Zmp8qpfrw6VRiHjJ7SSeEJfGFwQwfVQGTqmf8QTgjyt2HZ84YhwEAr5T8fw7Z3WNRTUkMCavb7kgDYJ3bm7VdVL",
  "key16": "WbvydJ1tgnbfSDMFCHPPBFPdXUC9g4sJdPfFQeujFDQ24iTRZAdfPm4ozkbJjFXRn7m6zpuMLAEv21ttFXYn4ZM",
  "key17": "5vuwvw7pDnSGLBVMoVgi1H2NWRNVyktSpiHmGvmdMR1RPB4htG9sAp3kZvWzjtnwvThopTfwLyUX6cgLxPFNe7Fz",
  "key18": "3To9Ag47vrdGBGshuThdKrfY7ot6ozWre1WM9vcE3ShnvSQQ5NNdpkRU7dD9RUwbUgPWR8TniBmGjhALMqvHXKFs",
  "key19": "5pGocvf9x35oMCBsN4j8isDecLZxzDPw3QYX5Jj3JHXHVXQss9PFivDzYDkhrpiHpr61gYGbG6LsyTp4nLq8Vt5E",
  "key20": "5xhmxz9FiTYLwe3iy7LookSj6ScyWjhXcb9gBmxJiBFdF6qGzgZxM8Xb3BVtDvDij6tZMdfq8A2FdhCeWcBspceo",
  "key21": "2s3Rwqqv9MvHurPsCvMJxcj4Uub14zZVZRPweyDAe9LXWDX8pssL9wiMfdxR16NLyuEyUmopZerzxd2v8KRErqV2",
  "key22": "4p3vEZpEd4jFJtCoWzkMnd2UJeP61LQ2QFWmoA5sgBN92oXXZTSBNHzXdKjmkRAvMUh2EhUN7so9H6sHHCbNRwVP",
  "key23": "2cXB4oEnFkUdfMsqQkFpScTgSKm5CRGg8b6rkcCEZzyQZUbRLULXrxxWp2N7xVbWbvNLk8HAP98A5fbMmzutwG1B",
  "key24": "571FXZXsTJ3qoSLRLjSZYHoGiY1dCVouRHsERmPSnw3WCMprepau8Jf4mb6EvTGQqo7t149bVyWFiAGYLcaEwWNV",
  "key25": "LndNYo8ER1HkFSYrtK1WWgNMgFnjP1Eky5FsZbdM9zBTWHdkMtKDLMUb8HCkLD1nmcu4oVeqLJSmtGm4hXvMDXp",
  "key26": "36Vmt42GAZqXMJCyuozZ7yWKeeDb21e1fV5aRyLtKet2MKASqxfpz8K6AyEcmP8hgZLjzR26F9DBwdpDN6pRxUkQ",
  "key27": "HfXXqHEfGy1S6Rk1g7wAYzVTm5o3Xsy7Hf5k4kCVTPMZ8sTg4kop3zCUwBV13rdY5B9u3hvjRKfk9pvyqD8VLqd",
  "key28": "2jgveBfrdbvQhJv8aDEzaSFfA1sgcbA1LL2kKMqZuW4seLqKvS7aLEbsaySj6pXu6XKqWWScM9hAo9n2ry8K8gkJ",
  "key29": "5aB86CkrCvxB7TkgYzTArEVy8aZ8yRreYEnJ9DCqDJP5XNu7iQnib6wppxN7ps1viZEEzHh59ToSn3Az9xuLoyCh",
  "key30": "4TJD9jGEisK4Fa42Jzrp6CkiiBXRs5gNdxS8kQcYdvb9mV2RQx8wLbhB89FC9t1mu4tANdVsThaeGgd6sSYv46pu",
  "key31": "2J6ynWzs8XMBFxhefJA7DPDeTomrBbqRZnvNBDM83ZQ33tpVMzd1rxk3SnZ4FJueveAwy734TYRerSJHPNJPMn8r",
  "key32": "ZnqKST6Nw4CaTE32rgfFK2wU5qPos2Yvr8q84eFN97ipwG8GTyDqrCFap4cH7jiC5CpRQmqWYwyvQGV4ASQSsKe",
  "key33": "5QZuZxSLgF8xmic4z7ZsK1NLCd7B7dWSjBqJeho3BoXYrPhi3Q8YrCE9SGQNJy9ScfM3QVPHuv8jpY7jv5tX76rS",
  "key34": "3A5zgrQF5mfXVESbxt9Ra1vXm3x3b8M947Bpcg3hY5bM5C91sW6zr5cGtynKpCo5dVAfjMCy69WkizcKcuaKytm",
  "key35": "2FsCS5iMxzqD4w98WYtWoG4hByn4tGH6hBvmHaPk8dwxbNM7bYsMbGyBsXqogtTXMWjGpcMYBemTpLKv2NjZvNtY",
  "key36": "HoFh1mHE2mHpNAZBivvE9ykdkBifnbHt6U2Fh3jVPJgGmkCG1a3QMNPdu4WDLnQRe4npCcKcjvQNuh6wJGvkWeF",
  "key37": "3Ty2Sq5qDN8MyYZeoRJ3Yee6nbwgCAw64x1pTZTgLhRw745KBy4MH4cxDawT4gfZHvY738D6rbZ7oHt8cYhVnGZ3",
  "key38": "4rZEPytPj5FxQTKpyVVHeQmfsAMB5Nx2W3SNknXnU1G1rPscVD713UXgyMrpMWBi1yXHvwJyEF8zLZDkVA4FWkBM",
  "key39": "2aU3eSKvN1Jfe9bc2n3Kdwgwxsc7BrAryovPerNkRdBu6CBHT5gz9rqtyDe8dyCB1xK4iF4TT36dGjJPDRQPFFNN",
  "key40": "2EXcBFVw3PFarjJwm77dQ3M5NkWz1PhM8SQ5GSeX1rVPi2GL79aGjuxZDrV6wNG83UKfdD6KiSiHhZnMupqU4Vvu",
  "key41": "4jzsCaqqkWoX2jX9hJ3FCuA1eJLe3Lz4ZHx1ehDpCMB4sekHn4hPEm8L9NbsLF3iQmkVRq8JPd9GsNmuSFi4QSK4",
  "key42": "WuDnzxwS3jiThsVBEjE7HVjrMufQTgVnsgqnkFPJBN4iJag2je3qDzwoJXTBiNUVE7p5xnF2QvTDjEdQPdYnwQw",
  "key43": "4UCMgiqfpCqfd9L3Yz5rV8Bqt3edhkMvujavZz5axBhMs9SEZVeUJDxYXAZczb3Lh9WaVidnWNxqQyxzURVjcTrG",
  "key44": "2eJ9y19fdkJpTrqseBfa9rvvmP2GTtXvdmLEvxeG6sVKBNnDov6v4x7ZpG24ao5FukpUWFRAeEZX9KmTPDLyHUKr",
  "key45": "4DHvphpftu2ogDszSmGNnsjfw85QKeBAS9ZhfxSHL1wuUqbTdU3nxearJpB7Een3XBcT4Ud6URtfcW5Zcm8FQ1Tq",
  "key46": "2PQmW8vkA6PB4ykz5sQANuWmGuT7KPNWZS8kCsSaFrVk5bJVetuqdzU4fQ6adFA1UX3PZswXtZm3DFYM9k5WgaJg",
  "key47": "b1FtUHAXjVkVuMDdxMoLzpXZPKJEZhuum2qutJMWLtG2Dde7fhKcZueLLkqjEMUbAGiquPHWNeudJZmuJo545nE",
  "key48": "MBqR3kSNDPHRx5wUu7pBf9zUyW1b7JPQVgccwCcyxXxk4LDbPM7j13pn83kym36aRHThNuFFfjXKrBZ2UPfeUKR",
  "key49": "vh59Ep4233UHtjiytGW3JeGgSdqpRnSAx9b3jAKW9haTs9NowFQWb32TfPNsK2XD2aXDFC2xc1Bugtbq52kRRsp"
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
