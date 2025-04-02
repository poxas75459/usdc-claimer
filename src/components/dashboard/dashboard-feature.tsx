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
    "26PHEehsTvP3hv3MJCghrNm7aUvSmVac2kAxqnHoVNEAvdaP8BX4DiHc2stAWMot9DE1GAdLWgsqgowBhPo9GBDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q2eahf2z4YbHm73DCRByiTRFmhzpQm97JKffzvUKvVWZoB5xGdUNj1LkN8wXhh2dSx6cgDZ33jmpmyTgZxit3tJ",
  "key1": "2BUFfcfhJG6Pjuz6wZynYgG8G5TExPB2chmmiJHNLGfyMAKtrt784RqGDh1KzzyTdEpk92VPcTSsAoP4mNsVES3C",
  "key2": "37dNv3ENh5PYYwPznR8ydoWgeZVrQaAQSFgEkUsX55gnF2M7LxgmQCynBLTg6kFLbbTL1XKLt4PrygbxGxWJ735s",
  "key3": "4irpiy9tSaAwcAStE2tho9UuDor3HQYccj5iZSu24DF2h57hZ51EbWrBFyHwXa93T7DHYnEu7DuiD3U1gkNpSgQr",
  "key4": "4zSJ2wCybEmSvCKF58ZramHJNNeCAuTKswz3Kt5op6c9RQYrqSd4JopSQE2b4pmoTcGx7CLtsSveGHarKyhFx1mv",
  "key5": "3gmiE3r5ddciL6XRJ5H2jANqkKJrgeSaFHBVC7LWKZzZkVYRsNyKm9ESkQkUbBKXQY83ZpBB5M6ckX3LWEh7LpM5",
  "key6": "5FeNdw8QBLQjgKQdfCRP1Yfk5HuvPRbUYutd7pwsPbNW6nUY8rpbSWwUzwxDvUoAgYKjNa8KhcG8Czdf7bDomVEy",
  "key7": "3bSXr4V2vdQ9r9kVKcAS9HC7PmkwHRtCSc5pmEBrxvmFCMac8Ged944FvAN6Qh51cKbpma1J1M7UggLzqUjNsFqN",
  "key8": "5Wdtex4xMbVtMrtkLFzPN4iFVrhgdgF9vSBNsrg4GqjCUr8t3CeCNzDon98aFzk2aX1XyLeFuFrEmn8mjhFHGxML",
  "key9": "4RKaVVK9ACcuUeLCr8USXxdiyDCqgrULC7yitsyRsZez7zCCYAViCzCJmJG4HByBgyiGpMqSzkDRUqZPs3KSaMQL",
  "key10": "3Mgcb7gvsAF3zJnT4GBHTn4NomHMgPWwYS4wx85op3wXV4hZDwDSRspnZVXa2CaNeciVe3jyb3wb9hXTnGNPuZaF",
  "key11": "65brU3fdgBZ92MEG89ArM4ZZAVosz7SGDEQW8KvVaDs7VV5suJ48WbJY982rdM8txcgDGywiKpBC3m3LvWFb2VtY",
  "key12": "5PZwvFjC5FFVBnxtHvWcndunCVpLUd4sLvkhvGy511sjWTF1BZGRWv9iCo3F9Y3Fxo1jxtGhb2vnJtiPxovwuoUu",
  "key13": "2dsUPgpyLFdtfDvCYwhrmRLJuDjQV9pBprVfuzzFKqmTXrzyAdwhaeEN5WyeRRSLB28LEWAPig9X65scJJv18fmu",
  "key14": "4t6zVvQ9CUd3oRZhbqYeVdR3KqXK3nFd31NDS5zFTje1U9Ap6saYqfHDsFNZxhBymNLhPuDsjeKKKRHs1B3ftUe1",
  "key15": "vezNrGvLgThuPw8FeV5edgRpT1677tb8bqVM7Pxu7udiC1x3Z9F2ftUwWV16arwFga8CtXcbcRgdrHYmmxLEvxd",
  "key16": "G3Hfqx1Gad5M1jUXRKByg6WxGD7P7cXgaqYPEmzzJY9UAPDjrEbJpywgnyjiWefrKfR6CnQYzpSkPhWr8CvLJjL",
  "key17": "4pyVNQHwvxKyXYuiWqfMPko7nGvnyDjY2f2ePZZNPyKGWCddeDuy4FvH1FYf5fa44tbKA4jRMEXGAGepx71ow4ua",
  "key18": "4UXUVAQrHumsCXEoRHTe56t4VRwHbVBWKXqVk552f1jyeF586U6m8QhwpcAMvszgG2DXFx5BruFTCsVcb9BndsVS",
  "key19": "2W9cwQcp8EMStgdAn2y2LirbiKpi2yAKe27vErzVfR1puWCtK5kUHaKq6qhTnRw4RdpCoczJj4t5qH4Ms3a81Zj9",
  "key20": "2U5PR4szQ1gGJQFSu9VLQCtckqbahZp2KM3j8UgsaPMfnqfDefAB5dS5nWUD56TVD8uYHjk8Z7pDxgXHL9cRHASo",
  "key21": "UN8fWfkG59EZyjP6qRph1zN8bUiJSDuoCQ6rAnEaWdC1xD6A9odkSz12q3CwpcMVB7L3L1GnLJ52hhpXRWdP2uo",
  "key22": "45HeMGxGVQryBpFM2eCMcSFVjzaTLALZt9hFdTkg2HGzFa3ZwPCRegotRjhnh7H2XyiNcjJncAjD1ozNTsf6bMjy",
  "key23": "4SKq7zYNcP9GyZNf3QywYkUud4Uy12hCvad2tXbGAedNR82C61TxhL2PANYpz1Yc2Z6usNenbGiJsTn2VbHY4HFc",
  "key24": "2sF3W44UHg76EPug8PEPxX7JFhBehvwx7UUCPH6TCbiws9jYyF4ooepwgaMhzXXVnybyEiePQiumoFz8JWjPvErH",
  "key25": "5vZCrriRKHdvyCMYHm4Cnc9ySiKpsavxDx9QFYhGHPHosmF21bCwQvujAB5X6vyzJotz8EcWJrjC2YwYkjNJPn64",
  "key26": "h75ZSBEcoxUL9agqxF1PEZZqjzYoEfzHvf3CRQfNkVg7FZtCzqAXxan5uwU44nHRv7ZbBANPyQkRawjYKnNLd45",
  "key27": "4i4uYaZxx3qKmEk6oY9dD6F1ARvtC2w2jyxxFh9RjNwejH9mBSbGJ13uy9zifmc1ybpN3RDmHe2ZtHN4eRZDSidZ",
  "key28": "Wb3fyBP8R4cBu5M8Rmp1xtr6Q5ptNTuGSso5QZHoEpH2ZRAGQQrUWniaqS13kP2XhnKwSBTrjyc37uSa6YxUBe5",
  "key29": "rTg9FgrBFxXzDMmzXdoQp3hdAepPckbtaGT7LwrybwryvYwzHYKFxR32KW1SWLJTA5yDnJCf8Vazp7FPM3X1gAH",
  "key30": "E41TJEXRzgAUUHh4Cx7y2W32vzVjYYFmamYDWQph4rtP2ZbPqXAXDPFKPWSBECwSWTX7pBA2sb6Rv5VooAMpXdH",
  "key31": "3p6KoEicKBx5TBoFSF7QsSpfdjjrQDH7vD9ojqi3uR9EXKXs5So6X4Q8sm3fXgpVsgNkifVNujgXWJvTdHxqicuV",
  "key32": "HqHxHWWzLJXiQQdQtbCTN1nzbdte1EtYtCRj71VbPRGpLeKTGNndLT9ZwAqxGiQ6Y2FpGFsU4Jt2JW23AxRgeGw",
  "key33": "L6TS1kBqMNiKnJkTSSTd58ZzL86uaVt98Hib4EaYUZFnXAwwUbLViHjf7CKPgGzDsoknKF6kvFdGEBde1V7MiTx",
  "key34": "C1XWbWySrpWcnMYv1xeiys27EtDpiorBGBrbHbKFRi5WMqBRPsysPMu2GfjNqnY85t4ih9n7Lwgshe7CNj8kmUk",
  "key35": "3Z7SP7m8DAojN1tyrwrTJZo6UbrHVmRNrcn2pUUEKn8YTkMcoWdgYy37EQcXVkSJEiduBfoDyT3sAr98nASQELnR",
  "key36": "5e9PHWqkt1JpmKWpyBcLVtDvnSwK1apNLPivrD5VVwQgkaDkyLamUF68mDH7FekTvq6CVubvL62hYWhcoyk2GdVB",
  "key37": "5NfXT1TXTYjSgsW57SA9DLduMssZfc6e7sdzvHW2kXEVhGnTaeKjX1PJiM9ZNYmDgsNhfnaucYhWyWvKx3G8GiZW",
  "key38": "BdLoJ3dQx6X35EcXzpPxnTbWTJfvVhetH4bf781ymwgCFfyvoG6Yre63xxzEv4CpTTt2pyn8QUsoZnyuZjFoooW",
  "key39": "R6GDfTsrJgL3AQiBhLFfuQMmHQuTUung6rfrkPSAP5LpFbXfA8Wj4NdYrva5iLr29wBk94uoKmrLff7S9dLigeM",
  "key40": "4oz4somMfM6sW7KXtptbyEMxUKebaJH2LXg5g2GCihQ8yL45qNe2rebKRGEaVmL89FGY7pZJeBFHsBo24F2kbp1q",
  "key41": "2aeeaw4iwBXCtPvmms1kxv5NBvSG9PEyga2o4n2sYA4djegZfyfL1iMEFC4J1CqmX4wtAYKB6KvJtbB5WxbtQPjA",
  "key42": "2mZsi31V2bzkZSuwkhHwL78nddhvm7KVeMTw1ekxsjgcFcRjUjGW7HFvv82pcYaqNaCqMxMrwcFmbt77d3hKdhNQ",
  "key43": "2ESdsyUqnupqmtdH88moY9Ce6rpNwptRckiZetGYCwrXWn2rnaVVgV4AromTNQQAazsTnoWoxC2NUTL59SpnEhQr",
  "key44": "5H4c2Kd5oakMXf4fYdjUJkUGHcK7pwHv845wr1MGNgLFE3EKYKMez5RnSFrtS48sxMZpR5rTdG49KRS8XGFTwpPv",
  "key45": "4xdVtd1BzfUEjsYzESNX6Hs5wuyFmPKAit49MwgAjK6SsCemJ8q69BtPF75o9nZsPRfXpaBXBaEMLKwokTmZSVDK",
  "key46": "3rPad6Q6sWLGmBuEzzt4vDbj63RDhvY3Yzro5bQ5mq3aibs1G2MBU2JNa11N9MS4W1LV7NaJqcHabGLMC7wgdUwv",
  "key47": "3GcsnarjqkmSRA8GBzFvGV6MJBktp5s2zuraZUCnsZT4jm8sSqf62hqR2qVbGKoZ98Lu5BhZe5pEuJQ3RMHq7JbD",
  "key48": "oZfw3tCQeEd2nBurg2riu1fwEFr1AB44ycnjNo8yrNAxJ3oK3X2kAXvVgCn3HuiG6mNaWTwbN1JuoxgnAhaUiWM",
  "key49": "4c8b8kdhpbNKmcXQJVNh592LpC8vTN7PBV3RnQ3BhWgZx8UqMtf53JRZVtaeb7JRvH82iDTw2e3pri4jBo6zex4K"
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
