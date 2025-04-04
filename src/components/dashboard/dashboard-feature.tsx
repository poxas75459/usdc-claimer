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
    "3pF6kG69wuKosznPLDuZCFUzCcRsq4E6tdEMPM4cShswZGzWnKfqjUx2FF66nPSbiFSkqws6ZuityYbnMH3NWDFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDJsNdonwbe3ahnrWXjRBuSpUU5jofZf2HPoR2ve6ovebPkmx1BSrL9uiX5TFfygENrAfADP9DM3PzPMrFwChS4",
  "key1": "4pE4k9HkjA6y6oUNTCMF7YQar7gB6XVeeL2Li4YNGL3s3FEVXNQZGAUP5sJoUdQ3pCcrcqhbAgo2VJ2jEsfjFgkY",
  "key2": "oGBVjwbMze6FzqyJDjmLfFiFThMzdS4pQLgv1RRrew2wTQcwPodamTyyo3jFKo5qFvbnKtfwuP7GpVAWoaA4QRv",
  "key3": "xLFWxABWMTfioCR8c3WRRJ69REgvZYbacHrcwbnHRfA4ycrYHba47CpCmkzWNgz3zmQrjWJYSiwM6pgB7vUYu4E",
  "key4": "x8ycqc8qq4QKvYZcjQTVrvXixHVHYw4RDDXhPUdmNrB88eLCxYXJr6gdLbYHoQtDnaWWGTr3fRBSUwyTz55ky17",
  "key5": "5cCRwM8HsShEZNkA6BvFMaBJr4g2e63W7NfsQPEj9ruv2bLeBitXHNpgcLBJUYWySmjGqe6Ts67vzFn9NcnEuXRE",
  "key6": "4yCLxnm39nytvydvSCiKdFt9Z9eRuBp4eXBgehuL4tBvuRB4JL1Z3Mvs44FzTpqyNi8cPBYbExiPCbmcuCB1rEVb",
  "key7": "2mfcygztYb6tNy5oNuFyfzsg2xbXUtmHTNVvdjRjEd2pMZDkqFmgnhrDbYXM5w2MBGME7EJk9oWauZFAmh6NRQhe",
  "key8": "kMEoqL82hznDA5AjG8N2i4zK2PMt6gXthoGafZ6DQxvRS5JVZ6WxALvdtnNo3GifiDpJva9xoLt2giKchrQYMrY",
  "key9": "2s28gbtq5yfRayDERhZTw79gnPuNBCNUipj79DeHyRdKGXVoAScRSWYCAo5Gb2VjYofQLoUh5FA2cWTGsQA8bfrF",
  "key10": "5rK7kGUBscu5zs1EGa3Hs8pKPjwpHDtiB3wfZCW6HkD2aKJ42CrWAZPMw3BeoBniyL16xNQaZzLw3S4VibgEFfZz",
  "key11": "31EGYRE3TZf6xscWMpMZqvyK2gSuAg1ytZeDZRxvAASGzU5f2PsihDaZo69S4odbwfQuYwnfkwegnQT4ivTxdeRQ",
  "key12": "5CSAM6prfaEzWioPcudFuwyBwoCX6gp3n4GaMMaSugJmP5N1tRXwnPD25zBAhHXySETUn2UYknZR6EFXmvDmJPdw",
  "key13": "9H2SgxMZFRQwsCiTimhJ2SLSboJUoJu7NmMy2ETn2Mje9pCS9RgDmYbvc4w1Ew62j6iHt4CTPobiiWrW49ZyC9x",
  "key14": "4RyjcHhrm4DeyRiEp8xv6QkAGzVWgPfWsgYTs9dbSxjv136PXJB7B9BhRSE2YVYqYzWSeZzXsirHT5GepUhzwmkK",
  "key15": "vG1fQqaZ48kpGyaujJWTvjigaTCpGsd8RDU863LfTZLkwmJ5GHopMLTUjpBBLk3Mq1epxE9Nv84drkeAUtKcR8f",
  "key16": "5wL2o1eUdprygDiVDqmjTb46Ekvt5jX8dda1HQey8fh4gn6aXyD6TyFwz4zrchxae7pyzb1koWKLe7dGt3LZ58Tc",
  "key17": "59gRdgrAUSDSryA69cxkGS1VPZzALZMg9ou5ujyQcmG6UgFPo9vXYTSdSPrriLaSSRmYBX7n9aoek2chhGXGq1My",
  "key18": "3dEP1PSSyN4yJvFscdFbVhu5RxQKzj7q3BC9NVevYzAuX4mzmqxXU5prJa4Y7dURezsGjRwNtFc9ikHpWroUaSgo",
  "key19": "zM5Te2Axb76Yat3WrTe63GsqhddCkgdNhiMbCrfpBC8XWduBDjDfS4BPyQtfjN9iuuJVdTkh3WVdgiTPat6DQTF",
  "key20": "2iwbou966gqCAKrtkXsh1U7AcKgj547Ah4Yq89zjsjmyhVVUPVkeNeSy3TVJ7sTqWqFFfkutng1y94czBHnxKE8P",
  "key21": "4fnZQJZLBXf9kqedsY8kQGiyBG8i2pyZWGogVG7Bp1N2fFRiWsEUn7r1bzqeejjbj5WLbn3zFm1UexpQ62rupnnc",
  "key22": "4EEzrHVcmxpSyPCV4TPQcc9rvFJph4h6swVScBdQ8ET21bKwSJyeaw7MJLuNjfwAvQ5eDvdQaUyz282HLS5vwjZZ",
  "key23": "LdZvnsMYmy8DkhHMmRsb4M4y6w9rZuFXH18jXSvbiqYgBQwB3fkTjWpdugpr3Mwg79qVuCPJWu2VeLC39LS4sso",
  "key24": "cS9p5QYY3DxFkMFRnAGFzKL7GRxfXGLZhQbWfMJSw5PcnZtpziYLKGqBnXHVWFzoi2m2v4YdaHYfSmQQkkwXMAF",
  "key25": "5yX2up4zqEYDbuqNcngZ2PiM2KQ5yd9xCW8Mq5FrAzgvSMvAJfMHnoeTMcYyRrWCgRTNrMjEJM1VNDhJV8wozQ8a",
  "key26": "4BeQW2Xx4QRvSqgVp7pXJePWX8MUTF37cRBi9ofuyeDwAkDM9oGfL9Exj37xssmgS2BY26qdQH2aDgJYyMB1vT7F",
  "key27": "3jKgAcynvrnntDj6RXLufWiESm4dKzSn4PCGKLLKzzPqbX2NGRp6gFh6BBm3aiVFGDXdCaqXAuGSJQ2PLbsFCY9a",
  "key28": "2FQ7r8nFKHyUWrpxskmB84pHPXMDghMMvNHynWD3UXKkmdp65176V3BzUYZzdyiq7sYYYmR1JMwgdwbbawri636s",
  "key29": "67T2vvTNBCZipWo5MhzDXq6zHFWtpAP9DTLpqsJnpSzneXSBt6Uoqi4XGeez1e5VEqftvnUFvJrYkz4nKiWa8Gtn",
  "key30": "4Xt3CwG8Ps3c9rufifEGXLQBGayLcYJ1FU8cvQkbaanDG5XNGkmCYiSioueVkyd38hCxT4zZGVizTBUV7n3oqzDR"
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
