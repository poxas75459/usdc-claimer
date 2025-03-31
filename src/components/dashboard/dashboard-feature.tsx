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
    "3SaYpKgTGPUFnNngVZSTTy5TrD4UsSqUQTmmq4HhzXMZai6aRSqzJHoM9RHNTtZ1gnWJJHiLykQsGZzCiCUBDMLY"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "38fq9moATohjXfz8jbYuXiCz1b9B3g9eXDGvho2ZGvSFSpWyJAdBy99ZLCB1ANAeubE9eJRpEPHjozkTRAk1UCWE",
  "decoyKey1": "3sxCf2XFpUSww22pvpBvkZgfAuYyJfhKjyE6w8vMYi2Sc8ZXKbz7GdEtUizd5SQxrQvrbgP9dujivpt9Vdeq2uZm",
  "decoyKey2": "3DHbdytUy3XsfKYkrtK2ojmbe38NnEPSGYQ9H4txuWhnYRKtH4c2QEDUpzZcvKAhWWHScwFPTsQ18npk9qCdqpNE",
  "decoyKey3": "5S3df67HtB9NwpDigHsyCeANNKhvMDtYv7fFnpqpVfpurUEnvknsGBG3GTj9KcS4JSQw5yhbRSuW9ruEbfGLgRaE",
  "decoyKey4": "3vrWaS3jcQZba1rMz2rxA2rGrCrVweW2Q1a9WiZRq1CB9xnAPEkjzbuT8ZWz3DxV4bVxQSuBifDeysYAyWcLnXVT",
  "decoyKey5": "4HfvWsbVfMugDtftwwARrJZjU1mLqXytqnG1GbnGmd6cd9sU279XUvcJDGPUQqdFWXWuuYHcF7vFPNpRZZLKHbFK",
  "decoyKey6": "3jsbbuReJteNaxzEZSeK3vq4KcoVsdx1K5xR2sf452Y7psjyzmufDzhgKYM3F6LHheX99nGDwEYXs9JPSZ7RvCu6",
  "decoyKey7": "DuHcZDa4mHPJwmrxv3C2mh42yQswspCrkworNazbSvK314BgvxrLaRjsk2KQSzPqoV7X8iHv7HPPSRTayNsT73i",
  "decoyKey8": "MqW4ZANxqKohFcXoY8okXZAPiLh8yXP8ojTEzjGzMtskXdEFpjEzmBM6pdwem4o3Zt2BRXqnSLTrPq9SW7EdN6a",
  "decoyKey9": "2bbLemKazh3gERDBjRo9XuVLvkFYk5vpewe6bYGidN58txq6MXpJwm3QAFqm2zDX4BkbeWUntt85qVAGQi3UTbLU",
  "decoyKey10": "35aw2EpXqMjcosh5Y92Rku5NJ9eZ83QJfrAPqayF2pymaZFp2msPpdoUdwGJdpxgnEUQj6gd2h325NYH98ZfQobJ",
  "decoyKey11": "4kqWL5jUGWm3AHDWnmm4JJ89eqcn9wrZEUUSNG2MMGxJSHBTX4rxBTuJSMAGuWCpFdKxjSQRZ1gHazTHYhX4LrHH",
  "decoyKey12": "dyjKTbYNiTCdKq1cjKJ68c9eycKbvjcP1nVgD8HcUK5d1XTqao6QM1gv5DXjdmsJb9jbYEgfqbH3cu8BzGREqer",
  "decoyKey13": "2o8AVTnbfa9GoYUgftap5VaN11aCN7ybanRZZ8GZSyW3Hu3mNaBZnahQ1SoCKKjGPzT8732FhVJ6AxoW2WKJ6vLc",
  "decoyKey14": "DpgVtdU9uvaW6X1emCFGU9emPHjcoVAsvtdyo8rtS2RWtJ4BkchAnoUKrXdcnXE9KHBsTp2PxEw1D2cubrKHguW",
  "decoyKey15": "4RYSEZCv4xWzFGeTpEoj3EJmCJ3piJ7cnzsbHGvwT7XJ4UFD6RLKNV2eZjrrfY9R5wtG5UCG9aSkN46K7y6xTjZj",
  "decoyKey16": "2AiYwYcuyuAesdhFCJPzTs7HAndhycsrBvMuLpCZu5rioSUu4M8Z6NSRVizLuyHjj3GwhAjiQok5D4whQciLaBYi",
  "decoyKey17": "4xYxPafFx9NW6qDBVx9theeBFRgmissq4EQSuQ6kZg1RNGqDZATZZ8MPwsrzGw83v61FNEJSnzTEXw1HvPzVRhie",
  "decoyKey18": "3C436dgoA896vPJChBsLzbc42ZFKsRXXqPzxx6NUyFaCT9qUR6wyrYefcbnfpex2FxaTohHYnXfYsHv4PUWfZrAL",
  "decoyKey19": "5F2KKQMQNF35ijwsMh7WtUFfZmr47ewLk7YoLHVNN8TcqpW21uHqGxZ3yPvprS4ExqkkrTdEsxK3t1C9VPjq1kmu",
  "decoyKey20": "3Z1BWnpTYcM5ZrCf4M5M2Htm27wWsHDHKa7MUyogqjnRjCyCEUvJv2BhKdTQ4NdnZRXVt2hjG9HQ31z7zHdSf32u",
  "decoyKey21": "48mh9kBHRuQPrEheRbCGLw71LSmVj89XAb48d9TNAvXoSCjEYYYuXjJsV9EnEMVCfEvzJmqpgpuvvooThsq5s6nb",
  "decoyKey22": "MpBoFKmEvtQDohDcModtwn5tjjmQGXLzEGAhGdbmq2EHLSn1t8Yon5JrxMYToGy76LMs7qm1izQmweqR14dxT9q",
  "decoyKey23": "4GBgyudjj1q3QRsCKx4f4B9wzMCuAsdVWQuaD3aL8mt2zUSCtj415EVnuycsMN4eddS8M8paHCqLa3wajkw5tY3T",
  "decoyKey24": "oWudxr3TrW4vAUGmAaXX2cehWrqyBvHHGvqS1BXdLsMqMKN2DHeysLTNVVWnTkfS8zXBPLBN31CYCNy6PzaktP5",
  "decoyKey25": "3acq8dMg6GyyMNCjGGtotgxXT9upTViypeNJ7Dj2huyuRv56oqaiditeKzyqwwhueFtyEuy7CGdnzYDzcMcEVGt3",
  "decoyKey26": "4fjr4XWaHzDc7RiWkyQuTyr4j5dLJv6hkG7WE92eJbk8E3yWoze7bj1ibqYmjhEdJg7AoLGXeu9642qaMHurCivZ",
  "decoyKey27": "44FLAFDV7DfuAMvMx15PpqHKgAApQRFgRNaQ3A9CevASTJBde9zcLUbwQ3J8XhBmQ2ZozVXjVR6Uy7tqBLR3tMCg",
  "decoyKey28": "3xDPPesGaZGgJE2vnSgdvY7GC2jV588X5wTx5EXRYPmZY2sxgUcbDKXvv1askE2WsZg89D96xuH3KzBkrp8euXkb",
  "decoyKey29": "3JnfUE1b4zefnavNTkxsWG883NVpvtyh7ttmEM7XdtzeuMsJ98WB6J7byG7BXqKuWZ8VeKkfDwM4NaNEPGQ27ncW",
  "decoyKey30": "4hPAzosbDvZvtTsR82Y6Jnri4UQivqNg96H4AcRfLbSkT4kSebfUHBe84MM5YqZNyyL1YUEP5SP7ufHBdCPCkGMA",
  "decoyKey31": "41PtRt27LhdGSyjqfpoTbzFpFkUcu4qJDk8N9EYMzWU56G79SgtTWtrznnBuCjhBUNS6V4mH71wjUQACiiiBoKfQ",
  "decoyKey32": "3rhNHZ8raKKzTvF12tiMHHQZFo7eJq3WugD4etGv2oRbDXsY9dQ4BiqMrBbw3San4ZYnPdigoxLHA1xzMjQL89av",
  "decoyKey33": "294QCKEfiXkckD62BvuSspxxxACiJz52Dt8ZZojf9FGQzMhYaorMDnyvJzVLrC6qteL391ZqxfvG4vgctQumkryo",
  "decoyKey34": "GbdPcFDJPcGvSX2deTkf1hJ9xh8EeX1XvAURsyyYMYTtXJMAPHi7BuKo1ws6MaWPB8drot7kPGo57komLFdZZUX",
  "decoyKey35": "31SYnAuHnYArqvLgM1Kma6tH3bRvmQcd36i6TGhkcbM2QHYQwbcuwptHKNCc8wZFm2j2JQZK4neRaRxceBdsjMGZ",
  "decoyKey36": "5NiX8e4CgeZ4wW9zzNdqRRrkpqtZ7Em7wK74n6P1LCipQR8kkv8EcM6tP5iD7fXLRwXF5jcThpwn11QuSxxcsC6q",
  "decoyKey37": "tEbR3nDFaKdA6eMo3F4cfL6KYoMHenRe73pzx9FEDkv6rwW7TSvaS27nTpwtvze9p6x7XVe5VZXWkx8g8YhUAcD",
  "decoyKey38": "4pxGdC87GbdKX95yhMMdJ8VJZGoyHoqXEzT5M4CheuaXtGAEgRqpEGMaTfvqA2EQEj9iZqhGi3mhxUtdJuHawQWL",
  "decoyKey39": "SPxBvSxEUB4CAaYA2sW1FA9vYFWHEecTt18Akp3S3xECE4yy7wiZkzrAMrYigEfpSovtNFFdQSLKnRzXVyYNpyo",
  "decoyKey40": "3Nyrr7hmSGfKhfJUHktpyfKEWAFJoSMCcE8v2yvo77EoqedwuSUEfYphofd4wB6BNennwC7A4tLMPpnENdyUy7Uy",
  "decoyKey41": "kPpQnAwTVKM5WyFpJs3mdzmrXNjqGxkEZfcpGifTpNERzbuuw9mZ5Ui8xB9zFD35KRW9XtfkV3CYLxChaY3nz1X",
  "decoyKey42": "5c5SDbUQh44c7i4YUt5wMk86KrrLJ6LSJDkoaBw8S6qDhEvYy37sZJn6SR7xuh7JgKgTUwsRFjcyDrqvDmnqwB1d",
  "decoyKey43": "4dAfR3pbgszMoMp1x5qbGLZCj5vrxMQrxounFwkjQC6oAcXhevz1G2wTx5cr6EyvRxNwPhBGQw6DmhpvpEHZL2mu",
  "decoyKey44": "5PdBoLwouhV2jckzmwq8qu7Ep2iAxuMuFPp5nEoD7i493hQou5Y6CWXbu8HTJKwzSBNCFB8fb8jZzaveEZyhRMeC",
  "decoyKey45": "4wr5QZAFe3YJobgvBMxKkbPtPUf7JFQ9HzcH4ywxCQzp1qECRsWiPR3PG5Yg5r7EzWeGBfbPg4VcFBSZfZsK6q7R",
  "decoyKey46": "2UyrpxYLCfSdgzkmqmP5MDW96okeyMMmiNZM6tHe7hRhAkZgmUVgkMdwxZnDddcjqtM9VMkr22iFJkXKTHTL3xdR",
  "decoyKey47": "3R3Z6gGMvpkDmaUDsXkYiq3C2ZsQsaTeRiYfW9M8HQBuNVaZ3NpB5Ln3RrpMsA6egZEJ42HfKYVwToihQwYWvf6k",
  "decoyKey48": "3cb4oL4yqAcxKh765fjswz36PLNWmuTK9j3ezxjNVYkiwo6NMQaDHA31Y8Y5PyPhnGv8ak5NAnwC9fZUNERhGAwg",
  "decoyKey49": "47KfJmeHirMHKcoaWqcdkjhfdap83eo8uVBf73DHDXBM7ELHTkbsvdcc5XMCuLPTYd2D7ovczEDKYcdSsMmCpMc2"
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