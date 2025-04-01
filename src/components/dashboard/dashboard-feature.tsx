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
    "4aoMnB77oUiZVAbRaDeCqo46vnZucfKPzJh3VRs5dAxz9hjxmN9fpd3nFu88wcWJqbRPgyLpEBAmL5wwdQcg7s1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LVTYU6DckitBL1v9NMAo5iCFhyyhyvGH8yCHoYGyruYMMmZRwm5F3ZXZXPVFaXTWiejkr74YtaJ3rLDQZrD5jr7",
  "key1": "2t6RPPiqDR4wsba4HFSggagrrcF3UZ85joB2JcgsaxBwiPpSEZgwgKTuV9dj7aa6Yx5Qo31JNFVWim3ZtX9WuiZL",
  "key2": "5nUbBvrPTaPsdtvcgvTh4hzZ5U8gy4Wci2mWqj2uTMp5cAdsBYjgAb19kGQ6AYc6k5RXZMNJ1msKwmzpRafrrz7e",
  "key3": "4rTbHYACfLKws3rP4XmbYcmJaxUsW9tKZGLVty1qDT2uPQEBVfWV61EkETZv4o6STMdJ2uhFjjghHvap5fTaALQt",
  "key4": "5rS4DnEjY6GALFxjopyx3WDVyZTPgwv1bqW5WrRnekzkSNWDCQKQC1LYRe5rVTcmn9pxQYJRd3EE6FqsgZTxtdiw",
  "key5": "2XnZKKgKtXUQncxR3FtanDbEc2Tk69RTyz2mboiVdtT8xwTSuXtcynXyhUfpm3BL73RGpxYWA2oCP6gLsmB8tfvB",
  "key6": "2sd5uBnZPzGnCmBjKCUWk869pzSyR9EHhy1c49XvhFBZcYzaidDFn3Eqsf54fi7tVF9U3yEHKya3ERJxFgUXBUqY",
  "key7": "5Zyh1xeMpBYfZgmZyQN6AXT42eP1j44fUq4tusuoi8sLH3J3RFTYHceepd9oLkfPkyAYZcpqLsfhU9H9VbWMimVV",
  "key8": "2Avx9rGgt9korjM7cY1HLLtf9EgTzzLt53zSBiqXHifhM7HHRvKBWFxwnRyF33CFXvzrsxg2LjTU3hCvzPGK6cMx",
  "key9": "4Kx38xBKZ3BtmWq8wsXxP7Q1LXZyQMMU4P6Wj25Vux1ThWMVC3jBP8gVrWSgi2fRLVb8Ct3fFcBkoPe57ezd96Ay",
  "key10": "3411NjrC3RowvTvx3hB5RQJFZicfEu7h77m6bBCfrQ58jDpWY3BFh5QvvwAqF8B1SmGfNJu2wPRLdXUBTaVon3an",
  "key11": "48GNwR5qaBSqSb9AwLCqzhckhdHmZkj3ipSkbx9s6snwXTBVFCNYHHgYeQTst8uEcZKLyfUwt9PUF2kUojYkw2tp",
  "key12": "5H3UXuQgjEuzwrikWgzyVTJe14Y2VEXzbJ3rNAR83hZjV7g4SatswTSSyg1r5BBBejRBoSbg7QDWtARRRL2JG726",
  "key13": "4bK6h5Yb4rhnAgngAwzMDei7bggHKvrfadMMTsTf5oZLNMSn5WZcZZCSwgy2TziMm6Er6pVfT3CqwimQ58FmUEMg",
  "key14": "2sWQz3vSBJYFVurWaxo8uovECobJyjTiDXh9okKARpWkpcjv1AbvopdmWhdTFQpgZVsMkNKxv8vgJDpGtDZsnCe8",
  "key15": "zVgXuvPVse58wJ3U4oBavU4T1RTYN75otKNziCmJ2tEebCpCZsApiuMCcrLXQGQRieY8QQga2mHhnD53F2jvxo8",
  "key16": "2qz1wqzdSPhf18Escbt2gpDrMm2wSfTgx9h2pusAbozWPVPyuZPuriL8UydrnohsE6g7ZJthCKD25EH2dLwoWv76",
  "key17": "nYsGu694CfSM3mzigVTs8Pk9wdLniZuxd8MUgfcqUacJNKkVLUBmb6arLi9iuSw1YEcoqn2nYBUG1R7u3jfewMg",
  "key18": "5abjPkyuicCf3TGMQvHnDGzqUwNsQxEG6KUhWkLNjuCuzQRVhwbShHXijhjNWXPwaztoh5kz42YixRnHULF4MGMa",
  "key19": "4hmbbxXcwfkJLkWJDKUsdfKxdYA4AJUxMQYTeeotM9eYSwfgxaomTUD6yvi9nhvEe81Zva4PcvfETv8gHQPSyH9c",
  "key20": "kfp8yLMHMQ86yZULJS5nqAriiQWayhvprpYAbP7Nt9qYmfRCQFQGtRov2SskztEGkjDpcEuAtVKjGCakx8ZKTyF",
  "key21": "52UB8Y8JGqi8FQStFJ9jMPZMFHt6sUnhVFzEDazvXuCWWWsJdqUZR2iGiySdYKag8WjaXFWg57eP8R5HEzNtAJvT",
  "key22": "g7WX5Ytty2LvyMth3Kp2v5cZd65jdoTbTzwvKGLrrxNaNJ37SnQi1rFhwLNy7sW2nzbXRpac15GSkVmevUSQrjn",
  "key23": "2Fx4ahvaMRcy6aBt3w6GwfUmMzqjdPi9F5NZSCt8AHnfEsSsywQj6ckdMvz1aW8UxT5HqfL7rVCfR2AX5bz1FRtZ",
  "key24": "4AztVA92nr7gvpSKU8VsCLWLbXp2NLkG9aV89d3y7guKVcKrR1hNsy9sHvBc2WKoKjzT1fH7Qom55rFSvSunabjX",
  "key25": "3qjjf6muVpxGYd6XcBg2v3DJmM77JkfFVp3hzZKPDMV1DwTAcyHPCHF34ynZyxqc1fgNBVitypQK9ccB3LcfCAJ1",
  "key26": "JSUino6Ti2fpuaXTakFRGTMMaivjBJkuF2DiyjwD15fhtGf4p2y3M54xcsiM4HZJxDvMsbLbhZPNcXprrf5fETL",
  "key27": "5sT3t4xAShpNShtANjzpW6RvsUfMYQ1DQJdg6KVLT443GvxDsnWktR3zCpwvzSqT36gWvCKmaDNsKqxPQNNY3kH7",
  "key28": "3mzzzmPRAvPjoNa7XqUK6aJ2BeEMaT7GiV2zFY4YCxo2uvymrZcR9fhJoQnGQiYBBCsHNW24uhYvSzJbPPa61mEo",
  "key29": "3yXri2HEWQj4D1mgWX3eHfxJdtUiSJyjcYbVdFePwsQsre8wpHRs7p3xajLuQn1eKwXxvLYLbhwQHDC9HHoaXbmT",
  "key30": "2dEkbQ9BjcMTquyaTjLV1YRxaNRc5E9smXvHrN8u59zRgbVBWjTdWtBggXgWG4HrnU6yfAM4CM79yZP5HKvKQQgZ",
  "key31": "5Xo5MyXqcHci4bTDs2kXeYuMRBUDWubxSk5XZpCpENnC6Sdog4aUqn6jncidTrGp8k9VeS2RqriMwsJkbQtZuhea",
  "key32": "4mjcWPAZnPxoDhzR2SmdBPPgXjZHmDhwWqh1u2obRn4pdgMSbBY4r9L9K4atVutqNA2fcsfq8MqSKwm73jfLBoZ5",
  "key33": "FcxLaeyKGSmtUgs1gq2HYyymHAZm8TrQUHc4LGbyYKnxn7Lmc446uVadB8xcoWAV5feY9R7PoprHQYQQ41UtEo8",
  "key34": "2SL3rrzFv17Yz9N3NQnm3iHQSjS1yfBRkuiRS6WHjb9wvsgtVRsmRwEKec3KXaCnLfrYT47HKDs1GswvsNWFYjLW",
  "key35": "3229wtfTCQJV9yc2AKeE35h54oSCGJJpCrdCM3GPm8kficcuTdCKujU26dNsCiYnNYHcQ43rizt4pAVhVLs1WEtB",
  "key36": "2oJB9ge8zrZ8hAQjntVTYuaZhhauXhsWdGdnx7CunASfS47NqjPKzBVTzRPivLQbnPoeT5iWxVAtQjSkhW3TdWgm",
  "key37": "4oTRmwy3uuJsDDHpb84qApc2MGfCuB2RzyiKdTmAbekd7pcMJ1LE2Q6wycjAVMdBQdfh3bennYpV8kGbqVgcVx6g",
  "key38": "UwE2YVNmM2wfw8iwtMQEcPAt4sVC1h1taeux1SKGjWmheB8a5aoAQUGu2KbJZ5sbRUhiTj3fe2Qe3QMdF6zvKTB",
  "key39": "5j5oBmREN5BY45CoYPDnwQz3rXKyeJRLUhTTxx1PHUWsJwxGRFhntConGBkMRA8jRSDw7xcymRyMtWgm2pNFMpGn"
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
