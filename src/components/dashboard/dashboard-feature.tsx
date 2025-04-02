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
    "4zJWJpVAZKHJCAGU5ozZNHRjqEoXqMCbQs2kmYuyuTJXnTMDvvcxoaVGaKnXCZBUTBRF72oL1Rfe3PZdhBwYsLEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mtDJc1VztX2pXhYX7QzKnjRdtWBLmYcsCrCiFrYgXXL55yPy3CDfSQtPgSij8GiPQwgsWQBQuQtLXZcrqxyTRXg",
  "key1": "HrGAoXoapVtoJoBZfiQkcUqJY8r3ZLKFo9dpZQ3fApJWzXJTestdKAvvzJq1wqN6bMEE9YcPes8Y5WepBU95ccD",
  "key2": "3CZxVm3FVU9jigqqDgDKLnux1UfUsS6RF6fNQM1QnmzxB7n77Mo9dbR7K7YR2KxAT6inQvhjeZhjM2Yk6KGos9M9",
  "key3": "s27reuRc2hJi2K9RWowMFykYwZnAfLRgmhNscMpY6ZZW6C1zSeSZUZFfxaasgCRjeo8cvEPp2po8n6pw3VWeFui",
  "key4": "3KK7Hz92rqRehm8hpakBrgyMGySa3mPMB1AMJTq8mb2SEiV7ZaDHzi7HfdvaNaMB6hZh22vSSHc7xQPFJTnq2BLf",
  "key5": "5CbfFYcAsWJ5mrQP7gVBPxaRk1oWmFuFiQNoCNcMEVHXoXxK7MNeJf6Y927abT72oPqBtRKkCFhopN8ZfVuzHyJT",
  "key6": "2wQLpTD82FeoR4qSKDLhJ5kMaPRVfvSLB1ZVQodgj4LYTR8zxPzmzu7RP7DNjRAPuiq3ZZjWvFhtXD95sjtMeYy1",
  "key7": "8LzPq5bAD33NWsHVGeMx14c8GQ3jAuqyqwLhDKpkoEZBYuLujRsS15rCwtiHnzJVcqcA7sDgx9Q8Nu725QfK1eF",
  "key8": "5GfAfTorqHdSxH8bBVpkFJVp4FRTndsDEkatzh1X625V6baSNXwSbTt25xFGYFa1YJ45fWGmr3tbRB8rfvSZ2pD2",
  "key9": "QoeijdN8jT5V8daPfW73fn36GP453GF71wmK9uf3QzHMEzkXBKSowFLZvQ12U9Vt6CV3UDFZuudwaQyKXiWoP44",
  "key10": "51EZX2NeJuA6XrDBJCwL3wfNfuXmsTeK85UbXSYYpQaoyW3YouFnGMNiW4k6Zx2FBnaF7Eo6npnLg5wLDApmCdEb",
  "key11": "3uHRttrcb9ruXqFnSmgDKixZmcwrmFa4fiPf4tBCzW4x9YmPNkzKMUfrJAiAz6jFuqK9vrtxkqL1syZoB3Hzyarn",
  "key12": "pjbLtSmjzAoeRiwaiRwmg1AMvcYipw1GAeA4DSFVZqpqyBmaZCCfvQifgd41nJqDdG3ujenzCK1GxVyEEZUhKdV",
  "key13": "c3X3dKzbzMNrMickVsxp7HLnFCvGHHjcRJKfbMK2QmqMewRahQ3WQTvS6tE24ChjVb2AtNytSB1WnVkujdWjLZF",
  "key14": "3YAUAYothXrucaKPX5iMMUVVCCyEf7dft5hCdPx3MxBoEnSTCQ9wj44hsQLjCEAupdvWszh7CgZcCEtMRiVZzSd9",
  "key15": "4TgYUCeUfzBYPnA9JS254vZG2m6EyJXMSHGApQkN6HximokhiJLpGs27vufxAJtg4rrqsaPmezyD8JVMLxfgA1Sz",
  "key16": "39tDyXdaS1mYJZmusKCP7mZkNuTT8ENLSrdS2gqrYy5BjnwXFbYuAafAWUa3pDdGKrfBRbAvpy53BdTCittcWtgg",
  "key17": "65R4ST19vagGUY1cZ3MuD26sK6wLQsq7or3KfSdst21wYo1Y48Jg2SMSAPjh22sPwjXGbd6jkoCbYiGbY6zp6Mzu",
  "key18": "56sEs6dfxaaCV1yHri6ZSUwa1MLJ3PjokpVaPjwe1NiLd9MAsqMUaEQfP9hztRqD9em3MaAbj862Nv97bZimsxKh",
  "key19": "5CxpUGZmj2QQkW9CYhHnFp5AqybKaLPjDY3DR6Y8tvShBFQMMHEyzXQHbeDrGH6tqRm9UxdniNEFVA7rtokxrcSd",
  "key20": "4wavRQ8NXeBbawsxV9bWF4a2dgdi5bh6xNbhEXFc7P87UB5DouqivnMEcr2qgmWDwjKck43nc35XxkQKdxxBWFQV",
  "key21": "4mBrVtnj1yBC5FDuRQzekvRhixXZYNqJQ24YznGpQWKSxPRqueJNioVEBhJVBp3sZUygQgC5XiRyrQezHdsyoNFq",
  "key22": "65DCfFkEX7fJizt4VGcU5TzmiWzFKYCU8Ks5jQ8NASfstr3uG4FMFMYCY2wByMKhxo2sYzZzqr98uisy14MGEkdW",
  "key23": "5Dwg4Q8XGkiMckTcVNGRKUSoo55C67mLpSoGYJQZ8ygMxXhkoKsZBWeq5z2G34vMy85VBoB3tJZiywoN4CvRpZuA",
  "key24": "2w95XfgrK5bydwnMJDnX2rShPA8782iSe6DG4Z5q9XFvv1ghWysgxNC293VK4rF5aztVNz1RX7rRXYRJvPiTLB3P",
  "key25": "2n9DLmcpEFAygH1H83xbe4v1UfF35uWJQyWCy9GiRXCbsLmBqybSyFwg3jjwqGctpWBeeCvNbKvQpK3AcsdrnQ7B",
  "key26": "2K8ZRDZdD3jvy14DAD6FSBkspZtNnXVphwKDaDJ2CJYyXoP8YW3bqxatjPxWQd4DzHdwGUWua5sry3PMHaDp6dt",
  "key27": "4CW52MBFnRkM8s9T2MktMU38PhYiymygYbH6nRBKSKiKj6s8qbWWm3ZtznHWa4hvsJogR2YkyxQYwAdeKY9RC9x9",
  "key28": "2mRq5qvPQYdTqbsh82dr5tQg92tabvBHFA6ziSQLAanJZDknsBWTAjJsb7HwbWoSCb7UZgCzPQwp51xLsnEVy3qK",
  "key29": "3u9tKcwmUPsUE3bvDH3h4PMS9SFWLaWCmdCaq5rSmveoJFpsx6gE7r6E6zRAiMWTkMnxYJovNmhWnwv4Yo2k4kqd",
  "key30": "2LnMEXGXUfCgsvwqdbint2rpCETCy1tzgfqTmccDheVbZMvyT4vpVeYVNUM7nMiaHmNXLEUCh2KTGyb3R16buqrK",
  "key31": "27f6ALWUtM4zkxTTYr3gzWeaHzX1ZPvTqxtCuQh9hzC3gzDBRFguvi5BoE84iGz8QVJjv28h4FWo96SeEAwMKvqU",
  "key32": "4n2SVjSug5pqLTsJWLX7LdiqZSFz1ijWZRNPAw9zQBgnzNow94GQT46tEjap8ujYDrCrsm1x8iyXCFvhdrSmc4n3"
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
