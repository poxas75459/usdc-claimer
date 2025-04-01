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
    "DBa8VjZdYyefxW2jWMGP8vF438PR9mxW2Jpsmn1jN5M7ViCpdqkZuVLD6tiG2hcHH7pZXPM66UDca7KtLputtD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdhCyJLFBqm3pzKWyhidFfii4ocRMwkk1beo6U6Lm77PAQX6n4JSqUD19QayzU2YMW4c92jVJj3bVPSNa2KyjfR",
  "key1": "2YNsiquTpjt2Xyzv8DKkq2oaWam7xy192auJFai6fLyF3xn4erqdUSUi65EeaeEigSueCnWFYyPLqZvGiJhsspP8",
  "key2": "5PuafoqS5TE2AwzK2kpegHH6GzGVFAWmoMEWo54D13oQM46Tdk44R7ft4xHYMse77cSkqciwdPBmUyEXHaK35sHU",
  "key3": "5z6FmXynCRjj3oHiBmekLUBGqzTW1mfMjfmdPmyfZMYVqzYJhirgfavi8etVKR6ht55R76mdUYo69giJiveQC99r",
  "key4": "dUHWXnXQWzBfUDS7ee8iA3BTrhEWKbUVESxg8ffjgx5RroWWov56PJE9uf8sij9a4zPsSuZLdshReCNNyJcbFFB",
  "key5": "582W3FTtGzci4EpLtCtZQ9gQHqecHfGxiAbrt1YcmXLRWXNA4LFoTwt6AMKbmGUvP3PiCcRH17THiqYW3nhtpgSA",
  "key6": "2PBJyGTJgiVVc1F5oKpm8k1fiQE9w9HN3eyZZJWUmvgzXT9ZXaB1RiszyoqjNZZgWmrS5Dhvf7ydKtvx9tmuZvnU",
  "key7": "4TPQWwWwb79aYhz8L4xNnVubZQGop3Wox4GGh4zEsZzy65XamMUaGhsRbDHKRRU42ym7yei7MEyFms5PbpKHiw9X",
  "key8": "wtB66LyELViw1ST6YAsWwd3BoQM8D43qnyc8Fqjx1F12wtSmf361G2PtippbTuzWQjdvG1jag1fbNJH2zCSm6zX",
  "key9": "4WGiBGUnYZqDVTgcHn4Wj4VAf7nBqkkfgqxagQq4ytP6TKxWU8m9YicZ1Feb7Mywg3VDiHYd4FPYb57xrLDvf5E1",
  "key10": "yJHuEcHqF8TpJcxHa72wNXmNds8AQog9xvaqHVa5UHRCKQJtN8KKqorhsUUxvgdKWyBUcMNTGxguzwpySghUxGt",
  "key11": "5w9eC8kwtT3Zf5pBQZvnDk2HJVHtBhXKLZyCtpGXeMeNqjvZerpUqy5WR1Ew4PDvDG2j6EZ1zKcnJZErpwwCKNku",
  "key12": "4W2zqAA9WkmoGUbfwFxLceWeYkiw2d1AmSWXHmbdoXJkFDtM77jHkrrYDf7a2vGpFrCs7xdZ9nV6DRtJREYQR582",
  "key13": "3hZhPX7HRCWVGV7R1XeQXSHWBS8suV3u1SDdNL6sCCRdu6Lo5TEaC2RBPZcUEYNsu5iB9XBeHb4EHrhecXyUXFkC",
  "key14": "3QwH1L4rwnHjXxeQM6vt3ARTFaCGUacaiicGFGTV2ANydwgUj9VZMWvWCQQdKfZxEhkJsSdUfqC17bSVy2FASYXd",
  "key15": "4pLiJ3QtifvRvqrmWcHamvve99ytJ7UcmNVmTVYBvusvbQnvZ6oFE4k2a6mYwcLv8uw6EUQXDLCjmYKYLCvVdysq",
  "key16": "KcDTfZBBrJLqgp73tUvtNTSn9Ux3cVEsVRDhXbnCoWz986yak6pKzbrdaz8TYZVCe2rv1D4YfxaCCB6EM5dyLfw",
  "key17": "24QNBYfg5SVuK7LWJTLsAsx99jYANhNhvjNdaAbKcypDPZN1woB9baxftG9k13yJyk5jdP6k9zocfrUrUiu22HRX",
  "key18": "jRDkuDzQETbYiCouoDE7XrvjPfwxJ9sS7CUzAQSVAcKNQeWjs4sAAL5aA2vrKpbFWML4zzLTo5a9PdtyssuKtAu",
  "key19": "2Lr4EXWc4N2ytfJQCepnKhqgeNeL4mS7peeQmxangDRccjHX4PjS37GUET1MmpiScBYTy2hsC4KwjXGQjiSbiFhM",
  "key20": "27pB4UaVK4Xeh5GbEokxbB8yfRigqaJJDEppk8SjDfpca8qoYUpJhX8GNCQLzobGpegQmYcBmham49fMphfY3GWC",
  "key21": "VPSSvuUv9AYY3a3mTYo9cs5e47N1SDUYs9SfqTxzW1iE5CbrktGURFy46CWxKKznDHFbHdZqt1tjypWv2wsJmGY",
  "key22": "52TnGPyfeTD65zASiowWMSdNSLafNsW7gXkoqxb43BsaHxsSSLMyzRW2t4XQZ35i2qzUYbVmZEhKtagVaCbzASot",
  "key23": "441ABMFPUwCyRk53TcybxF2CkQoD6RWRARaBB6s2Q1Pqtvtf3KaLRPeq7opqSaR5YprGV4zEAXHcxK6xPR1wPwva",
  "key24": "3YtXrnwxfdLFq6LiWQBmR7tADJnxyZYCzDFHJCvshuRVdaA5V3uf11Pn8fYySvYkYG5zFVLYZLYru9Q5Qw68fiLU",
  "key25": "5ZwCgcz21KWHqdFZAGkZ8cSFHjXuioAHq7BcGapMbURkcSoWXU7jtMSJX8iZPdeFyTyfAcp9afC4gwKprUCcgC5P",
  "key26": "5XXkXHC6joka1nf7bcvzjX9FfkfBNTeLC941u1mA7wC56oa4DLypTkd5NQYhcyBWKb4cpqd4q3os97bjEmWJLVs1",
  "key27": "2RBz5WcKrHbjzmWqqi5Ku9VY1GrvsZRJUfzqpH4LBWnx5KJZDDzS8jq1VT97DHEogpEcKqNoDWhnLYYPgDhtb263",
  "key28": "4ZCKFyBfdcmDwvT5xuX8zE9Wn4szF8Q6UBrj3P4XM5HWpGzyoYyavPGZxzbr2jCjgc1GZqjMY48hbqNJjoTMKsWh",
  "key29": "2dUqZZu7AAvwm5XkHn2V85NKmwLsgcBsTUAGxiiwSN7AYCbwMFpM48jZg254d2kcYqhqX15TN4ig6gV8nWHqXdZd",
  "key30": "ewT9zXyw9gseaiFL8DLtbbJwbRHBpnX2DomG5dFr2vBeRQgj4zydFeTQmtVKmsT1NorQJ7az3aYWheaHoXgeSdb",
  "key31": "4hdCZgKnvkhZ7Lw7vPgpkLcbrDSudSJA67Y24zsCsF3CMZw14EuFbzy87AZFWkL4QYH2VzsG1TxsUJfdUGN1nA73",
  "key32": "XnTDA5iQTRbdjXFxXUHv2uiGk7ePxejmfzCjhNhTEvELiNN2aLqPKFBwqennHY6qt2ZfGucV9PhKFcccpTyKN73",
  "key33": "3sGf1kdv8YrrVf4rMrdGsJ16PGyVViPrbjNhtCLJn4NhLhpHL4qTrHJGLhP6FGPHcvu393hm5DFRk6MNk9eabKbK",
  "key34": "VW1yTZUjBH3AFBj5WjMxfU1WHS1sKLEJpJHnRaVWzwqPc8bawzsZYKa9LkkKYLAPLEbBVm5VaJfUY1adZbrxFUS",
  "key35": "dQuNjdUXtHHNYdAz8JWC6JJM6wKmbwjfUb9ydhnPQvyY61M4Ua4a3VFuVeRQRbw6uDHvFsnTmquRnJFY4M1C7LR",
  "key36": "7Tt1BV3G1rMFrWuQ8ymZkEQDz5rtyAWPy6unKupiE3DHHBCgENTy1LjEVYvfSe5jDh2RbdajDdmR5frLTZaZ4wy",
  "key37": "3ZUETkqBSmMFrsgAxmztVXatwM1p16KXz8ZoiXAixUh3ZewEs3ZYCYAb5GbbN8MPdudbfh9LYdDL2uGr3Lg2WQKj",
  "key38": "3oKvHaGWawjx7X9Nrd83nbfRnxY5noGzvNgjzdkUBV4sAj72p7x2BzxTQVWYMjYWCX8sGv5R93H7KTZWMvYCtk1E",
  "key39": "62jFif5CUW3kLvCTXRUr27aMkzMYktcMyCgCZtvJ1SDTe5syWMTbDfjN5WpatXgL3Nsh7enAq72hcqXyBeb9X385",
  "key40": "3kKv8RxtkrTFZu821GXFhVfVEVBYCiQc2cp2XFzLTxbPh9qwtHFU8FxMa5FDudY1gqTemh4hHWbzweCkHcow3WkW",
  "key41": "3DFb4CgnPQnAqjisEjs7LLVuwkex8zR4SuJDjNM8JxyTDEhLZiGWZ7Vtp8HaHvMYk5zdx7YjakTbtbD8iCH8zubJ",
  "key42": "5fietMiumPoXP4brT5iEeKVXF3YuH1ENkxkDGqqzpX2eV2beybi6iFjwrpMstpWwGLoBPb8AXaUXvSGWpqdaETgF"
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
