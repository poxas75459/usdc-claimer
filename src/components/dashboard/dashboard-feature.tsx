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
    "5ydb5gNEvKyWoZRjp8GuEoCkk62LzeRGsHsB8AdbKB7rW5smvhZzuPBQoDZ28tZbVTstf54a2TPWbjDQ3321Kzxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Md4fLeq18ZQtMD5ouSvX2QhwZpf47nWKmPgfMggoTd19b75Ajec5h28FaFz41xbwzeuZ3XQ9eUkpAWVLVY1q2k",
  "key1": "5k8Hkdd9d8HUgdKqtV1q7A3DqDagEnzc5owFxvHnJPDUMkb2KdnHa8pJ5hdVC3AjJUYMa62x9K8wqMh8LC2Dc3Gv",
  "key2": "3uP1mnmCCjYrh2XBRBL4VEfYj6qE82kwckzarHv3Ro1yurq9Gv27TCD4eakWjU4K2zJxbHrfHP4XJouYsU6nZxLb",
  "key3": "3r2saGEaMbYomcPmMzZPAukK9h64SHGaVWfNCi9juyrs1x8vUDizLoFffQS7xfcCW2FYS25sMdwyp7Eep6Z892Ap",
  "key4": "4UaJSSvyazr1at72JP6r37nA6D36tDmdh2p8Y1kTgDZR2L4ox2URC8SGC3eK2E5Yr9AWcTZUFo89tM2XoFJHJK6N",
  "key5": "2Dkehf5rmRMLVHw6aCYZrrewG6sQDKVRUkUH2KkXh57zEKzyzHPyZF9SRhuSHnsMg2Eh69M2rsP795FMiPb4PFZt",
  "key6": "67XmDhCq8jTMqauKgumCz8M29p7D2ip9fvh6tXz7gvDa5p1irdK8GGRj3hWPFU8DprSHwWFnoiiTFwuR19HPybxx",
  "key7": "2qoTabEnk659apLvK8k3NvkBCgkW1kzQMznYSfSQp1UVK8da1nWEVuS3NYFBcsM6T6YRD5JMWU7XitcCD6PxZyBx",
  "key8": "2E17tD5vdHts9AbX5khjeGzkdLHjxRW3RPfP5vAmEpfvEUhh6fzuJs9m1eACRZVdTfatWkBfzmYcTxNuoeZegTfq",
  "key9": "5JMkpzZBpitoS3rD5NN4KbkKqJsCh9VzKPdJKrSUXeowLHrNpr9ATgmmHhN3bokSh9Eybm9ziZLBhASBEgKDrxx3",
  "key10": "irjRJCVxhhA19AeXNqDfQkFnFuMLUeCATQGT6pqDY9JbdKp65btqXUMLmM4af9ZPyFmk9zazrHa9wyb5cSTzbpr",
  "key11": "4JK97TG9J7W1ABWv3QnD4iWDvG8Tn5jzBhjNJZPhwDyj94onMZWESzoU3X9QSLDSwffzjJ3XBJNAWBYHiZhRdu7x",
  "key12": "2YDooTAjUABNhDVyKAHyGS4jAZMFZuS98zDkZPeyX3MFJhVBa9CKTUmmtV1ShqeLyqPVnXNvMssfEa6L9zZXmAt5",
  "key13": "2YKWeYLbTWd7Yb5qdrHQjRmPkDAZixpWh6tDtXjGLpia3jJBigRTSziSossVz2PcESnNkNevTAVHSab2YUXkSSWs",
  "key14": "5PXyyTXCMnEbtD26ZdNiYs8MTg9kk68kucFkh7tT27VJKSMKSA8Cohg5q5ZugYjNe7RSfCPg1TfXFpbKBsQycTKX",
  "key15": "2Axd2k5QRgmtZK1xbLC2TmkuPXS2mZWdFUb2mYzndbkz8Q7bHiS2TcuP6yWtaDF6xgbb66STjbRxjdn3d9i534gJ",
  "key16": "4uVYSjVf1t9FmC3QWamzRFa51RCYZxxs9c1CM3jdG6sY287mEmKWWQ1Kz82RuhLVh2qgCaakzrjUbHsvGqvXoH4z",
  "key17": "2SyuAU3egrjfj4Wij1VSKALien511Qxj6XRy2vvikq73vFs1rYroMD9BwPBB2wFfqyjAnsj91C5Mbs9Qj3Zgu8pD",
  "key18": "4ytCMHbuwe8i62Vem67gjWaxBFXnWdpnkozqPtpH5dRP6w6t2c8g85w7PmtN7aYErUWSDMZygg4MyVNNgAwap5UL",
  "key19": "c7P95v2QZrtKi9my3vpZzsSW4gC91i3fWFoodabessxz2ek7XJL1HmdMP7xnZJyMXJzoWEife9zVW5PZkssx7nt",
  "key20": "45YCnvFvt91KiMktounjChQpXUF2kuj9r9qwdBzazLiC8o6po6HBRbotuarv9R7mey1HRucy2dbYrYD1MPkqGyaa",
  "key21": "45xCXev2Jg6qPcqQ8rPpAoQfM2mn6p9YWGrwyvehuxaGC3ECNBBH6DGkrwAMbQY7KRHtbYRvaSYDu8JL1evfrvbC",
  "key22": "5FFmVQibMEFUHdAxDk1yDkBGwTc8mWDasqPvBoYf6wzUiqBKEQjVCSf47VSwunENDP2XRQ8KhiKZ5LpzfVEsyxVf",
  "key23": "jF6zdwDYWovobBrcBe2UFJb1LGDsGqgy4Q25EpzbBTNo5vqHqnXcZAiEsHivoH6ZT4YdXk8YsVbV6QseVEuuSVr",
  "key24": "5yLon21eXnpoUaGGyYaQFKkf1ELV91ZDoEy1N9TuRAnHrcwXKY9ZuLhVsUCKJrp3Hk1tB14RnkeDCTBJZHfXbuqT",
  "key25": "iqYrYti7WSpVACapqMdK8XqMoMp23yB6YhJLZMmkYGMsvrHVM5Ya8tpfnesETz7rX3ZFQHwUnKEu4Pi74sfBWzv",
  "key26": "4cRCrgcKETnH2SE3StdhxDYRmv1KwnuLd4T7aJqruZLgTzvjvzKeZDGXHtSeHEhJrHNXs6oAyupHx7prAoVP91LA",
  "key27": "617s4pGX71qiZtgpi7AxCgWNq1Jn8vNkSydU2u8rK8T1SAWhQJdcYZLbcq5aCsvC2a7yLwYQioEFTMPbV7vDzqsw",
  "key28": "2bh1tsmJnm789h7ekLL4ciLGvhcWmfL1gR6DCbStrMmEXpx33NVHGwsXwKSgRJPckqMAY1UCY7VxZV6NTQyDd19z",
  "key29": "2CEVGNj5M9c2r1CmXUhsucCqLBhYkejTwSZQ246CHsT3Td4NjRN5JksVSMe6NmRRdTtiaftygnX5Y2U2tDsVxiyZ",
  "key30": "54qZABaKyHB99SHagyRx542z42i4xRgk1xTupPm4WphsQJFL5YLgtyqdRAtHeJcuZrG5156ZZyYYKiPoaDTPjV4Z",
  "key31": "65uUMrXH8BNR1AUayriBRYE37U36UTUd4NPHFzgSRBUq7iu5yuq9PVknwDdvEdkwsULgfGoaYqf6YZdwXrNkXsv7",
  "key32": "2uapZoU2s7dRswXwLBrZ1ACmMi2KnK3nBnB3P1PTmPet7MEsGdmHuwjVU76ugnVR8BYdsaoLxxuXkNwycQNgHGdq",
  "key33": "4h6zLpm8LN2FULy1eQVYVqZb3fDeK6WBp9nzKkHkD2de6ET785ArveNTo8fpB2Nhue4Ps6dDwZWjXqFN7iCFPrw1",
  "key34": "2g2SMieWV8qS754fAFPp5HtTr5JZAiDYgq4SLEE4Y4pTZXzkTUFxEYocbEEW9NoAokaG6Z5dpxxyknVcgu4VzWvY",
  "key35": "3HPTYwueBinAnzJULmRwGyFnn9aNvKMByq9XY9quvYbtHBqEChi5xZcFig33yUhCVsbcXjPj5iPUHp42J1kW2T7z"
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
