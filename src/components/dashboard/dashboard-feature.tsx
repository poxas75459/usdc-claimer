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
    "5R55rEexVbEbMCv2BxFmHwQHJPSnALZkdYgAXMKFnipKCiztAaf8JnTErAKshFS6vCu97b6UCbQLixypFUHUXxpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBZ51x3fB32exDC4sgnVUi7xhWT4ssmSEUr9fYdVspoL5vDzyw8NHcvKqeSx3DuWLZL1pwQwzaQ138x1AJdxK6j",
  "key1": "4qiC1cjd1TuvTrAkpauoABQepBy26JT1Pan9Vc4B97fTYMFdpetVabEseJ5nAUwBsjEktyjQA3XXC2Ap85H3UZpK",
  "key2": "xdX4znUPzJG95r3C4rJDdVpFi2NJQNmNNdrCjbFdYNV1V3C1QXiayh2AAYSi6XJB4BBjNM4dmGBub7XLgXfPYty",
  "key3": "vnRkHUfnMwTLdHUQrDf8YEYB4BMfFQQo9FLjwywzfgTGf97oTb7MC3o2YjUGGcyw4kgGEqncZPaKWCLKNq9BLZ5",
  "key4": "wNpmjRTRkeG4FaECHL3tXN2Rj4ZNpJdScPdXRgMUziYLdS5tZP4iKPwKvpddi8ox2RGst8vQd1ycx4zF9nuFH9J",
  "key5": "5g19SWnxiZoFwGGxryh9VctWNKB8X2DVU387YgmgHptzvPeJ6JHMt34LkyvaD6xaWCGPu1bkahvRcUU1ni22fsJ5",
  "key6": "4GP3HsXoKT9PhSGnC68dvp8zZoJiMsmS499Dz9EVRP8tFsTctmpPy5W9FpHkYsD5tDb7pgPEwMUL6hu6T5RzhAEb",
  "key7": "24oafvVtohtTLrjpT4QVTsxvoxqt61p3WYmWJ5hp1WLMFVWpYECTfSWNRrak2MrtVxGQ821csJyh1JWZE8dyeC97",
  "key8": "4FuugaocymUkCtG3fnvVJ8MXj9Fi7Ejsac8w8o3tQyJiJgdMbcq14i6M6eX7RFrp6Pbh5E8Nyy6VuAfa2aDgZxqq",
  "key9": "4iPXfpjKDerjfigMzQhjkwzMD6zhKcoQUBRhsTqJqhjE6vVCF1gVa1ydCBVLhRBtEprmtTqAxhnmNga8MZjrMurn",
  "key10": "64gBpDzxVKckqfJsh5Gk6Xz2Fx3gSe2JXGovZXt2fZrhbmyYzc3s4CfsVYzaQ16U2ojKUFMkL3UaJMRohh7GTzcv",
  "key11": "4Dfk2FdLpWaKGocaToSxKPBEBGLGkjCkSAUGJXMyqKUjwLhTBuFmW9c8WbL7F6YN1fq6WkKWFJMjAFNZFdENnupM",
  "key12": "3jGa7EmzYXpL9gyr9d85uxHJHtug7wLmA8SxCpm1G4SzUd6Tj8Hhd1QQfX5LtiZ9WuQ6vuRJFxCXXbsLMQx7VzyZ",
  "key13": "FMc9xPZsP84kenN2rETbM3eM5bwuhaqyjvQNTuam1r3BYMW8iiFvgB6dJKf14RvRJdu7oVjfYJrnH9p6nYwtCFe",
  "key14": "52NWoiFvky5EDdLf3BcJE7mRbo6AtMx5fWCvrsCzUM32mT15sndfuuJpuXTmAoH5RKjigFejW5PP3gcC8P4zuDLm",
  "key15": "4JHUVDrzkbXG4AgtpA8qNHqp23fzDRwLetNSKDVcrqRSj7odTMgcLfybXJWcZ3uqEmjQs3CJv91cb4HXd2ogywwd",
  "key16": "5EFBk5j4PV1XU4cTrVkkWwRkV1RXJLUmcsEoHPbh6RohgdVeiZQdQ6BxQLn7rL1ZKHcpJfETguStLnBTdt2y52HM",
  "key17": "2ni7eis5GavwEiR3anq9UYadTtPScB4fyrdop5Z2S9zPd7S8MCdDkfHJ7SDajwXuf3NzGMuS9FiKod7N91eiWceN",
  "key18": "JWVZN5coXUfS2B3Y854oZjsVX91iwDHRoyU6cgkg1feUjY7Sb9ERpH2f4okciQK1PMRmsb9kEbiaxD92tw7yDfy",
  "key19": "3BN2yDeSTykibTUTDXYhFjvTVPhUdmH95nR1kxnBJBcAAZE5ggkTXpzPBqKgGPmMQ6jndj7rjMNb3XKhYjDxPN7B",
  "key20": "53jFFW6inaLGqxMCDozQ7bdSGQkTuJm3m4Lfr3q6RaxmMZqMA7Fx5VkR54ckaREXCk4Tqsqtus2A5MksJ4iJs65L",
  "key21": "5gEsEMb9Fxn2XQBBZP1Shtdo5DakFvoQvPHM1EQR4faRoq9ppeCdHofDJT7Vpz7qxAJhoqkyZfgEabKE78hYNpJR",
  "key22": "5KcSpK9WT4wmmovH67gUEtmMmVZBUGdWYfSL8trfoziKeM2q56a7AwkPmBSZtMXrmvk8f3NQVS2viCwRHLxEMfdx",
  "key23": "yp3c9xy2L6iBEnkTGdw455ZNi2KS3KCmuexPmszDESvcwDiuncKvK5UL3obTCyXLW1EavRVNyCF7nmCFjwWMD32",
  "key24": "31K2vk5XkuYSZoXo6RkhRErjhBTeuLWwCBQer7DMPDWCJLbXJ79KUTxVK9xHuUcwx5Guiudbt4aPZtY6AoNRAdZR",
  "key25": "4qmhq7DhYWL6LrnTb9pWAh2NMTWyjPPxiTzxUopQSP9Vgr5djXzwKqDgzgWGmjfqGnSVE4XV7EtBhuKfGp1rx2tt",
  "key26": "4Fmwpz2CVwFQx1fZpEdy6Wu6mRDtkhUJHd7UvH932r4o7fbwGkMq9CUsfEMNGMyVsdx1vThyZ3yGSb5pgDKCaDoQ",
  "key27": "54Z5UeHRLvq97inmH8LUXeiYSR2YdavtNxBeP8KB9Hg4qt2xHaNHTncYHMdPen8B7tJ9KARE9QXvmkRDaFLLZyzz"
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
