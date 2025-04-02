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
    "5fyquvYM1Cp2eLC9wwJyZXdvwT82zSyfLKky8vvAb3AFgJru4twyV7XtUm4c3BeUpfAnSqNc2Y2JMwh9YJk4zSC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRqGs3jVzD84j4Lbaf8ND5i2hdYRCw6AtidGpy7NasA6SFCoQKiraoFYCjtDhtj7SXb6UB6yX9M9Ex62mzZXaNC",
  "key1": "3h8E3CwCaHcjdgESd5rmwTSBXiAfAYArspghZ8DzSoUXzoxQTQu7oed1oP8EZMEvfMCf9jGyMh7FKEyEeenfuigo",
  "key2": "4u2mbuVwYD4wQ7EjWrstcJijLFUULua6bHv2EKhHRaxewQTTLtHuWACfpu5RYCk6fEAbPmcTSwPVtrPUhKxaFA5S",
  "key3": "4s6C4x9tdnMqdhz2myN3o1DrSsR8tMEjLG8wZesrCeuaCN2xFeB7zS8ZSKBMSAJWZBV6JPDvxRWd8vwUdmWsG2ZJ",
  "key4": "5LG3ehGAdxPXWuSu8gZxui12aSU2VhifTrEzWxmTBj1idwTT1N7QY65szK7mXsV4ecdAdPrM91f52HtCHGVVMGhF",
  "key5": "4p984xGKDUVj9ej1GAX3RF8SrdZ5dRGqbhhc5VoxBGp69p4ube4P3kb4L2he1vRdL32bAxe6iJnzYPVLdDy4bdy7",
  "key6": "3gqBopttpbGzCRMoweXNGnVSjZBddU3ss2iWhJq9NF667Q6Hy5mMth1uYn8xcoGbvBQdTJr6Dvd9g1vbPLcMyCat",
  "key7": "4vupQf3hC7C8yCSnCUtSnKxN5P9HSdmQqMogcgqDkDSs9aHfwY2u8bgTbCqk1nozJ3iPe4earVf3Sh9KHsobY1XP",
  "key8": "5AyW3btJXiCmawQihTSmpf1TQgVeewBXe1yAhqRasUSS1hxpkFhCn6LWTwisWXPNtLyudP6ApfZSmXwPNgTQE8VD",
  "key9": "5ow7xJVHXYKDAkEG9kBh2EPG8eWhGianoUdCDusLdQeN1VqGWQbbmH29QpGDhdXGzPqPskx2U1gWe84Q8Ey374pn",
  "key10": "5RSjzzJbZ8uEyQ6UmpmegYVmkzoMKUfsWCa1D1vL1aDmRLLALQSiUC7d9rQLx2fY9ce5am31TKVTcaTP6JWenLkW",
  "key11": "mDK6qeqLDzF9iqit1LkcE4AzrU3SixRXsKFYraikrB4qD219G6tyKXsKSiabAX9dUcgAnNKrpirThig7g7AoQyW",
  "key12": "2oTaZ9jar97Z3GGBu3sGMXiE88U7xm9LLh9gvNJGHqZPycFyF518urE3FsiP9KUkHdZMYrRX79NVdJa2oVgPPuJb",
  "key13": "2ME8qdzaAy9vwZz2PDZXNYNfK1Xyt8NAPwf5A7wQR449HVjKuaab4o7Yf11gJXmSVMNrrXTQfpNBUhqHTimqTqyz",
  "key14": "5uerHV34zqTwvD4QmvkhXxv8bDCRYzDAY13U9Egoqv1Ty29P3v1rLfMHqZbh37ATM8tDCnjyfoJ1bbKmU54SsGm4",
  "key15": "34ojmipewbLBKfEPkmR3RdqNqr3ofbcLHygVJeS3xjNsnpEKztE8gTRtVNCxUJgB57Zr8k2kHT6FuJKut1JXg7iN",
  "key16": "536Vw1szkj1AzPSkq4sSP4oFACYcbMEYXuPUsLoa5EQ74q7huzBkS2dJkQWMp3AtXjmGj9xro3Me92ruez9wz9fg",
  "key17": "2w4CypeJE8BUjKi9mVpC559yYJE81TYC9TAsE6sQprB5krpDPV9L1cMvQf4GuEaC7Qc9xC4c48SkUYPARCcfqSoF",
  "key18": "3MqTvW7qhdPfGmSs1UY3woWXmSa2GefVDB3CatreAMWKXoHLFu5L9dLAgnyPLLttfVDkjibWpaWWDnh7s4D7NVNo",
  "key19": "2pXCsTpVvdXSo5bn6F5tmkKGGPxx3HdG3GTnL8nVE7Dtyixn39Y4NHkMiYtxB1CgihvGGM6DaRhHyUCucEDiXyFJ",
  "key20": "4nLSDwt4GyfVte37K1sganehC3mDNUH2YWpncAJk8ABstGLieWnpaaLxMhkU8DPLofKES3mj6VCrmxRMRULxpHe8",
  "key21": "5HbyFMgr7xbonmkCJcBDaMH7AXfNrgs2KJ5WMHYyfCy9J1Z2jj2HY5t8ExMN52jSkeDGam1FxKK7dnDLsJ3mdZeH",
  "key22": "4odDhK61iM5jQeUk7rPRW2b3PEwkBk7vhHa1JuBSGwfSurSZkaGC7W5caTewLuh9W2j7GMYXHbkFdC9dzD5RvVix",
  "key23": "5BuaNuYGsmYNYhD8zTcs8ADYxsKjRjfuLuaPpeGScmqR69iM5APwjqPcVKsrBiavcpGRkhDSizXi6VqkzEc8CeaU",
  "key24": "2kPxeVXtpBAfcymbc3RQ5ZcYvX5DCdA2fPgeLQUUf7wZbBCMGzwnjeLntwrJdc63XtuqRhuHUwVf8dnP4q1ENJUZ",
  "key25": "5H7eoviScKCDqSFBw32Cb4LJsZiVHZr8p5rR7qXrQhjCQTk2NWaxoKKTCA743W6ruxmn2gYb64VAz4X8o3MVp6qS",
  "key26": "2PndX4Y6bkJ74VbPWNeWGoo1PFZF5xBwxpAd27dafWj7bxHPWfMjykipbFkxgeWN5m68c5zUHWmi2Nd15PbpRr5s",
  "key27": "WMrqf7Kqd61yYQ8pXqrzmQMcuGRR2AiFr6vbnj819NAJT5aNPv8m3s2N2JNDF3Bvw2oQnztcB7TmXu9ehrzs99K",
  "key28": "4N8hP7PbBSiXbx4TFLR1Lw1a82KYoFH5os9ifCtFWxwxocrbStm34Aw4uwY4W3sxEt3Avo7xEjbrGJ9AnZwQwMzb",
  "key29": "UfYL6WriJWEAtYodiV4tmkLwB6faqmcnKGwPbjmFdJ8zNcA97UfqiHKXBLweeWenHMJtGt7sn166Zcsm6yjj8t7",
  "key30": "58EZyL4MtrHviR93Yv5ZbwC2WgkG6UuC3uA8Nq4FfLUrk3J1BwbcH8zsygde1TJqvKfdiNX4tNnp38eGWMFt1R65",
  "key31": "5Vbh2FahSPBjWpMTYaKpuyzsjupmqFXVsc9MG2xhnHKFbV6MLXPEPw1dnuCkTJF4ETRMjjDsXLtEXewaMUci48su",
  "key32": "4YebHsMmmB6qhqaHRBF6U4eN3Zw1jFtLcDKxWQ7M75E47Goj29oXpv7qoREdN8QADG9V1SJ4ZRdNAksVMqMVsU2e",
  "key33": "4fwcdAiavP8kwtaVaKp8wMz5dSaE734ca2tMoHnpeFBsKQgGCynr6mxDsn1cYosUTPg4rqtuDACvuDW8iKdmPGdb",
  "key34": "4RbtVXV27tbKvKNounYrHoX1Rhdb4RCetRYUVqV873ixoBM891E7HXDsp1FPp9hLTU3FHeztd4dri1k87LHvXVZn",
  "key35": "Y15StPH64ETG422xx3d2UiuFcqvbYNSEKYiAdagncpJiC1zZDoV2CrYu2CVfZ5RXoGFgQbYu42etrvGCMSfXhqi",
  "key36": "2BPsvxQgWAiFB9hiY7sg8JDpCEDxqqH612Ray5VMqjSKdkvL7uiN4zeuzBSR9cbrRioRZhoJxqnHRYd84jskC434",
  "key37": "5HgPVzF9ynTeT8TGicBHcSfdW11zhKJFQimWcPj9JNTr89LTnTVwuhzvCjtGCw8CnAvQqEh6AHa6yBNRfgVfs1Qb",
  "key38": "2CKwyxR8TVTwS3sZBADsqCvip9votpu9Co2UP7ZpYa1HzC9T7AHJCoCvE17wc6zMisj2YTXASxZ2NHK9tu7PyVJB",
  "key39": "4mEfFTfKwboVqDaCP8WhVFLLQZUCHtCXEd5h6X9FtgQ9HvASjx6mukRCT63HNHNJuXNTBCJ4HtH3URFb8ysURojJ"
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
