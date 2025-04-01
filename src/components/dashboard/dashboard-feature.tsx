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
    "26nKNximKonjNYL1wBQ3Y2YZfPJAWvnUmUrJW3uWeVYvCTx8n5QA71mHpcFnKzL7JzpncudcDL1cGWH2koZV7KqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BMcB6S9uGTktzy3bakXKEHHJTmejwHQzxfjpYg26HVHM3kH7Jy73CsQptjJdyY9nvC4zreWoR3Red36DyuqwwuZ",
  "key1": "2nAJt6M2pjAAJhG5HA5HXo9tXUKtpY7tReCkHkZ78bU1JS18oTCkrhScMxgg31EzyGcgWHnkXgjXmoAQSghf7xwT",
  "key2": "56945hgh6aeT3qqWwFqkgLDEN2BHeYebGhhKyvEZuZWgeQBf9bbYRJZyJisU4VbqqXgWhQXbieYLWcjzuNpvsnZ7",
  "key3": "67VHfacnHUJzeJejPzWwnyewcq8ACEPTjLvrmTFLCtfo6YC7QDN4vGQ7xj9yncSfMM3pWkprTku2iAAYdu9fCr86",
  "key4": "64qaTySURE9csx9fjgRgUCs9cav2FNRSswpGq36cY4dDmVUBXrSWjURcvMCCXSTTe5oqU79p8PCSpoJM4udZooHv",
  "key5": "3E7r1ncqmd7XJydETCqfDvtG3kRM1uEeSqswMoRanCcSdgZ8imSJeNqAFrtWDnXzB7CLaLJriEynixsYJ9wwGT4",
  "key6": "5Bie8e2VLTrEVuphfzNfw65RPtg1drQrSYAoJ2BVfMX75ioSS25J88V6KmpWvyrf7pvuVs7spDKP7BxT6EgxtT3c",
  "key7": "jcYftFPrXTP4hL6Wr9v4Lsvw2drhvHoC9DEQpHe4MAYdNdov5HcswMuCdJqzQY3zxNsAJ71s9TNoUJzTFas3cLr",
  "key8": "z7d5depga8sPF9FwT7T1NEiVMqzeBrDFHnYfjS4ih3AMPS9oXktzMS7kTLErHNWH3o9k5C6mkmBtp4s3fo1y8kS",
  "key9": "128dx4QQvSWGjoSRjv5EuLrLbnNygA8fSFv1CyfLhKhymD6yh6AYvyF59cnir6kRL24FV5wWZfZAxWpWHuEDQvMR",
  "key10": "5ADy1RNuGmehmmvuq5nMYr4pimtYWmAqhdKKhVEey16CPwgQHPZcmgx6pTuiKEu37HquQYgVLb1keyKn17wyR8p3",
  "key11": "2bE5JAi9hfFDFaut3fbvc6yKrp8PBrgsv5d1DhxkzTajHw5wnKzZQo6fBGyFj8MCXWHQhouFLnEJ3BNVz5YDhcUT",
  "key12": "2uo5ebLNdvwc9AVpKw2sHEJbnqCnyAffnAKbBmEWvwyDZEq9g8p85t7JHHREKddPZTrk1qPBLv44NkAPFRFYRBV4",
  "key13": "65QJ5Ngm6iczZtLsmR3UVK4atZsThGPo1sSpDxvqVWTx9qzaQRRCfJo7xvV8ME3F72UFdfr9412qokC2HWeZ7hnL",
  "key14": "57aX836NaV6TDUEGfK4f3DZqLWfWnNkkV16KRDADWhD7GRAL7eao1g5LBkRcKVs4NytWwyiY8kTjzEey77CxYkM",
  "key15": "42hYR9qh7LRazQddr1rEi9Mw1UG1zpCcMTtNWooDbJ7uiHDnfDNjuds8fXDi5JuWkFod6EpuHjexLryJ1evjk1kE",
  "key16": "63dmDBPPGgHWJzLepQPQmcvngNVS9DCMs5LBm7ESa8RryZXq96uFhiHjmDExNv3XRde5SDwXNk4t34MKxkovNNoR",
  "key17": "5VvAASjbSVcVF7ELmgk5urJ6j9AvB8t7BGcJnMdFJ8Qtdk5zk7dm1mh8tdZfXXvdbfwpahwGqQXUvuE6LKtbPE1T",
  "key18": "TSDwquisTffMYN3jN5tThbXrNNLBnpZmMFce46bkoTMuNpWw5kcdKe4bzk9EAcizC2wpq81ZF91jt2bUjsmMaYv",
  "key19": "mHjsoM5FLkew5ck2vnrQBhKPKm1cn13a9gqvBQLshknFMRKBvUs4aHQB6aZVpb3uyiEvqBExxgdntiaZGWn4YEw",
  "key20": "wSjfabg8nKTTA1iXJ6NQEBPSDQaxB2PPy777g48LURRb6Nm4TmJzUt6FUryzY8ibwAuUi3PVvfUoasEdsZKgUiw",
  "key21": "64fEdDAympNdrp35UN3RLsee2fcvePGZWsPjwqcKS3MXdTrtSax9qZxSeZby4DuTNuMLRaX5kadDDrMtZCMbiDwJ",
  "key22": "4Gt8MpVuHTWZXnwMBXC3aDBVMx3j99JwaYxcwtZf5ajt7NN7HeunRr2e3NoiBW5B2xJtm7117CPKoKq8KjQM3wMQ",
  "key23": "e6ZUNET3uM8j6wwRhsMkHcLZ2FRgwisGZpHmReAs1AcnxaXgPFq6vJCzzRC4MaY5LUyW3m9SSRGitZkobsnWmNx",
  "key24": "EGub1dqhuBPZ5x3jcBo6xCbBtxagbWZVXZfWueZnk1RVLdB8j2itmGWibT7LGGJ1NrgSbv1DVojrxXSdmpmWXKA",
  "key25": "4V8yqg6QC7TZ2EAqGWcBm4ne7PbjSJYmbHT1atDqDbdjyWZDZpDpSjJkn7PV88TyvjcyYMAS69nWvfRQczEtr3h8",
  "key26": "2ADGBURhQjWNsE1gXv5dT8WopvnargY7mtjZoixHhfy7ETKLBUrRgNuf7FevchEVo3tk5SK4PsQqs9fZ4NL9F1T7"
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
