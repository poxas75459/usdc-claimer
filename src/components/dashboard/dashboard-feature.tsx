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
    "Xzohdi3qwywZBMdCir1nTG98gqufBNYye7YqUwndUvJeBUsZgqyvNbeYxMPR46ypsdSyU2cYapMZRHp615ACeN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAKheuLYazVKEPAia17mXhcYBnZNw5EEjKvyYVZLe5MWts4aTFf7FuA8mNeZqg84QtMCkWQMd2C2gUya4rGa7Yk",
  "key1": "mcRrNqKpUSaoVEDpshZDEYkx3zmU4roafnqC2sLCTvHgkvZ5yyezzyKkWMPKKprLtxRqKgyhvibW8fM85H2dF9d",
  "key2": "3s1siMPR76zKrjUdZRgRCTW7zNhw1LGvBWDBX1Q8Y8GMu3Y3Bn3wLYtHxKryTFoD3mpwxLi29FwvKWE88etcF1xb",
  "key3": "58yerEDmyvhHpodHJ77gTSWHbRXGTndfXSMBMAEwfp5jEpUftViXcYiRkarJyMLL5sGgLbnCJgQp3Y7jKvFGT2kk",
  "key4": "PW7nafwemSSwQoKqopmdBhS4THPuAdtrRpJoVfAuui57nGk35GWp3ySDowtccR7rr1WVFUhhUjxnV93DMwoFeyv",
  "key5": "2SKeEmpCq2LmLZ46Ups3cnMmjbuF7kTdufgVE3q9uTshdsxMSiMASGVcRhWD3aC9HFWc31vxmSkYj3Mpo8ks7U4x",
  "key6": "4eB1qWjb2jJzgygt1Mj8CnR2F7tZNRRpU3kNqtqXFK35DXM4kbKjDto4jMVYR1wShGjhjynjqmwiyicaCj4Suj7W",
  "key7": "pivCFtzmuWkdR5XkN5xhnADQUssB4uN2PTPaGBDKq5CT7ZP8QBxuaCgRLw9fGs1DL1evs6TLRCMxoKRhnjjn7gS",
  "key8": "x2cuQMxcwa2XQQCQ9boJYxLGMqbVKjprokjAcC9XbzVEqcete1dvepUbiveGxd9NDDVFunKzhYiV8v3zpkBp22B",
  "key9": "VKhg8B6mGiB7475aPirsQccNuWxJrzJEbEHBxLgrAi6VA1vcHYR62cejSds7Mj7dFTAn3GpU8bbUdyNh5dVFBz9",
  "key10": "35MQgvEARzPTuPX3bLfeUrJz2wKTiY9at3a6ioxyrJ835SSmd1vvieHMfgS5YnTJBNbPpwXs3AgQNwjv96agxGH3",
  "key11": "2jjbDVS6tWVbEJD6T8QpuKvBNpQTiECph1Qdgn448JSVuUUC2srzPCiFm5uGCUr4SBo59zmz5tmgFBUnJbJUAXtg",
  "key12": "2hHMdd1x6aJ7gFix3MvpAwhzR8kQHxHtAhxmJ1xUs1kmJ1Nikjv4qkt6QTUTc8NXFhXwmV71T9S78BynpGbhDUBU",
  "key13": "L4jztHqxqA3Cs9ysjaRi3NNrYwcCPtN2qvLpcugZ8utVuxy3yhPytyLV8CK6mocA1RzBWhKDyvFsQuJ5WxZ53Mc",
  "key14": "3XnNahkTESNngjDMPokzPeMLPLx1f6JrmTvWaccUzum6QYcMQwRKFAxJXDLt8MSLLcYvjhCGCLxd42sY3PeE2rsJ",
  "key15": "LUYuXiWm5Jfmzx5i9mm6QRC74SPsP5HFN8oVoC4KRoU91cEudqkHabm9boK9qw1bFEiVBzQuxFTaPXNtmS6aXhn",
  "key16": "4s4GUwfJBAPwXVSK7YCzgmWaZHoZakU1NGifDp72nr2Y2KFicTRENR3gpddvDedsLucNcoq5CcRSgjqFumiHuciA",
  "key17": "48Fon4FSC2RmwD5gLgZsk75JhmKPKpLdFJBzovATur6mUSirz9qczhXMmm7MTXp2mGT49g9kJbFtKE5knujCy68r",
  "key18": "5wHWDcSXFA4ueDAcFPjtYaCckG3b4T96WoxwXgjnWozogD3QmK7b2pGJVkLC1LerdC672mThCngEHw19Sz4J49A2",
  "key19": "uwHWwqbGKBXnuaCHeZFQfnjVt6KNpw4CrMQQb6rQBzKhuTcVcSP7Wg1G5atQrSWV7wjzAjQHpiEk7NMX3d79JBM",
  "key20": "3VasHSDPvLeHL7yJbLmpTWchGj1CtU6vuVCS7zKWz5nju5a1EGV7pWaasCYMpxCeo5iifLv1hwNn33tXeZR7VQ8Q",
  "key21": "2FGcBqGWPSKYPq1bx7kZxg3xioM4X1dc4EiENUqfdhWCvisYn6S3hM3Z6sfnakTEPZhUbPqErYvow3oZbXb7a1Uy",
  "key22": "2zTi7xZU5WqrwaqzJ9QcbEGaBnUaWYHZNkyVmvDcg6Wj2uRpuBSjBPtuvCGpxcUNSxF14XVAaMs1nW7u3mbCUbEG",
  "key23": "4wpMfadUunKVfoFV8mewmojkxGJt87KKpRgdR8SMHG569N89uvmhrH2Rc9T6eKZBfdZJLb71gYnBr4wKwfJ8jAxs",
  "key24": "5etf8uzEqG4EkrAbNmRgtsPeU5sy6HFceE8SiLKR8MTHKTAxezo7j1Ni9vxUyiiKGYpJkut98wxHpZvGmuYrjMEJ",
  "key25": "2EqarXCXR5AW4EE3F4FpmssGUS1AQPuhjkQyXotyETK684b8sm5hdqYRwPC9LuKPatpYuyUcvc9p5m4BzMMn4GgB",
  "key26": "45Ct6aSE24hTi2kDuAN4Ue7KSaruZDtuaGEoec9xKL2md6erU4Q7mMnaVDEzCf9KymMMCC82kHsfAyxaTSrw9QxQ",
  "key27": "1mxXMFTdqaqp48kEfrJKxnAeBJv17AG7BCwYArek2MQzS3wbgaTiC8K1rtGPKWJipp638qKkLdygMyyiZvHRxVD",
  "key28": "Knz2PnCYwXG2x91Hf8iinJuMnuTPEcKtD9LBNfcdpVeGbpFYnDHXoLdfSQemP2TPdjdr2gCgLfra8LAfMhDS4Rh",
  "key29": "bT6aRgcbTKjfBphXDms1fcCDrwrcMocRGAscXgzzS75WMbH2Mv5x1M6cSd4UiCkjVzwN1AtqcFmscYaPyjN2nmf",
  "key30": "3JvN7xF5uz5wKDw7VXqpeqGs391zNvtPhg1PPG3xfYa1fLv8UPsM5MTE9dZqGe7YTgWi8T2ZTkiP6mShaKL8BbPD",
  "key31": "3KeKS78dYXsCb7J9hD1bb56dN6H94A7EaCyG71tED5v9VgZb2RqW6eenc2BViXF6xjTdAMcYpfHRUdog27T6cCgq"
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
