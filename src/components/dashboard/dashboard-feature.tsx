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
    "rQ9qdrfmC33ihRLySDoez3kjC1YJfqG4PidkiJNEmDBAnwYEHGUDEWXX3SfNBixEfjA72mmdYU7YXHfmJmam7jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2t24moiteDFGDuDY24YLLXzQ4yoLgqNnWwZXWxPZ4G5oH9VPoqLzvxJPwkuwiVCEqHCwN5xueJ9usk8kZrYr31",
  "key1": "23YueaDs9gn17EbYzuGyWBtmcjz2H3nh6ixiqeoaHdfcfg93hsMJPJv88E2C2FPUz1Jsa1Pdz1ducnLvYBkRuvzS",
  "key2": "45QveMvhYjZ4asrNeUKdYcvh2UfoSWKh52EXATypUBmvndSXLp4utdxY86sdteLdHFLnzYGNMfPLsaCpqkXuy3xG",
  "key3": "4yidEfwf1nHGruebPErnERu2mrvgALpgigJGutufGovrQmjytoLtGGjkdgtUbWUCw6XzS6XkCoCef7hTzpGRMBiC",
  "key4": "C8yC7Y77cCGAUmqE6Jnc821eCWFgniSMNGiFG26SQNCeHrH3tj4wauEveAjEboF7cBy3eeajtEAuvoN3TNTDFDT",
  "key5": "pw6J4dAWGFDozNJtYv9YqtA46v7A4TUzDnpwdnTcncJMrBzDY738iXqgZVmfoFcUpURWQkjYu6Xe43AMyUx9s6D",
  "key6": "44eDYnVaf2ZRvz1PrJhorbYm8GZVLm2GBeBPHebiqehLiWzJh5P88JcT5YX1Zt3zbk1yQ5pRzp1TpoppYQZL8Vcm",
  "key7": "4QnBThwCsni5MwcTKWJW5yksG3WuQXP4k6oXKKVfVgCToWM5Wk2cKa3iD7czsFQ6hNMH22mh95LPD25uYXXEJKiK",
  "key8": "3WwizyPzsQUqnLdAHH8pVpiaFfh8JV3gGx8A6cPruy3KodJEqGNwuxeRtdeP8moDoJiM2WNkJhhnbY5LLukEH6KU",
  "key9": "4kDQSSCzApnhqx91Bzkzn9aDvjCpRvx9u87y1CS19t6RvyPTkyt8pHJ9nZPpNqoZhxMrVM7pFzBzFEkrxBLCLTuq",
  "key10": "5GWJdMfpqpwYWvQLcZ3C7UE7UwNPPnnR5rGeX2ucBkDof6BEv3gCdHv31qV2g8thTEWSP3t75KMyGxBZvDrRFzg9",
  "key11": "38jZZusvqvLi7GRiyLsXNKSRzxsiKosGwhcp5N5xVceMhXbkTuzacJXQinbGMF7thYVigQ41Jcypp8NDqXHXkUiL",
  "key12": "58UX8a992kZocqx23nMTA5uiHj5ezn3phC6aApdF1ntPANy2AQTPEDdXvqDLKE86XAW2Ndjo2rT46NHMojJkvDTC",
  "key13": "5UgAUSREsMgu5woTJhdx64ZeSpZeuAriEAcvnj1hUiWLzCv7YW4843wSXCDtNVro51hyDwSZXJBoFuP2F4gLefyu",
  "key14": "4eaBcvG2bMuGL3upj5YRr3DgywZemHc7dX5WxRKM7qLJ8EcfJFZnnGcDtBJuEM3SBCfNZJZJ7PiVcYk4TFhJ3p7c",
  "key15": "4pPbW7ZzJ3SmJnX138s4T5Q3vmyNYf9KjCfa4szK2PMNB149DXAFtxq1BbtVDZ9SRK5L7XQXohjjtum6pCWtPrZt",
  "key16": "5s51xk5yt1p15G97DvtfS3ea7PeJ4SZ629HDAPLQJVSBFavWLYDdkGrnz4jJ1DD7DGraWUGVDvjcGFWRhZFa46iy",
  "key17": "3WCnmwHhswPN5u7zExJYYNgrqH6FsYZkJ7LprB4kibeJn8hhF69vKifb2K1kxrLGdzLkpfjN8S5z8wNG7yC5tsGT",
  "key18": "2iUThoDtsT5ihm9yY1c6PVsy5gyJdschVEuoVwZLmT86Dv7dEpFxLHZfKtmiSNDoVNYyTqwfLosNqUbt8rMwpSsu",
  "key19": "SZzRvSGLPvpuFtvbgVgrTB6YHpkQyaCWq8j3ccVpVLo8LkcEHbV2bLTY1q4vZ9GMWH9rLRb2nMhCuzk7VBDSQYX",
  "key20": "NMu9co8DJUXaFK5kVezjbTWnmAbkDbkNDdYWeh6zM97Uhyw7c3ZNRZXtHc2ERGrMVVdJqBfuhiZxT7Gv2xQBYYD",
  "key21": "2DnRoQZ1dzeCK5WhctifgzDR6SmczKrqKJqKVSAYm9UZmuboSDRXKTULQYMdZ2F1Wg2sVqp5x88Uqh9qEuk8uNw1",
  "key22": "61DV6nHjGn8mm15Hg7qL9jBbf1GhTxVmFiWZzfL4jEhZ5hCvL3AMcaVauu9gPABmJvDbqiVdJU3CspvEMj8TDsv",
  "key23": "4LzHuayLHGMbCpQ53J9n9MpCwSfr2SZjo9JuNMSxPWLK5uCDm24KL2vbKbnhEgYMVZKoZCrQS8U1jbDTXmPCu882",
  "key24": "3EsLtKp3w7WMYjw523g25dTzN9X6KrgprKDMrQtX6B3gdFv4royJaSgDDjphsgFTEdrGrg9W1w28sZsdaHDrb1fZ"
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
