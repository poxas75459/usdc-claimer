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
    "5fc4tmuYdAqBAqWNWKzHizJUo7nNsMpbUqnpVD5rQENFDNWv1JPzBvBWkVDorno4KgCieV9Tv7DmJL8KMxrF1hbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wv4Sp76uhS7QcZowWr8De4QEJLNyka26HaJmVe3h1BCH4qt6iuVM6AXfZzY7LihPxLsiTMg5YZYjYTyadnJeKSM",
  "key1": "gc9kDuMW8b5CD1kWe9YfDsHNmHjdPMUK7ZS4D76Vra91xtNgS3Jy4AMaf4taFk6uASV88Eapudu7cP9VWQhPdVp",
  "key2": "5cU4C2kXh3ukvDSseu2d7t6aBRdCsnLXaMzUpNPSeUMqK2S4hJuzLabouTdsGKcMXnz9GysTCDULCoLgEyRQiG3X",
  "key3": "24yCGKbMXsao7i2Svokc2fgKSGKK3PHFi3UApu1Z7oSLEPmCQJTp5CbPXyFuHMd6gZJpqj3YHJFpahEVHALRfHFW",
  "key4": "5m9s9WnzQuERrKehJBwcBk7GBt3NAWcB4q73o6A7iW7cxBBCCv4ZqLLC2p2cdeQH339g61dsF99ikpXiyon7neLZ",
  "key5": "5d4KHxjtxZK2ZJWs8TbUsdaUsn9tcTjZUT4HyqjAte9ubdb1AMPaGNURTk7gfxw49AYwB9DkpsECmBeFygrEV9m",
  "key6": "2Te4nYaiwMiAmSDVJan8icu5kRTUgcMDRUk5NULmhbg6RDfUs3cemLWMmHqsBqXsTpmWptNyyddQYV7iLWNHDwJL",
  "key7": "2wpkCyfcRhhjAaWVNHh4A3GjsXoZ3BzJNsKELWHExbHc4Le87eb2eZXdHcE3qY7UCdt5VrgYKjBzR2FotDbPw2Df",
  "key8": "4dE7UqKKP93xGUXqHfwWhrgMSAg2Y2wgAffW5o3tVRFVCVKzse5BJb5NesBYUv3bVriAnAJ1GTxURdenmFqubif3",
  "key9": "2crhkQ1ve4qJQ8X5qAxirejsygz81qvE8KhsrnpgcXN2LKTfKjdFmRP4JaSa4mqRvtsZqpBy9HoWTzXE7WbubAjY",
  "key10": "3c8vS3qMHVApsKrJ3LiiuoGLBtj7QifcXMfyfz2PnhuBJdK4SN7HiByS4g1LHBSi8eYGEyMR8jj8QGLQ6BfptQyh",
  "key11": "4dH4KgjHuvnVRXmZmdvyc1Ga9t7GqqsD3fAXENvmYWDLxNcFu8NXzQiZfkzt2PFW8bWjSWEuHAtNwuHLYXnn3BxY",
  "key12": "34akM9KwdKd1AVY6r3nSsmBb3KZRyqf2fDWYUh4YX4wHa7tAPhVuQby3Kp6oxWQwnTgyCaSXKpD9MLBnwCPFAJS5",
  "key13": "4xCdE3FatDq3UcbF8Pfb6XsRBxsyawJ9vTgYdErKB7xT31PhMJmFmm3bejMh5vMJs1gT8J2duzLH29LyC239yjda",
  "key14": "4VzocofGgKsYrqXxaCz7xjgghMVJddGhdiZ8qVTzqxQGN9WhXr2LvirzhgSDbfET75pMvBedzNg8CWecC5doaGvz",
  "key15": "5EPRg6GzcXyjsAMtg5LjgE7obXijR4UYPhcZGVHGsD7Sw73fvHbNZDX3e4qM6mLdyFjYaMetxoJceqG2Q43NHdkc",
  "key16": "4F9QQdNJ33qKgLTZoRWXdcHTdtzi9LSLTBKj2aXjvYdahhgnHkhAfz8ikx83qqs4s3PgQF3yKsAeKJAzVfjkpwh7",
  "key17": "2D8VCaWhPKRWABiPiaqfiZHsDwXmm6UXTi1ipJibiT6SHzXPTZvaSfhb5L2cEvQJfvn1p5NbBzTnkTVMK4SvPB1h",
  "key18": "3mtoDCZPsyVU4hjRmLNN5rq7wZ1YV9Gq1KQyhd55KNfnYLamnTPnDoqEG3eAhGdZ5QeMNo79MEN58DFiKTKRKenp",
  "key19": "4MSRW8MwQeRSx7wBB4WmTeb9fJ1sX31CZjPhGMYn5hQaWghGVceW84a5w1Y5Qj8ctPG5ynVQD12fCDA2XAiztjg7",
  "key20": "4ot4HPCJTeib8PuidEmG7sdi3HM6xb6u2sv9imSU6dP4YTEXvwpvfMbboATVipk6tUPf8BQkouEpntw4wY7AaSNd",
  "key21": "APmqGBguPyeLnRCqJhbfc231dX9W866eYYseEuW8aqTdHEHmM1zA7x7gzD6fF6YJjpZszrKLSQPLanAcV7TKRYy",
  "key22": "5rnYNrUqqdXPT1iXdLtuNztMNXDs81rpWZ7Bf36NPVFzpfBdCaZrmrxsvSJyLYxwyGAe1NRcniUB6fhsxCBhSyZW",
  "key23": "3BTU224B2UTZ3vuSQTguXJ3RE5SGuusSwdsLqTTLb62CL1tJrLUhtGGMirFi5ByRZV2dYQPrMrWsQp3wcaDCd6W2",
  "key24": "2XU54YWM5JLsEP6VTHpt1ong1F3QSsDmu3Lz5nHC5dbDiD5zgn5rsfjgw6wXHYrtyXqFUvZzcDo4jRTLdrgwga1Q",
  "key25": "4ERbin6wiqXBze9d2Ey3fG9w69ovGrPD37f6GS9iMEW5oLuWSNAen7cNcLaAdspwkTTXWVa5RpNvqNbHujSCXgfh"
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
