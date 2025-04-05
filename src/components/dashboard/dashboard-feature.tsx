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
    "53mVKziX1g2SNT59sQGVH7No3oE4rqxv6EmcZhu1XmsMZkvPywR4rbF4kjrrZhvFTSJ6A6eDq2CmTqprgSxexgf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDgBLap4jQJ7Cg47TQS81QLN4zc5K85Gii6RxBsDCb5LEWDHs3XMQkdMmHTKjwQ2MbzBH1y9T1sMfCRPVPu46e8",
  "key1": "32sYrYqYkRcR9xomnKSSxTVGP8ajE8Y2zeSkidEoJFYuJhmA6KTtn2DJqsi6fjEqrbkTN1LPFfFUaL5Kvdj8pXDL",
  "key2": "46HpSLQfPQ2ECbP4HBFohUdeQajWLYP1WR2HHg3FP2Ay39wAZo8ENARYKM4FuPDAYBRRASeriKBz8xM8pAHAP3YL",
  "key3": "4xuARGW5BAt1KuQ3ZyTxhJboBWuvK5nmKMVWsUoAZ7LuUwY6KypddKewcRzshQ7DD6gAB3YxN1zcGr4u5gGEZzFG",
  "key4": "2uBVyHdZvfNbxiVDiRKEetnXPECRBWyt71THKsuSzaS7GcjH6MG6ADZu3bBRb6CPicuE5BRvWNgecL8ifVg3QgyJ",
  "key5": "5dfxqEtHuTW5yrrLYsCVTAgdu1JSkFoGgF2eLZVhn78dWPdxq17VrgB6Eu5xF6rmANrP6fxS876XbVKZBoE9FYEN",
  "key6": "2HP3xxcA3gDM56Bzc6x6sjaJZWDgUmWq5anGjKL3vVMYXjAFn2krfbfgYXnf9ifpargCsHP6HauFsvCjZiL1c3Ym",
  "key7": "fyprfTGr7DmY5wekB6TfJherKupD1z33dnVkkLiohmSzfMkpW4Gj17M6MgeqRuZGWWg5HeiA6nsMdgULWYUgHCp",
  "key8": "N6fXhfR1nksz1becxSroFcQzZGm17NSVsST5jaBBDqYhSJ2jxhBSzgpQLcZ2mnNP3gMWmuz5QrJApG4ANvPTNF3",
  "key9": "5W7SbtwT7xMwcD8d37pG8mgcerU6PdjDWNNpP7n7LYypuSiWubaHttDvcs7yzgNeoXvhkJTddb7axX9vzsw7DYE1",
  "key10": "JHzSKNZYrc3iiXMskgQjkwPgktb4f9oM8io6vhXqTpnQhGN3W2xg4tiENdeWWZM6w6rGuJG8Aa5q348NXkrAcmE",
  "key11": "3DD2ovAfUf3fcdyZ3vZzbGwpjGWvDCPLjW4rQPsfA1gEqJ83ZYDEvhYUJBqRPSPrkK17o6ez5zKMUBicY5HAc3gc",
  "key12": "T2dGvkt1jNvjt36UgEQ3cVPhaMaykHtqsJ4SqBQ1bKxc8CrPSnRvf35hDJrxhuepfkUMDV6fDxHSzJgz1jTLa8B",
  "key13": "57M2tv9sCPf5zmD9DgTy6i18LbUg55ptMvJN8gTMTr9uuCgaGZfXm8m3MTqEQJyLnLJSLaJA1x3nUcuo2F98gpVE",
  "key14": "2NLTbUYyk7zEEnBuPynK6Pxgbkg68MR4X2PuSANwWKCCxeYAJhRSxm5GxZjEPKC8w4zRrLJxPKQA1ZAtxMUSdAPr",
  "key15": "5JcYPCgf6e5XRrcip8bJKDuhMM97QxZwBM4oNycpJCc7iqjVnYX7S2uzHDPdQDqw33m7i5QDm7YHoJaUGbWpjK9h",
  "key16": "4g4UWsHBNL94SvqJwXHadRVpBXNwSAixhweZASZpoi2j7FyyZbcMVFW71ykRBtkAaeTvhCpo1RH1nWEWDArnTF1F",
  "key17": "57uP9NG4yPxJnSjoyHtkqcZnNcUX5YZeHtSpGRQgsEyppZEotbd4rsoKkMaiPYha4PmUUFwem5GDrhzJvY2rVk77",
  "key18": "55aLy1KvKt58rEwKE3yQ1gK4QedD3uadbTAv9zPSnXniRC85tiUobUDxxkCmm2KosMNix9Nc117A1VLpGhiUb8Q9",
  "key19": "2PLjEVU9nYQb7N3yfwh6usJygcLgD86B65Zd2QBhnUzSyC2Ji4Zh2i2JWXf7xnzEgDpecA2ND552fURzefQWbDFE",
  "key20": "59TsQF6m8diAoog26dCc2QFZvMg3t3pSNZGwhQP9AbG4pYuxQWsaDoc511nqDJ2SBv9po2ERBtc3GoXNw8SjQp4z",
  "key21": "44p87pXZygfCJFdozD4Ggn26TLUJaGBD4HRnPLvYZ7dRvGEzx4ob5DPcHr9BMavHyp3DdWn5QJzMc1w98urs9fR",
  "key22": "3Ngz9Cshs6k9v9HXPiGSQnVi12U6oNfDyarch72pfQyNiWkoYXFvmDmKPAq6pk2wNZP1Kdrrdzx6jLSnKQS8Ye49",
  "key23": "3f9dM5622gb67tpDaErRUB9LXqkw4JEcdeidhw3YjXb6Nps4wdiH8gP15bg3iRzXWqCK98T3RpMAU6wkyMWHwJQr",
  "key24": "3bHRgbmxta8R7a9fAxoYbte7cAB7qRoGBFfNtuMFH5o2PhRNuBcmSRZBuS8EcZUjLnysjFffPdgxQVh2UTAt4DNy",
  "key25": "5dyPjqRQM2PYAZZHunS7VGXz4mEWSPeTc3Hf8i1HKfyw146PNE61qtKaH5W2pdQJ5PtemYfeDqP8rbsi9S7t4EkN",
  "key26": "3w7Aq7Z5FbTY4fxpSiLVAnhUifjmn7APDQBv1nHREyHsmERFxmJnosGZoAEaj1QRkqfMH18RZnE5N1mzvWwZVEjd",
  "key27": "5m6jMMmeo2cruz9CtNdoAqNrzYmEyXRNj1FiYmYUJcsYRLnq7PVypZkj5ewNXMcRZxXENu8ctwvfShRqsLetTxLz",
  "key28": "5fBNzzfbhAfTF6ZAdoQ4UGbuAQZCffcfP6njsL7h1GmLq8fF3uuuiS2dpFV6g47SfbmtqdGRzk2ZYZPsc4WJqbBH",
  "key29": "41bS5ZHTo65fr7P6KxcG79Tf1Fo6ExRuwMJKPCuHLEpvUCzD9WT8PaXqoyi6qKnRBh3R4n5N8Wkp8vMpsbEPkvbJ",
  "key30": "2GfCoDesGS32XRzuGP9XjRrCaNKMbf7jhZoE5iGAw3Vcf2xandXCEm9DgwpXcV6UjJnwRHr79sCfxCM7i74xwU7w",
  "key31": "4T1bHnnLzdSQJxZamh4nm2bdMohGTsAiQtdoS2B2NQYrSQjQbHwsoJMPNiG9G9L5GczgoSjW2vgv2b456PocQBHg"
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
