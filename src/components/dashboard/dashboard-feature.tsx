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
    "3f5mFhn5KzLvBkD4aQsoYnoB8M9ZCeYx9CGbxxEa1m9uQ1dt4cv7isQfXSmJgkYfMaSx9VqujbFYAMZ93Avd2oeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fw8kD89TLtELh3pxDJ4xcf8YFV2Z56fJvtgsjagpH3V22oTP7eHQ4Nvpw5nNNULbLUoSAm6vnzUoZenBwoxfRm2",
  "key1": "45aQ5ufuk81z66RYD5Jtoyio36Gv4mqaFkPHYCdyi1X6n7C2vZC5RvddXXtburHhhhCP4fdzFzwmp7WxPuydumLC",
  "key2": "DWPuUzkWhTCqswpFVK5fmWtGposAKNmDBEZstxJ4QnPm1wYrg3VbJzdev6fH1a9UVH4bDZhv8ZCPzSGZ814ypHA",
  "key3": "3D5MnBSVZSQVLvRg8CzMM7DLTckKRbdzhnHN71yc2Fr31jn5tJU9dvL6TM6BSMbsLtbEwL6AKY4JykB1qrBjSXbX",
  "key4": "3VzDj7ZnAhttBdGyBt3thb3zx7nLm6SB6bRHE7pDC5ut11mHuW2iEPap8DHduXmsCmUECiM1qT2msXLmXRqFQuZk",
  "key5": "63F9Kvti7SkZ2edfd4vFuJtMJtaTGmnL4ysMPFYAoxVBbfjNEBoPvoFumxjFgP8TGnMcoy3bQUDe944cf3VdKhXL",
  "key6": "4NX3QMyt678TE5TNxtinEXgYYHhMnR9LxY9Daad56zXSsVBKXZFKZc7WsMEXeTh4KmGRWJGXxKXPW4y8M4ouWM2M",
  "key7": "rDYofPmGtnKBKEgyCcEhC5ekni4gasareuixFBo2AuZ9ZVQQoyYj7ZCVadYUaCKPy4T9MVbJmQEwHYDxkKxik84",
  "key8": "4pKdqkPMkxhoho9nyQQ2Lh1qmePjjwABwLr5iXP4vPbGGMU8cVpVuqiJs3kivh9SHS9FGJxrvwJEMYQCE62uz5DJ",
  "key9": "2ic3bN7Am3Mq9szFB7EmEGVz2e2jNUxn6j7FVHGv6NTUgBNyxkxkYp1ZTivqARa7rc3nXEFouwwmryv1kYRXhyrk",
  "key10": "5DJH4qFPhma4tJLjQKM8mK2BFXHgpA4ZgTYLfu3Kk4F2FgyMVnPQzX1XSxGHf7YoZ5SbVoaVcRi4NUFT8nkFwPk5",
  "key11": "5ptSpQnajt17sZNcxpF4J6qRe6MKWQqxFEqUYtR4bRZub8pidAdGrSLE39TTiKnQQBiTtoX9QBFfnFBbRS4C83A3",
  "key12": "2FYejMs8df8odiA5WsKStDihciqTzCSe4y5bY78LSC6v2ko2ZJFEFJWw6j4Eef5ToMnGUNWf76Nov1yvv5JmbREY",
  "key13": "2jVzrXwCyX33z7D2kwxjzi6r8WGGy7HKX3XNw5MwjergN37uy7NyLGuVFHhLoYp5rvyqdk7UMyqUnK2E52mf5fDt",
  "key14": "65PU9hxBpUwj4hY6s1jZwVSUj1cLYBoe5gQvAEEuaDrmVvGUCxcKfwa8aQg3LVYggwjR8UhGdSdA6q5SKSuT5iqY",
  "key15": "2zWF3dNG3r882e4GstGe4JWjZeMXFnRzW4F22aqgDvGyaYwNZUcjATA7ZJJLdaPfvr7VHn2PMiUCW4THMxb1YQmR",
  "key16": "w6oQREdQ9a4pxzpoLTZAVTPWDfAkdnJXp3zt58wd1LJSTCJGCi5K6e8UEatBJWsFdfhmL14QXfLogfzGHh5SVKF",
  "key17": "2Vf2psBnFVzoSMR4zUMcwsP6SXEE6e845awUJkNH1hrseKBFHC1wGrp2upTtb6ZH5GF2eWrEj1LsEpSGJq6eTRi5",
  "key18": "6642r1PQd7xWeV1gdLy613xFpDiEaEuLMuQAUa2ztjGe9C949DhYSb9PFWTusPq2UEB9JHfpWL8wh3N99Azv2rCL",
  "key19": "3bYjiWmJRUuByuEEZooooRkQDfasJgs156wWWby9TD7jTMvdHrF4z5omgkaXrCaq2RAG19bwA7b8QMFd5TCKbvcC",
  "key20": "5Wq2ztQtg4EjnA6tcEVxBUrntogDHuCvWN9op1Zd95KsDoEqX2AN2V2g7EUMaaZzqv4uaLYZdujGVn3MYEx4WVzv",
  "key21": "3xJ2fSqDBBfa6hAJ258R9AytDg5o6AhRvtmpQGH3sDgkCiWCnTP3jvUsMrehvydE12YsLLdaL2737aNVpysxFUXT",
  "key22": "sQDSi7x3htiDbanQbhi5x4pMDLAFVt3bwzk2k4xdvHKndbJHsvZuVsM2oQgVXYtTE861S8mrs8HFc6iNMGnYrof",
  "key23": "3mXmVoiiMtxmHnhebEP4KivUZFChFaf8cqWZRo8R1WfLR46gsWUhNb9zBDoLQjGYtkHDMSuN6VonskAWhL2tmqP6",
  "key24": "4N1gbmvroxqL2KnmLhR9GqspuQEFhpV48DEgxeBsTXsBq2HPXoqgrmJw8KbnWiKXHUp4zrpJrU8Wgx72d76TLzQm",
  "key25": "643Ss8WRnw1CocCtFVBiH6d5NV8G4SFGqxNtNZUGnZuqjtTn7i9zXmvvAfFpKngNQSTMXuv2qAFWpqr5UFbppVAW",
  "key26": "2FRwDgcSPJEVxhEznWJTdCjjT2iM3Nyg8MxENoscB79nMjoJ39aKQTvVBF87WviSaHb3XJQB9QfxvkjCkb5EWDkS",
  "key27": "kkWMNAtkNykDPCLgyruC8VxHNzEkjX2ugUhukxn2KjLuk9ENkcFHE8z9bn7BHERLcbpTbHK25ErZaDGuWwxuqhk",
  "key28": "38mfC8gYRegFkpcSWCFYZMDcFWrJLNzGPpVbc4ag1SRTCAwsqjCUAQ7J4C1wHHUS2FVTV6UqHseyLYDsQpkHJnHq",
  "key29": "Ryam7WoWJL76sqqr78BtmBm9rJyKvzZxUbEtKS4wJUJQ3h25ZPfoeSEP4rx26HtCrvkQkuQXzGMsdGsWHcR7Vxw",
  "key30": "5Zz9Z3TUqTZdNWUu4w95vPkSQMj3GpGqa2XHuwKNNDeAFa1YYxpGYB5PnYY2nVVCXGqESSBtM2CRM9WbnvYQUmRG",
  "key31": "Yrh7ceeLyeU9tE5FsS3pnjMNX6j4LRe7R7qo9ebSwoRYdHccpc4c6xoPr4vLfLgGEH9wJz8p4GBbQC6i96un4gp",
  "key32": "2hcA4PCF1pKSmdAUy5vFn91kzeffGabtJVj55MUspuDC2SHWg9HaF7bhnbQMk6CYstF8GtuNFfy1jUXQdidrpqzh",
  "key33": "ooDiGS7bJZFiRgZpL4Ei8xfWXintb9tsuTCkpnGZvUeS98eoxxnsVg3A1CUUXkqhoU9sX1MgVdw6UsTBwgx99BE",
  "key34": "4e39k3w1rwSFrQexgeV5TUM1TcrsK6dXq5iS8L7CwkmhuEQyGzYchimKb3Rmxgjqzc5EzaMzi2ot3KkoqmMk2wz1",
  "key35": "21xUBkJtsZ7TrRyXCBVd1ACv1naKD6hBGJUCPYCKGDjg5aVZ4VqG4u3S8cXAGAaq83KQBjD7hJGu6Mhe1zhzDYSN",
  "key36": "3yGSkPTQRuNbNo5RaNY7t8h5QPrjjGKfHAjup7X6WjJdh3c8nJhPrvzp3QLnsUErVzg3pdD61cFXGYjKsUjWEGty",
  "key37": "4ZNd7epj6xkD76FBiPERMnseet4dVRkoXFMVskdwVUSwjGWiN6mkVtPWHRiitbDg9gShSMQ4hzFtPVGkcJSVYCp3",
  "key38": "4rdare32oeF2TJPJ1iSCjvbx4CJHp24ipeHnvtR3SEsPvjm99kMVNcFwnViLjoL18Rnvg1X9Stbw7391tgRJmqr9",
  "key39": "2a3bfpM1XQ5SA2j1f1QgUSnSqYBwjEdLxhJ3mjLRoksBZWai7f3SGaJbmttLJNuYXxxuvWirAiECqJh2jH2tT3v8",
  "key40": "5e2VZwtzsucpTpJs36Tn3sdQFFvDsGYr8DcGhvqHYemnwfRABx55fUTEKRM8QkDNBiL4pjqPQhyTmJHqi7eS7sp7",
  "key41": "28uBUyKWmh9MaMvrh8AJ8n2LragUGKYhHqgWYgBFEQNDKqm5hDWCp6Gh21dC4WM4ZT2kq5c7ESJ9ZkEYq5sFkENx",
  "key42": "UgWrKYuf95qiUjziJi39QXrEuSVDegCSNVJtKZ1thEUSejhGjVw6CThHgwcivMWCA5NC55mTCnsGc2pgqc6LCQ4",
  "key43": "5j3S3R1DNKrFYr9JUhcR5FBtzs7azZnGTy7Dxm78LDHYFwqjnkRoU68jMHY291xDky3n2awW46VZjw9RA8b3kvxU",
  "key44": "gyjMY1NwvYr2aXvViKZFPy5RLSMGyxfgpZFKjvA4YUnJet529upHxbWsfip8f9miNgruB5FvjqwrK5dEgbxhv9g",
  "key45": "2qmHGiQE9YCPwQC6gBSnuF93LFa7pZbgmFXfsFz8iikPSEq36SNJEcP4Wj6Lb3LjdBfXVgHrogL21Gsh41ezYVhv"
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
