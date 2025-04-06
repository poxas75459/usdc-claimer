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
    "3FB9Xwq3BSv1QUVrdZZmRNjuxtuazemcWX9EDhDkRA5jTAQjvwQ6bGskVMc5n77wSP32zxk33ZiFxGBDLsLVXhdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4THfAFVPtme4MPU67pDrjYFdNN6K61uUL4SjokBZeu2Cw3EnSYrse1i9mZ7zJeivqgEgeKv6G3krComP3qa1xjBq",
  "key1": "3YjSyjp3YcFcWAawdAYt2WRpxpg9kfE6AssYPPNWz3QVFAKQuShZsRuH6YQvHe3mgnn1MGiEP7UMBf6G9ucJ98zk",
  "key2": "5E1mtPqkeCoF6gTExrCraJv5eMsvjZEt5M1uE5eiCACp7YTJDEuKktrVPcYRga7nPRK9T4FMTjPBSr2GsYRiPQS9",
  "key3": "31jyBigiQYLCbd1vfFbyiuFayq4pkLjVbH8QVHpr5q84AL6xZSJjmQt6cR1mqQ9uv4SiST3GZjw71CpyhXhEvpsK",
  "key4": "5QANRpJf8gD3A8naUyaJumT5ejfSoyg68ttQVTrgn1RsoXeeZHqb4CYpGFE6VedemQiKUqtu4FostWpfHKBkADaQ",
  "key5": "SwkCaNh4TZdosUuWCQfVNwGiHzXxPr5LA1oPN1SXnARpLmjAJiiYH77b2Ton6HA7FtVJQqa162WzchXSigKzxJR",
  "key6": "3GaATSPJFWYsZyyphWp6UFk89K42ra8F8Gdp9WBs1fDd42gJotGWKVSvhHRxYem5WQCmAN1GCtvop1i2tdobYyTh",
  "key7": "wbDJEMfsd4aBW2KvfgcamE1oTKQpwiiWKWjvWX5EWYAMaczNCHTWTXEUaX58sWGwAZNuyuzKNnYcvBNDVgqtzfz",
  "key8": "yUqaW2ERiLC4s5nenEJ3siaUS6813MetaDAmQUooqpuKfz3W8fgBuc2exjkVaRkojBkaBTkesKy9JhdnTjAPTzH",
  "key9": "4nbq9ABkgLt69sJpe9fzy4qAfBN3SbXnLPaRcA1zNn7g7ejREH4xtUvxWDyfdhVAiKQotLxBhSsaepoKVztu2283",
  "key10": "25pxyJsEMYvh9fkGFZYkK7J81u4soZLf2Pt8HG14JSHGRANwLGqiebag4S1gamhrVU654GVniPVb6iPGwgfyxBNy",
  "key11": "2GLDgBD9fZ6QhNGc5W4A5TktPwmgBu8PEKDNgcuiQenuDEyiG7bXb2urSyBp5fpmTHck3yvjfEjZep6xpGWYX7SD",
  "key12": "422ta9B68P5snWaXJY31JCLQtp1AgFnofpcfHGuBBz9Bv9J1SfmEW7YEiwjbjmafa1HK6w5GuLdDziBmyqu6ko7h",
  "key13": "5ozT9keTjoiwE192DJD5swA4Fdm7uNR5rveo2P1UTQw2egFUqsp7Mmnn6NsL337vSZJMCTiTw2K4g1vWPSyRJJ3f",
  "key14": "kEo51s4Uk2rDu4RmrzXd8yTUUnjPZoqYWimZmZ67za1Y1HBR9GNDszyeJHf4CV7CTreWE6e2MerqHFWNHXi1XuG",
  "key15": "5PFGLEpLQHYMp2sk7cW1AtxcsQRSbc1iUAw1RiFN1aKPAiznz9dHULhCQBQUjxa2aFZqnrEDGxYFxwxtpyL79hMn",
  "key16": "33S79RQ91GFyKrKFL6qLaj4ie3u4oRfzGyvshdFnuGBVyCmY53BYFsxmLTcjboMBMT3Ca8bf3R4iYzcn6mh1p7PL",
  "key17": "3yfSqZq3XGnss1mEadLGiShdHWYVrTGqmeNFbSE1HQZFZg8M3NZB4ZZ5sApBz5evbigLiBdAAhLEsgL5LkdK6fu",
  "key18": "28yKMpC6fY1ncaWfiQFj12omyC2kyPhtHT3AcY98mFN8wfeNbQ9EW7TwWZVsDdUfCoNWN7hqaHfppzZe6YaQfcT8",
  "key19": "5Lrweay2Smi795j1h8YySBuD2KGNET86zwDSYsKKRyEag1i6tTYYLSdAWaFSyvcSJsgq58mNftwDQisqoFs6giDG",
  "key20": "2na2QPa9s8x8KvXAmcFpiYKBKmfeQ1Bod7SfnhjXzpnyjnK8tvJfKRZAFchkc2aRxtrKGw6QHQwHmGFAsyd5vMxM",
  "key21": "3bqZx8C8MyDDorKSino36fGSVCu1yv3JABrzGBzpikJXcwEzCs472nCrHcxyGBsrG5TRqRB6RzCQaCpJHAiZxbnM",
  "key22": "33svvuT335sNEsKk1uN4wHbcJHtJT6BDzMHebFygBUDf5wGBftJe74FSuvtKyjQYqsPw2LU8YPtxy7XpnijK4cCE",
  "key23": "5fMfSAyhmGSG1F4MDRZy3zJ6gmUYR3ty25RcFBGZDh63YSqJbiem2SDyJ1WteDMU1VM8DsBhXkpSGXYu9wDx5NgD",
  "key24": "4usu3H1jhCdCw9eJr515BoH6iN5gWRhJDovFG5mZHtmKpBuwbNq21incMjddDiZzK3UNUy1bDZwaY8fhitzeZ9VQ",
  "key25": "2baUpDJmSdfBdXiKvt2RyXA4VNUP3UQ5Vz1UC27dkLjhtxLpwwACFaTFZrZ2Zv6RojrsiVrYiPLmx5UFk4a5vRqM"
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
