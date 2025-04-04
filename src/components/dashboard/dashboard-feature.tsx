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
    "579g2iaganegQjiN9feDpWTQ3yepG6ayRoKLFBnNKDPc6cS8oy2gKVWHXAr7ciNm6WzUphJKRnZDFiL8B2RGyH81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JejyXdWYtvT2kQnr7QnLGUqH6P7RyJ64wURZb7NiVjfUatx3Dvg4NrbF6s2c8omLt8RYmcs3VwKPEaJiXesSvA2",
  "key1": "2ysrgeWwhCFU83RriRDS7YScsvTwiJjrcJYkMrwKytQtZwyxFNq9tiM9TeehDMGuR42XMLxfBsRhvTJDeZzbLVCU",
  "key2": "5WX57Vu5gH9GyZZ1LzVYnqwwGM3zUhnv2SKzR8vbYbbiSDNdjJZCQ1DrTrUy66XhnLu2SxKnBupbyDn3GVvwCNiR",
  "key3": "S6Wazv6Aje8gY4hMqvnFvV598ZHycH7RMbH3FWesEHqdEDtkUyBwhr4HivNGqE38rUwT186GgPzCM41FnoSEUuu",
  "key4": "hn5iqdizypv4Jee8PmT4pmxFbLeqL5jd1yEhU1QyePGwTyj3nFU9DwEtY3ra6ffRJZSAZcwC9BcuXWYE5ZTmhmL",
  "key5": "gbYLS5Gzj6qok34LftngN3UZJkry1RrnBvctth96LzUqG2LJ7MSRhYYRgMxqCt4VELKZHKdNwmaNa4j4KYqqx1J",
  "key6": "2ro788ESPNwJJ3ZjPpnDynHKLvynsuwd5gCnrAuh53gnVLjqcRRv3dRdwYqdQNSYmmDGLgCcTkFjNNsAzwgzWs5A",
  "key7": "2i5FSJiRZxT2b8xr4N195UvfUexMevcXV6it4H3fSgFePKxvm4QDhrVvo94RVbRrXqbFHiVXhgjFsDyzpfGE1S7m",
  "key8": "3UryisNtG6NDfyP9KqfdGVhmRmheu3aeFEr1GjZGYTKuV55CuxzRoSjUe5en39TAo6NFvA93WGSvJCSS9AX1Lxim",
  "key9": "XefbXZqQmG42CeN9XvFCqfXFaxGDA2yVpAfk6XRxwR4wKA7uSDdwgS39ymEmKSLAvELNMHGVWVaGWQVQsQz6WkC",
  "key10": "3WNv9AgYPWyhg8y3j9Jba3XTo4p8xg5fCrfaiAqWmRifyr3GQ9edaozBTj88v7DPxX4xaHgULyvgSKZBLUqPkHTy",
  "key11": "4vn34ntJTrW5gKyAoqoUXUARBZanvA4rhjLmPRgkFUVyEJj39kqjopr3NH3kFDJ5EbjsiyC6f8Z2xxmCKsZ4c4YW",
  "key12": "2Dx95hmomHy74Jsg8D7LK53gCLNwsT8oDBBYAfzbraH12T4bxVF1chSuesmzX7tv1wYu5fX8eGK59jWswix2sFNJ",
  "key13": "4UrEMBWwExZCdKxTvirB5Fb9ndfWp3iALbkjTLnmvDj18F1uGhjEvaP5hcekKPuKc8MMVDZmFBZWjckQGG4mM9GX",
  "key14": "4Dq5E8TS3ZrTVySDxg7QnRrP1YT2NMqvtKoccVHUW6bamtFAsRdtunsN22zHGyiToYmnWWjAEvgzzdndfw1wkkn5",
  "key15": "2oDAg7Cp21mnXQxx797X1oW3CAerdakv7iYVEcXt4aG6poBcZyrrS1U33A5RxsKKRLfMRArKVCgp7yz4rgbUHdD9",
  "key16": "32ifsnepjEXwjgTQqdNGLUs3BueHvEU5bBzDS3DAjGbHWjskid1kDPiwiempvRqUp3uFHKE6ztduHHtWmBGkSb42",
  "key17": "61apsDrzgMBxmgvQs3tnNdUZpiBrhX7aNpzG13i754ekWjfDkw4dmwefZyqUzD2WfW5Thj7uv2nsG9gNfutteg56",
  "key18": "3HW4Z9mv9b3r4QETZsDyAbUkHCbJV6kBngx79Aw3CUczTrvo8VrNdGRDiiHVK1cKiPxbdKebTS9Jxgw9eN4xQYoC",
  "key19": "3bQL6gpU54PQBj3jqJfZs1P2mJ9JdCpE9mRYEKvajoB4vr3oEXZ53R9Vc5gFDKDbFE5nRi6PXdnPSZKHZPNSwL5x",
  "key20": "44vUh2XZJ8YpuFcnWeHKnNzDSBJvzwte4yFyXf4uebgcYpeXhDZ9LDBEfgD5SUXBAMNdwK1uFwFDSBtYM941Z72V",
  "key21": "3FocsDVAFz8ZF9kuibRyJUiYpro6QeYcgQF9auF9WxxgaJ9xgeckiZjshcFGeETt5WgCU6SJ5DMNSArGaM4yj5Y6",
  "key22": "4MYJqRrJFHBwbLuiD7yd7oTTuQZ9GczafuZCacdg1vMpfvVRK61f5E78wMVXF5VmUG4wBFpJcKG1KoJpa2EQdcbM",
  "key23": "3EUWokp2zezGj2qNtExCwYSAiZb5wdV8aVLsWJcW277T45kwDHLGVKoXY2SKC6pKoAWzKakM1wPHXkEWpVbwCp9T",
  "key24": "YKLKjNc2DbJF2bE1FteBTkAbyXXvjRdZjz7ktAVjmStK5rntEZVfx6VVDr6V1WnEzdggVwnLmviZTVjbT5iUqzz",
  "key25": "3SiwwrqoubpBjgnuW7yowtsKgn34mPabFhZXMwmvDtT435eTuSSzU2wc5hGsidws6go2wfY4cicJ3DmcsYc5ZU5n",
  "key26": "5kxQb5Xka3QjbtuRkucefc6AYkijJwSYsrSbmR6BvbyHh6FFHJ2qWyLzJy4s7Rcw8eEgtfYbScjsGrfw1qbaYBMi",
  "key27": "3cawZq9pViDM54XgYvRNTgY4wmuGAaYS9YYxKBNwurfEHqRNxg1dkTWNGkZ89nNH35GcwqudDPAfZmHfFBso6wqe",
  "key28": "jzuw6srBeEHQBTmkycQv5CDskpKB9L2g77jjWSsDD2BsGispMXmyqAzRpf6LDvspkyKpPcsJHC8GEcFKc6SZaEN",
  "key29": "3VvaSUEZ8bwWxrMPKLr5WCNAfu9LvWh2XMNKQUMRZAA2yrbm6p5mXM59P4DtsGZXEJKiXPgBKU1upSg6cfGHx275",
  "key30": "4RUWzEvutkNAtu8fy8Z2cvHo2ZCfzuri1hv45qcv1Vmwo27cC7NMKuM1wyAuoyNRp1YP2p3uoJUZRkgMF9WMP42v",
  "key31": "2Kt2hV32srfjdNiVroXeUGUuZLtt4qWGB7jAQnVQFS38ZZ7czUsj7M5woYZMGYfrJ7mqb3GMTs7ef3vnbrdjHg76",
  "key32": "B5JwDmygdCQmGhp7LqvxvD2HvsEZj7boWJHqJu1uQGqgKLsfU4NgE5TeSbFKzSsWLxxH3aJfPtu6nFWcGCFnUi7",
  "key33": "5t4Zbr2jv5ciTcJdLrsFXwDts1KLbrTWzA6nqFBWxQbkAzGJmgY2vqriE6i6Eb81MJkeJv3Un17hxdjrTVq6tKYK",
  "key34": "hLR8fVR94pZNY2spYHf7TZyYKBfdJwLrhdo9BfsRpCS6HCpHokSmH79Z44C2LCfV9EAgcZXwPfguwnNs5ZZYy7n",
  "key35": "4Sq9PKtaJCvAuiRAwtXwNymRJPxhLSWfA19RjgeQtgj1YrRiby2hiCiHfJad2KhLKf38qoqGB7GfiBaRjVjPMo3y",
  "key36": "rbXdbGLyM4kECZcrsjhkKw3Li6Pr4MtZgDXQtfZgHajh9fbBtEDSjzpV7kBzZEJdXcX8DSgNF7UUrH9rDt7A2CH",
  "key37": "51zpqoxDbe73GA9SUAVFQ5PtXE4GZPvb8kYxzHsZcDexpd3VECBgQGtYQYuesBDNbaWnPvqKf2HSZk4ay2cKcZSV"
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
