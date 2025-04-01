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
    "2Wc8QvJjcr79UrZZfW8WKz7qJfT35YbohMuiNEt2NRueYjMMqFSELpXFMnoohRxFbC6fijYwiYigGGrvtYPnY7SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cFZZZqtumW4gYC9jZYnskxKYxGkysSsrQrLmFaR2DuZmAXwiQQiR58EyCEk5nZ25NuvJetT9PR4td9m8BCSHSKy",
  "key1": "kfh5ysMzpUJZ2W5LzA6Wx3TgZkYkN25uMcgiFDPeLzEubysSeDiTef6h9fuiR7ubi3mXLL4SoTD4eDivUDTk6Mo",
  "key2": "2QEBXzKCGA61D6SaPchUs24b8MDvPMVRFwDLEShNayfwSZRCRd6tXW9t4qvk73CB2A6kguRmK4TFsijLvWMph1aE",
  "key3": "53LBtoLDbC8H5fda9vBbTTfr9i5MD8262KdJhBWFukNM65i1N1k3ZARdvsurKmpZyN9UbHUnp4vL9nZtsCym7gxZ",
  "key4": "28XkAJhujUs3zA1Yus46h7dgEfXeSxg1Z3Bws9AxU5euPHUTshGJDytAWrjUfY8eQ55HnGWBiWdXm3SC62VdgMZd",
  "key5": "2pFqGXRrH6GWivbWq6HHCXCDz524EjcR6Upf5ubjdbqPhfDwQ58HkvW3AVZmpJFT822djEqiTwrw2ohituxUkxrr",
  "key6": "2MNvtUsDaVycHjgaQH414ZAigvEFnF2afwwX4oXXRQ9hw4fQmGsnFRdFgXrCVnb2S4cUhxJ4afAAXbdTgBopsmoA",
  "key7": "2yUZkjvvD8VJN3GYBpLTBTMpoxCYmEaaBALh5DKv8Km8qMJTE26oE39W6cAMuPCGALrawzZy63W5MB4Ui1x7aTen",
  "key8": "5Le4PV9TA7YUhmPQNrCdCVamdAJyq4AmPPaK8NYYT9qsYNn2vXW49besSZDTXSHZParVqkvDv6AgWMqKUVXeYLxo",
  "key9": "2JXfPZS4AkzqsBzPEMTZKBBfsA2C8SNFSpJsLaLjDhrBV3WpM1hrBbvvzBYrnBwCqCuECBakXdmEinpzoBPqRct3",
  "key10": "4cN5UDHvos4vNDkPdhkPimtNACSceTthUiBF6ExLAobjq6Co3xxmekSWX4JRvgPR96Bsyt3xPgY77XR4q2yFE5MN",
  "key11": "4mxn1Cp5tq1PQxdTyTnJzP4guZTYyTRqKu3BDTp7PPQSo3vWkGtZPVAhRtVsX7V6L88uHQ4DQQbemZqDKhBDgirF",
  "key12": "3ZGapkiShtPDaK19M8CPNmcNcDFDfWtwTxt2dRRLNpvka2CnnBGmCUTekuv1tnMS6vivrQNYcLeY2CDJLdz4V5ow",
  "key13": "5JaUJrpeUtFRfeYkEX8MmDZmoAbSkGcC11X4bXU6uBKtCmZkDEMzKzZdm38x65SV3jg2rk76WRtAZZ6SCr57h3i9",
  "key14": "4Ra9zXw1fExirWu8rbQcWY7cQuJJmVSdkiSGdFXdvKTd6gRrH3rApiGJZYQJD82bwPtEV6mqMfUyLV3fDW3xhdui",
  "key15": "2ncdiaocWuNpuLLrGiAoFxCHQWdj5esGnVmqsgzgqYx95svtFFwDd9oTREARUGskSY6JTZU58GFLZfN77q9c2fkt",
  "key16": "7Ss1v53zGDnyVda47ynjXXqpd7mxTjFYyCuvRvf2BoXNtMi6YDTHCmDeBFuaghriaWggnJerLbTHX4r24e7hZ34",
  "key17": "2vuxUB3E5z2KtQSKhPLoFw9w6RtwGRB851i9VKVynpxFtgkuPvTaQ3NcdkB3i5a6ubLe9SJdNKdfz8nvS8RYU1RB",
  "key18": "G6TFBrp3JRHdfYiQKHY5jZFLxV4SAHakYSsT9uehuj2Ug3VfNXmR3rqh2CagFgb8TVAy7hT111nLgzaw8u7k8ch",
  "key19": "22CyxMrkQk4agXNoPV6XPsJez6Bd3RovHy65g4x3SWmF82XbZ784b6fwonWFbCDnX1TZpBCv3veVN4Y78QpkfwF4",
  "key20": "3zUKh4daU2nHS949KngNjcDM219TC8tgmM9gX3gZnVhLXE67QgcUgLUQ6vNxyqbS98nMPuS8u1wJAa3KZSJhZvxJ",
  "key21": "52fbw9e2yqCxDK6QakQqZZqhFEmtECmmFZXuwHTAaScMHqcaLgWgmNmBJbbVeeCn7sCayhYMuuKChGSWoZTCr4hH",
  "key22": "4Drh6Zb9HxLWn5MNvEp7ai8YkM8357PN5MkgumtLSDdxGsapUpVvYJXCsDC2qFKmePFNBCXMmcjpAnVja1sCkyL9",
  "key23": "435ckCNQCjCChvh9d5KsNEeYdhr7cH33VNLUC6mycT78i2T7Zn4LzRtxgmbNP4isFsUTsnj4k6qL7zKBYbWSgY4B",
  "key24": "26X6SnBGFVATQ3wZNkACPCukTuJsU3rMsSuTTBdZvVtfGKP3r7c3jmwBXC7hGabYa95hWZAEbJy3jppn8EJQJ52Y",
  "key25": "2juhRw39gUxwqGyt4bbPVPjQtYzJu7A9YES2ZtikdbA5Kncohiaz2CcsEfysBVgbeG75H3FNGR1BTywj6bDBagEE",
  "key26": "3bq8m5m1jnmiZCbvHmGWNrMgi1p22CeNgWNR55cB4eoDECzBV8NvMyYmHg16ZcpCcfFeM3bjSYLQkkUy8rrB5L2m",
  "key27": "68BNWzwnUpkEYaCyyHzCr386ax2sDvdXXwASuubKvzKW5tQCMhEijSxpFDVcrcLuVvC62dvhTwA6uzom85An6pZ",
  "key28": "3gFPazAa2vMnVxBCtPnFzy9uutzVV5MjdS1b46u4x69X1Vu6jGMDa3Y7uHgQmCh58QfKPPjB5jd5gJVTVgeZZrRg",
  "key29": "4E5AgxUwk2iZR6PpGnNbqHaawhuaPH3p3y9jDreVGS5kUHGZqPeBaZ1SSP7pxmMqMqdfdwhHTJH7tTxcn8sVXQWH",
  "key30": "64MUZTXoWdan57NeYKiuN7LPK876AxHdYcRbRtbx8UwgsJVcbeHCt8pPpuThGDToq5JW4oSosVHoW8DiTtVzUNMH",
  "key31": "2Fv8cBfKmWUz3fBRPG44qMwJCwmDNvpdJyxY5uK3SUL46zpZ3tHUSZ5u6A6nXBge5RapTze6QjQqXyDVK8kAT7p3",
  "key32": "59gs3NbJ2kSpygApmAfuHig1UZkc4wsJW7yeqh2aGZjaHFHEfG37DjgpVeu8RsLyfJRDnSZA7S8NTCi5x7mymott",
  "key33": "429bcKBWbq8Cqi1bCC2PDDEa8pkxNyQAhN59w7qB3M9e5LUK3zwGycghgtDwmgjpyBWtC6dpj7tPKvYL5y5vpPhm",
  "key34": "2qJUvWc45q2CAbevH42TSSonK95T9X727nqgrrf7HiCu33SNaA6zPACD8moPVyu7BQGvEYYZbomE1dojwRRFHeWw",
  "key35": "64knBScJuPk1mscrjz4C8ES1u2Shc3pxpaeKADm8mGzHgyCo6yJxT3Ki2vdsw2i7sSLtN6SGVREVCgLDSKVY5EuP",
  "key36": "2miroAPHVrLkKuxYSF9f93CZzrjcTZt63FvHm8csiz5MCdEBUiLm5irjGU4GFSEbbt1ygYj7oWJ7wkRtMysdLhfu",
  "key37": "5dqUtgg7ws5rDFieijsZR5UisWUbwWpYdKEGjjU5jTyHeHpeZz23bFmZAFvkQor3VA3i7g9qUQKZX1bowqvweWVi"
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
