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
    "47bBhYXpMpHmdR59M3WyHJKYS4mmNVenFjqnWYHDCdDLFsDAXUBpRVyD3vhakQwMMhN3fLbP8Aw1uy3Sih3wHMGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mWJot1yhV66sHWBxE63AYkZQuv9fmhCdDsnU3SoertdCDF369HuYcnbMTn1HMYKQa5m3W4UcxgY9WbZUPKyd2M5",
  "key1": "nHdvRbxpqUYmnWjRTc2Rwfze2L6kLHXH8Sjr7vwFPVsqLSymzPsbfMHiGuZ7dT4JTJp1zuoG43ibcaG6HDsg964",
  "key2": "3AMiAGrj5q8cafhv3STnztpNHduvjvsHHhh7G9Ged9YQ9Yp2dXisZcYXYvKpEenT8Jsc48iyR8jcnbihAwFUWQJJ",
  "key3": "2BZp4cCs3iBQsPKmYjiEfTLhQnfnv71xN9mrc3wNY6TNBes2XvAjeZkLfMb9dBwpTiePqEvckmmdYHdvhso7fPi7",
  "key4": "2q8KqQCjmeQck9RfuATnu6S4dxzpEqmQTqBKNWYjJVvGnRKmEqim1f7P4WUcKNR9u6S9f6ctFBPT6UysfLxTrfmv",
  "key5": "27Ak6UQrMtDEG4rcwWR9vYWC4hBffFwNCEK7Wd12wmwcYNM69yJUEueB7s8CkSHV8oay76MgncQspH622m6wiNm2",
  "key6": "4CJVfdej21H9FKbFG5B1GJm2TSqLtphJzX3TYTUhhmVqJK5snaVormw7NmkPvcUpm74yb1ncYBv39ok1Yzxu27RJ",
  "key7": "4qPg9aebfEEfogvDvmSnYo1QJGKsmsjvtPRwRseWvEiAkRiVgza5BiqRYHR9myHFXLtRsR1z8N3xV7qJKXPpag47",
  "key8": "63UkbsRE1h313LYkfCvQV3UbfZL2TqKSviVSmNqNgKFyiyy7k1nC9Z1fj44QeWiwVft3NWoy2kEUuCUHNn9YCwE4",
  "key9": "54RwNVxN2RwecQwU485AV7BGEx32YvxpnkX5sXRHUBDZW3yBe5MFnCtkDM4mhCfMepwvvEAnSrUaLgu8eZgbnNnZ",
  "key10": "nEtNgAoEEqLwUGDzFa7pNG5F54uTi4SETesXoNDkvqFrst8cbBdJd5szEGSNtriazM2Yd9Gcs4LaTJJj2fM5Vvz",
  "key11": "3x7HEpAqQ5BxTQStcVvAgNMztYXQ1u3yyczb46XAetgj2ZziAuxCB1Fjwba1sbEcrZUzycqFpsMfwPnT376ebT4n",
  "key12": "3oXCTJKPTozxtJw6JF8JDaTrw8gv83uxLwJvmfj6DQY3Ejy86zRXULdTwByNt7AG8qryBgdLc66M38qeaR1P8FrY",
  "key13": "5Ss7PAn9kU4LEktq38HoL2LHH7XtaU6PbfpY9Gy2UtyejFxDaeaYNi3heZ9VLMY7Vd5EpfGu3wxMrtX45E1Wpzgj",
  "key14": "4mMh7GgZECpKUgPjr6neABQzbxhs68F4WgpswMqgCJFxoDYXLTbvTa1pYLfvkpmvyFm3m48jNxnCnRq9QDivu4UE",
  "key15": "5yj19SuaYZvZHQxWMyixEXL8bchq4q2B6TCk3pyYhhvMWuCvCWFi4fHiap6yLhCjiM1Qsw7VL9nWaP2P6m913vHM",
  "key16": "64SEA1gPXZzfUbmdvJXRATL8TRuTZ4Ltjc2PWbi2fabFTkMNhnMLvLoF6HzAYNWEbNW6bhDHdriDbxMiBk42pmwf",
  "key17": "5gUrNtPmH2sXaSVx1T2AJsa1BHfsuwVxkQTHres3jfi52GjLavQrTfcdZr4KHuyhWnt9HRA6RbNLXr96pCKVFSKA",
  "key18": "36t66MZ1R2mMKG6oopGvp6vfM7zvvZvzFTgaauLnJnTLnEmbfRLZ9KDMafxdXYpWRe8ZxqBB3oLF78hcod6q3Zo",
  "key19": "2wYMphgW3gm5ddDi5oYRK6zUKF2VvBKVvQ7powiR4so37T243wz6ct4aSx6hFFktMST4AksBQneNjPGokjFeuHdW",
  "key20": "2ZxQ6dmudk983shUPW5bjfr2uJdnHmirtUS2JzKKjQmp6GAXvhcr5rj9kzWgH5Eor4kNRehP2qNw9WpejNRBX7tv",
  "key21": "521kqakNDPnwLoeFYUT8VfFAbHogZwdr28QodMMoFjPQqqeBwpeaLK98WizHb4i5WDBpzHBxCdvk9QkC8jzBi8gM",
  "key22": "4bb2fzgHt5dD7E7waFBr8ZkjgDBgZmUyVr69QqKWQPiGANrTi18ZK8CcVjZem1GbKxjyFFCXzdoQkCz26xtQpMQy",
  "key23": "4iQwdBVviP2bNmNMFqyGJfqDPH8UGkkgBCXLLyrSbbCSfq5zH6k5MRCXyefGaW4T8UJFi5EUwHCLMEkJAyDKjrix",
  "key24": "5CeMQ74gpbadrxx7sQp99SF8QBqNhLS7u1wPSZCWL22Vi4dbT1FRvbkinrs9Jps6M1gjYfQpKbNyLm3BFUVphT82",
  "key25": "tarFmUiLUhMVFgy7uNTqG7xfxBbJ5QeS2RZwXc5x4DbE3ehdV8ufBfy5FCpbHJ2TiK2BUrg6PMmzvjNdEoBZeMV",
  "key26": "4XWoSr4ZyXq8p69s3vXMfwfUHrBXo25XHVQo5PDxichYr5xN5e5Fq2rSDu1BNVADLFQLZwcPCTA3B4TL3fEKdj4f",
  "key27": "61ZZgAqoc15j74ppcgwtnnAgh554pTkFReV7BYu4z4CX74To8DRQE6sSsPTmuGsBAtTMTARZnZauFVFGYBHXqXNq",
  "key28": "4Kzv5urfVh3rQZ1CgT7cX3abbkRWNZrVBwCGKoxT3Njfp9NSX3gXrQ5RAgpMtvSGjXZUSUiqjgL7u86jUWDM9g5K",
  "key29": "3DBsDc3U977K4xHvTPxRPzJqDkykpJfUrbXRRusnxcojZVuVZMNkBNLD8f9u47AAHrt6df1Cqrs4hMnPSdJf2G9j",
  "key30": "29ZdoAe1CnG5FJygXAfb6V5YhqWWa3HsKNAojo26YM2r4BiP3ZkqZRmdFp7c93DsUZPU9rcHt3RBcrswwTs5GhDC",
  "key31": "2qW4HRoTDkRQKDYVmWN53bdE2XuB1PL8641Jk7vvxpn2CdCQQpudQKDUQC2PyMBEL8sweqUBooiCYt96dbLqn9Er",
  "key32": "4mosx4GsT9QBfpnALz1cVaW1iJhmMvAn4sxutnLDtRFbwdY5Jh5FXLyJgig2oQgSFqJRVwkSJzSZchcVVRdvuWoF",
  "key33": "5umY65U8ajy4rXLGUiDmLhWNb8FyqCK8EPgENwQAWHiJsoAC3pTCdZLGQt1s5e6zPCfXJtkhRQwzsgSVEcbNXPRJ",
  "key34": "3oQxH2Y6NEC7FiNNHqX8UYgVRRGSWqqSHVcdVM8po8TkYyEmHgXEXA2g7a9U64sAQ7bcy4cUzMrDTHrBPTYVbraE",
  "key35": "4TWRvwHcFseCymJAGEjTNx5jbE6rvpsH7Y48HHT6gieYC38J4hNFBNyPbCtReHQkHAqHgfgMhfqFGSTqQSWcsuMZ",
  "key36": "49to7gNKz8ATg67CJakuPBaWbNpL7d2tPCLRn9LtwxCavYPMhnSduP4ovPvLCZQvhYZhaXG3CVX6mtiVYAD8A71N",
  "key37": "5rhS3TpbfeyfMYqrEuGkzBM3fWRtDgMoNehAyGCDWE1Ejjyj2XZ83g72VFWdSPw8gkVhbZJqE6BBBybQEYLWVC87",
  "key38": "2dm9EfWL5k9U3EYHx52GgR92YY1JpNhyFdNUyXN3xc4quRP2ZyUoYnr11wUG9cZJpHGFdzkxC4FdXpJLkuLAosDD",
  "key39": "oE4QeXMe1N7JG8UUJWfZercYTwEEbfBgxkBqX2kxehdY8FZi5XfgMSXie4D1Q3LFtA2U4u2eBqXpXbBn7E21AK7",
  "key40": "3yK1UNtJyT65D5xHVvdJkQqviH6NH9WkucS5dqEyiwMJ6HA9uWjcvPGAxmzeBLPN6XCZjuQo2NubtxjF6J6hGzR2"
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
