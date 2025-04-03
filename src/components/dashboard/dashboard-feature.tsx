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
    "3aGye8S957meutrZSc3a5wwVj3RXZZDxAzcfpvhXYrq4DCfx1AyjA1Lrj49KkYnNmGSqKhPUkiEcpgsMBfptUH7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XNy358HbzGkbrHy8HfZtar89BXZix4VNjWWpJ3aNN49NA9xA1c4Gf8aZx18BmB9kZCqAt3yosEny32mbAX3e7HW",
  "key1": "55E9VvpwatGP3XqSwcXPwY7G8RiSr82Jgj8Dh2yJ38cvoT1dEP862ohZDtWhsJ4yLFGNa1VyiqZVmPT1nTfdAJdZ",
  "key2": "24mE3kM4s7S87sTKbGocc9UL7HCtLoyqr37pryjp4MoU45EFf5V1NU5ngjR38m5PpaEHdC7WrGfm7Q7dmZqdDVFm",
  "key3": "3XbZqftnq1LwfPRBLhQLR3X1sUpbaVFhYpmSFkjVoeLGzx2VqTmavB1nsqB2KLw3B66R63V2GVwCLHDJUv6zjv1k",
  "key4": "4dygZgFz8MrSyBM5adFRDiuX3C64PDqNGbget2rAm3a6uVrh1bpTY6RanQZ34omJNeButohepJj2d7vLjhJu9mDc",
  "key5": "5p2b5V5ac9QtMvdr7oWUcdPh5gdxtsu2rYkS922WwVkRqfAgnktrGPyEg3FzpiZFfVRuikKCbz5t7QH2mE1WiCVx",
  "key6": "irpfuanPPLiZVvvtLVCYdkjvEkwwUeCTFQwMNNDYmx8Y5zsBTC5KujDcbDrPwB3qfgXspmWXS7EdYFJ1A9ze7FB",
  "key7": "5tBV8PSN6hsGwhCjnEWCgr11WngM72igvh9FcBoUkLFhD9VCTTZrYweNgksVeZUxtz7uMS7q8AzqR27LLmSpvfww",
  "key8": "3LDAaPjXcwDhDACVNWSMe5gxce8VBfXq4jRnuRhDQUdPokoHSHk2CTnx32MMkEmC9J3R9GHEBLPtKaJapwjqE2pH",
  "key9": "3WLFftjpJxYncYb6unf7ocAKytaDrGG5HtVam4A71rK1QmFHhYaQm5jmXfXj4kMX9wuhSw6LhTMQ1jVE7pHvTS2h",
  "key10": "38TBXdYY9ToS55VtHZdc1hQJZvM1MD2EmGVqBQ33M6TTixk9DELx3XHKxJtU2YX1oC462UbVmvEYY5Cnz2x4LH2r",
  "key11": "qkHER1bwqCsnDEe9wSrwXdy1V36kpX57GfoB6zZ64vYuVETRhyKXE5bNzdt6JLb96rKgwACj83eo33R8QKNDuSt",
  "key12": "2cTtaeyPaUscNDmyp1wbDzgD3Ma8axTMpSooGcnAus8wUZiwaDtxUqidkizN2rGw6XEWiK5BuWdnwdJu18ESXbdi",
  "key13": "5EWHztR77dg3FyLjmHQPzUj4z3Yt5S96eXojSPRzUYS9BBHh9iYg8RHZe99rMk1dmSdrhWM8jwKCczNGtB8WRzp4",
  "key14": "2oUKA5Ptpa32S7Mo2ckCa9nCj7krPedhDLKMmoYkuusJcbq39fNqV4nrxaULHK1ZT4ZepfmaH4w2vGg7RJ14W7tU",
  "key15": "sPoXkafgaRU61kRLdTSg2iMwnyXJ9HZANKSo3ySaeKhK12LA7ciY4FfaagijKKdEpAt5uxD4SBjNoVAr6j1NSYS",
  "key16": "2pabdDvikZbmyiHnwWMv3VdLHoMHUQzzJw69o9DZqMndyX8RQZUPAZQp4uKB7buyHEthRkB2xRnz9crmj4ixq8G6",
  "key17": "5DgXzUcDoQrf6c7JWs6BiJJWc6s2rxC2fNxeNmCAnsjb5e5ZHpQFHoQ8jfbnFAHtEXt3jNXA9NYr4Ka3an6J1UHK",
  "key18": "5VRh3KVn5vNqkdJFcPp8ySVc7YtXbxgowLzVcHx2uGB6KqMDkn7tHijmFiVfniyHwwYicfmDed6Lc8Bk7Ga4xPfw",
  "key19": "fyCtnPD4e89Rn7VoSJQbiX2LZJ3W3Sn5gVySYTJPSr2y6p9ift916UP12y4jXHC7nTQU6bvzg3NDY17DYxsHH7G",
  "key20": "5PBk3qBjUtYC6KrcW9i9ghqNN9LZEKdWkQsBUwgM2rySuN6q5xdBx5EVJ6JDhZaWpHjajvrRs1FnJKxZRKtk1p9t",
  "key21": "4gFZn183QuqJp4CEWsSJFgRaw9Vra4RWMtVPJLuy2M7yKPm48ry2xcdk3yyXDZHqCd4D9AuwzvA5CvT9yig3ocyE",
  "key22": "43DnAjGoq7N6L9rAmWHd31BYhUqMDzGXPofuTkAnQjkdWybKTWWnrk7p6wwYsC4NpY3rM7hXNR5YcM76hFx34Udw",
  "key23": "2FSv8WZW9bV2nRC73zHk1vJjJcPxi6E9PrPZmaCJMBfzFmMcyXgVQMFFp4nLpQbfEPyaUywckE7ivR6AR3W5akck",
  "key24": "4w7QRWz1hdva5eVVksFWLUfrnMwSydugJWAscQXbJFCWynM8nHDoa5FbtL8jadYbLi4cfMFto5jHM4c9AFXgFdR2",
  "key25": "2SwZboTFAvcdHzs8s9Lp2VCFXYq7UjtM8KhMwVwobxhYLPMsem1JkwmboTMBsfxKVmyfjTujHWg6kDMFSdhyjASo",
  "key26": "vauM4cyfETaW6fZp83jZqU1LAELC3ze2MgLdYmPsKmE3V6yWuPQmsvDR5MvrWZrPVSDupZaH3MA4kc9N2NFuDhQ",
  "key27": "4FLddG1LU8ecuMrWaE9mFwMSQJcLZsKiLuFcDgRfnWsjW43uBc2vWXBeGtHecfnY8PpwiTtn9diL5VFRnqq8wDXQ",
  "key28": "2fb4pdtn98d4wcdTRF84Ft2ydbpFvTNuyix8Q97QiDEaG6EST9zk3snAtksnjutspEjekrRqUoavM95r6whmKpPM",
  "key29": "2qJz6icsD5LzyQDwcTzr9ETrrU46hhS5iZccqoMxfXkvEQ9VadJgmPH58vLWxoJKozKkgvJ6GRXSbrLPzSRBAsm2",
  "key30": "5AMQkY69VxoqBaWUNjYPKeBXg8Yi1iMwpTXN9YpTuZ3d7bgF1AYLrQiJJE2GdqjgYH84hHqj8PWFzPFAkWvHSCuX",
  "key31": "4peZDoyzuihFzUh5rFvpczF8p8KmEU31Jh7ryA6nZFwge4LaxvmN5UNupGL2SH4wdDwP2FakBMW4ZTsVD8j5YX6E",
  "key32": "2ijaimU6nZ9dVTAcUaHgHT7acPCmiqi5MMMhPhPUJktxaS2NMv2hzhZN5mpzoyKH3dqad2KfKhDP6V3EPYAe8hda",
  "key33": "ca37JPWNqRFRHLWdQQWAkQ3WmPEDcemApLrTM5dzraPFXCAypEBBy98XqMHQu62utcHUZMiEJcsRpDXuZiwAvtv",
  "key34": "4euZSDNQbJyQAUa6X6Pi394asRL7hMStyVV8TBf2kXsmRKbrFQZ6S8dFS96UDeWhNUfVTjnrp8eKyGg4bubotG2Y",
  "key35": "bEuqjwdde8fHzVHSFX2mATERLnUZijBj5rfgcYiVwP7TTVQ6oiePsG95QGiEXbTEyuqSHHD1jBvrCewpxH4xznj",
  "key36": "5dAtKaiutiQ8qKyZDAeX4Z86x1bwBK5468Wx7eGaXnuHP6rGYPmKpm1msQwDgXJYZ2cKu4WWnCyqzpSSJqE1WQvY",
  "key37": "5d8aCrZmN6XiGSN8PRBQKw1YUhC4dZCb85yxkmL5bWEs6GV33BMaeiXoQYGDRivebsdqSxVoSZvnQR1zgn8UT3pi",
  "key38": "484uWhNRsAQVP9d2RiupNp59h1wJxdw8eFWZJaAYKi86qkL7cEazvUw7B8yimXpVKFPjo6AhFH4ZJeTTsEKVx2fo",
  "key39": "5kxPxvTdyyWQTrdG8Kpsy25AyDt7uq3ULEpWfUJbW9qCuHRDG8wyUq1XrJjEe8DCjuZn6vzacU61TZ269jPyMXEB",
  "key40": "m4jdGevvTgkh6xM6WUTHLEAw4UnNZqvT5a43iHv6idKkbdnvRCUBywids7FVDQewnUca5SRpFiRiY3mLuBwipf9",
  "key41": "2QzMDfkWfsi4n7kCEp1a53X7bDrtydyMhr7iRi5BhJoRvKU32m6iwsRdA3W3anfjW7EfKX6QUMR1g66Hi499CQij",
  "key42": "qPUjCj6QRJY8thRR9t6Zu2A8t3fRpwTbRVMYQSx3jw23dDo4jtUMZ9wkZgw8hW3dCWnzMciHCwfor6UqxFzzyzF"
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
