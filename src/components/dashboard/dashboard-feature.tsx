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
    "Gw5WigMEVd5RP44sGtiJg9QfGpqnoXkDR2m2QVecm85GH1zKRXcVszxwfPfvVeGQhEr7AnBJ5UijZx5CmMbTBtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o5uG4NiGLCaiZdnADPruPoK1KoPcUafuMEio6buy9gaUJrVgidVye5XCqMDeNBFpKHV5MCxmep91DWUmpFds3nq",
  "key1": "5yPt4ykuH5fVnyvgFYRqAK1REfZFrR2DtB9rdNfFPtPrgYNRhrC3EY7DNAxoJQAkp9H6jGZTMeGzwtQQFeBg9Set",
  "key2": "38rqm5q7vNoPxFUefVTqovq87fANZn3ECMALAGivoX4GjCpnQGk1VgAKnqAW7DTZqHePSxmFQBgiHUzesSbBGZZw",
  "key3": "24BCFk2SK2GwHU6QuLZUeEYQZsHrhmCyq8A7geNMnmdHpdXRyEZLPkwyUTXjiqznNPuKpUwDHqSgxXb5iJFBi6B4",
  "key4": "5C2bNkiURUMf73ywoFNczZsCc3F8bTi3zXN2GZjgJ7mZkpCbyv5WUJbkqMKXTHpvFqDmZZszYbJn8kgMvAXerNCQ",
  "key5": "XDMUAT5dP14yk1cMsvTLRZVh2WamAwtZQtGSqQAshbcjqiPWxFMh7JzmstKmMhSHPtAx1qSe4ntMnd42ovjf9m5",
  "key6": "5Mm1bjdWsQWpiP5BR3MvSQvyaR8bDJ2M2oqiMbhdJsJSemYwMdGWDNugwFGFpXGULgPbmCXQiYW2YeRB7Uv6Xnb",
  "key7": "61Dma4Wqix5CTunduHyLQ6MwxhqpfBx7wSZd3pcogVnXzu9E7nbn51DdEq3KvqY5tBK4SRnULrFWRbHA6VqiDK7q",
  "key8": "3VxxwoQ5qDtL83Jei7A2Y5f9P9QuvA1Sv2N3w4VnSuK1swWV73aeYePttUr17pfxPVt7TgNuff53H7haZNQmbHRm",
  "key9": "3NiGqnh8Hs2RTGfhKoUV4aViNJFvEQZY4CATosyddeRKbCokA6ujRi5MkGnRGS2GVWF1tbEjcBrHMjamoqnqqUNt",
  "key10": "gwrpYnjM2x9QRTPYjjZ7ZL78i2uNSWFpqRLfgfGKgzW9NEdDy3JNvEu7FEHN4yCDhfpSetw9FinzWZ9vV5Ygjjj",
  "key11": "4CYBZzACnsMat5SAmYSN7XQUcatCvKCTaZ6q5ftvEiSDaotAvNgdGwEHVT3JqarT92eBY2Png8HATxUurMpRZjow",
  "key12": "4CJ2vkLnpXSy5hCwgcN3CWwGEgaus1zXE6WCtAKUdJmnGHeccqtTStswErXCq4q1N1poXJ5yD5biLkABUmUR2koo",
  "key13": "5iHFLytmxCxB7H5FZYPK1hcgHVCKKd9fphx83giEMheJgnPWahfYDreM1VHES3n1eW1XhsRMpPydHp93sXU1WpPg",
  "key14": "3Ddqi8PZnRPUPBRSyLJ9q4DRrnZwJdJvkpKpMVDHdMoVorWDtws6M2FPdYLaraxJ3h5FNaroxu9wapL4YH1Tzbet",
  "key15": "3UNimyNuqBzY9CHacpBM8kNUZ7PDW7oTJUJkAGKhsVTKDRDgXk6KX2WRJRtvpz9hkh4Uw9GyJLnS3xWv845JQNk8",
  "key16": "3iyD2rJARJGxVsTxaezVwakPobbYXPUCLMbXnGJ7zFDsvAvpfiniecqAZZx8iRsRh16hanE5tghpFC6LxHggdJqU",
  "key17": "2oFEBUoEAnXpNFZDgT76ZtqJLA56VvRn7YkDHek5kfviKMN39Zhcwzs933VJF1tQc69eJeCBbKZn7nRYGB8NnhNp",
  "key18": "LQmVd6uHAbr4dyzbXFr9RGWroekX6P6ZU18N6ZoraBnqK7781mMwNQ37RbWhtq9iSkv1EdQos5Bcmfksto4BU8J",
  "key19": "QGhdsfXQhxHhM59f7N6XRzuZEFLGKrj72cCvNJqCXDALsPt5n1wTKy5Xdj74bJQ4wsGh4Ap6kBeJnFSgtsoXhvA",
  "key20": "4VfEtQnBRyYL9weKjVTZyVUXPibAT7Hq8bA1fijsPHRNNdEFr8vNNtyiK416Z4t37e815rDfYyHLLejCz94CP4tH",
  "key21": "3PRP7h12txDsbrwtiRXQTGmuru9xFjawqAvV7DqLVMHpnWQu8EW214BWC2LEAVW4StWXBnvAohPTUZ4inHmfz4g9",
  "key22": "4MKTz6ufZudM5QY512sYmj7h2Rbe4L2jQDCukWuMZxgzkaP3j1Gkah3Es2MNX6o32ZHcdzDovZJmpQW7vR9TEupK",
  "key23": "3i3UXqba6zfTQSrnMujUEesXET9mCSB4ApvoPvrVidGHFdZkuWaERqtTuTqUF9PYjhE8pV2867SsYJVuXi7CHS7d",
  "key24": "wMubpUouEYYySxmaWMHeyYTz4xV5AGhtn4mkYCaWowvHx7HR3xnxCAJjLD94etYyycz12mHYn1n7zeGTMfE3JxV",
  "key25": "2eUmumJhzcEYMHKeJ8xan2LFSmnisELx5oMdicJ3jZ5ZwPA2SXYfYKZe7wKL7HigCgU82JPN7YnyNFm7ESA8WZPf",
  "key26": "5kK6JVWuCSWQofraGXmzviVEzkDLDsvH5qqWnMRvRRZKQ6kHA8n4gGXGhgCWnV9eq8QRVtzFEwd5zPPJxhkfDuFN",
  "key27": "5KZHRsUBBRtAcj9f1deCE2x3pUubz5TxHXaevFLdSQEaDmVr2ZE3cu9N2Enrm8S1dEMCFEGbV44XBqe6Eh2c5aws",
  "key28": "3ycpVQAQ9LyuadfLpyoUN1mmrDmmveJbUMXWpfVyCfiEbCdpNhiXdiATn83dkchvvY56qpSLDxE5STAPfFLyXz5D",
  "key29": "5uGU4un5oYvV2Gkk157BhGFMoHMP5KwUXUf5neB6rNhtxEPkd1aXXxHaay1XTTxyLVoY4cWwTPXwTg68ENvZxzuA",
  "key30": "2epTvUP8umgGD8WqoARNPcPcSR7e7w2nP1Q7wkw8hks7MgpBu7FgS1WaFbHC4Xd7s82zKC5cDzHesXhkRDZUEGQx",
  "key31": "bVkjAR6XcgzfAjzj1e9Sv12kJ6Cqaz9SgRuuYM7KS5UKx14h7bNBaLDQe4ju24EK4Y1FTQNyZ23ox7JV4hLA6Ve",
  "key32": "4BeBh1XnzrmGk2cLGM1nmcADPoBnrbxpCMn3C8T2hhryse1HGdqno4GkDh5nMargt5YYjNk92MWJn1Szzd2dSsiN",
  "key33": "4Rzv67jfm8y8mmqvHnwnLJJXv294jVfpxZrvwcvSKrYHmNnSorheNLktDHsN1dVQdteBqnbbJHjdk5Qdih3rKg3o",
  "key34": "5Fr89xNfgJ4QoSfEdY9fCtNUMgz9RN4dirNwuKjyNQiZtp7RvfzcZ2cP8HuFg9qf1xaeWaE8VqhoUbcSw3Nhcu2A",
  "key35": "5aYCpD8NcYVNHqwDqbYbYToRgRtNh6e2PbByeiTryJve41YCU1UsToG2L7JPCazmV7UnpgnPCCrvLidEqHpAtyKL",
  "key36": "3CY11roxpAeugLK9eF1jgxbpvyPjydZJu2rawvNmkxcCjmHmC6DYhF8yj7TqoWugLtruhWdioEsA3T2NK7tmTX7b",
  "key37": "2XWXskgi99aGvyEj3EvzTV1ZFEKLqnVF5AtjLmKugq4AynVAp4T71WmfQ16rpvYvEtZcP5VL82by1zBKUKnRT78S",
  "key38": "R9SjScaCr82VvzfK5DfYKTW6dwS9qa7uy9j4Q8DTKhTikezD8AU81P6DBYuhATMzUZSQm8NEEjKBBzPKmJRuYru",
  "key39": "4Aji2HMeHs4tteMNgKMiqWX9mZywqjjbgfAySEn1PkyrBfMLD5mKKC3869vWJ3Yr77gnfYXrLoBZS8EHJkWGzYL8",
  "key40": "4nW9MzMfuBBMzpUEc98CPjCsRxwUgxqxuUZL8XHWYCtggAQn12b8EBQScsyChoLwLfsNDSLjwA3F7pS4DhB7NzYf",
  "key41": "3jMPqbB3nS9ewSiJ6GwScZCQ3cEopGB6uf7dbgoTY34ZZbqyneXG69CLdgoD4xFd9JXYeU42F9AbAaVTcLBSY5io",
  "key42": "4UJWXP9Lybpih4rhADM9c6BcNwWxS2Gg3SgLg713iX7q66imEjTiGjKnF9e8ipAUDGYpg9RDge2jo4mRkqc1zVW1",
  "key43": "5wZhSjLehLpyPPiaHPs5E2n36R7KtoKmFLaUpesyKcxCXYJvy3AkibGobJphKPGoJXehKjNNyhxJbt3foRcdrEix",
  "key44": "3ZSiWC66JbRz12g1Z43mGHGmTZEB5nwvo18WDXu5L3SUiybW1CSJrjSUy7zd2oNNL3SPY3zLpZK2CLESjDf4yMwf",
  "key45": "zYY2jvYEDY85A4tV9goxEhCWeBW6EPLown7aww4LcW7vA1gkERv8kT1y6pHFWGTJTEjCjRPjD699j7bDV1KoBAY",
  "key46": "28qA7EkahPuUB27PYrZnGVzftsVHfoCx1tT8NQVWahqUBSTTgAuzg2dPzaeUwhDgpojEmBrq9HQZFMawSatKvUWy",
  "key47": "4k2czotijGRgZHoDkabqmY9jB26moPicshrzEKv3oocF91ivNuuiV2DnDYmE9VhRTEtcpUQtdz5NeaWSYrerENWT"
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
