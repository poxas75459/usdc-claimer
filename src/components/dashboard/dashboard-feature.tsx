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
    "2SkTuiXxiF4N9L2EskSQUi8vZ5YctY52sPkpf1k3chEp4118t91xmJ6RVksodWcwAVNuWSxw81FG4Fi5rLagd3ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiFZ38r3aCZYZAovLKD1vSt8dVr4NTmXYzQPxvGq9HZ5zhSdvjvpRc9QczPQHacynFwyn58DDZ5hbuzbyW23VMK",
  "key1": "5ey9CQN5dQ89NR3jtjaypXUDBZEqcN1eacHndpWaeRk5KMVdy7t2PqGN2LQWWzhwxjvR4fLJQgeinQXScsU9MkaT",
  "key2": "4oMgKvywmx6uNRuL6R1aTpdkR5pJcwgg4jd2xLCvouKCzUXYnQ6maYMoTevZfoNk99Q4jSEaTc7BGwVWtX6tAKL9",
  "key3": "2whcR1fVYS9L3Ly8GUUJ1QyEZWNBr7UQkiW5tWD5gaq9satHMLcRryqr8xhy9Wy6k7eJcGfLv7kkDo7T28o89Lzf",
  "key4": "22Q1PRXVY5fbQeupWEDAn58YoaZBqXtCGta3pGmB2KX6GEDLpTeLSCmGiv5Fp3BKqUYmduPwiCw9mViphuaTJEWF",
  "key5": "5LeciDvZyMD78sDBLTuiYjnaEr5v8FCm6NmhnRd4eFEeYs7Kou5qnV3fqUW5Qm8mywJfNgzTj8nj4G8q4W3guSUN",
  "key6": "8rpDgiv5qtmMdZgijo8TukpVbA6CfoE7i5kVpZGo8QMHecwTn3L2nQx5x232WbmE2ctigknqvpkYNLoMgJQvoNV",
  "key7": "K3PcbBQZoRejKJEv78STWtkv1NHcAAa62EKTTknNvWiB46gSwQFSs6D8wEfqb7KRvgYWEw698D8QUsrJ9dMjtWv",
  "key8": "2yPyCqdHZTQyDuiqpCs3qrKQENzXCeWyeu5QUgusLjZQghr7hUCngjiSjt6Jk46KTgTkWbbz1KVr8unCrZGaSAbc",
  "key9": "4hTkbqPM3QYja47zTnSj4BGYE6D4WUc5KcesPs9w2ubF3RhGUfzb38DjpAHcS8mt7tbE5Dqv47zRZE9aQxLHz1fW",
  "key10": "4szDgz69FrEWeYGAq8HQ2ssPQ3z1AvHn5GdsguLx9Mwd2k8cVTZxmPRzGcdL5qAKpa9fuFpN6rvm92gyAJuwjTZT",
  "key11": "3hD8RA72kfN2icW9LhLPRaGQUUw2ewHThYRTBpph9R2yL4UirdegNAPmjDfFN795vnQbJGRZFtVau7mSscWPDUwg",
  "key12": "RZsU2vJB7cFWPF8DtHKUntpySxtkT4ScZBaRBsN2Dhz4MZh1Mq5CgDbhPG6T2EXbmghJ2wfLzEUxHQj8zEzYU27",
  "key13": "5WnKgrKfqhCDBDRALyvdnBd3sw9EGLnmzSKz8F8yiGPexYTZybLEVZsRRuPGLSVCaX1CnKnSwcHzKHM35Z6wqVV3",
  "key14": "Np8M67tjMF4p8ygnRFb1AHr3SWSz4hxbRy4DK26Xh49vhxMtjPT8VvVLSUumSPdj7Hz5UHPcpYULqhVVxy6F2iL",
  "key15": "5ireiYPcHvpri75c9jQjzYdtij9MUTS2FHngopFSvsgCELC6pRYwN4qsm3G8JBqnqA3uMp8HYzrDb5kxPh1fME1w",
  "key16": "5JdRzyoTFxYKHryZAFfuwHikWPdcKRC6TcQk83wuUPnjx4xrcoKgMFfLSHZ3MpnBtxsYx642GCaFgtK1XaeQuPn1",
  "key17": "2jQNEYnW2LEYnhCNCe3mzVmEyeZosDsMxTMgBfWSxAASBecFaut1tUJ1KnqJfBmP2dYMuTf8UPyQnUim4Yyu3gJp",
  "key18": "63t2bMsQ4cypLjFbfoev5sgate4XR4yQr16w8bef8BXsyks4SeaUiV9yDFjaoVuk4pGemtiM9o443ds7uPsbVn9v",
  "key19": "EGYguAuydijaCc8yfA5ipphfPMzMyndiw7nJ6URXBmQSGQnAaszKNp7HFefvLwy541UJfbfq6PPVhCo8SKdx9bn",
  "key20": "3bBKNaq51gnUawh1oiXirZnvpWyr23A14nBqt66WG4Ut4ZyFjZWLqe4t6EeNhNBZRCitQh94ayZcsFikHU6tbPGm",
  "key21": "5bKVPcASMgD5dvrTpgwVgDJqVSJwvosBSh3NNtC4AuNmwEHEToKXGRN3jqcZ2A4aNk3s71o6ggFG82DGTRq3T1KU",
  "key22": "3Hk46sJrpthLxuQBGXRf772ABEcMcnREWaHRiYHbJrUa1Wkk33YJJi3jvtnDwCtaJVxGDfQZJkqBvRsGY3zwfE79",
  "key23": "55s7J4JLL63ipBMPUYWy1MkQmjq3MURpnN3rMxuRVW8b7vNd8wTireeWTRMy1HZK2nwk28bU5DrotXtF7cAisuFo",
  "key24": "WR6QAtp9rxE8g5yQQS5V1EiCC9Yxewe7nnPbsiVzjNjKvt7XtSVSqRQMiRXP56ffU5JBMGgfZoVd2qog4htfRAg",
  "key25": "4W4FZwpRfksR6fMgMRB3inyuPPFHo9inVbGizf5j9kq4N58ZDjS1GCjtdbrfC4fCAk4T6K4aAU8kHnSc9fEkzt5w",
  "key26": "5LHj5MJ5yV7pAZEBTKEWPK5wzsBfPyUEcGGtfy9pN8xd8BPVJqHvbRwErb5bzXwjgh3YGir1ghgRnFuNT3zdiDAy",
  "key27": "3Z2z7MmxwKJZ91eMfS2yvjvfsYfZhyvouD6XkrAYUJvAPGaugUv3apFVxuL1txKHQJWNe4Fn9gN6Frz2CvfsobnK",
  "key28": "n3Zf7izWJkEQbKcUBPV6j7wp45zKrUKCy5jEJSTvJ2Y5EMpyedHEYwdGU5LzC9CVVo1nWBSQnUjyrekmm8kaFNJ",
  "key29": "5pKM5wCBPRnmzjy36pHS1raTjrdjx8FUXwFRkkqqNH7APkYkzt3ZTLffw7xkhmSTVtSqtETTuWZetnzhq9hisKK4",
  "key30": "5ygVfkaM4B7JDmtgpdnP1ptEPaJjmg8Hyxv16kaBAkZskjezXsdRzVtQA8Q42YQ9ZNjVGeDiuHGH9KZ1xP9YUkje",
  "key31": "5sAqGAs7aat5QNof4hDMsxBe5kvy5Pp5VN5DrzcyZJ49s7v7yPwhpa6FNPvj6BMCJBUuHavcgAZcYicZyiZiwms3",
  "key32": "SziupiQviH5ePdJZXAwXQnnVEB4NVWzP2matwZedzy1UJwUAxACEkfuMXuJj1FMFoVho865igk49osnNCaMMRsz",
  "key33": "2ZzB19g699xgnKJb5kmKVTGX7W6gkF6eSVHiEKoVZi7gs2BKrfNTjX4WMJhqxsFbZm2417TMqPkEVv2prt5UjHyK",
  "key34": "YpJMCmc1Vi8RCcBJNtgCFnb2mehLMt57mXgSVnSP8zFM995eoncj7X5v1wqJXjS6tweeqSQLYsvTmjt6RKv1TBw"
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
