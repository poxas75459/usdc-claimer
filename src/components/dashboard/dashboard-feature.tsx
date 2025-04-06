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
    "3Hsthhs7qvSQxbcCYS4sNoechN4yMbgvtL4MAjvy4yrgVfGSgDJGk3GusoQuGBB98abDynM5dkJe7SnBfz3iVxpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yoV4RaXFRT5VEcUmoUQx2LZMFzthLecWSuiFckPYjiVmf5Acz3NKz3swJrDriAWQL6CKWLEzAKDt5e1C8jw6X2G",
  "key1": "3uqLFYzvf8dGuGzpkrsu1G5xXkpz1kd56kT57iCuv5zC7omvvvYZZK9k4kt1xibd9bAmGf7WM3KTAzbJL6d41rJe",
  "key2": "EoGsDYtmJyVq5dsC8M6aDe1HM67gGVmFRXYhQVBgpu5B9YVEva823ZjUmQHxFuK4CbXzS7gcszfzVzo3BgA8fSC",
  "key3": "28JFiizAihXQLLKuPbnXvbbQek6HHR3C9LqUaxq66DguomR793YzsmbcNhhnMfRRo52zNJPQhw7nZfd8sD6yNzPW",
  "key4": "26bEo8qUh2eiVp64NV7Q66tzY7Rg26uNNFxDD5EdHCSghzPb9FePVq6v7AxYTzn9YrGk7gCQMkVWSL1xaDj2qntp",
  "key5": "2yqvAAT6g18A6kBERSu1Gn5Cyg6Ax5dxU8At5J4NWxfJgdRKpn1P1WFjsrsoButLNFfxeUMJodve4Aj7JqZmiyzW",
  "key6": "5kJgWr2X31FqySAc4Rk8X6xgY2v957tcN5oFY3fGvoMtB3k5X5U7vKCC8rWQ9WWRFnmXWQWTFs7e65KV8bgvMM8p",
  "key7": "3MZX53bbgbARSDUYRP5gveJngdAj2Mqy8o2Bt4MvB2vtduTEpbLfwswV81Gy7vJDiWoisJGYWFNBjUNaWL9nei18",
  "key8": "41onPaW1JSre5dcsRQnyagc9Sj8VxMnG8uyMKPYkgCvpXBqWrezGogCp5Mzo844j5uKu3jVn7TUv4xJsVgKEvfUg",
  "key9": "57TeRrAg3NoCoF22zUPwv5uzsH1Vk65iQpuXXTnVrWEp4iJaM9WUnohuN1fJq3TiBwFiRust9zqo9zt23qWPHjWy",
  "key10": "38CfVSn2qoCQSAexo98SEhfpwbsMYXivyZWYF2GoMw5C5qeU3mRqf2kfXamcoR5oXcnBHXasUPGW2G57TU8VtURg",
  "key11": "3BJhEo9XD9tAi1M2pboYJuky79mTxw3Fa9GTC8waPiK49tewvJbZhMa7G484zVEMmWfZp4Zd2opSpeXjaKANxhpN",
  "key12": "2opmqw8dxUXE1D5Hx58dR3u2bDJKskxDv39vZB8zFSbfG7uxNe73wdbbkUixinkzCmpRGT3s6LbsMfRfTuBwqdQn",
  "key13": "2JEM6b7QbxJNcMHnV8RHVXGygxfXF1cJ78DG4rKnAZuMwK6rAixXy843R9gWP9MBRhG7d1GT3sm9FpkkkrJ71kau",
  "key14": "5g694vppjMSGcz9CmeFFe1Jndf2Xga5zTgXSJZ5oZzMSLBc7zwpXaizn6FF1nKRqAYLyfY4LpcqBauzyEubpbwHk",
  "key15": "2VQd1ubZ3yi7f9jkQwsCmgTHyoVqfSeRL4Fodnp3LoWnUW3NtjrcBXxpiqoSod3RNghn1w8nHY3d6qWGWRpqRaHA",
  "key16": "5Qqq5b2YfL9kptU9LvtixXLoPjJzRL8qm99mr3pqcH6gFKz1QmqqKdV3Umt6nXXSzDkUpSMXQxp3FgNoJxvy7D3p",
  "key17": "5yH61V9ESYKiJTMmz7gsc7Xm91omaC4Ti3ZHVHuRX19otDVr6T3s5boF7SnKhk24gxxhKPpkspZDn4GtgesvZNPG",
  "key18": "5h2LULXSv6jS3hGjGZCD1Ayhmm1Hmcywp9gj6vvmSzCXMx2aaX28FcLPUi4xDPFNad3vaWC1yh9Vk9PecZZsfCQk",
  "key19": "JYTu7mYaVJZse5RsNGe41u6uFWn4pU9bXrL7geooe847XrXCFikULYf515oWTaW79piya4pqeabGXtGEAg61WNz",
  "key20": "5jmQXBWjV2vVRQdGG3sHFDvQUMBcfVjSWxCP2csLTfZ67BbbpzL8dHjfLWqjy2yrgRh6vX6msaM1UJ5SwoUE2hA4",
  "key21": "3qRH21MRj63XoepfcB1Gv5aEiyw7Ct8Wpck7GxNbcjMKPhoF2wqTR2deadLj6jfqhp73hXLz5LByTZcfe5f4UVRh",
  "key22": "414eRUu5fsjey3qAzdZWtgJaz7ASK2Sht6bQB6aCTu8NjPsFYcG4SRFgewC32hiwCSpAGfHjm7LZio7ikUQviu2b",
  "key23": "4dUJyPBypJxVhph8HUmeSkJFvcyzQesXhDSR3ULcp6jzcLW3Kgwmestrbfyd7gNouVUSRfuAMQzCteEkGZfxfaD1",
  "key24": "56CuhxjKAp2cAA4ByNpmApEzRGnquG6xMSydvKkF63LVRcttKCWFX6VKBby4AcyFokb1E7xdPPTz6aNjJshHRAxT",
  "key25": "G8rPSMs7C2VtL4cdoc3PY6vfpxkj5Em5n17SqugjqPt5CYa58fdnBDokjMfKWVZ1R2btaCt9Y1WXg2hGmcngbKB",
  "key26": "2sQXFeNkXN8DmzFoAEGmJcEicovrMYgG6acGQgW9CJJ4X3nkpSW8B6htbNdRqZ2DRpwS1aKmM5pXek4NL9Zb1tvq",
  "key27": "QpeXYdsBsZdeSobjqv6Sqvh8GWhwU8P3wHMmMmRBb7PovmNVNNv7vg8Fm1gzG2LRDqPt3hN8kAm4qLw1SqQ5z5V",
  "key28": "3RxQAviRQdPDxwobGMqWGYwhEBjfwpZN1AtDSKG2t1f9DgsoxXNjWfpDLtQb7dLfDvS9qtjVh5NpgPRUnzkQe2dS",
  "key29": "2skHhEwk4V8MuRFC3eaBGz4xJhiaL2jz1WTW3PZ9ZaHF9JCfLvvRqs9LEAdgf2MgQEEKoB3WjqrZVGU17yk1qUe8"
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
