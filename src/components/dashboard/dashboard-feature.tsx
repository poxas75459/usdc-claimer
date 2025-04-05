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
    "2cCUEsSWjhnxFs5BdmvHEP4Px55wHCg6hU4GADVZacAoZ7KNMVMXJmUxNLYHqiwxfSYRAMMMujVnkYtYEw9ocWiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vewy5Mmbg7Ft5zrRkvDpmPErG55ozAetJGyUfNebG7Krn6MK22tJywVomhpLZnKyGAPN9dAFzTWSu7L1edvnygD",
  "key1": "ZNvs8DCPaj7JdD7M3z1Yh6ZwwSXWN2tyNNGvMSUMTSjV4G1avDpk4zZGrvup5t6HtZxmnWUnM1ubptw6Y9XzcWb",
  "key2": "2f1jbeXXhm3mGnquaZyEuS1JBV8bP2FgvnqQDQUCgNJvPa8UkadHoGFyCbNVX3jUyUtnnyBaveXNUWFKNcgb4gTM",
  "key3": "4dhB9xtzXNE9aSLRhru8X13Tt4S3fwYRPvLjQehSi6Xruv2bgTXZN9XdCauotRtBELJRYEiTBqtDj7JZxKWMg8Pe",
  "key4": "5ADAHm7DGT1M9WADdWipcZ1PYujhwuKXoZS5AiCcNd5xUQEpnUvHCJncNDQXCtei7k3HhH9Bb9qDLtvvaMPXtHY2",
  "key5": "4w1ztKoFHXQyzSYjtygXSTpjSeFDs1wYaNbhVRJQoZZnrSQQ8SrqYAUuRPYN4Zs2YB7KsrHE1sjXWuV4eL3CSyZt",
  "key6": "2wgiGKsFKcHURSyoeRGkMVCvwHfLXZSKk9eSgRXUTyPc6tZLHuCxf8atQHvExaSpe3ictrZxzJNN4DLSYYEgWMn7",
  "key7": "5YttBt88TdQTjL1nHX6pNx1QnHXzdf3xQgJaMp8xWzpzvA7caNfXWpQin83YDtKYKyQKpNpxJKTwBVZDKaXXB3UW",
  "key8": "5xZxEda1MLy4esJ5ds82BwXFeY5JptrjK2sbPPk5pcgjMbL1rp4kTGrCUmes8Qye6GkL3qwHMSfgHrhYKuqUou2C",
  "key9": "z6hC7kkUVDaAc1D3adQwtJ8LpwmEDxiixjDyR9sg9NDCVqiYo8ZfxfjtERdZUfZeyLCraRmWWSu5uYgpJ95Bhny",
  "key10": "4Cokm3yhTGBfmLRYhhagTmzq1bxQFyx4kvgXajSEv6Mbn8JDwXxUUCq5DFFUJbcYNmkgR37nPsrfjQXQuBLb4FCq",
  "key11": "5kfDuo3651USk8YKwZhNC7waj9UmtY87LdtPhUc3gy9ck9Grqy2SNYGsku5xAdGxqk2kSzVaVq26vnwNeAQnHWMi",
  "key12": "5vJHUUTrQiKSG6MhHYm74YsURTyADdV61UuXAYUF1tyTvx6w6rB74EkrWvpayjsZtKUwLHeYD9tN6pTBrFvDYobq",
  "key13": "457NSvWPovVwFHNcqirYrpBH9nsJdJwTtYZ2EzEfBpcbBtf7UJkAdupEg2xStPSxe4mn3pDRSpXX2cjAEWCKEU9Y",
  "key14": "nyhbq18KPYkavtuWLLx83XAa1Y4jMRWtQ4p5wjf8UHFd1s4xyLz4RFpXPmmCN6DHs6mrzKZrB6u86sWKdCc9ckU",
  "key15": "3bYfCcRTYVLHgEKCU6rHKFzKXQ5bmzEPu15RXfv93guMk2ueEgcz9iSViVyEQoV5d66M6W6u4nNDW2YPkuYeRXwk",
  "key16": "4yzSo7YndQ8KPx1SwYcKsrsjApAjnu9CQB8Afj4A9qetV2CFeFtbx9AW9t6VQbyiMNtqPAfFkiStZD8pshbbNCEQ",
  "key17": "3i7DPZnP6AbNBahszTCTmiGc57av8YrtxwhXfSAmEqjJ6pjdmG8SaYRaxRKBJiiQiRDv1xsqxoYNtZz3z3sKpA92",
  "key18": "2ovdyrLHRvAFtbK6g9GL9VodsLjeP8x4xdEkT7w8gdD3BkHXBb44t7HYx2j9y6i4M6XVFZiwKDafbR8u9jK6Kvrj",
  "key19": "4pyf42uvBzHWdnymegVGu4SZLjnPRv3LKprPsvheRGDnhvrbfckBxaUSgqboDnGb6eeLoCEFANGZUYtddJhyFNgP",
  "key20": "WePEcvm73vvW3pKGmro792rbKQgRj1z18ptBVKzE9rWq6JqWm5A3af3qcidP8UMr3SzZHT1t4Lmxj5HG3y3e1UF",
  "key21": "3UCjAWpt9dngs2jakyxEA7vJj8moVMU3XRBthzpqdQP8z27mQ6GXG8y23aDtVQBZn2cfaD7pd5jSxztiLiBqTxCh",
  "key22": "zeNyVWbmFoBDM6JXMzz7EUS2vspnjVB8ffptx33aicg5wMNLKYNTaMfpKgM6JDZDMERZn5XjbNUNV1ge1vog4bh",
  "key23": "4uEkEhcTfgGad4mQWE2MMZS8ZATZZUEE19Utj9E6b2QcTf32NiakQEGzg4iJCAZMMWS6P33LobeHhYBXn4BkJQuq",
  "key24": "2nuAgTpqroFNPTUFWo57qCsj89ByhSKX2xFnkoxGRaLzEkmavLNsZhC9ytJgojX5gvk9yvp3oicRQ5VaTm1nJLMA",
  "key25": "63UbPNntB3gYFm5UE5VUk1Doj37e6WEfMFRephnHfuKLoXAo1YPS8b9K7wQ6WURe1uc4AmigrdLbox5X9vXG2fxt",
  "key26": "5gEajnLeziQEV8E3izaP62LQKa52TRemDBKh68zbWPa8kakziM32rjv2ZrUow2kac2i8sAhTyMwU2YmcDgibuVUM",
  "key27": "2faNfsDWNtPYWe6Rxgd9bZJHnYVuFaevViVAFpwDQYTNguVVpWXryCvGDwV6mhfguSNVYEtHSHAXoJZtiFHsMg6s",
  "key28": "29uweQh63LWec4aE8yzJzXfdDUpJZ4voMQC1YLhvQPZ6TQvqZrPc5qLq6kgbtUa2DshRYmZQSUs8omuHFPj5V7pq",
  "key29": "TQkji6dXuzngqzX9MM36zeBB3YxLaojt3BW52vj12YhxdFhyrNgQE1XdY7TDchi3ujSW9zwW4utrFe5TbjjP6NK",
  "key30": "3TdpeFymGbeU7vGJh1WkhPWoSSd6ZfWcKuqHyBrBfTwDoVSLm6c1dmC3zkaYTUGU8rs4Q83H9YG1RpiUAgJTEKgV",
  "key31": "3y6r4c39cAoZXtZEPAgJU7GX8L5YkECeG5trKdtzyzTF7htsZGaT9dMpHLsDbSfQQkkVDbYjqJD8HcsoQX1AbHnA",
  "key32": "MdpXA46aNXHCCer2eNdCA8AzN5cdT4B1g64tepfdpiwhVndmhiQHZbAgBdJ6y48GrrVET3hymYmgFLPLSkuMAUA",
  "key33": "23eUpXTLu2mbQqb2JPSfpWh4ViQys2dLcypXDSW5sQhvPGi7MfpaEbXUjf3SbQdzXBRexUKtaoExDiLCpf9AnpAC",
  "key34": "RWe2jdLB9g2vvk7JEZFBdnKWAYRaJJ8KtY4PxYADhHehZKyy5E8MWpwWWM1QiC8rRooyqBRewmP8uHASvW1ku9e",
  "key35": "3uxuZi1KxCDM8DQxykHJ8Zmftm1DXgz279hhAiFN82M4f7ReuhfpSG3TLB2tj7QuxyPHLhBm2GW68RZuMFif1dXw",
  "key36": "4vSFbN6rpZvCFtkJWFQ4JuQWLvWnzywuyZjn2grfqgzfMjAnYfZmwSMiQbwp5PtqicqgmCcvYA9Ys7M1eJQyXdER",
  "key37": "3HLUQ5LrDSPBqbmPxs5YuY8EXF5rZTR6gBwY2fK5gUpqKio7s7r5BghUaoKdHC7n2FptfewknqhDbcr5YuBbWD37",
  "key38": "3t5gk3PqEcNAN3cPLszBBx9uUaDwj4nmhfgK6vjnX9vXj9Bid5j9qLrCsbfySjHvR4XW6i31KV3rSBZTBPaZzcfi",
  "key39": "3PCeh5VvQpsgU9xfCzGVvk4fDeupyL9S9JKcq84qksbNaSMAiehFYDQ54iNZHbpVetV6XDWWDLqe7gAWwo1oRq52",
  "key40": "4XrboGSqyfSzGsje57LCv5aJxZiNqkcN6XAnfq1XEBSZbdVuivwv2wVgKK6VthYhK6roKUwSdxQp943jm1P751qR",
  "key41": "57detUFyeXWFbgn8SaAdbNAnDBuEnHLWaA5UJGbGn3o7s6GyqW3wmxighmzx1tr6uF4echYjyEpUGY2KJKKuwW1s"
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
