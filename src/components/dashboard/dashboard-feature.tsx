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
    "4G2cJP32bMJxWx1BdwfD7TxNN42rWWuQbWFPxU861BQJrHXkeNR1cL4w8i6eXoQEccGHKF8cacUnzAyLx3C1i3Ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494z7V4FKtozg2cdFwuF9Yapq2uw6JyoWpJjuo8CW6Jk93x9odGVbuxSEdCjp75CoHn7EkyzEBQ2LLtTQpLnp4MK",
  "key1": "31xJ7dYfahYdBG5HoEzs8cjr6Dd44RgnkjGffBWLaoGZZc2mW5ja2ZUjFCuKDgHCRhGbhiZtpuZqkvfr2HYPG1JC",
  "key2": "v3aYVKd292ZWvXYuXJLecZMr13BcDJAUKxVoVC18avK1ZfHsb6VaY6ErEU8H2TPGfr7yqAsqRPGxd66hEUCFHdG",
  "key3": "4a3yyBNKeWrc8tzJBr4n7DARFn7gHvGGhJZKNVTA2rd7Sx4nUSV2bSATQSRE1RVaWARo5Aky9NioTBr5nhyByrGU",
  "key4": "4b6QXmejRkKMjpxJprQYRvKMzHzDd6HsCe546pHmtvsFPXkoMYHTjZqz7HAL8T1LEFc8dT5HRHMT7ybxbJbr138d",
  "key5": "4zXsqvY7VUdoWtCMm6Xxx6n7jw5S4mBqH5Ka1qgYnXTsFUDMK9mfwZCPCzvkCXmnQja3hM43gnkfYPsiHvwBWLAP",
  "key6": "9Nug1me42ABnHFFGYicQGGQYYXiBAGqY7gj5z9fYHTzGsGRSMFhor87Uqxsc5usihUor7WjiZ5gvA1UWnXSJR7s",
  "key7": "2uDH2Ha2UvwJX7KYG3QHWzgRdDiNov6YejKQCQ2i1yhncJWZEghknAyHCpSwYsxBHVSV6DsDwH1KjoDYvJHi7DSN",
  "key8": "2cgGg5t4rg9NANDztVYAqXeLA1xTUcjayYzqiArbctFfN723bz1jJLwZQJuRBu8u7nmGciThUeFuCHUGwWPkeJH1",
  "key9": "7AP8bExUG8JKKHGD8sw6CrVzRPq5FHV1GBfEyrxj4NGWPm7xynN8BYUPGSBAxbmEbD6KuVruoYZJ9Qx6i2XxHQX",
  "key10": "4Baiy2noYWSrwzgys1dxP6WQVJx95MC8sFG46Jaoqtb3oFk8hGTmyw5eGN6ZHXuC2Z7NCk8faR48UFNxArgCtH4x",
  "key11": "LX7kA3qtU3NFgaRQENkNSaGKgpAfY8hg2aZkZ2gYJfHCVPGCAuLcWV4uk7Y7pxsCcKtcBKVeMYoKuRrF6ges6pA",
  "key12": "2ALgs14SNoHgTV4Dw4Mubo8mZqemNtmeahRvuyG6HMB6ti5eZxrzq3BTSkktKyuWh2sRhb6DxUqTw57UKpELw3QR",
  "key13": "g5UadFZ78DfYR2bkFEj7w7YFv7j1cFsbKJwQ6KYsv5WaBMwDkJnmBZQC3PBbBCZHMdmtnhcD3DjdHqhbW1LzU4u",
  "key14": "5zXRzKpswbqgc2T6FQp8zw8iQHeZvGArMrD9yxUs1kdyxDoUHKapbk9FHYdV1XQaUto8fvxmyuUWswVsnToVpSLc",
  "key15": "3YCsN4vukYWiLxDnJ8tUFmMScjU7VH88Crf1t6eSbbNmChbGxUpBUPX1MJiMTWjEPhaKCtdGGLVWhS2YtTYZP4eY",
  "key16": "2DEY1aci7BFrfv322sNTTvrhfkXCh7pfeech8BxBi6zNerGPiiQfkawLQPYGYjbKh48B3ciN9J4RKBYZKnpFuaMV",
  "key17": "4t6Ky5xNjaVGwTHW5FCeEEd64HYMSLCrvF3WyEpnh2UtWYYTJA2S5ivzPFbuvL2X2YA4SNicrsWsEdjYoo9Q1Mod",
  "key18": "3EdZfVkjyGcZ9ppBzadSmVmgKbhCB25X1qeDH6zZCREoTTu7nPmc7e2o6ETAWUEbciF1WgjpQdQcJzuy9o3CjpZ3",
  "key19": "59XfZ5e15KEwLQL62r7gP585fzdXbFeaBKtW2QfNuivd4ZBViFvTeoAwMPrwK8x4HMTEgvqkzsNDeNAjVgQ8xGJp",
  "key20": "4iQHvhACewNEZXnE8QeMCwSkFjS3KCdJgFMFwb9Ev2P7EyJQxqfzHkox31hdiorqjG1VVkodRm6vzoV7vitcny1f",
  "key21": "3yddQREcypgej2kPT5gS7m23LVuZVDhxNSiSkxJJzdfjodiH22Ff4tyi5WbLsKT2VfddoKrjqHU9ZrGaRHBwv7pf",
  "key22": "4KkjksE6VMCpsP5E8NXy3cVE2QSfxv1UJnBd5BvduHbXXeQvkd91cx4pm8CLgWtro9aV6vd6zUAtpw6UWdgF7TD5",
  "key23": "2jnyYGToRFwKrytQCU45mPWG6okVT6hpdwQFESNb8zSpnD4mRnnYgdZfmx66sBCxh8Hu3exqu2EGcKnb6yRPEh3G",
  "key24": "4cbuQonWJVq5JDd2cyoXWuKb3S4QNgdu9uUAxrX3sZ32QgAvzdXu5dmgVUHcBAcBeH7g3zfGcgchqAJeP14LtyhA",
  "key25": "2NssbCvYzEkPTQYgZrEDY3W9s5pzxF9v6yqf6w2ry1iyw1m8GfAvV8GGUPP2WVKjKuWPAHkYBQoYbbYMJF2X98r8",
  "key26": "3NryBxV4s8XRmbDhws5PkcfGS7BUkZxeEQ98Np5C49bbo3pRSUP2R3Z97BJ1gLkzkVHUsWCAg5K2qUt5KaLyAvqB",
  "key27": "2B8fe8EEA5tNEPSrf6QwAtxJBxEvqpq8552fYtcsRWaanw3pn4bmRhknG1ksGYNLnB6ckHQYYaNzQmiu3xTe5oRZ",
  "key28": "NYD7jD7pGcoGoZC6sr7tRJSe8fBBpuY9cGUDtPKUju6x5pkNkVcYmMyXxcXvMWBMrp9pa5FbnRcF9zoiNofAysr",
  "key29": "3yxVcEkKCeoDiGqnZgjnyhUF5FnsNthrR9pkvX1V6XbvsCHQyjzgYSu14p4dDvP7jQj4LfCrrppcnuHgfj5bjmoo",
  "key30": "3wxQQ4Ubef4GFxQ2z4Qa87es2wrYJNCR8BwdDyXJMXiMsZosYCYdJfBZrcokYppE8AQhw4K2oJQNt7H8sfJHXzGa"
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
