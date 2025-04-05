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
    "56TWZG8sfdhmuXT24QzUADiVGQiw7BvsDtQeTH2WYjdFhaHqBHfaEGUGbuoyRa1WbqWBkxGr1SQeJRFKdW2wciJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7M7SLpr6YvV6eZswKQun5TJzQJ5iCcnQMMMMdEq7EgVbD3bA77SQxVdr57KxXG393WhFgYhzwF4ZhnmoHEmzRs",
  "key1": "3QkmwLa4yCoBmHVhxZfFWn2n8uykXh23a1H44SUm3PvH5AYz9PxwnTyQ6gfrKRMenLUyHXSZW1zcePUsYWtxJcuL",
  "key2": "3NvgLwaq8iAB2qTwJwCBEwTpXPtkRupKUCzCJ36FuQ8QPTTawVJoa4GUNxSeFKzk8CHpLbnW8ZYB2py3bVmAjJoC",
  "key3": "qxk1LCT6CWzeu1y4CxBTaq8h7pSyFyYmehQJHvhsBGn4MZTbitXE5D3qW1fpnK1fArSV3qu1MGxgz4CkEPE9DWu",
  "key4": "3etV5ecKZBw5o8PbEN5ixXLLnV5rxDGE2pm17NHWMEhgkmmsYobbfTCDKtJtLWaxvEUURJNedbxGHMC8KH3jh4mJ",
  "key5": "L2YL8QT1eBuAiDbEMWaUZvzwedYoTAy4K9Kg2MVFSWUcUo9DAzL9AZKUQ23BTkxUjCakNe63y2FyaCVsDF3G8gC",
  "key6": "38mVwHPy8z5ZrfQkAyNjqXucn88or96CLQseqng5geNPjVYWkHDfYcDJL6pyf5WMbbf3m5iR6YoRVC6jtwLrvZRU",
  "key7": "3RXKxWuTaP1LDev1aXkXUKDrn3PzthH67zHm7bUBKKLG5cHMTFiZo6ur7Cs6QGrxB6AEhS8GTVnNypMAmG5zam8Q",
  "key8": "ArxXhBR7UQzSP7hNJNw1mvrdZcDEeSk8JLrkjekQ6GPfcDzrDYtuw9yVv6jf8gjnNg1X28YTDss2K3xxN8A9m6r",
  "key9": "63Cb8NAzrpSs7k55YTfV3Q34bpEvoqZ1ov2yHT1XfQksiv3ZKdqttxDmQZRQLvvB2XMq3tMh13yzGJ43MtEifTMQ",
  "key10": "6oLtTbz5jYPEeQgdj7YXyrF1YR4FQLLWp5GNwS13H5Ew72dDx6bZQdDnpF7hVUd9dyEZGneaiuaDEN32F3uqGWs",
  "key11": "2yfEX6x8XxC1Smr9cprHWV68Cqg5R14tY8mfNeBXBhwb7TvLB11sHDbEScCcpn42TkQNNEPbP85KRuQryvmpVazC",
  "key12": "5AQmLHdiptUZYu4CQhn4B7xX1iThaNc66vrrcPNdMAmPB4MbKjAdAvoy5hHWKE5SEizh2H57B32meH313E7ifsyL",
  "key13": "5LqC6oHUfC8Buy2Dk8PuUTHQ6CS2y6quGAvptnHC9jnuWLkfQzYXBmAGPzBrJGUEL1mzrDhbCyacud5TEUPErzsw",
  "key14": "QL5szMT9qR2ML5JJorSMg6Fu6bnyUdYq6bFAxZiknaxywtbeYxh6vH1HwmFKgjaY7ifsbra9dSq475PMy55geum",
  "key15": "5DSAbBMvZgrTRtEcwyRaXKC8Pm3aKxjHxDwYMWHyVhgm8PVMwtpvKimSUoGMpdXjdeSn6DMRAJANkDgfjNCW6jsY",
  "key16": "VnSCXzBjuCKX2mEuEFSow4bgePeNdFw8vGtD2c3yRSMdHq3T23JDJCgXLgAPufgpE48xg12i9KzSfD5EzfLWSbT",
  "key17": "2tX9bEyBvaM98ZNLEHi2BsLP1eJS7eKfnKoicAYz7aSpCg98JtuyhkXnyCXr9wmCZSTmBPMsjnQFrQrLiYZSmbtn",
  "key18": "4kTy4YHcQZ3bDrmn89SLADxDPWJZ8mgqPgy9zwPWuL7Wxqtaj2owTUjMgRaKQM5bXcH8gEVMJRXEe2r49dXmASH9",
  "key19": "4FPLNNgwvDW1J6tmd7nx2UQVY273TMauobK9MpJX9inCBxtVn46nzH9tV684wjVTVv3jZMvYPaXzPysrzK2yikVk",
  "key20": "61ws2ufuLZ68ts8wduSnf2tN3fVrzMaYNRRdc7w5uoSfdxBUaduV4RMbZh2vft3akV4FG32WDyCSdACSFBVBJw1n",
  "key21": "4SjG7trYx41qXdbBTkp5vh7t4a2y8FftZt7fnG4kiU7Uk2ovhh6Z3hTLEL6k9TPduDtxMP8zyxXuUN2FJq1Uq6j9",
  "key22": "i8j9eQFpGVeYVYJmjg4EDxtQgu9SHcAiJ99aJEY8uzWDAfmZMVwof7hLKhgcPevcwafSJwt9oSQkarNkcZ6MyCb",
  "key23": "3egLLzjBVddBxXJftEbLAEL9zgsEhAdgoKvkUJHFoSuQChTpo5eC38cSEYjBcreiqK26pjNAjAvFZZnMmsa5pcoB",
  "key24": "5WkrNJWkCViLJok3FqVDfJDL7bTKTK4tkftmUZihvsDSjp7vgfmJgnNjyk1vpNKgkCPXTf2a9SZxL2UsttmFTSG6",
  "key25": "49TyqzDefG6oU2wDzHumLQfFknioVve5UvGiBCenH2UqtufT5ZX3gfpUSYJ3n5C72t3KaTyTU7owKaKfCFvjAztP",
  "key26": "2XV4EbSvEnqimNibYtUJoPAbNrDH1qP6XM3gVcexk3pKm4TNSaLQ3HpnsXSnV1gnHb9devCvYbFf9vTLTpWp2GLV",
  "key27": "3CU1jqdmgQyBuX4p43PtqbeivMqqRGP5fEUpAA2mLFT6CbSdT1S4Z6pjKUJN8Qj21FSyAotWNb8ckeK22enQpLgz",
  "key28": "4oMzRzzfoWsZwKpjsDGgQRJqANVTKpUBwtZVfwipJqsoPBrcYsyrq9RKMfZyogAwkySEbjSpAh22ghfFdq5MpUaB",
  "key29": "qwZgc4KY9e8yfhNXGncp6dckopRh5fYkhgDvPohLM7DiF7uB3WTzZKdd57jPpMmfn9xt3iTg7Dq6N4R5C5Dpejw",
  "key30": "5TEuQw3xVBeSgH4JvWaiXio7fgzRXVk8dqxchzSiYfVN9tmdb4PeXuw9Zt3fQxfnPWNtGoSo2udJ3B7a5MGQpSQL",
  "key31": "4ovmJgyqWBPTEi9L2wyfywNvpukT9tHmdPqpueVjnrnaJWeMd4AeKBDJQsK8SkwXL4sKaDs6f4WXPwLQTBbfqJtR",
  "key32": "3cYPG3UGnUppdWNn1h3h2HsagKDm6HuWtuVnGKCsiFd3p8hDjf9WGi2y1LaN7NXn2peXtAmB4P8VMPeMTX1mehT1",
  "key33": "5s67qRdamT3DXuVrCsMT48mZCzZvvDRvipFeujHFDS7uTUW7Rho8H6dWA9dW6VNzLmqEvgeqK4S68aNvKmxb94vv",
  "key34": "5nXRyp3sDPpbNswK8bZy2JHwD5GLBHLHatZbvACe2yDZqjs9pVacYgddedbiopUWNvVW2Xbhr5AhnHtQXbs8eHzA",
  "key35": "5x6PYNPKboqSAGoFya6FFDM3cwwCMtU7VVVWUi2iGnPs6ZbT2w6yDjMbfHBppqJooaTo3Z5eyyQTApzUVRgawPFT",
  "key36": "5qveqJoxmwZJPmPxJ4MugBiZWuH685fQ6TEAaDRAZhWoKdohZ6PdAytvso44kjuTg6u7yJz8cLF9ZWr5c8dBjhCW",
  "key37": "272K9mwMM9b4tf83faZ4Eq9HVmaewCphRwFUopkhBB69ZZaz9HLexhYnvSm7C2CB8zMi6Yv4UM5HSg9NXxZNcJkT",
  "key38": "3YQMUz1UgtEnTYhMU9tKs4hvC5ehE4kykU1VTqSLKq9UizbcJYYJp77y8yB2P7Q9w3HGFZrdC51uR1qxNkqLZvkW",
  "key39": "2fFx7U4Yv3HzmEU7tavQ9XinHHKXUfoSjVK8Dtba2HM8apDtXgsc8qKqBtikPSiuFfEoYgReDpKn4FTgA6q2rBpV",
  "key40": "4WhE3q5CziGhQzrknnMNAkn8D1vAeKxAfh2T4pScMj3v4pQmKkb9nf1epsn5JX95tgZDyarroTgUQr34JGsg99Ya"
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
