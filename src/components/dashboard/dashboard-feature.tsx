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
    "5jQrx1AWMWEQmphopVXehUyCQVe8xcWwLdcuVoQdrZm2orhmKZDMSXPks7gQK2ZHrdpMwjkd4F6BshaXseTacpYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JSCe1dN7egAy2WFx7PeRb4eMw43dWhgJG1G4Cy3coMkscEHhS7aVFo7neAmaj3A2tcVhvTG3oC2ZuESEKm95RPc",
  "key1": "5CUsnLbPA9BsTzixDfd1R9vPknMkc2BtRvZog29iYu9iv6bkdXLwCaTihi4G4YER2iytsWtJTuuRpNsTxTNExwGK",
  "key2": "UtWL9M6RE8pHMVN4bRgpbR2FivSTCQL8hyTYVMb2zbqq88uBpNpPVMzLgmuQ7UxXzkfNd9NpGZn94vsVptd91iD",
  "key3": "MyppZ33sqoFUYXPqoaVdWeYAPV2hswcXjB4oHPN1BWvDsFnfeMm8yDWKJU4aEvP8cLcqii1EAMvSEeQV9gTC9yF",
  "key4": "9fgp61VrdG7xZZuANLY2jKGMwSFfSoxXrsEM3wBueqGeAoDEF7s7kjR845uwwNCo7kUpyviqCLAuUmc1qoqnJX9",
  "key5": "c4Lz5txSpN9zmYZsQJAHQ5a34HMUuSC7ZwaNrT27BSYBTSTw2wZcSde1kuWkqYXmrdY9pPbiHt8pKvfrLHzKhoV",
  "key6": "4jZ5hgNHZhbQoeakrC9dX1ciq38wY7ERKEdWxdKyGCfPVoRus2UakRpgfXbQ3z2o9HdB8Tb3o41Nc3TY4KmHu8D6",
  "key7": "25vLzCdBGX2o7NSjmJUYzuepyyn6FowrKZaEkQDTYq1t2dV4e71usX8Rc5jX9e7JsxTsMkRFuCyk2Ts5LymnzMY8",
  "key8": "3kYEB7k1UouSBWpvEw6eNwBWrBiNYZi4Kcqz8MrqBW3vPQ4kpFDA4Ao39DhoRgPAgDaK4FYh4PAFruExup35L9eA",
  "key9": "5z7KBM1chbLh9hTzaXVVM71rMyJU4enhZMTrwXvYfWt2TkFrPYCFfC42NotdThixnVxwf7WcTMEXgb3ZJRZMXFGF",
  "key10": "2bBLGsgYve15KPuEpr7hZpVHQ26vJmE1jMCWLQW2VJB8uQY8jCsrpjEbCZrbhBxMCh2RM2acKJExfLYmYndxUDr2",
  "key11": "3QiVEQky7Kwg52Q6Xw7aTePxgKvTvpknRe34es5F8gU7mDb8Yh8nf3STCJ7dZyjFYmZpuCH8k1XcZox7B7M1NJvd",
  "key12": "5nshZ1tgSL9GCDpKgG4o4kh2R7HGfr7GwtKm6rUZxRdmefqZ9XaT2nwcyPW1PWwpuRQjxLtPpAFJim4z9swQoaEy",
  "key13": "s2XzELmTyX4FUnyjLnfePXsY7f6NagSC62WMGTQHoydiiUFS6MDSZVVdyFwY699gka9k7zi4eQ2QkKjyJRdDtfb",
  "key14": "tb1TMUDGMVUxLsNVSHCkWN32YhB69hZRgx6dKRm3MBejPEBCkLArmGV39xgVS3kHaqxfUu15RDZ1Lko9zK2g3qZ",
  "key15": "5sNBN9AEudGHMV8uuWSAKG2zoyWC1W97edxBJCJa1JeUh7TqWPo1fsjeCWhvCnHHYR3xizwgGBdURi92mosjzENN",
  "key16": "59rbwcYK6uDCHKWnXTArnAGL7aekGpwUqUr5J64GfgR2FbeXjMEiNyAUqzTmTrSJdoskkvksUZhZsEXSHqSkjaz",
  "key17": "2Rr87noHomA5W7dhxaoR372AmKvjT7RFGyi5LkCtsALgSsP6vVcBSGwv5g47CjMoK4vfX6p2KGK5fsvagwRp1maL",
  "key18": "5Jj45xg5DHdBs6aQbm7BhjMumrbKseVqJUU3NyNsQTjjqiKgnW7htYtnf3rvjNWupse3nE7m3t8oheoxU4E1X3Xr",
  "key19": "3ih6YtP3GwGgLB4dhPeUoCVkRCS6iqsuEhnpzpA3CTwwUZ6zKBTKsqYmCyDdrf8o2QXeRygcCGJSfiQR75qB1CFF",
  "key20": "3VkZiw9oW9ESu19ZgBv5Hq2h7YFnZiRnsrjzNCSaWRHTmhus45sCeKmdDwNgBPw3dniLaHmjwYAZCpt8bEXSaKmJ",
  "key21": "2Tz6M6MFmLzrpZ1QXWzUPFuzUzkxoEJg9gsM2f1A92iXCJBBQqiFBU3QUyBefLWkh55YrSVbErgzzHGay6WPFZax",
  "key22": "3fxWoKeFC1o4pgriuL9eka3XiQdVwD5Mq5Ws79eKHRJTsadMDfhFzsYWPmSw5FRXF6KQn1hbcQ5ZyAqp21AZGkh8",
  "key23": "snZ2WCbXmh6sF1fxtgVGCd43jSHqDUyGwcDG2CkShvfSNwbAk8Z7CDE2LBZoYtsUmBCrfDvKfr9p1YUiqMxeGhH",
  "key24": "5owzZLQHnowHx2ZybycQriFc3gaGpPVv9foQSf5aen2z9jECYmJdFjBY3NnzWo9PE5d8XDfFkCiq1Wh5TJ5A1Q7X",
  "key25": "5QkYHJNW2NstmvNxG5kE4LAygiJ4RLuzbMrEZpL5zasDBsdeEqh1xeYwSW5h92nmVGC2Ei7nXsF2ccQbCfj1YPZu",
  "key26": "3Pp84HNeqBWJ2qoerw4ARWbzEa69w7YisDg2Gvd9zUxKRnUL1GL5iX8UajxoZ9PQi4yyF9zPEmsSR4ReKMpnY8ir",
  "key27": "oD1A1aF3mKddD3QbtnikqoZDWv9BCg2ErXmz9kGC1QTaLahs7NRrde2EEKhJKEefdeiVBygv3P7XC1iiFp4Tdjy",
  "key28": "3jGAhRbQd92Tt37MxZ33x656qrCroxfeBcWc2K1HKfbaQrmcE9rEgGXd8hBUknb1WrzrtjQjGGjRmMrv8frbR5YJ",
  "key29": "5FJv3HivwDiqt6YxyVnMU8oBHgYpY8UNrU5W8EuogTbvQPjwgpSwSFmbAV43QNRn46sUmjeJCmBhBhTjEgNXMLkm",
  "key30": "4Z5msPYXHRwuwQkrbQmHjtjz5pKjaowHPVcHVpC5wq5puUyVnLkQSeV45HHzNtVcZMfLko7wrMiGUwS1nEn1Gmdx",
  "key31": "2m946mpPP1hGNRwVA2QKVwgcUTuqWfvtTC6RrksJRMJF5ViLD5GDaSVpZgxTtRM1Hng9qrkywTddaTA2HYahiQYo",
  "key32": "39vybG2AeCd5XFkKQ2NN3ARYvXJVDC2y566c6mbj1wUELaD4LWxwQ5CrtKMHT8dEDqyYHYcDaYnwuurA28E4dj6e",
  "key33": "38xvT5BNQNHd3KyiS2JtTKorTEwUJj7svUdsn15MhjpnqNuZevfeGF18eMGLjhsUXXN91yaFizeccfa21Er7q7zP",
  "key34": "3Sot7eoizP1FTd8TQzHMMBkaeHdkmsAs4rkWc1iqPSHbvmusSFwtP3D6CtyxYS21TqAeR2ChKeGRmAzSvhxrXF4t",
  "key35": "63D6emDPe6Z4a2B7gxCFfHuVs1ZKQp3tmCHaKnWoEK67kgZs7TzXA6UoHkhniYW3Li2c382LwnvCcFPfHQabk2Rk",
  "key36": "s7VDQfMbEv71ubCXZFG9kFw8agW4vdbfCUJHqbFQkY2TA4vqEJ94uvbAxMnCr3V7f2c2ts63Cxk1VUNdkavmS9z",
  "key37": "NV6RzbJUjEhdKWt8cXC6NxJBxQgr14LNyDmRd78bRKEKTwp2G4RSnCZz3o89c3pZRTJ1WT8QasH2iAADtDwSuBY",
  "key38": "KBFp3mUKEAmYxSpF5DyVuEZLBGyg5TqP6UtTGC2R3vVqjDnpdZ5E7kKTtJcWMZ2LLRYKw11jBe76XM2rsr5A29p",
  "key39": "3nC2y1bbaUconqWMK5Zr6iekWKMkpQR6n8BT2knfXp9AH4usMR6pB47NCjttjieh8HdwNMW3iDfPK4xeE4a6Gwoz",
  "key40": "579yAM2UmZy3GQffmza8You4m2sFfSREXZra99mhQtpf4t7tBmD5EXT32A1zNy1weX6xnH5LaLmCVSmmRt1iAyK9",
  "key41": "5ixYqd6hu1rvaTuW8SmCwKugc8RakMt3GX9c4ofVGfP7bvDU18tRkwsar3niwMcoWQk9PwgkbvPWFGJdhfNtDfct",
  "key42": "4WVEqS5W744RkVZ7V48jfm85k4DeNaUhKgobcvwXv8gZc66QpXgeTgb27TaE18bkKyQexnYT3HrAKTH5xHkA7vzb",
  "key43": "2UrQunuqMmudNzxxsQkriTtSW7JENjn83ijP44V7nYp2VpkUttNw8M2u8mRz4CZkcwUCs7w2Kny1sRucaxje6j8t",
  "key44": "44MXxeziKBTyase2eixc6f8G9TpEz3ZUTLQb4xNh9sQZ93tB9joLo1rd3Z8wSVo1BV2yikDa5raktezqf2mrtiBf",
  "key45": "57ZvxHN3zE5WNaScvBWnwuvsVfLGwEsS8XgyDonhs4DKJT6uv4fxmvLYsyX52mTrv7fjvxuZubeNc3mZUweooWUU",
  "key46": "2r1nAMGGjFwd6qwFYUbgVyhKRnAk2iFkpEukPVRrBrmc8ZYkeTdqFpngts9EL1qpQ83dxSsXycTEELCVK4LHomxn",
  "key47": "3JP9aMGCCUirY7m3eyqasHJPWcicPXdVEvuE5NaT3xfSXPdmBxSepr6a58CdTLLm7JQSUupxijypXJS7dvtTqr4F",
  "key48": "4g9LNn5VBnbVNLmvZPvHgeipccsSBBpkx3X1Z5atSbFbG5MB9rTuUTcVqrh8NtkMyin41tkmZdSruLAm8cKRbwhV"
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
