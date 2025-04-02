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
    "5pRbFfhvieygvRjJf51FETsuUWy4UUoRbCh5y4EV17bq8GKCqbdxRZJNiU323q9oxXDuhiqYhmUnSnh8MmktEJwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCsZedH2shzkQjvFX59Qzg8q9X3swFEfxSKKzWah9pHzUzrCAoWS8HL8LL1BAjnLiTuuvMNuMG38Y9S1A9Sz8SX",
  "key1": "4zi412ABNmQeX48JdiU9AYFm9V7PBQjdPuBLcbikvHZ1up3hiCVd7nAPiq5HL46DzDDbawTTsoQawWfLUZZ3WjUn",
  "key2": "2uvFCXEQyQAkXtG8VT9bRydxfFhba1NLmMGninMR2dLkDWXrM9vPPoMb2edj2u2MHW2YTPHURL32pLx5bPEWiNei",
  "key3": "39WGuoyFN63ozMUCwU96aC1J5d95jYL3XRk7HDfLwBK9bLkATNPxCjh2uswZELBn3t6Qc2MmQ8qqsFLoxS6Kz4gm",
  "key4": "4bM2YbPuDx37i94SABjVmeAxeNJR18vt6XWeik2fKCHbEY2gRvTADMujwy6CoD8H96dmcXQUUv17qETj4Aokh2cf",
  "key5": "4oEnDnQqL3Lf67eqPBiNQW49Rm1pb33upNE8MWVoU7PULbGPKJ7LKAMgG5XiMHL5bSRePfPBUXj9uA4tHhzQrYcG",
  "key6": "3tfwEkPEATcb1ByvWKKCgN8HjE6P5f6BSG2XV1Dcgp2CV9XaAg7tVax12qqcQog5tMcPPoJMKMyVAdMoYQszuzcU",
  "key7": "2PXvD9F9qUD7zG1UBAMdv8gZAY2YDWoh4EhChBprte2eDiF3axfuQ2n7sMMqsL81gMg4eoCpk3XkP1SBJkNoTzQu",
  "key8": "3KMFE4932Pg8o28XMBjJQu3BkE2WMkd7fpRn9qX7V54E61ERzKVkbPeZoVPk8qgL3RZhXhFMP14oeakcP2gtuCfm",
  "key9": "2GkqhjrnzVQH59MsbPMvr1CgMXeptLkT537Wcy6SDCbntHiBiF5wmBQCyHCjjCneHkkuiVmKRM91AAm68ctjBqhn",
  "key10": "4NQSmaW3M5yvB4sYeSwg149XLv5UhC93twAMHCa8qFHjUvHHLWe374mB71ZzUxzygRUm5j5YxwgiMaHJMDGqZB1B",
  "key11": "2iacdtwGanR5EF6qEmMV13ZzfVnRK5GCGLx7gbBc1yxrdVer1PwLp9XYcq8jTaXq9rntFLc4yo6jz5pAcQ2mRrNu",
  "key12": "46eRoxeFyJ9d9SeZs8fw1axtTcHvoqmr61UrpvyL2qqcyQrJPkxLYK2hfzSn3DJLq4ZG89zdyx1vGzxtN4HFqEpp",
  "key13": "4wkNWKsojuGMpUJ3ccECRYrMZ98N2PoBGjyYSDVrw27QY5btU1UE4uMqhMw8ybNLprs3iUQdvPcnpAzqRgncwTJe",
  "key14": "2tR7sGkSGRiudtHCg1HNbndyLND3tFSVNiNe6wcuQGRnSukYwccszr3saL68PHCT55fKYzvadz6c4vKGCvc2fx9P",
  "key15": "4J2kiugxvhRk36wfLMrhGHfGtu5ujDbjM4jq1G18Y3kc3qRF1HzA6FJ9irmZQ4TW2Ah3eaSnVSkZTzjzGH2VXNhk",
  "key16": "4FjDXkELNrxkBSuRfZgjBwruvHA8X82bXF4vAGmQsVjRXDVx6UEGT1uHN697nRLrpNNVjiXPpWJjCWoqR6HWWgUd",
  "key17": "5dgQdFehfryzXQRunydUcT2DiMipge6nu4XNbxsCzTm3Eu2mLeEroGPYSmpoLj1aooTp1RduVAeuzqLCocGf3H2H",
  "key18": "4xKpB5cFW1H8VZSBr3ozGqLmpNiwQY6uWuBz9CHphGgGNZtWdVZfiAVTPWdVbRFZnb2cooAvJWSdQvV3xM8FkqmH",
  "key19": "52FLjpnzoePpnS2wUTYTJp2bexe5rCwNud6EZvGghSD6sHBY1Tiou3MwRKkHQuomHSExwGbwzaGoNnrHJ3fi5wAK",
  "key20": "4ZM52SEr1Uv13WeRPqQN8b9A5aS6FyAvsHfHdcsYiH8MThLqGxHcN3wVA19CRTnBnm47o7eFiJG5hdLCpwmECkDR",
  "key21": "5rfv6K5rdLCPMWBFcwuQXHht4goLTRH3m71nLCEz1PGDhvmbHAfTS1kWo4tLLtTHWap3wbUCqm2HdUbeZ9zcaX2P",
  "key22": "5Cyextjjztwjh7Vc8NRTtWhCg2kCfLV6DRGBXZSuqPsXbHtTeaLnyM4bnSDSiohX43E4oeDtC67r9RYAor9UYmmz",
  "key23": "5Xp2jgvF4HmYQymaQwJ2J8f6PUtW9D24Ns61MM8WcKoPb9yAn7yeULpptMXSQQ4E7XdpiYcBRVSzyoddBiXPXbx8",
  "key24": "wZnwTFMRZDBB8U6pYamdUdyc1ghox5RtZv8BAcdr7noXF4sqE3ecJ2nG6soyH1jvYJ7miy5F6JBKNHYK3BPUpNd",
  "key25": "4tTHoZaXctZHvjk3gabKxSgQH2GZxASCuwPWXmFenVVCaDcQKQR5BZSpSHM6TtvRcE2ZicJjsGXvRHuceEWgCg4T",
  "key26": "FczhPiwgWAjJeSaUVs4Rdiza1zreB3yQdf2E4BG4drVDFRy7QsyzSQQDXUA1wozht6beKzxpuywuFh4f4Pe25i9",
  "key27": "acXuasvcuMSdHq8MuD1CsxAjAhv2eWXVxhMicGhKdHeQsNPJnjCTbg7JDTkYwgVH5Ndcjb1mMw6WGmdjg973JP5",
  "key28": "4BfqsM5qhX2cyioVmSRMZjzXVpwmvYbE1XwrTgJoERwDQZwkudUC9KQMaSTgvbjWrfMDzTSkhCfj9N9VZMnXPufm",
  "key29": "3T9cMr34zYe5QKtkpBFR374VEKX7TYKb94Fmpfi9tTQJkcznGoBc17T69BfXLhmop6osi8FSsmd2EpJcq7Fd4awM",
  "key30": "5aGYQFpxmPpQ1rb3pYveFg22vxFtVUHB8CFRKprBkR5JbCfWAavMzcMbjREHGGZ2zrm4AZkKqdMaAbUMBg5wA3GR",
  "key31": "2uruTM1YunHJnvgVmbJShg3k92JFguaB9wm68osrTMVq5RZ4KMEVJkydLQEbNHXp29EmiVriPuucTFH3iQJwUEfP",
  "key32": "2VX3F9L6WHvrAp4n9uQMjh1WyPp7rPh6cu9LW2xZ9dDDe1GS7nJfax9K3MQatEqy43KUjPfmkXg1sH6tdXpjWgF3",
  "key33": "2vRcfwtezyYtcANUDLSn722G6F5TJgVw4ayprs3m93WjQQUxCwSrVgfDhwg1KHCRecQ23NuJ9riYUhwhEYhy8RHQ",
  "key34": "4xL9GsNWoxwK2cBiULwDPDCNiJ58AC1VxXyGdfH6Brz2ea9ZD55dw5QSUUZQFMTw4fBXDZwMqDhv5aos4QKZ1da5",
  "key35": "5mbo6MQZf2vGA3z5Y9SBmkWUmPMC9Q1LiEjDfo5rpvvjwAMFpU2WB7WZwjR9GsEgcSdNBVYBi3K14oMcEkuffJ4H",
  "key36": "33EEpDB81bQAVCy9eUZLujbBMYWP78FzkZD7ZeWZu5KgZdS5ooGaEMscWpinMHJ2pyrvdmHx8WpLVfSA3Shy6x2T",
  "key37": "kPrrDzgmKinfWdz9tP7qCtK5soyWWTygkfcKML3KwoF1JL6masN2A4yGMaSBXx8YakSNz6xqZRT48pFf6giy4eh",
  "key38": "4ZiFAzBQw3kLY4EagqYrPvAhh9fG3dcihyAWBfnxD2APYefAfmZnpwBiQhMcMXaArN8gsy1oaiFPigEJnXYNkjRv",
  "key39": "5Wnr2EVrKRn8sZBFmFXhJwvDn35jvDGuGvnvuzL2u1f4NUgxDMCqSQsAh77ywzSBGhgDhVFtigDfVc1QbR7zNovE",
  "key40": "WtBe7pkNsnPEWVr9k4LG9t6pPDR6ZttcmEPd86wP3qbieCsrcjNTUi2TgVtPdwCSUcnMu9gcTvPmRy621pbFCDx",
  "key41": "4LDihrDpKuMCan7ofefLtkzUkBwHiNf1DDNFykHg2pQXvqE7mET5AyFPZSqUXBsnKynT4qLWzVob67oeEy8Qx9Zh",
  "key42": "4TT8ybpKKXDEs3f8MPpo8QnRFWGzHnbMsLN6gzuKMvkHdCkYrnPnRkpvUsswbJtiDqPmoiujPgUNw59ogdEjxfJ1",
  "key43": "349HspP6GLnsGtLaDjaG6kiZ8MYbJzefqpPUuDUWdrAA3vMF115EzocdB4AFi3sgHfcoN7tCumZRAM39LhCDPC4y",
  "key44": "39QX4f7sGtV3KZvvnXsgHBvcNDHeGBU2AZCPwrWGuf4P6U51BQd2ywD7QAcdFvBAUvWcGzz4goj4AThNCaGzUEr4"
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
