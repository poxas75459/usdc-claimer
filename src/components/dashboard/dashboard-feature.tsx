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
    "4vzW2t2UfPDn3KnTEuhjBivLUybYRaoSnnZ56piBWvFo5882fq4vnLwiu9HHRc65aymtEoc4FzLHwKaRijbEJ316"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46JkSYwsUxkwEb1wCRZmBpE2JfVDnGv2WZwq97inDEqJiH3JzeSqV3drnE7TSCvUJrNJ3kFJudmcRQybeMXBMaUs",
  "key1": "4PagnubsAKntcC1z4gCYqF9wFvZniR98ERh7SDWv8y1T4KnPiJQzrTxqs9QnRxtKtjphMiAFmK4x2F9GRDdgZQSJ",
  "key2": "2JTA5jW1T1jjkwkZdjGn6N1xJCsZKpPfme6vVH1GaA6V4faPFPt7rdgfF7ohGVNLrhJFQyo2tCwomnwwxXUVgh6g",
  "key3": "36T6qhm4Re8UybjQbnDacre47rTggYuFwiqaBUEoYvRP5uF6o9fzw2HKneXK4Ucq5q1bSqW3YzsWXxrHS3BgkwjW",
  "key4": "2q6YN8etitcPzQoNUEfXyy6jSxb8hdsJ6tDBxaKkN2UGNpb2G4ejFhAxZ9EEm4Zfoo7FMovp6mX37U37ENRyZW2B",
  "key5": "24nroLBzS2fjWRD7nk8u8RzMjcGHe3ypBmNPgoxdVDcujZgWtJPh9orCGbekfNf1FuR2m5Ypy411czr4FyEquz8f",
  "key6": "5fx43qyn21scRwz826NV7hRdeRcbU6EEgHVPpbxgz9WFiFhgEfsnmHajw4EXkXkapD7Twb8TbyF9siSatVtQRpsj",
  "key7": "5WgPNfVmMNuXbxkefLAU4ds8jwP3R6c4dzMwjZi5zZfY4xmoxFah6AeWWMQgzb7RNnoAsT7pQwu2BQn15bGCVi1E",
  "key8": "4qV5h6mPrm79AwiYLNqXGJR7wEkL6no4PGPMuCyZSgaL3f1KHRKw9YWZcofWbS4Maq5Dcbi3LX1gvaTbsipLQvyR",
  "key9": "5mTQVf54vQY7EeFQN4jBtQiVffNsbZmB8Qf2UacgCKGrPcGPMQ7MsMdUTSh2SmXk6UgV9xdp2tKitB5NgohL2fxi",
  "key10": "4D9PgrvaiZRoZbosEFbjgp8GBqH3VHaMVhcS8B4JnyCw9iwLbG8KkNzTH89Hm7mmm483cjNkpHp6pRGTjbGGpA3y",
  "key11": "3ZCTuBeoFi86AJx8RKh4PhpPj2uYHpTWeHwMDJorkBsViZLjN2sKZ4A42zS5wsaNGbZy3v5embEad4rfZWScyvJL",
  "key12": "2zzXvLiMn4hwVBTGqseRcCDH33fgFbkncwAymk8PGSGJZ5UaL6xypT9n2F9NGrt1fU4eSs8tomGxhsS4tg3K6ga9",
  "key13": "34aBrtCJEP4TCaThHPF4Z2n6qx5gzHMGpBqZQLgPzrA6XaC7iSGZ8vDfkEJNtoZejNrdBr6FXQVNQMHrTErVRbUR",
  "key14": "27PZHkzKCLmNRe8XujAVNZKJHLjp9DHCWxcWEykpVetqrPqnqciTwpmy6DopDxYBYdENzSntuEXMVtK1ui4QnRRX",
  "key15": "4UMsii53HoqRj9MXYriBKXTAiLSa1gFLk7GFVi3cnERKM3es8wvCjufoV9vsnWufxAVaXynnsmjHM24PAZYQ8B65",
  "key16": "5awLnZVa5RsuQMNwLvL7xho6STXSncJDwp8rWAM8w6212bJMTW18pXHH6WrEchN4PQdWZdQ18EydqHhuh9TrweBH",
  "key17": "5wen8dLhEZfBQucks44Uw7EmKd9oHtrkMsRvkm1A9ox3j5rWCMnMozDu49m4pkWdoezGwf3dwqGgMMdYc43e5eXN",
  "key18": "3bfhXXrjYUoPgLcow6WncABwUxWgDnEt5kPp65J64CMV9wYFotS2WLW5QEBskgfBSVsubpu9wroyTjnJos6haBph",
  "key19": "4xLxqAoofVMPAaE1Xr8HDzPPQCenwGecDVFAKfg6YnrZW6x4Be7CXBXaWXVyWB3Vg4mTemh96eeXnPsayTNjHKXg",
  "key20": "38jg6hsv5bTjEJwJKF2jpGrWMKKFx3SHorki1aKMdE3mW8mJtY1w4ZLgfcuMXPTmmgrtsRyJQazTYjkA4wct1ueC",
  "key21": "5L1Hrtg4TkGGpd6t8QrFMTcyCawGETYribp5eEez7BATTV8bhGTJA5ArTTrby8rY4QM3ad4T1mKV9Ka39rotb5Qv",
  "key22": "4oqhCBUv2QCmSwHmxznrhf2ZRqtnENjLVTM3NiLXdDx9jxCignNexyWNeHX5mKg24c3ibtZBZUo6mqBDsxXoZM4k",
  "key23": "5oT9STC1BDvi37ug5dx1DLGin85UvR4KHcDMUZSe9BNs7rnYk38UJQ8FWfoxMXYVCe6J6tRPs2o7FALVdUPdtGoJ",
  "key24": "2xyy7196h44epa5i9RoeGuPgujdd6fj4NGnHSC38im7MtjhvJcrquctEMGrEwN8gY9G9jipZQws3qQNw7GAe2yxj",
  "key25": "4SgtP4rSquBkk5u6jsfdWp4qmP2pKxCkBEkJbmMYxxyHozSPGgHgEZmbHXBCoteNfFmfBHr18ECBKnJhFXsF8K74",
  "key26": "5tH6e8dGWXCcTkawpmboFoBg2ArYrvL7qHkrkqGgukM46hYCQgHEbLPZdXCAyC61qBDPxVrwCWEgvUEu5PuA1szf",
  "key27": "FYDcs6YAs83HEgwcrr46xU5hKVeh8Ups2HU5iKwCj7yMvsLFt3FPuHRKPMbwky5Smw83TBABFB41T37LoVfj63e",
  "key28": "2EkCUaePftqLgLNXQSjgYxnn4KfbvjoyPpvHmiaXpzvekdSGGYrdrRMFCExGEsxobxuDYFUCkLqFzL49bicG1222",
  "key29": "3VaRENqo7efmtS7Q4WYSfsdH5yS1xWQjJYFPjxAtkCc1Re22AsQXtRNLzeQiGbxxYK38Ffhk2uQbXFd7LBZ4146B",
  "key30": "2Pp3WNZWtVMAv4E5xBxfwd39eHrwV6PWMJQqUScqoMr7sqS1bo5gq2XjvS3H94xJHkWgHfdX9bgoqexhqVLhc9w5",
  "key31": "NDRTUmyLFGVrcJbVCQ6Mv3scGEXZ3LFMRvEX2wD6XqRWjvRaode5AnJcfATszrcFyjsNT96hydn2C4dWa9QAG8u",
  "key32": "AdN367YwAs83PwUqXRMxprapxY8aoTSRKnVFULuTjbiSzLvB5U5gEqeYkGAdAZeNRKiPLkz7K8uciovzoVrddJd",
  "key33": "4ZPfzyBiXorGdu1XnkxXXMGW7B3pEEBBzd5BfoMmzfzwyEqLJUMJZNLktJRjSWex2nxF1tdpdkwGgaLp6MdwPkd4",
  "key34": "2T9DfHHvaTXfKcA6hfZg8y7GE9QDE2bssqT1c8jbWdyCemAW9pEAthB31zZN2e3NjE6EeffMqGa4LXNqRw6TvvRA",
  "key35": "3V1wz9yWMhKNxyHT434QYB7eR3eEzQz9isgewQNqgBKXeaysZZdCPYMiiCcXVni94xqRmUtxxKu3CeDKAKKsa6yA",
  "key36": "4uFn87ReRUA8hPGU3NXCtREFmnAnfa7KF44DbX295HVqcjsvoUgy2rx7v8uAu1WCGZkSKiBAP6GgoYdiRmYCrE45",
  "key37": "jyxGLvq8MDWqcaJBALjR7fzWFrrtiD3kJqjLv9fAfrBkuurVzLJbHvb5yNSgtNTUER4cZAEjerDgtW3gHvrC1Hk",
  "key38": "5QXqhSUq1kMfmpNM7FUu8jS5fM4ZntNNThRG3DUwabohHFNfaFpxK6epYWPFjdtKb7LLB4TDJgSid4Xh1ZmV6G1Q",
  "key39": "4ioooRgB3gYh4Z1pa9izP4EhkTbPqHQ9vpMXFT5pPYRUGXc2Aj4EkfwpUa8nh7HQ4dosX4oVMCcvAi4Fw2fdTpNy",
  "key40": "27QzTLHNGbTbdtQ7yoLBTkrv6jn38sfDEHWfbQyWF8fGFm2B2MTUvf8nEGvh8vz4WaqgBvq21jbocCHHsRUhcLBj",
  "key41": "RowL8tT8PXXwmM5vGdYQcchUCCC98emtdLLyxxkHWqkUMepDBZ8EqNmGhKvtyheUH5FtQyQRuCHoECux6mU9ArF",
  "key42": "3iJPUD1SYPARyCiphGcepiNdP5LiCGAqM1fqk7QzD4x1Ta9zLbnLzFeC5HdWMbaTQe1ynn5x2k5LbT8uD56UTD8g",
  "key43": "5z6jmx9TCwedr33Q9jUTkWoWoauapficctmDtiX5rrWdEmJUzp1BCGARS9SVJePH2QaYywR1Ji1BSDhS4qPf7Nff",
  "key44": "2zFSztjF9GL5jE7igUEPgVWCL3ijKG1mbQsjG3mYCrMdC2GKuBUec4sBoo4ZVXLjtQ93tM7unsMw4a77TGm5ZEuu",
  "key45": "5Lt5JDAaNgSvWNFPeCYFk7VCZo4P3wJSsZS6QTCw6sr5ErozS5NuV8swtFETGuLLA738pLAP8eqhAyY3e1b9beZQ",
  "key46": "5UWkx9WjfeFK8b4Nkwrm9kmaG4xwVAU1GTHbeDF1u4gaygDuReyhViWMw9LBr1uAbVyrpbRtS7rWY7CYvJ36V8ii",
  "key47": "3F6CKkvrLk4kHuYNHM7bjfcjdavXMioW1AbhqrPTM3fc1i2XXW96hxfHzaAaL4kB1VTygwHjCXWy3XWUYBrHJEiX"
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
