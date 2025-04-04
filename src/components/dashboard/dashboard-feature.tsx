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
    "5DcRD9BJgVLujWEQfVHAgjeSwMRgrHhhtL5hiVDHKQ71ToJqKj5gAS8EPpE5bbRR6R3U7k3V5wqPgnbdEPjjiia1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHKQVwwwSEM7CZEoKD4WcAQYfu81BXTA31b9xQoywA7Cxyucf4BhnUoWMrA1xSgw1UNZYoCoPV1KKxYNSpT1AE5",
  "key1": "3YFNE5zRggUWAoJREhDrtoxd6Es6PwZFXNRLuazVhtebPgMaiPvQPrZVppdxwvRhQnEbLrxM66ALebUfJTtPhf5t",
  "key2": "4fRWQGNvow2BxQcRy2UpdHkCVwskwJ8xymKdBUYjxhHF1v7pcmUoP84VbRXH5jB7KMYi1rnDVH9Jk9tmfVzbPouq",
  "key3": "32mDdGjQcCxC9sub4VDWnx1rkVLFF9aXgXXeY1fYSLmFTXm9GArSVURRJhAVJLsjAKN8LngtHrmZeRf4cUb8fD9Q",
  "key4": "4Chd8WMbrNPRQ7gjdsuSqjSTnvEePZnBCExLa3fxUCrqeM4JyaupssXa7fsRqmXTtYox6zURwkVPZbT34ABWaieQ",
  "key5": "42f5666DZp8YJw3Rbp76r1C9Dy5ZLHfHDk27LvxRbSWLVYTuobUJn95otXyC6wVoabB3ULz6gavabZj6yT98rC5m",
  "key6": "4yXMEG4nxtCNqJPAX7kvE3SeaQu3ZeXUmn618JLTdqS6KCFAYPCRopJRVZv6To26xRtGhyzRETbMyF829Y3hm4Ci",
  "key7": "3izgoUS1gFwyn4YrSqPswTPWucTNvmtcfjY8KqUKvq8ojZTuD5d29E2MbJtyovDVRE7kHXtNZN7DYd5MLF8FhVak",
  "key8": "5WBuVdMvYGJakRNi4g5xhBfHeTXyEiKJVRsm9VkLsc18C9cs5LgbHag3gywAaGC63s9XLBGpRQpRuJQfYnkMYVSc",
  "key9": "hhvMq7ZkQkyVzjJFLXnKpkVQiacQnjbUn1WsdokEhS2bzACeFkffe54BWNoiyHUFFmmSYPuyZFGiMRUGYRncWbv",
  "key10": "3gNGat2gZ7jTsLVj7kmZgCT3teFDUbyJysFe63qyXBEQHzVjgGj2XjySmJnii46wniPAfieepS2ZidvRWCoi3WqE",
  "key11": "f9rnmk8cHWRgbkm6W8saV3sVN7oXoicXdxU2CaPfksvH1SPXLj4e19gk8A9v4k8X7gRJBuJtuV11LRHJUNG5d6S",
  "key12": "5KPxqZc6J1XNHnTYcRGv9WauM32YiDxp8mjbRNLodqRBo8wBvT3ATJNv7YQ9EB6DK7cbRn6aHGyZUF1ShtRmK5Wc",
  "key13": "qgY8SsRevdKupBzhT7yJyrjFHSuUGq975kV9aBN5M3CbZqXE5fKkZ1NmE532THoKENCxznnwV8uTtpiRgKBHZvz",
  "key14": "3AT2X7U1wXHW7EvobmUovJQoQYbGqWNGRtjW2W8jiqn6CC7VMLSjGuqH4qVQAYXQ2sCHcig8TBokw4dZnMojdL4h",
  "key15": "3HpVmrbs3HeKMPX49PiwyoQKzJ97FrPnTL7AazCQSmWzDg4Yh8FbDkgY3Yrp9AhFbQMd29T16zW88DqK3ZvKM8e1",
  "key16": "cGyBHnQb1qjhWZYhAkvCEpXpL2Ktsbn1VoeJGhMt64A8y7BVEdPoyELViKWkLTmVwm47VHsqWocyCVnAbgyARAX",
  "key17": "36vu9bvLACgUsHve8oUzQPUZnNBm4QBfDwZFsw4BAxnqnZ6uAcJ3oTkWCJq8m9de8wtKC3pVwDKZsU91qFbUipDx",
  "key18": "5SKTMEMNwFbc4EJkywweGr2kK8ZsPZ4MR1PepVx4Y2omBC42XXndKzB1eL4Vg12yKvLbtmqKwDMb5sekLktpHZVm",
  "key19": "4YkByCofQFFW1NABDvBK6ajhi1ynyrDSaDV42vtztoD7DLY1EtPaw6uxq6iQ5gTMqkgvMyX28RJBbp9u6XZo1dBk",
  "key20": "2X9J8op7dwwE7CWCitsjjcSEna4b9ufpsfAvgzrRPcCZjpWVbZqy5au7Z9zd91Rn4c7Xh4Myue1CpMmJ14osM77v",
  "key21": "4Nyb4VztSBVfviVZ9hSAjkdoHmqBstnNrP6z6SJBn8cF3AnHu2QozN3cxikQqAwBCpiK6VhiNpXSfjEtbYZJsfzp",
  "key22": "ARubbTDUDm7skhSUQ5TUcyvw8W9H68e3sTB8LzDS82UwBseKcFHC1cGbVfSPEuJwwmU6EcohYPbPdHPiWX7j3rQ",
  "key23": "3su1aSx643F8BQaPZUuBDDxuA4AnrwD1ShLEtbtF98nUbs3zy617qwFqu3tfdWjw58ds7JUFSNzfAeRENWJUj8HF",
  "key24": "3BLP961jQ5PW9nD3cWFNKwMUSfmVb5JSkqUusj9RKyhoJNq2eZ1mhwMjTVwq1nBX5X589AVk9w9wPaXepSdTTMw3",
  "key25": "45vAAPHHsJZnzbkVk6mFTgQKNKcNCaADPArFP1AEqKHUekgL9DwuPBXN77HUphQH6WJrqywWmnyNuaspRgVwUQEZ",
  "key26": "3jt79Jc1cdXZBLkZpHjbFMQY9ti65G9bR27j4Rj8WkDWLGUUDpxtVaUn4ZKbGHCTAmzYhWjTdjGX2KQpuPKukmt6",
  "key27": "fZYQnGLBEBn3N3xv6km69TDy9aAjDyBKAwVrHQUcqwsEuCgnAHchhfMMowvoVnPVYc9CKCgxMMrxvTkWLkM5fSf",
  "key28": "4m1A4DqQCgqQ5RvghrcxVnjjENvkFbnmKm8UNxinCpjNdnXokk2fwkY3HJNVBvBG5uQ2Rw9dwXiPKWchRDaqXtN",
  "key29": "3T5ggVynbSsGxvyoQf2vU234sR7DA1QQuCRCkWbx5BAMLLw6AmS6Hgk3zrFcwSwhkitCBUojaoonrAK6wsTDgAc5",
  "key30": "4Y3euKYxvyfF7vCvuRixLeaLKYHYgEtTMFJqA8YMeZo7iJxa5XDMCMQiERk3ERnfr7VEN57wpQkZY6QgRFNXcePA",
  "key31": "Rbpn8jsxeKjN9ptbstjJzsRi3MiZQD28w3qB4ZFF2U5cEn5473xC5dEExuSfNKkobMC9uMnT1dntTYSLQhu2Fr5",
  "key32": "2LPHyNecEmUDn4HyaxGrfi7MPT1JftKGW8nrUBbcgM9SWPWB2FBWejcwsoNWSfcX4aNxe48V2UY2pEBPpkKDAoZY",
  "key33": "2ijK9FzpJvGcFQPhFZ4UUuuxxBxGHzdRGGea3B9zpLEcTeRQEkB9zVzFTWD7GMdSadqN5UcZegp6WLFj5ewAoh9R",
  "key34": "33Qk2EBE8jseGkS4jqmqRxCGPGGjEwwq23CrG1mf4L3peA18pvJsyxdKgPCcoy5KwQw4tt3JP6amUfswq5geFVLn",
  "key35": "4Q1dwM8dCWvgqKx4wieB5nBqBkYaiYxRATUiq4G76TMcyiE22gaMBZ2KkGmzCagQ3PAmpsDoxumn42S8LuC9nH9h",
  "key36": "vsdP2MVdzNkRB8kckUmSmx1cYtMeAbQrbQHnqQc4S4anXZkH6Uut6jNquaB1YDrQpx3pxDorKr7v9YChQR6nWCd",
  "key37": "3sz2RTCJzo7f767Gncb3XrvCCK4AyXp4RxBttiFyscvhn9R8vUqrVYZFzogVEz2a43jS5qo9D7Gf3VUzwK8SA54o",
  "key38": "5iV7c5dd8RS8vjrqdiUVuodPteMN7LMY1JHvBKwWKL6v8qzzrbb8uHgXr9TJVjULwENXkDoqrow25cEqAwapwqpS",
  "key39": "4umcnDvzLm2JnTozXprXufyNXRvGD5PTx766iZzFdwCGZ4Qr7V9qCAwv9eKqGbEYB7WpxzbixNi4Go3vYtTtQxxB",
  "key40": "3TFGhovnS1gG8D3rcxqYszXr26wpvSugeMQ6uofsZ5pi1qUcoVF77ESbyLM6syx9DKBvAUHzGUiDoSmZJgxTG9KR",
  "key41": "4aww7BVN1tV5d21AfHLM5NPUPqM6HMHFMPhSUEeg8SPEoxY5sUrVmyoJofVR3w3dGVTK55YP2kYietDbwuW1SnSc",
  "key42": "4ujiCjm8gMYoXD1NixTe2Ps8QgwEL3JUmkjSH2KBUBZPePrUjTNB8QBgd9z5bqe6svzN19SfgMyarpCTna24E9B8",
  "key43": "4KogmuqdDbKWtPSgmMPY341N9D8WeR44eTLaVAA4XJMspRX9JAwhvfBkjPXh8S5t56TkgraiTwvpbhJXN7a3eNc7"
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
