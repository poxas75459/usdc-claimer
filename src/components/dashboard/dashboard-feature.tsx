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
    "3uuuBNqixxLAjBXr16VZkH7xBrinjx9Mj9fKH8NGwhXRMDn1794U2xeXfR8mYaXuU56RH5bJCvjafbWanxdjmHzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjQcdBXwrzBi4k1rc57S6QZweUndmCctd2nFkrbQtZK1NPUVLzo669HDu9vrER8SwBRB2U5QDq7zs3EYejVPxwS",
  "key1": "4xj5KNudC1BJtmdKJMkXiXY7GUuevrPbTUi1vyk8rARypQXpypwC5roLbmw5yh8MktxsHfGJcSJboYw4AMjMvfaX",
  "key2": "56Zb5UjL43PAudzHgbwgJ1wBM1BqLe6jQz3R3CprK7QCvLN6JSgL3VqptksVrA8FVRk29CMNKPZhTzMRspZUfPQ9",
  "key3": "3ZaiabnFFKDtRHDE6EK6zpxCxsP3d5PcywiULvWTvDHnHGze1vqcMTUhvS2gkJe5mAuUHTY6Pfye6Dm42HPTHkxu",
  "key4": "4Mde1kwinhvVBiMmXiNyc8kwwHbMuKKMHgNjuWxeaqYLcpaJnobW9tkwo7nAJAxCZteH6JTgd4CSwoSzE3UuuYk7",
  "key5": "3FLixxJf5uq7fNvYsTqZfufzuGELrn2jUFdnrwCRqpUN96yYU6aU3JbgsKLQzJy6mqyotpHbqZ6mXgGfx7UZfEWF",
  "key6": "2UPLaeAhS83ahKh6PpjM8B9CYWxEFa65KkvDrgVezJSQdyDXRWDj3U74maSzFHnNkFkyj22pF5VSN7hrPAf12NaT",
  "key7": "2sQ3JgzV9VD5yhZ2xxxWUYoHzkjQkBgZmb49vckBpoSHu8N5uMWtPa7hsjtEMKkajGKkgMLMJLabrC22k7qLiFqY",
  "key8": "9UwZeknWWHTduBaZKQhLMJkZatMUH6mzbBHHRYEgrz4hDaw82jsLeqG4jwjMJbHKbhLd4aELzbXA8iD1iCLvzHr",
  "key9": "3KTwE9d7AiU5p4W5ZSRmHqbPoSwBfxcUJJjjccrmd9tFufQ3Dtzoz2c8AYagMVmPbgsosX6AtL7Q8LMcfy44UKbX",
  "key10": "52dBthyEhbaixeKTcAsU61BU8kDgjUHDdgTWkQ6N2pCAKJ6hLkqiTH2mfnngEoAQ9pCfEYY2VLSnxpd4tziaZVZr",
  "key11": "1SAArf35eeVa9yNfMZ5rL2hXD5w6VmhnPtHnRxRoDMmWWaYWpcCKznqe6Ydx7JmA9jHFRdri5qJRVjZ4rf9veht",
  "key12": "2cQTD7QkbDwrTH24WzRJHvMkTA2xQBxekF9f21y5j87nFqfDmZp6tcMEyShRWGAZEGRrtxGUfBGsajq3D6QwH5E4",
  "key13": "2KaPES62FQK3saY7xchkdT3riBSj6gBM5pdkmXaZsN2ogqcFYzzDX4RBChaxo5fau1C225ueYAazsR16v87B7fuP",
  "key14": "5YVF5mm5b5QQYv7gEMJP8ggiZsu3pM47CmKk2eQKQ6j4dR86dmMQwb7WNkbjb7rbBj7TQm2vK1LCvgsSipB1oGnZ",
  "key15": "2RR8F3HiChKLJs1U4cpgp7VywkefyJ7V1stmaYzAhfuXZch2GX2UvQCC5ddyBUo1yFZeiCrGSPm4WfzKHGT1Qor7",
  "key16": "3ZDCpv1JUuM4AWKR6A9YH87fLLAft3qG2bKp2zEbFAV1GELLkpbbddYUVCwjTWwFDT2KCbfbJcK4FWMXMQbyzjuU",
  "key17": "2SdwepQ8i1GQzwoHoKzX593pSXzbhknrB9Uk6mJoGdNqXddYbByaDiE6ipJYqFEGKrxiVY8D9zSvVc4PTGjZK7Yu",
  "key18": "27e8gwQp1PpP4b6cW5H39yUoSY1QKNj36NmAdNEPmtMVdaXmvAxXHvUZGHfXASzJzmTSb5fKcwMwFNZsMjF75c2k",
  "key19": "MYaRMz5kTwLWNpWcQrswosv8LqaDw8dWD9V77nRthce8nkn5ZS5q73sDqyZXKfLB6wMipQZKGQCqeU87iAu9qNF",
  "key20": "4PmHgK19y7N1qU4R5wwBV5reoSZYG5fRbkD2urkDVf24gwitgb1pQnDqvbECTfqts1n39h5x6Myj2qopsMEd45M5",
  "key21": "KRvGgwCg6MpmvtfBznVy9HmNzUMa8qyM6aSaQCeKmzFx8EhZSfgBRb69ie2Nc5qunYS2soXpAmnoGuoieqfa8zk",
  "key22": "4nNYv8TyV1m6G8SZN7efP4D1XC56ztzKxVeaiZGcJHSgkwU82NTBXX7Tk4hTXXReafetaXmLsc1xxrDWbNHA4PL9",
  "key23": "en3fnYSNCcxASgFx5D8yGZtxhF7KHyQhB7TKkB5HtYuVSCo1P2tUpgvmGd5Ab1QgRcYJeHcPDb6TAVWUELgKUnN",
  "key24": "4S3zqWcwBrFKV8XsF4Ane4NRMnHZC8VKLA3bb3Yy1u6V4t1ENELX3XbmWtDND3E8xEBrFWbjAqgoD4HH6HNF2Yxg",
  "key25": "3BeomurHkzHxoL1BERwQX8EZYsCgvFLnzuENhvARDAoLKWqhn1RJ7tbxbfQ9Ww697RgWb1kRMBSr4FfP9WC7wAH3",
  "key26": "2xfyn2HtAeCd2LHR91Ed9JBduzDoYQ6EvtKdEjsgebDMeqodd57WWgDopAdzA7FPNDiiGm8zXzyUF55MAuU5tkMg",
  "key27": "QtTokMbRYcUAzyWhPxPCWZJYLQ784eY6H8oRW33GTP4mvjAKEWSf5zZJygXZZigj7S7H7j5VcLoZckTYYZ6MMJb",
  "key28": "47vuqSWkMCYrw8yqEai4Q8eQau1XbXQrHrrmAMHc7FNQLg5V7RYkdMjZos5BW9C2pYRJKLijJSijgwiUesmRVqXz",
  "key29": "2NV39nqRiN2mtwahczDUDTeV5zY8m88QyhvnEYg1XhZfvDebUNctJmKPtigGKz4e25PJTbLzGUMnvTg4ogEhvcoD",
  "key30": "2i4PY3tMS1HmsAz7Y2eqfYCkVzbsSxdfUeKbX8rQKhPd7stevCeAyugfMAqv1aFs6yoQZT48AwpSziVE2UTTnrVB",
  "key31": "5jE6nCfhidMaz2wvssJao25qSFZ7cgfrLPkvwMzxTmCkMTKwgPzs9ofzLiN8Tx4HRzffqzeKUz16vzsqeZ9sCVzy",
  "key32": "5iBUD3YdMaAuwESYzcJTxsN44Kbc6xPVZeUtbm4BLYUMYyEFZKpYXUQ6qHMhGhmgHjQtS1g85ifsAjUSrak8yoAS",
  "key33": "ANrC9H2cygR7c1EtdzRytpJJWcfrPdbAxYBb3ZhgRbS6dqcJH7gTw6zPY7gfNiE6sEkmaJEP9vAQ9w29D8qVtDi",
  "key34": "24B3Pzc7wDEhsHzJCio6ak2cLtfbrBSBn3z9TUEBCEtKdHviAPs7kFhpQ7DfmSh5GnSs9Tvw5pJp7pitEyZiCtWt",
  "key35": "5SEpofzRYVAAYp95cZuD9tpDag1ecHSpYHXHsRhdx6QGQZPecUEC1kpr1E2mh8PWujK2Mj7MiBdyeD1L3LGWFaSK",
  "key36": "3QvxWr7twgBNJqjyNa8GbRA8GpkU65Y2LUAYCQXThPNbvo9XhrGUxNkW6CNXuJSvYWGU9658EfAT52PuA92E2gHS",
  "key37": "Ve8M9zUYzkWohFtsdnE4VSkk6AxxKThvNeESpC7puqsVfX2PAi8T6ciUyRAcmQPr9hwPSX9zSG4yLZcnKyJ86g2",
  "key38": "5RGmHtnhsKLJPNd9zLRjEhUp9Vsu4D7FuayuXSP2YeaBbE55yWv3z3cky61fD7EfHJBSpTEKprseFdpcSa5BuEaN",
  "key39": "3kQSRJRVYwffiWCmcbTw59ug5i8GiDWzf21EvL3L3fsoZ3pxZgYEoKY6MnUCeMn5D5EdtQViUcuzhZvY1cNTu5qU",
  "key40": "2GF3hzmpSAggEugRVkpgHswNyyJctnfqdGHUL3wseADorvKWnJKYEoHm7J7dcrZVQrCrP9nE6SpYKtrxSqZcFJpp",
  "key41": "3zAZACpPikTMXQFJxUhSayui3BQA7xeAr7aPJC4CpYNTChrsCgzQZeNAZMBNMjn7ykzE9CGKBZ5qjo1hk57u1BVX",
  "key42": "5PGd6TnRpzcEXmQaATA66D48JzTXTfFc7AJkwfyUMtfLvNFruDXXxRLYug7n7ntTyWVmjqDbhm4s4Z4kt7kAAsNt",
  "key43": "4i6nKSTUUkUhvpuiyGkarMHKViNbu8ZfpBmZGieyGkj6AsR4zWwMxXoE4UxNg5gNWvvYq5DMdHRNr9Y6JzSEwuD7",
  "key44": "4J7EUwuv3bLdw54ykXL4YoFAAa9wrdH8dZHuxaQgxuR6mUbEVUGjDdmsnR6JVqjqvsUYPpRDmPBVAqhuwzqw42mh",
  "key45": "37fx4KCHyepY54Hfr44mgkWcqsBcszhrpKjNNmNPZ8vH8KcohXhinAhCVDy7oC2GetKi8G945suUk5huL7QJQRHt",
  "key46": "3Suc8foWQFhTQM5U3iDpakwHkkAbZd2Js3Pgy3rCkBnmm51FXgZMHNqbSuqKfHKwLBMZvENGzgvEQpNSzbgUf7aK"
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
