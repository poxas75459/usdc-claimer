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
    "3TiZE1DYnUVrTqJoArXS6Cx5ndrj3rCY2hKxrpsuVDp78i17jhBCXYQPrw5XaZgquFzdh5oSvFzhLNBWnAe7AXrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KyS86DA8o2R7wvaqWerrnj6gQDmxhNf3PfxbowrAbtyrwk755wuDXqKccAsHqbUBj12GZxja4yANVGHeQ1XRBZ9",
  "key1": "sPMs93JXdtekr5CCAZ5pauiiK3YqwdV67QoUoQpQZvKxJoqMDBigqeRuyr8GCPLKegk1pxnDEuj1MqxMAn8dJS1",
  "key2": "4q3AgWjyZ8RkwUKWPjMYeDCd6cv8meeEmrxvNufdHCnr3THpkdWyw4KLw8WfcSxbJtRYq6WrMvYSX4YUnMo1jX1q",
  "key3": "3Xzd73QVmuYS2EP98XuKRQmxQBh2soBQeUpuvEXnBYBvsJkQPN8hSAFi5HAEPHMKDvWpb12SEu6Kkt8dXTdUTr3v",
  "key4": "5BXd7ZFizTPBAsSXhUAwSKq9bnDg9pqSTsQztM7Tv4Xcz4hdbgYttwaJs3gna8667UwDnK351HdLcugsRCnzHd1E",
  "key5": "2WBWJoTgeqpcgpKwzQsY5wWHv41TWRr2wMgVegkY7samgdKj1uTGk6ozpwmtp6san5SZkJYnX825tgzEwk4xFY7D",
  "key6": "5ibVgxqNqh2eZvN35BBxZNxTrkXcCAq8TpsUFfER1Ui4RwKDLo8W5Bbbhjtaq9JyGnetZXiYrxmnvjCeHYJXp5gj",
  "key7": "3svZsoCGyy4sACTCL8EYBCgBGGtWqo8eFT4CBPJX6tB1d7F3bdEJavvgBjG6PtL6iVZvKiTE1wMAobh9qcwAbpPq",
  "key8": "33PcU4nsPrHf3WAcZAZPmmFh9CJKfAvvatxscZsSJWX3yEDC2gvV4hSgKc7JxLi8tP8MmgvtguCGMDALkYdKTjGp",
  "key9": "2ecskz4qsHqAndWQZs9hix7WPKNRQ8Nsd5RYRyEs3BuhuUm5zuZK6GNZKhV6GRCyxNvJH1YFDtCkfDvT31wkwCFA",
  "key10": "2mKrP2uJpcxSFRewLnqATimpP4vSBGjmtUxP1Ke3XAqJwr89a5XGyexA5CX2RkD85LxUuAJeTf93WeZhukcijWKo",
  "key11": "4ZN96R9JNX43pdVfKJf9goW23mrNviMVGqUehkx6eJPwxLQrY97NyNSQeuoMwKoUXpzgt1GaC1KbiUnyiaPfmiiK",
  "key12": "KbwTxPcn33ojcDkDEuTgLdpZXfQtjxkBq3ozWKSYj7JDrY13AE6vFkztjqusysasEmYJ7aUWdKhDm1VhmNNJ47R",
  "key13": "zswC7XFmJycUJLQo44YBEWu7K9Dm8ze29HJ9jBSpipM3mMDjNitzij9hoQaoaREnB5wxCjf65L2nDT69G4Bc1xP",
  "key14": "V5NwTPVeArTd9ZWzhNdes3YAfiq1H4WGQpHE5VMYLPXUXuMMVkq9dnZkUvnYXHi3wpGvkeg16rZUtF6DnZE3bhK",
  "key15": "5B1sYChYMe4npPJBU4UQ4co83zSPzCMV54ZfUy5pkogFDXjN7JAjzfMxJXFEn6NUnAiph5EXYbefVrRAcSYWPYZa",
  "key16": "3f5GpbCuyZzALEsoQU4Fr2QuUuSbhJTEdiVRiogdcbdokzKpV4MK5y3yN5tZVfsbtPK6Vz3WJ9hmdza3k2JGjwoj",
  "key17": "3bFJUTBFiQwb73B5ZMymK1CF2caBcDuWgD9zR7Q6P4CqejTecq9Z3pKURas26M61p7xJWtfxMfvWV1QAaxbgkxdQ",
  "key18": "dejpadD9jH38CijFBabDzNvdknWyhvcq466sjm4pdMXGTViL83rGF7B1rZYXyRbjpkzhBsu9sh5ChP7sTZJ3qhg",
  "key19": "9ePY3AL3o9sqyUjVNpMCYgmFh5d5dHwcLeWN1cMSjaTiE13hMtaeW1iLetLRYQnjGkyvEuKcpjcD1HDbmj8Ds37",
  "key20": "3exXBsFQ1V71zUFmxkjdahsrVDt4KqWrwEcppBNhT25PaKaSsisaLpMNtZxzKkCktitsd5MVTuNNiq2rhPx2cdq9",
  "key21": "7YELQjArGCjSJv8NHUct9gZ1Kme7jcDmjnvFHuUznSHngLVsBNSVwkPC2dhbEjqLnQFbiYpiXzonrmGikZ1GoS4",
  "key22": "YM2Cpub9J7jyJ3nL4cMQpfBRpdfz6mNtJXBcKbbRYyEwt1hwi2G5xabViCi3QgLeeDDyAPaz5dQJyg3Ew4Mqxno",
  "key23": "4nVpEtfQb3F256aPFgzXofTJNLLY3DqqHNXNpx88iNzRqKtQn2hhcG1tUdREkjKpt4sucrWTYwLsnAeZy5X7DSvq",
  "key24": "5paDBTNiRrDnWrnQSD8j3wKTk3Bbi9g3XCZM3P4RGsV4mjYSC2ra2simFSLVAikRKu9peSi6SDfGJuqZWDXV4MuN",
  "key25": "4wGDYgUQnzAyYPqAAMm9h2xoSfkxhHug36Bp7LuzEgZJRQoMmNJAKRFW1arAYHNBDY4ePp16s2cPJ4M3VHFy1AMM",
  "key26": "2pKYVeRvHST3EuomhXFuNKFeC8u7BCWaxFsAdRFxKnYYQ9jDz2yVBkcW6CnrU3hdbg6SWEAqBnjoU9w2Bz43rBVg",
  "key27": "5HuAFt39KxHQdf62chuXuv5bvzFXQPkKog7GQKYjNFdC8NPxDL1mzhFRzPKNVxH5d6cEEU8UZYEFTwwFMSHLnb96",
  "key28": "3ygKNregMTZbxZhVbWzWaoFZcF78VN5Q57mhjCiVocZ6EJfKgchv6P79LrbPDYXHffkQf78QQeeBpAaR9u5L17Y",
  "key29": "2xgCbpM4HaPuKxZn2LUESu8A9B2z37QNGc8tvU9JPtL4Yz5SWxUkEWRdijijZ4JrUd7HfwoLjMWb1TgVq5xiuNgb",
  "key30": "2C2VHkZnoPPHNoBtxuTNftpmb6cxd2zWVyqeWmRvFrRoBRMYyvQXTf73tuHsk5Nz8ugK3KXjCBMM5RST7pfYdCKn",
  "key31": "2kS8skorpZvoqNP14DuHiQWVDrDRqhbA7jzjSp9PVJ2WjmCEKXJeEnZbhUdas4kGihBMiSRKsiL9w4ufNcoURrQs"
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
