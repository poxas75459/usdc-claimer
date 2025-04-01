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
    "4oTXccuD8suhYUZksbSJ4ee6v2pyfJ8AdXLsvY43YeYVU4JKEQ6pa9fbyvKTfVU6oJqEuYAAxYcSiHyh6EP2qx2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4n2JGCwAUywm2cQGz5mTkW44gzfCvGuyaKa8sczmcxmvSwryHkwS6kV5KZGwwSjpqKu1vpMgKVJLyjrF8Y1uUo",
  "key1": "3ip7XKwACvf4bLsaRhJWQuWgw2okKVBnw3kgRg3fHEX9z9wvHEEPbKhudafSqZuuiRnqZSnoK88aRquV9nrotAGA",
  "key2": "5HU6EGU4CM4zEtNpvqCsV6Sjzaw1r6EWPXdCtcK36xMpD8ey8UEUJFjqnKpmsbPy88a9gAetu7teJE6P6BWLK9jU",
  "key3": "3yTLRJzVjXToeEhso2g98vsAmBZhMngM8DUbcXJgc2K3V32AftZX5asizZdsNtJHoFQRidYUYN4H1TdGAQSkwoCm",
  "key4": "2EFkZywBynaUxRfWoabBj21MdExsYopjvFwEdC1gFqU3XZEWnhXtTxumW9y1RkdF4wLPfH1KmWBTBVSBUwdrJD1m",
  "key5": "5XXgb2AUdEgG16JZfvjDuATPAvuGbQtyFzUispCiweJuHfP9cdNqcrD9SpEHVPm9sWFZMaMR3TvHKFH3vXqqEtN3",
  "key6": "2DsimFt2D91piQJUa4wNqWUaBnukrvTxds5rTwga1nQFs5bbpEjtyPjNPwfZrL2LTEtNTUjqYpg7ap21PQaePDGo",
  "key7": "4rkdju5oPuz4wNU6ELx5H9mMTr5ANA7AVht7Q7RtSeyo6pmf5rCYDNMJdghqWXXzXv37BrBDhMycviGkKQYA9PKj",
  "key8": "2jgjaAocXgcru4piPr776XLdksRghyzmdK55ZWjAC15EFZW5YQbUspWEPzgnsKgsehhsMegaCE8A5Pjqta4zpaY6",
  "key9": "4yRSvigmiphKYD8Uz1FZSvoux3FbyyhcBYXCsAhiQ4FsjKnoKBMHB3ZgErM6NUJtSsdKYVf2qWjZ8ZssAFcsEgg5",
  "key10": "imxWPxQHDPQy8BWBWbZnWzoaaeeDttCzti3QKJzmioLXY4Z5xbNLih1gbUKv8WUYgAxdPtSGSvydgZrp5HoWckU",
  "key11": "4VB3yRar7Qxuz4tzK3cVzoCpS6Nf8beHmpdjE9zvNTbfSLNs59XigAhVycKHY4GfUKFctsVaYPknTcKLLoVDDz2J",
  "key12": "48DGukUub81VEELCyuqThEB1dM3XEDvqnfXPCHaHm4ijdNu7S3wwNZ5cPdDHdLxVdbY7YsYUqvmM59M1XikmWvhs",
  "key13": "n4Rmd4weHAtU6QrdThyQQwSFGpVRiA5Esk9C3JpCAWnso6CVguXDiXCHPTrabA9AVt2rzqfW1xZeRmgDHkXdQmB",
  "key14": "K1L7qGrovF2CT21URCkcqjcBubd4T7Ytg2Lcw5TBxzsFbsx6U5zyhmnR2k2S8TJsg4JS2Db6h6gJjeiLfdEgGKx",
  "key15": "2Wd9zY6YNhkGAjQdQJbbzMPewigXNV2H7yPMrLnNJniaZ6o4JNBAH22izjxvxo7ZuACnng5WzS2Nv2uRRXmpbztJ",
  "key16": "55YXkErkpMoD8Bj9k6UBYLVnqpk83xfpMEe3qWzUfxkzz3trL4RX8n78kdvt8ipM5gDJWdBZoMzgbF44zxG3Bvj2",
  "key17": "5S7bUGQaviRHiWW5dqA5SVsBtoPCYgEkKKyqWWeBgu74Gmzngdi477EV52c5QuNHsnLcTCCdf65RRZfHYDY2j52r",
  "key18": "5yPW3C2jesYoFptYN4UjrFYMtvixgjY418WoHeTFCpUsRz4F48JEJd1YS8cBgmHuvgTmBHS3sRCCFoc4NJ2qUYJT",
  "key19": "63rWHD9zN6HhmfTxuqERhMLTJvXLGDAgX3Lx1t6opkSao5SN2Xt3QExK43Ek5z4xTBMozfAoyZqYse34hYCW8gyg",
  "key20": "4SRJikG1LHzcJL5n5HbmctJfCjHYKZgjAWtGTz99z2ND64F9RqjEkMbtgEQP8s3J4r5Gy93LcSCTHiqsZn1uJgRp",
  "key21": "3MnEP1MKXHJrjQaKwNZKvy4EdU1w9yg1NZKaoiryywq9fWYckEqM8EBc2eSahrgstoKoWVCKbDFCJQLFSJXLi2Ya",
  "key22": "ymXeFkr1kgcCxuYHsyaF8pTtZFzZGY9bJdsypYp3bcQ7ZEwqheoBfCC1fgBVbqmycFYwDDyywpxdyJT7TViH2nu",
  "key23": "2U7THuPacJpdKbFHUDjrGfj4TFpAMhwJ3JBDAcQSGvzzRGbh2EhA3BFfWAdqMMwvkzfuLCCisKYY5SvNmjWStca5",
  "key24": "48qq1yjHCoGtSc7ofEuXo6g5LxJ4XsvyZHjv7cjGrdx39G7T2UWH7Xs75Ssuo8XE3m5wABwF4AHXRXk99qopWwwR",
  "key25": "3ggTYA2pS5M3QuD7cv2BHMZqgeQjzfWaMzw5w6zd7MqrwB6TGuf6bQ6AAM7R67WvcpaabddkpR9wvgjvyUbDv95C",
  "key26": "wLikmTCDhzgxWxzwG3LKEjLsjnvPHYCVESSZXxa4XwCRqHYdvXZo8UdmS8rzh45d4CMa69cLQDgvDreKijZrNYT",
  "key27": "3fuR6nXabM4MfmnYdc7Rb9y8qr56eczP2gBtgfX6YGpoc3jQV58KbU6cWsNTq64wXPYb88R4FAqEbQyGTrMU3K4W",
  "key28": "2pKN2u2Sp4YK3EoD92YGAJyLfS6JQN5cjHGMcdpKVUc7Whvk32AqT9rwqLcAB8gmnXBC4tuJPMC5htmZReyhuUbJ",
  "key29": "4XdHSGENtPbTR4TXdoqYrqjtw6ZhuMEcanyJnv58nV5XAtPzBxwhBKkLjSrEiNeFLjqWGo4fCxq1yAdBj3z9Da1m",
  "key30": "5Nc3xXWc7Cjz6tmyXNTcmARBHssfoSbtMmTLyDuMwEzKtvaN4tAnRqEiHCSvRjSqEEntxSSJmqPwBRiU6aJRerQf",
  "key31": "34vJJ8gh6So3KBLKx4rNm7nn27WucThMGeAUBsjWLYREBPCgYrDbANsptjES45EVyLY7yAtLGGoWrDkcoEDcQVZi",
  "key32": "vU9shs3b2d7fahRVW97cQL9nJqKNiFa31G4Exk2JQJXZx5VXjkkksim8ZM1et6PgtjLRZNfUAUR75TPHGExrFDc",
  "key33": "3zrpTu4rD7TCMR3qdvCdhq7fqqNBGvMGp1pj5kzShi6wZi7hWmtBmQh5saAZ3ZjaTud4NBLAbncYxJQAUg8j6SfX",
  "key34": "2y3tpo3grszWN5xdS2MeiVdpsaq68qM5ZqSxJmYEEy9HPoi58HGSD3e3CqW26igPo9z8sdfNVusVa3cJhH5Qzg4S",
  "key35": "42p2K4taiV22G9mLRj7FLkg4iDkRteampHwA1mpsDPMY9446UhznCy1hdEWupL6PHNPjApus2UH6tdpNY3iKfMT",
  "key36": "47xwCtq9Lm1Vj9aHw7XxMrvTAYcQz1RBjZ4kUdGCoiKcMD9E7zqNnTKksNdtDm9ZLtrpaWpbwVjZa9qFLRPAtgfB",
  "key37": "2HXVyoYg2tyjEmArZ45mN6njicZixMGVNMs3Z6wofnazHJHJ4uhF8NPcpiQktoU6XmnZ2DsRtbMaucMxvi1ArVn2",
  "key38": "4b9gawS2tKjgkQf9JAomfNLC79ne2nGojhaUUiHHCwaAG5oSZcTZPpSFamgUjK9MvfTBjSGG3rTrdEGDwyAfu8ez",
  "key39": "jVVLQFa64AceFsz162iqeCCS328dH8EszbYmQcLzKuNSoJ9m5CApNq2Nmqt5HKG9mhL2Xpvf75HFXDQPwcuzNp3",
  "key40": "2PqQAXVrc9skL3DebGSTgQSUhwDScWq7StvDg7SCgprdE6E3jEm7yotydzf6YZy4jTiwaSUGhFpbft4dBH8VUYmU",
  "key41": "3uKkPCHpdbDAbqzevcGhHBAgbwgmSE5XkYMgrip69Z6F2ABn7GFa8fy6g6toB8JAYfqNwRXCqMb3YaAQ4xUJCn4o",
  "key42": "P7WAHd6eESGaZTc8ZivggmmVnvxngKKdfGAra5xFaLWaEkvA2wyf6P9xXxHYeANXHLLvVnXWmnZhXNCcdqCChjf",
  "key43": "5dKTWAmLJRCZfU2GZGfoyMW6ma2cb62rZS449SVMnaMmGdyrEkaFtEhV73Zuf2tJyXhZpiWZnDQMnxun1pXX8fJk"
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
