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
    "38387CMWFmVkwNYGhyMfK697p2mb3wQM1iZcbDRQqWPxtzVFF1oFSCnAB63B2dLhYU34aMVsEkUVoA6w6ZKmuTrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sDXeFMoiE7pAb7W8agfkcyRhtP6UhcCxqJWXTnQLTgiqHAMrc6bfJGyqc6UPrkZjnh8HTxFjpYS3cLpnK4HcgWT",
  "key1": "2CxBwcw6ksfWGjbXuHmXdXJy8XBMcJC1GQpip3M8ks66v5AkMeb1qeUPUQnf74FKGc3S3T7yoKB1RtdTKu484MRL",
  "key2": "4BRBWQznHAkvSY1VgSSyXJ47Wq41YWVtnDcDBsSCtWQS5AGG29fS6ZxCNPhqh65spqEJuc1kWPhcqcVcKoWidoaR",
  "key3": "3oZU9C2AGWbxdJeWfUB2kVd5gZ4UBS9YZFedw1g81GmdQHmdthhA3MUXM59PYR4YSZV9ibQCSHRM39tEv8QMH5t8",
  "key4": "5aT9P73Me785hEgsTBfpNNfrpP4LKvXo2NVJxEzY48FmcKNEXEQi7ZVZtWRYf1cPhagBJdtiZHNHYrLcwE8HT411",
  "key5": "5qXziqet7DKkapPye9iUjPbBVxhQs7tZbrG3m4PNynbxG951CRNXxWoqZ99fDpiuCncnsfL7c6b6w898KxpvQoqm",
  "key6": "mXHCtftZmV2wPgRztfBQc1TfZsyryRGe967fa4EUE5qFDiWk7kmLApoM5hySq46BX4XBD18yn1L1TtZoT2eYRX3",
  "key7": "3iUhF8gVZhUMq5H4JD5qSABSptGyJg5wnf7J9tUmVvim1yaDakf3exVarG3jmLLoHdZo5wUwMbE261YZpVBmRKko",
  "key8": "4btavuys4YMkgUUQkWP9cQTq7uLbDJ6cFdPiWqYR8jjZUpcbG9PNMGrUEohZTFUu4WaFmspApVtGqM9aragTkEhr",
  "key9": "3dCJyRFWij97u5EGdTcgvc7GvmrP2fMFEAdjsZxs589wL6yda5vET3iGyC9QGbjUK6JF2x3jyngu1CmGhAEWvuv6",
  "key10": "4pkNGtn3v9JyKMbFxkEAaeai2b4jNbXGNEt6oBsNqzwospkU3fqJ1g7KL2Nxzo6C6eYBre6rbvDjsuroycbuDR3b",
  "key11": "4bAC6ZZQJmpmRhfXM5SkPVXE8NtjkMQRQvY5FVCCThgytajULaPtazCQTJDQf5MhmEhbWDNJFLBH1W1x6s11DQb8",
  "key12": "2A245WPbv6Lnza8gkcWQY4CDFWjsf5tn4PkLB8xvHmK49kkc9SzGQ7ufNXLAfobSZAhva8pt6uLXNKGcsyB2H25K",
  "key13": "2vX48RoEqSthGAXuH5aRDZ12sVibMtGbaUSXf717vaa7zsBYAMUFyc1QasfN3gEfq59bbFwi2SkpS9DkxiURdSmY",
  "key14": "3kZJnZa3m98iBPCEjEa7Avx1Az39bX1Zcny1CW183wekDaW5RbAYwRRrjGP53ce3vc3ij39F4ywZytr7tUbPh9Ze",
  "key15": "3uDPw6w7xwTyB2E9WrwTjGyzYPV1nwfUUghUfCAjfHoPpX6Z3rc99rTqiEknaLM8FmUy7CgKcxtNdwX2vdQPfGVF",
  "key16": "3Zcs6nz9CxC8yEtbAgzsfybJ5B2gxewxZDkoxAcAqa7yC3rWQtn2361brWAdPuMgRbEEoG25PigNeSTNokDJb7cU",
  "key17": "65z493ZPqJJfPcwqmaVqY2wBjMkBWL6gzQKUs1oXdoZF5bQ9D6rfx916sh19GLC5bonddGVB6yzkPFAhBTm5B9iW",
  "key18": "3A6qeErcUmbTB4LuAsTz3gcoNkVvKEv2FA8sZZmDZwtraezxGhNQg3RaBzEeQDhNnUte49YamSfJWNRsZzixx9jV",
  "key19": "4FsJXoQY5oLJ4Eove9NBRwvQ9NUo1k3ZvYwnk2fMzn37ynYwvtfzdihqqCrmqUURH52MTBpW9BAHQiNUkQ9eAss4",
  "key20": "24QHUj9ApMJmnJQHtVp7Wm6RXhpe9fs4AWx1SJR5JTM79WKHoPNRPrkqNiwyRSKCBSKHJg83Q5UhFGDc97JfeH8C",
  "key21": "5BUe8CyV8KCYUx7PeVzngMZ4HBzKsBR16NgN4EZWofr7FjsHuMJgAyiqYmnoSBwRP4Xj47wACQDaNqRWBu2BUueP",
  "key22": "3MJCKCeE5XPZBRrfxHi5qHRgCL7iyZqEwWJYkxV7SiMzPRzPLMnmh9ikTRAt7H6MMsgcqQ7FXybRynGqKPSw8gzY",
  "key23": "3eb2BcPv2VxvAbMPfbQP318UEcWN21nERPrYtk265aK9u3yoj3FH4NLAr83RVxoKS4EvTfkN8W6XyCgGnq4p8Zf7",
  "key24": "49wqg9tvz99YNiW271vkptb6KQjajGDwd1PbPGvVR8znPhK8pq9a5B3ARuNEB3JfrzPCzjypoSqa6ueX3JzuP5CW",
  "key25": "VwDa1JX5793yxUwtRuYtiP7rWjfQfS1p9vVKChjLXxFQeNrBZvy7x6BM1zcFxrQufuxiT38YXBdj3oeNkj72xJX",
  "key26": "34GoDgTQkfmBsjQqhoAc2yn3gJNmbsZVSCo5ngwG2wSWGEsXneYkzpRZRhHeWNgPXrAE3GRS28ogbZtQMdsMkve",
  "key27": "5CME1sHcPScdXhSJrrCXwght6naWeiQmSAkbf52RA1bFaTHH3Qz2Y6qQWGaYDxEjVNvTGxg4u2ApDRidSEKuAWtJ",
  "key28": "2vXZuPgMRK85m3yNdDyLzauRVmYv4kc1bjrw2Z5oXk9LPMGPdREgVYE9hy3k1f4xbDzExPPP4AaHwEe7vMDYWvdY",
  "key29": "2wFd59rG5LBZxu5YPGcYUdByEbB4vaRc7rrnt2gPw4BsYPfV9J8wss2nYiMgy9k23G5gCGiVr3wZeVHTmco6iBRm",
  "key30": "53jyW4x4SuJiy6cykWSyNUnu3v9QjbZv2WYqAbKHSswG8CsWPskH5puMdkfkqHHZX9Fw3vknsL5iCiLwoiYHff9q",
  "key31": "nw24FgsxVZ5JJr6Fo7SjfDFDYPh1j4DgTFEwExjdsRtuAz45QKGk5fafu3o3SBbdMnxfHHmELVQQ4bzYvCfjgHm",
  "key32": "3QaBSWArkH1kmquFtgdJRRuWuFQCPjLTMjEJ9nP7pr2nH8AYjRoyjKzrSK9fCfi5wyQKS9DiV25bDStKvAjov2Sw",
  "key33": "2Ffz3eCCoVqCU1rzVeJAjnggqT8n7Kp7yG57gc5Wwb3fossZ25RkHxw2sFEfatA5B9d3pGWYDUTcPhz7D6Hfc5KW",
  "key34": "4ai1pYshQtUcFdMRrWUp5nNfhMx1gDYED7ZFv7pyi7Yo4RENj22pDH7eoSAjbUZM9zPDm69xHKb41T5QoPtNDBVu",
  "key35": "5oucPfpWGmJegcbuSzbhSh9V4RZyLLHSyf5Udpezzfcot5cuHNQ5nRBj7npNXHMCvdggzFCdAxuxCc6mNxFCxam3",
  "key36": "58qvKB52RpPsJEG91UMJiXpWKRrSQrcdoNiFu8qc7zEYz4xofYVUmnidSuUEuHFHXExHHcjX3TKiPkTwUJWasPvH",
  "key37": "5bExiaQMFTvVbi81peaxgoyc8JpRteEsv4Yjmbcfw4EsquZm2t5mCrrhHrXPFdqta8NXv4tYnQgFPeGjfixWsM5Q",
  "key38": "2YrVBgYjBRye99Zm2rX6GVw1UNBvagwFwNbUHBkfgLLBnNXCag8DPh1AwuGoC1KYvZpYLTKJ85gg7nc1AAyV7hjS",
  "key39": "4yBFBeH1thfPvybqiDaiPrPrJ1vAp5tx5qXn2eFhJmimtKwY9v4cU2y7CchEUzVbVXXGhFXwSeLaUAHF2torPQL",
  "key40": "nD4fpebmh47sG1REB6jNjnupZfTHNeyDfozwwNQ1gWPbc7XmtEMVCHoM8kq56vicXqS1n9KtNn5wbdYr3xAYo5G",
  "key41": "5bTTe5mgZ5gpC2GehtGYodKeKSHnzseYv5AgKpj8qRxVmACCtMnUwhRxP1u5C9z84JbQSyGv48LmhYm8Mz8nz3V8",
  "key42": "3tWNXH7EGiz9qp9ozexwtn9Vdfi6HskyGncXkerNP38JHsrxbr8B2uYJsdKFrse3nY7zPfW1MEh3ui4b6mdor2Rr",
  "key43": "2xaWSBJK7WnckGcoDLqPisdUF7pXw8y1xuLhhWzzu26AxUDz1TBTr2wQzJyAFYSHftn34BHBrTfq8RQm53vsTg4G"
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
