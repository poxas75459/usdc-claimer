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
    "46WmoDYDxquVHW7xcTaaiCZUuAYHeZifY48KRzrQj34z57qUrMaPdcfyHx2o1iAFekgjX1JTfnZR9eJgT9RsTgMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evVgpkoyWKZRLWtFpa1c2Yq8j6cuNyGmDFUFhNUVdyBnDwVeu2YQ5hArArdThf4gtyTzbvtcW8aouthG7718QN1",
  "key1": "579i1ANLaznChgb8aufeFrAUDm4NdzGV8LGojv1B1ovJkuBXxGaNXMbWJ6xXRuiap2oshYStGM2ScFvvSu9BKjwC",
  "key2": "3UgZEEcrvmqvw8KMLPSD4wfsK4RozrQzrcY32wBnM2dc9eW7ycL1WZS4PGV7fKkk2y4WmL3RDbwKBpW7RdQ8y7no",
  "key3": "2UQcuiuFerQRJkEQrCnCtzE9VtyeotYxSBeeqxNBZcD7QzFu2hPMeEFQizVPJRYS7Uf3N6iNqUQ3oBfYM3d83pef",
  "key4": "fhiFTu3e4tAGd4JtFyAQ9FfDVmo6ayNeqRRwA4ADuFzGDAYpmAd2sakxBJ2NgSpgqRVjLbnrKRzrgvurUJmW5fu",
  "key5": "4RkmdcEFk8nSt5QpLmsagWCRtKKxPfWtvV3aqUWwxee16fKqQDJ5PmCMaPUusXzZjiRhWGrei2akfxRtGDPeG6nU",
  "key6": "2bJjuJy4UwVrVSfHeazD4GCu9xrkwHewni2e1vGHAREiT6ELUEn4bP6YHZLUjSLCt1KMiMwV9sDjyYjhGkiUVCBn",
  "key7": "3FSfaFqK9U3ScXZpGcm7TZFdthAP9uP36maBWTQUzdNASZEhoz8JrGQRuHzzWYn81NdNHyZodkBBpN7ueXHZJaoi",
  "key8": "2xshhuMc2yvStyFuSAtjJrZKmkyTUWCdWWzdViemfhaiwMLtbvtbmUG48SHqpdN4X2uUeh4e5dYXrvfHmsDU621E",
  "key9": "26Xz9Z7GzNbQT8xihuBQMyXdvBmDHsR1fgd9neUz1nP6k6EQYRwC6NgM6mjiAoqVSKENnkn4TqXdeaqPJoZSmiRV",
  "key10": "5vtP9nFA8nsvhHMPbYM48UKFYwFq3XXBA4DBwuMvkVZyG235ZApPcFbVvKP9U3h6WrNM8a6QySQgoUyGeazqBvAQ",
  "key11": "32LYqDsnCuHdSa5i9VQpSHZko19GuhoiLYT9LohfYiKtP13SG6RNsnBgD8KoKZyagUV8Hyhq4NaCmjRU2W35J8c6",
  "key12": "2di3wCi11HuwmoAnwMP9YghomLvyZGEtoYdiomeYP7rQgi1Q5BGs2jmb8yx7wrWJumJDBdhVyn6Qq82XbUtggyXQ",
  "key13": "2XrqJ9upcNkrUpYHBTMja4Bwui62uEHW6MCX6wdN7d6Vyi7dLT3PhQ1ePuW3p1hBPAx8Zy4sc4DjZULqdUnUhcDJ",
  "key14": "5GoFQpCArUoiQmzK1d5K6ZMhFeK7rZiPAMqVkJLcRtzezLUvZwtoyf8DjEvHmKNa2UEPd47gqWHU9hiM23VACw9X",
  "key15": "38ygfAe7YEN8hf6moYYzJqhk68C7NgzJoJGBb95U5J2QermoZMdL5MszpzpXLQbL49xGuhwpTf7GsvCy59vKZdEL",
  "key16": "r52mmoWuY1VaB1F7yzpZ769p8zvWAaPnuGbfEGPkC8QYsZHNFJw9UVL6qFm8LnfGbRdfyp5iTaBTtZdfG4yy1W7",
  "key17": "4zSUBBup3nKnrcL56gdu3SHHrPS5KfNFuaMFUPFX4t7BqDxyCaYAmdG5kRJH52RCgQDo2r1YSc4cKYDq3ybhqghj",
  "key18": "3YmTKMPRcU97QabzE7SJDSUCUJmzdPapVLU8nWEQdd9JqtYmcvfsFHRMe2fDSsCtScmyJMyFq76yY4dKM5B9HdM7",
  "key19": "3QtCgD96vVys4xpEhkt8kPiQHcrBgzaezcMnjhjNKtZhHmx576JrywVLm14svM4gTVCMtfF9eY4YqdcdXcxxypRK",
  "key20": "3nKJAcPiZUeAGG8EXd7MDwSFmgaLSFyVLS467zEqPW8CxYgXB82mHSLfZqqt5MtNJNPqDCoP4Bd4iznunrKVSffK",
  "key21": "5mpwbiDrgSTkXHiLg5xrHoqkBignCLCSfyrgV6kMGh6zSuQe2qrErZHoT15MLrHBNDuoheRGD6GhnchppYU1vJvr",
  "key22": "55qjo3BESrW4LRDqaB3HAZHiGh1b7LXitAu5PoV5graGDfZEFsksqk1TiWpxPkfmw2gH6uZotwdMC1rMToCdhZTX",
  "key23": "JAue6mn6axLsVgxX1JLKhNT7fZ9bnCqYGhEaSN57xDEtgoT9Z7Jm54FELXUhFCyaV8scXGJRFKYRNP6Lv3YSDPU",
  "key24": "2xUAKCpJRTjZWah2dxLxJagFPELLoznTSaDffrjFCE2MLHceC42sWup8TgYb4VesKq3sdx483gLs7mYqbSqj55yf",
  "key25": "fEHyEhNEut1XxTHBDczhCmCQ4u55VfY1jCd9kWvdureoW19QvKhvb4PDkQqzsCo2LjsKpw3XVxUoRJw4Knu8Xnz",
  "key26": "5hxXFQp5pXwhU4Fmbj4AtAmrTshev2w8AX7BSwQ3ito5vfoHa8aB7vKKMATatnmvpKAZFWJZzhHk9ZY14ngYuibj",
  "key27": "4LfJWyqLY88aBkTEbvK4kGE7FtvuaoLVMARV1MQAJM7c7RmxGr3Pk7E9J88CA6ER9CQ7o3LwYvvLHLgQge4GQN13",
  "key28": "EfKUz6dnUmD8CK55z8WPc9hiJNWjkj8eFDNs5225CerDnvz7ji4vKd2PvwW5emFxYktyT94qNJteYtnV9Mr66z1"
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
