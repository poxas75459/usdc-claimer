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
    "5o2mM2crL61eXCTf8u6bDzJmJnPTAFRQiZCL6XYJ2uAssu29s5p3yYc1CRhmV5KRgquTdmHmN7gHnpf3WToQfAqK"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4zqU8WFznwMcgrEDdrwVeATfcS5etVo78F2i2tcYwR4WStTvQq7K6W4NcwzWjydec9FUWrqJDH6LE9CbNj9E6ojr",
  "decoyKey1": "o9acVsyHkjCgD2V8Jf7FrrpLXpkwYhQpm8Um9RGBTYKrjoQ6Qu6cHxPrQuBWD79uWgTnR6xaUMk1mFfuDLbYcV5",
  "decoyKey2": "3psPVdXp7DSBUMogoBptM2B5nUhfdfuANWUYSwythw4KVLFHt8fknXmDMWWWgitHnCXg2GdsGBhXNNQ4vzh9ud2y",
  "decoyKey3": "i7Hszk5KtJmr2MngHdpCfSDez93e6EfL5EqK46DsjiLiFepJQFh2D8U7FbYP7bEGmGxpJY7oiMBcTk2Zi6AC4Sk",
  "decoyKey4": "5X119bbWkXhpTjHXAum5i3wttvnkLswnG657HWQNA38ejVkQRD9wmEotamudKipe2GKSM8ipGXDgS1sYngrcSXXy",
  "decoyKey5": "47ubV36yUgmHLHb31fXJPdGUWZmhPoC1Mj3KuH9Z5qapnk4gUKztwGK1HLThNMhq5yTCnnZHBKnHE59oefeSXaR3",
  "decoyKey6": "r5CgbPpzzyX4nGLWuyQd5JMCEMdZBWCmZj93J42pg6S7J3JaYKtAd7iDVsoESsMCEbTKbuYotXPM7s433EzDYuX",
  "decoyKey7": "2oD17pwyp83HhDBLCqGixsSiCFAHYxXkSBTZhMn8keWC7XEkCTmWZgJTFzFSzW7v6fRPjQMYt7DrVpG29g9gMhNb",
  "decoyKey8": "268KVTsRavELbxZNJuSqFmGk7spv6cLGuFKv2eouzDuPpWDFfbV9nrYYWccPRLTPwANtzHrcv9BMTPUBAe79xEkT",
  "decoyKey9": "48a9tDy8VutRWzQMfhZDrWMVQR9sggJU8ZWnJHNJys8bPUNWvX6NnTYpF4JsMdUGd1r1fqSnHCB4Wa7xKegfxcN1",
  "decoyKey10": "66iv23MuSLFsbnEWAWpo5XS5nqhYVRQxKffmyWXfFDtSHRWhpLCThtaMAbGT4eRLm7kk7gNMwupmXv2ZNnJCmYWz",
  "decoyKey11": "oJcdJi4AKFHrWmL1nfcFA6ekDJdnew9BTaspML44TpMhVL35fdZJKMUbt5K2f4cP3VWRJEFcZii4KN2o1F2Ech1",
  "decoyKey12": "d8j3sXz3xgSUKomsXYhux5e1HjKweJVUzFvbQy8NJRFKmtJGNFmw4y7Zbf7VGK4BBeKABg5TL2sGhVFUrmqYWKj",
  "decoyKey13": "55VwCufvLvzUac5fD3CkKe7xibFViFCshS5ZfL5qySwL8N4cSBncoLaaiQHLxNHEgLo5shuESwuGXZ96jKhaESzn",
  "decoyKey14": "4E3cfGm6KKtKGEBWF8gbiecF4nR7uWTq12RVJWA9c4VBxJBuHmvMo1k1VRUREbAtc2gXk3Ws62YqWAMxBLn43fgp",
  "decoyKey15": "3yGT3FMvvQLzBk3F6bhcE7gcZziDza6mU2U9VMfhxFc8uSzNVpVDsjks3BK1irTsg54og5FEaaTKGy3Am7t6toUw",
  "decoyKey16": "2i2eTr63obcVvicjdrMZQE176fCjDrqBSFL3ev7YF4BhxregN8g1kuKfcTfPijwmHBceRaUHuJ9R6U8fuB5CaTni",
  "decoyKey17": "3WmEf3VMAFxADLki72d3X2QtvbfLvDCDi8t7fk5qE32zFvzSXyEsVFHRuuDcKoPYHviD7AKZ5mT7MF8rheHtGi2p",
  "decoyKey18": "3sBfeS7CjDbxoSQs7zQtCuKskyF2fD1dwLzkVQrJcB1k6xJ3dZHkSpiz6FpxWntri5kEzZ6iXmCmnzYmAZ2oMV6N",
  "decoyKey19": "4yAHm6VoCy9GfibhCuFVdUv6gitTj9q92Cn3QzfsUR9zqCkpouzGY32ZkZ9yAEXg6QYft5QoasQM579CUXUcKYxK",
  "decoyKey20": "5GRpf7FBgY68A6xeX6zqwnGDAUGs8camPi5ANPAPqEtqzKuxmhaGzm7HeSxvUHy8cBxZ7pSVVAtEfuuPcj1Uot9A",
  "decoyKey21": "3csaV3iuGXEaj4kLLHoPpwptZuLoJcqabZp5Dz21GEr6A7PhFPPUXCW6t1nRCvmbv8p9BrcB9r8kAV3Wp9CXNPaB",
  "decoyKey22": "4FPJ81BFP6f3ZvAmaJTGVKMcpU3DuscMU9beEcn6ci8cUYyiMPknBSswYL6NA8D1BSVrSPuKTdj4VeZghpqG5Vmo",
  "decoyKey23": "2dbvuVZExWqZuPdtAqKKCo7SbYBXCUQTqpUm8DtnWpAanZX7MvHuejpz2w6UvcrUVTL4hmukWiYVLiYyoSs9BGk9",
  "decoyKey24": "hbjHcEQFcL8VJgCX5nc1W5K1CuqZESnLvT6VVEPaBjEe75JpGFh7vqmGnKCEYEFDCNwJhTQA1rsNRzY4LWGuhCy",
  "decoyKey25": "2y8gykbzZCUswrM7kyA2S2n6NRzxARAtYaXhDSLfB3ajZsvPhomUo3kNHJt5paLzThAoxwsrWznCRKFfthepHgDf",
  "decoyKey26": "cSyxvLGGzZS9tySZqQdQB9s7KucgY3bF3sf7ekHhXncAE1R4WVE5V436RCEcC6PryKdrKU43gnR3HKcmdUiSsvB",
  "decoyKey27": "2D2AaxBD4tRggevcJeVKh1JCBhNHswNgYKkCkjCfyc58vWfBjHDhKEziAa99aK5oqcSqc2sqxBecxgLtQyfXcr8x",
  "decoyKey28": "4GTrFaPi66knqWEWAqhCZuFDQvxv46tumJNZcMq7kvDxLwd4k5rjC7kEAydGkuxPgibY2ivwTVfEuTdye7mfLMcD",
  "decoyKey29": "5tmdaXdjW1skTd5tLsvNSLHuz5dGwGjS57BSCLo4G41pUekSizr5BRDHbPYhYssphmTig6peQ9Sionc97fQrPgTn",
  "decoyKey30": "4C1t7V5WBbynTg73oFNXNKyQReUCKgZCvJswqvdyiSufMZvePQWgtnVdcipALrZKHRABcQKrBRKJHqmfotn8UVxr",
  "decoyKey31": "yvSZJEz8ruTy3zY6zp9VMV3gub8EJQ3uKvYXpYDTXQpJqDMhogMNPNJVfTN4bw1yvwgu3WuokWHdXfQv3ZLUvNv",
  "decoyKey32": "4Wa5MRLde7h5hRfHF9Me4hJKwRbkqNdGQr8SDgajSEd2KLKV8VzpF3QRKsn3nN3YL89j1VpA876FxCmKtfYKCMJS",
  "decoyKey33": "5SXYEvP1axQ8Bp9can5jicNkMdVwa1pLWFxZXvUvjB5ZvVns4YqsJ4kiVU2EvgNnSnwg6MirFPiz6V1EhqmmqKsJ",
  "decoyKey34": "2oJ6WWYPrusZtQDxS7Cdd5tMRUEKUP8hL8x1EjFgzUDtu1EaqFD6Aa55CWNzdzhw8ryn2RxhrBaTwMChMcbm7Hz1",
  "decoyKey35": "WkDyMUwZrdFszPj7XiZKMub7ZU6BAZBNkjRNzdyvw4s1oE43bDmbgBjbRxDfj8oqffe3wFh7abPpzZzMJMZrsmj",
  "decoyKey36": "4iTDvELat2LHnzfM2VULpNfs1GW3AsG8UAAyDheNpgknPUJW6EwePJjj4HDwiTNWFTZkCqmLrMSVzGFrv9WLWGVX",
  "decoyKey37": "3Zr77GaoruhKZdvxidBBjiv8d17MMwrhinoTYd2mcfv4SyZoGYbF8qCEnidmCePbH9S1KLN952QhS8TDT62ycXBn",
  "decoyKey38": "apGcCfKNfrFbue9BurodcHHtB4yE4grmB9dUkQHJqTX8Upejjt19FZSWRnBvnyu1xzKvQY2jMJj9utgxLDpazug",
  "decoyKey39": "5Coz7Db7mJEuNxzz4jYzZsh73AFwgtAk9AHpz21CUK2PMzrzEupqtUx5qjum7QUE6dhHMFogpMcoFJ1PTQCKapfg",
  "decoyKey40": "2a1sKvvTDFuJKxwgTwCZzR4vZ62cJXxuDDSGQeUnMDpWtUv7SoVJfRVLkrHzZZAi3uQay6JUCArfgCuo8v3o5EeT",
  "decoyKey41": "4QEqQsNMm583WdLx1QFRvRGTGgVSCkHFubA9b81eycuUroB3jLiY9K1LJbpzGEjNW5EabZEvjUkMfVo7nSbFnMdP",
  "decoyKey42": "cxmBFkmJPp5uAN9347tubxpCHgeTq9cf3s9UPsk1Ecq3UPLhvJAyjPYZAU2ASRNdu3KyawksVk12KnSsxzsuwXY",
  "decoyKey43": "48ShDSwxSGZZzZ58eKuymZdezD7db8LqQr62yz1HQGK9eGYLzvhUorhSAAyuaeqjxMs3rTbg2pVr4sQKCykV3EBq",
  "decoyKey44": "4NN4QLxs9K1cKG3hzGCjgr84X92sMBgFCVTNA7GAFm82vbLmQb9LSdrzREvavnnXPB2VMa7ap6kFVnLe1ofMPvbX",
  "decoyKey45": "2V5XT9mWrxLAz5uoNpHphomejjghwnMK31cqde5AXesSWDwMd6D9hpmrAa36F1qWGjUnRBj3gK4qpzbzncYkBs2c",
  "decoyKey46": "3GWDifNB4rQ54kukAaTFivFDDjHdLZfftVtUHCK7AvhEbXfb6LokjgN1cCTPrW2gbKcCpgwx4My1wey2F6fM26uD",
  "decoyKey47": "P6FfGsgcEU8mMCAUTnpFPf55USnKDZ3cre3BwfYf3gdwqfdK46jN9er7mrEEnLTwUiZgkkcN4X76qEZLQctbvVK"
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