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
    "3skwvCVxXCxiQ7pWjqMQu6AqsaazpASZQneEL7dDTgxcL1nKmhWrT3Rt9anDc4sqZPbyJPBjFMUMS6TvZKBJxMHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCYtSaG68uUnphFQaCVWY9JmMReQ5nTvCP9dNxdk73T9ZDLxEMXpQLTGqP3fFkhD5iuXD797GBn5fCqeB7h73mc",
  "key1": "5RbeMqqCD21TDRnu6u8u62F9X8rKTQZcT5S5GrqyTDCYSBB1uFAGSQbBLUpJe4PfEzmTPB3FmEqNnpnqgAh7pNwJ",
  "key2": "2gixr1DUkkwxDzYPvufQSyxt4QJaW1ZGMqJYpuyokVUgNMDRjRr7jSpZhzYCBRsk2HsKen2aJdot6p1RZjcgMFEE",
  "key3": "ZKp2r6AMSUDbupt5wZ6x7ttY7kBy7N6W9bwRz7TiJDtTo1eCU6sx8DbuKvH1rGbvsonMZgAQiabNHBNxtncijW6",
  "key4": "eNR9a4ngTVy4oz4zNcc1nrEntu8R9iQDe7r5YhSaEYfLhMNpVhAwhyqmKc92DdNsr4qDwHxziTCqkvuHwRVvnDF",
  "key5": "3p7wzCCebwKjhiPVJWxCpftBp9kMCpmhZQq8pS693rZArY7e16J5ioR2F89tudqVYepMCcr5boiMo3QGYa2R6MEh",
  "key6": "iym2tkmg2BnGrv2banq8J7iRaW9eNn78PnTePRSCPuvs9Cv3qPF2Sd9XKDPc2162djZME4z53RyWH4gkfntpgCr",
  "key7": "64zPH8RW8ZjCDtc8G6oEfYAoiHVH45EmSXPfytDi75z15GHpACDdTEbSBbzQWpkuQvK2ziq24m6KA8pS4y49k3SA",
  "key8": "9XbrDgGq5tCcLgmjy612HD2wKurY4aidHZ8QeAPmXWhyo7VeXPnA9k7S1MLxa3nCfqFSk5dzPYyt9S3upt6d2Be",
  "key9": "3cL3fMfP98NfK4QGPUqAzQj3ocZ6YRg2A76jqi3iEhMQdFZx4iPudaWmB4MGgbMGrEW1V9Lopa99oYaRtRfLPGd4",
  "key10": "G65GRAHsQYy55gvm9FKswC6AU6oz3QyZWJ75JJG8Df5RDnqdBTMPbsF5dKgDcP3faQWZsRLubNnwrXHVDAf2Rx8",
  "key11": "4mkvThJ7QdoqKudEMJbfW1oXpJYK9P1eYgQaV9iBMi8TCMcH8xsrzPcqTYRmzdERr5Hr9LsKziv5dki8T9PUwG9a",
  "key12": "JktUMbgCMb6ez4G6oMEXPrV9dtfNDURMDMBgLMPBemH9WRqZJYBwaxEnoScpJvMsDKwx3Ekuaj5WZirZXY9ATN7",
  "key13": "3LJ9HyrX2hMbeLcAAQpFLpXCtd6iUojF44S5kRf877gxyJWvXzKp32yLAk2GughVd9PSXZbueDXgjc7u2tVS8TXW",
  "key14": "4z4Rj5pAWQrDnYiMTLia73ZKMqGyRi23ShoZdudPRXhVPYBTa5PYq94p6kwKs6xSL7zUJ9n7jBh6xTT2hFhKiUkT",
  "key15": "3DwZNGfcQT39JTT6Q6aNTAqHC9smH4AzSqpwQvPLcWuDkdbYZsn3sKxcgtV87b9bSZvRWLaM2ukay9SnwHH8qLPr",
  "key16": "49WxAcu66spnGU4qjV7fBNLCepwCGLjFcvZzhKFHNbZ1WL1BoW633ybG1i2HK34VKg8BSCDRmLwwYGvcK17vFif8",
  "key17": "a672i1MtgX5hiWeCkK5DmbcZLJEXKyo21DSShyQXrbpLe8PZbn9WkEDDCMSc9sjJqJMPStUdSv4URgMXc6Au7HS",
  "key18": "2SEE4ZT7GVjAHCkKaorPgx6M4vrNfaR7hWXSc5QXwVvY6Nt86AyD4dPedUBbBCWPDTPYnFEnM7wLv4ftRtHrSWp1",
  "key19": "4jz7aJB1QVvRAho3CytdJ1syXsteq8HNKN4WWtAmGtBtBYXoPGX64mMMPVxhc3ooQcapeY1odsiQ61rXyLrVXPzT",
  "key20": "5Wgf1tNLvPca1qE1fB1pqyg3PwjVd4qGJFn6UN9c6cESx5oMB8gXNJqJfWjJG2vU7riwRe6n3eS51tM38R5cChaE",
  "key21": "4GhPCD3TT16Af1ib72hVDzWpkYwxwepD6Ad34KFvurwCdNDwxQF123UFtd3swzeoNhHoA938DEL4fMJykHyfL42Q",
  "key22": "3KYCpqwfBzdPsxkQU3v9mvdKbwd1bftBrQHCKDFw2LJT5w8vGWrM9ZifDwD3bYdAR9uEYLXCn29jrrNBqrekFeaR",
  "key23": "4i24gggSkwP7NrE7jMCkuoVbaeQ6bkVdie5yWWQgoFLStDL9GU6mXkuoAVJsKvdDNjgvL77kNGkCByyzaHV77dyV",
  "key24": "4JQcrBSRusmnZdJDCBFLEU9HJK3FECDaPWR8TAg5J4LaW152NXxYZRktgfCsDjpFvLsMD12ok6zd1KoByskzEbgM",
  "key25": "5PVcEvMF2qWwQYMQfsM82bQZ4os1CT6gZ7cqXpPZ9aUzCvbYj34JnjUdEpbWyFmWVdVJSnozfNtex6sYGRD9DwtT",
  "key26": "24ujCJ6kVagKy3X6DB9ftneXmvDELvMzvfm5YstPn4tT67qfsvnSiQTHGX4WyMUY5eeSfGhzpzSrQvNw59sg1Vyk",
  "key27": "2zyJbptejTozQv7115DJ8i3YveZkNToXdqyR7chMnsjBv8uPK9emkVHUP41EBWnDi6Ddc2CN7XXV9SCtrsquUS48",
  "key28": "4d8dWGMD4gTtSjG2HkghJRmhrxuuiW3nQoR9KW1sKPRVwWRuu5wHSLQfw8XPPBQ7KciaZ4gHWqiK7Ze1onpq8hkK",
  "key29": "5jPjQQu3Ws6JEMdwrWyvBgsmSfsVHugZzQFukbCxE7meobZXx9YSEiF348kV87bfExZNmgtWRkeQFXDUZ8wLqb1u",
  "key30": "xY8fpKCmXRd5id5fgF9VMQqR5YcnvTJvfH7EhBeuirZCnstAJSMSiVQ9DvjcSJLWYdckLzMFkeKTE8kynVRkdCG",
  "key31": "2ZXsJfnCsgihPEzzUMMNdb8UndkQd2yUZjCxxmjEDkBsFKUPEq6N9umBvgvJ6JFmTqm85tHs36twZzKSxq2NpK7p",
  "key32": "4aftBfcMvgUFNJbZo2iTcNx1v4zejmDMJpBtgwucNCjX9BUW8YvmomXACLRBdvE9HBsZB1SZaNjasCVMX4qEboiF",
  "key33": "52U3TNFE2HUmvxKmhyufqXWMoBq7sz2sCXZ83iDoZwcMuFQqZns7HdisvfiHJ22HHuFvdUS5vx1bbMjVWj9MPygJ",
  "key34": "Dvg6GzBhA8PpADHqzJWGv3rgxZJ3sTof83pKmf3EDiC2sL919qqA6LCfjoiX7TAEggfdsFb41NhZ7MWf3HQTPhx",
  "key35": "5skBDXuahpiM8b9WAszNfiXjaGqAck1MhqxvKjL6q1XRvbVx8MAmWBbW9ab2GBw6tUfuhhVykZKvMRHp6BkfKrcJ",
  "key36": "HMweHrFYtqVnx1zGbKB5hgg9VbVSX6dURadDBXdrzCsCrcrjZmR5w3NziDS151asP2v6Dmi6tRPpjjbWaV2dJdS",
  "key37": "dAqsbJNGg8Fih5yQmdieFpRKx6nEmcRCQsk78idbgYVcyrfx8QERtDS9FvZp9umkcshAA7u3jR86m1zWH9RD5JN",
  "key38": "5gTWQ8Kwikb12uUwAnQaUxUpviSE4JLUmAGMvM9wA3u8nvcNC5y4ob932br2JEZY7pCyDgSoZNWVhaifemXKpqRp",
  "key39": "5mhuHyatUvvUedGusFEcYeQpihens76uXwiAWdTDSR38YFLG2nW2Pn9y59b4vb66HzeRuyxr3c1mgdD8J9EBKV37",
  "key40": "2QXJWdKCfeYvmxQih1o987yqpRzmNGJdcwoZcwusU5wBpKScVMtat2kwi8zXt4sikKSzxC7EBpRBnsG6vbunpCwm",
  "key41": "3En76pmJaubyB66MrSJA4wc8FFotM2kqRbVSDhLFtDPejjrv2NiYcLKLmaVYxX6CbSEHgnMV1EV1H8WrFmmmpFz",
  "key42": "45rZzCRyHurZftJzmAFCCnS8DGLbVP4yKRQYPMbYRadGmu1iH847RW17saJwvScVBWkQg8oituaAE3w7u2LCdvaX",
  "key43": "2mwUFUQqxUvmpRUP1Wxd7js9EjFK1TWvdhrEQiDtuDRUqysXAD9bTJ1XngmcDkCuuYBSckN8yHfB5rjzBnbMQLsE",
  "key44": "2KKonoA9Fm4PhzD95mPnftwjtg8w1oP1w92bEpnRmWUoEsjMWCAbnB9hrtWyp5VzmzYsiscNxmWWLrFVq3EKqN1H",
  "key45": "ESpwApkDESJBabnv16RTYk4cN3Gf8vqvHnG1uFjeAvFH5MzSWztrQnsC2TJ9tr7jCJAgCVXY783D6mYg1dZX3HX",
  "key46": "3HgNuPpYSB7wYFmiiSX5cBUXzMjqtZVETg9KQNguTJUdgXZHXLTJ2AJE7vfLrx3LkMjT3umK2wZihwqejPUjVJXs",
  "key47": "5c1Vi1US1RcdFFH7J5ygiFgvpVo6aQfmLd7agu7piwzKp6hCfhusCprgQw7thzHvuQ3rKZn1vbzrdgiFiWKakDHq",
  "key48": "31cC3xunZtXShMNGA1q6HHMxFRKe6BDapJpLBUGwfoEDpFdcudcnAqbnRsmEUC8cvEXjZvcYGjaoKeEEHv87WymS"
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
