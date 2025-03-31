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
    "Ez2Qu362Ry4cVtt4y88bYz3sJqiQrsJAxcHAgrcPXff2b49gEV8vFk4tkRNqRq8UpzAxNNZnoKVG8J1RyiRnfeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECe1WTia2JNeSyGzpKAgKcL4vmHouDMy5KEk8LR3tK5Q8cJs2oCjqDuyBkcKLR7Ta1fFzobEUfrKQkNveUoKZmJ",
  "key1": "G5vAf6jTDhD4eWHfB1p8tuwtsNXwW2fQDG35jrLjb4a6oDcUCxhQiW3JHSam6hgqMmpCoDq1jziFXH2LLixZr6B",
  "key2": "2bPkgwbnyob9U3qQamjAzCz8b6cNd4G8GKNJqSjVPTchadsdGoACizWZtb8UFz8EvNjMrh7AsCpyxtWDMXi37Y1C",
  "key3": "3vssJe6ktS3aVaa5oYprFdnGkATBHGaS75xytV6ShWyaBooh1RyboHXfdmiDwrZzerDyM6mhpVJeueXbuzzQttMG",
  "key4": "4CaGjrvZoXxHqmfr7EB7da2nVVLRPMg56fzjuXMZAVWS3yCbezsG89eJ2RpDPE2S5tCSS4qzwRHtPaFRUqqwW3gc",
  "key5": "2nK8vGJqgELjtdNhRVhUVHQJxCNVVNPTRBuJQLvSn9N7MUZnjEiYdMd4BsnhuTzLwMKpys6B9J5HZ1FMcZXb7Rpu",
  "key6": "2yF3Y4T5DLwNCHdBheryxEonQGCUZ36BaWp7jCF1TdXJWCsj5RV4Wmcsa7vnXTUYNTuyXUXaPLeP1eeGY6YqimSv",
  "key7": "5YzSXt6Q9jgpmhXE6LhEcDnGNygNLSddejbSDkxq9duB564wrurrghF5B2cnKJaNHxDJSw2uvYtpE1u7kgUfACUE",
  "key8": "5o5aEAyksWVyYW84PiCSXYuEwQNgptv2fMRMMfWxp9Euzbcjxn8KGJkd8qoj1zDM2tYKVTKe3v2cAo1RbvhcY4WY",
  "key9": "3ar9R6W4hswSb6TEThhXnS8o5CkKPw75MKNJb9Df2rhBdokT2DcnAeQgqxWhPTjZGVCxLiHQLNKiQpS4JWv15yMY",
  "key10": "EfGQBtr6dVmGKrdZJLSawEdJndiHcSMgNg4XYaxp1wZPbXMtezeKNrNSfRmMjZUpQNvHcnij2kC8JQXjPtxXS3e",
  "key11": "3qtWpur17pt9sP6ypRTR6tnWaRQ6SXvymobo9EYpTq41LfpjhJJdoPpRhhDgZ5ShQMVyZH5oRTa1JTWwgcxtxsHS",
  "key12": "5fSAXYWcC1xGJEPmMjzVxdL5Zh1PxwGHrxBSb3ZcR7hXGivfr5BH3VoxLrQpG6MpipSDvUYYd2JTMTEw7Gqux7mz",
  "key13": "BhAB56uu4bXmiDaUHL8rcKj5zHJJNbrJEqyjdtc9UNwnbMMVvubESWucK4HZZed2r9nZEYDHAfpm5hyodereVUh",
  "key14": "5H5e48zyP6bsSXdxzGJbX6JsU5cDNTjbdEuNAmMByyYm6wnwJftvjkERT2iW5EzzVdLpHWedcf6W5BFMQXdKBMwv",
  "key15": "5kVyZrACRmoYKCChx9DB1vFD6Yvy4VA46GkntcWJ9SF4wzW3962TZYuj4mLVAqKVZeAycX1UXEB98zXbverg5W5e",
  "key16": "41bJufPbVBfWgJS6UTTF7vmHUgnjCWVGRAnf8xQFqthcHbJK8VMHwr4fu3DfKGwdN9QutBeaEpD9gm8JS8m7U1rj",
  "key17": "NJqovgrwy3Mn2hY4Fjeg1u1NyTKjvh3cUFb3ePLCfHaNeEBeDWz8NGi1ukkCs2DYX38adYwpzDmwc1hozhs3e2U",
  "key18": "oDU1NN553bqL983aycgxfvHqHmJt3gp6BsWZLKmPV8mSfQdr59oJgjoRwbXgEBEgLPTBAzU2SV4YkFj3XSNA2qS",
  "key19": "5xdqN6wMB7mjaQwZwqj1Lzd9FtrhBY9B222iy1zvkSBKMHtHPmDhtxRLx8rrg6GqUjFUwM8FVTbNqbuS5Bu8WD1Q",
  "key20": "2RghNL9qJMAx6gycVWgYXrby3F8Sru9oorMis7Xm3dgdTaPfP1CXNZgeGPg1PaazhBrvsXGc3aXy52ZoGgV2oCUg",
  "key21": "3xGAtzbDbzofoSMTxr76JhZ2VB1mTfT1D4sPdRydfbuMBGZHsbG7XaznigdP9jjfM18Q1eRQT4HbbWSVNAE3CZEk",
  "key22": "5dkPS7pNpEx2LZvRZFDaESRSrYKgu46HuHFuxo72Q2YhA5hyKbE1hvBYqChkZEDkW34N5WTGddey24vEJtV86jfE",
  "key23": "xRrTuFRUBcw8yLaiBB8eY6cTpT6suMNJXwVJ3DqqrE1SyUrpHUgEC6KH5HFd97r5DfAM7TJKya3G36RURes2Dwi",
  "key24": "2SnqgwcLDG6BZaJMK27mZ2DWSRj73xkneRBnZRVVvzC3KFKFvT3WpmCTp91oBeudXtWZVCAJ2zTPbZUpfDkUuqqL"
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
