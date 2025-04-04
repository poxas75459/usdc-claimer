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
    "3DQiXgsy7bghtLD3aZU7bipUXHqxtr3bTSveHLWZStLX7iVcK1QSjwbRDgwJwpwtgNG76uim8nfe2dZTASAqwaAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62XThZAxAJoBwb5VfWPVG35GtStBsp64vhmBVHTx3w9sw7DMM9ZAos1i3BhfTFUzVKvtyuX4GonxUD6R4oy91wo",
  "key1": "5MKQu9BRSepF59iVYkjM6b1ENdS9zExqW4UZAzHMZ9rqzdjtEf8PLZGRBJKF683T6KV31EuddpBbNtmHzrPZ76JY",
  "key2": "32kWynFU6HJUdNFnDS1zYTpfttGpjNCQSvEjdSzRfvsUuRJVeiCixnNr2x8dxzDaPNvFHJ6gYsFj3aRCSMC1ndYX",
  "key3": "3b3gRkYmLdKPn3WcyouZCkNXU3PukgcvhVPPCkM1dLLvkGnE98oKfahCZyAHgtrrD3BejiSdxMRdhd9km5QjxVk4",
  "key4": "2y8ySdDzhio4oNrk27sVDHnmgGLNPL6nQoT1UJ54b49karyopmtLp9Jm2rgSMF8TDj2tcrqCFkxKva8dmNniu1dk",
  "key5": "sxBA3P4S9c5kMhYcmBhhQGwanQzd6RobZsH5ZwFGafTwWyscdosgymWY7FQ4dkKL9CJs81ZhXtqFtBTTRKfEVCS",
  "key6": "5mKqHddqWbysLqD7SJKctLKKBiK1sQfB3FxiALmFrZMxKTFH68Zqx1CPegEMkqTQuRJCRFEUoFbAJwr5b5vJp6Eh",
  "key7": "4vKZLbwaTVkqzkbxYwYLNeoPt7MKSTdv4CjVLqywuKUJTLuW72pXXXeBDwM4oodcfdHYnU49YFUqAbA1j3kbAsZ2",
  "key8": "3gnN62b2JSSLu9roSFMMhB2AKdCsoHsY2funATAxRwDv2ZXe3QvgeoK1NCX65M734c7uhcghGi7ZRwHwa1mNFk2Z",
  "key9": "2ed6tNRnEgQMZDzR1sSbHpkggbCBQ2MRoxaVuVXE9DuCjuux6DExUCgb7Vr8jNYd2NPEuUimFVF94Je3J4qSRT1e",
  "key10": "39Di143FBVienRqM2FUJRn8M6jXnx5zgMwJ57EqiR7GdWDE4wjm7TsfVpXSyH7ERqxfzftPfmSk7e35qYHYqfDtU",
  "key11": "5PEDnEntVKkDgvVbqTJJNMgGxMqRmpTG4m89buGKY4wFQdLbu23aTAMX1qon1igZ6kn5mruRL7Kko6yRgfqU6nXh",
  "key12": "2Fg4wEyNVkFXb5YRyHN7JTdQpJuC3usFsxHg56qzUsT6CxuAuKAeNuUQirofXKBCTdcuJNY95wDKmKDH3av2Nxf9",
  "key13": "3nb5CdbEBQdnHv3hcEfQTNUsHdj3uuHAprGYnDtuQ7KDG2zN1zZXrqCz7kvC3iSjWmUx3E8G66BekjsaowvTdnms",
  "key14": "5kfQwTAzi6kppKtV58jJTyUGp1XracqWGYa3MniVm5Ui44CzKCogy2gRM8TLGz9if3ixqFDizVAXpqw8t8KVbraA",
  "key15": "5os2DhsnwxFBU8SPVfDYvJm2UFB2irdhAs248k6dM2R4dPGG4G8vPFuBQbncyPnjf7vvxwJyq7vYfJuz6VncKeBK",
  "key16": "5fgriSFRr3acE4sjGj32dhK15QpCAcagfX1wHq9Jjkhv76RdxengDzcbjd2R1v1J1EBU9zQWk163uf54qxunZHsS",
  "key17": "zJgNaxUGMdzx6HEsqjaJV5mAkx8oyYqkpoQx2VKZmnK9DvjDyqvPuYcfXVRMGRdNdeo6hcYHvCq6wq3PEqptCYM",
  "key18": "3VUFjSG3PJhTHEvgoNs1JzYzcMaKLv5aRagFDdPgz7Yj786WftQonkpP4n6NWXajHQgPxh62feCQLexcZ2aqSuNG",
  "key19": "2g1vvsnaP6kLdeCuWT4MXjXjqMMYPMAmukcgPE5r25CatRYgFdZhoxfoRnWTebmWDw93wwDAZNPLqSaheDtrGFwQ",
  "key20": "4Rnd3GbyjnaFFfp3rEA5tdvCuujz1dQLkkFy6mP7uBaJ15Pt2z5Ba5PmyMHH1qdPAjpF8euZNFVHFXvuswdBjoMQ",
  "key21": "5kUSzT9zA5T5MCuAuTrmUmc1GPMU9XjrEywDSgXRiS1UBpz8nx7TE2cQtL2g3oskeAWGE8spg4tn2mbPwqzmxg2W",
  "key22": "KY9fbTecKpboPDbviAYEWDsCsJJdSCapX6uRCL3ZYKZ3AxGTDbKXkVxfBSVQVHDrH4qctECu6JHPXjaSHVBqrtb",
  "key23": "4vpJ4U5jnix5udF9em2LByv5FkRnKQa6Su5vkE9uvkV3N7M8WkDDtCk3Mw1oumSJHRojihReucbXbJeKxHPsRGMB",
  "key24": "2Z6TZnCWBSWxkZUoDoqPDCZtwdK8Nev6D8A8VKyn62gq3V73sZduTFYJ6c8zZ2MXm3FsfZU7AP8YWmhy2MqkH4J2",
  "key25": "jBXjFV4zgtB6MjLAioEuvaHqSqoFoGHcU6dj3Rk33ja5KXVrFWdh8QweiEJmv58jUvF2t6xrxwS6d43mXARVStc",
  "key26": "s34uNysYefUAxbF3xydvxmqyigrxgKBrNxBvD9FoUCa3PUpFbabT1LVwg9QBNrkSdqJTymbMVe8Sx8arvJCs1pv",
  "key27": "2vwhjtR3XnNsFZPkpQrrtHxc6y6GyQThf7GGMNgSS5PWKpM4GPeTqTSBemsLoCTQRVW3X8pCJzh3AWeEfGmo76DZ",
  "key28": "3kWhe5hBgVL26wDntH6SLmxuMyFHUxpGA4g11rhaGpFaPYKJNLSNv1WAz39xa9irfKZ4f634TkzqTD8fA2wjjscu",
  "key29": "3aCthXndKN21xCaT4xLe8xxEBmjcs2RiEfR5nhu2iDdfvccjwzd7bJkfwQGfzXWUTSCAbrLb1jmqCuoFMgAJSB4F",
  "key30": "37wFLgnPT6E9NyBLLVS1JPb8dEmB4gGVsfh8wkGBHjXjrtuMbqzuNocWC2uhYP3GHtoNALHt4eTYQz9f5PYCg8oC",
  "key31": "mtTwMcd3iQbygyiNxbk21iep2RAmLvacd5CmJ3zPDjgTvBcM3GhPCVHsT3py4q2ym5UmFM4his4W7gLCGggFsXu",
  "key32": "5i9mqWLnbEUKoDot8h3QU1Cxp9miMo3XqYZZtHVbbCjYHQC3gGXkfeRMcDj7MRrUpPCiNiWKEiCSdD16VeYcCc44",
  "key33": "BYbqoFvDeFRrZwyLE8XKFwB7v9FebAbTXkoaYZWygxvbQGDVc2Q7igDZi9RxS8dSG93VkHAjTnMB9Z5eeNvHUqe",
  "key34": "2qamGJjWgcBhp1HqwB4LwUAJfUVJ1PZ11gxdqDq1mZ9TWiG29dFXgaTaQ8SwGqMg742wMgxVde1WbioWs4M5nTBp",
  "key35": "2LmGymTcbRDUYWBeCPqiie2t3q7hZ2VKypd3ta66fhfYCgKwG6gCACmQz5FdvMmpWd1CezRHWuWvdacJczwNNTuc",
  "key36": "45a6JXFxfjabfSB5TA62qBgpoXMG2jVNcqNCQ7YkAw2r8nqgLKvKYhJw6rmY3G7VVFQ8LiQxS4mJbjnywZeMnNm7",
  "key37": "HzKNyz2Qi38eBcXUiQG5tRcspkfY72EWmUve6BGi4NMWMePxsSYqG5bbwA4etaVjypFWCNkvrfxRARXccJqFon1",
  "key38": "5wCXfQpbFJZ9UfkFVD8c3aaFujRW2yYASwJ9QH9QLRiz4uVYwuKmDnZFofzkEG2gdse4cimEaZjrrfm8sTRneFHW",
  "key39": "29R6pi8nuvvuZ564babFDg9ps6RTzvKvpBAnzn7QFtjo9Q3Zsag53fsExQwgYHcQrNVTmt7561RFrSRbUxALq5XS",
  "key40": "3HHZfWf6927zVuDzqHiArRJY4RNV3936mLJRKjmyZJQAUSggKg8r97MpHgjbyeybgACU3iCjGXohwAcD5pQakw6e",
  "key41": "sGRagfHLD8MZ5GTyAbZ9s84cyDKr4kkcE49aahN9xUMvATkHEQTvrGwndBKvEw1UNThk3jkLktzU9R2pAyKtYjA",
  "key42": "3iXUo8mfbMc3g66xtMZwv3MFR3jjRTC1he15TSR5QfufGAXuaws7yU53dMyCCnbL9YRaoGc7PkUdHufUvj5c7dTd",
  "key43": "3FkBA193pKQ9VQP3kqbTKPQ9f6X32b8fEqvfstQQQZjxq7r7Ee78vsNHDzRnsya7V2kyegPGxqaQHFZK2DetLT9L",
  "key44": "5JERHr2UQBNvSFWJUFBi4aqCiESjsEraK48zspSbRXELbPB1KtN4jgV2ao37xc6nK4PMsdE3Ddjo3Qw4prWYKzsL",
  "key45": "FNKLjFBBQ69KxXb3ge4pWTvCfdEBXR7nGJ9XEg8eTNhwhs2umf9yx2tQ85bbeC6dZuV7sonqhwFRnte66xrwtBq",
  "key46": "47JDdnAhztmX9xGcT9s9HX8L2z1zum2ZtzUGXXugrnF9Ca84mhfrG7MLLYkssRFib9ZuFg9mruhLxDR2mAH9JFuo",
  "key47": "3CKCBXoAf7tBYQi4rA6nLHMjA9U7ZPd2ALx1jvkVQQM6rSxrn2rFMDkWEKcPJgMbhFvSCigX4KdNq7HNsf49nkKw",
  "key48": "4WAgfS46D1qPUyrxp4vdYxV52JEM6uXTAugJVBciMMFVNtsT8zj8Xzi5pku4KZDccLyq1zkKZ7sbDjPFJ2z59XsN"
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
