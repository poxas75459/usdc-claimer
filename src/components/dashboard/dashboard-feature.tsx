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
    "5kLcnL1DatZEWtqTbAxc5TMEFprLtPbmPfFABuRKmen7hnTckZK2gudkNpcD5x6icDoM8VuTp3UnwtoifJsRR6jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gvEbWiKxZegYppHBoqa1mx6BVWW4TeStfZBLZE6zPt94drgYRYMciZ2X1XQuhSTr1qq92XyGUzR67gsWq2CN9rv",
  "key1": "4o7xgnaE1vM4yf97BD2bHwKR8Pg4hxw9t1VLTD3Z5hW43fAKmxeU7CerjEBF141Nb3vDQiAK5MXMjYmvjaum873z",
  "key2": "4BiTeLNStFFZDEXc9XwnaUDJ7ryrkNqCfsN78i7vCNiMaJbcpBruZDPPkyQDeAsY8bxayyz8F8rLaeS1F2BmR2YJ",
  "key3": "3yqSpMk1PwTqhxbauuRoiyFt4nL3f4Ax8LygbKrXZwFb1uWsXn2wiwvKn7WEy6gJXxgDFXVcaiG6n1ytLRBZ8Sbp",
  "key4": "2EYfqUK7M9X4G7pqNZuSf7fpmVYwfwqVfy7SBPftYm7JHmR87VKHnVBw93SXwXaf994DZVDagc2MzJn5E5H1gZzz",
  "key5": "23nFf195f9JEjMbrnN5W2JL83thJsyjajSSVcuM58G4nq9PirXfEh9WsYZ8TKcrRCX1msmmb9BCw8oc9DTgnCAZ8",
  "key6": "2Aee8bVymsNKP1WTCfYb4RdNc9CfG3Eog8cPvDLv4m7Tu5dqfaGyQC1NW4fPn3Wt5im7Jgqx8KPDamYaJHkB3uQQ",
  "key7": "3JeexxdeedLnWE797BgtHbeJXR9oPmH6PiSQMzg1A5obRsxhUpDTv8NfLXn1TLAC7z1gVDCXHdk5rkpf6h3CvJBa",
  "key8": "tf9hA4Ckv6bRBFK7Zmrep2q9wBmudm3HPUpBxx5DGoGSgXJZSWjnkAdVZzy1EjSt995ERGVQgMTa6p85Hd5fahh",
  "key9": "2XxMtfqAgAeMDvzWcJw1nAn1URaGcTpfjncmjNQs7X6KrfvBfxJo96KjMU9Fh93fTfwSpANbwWTfWaL6nfAtxVM9",
  "key10": "C6JDMZtVChZZgpAqr5KYKzajWYiu3uYofp754hK3d78fbkNGFNeYWes9HFweis4Gtae6YR8qHLBvF86yyNG5wvt",
  "key11": "3baDEZpL5aE9MVojhVs8gBuav5stQ5byDnAhTrGqHPLw6PBjTEnjDjR2Y43Mz7tAhyZ2rSvZ5utGcwfZRcUAPMJH",
  "key12": "rths6waWUwHaPbf46JV8tPkSBbBcXCdipJ2BTX78FN4E7kyCqGoD6EjvWhS3pBLeuSgJFxfhukKwEW387jtwoYk",
  "key13": "54vohx8gWKjfgryTxmYieqHbLgUAbdNWckm8134NXKbotYuNUkWosvmmSMANg5YRVaFJhzbtYcYjRim6MyRwwW1F",
  "key14": "4VApAmei3kLXA9qNRjRnkRCMSYSLFbycFyoGed4LTqzUk8HcTgASdFaK9LCf8DUJwxKKR5ynEGGhM8hUAteswdUJ",
  "key15": "VAJd1JuREfeCyjAvbFGMPBzXDM5AeM8MYU1uiY2JM67egci1dA7SmWDwfZYwK4qLBaSssDM8mUwqiRheckWgF6k",
  "key16": "4jUbLkcDJn6JiszWHJKHgvBEjT6udCUA1z85LN1w9Ny1hE5joAntxva4B8SEgNMje9xwy88saeuBbH9eNLgULhAS",
  "key17": "4RkmwpvbPUSGvtvQvWicpCuknaRxT6Kuv44j7HodSxK1L7KR2zZDYhsx5V2bwsY5zEkYP6CfE8Ex2KRiFcxkH4hJ",
  "key18": "3kqccPRVW1wik6veaM52ckn139gjgmnnMzNUuSXZSGDjiqbDTvnXRbMV3kbTNGJhE3ky8iMJnwpYCaYJ1dhAxvYr",
  "key19": "55xTyXwzUxykACKqvtxtpnbJ37S8WidXYBkjGfTrkseREW2Qsjz6rA6RDAf5H5m3bMhxdV5TSSzt7tx7M7CLomKb",
  "key20": "5hVDpm2rETqjEChqCypzdb56Nf7GN5tzvEiStzUWGKHPRKNd6DJVFf9weTB91GQtMSPptCHYxcB8TXB86mcQ4hSE",
  "key21": "sTYngSCs922zZ1RfWvjmA9MFfiZGHxP5hC6RafUTPuNrc7oScvqDweKDVq5hTuojBvehPLY1WWkwiH91oLCZ2Ec",
  "key22": "3CbAunzemV8atcJ6osUXRDHsaagzRtZ7ED9cX3bDPifkfwUTeQDwKzKwwKYZTC4vXJ9but1NT3Mf3xqa7CCYvE3S",
  "key23": "2TeucExBjBd3MN1phterjUTKqRojLHKLKksHNeb8mkEBd2rUBqKKkUp6NLWSG8s2j9vpoqoiWRHtziDEUC2oGMG5",
  "key24": "2ZkvFxVpRvWZuA2qAkFcVMBzEYMYmbVEHWfk2iSPmWLt3xDZ5iSq8NzZhieVvYuPDaRSoBrzw8j6jJi3AHtwy4LB",
  "key25": "4a6EQwztFTLBxJf6WcGr5F2u61RCB9aupJiXyMHG1NCzUkn9ZtUYQvZN5M8aj7xVe5Bw9GNCz1C6ZLXAk1HhEDVP",
  "key26": "64P4bog4n9kn3ukUSA5o3cmTR7H3ZmwcwnEkw48siH34vHR1ciHLregPB6SMLafAF8FhTkvQhQxtbKE5CBJo5Fvi",
  "key27": "2wDrtEv7GzWCyAa1PBnX9H15ViVf8C454cjB5Q9AVPhc8ji47LYXfCSHUSnHKSXzZBC5WjYVDnVrqXqeYji7WFmE",
  "key28": "2XpipaR34L9G6fxqn5TgM7qwVYCABiMdDz82PnAkH43KCUXRFJCmiwWnx1FNG5d44WJrH5dHubiFAf5U26KTAkJC",
  "key29": "RrSguvb6XZ6UJKKmnCHFsAWJHBCbjZvtYsfS5ikh2WzAAHxwyuo1Xmw1x7oAwJNFZv5dFykKiamc5q5vZsLULzd",
  "key30": "ALLUGWtxNGGPzT2H2uND8MwhDV9k8wmk6GgPbr5w1hJ8XCzvhSdmbm4EqXyDC6Sc5KQmjAhGhxV16EXofqyzXpi",
  "key31": "3tqpqgxHhHmVVYvmTDpXB7wno9APUYWMLzjFrVejwVYFrc6XaCu6yKwMd5BugasYVcC5U3xWkuXv65fScFrGxE7k",
  "key32": "3qMoKmVPrvY12sCxVuH3vUzUiMbggTZ4UJJX85d3LZTNXW8n9cdTA7gmM3ruyLSF38M1Bp6tP5MRyR8DxwPosB6G",
  "key33": "5ywKtAEfFZqgBxEnaCXeLozy1fMrsc6bgjAHeQUoMvDagTD7TWcEW928U1szHwqzkcrEPzru6AmzkU5RdbZ353Zu",
  "key34": "3PDDF7YsYNAnavmnqZJVC7ELYy364cPhwd4zoG5EkMupk4HsGkAxPrnkwWtwgv6DeTqu1M5eMGqd2j7VJ3KtCQE4",
  "key35": "tcgwMLKLZD9SMqtdfawqwn46NajEaWeqnvyPoES42bw5eCq7vpESdmJMJH3m6Q8uxdn4vi9PWAv8wCv3brUGAV7",
  "key36": "5vdrEt2fjUWwM1K5ypdS4JJ7bCMsaQvxh1TcFTL62pz1SvwCdKUuNVmt9dJT39CSn6tnNibL2ktTbXHngy6TbVZh",
  "key37": "4BwWcR6heMTFmbbuLQBFxhusxyKa4DoWyBCSSFghRkjyh4RkpqyNRt6Rvwmzv32ANoqe3V9bXtnMR7Xe1wLhU9of",
  "key38": "4PQwQb9HxdTyK9EozQ7k3iopqM8fXVMnnn1TVGXYGsyCZfCZrc6iJnitWV1Yfgn6q9rhuG1hPyUiVN8ATj1KfWEq",
  "key39": "WJ9xnRYDwty7ecngo2vhiGYfvXqR2JmEQoFpJsQPzNprGSrBA486hEVZWvkGBMWsTJntEvoHb2ADPWJjMpgkjUt",
  "key40": "3vTL6Hte3iagUjg7HZSDYdn3QYJR5DYT6Xcp8SHKH8tNngyFPyu1pmtG3SKUa5LKmv18S7BTWJgqzah4FN97h4Zm",
  "key41": "29TgWFczPYwnsuPrsQ4A9KTyhCbJoDyGwtQFfPt58jyYFTw28GizXeW5Zq9frw5cSeQFLh7xQcnqjd3pfRBVBKPr",
  "key42": "YFTr3uPEfzpnKGDQfA2GSGFFqQSheLkSZYiqK1r6xH6gr6ooqfMZxMf3EpbVi16MomoRDLHupzEMH7rUUTkbg33",
  "key43": "4SgkyyNQXudYECyCaGc8srBo1T5mTcj8gc4NxgrLvNV4HGkYohYXNiTxkt1QcdvxcSEmKxzMWbRKUMrRUcxSTPnd",
  "key44": "5aBjhuLjAAMdJp3KoaUKbVwAjnmnyTf4EqKRykZW7YffQfm2rh7CYKPhmnX2QshyEWdFAmzu46df6AtNqeMyef2s",
  "key45": "52AfjhBpehyPEg2UnmgGKtbgHrvUQfQymFAAkNdLDMshf6cGhLn5ToiiXTZNWQ5AAkTSnpn4Frw39vBBkWoKNnap",
  "key46": "S2iUBo3EvfwkbnBzRCWwMtG4noEzaDbkea1xdY7wVGk7zfgsYjqq2cBg6b8Mo1Vf16N4YJ4BnfnjhULskPKoZCb",
  "key47": "33HRd3twpSyfZHz3RJKAnhfYfo9QgGJmPhEHoYtii4dbCB3yQhcmoiGcbrk8whbNMHsuVjMug5VPbmGMFowkfhPu",
  "key48": "4RMcQHmUkzwrYSsF8zvPjwcvZapXWd9s9jnTZ5cqkHsfxzRtr1Qa2AVQGJkya5Aice7gCSzfRd8gtdX7vf4anEcA"
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
