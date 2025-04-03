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
    "48DmccyiQNUHxh1Sq7bF3xYMp7aSJpycpvPPwRA21Epkx1AzXK1gXVkRDaV8vzDvPH5DtvheziLFc1RzVQ7sP6CH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dvs1aVLzngaBUQiAfzNuHX8rG7RDixnivVc3SVFUDsqrh8ZUfwUvdhng79kfNq7yBKqoamsvYsdqQBMRr5RYX1s",
  "key1": "5M7aJSgFrfyX57w1nGrKcssN5rfkUtkLyKzL3TfPjcNkms9gRxz2rCfdAknBbV1vGtVtBsU9W3pCGkTHGWHwevAi",
  "key2": "5kLXw4LcbHMRQ9dXoTW9C2UdrNjKV66AerjwfhHp8j8szigXHudqsiYzt9jnRcCRQiLrtEZHmwWghWCzMFJn5y12",
  "key3": "45vpMkAARwBvFaTYLW6uDB5ZYdbijcVambcPdz5ArZuFuMD7zFEhfpiunHFFH7JqKKmv16dyqUwm8CdY4D2dB988",
  "key4": "2KsVFsUswsYMDimTqn3UwXprSuN91zzsp7jaC9Gur1E6qPG6MGJwcYKs89YMdXWSWEPCvZ39qzDceYcXnonzzc99",
  "key5": "G7PcWppEeX9b6m465bNTerTLYjvc4NmBexhAJVy2m1XEuQ7AtsXv9e734D8ssYUAJ8Be226trB2GtAG26Ljwcjt",
  "key6": "Dw3gSbJMVmwfTwdnvNoFHYt9oVhJVbdH5ky8tk4mrPguQgv6Cqyv5TneHgq5xLG7YjdwC1tddbTy59E6HWvGeYs",
  "key7": "4hPHb71X8awhoxRvmE6BftnuUbBJNmLDnyuxWKXXzG6fFtQ9uUsSw9EcbZoK13toVj5CH56vASCVTwC9TPbUXW5E",
  "key8": "4GzDUKb7bzVb17Dh6tE63PnawMBYbXvT3ZjVqxbrE1yF45P6jH5PKg9wDSS5FfHLcbuPgKBbL128F2NDa8f57sMP",
  "key9": "5DHmxHc9WXyqFmyyzkEuUYnY9HrrhHWJ8noWtychN63pkykxhi4KZ5oncUNEuA7CL1XmF5nS7C2tRq4WW495oSss",
  "key10": "38fYYYinBen44rHLfyQrqTaGPbM2pxh8c24LqdrGkQak8VsdjrPZDFT7D7apzoeCt2r8bDkk436AUkk2cUfGy8E6",
  "key11": "2vTTFnk438eFzDr9o8L9ss9TTV7HpUo6W4pjcVeG9dusrFfJVBFtDPD7MFs8W7xK9TLxJg9jBpnkajGf2E7yJcCL",
  "key12": "3tRaquLvVoK2gJwE9mWfVZfp2wvHPcKSpr7TSV5u9wNK7hjKazmosy6BcZNCiXxECSzxDmMtvP176bxyhBb9zUVU",
  "key13": "W3eTUnNc7zHRqy8BhwkPZhq5e2N1zmDN3iSRjY9rVN8i9dd6D2g1q7SP6YuDKqMAhVkmtfTrtemqDZY2eTtkJZo",
  "key14": "3pzE2TNKBdy3e8z28rbXBWmesmTJzQHZkPYVsHw7zC8ScegiGPaZyomaChyFtMNNZDCt7fwRsq7WHph8YLGXVaAp",
  "key15": "3RKz4QmtyKVDVVziwo2nQhTfhspUA2SEMcTyyN1sAWYyTFptFBygQfocyRmbNEvtsUKXmXRBs5ZjzS6oSS9sQJK8",
  "key16": "3yfgX9LpFFSumpmGV9mGp8qX3qHmwV3WVTRinGgobVNkABX5YL5LQcyVGNZ19Da56V8xZFdjCYQy3iK5AUfox3RG",
  "key17": "2Mgo8pMNFw5quq1RwGzfXNtAxcHmx9RTqeJSskreQEFPAUtR8xSto5VWsDhikXbYTLtF8ZmW5zMnENmC9UwGrvjw",
  "key18": "4ykCGRA9orBedPBoqyYFyXbHXm2FfuR96AgFkpCRmMaSivyQVKc9k7PiW8cbdn1gyYuqwFCDozpbXDJquv9UhCFW",
  "key19": "5VFTSFGoTfJ7waSkWrrBXPbECb92yeFUWsKfR5JoVc6uxsDuc1zFKsS8RB2gW851MWhopr6c4B52hpuS6m6onNhp",
  "key20": "Cik4u7Fmj4bxEoaLBBb94Nwhngpf8RF7VCqh4636TzfWpZxyAWqBjAFKrg116A3p9eBVn9F7p7fD3M54SKZDeRe",
  "key21": "3BbHDsMVit1srhbsKEEDtvHYjQEzeqg99pL9qnDBmB4zSugsGpbCQon2Lzaf5amqjihr3p4zp8YE5iHR5mHuWsEb",
  "key22": "3QPdeYTzx2QzZqpE77c6XxGAnCMC2RCmcf73FsN55rMZ5YiNHifmkoJwmabqmuL292U4KsYSoJ5GZASFJ34dY1L7",
  "key23": "5rqdfX4p76efXsGAdE1J2XrtgsPjJoTLh8VJ6ifWZwzTLsruUsjXf5j22F7YCmgEqjaWxoffh4EiUXfcnALjjL6p",
  "key24": "34TYeL9tMGeANgDeLSh7Uq49Janfa3yURuCfmtVsR9YaRQji1dvRbfaksGGx2Ewdk5bjaWu6ZMeoCiVr2utDbybN",
  "key25": "2em61UkHMTpQejdg8kVtEWGd1p5GRMmsWwfVctFNpweaEPqByEAgpF6PeCDrLvzVDwe5APgsnT6Tt1FLhfRB2cue",
  "key26": "daXdtZW8rtkwanbfrc5xuAzkSxwsxWvVraZYyBvE6n4f4f69dSEomSgqnURRKMTCjxPbMuhhVK6Edw9qqxcfPMf"
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
