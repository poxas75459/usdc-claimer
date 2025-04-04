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
    "2E4VmQkFcLhfGjCDBxJhn9bUipMdHojjXrDYE624u6PmUTxHNHuDMLMd6kuWiokeKsJ1B5vSEw8tXAJyUDHU5ZkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GStyXtqrNSJSexbsC51RDL3e7AivWv2Qyx592Rf69gYmYs1JtYQM3jSdXLHwHp8beXeyiwg1DKw4ZyEpFP87Qqk",
  "key1": "XKTApmx2yS6a736hCxxFBnSgEh1M9AuCfK5vrKUzG2QjyKay117oF7QiqaESysF4mo7D7SiReQCxwjzSUrsSzLP",
  "key2": "2vBtN3QEJq2p3eb1571GySVWN4raRyJn5reNkVuLXndgifXyFjHKociYjom1B5aXE5mRSVfCw2dSY2ytR2mqsdFX",
  "key3": "LDJtmrqqe82ZoWgBSDXz7DhHD86HQp5sAYfZtG34UnZM6p8v1zxs8qzDh6yWsvTB9uWz8kitXob2FLFBLwUaq5s",
  "key4": "3hn6nxrPkxF96nJGUj76iVG5zNCNvPxP4RGy8h5y9wZ2avCoA43B8xe2UDCs797ic89Ys91F4UkbnFrr8LE2tfAv",
  "key5": "58vmchCatuoidxMBspQp164mNPJfWujPnGoRiRgaNdq547S6YQN9rEyV1EABieChnFdZAgQkG7k2euArmcHy9dU7",
  "key6": "61yo9Zw1K1w3GqWcEFNe4uWzqMRjMQsgPdsF7PaNt7qnMQvwBPnJvnH1Gim4uCz4kCUmZuXhyLfWARZummKdUWPQ",
  "key7": "669QMEBBUSPDM4aL1hNrHtsPKUMKSz1et7oHkWRntktEzA9gERgHfAuhynWGaaUrTdELmFdn3eVwAavmLMMgYBJE",
  "key8": "4SkKpeLtCBGahjw9b8FRqQPBfnQmKVgwTtXqYnn681wUCBr2YSwuf7U1A4opU99MuJGhpGcAZULetGQYJewzvhya",
  "key9": "3EMnBw1fNyPPZvzyepGggJupBtUpTseVotExRFBGF7r7oEdezDhZ8iMGmMrTeYARt2SCdQ89UWZyXn4FGw5QfKLz",
  "key10": "57vUN8M854fUeiRrfUQGkLVX8bXrSaAxUW3hsKue3ALKgQUjtpfxUmcqhvxcvq8B9vrgGWNMs8X9CdLXGG81ijKt",
  "key11": "5va3eCMBeQzzpB1Lpu6LELJacg72t2owFmMXPhD5UJYEKe9wePmGL2m5rLNfZzwQQ4HKUdsrCrKzWjqZDJg3HHKB",
  "key12": "5Zu6FyT1PbKhdf96ZdCpJBFbTB9DQyjGrGBNi5ha2QFwxuwV1GtvnRqz4eHDNW8mFQVcSvkNpmRmHwGZBEeZJ6Sa",
  "key13": "24EUXK2ctt65bLnHiQJciiAMMPBs8Cg4jXvt1tvUwGwJuzcwhivPU3gKNpdgR9U3865YJV6YVhbCtELwFCo5Yaz9",
  "key14": "2W32KRhCC2TdjdbCbKMkBMdXxgp2Ei1HpvEK53K9YX6brJ1ok6nNMT4xicqG1JGpFHzAi1LD3kqJQs3RKUhG4bMf",
  "key15": "3r4rBfxRrKtcRtSYY4orirqHN7keBF9Pna4Lv3Rq7BQoW8g4Vg45Eu7RoU6DeBMCTP2ohNUqkkbBVXu2hXHCUego",
  "key16": "4offTbktmAdKj4eQDMpCQqEAYXCKk8dzVtdgfeiLqcv4Tyw798Wwgg6QzxiSXdqswP6NYF6hwqBRjphuWGyHHDBg",
  "key17": "4xDnBEL4i6a5YANHA37Z97CH45GsL92stcWP3pR1vrVdmPZ7Ky1fEVwUFmYVXNLZaEAFHF3Ge93z8LxFfHjR7mge",
  "key18": "5ckjDqxaSk3TC5wVrjmqGrKyn39oxsJG1UYVKngd14rCpPzdRyb6Z3iScvaT96FCxxEz74VcUExasxigPWSExEvC",
  "key19": "4GhkrBiGGSrz6yU62nYG57kj8Ksn7zbWLpz6WPsEDE2aMJjngZ7rWvNbABkAwm13Yg7MSt6KRcLP8wKSW8uPtSgd",
  "key20": "5W8XC4ph7QwhL3U6wyBsSEQ8SyszTakMD4Ms5b3X5ERcdaUauhvzk4cVQhKmBrTrRP8p7FCdMHEVyg31mREm62ad",
  "key21": "4mM7nmhpQqdRLa9gJraoo8nmRyusCW9FGHasvQGpXuGqaixZRC3WSaej333yKbkFJBSU1grZSJoo5pFkpvLdxDKM",
  "key22": "3dzuQL5WdhDdBuz1d7rRrUAM7C82gnbqzSF4VVKtH5URUL8mQQnH6TCwcbsbo7det8HLhtmyjMcjCZJaxNMACVRZ",
  "key23": "2JuDBPoYz1i3fQsu82cp9TbaZVhvD5U5nMaFcZDsM65DGJ3w6KCRBvGL9M2oA1YDdhodnpgGDuNbh8A3ETf9A5EL",
  "key24": "5vxmJnR45JyMVotKG8uSUxQKFYnF5YnLcefShZSTyCvohgiBoePErMXf6dQVjKnYAN55KtbLrw5cFnWUvdJPeEJ7",
  "key25": "3f5L4pmiRjArBJbZkikhAqPxJ7GGp6A19EPMepcx1T7YAgLZ9S3grYqhVKRyycVPJSeT8XeCPk6RT21CoBxr2bbd",
  "key26": "3i2ypduzBwi4i9gv9RSSXbrc376Zb1DAWm7ejb2cB9nYprJ8sxL58p2vdxNioxKNSNT9YwqHGwQZ2Te3E4GPTvgx",
  "key27": "21BxKHX6BxSkwSo71LBE4UypT3vib5nWRos8w3FSXPve7B1NRx6xQqYXqjRhgD6F89MbhuTX3qDqerH3tZ5ANLfd",
  "key28": "2iuPZ9Bme6kzEyBYi35S4pFzTb2nhwHcAK8RXWtvk91f7xMK36s3oxb9RWvTim4qLc79YDPAL72rQhZymD4wP8hD",
  "key29": "4x5G228GowTquksCpUbbEksH31PpxvPWegNskJoeSCxP9fpbWzW2gnCX1mUFFQgws1ezV5EwJ9uaHmL8b4w9Q4Hm"
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
