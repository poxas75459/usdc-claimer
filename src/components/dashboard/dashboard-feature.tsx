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
    "4wvC1ei2URhevdyzXeTxHABpSocDnCoX3NwneQn82JaBh5xZVDvpE96UX94SSiS3dSGCF3PS9kiaPogobH3f4W9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KKFcd2CLouD9oEjZ1ycBmTNccd4nAT7Mn5E9esZFQ7AN9ujUyrfgtMnVvWHydhZNb77eFz7bR7V74yEh7CyJWoR",
  "key1": "3LqAvLEdh7umsywiR44uAQpf1hrtkHVwfeFs2FuptpecyPhKNnqPZqZS8MmxuLMuXx11zgbBGbfGB4dmnoQ35sSK",
  "key2": "4X7zTmrgNTuS4NoFp7HjCnyRKEPMW8T9jzFofVmsDzz6pK9DJA51dAu53wiwArWo4mS65Lwc19X4mtGjE8ZL2ERK",
  "key3": "uGZ5ivqvPxpz9W8Kdj57redXtBiMJEqsqiHmp3SscvruEWKFnUWXZrvtaf87QVcZhF4yTvy38tekUyC3GRwdq3d",
  "key4": "34ECejZGcVpSnkJniWe8g2PdgMy2hkPi5BSi6q7RLopZdEWrK566Fm4gQTbtJsMETWj7Wwqp6VWBpkZ9KXrkYphL",
  "key5": "2FvR3Mbse6mbE61kcSkDFSLCNJ9YJEjBqQ1DQEAtpUK1GuVHjwDcW7Y4XNQMyZhTim5dXFVf4WRdEZ6dhUVQGfJ4",
  "key6": "rtrrU9j3a66LjKA6a7WG2BvRvXVYkSypoHnxyJsw4JHwt3HeEMHSMkducxdyzAt76ehRy2hti1MY6mJcV3LfsuM",
  "key7": "66r99JzAyeiqnULz76TWC5HboUKM5raXkhMBuzozUuGJAWQD9smomsv2chTW4e7iRbwv9H4yoHZHDTcaaVJGYVLh",
  "key8": "2svVpN7hC3Cvjq58GBL5Mf87V4AuS7c5nyVs1tZpgXYdzFzSdFBdTCXn3uBDqvTTFGDtFZaCtZpK4P7v8MBr8hk5",
  "key9": "3FDAP2Rtk85Q28dCj2EUk7MovrNVfN4jG8dRRupnuuV9xNv956pyoh1GXQCoHYdDMPceaohcvfxRaWh2cqsaZwL1",
  "key10": "mP1eavfmXapkEEARTHTwT8h2w4dKDTrDYHA3pS63sKJUUSqYu1c63VRD3Qpuw71JD8Z7xTLVHDZQLocevtjnHFX",
  "key11": "46Bgp4XooVyE6NxwQeQUPv157TJhgiechw9eZ46hcjP6mjdVKD7Et6G5wWdJCrCWmsNb9mmLD9q5LdDS23PoFk1q",
  "key12": "4FcMgBw5sJedVdHrF1w1M99Wibyky48Ke1t4YQM1JRFZYSeeVoEJcNL8R4pxcWevJXa6cuZZX5oUSkvyGQcaHWAF",
  "key13": "4K8vNS5TUQHmcytdfW7ZApV6GPG9F6CFmHetvhvuddQWo97SFZ4YNS6czo4fB4MGzQRpE5ELMm1cirPQpnhYrhqo",
  "key14": "5PTMXgN9bxkANZiWTF9ysRqJKX4oAiFwZ5BEjF9ugzLFfGUUKFwQqAHQ1Eacp3miVCJYGcwMBMtNMQsyaXeAUWy1",
  "key15": "4RQma6hYKuXQMSSafE1izDZJbjyB2ZrYtCcs4o2Pd2fXvzgzQdF26BQAw7CSqqLpTmfPzZkmAxw4vbDVUVBmL1qx",
  "key16": "51fuV12v1d3K9U6hdReGpJrvAkxUJL6LJmmupHwjnAxu47sQ47iDkq3tqiB18B3xzpUeS4ADEMuA3axYQcd8Mb2A",
  "key17": "zgL2NnNWJf8xcKE7THGGdFBUF1n5ppAypSd3cFridV4Xtb7yFS7mA3kffvqBtvPH2AoHF2trfgYoFwxfz1LgNCq",
  "key18": "CD8kv9cSjVithcPhQYQPdziEszL7BoMNXFo5HhytNPfrVF4wLWytek2fwcJoWkPaHhJwND7VnVvpfKP9c4eSDbW",
  "key19": "5r7P84umBRnCjWiSFpRiX4Ke5YgtAvbZNT532nR2iL28vAHCi4XB8nNyAuQeM6jbGdnbb2dbBCAGQySXYUHikgrM",
  "key20": "52mKweSgYfdkbfProT2DesHnN62eojiQWWFkmGxkpPaSx7nu2gvGuppdhidYzMGDw66tU1DpQtdRoBezL5dEHz65",
  "key21": "3cDDULPzqX7QJ6Wf2nRr4kbYjVXxCiQ9cU6B5FgqPNBUEViKQkDoCXPyju3idgVTjYi7fCYjsLwEdLDAmrzZHQ7c",
  "key22": "3YvXvCtS8MeVRcEJso51hSoZxQBoHTyFGhHXnbVRNUPmja26VACuXUZeH4VwZxPY2sotntMDRWGA4Zx3KhCKwdwh",
  "key23": "3yUco6AXSibCAZTFWzASgVkM6C3bhz7Xk7XxKPmNDmCwoWkXmuZChsxbFW4uhkTagUtEzR8eBfNj8UuVSgFoQUyS",
  "key24": "MZNJnHMZSGuca5sskvD69gd9Gkjjw8xDgyGFMgk1EKrdcpRvoHXATPphqZfezsW2n9ewpUCozUCUaCiPgU5FNxe",
  "key25": "zUUqwJTm2fEb6HBqUmtnFJAHNheVJfga95sqkxqzAHzr77XNeT86LAAYwV3smbxmX31xRMq2SJ7omu7tVmoRBXb",
  "key26": "3axyoFnMe8xbTCQ7M15yStZoTmRD3QJrsEXpZLjzxgh4TwrLbx8qPZsMVvE5p1Y641fPEHog5VNjQYpM2Ytf1rgu",
  "key27": "2SMcUABi8W4auUfU8UchSL2dXjQiPXVtTKGBPPWW5K4WS2xFxxKvj53fmdh9SdAdVrQHKDXu9QELHjt95mVwZHTH",
  "key28": "5X5Qk1KzJcsKUgBGr5timEmwa7FtvmxQswWeeFP6s63s1Kh8cTCGnmgysr3ap5P6y8aZ1NHxqHZ6JAAqFnshPkA4",
  "key29": "5Zmanm41oVR5fDc13xtYsRLFMgiX9eTpm4De2GuoaRUbxDrab8GegUtXEQ2637iAxny6jTJ6FzJBbcQSNSpWvhpF",
  "key30": "4CitCAD4Y3Q2ArAznLLYLfrwkTxuS2fnZDxsR2U6kSNs1X8MaLcZYMiPSwAPoXKwty3VPbRa2woh256967DMwg8c",
  "key31": "eDD22sdCjfKAFypScz7auh3wEMKf3jpgkJPh8D8LKiFCr9YR7VtpmvirmFtzVyBRtc5qbVPyxJpc7WBxeU1N72w",
  "key32": "36G9S2z8v6wKBhF91g3EfDgLeq3cSYn5mRFGwA5vJ5BHKtuVWSM6YJVQBmFxekxrdyNSVxxbVTPyr6xtxdcuv9FR",
  "key33": "5tzidSGHzpYBEHqhj2k1gTsA57vJmPaTSfYkfoeA8tGCL1ADTqXgLFLXp3JMXuwAvTwGcBevaBqeeMdHnJNbG1Lk",
  "key34": "3HDYZsMfSTcs4Ve1d3VGSBZ2Ew9ivT2x3Yz2PReadqcdcm8eaZYC3NeDsZDDBhy958ZYU6ZiUFvptUzhPnFWLYvw",
  "key35": "4byc546ppTQYWHs5D9Q2CXs3Cs9fwC6anuUTKH1sqdN36o2n9RU9c6JLQHi7dbRzPVrXwgsPR9S6oyuUHqUuz37p",
  "key36": "5LS2zBpH4zUwDBJgD8YKs6GsKQDF22duWCbBRo9hN3p9EhiKsh1FxRprS2UiiRNoEijvYJHKwKhzHSUy95Fd8zMn",
  "key37": "49wXeDrKkru9uft6184r6ueBTqATUbd5h2dhJLt8QBsex63TB6oChNRAZ2k1SPWAbj56aPCDgqJGgEVk4tcnkyY4",
  "key38": "S2hNEx3MAKMZTs5ozYcp9n1xgjPs2do2q9h5ecKoX7YcXqKBDfp3CsgM5GR1YJR3efZgfMsHBLpFYXbJe5R8UAG",
  "key39": "2RyhDrVAZhVs1T7S5Njyq2BMPALmcqxUrRJGm9MryTGwSre1K5QxYP7K7xnjMMyjqJdYGQZ2UT15rupfr5A2rgKx"
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
