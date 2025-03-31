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
    "2fYJM7dz1CtrXWXzE3JaPwaR9jcBy3rECPo5XhDxk5j9MkNmnXtQDbEAHrTxhRHQQtYz19thn3tAe8DFYuNVSHdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49UoB2ummjm1pN5GUB988smrKQno7jvedMpNhq835zsW7MPm9CTgnFzHim2dXE83EaYFYaxLMczhGyiD5AKDe4Ho",
  "key1": "3MjorWETion1LBY7y5fXieeGp3XoPg5vDCdgExTn5nuepKpZzJ2cznGkpG7dQCgyrM72ajpeQ7HTn7rJA2qf8QDt",
  "key2": "3XYCCvXZ4oehg61G95oi2SmS6ifgSq3yW1Hoef1z4L9gwJKYnXNGW4VXU79xUjAJpDAHeSFuZ3fRuPFbkWbivvZH",
  "key3": "5icMJM29mm3UTKXgtcFw9ffuHaezhNRfGR1Y8FERHu3NWiXS2FSSYbuZ6kMskmZsSzA6N2Vv9k2z8v4fGDydkJLP",
  "key4": "5xCvWGNhUBYxpVkuFe97T42ijFVwMnBQNB7RNiLcE2RD42xwKYBarEyYe4gVArzdTxzTVkYYWyKtByn9PGNQHN1s",
  "key5": "34VYrAMokJzCgQJRy6ApnBTULqhTvprAmXRNArGprdxgDUuWGBT1Zdsf7PpDfBRrqEmFMhzrawWTEKHDibfpGHMR",
  "key6": "2y4VwLyNJgVnE3EfDWHREu3JoP3VYyMWQBtmNfzZTdaj1F6Aqst67Hr5cKEpW5K1he6vxV3oyQoTXWNt4EMHwfZN",
  "key7": "5Ymw7MnZUYXamQ55M4Q3rTo9iXZ5BUEF2ACnpEmkQRyQebqfeH2s7Zhmi42FqjmJZqCM8gKw6Mkou1r3L88iYir2",
  "key8": "5XWwBB4h59ETLHiR4MwDz3kqqHdnV17uPJDKnEmfDgd6vQ9DxKLPMy1o9AxSnypvp8u2nNc3NBRhDvDLS57a6AK8",
  "key9": "5ezN85gtsk4uP7gJeMAwkEXn7nZeEfL5J4sYVrCxGhKaPjNaHwpFwMg8QymQbdeXgLUNH7wAJYU99oTovNXmmkMm",
  "key10": "3V8GJdhHQsyYS5vA3Dt9fWLcF64jQJDV7m8jjEn7CYUWfN2z5w2cEUbRNN4QRpjuY6BUM8DCYNoMzADx57eC3Lyd",
  "key11": "4USWk66SYd2x4wHNThHqS6jdB8FEDeqaMyc8dRw95uGHcXebqGGfoPvX6neN74tHBzVPwVmwRwjCfWDmMk7uJEX9",
  "key12": "4EcTLugRp73uUZqcfcfNyuoodGysouV2vo4Z2V55ZG5tr6ZuYFdPRKZb9BZHkT4HfvPyprtpp8Xh8sBfKHMaYwBr",
  "key13": "4Uoxvfx7SUziHCb6nRzMBWELq5186aZovuzQhXWdss6E62xBw5rcCSUdHMsJEw6hbjRTaWDZtp9KgQBMRx1QGxfh",
  "key14": "FjDsJBvV4nwjpsDFB877npo7Zy4gAd6Xgh9apszL6MmckiFKGzivAMJwTkLycNi5nAnWomazjj9xxeLS3sX9dZ4",
  "key15": "3Dkoxap4PHJyL7CdG1zNKv4NBe5M12SYBVJRd9NU27Hx4zAKY15kKzRLt3ymA8B2TCRshxbisa9yXw7LUCKN3d5C",
  "key16": "5j7jc8TCdSuDnu8KaEMJa88rzwWdvMAsDHCkMBuBTDL8npPQL1scZhws1BoJALe7MPa1MqAgPTvEpCqABMzKv2SX",
  "key17": "4LPuDxXMCyEaJyMtDjzXwqUKyqPLJDF2iSPtWJQzLdbA1LX455vEEMFmJPnDXUEebJbBZcUcNn42Q7ompSiinnDr",
  "key18": "51Uopi4oNLk87Bv6VH7dTofNvGc9ga7kEK16CRQSbz78azNCyiaGzuoeVGmAoDmCTW4xH219XYqrmjyCzpyL3UoQ",
  "key19": "5MBfx99PQjL57FzjNa6A4HhXjj77DBapLqWZYRs5iN2NJVnvyctsYWLzTT9Mk46tUPNBATfVd7DKZ4s1FRSZZ2Y2",
  "key20": "4ERqVK7TE2CF63g35No4iwKMreDyMoeLzKSNoEvT1VwmVfWMvxjY2FLcJ75pYU9EShu2cSsUGGXdFGLL5mjDCBSV",
  "key21": "sDSN97Yp5rej9XbXMBcn77kFknQwU1zDiet3tLw2Mqakh5QV7GXaAJzzpGCvjCvXWaZZRNo1m5WF2CBBaWSCais",
  "key22": "3GBiivg1edF9U8w54ErfRUYZSByaHHKV6pp6igQEMP9gzvLXewSPASELwUPJ5h3sgHauuqVC879kJhPoUcrat1CL",
  "key23": "4hrh5TCJdGvgkdCmdCoRPYRpwBRsDQs5QrDr5BAwMmDnuLte6m2rc2KXPXTwaJ4sF5L2vamBLrFVNyqRrb771Qbu",
  "key24": "3fUfQS9KKwNfPX6fFcFDWty7pBazUoUAbpjA2mC7YpJQ8i6tEeg2LssCgGunY8zCYhKyN6ny6jKDciwX2hNUKmf",
  "key25": "384DFBanvcoxx2VDR9NGbrGE79axwUavQScagoYAHNrSE3D42h8RAPcXn6KGieSLxr142VbkPegwF9EnnsmpxZKF",
  "key26": "3YVTmaWaD7S6WpbmRU7vs9JCsrx5sjv4gdBKGuzZPzL9BshmNJ32ERu6h58SNvnQLQotAunfWawM7waabH8bsqLa",
  "key27": "24kx9rJRu3NVjWF5QPCnG5YRzL7M8Sp2zMxh2S8LGTEVVQrKmm9bQnwRDiXJxSCGGEn5gbn2SJmZ4nbXX8xnJJ9U",
  "key28": "E2RtZ16PrSgP5L6GSYhgVfUw27LudFMUjqPSobvZLCggCLp6UvMYnbgYKvWW2PA2wQxNehmWRuTnNEZWausjQDP",
  "key29": "unvt973eeiPpgmd3BP9qUkug4Yvk8zG8UaSvbEWVyn2tr1XTeB2YmbMaxR3QgRpvzvoyJn5vzMKsDdewc5GD8Aq",
  "key30": "R6XEqZ3GCgMsnwLrPGxe94oTsG9hauQxHVVeGEzCJX2UCfEANhLHEmGaB6F79DjfjZUwC4MmeCX597QY2zjMGej",
  "key31": "5KZLtUmgwT7aeEnvjwa7HUYpgzGpP91VkpqTDGYEK6bwg67abafXiCYgu1aKxruStL8WEqQP8xzTKYe3zQqK21mk",
  "key32": "5vwnCwism9mF4Q2YsGT9Z5Q7sjGT8qQ1mzAq7KwF6cFk91k517NMm5GkQsUkxnqCsVsQy3U9Pxu6nkGfQUtyk72F",
  "key33": "8Fa9Ps8rzxQzre4eJG7YdXvdmdPb99CpANZhDyPXf2nQPq7U9Wa1mQLgUhrV9UUdc1Zaww35wRuATFjiJrozYVD",
  "key34": "5NiGnXXxZGdghEZfqj94QEqx72Xxex2EUDAzETAaxCZkZ7qbcKwwWSLapBp3SDQDrcdWaFSFGwhWsSqCD5K2GdJB",
  "key35": "TerQeXZ7aCyUwzwQybuFfoyMiYyCrbk7xwqrYsC1SSqWvZdz3Mns3uV9BeGEr6yi7xkgwvCQcSfc6VzKDLhioum",
  "key36": "27x3hivuVktR527Teu1Peq1p8v1okLzU7dtQQBikR6ExUwbfvKiR5EeWzeueKX7uYmredZ9F9GxyFKtQcSNthSPJ",
  "key37": "4aMKHu5n13amGY3Sc4oUfcrK2xfvvzfesSsGD5nQFMppBiwkMj6SiqGkBhpSyDS2KrLU9u8Y9zQDt6F3raNDrJFi",
  "key38": "1XhnHv2fqy4yZZg2Ric42BPxAj4ntEStiSC4wFJKQVXies8BK9jYsbrSN4ZCqNcUkYiSDg2AULcUww7Gz5pebvU",
  "key39": "45mc8RThVWqMaBWnZxMSNU7xyJvXbM8GYYwYVSr4kb4RS7YX9SiV7sofzNVsfn7oxT1FakiPuMPSmBF3Gnkr9jxG",
  "key40": "2nHBqYPAynUUmsRpiRyiPAa1XzzAMrvsYyATjRG9CXkNuhZHStRkpXCvg65L5hwoMPkZtC7BKqtYfcFVUNh3AfCY",
  "key41": "2pHXbSQGJ6kAeLRcXUtn1UjqTzbqpgkjRH63Rn7YxUFY62ZwXkT4ALBFiBE4FfRGvSmkfxc4nnyiUf51ajCVsR4q",
  "key42": "3X4B1qmtAvmrStRhXmf6VeoBvepSAQGbeM3sgSka5XVho7bjAVjbosnULaWF5NWTyXNX82So72g2qkvyGZS2L2sj",
  "key43": "3Faw6B5PkZSBHd78cDwDMjYnR11rcARN4rTP9vd4VDE1pQisZb11mA62bjg693Q4ssLpE65StPMgVEohSKj2psoe",
  "key44": "4VDHt2CkQbK9h5F77HTEQbpmkUc6tB7fGpT7ULzHyu3WSqTbHgMewr43jobkz6pWJuYf7hAj5Gyu8uyVq7Jk2XSn",
  "key45": "3VfdCN92wwP2qDvw4MHCgLnWDLgwoLjaGWXmxnon6DDQauWUGadburYFbjfMKSZw8Brp7uLJDa8uqYoMgoPRksmb"
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
