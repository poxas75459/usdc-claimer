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
    "5bY5wiEZ2DgxvtemTSUvfTViEmU5bgaafwQKs9HAVxahfE2HDxM1tg1eZJ4gqZkYHQtG7qrX7h1nTjWL2TfExna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCuSV1EZY4fa3BHgzESCXcrt9uYK1w88qUJZpQPw317UeqxchB66riudwt5V3bSm5oQK2t7LWZVWMuYEv41qxdq",
  "key1": "2t6WLiBfa6EKF9E1R8BbzYdjRhP1u1xfY3vyL9YVk9aXkQAXccvgaz6DJsMKbEjHhKEQfLjuLY5YJhse15ADXW99",
  "key2": "AUuVBmxX4pA3QzeFbgoWQArbWqSJ5got9v7c3qhtFbuy7yVQ8ecUTPGyb7GAM7zDtNXDZQedQrJFgdufpU247yV",
  "key3": "5SfVX4jNQrSTg87XbXhpHVJdsg3FfndKcV4Z8oZQDr8nsYpNrJVSXRkfK5a9RnoV55E8rGJfnAAnGrid1r1DuQVt",
  "key4": "xR9LjEPtQjekp6NB1X7LDz9uYKpp4zR3iCfrhKShzngSwGQ8rPYpzmr5eVRGs9x16akkTAvji26BXhRButCjK2i",
  "key5": "2UGZMuTmjh3FRruT2kc2CQULjpjmW4N3vzYHGpDdcoZBKtSr7PdqPG1g2kV3HeDsKUpCkHoMQCRrDSLZNTAXyvhB",
  "key6": "3eKLzXUn9TrE9EXFKQiMRzXLpy2dsCAcd8ZoqajfzoBT5f3otuRnTHjKGuBQudcLtGWPqESTwsE4YKtLvtS5HcLg",
  "key7": "2GeW8tVX5egWpC84pEdRdvfTaBAg7oQhzK8DBAtVqE7Rr8xE8J2Dh2gpEAEuaMaQB68HtFNUAkFViqjyQLAhY9M6",
  "key8": "2K668oJNCyzKmyUZhnCKyeKFL4gjmXBmGLbHHx8wFBLcKJmFeU8E7CR5RFo3RHBASWPow94pYxtTXvyCs5Rmo3Sd",
  "key9": "jRJSfnubpFx96n8hN8JJF7hy6pMeNx4xthF16fuShCWwybPE6hpCCbKtrZZo4nMo4JgxgjapQdcRTxT3KCnWkHQ",
  "key10": "4BcYdEx1mR5fkPpHZVyvQrp3ossBxKbMnecUkbCunPEKTmpaM98H9YECEhsMa7Nxy8mkbuuGDtcsUkHeTkJPV2uJ",
  "key11": "5Efe7Ath6UCatfjsqFhGxdKovtJHA7F7eCZviDAPB4gVE7TMN7fYHk1D8AqrqXErE6heXzZCrmR8Z2GmpPiyFfZX",
  "key12": "CcfxztuGBuEcMvDvfCJZsBpWJNzkJrCDwmy8oDZwue4JMUgjZdLHPdd66ftjsrpA8uo7ZeJVZuiADehGv16vxtA",
  "key13": "2Z5aVLdeQ4UzbC7SmQ8X9X1B4yvfYXSaTCZD855UJYxpJ8aGAW8fXjumBK3SBpxtjCdPvGKwZrQN7AGzMWZ8BSQG",
  "key14": "5vdW8dKCPkTdrTjVRGRKVR4HbQpxWeCmkKnJR4CvA6P2wf5ab7GZe4cPajyCpdLsfrPdGR8UwJPHT3fJgsYydZBY",
  "key15": "3hdPtxgm1wp84a7KE46pbjPoKSqPQFHmppSHU21TrRXnpeQMjABMomU8pmYEeHHTZbGQ77GP4KPoG7Wudd9RCE1N",
  "key16": "5hLN7KEkx6kejHV5P7vAVKTijH8u8pVJwz6FVpkNj3g8C9btBJz22C3YbGaBYa5WV9sYUpEyutic1weQgVaAxTrR",
  "key17": "3VADPEnGmxku57Vuv7Q5uUM3YXLfZyE4KtnF123W61A12E5NVKk9YvsDoLDMFoomSYgRRKS446vz8osrsxXwC4d",
  "key18": "4tC35w9Y4mjp7GGWLmMPRregvRCWk6mdhzvQzRdSD14qi8rvxcspzvf2KQBbLDWtjJit9VqTUjN9aTxNBTYZETfd",
  "key19": "4daeUt9LnFnwf5fJ267E5cEXYi7AwHWHcoGhBsMoi6oqsVkWfoNic17ZjqwgaGaJumgbtMfuaAUKnAiT7bBsoMCU",
  "key20": "5kzFBEBdfXuPH4dX7KAneGzykjTXTBFTQ8SxgtmxFxGS1xjJ2kvq4nm7s7eY47cxkom7n5p2ki14ZQxebPg8K3gv",
  "key21": "4ctcyVZjaGsWYy3TbHTXoshRRkZLHBU75FTyhXn7DWSntXNRoyTuqCiube2Y25UbFeEvJ25NbTvDW73KwttmukQ3",
  "key22": "3ofCCntSSaL6EVqPk1h1i6ZDA1ybmKQTW7grCJAENhxTuFUZnbU66KCkLvoTxuUrtiQBpM3yJF9YHMAcEn5RGgQ4",
  "key23": "61jbWVgTji9TPd4q8jsSzdnxMtD6QTE51s431EL6JaAKgFLF1sL1axLBues3J11YWKY66QFrznxQrKfFBcfWXwZL",
  "key24": "2m4Q91peSEJhV54HqVspKxC2ZiPyn2SCRGgCucAfanYuQVM49ymvikySmjHDfM3MLrF7PzUyyRa8sefmALTrHexs",
  "key25": "3wCVrGbvkPY3ZxZ9PcDbQXXb3nau3DSVoYxXLPUcfKZ5LLv5HoMcH4BiVFCr267LjRpkL2kNBXEfoeGC3FicWMc1",
  "key26": "2zvgWcVmn4svdPbiNkQDdZBoZpKmSDDqYh8MZ3Th8t54MScGJA9SLYm26aZbPYXkXauixSoQSL4Cw1iL5RCvKgeZ",
  "key27": "43yCMnXNPXuT3zSkXs1SemjVSX7rrVYAF2tBMxrxSD67bCRNcndDbybJLujxHZTNBkb1YJnLYMSGp1h7NzKXopN2",
  "key28": "2Whtsu2Vt9pP6XyqTs26KSGSWNx58k29LcaRAYA3GPxzhXgrzg7TL2VfLshfDnifG6zbNEu6gR38ok96fjVmZY43",
  "key29": "59JrEP8Mv1WbTfCaCqM6rCZ1weVZvH7sJURc9hDQaJBqtSomb5ZXw3gTrHCCst7ohfGSxhWfazithjocqntXqNT4",
  "key30": "2gqEhon8xb7iCuPcVoNt84g8TUrKQezgYUSbdGfLTdexXXYmKMHtaoAxzisQDRL4or4Ncmkrmwyy4AJurosV6n4n",
  "key31": "4f7CaELsNqz11J9APNyZ8EvmdRuX8vWbvoDoJZpX5UEcLqbqbVio49g2J3kPz1cjWh8DuNjT7LYcHgT8wCCAuih4",
  "key32": "3vSWr4GPfeMEYBQoag8GStyxt1NahmeMVm1AXZVQsjUDkYGGKHcvTbzYTB1QzGtFuhEaNFuuHDqzmkabFLH2rcPA",
  "key33": "4wcrPRNdoxEEQGjYzE4CRBNiekicVBNiuUsePiKUofgfBafrGrVE6Gie4a6TByGkmKuk6H1X2mb2GjbuGdsFMeka",
  "key34": "4D2SPAayabwpLfGMKNPSMfbWa5JY7RxY6CXND6b4qcu4PLDGUx6aKggBxP69zamWG48MBvNYWzDNSHeMtVxPa4vq",
  "key35": "2LSsf9tKLwVQMJ3dV5AhnorLuA896GpDFXu3SMirvJJor3JDH32uMzYRPZssCsSxiuM8J1tFoWayVDrKcX2gCZfQ",
  "key36": "5sBZBa496oD6DyD9PzAQnSV3bNWksfpNzLWf5vqBhjextkt6RVEA8dxoRBvyJd9ZdwGExaj2WoZzbheBa5LUU4Nd",
  "key37": "3BwfRsAB7F6YiLhMCzuDktwh3hS1iXqtTGwcYBgtxo4FbSqVA4MXVDVYLRaPLEFvg6iLrFzJD6EsHr59JXZkai9j",
  "key38": "4HeLft3CAb4onDjgYrxZj1kFgM8KPneigD2zEt5zuW8GQa8nqRRnW8cqsAJ6RY8sNMui2Ez6VNNhsZh4zJuEMkHk",
  "key39": "4e87rXtXgkeKZB25UmzbSRq38qzLGSK7ajEzqbDZ5rF1nSydG5zKEQNYQjasmAJTSWvSYMK9D8RVacdMeq9McjVv",
  "key40": "4woUW4JiJL79M5PV1BParM8a338LrXwwMJPDP8Dx2zGjhziLz5taMupHsjPsFSrNwVuuFrBAj3nakUMDHb6gW1vz",
  "key41": "3hcJPzasEvEpPWxenWGGxY6oKJwCVBpM74ccuQdwfqe6JZCJ88TCFBQLV9B9o18kP2yTSfB83m55ZW6NfHXwzA6J",
  "key42": "5VSUsDdQgUy47BFQTDNyU74urNJqbRoautpmZFbAN7jey89d15MaL9VsCY36q7mvUpTNt6KyaAqfabU59XEtYcuz",
  "key43": "5LbN8yq7Tf84ocCAzCJ3i3jRsPoWqBFExs5nMrcWH85KpdMPBGQs3R62MXCg76QEkPCAT4868TShb9DZPYHEMtgk",
  "key44": "HfVEAxC9Dh35Xg6J9vhdVnjyLT6KxAFGGtC8jbJTPZiYZYuhBmP72Ew6qvavisfQQ2wRrsEeX3m8mvtBeziZdrG",
  "key45": "5WLKDKLHung5iShot7YRkhntuFWifxXZF7JL2csH1fhMCujVrmQ1AWcFkshhLbeyLESfysTsQrQQRWiRXHeqay6N",
  "key46": "36Nv6S477APx6pfSvagyAcjhVbcWVLk92XBmJRJP31igLjuBoah3Z5wnY3G2GwFddj63WfCLdjXjii1tUCoP1xZP"
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
