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
    "25NWw5iUZDCYeFgcPDzmLdfkmXUsCfZ3T6p7YAyiZzzmwb6VW2Zj5sUDf4WCc6AkK2c2smgvPgz5cPwxtYyPsV1o"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4GbFRTqxPxP2aYvMmKetez1d3LWrnLajsPkBchbXbaAJeP8Jx21XoxHNVRrjphP7HsJreaiZzr1Y2dhpWzqdQf5w",
  "decoyKey1": "Xp45wCCs9YKTcGnMcEtG9CZcSX4uzyofkjFXDf48j4TSAPJfEEGdk79Fza5Mh4d8cfc712S2AM5SDALAfUS2NbF",
  "decoyKey2": "THf2TNGKvBvFaPFD8WciQgMrH2CFU2wU8VUbqjCj15bMiUYDcGfqJ7CHctb7phwTtYe4iugyoyUdLMSVWG3qxL3",
  "decoyKey3": "627QkLYDii4qmg855ucQEu69hW7VSHP3kgRfiaQ8ha9fU19J1YGsNpucvBDvako9JeHVuPTQJtysZ5pYEMR5qHue",
  "decoyKey4": "3R6TKCKJKX1Aoff1zAfFS7AAtKUJw6hMD4Z9n5zSfbjzjGLx12jWNxaZ8MtdhAozjDqirEwmxNoZe5iuwmvpHFQh",
  "decoyKey5": "4znNfra5JCQsZ2YiXZGR1ifP8nEgAN73dgBFAGcZLByCJnY58WkrJUHTtC2ee28Xm1fsZhFerveNZi1aqNiRUmfh",
  "decoyKey6": "X6s4gA6FpALhGVmxhiDLya1jgCthEje2T5NdqHtUVYyS6YaZazjMVwyXi3G6QnKCotEXrxd5khLBQWqWcAkP2a3",
  "decoyKey7": "5AG6dDRCMFmhumvcCshNsJg7ePbET2LNDegAe6WDYMaLt1RpYUgEoHmjfTViiYBtH9nL1ZSLZ1GWK6AVYh8r17bo",
  "decoyKey8": "4iJ9xgU8Z7k26WQySkPirdWTn5Zq246yixaGK3GbU6QKX9jRh4NK3b8Q3fmwj1R4ENgBg6LhmsracsAeRdesAsuc",
  "decoyKey9": "4SvEiWktBW7TCVG75vLqRPL3YMMCjifiuo1oVFvVY3LJcuEa8U2gazcygKgQwTw1Pr1znT6TzSV9akSLJxRPRDfA",
  "decoyKey10": "4rMDVsxja7M2NHGiCv7Np6goCmLSrWVmCugYHaWd95dXfJtKc1cc4aFP5rHA6ZrEiUrhFKRgUL5rFN4FJgU3XebD",
  "decoyKey11": "3FdhzvJrd2oDq7aWAA6BMTX7zZwB87kz7oTUptVhHyLzVtW91MnpwfBstAam8r99Ybdpvpi68iKFMJYbdZSkwfX1",
  "decoyKey12": "3X5UXqb4Z63ng34c76iDZvxf5T7BEaE3z1ZMCUb8taaVaPn4eKjvdzVuKohitFBX7He7ePTKTm9Rnydymqd8WPBE",
  "decoyKey13": "2tsrXqDcLmLK1Ez144KdRChF5hKYdRKWCUc2i8feesS9T4DAGmCvkQndLnwJyc7QhAJk91ZcGqq1JFCwmWoykARZ",
  "decoyKey14": "4t2C8M6yEefMpESif1QLJk9YkhRGmVSZWvoJ6yUrdqgeZfVw3MZd9mEZkGPS6UYJhLRjHPDbsYvFCMbnVnHPAjPN",
  "decoyKey15": "2ujZ58HZxqb5mQst8rgzQaYt6uEzQWN3s5vwWRS88Z2kCucsrtUYT51anZUcWVpYkeuoHr5LWYoRxa9iosJMDok6",
  "decoyKey16": "2tVKp2KGRm5qUP4GQZPnikPs4soP6jVSQhi4vjE83sNexxsk7ptxuM3oKGiEHrxkkBtUe5TXV79RXZGxKrSi6SKR",
  "decoyKey17": "5db8QyioBCF4Uqt6Tsjx2kTW6rwkG2JXbggYwq3pCPEG8MpPx7461nxW6WFVyRfecvTLDR5Gzy7d1mJ8htrQFTUX",
  "decoyKey18": "34ZvSkadxoPgq1iwwvTZcyd4LVNpryY15ZXxAa9mvLhBsjHYKJz815W8JozgxN5qWQzDcX7Sio4HZJdHAGJs1Kc1",
  "decoyKey19": "3qLKyN3tZR8oL2rjVk17oNy5XpjfEiw5tgfKJwmqCsjmwCMmd9c9pZEUq2eB5eM7rKeD7rHG9ZExYtADjwmjeTGD",
  "decoyKey20": "3ik7G3D19weRhgWtKmkrv3MyWhdzDFTr3ihoos9h5KxYpWXdqaEKu2Je1YJpTuJesA1HbZSqA3pwBmi8hHj9L2xQ",
  "decoyKey21": "yfqorZmBdgu9zeLt2nwQd5SBufX82pXKsmFaokHJtpsm1qBcs9fDe8xEHxaz3EaJa2X9vft5au4dpgx2bnXaJZM",
  "decoyKey22": "39MrxePpDkDnHwjjeYR4k7dzthV4DPW6wNDBbsUDUakSpq9q2upNY1YX69zu8z7EVM2KJx1zvjzhbE3iqsLY4XD",
  "decoyKey23": "2SUA7PgErb1BhAoXozZ5CkkPM8j2Wp8GQ8RuwYyGb47tDd8355wDzuk1Um2YGePWa2FzipfJxn5HhDi86obUDqtc",
  "decoyKey24": "58U2A55r1smhbLKCE6VxUUhAT8vQqjrFSfQWn9vsP8XTKUrSyJhcVrYdKiTUrM4U9Kyt6w6SW538MaPTk1Uz2aHn",
  "decoyKey25": "5jApbrjuPGNRo4Bd2rbCfZg4RdTidd18K4H3aGddYANGS76pAKijs5qirzK1VT6u58uUMrsokCoPvWTKzrzNF77h",
  "decoyKey26": "rs77mM31XheARPKq1Hjagrs77kmg3SSAshWHsFXCM89S8RTFsoWXCCFkWZXNaJeYu5iyKKMuNimdZAw4HYK8PtL",
  "decoyKey27": "2YpzVTGvaKHX8g2AK7J9JV9TZxgauTG2Ya6gbe9EXgzVsWs4RsTk5AVoAbLrMqSkUpLS7zo3ZUXD1jQR72PVhYuh",
  "decoyKey28": "2Hhhd7Q5EH3cVw8VCzqR7v1FBfuFgYh7ERU8R5ku48qWJMj6fqoGCWjyhtKJkP7R9uuUjn1SeYbbV2U7Unx2s6m2",
  "decoyKey29": "cPHVhWQbJeJvt6LLg7gxY2MKwp79CRXd2Nw78R9caD4CTezLSBi8u9MsWXKPWV2UPWVKTE1gGt7hDoR6sZ2oBhi",
  "decoyKey30": "3v5gY3DrvzkTtf53j8DcSaDCQ7cANZgYxkV5a8Dhy8tL98wd9tQ8VnKw6RYNB4AivgWCYVNhqvGxhoQC2fzjFAMF",
  "decoyKey31": "aHzYteFfxJssoJHA9kekpFhjnRM3aAAjGP1uzowFbJ1o8urL7n7BrhXTPVACSqFDFoRYLoNr4uRkiqVztsLKRbB",
  "decoyKey32": "MXgTs71HkrECH3JCBuMPqZo2TfXEy1i6faLsLVQWpVAg62nvyrLr9C5XhxMgHR5Tyo3fTRn1zEMcUQqMJrkDEhW",
  "decoyKey33": "3wqPpHg9E2WUWm9oLABj29NKmUZzRMSnDpeyDLQSkFbfUaJeQNXocrARpRs99oD3n3HGFPec66cSg1CjjPft3YrG",
  "decoyKey34": "2G8a18xDpG8vcE1LwPMnzvXvbsiVo5y4Gt9r58THhiJKb4HXa24U4FrMFfPszvnXdEoKWxbu4oRHMRbNsjjErjt6",
  "decoyKey35": "4nTQcBRZDmZYjTVoPMHZW9E95ogmXALACEuznMiXmv5BsQvnXFprF9uC5mhnXNyWGDZDy9ycpqGw4HsHLYmY5a9E",
  "decoyKey36": "3hM4LSDDoxTkoNJmfqHjXfkMm3Pj4hwNLhR2et5XUkecJinnwqvCEjnJJGSBabcQ8r6d2TnDMXkaaP6mPSVeu5nu",
  "decoyKey37": "2LyhtPuZCbTnQCSXLyxD1rN7SdCpHfESnoJwVLbaiGtJehWQvWMywBwEgkW7NL4a8QhvsGDRTDRJpYRkuAkbfcCT",
  "decoyKey38": "4KSUQmdofKJyCmBUhWTbEpvf85qx5RXxXyNCH7niySgET1xi22AmSv2PinKPe1co94Jg1kFgYHZcLTXJDPEk63CH"
};
// DECOY_KEYS_END
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