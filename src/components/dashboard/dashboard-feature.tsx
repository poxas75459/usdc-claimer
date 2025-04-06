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
    "3Sy1AuM8LSWoTVJPRWwBvXMpWqSFKjvqqf2YkZc4xrbXMA1bWCttwNgnXa4Dkv8nZ6J5Y3xuwrNuiT7wadqeLmE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ambQ2omaTDdLGnnXqJ7ccf7Q2juRTKJG9di4KThywWpchk7YReBKVskBm3jnnKMzz4NgWrFHVaDYnbgsRQoQuNY",
  "key1": "66w8Es8LwscrKzuxyZNey8gQ2b8kczko2tZ7J9pVb64cYZfZjDEGgXSbVwV5toxWr9cbUrujHhW4mnBWusj1mSN4",
  "key2": "qNSB3CFTohEXBg1BwLx2zbvryzoN9bCK96RkAv5yKPNLSfJo8CMYRe8djWX54Af8gCmX1uk6ouguXzSAn1g4KT7",
  "key3": "8KNTRgJCCbLZSjaZ6q2ZvvUhG1pT5jayWpRSJ4pR4ooAjuXoTHdJ7VBx97d9Ta6CFnN7k1JK2s9u6xqqHCHG7N4",
  "key4": "5cdTV9mQUvCTDmET25bYMKEEa9aj9vkA5QBG36L7dS9V1CqWUiaSS8TJgfthHyRzAxwQjYQXVeUpVFg48c4qi6a3",
  "key5": "2DGJEGcMJR5yZKtef3EnhqMFVWmQAcBunKdcG5nNp6HqzTBM9f7aFz8QBsESXUarGq5cUm58D81ZXT1MJwpoAuwM",
  "key6": "66pVjyJffK25JN7BCSi3rhxSyNNoaeRNBsnJEyQtRtQXYM5E8Y5BKcASWt63BACLF1J817x6b4HodmB7qH7ddpop",
  "key7": "4kJ3K3EGKLRdetfxAa7UBbFA66zstPgzq6dFAP2hXQWsViXujy6i9BfJvqhijv3BgSaJXZA5bjjC6GYNNPR1pDZv",
  "key8": "5apAaemcH1h1tzprEJvXQNuwAC1HckyezcsUvYGv6xZdsfjZmJmwoqyYe99UVhxg4V1iuujJyLGdXgVdVoRa9eWx",
  "key9": "5TSb2eRFTFDWGh6QGvWrsMLv2fUSvmf6UZrKBA82uDFUQb1XkF2KnD3C7JnLb9ryZXoLs5t8yDHH8BjawAKvhXQv",
  "key10": "4cC5RLDX2Bnu5cPJab6vvzhkTvSpJ6avWJVwnoBVJGahxGD9ZrYzv9cuZatE8fTww6i8zshKL2dVqwjhFzNeucgK",
  "key11": "5LibgBYPck5LXY9JNEbGnY4rvdzGxJaQamApTRbWvgU6CnyRu3fD2K8WA8XHGavCUzUkwoFspw1ftTp5XK3c7qZQ",
  "key12": "3oQSstp2my6hJSPDJTUU2XiUHTSMUhK3r7uW7HSTQ2aVjBFJnEN6qMtPDfTtBeqJ6FKZZHQ4UFgfLAebWWQ5Dhq4",
  "key13": "575mzDsyvLRMo5qoprUv6G8svzjT4K7uNL8EdsMNTz8MYn9EiMPwuDiwAZPAwLmWResTKJxv6aT8YsZ1HM42JwJR",
  "key14": "5v4Aj2vnStndcm8hMr8rRyWv5HR16mQPpp3LTYVN8tyiDzVNfDdNnpL4HRdjiDGMVY6doKcyd33GLaNHgRaWTcns",
  "key15": "232mCvWBJvMj9nET56TaPrzipy3G9WPGrQD9G41AFMjGdYHqUX3zPfqDQ26exJq8ffwX3UZ6MMxNB5Dt4Na69KoP",
  "key16": "536HLGmh9ocb3f964WPB3DziXjv51fW8srdnPJu9t5UR1eFWvsiKHac2mZu8ucYevayjtR6DskaVm7cEqqGyjfaD",
  "key17": "5W2qJDtbpuBLUznovsX8T24uQAtAzvBhMd2yX8DE2yxawCiodvUvBqwVFAmZ9dA66u2hKYyge7VPHRxK8mmVrRTx",
  "key18": "xQdFVvrhGkJXq9GFFsCTrsmiZhTU2ceVz6Vk91n2tbUnbECj2MmQgMcNGw2Uu1UBSGvuFaFvobsZsYJJEqswMkM",
  "key19": "xLUvFJoboBGVa5jj4Z8ztDh3nCrj9C6EikLEJrTRVdVXbNCmzqvKjKUrokBYifYNyE2ajmzShtu5VHK6Kw8mzzF",
  "key20": "TudBfLYULs2VvNB2M8wX4TpoE8Wtz3kBQo4K7x9dqcwWuEarueKaYAE6UwqhGzngCfriTDZPAQvhpBk5bQUrCmu",
  "key21": "21rkQfffzmteCxRgZpoQsH2ysDZ3h3CmiGnKCdV34JoBcNkj7iatNZBsdrWAHbwcjMM1NzR496F9VvWE7oHDf5Yj",
  "key22": "53xKoZJtoxCzkozGsk1Va4LHSaKNZdid7sWL25zuexn9LgDE2UPhU9su2MYVcgE4SyfadV8TVNNgvFKYrnd2bQWJ",
  "key23": "uuvuNVEYx3KS22YHoD533CE5k1jESmGtHpR3uG2yR7bXzx4JdAnYposAizFYQLv2VJuXxjNFNEYCKQpu77AbmL4",
  "key24": "3mEZQXaNQJiMazvGY2shFnExs1Ch4oVtqLv7qxm1QTcKJjVgpLiYZpknvQwLqQ6owCQpxHcw4efH5d7Rxk6FjQge",
  "key25": "KeroqKDKyr4Vg7Qx3PCpoRSbbQyzUFJ3LFXQbenYrUzU4L3NgT5ewM7UhSkmnpCAAjN2qhz1fswKx55yag6XDPC",
  "key26": "3d311yBxBLSj4PbubMNsEnn7pxMak1qaccsA4hXXmbdSawouCLWk5k2zEoEkJZeZ9hQRKQZXX6UCaWYQRJNa7BjR",
  "key27": "5hZAveBYi8RJYHq1qy1CbAGcTE3pnQcMAsDVrfsov4EgsjhTYpJKHLxwdmsRA4TykJeztj8tuP1seZGKFJBTspn",
  "key28": "37wobNKJM5bg62ghFV3fP3LWQFp4su4QZpFBtuDH8UDTitdf3mU7n2CZZmPYyGLwPSrbDkANrrbQYpNzBDYYw8Ca",
  "key29": "4C5kgAqx4h5vg74mxpXGJH8um6C4tJgPeEP6wN3sffPbCMnX469RZeprw4b8JivHu79MXL2QfJYdStB4iQndRFqz",
  "key30": "8gS4f5Mo6HmAbs6R14RW7uJCjLeoT1DnZfbYA5AGYhFNaKXi9ZhC3PAzh1pEezukuz6MdgwWowBkbwgT6TucmzW"
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
