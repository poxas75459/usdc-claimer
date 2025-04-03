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
    "64KvMyoSmuLXGBSXrS4AyzxMQxR7sn5BJ6A1rgLFrHEWwAcUdNG9zMYcQdWCT856rpDuQMfh3WRLEpCgZWufdbF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FhPLozziSPKj1xrs8CQ3ViA5GeoGmM4ZJTpPfxVbc8AQHkAzRJEfLKC4c1ThgFcBYs1H5c4D2aPkWGeibHnw66b",
  "key1": "4yWAvDpmngjWeCWKF7cQLA6ck6zFaoQ6YFN9xTZgNqWbbz8uvw4SUik6kgKNfg4YWP7SPYA9ykrhT2adLXXbRvej",
  "key2": "mQvKvp3kgD4TMSnDxtjwAtM98G7yUHPkhFVnKWT41Wfsxez21uxnna8oDSfkZwTe8hr8QuYYGzAigkU3cQFVJSu",
  "key3": "39JGA7g2WY88pj3FKDUs5JjGnUUHs2DfNGwH63R5dikyhLLVLkMUntbWUhht8a2jqb5mMn81oU7fniSoSik5pDuD",
  "key4": "WERZZcPM2vbE4aqSpTZwTaTsmtiF8gb1b53bu82EbkuxZn9iD4Z8tz8xagcFHeo5HefX675FJhMnk2jVR2DetVm",
  "key5": "qao2pVzKw6Ecym81XBiFowyqAxSA71icXQwk8EXo9wL5LqHzmU6eSxER4vGF3MbsaMBeUjKJHEVT6aZzNLujKGP",
  "key6": "2EpsQoMHix1c2kj5ahsmGqopAvVPJuXkMH1YkBTz77nJqjGpzwJb23UK9A97qHGWFPSKVKxnu9FztNwvY7jbaTwC",
  "key7": "56bRA7S97oqG3cVK7FMctSTnnRnTYDhsZtMcu1Adj1TexHM4z2tUS7FxEM4hfbsdxSCEVgRwPVAD8Hhz4VtEwYeG",
  "key8": "3sTpcmjsS5Rm1ZxMAPbYndYgxT9vhaa4kdkYLQ1VV3kfTY3Lx6CaJ9wQoLeFpQjnuY2K8NEQ9zdWa3if6uxVJPR2",
  "key9": "5vcW9ry6YHaf1A6tW3n66oyTwkFD6ALdpeaUURRoXCePnM911VCnYPtidemunYwBodcmU9H4dfmjgKf7HeY3yW95",
  "key10": "eUJPUu6mT61TXLbVsUZfPEnAhJMdHFy2Ej9yyy7Z8Z195BYQoBhzURCimQ78spwG8NcVSFjfUujW9aXpKh7RRap",
  "key11": "3WRKiiEhb2cyDUjD1V4z5SWuewZ9NW7WRzegFHfWwaidKc5d1B1Zq2EipLmUmszTLiGeVDTGmw3hgcg6jgDKfmz1",
  "key12": "3iskn9BjyZbvpzvd4psgJp4997J9mgyYTU654FcdRBWogY3MNWFmcKgXsjqpDH2Hkw57bMsx6UqdPbEDJBi4pEry",
  "key13": "5QJbXZsmzwVycqDnwY7Z3DrL87Dgj3vVfmhz2Tw7rLjJTCjeeZC2P5QUwRftxwK16ARtGqunn1mv4XeA2fmVWkgN",
  "key14": "56gFrinQBRdEmJ3TNX867Yx9Dts2NWqpF77425XV9WoyK2MMCJWeAPXQpEq6DUfv6QL3hNVBNwxcyibFUqQYai4w",
  "key15": "33pHQheaSy4bKveUweN24QgZXUp9PhasnKKqG8xdfNKr4sE9xePugwRk1KSc5V7hMy6mei9i8htfqJ6LNjk5Yowc",
  "key16": "o1eDjYKoumjWTh1ZnxJFvsy5rXeN1VmVGRm24xEfzKm5MkGttweqTD328nFaVLP5d8JogzNWMC3mp36Rjnt2kdA",
  "key17": "3QQRqnHigcPf49KWbA53FtWPQko4XnJ9nojDxVJwnhixn8xFiVyXxBfdkcZvb9fG7xiouAQFy37Pfqy291SfLjn",
  "key18": "SWg9zMwUMEHKXWAMiBNHHtEUhnN3AahjJd7wT6ueCLfJ7ARCKxetmV5FCoX9rt251FWAa5ADVrdj6pnGmQ9MqEa",
  "key19": "31NjPY7SMiARsLDCSkWQ6nMxhSm87rpWvKDZu2B7Uq653VLSpoJCH8cDjvgFrFXWxvSsMJKEsEcsChF7R4q3eaXG",
  "key20": "2wr8mDsE44WJSRXMr94srFrxHUX8F8Gd7NNPHGMxDxCzRKVmxSyG6zoFz3vz5cA8P9PWbL8b4x8yX4R7TF2oVRB8",
  "key21": "121NstobbiKjqDSx2BSib8fpKNFAAGD8iUG2HwPThCKqmiueoXTBS2Fcjt6fr8JdP2vf2aRxPoY9LXxPXKZayui5",
  "key22": "2ewuEwuPnR6X1FrKxwk4XK5C3bP7hUi1NFuL5UvQ5pVT12H7NXUWoLmNcigRSrX73646KExyPSQVHtLjtC4yDNzF",
  "key23": "4rZM4wt8fFT8TpQX7E5PT1c8Y6VkUJrcR89QeTJFijmbWau1qiYAhFvTA8oLM2NGf86PDQMSaPtD3rwFQ8RNGHYD",
  "key24": "2B4A4ALndVERLpTnoMniCAntwZfoMpbMqHa4XMTvhyiNZjcrtCD1N93mmGMzvMbHAffBPmXLRSLydZ4taZGbweBe",
  "key25": "MQL6VBt6YxZzPPFBKzXVho7wFK8eEEdqa6FMXcrc4HjAQJMfckMK79tudyyFeAh7fjzzjtVtfxPm9rzMaRvQ98f",
  "key26": "2oasCopQTC5hLUSDBkD6tkRDLDzu6WTfpWqCRo7BVMiapDjRNkxZdcXyArTLs1dwViCFiHiHT8aKECn9wkpwTUTb",
  "key27": "ENeQckYEFczY7uqGgejroqJRG1gWVBq79dsPA9TTQ8J2LbQT4nGMh5jdxRcQnvEGQHv3jUKp48ybe7acbhxULrG",
  "key28": "58hVYRdqkd16zvcdXop5cpjUrezZwA4WeUkEJGyqPnWwjUzuC2NvKqgaMYh1tcWTsBinjZ6TVrzDWgt9ELFJ1tqc"
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
