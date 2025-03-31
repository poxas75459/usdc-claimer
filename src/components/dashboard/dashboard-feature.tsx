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
    "3UoyG7tuhSwwiwVJxq2DVPi5N3YUfdrScqEkjt6HYwmMXaHKPb9FnmQ4NGfVnxkAJ9Va4jFJxcy1j9ehw9pGDaE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oraef4Rre3FeKRta3yACryn2UKMMaCr57R8bZRHW8Cmi9ASXPVLeQPuNa8UpkQsDumxDtSxLcMJTXB3JXeigofA",
  "key1": "5GQHKhwURqiecd5sGjAGHLR9XLKku6vvYr6h2txhiEtDgkyUNGVxWCiuf3YPvXrFVWjwm4YDjbA2fgC1hmfzUQJp",
  "key2": "3ZCN8nYzgZNXqzpHkC2zrtmzy6VTobn6M3A2imEcUbaKnUHtULsj5YwWsbuLQE34oh9dxEJeV26PQK1oFrZPpz2M",
  "key3": "5rjX94twD5gUoBuzhjUYw9SEGpJ2YN6i1JDXac8Q6PA1Fc2T6z2fuCraSdg79V93b876gDhLC4xhLtKo3QTgmqsp",
  "key4": "38ce4Nxs4sQYzrmvV3YnHu953KrmpN2fwdijit7HJXYM6Zt55AQSYeoykggDHcK8hrbwZD2agda3FeVGMG9tSUF2",
  "key5": "5242H1jWeM3diYwF1yALYcA7ghA75JqeNGw1EgjJNH7esZvGPWJ4KRBjse2KyQRGBmtkdyKxF2vPF8EQLiikG1pe",
  "key6": "B4v9wbqNyBtcep67rXaEFoVn9CYATBXinYMC4Ytuev4dbv5SFacqjumiVWEbPCMNcha1cWx92ELRS8MJjwHUXFK",
  "key7": "41VJHeNmupUrh6K34DuX1tDdkdatD5WBUogwcnT9wujEQS6Bga6XkNhSbWWCcEH71GTfuRCMX1AWRVWoYUVCiTLR",
  "key8": "67qG1ZMvyEwo6aMpzYW243P2Zg1WUVanaRRFaSiYxUi7ATjc14FVYovRpsFkVDe6bQV3yUH4wXk4GQGzPGoSaSha",
  "key9": "5J5aPueFAJGA4XKcUpXpeR2zVyx3RRGu9oTYAGLBgHLVKEBAiE6BSjDfCmhSH8UUiDB86bfuPbThpd6LHjuTvPHt",
  "key10": "3Er85x9LCDQ7fLeufZtjExqZTkfufGa9VUFQ1CKk1K2rRaWTQKHMDE8GzRwqF85HLY3RAQQGTNf2EXHC7wA7DJaV",
  "key11": "2JUvPbFowSdULmXYB9btkSxTfnA2kGNVrVoQku1mq4CiDhVvYpTUSCmkHydYeLadUJUF3qfpTmqt7GbEF53a8Yuq",
  "key12": "4beSXUVLkXCg3p18uQA8u8b1hzL7qp7f3viWtC9UhGcH1qXjQo9yCAjNkM43923Mzn3XsU5oTmKu16RhJtjG55sb",
  "key13": "4auTnNaGKdm1nZKPs2GQHrnHb9iMmJLUDqu3vZKPYFRjdJueJHhBUkkiKbZ64BWtHdNhtkAs8MBbtVuccVFXVcqe",
  "key14": "3e78BV3YgDcEjHPaUVjo2Ka4L2K87mNsTWdEc8ai4MTgty3BPqwbijYv2vpSgfLGQ3249YF1kzaoFSafbtPyE2Yg",
  "key15": "5Sdu4odNBREQiu5GXUD9LiMFobQ3HLoRH5gC2zEy15cCXiQskzRM5b2d8scDvkBwVJ1vcQcLwA9ReD3zH63Zg1Jw",
  "key16": "qLzbmt9RARcmhRnsq6SMNvemwC2Exsb3AFD23ZihTjRcTtB2NjoZ1JyPqnoTt2pPvVR8YuRm8SiBHLXDQWJs4jW",
  "key17": "5foBi8steso7R3Vox7YdJqvHwDf97yLtSmyBoTvEc7t6tEkha4DTuficqv42Tky5QWFmJuMdXSStpnZYAxAFF44X",
  "key18": "3Q1Fa2VCQQJ47pmvMckA1WoKM15kTtuTJiGZjG9pvRMmYQ8KQwGenhqpH4XfmUeUw6tmjz5DsoE2qLHcSYms3sp2",
  "key19": "5xN2uTev1fTYBeTtm95Uy5PgWXYbCT8qW1XGKe1t153pgoScZpJki69VAGbULFuzA2QZ5TPc7dzou2X23tfeUbx1",
  "key20": "GatyWzrndLJJEEFv3jpjAZ2dEX4Adqcv84ifoJNS55cV9PfehLhdGQEknSGQMUQABvFwuF7k31y5JF54b6myFY9",
  "key21": "5rWfvi2wUYAd1xFC45Zp5Xy4FwdMJjHDT3PJkSMuUCom15oddtWHSJHcnVA6RfSPu5MCCAbyij19CbnopjUmeRDM",
  "key22": "47mvuxiWKJ99pqwTcmg8EurxL6HDwi1A3AukbxZM1LWb8UwQ7XDuw4EGiT39Kav63Pdce9n6ZQ1ZJJ1pRHqN3b1g",
  "key23": "3ZNuk44hxuYHLPfUqXfpzHoeU4jBdHciSV9hykeHXVFBsPxAo7zsah3spvKGPqK3LqwGCdAd7rbfS2Jdcsmd18uW",
  "key24": "2h4QovkMjJcE8y2U4MpvfC6obqiYMo8kZPmc5i8d6VzW4GXLeffjpwVyG7H67ZiBaGfPziuSZvLUo3QwNeRPQjoh",
  "key25": "3UxzrewKrKHB8Y6kZFi4zp57RkfPLGaHpXPeYn7ngmKSNAs3Ua2j6VVT9EtUcv5LNTXM3kTT9AvLGmUQH8gb4UD7",
  "key26": "2odAKsehJ34ufbnb8659bAtTnD2B74FhicbLahi2VKvfytnrLfCEjSRot3phBp23FYBMu41Lu2N3QSt9yY1Um7pG",
  "key27": "2iQoKkbitpvwHCX74rLKredi27H3iXjViC1pPRowW4hyUJnbFKxgLGbSXq4dBNiwNDyDBXM7rRZSA48gvRMMoKxp",
  "key28": "4wGwycgRVbjtBHTgrfLk5XdVAH6RrvxhCaaYXHKSFHTQfcXUzpfykGGH7JwDmCnsNHWCes6LHWEPbmqEz664yfuB",
  "key29": "5dxDK7Gjg8obVhTf8rNDjuCuonW18FRDMF6cG6xqgSXV91hC6G3aZ5iHnsrU5P3HJrF1ufpuevSABF9kzkENB4A6",
  "key30": "5apC5x1StrAtTny3CHq5BR8tBn56LkGkVLnUDfEifPNEyEZ88S9bh1QQLeusPb1RwsfDsva5UHjGqasvj6jCfG7X",
  "key31": "5ohXsLVahyZ3ztMf4usxTURB4g9y3VAp7LEnDwCxdsazcHQfeKHpGQta1MAYsr7dbxYubAmDdxAYUpJWLGEkhzCF",
  "key32": "44Msjz21BCEJpFwx7THuqcMh4uFxLKvXHByqRFrfDUuambmo9EXQVXeDPCf58qhXK4TCgj18RLMDy9FHdTRV7CFz",
  "key33": "5GPVuSvuqqUwHWKniJW4DBNs1RTUdXwmzxXscWp8vvvJGxHc5s3P497xohYNLQoFde9ECok1jyZGaHWiSjdrNYtt",
  "key34": "guq1tsmGnumuEmixPhGcn1PdiQm94MxjX1aEhtf4HLNZCpPiBfHbcyBatSHX28oVk1QwYwbGTaEnLoXm8BxMT48",
  "key35": "3EN6mMBuKSvaLfnkeLja5wonTKfU9Nkr6GM8qRTY5UJtXfrobEnLn2rwJxfMJ6XhjbZC4tbozsdPvMQkkAnZsMHD",
  "key36": "5esziMYFZSWNCiT4p94QPuq5CsB1uADDLU2pGKqhXKBE6H9vHsPjcjeDYMy8XdquUokChZX8bR1hs21MUKViZpib",
  "key37": "4dT6brshitAUAcfkRLjgeLR9eBmp9gSh5PWSUSjASSri7PA4UstPDhYycfYq8CKYsLJ4sf1jLyHyTuhMYsVnjzV4",
  "key38": "2ZAg7SkPhpckHdttbKfcf4XnLH43tCwcKUEZdT5HunQCjN9pqQ2PRtLmDNEWo4uLKUSEq5FCLXSGHicGM5zQWsy2",
  "key39": "3MU2ND5qSxd66TeThwRgCUJWDErGTQX5rkbzR8z9XJ2aTZKNmRR2R1qTu4xeAmAYomLfPaKMjPfXKcaE2jdYcJak",
  "key40": "3jTtPDWgmE8ubtyc1r82eHvSfSSCwmcYn1DrWyGSZZe1WxX53evPpZvj5LPuvksrm9tfxjoXJCgpetgs8wvA5kcc",
  "key41": "3yUhDaDXDdvNn92Qnd8jU61XR5ry4SnBzw1KCqnnnagHFxhrytnfVz3Xd3Rcnau4ba8jVDfJtjMoUk7snpqWJeP5",
  "key42": "r5deaQ3KjDvbEKtD9FfXRGtMcy1FvWoLWGUEr1jnGDRqB31eAXXBtzLGieYAPzy4iEP3K6ABA1AAMbNe9uUsCQo",
  "key43": "CAJBp3gF3HPJzPWNbr3edptC8CNVtzoLNk82ZvfFm3eitqX9z2Rfj6FrwxK1EJRmbbHVeq2sMroB8hLuTBWCj4m",
  "key44": "StitwxfjPBTXQpXcFUfyUmKE2PnqrK9TDpSQZNTHUYV8sXGdJyYMjNJANFdeiioQxJ6yukV4bi6KJp99PXLJy9v",
  "key45": "25PCmfD9PiPgGNvRi7ddBjFEnRJwADgPWtUdSJuHJeRWisJtegLrmMPcMXptrh2EuLY952U2gwYu5DFpGw49CgYZ",
  "key46": "2b26yano9LhspCCEfQ4hykXGJcDJSgVWKmLLDvNtSn78d8v5DB14kDA4DqWP7MEoGQpez82u28dbrXMWPJ633qnZ",
  "key47": "4tNY9BUQHJ8yZgjxJfuMuNuuWXALWfJYFj5D9iYJPGgJx5CCG7Z5Xq5ArXeMFcQa4GqHLbMjscCa4i2xFLS2KBBS",
  "key48": "4htT4TbbKN39EAeP6TazwRRFjaUipH13oYs6o89GjeTGRzjmuTtEkhvjj2LiwVkEP2CvQiwBr9TjbesBA9MrNk3H",
  "key49": "4BwuJhk6hDbxBzFmva47z7kGphpA3BoNezfjQzN8BZxtPeekq13MupRiU2qn4J9RAV1h2s9Rju7SaY7MynwnKCh3"
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
