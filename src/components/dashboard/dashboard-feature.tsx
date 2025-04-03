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
    "4G42SC59AJuHa3AVFZ431DoDgCdPnvkZ9gAdNpS7nNrjA811t26xP2byosazPaw2EQip1Bvq2K6qSZPVaPJAnNsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHUYMUPFeAsk36WeCVCD6LeCoaQZgZBRttPJd4nsq89z6LnwuKTatgHyUgw9Si2cimerQ23Pp5zk3ebpCTbkf85",
  "key1": "3G1fHk3xjRRzSrHAKHRN2hhvc49z3DZtrq9JSy7JRi4fS6NkvozXxcstsmSe84vSdL4tY2RWQj6wTEP7w2VasaUf",
  "key2": "3Q8aEtuyNp3jf6apMaPa9E23TijEEcuqPeKZTni63tKM8Gows2GfNgHCFY6YAQATcNJcgo9Vt1WdhNiCLMtMVhVj",
  "key3": "5tPvcjHCfBXb6MmsHytRCSBZ5iQT4geaPhPsE6ogyQgpaxsDP5HHWKAk2GqHnt9DXRf5WxcyFUhybsHELsweUAo8",
  "key4": "4y5jB9n1RHSi6a7wze5UVeT9Zw77xWBRxVk6eM5Qpsk4998nanaXLDdXXKzCWnR9bMsDxgKETNoxziRpVpJNxNQD",
  "key5": "4DZersq6MwjSgeraFDUkvzJXvtsxYVbW1HT9mVB678MLNasxKvMEXhdwi7wkcjV6nRmtKkHkvtJAcAH7BMm36ZRP",
  "key6": "2ghDk2DwJCyJep9mk8Shv83fU8w8AywztBcMrN6qLYBjmXMKF7gNej8oG5ZPCDuqL216U5KeTGsfc3y75BNywufB",
  "key7": "57EcrGhUEBeewnkjALnajbkiaWh3pfQGaw6b66Y6Pd21WYb4jAruaYqY9G93BhheEPGRSET1wodxme5yKCkHau94",
  "key8": "3MZXZxCF1GRUc1ajdbHqUYmeaUsirzK83SyMdJ336UArVb498SxaNyQv1t2ZATy7ugPUqjahrtd6pJcnKqozermF",
  "key9": "35XD8e1a2QR2EH3DDfZwPbeEyqBJjUQAr2Nqn5kTD87tktyRT2yb4h8dF6F1RexiY7pUZH6TZ17Zzh3uchrsmqja",
  "key10": "4mLTt7GkdDwcsPP7sGkbGM9qee1BxUD56rTGTyCTgG94GKCCPZgaP4f3uMJJwm2amonYXYKudjNwokma5898SNyt",
  "key11": "4KTWQ6SH8dFvKFzJufUKbnLtw6bWrFLqKzyBeUq84voi6tZqgKzifRVqWgwaeqw78GHeUnYo12XPFtCjTHjTxC2y",
  "key12": "29EpWMG6uC5CKMWGz3A6ik3167RbwpMNM61Ze13XfBStCgVBWimLpTMW6yCcJH8iLGjYbCZ5r4S4K9hrvTwhWHbi",
  "key13": "2HgWwwYgYiFzcXHDLuGHttz5cvndn2UrChbQc1A5aySGu8k2vKcLimEKHdMbwxLc9d8gmszu5qNYuqFHzTDZqt7B",
  "key14": "2RD7t3BZ97kmXxxCFg8Wc3vRuZ2xmpRcCd4uUnSEtHkN9SKwXxTsNznDxGsz2HcbFQA6FX8mD5iw5kNqkLUzcRsd",
  "key15": "c7VcSnJzxzqmPzkCpEsxGk8Ch6gSV1wb7wagvMGVeGULYxBz4WoiGWoP8CF7jSVMiGzUdQCQFBKZu83B2pSE32v",
  "key16": "41GiFMLo5PWcQumj2DoScH7SoHfbmFVQGZmH47fGfHf6ePEgdbjk6BAntuXJNAXWPr7KrTew246gupPczUA69dmp",
  "key17": "4vtiG5wTkNwAbviWAT93FNURP11yJXSje8MQvoWojN3TTn9yjNeRgpbDZahvpxcEjrNNSo7BM1xwrWuQ9Bt9uwBa",
  "key18": "2YirZHmoXPwxUe9cgT9kyE85C8Du1VDDr8YiT5EmdNKnbmKwX4qm4t6JQRCchyc6DZJd1han42M84X21yRS1zKn7",
  "key19": "3kCHutPhT3aH9jq2ibbroqXoTXvVQ7KjjEgtrHACpTReqCdj6X4nungc3YatiHJyKga9biThZ4E6L4FApSvknpig",
  "key20": "HB7HuxCBQfTYepnGY69bPnfddqfueCUK6spHiEFu3qKobmsdXez5am9sVVJUKxeNz28rmr8TDgTXUqqGEBFdL9E",
  "key21": "4dKrPJ4g9m9aya2AboSm8pSSvZotw4rNoHoLSwGEYNWrqPtTLZSB7tj3dZ7yLTKNiTGr7ZZuoTg6y3ze9Tw7n3V",
  "key22": "4BszXAu9PznYUSN499DkkbLNXHm7uVV3e81xoced3ciUtRi4a6HHcF3aj1cj2QLrbMkfuigCXr3JmyLyEamB3Khg",
  "key23": "2SX8PDysgFDt4vPGnJVii1X1L3bsVKr1ArKVUMMqms7sVRaS2iDVAKtd6z28231uRaafzQBJvgWZpgboddtybZFY",
  "key24": "4tg8ibLwSWyF515sSGE9bYUGLdmFsdKpjAjPWKdzMwmurjmUWSkyShEUJoLmXKaHjjVcQ9ou3BKieuEpq5gZ4Kvx",
  "key25": "4zyCCR5nCnE3Xzjg6Dno5Lqm8BZ7YSXmFYQ7oaw2e2j2Qdc9u7tAozjRcFxDoSyoNwqJmuF6LH8JvUvNQYZ9kfsa",
  "key26": "rWz1ueJaGZHn9HxooCbVaSTUyqFsL7Uwxb4sJ5sVJcWjp5VZ1XuzLvNiNN34LNngKUZ4ZtX1ddRqMFj2ccoHUQZ",
  "key27": "f7CVotT92U9caCXUVFG7c72K7nvQ698mYJxLDTx8vFJeNzGTvPBZ2YPgY6CnLuMpCDg3rRtpTybViRdZ3Lje1RU",
  "key28": "46gfZpzfdw3XLxtEBsVyh2Ek7VnHE5E2xfXe5tCKpuR2QVAHf1GRSMzjLKy2Spvd7QJMWp4cPoskHsypaYVPd2Zu",
  "key29": "4dDe97Pder7sSA82NaJ7Ctbg4U8YznLgo2qrsepBetDFosfSbt77ReFpvM47ojDZWAZNf5C3hc5KGxux53jWxsPr",
  "key30": "ZCKHDW9jthKEJrTQLNGqJtjYYBwyJwnaQgRs5dg3RHUGP4CQji4BcSRNPC7NCUVJ3f3o8Kh7ZTNSq7kMAACdHQA",
  "key31": "4Xz2rZ4JSBZwSyGhPT3ojRuuwGmhkQwyxL376t6n74NEC9n6Y89tnLwXxqh5Bj6U48uutV4Quj4pEirw2qnHN5bP",
  "key32": "5dd5n7qupj4V7vSuwA36zvQKU8mGTvQ8fjNSy8BwcXC1hKE5fJNqR66YqsFhM5rJe8QyhpgsevxmeWQRMQNry5Ws",
  "key33": "24us4QDBpLM4ixGrUFoHbVHciqAd8RV82ePTDjdx4QFrzwhh2m8L75a1ShfMgEWd3qbfJzsEFQ1tj7UhrBriZdx3",
  "key34": "5ie1XN9YaFxJNAGmYgzoGXcUCBSWiS3tEaka7bDK9TWMwnXBw2eyzNVPR3RcdFmmvsjbPXzFFp1pnQCDdy2QmSdx",
  "key35": "fEBmVvWsc7maxze4ipQwsySBy34ymVD8yQbZ8sQfvpL9Ar63LHsis55BqC9zmdeykoC3LfcHVQf1bH8eBPW2PNL",
  "key36": "2MpCEuKqnBsn39A82rPW8qwYPnr95RS621CB8iugbNsz4a6QAPgK1rbfFhS7SCz6en1Zhqook72ryaajwbXG6zN4",
  "key37": "4Tnn5Aeqdm1YHyGb2qkoBRdw8j9vNNDiFXmb5fcdTkYgs4iXZKJwZGGFzVAvJpEKsvFmgiUuVR4GBpr9tA4rJ6en",
  "key38": "4CdH3pT8hENbr6AYwVu9vwEks8sjvu1RW7iLxMKXwaLYhGJAYtMxCaMCtS8Gck24qYEvzd1rKSfsYqaAd4FvjJjY",
  "key39": "5EabfDzs3QsEmm6KvsaRfUUjadQcfHbScaAnBmQLnrcA7RqwFij96Lx95wtxYCQazRXPgwxt15Jh5rCYKXaYxry",
  "key40": "3pBdRkK5zrWHXWJdDNyJZyGf8ZpZRG3LbQbtg2r2mRGCEGoFGJDbWQtZH6J9tEXJ5WzaLcK1WAzjRHdW8DeXskfq"
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
