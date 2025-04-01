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
    "3Vt3ZXFVz1tinkW7QEiKGceE1Mtb6TjP4Cj1Lp3kGYqstghNapSHGSDpeYgeK5SPWEZbp8CWCyq1bZo9g9r7LVnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w8C1TkpYfYFwXgvqU35w6UDTeKWsq8QBKwpt9a8TYCN1rKxJ9YjFcatiNJkdwbm6uVQTdN722S4G1NobndE16kL",
  "key1": "WNmrSNE8AdVb9bbBdRiW1ZmPFCAuDtq62pFodhQLJx1ZqKC3ArCz5A4cMgiK1Nvv1v9vKdYrq5CWYLz3irhGxFk",
  "key2": "3GuYyekiwRu78iWaDzCwiTNF1mY1caK2HNY55kYkXC3b6x1JM2BPEurJCZmhJBH13ikUZi3uR2eUyiaBekQbiWuW",
  "key3": "2hrySDpHhrSPnNAJXiiqtr8ys3yHX14sB6tSnWaatddLx757qpDoTtVDA67d3gixKYddxokweodSJanpbSTFj4Qc",
  "key4": "3bw9gULmBaJsjJwL9XpJqTTBLeutJnbKGCLJ26j6ANUe8XvpoANe21GWEZ61kAkjCYKTBmYcak5mLGnebkUjcCS",
  "key5": "M5CBcHHkhs12ayTbMEzbjUNTmq46MRkptt4PMrReHBprV2acwkKEF1UMRY6w5utpvWkXn9TAuQz6ij2vju2jUmE",
  "key6": "3o49SHAgV8mGYeA4C4KtnvBNPGGLxP2hHQ5M2cYMsVyfKcHkDzAUa6cdPbTqCnLQ4BB4koe9MsycEJigzkPAptWv",
  "key7": "3E1FyJdMA8KKTZoWQWNEaxvMf1bJLimMo1eTACqVgkdmf65avuRjiJQTMc3b82Sws5tPhM9orMeKjnyBXDTbxkQJ",
  "key8": "2EGRD1WZCXRMQT94JXVmewZ7ZgHjVc2jCRSBzbTbbcCDLEpHXMSt1zhUtbVyUBGrRRhrs4TB19nTD2M8GEeMLfC8",
  "key9": "3ymLkAMZbBQq8cfRbowx6T4pJZFoPJgPFEo6oDYZsMbeaY8k1pxsAYSuK9SCatB15PufeFX15DjxT6kk5kLjLwJA",
  "key10": "5CCPHQGsDDTVv3bhcUxmLAqjS6LGWb5wGq65XGVNWty41E3N3EP84kpcKMcm7cG8cqzAKP7BqjU3zwTgLRTgnWVA",
  "key11": "2bexFwyD9Rh6gR7VsdS52LWKUUWbLWsy7Kh9x6eQnbAtvneYKrfT49AMnZF3Zf3fd3VPbMkfdxamg5QVhag4VcGm",
  "key12": "5ZwsATBhYF3fLV8Ws5wyKfPj7XLCPs5yGmKVaN41vZHhhLuwFQ9d6EtNqzsTjyLHYG1qNa5ehdopzYSqqDuxFsh3",
  "key13": "29PPoP5RZmkSGimcHKmfMGydfc5RQUmuUps4VB5dEd2Usm3geijCrjheTDtL61673HgNvGfu3XAMWtVJDmq7ek2i",
  "key14": "5zZnJSKWctwXDRpQY4ojfWHk8yqA8C4E9pq4XufGCo7cM4ShEGEMhZyDZVjKiP34dAgwR2zCh5hnxrFaeCBbg5Lk",
  "key15": "2YcL9Czt8srtNH1iux9VU8JRPUKvNUZP578ZffEUgFw6rrNv3x2J428RLwuU453GaxBUuJjNNaN4yJ27prBzQwHd",
  "key16": "2oNsGmu5CgXQq1W6dKj85KQVkzK1WdYpZpPwm66W7J6Zd3j3aRmm6RfkvyJytgZeWbCXf1wLZ1sCtuq27J8kS3Z4",
  "key17": "4hG7eSDeCzx38vWS2qrLJgjgLxX4PRXKPDbzXPgMHewwuXG3PPyjT5RTNoVbVMd5KyFJGzt5PF3GHvP52YKLrRay",
  "key18": "26SvtWuhnfvg2dntN3XerCvFCGpj4zQ3JCo1SzZ5355jfuiG2NYsoh3pCxU7pT7k4Q9A5xSBSVySSzpxCEvGsKye",
  "key19": "UDkzS5jRevSpVv3AmSkQzU3nzfzmqM6q6LnC4cEFvG9RS9Q75dU5pttre8NbFQWJkn6ny5XjzoxGb2G8QQt9ew2",
  "key20": "4zJm7j9CdrPJjhFrH45Zu2mkiKr6N6eydpDKvfPS6XsaTHj8DUFM6xkqFiNnaUdbtpoTW8XBWBZAmcywAjQxVRFi",
  "key21": "4vs3iSMXqHmdMT5mJYnvdawG8XJdwaFW9LNuDqiXsxgN9kE3aALreBC8hHTTs4BhjZVVjXVHLysj1CqZHWgZLewF",
  "key22": "5hKYBQiie9VdKUxZ13ymf5gnjWCFzkydgA5FJeSZ6fEZWE7p8Kh3fXxj4FcoPaBwuWucYpTBhr6LPaUwZAsmfMjs",
  "key23": "5cwtfnN4WkYDyjS8zjiABDd7FwzkW25yt1SeCRtMUaUGWLP8doiXL7dP2aM7okGeQKdZwdVfo8WCxxo7gaKxSHt",
  "key24": "4Uf82bd35s53Zjdx6w15hDkqCfCTSHK5iRSJSRm5QgMhdCi3WoxNKxhAaWB2jNFv4hAqtGBztoup5bxzL9a72pes",
  "key25": "3KSHh5LQAm2bs4fTGpgL9PQdWCwyxU8LgDqxwfosMZ6TFWMUXWFphzuywu8WutmcJzYQPUCZaLjkaLvU6ddbH2kN",
  "key26": "27QWYDNmeLuyozpy1CbvYPx6JaYC1TRdHWaY1GF9odUxwxBQ6ZuwJh9vzJ1fkRR1mF8C6NxEHXU6yPxeyfiV8ZKp",
  "key27": "5j2riSyhXT4xTmL5n2j6HrQ3YNpiKRYA4WGdzqDAQooBgDpRvF9uygmrCxDfXX34uTTUAt8swYUUzHKRyvqgCTfa",
  "key28": "5Vj3EVHdWJ5uEEvVX2z9KjrdVfNKhySdTcMh4sm9ociVTvKQztbu7ayzAXFVj15ksvG7T6bR9KWtX8cNiYjSPrsm",
  "key29": "41d9WF2Wp8qFWkQweupQWa9itoJT53BnW7J2jeTiMQQMAtfzEgNBF1fLwVPf6RQBiESE1qagiR6BEA4LEn1jo35g",
  "key30": "p3WvRbQVoqS8yzNKbywXLwv2Ac9HhvEkR6sj5dcbsgYcg7hjfk5iEDpXRJ4RFrrh8Y17kyJyWXnSWcTJHpgXvtz",
  "key31": "61StGmpGpBDMrWok9y2hgkkJvckTKBcahgVNa3XpNyGycQ62x1Bn4EdjVioi5XLuP1ZMgoMTjmSzHqSwi8vk9FF6",
  "key32": "38mmFK7h5pvcbQi86nBUU492nnMVTdYPMQxEA9VUhX1o2RVXHev998eZo8oXZB6UUfHKUAQxuEtESEjr4hFtQQmu",
  "key33": "5a3u6J3M6hA6ieEZGVmmLKF1JuWGRQxN163vrrxgBFUjbR27RU9gn9hTW4gK6n2ZcEby6WfF29y5yWh4xnykzhVA",
  "key34": "4ckDp8eBpzEJPSRbKQKEwfRAh86NycLpBT4HGDfV897HrTsusGiFVDG3C2uSzVy3cV2hya9G1HJmHxhwxq4NHugt",
  "key35": "3RX1G45dTP9jB93ApyrG4WYWn7Eogvry9AkM2Fa24xeGEtk6Pw7ebEuZZ2pSHUtnMVvHMLUj82wLhEygbCubsPoX",
  "key36": "m6Z9UfmrBAUoSs2Qztx9b5f4CBXQXCeXYToCA2kaPKcUCB1Niep3dP2gC1NMN27nqXdXLS97DhAV93z2yppMhbo",
  "key37": "4gmxfvrVvdRGnkUFZwM1P42fjytvhsYAjYCyPDSE21tAePd5SHZ4LZMEwojk8bd5nCyLsmuZ8wdjmXYEEoxj1WSL",
  "key38": "2pK1nTtVXwgmVec2gZh9YPycgR8KdZ4LHp13BCLCx9eBJjdjMBHpev7fPitDcfyZBjgMrSvAukbYzbAGiHiPyE6A",
  "key39": "2ya8aBwfzkszz9FB68NAv2XZFbUNiSRWy17D25nQvgL59byw3EtEDogBBsojD634CZr8ByDuKqVijaB6BVfFm9jW",
  "key40": "61FrrxiVoN4kBt8Aq5wX8JdFKzktujGN5dw8CZdhUijYjTy2cGeJtcgSJvQr1Rbgwt5Q2n1argyjKjvNBS1ReJbY",
  "key41": "28rcrDUjeVep14TJrQUArv8J7TGhpyVnpUdk6U1thWcQPNdw1WajsBoEbjCcswpdefpMfMMb46pLxkWnuBhZPkVv"
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
