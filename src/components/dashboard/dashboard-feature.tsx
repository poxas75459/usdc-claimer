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
    "3PGgUa8kvdogrif1ya4oJWGAPxKUhXn4cNdknnyco7P3fUwHo7CNFeurVoZu71Q9V4YsSQ8XYQEP9LoQeDUNcXqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WfV3hoW4CnwTCcKc2xhfsx3sdtqso491js9gh5cfSHWWM1aebGCJp6avSXe6rAKCNH3p1oyjrKs3aAzjjHBSRfM",
  "key1": "59q89nRWbru1gJDBecmihCUAMX2dv8Xq4qKYkhLNdXm8adEyZXCpmVxbJMHbwj6saFxoAod6TF5AmdNBwmY3QTbB",
  "key2": "4iD9ejCuBaoUCjm597jp67fQuyWw7LY8D6RAoHGKa3XAErASxjnZL1qZhRpqvRyHE2MYHyunpgd9q86s65UvT1Qr",
  "key3": "JsZnLD42DqRyGzGyJiY3usyx3UevPYn6KYGTasYuAepgzrR4au43f3sN1uSX5DKTPmAv2TYMDqAqxiW8aCe415v",
  "key4": "56cF8VsZDsWnLwxd2fJCcuksK7VQkJKFTT5S1dQrH14ZQRVNLAhg6tn6gUsjR31YuCB6yrG4UcuGKCmVNSyLD8rr",
  "key5": "HY8weVBUX6bz3phEy9uCKy3B2SQLFaaBZU8JtR1svMTFfQfK2XR2nf9Yxx8idTmvtB7zGTgGGF3UzK4wc3X1ALk",
  "key6": "qW5mqsRp6shXcLRLgVhiNQmK7YDgFEUr7Qqb8jWDekZm7XUpBcPcYpXRFnUozqpNAmtxBJT4T9mWbMaYnHxfHHi",
  "key7": "2orwaHdojN3LznX1dARGycP1bkUV4cp6Yx64CF71txRVaCYzx7TzcaWjk65fRktc1ZpSXzXd4THX38FxMY5LsHfr",
  "key8": "26GYeyYn2L7EoNwTLLhX2eSuxWvC4eMp9obBbyDDCrF5vVeismhnBsmgpdzezsA6jtuVyNhrXP3Hqm5NABLm1ZzC",
  "key9": "342UgxT3ehMYYYMCME1UXNRmGTLJzp5bKLULdXPVcBdBb6MqCan5h31JLq7mvUkDHQehRCf5Zv5GqyaDJiaLWgjx",
  "key10": "jkV4SKVPABmUmXpmjZ6WR1cmThWjiaLJMYfHTCK738tP67pyzyaa7joy8pmWew1PEKPZPzQBpKaptS2KkRP4UBo",
  "key11": "2dXF7H7NoSzYGYUFGS6DgF25NJXLE1LpPdqoLXnUTWHvnAEaGCjUsdwNJRciNtHJh6bnZzRnS3gcg9L6BfMPFfuv",
  "key12": "4KKHhBfjkxbu7H93cYcADaL8E3huNvMp2eJNfY3DMYUBVhzdCHup9UYy2yc4ticuCtnPKes7oLudxdEfzgqMBX48",
  "key13": "Z4ay5i7VexLR5jNnHS6CibAEuNx5BNjM23scDi8i2MGL1A4cpSbUrU7oEXcTvGHYRubd3BiAvvoWZNTu3e8q8A4",
  "key14": "2PfgQ3xEjrypZsaT9BnVezYW7UaH9PooPaXMqxExm7Cc3V94ZsQK4pYCtpk8eKAum87ZLo8hP6cCr3mEzbA4srJz",
  "key15": "4Qky8REDJoVsbhLxhTevjj1ae54RvkPmoDUki7EpvoHPNMwS9jSCxMVvXEdSCocUiPW2eiJFDQ1JNZSDkPovEHVg",
  "key16": "2RGRb9tnb2MNJcnpJWqftPiH7y6u97Zd4dF7kUid8ckQRix7gurmKey7XAWdMkMWNosMo6wb1yHz6eEa7e8wkz1h",
  "key17": "5XayMCVZwuzYve4wx3JiYhBWeeAiHvuLp9fihoR9i3r2rQFnGjbEbpkPmD3ZfUtkSRce1SVL4h8qDrHQGsftRSG1",
  "key18": "4xBzcEzD9GGUxpjRfv3CRgwzc6TqRieji1a4xNF6NbxdfUZ3vqr3yvXRaokEmys8XNGiTWqG57Hb5naEmYReiCpy",
  "key19": "jDr637f9DbXe4jeuU4QY7x1Y7dmrSNnkG21jNDYJoTV4bZ98aRD1KgV7KsaUJPBzS4YtrsBCX6nchu9tQVgfUm1",
  "key20": "3ceCCkZVaQPu657tCcUN1krUTREd8tZrGB92VhL1rSvTxjDipDPQx8DMLfXGx5xa1TBWVgQxUpMwNdp5PfLfcGQg",
  "key21": "5UPabSX8D8kep4yngmMTGaWtFLKLziEitQNBwRr9HetpUn4Vs6nTzVwonbbrAxSjiMaUK6X6Ctm7JLAebAGMnwUc",
  "key22": "58ruQbsHck8Pe93LgqqwMXiCWfzc1J8TgjyJ1BVp3ym9iFjxAv56cazXcQqhsjM8CU8mKNcrq82d9MBkbAp66nVz",
  "key23": "2crB7RQnVPjP77Zvt5Cy5dja2pCRmunMiJKQte9xEZmtTRWw9FNKnJCkqWSWq9H3Cm17saswLS8UNZXYGtD3ztGz",
  "key24": "2i6ywkYYZJTAYUZ6B4gTbc9pQZfgBSAJqXUQ251dHNtxciHuDSV7rztWAh1qgZwp2AodifzLrDavq5i5zzvi3TcA",
  "key25": "3kmi8mWP92GCtTAUECRd8VQ5aHTe1uN9odUvmWK3NCRd95xNzZyYz66MZFmPr9XWChKm2gabSZ5STRWyfd9R1S9K",
  "key26": "5hcoTTQZH2gGXZqceo4D7xZGfETTmQgcXHpKV2hSKqDNwzEsf6XSe6Z8A8LYiTDK6X2PpJSnuy1dHd7ivhoB8N7i",
  "key27": "5GcAvU3B8urY2vehSF49AnssBuKZv5NT5FbtxVFaYKnpZntbWAUCdsu4KuPAR7ogLH4FAvVXVnRv7HkBpUnApYAf",
  "key28": "3P7nURV4GE5eq7ca4f5dwyKQmrx9dZNHddneUT6EaEEhJ81vsp2TaFQeyySdfEbRSXE5fhfTUNbLqpWS6mbrA7F5",
  "key29": "21rfgYxGTbNRSckwZJpufQ6DGJQaNqM4beExL2vkPzfhnf1NrGMaN5Po8Qa26D7PfPTLno3DWax4m47M8SvajNbK",
  "key30": "4wo772VFNiLHKKycfg8nqX3ozrGRSdobdpVQb9oGXt781E736KR8MBWnZWzxccJFkYvM1HP3ahybk6dRGaGCPxGC",
  "key31": "3qZMHAgTCXs2XhFwphm5w85oqhGM4KcNcq4cmuFKmpnfgxszFs1TRJQ4z8byT53us28fFPvDjyFV5o4oMNvFh36U",
  "key32": "676YN1WQJD2Xk4KsPD61CYe3XxR3TiUvXAB7KtKdBdFq3udHi6ZCXzvrD6gz1KJTCT2BRx2aDeJJMbcsbhRKhrVm",
  "key33": "YAnzjkqAaeuVc1PNM69goxMzQZgRBYyDA3bqtHH2csftFKCg6AppgpwL79FnW3nHW4KmzbVDVE6wVUtKbL3pU5P",
  "key34": "3CNQk8zeMzjBtfS15zMWRKSHekU4PWuxpGyeG4xTVvSbJLqpcumrrB3fhgJD97rHtL5ApPwnyVSbYA4eMK1P1kK6",
  "key35": "2JEB3wmaVWXtPSkgWCsnZeNdPNi7K43WuMuR2DYsgcknK2MEKav29Sdya5m9hfKLGpoDg5ty5uWGCJiXDLxq1jq9",
  "key36": "4DnXy9eTjnBp8NxcLAW7sxdiw9WRauYHptBtYxLP2yHELfBKauPfcfyedDgHxKqnFdbBJ47BQqQm2KSdNRCrGhLZ",
  "key37": "5LwD6Nz7CV8NrmeaqEnTuwd1zxq6Bt3jJ5X6Cr5gtDpD75u9aYEzKV5yYsR4wSvf9CSuSHik3BawhDC6VAy9X8m2",
  "key38": "3p7VAGTJZHK4xd2RVoXKZ34WLDFrg9GGUCwX47KZjPWZxRK2g1qJdvfQQe4Cx69Y5p8UPxF8Rq2ZpzQerS2W8T27",
  "key39": "2a3fQTnbKwNs4xhtew6dSGGU6Mvc5ivbveBBpxtjJysGTJqLFp7CxKgjwmgC4Q5oLGgr6uooPAGKQazjHMK5eSUX",
  "key40": "59YZALTmSHNveL3QbzWieMj823yeVdsm2D327UDC8X1t5sTDyCgRY5Sd3CZy2DTWuitRi1ERHnit9YfAyEVuurtC",
  "key41": "2WuZqn4FGor35bCmbHJ9AoFfCZfJtQMaJD4XpnEq3LA9Y7TZaujEGNNn6yKVZkZfbMzm6vYbS1dDHBAtH93T8jYz",
  "key42": "5V5fCoygDcQHAfoRaQ3fiqFfjmiHVyXbW1yo9Nx95yTGXzoarKHMCKsGs2YX9WAdtYq7M4rRbJRpktXwcgowFryg",
  "key43": "38G3xGER4Ut1HUhnvkD9WLjo9mznd4qwqBWZnRUHSbAJG8jPzAMECEJYQTiChYsBJizXSbF3cmrkqSbPFhUH7ruM",
  "key44": "4LHMnc7KCR3rcNJYtPrvkQ39nGSEUiUK4JCaDXNe6MJLfKRTj1PSd8FWGnUv2D7xdJmiAFTRnEbXQTpdQivhX7se",
  "key45": "24wMoZTjZw1nF7UqdmkyE5vJaSMzY2Lni23kdXSh86BKBzQb9z5ZcZ3ACK7ewtZSbwh8QxbruWLCCb4udnAqP82j",
  "key46": "e7MvCvJrQMgfcBvwSAabadn6DwwxbLfTHRWbhMPEQqk5ZrS92TWxABVqFYKPCZ24EtQ4T56jrxKfx2MbagEdFnZ",
  "key47": "38dekzCUMqHpnmebZ7VQn59QrNfFcNP8g2EeD9gzSYByNWpewAyumJucU7i41hPP24gkrsEpQ9kzcfqd2G5LaZrz"
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
