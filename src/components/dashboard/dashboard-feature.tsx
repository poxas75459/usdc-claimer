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
    "341HGWzp5w8sLx8aGTfpCJgGWvhDnc8d8p6nxcN1V5aiZQy4tk6cGyVB9MHkpVgKz5kvH4thmPpGfAJab1wXMnNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sVqv5Scq9phuJVHMfP73AEqwMkZy2FnAp9Rnhix1SstjgSm26bzewasb5ve2pokPrq8KXSZJLjo54YnBJi5y1dN",
  "key1": "5WvVeKaSxUwrj57wJMzjb5rTWb3dRJ4SNGongaogJ68W6d2dY6sjdviGgYVUdFN8osxpS8T2HEn2TcV2FJt2SRc4",
  "key2": "5SgnrgwgPJy7WTzjseF6Zod9Hpb3HAVwasfaReWquZ93HE164ixoYxSWgTNjLtr2tV7psUozbf5reiZAEp6gumdw",
  "key3": "3gcN6hQk1nrbqcEHtGU2na7xgGUARse1Vj2F3FiaDN8Zz37T8pBm84gsThKapDXK86y7bbvQP8AxAn8h2CpwckXq",
  "key4": "4r1BsdgKT1Fhbc2rQTGqVoutn7fevSjdgHD3cixT8B5VpgZk3noE33y7K7bmxZsDW1eHDtr7ugybTtapJK98Py2m",
  "key5": "FjpFf2nByh6LVKXMHznYyTpZ9wqUVE99srk7iyvVKUf6XvsPtMhBbPNwUJtLd8n8HsmSTJHJ63gfF3gfMHq6CEJ",
  "key6": "3bjscNc7KpccTLytMKnTWhxw2fKzoe8557CoE33rsgZUzDmUqC8sa6Mmvm3rMBSrQj6EFwFJAhBt9X5naxD8LgdU",
  "key7": "5xGzkPtaetjLeFD8ATavLTQ9rYz1SiRpUvcChUbbyDG2iyudr35qYtv9vd5VWRVKzhrNK1FKfQrTFe9QcddaMKwc",
  "key8": "YS8Jrt8Ea8GAannbBy35KRk8vHATJ5cbgf79tU5NvhR4fu8oBKySvpL5d5zPXcprJ9h5PXtDGTFehpqej7vrkyM",
  "key9": "3q4qqQb9prvcho6s7c15xAa9VqYXbGDaFvY9ns6ZkgexMoLNNrUhfH82vVbakowtqwV9cB9dXMvjMGSL9Xip9Nm2",
  "key10": "3NvpXyMiAnzSt5DhUAhfodxXRsYeUpPme8PbMysUfaQxDFdVSRnhWtmrCs56p5WjydbcF9j5CDLyCQwoKA4V7t1z",
  "key11": "5qXjTZkujscxo1MwQjQKgst1tdjRnA9RKNxpfLiggwXKJ4KAZ5pq4x2dWs2W32E3mKFqWoDegtSrmD3AQ2YcWbap",
  "key12": "1YeP79JLoP4WzmiCvYMN1zT2ct6B4m7gCU77xfVsYQgNMgBAt26RYkq9Kais6DXHS7gZ75hrqTrkC3sDUzrV93Y",
  "key13": "4L9KmycTZ1U7efNhDezWLnt3DF5KcmS57hsygAps7idcHuuFTYiDysZ79gnSXNKov94DW2KXXWcYTGm7fcL3e6RL",
  "key14": "3vSdRw9o1yN8qT33sqwgGj3C1gDmwEkogQE73ZVoWyueenn7Pzv6bLkWBKUZpjP1mXk3i4JwKpQciLA2PhYkTc7n",
  "key15": "26DUtKUrjsDW2eXvxy1hRVtLpaBnPk64AYn9223zjMZ9Sn3mP2fZk3w2ArtCLc8kpBsE13ux8aT1pKg9mqbp4SZd",
  "key16": "4cYH1kPnq65Lvjt7hHY9nnWuBP8iKKucdMNf2hazfE76xKToYPfrCJdFrX3LP1tJ5Q2U62pjatGBYjVxxpgFQosd",
  "key17": "4oErfg3p6654BJSe3Hnma4ouQmoM4eGcBaroi4MNJdEU1FthBkDuNq6TKTnMGkGTqP2pFUVec872TzWbWq7Wmi6B",
  "key18": "2i5CBjNdHmrwtD9nhH3MAX6Vw7qtJf12a3SupPCbEXYVZF5BQdCns6T8aZ7pNqf6gBYBZa59hF6XN5vzUkxYyDko",
  "key19": "2eGMPy2LDoGKtepFGUkqLiNEtb4EmFVvKC1ajn28VDV9i9XRm5qZ4g8fHVbqvMvYKEsks8CKhP39v1WaSHXE4VYH",
  "key20": "4cENC9EBNh8vTy5bypKPRoxAvtRLWVNschvAfj5GpW8d9AVa4oxyuvcPXvNYn44jU3pGhSoUwteUqETXbwViHYYq",
  "key21": "57YWWQP2H4wgFsr7kyHNR6d43YyxqtXbdKeJ9gpUqXAUwnqJQkmmuTi1qn9m9PrWoAWQQuSZfDZUg68qM1c4n9cP",
  "key22": "AqY3U99CSQxsacyPxfX8aWkPnMCYeUVrGqEAFoXeYcqZEWr7ey7SFEKxyuXypdxHxaYdqCAg9J9VBMyqgrnvPnw",
  "key23": "3c2jLHHnZsdgSJXPUNs6vsTn2oULnGJYPVG1QxoisQfVTPacXWwVrm66xVCuWL8JqCGRu1YZReg3VKn6G9HucDXn",
  "key24": "24311cswmiKLdrmmAhZAhVVKhYy5YyoNjR1nNDg3nhp3BaSc6S1MvEEuf5hCgV1HPyGeyzKH8F2MXzpxQdU3pQjp",
  "key25": "34ZRSyEyf2kHC4bMTwaGJRVqCiPsiGpYC9kUV6UNs2Q2NUSqvLrn8ANxZmAxYDNvZx9P49e5tLutAeN6eEGvDAMT",
  "key26": "NtmUiHri4VA3sWgYHhRKBRgynd6zvPyaGHKR6qaf48Z2YHojZosCWWMeaeXLtr6pzn2VXWhGy7R88WQKRQiUmNa",
  "key27": "5Y6KDmLemeDZFJfvkq77oSLAfAvhqsA4Kh9exb2XQgbRXoRFxyJnjPM3gYv4Bha6jsb7wEm47oUFTyDeYhEdanfL",
  "key28": "3Fwh272ix9jiF434cRc3e6XGG9rm21Mxu8x4XXs1vCeCinTdDutPeSRhcFr7iXQQHmdvtoAehwCdGdaToDmhH9VU",
  "key29": "3BMNvbp5a43GNc7fo4akTB3jCAgcvWqet6M9KYGkFZVZGTjyrfqbErHEMkvshagCvyQB7LbJ8ctg4EcdQjs5GG3n",
  "key30": "5vniMS4wJWrwTcmKjvyuQpm114X7bJnAaZPCUNmHFDC3Uy3MeK38rb8xMy8gGnaEMNsjHYew3uo2kztyU4sTWZbY",
  "key31": "3sC6LeGcpLs8Cw6AxhgqzDyGqpiYJaJxyS9Z7KBe3xQgiQ14usAYDRmmaRBncLmFn25wKgQHnxS43Pso4o4QTqzZ",
  "key32": "36hL6ZRmzqvmfdKVG9SmwQSJFJiyjEdCKDw3ZyuFkyCqwpwHfSVEbeXrr8GkwBTbmMMLejpqT7Rkjy7y2WbddRFW",
  "key33": "2ByAErsaVS1JcBubhEtwsXrRGbPfZn1PeK8mQRnkPP5LnVe3yDNkz8JWA6Vh995BV4C99bf4NoVmcqhLShj3PCmq",
  "key34": "4ANVXwKycmDnqMckLMgSMDLkFrKLTeT2brZbxqrPrhMFuogWq9zXjGZjPGxEnt9zoEeLyyx88cVsW8JuibsWDDfw",
  "key35": "uvqRuRRXK375YxWkEkXxTiBYeT9VuC7nMoYTRfXv2WAtKTt5G7TT49KPjtdoigTJn9h269ZkzGGYyuqz3VTviX5",
  "key36": "3kL5UKRcCn6NjA1hjNndXeAXx7DemFUxWsdNSoeTnUDBs7Rq871sBAKb7Z8eAKCTrRKahQZJKpQZzwzwAgsn87ei",
  "key37": "ebKaiQNvDqD6eMnehZYaVy9TwiQrKpK7a9sPgBdsVPnbe294iutyNrnuBLwbtgzXbHmctbL7FRtnsM45vZrcLMg",
  "key38": "sttqFkfyFs8FPqrpXd56aoNWRTBKPrRhd6m2MfdFKdMbLVQwHSscaieysPxvhg16KhtP9HsMo7MbD8zMWh26RL8",
  "key39": "2bkoJM9JfyWN5qMd7FHoHaRihzaW4bYR9KZWnKSmfLqjoD6jgeEhNcK1BSuJ9hHBy8Ljft1yjsh9jrzGuQ8aNKgb",
  "key40": "253WZsAcWPKyZp7CVAMduuRw44jxsFjfgTo8AV6sgDsyyxXhdewwy1wHx6J8CDoPRfHREgcPd5PDAVJGNgdH9YYV",
  "key41": "2cAUryczPSKJkC63aWJqgb7zTDKcvTctA4dyymkcbAP3J349LcbyeB95ajf2RGQ3tnrbuya9sPhFSBhiy4MKAcrz",
  "key42": "649wLcpvWPQF11u8wx3FZUpqcwVpZgaGCqiPitX98S4PTF2TGP8LQJ9ba8gxtWn9eaCKm8ESQKRMEc3dbwuLWkNs",
  "key43": "54Sggutx7d4hD8ncazs6RUZXgChAz5HGmLNgXDGkxeMD9fauLd3mrxDtE5WeBFfiVQFg4zrF43Thgs1kQK5FT5NE"
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
