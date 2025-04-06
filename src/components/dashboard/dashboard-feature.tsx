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
    "34J5gbtGexW4mGnuFTwMV9YJ8vW896TpZh6pFPo1vGSBsutc2p6NUbupZshZk7DiP7BCNWQinWsbCFeQMZWcXk8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rAt32gSFY1cNb47TvssJ9H7S8REPQBWt8nzpTv6dbnnMw8GCxWh8K8sSncNVsXkfXMA3Mzx2F5xTPpxEpjxv1vt",
  "key1": "43agrPo2CGAJcSNqL99UWmBxDgCpwJnihcikuvTqWY59JH2DsLpLNyQ1uctngKsHCHGKMBK9Ba5xofep66zg2KvE",
  "key2": "3SPGR7nfSgn67W52jvGT3huddSg3PV6ZtiRqDA8JjWnF9QNNmtZaYbuUiN3123mqZXfdxNXTBJGqXmshWczbuh66",
  "key3": "9VWTQF9jbrVJrUPF7iC9sUAhxiva3by9hFN8q7jz1VvMwcs1xsv5PHSFx2g5AoXJbEed9ktXWnETS1yMiASd8J1",
  "key4": "26Lte8b9SovSQ5TATZyZdFiUsayb5CgifhyEEKgziXM2SKGpykwBVLFhzR5f8ufmxFDWU3hTrC1466UciGF9d29Z",
  "key5": "4pND98EdwRw5ZYE5HqJXTJaGUSueBmXUDyGHcPqiqr4zBdLPJaN1r21XDXDtWMgVr6eUVAWyR8j2vm89ued2Nuee",
  "key6": "3NUcWvRSVUdEd9STtthbGJLceoSv6GuJykNEdRURQMoEH3sJkwgkArkdWV2RP7zRCdDS1ZxdqumnZWz64FmPabJG",
  "key7": "4atBpW1qeGS9X5ciZZ5ADGENDDvxcHKi2EzjqVBZYsEU91nhYrHq8GjVgrjtzE6FfHX81XqMaGgu2tPEfddgjJaw",
  "key8": "53CT3Mwg4WKZvaHJzBUjkoF81g2TasdbVfRkQHZYB5hJj4mS8UkqK41NtqdPx49zkdLiksTBv4NdoGX229x9dLy2",
  "key9": "Px4yPUtkEGA46cnktTCrVwLKh8Tf5xokdoLuRbiXj2BbzVNCDeBdzXtebg12xPvTSoRGL9zWT7HZwRHBzEkinsG",
  "key10": "roVzL8Vs2F6rEMzh1EmzWY3nerNcBxAgo4jhkw8Sh26RgteRVPX3zC74i5VRZgQYH17fEJDeL8HiDQeBqn8z2r1",
  "key11": "3Msr9JFxKYKAUxXiNN4Zf5VBQjRMUxYHRKF1beWiarZGQtVbVkNdUrpq3Rc5m8a6dVjkXgEG7dhd2cfw36arucqA",
  "key12": "pdredTMwjEaKWBhJdvpV3eBE8uFithp1oKZdE4FBJyEGuKqcBqiTFPb8wEbkWrs8oc43nmxe1W9xT8Sajzg2fPp",
  "key13": "2JaahNtJJjxiHvFSseyuyF4T943vdSzyuQVjRfKN9C2sB4A7CsSmz6gowXZW4oTGxyBAvQ1V9WDrCMzbgo8948Mj",
  "key14": "4Sr3F9Hms4KN7QPYpc3YKenmdr7fXBLcNL5QGcUkrnGVUd8S714AyjHAnzkpypzCMpVBMJf1bNPJH2Jn3pxuPwFt",
  "key15": "2DU22tiFUTUq7srzS4gSdaRLz97GjxZCgTsazHgSVDG5vHqPJmiJyV8iRg6XRT2oYh5r2fY95SanKnLdQMYguhHt",
  "key16": "7Wuo1VcNsGgXjZwtVZtDPpePTZwGEum5jCbfghGkRVUMMpEqmSSpc38pJ7FzhkGthZEPAvdsPC45ktGpFR8bjNJ",
  "key17": "y2dBTvkBUpoeocWvNsSp6PTKsXn78jjr3wQAsLX2hbqUupYBBD4CRYKpo4FapP7BHDTaKDZ7Ft8UaU4TJD5Fx75",
  "key18": "4yd9GjbHzHuNZeFxky99mivvVfANwzTfeykBMqy4mioq5CkT7vk5kRTAivToaXnh9qs9LTwvGYDcXzCG8ZqtUPFT",
  "key19": "s71E9QPYhFv7pwMbSA5Qp2Ud8Vhd8FEpvXdMSngZRg28thRdvKswkwkiKse5PnQg5NkWTitRkenfNYcuNTjeYH4",
  "key20": "2CxVfhef3KvYtvJm5ScgreaAc8esvCi1iAMkb52hUEjN9QvksFQa6B6ahf9zSCsR5vUtj77pQmL2u3Kqf1KJrbfE",
  "key21": "5MUZ4FqwBT74Qdwzgr34wM4X7LQaFXNTrUPQjxRSWmvoRkCzC7C2htNpCPkXWctoRfuPeDVh4ixFgRYuqf1xuua9",
  "key22": "fLu1MQYE34VX3fxydcbN4TncPUrXhNCbiSFEGQZkUZwGNq4airgJRbD19NfUEUeHmenFCNSqV2hNFswqmXqQ8Qu",
  "key23": "5KetNTFRsXm5wbn5i4UbZWPytNc6cirzbbh8gFDaS29A2ModgkrCaMutMXL2NryVE61cEk1zWpCSURgzYjqiZNiP",
  "key24": "3dEgasX2Y9DacKRbAd4jUx8yLiXyt9fPaAUPHmcAuhmZQ8k83meysTyXxu3LxfCR8GdMTjNm2vSxfcSs7AdTi2Y5",
  "key25": "5AMTdxQd1KusvxnYmzEmeU2naRrKWxg8XccbPoa4T984jsMfHxWdgCtPagX7D5z1iB8zZ2XyYvEdzj1TE4sYECLC",
  "key26": "31ki5oUbzGXE1U3tY8cUd5Jbnrapy2FAZpUueJs9sRcDPwR1ZFsXvR61HRgSEQug4smCkeysFMgJhown54DCGrUy",
  "key27": "2ViPeTmZ1URJ6wLKdmyMTwYYvNLzqwv1WrjEyoWARuwp2W3so9sKDJtoN7CgheAupwpDFfE8gafKgbpTyKVoo65u",
  "key28": "4C7aSRsG6sYucDBPrnFuBQi5cLnpZpVCmNx7LkMe6L9vEehJST7yT72ZUR6MfdygHJedxKXcKbGSMq1zKwWpJ2T4",
  "key29": "3UkMyuYfQicNv5VzCim8V5ab5inQTFTC2kG8FuehvJWu1NwwwU5RgAAD2xzzwDrTvYzjN3U5XZvijhMx6dWkwmDA",
  "key30": "4kTBgDDxabzawdiZ2Rn59TyanohhPvN8ettUCXABxrSQ5QmUQWi3qzrJUsmXKgV6EVf96dkNV2rUabcfVN3w7M8D",
  "key31": "3oxSqW2DhzZRhJMDMLVFJceKHx9TeEqMPXDA1uae9hgcx8S7fPm4dCNrsdZAjzL6EW3DQmW6TAFsxCBCnkfUCnKx",
  "key32": "56NauJrkRQpcc37KYCUUQtUs82TbnwAaffkStyT5Piup6wiAMpRHk3A8dAVYNkvuigKCEPj8m9tyLjxaH1Qc4Am7",
  "key33": "4DNtJxCoNB68rkxYem4nrPXo8Nu15jLDyq4KfCULbeFodVirVYNuqC9qbBTmD8JnuujCJGPzCQzm8EZSEZ5G9D4e",
  "key34": "7GouPKQHMuVJh4FCz4ZT84ZSn7NvBk9RVtpKZy8dPAAbRHXJZMuKzR9aqn1CmYq35dRWp2HwDWqhtxwcH4Hm1pF",
  "key35": "3VMJK2QQf4MgamajBgbyAMkXRMhkhWkQUwQniPqjdU9PoUDyVdpqTytjxe8jY5RdVu2rAVqNqDmdvndcg8Rk5uJo",
  "key36": "2UHUUKJyFTR7dv88VMWNUcedbuLxt67Lbs14zSLwTz6k65PMncUSWDbjmafntVtb5BYhPXT8azgF1W6Vj9xC2M8P",
  "key37": "48U2jVm5Vz37jAMziMSRnGnFmUtDRZNiEVje8BaXFxfJbrbi91s49dBnTzr3oMaHviQ1fDRctLGyjARZcA6L2wvC",
  "key38": "36saQw5gBiz6izJdtiw87As2TNb66it626NWS32E9uhhWJTyr2uVSmDfENnRdec1XWQzS22qmCrsm3ZFPhfLJwxW",
  "key39": "596cfrynZJxCpiJ8EBdbRP7JKSKKkkRmiK5kDxP8o46k1Espf8q8UPgJzZQbUYbkJgKg1rqH56ua9VeYhpqRMgyK",
  "key40": "3xTH8MKeYwJwvvdyWgFpQRen5hU7RPS8WpS7pPkeXMgLGDcnw47GGxHrpMDFggUsZFhwkBaJwztKLMYBNEJzk4NU",
  "key41": "4AB5igFkekhpe6pvJwuRZou5cR95XF85Jf4i3ghXKZ95yN2pZAXe1spnqpuPurN6v2L2eqMi7wEzaaHySjXPFEwE",
  "key42": "2izCZ6xFfxZGhEofYDBK44WrihtXsRmCMi1z4k9n6rP5R8XNtTCDkFdMSQNty3VxzadWYHdBHjERanF9FYdX8gGi",
  "key43": "2zSXL7L6Y3w32L1B5SenPdmtXYNWsJGjQca9utpRvsfjXzw3S7ZffsVnHZgorA6iEGDJgw2gvaSfGJQsN6Esv2XS",
  "key44": "5Ebkab6Ah7TLhAUfe1tAw4AvuEC7td7iFpDSFFHEVDoKP7pxPBQphct73efeX7XLXnUzNRS23oZSvvMPtWkiSbzL",
  "key45": "5ATDvGuSQqfsXjYrc4Qe4iDh8Rd4daeFfjHnuwEwDx2HvbVf2mVTPojyCT3pvgc4nw6dQf1o3usugnVZwXsHSbWT",
  "key46": "4kt9Ti1tepMfTEqRLyivbmRzdabWxMbek8NStd4S2LrEshhBU4h4uPUKunLnvLuq6raxwBPb6yFWakt72Mne1tER",
  "key47": "xtExnwgRZqWZcEGoE1r3HKEdoUaXqdWCSqSD17KQ1YaF8nspJunmu8r26d2nFwx2SQTkuZrkvt4DmSpCywHKxbY"
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
