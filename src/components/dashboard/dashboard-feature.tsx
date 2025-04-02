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
    "3RjLikPNJU2Fyf7dWh93SLFDBFM4ohdVRRbnT8Bbs14AWeizrNYok7LHheSBYMmEFvNauJBpaJPqkeqcyNzvfAvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYvg41fBvtcQwjnv12kTXrMkt4mdZHaM3bgJdB22QBPCWF4URPaeDhxbf12nMjgPWR6AUwq66fuSGAAajJq9z1k",
  "key1": "1vY3iypMrgjtt6XkvnPiDpmhjH3L21CyEt3MmsxFaSHgEgYwC7VCKRLLYvZtzMMTj5fyHGXBaisx7LqZmKCwDDE",
  "key2": "2Yqo757MoiBipnh5EZyDPiWpmDGvdJJNjdwdNp71Y23xeaViuQPr2cZoDFuFFQ3iojy1fchR2YCFdz4zDdWJe5TW",
  "key3": "2rimHQNzhHVWjPfqCxpcf1WYzw48RxJwzweUg8fWCLi8sRwbhVp9QaoZHoULBKjwu77zXNuKaD8nPoGfig2T7uBh",
  "key4": "5vHQBEy7fWy1MroKKDN2AhtN6B3ziv2wn6T6D1dCzrcHNazLKrP4o1TmK1DXwgQJideV2hs23xbehzJEtXteYUN3",
  "key5": "3Y927HsugQWY9TZUnnBkk4LH8t6pTUdR8JzFwxnuHuytXRZ3rCmXUPb1aZ2F6jYNBcQu123pPhrMQuD1vPSZ4X9B",
  "key6": "65DBexymNcCdCV4URBAuipq5TQ8GETzxcR4Y5vvptjtRLNpGyzSwx1KcWxtr86baYQnSNrMd2XjsqguNUmvn8NKr",
  "key7": "2Dhze8bDRcYvrU2UGCUcGui6xDwZD5XEQooUbtchPtCfQ498xMGRSh7K7bPLypY67AckS5hT7HayEULTzTrqxDax",
  "key8": "34j7oaYGW9Ax8AR9An3v5Pv8MuXLvNuxsSjMqQKcH2kKdArruQMfcDHSnuaECBEw34uoJZygYoe4unwr7dPYnGJi",
  "key9": "3yorh8aZMq4gcv9gFEBh9tV8oBoDCWYvr2jWApi3fovp9L2C8ec1nda84QyVwBWWjUs9EVviXqMeKJ5UCVoKAyS7",
  "key10": "5oak1JKwxGSBFyHWqh9mEcMa6K79kCaf7WFjYyZLPQYW2W1cLARersv1mi55QAL1ECUmUV8nqnHLqbP2UhK6eaYY",
  "key11": "4p2WksesCxh8xFysiLFXRrm349a12bM6a3JiqCNgaMsnQCWNmkH5GPaiixBcqat4Dcbr8oTNKByU5EsAMFPErCnc",
  "key12": "2QnB1WMRyx1wvG9ch8DvwsdaFRSm8psBySMkDC1W4gkkPHpKY9dfC5g5Hzi1n2y3z8X8EMecxgEHLVK5vup8GrpA",
  "key13": "eshvqC6nogF8uCdvaxnAybT3knj3bMLPwrRpsYR63jyRxpXjtH48p7dbDGYv9zmKwthKnRf3MZB7CtmvHHWxNEp",
  "key14": "559LseYKeux7W8pHREtckyJBYtsNFEn4M2brJqzAwEWKbEytBP1ABiw9bP6UdJCm2YgnKY19krJhYrCJjGhdzmff",
  "key15": "3VSUhVkVrfCP4mxzagEw8t7tCxiWaoP4Yxt2kx4JAHN7Egt5g6abzwR8De7PuytBjGrb4Wkw4R8ACZ95rSvu6Ndr",
  "key16": "4sAzeGGmTAi5tZQZeeawvtQNeAEBVu6QwwpyNmYGTiue6hq8ShsBM9cbGZSo3YZcUbVfrF3gaJUJbT33Ji5gQ6DZ",
  "key17": "3Wu23HDcTSR2Je9J6SHKKfr5Mbto9H5vWNfbfZK3oSjbu3bNFCPvzFxzTjsWw4u8h2akCYsKWEpvLdvftSTv64zh",
  "key18": "4FaDCEvLQ8eDPZ2C7LpdKUUWwqv67gak35PnVFSeZwLDiKeSL9jWtiH21hhHTUTuPm6RywTwLVV7F8n3g3JvoZdh",
  "key19": "61W7Pmo5NqYQHFCyngx41EQrY4gasu3JwnppRZgr2hqvXHY8M2pDzTfFNAamYjmVSZXJ2Zs9So4415zhzvjNwCxJ",
  "key20": "jJyvZzQya8uEv8bg9dMFfzsK2WRASA8VSwxiVogxzVdKF2ZqPifE3n2jCt6p1rSQSzymNAQLq3tLStYx8vqWhA9",
  "key21": "59r8BryhL4xXSpUVbBobvsWangGpCdo82RGyS1UWWTzfSpheB5m48Uys74eQxdjCAyKiEZXqQuq76u4auAyChGZy",
  "key22": "B7wnBZ8ZjguVNftSEUQMEGV76mkNipMLj7Lb7UeDCPHsnhCU9hh1rzTQWDr2ySAUdLWcnoGSXLAGSzXptEuTY2q",
  "key23": "397HQsc7wSPkXdZichGkumMykWw1krZH3zncDz3pGr79KrwwaUemNvF3jAwiDJG47mffjywQGSomTUMw8LQo98vL",
  "key24": "3R8FprrGGGeQ7FUzuPZeYw8sgZ2Sg4jD3t14z3V5qgNhTk2KicHqR3cxgA8k4LEQ3eWdSd1AE56taJYbR6JqRYUc",
  "key25": "2Q7WNeUTZTHYqTF6sQYwUgDxZVngwoVKaWNwWTGjRKuHi6qiyCkYaBzYfYsw9V7kYiswBiBuAboMV1v7RNpfsVBf",
  "key26": "5R8Aq8qB7SEBViZ8Pz66rkyVypdiUtxkHSss3ESFaveaoeHexfzpPM4BZa3ZjXr9E43gJ5AndmMfBSeo1UDzd46q",
  "key27": "51kr2GLQV3TkGne6SwfeScgcBUWNMuoNKJvDaXkFoLSA7u7T6h5S9jfzHMPJn9842t8TzFKpfhWUagMJM5PsxEUp",
  "key28": "2jkCp4QBdopDSoNSZPMHLzqjtp5o2qmn27zarqxsc6KuuhhSG2ZY7PpjSzJEc4xK2Qsm9rC1j5EDdQc2RkYXUN1T",
  "key29": "3dR77AMMSgbFzhLrqSTMne5XfxRY7k6ePojpbbd1N91yQfdbRKXbT7gAjrRvSue3UWuLwZUXVf7xHAV4DE69XcvZ",
  "key30": "3REPYCshDnNRPwRuScWvhop5fLzxakK8sHqbnra6hLgtFTVzCPX9vSrZPf9DuiEc8eX7E3fcscoGDfUAQXjUTo4X",
  "key31": "5CbR89JtBtfhQiLa5XUNkf3LuzLCNPuusXi79BtLJtnKsGaz2vWZg45j6YSfZcBRdpMqAFBe21udVAUQ1D8ayerW",
  "key32": "5aP9vGLBdHbDpEpdj7DPfQ2bFACKNPS5CzkGnA8g2iQezqeBMjZSnVPEBpgEAHgbJajbDEeep7ezbvFbYtonjutY",
  "key33": "2cZuEqFrfNYaGU32KNbTi5ytj3iiciV524xTRw8Uq9HRAE9CdznY1fKT59aFzHkUFYVTcRSJ8M5FnNsLKuAkpwB4",
  "key34": "5uz3TJHgWMFg9dX3X1CRwrNdA2jkKoqNhkjdb9ktqCw2G2jSH9GdGB1AMb7ef4JywM2zh9DZE2TnSiv582fqG7Pe",
  "key35": "weDEMSUftqH8MPRi7PPA9h6pAZufi3C6mD17CxTeFytH2JQnEf6cj1q68zUf1tQr65MPTpJhdtS92GYRkdaiois",
  "key36": "4RBYYXMDuneGfLuG6sgfCj5zwvKmUztHrHyZCXreQjveo3kfasYUPusif55yyhgs1ewHxQ7ppsPASFx3pLm1ygmC",
  "key37": "57FAoFFwKPybmgsEp4GBnKiZfxHXpi37K7vzdhrQX7gtrUhTUvBehZFcHLihhs77JteMaRbq7f5mTiNJjQiPdc7S",
  "key38": "w6FZHfT9TMcrFuo2ftuFYjrWtetXhw8NmJo66D8Lxcr6TM1WGpAg8eRbxyrVn2UxEP7wLH46qgWhk7FLEn4nnPd",
  "key39": "kcSGvGMFSrTzvUheqjt3kUXE2sAx5LV37a6c3N7ivNy4aewesHQ9ojuLBUW9qAUaWtmvfka8SqSZC21X6VpEHbb",
  "key40": "3Bg2pn3QUyfdDbcW9snKegyJyms4LzcttyjNqGNaztDaTBqyYidwgtkeHWSZG6XksaHxYgS4Gk5ShEznc7yTJdm9",
  "key41": "3zhGf3WastYn6x2AeNrAdnJTxMp2L1VNW2CMHu2jtbxgZB5stzo5nEUYmutEbDBNrwSt3NUxBvhmwDskA9DRRCVF",
  "key42": "2ZwiNRePvSmPRpGm4p9Tte1iMMV3rUZ2p7hg8YukpqjLdmLKhdJ34t7yds8GzDrfgkYA3L2YuNnbgNiV9yGAqFKz"
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
