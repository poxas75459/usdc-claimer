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
    "2cSauqKMneN8hXXH71gaZaaM78YGeeBiyD2bM4Af2ph4w5yUZ3ey6nL1DpQcKZUUvxdftLj8P7B1tz6X22eN7zsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GJSZm74tR2NAJwMNoo5P5Cbff5EUfnsKWHrtpUzeXegpLLCqTbUACju3NnjQjQuevWSyzKv1d2vH2p28zphRHB2",
  "key1": "5nEWx1QeD1wUHViuWuuhbbJUTB92jBHysomiqug94Ks5vVkDKwgMTKg89vwugP953EGA2jzyruCnrtijH5iAaXN3",
  "key2": "4q5CSZ1x2hrE2Tyop6of6CYfQsi4Ce3mxpqp7g35JvfPFpPV7q17b9XvM1uy48c1H4gWVsWMS9hVmsXJVW3V6PEm",
  "key3": "hhNthfpjk2YSUFCUohDkWDbX5m1Ru1JtJb5NroW3F6qbQa67neoNSQwmm5wneowVrvbBQn56i7pAfvTq1T2y6EG",
  "key4": "M1AJKaRT8LBDfbECzuCDPyQpeqo9XYx2nbojwJN65SwNt8k8utDh8SdeD8NgwtbZJrbpN1BGiz1yjqigj84dByj",
  "key5": "oyQLq8e3NqcG4xDRiWe8TAYuARRoz9JiSdFWp9YDKXyvHFjqh8w8ePRQEMGQZLL11nmfRYRxVwXJyoKSQukdBXg",
  "key6": "2VoqAZJDdDXCTQJmr3numsq6UeZopDH54tdnfzyedGHMALYLGYWvcc4iAbPjMNSuAANGiun4iXCPw2DepWHgADPV",
  "key7": "65ec8yTidNo5RCTMMvwN1AA1x6ujTbWhTX5tgcjugM75QZTyDLE5NcKvsxPL8tgwQxbdyV6ryPWLzWaLmNaEzb5u",
  "key8": "3tNV2LeFY9fXeNPsw3bvMnfksA5xNPcFwo4xuxZJ3df2EiRciT51L32xfjzmQrzyMb21d5QktN8SkeEW4ecidx4b",
  "key9": "5SCKy3LEniZf2HvXQm8iorvS27iMWimyrDjhq1KFXBsYTUNzwTNX1g1tygnpE7Hn4HRS3jzrHpiUTCmcThUVZyMr",
  "key10": "3NDgGNbBbBT2j798gVDT1dZh7kwqyMt4ZqqxgL64Sm2yEEQF5s6JgSSMHZaaPD1sr5jcoGY2M1Jf82HVuCfWMvrT",
  "key11": "3g46mArneNGE71mH9Xq376LUyFnK2kcZjjNBUGmjB16nDwGCrpyB3ZuiNtH6euTS3tAwv1L4K8Trv7pyxNzEFp1H",
  "key12": "5zKETe2rX7kX1mWkD1e7sbrYCUrQuqtxWiqsJYZFbwPf7dvypdeGy2JXa9KQiDGgZ2MoPVBAeMSFhgnCzgFfQdju",
  "key13": "4YJodCPyfYkiwUC5UGhfj4aut3nha4hK1JnsaqTiWqvyBhyG1geKxenYhGNUeBrzWpKBtvsN2EJQwgE2BydZDegJ",
  "key14": "fwRKQLjiUi9YqaW9yeRPbb9x53yJixG4VVeAstefuskxnbbdMW5aZjJRV9bCnX9Ati2si2Tm1LhV6133RjD97qB",
  "key15": "g7ffNVskeUQq6goEtARArqAXZ8q76sBtwSbwbYZwUsJKF1bGvamNRmbqH2uKUtqqSpqrUa2PuA28UeurevonhoY",
  "key16": "tUqpz5r2SxDetgXpLzswKXmksHHsei3aby2Hh7bM6CPAWit9TAXioxWgpiDkWWutN4D6tdevmTerNsWb3UTZFbL",
  "key17": "5Xgja948Kf1FoocwdexeaCsGEvfcV1aFtrb7D4wgizocomYsYK219HCvjfbnn7G9cmiuK9DD96knC3N5Viuzo27",
  "key18": "5HohL9p2pbsDsvVqgb6Vm9rPekMDUqWjN6JQURy6pwN7QsNBtN1TgdH5UhNB87rmJSohhC8DTwjACiCNbdHRNvhr",
  "key19": "5cWLHbtfZQpVPJxvhzfVp2k9e7SsNvXRstQeByrBifBq1NZ9eH6iquFgkxmLsZLSBJT11YBVVefwd6VwU6dqZuYC",
  "key20": "4CA2TdWMXE7qNX4KZtynYTVwpp7Lu1Dt8U7kApDuFagv4kMg1cWGmhTwJPugbzYgDHq8kDXproofrCGkox7Fkywe",
  "key21": "2mrJ7rMz9NcbBvyKtrZSioNratdgiWf3uCcvBN5bP2x4C3LezgULhKEskeHaiCLBLdtYk5VD8LzihcCpioEVgYur",
  "key22": "51kjRhKZNZAQxqbS3vFf567MUqcBUod1Lf9LHA3XhDR32E9eZfj52jHvVyUGynwgUYXHtoq6vm7a4bzgZyhj4zLh",
  "key23": "2HGHSvGdSMn7svjX569iPsAPnr5oVzunYXPYsYuSqbHDdEVYkw5qXgEL7mWVC2b5k8ddsjXavXbdxumAPYn3GiKe",
  "key24": "3AGTPtT5xQzXEhKF3pXW4tqRyw8FStcTA4mHmcfnidjiMYck5f8JR8s4d9jGGuXJo7tRjN226FAUpL22oF21bkpg",
  "key25": "3GnDDBPgoRk6vkDsqw8UR75AJAtARzN2gcPf57m5FwLoaqTyvvsUK7Y6heQhuCJEuf8HAWhjBsdM3qtf8whgAyXX",
  "key26": "41JzAhgkX4296rSAjTTpJYZ9R2tTi2GEWAvEMhXpQPQdVzb9usb565Bpp162qbidtBgihz3UrvscfnyuzebQVmfq",
  "key27": "5YkZYn97EqroCnUBcWXUdX8vH3yPcaJmXKW1VGNtZ9E9uTPBxQBkY6aZK94WmC2dm5uaT9d9vX6ZqY9SrNucUFBW",
  "key28": "3yCEtPA7r7zxDAbxRcYxEaVBZR6ynJS8Qvk2vFbLCPhQ25qpnrhJ33m7mE7i4VqKy4R5ukLfdSBkFLm3y3XNR7y9",
  "key29": "52TC55jvHiZfGUU4ATGdYYFsdozUR3Q9w9Zihc7KNCkKNyv3dtEH2kqD7brya4vLrJsGcA5eT7kp5UyWcMnTr4CT",
  "key30": "cWbsN6DpC4dBu9jYpnTPsvwFWhBjsQDuTs8jGCfTfs1FawATHPvXX1qbqcFNXYP3F9cpFrBLxz4kVDQpDqgbFDc",
  "key31": "3jBywd1nZhdrVhVFMqQjkPxHVWQJd6MXFYwUJUJt6CcPj4DpbJHursj7QctTFFjZ13LcE232sNVHzLgFeJEW8NZ8",
  "key32": "5JWpxeR4NxJUT7r48Zt9LsNSukACbpknfq2cmHg7cA19oyCPNq4yaRYLCPr8xT4aR4RsVQHdyReJJAT48S9fhFM9",
  "key33": "3u6KCADmn54xnBVFgFWvZ9PaAWW8NhiXHgk4pKobfoyNNFC1q54iQgvZ94BKW7SffgFd1w8g5KmUDUodUFWaopY8",
  "key34": "5dTpBHMALgwGyXYqPBMhFrZ277ajY1Z5VRYt66nVfjskXbQQGNeh8Uqm3CxJsuPys7bbHAffnErDBkop8mEAfQLT"
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
