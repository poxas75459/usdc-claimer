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
    "2nZUFgPHPGtHeJbiVrF334fjDT9sXfKPtmxKksTkqkF8MFEVEVeAxgAo2Ls75E7FaVAK8SJrGo8DmRGUQhYMVHTV"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "ZYRstevLnKDgkt5eHnTSH4hbAY85Lvw7wuKQrS3QZ5bp66WTT7XMjA5HuXgsdV4WFJvsfArJ768Wvf74dPJy6nu",
  "decoyKey1": "5WB6FoqiVhZnSG4X8wxHMgA3rDmYgyfFnmPbSBA8P2atbU8iSBeaDz2Rsv37jW4kpEHJKSmZVjZ7wP8Et8HRWB1R",
  "decoyKey2": "28Pv3bRrCfi5XtPtb5b6uwv3sXv3iXWzmvW8xfHgu5tnJcKzJQQA3EVTdwyBh2e9HkKgeDgEcBWhnsntGfvnZrYJ",
  "decoyKey3": "3wcdV42xHDKHvnXitytbVRhESuSjN3NyXTuevEhmBbmN6kKP1oAmeyZtwwoGLvw7RC3c75RwaLzZrFGwtswtAJ7d",
  "decoyKey4": "AVWRo88Cwdr144oQvi9LYHAkAyd9XtszHN6MQuFTbquGSHpGag7djsFCJfPBcifj239tschwPRF3qUsvmhmcyLc",
  "decoyKey5": "5C5DzcmhYky6RkAHUEyvRFR9HevwH3w4JgYvoGykNz1WJgWuVioCWzvE1faDBshNbM9tLQr3fKvKzqBRtqjtHXsc",
  "decoyKey6": "4zSoq9gZGfGKc3EN4L65yBCyJY2QkrNfo2RxpvvBxddyk3bTN2TCJpNBT6SCu1NZ6iYkszBFDMPeqRheZ7p9FtFu",
  "decoyKey7": "EtZGqNcpYkZLgXRei5zYrLYrKSGHqA9V1KCUfDK37YfoT4MhpYppFmdE9Jngk2sim8fsAxSLj8GLoD8QHM5irC6",
  "decoyKey8": "3saxdJi8g1MCNaVjWRTarj6kZPLNArzwdk4D5Wk4DNSiJeLucc5xdnyVZifpLLpkby57JDkmUZpSvK52tycchXnd",
  "decoyKey9": "4CUwqXbs7FBerirpai5ZT2kg2mqxUSqK8Gdf42FVHqtrJbpDCwVM9iwQ895gYggoBHj4wy27kKzwQ77ekdXetZv7",
  "decoyKey10": "4i1WoneViVTGKc98PVbikxn2KnPcdao3GW9D4SGALrNTupJvC3oCdXF4hDoA2F4Mdu4S1XqyzfGzpEZuSSRsnGtp",
  "decoyKey11": "42T2K6DTzm7dstskiDCCUaETUX1ETaqB7wBZApSr7CPE79UuJrvDoeZkBq1AUWprTSHrCYmqshCNJXj4SSmzpXMR",
  "decoyKey12": "5TLaH5bmYqzLXX5Jp9CJnp1C6Qaf7PCef8m9rtodpXYJZDpMh4qmpJUxcTR7CnFhs8RKqoKGPaNgiLQoKjQqgSpK",
  "decoyKey13": "2xZyigVThQSRbzbwd6VqVnJFeN5pLE8H8DHYLrcEPpsoz2ueYSTPXEn5gijK9hMYv3UBk395drAZK8Px9JNSE2eH",
  "decoyKey14": "2PSDseYHSMzWF4gSfm4VERMMgAsvCNGd62qcLNXfn7Z21gD5cjYjVHkrxWejXik4bCb1zntLXHLhULKK4sfaHcEx",
  "decoyKey15": "7t9cnk2r63duYVXGpUdSrgZHiy4th8g5fhFTX9NytFv9f7BkduEWSnzswTHR1ujBmS7EpBFir6rHEAGgAmr3o7v",
  "decoyKey16": "35pTkzjkPi9EcWizGxkDwqc7aVXoiTnw6kbhKUYnxXwkMeiMLQd19LC8s6WPpbajdJCPJ4z9anAAXENhYeY7cXiA",
  "decoyKey17": "3sLgvuc8nLDvg2g2FFLUs7FL4kmtmwWqvsDkZkFC44egbZhJNhnJMJa9Xrh9LMhvbQNfzJJMnQZXtMuMw3yQ64KF",
  "decoyKey18": "3cQ81Vi7Mqu6Fy4AfmW3gGthgWGML9Hnrs5qYH6SjXZrNU5ubP51MaEYTGrfHs6NcGjdga9dTAeAHGwuf8g4q2Vu",
  "decoyKey19": "5QTf5Jj2hnLSXFVTpCqY6db3dU98zpCMPjv7mvmdqdWsn4k7LDfog7LxPaKFzBhewHshvSc54Be4MWeezujfKbsS",
  "decoyKey20": "64F5qhXxsQAkcfBeUF4kevdzHKQ6hqrrj2AvGdEYJiQ7b5jxYeTn6uiVGCG9onCugTZjMpCyqfKQD8THqsBemtoY",
  "decoyKey21": "2d9PEH5SNXeQ3jtjATpS1qYgqrUAXLfwuLtejQRuYPqsuFJNqv2CLnfrSYgwYWgS7wKj37GwMdU9WmFEJqdQ12Nt",
  "decoyKey22": "3WAbnmXg9eZYo62XmRMRUjorWug5cbWJnHp5qJo8XABc3iQaWUArcRJNwNdd38rV5E1qVhMGQ8sFt8DwRromtnrC",
  "decoyKey23": "tEXKgnPECRVnMNsWJZTWSmyq3oFG7qGJqQQhXVYxsBtQmMecD6Qz2XN4FsxxPEVryq25rmnTWDGkygur8Jpfw8Z",
  "decoyKey24": "48kJXHkAkhRJttnBhtk4brncU5jvXe9WVbZqT6tTLmTuqKn5JpcfmTTxvKFthHyUE8LSvGhAv5cdAArBWiCYHzop",
  "decoyKey25": "2K9pHdcEDogkpKFrkaZvnWaCbXEwEXNTiLcxDh5HyvpVEZjm2H4AvpGbwtgTK1M2kpKAP4VQ3UzyEWrhS5zoJbHG",
  "decoyKey26": "4aLgS8j2KRUasUifKoXfRTPTvp3QV3xfiQwzDyXZHRojgUxQGPAWSMgTFBj9hPin8SaauiNAAZFPZ2rVyuSzdgBe",
  "decoyKey27": "3vTRiMkWJn1r5PD3jZnCjNMptNAYa9pMzZZbud45f8Yqg5AgMGsXyDdNQjsvnMDHHZ5Gr4yCN8yB792NDHeMaN2E",
  "decoyKey28": "ngspZrALihyBqQgJFNp25LDgEPHEa64ug3kskKYyAFWpEay4ct7TVXzH6VXrjx8gwq9XYJLKD2o9kmcQdd13suF",
  "decoyKey29": "3SmeKxGsfdTzEBqs6q2SXGNdD4ZxEeNi9VRHGLfM1jcdYEhJXd93JnsGrwnBcGCZ9MZn4cwDCvaGiUqW5d3hAQAc",
  "decoyKey30": "4GPwXZ1sgVdzfAEydJAsMDo1JvnqwXwaPNVyUv7uo4dATu2nohRxLZ11NNJRPr1mDXwCYepntbUtUsa7BKsSS5eq",
  "decoyKey31": "2HkbN2uj42N7pfD5B8rKL39Why684tGMi9T3Qj4t6XeZuQJusPvKqu3toDhX9R4GgA5CsPZbYRdFTwzcgMucg47n",
  "decoyKey32": "LkWqXHe2FSwvip1cVQPvwYdhLu6JpZxfei4HXkkHxUvLE4dMSatg998kArJQX3wG6Yds3cpu3Z5uk21mWp4Q2To",
  "decoyKey33": "2AGMx53kSLdEMx1HQ8VqUZjJGj9QP8EFmoMcsmavuQwWNjK46HUdo2hXmxFW7prSXx9QMLqKk9t3sfTcZJWkv3vH",
  "decoyKey34": "59sPsGhDtogmQptXkW9G5Eeuczp6hmj2o23WAXGxLrdAy59JrJnkGBKUjfxi6Ser6RPgqryQwrprB6YzRfW5BHJR",
  "decoyKey35": "5xsEVTAs32wc1G68oBe4GgdsKLM7eycV6UdkB6ZvxNkRvkHp3vdyhQBN2mPUMGJwfDwDX3JPCXAjFoV1ExNsUuSQ",
  "decoyKey36": "2bVUbL9xTyZuEm2Uak1juZB9SZnJeh7uD9xPVTABxMRgzTJAdqY6DpTmqPJp2i5yAgfapc1DUCxmrbyfrdV6cPPW",
  "decoyKey37": "4Ax2jrWiNxYXmJiriZkb8N3Y6p5ZDDvmffQcBt5Tpbb7ZEMQ8mXHe4E68FrsP7LDYbVMaWeYqbE3fADgNfFk39aN",
  "decoyKey38": "3NYVc877PyhaFP8ftwhKWqAs6AHGYZBy7oUgAtf6a2REV5BSXBdzzG3RSsPc5bkru6hiqfiMxFvJ93kD3F87siJK",
  "decoyKey39": "2wzXRHs5cLMB1e85RBpN6kvm4cygPcDXYPpaFcfNB5XeXkNL61tDQYHNBnbFfbwTH9Q5fuBcMkyDbexBq29iQ76M",
  "decoyKey40": "5mVFHBzmzw9WhxUickxWG5yej4VkrS3z1zcDmubjQwgF6tb4TJdqHXdy8s6LQuwhxz42WJSpMgTVv7RyTy9fCmcE",
  "decoyKey41": "5LumYPGABgy7sQ3vZ9R3RyuUxUKhfebUWqsG2F5UiAH9nJS2dkZg7wAHvp9tbYjtviag6HBrfr5wMqVdaF81awmP",
  "decoyKey42": "4LrFMM1mhy9JGVanPM61vf3TQLr7v241UeEAWrrzKdqzahBgbUzTSeezNbKA7xJgDeHBxVEtKDWF8jUnBCYaRhKS",
  "decoyKey43": "YRzmh82PzCAP6hgHHC6ajHr4EpT6GpEaguSCBJjHoeUfuoRCAjyy696MrQsgBTAAdhegeRG2Ud1z5mgNfRm54m3",
  "decoyKey44": "4ecNdvjhxZ1kmFaJioVE3DmsefxF6yiE58nQTGc2nfLww6RxyKXo3ceXPVdkrsyhtFmCSHRYn6NYRDb8VJt6j9kZ",
  "decoyKey45": "EpsRbhhSSbUBVENwMwXPzrcxsJw5RCzGKfztSZvscp5rJmUH7Brgu6tqYxVqZhuapMnjAT5X8JiMYs47RKbwhhE",
  "decoyKey46": "28YUfkKzinptnfXXxt8JVMTbsGscSDtQqx7RLoSxbcwD6AdVJJHqtiAueUsFHoK9jPQrQfsQtCoQMEw5UJPTE85z",
  "decoyKey47": "5kFr47akhfUcX5q2Z7srpixCau4Pep1x5HD8uA6hzWhxjAEwHX8wN5kbK2NzPaibKuUbZXPYfCZGs4BAyoU982gQ",
  "decoyKey48": "oBqW3rbCea7hjN5fiW41H9gr1FVQb3xg9T7iZ5eLv2vz5CnY38mJsz5jn4jm4XH3Reona3rWn1p5BVFme6WdyBy",
  "decoyKey49": "fG7uKvDoZPhMaoyDCojDp8wQ6aqL4ai7y9dxo1Np25Suxb8aioL1EnVRRcHqvDmotfk1jkTSdqBfu1acRpHfjZQ"
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