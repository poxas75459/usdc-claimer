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
    "bWFgpt36QAJJPpHHKJ4zUTAHzvYhz2TvswH5Bt7Rw4bfTAWqTYRTcLM1dSnjzkDukwfpnupYLXLCc3qAVQkfgNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59MYBdkSrjMxTBL2iZtQTYda7VovHntCRKEkSVHfaviwGCEPSVjchmXovzHa6p9vTkZZgSShCV5wwJWPG8V1cqW7",
  "key1": "5dT4zaosibEUMP3Tg9N4ocXicfTogahKmXFiuwB8PsMkQ7p2mRrAJaMqgNkQmeB1XsiYnC5C5HaYqHUKJHNNqzUQ",
  "key2": "3SCutvjfTbsUiMQJhL1mgPeDFCaq3VzNgC9TsjBFe37te6yQexpEtZ2b4ep1Zq5fXMftr1w16FSA8d56wyocfZus",
  "key3": "3JcwXUxL6SKp77hmQKUw6PcHhmLSapLdK8Hpiqgyhwaiud79N8qA4PmxS2zUeZahEHbZPaNoQtBeeSCintfw8A1d",
  "key4": "xKozb3rqL7RsobEdKtRsme1vmR6wkZjFJL18JA2tkgh2kBHWdsycwgmFoQ53CsaeufEDyKbRGguSxET2DKPfVji",
  "key5": "5FaHH59HpYgkX9yvDvPhK5suCtSJwLeMdrP4LTB8sj4WRp68mEoDPgg6uEHhPWubKTdA8YfjmjGjrxAGi8i9BG3w",
  "key6": "5iyLp2NRCQLnhBCafBvTTg8xcywoA4gmx2Waq9pCTm8YpvTUsxnQ6PeBptqYtVFFdFdbnuZdyyeMrxupfjT4XvJf",
  "key7": "5ahvnR4XaKiZPEDWGwiYVQmqQe7TdnzkSj6BBkFmqcoj34zMDzvSdfycrTiSTAy4gBbrp4biTDu9eVC5UCstAXG2",
  "key8": "3Hk4HoQudf7Sv4its75hrPpEDAYDpTkPDeU8xkHjz56CqTvmjx4YhhVo2hSPXzSwmsvTECJNdDFKmw7pwhUBVghg",
  "key9": "2FNASJ1jr49RA2aNgCrn6B7Qg4BjXgbxSrGUXUUgkZMuNEnhVRS5K6LzmY9Wq7TRGKdNJcEqhNaxpKXYd1DH7M9k",
  "key10": "3nc4c5zXs91g7pmVpZTX9sjUURNeHPyQyJbzjivL8E6hX29aRmvg1p2wC9RdfJzFkv97rPgnJ2zQvNGRuakp4nbD",
  "key11": "2UQjKPBjBixseiq5WzaEaYNpyt5EGQZCV5XtX2B5FhdhfGcgrGKG7X4RWDjsQxq7GSyYNQfFHncuzwuTkJqtiA1e",
  "key12": "e9ZFJYXg3a2j6yYCmHZyc18RCumhRJXtEVAHUUNFaGvNWJXqzuKVbp8F5XaUtezKQHj2GAG1sSxMisjPEqctm94",
  "key13": "5edFvz84DD6sCm5UP2wMaEs6G13uHaf12PgCPviuMH7t8Z9zG8S8qxrU37DoW5kBRvEDgo1967NVjNgk53UPYfmF",
  "key14": "4HZ4LzsfJt3qfAAVKLxwTWSUiXr4Q5vyZymUhnAyg7TnQzpXjggm5jhrQuL1ff7m4uhd1SfozE1fPpTPKmwQE9Jt",
  "key15": "h8RTmzq4L7WpofZwWreMima4EYe38pXtxe6Arcy1fuzwrxLZ36kHusYZaJuxV8tdAKYHsfe4bYTLor5EEPWEnYB",
  "key16": "2ETUcB8j5vomb6fcqjuNLZZM2nh3FFVSwBs8vp8jcaUspJbA2TeELUJz2ZHQ2RWUiratL3fkfbZ59Mcmzky3UMBd",
  "key17": "5WqaZMKjrsmrpRc4WJJLuLPNQ6P8bszzwqhr5RDHCLJPuR7JJDkG3DiaUy2eR6VNQPr9gUYHZ2MrVF5esjm3FXhA",
  "key18": "4BmqrmBkmwDgaw8nNyk6KSAxAPU9rTGFVbYmBLDLoiVDUkhLBdLpk8AbccExUooTrJhMKd2YNZBJk3NVH8qRtPhi",
  "key19": "RvqA6dnd5URHaGxYmz4egLL7Hs7dV5gdCH41L4NEHnzA2nVs2m5rqqQqobmdLmNVto7gnjX499SADZdPfrAqFHt",
  "key20": "5WurG1YKiPuqnRoputrQ5gTNQdDuYg3KfrsEoi4FTTy7Aie9QGhkQQSYFU8zaRPAYAQnHAwQXMHKXxaLTLt4c9zg",
  "key21": "2pwQHiBKwtJrET3t135G9GCUb9MCcRZfkTxduUaozJ3i4ZuxGBNMbE2gDmou9zzzcny6XKuV8Va5BRvDwabXQdjg",
  "key22": "2rn25a4duzoMzbQVGWP9P5VMCBpcgVgfSkjV9M9ThRj12TQjj5tmhDoCtFrLJ2Wr6SzcFpKrXMEHa3VzeVaSDeJS",
  "key23": "ppouW6wXfERXm9HYY6pEZB78ah2TpYn1QtNMrd5ZLY9YyLhhLgvTF5WFXc3u6iPxFTk6jeT5fTfVarD6ftsHp63",
  "key24": "5WZ5be7iyxN9qPGa7FuFLuA52EgWGEEc7Xj7VrRJ7wDjEB32e9AJktv9KzjG1TwbfgWtnv6ESUsJsH3K1biV6unt",
  "key25": "4WXjZcKvBtXebFoCRTo3tQ5BqL8Am8UbESkqjt35SBd7oEs96TPVK62gWBVpDfdwgEUexbvqNXA9xJus97t2Tqv1",
  "key26": "62Lev4pnojxtkpPqkE4WPW6QDCjrGc3cF6cLBnCtRHkXTRGVCTfhf7zy4XkudrZcd8qG4b9SRvmW5ovZWVGDuGWn",
  "key27": "2jGaKywMfLC9Fg4v6VQwDvW5xiB7M4WcYj9bg9RUDoCoJUN3RDMY5rudLwKVwhyHZuqkkzSoQLas8wg82deSBrQd",
  "key28": "4cnmeU9j8QgN3fQfGWDuRmzkioosSmodprqKoZqgbLEYsDCWowsjy1WVxvosGaQmCKM2YVLGQGQe9rosMcujas1H",
  "key29": "5D2kFK7C6NG6gSPskS5bGbVSReZb5jAALxHnaTgadGB8M6vikXjvR8RJEo8YR6Lihqo3ufvAY9NK6oZRsFreN8kd",
  "key30": "2Ff4hcnxcGSWYHaJA4t7e4nawrr1DkjNKTfHrKob9aJ5FdKTVRhonLf7XTqaLrqrKsHCU1uvsGby7SFUUT7cCXCV",
  "key31": "5RbWGAGM6uRKXTLRG3iEXXC5Wjj8fMDhpKTFG1aBnuhDJVDoEu6byB9j24raqwYJ1SerhSYKyLgopHFFei5bS92b",
  "key32": "3FoAaMCZ7FfPBFpt1ejW9F58JMNJLFdFV1T5HnmWMNwMkj5QGTqiKoF8KJwo1r14HvPMUJCM2mCW6iwLKjKgQdEN",
  "key33": "4ugBdzesxpyJm1hmfuNUbtJFo6ZGDyJUZ6bNGbaudxqZwjAz8NAZjkMcwDgmqVLnhQYCffjbvfnmUxLDm4T3WBij",
  "key34": "2QNxVb4PtShpVBxoC7PdnUTnssZCXFFVd1Eiqo31icUYUgXK9Jso4xkXkXEVuyuT7LxSmUh2x4cuQWUnNwKQ5Vt8",
  "key35": "42FfEr3T7s42cvpcdL3TE7NdBSqmcF8gXBfAixGd71qMtZky7Y2Eiu3DSwzUAAQ2csidhLR99rGsT65rQnmg1HXs",
  "key36": "dqgejWywiVLXudLHLBV8dcCVYkXgHgP3CNFzaqfDpm6LdEcnRhRLB4PLsQSsBxFeeNvWqJe8uNmRyDJGgSAwtrf",
  "key37": "3bxeFKZ47rxTiUWs3Bx1JMeKB8tt6zgj3iKCRgdAXCXpDnziA6grABHMK35ZyECz6ZWQdWB475Fw6QqmqhK9Rz7r",
  "key38": "39E1yjGH9KUj7NBXKrs3mk6ezspVUiieeFkXx8CRBsDFkUBSrnaNJY86zWUdcbcvsaqKrZ8vh8x9RfGLAmNmRTjV",
  "key39": "4KCA1mBwyN1PnSxnpe91JdjcLCxQHpgXoDgvwr6qteHQT77WY6nMSV6BUeuNRLxUZ1aBsNLgNjqHqCD6Ure8v8gL"
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
