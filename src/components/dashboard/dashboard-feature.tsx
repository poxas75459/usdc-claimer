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
    "5d3YhFQxUZ2VYycmfBqoQ3Xhx6duCuhELN8p7Mp3XvEMfLTYHBGcDh5hU2Xs25N9v6Tj8LC5BKLVE4SE8vvZM9dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJxGb22sV3MeYQebSZyayLQ8V3QVQqYDsi3kn2ZT4pGN87RcS7QyA9BDZH3ph8oBhHfa5i62UWQJMv3z91wbCeT",
  "key1": "57rdZby2u3TDFTW1z9VXKks8WJN58Lkfxn7ENnU33wXvz9pe9UDe7eK8AZSv9i9WWfoKtfuauKo73FZ5paczvSev",
  "key2": "643uUyvH45h3P4zioLDgYKNqGHZCPgyAVGm71CFavS8YFzDo2MSRQYs6DJscrT9JSft3B2PRuyzHNpSgijHRkdyH",
  "key3": "2oEYZ8DHGDa9o4pUYHAeLEHoWDRKhNibbef8wTfzny3xz6vvF9kZemyeEUHwA4Jc3smKuJqZQP85BypJvL4uoR4u",
  "key4": "3tcQs9rPh47Kp7dRxA1Gdgvf1yJczv7K5RCa3V5jPk6mVSXSeX2uY5LoNJXDowcMnjhXBhVueSV6zyaeGgypEnP3",
  "key5": "4aFwewoRZcajrhedJMFeG8BLgeZQPkc82W7tNsWxzPTTmSzaWRd94x18Zx5wsg386LKdsV9nCS8w5y6L9gVLV3KR",
  "key6": "4M2cGybf4wahy8d4k7tV5hEBY2gGXnStMfCbTHX5cqnVAmcGZH6NJwaP4PUb1ReM8aqPyhJzfErFkVvzoVZqt9jT",
  "key7": "4wLBnq6d57YrsqhQt9eKy88mWd9rv9VQ1pvgamyFw74Su21uaHwavzS7iru4ZqvYtR2zfq2gJD6wy4c1cCyhNvqC",
  "key8": "2Xg2c6zFwhCPBVn2BeFyJVE2gXG1evMduRNToXMxYe9nXjjkR6u988xUTUyas82geArbaUJwSN1HNhyMAXW9pxBX",
  "key9": "5949Buih7zUzFsPrBcVSSDcVQhM5CKWarZ3UKw9ivaUgRiiVjTPRhKYEvCKVzCapWn8Kq4TRhvUhN9BuGsNQCbRX",
  "key10": "3MGztVkHAcsD1Uo5hQYCwuLB1PmnHbJp7ZmEYrcKaD2tfWLCkPh2PLyXtjZKqaCG1yxz8tzUzMop6SqXhePEbSkg",
  "key11": "5gCauxxXaV1xJ2g674QAUmhY8EPHRxK4kE1ZJitCMYajXU6mD9eYXnV5tGntpCCuNzYcERB9YSL8AoxebhvxxPkR",
  "key12": "4DK1346Hq8y2NNQbSSmiFHFwSMf2EvxBwMAs7yRZ97d5RrrYJf2KT17CuarttDNy7mGzKTpe7q7pdEZCnrxqioA1",
  "key13": "33X6orzs99hxFNWkqMi8wVMruF5A9rZAg9t7Re8CfNVCH5DgiUWfMo7kPENePjYJZKkfY8K4Z7fHEurGfykN1pgZ",
  "key14": "2MdS9fC2AmoyNB26MQbad1jrWJ2mUEWdETgexGNaGo19LnQvnZomA3hSSJvf1VU2bqqcofmnasicnX5o1z3aKMvX",
  "key15": "5BgLf28UkXvTJCS5bjpGjGfdefpchbAZyHGHFrMJ2csFPAhHkeSFMDKyMXotsXopg4EAhKVXUJv7sQhGkdRxdzPu",
  "key16": "4pBgtEqq8GFeKcGz2wMkYVZqviSUAsDxVaZXZJZm2gxhDSGjoM6JXX2ZxEVoYkaSrQxbgLudtBsm3AAD8KjXKWmm",
  "key17": "23iEv8x41mTLKovo5P2XEFt7xCjNsXvYCKCW1TGH6QZJbfz2KCu2VP1V4cCT3Y6Kh9mZYw1jUo4zfzPc2YA8N3sp",
  "key18": "5ikN2sWmPV7Fy5YPG6CiGMMzmk3vgHcEtoDVbyqTvcMuqqEjA3i1SreyxfLkoDdFcXW92FubKmMFLukJjPfjxaLC",
  "key19": "4kfmAT7RA14v6yCNBPZ7omoRV2XPD1d6inpvVBjjpQbTRBbzg3cfUG7wVFmcF4KucmqAmsFmx3nQhZqTmZyc3n6K",
  "key20": "5hGdirnE3gEkTz4o79dXemr75wLdFLbAHnFK7h9RMLg8tsi1EHmWJoYXNtA41pAeMLSNYdpBkbQwdGrbJZaHaCak",
  "key21": "51yck6ifrkESgHcg1zTwQC49wchhPCtDkunssx2gybLjnokx9aEU9JGA9kzTqC3K9TZemb31vkp3U4ygGfGTrNyT",
  "key22": "24mJkHgpERHtzqJCxmEq9KHb65g1jnF4e4AZzeCKCtDdZoyXHu6BJaXgrSJdRNkp1B3NFDhe4JxELVGvSYhp4p4L",
  "key23": "56PttkbefTrdW5pHMQJUx7h5yF9zcfaDvAbwGWgkgfv4tVkfcF9SPZLixJYhjf1Ztbzpa7YbKmKVgzpxFNyUPX5h",
  "key24": "4BnZXJpmD7XEUnrKcVnS5A6BMWhcFp7Xg6Atfbc15s6fWSHSvAPCXKTg8ULketajn1vJGPma4vpfc4ZPZhPfh2HF",
  "key25": "5RYN38KwZkLkCZpZMfxiyFVqhxKXRCfgJa61z5koAxkABg2FoHsYGZ5KDUbehGMjFjymBfP7Qk13Z9YAJzNhPgeF",
  "key26": "5hkzW11YYRGhAx2fTzRVEo2Awtc6urVH9SrZ5r2euFjiSeopi4EtKi9xGfWwfbgZQ1i95H619CbxXGZeoQiMe92c",
  "key27": "51ph42Uyoyv2nvffAsTYknShPy7ESCytKd8gnEWeL6e5mZG3Ln7poqqFXDywVQCYy1wm6P4nCMBZMhjh7RwiCXof",
  "key28": "4RLB9SyZx3mxe5S73Z3ctyTrxfSump6amQ238Dp1NRk6VDnr3GKFRezzqzXiwv8ZjZkujwbWradjQjPyr5CknFT2",
  "key29": "42dzJNaAw6jPgKW5nLUyEcnFED8SW7E9h6wNAkMj4oYXznUqwjBmru9mgYb4VCEr2ct7utvqmZagjTnrthfUvGiV"
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
