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
    "yuiT5XhKcs1wzFuvensR15ndfGraGUMu5CPEk1x7yGjA1ormg47KH7XtNL7DonZwCSbtAbg5CpcoFNh1C76fuaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7LHxqUh5yvJ6f2Y1DUmN9EZ2doDjdgRttgqt7EgfeLHZUGSczBgUePdNRn2ZX53YUpp9REBWrqpmkqNpJ4WzkJ",
  "key1": "5hd4oZXmXxqWd3xuynuUxWPCDjJPxtCSQaCvFkERzsuawbhe8r7Z9fZBeARrJK1EUrCXc4LkiYRwYHVawmQXByR3",
  "key2": "5b9WQWcAD6if8HP2tziaAXYKMUvuXFtUMrJQUM8H9CfGaYcS622KsHSWZtMXp9zFU5buytgTGqzT1GvZZCP4obqK",
  "key3": "4w6Xi1pykfYSXPzGT5SUoYQSY7ytiJDEPBo5EKbqj6619GnrjAe7WcjpKTC2tEB8jeMkkGZszHZXhxAQbgFuLkFT",
  "key4": "4toQC8EwUYZbcu5ioMTqHJ2S8FezgyAhbRv4auX2Xvi6pjdqi4gZPEo7eASyC74XsSerNDT1NSdHGYMizKvEb51v",
  "key5": "5NiC2RHzM27QWc1YQqQ9rGZweB42cbDQJVH9ZqQYV454kssQ4ab5VL25kVuCoRjsMwNYePpMcKAnVnFYP51qGQho",
  "key6": "2Q33rtQ4HYVSqQdavqp34bPo3nyxVfUFtEDU42sHUB7bSsFYb445NUgo89pJEtUKyDs5UsxdkjdtSAK6cMD8v721",
  "key7": "E8SphdMewa896ad3KX8ASkXQsT8WL55zi4DJ5qxAuLU9nYQAnbrgRf6KbHFyxFNkEHZmehUrPHvbTnRXEmEQG1n",
  "key8": "BDpyttdo2t6XdgWDye8yvp7QRzDqmY3QKZQt54msQbseSsLt1JGpfpNwjUVFRaWEca9ZkeggFzeb9eisfVhESqw",
  "key9": "5dKex5qtQ9LJsr6ccW5s6K3GUr8eNVNBQ8t9wQwqBDXATzNf1aZeRDSt5PrNgUSPdSre2rtwpUnpJiSSHonLtQR2",
  "key10": "46474bn5cSTVdABd4kFQY8popMi1A9rn6noHPb5LxfqLWtGBN7dT42ZqZ197kwN4TE3wLvU11rxCPBfMCrDaT7Tf",
  "key11": "bBBjCNgDGRNxw3rrzVTPWTpNS7Ng2mRckio8wna8yg1xAWjDGjx2gFHt5fFBBZzxUXuP6U67MrV1sdJSbagWHeG",
  "key12": "s75bF1rmnWoxMn9toMJ28d8rkBcswa1gT9gWEY8B3yg8LBF2mYhodGwNHauZAEa3m94XC3mcY31CVqiDQ219E3b",
  "key13": "2jnWVPXtqH125RYHdBJDvKDWJBAxnC5rnJ7gxGMjjfcthsZEhVgQ3du7AbXVRcfFRbQqs2AwXmqJS8jLwe7PmDBt",
  "key14": "34eeqZ9nPC8Hkdjfj21AucqMmNJ4GPRpuUto6EC54RwMaWwtQnKbRVYKnKQgwVnsBbwdAMhSq6qwUDWwYaXxbLby",
  "key15": "7bZM8XMnHp556T8EWE86cFBWC4FiQJnEzDyGvt2Qq45fM9xQbgFzRV7fE6jDj9PNDrr9ovS1s3iZ4AQczk4MszH",
  "key16": "4fmoFWgaG31wFgHpX3jXDw77kcvFdN49qUMABmthh2LrV6TpPYjed535NrR1A72kCVfpa3R7PuHZwwJ6aPLcex4K",
  "key17": "5ZSpZ868e2Wa5e5nJtyT48SaqPiJzYYA2MnjmeJmtdjbRmX5E1eLeppc9umHbDVRbfBKM4Q94fma8rGnfc4jARhS",
  "key18": "Hv7s3iobH5X7e4hQcbPuR7VJDGSGHR7QRLt2mvsqwrdU88nx5B2ze67n1ZukZGka64bFHM6jXm1owrdrCdHovon",
  "key19": "3cRhQVfN8LkFyt9211MNVoCoFLYVonKN3cmwTUspVkFtF4axe157xwDA3xRCyZXPmsa1SzvvYM1BjAmUruRbuqR5",
  "key20": "Ggmpqpkd8hAC637icDQskkLzF3A9mmX3nxhhtHb6JNzx9AsEfJ8L6zkTkzHGom8jDCV9ejwUsGi3xsocEPucKb5",
  "key21": "5425D8YRmEew4GcMZ9KWMfDP2E7BBc7LQ6pZ6YsYFNmCQuKaMdGbtrAFn9vjWPxQk7QGgPrz1JLMHczVub6T1Ary",
  "key22": "XVa4JXXDjAjikXqJ9GndTaTY88gk2oorA9TJTkqWCR194UCwek7tg5xcGXnadHdnS1jRHBpygvDMKVNsB3vTfKp",
  "key23": "5yoZTZAH9hxCkzwn4psbjR83exiZAzKV23zRQ3twCbnGKDsnD5a9V2DpLXZp5y2wNaWwFHNYbWv1EC1deAXfgbNK",
  "key24": "5dMh3Erz1xuBuvWyuSXT6jpDTRHaWBSJvzsNRH3sGDiCJ9igns9PWQ1brxmKhpPH9ftydQQofYrxaha1bHjCCK9c",
  "key25": "6Ai8b87F8wQ69kkJfsZaNesTHcLfbSNPYuqbBHWSuNLJiEQdEJJdPqCrwuTo54WnTXemQToyLMm48HxvfqYji2F",
  "key26": "5cwj7GiXsnQy879ohqFBnxxZJDCe232E73yNbKERN5q7ofFmfC8DbGZnqRZkNHttvBaFPiGNtj4YNNy8mHqyyvjo",
  "key27": "5M9vdcHyTXvGTWnwbxLm4BmruwhdhuLRWyGGmyRsMKxppYZz3g8NP9ioZ9EXJt2KE9RFRS6P1srL2CVbZATnr1DH",
  "key28": "23fsrSG24aZdfrbEDUyHkUKHLsvb2eH8KBDUyrfmqnF1ZgcTR4kTH8YjLBzzwBVoDtFKaAfPiJuuwzwcWzuxaM9c",
  "key29": "4BoK9UWZsLMwvrbZSH7dGeXosQASAaqpLK4n1VEoR6bReCK4q83wbFm7JxQa88pBGxdyLoHGM6TvKvE6yqs8d8wy",
  "key30": "5gE6d6CvYoBFxcekd63nLg6RVw3z55EzriNyUcwyeVf9SqA4tCe7oiJWBqFbtRrHcERSMAC4FXf5L5RDp9qAdyB7",
  "key31": "2GWQHZjzpkKtpWUKGqPb8FMDfWyvFyJ8HwQH79rehDxx3Bz7MXqtfoVxxGseb32ke4g35WquXAhWerqVR7Lqwnic",
  "key32": "3xJN5iQGsXTUM2CQaLeRdmyPxdY45V6kHNKT7whLiS6UgzM6JaKE81BQbUsFTvjDPJJEpfbPcyEM5eSaNK7bFkUk",
  "key33": "64vT8i1aKmQAQvcgQ7MnsWAtvkRazzVH8d17Vov47HJRH8WpDTSJwPZATHLdbd9weCeayBZcXqs2CyLPz88t3z51",
  "key34": "3qmzM6dFKYVEEEEoNZSzPqnaWhaSqDW5kbMS9SSeZHfBSeJxzswDVBtCQLyuTUtStBuojf3vkvFBdaKoiJWvo9qR",
  "key35": "3ScsLCh5NZCkKyTtZSrnM1xCjBVzTwTdrvKXhM1qebvcJ6axY5hN9tifkUUb6yuSkwDZykNEkkC5qBBuz8SMRKme",
  "key36": "4UeX8GKszDBm52dFYfnkigAq5WsqtLAyKcxKfgTBqJj1E6bk3EsWHPLXN1R3M5NvfvkQwGkk3kDtvmxmnBJZYVta",
  "key37": "4aVzwnA5zt6aND6o7hr63A6i472rfB7tsyL4CeLyhVdQi2WSuhPpbtCJsjiBSMhEm3voSUm8nvrnVDUS7EewdxQh",
  "key38": "3vouxLShRTrnmckyCnatDfaJQek1UTJgW882d4V8GSrvFdpRPvGhPeAeiaLLxqaTDB3YTuris9sGfRpbPqg38mtm",
  "key39": "5QfgTfnx1H9pwKXzmUXsu8u27MCdfTfpG5XU3s3pJ9bbJoVBLJGgXW9puJSSfbG1BhtAtJgFzG5Xibc7htvTEZpC",
  "key40": "5v4Eu9F57jymQBuxMmpeWSzs6VET1yJsCj5nAdaj1nRWTrUDMR416e41PLbVEPLKHCSBohTjJ1XzGT86S3G6Gw1f",
  "key41": "2VrzvcccQByA5Sti696FBU4SUX5S1XqDH4tMakf9fsgAHtwHenHUTJGhgPj6avvoeHe7hcHcPJdH5nxCE6wHoVew",
  "key42": "5Xn7UUwtuQPWc8FznRKb77h2p6tERjDpzn2ozq38kLWEGjwsPQmSZoa3h7xrTAyiwjpW5fPRSHtapc6TYHMwp5E7",
  "key43": "k1s2hskTVmtmjMYLmhtLHav4RYNaAQvGmeYWgH2o2XLXp2SkD4MaWJAcDJSeZrFoyB4TpvpBWL5QCdq31CmwX5n",
  "key44": "35niLtD3DLNkTqGz8h3gDSKLkyk3MVKxsZsHgXqjfwc2pK1Yy4AwyQR9saAKR9bChFKxA1Kvv1hrxMw322qffNXf",
  "key45": "dZ8gbV9tVV5vfTFnQZKfwKrgAuohQ5xfeQxRL9HCKpqtUgDK2ExtVKxJqckn9LAHFiLfxe6XwcNfwLJrWex4Ye4",
  "key46": "5gEspGspzKhmUeYkAQbscsF8hPzokaHhtRTkGS8GdTCTXMQVdiuokTBAsDo2affQai43V4Mbm6x6bN5MoN4Zh3oS",
  "key47": "4nAWXh4jgxjCNTZf8g76wsqei4JRzPFnhv9jLVjVca8YUAU1z5FzsTetyCYQ8EtJfrTzHtadCrHuDiTEnb2bLdrj",
  "key48": "5BnTV1CjMPRJQnyfZEFfLBSQ5KXcb6Jka6V4E468aN8PwtCsBEpRNf4EJk3bGhRFve7s9c3ahxpZP6ziScBXuEdL",
  "key49": "fBotgKVwJ3Aa4jVYeRy2t2boVtWCanfSSq5Sk8ytfuqvSBcgXGhAMUHCFbhF78KetCW9rqSY6K1gEmNB1MEnfj8"
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
