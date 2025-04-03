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
    "5oEGKeAUbhFzyW4hxcWhErTTwsb4KLNkjLv23j6wbkDoAnJ3UuTLubr5VeKPctWmwNqHKeouCy4LSkvHzwuG1Bvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vn2qULsBzGGbNSBM9pdJKfFpDXsj3tdvVeAgmSVC7569QmErZDhK8KNpSyWHDHKqhnyifFgNgquNY4rAmPntYq3",
  "key1": "2qKhFU2s9dRtZjKrDn8jejnbTnq42sFEXjTm1W5nL246jeW5j71oKEsgs4uq9QKaiqFBazsE98i6ZSyoD4LzeSzo",
  "key2": "rUhQW6rnUVzQP94z2T88sLXQM6bGmZfksYZaWG5btrudEPfYTpD8oLog7uwUaF2SsXaykHS8yKwaedRD9gPx9dr",
  "key3": "2eB1Cxr5b6NwkP2uvHTmMRLofV6taZHDghZ1URWjup3YwuvK6x9UaYMpkho7DD9B27mFwiFdAqvxhMW92L7USfFB",
  "key4": "23GKnoihpSDZFdRHvrRhw45ccfw1s3uFGNDqaUrTkTwoyeXFgimtKgyauXfDTQMK55Z6BJHzfECZZbeCN27mFGcB",
  "key5": "3ubS7xQ37oAdFJT2HqiM3BUjh1aMWufMje67zSbVJt47Wf4CvFwqTiKJrRtBufCiBpoaKtE2qDv2yz3Eazmx2JJR",
  "key6": "3LsgoqQsvPXz7FzMWn4eRGu53LkVMgJrtCk21Fpfum75mWbD63njEbBwgHbwhcC3Fir9aFbaweoNrrfNuUdZGGCb",
  "key7": "uLL1Qicst8Cd2qsdNgh48fQiKjZns5LwVAWeJPoy7xzCw2R1xduErkwACmeYsrEai6G4XMoYB2XbaFYSqHbLj1p",
  "key8": "3NgUtGPXS7kwisCo4nqDu7vQh4BKnZnCT4XaLyKMRmpdQ3Jznu4h9ahieKsH39qBfBHcfsKNR6e2CL7vQ3La6nGu",
  "key9": "5eRDHLsWc7DrPseZ5R7h4V3Bt1YZUznzzVpWMEYmneBxaJ8WzdhxX7n3fFT3Lp1nwX9cWsF4Mt68qEZYWtjDoCrN",
  "key10": "PvDRyyDj8agcvXK2bQHkgDXhbhY8PyTrYjN2y6s2TA78mDxToqrPbL3mXgmgM9m99c9aFzySwLVcTjbbcWwiYyG",
  "key11": "V4nUdzEdS1c8JaqtF2sYhdRk3tbJdjZJNTPxEYCeW2axkPBN9wT5LH33aEB74hDpkNajw8BpZYuXHToYzoN7GzZ",
  "key12": "PDavrSnuDhpjHosAXh7K5ELcJ3uJooS9euf9DqDPhzrwX14ut4NPch9gsjHE9h2osVLSNgspKCp33h41ZtL7LaQ",
  "key13": "5Tgw2HK4xH1KjbQ19wjog4vKXjb2ipku88AmKymkCQV1Nc1NqUqfJgFhk3bDmh7jxJJttBLnqgw4esXcc7u8EhQ3",
  "key14": "3Qm6LbAu5GzQnx6vYternMdBg9HKCv1CgBAoJEXjrqrf9S2oxNv9AMGXbN1w99widXExHDoUG5vdNaQTrJbiiqgV",
  "key15": "5qBxSUDpi7MCSjo5Dv2rw9yFpMAX3j8g2XanCzZXG9WmBRDtdf3QXgYiKZfC4eT4yBhXxhwakTgaRSkXkpJUHcd5",
  "key16": "2QkzwnnRdDGoQJQ2jFUDNCG4LFFPUeNLHCAXBC5SnCM2KArUQ42NSnuQWYu4yUTEk4tc6V4KYRNX8XsTDWh4dbt3",
  "key17": "4QELRZaENbzu6SfoRLbwKfaF4M42P9wpkRMg1apFDvnmX81BVtqM15oqaXYKPkpHRGuukyCiuCcXog3WD8bRrB8k",
  "key18": "63GfoubQt2g1dZJBK7Nyn4RUgpJRaVaKNomHv7TdsRkMHKL4jUiDCiwqS7RU7p72dyLTnN3S7tnFegEoUaQCz55d",
  "key19": "U2ENL6B6daguCDjBFxQL2BkeFnQDZk2enCAAE4mAZrPx8FnJftmE1SGVA4GKv5RiovpdiBnk989AbUmBUh7Kjer",
  "key20": "3MLFDULKC1w5bSTJqiGKYoGoR2ztwrA9kD1H7pyVXsdED8kFjA4eti7QKV68uE7ubSiTzuShhw6uZS7S8fWDM1eK",
  "key21": "Zi13VkB14epEo58dNhimHztfij9VGXx3YSnQdQ4wuFQKkPHoTymep9yj1DsvQfPUDTHfrhubwgqwLo389kbFJyL",
  "key22": "67PPmmF2UvXoSnHafCA1hpw8BnLM9s4BScySJGG41xD8BaxzoPEvkGu45QrsYarnPyCd13P6fE4NbnZNopYesjt8",
  "key23": "5pKvYh8mjqdHjUBsBqAQuRtXwAqbzB1ueLcVkuhK2P8NpkTkCrb5wYywgQtM26EEk2HWJY68hqJKij4fjAthZ35m",
  "key24": "5EJbUoDAVxz6vxDc6aEiTSdTkKwLnRt88BHkx8oqQvsjHF6V7bU6T51kypo5gaL7xWm9vywNEvkTig1TVWTV7YPS",
  "key25": "25wyugtBEp2rF7Vb5hQKyT3yBjik6UyK9M3eAgWhLCGaufMJNBxXmffgJvCRbkEcxJWQV6atprGNLiZekF3UB85M",
  "key26": "3qB1bmJSjajaXDYYu2knZDLGGjmWLx3Gv9C7ZV9H7dZfJR3dHZN4xRJ6N459rXn615TTyA4ChrqveSKgFDjEgkh2",
  "key27": "2bwtnt18GYPvzjmaewFxDMSGTECxWJcx7KmRJ6KFDzHTKPzrPcjnF9Esy9gdfwtuM9wpHrZihdABKoot29JbsN4V",
  "key28": "3ZQ7V7ZUGpam4AKroJ7HKoNmkFYbEwPNEMEAUxsi98LBQRkkgysmiucxi6nh6VN84FoukKsXNice57AUz3C4hmhe",
  "key29": "5NqU6ekraL72yuaB6ADmEM8yqmU55ymxbFWCJQxUjSdUthFKaFFvfBVThLYWXm2NpSoGCzm5MKvQwU2MsMHNy1ZG",
  "key30": "GbM5h8e1vUSxmHg5tQhGYLJLFrLt4wtkyCH1wftm3rv78WxeXohaZyDg6BkSkwZ9mYSDBmkPj4tpyCgDGo5hdfa",
  "key31": "5wGMFzwGP2dM34F7m8xJw4i8bVJhuBSaA3E8jk175GsSSohKrNrBZXRc9twxg4LjqWoRmw9YHbvQEX6YGzJ6ZhoF",
  "key32": "3rCu959csupdPTf6urYG6A7yhoBr5djFDWe5mDPUo6jFbuBVxR84QAmmM1wYj8GLXKR5kDdspxKwSaAy8fqEVhb7",
  "key33": "24nsdM5rSaeQVqbGALcVFvqF2ygwxjgttTwxeK6FKxcTpsnQgM1C5Nw7HbzJwSrKaDXzu82gFqy4FKbAa22Qvdd8",
  "key34": "66rirPHXLesPuckpBzRQHsh84FMAgtsmGfBMwn7HcwuEixfg7zZyziLvJazvejBzRtR67ySKq9MEPUTAAGMGLV9C",
  "key35": "4S3eijsAjq7sVHec6tfgFgPjg3V9VhBSEUCLdnMmPjTbmU9XuzrgJezhrXyGkRwhxMyseV2W2EAdKXeHaYDqUiEs",
  "key36": "4fGfaqz6DCBqoYEK9ygJmydeSyfZhMcz67ad4cDLLZ8gU5JAvBQqg4PDwMSxyRg8S7EAj6q46JABTB8xVbk2F279"
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
