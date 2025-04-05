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
    "4jWs3P8oZtEPQiPrrtZGf82ahUmAYuztXxaXeujmusTDHcKBefU1mfCR7iZ2Q4treKCpSn5v96KSR83tb5aqkFRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBqkM3M1NYnXL2MWakaBf1eiC9B8di4GDBrYNr4vF3KR8gacVdkQkuduRVyi4RicxpJeqC3RhpRCWwYCsTM5Fn6",
  "key1": "67gL5ZHT9htfJo2dugxHnF1PCfu1PUQcCnn3iynmNvDppkw4LZHVWQKnAH4YXgyYKymvm5MdRfHkZMki27tAsMq1",
  "key2": "2YsrrD3ZnUW2PA2duSY7KTeuFYxxC1GZ6ZSrFUNUdq9efoR1WGtYtD2uAwtJjhA2gYTB82mxrvywj3Ctcocip79m",
  "key3": "23oeH6TxNNEgcGniZq4YLXza2ErN5xK4Xtns7oMj7YLasHciaF2xLBuwG61jgqDuayaxoiMH6nnSGfqsr48GgMTs",
  "key4": "4bgok7xGfy7C6Ft9FNVLsze7u5ST6ydxTJ2DWosGgZnXM6pLxmiaxq4xraGMgoHg1eoL7z5J2Mv6ngqgxsvUjgdt",
  "key5": "3y4b2zsFyub8UJRz6e4cBuNfzTyV2hD88Kc2Nj3vbfuQ46UUzPqNYgtT7P8W4rAShy7EaUG25sC83yeVAuLFyDJg",
  "key6": "2UXiLZWsVpBXhSv4fc3CAuSaYW8mvbo1Hm8AWyjB7X5g5kLsPiQgK7w4CxRm78xDwghoqysQyzb6qsKbrybNJZxc",
  "key7": "2ShDxdmBmYAYCyLsqTsa8yiCtZigvNeqj2QNFN8YKjchad9YHvEpoJfNUJqEVUdjZii7rdqzpvpT9ViV5fX8jK4u",
  "key8": "3yc4parLNVkKr1Z1LRsuVJAw9nrV1pe7a1xQkWEifbJctPt63dNCL2WQMbmEn4Bx3UTooqbKqnge4gf1fe4dDXom",
  "key9": "42MHM5oE1ULqSG1fGucncHZp8Aj3qBkSnk3iqf3qBqczSuEoan85xBVe6iLeTZ6tvJAJikcdowr6o5bnYH32ST7c",
  "key10": "4oUmHtR2G7jDXSw2S6kFyLavfWcm4AeyFi7EGs5mV6BJNaJwNz1WJWub1ajVGcEJHkZfVbTj9pufSPkp5ENQkpc9",
  "key11": "2rqUtaPktbrUYEZ4E5tMobvArxcgQticVCzL1LF2yw6f7GTWidSQXydG9rD2Sy98nTxik5VRJ1povpdkjHoe4Tcx",
  "key12": "5kqEGroGwbKYtT75rWM98sSx3gB9XfJVS4qsKRK6Px5BFHeaN1HkC5ybcnZFNJNMFXHiYM7i7CMeaRQxNUEdLaXH",
  "key13": "2faF22S1As6GQb8HdLdvYLihHHYDxboNbmLzzqjHpH4CSFHTvU8mt7JNE5LRpbZydWDuSJLQWvs672AnjW5aiAU2",
  "key14": "5QdnBKQRvePvAh9awxgPv5MyXwQCZBsKXKnNtjuY6evMLsGkdX7Xkd7FPgNk9A8Ayb83s5sohkzHuEceYzC6sft4",
  "key15": "5xmdSsHdTsSvuJyBQNHBYKs1gAGKfSpWeFj49zWXFX6Pgjva6FL1woKk16g3ncnQEZ7nHqHKdRziuyzuU7ysnSK9",
  "key16": "2A1N2BSRRCMbbizHRzRs1psVCP7S5cvciiPCFQ3RKDGaUWxrFma2QNHKrJ761kiTLjqH36i2wYFDcTno1GvZdhyv",
  "key17": "473XtVrqRMTpUA5ygZCv7qXEsKtjqUak9dsYFK6hqZaaQnbHbY4eEQf26zV64Ydu9GiRtY3s4XNUngm3zwjfK3RY",
  "key18": "52wAca5hwgnTBB797CQGWDmqjbud4kQhSAsZ5fVUzZLoJ1bkSmwXPvCUo2wR88YSjhcjA6zy34qsLjxMZb5oc9bN",
  "key19": "3r5CXqfymzDVg45n6ccUrCcyDzv8JpDkXUcV77xUkSzQMaw2sPxjomQwiP3k5uZB7E2bQxn97bVHmKej9mqJbpi1",
  "key20": "3o2jYrBjNVzmGteysh1KKpYNTNe3WUC6Gk9PzzTEWZrzfZqxvVHtNyazxCYWmV31SwSf5efBoKuKobZZEB8ZtvTb",
  "key21": "2s5uxVCb3pEqo8ortewtg5N1dWhHFMvDFhFGNYQXVk7RyUHVpP79QMrMUSTw9E1KxiJzi63ULw3asTPu8yv9EU8U",
  "key22": "42MSxfbpWDZpVco52gxJqczZcH6ZnFeeonQkd7YCqfMyJ79k45qTTDFDYRjYT8sUdBtZuKCiPCy3aTm5qo7iU74H",
  "key23": "oH2LCSxpFhe2zajGQPgxMhPsqS5R6WbELFdXvGxvgJCk75MmTaspVPLBepda4QeddjyiYDuk4SkCauuHyNH3zzu",
  "key24": "3KYGVpgDuQzMSXaXg3v6FAUvK86XRcnh5vJ6tdhJji3yhEhEf9GeH29eVSQ7oVKxh5NTBeXLh9rxJ5m7DSb1WokD",
  "key25": "36nu6XjGE8egK7D67EP42UR5r82uLx5bGjkhqUoMzrLNZmVbEVSJN4riTJmaevguTN5VhFHxbVJJKWfXE1DoBiq1",
  "key26": "BdvMdHLgriUqmRRckwxnyh7ES2bmGwEpoLbWPd6PYZyq7qnNam12ovknZVfa2sHJEyY2KBYN6MZjsGah42JfReA",
  "key27": "3mWTprZXMTBHJ2E2bsvaEtcH4WShAiNx6GrtsJW9n33M3j6euGDGhgqnkddiYhVwA58XzNhd31BmMgAfDjkqSaAc",
  "key28": "482H5K5ViEfEucUFS69xkUshadVMntLSFfc7W67KTcRTtY5PWBG4hLwerAMpgMeqkb5xWz9mpaASZ7Tkqo2eQCpZ",
  "key29": "cWvmPo4j7JQTxsb3NseVPf4s2MMhFoXZFV38Wn7eP5hLQd1k43t9sS1at9pm4LEavbfbpq5FFKWGKTib3PpUf7v",
  "key30": "4KrTRZe3TXpjn7a38KWo3usRCyq68SB98bp83UreBns1JTkimCqesy5pjuF3f9nZz6mgiDrfNatmJjYLCCa9znj",
  "key31": "8a2gQdTPjU2se3m3u8eE7AANX5Fwr1Ark8jZH9VgeBZDNqKPnyAJci39TH2jrbTN9G16DRmpDZFQMYRbWzRWMxm",
  "key32": "5msjYJg2j1QgHYA6ssT7owhLMV4rncJc7nRppA1KsmVvAYXVwxt1Nu1HCPZ8m8hzmqy6unLq5e4LVo9xJDNhLY5i",
  "key33": "3DLQ8E7G9sebtqCJBmaniEMvVGLepYeLPkYTfNPwJgpvyPr6MabABXco5CzEWUtrJ6kr3NRZwoyvNrgBAoosyaSh",
  "key34": "4B8je7BZMQVTcv8nQKoBZARbRKSddoqijMDnsUxxrbJ5rEejs4LWzc57yUpsteJjhnpgLosPJUXyy57zGBN297yb",
  "key35": "5XTFGAJPvrqHzpye3x88RnXxod2LWSMMdxR9HWwHgTUYCinEkeMkoWjQ1V4zNDJuuKHL8ms26TyZNgh5kuPeYfPt",
  "key36": "2VoEh5bsuF8m79Sr2B7pGLYdKHt67qBTbysPZibJN3yn6tURpShMxbdnmAZc3BHUGnmrjmMi3TgNMms9rf3w2idn",
  "key37": "5aRANwQtLpJTdqgr6XAqwwWnVS1akE3Ksw8HzdDNujLupc6wJXLQpjyhPfss7CiLbPbe4MmdXTfbZ4g6gyb1TmZE",
  "key38": "2RQsTtL6fd2C5A16mM8zJNhCsozM58pGChPFLURmxZaGpQ2msSTYs7Uei1xJP7JPEQqgWC6vRqGRyi1muXKypCMK",
  "key39": "3Nyht8obuxhAAt2udUNxehZb7QzVN9UDSvYjYX8vyxCxRaRkqGvC4pDC4bPvXz3Aszavjfo5w43H4fQyHBsuvpd9"
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
