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
    "46Y7sd1dtYSPNpV7BZTYtV1DrPvxFh62Xor3cbeJeZK34nCPcw3sgCbwaCWxUUFSc24jYnY3J8BvAbpzjo111fQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36jz9xwK2YtCwAjeKrAPNc1Ajb5x3RcTj6ZWT7CHBg92xB3GDyzkPaT1XYfTtLocS7SFtMDVWE4kbm1Fy91X9nqX",
  "key1": "22VFJbgB3bao6Pn9cABqgmUGYHvYBRtEXQ5ivat8JZm66Li1JMqAbqHTzrspJ4G6XMLha1V3kfqmbAXjtxgQpwgh",
  "key2": "2BKxaUMV35cdEWGcYPdjfMnEaJ9z2t3qDu9QVgT1Do1dwXN5cTVT4kyj9aBhR8zTFqMEUuch2TKNa4XpZkMqmfjJ",
  "key3": "2EWa2hnkPRjfQcmitZXpxQrPF3gpx4VfhwnSPjX9k7b8ZPNFVUG54KGonAMze6v9SeeRpJhYv1XdQyUwDzrcD27A",
  "key4": "4WedKUtVSVu38YKkj5Gn8WU6AbDgN7A7Ez8MsM8xhceYTK8sp9CgYGsR2Q5M6Y1c5QT6dx8LU7uia9J7zjqjVnPh",
  "key5": "4c1yPqGhYU1cSs6J8XPSf5HTZGBWAk5DEX2DsYUFzP2H7EVJm23mk4L9KCXfL3jLXg59LHFRP6uCuMUoX2uWNHo5",
  "key6": "22oTZ1kuAKrGUPjgZzkgBiCUmivc6vCLf6i68koypvc5SzagyMeQsj27vUTw3Z27ii4yLDETTywW6m8xE3ssiR4A",
  "key7": "3fww1JxHA844bJtn8M2XgbKTjPFkHwKCCp196Ar1qUkxgN3tP2ECQpEmRoY4LPUN11ZbAXCU59DCFSShMWebghKC",
  "key8": "26WPX3ZWYvAzJqov6z6EyLw59gUENXaAG1KMSQwFDsnuVB2ocuoU7wtpQJji9BhWRsdEx5sA4VSRyMvTw5HtvSdf",
  "key9": "3KfHaT8G4uKHzEpRoUUhvhfbjFa3xy6bE7q3nmUwMLnHVxnD6QJ2uvUdina5SKRXugYvLXpSY1R36HCM8QTexrpZ",
  "key10": "386XdiZSwn1jhKtwVGo9jDsXFrjztrnrus2GSXvcrTwZx2JC48QihMC3vMyQEEVpRH8WpEkBrfG9WcqKTJRNR7rE",
  "key11": "5hDr4KPnJjT7UHkfRJGccou7eVQ9xCAaWrYkpjkYERq9jnCnnzxur8xs9Qmaei5WzbWY5VDyN2MkZvGJRSHzGSeF",
  "key12": "wHaJ8Wkg4fp1wn1647HnizVVwnRwWPkVZ2kG3k8GbzSMJh4SMBT8fNAL3TvPTQwUm9MLpuu3wvZsf88na8jfpzB",
  "key13": "2xdiU8K76Fg1zkDn91kxEDRtasbqad8tPdREf4PhjuEoevAKdanUnMECYPew1LGbE69VtioWvqgBS45xdHao1d97",
  "key14": "2bBpFSWKyeweHX1coVimWtcoayugsdWR4QeY9pjwbZenwx8dzEz35KzK84vWcwAQGZ59t8X8WUVjjQC1poscCp1G",
  "key15": "4sp9CQLzjC87ahQtSRhL2J2oSywJ9LWG58H5r6PTqwM82S3c2ubZne7kz5jZDnynVaJuGsuYBtG6M7sxjeTHq4dm",
  "key16": "wACxCSDwowM7sBWed15HwHWBuS4ssyBkNGYqzfht3x2yC438JntkDG97zQBc2C72JYShqrUgbnX6xcz5eMBrsXN",
  "key17": "gRHo7JMWLmFEkVcdtE1atCthU7Xgh8NfeXgjqoTvWEf8REJdXK5875AQ9AZQyMNZjoEby3rT4rzoZNMQZnQjyJQ",
  "key18": "2bL28VxJk7sxpN99iHrG5wKwpVGLsEZ9MsJ2yshTjJj9YebDNTZ7GWAohQe3s3GWqcZDVJUivxPVTGX6DCXWz7y9",
  "key19": "3qW6fHXSrwivVpffpfajnJ4iqA5xPz8AdyhD99ig7QHGegXP8iTNRCuF4KXqBdGcccgwoQtssqwzZswhMWfANE1U",
  "key20": "5KiXFBY3r29rQ55RfY5gZLWppsPxDX19xLpmERJbx6SCh77z6ha7Fsp2ptT6quBcs3Eat7LJrgacZNwMUukzqqdB",
  "key21": "2JE5fP1MQHXjVricmmKGM68kUpZMs2cfcpAstADF7WeTgV7W2YVT2fjvXqtZoSs1FM7szDdSY8Ls1M4N9e4wPuu6",
  "key22": "4zni5zPMMkk3r1NFw818CYzVgaGcEUeRd1JBsMX24A37jnZPArxs7mDeS7W8ZtRLvTnUUAWTnDGy79BKJUxtgnot",
  "key23": "4rTYyujTNqNZKcPzTkpoYGJa9Qu54RsfL4RwFNQR6TUZmcuSWnsNdgguVR4RzZNCZgyxh7cYBLAMFjttSLVT2EX3",
  "key24": "FcJV5W4qa8yAE2gY3edV3VYHdXopXjhwRsDPN2fj8UT9wuDkNAhqJnt1sSfvSkXUxtMRNi56UChNydkdYnP6CHp",
  "key25": "4SbKb2RrK8T9H7vSiPF5semFaG5mdfmE7nEcYLnaRw1s7jQBnZhUjHF5HDhCNm2HkYdoZAnoTxNiuxwm5XQT7fiS",
  "key26": "5Pg41Z4CAvdXrwW3Ttz9Xgsvuk6TMuauEXUUdzMHQXbDYxwhomZkQSRv6Qg42wM7LQEugRosP7vNSZmqDhGp7AKL",
  "key27": "4okR3AeD5FUdBYr6VAJZZKwi8GPQKUAWnhnNiyuXXYf1rRCBxJCSpXvr2YWBTkmTYxxuibMaZ6UrcXuGuCDxhKAN",
  "key28": "3BXFovW8ArV3fqGYGibScdS63Sm9kzdBMvftyUALGU2yRmE2MjkiSrTXH4yHUpExM8UMh5nKaSCoYfoxnBR8Qjbr",
  "key29": "5RbpFduNyREAJsP2KpZnKukFVU3e38WMuUGEgDfxuyqCncBp4ZXSJBzNjTmauWqy9WHmEL6poEap3hft4VP5raHU",
  "key30": "2NLgpSXHDU2y4CrzS9VGxAB4jTX7YbgGb1kDCWHF7WTKT6m8dMUQPchBdrxSS5AEhP3mBt1xSttuBsSSn8c5RS5S",
  "key31": "DQtM5NG9Sp2aNCBh6rojdqhA5pXVkL9MY4kjNXcWFyASjpwcPSvgM9jGFePifXjbGU72ppSRjC3Eh22QFHB9CtB",
  "key32": "4RNXxypWZbdjrHF5cAF3A7prknWgRpB5QJX8Fv36kBZ7MbxXL1YEZwcWoaff77rXp6Y2rqyhE9KfokaroysYPYiJ",
  "key33": "5SPFQZKMQfArp9hk36UT4zZiBCXkG8mwK1Dd9ZTPaux6iGrMvdKrfFJoWfhx5VdJ6MV6iaHb5JAqtMXbBufW53F4",
  "key34": "2g3HS1NGYtetntFP9ApmC5iwNcwM715HMpQHayaMB4mmWrmaEa3dghHAkPhFVZBp5gTJgtQB9z939XqnDUDkLgqv",
  "key35": "5eoWs49DhoeFebMGS5184UqbQd8x2Txi22YYTCNe8t9assnHG28F8wMF8YWEUduJpfqy7HuqU4d3MPHjxwRDcsSU",
  "key36": "2GDPLzZMfafTPCMhBnYmkQKwbcFsXjDqGaQgSgCbZHH5CD3gqZh2sUtbsVtcw5Enp7AXAviR3U32wSYzqaQWN3uS",
  "key37": "xVdCW8WNqSyHFtUF1QBRZTGNzzWFY4rA6fpEJTJx38f6bb27xF1qKEaX1qYoUyM2dAyTkW5vz6T3cDJ7ABPK7Ds",
  "key38": "2Pn5UcR5HmarA3DphznbTwD3wdgujNoajZ7aQasJ4QC8dzbG6VgbfRtVCpd5hSuVLvL9HwVwrUxUkeqGDz2u56VH",
  "key39": "WULv1yTaC9mvmghj8YvW1ZuLewbmkxoggDQDVfjSaax3dcsJ7eKioMxWDU2CuH4YQTRVGAWqt4xm5AmQDmzVavh",
  "key40": "4Mgbe6vhE7WZ9VCpyLZSWshXBfPZhjpfu45ikSdQfaPp3K6ZUwjE112Nx5CH9nG92icahYzDb7FFrY1GWH94UpTU",
  "key41": "3iBXpymPqWAXfgpvSn96USKkxh992fP8iWHq1gERFK19wnW9yRKf6HgSn1eA3Nb5aqU3tBQaVxG7DfGwnbNKN4qc",
  "key42": "124VzMrYmQxwUjarxvXd8TxYJpmakY8vPv9nHJfGJiS2RVP8piEwttkvWVRxaVzsrp5j7R6uYw51wMem4b965cQd"
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
