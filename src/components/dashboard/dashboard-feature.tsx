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
    "9Xhmh4AXdgdtyXTGxVUt4yw5jwbdjZVcNNy4KsiupJ1KtJfk74oL2rU6UTPcJvspqAaQnq5uGyBC3eNBAuYP9uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499UK2CQqib1oMZo1WPLYyMdUayZ8vpjadQwQyxrecVv7PWgYC7jxwVDMHV8zZcYZe4hNFTHbjtKzMsRTM43KCDg",
  "key1": "z2qjTdFRyJQmREYBDKFuRPN1gCnuR6vonVRfTeJgu2H7h6LGLnrBoyfdJ7HB314Y2RLeBirSYyKNmirGjhv6CT7",
  "key2": "QmBW2NVNN2vmkL4NtzQiZoEYWSNvWo8XfB5zuHFWYaFpmBoRbRVYYrMjM6LJrmKVTchvKcn3rmNRFAzNTnwLQaF",
  "key3": "2FSsxpAjcjbo2dkvTJv811hvvMDmDSbSPguuLCyHLh2jkw2oeqX5H9V1rcEjqdVVqJcpcNeLehXRgg6rXgxdpa5m",
  "key4": "f7ph4zifGdmRM8LAXbF3NMoDWrNUfUy729qiHyjTUoiU3GQ8P5LnB4zHcUsu1RikhRqfgQq3NnQpBpZmzd39qpn",
  "key5": "3fKhNkFXJUrHj9GjwGcGwhY63e325EUgZrLK1KzGPVBv6ynDPe9mxeySxNdrzMnhhyqKV7KX1sqWkMaybx6m1yef",
  "key6": "3Yfwe3UrVg6Q8cUsg9XBkP6KHGUKmr5wikCJ5kACvPtdDkcrERtEjVyXACj85ZbcdXZN1tuBxgFiLrS6bod9DK56",
  "key7": "2VyzqcukPeP3SuCm7vkSYSaPb3tddoQiJUkP3TuM44ExHkKsqoYSwk2RAXfhkTbjhp3i7o4q5oMfzaBFeiKL7vfe",
  "key8": "2qkkw7pDRRpFQtLFvw6kvShwAJQrgniRXS9rv2JdnwaJPTV3rENi4nRKmwBkgRGnv183Bmyos92gfsanNr8mMY9u",
  "key9": "pRfVh7ZsPGbReNAjbVs5gQmTTMzsCMdN3UZYBcYBTMVU6hKGBG6igCcqp7zRDhB8DGSAEz741gywrYEFo9si6b3",
  "key10": "z8afuGsXUUryRGhdmgnmSra5sqXtEjt4th3AQJx7thy2ryJUkrdsaK6YS2Bw7dnesJF1BYatphgWXw7uFirtDfb",
  "key11": "5xtGpWTQJSmF9Mc8N9htjajf67WqadKaupLe3G7gpYrsgiUgfaUWtdhdCKJrC6hQBgsYVuV4wd6UP8jdJAuUdoGF",
  "key12": "2yVcCQ9rfeDBLVdSvzyBQP73r8ZihwQstYHqbKcCJJMnQegPa2wEDbxs3vnTxQUbsMceA6aEoLRb4Y8eNcmod1vf",
  "key13": "3YME9mCQjXzyVDmGCxfGL4kTtUrbKAUD4WTZJgWsQvUHZ5FYpc856vGi64qpgGBvo3BSwfAKphfM5WY78L5Kr4n",
  "key14": "2KMj4z9UxvfcNqx61YFbRkR3Mj3WKn8Ex2dYBMKnC8fB62FrX9CUkzd7xrrgEYr96iFyjGAWetgP8AxpgwSCcNEB",
  "key15": "28QC7FsZ5MMRxmKXXbcEZ6zcjEVNxWiHCLoQY3sJ5Pfy32w59SDRALPPWqTaKJSELZUxTffnV9xfPKAM5TYatkRS",
  "key16": "38eCEYvMDXvQyVUd2JccBPSxoHtbzPW6cnBz6zaQF3Aps9PwdwmUAE6HkQEAkLCHTGkE1RztBST16dguUfTfQgSv",
  "key17": "dgAA2ZAMxe3d3aicsBvjaoeBtz6N4JTes5MuDT83JqcCiNDQo3cjmKCZ1Ln4C8byNwPaRkrF5boqBzT9ptfcmPF",
  "key18": "3A8ADyhAKPHGetY1xM6WtQHsHwR5w5HWCYo9osaugQMrKhfdUKxWMkASymRfLQphTMsELNohueUJweF2UCJYMySh",
  "key19": "rPj7csE5aSPYSHjciokBY48N94LWPYRziQz4eyNNkh6LgWbt9iisHKywrW9pzy92Np4yvCHXobChSEgDLi2bMha",
  "key20": "1GSWynYTDtSVSnHPiYgVncEqgmjtxrYftofPadsxb3hE1j19Fighhe5sjd5freocyE2cTP4mMRX4XeKYcn4JLM3",
  "key21": "2yCdsvtGZ6ho6HQkrDWSAyo4jysCgYMbDXCaMrA5S15L68RyWjvUe71yR6tteaTi8m8VjGB2VUVhVk4CXU4SsjQu",
  "key22": "4rXcEXTyeZ3Xu5ZcJm6u74AYAtSKbfVLugoZ8iAvebEiuy5ApCtJsuM9VesbMZ3uggVdHVMZ2zm98U8VgySzhhWE",
  "key23": "5xeJSoj4pNhb539nGbk8JzBhtDjdtuhrtw2TtxdoBYeViBZBSQffzWk1iDKiB3R2cNT4BrqV2UqpSsFm5aoW8e62",
  "key24": "3V63PJ8oVWPaZx2ueQ8fjUDe6T3AA4BjkY5ZLu4wyKLBdpGkYuSTKAoiqQtjZ3M6kvp7wWHty3Dhpq9TtSnir99z",
  "key25": "4TasrQfjdmbXc9jkcwogdnYXYG6bQAQF57PyMvrDW7Wv5NXnkpUoeRQhZqtWyv5VK6VtJdQszM6gnqGTh9t4Pix2",
  "key26": "JQvRfeWd6ca8GTFAqLczN8cWquJ93KSFy6He3qU6pWEwisFeRdNK36Dv3KKyse1obwHvReSkJU5ZUUv96jcv5rQ",
  "key27": "4ujuTPaTAd645HEyBwSw9G8vDSkyoeBVNHaCWNk2J46BzJzE2tiP8ByGFzLmufpdF9oxwsnLAeLM7Yrem7XcfNho",
  "key28": "42tVg8mSPgAmJft9WhFazUUSFt97pBoWM1g49ouf6BgZENj1YMhLt7LvKCBzviuezp9WUjJNnFFZCpVmgyKvtuZh",
  "key29": "2jUu6E3jBiJAPnyH4ze7gM1HJpd3ETtspyEb6YCrQaJtWgZEbf3AbPbHcfvsx37rWji4Xpf9tbKCvqoa5XuvS1pn",
  "key30": "2ow3wEhFX9eHrDzX7J7GSeh3EiB3UXUYaveCSnT52vBWJQegWj18Y3v8djhG1b41BMThUhyR5jMTHhU1Yt6rxka8",
  "key31": "3ZfqEMVioKuYMTRVvBcCPJ2s6PSpDYuEtmxij541aAnUp3wdKdMtJuaxM9ay58Jt2rNHdKrtHUfF6LcJE4eAqWRc",
  "key32": "2wP6RDZAXKPkAx7QJFBQRJBeRysHydDb4ztuyDybesSmFV236KD2AHk2SB7bXmAZepGUmQNWGBfdpe1FwBYisecF",
  "key33": "5cDxKB3MTwHLnjs1BGCmLr9YYJiwtz4ANAKp8ipzheMnxSSGpYjPh2AQB3FtMhkQtxu3jvZ3V3PYF8x3LWh1fP7b",
  "key34": "oATZUcdGe2V6ytzH6fGasYg1d4mkj6yxHn3CTd2kr8mLoUutckcRATEMMhh4g6jUPqc6SMMP6g1uQYa5MPR26xx",
  "key35": "37RpjRumHUSyHMgBTESR8ocXvRtpvHV3xukNjyzHUj9ktyechxMa96xojMLzWtTSj6o7paNxd2ZWZduyGUNBUWZY",
  "key36": "2HiLSzQ4jLAqDKevPZcPaZhidpdE6MM4rh7d7iQqwDKVc7jHAHwruivKfvhB5nwR1hxbYDEd4bMvpzbTHqyLSM8D",
  "key37": "39fzU3yogEUqCCKxfFKntvFAwwh36PwJH2eupiPno2NHdjiwHhveBuBSDoxHC2H7ARuang79w1ie6gDQyv9TRf1s",
  "key38": "45i7a5jSE8cTu6bkVHxRcb5S6WH89DnDFFWDW1aRPPBCSdtCL1sWce5yACq2v4fsMH5MHfykL11fMQTGZeiWud1H"
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
