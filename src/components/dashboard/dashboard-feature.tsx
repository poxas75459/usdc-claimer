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
    "2Jo3HLaF8KbyHcEAFUZVuvcemVaTGQ8L19tcDHX1REsRijBQXtCF9jxcLW7ehH8xLJXcF1bkje23DMUKrxpQNhtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hz9jM2bjbuHLzQMy5BJ9XKe4jthYodi8YXEKy51bWEJ3PJUQes6DXQM6sqJVybHii7gFtEpWJeWgPWm48C3YpLv",
  "key1": "3cXpF9h1rjerB5cZQLHJXDR1oJ2hXEdjZmhUGpB52myAjwEw8CJmPhdtZhpUymn6TpVjwfAY36nTdgxEEh75Gdoh",
  "key2": "3GecrrbQW45MtdrryFmQg2UsUdQke7MpjEfGyBndvXZgZz2S7QoksKQhDnANcPJBS9bfhPBAX1g7xVkNCkHM6k4W",
  "key3": "3C8LaEgFBdfCx7R9AnxLzMdimoTRVVwC5iYSeZHhmxVvxqyqHt5P5bLcqhyqp97vYM961at5fXvXXHBpGpLrfSWQ",
  "key4": "2asdQy9WJUXMm7MkLJvs83ofS6rcFjVyMHVAFaGx38x5QT284nphSRchgmMcTzctCT2GF1PvvuZPRWBUfywBtVqH",
  "key5": "2ntYSMfKV16f5FkDiePGxYcNt9vxbGbu9RJ2xVLPjENbVXFtXcrWCnnN92S2iXC8MbkzxoHDFACswYHdoVWgs29Q",
  "key6": "4AabkRQVAyTRD3vZtSfbuZXDB52UWRm3t6NouLsMVN3UTj23Uzc3nTNgS8YVy5Uf9SDb3HkLnaSFbP6rC9W3mUaG",
  "key7": "2XfWHgUaUsgSdf9Zu55PGJQeLS3JxDSEeu74gJp8m8y4updFBmMhjZop4si4CCwWjqXdTaz976RpBAHcM8KmL6vZ",
  "key8": "4GWN1RBXT9syFu17wqiScUK5MnzP9WaCcV2N2R4kE3TGa8RXwdjMYKyigfetFAhfC2MtmR1irhWiLixBUHotqi6c",
  "key9": "3oGxEqe8RLsYuiXgo8LwKww667HEm9bzgTrrfXDNo5wZw592smKoxYNN48QdYk8mHRWsthaHF6Kje3TgDb3gGSfv",
  "key10": "5B17SSAnKSuHu3phqrKAfyQBRd2qiY1qsu5pkNeGSWbsUSLtXSm4zLHWdcQC9kmNacULcgfZpRJfdWEkktgN3sPk",
  "key11": "2vykLnfQdCZQc2CNzaipDg1TzpFVWJz8PAwuasM2RfF7UbkeokVWbWdpj7rMRxksBD2ddK6U5iLd4bCN85xeqTjd",
  "key12": "58Ka4T2vcSeSdAeotNT8fpq3A4u2EmM5jpentoZxyjU3eTUgJ4JzjDwvc3nZuuJKtTQ8N7Q4U6TwZMmwiFU3kiak",
  "key13": "5as9yzCvffbooiosN5KjdR4VSs12amBFd6sctrFpTbKsKKosmMntLG6tZQfx9sugoivqt4NthmNTAQ4Cbac521dn",
  "key14": "4JC7Ee4znf23rU9Gr3Vh11fKFGd2zofrPPStL38sFLzpKZZLo3BhxMyUdVeyxjaR2EuCU3DqjMjzSLBT18Jisrvw",
  "key15": "5EGFCdficvAA8GJov5QiDcFy5XPXFMGZ32NmUYYKVCFsBvi2KtmarSEtji85zHxX9sxmM9MWEwjefRFZUu77E9t4",
  "key16": "3FqS5zUW8Urv19TrJnLTqiUM7ePQBScZyy9YYE1suJvQkkukaPmHhKPCAWzmhzmH2e9T6QLkCYo2gv79MTYeFKX3",
  "key17": "2MmpM4vXbvaCto938JENrmeVm51ii1WCi7h1B9vze8wqpR51DViiRTXrAdF8GcWcwL1bwy2GLws4H1yaSgGVp8wc",
  "key18": "PqeM4sWhUrEevDafSa3rDPs1UBRruPhgghQojwnAgZmsQNzuiVXXZji9X4bbBtaMM6dwsDsJUJSUNZTorBTp7MQ",
  "key19": "5WEVt3JRHy5XD9EetqFbbh7vJhimicmacWvdToGNjwVnM8Fw3xn5iJ8cigECmCZMkzuvoU8cEfkhpKCXwsNARnWs",
  "key20": "9CxtSyzkrNYwa1oN33UvUxtkYuV5GkG8V9UAQ1kaxvhVmcPpDFJqRnkFVEew4k41E7UAiCaTk4zEQAFs89UCjMx",
  "key21": "2mC9VAFw2NF1eYEtQ6efDTvDNSQ3hx38HktDf2gbWcS8dTxrkCFzkJahB5W9npFy8jbnEbRBgb9TgRup6RZgkAUW",
  "key22": "5x7X5DhSi2fwh7LMkM8QJnp7xVepGbuLJncVA6erWo1v9srgEdCnsPsWkkRUUfV82CSYoXzkH8s2yUCpdSXNQFzn",
  "key23": "2jiG3Uwv477pNB9acDB6A2ynVem1AdFP9q9GA9Sx2hiCi9SotNuBAPArAuc7bUchN1Kx916Nkjte4XaSoQxbfKkY",
  "key24": "25m1cNYmXAM9uHxSWvqsKwch7uJ8JRiMwiLibTcmZoPZqgPUuXgzCa2Jgnhreje66vvZ81W2YDkKrcNUXgdA9Mvw",
  "key25": "4pFudBPAo6ULP5LZzv1boxGhEeG7oBAC9qBWtbM2av4CJddysaTqwDLgTNLHVX67mdi2GYyzjtHJPWPFNjtDzqBM",
  "key26": "k1pvAZEepmNdVxSrwW5RXjaUZTqUoyrquh22Pcm5YhymebbsypGeiyok81F4HL2G9TM9GQWLiBcpPaZ85fD8Tyk",
  "key27": "3pRptxFfpBh2DAHao6RRggtUxNjntZYuAs5EYMvHpsSQAH1SXzGQ3EJLg5Jk7SAteezi97zM8CjAoKRUTTCUbMQL",
  "key28": "3pBUbMpdsoFKvCLGaDQYWWsfyN8Vn3V6VTmx4wQHF62BFodnhAxwGWQXxR927QwiWniMVrztd3YALw4614y984Y2"
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
