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
    "2SDDhEAiG8JPq1choJT48gvJGgFJW5oEsAQC2tt8Hk34qWiEfsF2XT91qqEBvjsWuCo6b1h4QFEVZeBryDYBASQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2uZi62ije4AoLNuWL1tGNk874P8sW8SKy4qadV7GuQL8oT5PHbJkTbpAMvyMWz9jLzhXNCzvFBWXfP9Bj5m5ne",
  "key1": "3VbhdeG6VMVauVjXPQrvKNdp2tad54jiUSxsGAb62DZsa5u3Bsxd2NC33nUQRjA3aAvgBQJzmY8rpgGPiS4pfscm",
  "key2": "2oM4kSfdfzqbUsH1sSarnVhutXiL6HeNLSxXf9y436NuXENMor7QQCYcxZJqW4qetVQaU9KJjLyHXx7QmPcQgkvA",
  "key3": "2rMAxtT3ButjXEiys21t85pqaQNqKf6fzZBmbwP7WxV1tbPFYoH4K9QBtVv7Lj8HfcCipwZc5S2mc2FWHZRrt5Vs",
  "key4": "5HJyqCzoviesNuXMfBVb6jao5shaUuZgLwrmfekCPGWfBqghFRhD4r9TmX2MW7GPH9Y3yuLUBSo9RwzWGjegv5aM",
  "key5": "Nfh523aqa4Jajk3qUKa86wbX5Vvmu6FqYzCKaEKJkpn4SYwimsENxJwhYmVuUUxKDWjfmT88gxyn74mr75o9gz4",
  "key6": "3mw7pVWMtkKxCCfbPBhm9uxQXE5FnTiJ1b9RB9CgZD72ydN1Z86T7Xz4fCZTgBRPgz27sjX6NPRo1vWpMXKWB2ZV",
  "key7": "657RsMcvQnadUUkn2Gq5L37ha8MFqcNpPwk1ipqw6mqsQQAjSkJ6cK7ybxzffqAusJnumv3ny6MWJZj3JuKXGHCT",
  "key8": "35CHjrQnEYCHGwKWnKYj1KUofwD51MXBBzGh2351GJDHRex9gimHK11Yj2NEXpVvTTizGWHD7kxM6C71mLUcWc2N",
  "key9": "5L7V5VkerdwGnyRQYbsJV4AuRddWtBHPZQ5G1Ake9ArMdkYo8WCs9i8KTDnrjWcgBqC7gWoigMvKPS8weSW2X35A",
  "key10": "5BzsrdH7dK2s5rT8we63RxYUjCdvSBnMteGKxi5m427pUVBxRutxoLYuBJy7RRBLKnLVLTYEGAhSt97N9zkgHTSX",
  "key11": "2a8TXpUeiJENLQfRGxrgWNVyZQ8iFSSMM9eHS9uAd7ZxqgiM2cqcw2KqehTSMbFmYYez9VxqL6c5KZDFAyg8KoR2",
  "key12": "3v2pHjd3jtpaZcfzGyR49yHyg1eBsde3kEFBRhpj86rBXdnXTR87UpatjFHrrj3p9YhJCUzuxmVSqShs5PRpoDr1",
  "key13": "5vaGkdHcixtaxB8JQ2yHGzEheDaJEGvfLfgMHahcca7rank42BSdx6MyVHZLGTfqqFwHDN3d35bf5TRjQ7nFYatq",
  "key14": "4zLGpf9fE2hwiCgZCkaZqZ8jtQzPLjU5f4KCxVDP8JgRuPU4LtoLX7WWF1iv85WNy1ySsJzwbP45iM3YB1YtuGTe",
  "key15": "2zfS5XAMisTtNcCuExu6qcb8aNf3AaaPuKomSQEtJGPEA5BFTzGHPw9wsGPN2yMjjcRn6px5ZPPcEcy7oTxtDaQX",
  "key16": "hhjZ62WDsZ4aPKZ65mZDAFHGTZWZuJhftRhSTa8X4VkATjnouAH8Lon1ZL7QSQB1ifoQczeYP1T5nNhNh39xxeS",
  "key17": "5A1AD4pHYpsU5x6Zj5YPSFuCodb7dvaYxBmBJEmxjUqFzJ3MMgbdTYdoRT6HuS33s3h2pdnvMugvZqMGKAfxZfbb",
  "key18": "4GGiwZvQyBak92kNUprPhvLKRLZyD9fE3yVHfQBzPVFX2W4qdbumyxdZ76qBSxXEmfLACcfYjg7vBunryTcxSTMj",
  "key19": "5n1weGLxicjH12fxJD6zFRm1s7Srgd7Ah37mR95fJukzdgGs4YUs2zWhp8YxrCXYM8mH2LzjQ4kgTTHCgUeWWAzc",
  "key20": "9iPMyim4FtbhrfAv1FpodYoSDS3V4chs8NqZhYWAuv4xgWNTsTuhvDEBiszWhvoyijdFZPNhxEw4iBsXCk4idNe",
  "key21": "4r4P6hVRPctkYLvyH2s3YEFsQYSVbWTQwTqTsUurcufBx4HU6WfPq5EHcDEDhjVNmzTB3zkG2feqFTcFCCL8FHGP",
  "key22": "43LzeNXzuYzGrgjp1jkPzjzaEAtAAmi6JhRzkCcatqESAg1gDkscjzi3RQfcug8hFv8WgGoyjiALUQrGXjh9TsDF",
  "key23": "4yx9p7o8GDDk42FvAJtk2T2bvTDFA15kYeGjoxg6AMvCLr4pznWdJp1ooyhSBj3bKcH1vxWxwxrxZWimjfKag8n1",
  "key24": "VZeSKRfTh3CK8TPhkgdRosgEyiqkgFQkwo5Z46pHmCnymbmfHrt5pjvWNrbCfR7emRZknynDHhRihRpa3aRJZWN",
  "key25": "39RpAEjznHz2QH86iCnzdPa6iutfkj8HwmER8sgTXmNzvTMNBqTt8eBax5sRtdPvnumhbnkR7L9oDFu8b6qSUHzM",
  "key26": "29yopdMGoppqxYvevohac5LQLiFPv2iSnCSC4ra58mZqwxSVmV5Beo7yDHJ7PEXCgasLedRepkcFytvDgK7tukUJ",
  "key27": "zV34xJjyyNRG6tPVPVvq4XzxzqfmZ9KnsEWcVbBNZyG1iNDSwtVs452q1swTJ8dVana6U3GcCiqPkHhYt2vCri2",
  "key28": "4PLRbPGXjLqYKdNvQdswb2Ks7KTJDNnUbJAi3wfTXYR7dWc17xbpTn4oS1M6mNGi9pLX5nU5uXtZRTRhvhuh4pLY",
  "key29": "FJ84FNsg98LUVvGQs8wWkskmxbfDuCtVqUravJ4CdwuX51fYBbPWupRUbu5icDqpa64taFVuAtuyM8Tb8kwWUA6",
  "key30": "3RjWSjCj6MF1KXTiWRMoqPHHdtBjDtc7kx9VpCMiBdVk1y8xuKZotKUj6Nn7ThRSGNF2Q674haLphLtKs5HeYGbn",
  "key31": "Mzk1Edc6p6qugcv5HPL3zfyRwPSyAo72hRuZ3wg8wc4yRzx7koT5EgBiBMG42u2iCeRnUJ6kqwue4RUh5NGfAFX",
  "key32": "498X9LzbenfMEBYHw7eEFF23ZeZC1mZnWNaQUQyxp8wxzxD9shpgqRx5AgzVJ7HMnTp8S7Yzz9UHhN4GBZMrRxZN",
  "key33": "43qFwagujmYSv9w6fd6mAvVurxxHCueB98hVb4nbXUJhW6FWWgLQs7XwfqPUEMqZS7bFF9gePerGeqXj2JwQvnCX",
  "key34": "PnH47oXpuHqsUJGCfXZHnWERZB3zyXycr7EXEzA5DTJkdZdMWPrRFPuie4P46B8yi2hBc24P6QPFSGjT1JCjgBz",
  "key35": "4Ydpm6M4goS39VaPYU5hJR4SvVVorw8vW17DVrpPDuFFhSzLxr5V6efMJ6AhPHEPBGy99t5wpBNXANJ6xbzYCujR",
  "key36": "2oQm4o3gNR2PYF3aVdtG2jjKbQZYeoJtpMQ4BduvLwAkDe46D6BjD6KWWHPoSEzwzwnZTLWfZrMdyq294K6rNEdc",
  "key37": "3ums63wT7U3p2dyirRUZijFcaUNmK9EXs9Gduy37QnDcDB4GWzYu9GVuggeNYt83VqDNFwuXVzei5t6MZBgQfYbn",
  "key38": "3aG5bcpJW4jp8bH7YmrxtjovsibsBDQuWeyNpKvxEqGTVeVJAohmbBzLfEVmGJL1uJBaANt8mw3sggpqR1FEsCPA",
  "key39": "ZtXiNrUXQc1UhPbSBo1FSBSxLeRLk9aKu45VuhDNym77GyyfUKdsQLS78Gy8dY6gpTbcntM5TjZ5nRd8unfTNAZ",
  "key40": "4ReyAgs1LrVauW45KAb7EH64p1BBw4KCXXH1EJvFsVNmayGmeCXhHGU5ukLF9hudiQcjqFdTCi2vruGx3PYbRSLL",
  "key41": "DbFb17mLjRUu6mTgnL5VeJuFyF83Xsy5SbPrMVcks5cJbpsTyq8Dkid1tn3AB5TF9ymuyroCsUb2B5Az4hMciuZ",
  "key42": "4ecQb4DUdwDTzpLuhgd1cfgZ4xtckKWo4SWTM9RBnwiFMgJNNX426HsoWHgt3Kt1Xy1ZAETNBmW7Wkt1aPUvaT4Y"
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
