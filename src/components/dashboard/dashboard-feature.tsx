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
    "2giZiYgpFwdZZBN32aRN9d1hckBqCYeHZSH56h11k4kocTfNa1P3z46S4padFwDsBo5hjUXnGDRAhLXn1eYx983y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKPyenmtzsvLLBwgLuDDr2NFPKTUhBXRSB5ZNPZVaNanCfouNZkHcCPM3s96QW9hs3wBAnRNB7c8UG8qhQEgsuC",
  "key1": "64Zhv6XeyFy79as3FNcoUQYzMhhMUQBExXmx3Bt6DJgG7AAvPy6mYhbbMpASyT1airF1cx8SKWzB5wDvtYr5QQ5v",
  "key2": "3KXudeKhQYEvF32H7cGUinK53bD8rdeWN4ZnhizHyZYED2aYEPcpoWqLegtnG7qX4t5KavrpujsNbEtob5nrvieu",
  "key3": "4rSSw1c2c7xrqzHjLJiWcW4sU37hbMbvUpZYzMQDncP5w9kKMzRYbejv5GepNw4HaBVbXUWptiZvNBTCc9YrvdcK",
  "key4": "4ozYCTiV9fASHA8GDruhtXBdMGbCPBc3nCUUEVtAZbD9osqetFpKCVVcffa9yqoJPEtrhKcNJ1W19vosjrYrL6qv",
  "key5": "45KVzjpcYXVeDf6mLE7gnWbxRtR3okaX8x8iYStTjAFNSZ36aAckgU1qsrkFzRCstQy99fxUrgeVMEZ7eNQZfifM",
  "key6": "3G2n7a2DSQpKkuhcmxFsFXftrtLoSGkdTDeK9deRADPoGjqVHHpa95boDbwmbx9eaJmDtLdu7BHm3a2bgeSQH6B7",
  "key7": "DxSPhW1pakfqDRu8ttFkhT47yEnuC6TarVncfowoi6X7NLSCwBtEbekz7xfoUXd1yD4V3HuRj12XGaaaw5fehTP",
  "key8": "4kL89AjkjVcf5x4qJTsCmoPbGa95ypPoADfLSeUZ4r1e5vHernnjyAjDLVdakKviFzbzGSZLPpftmGBCmzSDotkM",
  "key9": "5DoLDgsbWj2MXTjZ77aqLfzVpAmxVdiVF9eMRZjDbPEjkqhMuiAzENYA4YA1cR766bngrivhqj3Qhuggv3etBXbf",
  "key10": "4bRMhiNywWEZyjma8wPrb5JsvwzthqqiV5FcAbk1eGT2txchFczhey99UoACuMfQN8vieHUTzKinV6rrp8rzmBWp",
  "key11": "4TeSu2A7B711PwAoGH81dVfskaL2Pk1yfPXSCcPSBFFYaW1jKpTaLA9rwrMsbLHP2Geozzae8JTzyUqNXgVucq9n",
  "key12": "3RNoVYGBem9CteGKH7vZJkZc4SMDCpFKs83WTz641MFi5ueHDuZaQ1eQdC5C9UtrYR5ygifCZDUYQwdTMDBK9ckf",
  "key13": "sAsNdvsAFLchptZQaQ4H5rVc8BKdiTsMXQt1vQ4i9wnubuDwmenB5Qr18b8yW5W2NLgHfj5FwHp7fmN3UAMmUJY",
  "key14": "3JioyR7SYSo666hY9i3QVCBCLfNX6i3p4FAbzAkFUcsdR8q1UaXhLXvvyj7TmWmD2dNCUUqQ6uHjnhMSg7JFUQac",
  "key15": "4a7s2ur541iKNZrjqTXjVeMGSh3Y8wgvvwXWTvhZy4ru2RgQtGqq2tbJKAShgNVEqP85Y9jS7jDWpkKXqPb5zvhD",
  "key16": "669w4EcTDva8pkHRfVH5jw8aWLkB4FnKDm2K5FqYuuxpps7qkmC12WtcP9k91wvdz1tjqar2NeHid97ZttjRoKLE",
  "key17": "d6KcCvSjpPbYvCtJNNr7CMiZoMYa7ProuFM13W6zWFYvKq3yBGqRDXLAfop1HAEeuF43b7GxTTZjVdzhiPfvrYg",
  "key18": "F3GHuX6qsJhrpS91YSKjeLgwY1fWVQfesVDGi7Hv3nGKR94K6z7vA6mpsYgL4MuGZk9dRVqoZUtvLXwnQVKeTsK",
  "key19": "3K2BTBvtD8PeCVCZmip4HSz19w9s6jAnc1r3XKKonSCRzCbmDqrVi5Ng1jrH25xbXEVAXubfyuCMC7YxzTrWkbUt",
  "key20": "4VE84SmYP78StaYQ5eXErRX9f5emFGT8JbK7AMd5b7TDSrj6FYNhkYyveXMfmtufanUVYRtC6zVdwwLp2HMWY9p3",
  "key21": "5rrGMS7532sqAX5TwTDb6NNh1AccTLMsTZQAinkP3PcT3kJCejWZnYpWEZPxwU77ENkygm78mXJcs14CckSYkyig",
  "key22": "4Ug9quPZKHieCsUXMibqUybV5qRrK26kVurvNCTCgVT2Q4YMStZmi3ur6NnhxEBYcbPsPT6da8vYGnBaDfmasbCZ",
  "key23": "4U9Y6ghJnmW35679967PvjByf1cvV4xtJpQTs1zEGKAYft81h7QiH3Errjr5ZainnTVBqM6fBR73gwtNjfBT4Zxx",
  "key24": "4rvGZsdoyDe7Veuq4mwZKMnbNdTUxhqY3ootGUPJdnrfxaLAXVnJ3pztr3iFACWzjQFY7Q5UpxxN7a51pPufyJ4A"
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
