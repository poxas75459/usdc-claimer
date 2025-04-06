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
    "4fTnui5f9yTJDYNYBSjKe8gB8Rk79kFE1F7PfcdkGiqR84Umb4WEoaCWxEuqRKAHPmrr9cYhvewpEYrDMg9d5vpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c8gUq6o6J6R3YMpQktBK6NwHvUsxExbrsjt7u1rJTe36ghXWtZLJn9d83kR86beiR9X71uHvZLZAhXr3W6W2BMf",
  "key1": "5oEkXFamBrz8oxwgeYgZRPMgjXAdSRcCzPfxoxcGXkQDKBoD5Qatj3acgPdjceCrM1mMPFtjdcvFgUMQPxJhLXfy",
  "key2": "5jGo8yfJaZ1cCEMTjRwu1wUixTehh2JSoHH5xBXwf5AcQEVYeFGh6VN9tqWjuYhr6ebFTD8AFRTGMtG6atgdgoAB",
  "key3": "5JYAPvEHkyrWEfSdvND59gQcM3SbKmuU3QEkrqX9UaGV3pcdQeTvWzJAPsJcmTGbSD8brSgiaUEj3WbkJkPWfg9L",
  "key4": "4QkGrdBHYUpBPXNNnWa4zcv76pX4YbLpAjGneZ7xKVXAQrzvjz5Daa9SCJRgsZemZkG1KPadoZfHW15KeuDRLWQy",
  "key5": "632NZiYqkKYBNWeqGS4Jv5BcNsrZqfZ5HQUjXBSxoaaaaj6pGbv7LvrjzRoqp87dwUV44MKuBNzZdVHiwg95ZCSZ",
  "key6": "4RtChbsXBGxKnJQzBrQHU8zQzNWB7eRp8pLxhrSPDbbtvjV22bJVnaGwmiyuxoxksFRJyq8F3kTew5V6moGzmqrq",
  "key7": "9FFEQkg2ms8a8QMi86mLZxUr7kTJdAHz7Cx7kqtHXtpHfHsfQNLVqzKS9WC97igJKkDi55wvj8v8TuJgKQzmr8Z",
  "key8": "32xJmHK5Ey8yeyeGhMSyx6hRQhNFgqMYTyWUrdFPk444SCrq5homaP4QC8oucsTn7eAZUAiQPLQ63m2c15czgvDp",
  "key9": "4ozBDYpLYQA1MeTdpwe8s1rNcJwvS6uPorb2LzRTECeNmXszef4CyfAqd7DbBBVbjKe2ippMHH7w5hxAxjZ1vXtM",
  "key10": "y9dUWiRx1WtQXpVnmprq7XNnf7ETbm2toibxZwDQfobYGU42nAZfNpMrhQSR3fJAjzPMjmwpeZBcQh9xvpjfKV3",
  "key11": "4xhXMSBBsKeqYkaZVEnXAxPsKKqTUreUko5vKWcmm9gcotMR7PrNtf9tr9HBezf8S5bh4DrTTUf7b5B2t5fyrZU7",
  "key12": "5jQMCCNWUUrHMUGvG2ytTvNqqahR8DnZQiyKNXx2qDgXxSfFK39rfsCR4rjkPv3bfKRhdBnFQJAf9WYAi8EAWhQe",
  "key13": "5SPBgndAHPFG4Y3grYgzvyp92W5mSRTE8YQzqoKNXm82KjCGAXRnXQAH5C3DBeQ7qoNxGNaiz8FdHRBqe4f5CxjA",
  "key14": "2Fga1Y6kDnTuNsXZAk4BA4tfY6tx7KWJ3nhSx9rzGH4pWjDbasxL6JMrpnDKDC8yG3VZEonW9WrTMcfHa65m7a3E",
  "key15": "2W7USnrKogVC1F8MwgR5hWuRp6mCXHtbY4rhKphxr42Mifs4FZH63ZhvuErfgbwHV5oZPySSctpaVgqt7K2LV6Xj",
  "key16": "4ZLp6mSCejansFWiP89yQoGxXZaXAkrDxYj3NtN9U31yWY2faBTB2Gg8qBtMud8cuuGtGDxEHALbpkqiNV121nF8",
  "key17": "3ZypxMuCEvn3Ep8meALHTGj76gXTq66KexpxweAoQc8uKCAfQc31su64g3nJtmuYUuEGwRRmD7wQpCtG8ui3yZqE",
  "key18": "2V7NXKKsc7mZr49wf4oVBBPau89BKWDwqW5ojXNfsoqAfkEr9LwhtLFy81KCb7xH2tRmbUb1EVESbtjpqCThHMHa",
  "key19": "5QXttokGqoEYKydUuHLjdM3zRjSvhtLuAZ962rVFTxjR8YsmCzYUcWce3aD57XiKkVk9kN4ez9GtKMbrfEiMFUaC",
  "key20": "2iNjEYVavMp35fctS6Bn7NsCtK4qhbESansLDoMCBHLUyFvbRFk1T3Li2Vxz9k8JizMcsNwRao9pkPyRAUFbNMs9",
  "key21": "4wLFxGZW8tdk18D7MHcXFdeQafr5SS1XzyCwsJ69wCyByJZzimjtfdukJ8VWhp3FjH955mDjfjMRHxAt2RofVqLV",
  "key22": "2y7HsQKDyNzR8ZtRvRnSVjyzVbHe8ywL88SwcFiHeKSnnQUUqQFe3iAdyD1hgSe9Xpdrjbsm3ZmjCUWaTNqEGVd4",
  "key23": "41QWCXgubw9XrpKLUZR8nyfqYy6vfkzZCEXxGsgddkjrATG34rjRgcxDPEquDDRU5FjKF5GbvAFaZSNSRQKqzHvd",
  "key24": "5fSLgjeCpLnyGGhjz7uQZaAV2N4MUM1Mh8JfQuEVn2aAZStRkxA6JabF559BHFwzXNiA1pApf2YpQ8Tyt3EHfRqB",
  "key25": "4m9BogoQBD4BSU3YZ7DG8n21w1bBRmNfLAivkPwCHdnB4GdxSNWCWJmPe5tVKUQfgsvHJeygVCMTUYRLEFd15PSg",
  "key26": "5tUWXSoYAtEMZvgojWz64Y4U1cLpG1BDBEfNMPpFwqdYo5J7LYFgUeNFb4LTP7jDRXy7Egw3pXXRRCruaMkDZ4yo",
  "key27": "4R1uU3yRcuRyW98oAEvm9hQy3L7Uv4Ary1VqMy28mRSNpW7TKqt4WtTRJX1BzdXPVmxSNsfmdooXDLfDUNe2aTaF",
  "key28": "3AYiwEQTUtyDLMuAdeQZkhBA9Qvmus1B1YsvRunTR5XG1E2Zeea7APphbrWff6JbVU2ZDk2zzXWUJciJwD827V93",
  "key29": "51pp3HXFPq7ip3DVFMwBc4XnSRFaAnrkQhSTaymxz7ZuHrWsR1MErnuKaEAR3gQpZmm4kqScvZNx2DWc9EknGM4V",
  "key30": "5eSaejhUceqKKYf2noesmr3NuJkQkeCjbPeyMuFXqysmr9a8VSos21p1NCUuy9GKyGYcXzhnxYxUjbzbxuypuZDy",
  "key31": "iacrVTzaDBSXjqAhfgdPvToTY7TGHxz16JGiAR5zaLkfYijpodvsnfMDoFDV9P6cW32V9HaWrAd3wwLeDvHqEL8",
  "key32": "2wnojc2aQjjARGBcv645LEUFJzbdYtTkfYDLTRKS44GLJFzuZTBaTQaEmSjndySf2btxdw5GNiBfZVHks8jWW1uz",
  "key33": "5JbX6jg2q6zgXyCE4C9NE4fdZmBFoPfkyV2cYrWbWcQiC6kLcDZFCYUyEcAdq5bDz7hUbgNwTJPKDzTdgJ3fs7bB",
  "key34": "RPXzn9poA8bJnpdTkZ2dzBiorTbkFQgf9hboboeSJM3e1DnZ1uUqDWWedgD75H3rW31n8vjXiv4HqNUXEAjCx93",
  "key35": "nGCq4hFJKn2QCqcw1AJyFussjBu4pMpoc5YeDqmhS7eLPt4kkeAs6ru6vVMQoYuh6FF2Qqfmx9Vrwz1UyMpXniD",
  "key36": "3fBcRx6W6Soyc7tTYdgVE8BJ8cXriYmW5tjW5kocy85a1RdoVNKWSz8KUfqJSfpBLyfTn8VQ84roxd5odUSk2iTL",
  "key37": "5eimC13YrtVRReSy7MjFKhodyQSbhKnKAtWRoGPygk8FSVKZYCcGtPwKL5Fy31y6XnFU8NJc1yu6jgugeaJouK6n",
  "key38": "4apeXj4LV7PgSFzR2pUBzycHSiQVM59SUzMxaQpFUHPc3vC4hvsJbQYijiinjsdcYYq1fEh6pn7sJWufzwj8SQqs",
  "key39": "4ksVSgwKtXyEtfTh3nnqLTCHYhzoWzTCXAiKer1nmhP48EfQpnofwktVvCKc6C2eH9QT3qsPnCQZ5xbkQbTMsYau",
  "key40": "3f6ErBjUbFT5b9h2Vhi9mpLn33skfEAJkVmtGk5A3ASNcwhNEwQpL63GTKHwVNDyx4QV7LzCaoofeVJ9tHmjiE4R",
  "key41": "5KzAzcMS4WUGVmeUdHYpHpNwfgy97WeFJNbr4JLU7uKkx6tzb9uwUctePipiW5CLSkhgMH5Mtt6nJnYGwjjpLiMz",
  "key42": "oKCHrUeHB3ZHyc8udec1fpXP4LRJfKssB8xg6eqQLaPcXbzAi49tSWFfNgwqeRNcNo2n9MAFJSADFHAjvVeTEHZ",
  "key43": "4Bus9A9cVDf8mukLfzdtQnBHaYLijXzScvdES33HPWYcPpCUhB8T55BGcwCmZy7kYxP4CYJ7oDFTGjjXahfbiQb7",
  "key44": "5dkRaKE8CuFMSYndxDXjxrd5nsX3CnhAQjf6gkgR5BsQLT75i9ncsQ5p7kFbQQBRwdBe3rYU797kXtQ6xmgJ9bp9",
  "key45": "hbLRRXvizEZ7cTmCxicYn5qCYuuiqVpJ6z8dRcVQbakx6nTYiWdMyLAmjjypcPaKXsynrGDr31p8x5TUWwBfKhB"
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
