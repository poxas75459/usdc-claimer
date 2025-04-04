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
    "2tNax1YBpAFBAzzufAubEvz12gsG6tSpj1dJrJUKiHXqB5ns4F87NKAJk33Rp6MU9qGTxqGquy53CgSkp5YJ5KeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDe3ciKYguzmmsrGmQXyTG7MhfbmqvRkLVNTvy6XRE1Fen5sScdqCYWLy75VwkXCvGBVsa7TZ12zLBdxsVFs2Nu",
  "key1": "5N4zonGWPmV8eYWzk86NccPxWW8kDsao4vj1B8zbdtnqsfPPGBGoWHVJmAoEC21MdZpKDZTibEYSBS7Woxr96saG",
  "key2": "239CJgxKmEyWY4sZ65hTYCw6jCwNysK98u9xx5jduCri6CL831pJziSv8ZEfwAK2W4KBFMR6TN2zmw5ANjRJxg3u",
  "key3": "44Ds39ZsTkcMjuQJRxarLG6quiGmfvuHTmmr4KbtRk6FZbNj6oiNGRj6J6QHqUHcQnVdiufFuxaC3ZsrvrWTMUcs",
  "key4": "46X199zn3k8EicSFtvWj1fWjJtKEWsSDxPLLoJ6Zm1MVyhmErecCMntRN6cRAuFGDEYhcXxu5yXxqcxcY2iKr2NL",
  "key5": "2ABx9jFWGruvvXsMPzHKf8eW5RqodCMnKugCWf7oL7FCxL3Ge7ca8Z4SU3R1Nep1oTGHo6NtsRffmunVSHnFPoDf",
  "key6": "WosXfcVXX65TFVZ4eMAkUodKEPzRQKD5KRoaF2cq8HHXer8nU2YkwkPQe1ZwFLGWnFu7fUQ5t4Ag5RTnr7mutfx",
  "key7": "2kMNnWkCptnmc4JkHiBYioGQAxGjkvQu7VNQZz43uTNBqq1q9ehSPgBPG52Eg4JuPLm2RFTsw8g6p8LUBrrqqhyz",
  "key8": "Qxi1fVE2YDCL9hFLWSfvxGJt4pT7t9zm79bv5KG6CjLQUkRzZymJq3WL5p4bJ6K2tdjF1KJVyjX1HmhKdwXsJ6H",
  "key9": "ap7tgdFNqmuK4mU1MWnWJGGBRa5n68Zzye4cz4oH7thPSLjGbDdRekoaS1EcKqm8H5eVKhY2G4GW9wURqxMehnR",
  "key10": "5NpKULHKbhianC1WPhF8x9qonGbdZ2t8dJ919ukKm1WxiMostUcfznTuSLvCEDj8uwJzVVcEvQXboDU74KukDHpz",
  "key11": "3XcfRhRHBSNU1uVfAJWDJib3V55x57REnHZZDNQRx9LfQS3cbEBSsJQNdUwreXro2K6MFBe9tE5bxjpMsCLwCAJ8",
  "key12": "2RVYmo1BwjvQDaTY9A1NBCfPyNHuunzKQnctfBoZCbdUm7TF27DkdasRax7Tc9gzyz2CJfZXFhjrc5ZQFS2Q1Duz",
  "key13": "vt2hpZH9f5DpcDUTWojRFkNouWaf4FuRHvAs3qKzWrKC4Wx5XqSHru24z9vJDAdEYDr1rZWTANaqEFh8Nfia7A4",
  "key14": "ohZGigs5eJodkHBapoYd7n5FdWDRKHE89GyNZJSWeZ8aEm9pZbyodTK4hk3RpCqpMRsXZc5echfgtySznrjiFDy",
  "key15": "2n1YS5NJ4jLpe1jYAipVbwpY9CcRzrRF6QneGZFx7F3eWSzQq9y2wFLtjYK5gLDVuru6fo5xmqX72PEsYA4hKQ1n",
  "key16": "orA1yNUQnmipJprvm86gBvUm9QLCSWULFpZZjk4y1yAcq5StruNNWxs2UCAqUJ2CrGfQ41CGzywAjkePuBFDRPu",
  "key17": "5HqycqwESjFakvfYsoqJJ7NwSwoSFkghitMzCRrYCc9opDPe6MEo8JVcbqDLDNcEpYUBarFMYSq7uyfRCd1gzw45",
  "key18": "5G66EnBdW5gjf35K4vvsGeoSX3zN7fz2RtRjkMw2YVvmzzn83XRzGGPYB8ZobLLKhRRYMYPHm3M94rVyKitGKhPb",
  "key19": "QRxCZTpk5gkrdLGDCiGDp7bPwY1yY2B5RPHcTDv3Peo7LfxeS7NN5WmKF42ff44pwDvfJTagokGg8N3dF2wwnGv",
  "key20": "53jdLu2pv4sYXv1aGWPCccEfewPTHxWJiwyHfULoLigCnhZQReDXmpURyYGAJaGXa6AnuMYwDftERGGEv7gfqpLi",
  "key21": "gD9Y38g3sAUQuVv5U1dKdTRa8hAWEjJYk2XXWhxwpsNFLcEpjuJ9CcWJm9nWfLVtH5oHty2e4haJBbekS4esZXn",
  "key22": "4u3xmDoTktofX55KB9ZF1zwGZGk6YZCKF8epCwQek4bXjK8Gddj4ubqQAnGPWzcvKfEXRrjUB1ycrYHZXysEcQK",
  "key23": "3ueidBAEFf24iXXpbnyiDmpfBVUNABMMx2DrdgpmBB5mhPU4QSk6A2CxqXbiLf7ENisTxhBXkqsGCktdqgbYpZ5H",
  "key24": "4bAv3JAXTbgnpGzYsWWz4o8KkSo847DxUVYuCnzEQDjAciCMW7B8gRFsfMTzN8yGyTfzTKHrqy2Zih1qDxGKMZcm",
  "key25": "2RETbzQ5N8gnHEu2vjdwTqhpCMdUwNwm9gngbhgMN3nCVDX4gdWsKykcqu8MWRMTbn5Ymu27oses1CDkGE53SRhG",
  "key26": "3CVgQ8kGtQTW2NxjKBCPWTZsRcrb9xEzwwi6mHQcvyLWwtP2uJ8k3XgPp8iezUD9LnuYu3sM7Qm5GmSsQ1tLfm7e",
  "key27": "3jAPxLyHfpG3Nhh4XRbE4DDwmTA1wSC6jhmrTK2kctjsZrYwCubW1MRNu87gzYFV3M9YBdR8Th1xLBTbdCECuhgP",
  "key28": "5DjoRsaPhKNNZWpaBfP7KtkCCxHauJxyQixNqGeoJxLLoj6zy6C95yWNQgf25BariotMEwmm9UajqBZeghJvqFpT",
  "key29": "5k5E7caqwRmEugPoxqFHJV5hS8DtBd6mPY4ec9qyHbTh8XTYD4MFcMzWHLytHFqu2fELhGUg8HXXA2MseriPyu9Y",
  "key30": "5YXZG2xw1M2uTub3MR1a2a2ipLFKM4VgyvQypUny2Qy8qU1RYn7o3jMXdze9VNyuV5LvYQGdvvSxUV77SXevBL4p",
  "key31": "595aqACGdQSQQVYotpvDyAzXmJThybS1DofMLQbpbMLCBqcT682j6DpTR8waeiqTvsvWinTnRm5yUnBWZ1sS1t6r",
  "key32": "2eVbqDrY6hQEt6hcZJpBWB4KpdCyS32LQkyvPf9cdmDyrq9b26kLw7cuYubftMoufKG2iptx9sZ6wfDf6eJutpYN",
  "key33": "4PHqRLeavCXev8jsg3UVtEsZWBBVbeAKmmcF1Fc6QWBmZD5kLqgnT1mKN1489ha7AtRmnjiicJdxWkUkYspVrwWq",
  "key34": "4sKVvTpzCY9TbcU95wwQDWn2pomJ9iXSXkqWA9oGQk575mowrjmFj7begxNwpkcdgmTj4vomidibUdfeTDVR4L2d",
  "key35": "4PXf41UQPoujTHtuLWvXLR7yVeRMmDCaeh6nLvSbhVrvcxYcbBqkc3xmQvQ823Q6ZqZHr3ex14cfMsQuivMzhoBt",
  "key36": "u5i7BnV4Nh6W8Pec4MLqsGTFkZrWaJFQY31xF4YoE4LWtbPWpfMdwZWZjavpcCVFUbbdnZ8kz7jS1YDDecUxmh9",
  "key37": "DgDym63Vn3Y15vCRhUo6uoEmmLuon7CDRGkEEXVTEra11NSCUEpzzQsMjNu8WHheL2GcoRAbn5KbKdk7bogBubV",
  "key38": "P6YJgQRjp3hSnDJof3Fpe35uTJs6Bt8kUvd57Ug4qsUEyJ2Sen5RQpAQZoJfL7nhEJgHMeacm7AptKRKVGpDKnD",
  "key39": "5uSLnChYxWBj86Kp3ep4F6fomjzQiUx8PH3V9VJmBcDZyMs3hKTTZG6YnnY9GMsLG5SygZjD6nhG4AZy5foAar72",
  "key40": "3XSm2prvBS4QupT4tw1mHHc5Jh7oAJ187eZ5LUYoLdUWGRxYg1aDWU1D2bbLsLzRnh1LXyzTijMnCxrj7RAjDUzz",
  "key41": "4NE2GBySqD3CArbg53J4cJchfddy97sNiqgDjw518i8H6YPMLjeNECH6PyfWoBdMdkL117gizN8wn5yzDmXw8Hfm",
  "key42": "44yq4NtdJ8kkFEPocRWub53uum81PeskAkiqdx7cZiV83Zd8gH3mearqxCdoEqgKG5EigKbwgMwNeBNtut78Sb4V",
  "key43": "En5gW9D2oJs42eXzd5g5jXPTv9yhF4As15CNNYnHAdRFR4cViRw2JNATfcNQBmFRR6KZvZ7QbkLmExmhYwB1Xv5",
  "key44": "5Z9tU5ViPzHYUCybyRwJ2KGiNET2pM3B1u9oGtBtxfZT9PFiBSESp5JiTSwA3D7vAW9UDF1J4LJtWbYtGpYLyNdk",
  "key45": "HmueSdykHph2J9KTtg2HisGcdtPCigAGAo16qQZRLtKyzKqxXMmRDeuSVD76yyZ4poYVtS3e8wuFhLfK4qYRyLr",
  "key46": "5iNJmAodHNd3uDH6qpzZHRsrtrjETtMy8Lxh7YtyP2C9y1KqHoqT4HLBC6YWyH3tzsCx8RmcTHchiKSURMAzAp6n"
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
