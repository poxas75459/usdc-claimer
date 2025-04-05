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
    "2D5dLP2dd4eQPS5JTh3j2AT9WHfDE8AoENARH6ayZpv2MMGfg4hdkof8Vr9opZbWeZG1vYRKPysPd6U9qsCpaGe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ocPTspXj5iWsuGrE9ggi2mUNEAUJ8PyvohdRK6mVr3uVitpM5tNKrE7RSqmiuNn57WFftiZ3wBPJvCeaet1xez3",
  "key1": "5PxYFa4u23vrnoZ9XFgKA5fgYBkaKZ9UyLzpmmSgXQypzJ8jVxMovZyCrgKG6rZL8x7PtzCmUvoVroVGMbieubUp",
  "key2": "kZjQPhwW6n2ofQqaYPt47FRCkyv9bFe1ZDZUYvETqW6kfZSLj7RPZaBsHQfKTc7csCEhSZ8poGnF2TaG8s7kDrP",
  "key3": "42mnUk6qRJHwPdrkPWNf4Lz19y3iPLSu1DvVhSjR1LdnCfCByVXnVCna8RWoS43NMPM2TJUmRqwBs1gPX2TpQEuT",
  "key4": "2f92bVB23dcJEhQNXD2wfM7k1gkpZAeWRmJeej1FKnTYxEJu5eM7hZTXi953VXtC3PbGAzrwi1H5GwqTP1D1ZohX",
  "key5": "3gGKSEZpmtVQ4avniroGvyHTzW5kyiJ4RM5k9iPutmEYxraeFP846hERYPTkJ2HXhKirusJ6FoNi3vJDcCixg62f",
  "key6": "dntVgAGFRraGHRAvRXA3NMZNB3hyuroZPbET8nCWtQrobasQj62zTqe8xpnEpTnH5xifoR2x8XE1FqokTnuTgp3",
  "key7": "FKYT4Y5HrcNbCjZPyuatRberuLmWffQ1oHAvLV8uaEUyd47xPrSfkzq1AWAy3nNBCsUsReAFty9kWmtDTurr3SH",
  "key8": "3RF5UyK1NLbBFzzxC8Pj4xRZEMY1igwvgeg5rJBCwY8ewicazgcT2YFWerdPk2JSAAgL9xLxkR2NG9m1yTrEusd1",
  "key9": "2wrMc2hDysNBtTvhS4symeW9ry4TQ3L9K2gLj4KkjnUcYMkEFYRmG1ZqpfDVhFqTUZ7mAHySrLFtBTsCT2pugFrW",
  "key10": "4yzjQeW5bED6hgfnoRCG73NKKkrmLKtvgrnheXTjsVrmVbwn78sWtFwbe266N5q3X9udMsW9Ym7iZxpxrMnEMe2v",
  "key11": "5fmcdBECDKp8UJkovcjgtADbqqK7m8uUGFRRR4mAQSyFXATNYquPwYMpc6UqSnMj7iwNiAuRJ7HTZQpfpsfo1Br4",
  "key12": "n2EtEZRFpruBoXhW7iNGEDw1QPPfskm6oxajTtZLCqeJ3AECptXRRMJDavwZNP4J7hwBmhXunko4zhSEuL3osaR",
  "key13": "4iWabyB2RBY2UsdT7QBBJsffJGAMCWXC7Ke5EnbG1m4vmyq6qCSdmZTAzsDmTbZbMSpE5L7uojTA8vjrvKk6KxUU",
  "key14": "4E4uNXiXRwvqqBro7ZrafARSjMwaGKHqzwtVUF2V4gwXjpHMoW7fnCxKqBxjD3v4aeh7JVkG5XZKtntZV2NwFpFQ",
  "key15": "xdiqL1DGvPph8z5sT8etiQD4RuhRpocXoQ94nr2EHPnwgLSjHC1JQHsSaeS4xns9ta2uqGREPPGeL1QzWEPnTcD",
  "key16": "5HBPM7v5BaM4pccNKuPKxj6dNyrGVQs97uHRcyjPGyz556h5Ajf89i6ijHNxiXrDVYBsk8yV2SzT9xJoJxmZS5gy",
  "key17": "5uM3b2vVo2TC7tu3MiuR9LFt5wwWTcsQLG3cHUQoYEpwLnjJpERY9Kx7AfSGMgniqXcCEfTHNgfr2cdLsTDbkNdE",
  "key18": "2zPkC5rMtMo3yrnVuFqDfXbSe1UgUoRmeRqWvfeAuAGaH5wMzbcaupsD6ZKkMLTHkrZ2vDi7L8Xrf44i3D8Mebn2",
  "key19": "5JofdYeh94ayr4uDzeoN7ZrSHVV3r1PNj9upECbth8SCum75JyDzJdRxBASRjVGaxnexk4yGtmrqdFQp61tAMa19",
  "key20": "6W6dz8Mo13vFqs8g8dBp37yxn3pD17fR4kbCZQqvfrgxebeTMhRvQf2uFVX4ErnyitSptnhc2koVhFKWoUoT6Us",
  "key21": "JcPQnG3CsfAXpCtvshWXVtwqSExLma7TWYtAWdKvrCnEiTNmHUSey79FFyN6vE2jcstsCnC2k3qspsd4xGyh2q5",
  "key22": "5yWMRBVMszKN86ocE6PudbJ8owESshoyUvvKMba5rtiPoRFwbLJCupqZApV6eDFsbLHsGpL2KNWnGsiXKEUpwS4z",
  "key23": "5GPyscMGdbuoXE6jTn3ashFkPwVcGZXj4AJcKznxEopwYW6RrFmJjKNQsKAALywMJrYuNF6zWACZban6cvfrvreK",
  "key24": "3tb2iaTvddzLxN71x1ytiDgnWmftWUTm3wXxLwHteKM8TPC7fdMa8bRV7jWvpUHmf8XzXGSMw1GiSxdxZnjC3NU3",
  "key25": "CprBjpwwpsXPcEwjAxU2W7pGW1ePMqw6UauXCaAMS8xBFVHdzhzLZzgLWrGF9e82ZtzRQg6ymZ7NwerECTTFKfG",
  "key26": "NEA7qyUGNjeNx3XEW8fM8SPfV44CJn8V7eMvxwMUK7cuRaDWxPqLkzE5BNUKLcAY76ZPExDsidsDgFrBiss4cxe",
  "key27": "2EhMMY5wSbimhX2R5eA57XRTZb3SxSuhHZvnf5YCyUrHmzrSuvzFZUJGoecuACqDgFviMtgYooFf3LkB4Jp9EFog",
  "key28": "4ERCVf98LHnJyWauSmiwuexqw7B6gGgUZxX38eYtjUTPfTE7QMRYCpNa8jH2QFR7ZyLfBLYBS2de1qvSWGzbyT1K",
  "key29": "rbiM9gQLfT3wLCn7hRVC1GmaC54MV5kpDUrZxUgzx4a5ibvFWRTbUHLDJ9rsuCGMw9cRLs8yHjTWuPQTJqqEntR",
  "key30": "3V5kyw4noaA6Ui4DfmhYyGGo45msCj2RueU4BzU9G495msCBCJPZQcU6JWcmjJKA8Q1MzxZQGn84WZT6moRZFSjE",
  "key31": "4eCppwkKmaxoVicUWudFT2HSEVgufziuY1XThK5DNbks9CShtBtFuYheH79pGatLipMdjTFBLnEG7DS7qKFGnZVe",
  "key32": "629xT4jMaCRU296zt2SpMGZDkfJHPwQki7kK9Qd6vxeDbHwXi7WWUQyrzXZnXe9Df5UfuFHgMrEYcYfgFLc6C1QS",
  "key33": "5tqt8Qc9iC8au4pCxGqvN4PVHsvvV6c497zHvza8mzqoyqykHzHHsV5Njt3bEZS13nFeYpE67wFDfJDJUfkv7oB9",
  "key34": "4fqWxmJpR7eZaubMB2uorrSi8TgMNBERQUE6AWdDUpYEUehDThTaPdR6iZR4YbcFNok7xdpDJp2sVeH7xgHutwvP",
  "key35": "HfaDPbJjShwkCLAFu4y3jaDh133D5tpecTpLCQfDj5YLQoXcmT3EWvF2mkkWJ14Ypd3WHGK34ndFtYHY7WuiL3z",
  "key36": "3ZhakyntMfFSJtHaEmXh2YzXx4ozPGMKtxrBNYo1fG9ZcG8FXA1goaHzmaAtfN4ff9DcYpQGETff6rjZdHW3qzKi",
  "key37": "24EpBi687y1p3ZeTN1LfYd85xNLDffo1hdW1D2at9K5qr9XLemY8hVo1VdZaHJ1aFa5BDgb6m9hih78aBkvxET98",
  "key38": "2BH2EokYUvruUEpHfGsnxpnnHsuiyxpmveitvTwuNbPDFqPeqVXc6w2WqgzUSd9hpJD9y6mXYSLwf3pSgYMbFALj",
  "key39": "5dqFqCz7waFKmAEkpgYea75YL46uwD2SEtkUzzQztPmWco2Zr3DZ4d1QNxcTwiAdLziKBjdEpMmzE8YtgT2rwUVo",
  "key40": "3kqM9JzLEJv32Bep92SiT3HyACyFvqQCZn3jgGau1Q62RjR8oXSQTyEmKPmBpgarXuXnz1gzGkrLRUoLtVT5n4rC",
  "key41": "5LpfAwh6z3p7ZQQqZzMdSuDxD76XP1KM3FvyjzMywKmXV5hJMovpJ4nodXdTpDg6qddBovtX9pGKmcqvgd8f4pqc",
  "key42": "5868kUuCn4uGzxJpuEro8bJwmFrfFqp4h2Rbp1HX5e1fweew1AYxP9toFUrvprtBbAB6GSiAdQxqN85hv79ddZRf",
  "key43": "xa8KwJW5nhDur1T7wevTHeEwnQh9tajduxVpPMqYbSpGRVZ2KZ4C6exxcqYaH48XEos1Xngkib4upcgf9jrp8yo",
  "key44": "3G4sVsDv5Tynu6CW4DV3HPgJMc41664DeeWnR6mHmo9CHDu6ePFEhHtBxL6UipQwedeamseG8abv3ncR1uXnhJoE",
  "key45": "5m7osxkTFy5V47P4dauarfwEb1N7tM4pm1osqukvV2qcZ6iDmy34JgV1SgPVVjKY1hfnSxtwpTtpoXmFFRfW7oFr",
  "key46": "3JEgAUgErwRTGAzDGbXc3dg65FejaNnBTcnuTYBgF5ZAgqbQibppFAMsrJYmvUeN54YRFURSURs3wSPKduoa7Bhh",
  "key47": "2WvCDHa3BATHM4NwrTykgUMzrGky4fAVKt9erLExgsXEt3YSRn6JL4bMEpe86RCt3CvWh9x5wLRQXCfktZakK1DE"
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
