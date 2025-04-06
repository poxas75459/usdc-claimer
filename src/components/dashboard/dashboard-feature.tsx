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
    "55wZYZvbsgSAUG1JtmiyTiArd6Y2tS9JqDBZoWVKeEiZPHeRULWUwwDqxHu2iMhBXvmQYYg4dSb2p7UeEuRnXmvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vn45Q8ugkTBvmvumiMtqrivAUCQyhRhJJvrBEXaP6EaodooD2iG3Q2h32KYSpkWezoeWNT7dhK4U1is69FAexgK",
  "key1": "5vjQSTkbJBD3Fr1NxkKm1mxAoh86hy2hJUU4fnHfZXv8zMZsisWKUajV2q1CW7PdXUp64ndkHegEzVwifWvA6xRy",
  "key2": "5cE43A7LMJsQRZMLyrSVvmGPp4NDr7gHNrCniJ88fKPZxLBmio5wjojxgzp3jug2re9wwvuNpdxgk7kx2z3Z3tou",
  "key3": "2E7NNo4ZsmE3ffLEPrJwPhsfC9zkTiS7nBXDjwCrE9LGbxgzkuWn6NwiWNNSCRB9PoGAnBZvxnNMQW7p4txT1ued",
  "key4": "5bjhV5nqsK2a4eU261cedyCX64kfLBGG14gDWCAm5GN1giwnQycf56HvEm8FqnGz4qYrhRiM9PqdFYhSYBVJHd4B",
  "key5": "4TZm4SUAmHmM4Bsb4nHj5GqYvhsz72gVo1Nwa65pir6ej42wpdo2JmPhGNQcNhz4zxv4whigGgZmkzSZE1QaM18b",
  "key6": "m3Z1mGQzKkjTDafHagowsXhxyn1ZFVsHNZgynQcfwS4UGhoAUeXLTf4Tipxvp4VQcAFK5DGQq5RoDdx6sZH3ujn",
  "key7": "2ou5Yqx3HszAVukkcD4NwnAJ6jHPjEV5PJ19oJKLPJdgjr5RPa4uTae3TAXz2LNhT1WSkRZojLrPoFWqD1mZuHvi",
  "key8": "2SicDAhv4tfwhSbiicz3MVPB9MqcyLdc8in8hRj4RBXf79hJKAJQ66dAzVWhjozJDG8MQkEMrWRBxJUPPozaoa25",
  "key9": "kK6cpqB7qwZtZqmupHVzFZTfRUTtHz1NqLP4LW2sHtytPwyL4574sjHEHB8CPmb7coiB9TzqiNeGyG23VR2v5eC",
  "key10": "tsN3u6q1DjnKabWqG3QDU2JbKTfjKWZjRVHoq1tEQSAcDD6iHFCaQcN31U6QEFv8e2Uk9GqVzxEffiqVn8b52NX",
  "key11": "4oDA1pTh1rjp22uGbXD1cJD6hhbcBA48DY2fKCCjFYKrRPQgD29qLNzcHWErVySnAw4RtnhYVfzjqtUfKzVCHeWZ",
  "key12": "4ULa3bRENj1AKYQ4PW1oGZwL3amVoiFNgHRnh7WjLWvpofH733ipQFh4NdThtSAYdbA3Zu5aZRJXMdeXsFBBFr2L",
  "key13": "2QxrKuAym2vSxfUiT2W1XayxHjMLH2mT8Sh6AGpVdtNybjdimSfygRw1h7RjFDet1vGv9J7FGuG2vDspLc7qXwrY",
  "key14": "2E3Hn8JwN3L8e9VCwixkxmdDgCF17gMwhZGFNwSx6GRsTMvNGctsy9nxZ3dUYG55Bj2iLpJydbsQrEk7E8Vydfc8",
  "key15": "3Rgyux4KhMXr8vZTVrmmKwv2xEKMxQhzWqDyWGfsuBQA9nkwJ9GiLBveKCVZSdDjZDyssQchMEXVoM6YMKkbL9G6",
  "key16": "3xTy2ebGK78b9PGnGqAgQHan9qEKMq8nigJrmCBC8cdrnrGyskjPTUKpA2BRYkqJGETeZ994eB1BF34dYKWyaM8S",
  "key17": "4FvWb7BApmYfgcyJ4hBE6PG9gmQAmZqAP1D4QCJY7mN5vCLLH5c1AtunPJ8SwpuSV3Wf4NMHvQKmqeJVxNM2TjVf",
  "key18": "bKRJQS2vMKxamdZQYtwNYcoM2cArmgy92orszYBPGrtoYRgNqigKDE2UE6km6PzwRXq9vUvZCohMMZPWgQTgiDp",
  "key19": "2BcwdrKarUGxHPM6Bfa1FYUFwikqLnar7nyVPipVQLUvGb6k4nj9iYafEBn7B9dp4JFQjcmwQ8yy6HiT9LdvgTv8",
  "key20": "2sNKXHr2H4GpHirA2VBwd7fYYMkapfVGbLgBPdacHFaML8ttUZz8EkQF9QSZfGewSeixGN1mvn3mwT438Rsei3L7",
  "key21": "5edQc2QNQr7zbYJHTe7rUKHWDHvWEx9djdKszo2U8novE4aPDsK8vXAwbtgMZuwrVKYoT5ea5WjdLd8uv3AuDuTU",
  "key22": "4EMLBMbuCiHU5KApGk6bbHRBJkYHuUrLqGMpbJXbQkvSd9S8xSPr6FPKz4GmvR8cdkLug5NYtarzqeJkebWhPpAi",
  "key23": "XWsv6GnMoDVT7qHbgzwY78KxtqhceGBmZy25YdQ4YVqjnk9BvcEjBGZ5ZtNkGY6gKKfu656xvokhPwk7PD96Sra",
  "key24": "4J4cpB4iTunreghPcjwf7n2nafCKxaTCKcgah33DCsS6caxyWg4y7gYRGMxr1tDLmCou11rezaVXPgq1d6ggebmm",
  "key25": "2EnSfPGrdUvjqMLN4FxroZmSD9z3zx8H7cBvyUxSXAP4fDHcazTa1Be289CbJnBPhZ35LaSrpz127f1n1teGZXt2",
  "key26": "4XqVnykWzuMFZVkx4N2pyM62Rv4i2XFn7W844EtpZQRHSLyCXU3ReXDfUzBx6L4vTvMQuaASDATjppBGzGm5Cx6s",
  "key27": "3vTwdzM5vBSJBgKtx84UfoA36mrukMDtqFRM2QvLmuRNqa1V9eYMvHjdHoMX6rxEZ8aX9RchNkoqEYNTF4og412Q",
  "key28": "511VUgdrywr2cpHapoTETsJoiazV6e5miNTT3iBxUpjvHKukjB2Zq8skQkjDDuv52fkT45p6tzQdWUjFNL1eG28e",
  "key29": "3Gzsmff4jBWUYJ3ycfprHHZ1ji1uWnYrovu2GxoCDXLKmuJwuYxJRvgs1LAm8pVvfciY2Z7J2Hhovbs6a66KUswa"
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
