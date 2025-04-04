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
    "53xHCk3cg2jEvY2ZYnRFKU1wkY3N3bpixjboJNknvLbVQHz9m2Gj37YjyP1nn35iAy3PmP4jvK4rZoC4kzMjqP1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lcenbgxoif55mAJdBc8wagPsRENG1DA9K9Upub5uji7jLTCEWUZGk3qZhgURU2cdFYJP5CfGrshT99f2xxzowLb",
  "key1": "3P3SbvtTG887oxXX9SME57qengkoEuQKRPV1R8YiuQHVaf31wai7DpF8vEAx98SrZxvNs9B7WYxStoCFJpqNChU5",
  "key2": "3aRJak1Layc8vXW1Lw3QLMd9xTkadXqxCkVMLSyUiKmRXv4BZNhmLnD7PsdtjCQzeekrX2ksd6sCPLDTVwSRfMx6",
  "key3": "34CwVinArbw2p3wpv57hhdvKK9TSGCW1KEHkW4NfbufBTuRto6FQhjA3u3yLRMAzz71ekfGD9jgiV8GsZG7eaAWb",
  "key4": "31b2mxNQNYHNJxynf4QzVuhRAeNesj4HmzgL8DBACdBRcyc4HvNcynwZc6xQPVFoqiW5M2jTt64Zv7RN3XirXJ7h",
  "key5": "fC1jGRi9zSYN7k5Sx13xAEjeHcs6FAtLXiuf7pHuA735T3AVkh3chbT59XzNC3ZnJ2LQw21k34cxz4joU4zoCKm",
  "key6": "5XpgoXCKrYhcYfs9TGvBvLC27s2dBcpzLYgCibPaAbrF6XMMsij6SfbKgcCaQVgrM8ELSYA48w8SxPdAmZusqZ4k",
  "key7": "5my2uVNL5P5XcYEHkfiR2JrfjsE4ufoDJeVW3xupbMxReETv4g4maymxVh2py13sAZU5ama9TiBgnb8ZD8z84kgt",
  "key8": "39SZ3SfTrTfYP25ErWRqWTYBvNoyjfMhYpm89MK7kS224x1ipKbvPNu9FkBPrd5SJQ1mUzi2VRYz94YBbAaaR6kM",
  "key9": "3XXGk54XMJvaKQaTpkm79Dc4zGQVApgnYwxm1fJvdYSJrsgWVTqCv9HTm2AkgXkX7qvvEMdCAEjBdznaG1BXztfr",
  "key10": "5w9yFiUhDtPN7KJ2etACtzuvFj6dDTnDvb2rtdNhLaV3CWHrkt4ELhWa6K5BYaWocu7PW4SBGX4xgUnuF6UW2V5i",
  "key11": "X9V9w3yBUXtfQLFNBzY9Rjd9a44P59fizYd1owNEuC4PGJ4SJyVEKtJ5c81yzqfSiccCPbAbizzncqqR1vwSuMJ",
  "key12": "9cnYWuZHRQBXmPogRcKSPvoPPnTZeniZLVrwZxGZqDpYbXCv81XgPDyUDKfqp2JHPf4jXKiwuRKqoHGHwxQ4Fy8",
  "key13": "3tVH4pLAvM8mXq7byiiegCLjsdJdsEvWnqtK6yeRvpUx7rcdEb44Pbh4oF9jEaTaW12wyE3UTQBYrTLNKooznAZ9",
  "key14": "3YRBVHgUGcDwiUKVXQiZoVhuRVwgVQ8p3s1TmneBxNED12zAvLNXap8BTYeuBcbhi7ADSzp5jtHpHwvWdLMfzwQ8",
  "key15": "66oTNtAQAFfYHqoHArTyw2QRBvRPMYBmV9xD7MZcUdFPapa5kLo7Y6RwiPGD9i4sU9M1FHsye41CYAXkdb4QgR97",
  "key16": "55qVBNHsnGsc9oWFBJJbhX6Q53YPqxBfw3fRqyyUtE7SiqzKhaPqUQXdwMDBcnne5XCYaygeUmpYdDMtKxBcWs4e",
  "key17": "2etyX6Y97qjmfiS2uu4mrCJUnh3UGtp28b37vXTRXDA3oaRQsEjpcytVHwZGxuWJj6KVH7UGtBDNXRzSkSpud9Av",
  "key18": "3offCMrmtgfoBf4jGJNYisXy4uRvgBfZa3x3ZvGdf8v6JXqQzyBg9p2c4yuRXwJhearKY6ye3fXFCPS5JEFVsenm",
  "key19": "3o4HTZaFwhzw6zzubYDFrNMdrweZkUZynBGHstoahfEGFbKQzXZx47UiJK5qGYEvhqPgMhurKUiBjiFeAnuap2Gr",
  "key20": "3jUPgTmH7fsjFcASUWA2JhTshXotxbjmrnNoCgJeJGGWgrY3tPPtsUQDXDe5ke3dDwyRu1XDc5zsdAJ7oWEstu7i",
  "key21": "4f2s6AufDCixgFahkLQqsjcwcAMT2w6kk8drmA5YC2zoTkgW4mRCtcqrzeEuU7Dppj5xPiRmCF2X2XJsNYrJTHvp",
  "key22": "2SwVfBtHhYgHDUpBeL4GTrwKxaVeYYrk9PWnHCxX8VgUwVrV6bmAVUzsezKbQg7kvTq5WPi3m9nW3Q3uHr3pnCMr",
  "key23": "5kqL5C8do95neHZ6zKz4wYNG265MUkKbyrBi4CkjZD6GrTpTjd96YNwujnWn8wRvxhbhnCckEUSjTCyqe8fQ6DHQ",
  "key24": "wUZ4NyGZL7muEMnrQdXr1oBCxNYPyx2eZXa381mzRskYmjbh7xuAPnuFiK5s6aL2ymdEa3VKQ4f47KEFnX71q5u",
  "key25": "2bC4U5KTDRfqWmX3j1hE5gPfHzS3XdiSdBfp7ndNaxbAXjZWy6BpF7khQb5Gf3s9xNGeDSz8YqZZn9UCMd4cPb4S",
  "key26": "fqofvCKQYZPZHJL1LQYoKZMB2c3zZnJC3ZvwPPTs4jGCPXm1LtY1vq7LshzrWVtMMjQLsqGe5zrvmUrLUJSn3kf",
  "key27": "46vfLdkUgcdZ4xFaCdpkyx7YqqBiw8fywzZpk9pr9AA7uihwoj3pK7P2VNpYQ3oSmB4rPHwwS7b1jaMHEa1UAuQQ",
  "key28": "XzFzKXzNCU4ooMhEhVKodCwbM7dHGvd2P1tATyvj4DFfAWat7RcE124kKLJ5NS4rW7WFVFVg3Q453stS741a5HM",
  "key29": "5ZwvZJh8EWtvQ2txb1dqjmACuoAkviXnb3mtdXD17vnu6Wav7TAsA3wA2TYRszkiCd5eA2RmKdG9U41iqkPrQKnh",
  "key30": "4NLx7qBkBUDom5ADYhnJtKU9Afks4cgvJRKwsD7UPaGo9isEeLJ8Aaq6n6UeskmYbsj2MkAeQ2brCriYvDC1jZBj",
  "key31": "4nyWV2DBnUgP1Yfk2A4f7JZ58npogGCJHgeuhsjrTPxYLNAkBjyEVPKFPmsbP4XXkRLQgG9zkpiky42oG59HrtxA",
  "key32": "3tW9BwKUW536tsWZZc9MbEZ5CDVnqtRBDxd66PkwojajJL4HcvYSaztqnbx8GZ4AGxfhTAQoey7Z5djGuCbC7Ac7",
  "key33": "37txE5P9JEXkyKUQqfR5oaQiEteaUEMRRi82B1gJCpNjgqjWLKsjPXLjKji3DAFFhZ4tujW5Toriz4KenmXCcmdG",
  "key34": "iwGUwvLBkThTcpsoLPnKCQWWkp8YycBbqVdX7KJMSKuuDM8NWFYDXiqpQJmmQSM2uQx2vSqob7QeZiqFjpokXPR",
  "key35": "tdJZX5nunbcXnQKiAsq1P5sdMKkGjytMp3TR9bM9vESwNSNuvve4ECPxjPHWbWEcC9Cw2Ga6dB8gPS5z9RaHvji",
  "key36": "287BntAgx4qVwSsLFCU95ZkU7pd8jhWg9JAqH5pcsGiVHzv6gpQZ7qBRA6Q4AFtfbnrJZAxXTr2PG9mmJUR33ukw",
  "key37": "2rDtmkCaySi6AgJUwkh3aXeYbdRio3jhAsnap1eH9WExy9FkaSFPHYTw4EyvFjNWgN2SvH2nTSPsirw7tzyHzZ3n",
  "key38": "5s6fQJfHH7q1TTSgEHBMNr5FsEtRsyg2rkapCuWuT11M6qPqAvFouGFWPGsEhqsj1bwk2XqiGJR5PQumZbnonrG9",
  "key39": "2iCWnyU6wEyXUEuH4eeJJogdf38fRLgRwxwAhN26PPBz7s1B66BYYDb6oq4dfcvjpHiB6ZxKT1CDr5xXW24Eb5MJ",
  "key40": "38nUjDgZdWMhELugUUG5n3fqCXtZWDrKKUsDq4MQVGCiWHVSDZwRM27ghCfY1ube7EYt4LQLQKYTTKC2vFyQynXM"
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
