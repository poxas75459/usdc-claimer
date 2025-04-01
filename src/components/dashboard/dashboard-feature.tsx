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
    "jugjmS9D1Qcf5MNNsAAujnf9Y6kzM9ezmvWqHgp5JZJYMMwZgwsj62zU7ePmtivicRT3FaXuGP3QUc6ctGjsygy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eriWDn8onnk7Bx9PrpqEffdSbMUfmj3zDkAeYrvn4bjsS6omFHvjYygee2jUrjvk8XWA2JtE7x3WWruhcVQFtCw",
  "key1": "4qUzTrZ2Lo17hgPtkxvDCCH4bjMyBHDxvQ147KKySatLNVQZD4k3AwyCkNnZQc41eHgHMxHgUDmK1ZVAooSpF55b",
  "key2": "HNSfg1tVGWy6KygvNdS7RkdzVjtCFXz7xvTdaCFNPw5iAdFkMYEwjzbtHtBVi91JBe7MCAh5bHgMqFvga6fdmeU",
  "key3": "Sqea6CnLiYUR9PZdpmLtDqktw2WphvAKtvJ8dqyGQsgHx6tqGHCWTWzFAPS1wWq5Z9P7TF6CPLtpaDSe6zoRr78",
  "key4": "2fjkHHbnqNHsaobnXSWhsyNq5JyjXSJGo6kyd57zVMUTA9ps58DsHYM31qxfzq33L8D12zPZgBfH2GK3jFk9XgEh",
  "key5": "58kRT2mVe6H9mAgPyKz8pqxHo7k29R4idfKaH2BS6u7C4SfV6zp8xqQ3u4WXpdrGmxGiN1cf8Y2CvMgFznHeSRS5",
  "key6": "2cqUPnVaBrDUnE5gciViMKpo27qTwajKqQUCKM3EAWfKu2BXUwydJ43FazLfgYkx6fNRaGSuJXNwvvSUwvugztRf",
  "key7": "2Q7tVHybw6oYVVCuomN2rug17AeTYbLaeMuPbPNgBtqZQvkEaWtUL8KXnJzLetpZSGF7fHdjvhmTJ1a7zkDqSVPm",
  "key8": "4Pd4QRNvABhTzCoVupu1NeEayMiux9V86VxXpbGJvB8nc24GJT1d99CnYgTC2tNA5aDJr23PHS19BkMGLjEZGifL",
  "key9": "8i6WYx9a27yxUKfkp9xPJJFWcWEmioj1mriYEyXmy8ZzWZqMFjAhReHYkTA3gxM3fb26PbSh5U9MPoqm92myqHj",
  "key10": "3NP2RFsUDZWkEK7nabKkN2xG97MGSmsdraXWJT4VXFQtYTp1zLdo34fa8V9J86oENdYXrRLLPTpvEgDYHv5mBPX6",
  "key11": "5vxef1cnxhhZiRUT3PZxbAQLwenkJEFTZ2JfjAHyUaXmb33RJMn8cUbpac8ei6PJU8wt8TkibpeJbHEXfXJQyeiR",
  "key12": "2jXXirnk8y1QMejKq58FdfWuiVUVU1nSrDEcvXULxnYg4vrN7s5SC52HCQjFakxzntjGGeVPTk7HJ5F8sN6eKVoZ",
  "key13": "5gUMdPeCitvEDYD6RkywgYhfqg8gyZ5x4DAfMTEppPZUSnbNsP1BHF5hZ6ZpbCgn6NARRMFdo6vfjUpwJirErjsT",
  "key14": "5mwCuK8NHCwpvZHFVj87sMPktgEunEKGmASyU9vmHJoRdwxFEdTq8drmB9Ca56veRiu7FEqe2g28h3nuNxKuoYMY",
  "key15": "5GfWB1pJSuLFapBVzyPJcMhjPBaUSq7oy9H6YeycRryB1NzLhX5PGBXrgn5vSQpNsHhWdtRwWrzBp5nNEbyT6YHn",
  "key16": "54EF7ipXaxgcCyB3A3M9NW6AMEaAyPEFsaAhPoiB2wRe9ERodUQUUzSxJVqjEreoaaiujSwThW2WKawEmFi3LJ18",
  "key17": "yCvr4XsFRqCb63FAQGojvS2GFW4B92HzrFumuepvUMosseniLwkfkp4quVb1vjdKeooQEcQUzHfqPmGH64sJnzk",
  "key18": "2rph6ETGKzFCU7gjyKJKoWis3TNS5EpDHNm74tV7a11jHovATh8wWpqoHkdS7LUYsSEn16sx8pFr4LUhumcmTZyE",
  "key19": "2o6RPiT919GMLpGK1dFtok2WH4yH1VH8KQbZH4p6UUtwHHE8vhny1bxMJrDa84ydEhUxcifPNK8wnUo6mN6jZMAX",
  "key20": "2HP5ZgHFMRuEYpiZe3gAmGy5GuoRHFz8yni9Y6uwHY1yowoVF1LksCYtA61ZbUyJfsUrpsYtEknbJo4ikxjY51j8",
  "key21": "5i2JAJHf7HfCjiaStuQsD561P3q2z4SHZ2u4DNmZFp55RADkfQsbSTg2LdE7cup6ZY9EGxptuW7Ehnyimt9XVDe4",
  "key22": "6xGnMRd4SjNWpH1sHZ4veTDM1jhzcw7MkbUHHaUoGJrgLu3eDe2CEnjS7sKhreRq5ckLiVMFDnMh4ofVUdNbdbr",
  "key23": "4mXJZ91q4zTxuJVJjLRDN6SJcc9Gt134RPYwS8JH8S5DW7mDGKzXp644oM4gEMiUX3GPqKK3oSBwZTH2MqDeJjVj",
  "key24": "5PiSqdF2wgX6aNRZMsAH33d2RfkLmGMFFNKuYEgKd7W3Z2kcKCQ1CSVwe8bEb5vMQPko95qTX3Md68jzVq4Ab6LC",
  "key25": "4WjrNgyNQgRRk1xAcFAhMn4teqcyufeNzAFstTUNv1dWoWthsfLFGzt1jnBh5qMdm7sT4xaxfjmgVno4yBrPAUrj",
  "key26": "58v3Yf8rMmXXw4EiQPaXUfNuzae6HB6JrB4zBMqhyVZ2uLUvQY2a1Pq4QVTyoK6yvKQEwxK3VbQRSLywwD2TokBg",
  "key27": "3ywvva9x11n5CuYwAQ2zQzDUj1jMhVtvsoGe5LDavNkUXHQzfmye1zyYs9UdKCe6MdTTXeChYY7RpR3Lfg82ftqu",
  "key28": "2Y6qVzQDddk35DHbkzh7HpwkbNvYDXpzEnzurhZW87MY3EF2nPi4rkSQV6ezUD4m7raDYZ9a98az9qxd8xj2z3xF",
  "key29": "5j6Y3197jrwa3rb3EkQ6Wucym7Ryaj1mRiF6MSD3PLj9BWktgTQnEj3XHgaCtKgpU7PQTAmnPevnycRtoKexKh1Q",
  "key30": "49kD55DTJushhs3QWRbRibnyZFdAk3sWhC2YouaFQ9ixhfmkgALVGdUu9wQ6XLkf1dmbpzt63SZStjRXfE9Yhh3y",
  "key31": "2Cqwv9H86QRCEPW26jr2dj42ctgiLEwt6gw9eTMQv7U7wT2RqDUsYwCAV3wXTSg3MSfsxXBmEum6nFL94iNjbXdP",
  "key32": "2GcU7KhsZn8RvKwt8zFPniV6rBKAUNzU9xcoNBeEpUTUqSYmCZqik2uHZVijXNUQ3SS9LurNALmEkS1N1RatjhYe"
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
