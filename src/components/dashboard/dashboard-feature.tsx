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
    "zvMJgXDWi2AhrRhrmFEqboGA5DSj6XbqzkwqQHEgjpVSbdQ7NqhmeDE52JhmacYfRv2yLbDpezqq3jBw22SrBdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpWLsqLMyTc1wmqrvkisiaCWKwCSVzipeXy4E47VnuD9ee3B9ky6vDdBaaT1siYTzjAFkNQej9CpfpXw7pR3mAD",
  "key1": "4iMoMrAZR22x4NNS1yDuESSDQMvfHbqd4fyuwoS5SVyrTJBaMaewYFhsPCHBuYeqYXzQKKWN8PUgMBZXvs21nZFy",
  "key2": "eSujUeVqC5ha1ZYTnSM4dypzukDYcjPbHJ79j1LgqDhnPkhfYgjsjiTyeZk9AioidAhMMVUW9zAdpLfkZPFWjcv",
  "key3": "3Q1tscMNZR2gvjLe9qmQfWMP8KPWSBUMKrbeLrU3ewNKYStwP7HR2jyUviWaLkzMFGYWXS6U4coiWPSawwNpRMFk",
  "key4": "3QGW85YM7zv4A6EQpfoXUmxffnsEU6F6hUeiDfhDRN9zZtV6dc7DNMkrwXtSCR1PgQ5Q32W2utbYKWb9QgvyWAww",
  "key5": "4nmMGMyztJjmMPUN1pzPWTr3CZ9cELJWm3AJz6ri4VesuCKmB51aAoFo7CJXo64nDAZYE5zqQVcpSwD1aD2Sfs1X",
  "key6": "38vcmJWUeM1fvCTDKAnaSxpDiPuFWLsDRFxjCScn9wY95inufxZPwNG7id9dnpHYh5FLDbjVb3r3rpmYyijjguDJ",
  "key7": "2T4CwXJijmvShtMCNcG4ybREuwqA7MboL8ajcf6uYh9dE1viiXR8dxoKmshyWCWBfNUs2a9GEJsGyMpgq8Hh681e",
  "key8": "2gLHYT9aTN7XQCKj9UxKFhvr7MzYX664zfLMtygcJBrjs7puvRGrZGx58ssTe7DwMtbsRDNee1futCNkE9q38Ch6",
  "key9": "27umvJX5EHHypcfXxrbM5mei1TYxxmkpESoBDYNhh6LX6JCLY45F8M39293Vbvzw6UgTZS2ACj7txh4GeQC5AqBA",
  "key10": "y37zJenuxSJ1HR3wBTUcU9RaBe86byZ9rosxLBrvhFSJW5p9pBewJUhLaYJv7jj9s5aHfcgmVwDd7HwBL6ydSxx",
  "key11": "CcugAesxviT32niu3yJUDboVxBJhJa9kk15dHtt56U5PN8bFudR9k47TBRGwcxwL6FPSm8wJMjpCc29wPYR7v4X",
  "key12": "5pThjPgVd4W6kD6qyRfiAbB9y3pyaTj7oTPSqdGob5EvUNUDDPtGDCBV6B6vWgureTf9JPtLz4zWGDUpfZY8v13V",
  "key13": "4DZS139V3jZp7hxkrninvR45kLa7xkTvAe8SighrnZiC56jVXpB7vdtLWx9ZGZixdsFzWzZwpQZisqnubMXUv7cf",
  "key14": "5otXbH3jk3TWQp7SxCoC9hG28AJUq4HwLcM91yDiV8UREHUtQxtq31vQveuHczshVBJ6Gvr6i3cQi38pme3jBB3r",
  "key15": "5rnJcTWzXfGJF7WhRDH3ErDoCq6V5kEXZeDHbJSo8MomL78YaUge919FVhttf457zYpuRyCbzmxVGPrUK4Bx9dee",
  "key16": "S3jFoFmh6MxXXrgBCPGQBq8UCjg2WNePkzriZGGqPN4CB7gskTfFeKHyjTrAbHtFppRGNPAhrfA2SzcgutXKHia",
  "key17": "Zsj7sNbHpr7m64gkmcKwbnVEUmN2SR7HTd7jcrbxBaawyAiunqhZqtPxa7T31sDM34MkrERUs84o7x9Mq9nC23C",
  "key18": "5fLQMdZBCxmoyog9tjDiVpz9KKieByit8Cm46SWtR49x4RhkxRRWEocLaCWXjNGouxhLKLj6rkBZJGs4RMSsejYh",
  "key19": "56Bvc6owpePX3uiP4MdSu8ui9oNkhzQ2G2u1uEkcGWAo7v5qqmbkJWBaTrCKpu82fnQavDEsCY9N1B5WE7mre95S",
  "key20": "4d6KGD1TkXUxFS9y5xPtoyJ4F6M9X4nduh4A5GSrmpssgMXdNrm8Asch2bcHsu9wshVnfFf2hH1hg77HA1MUPKqP",
  "key21": "3XUEp1hLsETSQu3LAutgAEdx9X35xHXeiSsnabaQAehJu8vCxsZFfvAL7ZAeCQMhzpsEXpenDGG6idNQyeQjhWB2",
  "key22": "5kELiP37bAdUvLaeNNGxt5VZBPmMeTNdSGhskEcpJps5JERGEFdg5wg69TN2V5c1Mw25cNDQ6ywNm8e1cB4P7dgC",
  "key23": "3JYdxDQD2QtSEeeGuv2299LXqde1hYwyP5eG2ndc1AXPfKSSJBGdsADycGKymeA2AvVJDQAqA8tFysmL9tYZm443",
  "key24": "2yUvk1CKbKComFgHfktYSn3yiSzu5VcQZyqLZRBGaUjuwXjtMw5FW4ej2tbvaiN1AhyZeRVJkzaPG9Thu1UrhW1G",
  "key25": "5xTzJt5HzxgQyTjYnjtNB1eyPXLH38j3cpUCEhp3iQnweJknp7aqTdvaBJzzm4sXttdcoELgMxPG6WQdyY9GBTzn",
  "key26": "myRnEqHvZd5i2GQTwno5V6ikLwfMrdrPsSZEzCsRmfiBSUBwB6UGMEjcY4W1p8VoJj9DFxT687epKvogPfecUC5",
  "key27": "3eeF7mFaBU83y1xtViCJvoH3M5mhxm1ByVxZvddAthjRvBshFNmBibi9TDGDAmLeSExuc8stT685t64iiN1cT7uT",
  "key28": "3dZjTiXeRUrHgZmoHqSrQ4PJgH9CskHQMMFGNyAiFJjtPTrvk83vn2j5iYVr13KCNRbwhzew4LxbHBXnWQuSWUdH",
  "key29": "5aCMJpJ3JWvQVMaSZ1d9dQA2A4JMLLZjqL6bH52dYcDv5yK8HB1CJGPGLU1H7EEEDvWunYSTugnTGoSnN3Msk15Q",
  "key30": "2pp7wyctEhxRz6ZeU2N3MKzJ3BzY9GtmNMigqFt7zZN3g9fvfTtb1hWxVr4A7BvSLrfyqN2eH7CfmFeji6mPnJrk",
  "key31": "3Kx4Cpe5YuWSuLJSNFLPz9kExerKcybHH9CBjTWvrEn55xV4G2DYf6nsCpei7HBHfVKn9zn5gEQApDLMbnyiuVuh",
  "key32": "D9j8TbTPixErnU95wDc7Wi1gvdxRcc1VddpQPJeTCboKbKTcDJ7fseJzEV8yMALJLYjPhWurZkWvyH9NeTUy3Hx",
  "key33": "NjdCtuDYhpMXViwr1ooLXvzkL31PJQKUVj8n5QL595F2QqJWTq7Gg1MLiEULBvCXfSWZA59pBHosnjP4BY5Exdx",
  "key34": "2A6nmNR4tFe3EurkdVBXaCmc9CekyrVfn9gUwJaXJdLJ9326jPWDHH8iRRNU1DCt7vSBtMumS6F9mAQsNNfwGZ5r",
  "key35": "3ojxyCXYG7ifo9gZs9r3geSojitdJrFDfXTAo8gSSujHq1o6a5G9vhW2hgBkkhJZtp6C3nXC4H9TdVXkULJNan72",
  "key36": "3GY6DuhE3vKXRo8q4xccm7GjVyhXwMsna2dvnLjorxXGLgaeX26vyMzCaBMZ5YbEUwn2vXLJSFAmLC9tZPyS74SF",
  "key37": "64SvaTB6JHUCPBSzV9QQvZaeW7DumuCWjFQHLwzJyfNTHYe8S8W554cBoVSYNoBCqJWR6BHvrsz9cMioVppeWWpV",
  "key38": "5uFLQ6wjyPbcgfoFF5GXM3P5wLtGNfNfWSLeFBfn2JWjy5BgQkwuzjxxkCmWx5r18kJwSqkg6pexd7vLwjHDDTCg",
  "key39": "4Pjc7if5mqdQeDycFAYyuJKf2UajRFxtFjdcJEwLFskcWZ8p697j4auAePWfstCPaQM7VyWQnY5gWZvEFn3kxa9H",
  "key40": "4J8jtjDjrv956vadsXdxHTY2eii2urPfiNb4f6gvwFEGdqSyvsqu2qtoKmEvwxaRXUspTgKXYP96ZbVmwwxxeuo6",
  "key41": "3ss82wH11qhmzSAA8x68EyYje3yPb6GknBuJrU5C8dwYAzAX7ArN3ZBCbCWgeEQ2tomv91FT13XdYnykEP22iRd8",
  "key42": "yn9ZfqWifiPUL9t6p6tMfEiwxDBPmxECh84u8WXEU1kNGCXKDGkgBjuzsTXF5uCHPoaHnBGjKzdcWuPWhF6aWd4",
  "key43": "2vPRyDCDhZTBCpP5mdm6HqthEaUvo7VSzKug3nntWeAzWh1YySnWmjhTpPdenaGBqn7NZgEFRQ8NUw2t6maTe7pe"
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
