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
    "C5rL9ZK1nMR3q4mNo1oE6QbNsur3B4Vb4ydiWWqGWCCFjSVjxstZkt6XjMCJoBUtWeZJccVREJApgoahFmUJf1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5js3HjecHdePvCTXeHZoAjrb9VHhLkE85q3AsDggD6u9aYcoSBJJngc9NHUgeQdwS4ybuKeCLYi9TJAuxybSkhS7",
  "key1": "2wMZU2D3aDi5a62ZqP7bioPLe2PQCAuYDaeVpyBBySM7Gk9Hz5hnPRxTySEKcwtjcizStkWBUg7HFJtoa3JP5bNq",
  "key2": "3DtiCqANX6LJsBuAbePrmm2nyFLa8cwkaGXXevQbV9M7D3ey2MJ8abbR3ZkRLvZfttpVt5NngBpR3nYG5kyFNQzg",
  "key3": "5co8LMUSaEfAq2ZdXXsgggbxaroZ6Gz31RDUGG71wGs7RSuprJxKairpz8EuexYDEfSN3QtwK97u8satjY2UY1Qq",
  "key4": "4pfumWargkLek1S9xM3MonKJ8xSFpxHaAEbJdCgVqWanaiYfb6bWtuhC4UD8AYAkaqf3S4e9DjYJyBNh1cyQcPGF",
  "key5": "2M52SuC14MN6K8fGLnpC2YvDAAHyXA6mJ2qmezzAEq2nRbnVPiMqTgto4WXRx4Q9xxTWiQSBWHX74AwrrYmKMauj",
  "key6": "3jQCer2GayTZ1j9KkDV53ZiRdE8RrQ6BueRoLBEGptoACM1PUd7Z8hGmccrkew3yBfxkjyP3e1Smb23QcNVmmLh6",
  "key7": "53aAvPhvEPnbyffwbuJkkbTdqpagnLxBWPKLrFBR7GAPWCmpHSJfzJsdY1J1bhS1ptD4oUQHD7NAcKA5bxaWT6hZ",
  "key8": "3qW82oomfm4U82nXD9tDQa8DEjRUYHrYCX6GiQVsnrvLpG8LNTqJaJuZmXQDbi511N1UaCz2oZKAXtjqJxPXJzgo",
  "key9": "7gwUiSWyATwGqeTT77kGEbkotu19JK3gdWtwE54SVexyTwRZvmm2JMwvpydjAYaBxNyPvd7MkMtDCFxwy8GbWnP",
  "key10": "4WaBNwdDUMS8XfyFR1qqFy6NRWqpTeAedMKv2R91enYppqgRYgx9XRed8kVUiAsAD3R33ouUgxWKfb5bhMrypLR6",
  "key11": "jqnN6wp788aShN3UXgzoruVNgqMEHf1HuGecWxNBUC8SWwyBJ74ChYoHvUKQZ3WmStuTQ6Gb7PRnZ5awJ7r6ZwP",
  "key12": "4132qfdqanontqFy3zUNnjptBMrpTTs3A6xGHPU8YKK5FR5P1y9crD4dUdEk42NXz4RPfPeev9ZV7CZfaPdSvMFS",
  "key13": "QCYvy3YqpdUg5HzuDWAynLJqQzCP3sSehRuhUkcw9gQr2CXZ78ZPLz9JSTbPqoFwhGs5CaKuUgovJddbmdzExTN",
  "key14": "4ULgc7kbLnmDba9VXAwP99KYiYKHzGDQ6Vpg4Rs7ZKUCKSRKCnNeBSXAUjueKZq9Gc2Etw7Yt4ey25scf5pkM7nN",
  "key15": "2mnD9z6H1AupcbBQSsRoWJjtfX3c1xH3ZjiUrGQTGJj2hsg2N7r4vKRHBfXhwU63DkKhiPtAHPo4Z9na5CQwM3nQ",
  "key16": "2HF6a66BDEgKRSyB9AKdtw499mGKFh9RNwDZpXj2qZkacvNb6mD7JUnCgRWZsZLR8tmndhDuZqt8sF5DbdMK6BW9",
  "key17": "3YQCQjiD6ZAhk9peiuc9gY9c43L5Dk6o3bUDDu6GoW9rP6H1DK2odEqm7wk2vfbdKffGuF6dXAV6P5bTvURWkMYU",
  "key18": "3bKh2wV7haBdyjuRmhL35bJ2o2ppJ4zUFTWbbaTE9HapJeAHxGjAet8CbzSVFfbbBXP2w3N5F3phjPHCNXnDujta",
  "key19": "2NXyH1r3QEhCcwMgSwZAzWsoEDTh4311yVxrQd8Ndxwm1UfpjLY3N939qpgNf8RHsrhQnqT5mQcntvPwrGLtBjfa",
  "key20": "3atHynbZN9paEm8fw7p6UvogJqwumFTo7f56oyCimNcv1ncU7htVnSYrX58mHtv31vJBcmfyYEYUjYU9KVZZSTHh",
  "key21": "4tFfUNJ4PaRLMBmgYky36RDQfiE5nzLiFwJEGZsriQ7GxwKf5dydcFzGCjRzFHaGPUGCLRyx9pE2iq8EaMJuRKUX",
  "key22": "3quqYrFUc5bLSaTzUfD7Kttt9BE3M5wJ7su95mWyuUZUJfbVM5pwn7yRoTH7MPEaBCUPCHFPxTZgXfXyP2boNDRZ",
  "key23": "3gS2nMGhJntLGinCX5BPJ4VeWLtfYTbAMdEzQUqG61kvPaRDDqxkcyPNeBrFEaW59GxxnGFr47G4RjvQoxu9peDL",
  "key24": "365V4qEbsqYYQRozh5yDBS37k5rt8FGcWYVykhZ3LA7diMgLDJ9pSbSKjq5rbSHBG6fSH94dqCDDG9QskeRGYAtn",
  "key25": "4VrogAGU3XWQXhkZnQ9rcryHvbdwbc2fQMcSLZU7wxy71qJU4BaMVq7zcKJS8WhpB4jjpHakrXLtgq4s5TM9FUKT",
  "key26": "kYeDU9ZWyVRbss9QJAifRhXSAyAqpGPhL1NCzutq5vMq9Fbxg3SQV4CqZMw7SrniAK2mQ7MPBdypXpQaDNaNdoL",
  "key27": "37wWM3myd3br6aTeD6FncCik9dko8by47oi2LGA8mFJwF85bE1x5mgRwRWrvg254chKc2VpHYdmXsqBbKRUKx2Jr",
  "key28": "FxU4rJ8w6WHQ78ra3dJ1NC6UyU1ksYH2N2BuRHijM2pGU8oTYHrSmmJ5RMhLsaT388Hg5V2yuLBvoca2eauc26r",
  "key29": "4MZni7YXYVRTMsuPMBqnfyjBe6p45hM41wnZifJZEqcAR91fYgKFM8csAJjvpY3giMGxKWu1P1962guevhKrm29F",
  "key30": "4idz68ueA2haXBLU4zqQLCk4qBuTFrdquQ9B4st2YEjc4u6fKgK6cnxaCzB8kfwMw44t2G9y8PrWoHJm41wpp5PC",
  "key31": "5HXAUsBn6envtCDhmnJKsbQuCHQTrVBhVU5V1pbFBTMNmyyAhd9GwFwuJxSZ9cLKdVASFCLv6ZDCmqAni3qCWErz",
  "key32": "4N7Z23dFnrQvBxSzTHT1Tv5aZpmx5YdVBcQXaqrAw61F4SK6CC9ydUH3BHrSSpDfGx1BYSMmP9tsxxgfnzHGP5xw",
  "key33": "5JvBAKVnqNyZiHMmzszbjLvhskCMi6KMtbQi7V5jZ3t7jHTKcHDv9oJoLbsDMzK6F1wqV9aYPrJzuKvotJQbetUx",
  "key34": "545nRj9bRTteD8nyw1S3K4LydMcMyNoma9tXpJfSvt7omceMVShhpNhxtpXPaHCPvAbdxWmv4kN8ivpLYc85MFMu",
  "key35": "4CtyZfzn1dRDtZGnpepwur9WBkiBhchCVSzdGegZCGongshmv5dh7s5UzygJ1bVhYsocdG7Litt7HzNq5Vb5bqAg",
  "key36": "4vzFPhzjNbtum3Q8yEtCLhUmPT8fM5QKHEHvgsmjjLADBFtyDxYZBtxh35zc8RW9xfbn1KG4UH4bwjuLCJAk9VFq",
  "key37": "3itDs1SKYXwkhQGigtPWcenwFG5LT7JeqQarQKy9cPGP1TLfTzDAzDrH34wPkSeGwnVSJCu4DdTW12Js1jfratMX",
  "key38": "2P194jVdHAsX5m83g3Ens5mPv7se1QcFiKVCT6kLe8DeQ8Z6WoSxh2FNpVnx387K99SPgyPxfZ4voPsCAJrorEzr",
  "key39": "3ncSuRg7XqHRFEvX7zqwvvWWfRQunuGt33TcyTFmmLX7aGzci1naqYKGbaQJWJWnvxcSLv2Tda72ZcXfS1pAVeTQ",
  "key40": "d4oWiQHpW5KwQuG27Wp5vrFctC14otTVAW2qf2rpS2uFU3Y6CLkV6Jwseuc7YMa512BmQVhJdHeNWye78auN5vN",
  "key41": "5NKeUniEHnaEtUSWWd8cZRVzW8ZKnNaqbYaHe2nCqgJrtViyj7p8zZvJHi7KeHHczFaLFEtmvcCC4upV2Uh4AdW7",
  "key42": "5pPVAMpDEiveiooxE43aufvpS23gsbf19kaRpBbvcxJayFucvTM18An8aR1c7maTFv86TMUHa1kvrgm3C9YyG2uM",
  "key43": "o9621SoEiovoBMLTZRNyEsbPbdgumE6KndjndzSkCG8WJjXXEYvkasPiAs1wC56DCSVN9MvFA7972ffRmzkHrDT",
  "key44": "3KTJGCA9MoTLqScjygUgEGTxXgbA6E5nt2FFiM7tyrXzQLtcjh4WFPtHhFhKPy944N4EDE9WV6H8R2gCNyGGBBqk",
  "key45": "2w297sovj7SN1a7i66ncpvcw7CWSK9rdVx269juEbAAdkpDyqdEHvDgpWYEy1rWzjZFPqAVVHk3jv2yMRzMzvbkr",
  "key46": "3DVAg8AEzZ7s15KgYJfmHxnSEELzdMZAGwYGDrPqCuVwkc5cKj3iREPoN7axUYHM3sQ5BJQaoo22bbKf52ZrNb4r",
  "key47": "XWAojmyVFhnX29VnwZEbVfBqQfx5bCtZY8xb3djEcMEqCpHuwkt3uZLvZBv87Y2jiwnVZvCt81xczwZnerFFsCV",
  "key48": "5stnqTpP1Pqhow5cbak4vZzP88cY8QBxVGW7iWJ1JaXKCqUMKFNZo27JNZiJaYBES3Ad8Vo5uVkZRecmGLWdKnp",
  "key49": "5yUd1rgfLo9E2VE5182nmTqAdE8u3vMHmfo81xw2vbqhZNr8Je3ZRe67C6k3uFwCKUjjojiE6Dum1aDwA6fuLKrp"
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
