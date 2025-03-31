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
    "3fx7zFxTtP1NRm73faf87K3dp2uYno6fEobuXo9ezsvAPFwxpftTS2bJ27xdCNw367JqHrUcQJeLfb8owvomSeH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDgX2X3FrWBp42wz8yFcvqyi3V1QMizAMXCV5999vQQh6ia6vumNji5Nwu22QCni3oxh9NiQ6RX5zpAvbm1AtyK",
  "key1": "yQF4KfrNp7b7UMQQQY3Btc7ksndx6aocibQx34X8wXWL85aTMTC5whKaH6DSoW9S8JBsKy5qGppmZ1MFTooR6U7",
  "key2": "37dbZsz94SGVhKPv2fhEBL2w4BYNSwZFknAcy3zwuft51kvGuA93oxuBgTrxY4839wwLQpe4XMdJ55g5vDQ38z8f",
  "key3": "126EorUrycCtMyZfKga9UYBaEbxVovQPqSHgrdScDNWbmfEiRc2myspmaQ6CuRdVrSHNYLZ76nwwM6Y231eqCmzC",
  "key4": "5PtU6x385qYMcZWcKdTWijdFCJubX5RUZ3AdhXRqW8q2UuRBbHTRxFSHveshLipj7NoqMQtcdwfjnxo18hR76y7w",
  "key5": "2E8YxMN3kcJoZ9kRGx8Q7P8xMKSJeAu7HBBHydxkappMmny95cgrW5P6v5nfuNBbLyCkmq2qDyqwLEq7w22Q6pxX",
  "key6": "42rVT18xeNxzA1gZZSRn8RBAc6mL58mEhiHJnuw5r1bV7WaGLBroqn9UiEwYgS3fY35DxwvJ6KkDqDxKqTLRnA7f",
  "key7": "5uQqRX6hoGpjik3TnQASwvULgBDnGpbxgtvbxoZ4jEHai3GF2HDzfyTEsHVjDqpMK3cALF8hxnFezxBGLAAEpbJ3",
  "key8": "4rpx2NCUA7P9YMh59HEk8Umwhw8nG3puuroYtxgqTRQWjKjufB59ERkcfCTiG1XdvhJ4Fgx87btp2TawLWpamcJo",
  "key9": "2mcCvohyRjYjtjsfMoMQAg1YMdLx94QnD6VtERMA46bodboTZ4zaiNCe4p3KMcvMQ4wKA1PKt8kbH3sMLL3ECqeW",
  "key10": "2eQrQ3F7gYYk4AY5zoiDdGTwaZ3uLub2H3Lqk3xkTqz5SDt3TKiHPnwV97exSuD7zy3bhWbjAYaaxKKityXBB1sc",
  "key11": "ngKfkE5B6Hewz8VfLB5RmpsMePzabf3GdBgCtpSKWzmd8MwNFjZFH5Ch3hkLfNkz1zBEchcvRQvwv2vsj58oAvT",
  "key12": "3NRzr4DdB9FpR7aFD3KPFfHUgabHH46u8dFGQA44BeZuQt2XwHJ6wx7cwrwVk5PCbzBDAg3AkcyUeeDeg2Tg8Jg2",
  "key13": "5h1D88NdXrpZamMWogSQDAezAj6ux7LhHNLrGJPDZhgp7zXRvR8WaQxb5screVn4YWB4DktA8pgV7P7zC6wgyH9B",
  "key14": "4bYqpyjhbMb4QG5VDQAcMRTtzCmsp5H6AmTuaUZhWkSsPLKZjus8Cgn3cCPMShmroZXqpbnCmEVWz21HAUUfFKuT",
  "key15": "XF4Lnps1GFFrUAnCqqHJA5iz1pTtSKKaaPkuts44AjXfFvKje9ZEAGdXJw8ZLJcrQspSRxxdnPUHYGnvMgKEmcW",
  "key16": "3iMbLKGdQuHgn5e1GuTie17zHFXUvZXz4LfCCCj1V2HenGRUqK8b28vZvTbph9f2Tnn7Jkok3traY7HmLYYtZYiP",
  "key17": "43TUnWGMbdt2wrUe85m2t1qPFccPytjdNEgUi5b3FAXPRJq4j5NnqR35gMkWMTHf9CgnV8psCjLmc91fhBAwo7iB",
  "key18": "4KK2iW5TEneUQQyGsKzwxbuRAa798XnumPUV1jMJ8QmqBr4TFU8h7mLMMLT2HrMmNQvo5ALvUit6B55LDwdxcQi",
  "key19": "k8ghpPb62NWS6S96j4tWYFv7fpMdm2jL4EdVoPkhV5u9c3vTnzXzMRpSBUuZC8sx34ieg8VU6wint81Dx6hLttn",
  "key20": "5CBT4ZQrDgQqzGMtRsbCrxHFJBUfrMqZQNuqXsJM4rXMZ2Kd5XvrBtkdmtmR27SsdEiursrRksSpUPLKzMM9ZgJ6",
  "key21": "5L84LmSgy27xhynC7DpVubWvaSGQQzqSxNMUZRuj6F9ZpjfeSDcuSpb64YhtSoAjkXQVYQ2XU86FwqRfi249yN2o",
  "key22": "2oyCmcY9S7RWTaeZztCjUhJGPLzccYun3dz8dtguZYw518ZT8JvE539wFkVrK15P9DjFXPvqzzx7A8pZsuMifzE9",
  "key23": "bPxi945XegWpDV4tPM29LRwzd1b34tw9FXXjTYcd3mrpSgjvgKedUAHJZi5uxfk45njtHX1AV9nohQQb3t7yd82",
  "key24": "45RePyrx18VD1ZhDSA5xNLR561towNU2W8sRNgBJRnRiiTXPGrrBjtGNZvi8U7ZjXPepwF7u3ncDm34ZgSgidoa7",
  "key25": "Ro7KxRXcMqqgFwP1zdy4dMVTKsEkrDXC8kHBxq6PjiF6uEGCWGL9UbFTAa1CQkUwsTX7vN7bgcQF4SMPR2WpQNx",
  "key26": "5gN7caJE9HLaf5JXzHCcCA31YYqWU5p8k7J7WGUkNThyKPQYAJSLZQJb1ZjqYrt5DDHfyHWUjCbzaT5ESUGngnko",
  "key27": "5AZ8KK7FtkBwLz6RCoskAt9Q9Pg4GWS9791fyDXFsduxo6bnhKp11VdLnnkW7pocNeezxUtfbPftiLQ9ZSyo3H6x"
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
