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
    "5FjGXoSq6W3WAG7LBWty6WJ4TnjY5Q4684kjaQNGJpf6v2U7Y7yfjx764rgZfR6q52QpQKEZp1gmNWhFSbpCJ5jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Esvn9EzWYCjoYuE8bTFP1PaQTm84mCckLDW4mmcVbAgw1jdP3Nw8NweYBSyVjNgmkc5k28UXdqMSGC1d6mhocq3",
  "key1": "5fMPM5fDhkhg9F5QCAs9ChGCF4aE3krguQRv4ydsZYFvbjot9TPxmUhx4KtTDQ5Fpwc9WZxwRNTiSiD4ah2yav1D",
  "key2": "5NKarP93GeTX5faAep52ezMjPSdKtMCYdaMFeGHRXEUJCDsCnvzFm846Xvp7oJyow71iF98AAGF8dFCXvyxKfHdE",
  "key3": "5fic86iHTkomUWmVSwBCymNet2x8mJLgGSR9ctYhWbWDvo425UBAmKFJajvrHD7mVDww4qcDf9UvKmt76NVgskU1",
  "key4": "2wHxRi8buJphoqFR7kk1bt7W1ywdp33GNjRcLiy3HAVMuHxjczUJq9rQ8j3RgHfECB5nbM8AjCxhFgxtv9xNHYqi",
  "key5": "5R9smPUHEpMq8vPdZygNyapi5HrS17NFgKQyA9br9phpke68U2S5MpDmGDD2CXjxcXVeTDDpbbApFU3WBdSpgoRX",
  "key6": "2zUpbksy7nzyA4NmYEqEonBra8YM8DsVtKMvHjnSzFwDHyK7pYP5xKcGDsWiwpTw1UHPKu4YRS8xiD8TtpMw8kit",
  "key7": "4kDmH3TPnjcp8kwEtZWQTpfJPijtF9rfBkS4P9rC41FPriUHXsGWpYWh7GLTjWhwe18wu1qyX2sg3bULAacmcCqB",
  "key8": "2cYPVQooceGRqcgmiLvavLyWX7Y9tprtxqiVsmkp2krW136nhkEATWs7yMpbAVkaitW6b2DsBxBf8ffDfnUpZWxD",
  "key9": "5nvkqFf2JyiE7uUSGGFAGH7g8TQFAXvQgm4oDqvbSZyDPnuTW5Ne7RPyUvLuW3kdfrt9CZXr25gkXa3c1M97wmN",
  "key10": "5xpsXkjn3vLKLVGH8hoTQjf6Jy6pmmdLFtm8LDbuCm33akGQSxNAkkMFHJiH5EP1NE6kiyqFrVm2YqrbJqXQVYcK",
  "key11": "4rn7gho88YVrsuhQE7cB1ECc4BZmr8G5eBREmdADCxv7xRzsEyFxWmHzkFbtMf4CodhrqHt6voC54bYSh9rF8oBg",
  "key12": "2LTW1hd5Qiet2e76ryXqu68hBYDGnMoBfJFPjLiq9SGaKGjXbtroVAv9ZfkcMcioV4Ev4tnCy9xvpX5tUMqSqGUh",
  "key13": "2K6pyCvuScxdHqh3WRedLA4yq8FxNsg3qKimQPZ8NV8dX17vLBVWeQD5fgfU6sYHgiv1vY9AHNcEGGxATS4mczJh",
  "key14": "2MVLLNRegGkkPQesymYP7pku6tf171aA2fw1MNmsw2ftt2HFM2Wwzia9Uhi3q8SXQBLGu1cw2SpzFmNksEKw2BUC",
  "key15": "2JzGNQpxPkeNc8buQ17xLFzj5JGJZmBdT38Vh4H5h7rscxzSxTeeJNuLvUvHkqcHTzv1fWd2F8zFNxkQK3TsLshn",
  "key16": "3EbJNEAxXKtF3bJzbQPPYFPTGCxYxBVJw9iGH4iwqWuYnAdnHNH4nPRZ7WgURxf6b4nRTftuFj3XMgv8V4zUxxjx",
  "key17": "4te3hKJt7K97ZkAxCnANvbTY4DMpSy1xDCbYqGqzQ6WGU4bQrLgKLwEJCndSmSpoxbDQF59xwFRCBwGcyFYXPbBN",
  "key18": "Sn1KtBajcgvLo4V3abcEh2R16eK8qsanaffBMEFmMWaA7fJUGQNCFADQKC3yicqAUB7jg3mXMUimQobtTYByXzN",
  "key19": "4sacJh1xZWFS2dUAG1ruRCiNuZjW7g7q6y99AmeFtcs5zeJm7Xm1xriFU2ggJF2M5s44pDfW9grPquyKWSgudKUh",
  "key20": "5ojbCSfHtxDuCysw73Na7Y3HZSbnZBJaLzgakXjycPPj4nkkUXWRxmyAUY1hkRRXj7581f5NdvCvnQ7NDsnS77pr",
  "key21": "2wNgVRyd52uUfPLg7gbf7cN6MbrLMajAKQyzjh1ZZ5NsdNFMYFEood7G9qvfDbJDjRHXy7pnpSv3nUTaVPprQ4ws",
  "key22": "4j5qyFPoHYPXEhqSiUqLrPg5zNP1JibWaKq3v3JLFFjJKjdLSrQAL5kvaJB4oesP8PV8geiHtTvQxxLjCNFAkxo7",
  "key23": "4pa3R2tbFXmPw6Wt6EtesnbgPmvH9Bx2k7Na6o9hwa9BR5h5U6WE5KamUQggygMc4pozmDgdxeUcbzeMZb3mWGVJ",
  "key24": "Q5wodoDs67BH921Up4dLV2PwxxakQvAkMZrMmCyHmfSq54H6WFgm2CXgWfDp13FGGRsN4vJd4qKLLZiTCy3BfJV",
  "key25": "2m4thCsXFQDN1kmUfzYsHegzag4S1H53teCeERqSiysA6rtSfXaUPERCz6XYE32g8XacdQ8SEAyFMohJM3ucPiyT",
  "key26": "2TtuS6vJcWSpYrLWPpfAhZSCNQHJzxxfoNTsKgugJybJKVV77T2D192M2ZanbvKEgY4em9vP1iTQkWEYJvbcymvZ",
  "key27": "4xTUnQ2Za44JbVRLL3Q3ZeCmDWDUE5mbDE7CHSPveWJCfd7n9cGdRckUfdgaWT2mgEQEdFPrcGaWsskuxpLoRTAD",
  "key28": "towrVbQY26sxqSeopzZv328nwbXWFUGVvJycHKqsRWCVJbiVtdGrUg1RpYK5Wq3BsTZ9VMGj8XtXHSYCENv44jz",
  "key29": "5trF2W7ie7KEP65qqPtq5Pb2a49L1DKDEwGU8UwokJy8xmq9btoiUskEaBRXuZDkXgEFDaJ9tgsQ8wSQVvXXTGBk",
  "key30": "2GfNNbdkcEjXvVbfK8reHocgkVRmtLVSHhHdmTcygQHkfwTZuXv2rrCQJWu5SNagodMXoNQojEBeFg1tCBR9Mpke",
  "key31": "61o1senrjgxQY4WY6sspf1E2t7zwFS5S2YyEQRX2qxiKoAWNJvX8P14caq1GQ8h3718MNQRizpnkHrmf6kjJve37",
  "key32": "3wVM574oCQuyxHkPdRVNurNdkJVcQsARX1JB98hifC265pz8NwZE9fJ1P3oKjJ5GFnSDuF4bBBwfWsM8B6GLECt8",
  "key33": "3J9HVB3HYmRCdQ2c2PE7KFhS4xC9oRKY3tFe4BStGn6eWvHmy3yKCp5uHvnkFvLngUM3Jrk7PdMPC7YMMJAntAm6",
  "key34": "4ja7YgcHFBSRajx6grjwNGKFj65xHnN9MwSUV5QALx8bwZ3JgNmw9zDdP6TghC7FYfhKqQsuUxq6rjyENZZ7agKA",
  "key35": "3Uinxrb1P6dNjUSNYQ8SUefB16cZRq5sBiyCwNWEGCMMMQy5Et9fGUzX7DXMtLyxMH427WrB5RYKJL6QcEvVodjo",
  "key36": "5xztQfNcAQouNmKsW92dbGcpaFL7huTZvggxSQkAPC8Q2oM8EqNo3Y4hRWD2pXa5pfjniNZLG7YvrLD2k53Xhfmp",
  "key37": "9TSYGpuSme9GywSzHN8LrUcTyxUPQb93G4R3ZELrLpmD7YWCxNsvoBud3HrvA3nJudmajYDarSyknQUWckdmfpZ",
  "key38": "3Gr6Y43NjufbCah2BvVLwAuCSx9KsvnfvxizG5WQUYeFbTpGBG2n3MqXrcbkiUNGBvimWG1Yms55Pe6GpUR1Lt3j",
  "key39": "2b2er6KWruDTGz8NuQUh6qX6CY9agAnw9x63mNPfJqTiq6zY3tgUoke5aEjhNKer2WLkzogZgD5Qom8ixhJSECHK",
  "key40": "2njHbLccL1A83ZxEtYwoHrUz78Zjfn1iTNUnYJXCcWi3dJBVqm8kaJiRN7S4hHtcar1H1wvFYNXGtZGTQvtsPSah",
  "key41": "iYoAKDsP1QJLLzr9t3XStHKdvckfaZbbgATYvGcoRXKcUxw1FMtU7nwbcegsL4vsFgLFxQRQBLrxBRHqSqiVn59",
  "key42": "NV53GQfbTDxLNXFRoe9Nsra4ctEtwfoQr6h4hB7XTaZKxfsGYenki1DDZHp2LbzzAVsef6NtyACY4y3Cp1d2Yhb"
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
