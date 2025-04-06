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
    "5c9PRkUgontuqoFnfzevemESJNnFTApsmtoVTwXc149ZYwhy8Fdy6DrUNPbeuhedx9erwg9o3PGAKxdMeBpBhCji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9TLw9cFuGjx1s7B6Yu1QdRodjEw5FoVYvwqbNyuMcYnM8VAm2YAvtLuS6f4B6cysL6JgxaB9gDtHMTsHAiK1rP",
  "key1": "BD1N8eYkf1UP2rg6utyodmmjB2DP45uUoXiarFkwHzfMAKWsQ4kfoFEju9VPWFEzAPg22XFQCL8WMf9CdZWrNcK",
  "key2": "5yhRus3cg3k44ykNZRd42zxdsEbedUNkCz7bY41T3N4dbLXfKr93ascCMVMjEJP6SZ5Nfqj4GerGKiepaBz1LQiQ",
  "key3": "5kHrfV2zBSCykJxKMpkF4K2wLuon1krCpU4MdBy4dCFngFPMhU1ADv7TNfc4SawwMAbu1rVHjWry2BztgJaAnHaW",
  "key4": "fKpAoh9BYqNtzUyqpJKui3Dx77k2gEV2R3BMGAmakrasvwZjh4565nqJZxDLhMBSVyy5LPtGDgnucymWa7UzQNY",
  "key5": "5t7kC1TnAMEscb1SLzGVF3ewbvbCBpzsznPDZt6QMz7q5iWRaz1atDp53vWq97jWjnJQDqERCTDS7gK3ZM9w6C5L",
  "key6": "2LX8rHDjD7EcwNT1Aq46p8hg4xsDqoBPx48FNjrkvCjUrryCyV7cQHqiGF2ooCVxT5VL58pSryxgP2G66p2CfaWR",
  "key7": "jQYcMP34kAG65HwjrrZASqiWNmaGMariKWhadPD59incvN9s66arCs1W8w7AUrWPGzKuTEzjpGx5XMSqheCUDMR",
  "key8": "55N4wK6N674zPNU3iJ52QbY7dZWT5Vw8izLxeESnUbDeiW2WaJYUpffqeWx8SaAB2ABuEkvB3QFBj8WUy7YQfjKB",
  "key9": "5SWBr6RQepeUihjETZ29E2RaecpwfsBpvuzZVJ9fUjKJKTnu2oforsYSCHYLbw9t5nmmuQ1HaDKoUWuegDErnFdK",
  "key10": "VQum54RJbnFMKR2Mdv8KLic4tYoDFb564fFkTDmAR8xzwcfxPCNd1ruJJGauS3ihYjcpFP6E8TbAUSyjLSzGEXi",
  "key11": "4VEJ8XdaWqzWGHMcDkm2miD9vVwiLBUVsgKpwBVriThArQzkCJ9xTNX9mVLsYhHKciGojFKWUtdsknSG5yQTDEYo",
  "key12": "5fLKb9A12Ja3QQxJge42cK7oZPCWfYxeoWWuEoLqbdchNFMtpNzmuQPQG6m4EZgMRagZ1DbphBYvd1YBD12JU5aZ",
  "key13": "5fybkEte8BL5Q2PFhXyxAjCYwtXYacDXqxcXc6mbKVnQoseVAoRpD21aMQFz8AT5VisXhUtMjw7WijAuAWJ2c8Bu",
  "key14": "CcPcJbpsyYQDvcbj6zMorR9WmfKgBVUBPwJNHLbVuQe3kgBCi6TgeZ1tPa4SbFH5xmqReBDSBLFMwWDsvyzry6u",
  "key15": "4WTJV81SR4JsF37zTVeetPyV53XBoMWfMGseTuKM7yHmUijQqCgHfBtBy72pW61KzyJHDgpkSB5EYb5d1Hd7eaMR",
  "key16": "2kUswhjbgiJCyai9GPzzRTggxmwajVWHNovgm3snZJXyoqvruusv6MJsuqQ9LWPnyCZC6qaRW5SaMT5YBuV6f5ZW",
  "key17": "4joGc8uUDHsBAajsbbu5tpKPC1vdgQdAEHrjqLJsZtrncmqjXdCj6EHAyi8s1TETRwoZDDuHtwGVsaG7vCxBZuNB",
  "key18": "2pEeRUzwuSSoVTvwS6x6ppZu1oEmVoCEVZ2YHiMcJbSqVcC8bxGQCgdEYCcBy7USnuVwoejB6hUBsWq5JHYpR6xy",
  "key19": "5hq46YW2yo9vhwk5ZcTp7kiZHzQzT4EwHdF5kXuvA3cpMrJsty8nH8UXwR1nH95SrXaYgnpTkZcKATkV1gVyFyqX",
  "key20": "531fGUYm3VFnJXhVdXQY7rKwmQdtm1carqKgNBHVUQr4uBtMR5dRFstZ6bjHJw5CqHVN1qQ7hMeGnEYMwXq9G19Y",
  "key21": "4wktFScsodXarE5kNAvaiGRCypqrrzCFjVUAPcmWAgjkFYRwQFUmBHjwZmXN3o4iNrZVnwdvDSA8Pc9b8Cytf8GU",
  "key22": "3cXvKsD3SRpH3Ng9kkbr3JXNEnv8WbbG1yi52obYA2QYEBWzfz2rsJcG1tGVWE1kUs2gDVBZL5x6amRGKahzrWG2",
  "key23": "3KP6d8s7bu49A5DeEqnU8U7VMBTet8SxeaG8UECKNAavqNSarNAFLYVig9dtanbqWnAXb2t668nQjiS4myszANrT",
  "key24": "3h2QfMEZoST7A5sJNHsY5MxHBBn4fmg39X3VfoPrVG9xfNqWTWMfiPk2jWnqoPZEGMjZEg2ujyv3p5WokjQnLV8L",
  "key25": "AKHo896qrGgovNoPz3QVdWEpcFD8y25U1Sa7YXAPiaABEGzwhvaMkUyreKn4B2fQazSizRTxowPHGoDMPKeXKQY",
  "key26": "2i8P1N3o7VoH9ggqEdGp4Uy5rYPJzXJPNkGMaWgJfYEK8vzVfXm3ZDydZv6rjAXdfazKB84WkTrTJEoc9yxe921V",
  "key27": "5s5MqBuWp4eVEzc2QbYa3aCM7Vfp9N5NjCWKZAbYh3jkATEcwPcT2xmGdBmE3d5H9fW6vxSvg2dgJukVkBfSN1AN",
  "key28": "Utw97ATg7qtRDfmXEpRvZHzhQ4GeT8iffT5pm1Rrps7KRRDxGqeZtXNB7U8sKY1Qc5LW3Fm14989h9uCTocsKVF",
  "key29": "2Vzi8ySr6V1WSYzyTBwh7FL793xmqEzSpAxcRWu5b4jjYVoj11NbGQMLwUt5BSaAAgzQuAo3TTgWm8MUNheFTz81",
  "key30": "3N8oUYjssgUvfFwjE659LYLFKtgbV9KSTc4RcAaP154SfGTZhEPaYQtcXUwdVmzRiueTeqnHBm8p4Atd5BdS8z1K",
  "key31": "HMNoqqjhnoquKfKnDBaMmdo58bfHgyWmxN6MD3KH2knLzULKQYZCaiqCTJLfPM6GjgNTTgkf6DrdCGJo2vvGSYZ",
  "key32": "482iRxXCEnfvhxvJr9PA3dVDgm16py5o4o3L3hEU7gCcCaiDezEsDduvayqqNypEDDykmj8vmTq2gWms423WKVE8",
  "key33": "44NxbDwTXutJBGLL7RC9H4XdoKrPN5FEAYYquVtJqryEYBLaCruREBX1MZLxFh4qSRnUuUAaG9JNicvAuumf5opZ"
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
