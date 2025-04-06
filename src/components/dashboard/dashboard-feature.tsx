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
    "48u7foTtz3TFBCUGbWp4EEkdMGT7drSfEMw2V4rTKrKGnoGTvB2U7BZL72w3cRjRWpjqfan9FnJhEpHFqBcoCn4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ygp1LQNbakPLpDidQgWrxGJNdWeQFwHGn8t63Fc9vQ3iATmCDaqKjnCutWVqiEVLfDvSgPioeP99ax1ukhieuaG",
  "key1": "5XSaMxh5ZQj72yF59rwe3eDFBFZ6ihjwSN1wcPd8mw83vvS3gYPXTa9CATQJAYX2bbzDgwvQM4S5Linuii3Ykr1A",
  "key2": "2NuJMVPqTjkSmcdXModV6sm1FLHYCSeBNdpsPhoPLAmkRXawSQ9XiyLFLpwxRTbTUUMB1s8UcaNHADg8SwsXZmRC",
  "key3": "2qEnxdTRqw51jsRdSdUDWLiYY2b4ooY62WACsncRU5rhyxgxyz8Fej3EfNpLAKnDnHwDqxFzbWqvkjmCeXiWpwU",
  "key4": "2tNiKGkP8YPCwDbYgCCw4gZh4KDnGuijk2j6vytw7bviUu7kgdMAWFv8mKGXSqLwQAwW1Ugh8N7MxMgVRkgXdpkq",
  "key5": "4boTcYwAbqS3oWoSghrZNVBA2qubeu5o11sc1nDepMdWHixNwDfvzdSeJngZKFkbVxhHAHA4Z8GG7L37f5rn6YxT",
  "key6": "29PYXYuU1RRJKkDpryVgTsBZPGinN9BqBL8zn8aDQ1dBPfbJk9tbAxujwxavdYFHXuVNDvRAJKHGLRpozftde9i1",
  "key7": "63AsdzpM2RmBgXMR4ij6Tw9esqxsY3S5Lx2h6Rf5BicVvJ99Urm4hwBXimDTtuJ2xcMtwfB9uS33jqksPJBbVbbs",
  "key8": "39oywNV6YN1XeRe8npXUpB7wfgMnn7ELnrVUaSLPf31rYUyFHDMtemtXLruyZUM4xdi3tpzp3sSNthMDgFjQ7KYT",
  "key9": "2HCPjNjpVb7xHbxnYkLNESKN6gZYhPb1ewQJvcLqCrYEdkL7YYWuqv1hNWXV97w5JYTCtnux9qAZBFdma131GhLE",
  "key10": "3Ue85HnQz1t6d5U5LHDXBFNArP617Ay7VrKryoE269i8RjGxUJtrFhEcLHLsiMSfsQJ5wBRhziCmbr3eC945JvbV",
  "key11": "5G5qfpkFk1C6eX4Bt4gQv4rbT4VGumsMTeeJWiqX1HDez8asyTW8gSkyj14FcM518CuGyA3enity6Fjinmt3BM9n",
  "key12": "5hi6DZGS9orHoaD1MnQJHX9Gv2eHHfehb1Pu6tSUyrz8h7rn56mh6fHUGatFrS9PsVHUp278thruwUdEKZdzF8ZG",
  "key13": "4rGSZDbs96sza9YG63F6ew3byZxRdreiNoEB1QrBZSspM3Z4FjFCcvwJDx8pmQwEwqKNpqB5vqL8aFbqnScQYiRS",
  "key14": "hsZ7cSbPa2ZKKRPh9kE8a4UTqQyXKfLFtgqdsmauB43W5MWvkXr2yb9K1LpHahEPbhoNscL47n6XyGDXrKbXYAF",
  "key15": "3t2Sdw9VyeaDQK52R82XRLor7i6RQienZdA7tvqJPTcBQANSoXZPjehVRPY6yFRMS7r4B7H3ro1KS4MjudfhKL9P",
  "key16": "5CyqerCQr81gE6RcUSJsf5ydgbM4McXrfW3L3v38tp2xJenxvYDz5vbRRH3XEeh8muBCXnE5eSu34tracNenwof5",
  "key17": "3c3rGyWu2ei5bSLdp1M6QtfkanzLmGTj9SP3BoaaWHeM6RzBG1QH2dMfvqmWQz4nesm6k3e5g8av9x9WohZXgVBs",
  "key18": "4UmbLypCde5RKyi3ufydDAcsJ7ixVj41T4kfJN4NXm65r7ifr4PGB3m1jEPkE14rFZJQdfa2Ak6AwxBBRNHrzfdh",
  "key19": "DRyVkxTbC5ACnaNfn89sLVgFVdV7VmSMahuvqFhqxst2Bn3sY9fzzyjRUZwbEz13kdhsyx3LttAKGT4tkro97Lg",
  "key20": "cJ4ZMK6J4xgbjzeDZoj4XZHK4dBhSoEya67gbGomBQ5Vys5rEvcZc5ekbG38wvaJ3EziXFTWwASzNY5SoyjUNK4",
  "key21": "4yaWwidBdgTzS3kAyq6wSX6SeEG9XvLTaeuiw9eU2B1fStpoA6a7NbwGv8Xr3tKf7DbQ4i2t4Z5JcyHdixnFgeKx",
  "key22": "2zCQKvJAMyWUbuGw8A98HXYDNDAKhWiWsTnpFHonGiQjh2de4vJr4rXxWrKoHaZGY3wnZoBkXDUiei3Xkub9L4cS",
  "key23": "5GhVGRL6QreLq11s9P9uvhQNcrgdap1obsUZ2R1Rby4rHak44Vq4UbMWWeW2ctGrAQY1Tg9hihMAwivNfcQsrXVo",
  "key24": "5w468VHsH2u5btGZSnj2cpT8xme9S4tbXC8RsRVWHnnZjqJuq4gy11FXAEs3N7v2SreqpBTWcRarta2wrNfztRfR"
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
