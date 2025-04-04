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
    "VfsvnnDciZ6ttiwTQDhotcwg72Awk8SJ3ramgK6qFGneGiQLtrE87euCSqSUTGDuQ5tbvBzWgCcp1s6xxUXXjJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29tLXKfXPagNrJzyUB6utwkfiemxuCwwzHZQecyVnRvZgRTgssqBxRtAk41VsMaVGyYQd12uY9va2oZ4Vt85Gwc6",
  "key1": "4yu7DbeUdG9X1MPyp9Dh2CitBiwsyqDarQpY28GJvCjtv7ueRoV4nDRfpSdT94Ywp4Zr3hZnMjFzJTGQ3SLdZ2ry",
  "key2": "VHdZj8AhsCkK2uku1b7v2C9K6YyX4PDS1wGdANXRF7zwqzcJqRrSmZqpVXz8VoFSF9ZwyipkhvqUSdwHrpthiZo",
  "key3": "3g5Hn24oU4o1iFzUDTVnfWQ2tDuWEPHybcQYEiPJWLhNysrcBEg8Cxzxda1xV6hcknrzNyYtcWDteB5fhcwAQLv3",
  "key4": "2msTQE1VwroMw7kmVtj1QBs7jgAdN7Jtmcr35miUMMN214sVwmUJbYNteUpWUUYaBjpmKMN4sNdik3UtaHh2uZGz",
  "key5": "5RqUk1EE3xgPEWN9XwG8Y2QtxCVpJTCdhsvF8UsTPGQiTPy2ipx7JCJKo92xcZpwwu5nJHEDNeCG28svs5D2LtiH",
  "key6": "2VfZRE4xUZA5fZxNPamVvkLcstqVnb42HK4xW7GGS73BF35wVztuK8hqvWqYyJJY71kv82Nx5f2c6VAQ2zytK31x",
  "key7": "4qwGjT14eKH2UA78dEjcTYg2CuAbXEq6vAAZJR6QotEv3U3sKcKhGKendxa9WqYyRb4MTaBzCb6yAZthdWCdm4ob",
  "key8": "4Xfe75E9CbhNAsuWFKbitSssPgFaxFRRxZPfkkpMrfZEckHCNRZLnr2B7sFbtxvjJAq6QJe7RQY7yj5MY7YJ8F3z",
  "key9": "iZpDVXdSCPJQL4KZCdrJ8ANFceUMBFzP6WJcJBGGHoLAKmF3DrD1gm6gcFwAg2o9opBaoA8ra8E54kvRwH6m2h9",
  "key10": "3STnvrxfXbXAxdqtkUEvjFsuyxff5yzD65WCKP37TpxabRtYQFfB7tdjGGDkUP8apECe3KWoG7vVdTrkTLhrRKxo",
  "key11": "4r7TFKvUy9ckEE9JTL5Xox4GpXWotFjUrsqyPf8Pha2znWF8H6QAesUD8oEGSdjM49L1mmDUEDoJ6QniSWaMgGqT",
  "key12": "4bNsMnANYQEMspAnWRodoD1wFBcgeWUPqw6HrN46zD32xB4pbmKXPnChZEGrwbffsHZkc2Q3DqSQ4Z2JzwtmhZPM",
  "key13": "5sSzKaoVeJLqu6te1JtVKcTdRG2eNsXMAx74smsDzAhMBbbSSXQvKyNNaXaxduKgRZuzmDrHgH5FWNX991VjFHqM",
  "key14": "2DjEpBKTbZ3hoXbcmCoVuBZ3rNdD3cJ1VqCaaoqiySLUwR8U5GNnhd5EiZNswPGxiEGUDcBpKGPRas1vPcdQs6b5",
  "key15": "2mUXFcHQHfcZJbQAR4guPQi24XqVPBrGZWkBnLcsovRRbSGsXZ7Ao6m91TqBgsShBqdE2upeXsym5EpqN1A9v53q",
  "key16": "3oDSwEXoVre8gkW3qHu2bA7ZymnGtmexVVvtg6kmRJmNWeQAqHKLQYvJYQ5TPi2TXNyGzeSBQ1DQqMD6qHpKQYQo",
  "key17": "4vVzVxqHLnJk9tjbdWxXsHffpUR3yYpj79ogENbyTiGihyES39x8USmUWRCZHFC2XnocogWC3dUFpzNnjXv9NtZh",
  "key18": "5aKRv4eWmZf9ZgXYsvsAP518bqBWJQ8LBqgjRZVCJf1FxMbxhut6pcD1LU6KgvUeUqAbFkGqtMqBHUDXVseJuXdn",
  "key19": "33yueZi1xNnaCUkcnBhJinbbzXxwnbhhnHjZrcUk1EwsVPXF2rvzDVAjkrbCMP1DRh3EadR5Ez4y8L1Vu4zGyhCd",
  "key20": "48rWjaSHQAKEoLbMEGWWTHwuJVpHA7FM7S5w8ZxE8oV6r82PG6kuhk45SbwrHRNFT8w8u3NB9N8atLuEy9F3Kenm",
  "key21": "2nfxG4EhhKPBUwJ7it3RuxpVqL7jcFD8uSLHTwQ622XNR2jLorTK8T7K5T7p1GgADEN1bwG85ZMAYf12c1X6q2AL",
  "key22": "4AcyKznwh3oPesPUZhxed9q4YX6ja3vHQiKauDyM7ziX1PLQJe7WiR98kbyb8a3Rg99CoaFXq4KPuAXcjM2huiTJ",
  "key23": "2R5eC7hdrTLK2SfHM15HbfbHPTWQ7vpA48SrcMpN1rKT2AMCA2jiUgXkUk5tseaYZnZjkEyLAUPcA97ZnFgAuNzY",
  "key24": "5GBz4XNPtZ3ZLjTLAWNKTyW2gsxiukPbuPNugk9xKLnYXzNqi7TnwQtZ94sbxfzGhEYppsdJ3MeN3ABi4D9bA4iD",
  "key25": "48ErL38s26sLfzuFv3bE92Y79hz9qZfy8x8mWnDJT7YdUqVuikSx63yQA4jSSw2DAtvBPaUhFVXzLyfGajdA8zV5"
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
