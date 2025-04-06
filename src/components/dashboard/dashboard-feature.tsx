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
    "2t8JNpYDKWTj5CNjoezx7vSP6b5Dyf4vYz8NhHvpC3b2GLjZkUkpuP6agPMGeWJaqduP2KWyLvLDaYaRigWe3Qs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Yg3YmbEKktvfwaQwd74zVX6Q7uyNvRynfQiQuzSUar7aznBeFhzYJnRKcQHsnU5zmemda9DJThu2sqkti2jyA5",
  "key1": "wRDEDoj8rrb3tPJ8F3emABVYNbWQM9QDSUeh16CrkGP7m3sASkr5NK9b33Yo5ViiYuZtLSFFuui7DmAmZULCAet",
  "key2": "4mXqfadG4hLBtbzY4A95akDHRCrDnvTbQdBQChf6enjG4QmGxZwc3XW3Zxx9cjzbbvG6oiRY5T9jYZroPYjGv6M4",
  "key3": "56zSp7AxeE7Pi3qz51zm1GVGjcnTtG9ZgadhJzwhaHGsov2pkN7GjjcJqmYii7KcpSLm7pdDCvPSQvy4aM5oN7iT",
  "key4": "5pnvA6kxsehnDHiUx6eYqmdgU4wVzTTJUvZx9CxzsJdGAu3zjsArCaCKN7ip1W7sR941XCciERzAmheqaQ99kgHw",
  "key5": "fKMoEHL3ojUeNYu6pgwtFuFAcsDumq5vitfcNKF6iPSGFgd4NqDy5mqPq4wB7nL9D8JX6tygmJUYZ5ZTFeZq5J1",
  "key6": "5TWCmY5x7Dnt5US2sergaVTQmJ8H72ud49LHD1UqGHXEwLV9szq9g9fHorCB2iBkULf5ZGjq7baNwg3s9gPnwvzZ",
  "key7": "3adkCnXU1ZGirPyPU9cuB6dRrb7zrWYrriVHuN3bZ8zcGRQwiY11g48yjnTVcX6mcP1p3asrp3eNb3Ss3HKH4vco",
  "key8": "3LqTKjG2k13qu4Di7WhgXxVbZL88y6AtGVh5nD2jjYRuXEpW9w6MsFRejSiApri6Gjsj6MWVfm27MH1vJnWwQZUW",
  "key9": "63v3RwkHgnGmm9kzYFKaH4RzDVM1344sdFJuFQvnUW4j8s3DJS6UjUE4TthcygUe6Pp9oAMymeLm16kBQ6td6X4K",
  "key10": "3RX6deDBhJjBq2DZ1WZMxirdXkfztUT6XCiVDwjjYtsMkPEZBWgpwks2Ln9StKAQMFQcoitUMBzjAPeyAmXu96N5",
  "key11": "51CDH5kFCYnd5tY94qnfQMFkSCbRkCGW4f7SEaw1x5uo98MxLbme9urQYiQtnUD29eU8mZ17kmpVmeTVLALm62bx",
  "key12": "4VwLKBjsZsMYFHRKgaPp2CWSmE7djvT4eAwTD5E5cm6inUZxHYLekvejmR4G8mT7esVEq832od952WPkbPGKdPqP",
  "key13": "4VadKqYDoYERYsEcCYCbN8etfWhyzpSPTv1ZTZYFexgTavGkvTtUmdmAS5Y1uY3nVYz4vK6YAFFg7PmqT96NRDgf",
  "key14": "21D1ga34VhWvXj8BytteepyCuQdNsRSodo1zCsaukCK2f6b3zPz7oTsXe5QjkJZJqiVivrqxYh1yj6GeTGFxVKLy",
  "key15": "LPuDy64iys3LBf9ZTKBD6Yyzq8PASvFr87Bbfwr6z9UeJGsrnDYDqP4vVikn8dzjLJ6RbXV66iVLZ9STm3dPTD8",
  "key16": "oX5nXmq1Yb6jZLGfkM29Y3AofacaH1ATEn5wXuQ6EvcqtTmLfwPnQhaw6mEAyaQGSCokiE8xF8CLmCzEiRWV8gD",
  "key17": "2fDRP1oNC3ii7Wp93RgYKQEDDANaHubmubL6jLw7JtB4rxjnPpaTuBAMmjjZa7eWvRDoJ92Y6dHbCyhdLJXhd798",
  "key18": "5FNK3Z37Mm5z5rEo68cVZvMRdqgVzNVkh2EYHxSebbfKVUvsHFetDiMdpHFAhxAtT8NVngpttKYDRbJZGTEWZMgF",
  "key19": "5tdGdW5iGXwkgaZ8uNft2rxAkiJJ4UhBKMc5dMgWUaq7aJW29Jidcodo2DJPpsNTdHHHpku9Fe9hzG8G9Ewyodww",
  "key20": "2arphvQ4e4YNbvvbwQ1BE6isCKNqWpKdwb6SME1aNmhLu8Tjqzt2NETaLddcoKwzcVMP7p7bueyTavzuPZMLoksq",
  "key21": "5Wv3ySS59yHB3EfiemndDRPDUGNUq8aTrNGVt7n6GhqMVfWUHPsHVLWw7EjrFXK1os47Pe4Y6ThNg3BezjAHjvz2",
  "key22": "myuJsscdsS8yVJ6SLSewJf9PZ13Gpj2RLLWmUBuh8udFo4Aa2eqMJimEWhPSaJ9ttgz5mUo3RavgyXca92Haf5c",
  "key23": "xtxZZzGFomukjWsPvGUQ6SVj9Q3tRgGafAmzQMXyKUdMJJT8FSz1UE55wHp98GwUjxNCpwFRwvCHYdfi4tcranB",
  "key24": "My6N4Z7aDYVbkQ78UXsSV8d4FRgVA1JfozcUJnaYW2CDYBNPfbTyZHjA8d5yHjYAEgo9Krbt8hafPa3DvGAuGCN",
  "key25": "2WUnezYfb2bX6WfmPvoPRfhQKdaK8jDXAZ2mpNXkBg6GEYzJMDXbHTxEGbrQpYpR114yU6v7Ro9gpL1CC8ABDpjj",
  "key26": "ntJvs8XcmtYqMbBvKCJhtHsm5qThquUepVBdKwFUvobwnDwth2ZjKfw1MbaHt5KnM8xy7JYNRjYdAkTgYc6UdrU",
  "key27": "4ut5vxoLjwr1wi1TYq2oiDRgDDSi1nN27oECTbo2yxDHtCUMMLyRbVsrZNtDJo74SokoBKfZ4b8Ps4syK9PamsLN",
  "key28": "2Znkcu84eRtTwDJaBg6Y5oe5uHwXeFyEkybXAbZBucJx1j7WvVge96grdaMs9JPXh5GABUuyT12srVSyay8P5ykg",
  "key29": "mxdypAn1mnnaUayUZf8QoiozxE5eTUN4JUfJGyVadxmNS1xYSBaevYEeevtWjrJDHtW69b1hdBYktUuEvyftL74",
  "key30": "61ZYtvxNPqD2vtortK138BYDgY16BVw5Mo2wx8S3iefPJfFDEA5b3uvooG6cAApJvXnzqwwDyPHZSXmSJEzyujxA",
  "key31": "2qE2vTnCi3x7mpZs1zC8zkXLTwKkco14n8J8eMStLmiPqmGJBEorE4Ngf9jP5QJ5dJUay2ejmuJGzMdaNpMktY4u",
  "key32": "2Yy87RP7FUKSJhPFo2zbeSZhHaWrpaAEFyRTvGSFZApMYQspLjBwF4FkSCSRBX4CQuTYDHesC8gpaPaZjmAmP3sz",
  "key33": "28mbQiqx3tU8nTFCYdCELCryPxPiwpCwhGiPaEyfcJ7113djyMufS1oU6Q5tz4p4yVXjWiKZ4cR3zdGebPUJUCB3",
  "key34": "2jc6P1HNcgyJXE7NuAJSFes7ukcqtkgSkd72p1XWCNJuEAsxPNGJUeBuh5Rxuye7EqnzRhtSjztPR6hNEZcnxXYX",
  "key35": "vspGggNkA2dKLRH7ze3xrUNzbMACs1bswUprSbTt1C7Ssxh5p8NVazCmAUcQaUnxMkN9uKAP2vvQwHAhrMF5bcN",
  "key36": "35wHZjcuqoPkSVpphrSncW5y5epNDJphFAL8hRL9ezJKLePgd7CLWxm2gePTDa9Vw2HRoZEMs7E82SZhWwrNPuC5",
  "key37": "2uCrG22egCkHgRq9PFsAno4zgqLRfiuTvoDXLrHn69Ne9K1idEJHAUS9bKPDqUBt3LRbb3ux1sXiAjJWTvALuMjE",
  "key38": "DymvWx2PEYHELpBWZzea4L139KxFKtRu52nCVnXtyvUb9nCiauxeVmEveokhe9QLyYgLcVresWKywryt7UPkBPS",
  "key39": "2NkXNxe8XhbasrG8oWrwnp66WkA9BZXuekt3qQmvidqMttWPLg6GFGkAERX5X24Es6NUP5LJcgGYb35A64FXuAcq",
  "key40": "3TLSUGh4bDeHGtdtgMGc4mJRV5uwX1uaCPZNKgexTp4YgJoVia8rPpf1URr3ob2YwDkQPpzCyRj6H85c9V89uq4v",
  "key41": "44E6G9FSTQnYHZN6ND4RNgAc7iuHoDEsgK7ubJT4SCL8eWPuXuq5SyFUFSYJu5iwpDwTxF3nAFX2h1GaK5rRUbpm",
  "key42": "4YiZ47wCAsZgd7PTuoJBEm7GkCqN71mHty2rkJH44S1bGmgGbd1U88N6zjLyZy19CA5FL4FcnS8Sn7PtPidggryf"
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
