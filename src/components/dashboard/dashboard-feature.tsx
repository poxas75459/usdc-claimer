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
    "5eSoMeZuptoNbvKnN3P3V9Uq4xj3A7rF1ALcJSru6A5BDfQjFr3yfksVqMqe3yXqJWTVbuRGYrj69NBAnJj7zxsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uh3t1ic8FX2hdXu2Pd8PGMBN1dzG4c9Zf7YWfzZfov4xJs9fUvDfAJjUrQLG9o39h8kVVhSxGDNZHukcKj1wt8D",
  "key1": "66jqWUWXTkjX1RqEnogdfFGVVQB4aeEmm5wGkzi64P26tqg3bh3P1znZFWjMHAp3Fb9KaseAhNDQLNmPG5WAYnzf",
  "key2": "5ozseGs1YB8KUp2cTasUjLAAa4bqxFnChs8aFy53QCwxMAoRHcmWRgaK5jzYUjZuDc1dZbi8UReHSZUZvNfBcVXJ",
  "key3": "2Wf3YNRspNHndWTGd6ekrBS2XLxEyE7iqMa8mbGPhpZnRDtJmdRZqebdeciYhpXYgZHkYkbdCBH841CxeVhLiz8b",
  "key4": "4ELB1F3DBwbJ1cHBLDxzgyggbCP1EQMKDackyqrc2725Ey9jVYVjfnXgg7g86WhGWpVMfnYAxP1kXzpEpBESpDQd",
  "key5": "3a7TJrpCWXvKiazUfABPL2gtVQmUmaa8mVWceiDhSBPiT5xpjewNe48oEEs8sHUBzHNyL2PDeTFeXcm7SMsyyMqV",
  "key6": "PANuGAL6FBYHzkmvYLy5b5n3zm5fQhiFAB6QwhUK67bmj7qr4bsHKYjZfGisJ2vVEjdcAWwaVnrwbC9qhAMuWB2",
  "key7": "4bKXWYH6f9QPfrJzvQnq3LaTUi2cFLqnHVNPVhpdYX1wvFXhbTXFm7a2uMtneVrvhvNu5wfz7sehki8FfK11bZ7K",
  "key8": "4afZt4vTEmc87oJpk3MHzy6c6wo6TmrTM8rQtobT9WFxfoxtARRfD1zQUMbGSbtUbehBT6VhRwCMWJHwmWjcnAgd",
  "key9": "3VJyBkKMh985dsP2uTzcUXWqFnntuctF3rkdthCEY7UhEujVR9A91UPqtB16xs1mDT8DBrSasyvhQ9Qg7wkz9X1u",
  "key10": "YJTFsho2AKGvQvX4z2nEcummzX1UBmtH4J7tfhxMuGYMZ2JXuqGLuapf5QdxmRVNzYYxoqnGVNyayJGmKxyPhX8",
  "key11": "3gYV3s8zLcGrg7rwTR6ZNBgbnVbHNqPfSsFSpxwF92s4CfwDRodmcuPutQjfpdHbuAY32xF5ywA6LTTHqdCNquLp",
  "key12": "232mYcKSfdDuW1vguTQBWo67gKMn2zqiCT4S57yGuXJig1sEqxkLkwx8GmULgWSrJ4nBLTwG1w52KW5xNAM1Pwfi",
  "key13": "CHaS8YmAoLSVMrBqfwJQx6f2Qo1HhuWCYbbRx1z1jxfq1FQoK1t8WHgAY5x7aW52aDjA9tHgdCRWFS13HkCyNqL",
  "key14": "4ipMqjqwY3dgj1LBUQdRQmezSE7agY6GjtMp1cyZxTyQoi6C7dY4Wv6YDtqhzj8BTWn2UsQ1YLD3RqK2ha8QKj4h",
  "key15": "248f2SBt6eLMN6y2Xk3b3MXmqBV91gBGr3tw3kgMBikkebsjJax5B8ujSVtbTHdpkKMpoArBmVGozwgLewoq4VGT",
  "key16": "mYPMfXiGueoYwxzHQKUZ7PnecVVQDk7EMFX4gDkqei9rDy9XuawR58FzjjdLQX5Qn4tAPx2yMubkvqWcq4vdDxu",
  "key17": "3GooiBgP92evrga68wBoC5GDsh6hK5DW6uKyc1By6L46axpd1Q61djkVripros9DzS2JF5hRPwcnPnvbvFVeALMY",
  "key18": "2owPjpghZrbobgnBY9PSpV5mEQKDG6DcgWJ4q7o6TsqRKrzoZZ7rcaaMF34cyQSunpqniXjaDMckbA6Y2QpZFkJQ",
  "key19": "q8cA78D3Fr2PjVta9NaGEf5fzVLQoPZXdDejABVg6fXqpR4HAiAsRHmpterYNJMXakBaRpSdHn7McULiSK1VSSf",
  "key20": "p18hXMhbND3QAzkGAbGtGc9ud2KRPJrbb5o2rcvnrMfE6QPijrFW2tsi2qfZXztDJGfh9owj2rgsmWFT26toe6j",
  "key21": "62AQr37PqFSeTPHe7TKH1ZShf3e8aV1QWmaUUveyagCBZAtYDLosrwbrJ3LPvw2x2SZaZNWPh3NyQp6rco4zi4u8",
  "key22": "45kYRsebuHCRuUG6wiqud7X8xNMLvZEowFY2JgH3R9H4kFiofgmJwihE8hUEoGyMDvVBf26nbofFxzfjWbkDwgbw",
  "key23": "mAmDjZy71f3HxayxF4HmzQNxaMbsBdnFQVYoFHR2GS1WvURg4mifEhzLvrCnCym5RBjZ7vHznNLbUL54SS15H9f",
  "key24": "gpgjah35ofpJYgRGBNHdSxrQ4JszxndxmjtjP3PnehBYhiNUJZo9f49gbpLwpycxVYMd7zqPnrfvhxNBfP1Pibj",
  "key25": "2ubcEDbeNcsVuZwuBCkQRwRhFZWHbpTE4pk9qv5dZRodDYA79gj6egPp5T3btxppy27yHzuS5yezWG1GeuXJ9aUW",
  "key26": "3t5bEUxdCBCmiXC8cQf8kCPrT1xsyG95jGZToAavnBGZ2QT6txinHduDnUZgvHbffHro1sfPCt2sWjsE1kUxQpLw",
  "key27": "2AW24Sq7pUpezDALfYeSmJKrtCDLUSGJtDNiAPuDjuwoBdVKyxxBWEkmtZPsnUfkHCuvMLGUnp84FKMqnwjns9YX",
  "key28": "2ZMjccQexwX3SfR5xF5CgU5VyYqCFSx1Q1eS5CvLMbBL5ZzHrp1G9euyhupFUTmGLDrcaQLzoeJ8dbewz9vNZRc7",
  "key29": "3XT8t4XsjjoGwyKQqdT4Qfa8YUaye3EWTFH3XBkpv5xrL578rgbCxgZtj2UcRnP8xJBZ9q5v4eGZjiF3gXPETj4f",
  "key30": "2vcyq5bTZx9SbNb13eM5UrqeTJaZCrPm71P8eAJFJZyuHFsP9PV6THz5CjtrEWdwswfc639yQhEAZRxp3q9wgLGB",
  "key31": "3Rfvx3xvrFcuvaz9AcrAiP5u438rrsLcbTFnFABeJGBv3XL5jWUdU7gs1k8FSp1Nidcr2KxAHrPczEXoAdjquUbT",
  "key32": "3inY56RjF7stFRNwfxS74ZiQiM8vesnouKK6JyJ2NGV5EvzZUJoL9g2sSn3bNUHEnXjaDY2tQ8fPdwzcqfpnGKKg",
  "key33": "5ge4vDHNQ8tGEhmeLdcAEbMhjpyVkNLmivYCdHMb4PmBP6XSbwd358eDPo1F8tULmUuY5RaSJg6swek4evG4CdBp",
  "key34": "2Ykoa1AP3JHdRbSDMeMBXVcsZDXhz7Ah5jF5euUmk2X6VUCFiMSmocVqtNAMcHk8bjRnuqT4GNH2bnW31UjnUgmW",
  "key35": "3evzv9GRacnFCp1sbaA7gBsk8Egcd6dRt8kRfziRsHjqhL2oqtKFt1EC1bAdAkkca6pRAL2oK8cNpXu1m7euLfea",
  "key36": "XwADh6Wb8ZZAz6buprBduu5DTpoHq8MLD452kRLYUU5qbHAPocECUPRQGzfAfApz2tCML6EkM1XB3GXP8G4aBaA",
  "key37": "LfFkfpSgnHRQcBiCnxb6Gncgk44xCmynxnHboRKiEesnqJwrmx1ef3gxPvV12NSJyCucA6RxS9Asf5Dv3u8ZTpr",
  "key38": "2B3hZAuKf8NB8bKYxxv2jfiKDa6nCwjrwLp9PNRnXTccR83FmuSje9KbzeR99WjQQQ1RfEQKaaQ5tHxgcMaatvhy",
  "key39": "6547sx8CdFTcBZdpxCxj5B1jQxrRQE8Bvo2cvUXgsXXTcCc5tRserTEwdQaJmqQzBhDVVi7drrzrnwRFxQfKrSG4"
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
