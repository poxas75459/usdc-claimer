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
    "3TH6UitAUe5vWKyCKQNfw51QupJi8X4ygmg8CznXYopyy9nS5T54KyKLnQFJe4toFsMhJ22bbHvjLHuFRjLExRNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WBgjNRpSaVzv26D824ExxwkJHLDFc3aP8H59PZ3YhqVjBaypmRbu8iFs4GV4ZzLa6FVwLaNDzZymu5z3r2YBjKx",
  "key1": "37rzM9FLtDNcrXUYJax8aRQBrVRusDyEevbcbLckhzYN6eoK2UTa8SZEEVHRQi5LdeZW44qyW9639nJLUbH5UH8a",
  "key2": "2avtySbN5AVgXuS5MFdtU1Mf5pLjcx9a3vtzRHReTJC1VBUx5o5JcTaJHtc36LXJNkeZx8mYb1iM1mEyBzgL3Hz",
  "key3": "5VpLNWEzwy7HEUtvL7b6zFFN2E1Di8RCMoWJ9GwG6iwvSSFER13f2SR9oGVSMTPjsjcZUwMtkX7kkn4gpMrXJMs6",
  "key4": "5oA6ArDS2Ts8TAMwL6RuYWDeYKHdnGGdf8LCyKp1h3ZpZkgaRkWQs8DgV2tKXGjmTXmGcDidHssRrSMy9DboTyJn",
  "key5": "4PrzhwX9ogR2y3g7es6qDThuEW4qFvhGspTebRhs75pJHhM4AeCz2nyE9t4n9ZdoFrDd1ShRxciZRvo5j4MPq8NW",
  "key6": "2B7Wn6cLoeJr8LmCMhwvDDNa6MocYsY1bd2QbCvoPFtFwsYcZVfNm7TE3ewQCji5w8VTJoJoaCT4Ti9Tn1yZNsYS",
  "key7": "4PRT6cuFD14pLVa1NPVRR6KQkZK9gnDQ9y98NnRUxzuimNQ3fj6BH92nT1xbjiGRDRTFTe8gaZqih34qSc5TUXJ4",
  "key8": "3ZhnNSAmC2jcwBZ9aCZwKDQj5L4y5dtNnMhDKrF8KYQh4SyP89iursJfgtgfxwvu3m4it9cJpjtGvazTFNSbSBWR",
  "key9": "3RwnkULYSeXrvwWzmqdzrdoBDEwpE7peDctvHZHLdTN1Thg2X3vBAniKrdVuvg9ffXJBARzpwdJjnUXne7iv7HPR",
  "key10": "31jRWZBYmP4CjYnnNCBGq2iqUpR821f7VbFH9JwrYz5Rt5Z1Ui6gzH2ePwAQ7VMdzU8zcKyv6HWUv4bLatsuc25w",
  "key11": "5H6gWdCtDANAnSuyaMqnCgND4oJnvNd75XGQJEjznZ3bpFyQMNcNTtobL3xTw7q67bZRi1taZvhkc6vZjeYHrtd6",
  "key12": "5NpsW1ZhdAWBb2sMxgHzvbqupqaJ7CLuXS28qG3bQSqR4qbiCDLMMxXBPLYRQZDJRp1N6vc8pNBepWtz4j1JNbS9",
  "key13": "5aqaF1B9tHLaQXVGNZiwKor1XctUefYDD5PUjM8D2ZqhBwgfxy8PXUdzLRpxVraNYmRoXtbbErggbJ3NirgoPBnm",
  "key14": "2APw3645UJR3HT7RqCZk9wNZ7AFEUy8sHMcXvF6GEmeknkFpqF27zwaczbHqAHSag8wMed77Kg9pKpW35KhXCv31",
  "key15": "4E6KC2HJRsCBGvnuvjBfPppF32FPhJBcTGA5v4V9QMGGMQDUEH8HsMrqLjox7EUAdycRwEgmDMepEAS4T7Ai2BSy",
  "key16": "3RWkmJziymmrnEH6V4noypgWf67ouYqY7RyECodMvG6YGhBEcJ1XsK6qnqSdRwvitoUJ1kk7RqfqvmAwTDWpY5Ua",
  "key17": "2YbR5uQ2v9ub4z8b9AYjjVtJYxrCXGMTZDpqBNaQtP5nbSXwFEmivD3x5ynxBCRuqHRZi25e1ckX9vCwggYtqT3L",
  "key18": "4dj2mjUxUzoS9ty6CHxN71kCCersyVQR17PH59httcs33fQjfE8biSxtmpRXdsWE8fS6XH3qXawHh4tPLTdAJ7jQ",
  "key19": "3F9NtF43gLt9FEHvLRVo4UszraQyJc4U6QgGBt6GxeUXjGE4W7vaBEG1KbaDq5AEWRR8fgtQPeXN1QJ5b4Y83Yzn",
  "key20": "2wHUx7bZVXBXGNGrcvwd3nc6CKucYJ2mzN6AjoFWEodDKw8KWYUtK1d4xynvkGqfF2Syffu6h1SLXpD7HjZRVCCW",
  "key21": "5gLf6zvqnJoLstT5RDBL15HxyNEKFgxhbW3NAFUQN4b7RBTKwN1gC5YDfJ3WoKV5kP6NJZDzPf9CQp5DDdPsdRin",
  "key22": "2REREgGcN7ePYu4KDfZxhHyZmdvExLbLFLXQUdGMDBd3WSbmc26JZE4RkmwuVr2WcK3RghWBHjdyg2qygS42bFHn",
  "key23": "5ifhiJehWkNqZrLUPRRSNXDPanwarTixzkybqnWH897xJm95R66b4A3Lpu8rNENyAg2BRLYWiB7CKSqn1JLRvoj3",
  "key24": "QHjjdL4VbEsNjMQAg1b5mdWDJxMGKo6RVjPy27JgZRBLWioN5bxjFUzsxBfTGxBmQa13E58yx6hE6z9exTrWTMP",
  "key25": "48Gd4odVXmERUbK92xz5S5Rg6m9Wx9QcoF885kBdGcs9qtzsLpTEo5kkKpUmjQnikv5QinpuXXJbuW9CMhUaXPmV",
  "key26": "z8AMyhgXEawQtCLAxTpgK5cSrBnhMiukBjYyoNgCnnRUE5wvmR9EwkTAHRXZ7hw4iDNVu8dzmb1jaustZJbNLwu",
  "key27": "523KWcXwuAqabaVpUrrcGfJ8PhDWUcuVDVbqaQ2hYJFjr5vjTC1YJ4pCsiCnRWCtupbU8UbQ47LhM7zfKR661TCs",
  "key28": "2ehQ5hPRAM4Ybvkjksoy52fSAPBnoRkYx2owmJM5hbb9wvZU889HgbUTV5NhXUVgB4EneFyZPiVqEmzQTrKHTH8",
  "key29": "4pacm6Qxx1o9eSnDaP2JL3jxS9kU5VZUqyLu5jcsTR61sBXbDaepZxNxmvg8Uz9XrwcB1kBwX3Vc1ne2jCiYdRBs",
  "key30": "3JazY7veXqP1GovE53wshkmxmm3Gxkds2q3VTEMifpYzuTuP7Dk3bZgJshBxTcCHVGAViY1XaYMatMWzvoM2pbBA",
  "key31": "2efRVwACEyQHyXbw2wqUyZfh69ae3WwJvt8W8WToEEvQ4pF8z57tvRETi6oqBvT7gKZETv6yC8rYFYoP8hZpXJMv",
  "key32": "3is2FapgJMiBhGqBz1FoNM9fjnwsVFsBusDUVJYXPSGSo3SQfv4JYMF8ZzTHY4Ve3uzZVEbxwRMNThKV9CP5KTag",
  "key33": "4YMP5mmjtiBFrTxdTF2nn6vC4i2oUPNRQYyoCmUaQVr4QXh9Qa2ZWWVydcrZdAVd471isQE2j9TiAhF7ym6gFEou",
  "key34": "7cHan838L5dvG6ZovdEKi5xTV9LD398dWaeZ3ELQTChd19CCGizjhb3wQkgR4Bi1ZpVzGAqJE3TmPqG7Q6NLkfi",
  "key35": "2EjiGwG9XzJQC4TKu7CYPnXEzZoMKvWQSTU4WyRr3dfxByLYBgPjRk2zYagUiup9WHkyaN3xapQ2o6neogUxRyzq",
  "key36": "5bCC3qrWCfsDnWLPXLE9qm6VpkguVxx3tBnyMWgJmp2rjsHBroaziCMQoxdwSq1Nrnm5dtcUEZ2DgfxkTDF6o9Fy",
  "key37": "2ifDL9GxHPAK57JrXeNANdwjVKm376hE5gCpCZuAfXRvmRkoCP9hLyRz7C1KexNtinwHH3162tUcvgA6Xon3hoit",
  "key38": "5xzV3dt5qHoAMNE6EfVUWg2rcd4zUuMxqnKXs98GnR9TanSaXwtGQPbtUeMjeMMnWJYrSbPSrqstvsgMVWCAnHhU",
  "key39": "25CNdCVzDg6eSxC9mbYVvkmLyBDmcpNaEGP4RWmzDgWEmTcjftQhrGsMLFKtCxDxtAjbWcotQ4q1Ep1omiTNg54M",
  "key40": "2UQS3BmSqitQX5bQuQdDCe9cKPg1ruTs3PPWtUPyBAksiG9vQ4sjus7BBbKBtUor7j9dxNEcHmpwnkxCcDcjG37k",
  "key41": "2VXMmwJunwUGx6vpH3SiqRJBWzUjTgK7TGRZLoz1XyRZUUmPhLRt4AowuTU8nsYaQkoZEEraPADJYtJDRRAFw8w4",
  "key42": "5VXCM79nzYVLSQn1iuXSkWtuem9W611GkNHHfu27tfNDaAPmFtVywHSNrB54gtQqAz3K1i9D8aNPcGmrqX8BSFxg",
  "key43": "jgBfny4k4y1Tj2zRvaqer4zeA5qcQdFdnB4REpoebNrbn9MovwDxAW8NqgBW9RkiFfE6WxQkdGgxHNy5Xv7dU4v",
  "key44": "25hhULGG3AH5YNjgFXTLjXFTJhowQ2DJAt38VVdPMkgJXnq1cMdWTJywAd2ZqdMa6cjPaB51w7MgS8XEo5So9u87",
  "key45": "eBt99YzVN42HUdQmA6n5Vn2kKsZeQzWPGRGzLcodxujhcTPo2ZRy2rz4pyerHz7nKfsr6q2uXoWwxCkDrUfMbZi",
  "key46": "ivJrPQzdRzTFKu3QvzbrNd1a9HqxABz23L4FDfQFcBuRWM8pooUGE3CcbcAxHSFe9SvfiHJDqyZWzQFdHP4ikHb",
  "key47": "5HDMsAtCY9UQVLVCCW9HJ9HxCu5XyFLKFjZPnFZ8AzCg74ojtn9wzwbkec4NF8u8msFfJsz38Rrh7PH34JmByWb8"
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
