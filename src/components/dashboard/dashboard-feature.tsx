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
    "3XdErdZr9K3sZJXpdZpr7dKrpYY2MpD2PWvUvXuNf1CtsGLkH87zLhjWCuzsL6LymG2b2ozNJNuatTyRPb3BQhG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58YmhuVKRiupRWnHEXcQrEPo8FjzvWwZocGzpkdvaJTQvbYWtvQoMETnUKHK9WECUYidTifGofXaP5kxenJoPhgL",
  "key1": "5shaXDp3WcsRzYgSMgvVASDoouDiChU2DTsyPKcWTMQSHhXhscfft6Gd6UpWKEAVGZegzYnK4tskcxyS5z8tT4BQ",
  "key2": "3Ub6zahDYfEgQZ6Wy85AcXVfK1JwaFrtHdV7QZB6rmWtPvvsDxuQuoywp9ugSF9Mp7bdQ8aS1ZoTE1eqpNUe9xL8",
  "key3": "5pSYASjWS28voBMt7MucvTHDKPw49z4SEek56NPHs75jrSgJFG7W9zK2KqZCprTXgbMnxJ4BqQEkBuCdPU7LTh5P",
  "key4": "3wuMsbTJqqs5ScbfNNbPN7GDD2PqvUC8BNHfShnDGfiSw327LAwye5zUFfxoK95x5MB8mSLw74uq1iVPYMqpZCC6",
  "key5": "3vJ6Ha8tVxedEvu62K1Ln3vRHBkiCPwXaTQBknR34G52uRZwvt3FGuXJ8TUp6SC3BFpJjtqJs8saEyFq27V3Aer2",
  "key6": "3GsH5FjFtipuF7NQRGNUNBaRPeewCXciSaLn7ZATU1d3SgeCXzQdthkn6dGxaQowP6qrq9KuDnW5Stjr5sLKzFUr",
  "key7": "9PqiDkbfXd8XfguzfaV5DLJw1HVnNkd7xrbZYVtHQ9XDz44QqBmSUhBVTKau1uQyBCym5roM8sMHrVginqa7rZE",
  "key8": "5vMXbuVgRMXsVXfwcdtcVrTGs2yuJ8Qv4kneB1wsGwnUVE2QTUXbYe4gvxAZa2hXF7zFod63HeiG8jTWN6pMHPY2",
  "key9": "62CioBmnxctBsDKx8b3qn4PGHNJgH9FHAuZuSW8wJLG8dzXZNbFoESZ1eNJDDkhkjpKdjU5N5rxXmkD1cknF8NJP",
  "key10": "3VnTVSqVK89uUtHByQoLtcE4NrA8HYrDTQrmznBZ6pvak8ZKMonupHe6qUewdQhNRxvADwa5jqViBSuLJcm5ZjXo",
  "key11": "2AccuZ8fQcyYGgix8Yw5NuB7bX8vHo9UFMoiCg8hqRyvz71M9TSeMT8fpooC4k58Lf61ViXUtPXsxEKES42Hc9qn",
  "key12": "vFR4r97oi7NGgPJrySm8ZVVQJggjvEvncFB1GLJejriAhn7CNE1zLZQfzqF96AbwiwEyzd6jZkdMHvZuZZXm8QE",
  "key13": "c3rB6oSa6vZNU6vgVKSoJmd52ViSBAsvb4ChLHDPuEvtoaKXDD4E5X3LdShY6vtvvcYoyzdH7uEAY3MSpv1RUyU",
  "key14": "45zEkFjYUQQWjJggTsmxAg8sDsgbDzoEKajWTMpGqanqPnGkWrvBU53b6ov3kZTspbqYynagYcwmaDcP1MdukY4q",
  "key15": "4FL5xTE6TRVFEAv5wNr3APqkUJhSa1GFWjDysyQjNcs3tRngAsuu23Cqtg7WueFvGMPJi99TwnK8NW38PRsfRM8z",
  "key16": "4tZWxcGSQAghKJTHuoPZWcLk1vxAkneLj5hLEq8fiwumFRrxrca5THeKnvP6fLvUMQcHwdfAxNizu2og55ED5JQw",
  "key17": "2u34AviweUmjx7hxE9uGjySD26evqPfaL5vJczy2zjZyb1cTPqvcwqpVvMdCGDqS1ekaTu9ohJVV5ZfRFLf8se2P",
  "key18": "2BZMVTm9H3jXnV9c8F2YMCscZcipkcxjcW4uPgjhY6fxmBMuK2bhCdPdbvsem69WZqn9irc6dqXSyVYfuNotUMa7",
  "key19": "3e1xUaFMwNR1NrXPSgNcPg4ThxHyJ4ApPPDTD7EDrbVsLziuAmqR8yumCS6twKjc7znYkserpgs5eCCbKCjKKYc3",
  "key20": "6YnEY4h8bZHMyyBfmvAuZdPb19ZxbE6MKdCvch4MTxnBdXk1nNXofMVkbRDqQVRX1XiBrEfH6o2DN6SGRceGMsU",
  "key21": "4DpSZUbwpf21jS6q1kc1wQoNYrrvAxBrHwrQRUY3DZ5Wbs3w34ca4GN5NhxhkJxoDaaNdVbkAiVE3G57EWotjBwu",
  "key22": "2U9zA4Y56C9nCHmmZHQ1tcjk7SBq5z77LebS7Lox89Gn8tA5toDbYphjYWinPBQsTxTF3vop56tB7ctP9KLPbosL",
  "key23": "4YXUFfTNyU9kXiVrawB1VvtK4kEjuXAoNho19pHTmfrCXamYLFEpwL69my9fWWBfAGovDJHDDy32wztddHKJPfhW",
  "key24": "4wADCPWfSGFhmgTJifqfiPE4ZrKZPNcepPkAHrb1qQ814KZiQ9hjiM32o1yHjDDDT7XQHV9WiyTyEeMwGJmwBwrq",
  "key25": "2SixUdeYnjASbAcAgKtLjhMJHJCkTdxLcut5UDkwj24WXxjMk8pVmKdQvyznnEcnqooiFaxKQXWR7jbkzu1dymYb",
  "key26": "5baAgTfkv4MhtYcGzfXSjDSCNxf8YfVNsCiXKC79sWFqgSQ38Bb1wJDa8U1V7zMkBLR55orpZQkXM8G5iUpTJbN7",
  "key27": "3VfuQcChSqWEtCcho9JhfxCrp2U3So2Ui54eXskBPwuphSxeZc1nht6vF9U2NAC9RzwHQV8ZMt1Uwf2PWDahfQn4",
  "key28": "5N7i3f1thXZnqQBo71pqs9FdBcFJQpAYpnFsMfKAU4hZdN8kSNnce15Jk5EEzUfnjDBURfE4La5fEpxNFz2BSS8Z",
  "key29": "eimeFAFtS34kUJ9dKKXBLZmojCvy1TZ3DQDM8xEzBwipvsbVup9TfE9qRE6D6XybKSZqidwJAuwhKo6Ni4C4ySd",
  "key30": "3GQ647RZ8ufbN9eWSV8hbp8oW4jJr3oNryPSXi5HyKSNaX1LFRGSuYiYKs6wm3edwEm93efBCiEmXzfSDNTZ9psY",
  "key31": "2bSTgNxtCFKSHKqah4peKDgQ6AAnMxZev9RazAg4JTYsXw4wy27t54MFzMzF7Em6Y84MzF1rVmJDxRRcQGMhKHtk",
  "key32": "2Hgd9hCmncZoPkAjiuRTGxQJX2oLthxxA3VfrfYzYxfo4juus6cbDqDga3LKx12QHnZHJoBDgmQPC1acou5jW8ax",
  "key33": "5HWLcSeGgGpLqZVdSdPXcqysSf3QMywZtKFMCx2P12S34gfavkLbprQyiTEhFYEzidMU5Lttq7JpHqF8auqoVg4w",
  "key34": "5R289xY6pwtBtv4MkjjELER3cdkRq8HCAatZa2EBEjwdRyFBejAnUtKLvNq6oGPKhsAgq52cHLPCzafjPG126Y2h",
  "key35": "2nkmXsyPF5AW9Vn1rf1ow852gfPqLP86ipyWxaQtf6fp1mKvrw8mWDMcXAdjs3ZV9N2cgbrLy8WuCGbhZJS81jef",
  "key36": "4kViDmGnSedRstdvrSM5sPGem9FcJ7xyCW6tE156k5GNZ43er8pyw5ozxAELBJDMspNBZYbcTbUSZrYWa6Xkis92",
  "key37": "sdawesCQQyM65YjcagqJTcDQj6DKjPv67EF3HSPmBQb2h7NPFdwHwjsmmgyNmrwMAseojiNYBknAk713ADqRVx9",
  "key38": "4i3mKrRnCpHA1xvxArw9Nz9rAQ3Cq3icfMr6LmjY21XvM9aSA2V5wTmP7NKdK8gKQEtXFLh82dCBBdkyMThvdniF"
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
