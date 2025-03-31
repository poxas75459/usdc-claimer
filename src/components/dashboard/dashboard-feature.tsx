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
    "36zSXNZH92SW2LfhW5DQDrujMU8MYr6x8yYTjSYHt2okrxJYgDhZVz1VV1EZwDGhFQPjTBas2nvE4x3ApVQGFYyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rQrjFXVJjoV7GidEUS6KT6orSoFu8TwSoM13mJGzjktnund6wsePm1zSvDVzmffLGg6Q5WcrLsumYuULcxkfUD",
  "key1": "45Hv4sFYDaXKqd2EhA3MhfqiZ2pCaipBQbd5P4DFbEYVHEd5m1NvY2ZZtFuzNoDTn6ezzsnavBXRQtiKASY5aBJ4",
  "key2": "2sE9kgSjoL8AmeijvPKk4tA5P4UBhdYGGtSyVjuNvUg19aynVs4D3s7ztbeutU4t6ST8uBNXkUVgiqYngCrBdaSW",
  "key3": "5CLSwP77RcLb3He7kJop1gJvnVjWdQSCgDdDZpBvAH5Vi3S7raAejSk54CQBHX2WcEhHBVpEaXjuVEu5MyMRCziC",
  "key4": "SGQNKj2onYjU22gic5pRf73fffyQ29qQsPyRFoCtGtGPmCsVC7VQqF6Ce8fuBfdcJ1eBkW93KNmLSsaRxQVTSC5",
  "key5": "XPkr9kx8WEneMQiXSqXHupFj42ArsfJWGx3k9r8kbHGwm2MzE6wbYxmkuyU21EBRH8Sz8pakKvunb3FKRLdPCLS",
  "key6": "4DAJDgP55JVUBypKsJXivdiJbTsQMkhRT5PvwsyieNBHciegp8woinVGTneTod1mWv4c8cAuq4WyTY1Usty4K5W5",
  "key7": "Hs2mx2ZZyATAwBitQJ7wVh8DtYwc6KXEVvM7XbnuLSKL2phoUBZrqCURHq3Xb6mKaGv1WdKTLkSCdaoFGqMRuGh",
  "key8": "4UdJERSv5XcDYcTBwVgXhT1DJ6KAJEYyZKKQLLEcSoLqsXEZb6Z4ru8rvwmoQuQxiykJ2BtXhyua6ArTLLPrEYJo",
  "key9": "4uDiuSNuHMkFDzMBsT93qnZGw1wuetF52gM5a9NFv53jgmeMN62RMckwSEuoJQaNnaMe2scra7XMKJS2zqJr6fnk",
  "key10": "5cpSdqQ8evQaxVazTD76fgFa1aL4uEnbMghFGtNbBuA36c4wo5vR19p1vShguMgW3MnbjKjMaPVSGkcdTi7C75iv",
  "key11": "4wiMebnELRMjq46SQpMvXYi2XB2Ybwgk2FMJCA75YGfAHkjnoJ4tPbVTE89hRUVDNMTXUL3z9zGMZLZvhTRzmfHx",
  "key12": "4hLWuaL6ZzyweHJfFKtarnz4dmsABBwf8Y8uTJ9eTmQgamgH4MBG7r3BQfX7K2kSYGZv4WfSsxdkaiVVLQrogvDU",
  "key13": "5wScknvkmraYmajq2cUHXRMqgmWzdUcAzphmbNcvocETtTgMTS3aR28vVRbzAoSFYdywJzqo2eDSssdS4r4QV8PC",
  "key14": "2nyPLRhrmoSDCQ2Z4KXuumjvU3bgqUwouVjsrRfsLbizZ9RTEibZM7o7mRzWQW8KLe165spfxkLZZ25efFYnvSeU",
  "key15": "2kGQp8va9E5zu66hx6n2gfEuA94YprYxxCWbZU6f1VckAfFwcGCZ3J5V1KjrBigbv7syCzJxmM9xgnMoiXAabW7s",
  "key16": "487FZFq9uFXAjEJdPT9Wp2JCcpz4j9q7XaUGEYvZ1QjGSvtiR3mKbQht2doDTUGbr6NxcZGSMM7qGqTXoSEnFNkT",
  "key17": "2krZn8XzeBnZpXf5UqNtrrUu1DwZg27UHix8XVJDUjcPhKwHkdwGKhkN7tJJRkRRWaj94knEgENHuLshv9XsedDp",
  "key18": "2nPNxg9g8SKTozvGuwhLXfSHTGBSnM2Xtjw8q9NNtjGpuvpcMTprmhi88HwbVHMtKU57KU8E4y9zd9xeqhzRYUct",
  "key19": "2AbyWPSdxpYautJeuiyHZqQzG4KE5mT85KUtPcWw2YpWVzGaQJXfYbyn6dTeM6tnC8kEMJXvKEiTmpnLCFrbs9S",
  "key20": "3VaFT2WU971Mm5EBCiDhGoHzLah8eqJmcnHwx1psFVMp1bsrBM9VQSAW5s1ENExbVJH8dkZrvX2eDJ7rCqXxSN2C",
  "key21": "412vuYx7eDWCjC5hqf7DcbukyBJW2KumCN2RAxvBwkcEamMu6TfgJrdQVSNaUPBUaZVEWSX92crjmWcnP65TVVf4",
  "key22": "4WLGFpfhGW3cYgB8t4pD1RYLTT47x3U6bRD5ksSvGhzGVLHjQVCLsT5zigWnPkLfFZc3Qtqksa9PFUau5BNGz41U",
  "key23": "22XsUWRcagWyZAKt7j73ESRANj6QDv5Liv3dnCait78PYkDujVcEs2iiEF7vp6Agf9wm3Pid8zyzXRaUCYNLHamd",
  "key24": "FTiECRXXo8oMY5aQiE9G98XGdcXAoPQ5piiDf3H58PU4GGwcS5Uibqsoxfgez8HinuCNRUbzS4wo7o9zBMsLiPW"
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
