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
    "585zz3UUJsCyzed48xHVJkUb8fGQrSQ1pG6UgyVZ1CSsJn63Kxm6aYcvmu71UVLnMoMyfNReLVD8nQNc2uJLaMBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nwcP1fKB3Lq2RdfxhK9kHvgB58jyKB6Bwn9Vh8ubbrFgrYtUnPFejQAAkTjykfcQ7fwFwxsAQeovfeE3nomPEvS",
  "key1": "3NspfaevSHnhbXnujunNz3gLi3ZRHRjNi7VoRcDnhryz5PwnR4fgwJpHibVRmoL4XrAzUNpZDkHshbv3WaSQFFRc",
  "key2": "65FbCAB93J4drTJVRnRvYr6HpmB7zpRfM1rG26YmWMqFy1NVcWkYi7ya5XytEnoTov2pFgETHUzDURAWdeC5d9sq",
  "key3": "tc1GFX2CCY3rFjbVWvDKuQGRpifvNSKpDGEDrioy6tMaMA5JWook5UF3SxJN6kY8B9cfPYPpEPVNBb7sQAdM5mE",
  "key4": "64M2N72THh3ojXMzp7zqu31tyeCKBA77Fej2R6PUdtN4nUd2xKhGDHbjRb6M2o8AEMatTBGFGvJv1tA77eTAFgQh",
  "key5": "4eBf5QoFq6cQ9zvCRJ36UsZiwC2t9ddxYYJ4CESum29F3ghvGrgujEEKKdhpHhN9uY57t2ipZaDhMFdhWnrBHJs8",
  "key6": "2nBepV9jm5d75rocdWaZUGgi48SZD9RGmDD9Ju4CtMYc4umtUmH6czMS6VXnWpao2t4VarXpi9jUuBRm32g3yQvi",
  "key7": "3XafT9bR1H8xkxLNrdv9CRk6QBfXDFWArHD2RRjiB7QdBYqSekjo6eVHuCa6v7J8xHWgPkxawCMWkhgCqAyYCqQq",
  "key8": "5KqcvoAYQTNazhGgfeDf879MEL5uiV4Mjq3Tz1CPtFx5wRXzAxteVw1iF3ikJCZBn5ZWDvR5tD3tzAscMED3jftf",
  "key9": "2S6oBB9CZZKbD4hP9rxFF43ZWeWFJM5qMd5SJ86dmHgd7JDhY5F9YbzQ2iBomEvxeLR9x2StFPm7amX5dkaVkYc2",
  "key10": "4r4Kvg1uCXoRPbLkgXFYq64p8jpQGfsierViEMgWtxsTipmBgNYgkQtyz7qdHUVGuMnmsZa6gDBJghjCFkn6Ryb6",
  "key11": "2jyQke19QUVqtjPQirZELSASyLvHQRJndXumdNyKJkr6g8MwJyBNDu1BuNb1sej6QyZKLpHhVFiMMoPcwDJ8j7tE",
  "key12": "238biGcRgmQX6QQfVPDi8JxZV3fgAdocpYNPyvge6uR382oVGeN5gaa3vzmzStDYPsV9yQFfMBzds8qHp9ZUe3bH",
  "key13": "4ho74BteQpZ8spNHZ4z6Dtd33o3ztnj8H1yzAML3Df3sxNV18E88qhWZgLpAMGZezkjD46iYPf4EMz5d8HiBb4vw",
  "key14": "edQyXgiovEDbampbPLXAqSLth6gVMRUpZCg3tu9Ykw7fdL5i9eqAxgveXsYe2LcSAknpLsFBtmAR6jQConiu67y",
  "key15": "3xqCD4RChN4eUF2y2k7yj5VKDjamAFrx8cKLuMdCnwkvLabxUUy5Cyz9VR9zY2VBcDeRQdHfHhohBrPS7rj7gibd",
  "key16": "2yhjV3M8op7nH4VfGcdR8p1LNwCK4NBqU6WjuVXggbwCc8gtaV1hMJbc9NyQstBRtsTz5UJTcT2mBRqJgHNXXrdA",
  "key17": "2V59X8wjJBpBJjoWGcZdeR6ZkwynsLAvC1HdRzai2uon4jGyydxRHJVkU2LP2isMkJTShzobNkUS4dfhVMFeKkqH",
  "key18": "2BXuSEbskfcx5F9yfb71eAkgF7bvLjmN5RUFKKbBCyUeajy5wg5kwBwwj9z44fCNiaBuJhf4gtu3B9YFnymsX7Ky",
  "key19": "37jJWSD61VbaPR1TiqFGEosPcowmTcd3k4tWgj2ieBFa9HNw85YF1b9AmzyT7UgFodTuuRepGwvhW9AdqdmxpU8P",
  "key20": "54h5AWWNdfRPS4tDCG5RAZakBz7yQKW4CQ3UDPtcedLFTmTUj9rUyWK6kbu2GveJcXryyGxFcKvPLioeMV4XroQW",
  "key21": "5xudikowPyTH5TK9EoUWJXQCCu1jWb6GnydZWgvQAUQ8SgsRW5RM1KfoLEeuq96x9f9n6CYFDk4emTnhGjWcBtjW",
  "key22": "2TNjPiEAGG4QUZcEWvpCpSSjeUjiedhR49xXJuzaUDRAohabYkDfeVc4PnCVgCf6pEsLshKqjNWkWhyd4SG2r5jc",
  "key23": "5XjFD5NxLUEqZ6zMf2ChhsksnizdQgVcCHWhw47sSUGq1r6pUdx34R7nbmJFV1WRRXfFFiJQZxVZRxefXLgBYBWU",
  "key24": "552EWvs7LTbD2LAgwxwW27M8kQZGwuhg9LB6ajznhrcmQcmRtcgBkqWHZ9XxtbpnwhT6uEVdzT38Q1z5MwTDyuPh",
  "key25": "3kKLddsWGwtPgyH813F4CMtDMTzXkTCwMjp1dH7schqpSYuntgdgrk5QA8oBaVtsxU6YLiW1Dj7J7HRhC3XFzwji",
  "key26": "46pCwd8yCpsFc3JqaNtU3tXpXpCn3E9fwsYH3i5iUkRagSdasxoHe3qBbLgEvZh3JHXNtUJEj6kWN5yp1S8kD9JN",
  "key27": "2gCUPfYbNYJYvQuyJrNwui5wBiQcCQc2G2g3oT8TVNE2aFQ4eKRk8e7CmQTrRCjPVtkfPo9PUfW2cfMi7W3xpFLp",
  "key28": "4AVsB2ytQAHJbakvYmbpFgPbpKjLtE5b2UVsy29TUjkDWL3oZTW8HeFLsVh9rkfh7rs6kLjCxtpiW1SGpc2MpvUo",
  "key29": "4dT3q8AdgvwXFFSMZTKuEUKH4TbedWkw7bftaYSrdzAhBKhw4zq477bv9fPoV1s8VhoLurHxr4HpS6ar5m1RK4cv",
  "key30": "2wwQj51tNoztPrD7sqpxXBBhgwg3DtS6BbbGRmrU2MDDBESJyxbyCpjXQ9PccMjHXfPMugzT74xi968kJ1dphafC",
  "key31": "2oPhUPi31xcnCwrTHXsaViMDRbZMeCeFiZYfmeagXDm14N9m8prPxbg2eg6QMDZkDx58x1acq4YHPgZLGDn7rpmV",
  "key32": "4pgvkh8j4TZ7HGtdJoryxdV8pVnoNX4CUA4rjrNgeUVMbeBhzpk6kA3pdA8n8ELxeuHdDR3ZrqHsQUr1oobfA6L4",
  "key33": "4THWiaKgx2H8Sj1JAbvuXXJMxKsMriiEfGUG8X2cZ6y4U6LYq9uSjye5HyCrwy5Bo3a469ednGeRzWgq215KbbTx",
  "key34": "3LZkU8Jv8hyS1SXRBySoMNFGaBwBEvYBcuyscssZLqhqwathTMoZu4MNpRgVEXHCZ73EmHDai3bbuy7FXBcgZPRC",
  "key35": "3pTqoemAsAKqnsb5hmLVMq9mCeSY9y7u5stjd1HyD3CahkVcynUwZyK3u6SnDKeKN372s4ASXyuLYk8C2zN1Vfvj",
  "key36": "3wJKrXQqAUEqGb3ozWtrrSvuwvoxsUSVVuMHEqZAezDdmLKRZKKxb4My1twxpgAUNxGZ3J7ABNYvxi6XYZTTA6qo",
  "key37": "34Vq9m3kxaYuTVHvT8y3auBV8BzVpmjMRWeTyMT91ZJfx4TFSxrLwdGtLHz5TE5n3BhwPUx23jcs2YVrLUcRsS8N",
  "key38": "5opaaFDh6MqC51iZw1r6jcYKX61DTKFTCDGhtaciJcVGRJJENR86YEFN2tWparTasMnUBEJ5raHvPr44pve98UoE",
  "key39": "4cQ1gC6Q6QcamfAeBsmEYwe1CLxy6tPRLnqgicXkZkiGUQrSQanyk7KB1wsXz6oS8f84567jCtKjN9CCU9Zf5Tme",
  "key40": "2qJBGYEG41nXGeifxxZxw5i2jVKybLDyugFQ1VxPgQaV5VX8aomDv7Lpp99v8SwiaEmWnzmhKeR7SdMnirZHYrCz",
  "key41": "32SB3sqFkKWo6bi3BzAkYxDo6u1JcyfDApRiW6gs13xSKsPkL8452oMN379UWkhKX6MsbbPdAv6vvjzscgCzWT7y",
  "key42": "4NPf5CMMMEpUvXJg5DYrTaGdrHp6mvnX4c6gMF9NksbLaUhvWzSNcCH1AhRujwrPmspjQALMAc1rdSVKTcbT6e85",
  "key43": "5t6eZCcVjcv5b6yRJr3j3GRzz3jr3oXJkgJTHeYd5EPaLiifg6PY3GPFeRx2yJcJaR2YEYJyup2PLVL619oDRP6n"
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
