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
    "2tvCjEFiPkNkfxVMGZv9LWjPcxGT8vFU1K9rPLejMRm6oZqJzuFo8TtZpUEkx1U7RxS1dtiP5abViKA3GGpz92fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjUjMq2yegJ8GL3Vs4KReLQT7FJR1sgGzgbq2FuvWUW93R7Hduo7XbEjbDWXvm5RYMnEtmyKRCCMjrRHJGywvcA",
  "key1": "2qmD6pArEPsFPvNbnWLzsLJLCy6jFrK2ru4RFWG6af7NFyxQksgcZ1env6MZEwCSQBEUoHtCHY4ajw7WHHELY2US",
  "key2": "4KkTLfaZiT3UMDwjRhwioGpTt1azDud7fveekpjbLjsaZ6BoC7vzq8cpbBtjUQKCjYVrWcCiKfisnEE9VhHvnJL4",
  "key3": "2vEJrc6A8PY3csSAoQVD1q665qka45N9TGurCswtBABA8La5NME1V1Jf3cS21DMxKRta3WguZBHHC1foz7pqc8Dw",
  "key4": "VnTUr3CyTu278keWy6TRz7XkB7MsFKBDQKDJeQMATdahdUUsKWEFxt9cJFAHBASVeEzDdK8aiuNSAi4cj4vV5Yi",
  "key5": "2tEhiUZYeH1aY3J8BUx8vUKY6WLzpT71BdPbbwxpyNAczuV2ybSC3Dc8bGMswqAfiHehkCVk5eqDYZ6i591E2Dey",
  "key6": "2oFzXEenqHzLBPcHEfNhCeMMszBBxfx3FC48JoTB7RpvB8HpRXnDsoUsU8CsZK4sBCrDZTZjctYBXsboRJB3gjx9",
  "key7": "4RMKEgjcwLzpZ98drsVaMyjeJPC3MfH1De6icsP9oKoXZVkFs3XuFeMEMTGec8BBnbJ6VKHaWN9aPeWFkcQmX1Ya",
  "key8": "4sK1mEtbmGXuN1ndY1vxTDpyGKdBVHhgBWyo3Rku9oDRkskR15iRMUi6n5gVwe6SkmHGbHq28goX1Hwz3nT3xsrK",
  "key9": "65B66oaxuLFYEpmYXzMcJrTxKAfb8yovSjT364vksx6ugwNzmp2PGzMvVtZFihC85raq4ihFXKnJ8XCDqy47LXPp",
  "key10": "4Kr3gLb3nuAHp5qRA2bZx2Yosz8UGTcPqWyX2T3LKcGgkmvMH9aXQ1i1hpA8jUYxGefrcFdQsCEzsjZHtUFM5nFK",
  "key11": "3mHKLGJ6gy5wHf2WfejpzmfCPn1LFBKiNsi2dzpHni1dFmuuCrY6aAR7gEXCm2ywxhBpE9BpUMfmMNhKa967i3vr",
  "key12": "4FbNeb1JWx5QFdE4y8z1k4LKT8RBfDbBB3rQ4pWMHwmNtP3cdk7yrA5Bd3uhYgkQZj7s81SwF5H2ckMkUiL6XxDi",
  "key13": "37Fj1ASMGcQ6gQxsRowEen5KVbA6FDKe5fiUQD7rQsaHuzJPNUcVdoQkdqF25AcwHtbgZ9M7GK3Xr3JLTRUs2Mix",
  "key14": "4fTLkDCoxVkyzKv7yyDXMSuLrQuryLH7MvS5STffjMTx42sSLbBYJwyvDSehB68sPBW5dRbR6M9zMR4YnNR434rF",
  "key15": "5MDnGiRYYh2nwdT53BHmLqCNM7cP7LvnT4VAvjgntpZNvKTnhWzpKaqNrvuKFWwLugddZ34t8s6fgyUPbmX3HZVd",
  "key16": "2XJZctXeEhPkFXdw2ZGY87xC3Cx9pjhmza3UBkRoVgqHJ5AaEyMNbJciavSxiEkHJUV4u2sDkicshwPrzXRpWc8Z",
  "key17": "HqpHndrDYtGLUT1z1e6qDrnT3WZqC4iokoCYkPtwBgEvLSSDTbiGFy7THukG5JpGRrr4di1StNaWWDBZWEUiVQg",
  "key18": "39f2M1UyEkXDUWEZdeBbnj7EcupGnPPiPMFmoTj3VRNmki5Qo25BcM9k3kb4Lp5Eh74sdkNfXndC16muFpzAm7yV",
  "key19": "3KhWcgiPFaC1RYujPi7rujJquAJNLgC5q3w3FnGxPep8ABpFsWbRDWBmgfadPDvRAPpqatNMqs1USEBaC4dieKwv",
  "key20": "2zNYCMz77WJjxByCct39Ac3G4p6Q75tjNTj5N1Uo2C29BHnHfrCpUzieFKmhwMsdfNqbnj4uvPaBooc3a3kHph4A",
  "key21": "2YiKwtRCEMQiNkMv9m1fUW9Pze4pqU9shnhAMzDgdkDKAfcLWQd2MKnUJ3DzStG3ukiW186JAsqMRuPSv8YrSNh5",
  "key22": "9MRxJDiSoMvh4mP8LYxa2Lx5kwNgRPh2JH1se9pKPbLdubjobMWSR63BexFgKjoy8TGK7PjuU5ACbFvjkUGenyq",
  "key23": "3GfDHei1uD4Qygf4dqKMwPqkM2Er6PswGDgr9PD59qs31uv6GjHfNmKGtHEcBiqpis3qhPP4QE52q43gALGQuByh",
  "key24": "3jCmC4tXa5AEmuM9PWJdxZtFRhAq7uLxMx3frDEPiaZd8Epb5h7D7ibzuFYXh8NBaMT3kuMEj2cWLkRcNpisfSYV",
  "key25": "2BmTrRwNfD3bkiAFQactgmwK31VHN7NoCJPuExSe9VtKU8i4CQhzNVN5sEbtDvGZFToxcPhp1oBVwiNb6yjQvip7",
  "key26": "yttximTvwGz8utZTLxgJwcsukZD9XiRtNH9CHXiA7Qc3a8cQFvfxV3pDb7agU7HUwghZCEKmFrfR4wDgKnsHqiH",
  "key27": "5NK59J8ZuNGby2nisiTkuBHeBShgVzSYAdoyQGHSiR7oNs23xJfMevaviu4xkYAgWmebGWLNaEtVoHYcv4sZkP7x"
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
