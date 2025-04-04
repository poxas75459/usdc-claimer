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
    "3ip43xARtXwQhKGBeye7BCJ7dPd1ma7uHhWiujqUMxWMMum4bXYhkz9BLcSGwd3mg2gRzkeiwDTeKu4pWkdGztBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FWjKUSMuwTmFGgr7v5pb4XKhX5yxZFgJ7VmG1bMTgQES8qwu2SZv4kd1PRUBXouoNrBuPSog334RianXuXUNrTp",
  "key1": "4EziGEhAkkQg3ARJ8aGJA5zgwTh84x8EMNDR1eqLbdWC5CcG7d1LYZH6QzUnfs65ukhywrWkx9pyhqC5d17wgBYj",
  "key2": "5ssofZh1ryeEGw5U1WavLEPewR8kUFT8RgSN9FFVCPw4irR1yaPZCcBz4uSfac1u4KxF1fGUS47rAyiVamSLx3v3",
  "key3": "4Pv8PrQYBDTymumMrj6yTinhaQR38R4542SBrRCkcBAZGRFb6Tayk1VAUNBDEMs78p9pynBrkuGobi3sHBcrZTtK",
  "key4": "2CRHnFkxJoG8ZANrtSGyBMGU6KjerCChHxzdv6ZKBQQdEqqbAYuuViajfXqXYNyrVxFw5cxu5qQfc8xQUnWjfcdq",
  "key5": "4ugvJgQwifEwKLhE2aXuY45syi4TCKpNGv1E6pb2keQQTmHYdxNvvczLkJJ1GHg8a9U4LE9scTLFhqBpdxkE9tHN",
  "key6": "4uxvDP5EgehmBtGAwFZR7DQbQHNCrNawLUxJrkry6dCyWAeJDKWm3CHtyoKvTK6XVnybbsMX5zHJ9Qh3rxa1AHvm",
  "key7": "5foGbP7ads1jTYTk3kNSqpXqia9cz1oomYPsf8srLBXwtWVYKWbm7rZq4GPGji6CczHTH9d6uuYJKSRHbUXFa2Z5",
  "key8": "5ixUTK4oPUXAuPru7cEGFtTJoKUbh2iBEAH7fGpmvjA8ktMfJXFmMb5vHhQZPyzx9HAkgDqcsL2XWQ8aSvvHxwVB",
  "key9": "31gLzjnPrVwY1z4tmNU67EzdYiJNGwnhyGRnkCECS6SJNe4RacCkq67xy9CCuExxuCz1hNdewzj6yn31a2x61tnm",
  "key10": "2asFpEpbMJ8DiTY48hiNwtNeW296LVy6Yta61dL4pzy4ViqHCtY41Rw4ECn6x9k6yiGrcePBdNQtqYoXpAvDv8AJ",
  "key11": "47SshVQbxPapyCP8YgdDjnqVuusvdYBoeq37mVGVwEg76hKw4L1QMybTGcAqr6BnKbFp5rFUg18JQmRVuGPb4BMV",
  "key12": "2Qt4E7bGSwRPyHHTDB9E6g2CH6dKPRqLTUrtzmjAJAgA37CMRr3mXhz4e9yUj5RWYbmNTPm15eu38WMVyzF6WRSx",
  "key13": "4DpEMM6jWbH6yftuXzHeFgEGGgypuK9eXS1YUafGUVzRitjwErPz6DF9bekWvBdv6vodYPnPhAQv2SVKjFaNLfGt",
  "key14": "4JaqrxmEGzJpBBCqZs28NLqcbqgGUhMnp6UqY45vQzmUeUEagYY8oCWpHzTcBb2JWzqcYKQ68CMX3idT3ubW3ZjU",
  "key15": "2FNQz9abZsbjQEmZkUs8QQFSRcz5p4DFKVN5bRDSdcVKDGY2AHhzDpcj3JErHRn1MsGemSmiqvgT9uEvMif3PWpD",
  "key16": "4tNsfBB5G4mRPwQwriDMYnScztutUFWLkJu7J6bsFYnUasd57LHtBvLqnFsb4CTZVLxcy2nmXEN67ELYQuxBug2j",
  "key17": "iNcw61bFncXccSWJngJCUzoXtrhx7CMcwSen1ziAvejRZWoscfK5FFAJ32oK1ypXmh1vZwMwoaFnDAPnuJtY75E",
  "key18": "5NsCtda84Lb2eyFGe1JhxiPbqmMo6XLmQ7YL3fs45k4Nj6iMPXkPhAGayfTm1eXgvSUdZovwFs6wh84vv32Qs8Wp",
  "key19": "23ewMYeN8cKNB9b8T6VskzNhCzijBo9RSoaveHMouoyzcZL2D9xR5UtZHt2zewtwrBaQ22m6kn3cNLv33WL96pAD",
  "key20": "5dM6L6qqVMEGBVBnhKFL2Us5AVKgMzRuQTaC7BuAGjncj7jEo8q4vt8ePrFRNckNQrxzMFsPgztZdEbsYm466bQD",
  "key21": "VREoaCAGvttrzpT78tczD7cDih9mBLMQhV5t7QwwWUoMXq5r3Fyo7HK3vGn3YK4D9tGiLW3JZqzKvoLRV7K5Kdu",
  "key22": "2bqGjW6xdGBonNb5EuhqSerk33ZsySn1T6wRLVL79rhGibrtpn2RzWVRk45DEdqG2gaDyC3gejCiKHTKyEXgxYNF",
  "key23": "3JXG5NKaqkvfEDe5jWnfAWD7Dyb5pEjHE19EaEwxsuFisDhcRUdEeAAZKFMjAdh2KkMgGXQoAAE8Z4uAep6MgxNk",
  "key24": "3aMnjsu1n5WgZFvvjPWPpXY9iTJQVQEnQ7Dq2gQGMchL75wF7RkcZ5FCxxYt8jxQYUpCxjz2YPTYoApjKqdxvQTE",
  "key25": "5VCb713J2gKkE7YPYEgkRv17WmnPadQoE9a2oV5WzVnRgNYevi4uocUVDCXR7g4m3UpxvLBsLgVvkex5EiU6Ri3M",
  "key26": "HdXntYSbJUPQ7hfb83SPei4pBkvg9k45SPwQsxNMbSzeXNipB1PiZEXABbLhnmEo1zAxeyyEnwCTcVCMXKFnPeu",
  "key27": "VM7AZh6MMxcKZ32vSuubk2EyToW6xo1hQ7GhSqWwscGZqd6hSc4vG6fddn4WaM8dysNWH3DZYgTPBwfjKdEX1dn",
  "key28": "szfw3BGVSEELDcNhv21zMffpo8d5oW9QPj63KXsVmEEsWZoonRJT7JBCCGTgcgSoyVYf5M6rHsrrUgM77c7R6oK",
  "key29": "3URgQGTpDBoB5YnLFB92t4cMmpzG8rtmQFYPGbtxjvLH4B2MveZAPDQMLsNGh7FGBsp6UJzDgCiRDQsrBp7xfF9j",
  "key30": "3QF3Ru8WKnxCe6RcLJ97McyQ94uSDFn9ZpSEzNTUuiLqpBrn3ahcVBeRSBGjn2r5HGJhD7fswfQSEdJro1rFQDNN",
  "key31": "oZn28BbVrU8oyWvYrZi9JbiiWLsxxTGCa2PJsGQX1njhMX3SavqgTPueMQxAUxSS3cWfUmBFPBNnyggJ2vdiNf4",
  "key32": "Deexn9m5NwAbNHMVbht5rTzJGWkg2KsS9JXh2BAQX7bL5jUb5Bs9VgmMBCRW3tVxBfSvxYH8H8eMDmzMC3BDRzv",
  "key33": "4NCjtyVVn7LnzA2h5ZBFZxAGzaf2Wqcd1Y9UW82MgkTw26BaaQHHWXenwocACoiSZFZPCfnmUNMjnqHpt9mAHSoC",
  "key34": "3xGeVc6voKXdJnX3kK67MaLRbnZPSqc8BpCaDC9G2agVZJ1GGz1NsQqRTzPL81e6JmJet9YzZNpd5AFCwHJbc2tj",
  "key35": "TpSUopeVnfyad9jSeGvEaaauqkv2sneRVVXQyhadtwXWLzzzxSL67h8dGpvDvSh8sM9pc1tWwTHi3q3MctfePoW",
  "key36": "5jshSVEv9XafsNWAsuL292S12zVcEMSj5Xm8he7pXCPVJq1rmiKsow3ZVHhkWim7oYc58qTgYJQjWPSqbmqUUrr2",
  "key37": "2mkFuruTs4DnMqMYTpRFwA7pFYCVxto8PDJzbHRDJdyK7hdNyP7mZM9cYddvew1aKaht83rdDTzvwgTfVmzH78Se",
  "key38": "5udPG3kDGDXLwjUGKVhqHWnaEf8aYyzGDzoPCvRABknBaKa782Kfqq3SBUpcSZAQ2FXNjAfAeQ68kT5XZvh39hsS",
  "key39": "2DjiCu5A1PuZnnoNHNnjh1Pb5mgwjr8uHuBfEaHcbcakB2Q3kuUGJ9kHVbRw17NLRojUiCYwyYkw82hxkbbj8jvG",
  "key40": "25xuesapnyCbk9NRg4qoGxFzdyK6QmgnQj83wA8tJAFF9H1Bcm1vkirK8m1yVQJKwqk38ByzhDMW4A1r86v3WWjw",
  "key41": "65e12ynJ2W1spMiXRXvwE3yxWVg5oPHx1xLuPe5CywQQgHk71UXtuqzddKyyWXW2k9Ehk8UJTiYmV1bVrSog3B35"
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
