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
    "yhzkSrtYZhZmW87rRhae4JTqKeAdRaAvmT8FVJmKGoR5qocREFReQMfvu7Ti2MTRtKGsche7fYe9C8svdh96AM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nh2LqesndZQDjif9x8w86Ys5eA7ynsLjDzQG4UeCMyDr4Uh9KDsUzHBErt7URX5YMyE7CYgRkudcEzKjbg2rwk6",
  "key1": "dbQ7vqAr1MGfZfnwCUWuxN8hkLanFQXh89tQ6uzG8zSkP61dWc85iqYUheiACLhNQagfrjahzBn8cipZ1BtkBzS",
  "key2": "3C8ZaFJqK77WgtMFJwLisjEZhxS7hF1XfuBkcTf3NeSeZS6Ey6rDbo1gCAFUmY1qbQEmNR1QSQCZZ4QayCB2y4qQ",
  "key3": "43oeL3SmuRwPLWsCkZEQVKXG6mJdJeMcDi4fCnqCtHjQTw42iyffr5dce9RmBbYn8dKaXCStPmH5XzdRKXm3iJSs",
  "key4": "31jhYYCdwLSXAGJSz2y8WKKH4cJKNQQ4HmQuV8N4QaLVmCbqAD9YR6NMEWVHn1hsFaeV1bdHpavoS8ftQX2oTtxh",
  "key5": "3dteAXdC86BBd6UropUcV3zPcFDVpPpv5Fo78KcnJkCsq2kJKEpMiYbRjEwFDHfkWLgbbhZAm4Ep96kqeYboH1WZ",
  "key6": "2o4Xpv1N3X5i8YjN7pZfENcCLck4YDPMH1ziPM69ervp557KvHn6c84bXWRAutNWTdS7bTfwGpBMj9tYvQVqkRtC",
  "key7": "2PYu4FPEK5XHcc6YvZacmuXvpTHtwxRrsN7qG8y4oVgLetDfLLUvLPXNaATahUKcPvx8sfPHx6nsBVL1G5KcSGnn",
  "key8": "558riEhcVQhqEuVbyQMXGbTC5JD78V7w9JcD5zjpgYfsbc9nFUETRXaYSgxa3ZKQ9XbAoY84oXPw6zcb2bqVj4TY",
  "key9": "Cmk1hzHybvqAztDU6A9jrzvCTF1F7C4rsNiciNu4QnRYVmoVwwtQxiJjgtexAcXBZYt2DfbbpnqWStY7SmAqyew",
  "key10": "y9JmvWHCLczwUfbU5yhKdcbErpUWehjP3PKAwg242pZ2LV8x7Br2fUos7iQSqdzh5UxGSzUEd5yfxX3ncgr74Fm",
  "key11": "aewUmb45ZsWCy3j3ntb3dQDnsYs4CDUWVY5XAvdosH12bTKJM4BztVDhQ8yRjoEQkQEeGgZ2AtGrT3BXPCeXT5T",
  "key12": "458QNCcEdnxH58ktmQtE2i7xyaSe3A6P7uy1MGjAXeCUohkq1icz6DcWvjQMHNDMcUHRHpTyj5k39KNtXEr7nAMV",
  "key13": "5aKc5GKhrtE9GxPueF9hDfZgkooqN5M4nP1oemYiRtLNgkwjrDqx7aZvNPjYxPtBKWW7UQUBhEYhmQcJWhGBdKog",
  "key14": "3sMKsWC22BwZXsqVAUR7R5xitTGmURg6ekPfqC6z1JLEo2zG6877iQhZm6WNHD2Pa4SKMtRH6iSHKsyqDy9iMzLA",
  "key15": "4RDz8BWeBaZRDNCV2Z8Vyvai42LuYPzzW7kJ1Wu7QQKUvdCLSPFs4QX3Wh37d25LkH4U5pbnmp4pAgkAdjdfnF9g",
  "key16": "4m8x13wMzQ6a3c86jSGu7jFs63Wjo8jjZ2tKZomtgoFgvQ68zKJ5fDZXEvXR3F6xLxC5owdwHmAyTsAQAQkn5f7F",
  "key17": "3S6u6aUwT3Ro75ywtNATmtPK8KBA7uRQHAEDKXGZEkSZLERSxDc5SnDRJhuAMsxcYHDBWdikmciLGBv2af7Dk4dP",
  "key18": "31Ps6yd72Sob323yP5iuWTc58PuHNGhQdorJvazJWRFiNCc4tzqrydxo55Am7zXZ9X1KRApQYaQL3gQGT18QrCo9",
  "key19": "vuPM8YoyQzpvx92ZzCmtEsdWL7TQtqtiSuJ3GBPR7k8DMF8ykGYWyzYxfx37kggAFjhXfKzHXSbYP9CRwvShMPU",
  "key20": "38ugbvBwSMzZmFQMEVUweGe1VVDBA853zD5E1jJtKmgMiwBEuHxapu1gWozsakpPuqLtCTLF9Qkob9mo1wM9tU34",
  "key21": "52tcWWsV7TmQxMM79ieG7KHvVX7aFipQMB5Nik6LxbkwmP4QecmEyecsZCfpRmqPLjP7GKPR8g8wwkaQkXfPEWu",
  "key22": "2hXU1tprKxwWELgSSZhDGZgoduS8iDtTbB3Z7EKzDYGmAbD8BEPmsyot1UgpaMTe7Nno9DPnS5cjg49u8srtuWQC",
  "key23": "wN6GtibMsPMnWbTTDkuKv7V5yEwfmXxW9wHY7t35SqKxStx38VJpjWsDmDsw3oUvmVhAaMjRNUSZKBBmtht4pFh",
  "key24": "S5mE673ZHLtAhyu7TwsceAbmcP23Tczb4HxuLiccMBj1zJX73orKQRfhuYQRngh81nqeAV43pdFCqLASKU6jPNA",
  "key25": "E7VVCz8NjSj6hyDoS3MjjbrSwKViMhAfYHQpyBbvZntkbjxEmSXRd4YHuXSzQCnqFjqRufjQZNQsfPk2rhXtrJp",
  "key26": "2xoseLQX2Kr7X3jTGZSYRCfvoTuyakdgtAkB4m5sVuM8RqiM32p4NFZsiJ36qvz8LRMKc6xD7CWtKVFwX7Fncjos"
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
