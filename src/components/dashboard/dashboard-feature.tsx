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
    "4ZWur3xHJWEg8Ju2QrMRRhm7ZXzLx1AG2LohHVKsFWAucXqNK6587DUrzoaKk5hdhFpDuq2sDQYoD51QGTwa8geu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DgiigLMQQTrNbcnXHtyhtqc6ovE93EV5FUjcs5X5jCYti3fbZADUbb5K4ZGfC1fp3cPfY623wJDxTLPxCkpvWmg",
  "key1": "diTdFL66Bc8iAaAnUWKk5RS22gPZDFx4AHCx2wKCcGt7hQMDkUJaX8KMtXmF3QKg8wQ9DwYXaJdZSe2H6js6vdU",
  "key2": "CfBpYdNDu4d4byXPtPfQHAjLTEcBYsy2L6XEVeACLVRRePtew8F1g9RobwFV1dU3Wv6mB5z8tLn4qppdT7V39qC",
  "key3": "2bkeXdhbCJRttgnk7gTshu9vEtmcfcNWS4sYkRAQt3YLEk7rpJy7kw1QnCeUufXxtAVLbJXVAtwFK8XseEZ674B6",
  "key4": "CyJJn9mfLN5FuDu7LRyCq25En91fPsSxMxmHeDvULGQf9RnsGxD6tM3eK3EiQz1YBXDDLDnno2GLMGMvCjPQC5a",
  "key5": "k3EqCHSKFEdeZx1J4aUmHpvoBYdgZ58uZVoqUqEnDxG64eQBqLMaByRPbdDKKpZLHGxvaqv6GvR3gLtUc5ZYvZE",
  "key6": "5s4REDrfPcXsxahkiQW9CJ45HK7MaohKzfkcGJeUjJNnf8U94Vn1yRr9Pda9Kbn3AcXxcVbDDaL4cW2t46TvqUGf",
  "key7": "4PiCr5vv2pYUacqx8xDhmJtNqAFRBfLu3pjMTAaYKAtCeMZYnXjLH6tTJanckCvKHitpESMk1N5VhaEHM69gnFSn",
  "key8": "4ZTCKc2vj2MWrjtqta6PknBH9vhuFP7MTUz7aW245FMzho3FZtw3WsWC3Ac79ni9vaHJreQUCZpktjvrg6E4Wspr",
  "key9": "31mTvjjCHWimcaUXtEVUyUV15HtsYsZ3VaBiF2RJZ68EqN7nxgbhMGVkmhw7ZRk6U7y1t5n4x8AjXfJ672YF2PLm",
  "key10": "P8yfSx37VWhzDLgY49tTEm1fDYX4GmRKm7GPh7Hr8KHgvyhYUHedWiQVzcDdUmb84wM7AjFhFkh5oRVDMjRkobo",
  "key11": "4aHinBqHcQr8e2ySNY6XPeMvszy16FLwst16bu2rqjwyEW32vYSTLfAX2SqedktqMmJoM1eoqVpr8dPdUWRYdCxi",
  "key12": "qvGhbr9S1RenSbDF2zyeGhuLs1aDBa7uqLPxyPxL1PjJZubG1iKJVGvD1aGu7RQ76zMkHXRTDgQuKcZsfeaEB8h",
  "key13": "4zy6bH3Pk5yQHbBXHSFq3mdq9QUqZ1k3t1D6dQEVbuq2oZdKtGY86xmVta3gDprK8yZBdg2qT7Gkd9Tk9zMtspmK",
  "key14": "3Fd9NrRLRFu4Gg4GvGFX5SJV5S7HuZzjxL9UyBmaSkNbPoJTvxkFqgSskwWf9PeZypzJy5SfQX3Vg2gsXSByVYsQ",
  "key15": "21hAWgWbX65vdzUagNa8ew7RDd7iexG8B8cheHuLrXCuwrBhJ1Ln5fnsow2HNFFYJVcXUzHQRhGmJZRSnwboPN4k",
  "key16": "5Gmik26LaqcVhUPrQGAa21XJ1rUkgLXrchh9VSWT7HvUKcQM2ktvHW4ujKoLzTZpY1s1jndA6uDMcaAFUF9pCcHN",
  "key17": "4nBT1f6Gh1P6oV27iFWpXeKhscCyeZ2d2pcPib2KzvMta5Z3RcLAomKW9nnhva1a11reeSV7Cuc7v2YEPsySPsur",
  "key18": "22M2Xw9se9SZ3RJV1NbgLVZXBqpwfQpEwEMuPoGC9JbptgMbheXNkDLBfgQNwiLJkvhx3YdTrW96bYo9TuvzMgWd",
  "key19": "2eCXr4FW9cfs9tPYj8BbpKoKG5bcj56H5PmYKgA522xR4cuDrTM1N2jHq6TQzpBEZykJABCeWZBQzfXUrGtDj65b",
  "key20": "rx343JCQR8bpscnLtZrN9Qvcg65NaduEoBHRkSWe4WNCqqRdorw8GukZFwQNqBcd6gwkzUfenjKfMVzU9PzszC9",
  "key21": "28eDrUTZEDDJ1j4iRPnSBRzarzDFLD9ZUx3cmKCbXhPBmbrsczqbSm2nT7EgPwM7KFH3y42RMkqASdEkT53X2GZj",
  "key22": "2eKzFWRJqKuCEaj3yNDGetAmnL3dM3NVvwB1omvc86xYLmUnUNtKYUVdBv5kjpLcKfvowujvLmYE9ZDzDyTCHgkm",
  "key23": "5KCUMm2SckLstLjiRBaMcjSW6v61murBsEKnhzB9arqu9BNSk8GzDSwczj6KaYF7By4CEB87VetnyjqnDXDZUwhg",
  "key24": "4ErTpJoQQRAX2zBJnRLgszZB1rUzTZLQs59h3dEuFTCQADwJ3kFqjw75oeZ8MD6r517y9erwVpzf7piBE2TaZtb",
  "key25": "4ezLAHQCB6gLEg5AiryJAHoRHKmJsNJu9oxkNVyBgrEkiRv66Z3vKkjwacmXREbFYaCRNhDMndLoJR7svjg2Syvr",
  "key26": "4Nf73VLPnF9QxwYscDLHRsPrPhLPJmjrVz7gKUim6XFdgGcsAhUCi9QEFPTK4cf2rmYmqogBPRkCHE1EZPiSAkkP",
  "key27": "2fkmvnHWkbhijh6mUMSy48LJMvhaJYQDjNamFfF93to49fEf9BCqosWM19gHkTnckFMb8q6kiTMbKTiXwnXgH2hB",
  "key28": "2KMBPZT9gW6eVcG5Sy5236pKwbU8MgJHfXw2UN9ynf4nLWPu32qb7RgFpnML1hZjeHzDyvkcdshLP4pZwNiJpyXD",
  "key29": "3LWVDbsscDdZNMWmADwkxzAJiFXpT84nmHfLFBgb6A2KB5zztiyZfA3VrtcTvGuBY8U9HNPcNK8if1egvEBNG252",
  "key30": "5K3VpBT3JX7twGa41HHf5ybzhoVLJEH3ydT6W4VfsXmUcKQHiiUKqgX9Q7dEpL1cMeHSEMSA2c8B8LkquWCQ1x6h",
  "key31": "3wtVkZmmcjcCx6u36K7ViArSu8DUKq2Rj5SEyxHZpMJJywNExdshDX8FyfwTyuBXDXUP1KxTataLnzBadVF9qyvr",
  "key32": "SE4qHPoc8koqfffJy8MnvPnGDvLgSQaVJenuuG3GCxsQxgdUygbcxgdmGUCzpBo2juBGpeFWQSqtX7sMBiNUsEV",
  "key33": "5atvgEvQ9CjCyLW1ieFazEwAewPhzgDKRQ4nXjFSvxdFEdvJnL938CCYAZsPUY1daxrWorA52FmEJNE9ukHjq7AJ",
  "key34": "7hQP9HAaELsMAMvHwsgqMFocVxqBWzkmfXgsPrr9nbF1aQv2G6pZhNqDxqitXbo1uRykkkUf18dnw2aioAAamzF",
  "key35": "8f91eJJZVptWwYJB3Qd6gYBuT3x15rhFksn94Bu85ebQpHRur4VjZiPiQhRmXR1qiYjyjFboS8UkNd7byHp8RpQ",
  "key36": "2Mb3r9CSPcwxrFrLpPwtNYzqYxdGaCSq9nPxxB39xik1oH26nwJNgF8TsyRyTCwFgTGmxZCqZnXJZkUa1rvw1wtT"
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
