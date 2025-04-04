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
    "51Dh3BwD2tAcTr47uHHWgkCjREP8CKPy6RMi7RQKqyCDnEsCqD3S1fRuZuSHiFSFmiAj9JfgJMmyv3nodmptEKSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZXSDHTBhGsxYwHLF26JfAvndf36mi5whUCmJ5BB1zJfjREq5vPy81R4JcxV8PcQK776YR3ULwSZTuEYHHYjwdL",
  "key1": "5u9iE4aG2ARrkA7HxHvPUvT5JK3JKNmRaHJ1wi47KQPbqtfZ2nBggxvDjUryRhnN3NhM4dqp6PgzmnzefS3FAmRC",
  "key2": "46wpXEWJwq4etJtHF2RmfWcL2VRUQtVLeznV1K5jZkWWb8eCTrU4BgtFAdR4RAKb21mtbdzspHJGvGxqu6eHDmiZ",
  "key3": "2FFMFPFu4eQ2wDpHoHSgDLKfiqQU7TZwdE89AkzxBFPhDtRJZ1uh2BWwYdHE7krDdt2vGrdjwDfuJcVsfVT5jpCG",
  "key4": "3pAGUUNtJ4W4r2DQGaKeRQxzVwTaqU6xkBWBzJCKEfs7qtRbou2QYDRe6k9CEfnCdpFMuei2rMoHmS4x2YieNXgX",
  "key5": "545NeRtUzvexpQFR22QmmJH7b5Zz6su9PFbeBwWZbuREHa7hzq9E3MuojACf8rnqa2ihsF1PtReGwfZtzPNHcYxw",
  "key6": "npuAJ4FYp9cLrMyhaL3o6WEHxT1LMhowa4dRfgUN19mchsRi7jxZQqE6MAfDzyotyAPD8yARyTz797y8Pqsd5nW",
  "key7": "3biebYUu9iJRc1ZHgN9LH3pe2Bs7iy2sywKJCuESCz5RHqUuFXjzLPiQpkS5nXg7etodfKtXRpUXxcCEvBXEqFnV",
  "key8": "4ZGC3G4t2EPJ2A9rgfwH1fgog8kLbRSQusURqpR7YHBm7GcThaHBm27buhL8TtJ4SXofMsTFsZmjKH4CZZeGfMQt",
  "key9": "3HjNnyw5AK3R61xLeeG7Nf9y8yGN584TGpqdQZHvZwjtgQEikb76Ead2jhTyYc1AgKiR52UXa2dQvLY1q9AeqKVx",
  "key10": "nfZ73Ftc7kQciLM6nKrWiyEGbhjY3MuqcZvgG3EH7UHv51Ns9QVbZsv43gQdVcbDF6HX33i2tRtBgRwW5WoywDW",
  "key11": "5TcSZSVmZstkcyNCBwJtkCUb9efdZQ8kN5HphgYrVVwsocnvciWnPwV7We1wHVakghfmQW7ebRjzy9R4re7fzM1m",
  "key12": "rGr8rgQjL1qTinax1B2XHbEVmxGzrecQcuwPNqMtgbTm7Atr9S38esqyVt29usnKA8btjLVshJUiwAXjpsS3kMF",
  "key13": "353nqTi73Vs9yhUcfZKGXwZWLXejdEQYNchKyfTCYViqqdHCvHruAh9X44PcAhBz2uSoZ1nxgvf9VPYh2s46qfny",
  "key14": "EoW83F1YASSQJqNdmVQmfEQESRPXLJWbJBoyw3XJiHa9SJDncYMGnkJoqT7TVPgSXR2YtZ6krx5gtpMJZ2EJtUm",
  "key15": "4CmBqPybZWsiGnc1JPg7YbyKhAriYjSjC8Bjj963H3LiFZGwowCeMd1ojA2bU2CQCVGr6zCjjpQzDabHpKujEzQh",
  "key16": "227BDXZKKDQHsK1cL6a68PMJfaeULZxjPDtdQiARNKcy7QKjQ3ZFwtotUQGzp4wX2V2dPMcdxsmsesNDmCZ4qG4i",
  "key17": "5iW2ZYRH6jceuqbPgdWt5s8BrNaVzEQSkXs6Zw6fRirfKRXm3PE2VUyM1sKYufFdV9HUKhdd5PKiSAZ9wkw5aZkm",
  "key18": "4EbnEzHSTnbFJJeMCe5CsokfreKYv5KH7yMuRHfFBMgY28iQS72rCmbA7vUzRsQRUHMTMHZuY2d6MnrWM9gJYBK1",
  "key19": "5ro83QM6ZSCegt6HQ3ciUhdQSRpfon8WQMwrDMiGeDxPD8w7JZkobqGtY84K4iqJmi7hRo3CBCMBwkPyDKDAqfG5",
  "key20": "3HQoYzdbB2XtQPzxpSEJ7J64w4HjcaRsMewBZW8W3fEnry4CLG6Fy9tDujfPa7UYxm11ucFPz61M58xvXweBV9To",
  "key21": "3ffKxjY8QC9Ee3AApAtAb8c1zgArSuwz4jsdG47txnHhQ1dyfaWnPJSjFGs9b7JhqNYafTcJHyZedSeTvTf6YpTM",
  "key22": "p6BAdR1tWoeDSai8TMyh7FQxgsXdwGKdxP6Xz2x9WYtx8K3eTrJrBQLnGouXiyF4yfXCfdkWY8p1b5vUtwnB598",
  "key23": "4341Bo5N2M4eXkc2s2cZVUEKKBSkML9ruvCMBaCkPLZnYPp3KyWHJR9BxjCugqHFmYBqMkcmFCbZDsBN7gWrv1KQ",
  "key24": "5bxzu1sjpeLzbguJnNtnvP4qvmi47A2WSdShF9EzmvqXoq8f8n73C2ygNE9WbDwGKTSZdMdUrpUswuu1e7vpy3Yt",
  "key25": "25TytwQxESWpoQs1odFxgfZbQoGizKbh8Jf31akpWnzZu1metim37CSYVpQawTJA1FWJynB9gQnaSEVZuaQ3MuC5",
  "key26": "pCA7wh2jCtL3jXVkR4JLzVn91gfGYwbFYzDL16ZDsAaRWe15dm1oig1x37a6svNH7Rfz5YCJXkbSdNPS9eA93RC",
  "key27": "3QaCrR3A9HLXRZXv4vtiiqsKPCCGSaBxUkDqD4qrsuexg3pfomGdynUuBMQ6qZnZsFpb4TM7fE3JKoVxDnDk4SNB",
  "key28": "53edydmJhJKx1GwtYc9AAcWZ9BxcgxqMrhDo1F81HC71A2MXx2BkHmi63iWfMKUQHnhjBfCixrupJA7PENYSLU9B",
  "key29": "3GxhyLsa5BYnu4MxUEnsGc9QH4x15x7iuzfsySafzrpzJ1XUB5PfbjspnB4awRGchntP7hGtejAPDh8rt5MToEQ5",
  "key30": "3msQpjvHvZdnjN4rB8tq4kcSWU73DGU7DLQp8YxKzBB9oEBpvanxJfrx9QdF4YZohjSadUjgQaSwm9mDK9bXhvt8",
  "key31": "3tjpsACbqqQoPACcNAD2BmzxGs44CB5ufhLRpNpwxQSkfczCoe4UCyMgXuyC8c4PuX2d7bJyxiQmP4tnGWdZpUJf",
  "key32": "5DqwqJekr9hnnxoVrXVgJsSnCYfDQunjLK7Azi24ZtHHRYyFuZcmX49hRM7vcRAsmC4hCbMsCpfY6rsyX6NfZK1H",
  "key33": "NG1YCB8LH9bYLmyykJBriRbxHCuj46SWeaLLLT4KMRE37b6rFEhMh2AUFMeEs3JUwGhuPP1xEZKCRJ5BXhtmpXB",
  "key34": "2VfwzEwfdL1JQjf4uKtQH7CCeEEo9jASSQwCBJjcqqeTYezYGHKni1RBWnrEAauiwDfMUrpzCskyZyeUbhSko6fV",
  "key35": "4iRa6SsWDHijSF6cjc9Hj9GKS756cjEb24jR4mUU8bnmMTKtCNEVCRge8hBjLTYTVq79j5XfbDE4nWDuQHmCy6Lb",
  "key36": "2aNx7BHhaDT9Bf1iSS7GdZCmhV1XJCURH1qsbkmz1fsRaKBWnSSdAQtUA1Y1eh1A8gpsJQNU5PUptQM22Nvz29AX",
  "key37": "5MPK7DGCFv7Micp4EMPHZLYp7AkeAusQASSMB3z3c6LqWRpR6JeLsPQrYBu5nEQzmHRx7DpaNhHdZbthSA277h41",
  "key38": "64AH4m6D22KKHC4LyaSQQCv1RoS5KXdW7MyDnYP58t4Z8ENPeZS4oZ2JtY4ATZgCGApGLAZ38CEwVFdCKKdWzLuw"
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
