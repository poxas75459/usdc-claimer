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
    "ZQje9SDf6HKQYcQEdJquMTgSPdVJeJK7XscAGVhdbUk1n43VJFReibAt3BoPDsgXXBBgHiy36Y5xezapiBEJY21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTPgUTnYqzoPJ6vTWYopkTYmikF4MW34YQSEDDqu51vq8KEnR3JJVNPBvVCAnjwpku1DzGzYvBavYAwE2KvAgLp",
  "key1": "3AonEuZfoF5r157WaCYbES8wdJ5NKDdYF5M5CiqqvDPLn5wFAKgPaGKCTwzz7FkEmpnes2tEDG3HodC1CHEfkcT2",
  "key2": "5Fug1Zz8bCBTYsg7H8cHZ8L6ZRjGfsDTNsoPr45NLCENwxWuj8rFwW7eada5V1EojBeLDoY58B1jcE3JsSeqFrhT",
  "key3": "4kaLtuYPFuf72N157p3REb8FfJEPXFa86NvJTn7aDWyU17mSWSzuB19i92QsidX66AdrPiQtCNnqTkj45c366kD4",
  "key4": "5UitTwDdcdZfwLKKJRkVvY9AzB6t7ejmHFHyW62evc6ns97DVpzJHdbnYaTDA5ffG7HspofBnDaUbtbhxgT6TQUi",
  "key5": "ynkhHx2hANN2Y4RASfVvA1UmEX75DaHeTiHLdTke9yLFxHUUye85TaCJ73zeARySARZAsdEj4oABXR2ZwFfo1v8",
  "key6": "4ANYgd4kxKMog2oHfrFbesvxbUT58MuMtxV3dLgbZj3Cz3hJZMTVGH6z89Kh3J4x6jzbe7UqLy1xW45VW9LavPEU",
  "key7": "2taypgzMQNHooFRyHp3HexpHkFRxd7fw1QuYYqjSKDsL57jGfsvejNfB8mJtswKJzqnKk59AJNoFz5saPPDrai4g",
  "key8": "2yjX9NXEhcqE26b2xqzSQWGP1Bh9jvyozj9CfvdEJynyKkKj2iJ7vKDkd1ADoX4YN6JCjnS6wQ1tv4V8drtjGaeh",
  "key9": "cvT1huRC3k3xyehvbFVYRij2wBGN6SJzijRk4rzkhWfX2uRnw1VAKuRqbdGoRqZq7dnKvv4tUN5RC7xxXLbQpyP",
  "key10": "2ARGkuaWeG5LUop7R9V57eAEN3vH3Pmd8E7Pgw32Z993EDf1TgHLJkkYiPhQsmzvck7yt6UPbMAgJChdiuy1QCSt",
  "key11": "SDvdnh7qNHWDYMYDAaUqi7MEgsangvEJUMWuBdLBTY9AmKiJ3Xz5mzrJ1YB2gCCYVVgwnbZF6bV73nR3FUAxFTU",
  "key12": "3kT7qN3QoaCS9fydYQYGC9SnUfzrgukkAt3hPX1kN5QC63XRzfjf5fB9AxhPFX9tehbDnHaZp9RCTEHFtFSwHHch",
  "key13": "2zEqPp9QeTCzmxnL2rbBrf2mVzNuD6GtmPNvPfTe28e5M3vKY1SkanfwNtFwQKYn5yTGEuc2W42ckAQm3UADjAHh",
  "key14": "2wZVRHBMybDW2MAjRjdP1kQnaRGXyKBkKD8mBNeRNoU1fXC2rvjJKWadXXmAyjnhD62y7pYjogc3JTzDc7NWh23j",
  "key15": "89V3VXgEJyRbYQYsEnNH1wjSrvMHXFATn24MRV3C4wuu1sBnZRHKXVf4zywxkr43iSzRbxY1VMr89UPwaN7cqqr",
  "key16": "YJpDXV2v58ZriLFb5hjHCoHJCPnyzFTEYfe9bRYV38QZc9mU9h3vUVrxdpeaiFqev2f3uhiko2nTBUbF5QLqfdQ",
  "key17": "2iF6wPjuSoRF9ebaN5LHAxHQkAJMu3YjUpWZMqf1gXRrEjjW1Tug3a2mpQmjVd5tnSUVnFDCU76xkgVBxVNP5Zrb",
  "key18": "ekBLiXz5QfZvAJs6bcUysYBHfwQhpPAqaFv5NMGs8j4RgzjvuEqYx1nK2PtB5k3wcztbWfZNZQVgZeDvSVXFkn9",
  "key19": "37MTpew7PdT8LMtcD4J8wBzyYtU8Gjh7hikJCFuYw7q43gdrg2ZTp1K2oozYP55aYMAuhALhXXXzFfbhZqJsZ99C",
  "key20": "4PTfCuFz8ppepHP9RL63dQPh2AyjtAWVJKeq8oETrDbLQ5GpQujKvpJ8evjwSJMYvq5h5Whk493Qzdr2mQv6aLhi",
  "key21": "3GsaEqi1a8ZrpQqG5yf37MXu2fnAaQnNNPwDNdA9iuwGCv3ky5Ptgmtb9ahyeqqpXpryu3SUb6pPxfJHTJqhiWJY",
  "key22": "5os5WYuswCjmCxJKybuPxXuvQ8Qdw2rmxMm63Fwzwns4Rg7Rgtnfs7GhetN9NK9KVm15BFPXnL5dvqF8maksQBCR",
  "key23": "3oquhqtd2uaTUqbjE83QRQk7Up6tUkuyV9jwNt7Bh3Ng3ANoLpPfyw7CP2nEtaBdUHc5Q4ixNj57NA36kSm9HQM4",
  "key24": "2HnmBvoNVqcoxFG19ySeeKV1vEac7syJZLi2st5yopm9tw9AhugMGoz87crB1bkwbmqoHmc3BVcJSnsvUTCDDM4Z",
  "key25": "33m2ohSSAnXwM7XHQb3S9FovA4BvdevtGQvaLo3ALMAq81scuSoEkQ5qmBLmySDDmd9daegKqCpu3CEDP7pt4LTA",
  "key26": "w7aWk8aCXdPhAVaCMhTVyz2syN6gEnRfRTt3aDKPZFQDXC67v2sCXHqwx78UW6oj38NKDe61uDvpoV2UdvAxuPN",
  "key27": "np5dWDDFynpZzhfGv8bijKcAkMkaG8RZmnPtCy3NvVKiLkAqECkAjLRxzKx8RvqtnuJJ53ZLnE3YqozF5DwNvm1",
  "key28": "3UKDgXn2xRPTfX4gRSBaFtmzv9xjtw1wmMDBf4gL5T9kmeuCpyQF7EvCZTXqvZpbuin5HfPfbWTkx5k6fVF5KLhP",
  "key29": "35nq15BLoFTxwwYbqMdwatgUWLxp53hDYu5JY1bTuwDSm7NYLNxTYjR5zjCnc5e8U1iVguiG6jvu29FmZzi7ZgbR",
  "key30": "4J6hFVyjxPZoRPQNAb27V9CdtEkTo4JucEF1FMPQwPi8eo9MpCmDfxnUGzh9sSofswv2nHTg8BiH62ZGoS1LH1Ek",
  "key31": "526wVaq9xAF4VrwfqCWY5LAH3eF5tTmtwxgRpXmNwmQYejYH3pUX2kdMUzvd1tD8NoFWxf5XiwV2E7PXEk4WMZmH",
  "key32": "3zabimeZnZ7p8CheEzzjTvfNXGMh1hHqcqccArkAkTwdfXqa69hJwTYoZ9V1WzUySC3pSR73FWjgYzXnHESccYWV",
  "key33": "5VUWf1vyXPQr285R7c6AznQZTXR8rTddHjqyaJGxhR1VEoGB1EcnpB457MxNfFHD22GYd5B2mESF2MRZhzU7Hhen",
  "key34": "4DV3YgeXfuboUb8igK2YJ3c8L57tJXdQWvhdc39uX6AXyKjjEfeXCw3s2d1KVZs5RszUS7rTq6km7gvYETdYDKxr",
  "key35": "v9yoCderMyw7AYLgPYNfmDQN5x8EDu9M3fXyU24313Sbej8emaUnJ6UA9WPoM3bXLj9v4EYPucD2JspNw6NRLWo",
  "key36": "biZGJbHBKYTQdtxaHkZqg7ecTKUwvm4FoUAW9ySpVy926oEWMTs17Xewa5v3mKWA4ZiggNBZAGff3JDWiYMRUbi",
  "key37": "zQbR6F1DRnkrraGC3ZrcnimCccwKacX6nkg6tq6UfCmLSumJ5ti4Pv4Tgou92MP6U3R9SXpzJHN2Yh9jxCqRm2C",
  "key38": "7NBoLRbMNKx3qi2UB9vuiNbKw9Zc4RwKCZ4R4z7rEgJgjKBVMYQFCMHd3hdo8RS46b4Qjc96LKrV4pjsP7Y9UWA",
  "key39": "FK4VBtebT6C6hrtHmp1RwqN6fk38BvDKEsAwVT9swCvmxFf35qBQHm3tw2ka7kfyRU6TYy75PNPNPt72iXpZU5p",
  "key40": "29wAWogfDTFudWN6jGsz2EepvkKRtggzbJXsqqzFdELBzYNKNKUsNGgjsKcizu24oCvLyio5y9mK3FL7peaitt11",
  "key41": "5LsYHR8e9ADpenUoqBTYZsfoKJAaijmKzVioSnjfaHTqvs2TMuwSomTzDiBhxxmYXyArxw5B1zi57qnN9bL2iZSG",
  "key42": "5WLLP3R8prHMBFKv8HVUQbiZ8CxAX59yg3GcJZdUqgwamp6uAj1okD97ezQ6b57vj4NEtKg4mXXbZZSwhYFHJUXV",
  "key43": "5jZT3on4CxuaavR4jMCFANmuGDJEUbQYxUrP1jFavhMvm3dJULuj3RTaBDHsBgdU6Mzj2enavaHRKhjFmprbeVNo",
  "key44": "4oaVFj4kgbCbJtZXqTEFKzNC8aHBE7sZLQCUozeHLBzMvHF7GteqEFMMW6SfGkNUckpTK5W12Zxf2LxdH6qfhwR2",
  "key45": "4oghufhects2ykH1dJtv8fowEUiLn72KdpvWUUWtwBcVim7mxsU58eF5uE6htHtSZACNApcmDkMxC2b85LkSUZvu",
  "key46": "2pm8qpzYXNf9HueNBE8keX3bkRwjMK4TZqNJkrRxnpdUXb6yCt3sv8MAcyQ6ieZH1BCqtSZPF4r5sfc4xb9KDmZf"
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
