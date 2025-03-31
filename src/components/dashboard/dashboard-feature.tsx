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
    "5i6q2Ti227TovpShBkY1ehoScM4fKWnCPcBd8rfN9g7BgTYeQ4YShW5AFXGHK1rJrV3mhyQ7RSntFupfkp7Y86XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56m9W9wdYXeH8EACCV15yqLWM6WeiAFHQjzcRRjt3n6tApRdXzsj2u7qU8oaQYsUDonCo7Nuj9V7vVAcw49wkGL5",
  "key1": "5RZbjHrwR4XXLxQwLCm9aXhx58odZe6F8L3JdmkFYtZhMDMeJ2RYvGNLSyp2ZL4VrS29XE1mnZU2g9mTzsjj54x8",
  "key2": "5z8w1RaCstT7N7vAB6p8kz8zGeRwZJ8sZnKHQyodAyguo1F22hKp9gjFq7n5Y1cm1fmTNEJKLDUNd2VuKWrYqcQN",
  "key3": "51jm7Qq19potL6XmiDQucQxcAPpDbivTTAb8rnnyqWAKW3zKd2xPGDGTJowhP9c2KTBasSmuC2TJiWUECWFXphom",
  "key4": "33WsnLPPsC8otPycQz5Vm6xhct63XcR4C9Y8rSuar3h4i7iRh49ozdxgd46ZzFQ5Sts2JwewqbfpaqBb5B7aWajq",
  "key5": "h6GyiYNiLDe8rBgSu3P1qmkaRcVhd5mr23xbMhqfqjmnwLNiB16CGve1H4qQ93mh1nZLMbCN9D5Qs3gj2ahuUW2",
  "key6": "3Qz4sywuj6jWnorRKJF7nmDkMTDM2dBpqu79dEvGVxYz1Bfnu7xzTfBdhbJbm9oj6x5LKYfvUxT2tq3p6FhNcVeb",
  "key7": "3FFqHuVudkkvmTa64Z8oSyn4ETbyzPwmc7gEsYrmPLfPNCte63cqHsHLWSCnwbVpaZfNiSRdwgaYq5vQ3u6v1eHE",
  "key8": "4pvKBHhBg8X2W3VqjTtcefEEEciZAwht651KzxYd8RkA783iQFkbHhPzJZ4uY1Ge5bhk9nH2M6tmJPW1Rra9ghBz",
  "key9": "2v2BvjK9NooeChraFJkr2dThnngZvrb3fCxLGqyZnLUHJLKsz68nw9VtBjzzstYwaZSL3XuWxCspRpk3JodMYNK1",
  "key10": "2NMcGcsHRNpXCTDkp1ZVx5jhT4Uq48RnbzsayJxaKN2YmUF8XfJ51ADTd9cXMNeDCBCUWbeeqYepJPHPewajuUFM",
  "key11": "5zRWm85u5hRQDfpSiam9wcBmqbMZoev6eU4q9LFzykcr9jc7cM2xyHf1pUHFPRGkUWu9tKyTeyG2rKhDVY6cUgq6",
  "key12": "22zuMu6nDPErCsqhMa3DHCmupxu2X7uexHkDz5KWdBLFZdRqTrK5f6ULghLWijivo2SDGUSeA3RMmNAC7tAd4yF7",
  "key13": "2A7hKCJTaB5W7CK39vEzm1vQLxnx3fryH2jx8rpCMd23VFeEiVV3SGxSwNeYc4VtmEdUCaiMYuQfLVWRgEzX4mEH",
  "key14": "2GmvoBUpK9yeXW6vHcFx5upwZ2mf4dWzEPCJANV6fT6jpPdC1zuERvNiUG9GnfCk5BQjdp3svCZnS1zxyydWuwMz",
  "key15": "4HDmNSCt4dRprqwbt3s7XMsoz5KVCJuf1uvc7js4xQcb9zzaXQavb4fKsV4a25fo51HkQQgdzDUDCpaduWHrJaxc",
  "key16": "4TFEwKWuekvErmskQc7csLMhnZpqoB4B1domfKry3CXZ2893yFTchQVHbrY4LHcPLpox4z1StRhiwtGi6W49VyL4",
  "key17": "4bC4a9ctJijTnTfpuQo64jwiTW59W18UXqLVEDGfD84BN741WiV9aNh8tfAHRvT8G2pu7BjiFYjwXg44ejv8Us3G",
  "key18": "64KX3t2CSnnDnQ4inHj3EHQrMWF4faXJYt3jwiwVGHkBwoZtXTkXcQXEt6gxhamxMA665TEDMfWV7gNdXLYETTSM",
  "key19": "3ug2YRCUAmFZasfEw8z1t3jo59gfLHVVmHXzmYM5ruyLq7P4LKDhAt2ciyj9TwRp5vsN3idhfPhzWi6PDvxZKWYa",
  "key20": "BgUwpUKTEAdRWJ2Cmz7GfP6CpWyWUSdTZ9as7h5hX8uw6YcjzW85HZfJ6qZUtdw9AbEUBaTFGGtsyEdk9XyXoHN",
  "key21": "3oUv7SrSE3JYZMqz3Ba9tDGUubiB4XkyFn7zFesyGZUDTK5KKjUK6r5ZuHUXyeau2hHMqkayKRFqxSfHnH9aGi2m",
  "key22": "2319iXDugQeWnP4yQkjYxmHQahZS7q4DnZMUJ8z9UJetm9Me2EKUj2EnG2YZPosNpYgkZ4tzCL5NYzDMgYTnFeCR",
  "key23": "3M92K6JuunfCeRW7nGP9BWjRNcrWfTTMdzKPYDpud3uZCH8is7tcb2hPJRmjSR4xLBJrp8E5SSHWAndDgtraKMd3",
  "key24": "4nUQLpCs5tXTGwBL2EphpkgMYXRe5XvT2ttv865dFsjcdzceKncTsdHu9YQTZdD1akmcNbRaWu4wYy1jRewtpk5y",
  "key25": "3ojouBHiSSFXzhsn74Z4bJDqJjs9r6jdmwb6syVoeSxdF5fQsNBGiB4XK9AuVTnC1gnFJoZDF6co6oaWDGzYbBzE",
  "key26": "421XJMEoouhwM2vrJWHYYV5xKCXtM2jkf9KXP9y9nJHkMJPeLgQKy8VGia6ACFGhdshPF1aL7oHdWnx1voFLCDBP",
  "key27": "4rDzVKWkiV5kzfakRemFVRssgfYq9tTb8qK9ftXGAWEJy1FzDij687qURZVCUvKiTvXqktCcrL5Z8BM12tDoj9Ef",
  "key28": "4MYZf39fdGvJVKwHZgtqBt7MQkpg32GZoFJMWtJBhL92syMQqs4p2HQ3fUt81AUpma2p8C5mt9Jy1CbPZQi7eFKA",
  "key29": "4FWcoSr7fo6AGuFSFcq3LJE26yKtDu2NYfnK2vyT8yUEGs3saJ4mNYBgTXPxnxrPNHiUM5v8nR3i2YscbVFVrHMD",
  "key30": "Zk2iNsSw2ypwxPYPYRxWCenkzsfNYDAdwZaBf1A3hHHEB1KUb5CszHCeVLPxEkJ6qmTHDxjgLTmcJsgFkTaMru7",
  "key31": "46mT4cb4PdLfYC2sU84vh8iZdvS5i6VP9z8coB5rEDLYMkfhkmDtdppvgyC4LTf86hkqmDekdnoeP6dQVrmKRUTe",
  "key32": "57kg88gjZKyfT2go1MLtfPpioaKT3jTYVNj7k2bookH3tichWSGFmsSJWE1wHMWpgoqSD9Kwqu2jFvNkHnTXCn3x",
  "key33": "4SK9WZMNN6aAiXv9KvSY34CmHsKgrBumuYVxzwrKhSJ8B5Sh3FgkifubjxqL9cHYNVaVYgJR37ZJNUnuZdgkySy5",
  "key34": "RHb9qhX8qvRgX4b7vMRojwZHUMwgymRQyM9ruHafFiSs6zR6QPv3RYxo97qy6rkcJAWb4aG1h6pZn8MTFbaebVs",
  "key35": "41Ho4JLtEXuR9FXbfPy16qpRJiLNB4YhiBpzcZYfHUsYVJgjH9c1qZTp15sL75QNsoGhpCZfmHkZ8GmCEb7ffHwG",
  "key36": "3Uo7NrvGYfmSf1aa7KmtjydTUKWNc4o9SCF66i9Ccdjf7hakV1KQKXeuUUAAuj21mAXCbqKxZbKqZM7KPDuQZapt",
  "key37": "4QE4FPMK5PFr7HtPLwtW7c7x2GQj82uydDPoNqc57YCTwmFLXwmw8UnCfi3JXcvugzgCVVYbiTwd3Xc1TuL9iiZw",
  "key38": "5EBugqbXCzovbazzdGqtGt2R2EVihKFDwhBCxct9rirLBW5PovbZGn2VnTL4CYjjEt93LfmRCxLbAosAYYwuvNA6"
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
