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
    "3CPp1YUPw7QNETX1zwsfX38sTAtqKpYamxFY1o89XsvcwUcZPFLhgq4cEif9msRZCuH7XQ3tRMkYH9j57TKGA6Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4NTttzgqtVgzJbAhHRGyQrGYsCjvYkmTM1DYqsH22jBxwsatkA6UaTcUzm272rT4EnbDhXhniNtnG7edccVEMm",
  "key1": "4CRBpfdWmhbYyER1abcq3nyiLVjhGRAsTaFHGTsVX9JfpFDMCvE5djRq8ernuY7fLh5kyzUxQsaQNSRXpyz8GFBw",
  "key2": "5JnQRcnodXXaSoHFaMdkbJ2AKsusWJyQbVGv4QGkxrD7QW5gtcid3o2hsYBRAmAhSRnNbM3kWNB6ZnZXjnzA7pGo",
  "key3": "4cNZP8SYvGNFxyA23WAw4Dz2587pqwRkcE6tWWyyz9UvbucFpBCZg3iRdP8zX3KxfGWYxUmarwRFsVpmuUQomjyQ",
  "key4": "32KYKVTGrvjLHiE2CrFYqcJWR8Q3mwFb1WSygLcknvQNPW2ikQA14Xq45DHdYYRqaFFCcdArYMCbvn8FhuCYChzL",
  "key5": "5bzgKetiPvTnqFDMiqTMgJcSp2fubzu7FtvYt8rxNdQr5tosspHrZFNuKXKLPPXbBUMg5D1bu1KkivpRV9mvEWwu",
  "key6": "3qddL8bJtkjP1FaYUnQYgg1Snpwa7gQXg34LHwnxh5bq1W3Yp4FGYxuK6MFsXWK9sNPeies58Td8KxjGExAhSnwf",
  "key7": "b6thWJy2xsQjgwQfkycwogkaKKnPX7q7cVTKJ9h149zKwN7ffKzVeUrkwDsMQh2bpjox7RhQkmF5jb3T1GgPef3",
  "key8": "2HZFRhVgogsTF5RKnEmEhL49E5H13fjdLRDHXKjvp3zMvdozUP3jnMcZVLiZTeeQtvcHDTMjCYNVfi5JEV4fi22p",
  "key9": "cLTsCXHNv1SgmdEpYjWRgn3F6atWKUJzUTvJ71v7Yq2MuWbLjMXDJSjwMJ7NhHZbWbNQorfheg1uR822dNePfu2",
  "key10": "2kwRtKrAgTtr44iJJwqiFx38Ex3HrV9GuhV9whz9a4nawnyBhQgUPDZLHLyvCXYUJqbQ3g2jsihnJFcn57RMdCBs",
  "key11": "231BHKVpe9BieiK3oHt5pLeNkTey2doxxLdfQ87N3sShimHVk9FkFp9g5V1g3WSwHRYtiXuBTxDPx8XjeXE2vxKA",
  "key12": "3qRDUEzBQgimesGaMT3WgpUi4cp6ywWZG3RJxLsTpXhgpfX58ZVcHzpVqjRJjLkjXmCxUw5yXt7U8JzfRk8W3tEu",
  "key13": "2AKKixZRPSR7jHPFRLWmLZpi5CZwkGzfBgj6yXwhNNZYJxjcVDejSuXwxyERsCNMKze5Sj7Hc3dKLfn8xH4XQrfu",
  "key14": "5sgmMgiUE4vDTXagK4cUd5w5Vxj4egYaPhHKhhLFsuxutiG35NfUvEXWoz52bTSyBsqPtbg81X11yRhTKzeJh8cq",
  "key15": "53W2BRGrPDTRXLeECiUxRSPUAdqpkiGe29w56s2brjxYPHhVjwnMQvgaReGTLZApERkvDh6fiQ2rLTmZKzgbGKwL",
  "key16": "4WwoAmkdZMeH9CrdaHJ6Y8yRnrqHzxwdxTjeCeEg6yLrH29q9cUEKxJDxh7x57BcNuFvKp7hzXf96ecxyEa7ES4P",
  "key17": "Ef8t8TN9B8PEAdAo7obJLiP8NPjeAg72nr6EE6UhFQKbHrXbuPCyRPBjY5jwuty5gxxvo4yJDC9Swrj4bEjyVpe",
  "key18": "MHW5PRrhrnu75PbGKGsdsvHCNZnU1ymv8x5wFhoEmVSErJkdNQf6Vo6f7RghKvZauAmsrJQB7Sx2c5uiaFg37Kg",
  "key19": "2UDbnDvbP8JM4pA5z8Lk8gighmquKFWr543A2Q1bAX91fMk9pArdyxgxUxKfAgZvBoyz3aRBDwPFkhKcver6essm",
  "key20": "2e7m8fdsCqtUsmicAsmdStc8hfF3mdkvuPCKttuGASUJdc9aSFyTwx59WrETnwx5Jh9cv3jsGLg447DggYwgH8pU",
  "key21": "3jgtoWdJh6stAfkz5xHxstfzxSxBeEfB14LuErigx5BFXYwxCc6fzpo3JKbgoCaLXjxMCjsvzwGhfv7iR64dXD1q",
  "key22": "xq7Aff5Hqt9STs6e8fWoKqUrf2jB8LUChdver43kniviJN8iRXgSdE2w52AnSF54Z4GRfPQPPosfjS1ao9Svb7j",
  "key23": "3iWMewu3cE3AqawTaTgRK7CztUC8gX69qnpWVbLdn38gDeiNiz8t4Xo9mXvFsW6ZnHd6ATojJC2ZiG8dcuucebs4",
  "key24": "5tGmFbrzPHMXbEfB5fVJ93dHLMaEZ4kyHtC6PiBEtSTAvs84VhTH6H8Sck93vXwr6JfgxZ15H1rv8BEosaza52eL",
  "key25": "2fkTA9LyVvXFfuEjcVXSDWDUMPw6p2cyRYeSsBj6R3SU4HxxdRzTsgcLav7XRXrJ75LuvCyY88ACLdEduJXNopQn",
  "key26": "3QR84g5j42RXqtnhxWfgosMkskRnqV9918XmgEfjiiAxwCbfGcA6g2KwPACPXZ1PbtGe22JbwKsk83UQTcZyBow8",
  "key27": "3oGwfGunZFNwJ5kmWmPyqR34aQJ172q7dgtFrqPBKhB15DkCjtQBwKM5YM55TpMjsi55LmtikUDU4RC2ZQkkYuuN",
  "key28": "5HR8ePXAz2hT3zP3ErLPVuKoWz5icEbcXvNJNsjR98FDZY4wFmDbPnpPTZNQ5NcJEUXYs1mZcYCU9CvvnUbzHi4V",
  "key29": "4uWKJDTbiwPn8wRbuohSTsumzBPrZFF65VK3DfrrSg41V72RWg4opBBhtdTKq7AAi4NGrQsLqRFGMnTXfTkzhthN",
  "key30": "2Te7STQ1cx7bfeAnxFjN4QZrJ6nECixSwP1ag32Zed6YkHQc5JQDi4b8gCtJRz3Fv5vK498rYkVevacGZHVfYSgF",
  "key31": "3QFRSVvkBmuEk2zoxuyVFYWqqXFJgQAxcDgTsbVvceW9XGZvHgBhahvT79r5YR46ibdQFf8rM71k1ttq7VgYjTp6",
  "key32": "4m6zAwJvrBpMPZd1KMvU4cHj3VGLTBKVBnFDaxVpnzcRRANn4hMamPWret2nqxFQGSHmt7KA5VpwMw5uG1Bfc8gg",
  "key33": "SknBZBCQzJZ6HXwz4C1cutLvY6ivMaNdscvxWJG38CHA5AadyCwAMm1d7BdbzjeMzWfYitax4bYCn34ZH4iHRE6",
  "key34": "4xxABmMwS2pXjf4DUPeLBhzE7HPLVqV6PEKhpn9PSjDLwLZTsPSsM5rcbUWnwrpZRLK9Vzt33MWJ96EacsQfj8fL",
  "key35": "2RWENeUXfFPueEz5stxPr441wZEPJujXWd2y6Zxs514N8CqcbijtZ29XThQG2znrmKRpSUVbwLEMEL2pzc2dYzwp",
  "key36": "36zzGAmnpsMeCQiMaJDjxbeAt3N6JB7dpcZLFMHWba3LcJKc2TQYMw6j33z6euuKJCtHksS93xuaHpTEZK5RZvvJ",
  "key37": "367Zh2v3RAgHmsnoXNrycBF2LwELcGTurMwcyLRETHAQmqMwijejHXLsCRRL3uMMhTc8bLLDybgTjFzqeScsw5JL",
  "key38": "3RyMyLaJYmXeUApopx1zZX1MuT7q9KGdvdNT5c7mnZr5D3FDBoa3fL1UfbtWMkRa8zrrZM9ciYBErNDQUe8vQH9Z",
  "key39": "6kR2J7bk6kDGtQKB92cS8JmrAWKyBzRfWxqubEUYr4sFm7kkYEUzyybJdY9Qx1LywtgRPT9Uit81Fr5YybR9XPV",
  "key40": "eUALrKKJTNfXxAu9rwPeft2N4asGbb6UDFzoxNwTs5nwN67zxDLiwMH2K13GNiLYrxZwAbnpGT3XQyoJWsPrNEX",
  "key41": "4m9T3B47iCehxwjDFqD36ZiTVkNuToqvVS8dDzhZQbVo29SbiVkz9QEkeqg31iae4yto4wHy3di9CbaH7qPEiBvk",
  "key42": "3zHYHJJpEn2vF6SVisRdiixTEaAA74wSGA9YSrm9kb7UeUcke42ha2mdF5piFCtT9PJLpSwcca2iFmDaQBSCRgo1"
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
