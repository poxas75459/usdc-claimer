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
    "37v7qmRzrcwcPExyvbpSyUf8FJq8aNmtjimKt2LqqPqurxSPM17diuhbjFLqbk3Skezu4jDRT9DAq4NsKSmXsGsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujBxKYi2ssn78qZtM6zSHHguowCN8bvViajW9jB9kVNVpc5nFZdUYYvFgno3gUJSeMr28zcFbum3BhXNBJVohjE",
  "key1": "5aX1xUZhrYyrTtrbMziJ5JNrZTaGHQib3n17EuAuLSW6zVTkq83aQWrYQGfDrbGxcD7S4kfpJrTo5VQfdQeYqfVH",
  "key2": "2PqgtgR4WW3FKtJK89pKh85hwzpe54ukwBnK3wuxmrfTghnzusYeMxWX3qwXNP3cJpvrnRXDoRDjySq8omFdZrAY",
  "key3": "N55DtcRgpjHeNyDeJ4iCySiddrYsMDvT6BLXkBYQwkHdgbkBRbUXAzWDodx551ym66iei9ubzcE5KKLCvRTv5k9",
  "key4": "JTv9oFq8wfm97CKBSzHA1trHMRZT7rQvaaw8cgDWX3cebwvK5p82zeWfsvypGgmMvDtNefHZw9pYw1WCLHKaZCt",
  "key5": "2E53WWrw4YMSjSimBZFqMZ2391nK3FCCFD5juewSmswmcdGpjCa4i77F3bthx2REpH24u9WX8ubkWWzzCpLTb3oq",
  "key6": "5CvPFSFfoQ97vSw1HXYRr75GuUKWgFiph3rpWXRTmqkfU5UpzE3HGcq19TEJuSz8apNHG1siVNfSumSwFe3wjc5N",
  "key7": "4wg7KjbPdXGujW8LuesX44GJ1H1gfqisZKdbE6yZ9Q2Je4JwTm2gSd1us7ccN6WniR6zTokLG3bkoVq7DoJoQm9Q",
  "key8": "3hkdFjtT5B5nmmiWvmeLfwmzzAfJmpMpjU9cSt2mirjw5sCo7PMBQhSGZ9YvAWQzbqcyGh663eUtN5tYeBu9Uav3",
  "key9": "5hVJ2ByAHnuL1t4Wf2ucSBHWSLUrZbDGKxMBSK5x7j8ieQw8aMcGdsp31kAEzhhFcMH8JoLPgma5iacUcjszB34J",
  "key10": "67WywotyPfP7DnZt2Qc8YWVSctpKdxLH9X9QAiuPVrB7sfGVKbpfu67fTQunJSZ1Z4QUG9xf7K29DVrYBg5ScnqL",
  "key11": "5g19rF5kNyGGYtXoC7wL9ME56Y1qc2iJ7ZqLr6EVYzfVQUnWp4bWVMQAHgX428cFA3FdyorKh4DqWNuQRmnZULvd",
  "key12": "4LY149iZkkZbvF4R38r1kuSAP3odzuHcz7BJaQbsAGpnRK2Fn3JEvWSvVhfjdpBwSrsXyG9Bz6wC7ZEbqBJMq4Xd",
  "key13": "2bbwYpwLZqCS2f5ayV421ynXw2uip2kpF1x5eSHUozyBhnrMcKdiJSSBBLv6NXV16DobngP9paJkgri2fHg7cXr4",
  "key14": "5FK4skEAVTbBZDGigw2z2rwrAGRwKkLD8mDpmUZXfJbGw5mQLkLyxTWfwHKUF2jGdoEhrCxcX4C29m4HyeC1DAbZ",
  "key15": "3JDQrY2LrGgfHfthjNSpDyobQ6utbPV8UJ8Ytw5nfJiiskf1c9xHHuX73nLeusmWgYSYvr5ZYgQv3mdj2qqeYP6R",
  "key16": "2Xf5RdLbXSSVgS2WnGhWvbDhb9Y3GVZgriQmYoeVHnji3ypNcTVvdoNRDbEDRoYc3TvEBVoeqovs9f6kNrMP3zXJ",
  "key17": "2KrgeFUCy2aC5AKtc6qbfkw4Tze2xxpzkwje2K3NMjqnqPoF5D4q6FTch23FJ4FYvNzPeFmziPha4gsivfybAq9D",
  "key18": "4G8LbeM77Qr9bDoepjeQNnnceFZFqHrKMbv98dJmx93R7EKv1Xe4DfXxubz2n5iKth5dGS2qhS3jzS7H2nhutRUX",
  "key19": "384A3xrdxk2F1gCnfo8Q2n14FcPH5Hsfk6p9LwauNum3LgF22pjWMaSCq46vHVQRNFSkAtQKRzU7jg5nYhvJsxZ2",
  "key20": "3ubRD1GWHNgtKsiTZiMDSMAvdRZDUgAB3iVGmjT5zmiB6ErSM1CvSmtiut4HPsiiMFBj46raGBbSDdTCwGneNyiv",
  "key21": "5zCbSJfU2NRogawB8HFY9RAHNaLuqBTeEWaRxvcGoHa9DgLLotWzAaMiAD6JoYo3ULprHiP4KrzFN2oWnnAsKQa7",
  "key22": "5HSWckV1ACk9ZPR4UeTTNcMiMgkmzMyhpXwZ5rnnfFBF5cy37zk11seFd8j6nT9YHuYM6akeVeozdvwxsufFYKWE",
  "key23": "679aUnXoWZVEv2EzsD148APhWJ7D6AvpdRKvyq5Asm9G4Agqby4ockwbydsDTjzBbJprUcFPZ2L9JMDqay1evLsC",
  "key24": "2KDaGWn595B92NLfE12vetTT3GJygs2spidqxXhLPhmwidtm8pinn67LnnaugrJL5x5xzBU7rmCQjUF7MeapLG4T",
  "key25": "FHwAGVay1Rqu4fewQkQd3JZeAecEPJMY4ptuQnNKJBnAa78yqVET2QgzHmFoJzDQ6ZrHmZ5X178eepqUYjqB8cg",
  "key26": "5UShjmeqzr1xdqtnoG1FoifL2ZpkvuJMvks2bDVkidfqeNpsh6VZTyyzSBYBMjzzHR7gHhs8ZMwxxq62Wi9LzpqG",
  "key27": "3u4mWLpztPUNqiGP6Rm6HggqLseaZ9QejpWi8j2qvfUNyZ3kWaNdfa2348ARoaA6rXCtdi5Xu8UbrdbGDVdeB3cL",
  "key28": "5fUfLWbwtQpYPhC7rvQba3VkYmgFXD6aGwKFeKrxP3cpwsjPAjnQGfZnwf7PT5ZZPbDNf2bPR4211yQPbDJToDDM",
  "key29": "oWgsvsLyEtKNEFbtqyrX4XmpayTSc4C5CsaLmTH4oW568rJFSRZBa2V56CHjfk8BLGA3VmyGfZeRnKf9E4YjFJR",
  "key30": "5nq2xYPazw1yiTWSQAMUC26koEyeE8UNJe41TP7HsVqxxekt7kj8viVinYppYtmFKPCXrSPBaEDXZaNK542xpGh4",
  "key31": "3TeoWTVqhqqzR3YUsuWoEqdzYt6mbvwbYa3qNuK84i31Fu7Vv1AM5R62H8GcoGQah4oPvZEstzfX39yUAAy34UBa",
  "key32": "2ZxDQDo4RkSruQDaJLhX3JUX2KDQuSCiGpNbLsjtvAyTkgvbyFPhqMqUuhGgiGUNdtoWkBNZcz1AmC4LSq14AxeJ"
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
