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
    "4eyjAwtC89Bmaoamy5vGzqj8v6FBXPac1BXovUEZai5LAin4u2sGtYjKAvG6kwZLushUA3SxE5S4gVqL4MBbgP35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g1Ha3F3vAMEwSAV58FC624fUt5rFGinB57La9Yu3dkcpoH5KahwGXdFZDW4FxpHFAqiBU43Vf4sC2gV1dearqqp",
  "key1": "4KbKVfGpKyieitwHi1Fip6dq5NDU8L7BevpXRrXFCfpNud5mgRzMHXqZHg89JavZPVxLCEiE3qrgSgq3vtAwasoQ",
  "key2": "3Fhc4K7vGVAz87Y9sw4yVRy8QxJhZUEtML1TSPtUiKRzaG1JFJsvLJuYhDpNbqukirT83tqvizYo73RsaKmkFk62",
  "key3": "4wVX2aRhPA7G6a9xP3Ei12h94m74oV8mJcWYYitcNf8cAvfZ8YXseNgVw7JVE2t9kxfqqJw31X6PJATd8GxXFHqE",
  "key4": "29vT9LDzs1AbW3Sjf5rdCfQSuyxe6U6KqJ7kB6uPc5Lgc9g5AV4z5RiVZitArv2Go2ZiFSEYKQsTz98TLKeYMWcT",
  "key5": "2daP7SKVtfkmqfv4T7YiAZwBdxiX3crHZ97qc3Xh6KoXWHpSQiY2wmQ5JUrbNAgtBUjYeYyvdLjD1B93uXyA4aYi",
  "key6": "5J4cp1dD6QhKtFTWwvJu4CR2GJzKHWhEw9zFKPNrovWmdX54gbFP35JE1ToKUSJoP8mhQywDxq7ySaGHjXJ7gXAU",
  "key7": "29YqF2PgsENZ1LxvdUhWES92s4UaRT7j3AzDJhjSxjhPegNmSgJSMrH2RtsbmUdP81XDw2mXQ1DCF2oSRcU2XysM",
  "key8": "4B3jeut3KXrXYmrDYLR3fpD2gispEm7sfrUQuzbDXxn9btuuAFus5b4zYfDPGbmhYyfqdZHgQu1rb2AiH18pPcQt",
  "key9": "2tWeuDBHtfTiSeG2kj9D26K94wZ442biqrA5ky1b6YbbcqTJZ8Vy5MJan9k8SmhtPZDhuKuYxNy3AwUCFfDzaxuV",
  "key10": "uToN6Rn4T4PCB46JVyBzDMnHyCB1o43mwEGvKGXFtrZViumHsgivzZ8uA5aE34yoy6kWzwgNgwkkW5irDPHf9Hc",
  "key11": "2GacjdBbTV6tipZxYptZdABxojHhFSBapSW2ekhfoccBPUw9tvuq3zxfRMW2riqHQc1jwCwbPZFTaYLSRMgMGDNC",
  "key12": "Y1ncWdnZHJDizoTCsx6xmBa9rfXSZgRL9ad6J31w19DwjEFLidhS3qPGtB2SmN16zpxQWbbWxZSW6p1aEvLkoYS",
  "key13": "443RAG6JfAc9nYB55qVvgSz51ohD5vhTrdMfB3564WYZzr6HMPLzA29KpzJ4BJ4Z3AB4nzAdR45ydkU8Sofd9Sm8",
  "key14": "3ksrAwsVZNMcXWZL3VYXKFw92e3EDHZnzh7GHiL8iYyQqbiPQDTiuAYKfxV85JShXmhPcovqXyZMaz5jPdeDWKUP",
  "key15": "2txj81s17TAvwH2ojNutZeLjQa76Pam5nSVMHaE75FwrpUo7G4nHQ1iFgRZBJKZS7A1GukLK5MWgvhdbkvUECgdS",
  "key16": "5HiKbs33gVNaKhzp3GWkcEPsNs7kL3Qu5MifHrSTXiBiokCqxkhidWV52MGq3kkkZThdiKp9SjirfNBwrxd4wMPG",
  "key17": "63t1jCRraoaAPxhLzeZqs7qS1nWrNzwfgn6GAfGc66Beyp45waKgE4d5x1zQ5bN1CPrUmLpVPZ1QXzRo8cbqyVx6",
  "key18": "4QcxfjYRmK43i1DSQT3Xb4gaFAL5uyQxkq2etNW6a1Rtfja5g4Q55QuDp4eFgyBFUkvAZ9f5AeG4sbbT5UFYEaZB",
  "key19": "4mpBKGRY6TByNYtSUsZppS7WF987avBPu9bMXvCMR4U8Rbj4E1MvmHb6WWYtYiDWjzPaqWpWgnvHbxRDDqzjgxqS",
  "key20": "4Kbnou7RE5W4NV6sZ9Jjj2pqFbycxcTzCeSczfYjfuB3zfo2VnkomFRgZVdikjRxyk4FvXZQCLJ6y4cJuxp5EF9e",
  "key21": "26tDGc2gmGkpKvYXS6ASFhE7g1artx475Z1jWAeQL9dZJ75ouzCGo8ZjNYHXypMqGQDw1kpvF47dc57JGVQDjUYy",
  "key22": "uwQQNqBgd7XB4Q6DkTe5dAjUKLvfpbqr4LkzfTdN5sfjCTZdqFWF9kDEt7uawvsW7Jjbqn3uYZYhryAMf2dLBo3",
  "key23": "3XnwWcENX3v2BLm14MBn4dHLtD4n5CdC85HoEdPizwjteEeehTBcK2poCVxTD2JfLcGDXBbpXiQwdipmTbXSfE8p",
  "key24": "4JWPer2TqbyywHLSYKFdv2Jxn2oJK1LvHkgWAxM3CnmZdvm9dzcpmFDYyMKb87wwFZSQ5qcDkRKdGCnSGP6yDehv",
  "key25": "2VKZXw1g3TBbCqas5LWkwgdmpCa3Ac4TZf5K3FYqVGjq1HE6ZCqjTF4aPYaXqCuYDKfeaeVKVzvWfsPUnf4TthaJ",
  "key26": "5zpEERd1ay8Dusm7vX7KvU2x4ha51BhJ9xKJu4kCapLRxvS5zvCYEKFQxjttqVF8xuVBRMkx3PyAx3gfHz1RAEDH",
  "key27": "kuW43yeRRyPveATmt6cW1ae9bw2qpFuiDNXqSqaGExSkDJ4UP5MbPSFrdAfjZfft29wSTqvdv32pCScW3xztUVm",
  "key28": "5xV1yPxwXj3pFcsTSGtNyjbC9EBdEtKUMm2YynkqMB8ACw3YpoMJ6xLMSnki74Bt7mYFR4ruoTSkpo6LnrhntABW",
  "key29": "4emkEGkEVTKq6XAapsedGsKtvwMcZyn9wdsAKFPttHRje1ZCfBZyz4VQbR7cSqqTHcMhqCoj8g7QVFViC14jyjS1",
  "key30": "LyMxsxD7eUmdfHLrfK46WD7uzp5XLyXfkBZRLXoDNxew99xcjknBGRu6vzvcF1Kp6gADkvBYjdex9t2YcSPwNng",
  "key31": "3BhhtWs4xd1m3dEFUQWwmMFWhaQkdPJtANu4kvma5ZAkr8dzCZxDvwn2TQ1TXcmDu3QVdSYTwjLvZyCkSGhaj9ki",
  "key32": "3uhtPFcwwPZ4tEmCegSfV1iznKdkehgbs9RE8Xxfr1tPmoBBeayMcpSgxTo1usfoXsZmsXMsJ2azek9u5h98iS3q",
  "key33": "4zkBeV833biR1xVL6X94Sy1khLzScv1VZFLA6aKbqgz1J3S9gtQaJu4WpBpXZq9XEhc9z7ZbFDwA4RJwq75GxNhs",
  "key34": "3Fx81EQzRUKfawQHSqiHPMbKNzCuxht4GgXqrLTWhtzmvx9CrUsfj54UzF7j3Bw58GjYck557oZ1mZLnGCDPSv9V",
  "key35": "5u8c8VqXyqY3puaKMeegBCRiJQZdEfjnZfoeg7VvPakF9rAzv3aVawR8Hv31K2YGucLXML9dBEV8EB3jf5UWNSBg",
  "key36": "5H3Fx1uE9EF8cDhi4B6sJi7Li1GcV86oDSU9o78EWQFQsX37pqymzdyWUQshXKaAbAtw2TAhg2dJaR6QJVm5pkPH",
  "key37": "4eiQehwaQcoN2Y5gaTfmPDWcyyKd5boN9dxoJhHBcY424PTrXNGVhwBkHiYLDybdpGUJ5t6E1Bodgtjn6U2YiNzr",
  "key38": "2saFitgcoWyyNF5AbY5GtGpPchbGT1R39Yk9Xm6wus1svHqELxpmL9t8BLNiAZFq9c6uF96xHQjRMxCu4J1DoPDb",
  "key39": "4wjxsvDLE6K5MYLmZNNa7yAmpco4DBRtQfLmNboANNDXc9LBYKTJ8Q6UTXkwc6jxB5z2MHyNYtuBDB2pvqd3CdNJ",
  "key40": "42pc1n4QZefJUYUgxmdgTRCcxvGMaCuuQzYGnRKYEtCE59GWD2JoDSXz3AmipvCEYMcGm3fBpakhLnx2X4yarzzW",
  "key41": "4VxBETdV4gASgbD5nJh6Py7xp4o8f9KrR8WP6NHhqGimY2h2MPHW85o6hESsvQW6RrTk6zFEpvm2FR5s4mFX6uZd",
  "key42": "3Z93SfDNjjHjWEb6T5mPZNWnErURgZ2oV34hwJMXjh3i47QZjF4wbwf38Uq3rN3TyCtXGNm18MYGYrNF7vzgsi8Y",
  "key43": "2PhnwfPjmubP9gbA4i9TF1CVAkDYSCiL5aBF7QJFKFEEcUEJgkpmWhmh4UJevX6dYJPfEFEQ1vuqavc8krPLMzYf"
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
