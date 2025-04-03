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
    "3ds6VJrwqKtTxY4zGS9nTcSbu5kY4s8oTi3g4SFe63SdNH4fLQDVuHCxhpqTx81zd2EHsk4rEuEHVq8KkeSeLob8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27K8ZuJDDBLV8LopYsPnJBmMqF4Sw7pCJVGx1CVDDkHCkg5zJkpepJfy3ZFdAae3xVchDgd1ZuEM6FCxHenXZgSG",
  "key1": "3arY6XAJViD1kwajiNXFaddMb5VN2qC9RYw61SMZ4ENSvJ8EUvy6UBNCdoiuyUCTVw5wUxUKPBs5CyxSPibs5BuL",
  "key2": "32YqVP9hUrjXTqDBovUx2fkzbtSrdYBHNsaP2nc7hTLxyiALooKJ39kopBoSFkM4PhB62s3nfiN5mjALCWndfdap",
  "key3": "XPywzsA7xkJwZbrFokNf5KthfV9WHhvKC1Ws7jZqfsjx7FPWM9WpSFJp7DdNsTVJYcbb5xZtAk1MR9iGAYUNrHG",
  "key4": "55NYKeHy5V1H2LZsrJEsYMM7y8nA6UKJPgjCHG9jzcqeqQ2FFPyjnQTdjWqCYjNwsb9tAkFZEnRu4QeQfowfhHRS",
  "key5": "4J11ksLjnG3uNXHGZDw9g8ksNahaMrJQXMoNBpkVNdfWDQLLGnb93n9QmEiShQhkuXrsorpU7nZhhWSdZ6WmPzXY",
  "key6": "3bEXEZmmwcysLT64AaWxfpoV8nke6syoxFRgp7nzVsK9WcSuShmVezSDsx8HcyaXKVWNDbF7m5Ag9znBe6Ro41kg",
  "key7": "34PQRU1Ev1J9ZDhei3xb8Q3vBrBsUDCJdLbTw9Zh7Pxitu3sknYLgpAojfkkdLshxNviG7QTvPZ14BUaBhvEdzBo",
  "key8": "EutyVzKXkDDZZWtLbq7ctSncUkwoCxWwKS1XyZFzrK3YpmYiioZbqgF91dekGR3oMSWgM5XM27wXH7Td4rYBNif",
  "key9": "3SmPh6dwjgQrnZ4JDPtCJuG4jDhDJ5V6BXUTSieoX59KXkLPDrdXUNarV8My8Xh3zSVE5VFk8YbYabcpQQLteuJB",
  "key10": "ESdwDe37SJFKVxdtAjoyNENpR4og5Tf8apmh8NJhoEKnr7uxiRAzJhtiXm8KHdERaX5n46Jt1ojiQDPMxQ7b53f",
  "key11": "4i73mwnJbAJSUkGJ7vKQbSXqFzHYWwYmfBJY7gnHk2eqGbWy7c327ZvTz16LYNqDThHExaEnGLVGmthLi48DxT84",
  "key12": "JZNPWVBhomw9CMJXckD7okGmgskzVZ4aBTnnh7gBkHPm5LdTrj67ieZhWjCbDVSpTy3BSdgbQzPXak5t8NVXAbf",
  "key13": "XKd5r41Zpa2VnoTt6Ui91TSzGeC1o6B3pCbwatGXkVyHMnsiPAwNWkM3fv7bmGTdTxTQS47VDbuG9Uz9F5X7vpB",
  "key14": "2pA9kvGYbt8YGVSXgrhnqR7typU5rPduB37svtPA2RyceP5Rh9XtEi8pc3C4EnNniNT1ZhPHWhggpVPKEnLPn4wz",
  "key15": "581oUBg2fh2qXV9aRUpBnPdRLvSfWpzcpoZomChASxpEqw3mkh6mrPNAtP5mAXyyay8Hc8yiNNMwA86XELaNHJaC",
  "key16": "4WAgWcSgARrnqirjywfFEGq9bLcjKa9Btm1SCAzoMbtk4Tn86rJaWzcPiyHPhV3QEMuMt8iF9NmdKbuWZsE9kqaq",
  "key17": "4CKvinPsgxpJJEbYMtKrGSNYV5QDcNqs2aaDkTCFPTd4c2PNHe1GPecP8HpVkJ5zCFMgz8tPtZzjS4oWGH6dKae3",
  "key18": "51ncJyaJCis8mbCBfT4C78CdNy6dp11PphT7yn9aZtxnUKHqvrd2hLeLKiP2EabrZC48VrpwFekSfbGbBFhzUUsT",
  "key19": "Whf5UMiazrqcZGqXoCMMDoSUkucfbt6pM1Y9AMjAPDURMsedZs5A1aBrTk86rMGNd1DEss9Q7PmfNM6LwBC1kf5",
  "key20": "5GuKDujtd6ovnLUhR99zJZt4kaDsvfWwrFuJVXkZ1JstGZxdkYuosGd7Uft7JQvk6sABJ3dYkoDc1B7P2bRzszW",
  "key21": "2wdzywV793axZ5tWUSGvrG4EVn45ucMzyobNyK558M7Mf8LvWRher7MdVLvkefSFkLgXt4ivHYvYG95KpGLGXgRE",
  "key22": "3HgW73knnMUMRNkH1RoCEoH6uANfvB9EJbhmtZBtQ16x7odFJ2e1QJnLkbnvYasqwJBcm9neDLfhRmVcMtyvyiqZ",
  "key23": "3rK7ytBGTqsdSTj4NmLfhLTNgy2zcYM2nZNde6RKP31zPiYx1KKJoQ7TLWKBnWB3rntCb6a5XysNe6qrDxLh4NhA",
  "key24": "3CrPv4YR35xc243AQh8dkT7koyiQKPf8wv26CvNKUbv6TA5nozSqMUHxe641YcNjTNkXHNY94pWCZRSvN15cgSf",
  "key25": "4QAEKnAJuYXbCbUx3iByUbtRTZzz2kaY4XVNjFAc6Y9W9eASryY91BEweFNtMoq3BMnBo2Va8WVjdtYdnUZSwNXo",
  "key26": "5ouK3c49UdkVUrXQWAFdW1An8akxRjXSyahdVSFSdaHyu8JxLCuPbHyKHNXdfYJPrxW7TVMqLf83grXyf3rhTMbd",
  "key27": "4RCmyQvkBigwU5wvtoo657W4CLDTKpFSuKLf83FLc1hKHYu22oDUyn43Xa9hRobJvyG2Chij7W6Ve5qng2Ycpcu5",
  "key28": "3RJKxAiKTVAAS4ca2YdrHMThff5UiX58mexXJotyBujEMfRWFJJdernXt6LpQrcvZJc9HgVwEuYKjD86C55NjBoM",
  "key29": "4wVd5TWHXZBNZ17WKJsu4MJyyLCGpftizr17ro6PwqpV7txUuzKEMb9dPsYQw9zG75QC2dgSUVKo94hUaUejPeG8",
  "key30": "YLUXxMmxYTWhvgUPz5VaX1giRJknC7vmL2N9wByNwTgZsMXGKuneN6mAWG13aLoAp1TBvqPg5mPw2VZ8YG7vVj9",
  "key31": "2PsEGyNKoGVDiyh8hmgorakspGUHvzRH6JPjYZUvgGv2aji7jGYbeg2UKU6v5Djf9FJx4vFM2t2yGhRUFvWNCC9d",
  "key32": "5x3NtFufV9WPkhuumGnYU9V7ncdVYcAgUqfMvttazEknR1qSy7Fx3fo2ajQsxZtn2w3TaFwyHBBXNoarcb8o6WUR",
  "key33": "2AEhJ5DSWdvdVoCXQBbhx2vezswpfHUM3ZgbZtnmfCvfYfgowjWg5HAMHji2a9BVNEHot747idMSKuc66pM2c8kr",
  "key34": "PVoWBCPAFAddWH7JACJi9mJn9XXHwdnJDfEKCEFBimTXbfTPpJ5jwn71bJRzJ4J2VUmkaqrJgLXZSuSbNWysu6N",
  "key35": "3X55GQCy8EY3nLZMHZxZ8drWWdKmUWCgAExY8XfD7EL2BMf7fkhLXWntRceC9qQ48LhJeTuMqUbpg6FqAxeVSbLT",
  "key36": "3TeDFz6vrQP5okKkoaVsFRsQ9jBr74C4JaDgowhi4nzy2eMcYKoiPxUwwLsrxsJafgkYb3Xsd7r4de7am5qVLuvb",
  "key37": "4emUiP73yJ5ZpJBBzb5Mn3U6tAMpx9Ddv7P5tXFcH1VieqVymvaZUwRhcMGV8qcrbPnzom1YqsJ38oeYx24sbGJE",
  "key38": "5uQzhLgdxKVLTecKRqPqjtpSeHYQoGcP7anbAt5o1LNu4gnF4d9MULPSowzxAQmSNM3xRsC7G3h3gFYLBi3yis37",
  "key39": "4VNvi6ctaWKCS6ZtpVEjp7xsYERwKw1BA8Eiq1XnSznPZwV87iTArKuqyHPbfbuMta2UgpXWhDUfhRnBWQgGKDfs",
  "key40": "CW2sVzvno5es6VBEdw5tn61hCgcjkFsTp1GHdJFgmMwVv91S1pUi2WkPcU5C8q9yaCbtXken8spXX59c983CWti",
  "key41": "gAtQa48wum9wmsPN6GpFgAQJx23X3vFvRGiYoc6GJDgC59HpJjmTmGs3cB2ZEZTxt4MaZpJdEQDXgfDWNQ1aB6Q",
  "key42": "42vZjjmK1oWBMQp4vzY8vDw23xVv7SNSkdqgHuVvHkxuvfjKKNJtBDp2kBzQ866aGhRg8VhPZf4g3B5qoYNRCy5U"
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
