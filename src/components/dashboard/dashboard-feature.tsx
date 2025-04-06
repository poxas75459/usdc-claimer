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
    "4a3GUwYfJ7NyAfA9wiwzRLMAJsXtb7nKqX8uupU32UzZWX2gYtv4v8kC7ZL82XHiDy88wijqdrpqrMA7xnGkxXc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWqiGTc3G4K8nP1k4DFznpQhwanNcvB18kznirFFp2DDCchzoHy6mKKq7GcaSqLbuMi5M9v6tNxZpKN6HvghetT",
  "key1": "3k2GAGkffEzohVRJhRLBKG2571bEKD42o12CU2dekEbMeNUFAoWUMZdeQVb5ASaKNhKz1gT3nEus4L5TyPwKWNnB",
  "key2": "4jSVj7PsVXabyAhCEhj2rxvdZFvogab9oED9duA8X3RPJGNgTuXmJZ8hRJ11pcpw7YALgbHz4MEcSJyTvAxnWxpa",
  "key3": "7Dd3j2K9eZiL6DhZjw7i18CXxqbQBNiVBFYDmwJUS1Tn96kPyrYpyrvx978bVRMfij67Tfnne4rTfRiqRoauvmE",
  "key4": "5ga2fPK7KYBQp2hB5sU1ek2HQNovaAfVR9cxhpS5N1L91TRbMyoeDxhPRwyp3mrMLLbH61vzpwv9HDWqSgoZGCH3",
  "key5": "N7eR4hK4tBeUDLGVtE8Kxn1ry5Mq9wVcNjksXRkQ4jy9tGp1byHDVJDKFH1zBgMF819oXgUTcni5VTFybvd889N",
  "key6": "5miti7LHG4TfrjN53ytUojojaVof4EXGEaSLZhBTqFk38AwiU9kh2AeDjNnUQrt2ZdkRy3P9vdvhUPMa3o7U6dGX",
  "key7": "S3DU4X1zeP96Qayh9ohL2AUsbRHsG9aijVJ6XGVLKoPB93SudiXjaWuKmaoQwpmhkAHqTPtucn891WBkmaEqvPP",
  "key8": "3vAyGGgzfZKwJnud8k8pWLUQ3S1RrDC7NJhkd2MCbgszqxsJRjc6A9c92byULUGZhEv4CZZFPhbTX9aJYEFhRTB7",
  "key9": "3e9p5dVKeNRZ3PfXQ4aUoAr5tk5dJXD1w2TVAj5DhiXzdEZ81RFYaDGeHDERRWbZQQLgao1Uh8sHw3UyCVhcnbZw",
  "key10": "5MZWoGsfZMoutgYMDtCZzQ3DWcWmGsuK8V7tvzeJnsxnUVqax1gYygdnQkej9UD31WEtyjmsfBJNjbiEuxjYRToT",
  "key11": "2nMJtaCcfmQr1kPo3hcKMh7viQXXmYzTbRk75ooeqcu1Ndcnpby9xhexFeQ4poxEFTqfV2bY9phBx9E4bNtrQpwm",
  "key12": "5VuLqqnpWMHnJ9BjBFF5ggu79VJqmGMwnC4t5J82WfGXLnnFGuHshpPeiVjpF6tCGDdxuJWnVMcdakyy37UW71dX",
  "key13": "n9oWgRSagtXsRRnRzSJ3otKjMSpHhj8iFvGxbCqSd44kUXoq5qmWcvVYZSp3R89V1hSeWggSpfQZHZ5bZMsWa4Q",
  "key14": "4FLmFhA3JkHpQ7BbC89aiyC4Vc2QS2BFooHiVCgjEJcs4UT4zX5C78RDuF5s2FEsfwBfw25MTLzNdcPRsXEBDRgy",
  "key15": "AEgdWnoNJsVprwS28rYuikdYEYNBJ5djoi4Dk2UswHi9PpZczmZNRkaFVmtkHPfrK9HsSRKZUJTGkES9UadPTjj",
  "key16": "3op2rZaDRcA3QZj8yDGX3XyfeeEZtVy3CicQdf7N5Q9bzMS5D6RqUvbMuLghPtgDdUHyzx62Ch3Nu66dafQZX9LU",
  "key17": "5mvoaUuUEAP4zGtQFhKAVJ6xup8Kc3mNnR1zH6rmWgRVYUMQ5cWkmqLFfDveWAx1ghLm7bJ7a8qPV3N4h2xEn7ss",
  "key18": "4dzZKUE8P6MVaUHNXJzgY8nzBDpKNXcpqsXev4XYL6AUafeNJ1Rhg8jazDksRm7nM5PM29nwc1hutnGrAdAeJ3qy",
  "key19": "43iihBoauaKdYpapsyGd1AUT42GA31MirgBFbSkYL94ePwNgYoEcTrYV3moT1Jp8vk42XpLfUPJE5WcAqq5FRZ9o",
  "key20": "5C8FFe5BUTANF3sGPdrnSCLTgKHhMUjii5jzTsxpDTKEcqF5v7R4aM4ndK98TVLZYyQ5czGkUKFf4NATg4sYugYH",
  "key21": "3HZhNuzXHE7XSpmNNCBs3jmRjKCHjUtESaGCWdfpYqDEwxzk4Fdxe6bVTyZv7vX72vw9qcd1E5oTohZDEsvLiGMt",
  "key22": "5w2HnQKZadwEULyU6meQTRSmRELVMrH7VANTssgkbcVZYs9osd6GRLuW7fb9YgNadhCtsCRR2hZFXodAd9X26psG",
  "key23": "25WNaU294dYujKYC3upCVd9cbAaSjst7eh9UsjYv7QjcWdJPEQHj1JVm7CYwYAZF8TaqArw6qjudQmKXhbRnqWtw",
  "key24": "4dG5nvnDJcYcowkLLJBzE9t45Ym4eybgXrdP77qcu4rVqjhSmKVym1ByPWjhw6EB6zmdBfa1epUPkDzsZC9STQdJ",
  "key25": "3qgAaWarF6JeyZqmCX7KaNspFpNF8ZRBVZnAxYBXmjoyGXD2bgTB3x8ksXPRcyiTwemTFnKYKLFGYBZ7UVzzkqdw",
  "key26": "5eGGEu35jmELx5PybNiYTe8Ympr2339ufexDoPCLFoMue5WX9EJVopjkKA5nGrnZZVooorysQa2TbZAqHWJTZWhh",
  "key27": "5joG8MdhyrYj3SebEcXcMQJNj4jTVA5vDH8ZgLxMPF4A8sa2X2jEFYKCcpJ5e1qqtfAT9QmLaSwPv4pLjz4T4sSL",
  "key28": "5BpXHw5qJdfn2YnyjQoEk8GXDnU4ftfjKuSpW5iDd372Ahvq3efR2qHcDpmVgFdzxAHUYxHMJdNEUBpV1ytPjxrm",
  "key29": "5BqZUE5ABznBs6wAWUseswAJamg4hf3tF16dU7FtsRDmmaGC64NQdLXp56KrvcZkrFXmuBrE4mrj2RBwSWfQMabM"
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
