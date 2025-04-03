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
    "4UhiExLnC6VGVaiEQekkogRpVUYJGLizsUJ6ybKveQFenMtkPTxWXcoHtueX22qGUsi3RwHkjAL9zrWhjSknwUwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnjsDsAVb8dzGjx3FWYoxg3BhiBoEwRdPD36994Yp7sDzhZbTZpzHhShSaehWmZvGYipoky8RVTYF5MaTAswhuA",
  "key1": "fPiP7QjTCNCvNGVBie1it13QJKWQGMzRcS2cAjgPUTG6jwrVqi8BvvYUyZgLjizNDPWSWkt9Pou2jtU8JH6B48B",
  "key2": "wcW593spJj9EPBGNeQ78omkPsJTHXQeRsKoz1Mhvqk7ciu3C9MzWQCshH4vFckfLx6Q1Z2sKNfh6CF9x87dapQd",
  "key3": "2mcERJ5CKXvtwBE44nUqrpnc7DaBKQLcHJpHsyE9XDzttvq89GXH9G8hQqieUmqesKHmuW3ruNGueNP7Gn2NoKfc",
  "key4": "4UnqA6LTXFws7cxBARGiPcGJfitWRppS11PeHWKXPwaZftgEGZn6fcYtgbACwiBYwGAEn8Wxg3NKZq8VRpGiPa7m",
  "key5": "3CD9iqAigxZVvupngTkivpkB5MgfEt3LaxpvJJzSFnAFe1HXGTNnJFD6gAT8M1PuDa7LVGKwJReyoQQK28W2d5J5",
  "key6": "Qmxo6poaxMGWDwz6QWzugMD3vvkmYzKXT6LM7pviraCuBNGmWFk5dEGDKBsctjvtwYSmaQJ79ekVMxBtN7t7ewS",
  "key7": "4Lg5FvmSfScxY2QYdUaQQ2EjmpXdCo6KspLEn79BTnmjCvQYooMHDKbNM13mnc5yNVGPiafv4RKgjsYaEJpXGim6",
  "key8": "4TSiVTNFEqJfdqvTUCZNCJN9PfcGw4dhxU7wxtXozwWzKbTb61DEUqyqg4tmNa7VA1aQiMRmiE9UptuamNg8WfZQ",
  "key9": "5NcUazMsi5o2MQ1if9QgDgRTEpLNmUkRxSjxwiRgCsoZfNtvPJ4igypsZ4tcRcnNwTmDv8WvBbHpDD8xbo3DZV1S",
  "key10": "36XdygxAseya4Ed56uMsVyWQghwsRUnMSv1z6wmrt6YzNfMYNn2iSQg9L62zEzEUCvFnECaraMKsS4TGsEu54zL2",
  "key11": "2hhNGJBfDc2zQK6zhRChnxjL5zVxioLha5artNq8Ss7azydQuFoURfDu98VG8Dp8QzhiDbLjhLPBEYA7amNd5EN8",
  "key12": "or4X73Xq76smQbBx5mgvWHd83pNCa7UWzpzv2dSab8hEkLXrfvbgfX1QWf9qxzMjCQbXo1gJRPSrN6YqEQdDakX",
  "key13": "4pEbktc58acago3BJyPAv3gpQYdBZu8cKuHJKAf5sS9eb8a424DDiutPnpiH1bGCGM11Lf2B7R58BW8xJdECkg5K",
  "key14": "4hbiBGs46mDx8FUUWbJoaNiTjKwzeZvqdgnd92WQTxaTs8vWLWoJ9wMrweyKSvk7WpMrujjtfGs7193yNWPG7uNC",
  "key15": "4dE3Re9hn4EPJrx4RCa5JRNS3c7hg8Wnr7bkANwq7T2raN9qKt5isCaMkUz2wa3KuCaMbGnisMZfqYmy81qUiKQS",
  "key16": "5tPtypQAFomH39j62hK1wqLYi7QLixnAsCbnrrN635BrT7CptQmAu7gCybHdEdqgRnzkaKtKRnZKm4P8bGPHxmWz",
  "key17": "5kaoWHWFjsTrj3Q6AKvnT7Rri9hEfsY1MyGJGDnqx1nYTJJEEzGvix5QNjkPo2YbAQYN9bdw9gVH1hFPq5teob3N",
  "key18": "2XyKr7RuGWP5Ddi9oy4AecVHQvGr8fP8EKgW59dKAieBNzP3jE4EkKrXRax5LUgNoGrg9jbLjvJF42ZrTfgUkus",
  "key19": "674C9XtR8a4rEf1h9nj5DPxvzNCoffosUKwcagAfsk82Nz1Wch16PVxDetVvMKHdSBgWz8nEZyCftr6exfS6pkKu",
  "key20": "MQjSxmNcopzFXNttXa5dhwS1MjjcvTpoyxANuH6cDAXVWsaoWDbxqmEnifsVXv7pT7EibCEqiRZKSNXijjrDTx7",
  "key21": "xsutvwXKz2DJ2MB8KHFsrTF2EtfcYZibAqVgmeFkJgLx5JBJikefPaeeUDnkVGqi88vkSdeSgbEQa1yvLizBVW1",
  "key22": "4cgDwcF3BveKqtFZxWj9nwn1yuPbMZPuAKLdkwgRqG36LNjdsznSdebburdcLc2BRSyWa7ftoNfSuXRg9sjB7DxE",
  "key23": "4U6U1vCU4VXurL883TDwU7qrDueoJpP9qRmFJFvGHv9dji6owU5V85kB9BgQ7mDy4QDd7q4UiR5KkcZiLoj9dfwM",
  "key24": "5nVp5XyrqLU2odjBTBNTeCGmfNzzoBcYdfU8AvVySbv79t3vekwsybevVzaVAadTcT7a9FuYaHxyeffYysff1mZh",
  "key25": "Lx6gQerjGLHWc1gK7fL4F6k6i6wycyLyojbqYLPmcf2dcjDQv2oUjxQoBqpMqzCbrx6idgC7DV7rTua1CQDTJmc",
  "key26": "4d3twp4L8ifPTqciG6pwR4C9HtKpewSFquwJowTpGa8NUsDtvVdeTSecWUYJJ2Viw4SyQEyjn63fYTrhE9ppeJEk",
  "key27": "5dGtS2K4btjCUNfe5L43mwiuAozKdmUA5WXTrkssEf9bFzJwTeGQcKHYux4dFx26Tc8GaiwuayAiSueJjXc2Tvu4",
  "key28": "3izcgT68rUnvkkYGNSsEc1qjgMyRbWhCEo9Xro8qRytE3ASGhYX25T6DZZLx6t8tHmDn8bBfqUD11b1jrGcPbxM",
  "key29": "3jjezgUGf7R1b6C2poMBKQ1Antr3Z526RmGzwRyRvMvqJtsAHyi9J6uUuBWtRkoezzTm2gDL3r5NFt1tvpHAaU2F",
  "key30": "4ThAZ6Heo2MsEQNQGvz9sDJYyCbeAHRoJGDhRi8biasWtN48TivqUFs5stcYSrFRcqsRz3DGNcchayEDUrwa4vPZ",
  "key31": "52Q66zhZARpgApiiVwg1vCT16CFcteAS7RZoQdk1pEqiEGWfEqN95a1CJqGNzEe3GV8SUAnN6kVm3pe9MqaAqtfx",
  "key32": "gVFxK9XdSE4uMErekByoS4e39Td3Vo1rZXf1KjM6V6qjLnkH8QgmRaMxXLuK7AWyqcvPKbvieStffYhxVEU9dJu",
  "key33": "VmLzaKLwKEVqMxxdxir4qDANWNp3bBix5Qdr2qXq6hM5sym4qbKbp7yBATzsbz5ysMjkNgCf7TXMWD4FRtq7pfs",
  "key34": "WGyQnokCuc7xH4YNb6Qgdhh8CFTeZsEW5oKwNhBbdJ5ZBsNv68xU3roPNLd7d2VCvvy2mKKRftcRHg61jiRnX1G",
  "key35": "3Zu25489pVgg4Mw4vTqP61tzuPPC1TCabNZzn2HAttpbfsYfradNbCZtSWUPVCRf6p44ukKBhWkjQbjyEus6Vkm2"
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
