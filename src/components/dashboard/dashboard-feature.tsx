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
    "2aPHBHHWUA1Z8obPmDKVTRzs9hpmGighEKvYx5DdzwXaMmuYMeouwvYQEf15JcNpvk1whxpB8FqYHWGHPozuJezW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xbfvy3rejUGBoYGDdnJregZtE49gUjM8BWEyggxtxTMy9bKbuTUqsjeTsrNN3k98f3W75RwzN2tvDbLGkd4x1eT",
  "key1": "3Pa4Q9uWdyJFymFT3QDyWZs6C2WZrYkDTWn9TksVeafvk4foWZHn9Ly52kN34vraQV741Z1Q8btwVEEoB3kQ24P1",
  "key2": "66E9Bt2xcpsaZ6rHsWGAndMQMCUZ4ywzSGrBvEFVecKVGZ7GPADuQ9BoVJPsUguQcNULz8SjvDwbTH8KwmehiHWC",
  "key3": "5zdFqP9NDaM7AwiKqvfrWsk9jprxwEzcCrTSzqNor12B1XtSvihnb53qxTLa92mwALb9PYEAgmcmG2eHkRyC3zyb",
  "key4": "ts4krMHFMV48xZY4zsprcfW8mbH9H25qAnnwLGh71GvKD357iup8JUfAjFCGFJhPQvfm9r5PEpQwS4XKkenVd6t",
  "key5": "3Npdd5JiFdPhmbPAouSJfKzGEsi12eboGxqt38pB6EPBkaeV7DrmPbamca8B83P4qibwRUGcTqTZZteUbv6AeKBb",
  "key6": "2cpp42TB8D5R7haG8G9ALYKdTnThahxgA7HdquiyHo4wzsKX4tdRUAKmhq36Sw1gDwxD6SNcHm2BuMmNYFTzpgeR",
  "key7": "1yRsYneDTsAjc7QKhhqWbHQ9zcnr1ddsZDXn3AbHAij3yHRSzKFouYUNYRKJt4rHW78Y8RPJSc2cSbF9q87QPC1",
  "key8": "3gNcgeNjMLufTzxKG2CZpS43gQNX86VjAjMsntCeZYtdNocbxWV9mRjkZzBY32bwLxESRbWDhgZ6x9E34qiJW1hL",
  "key9": "LXJrFBR6vX6c2zRz5mdy5AxuwvDj6dWZ8rFouGaeDqgT6Jm7Dt6dfLSvB25UDPjVZA7sjYLT1JeeVmoq8yyjL5Y",
  "key10": "4U9c545zfsuTT41DEaFADWg8RkRe6memxjjVW5TY2M3sTE8txQNSYGooL8pMpPQLb3VgnyZq3UNT9yg9ijyLQDYd",
  "key11": "5thnSRDi3eGezR4GaxavYeptQdPsB5vHqXSARRk5KJJ736wsvF6AWMaWZYy4xw5yQQ1PKnhsE1pc7zkbaRciR1b3",
  "key12": "3cJjLgdwnB61MxQHRcswrpKeuUxqq86cs8dNPNuhY1ZCmZJN7wi73DXYaJynRmvmHXdurSDL8x9SW58aC16VNUEj",
  "key13": "wi5LPgiK3Y6z34aryswykXAESWaMRfXs3Uvj8S2kcJ92NxWc5WcFRWRUSM1oSPu92S3yA6Tda1RdALPzRBR6MW6",
  "key14": "2ACNHZxiZp7WXj9UmKVwXgytMiGMcLj31Gutiv6iZjnpXUngAYdBHtA4R5XvAahzhgG4pm6Q9K2YbzWvqGC6dmPe",
  "key15": "33HSNrjzut7kv5H7AxYcpm4ArB85xibP3RU6iKn6B2Am315tEwVm2Pjo54myN6ucQC8UTSSaxtd8XCByoYzFy3Na",
  "key16": "2yS6xmM7riTyKxjuSxmZ7Boho54YYcCJRS49khVnfK5R6SjvnjhjNxc1EuL9JeDPKQpGqMX1g7w66dyooGWeFKmm",
  "key17": "2njVAnekLezSQsZJptaEX1UptGvKk7364KD96jS4UAUdvZ5NPQxLMz9qZDJngJ3pzgG3LPsPsak2tyjY9XnxW4Ck",
  "key18": "67C756tuwHPMavVh3piJdo6VxkDbAJkTvWdRLsGujSx4fyjKxp1RhaNiJ3EH6KZ31qB5taHiqXcZBvnTL4iT4thB",
  "key19": "5LwEddWMn1zCLBoCyk76as3pP41Shw4FQNYKsVboTWnua3Z7CaaKYNpph9GAVeVw7Dh57j7UJZpzsrdo6geZt6o4",
  "key20": "5CxMZC5i376r1H4WcVDkR1EHUvQ9JVbhPhqtfpfJn38Acqp1hhHLoP24nLZofwR4LZLudzosJXNN6CKo7uge8GVD",
  "key21": "5iyr5GkAHfg3xjX3LtVASwtdkaaqhyXKi5PwYK2RtuvKk6a9PxrBSxD3H1SPtHD8FWDgWmvxt933gBhq96Ko3yef",
  "key22": "317vKVLsEZvKoZ49EfRq2HiNrVbnLjih35daXgtAtUsA1fgNYx5MkmBx6g3ifa3kdtuEBcUDTxY2kauQa9pEvJwi",
  "key23": "2fMuwD9HXUiA2hsjz1xH631o2VT4ugaXw5WYp25MKk8CvGAWXdDUU6yZN45spGJ4ecJ2b4vECJAK7uqdmYeDtX9U",
  "key24": "5zQ5dFXj7JvsCEXqZYk7QqsXMYtCCyiqbRZBntMEwoyqw8ETChFyb2UFfKxh5MnUWquJkLMjFCwoMNAW2xsHsnz1",
  "key25": "CehJTHkMMgYzFmhLqBiGSiW6TBhxGHdhDjs7yHhm1yjgxEavbs1JGLJs7LTpQQDx5jr6DA8FvNz6YBdTWi5VHCd",
  "key26": "3ivnazKx4Wo2YgaH8CPBNDnksuQNvabmvxnzr78R4bZDfBTdVeicbXXTeqZA6mBn1o7HmZeBzJFu2ffr9sE6jwd8",
  "key27": "52PEFvfoL9Q2qHYdv4eowpbX8ACj7GLwe9Lk43vw63guzEXmnEzj1QDkBA4PcYbXhP58bxKYR9pW814EFTcks9rU",
  "key28": "yNbvEMPUrAW1R7vo9daxBJ5idacf4pHqgtcMgL8iqBHjZRty2XMJeXFHyW4sBsZKZ8YRQu2oiGy7rA89mLLuc4w",
  "key29": "bbyvFGVxnncGAA9Kx13NyGt8Zg3RJTKhN2ottQrrg2DtnCWdjrSS6bwPTLn8u4CPDmddAGaihUMEFPhNZpTQCAY",
  "key30": "hMC4WoUAoEDeL98jVeBNgNUJKr24nUe5ctUtcqUhZGAk2WvDpHrCAhRd9kDpdwAhuJiGTDwiRZWHr8jvbN1MiWr",
  "key31": "5rUWJrNiQe64WSKUhT3EiE5zsC3R4D1pEQLRhwc4RwHGgpcSP7sTFZz25m2be4stEtm1rgnZMSoZmZioxaGhw9Ja",
  "key32": "22Fq4PshfwwKMgpXY1pvTX6frnpjZm883rEjCAffsdhcE43EB7ceWnSUhB4FeN7tTMJv5BxwawPVLpoHkHWgFFkv",
  "key33": "28zsSS2E4RHn6jGzYz6iRRkDrdT9znsNs6RKmihz5YCQeWkmo9opsLYVWqoNuYiXUXPbPZShvxvd9LV8zDKppz33",
  "key34": "3qWuZ8NGQJkhvz2BwTdJBRqbvwmcZjesZeT4LwPZVCdt3U4gVFQ2FshKoCpDw16jP3aE6CmYbbifasGsE1dUzzA2",
  "key35": "87ZRThWwzh9NCR6kAD4JJmgYXnZLjqjA95HQLsDBtKiAbv3pCAFZ83EbUy6VCoNXjPxgFEXYw7q24XrC43zFKZD",
  "key36": "DmTMGdqbdSVgHkFgpwPBin5f39p8EDqV8Gu2kZBXWDLKM4Reax6bi2N6j7Y3HpwF3k81bCzkE66cy568tC3qHJf",
  "key37": "4YNZMCSa9PzDL8HSp1h9qWFrkJrnqDafKRx42Enj61NPXEfQZwgjdw7FSLqy5eCzBRUhmg24DVMeyZumtf3JCwVS",
  "key38": "2Hdc8NXkcjuxSZMUuqZ55zB6JoSuBdJgKs5uK8sEKsYLdNNthpxkN2r2mcbWmSpm7K8L4mAN3hDtGWT99yZoDEV5",
  "key39": "3hThziGWhQYeqa88oEvL8R5kNU2TCxLxDqBzeub7xJiQtHyrUF93rqvTrQzACb3J6d3f8fPpWoV8hgE4C9Z8Nzsb",
  "key40": "2AB5Q4MrNtsjBezrn3MVTuC2Xis1mYWFGXozNfcuordwwcGgLeyLwJXPhwTkQAkmvgH4BcWVHimhjuTBZRE8ufew",
  "key41": "4qaz6EeMDNFGjwENzuevAqMezoFagKWoQNLUkEpZ3cHNcFLXXfoLiQuhmWUmqT2enFV3ouUZbn3CsoLkVtVStkfM",
  "key42": "3Seu9jMENRH1BKoRAP4GGXtg19V96wpUmeX3oX6VmgqirTzo7SrL5QZZkfAsDvzEn1iE39hMJNGR3zK4tVxQnBCv"
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
