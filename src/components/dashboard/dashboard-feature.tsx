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
    "5XiWGSBKJ6BgUTTM79KZCRJh3ZSRVBaysB3HqevdH2h12R79rbxA3w79sShiyNMrLK7BsBFTPeyx9iRpaMz6acr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGAUne3sxXE2TEm3RSbZi1JxEdNHJrvsENDrWng1YmZXNBTosFY5fKYju9T632ymBVhbnq1CqgckkRUueJGT4Qp",
  "key1": "qEZSeANYiB9L7bhMqxwKY8WqSyHJi1951fNfXU61pFdPnkEenA9yNzXBow7eddnLnvXo2s5F686BbE1irTEwDNn",
  "key2": "naMh6wwAgmWyFnYWLNACz4WtRRCRVYpc9k9LbTQYUCAmrpdtF4j5rMTz2jT28gsKjDw6n14hacteyHmy4Srzt2Y",
  "key3": "5XUPGMaQVpiTAxasdzTFu7hhsJWs5bxPBgqpYFYU6cAdtH8igZroPZcmamS212i7kwVWG52uKspy35rgXzhqGKdo",
  "key4": "2AqKEiGEVvFQ5D7iqRi7kDB5bBLSxedEn5Y5c8Eju5KE46iUQiC7hHLPpiRhGvHC6NdykeoA18sCuCgQ4EVCq4mu",
  "key5": "3rNyXD2zzBUKtG4GkkmmwYfatiMe9aSBj37JHwehwd2GPi7X1XXTjkHuPHPxJ3ogvZ3sZF4zW78vGc2usTEGawxN",
  "key6": "hrtUNSKT7923KrZMQms4LmozrvD3z6oCFnsYDCowG9E4Wc9oqMgsHUQ5fZ5iHCN191YqGNF2UP17KrQhwVNbWs1",
  "key7": "HDd3NP6kmG53a1AEwsidv4DSn52vUDrhqavrXriEq6TWnrkM58avvdRJZkPvcbDCfF5ryEvhSF7F4FBTFwdxLiN",
  "key8": "2RW1jTdro2eCcZw9TecY4GVJanr5fft8861XAhRejWpx52HbApQTig9EUSGwDvAwvw2PDdKZ4ZbjvsWmHYmoot8U",
  "key9": "5JphRP4VxFxPCZS7iPUEWRyX632jae6CeHQkFnhAUpFrqkfqaWmakKitdjrsmVgxGzSLVauNXjQN1tGfe4r1utMG",
  "key10": "2hB4x2xx8tFc5nbe9woJeH7SanwuLxD9L7FibcGPwEG4dYVWxorJp8uEZUjoWQw6bLNdGhMCa3hcA6G8HJqMWM92",
  "key11": "3EmWFervNmnE1U5YMLdu9EnshV6cmG6jezNrRFXkyVHnESnPQChv6rryuccaVHY6zCFoWhYYVgEWjqwtsmCMxHgV",
  "key12": "5ood7A5PRGVo7n5nbQrdwBrXEt1SnJX6d4WQQ9oHEQDuFHGeAYbB7nzzgcZfsLHb2Arm6ETd6fKrSbiDooC62aKj",
  "key13": "pLQoMSkaJ2jyBWodCEXhNAaBkwARzwioggxEJ732roJPXwRoZnenKcyv4FjJz7wzU55KbqYQLU5dtRDtozVpMRF",
  "key14": "2asm38kUvwDYkiFoDu1n5pHnei4if7dX4NatbWyDtKrfQQ3JPkJsLsPNuFJBPqTZETnGEX6XUS9KNqLc74Ezwyhx",
  "key15": "3jYkXY1qeoBqHPkSQgtcRAwoJJhogyV8Nq8yEJDz9usnHDvGCxhFhehmHM15RrBEwQFGf6KaB4pPWhDPCZRgoRsY",
  "key16": "nAuU2j4qhDREanwJ1mA64aLUGLCVeCsrntYaCE1CBj97XhkdmJ6hUmCT2vdkWPaitZv2zVBfV2F5By1LNH4Gtiu",
  "key17": "4RtCiXhNvnxhSLZQbSrYJ4mxWraeGUh7DweyhURBEquQmSHpviYSjP8hPuXhFKUvaBdTw624puBehAdiXnieh83g",
  "key18": "DKV5FmcBoR1imS9KqtHQ2TZBQEysBGSuLJCFhLQkRTxWjjrykV65MV1FGyu4b7h2rtZz6XrGvuH4v5jEVszUKRN",
  "key19": "VGFhFV4pkR6rXFswkb9j2DKriHadNpwoYqmbVJmy9ZwG7DtyLKDopvqxoWQKkqFWroPuNqr5E4RuzpBc4QeFF47",
  "key20": "3sQSePEvoeXkTKeXPkULSH8jmKV7pz4pFAHABRK31y9EDrfujpFNi8a4YbjUmWGjn28NV9krP4S4YMdEx7K8EY6W",
  "key21": "3yfTLhEm9afReeX7wXbek2t4DnWavD6un8x3191CxHX58uuD1vw5NqTUq8wQVNdoXJroYCbDXeHmyyi9wzFqLfoe",
  "key22": "2sBsMJBsihS6488V7szouNPzN4zPigZkcf44Hi4XiBdQuLbL73yZiFSEWpSvrjHfeDufsGtHtu2oyJSYhT3dBFXj",
  "key23": "267fWTpNKdd4ceSXXFsMq38ohYbkABetPDGmwXz9mzfM4zceNK2DJ4eSftN57znsfonoKT1ryEHnNJB86yqNNFig",
  "key24": "4Mi5eRFT6ppwNqotvy56DR26AWefzo8egDnvG18apxdfrHNZp5umgfQEzfkfXREjSgGFeejANM98i8MjJmhJbrNY",
  "key25": "3cxj73922syBQgjLQQtHxkrfEU4KNaJkKDMJnyMs18W22uWzPZqRrdfahyrxh9YMd8N4KZgWdDJwzG59SUh9Tg7h",
  "key26": "2C5GzwxhEFwt692Qsdsz3Y81M8K3mFhD8q5nTwi3EzpK3hJTTg9PJ6YnkHSLzbh6ytM55JcUiGB6HBMEyC94bPE6",
  "key27": "5RCD8vTiebpTPdek7e6fLZMeRAEvrwDVu9Vix6jvWf5LpQbhSaEjxMzBgNDbNRgvPy4Usqh2fMRtsX9WXRtbfKyA",
  "key28": "3sbR17wWwg7FTt68o53bbRmvF9gepR8UQ3M13nSx5EDqP4KoPN4Jm5YbGcjbsTifQsehnotVcrsJCDbGFUZZ4Xja",
  "key29": "3NrBEhCzEaQtpBR6VqZgrzApGMNqZtuZnR3Fb96mkcuJ4BJ7ueAXfTvzpSCYfQhrCQNwC74CvRVGMvbvVMHNEyBG",
  "key30": "3XVMpDYrk7hbgMjuqgUUv4UcyeKchggTvRhnxsUFG5doKsguwRgEYNYSkfmJxhGNTeYBM2C6kFEcBHQemcLzS29s",
  "key31": "LcbUbvTEDDwPaKcbM23qcBYFxPZLvNqdFAzmoN8LQ9EkgbLZnnSRmDxmCQ9aMfH2X5eitTb343KwByy7wJxrT4J",
  "key32": "2kyTznNGdPePLqXFr343DbeKxBKvFWRxShfjiJGMqUhqEgErPLGAmfAJE4KLf4sY8p58ZGw1GsKHbduhhT1QJ53o",
  "key33": "2jiPsG4WT6YFeseWcWPL2omWKeZPsDAVzsgCXyb6kujnt7GziWPDC8KQhPX35LUS7sv6nGbXaPJtLqY7ZNjj6wei",
  "key34": "hwP8dLXn1LSDBWhxPiwiL2VeJPD7RkVvwDJF5AwCCoPQBofhZDvwVdPnaJc98gV6hn3HeKtazPjqiA6hQz4bKRW",
  "key35": "pTmAXeQSVRgeAp861VWsc7moUztGoH9xrwFAiuHL4eo5kvBAFv74qTCooXQH4bFosQKvGNJ1SLJhThu9ERjUxM9",
  "key36": "3V6j4hQ4s1uJWSA63pmeqRVE7xZDMBxLCcVWqJFafur3RigtCvrwRdG2imoAKkKZbUwhwyAapZiu88VA3MpowGtD",
  "key37": "4cQz9TwuSsHhVNKEQsU23NJPSExNwe7k85p29ePcxXYtTaJiKEsVxacokye4YBJaqLUiQcNiDtWBQqQhggUdw1gE",
  "key38": "HuPYkdZTTKydpbSKr6qnb9irUcfjdS4soxNeFHCvqigk1ijbB8S9DBPiHoCcm94LiEa5p3sY8hK6P45gXebo22x",
  "key39": "1mQqpaYdtPV7y7UJ8hk7ync2ApDs7Kv5Eoe9wYTPBeFuF8NNeo3mTPqsnFhviQJvX4yVVdhPW4LFsCpW2y3eUd2",
  "key40": "3UwmWno3yJKoskM32jgFejbq75wsCesCM9oC7z8HWUJ3mVKQq2PwXeDnVLHbAc4VsUMxBLMD27rjybZBtKaFxL21",
  "key41": "3ShF2odgbeVUuHdoSB5eHuZcgBvq8sywKYfSGhBfjJW8eXx1NMsRb4RixKm6bxoGTF55VYAChr4C2XV1DJ7FpUk",
  "key42": "outq9oAMRhwkc8bmC9j94J9V3Z4zmh53ZbjoMA7xXRaxZmtnkoVhQWnse4zohrHsUWsRm39A6NwrUh9SFmtq1qL"
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
