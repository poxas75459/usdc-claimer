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
    "247Aa8qHKQoyn2WJo8GtHRfZhXVsjcRQuWe7JPowy5agw3w8F5wPjnqiUCvShpdyaZbQjbtz2FonKtKNJfD4xdC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qE1Cy2SDAEF84mPLxd8WKoV4CqUSXz9EtozvfUeji6Lxgvxc1xdroA5LB7W5b6AsgqR9LttuvmbNk54j2i9nqpy",
  "key1": "4WHruSVmvL1k82M63yPQkXihTGvr4ZwbuUFWL8c3Xosvgs9MWWzPuGyD3fyL6BJ2A7hfkqjgUndc36T9wCtduWc6",
  "key2": "4H5c1bdLZq1X9D9DwwrdutN42ZXEnxazNU8pM7Nsg61JCBwuhNdp5RGgFReeDnqMYncnDLVbxxPhQitLseYNZ1mL",
  "key3": "wfgDn13SQUPj5DPunmJzzjbusQHzJrt4Q35RVpNCVNmZisf7VZHyKgWUPy9MTjtaPSVmQ1kBAvN1SptB8K28DYj",
  "key4": "2MunYtSRjqifwcTb3zbiSZMLedVqNynvn3QYrGH7vVR3JWcMXNwtKqpgXStVuaWp4bR7qG3jyMfbHfbVoZbG2jCs",
  "key5": "42n7P1ywx5tXpbnJAo2pVhau8pPjPPG5u3hXbsJEw5MFypn7MoxBqzuJLgf5oe7ZgjBkPyqcYpThsGSzWrxzk7ma",
  "key6": "35mwmV4fByPL4CAMQ6bDk5WWzDqMVTAKkHDDsn4z8via4dKRbwsxMCPu6dUsZGDKQzEStUJitwyXoFkeFav5uBHJ",
  "key7": "5pfGg82AhM5J7kN4fhEAJDbScWh5Y5W1ZU437nwVCpvKjCQiH8e4FqDyyapfNuRm4YYa9jaXAu3eYRL3rnR6AKHa",
  "key8": "4AchLAjeb6i5ngUvefrEPuP4wc8WtMxjmez9epiJpX4TGmHkEbvSBtegAyawJdJGCxhHCpJJCrw6sBJMPPpXFHZL",
  "key9": "EHirkqEzz7da9BJK3QkH5eTbQbG6hkAjDe27zCVhMbDUDUr69ACt4aFJCQGrjXmuZRvMnUZv9UrAbAT6rcVACxu",
  "key10": "4g9dUXnN5ruFXGjHSfceHSFBBDh5JMJqgVenUZaU1AjQH7SPMmtgLX3v3fUJ6PE8HDat2Q9j81Z6tna8TfB3q2jc",
  "key11": "4dZxqxPZKKow5Nh7F6CCyVALXWRGnNas74UoLybmsHfUvTxh3rzubmC1HRtFNGgczvT49XVoUnDUVZsSxQ66bZGr",
  "key12": "4FfJAE2V9hXWnmZ8FEBb73jKKg2Hvk3H3rF62XcvsNK7rb4jUCJKp2LgrqPskmnZCSKkfadviszDtwXak722K3e7",
  "key13": "3byssyMt5o53rQkeG9RhfceQWYoA7vYVNFeNfEic5UqSfnNw5URbagsDvVd9Qn1ogFRZJbTQk8MYS99et7c91afL",
  "key14": "2fS93yA4awhuZJKX1XiN2y6npNW4PpFvKxgsLjY8f4BKNSbMBNtf2XtCLDZSbsniAcfDDu9ycy7uPHeodYGJKUoj",
  "key15": "5kE9dfGjJ3Ui9dms389mQiTWdnD8RFEKU2R1Pb9eoDHmhXFwywQvNdsGVhPwUUjMzaWA4XEYcnYhfHCm1sXPJbCz",
  "key16": "28bxdHUa718ujfCMXpNQSYmAZiH2t3211kasXS1jT5MAZhBjrCGmngTZ1FtkY7if5sBBkqdgCrwkLhKK3DczMaMR",
  "key17": "2gnBDD3jo4aQuKveLC5nSJcaYiUMXk6HrfxW2LbBpahqp4Cfq8yrvbmLyRfFN2fMY8i95dveoZ9KBKUcHkdCHNjy",
  "key18": "4pSP5BgGvt1JQVDrFTPxqdjd3aGUrdG6RdXtykqZaNAY2uSPqjJVHXc1yMtAbzsGDWndJ91xnpTjGTwWornRosvp",
  "key19": "32P7ZUP2m6H3BhbkjCMnVSKVdPaekNQixR5XJhSToGLf6WdUM1QXF7KVjcZvAvGXcx8Hvjwo93DB75U1mcc3BYfC",
  "key20": "2WE322gBCncX2s1SdZFg3ZN1DoKgAp5pdFpjDvgJLgT51hBMVg5cQ6JeBW8yv7D8dsta12FyyN35TqZg4j5AdCXt",
  "key21": "2YjLneXKbH47mAw1KfsSZyoz1nn3iCxEGJ9RWJG4wuZ7MwGPZidn6naYNXdsU9fPtEKFkig663EsCLNdPj5FfLXv",
  "key22": "6PzdgdZGkhmeguoYpjKoBM4WUKcoA26XQmkUvxunNruWqemr5BmJ6ForkuhMrBoJaqCtVhdp9WFLowVxv8z4Xau",
  "key23": "3RbbXgsnEXiXg7iXHb6f4jiK6RiB4V21sShJ9BkeBJkLqomY2d73m7kayzxWvW3ztegoAPBWZkkhtZy87hqd8adi",
  "key24": "2GC9sCQmovg5NaTA3wqMRVC7AoEJgtDReutENDKeiCgmGsni21h2CY6RkhjZxWPs3idkGVbMHfwwzdcT5aHJKEnD",
  "key25": "2hAvfaXk9r3yVfmKN3ofemtSbjZSPPUtF8EzdhiM2RXvgquNdEnDuAaZoNGTHJW1cUEvHCtFzFAzrRf6qJsSizYn",
  "key26": "3kmaEnkWcQnHHqarC3YQQjhuPVFLZLGPcBSHCHEdndpzxcvJVYqGgewsBkEtVoWNivWoyprxT9LWZNoUke1yc2XA",
  "key27": "5w7zXuBm54imzsgHxPcnZ5Pkm5jY8aVYvxd1ueakWKfzM6RHWN6mhERzRQUUYbZyFRJKxnsrz2meVQoCdU2aPfzE",
  "key28": "2FU6BjwXHECjvZMYNDbvXsLypad3qNo88jWXaBxDiDM4Wswwy9rB4HbxMW21Et2SkdQ1SHAcdDwiz6uGdxVvn1sR",
  "key29": "M3aZsa6vNhXxED52ertQD1CFT2BCucLz9GnnPJD2XjXG5Baw2NKKvHT4nahRWdesHzpv2DrJUNB1TyBqQAqYdzt",
  "key30": "23osTZyamiJMYFTPXNhs5bBvue7sbjapGzB72z6YWgzWcz8fDWDaDJTdGUCbwDw4Va6KTMs8spiRwbpCvJWKjinM",
  "key31": "4JY8bwrVviZauCgkQ6BAtTh6FHtgvEVRoWgKWZHppjjpKwccg3GKGeymgLw31jrcDBVc1VuoLVZZWDcfnQmQbGPg",
  "key32": "1WTNET9DM5sH8V97yv1BxJ2HGnc7Z2tEKy6gaZ2aBB7yL29qmM6owV6kUemV67PAEkCMoDMZidmkjvEDL2Cnied",
  "key33": "2YF5YR9zM1G95UnmTrtbaFZP5WKCAMTPyfSABsRU8Nm9XgcemgzR3fcKiqVYeayfUtGQDuHo4XNfbt28qF1nkdRr",
  "key34": "5S2NvQHcJArw5gFxdLycY6b6YQY9TJ9n6b5pAxthiZkF3V6RcBnN6jWmEYu82RFMS4gvi9YHQQNTxU4ksrmdH7ep",
  "key35": "51qNY3KhGw6jHfanhaFJURPv19Q2pB7cSrP5t638iHEQidSrtPv1pYy1dUtLofRZhN5KaK7oPdUb2Eky7yLMLh1F",
  "key36": "52yYQgskf8j6AzV8WiHFhCszJxuDWimpx4iy7aipPdCdhHU1DW8Q2NrKjwK3toNS2wMTqmM9VsaHfh6Umspg8zjA"
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
