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
    "7vQoSCG1LeCSvMW9LntuHbWyJoDUrf8GDPrw9s98TnieUAcyoe5zQnpiFKtsKftHk56182FFt1NomW6aaw6Gg2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jA4GVEuh2ARfSF3EmLThKd7voy6im5iVhWPkBP9nKbfDto2nAnSyPGQjc1KAebEzcVcCLqb7GBZf1JksqfVqqMS",
  "key1": "2XsNDfNBqhCAtrQV9pqbZrzJTpz6b76Bz1K8ThZ5GHP11WKVTBcXHxneeXwYfNZhMY3xnxMDEj797XXFmMrENs3M",
  "key2": "4RKn5B5AuBAj1d4b5TZuucAVUFj1fcBW1jc1mpbmWJqkmVC7xq8ys6K9q6Hwh2EJCtswC9cEmEoWr9ic1feurEgV",
  "key3": "5Fv3HJUnRxxWiYFmLJMBZJeVQwXgbBH9kQiiRr51YTPLwnhCic4xJbgGx8mChW6VqseoxPY1WnqqNWh8gzYHKLsT",
  "key4": "2Xi9qCFXLx72L668ZWE9k7AV46Hvx2UBjZ6wnyMK8fME2kSCoeXDcBsnUxdLqpN6GA3RndGWWCsae8nvw8PTrro9",
  "key5": "2ebzxED3uRBt2kFk5tCcJQ2eeEEdMFR4YtQjfTcVevmejNJA9feXxKWowvBDgQgCdeqZmW4ZQbxt3p5qnJ6x1Jwz",
  "key6": "44TdFc2c3y38FU5znBm8gxLzPiczJ8BYrpzmGeHZJGWsrQadZ8NpVZLTXVTU7psXGbwEnt5Cpjo4ai63ar2PUEFU",
  "key7": "2W2Xz3FFjkj4YsXjKSLkAYxoX26WWmBs7ensCagua12E8KJbGkbuDvZJQmAv195ZhE5X8qrVhVbvxeYJHJoKPedn",
  "key8": "2FRC9a4rLiWCjwdoNzPQQcB83sRasR7Q3w9qizXBNoafr4K29Qoivh29bmmB9NeqGNK9mqcH7XMvUnMBLcuCiDWW",
  "key9": "4L5D6UmfKkoBYP3MPaaRC48qFSrwBEe8tSvdrdrufSgJZZP23ChGqHJCqVvk1mGRoYJwWcFnYmHJcxGAonZ3PfHz",
  "key10": "4uvj7bnVVZEgbXpJFYedDZnnBevTRFXZFXw5pDJ1DAnttyrvLgukc3iqus4jsVsf717BUSynp285TyLMJy9nrzM3",
  "key11": "4LQmPG1mBHUMttvZbwyScajBzLMh5RgRFHPW57Vg1WdCkaZ9iCSZt9Buc4o2pce6gAsBSyxwNCpkv5iXWxakUbys",
  "key12": "gRrP1zMD9UtUEUzdQ6P77hEKYAswFnbmqcrc7kiKzpqjnCENoDhad3Bu1tmqQjyzKbL9N63z2WqjW1rLaBmG2oq",
  "key13": "4j3UvNWV1aYJxRitXs7dygrPH4MJw9cTJ6CqfjKa5Y8G1q5M2bn93oHKNM3hzzRkwidviMR6gcHFHHMDXmTaKJbo",
  "key14": "22tiJvkhQqRMzoqFRw9vVYsrqbfUiP5MGGvpoUCLGxZzoSrNEBX9ncJ2eRSeL4tQa8HYha6pxxpTcviXgXgJnp25",
  "key15": "5z77gJKEcrCvpFhtiS5acRHDEkU3KzGDWfmw9HZNB9QihR13JDxkqkYjdGVs7SnMofydYQdVetkTbtCZx4bJBvyp",
  "key16": "3ezddCGFLRs3P21HzbU4TxcX297e7KgdU3SLERE6x8PaaWhKmCx5CotnbuxGSGx6QahHBWVc6hrgfeZhTMo4tBsw",
  "key17": "2snitMeahcCYA9ELGUs3iiUdgJ2PH34VCjMAjVUycFnKJ8kS38SZgNzQn5p1gtz6MVkpMEzmp7sWZff9BwF2VSGj",
  "key18": "2RB5956pEZNMHFJKSAVDss83dgC49Dci7r8GQzazKfnTAkCVAddvVZzTP9fDvbUQANi4je8RZGmptRdN4jnWhxAn",
  "key19": "2Y7cnkT8M21hVuMnWHf4wRbvyf3QsQ8udM5wzfhxsdyCGQBJMmYJktyoU1wPkgiU7LwcsFWohxp3TJDzxMpy3kot",
  "key20": "3PiKKKiJYRvA8kg8mDECku7LnzcCCS4QQy4w3swBuyF1n59Pw31Mo3nPqPrrftChdeb3qX6xYW3gDZtQXhYx8joJ",
  "key21": "3SoyD9NANXSroRpxjef5pkLv3tXs2bKRF9zNNx7UmALxogpu8L4v1VxHek6AhXfbB8E9BV4sncVMGRHcEx5gmDbc",
  "key22": "2iar4gpx87cBzhwJ7inykw73FtTCvzKDYKxSoTih73AH1zaND6ryfFMMmfKyANRmkiU8Fifb4NQ8mEbo3U46srKX",
  "key23": "5Z9khtUaT8SVe3Z5WSCW1d1yJnyXDaiR1Wscj1xoBJisMrrqfUs39nYYiKjXxqK7mf6ydJVZDun1Bcz3dosCRFS9",
  "key24": "32TtxmEDBAnb1MR7gWrviqqumALmeBS2FDcigci2w5EBKLSsjPvEUrucYLVJtkm63S4XprNLd4m9967y7dAidyPe",
  "key25": "3WEGHpqEgzrQjXvTpZfbAP15K9hmGWhhRpfoeEXDofxir59vX7ZAHa3299acqydxsQZYemLmeCk7LE2pL9gizQz4"
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
