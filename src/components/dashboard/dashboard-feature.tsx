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
    "jtCJZjvhpp9dg3h66XKeUvZeCisKWFXipumFzPKUYmLwDaUaPLKYPtHc826cWMReZPX2rBMYmX7FD44HED8S3LL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NrQZoypEveVdGQSjU6yniNkstCrNeXosAJBttSVYQxazjf4gYL1LjTwp91kkSQ8vz5K9esE8jAVUj5shMG9PCbV",
  "key1": "5E1bYoyPfA9KyyWduf66UWA5R9jwgUVHfzPvu5z5MT1KTreSxpWRtBGu7JNVGdd64Kanu4NJq26uJCqagAMj9FN5",
  "key2": "2jq6CLx4XezthC8RoVULXinTRrAGuoMLiYhZbPoKzdvr6KG2abpSo8Rdf8zoQVgHCoag1c7airJBnMV7ym1ZVF1m",
  "key3": "2rgu3Pg3sAWz1MLfiabkF61r63GxkX84551YnLsjPBFJXExqx5Je8c2x31GR5MHJVckH1impAQVBCHFbph3CAGCs",
  "key4": "5gV7T1srdxmQFMbA7HMpvmPf2zvbrn7qmLtawP34CGHtGFLdFbyitsfqhdp23oYtpg2Sg3UTovvLPSt3w7nie7zh",
  "key5": "4ABjrkMKbKxigwJXXofnBw3GM9poXqKn2ikZtm9YTkoeLEMEkqyLf4ykfaAH4gW9jgsBmWEoSqiRpmKQBLqpCUZC",
  "key6": "32wEfX66W7285A5tB1hTX9hpidjohFdYTAePYbYaMcHjs4XoP76ik9ftpsv56FSYAWskMrfRcz3j62s9xdum8oFD",
  "key7": "55YZbLRowZ16aXhWnszk6peBTuJZ5Mt85CVUhRMbajMuCHxgySJSEdwyvB2RkZQg9PdzRZudMLz5AuwQXvG4UyCe",
  "key8": "3caW3afAAr8V491iPCSkfMYJk5qBLY3u3i2HTfGYEP6dow9BJ1cp8ZvY3Psi544MvEBrdKmV3uiwv8aSb3AtT8J3",
  "key9": "2Su3FDHGLeYKQ2tVfnqNAauaAfcnSHXAsmp57SzoDhPgMSADfPL2bNNuo7pKFPrsJm1cvFLkD6SVu3kwhsQXgJ8B",
  "key10": "5w8a48ZGsF8EvQz3QhJmVxEudUU7X4ngpK6WFqV4s8gVzW9aYh5oAD5ai6xiFAxfE3XVh4vmp62cEsUbruM2VrfR",
  "key11": "5iYBbpiKg8UNk1QgDoew3JVAJ5urQfTEJedPoNmVwqTZkhnAtHxFvzs1MNyQ7eqm11a47iNAVDn31ZrWuX2SzwzJ",
  "key12": "C41Aje6ytjYjQRo4FqX7s4wte74TkDq8dr7xV9gg1B4CRkrAUsB2tjT29QGpz7kDayhYfhHBLinvvnPwDEVCoSm",
  "key13": "g33hapoex2WPMEW55VwShb76YqkssGJSyivgo2NTddjCaEACSxnet9ARAggQb149gNKezrqRjGf8QvpHUhwQxTZ",
  "key14": "2Ur9cMG8ERkR4T6oHamiRnhCaGPtFrpE2YJRQPHKXZpDocfwBj8R1CUjXazEc2b5RemeApwLbHuupVJoCpGyEWes",
  "key15": "3Bt8QEJsRBSjyFtxJEiP1wFP2CQBZdrpp9QgS3vb9ANSio4oxCGkefnfgqt457H9Q6UqcKJExHNTkfaHp1GFLFpA",
  "key16": "4D4H65ZJGRimCULfUt95Ch19Gw3DXPAVP44Y6cYCaCMij9sa2K16tXWGxXSihEQCKH2m2w4DpueMTTEJAUu9iVN",
  "key17": "4hN2VXZWCVkAWLpKrs5tQAXoxk4uMQHR8DUpFb4Foeq4B6hhRBgjN1cAKpWoYW2DgAEjR4vi6MWnLsGABYDYyFKa",
  "key18": "JSmpUQMfEurrtgEE99cY3csVBopN2eXG5XPwpfB4Bc4Nq7nmCX9AhV21boNJKRAAcoX8KAqn8d7z3AwPLdvxfAb",
  "key19": "5EyDguRn4wvydHQjTDA1AmxEe3KBQ2RoNNv1qjoJyfjNogvBbfqug8jppTmg3AN9BTrczb7AAi2fSXrZkSPkivtn",
  "key20": "BJo7Ynpy4XUEBeosFgYrDcHTinfBUvNBmJNtGpaKfAyrg3GVmYyY3XvQPq2hLbxY1qaJyVgMeSSJPRiTWtxNnpD",
  "key21": "3eRfhTzXBDakexJU8xodvrYczushqFyr3jodqsuBBCoAqe2of91cT8ZNAtUCUvxvpSb5kwRg66VdiD6sBgrcWQpC",
  "key22": "2VSwFiMPtAHhqVkyuQBGYrcZGk3sEdaAQ7DK6NuskReoRzCH4cLewSVxJWjpX5PaJbcyVpmduBEFyFNEY39PhXBc",
  "key23": "35etCTiH8byXFp4jUaYmGbhjLQxGcvBjg5R5u6U4r459QGMSN8SuRTUvWK16mrc46wtcVeoA8Hyd99VWZXE6pqFR",
  "key24": "4RyKgGmq61WjccQMS93MZDMBxgQt2KFTaAjnjheYXQZphMEhzHaeqY81F47kQo6j8qZ3V1heTbsxG9wiRZgA83Lg",
  "key25": "7xXQnQrMigk6owpLYkQ2aVm9qBDbkA9xSojKwAfCH5bVYe2Ycd221nyQdSYaPinkzqr8NpXcL4suauPQzoucAE3",
  "key26": "2BPFoHetMCwsiDvaCeL63xFmSQFhGWdj5iiMsDELv1NaVtbqtP1b9JSdrau7VjMarn5X1Bu7D3A21GqveLm3pkjY",
  "key27": "PdKGH461vHrJAeYhWkkeSsvm2xrxNx855GG4SwSixxKCAocbJPyjbvrg4CQfSMugomaR6GKv9NGnmrJH9KmUrxA",
  "key28": "TkfgwRUrsh5BmzX1ixGRpna6r5BMv28ELJxu8mUnVB72uEmc1YRoBHxzp46d3bef57vgSrPYWctdPdGesYDao1X",
  "key29": "jhUb3ghnpmyt8kMhYsPRcCaUJq9eZ3LhmVWDewWd2o3GjLcMBZt7z3ZLYS2JkMbtENTDFTGCccrjDcybvbEYN1L",
  "key30": "658W51xX9JFZewLApQTd9JC2d6qqoKXtAX4ZLqjy4v8k22bNAesNt3Q4K2eCp66Jk82isqBkHnvqfGgSWt8Dsj8",
  "key31": "4HR7u1epMkKtH1VwAMtLSFvAFef72qsFxGSNVA9KWDKvToN6Kfs8Y2UK82rN8ui79ZpUCcyFpP5D75TvGCuQT4FV",
  "key32": "4o2ENomcRxN2VYgDZA1Z1ADLVJBHhoe5EHF58riLmfVNUQiabifE6wN8Q3YEGpkoB2Hb7zYu97zgn7H1Y7SBMXAs",
  "key33": "2xAPdd9C1c7uHwHegxiDP7M579VHwtjm8BGchuMfdrK2kUkvjxXEU6E5Z5RYBB7f3g9iyx8yzBvj5GQMaRgAUAf1",
  "key34": "5BMUYnCyxAKDmkcchHEGFrQKvALjfNyaarFvBckA2PXXdL5aD3rF4HLr6zwdSDyoydQvPkk2kttQ6fNvkK2wcdwJ",
  "key35": "5aGJhaK4j8M88Pr5yR6tUdPLgvVyx6LRN6sob617nnhLDhXrZ69QHHquNQQEGtWoME2d6Qcmg23PnYDVNARV5ETY",
  "key36": "h7U3cnMxCgco6EafCe6TXw3ybThbZH4o7E5zGYnSURtyKSjizJabJTzcYhhYkswEzYkPqdRsbfDj1wKrnidcygj",
  "key37": "53sH4knH9RikfXwXtTkNt1ZEJor7TqhWUEbYsNQt1JRhgZpBcndmXYfSeNitqLQkNcfa1wCkePAijGXTUb4iruFy",
  "key38": "XS5XX34hvtTcsdG4UNGJGgfRZzntx1BdFwTpmxDJJbgLGzQhhFdNvQCLzv813J9icfh2r7n5uk1SukdBbWNbyPJ"
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
