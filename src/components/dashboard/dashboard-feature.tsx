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
    "RTHcpaMpJwcpe2daz6T7ZeGHvNtEYSwiF3RNR6i9VQmPWzprBnuEAgRL8ajcjk5iLx44k7u6D1gwup4QWC7cUth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fKQcLmmFf6qer51aeaztb47T4q4MBb2vaxiYmXkuEBasa3mTLskG12KYsnxtQZAvAmxQ6FkW4AKkVysTzwfnmAT",
  "key1": "5Gu1HBKJr8KPVyYJ1wxjy51WFoC54QA6L9FFTGe7sqjs7rsP3PnWJtkWhWwZhJLC2v46FB7Zk8DT7qsBHfWzMmWt",
  "key2": "bNYzDS6vwYw8aRDxUmnKstZ8JXUkZMvLNqsQSbKnPfqhue6pjHP8Km4NoGtjmVuGDBJWfhcehx9xNBhgdSiCLb4",
  "key3": "4YNRh2p28Rp2uwySXN5DWTA55aEDsAFhYmJFuvh4F1FqhN7brP5c4akH3Njh8GkorUsYDMN6nkFPvC6pkgRHgdp1",
  "key4": "21zSBzgGTrRPviAu1X1UcSkdWkkZs5fs63krqQgJHymFmz5ckuTXAEFo1oaqEQYPxBRK2TBTzCizrVwujmbUfAnD",
  "key5": "2hscP5RTxhxDbKF45yzVRam8GnzkGWVVtFiaDCqW58LPS6uiaAABp5rUiGGJvR46wd2wAnLjdnw4hVr8SWoHdvhf",
  "key6": "3x4i5zFNkp7gdDveR5V6YkvhZfs6GaBGMvHsNNehkV7Y7yYhfsTJ5Y6iweSLfYQ5WwTdGYFiz7pM2dNovDKSyB3Y",
  "key7": "8XDVoqwRq9T8mMLiSnFm75TovDu34YvkPUxpLgUeiSNHfM6aXocbvWRaXU3UdCPrFaTH2uXkzBjv1Hv5BvXeEqN",
  "key8": "4mwSFmBJocPE8WdvJV6rvnLv4tAHURyzz7QGDmuPwHDJUWG7Yt1wz8rLJujRbkAhmNv5BGUCc4bnt35tsXTasCBk",
  "key9": "4M2HSs547tmnu1uQFT6xMdDvRoQhxxgujtm7vJ4uijmRmYAR7ZRUrC4Q2fARDCYR9gqcxyJED816rtJNd28Pvsoc",
  "key10": "5PUP7Nk4phEP217LFAZyRnbTC9YvoVYdSwQyjjuxef9bvBLQ8jidU6wbhNhjCWq3TS65zrQFe1S8gh1jzSPURE5K",
  "key11": "2vq8hJwpNmUapPeaH9LaBjS3sC7kqcvCxaPsxX8kXfMbSB7yycv7bYsLowEoRFuHNBxAieHCCGZ8EPQ7opKgWJtM",
  "key12": "Rmq4ZTPY4D1aiQLan7uKXskvCeLGPfTk2s4dCd25p9hRyXU5dzttaGMruiQJ98KVMmc2pb1czGWmoCydSYFYLEe",
  "key13": "4X1uafLF9o6AbdfQoz14U3va43pxUzUVcjiuwQQWUEmB9JfvZbGvrMje8n3CchZ24Dn5D1sjHzS2uSMJWMS2mEmx",
  "key14": "4EuPJQ89UPXifLGnyrJNFycL6jr1JiFBjKn4nbREq7spXboSREi37RdFJ3t4sELp56EAYczMgfFRuC97DFPChNLk",
  "key15": "5rR7yVaPzdW5rr9WZRTCqWwoM1t3NskiWiSgMiG5R9EnsCxT1SPsrfYEFHjy77w6JGBRZN89h99Tf6FvGS882wQE",
  "key16": "2xaKQmo26VkwgNf9dTUfdmFywfAL7A7zSa6ajJi1CqfFQ5t2YybgypNgpnuZPoZuBEv18NQiqk71U8qK4oTc7x2k",
  "key17": "454onSjb36e8UAGKCTEJoSWiJfLrMMUsM6BieLvXpBG1U1WuiBFZpy9qP3oocGDRPksLGQs7Y4Fi1JFZscubTmVz",
  "key18": "5maJqfxDU3pU7c6BdJZ5PPo39SSgLMYrQGKZSKVYDYsrUANhNdVPXZirK6nPvFGtPoE68aGmJRxacuQTrWETjuZE",
  "key19": "5heVYkfmHovrD5nFeJfh2d4aH5SyvhVNFmKuXxHRsRoSbCyxLchKVYLdjqKErZo5qdVYRVokQ1nDZcHi8gcGECqA",
  "key20": "5uXdXpPsVDZxXPN4Bdr5tTYu1cXBcRPRacMYhmvDeomsYAQQo7jeBGKknmbjQr9TqsB18Cdqh5Szc3cNMvJnCyoY",
  "key21": "5YJRpkUB6mzh2pckNALUM4SmcUMsZziNZgMHrRdHj7xwh6GrfkyojE5DwZojU4djfmCu4fHKmoZST33au7sZC4pY",
  "key22": "4GfzgLWi7efJTRd8dJn7TExnwQhY9ZzMKKpiM9z6qE591BiUbULUF586BLg9MC43sgyrdPtVwqkwBWCF7SPvsGhe",
  "key23": "4fq3FU5Cb9yyn1PL4LB26FVVy5byP11ormjE6Rwk6EE4ME2vgJYKzMxqx4qMsDif2y7FcrheUpF5wGBJ39BWLYD1",
  "key24": "46RGkZraqfnwy7TWBXaxxj1ZEmtXtK6dSuXkdVUAmZJKDBRPRqS9FJT2eZ41xVTdoaBdmEfotQ4Up6mg7r6cNdNU",
  "key25": "618tWYJmx7E9NryFRCn1c64dSQx78bJjB7gBMHXMxcH8p9H6T4uYkkmJF2M5BRytokG3sVcxmqbP79At14CjMWe1",
  "key26": "5hN9jncp1vytcT14fvXGcTwQdiWK5xw6N5FSj5awdC3H2AWicMXoyYEL3Ee24kcFqLgy9ZPQ7p3WSdY352PWGiHx"
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
