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
    "5eUu9DfCo34A2LC3wapZbeM1FUSQRWDx5ZMApZkFVyGdVMDWvFGEngmLk19TU5812Xd2p8hZuU4svcQc3noyh4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W9T9JqPVzG3dLf4seSywEaWFkHZe1XmpAmWvM1hCQJLxm24dLNvKNQokr8Dj3Dn8f1P4LwnvQyW5fpJWcm3tF5B",
  "key1": "i1qTukSijcttLMcoWcS7iXKB7CV8eEQAdijdekUDZ573CpwxzHp3Y5XYKRBxJpAgB5e37hm7MqQC385eHZ1hx8D",
  "key2": "6wDj6UsnA5ouNqu2H5vvjmP48BmysDrE1aqXNbLkaQAFcZZ5kRemKwhr7nzoxtFvSPfL9xXyAvRDRw5SjPmCzmT",
  "key3": "58MAB6SmudXg2tPc4Y3AnY6WVe8vGKaYcjTC9pAA6L8jRS1xEhwgbfEuCCGjBZpCsh8teYKFwxd4k7tDKxfQbgXY",
  "key4": "3ATSFeBJ5xLMGpqfXgcvoi43UZKX8ghmLcbQEwJtKfcDjkPdGQM7CZskZ8gtC5rTXpAFP2UN3QYw8KRwGFwfo8FE",
  "key5": "4JGDQ1T5GcLFYKi8aUsyA5zAj9HmY2hhdd8QbyejsBAtVqdxeEJ7nUpgFwqHxSXDg96QYAwVjAMitDSCtcQpw66F",
  "key6": "2HRxArd7CUp5ubpHEqkD5HNy92Gb39ST8xmRVpoAawLucsKkDthHyikjBw82bSSEb4mk3rqP4nhjYizEFW4jubDf",
  "key7": "5Cs6AraEbeJWhNYgYWbFgq3MBxp4y2f2raXfRraWCSPYMnts76qaEMkm9P5hvN45kyTuY5NvhxgjEoLsdLh8fv9p",
  "key8": "586wYKw7LsiyAZzRgYv2c64L5zrb55yLWjWT8k8VJyVvN6N1DnCkJUcnke5zNr3phRvcTPLZhk3e8axPCN6NqLEK",
  "key9": "5x6AvFCog47GYMwV2R6XR1RbBmNjYqEkda3kQPpq2fzv1yKqhmHbVb3vZgo5SYPuwqWAESKyrspMixyaMigw2LK8",
  "key10": "5J9oEEy485UrQbKVMbLiqA8kJRidiWNeeMmH8aXkCk7X8RD3hk5jLipVVpYyR2WCn1BApuAUteEFfE8G2bBz87Nh",
  "key11": "75pAdPHfWKPPoGtVH7WKGdvL9znHCKDqQxbUj9a3g3Ebob4mQQP4VaMnTUyhbSNCu5KhFpUc3QMVtLmf7Zoxwpf",
  "key12": "evSsk7oVymYgYBZPipiviY88gm6vBueprdR3rkLN7Q6ra6Bybvapb9hR8pqa1A2vWPSv9rfAJaueSTi8To787m8",
  "key13": "24CQ7mqzatQuT14vk33txP5SF5wt3a4Hx75phbZsis439fVBGBbKZWP7GCao9QXX7vEBuyGiwFGsC3dGU72wrqcX",
  "key14": "2dGZ2PsE8QQmJvWnjv4avMHZYngDiAvu5E3nK9Vec7jKBPhWrGDWXjT7yXoziuo8JUJvWMRFu4uPQZZRKhcadYFb",
  "key15": "5i9HJNMmrfjGLrnYgxWrDe1DMcxKdqYsLdut5LwHeAx9qiHEJ1pm5yE4vSTDV1jL8Fh6NXFv8cM9zXPXzMCiuRFm",
  "key16": "4ae3sXxBHVyPyAYhb9uWwRiKCdCvaWixutFMNaZ3KHnQFsssekVoLXVfrRZA7Xz6xzAUgPFts6PxhrfDhRa8prXz",
  "key17": "48LALokKDF63oaPRfLNWtneobb7Yqqmb93JZCMvonFbgTS5BEkE78vPNqUBADfky9UGH1o9FKKvfmqMjXRMrSPMX",
  "key18": "4bqimQd56VpZD46Xpd4hhpKH8851rowXTN5eAPavJwbPJprb24tmcR8C7z3vg1KaRpCtccTrWVDMc5xuaSqgg12G",
  "key19": "478UNuXUeLfFVzttPeSEHFi64m5Q11TkzkxF7Ce4dUnQVyg1xiPMg8PhqTofHJpQsKaG3MkU18PaJS9ec75VAZHp",
  "key20": "2aiY5tLud4wzSuqZ8e6qFjXUDTb5UZo4eQox7tbZLwfp14LePty6wLfXQhMXLH3jFmnGCsphRXgBBEN3VdPeH9Ld",
  "key21": "2egpZhLC4yPMEXdxNYeBD3G4cvajDfByGF2ddzSXmc8gzkVyZfi4h2vBegRWWSHGi3Q7EpE6EbxJD1CCSLW9KMhT",
  "key22": "KqJxU6nRebhUyxyzcTCihnv4zpThNza6v2ZczZbreQUtEQJ8GsJHJqTYt4j3QhD4KGzxRS4SmPryfVHe6eFDakT",
  "key23": "5UX9m1iUKBpvLB6cYXXnuHTZuLQAmJNeXiajE3gcp1QQgkmhZaCoGy4WX8mGxcAEKawMDEWiSxAnmZJhH7karHSJ",
  "key24": "bpSyFtRfmQXZdLKH7qKwLmmfuHQ5uHgLZicDcpPz51scQ7dQHv4MnrCZhT5qf8Y89b2bJ7uiiJfoZF79dXmT3MS",
  "key25": "2xXmFpN7DbnzQH4yFnQGSsvVHiTit3CbJirQjN5hcVCbwfxV9S9HrBqj97BsBRkVA83hiJNvn69AnTWhHf6QoPCc",
  "key26": "3iN68N2UTfrADzbBkk2SA9ETCk5oFeDHX2XsxSFV9Kdv2FFdeAqmpgMf7vHjRRXFggy2S6SpUF6tkfbj3heKYMCz",
  "key27": "5ZrPVgbLmngL85y9m4HYprJgJssUP5sY55dH5yzGGtm3VDGr2GSNTt6dHFnnUeR8Q9MTeUJF1EMvJAS98c4QE5DR",
  "key28": "3XBhcf98YwGPhQ7uA8r2bVii4B4JHeSLHxKDkE19LP2seM4agXinQTJkGKDmF1h4G9H4Wj4iHizSApsz9nCcer3J",
  "key29": "5tKZcnspPxUTWB3XuX57aMYzNvueKQudbkPMh1cLZCa8zdAQnkDJuJ42ry3xMrvKtDb8UoUoTdt8GbUVcnwK2BGL",
  "key30": "5rWTiycctTvbKSDAavLpDy1E4FGJmW43XHwKy6sxUYehA928hvtSR3mdZrJjWeXhUKdhTMC3MTvkEfzGovSGfzoU",
  "key31": "4mEM4XWnYMJyLxUJk8N8Cr4PZepLmyvBU67iC4Pb4nBoLMRGqBmCjSGBomHEpsauEuACrQzq1Sosj1gRi4bQZCrr",
  "key32": "4p1MT8R9JXfZUTiRTTKadbBktB2ikLhsKRh48z564miJsk8cg9JZ8sbadXJfxPCnsi59tUFFeBViuCgXGbiTmZ9y",
  "key33": "5gLXqQER5ApEXrxLKR5JyHdNpEcfFUZ43Nq7EVWqjAz7DPX5Q2v5kzk3csRbEvgF2qsko9buDRk3e77uvdS4rhjd",
  "key34": "2dP7fUtaXAehjJtoKaZbgvBz8nKkprePJQxbP2ZZs7VTHea8kmBNR7Rq8WUSdANTE5hJBPbJQL2R8mpLkA5nFPbt",
  "key35": "4WsUyLW6AEcWJtouGCK8xvE2MTAroyyy2B9g1x2vFqNsNhY4GJxXZAZ6aNLi6NMVzorzCMHFCiD41AJ4SiAQ25L1",
  "key36": "dGmjuEE3AJeYCLYLi5eWGSpGD156bodeVuWpDJY7D7LnuBPyAQeaCuQS9yQzgCwNvBhxRnJq5mTSu9nEXPTUXEH",
  "key37": "5eEVwtxDA917pSDVSHBknopNovnS5eymydFVDM6gw8XwTpZ57njHNG8oK2qXzhZpr78bvx8GF8S591jsAB3iX2gz"
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
