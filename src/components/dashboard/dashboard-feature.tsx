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
    "HYgcWmYGJoSVC6baXsM73Q5v71eCbcwFS1cJMkfqBn9k7Hv369nQyp2DvgK4bo8jGj8rVgTRAhTwsDeQ4s5DLWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zL7GkcHtkGcT38gXjMQDYquSJcaxsnNXhQqyaNFLfgCNtjtV6NYcEJfDUtJ74eSdLVy39N3RBXkRaxn7AtYZAx8",
  "key1": "2fq8uyWdkXCvL8nJHGBF2NA5KJXvPxbXBMBqMmaqh42RFSnTm9hEwp4xNForcGZQCRYdpdGQAbEojDxUThKVX1ec",
  "key2": "2UmxQR9B9imgnBzr912NuoqR9tMwGZ8CGStMa7zTqJAoDEidF3Aeg6QEmK3noY2FSAYAVRKRGrMQkM9dx2LZGjQ9",
  "key3": "25QL21byTBxdW573f6oLjK2ccMy6jKyrbodd7xZfFNRhhJ57ijjAtfMviRH3rdcAC5fxa4FDxiib3oZkP7d8wxey",
  "key4": "54PDuYXUeUSrtYF3hLr73yLz6nGbFCU7cBAJrFJzVfM92P4PTKQK5QfetLgTywGPHCzPQpWRULvHTnhW5cBgFnaf",
  "key5": "5w1UKo6ZYjxKPrdLJyVm7K3LbXNXweA9fsbKuQJtee22RQpRva7saAdLKXUjo1rBXTy1m4QANsgE99nrKRbJf9ea",
  "key6": "4bPRW4yAHoc6Ju5UR1wY4CQ8Z6YjEJaZFeMy2EMdNxkUibVXSmnMorYD1zEFBKKxr24MQddRgyPuNo4BWUw9gv5P",
  "key7": "5dVgraLkuJBWwor7uEtC9HuoX7ZPY5gAsaNVhPg7szkvWTCzYY865Kv58YopypTeJVs6NL47JL5NHs7gtfc8zFQY",
  "key8": "4WiiptYBBqyHL5yegex88RnweXoHHnfbt5u6nzy4HjsAqYCDTsv3yupKAgv5bhpKbNFUarki1c3zhxUECiQUZBVw",
  "key9": "61HpFPnvhenJ7YtDPKdwcv1Kea8Q2SDvLJGegPYDJVTwpfYJ9bsbFNfPmduYqW2J6Fd5mXE5uDUnoJ43yErrzo3",
  "key10": "3JrikxLgxeu93Dkn78A2wh2Gj7RFb7jXoJeJA93XCJfubW6fHmC5cqRSMeCNDa6EH4UBVAFCHxUE6X9miSphAmhD",
  "key11": "5MYGvPk3z3Jv6vMB13fsHcFptiguzcsa3X4bsDpVzgVinrTd3ovSewDGTebhFz49KassSYSfP1PvB9wRd68Kt75",
  "key12": "QquzgdBo498fRLr98Q25CaoLcDR182SmNDfiUAHC9y6K7KYnq3qKkSKP7tjuKtkLCbtF7FtiUgGjjU5dn7g4r3f",
  "key13": "4yCCAm8V54ekBjFtCrqHdnxXgY79PhACjDExCQkAVfCREujBTzT237pJH19hNJSo6RzXTJ4LYEZt2BV2yc3GxmhT",
  "key14": "4fjBy1pEy8uzxMdvxRWQavUqpGzhG56p1A8X8BRfeKnxU4y33auDu5xHvGkMc55xfeUBKxQFjJXdDFg1Wv4hPqNU",
  "key15": "5jLrBZh67YjrCrKmYuyQb53yvZrmd1Ja6TyrYHZLkoYwGLfj8VUxNVsBeAXTYFFRKW1jex9gpPzJPiLtLCkS6uXW",
  "key16": "5ngaWe6Kkot6TitfGe3gE5uzY11dukfEECqsYEvJorTDrE8EDoLksy5FNHabdWYW149d4XtuRip1QLR8wVgtZeyN",
  "key17": "2gA7zWyKMXpQRk27H6KbWHXfNNXkrTmeh6r1z5yjjKcUo5bRWpe5BdwKyYYLuAydC3QnZNKiqa8Z9gev3Vv2u8xc",
  "key18": "4ZdgAERfU7UEMy5iCmGcjg96YpVLUTA9iEBYnA8ehj6DmEKoM3foYmg9tWvquKAR8pQYfvHw21Aixo7tseZPBKQv",
  "key19": "5hfq2VPSTqQSwFZ9oA9tWoBWJ6JVSgLJTmJwi8bbDFZ5YopaoAT8YXsUmi2p5YhABgPtCraTRtqMnSM62k9AX7Si",
  "key20": "5NA8ZcZVmo1TquMYCff1eiijknvFDQ7nepfBMjZmLp9pJXVazyqiMzBNPc4nLhHrcJaDyQ56cNta37YALhv3EWBe",
  "key21": "28MwH7PDZLRA9ySYYqeFv371kXWMDqBNJxuw5xijEJpTZ82og49ggQ2JrQzH1redSueT8Hzs5ZNPrXKsW2NCbh5v",
  "key22": "35z5cUeNckiJgw8tRV6JcTyRDvMF7WSZs8PmLVMDWiac8DCHRYeNwm4Zibwk7iMZmBeog3uG1xr3LQb8M26naDGx",
  "key23": "C5D1jRK9fjton3LPhgNmvCWo6nzvAP1iyBwg28pieqP1GM2dWQWY5HQvXFKk1vvdoAJvgiHhH9PN8A7NdjLnygv",
  "key24": "2Ed7wDJavVeD3RHWyhbswT9cgWLK6RasjAPttmyzn6L17sDDXX4deVbfjjBEbnA1hTnU3kCUFeX71WvbQjaJqB7R",
  "key25": "B4G19TmXndYxUfg1QuVTN1QrvkmUFRiXoVLBgxpYpijXxj6ZdP9SyQyhbE3Lj8aAiFA5kGFpPEKGnSob5kXdgqP",
  "key26": "44Q4w3GAMoU5WvQ3e2g9oeXi18Sbq1jUcE6pExzYkPoyXoFudeDhK8co3gpjR6hZZ579VEydXZniVyeWUqwixZQC",
  "key27": "eQxmKt6g6XSNZceFUM1fSZQSaGJ6pwx6sfE5544bk5mR4pXTQCLzvcDEjXnyqoXJ2PviqRZitZuaDbo45mwmm1E",
  "key28": "64ZSMWzaVZMNV91hi1PeVvkjFahbMpKa1hpZjReY2mu36tyTCgKowYQ4t1yTvJb2M2U7Q6ASFeEM1sisPiEv39Bt",
  "key29": "3PQcdRnzaeoxvnxUeV86Xvg8PRY8YC9TLh83ASchqjvrHrcNmwEx35VEmdDpaS3tSvqPDmWbjVegtSAL4fEBnZsQ",
  "key30": "2pvZv2S4ugAyrvCoc69xhri8UdWZeBS1RFUizNFFnrE5K9Y6j95uBLDkZfySyZSji8iW6i3LFBgJTfNuDe5abrWX",
  "key31": "2yuTkZ7ELodhLBsxvXmJj3NGBCxvsC7pB22gYYEU3Q39XHipWsoaDF5FxmWCJmqaKYYdn45NKmxfE1bFjpRiY4qv",
  "key32": "m4r4CYJ8e8r3s3LWt634KqsB5nnzNeQo1ZwQYVDxDzjU8aqPDnevWY2cj15wQFuoShdWZiq2oGm5WDa2MUV1cmh",
  "key33": "479Qf7exZr7vAeRz4qZjfgpryvzXHS4KCpPwjwFZwDQGNPkns1QtxE9sTX7zd6QEfhPQFAjj9S7XAFz4Rc9uZjp9",
  "key34": "3nWehLzCaJWEMXAvGnepWZ1KjbbZi16aUsZtFeqqBfaGfBHBVSchGt1Pheu3fBP6v5sLeicWg2j1ozRNpYwTZqLs",
  "key35": "2226VFXqpy36jqW72G511GFjsjfu4j7BuLSJq3p5QMU9jZsEYjzZYpQKMvkp8FUf225pfkQ5JaAB1cjyUnH89kbd",
  "key36": "Ru9FLufyF6R24LrFVDYuibXF3ym67rtFDNZJuyiwksDRQvVtLy31HuwYk4oC4CEXcsSBwaJqCVAFx3jVVEJ7saz",
  "key37": "2foK9k8npv1g5KU3nc1192CjC3GpUvJ4t6bZgqijjpefPfxbVG5dAHan9zLwzHPzqctiv6ueip8NsZUCabe7WKzd",
  "key38": "3Cb9HixmLy1vt5yEpeYwFtqukuHqAbv8vfE7uXF4phtGRFrXC1sxnAudBiJLj3yEASCWDQRxRjcc2TUDJDznWxpZ",
  "key39": "3wDAgTZ17GM1wXxZr14kMDCynWNaAezXpAbJS6TZVj13x1c7sKShErMfu7vKz18jYWRUotA3vFmvWwNzoc24WmpC",
  "key40": "4wAatV2mJT79dP49pbuKp21pBJKNrjWyEogUqNfYs8iQS3aPtYWGnUPH9wS1TvXeSUQrZaT1PAgFBZkbNMRQgzcz",
  "key41": "2Vm8MJtSo2AsQG7c7s8LR4BMxjJoNLodmXkhLJfeZK9eXGF177Z9WkGjuTquTQPbC2XyisbDmgEGqSUh3BowGtJm",
  "key42": "5cPM3FNkqX7LRNTnj4qvdafnLhsvjYGt4txNLVDvnmy8Ypg2skuuveoeEkTMN8wpP7kdQxsNGnXxqu4jjPfkaPF4",
  "key43": "4cXPSakGHB679AETyKzfKmc41AjbwM1Ru4oN4qy17NVH5CrG9WmPDyFGvi2UP84gMtV5om6nRqPjbNKSw3RqEcJe",
  "key44": "4U29WDrdAfcuVpey5vYztwEXE9UbXVvkTngJfEwyETpEvBVo61v9yiSCdnQP3xwNAeFaNb5itbs3s2DKB4ohENq9"
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
