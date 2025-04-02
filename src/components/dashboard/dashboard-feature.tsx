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
    "SHC61gEZPTCsEQgCzTviHZmTjJUEftrSAaisB2K3s76uU1pMaEowwm37H51yT6VFQQQYAzb6ugtPbAHzNmNFDft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HD6L64j5YeGDyL2SX3mogxb3i31DCgt3TKF1bUEuLk87MQ63xnYunpNcF1fXKVwCgSx3isNd9m8RkKmyJsNJzMw",
  "key1": "tzTDPuUFyCXmUhFXmT7wPTHK9pttVVS8SHYEp6Xwa5fYRuS8yt7Mcx4qD1ApmEXGtjAAWqcB5zK5tnt3XeBf1uq",
  "key2": "4CTPXKrmrV5xmmFY37M8gzKKbQELXBt8RoKEpBiVeJisA2fUgeFmJ5EYzivsMdpetVHp8jxsAq8f5eW62K5D4i9T",
  "key3": "2cbU5Hq8Endq6aRFBPNzeVnL1VDqapdSM3Gf4DmP54rB6s4ynhATffXJAzDxRMx4X3Q7dDG7uqHFMTB6hA9iYiuF",
  "key4": "43GqKjEfTxwzVA5zK9HiZPz3WWZ1XhmvVpTjG31vqnXwpWxpJxtfb5zqnFJJP5cANFQqQjRJ5mgxdWTmzHsnwAke",
  "key5": "2SY9S8RCHDjvFvCDDtJzTdDXwxXz4Mryyjgz17Zh63nEayavRfU38j1y2ofaixhTpAuLpzC1zLVqvbtAx5Y1x9iE",
  "key6": "5haboXmEHctAUeiG4sFNvFwN1TNQd9SoUYuGEBjoWnG7NB5cBT3Zqu4W6ZkPZMT5bWrkhF8vuasD33vFfEWGWCPi",
  "key7": "H2fJzqgYFNAsZuPJqVcNHfaPiEHRSPap7MDKauaN9V3GhB5sGDfBAEWVcMfdyNMbyFVhCa3TgMUjmJw6NKCwNoG",
  "key8": "2hNond75iENB8Jrd2fMWnSxQU63WU72BMRtBtWTa5LBXFsmZjTSE4SSZXdyLCRmq9sewrA6T6FCtVtr5eMqw2oXB",
  "key9": "4qCXbuC836iz6VjBDaFw9izaj9eWoa8bWvdtdVxC1SYLxGe3cEUsQcrSsAo8BdByn59DXEckA3ngBxeSN225nn5r",
  "key10": "5uJMEu1FiZkEyeoR4VMxg9Ui4ez3ordjK8yzdX55Gvgop2hqPwb4LDgQdg7G1H6zwvnCKNFvqpDicAEjj4XDimVP",
  "key11": "2CqLqLPNDRU1HG1ea98zgr9Vg1Cw3gpkt9bY4J8hhuRwhjJguQCr7i8sZq5VUhcYpqF5PbBp2e8Qhu2xaJ5eHjST",
  "key12": "VZEAecYqgXG7baNVN6kQwimN2rCRcnWqER9ZaoCNzDJhHiL3BdoHU7ifCf6pTQurzjS6fun4KsVXSe1GinFsxGw",
  "key13": "4EgjSqPenC7DA9HYUV42B9FVJwnznEXW87yLb7QrH5mHff9VGU3txvL8GNLhDZ9RZ48uF9Tt2yLT7x3zUPdBPVph",
  "key14": "49q8HKXg34staQVPCh9bHc3kY7ocv4CwqS4K7h9ewt8sGbHnbqPCwxQXzuuFjFpnPpwKkxYu5eVcnU66qPexvJu",
  "key15": "3qJH69pY31r3a7E2UPo1CCvbKiBYVzLaMzmpfuKNNDHNYFA2pCW2Fod5ik2sFYdd7pkJFpXpBefNPHR1S8A6AEEk",
  "key16": "2AA8agy2z31XhDssY8PSL44LDM1Gwu7ux682E2q3BLcGwyo4jDbU6fXXdPbqfq9J9pVZVKerTvQ2BLnLm2YyKy61",
  "key17": "2zmTNmehNmktLKcSBLD7aAznvDiFKe6SKsxbDbZxdxPLBCiK5uTfGy6yGHtBJKtRtYR19K7NagQAfLG1CkDB4jJf",
  "key18": "3sozZE1jrguPXkB1LpydEFnsJ3zkmXirmW9DoKVQgXNWCeCkMYpWDqzBNVkEiPSh562ZDRrzg957rtS42roL1NhS",
  "key19": "4ZnQDLq32i4QSPLynbzTwGPLnYNMLZCesTjM3BbFbuY9BpmiSHe6VeqyWrzpuMPHJ4LN64zj3WVHsyDbQCrQjJ3q",
  "key20": "51bGQrm6ScyNLh5VGLfnebn74XgZ2Jj2A7FWzPJc1dEaTWWJ3vrXDaspuyGLHwHNCV397NEbEdciMDNfnv6P13EW",
  "key21": "4wU8raWXs6kWsCfAcaj6MPDfmkG93Z21UnkrFDoZsHR85n4cCrmajd5CUunV8XdtmDfMwppVHEZ9x9oDovdt3VEU",
  "key22": "4J3yVbVWpdPJhXdfgZSgVTmYoMTKQk429yeyT1CE7EV33sFpJz7yDmASYKozmsptZCeaQyZ1kSKzTEDV27Xo3P5s",
  "key23": "4JzkUCFneHoTg8NFmNS8KXjv73oLYu4PYxTKhhWji5PTgPkv3xkb1YmPtsUVwBNJKGEi17MWjovaqDT498pFbeKr",
  "key24": "3kdB8edmLSwXFW1XhTry5fDkxPtzoRKqJzLLkyGGpSxfPzJzuQPcsxfZFRcsQwe6RETXLVWrbAf1FQwvCTr74WCy",
  "key25": "33RUdFLyJpBfqeWnwBFtSTcAUFwPTC2DHFsgsaS1GapCeBhadKTRd1616y81zJVHT5rneQzTMZ2z6oaFq8kMEPbv",
  "key26": "34Jb1yBHRd7rbQ95DsyZcVJ7sRajeCVBAJtj3AS23sPe6Cd5haG5b619oJfkQVXMQvo8uMFZJ6ehBzwQCbaEAMJi",
  "key27": "3rembBsr5yrshaGBBfiq1SGQdk8a9HtqnQtWvWrRmtRY6tbPGwfLaHSQ6JfqKCzVuXbJDfTWWQETRhTEHApjZm8D",
  "key28": "4yKPqLBv5YwkBRqpyPqYA9ebiczNsCo5zZAkBq7rsCtvy46jDfotDFHHcqTQZsGxAZYPJfX7UMHEsw3ftdPgd7Mw",
  "key29": "NZP6XBk8dFwvnQh9SMhRc6PX1dLWPbLXK5HsiMsiMc1m9BM7ytsDsiwTtrH1Db6BqNoBFdLTdYq6wikvcTeNWpu",
  "key30": "2oMyZy4L52ta4C8a8E8aeMg82QA1nZVbygvfDTyiT3mrfBz5PfLK4NJUpsWGy7cFJK5whz3yMrenADCdzd7VZ9RA",
  "key31": "5UYkeHhz58fRuMbhZ8bpQv4FDb9GpwxZatXkBT454NB5Gsm3M2YsuRsDbSWBVnmyc8oNaywsvFWcZDba2cCUhJ3y",
  "key32": "57gQmd3r5DtfD1jad8gvGCAZMnExBy7khtJ8Ni4J5aQjfizuJ2yP9jxABMYzNx6tprwkMTHjJTUybJuG4G4zdYF3",
  "key33": "2kbLAvtLMbqi2Q2YX5L2P9ik6KGwpvFsviuEsHZ111pxbNnJDydPXWAhtUo2k71RD7Ee1eKucch68w7nha9fLjA2",
  "key34": "3g8HzGtrupWxZEGPQooaQjwpTDTPPUoWDYaQ24N7J8Me5PX86R45rPXUExGLHuBsvXhfVAkaTwoD2awEh2aTK584",
  "key35": "k3g9L579kbAcmFVccVsaBFqhBMxwM3vgFkiREFmFNSA5N8NAveN12Ad67zyywDNHP51wFfvG9PkcW1xdxEc9k3h",
  "key36": "ve2hs4cTVxfHKaqh31ArhHpD79YKksys1Jv8dvW1BC1AsQPRtsxmAzgLmfg7QyUtpnYwYhkcFVFAAGhndgACtee",
  "key37": "hNZco7Avn6Jy3HBMdaURX7kt7NUYsZs7R6miSKM5SQtXvBwH3ukSzeWk4gy6ejjVFHe1j8wDF267K8oUKxCSoSG",
  "key38": "WMo6oFFUvNJFoUiousFjuRk6wvNBRG4tvRuoXHujXBvMcun9YBAv58HZcdqu1AZ3sBpSbNniAndVRXFY4JVdqEb",
  "key39": "59fovdJqPMdSeHoGYRejFNpQmJTdqrnmhno1ciBJz9pkYYdtNzH7yi97LXbY5pcg4Y8kdn3h9Z1DACq9KwwpQpHQ",
  "key40": "316q3xabG9qSRd4GEjPjztBh1JnbXmASpAoca4RYYfdvqTNDUdbfBrf7d1KqHXEezYVN2qcRCjvS9yDyyZNNau8k",
  "key41": "4QMc1A4AaqyTzjSa8njfDcxdHaiC1jBT5DJfEdRMGnNzQUPSoSUhqcChQKptix5V6or3VeqNdV9cHo1RSL26Qise",
  "key42": "2NLUJPVoVajT2kjKNYvxjZAJAju5MekZHugqExBHRmghRJhWQLghCi5VF76qNFpTUdpzmWzd5zpgAgbPmUb7hhiY",
  "key43": "5p7V3REbUX39LcwYqCP3GG8NxcZbgiEWP95iuiurqyLwaebi7DYNEbHdk8wK6VS4cUwzFtpiERTcGB2KSK3J4FXm",
  "key44": "5wK1YDdZzCLStZgdyzGu1GPY5bNcooFNjVBMeQgjFAk7FfZHhsGWTPucDwSSaWhD1sPur2sCU2tX96ZmncoD4obe",
  "key45": "5CiWaTVvRJ5cUHR6WJpWmNF9vSWWnDEAa6kATQ6xRenq71M4gCXKMNErTNSeqgPkuoHvumUWnQjtHpcVka4faGjR",
  "key46": "29pPecMXivd9cc6V1FgkN6HiWE8HiMkj3DUDTTPkHKQ7wSVVybsC966YZCQwJHj8MWRbdy945byFq3HKr8SgVGfi",
  "key47": "3ZKokdPXRyi6Bi3YcGUk9A6vZ5CCEfBsrupBcZYgWRM8M3k7u33GZaVMEpwa6GQTZDHeMAuo4zm9h5Wkcx29CAxA"
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
